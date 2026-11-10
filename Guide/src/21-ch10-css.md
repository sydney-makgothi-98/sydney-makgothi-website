# CSS: The Look

If HTML is the skeleton, CSS is everything that makes the skeleton look like a person: skin, clothes, posture. CSS has a reputation for being confusing, and the reputation is deserved, but only because people try to memorise it instead of understanding a handful of ideas: the cascade, the box, formatting contexts, and the few layout systems. You met the first two in Part I. This chapter turns them into working habits and then goes further: positioning, stacking, colour, typography, transforms, transitions, and the way a large stylesheet is organised so that it stays sane.

:::objectives
- Read a rule, score a selector, and predict which declaration wins.
- Use the box model, margins (and their collapsing), `display`, and overflow on purpose.
- Lay out anything with normal flow, Flexbox or Grid, and do the arithmetic of each.
- Position and stack elements with `position` and `z-index` without guessing.
- Choose units, colours and type with a system, and keep them in custom properties.
- Animate with transforms and transitions, cheaply.
- Make a design respond to width, pointer, and motion preference, and organise a stylesheet that will still make sense next year.
:::

## Words You Will Meet

| Word | What it means |
|---|---|
| **Selector** | The part of a rule that says which elements it applies to. |
| **Property** | A thing you can change, such as `color`. |
| **Value** | The setting you give it, such as `red`. |
| **Declaration** | A property and value together, ending in a semicolon. |
| **Rule** | A selector with its declaration block in braces. |
| **Pseudo-class** | A state added to a selector, such as `:hover` or `:focus`. |
| **Pseudo-element** | A part of an element, such as `::before`. |
| **Combinator** | The symbol between two simple selectors: a space (descendant), `>` (child), `+` (next sibling), `~` (later sibling). |
| **Cascade** | The procedure that settles conflicts between rules. |
| **Specificity** | The score that decides which selector wins. |
| **Inheritance** | A property taking its value from the parent when none is set. |
| **Computed value** | What a property finally works out to, after the cascade, inheritance and unit conversion. |
| **Formatting context** | The set of layout rules in force inside a container: block, inline, flex or grid. |
| **Stacking context** | A group of elements whose `z-index` values are compared only with each other. |
| **Custom property** | A variable, such as `--accent`, read with `var()`. |
| **Media query** | A rule that applies only if a condition (like screen width) is true. |

@figure css-rule-anatomy The parts of one rule. The selector picks elements; each declaration sets one property; the braces hold the declaration block.

## 10.1 How the Browser Reads Your Rules

For every element, the browser collects every rule that matches it, throws away the losers (using the cascade from Chapter 3), and is left with one value per property. Then it fills in anything still missing by **inheritance** (from the parent) or the property's **default**. Finally it converts what is left into a **computed value**: `1.5rem` becomes `24px`, `inherit` becomes the parent's number, a keyword like `bold` becomes `700`. Understanding this order is the whole game. When a style "does not work", it is almost always because another rule won, or because the selector did not match.

:::tip
Right-click the element, choose Inspect, and look at the Styles panel. It lists the matching rules from strongest to weakest and **crosses out the ones that lost**. That crossed-out line is usually the answer. The Computed tab shows the final numbers.
:::

#### Which properties inherit

Text properties inherit: `color`, `font-*`, `line-height`, `letter-spacing`, `text-align`, `visibility`. Box properties do not: `margin`, `padding`, `border`, `background`, `width`, `display`, `position`. This is why you set the typeface once on `body` and never on a box. Any property can be forced to inherit with the value `inherit`, reset with `initial`, or set to whichever of the two applies with `unset`.

## 10.2 Writing Selectors Well

The most useful selectors are simple: a **class** (`.card`), an **element** (`p`), a **descendant** (`.card p`), a **child** (`.card > p`), and states (`.button:hover`). Here is the full toolkit, with the specificity each piece adds.

| Selector | Matches | Adds to (a, b, c) |
|---|---|---|
| `p` | every `<p>` | (0, 0, 1) |
| `.card` | every element with class `card` | (0, 1, 0) |
| `#main` | the one element with id `main` | (1, 0, 0) |
| `[type="range"]` | elements with that attribute value | (0, 1, 0) |
| `a:hover`, `li:first-child`, `:not(.on)` | states and positions | (0, 1, 0) each, plus the inside of `:not()` |
| `p::first-line`, `.card::before` | a part of an element | (0, 0, 1) |
| `.card p` | a `<p>` anywhere inside `.card` | the sum of the parts |
| `.card > p` | a `<p>` that is a direct child of `.card` | the sum |
| `h2 + p` | a `<p>` immediately after an `<h2>` | the sum |
| `h2 ~ p` | every `<p>` after an `<h2>` among its siblings | the sum |
| `.a, .b` | either (two rules written once) | each scored on its own |
| `*` | everything | (0, 0, 0) |
| `:is(.a, .b) p` | a `<p>` inside either | the highest of the arguments |
| `:where(.a, .b) p` | the same, but `:where` adds nothing | (0, 0, 1) |

