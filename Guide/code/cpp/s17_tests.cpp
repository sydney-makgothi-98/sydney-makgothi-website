#include <algorithm>
#include <cmath>
#include <cstdio>

double clampd(double x, double a, double b) { return std::min(b, std::max(a, x)); }
double speedFromRpm(double rpm, double r) { return rpm * 2.0 * 3.14159265358979323846 / 60.0 * r; }

int failures = 0;
#define CHECK_NEAR(expr, expected, tol) do { double got = (expr); if (std::fabs(got - (expected)) > (tol)) { std::printf("FAIL line %d: %s = %g, expected %g\n", __LINE__, #expr, got, (double)(expected)); failures++; } else std::printf("ok   %s\n", #expr); } while (0)

int main() {
  CHECK_NEAR(clampd(5, 0, 1), 1, 1e-12);
  CHECK_NEAR(clampd(-5, 0, 1), 0, 1e-12);
  CHECK_NEAR(clampd(0.3, 0, 1), 0.3, 1e-12);
  CHECK_NEAR(speedFromRpm(60, 1.0), 6.283185, 1e-5);        // 60 rpm on a 1 m radius wheel: 2 pi m/s
  CHECK_NEAR(speedFromRpm(100, 0.0325), 0.340, 1e-3);
  CHECK_NEAR(speedFromRpm(0, 0.0325), 1.0, 1e-9);           // a deliberately wrong test, to see a failure
  std::printf("%d failure(s)\n", failures);
  return failures ? 1 : 0;
}
