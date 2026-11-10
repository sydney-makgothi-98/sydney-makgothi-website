# Building Patrick From Scratch: The Robot's Program in Nine Stages

This is the guided project for the C++ chapters. We will build Patrick's whole program, the one that fetches five ingredients and lays them out for breakfast, starting from an empty file. We will not read a finished program from top to bottom. We will do what a person actually does: build one small thing, run it, check the answer against a number worked out by hand, and only then build the next thing on top.

There are **nine stages**. Each stage is a complete program in the folder `Guide/code/patrick` (`stage1.cpp` to `stage8.cpp`), and every one compiles and runs. Each adds a little to the one before, so by the end the file is Patrick's real program, `patrick_mission.cpp`, the same file the Downloadable Files page offers. At every step we stop and ask why.

A word of honesty first. On the website the JavaScript came first, because the page needs it: `model.js` holds the physics and `mission.js` the controller. The C++ is a careful port of that code, checked against it row by row (Stage 9). The steps below describe the C++ in building order, but the ideas are the same in both languages.

| Stage | What we add | What it proves |
|---|---|---|
| 1 | One motor, spinning a free wheel | The motor law works. |
| 2 | A wheel on the ground: grip and slip | The rubber bands matter. |
| 3 | Two wheels: pose and turning | We know where the robot is. |
| 4 | The ultrasonic sensor | The robot can see. |
| 5 | Approach and brake | The robot stops where the sensor says. |
| 6 | The arm and the claw | The robot can reach and grip. |
| 7 | One ingredient, pantry to table | The state machine works end to end. |
| 8 | Five ingredients | The whole mission. |
| 9 | The soft stop, and proving it right | Pause, resume, and the twin test. |

**What you need.** The compiler from Chapter 17 and the folder `Guide/code/patrick`. Compile any stage with `g++ -O2 -std=c++17 stageN.cpp -o stageN` and run it with `./stageN`. Read each stage with the file open beside you.

:::remember
Every stage ends with a number you can check. Stage 1 predicts a speed before running. Stage 5 predicts where the robot should stop. If a stage prints something you did not expect, do not build on it: find out why first. A bug found at Stage 2 costs a minute; the same bug found at Stage 8 costs an evening.
:::

## Stage 1: One Motor

We start with the part that has the simplest physics and the most reliable answer: a DC motor. Everything the robot does begins with a voltage.

@code Guide/code/patrick/stage1.cpp 17-44

Two `struct`s hold the numbers. `Robot` (**lines 17 to 29**) has the geometry and weight: wheel radius 32.5 mm, a rubber band's thickness, the distance between the wheels (the "track"), and so on. `Motor` (**lines 31 to 35**) describes the gear motor and its battery: four AA cells (6 volts), two voltage drops in the motor driver, the winding resistance, the no-load current, the motor constant, the gearbox efficiency and the moment of inertia. The words `R;` and `MOT;` after the closing braces create one variable of each type, named `R` and `MOT`, right there.

The function `motor(V, w)` (**lines 38 to 43**) takes the voltage across the motor and the speed of its output shaft, and returns the **current**, the **torque** and the electrical and mechanical power. **Line 39** is the motor law from Project 6: current equals (voltage minus back-voltage) over resistance. **Line 41** turns current into torque and subtracts friction. The function returns a `MotorOut`, a struct with four fields; a function can return only one thing, so bundling four numbers into a struct lets it return all of them.

:::why Putting every measurement in one struct, with units in the comments
**What it is.** The robot's physical numbers live together, each with a comment giving what it is and its unit.

**Why it is done this way.** These are measurements, not decisions. They come from a ruler, a scale and a datasheet, and they will be corrected as the real robot is measured better.

**Why it matters.** If the track width is corrected after a better measurement, it changes on one line, and the turn controller and the path on the map both follow.

**What happens if you do not.** A "0.193" hides inside a formula in four places and you correct three of them.
:::

The test spins a wheel with nothing on it:

