# C++: The Language of the Robot

Everything so far has run inside a web browser. Patrick's controller, the program that decides when to drive, brake, reach and grip, is different. On the real robot it is a small program running on a microcontroller, and microcontrollers do not speak JavaScript. They speak C++ (or its older cousin, C). That is why the robot's whole motion also exists as a C++ file, and why this book has a chapter on it.

C++ has a reputation for being scary. Much of that reputation is earned by its *advanced* corners, which you will not need. The part you need fits in one chapter: numbers, functions, bundles of data, a way to choose between states, and a loop. If you have read Chapter 11 (JavaScript), most of the ideas are old friends wearing a stricter uniform.

:::remember
JavaScript is read and run by the browser as it goes. C++ is first **compiled**: a program called the compiler reads all your code, checks it, and turns it into a file the computer can run directly. The checking is the point. Many mistakes that JavaScript only reveals while running, C++ catches before it runs at all.
:::

## Words You Will Meet

| Word | What it means |
|---|---|
| **Source file** | The text file you write, such as `robot.cpp`. |
| **Compiler** | The program (here, `g++`) that turns source into a runnable program. |
| **Header** | A file of declarations you pull in with `#include`, such as `<cstdio>` for printing. |
| **`main`** | The function where every C++ program starts. |
| **Type** | What kind of value a variable holds: `int` (whole number), `double` (decimal number), `bool` (true or false). |
| **Variable** | A named box that holds a value of one type. |
| **`const`** | A promise that a value never changes after it is set. |
| **Function** | A named piece of code that takes **parameters** and **returns** a value. |
| **Reference (`&`)** | A second name for an existing variable, so a function can change the caller's copy. |
| **`struct`** | A bundle of related variables (and functions) under one name. |
| **`enum`** | A list of named choices, such as `RED, GREEN, AMBER`. |
| **`switch`** | Picks one block of code to run according to a value. |
| **Lambda** | A small function written in the middle of other code, like JavaScript's arrow function. |
| **Namespace** | A name prefix that keeps names apart; `std::` is the standard library's. |
| **Time step (`dt`)** | How much simulated time passes in one pass of the loop. |

## Writing, Compiling and Running

Put this in a file called `hello.cpp`:

```
#include <cstdio>

int main() {
  std::printf("Hello, Patrick!\n");
  return 0;
}
```

Then, in a terminal:

```
g++ -std=c++17 -Wall -Wextra -O2 hello.cpp -o hello
./hello
```

Read the command as a sentence. Use the 2017 version of the language (`-std=c++17`). Warn me about suspicious code (`-Wall -Wextra`). Optimise for speed (`-O2`). Compile `hello.cpp` and call the result `hello`.

:::why Always compiling with -Wall -Wextra
**What it is.** Two flags that make the compiler tell you about code that is legal but probably a mistake.

**Why it is done this way.** C++ will happily accept a lot of nonsense. A warning is the compiler tapping you on the shoulder.

**Why it matters.** When the robot's code was written, the compiler flagged one line in the controller where `if (...) go(...); break;` sat on a single line and looked as though the `break` belonged to the `if`. It did not, and the line was reformatted so that nobody reading it later would be fooled.

**What happens if you do not.** You find the same mistakes later, by watching a robot do the wrong thing, which is slower and more confusing than reading a warning.
:::

## Numbers and Types

In JavaScript every number is one kind. In C++ you choose.

```
int cars = 3;                // a whole number
double speed = 0.45;         // a decimal number (double precision)
bool paused = false;         // true or false
const double g = 9.80665;    // gravity: never changes
```

:::warning
Dividing two `int` values gives an `int`, and throws the remainder away. `7 / 2` is `3`, not `3.5`. To get `3.5`, make at least one of them a `double`: `7 / 2.0`. This one rule has ruined more afternoons than any other in the language. Patrick's code writes `9.0 / 5.0` and `1.0` on purpose.
:::

:::why Putting units in names and constants at the top
**What it is.** Names like `wheelR` (metres) and `STOP_AT` (metres), declared once near the top, each with a comment giving its unit.

**Why it is done this way.** A bare `0.108` in the middle of code means nothing. A named constant means something, and has one place to change.

**Why it matters.** The distance at which Patrick brakes was tuned several times. Each time it was a one-line change, and every use of it updated.

**What happens if you do not.** The number appears in five places, you change four of them, and the robot brakes at two different distances depending on which code path ran.
:::

