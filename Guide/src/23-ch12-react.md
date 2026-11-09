# React: Interfaces from Components

Chapter 5 ended with a promise: *screen = render(state)*. React is a library that keeps that promise for a whole page. You describe what the page should look like for the current state, and React works out the smallest set of changes needed to make the real page match. It is not magic, and it is not necessary for every page (this website's live pages do not use it), but it is the most common way professional teams build interfaces, so you should know how it thinks.

## Words You Will Meet

| Word | What it means |
|---|---|
| **Component** | A function that returns a description of part of the screen. |
| **JSX** | A syntax that lets you write HTML-like tags inside JavaScript. |
| **Props** | Inputs passed *down* to a component, like function arguments. |
| **State** | Data a component remembers between renders. |
| **Hook** | A function whose name starts with `use` that adds a feature to a component (`useState`, `useEffect`). |
| **Render** | Calling your component to get its description of the screen. |
| **Virtual DOM** | React's lightweight copy of the page, compared with the previous one to find changes. |
| **Effect** | Code that talks to the world outside React (timers, the network, the DOM) after rendering. |
| **Key** | A stable label React uses to tell list items apart. |

## Components and JSX

A component is a function whose name starts with a capital letter and which returns JSX.

```
function Greeting({ name }) {
    return <h1 className="title">Hello, {name}!</h1>;
}
// used like an HTML tag:  <Greeting name="Patrick" />
```

JSX is not HTML. It is JavaScript in disguise, and a build step turns each tag into a function call. Curly braces drop back into JavaScript. A few attribute names differ because they are JavaScript words (`className`, not `class`).

:::why Why JSX needs a build step
**What it is.** Browsers cannot read JSX. A tool such as esbuild or Vite converts it into plain JavaScript before the page loads.

**Why it is done this way.** JSX makes the structure of an interface readable at a glance, and compiling it costs nothing at run time.

**Why it matters.** You write `<h1>Hello</h1>` and get exactly what it says.

**What happens if you do not use a build step.** The browser reports a syntax error on the first `<`. (You can compile JSX in the browser with a library called Babel for experiments, but it is slow and not meant for real sites.)
:::

## Props Down, Events Up

Data flows in one direction: from parents to children, as **props**. A child never changes its props. When something must change, the child calls a function the parent gave it.

```
function Counter() {
    const [count, setCount] = React.useState(0);
    return (
        <div>
            <p>You clicked {count} times.</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}
```

:::why One-way data flow
**What it is.** Information moves down through props. Changes move up through functions that were passed down.

**Why it is done this way.** If any child could change data anywhere, you could never be sure where a value came from.

**Why it matters.** When something looks wrong, you only have to follow the data *upward*, to the one place that owns it. This is Chapter 5's "keep each fact once" rule, enforced by the library.

**What happens if you do not.** The same data ends up copied in several components and drifting apart, which is exactly the bug that React exists to prevent.
:::

## State and Why You Never Change It Directly

`useState` returns the current value and a function to change it. Calling that function schedules a new render.

```
const [items, setItems] = React.useState(['a', 'b']);

// WRONG: React cannot tell anything changed
items.push('c');

// RIGHT: a new array, so React notices
setItems([...items, 'c']);
```

:::why Replace state, do not mutate it
**What it is.** Calling the setter with a *new* array or object, never altering the old one.

**Why it is done this way.** React decides whether to re-render by comparing the old and new value with `===`. Pushing onto the same array leaves the same reference, so it looks unchanged.

**Why it matters.** The screen updates when the data does. This is why Chapter 11 taught the spread operator.

**What happens if you do not.** The data changes and the screen does not, and you spend an hour wondering why a button "does nothing".
:::

:::tip
When the new state depends on the old state, pass a function: `setCount(c => c + 1)`. If several updates are batched in one event, this form gets the latest value every time.
:::

## Rendering Lists and Keys

To show a list, map an array to elements and give each a `key`.

```
<ul>
    {items.map(item => <li key={item.id}>{item.label}</li>)}
</ul>
```

:::why Keys on list items
**What it is.** A unique, stable `key` on each element made in a list.

**Why it is done this way.** When the list changes, React needs to know which old item corresponds to which new item, so it can move, add or remove the right ones.

**Why it matters.** Without keys, React guesses by position, and reordering a list can leave typed text or focus on the wrong row.

**What happens if you do not.** You get a console warning, and subtle bugs: edit the third item, delete the first, and the text you typed jumps to a different row. Do not use the array index as a key if the list can be reordered.
:::

## Effects: Talking to the Outside World

A component's render should be a pure calculation. Anything else (starting a timer, subscribing to an event, fetching data) belongs in an **effect**, which runs *after* rendering.

```
React.useEffect(() => {
    const id = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(id);            // cleanup
}, []);                                         // run once, when the component appears
```

:::why The cleanup function and the dependency list
**What it is.** The function returned from an effect runs when the component disappears (or before the effect runs again). The array at the end lists the values the effect depends on. An empty array means "run once".

**Why it is done this way.** Effects start things (a timer, a listener). Something has to stop them.

**Why it matters.** Without cleanup, the timer keeps running after the component is gone. Without the right dependency list, the effect uses stale values or runs far too often.

**What happens if you do not.** You leak timers and event listeners, so a page that has been open for an hour is slow and uses more and more memory.
:::

## Worked Example: A Filterable List

:::worked Type to filter
Build a component with a text box and a list of fruits, showing only the fruits that contain the typed text.

**Step 1. What is the state?** Only one thing changes: the text in the box. Call it `query`. The *filtered list is not state*, because it can be worked out from the query.

**Step 2. Write it.**

```
function FruitFilter({ fruits }) {
    const [query, setQuery] = React.useState('');
    const shown = fruits.filter(f => f.toLowerCase().includes(query.toLowerCase()));
    return (
        <div>
            <label>Filter <input value={query} onChange={e => setQuery(e.target.value)} /></label>
            <ul>{shown.map(f => <li key={f}>{f}</li>)}</ul>
        </div>
    );
}
```

**Step 3. Trace it.** With `fruits = ['Apple','Banana','Cherry']` and `query = 'an'`: `shown` is `['Banana']`, because only "banana" contains "an". Typing "e" instead gives `['Apple','Cherry']`.

**Step 4. Why it works.** The box shows `query` and edits it, so state and screen cannot disagree. The list is *derived*: every render recomputes it. There is no "update the list" code at all.
:::

## Practice Problems

:::problems
1. A component has `const [n, setN] = React.useState(0)` and a button that runs `setN(n + 1); setN(n + 1); setN(n + 1);`. After one click, what is `n`? How would you make it 3?
2. Why does `setItems(items.push('c'))` fail? (Think about what `push` returns.)
3. For a to-do list with items `{id, text, done}`, write the code to toggle one item's `done` without mutating the array.
4. A list of 3 rows each has an input box. You delete the first row and the second row's typed text moves to the third. What is likely wrong with the keys, and what is the fix?
5. Write an effect that adds a `resize` listener to `window` that stores the width in state, and removes it on cleanup.
6. State what is wrong with storing both `query` and `shown` in state in the worked example.
:::

:::answers
**Chapter 12 practice problems.**

1. `n` becomes 1: all three calls use the same `n` from that render (0), so each sets it to 1. Use the function form: `setN(c => c + 1)` three times, which gives 3.
2. `push` changes the array in place and returns the *new length* (a number), so `setItems(3)` stores a number, and the original array was mutated. Use `setItems([...items, 'c'])`.
3. `setTodos(todos.map(t => t.id === id ? { ...t, done: !t.done } : t))`.
4. The keys are probably array indexes, so after the deletion React matches rows by position. Use a stable id from the data as the key.
5. `useEffect(() => { const f = () => setWidth(window.innerWidth); window.addEventListener('resize', f); return () => window.removeEventListener('resize', f); }, []);`
6. `shown` can be computed from `query` and `fruits` on every render. Keeping it in state creates a second copy that can fall out of step with the first, the very problem state is meant to avoid.
:::
