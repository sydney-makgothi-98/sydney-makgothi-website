// Building Patrick, stage 8 and stage 9: the finished program, patrick_mission.cpp. Stage 8 is a plain run; stage 9 adds --pause-at and --resume-at.
// ============================================================================================================================
//  patrick_mission.cpp  -  Patrick's breakfast run, the whole motion, in one file.
//
//  This is the program that animates the robot on the website. It simulates, 1000 times a second:
//    the two gear motors (voltage -> current -> torque), the tyres (slip -> grip force), the arm and claw servos,
//    the ultrasonic sensor, and the controller that decides what to do next.
//  Its output is a table (CSV) of where Patrick is, how his arm is angled, and what he is holding, every 10 ms.
//  The web page runs the same controller and the same equations in JavaScript (mission.js + model.js) and draws every row
//  it computes; both versions were run side by side and agree to rounding error (see "Checking it" at the bottom).
//
//  Build and run (any C++17 compiler):
//      g++ -O2 -std=c++17 patrick_mission.cpp -o patrick
//      ./patrick                         > run.csv      # the default run: 70 % throttle, rubber bands on
//      ./patrick --duty 1.0 --bands 0    > run.csv      # full throttle on bare plastic wheels
//      ./patrick --pause-at 20 --resume-at 23           # soft-stop at t = 20 s, move off again at t = 23 s
//
//  Coordinates: x forward, z to Patrick's left, y up, metres. yaw is the heading in radians, counter-clockwise from +x.
// ============================================================================================================================
#include <algorithm>
#include <cmath>
#include <cstdio>
#include <cstdlib>
#include <cstring>
#include <string>
#include <vector>

static const double PI = 3.14159265358979323846;
static const double D2R = PI / 180.0;
static const double GRAV = 9.80665;
static double clampd(double x, double a, double b) { return std::min(b, std::max(a, x)); }
static double sgn(double x) { return x > 0 ? 1.0 : (x < 0 ? -1.0 : 0.0); }

// ---------------------------------------------------------------------------------------------------------------- the robot
struct Robot {
  double wheelR = 0.0325;                 // 65 mm TT wheel
  double bandT = 0.0013;                  // rubber band thickness, added to the rolling radius
  double track = 0.193;                   // wheel centre to wheel centre
  double casterX = 0.125;                 // the front ball caster, ahead of the drive axle
  double mBase = 0.55, xBase = 0.035;     // everything except the arm: kg, and its centre of mass ahead of the axle
  double mArm = 0.085;
  double sensorX = 0.145;                 // the ultrasonic sensor, ahead of the axle
  double pivotX = -0.045, pivotY = 0.085; // arm pivot
  double armLen = 0.24, armAttach = 0.05;
  double servoX = 0.09, servoY = 0.04, horn = 0.05, rod = 0.135;   // lift servo shaft, horn radius, push-rod length
  double gripLen = 0.085;
} R;

struct Motor {                            // the yellow TT gear motor (1:48), seen at the gearbox output
  double Vbat = 6.0, Vdrop = 1.4;         // 4 x AA cells, and the two saturation drops of the L298N H-bridge
  double Rm = 6.0, I0 = 0.19, ke = 0.2326, etaG = 0.55, J = 4.0e-4;
  double tauF = 0;                        // friction torque
} MOT;

struct MotorOut { double I, tau, Pel, Pmech; };
// Motor at terminal voltage V and output speed w: current, shaft torque and powers.
static MotorOut motor(double V, double w) {
  double I = (V - MOT.ke * w) / MOT.Rm;
  double fric = (std::fabs(w) > 0.05 || std::fabs(V) > 0.3) ? 1.0 : 0.0;
  double tau = MOT.etaG * MOT.ke * I - sgn(w != 0 ? w : V) * MOT.tauF * fric;
  return {I, tau, V * I, tau * w};
}
static double supplyV(double duty) { return duty * (MOT.Vbat - MOT.Vdrop); }

