# The Browser as a Machine

Think of a browser as a very fast short-order cook. Orders come in (HTML, CSS, scripts), and the cook has one pair of hands, a strict timetable, and a customer who walks out if dinner is late. Understand how the kitchen runs and you will write pages that feel smooth almost by accident. Ignore it, and your pages will stutter, and you will not know why.

:::objectives
- Name the steps that turn bytes into pixels, and say which of them a given CSS change repeats.
- Draw the DOM tree for a small piece of HTML.
- Explain why stylesheets block the first paint and why scripts block the parser, and what `async` and `defer` change.
- Work out the frame budget for any refresh rate.
- Recognise layout thrashing in code and rewrite it.
- Measure before guessing, using the Performance panel.
:::

## From Bytes to Pixels: The Critical Rendering Path

When the first bytes of an HTML file arrive, the browser does not wait for the rest. It starts cooking immediately, in a fixed sequence of steps called the **critical rendering path**.

#### Step 1: Parse the HTML into the DOM

The browser reads the HTML text and builds a **tree** of objects from it, called the **Document Object Model**, or **DOM**. Each tag becomes a node, and a tag inside another tag becomes its child.

```
<body>                         body
  <h1>Patrick</h1>               |-- h1 -- "Patrick"
  <p>A <em>robot</em>.</p>       `-- p   -- "A ", em -- "robot", "."
</body>
```

The DOM is the browser's working model of your page, and it is the thing your JavaScript reads and changes. Notice that the browser is forgiving. If you forget an end tag, it quietly repairs the tree and carries on. That is friendly, and it is also why a typo in HTML usually gives you a *weird layout* and not an error message.

@figure dom-tree The DOM for a tiny page. Every tag becomes an element node and every run of text becomes a text node. The `em` sits *inside* the paragraph's text, between two text nodes, which is exactly how it appears in the source.

#### Step 2: Parse the CSS into the CSSOM

As stylesheets arrive, the browser builds a second tree called the **CSS Object Model**, which records the rules and their selectors. Here is the surprising part: the browser will not draw anything until its stylesheets have been read. We say stylesheets **block rendering**.

:::why Stylesheets blocking the first paint
**What it is.** The browser waits for CSS to load before it paints the first picture of the page.

**Why it is done this way.** The alternative is to paint the page with no styles, then repaint it when the CSS arrives.

**Why it matters.** That alternative produces the "flash of unstyled content": plain text jumps and rearranges as the styles land. It looks broken and it makes the browser do the same work twice.

**What happens if you do not (that is, if you load CSS late).** Visitors see the ugly unstyled version first. That is why the stylesheet link belongs in the `<head>` at the top of the page, so it starts downloading right away.
:::

#### Step 3: Build the render tree, then layout, paint, composite

The browser combines the DOM and the CSSOM into a **render tree**, which holds only things that will actually appear (an element with `display: none` is in the DOM but not in the render tree), along with their final styles. Then three more steps happen.

1. **Layout** (also called *reflow*) works out the size and position of every box. It is pure geometry: given the width of the window, how wide is each box, where does the text wrap, how tall is each row?
2. **Paint** turns each box into drawing instructions: fill this rectangle, draw this text, draw this border.
3. **Composite** takes the painted pieces, which live on separate **layers**, and stacks them on the screen, usually with the graphics processor (the GPU) doing the work.

@figure rendering-pipeline The critical rendering path. HTML and CSS are parsed into two trees, combined, laid out, painted and composited. JavaScript can reach into both trees, which is why a script can change anything, and why it can force the later steps to run again.

:::remember
This last trio is the most useful idea in the chapter. Changing something that affects **geometry** (like `width`) redoes layout, paint *and* composite. Changing something that only affects **appearance** (like `background-color`) skips layout but still repaints. Changing `transform` or `opacity` on an element with its own layer can be done at the composite step alone, which is by far the cheapest.
:::

:::why Animating with transform instead of left
**What it is.** To slide a box across the screen, you change `transform: translateX(...)` and not `left`.

**Why it is done this way.** `left` changes geometry, so every frame the browser redoes layout, then paint, then composite. `transform` on a layered element only needs the composite step, and the GPU can do that.

**Why it matters.** Your frame budget (see below) is tiny. Skipping two of the three steps leaves most of it free for everything else.

**What happens if you do not.** The animation works on your fast laptop and judders on a phone. It is a classic "works on my machine" bug.
:::

## JavaScript and the Parser

JavaScript complicates things, because a script can change the DOM and the styles while the browser is still building them. When the parser meets a normal `<script>` tag, it has to stop, fetch the script, run it, and only then carry on, because the script might change something that comes later. A slow script near the top of a page therefore holds up everything below it.

Two small attributes fix this. An **`async`** script downloads while parsing continues and runs the moment it arrives, in no promised order. A **`defer`** script also downloads while parsing continues, but it waits and runs only after the whole page has been parsed, and deferred scripts run in the order they appear.

```
<script defer src="katex.min.js"></script>
<script defer src="auto-render.min.js"></script>   <!-- runs after katex.min.js -->
```

@figure script-loading What the parser does while a script arrives. A plain script stops parsing until it has downloaded and run. An `async` script downloads alongside parsing and runs the moment it lands. A `defer` script downloads alongside parsing and runs only after the whole document is parsed.

:::why Marking library scripts defer
**What it is.** Adding the word `defer` to a script tag.

**Why it is done this way.** The scripts need the page's HTML to exist before they run (they look for elements to fill in), but they do not need to block the page from appearing.

**Why it matters.** The text and layout appear first, and the instruments come to life a moment later. And because deferred scripts run in order, `auto-render` can rely on `katex` having loaded first.

**What happens if you do not.** The visitor stares at a blank page while the scripts download. And a script that runs too early finds no elements to work on, and silently does nothing. The flight dynamics and mechatronics pages of this website load their libraries with `defer`.
:::

## The Main Thread and the Frame Budget

Your page runs on one **main thread**, like our cook's single pair of hands. Parsing HTML, working out styles, layout, painting instructions, and running your JavaScript all take turns on it. While one is busy, the others wait. A script that runs for a long time makes the page unable to respond to clicks, scroll, or animate. Any stretch longer than about 50 milliseconds is called a **long task**, and long tasks are the root of almost every sluggish page.

Smooth motion needs a fresh picture each time the screen refreshes. A 60-hertz screen refreshes 60 times a second, so you get a new frame every 1/60 of a second, which is 16.67 milliseconds. Inside that window the browser has to run your code, work out styles, lay things out, paint and composite. That window is your **frame budget**.

:::worked The budget of a frame
A display refreshes at 144 hertz. The robot page of this website redraws a 3D scene and eight charts. What is the budget for one frame, and how much is left if the browser itself needs about 3 milliseconds?

**Step 1. Budget.** The period is the reciprocal of the frequency: 1000 ms ÷ 144 = 6.94 ms.

**Step 2. What is left for you.** 6.94 − 3 = 3.94 ms.

**Step 3. Compare with 60 hertz.** At 60 Hz the budget is 16.67 ms, leaving 13.67 ms for the same code, more than three times as much. A page that is comfortable at 60 Hz can be over budget at 144 Hz.

**What happens when you go over?** The browser does not squeeze the work in. It misses the frame and shows the old picture again, and the motion appears to stutter. That is why the robot page measures its own frame times and, if they stay too long, lowers its rendering quality a step at a time until it fits.
:::

@figure frame-budget One frame at 60 hertz and one at 144 hertz, drawn to the same scale. The browser's own steps (style, layout, paint, composite) come out of the same budget as your script.

## The Graphics Processor

The GPU is a second processor that is brilliant at doing the same simple sum on thousands of pixels at once. Browsers use it to composite layers, and a page can use it directly through **WebGL**, which is how 3D graphics run in a page. The GPU is wonderful at drawing a million triangles and poor at making decisions. So the work is divided: JavaScript on the main thread decides *what* to draw, and the GPU does the drawing.

## Layout Thrashing

There is one sneaky trap worth naming. The browser avoids recalculating layout more often than it has to. If you change several styles in a row, it waits and recalculates once. But if, between your changes, you *read* a value that depends on layout (like `offsetHeight`), the browser has to recalculate immediately to give you a correct answer. Mixing reads and writes forces a recalculation every time round, and the cost piles up.

```
// slow: layout is recalculated on every pass of the loop
for (const box of boxes) {
  box.style.width = box.parentNode.offsetWidth / 2 + 'px';   // read, then write
}

