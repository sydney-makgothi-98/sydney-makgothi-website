// Building Patrick, stage 3: two wheels: speed, turning, and where the robot is
// Compile: g++ -O2 -std=c++17 stage3.cpp -o stage3
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

// Differential drive: the average of the wheel speeds is the forward speed, their difference over the track is the turning rate.
int main() {
  MOT.tauF = MOT.etaG * MOT.ke * MOT.I0;
  const double mass = 0.5 * (R.mBase + R.mArm), N = 0.5 * 0.72 * (R.mBase + R.mArm) * GRAV, dt = 0.001, peak = muPeak(true, 1.0);
  for (int test = 0; test < 2; test++) {
    Side L, Rr; L.bands = Rr.bands = true;
    double x = 0, z = 0, yaw = 0;
    for (int i = 0; i < 2000; i++) {
      double ramp = clampd(i * dt / 0.35, 0, 1), uL = test == 0 ? 0.7 * ramp : -0.5 * ramp, uR = 0.7 * ramp * (test == 0 ? 1 : 0.7143);
      sideStep(L, supplyV(uL), false, N, peak, dt, mass); sideStep(Rr, supplyV(uR), false, N, peak, dt, mass);
      double v = 0.5 * (L.v + Rr.v), om = (Rr.v - L.v) / R.track;
      yaw += om * dt; x += v * std::cos(yaw) * dt; z += v * std::sin(yaw) * dt;
    }
    std::printf("%s: after 2 s x = %.3f m, z = %.3f m, heading %.1f deg\n", test == 0 ? "both wheels forward  " : "wheels opposite (turn)", x, z, yaw * 180 / PI);
  }
  return 0;
}