// ------------------------------------------------------------------------------------------------------------------ tyres
// Peak friction coefficient: bare hard plastic is slippery (0.22); wrapped in rubber bands it grips (1.0). 'k' is the surface.
static double muPeak(bool bands, double k) { return (bands ? 1.0 : 0.22) * k; }
// Brush-style friction curve: rises to its peak near 17 % slip, settles to about 80 % of the peak when the wheel just spins.
static double mu(double s, double peak) { return peak * std::sin(1.5 * std::atan(10.0 * s)); }

struct ComOut { double m, x, drive; };
// Centre of mass and the share of the weight that sits on the drive axle, for an arm angle and a payload (kg).
static ComOut com(double theta, double payload) {
  double ax = R.pivotX + 0.6 * R.armLen * std::cos(theta);
  double tx = R.pivotX + R.armLen * std::cos(theta) + 0.5 * R.gripLen;
  double m = R.mBase + R.mArm + payload;
  double x = (R.mBase * R.xBase + R.mArm * ax + payload * tx) / m;
  return {m, x, clampd((R.casterX - x) / R.casterX, 0.05, 1.0)};
}

// ------------------------------------------------------------------------------------------------------------- arm linkage
// Lift servo angle phi -> arm angle theta, by intersecting two circles (the horn's pin and the arm's attachment point).
struct ArmOut { bool ok; double theta; };
static ArmOut armSolve(double phi) {
  double Hx = R.servoX + R.horn * std::cos(phi), Hy = R.servoY + R.horn * std::sin(phi);
  double dx = Hx - R.pivotX, dy = Hy - R.pivotY, dd = std::hypot(dx, dy);
  double a = R.armAttach, L = R.rod;
  if (dd > a + L || dd < std::fabs(L - a)) return {false, 0};
  double k = (a * a - L * L + dd * dd) / (2 * dd), h = std::sqrt(std::max(0.0, a * a - k * k));
  double ux = dx / dd, uy = dy / dd;
  double c1x = R.pivotX + k * ux - h * uy, c1y = R.pivotY + k * uy + h * ux;
  double c2x = R.pivotX + k * ux + h * uy, c2y = R.pivotY + k * uy - h * ux;
  double Ax = c2y > c1y ? c2x : c1x, Ay = c2y > c1y ? c2y : c1y;      // the elbow-up solution
  return {true, std::atan2(Ay - R.pivotY, Ax - R.pivotX)};
}
static void armTip(double theta, double& x, double& y) { x = R.pivotX + R.armLen * std::cos(theta); y = R.pivotY + R.armLen * std::sin(theta); }

static const double STOP_AT = 0.108;                       // the sonar reading that makes the controller brake, m
static const double PHI_STOW = 74 * D2R, PHI_CARRY = 46 * D2R, PHI_LOW = 18.4 * D2R;
static const double GRIP_H = 0.0225;                       // the claw holds each item this far above its base, m
static const double SENSOR_BEAM = 15 * D2R, SONAR_MAX = 4.0;

// ----------------------------------------------------------------------------------------------------------------- kitchen
struct Item { const char* name; double w, m; };            // width across the claw, mass
static const Item ITEMS[5] = {{"eggs", 0.034, 0.045}, {"salt", 0.036, 0.055}, {"spice", 0.038, 0.050}, {"sauce", 0.040, 0.080}, {"glass", 0.042, 0.060}};
static const int NITEM = 5;
static const double LANES[5] = {-0.50, -0.25, 0.0, 0.25, 0.50};   // one lane per ingredient (z, to the left)
static const double PANTRY_X = 0.60, KITCHEN_X = -0.62;           // centre lines of the pantry pads and of the breakfast spots
static const double PAD_HX = 0.04, PAD_HZ = 0.04;
static const double START_X = -0.05, START_Z = -0.50;
static const double RETREAT = 0.14;