## Functions

A function takes values in and gives one back.

```
double toFahrenheit(double c) {
  return c * 9.0 / 5.0 + 32.0;
}
```

The word before the name (`double`) is the type it returns. Inside the brackets are its parameters, each with a type. Patrick's code is full of small functions like this: `clampd` limits a number to a range, `mu` turns slip into a friction coefficient, `motor` turns a voltage and a speed into a current.

**References.** Normally a function receives *copies*. If you want it to change the caller's variable, take a reference with `&`:

```
void armTip(double theta, double& x, double& y) {
  x = std::cos(theta);       // writes into the caller's x
  y = std::sin(theta);
}
```

:::why Small, pure functions
**What it is.** Functions that depend only on what you pass in and change nothing else.

**Why it is done this way.** They are easy to check one at a time. `mu(0.17, 1.0)` always gives the same answer.

**Why it matters.** Patrick's physics is a dozen of these. Each was tested alone before they were joined, so when a whole run looked wrong, the search for the fault was short.

**What happens if you do not.** One giant function that does everything, in which a mistake anywhere makes everything look wrong, and nothing can be tested alone.
:::

## Bundles of Data: struct

A `struct` groups related variables under one name.

```
struct Cart {
  double x = 0, v = 0, t = 0;     // position, speed, time (all start at zero)
};

Cart c;
c.v = 0.45;                        // dot to reach inside
```

Giving each member a starting value (`= 0`) means a new `Cart` is never full of leftover garbage. A struct can also hold functions that work on its own data, called **member functions**:

```
struct Cart {
  double x = 0, v = 0;
  void step(double dt) { x += v * dt; }     // uses the cart's own x and v
};
```

The whole robot in `patrick_mission.cpp` is one such struct, `Mission`, whose member function `step()` advances everything by one tick.

:::why One struct holding the whole state
**What it is.** Every changing value of the simulation (position, heading, arm angle, which phase) lives inside one `Mission` object.

**Why it is done this way.** A simulation is "a state, and a rule that turns it into the next state". Putting the state in one place makes that literal.

**Why it matters.** The page can run two missions side by side, or restart one, by making another object. Nothing is hidden in the program's global variables.

**What happens if you do not.** State scattered across many loose global variables, where restarting means remembering to reset forty of them and missing the forty-first.
:::

## Choosing Between States: enum and switch

An `enum` is a list of named choices. A `switch` runs the code for the current one.

```
enum Light { RED, GREEN, AMBER };

Light light = RED;
switch (light) {
  case RED:   /* do the red things */   break;
  case GREEN: /* do the green things */ break;
  case AMBER: /* do the amber things */ break;
}
```

That is a **state machine**, and it is how Patrick thinks: APPROACH, BRAKE, REACH, GRIP, and so on. At any moment he is in exactly one state, and each state knows what to do and when to move on.

:::warning
Every `case` must end with `break;`. Without it, execution *falls through* into the next case and runs that one as well. Sometimes this is wanted; far more often it is a bug. Always write `break`, and let the compiler's warnings catch the ones you forget.
:::

:::why An enum instead of numbers
**What it is.** Writing `case BRAKE:` instead of `case 2:`.

**Why it is done this way.** Numbers carry no meaning. Names do.

**Why it matters.** The code reads like the mission: `case APPROACH`, `case GRIP`. The web page's code viewer even finds the line to highlight by searching for the name of the current state.

**What happens if you do not.** `if (phase == 7)` appears and nobody, including you next month, knows what 7 is.
:::

## Loops and the Fixed Time Step

A simulation advances time in small equal pieces:

```
const double dt = 0.001;                  // one tick: a thousandth of a second
for (int i = 0; i < 2000; i++) {          // 2 seconds of ticks
  /* update the world by dt */
}
```

:::why A fixed time step, not "however long the frame took"
**What it is.** `dt` is a constant 0.001 s, whatever the computer is doing.

**Why it is done this way.** Physics equations are sensitive to the step size. A fixed step gives the same answer every time, on every computer.

**Why it matters.** This is exactly why the C++ and the JavaScript versions of the robot can be compared tick for tick, and why they agree exactly. If the step varied, two runs would never match.

**What happens if you do not.** The robot behaves slightly differently on every run, and a bug you saw once cannot be repeated to study it.
:::

## Lambdas: Little Functions Inside Functions

In `Mission::step()` there are small helper functions defined in the middle of the code:

```
auto ramp = [&](double T) { return clampd(phaseT / T, 0, 1); };
```

Read it from the left. `auto ramp =` names the thing. `[&]` says "it may use the variables around it, by reference". `(double T)` is its parameter. The braces hold what it does. Compare JavaScript: `const ramp = (T) => clamp(phaseT / T, 0, 1);`.

:::why Capturing with [&]
**What it is.** The `[&]` lets the lambda see and use `phaseT` and the other variables of the surrounding function.

**Why it is done this way.** These helpers are only useful *here*, right next to the code that needs them, and they need the current `phaseT`.

**Why it matters.** `ramp(0.35)` reads clearly where it is used: "ramp up over 0.35 seconds". No extra parameters need passing.

**What happens if you do not.** Either you pass a long list of variables into each helper, or you promote them all into globals. Both are worse.
:::

## Lists, and Writing Results Out

A fixed list is an **array**: `double lanes[5] = {-0.5, -0.25, 0, 0.25, 0.5};`. A list that can grow is a `std::vector<Box>`. To write numbers out, `std::printf` formats them; `%d` is a whole number and `%.3f` is a decimal with three places:

```
std::printf("t=%.2f x=%.3f\n", t, x);
```

Patrick's program prints one comma-separated row every 10 ms. That table can be opened in a spreadsheet, plotted, or compared with another program's table.

## Floating-Point Numbers Are Not Exact

A `double` stores about 15 significant digits, in binary. Some simple decimals, such as 0.1, have no exact binary form. Add 0.1 a hundred times and you get 9.99999999999998, not 10.

:::warning
Never test a calculated decimal for exact equality (`if (x == 10.0)`). Test with `>=`, `<=` or a small tolerance. The traffic-light example below shows this bug happening for real: a light meant to change at 10.0 seconds changes at 10.1, because the running total reaches 9.99999999999998 first.
:::

## Worked Examples

:::worked A function and a loop: a conversion table
Print Celsius against Fahrenheit for 0, 25, 50, 75 and 100.

**Step 1. The function.** One job: take degrees C, return degrees F.

```
double toFahrenheit(double c) {
  return c * 9.0 / 5.0 + 32.0;
}
```

**Step 2. The loop.** Count from 0 to 100 in steps of 25.

```
#include <cstdio>

int main() {
  for (int c = 0; c <= 100; c += 25) {
    std::printf("%3d C = %5.1f F\n", c, toFahrenheit(c));
  }
  return 0;
}
```

**Step 3. Predict, then run.** 100 C should be 212 F, since 100 x 9 / 5 + 32 = 212. Compile and run, and you see:

```
  0 C =  32.0 F
 25 C =  77.0 F
 50 C = 122.0 F
 75 C = 167.0 F
100 C = 212.0 F
```

**Step 4. Reflect.** Passing the whole number `c` to a function wanting a `double` is fine: C++ converts it. Writing `9.0 / 5.0` rather than `9 / 5` matters: the whole-number version would be 1, and every answer would be wrong.
:::

:::worked A falling ball, and how wrong a time step can be
Drop a ball for 2 seconds, in 1 ms steps, and compare with the exact formula y = 1/2 g t squared.

**Step 1. The rule.** Each tick, gravity changes the speed, and the speed changes the position.

```
v += g * dt;
y += v * dt;
```

**Step 2. The program.**

```
#include <cmath>
#include <cstdio>

int main() {
  const double g = 9.80665, dt = 0.001;
  double y = 0.0, v = 0.0;
  for (int i = 1; i <= 2000; i++) {
    v += g * dt;
    y += v * dt;
    if (i % 500 == 0) {
      double t = i * dt, exact = 0.5 * g * t * t;
      std::printf("t=%.2f s  simulated %.4f m  exact %.4f m  error %.5f m\n", t, y, exact, y - exact);
    }
  }
  return 0;
}
```

**Step 3. Run it.**

```
t=0.50 s  simulated 1.2283 m  exact 1.2258 m  error 0.00245 m
t=1.00 s  simulated 4.9082 m  exact 4.9033 m  error 0.00490 m
t=1.50 s  simulated 11.0398 m  exact 11.0325 m  error 0.00735 m
t=2.00 s  simulated 19.6231 m  exact 19.6133 m  error 0.00981 m
```

