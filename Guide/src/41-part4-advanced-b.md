# Advanced Canvas

## Layers and Offscreen Canvases

A chart often has a **static** part (axes, grid, labels) and a **moving** part (curves, markers). Redrawing the static part every frame wastes time. Draw it once to an offscreen canvas, then copy it in with `drawImage`.

```
const bg = document.createElement('canvas');     // an offscreen canvas, not in the page
bg.width = w * dpr; bg.height = h * dpr;
drawAxes(bg.getContext('2d'));                   // done once, or when the size changes

function frame() {
    ctx.drawImage(bg, 0, 0, w, h);               // stamp the axes in one fast call
    drawCurves(ctx);                             // only the moving part is redrawn
}
```

:::why Caching the static drawing
**What it is.** The grid and axes are drawn once to a hidden canvas and stamped onto the visible one each frame.

**Why it is done this way.** Copying a finished bitmap is much cheaper than recomputing hundreds of lines and labels.

**Why it matters.** The cylinder-flow panels on this website do exactly this: the colour field is built once per Mach number and only the moving particles are redrawn each frame.

**What happens if you do not.** You recompute things that have not changed, 60 times a second, and the frame budget disappears.
:::

## Only Draw What the Visitor Can See

An animation on a canvas that is scrolled off-screen is pure waste. An **IntersectionObserver** (Project 3) tells you whether a canvas is visible, so you can pause its loop.

:::why Pausing off-screen animations
**What it is.** A visible flag set by an observer. The loop skips drawing while it is false.

**Why it is done this way.** A page with ten animated panels only ever shows one or two at a time.

**Why it matters.** Battery life, and a smooth frame rate for the panels you *can* see.

**What happens if you do not.** Ten animations run at once, the laptop's fan spins up, and every panel stutters.
:::

## Avoiding Blurry Lines

A 1-pixel line centred on a whole-number coordinate is drawn across *two* device pixels at half brightness, and looks blurry. Offsetting by 0.5 puts it on one pixel.

:::quiz Advanced canvas
1. What belongs on an offscreen canvas?
2. Why should an off-screen animation be paused?
3. What causes a crisp-looking 1-pixel line to appear blurry?
:::

:::answers
**Advanced canvas quiz.**

1. Anything that does not change from frame to frame: grids, axes, backgrounds, fixed labels.
2. It uses CPU, GPU and battery for a picture nobody can see.
3. The line sits on the boundary between two device pixels, so it is spread across both at half intensity. Shift it by half a pixel to land on one.
:::

# Advanced GSAP

## Timelines as State Machines

A timeline can be **labelled**, **paused**, **reversed** and **seeked**. That makes it a good fit for a set of named states: closed, open, expanded.

```
const tl = gsap.timeline({ paused: true });
tl.addLabel('open')
  .to('.menu', { height: 'auto', duration: 0.4 })
  .addLabel('items')
  .from('.menu a', { opacity: 0, y: 10, stagger: 0.05 });

openBtn.onclick  = () => tl.play();
closeBtn.onclick = () => tl.reverse();
```

:::why Reversing a timeline instead of writing a closing animation
**What it is.** `tl.reverse()` plays the same animation backwards.

**Why it is done this way.** A close is usually the mirror image of an open.

**Why it matters.** Half the code, and the two can never get out of sync.

**What happens if you do not.** You write two animations and have to remember to update both when the design changes.
:::

## Scrubbed Scroll Animations

With `scrub`, an animation's progress follows the scrollbar. `pin: true` holds an element in place while the scrolling plays out. The advanced skill is knowing *when not to*: pinned, scrubbed sequences feel wonderful on a desktop and can be awkward on phones, so wrap them in `gsap.matchMedia()` and give small or reduced-motion screens a simpler version.

:::why Giving small screens a simpler version
**What it is.** A scrub-and-pin animation only for wide screens with no motion restriction.

**Why it is done this way.** Phones have little room, touch scrolling is inertial, and some visitors want less motion.

**Why it matters.** The experience works for everyone, and nobody gets stuck in a pinned section they cannot scroll past.

**What happens if you do not.** A beautiful desktop effect becomes a frustrating trap on a phone.
:::

## Cleaning Up

Animations hold references. When a page or component goes away, kill them: `tl.kill()` and `ScrollTrigger.getAll().forEach(t => t.kill())`, or use `gsap.context()` to group and revert everything at once.

:::quiz Advanced GSAP
1. What is the advantage of `tl.reverse()` over a separate closing animation?
2. Why wrap a pinned scroll animation in `matchMedia`?
3. Why must animations be killed when a component is removed?
:::

:::answers
**Advanced GSAP quiz.**

1. It is guaranteed to mirror the opening animation, and there is only one animation to maintain.
2. So that small screens and visitors who prefer reduced motion get a simpler version instead of a pinned effect that is awkward or unwelcome.
3. Otherwise they keep running and holding memory, and a scroll trigger can keep firing on elements that no longer exist.
:::

# Advanced three.js

## Physically Based Materials and Studios

