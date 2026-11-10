# C++: From Your First Program to Your Own Robot

Everything so far has run inside a web browser. Patrick's controller, the program that decides when to drive, brake, reach and grip, is different. On the real robot it is a small program running on a microcontroller, and microcontrollers do not speak JavaScript. They speak C++ (or its older cousin, C). That is why the robot's whole motion also exists as a C++ file, and why this book has a long chapter on it.

This chapter is a complete C++ course, from "what is a compiler?" up to writing a controller for a robot of your own. It is written for someone who has never programmed in C++, but who has read Chapter 11 (JavaScript) and so already knows what a variable, a function and a loop are. If you have not, nothing here will break, but the first sections will move quickly.

**How the chapter is organised.** Sections 17.1 to 17.18 teach the language, from the first program to templates. Each group of sections ends with **Practice Problems** and line-by-line answers. Section 17.19 gives **five mini projects**, each a complete, working program. Then, in Part V, **Chapter 42** is the grand finale: the guided project in which we build Patrick's whole program from an empty file, one runnable stage at a time.

**The code is real.** Every program in this chapter is a file in the folder `Guide/code/cpp`, and every output shown was produced by compiling and running that file. Type them in yourself if you can; typing teaches more than reading. If a listing and your screen ever disagree, trust the screen and look for a typing slip.

:::remember
JavaScript is read and run by the browser as it goes. C++ is first **compiled**: a program called the compiler reads all your code, checks it, and turns it into a file the computer can run directly. The checking is the point. Many mistakes that JavaScript only reveals while running, C++ catches before it runs at all.
:::

## Words You Will Meet

| Word | What it means |
|---|---|
| **Source file** | The text file you write, such as `robot.cpp`. |
| **Compiler** | The program (here, `g++`) that turns source into a runnable program. |
| **Linker** | The last step of compiling: it joins your pieces and the libraries into one program. |
| **Header** | A file of declarations you pull in with `#include`, such as `<cstdio>` for printing. |
| **`main`** | The function where every C++ program starts. |
| **Type** | What kind of value a variable holds: `int`, `double`, `bool`, `char`. |
| **Variable** | A named box that holds a value of one type. |
| **`const`** | A promise that a value never changes after it is set. |
| **Function** | A named piece of code that takes **parameters** and **returns** a value. |
| **Overloading** | Several functions sharing one name, told apart by their parameter types. |
| **Reference (`&`)** | A second name for an existing variable. |
| **Pointer (`*`)** | A variable holding the *address* of another. |
| **Array / `std::vector`** | A numbered row of values of one type; a vector can grow. |
| **`struct` / `class`** | A bundle of related data (and the functions that use it) under one name. |
| **Member / member function** | A variable or function that belongs to a struct or class. |
| **Constructor** | The function that sets up a new object. |
| **`enum`** | A list of named choices, such as `RED, GREEN, AMBER`. |
| **Lambda** | A small function written in the middle of other code. |
| **Template** | A function or class written once that works for many types. |
| **Namespace** | A name prefix that keeps names apart; `std::` is the standard library's. |
| **Time step (`dt`)** | How much simulated time passes in one pass of the loop. |

## 17.1 Your First Program

Create a file called `hello.cpp` and type this:

@code Guide/code/cpp/s01_hello.cpp 1-6

**Line 1** pulls in the header for printing. **Line 3** is `main`, where the program starts; the `int` in front says it hands back a whole number when it finishes. **Line 4** prints a line of text: `std::printf` is the function, the text is in quotes, and the two characters `\n` inside the quotes mean "start a new line". **Line 5** returns 0, which by tradition means "everything went well". Every statement ends with a semicolon.

Now compile and run it, in a terminal:

```
g++ -std=c++17 -Wall -Wextra -O2 hello.cpp -o hello
./hello
```

Read the first line as a sentence. Use the 2017 version of the language (`-std=c++17`). Warn me about suspicious code (`-Wall -Wextra`). Optimise for speed (`-O2`). Compile `hello.cpp` and call the result `hello`. Running it prints `Hello, Patrick!`. (On Windows the program is `hello.exe`, and you run it by typing `hello` or `.\hello`.)

:::why Always compiling with -Wall -Wextra
**What it is.** Two flags that make the compiler tell you about code that is legal but probably a mistake.