@code Guide/code/patrick/stage1.cpp 46-57

Predict first. At 70 percent duty the motor sees 0.7 x (6.0 - 1.4) = 3.22 V. With no load the current falls to the no-load value I0 = 0.19 A, so the back-voltage is 3.22 - 0.19 x 6 = 2.08 V, and the speed is 2.08 / 0.2326 = **8.94 rad/s**. Now run it:

```
supply 3.22 V; predicted free speed 8.94 rad/s
t=0.0 s  w=0.000 rad/s  current 0.537 A  torque 0.0443 N m
t=0.1 s  w=6.374 rad/s  current 0.290 A  torque 0.0127 N m
t=0.2 s  w=8.205 rad/s  current 0.219 A  torque 0.0037 N m
t=0.3 s  w=8.731 rad/s  current 0.198 A  torque 0.0011 N m
t=0.4 s  w=8.882 rad/s  current 0.192 A  torque 0.0003 N m
t=0.5 s  w=8.925 rad/s  current 0.191 A  torque 0.0001 N m
t=0.6 s  w=8.937 rad/s  current 0.190 A  torque 0.0000 N m
```

It climbs to 8.937 rad/s, within 0.003 of the prediction, and the current falls from 0.537 A at the start (the stall current) to 0.190 A (the no-load current). This is the shape of every motor: strong when slow, gentle when fast. Notice **line 54**: `w += m.tau / MOT.J * dt;`, the simulation's one essential idea. The torque divided by the inertia is the acceleration, and multiplying by the time step gives the change in speed. Everything else is bookkeeping.

:::why Checking the program against a hand calculation
**What it is.** The predicted free speed is computed from the formula and printed beside what the simulation reaches.

**Why it is done this way.** A simulation that prints numbers gives you no way to know whether the numbers are right.

**Why it matters.** If the printed speed had settled at 0.894 or 89.4, you would know at once that a unit was wrong.

**What happens if you do not.** You build seven more stages on a motor that is quietly off by a factor of ten.
:::

## Stage 2: A Wheel on the Ground

A free wheel is easy. A wheel pushing a robot along a table is harder, because the wheel and the robot can move at different speeds: the wheel can *slip*. This is where the rubber bands that Patrick wears earn their keep. We add the tyre model and one routine that advances one side of the robot by one tick.

@code Guide/code/patrick/stage2.cpp 46-49

**Line 47** says how grippy the wheel can be at best: 0.22 for bare plastic and 1.0 with rubber bands, times a factor for the surface. **Line 49** is the **friction curve**: it rises with slip, peaks near 17 percent, then settles lower when the wheel just spins, using `sin` and `atan` to draw that shape in one line. The routine that uses it:

@code Guide/code/patrick/stage2.cpp 51-71

`sideStep` advances one side (one wheel and half the mass) by `dt`. Each pass of the loop on **line 58** does the following. It works out the **slip ratio** (how much faster the wheel's surface moves than the robot, as a fraction), turns slip into a **grip force** with the friction curve, finds the motor's torque (or the braking torque when the terminals are shorted), subtracts rolling resistance, then updates the wheel's spin (motor torque pushes it forward, the ground's reaction holds it back) and the robot's speed (grip pushes it, rolling resistance slows it).

Look at `const int n = 4;` on **line 56** and the loop around everything. The whole thing is repeated four times per tick, each with a quarter of the step.

:::why Four sub-steps inside a tick
**What it is.** The wheel and speed are advanced in four quarter-millisecond steps for each one-millisecond tick.

**Why it is done this way.** Section 17.15 and the Advanced C++ chapter showed that a stiff system explodes if the step is too big. Near zero speed the tyre behaves like an extremely stiff spring.

**Why it matters.** With one step per tick, the wheels chattered at low speed, and two programs run side by side drifted apart from rounding errors that kept growing. Four sub-steps fixed both.

**What happens if you do not.** The robot looks fine while driving and juddery exactly when it starts or stops, and your comparison against the other implementation fails for reasons you cannot find.
:::

