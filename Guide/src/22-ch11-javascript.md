# JavaScript: The Behaviour

JavaScript is a real programming language, and the only one that browsers run. This chapter is a complete course in it, from a first value to modules, classes, promises and tests, written for someone who has never programmed and paced so that someone who has can skim. Every program in it lives in the folder `Guide/code/js` and was run with Node.js to produce the output you see. Run them yourself; change them; break them. That is how the language goes from the page into your hands.

:::objectives
- Run JavaScript in the browser console and in Node.js, and read its errors.
- Use every basic type correctly, including the floating-point and conversion traps.
- Declare variables with the right scope, write functions, closures and pure functions.
- Work with arrays and objects fluently: map, filter, reduce, destructuring, spread, Map and Set.
- Write classes, understand the prototype chain and `this`, and handle errors.
- Change the page through the DOM, and respond to events.
- Write asynchronous code with promises and `async`/`await`, and predict its order.
- Split code into modules, work with JSON and CSV, and test what you write.
:::

## Words You Will Meet

| Word | What it means |
|---|---|
| **Value / type** | A piece of data and its kind: number, string, boolean, `null`, `undefined`, object, function. |
| **Variable** | A named box holding a value. `const` boxes cannot be re-pointed; `let` boxes can. |
| **Scope** | The region of code where a name can be seen. |
| **Expression / statement** | Something that produces a value (`a + 1`) / something that does a thing (`if`, `for`). |
| **Function** | A named, reusable piece of code that takes inputs (parameters) and may return an output. |
| **Argument** | The actual value you pass when calling a function. |
| **Closure** | A function that remembers the variables around where it was created. |
| **Pure function** | One whose result depends only on its inputs and which changes nothing outside itself. |
| **Callback** | A function you pass to something else to be called later. |
| **Array / object** | An ordered list of values / a collection of named values (properties). |
| **Reference** | The way objects are shared: two names can point at the same object. |
| **Prototype** | The object a given object inherits properties from. |
| **Promise** | A value that will arrive later, or an error that will. |
| **Module** | A file that shares things with `export` and receives them with `import`. |
| **DOM** | The browser's tree of the page, which scripts read and change (Chapter 2). |

## 11.1 Running JavaScript

You can run JavaScript in three places, and you will use all three.

**The browser console.** Press F12, choose Console, type `2 + 2` and press Enter. The console prints `4`. It is a calculator with the whole page attached: type `document.title` and you get the page's title. Every snippet in this chapter that does not touch files can be pasted there.

**A script in a page.** `<script src="app.js" defer></script>` in the head (Chapter 2). `console.log(...)` prints to the console. This is where your pages' behaviour lives.

**Node.js.** The same language, outside the browser, with files and a command line instead of a page. Install it from its website, then in a terminal: `node s02_types.js`. There is no `document` in Node, but everything else in this chapter works, which is why the examples are run there: the output can be copied into the book exactly.

:::why Learning with Node as well as the browser
**What it is.** Running the examples as files from the command line, not only in the console.

**Why it is done this way.** A file can be saved, re-run, and tested. The console forgets.

**Why it matters.** The habits of the whole chapter, small files, printed checks, a test harness, only make sense with files.

**What happens if you do not.** You learn the language as a series of one-liners and never build anything that is bigger than the console's input box.
:::

## 11.2 Values and Types

JavaScript has seven kinds of value you will meet daily: **number**, **string**, **boolean**, **`undefined`**, **`null`**, **object** (which includes arrays and dates) and **function**. (There are also `bigint` and `symbol`, which you can leave for later.) The `typeof` operator tells you which, with one historic wrinkle.

```
console.log(typeof 42, typeof 'hi', typeof true, typeof undefined, typeof null, typeof {}, typeof [], typeof (() => 1));
// number string boolean undefined object object object function
```

`typeof null` is `'object'`, a mistake from 1995 that can never be fixed. Test for null with `=== null`, and for an array with `Array.isArray(x)`.

#### Numbers

There is one kind of number: a 64-bit floating-point value. It holds integers exactly up to 9 007 199 254 740 991 (`Number.MAX_SAFE_INTEGER`), and decimals *approximately*. This is not a JavaScript quirk; it is how every language that uses binary floating point behaves, and C++'s `double` is the same number.

```
console.log(0.1 + 0.2, 0.1 + 0.2 === 0.3, Math.abs(0.1 + 0.2 - 0.3) < 1e-9);
// 0.30000000000000004 false true
console.log(22 * 1.15, (22 * 1.15).toFixed(2));
// 25.299999999999997 25.30
console.log(1 / 0, -1 / 0, 0 / 0, Number.isNaN(0 / 0));
// Infinity -Infinity NaN true
console.log(Number.MAX_SAFE_INTEGER, 2 ** 53 + 1);
// 9007199254740991 9007199254740992
```

:::warning
Never compare decimals with `===`. Compare the *difference* with a small tolerance, as in the third expression above. Round numbers for display with `toFixed`, and only for display: `toFixed` returns a *string*. Dividing by zero does not throw; it gives `Infinity`, and `0 / 0` gives `NaN`, "not a number", which is the only value in the language that is not equal to itself.
:::

#### Strings, booleans and the two empties

A string is text in single quotes, double quotes, or backticks (which allow `${...}` interpolation and line breaks, see 11.4). A boolean is `true` or `false`. `undefined` is the value of a variable that has been declared but not set, of a missing property, and of a function that returns nothing. `null` is the value *you* put somewhere to say "nothing here, on purpose". The distinction is a convention, but it is a useful one: `undefined` means "nobody set this", `null` means "somebody set this to nothing".

#### Conversion, and why `===` exists

JavaScript converts between types on its own when an operator mixes them, by rules that are consistent and surprising.

```
console.log('5' + 3, '5' - 3, '5' * '2', true + 1, [] + {});
// 53 2 10 2 [object Object]
console.log(0 == '', 0 === '', null == undefined, null === undefined, '1' == 1, NaN == NaN);
// true false true false true false
```

`+` with a string on either side joins strings; every other arithmetic operator converts to numbers. The loose equality `==` converts before comparing, so `0 == ''` is true. The strict equality `===` does not convert, so it says what you mean.

:::why Using === instead of ==
**What it is.** `===` compares without converting types. `==` converts first.

**Why it is done this way.** Conversion rules are intricate and surprising.

**Why it matters.** With `==`, `0 == ''` is `true` and `null == undefined` is `true`. With `===`, `0 === ''` is `false`.

**What happens if you do not.** You get bugs that depend on what type the data happened to be, and they appear only for some inputs. The one accepted use of `==` is `x == null`, which is true for both `null` and `undefined` and nothing else.
:::

**Truthiness.** In an `if`, exactly six values count as false: `false`, `0`, `''`, `null`, `undefined`, `NaN`. Everything else counts as true, *including* an empty array and an empty object.

```
0:F "":F null:F undefined:F null:F false:F []:T {}:T "0":T -1:T
```

(The second `null` in that line is how `JSON.stringify` prints `NaN`.) The string `'0'` is true, because it is a non-empty string. Test an array for emptiness with `arr.length === 0`, never with `if (arr)`.

## 11.3 Variables and Scope

```
const speed = 0.3;          // cannot be reassigned
let count = 0;              // can be
count = count + 1;
```

:::why const by default, let when you must
**What it is.** `const` makes a name that cannot be pointed at something else. `let` makes one that can. (There is also `var`, an older keyword you should leave alone.)

**Why it is done this way.** Most values in a program never need to change. Saying so up front is information.

**Why it matters.** When you read `const`, you know the name always means the same thing, so there is less to keep in your head. The language also stops you from changing it by accident.

**What happens if you do not.** With `var`, names leak out of blocks and can be re-declared silently, and bugs hide in the leaks. Note that `const` stops *reassigning*, not *changing*: a `const` array can still have items pushed onto it.
:::