// Jaw opening (0 closed .. 1 fully open) at which the fingers touch an item of the given width.
static double jawFor(double w) { return std::asin(clampd((w / 2 - 0.0165) / 0.036, 0, 1)) / (28 * D2R); }

struct Box { double x, z, hx, hz; };
static std::vector<Box> BOXES;                                    // what the sonar can see: every pad and every breakfast spot

// Where a ray from (ox,oz) in direction (dx,dz) first enters a box (distance in the ray's own units), or infinity.
static double rayBox(double ox, double oz, double dx, double dz, const Box& b) {
  double t0 = 0, t1 = 1e9;
  double os[2] = {ox, oz}, ds[2] = {dx, dz}, lo[2] = {b.x - b.hx, b.z - b.hz}, hi[2] = {b.x + b.hx, b.z + b.hz};
  for (int i = 0; i < 2; i++) {
    if (std::fabs(ds[i]) < 1e-9) { if (os[i] < lo[i] || os[i] > hi[i]) return INFINITY; }
    else {
      double a = (lo[i] - os[i]) / ds[i], c = (hi[i] - os[i]) / ds[i];
      if (a > c) std::swap(a, c);
      t0 = std::max(t0, a); t1 = std::min(t1, c);
      if (t0 > t1) return INFINITY;
    }
  }
  return t0;
}
// What the ultrasonic sensor reads: the nearest surface in a narrow cone ahead (five rays, 6 degrees apart), metres.
static double sonarRead(double x, double z, double yaw) {
  double ox = x + std::cos(yaw) * R.sensorX, oz = z + std::sin(yaw) * R.sensorX, best = SONAR_MAX;
  for (int i = -2; i <= 2; i++) {
    double a = yaw + i * 6 * D2R, dx = std::cos(a), dz = std::sin(a);
    for (const Box& b : BOXES) { double t = rayBox(ox, oz, dx, dz, b); if (t < best) best = t; }
    if (dx > 1e-6) { double t = (1.10 - ox) / dx; if (t > 0 && t < best) best = t; }   // the far wall of the arena at x = 1.10
  }
  return best;
}

// --------------------------------------------------------------------------------------------------------- one drive side
struct Side { bool bands = true; double w = 0, v = 0, slip = 0, F = 0, tau = 0, Pm = 0, I = 0, Pel = 0, rEff = 0; };
// One side of the robot (one wheel, half the mass) advanced by dt.
// The tyre's grip changes very fast with slip at low speed, so one 1 ms step is too coarse (the wheel would chatter): take four.
static void sideStep(Side& s, double V, bool shorted, double N, double peak, double dt, double mass) {
  double rEff = R.wheelR + (s.bands ? R.bandT : 0);
  const int n = 4; double h = dt / n;
  double sl = 0, F = 0, tau = 0;
  for (int k = 0; k < n; k++) {
    double slipDen = std::max({std::fabs(s.w * rEff), std::fabs(s.v), 0.02});
    sl = (s.w * rEff - s.v) / slipDen;                            // slip ratio: 0 = pure rolling, 1 = wheel spinning in place
    F = N * mu(sl, peak);                                         // the grip force the tyre passes to the table
    if (shorted) tau = -MOT.etaG * MOT.ke * MOT.ke * s.w / MOT.Rm - sgn(s.w) * MOT.tauF * (std::fabs(s.w) > 0.05 ? 1.0 : 0.0);   // terminals shorted: electrical brake
    else tau = motor(V, s.w).tau;
    double roll = 0.03 * N * (std::fabs(s.v) > 0.003 ? sgn(s.v) : s.v / 0.003);      // rolling resistance
    s.w += (tau - F * rEff) / MOT.J * h;                          // the wheel: motor torque against the tyre's reaction
    s.v += (F - roll) / mass * h;                                 // the robot: grip force minus rolling resistance
  }
  s.slip = sl; s.F = F; s.tau = tau; s.Pm = shorted ? 0 : std::max(0.0, tau * s.w);
  MotorOut m = shorted ? MotorOut{0, 0, 0, 0} : motor(V, s.w);
  s.I = shorted ? 0 : m.I; s.Pel = shorted ? 0 : m.Pel; s.rEff = rEff;
}

