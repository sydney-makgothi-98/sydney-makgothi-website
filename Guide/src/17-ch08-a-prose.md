# Quality: Access, Speed, Safety and Tools

A page that works on your machine, for your eyes, over your fast connection, is a draft. Quality means it also works for the visitor who cannot see colour well, for the one who cannot use a mouse, on a phone with a weak processor, over a poor connection, and without handing a stranger a way to harm another visitor. This last chapter of Part I covers four parts of quality that every professional page needs, and then the tools that make them practical to keep.

:::objectives
- Name the four WCAG principles and apply the habits that satisfy most of them: the right element, text alternatives, keyboard use, contrast, motion.
- Compute a contrast ratio from two colours.
- Read the three Core Web Vitals and say which habits move each one.
- Explain cross-site scripting and prevent it with `textContent` and pinned third-party versions.
- Name the four kinds of tool a web developer keeps at hand.
:::

## Accessibility

**Accessibility** (often shortened to *a11y*, because there are eleven letters between the a and the y) means making a page usable by people with a wide range of abilities: people who are blind and use a screen reader, people with low vision or colour blindness, people who cannot use a mouse, people with hearing loss, people with motor or cognitive difficulties, and people who are only *temporarily* affected, like someone with a broken arm or someone squinting at a phone in sunlight. There is a plain practical case too: features that help the most-affected visitors help everybody, and an accessible page is usually better organised and better ranked by search engines.

The international standard is the **Web Content Accessibility Guidelines (WCAG)**, built on four principles: content must be **perceivable**, **operable**, **understandable** and **robust**.

#### Use the right element

As Chapter 3 said, native elements come with behaviour assistive technology understands. Use `<button>` for actions, `<a>` for going somewhere, `<nav>`, `<main>` and `<header>` for regions, headings in order so a screen-reader user can skip through the page by its headings, and a `<label>` for every form control.

#### Text alternatives

An image that carries meaning needs a text alternative in the `alt` attribute. A decorative image gets an empty `alt=""` so it is skipped. A canvas has nothing a screen reader can read, so a canvas that shows a chart should have an `aria-label` that says what it shows.

```
<canvas id="c-speed" role="img"
        aria-label="Speed against time for a full-throttle start, with and without rubber bands"></canvas>
```

:::why Labelling canvases
**What it is.** A `role="img"` and an `aria-label` on every canvas.

**Why it is done this way.** A canvas is just pixels. To assistive technology it is a black box unless you describe it.

**Why it matters.** A blind visitor hears "Speed against time for a full-throttle start" and knows what is there, instead of hearing nothing.

**What happens if you do not.** A third of the content of some pages is invisible to some of your visitors.
:::

#### Keyboard use

Everything you can do with a mouse must be possible with a keyboard. Native controls handle most of it. For custom things, make them focusable (`tabindex="0"`) and respond to Enter and Space.

:::warning
Never remove the focus outline (`outline: none`) without replacing it with something equally visible. A keyboard user relies on that outline to know where they are. Taking it away is like removing the cursor from a text editor.
:::

#### Colour and contrast

Text must stand out from its background. WCAG measures this with the **contrast ratio** of the relative luminances L₁ (the lighter colour) and L₂ (the darker):

**contrast = (L₁ + 0.05) / (L₂ + 0.05)**

Relative luminance comes from the red, green and blue parts. Each part c (between 0 and 1) is first made linear: c_lin = c / 12.92 if c ≤ 0.03928, otherwise ((c + 0.055) / 1.055)^{2.4}. Then **L = 0.2126 R_lin + 0.7152 G_lin + 0.0722 B_lin**, where the weights reflect how much more sensitive the eye is to green. WCAG level AA asks for at least **4.5 : 1** for normal text, and 3 : 1 for large text (about 18 points, or 14 bold) and for the outlines of controls.

@figure srgb-linear Why the formula starts by "making linear". Screens store colour on a curve that matches the eye, so a channel value of 0.5 emits only about a fifth of the light of 1.0. The luminance formula undoes that curve before it adds the channels up.

@include blocks/ch08-w1.md

:::why Measuring contrast instead of judging by eye
**What it is.** Computing the ratio for every text colour, rather than deciding "that looks fine".

**Why it is done this way.** A designer on a good monitor in a dim room sees things that a visitor on a cheap phone in sunlight cannot.

**Why it matters.** It found a real problem on this very website: the faint grey used for secondary text scores only 3.54, below the 4.5 limit.

**What happens if you do not.** Text that is readable to you is unreadable to people with low vision, older eyes, or bright light, and you never find out.
:::

:::worked Fixing the faint grey
The faint text colour `#5f668f` scores 3.54 against the background `#070a1a`. Find a replacement in the same family that passes 4.5 : 1, changing it as little as possible.

**Step 1. What the ratio needs.** The background's luminance is 0.0034, so the ratio is (L + 0.05) / 0.0534. For 4.5 we need L + 0.05 ≥ 0.240, so L ≥ 0.190. The current colour has L = 0.139.

**Step 2. Lighten along the same hue.** Add the same amount to each channel so the colour keeps its blue-grey character. Try `#7c84a8`: the channels are 124, 132, 168. Linearised: 0.201, 0.230, 0.391. L = 0.2126 × 0.201 + 0.7152 × 0.230 + 0.0722 × 0.391 = 0.0427 + 0.1645 + 0.0282 = 0.235.

**Step 3. The ratio.** (0.235 + 0.05) / 0.0534 = 5.36. It passes, with room to spare.

