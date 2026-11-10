# The Patrick Page: One Model Drives Everything

The Patrick page is the most elaborate on the site, and it rests on one rule that you have met several times already: **one source of truth.** A single model (`model.js`) knows the physics of the motors, the wheels, the arm and the sensor. The 3D robot (`robot.js`) is a picture of that model. The page (`main.js`) wires the two to the controls and the charts. Nothing is keyframed by hand.

The folder `Syd Website Assets/Mechatronics/patrick/` holds six files, and each has a single job.

| File | Its job |
|---|---|
| `model.js` | The physics: motor, traction, arm linkage, ultrasonic acoustics, and the breakfast-run simulation. No drawing at all. |
| `robot.js` | The 3D geometry, built from code, and the `pose()` function that arranges it. |
| `parts.js` | The description and specifications of every part (computed from the model where possible). |
| `charts.js` | Small canvas charting helpers. |
| `main.js` | The page: renderer, camera, picking, tour, panels. |
| `build.mjs` | Bundles the lot into `patrick.js`. |

@figure patrick-data-flow How the files depend on each other. The physics is the source; the mission runs on it; the geometry, the charts and the page read from the mission. Nothing to the right of the model is typed in by hand.

## The Motor

@code Syd Website Assets/Mechatronics/patrick/model.js 22-36

