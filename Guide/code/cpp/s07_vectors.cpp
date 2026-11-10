#include <algorithm>
#include <cstdio>
#include <numeric>
#include <vector>

int main() {
  std::vector<double> d = {0.82, 0.79, 0.85, 0.81, 2.40, 0.80, 0.78};      // sonar readings in metres: one is a glitch
  d.push_back(0.83);                                                       // vectors grow
  std::printf("%zu readings, first %.2f, last %.2f\n", d.size(), d.front(), d.back());

  double sum = std::accumulate(d.begin(), d.end(), 0.0);
  double mean = sum / d.size();
  std::vector<double> s = d; std::sort(s.begin(), s.end());                // sort a copy
  double median = (s[s.size() / 2 - 1] + s[s.size() / 2]) / 2;             // even count: mean of the middle two
  auto [lo, hi] = std::minmax_element(d.begin(), d.end());
  std::printf("mean %.3f  median %.3f  min %.2f  max %.2f\n", mean, median, *lo, *hi);
  int big = (int)std::count_if(d.begin(), d.end(), [](double x) { return x > 1.0; });
  std::printf("readings above 1 m: %d\n", big);
  for (double x : d) std::printf("%.2f ", x);                              // range-for: every element in turn
  std::printf("\n");
  double arr[4] = {1, 2, 3, 4}; double tot = 0; for (int i = 0; i < 4; i++) tot += arr[i];
  std::printf("fixed array total = %.0f\n", tot);
  return 0;
}
