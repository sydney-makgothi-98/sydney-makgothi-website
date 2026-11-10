// Mini project 4: turn a two-wheeled robot to a heading with P and PD control.
#include <cmath>
#include <cstdio>
#include <algorithm>

struct Result { double overshootPct, settle; };

Result turnTo(double target, double kp, double kd) {
  const double track = 0.193, dt = 0.001, tau = 0.15, vmax = 0.40;   // wheel speed follows its command with a lag of 0.15 s
  double yaw = 0, vl = 0, vr = 0, peak = 0, settle = 0;
  for (int i = 0; i < 10000; i++) {
    double om = (vr - vl) / track;                                    // turning rate
    double u = std::min(1.0, std::max(-1.0, kp * (target - yaw) - kd * om));   // command in -1..1
    vr += (u * vmax - vr) / tau * dt;  vl += (-u * vmax - vl) / tau * dt;     // turn on the spot: wheels opposite
    yaw += om * dt;
    peak = std::max(peak, yaw);
    if (std::fabs(yaw - target) > 0.03 * target) settle = i * dt;     // last time we were more than 3 % away
  }
  return {std::max(0.0, (peak - target) / target * 100), settle};
}

int main() {
  double target = 3.14159265 / 2;                                     // 90 degrees
  Result a = turnTo(target, 2.0, 0.0), b = turnTo(target, 2.0, 0.5), c = turnTo(target, 2.0, 1.0);
  std::printf("P  (Kp 2, Kd 0)  : overshoot %5.1f %%, settled within 3 %% after %.2f s\n", a.overshootPct, a.settle);
  std::printf("PD (Kp 2, Kd 0.5): overshoot %5.1f %%, settled within 3 %% after %.2f s\n", b.overshootPct, b.settle);
  std::printf("PD (Kp 2, Kd 1.0): overshoot %5.1f %%, settled within 3 %% after %.2f s\n", c.overshootPct, c.settle);
  return 0;
}