Structural pseudo-classes let you style by position without extra classes: `:first-child`, `:last-child`, `:nth-child(2n)` (even), `:nth-child(3n + 1)`, `:only-child`, `:empty`. The form states `:checked`, `:disabled`, `:focus-visible`, `:invalid` and `:placeholder-shown` let a stylesheet react to a control's state with no script at all.

:::worked Reading a selector you have never seen
What does `.panel:not(.lite) > .row:nth-child(2n) label + input[type="range"]:focus-visible` match, and what is its specificity?

**Step 1. Read it right to left**, which is how the browser does it. A range input that currently has keyboard focus; that comes immediately after a label; inside a `.row` that is an even-numbered child; which is a direct child of a `.panel` that does not have the class `lite`.

**Step 2. Score it.** `.panel` (0,1,0), `:not(.lite)` takes the score of its argument (0,1,0), `.row` (0,1,0), `:nth-child(2n)` (0,1,0), `label` (0,0,1), `input` (0,0,1), `[type="range"]` (0,1,0), `:focus-visible` (0,1,0). Total: (0, 6, 2).

**Step 3. Judge it.** It works, and it is a maintenance trap: six class-level pieces mean nothing simpler can override it, and it breaks if a row is reordered or a label moves. The same intent as a flat class, `.range-even:focus-visible` (0, 2, 0), is both weaker and sturdier.
:::

:::why Styling with classes, not IDs or deep chains
**What it is.** Giving elements a class (`class="card"`) and writing `.card { ... }`, instead of `#main-card` or `div.wrapper > div > ul > li:nth-child(3)`.

**Why it is done this way.** A class has middling specificity (0,1,0), and it can be reused anywhere.

**Why it matters.** Rules stay easy to override, and the same class can be on many elements.

**What happens if you do not.** An ID (specificity 1,0,0) beats nearly everything, so you need an even more specific rule to override it, and then another. Long chains also break the moment the HTML structure changes.
:::

## 10.3 The Box, Margins and Display

Everything is a box (Chapter 4). Start every stylesheet with `* { box-sizing: border-box; }`. Three further facts about boxes explain most layout surprises.

**Vertical margins collapse.** When two block boxes stack, the gap between them is the *larger* of the two margins, not the sum. Two paragraphs with `margin: 24px 0` are 24 pixels apart, not 48. A child's top margin can even escape through its parent's top edge if the parent has no padding or border there. Horizontal margins never collapse, and margins inside Flexbox and Grid never collapse.

**`display` sets the kind of box.** `block` boxes stack and take the full width; `inline` boxes sit in a line of text and ignore `width` and vertical margins; `inline-block` sits in a line but accepts a width and height; `flex` and `grid` make the element a container for its children; `none` removes it from layout entirely. (`visibility: hidden` hides it but keeps its space; `opacity: 0` keeps it in the page and still clickable.)

**Overflow is your choice.** When content is bigger than its box, `overflow: visible` (the default) lets it spill out, `hidden` clips it, `auto` adds a scrollbar only when needed, and `scroll` always shows one. `overflow-x: auto` on a code block or an equation is the standard cure for a page that scrolls sideways on a phone.

:::worked Margins that do not add up
Three stacked `<p>` elements have `margin: 20px 0`. The first sits at the top of a `<section>` with `padding: 0` and `margin-top: 50px`. What is the gap between the paragraphs, and how far is the first paragraph from the element above the section?

**Step 1. Between paragraphs.** The 20 px bottom margin of one and the 20 px top margin of the next collapse to the larger: 20 px, not 40.

**Step 2. Through the section.** The section has no top padding or border, so the first paragraph's 20 px top margin collapses *with* the section's 50 px top margin. The result is a single 50 px gap, and the paragraph sits flush with the top of the section.

**Step 3. Stop it collapsing.** Give the section `padding-top: 1px`, or make it a flex or grid container, or set `display: flow-root`. Then the gap is 50 + 20 = 70 px, which is probably what the author expected.

**Why it matters.** "Why does my margin do nothing?" is almost always collapsing. Knowing the rule turns a mystery into a one-line fix.
:::

## 10.4 Layout: Flow, Flex and Grid

Use **normal flow** for text, **Flexbox** for one-dimensional arrangements (a row of buttons), and **Grid** for two-dimensional ones (a gallery, a page). Chapter 4 showed the arithmetic of `flex-grow` and `auto-fit`; here are the properties you will reach for, in the order you will need them.

```
.row     { display: flex; gap: 1rem; align-items: center; justify-content: space-between; flex-wrap: wrap; }
.row > *  { flex: 1 1 12rem; }         /* grow, shrink, basis: at least 12rem, share the rest */
.gallery { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem; }
.page    { display: grid; grid-template-columns: 220px 1fr; grid-template-rows: auto 1fr auto; min-height: 100vh; }
.page > header { grid-column: 1 / -1; }   /* span every column */
```

