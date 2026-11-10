#include <cstdio>

int main() {
  int sum = 0;
  for (int i = 1; i <= 10; i++) sum += i;               // for: count from 1 to 10
  std::printf("sum 1..10 = %d\n", sum);

  double v = 1.0; int steps = 0;
  while (v > 0.01) { v *= 0.5; steps++; }               // while: repeat while a condition holds
  std::printf("halving from 1.0 until below 0.01 took %d steps\n", steps);

  int n = 0;
  do { n++; } while (n * n < 50);                       // do-while: always runs at least once
  std::printf("first n with n*n >= 50 is %d\n", n);

  for (int i = 1; i <= 20; i++) {
    if (i % 2 == 0) continue;                           // continue: skip to the next lap
    if (i > 9) break;                                   // break: leave the loop
    std::printf("%d ", i);
  }
  std::printf("<- odd numbers up to 9\n");

  for (int r = 1; r <= 3; r++) {                        // loops inside loops
    for (int c = 1; c <= 4; c++) std::printf("%3d", r * c);
    std::printf("\n");
  }
  return 0;
}