**Why it is done this way.** C++ will happily accept a lot of nonsense. A warning is the compiler tapping you on the shoulder.

**Why it matters.** When the robot's code was written, the compiler flagged one line in the controller where `if (...) go(...); break;` sat on a single line and looked as though the `break` belonged to the `if`. It did not, and the line was reformatted so that nobody reading it later would be fooled.

**What happens if you do not.** You find the same mistakes later, by watching a robot do the wrong thing, which is slower and more confusing than reading a warning.
:::

**C++ has two ways to print.** The older `printf` comes with C. The newer `std::cout` comes with C++ and uses `<<` to chain pieces together:

@code Guide/code/cpp/s01_hello_cout.cpp 1-6

Both work, and you will see both in the wild. This chapter mostly uses `printf`, because it lets you control the number of decimal places precisely (`%.3f` means "a decimal number with three places"), which matters when you are comparing numbers from two programs. The codes you need are `%d` for a whole number, `%f` for a decimal, `%c` for one character, `%s` for text, and `%%` for a real percent sign.

**Reading an error message.** Delete the semicolon at the end of line 4 (this is the file `s01_broken.cpp`) and compile. The compiler answers:

```
s01_broken.cpp: In function 'int main()':
s01_broken.cpp:4:35: error: expected ';' before 'return'
```

Read it from the left: the file, then the line number (4), then the column (35), then the problem. The compiler reports where it *noticed* the trouble, which is often the line after the real mistake: here the missing semicolon is on line 4, but the compiler only realised on line 5, at `return`. When you cannot see the error on the line named, look at the line above.

:::tip
Fix the first error first. One missing bracket can make the compiler print twenty errors, and nineteen of them vanish when you fix the first.
:::

## 17.2 Numbers, Types and Arithmetic

In JavaScript every number is one kind. In C++ you choose, and the choice has consequences. Here is a tour:

@code Guide/code/cpp/s02_types.cpp 1-19

Running it prints:

```
sizes in bytes: int 4, double 8, bool 1, char 1
7 / 2   = 3
7 / 2.0 = 3.5
7 % 2   = 1
static_cast<int>(3.99) = 3, round(3.99) = 4
auto k = 2 * 3.5 -> 7.0
3 0.45 0 A
```

Four things to take from it. **First**, `int` holds whole numbers (4 bytes: about plus or minus two billion), `double` holds decimals (8 bytes, about 15 significant digits), `bool` holds true or false, and `char` holds one character. **Second**, dividing two `int` values gives an `int` and throws the remainder away, so `7 / 2` is `3`; make one side a `double` (`7 / 2.0`) to get `3.5`. The `%` operator gives the remainder. **Third**, `static_cast<int>(3.99)` *cuts off* the decimals (giving 3); it does not round. Use `std::round` for rounding. **Fourth**, `auto` lets the compiler work out the type from the value, which saves typing but should not hide what the type is.

:::warning
Dividing two whole numbers is the most common beginner bug in C++, and it never gives an error. `1 / 2` is `0`. If a result is mysteriously zero, check for it. Patrick's code writes `9.0 / 5.0` and `1.0` on purpose.
:::

:::why Putting units in names and constants at the top
**What it is.** Names like `wheelR` (metres) and `STOP_AT` (metres), declared once near the top, each with a comment giving its unit.

**Why it is done this way.** A bare `0.108` in the middle of code means nothing. A named constant means something, and has one place to change.

**Why it matters.** The distance at which Patrick brakes was tuned several times. Each time it was a one-line change, and every use of it updated.

**What happens if you do not.** The number appears in five places, you change four of them, and the robot brakes at two different distances depending on which code path ran.
:::

**Maths functions** live in `<cmath>`: `std::sqrt`, `std::pow`, `std::sin` (angles in radians), `std::atan2`, `std::fabs` (absolute value of a decimal), `std::hypot`, `std::min` and `std::max` (in `<algorithm>`). A constant that never changes is declared `const`, so that the compiler refuses any attempt to change it.

:::worked Wheel speed from rpm
How fast does Patrick move if his 65 mm wheels turn at 25, 50, 75 and 100 rpm?

**Step 1. The physics.** A wheel turning at *rpm* revolutions per minute turns at *omega = rpm x 2 pi / 60* radians per second. A point on its rim, and so the robot, moves at *v = omega x r*.

**Step 2. The program.**

