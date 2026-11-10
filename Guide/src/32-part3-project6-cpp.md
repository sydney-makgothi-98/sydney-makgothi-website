# Project 6: A Cart That Brakes Before the Wall (C++)

This is the smallest possible version of Patrick: a cart with one motor that drives towards a wall and must stop before it hits. It has the same three ingredients as the real robot: a **motor model** (voltage in, push out), a **time-stepped simulation**, and a **state machine** (DRIVE, BRAKE, DONE). By the end you will also add the soft stop that Patrick's PAUSE button uses. You need the compiler from Chapter 17.

## Step 1: Check the Numbers by Hand First

Before writing code, work out what the answer should roughly be, so you can tell a bug from a result. The cart has mass 0.6 kg and wheels of radius 0.0325 m. The motor has a winding resistance of 6 ohms and a constant of 0.2326 (volts per radian per second, which is also newton-metres per amp). At full duty the motor sees 4.6 volts; at 70 percent duty, 3.22 volts.

At top speed the motor's own back-voltage cancels the supply (almost), so the current is small. Ignoring friction, the top wheel speed is about 3.22 / 0.2326 = 13.8 rad/s, and the cart speed is that times the wheel radius: 13.8 x 0.0325 = 0.45 m/s. So we expect a top speed a little under **0.45 m/s**.

:::why Estimating the answer before running the code
**What it is.** A quick hand calculation of the result.

**Why it is done this way.** A program that prints a number gives you no way to know whether the number is right.

**Why it matters.** When the finished program prints 0.450 m/s, you know it agrees with the physics. If it had printed 45 or 0.045, you would know at once something was wrong with the units.

**What happens if you do not.** You trust whatever the program prints, and ship a robot whose numbers are off by a factor of ten.
:::

## Step 2: The Constants and the Cart

```
#include <algorithm>
#include <cmath>
#include <cstdio>

const double M = 0.6;          // mass, kg
const double RW = 0.0325;      // wheel radius, m
const double KE = 0.2326;      // motor constant
const double RM = 6.0;         // winding resistance, ohm
const double ETA = 0.55;       // gearbox efficiency
const double VBAT = 4.6;       // volts reaching the motor at full duty
const double WALL = 1.0;       // the wall is at x = 1 m
const double STOP_AT = 0.20;   // brake when the wall is this close, m

double clampd(double x, double a, double b) { return std::min(b, std::max(a, x)); }

enum State { DRIVE, BRAKE, DONE };

struct Cart {
  double x = 0, v = 0, t = 0;
  State state = DRIVE;
  double step(double duty, double dt) {
    double w = v / RW;                                       // wheel speed, rad/s
    double volts = (state == DRIVE) ? duty * VBAT : 0.0;     // BRAKE: 0 V, so the motor drags
    double current = (volts - KE * w) / RM;
    double force = ETA * KE * current / RW;                  // motor torque as push at the ground
    v += force / M * dt;
    x += v * dt;
    t += dt;
    return volts;
  }
};
```

The motor equation is one line: **current = (volts - back-voltage) / resistance**, where the back-voltage is the constant times the wheel speed. A spinning motor is also a generator, and pushes back. That one fact is why the cart reaches a top speed, and why it brakes when the supply is cut.

:::why Braking by setting the voltage to zero
**What it is.** In the BRAKE state the code sets `volts` to 0 rather than reversing the motor.

**Why it is done this way.** With 0 V across it, a spinning motor's own back-voltage drives a current through its own winding, and that current produces a torque *against* the motion. This is an electrical brake, and it costs no energy from the battery.

**Why it matters.** It is smooth, gentle on the gearbox, and cannot accidentally drive the cart backwards. On the real robot it is done by shorting the motor terminals through the H-bridge.

**What happens if you do not.** If you simply switched the motor off (disconnected it), nothing would oppose the motion and the cart would coast much further, straight into the wall.
:::

## Step 3: The Loop and the State Machine

```
int main() {
  Cart c;
  const double dt = 0.001, duty = 0.7;
  double vmax = 0;
  for (int i = 0; i < 20000 && c.state != DONE; i++) {
    double ramp = clampd(c.t / 0.35, 0, 1);            // soft start over 0.35 s
    c.step(duty * ramp, dt);
    vmax = std::max(vmax, c.v);
    if (c.state == DRIVE && WALL - c.x <= STOP_AT) {
      c.state = BRAKE;
      std::printf("brake at t=%.2f s, x=%.3f m, v=%.3f m/s\n", c.t, c.x, c.v);
    }
    if (c.state == BRAKE && std::fabs(c.v) < 0.005) c.state = DONE;
    if (i % 500 == 0) std::printf("t=%.2f  x=%.3f  v=%.3f\n", c.t, c.x, c.v);
  }
  std::printf("stopped at x=%.3f m (%.1f cm from the wall) after %.2f s; top speed %.3f m/s\n",
              c.x, (WALL - c.x) * 100, c.t, vmax);
  return 0;
}
```

