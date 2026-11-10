// Building Patrick, stage 5: approach, brake, and stop where the sensor says
// Compile: g++ -O2 -std=c++17 stage5.cpp -o stage5
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

enum Phase { APPROACH, BRAKE, STOPPED };

int main() {
  MOT.tauF = MOT.etaG * MOT.ke * MOT.I0;
  for (int i = 0; i < NITEM; i++) BOXES.push_back({PANTRY_X, LANES[i], PAD_HX, PAD_HZ});
  const double mass = 0.5 * (R.mBase + R.mArm), N = 0.5 * 0.72 * (R.mBase + R.mArm) * GRAV, dt = 0.001, peak = muPeak(true, 1.0);
  Side L, Rr; L.bands = Rr.bands = true; double x = START_X, t = 0; Phase phase = APPROACH; double tBrake = 0;
  for (int i = 0; i < 8000 && phase != STOPPED; i++, t += dt) {
    double sonar = sonarRead(x, START_Z, 0.0), u = 0; bool shortIt = false;
    switch (phase) {
      case APPROACH: u = 0.7 * clampd(t / 0.35, 0, 1); if (sonar <= STOP_AT) { phase = BRAKE; tBrake = t; std::printf("t=%.2f s: sonar %.3f m <= %.3f m, BRAKE (speed %.3f m/s)\n", t, sonar, STOP_AT, 0.5 * (L.v + Rr.v)); } break;
      case BRAKE:    shortIt = true; if (std::fabs(L.v) + std::fabs(Rr.v) < 0.006 || t - tBrake > 1.2) phase = STOPPED; break;
      case STOPPED:  break;
    }
    sideStep(L, shortIt ? 0 : supplyV(u), shortIt, N, peak, dt, mass); sideStep(Rr, shortIt ? 0 : supplyV(u), shortIt, N, peak, dt, mass);
    x += 0.5 * (L.v + Rr.v) * dt;
  }
  std::printf("stopped at t=%.2f s, axle x=%.3f m, sonar now reads %.3f m (braking took %.2f s and %.1f cm)\n", t, x, sonarRead(x, START_Z, 0.0), t - tBrake, (x - (PANTRY_X - PAD_HX - R.sensorX - STOP_AT)) * 100);
  return 0;
}
