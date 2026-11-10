#include <cstdio>
#include <fstream>
#include <sstream>
#include <string>
#include <vector>

int main() {
  {                                                    // write
    std::ofstream out("run.csv");
    out << "t,x,v\n";
    double x = 0, v = 0;
    for (int i = 0; i <= 5; i++) { out << i * 0.5 << "," << x << "," << v << "\n"; v += 0.4; x += v * 0.5; }
  }                                                    // closing brace closes the file
  std::ifstream in("run.csv");                        // read it back
  std::string line; std::getline(in, line);           // the header
  std::printf("header: %s\n", line.c_str());
  std::vector<double> xs;
  while (std::getline(in, line)) {
    std::stringstream ss(line); std::string cell; std::vector<double> row;
    while (std::getline(ss, cell, ',')) row.push_back(std::stod(cell));
    xs.push_back(row[1]);
  }
  std::printf("read %zu rows, last x = %.2f\n", xs.size(), xs.back());
  return 0;
}