**Flexbox vocabulary.** `flex-direction` picks the main axis (`row` or `column`). `justify-content` arranges items along it (`flex-start`, `center`, `space-between`, `space-around`). `align-items` arranges them across it (`stretch`, `center`, `flex-start`, `baseline`). `flex-wrap: wrap` lets items drop to a new line. On an item, `flex: grow shrink basis` and `align-self` override the container. `gap` spaces them.

**Grid vocabulary.** `grid-template-columns` and `-rows` define the tracks, in any mix of lengths, `fr` shares, `auto`, `minmax()` and `repeat()`. `gap` spaces the tracks. An item is placed with `grid-column: 1 / 3` (from line 1 to line 3, so two tracks wide) or `grid-column: span 2`; `-1` means the last line. `grid-template-areas` lets you draw the layout with words. `align-items` and `justify-items` align within cells; `place-items: center` does both.

:::worked Fixed, flexible and doubly flexible columns
A grid is 800 px wide with `grid-template-columns: 200px 1fr 2fr` and `gap: 20px`. How wide is each column?

**Step 1. Take out the fixed parts.** The 200 px column and two gaps of 20 px: 800 − 200 − 40 = 560 px remain.

**Step 2. Share by fr.** Three shares in total (1 + 2), so one share is 560 / 3 = 186.67 px. The columns are 200, 186.67 and 373.33 px.

**Step 3. Check.** 200 + 186.67 + 373.33 + 40 = 800. ✓

**Step 4. What if the content is wider?** `1fr` is really `minmax(auto, 1fr)`, so a column will not shrink below its longest unbreakable word or widest image. If a 500 px image lands in the middle column, that column grows and the grid overflows. Write `minmax(0, 1fr)` when you want the share to win over the content.
:::

:::why gap instead of margins between items
**What it is.** Using `gap` to space children in a flex or grid container.

**Why it is done this way.** `gap` puts space *between* items only, not before the first or after the last.

**Why it matters.** There is no stray margin at the end, no special case for the last item, and no need to remember to remove it.

**What happens if you do not.** You put `margin-right` on every item and then spend time removing it from the last one, and you forget when the layout wraps.
:::

:::worked Choosing the layout tool
For each of these, say which layout system fits and why: (a) a navigation bar with a logo on the left and links on the right; (b) a page with a sidebar and a main column; (c) a paragraph of text with an image floated beside it; (d) a set of cards that should wrap to as many columns as fit; (e) centring one box in the middle of the screen.

(a) **Flexbox.** One row; `justify-content: space-between` puts the logo and links at the ends.

(b) **Grid.** Two columns (`220px 1fr`) and the rows of the page; the header can span both with `grid-column: 1 / -1`.

(c) **Normal flow with `float: left`** on the image. Floats are the one place text wraps around a box; Flexbox and Grid cannot do that.

(d) **Grid** with `repeat(auto-fit, minmax(…, 1fr))`. Flexbox with `flex-wrap` also works, but the last row's items would stretch to fill it; Grid keeps every card the same width.

(e) **Either.** `display: grid; place-items: center; min-height: 100vh` on the parent is the shortest. Flexbox needs `justify-content: center; align-items: center`.
:::

## 10.5 Position and Stacking

`position` takes an element out of the normal rules of flow, and `z-index` decides what is drawn on top. These two are where most "it is in the wrong place" bugs live.

@figure position-schemes The three positioning schemes you will use. Relative moves a box but leaves its slot; absolute removes the box from flow and places it against its nearest positioned ancestor; sticky scrolls with the page until it reaches its offset, then holds.

- `position: static` is the default: the box is where flow puts it, and `top`, `left` and `z-index` do nothing.
- `position: relative` keeps the box in flow and then nudges it by `top`/`left`. Its main use is subtler: it makes the box the **reference** for any absolutely positioned descendant.
- `position: absolute` takes the box out of flow (the others close up) and places it against the nearest ancestor that has a `position` other than static. `inset: 0` stretches it to fill that ancestor.
- `position: fixed` is like absolute, but against the viewport, so it stays put while the page scrolls. A floating "back to top" button, a progress bar.
- `position: sticky` is relative until the element reaches its `top` offset while scrolling, then it sticks there until its parent scrolls away. A table header or a section label.

@figure stacking Later elements paint over earlier ones; `z-index` reorders positioned elements, but only within the same stacking context.

**Stacking.** Without `z-index`, boxes are painted in source order, later over earlier, with positioned boxes over non-positioned ones. `z-index` changes the order, with two conditions: it only works on positioned elements (and on flex or grid items), and it only compares elements inside the same **stacking context**. A new context is started by a positioned element with a `z-index`, by `opacity` less than 1, by a `transform`, a `filter`, and a few others. Inside a context, the children's `z-index` values are private: a child with `z-index: 9999` cannot escape a parent that is itself under something else.

:::worked Why the menu is behind the hero
A drop-down menu has `position: absolute; z-index: 1000` but still appears *behind* a hero section that comes later in the page and has `transform: translateY(0)`. Why, and what is the fix?

