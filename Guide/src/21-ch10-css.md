# CSS: The Look

If HTML is the skeleton, CSS is everything that makes the skeleton look like a person: skin, clothes, posture. CSS has a reputation for being confusing, and the reputation is deserved, but only because people try to memorise it instead of understanding three ideas: the cascade, the box, and layout. You met all three in Part I. This chapter turns them into working habits.

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
| **Cascade** | The procedure that settles conflicts between rules. |
| **Specificity** | The score that decides which selector wins. |
| **Custom property** | A variable, such as `--accent`, read with `var()`. |
| **Media query** | A rule that applies only if a condition (like screen width) is true. |

## How the Browser Reads Your Rules

For every element, the browser collects every rule that matches it, throws away the losers (using the cascade from Chapter 3), and is left with one value per property. Then it fills in anything still missing by **inheritance** (from the parent) or the property's **default**. Understanding this order is the whole game. When a style "does not work", it is almost always because another rule won, or because the selector did not match.

:::tip
Right-click the element, choose Inspect, and look at the Styles panel. It lists the matching rules from strongest to weakest and **crosses out the ones that lost**. That crossed-out line is usually the answer.
:::

## Writing Selectors Well

The most useful selectors are simple: a **class** (`.card`), an **element** (`p`), a **descendant** (`.card p`), a **child** (`.card > p`), and states (`.button:hover`).

:::why Styling with classes, not IDs or deep chains
**What it is.** Giving elements a class (`class="card"`) and writing `.card { ... }`, instead of `#main-card` or `div.wrapper > div > ul > li:nth-child(3)`.

**Why it is done this way.** A class has middling specificity (0,1,0), and it can be reused anywhere.

**Why it matters.** Rules stay easy to override, and the same class can be on many elements.

**What happens if you do not.** An ID (specificity 1,0,0) beats nearly everything, so you need an even more specific rule to override it, and then another. Long chains also break the moment the HTML structure changes.
:::

## The Box and Layout

Everything is a box (Chapter 4). Start every stylesheet with `* { box-sizing: border-box; }`. Use **Flexbox** for one-dimensional arrangements (a row of buttons) and **Grid** for two-dimensional ones (a gallery).

```
.row { display: flex; gap: 1rem; align-items: center; justify-content: space-between; }
.gallery { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem; }
```

:::why gap instead of margins between items
**What it is.** Using `gap` to space children in a flex or grid container.

**Why it is done this way.** `gap` puts space *between* items only, not before the first or after the last.

**Why it matters.** There is no stray margin at the end, no special case for the last item, and no need to remember to remove it.

**What happens if you do not.** You put `margin-right` on every item and then spend time removing it from the last one, and you forget when the layout wraps.
:::

## Colour, Type and Space

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

:::why A font stack with system-ui at the end
**What it is.** `font-family: 'Inter', system-ui, sans-serif` is a list, not a single choice.

**Why it is done this way.** The browser tries each in turn and uses the first one it has. If the chosen web font has not loaded yet, or fails, it falls back.

**Why it matters.** The page is readable immediately in a sensible font instead of showing blank text or a clumsy default.

**What happens if you do not.** If the one font you named fails to load, the browser picks its own default (often Times), and your design collapses.
:::

:::why line-height of about 1.5 to 1.7 for body text
**What it is.** `line-height: 1.7` is a multiple of the font size, with no unit.

**Why it is done this way.** A unitless number scales with each element's own font size.

**Why it matters.** Lines of text need breathing room to be read comfortably. Tight lines are tiring and hard to follow.

**What happens if you do not.** Writing `line-height: 24px` fixes the height, and when a bigger heading inherits it, the lines crash into each other.
:::

## Pseudo-classes and Transitions

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

## Practice Problems

:::problems
1. Rank by specificity, least to most: `p`, `.a .b`, `#x`, `p.a`, `a:hover`.
2. A paragraph is 300 px wide with `padding: 20px; border: 2px solid`. With `border-box` what is its content width? With `content-box` what is its total width?
3. Write a rule that turns every link inside `<nav>` red when hovered, and gives it a visible keyboard focus.
4. With `grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 10px;` in a container 500 px wide, how many columns, and how wide is each?
5. Rewrite this using custom properties so the two colours live in one place: `h1 { color: #e11d48; } a { border-color: #e11d48; background: #fff1f2; }`.
6. Why is `line-height: 1.6` better than `line-height: 24px` on a body whose headings are different sizes?
:::

:::answers
**Chapter 10 practice problems.**

1. `p` (0,0,1); `a:hover` (0,1,1); `p.a` (0,1,1) ties with `a:hover` (later one wins); `.a .b` (0,2,0); `#x` (1,0,0). Order: `p`, then `a:hover` and `p.a` (tied), then `.a .b`, then `#x`.
2. `border-box`: content width is 300 − 2 × 20 − 2 × 2 = 256 px. `content-box`: total width is 300 + 40 + 4 = 344 px.
3. `nav a:hover { color: red; }` and `nav a:focus-visible { outline: 2px solid red; outline-offset: 2px; }`.
4. n columns fit if 150n + 10(n − 1) ≤ 500, so 160n ≤ 510 and n = 3. Gaps take 20, leaving 480, so each column is 160 px.
5. `:root { --rose: #e11d48; --rose-bg: #fff1f2; } h1 { color: var(--rose); } a { border-color: var(--rose); background: var(--rose-bg); }`
6. A unitless line-height scales with each element's own font size, so large headings get proportionally large line spacing. A fixed 24 px makes big headings' lines overlap.
:::
