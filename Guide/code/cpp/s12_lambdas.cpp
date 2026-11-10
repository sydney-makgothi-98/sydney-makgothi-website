#include <algorithm>
#include <cstdio>
#include <numeric>
#include <vector>

struct Reading { const char* source; double distance; };

int main() {
  std::vector<Reading> r = {{"front", 0.42}, {"left", 1.30}, {"right", 0.15}, {"rear", 2.20}};
  std::sort(r.begin(), r.end(), [](const Reading& a, const Reading& b) { return a.distance < b.distance; });   // sort nearest first
  for (auto& x : r) std::printf("%-5s %.2f\n", x.source, x.distance);
  double limit = 1.0;
  int near = (int)std::count_if(r.begin(), r.end(), [limit](const Reading& x) { return x.distance < limit; });   // capture by value
  std::printf("closer than %.1f m: %d\n", limit, near);
  double total = std::accumulate(r.begin(), r.end(), 0.0, [](double s, const Reading& x) { return s + x.distance; });
  std::printf("total distance %.2f\n", total);
  int calls = 0; auto count = [&calls]() { calls++; };                                                         // capture by reference
  count(); count(); count(); std::printf("lambda called %d times\n", calls);
  return 0;
}
