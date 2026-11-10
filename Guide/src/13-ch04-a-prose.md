# Space and Size

Every page lives inside a rectangle that you do not control. It might be a phone held upright, a laptop, or a monitor three times as wide, and your page has to look right on all of them. This chapter is about that problem: what a pixel really is, how boxes get their size and position, which units adapt to the screen and which refuse to, and why a drawing on a canvas needs to be told how dense the screen is.

:::objectives
- Tell a CSS pixel from a device pixel, and size a canvas so that it is sharp on both.
- Draw the box model and compute a box's size under `content-box` and `border-box`.
- Choose between normal flow, Flexbox and Grid for a given layout, and do the arithmetic of `fr`, `gap` and `flex-grow`.
- Pick a unit (`px`, `rem`, `em`, `%`, `vw`, `fr`) on purpose, and evaluate a `clamp()`.
- Make a page respond to width, pointer type and motion preference.
:::

## What Is a Pixel, Really?

The word *pixel* secretly means two different things, and mixing them up causes most blurry canvases. A **device pixel** is one physical dot on the screen. A **CSS pixel** is a unit of length in your stylesheet. On an old monitor they were the same thing. On a modern phone the dots are far smaller, so a CSS pixel is built from several device pixels, which keeps text a readable physical size. The ratio is the **device pixel ratio** (DPR).

**device pixels = CSS pixels × DPR**

On a DPR 2 screen, something 300 CSS pixels wide covers 600 device pixels. Text and vector shapes are drawn at the full device resolution automatically, so they stay sharp. A **bitmap**, though, has a fixed number of pixels. If it has fewer pixels than the screen area it must cover, the browser stretches it, and it goes soft.

@figure css-pixels-dpr The same three-by-three CSS pixels on a DPR 1 screen and a DPR 2 screen. A bitmap drawn with nine pixels has to be stretched over thirty-six, and the stretching is the blur.

## The Canvas Problem

The `<canvas>` element is a bitmap. It has two sizes: the size of its *drawing surface* (the `width` and `height` attributes) and the size it is *shown* at (set by CSS). If they disagree, the browser stretches the surface to fit the box. A canvas shown at 430 by 300 CSS pixels with a 430 by 300 surface, on a DPR 2 screen, gets stretched to double size and looks blurred.

The cure is to give the surface the *device* size, then scale the drawing context so your code can carry on thinking in CSS pixels. Every chart on this website begins with a function that does exactly this.

```
function fit(canvas) {
    const dpr = window.devicePixelRatio || 1;
    const w = canvas.clientWidth, h = canvas.clientHeight;      // size shown, in CSS px
    if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) {
        canvas.width  = Math.round(w * dpr);                    // size of the surface,
        canvas.height = Math.round(h * dpr);                    // in device px
    }
    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);                    // 1 unit drawn = 1 CSS px
    ctx.clearRect(0, 0, w, h);
    return { ctx, w, h };
}
```

:::why Setting the canvas surface to the device size
**What it is.** Making `canvas.width` equal to the shown width times `devicePixelRatio`, then calling `setTransform(dpr, ...)` so drawing coordinates stay in CSS pixels.

**Why it is done this way.** The surface needs enough pixels to cover the screen area one-to-one, and the transform lets you write `lineTo(330, 50)` without ever thinking about DPR.

**Why it matters.** Lines and text stay razor sharp on every kind of screen, using one piece of code.

**What happens if you do not.** Charts look fuzzy on phones and modern laptops, and it is hard to see why, because nothing is "wrong" in the code.
:::

:::why Only resizing the surface when the size changed
**What it is.** The `if` that compares the old and new sizes before assigning `canvas.width`.

**Why it is done this way.** Assigning `canvas.width` always wipes the canvas and reallocates its memory, even if you assign the same number.

**Why it matters.** This function runs every frame. Reallocating a big bitmap 60 times a second wastes a lot of time and memory.

**What happens if you do not.** The page runs hot, stutters, and may run out of memory on phones.
:::

