# GSAP: Animation Without the Headaches

Chapter 6 taught you how animation works from first principles: a loop, delta time, easing. You can build everything that way, and understanding it is valuable. But there is a point where writing your own timeline, your own easing library, and your own scroll detection stops being educational and becomes plain slow. **GSAP** (the GreenSock Animation Platform) is a library that has already solved all of that, and solved it well. This chapter shows you how to use it. A note on honesty: this website does not use GSAP. It does its animation by hand, for reasons Part V discusses. You are learning GSAP because it is one of the most widely used tools in the field, and because you will be asked about it.

:::note
GSAP's licence has changed more than once over the years. Before using it in a commercial project, read its current licence terms on the GSAP website.
:::

## Words You Will Meet

| Word | What it means |
|---|---|
| **Tween** | A single animation of one or more properties from one value to another. |
| **Timeline** | A container that sequences tweens and lets you control them as a group. |
| **Ease** | The curve that shapes the speed of a tween (Chapter 6). |
| **Stagger** | Starting a group of tweens one after another with a small delay. |
| **Position parameter** | The extra argument that says *where on the timeline* a tween goes. |
| **ScrollTrigger** | A plugin that starts or scrubs animations based on scroll position. |
| **Scrub** | Linking an animation's progress directly to the scroll position. |
| **Plugin** | An add-on that must be registered before it is used. |

## Loading It

