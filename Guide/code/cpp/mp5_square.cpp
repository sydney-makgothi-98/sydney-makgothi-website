// Mini project 5: drive a 1 m square by dead reckoning, and see how a 1 % wheel error ruins it.
#include <cmath>
#include <cstdio>
#include <initializer_list>

struct Pose { double x = 0, z = 0, yaw = 0; };

Pose drive(double rightScale) {
  const double track = 0.193, v = 0.3, dt = 0.001, L = 1.0, turnRate = 1.0;
  Pose p; enum {FORWARD, TURN} state = FORWARD; double travelled = 0, turned = 0; int side = 0;
  for (int i = 0; i < 100000 && side < 4; i++) {
    double vl, vr;
    if (state == FORWARD) { vl = v; vr = v * rightScale; } else { vl = -0.5 * turnRate * track; vr = 0.5 * turnRate * track * rightScale; }
    double fwd = 0.5 * (vl + vr), om = (vr - vl) / track;
    p.yaw += om * dt; p.x += fwd * std::cos(p.yaw) * dt; p.z += fwd * std::sin(p.yaw) * dt;
    // the controller only knows what it COMMANDED, not what happened: it counts time and speed, like dead reckoning
    if (state == FORWARD) { travelled += v * dt; if (travelled >= L) { state = TURN; travelled = 0; turned = 0; } }
    else { turned += turnRate * dt; if (turned >= 3.14159265358979 / 2) { state = FORWARD; side++; } }
  }
  return p;
}

int main() {
  for (double s : {1.0, 1.01}) {
    Pose p = drive(s);
    std::printf("right wheel x%.2f: ends at (%.3f, %.3f) m, heading %.1f deg, %.3f m from the start\n", s, p.x, p.z, p.yaw * 180 / 3.14159265, std::hypot(p.x, p.z));
  }
  return 0;
}