// ---------------------------------------------------------------------------------------------------------- the controller
enum Phase { IDLE, APPROACH, BRAKE, REACH, GRIP, LIFT, TURN_CARRY, SETTLE_C, CARRY, BRAKE_C, PLACE, RETREAT_P,
             TURN_SHIFT, SETTLE_T, SHIFT, SETTLE_S, TURN_PANTRY, SETTLE_P, DONE };

struct Placed { int state = 0; double x = 0, z = 0, y = 0, yaw = 0; };   // 0 on the pantry pad, 1 in the claw, 2 on the breakfast table

struct Mission {
  double duty = 0.7, peak = 1.0, dt = 0.001;
  bool bands = true;
  Side L, Rr;
  double x = START_X, z = START_Z, yaw = 0, wl = 0, wr = 0, t = 0, phi = PHI_STOW, jaw = 0;
  bool held = false;
  Phase phase = IDLE; double phaseT = 0;
  int item = 0; double yawRef = 0, startX = 0, startZ = 0, energy = 0, armTarget = PHI_STOW, jawTarget = 0, theta = 0;
  long tick = 0;
  double g = 0, goal = 0;                          // "go" gain: 1 = running, 0 = halted. It ramps, so every stop is gradual.
  Placed items[NITEM];
  double sonar = 4, Pel = 0, Pm = 0, I = 0;
  bool finished = false;

  Mission(double d, bool b) : duty(d), bands(b) {
    peak = muPeak(b, 1.0); L.bands = Rr.bands = b;
    for (int i = 0; i < NITEM; i++) { items[i].x = PANTRY_X; items[i].z = LANES[i]; items[i].y = 0.025; }
  }
  void go(Phase p) { phase = p; phaseT = 0; }
  void start() { goal = 1; }
  void pause()  { goal = 0; }
  void resume() { goal = 1; }
  double ge() const { return g * g * (3 - 2 * g); }   // eased go-gain: the very start and end of a stop are gentle too