**Step 1. Find the contexts.** The `transform` on the hero creates a stacking context for the hero. The menu's parent, the header, has `position: relative; z-index: 1`? Suppose it does: that creates a stacking context for the header too.

**Step 2. Compare at the right level.** The menu's 1000 only competes with other things *inside the header's context*. At the page level, the header (z-index 1) competes with the hero (a transformed element, which counts as z-index 0, but comes later in source order). 1 beats 0, so the header should win. If the header had no `z-index`, it would be at the same level as the hero and the later hero would paint on top.

**Step 3. The fix.** Give the header a `z-index` higher than the hero's, at the level where they compete, or remove the needless `z-index` on the header so the menu's 1000 competes at page level. The menu's own number never mattered.

**Why it matters.** Raising `z-index` to larger and larger numbers never fixes a stacking-context problem. Finding which two ancestors are actually being compared does.
:::

## 10.6 Colour, Type and Space

Choose a small palette and keep it in custom properties. Choose one or two typefaces. Choose a spacing scale (for example 0.25, 0.5, 1, 2, 4 rem) and stick to it.

```
:root {
    --bg: #070a1a;
    --text: #e6e8f5;
    --accent: #a78bfa;
    --space: 1rem;
    --radius: 10px;
}
body { background: var(--bg); color: var(--text); font-family: 'Inter', system-ui, sans-serif; line-height: 1.7; }
```

#### Colour

A colour can be written five ways, and they are all the same colour to the browser: a name (`rebeccapurple`), a hex code (`#a78bfa`, or `#a78bfacc` with alpha), `rgb(167 139 250)`, `hsl(255 92% 76%)`, or the newer `oklch()`. HSL is the one to *think* in: hue is the position on the colour wheel in degrees, saturation is how vivid, lightness is how light. The site's accent `#a78bfa` is `hsl(255 92% 76%)`; a darker version for a hover state is the same hue and saturation with lower lightness, `hsl(255 92% 66%)`, which you could never guess from the hex code. Transparency comes from a fourth value: `hsl(255 92% 76% / 0.5)`. The `color-mix()` function blends two colours: `color-mix(in oklab, var(--accent) 30%, transparent)` is a tint of the accent for a faint background.

:::why Keeping the palette in custom properties and deriving the rest
**What it is.** Five or six named colours at the top, and every other colour made from them with lightness changes, alpha or `color-mix()`.

**Why it is done this way.** The design then has a small number of decisions, and the browser does the arithmetic.

**Why it matters.** Change `--accent` and every hover tint, border and highlight follows. A dark-to-light theme is a second `:root` block, not a rewrite.

**What happens if you do not.** Fifty near-identical purples live in the file, and a palette change is a week of search and replace that still misses three.
:::

#### Type

Typography is three numbers and one choice. The choice is the typeface; the numbers are size, line height and measure (line length). Set the size in `rem` so it respects the visitor's settings; set the line height as a unitless number, about 1.5 to 1.7 for body text and 1.1 to 1.2 for headings; keep the measure between 45 and 75 characters with `max-width: 65ch`. Build the sizes as a scale, so headings relate to each other: 1, 1.125, 1.25, 1.5, 2, 2.5 rem is a common one.

:::worked Line heights that work out
The root font size is 16 px. `h1 { font-size: 2.5rem; line-height: 1.2 }` and `p { font-size: 1.125rem; line-height: 1.6 }`. What are the computed values, and what would go wrong with `line-height: 28px` on the body instead?

**Step 1. The heading.** 2.5 × 16 = 40 px, and the line height is 1.2 × 40 = 48 px.

**Step 2. The paragraph.** 1.125 × 16 = 18 px, with a line height of 1.6 × 18 = 28.8 px.

**Step 3. The trap.** A fixed `line-height: 28px` on the body is inherited as *28 px* by the heading, whose 40 px glyphs then overlap on wrapped lines. A unitless `1.6` is inherited as a *ratio*, so the heading would get 64 px, which is roomy but at least readable, and then its own rule sets 1.2.

**Why it matters.** This is the single most common typography bug, and it is invisible until a heading wraps.
:::

:::why A font stack with system-ui at the end
**What it is.** `font-family: 'Inter', system-ui, sans-serif` is a list, not a single choice.

**Why it is done this way.** The browser tries each in turn and uses the first one it has. If the chosen web font has not loaded yet, or fails, it falls back.

**Why it matters.** The page is readable immediately in a sensible font instead of showing blank text or a clumsy default.

**What happens if you do not.** If the one font you named fails to load, the browser picks its own default (often Times), and your design collapses.
:::

Web fonts are loaded with `@font-face` or a link to a font service. Add `font-display: swap` so text shows in the fallback font until the real one arrives, and load only the weights you use: each weight is a separate file of 20 to 100 kilobytes.

#### Space

Spacing is the thing most beginners do by eye and most professionals do by rule. Pick a base (`1rem`) and a few multiples, name them (`--s1: 0.5rem; --s2: 1rem; --s3: 2rem; --s4: 4rem`), and use nothing else. Put space *between* things with `gap` and `margin-block-start` on the second of two things, not on every side of everything.

