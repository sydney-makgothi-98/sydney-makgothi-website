@part Part IV. Advanced Topics
@partsub Going deeper into each tool, once the basics feel comfortable

# Advanced CSS

You can build a lot with the CSS of Chapter 10. This chapter covers the tools that make a *large* stylesheet stay manageable, and that make a design respond to more than the width of the screen.

## Cascade Layers

Specificity wars (Chapter 3) get worse as a project grows. **Cascade layers** let you declare, up front, which *groups* of rules beat which, regardless of specificity.

```
@layer reset, base, components, overrides;

@layer reset { * { margin: 0; box-sizing: border-box; } }
@layer base { body { font-family: system-ui, sans-serif; } }
@layer components { .card { padding: 1rem; } }
@layer overrides { .card { padding: 2rem; } }
```

:::why Declaring the layer order first
**What it is.** The first line lists the layers from weakest to strongest. A rule in a later layer wins over one in an earlier layer, whatever the specificity.

**Why it is done this way.** You decide who outranks whom once, in one place.

**Why it matters.** A plain `.card` in `overrides` beats an ID selector in `base`. You stop needing `!important` and long selectors.

**What happens if you do not.** As the stylesheet grows, you add ever more specific selectors to win arguments, until nobody dares touch anything.
:::

## Container Queries

A media query asks about the *screen*. A **container query** asks about the *space the component actually has*, which is what a reusable component really cares about.

```
.card-wrap { container-type: inline-size; }
@container (min-width: 420px) {
    .card { display: grid; grid-template-columns: 120px 1fr; gap: 1rem; }
}
```

:::why Asking the container, not the screen
**What it is.** The card switches to a side-by-side layout when *its own container* is at least 420 pixels wide.

**Why it is done this way.** The same card might sit in a wide main column in one place and a narrow sidebar in another.

**Why it matters.** The card behaves correctly wherever you put it.

**What happens if you do not.** A screen-width query makes the card go wide in the sidebar just because the screen is wide, and it overflows.
:::

## Logical Properties, :has() and Custom Property Tricks

**Logical properties** (`margin-inline`, `padding-block`) are written in terms of text direction, not left and right, so layouts flip correctly for right-to-left languages. The **`:has()`** selector styles a parent based on its children (`.card:has(img)`). Custom properties can be changed from JavaScript, which is a clean bridge between the two languages.

```
panel.style.setProperty('--progress', 0.6);        /* JavaScript sets the number */
.bar { transform: scaleX(var(--progress)); }       /* CSS decides what it looks like */
```

:::why Passing a number through a custom property
**What it is.** JavaScript sets `--progress`; CSS uses it.

**Why it is done this way.** The script reports the *fact*, the stylesheet owns the looks (Chapter 3).

**Why it matters.** A designer can change what "60 percent" looks like without touching the script.

**What happens if you do not.** The script sets pixel widths directly, so changing the design means editing JavaScript.
:::

:::quiz Advanced CSS
1. What does `@layer a, b, c;` establish?
2. When is a container query better than a media query?
3. Why is `margin-inline` preferable to `margin-left` for an international site?
:::

:::answers
**Advanced CSS quiz.**

1. The order of precedence of three layers: rules in `c` beat `b`, which beat `a`, regardless of specificity.
2. When a component's layout should depend on the space it is given (a card in a sidebar versus the main column) and not on the screen width.
3. It follows the writing direction, so layouts mirror automatically for right-to-left languages, where "left" means the opposite side.
:::

# Advanced JavaScript

## Modules, Bundling and Dynamic Import

Chapter 11 showed `import` and `export`. A big page can also load code *only when it is needed* with **dynamic import**.

```
button.addEventListener('click', async () => {
    const { openViewer } = await import('./viewer.js');     // loaded now, not at page start
    openViewer();
});
```

:::why Loading heavy code on demand
**What it is.** The 3D viewer's code is downloaded only when the visitor asks for it.

**Why it is done this way.** Most visitors never open the viewer.

