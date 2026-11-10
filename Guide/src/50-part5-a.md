@part Part V. The Guided Build of the Website
@partsub The real site, one decision and one function at a time

# The Shape of the Whole Site

Time to open the hood. This part walks through the real website, using the real code. Every listing is copied straight from the project's files by the book's build script, with its line numbers, so what you read is exactly what runs. (Line numbers describe the files as they stood when this edition was built. If a file has since changed, the numbers will have drifted, but the explanations still hold.)

## What Is in the Folder

The website is a folder of plain files. There is no server code, no database, no framework to install before you can open a page.

| File | Size (bytes) | What it is |
|---|---|---|
| `portfolio.html` | 45 491 | The home page: a scroll-driven showcase, a selection wheel, and links to every other page. |
| `cfd.html` | 87 861 | Computational fluid dynamics page, with canvas animations. |
| `applied-aerodynamics.html` | 130 085 | Applied aerodynamics, with charts and SVG. |
| `flight-dynamics.html` | 86 284 | The spiral climb and the full stability analysis. |
| `aerostructures.html` | 61 892 | Structures, with its own chart script `fuselage-charts.js`. |
| `propulsion.html` | 716 201 | Propulsion: an interactive isometric turbofan, a flight journey and a cycle console. |
| `mechatronics.html` | | The first robot page: the self-stabilising drone, with a 3D teardown, its PID controller and its graphs. |
| `mechatronics-2.html` | | The second robot page: Patrick, in his kitchen, with a 3D teardown. |
| `downloads.html` | 13 367 | Downloads. |
| `PortfolioHero.jsx` | 17 895 | A React component that no page loads yet (Chapter 40). |
| `Syd Website Assets/` | | Scripts, images and build tools for each page. |
| `Guide/` | | This book. |

## What Each Page Is Built With

This is the honest table, taken from searching the code.

| Technology | Where it is used |
|---|---|
| Plain HTML and hand-written CSS | Every page. |
| Canvas 2D | Charts and animations on the CFD, applied aerodynamics, flight dynamics, propulsion and mechatronics pages. |
| SVG | The block diagram on flight dynamics, the isometric turbofan on propulsion, icons throughout. |
| KaTeX (mathematics) | Aerostructures, applied aerodynamics, CFD and flight dynamics. |
| three.js | The Patrick robot page only, bundled with esbuild. |
| Tailwind CSS (from a CDN) | The portfolio page. |
| React | Only in `PortfolioHero.jsx`, which is not loaded by any page. |
| GSAP | **Nowhere.** |

:::why Telling you what is *not* used
**What it is.** The table says GSAP is used nowhere and React is not wired in.

**Why it is done this way.** A book that pretends the site uses tools it does not use would teach you wrong things about your own project.

**Why it matters.** When you open the code looking for GSAP, you will not waste an evening hunting for it. And it shows you a real choice: this site does its animation by hand, with the techniques of Chapter 6.

**What happens if you do not.** You trust a document that is wrong, and the first thing you check contradicts it.
:::

## The Shared Design Language

Every page shares a look. It comes from a handful of decisions repeated in each stylesheet: a very dark blue ground (`#070a1a`), one violet accent (`#a78bfa`), a second blue for secondary data (`#60a5fa`), a display typeface (Chakra Petch) for headings, Inter for text, and JetBrains Mono for numbers. Because each page defines these once as custom properties (Chapter 3), the look is consistent without any shared stylesheet.

:::why Repeating the palette in each page instead of one shared stylesheet
**What it is.** Each HTML file carries its own `<style>` block with the same `:root` variables.

**Why it is done this way.** Each page is a single self-contained file that works when opened on its own, with no dependency on a file that might not be found.

**Why it matters.** It is simple and robust: no broken links between files, and no "which stylesheet does this page use?".

**What happens if you do not (that is, if you share one file).** You gain one place to change the palette, and you lose the guarantee that every page stands alone. For a larger site, a shared stylesheet is usually the better trade. For a small one that is edited page by page, this works well. It is a trade-off, not a rule.
:::

# The HTML of a Page, Line by Line