`let` and `const` are **block scoped**: a name declared inside `{ ... }` exists only there. `var` is **function scoped** and leaks out of blocks. `var` declarations are also **hoisted**: the name exists from the top of the function with the value `undefined` until its line runs. `let` and `const` are hoisted too, but using them before their line is an error (the "temporal dead zone"), which is far better than a silent `undefined`. The program `s03_scope.js` shows every case:

```
1: TypeError - Assignment to constant variable.
2: undefined string            <- inner (let) is gone after the block; leaky (var) is not
3: undefined                   <- var hoisted: the name exists, the value does not yet
4: ReferenceError - Cannot access 'tdz' before initialization
5: [ 3, 3, 3 ] [ 0, 1, 2 ]     <- closures over var share one i; over let, each gets its own
6: [ 'motor', 'wheel' ]        <- const stops reassignment, not change
```

Line 5 is the classic. Three functions made in a `var` loop all see the final `i`, because there is one `i`. Three made in a `let` loop each see their own, because `let` makes a fresh binding every time round. The Advanced JavaScript chapter in Part IV returns to this.

## 11.4 Operators and Expressions

Arithmetic is what you expect, with three things to know. `%` is the remainder and keeps the sign of the left operand, so `-7 % 3` is `-1`. `**` is power. `/` always gives a decimal; use `Math.floor` or `Math.trunc` for integer division (they differ for negatives).

```
1: 1 -1 1024 3.5 3 -3          <- 7 % 3, -7 % 3, 2 ** 10, 7 / 2, floor(7/2), trunc(-7/2)
2: 5 7 7                       <- a = n++ gives the old value; b = ++n gives the new one
```

**Template literals** build strings from values without `+`: `` `duty ${duty * 100}% -> ${(duty * 4.6).toFixed(2)} V` `` gives `duty 70% -> 3.22 V`. Anything inside `${}` is an expression.

Three short operators replace a lot of `if`s. The **ternary** `a ? b : c` is an `if` that produces a value. The **nullish** operator `??` gives a default only when the left side is `null` or `undefined`, where `||` gives the default for *any* false value, including `0` and `''`. **Optional chaining** `?.` stops at the first missing link instead of throwing.

```
const settings = { speed: 0, name: '' };
settings.speed || 0.5   // 0.5  (wrong: 0 was a real setting)
settings.speed ?? 0.5   // 0    (right)
settings.name || 'anon' // 'anon'
settings.name ?? 'anon' // ''   (the empty string was set on purpose)
robot.arm?.claw?.jaw           // 0.8
robot.sensor?.range            // undefined, no error
robot.sensor?.range ?? 'none'  // 'none'
```

:::why ?? instead of || for defaults
**What it is.** `value ?? fallback`.

**Why it is done this way.** `||` treats `0`, `''` and `false` as missing. They are often real values.

**Why it matters.** A duty cycle of `0`, an empty label, a switched-off flag all survive.

**What happens if you do not.** A slider set to zero mysteriously jumps to its default, and the bug only appears at zero.
:::

`&&` and `||` **short-circuit**: `a && b` stops at `a` if `a` is false and gives `a`; `a || b` stops at `a` if it is true. They return one of their operands, not necessarily a boolean, which is why `0 || 'fallback'` is `'fallback'`.

## 11.5 Control Flow

`if`/`else if`/`else`, `switch`, `for`, `for...of`, `while` and `do...while` are all here, and they behave as in C++ (Chapter 17), with one twist each. The program `s05_flow.js` uses them to walk a robot through its phases:

```
const readings = [0.32, 0.21, 0.108, 0.09, 0.095];
let phase = 'APPROACH';
for (const r of readings) {
    if (phase === 'APPROACH' && r <= 0.108) phase = 'BRAKE';
    console.log(`reading ${r.toFixed(3)} m -> ${phase}`);
}
```

```
reading 0.320 m -> APPROACH
reading 0.210 m -> APPROACH
reading 0.108 m -> BRAKE
reading 0.090 m -> BRAKE
reading 0.095 m -> BRAKE
```

- **`for...of`** walks the *values* of anything iterable: arrays, strings, Maps, Sets. Prefer it to the index loop whenever you do not need the index.
- **`for...in`** walks the *keys* of an object (as strings). Do not use it on arrays; it walks their indexes as strings and any extra properties too. `Object.entries(obj)` with `for...of` is usually clearer.
- **`switch`** compares with `===` and falls through from case to case unless you `return` or `break`. The trick `switch (true)` with `case code >= 500:` turns it into a readable chain of ranges.
- **`break`** leaves the loop, **`continue`** skips to the next turn, and a **label** (`outer:`) lets either apply to an outer loop, as in the prime sieve below.
- `while` runs while a condition holds; `do...while` runs at least once.

```
const primes = [];
outer: for (let n = 2; primes.length < 8; n++) {
    for (const p of primes) if (n % p === 0) continue outer;
    primes.push(n);
}
// [ 2, 3, 5, 7, 11, 13, 17, 19 ]
```

:::worked A crude simulation in a while loop
A cart starts at rest with an acceleration of 2 m/s². Using steps of 0.1 s, how long until it has travelled 1 m, and how fast is it then?

**Step 1. The loop.** Each turn adds `2 × 0.1` to the speed and `v × 0.1` to the position, then adds 0.1 to the clock, until x ≥ 1.

```
let t = 0, v = 0, x = 0;
while (x < 1) { v += 2 * 0.1; x += v * 0.1; t += 0.1; }
// reached 1 m after 1.0 s at 2.00 m/s
```

**Step 2. Check against physics.** x = ½at² gives t = √(2 × 1 / 2) = 1.0 s, and v = at = 2.0 m/s. ✓

**Step 3. Why it is "crude".** The loop updates the speed first and then uses the *new* speed for the whole step, so it overshoots the position a little every step. At t = 1.0 the computed x is actually 1.1 m, ten percent too far; the loop reports 1.0 s only because that is the first step at which x has passed 1 m. Chapter 17's section on simulation numerics explains the proper remedy (smaller steps, or a better integrator); the point here is that a `while` loop with a clock *is* a simulation, and that you should always check one number against the physics.
:::

## 11.6 Functions

A function packages up a job so you can reuse it. There are three ways to write one, and they are nearly interchangeable.

```
function clamp(x, lo = 0, hi = 1) { return Math.min(hi, Math.max(lo, x)); }   // declaration, with defaults
const double = n => n * 2;                                                    // arrow function, short form
const area = function (r) { return Math.PI * r * r; };                        // function expression
```

Defaults fill in missing arguments. A **rest** parameter `...nums` collects any number of arguments into an array, and **spread** `...arr` does the reverse at the call. A **declaration** is hoisted (usable before its line); an expression or arrow is not.

```
1: 1 -1 0.4 42                 <- clamp(1.7), clamp(-3, -1, 1), clamp(0.4), double(21)
2: 0 6 15                      <- sum(), sum(1, 2, 3), sum(...[4, 5, 6])
7: function undefined          <- a declaration is hoisted; a var holding a function is not yet set
```

#### Closures

A function remembers the variables where it was born. That is a **closure**, and it is how JavaScript keeps private state without classes.

```
function makeCounter() { let n = 0; return () => ++n; }
const c1 = makeCounter(), c2 = makeCounter();
console.log(c1(), c1(), c2());     // 1 2 1: each counter has its own n
```

@figure js-closure The inner function keeps `n` alive after `makeCounter` has returned. Each call to `makeCounter` makes a new `n`, so `c1` and `c2` count separately.

@figure js-scope-chain Scope is lexical: a name is looked up in the block where the code was written, then in the enclosing function, then outward to the module or global scope. The inner arrow function can see `tax`, `base` and `RATE`; nothing outside can see `tax`.

A PID controller is a closure in disguise: it has to remember the integral and the last error between calls, and a closure is the lightest way to do that.

