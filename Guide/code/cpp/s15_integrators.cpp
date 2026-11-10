#include <cmath>
#include <cstdio>
#include <initializer_list>

// A mass on a spring: x'' = -w^2 x, with exact answer x(t) = cos(w t). Three ways to step it.
int main() {
  const double w = 2.0, T = 10.0;
  for (double dt : {0.1, 0.01}) {
    double xe = 1, ve = 0;          // explicit Euler
    double xs = 1, vs = 0;          // semi-implicit Euler (what the robot uses)
    double xr = 1, vr = 0;          // RK4
    for (int i = 0; i < (int)(T / dt + 0.5); i++) {
      { double a = -w * w * xe; xe += ve * dt; ve += a * dt; }
      { vs += -w * w * xs * dt; xs += vs * dt; }
      { auto f = [&](double x, double v, double& dx, double& dv) { dx = v; dv = -w * w * x; };
        double k1x, k1v, k2x, k2v, k3x, k3v, k4x, k4v;
        f(xr, vr, k1x, k1v); f(xr + 0.5 * dt * k1x, vr + 0.5 * dt * k1v, k2x, k2v);
        f(xr + 0.5 * dt * k2x, vr + 0.5 * dt * k2v, k3x, k3v); f(xr + dt * k3x, vr + dt * k3v, k4x, k4v);
        xr += dt / 6 * (k1x + 2 * k2x + 2 * k3x + k4x); vr += dt / 6 * (k1v + 2 * k2v + 2 * k3v + k4v); }
    }
    double exact = std::cos(w * T);
    std::printf("dt=%.2f  exact %+.5f | Euler %+.5f (err %+.5f) | semi-implicit %+.5f (err %+.5f) | RK4 %+.7f (err %+.7f)\n",
                dt, exact, xe, xe - exact, xs, xs - exact, xr, xr - exact);
  }
  return 0;
}
