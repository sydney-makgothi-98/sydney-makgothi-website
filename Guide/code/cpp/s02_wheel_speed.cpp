#include <cmath>
#include <cstdio>

const double PI = 3.14159265358979323846;

// Robot speed in m/s from wheel rpm and wheel radius in metres.
double speedFromRpm(double rpm, double radius) {
  double omega = rpm * 2.0 * PI / 60.0;       // rad/s
  return omega * radius;                       // v = omega r
}

int main() {
  const double wheelR = 0.0325;               // Patrick's 65 mm wheels
  for (int rpm = 0; rpm <= 100; rpm += 25)
    std::printf("%3d rpm -> %.3f m/s\n", rpm, speedFromRpm(rpm, wheelR));
  return 0;
}
