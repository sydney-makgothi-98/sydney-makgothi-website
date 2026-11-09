# JavaScript: The Behaviour

JavaScript is a real programming language, and the only one that browsers run. If you have never programmed, do not worry: you only need a small piece of it to build everything in this book, and this chapter is that small piece. If you have programmed before, skim for the parts that are peculiar to JavaScript (and there are a few).

## Words You Will Meet

| Word | What it means |
|---|---|
| **Variable** | A named box holding a value. |
| **Value / type** | A piece of data and its kind: number, string, boolean, object, array, function, `null`, `undefined`. |
| **Function** | A named, reusable piece of code that takes inputs (parameters) and may return an output. |
| **Argument** | The actual value you pass when calling a function. |
| **Array** | An ordered list of values. |
| **Object** | A collection of named values (properties). |
| **Scope** | The region of code where a name can be seen. |
| **Closure** | A function that remembers the variables around where it was created. |
| **Callback** | A function you pass to something else to be called later. |
| **Promise / async** | A way of describing a result that will arrive later. |
| **Module** | A file that shares things with `export` and receives them with `import`. |

## Variables: const First

```
const name = 'Patrick';     // cannot be reassigned
let count = 0;              // can be reassigned
count = count + 1;
```

:::why const by default, let when you must
**What it is.** `const` makes a name that cannot be pointed at something else. `let` makes one that can. (There is also `var`, an older keyword you should leave alone.)

**Why it is done this way.** Most values in a program never need to change. Saying so up front is information.

**Why it matters.** When you read `const`, you know the name always means the same thing, so there is less to keep in your head. The language also stops you from changing it by accident.

**What happens if you do not.** With `var`, names leak out of blocks and can be re-declared silently, and bugs hide in the leaks. Note that `const` stops *reassigning*, not *changing*: a `const` array can still have items pushed onto it.
:::

## Types and the Strange Bits

The basic types are **number** (there is only one kind, a 64-bit floating-point number), **string**, **boolean**, **`null`**, **`undefined`**, **object** (including arrays) and **function**.

:::warning
Numbers in JavaScript are floating point, so decimals are not always exact. `0.1 + 0.2` is `0.30000000000000004`, and `22 * 1.15` is `25.299999999999997`. Never compare decimals with `===`, and round numbers for display with `toFixed`.
:::

:::why Using === instead of ==
**What it is.** `===` compares without converting types. `==` converts first.

**Why it is done this way.** Conversion rules are intricate and surprising.

**Why it matters.** With `==`, `0 == ''` is `true` and `null == undefined` is `true`. With `===`, `0 === ''` is `false`.

**What happens if you do not.** You get bugs that depend on what type the data happened to be, and they appear only for some inputs.
:::

**Truthiness.** In an `if`, these count as false: `false`, `0`, `''`, `null`, `undefined`, `NaN`. Everything else (including `[]` and `{}`) counts as true.

## Functions

A function packages up a job so you can reuse it.

```
function clamp(x, lo, hi) {
    return Math.min(hi, Math.max(lo, x));
}
const double = (n) => n * 2;          // an arrow function: short form
```

:::why Small functions with one job
**What it is.** `clamp` does one thing and returns a value. It does not touch anything outside itself.

**Why it is done this way.** A function that depends only on its inputs and returns an output (a **pure** function) always gives the same answer for the same inputs.

**Why it matters.** You can test it by itself, reuse it anywhere, and understand it without reading the rest of the program. On this website, helpers like `clamp` and the chart `fit` are used in dozens of places.

**What happens if you do not.** A function that reads and changes global variables behaves differently depending on the history of the program, and that is the hardest kind of bug to find.
:::

## Arrays and the Three Tools You Will Use Daily

An array is a list: `const prices = [4, 9, 15, 22];`. Three methods do most of the work, and each takes a function.

```
prices.map(p => p * 1.15);                // a new array: each item transformed
prices.filter(p => p > 10);               // a new array: only the items that pass
prices.reduce((sum, p) => sum + p, 0);    // one value: all the items combined
```

:::why map, filter and reduce instead of loops
**What it is.** Describing *what* you want (transform every item, keep some, combine all) rather than *how* (a counter, an index, a temporary array).

**Why it is done this way.** The intention is visible in the method's name.

**Why it matters.** There is less code, no index to get wrong, and the original array is left untouched.

**What happens if you do not.** A hand-written loop with an index is where "off by one" bugs live. (Use a loop when you genuinely need one, for example to stop early.)
:::

## Objects and Destructuring

An object is a bundle of named values: `const person = { name: 'Ana', age: 31 };`. **Destructuring** pulls values out, and the **spread** operator (`...`) copies.

```
const { x, ...rest } = { x: 1, y: 2, z: 3 };    // x is 1, rest is { y: 2, z: 3 }
const copy = [...arr, 4];                       // a new array: arr's items, then 4
```

:::why Copying with spread instead of changing in place
**What it is.** Making a *new* array or object instead of altering the existing one.

**Why it is done this way.** Objects and arrays are shared by reference: two names can point at the same thing.

**Why it matters.** Changing `o1.n` also changes `o2.n` if `o2 = o1`. Copying avoids surprises, and it is the foundation of how React notices changes (Chapter 12).

**What happens if you do not.** A change made in one corner of the program silently shows up in another.
:::