```
const pid = (kp, ki, kd) => {
    let integral = 0, last = 0;
    return (err, dt) => { integral += err * dt; const d = (err - last) / dt; last = err;
                          return kp * err + ki * integral + kd * d; };
};
const ctrl = pid(2, 0.5, 0.1);
[1, 0.5, 0.2].map(e => ctrl(e, 0.1).toFixed(3));   // [ '3.050', '0.575', '0.185' ]
```

Check the first value by hand: integral = 0.1, derivative = (1 − 0) / 0.1 = 10, so 2 × 1 + 0.5 × 0.1 + 0.1 × 10 = 3.05. ✓

#### Pure functions and higher-order functions

A **pure** function depends only on its inputs and changes nothing outside itself. `addPure(0, 2)` is 2 every time; `addImpure(2)` gave 2 the first time and 4 the second, because it reads and writes a variable outside.

```
6: 2 4 2 2
```

:::why Small functions with one job
**What it is.** `clamp` does one thing and returns a value. It does not touch anything outside itself.

**Why it is done this way.** A pure function always gives the same answer for the same inputs.

**Why it matters.** You can test it by itself, reuse it anywhere, and understand it without reading the rest of the program. On this website, helpers like `clamp` and the chart `fit` are used in dozens of places.

**What happens if you do not.** A function that reads and changes global variables behaves differently depending on the history of the program, and that is the hardest kind of bug to find.
:::

A **higher-order** function takes or returns a function. `twice(f, x)` applies `f` two times: `twice(double, 3)` is 12. **Recursion** is a function calling itself with a smaller problem: `factorial(5)` is 120. Both are everyday tools in JavaScript, and the next section is built on the first.

## 11.7 Arrays

An array is a list: `const prices = [4, 9, 15, 22];`. Three methods do most of the work, and each takes a function.

```
prices.map(p => p * 1.15);                // a new array: each item transformed
prices.filter(p => p > 10);               // a new array: only the items that pass
prices.reduce((sum, p) => sum + p, 0);    // one value: all the items combined
// [ 4.6, 10.35, 17.25, 25.299999999999997 ] [ 15, 22 ] 50
```

:::why map, filter and reduce instead of loops
**What it is.** Describing *what* you want (transform every item, keep some, combine all) rather than *how* (a counter, an index, a temporary array).

**Why it is done this way.** The intention is visible in the method's name.

**Why it matters.** There is less code, no index to get wrong, and the original array is left untouched.

**What happens if you do not.** A hand-written loop with an index is where "off by one" bugs live. (Use a loop when you genuinely need one, for example to stop early.)
:::

The rest of the toolkit, from `s07_arrays.js`:

| Call | Gives | Changes the array? |
|---|---|---|
| `find(f)`, `findIndex(f)` | the first item (or index) that passes: `15`, `2` | no |
| `some(f)`, `every(f)`, `includes(v)` | `true`/`false` | no |
| `slice(1, 3)` | a copy of part: `[2, 3]` | no |
| `splice(1, 2)` | removes items in place and returns them | **yes** |
| `sort()` | sorted in place, **as strings** by default | **yes** |
| `toSorted(f)`, `toReversed()` | sorted copies (new in 2023) | no |
| `flat()`, `flat(Infinity)`, `flatMap(f)` | nested arrays unpacked | no |
| `at(-1)` | the last item | no |
| `Array.from({length: n}, (_, i) => ...)` | an array built from a rule | makes a new one |

```
3: [ 1, 10, 100, 9 ] [ 1, 9, 10, 100 ]     <- sort() compares as text; give it a comparator
4: [ 2, 3 ] [ 1, 4, 5 ] [ 2, 3 ] [ 1, 4, 5 ] <- slice copies; splice cuts
```

:::warning
`[10, 9, 1, 100].sort()` gives `[1, 10, 100, 9]`, because the default sort compares strings. Always pass a comparator for numbers: `sort((a, b) => a - b)`. And `sort`, `splice`, `push`, `pop`, `shift`, `unshift` and `reverse` all change the array in place; the others return a new one.
:::

**Destructuring** pulls values out, and **spread** copies:

```
const [first, , third = 'none', ...rest] = ['a', 'b', undefined, 'd', 'e'];   // a none [ 'd', 'e' ]
const copy = [...prices, 30], same = prices;
copy.push(99); same.push(99);
// prices is [ 4, 9, 15, 22, 99 ]; copy is [ 4, 9, 15, 22, 30, 99 ]; copy === prices false; same === prices true
```

:::why Copying with spread instead of changing in place
**What it is.** Making a *new* array or object instead of altering the existing one.

**Why it is done this way.** Objects and arrays are shared by reference: two names can point at the same thing.

**Why it matters.** Changing `o1.n` also changes `o2.n` if `o2 = o1`. Copying avoids surprises, and it is the foundation of how React notices changes (Chapter 12).

**What happens if you do not.** A change made in one corner of the program silently shows up in another.
:::

:::worked Grouping with reduce
Given `people = [{name:'Ana',age:31},{name:'Ben',age:17},{name:'Cy',age:45}]`, group the names by decade of age.

**Step 1. What is the result?** An object whose keys are decades and whose values are arrays of names: `{ 10: ['Ben'], 30: ['Ana'], 40: ['Cy'] }`. One value from many items means `reduce`.

**Step 2. The accumulator.** Start with `{}`. For each person, find the decade with `Math.floor(age / 10) * 10`, make sure that key holds an array, and push the name.

```
people.reduce((acc, p) => { const d = Math.floor(p.age / 10) * 10; (acc[d] ??= []).push(p.name); return acc; }, {});
// { '10': [ 'Ben' ], '30': [ 'Ana' ], '40': [ 'Cy' ] }
```

**Step 3. The idiom.** `acc[d] ??= []` means "if `acc[d]` is missing, set it to an empty array", then the result is pushed onto. Object keys are always strings, which is why the output shows `'10'`.

**Why it matters.** Grouping, counting, indexing by id, and summing by category are all this one pattern with a different accumulator.
:::

## 11.8 Objects, Map and Set

An object is a bundle of named values. Properties are read with a dot or with brackets (which allow any string, and computed names). A function stored in an object is a **method**, and inside it `this` is the object it was called on.

```
const motor = { name: 'TT', rpm: 200, 'stall torque': 0.08, spin() { return `${this.name} spins at ${this.rpm} rpm`; } };
motor.rpm, motor['stall torque'], motor.spin(), 'rpm' in motor, motor.volts
// 200 0.08 TT spins at 200 rpm true undefined
```

**Destructuring** with renaming and defaults, **spread** to copy-and-change, and the `Object` helpers:

```
const { name, rpm: speed, volts = 6 } = motor;          // TT 200 6
const faster = { ...motor, rpm: 260 };                   // a new object; motor.rpm is still 200
Object.keys(motor)      // [ 'name', 'rpm', 'stall torque', 'spin' ]
Object.entries({a:1,b:2})   // [ [ 'a', 1 ], [ 'b', 2 ] ]
Object.fromEntries(pairs)   // the reverse
```

@figure js-value-reference Numbers, strings and booleans are copied when assigned; objects and arrays are shared. `o2 = o1` makes two names for one object, and a change through either name is seen through both.

```
const o1 = { n: 1 }, o2 = o1, o3 = { ...o1 };
o1.n = 9;
// o2.n is 9, o3.n is 1, o1 === o2 true, o1 === o3 false
```

Spread makes a **shallow** copy: one level deep. Nested objects are still shared. `structuredClone` makes a deep copy:

```
const nested = { arm: { len: 0.24 } }, shallow = { ...nested }, deep = structuredClone(nested);
nested.arm.len = 0.3;
// shallow.arm.len is 0.3 (shared), deep.arm.len is 0.24 (copied)
```

**JSON** is the text form of objects, used for files, storage and the network. `JSON.stringify` drops `undefined` values and functions; `JSON.parse` brings the text back.

```
JSON.stringify({ id: 3, tags: ['aero'], when: undefined, f: () => 1 })   // {"id":3,"tags":["aero"]}
```

**Map** is an object whose keys can be anything (not only strings), kept in insertion order, with `size`, `get`, `set`, `has`, `delete`. **Set** is a collection of unique values. Both are iterable.

