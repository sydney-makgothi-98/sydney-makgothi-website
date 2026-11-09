:::check
1. State in one sentence the job of each of HTML, CSS and JavaScript.
2. Why should a clickable control that performs an action be a `<button>` and not a styled `<div>`?
3. In what order does the cascade settle a conflict between rules?
4. Compute the specificity of `nav ul li.active a:hover` and of `#menu .item`. Which is more specific?
5. Give an example of an inherited property and a property that is not inherited.
6. What is progressive enhancement, and what problem does it solve?
:::

:::problems
1. Rank these selectors from least to most specific: `div p`, `.card`, `#card`, `div.card p.lead`, `*`, `a:hover`.
2. An element is matched by `.a { color: red; }` followed later by `.b { color: green; }`, and the element has both classes. What colour is its text? What changes if the order of the two rules is reversed? What changes if the first rule is `.a.a { color: red; }`?
3. Rewrite the following so that the colours live in custom properties defined once on `:root`, and the two rules reuse them.

```
.title { color: #a78bfa; border-bottom: 2px solid #a78bfa; }
.badge { background: #a78bfa; color: #070a1a; }
```

4. A script contains `element.style.color = isActive ? 'red' : 'grey'` executed on every frame of an animation. Explain what is wrong with this design in terms of the three jobs, and rewrite it so that each language does its own work.
5. For each of these tasks, say which language should do it: (a) making the heading larger on narrow screens; (b) opening a menu when a button is pressed; (c) marking a block of text as a quotation; (d) fading a panel in over 300 milliseconds; (e) calculating a value from two sliders.
6. Write a page of at least five lines of HTML containing a heading, a paragraph and a button. Add a stylesheet that colours the heading using a custom property, and a script that adds the class `done` to the paragraph when the button is clicked. State where each of the three jobs lives.
:::

:::answers
**Check Your Knowledge.**

1. HTML describes the structure and meaning of the content; CSS describes how it looks and where it sits; JavaScript describes how the page behaves and responds.
2. A real button is focusable and operable by keyboard, is announced as a button by assistive technology, and fires activation events for Space and Enter, all without code. A `<div>` has none of that unless it is rebuilt by hand.
3. By importance (`!important` first), then by specificity, then by source order (later wins).
4. `nav ul li.active a:hover` has no IDs, two classes or pseudo-classes (`.active` and `:hover`), and four elements (`nav`, `ul`, `li`, `a`): (0, 2, 4). `#menu .item` has one ID and one class: (1, 1, 0). The second is more specific because the first number decides first.
5. Inherited: `color`, `font-family`. Not inherited: `margin`, `border`, `padding`.
6. Building a page in layers: HTML content first, then CSS, then JavaScript. If a layer fails to load, the page degrades to the one beneath and stays usable.

**Review Problems.**

1. `*` (0,0,0); `div p` (0,0,2); `a:hover` (0,1,1); `.card` (0,1,0); `div.card p.lead` (0,2,2); `#card` (1,0,0). Ranked from least: `*`, `div p`, `.card`, `a:hover`, `div.card p.lead`, `#card`. (Note that `a:hover` at (0,1,1) is more specific than `.card` at (0,1,0), and `div p` at (0,0,2) is less than `.card`.)
2. Both rules have the same specificity (0,1,0), so the later one wins: green. Reversed, red. With `.a.a` the first rule has specificity (0,2,0) and wins whatever the order: red.
3. 
```
:root { --accent: #a78bfa; --ink: #070a1a; }
.title { color: var(--accent); border-bottom: 2px solid var(--accent); }
.badge { background: var(--accent); color: var(--ink); }
```
4. The script is deciding appearance, which is CSS's job, and doing it every frame. Better: the script adds or removes a class (`element.classList.toggle('active', isActive)`) only when the state changes, and the stylesheet defines `.active { color: red; }` and the default grey.
5. (a) CSS, with a media query. (b) JavaScript. (c) HTML (`<blockquote>`). (d) CSS, with a transition. (e) JavaScript.
6. A correct answer has the heading, paragraph and button in HTML; `:root { --c: ...; } h1 { color: var(--c); }` in CSS; and `button.addEventListener('click', () => p.classList.add('done'))` in JavaScript, with a rule for `.done` in the CSS.
:::
