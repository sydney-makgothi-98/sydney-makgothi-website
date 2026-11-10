// Mini project 1: a length converter.  ./mp1 12 in   ->  the length in mm, cm, m, in and ft
#include <cstdio>
#include <cstdlib>
#include <cstring>

struct Unit { const char* name; double metres; };
const Unit UNITS[] = {{"mm", 0.001}, {"cm", 0.01}, {"m", 1.0}, {"in", 0.0254}, {"ft", 0.3048}};
const int N = sizeof(UNITS) / sizeof(UNITS[0]);

int find(const char* name) {
  for (int i = 0; i < N; i++) if (!std::strcmp(UNITS[i].name, name)) return i;
  return -1;
}

int main(int argc, char** argv) {
  if (argc != 3) { std::printf("usage: %s <value> <mm|cm|m|in|ft>\n", argv[0]); return 1; }
  double value = std::atof(argv[1]);
  int from = find(argv[2]);
  if (from < 0) { std::printf("unknown unit '%s'\n", argv[2]); return 1; }
  double metres = value * UNITS[from].metres;
  for (int i = 0; i < N; i++) std::printf("%10.4f %s\n", metres / UNITS[i].metres, UNITS[i].name);
  return 0;
}