```
const m = new Map([['speed', 0.3]]); m.set('power', 1.2).set(motor, 'an object as a key');
m.get('speed'), m.has('power'), m.size, m.get(motor)       // 0.3 true 3 an object as a key
[...new Set([1, 2, 2, 3, 3, 3])], [...new Set('mississippi')].join('')   // [ 1, 2, 3 ] misp
```

`Object.freeze(obj)` stops an object changing (silently outside strict mode, with an error inside it).

:::why A Map when the keys are not known in advance
**What it is.** `new Map()` for a lookup table whose keys come from data; a plain object for a fixed record with known field names.

**Why it is done this way.** Object keys are always strings and an object has inherited properties (`toString` and friends) that can collide with data keys. A Map has neither problem and keeps order.

**Why it matters.** `map.get(key)` is never confused by a key called `constructor`, and `map.size` is free.

**What happens if you do not.** A lookup table built as an object works until a key happens to be `"toString"`, and then it returns a function.
:::

## 11.9 Strings and Numbers in Practice

Strings are immutable: every method returns a new string. The ones you will use, from `s09_strings_numbers.js`:

```
const s = 'Patrick the Robot';
s.length, s[0], s.at(-1), s.toUpperCase(), s.slice(8), s.indexOf('Robot'), s.includes('the')
// 17 P t PATRICK THE ROBOT the Robot 12 true
s.split(' '), s.replace('Robot', 'Cook'), s.replaceAll('t', 'T'), '  pad  '.trim(), 'ab'.repeat(3)
// [ 'Patrick', 'the', 'Robot' ] Patrick the Cook PaTrick The RoboT pad ababab
'7'.padStart(3, '0'), 'x'.padEnd(4, '.') + '|'      // 007 x...|
```

Turning text into numbers has four tools with different strictness:

```
Number('42'), Number('12px'), parseFloat('12.5px'), parseInt('0x1f', 16), +'3.5', Number(''), Number(null), Number(undefined)
// 42 NaN 12.5 31 3.5 0 0 NaN
```

`Number()` and unary `+` want the whole string to be a number; `parseFloat` reads as far as it can. `Number('')` is `0`, which is a trap for empty form fields: check for emptiness first.

Formatting for display:

```
(3.14159).toFixed(2), (0.000123).toExponential(2), (1234.5678).toPrecision(6), Math.round(2.5), Math.round(-2.5), Math.round(3.456 * 100) / 100
// 3.14 1.23e-4 1234.57 3 -2 3.46
(1234567.891).toLocaleString('en-US')                                          // 1,234,567.891
new Intl.NumberFormat('en-US', { style: 'unit', unit: 'meter', maximumFractionDigits: 1 }).format(0.1083)   // 0.1 m
```

`Math.round` rounds halves *up* (towards +∞), so `-2.5` becomes `-2`. To round to two decimals, multiply, round, divide. `Math.max(...arr)` spreads an array into arguments; `Math.hypot(3, 4)` is 5; `Math.atan2(y, x)` gives an angle with the right quadrant.

Comparing strings compares character codes, so capitals sort before lowercase and `'10' < '9'` is true. For human order use `localeCompare`: `['b', 'a', 'C'].sort((x, y) => x.localeCompare(y))` gives `[ 'a', 'b', 'C' ]`.

:::worked Parsing one line of a log
A line of a CSV log reads `0.100,0.321,APPROACH`. Pull out the time plus one millisecond, whether the range is under the brake threshold, and the phase in lowercase.

**Step 1. Split.** `const [t, range, phase] = csvLine.split(',')` gives three *strings*.

**Step 2. Convert where arithmetic is needed.** `+t + 0.001` is `0.101`; `Number(range) < 0.108` is `false` (0.321 is not under).

**Step 3. Leave text as text.** `phase.toLowerCase()` is `'approach'`.

**The trap.** `t + 0.001` without the `+` would be `'0.1000.001'`, a string. Every value that comes from text, a form field, a URL or a file is a string until you convert it, and the conversion is where you check it.
:::

## 11.10 Classes and Prototypes

A **class** bundles data and the functions that work on it. The syntax will look familiar from C++ (Chapter 17); the machinery underneath is different, and worth knowing.

```
class Motor {
    static count = 0;
    #rpm = 0;                                   // private field
    constructor(name, maxRpm = 200) { this.name = name; this.maxRpm = maxRpm; Motor.count++; }
    set duty(d) { this.#rpm = Math.min(1, Math.max(0, d)) * this.maxRpm; }
    get rpm() { return this.#rpm; }
    describe() { return `${this.name}: ${this.rpm.toFixed(0)} rpm`; }
    static fromSpec(spec) { return new Motor(spec.name, spec.max); }
}
class GearedMotor extends Motor {
    constructor(name, ratio) { super(name, 200 / ratio * 48); this.ratio = ratio; }
    describe() { return super.describe() + ` through 1:${this.ratio}`; }
}
```

- The **constructor** runs on `new`. **Fields** declared in the body are per-instance; `static` ones belong to the class.
- A **getter** (`get rpm()`) is read like a property; a **setter** (`set duty(d)`) is assigned like one. Here `m.duty = 0.7` clamps and converts, and `m.rpm` reads the result.
- A `#private` field is invisible outside the class, even to `JSON.stringify`. Reading `g.#rpm` from outside is a *syntax error*, caught before the program runs.
- `extends` makes a subclass; `super(...)` must be called in its constructor before `this` is used; `super.describe()` calls the parent's version.

```
1: left: 140 rpm | arm: 100 rpm through 1:96 | 2
2: true true true true
3: [ 'name', 'maxRpm', 'ratio' ] function false true
4: {"name":"arm","maxRpm":100,"ratio":96} (private fields are not visible, even to JSON)
5: spare: 0 rpm
6: plain: 12 rpm
7: TypeError - this is undefined when a method is called loose
8: left: 140 rpm [ 'left: 140 rpm', 'arm: 100 rpm through 1:96' ]
```

@figure js-prototype-chain Methods are not copied into each object. They live on the class's prototype, and a property lookup that fails on the object walks up the chain until it finds the name or runs out.

Line 3 shows this: `Object.keys(g)` lists only the instance's own data; `describe` is a function reachable through `g` (`'describe' in g` is true) but not its own property. Line 6 shows the other side: a plain object given the same function works, because `this` is simply whatever the method was called on. And line 7 shows the price: a method pulled off its object and called on its own has no `this`, and throws. `bind` fixes a function to an object; an arrow function wrapper (`x => x.describe()`) is often simpler.

:::why Classes for things with identity and behaviour, plain objects for data
**What it is.** `class Motor` for something that has a name, state that changes, and methods. `{ t: 0.1, range: 0.32 }` for a record read from a file.

**Why it is done this way.** A class is worth its ceremony when there is behaviour to attach and invariants to protect (the clamp in the setter). A record needs neither.

**Why it matters.** Data stays easy to copy, compare, serialise and send; behaviour stays in one place.

**What happens if you do not.** Either every record becomes a class instance that cannot be `JSON.stringify`d without losing its methods, or every object with behaviour is a bag of fields that any code can corrupt.
:::

## 11.11 Errors and Debugging

When something goes wrong, JavaScript **throws** an error, which unwinds the call stack until a `try`/`catch` catches it or the program dies with the message in the console. You throw your own with `throw new Error('...')`, and you can define kinds of error by extending `Error`.

```
class RangeOutOfBounds extends Error {
    constructor(value) { super(`sonar reading ${value} m is outside 0.02 to 4 m`); this.name = 'RangeOutOfBounds'; this.value = value; }
}
function readSonar(v) {
    if (typeof v !== 'number' || Number.isNaN(v)) throw new TypeError(`expected a number, got ${typeof v}`);
    if (v < 0.02 || v > 4) throw new RangeOutOfBounds(v);
    return v;
}
for (const input of [0.3, 'far', 7]) {
    try { console.log('ok', readSonar(input)); }
    catch (e) {
        if (e instanceof RangeOutOfBounds) console.log('range:', e.message, '(value', e.value + ')');
        else if (e instanceof TypeError) console.log('type:', e.message);
        else throw e;                                   // not ours: let it go up
    } finally { console.log('  (finally runs every time)'); }
}
```