We will take the flight dynamics page, since it has everything: a head, a navigation bar, a hero section, content sections, and scripts. Start at the top.

## The Head

@code flight-dynamics.html 3-14

**Lines 4 and 5** are the two lines every page needs: the character set and the viewport (Chapters 9 and 4). **Line 6** is the title, which shows in the browser tab and in search results.

**Lines 7 to 9** load fonts from Google. Look at what is there: two `preconnect` lines before the real request.

:::why preconnect before the font stylesheet
**What it is.** `<link rel="preconnect" ...>` tells the browser to start the connection to a server early.

**Why it is done this way.** Recall Chapter 1: opening a connection costs several round trips before a single byte arrives. Doing that early, in parallel with other work, hides some of the cost.

**Why it matters.** Fonts appear sooner, so the text does not sit invisible or in the wrong typeface for as long.

**What happens if you do not.** Nothing breaks. The page is just a little slower to show the right fonts. (The second `preconnect` has `crossorigin` because font files are fetched in a mode that needs it. Without it the early connection cannot be reused.)
:::

**Line 10** is the KaTeX stylesheet, and **lines 11 to 13** are scripts, each with `defer` (Chapter 2). Notice the *order*: `katex.min.js` first, then `auto-render.min.js`, which needs KaTeX to exist. Deferred scripts run in order, which is why this works. **Line 13** is the page's own stability script. The `%20` is how a space is written in a URL: the folder is called "Flight Dynamics Page".

:::why Version numbers in the KaTeX URLs
**What it is.** `katex@0.16.11` in the address.

**Why it is done this way.** Chapter 8: a pinned URL always returns the same file.

**Why it matters.** A new KaTeX release cannot break the page's mathematics overnight.

**What happens if you do not.** `katex@latest` could one day change how equations are laid out, and the page would change with no edit from you.
:::

## The Style Block

Line 14 opens the `<style>` element. The first rule defines the palette.

@code flight-dynamics.html 15-31

This is Chapter 3's custom properties in action. Look at what the names say: `--bg` and `--bg-raised` are two levels of background, `--text`, `--text-muted` and `--text-faint` are three levels of text, `--border` and `--border-accent` are two kinds of border. The names describe the *role*, not the colour (`--text-muted`, not `--grey`).

:::why Naming variables by role, not by colour
**What it is.** `--accent`, not `--violet`.

**Why it is done this way.** The role stays the same even if the colour changes.

**Why it matters.** If the accent changes from violet to teal, `--accent` is still the right name. Had it been called `--violet`, the code would be lying.

**What happens if you do not.** You end up with variables like `--blue` that hold green, which confuses everyone including you.
:::

**Line 32**, just after, is the reset: `* { margin: 0; padding: 0; box-sizing: border-box; }` (Chapters 4 and 10).

## The Body: Navigation and Hero

@code flight-dynamics.html 314-340

**Line 315** is an empty `<div class="progress">`. It is a decoration that a script fills in, a thin bar at the top that widens as you scroll. **Lines 317 to 320** are the navigation: a link back to the portfolio page and a label saying which section this is. Notice it is a `<nav>`, a landmark (Chapter 3).

**Lines 322 to 338** are the hero. Look at line 325: `<h1>Climbing<br>in <span>circles.</span></h1>`. The `<span>` has no meaning here. It is a *hook* so the stylesheet can colour that one word differently.

:::why One h1 per page
**What it is.** The page has exactly one `<h1>`, in the hero.

**Why it is done this way.** The `<h1>` is the title of the whole page. Everything below is a section of it.

**Why it matters.** A screen reader user hears the page's topic first, and the document's outline makes sense (Chapter 9).

**What happens if you do not.** The outline has two competing "titles", and a screen reader user cannot tell which is the page.
:::

**Lines 327 to 336** are the contents list, and each link points to an `id` further down the page (`#spiral-climb`, `#conditions`, and so on). The browser scrolls to the matching element, with no JavaScript. This uses the *fragment* of the URL you met in Chapter 1.

:::tip
When you want a "jump to section" link, you need only two things: an `id` on the target, and an `<a href="#that-id">`. Everything else is done by the browser, and it works even if every script on the page fails.
:::

## The Main Content

