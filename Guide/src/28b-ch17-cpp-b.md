## 17.10 Choosing Between States: enum and switch

An `enum` is a list of named choices; a `switch` runs the code for the current one. Together they make a **state machine**, which is how Patrick thinks: APPROACH, BRAKE, REACH, GRIP and so on. At any moment the machine is in exactly one state, and each state knows what to do and when to move on.

@figure state-machine The first phases of the breakfast run as a state machine. The arrows carry the condition that moves the robot on; everything else about a phase is what it does while it waits for that condition.

Here is a smaller one, an automatic door:

@code Guide/code/cpp/s10_door.cpp 1-23

The door starts closed. A button press at 1.0 s opens it, and another at 4.5 s closes it:

```
t= 0.5 s  button=0  CLOSED   position 0.0
t= 1.0 s  button=1  OPENING  position 0.0
t= 1.5 s  button=0  OPENING  position 0.2
t= 2.0 s  button=0  OPENING  position 0.4
t= 2.5 s  button=0  OPENING  position 0.6
t= 3.0 s  button=0  OPENING  position 0.8
t= 3.5 s  button=0  OPEN     position 1.0
t= 4.0 s  button=0  OPEN     position 1.0
t= 4.5 s  button=1  CLOSING  position 1.0
t= 5.0 s  button=0  CLOSING  position 0.8
...
t= 7.0 s  button=0  CLOSED   position 0.0
```

(The `...` stands for four more lines of the door closing.) **`enum class`** (line 3) is the modern form: its names are reached as `Door::OPEN`, so two enums can both have an `OPEN` without clashing. Each `case` ends with `break;`; leave it out and execution *falls through* into the next case, which is rarely wanted. Notice that a button press while the door is OPENING is simply ignored: no `case` mentions it, so nothing happens.

:::why An enum instead of numbers
**What it is.** Writing `case Door::CLOSING:` instead of `case 3:`.

**Why it is done this way.** Numbers carry no meaning. Names do.

**Why it matters.** The code reads like the behaviour. The web page's code viewer even finds the line to highlight by searching for the name of the current state.

**What happens if you do not.** `if (phase == 7)` appears and nobody, including you next month, knows what 7 is.
:::

## 17.11 References, Pointers and Cleaning Up After Yourself

A **reference** is another name for a variable. A **pointer** is a variable that holds the *address* of another, written with `*`; you follow it with `*p`, take an address with `&x`, and a pointer that points at nothing is `nullptr`. In modern C++ you meet raw pointers less than you might fear, because the standard library manages memory for you.

@figure cpp-pointer A pointer holds an address. `&x` asks where `x` lives; `*p` goes there. Reading `*p` reads `x`; writing `*p = 4` changes `x`.

@figure cpp-stack-heap Where variables live. Locals sit on the stack in the frame of the function that made them and vanish when it returns. Anything whose size is only known at run time, such as a vector's contents, lives on the heap, and a local vector holds a pointer to it and frees it for you.

@code Guide/code/cpp/s11_pointers.cpp 1-22

Its output:

```
n = 7
p points at 7; *p + 1 = 8
a null pointer is null: do not use it
reading 0.42
  sensor destroyed
end of main
  sensor destroyed
  sensor destroyed
```

`addOne(int& x)` and `addOnePtr(int* x)` do the same job by two routes, and `n` goes from 5 to 7. The interesting part is the **destructor** (`~Sensor`), a function that runs automatically when an object's life ends. The `std::unique_ptr` owns its sensor, and when it leaves its braces the sensor is destroyed at once, printing the first "sensor destroyed" *before* `end of main`. The two vector elements are destroyed at the very end of `main`. This habit, tying a resource's life to a variable's scope, is called **RAII**, and it is why modern C++ rarely needs `new` and `delete`.

:::why Letting objects clean up after themselves
**What it is.** A smart pointer (`std::unique_ptr`) or a container (`std::vector`) frees what it owns when it goes out of scope.

**Why it is done this way.** Forgetting to free memory (a leak), or freeing it twice, are among the oldest bugs in programming. Tying cleanup to scope makes them impossible to forget.

**Why it matters.** A robot controller runs for hours. A tiny leak on every control tick would eventually fill the memory and crash it.

