# The Robot's Code, Written Step by Step

This is the guided project for the C++ chapters. We will write the file `patrick_mission.cpp` from the first constant to the last line, in the order a person would actually build it, and stop at every decision to ask why. The listings are copied from the real file, with their real line numbers, so what you read is what the visitor downloads from the Downloadable Files page.

A word of honesty first. On the website the JavaScript came first, because the page needs it: `model.js` holds the physics and `mission.js` holds the controller. The C++ is a careful port of that code, checked against it row by row (Step 11). The steps below describe the C++ in building order, but the ideas are the same in both languages, and everything you learn here applies to either.

| Step | What we write | Why in this order |
|---|---|---|
| 1 | The robot's measured numbers | Everything else uses them. |
| 2 | The motor | Voltage to push: the first physics. |
| 3 | The tyre and the weight on it | Push to grip. |
| 4 | The arm | Servo angle to arm angle. |
| 5 | The sonar | What the robot can see. |
| 6 | One wheel, in four sub-steps | The heart of the physics. |
| 7 | The states | What the robot decides. |
| 8 | The soft stop | Pause and stop. |
| 9 | One tick | Everything joined. |
| 10 | `main` | Running it and writing results. |
| 11 | Proving it | The twin test. |
| 12 | Putting it on the page | The viewer and the download. |

## Step 1: The Robot's Measured Numbers

@code Syd Website Assets/Mechatronics/patrick/patrick_mission.cpp 34-52

Two `struct`s hold every number that describes the machine: `Robot` for its geometry and weight, `Motor` for the gear motor. **Line 35** is the wheel radius, 32.5 mm for a 65 mm wheel. **Line 36** is the thickness of a rubber band, which makes the rolling radius slightly larger. **Line 37** is the distance between the wheels, the "track", which turns a difference in wheel speeds into a turning rate. **Lines 49 to 50** describe the motor and its battery: four AA cells (6 volts), two voltage drops in the motor driver, the winding resistance, the no-load current, the motor constant, the gearbox efficiency and the moment of inertia.

The words after the closing brace on lines 46 and 52 (`R;` and `MOT;`) create one variable of each type right there, named `R` and `MOT`. Everything else reads `R.wheelR` or `MOT.Rm`.

:::why Putting every measurement in one struct, with units in the comments
**What it is.** The robot's physical numbers live together, each with a comment giving what it is and its unit.

**Why it is done this way.** These are measurements, not decisions. They come from a ruler, a scale and a datasheet, and they will be corrected as the real robot is measured better.

**Why it matters.** If the track width is corrected after a better measurement, it changes on one line, and the turn controller and the path on the map both follow.

**What happens if you do not.** A "0.193" hides inside a formula in four places and you correct three of them.
:::

## Step 2: The Motor

@code Syd Website Assets/Mechatronics/patrick/patrick_mission.cpp 54-62

The function `motor(V, w)` takes the voltage across the motor and the speed of its output shaft, and returns the **current** (**line 57**), the **torque** (**line 59**), and the electrical and mechanical power (**line 60**). **Line 57** is the motor law from Project 6: current equals (voltage minus back-voltage) over resistance. **Line 59** turns current into torque with the motor constant and the gearbox efficiency, then subtracts friction, whose direction follows the motion (or, from rest, the voltage). **Line 58** switches the friction off when there is no voltage and no speed, so a robot at rest does not creep.

The function returns a `MotorOut`, a struct with four fields, written between braces on line 60. A function can only return one thing; bundling four numbers into a struct lets it return all four.

:::why The motor as one small function
**What it is.** `motor()` knows nothing about wheels or robots. It maps two numbers to four.

**Why it is done this way.** The same law serves every part of the program: the drive wheels, the power graph, and the braking.

**Why it matters.** The power-versus-speed graph on the page is drawn by calling this very function (its JavaScript twin) for a whole range of speeds. One definition, so the graph and the robot cannot disagree.

**What happens if you do not.** The motor law is copied into the wheel code and again into the graph, and a later correction fixes one copy only.
:::

## Step 3: The Tyre and the Weight on It

@code Syd Website Assets/Mechatronics/patrick/patrick_mission.cpp 64-78

