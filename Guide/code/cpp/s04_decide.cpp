#include <cstdio>

// What should the robot do, given the sonar distance in metres?
const char* decide(double d) {
  if (d <= 0.108) return "BRAKE";
  else if (d <= 0.30) return "SLOW";
  else if (d >= 4.0) return "NO ECHO: keep driving";
  else return "DRIVE";
}

int main() {
  double readings[] = {2.5, 0.8, 0.29, 0.108, 0.05, 4.0};
  for (double d : readings) std::printf("%5.3f m -> %s\n", d, decide(d));
  bool near = 0.2 < 0.3, lowBattery = false;
  std::printf("near && !lowBattery = %d, near || lowBattery = %d\n", near && !lowBattery, near || lowBattery);
  int duty = 80;
  std::printf("ternary: duty is %s\n", duty > 70 ? "high" : "normal");
  return 0;
}