@code Guide/code/cpp/s02_wheel_speed.cpp 1-17

**Step 3. Predict, then run.** 100 rpm is 10.47 rad/s, and times 0.0325 m that is 0.340 m/s. Running the program prints:

```
  0 rpm -> 0.000 m/s
 25 rpm -> 0.085 m/s
 50 rpm -> 0.170 m/s
 75 rpm -> 0.255 m/s
100 rpm -> 0.340 m/s
```

**Step 4. Reflect.** Doubling the rpm doubles the speed, as the formula says. The `for` loop counts in steps of 25 (`rpm += 25`). The function does one job and is easy to test. The `int` loop variable is passed to a `double` parameter and C++ converts it for you.
:::

## 17.3 Reading Input

So far the programs talk and nobody answers. To read what the user types, use `std::cin`:

@code Guide/code/cpp/s03_input.cpp 1-9

Compile it and run it. It asks for a temperature, and if you type `25` and press Enter it prints `25 C = 77 F`. (To try it without typing, feed it a value from the terminal: `echo 25 | ./s03_input`.) The `>>` pulls the next value off the keyboard into the variable `c`, converting the text to a `double` as it goes.

:::why Reading with cin, and checking for failure in real programs
**What it is.** `std::cin >> c` reads a value into `c`. If the user types `hello` instead of a number, the read fails and `c` is left unchanged.

**Why it is done this way.** The stream remembers whether the last read worked, so you can ask `if (!(std::cin >> c))` and handle the problem.

**Why it matters.** A robot's input is rarely a keyboard, but the habit is the same: never assume the data you read is what you hoped.

**What happens if you do not.** The program quietly works on garbage and gives wrong answers with no error.
:::

## Practice Problems A: First Steps

:::problems
1. The compiler says `error: expected ';' before 'return'` pointing at line 12. Where should you look first?
2. What does `std::printf("%d", 9 / 4);` print? What does `std::printf("%.2f", 9 / 4.0);` print?
3. After `int x = 7; x += 3; x *= 2;` what is `x`?
4. A robot's wheels have a radius of 0.05 m and turn at 120 rpm. How fast does it move?
5. What do `static_cast<int>(-2.7)` and `std::round(-2.7)` give?
6. Write a program that reads two numbers and prints their average.
7. Why does `printf` need `%%` to print a percent sign?
8. Which type would you choose for: the number of items on a table, a motor voltage, whether the claw is holding something?
:::

:::answers
**Chapter 17, Practice Problems A.**

1. At line 11, the line before. The compiler often reports a missing semicolon at the next statement.
2. The first prints `2` (whole-number division). The second prints `2.25`.
3. 7 + 3 = 10, then 10 x 2 = 20. So `x` is `20`.
4. omega = 120 x 2 pi / 60 = 12.566 rad/s, and v = 12.566 x 0.05 = 0.628 m/s.
5. `static_cast<int>(-2.7)` is `-2` (it cuts the decimals toward zero); `std::round(-2.7)` is `-3`.
6. `double a, b; std::cin >> a >> b; std::printf("%.3f", (a + b) / 2);`, inside `main`, with `<iostream>` and `<cstdio>` included.
7. In a `printf` format string, `%` starts a code such as `%d`, so a real percent sign must be written twice.
8. `int` for the count, `double` for the voltage, `bool` for the claw.
:::

## 17.4 Making Decisions

A program becomes interesting when it can choose. The tools are `if`, `else if`, `else`, the comparison operators (`<`, `<=`, `>`, `>=`, `==`, `!=`) and the logical operators (`&&` for "and", `||` for "or", `!` for "not").

@code Guide/code/cpp/s04_decide.cpp 1-19

Running it prints:

```
2.500 m -> DRIVE
0.800 m -> DRIVE
0.290 m -> SLOW
0.108 m -> BRAKE
0.050 m -> BRAKE
4.000 m -> NO ECHO: keep driving
near && !lowBattery = 1, near || lowBattery = 1
ternary: duty is high
```

Notice the **order** of the tests in `decide`. A reading of 0.05 is below 0.108, below 0.30, and so on; the first test that is true wins, and the rest are skipped. The three-way choice `duty > 70 ? "high" : "normal"` is the **ternary operator**: a condition, then the value if true, then the value if false.