**What happens if you do not.** The program works in a five-second test and fails at hour three.
:::

:::warning
Never use a pointer after the object it points at is gone, and never follow a `nullptr`. Both are crashes waiting to happen. When you can, pass references and use `std::vector` and `std::unique_ptr` rather than raw pointers.
:::

## 17.12 Lambdas and the Standard Algorithms

A **lambda** is a small function written in the middle of other code. Its square brackets say what it may see from the surrounding code: `[]` nothing, `[limit]` a copy of `limit`, `[&calls]` the variable `calls` itself, `[&]` everything by reference. Lambdas are how you tell the standard algorithms what you mean.

@code Guide/code/cpp/s12_lambdas.cpp 1-20

Its output:

```
right 0.15
front 0.42
left  1.30
rear  2.20
closer than 1.0 m: 2
total distance 4.07
lambda called 3 times
```

The first lambda tells `std::sort` how to order two readings (nearest first). The second, `[limit]`, counts readings under a limit, capturing a *copy* of `limit`. The third adds up the distances. The last captures `calls` by reference, so each call really changes it: the count reaches 3. Compare JavaScript: `const ramp = (T) => clamp(phaseT / T, 0, 1);`. In Patrick's `step()` there are lambdas such as `auto ramp = [&](double T) { return clampd(phaseT / T, 0, 1); };`.

:::why Capturing with [&]
**What it is.** The `[&]` lets the lambda see and use `phaseT` and the other variables of the surrounding function.

**Why it is done this way.** These helpers are only useful *here*, right next to the code that needs them, and they need the current `phaseT`.

**Why it matters.** `ramp(0.35)` reads clearly where it is used: "ramp up over 0.35 seconds". No extra parameters need passing.

**What happens if you do not.** Either you pass a long list of variables into each helper, or you promote them all into globals. Both are worse.
:::

## 17.13 Reading and Writing Files

A simulation is far more useful if it writes its results where you can plot them. `std::ofstream` writes a file, `std::ifstream` reads one, and `std::getline` reads a line at a time. The most useful format is **CSV**: one row per line, values separated by commas, which every spreadsheet understands.

@code Guide/code/cpp/s13_csv.cpp 1-25

It prints:

```
header: t,x,v
read 6 rows, last x = 3.00
```

The first block (lines 8 to 13) writes a header and six rows; the closing brace ends the block, which closes the file. The second block opens the file again, throws away the header, and for each remaining line uses a `std::stringstream` to split it at the commas and `std::stod` to turn each piece into a number. Patrick's whole program is built this way: it writes one row every 10 ms with `fprintf`.

:::why Writing a table, not drawing a picture
**What it is.** The program's whole output is rows of numbers in a CSV file.

**Why it is done this way.** A table can be plotted, filtered, compared, and read by any other tool. A picture can only be looked at.

**Why it matters.** The twin test in Chapter 42 only works because both programs write a table you can compare byte for byte.

**What happens if you do not.** You can see that two runs look similar and have no way to prove they are identical.
:::

## 17.14 Splitting a Program Across Files

A program of any size lives in several files. A **header** (`.h`) declares what exists; a **source file** (`.cpp`) defines it; and any file that wants to use a function includes the header.

@code Guide/code/cpp/s14_mymath.h 1-3

@code Guide/code/cpp/s14_mymath.cpp 1-5

@code Guide/code/cpp/s14_main.cpp 1-7

Compile all the source files together and run the result:

```
g++ -std=c++17 -Wall -Wextra -O2 s14_main.cpp s14_mymath.cpp -o s14
./s14
```

It prints `clampd(5, 0, 1) = 1, lerp(0, 10, 0.3) = 3.0`. The first line of the header, `#pragma once`, is an **include guard**: it makes sure the header is read only once per file, even if several headers include it.

:::why Declaring in a header and defining in a source file
**What it is.** The header says "this function exists and here is its shape"; the source file holds the body.

**Why it is done this way.** Each `.cpp` is compiled separately, so each needs to know what the others offer. Splitting also means a change to one file recompiles only that file.

**Why it matters.** On a big project, rebuilding one file takes a second instead of a minute. Patrick's program is one file because it is small; Part V explains when to split it.

