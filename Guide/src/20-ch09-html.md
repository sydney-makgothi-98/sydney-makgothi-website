@part Part II. The Tech Stack
@partsub One tool at a time: the words, the theory, worked examples and practice

# HTML: The Skeleton

HTML is the easiest of the three languages to learn and the easiest to do badly. It is easy because there is hardly any logic, only labels. It is easy to do badly because the browser forgives almost anything, so nobody tells you when you are wrong. This chapter teaches you to write HTML that is correct on purpose.

## Words You Will Meet

| Word | What it means |
|---|---|
| **Element** | One building block: a start tag, content and an end tag, such as `<p>Hello</p>`. |
| **Tag** | The part in angle brackets that names an element. |
| **Attribute** | A name and value inside a start tag, such as `href="page.html"`. |
| **Void element** | An element with no content and no end tag, such as `<img>` and `<meta>`. |
| **Nesting** | Putting one element inside another. Elements must be closed in the reverse order they were opened. |
| **Semantic** | Chosen for its *meaning* (`<nav>`) rather than its appearance. |
| **Landmark** | A semantic element marking a region (`<header>`, `<main>`, `<footer>`). |
| **Entity** | A code for a special character, such as `&amp;` for `&` and `&lt;` for `<`. |
| **Document** | The whole page, from `<!DOCTYPE html>` to `</html>`. |

## The Skeleton of Every Page

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

**What happens if you do not.** Symbols turn into garbage such as "Â°" and "â†’". Put it first in the head, so the browser knows before it reads anything else.
:::

:::why The title element
**What it is.** `<title>` in the head, which does not appear on the page itself.

**Why it is done this way.** It names the page for the browser tab, bookmarks, history and search results.

**Why it matters.** It is the first thing a screen-reader user hears and what a search engine shows as the link.

**What happens if you do not.** The tab shows the file name, and a visitor with twenty tabs open cannot find your page.
:::

(The viewport line was explained in Chapter 4.)

## Text and Structure

Headings go from `<h1>` (the most important) to `<h6>`. Use them in order, and use one `<h1>` per page. Paragraphs are `<p>`. Lists are `<ul>` (bullets) or `<ol>` (numbers), with each item in an `<li>`. Emphasis uses `<em>` (meaning stress) and `<strong>` (meaning importance), *not* `<i>` and `<b>`, which only describe looks.

:::why Headings in order
**What it is.** `<h1>`, then `<h2>` for its sections, then `<h3>` for theirs, never skipping a level.

**Why it is done this way.** Headings form an outline, like a book's contents page.

**Why it matters.** Screen-reader users jump from heading to heading to scan a page, the way you glance down a page for bold titles.

**What happens if you do not.** Choosing `<h4>` because it "looks the right size" makes the outline jump about, and navigating the page becomes confusing. Choose the *meaning* with HTML, and choose the *size* with CSS.
:::

## Links, Images and Media

```
<a href="about.html">About me</a>
<a href="https://example.com" target="_blank" rel="noopener">Another site</a>
<img src="robot.jpg" alt="A yellow two-wheeled robot with a claw" width="640" height="480">
```

:::why alt, width and height on images
**What it is.** A text description (`alt`) and the real pixel size (`width` and `height`) on every `<img>`.

**Why it is done this way.** The `alt` describes the picture to someone who cannot see it. The size lets the browser reserve space before the image arrives.

**Why it matters.** Blind visitors get the meaning of the picture. And the page does not jump around when the image loads (Chapter 8's layout shift).

**What happens if you do not.** Screen readers read out the file name ("IMG underscore 4032"), and the text jumps down when the picture appears.
:::

:::why rel="noopener" on links that open a new tab
**What it is.** `rel="noopener"` next to `target="_blank"`.

**Why it is done this way.** Without it, the new page can reach back and control the page that opened it.

**Why it matters.** It closes a small but real security hole.

**What happens if you do not.** A page you link to could redirect your page to something nasty, and your visitor would not notice. (Modern browsers now add this behaviour by default, but writing it is still good manners and works in older ones.)
:::

## Forms

A form collects input. Each control should have a **label**, and the label and control are connected by matching `for` and `id`.

```
<form action="/subscribe" method="post">
    <label for="email">Your email</label>
    <input id="email" name="email" type="email" required>
    <button type="submit">Subscribe</button>
</form>
```

:::why Connecting a label to its input
**What it is.** `<label for="email">` paired with `<input id="email">`.

**Why it is done this way.** The pair tells the browser which text belongs to which box.

**Why it matters.** Clicking the label focuses the box, which makes a bigger target on a phone. A screen reader announces "Your email" when the box is focused.

**What happens if you do not.** The visitor hears "edit text, blank" and has no idea what to type. The `type="email"` and `required` do some checking for free, and show the right keyboard on a phone.
:::

## Worked Example: A Small Page, Built Properly

:::worked A recipe card
Build a page with a title, a heading, a picture, a list of ingredients, and a link back to the home page. Use landmarks.

**Step 1. Skeleton.** Start with the skeleton above and set the title to "Pancakes".

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
  </main>
  <footer>&copy; 2026</footer>
</body>
```

**Step 4. Check.** Open the browser developer tools, look at the Elements panel, and confirm the tree matches the nesting you meant. Then press Tab: the only stop should be the Home link.

**Why this is "properly".** No `<div>` is needed anywhere. Each element says what it is, so the page works for screen readers, search engines and keyboards without extra effort.
:::

## Practice Problems

:::problems
1. List the six lines you would put in the `<head>` of a new page, and say what each does.
2. This markup is wrong in three ways. Find them: `<p>Welcome to <b>my site</p></b>` and `<img src="a.jpg">`.
3. Write a navigation bar containing three links using a list, and wrap it in the right landmark element.
4. Write an HTML form for a login with a username and a password, each with a proper label.
5. A page has these headings in order: `<h1>`, `<h3>`, `<h2>`, `<h5>`. Explain the problem and fix it.
6. Which element would you use for each: (a) text that is more important than its neighbours, (b) a clickable thing that submits a form, (c) the list of steps in a recipe, where order matters.
:::

:::answers
**Chapter 9 practice problems.**

1. `<!DOCTYPE html>` (modern mode, strictly before the head); `<html lang="en">`; `<meta charset="UTF-8">` (character table); the `viewport` meta (true phone width); `<title>` (tab name); a stylesheet `<link>`. (The doctype and html tag sit above the head, so a strict answer is the last four inside the head plus these two outside.)
2. The `<b>` is closed after the `<p>` (wrong nesting; it should be `<p>Welcome to <b>my site</b></p>`), `<b>` should be `<strong>` for importance, and the `<img>` has no `alt`, `width` or `height`.
3. `<nav><ul><li><a href="a.html">A</a></li><li><a href="b.html">B</a></li><li><a href="c.html">C</a></li></ul></nav>`
4. `<form><label for="u">Username</label><input id="u" name="u" type="text" autocomplete="username"><label for="p">Password</label><input id="p" name="p" type="password" autocomplete="current-password"><button type="submit">Log in</button></form>`
5. The levels jump (h1 to h3, then back to h2, then h5), so the outline is confusing. Use `<h1>`, `<h2>`, `<h3>`, `<h4>` in order, and change the sizes with CSS.
6. (a) `<strong>`. (b) `<button type="submit">`. (c) `<ol>`.
:::