  // One tick (1 ms). Returns false while the robot is halted and nothing moves.
  bool step() {
    // the go-gain slews towards its goal: 0.6 s to resume, 0.8 s to pause
    double rate = goal > g ? 1 / 0.6 : 1 / 0.8;
    g += clampd(goal - g, -rate * dt, rate * dt);
    if (g <= 0 && goal == 0) return false;
    double e = ge(), dtc = dt * e;                   // controller time slows with the gain: timers and servos slow down smoothly
    t += dt; phaseT += dtc;
    sonar = sonarRead(x, z, yaw);
    const Item& it = ITEMS[item];
    double uL = 0, uR = 0; bool shortIt = false;
    auto ramp = [&](double T) { return clampd(phaseT / T, 0, 1); };
    auto hold = [&]() {                              // steer to the reference heading while driving straight
      double om = (Rr.v - L.v) / R.track, s = clampd(2.5 * (yawRef - yaw) - 0.35 * om, -0.15, 0.15);
      uR += s; uL -= s;
    };
    auto turn = [&](Phase nextPhase) {               // PD on heading, ease off, hold
      double err = yawRef - yaw, om = (Rr.v - L.v) / R.track;
      double u = clampd(3.0 * err - 0.4 * om, -0.6, 0.6);
      if (std::fabs(u) < 0.35) u = 0.35 * sgn(err);   // below this the gearmotor only hums against stiction
      uR = u * ramp(0.25); uL = -uR;
      if (std::fabs(err) < 3 * D2R && std::fabs(om) < 0.35) go(nextPhase);
    };
    auto settled = [&]() { return std::fabs(L.v) + std::fabs(Rr.v) < 0.006 || phaseT > 1.2; };

    switch (phase) {
      case IDLE:        if (phaseT > 0.9) go(APPROACH); break;
      case APPROACH:    uL = uR = duty * ramp(0.35); hold(); if (sonar <= STOP_AT) go(BRAKE); break;
      case BRAKE:       shortIt = true; if (settled()) { go(REACH); armTarget = PHI_LOW; jawTarget = 1; } break;
      case REACH:       shortIt = true; if (phaseT > 1.5) go(GRIP); break;
      case GRIP:        shortIt = true;
                        if (phaseT > 0.35) jawTarget = jawFor(it.w);
                        if (phaseT > 1.1) { held = true; items[item].state = 1; go(LIFT); armTarget = PHI_CARRY; } break;
      case LIFT:        shortIt = true; if (phaseT > 1.3) { go(TURN_CARRY); yawRef += PI; } break;
      case TURN_CARRY:  turn(SETTLE_C); break;
      case SETTLE_C:    shortIt = true; if (phaseT > 0.5) go(CARRY); break;
      case CARRY:       uL = uR = duty * ramp(0.35); hold(); if (sonar <= STOP_AT) go(BRAKE_C); break;
      case BRAKE_C:     shortIt = true; if (settled()) { go(PLACE); armTarget = PHI_LOW; } break;
      case PLACE:       shortIt = true;
                        if (phaseT > 1.5 && held) { jawTarget = 1; held = false; items[item].state = 2; items[item].y = 0.025 + 0.004; }   // let go
                        if (phaseT > 2.4) { armTarget = PHI_STOW; jawTarget = 0; go(RETREAT_P); startX = x; startZ = z; } break;
      case RETREAT_P:   uL = uR = -0.5 * ramp(0.2); hold();
                        if (std::hypot(x - startX, z - startZ) >= RETREAT) {
                          if (item == NITEM - 1) go(DONE); else { go(TURN_SHIFT); yawRef -= PI / 2; }
                        } break;
      case TURN_SHIFT:  turn(SETTLE_T); break;
      case SETTLE_T:    shortIt = true; if (phaseT > 0.4) go(SHIFT); break;
      case SHIFT: {     // drive along the table to the next lane, slowing as the gap closes
                        double rem = LANES[item + 1] - z;
                        uL = uR = std::max(0.4, duty * clampd(rem / 0.12, 0, 1)) * ramp(0.3); hold();
                        if (rem < 0.004) go(SETTLE_S);
                        break; }
      case SETTLE_S:    shortIt = true; if (settled()) { go(TURN_PANTRY); yawRef -= PI / 2; } break;
      case TURN_PANTRY: turn(SETTLE_P); break;
      case SETTLE_P:    shortIt = true; if (phaseT > 0.5) { item++; go(APPROACH); } break;
      case DONE:        shortIt = true; break;
    }
    uL *= e; uR *= e;                                // every drive command is scaled by the soft-stop gain
    // the arm and claw servos move at their own rate towards their targets; the gain slows them too
    phi += clampd(armTarget - phi, -60 * D2R * dtc, 60 * D2R * dtc);
    jaw += clampd(jawTarget - jaw, -90 * D2R * dtc / 0.6, 90 * D2R * dtc / 0.6);
    ArmOut sol = armSolve(phi); theta = sol.ok ? sol.theta : 1.0;
    ComOut cm = com(theta, held ? it.m : 0.0);
    double N = 0.5 * cm.drive * cm.m * GRAV, mass = 0.5 * cm.m;
    sideStep(L,  shortIt ? 0 : supplyV(uL), shortIt, N, peak, dt, mass);
    sideStep(Rr, shortIt ? 0 : supplyV(uR), shortIt, N, peak, dt, mass);
    double v = 0.5 * (L.v + Rr.v), om = (Rr.v - L.v) / R.track;
    yaw += om * dt; x += v * std::cos(yaw) * dt; z += v * std::sin(yaw) * dt;
    wl += L.w * dt; wr += Rr.w * dt;
    Pel = L.Pel + Rr.Pel; Pm = L.Pm + Rr.Pm; I = L.I + Rr.I;
    energy += (Pel + 0.12 * MOT.Vbat) * dt;
    if (held) {                                      // the item rides in the claw
      double tx, ty; armTip(theta, tx, ty); double gx = tx + 0.072;
      Placed& q = items[item]; q.x = x + std::cos(yaw) * gx; q.z = z + std::sin(yaw) * gx; q.y = ty - 0.012 - GRIP_H; q.yaw = yaw;
    }
    tick++;
    if (phase == DONE && phaseT > 2.0) { finished = true; goal = 0; g = 0; }
    return true;
  }
};

