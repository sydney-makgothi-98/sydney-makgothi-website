// Building Patrick, stage 1: one motor, spinning a free wheel
// Compile: g++ -O2 -std=c++17 stage1.cpp -o stage1
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

// Spin a free wheel (inertia J) with the motor at 70 % duty and watch it reach its free speed.
int main() {
  MOT.tauF = MOT.etaG * MOT.ke * MOT.I0;
  double V = supplyV(0.7), w = 0, dt = 0.001;
  std::printf("supply %.2f V; predicted free speed %.2f rad/s\n", V, (V - MOT.I0 * MOT.Rm) / MOT.ke);
  for (int i = 0; i <= 600; i++) {
    MotorOut m = motor(V, w);
    if (i % 100 == 0) std::printf("t=%.1f s  w=%.3f rad/s  current %.3f A  torque %.4f N m\n", i * dt, w, m.I, m.tau);
    w += m.tau / MOT.J * dt;
  }
  return 0;
}