**Line 66** says how grippy the wheels can be at best: 0.22 for bare plastic and 1.0 with rubber bands, times a factor for the surface. **Line 68** is the **friction curve**: it rises with slip, peaks near 17 percent, then settles lower when the wheel just spins, using `sin` and `atan` to draw that shape in one line. The function `com()` (**lines 72 to 78**) finds the robot's centre of mass, which moves as the arm swings out and as the claw carries something, and from it the **share of the weight that sits on the drive wheels** (**line 77**).

:::why Working out the weight on the drive wheels
**What it is.** `drive` is the fraction (between 0.05 and 1) of the weight pressing on the driven wheels rather than on the front ball caster.

**Why it is done this way.** Grip is friction coefficient times the force pressing down, and the force pressing down changes. A robot with its arm stretched forward and a full bottle in its claw has less weight on its wheels than one with the arm folded.

**Why it matters.** This is why Patrick's grip limit on the Dynamics graph changes during the run: carrying the sauce bottle really does lower it.

**What happens if you do not.** Grip would be a fixed number, and the robot would never slip in the one situation, arm out, where it is most likely to.
:::

## Step 4: The Arm: Two Circles Meeting

@code Syd Website Assets/Mechatronics/patrick/patrick_mission.cpp 80-95

The arm is raised by a servo that turns a small horn, and a rod connects the horn to the arm. Given the servo angle `phi`, where does the arm point? The horn's end sits at a known point (**line 84**). The rod has a fixed length, and the arm's attachment point is a fixed distance from its pivot. So the attachment point lies on **two circles at once**: one around the horn's end (radius equal to the rod) and one around the arm pivot (radius equal to the attachment distance). Where two circles cross is a pure geometry problem (**lines 88 to 91**), with two answers. **Line 92** takes the upper one, the "elbow-up" solution. **Line 87** returns `ok = false` when the circles do not touch at all: the linkage is jammed.

:::why Solving the linkage by geometry, not by a table of angles
**What it is.** A short function that computes the arm angle from the servo angle, exactly.

**Why it is done this way.** A linkage has a precise rule. No lookup table of measured angles is needed, and none could be as accurate.

**Why it matters.** The same function posed the 3D arm on the page, so the arm in the picture is geometrically the real linkage. It also let the search for the right link lengths find that this particular servo reaches the table when the rod is 135 mm.

**What happens if you do not.** You measure a dozen arm angles with a protractor, interpolate between them, and get a jerky arm.
:::

## Step 5: The Sonar

@code Syd Website Assets/Mechatronics/patrick/patrick_mission.cpp 115-142

The ultrasonic sensor reports the distance to the nearest thing in front of it. We reproduce that with **ray casting**. `rayBox` (**lines 119 to 132**) answers: if I fire a ray from this point in this direction, how far does it travel before it enters this rectangle? It does the test one axis at a time, finding where the ray enters and leaves the rectangle's slab on each, and a hit exists only if the ranges overlap (**line 128**). `sonarRead` (**lines 134 to 142**) fires **five rays**, 6 degrees apart, across the sensor's narrow cone (**line 136**), tests them against every pad and plate (**line 138**) and against the far wall (**line 139**), and keeps the shortest distance.

:::why Five rays, not one
**What it is.** A fan of five rays instead of a single straight ray.

**Why it is done this way.** A real ultrasonic sensor does not see along a line. It hears echoes from anywhere in a cone of about 15 degrees each side.

**Why it matters.** A single ray could slip between two obstacles or miss the corner of a pad, so the robot would not brake when a real sensor would. The cone behaves like the real thing.

**What happens if you do not.** The simulated robot is blind to things that the real robot sees, and the tuned braking distance would not carry over to hardware.
:::

## Step 6: One Wheel at a Time, in Four Sub-steps

@code Syd Website Assets/Mechatronics/patrick/patrick_mission.cpp 144-165

