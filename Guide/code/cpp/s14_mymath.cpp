#include "s14_mymath.h"
#include <algorithm>

double clampd(double x, double a, double b) { return std::min(b, std::max(a, x)); }
double lerp(double a, double b, double t) { return a + (b - a) * t; }