The test applies full throttle at once, the hard case for a tyre, with and without bands:

@code Guide/code/patrick/stage2.cpp 74-87

The weight on each side is *N = 0.5 x 0.72 x (0.55 + 0.085) x 9.80665 = 2.24 N* (half the robot, with 72 percent of its weight on the drive wheels), and its mass is half the robot's, 0.3175 kg. Running it:

```
bands off: speed after 2 s = 0.465 m/s, peak slip 0.76, reached 0.25 m/s at 0.22 s
bands on : speed after 2 s = 0.486 m/s, peak slip 0.06, reached 0.25 m/s at 0.11 s
```

There is the whole story of the rubber bands in two lines. Without them, the wheel spins: a **peak slip of 0.76** means the wheel surface was moving at four times the speed of the robot, and it takes 0.22 s to reach 0.25 m/s. With them, slip never exceeds 0.06 and the robot gets there in 0.11 s, twice as fast. The motor and the battery are identical; only the grip changed.

## Stage 3: Two Wheels, and Where the Robot Is

Now two sides, left and right. A two-wheeled robot moves by one rule: the **average** of the two wheel speeds is the forward speed, and the **difference** divided by the track width is the turning rate. Integrate those and you know the robot's position and heading.

@code Guide/code/patrick/stage3.cpp 74-89

**Lines 83 and 84** are the heart of it: `v` is the mean of the two speeds, `om` the difference over the track, and the position follows from `yaw`, `x` and `z`. Test one is both wheels forward; test two is the wheels turning opposite ways, a turn on the spot. The result:

```
both wheels forward  : after 2 s x = 0.459 m, z = 0.000 m, heading 0.0 deg
wheels opposite (turn): after 2 s x = 0.000 m, z = 0.000 m, heading 143.3 deg
```

Driving straight, the robot covers 0.459 m in two seconds (with its soft start) and does not drift sideways (z is 0.000). Turning on the spot, it does not move at all (x and z are both 0.000) but its heading changes by 143.3 degrees. That is exactly what the rule predicts, and both results come from the same two lines.

:::why Position from the two wheel speeds
**What it is.** Forward speed is the mean of the two wheel speeds, and turning rate is their difference over the track width.

**Why it is done this way.** This is how every two-wheeled differential-drive robot works, from this one to a robot vacuum.

**Why it matters.** The path that Patrick traces on the Mission Map comes from these lines, so a turn on the spot (equal and opposite wheel speeds) really rotates without moving the centre.

**What happens if you do not.** You fake the path with scripted moves, and the picture no longer follows from the physics.
:::

## Stage 4: The Robot Learns to See

The ultrasonic sensor reports the distance to the nearest thing in front of it. We reproduce that with **ray casting**: fire invisible rays and ask how far each travels before it enters an obstacle. The obstacles here are the five wooden pads in the pantry and the five plates in the breakfast area, all boxes.

@code Guide/code/patrick/stage4.cpp 89-116

`rayBox` (**lines 92 to 106**) answers: if I fire a ray from this point in this direction, how far does it travel before it enters this rectangle? It tests one axis at a time, finding where the ray enters and leaves the rectangle's slab on each, and a hit exists only if the ranges overlap. `sonarRead` (**lines 107 to 116**) fires **five rays**, 6 degrees apart, across the sensor's narrow cone, tests them against every box and against the far wall, and keeps the shortest distance.

:::why Five rays, not one
**What it is.** A fan of five rays instead of a single straight ray.

**Why it is done this way.** A real ultrasonic sensor does not see along a line. It hears echoes from anywhere in a cone of about 15 degrees each side.

**Why it matters.** A single ray could slip between two obstacles or miss the corner of a pad, so the robot would not brake when a real sensor would. The cone behaves like the real thing.

**What happens if you do not.** The simulated robot is blind to things that the real robot sees, and the tuned braking distance would not carry over to hardware.
:::

The test drives straight at the first pad and prints what the sensor reads. Nothing brakes yet:

@code Guide/code/patrick/stage4.cpp 119-131

```
t=0.00 s  axle x=-0.050 m  sonar reads 0.465 m
t=0.25 s  axle x=-0.048 m  sonar reads 0.463 m
t=0.50 s  axle x=-0.011 m  sonar reads 0.426 m
t=1.00 s  axle x=0.124 m  sonar reads 0.291 m
t=1.50 s  axle x=0.266 m  sonar reads 0.149 m
t=1.75 s  axle x=0.338 m  sonar reads 0.077 m
t=2.00 s  axle x=0.409 m  sonar reads 0.006 m
t=2.25 s  axle x=0.481 m  sonar reads 0.000 m
t=2.50 s  axle x=0.552 m  sonar reads 0.403 m
```

Check the first reading by hand. The pad's front face is at x = 0.60 - 0.04 = 0.56 m. The sensor sits 0.145 m ahead of the axle, so at x = -0.05 it is at 0.095 m, and 0.56 - 0.095 = **0.465 m**. The program printed 0.465. Then the robot drives straight through the pad (nothing physical stops it), the reading falls to zero, and once it is past the pad it sees the far wall instead: at x = 0.552, the wall at 1.10 m is 1.10 - (0.552 + 0.145) = 0.403 m away. Both the numbers and the behaviour are right. What is wrong is that nothing makes the robot stop. That is Stage 5.

## Stage 5: Approach, Brake, and Stop Where the Sensor Says

A robot cannot know how long a drive will take, but it can ask its sensor "am I close enough yet?" That is a **state machine**: in APPROACH it drives; when the sensor reads 10.8 cm or less it switches to BRAKE; in BRAKE it shorts the motors until the robot is nearly still.

@code Guide/code/patrick/stage5.cpp 118-137

The `case APPROACH:` line (**line 128**) ramps the throttle up over 0.35 s and changes state when `sonar <= STOP_AT`. The `case BRAKE:` line sets `shortIt = true`, which tells `sideStep` to short the motor terminals: with the terminals shorted, the spinning motor's own back-voltage drives a current that produces a torque against the motion, an electrical brake that costs nothing. It finishes when the wheels are nearly stationary (or after 1.2 s). Running it:

```
t=1.64 s: sonar 0.108 m <= 0.108 m, BRAKE (speed 0.286 m/s)
stopped at t=1.79 s, axle x=0.325 m, sonar now reads 0.090 m (braking took 0.15 s and 1.8 cm)
```

It started braking at 10.8 cm, travelling at 0.286 m/s, and stopped 0.15 s and 1.8 cm later, with the sensor reading 9.0 cm. That 1.8 cm of coasting is why the threshold is 10.8 cm and not the 9 cm we really want: the threshold was tuned so that the claw would end up exactly over the item.

:::why A state machine, with the next state decided by the world
**What it is.** Each state does one thing and decides, from timers or sensors, when to hand over to the next.

**Why it is done this way.** The robot cannot see the future. It cannot know how long the drive will take; it can only look at its sensor and ask "am I close enough yet?"

**Why it matters.** Because the transitions come from the sensor and not from a stopwatch, the robot adapts: slower wheels or a different friction just make APPROACH last longer, and BRAKE still fires at the same distance.

**What happens if you do not.** If APPROACH simply drove for 1.64 seconds, any change in battery voltage or floor friction would leave the robot short of the pad, or through it.
:::

:::why Brake states that wait for the robot to actually stop
**What it is.** The BRAKE state finishes when the wheels are nearly stationary (or after a timeout), not after a fixed delay.

**Why it is done this way.** The braking distance depends on speed, weight and grip, so no fixed delay is right.

**Why it matters.** The arm moves only after the robot has stopped. A reach while still rolling would knock the ingredient over.

**What happens if you do not.** Occasionally the claw closes on air.
:::

## Stage 6: The Arm and the Claw