## 10.7 Pseudo-elements and Pseudo-classes

`::before` and `::after` insert a generated box at the start or end of an element's content. They need a `content` property, even if it is empty, and they are how decorations are drawn without extra HTML: a diamond before a heading, a corner mark on a card, a fading edge on a scrolling strip.

```
.proj-tag::before { content: ''; display: inline-block; width: 6px; height: 6px;
                    background: var(--accent); transform: rotate(45deg); margin-right: 0.5em; }
```

A **transition** animates a property when it changes. Combine it with `:hover` and `:focus-visible` for friendly controls.

```
.chip { background: transparent; transition: background 150ms ease; }
.chip:hover { background: var(--accent); }
.chip:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
```

:::why :focus-visible
**What it is.** A pseudo-class that matches focus only when the browser thinks the user is using the keyboard.

**Why it is done this way.** Mouse users do not want a ring after every click. Keyboard users need one.

**Why it matters.** Both are served: the ring appears for Tab, not for clicks.

**What happens if you do not.** Developers who dislike the ring hide it for everyone, and keyboard users get lost (Chapter 8).
:::

Two newer selectors remove whole categories of script. `:has()` styles a parent by its children: `.card:has(img)` is a card that contains an image; `label:has(input:checked)` is the label of a ticked box. `@media (hover: hover)` applies hover styles only on devices that can hover, so a phone does not get stuck in a hover state after a tap.

## 10.8 Transforms, Transitions and Animations

`transform` moves, rotates, scales or skews an element *without affecting layout*: the box's slot stays where it was and only the picture moves. That is why it is cheap (Chapter 2) and why it is the right tool for motion.

```
.card:hover { transform: translateY(-3px) scale(1.02); }
.needle    { transform: rotate(var(--angle)); transform-origin: 50% 90%; }
```

The functions apply **right to left** as written, or equivalently, each one happens in the coordinate system left by the previous ones. `translate(100px) rotate(45deg)` moves the box 100 px right and then spins it in place. `rotate(45deg) translate(100px)` spins the axes first and then moves 100 px along the rotated x axis, which is 70.7 px right and 70.7 px down. `transform-origin` sets the point things rotate and scale about; a gauge needle wants its origin at the pivot, not the centre.

A **transition** interpolates a property between its old and new value whenever it changes: `transition: property duration timing-function delay`. Only properties with numeric values can be transitioned; `display` cannot, which is why panels are faded with `opacity` and moved with `transform` and only then hidden. The timing function is one of Chapter 6's easing curves: `ease` (the default), `linear`, `ease-in`, `ease-out`, `ease-in-out`, or a `cubic-bezier()`.

An **animation** runs a `@keyframes` sequence, with a duration, an iteration count and a direction, independently of any property change. It is right for things that move on their own: a blinking dot, a loading bar, dashes flowing along a wire.

```
@keyframes flow { to { stroke-dashoffset: -24; } }
.wire { stroke-dasharray: 6 6; animation: flow 1.2s linear infinite; }
```

:::worked What the eye sees at a quarter of the way through
A panel slides in with `transition: transform 400ms cubic-bezier(0.16, 1, 0.3, 1)` from `translateY(40px)` to `translateY(0)`. Where is it after 100 ms? Compare with `ease-out`.

**Step 1. The progress.** 100 ms of 400 ms is t = 0.25 of the time.

**Step 2. The curve.** For `cubic-bezier(0.16, 1, 0.3, 1)` the progress of motion at t = 0.25 is 0.826. For `ease-out`, which is `cubic-bezier(0, 0, 0.58, 1)`, it is 0.378.

**Step 3. The position.** The panel has 40 px to travel. With the first curve it has covered 0.826 × 40 = 33 px and sits 7 px from its final place; with `ease-out` it has covered 15 px and still has 25 px to go.

**What the answer tells you.** The first curve is the "fast arrival, long settle" of Chapter 6: most of the motion is over in the first quarter, and the remaining 300 ms are a gentle landing. That is why interface designers love it for things that appear.
:::

:::why Animating transform and opacity, not top and height
**What it is.** Motion written as `transform` and `opacity`, never as `left`, `top`, `width`, `height` or `margin`.

**Why it is done this way.** Transform and opacity can be handled by the compositor without layout or paint (Chapter 2).

**Why it matters.** Sixty frames a second on a phone.

**What happens if you do not.** Every frame of a `height` animation re-lays-out the page below it. Smooth on your desktop, a slideshow on a mid-range phone.
:::

## 10.9 Responsive Design in Practice

Chapter 4 gave the three tools: the viewport tag, media queries and fluid layout. In practice a responsive stylesheet follows a few habits.

**Mobile first.** Write the narrow layout as the default and add complexity with `@media (min-width: ...)` queries. The narrow layout is usually simpler, so the default is simpler, and a phone never downloads rules it then has to undo.

**Few breakpoints, chosen by the content.** Drag the window narrower and add a query where the design *breaks*, not at the width of any particular phone. Two or three breakpoints are usually enough.