```
ok 0.3
  (finally runs every time)
type: expected a number, got string
  (finally runs every time)
range: sonar reading 7 m is outside 0.02 to 4 m (value 7)
  (finally runs every time)
TypeError: Cannot read properties of null (reading 'length')
ReferenceError: undefinedFunction is not defined
SyntaxError: Expected property name or '}' in JSON at
Error: where am I? | true
Assertion failed: this assertion fails and prints, but does not stop the program
still running
```

The three built-in messages above are the ones you will see most. **`Cannot read properties of null`** means you called a method on something that was not there, almost always a `querySelector` that matched nothing. **`is not defined`** is a misspelled name. **`SyntaxError`** from `JSON.parse` means the text was not JSON (often an HTML error page where JSON was expected).

:::why Catching only the errors you expect and rethrowing the rest
**What it is.** `if (e instanceof RangeOutOfBounds) ... else throw e`.

**Why it is done this way.** A `catch` that swallows everything also swallows typos, null references and bugs you have not met yet.

**Why it matters.** The errors you planned for are handled; the ones you did not are still loud.

**What happens if you do not.** `try { ... } catch (e) {}` is the most dangerous line in the language. The program carries on in a broken state and fails somewhere far from the cause.
:::

Every error has a `stack`: the chain of calls that led to it, with file names and line numbers. Read it top down; the first line of *your* code in it is usually where to look. Beyond `console.log`, the console has `console.table(array)` for rows, `console.error` for red, `console.time('x')`/`console.timeEnd('x')` for timing, and `console.assert(condition, message)`, which prints only when the condition is false. The `debugger;` statement pauses the browser at that line with the developer tools open, where you can step through code and inspect every variable; it is faster than any number of logs.

## 11.12 The DOM in Practice

Chapters 3 and 5 introduced the DOM; here is the working vocabulary. These need a page, so run them in the console on any site.

```
const title = document.querySelector('h1');               // the first match, or null
const chips = document.querySelectorAll('.chip');          // a static NodeList: iterate with for...of or forEach
title.textContent = 'Meet Patrick';                        // text, safely (Chapter 8)
title.classList.add('on'); title.classList.toggle('big'); title.classList.contains('on');
title.dataset.chart                                         // the data-chart attribute
title.setAttribute('aria-expanded', 'true'); title.getAttribute('id'); title.hidden = true;
title.style.setProperty('--progress', 0.6);                 // a custom property, for CSS to use (Chapter 10)
const card = document.createElement('article');
card.className = 'card'; card.textContent = 'One';
grid.append(card);  grid.prepend(card);  card.remove();  grid.replaceChildren(...cards);
title.closest('.panel');  title.parentElement;  title.nextElementSibling;  grid.children;
```

Reading a control's value: `input.value` is always a *string* (so `+input.value` for numbers), `checkbox.checked` is a boolean, `select.value` is the chosen option's value. Reading geometry: `el.getBoundingClientRect()` gives its position and size in CSS pixels relative to the viewport; `el.clientWidth` and `el.offsetHeight` give sizes; reading any of them forces layout (Chapter 2), so read in batches.

Events, the short version of Chapter 5: `el.addEventListener('click', handler)`; the handler gets an `event` with `target`, `currentTarget`, `clientX`, `key`; `event.preventDefault()` stops the browser's own action (a form submitting, a link navigating); delegation puts one listener on a parent and uses `event.target.closest('.chip')`.

:::worked Wiring the question form from Chapter 9
The robot page's form should send its question without reloading the page, and show a thank-you line. Write the script.

**Step 1. Find the form and listen for submit**, not for the button's click, so that pressing Enter in a field also works.

**Step 2. Stop the reload**, read the fields, and build the request body with `FormData`, which collects every named control exactly as the browser would.

**Step 3. Send it and report.**

```
const form = document.querySelector('form');
const note = document.querySelector('#note');          // <p id="note" aria-live="polite"></p>
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const body = new FormData(form);
    note.textContent = 'Sending...';
    try {
        const res = await fetch(form.action, { method: 'post', body });
        if (!res.ok) throw new Error(`server said ${res.status}`);
        note.textContent = 'Thank you. I will reply by email.';
        form.reset();
    } catch (e) {
        note.textContent = `Could not send (${e.message}). Your text is still here.`;
    }
});
```

**Step 4. Check the layers.** With the script removed, the form still submits the old-fashioned way to `form.action`. With it, the page stays put and the `aria-live` paragraph is read aloud to screen-reader users when it changes. That is progressive enhancement, done.
:::

## 11.13 Asynchronous Code: Promises and async/await

Some things take time: loading a file, waiting for the network, waiting for a timer. JavaScript never waits by stopping (Chapter 5). Instead it hands you a **promise**: an object that stands for a result that has not arrived yet.

@figure js-promise-states A promise starts pending and settles exactly once, either fulfilled with a value or rejected with an error. `then`, `catch` and `await` are ways to be told which.

```
const wait = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
wait(5, 'done').then(v => console.log('then:', v)).finally(() => console.log('finally'));
```

`new Promise` takes a function with two callbacks: call `resolve(value)` when the work succeeds, `reject(error)` when it fails. `.then(f)` runs `f` with the value when the promise fulfils and returns a new promise for `f`'s result, so `then`s chain. `.catch(g)` handles a rejection anywhere earlier in the chain. `.finally(h)` runs either way.

**`async` and `await`** let you write the waiting as if it were a plain top-to-bottom story. An `async` function always returns a promise; inside it, `await p` pauses *this function* (not the page) until `p` settles, and gives its value, or throws its error, which `try`/`catch` can catch like any other.

```
async function load(url) {
    try { const data = await fakeFetch(url); return `${url}: ${data.items.length} items`; }
    catch (e) { return `${url}: failed (${e.message})`; }
}
```

:::why await instead of nested callbacks
**What it is.** `await` pauses *this function* (not the whole page) until a promise settles.

**Why it is done this way.** Without it you nest a callback inside a callback inside a callback, and error handling gets tangled.

**Why it matters.** The code reads in the order things happen. The page stays responsive, because (Chapter 5) the event loop runs other things during the pause.

**What happens if you do not.** You write "callback hell", and one forgotten error case makes a request fail without a trace.
:::

#### The order things happen

Chapter 5's rule, applied: the current code finishes, then every microtask (promise follow-ups, the code after an `await`), then the next task (a timer). The first part of `s13_async.js` prints its lines in the order of their numbers:

```
console.log('1 start');
setTimeout(() => console.log('5 timer (task)'), 0);
Promise.resolve().then(() => console.log('3 then (microtask)'));
(async () => { console.log('2 inside async, before await'); await null; console.log('4 after await (microtask)'); })();
console.log('1 end of script');
```

An `async` function runs *synchronously* until its first `await`; that is why line 2 prints before "end of script". Everything after the `await` is a microtask, so it runs before the timer, even a zero-millisecond one.

#### Several at once

`await` one after another is **sequential**: the second starts when the first finishes. `Promise.all([...])` starts them all and waits for all, which is **parallel** and is what you want for independent requests. It rejects as soon as any one rejects; `Promise.allSettled` waits for all and reports each; `Promise.race` gives the first to settle.

```
6 /a.json: 3 items | /b.json: 3 items | /c.json: 3 items | /d.json: 3 items
7 sequential took longer than parallel: true (69 ms vs 31 ms)
8 /bad.json: failed (404 for /bad.json)
9 [ 'fulfilled', 'rejected' ]
10 fast
11 the promise is pending here: true
12 then: done
13 finally
```