// ------------------------------------------------------------------------------------------------------------------- main
int main(int argc, char** argv) {
  double duty = 0.7, pauseAt = -1, resumeAt = -1; bool bands = true; const char* out = nullptr;
  for (int i = 1; i < argc; i++) {
    if (!std::strcmp(argv[i], "--duty") && i + 1 < argc) duty = std::atof(argv[++i]);
    else if (!std::strcmp(argv[i], "--bands") && i + 1 < argc) bands = std::atoi(argv[++i]) != 0;
    else if (!std::strcmp(argv[i], "--pause-at") && i + 1 < argc) pauseAt = std::atof(argv[++i]);
    else if (!std::strcmp(argv[i], "--resume-at") && i + 1 < argc) resumeAt = std::atof(argv[++i]);
    else if (!std::strcmp(argv[i], "--out") && i + 1 < argc) out = argv[++i];
  }
  MOT.tauF = MOT.etaG * MOT.ke * MOT.I0;
  for (int i = 0; i < NITEM; i++) { BOXES.push_back({PANTRY_X, LANES[i], PAD_HX, PAD_HZ}); BOXES.push_back({KITCHEN_X, LANES[i], PAD_HX, PAD_HZ}); }

  FILE* f = out ? std::fopen(out, "w") : stdout;
  std::fprintf(f, "t,x,z,yaw,arm_servo,jaw,phase,item,holding,power_W,energy_J,sonar_m,go_gain\n");
  Mission m(duty, bands);
  m.start();
  double wall = 0;                                   // wall-clock time of the run, counting the halted time too
  for (long k = 0; k < 600000 && !m.finished; k++, wall += m.dt) {
    if (pauseAt >= 0 && wall >= pauseAt && wall < pauseAt + 1e-9 + m.dt) m.pause();
    if (resumeAt >= 0 && wall >= resumeAt && wall < resumeAt + 1e-9 + m.dt) m.resume();
    bool moved = m.step();
    if (moved && (m.tick - 1) % 10 == 0)
      std::fprintf(f, "%.6f,%.6f,%.6f,%.6f,%.6f,%.6f,%d,%d,%d,%.6f,%.6f,%.6f,%.4f\n", m.t, m.x, m.z, m.yaw, m.phi, m.jaw, (int)m.phase, m.item, m.held ? 1 : 0, m.Pel, m.energy, m.sonar, m.g);
  }
  std::fprintf(stderr, "finished at t = %.2f s; items on the table:", m.t);
  for (int i = 0; i < NITEM; i++) std::fprintf(stderr, " %s(%.3f,%.3f)", ITEMS[i].name, m.items[i].x, m.items[i].z);
  std::fprintf(stderr, "\n");
  if (out) std::fclose(f);
  return 0;
}

// ---------------------------------------------------------------------------------------------------------- Checking it
// The same run in JavaScript (the page's mission.js) was written to a CSV with identical columns and compared row by row
// with this program's output: every row has the same phase, item and holding state, and the positions agree to < 1e-6 m.