**Fluid first.** Reach for `clamp()`, `minmax()`, `auto-fit`, `flex-wrap` and percentages before you reach for a query. A layout that flows needs fewer special cases than one that jumps.

**Ask about more than width.** `(hover: none)` and `(pointer: coarse)` for touch, `(prefers-reduced-motion: reduce)` for motion, `(prefers-color-scheme: dark)` for the visitor's theme, `(orientation: landscape)` for a phone turned sideways.

```
.controls { display: grid; gap: 0.75rem; }                               /* phones: stacked */
@media (min-width: 720px) { .controls { grid-template-columns: 1fr 1fr; } }   /* wider: two columns */
@media (hover: hover) { .card:hover { transform: translateY(-3px); } }      /* only where hover exists */
@media (prefers-reduced-motion: reduce) { * { transition: none !important; animation: none !important; } }
```

:::why Mobile first
**What it is.** The default rules describe the phone layout; queries add the desktop layout.

**Why it is done this way.** The phone layout is the simplest. Building up is easier than tearing down.

**Why it matters.** The stylesheet is shorter, and the most constrained device gets the least work.

**What happens if you do not.** The desktop-first stylesheet sets three columns, then a query sets one; then a second query for tablets sets two; and each query undoes rules that came before it, until nobody can tell what a phone actually gets.
:::

## 10.10 Organising a Stylesheet

A stylesheet for one page can be written in any order. A stylesheet for a site needs a system, and the system is more important than which one you choose. Here is a simple one that scales.

1. **Tokens first.** The `:root` block with colours, spacing, radii, type sizes. Nothing else may contain a raw colour or a magic number.
2. **Reset and base.** `box-sizing`, margins, `body` type, link colours, `img { max-width: 100%; height: auto; }`.
3. **Layout.** The page shell, the grid, the containers.
4. **Components.** One block of rules per reusable thing, each under one class: `.panel`, `.chip`, `.readout`. Inside, variants are modifier classes (`.chip.on`, `.panel--wide`) and children are descendants with short names (`.panel .t`).
5. **Utilities.** A few single-purpose classes you will use everywhere: `.visually-hidden`, `.mono`, `.center`.
6. **Media queries last**, or next to the component they change.

Keep specificity flat: one class, sometimes two. Never style by id. Use `!important` only in utilities that *must* win (like `.visually-hidden`), and never to settle a fight you could settle with order. Name things by role, not appearance (`.text-muted`, not `.grey`). Comment the *why*, not the what.

:::why Naming by role
**What it is.** `--text-muted`, `.panel-head`, `.chip.on`, not `--grey`, `.rounded-box`, `.chip-purple`.

**Why it is done this way.** The role stays true when the design changes.

**Why it matters.** When the muted text becomes blue in a redesign, `--text-muted` is still the right name and the right variable.

**What happens if you do not.** `.chip-purple` turns teal and the code lies to everyone who reads it, including you.
:::

## Worked Example: A Responsive Card Row

:::worked Three cards that wrap on their own
Make a row of three cards that sits side by side on a wide screen and stacks on a phone, without writing a media query.

**Step 1. HTML.** A container with three children.

```
<div class="cards">
  <article class="card">One</article>
  <article class="card">Two</article>
  <article class="card">Three</article>
</div>
```

**Step 2. CSS.**

```
* { box-sizing: border-box; }
.cards { display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); }
.card  { padding: 1rem; border: 1px solid #ccc; border-radius: 10px; }
```

**Step 3. Predict.** In a 700-pixel container: how many columns fit? Each needs at least 200 plus gaps of 16: 3 columns need 3 × 200 + 2 × 16 = 632, which is at most 700, so three. In a 400-pixel container: 2 columns need 2 × 200 + 16 = 416 which exceeds 400, so only one column fits, and the cards stack.

**Step 4. Check.** Drag the window narrower and watch the cards drop into a stack at exactly the width you predicted. There is no query anywhere in the code. The layout is a *rule*, and the browser applied it.
:::

## Worked Example: A Panel From the Website, Explained

:::worked Reading a real component
The instrument panels of the flight dynamics page use rules like these. Say what each declaration does and why it is there.

```
.panel { position: relative; overflow: hidden; border-radius: 14px;
         border: 1px solid var(--border-accent);
         background: linear-gradient(180deg, #131a3f, var(--bg-raised)); }
.panel::after { content: ''; position: absolute; inset: 0; pointer-events: none;
                background: radial-gradient(60% 50% at 50% 0%, rgba(167,139,250,0.12), transparent); }
.panel-head { display: flex; justify-content: space-between; align-items: baseline; gap: 1rem; }
.panel-head .t { color: var(--accent); letter-spacing: 0.16em; text-transform: uppercase; font-size: 0.75rem; }
```

**`position: relative`** makes the panel the reference box for the absolutely positioned `::after`. **`overflow: hidden`** clips the canvas inside to the rounded corners. **`border-radius`** and the border give the card its shape. The **gradient background** lifts the top edge slightly, the way light falls on a real panel.