(The milliseconds on line 7 vary from run to run; the comparison does not.) Two awaited 30 ms fetches take about 60 ms; two in `Promise.all` take about 30.

#### fetch

`fetch(url)` returns a promise of a **response**. The response's body is read with a second promise: `await res.json()` for JSON, `await res.text()` for text. A 404 does *not* reject the promise; only a network failure does. So check `res.ok` yourself.

```
async function getJSON(url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`${res.status} ${res.statusText} for ${url}`);
    return res.json();
}
```

:::why Checking res.ok before reading the body
**What it is.** An `if (!res.ok) throw` between `fetch` and `res.json()`.

**Why it is done this way.** `fetch` considers any answer from the server a success, even "404 Not Found".

**Why it matters.** Your error handling sees a clear message instead of a `SyntaxError` from trying to parse an HTML error page as JSON.

**What happens if you do not.** The failure shows up as "Unexpected token < in JSON", three functions away from the request that caused it.
:::

## 11.14 Timers, Animation Frames and Rate Limiting

`setTimeout(fn, ms)` calls `fn` once after at least `ms` milliseconds; `setInterval(fn, ms)` calls it repeatedly; both return an id for `clearTimeout`/`clearInterval`. `requestAnimationFrame(fn)` calls `fn` before the next paint and is the only right way to animate (Chapter 6). An `AbortController` lets you cancel something that is waiting: pass `controller.signal` to `fetch`, or listen for its `abort` event in your own promise.

Two patterns tame events that fire too often. **Debounce** waits until the events stop for a while, then runs once: right for resize, for search-as-you-type, for saving a draft. **Throttle** runs at most once per interval while the events keep coming: right for scroll position and pointer moves.

```
function debounce(fn, ms) { let id = null; return (...args) => { clearTimeout(id); id = setTimeout(() => fn(...args), ms); }; }
function throttle(fn, ms) { let last = -Infinity; return (...args) => { const now = Date.now(); if (now - last >= ms) { last = now; fn(...args); } }; }
```

In `s14_timers.js` a burst of six events, 10 ms apart, hits both:

```
throttled 100
throttled 400
debounced 60
debounced ran once, after the burst; throttled ran at most once per 40 ms during it
```

The throttled handler ran on the first event and again 40 ms later; the debounced handler ran once, 40 ms after the *last* event, with the last value. Both are closures from 11.6.

## 11.15 Modules

A **module** is a file that exports some names and imports others. In the browser, `<script type="module">` enables it; in Node, the `.mjs` extension does; a bundler (Chapter 16) joins modules into one file for a page.

```
// s15_maths.mjs
export const clamp = (x, lo, hi) => Math.min(hi, Math.max(lo, x));
export function smoothstep(t) { t = clamp(t, 0, 1); return t * t * (3 - 2 * t); }
const secret = 'not exported';                       // module scope: invisible outside
export default function describe() { return `maths module (${secret.length} chars of private state)`; }

// s15_main.mjs
import describe, { clamp, lerp, smoothstep as ease } from './s15_maths.mjs';
import * as maths from './s15_maths.mjs';
const { lerp: lerp2 } = await import('./s15_maths.mjs');   // on demand; returns a promise
```

```
1: 1 50 0.1563 maths module (12 chars of private state)
2: [ 'clamp', 'default', 'lerp', 'smoothstep' ] undefined
3: true same module instance
```

A module has its own scope: `secret` is invisible outside, and `maths.secret` is `undefined`. There is one **default** export per file and any number of **named** ones; `as` renames on import. A module is evaluated once, however many files import it, so `lerp2 === lerp`. Dynamic `import()` loads a module when the line runs, which is how a page loads a heavy viewer only when a visitor opens it (Part IV, Advanced JavaScript).

:::why Splitting code into modules
**What it is.** Each file does one job and says what it shares.

**Why it is done this way.** A thousand-line file is hard to navigate and impossible to reuse.

**Why it matters.** Names do not collide, you can see what depends on what, and a bundler can leave out code you never import.

**What happens if you do not.** Everything lives in one global space, and two scripts that both define `fit` overwrite each other. The Patrick page keeps its physics (`model.js`), its geometry (`robot.js`) and its page logic (`main.js`) apart for exactly this reason.
:::

## 11.16 Working with Data

Most of a page's script is moving data about: a CSV log into an array of records, a settings object into `localStorage`, a state object into a new state object. `s16_data.js` does all three.

```
const [header, ...rows] = csv.trim().split('\n');
const cols = header.split(',');
const records = rows.map(line => Object.fromEntries(line.split(',').map((v, i) => [cols[i], Number.isNaN(+v) ? v : +v])));
// records[2] is { t: 0.2, range: 0.104, phase: 'BRAKE' }
```

Split into lines, split each line into cells, pair each cell with its column name, and convert the ones that look like numbers. The reverse, `records.map(r => [...].join(',')).join('\n')`, gives back the input exactly (line 4 of the output prints `true`).

**Immutable updates.** To change one field deep inside a state object without touching the old one, copy each level you pass through with spread:

```
const next = { ...state, items: [...state.items, 'salt'], pos: { ...state.pos, x: 0.15 } };
// state.items [ 'egg' ]; next.items [ 'egg', 'salt' ]; state.pos.x 0.1; next.pos.x 0.15; state.pos === next.pos false
```

**Storage.** `localStorage.setItem(key, string)` and `getItem(key)` keep strings in the browser between visits. Store objects as JSON, and give `JSON.parse` a default for a missing key: `JSON.parse(localStorage.getItem('settings') ?? '{}')`.

```
7: 0.7 undefined        <- a saved setting, and a missing one that falls back to {}
```

## 11.17 Writing Code That Lasts

Everything so far is about making code work. This is about making it *keep* working, for you in six months and for anyone else.

**Strict mode.** Put `'use strict';` at the top of a script (modules and classes are strict automatically). It turns silent mistakes into errors: assigning to an undeclared name, writing to a frozen object, a loose `this`.

**Names.** `camelCase` for variables and functions, `PascalCase` for classes, `UPPER_SNAKE` for true constants. A name should say what the thing *is*; a function name should say what it *does*, usually with a verb.

**Shape.** Functions short enough to read without scrolling. Pure functions for calculation, a few impure ones at the edges for the DOM, the network and storage. Data flows in as arguments and out as return values.

**Comments.** Say why, not what. `// clamp dt so a hidden tab does not fling everything` is a comment worth having. `// increment i` is not.

**A linter.** ESLint reads your code and flags unused variables, missing `await`s, `==`, and a hundred other things, in the editor as you type. Set it up once per project.

**Tests.** A test is a function that calls your code with known inputs and checks the output. You do not need a framework to start; `s17_tests.js` is a complete harness in fifteen lines:

```
let passed = 0, failed = 0;
function test(name, fn) {
    try { fn(); passed++; console.log('  ok   ', name); }
    catch (e) { failed++; console.log('  FAIL ', name, '-', e.message); }
}
const assertEq = (got, want, tol = 0) => { if (Math.abs(got - want) > tol) throw new Error(`got ${got}, wanted ${want}`); };

test('clamp keeps values inside', () => { assertEq(clamp(5, 0, 1), 1); assertEq(clamp(-2, 0, 1), 0); });
test('friction never exceeds the peak', () => { for (let s = 0; s <= 1; s += 0.01) if (mu(s, 0.8) > 0.8 + 1e-12) throw new Error(`exceeded at ${s}`); });
test('a deliberate failure, to show the output', () => assertEq(0.1 + 0.2, 0.3));
test('the same test with a tolerance', () => assertEq(0.1 + 0.2, 0.3, 1e-9));
```

```
  ok    clamp keeps values inside
  ok    friction is zero with no slip
  ok    friction peaks near 17% slip
  ok    friction never exceeds the peak
  ok    ticks are round numbers
  FAIL  a deliberate failure, to show the output - got 0.30000000000000004, wanted 0.3
  ok    the same test with a tolerance
6 passed, 1 failed
```