**What happens if you do not.** One enormous file, slow rebuilds, and every change risks everything.
:::

:::tip
If you forget to list `s14_mymath.cpp` on the command line, the compile succeeds but the **linker** fails with "undefined reference to `clampd`". A compile error is about one file; a link error is about the pieces not fitting together.
:::

## Practice Problems D: States, Memory, Lambdas, Files

:::problems
1. In the door program, what happens if the button is pressed while the door is OPENING? Why?
2. What is the advantage of `enum class` over a plain `enum`?
3. When exactly is the `Sensor` inside the `std::unique_ptr` in Section 17.11 destroyed?
4. What is the difference between the lambda captures `[limit]` and `[&limit]` if `limit` changes later?
5. How many lines does the file `run.csv` from Section 17.13 have, counting the header?
6. Write the command that builds a program from `main.cpp` and `util.cpp`, with warnings and optimisation.
7. A build fails with `undefined reference to 'lerp'`. Is this a compile error or a link error, and what is the likeliest cause?
8. Why does the header in Section 17.14 begin with `#pragma once`?
:::

:::answers
**Chapter 17, Practice Problems D.**

1. Nothing: no `case` mentions the button while OPENING, so it is ignored.
2. Its names are scoped (`Door::OPEN`), so they cannot clash with other names, and it will not silently convert to an integer.
3. When the pointer goes out of scope, at the closing brace of its block, before `end of main` is printed.
4. `[limit]` takes a copy when the lambda is made, so later changes to `limit` are invisible to it. `[&limit]` refers to the original, so it sees changes.
5. Seven lines: the header and six data rows (the program read 6 rows).
6. `g++ -std=c++17 -Wall -Wextra -O2 main.cpp util.cpp -o prog`
7. A link error. The likeliest cause is that the source file defining `lerp` was not given to `g++`.
8. It stops the header being read twice in one file, which would declare everything twice and cause errors.
:::

## 17.15 Numerical Simulation: How Wrong Can a Step Be?

Floating-point numbers are not exact. A `double` keeps about 15 significant digits, in binary, and some simple decimals such as 0.1 have no exact binary form. In `double`, `0.1 + 0.2` is `0.30000000000000004`, so `0.1 + 0.2 == 0.3` is false.

:::warning
Never test a calculated decimal for exact equality (`if (x == 10.0)`). Test with `>=`, `<=` or a small tolerance such as `std::fabs(x - 10.0) < 1e-9`. A traffic light that was meant to change at 10.0 seconds can change at 10.1 because the running total reaches 9.99999999999998 first.
:::

A simulation turns a differential equation into a loop. A mass on a spring obeys *x'' = -w squared x*, whose exact answer is *x(t) = cos(w t)*. Here are three ways to step it forward, compared with that exact answer:

@code Guide/code/cpp/s15_integrators.cpp 1-26

Its output, for two step sizes (w = 2, time 10 s):

```
dt=0.10  exact +0.40808 | Euler +4.47303 (err +4.06495) | semi-implicit +0.28421 (err -0.12387) | RK4 +0.4083040 (err +0.0002219)
dt=0.01  exact +0.40808 | Euler +0.50138 (err +0.09330) | semi-implicit +0.39865 (err -0.00944) | RK4 +0.4080821 (err +0.0000000)
```

