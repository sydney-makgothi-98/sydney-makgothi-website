# Three Languages, Three Jobs

A web page is written in three languages at once. That sounds like a punishment, but it is actually a gift, as long as you keep their jobs apart. **HTML** says what a thing *is*. **CSS** says what it *looks like*. **JavaScript** says what it *does*. Think of a restaurant: the menu says what is on offer, the decor sets the mood, and the waiter actually brings you the food. You would not ask the waiter to repaint the walls.

When each language sticks to its own job, a page is easy to change. You can recolour the whole site without touching its structure, or give a button new behaviour without touching how it looks. When the jobs get mixed, every change is a gamble. This chapter explains each job, and then the thing that connects them: the document tree.

:::objectives
- State the job of each of the three languages in one sentence each.
- Explain what makes an element *semantic* and why a real `<button>` beats a styled `<div>`.
- Settle a fight between CSS rules using importance, specificity and source order.
- Use inheritance and custom properties to say a thing once.
- Find, change and listen to elements from JavaScript, and explain why scripts should set classes rather than colours.
- Describe progressive enhancement and spot a page that breaks it.
:::

@figure three-jobs The three languages meet in the document tree. HTML builds it, CSS describes how its nodes look, and JavaScript reads and changes it.

## Structure: HTML

HyperText Markup Language describes the *meaning and organisation* of your content. It does not describe looks, even though it is tempting to think a heading is "the big bold text". A heading is a statement: *this text introduces a section*. The browser happens to draw headings big by default, but a screen reader announces them as headings, a search engine uses them to understand your page, and your stylesheet can make them any size you like.

An HTML document is built from **elements**. An element usually has a start tag, some content, and an end tag, and the start tag can carry **attributes**, which are name-and-value pairs that configure it.

```
<a href="flight-dynamics.html" class="chip">Flight dynamics</a>
 \_/ \__________________________/ \_________/ \_____________/ \__/
 tag        attribute href         attribute      content        end
```

Elements come in families. **Block** elements (`<p>`, `<h1>`, `<div>`) start on a new line and stretch across the available width. **Inline** elements (`<a>`, `<em>`, `<span>`) sit inside a line of text and take only the room they need. **Replaced** elements (`<img>`, `<canvas>`) are boxes whose content comes from somewhere else.

#### Semantic elements

HTML has elements whose names carry meaning: `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`. A good page uses these instead of a heap of anonymous `<div>` tags.

:::why Using a button for a button
**What it is.** When something performs an action, you write `<button>`, not a `<div>` that you have styled to look like one.

**Why it is done this way.** A real button comes with a lot of behaviour that you cannot see: it can be reached with the Tab key, pressed with Space or Enter, and announced by a screen reader as "button".

**Why it matters.** Those free behaviours are exactly what keyboard users and blind users rely on.

**What happens if you do not.** A styled `<div>` looks right and works for mouse users, and is completely dead to everyone else. You would have to rebuild all that behaviour by hand, and most people forget to.
:::

## Presentation: CSS

Cascading Style Sheets describe how things look and where they go. A stylesheet is a list of **rules**. Each rule has a **selector** (which elements it applies to) and a **declaration block** (what to do to them).

```
.panel-head .t {            /* selector: an element of class t inside class panel-head */
    color: var(--accent);   /* declaration: property, then value */
    letter-spacing: 0.16em;
}
```

The important word is *cascading*. Lots of rules can apply to the same element, and they will not always agree. The cascade is the referee. It settles disagreements in this order: first by **importance** (a declaration marked `!important` beats one that is not), then by **specificity**, then by **order** (a later rule beats an earlier one of equal specificity). Nearly every baffling CSS bug is a case of not knowing which rule the referee picked.

@figure cascade-order The cascade as a sequence of tie-breaks. The referee moves right only when the rules are still tied. Cascade layers, the step between importance and specificity, are covered in Part IV.

#### Specificity

Specificity is a score for a selector, written as three numbers (a, b, c). Count the **ID selectors** (like `#header`) for a. Count the **class selectors, attribute selectors and pseudo-classes** (like `.panel`, `[type=range]`, `:hover`) for b. Count the **element selectors** (like `p`, `div`) for c. Compare the scores from left to right. One ID beats any number of classes, and one class beats any number of elements.

@figure specificity Four selectors and their scores. `.panel p` and `a:hover` tie at (0, 1, 1), so between those two the later one in the file wins.

@include blocks/ch03-w1.md

:::warning
Do not fight specificity by piling on more selectors or reaching for `!important`. That is how you end up with a stylesheet nobody dares touch. Keep selectors flat (a single class, if you can) and let source order do the rest.
:::

#### Inheritance and custom properties

Some properties, like `color` and `font-family`, are **inherited**: leave them unset on an element and it uses its parent's value. Others, like `border` and `margin`, are not. Inheritance is why you can set the typeface once on `body` and the whole page follows. **Custom properties**, also called CSS variables, take the idea further. A name starting with two hyphens holds a value that any rule can read with `var()`.

```
:root { --accent: #a78bfa; --radius: 10px; }
.panel { border-radius: var(--radius); border-color: var(--accent); }
```

:::why Putting the colours in custom properties
**What it is.** Defining the palette once at the top (`--accent: #a78bfa`) and using `var(--accent)` everywhere else.

**Why it is done this way.** Each colour then lives in exactly one place.

**Why it matters.** Changing the accent colour of a whole page becomes a one-line edit. And because custom properties follow the cascade, one component can override a value locally and affect only itself.

