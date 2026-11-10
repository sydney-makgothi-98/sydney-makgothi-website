// Mini project 3: a bouncing ball.  Writes ball.csv and reports the first bounces.
#include <cmath>
#include <cstdio>
#include <fstream>

int main() {
  const double g = 9.80665, e = 0.8, dt = 0.001;      // e: how much speed survives a bounce
  double y = 1.0, v = 0.0, t = 0.0, peak = 1.0;
  std::ofstream out("ball.csv"); out << "t,y\n";
  int bounces = 0; bool rising = false;
  for (int i = 0; i < 6000; i++) {
    v -= g * dt; y += v * dt; t += dt;
    if (y < 0) { y = 0; v = -v * e; bounces++; std::printf("bounce %d at t = %.3f s, then rises to ", bounces, t); peak = 0; rising = true; }
    if (rising && v > 0) peak = std::fmax(peak, y);
    if (rising && v <= 0) { std::printf("%.3f m\n", peak); rising = false; }
    if (i % 10 == 0) out << t << "," << y << "\n";
  }
  std::printf("exact: first bounce at %.3f s, first rebound height %.3f m\n", std::sqrt(2 * 1.0 / g), e * e * 1.0);
  return 0;
}
