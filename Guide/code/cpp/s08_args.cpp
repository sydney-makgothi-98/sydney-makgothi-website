#include <cstdio>
#include <cstdlib>
#include <cstring>
#include <string>

int main(int argc, char** argv) {
  double duty = 0.7; bool bands = true; std::string name = "Patrick";
  for (int i = 1; i < argc; i++) {
    if (!std::strcmp(argv[i], "--duty") && i + 1 < argc) duty = std::atof(argv[++i]);
    else if (!std::strcmp(argv[i], "--bands") && i + 1 < argc) bands = std::atoi(argv[++i]) != 0;
    else if (!std::strcmp(argv[i], "--name") && i + 1 < argc) name = argv[++i];
  }
  std::string line = "Robot " + name + ": duty " + std::to_string(duty).substr(0, 4) + ", bands " + (bands ? "on" : "off");
  std::printf("%s (%zu characters)\n", line.c_str(), line.size());
  std::printf("argc was %d\n", argc);
  return 0;
}
