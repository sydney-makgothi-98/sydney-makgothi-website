@part Part III. Five Guided Projects
@partsub From a first page to a 3D model you can take apart

# Project 1: A Landing Page (HTML and CSS)

**Level:** beginner. **You will use:** Chapters 3, 4, 9 and 10. **You will finish with:** a responsive one-page site with a header, a hero, a row of cards and a footer.

This is the project where you stop reading and start building. Do not copy and paste the code. Type it. Your fingers learn things your eyes skip.

## Step 1: The Skeleton and the Content

Create a folder called `landing` with an `index.html` and a `style.css`. In `index.html`:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Name | Engineer</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header class="top">
        <a class="brand" href="#">Your Name</a>
        <nav><a href="#work">Work</a> <a href="#contact">Contact</a></nav>
    </header>
    <main>
        <section class="hero">
            <h1>I design things that fly.</h1>
            <p>Aerospace engineering student. I like wind tunnels, robots and good coffee.</p>
        </section>
        <section id="work" class="cards">
            <article class="card"><h2>Wing design</h2><p>A small wing, a big lesson.</p></article>
            <article class="card"><h2>A robot</h2><p>It picks things up. Mostly.</p></article>
            <article class="card"><h2>A simulation</h2><p>Numbers that move.</p></article>
        </section>
    </main>
    <footer id="contact">&copy; 2026 Your Name</footer>
</body>
</html>
```

:::why Writing the content before any styling
**What it is.** You write the HTML first and look at it with no CSS at all.

**Why it is done this way.** This is progressive enhancement (Chapter 3). The unstyled page is your first layer.

**Why it matters.** If the page reads sensibly as plain text (a heading, a paragraph, three cards, a footer), the structure is right. Any problem you find now is a structure problem, which is cheap to fix.

**What happens if you do not.** You style a broken structure, and the CSS becomes a pile of workarounds for HTML mistakes.
:::

Open `index.html` in your browser. It will look like a boring document, and that is exactly right.

## Step 2: Reset and Variables

Start `style.css` with the habits from Chapters 3 and 4.

```
* { box-sizing: border-box; margin: 0; padding: 0; }

:root {
    --bg: #0e1230;
    --text: #e6e8f5;
    --muted: #9aa0c3;
    --accent: #a78bfa;
    --radius: 12px;
}

body {
    background: var(--bg);
    color: var(--text);
    font-family: system-ui, sans-serif;
    line-height: 1.7;
}
a { color: var(--accent); }
```

:::why Removing the default margins with the reset
**What it is.** `margin: 0; padding: 0` on everything.

**Why it is done this way.** Browsers give headings, paragraphs and the body their own margins, and the amounts differ slightly between browsers.

**Why it matters.** You start from a blank sheet and add spacing deliberately, so the page looks the same everywhere.

**What happens if you do not.** You fight invisible margins, and something is always 8 pixels off.
:::

## Step 3: Layout

```
.top { display: flex; justify-content: space-between; align-items: center; padding: 1rem 5%; }
.top nav { display: flex; gap: 1.25rem; }
.brand { font-weight: 700; text-decoration: none; color: var(--text); }

.hero { padding: 5rem 5% 3rem; max-width: 900px; margin: 0 auto; }
.hero h1 { font-size: clamp(2.2rem, 6vw, 4rem); line-height: 1.05; }
.hero p { margin-top: 1rem; color: var(--muted); max-width: 52ch; }

.cards { display: grid; gap: 1rem; padding: 2rem 5%;
         grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }
.card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1);
        border-radius: var(--radius); padding: 1.25rem; }
footer { text-align: center; padding: 2rem; color: var(--muted); }
```

:::why max-width in ch units on the paragraph
**What it is.** `max-width: 52ch` limits the paragraph to about 52 characters wide. A `ch` is roughly the width of the digit zero in the current font.

**Why it is done this way.** Long lines of text are tiring to read, because your eye loses its place going back to the start of the next line.

**Why it matters.** Between 45 and 75 characters per line is comfortable for most people.

**What happens if you do not.** On a wide monitor the paragraph runs the full width of the screen and becomes a wall of text.
:::

## Step 4: Hover, Focus and Phone

```
.card { transition: transform 150ms ease, border-color 150ms ease; }
.card:hover { transform: translateY(-3px); border-color: var(--accent); }
a:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }

@media (max-width: 600px) {
    .top { flex-direction: column; gap: 0.5rem; }
}
```

Now test. Drag the window narrow: the cards should stack by themselves (the grid rule), and the header should stack at 600 pixels. Press Tab: every link should show a ring.

:::why Moving the card with transform
**What it is.** `transform: translateY(-3px)` lifts the card on hover.

**Why it is done this way.** As Chapter 2 explained, transform needs no layout.

**Why it matters.** The hover is smooth and cheap.

**What happens if you do not.** Using `margin-top: -3px` makes the whole page reflow on every hover, and neighbouring cards jump.
:::

:::quiz Project 1
1. What would happen to the card layout if you removed `box-sizing: border-box`?
2. Why is the `<meta name="viewport">` line there?
3. Which rule makes the cards stack on a narrow screen, and why does it not need a media query?
4. Why use `rem` and `clamp` for the heading instead of `px`?
5. Which element is the landmark that a screen reader user would jump to for the main content?
:::

:::answers
**Project 1 quiz.**

1. Widths would no longer include padding and border, so the cards would be wider than their grid cells and might overflow or crowd each other.
2. It makes a phone use its true width, so the layout and media queries respond to the real screen size.
3. `grid-template-columns: repeat(auto-fit, minmax(220px, 1fr))`: the browser works out how many columns of at least 220 px fit, so fewer fit as the container narrows.
4. `rem` respects the visitor's text-size setting, and `clamp` lets the size scale smoothly between a minimum and a maximum without media queries.
5. `<main>`.
:::

# Project 2: A Filterable Gallery (JavaScript and State)

**Level:** beginner to intermediate. **You will use:** Chapters 5, 11 and 13. **You will finish with:** a gallery where clicking a category chip filters the cards.

The point of this project is not the gallery. It is to feel the idea from Chapter 5 in your hands: **keep the state in one place and draw the screen from it.**

## Step 1: The Data and the State

Rather than writing the cards into HTML, keep them as data.

```
const items = [
    { id: 1, title: 'Wing profile', tag: 'aero' },
    { id: 2, title: 'Delta wing',   tag: 'aero' },
    { id: 3, title: 'Line follower', tag: 'robots' },
    { id: 4, title: 'Claw gripper',  tag: 'robots' },
    { id: 5, title: 'Orbit plot',    tag: 'sim' },
];
const state = { tag: 'all' };
```

:::why Starting with data
**What it is.** An array of objects and a `state` object, before any HTML is touched.

**Why it is done this way.** The cards are a *consequence* of the data and the current filter (Chapter 5).

**Why it matters.** Adding a sixth item means adding one line of data. Nothing else changes.

**What happens if you do not.** You hand-write HTML for each card, and then have to remember to update it in two places when something changes.
:::

## Step 2: The Page

```
<div id="chips">
    <button data-tag="all" class="on">All</button>
    <button data-tag="aero">Aero</button>
    <button data-tag="robots">Robots</button>
    <button data-tag="sim">Simulation</button>
</div>
<div id="grid"></div>
```

## Step 3: One Function That Draws Everything

```
const grid = document.querySelector('#grid');
const chips = document.querySelector('#chips');

function render() {
    const shown = items.filter(i => state.tag === 'all' || i.tag === state.tag);
    grid.replaceChildren(...shown.map(i => {
        const card = document.createElement('article');
        card.className = 'card';
        card.textContent = i.title;                 // text, never innerHTML (Chapter 8)
        return card;
    }));
    chips.querySelectorAll('button').forEach(b => {
        b.classList.toggle('on', b.dataset.tag === state.tag);
    });
}
```

:::why One render function that redraws the cards
**What it is.** `render()` rebuilds the grid and the chip highlights from `state`, every time.

**Why it is done this way.** Chapter 5's rule: *screen = render(state)*.

**Why it matters.** There is no "when this chip is clicked, hide cards one and two and show card three" code, and so no way for the screen to disagree with the state.

**What happens if you do not.** Filtering "robots" and then "aero" leaves leftovers from the first filter, because your code only handled "hide" and not "restore".
:::

## Step 4: One Listener on the Parent

```
chips.addEventListener('click', e => {
    const button = e.target.closest('button');
    if (!button) return;
    state.tag = button.dataset.tag;
    render();
});
render();
```

This is **event delegation** (Chapter 5): one listener serves all four chips, and would serve a fifth if you added one later.

:::quiz Project 2
1. Which of `items`, `state`, and the cards on screen is the "source of truth"?
2. Why does `render()` use `textContent` and not `innerHTML`?
3. After clicking "Robots", the data says the filter is `robots`. How many cards are shown, and which?
4. What is the benefit of one click listener on `#chips` instead of one per button?
5. What would you change to add a "Reset" chip that shows everything?
:::

:::answers
**Project 2 quiz.**

1. `items` and `state` together. The cards on screen are derived from them.
2. Titles are treated as plain text, so a title containing `<` or a script cannot be executed (Chapter 8's XSS lesson).
3. Two cards: "Line follower" and "Claw gripper" (the two with tag `robots`).
4. Less memory, and it still works for chips added later, because their clicks bubble up to the same parent.
5. Add `<button data-tag="all">Reset</button>`. Nothing in the JavaScript changes, because `all` already shows every item.
:::