The arm is raised by a servo that turns a small horn, and a rod connects the horn to the arm. Given the servo angle `phi`, where does the arm point? The horn's end sits at a known point. The rod has a fixed length, and the arm's attachment point is a fixed distance from its pivot. So the attachment point lies on **two circles at once**: one around the horn's end (radius equal to the rod) and one around the arm pivot (radius equal to the attachment distance). Where two circles cross is a pure geometry problem.

@code Guide/code/patrick/stage6.cpp 36-51

**Line 43** returns `ok = false` when the circles do not touch at all: the linkage is jammed. **Lines 44 to 47** solve the intersection, which has two answers; **line 48** takes the upper one, the "elbow-up" solution. The function `armTip` (**line 51**) turns the arm angle into the position of the claw. The claw's grip is a second function:

@code Guide/code/patrick/stage6.cpp 67-68

The jaw's fingers touch an item of width `w` when the opening angle satisfies a short piece of geometry, and the function returns it as a fraction from 0 (closed) to 1 (open). The test prints a table:

```
servo angle -> arm angle -> arm tip (x forward, y up)
   0 deg: the linkage jams
  10 deg: the linkage jams
  20 deg ->    0.5 deg -> (0.195, 0.087) m
  30 deg ->   17.0 deg -> (0.185, 0.155) m
  60 deg ->   51.3 deg -> (0.105, 0.272) m
  80 deg ->   71.6 deg -> (0.031, 0.313) m
STOW  servo 74.0 deg: arm 65.6 deg, tip height 0.304 m
CARRY servo 46.0 deg: arm 36.2 deg, tip height 0.227 m
LOW   servo 18.4 deg: arm -4.4 deg, tip height 0.067 m
eggs  width 34 mm -> jaw closes to 0.028 of its range
glass width 42 mm -> jaw closes to 0.256 of its range
```

(The full table has more rows.) Three servo angles are the arm's working poses: **STOW** (arm folded up at 74 degrees), **CARRY** (46 degrees, held in front) and **LOW** (18.4 degrees, reaching the table with the arm tip 6.7 cm up, exactly the height of an item's grip point). At 0 and 10 degrees the linkage jams, so the servo must never be commanded there. The jaw closes further for wider items: 0.028 of its range for the 34 mm egg carton and 0.256 for the 42 mm glass.

:::why Solving the linkage by geometry, not by a table of angles
**What it is.** A short function that computes the arm angle from the servo angle, exactly.

**Why it is done this way.** A linkage has a precise rule. No lookup table of measured angles is needed, and none could be as accurate.

**Why it matters.** The same function poses the 3D arm on the page, so the arm in the picture is geometrically the real linkage. It also let a search for the right link lengths find that this servo reaches the table when the rod is 135 mm.

**What happens if you do not.** You measure a dozen arm angles with a protractor, interpolate between them, and get a jerky arm.
:::

## Stage 7: One Ingredient, Pantry to Table

Now we join everything into the real controller. The state machine grows from APPROACH and BRAKE to the full sequence for one ingredient. The states are listed in an `enum`:

@code Guide/code/patrick/stage7.cpp 170-173

and the controller is a `switch` on the current phase:

@code Guide/code/patrick/stage7.cpp 224-255

Read it as a story. Wait 0.9 seconds. APPROACH: drive until the sonar reads 10.8 cm. BRAKE: short the motors until still, then REACH: lower the arm and open the claw. GRIP: after 0.35 s close the claw to the width of *this* ingredient, and at 1.1 s count it as held and start lifting. LIFT, then TURN: spin the robot 180 degrees (`yawRef += PI`) with a PD controller on heading. SETTLE, then CARRY: drive to the breakfast area, brake, lower the arm (PLACE), let go at 1.5 s, stow the arm, and RETREAT backwards 14 cm. In `stage7.cpp` the run ends after the first ingredient (one line changed from the final program: `if (item == 0) go(DONE)`). Running it and listing each time the phase changes:

