#include <cstdio>
#include "s14_mymath.h"

int main() {
  std::printf("clampd(5, 0, 1) = %.0f, lerp(0, 10, 0.3) = %.1f\n", clampd(5, 0, 1), lerp(0, 10, 0.3));
  return 0;
}