:::warning
`==` compares; `=` assigns. Writing `if (x = 5)` assigns 5 to `x` and is then true. The compiler's `-Wall` warns about it. Another trap: never compare two calculated decimals with `==` (see Section 17.15), because `0.1 + 0.2 == 0.3` is false.
:::

:::why Testing the closest threshold first
**What it is.** In `decide`, the BRAKE test comes before the SLOW test.

**Why it is done this way.** An `if / else if` chain stops at the first true test. A distance of 0.05 m also satisfies "less than 0.30", so if SLOW came first the robot would never brake.

**Why it matters.** This is the shape of every sensor-driven decision in the robot: the most urgent test first.

**What happens if you do not.** The robot behaves correctly for most distances and fails at exactly the one that matters.
:::

## 17.5 Loops

Four tools repeat things. A `for` loop counts. A `while` loop repeats while a condition holds. A `do ... while` loop does the same but runs at least once. And inside any of them, `break` leaves the loop and `continue` skips to the next lap.

@code Guide/code/cpp/s05_loops.cpp 1-28

Its output:

```
sum 1..10 = 55
halving from 1.0 until below 0.01 took 7 steps
first n with n*n >= 50 is 8
1 3 5 7 9 <- odd numbers up to 9
  1  2  3  4
  2  4  6  8
  3  6  9 12
```

The last two lines show a loop *inside* a loop: the outer loop picks the row and the inner loop prints the columns. A simulation is just a loop: each lap advances the world by one small time step, which is the idea behind everything in the second half of this chapter.

:::why A fixed time step, not "however long the frame took"
**What it is.** In a simulation, `dt` is a constant such as 0.001 s, whatever the computer is doing.

**Why it is done this way.** Physics equations are sensitive to the step size. A fixed step gives the same answer every time, on every computer.

**Why it matters.** This is exactly why the C++ and the JavaScript versions of the robot can be compared tick for tick, and why they agree exactly. If the step varied, two runs would never match.

**What happens if you do not.** The robot behaves slightly differently on every run, and a bug you saw once cannot be repeated to study it.
:::

## 17.6 Functions

A function takes values in and gives one back. You have already used several. Here are the ideas that matter for writing your own:

@code Guide/code/cpp/s06_functions.cpp 1-26

Its output:

```
clampd(1.7, 0, 1) = 1.0   clampd(-3, 0, 1) = 0.0
lerp(10, 20, 0.25) = 12.50
square(4) = 16, square(1.5) = 2.25
power(3) = 9, power(2, 10) = 1024
after swap: a=2 b=1
length of (3,4,12) = 13
counter after three ticks = 6
```

**Parameters and return values.** `clampd` limits a number to a range; `lerp` (short for linear interpolation) blends from `a` to `b` as `t` goes from 0 to 1. **Overloading** lets two functions share a name when their parameter types differ: `square(4)` calls the `int` version and `square(1.5)` the `double` one. A **default argument** (`int exp = 2`) fills in a value when the caller leaves it out. **References**: normally a function receives *copies*, so changing them changes nothing outside. `swapValues(double& a, double& b)` takes references, so it really swaps the caller's variables. `const double (&v)[3]` is a reference to an array that the function promises not to change. A **static** local variable (`calls` in `tick`) is remembered between calls, whereas an ordinary local variable is created afresh on each call.

:::why Small, pure functions
**What it is.** Functions that depend only on what you pass in and change nothing else.

**Why it is done this way.** They are easy to check one at a time. `mu(0.17, 1.0)` always gives the same answer.

**Why it matters.** Patrick's physics is a dozen of these. Each was tested alone before they were joined, so when a whole run looked wrong, the search for the fault was short.

**What happens if you do not.** One giant function that does everything, in which a mistake anywhere makes everything look wrong, and nothing can be tested alone.
:::

:::tip
Prefer passing by `const` reference for anything bigger than a few numbers: `void draw(const Mission& m)` hands over the original without copying it and promises not to change it.
:::

## Practice Problems B: Decisions, Loops, Functions