// fast: read everything first, then write everything
const widths = boxes.map(b => b.parentNode.offsetWidth);
boxes.forEach((b, i) => { b.style.width = widths[i] / 2 + 'px'; });
```

:::why Reading everything first, then writing
**What it is.** Doing all your measurements in one batch, then all your changes in another.

**Why it is done this way.** Reading a layout value forces the browser to finish any pending layout work first. Grouping the reads means that happens once, not once per element.

**Why it matters.** On 500 boxes, the slow version recalculates layout 500 times. The fast version does it once.

**What happens if you do not.** Your page does the same amount of "real" work but feels a hundred times slower, and the cause is invisible in the code unless you know the rule.
:::

:::worked The cost of a thrashing loop
A page has 500 boxes. Recalculating the layout of the page takes 0.4 ms. How long does each version of the loop above spend in layout, and what does that mean for the frame budget?

**Step 1. The slow version.** Each pass reads `offsetWidth` after the previous pass wrote a width, so the browser must recalculate layout before it can answer. That is one recalculation per box: 500 × 0.4 = 200 ms.

**Step 2. The fast version.** All the reads happen first, against one clean layout, so one recalculation serves them all. Then all the writes happen, and the browser lays out once more before it paints: 2 × 0.4 = 0.8 ms.

**Step 3. Against the budget.** At 60 hertz the budget is 16.7 ms. The slow version misses twelve frames in a row; the visitor sees the page freeze for a fifth of a second. The fast version uses one twentieth of a single frame.

**What the answer tells you.** The two loops do the same arithmetic and set the same widths. The only difference is the *order* of reads and writes. This is the kind of bug a profile finds and a code review usually misses.
:::

## Measure, Don't Guess

The developer tools have a **Performance** panel. It records a few seconds of your page's life and draws a timeline showing how the main thread spent every millisecond: scripting, rendering, painting. Long tasks are marked in red. The first rule of making a page faster is to measure it. The second is to measure it again after the change, because human intuition about speed is wrong a surprising amount of the time.

:::tip
Before you "optimise" anything, record a profile. A change that feels like it should help often does nothing, and a boring line you never suspected is often the real culprit.
:::

:::summary
- The browser turns HTML into the **DOM** and CSS into the **CSSOM**, combines them into a render tree, then runs **layout**, **paint** and **composite**.
- Changing geometry repeats all three steps; changing colour repeats paint; changing `transform` or `opacity` on a layer repeats only composite. Animate the cheap ones.
- Stylesheets block the first paint on purpose. Plain scripts block the parser; `defer` lets the page appear first and keeps scripts in order.
- Everything shares one **main thread**. A **long task** (over 50 ms) freezes the page. The **frame budget** is 1000 ms ÷ refresh rate: 16.7 ms at 60 Hz, 6.9 ms at 144 Hz.
- Reading a layout value after writing one forces a recalculation. Batch reads, then writes.
- Measure with the Performance panel. Then measure again.
:::