This is the heart of the physics, and the place where the C++ and the JavaScript first disagreed. `sideStep` advances one side of the robot (one wheel and half the mass) by one tick. Each pass of the loop on **line 152** does the following. **Line 153 and 154** compute the **slip ratio**: how much faster the wheel's surface moves than the robot, as a fraction. **Line 155** turns slip into a grip force using the friction curve from Step 3. **Lines 156 to 157** find the motor's torque, or the braking torque when the terminals are shorted. **Line 158** is rolling resistance. **Line 159** updates the wheel's spin: motor torque pushes it forward, the ground's reaction holds it back. **Line 160** updates the robot's speed: grip pushes it, rolling resistance slows it.

Look at `const int n = 4;` on **line 150** and the loop around everything. The whole thing is repeated four times per tick, each with a quarter of the step.

:::why Four sub-steps inside a tick
**What it is.** The wheel and speed are advanced in four quarter-millisecond steps for each one-millisecond tick.

**Why it is done this way.** Advanced C++ (Part IV) showed that a stiff system explodes if the step is too big. Near zero speed the tyre behaves like an extremely stiff spring.

**Why it matters.** With one step per tick, the wheels chattered at low speed, and two programs run side by side drifted apart from rounding errors that kept growing. Four sub-steps fixed both, so the animation is smooth and the C++ and the JavaScript agree exactly.

**What happens if you do not.** The robot looks fine while driving and juddery exactly when it starts or stops, and your comparison against the other implementation fails for reasons you cannot find.
:::

## Step 7: The States

@code Syd Website Assets/Mechatronics/patrick/patrick_mission.cpp 167-171

An `enum` lists everything Patrick can be doing: IDLE, APPROACH, BRAKE, REACH, GRIP, LIFT, and so on to DONE. The `Placed` struct on **line 171** records, for each ingredient, whether it is still on the pantry pad (0), held in the claw (1) or laid on the breakfast table (2), and where it is.

Now the decisions. Here is the switch that is the robot's brain:

@code Syd Website Assets/Mechatronics/patrick/patrick_mission.cpp 222-253

Read it as a story. Wait 0.9 seconds (**line 223**). APPROACH: drive forward, ramping the throttle up over 0.35 s, steering to hold the heading, until the sonar reads closer than 10.8 cm (**line 224**), then BRAKE. BRAKE: short the motors until the robot is nearly still (**line 225**), then REACH: lower the arm and open the claw. GRIP: after 0.35 s close the claw to the width of *this* ingredient, and at 1.1 s count it as held and start lifting (**lines 227 to 229**). Then turn around (`yawRef += PI`, **line 230**), carry it to the breakfast area, brake, place it, retreat, shift sideways to the next lane, turn back to face the pantry, and go again. When the last ingredient is placed, the robot is DONE (**line 240**).

:::why A state machine, with the next state decided by the world
**What it is.** Each state does one thing and decides, from timers or sensors, when to hand over to the next.

**Why it is done this way.** The robot cannot see the future. It cannot know how long the drive will take; it can only look at its sensor and ask "am I close enough yet?" That makes each state a small, testable question.

**Why it matters.** Because the transitions come from the sensor and not from a stopwatch, the robot adapts: slower wheels or a different friction just make APPROACH last longer, and BRAKE still fires at the same distance.

**What happens if you do not.** If APPROACH simply drove for 2.1 seconds, any change in battery voltage or floor friction would leave the robot short of the pad, or through it.
:::

:::why Brake states that wait for the robot to actually stop
**What it is.** The BRAKE states use `settled()`: they finish when the wheels are nearly stationary (or after a 1.2 s timeout).

**Why it is done this way.** The braking distance depends on speed, weight and grip, so no fixed delay is right.

**Why it matters.** The arm moves only after the robot has stopped. A reach while still rolling would knock the ingredient over.

**What happens if you do not.** Occasionally the claw closes on air.
:::

## Step 8: The Soft Stop

@code Syd Website Assets/Mechatronics/patrick/patrick_mission.cpp 197-207

This is how a pause button works on a machine with momentum. Instead of freezing everything, the code keeps a number `g`, the **go-gain**, between 0 (halted) and 1 (running). Pressing pause sets the *goal* to 0; each tick, `g` slews towards its goal at a fixed rate (**lines 200 to 201**). The eased version `e` (**line 203**) is then used two ways: the controller's clock `dtc = dt * e` slows down, so timers and servo motions stretch out and stop, and (**line 254**) every drive command is multiplied by `e`, so the motors' push fades out.