:::why Testing the pure functions first
**What it is.** Tests for `clamp`, `mu`, `niceTicks`: the functions that take numbers and return numbers.

**Why it is done this way.** They need no page, no network and no setup, so the tests are fast, and they are the functions the charts and simulations depend on.

**Why it matters.** When the friction curve is wrong, the test says so in a line, instead of a chart looking slightly odd.

**What happens if you do not.** You find out that `niceTicks` returns 0.005 instead of 0.002 (as the author of this chapter did, from the test above) by staring at a chart with strange gridlines, weeks later.
:::

## Practice Problems A: Values, Variables and Flow

:::problems
1. Give the result and the type of each: `typeof null`, `typeof []`, `'3' * '4'`, `'3' + 4`, `0.1 * 3`, `Number('')`, `Number('1e3')`, `[] + []`.
2. Which of these are false in an `if`: `'false'`, `0`, `[]`, `''`, `NaN`, `-0`, `{}`, `null`?
3. What are `a` and `b` after `let a = 5; const b = a; a = 8;`? What is `o2.n` after `const o1 = {n: 1}; const o2 = o1; o1.n = 9;`? Explain the difference.
4. Predict the output of `for (var i = 0; i < 3; i++) setTimeout(() => console.log(i));` and of the same loop with `let`.
5. Write `grade(score)` as one expression with ternaries: 75 and up is `'distinction'`, 50 and up `'pass'`, otherwise `'fail'`.
6. Explain why `settings.volume || 10` is wrong when `volume` can be `0`, and fix it.
7. Rewrite this `if` chain as a `switch (true)`: codes 500 and up are server errors, 400 and up client errors, 300 and up redirects, 200 and up successes.
8. Write a `while` loop that doubles `x` starting from 1 until it exceeds 1 000, counting the doublings. What is the count?
:::

:::answers
**Chapter 11, Practice Problems A.**

1. `'object'` (string); `'object'`; `12` (number); `'34'` (string); `0.30000000000000004` (number); `0`; `1000`; `''` (an empty string, because arrays convert to strings when added).
2. `0`, `''`, `NaN`, `-0` and `null` are false. `'false'` (a non-empty string), `[]` and `{}` are true.
3. `a` is 8 and `b` is 5: numbers are copied by value, so changing `a` does not affect `b`. `o2.n` is 9: objects are shared by reference, so `o1` and `o2` are two names for the same object.
4. `var`: 3, 3, 3 (one shared `i`, already 3 when the timers run). `let`: 0, 1, 2 (a fresh `i` per iteration).
5. `const grade = s => s >= 75 ? 'distinction' : s >= 50 ? 'pass' : 'fail';`
6. `||` treats `0` as missing and replaces it with 10, so a volume of zero becomes 10. Use `settings.volume ?? 10`, which only replaces `null` and `undefined`.
7. `switch (true) { case code >= 500: return 'server error'; case code >= 400: return 'client error'; case code >= 300: return 'redirect'; case code >= 200: return 'success'; default: return 'informational'; }`
8. `let x = 1, n = 0; while (x <= 1000) { x *= 2; n++; }` gives n = 10 (x reaches 1 024).
:::

## Practice Problems B: Functions, Arrays and Objects

:::problems
1. Given `const prices = [4, 9, 15, 22]`, what do `prices.map(p => p * 1.15)`, `prices.filter(p => p > 10)` and `prices.reduce((s, p) => s + p, 0)` return? Why is one of the numbers in the first answer ugly?
2. What does `console.log(c1(), c1(), c2())` print, given `makeCounter` from 11.6?
3. Write `range(a, b)` that returns the integers from a to b inclusive using `Array.from`. Then use `map` and `filter` to get the squares of the odd numbers from 1 to 9.
4. What does `[10, 9, 1, 100].sort()` give, and why? Fix it.
5. Using `reduce`, count how many times each word appears in `['a', 'b', 'a', 'c', 'a']`.
6. `const p = { name: 'Ana', tags: ['x'] }; const q = { ...p }; q.tags.push('y');` What is `p.tags` now, and why? How would you avoid it?
7. Write a function `pick(obj, keys)` that returns a new object with only the named keys, using `Object.fromEntries`.
8. Write a closure `makeAccumulator(start)` that returns a function which adds its argument to a running total and returns the total. Show its output for `acc(5); acc(10)` with `start = 100`.
9. Why does `people.sort((a, b) => a.age - b.age)` change `people`, and what would you call instead to keep the original?
:::

:::answers
**Chapter 11, Practice Problems B.**

1. `[4.6, 10.35, 17.25, 25.299999999999997]`; `[15, 22]`; `50`. The last decimal is ugly because numbers are binary floating point and 25.3 cannot be stored exactly. Round for display, for example with `toFixed(2)`.
2. It prints `1 2 1`. Each call to `makeCounter` makes a separate `n`, so `c2` starts at 1.
3. `const range = (a, b) => Array.from({ length: b - a + 1 }, (_, i) => a + i);` then `range(1, 9).filter(n => n % 2 === 1).map(n => n * n)` gives `[1, 9, 25, 49, 81]`.
4. `[1, 10, 100, 9]`: the default sort compares as strings, and `'10'` comes before `'9'`. Use `sort((a, b) => a - b)` to get `[1, 9, 10, 100]`.
5. `words.reduce((acc, w) => { acc[w] = (acc[w] ?? 0) + 1; return acc; }, {})` gives `{ a: 3, b: 1, c: 1 }`.
6. `p.tags` is `['x', 'y']`. Spread is a shallow copy, so `q.tags` is the same array as `p.tags`. Copy the inner array too (`{ ...p, tags: [...p.tags] }`) or use `structuredClone(p)`.
7. `const pick = (obj, keys) => Object.fromEntries(keys.filter(k => k in obj).map(k => [k, obj[k]]));`
8. `const makeAccumulator = start => { let total = start; return x => (total += x); };` With `start = 100`: `acc(5)` is 105, `acc(10)` is 115.
9. `sort` sorts in place. Use `people.toSorted(...)`, or `[...people].sort(...)`.
:::

## Practice Problems C: Classes, Errors, the DOM and Async

:::problems
1. Add a `stop()` method to the `Motor` class that sets the duty to 0, and a getter `isRunning` that is true when `rpm > 0`. Why must `stop` go through the setter rather than writing `this.#rpm = 0` directly?
2. `const f = m.describe; f();` throws. Explain why, and give two fixes.
3. What is wrong with `try { risky(); } catch (e) {}`? Rewrite it so that it handles `RangeOutOfBounds` and lets everything else propagate.
4. A script does `document.querySelector('#chart').getContext('2d')` and throws `Cannot read properties of null`. Name the two most likely causes.
5. Predict the printed order: `console.log('1'); (async () => { console.log('2'); await null; console.log('3'); })(); console.log('4');`
6. Two fetches are independent. Rewrite `const a = await getJSON(u1); const b = await getJSON(u2);` so they run at the same time, and say what happens if the second fails.
7. Why does `fetch` not throw on a 404, and what one line fixes the problem?
8. Write a debounced search: the function `search(q)` must run 300 ms after the visitor stops typing in `#q`.
:::

:::answers
**Chapter 11, Practice Problems C.**

1. `stop() { this.duty = 0; }` and `get isRunning() { return this.rpm > 0; }`. Going through the setter keeps the clamp and any other rule in one place; writing the private field directly bypasses them (and would be a second place to change if the rule changed).
2. Called loose, `describe` has no `this` (class bodies are strict), so `this.name` throws. Fix: `const f = m.describe.bind(m)`, or call it through the object, `const f = () => m.describe()`.
3. It swallows every error, including bugs, and the program continues in a broken state. `try { risky(); } catch (e) { if (e instanceof RangeOutOfBounds) handle(e); else throw e; }`
4. The script ran before the element existed (no `defer`, and the script is in the head), or the selector does not match (the id is misspelled or the element is a different one).
5. `1`, `2`, `4`, `3`. The async function runs synchronously until its first `await`, so 2 prints before 4; the continuation after `await` runs as a microtask after the main code finishes, so 3 comes last.
6. `const [a, b] = await Promise.all([getJSON(u1), getJSON(u2)]);` If either rejects, `Promise.all` rejects immediately with that error and the `await` throws; use `Promise.allSettled` if you want both results regardless.
7. `fetch` only rejects when no response arrives at all (network failure); a 404 is a response. Add `if (!res.ok) throw new Error(res.status);` before reading the body.
8. `const run = debounce(q => search(q), 300); document.querySelector('#q').addEventListener('input', e => run(e.target.value));`
:::