:::problems
1. With the `decide` function of Section 17.4, what does `decide(0.2)` return?
2. State De Morgan's law: what is `!(a && b)` the same as?
3. What does `for (int i = 10; i > 0; i -= 3) std::printf("%d ", i);` print?
4. `int n = 1; while (n < 100) n *= 3;` How many times does the loop body run, and what is `n` at the end?
5. Write a function `double average(double a, double b)`.
6. A function is `int f(int x) { static int c = 0; c += x; return c; }`. What do `f(2)`, `f(3)`, `f(4)` return in turn?
7. With the overloads in Section 17.6, what do `square(3)` and `square(3.0)` print?
8. `double power(double base, int exp = 2)`: what does `power(5)` return?
:::

:::answers
**Chapter 17, Practice Problems B.**

1. `"SLOW"`. 0.2 is above 0.108 so it is not BRAKE, and at or below 0.30 so it is SLOW.
2. `!a || !b`: it is false only when both `a` and `b` are true.
3. `10 7 4 1`.
4. Five times, and `n` ends at 243 (1, 3, 9, 27, 81, 243).
5. `double average(double a, double b) { return (a + b) / 2; }`
6. 2, then 5, then 9 (the static `c` keeps its value between calls).
7. `9` and `9` (the first calls the `int` version, the second the `double` version, which prints as 9.00 with `%.2f`).
8. 25.
:::

## 17.7 Arrays and Vectors

One number at a time is not enough for a robot: a sensor gives hundreds of readings. A fixed row is an **array**: `double arr[4] = {1, 2, 3, 4};`. A row that can grow is a `std::vector`, from `<vector>`, and it comes with a toolbox of ready-made algorithms in `<algorithm>` and `<numeric>`.

@code Guide/code/cpp/s07_vectors.cpp 1-24

The output:

```
8 readings, first 0.82, last 0.83
mean 1.010  median 0.815  min 0.78  max 2.40
readings above 1 m: 1
0.82 0.79 0.85 0.81 2.40 0.80 0.78 0.83 
fixed array total = 10
```

Look at the **mean and median**. One glitch reading, 2.40 m, drags the mean up to 1.010, which is wrong for a robot that is really about 0.8 m from the wall. The median (the middle value once sorted) is 0.815 and barely notices. This is why sonar data is cleaned with median filters, as you will see in mini project 2. The loop `for (double x : d)` is a **range-for**: it visits every element in turn without any counting. Arrays count from zero: `arr[0]` is the first element and `arr[3]` the last of four.

:::why Using the standard algorithms
**What it is.** `std::sort`, `std::accumulate`, `std::count_if` and `std::minmax_element` instead of hand-written loops.

**Why it is done this way.** They have been written, tested and optimised by thousands of people.

**Why it matters.** Less code to read means fewer places for a bug to hide, and the names say what you mean: `count_if` is clearer than a loop with a counter.

**What happens if you do not.** You write your own sort at 2 a.m., and it is slightly wrong.
:::

:::warning
Reading past the end of an array or vector (`v[8]` in a vector of 8) is not an error that the compiler or even the program will always notice. It reads whatever happens to be in memory. Always keep indexes within `0` to `size() - 1`; `v.at(i)` checks for you and stops with a clear message.
:::

## 17.8 Strings and the Command Line

Text is a `std::string`, from `<string>`. You can join strings with `+`, ask for `size()`, cut pieces with `substr`, and turn a number into text with `std::to_string`. A program can also be given **arguments** when it starts: `main(int argc, char** argv)` receives the count and the words. This is how Patrick's program accepts `--duty 0.9` or `--bands 0`.

@code Guide/code/cpp/s08_args.cpp 1-17

Run it plainly and with arguments:

```
$ ./s08_args
Robot Patrick: duty 0.70, bands on (34 characters)
argc was 1
$ ./s08_args --duty 0.9 --bands 0 --name Rex
Robot Rex: duty 0.90, bands off (31 characters)
argc was 7
```

`argv[0]` is the program's own name, so `argc` is always at least 1. `std::strcmp` returns 0 when two C strings are equal (note the `!` before it). `std::atof` and `std::atoi` convert text to a `double` and an `int`. The `i + 1 < argc` test makes sure there *is* a next argument before `++i` reads it.

:::why Command-line options instead of editing the code
**What it is.** Settings such as the duty cycle and whether the rubber bands are on are chosen when the program is run.

**Why it is done this way.** The same compiled program can run a hundred experiments, from a script, without being rebuilt.

**Why it matters.** The experiments in Chapter 42 (full throttle on bare wheels, pausing at 10.5 seconds) are each one command line.