:::why Slowing the controller's clock as well as the motor commands
**What it is.** The gain scales the *time* the controller experiences, not only the drive voltages.

**Why it is done this way.** If only the motor commands faded, the arm and claw would keep moving at full speed and the timers would keep running, so the robot would stand still while the arm finished its reach in mid-air.

**Why it matters.** With the clock scaled, every part of the robot, wheels, arm, claw and timers, decelerates together and freezes together, and resuming puts them all back in step.

**What happens if you do not.** A pause that stops the wheels and lets the arm carry on swinging, or a resume where the timers have drifted from the motion.
:::

## Step 9: One Tick

@code Syd Website Assets/Mechatronics/patrick/patrick_mission.cpp 254-275

After the switch has chosen the drive commands, the rest of `step()` makes them real. The servos move toward their targets at a limited rate (**lines 256 to 257**). The arm angle follows from the linkage (**line 258**), and from it the weight on the drive wheels (**lines 259 to 260**). Each side is advanced with `sideStep` (**lines 261 to 262**), and the position and heading follow from the two wheel speeds (**lines 263 to 264**): the average gives forward speed, and the *difference* divided by the track gives the turning rate. If the claw is holding something, the item's position is computed from the arm tip each tick (**lines 268 to 271**), so it rides in the claw wherever the claw goes.

:::why Position from the two wheel speeds
**What it is.** Forward speed is the mean of the two wheel speeds, and turning rate is their difference over the track width.

**Why it is done this way.** This is how every two-wheeled differential-drive robot works, from this one to a robot vacuum.

**Why it matters.** The path that Patrick traces on the Mission Map comes from this single pair of lines, so a turn on the spot (equal and opposite wheel speeds) really rotates without moving the centre.

**What happens if you do not.** You fake the path with scripted moves, and the picture no longer follows from the physics.
:::

## Step 10: main, and What It Writes

@code Syd Website Assets/Mechatronics/patrick/patrick_mission.cpp 279-308

`main` reads the command line (**lines 281 to 287**), builds the table of obstacles (**line 289**), opens the output file (**line 291**), prints the header row, creates the mission and starts it (**lines 293 to 294**), then loops (**line 296**). Inside the loop it may pause or resume at the times asked for, advances one tick, and writes a row every tenth tick, so one row per 10 ms (**lines 299 to 301**). At the end it reports where each ingredient ended up (**lines 303 to 305**).

:::why Writing a table and not drawing a picture
**What it is.** The program's whole output is rows of numbers.

**Why it is done this way.** A table can be plotted, filtered, compared, and read by any other tool. A picture can only be looked at.

**Why it matters.** The twin test in Step 11 only works because the output is a table you can compare byte for byte.

**What happens if you do not.** You can see that two runs look similar and have no way to prove they are identical.
:::

## Step 11: Proving It

The JavaScript version was run for the same mission, writing the same 13 columns. The two tables were compared:

```
./patrick --out cpp1.csv
node dump.mjs js1.csv
tr -d '\r' < cpp1.csv | cmp - js1.csv
```

They were identical: 9,776 rows by 13 columns, the same in every digit. The same was done for a run with a pause at 20 s and a resume at 23.5 s, which was identical too.

It was not identical the first time. The first comparison showed the programs agreeing for almost 3 seconds, then drifting apart by a few millionths of a metre in the BRAKE state, then by centimetres a few seconds later, enough to put one program in a different state than the other. The cause was Step 6: with one step per tick, the tyre equation was numerically unstable at low speed, so the tiniest difference between the two languages' arithmetic was amplified instead of damped. (That is the explanation that fits the evidence: adding the four sub-steps removed the disagreement completely.) The programs have agreed to the last digit ever since.

:::technical Technical Stuff
Floating-point maths is deterministic: the same operations in the same order give the same result on the same kind of processor. The two programs agree exactly because they perform the same operations in the same order, and because the equations are now stable, so tiny differences in a library function's last digit do not grow. If either were unstable, no amount of care would make them match.
:::

## Step 12: Putting It on the Page

Three small pieces carry the C++ from your folder to the visitor's screen.

