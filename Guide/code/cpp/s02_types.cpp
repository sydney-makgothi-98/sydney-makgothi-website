#include <cstdio>
#include <cmath>

int main() {
  int cars = 3;                  // whole number
  double speed = 0.45;           // decimal number
  bool paused = false;           // true or false
  char grade = 'A';              // one character
  std::printf("sizes in bytes: int %zu, double %zu, bool %zu, char %zu\n", sizeof(int), sizeof(double), sizeof(bool), sizeof(char));
  std::printf("7 / 2   = %d\n", 7 / 2);              // integer division
  std::printf("7 / 2.0 = %.1f\n", 7 / 2.0);          // decimal division
  std::printf("7 %% 2   = %d\n", 7 % 2);             // remainder
  int whole = static_cast<int>(3.99);                // cast: the decimals are cut off, not rounded
  std::printf("static_cast<int>(3.99) = %d, round(3.99) = %.0f\n", whole, std::round(3.99));
  auto k = 2 * 3.5;                                  // auto: the compiler works out the type (double)
  std::printf("auto k = 2 * 3.5 -> %.1f\n", k);
  std::printf("%d %.2f %d %c\n", cars, speed, paused, grade);
  return 0;
}
