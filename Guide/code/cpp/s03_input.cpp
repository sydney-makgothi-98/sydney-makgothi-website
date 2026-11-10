#include <iostream>

int main() {
  double c;
  std::cout << "Temperature in C: ";
  std::cin >> c;
  std::cout << c << " C = " << c * 9.0 / 5.0 + 32.0 << " F" << std::endl;
  return 0;
}
