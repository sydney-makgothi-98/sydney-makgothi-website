@part Part II. The Tech Stack
@partsub One tool at a time: the words, the theory, worked examples and practice

# HTML: The Skeleton

HTML is the easiest of the three languages to learn and the easiest to do badly. It is easy because there is hardly any logic, only labels. It is easy to do badly because the browser forgives almost anything, so nobody tells you when you are wrong. This chapter teaches you to write HTML that is correct on purpose: a page that reads well as plain text, that a screen reader can navigate, that a search engine can understand, and that CSS and JavaScript can hook into without a fight.

:::objectives
- Write the skeleton of a page from memory and explain every line of it.
- Predict how the parser treats nesting, whitespace, void elements, entities and mistakes.
- Mark up text, lists, quotations, code, tables, links, images, media and forms with the elements that carry their meaning.
- Organise a page with landmarks and a sensible heading outline.
- Fill the `<head>` so that the page loads fast, looks right when shared, and is found by search.
- Add accessibility where native elements are not enough, and know when ARIA is the wrong tool.
- Validate a page and find mistakes with the Elements panel.
:::

## Words You Will Meet

| Word | What it means |
|---|---|
| **Element** | One building block: a start tag, content and an end tag, such as `<p>Hello</p>`. |
| **Tag** | The part in angle brackets that names an element. |
| **Attribute** | A name and value inside a start tag, such as `href="page.html"`. |
| **Boolean attribute** | An attribute whose presence is the whole message, such as `required` or `disabled`. |
| **Void element** | An element with no content and no end tag, such as `<img>` and `<meta>`. |
| **Nesting** | Putting one element inside another. Elements must be closed in the reverse order they were opened. |
| **Content model** | The rule for what an element may contain. A `<p>` may hold text and inline elements, not another `<p>`. |
| **Semantic** | Chosen for its *meaning* (`<nav>`) rather than its appearance. |
| **Landmark** | A semantic element marking a region (`<header>`, `<main>`, `<footer>`). |
| **Entity** | A code for a special character, such as `&amp;` for `&` and `&lt;` for `<`. |
| **Document** | The whole page, from `<!DOCTYPE html>` to `</html>`. |
| **Metadata** | Information *about* the page, kept in the `<head>`: its title, character set, description, icon. |
| **ARIA** | Attributes that describe roles and states to assistive technology when no native element does. |

## 9.1 The Skeleton of Every Page

Every HTML page starts the same way. Here is the smallest page you should ever write.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Page</title>
</head>
<body>
    <h1>Hello</h1>
</body>
</html>
```

Let us take it line by line, because every line is there for a reason.

:::why The doctype
**What it is.** `<!DOCTYPE html>` on the very first line.

**Why it is done this way.** It tells the browser "this page uses modern HTML".

**Why it matters.** It switches the browser into **standards mode**, where layout follows the modern rules.

**What happens if you do not.** The browser falls back to **quirks mode**, which imitates 1990s browsers. Boxes are sized differently and nothing quite behaves as this book says. If a page looks mysteriously off, a missing doctype is a classic suspect.
:::

:::why The lang attribute
**What it is.** `lang="en"` on the `<html>` element.

**Why it is done this way.** It states what human language the page is in.

**Why it matters.** Screen readers use it to pick the right pronunciation, translation tools use it, and so does hyphenation.

**What happens if you do not.** A screen reader may read English with the accent and rules of whatever language the visitor's device is set to, and it sounds like nonsense.
:::

:::why The charset line
**What it is.** `<meta charset="UTF-8">` in the head.

**Why it is done this way.** Files are just bytes. The browser needs to be told which table to use to turn bytes into letters. UTF-8 covers every language and symbol.

**Why it matters.** It keeps characters like é, ×, θ and → correct.

**What happens if you do not.** Symbols turn into garbage such as "Â°" and "â†'". Put it first in the head, so the browser knows before it reads anything else.
:::

:::why The title element
**What it is.** `<title>` in the head, which does not appear on the page itself.

**Why it is done this way.** It names the page for the browser tab, bookmarks, history and search results.

**Why it matters.** It is the first thing a screen-reader user hears and what a search engine shows as the link.

**What happens if you do not.** The tab shows the file name, and a visitor with twenty tabs open cannot find your page.
:::

(The viewport line was explained in Chapter 4.)

@figure html-anatomy The parts of one element. The start tag carries the name and the attributes; the content sits between the tags; the end tag closes it. Everything from `<a` to `</a>` is one element, and one node in the tree.

## 9.2 How the Parser Thinks

To write HTML that behaves, you need to know what the browser does with your text. Six rules cover almost everything.

**1. Tags nest, and close in reverse order.** `<p><em>robot</em></p>` is right. `<p><em>robot</p></em>` is wrong: the parser closes `em` for you when it meets `</p>`, then finds a stray `</em>` and throws it away. You get the layout you meant by luck, and the next mistake will not be so lucky.

**2. Some elements have no content and no end tag.** These are the **void elements**: `<br>`, `<hr>`, `<img>`, `<input>`, `<meta>`, `<link>`, `<source>`, `<track>`, `<wbr>`, `<area>`, `<base>`, `<col>`, `<embed>`. Writing `<br></br>` or `<img ...></img>` is an error that the parser silently repairs.

**3. Every element has a content model.** A `<p>` may hold text and *phrasing* elements (`<em>`, `<a>`, `<code>`). It may not hold a `<div>`, a list or another `<p>`. If you write `<p><ul>...</ul></p>`, the parser closes the paragraph *before* the list, and the `</p>` at the end becomes an empty paragraph. The Elements panel shows the truth; the source file does not.

**4. Whitespace collapses.** Any run of spaces, tabs and newlines between words becomes one space, so you may indent freely. The one exception is `<pre>`, which keeps every space and line break, and is how code listings are shown.

**5. Five characters are special.** `<` starts a tag and `&` starts an entity, so to *show* them you must write `&lt;` and `&amp;`. Inside a double-quoted attribute, `"` must be `&quot;`. Other entities are conveniences: `&nbsp;` is a space that will not break a line, `&copy;` is ©, `&times;` is ×, `&rarr;` is →, `&deg;` is °. With UTF-8 declared you can also just type the character.

