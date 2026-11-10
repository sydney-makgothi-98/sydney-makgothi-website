#include <cstdio>

enum class Door { CLOSED, OPENING, OPEN, CLOSING };
const char* name(Door d) {
  switch (d) { case Door::CLOSED: return "CLOSED"; case Door::OPENING: return "OPENING"; case Door::OPEN: return "OPEN"; case Door::CLOSING: return "CLOSING"; }
  return "?";
}

int main() {
  Door door = Door::CLOSED; double pos = 0, dt = 0.5;                  // position 0 (shut) to 1 (open)
  bool buttonAt[] = {false, true, false, false, false, false, false, false, true, false, false, false, false, false};
  for (int i = 0; i < 14; i++) {
    bool button = buttonAt[i];
    switch (door) {
      case Door::CLOSED:  if (button) door = Door::OPENING; break;
      case Door::OPENING: pos += 0.4 * dt; if (pos >= 1) { pos = 1; door = Door::OPEN; } break;
      case Door::OPEN:    if (button) door = Door::CLOSING; break;
      case Door::CLOSING: pos -= 0.4 * dt; if (pos <= 0) { pos = 0; door = Door::CLOSED; } break;
    }
    std::printf("t=%4.1f s  button=%d  %-8s position %.1f\n", (i + 1) * dt, button, name(door), pos);
  }
  return 0;
}
