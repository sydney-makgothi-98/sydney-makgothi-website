# Canvas and SVG: Drawing in the Browser

Chapter 7 described these two tools in outline. This chapter is the practical companion: the words, the commands you will really use, and the habits that make drawings sharp, fast and correct. Almost every instrument on this website is a canvas, and the block diagram is an SVG, so these are the tools that did most of the work. By the end you will be able to draw a chart with proper axes, a gauge with a needle, an animated diagram, and anything else that is a picture made from numbers.

:::objectives
- Draw paths, arcs, curves and text on a canvas, and style them.
- Map data to pixels with one pair of functions, and lay out an axis with round ticks.
- Use transforms with `save` and `restore`, and clip to a plot area.
- Cache static drawing on an offscreen canvas and animate only what moves.
- Hit-test points and shapes under the pointer, and build hover and drag.
- Write SVG by hand and from script: shapes, paths, `viewBox`, groups, text, CSS styling and animation.
- Choose between canvas and SVG for a given picture, and mix them.
:::

## Words You Will Meet

| Word | What it means |
|---|---|
| **Context** | The object you draw with (`canvas.getContext('2d')`). |
| **Path** | A shape described by a series of moves and lines or curves. |
| **Stroke / fill** | Drawing the outline of a path / painting its inside. |
| **Transform** | A change of how coordinates are read: translate, rotate, scale. |
| **Gradient** | A smooth blend between colours. |
| **Clip** | A region outside of which nothing is drawn. |
| **Offscreen canvas** | A canvas that is not in the page, used as a cache. |
| **viewBox** | SVG's private coordinate system. |
| **Hit testing** | Working out what shape is under the pointer. |
| **Device pixel ratio** | The ratio of physical pixels to CSS pixels (Chapter 4). |
| **Namespace** | The XML name that tells the browser an element is SVG, needed when creating SVG from script. |

## 13.1 The Drawing Recipe

Almost every canvas drawing follows the same recipe: get the context, set the state, begin a path, add to it, then stroke or fill.

```
const { ctx, w, h } = fit(canvas);          // Chapter 4: sharp on every screen
ctx.strokeStyle = '#60a5fa';
ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(40, h - 40);
for (let x = 0; x <= 100; x++) {
    ctx.lineTo(40 + x * 3, h - 40 - Math.sin(x / 8) * 30);
}
ctx.stroke();
```

:::why beginPath before each new shape
**What it is.** `ctx.beginPath()` starts a fresh path.

**Why it is done this way.** The context keeps *one* current path, and adds to it every time you call `lineTo`. `stroke()` draws the whole thing.

**Why it matters.** Starting fresh means each shape is drawn once, with its own colour.

**What happens if you do not.** The second line you draw also re-draws the first one, in the new colour, and long animations slow down as the path grows every frame. Forgetting `beginPath` is one of the most common canvas bugs.
:::

The state you will set most: `fillStyle` and `strokeStyle` (any CSS colour, or a gradient), `lineWidth`, `lineCap` (`butt`, `round`, `square`), `lineJoin`, `setLineDash([6, 4])` with `lineDashOffset`, `globalAlpha`, `font` (a CSS font string such as `'12px JetBrains Mono'`), `textAlign` and `textBaseline`. Every one of these stays in force until you change it or `restore()` an earlier state.

## 13.2 Paths: Lines, Arcs and Curves

A path is built from these commands, all of which add to the current path:

| Command | Draws |
|---|---|
| `moveTo(x, y)` | nothing; lifts the pen and puts it here |
| `lineTo(x, y)` | a straight segment from the pen to here |
| `arc(cx, cy, r, a0, a1, anticlockwise)` | part of a circle, angles in radians, 0 at three o'clock, increasing **clockwise** (because y points down) |
| `arcTo(x1, y1, x2, y2, r)` | a rounded corner between two lines (how rounded rectangles are made) |
| `quadraticCurveTo(cx, cy, x, y)` | a curve pulled towards one control point |
| `bezierCurveTo(c1x, c1y, c2x, c2y, x, y)` | a curve with two control points (the same curve as Chapter 6's easing) |
| `rect(x, y, w, h)`, `roundRect(x, y, w, h, r)` | a rectangle, as a path |
| `closePath()` | a line back to the start |

Then `stroke()`, `fill()`, or both. The shortcuts `fillRect`, `strokeRect` and `clearRect` draw rectangles immediately without touching the current path.

:::worked A gauge with a needle
Draw a quarter-circle gauge: an arc from the lower left over the top to the lower right, sweeping 270 degrees, and a needle pointing at a value v between 0 and 1. Centre (150, 150), radius 100.

**Step 1. The arc's angles.** In canvas angles, straight up is −90° (or 270°). The gauge starts 135° anticlockwise from straight up, at 135°, and ends 135° clockwise from it, at 405° (which is 45°). Sweeping clockwise from 135° to 405° covers 270°.

```
ctx.beginPath();
ctx.arc(150, 150, 100, 135 * Math.PI / 180, 405 * Math.PI / 180);
ctx.lineWidth = 10; ctx.lineCap = 'round'; ctx.strokeStyle = '#2b2b2b'; ctx.stroke();
```

**Step 2. The needle.** Draw it pointing straight up from the centre, then rotate. At v = 0 it should point along the start of the arc, which is 135° anticlockwise of up, so the rotation is −135° + 270° × v.

```
ctx.save();
ctx.translate(150, 150);
ctx.rotate((-135 + 270 * v) * Math.PI / 180);
ctx.beginPath(); ctx.moveTo(0, 12); ctx.lineTo(0, -90);
ctx.lineWidth = 3; ctx.strokeStyle = '#a78bfa'; ctx.stroke();
ctx.restore();
```

**Step 3. Check a value.** For v = 0.3 the rotation is −135 + 81 = −54°, so the needle leans up and to the left, a little past a third of the way round. For v = 0.5 it is 0°, straight up. For v = 1 it is +135°, the lower right. ✓

**Step 4. The arc of the value.** Draw a second arc over the first, from 135° to 135° + 270° × v, in the accent colour, to fill in the gauge up to the needle. Both arcs and the needle are driven by the one number v, which is Chapter 5's rule in a drawing.
:::

## 13.3 Mapping Data to Pixels, and Ticks

A chart needs a function that maps your data range to pixels (see Chapter 7). Write it once and use it for everything: axes, ticks, curves and labels.

```
function makeMap(x0, x1, y0, y1, rect) {
    return {
        X: v => rect.x + (v - x0) / (x1 - x0) * rect.w,
        Y: v => rect.y + rect.h - (v - y0) / (y1 - y0) * rect.h,
    };
}
```

:::why One mapping used everywhere
**What it is.** `X` and `Y` are the only places that convert data to pixels.

**Why it is done this way.** If curves, gridlines and markers each do their own arithmetic, they will disagree by a few pixels.

**Why it matters.** Changing an axis range changes one place, and every mark moves together.

**What happens if you do not.** A marker sits slightly off its curve, and you cannot tell which piece of code is wrong.
:::

#### Round ticks

An axis from 0 to 97 should not be labelled 0, 19.4, 38.8. The standard trick: divide the range by the number of ticks you want, round that step to 1, 2 or 5 times a power of ten, then start from a multiple of it.

```
function niceTicks(lo, hi, n) {
    const raw = (hi - lo) / n, p = 10 ** Math.floor(Math.log10(raw)), f = raw / p;
    return (f < 1.5 ? 1 : f < 3 ? 2 : f < 7 ? 5 : 10) * p;
}
// niceTicks(0, 1, 5) -> 0.2;   niceTicks(0, 97, 5) -> 20;   niceTicks(0, 0.0123, 4) -> 0.005
```

With a step of 20 on 0 to 97, the ticks are 0, 20, 40, 60, 80, 100, and the axis top becomes `Math.ceil(97 / 20) * 20 = 100`. These three results are checked by the test harness in Chapter 11 (`s17_tests.js`), and the same function, under the same name, draws every axis on this website.

:::worked Laying out a line chart
Draw the speed of a robot over 10 seconds, values between 0 and 0.37 m/s, on a canvas 400 by 240 CSS pixels, with a margin of 40 on the left and 24 elsewhere.

**Step 1. The plot area.** x from 40 to 376 (width 336), y from 24 to 216 (height 192).

**Step 2. The y axis.** `niceTicks(0, 0.37, 4)`: raw 0.0925, p = 0.01, f = 9.25, so the step is 0.1. Ticks 0, 0.1, 0.2, 0.3, 0.4; top = 0.4.

**Step 3. The x axis.** `niceTicks(0, 10, 5)` gives 2: ticks 0, 2, 4, 6, 8, 10.

**Step 4. The mapping.** `makeMap(0, 10, 0, 0.4, { x: 40, y: 24, w: 336, h: 192 })`. The point (6 s, 0.3 m/s) lands at X = 40 + 0.6 × 336 = 241.6 and Y = 24 + 192 − 0.75 × 192 = 72.

**Step 5. Draw in order.** Gridlines and tick labels first (faint), then the curve clipped to the plot, then any marker, then axis titles. Each layer uses `X` and `Y`, so they cannot disagree.
:::

## 13.4 Transforms

The **transform** is part of the state: `translate`, `rotate` and `scale` change how later coordinates are read. The pattern for anything drawn at an angle: move the origin there, turn, draw the thing upright around (0, 0), put everything back.

@figure canvas-transform To draw a symbol at a position and angle, translate to the position, rotate, and draw the symbol around the origin. The order matters: rotate then translate would swing the symbol around the canvas origin instead.

```
ctx.save();
ctx.translate(x, y);          // move the origin to the aircraft
ctx.rotate(-pitch);           // turn the axes (negative: y points down on screen)
drawAircraft(ctx);            // drawn upright around the origin
ctx.restore();                // everything back as it was
```

:::why save and restore around a transform
**What it is.** Calling `ctx.save()` before changing the transform and `ctx.restore()` after.

**Why it is done this way.** The transform is *sticky*. It stays in force until you undo it.

**Why it matters.** Everything you draw afterwards is unaffected.

**What happens if you do not.** The axes of your chart end up rotated and shifted because you drew an aircraft symbol earlier, and it is very hard to tell why.
:::

`scale(1, -1)` flips the y axis, which tempts people who want maths-style coordinates. Resist it: text drawn under a flipped transform comes out upside down. Use the `Y` mapping function instead.

## 13.5 Clipping, Gradients, Text and Images

`ctx.clip()` restricts drawing to the current path, which is how a chart stops a curve from spilling out of its plot area.

```
ctx.save();
ctx.beginPath(); ctx.rect(plot.x, plot.y, plot.w, plot.h); ctx.clip();   // keep curves inside the box
drawCurves();
ctx.restore();                                                            // clipping removed
```

:::why Clipping inside save and restore
**What it is.** A clip stays in force until you `restore()`.

**Why it is done this way.** There is no "unclip" command. The only way back is `save()` and `restore()`.

**Why it matters.** Labels drawn after the curves are not clipped away.

**What happens if you do not.** Everything you draw after the clip is cut off outside the plot box, including your axis labels.
:::

**Gradients** are fill or stroke styles: `const g = ctx.createLinearGradient(x0, y0, x1, y1); g.addColorStop(0, '#a78bfa'); g.addColorStop(1, 'transparent'); ctx.fillStyle = g;`. A radial gradient is `createRadialGradient(cx, cy, r0, cx, cy, r1)`. The area under a curve on this website's charts is a linear gradient from the accent colour to transparent, clipped to the plot.

**Text** is `ctx.fillText(text, x, y)` with `font`, `textAlign` (`left`, `center`, `right`) and `textBaseline` (`top`, `middle`, `alphabetic`, `bottom`). `ctx.measureText(text).width` tells you how wide it will be, which is how a label is kept inside the canvas or a tooltip box is sized to its text.

**Images** are `ctx.drawImage(image, x, y, w, h)`, where the image is an `<img>` that has finished loading, another canvas, or a video frame. The second form, with source and destination rectangles, crops. Drawing another canvas is the basis of the next section.

## 13.6 Offscreen Canvases and Layers

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

Two canvases stacked in the page with CSS (`position: absolute` in a `relative` parent) do the same job without `drawImage`: the bottom one holds the static picture, the top one is cleared and redrawn each frame. The `OffscreenCanvas` class goes further and lets a Web Worker draw without touching the main thread.

#### Crisp lines

A 1-pixel line centred on a whole-number coordinate is drawn across *two* device pixels at half brightness, and looks blurry. Offset by 0.5 (`moveTo(10.5, 20.5)`) to land it on one pixel. On a DPR 2 screen the issue halves; the `fit` function's transform keeps the arithmetic in CSS pixels either way.

## 13.7 Animation on a Canvas

Chapter 6 gave the loop; the canvas version adds two habits. Clear and redraw everything from state each frame (Chapter 5), and draw only while the canvas is on screen.

```
let visible = false, last = null;
new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) requestAnimationFrame(frame); }).observe(canvas);
function frame(now) {
    const dt = Math.min((now - (last ?? now)) / 1000, 0.1); last = now;
    update(dt);
    const { ctx, w, h } = fit(canvas);           // fit clears the canvas
    ctx.drawImage(bg, 0, 0, w, h);
    draw(ctx, w, h);
    if (visible) requestAnimationFrame(frame);
}
```

A moving dot along a curve is `X(t)`, `Y(f(t))` with `t` advanced by `dt`. A trace that fades is the last N points drawn with `globalAlpha` falling from 1 to 0. A scrolling oscilloscope keeps a ring buffer of samples and maps the newest to the right edge.

## 13.8 Interaction: Hit Testing, Hover and Drag

A canvas does not know about its shapes, so you must do hit testing yourself: compare the pointer position with your own data. Convert the event's coordinates to canvas coordinates first.

```
canvas.addEventListener('pointerdown', e => {
    const r = canvas.getBoundingClientRect();
    const x = e.clientX - r.left, y = e.clientY - r.top;     // CSS pixels inside the canvas
    const hit = points.find(p => Math.hypot(p.x - x, p.y - y) < 8);
});
```

:::why getBoundingClientRect when reading the pointer
**What it is.** Subtracting the canvas's on-screen position from the pointer's position.

**Why it is done this way.** `clientX` is measured from the top-left of the *window*, not from the canvas.

**Why it matters.** Your coordinates then match the ones you drew with.

**What happens if you do not.** Clicks land far from where you pointed, and the error changes as the page scrolls.
:::

For a **hover readout** on a chart, invert the x mapping: `const t = x0 + (x - rect.x) / rect.w * (x1 - x0)`, find the nearest sample, and draw a vertical line and a label at it on the next frame. Store the hovered index in state and let `draw` show it; do not draw inside the event handler. For **dragging** a point, `setPointerCapture` on `pointerdown` (Chapter 5), update the point's data on `pointermove`, release on `pointerup`. For rectangles, hit testing is four comparisons; for circles, `Math.hypot`; for anything else, `ctx.isPointInPath(path, x, y)` with a `Path2D` object does the geometry for you.

## 13.9 SVG: The Practical Bits

An SVG is a set of elements in the page, and everything you know about HTML applies: they are in the DOM, they take classes and ids, CSS styles them, scripts change them, and a click lands on the element under the pointer with no hit testing at all.

```
<svg viewBox="0 0 100 40" width="300" role="img" aria-label="An arrow">
  <path d="M5 20 H80" stroke="currentColor" stroke-width="2" fill="none"/>
  <path d="M80 12 L95 20 L80 28 Z" fill="currentColor"/>
</svg>
```

@figure svg-viewbox The `viewBox` is the drawing's own coordinate system. However the SVG is sized on the page, the browser scales those units to fit, which is what makes an SVG sharp at any size.

#### The elements

`<rect x y width height rx>`, `<circle cx cy r>`, `<ellipse>`, `<line x1 y1 x2 y2>`, `<polyline points="...">`, `<polygon>`, `<path d="...">`, `<text x y>`, and `<g>` to group (with `transform="translate(10 20) rotate(30)"` applying to everything inside). `<defs>` holds things used elsewhere: gradients, markers (arrowheads), clip paths, and symbols reused with `<use href="#id">`.

#### Path data

In `d`, uppercase commands are absolute and lowercase are relative to the current point: `M` move, `L` line, `H` and `V` horizontal and vertical lines, `C` a cubic Bézier with two control points, `S` a smooth continuation, `Q` a quadratic with one control point, `A` an elliptical arc (`A rx ry rotation large-arc sweep x y`), `Z` close. A rounded-corner path for a block diagram's wire is `M 10 20 H 60 Q 70 20 70 30 V 50`: along, a quarter-turn, down.

#### Styling and animating with CSS

`fill`, `stroke`, `stroke-width`, `stroke-dasharray`, `stroke-dashoffset`, `opacity` and `transform` are all CSS properties, so a stylesheet rule or a class toggled by a script changes them, and a transition animates them. The control-system diagram on the flight dynamics page is an SVG animated purely with CSS: the dashed signal lines have their `stroke-dashoffset` changed by a keyframe animation, so the dashes seem to flow along the wires.

```
.wire { stroke-dasharray: 6 6; animation: flow 1.2s linear infinite; }
@keyframes flow { to { stroke-dashoffset: -12; } }
```

:::why Animating the diagram with CSS only
**What it is.** A `@keyframes` rule that shifts the dash pattern, with no JavaScript.

**Why it is done this way.** It is a decoration that never changes in response to data.

**Why it matters.** It costs nothing on the main thread and keeps working even if a script fails.

**What happens if you do not.** A script that animates a decoration is one more thing to break and one more thing to slow the page.
:::

:::why Using currentColor in SVG
**What it is.** `stroke="currentColor"` uses the CSS `color` of the surrounding text.

**Why it is done this way.** The icon takes whatever colour its context says.

**Why it matters.** The same SVG can be violet in one place and white in another, and it changes with hover, without editing the SVG.

**What happens if you do not.** You hard-code a colour in the graphic, and need a separate copy for every colour you want.
:::

#### Making SVG from script

SVG elements live in their own XML namespace, so `document.createElement('circle')` makes a useless HTML element called circle. Use the namespaced version, and set attributes with `setAttribute`:

```
const NS = 'http://www.w3.org/2000/svg';
const dot = document.createElementNS(NS, 'circle');
dot.setAttribute('cx', 80); dot.setAttribute('cy', 45); dot.setAttribute('r', 4);
svg.append(dot);
```

That is how a diagram can be generated from data (one `<rect>` per block, one `<path>` per wire) and still be styled and clicked like hand-written markup. The isometric turbofan on the propulsion page is thousands of SVG elements written by a script, exactly this way (Part V).

## 13.10 Choosing, and Mixing

| If the picture... | Use | Because |
|---|---|---|
| redraws many times a second with hundreds of marks | canvas | immediate mode, no per-shape cost |
| has a few dozen shapes you want to style, hover and click | SVG | the shapes are elements |
| must be read by a screen reader as parts | SVG with `<title>` and `aria` | canvas is one opaque image |
| is a diagram that scales with the page | SVG | vector, `viewBox` |
| is a heat map or particle field | canvas | pixels are the point |
| needs 3D | WebGL (Chapter 15) | the GPU |

They mix well. A canvas chart under an SVG overlay for the hover line and labels gets fast curves and crisp, styleable annotations. A canvas has `role="img"` and an `aria-label`; for a chart that matters, add a visually hidden table of the data beside it.

## Worked Example: A Bar Chart on a Canvas

:::worked Three bars
Draw bars for the values [30, 55, 20] on a canvas shown at 300 by 160 CSS pixels, with a 20-pixel margin and y axis from 0 to 60.

**Step 1. Plot area.** Margins of 20 leave a plot 260 wide and 120 tall, starting at (20, 20).

**Step 2. Mapping.** Value v maps to a bar top at y = 20 + 120 − (v / 60) × 120. For 30: 140 − 60 = 80. For 55: 140 − 110 = 30. For 20: 140 − 40 = 100. All bars end at the baseline y = 140.

**Step 3. Bar width and positions.** Three bars with equal slots of 260 / 3 = 86.7 px. Make each bar 60 wide, centred in its slot, so the left edges are at 20 + 13.3 = 33.3, 120, and 206.7.

**Step 4. Code.**

```
const vals = [30, 55, 20];
const slot = 260 / vals.length;
vals.forEach((v, i) => {
    const top = 20 + 120 - (v / 60) * 120;
    ctx.fillRect(20 + i * slot + (slot - 60) / 2, top, 60, 140 - top);
});
```

**Step 5. Check.** The first bar's height is 140 − 80 = 60 px, which is half of the 120 px plot, and 30 is half of 60. Yes.
:::

## Worked Example: A Block Diagram in SVG

:::worked Two blocks and a feedback wire
Draw a controller block, a plant block, a wire between them, and a feedback wire back, in SVG, with the dashes flowing.

**Step 1. The coordinate system.** `viewBox="0 0 300 120"`. Blocks are 80 by 40.

**Step 2. The markup.**

```
<svg viewBox="0 0 300 120" class="diagram" role="img" aria-label="A controller driving a plant with feedback">
  <defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
    <path d="M0 0 L10 5 L0 10 Z" fill="currentColor"/></marker></defs>
  <g class="block"><rect x="40" y="30" width="80" height="40" rx="6"/><text x="80" y="55" text-anchor="middle">PID</text></g>
  <g class="block"><rect x="180" y="30" width="80" height="40" rx="6"/><text x="220" y="55" text-anchor="middle">plant</text></g>
  <path class="wire" d="M120 50 H180" marker-end="url(#arrow)"/>
  <path class="wire" d="M260 50 H285 V100 H15 V50 H40" marker-end="url(#arrow)"/>
</svg>
```

**Step 3. The CSS.** `.block rect { fill: var(--bg-raised); stroke: var(--accent); } .block text { fill: var(--text); font: 12px Inter; } .wire { fill: none; stroke: currentColor; stroke-dasharray: 6 6; animation: flow 1.2s linear infinite; }`

**Step 4. Why SVG here.** Eight elements, each styleable, with a text label that a screen reader can read and that scales with the page. A canvas would need hand-drawn arrowheads, text positioning arithmetic and a script to animate the dashes; here the browser does all three.
:::

## Practice Problems A: Canvas

:::problems
1. A canvas is shown at 400 by 250 CSS pixels on a DPR 2 screen. What `width` and `height` should its surface have? Where would a line drawn from (10, 10) to (110, 10) land on the surface?
2. A chart's x axis runs from 0 to 10 over a plot starting at pixel x = 50 and 400 px wide. What pixel x is the data value 2.5? What data value is at pixel 450?
3. A chart's y axis runs from −1 to 1 over a plot starting at pixel y = 20 and 200 px tall. What pixel y is the value 0? The value 1? Why is the value 1 *smaller* in pixels than the value −1?
4. What step does `niceTicks(0, 0.37, 4)` return, and what are the ticks? And for `niceTicks(-12, 48, 6)`?
5. Write the `arc` call for a full circle of radius 10 at (50, 50), and for the top half only.
6. A drawing function forgets `beginPath()` and draws a red line, then a blue line, each frame. What does the screen show after two frames?
7. A pointer event at `clientX = 320`, `clientY = 180` happens over a canvas whose top-left corner is at (100, 60) on the window. Where is the pointer in canvas CSS coordinates?
8. A gauge needle is drawn with `translate(cx, cy); rotate(a)`. The author wrote `rotate(a); translate(cx, cy)` by mistake. Describe what the needle does as `a` changes.
9. Why should a hover tooltip be drawn in the next frame from a stored index, and not inside the `pointermove` handler?
:::

:::answers
**Chapter 13, Practice Problems A.**

1. 400 × 2 = 800 and 250 × 2 = 500. With a DPR 2 transform, the line goes from device (20, 20) to (220, 20).
2. x = 50 + (2.5 / 10) × 400 = 150. Pixel 450 is (450 − 50) / 400 × 10 = 10.
3. The plot spans pixels 20 to 220. The y pixel is 20 + 200 − ((v + 1) / 2) × 200. For 0: 220 − 100 = 120. For 1: 220 − 200 = 20. The value 1 is smaller in pixels because pixel y increases downward, so larger data values are drawn higher up.
4. Raw 0.0925, p = 0.01, f = 9.25, step 0.1; ticks 0, 0.1, 0.2, 0.3, 0.4. For −12 to 48 with 6: raw 10, p = 10, f = 1, step 10; ticks −20 (the first multiple of 10 at or below −12), −10, 0, ..., 50.
5. `ctx.arc(50, 50, 10, 0, Math.PI * 2)` for the full circle; `ctx.arc(50, 50, 10, Math.PI, 2 * Math.PI)` for the top half (from nine o'clock clockwise over the top to three o'clock).
6. Both strokes are in the same path, so the blue stroke re-draws the red line in blue as well; after two frames the earlier line is drawn in the later colour, and every frame adds more to the path.
7. (320 − 100, 180 − 60) = (220, 120).
8. The rotation turns the axes about the canvas origin first, so the subsequent translation moves the needle along the rotated axes: as `a` changes, the needle's *pivot* swings in a circle around the canvas's top-left corner instead of staying at (cx, cy).
9. The handler runs on every pointer movement, far more often than the screen can show, and drawing there competes with the frame loop. Storing the index and drawing in the loop keeps one drawing per frame and keeps the picture a function of state.
:::

## Practice Problems B: SVG and Choosing

:::problems
1. Write the path data for a triangle with corners at (0, 0), (10, 0), (5, 8) in an SVG.
2. An SVG has `viewBox="0 0 200 100"` and is shown at `width="600"`. How big is one unit, and what is the displayed height?
3. Write a `<g>` that moves everything inside it to (40, 20) and rotates it 30 degrees.
4. Why does `document.createElement('rect')` not draw anything, and what is the fix?
5. Give the CSS that makes every `.wire` path's dashes flow, and say why it belongs in CSS rather than a script.
6. For each, canvas or SVG, with a reason: (a) 50 000 particles in a flow field; (b) a map with 300 clickable regions; (c) an icon that must change colour on hover; (d) a scrolling oscilloscope trace; (e) a pie chart with six slices and tooltips.
7. A chart drawn on a canvas must be usable by a screen-reader user. Name two things to add.
:::

:::answers
**Chapter 13, Practice Problems B.**

1. `M0 0 L10 0 L5 8 Z`.
2. 600 / 200 = 3 pixels per unit, so the height is 100 × 3 = 300 pixels (the aspect ratio of the viewBox is preserved).
3. `<g transform="translate(40 20) rotate(30)">...</g>` (the rotation is applied about the group's new origin, after the translation).
4. The element is created in the HTML namespace, where "rect" means nothing. Use `document.createElementNS('http://www.w3.org/2000/svg', 'rect')`.
5. `.wire { stroke-dasharray: 6 6; animation: flow 1.2s linear infinite; } @keyframes flow { to { stroke-dashoffset: -12; } }`. It is a decoration that does not depend on data, so CSS runs it off the main thread and it survives a script failure.
6. (a) canvas: too many marks for elements. (b) SVG: regions are elements that can be clicked and styled. (c) SVG with `currentColor`. (d) canvas: redrawn every frame. (e) either; SVG is simpler because each slice is a `<path>` that can take a hover tooltip without hit testing.
7. `role="img"` with an `aria-label` describing the chart, and a visually hidden table (or text summary) of the data next to it.
:::

## Mini Project: A Live Oscilloscope

:::project Four hundred samples a second, drawn at sixty frames
Build a canvas instrument that shows a signal scrolling from right to left, like an oscilloscope, with a hover readout.

1. **The signal.** A function `sample(t)` returning, say, a damped oscillation (Chapter 11's mini project 3) plus a little noise. A ring buffer of the last 400 samples, filled at 400 samples per second from the animation loop using `dt` (several samples per frame, however long the frame took).
2. **The static layer.** An offscreen canvas with the grid, the y ticks from `niceTicks`, and the axis labels, rebuilt only when the canvas is resized.
3. **The moving layer.** Each frame: stamp the static layer, clip to the plot, draw the buffer as one path with the newest sample at the right edge, draw a fading trace with `globalAlpha` for the last 40 samples, restore.
4. **Hover.** On `pointermove`, store the x position; in the frame, convert it to a sample index, draw a vertical line and a label with the value using `measureText` to size a box that stays inside the canvas.
5. **Controls.** A Pause button that stops filling the buffer but keeps drawing (so hover still works), and a slider for the signal's frequency, read from state each frame.
6. **Manners.** Stop the loop when the canvas scrolls out of view; show one still frame and no motion under `prefers-reduced-motion`.

Checks: the trace scrolls at the same speed on a 60 Hz and a 144 Hz screen (count seconds across the width); the Performance panel shows one short task per frame; resizing the window keeps the lines sharp; the console has no errors.
:::

:::summary
- Canvas: set state, `beginPath`, add commands, `stroke` or `fill`. Angles are radians, clockwise from three o'clock.
- Map data to pixels with one `X` and one `Y`; round the ticks with the 1-2-5 rule; the axis top is a multiple of the step.
- Translate, rotate, draw upright, restore. Clip inside `save`/`restore`. Gradients and text are state like any other.
- Cache the static picture on an offscreen canvas; redraw only what moves; draw only while visible; offset hairlines by 0.5.
- Hit-test with your own data after converting pointer coordinates; store hover and drag in state and draw in the frame.
- SVG shapes are elements: styled by CSS, animated by CSS, clickable, readable, scaled by `viewBox`; create them with `createElementNS`.
- Canvas for many marks redrawn often; SVG for few shapes you want to style and click; both together when you want both.
:::