## Closures and Callbacks

A function remembers the variables where it was born. That is a **closure**.

```
function makeCounter() {
    let n = 0;
    return () => ++n;       // this function carries n around with it
}
const c1 = makeCounter(), c2 = makeCounter();
c1(); c1(); c2();           // 1, 2, then 1: each counter has its own n
```

Closures are how a click handler can remember which button it belongs to, and how the page keeps private state without global variables.

## Asynchronous Code: Promises and async/await

Some things take time: loading a file, waiting for the network. A **promise** stands for a result that has not arrived yet. `async` and `await` let you write the waiting as if it were a plain top-to-bottom story.

```
async function load(url) {
    const response = await fetch(url);       // pause here until the reply arrives
    return response.json();                  // then parse it
}
```

:::why await instead of nested callbacks
**What it is.** `await` pauses *this function* (not the whole page) until a promise settles.

**Why it is done this way.** Without it you nest a callback inside a callback inside a callback, and error handling gets tangled.

**Why it matters.** The code reads in the order things happen. The page stays responsive, because (Chapter 5) the event loop runs other things during the pause.

**What happens if you do not.** You write "callback hell", and one forgotten error case makes a request fail without a trace.
:::

## Modules

A **module** is a file that exports some names and imports others.

```
// maths.js
export const clamp = (x, lo, hi) => Math.min(hi, Math.max(lo, x));

// main.js
import { clamp } from './maths.js';
```

:::why Splitting code into modules
**What it is.** Each file does one job and says what it shares.

**Why it is done this way.** A thousand-line file is hard to navigate and impossible to reuse.

**Why it matters.** Names do not collide, you can see what depends on what, and a bundler (Chapter 16) can leave out code you never import.

**What happens if you do not.** Everything lives in one global space, and two scripts that both define `fit` overwrite each other. The Patrick page keeps its physics (`model.js`), its geometry (`robot.js`) and its page logic (`main.js`) apart for exactly this reason.
:::

## Worked Example: People, Filtered and Summarised

:::worked Names of adults, and the average age
Given `const people = [{name:'Ana',age:31},{name:'Ben',age:17},{name:'Cy',age:45}]`, produce an array of the adults' names in capitals, an object mapping each name to an age, and the average age.

**Step 1. Adults' names.** First keep the adults, then transform them.

```
const adults = people.filter(p => p.age >= 18).map(p => p.name.toUpperCase());
// ['ANA', 'CY']
```

**Step 2. Name-to-age object.** Turn each person into a pair, then build an object from the pairs.

```
const byName = Object.fromEntries(people.map(p => [p.name, p.age]));
// { Ana: 31, Ben: 17, Cy: 45 }
```

**Step 3. Average.** Add the ages up with `reduce`, then divide by the count.

```
const average = people.reduce((s, p) => s + p.age, 0) / people.length;
// (31 + 17 + 45) / 3 = 31
```

**Step 4. Check by running it.** Paste the lines in the browser Console. Each result should match the comment. Notice that `people` itself is unchanged: `map` and `filter` made new arrays.
:::

## Practice Problems

:::problems
1. Given `const prices = [4, 9, 15, 22]`, what do `prices.map(p => p * 1.15)`, `prices.filter(p => p > 10)` and `prices.reduce((s, p) => s + p, 0)` return? Why is one of the numbers in the first answer ugly?
2. What are the values of `a`, `b` after `let a = 5; const b = a; a = 8;`? What is `o2.n` after `const o1 = {n: 1}; const o2 = o1; o1.n = 9;`? Explain the difference.
3. What does `console.log(c1(), c1(), c2())` print, given `makeCounter` above?
4. Evaluate: `0 == ''`, `0 === ''`, `null == undefined`, `typeof null`, `typeof NaN`. Which results are surprising?
5. Predict the printed order: `console.log('1'); (async () => { console.log('2'); await null; console.log('3'); })(); console.log('4');`
6. Write a function `range(a, b)` that returns the array of integers from a to b inclusive, using `Array.from`. Then use `map` and `filter` to get the squares of the odd numbers from 1 to 9.
:::

:::answers
**Chapter 11 practice problems.**

1. `[4.6, 10.35, 17.25, 25.299999999999997]`; `[15, 22]`; `50`. The last decimal is ugly because numbers are binary floating point and 25.3 cannot be stored exactly. Round for display, for example with `toFixed(2)`.
2. `a` is 8 and `b` is 5: numbers are copied by value, so changing `a` does not affect `b`. `o2.n` is 9: objects are shared by reference, so `o1` and `o2` are two names for the same object.
3. It prints `1 2 1`. Each call to `makeCounter` makes a separate `n`, so `c2` starts at 1.
4. `true`, `false`, `true`, `'object'`, `'number'`. Surprising: `0 == ''` is true, `typeof null` is `'object'` (a long-standing quirk), and `typeof NaN` is `'number'`.
5. `1`, `2`, `4`, `3`. The async function runs synchronously until its first `await`, so 2 prints before 4; the continuation after `await` runs as a microtask after the main code finishes, so 3 comes last.
6. `const range = (a, b) => Array.from({ length: b - a + 1 }, (_, i) => a + i);` then `range(1, 9).filter(n => n % 2 === 1).map(n => n * n)` gives `[1, 9, 25, 49, 81]`.
:::