```
t=  1.20  phase  1  x= -0.050 z= -0.500  holding=0     APPROACH
t=  2.85  phase  2  x=  0.309 z= -0.500  holding=0     BRAKE
t=  2.99  phase  3  x=  0.325 z= -0.500  holding=0     REACH
t=  4.49  phase  4  x=  0.324 z= -0.500  holding=0     GRIP
t=  5.60  phase  5  x=  0.324 z= -0.500  holding=1     LIFT
t=  6.90  phase  6  x=  0.323 z= -0.500  holding=1     TURN
t=  8.79  phase  7  x=  0.323 z= -0.500  holding=1     SETTLE
t=  9.29  phase  8  x=  0.323 z= -0.500  holding=1     CARRY
t= 11.95  phase  9  x= -0.330 z= -0.500  holding=1     BRAKE
t= 12.10  phase 10  x= -0.346 z= -0.500  holding=1     PLACE
t= 14.50  phase 11  x= -0.347 z= -0.500  holding=0     RETREAT
t= 15.72  phase 18  x= -0.206 z= -0.500  holding=0     DONE
finished at t = 17.72 s; items on the table: eggs(-0.613,-0.500)
```

(The words on the right are added for reading; the program prints only the numbers.) Follow the robot: it drives from x = -0.05 to the pantry (x = 0.309), picks up the eggs (`holding` becomes 1 at 5.60 s), turns, carries them the 0.65 m to the breakfast area (x = -0.330), puts them down (`holding` returns to 0 at 14.50 s) and backs away. The eggs end at x = -0.613, z = -0.500: within 7 millimetres of the centre of the first plate, which is at x = -0.62, z = -0.50.

:::why Each phase has an exit condition, and a safety net
**What it is.** Every state leaves on a sensor reading or a timer, and the braking states also have a timeout (`settled()` gives up after 1.2 s).

**Why it is done this way.** A robot stuck in one state for ever is a robot that has failed. Wheels can stick, sensors can misread.

**Why it matters.** With the timeout, the worst case is a slightly late move on, never a frozen robot.

**What happens if you do not.** One missed echo and the robot sits waiting for a signal that never arrives.
:::

## Stage 8: Five Ingredients

One ingredient is the whole machine once; five is the machine repeating. After PLACE and RETREAT the robot must go to the next lane. That adds four states: TURN_SHIFT (face along the table), SHIFT (drive to the next lane, slowing as the gap closes), another settle, and TURN_PANTRY (face the pantry again). The code is already in the switch from Stage 7; the only difference between `stage7.cpp` and `stage8.cpp` is the single line that made it stop after one item. The ingredients and the lane positions are tables:

@code Guide/code/patrick/stage8.cpp 105-111

and the shift state is the cleverest bit of the controller, driving slower as the remaining gap closes:

@code Guide/code/patrick/stage8.cpp 245-249

`rem` is how far is left to the next lane; the duty is the full approach duty scaled by `rem / 0.12`, never below 0.4 (the motors will not turn below that: stiction), and the state ends when less than 4 mm remains. Running the whole mission:

```
finished at t = 97.75 s; items on the table: eggs(-0.613,-0.500) salt(-0.613,-0.252) spice(-0.613,-0.002) sauce(-0.613,0.248) glass(-0.613,0.498)
```

All five ingredients are on their plates. Compare each with its plate's centre (lanes at z = -0.50, -0.25, 0, 0.25, 0.50; plates at x = -0.62): every ingredient is within 7 mm of the centre in x and within 2 mm in z. The whole job took 97.75 simulated seconds, and the robot never once looked at a clock to decide where to go: every move ended on a sensor reading or on a distance check.

:::why The Phase enum and one big switch
**What it is.** The mission is nineteen named states and one `switch`, rather than a long sequence of function calls with delays in between.

**Why it is done this way.** A sequence with delays cannot react: if the robot is late, everything after it is wrong. A state machine lets each state wait for the world.

**Why it matters.** The same program works whether the floor is slippery (slow starts) or the battery is low (slow moves): only the timings change, never the positions.