**The download.** The build script (`build.mjs`) copies `patrick_mission.cpp` into the `DLC` folder as `Patrick_Breakfast_Run.cpp`, and the Downloadable Files page lists it next to the MATLAB files.

**The viewer.** The bundler is told to read `.cpp` files as plain text (`loader: {'.cpp': 'text'}`), so the program's own source sits inside the page's script as a string. The code bubble splits it into lines and colours the keywords, strings and numbers with a few regular expressions.

**The highlight.** The page finds the controller's `case` lines by searching the text for `case NAME:` and highlights the lines belonging to the state the robot is in now. That works because the `enum` names are the same words as the `case` labels.

:::why The page shows the real file, not a copy
**What it is.** The code on the page is the very text of `patrick_mission.cpp`, inserted by the build.

**Why it is done this way.** A second copy, pasted into the page's HTML, would be one more thing to forget to update.

**Why it matters.** Edit the C++ and rebuild, and the bubble, the download and the highlighted lines all follow. What a visitor reads is, by construction, what they can download and compile.

**What happens if you do not.** The code on the page quietly becomes a different program from the one in the download.
:::

:::warning
The line numbers in this chapter's listings are those of the file as this edition was written. If you edit `patrick_mission.cpp`, rebuild the book and check that each range still shows what the text describes.
:::

## Try It Yourself

:::problems
1. Run `./patrick --duty 1.0 --bands 0` (full throttle, bare wheels) and compare the finishing time and the final positions with the default run (which finishes at 97.75 s with the items at about x = -0.613). What do you see?
2. Change `STOP_AT` from 0.108 to 0.080 and rebuild. Does the run still finish? Where do the items end up, and why?
3. Add a sixth ingredient. List every place in the file that must change.
4. Run `./patrick --pause-at 20 --resume-at 23.5` and open the table. What does the `go_gain` column do around t = 20 s, and what happens to the rows while the robot is halted?
5. Change the soft-stop time in `step()` from 0.8 s to 0.2 s. Which graph on the page would show the difference?
:::

:::quiz The Robot's Code
1. What does `sideStep` do four times per tick, and why?
2. Why does `com()` matter for grip?
3. How does the robot know when to stop driving at a pad, and why is that better than a timer?
4. What does the go-gain scale, and why both the motors and the clock?
5. How can you be sure the page's animation and the downloaded file are the same program?
:::

:::answers
**The Robot's Code: practice and quiz.**

*Try It Yourself.* 1. Full throttle finishes sooner, at 92.05 s instead of 97.75 s, because the robot drives faster. But it brakes later in distance terms, so the items land about 7 cm further in (around x = -0.68 instead of -0.613), near the edge of the 8 cm plates. Speed costs accuracy. (Switching the bands off at the same time makes the wheels slip more as well; the Dynamics graphs show how.) 2. It still finishes, at 99.61 s, but the items land at about x = -0.64, 2.7 cm further in than before, because braking later leaves the claw further past the pad's centre. The run also takes about two seconds longer. 3. Add an entry to `ITEMS`, a lane to `LANES`, change the array sizes and `NITEM`, and check that the pad and spot lists still cover every lane. 4. The gain falls from 1.0 to about 0 over 0.8 s (0.90 a tenth of a second after the pause, 0.15 at 0.7 s). No rows are written while the robot is halted, so the time column carries straight on from the instant of the pause, and the gain then climbs back to 1 over 0.6 s after the resume. 5. The live speed chart in the Dynamics bubble: the speed would fall away four times faster.

*Quiz.* 1. It advances the wheel's spin and the robot's speed in four quarter-steps, because the tyre's grip is so stiff near zero speed that one step is unstable. 2. Grip is friction times the weight on the drive wheels, and the centre of mass moves with the arm and the load, so the weight on the wheels changes. 3. It reads the sonar and brakes when the pad is 10.8 cm away. A timer would be wrong whenever speed or friction changed. 4. Every drive command and the controller's own clock, so the wheels, the arm, the claw and the timers all slow and stop together. 5. The two were run side by side, writing the same table, and compared byte for byte; they were identical, and the page embeds the very file that is offered for download.
:::