**6. Attributes are name-value pairs, and some are switches.** `href="page.html"` has a value. `required`, `disabled`, `checked`, `hidden` and `defer` are **boolean**: their presence is the whole message, and `required="false"` still means required. Always quote values; `class="card wide"` without quotes would be read as a class of `card` and an attribute called `wide`.

:::worked Reading what the parser will build
A beginner writes this. Predict the tree the browser builds, then fix the source.

```
<p>Parts: <ul><li>motor<li>wheel</ul>
<img src="a.png">
<p>Done
```

**Step 1. The first paragraph.** `<p>` opens. The parser meets `<ul>`, which a paragraph cannot contain, so it closes the paragraph: `<p>Parts: </p>`. The list begins.

**Step 2. The list items.** `<li>motor` opens an item. The next `<li>` closes the previous one automatically, because an item cannot contain another item. `</ul>` closes the open item and the list. So far the tree is a paragraph, then a list with two items. (Omitting `</li>` is actually allowed by the rules, but writing it makes the structure visible.)

**Step 3. The image.** `<img>` is void; it becomes a node on its own, as a sibling of the paragraph and the list.

**Step 4. The last paragraph.** `<p>Done` opens and is never closed. The parser closes it when the body ends. It works, and it is sloppy.

**Step 5. The fix.**

```
<p>Parts:</p>
<ul>
  <li>motor</li>
  <li>wheel</li>
</ul>
<img src="a.png" alt="The assembled chassis" width="400" height="300">
<p>Done</p>
```

**Why it matters.** Both versions draw almost the same page today. The second says what it means, so that a stylesheet rule like `p + ul` or a script that counts paragraphs does what you expect.
:::

:::tip
The Elements panel of the developer tools shows the tree the browser *actually built*, after all its repairs. When the layout is strange, compare it to your source. The difference is the bug.
:::

## 9.3 Text and Structure

Headings go from `<h1>` (the most important) to `<h6>`. Use them in order, and use one `<h1>` per page. Paragraphs are `<p>`. Lists are `<ul>` (bullets) or `<ol>` (numbers), with each item in an `<li>`, and `<dl>` for a list of terms and definitions (`<dt>` for the term, `<dd>` for its definition), which is exactly what a glossary or a spec sheet is.

```
<dl>
  <dt>Wheelbase</dt><dd>112 mm</dd>
  <dt>Motor</dt><dd>TT gear motor, 1:48</dd>
</dl>
```

:::why Headings in order
**What it is.** `<h1>`, then `<h2>` for its sections, then `<h3>` for theirs, never skipping a level.

**Why it is done this way.** Headings form an outline, like a book's contents page.

**Why it matters.** Screen-reader users jump from heading to heading to scan a page, the way you glance down a page for bold titles.

**What happens if you do not.** Choosing `<h4>` because it "looks the right size" makes the outline jump about, and navigating the page becomes confusing. Choose the *meaning* with HTML, and choose the *size* with CSS.
:::

#### Inline meaning

Inside a paragraph, a handful of elements say what a run of text *is*. Learn these; they are the difference between markup and typing.

| Element | Meaning | Default look |
|---|---|---|
| `<em>` | Stress, as in speech: "it is *not* a toy" | italic |
| `<strong>` | Importance or urgency: "**Warning:** hot" | bold |
| `<code>` | A fragment of code or a file name | monospace |
| `<kbd>` | A key or command the reader types: `<kbd>Ctrl</kbd>` | monospace |
| `<abbr title="...">` | An abbreviation, with the full form in `title` | dotted underline |
| `<time datetime="2026-11-10">` | A date or time, machine-readable in `datetime` | plain |
| `<mark>` | Highlighted for relevance, like a search hit | yellow background |
| `<q>` and `<cite>` | A short quotation, and the title of a work | quotes; italic |
| `<sup>`, `<sub>` | Superscript and subscript: m<sup>2</sup>, CO<sub>2</sub> | raised; lowered |
| `<small>` | Side comment or small print | smaller |
| `<span>` | No meaning at all: a hook for CSS or script | none |