**What happens if you do not.** The robot only works on the day you tuned the delays.
:::

## Stage 9: The Soft Stop, and Proving It Right

A pause button on a machine with momentum cannot freeze everything. Instead the program keeps a number `g`, the **go-gain**, between 0 (halted) and 1 (running). Pressing pause sets the *goal* to 0; each tick, `g` slews towards it at a fixed rate. The eased version is then used two ways: the controller's own clock slows down (so timers and servo motions stretch out and stop together) and every drive command is multiplied by it (so the motors' push fades out). The code:

@code Guide/code/patrick/stage8.cpp 198-208

(The code is in the file from Stage 7 on; Stage 9 is about using it, with `--pause-at` and `--resume-at`.) Run it, pausing at 10.5 s while the robot is carrying the eggs, and resuming two seconds later:

```
./stage8 --pause-at 10.5 --resume-at 12.5 --out p.csv
```

and look at the speed (from the position column) and the gain every tenth of a second:

```
t=10.50  speed 28.7 cm/s  gain 1.00  (pause pressed)
t=10.70  speed 27.6 cm/s  gain 0.75
t=10.90  speed 19.4 cm/s  gain 0.50
t=11.00  speed 12.7 cm/s  gain 0.38
t=11.10  speed  5.1 cm/s  gain 0.25
t=11.20  speed  0.1 cm/s  gain 0.12
t=11.30  speed  0.1 cm/s  gain 0.00
...
t=11.50  speed  0.0 cm/s  gain 0.33  (resumed)
t=11.70  speed  3.1 cm/s  gain 0.67
t=11.80  speed  9.6 cm/s  gain 0.83
```

(Because no rows are written while the robot is halted, the time column carries straight on across the pause.) The robot did not stop in a tick. It eased from 28.7 cm/s to zero over about 0.7 seconds, along a smooth S-curve, and after the resume it eased back up. Everything was resumed from where it was: the mission still finished with all five ingredients in place, at 98.69 s instead of 97.75 s.

**Proving it right: the twin test.** How do you know the C++ is correct? You write the same program a second time, differently, and compare. For Patrick the second program is the web page's JavaScript. Both write a table, one row every 10 ms, the same 13 columns, and the two tables are compared:

```
./stage8 --out cpp1.csv
node dump.mjs js1.csv
tr -d '\r' < cpp1.csv | cmp - js1.csv
```

They were identical: 9,776 rows by 13 columns, the same in every digit. The same was done for a run with a pause at 20 s and a resume at 23.5 s, which was identical too.

It was not identical the first time. The first comparison showed the programs agreeing for almost 3 seconds, then drifting apart by a few millionths of a metre in the BRAKE state, then by centimetres a few seconds later, enough to put one program in a different state than the other. The cause was in Stage 2: with one step per tick, the tyre equation was numerically unstable at low speed, so the tiniest difference between the two languages' arithmetic was amplified instead of damped. (That is the explanation that fits the evidence: adding the four sub-steps removed the disagreement completely.) The programs have agreed to the last digit ever since.

**Putting it on the page.** Three small pieces carry the C++ from your folder to the visitor's screen. The build script copies `patrick_mission.cpp` into the `DLC` folder, and the Downloadable Files page lists it. The bundler is told to read `.cpp` files as plain text, so the program's own source sits inside the page's script as a string, and the code bubble colours the keywords with a few regular expressions. And the page finds the controller's `case` lines by searching for `case NAME:`, which is why the `enum` names and the `case` labels are the same words.

:::why The page shows the real file, not a copy
**What it is.** The code on the page is the very text of `patrick_mission.cpp`, inserted by the build.

**Why it is done this way.** A second copy, pasted into the page's HTML, would be one more thing to forget to update.

**Why it matters.** Edit the C++ and rebuild, and the bubble, the download and the highlighted lines all follow. What a visitor reads is, by construction, what they can download and compile.

**What happens if you do not.** The code on the page quietly becomes a different program from the one in the download.
:::