For learning, load GSAP from a CDN with a pinned version (Chapter 8's advice).

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

## Tweens

The three tween methods are `gsap.to()` (animate from the current value *to* new ones), `gsap.from()` (animate *from* given values to the current ones) and `gsap.fromTo()` (state both).

```
gsap.to('.box', { x: 200, rotation: 90, duration: 1, ease: 'power2.out' });
gsap.from('.title', { opacity: 0, y: 30, duration: 0.6 });
```

:::why Animating x and y rather than left and top
**What it is.** GSAP's `x`, `y`, `scale` and `rotation` are applied as CSS **transforms**.

**Why it is done this way.** As Chapter 2 explained, transforms and opacity can be handled by the compositor without layout.

**Why it matters.** The animation stays smooth even when the page is busy.

**What happens if you do not.** Animating `left` forces layout on every frame, and the animation judders on weaker devices.
:::

An **ease** shapes the motion. `power2.out` starts fast and slows down. `power2.in` starts slow and speeds up. `power2.inOut` does both. `back.out(1.7)` overshoots slightly and settles. `none` is linear. As in Chapter 6: ease things out as they arrive and in as they leave.

## Staggers

```
gsap.from('.card', { opacity: 0, y: 20, duration: 0.5, stagger: 0.1 });
```

:::why Stagger instead of writing a delay for each item
**What it is.** One setting that starts each target 0.1 seconds after the last.

**Why it is done this way.** The pattern "one after another" is so common it deserves its own word.

**Why it matters.** A row of cards ripples in rather than appearing as a block, and adding a fifth card needs no extra code.

**What happens if you do not.** You write a separate delay for each card, and every time the number of cards changes you must redo the arithmetic.
:::

## Timelines

A **timeline** is a sequence you can play, pause, reverse and scrub as one thing.

```
const tl = gsap.timeline({ defaults: { duration: 0.5, ease: 'power2.out' } });
tl.from('.logo', { opacity: 0, y: -20 })
  .from('.nav a', { opacity: 0, stagger: 0.1 })
  .from('.hero', { opacity: 0, y: 30 }, '-=0.2');
```

By default each tween starts when the previous one ends. The **position parameter** (the extra argument at the end) changes that: `'-=0.2'` means "0.2 seconds before the previous ended", `'+=0.5'` means "0.5 seconds after the timeline's current end", `'<'` means "at the start of the previous tween", and a number is an absolute time.

:::why Using a timeline rather than a chain of delays
**What it is.** Tweens added to one timeline, positioned relative to each other.

**Why it is done this way.** If you give each tween a fixed `delay`, they all depend on each other's durations, and you must recalculate when one changes.

**Why it matters.** Change the first tween's duration and everything after it shifts automatically. You can also pause, reverse or jump to any point, just as the tour of the robot page uses a single clock that can be paused and restarted.

**What happens if you do not.** A hand-timed sequence is brittle: one changed number means redoing the whole schedule.
:::

## ScrollTrigger

ScrollTrigger runs an animation when an element reaches a point in the viewport, or ties it to scrolling.

```
gsap.from('.panel', {
    opacity: 0, y: 40, duration: 0.8,
    scrollTrigger: { trigger: '.panel', start: 'top 80%' }
});
```

`start: 'top 80%'` reads as "when the **top of the trigger** reaches **80% of the way down the viewport**". With `scrub: true` the animation's progress follows the scrollbar instead of playing by itself.

:::why Starting at 80% rather than at the very bottom
**What it is.** The animation starts when the element is a little way up the screen, not the moment its top peeks in.

**Why it is done this way.** An animation that plays while the element is barely visible is wasted, because nobody sees it.

**Why it matters.** The reader sees the element animate in once it is properly in view.

**What happens if you do not.** Things finish animating before you scroll to them, and the effect is lost.
:::

## Respecting Reduced Motion

GSAP does not read the visitor's motion preference for you. Do it yourself, with `gsap.matchMedia()`.

```
const mm = gsap.matchMedia();
mm.add('(prefers-reduced-motion: no-preference)', () => {
    gsap.from('.panel', { opacity: 0, y: 40, scrollTrigger: '.panel' });
});
```

:::why matchMedia for the animation
**What it is.** The animation is created only when the media query matches, and cleaned up when it stops matching.

**Why it is done this way.** The visitor's preference can change while the page is open.

**Why it matters.** Someone who asks for less motion gets none, and a page that was animated reverts cleanly.

**What happens if you do not.** You animate for everyone, including people it makes ill (Chapter 6).
:::

## Worked Example: Timeline Arithmetic

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

**Step 4. Total.** The timeline lasts 3.5 seconds.

**The trap.** Many people expect c to start at 1.5 (after a, which was "the previous tween"). The `+=` is relative to the timeline's end, and the timeline's end is set by the longest tween so far.
:::

## Practice Problems

:::problems
1. Five boxes use `gsap.to('.box', { x: 100, duration: 1, stagger: 0.2 })`. When does the last box start and finish, and what is the total time?
2. In a timeline, `tl.to(a, {duration: 2}).to(b, {duration: 1}, '-=0.5').to(c, {duration: 1}, 0)`. Give the start and end time of each tween and the total length.
3. A viewport is 900 px tall. Where, in pixels from the top of the viewport, does `start: 'top 80%'` fire? What about `start: 'top center'`?
4. Explain why animating `x: 200` is smoother than animating `left: 200px`.
5. Write a timeline in which a heading fades in over 0.6 s, then three list items fade in with a 0.15 s stagger, with the list starting 0.2 s before the heading finishes.
6. A visitor has `prefers-reduced-motion: reduce` set. Show how to wrap an animation so that it does not run for them.
:::

:::answers
**Chapter 14 practice problems.**

1. The starts are 0, 0.2, 0.4, 0.6, 0.8 seconds. The last box starts at 0.8 and finishes at 1.8. The total is 1.8 s.
2. Tween a: 0 to 2. Tween b: `'-=0.5'` starts 0.5 before the timeline end (2), so 1.5 to 2.5. Tween c: absolute position 0, so 0 to 1. Total: 2.5 s (the latest end, from b).
3. 80% of 900 is 720 px from the top of the viewport. `'top center'` is 450 px.
4. `x` is applied as a CSS transform, which can be done in the compositor without layout; `left` changes geometry and forces layout and paint on every frame.
5. `tl.from('h1', {opacity: 0, duration: 0.6}).from('li', {opacity: 0, stagger: 0.15, duration: 0.4}, '-=0.2');`
6. `const mm = gsap.matchMedia(); mm.add('(prefers-reduced-motion: no-preference)', () => { gsap.from('.panel', {opacity: 0, y: 40}); });` The animation only runs when the visitor has *not* asked for reduced motion.
:::
