# GSAP: Animation Without the Headaches

Chapter 6 taught you how animation works from first principles: a loop, delta time, easing. You can build everything that way, and understanding it is valuable. But there is a point where writing your own timeline, your own easing library, and your own scroll detection stops being educational and becomes plain slow. **GSAP** (the GreenSock Animation Platform) is a library that has already solved all of that, and solved it well. This chapter shows you how to use it, and every timeline in it was run through GSAP itself in Node (`Guide/code/gsap/timeline.js`) to check the arithmetic. A note on honesty: this website does not use GSAP. It does its animation by hand, for reasons Part V discusses. You are learning GSAP because it is one of the most widely used tools in the field, and because you will be asked about it.

:::objectives
- Load GSAP and its plugins, and write tweens with `to`, `from`, `fromTo` and `set`.
- Choose an ease and say what it does to the motion.
- Stagger a group, and build timelines with the position parameter, labels and defaults.
- Control a timeline: play, pause, reverse, seek, scrub, speed.
- Trigger and scrub animations from scrolling with ScrollTrigger, including pinning.
- Respect reduced motion and clean up, and decide when GSAP earns its place.
:::

:::note
GSAP's licence has changed more than once over the years. Before using it in a commercial project, read its current licence terms on the GSAP website.
:::

## Words You Will Meet

| Word | What it means |
|---|---|
| **Tween** | A single animation of one or more properties from one value to another. |
| **Target** | What a tween animates: an element, a selector string, or a plain object. |
| **Timeline** | A container that sequences tweens and lets you control them as a group. |
| **Ease** | The curve that shapes the speed of a tween (Chapter 6). |
| **Stagger** | Starting a group of tweens one after another with a small delay. |
| **Position parameter** | The extra argument that says *where on the timeline* a tween goes. |
| **Label** | A named point on a timeline. |
| **ScrollTrigger** | A plugin that starts or scrubs animations based on scroll position. |
| **Scrub** | Linking an animation's progress directly to the scroll position. |
| **Pin** | Holding an element in place while the page scrolls past. |
| **Plugin** | An add-on that must be registered before it is used. |

## 14.1 Loading It