Chapter 15 introduced the standard material. For realism you add **clearcoat** (a glossy lacquer layer), **bump maps** (fine surface texture without extra geometry), **sheen** (soft fabric-like edges) and a considered **environment** that supplies reflections. The Patrick robot uses clearcoat on its yellow plastic and acrylic plates, a grain bump map on its moulded parts, and a layered "printed" bump on its 3D-printed claw.

:::why A bump map instead of real geometry
**What it is.** A grayscale image that fakes tiny height differences in the lighting calculation.

**Why it is done this way.** Geometry costs triangles. A bump map costs one texture.

**Why it matters.** Fine layer lines on a printed part, or the grain of moulded plastic, add realism for almost no cost.

**What happens if you do not.** Plastic looks like smooth digital clay, the classic "computer-generated" giveaway.
:::

## Post-processing: Ambient Occlusion and Tone Mapping

Rendering into an intermediate image lets you add effects before the final picture. **Ambient occlusion** darkens creases and contact points. **Tone mapping** compresses brightness to the screen's range. Both run on every pixel, so they are costly.

:::why Quality tiers
**What it is.** The robot page has three tiers (full effects, lighter, and none), and moves down a tier if its frame rate stays low.

**Why it is done this way.** Visitors have wildly different hardware (Chapter 8).

**Why it matters.** A phone gets a smooth, simpler picture and a desktop gets the full one.

**What happens if you do not.** The page that looks gorgeous on your computer runs at five frames per second on a visitor's laptop.
:::

## Instancing and Merging

When you need many copies of something (screws, a field of particles), use an `InstancedMesh`: one geometry, many positions, **one draw call**. When you need many *different* small parts that share a material, merge their geometries into one mesh with `mergeGeometries` (Chapter 7).

## Disposal and Warm-up

Call `dispose()` on what you stop using (Chapter 15). Also consider **warming up**: compiling shader programs before the first frame (`renderer.compileAsync`), so the page does not freeze for a second while the graphics driver prepares them.

:::why Compiling shaders before the first frame
**What it is.** `renderer.compileAsync(scene, camera)` asks the driver to prepare every shader program now, in the background.

**Why it is done this way.** Otherwise the first time something new appears, the driver compiles its shader *during* a frame.

**Why it matters.** There is no stutter the first time you open a panel or turn on an effect.

**What happens if you do not.** The page freezes for a noticeable moment the first time a new material is drawn.
:::

:::quiz Advanced three.js
1. What does a bump map add, and at what cost?
2. Why have quality tiers?
3. What is the difference between instancing and merging?
:::

:::answers
**Advanced three.js quiz.**

1. Fine apparent surface detail (grain, layer lines) in the lighting, at the cost of one texture rather than extra triangles.
2. Different devices have very different speed, so the page steps down its effects to stay smooth on weaker ones.
3. Instancing draws many copies of the *same* mesh with different positions in one call. Merging joins many *different* meshes that share a material into one mesh, so they cost one call between them.
:::

# Advanced Accessibility and Performance

## Auditing Seriously

Automated tools find about a third of accessibility problems (Chapter 8). A professional audit adds: keyboard-only navigation of every flow; a screen reader (NVDA or VoiceOver) on the main journeys; zoom to 200% and 400%; windows high-contrast mode; and testing with real users when possible.

:::why Testing with a keyboard and a screen reader
**What it is.** Using your page without a mouse or without looking.

**Why it is done this way.** Automated checkers can say a label exists, but not whether it *makes sense*.

**Why it matters.** You find out that "Button 1 of 14" is not helpful, and that the tab order jumps around.

**What happens if you do not.** The page passes a checker and is still unusable for some people.
:::

## Performance Budgets

A **performance budget** is a number you promise not to exceed: for example 300 KB of JavaScript on first load, or LCP under 2.5 seconds. Write it down, measure against it on every change, and treat going over it as a bug.

:::why Writing a budget down
**What it is.** A target, tested continuously.

**Why it is done this way.** Pages get slower by tiny steps, none of which seems important.

**Why it matters.** A budget turns "it feels slower lately" into a number you can point to.

**What happens if you do not.** After a year of small additions, the page takes eight seconds to load and nobody can say when it went wrong.
:::

## Measure on Real, Modest Hardware

Your development computer is probably the fastest device that will ever open the page. Test with the developer tools throttling the CPU (4x or 6x slower) and the network ("Fast 3G"), and, if you can, on an actual older phone.

:::quiz Advanced accessibility and performance
1. Name two things a manual audit finds that an automated checker cannot.
2. What is a performance budget and why is it written down?
3. Why test with CPU throttling?
:::

:::answers
**Advanced accessibility and performance quiz.**

1. For example: whether labels make sense, a logical tab order, whether a flow can be completed with a screen reader, whether content survives 400% zoom.
2. A numeric limit (for example JavaScript size or LCP time). Written down and checked on every change, it makes gradual slowing visible.
3. Because the developer's machine is faster than most visitors', so problems only show up under a slowdown.
:::
