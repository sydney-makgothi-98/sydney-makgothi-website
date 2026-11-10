#include <cmath>
#include <cstdio>

struct Vec2 {
  double x = 0, z = 0;
  Vec2 operator+(const Vec2& o) const { return {x + o.x, z + o.z}; }             // operator overloading: a + b reads like maths
  Vec2 operator*(double k) const { return {x * k, z * k}; }
  double length() const { return std::hypot(x, z); }
};

template <typename T>                                                             // a template: one function, any numeric type
T clampT(T x, T a, T b) { return x < a ? a : (x > b ? b : x); }

template <typename T>
T largest(const T* a, int n) { T m = a[0]; for (int i = 1; i < n; i++) if (a[i] > m) m = a[i]; return m; }

int main() {
  Vec2 pos{0.0, 0.0}, step{0.3, 0.4};
  for (int i = 0; i < 3; i++) pos = pos + step * 0.5;
  std::printf("after three half-steps: (%.2f, %.2f), distance from start %.3f\n", pos.x, pos.z, pos.length());
  std::printf("clampT<int>(15, 0, 10) = %d, clampT<double>(-0.5, 0, 1) = %.1f\n", clampT(15, 0, 10), clampT(-0.5, 0.0, 1.0));
  int a[] = {3, 9, 2}; double b[] = {0.5, 0.25};
  std::printf("largest int %d, largest double %.2f\n", largest(a, 3), largest(b, 2));
  return 0;
}