**Why it matters.** The first load is smaller and faster (Chapter 1's cost-of-a-request arithmetic).

**What happens if you do not.** Everyone pays for a heavy library that only a few use.
:::

## Closures, `this` and Pitfalls

Closures (Chapter 11) are powerful and have one classic trap: a closure captures the *variable*, not its value at that moment.

```
for (var i = 0; i < 3; i++) setTimeout(() => console.log(i), 0);   // prints 3, 3, 3
for (let i = 0; i < 3; i++) setTimeout(() => console.log(i), 0);   // prints 0, 1, 2
```

:::why let in loops
**What it is.** `let` makes a fresh `i` for each trip round the loop. `var` shares a single `i` across all of them.

**Why it is done this way.** `let` has block scope.

**Why it matters.** Each callback closes over its own `i`.

**What happens if you do not.** All three timers see the final value, 3, and the bug is baffling the first time.
:::

## Web Workers

The main thread (Chapter 2) must stay free for drawing. A **Web Worker** runs a script on a *separate* thread, so heavy calculations do not freeze the page.

```
const worker = new Worker('solver.js');
worker.postMessage({ n: 1e7 });
worker.onmessage = e => console.log('result', e.data);
```

:::why Offloading heavy sums to a worker
**What it is.** The expensive calculation happens on another thread. Results come back as messages.

**Why it is done this way.** A long task on the main thread freezes input and animation (Chapter 2).

**Why it matters.** The page stays smooth while the worker crunches numbers (a simulation, an image filter).

**What happens if you do not.** A half-second calculation freezes the page for half a second, every time.
:::

:::technical Technical Stuff
Workers cannot touch the DOM. They only exchange copies of data with the page through messages, which is why they are safe: there is no shared variable to corrupt.
:::

:::quiz Advanced JavaScript
1. What does dynamic `import()` do that a normal `import` does not?
2. What do the two loops above print, and why do they differ?
3. Why can a worker not change the page directly?
:::

:::answers
**Advanced JavaScript quiz.**

1. It loads a module at the moment it is called (and returns a promise), instead of at page start.
2. `var`: 3, 3, 3 (one shared variable, already 3 when the timers fire). `let`: 0, 1, 2 (one new variable per iteration).
3. Workers have no access to the DOM; they only send and receive messages. That keeps the two threads from interfering with each other's data.
:::

# Advanced React

## Effects, Cleanup and Refs

You met `useEffect` in Chapter 12. The advanced rule is that effects should be **honest about their dependencies**, and should always clean up.

A **ref** (`useRef`) holds a value that survives renders *without* causing one, which is perfect for things outside React's world: a canvas, a timer id, a 3D renderer.

```
function Viewer() {
    const canvasRef = React.useRef(null);
    React.useEffect(() => {
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
        let raf = requestAnimationFrame(function loop() {
            renderer.render(scene, camera);
            raf = requestAnimationFrame(loop);
        });
        return () => { cancelAnimationFrame(raf); renderer.dispose(); };
    }, []);
    return <canvas ref={canvasRef} />;
}
```

:::why Starting the loop in an effect and stopping it on cleanup
**What it is.** The animation loop and renderer are created after the canvas exists, and torn down when the component leaves.

**Why it is done this way.** The canvas does not exist until React has rendered. And a running loop outlives the component unless you stop it.

**Why it matters.** Memory and GPU resources are released.

**What happens if you do not.** Every time the component appears, another loop and renderer pile up, and the page slows to a crawl.
:::

## Avoiding Wasted Renders

React re-renders a component whenever its state or props change, and by default also re-renders its children. `React.memo` skips a child whose props have not changed, and `useMemo` and `useCallback` keep a value or function the same between renders.

:::why Measuring before memoising
**What it is.** Wrapping something in `memo` only after you have *seen* a slow render in the profiler.

**Why it is done this way.** Memoising has a cost of its own, and most renders are cheap.

**Why it matters.** The code stays simple where it can.

**What happens if you do not.** You scatter `useMemo` everywhere "just in case", and it makes the code harder to read without making it faster (Chapter 2's rule: measure, do not guess).
:::

## Custom Hooks and Context

When two components share the same logic, move it into a **custom hook**, a function whose name starts with `use` that calls other hooks. **Context** lets a value be read by any descendant without passing props through every level.

:::why Custom hooks for repeated logic
**What it is.** `useWindowWidth()` wraps the resize effect from Chapter 12's exercises.

**Why it is done this way.** Logic, like data, should live in one place.

**Why it matters.** Fix a bug once and every component benefits.

**What happens if you do not.** The same effect is copied into six components, and you fix it in five.
:::

:::quiz Advanced React
1. Why does an effect that starts a loop need to return a cleanup function?
2. When is `useRef` the right tool?
3. Why is it wrong to wrap everything in `useMemo`?
:::

:::answers
**Advanced React quiz.**

1. Otherwise the loop keeps running after the component is gone, leaking memory and GPU resources and stacking up duplicates.
2. When you need a value that persists across renders without triggering a re-render, such as a DOM node, a timer id or a renderer.
3. Memoisation has its own cost and most renders are cheap, so it adds complexity for no gain. Use it where a profile shows a slow render.
:::
