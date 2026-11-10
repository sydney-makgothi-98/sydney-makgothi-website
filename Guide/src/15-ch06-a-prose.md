# Time, Motion and Animation

Animation is a magic trick. It is a series of still pictures shown fast enough that your brain sees motion. Whether the trick works depends on two things: *when* each picture appears, and *which in-between values* you choose. This chapter covers both: the loop that drives every animation on the web, the maths of easing and smoothing, and the good manners a page should show to visitors who would rather it sat still.

:::objectives
- Write an animation loop with `requestAnimationFrame` and explain why a timer is the wrong tool.
- Make motion independent of the frame rate with delta time, and clamp it.
- Interpolate between two values and shape the motion with an easing function.
- Smooth a value towards a moving target in a way that behaves the same at every frame rate.
- Choose between a CSS transition, a CSS animation and a script loop.
- Honour `prefers-reduced-motion`.
:::

## The Animation Loop

An animation needs a fresh picture every time the screen refreshes. The wrong way to ask for one is a timer. `setInterval(draw, 16)` fires about every 16 milliseconds, but its rhythm has nothing to do with the screen's. Frames land just before or just after a refresh, and the motion shivers. The right way is to ask the browser itself, with **`requestAnimationFrame`**. You hand it a function, and the browser calls it once, just before the next paint, with a timestamp. Your function draws a frame and asks again.

```
let last = null;
function frame(now) {                       // now: milliseconds since the page started
    const dt = last === null ? 0 : (now - last) / 1000;   // seconds since the last frame
    last = now;
    update(dt);                              // advance the state by dt
    draw();                                  // draw it
    requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
```

@figure raf-timing A timer set to 16 ms slowly drifts against a 16.67 ms refresh: sometimes two of its frames land inside one refresh and one is thrown away, sometimes a refresh gets none and the old picture repeats. `requestAnimationFrame` is called once per refresh, just before the paint.

:::why requestAnimationFrame instead of a timer
**What it is.** The browser's own "call me before the next paint" service.

**Why it is done this way.** Only the browser knows exactly when the next refresh is. A timer is just guessing.

**Why it matters.** Frames arrive at the right moment, so motion is smooth. As a bonus, the browser pauses the calls when the tab is hidden, so a background tab costs you nothing.

**What happens if you do not.** A timer keeps burning battery in hidden tabs, and its animation judders because it drifts out of step with the screen.
:::

## Delta Time: Motion That Does Not Depend on Your Computer

Imagine moving a ball with `x += 5` on every frame. On a 60-hertz screen it travels 300 pixels a second. On a 144-hertz screen the same code runs 144 times a second, so the ball travels 720 pixels a second, more than twice as fast. A game that runs at different speeds on different machines is broken.

The fix is to tie motion to *time*, not frames. Choose a speed in units per second, and move by that speed multiplied by the time the frame took.

**x ← x + v × Δt**

Here v is the speed (say 300 pixels per second) and Δt is the **delta time**: the seconds since the last frame. At 60 hertz Δt is 0.0167, so the ball moves 5 pixels a frame. At 144 hertz Δt is 0.0069, so it moves 2.08 pixels a frame. Either way it covers 300 pixels each second. This is **frame-rate independence**.

One more precaution is needed, because the loop above trusts Δt blindly. A tab hidden for a minute would return with a Δt of sixty seconds and fling everything off the screen. Robust code **clamps** the delta time to a small maximum, as in `dt = Math.min(dt, 0.1)`, and the animation loops of the flight dynamics and mechatronics pages of this website do so.

:::why Multiplying by delta time, and clamping it
**What it is.** Using `speed * dt` for movement, and capping `dt` at about 0.1 seconds.

**Why it is done this way.** Time is the same on every computer. Frames per second is not.

**Why it matters.** The animation runs at the same speed on a phone, a laptop and a gaming monitor. The clamp stops a long pause from turning into one gigantic leap.

**What happens if you do not.** The page runs twice as fast on a fast monitor, and objects teleport when you switch back to the tab.
:::

## Interpolation and Easing

