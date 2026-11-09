# Time, Motion and Animation

Animation is a magic trick. It is a series of still pictures shown fast enough that your brain sees motion. Whether the trick works depends on two things: *when* each picture appears, and *which in-between values* you choose. This chapter covers both: the loop that drives every animation on the web, the maths of easing and smoothing, and the good manners a page should show to visitors who would rather it sat still.

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