**Line 340** opens `<main>`, and inside are `<article>` elements, one for each topic, each with an `id`. Every `<article>` starts with a `<span class="proj-tag">` (the small "ANALYSIS 02" label) and an `<h2>`. The equations are written in a `<div class="equation">` as `$$ ... $$`, and KaTeX's auto-render script turns them into typeset mathematics once the page has loaded.

:::why Writing equations as text and typesetting them later
**What it is.** The HTML holds the LaTeX source (`$$a = \sqrt{\gamma R T}$$`), and a script draws it.

**Why it is done this way.** Equations as images cannot be searched, scaled or read aloud. As text, they can be.

**Why it matters.** A search engine and a screen reader both get the actual equation text. (KaTeX also writes a hidden MathML version for screen readers.)

**What happens if you do not.** Each equation is a picture file, which is blurry when zoomed and invisible to assistive technology. And if the script fails, the visitor still sees the equation's text and can read it.
:::

# The CSS, Rule by Rule

Chapter 10 taught the ideas. Here they are in a real stylesheet. We will look at the three rules that give the page its character: the equation box, the instrument panel, and the range slider.

## The Equation Box

@code flight-dynamics.html 115-126

This is the card around each equation. `background: var(--bg-raised)` lifts it slightly off the page, and `border` and `border-radius` give it an outline. `overflow-x: auto` is a safety valve: a very wide equation scrolls sideways *inside* the box instead of pushing the whole page wider. `scrollbar-width: none` hides the scrollbar so the box stays tidy. And `position: relative` matters because the two small corner marks, drawn with `::before` and `::after`, are positioned relative to this box.

:::why overflow-x auto on the equation box
**What it is.** The box scrolls horizontally if its content is too wide.

**Why it is done this way.** Equations vary in width, and a phone screen is narrow.

**Why it matters.** The page itself never gets a sideways scrollbar, which is the most annoying mobile layout bug.

**What happens if you do not.** One long equation makes the whole page wider than the screen, and everything else on the page appears shrunk or cut off.
:::

## The Instrument Panel

@code flight-dynamics.html 131-147

Every interactive instrument sits in a `.panel`. It has a gradient background (`linear-gradient(180deg, #131a3f, var(--bg-raised))`), a violet border (`--border-accent`), and `overflow: hidden`. That last one has a job: it clips the panel's children to the rounded corners, so a canvas inside cannot poke out at the corners.

:::why overflow hidden on a rounded panel
**What it is.** `overflow: hidden` together with `border-radius`.

**Why it is done this way.** A child element's square corners do not follow its parent's rounded ones unless the parent clips.

**Why it matters.** The panel looks like one clean rounded card.

**What happens if you do not.** The canvas's square corners stick out past the panel's rounded ones, and it looks sloppy.
:::

## The Slider

@code flight-dynamics.html 164-176

Sliders are notoriously hard to style, because browsers draw them differently. The first step, `-webkit-appearance: none; appearance: none;`, switches off the browser's own look so you can draw your own. The track is a thin bar; the thumb (the grabbable part) is drawn by two pseudo-elements, one for Chrome and Safari (`::-webkit-slider-thumb`) and one for Firefox (`::-moz-range-thumb`). The thumb is a small square rotated 45 degrees, a diamond that matches the diamond on the page's headings.

:::why Two thumb rules for one slider
**What it is.** The same styling written twice, with browser-specific names.

**Why it is done this way.** There is no standard name for the slider thumb that every browser accepts, so each engine has its own.

**Why it matters.** Without both, the slider looks right in one browser and default-grey in another.

**What happens if you do not.** Visitors on the browser you did not test see an ugly, mismatched control.
:::

## Responsive Behaviour

@code flight-dynamics.html 297-312

Two media queries at 720 pixels handle the phone case. The nav status label is hidden (it is only decoration), the canvases get shorter, and the two-column rows collapse to one column. The panel's controls need no query, because they use `repeat(auto-fit, minmax(...))` (Chapter 4).

:::tip
Hiding something with `display: none` on a phone does not stop it being downloaded. If it is an image, the cost is still paid. Use it for decoration, not as a way to save data.
:::