An animation between two values must decide what happens in between. **Linear interpolation**, often called *lerp*, blends a start value a and an end value b by a fraction t between 0 and 1:

**lerp(a, b, t) = a + (b − a) × t**

With t = 0 you get a, with t = 1 you get b, and at t = 0.5 you get the middle. If t grows steadily with time, the motion is steady and **linear**: it starts and stops with a jolt and looks mechanical. Real objects speed up and slow down. We imitate that by passing t through an **easing function**.

The simplest useful one is **smoothstep**:

**smoothstep(t) = 3t² − 2t³**, for t between 0 and 1.

It is 0 at the start, 1 at the end, and its slope is zero at both ends, so motion eases out of rest and settles back into it. CSS has a more flexible family, the cubic Bézier curves (`cubic-bezier(0.16, 1, 0.3, 1)` is a popular "quick start, long gentle stop"). A good habit: ease things *out* when they arrive (fast, then settling) and *in* when they leave (slow, then fast).

@figure easing-curves Four ways to get from 0 to 1 in the same time. The horizontal axis is how much of the time has passed; the vertical axis is how much of the distance has been covered. The slope at any point is the speed.

:::technical Technical Stuff
A `cubic-bezier(x1, y1, x2, y2)` curve is drawn by a point that moves from (0, 0) to (1, 1) while being pulled towards two control points, (x1, y1) and (x2, y2). The browser treats the curve as a graph of progress against time, so the x values must stay between 0 and 1, but the y values may overshoot: `cubic-bezier(0.34, 1.56, 0.64, 1)` goes past 1 and comes back, which is how a "bouncy" arrival is made. The four CSS keywords are shorthands: `ease` is `cubic-bezier(0.25, 0.1, 0.25, 1)`, `ease-in` is `(0.42, 0, 1, 1)`, `ease-out` is `(0, 0, 0.58, 1)` and `ease-in-out` is `(0.42, 0, 0.58, 1)`.
:::

@include blocks/ch06-w1.md

:::why Easing instead of linear motion
**What it is.** Passing the progress value through smoothstep or a Bézier curve before using it.

**Why it is done this way.** Real objects have mass, so they accelerate and decelerate.

**Why it matters.** The same movement in the same time reads as natural instead of robotic.

**What happens if you do not.** Panels snap into motion and stop dead. Nothing is broken, but it feels cheap, and viewers notice even if they cannot say why.
:::

## Smoothing Towards a Target

Sometimes there is no fixed duration. A camera follows a moving robot. A reading chases a value the user keeps changing. Here the motion is better described as "always move towards the target". The standard trick is **exponential smoothing**: each frame, close a fraction of the remaining gap.

**x ← x + (target − x) × k**

With k = 0.1, each frame closes a tenth of the gap. It moves fast when far away and slows as it nears the target, and it adapts at once if the target moves.

The trouble is that this is frame-rate dependent: more frames per second means the same k closes the gap faster. To fix it, ask what the rule means in continuous time. Closing the gap at a steady *rate* is the equation dx/dt = s(target − x), and after a time Δt it closes the fraction

**k = 1 − e^{−s Δt}**

where s is a "snappiness" in units of 1 per second. Compute k from Δt every frame and the motion is identical on every screen.

@figure exp-smoothing Exponential smoothing towards a target of 1 for three values of s. The curve never quite arrives, but it is 95 percent of the way there after 3/s seconds, and 99 percent after 4.6/s.

:::worked How long until the camera settles?
The robot page's camera uses s = 5.5 per second. How long does it take to close half the gap? To be within 1 percent of the target? And if a designer asks for it to feel "twice as snappy", what should s become?