A small DC motor is described by a few numbers. **Line 24** holds them: winding resistance (`Rm`), no-load current (`I0`), a constant that links speed to voltage (`ke`), gearbox efficiency (`etaG`) and the inertia seen at the wheel (`J`). **Line 26** derives the friction torque, and **line 27** the no-load speed (about 200 rpm at 6 volts, which matches the motor's datasheet).

The function `motor(V, w)` on **lines 30 to 34** is the physics of the motor in three lines. The current is the voltage left after subtracting the back-EMF (`ke × w`, the voltage the spinning motor generates against you) divided by the resistance. The torque is gearbox efficiency times `ke` times current, minus friction. And the powers follow.

:::why Computing motor numbers from a model, not typing them in
**What it is.** The stall torque, peak power and efficiency shown on the Patrick page are computed by calling `motor()`. They are never typed in.

**Why it is done this way.** The charts, the part descriptions and the simulation all need these numbers.

**Why it matters.** They cannot disagree. If you change the winding resistance, the power chart, the stall torque in the motor's description and the speed of the robot all change together.

**What happens if you do not.** A spec sheet says "stall torque 0.07 N·m" while the chart plots 0.09, because someone updated one and forgot the other.
:::

:::why The supply voltage is not 6 volts
**What it is.** `supplyV(duty)` on line 35 gives `duty × (6.0 − 1.4)`, where 1.4 volts is the voltage the motor driver chip wastes.

**Why it is done this way.** A real motor driver (the L298N) loses about 1.4 volts as heat inside its transistors.

**Why it matters.** The robot is slower than the battery voltage would suggest, which matches reality, and it explains a classic beginner puzzle ("my 6 volt motors only get 4.6").

**What happens if you do not.** The simulated robot runs faster than the real one would, and any "performance" chart overstates what you can build.
:::

## The Wheel Grip, and the Rubber Bands

@code Syd Website Assets/Mechatronics/patrick/model.js 44-47

This is the heart of the "with and without rubber bands" story. **Line 44** gives the peak friction coefficient: 1.0 with bands, 0.22 without, scaled by the surface (a dusty desk grips less). **Line 46** is the friction curve. Friction is not constant: it rises as the wheel starts to slip, peaks at about 17 percent slip, and then falls a little as the wheel just spins. The function `mu(s, peak)` captures that with a sine of an arctangent.

:::why A friction curve instead of one number
**What it is.** Friction depends on how much the tyre is slipping, not on a fixed coefficient.

**Why it is done this way.** Real tyres behave this way. A single fixed friction number would let a wheel push with a force that never falls, however hard it spins.

**Why it matters.** The simulated robot shows what happens in life: when the motor demands more force than the grip can supply, the wheel spins up, the grip falls, and the robot accelerates *less* than it would with enough grip.

**What happens if you do not.** The "bare wheels" and "with bands" curves would look almost identical, and the rubber bands would seem pointless.
:::

## The Arm: Two Circles Meeting

@code Syd Website Assets/Mechatronics/patrick/model.js 59-69

The arm is lifted by a servo through a pushrod. The servo's horn moves on a circle; the pushrod has a fixed length; the end of the pushrod is pinned to the arm, which itself can only swing on a circle about its own pivot. So the arm's angle is where two circles meet: the circle of radius "rod length" around the horn's tip, and the circle of radius "attachment distance" around the arm's pivot.

**Line 60** finds the horn tip for the given servo angle. **Line 61** gets the vector and distance from the pivot to that tip. **Line 63** checks whether the circles can meet at all: if the distance is too large or too small, the linkage is **jammed**, and the function returns `null`. **Lines 64 to 66** are the standard two-circle intersection formula. **Line 67** picks the solution where the pin is higher (the "elbow up" one). **Line 68** returns the arm's angle and the two pin positions.

:::why Solving the linkage instead of animating the arm
**What it is.** The arm's angle is *calculated* from the servo's angle by geometry. It is not set separately.

**Why it is done this way.** In the real robot, the arm angle is a *consequence* of the servo angle. There is one input.

**Why it matters.** The pushrod in the 3D model always connects the horn to the arm exactly, at every angle, because both ends come from the same calculation. It also tells you the robot's real limits: below about 18 degrees of servo travel, the function returns `null`, and the real linkage would jam too.

**What happens if you do not.** The arm and the rod are animated separately, and at some angles the rod visibly detaches from the arm.
:::

## Posing the Robot

@code Syd Website Assets/Mechatronics/patrick/robot.js 490-509

The `pose` function takes the servo angle `phi`, the claw opening `jaw`, the wheel angles `wl` and `wr`, whether the bands are on, and how far the robot is taken apart (`u`). **Line 491** calls the linkage solver from the model. **Lines 494 to 498** turn the horn, place and aim the pushrod from the two pin positions, and swing both pairs of arm bars. **Lines 499 to 502** find the arm's tip, then put the claw and the claw servo there. **Lines 504 and 505** open the two fingers. **Lines 506 and 507** spin the wheels and the bands.

:::why The robot is a function of its inputs
**What it is.** `pose(...)` sets every moving part's position from a handful of numbers, from scratch, each time.

**Why it is done this way.** This is Chapter 5's *screen = render(state)* again, in 3D.

**Why it matters.** The same function poses the robot for the mission, for a still frame when motion is reduced, and for the disassembled view. No part can be "left behind" in a wrong position.

**What happens if you do not.** Each piece of code that moves something has to remember to move everything attached to it. Miss one, and the claw floats off the arm.
:::

## Looking Around and Picking

@code Syd Website Assets/Mechatronics/patrick/main.js 191-201

This is the camera. Instead of moving the camera directly, the page keeps *wanted* values (`want.az`, `want.el`, `want.dist`) and the camera glides toward them. **Line 192** is the frame-rate-independent smoothing factor from Chapter 6, with a snappiness of 5.5 per second. **Lines 195 and 196** move the current angles, distance and look-at point a fraction of the way to the wanted ones. **Lines 197 and 198** convert the orbit angles to a position, exactly as in Chapter 15.

:::why Easing toward a wanted view
**What it is.** The camera never jumps. It always eases toward a target.

**Why it is done this way.** Cutting between views is jarring. Easing feels like a camera operator.

**Why it matters.** The view buttons, the part picker, the automatic tour and the visitor's own dragging can all just set the *wanted* values, and the camera takes care of the motion. None of those has to know about the others.

**What happens if you do not.** Each of those features animates the camera itself, they fight each other, and the camera judders.
:::

@code Syd Website Assets/Mechatronics/patrick/main.js 225-233

This is picking, from Chapter 15. **Line 227** converts the pointer to normalised device coordinates. **Line 228** aims a ray. **Line 229** keeps only the meshes that are actually visible (a hidden mesh can still be hit by a ray). **Line 230** finds the first thing hit, but ignores everything except the selected part when "isolate" is on. **Line 231** returns the part's name.

:::why Filtering hidden meshes before the ray test
**What it is.** `robot.meshes.filter(visibleDeep)`.

**Why it is done this way.** three.js ignores the `visible` flag when raycasting.

**Why it matters.** With the rubber bands off, you would otherwise click on an invisible band and get the wrong part.

**What happens if you do not.** Clicks land on invisible parts, and the panel describes something you cannot see.
:::

# Build and Publish

## The Two Builds

Two folders need a build step. Both are small.

@code Syd Website Assets/Mechatronics/patrick/build.mjs 1-14

This is the whole build for the Patrick page. **Lines 9 and 10** find `esbuild` in the Teardown skill's folder of installed packages and load it. **Lines 11 to 14** tell it to start at `main.js`, follow every import (three.js included), minify, wrap the result in an immediately-invoked function, and write `patrick.js`. The flight dynamics folder has the same idea, in a different form: its `build.mjs` joins `core.js` and `ui.js` into `stability.js`, wrapping both in one function so their names cannot collide with the page's own script.

:::why Keeping source files and a generated file apart
**What it is.** You edit `main.js`, `model.js` and the rest. You never edit `patrick.js`.

**Why it is done this way.** `patrick.js` is *output*, a minified file that is unreadable to humans.

**Why it matters.** The sources stay readable and testable (the model can be run in Node to check numbers before it is ever drawn). The browser gets one small file.

**What happens if you do not.** If you edit `patrick.js` directly, your changes are overwritten the next time anyone builds.
:::

:::warning
Always run the build before you commit. A page that loads `patrick.js` shows whatever is in that file, and it will not know you changed `model.js` until you rebuild.
:::

## Publishing

The site is published by committing to Git and pushing to the repository on GitHub. The steps used for this site are the ones of Chapter 16:

```
git add flight-dynamics.html "Syd Website Assets/Flight Dynamics Page"
git commit -m "Add stability analysis to the Flight Dynamics page"
git add mechatronics.html mechatronics-2.html portfolio.html "Syd Website Assets/Mechatronics/patrick"
git commit -m "Add the Control Systems and Mechatronics page ..."
git push origin main
```

:::why Two commits for two pieces of work
**What it is.** The flight dynamics work and the Patrick work went in as separate commits.

**Why it is done this way.** They are unrelated changes (Chapter 16).

**Why it matters.** If the Patrick page turns out to have a problem, you can undo that commit without touching the flight dynamics work.

**What happens if you do not.** One commit holds both, and undoing either means undoing both.
:::

# React and GSAP in This Site

Parts II and IV taught React and GSAP properly, because you will meet them everywhere. This chapter tells you, plainly, where they stand in *this* project.

## The React File

@code PortfolioHero.jsx 1-8

`PortfolioHero.jsx` is a React component for a portfolio hero section. **Line 1** imports React and two hooks, `useState` and `useEffect`. **Line 2** imports some icons from a library called lucide-react. **Line 4** declares the component. **Lines 5 to 7** are its three pieces of state: whether the mobile menu is open, which skill is showing, and whether a transition is in progress.

But here is the important fact: **no page loads it.** A search of every HTML and script file finds no reference to `PortfolioHero`. The live portfolio page does not use React. It is a plain HTML file that loads Tailwind CSS from a CDN and runs an ordinary script (line 849 onwards).

:::why Saying plainly that the file is not connected
**What it is.** A component exists in the folder but does nothing on any page.

**Why it is done this way.** It was probably written as a design experiment or a candidate replacement for the portfolio's hero.

**Why it matters.** If you edit it expecting the site to change, nothing will happen, and you will lose time. And if you decide to adopt it, you now know the work involved: you would need a build step (Chapter 16) to compile its JSX, a mount point in a page, and the `react`, `react-dom` and `lucide-react` packages installed.

**What happens if you do not know.** You assume the portfolio is a React app and look for build files that are not there.
:::

## What the Portfolio Does Instead: Scroll Scrubbing by Hand

The portfolio's showcase section plays a sequence of 88 image frames as you scroll, like scrubbing through a video. It is done in plain JavaScript.

@code portfolio.html 928-949

**Lines 929 to 936** work out how far through the section the visitor has scrolled (a number from 0 to 1) and turn it into a frame number between 1 and 88. **Line 938** shows that frame. **Lines 943 to 949** attach the scroll listener, and throttle it with a timer so the function runs at most about once every 16 milliseconds. Notice the `{ passive: true }` on line 949: it promises the browser that this listener will not block scrolling.

:::why A passive scroll listener
**What it is.** `{ passive: true }` as the third argument of `addEventListener`.

**Why it is done this way.** Normally, the browser must wait to see whether a scroll listener will call `preventDefault()` before it scrolls. A passive listener promises it will not.

**Why it matters.** Scrolling stays smooth even if the listener is slow.

**What happens if you do not.** The page feels sticky on touch devices, because every scroll waits for your code.
:::

## Where GSAP Would Fit

This section of the portfolio is the perfect place to *see* what GSAP offers. The scroll scrubbing above is exactly what ScrollTrigger's `scrub` option does:

```
gsap.to({ frame: 0 }, {
    frame: TOTAL_IMAGES - 1, snap: 'frame', ease: 'none',
    scrollTrigger: { trigger: '#showcase', start: 'top top', end: 'bottom bottom', scrub: true },
    onUpdate() { updateImage(Math.round(this.targets()[0].frame) + 1); }
});
```

GSAP would replace the hand-written scroll maths (lines 929 to 936) and the throttle. It would also handle resizing and refreshing the trigger positions.

:::why Not switching to GSAP just because it exists
**What it is.** The site's author has a working hand-written solution.

**Why it is done this way.** The existing code is about twenty lines and has no dependency. GSAP would add a library to download and keep up to date.

**Why it matters.** Good engineering weighs the benefit against the cost. For one scroll effect, the hand-written version is a reasonable choice. If the site grew a dozen choreographed scroll animations, GSAP would earn its place.

**What happens if you add it anyway.** You pay for the whole library to replace twenty lines. If you never add anything else, that was not a good trade.
:::

# The Claude Skills Behind the Site

Two Claude skills helped build parts of this site. A **skill** is a folder of instructions and code that Claude loads for a particular kind of task. The skill's code is ordinary code, and you can read it. This chapter shows what each skill is made of and how it was used here.

## Anatomy: Isometric Figures

The **Anatomy** skill builds isometric SVG figures, drawings of a machine seen from a fixed angle, with shading and parts drawn in the right order. On this site, it built the turbofan engine on the propulsion page. Look at the first lines of the turbofan's build script.

@code Syd Website Assets/Propulsion Page/turbofan/build.mjs 1-12

**Lines 7 to 10** load three pieces of the skill's kit: `iso-kit` (the projection and shapes), `lathe` (shapes made by spinning a profile around an axis, such as a nacelle or a shaft), and `inline-kit` (which copies the kit's code into the finished page so the page needs no external file). The script then writes `fragment.html`, which is inserted into `propulsion.html`.