**Step 4. Reflect.** The error grows in proportion to time, and it is about 1 cm after 2 seconds on a 19.6 m fall. It is the price of using a step instead of calculus. Halve `dt` and the error halves. This is why Patrick's physics runs at 1 ms: small enough that the error is far below anything you could see.
:::

:::worked A state machine: the traffic light
A light stays red for 10 s, green for 8 s, amber for 2 s, and repeats. Print each change.

**Step 1. The states.** `enum Light { RED, GREEN, AMBER };`

**Step 2. The program.**

```
#include <cstdio>

enum Light { RED, GREEN, AMBER };

int main() {
  Light light = RED;
  double timeInState = 0.0;
  const double dt = 0.1;
  for (int i = 0; i < 300; i++) {                    // 30 seconds
    timeInState += dt;
    switch (light) {
      case RED:   if (timeInState >= 10.0) { light = GREEN; timeInState = 0; std::printf("t=%4.1f  GREEN\n", i * dt + dt); } break;
      case GREEN: if (timeInState >= 8.0)  { light = AMBER; timeInState = 0; std::printf("t=%4.1f  AMBER\n", i * dt + dt); } break;
      case AMBER: if (timeInState >= 2.0)  { light = RED;   timeInState = 0; std::printf("t=%4.1f  RED\n",   i * dt + dt); } break;
    }
  }
  return 0;
}
```

**Step 3. Predict.** Green at 10.0, amber at 18.0, red at 20.0.

**Step 4. Run it.**

```
t=10.1  GREEN
t=18.2  AMBER
t=20.2  RED
```

**Step 5. Reflect.** Everything is a tenth of a second late. Adding 0.1 a hundred times gives 9.99999999999998, which is *less than* 10.0, so the test `>= 10.0` fails one tick too early to fire, and fires a tick later. The robot's code avoids the trap two ways: its timers add `dt` once per tick (the same small error everywhere, so it is repeatable), and it never tests a decimal for exact equality.
:::

## Practice Problems

:::problems
1. What does `std::printf("%d", 7 / 2);` print? What does `std::printf("%.1f", 7 / 2.0);` print?
2. Write a function `double clampd(double x, double a, double b)` that returns `a` if `x` is below `a`, `b` if `x` is above `b`, and `x` otherwise.
3. What does this print? `int s = 0; for (int i = 2; i <= 10; i += 2) s += i; std::printf("%d", s);`
4. A `switch` on an `enum` has a `case GRIP:` that forgets its `break;`, and the next case is `case LIFT:`. What happens when the state is GRIP?
5. The ball example uses `dt = 0.5` instead of 0.001, for just two steps. Work out `v` and `y` after each step, and compare `y` after 1 second with the exact 4.9033 m.
6. Explain in two sentences why adding 0.1 one hundred times does not give exactly 10.
7. Write a function `void swapValues(double& a, double& b)` that swaps two numbers, and say why the `&` signs are needed.
8. In `auto ramp = [&](double T) { return clampd(phaseT / T, 0, 1); };`, what would go wrong if `[&]` were `[]`?
:::

:::answers
**Chapter 17 practice problems.**

1. The first prints `3` (whole-number division discards the remainder). The second prints `3.5`.
2. `double clampd(double x, double a, double b) { if (x < a) return a; if (x > b) return b; return x; }`, or `return std::min(b, std::max(a, x));`.
3. It adds 2 + 4 + 6 + 8 + 10 and prints `30`.
4. Execution falls through: the GRIP code runs, then the LIFT code runs as well, in the same tick. That is rarely what is wanted, and compilers with `-Wextra` warn about it.
5. Step 1: v = 9.80665 x 0.5 = 4.9033, y = 4.9033 x 0.5 = 2.4517. Step 2: v = 9.8067, y = 2.4517 + 4.9033 = 7.3550. The exact value is 4.9033 m, so the simulated 7.3550 m is badly wrong: with only two steps the method is crude. This shows why the time step has to be small.
6. 0.1 has no exact binary form, so each addition carries a tiny error, and a hundred of them add up to 9.99999999999998. A `double` keeps only about 15 digits, so tiny errors like that are unavoidable.
7. `void swapValues(double& a, double& b) { double t = a; a = b; b = t; }`. The `&` makes `a` and `b` references to the caller's variables. Without them the function would swap its own copies and the caller's numbers would be unchanged.
8. With `[]` the lambda cannot see `phaseT`, which belongs to the surrounding function, so the code would not compile ("phaseT is not captured").
:::