**Step 4. Could it be subtler?** `#7279a0` sits between the two; the same arithmetic gives 4.65, which also passes, only just. The point of the method is that you do not have to guess: each candidate gives a number, and the first one over 4.5 is the answer. On this website the faint colour is used for hints and decorations, which is why the site's authors left it as it is for decoration and would raise it for any text a visitor must read.
:::

#### Motion and testing

As Chapter 6 explained, honour `prefers-reduced-motion`, and avoid anything that flashes more than three times a second. Automated checkers (Lighthouse, axe) find perhaps a third of problems. The rest you find by trying: put the mouse aside and use the Tab key; turn on a screen reader and listen; zoom to 200%; look at the page on a small phone.

## Performance

Performance is how fast a page appears and how smoothly it responds. Chapter 1 gave the arithmetic of loading, and Chapter 2 the budget of a frame. Google's **Core Web Vitals** sum up the experience in three numbers.

| Metric | Measures | Good |
|---|---|---|
| **LCP**, largest contentful paint | How long until the biggest visible element appears | 2.5 s or less |
| **INP**, interaction to next paint | How long the page takes to respond to a click or key | 200 ms or less |
| **CLS**, cumulative layout shift | How much the layout jumps around while loading | 0.1 or less |

@figure vitals-timeline The three vitals on the timeline of one visit. LCP is a moment, INP is a delay measured at every tap, and CLS adds up every jump for as long as the page is open.

Most gains come from a short list of habits. Send less: compress text, never send an image bigger than it will be shown. Send it sooner: put critical content first and `defer` scripts. Draw less: avoid animating properties that force layout, and merge and instance in 3D. And degrade gracefully: the robot page watches its own frame rate and steps down its rendering quality when a device cannot keep up.

:::why Reserving space before things arrive
**What it is.** Giving images a `width` and `height`, and giving every chart canvas a fixed height in CSS.

**Why it is done this way.** The browser then knows how much room to leave before the content shows up.

**Why it matters.** When a late image or chart pops in and pushes the text down, a visitor may tap the wrong thing. That is layout shift (CLS).

**What happens if you do not.** The page jumps around as it loads, and people lose their place.
:::

## Security

A static page has little to attack, but any page that handles text it did not write must be careful. The main danger is **cross-site scripting (XSS)**: an attacker gets their own JavaScript to run inside your page, where it has all your page's powers. The usual cause is building HTML out of untrusted text.

```
// dangerous: if name is "<img src=x onerror=steal()>", that script runs
box.innerHTML = 'Hello, ' + name;

// safe: the text is only ever treated as text
box.textContent = 'Hello, ' + name;
```

:::why textContent instead of innerHTML
**What it is.** `textContent` puts a string in the page as plain text. `innerHTML` parses the string as HTML.

**Why it is done this way.** If the string came from outside your code (a URL parameter, a form field, a file), you cannot know what it contains.

**Why it matters.** With `textContent`, even a malicious string is only displayed. It cannot run.

**What happens if you do not.** Anyone who can get a crafted value into your page can run code as your page.
:::

The same care applies to **third-party scripts**. Every script you load from another site runs with full power over your page. Load only from sources you trust, and pin the exact version.

:::why Pinning library versions
**What it is.** Writing `katex@0.16.11` in a URL, not `katex@latest`.

**Why it is done this way.** A pinned URL always returns the same file.

**Why it matters.** A broken or compromised new release cannot reach your page silently, and your site behaves the same next year as today.

**What happens if you do not.** One morning your page breaks, and nothing in your own files has changed.
:::

Finally, serve pages over **HTTPS**, which encrypts the conversation from Chapter 1 and stops anyone on the route from reading or altering what the visitor receives.

## Tools

The habits above are easier with tools, and you will meet four kinds throughout this book.

**The browser's developer tools** come first: Elements to inspect the tree and styles, Console for errors and experiments, Network for requests, Performance for the frame budget, Lighthouse for automatic audits. Learn them before you learn any library.

**A package manager**, npm, installs libraries and records which versions a project uses in `package.json`.

**A bundler** reads a script, follows its `import` statements, and combines everything into one file the browser can load. The robot page is built from several source files plus three.js into one script by a bundler called esbuild, in a fraction of a second. Bundlers can also **minify** the result, stripping whitespace and shortening names, which is why the file in Chapter 1's worked example is 686 kilobytes and not several megabytes.

**Version control** with Git records every change to every file, lets you return to any earlier state, and makes experimenting safe. A **commit** is a saved snapshot with a message saying why you made the change.

:::why Writing commit messages that say why
**What it is.** A short message with each commit explaining the reason for the change.

**Why it is done this way.** The code already shows *what* changed. Only you know *why*.

**Why it matters.** In six months, "Fix the camera jump when the tab is hidden" is a gift to your future self. "update stuff" is a puzzle.

**What happens if you do not.** You cannot tell which of fifty commits introduced a bug.
:::

:::summary
- Accessibility is perceivable, operable, understandable, robust. Most of it comes free from the right element, a text alternative, keyboard support, enough contrast and respect for motion preferences.
- Contrast = (L₁ + 0.05) / (L₂ + 0.05), with luminance computed from linearised channels. Normal text needs 4.5 : 1.
- LCP (how soon the big thing appears), INP (how fast a tap is answered) and CLS (how much the page jumps) sum up performance. Send less, send it sooner, draw less, degrade gracefully.
- Never build HTML from text you did not write. `textContent`, not `innerHTML`. Pin third-party versions. Serve over HTTPS.
- Developer tools, a package manager, a bundler and version control are the workshop. Commit messages say why.
:::