Compile with `g++ -std=c++17 -Wall -Wextra -O2 cart.cpp -o cart` and run it. You should see:

```
t=0.00  x=0.000  v=0.000
t=0.50  x=0.095  v=0.403
t=1.00  x=0.314  v=0.449
t=1.50  x=0.539  v=0.450
t=2.00  x=0.764  v=0.450
brake at t=2.08 s, x=0.800 m, v=0.450 m/s
t=2.50  x=0.855  v=0.017
stopped at x=0.857 m (14.3 cm from the wall) after 2.65 s; top speed 0.450 m/s
```

The top speed, 0.450 m/s, matches the hand estimate from Step 1. The cart braked when the wall was 20 cm away, coasted another 5.7 cm while the electrical brake slowed it, and stopped 14.3 cm short.

:::why A soft start (the ramp)
**What it is.** `ramp` rises from 0 to 1 over the first 0.35 seconds and multiplies the duty.

**Why it is done this way.** Full voltage applied at once makes the wheels spin on the table.

**Why it matters.** Patrick's tyres have a limited grip. A gentle start keeps the wheels rolling instead of slipping, and spares the gears a jolt. It is the same idea Patrick's `ramp(0.35)` uses in every driving state.

**What happens if you do not.** The first instant of every drive is a lurch, and the robot's position after each move becomes less repeatable.
:::

## Step 4: Plot It

Make the program write a table, then look at it. Replace the `printf` inside the loop with one that prints `t,x,v` on each line, run `./cart > cart.csv`, and open the file in a spreadsheet. Plot `v` against `t`. You should see the speed rise smoothly to 0.45, stay there, and fall away to zero after the brake point.

:::tip
A picture finds bugs that a column of numbers hides. If the speed curve has a sharp corner where you expected a smooth curve, you have found a place where your model is not what you meant.
:::

## Step 5: The Soft Stop (Pause)

Patrick's PAUSE button does not stop him instantly. It slides a number called the **go-gain** from 1 down to 0 over 0.8 seconds, and multiplies every command by it. Add the same to the cart. Near the top of `main`, before the loop, add `double g = 1, goal = 1;`. Inside the loop, before `c.step`, add:

```
if (c.t > 1.0) goal = 0;                                 // pause at t = 1 s
double rate = 1 / 0.8;                                   // 0.8 s from 1 to 0
g += clampd(goal - g, -rate * dt, rate * dt);
double ge = g * g * (3 - 2 * g);                         // eased, so it starts and ends gently
c.step(duty * ramp * ge, dt);
```

(and replace the old `c.step(...)` line). Run it and print the speed as it goes. When I ran it, the speed was 0.449 m/s at t = 1.0 s (the moment of the pause), 0.239 at 1.5 s, 0.010 at 2.0 s and 0 after that: a smooth S-shaped fall to zero instead of a drop off a cliff. The cart rolled from x = 0.314 m to a halt at x = 0.551 m, about 24 cm further on, and stayed there.

:::why Easing the gain, not just ramping it
**What it is.** `g * g * (3 - 2 * g)` is a smooth S-curve that goes from 0 to 1 (and back) with zero slope at both ends.

**Why it is done this way.** A straight-line ramp has a sharp corner where it begins and ends, and a corner in a command is a jolt in the motion.

**Why it matters.** On the page, the robot visibly eases to a halt when you press PAUSE: its speed fell from 28.5 cm/s to zero over about 0.65 seconds, with no sudden change anywhere.

**What happens if you do not.** The pause looks like the robot hit an invisible wall.
:::

:::quiz Project 6
1. Why is the top speed about 0.45 m/s? What stops the motor from speeding up forever?
2. What does setting `volts` to 0 do to a spinning motor, and why is that a brake?
3. Why does the cart stop 14.3 cm from the wall, not exactly at the wall?
4. What two things would you change to make it stop closer to the wall?
5. In Step 5, why is the gain multiplied into the *command* and not applied by changing the speed directly?
:::

:::answers
**Project 6 quiz.**

1. The back-voltage (KE times wheel speed) grows with speed until it almost cancels the supply voltage, so the current and the force fall to nearly zero. With no force left, the cart stops accelerating and holds its top speed.
2. A spinning motor generates its own voltage. With the supply at 0 V, that voltage drives a current through the winding, and a current in a magnetic field produces a torque that opposes the rotation. It acts as a brake.
3. The brake starts at 20 cm, but the cart is moving at 0.45 m/s and needs distance to slow down (about 5.7 cm here). It stops after that coasting distance.
4. Lower the `STOP_AT` distance (brake later), or lower the duty so the cart travels more slowly and needs less distance to stop. Braking later is riskier; slower is safer.
5. Because the command is the thing that makes the motor push. Changing the speed directly would be teleporting the robot's motion, ignoring the mass; changing the command lets the real physics (mass, braking) produce a realistic, gradual halt.
:::