Use `<em>` and `<strong>`, *not* `<i>` and `<b>`, when you mean stress and importance. (`<i>` and `<b>` still exist for things that are conventionally italic or bold without emphasis, such as a ship's name or a keyword in a summary, but you will rarely need them.) A `<blockquote>` holds a quoted paragraph; a `<pre>` keeps whitespace; `<hr>` marks a change of topic; `<br>` breaks a line *inside* a paragraph, as in an address, and should never be used to make vertical space.

:::why Marking up code with code, and keys with kbd
**What it is.** `Press <kbd>F12</kbd> and type <code>document.title</code>.`

**Why it is done this way.** Each element says what the text is, and the stylesheet gives each its own look.

**Why it matters.** A reader can tell what to type from what to press. A script could find every code fragment on the page. The monospace font is a *consequence*.

**What happens if you do not.** You write `<span class="mono">` everywhere, the meaning is lost, and the next person cannot tell which spans are code and which are just styled.
:::

## 9.4 Landmarks and Sectioning

HTML has elements whose names carry meaning for whole regions: `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>` and `<footer>`. Assistive technology calls the main ones **landmarks** and lets a visitor jump between them.

@figure html-landmarks The landmarks of a typical page. A screen-reader user can jump straight to `<main>`, or list the navigation regions, the way a sighted visitor's eye finds the menu and the content without reading everything in between.

- `<header>` is the introduction of the page (or of an article): the logo, the title, the navigation.
- `<nav>` holds a set of links for getting around. A page may have more than one (the main menu, a table of contents), and a `aria-label` tells them apart.
- `<main>` holds the content the visitor came for. Exactly one per page.
- `<article>` is a self-contained piece that would make sense on its own: a blog post, a product, one project in a portfolio.
- `<section>` is a thematic grouping with a heading. If you cannot think of a heading for it, it is probably a `<div>`.
- `<aside>` is tangential content: a side note, related links.
- `<footer>` holds the small print, contact details, copyright.
- `<figure>` with `<figcaption>` wraps an image, a chart, a code listing or a table together with its caption, so the two cannot be separated.

:::why Using a landmark instead of a div with a class
**What it is.** `<nav>` rather than `<div class="nav">`.

**Why it is done this way.** The browser and assistive technology know what `<nav>` is. A class is a private word that only your stylesheet understands.

**Why it matters.** A blind visitor can press one key to reach the navigation. A search engine can tell the menu from the content. And the element still works if your CSS never loads.

**What happens if you do not.** The page is a pile of anonymous boxes. It looks the same to a sighted mouse user and is a maze to everyone else.
:::

:::remember
`<div>` and `<span>` are not bad. They are the elements for "a box I need for layout" and "a run of text I need to style", when no meaningful element fits. The mistake is reaching for them *first*.
:::

## 9.5 Links, Images and Media

#### Links

```
<a href="about.html">About me</a>
<a href="../index.html">Home</a>
<a href="#routh">Jump to the Routh section</a>
<a href="https://example.com" target="_blank" rel="noopener">Another site</a>
<a href="report.pdf" download>Download the report</a>
<a href="mailto:you@example.com">Email me</a>
```

A link's `href` is a URL (Chapter 1), and most of yours will be **relative**: resolved from the folder of the current page. `about.html` is in the same folder; `../index.html` is one folder up; `assets/a.png` is in a subfolder; `/images/a.png` with a leading slash starts from the site's root. A `#fragment` scrolls to the element with that `id`, and works with no script. `download` asks the browser to save the file instead of showing it. `target="_blank"` opens a new tab, and should always come with `rel="noopener"`.

:::worked Resolving relative paths
The page `/pages/robots/patrick.html` needs to link to `/pages/index.html`, show the image `/assets/patrick.jpg`, and link to the section with `id="arm"` on itself. Write the three `href` and `src` values.

**Step 1. Where am I?** The page's folder is `/pages/robots/`. Every relative path starts there.

**Step 2. The index.** `/pages/index.html` is one folder up: `../index.html`.

**Step 3. The image.** `/assets/patrick.jpg` is two folders up and then down into `assets`: `../../assets/patrick.jpg`. A root-relative `/assets/patrick.jpg` also works, but only when the site is served from a root; opened from disk as a file, the leading slash means the drive's root, and the image breaks.

**Step 4. The section.** `#arm`. No file name is needed for a fragment on the same page.

**Why it matters.** This website is opened from disk during development and served from a sub-folder on its host, so its pages use relative paths throughout, and they work in both places.
:::

:::why rel="noopener" on links that open a new tab
**What it is.** `rel="noopener"` next to `target="_blank"`.

**Why it is done this way.** Without it, the new page can reach back and control the page that opened it.

**Why it matters.** It closes a small but real security hole.

**What happens if you do not.** A page you link to could redirect your page to something nasty, and your visitor would not notice. (Modern browsers now add this behaviour by default, but writing it is still good manners and works in older ones.)
:::

#### Images

```
<img src="robot.jpg" alt="A yellow two-wheeled robot with a claw" width="640" height="480">
```

:::why alt, width and height on images
**What it is.** A text description (`alt`) and the real pixel size (`width` and `height`) on every `<img>`.

**Why it is done this way.** The `alt` describes the picture to someone who cannot see it. The size lets the browser reserve space before the image arrives.

**Why it matters.** Blind visitors get the meaning of the picture. And the page does not jump around when the image loads (Chapter 8's layout shift).

**What happens if you do not.** Screen readers read out the file name ("IMG underscore 4032"), and the text jumps down when the picture appears.
:::

Writing good `alt` text is a skill. Describe what the picture *means* in this place, not what it contains: `alt="The claw closing on an egg"` on a page about the gripper, not `alt="robot"`. A purely decorative image gets `alt=""` (empty, but present) so that it is skipped. An image that is also a link needs `alt` text that says where the link goes.

Two more attributes matter on a page with many pictures. `loading="lazy"` tells the browser not to fetch an image until it is near the screen, which is right for everything below the first screenful and wrong for the hero image. `srcset` and `sizes` offer the browser several copies of the same picture so it can fetch the one that fits.

```
<img src="wing-800.jpg"
     srcset="wing-400.jpg 400w, wing-800.jpg 800w, wing-1600.jpg 1600w"
     sizes="(max-width: 600px) 100vw, 600px"
     alt="The finished wing on the bench" width="800" height="500" loading="lazy">
```

:::worked Which copy of the image is fetched?
With the `srcset` above, which file does a phone 375 CSS pixels wide with DPR 2 fetch? And a desktop browser 1 400 pixels wide with DPR 1?

**Step 1. Read sizes.** On a viewport up to 600 pixels wide the image is shown at `100vw`, the full width. Wider than that, it is shown at 600 CSS pixels.

**Step 2. The phone.** 375 CSS pixels at DPR 2 means 750 device pixels are needed. The browser picks the smallest candidate at least that wide: `wing-800.jpg`.

**Step 3. The desktop.** 600 CSS pixels at DPR 1 means 600 device pixels. Again `wing-800.jpg` is the smallest that will do.

**Step 4. A sharper desktop.** The same 1 400 pixel window on a DPR 2 laptop needs 1 200 device pixels, so it fetches `wing-1600.jpg`.

**Why it matters.** The phone never downloads the 1 600 pixel file, which might be ten times the size of the one it needs. The `src` is the fallback for browsers that do not understand `srcset`.
:::

The `<picture>` element goes one step further and lets you offer *different* pictures (a cropped version for phones, a modern format with a fallback):

```
<picture>
  <source srcset="hero.avif" type="image/avif">
  <source srcset="hero.webp" type="image/webp">
  <img src="hero.jpg" alt="..." width="1200" height="600">
</picture>
```

The browser takes the first `<source>` it can decode, and the `<img>` inside is both the fallback and the place the `alt` lives.

#### Figures, video and audio

```
<figure>
  <img src="bode.png" alt="Bode plot of the pitch loop" width="800" height="500">
  <figcaption>Figure 3. Gain and phase of the pitch loop; the phase margin is 61 degrees.</figcaption>
</figure>

<video controls width="640" height="360" poster="run.jpg" preload="metadata">
  <source src="run.mp4" type="video/mp4">
  <track kind="captions" src="run.vtt" srclang="en" label="English">
  Your browser cannot play this video. <a href="run.mp4">Download it.</a>
</video>
```

`controls` shows the browser's own play bar. `poster` is the still shown before play. `preload="metadata"` fetches only the length and first frame, not the whole file. A `<track>` adds captions, which are not optional for a video with speech. `autoplay` works only with `muted`, and even then is bad manners on a page the visitor did not come to for a video.

## 9.6 Tables

A table is for **data with rows and columns**, never for layout. Its parts give the data meaning: a `<caption>` says what the table is, `<thead>` and `<tbody>` separate headings from data, and `<th>` marks a heading cell, with `scope` saying whether it heads a column or a row.

```
<table>
  <caption>Motor readings at three duty cycles</caption>
  <thead>
    <tr><th scope="col">Duty</th><th scope="col">Speed (rpm)</th><th scope="col">Current (A)</th></tr>
  </thead>
  <tbody>
    <tr><th scope="row">50%</th><td>96</td><td>0.14</td></tr>
    <tr><th scope="row">70%</th><td>138</td><td>0.19</td></tr>
    <tr><th scope="row">100%</th><td>199</td><td>0.26</td></tr>
  </tbody>
</table>
```

:::why th with scope instead of bold td
**What it is.** Heading cells are `<th>` with `scope="col"` or `scope="row"`.

**Why it is done this way.** The browser then knows which heading describes each data cell.

**Why it matters.** A screen reader can say "Speed, 138 rpm" when the visitor reaches a cell, instead of just "138". A sighted reader gets the same from the position; a blind reader gets it only from the markup.

**What happens if you do not.** A table of numbers is read aloud as a stream of numbers with no idea what each one is.
:::

## 9.7 Forms

A form collects input. Each control should have a **label**, and the label and control are connected by matching `for` and `id` (or by wrapping the control inside the label).

```
<form action="/subscribe" method="post">
    <label for="email">Your email</label>
    <input id="email" name="email" type="email" required autocomplete="email">
    <button type="submit">Subscribe</button>
</form>
```

:::why Connecting a label to its input
**What it is.** `<label for="email">` paired with `<input id="email">`.

**Why it is done this way.** The pair tells the browser which text belongs to which box.

**Why it matters.** Clicking the label focuses the box, which makes a bigger target on a phone. A screen reader announces "Your email" when the box is focused.

**What happens if you do not.** The visitor hears "edit text, blank" and has no idea what to type. The `type="email"` and `required` do some checking for free, and show the right keyboard on a phone.
:::

#### The controls

| Control | What it gives you |
|---|---|
| `<input type="text">` | One line of text. Also `search`, `tel`, `url`, `password`. |
| `type="email"`, `type="number"`, `type="date"` | Text with checking, and the right keyboard or picker on a phone. |
| `type="range" min max step` | A slider; its `value` is a string, so convert with `+` in script. |
| `type="checkbox"`, `type="radio"` | Yes/no, and one-of-many (radios share a `name`). |
| `type="file"` | A file picker; the form then needs `enctype="multipart/form-data"`. |
| `type="hidden"` | A value sent with the form but not shown. |
| `<select>` with `<option>` | A drop-down list. |
| `<textarea rows="4">` | Several lines of text. |
| `<button type="submit">`, `type="button"`, `type="reset"` | Submits the form; does nothing by itself (for scripts); clears it. |
| `<fieldset>` with `<legend>` | A group of related controls with a caption, such as a set of radios. |

Checking attributes save you script: `required`, `min`, `max`, `step`, `minlength`, `maxlength`, `pattern="[0-9]{4}"`. The browser refuses to submit until they are satisfied and shows its own messages. `autocomplete` tells the browser what the field is for (`name`, `email`, `username`, `current-password`, `one-time-code`) so it can fill it in.

:::why A button's default type is submit
**What it is.** `<button>` inside a form submits the form unless you write `type="button"`.

**Why it is done this way.** The common case, one button that sends the form, needs no attribute.

**Why it matters.** A "Clear" or "Preview" button inside a form that forgets `type="button"` submits the form and reloads the page, and the visitor loses what they typed.

**What happens if you do not.** One of the most common form bugs. Give every button in a form an explicit `type`.
:::

#### What a form actually sends

When the form is submitted, the browser collects every control that has a `name` and sends `name=value` pairs. With `method="get"` they go in the URL's query string: `/search?q=egg&sort=new`. With `method="post"` they go in the request body, encoded the same way, and do not appear in the address bar or the history. Use `get` for searches and filters that a visitor might bookmark; use `post` for anything that changes something or carries private data.

:::worked What arrives at the server
A form with `method="get"` and `action="/find"` has a text field `name="q"` containing `egg & salt`, a checked checkbox `name="fresh" value="1"`, and an unchecked checkbox `name="frozen" value="1"`. What URL does the browser request?

**Step 1. Which controls are sent?** Every named control with a value, except unchecked checkboxes and radios, which are left out entirely.

**Step 2. Encode the values.** Spaces become `+` (or `%20`) and `&` becomes `%26`, because a bare `&` would separate two pairs. `egg & salt` becomes `egg+%26+salt`.

**Step 3. Assemble.** `/find?q=egg+%26+salt&fresh=1`. The `frozen` checkbox does not appear at all.

**Why it matters.** When a server "does not receive" a checkbox, it is because it was unchecked, not because of a bug. And every `%26` you see in a URL is a character that would otherwise have broken it. This is why Chapter 8 said never to build URLs from text by hand.
:::

#### Native disclosure, without a script

`<details>` and `<summary>` give you an open-and-close panel that works with the keyboard, a screen reader and no JavaScript.

```
<details>
  <summary>Show the full specification</summary>
  <dl> ... </dl>
</details>
```

## 9.8 The Head: Metadata That Matters

The `<head>` holds nothing the visitor sees in the page, and several things they see elsewhere.

```
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Flight Dynamics | Gopolang Makgothi</title>
  <meta name="description" content="A spiral climb you can fly, and a full stability analysis with poles, Routh arrays and a PID loop.">
  <link rel="icon" href="favicon.svg" type="image/svg+xml">
  <meta property="og:title" content="Flight Dynamics">
  <meta property="og:description" content="Fly a spiral climb and watch the stability analysis update live.">
  <meta property="og:image" content="https://example.com/preview.jpg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="stylesheet" href="style.css">
  <script defer src="app.js"></script>
</head>
```

- The **description** is the paragraph a search engine shows under your link. Keep it under about 155 characters and make it a sentence a person would click.
- The **icon** is the little picture in the tab. An SVG icon stays sharp at every size.
- The **Open Graph** tags (`og:title`, `og:description`, `og:image`) are what chat apps and social networks show when someone pastes your link. Without them, the preview is a bare address. The image must be an absolute URL.
- **Order matters.** Charset first, then viewport and title, then stylesheets (they block rendering, so start them early), then deferred scripts.

:::why Putting the stylesheet link before the script
**What it is.** `<link rel="stylesheet">` above `<script defer>` in the head.

**Why it is done this way.** The browser starts fetching things in the order it meets them. The stylesheet is needed before the first paint; the deferred script is not.

**Why it matters.** The page appears styled as early as possible.

**What happens if you do not.** A script listed first takes its turn on the connection first, and the styles arrive a little later. On a slow connection, that is a flash of unstyled text.
:::

## 9.9 Accessibility: When Native Elements Are Not Enough

Most accessibility comes free from the right element. Four tools cover the rest.

**`tabindex`.** Every link, button and form control can be reached with the Tab key. A custom control made from a `<div>` cannot, until you add `tabindex="0"`, and then you must also handle Enter and Space in script. `tabindex="-1"` makes an element focusable by script but not by Tab, which is right for a panel you move focus into when it opens. Never use positive values; they scramble the tab order.

**`aria-label` and `aria-labelledby`.** A name for something that has no visible text: an icon button (`<button aria-label="Close">×</button>`), a chart canvas, a second `<nav>`.

**State attributes.** `aria-expanded="true"` on a button that opens a panel, `aria-pressed` on a toggle, `aria-current="page"` on the menu link for the page you are on. Scripts update them when the state changes, exactly as they update a class.

**`aria-live`.** A region whose changes should be announced: `aria-live="polite"` on the readout that shows a computed result, so a screen-reader user hears "turn radius 1 240 feet" when the slider moves.

```
<a class="skip" href="#main">Skip to content</a>      <!-- first thing in the body -->
<button aria-expanded="false" aria-controls="spec">Specification</button>
<div id="spec" hidden> ... </div>
<p aria-live="polite">Turn radius: <output id="radius">1 240 ft</output></p>
```

:::why A skip link as the first element in the body
**What it is.** A link to `#main`, usually hidden until it receives focus.

**Why it is done this way.** A keyboard user otherwise tabs through every navigation link on every page before reaching the content.

**Why it matters.** One press of Tab and Enter gets them to the content.

**What happens if you do not.** A visitor with a switch device or a screen reader works through forty links to read one paragraph, on every page of your site.
:::

:::warning
The first rule of ARIA is *do not use ARIA* when a native element does the job. `<button>` already has a role, keyboard handling and a pressed state. `<div role="button" tabindex="0" onclick=...>` has to rebuild all three, and most people forget one. Reach for ARIA only to describe something the native elements cannot.
:::

The `hidden` attribute removes an element from the page and from assistive technology, like `display: none`. `aria-hidden="true"` hides it from assistive technology *only*, which is right for a decorative icon next to a text label, and wrong for anything a person needs.

## 9.10 Hooks for CSS and Script

HTML gives the other two languages three ways to find an element. An `id` is a unique name for one element: the target of a fragment link, a label's `for`, and `aria-controls`. A `class` is a reusable label for styling and for finding groups of elements. A **data attribute**, `data-anything="value"`, carries a small piece of information for a script, readable as `element.dataset.anything`.

```
<button class="chip" data-chart="speed">Speed</button>
<button class="chip" data-chart="power">Power</button>
```

:::why Data attributes instead of parsing the id
**What it is.** `data-chart="speed"` rather than `id="chip-speed"` and then chopping the string in script.

**Why it is done this way.** The attribute says exactly what the script needs, with a name that explains itself.

**Why it matters.** `button.dataset.chart` is the value, with no string surgery. Several buttons can share a class and differ by data.

**What happens if you do not.** Scripts fill up with `id.split('-')[1]`, and the first time someone renames an id, three handlers break.
:::

## 9.11 Validation and Debugging

The W3C validator (search "HTML validator") reads your page and lists every mistake: unclosed elements, misplaced tags, missing `alt`, duplicate `id`s. Run it on every page once before you publish. Then use the Elements panel for anything the validator cannot see: it shows the tree as built, the computed styles, and, in the Accessibility pane, the name and role every element presents to assistive technology.

The mistakes you will make most often, in order: a missing `alt`; a `<div>` where a `<button>` or `<a>` belongs; headings chosen for size; a `<p>` wrapped around a block element; two elements with the same `id`; an unquoted attribute value; a form button without a `type`; a link that opens a new tab without `rel="noopener"`.

## Worked Example: A Small Page, Built Properly

:::worked A recipe card
Build a page with a title, a heading, a picture, a list of ingredients, and a link back to the home page. Use landmarks.

**Step 1. Skeleton.** Start with the skeleton from 9.1 and set the title to "Pancakes".

**Step 2. Landmarks.** Put the home link inside `<nav>`, the recipe inside `<main>`, and a copyright line inside `<footer>`. A screen-reader user can now jump straight to the main content.

**Step 3. The content.**

```
<body>
  <nav><a href="index.html">Home</a></nav>
  <main>
    <h1>Pancakes</h1>
    <img src="pancakes.jpg" alt="A stack of pancakes with syrup" width="600" height="400">
    <h2>Ingredients</h2>
    <ul>
      <li>1 cup flour</li>
      <li>1 egg</li>
      <li>1 cup milk</li>
    </ul>
    <h2>Method</h2>
    <ol>
      <li>Whisk everything together.</li>
      <li>Fry for <time datetime="PT2M">two minutes</time> a side.</li>
    </ol>
  </main>
  <footer>&copy; 2026</footer>
</body>
```

**Step 4. Check.** Open the browser developer tools, look at the Elements panel, and confirm the tree matches the nesting you meant. Then press Tab: the only stop should be the Home link. Then run the validator.

**Why this is "properly".** No `<div>` is needed anywhere. Each element says what it is, so the page works for screen readers, search engines and keyboards without extra effort. The method is an ordered list because order matters; the ingredients are unordered because it does not.
:::

## Worked Example: A Specification Table and a Form

:::worked A part's spec sheet with a question box
A page describes a motor. It needs a table of its ratings, a disclosure with the full datasheet notes, and a short form where a visitor can ask a question. Mark it up.

**Step 1. The table.** The ratings are data in rows and columns: one row per quantity, columns for the value and the conditions.

```
<table>
  <caption>TT gear motor ratings</caption>
  <thead><tr><th scope="col">Quantity</th><th scope="col">Value</th><th scope="col">Condition</th></tr></thead>
  <tbody>
    <tr><th scope="row">No-load speed</th><td>200 rpm</td><td>6 V</td></tr>
    <tr><th scope="row">Stall torque</th><td>0.08 N·m</td><td>6 V</td></tr>
    <tr><th scope="row">Gear ratio</th><td>1:48</td><td></td></tr>
  </tbody>
</table>
```

**Step 2. The notes.** They are long and optional, so they go in a `<details>` that starts closed.

**Step 3. The form.** Two fields and a button. Each field has a label, the email field has the right type, and the message is a `<textarea>`.

```
<form action="/ask" method="post">
  <label for="from">Your email</label>
  <input id="from" name="from" type="email" required autocomplete="email">
  <label for="msg">Your question</label>
  <textarea id="msg" name="msg" rows="4" required maxlength="500"></textarea>
  <button type="submit">Send</button>
</form>
```

**Step 4. Check with a keyboard.** Tab moves from the summary, to the email box, to the message, to the button, in that order. Press Enter on the summary and the notes open. Submit the empty form and the browser itself asks for the email.

**Why it matters.** Everything here works before a single line of CSS or JavaScript is written. The styling and the script that sends the question without a page reload are improvements, not requirements. That is progressive enhancement (Chapter 3), and it is the reason the page will still work on the day the script has a bug.
:::

## Practice Problems A: The Skeleton and the Parser

:::problems
1. List the six lines you would put in the `<head>` of a new page, and say what each does.
2. This markup is wrong in three ways. Find them: `<p>Welcome to <b>my site</p></b>` and `<img src="a.jpg">`.
3. Which of these are void elements: `<br>`, `<p>`, `<img>`, `<input>`, `<span>`, `<meta>`, `<li>`?
4. What tree does the browser build from `<p>One<p>Two`? How many paragraphs, and what is in each?
5. Write the text `if (a < b && c > 0)` so that it appears literally inside a `<code>` element.
6. A page shows "Â°" where it should show "°". What is missing, and where must it go?
7. What does `<input type="checkbox" required="false">` require?
:::

:::answers
**Chapter 9, Practice Problems A.**

1. `<!DOCTYPE html>` (modern mode, strictly before the head); `<html lang="en">`; `<meta charset="UTF-8">` (character table); the `viewport` meta (true phone width); `<title>` (tab name); a stylesheet `<link>`. (The doctype and html tag sit above the head, so a strict answer is the last four inside the head plus these two outside.)
2. The `<b>` is closed after the `<p>` (wrong nesting; it should be `<p>Welcome to <b>my site</b></p>`), `<b>` should be `<strong>` for importance, and the `<img>` has no `alt`, `width` or `height`.
3. `<br>`, `<img>`, `<input>` and `<meta>` are void. `<p>`, `<span>` and `<li>` have content and end tags (the end tags of `<p>` and `<li>` may be omitted, but the elements are not void).
4. Two paragraphs: a `<p>` cannot contain a `<p>`, so the second `<p>` closes the first. The first holds "One", the second holds "Two".
5. `<code>if (a &lt; b &amp;&amp; c &gt; 0)</code>`. The `>` may be written as is, but `&gt;` is clearer; `<` and `&` must be escaped.
6. `<meta charset="UTF-8">` is missing (or the file was saved in another encoding). It goes in the `<head>`, as early as possible, before any text.
7. The checkbox must be ticked. `required` is a boolean attribute: its presence means required, whatever value it is given.
:::

## Practice Problems B: Content, Links, Images, Tables and Forms

:::problems
1. Write a navigation bar containing three links using a list, and wrap it in the right landmark element.
2. A page has these headings in order: `<h1>`, `<h3>`, `<h2>`, `<h5>`. Explain the problem and fix it.
3. Which element would you use for each: (a) text that is more important than its neighbours, (b) a clickable thing that submits a form, (c) the list of steps in a recipe where order matters, (d) a glossary of terms and definitions, (e) a keyboard shortcut the reader should press, (f) a date a script might read.
4. The page `/docs/guide/intro.html` must link to `/docs/index.html` and show `/img/cover.png`. Write the relative `href` and `src`.
5. An image is shown at 300 CSS pixels wide on viewports under 700 pixels and at 700 pixels otherwise. Write its `sizes` attribute. With candidates of 300w, 600w, 900w and 1400w, which is fetched on a 390-pixel DPR 3 phone?
6. Write a two-column table of three robot parts and their masses with a caption and proper heading cells.
7. A form has `method="get"`, `action="/filter"`, a select `name="tag"` set to `robots`, and a text field `name="q"` containing `claw 2`. What URL is requested?
8. Write an HTML form for a login with a username and a password, each with a proper label and `autocomplete`.
9. Why does a "Clear" button inside a form reload the page, and what is the one-word fix?
:::

:::answers
**Chapter 9, Practice Problems B.**

1. `<nav><ul><li><a href="a.html">A</a></li><li><a href="b.html">B</a></li><li><a href="c.html">C</a></li></ul></nav>`
2. The levels jump (h1 to h3, then back to h2, then h5), so the outline is confusing. Use `<h1>`, `<h2>`, `<h3>`, `<h4>` in order, and change the sizes with CSS.
3. (a) `<strong>`. (b) `<button type="submit">`. (c) `<ol>`. (d) `<dl>` with `<dt>` and `<dd>`. (e) `<kbd>`. (f) `<time datetime="...">`.
4. From the folder `/docs/guide/`: `href="../index.html"` and `src="../../img/cover.png"`.
5. `sizes="(max-width: 699px) 300px, 700px"`. On the phone the slot is 300 CSS pixels at DPR 3, so 900 device pixels are needed, and the 900w candidate is the smallest that is wide enough.
6. `<table><caption>Robot parts</caption><thead><tr><th scope="col">Part</th><th scope="col">Mass (g)</th></tr></thead><tbody><tr><th scope="row">Motor</th><td>32</td></tr><tr><th scope="row">Wheel</th><td>18</td></tr><tr><th scope="row">Battery</th><td>95</td></tr></tbody></table>` (any three parts are fine).
7. `/filter?tag=robots&q=claw+2`. The space is encoded as `+` (or `%20`).
8. `<form><label for="u">Username</label><input id="u" name="u" type="text" autocomplete="username"><label for="p">Password</label><input id="p" name="p" type="password" autocomplete="current-password"><button type="submit">Log in</button></form>`
9. A `<button>` in a form defaults to `type="submit"`, so it submits the form. Add `type="button"`.
:::

## Practice Problems C: The Head, Accessibility and Hooks

:::problems
1. Write the four `<meta>` and `<link>` lines that make a page show a proper preview when its link is pasted into a chat app, and say which one must hold an absolute URL.
2. An icon-only button shows a "×". What attribute makes it usable with a screen reader, and what should its value be?
3. A custom toggle is built from a `<div>`. Name the three things you must add in HTML and script to make it work like a button, then say what you should have done instead.
4. When is `aria-hidden="true"` correct, and when is it harmful?
5. What is the difference between `hidden` and `aria-hidden`?
6. Three chip buttons share a class and each names a chart. Write the markup so that a script can read which chart a clicked chip means without parsing an id.
7. Name five mistakes the validator would catch in a page, and two it would not.
:::

:::answers
**Chapter 9, Practice Problems C.**

1. `<meta name="description" content="...">`, `<meta property="og:title" content="...">`, `<meta property="og:description" content="...">`, `<meta property="og:image" content="https://.../preview.jpg">`. The `og:image` must be absolute, because the chat app fetches it from its own servers.
2. `aria-label="Close"`. The value is what the button *does*, not the symbol it shows.
3. `tabindex="0"` so Tab reaches it, `role="button"` so it is announced as a button, and a key handler for Enter and Space (plus `aria-pressed` for its state). You should have used `<button>`, which has all of these already.
4. Correct for decorative content that duplicates visible text, such as an icon beside a label. Harmful on anything a person needs, because it hides the element from assistive technology while sighted users still see it.
5. `hidden` removes the element for everyone (like `display: none`). `aria-hidden="true"` leaves it visible and hides it only from assistive technology.
6. `<button class="chip" data-chart="speed">Speed</button>` and so on; the script reads `button.dataset.chart`.
7. Would catch: a missing `alt`, a duplicate `id`, an unclosed element, a `<p>` containing a `<div>`, an unknown attribute, a missing `<title>`. Would not catch: a `<div>` used as a button, headings chosen for their size (the structure is valid but wrong), poor `alt` text, a bad tab order.
:::

## Mini Project: A Documentation Page for a Robot

:::project Write the page before you style it
Build `patrick.html`: a single page that documents the robot, using nothing but HTML. It must contain, in this order:

1. A `<header>` with the site name and a `<nav>` of three links (Home, Robots, Downloads), one of which has `aria-current="page"`.
2. A `<main>` with an `<h1>`, an introduction paragraph, and three `<section>`s with `<h2>`s: *Parts*, *How it moves*, *Specification*.
3. In *Parts*, a `<figure>` with a photo (`alt`, `width`, `height`, `loading="lazy"`) and a caption, followed by a `<dl>` of five parts and what each does.
4. In *How it moves*, an `<ol>` of the steps of the breakfast run, with the sensor reading written using `<code>` and the trigger distance using `<data value="0.108">10.8 cm</data>`.
5. In *Specification*, a `<table>` with a caption, column headings and row headings, and a `<details>` holding the notes.
6. A `<form>` with a labelled email field and a labelled question `<textarea>`, and one `type="submit"` button.
7. A `<footer>` with a `<small>` copyright line that uses an entity for ©.

Checks: the validator reports no errors; Tab visits the links, the summary, the fields and the button in document order; the Elements panel shows the tree you intended; with CSS disabled the page still reads from top to bottom as a sensible document. Keep this file. Project 1 in Part III styles it, and the JavaScript chapter wires its form.
:::

:::summary
- Every page starts with the doctype, `lang`, the charset, the viewport and a title. Each line prevents a specific failure.
- The parser repairs mistakes silently. Know its rules: nesting, void elements, content models, whitespace collapsing, entities and boolean attributes.
- Mark up meaning: headings in order, lists, definition lists, quotes, code, keys, dates. `<div>` and `<span>` are the last resort, not the first.
- Landmarks let people jump; `<figure>`, `<table>` with `<th scope>`, and labelled form controls carry meaning that scripts and assistive technology can use.
- Images need `alt`, `width` and `height`; `srcset` and `sizes` let the browser fetch the right copy; `<picture>` offers alternatives.
- Forms send `name=value` pairs; `get` puts them in the URL, `post` in the body. Give every form button a `type`.
- The head carries the description, icon and Open Graph tags; stylesheets before deferred scripts.
- Use ARIA only where no native element will do; `tabindex="0"`, `aria-label`, state attributes and `aria-live` cover most cases.
- Validate every page, then check the tree and the accessibility pane in the developer tools.
:::