**What happens if you do not.** You edit, recompile and rerun for every experiment, and eventually run the wrong build.
:::

## 17.9 Structs and Classes

A **struct** groups related variables; a **class** does the same and can hide some of them. Giving a type its own functions, called **member functions**, is the beginning of object-oriented programming. A **constructor** is the member function that sets up a new object.

@code Guide/code/cpp/s09_motor_class.cpp 1-23

It prints Patrick's motor at three throttle settings:

```
duty 0.4: 1.84 V, free speed 3.01 rad/s = 29 rpm, stall current 0.31 A
duty 0.7: 3.22 V, free speed 8.94 rad/s = 85 rpm, stall current 0.54 A
duty 1.0: 4.60 V, free speed 14.88 rad/s = 142 rpm, stall current 0.77 A
```

**Line 5** declares the class. Everything after `public:` can be used from outside; everything after `private:` (**line 12**) can be used only by the class's own functions. **Line 7** is the constructor: after the colon is an **initialiser list**, which sets the hidden members `Vbat_`, `Rm_`, `ke_` and `I0_` as the object is created (the trailing underscore is a habit that marks members). The functions marked `const` after the brackets promise not to change the motor. In `main` (**line 17**), `Motor m(6.0, 6.0, 0.2326, 0.19);` creates one, and `m.supply(duty)` calls its member function with a dot.

The numbers are Patrick's: at 70 percent duty the motor sees 3.22 V, and with no load it would spin at 8.94 rad/s (about 85 rpm). With a wheel of radius 0.0325 m, that is the robot's top speed of about 0.29 m/s, which is what you see on the page.

:::why Hiding the data inside a class
**What it is.** The numbers that describe the motor are private; the outside world can only call `current`, `freeSpeed`, `stallCurrent` and `supply`.

**Why it is done this way.** The class guards its own rules. No other code can accidentally set the resistance to zero.

**Why it matters.** The motor law is written in one place. When the real motor was measured and the resistance corrected, one line changed and every part of the program used the right value.

**What happens if you do not.** Any code anywhere can change any number, and when something is wrong you must search the whole program for who did it.
:::

:::why One struct holding the whole state
**What it is.** In Patrick's program, every changing value of the simulation (position, heading, arm angle, which phase) lives inside one `Mission` object.

**Why it is done this way.** A simulation is "a state, and a rule that turns it into the next state". Putting the state in one place makes that literal.

**Why it matters.** You can run two missions side by side, or restart one, by making another object. Nothing is hidden in the program's global variables.

**What happens if you do not.** State scattered across many loose global variables, where restarting means remembering to reset forty of them and missing the forty-first.
:::

## Practice Problems C: Collections, Text and Classes

:::problems
1. A `std::vector<int> v;` receives `v.push_back(4); v.push_back(9); v.push_back(2);`. What are `v.size()`, `v[1]` and `v.back()`?
2. What is the median of {5, 1, 4, 2, 3}? Why does a median beat a mean for glitchy sonar data?
3. What is the mean of the readings 0.82, 0.79, 0.85?
4. A program is run as `./prog --duty 0.9`. What are `argc`, `argv[1]` and `argv[2]`?
5. In Section 17.9, what are the free speed and stall current at 100 percent duty?
6. Why are the data members of a class usually private?
7. A member function does not change the object but is not marked `const`. What goes wrong?
8. After `std::string s = "ab"; s += "cd";`, what are `s` and `s.size()`?
:::

:::answers
**Chapter 17, Practice Problems C.**

1. `v.size()` is 3, `v[1]` is 9, `v.back()` is 2.
2. Sorted it is 1 2 3 4 5, so the median is 3. A single wild reading moves the mean a long way but moves the median by at most one place.
3. (0.82 + 0.79 + 0.85) / 3 = 0.82.
4. `argc` is 3, `argv[1]` is `"--duty"`, `argv[2]` is `"0.9"` (`argv[0]` is the program's name).
5. 14.88 rad/s (about 142 rpm) and 0.77 A, from the program's output.
6. So that only the class's own functions can change them, which lets the class keep its rules (no zero resistance, for example) and means a bug can only come from a few places.
7. You cannot call it on a `const` object or through a `const` reference; the compiler stops with an error. Marking it `const` states the promise and fixes that.
8. `s` is `"abcd"` and `s.size()` is 4.
:::