The **`::after`** draws a soft violet glow at the top centre, a pure decoration, with no extra HTML. **`inset: 0`** stretches it over the whole panel. **`pointer-events: none`** lets clicks pass through it to the controls underneath, which would otherwise be unclickable.

The **header** is a flex row with the title and a status word at opposite ends, aligned on their text baseline. The **title** takes the accent colour, wide letter spacing and capitals, a small label in the style of an instrument.

**Why it matters.** Every declaration has a job, and none of them is there "because it looked nice". When you can read a stylesheet like this, you can also delete from it without fear.
:::

## Practice Problems A: Selectors, the Cascade and the Box

:::problems
1. Rank by specificity, least to most: `p`, `.a .b`, `#x`, `p.a`, `a:hover`.
2. Which element does `.nav > li + li a` match, in words?
3. Two rules apply to a link: `nav a { color: blue }` and `.menu-link { color: red }`, in that order. What colour is a link with `class="menu-link"` inside `<nav>`, and why?
4. Give the computed `font-size` of a `<p>` set to `1.25em` inside a `<section>` set to `1.2rem`, with a 16 px root.
5. A paragraph is 300 px wide with `padding: 20px; border: 2px solid`. With `border-box` what is its content width? With `content-box` what is its total width?
6. Two stacked blocks have `margin-bottom: 30px` and `margin-top: 50px`. How far apart are they? And if they were flex items in a column?
7. Which of these inherit: `color`, `padding`, `font-family`, `border`, `line-height`, `background`?
8. Rewrite this using custom properties so the two colours live in one place: `h1 { color: #e11d48; } a { border-color: #e11d48; background: #fff1f2; }`.
:::

:::answers
**Chapter 10, Practice Problems A.**

1. `p` (0,0,1); `a:hover` (0,1,1); `p.a` (0,1,1) ties with `a:hover` (later one wins); `.a .b` (0,2,0); `#x` (1,0,0). Order: `p`, then `a:hover` and `p.a` (tied), then `.a .b`, then `#x`.
2. A link inside a list item that is a direct child of `.nav` and is not the first such item (it has a previous `li` sibling).
3. Red. `nav a` scores (0,0,2); `.menu-link` scores (0,1,0), and one class beats any number of elements, whatever the order.
4. The section is 1.2 × 16 = 19.2 px. The paragraph's `em` refers to its parent's size: 1.25 × 19.2 = 24 px.
5. `border-box`: content width is 300 − 2 × 20 − 2 × 2 = 256 px. `content-box`: total width is 300 + 40 + 4 = 344 px.
6. 50 px, the larger of the two, because vertical margins collapse. As flex items, 80 px, because margins never collapse in a flex container.
7. `color`, `font-family` and `line-height` inherit. `padding`, `border` and `background` do not.
8. `:root { --rose: #e11d48; --rose-bg: #fff1f2; } h1 { color: var(--rose); } a { border-color: var(--rose); background: var(--rose-bg); }`
:::

## Practice Problems B: Layout, Position and Stacking

:::problems
1. With `grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 10px;` in a container 500 px wide, how many columns, and how wide is each?
2. A grid has columns `100px 1fr 1fr 2fr` and `gap: 16px` in 900 px. Give all four widths.
3. A flex row of four items has `gap: 12px` and each item `flex: 0 0 200px` in a 700 px container with `flex-wrap: wrap`. How many items sit on the first line?
4. An absolutely positioned tooltip appears at the top-left of the *page* instead of next to its button. What is missing, and where?
5. A table header should stay visible while the rows scroll under it. Which `position` value, and what one property must accompany it?
6. A modal has `z-index: 10000` but a sidebar with `z-index: 2` covers it. The modal is inside a `<main>` that has `opacity: 0.99`. Explain.
7. Write a rule that centres one box both ways inside a full-height parent, using Grid.
8. Which layout tool lets text wrap around an image, and why can Flexbox not do it?
:::

:::answers
**Chapter 10, Practice Problems B.**

1. n columns fit if 150n + 10(n − 1) ≤ 500, so 160n ≤ 510 and n = 3. Gaps take 20, leaving 480, so each column is 160 px.
2. Fixed: 100 + 3 × 16 = 148, leaving 752 for four shares. One share is 188. Widths: 100, 188, 188, 376.
3. Each item needs 200 and each gap 12. Three items: 600 + 24 = 624 ≤ 700. Four: 800 + 36 > 700. Three on the first line.
4. The button's container (or the button itself) needs `position: relative`. Without a positioned ancestor, the tooltip is placed against the page.
5. `position: sticky`, with `top: 0` (an offset is required, or sticky does nothing).
6. `opacity` less than 1 creates a stacking context on `<main>`. The modal's 10000 only counts inside `<main>`; at the page level `<main>` is a single item with z-index 0 (auto), and the sidebar's 2 beats it. Fix: move the modal outside `<main>`, or remove the opacity, or give `<main>` a `z-index` above 2.
7. `.parent { display: grid; place-items: center; min-height: 100vh; }`
8. `float: left` or `float: right` in normal flow. Flex and grid items are boxes placed in tracks or along an axis; neither lets line boxes of text flow around another box.
:::