## Practice Problems D: Modules, Data and Tests

:::problems
1. A module exports `export default function fit() {}` and `export const COL = {}`. Write the import line that brings both in, naming the default `fitCanvas`.
2. Why does `import` at the top of a file not work in a plain `<script src="main.js">`, and what are the two fixes?
3. Parse `'name,age\nAna,31\nBen,17'` into an array of objects with numeric ages, in one expression chain.
4. `localStorage.setItem('n', 5); const n = localStorage.getItem('n') + 1;` What is `n`, and why? Fix it.
5. Write a test, in the style of 11.17, that checks `lerp(0, 200, 0.25)` is 50 and `smoothstep(0.5)` is 0.5.
6. The state is `{ chart: 'speed', paused: false, filters: { tag: 'all' } }`. Write the expression that produces a new state with `filters.tag` set to `'aero'` and nothing else changed, without mutating the old state.
7. Give three things a linter catches that a test does not, and one thing a test catches that a linter does not.
:::

:::answers
**Chapter 11, Practice Problems D.**

1. `import fitCanvas, { COL } from './charts.js';`
2. A plain script is not a module, so `import` is a syntax error. Either load it with `<script type="module" src="main.js">` (served over HTTP, since modules do not load from `file://`), or bundle it (Chapter 16) into a single plain script.
3. `text.split('\n').slice(1).map(l => { const [name, age] = l.split(','); return { name, age: +age }; })` gives `[{ name: 'Ana', age: 31 }, { name: 'Ben', age: 17 }]`.
4. `n` is `'51'`. Storage holds strings, so `getItem` returns `'5'` and `+ 1` joins text. Use `Number(localStorage.getItem('n')) + 1`, or store and read JSON.
5. `test('lerp and smoothstep', () => { assertEq(lerp(0, 200, 0.25), 50); assertEq(smoothstep(0.5), 0.5, 1e-12); });`
6. `{ ...state, filters: { ...state.filters, tag: 'aero' } }`
7. Linter: an unused variable, a missing `await`, use of `==`, a variable used before declaration. Test: that `niceTicks(0, 0.0123, 4)` returns 0.005 (a wrong *result*, which no linter can know).
:::

## Mini Projects

Four programs, each in `Guide/code/js`, each short enough to type in an evening and complete enough to be useful. Run them, then change them.

:::project 1. A unit converter on the command line
`node mp1_convert.js 250 kt` prints 250 knots in every other speed unit; `node mp1_convert.js 250 kt m/s` prints one. The whole program is a table of units (`TO_SI`), a table of kinds, a four-line `convert` function that refuses to convert a length to a speed, and a command-line parser that prints usage when the arguments are wrong. Output:

```
250 kt = 128.611 m/s
250 kt = 463 km/h
250 kt = 25,317.148 ft/min
error: cannot convert length to speed          <- from: node mp1_convert.js 3 ft kt
usage: node mp1_convert.js <value> <unit> [unit]   e.g. 250 kt m/s
```

Check one by hand: 250 knots × 1 852 m / 3 600 s = 128.61 m/s. ✓ Add temperature (which needs an offset, not just a factor) and see what has to change.
:::

:::project 2. A sonar log analyser
`mp2_sonar.js` writes a deterministic 301-line log of a sensor approaching a wall at 15 cm/s, with a dropout (a reading of 4.0 m, the sensor's maximum) every 37th sample, then analyses it: counts dropouts, computes the mean and median of the valid readings, filters the signal with a five-sample median, and finds when a brake set at 0.108 m would trigger.

```
301 readings, 9 dropouts (3.0%)
mean of valid readings 0.275 m, median 0.274 m
raw minimum 0.050 m, raw maximum 4.000 m
brake would trigger at t = 2.62 s on the filtered signal
on the raw signal it would trigger at t = 2.62 s (same here, because the dropouts read far, not near)
```

Check: 0.5 − 0.15 × 2.62 = 0.107 m, just under the threshold. ✓ Change the dropouts to read *near* (0.02 m) instead of far and watch the raw trigger time collapse while the filtered one holds. That is why the robot's sonar reading is filtered before the controller sees it.
:::

:::project 3. A damped oscillation, computed and checked
`mp3_oscillation.js` evaluates x(t) = e^{−ζωₙt} cos(ω_d t) with ζ = 0.5 and ωₙ = 2, finds the peaks numerically, and compares every number with the theory from Project 4 of Part III:

```
damped frequency 1.732 rad/s, period 3.628 s
x at one period: 0.0266 (prediction e^-T = 0.0266)
peaks (t, x): (3.326, 0.0311) (6.954, 0.0008) (10.581, 0.0000)
ratio of successive peaks 0.0266, theory e^(-2*pi*zeta/sqrt(1-zeta^2)) = 0.0266
envelope reaches 2% at t = 3.91 s (theory 3.91 s)
```

Notice that the first *peak* is at 3.326 s, not at one period (3.628 s): the decaying envelope pulls each maximum slightly earlier than the cosine's own peak. The program then prints a small text chart. Make it take ζ and ωₙ from the command line, as in project 1.
:::

:::project 4. A robot's phases as a state machine
`mp4_phases.js` is the pattern that runs the whole Patrick page: one variable holds the phase; each 1 ms tick does only what that phase says and checks one condition to move on. The robot approaches a wall 50 cm away at 25 cm/s, brakes at 2 m/s² when the sonar reads 10.8 cm, lowers the arm, closes the claw, lifts.

```
0.000 s: IDLE -> APPROACH
1.570 s: APPROACH -> BRAKE
1.695 s: BRAKE -> REACH
2.313 s: REACH -> GRIP
2.713 s: GRIP -> LIFT
3.020 s: LIFT -> DONE
finished at 3.021 s, 40.8 cm from the start, 9.2 cm from the wall
braking distance v^2 / 2a = 1.56 cm, so it stops at 10.8 - 1.56 = 9.24 cm
```

Check: it must cover 50 − 10.8 = 39.2 cm at 25 cm/s before the sonar trips: 1.568 s. ✓ Braking from 0.25 m/s at 2 m/s² takes 0.125 s, so the brake ends at 1.695 s. ✓ Add a `PLACE` phase and a second item, and you have written the skeleton of Chapter 42.
:::

:::summary
- Seven types; `typeof null` lies; numbers are floating point, so compare with a tolerance and round only for display; `===` always, `??` for defaults.
- `const` by default, `let` when you must, never `var`; block scope; closures remember their birthplace.
- Write small pure functions and pass them to `map`, `filter`, `reduce`; copy with spread instead of mutating; know which array methods mutate.
- Objects are shared by reference; spread copies one level, `structuredClone` copies all; Map and Set for lookups and uniqueness; JSON for text.
- Classes bundle state and behaviour; methods live on the prototype; `this` is whatever the method was called on, so bind or wrap when you pass one.
- Throw real errors, catch only what you expect, read the stack, use `debugger`.
- The DOM: `querySelector`, `textContent`, `classList`, `dataset`, `append`, events with delegation; `FormData` for forms.
- Promises settle once; `async`/`await` reads top to bottom; microtasks run before timers; `Promise.all` for independent work; check `res.ok`.
- Debounce for "after they stop", throttle for "at most this often"; `requestAnimationFrame` for motion.
- Modules give private scope and explicit dependencies; strict mode, a linter and a fifteen-line test harness keep code honest.
:::