For learning, load GSAP from a CDN with a pinned version (Chapter 8's advice). In a bundled project, `npm install gsap` and `import { gsap } from 'gsap'`.

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script>gsap.registerPlugin(ScrollTrigger);</script>
```

:::why Registering the plugin
**What it is.** `gsap.registerPlugin(ScrollTrigger)` tells GSAP's core that the plugin exists.

**Why it is done this way.** The core is kept small. Plugins are optional, so each must announce itself.

**Why it matters.** It stops the bundler from throwing away the plugin as "unused", and makes GSAP aware of it.

**What happens if you do not.** ScrollTrigger options are silently ignored, and your scroll animations simply never fire. There is no error to tell you.
:::

## 14.2 Tweens

The three tween methods are `gsap.to()` (animate from the current value *to* new ones), `gsap.from()` (animate *from* given values to the current ones) and `gsap.fromTo()` (state both). `gsap.set()` applies values immediately, with no animation.

```
gsap.to('.box', { x: 200, rotation: 90, duration: 1, ease: 'power2.out' });
gsap.from('.title', { opacity: 0, y: 30, duration: 0.6 });
gsap.fromTo('.bar', { scaleX: 0 }, { scaleX: 1, duration: 0.8, transformOrigin: 'left center' });
gsap.set('.panel', { opacity: 0 });
```

The first argument is the **target**: a selector string (every match is animated), an element, an array, or a plain object (`gsap.to(state, { t: 1 })` animates a number in your own state, which is how a canvas instrument can be driven by GSAP). The second is the **vars** object: properties to animate, plus special settings such as `duration`, `ease`, `delay`, `repeat` (−1 for ever), `yoyo`, `stagger`, `onUpdate`, `onComplete`.

**Properties.** `x`, `y`, `scale`, `scaleX`, `rotation`, `skewX` are applied as CSS transforms. `opacity`, `backgroundColor`, `width` and any CSS property work by name (camelCased). Numbers default to pixels (or degrees for rotation); strings carry units (`'50%'`, `'2rem'`). A **relative** value `'+=100'` moves from wherever the target is now. A tween returns an object with `.pause()`, `.play()`, `.reverse()`, `.progress(p)` and `.kill()`.

:::why Animating x and y rather than left and top
**What it is.** GSAP's `x`, `y`, `scale` and `rotation` are applied as CSS **transforms**.

**Why it is done this way.** As Chapter 2 explained, transforms and opacity can be handled by the compositor without layout.

**Why it matters.** The animation stays smooth even when the page is busy.

**What happens if you do not.** Animating `left` forces layout on every frame, and the animation judders on weaker devices.
:::

## 14.3 Easing

An **ease** shapes the motion. The names are families with three variants each.

| Ease | Feel |
|---|---|
| `none` | linear, mechanical; right for scrubbing and for steady motion |
| `power1` to `power4` `.out` | fast start, settling stop; stronger numbers settle longer |
| `power2.in` | slow start, fast finish; for things leaving |
| `power2.inOut` | both; for things moving between two places on screen |
| `back.out(1.7)` | overshoots slightly and settles; a playful arrival |
| `elastic.out(1, 0.3)`, `bounce.out` | springs and bounces; use sparingly |
| `expo.out`, `circ.out` | very fast start, very long settle |
| `steps(5)` | jumps in five equal steps; for sprite sheets and counters |

In numbers: at a quarter of the way through a one-second tween from 0 to 100, `none` is at 25.0 and `power2.out` is already at 57.8 (checked in `timeline.js`). That is the "arrive fast, settle slowly" of Chapter 6. As a rule, ease things *out* as they arrive and *in* as they leave.

## 14.4 Staggers

```
gsap.from('.card', { opacity: 0, y: 20, duration: 0.5, stagger: 0.1 });
gsap.from('.cell', { scale: 0, duration: 0.4, stagger: { each: 0.05, from: 'center', grid: 'auto' } });
```

A number staggers each target that long after the previous one. The object form adds `from` (`'start'`, `'center'`, `'end'`, `'random'`, or an index) and `grid` for a two-dimensional ripple. Five boxes with `stagger: 0.2` and `duration: 1` take 1.8 seconds in all: the last box starts at 0.8 and ends at 1.8.

```
stagger: total 1.80 s; the last box starts at 0.80
```

:::why Stagger instead of writing a delay for each item
**What it is.** One setting that starts each target 0.1 seconds after the last.

**Why it is done this way.** The pattern "one after another" is so common it deserves its own word.

**Why it matters.** A row of cards ripples in rather than appearing as a block, and adding a fifth card needs no extra code.

**What happens if you do not.** You write a separate delay for each card, and every time the number of cards changes you must redo the arithmetic.
:::

## 14.5 Timelines

A **timeline** is a sequence you can play, pause, reverse and scrub as one thing.

```
const tl = gsap.timeline({ defaults: { duration: 0.5, ease: 'power2.out' } });
tl.from('.logo', { opacity: 0, y: -20 })
  .from('.nav a', { opacity: 0, stagger: 0.1 })
  .from('.hero', { opacity: 0, y: 30 }, '-=0.2');
```

By default each tween starts when the previous one ends. The **position parameter** (the extra argument at the end) changes that.

@figure gsap-timeline The worked example's three tweens on the timeline. `'<'` puts b at the start of a; `'+=0.5'` puts c half a second after the *latest end so far*, which is b's, not a's.

| Position | Means |
|---|---|
| (none) | at the end of the timeline so far |
| `2` | at 2 seconds, absolute |
| `'+=0.5'` / `'-=0.5'` | half a second after / before the end so far |
| `'<'` | at the start of the previous tween |
| `'>'` | at the end of the previous tween |
| `'<0.3'` | 0.3 s after the start of the previous tween |
| `'mid'` | at the label `mid` (added with `tl.addLabel('mid')`) |
| `'mid+=0.5'` | half a second after the label |

GSAP computed these for the examples in this chapter:

```
nav sequence: logo: 0.00..0.50  nav: 0.50..1.20  hero: 1.00..1.50  total 1.50 s
labels:       a: 0.00..1.00  b: 1.00..2.00  c: 1.00..1.50  total 2.00 s
```

In the nav sequence the three links start at 0.5, 0.6 and 0.7 and each lasts 0.5, so the stagger ends at 1.2; the hero starts 0.2 before that. In the labelled one, `c` is placed at `'mid'`, which was added after `a`, so it overlaps `b`.

**Controls.** `tl.play()`, `pause()`, `resume()`, `reverse()`, `restart()`, `seek(1.2)` or `seek('mid')`, `progress(0.5)`, `timeScale(2)` (twice the speed), `duration()`, `kill()`. A timeline made with `{ paused: true }` waits to be told. Every one of these works on a tween too.

:::why Using a timeline rather than a chain of delays
**What it is.** Tweens added to one timeline, positioned relative to each other.

**Why it is done this way.** If you give each tween a fixed `delay`, they all depend on each other's durations, and you must recalculate when one changes.

**Why it matters.** Change the first tween's duration and everything after it shifts automatically. You can also pause, reverse or jump to any point, just as the tour of the robot page uses a single clock that can be paused and restarted.

**What happens if you do not.** A hand-timed sequence is brittle: one changed number means redoing the whole schedule.
:::

:::worked When does each tween start and end?
Given the following, find the total duration of the timeline.

```
tl.to('.a', { x: 100, duration: 1 })
  .to('.b', { x: 100, duration: 2 }, '<')
  .to('.c', { x: 100, duration: 1 }, '+=0.5');
```

**Step 1. Tween a.** It is first, so it starts at 0 and ends at 1.

**Step 2. Tween b.** The position `'<'` means "at the start of the previous tween", which started at 0. So b runs 0 to 2.

**Step 3. Tween c.** `'+=0.5'` is measured from the **end of the timeline so far**. The timeline's end is the latest end among the tweens, which is 2 (from b), not 1. So c starts at 2.5 and ends at 3.5.

**Step 4. Total.** The timeline lasts 3.5 seconds. GSAP agrees:

```
worked example: a: 0.00..1.00  b: 0.00..2.00  c: 2.50..3.50  total 3.50 s
```

**The trap.** Many people expect c to start at 1.5 (after a, which was "the previous tween"). The `+=` is relative to the timeline's end, and the timeline's end is set by the longest tween so far.
:::

## 14.6 ScrollTrigger

ScrollTrigger runs an animation when an element reaches a point in the viewport, or ties it to scrolling.

```
gsap.from('.panel', {
    opacity: 0, y: 40, duration: 0.8,
    scrollTrigger: { trigger: '.panel', start: 'top 80%', toggleActions: 'play none none reverse' }
});
```

`start: 'top 80%'` reads as "when the **top of the trigger** reaches **80% of the way down the viewport**". `end` has the same shape (`'bottom 20%'`). `toggleActions` lists what happens on enter, leave, enter back and leave back: `'play none none reverse'` plays on the way down and reverses on the way back up; `once: true` fires only the first time. `markers: true` draws the start and end lines on the page while you tune them.

With `scrub: true` the animation's progress follows the scrollbar instead of playing by itself; `scrub: 0.5` adds half a second of smoothing so it does not feel glued to the wheel. With `pin: true` the trigger element is held in place while the rest scrolls, for the length between `start` and `end`, which is how "scroll to play the sequence" sections are made.

```
gsap.timeline({ scrollTrigger: { trigger: '#story', start: 'top top', end: '+=2000', scrub: 0.5, pin: true } })
    .from('.frame-1', { opacity: 0 })
    .from('.frame-2', { opacity: 0, x: 100 })
    .to('.frame-1', { opacity: 0 }, '<');
```

:::why Starting at 80% rather than at the very bottom
**What it is.** The animation starts when the element is a little way up the screen, not the moment its top peeks in.

**Why it is done this way.** An animation that plays while the element is barely visible is wasted, because nobody sees it.

**Why it matters.** The reader sees the element animate in once it is properly in view.

**What happens if you do not.** Things finish animating before you scroll to them, and the effect is lost.
:::

After images load or layout changes, call `ScrollTrigger.refresh()` so the start and end positions are measured again.

## 14.7 Reduced Motion, Responsiveness and Cleaning Up

GSAP does not read the visitor's motion preference for you. Do it yourself, with `gsap.matchMedia()`, which also handles breakpoints and reverts everything when a query stops matching.

```
const mm = gsap.matchMedia();
mm.add('(prefers-reduced-motion: no-preference) and (min-width: 800px)', () => {
    gsap.from('.panel', { opacity: 0, y: 40, scrollTrigger: '.panel' });
    return () => { /* optional extra cleanup */ };
});
mm.add('(prefers-reduced-motion: reduce)', () => { gsap.set('.panel', { opacity: 1 }); });
```

:::why matchMedia for the animation
**What it is.** The animation is created only when the media query matches, and cleaned up when it stops matching.

**Why it is done this way.** The visitor's preference can change while the page is open, and so can the window width.

**Why it matters.** Someone who asks for less motion gets none, a phone gets the simpler version, and a page that was animated reverts cleanly.

**What happens if you do not.** You animate for everyone, including people it makes ill (Chapter 6), and a pinned desktop sequence traps phone visitors.
:::

Animations hold references to elements. When a component or a page section goes away, kill them: `tl.kill()`, `ScrollTrigger.getAll().forEach(t => t.kill())`, or wrap the setup in `gsap.context(() => { ... }, scope)` and call `ctx.revert()` to undo everything at once. In React, the context goes in an effect and `revert` in its cleanup (Chapter 12).

## 14.8 When GSAP Earns Its Place

GSAP is about 70 kilobytes with ScrollTrigger, and it does the awkward parts well: resizing, refreshing, reversing, overlapping sequences, scrubbing with inertia. For four fading sections, Chapter 6's twenty lines of CSS and an `IntersectionObserver` are lighter (Project 3 builds both and compares). For a choreographed scroll story with pins, labels and a dozen overlapping tweens, GSAP saves days. The decision is engineering: weigh the download and the dependency against the code you would otherwise write and maintain. Part V shows the one place on this website where GSAP would fit and why the hand-written version was kept.

## Practice Problems A: Tweens and Timelines

:::problems
1. Five boxes use `gsap.to('.box', { x: 100, duration: 1, stagger: 0.2 })`. When does the last box start and finish, and what is the total time?
2. In a timeline, `tl.to(a, {duration: 2}).to(b, {duration: 1}, '-=0.5').to(c, {duration: 1}, 0)`. Give the start and end time of each tween and the total length.
3. Explain why animating `x: 200` is smoother than animating `left: 200px`.
4. Write a timeline in which a heading fades in over 0.6 s, then three list items fade in with a 0.15 s stagger, with the list starting 0.2 s before the heading finishes.
5. A tween with `ease: 'power2.out'` runs from 0 to 100 over one second. At 0.25 s it is at about 58. Where is it with `ease: 'none'`, and roughly where would you expect it with `power2.in`?
6. What is the difference between `'<'`, `'>'` and `'+=0'` as position parameters?
7. A timeline is built once and a menu button should open it and close it. Which two calls, and why is that better than two timelines?
:::

:::answers
**Chapter 14, Practice Problems A.**

1. The starts are 0, 0.2, 0.4, 0.6, 0.8 seconds. The last box starts at 0.8 and finishes at 1.8. The total is 1.8 s (GSAP: `total 1.80 s`).
2. Tween a: 0 to 2. Tween b: `'-=0.5'` starts 0.5 before the timeline end (2), so 1.5 to 2.5. Tween c: absolute position 0, so 0 to 1. Total: 2.5 s (GSAP: `a: 0.00..2.00  c: 0.00..1.00  b: 1.50..2.50  total 2.50 s`).
3. `x` is applied as a CSS transform, which can be done in the compositor without layout; `left` changes geometry and forces layout and paint on every frame.
4. `tl.from('h1', {opacity: 0, duration: 0.6}).from('li', {opacity: 0, stagger: 0.15, duration: 0.4}, '-=0.2');`
5. With `none` it is at 25 (a quarter of the way, linear). With `power2.in` it is below 25, about 6, because an ease-in starts slowly (t² at 0.25 is 0.0625).
6. `'<'` is the start of the previous tween; `'>'` is the end of the previous tween; `'+=0'` is the end of the whole timeline so far, which can be later than the previous tween's end if an earlier tween was longer.
7. `tl.play()` to open and `tl.reverse()` to close. One timeline guarantees the close mirrors the open and halves the code; if the design changes, there is one place to edit.
:::

## Practice Problems B: Scroll, Manners and Judgement

:::problems
1. A viewport is 900 px tall. Where, in pixels from the top of the viewport, does `start: 'top 80%'` fire? What about `start: 'top center'` and `start: 'bottom bottom'`?
2. What does `scrub: 0.5` do that `scrub: true` does not?
3. A pinned scroll section works on desktop and traps visitors on phones. What is the fix, in one call?
4. A visitor has `prefers-reduced-motion: reduce` set. Show how to wrap an animation so that it does not run for them, and what they should see instead.
5. Images load after ScrollTrigger measured the page and the triggers now fire in the wrong places. What one call fixes it?
6. Name the three things that must be cleaned up when a React component that created a timeline with ScrollTrigger unmounts, and the one GSAP call that does all three.
7. For each, GSAP or by hand: (a) four sections fading in on scroll; (b) a pinned product story with twelve overlapping tweens scrubbed by scroll; (c) a hover lift on a card; (d) an 88-frame image sequence scrubbed by scroll.
:::

:::answers
**Chapter 14, Practice Problems B.**

1. 80% of 900 is 720 px from the top of the viewport. `'top center'` is 450 px. `'bottom bottom'` fires when the trigger's bottom reaches the viewport's bottom, 900 px.
2. It smooths the link between scroll and progress with about half a second of catch-up, so the animation glides instead of snapping to each wheel notch.
3. Create the pinned timeline inside `gsap.matchMedia().add('(min-width: 800px)', ...)` so phones get no pin (and give them a simpler animation in another `add`).
4. `const mm = gsap.matchMedia(); mm.add('(prefers-reduced-motion: no-preference)', () => { gsap.from('.panel', {opacity: 0, y: 40}); });` They should see the final state: the panel visible, in place, with no motion (set it with `gsap.set` or leave the CSS default visible).
5. `ScrollTrigger.refresh()`.
6. The tweens, the timeline and the ScrollTrigger instances. `ctx.revert()` on a `gsap.context()` created in the effect kills all of them.
7. (a) by hand (Project 3's observer and a CSS transition). (b) GSAP. (c) by hand (a CSS `:hover` transition, no script at all). (d) either; GSAP's ScrollTrigger with `scrub` replaces the hand-written scroll maths and throttle, but twenty lines of plain JavaScript also do it, as Part V shows on this website's portfolio page.
:::

## Mini Project: A Scroll Story, Twice

:::project The same page by hand and with GSAP
Build a page of five full-height sections that tell the story of one breakfast run: approach, grip, lift, carry, place. Each section has a heading, a paragraph and a simple SVG of the robot's arm in the right pose.

1. **By hand first.** Hidden and shown states in CSS, an `IntersectionObserver` that adds the class once, and a `prefers-reduced-motion` block that shows everything. Measure: how many lines, how many kilobytes.
2. **Then with GSAP.** Delete the observer. A `gsap.matchMedia()` with a no-preference query; inside it, a `gsap.from` per section with `scrollTrigger: { start: 'top 80%', once: true }`, and a timeline per section that staggers the heading, the paragraph and the SVG with the SVG's arm rotating into pose (`rotation` on a `<g>` with `transformOrigin` at the pivot).
3. **A pinned finale.** The last section pins for 1 500 px of scrolling while a timeline, scrubbed with `scrub: 0.5`, moves the arm through the whole motion and counts a readout from 0 to 100 percent (animate a number on a plain object and write it into the page in `onUpdate`).
4. **Manners.** The pin and scrub exist only for `(min-width: 800px) and (prefers-reduced-motion: no-preference)`; phones get the once-only reveals; reduced motion gets the final states.
5. **Cleanup.** Wrap everything in `gsap.context` and prove you can `revert()` from the console and be left with a plain page.

Checks: `markers: true` shows every start line where you intended; the Performance panel shows no long tasks while scrolling; the hand-made version is lighter and the GSAP version is shorter, and you can say which you would ship, and why.
:::

:::summary
- Load the core and register each plugin. Tweens are `to`, `from`, `fromTo`, `set` on selectors, elements or plain objects; animate transforms and opacity.
- Eases shape speed: `.out` to arrive, `.in` to leave, `.inOut` to travel; `none` for scrubbing.
- Stagger with a number or an object with `each`, `from` and `grid`.
- Timelines sequence tweens; the position parameter (`'<'`, `'>'`, `'+=0.5'`, labels, absolute times) places them, and `+=` is relative to the *latest end so far*.
- Control with play, pause, reverse, seek, progress, timeScale; one timeline reversed is the cleanest open-and-close.
- ScrollTrigger: `start`/`end` in "trigger viewport" pairs, `toggleActions`, `once`, `scrub` (with smoothing), `pin`, `markers`, `refresh()`.
- `gsap.matchMedia()` for reduced motion and breakpoints; `gsap.context()` and `revert()` to clean up.
- Weigh the library against the code you would write. For a few fades, do it by hand; for choreography, GSAP.
:::