## Practice Problems C: Colour, Type, Motion and Organisation

:::problems
1. Write the site's blue `#60a5fa` as `hsl()` (hue 213, saturation 94%, lightness 68%), then write a 20 percent lighter hover version and a half-transparent version.
2. Why is `line-height: 1.6` better than `line-height: 24px` on a body whose headings are different sizes?
3. A heading is `clamp(1.5rem, 4vw, 3rem)`. What size is it at viewport widths of 300, 800 and 1 400 px, with a 16 px root?
4. Where does a box end up after `transform: rotate(90deg) translate(50px)`? After `translate(50px) rotate(90deg)`?
5. Why can `display: none` not be transitioned, and what do you animate instead?
6. Write a `@media` rule that turns off a hover lift on touch devices, and one that removes all animation for visitors who asked for less motion.
7. Rewrite `#sidebar div.widget ul li a.active { color: red !important }` as a flat class, and explain what was wrong with the original.
8. Put these in the order a well-organised stylesheet lists them: components, reset, tokens, utilities, layout, media queries.
:::

:::answers
**Chapter 10, Practice Problems C.**

1. `hsl(213 94% 68%)`; hover: `hsl(213 94% 82%)` (lightness raised, or `88%` if you count "20 percent" as 20 points); half-transparent: `hsl(213 94% 68% / 0.5)`.
2. A unitless line-height scales with each element's own font size, so large headings get proportionally large line spacing. A fixed 24 px makes big headings' lines overlap.
3. `4vw` is 12, 32 and 56 px. Clamped between 24 and 48 px: 24 px at 300, 32 px at 800, 48 px at 1 400.
4. `rotate(90deg) translate(50px)`: the axes turn first, so the translation is along the rotated x axis: 50 px *down* (0, 50). `translate(50px) rotate(90deg)`: 50 px right, then spun in place: (50, 0), rotated.
5. `display` has no in-between values to interpolate. Animate `opacity` and `transform`, and set `display: none` only after the transition ends (or use `visibility` with a delay).
6. `@media (hover: none) { .card:hover { transform: none; } }` and `@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation: none !important; transition: none !important; } }`
7. `.widget-link.active { color: red; }`. The original was an id-anchored chain of (1,2,4) plus `!important`, which nothing could override; it depended on the exact HTML nesting; and it named the id, so it could not be reused.
8. Tokens, reset, layout, components, utilities, media queries (or queries beside their components).
:::

## Mini Project: Style the Robot Page

:::project From document to design
Take the `patrick.html` you wrote in Chapter 9 and give it a stylesheet, `patrick.css`, with these requirements:

1. A `:root` block with at least six tokens: two backgrounds, two text colours, an accent, a radius, and a spacing scale. No raw colour anywhere else.
2. A reset with `border-box`, an `img` rule that prevents overflow, and body type in `rem` with a unitless line height and a `max-width` in `ch` on the text column.
3. The header as a flex row; the main area as a grid that becomes two columns (content and the parts list) at 800 px and above.
4. The figure's caption styled with `::before` to carry a small accent mark, and the table with zebra rows using `:nth-child(even)`, a sticky header row, and right-aligned numbers.
5. A hover and focus-visible style on the nav links that uses a transition on `transform` and `color`, disabled under `(hover: none)` and under reduced motion.
6. The `<details>` given a small open-and-close transition on its content using `opacity` and `transform`.
7. A print stylesheet (`@media print`) that hides the nav and the form and sets the text to black on white.

Checks: the Styles panel shows no crossed-out declarations in your own rules (no fights); the page never scrolls sideways at 320 px; every number in the file is either a token or has a comment saying where it comes from; Lighthouse's accessibility score does not drop from the unstyled page.
:::

:::summary
- The cascade picks one value per property: importance, then specificity (a, b, c), then order. Inheritance fills the gaps, then units are computed. The Styles panel shows every loser crossed out.
- Keep selectors flat and classes reusable; read compound selectors right to left; `:is()`, `:where()`, `:has()` and structural pseudo-classes replace a lot of markup and script.
- Boxes: `border-box`, collapsing vertical margins, `display` as the kind of box, overflow as a deliberate choice.
- Normal flow for text, Flexbox for one axis, Grid for two. Free space is shared by `flex-grow` or `fr`; `auto-fit` with `minmax()` makes columns without queries.
- `position` takes a box out of the flow's rules; `z-index` works only on positioned boxes and only within a stacking context.
- Colour in HSL, type in `rem` with unitless line height and a `ch` measure, spacing from a scale, all stored as tokens named by role.
- Motion is `transform` and `opacity`, shaped by a timing curve; keyframes for things that move on their own.
- Mobile first, few breakpoints chosen by the content, fluid before queries, and queries for hover, motion and colour scheme too.
- Organise: tokens, reset, layout, components, utilities, queries. Name by role. Comment the why.
:::