**What happens if you do not.** The same colour code gets copied into fifty rules. To change it you must find every copy, and you will miss one, so the site ends up with two slightly different purples. Every page of this website defines its palette this way, in one block at the top.
:::

## Behaviour: JavaScript

JavaScript is a general-purpose programming language that browsers can run. On a page, its job is to *respond*: to a click, a key press, data arriving, time passing. It is the only one of the three languages that can make decisions, repeat things and remember things. That power is exactly why you should use it only for behaviour.

:::why Adding a class instead of setting colours in the script
**What it is.** When a button becomes active, the script does `button.classList.add('active')` and the stylesheet decides what `.active` looks like. It does *not* do `button.style.color = 'red'`.

**Why it is done this way.** Looks are CSS's job. The script only reports a *fact* ("this button is active").

**Why it matters.** A designer can restyle `.active` without touching any JavaScript, and the browser can optimise a class change better than a pile of inline styles.

**What happens if you do not.** The appearance ends up scattered between the stylesheet and a dozen scripts, and nobody can tell where a colour comes from.
:::

## The Document Tree Connects Them

The three languages meet in the **document tree**, the DOM from Chapter 2. HTML *creates* the tree. CSS *describes* it, and its selectors are queries against it. JavaScript *changes* it, and so changes the page. The browser gives JavaScript functions for finding nodes and altering them.

```
const title = document.querySelector('h1');       // find the first <h1>
title.textContent = 'Meet Patrick';                // change its text
title.classList.add('highlight');                   // hand the styling to CSS
document.body.append(document.createElement('hr')); // add a new node to the tree
```

:::why querySelector takes a CSS selector
**What it is.** `document.querySelector('h1')` finds an element using the very same selector language you use in a stylesheet.

**Why it is done this way.** The designers of the web did not want you to learn two different ways of pointing at elements.

**Why it matters.** Every selector skill you have from CSS works in JavaScript, and the other way round.

**What happens if you do not.** Older ways of finding elements (`getElementById` and friends) each have their own rules, and mixing them is how bugs creep in. If nothing matches, `querySelector` returns `null`, and calling a method on `null` is one of the most common errors you will ever see.
:::

#### Events

The tree can also *announce* things. When the user clicks, the browser makes an event object and delivers it to the element that was clicked. A script that has asked to be told receives it.

```
const button = document.querySelector('#play');
button.addEventListener('click', () => {
    document.body.classList.toggle('paused');   // behaviour: flip a class
});
```

:::why addEventListener instead of waiting in a loop
**What it is.** You hand the browser a function and say "call this when a click happens".

**Why it is done this way.** JavaScript on a page can only do one thing at a time (Chapter 5). If your code stood around checking "has it been clicked yet?", nothing else on the page could run.

**Why it matters.** The browser does the waiting and calls you only when something happens, so the page stays responsive.

**What happens if you do not.** A polling loop freezes the whole page.
:::

:::worked Untangling three jobs that got mixed
A beginner's page contains this line. Rewrite it so that each language does its own job, and say what each rewrite buys.

```
<div style="color:red; cursor:pointer" onclick="this.style.color='green'">Start</div>
```

**Step 1. What is it?** It is something you click to start an action. That is a button, so the HTML job is `<button>`. A `<div>` says nothing, and cannot be reached with the keyboard.

**Step 2. The looks.** The red colour and the pointer cursor are looks, so they move to the stylesheet under a class. The green "done" look is a second state, so it gets a second class.

**Step 3. The behaviour.** The click should record a fact ("it has started"), not paint a colour. The script toggles the class and the stylesheet decides what the class looks like.

```
<button class="start">Start</button>

.start { color: red; }                /* a real button already shows a pointer and takes focus */
.start.started { color: green; }

document.querySelector('.start').addEventListener('click', e => e.target.classList.add('started'));
```

**Step 4. What it bought.** Keyboard users can now press Space to start it. A designer can change "started" from green to a tick mark without touching the script. And the script no longer knows or cares about colours, so it keeps working when the design changes.
:::

## Progressive Enhancement

A well-built page works in layers. Layer one is the HTML alone: content, in the right order, with the right meaning, readable without any styling or scripting. Layer two adds CSS, which makes it a designed page. Layer three adds JavaScript, which makes it an interactive page. This is called **progressive enhancement**.

:::why Building the page in layers
**What it is.** Making sure the page still works if a later layer fails.

**Why it is done this way.** Networks drop, scripts have bugs, and old browsers exist.

**Why it matters.** If a script fails to load, the visitor gets the explanation and the equations instead of a blank screen. Many pages on this website follow the pattern in miniature: the explanation is HTML, and the instruments are canvases that a script fills in.

**What happens if you do not.** One failed script takes down the whole page, and the visitor sees nothing at all.
:::

:::summary
- **HTML** says what a thing is, **CSS** says what it looks like, **JavaScript** says what it does. Keep the jobs apart and every change stays small.
- Semantic elements carry behaviour you cannot see: focus, keyboard handling, announcements. Use them.
- The cascade settles fights by importance, then specificity (a, b, c), then source order. Keep selectors flat and let order do the work.
- Inherited properties flow down the tree; custom properties let you name a value once and use it everywhere.
- Scripts find elements with CSS selectors, change them by adding classes, and respond to events with listeners.
- Build in layers: content first, then style, then behaviour, so a failure in a later layer never hides the earlier ones.
:::
