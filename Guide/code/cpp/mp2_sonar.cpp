// Mini project 2: a sonar log analyser.   ./mp2 --make   writes sonar.csv;   ./mp2   reads it and cleans it up.
#include <algorithm>
#include <cstdio>
#include <cstring>
#include <fstream>
#include <sstream>
#include <string>
#include <vector>

double median3(double a, double b, double c) { return std::max(std::min(a, b), std::min(std::max(a, b), c)); }

int main(int argc, char** argv) {
  if (argc > 1 && !std::strcmp(argv[1], "--make")) {                    // a fake drive towards a wall at 10 cm/s, with glitches
    std::ofstream out("sonar.csv"); out << "t,distance\n";
    unsigned s = 12345;
    for (int i = 0; i < 40; i++) {
      s = s * 1103515245u + 12345u; double noise = ((s >> 16) % 100) / 100.0 * 0.01 - 0.005;      // +/- 5 mm
      double d = 1.0 - 0.1 * i * 0.25 + noise;
      if (i == 7 || i == 22 || i == 23) d = 4.0;                         // "no echo": the sensor's maximum
      out << i * 0.25 << "," << d << "\n";
    }
    std::printf("wrote sonar.csv\n"); return 0;
  }
  std::ifstream in("sonar.csv"); std::string line; std::getline(in, line);
  std::vector<double> d;
  while (std::getline(in, line)) { std::stringstream ss(line); std::string t, v; std::getline(ss, t, ','); std::getline(ss, v, ','); d.push_back(std::stod(v)); }
  int bad = (int)std::count_if(d.begin(), d.end(), [](double x) { return x >= 4.0; });
  std::printf("%zu readings, %d are 'no echo' glitches\n", d.size(), bad);
  std::vector<double> clean = d;
  for (size_t i = 1; i + 1 < d.size(); i++) clean[i] = median3(d[i - 1], d[i], d[i + 1]);       // median of three removes single glitches
  int left = (int)std::count_if(clean.begin(), clean.end(), [](double x) { return x >= 4.0; });
  std::printf("after the median-of-3 filter: %d glitches left (the pair at 22-23 beats a 3-point filter)\n", left);
  double speed = (d[0] - d[39]) / (39 * 0.25);
  std::printf("distance fell from %.3f to %.3f m: closing speed about %.3f m/s\n", d[0], d[39], speed);
  return 0;
}