## Try It Yourself

:::problems
1. In Stage 1, change the duty to 1.0. What free speed does the program predict, and what does it reach?
2. In Stage 2, imagine only the *left* wheel has bands. What would you expect the robot to do when both sides get the same command? (Think about Stage 3.)
3. In Stage 4, add a second ray fan aimed 30 degrees to the left. What would it let the robot do?
4. In Stage 5, change `STOP_AT` from 0.108 to 0.080 and rerun the final program. What happens to the finishing time and the final positions?
5. Run `./stage8 --duty 1.0 --bands 0`. How does the result compare with the default run?
6. Add a sixth ingredient. List every place in the file that must change.
7. The robot must now *measure* the pad's width with the sonar before gripping, instead of knowing `ITEMS[i].w`. Sketch how you would do it.
8. Design your own robot: a two-wheeled cart with a bumper switch that must fetch a ball from a corner. List the states, the sensor reading that ends each one, and the numbers you would need to measure first.
:::

:::answers
**Chapter 42, Try It Yourself.**

1. At 100 percent duty the supply is 4.6 V, so the predicted free speed is (4.6 - 1.14) / 0.2326 = 14.88 rad/s, and the program reaches that, since the motor model is the same.
2. A robot with a rubber-banded left wheel and a bare right wheel gets more push on the left, so with equal commands it would curve towards the bare side. Differential drive assumes both wheels grip equally; here they would not.
3. It could detect an obstacle at the side and steer round it, or measure a wall's distance to correct its heading.
4. It still finishes, but later (99.61 s) and the items land about 2.7 cm further in (x of about -0.64), because braking later leaves the claw past the pad's centre.
5. It finishes sooner (92.05 s) because the robot drives faster, but the items land about 7 cm further in (x of about -0.68), near the edge of the plates: speed costs accuracy.
6. Add an entry to `ITEMS`, a lane to `LANES`, change the array sizes and `NITEM`, and make sure the pad and plate lists still cover every lane.
7. Drive the sonar across the item in small steps and record where the distance jumps down (the near edge) and back up (the far edge); the width is the distance travelled between them. It needs a slow sideways drive and a median filter (mini project 2).
8. For example: SEARCH (spin until the sonar sees something closer than 1 m), APPROACH (drive until the bumper closes), GRIP or PUSH (hold for 1 s), RETURN (drive back to the start, ended by a distance check), DONE. First measure: wheel radius, track, motor free speed, the sonar's cone angle and the bumper's reaction time.
:::

:::quiz Building Patrick
1. What did Stage 2 prove about the rubber bands, with numbers?
2. In Stage 3, what two lines give the robot's position?
3. How do you check the first sonar reading by hand?
4. Why does Patrick brake at 10.8 cm when he wants to stop at about 9 cm?
5. What does the go-gain scale, and why both the motors and the clock?
6. How can you be sure the page's animation and the downloaded file are the same program?
:::

:::answers
**Building Patrick: quiz.**

1. At full throttle, bare wheels reached 0.25 m/s in 0.22 s with a peak slip of 0.76; with bands, 0.11 s and a peak slip of 0.06. Same motor, double the acceleration.
2. The forward speed is the mean of the two wheel speeds and the turning rate is their difference over the track (lines 83 and 84 of `stage3.cpp`); `yaw += om * dt` then `x` and `z` follow from `v` and `yaw`.
3. The pad's front face is at 0.60 - 0.04 = 0.56 m; the sensor is 0.145 m ahead of the axle, so at x = -0.05 it is at 0.095 m, giving 0.56 - 0.095 = 0.465 m.
4. Braking takes about 1.8 cm of coasting, so he starts braking early. The threshold was tuned so the claw ends exactly over the item.
5. Every drive command and the controller's own clock, so wheels, arm, claw and timers all slow and stop together.
6. The two were run side by side, writing the same table, and compared byte for byte; they were identical, and the page embeds the very file that is offered for download.
:::