The key idea inside the kit is the isometric projection. Here is the function that turns a 3D point into a position on the page.

@code ~skills/anatomy/kit/iso-kit.mjs 1-15

**Lines 1 and 2** set the default viewing angle: 45 degrees around, 30 degrees up. **Lines 6 to 10** (`cameraOf`) compute sines and cosines of those angles once, and a scale factor `k`. **Lines 11 to 15** (`iso`) are the whole projection. The screen's horizontal position is `x × sin(a) − y × cos(a)` and the vertical position is `(x cos(a) + y sin(a)) × sin(e) − z × cos(e)`, each multiplied by the scale. That is a pair of linear formulas: no division by distance, so parallel lines stay parallel. Compare it to Chapter 7's perspective formula, which divides by `−z` to make distant things small. An isometric drawing deliberately does not.

:::why Isometric projection has no perspective
**What it is.** The `iso` function never divides by depth.

**Why it is done this way.** In an engineering illustration, equal lengths must look equal, wherever they are in the picture.

**Why it matters.** A reader can compare sizes and spot alignments by eye. It is the style of exploded-view diagrams in every service manual.

**What happens if you do not.** A perspective view makes parts at the back look smaller, which is realistic and a poor way to explain how they fit together.
:::

## Teardown: Interactive 3D Machines