**Step 1. Half the gap.** The remaining gap after time t is e^{−st}. Half remains when e^{−st} = 0.5, so t = ln 2 / s = 0.693 / 5.5 = 0.126 s. (This is the smoothing's *half-life*.)

**Step 2. Within 1 percent.** e^{−st} = 0.01 gives t = ln 100 / s = 4.605 / 5.5 = 0.837 s.

**Step 3. Twice as snappy.** Every time in this motion scales as 1/s, so doubling s to 11 halves every settling time: 0.063 s to half and 0.419 s to 1 percent.

**What the answer tells you.** With this kind of smoothing you never choose a duration. You choose a *rate*, and all the durations follow. That is why one number, s, is enough to tune the whole feel of the camera.
:::

@include blocks/ch06-w2.md

:::why Computing k from delta time
**What it is.** Using `k = 1 - Math.exp(-s * dt)` instead of a fixed number like `0.1`.

**Why it is done this way.** It is the exact solution of "approach the target at a steady rate", so it does not matter how long each frame is.

**Why it matters.** The robot page's camera glides the same way on a 30 hertz phone and a 144 hertz monitor.

**What happens if you do not.** The camera is sluggish on slow devices and jumpy on fast ones, and you will never see the bug on your own machine.
:::

## Timelines and Sequences

Many animations are scripts: first this, then that two seconds later, then both together. The simplest way to build one is a list of **keyframes**, each saying "at time t, do this", walked through as the clock advances. The automatic tour of the robot page works exactly this way: a list of entries like "at 19 seconds, select the sensor", plus a counter that advances by Δt each frame and fires each entry as its time passes. Because the clock is just a number, you can pause the script, restart it, or jump around in it by changing that number. Libraries such as GSAP, covered in Part II, polish this machinery, but the idea is no bigger than this.

## CSS Animation

Not every animation needs JavaScript. A **transition** animates a property from its old value to its new one whenever it changes.

```
.chip { background: transparent; transition: background 150ms ease, color 150ms ease; }
.chip:hover { background: var(--accent); color: #0b0820; }
```

An **animation** uses **keyframes** to describe a longer or repeating motion.

```
@keyframes blink { 50% { opacity: 0.15; } }
.live-dot { animation: blink 1.2s steps(2) infinite; }
```

:::why Using CSS for simple state changes
**What it is.** Letting a stylesheet do hover effects and blinking dots, with no script.

**Why it is done this way.** The browser can run many CSS animations without involving the main thread at all.

**Why it matters.** Your JavaScript stays free for the real work, and the animation stays smooth even when the page is busy.

**What happens if you do not.** A script-driven hover effect stutters whenever the page is doing something heavy. Use JavaScript for motion that depends on data or on a continuous calculation, and CSS for everything else.
:::

## Motion with Manners

Some visitors find motion distracting. For some it is physically unpleasant: big movements and constant background animation can cause dizziness and nausea for people with vestibular disorders. Phones and laptops let a person say "less motion, please", and the browser passes that on to your page as `prefers-reduced-motion: reduce`. A well-mannered page listens.

```
@media (prefers-reduced-motion: reduce) {
    .live-dot { animation: none; }
    html { scroll-behavior: auto; }
}
```

In JavaScript you read it with `window.matchMedia('(prefers-reduced-motion: reduce)').matches`.

:::why Honouring reduced motion
**What it is.** Checking the preference and, if it is set, showing a still frame instead of starting animation loops, and skipping the automatic tour.

**Why it is done this way.** The visitor has told you, through their own system, what they need.

**Why it matters.** It can be the difference between a page someone can use and a page that makes them ill. The instruments still work: every control still redraws the picture. Only the *unrequested* motion goes away.

**What happens if you do not.** Some visitors simply cannot use your site, and they will not tell you. They will just leave.
:::

:::summary
- Ask the browser for frames with `requestAnimationFrame`; it calls you once per refresh and stops when the tab is hidden.
- Move by speed × Δt, never by a fixed amount per frame, and clamp Δt so a long pause cannot become a leap.
- `lerp(a, b, t)` blends two values; an easing function reshapes t so motion starts and stops like a real object.
- To follow a moving target, close a fraction k = 1 − e^{−sΔt} of the gap each frame. The rate s sets every settling time.
- Timelines are lists of keyframes walked by a clock. CSS transitions and animations handle simple state changes without script.
- Honour `prefers-reduced-motion`: keep the controls working, drop the unrequested motion.
:::
