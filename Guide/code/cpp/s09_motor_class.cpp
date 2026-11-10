#include <cmath>
#include <cstdio>
#include <initializer_list>

class Motor {
 public:
  Motor(double Vbat, double Rm, double ke, double I0) : Vbat_(Vbat), Rm_(Rm), ke_(ke), I0_(I0) {}
  double current(double V, double w) const { return (V - ke_ * w) / Rm_; }       // the motor law
  double freeSpeed(double V) const { return (V - I0_ * Rm_) / ke_; }              // speed with no load, rad/s
  double stallCurrent(double V) const { return V / Rm_; }
  double supply(double duty) const { return duty * (Vbat_ - 1.4); }               // volts after the driver's drops
 private:                                                                         // hidden: only the member functions touch these
  double Vbat_, Rm_, ke_, I0_;
};

int main() {
  Motor m(6.0, 6.0, 0.2326, 0.19);
  for (double duty : {0.4, 0.7, 1.0}) {
    double V = m.supply(duty), w0 = m.freeSpeed(V);
    std::printf("duty %.1f: %.2f V, free speed %.2f rad/s = %.0f rpm, stall current %.2f A\n", duty, V, w0, w0 * 60 / (2 * 3.14159265), m.stallCurrent(V));
  }
  return 0;
}