The **Teardown** skill builds interactive 3D simulators of real machines: pages you can take apart, with live gauges driven by the same model that moves the parts. Its rules shaped the Patrick page, and its installed packages (three.js and esbuild) power the Patrick build. The skill's rules are worth knowing. Among them:

1. **Start from a reference, never from imagination.** Patrick was built from the photograph of the real robot.
2. **Real numbers, one source.** Every gauge reads from the function that poses the parts.
3. **One input drives everything.** For Patrick, that is the time of the breakfast run, plus the servo and wheel angles that follow from it.
4. **The part doing the work opens up.** Hence the disassembly slider and the isolate button.
5. **Test on a weak graphics chip.** Hence the three quality tiers.

Two small files from the skill's kit show the flavour of its code. First, the easing helpers.

@code ~skills/teardown/sims/kit/util.js 1-9

These are Chapter 6's `lerp` and `smoothstep` (here called `smooth`), with a `clamp01` that keeps the input between 0 and 1. The header comment says why they exist: *"Everything animated must be a pure function of `t`."* A pure function of time means you can ask for the picture at any moment, which is what lets the skill render a video frame by frame.

:::why Everything animated is a pure function of time
**What it is.** Given the time `t`, the scene is fully determined. Nothing depends on what happened in the previous frame.

