#include <cstdio>
#include <cmath>
#include <algorithm>

double clampd(double x, double a, double b) { return std::min(b, std::max(a, x)); }
double lerp(double a, double b, double t) { return a + (b - a) * t; }            // blend from a to b as t goes 0..1
int square(int x) { return x * x; }
double square(double x) { return x * x; }                                        // overloading: same name, different types
double power(double base, int exp = 2) { return std::pow(base, exp); }           // default argument

void swapValues(double& a, double& b) { double t = a; a = b; b = t; }            // reference: changes the caller's variables
double lengthOf(const double (&v)[3]) { return std::sqrt(v[0]*v[0] + v[1]*v[1] + v[2]*v[2]); }   // const reference to an array

int counter = 0;                                                                 // a global: avoid these
void tick() { static int calls = 0; calls++; counter += calls; }                 // static: remembered between calls

int main() {
  std::printf("clampd(1.7, 0, 1) = %.1f   clampd(-3, 0, 1) = %.1f\n", clampd(1.7, 0, 1), clampd(-3, 0, 1));
  std::printf("lerp(10, 20, 0.25) = %.2f\n", lerp(10, 20, 0.25));
  std::printf("square(4) = %d, square(1.5) = %.2f\n", square(4), square(1.5));
  std::printf("power(3) = %.0f, power(2, 10) = %.0f\n", power(3), power(2, 10));
  double a = 1, b = 2; swapValues(a, b); std::printf("after swap: a=%.0f b=%.0f\n", a, b);
  double v[3] = {3, 4, 12}; std::printf("length of (3,4,12) = %.0f\n", lengthOf(v));
  tick(); tick(); tick(); std::printf("counter after three ticks = %d\n", counter);
  return 0;
}