Study the first row. **Explicit Euler** (update the position with the *old* speed, then the speed) has added energy at every step, so the spring that should swing between -1 and +1 has grown to 4.47: the answer is not just inaccurate but *wrong in kind*. **Semi-implicit Euler** (update the speed first, then the position with the *new* speed, which is what Patrick's code does) stays bounded, with a modest error of -0.12. **RK4** (the fourth-order Runge-Kutta method, which samples the slope four times per step) is accurate to 0.0002 with the same step. With a hundred times as many steps, Euler improves to an error of 0.09, semi-implicit to 0.009 and RK4 to nothing visible.

:::why Semi-implicit Euler for the robot
**What it is.** Each tick, the speed is updated first, and the position then uses the new speed.

**Why it is done this way.** It costs the same as plain Euler but does not pump energy into oscillating systems, and it is simple enough to write identically in two languages.

**Why it matters.** Wheels, arms and servos all oscillate if you treat them badly. A method that adds energy turns a tidy simulation into one that shakes itself apart.

**What happens if you do not.** The robot works at slow speeds and goes unstable at the moments that matter most: starting and stopping.
:::

:::technical Technical Stuff
Even semi-implicit Euler has a limit: for a spring-like system the step size times the natural frequency must stay below 2. That is the reason Patrick's tyre model (an extremely stiff "spring" at low speed) is advanced in four sub-steps per tick, as Chapter 31 and Chapter 42 explain.
:::

## 17.16 A PID Controller in Code

You met PID control on the drone page. A PID controller computes a command from the *error* (target minus measured): *u = Kp x e + Ki x (integral of e) + Kd x (rate of change of e)*. The **P** term pushes in proportion to the error; the **I** term builds up while an error lingers and removes steady offsets; the **D** term brakes when the error is changing fast.

@figure pid-loop The feedback loop. The measurement is subtracted from the setpoint to give the error, the controller turns the error into a command, the plant responds, and the new measurement comes back round. The controller's memory (the integral and the last error) is what the class below keeps between calls.

In code it is a small class with a little memory (the integral and the previous error):

@code Guide/code/cpp/s16_pid.cpp 1-40

The test is a cart climbing a gentle slope: gravity pulls back with 1.5 N, drag adds 2 N per m/s, and the target speed is 0.5 m/s. Running it gives:

```
P only      : speed after 20 s = 0.2917 m/s (target 0.5)
PI          : speed after 20 s = 0.5000 m/s, within 2% at 4.38 s
PID (Kd = 1): speed after 20 s = 0.4979 m/s, within 2% at 1.31 s
```

Look at the first line. With **P only** the cart never reaches the target: it settles at 0.2917 m/s. That is not a bug; it is a law. To hold 0.5 m/s the motor must push with 1.5 + 2 x 0.5 = 2.5 N, but a P controller only pushes when there is an error, so it needs an error to produce its push. Solving 10 x (0.5 - v) = 1.5 + 2v gives v = 0.2917 exactly. Adding the **I** term (second line) removes the error entirely, because the integral keeps growing until the force is enough. Adding **D** as well (third line) makes the response quicker: within 2 percent of the target at 1.31 s instead of 4.38 s.

:::why Anti-windup: limiting the integral
**What it is.** The line that clamps `integral_` so that `ki_ * integral_` can never ask for more than the output limits allow.

**Why it is done this way.** If the cart is held back (or the motor is saturated), the error stays large and the integral would grow without limit.

**Why it matters.** When the obstruction clears, a huge stored integral keeps pushing long after the error has gone, and the system overshoots wildly. This is called integrator windup.

**What happens if you do not.** The controller works in the gentle test and misbehaves the first time something blocks it.
:::

## 17.17 Testing and Debugging

How do you know a function is right? Test it. A test is a call with an answer you worked out by hand. The smallest useful test harness is a macro and a counter:

@code Guide/code/cpp/s17_tests.cpp 1-20

Its output:

```
ok   clampd(5, 0, 1)
ok   clampd(-5, 0, 1)
ok   clampd(0.3, 0, 1)
ok   speedFromRpm(60, 1.0)
ok   speedFromRpm(100, 0.0325)
FAIL line 17: speedFromRpm(0, 0.0325) = 0, expected 1
1 failure(s)
```

The last test is deliberately wrong (a robot standing still has speed 0, not 1) so that you can see what a failure looks like: it reports the line, the expression, the value it got and the value expected. Notice the comparison uses a **tolerance** (`std::fabs(got - expected) > tol`), never `==`. The program also returns a non-zero exit code when anything fails, which is how build scripts know something is broken.

Beyond tests, the debugging toolbox has four tools. **Print and look** (`printf` of the values around the suspect line) solves most bugs. **`assert`** from `<cassert>` stops the program with the failing condition if an assumption is false. **Sanitizers** (`g++ -g -fsanitize=address,undefined` on Linux or macOS) make the program stop with a clear message on an out-of-range read or a divide by zero. A **debugger** such as `gdb` lets you stop at a line and look at every variable. And the strongest method of all, used on Patrick's program, is a **twin**: write the same thing a second time, differently, and compare.

:::why Testing the edges, not just the middle
**What it is.** Tests for values at the limits: below the range, above the range, and exactly zero.

**Why it is done this way.** Bugs live at the edges: where a decision flips, where a number is zero, where a list is empty.

**Why it matters.** `clampd(0.3, 0, 1)` passing tells you almost nothing. `clampd(-5, 0, 1)` passing tells you the lower limit works.

**What happens if you do not.** The code passes your tests and fails the first time it meets a real sensor that reads zero.
:::

## 17.18 Templates and Operators: Writing Once, Using Many Times

Sometimes one function should work for several types. A **template** is a function (or class) written once with a placeholder type. And **operator overloading** lets your own types use the usual symbols, so that adding two positions reads as `a + b`.

@code Guide/code/cpp/s18_vec2.cpp 1-25

Its output:

```
after three half-steps: (0.45, 0.60), distance from start 0.750
clampT<int>(15, 0, 10) = 10, clampT<double>(-0.5, 0, 1) = 0.0
largest int 9, largest double 0.50
```

`Vec2` is a two-number position with `+`, `*` and `length()` defined, so the loop `pos = pos + step * 0.5` reads like the maths. `template <typename T>` tells the compiler that `T` stands for whatever type the caller uses; it builds a separate version for `int` and for `double` automatically. Templates are how the standard library's `std::vector<int>` and `std::vector<double>` come from one definition.

:::technical Technical Stuff
There is more to C++ than this chapter covers, and you do not need it to build a robot: inheritance and virtual functions (objects that share an interface), move semantics (handing a big object over without copying it), `std::function` (storing a function in a variable), threads (running two things at once) and the compile-time features (`constexpr`). When you meet one of them, you now know enough to read about it.
:::

## Practice Problems E and F: Numerics, PID, Tests, Templates

:::problems
1. In Section 17.15, why is explicit Euler's answer at dt = 0.1 (+4.47) "wrong in kind", not just inaccurate?
2. Why can't a P-only controller hold the cart at 0.5 m/s on the slope? Derive the speed it settles at when Kp = 10.
3. What does anti-windup protect against, and when would you notice its absence?
4. The failing test `speedFromRpm(0, 0.0325)` expected 1.0. What should the expected value be, and why was the test written to fail?
5. Why does the test harness compare with a tolerance instead of `==`?
6. Write the call `CHECK_NEAR(...)` that tests `lerp(10, 20, 0.25)` against its correct value 12.5.
7. Using `Vec2` from Section 17.18, what is `Vec2{1, 2} + Vec2{3, 4} * 0.5`?
8. What is `Vec2{3, 4}.length()`, and what does `clampT<int>(15, 0, 10)` return?
:::

:::answers
**Chapter 17, Practice Problems E and F.**

1. The true answer swings between -1 and +1 for ever. Euler's grows without limit (to 4.47 and more) because each step adds energy; the error is not "a little off" but a different kind of behaviour.
2. To hold 0.5 m/s it must push with 1.5 + 2 x 0.5 = 2.5 N, but P pushes only when there is an error. Setting 10 x (0.5 - v) = 1.5 + 2v gives 5 - 10v = 1.5 + 2v, so v = 3.5 / 12 = 0.2917 m/s, exactly what the program printed.
3. Integrator windup: when the system is held back, the integral grows without limit, and afterwards it keeps pushing long after the error has gone, causing a large overshoot. You would notice the first time something blocks the robot and then lets go.
4. It should be 0, because standing still means zero speed. It was written wrong on purpose, to show what a failure report looks like.
5. Decimals are not stored exactly, so a calculated value can differ from the expected one by a tiny amount even when the code is right; a tolerance accepts those.
6. `CHECK_NEAR(lerp(10, 20, 0.25), 12.5, 1e-12);`
7. `Vec2{3, 4} * 0.5` is `(1.5, 2)`, and adding `(1, 2)` gives `(2.5, 4)`.
8. `5`, since the length is the square root of 9 + 16. And `clampT<int>(15, 0, 10)` returns `10`.
:::

## 17.19 Five Mini Projects

You now know enough C++ to write real programs. Each project below is complete and runs; type it in, run it, then do the "extend it" list. They build up from a plain tool to a small robot controller.

### Mini Project 1: A Length Converter

**Goal.** `./mp1_convert 12 in` prints a length in millimetres, centimetres, metres, inches and feet. **Plan.** Keep a table of units and their size in metres (a struct and an array), find the unit the user named, convert to metres, and then to every unit. **Skills.** Structs, arrays, `argv`, a loop, error messages.

@code Guide/code/cpp/mp1_convert.cpp 1-23

```
$ ./mp1_convert 12 in
  304.8000 mm
   30.4800 cm
    0.3048 m
   12.0000 in
    1.0000 ft
$ ./mp1_convert 5 parsec
unknown unit 'parsec'
```

Notice that the table drives everything: to add a unit you add one line to `UNITS`, and `N`, computed from the array's size, keeps up. **Extend it:** add kilometres and miles; add a `--to` option that prints only one unit; reject negative lengths.

### Mini Project 2: A Sonar Log Analyser

**Goal.** Read a CSV log of sonar distances, report the glitches, clean them and estimate the robot's speed. **Plan.** The program has two modes: `--make` writes a fake log (a robot closing on a wall at 0.1 m/s, with 5 mm of noise and three "no echo" glitches of 4.0 m), and the normal mode reads and analyses it. A **median of three** filter replaces each reading by the middle of itself and its two neighbours, which removes any glitch that lasts a single reading. **Skills.** Files, vectors, lambdas, algorithms.

@code Guide/code/cpp/mp2_sonar.cpp 1-36

```
$ ./mp2_sonar --make
wrote sonar.csv
$ ./mp2_sonar
40 readings, 3 are 'no echo' glitches
after the median-of-3 filter: 2 glitches left (the pair at 22-23 beats a 3-point filter)
distance fell from 0.999 to 0.028 m: closing speed about 0.100 m/s
```

The filter removed the single glitch at reading 7, but the *pair* at readings 22 and 23 survives: with two bad readings in a row, the median of three still contains a bad one. **Extend it:** use a median of five, which removes pairs; print the cleaned log to a new CSV; flag any reading that jumps by more than 0.2 m in one step.

### Mini Project 3: A Bouncing Ball

**Goal.** Simulate a ball dropped from 1 m that loses 20 percent of its speed at each bounce, write its height to a CSV, and check the first bounce against physics. **Plan.** Each tick, gravity changes the speed and the speed changes the position (semi-implicit Euler from Section 17.15). When the height goes below zero, put the ball on the floor and reverse the speed times the bounce factor. **Skills.** The simulation loop, a time step, file output, checking against a formula.

@code Guide/code/cpp/mp3_ball.cpp 1-20

```
bounce 1 at t = 0.452 s, then rises to 0.639 m
bounce 2 at t = 1.175 s, then rises to 0.408 m
bounce 3 at t = 1.753 s, then rises to 0.261 m
bounce 4 at t = 2.215 s, then rises to 0.166 m
...
exact: first bounce at 0.452 s, first rebound height 0.640 m
```

The simulation agrees with the formulas: the fall takes the square root of (2 x 1 / g), which is 0.452 s, and the first rebound reaches 0.8 squared times 1 m, which is 0.640 m (the simulation's 0.639 is the time step's tiny error). Open `ball.csv` in a spreadsheet and plot it to see the shrinking arcs. **Extend it:** stop when the bounces become smaller than 1 cm and report how long that took; add air drag proportional to speed; make the bounce factor a command-line option.

### Mini Project 4: Turning a Robot with P and PD Control

**Goal.** A two-wheeled robot must turn on the spot through 90 degrees. Compare a P controller with PD controllers, looking at overshoot and settling time. **Plan.** The wheels follow their commands with a lag of 0.15 s, like real motors. The turning rate is the difference of the wheel speeds over the track width. The command is *Kp x (target - yaw) - Kd x (turning rate)*, limited to the range -1 to +1. **Skills.** A struct returned from a function, the PID idea from Section 17.16 applied to heading, and reading results critically.

@code Guide/code/cpp/mp4_heading.cpp 1-29

```
P  (Kp 2, Kd 0)  : overshoot  12.0 %, settled within 3 % after 0.94 s
PD (Kp 2, Kd 0.5): overshoot   0.0 %, settled within 3 % after 1.22 s
PD (Kp 2, Kd 1.0): overshoot   0.0 %, settled within 3 % after 2.13 s
```

P alone is quick but overshoots by 12 percent, because the wheels lag the command and the robot is still turning when it reaches the target. Adding the D term (`- kd * om`) brakes the turn as it approaches: with Kd = 0.5 the overshoot disappears for a small cost in time, and with Kd = 1.0 the robot is over-damped and takes 2.13 s. Choosing the gains is a trade, and this is exactly the trade Patrick's turn controller makes. **Extend it:** search Kd between 0 and 1 for the fastest settling with no overshoot; add the 0.35 minimum command that Patrick uses to beat motor stiction; try a turn of 180 degrees.

### Mini Project 5: A Robot That Drives a Square

**Goal.** Drive a 1 m square (forward, turn 90 degrees, four times) using only *dead reckoning*: the controller counts time and commanded speed, not the real position. Then give the right wheel a 1 percent error and see how far it misses. **Plan.** A two-state machine (FORWARD, TURN) integrates the true pose from the true wheel speeds, while the controller decides when to switch using only what it *commanded*. **Skills.** State machines, differential-drive geometry, the difference between what a robot believes and what happened.

@code Guide/code/cpp/mp5_square.cpp 1-29

```
right wheel x1.00: ends at (0.000, -0.000) m, heading 360.0 deg, 0.001 m from the start
right wheel x1.01: ends at (0.129, -0.102) m, heading 373.7 deg, 0.165 m from the start
```

With perfect wheels the robot returns to its start to within a millimetre. With one wheel a mere 1 percent too fast, it ends 16.5 cm away and 13.7 degrees off. Errors in dead reckoning never cancel; they accumulate. That is why Patrick does not trust his wheels to find the pantry: he *looks*, with the sonar, and brakes when the sensor says he is close enough. **Extend it:** add a sonar-like check that corrects the heading at each corner; make the square 2 m; print the pose at every corner.

:::problems
1. In mini project 1, what is the smallest change that adds miles (1609.344 m) as a unit?
2. In mini project 2, why does a median of three miss the two-reading glitch? What filter would catch it?
3. In mini project 3, the first bounce is at 0.452 s. Show that this follows from y = 1/2 g t squared.
4. In mini project 4, why does the P-only robot overshoot even though the target is reached at the first crossing?
5. In mini project 5, where does the 13.7 degrees of heading error come from?
6. Design (on paper) a sixth project that combines two of the above. What would it do?
:::

:::answers
**Chapter 17, Mini project problems.**

1. Add `{"mi", 1609.344}` to the `UNITS` table; `N` updates itself.
2. Two bad readings in a row mean the middle of any three consecutive readings still includes a bad one. A median of five would catch a pair (it would take three bad readings to fool it).
3. Setting y = 1 m, 1 = 1/2 x 9.80665 x t squared, so t = square root of (2 / 9.80665) = 0.4516 s.
4. The wheels lag the command, so at the moment the heading reaches the target the wheels are still turning at speed, and the robot carries on. P has no term that notices it is moving fast.
5. Mostly from the four straight legs: a right wheel 1 percent fast steers the robot slightly left, 0.01 x 0.3 / 0.193 = 0.0155 rad/s for 3.33 s on each leg, about 3 degrees a leg and 11.9 degrees over four. The turns add about 0.45 degrees each (1.8 degrees over four), making 13.7 degrees in all.
6. For example: the bouncing ball (project 3) with the sonar filter (project 2) applied to its height, to see whether a median filter would recover the bounce heights from noisy readings.
:::

## What Comes Next

You now have the whole toolbox: types, decisions, loops, functions, collections, classes, state machines, files, numerical simulation, a PID controller, tests and templates. That is enough to write Patrick's program. In Part V, Chapter 42, we do exactly that: starting from an empty file, we build the whole thing in nine stages, each a program that compiles and runs, from one spinning motor to five ingredients laid out for breakfast with a soft stop. Before you read it, you can prepare by solving Project 6 in Part III (the cart that brakes before a wall) and Advanced C++ in Part IV (stable simulation, and proving a program right with a twin).
