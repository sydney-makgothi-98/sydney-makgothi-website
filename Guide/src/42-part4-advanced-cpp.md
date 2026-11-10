# Advanced C++

You can already read the robot's program. This chapter is about the three things that made it *trustworthy*: a simulation that stays stable, a second program that proves the first one right, and a few habits that keep C++ honest.

## When a Time Step Is Too Big

Chapter 17 said a smaller time step gives a more accurate simulation. There is a harsher truth: a step that is too big does not just give a *worse* answer. It can give an answer that explodes.

Think of a tyre as a very stiff spring pushing on a light wheel. The wheel's natural speed of vibration is the square root of (stiffness over mass). The simple update used in the book (change the speed, then change the position) is only stable if the time step times that natural frequency is less than 2.

```
const double k = 4.0e6, m = 0.4;      // sqrt(k/m) = 3162 per second
const double dt = 0.001;              // dt * 3162 = 3.2: above the limit of 2
for (int sub : {1, 4}) {
  double x = 0.001, v = 0.0, h = dt / sub;
  for (int i = 0; i < 100; i++)               // 100 ticks = 0.1 s
    for (int s = 0; s < sub; s++) { v += -k * x / m * h; x += v * h; }
  std::printf("sub-steps per tick = %d: |x| after 0.1 s = %.6g m\n", sub, std::fabs(x));
}
```

(You also need `#include <cmath>`, `<cstdio>` and `<initializer_list>`.) Running it prints:

```
sub-steps per tick = 1: |x| after 0.1 s = 4.70899e+86 m
sub-steps per tick = 4: |x| after 0.1 s = 0.000377145 m
```

With one step per tick, a wheel that started 1 millimetre from rest is, a tenth of a second later, 10 to the power 86 metres away: nonsense. With four steps per tick (each a quarter of a millisecond, so step times frequency is 0.79, well under 2) it is a perfectly sensible fraction of a millimetre.

:::why Sub-stepping the wheels
**What it is.** In `sideStep`, the wheel and the robot's speed are advanced in four small steps for every one tick of the main loop.

**Why it is done this way.** The tyre's grip changes extremely fast near zero slip, which behaves like that very stiff spring. Four sub-steps keep the step times the frequency under the limit, without making the whole simulation four times slower: only the wheel equations use them.

**Why it matters.** This was a real bug in the robot's first version. At low speed the wheel chattered, and worse, tiny rounding differences between two programs grew into large differences, so the two could never agree. Sub-stepping fixed both the chatter and the disagreement.

**What happens if you do not.** The simulation looks fine at speed and falls apart at the exact moments you most care about: starting and stopping.
:::

:::technical Technical Stuff
The limit "step times frequency is less than 2" comes from the maths of this kind of update, which is called symplectic (or semi-implicit) Euler. A fancier method such as Runge-Kutta allows a somewhat larger step, but sub-stepping the one stiff part is simpler, cheaper, and easier to keep identical in two languages.
:::

## A Twin to Prove It Right

How do you know a physics program is correct? You cannot look at it and see. One of the best checks is to write the same program a *second* time, differently, and compare. If both agree on thousands of numbers, a mistake in one would have to be repeated, by accident, in the other.

For Patrick, the second program is the web page's JavaScript. Both write a table: one row every 10 ms, the same 13 columns (time, position, heading, servo angle, and so on). Then you compare the two tables row by row.

```
./patrick --out cpp.csv                    # the C++ run
node dump.mjs js.csv                       # the JavaScript run, same columns
tr -d '\r' < cpp.csv | cmp - js.csv        # byte-for-byte comparison
```

When it was run for this book, the two files were identical, with the single exception of Windows line endings (C++ writes a carriage return before each newline on Windows; JavaScript does not), which is why the `tr -d '\r'` is there. It was repeated for a run with a pause and a resume in the middle, which was identical too.

:::why Comparing two programs row by row
**What it is.** Run the C++ and the JavaScript, write both to a table, compare the tables.

**Why it is done this way.** A table of 9,776 rows by 13 columns checks 127,000 numbers at once, including every state change and every servo angle. No person could check that by eye.

**Why it matters.** The page shows the JavaScript. The download is the C++. Because they agree exactly, what the visitor downloads is truly what they watched.

**What happens if you do not.** The code you publish and the animation you show slowly drift apart, and nobody notices until someone downloads the file and finds it does something different.
:::

:::warning
The comparison only works if both programs do their floating-point arithmetic in the same order. A compiler flag named `-ffast-math` lets the compiler reorder it for speed, which changes the last digits and ruins an exact comparison. The robot's build does not use it. If you ever want exact agreement between two programs, avoid that flag.
:::

## Habits That Keep C++ Honest

**Make everything `const` that can be.** A `const` promise is checked by the compiler. If you write `const double g = 9.80665;` and later try `g = 3;`, it refuses. Patrick's constants (`STOP_AT`, `RETREAT`, the lane positions) are all `const`, so nothing can change a tuned value by accident.

**Pass big things by reference.** `void draw(const Mission& m)` hands the function the original, not a copy, and the `const` promises it will not alter it. For a few numbers, copying is fine. For a struct with arrays inside, it wastes time.

**Prefer the standard library.** `std::min`, `std::max`, `std::hypot` and `std::vector` have been tested by millions of people. Writing your own copy invites mistakes. The robot's `clampd` is a one-line wrapper around two of them.

**Turn on the tools that find mistakes.** On Linux or macOS the compiler can add runtime checks: `g++ -g -fsanitize=address,undefined` makes the program stop with a clear message if it reads past the end of an array or divides by zero. Use it while developing; switch it off for the final fast build.

:::why Compiling with -O2 for the final build only
**What it is.** `-O2` asks the compiler to make the program faster, at the cost of a slower compile and harder debugging.

**Why it is done this way.** While you are hunting a bug you want slow, simple code that a debugger can step through. When you are done, you want speed.

**Why it matters.** The robot's full 98-second run is about 98,000 ticks, each of which fires rays at ten obstacles. With `-O2` it finishes in well under a second.

**What happens if you do not.** Nothing breaks, but test runs feel sluggish, so you run fewer of them.
:::

## Where This Goes Next

The robot's program is a *simulation* of the controller. The real robot runs the same state machine on an Arduino-class board, where `std::printf` becomes `Serial.println`, the sonar is read from a real pin, and motor commands go to real PWM outputs. The state machine, the ramps and the soft stop carry over unchanged. Only the edges (reading sensors, driving outputs) are replaced.

:::quiz Advanced C++
1. A stiff system explodes at one step per tick but is stable at four. What changed numerically?
2. Why does a second, independently written program make a simulation more trustworthy?
3. What does `-ffast-math` do, and why is it a problem for the comparison?
4. When would you use `-fsanitize=address,undefined`, and when would you not?
5. Which parts of Patrick's simulation would change on a real Arduino, and which would stay?
:::

:::answers
**Advanced C++ quiz.**

1. The step size dropped to a quarter, so (step times natural frequency) fell from 3.2 to 0.79, below the stability limit of 2.
2. A mistake in one program would have to be repeated by accident in the other for the tables to agree. If the programs are written separately and agree on thousands of numbers, the chance of a shared mistake is tiny.
3. It lets the compiler reorder floating-point arithmetic for speed. Reordering changes the last digits, so two programs that should agree exactly would differ slightly and an exact comparison would fail.
4. During development and testing, to catch out-of-range reads and similar mistakes with a clear message. Not in the final build, because it makes the program slower.
5. The edges would change: reading the sonar and driving the motors would use the board's own functions instead of the simulation's physics. The state machine, ramps and soft stop would stay.
:::