**Why it is done this way.** If the picture at time 12.5 seconds depends on the history, you can only reach it by playing every earlier frame.

**Why it matters.** You can jump to any moment, scrub backwards, pause, or record at an exact frame rate. The Patrick page does this by simulating the whole breakfast run once and then reading values out of the result for any time.

**What happens if you do not.** Pausing and resuming gives a different run each time, and recording to video gives frames that do not match what the viewer saw.
:::

Second, the shader warm-up.

@code ~skills/teardown/sims/kit/warm.js 29-44

This is the idea behind Chapter 15's `compileAsync`. **Line 31** applies a fix for one library quirk. **Lines 33 to 41** go through every job (a scene, or a set of materials) and ask the renderer to compile its shader programs *now*, without drawing anything. **Line 43** returns a promise that resolves when all are done.

:::why Compiling shaders before the first frame
**What it is.** Preparing the graphics programs in advance, in parallel.

**Why it is done this way.** The first time the graphics card sees a new material, it must compile a program for it. That takes a moment.

**Why it matters.** Without it, the page freezes for a second at the first frame. With it, the freeze happens while the page is still loading, where nobody notices.

**What happens if you do not.** The page seems to hang just as the 3D scene appears, which is exactly when the visitor is paying the most attention.
:::

:::remember
A skill is not magic. It is code and instructions that you can read, change and learn from. The best way to understand one is to read its source, exactly as you have read this site's.
:::
