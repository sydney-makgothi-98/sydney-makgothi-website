#include <cstdio>
#include <memory>
#include <vector>

void addOne(int& x) { x += 1; }          // by reference
void addOnePtr(int* x) { *x += 1; }      // by pointer

struct Sensor { double reading = 0; ~Sensor() { std::printf("  sensor destroyed\n"); } };

int main() {
  int n = 5; addOne(n); addOnePtr(&n);
  std::printf("n = %d\n", n);
  int* p = &n; std::printf("p points at %d; *p + 1 = %d\n", *p, *p + 1);
  int* nothing = nullptr; std::printf("a null pointer is %s\n", nothing ? "set" : "null: do not use it");
  {
    std::unique_ptr<Sensor> s = std::make_unique<Sensor>();            // owns its object and cleans up on its own
    s->reading = 0.42; std::printf("reading %.2f\n", s->reading);
  }                                                                    // <- destroyed here, automatically
  std::vector<Sensor> list(2); (void)list;
  std::printf("end of main\n");
  return 0;
}
