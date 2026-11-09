# Canvas and SVG: Drawing in the Browser

Chapter 7 described these two tools in outline. This chapter is the practical companion: the words, the commands you will really use, and the habits that make drawings sharp, fast and correct. Almost every instrument on this website is a canvas, and the block diagram is an SVG, so these are the tools that did most of the work.

## Words You Will Meet

| Word | What it means |
|---|---|
| **Context** | The object you draw with (`canvas.getContext('2d')`). |
| **Path** | A shape described by a series of moves and lines or curves. |
| **Stroke / fill** | Drawing the outline of a path / painting its inside. |
| **Transform** | A change of how coordinates are read: translate, rotate, scale. |
| **Gradient** | A smooth blend between colours. |
| **Clip** | A region outside of which nothing is drawn. |
| **viewBox** | SVG's private coordinate system. |
| **Hit testing** | Working out what shape is under the pointer. |
| **Device pixel ratio** | The ratio of physical pixels to CSS pixels (Chapter 4). |

## Canvas: The Drawing Recipe

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

## Mapping Data to Pixels

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

## Clipping, Gradients and Text

`ctx.clip()` restricts drawing to the current path, which is how a chart stops a curve from spilling out of its plot area. Gradients (`createLinearGradient`) and text (`fillText`) work like any other state-driven drawing. Set `textAlign` and `textBaseline` to place text exactly where you want.

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

## Canvas Interaction

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

## SVG: The Practical Bits

An SVG is a set of elements in the page. The ones you will use: `<rect>`, `<circle>`, `<line>`, `<path d="...">`, `<text>`, and `<g>` for grouping. In a path, `M` means move, `L` line to, `H` and `V` horizontal and vertical lines, and `Z` close. Styling uses CSS properties: `fill`, `stroke`, `stroke-width`, `stroke-dasharray`.

```
<svg viewBox="0 0 100 40" width="300" role="img" aria-label="An arrow">
  <path d="M5 20 H80" stroke="currentColor" stroke-width="2" fill="none"/>
  <path d="M80 12 L95 20 L80 28 Z" fill="currentColor"/>
</svg>
```

:::why Using currentColor in SVG
**What it is.** `stroke="currentColor"` uses the CSS `color` of the surrounding text.

**Why it is done this way.** The icon takes whatever colour its context says.

**Why it matters.** The same SVG can be violet in one place and white in another, and it changes with hover, without editing the SVG.

**What happens if you do not.** You hard-code a colour in the graphic, and need a separate copy for every colour you want.
:::

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

## Practice Problems

:::problems
1. A canvas is shown at 400 by 250 CSS pixels on a DPR 2 screen. What `width` and `height` should its surface have? Where would a line drawn from (10, 10) to (110, 10) land on the surface?
2. A chart's x axis runs from 0 to 10 over a plot starting at pixel x = 50 and 400 px wide. What pixel x is the data value 2.5? What data value is at pixel 450?
3. A chart's y axis runs from −1 to 1 over a plot starting at pixel y = 20 and 200 px tall. What pixel y is the value 0? The value 1? Why is the value 1 *smaller* in pixels than the value −1?
4. Write the path data for a triangle with corners at (0, 0), (10, 0), (5, 8) in an SVG.
5. A drawing function forgets `beginPath()` and draws a red line, then a blue line, each frame. What does the screen show after two frames?
6. A pointer event at `clientX = 320`, `clientY = 180` happens over a canvas whose top-left corner is at (100, 60) on the window. Where is the pointer in canvas CSS coordinates?
:::

:::answers
**Chapter 13 practice problems.**

1. 400 × 2 = 800 and 250 × 2 = 500. With a DPR 2 transform, the line goes from device (20, 20) to (220, 20).
2. x = 50 + (2.5 / 10) × 400 = 150. Pixel 450 is (450 − 50) / 400 × 10 = 10.
3. The plot spans pixels 20 to 220. The y pixel is 20 + 200 − ((v + 1) / 2) × 200. For 0: 220 − 100 = 120. For 1: 220 − 200 = 20. The value 1 is smaller in pixels because pixel y increases downward, so larger data values are drawn higher up.
4. `M0 0 L10 0 L5 8 Z`.
5. Both strokes are in the same path, so the blue stroke re-draws the red line in blue as well; after two frames the earlier line is drawn in the later colour, and every frame adds more to the path.
6. (320 − 100, 180 − 60) = (220, 120).
:::