@include blocks/ch04-w1.md

## The Box Model

Every element is a rectangular **box** made of four nested layers. In the middle is the **content**. Around it is **padding** (breathing room that shows the box's own background). Around that is the **border**. Outside the border is the **margin**, which separates the box from its neighbours and shows nothing.

By default, the `width` you set describes the *content only*, so the box you see is wider than you asked for, by all the padding and border. That is rarely what anyone means, which is why almost every modern stylesheet starts with this rule.

@figure box-model The four layers of every box, with the numbers for `width: 300px; padding: 20px; border: 2px solid`. The margin is outside the box and transparent; the padding is inside and shows the background.

```
* { box-sizing: border-box; }    /* width now includes padding and border */
```

:::why Starting every stylesheet with border-box
**What it is.** One rule that makes the declared `width` include padding and border.

**Why it is done this way.** The width you write becomes the width you get. A `width: 300px` box is 300 pixels wide in total, whatever its padding.

**Why it matters.** Layout arithmetic becomes simple. Two boxes of `width: 50%` really do fit side by side.

**What happens if you do not.** Add padding to a box and it quietly gets wider, pushes its neighbour onto the next line, and you spend an evening wondering why 50% plus 50% does not equal 100%. The flight dynamics and mechatronics pages both start with this rule.
:::

## Flow, Flex and Grid

The browser has three main ways of arranging boxes.

**Normal flow.** Block boxes stack downwards, inline boxes run along a line and wrap. This is what you get if you write no layout CSS at all, and for text it is exactly right.

**Flexbox** (`display: flex`) arranges children along one direction and shares out the spare room. It is perfect for a row of buttons or a navigation bar. The properties you will reach for are `justify-content`, `align-items`, `gap` and `flex-wrap`.

**Grid** (`display: grid`) arranges children in rows *and* columns at once. It is the right tool for page layouts and sets of cards.

@figure flex-grid Flexbox lays items along one **main axis** and aligns them on the **cross axis**; Grid defines tracks in both directions and places items in the cells.

#### How Flexbox shares the room

Flexbox has a small piece of arithmetic that is worth knowing by heart, because it explains every "why is this item that wide?" puzzle. Each item starts at its **basis** (its `flex-basis`, or its content width). The container adds up the bases and the gaps; whatever is left over is the **free space**. If the free space is positive, it is handed out in proportion to each item's `flex-grow`. If it is negative, the shortfall is taken away in proportion to `flex-shrink` (weighted by basis). The shorthand `flex: 1` means `flex: 1 1 0`: a basis of zero, grow 1, shrink 1, which makes all the items equal.

:::worked Three items, three different grows
A row is 600 px wide with `gap: 20px`. Its three items each have `flex-basis: 100px` and `flex-grow` of 1, 2 and 1. How wide is each?

**Step 1. The free space.** Bases 3 × 100 = 300, gaps 2 × 20 = 40, so 600 − 300 − 40 = 260 px to share.

**Step 2. The shares.** The grows add to 4, so one share is 260 / 4 = 65 px. The items get 65, 130 and 65.

**Step 3. The widths.** 100 + 65 = 165, 100 + 130 = 230, 100 + 65 = 165.

**Step 4. Check.** 165 + 230 + 165 + 40 = 600. ✓ The middle item is not twice as wide as the others (230 against 165); only its *share of the spare room* is twice as big. If you want "twice as wide", give all three a basis of zero.
:::

```
.cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
    gap: 1rem;
}
```

:::why auto-fit with minmax
**What it is.** "Make as many columns as will fit, each at least 190 pixels wide, and share any leftover space equally."

**Why it is done this way.** You describe the *rule* ("never narrower than 190") and let the browser work out how many columns fit.

**Why it matters.** As the screen narrows, columns drop away on their own. No media queries, no special cases. The readout strips and control rows on this website all come from this one line.

**What happens if you do not.** You write a media query for each screen size you can think of, and then a visitor arrives with a screen size you did not think of.
:::

## Units

CSS offers many units, and choosing one is choosing how the element responds to its surroundings.

| Unit | Meaning | Use it for |
|---|---|---|
| `px` | A CSS pixel, a fixed length | Borders, hairlines, shadows |
| `rem` | A multiple of the root font size (16 px by default) | Font sizes and spacing |
| `em` | A multiple of the element's own font size | Spacing that should grow with its text |
| `%` | A fraction of the parent's size | Widths inside a flexible container |
| `vw`, `vh` | 1% of the viewport width or height | Things sized to the screen |
| `fr` | A share of leftover space in a grid | Grid columns |

:::why Sizing text in rem, not px
**What it is.** Writing `font-size: 1.05rem` and not `font-size: 17px`.

**Why it is done this way.** A visitor can set a larger default text size in their browser. Every `rem` grows with that setting. A `px` size ignores it.

**Why it matters.** Someone who cannot read small text can make your page readable without any help from you.

**What happens if you do not.** Your carefully chosen small text stays small for the person who most needs it bigger.
:::

#### Fluid sizes with clamp

`clamp(min, preferred, max)` gives a size that follows a preferred value but never leaves a safe range. It is how the headings on this website scale smoothly with no media queries.

```
.hero h1 { font-size: clamp(2.4rem, 6vw, 4.2rem); }
```

@figure clamp-curve The size the heading takes at every viewport width. It follows the sloping `6vw` line between the two limits and is pinned to the limits outside them. With a 16 px root, `6vw` meets 2.4 rem at 640 px and 4.2 rem at 1 120 px.

@include blocks/ch04-w2.md

## Responsive Design

A **responsive** page adapts to the space it is given. Three tools do almost all the work. First, a viewport declaration in the page head tells phones to use their real width and not pretend to be a wide desktop.

```
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

:::why The viewport meta tag
**What it is.** One line in the `<head>`.

**Why it is done this way.** Early phones pretended to be about 980 pixels wide so that old desktop sites would fit, then zoomed out. That pretence is still the default.

**Why it matters.** The line switches the pretence off, so your CSS sees the phone's true width.

**What happens if you do not.** Your carefully responsive page appears as a tiny zoomed-out desktop layout on a phone, and your media queries never fire.
:::

Second, **media queries** apply rules only when a condition holds, most often a width.

```
@media (max-width: 720px) {
    .nav-status { display: none; }      /* on narrow screens, drop a decoration */
    .panel-canvas { height: 420px; }
}
```

Third, **fluid layout** (percentages, `fr`, `auto-fit`, `clamp`) does most of the adapting with no query at all. A good rule: let fluid layout do as much as it can, and add a media query only when the design truly has to change shape.

#### Pointer and motion preferences

Screens are not the only thing that varies. A phone has no hover, so an interface that shows things only on hover is useless on it. Media queries can ask about this: `(pointer: coarse)` matches touch, and `(prefers-reduced-motion: reduce)` matches someone who has asked their system for less animation. The 3D page on this website checks both.

:::tip
Test responsiveness by dragging your browser window narrow, and by using the device toolbar in the developer tools to pretend to be a phone. It takes ten seconds and catches most layout bugs.
:::

:::summary
- Device pixels = CSS pixels × DPR. A canvas needs a surface of device size and a transform back to CSS units, or it blurs.
- Every element is content, padding, border, margin. `box-sizing: border-box` makes the width you write the width you get.
- Normal flow for text, Flexbox for one direction, Grid for two. Flexbox shares free space by `flex-grow`; Grid shares it by `fr`.
- `rem` respects the visitor's text size; `px` for hairlines; `%` and `fr` for flexible widths; `clamp()` for fluid sizes without queries.
- The viewport meta tag, media queries and fluid layout are the three tools of responsive design. Let fluid layout do as much as it can.
- Screens vary in more than width: ask about pointer type and motion preference too.
:::
