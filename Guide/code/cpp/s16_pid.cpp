#include <cstdio>
#include <algorithm>
#include <cmath>

// A PID controller as a class: u = Kp e + Ki integral(e) + Kd de/dt, with a limit on the output and on the integral (anti-windup).
class PID {
 public:
  PID(double kp, double ki, double kd, double lo, double hi) : kp_(kp), ki_(ki), kd_(kd), lo_(lo), hi_(hi) {}
  double update(double setpoint, double measured, double dt) {
    double e = setpoint - measured;
    double d = first_ ? 0.0 : (e - prev_) / dt;
    first_ = false; prev_ = e;
    double uNoI = kp_ * e + kd_ * d;
    integral_ += e * dt;
    if (ki_ > 0) integral_ = std::min(hi_ / ki_, std::max(lo_ / ki_, integral_));          // anti-windup: the integral may not demand more than the output can give
    return std::min(hi_, std::max(lo_, uNoI + ki_ * integral_));
  }
 private:
  double kp_, ki_, kd_, lo_, hi_, integral_ = 0, prev_ = 0; bool first_ = true;
};

// A cart on a hill: the motor pushes with force u (N), gravity pulls back with 1.5 N, drag 2 N s/m, mass 0.6 kg.
double run(double kp, double ki, double kd, double target, double& settle) {
  PID pid(kp, ki, kd, 0.0, 8.0);
  double v = 0, dt = 0.001; settle = -1;
  for (int i = 0; i < 20000; i++) {
    double u = pid.update(target, v, dt);
    double a = (u - 1.5 - 2.0 * v) / 0.6;
    v += a * dt;
    if (settle < 0 && std::fabs(v - target) < 0.02 * target && i > 100) settle = i * dt;
  }
  return v;
}
int main() {
  double st;
  double v1 = run(10, 0, 0, 0.5, st);   std::printf("P only      : speed after 20 s = %.4f m/s (target 0.5)\n", v1);
  double v2 = run(10, 8, 0, 0.5, st);   std::printf("PI          : speed after 20 s = %.4f m/s, within 2%% at %.2f s\n", v2, st);
  double v3 = run(10, 8, 1.0, 0.5, st); std::printf("PID (Kd = 1): speed after 20 s = %.4f m/s, within 2%% at %.2f s\n", v3, st);
  return 0;
}
