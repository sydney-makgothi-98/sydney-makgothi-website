// Building Patrick, stage 6: the arm: two circles meeting, and the claw
// Compile: g++ -O2 -std=c++17 stage6.cpp -o stage6
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

int main() {
  std::printf("servo angle -> arm angle -> arm tip (x forward, y up)\n");
  for (double deg = 0; deg <= 80; deg += 10) {
    ArmOut a = armSolve(deg * D2R);
    if (!a.ok) { std::printf("%4.0f deg: the linkage jams\n", deg); continue; }
    double tx, ty; armTip(a.theta, tx, ty);
    std::printf("%4.0f deg -> %6.1f deg -> (%.3f, %.3f) m\n", deg, a.theta / D2R, tx, ty);
  }
  const struct { const char* n; double phi; } poses[] = {{"STOW", PHI_STOW}, {"CARRY", PHI_CARRY}, {"LOW", PHI_LOW}};
  for (auto& p : poses) { ArmOut a = armSolve(p.phi); double tx, ty; armTip(a.theta, tx, ty); std::printf("%-5s servo %.1f deg: arm %.1f deg, tip height %.3f m\n", p.n, p.phi / D2R, a.theta / D2R, ty); }
  for (int i = 0; i < NITEM; i++) std::printf("%-5s width %.0f mm -> jaw closes to %.3f of its range\n", ITEMS[i].name, ITEMS[i].w * 1000, jawFor(ITEMS[i].w));
  return 0;
}
