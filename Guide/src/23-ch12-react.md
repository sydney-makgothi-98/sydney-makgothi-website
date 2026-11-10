# React: Interfaces from Components

Chapter 5 ended with a promise: *screen = render(state)*. React is a library that keeps that promise for a whole page. You describe what the page should look like for the current state, and React works out the smallest set of changes needed to make the real page match. It is not magic, and it is not necessary for every page (this website's live pages do not use it), but it is the most common way professional teams build interfaces, so you should know how it thinks. Every example in this chapter was rendered for real with React 18.3 in Node (the file `Guide/code/react/examples.jsx`), and the outputs are quoted from that run.

:::objectives
- Write components with JSX, pass props down and send events up.
- Hold state with `useState`, update it without mutation, and explain batching.
- Render lists with stable keys and know what goes wrong without them.
- Run side effects with `useEffect`, declare dependencies honestly, and clean up.
- Decide what is state, what is derived, and where state should live.
- Build controlled forms, use refs for things outside React, and read the render cycle.
- Get React into a real page with a build step.
:::

## Words You Will Meet

| Word | What it means |
|---|---|
| **Component** | A function that returns a description of part of the screen. |
| **JSX** | A syntax that lets you write HTML-like tags inside JavaScript. |
| **Element** | What JSX produces: a plain object describing a tag or component and its props. |
| **Props** | Inputs passed *down* to a component, like function arguments. |
| **State** | Data a component remembers between renders. |
| **Hook** | A function whose name starts with `use` that adds a feature to a component (`useState`, `useEffect`, `useRef`). |
| **Render** | Calling your component to get its description of the screen. |
| **Reconciliation** | Comparing the new description with the old one to find the changes. |
| **Effect** | Code that talks to the world outside React (timers, the network, the DOM) after rendering. |
| **Key** | A stable label React uses to tell list items apart. |
| **Controlled input** | A form control whose value is held in state and written back on every change. |
| **Lifting state up** | Moving state to the nearest component that all its users share. |

## 12.1 What React Is, and Is Not

React is a JavaScript library with one job: keep the page in step with your data. You write functions that take data and return a description of the screen; React turns the description into real DOM nodes, and when the data changes, updates only the nodes that need it. It does not fetch data, route between pages, or style anything; other libraries do those, and most React projects use several.

React earns its place when a page has a lot of state that many parts share: a dashboard, an editor, a shop. For a page that is mostly content with a few instruments, like this website's, plain JavaScript with Chapter 5's render-from-state habit does the same job with no build step and no library to download. Part V shows the one React file in this project and why it is not wired in. The ideas, though, transfer completely: a React component is Chapter 5's `render(state)` with the bookkeeping done for you.

## 12.2 Components and JSX

A component is a function whose name starts with a capital letter and which returns JSX.

```
function Greeting({ name }) {
    return <h1 className="title">Hello, {name}!</h1>;
}
// used like an HTML tag:  <Greeting name="Patrick" />
// renders:  <h1 class="title">Hello, Patrick!</h1>
```

JSX is not HTML. It is JavaScript in disguise, and a build step turns each tag into a function call that produces a plain object (an **element**). The rules that follow from that:

- **Curly braces drop back into JavaScript.** `{name}`, `{count + 1}`, `{items.map(...)}`. Anything that is an expression. Statements (`if`, `for`) are not allowed inside braces, which is why you see ternaries and `&&` there.
- **A few attribute names differ**, because they are JavaScript words: `className` not `class`, `htmlFor` not `for`. Event handlers are `onClick`, `onChange`, `onSubmit`, written in camelCase, and take a *function*, not a string.
- **A component returns one root.** Wrap siblings in a `<div>` or, when you do not want an extra element, in a fragment `<>...</>`.
- **Components start with a capital letter**, so that `<greeting>` (an unknown HTML tag) and `<Greeting>` (your function) can be told apart.
- **`style` takes an object** (`style={{ color: 'red' }}`), but you should rarely use it; classes and a stylesheet are still the right tool (Chapter 3).
- **Conditional rendering** is `cond ? <A /> : <B />` or `cond && <A />`. Lists are `array.map(item => <li key={item.id}>...</li>)`.

```
function Status({ phase, items }) {
    return <div>{phase === 'DONE' ? <p>Finished</p> : <p>Working: {phase}</p>}
                {items.length > 0 && <ul>{items.map(i => <li key={i.id}>{i.label}</li>)}</ul>}</div>;
}
// <Status phase="CARRY" items={[{id: 1, label: 'egg'}]} />  ->  <div><p>Working: CARRY</p><ul><li>egg</li></ul></div>
// <Status phase="DONE" items={[]} />                        ->  <div><p>Finished</p></div>
```

:::why Why JSX needs a build step
**What it is.** Browsers cannot read JSX. A tool such as esbuild or Vite converts it into plain JavaScript before the page loads.

**Why it is done this way.** JSX makes the structure of an interface readable at a glance, and compiling it costs nothing at run time.

**Why it matters.** You write `<h1>Hello</h1>` and get exactly what it says.

**What happens if you do not use a build step.** The browser reports a syntax error on the first `<`. (You can compile JSX in the browser with a library called Babel for experiments, but it is slow and not meant for real sites.)
:::

:::warning
`items.length && <ul>...</ul>` renders the number `0` on the page when the list is empty, because `0 && x` is `0` and React prints numbers. Write `items.length > 0 && ...` so the left side is a real boolean.
:::

## 12.3 Props Down, Events Up

Data flows in one direction: from parents to children, as **props**. A child never changes its props. When something must change, the child calls a function the parent gave it.

@figure react-data-flow The state that two branches share lives in their nearest common parent. It flows down as props; changes flow up as function calls. No component ever reaches sideways.

```
function App() {
    const [tag, setTag] = useState('all');
    return <>
        <FilterBar tag={tag} onPick={setTag} />
        <Gallery items={ITEMS.filter(i => tag === 'all' || i.tag === tag)} />
    </>;
}
function FilterBar({ tag, onPick }) {
    return <div>{['all', 'aero', 'robots'].map(t =>
        <button key={t} className={t === tag ? 'on' : ''} onClick={() => onPick(t)}>{t}</button>)}</div>;
}
```

`FilterBar` does not know what happens when a chip is picked. It reports the fact to whoever gave it `onPick`. `Gallery` does not know how the items were chosen. That ignorance is the point: each component can be understood, tested and reused alone.

:::why One-way data flow
**What it is.** Information moves down through props. Changes move up through functions that were passed down.

**Why it is done this way.** If any child could change data anywhere, you could never be sure where a value came from.

**Why it matters.** When something looks wrong, you only have to follow the data *upward*, to the one place that owns it. This is Chapter 5's "keep each fact once" rule, enforced by the library.

**What happens if you do not.** The same data ends up copied in several components and drifting apart, which is exactly the bug that React exists to prevent.
:::

## 12.4 State

`useState(initial)` returns the current value and a function to change it. Calling that function schedules a new render of the component; the next time the function runs, `useState` returns the new value.

```
function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>You clicked {count} times.</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}
```

Two rules make state behave.

**Replace, never mutate.** React decides whether anything changed by comparing the old and new value with `===`. Pushing onto the same array leaves the same reference, so it looks unchanged.

```
const [items, setItems] = useState(['a', 'b']);
items.push('c');                 // WRONG: same array, React sees no change
setItems([...items, 'c']);       // RIGHT: a new array, so React notices
```

**Updates are batched, and the value is a snapshot.** Inside one event, `count` is the value from *this render*. Three calls to `setCount(count + 1)` all compute `0 + 1`. The function form `setCount(c => c + 1)` is given the latest value each time.

```
2: three set calls in one click, plain form -> You clicked 1 times.
2: three set calls in one click, functional form -> You clicked 3 times.
```

:::why Replace state, do not mutate it
**What it is.** Calling the setter with a *new* array or object, never altering the old one.

**Why it is done this way.** React decides whether to re-render by comparing the old and new value with `===`. Pushing onto the same array leaves the same reference, so it looks unchanged.

**Why it matters.** The screen updates when the data does. This is why Chapter 11 taught the spread operator and immutable updates.

**What happens if you do not.** The data changes and the screen does not, and you spend an hour wondering why a button "does nothing".
:::

:::tip
When the new state depends on the old state, pass a function: `setCount(c => c + 1)`. If several updates are batched in one event, this form gets the latest value every time. For an object, spread and override: `setForm(f => ({ ...f, email: value }))`.
:::

## 12.5 Rendering Lists and Keys

To show a list, map an array to elements and give each a `key`.

```
<ul>
    {items.map(item => <li key={item.id}>{item.label}</li>)}
</ul>
```

Leave the key out and React tells you so, in the console, every time:

```
3: Warning: Each child in a list should have a unique "key" prop.
```

:::why Keys on list items
**What it is.** A unique, stable `key` on each element made in a list.

**Why it is done this way.** When the list changes, React needs to know which old item corresponds to which new item, so it can move, add or remove the right ones.

**Why it matters.** Without keys, React guesses by position, and reordering a list can leave typed text or focus on the wrong row.

**What happens if you do not.** You get the warning above, and subtle bugs: edit the third item, delete the first, and the text you typed jumps to a different row. Do not use the array index as a key if the list can be reordered or filtered.
:::

## 12.6 Effects: Talking to the Outside World

A component's render should be a pure calculation. Anything else (starting a timer, subscribing to an event, fetching data, touching the DOM directly) belongs in an **effect**, which runs *after* rendering.

```
useEffect(() => {
    const id = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(id);            // cleanup
}, []);                                         // run once, when the component appears
```

The function returned from an effect is its **cleanup**: React runs it when the component is removed, and before the effect runs again. The array at the end is the **dependency list**: the values from the component that the effect reads. An empty array means "run once"; leaving the array out means "run after every render", which is almost never what you want.

```
5: effect: start timer | cleanup: stop timer
```

:::why The cleanup function and the dependency list
**What it is.** The function returned from an effect runs when the component disappears (or before the effect runs again). The array at the end lists the values the effect depends on.

**Why it is done this way.** Effects start things (a timer, a listener). Something has to stop them.

**Why it matters.** Without cleanup, the timer keeps running after the component is gone. Without the right dependency list, the effect uses stale values or runs far too often.

**What happens if you do not.** You leak timers and event listeners, so a page that has been open for an hour is slow and uses more and more memory.
:::

:::warning
In development, inside `<StrictMode>`, React deliberately runs every effect twice on first mount (effect, cleanup, effect) to check that your cleanup really undoes your setup. If something happens twice "for no reason", that is why, and the fix is a correct cleanup, not removing StrictMode.
:::

#### Fetching data in an effect

```
useEffect(() => {
    let cancelled = false;
    fetch(`/api/parts/${id}`).then(r => r.json()).then(data => { if (!cancelled) setPart(data); });
    return () => { cancelled = true; };
}, [id]);
```

The effect depends on `id`, so it runs again when the id changes. The `cancelled` flag stops a slow reply for an old id overwriting the data for the new one, which is the classic race in any interface that loads things.

## 12.7 Thinking in React: What Is State?

The hardest part of React is not the syntax. It is deciding what to store. Chapter 5's rule applies with full force: keep each fact once, and derive everything else.

Ask three questions of every piece of data. Is it passed in from a parent? Then it is a prop, not state. Does it stay the same over time? Then it is a constant. Can it be computed from other state or props? Then it is **derived**, and you compute it in the render, every time. What is left is the state.

:::worked Type to filter
Build a component with a text box and a list of fruits, showing only the fruits that contain the typed text.

**Step 1. What is the state?** Only one thing changes: the text in the box. Call it `query`. The *filtered list is not state*, because it can be worked out from the query.

**Step 2. Write it.**

```
function FruitFilter({ fruits }) {
    const [query, setQuery] = useState('');
    const shown = fruits.filter(f => f.toLowerCase().includes(query.toLowerCase()));
    return (
        <div>
            <label>Filter <input value={query} onChange={e => setQuery(e.target.value)} /></label>
            <ul>{shown.map(f => <li key={f}>{f}</li>)}</ul>
        </div>
    );
}
```

**Step 3. Run it.** With `fruits = ['Apple', 'Banana', 'Cherry']`:

```
4: [ 'Apple', 'Banana', 'Cherry' ]
   after typing "an": [ 'Banana' ]
   after typing "e":  [ 'Apple', 'Cherry' ]
```

**Step 4. Why it works.** The box shows `query` and edits it, so state and screen cannot disagree. The list is *derived*: every render recomputes it. There is no "update the list" code at all.
:::

**Lifting state up.** When two components need the same fact, the fact moves to their nearest common parent and comes down to both as props. The chart chips and the chart in Chapter 5's worked example are one state (`chart`) in a parent, a `Chips` child that shows it and asks to change it, and a `Chart` child that draws it.

## 12.8 Forms and Controlled Inputs

A **controlled** input has its value in state and writes every change back: `<input value={query} onChange={e => setQuery(e.target.value)} />`. The state is the one truth and the box merely shows it, so you can validate, transform or reject keystrokes as they happen. A checkbox uses `checked` and `e.target.checked`; a select uses `value` on the `<select>`. A whole form is an object in state, updated with spread:

```
const [form, setForm] = useState({ email: '', msg: '' });
const edit = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
<form onSubmit={e => { e.preventDefault(); send(form); }}>
    <input name="email" type="email" value={form.email} onChange={edit} required />
    <textarea name="msg" value={form.msg} onChange={edit} />
    <button type="submit">Send</button>
</form>
```

The computed key `[e.target.name]` lets one handler serve every field, which is Chapter 9's `name` attribute doing double duty.

## 12.9 Refs: Things Outside React

`useRef` holds a value that survives renders *without* causing one. It has two uses: a handle on a real DOM node (a canvas to draw on, an input to focus), and a mutable box for things like a timer id or a render count that are not part of the picture.

```
function RenderCounter() {
    const renders = useRef(0); renders.current++;
    const [n, setN] = useState(0);
    return <div><p>render {renders.current}, state {n}</p><button onClick={() => setN(n + 1)} /></div>;
}
// after two clicks:  6: render 3, state 2
```

Changing `renders.current` did not cause a render; the two state changes did. For a DOM node, `<canvas ref={canvasRef} />` and then `canvasRef.current` inside an effect, because the node does not exist until after the first render. The Part IV chapter shows a three.js renderer living in a ref.

## 12.10 The Render Cycle

@figure react-render-cycle What happens when state changes. Your function runs again and returns a new description; React compares it with the previous one and edits only the DOM nodes that differ; effects run after the edits.

Three consequences of this picture explain most React puzzles.

**A render is a function call.** Everything in the body runs again: variables are recreated, derived values recomputed, inner functions remade. That is fine and usually cheap. State and refs are the only things that persist.

**Reconciliation is by position and type, then by key.** If the same component type is in the same place, React keeps its DOM node and state and updates the props. If the type changes (`<p>` to `<div>`), the old node is thrown away and a new one made, state included. In a list, keys tell React which items are "the same" across renders.

**Effects run after the DOM is updated.** That is why an effect can measure an element or draw on a canvas, and why doing those in the render body is a bug.

:::why Measuring before memoising
**What it is.** `React.memo`, `useMemo` and `useCallback` can skip work between renders. Reach for them only after you have *seen* a slow render in the profiler.

**Why it is done this way.** Memoising has a cost of its own, and most renders are cheap.

**Why it matters.** The code stays simple where it can.

**What happens if you do not.** You scatter `useMemo` everywhere "just in case", and it makes the code harder to read without making it faster (Chapter 2's rule: measure, do not guess). The Part IV chapter shows the three tools with their outputs.
:::

## 12.11 Getting React Into a Page

A React page needs three things: the library, a build step for JSX, and a mount point.

```
npm install react@18.3.1 react-dom@18.3.1
npx esbuild app.jsx --bundle --minify --jsx=automatic --outfile=app.js
```

```
<!-- index.html -->
<div id="root"></div>
<script defer src="app.js"></script>

// app.jsx
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
createRoot(document.getElementById('root')).render(<App />);
```

That is the whole of it. `createRoot` claims the `<div>`, and `render` draws the component tree into it and keeps it in step from then on. The book's `run_jsx.js` does the same transformation with esbuild in Node, which is how every output in this chapter was produced.

:::why Keeping the mount point small
**What it is.** One `<div id="root">`, inside a page that is otherwise normal HTML.

**Why it is done this way.** React does not have to own the whole page. A content page can stay plain HTML and hand one interactive region to React.

**Why it matters.** The rest of the page loads and reads without JavaScript (Chapter 3), and the React bundle is only as big as the interactive part needs.

**What happens if you do not.** The entire page becomes a JavaScript application: blank until the bundle runs, invisible to anything that does not run scripts, and heavier than it needed to be.
:::

## Worked Example: A Stopwatch With a Clean Effect

:::worked Start, stop, and no leaks
Build a stopwatch that shows elapsed seconds, with Start and Stop buttons, and make sure nothing keeps running when it is removed.

**Step 1. The state.** Two facts: `running` (boolean) and `elapsed` (seconds). The button labels and the displayed time are derived.

**Step 2. The effect depends on `running`.** When it becomes true, start an interval; the cleanup stops it. When it becomes false, the cleanup from the previous run has already stopped the interval, and the new effect does nothing.

```
function Stopwatch() {
    const [running, setRunning] = useState(false);
    const [elapsed, setElapsed] = useState(0);
    useEffect(() => {
        if (!running) return;
        const t0 = Date.now() - elapsed * 1000;
        const id = setInterval(() => setElapsed((Date.now() - t0) / 1000), 100);
        return () => clearInterval(id);
    }, [running]);
    return <div>
        <p>{elapsed.toFixed(1)} s</p>
        <button onClick={() => setRunning(r => !r)}>{running ? 'Stop' : 'Start'}</button>
        <button onClick={() => { setRunning(false); setElapsed(0); }}>Reset</button>
    </div>;
}
```

**Step 3. Why `Date.now()` and not `elapsed + 0.1`.** Timers drift (Chapter 6). Computing the time from the clock keeps it honest, and resuming from the stored `elapsed` makes Stop and Start continue rather than restart.

**Step 4. Check.** Stop, start, remove the component: the Ticker example in `examples.jsx` shows the pattern's log, `effect: start timer | cleanup: stop timer`, and this component behaves the same way.
:::

## Practice Problems A: Components, Props and State

:::problems
1. A component has `const [n, setN] = useState(0)` and a button that runs `setN(n + 1); setN(n + 1); setN(n + 1);`. After one click, what is `n`? How would you make it 3?
2. Why does `setItems(items.push('c'))` fail? (Think about what `push` returns.)
3. For a to-do list with items `{id, text, done}`, write the code to toggle one item's `done` without mutating the array.
4. What does `{count && <Badge n={count} />}` show when `count` is 0, and what is the fix?
5. Which of these are state, which are props, and which are derived, in a product page: the product's price (from the server), the quantity the visitor chose, the total, whether the "Add" button is enabled, the currency symbol?
6. Convert this HTML to JSX: `<label for="q" class="big">Search <input id="q" onchange="go()"></label>`.
7. Two sibling components both need to know which part is selected. Where does the state go, and how does each get it?
:::

:::answers
**Chapter 12, Practice Problems A.**

1. `n` becomes 1: all three calls use the same `n` from that render (0), so each sets it to 1. Use the function form: `setN(c => c + 1)` three times, which gives 3.
2. `push` changes the array in place and returns the *new length* (a number), so `setItems(3)` stores a number, and the original array was mutated. Use `setItems([...items, 'c'])`.
3. `setTodos(todos.map(t => t.id === id ? { ...t, done: !t.done } : t))`.
4. It shows the text `0`, because `0 && x` is `0` and React renders numbers. Write `{count > 0 && <Badge n={count} />}`.
5. Price: a prop (or data loaded by an effect into state, then passed down). Quantity: state. Total: derived (price × quantity). Button enabled: derived (quantity > 0). Currency symbol: a constant or a prop.
6. `<label htmlFor="q" className="big">Search <input id="q" onChange={go} /></label>` (the handler is a function reference, and the void `<input>` must be self-closed).
7. In their nearest common parent, as `const [selected, setSelected] = useState(null)`. Each child receives `selected` as a prop; the one that can change it also receives `setSelected` (or a wrapper) and calls it.
:::

## Practice Problems B: Lists, Effects, Forms and Refs

:::problems
1. A list of 3 rows each has an input box. You delete the first row and the second row's typed text moves to the third. What is likely wrong with the keys, and what is the fix?
2. Write an effect that adds a `resize` listener to `window` that stores the width in state, and removes it on cleanup.
3. An effect fetches `/api/part/${id}` but has `[]` as its dependency list. What goes wrong when `id` changes, and what else is needed to make it safe when `id` changes quickly?
4. State what is wrong with storing both `query` and `shown` in state in the filterable-list worked example.
5. In StrictMode a component's effect logs "subscribed" twice on load. Is this a bug? What should the cleanup do?
6. Write a controlled `<select>` for choosing a chart (`speed`, `power`, `sound`) that keeps its value in state.
7. A `useRef(0)` counter is incremented in a click handler but the number on screen never changes. Why, and when is a ref the right tool anyway?
8. Give the two commands and the three lines of code that put a `<App />` into `<div id="root">`.
:::

:::answers
**Chapter 12, Practice Problems B.**

1. The keys are probably array indexes, so after the deletion React matches rows by position. Use a stable id from the data as the key.
2. `useEffect(() => { const f = () => setWidth(window.innerWidth); window.addEventListener('resize', f); return () => window.removeEventListener('resize', f); }, []);`
3. With `[]` the effect runs once, so a new `id` never refetches. Put `[id]` in the list. To be safe against fast changes, keep a `cancelled` flag set in the cleanup and ignore a reply that arrives after it (or abort the fetch with an `AbortController`).
4. `shown` can be computed from `query` and `fruits` on every render. Keeping it in state creates a second copy that can fall out of step with the first, the very problem state is meant to avoid.
5. Not a bug: StrictMode mounts, unmounts and mounts again in development to test cleanup. The cleanup must unsubscribe, so the net effect after the double run is exactly one subscription.
6. `const [chart, setChart] = useState('speed'); <select value={chart} onChange={e => setChart(e.target.value)}>{['speed', 'power', 'sound'].map(c => <option key={c} value={c}>{c}</option>)}</select>`
7. Changing a ref does not cause a render, so the screen keeps the old number. A ref is right for values the picture does not depend on: a timer id, a DOM node, the previous value of something, a render counter for debugging.
8. `npm install react react-dom` and `npx esbuild app.jsx --bundle --jsx=automatic --outfile=app.js`; then `import { createRoot } from 'react-dom/client'; import App from './App.jsx'; createRoot(document.getElementById('root')).render(<App />);`
:::

## Mini Project: A Part Picker

:::project The robot's parts panel, in React
Build the part panel of the Patrick page as a small React application: a search box, a list of parts, and a detail panel for the selected one.

1. **Data.** A constant array `PARTS` of at least eight objects: `{ id, name, tags, desc, mass }`. Load it from a JSON file with `fetch` in an effect, with a cancelled flag, and show "Loading..." until it arrives.
2. **State, and only state.** `query` (the search text), `selectedId`, and the loaded `parts`. Everything else is derived: the filtered list, the selected part object, the total mass of the filtered parts.
3. **Components.** `App` owns the state. `Search` is a controlled input. `PartList` renders the filtered parts with stable keys and highlights the selected one; clicking calls `onSelect(id)`. `Detail` shows the selected part or a prompt to pick one.
4. **Keyboard.** Up and Down arrows in the list move the selection; Enter in the search box selects the first match. (A `keydown` listener on the list, through an effect with cleanup.)
5. **A canvas inside React.** `Detail` includes a `<canvas ref>` on which an effect draws a bar of the part's mass against the heaviest part, redrawn when the selection changes.
6. **Build it** with esbuild and open it. Then open the React DevTools browser extension, change `query` from the Components panel, and watch the list follow.

Checks: no key warnings in the console; the filtered list is never stored in state; removing and re-adding the list in StrictMode leaves exactly one keyboard listener; the canvas redraws without flicker when you change selection.
:::

:::summary
- A component is a function from props to a description of the screen; JSX is that description written as tags, compiled by a build step.
- Props flow down and never change in the child; events flow up as function calls; shared state lives in the nearest common parent.
- `useState` gives a snapshot and a setter. Replace, never mutate; use the function form when the new value depends on the old; updates in one event are batched.
- Lists need stable keys, or React matches by position and state jumps between rows.
- Effects run after render, declare what they read, and return a cleanup. StrictMode runs them twice on purpose.
- Keep only the facts; derive the rest in the render. Controlled inputs keep the form in state. Refs hold what the picture does not depend on.
- A render is a function call; reconciliation keeps nodes of the same type and position; effects see the updated DOM.
- Two commands and three lines put React into one `<div>` of an otherwise ordinary page.
:::
