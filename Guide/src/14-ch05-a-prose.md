# Events, State and the Event Loop

A page that only shows things is a document. A page that responds to you is a program, and every program needs three things: a way to hear what you do, a place to remember what has happened, and a rule for turning what it remembers into what you see. Those three are **events**, **state** and **rendering**. Underneath all of them is a little piece of machinery called the event loop, which decides the order your code runs in. It is the single most useful thing to understand about JavaScript, and also the least obvious. Take a deep breath. It is simpler than it sounds.

:::objectives
- Explain what "single-threaded" means and why it is both a gift and a limit.
- Describe the call stack, the task queue, the microtask queue and the loop that ties them together, and predict the order of a mixed script.
- Register handlers, read the event object, and use capture, bubble and delegation on purpose.
- Handle mouse, touch and pen with one set of pointer events.
- Decide what belongs in state, keep each fact once, and draw the screen as a function of it.
:::

## JavaScript Does One Thing at a Time

JavaScript on a page is **single-threaded**. It runs one piece of code at a time, all the way to the end, before it starts another. Picture a cashier with one till and a very polite queue. Nobody is served simultaneously.

That is a gift, because two of your functions can never change the same variable at the same instant, so a whole family of nasty bugs simply cannot happen. It is also a limit, because while one function is running, nothing else on the page can react, which is the long-task problem from Chapter 2.

So how does a one-at-a-time page wait for a click, a timer *and* a network reply? It does not wait. It *schedules*. The browser keeps lists of jobs that are ready, and a loop picks the next one when the current one finishes.

## The Stack, the Queues and the Loop

Three structures work together.

The **call stack** records what is running right now. Calling a function pushes it on; returning pops it off.

The **task queue** holds jobs that are ready but waiting their turn: a click handler, a timer that has gone off, a message from somewhere else.

The **microtask queue** holds smaller follow-up jobs, mainly the next step of a **promise**. It has higher priority than the task queue.

The **event loop** is the rule that ties them together. It repeats forever:

1. Run the oldest task to completion.
2. Run *every* microtask, including any new ones they add, until none are left.
3. If it is time, let the browser redraw the screen.
4. Go back to step 1.

@figure event-loop The three structures and the loop. Whatever is on the stack runs to the end. Then every microtask runs. Only then does the next task (a click, a timer) get its turn, and only between tasks can the browser redraw.

:::remember
The current code always finishes first. Then every waiting microtask runs. Then the next task begins. If you remember only that sentence from this chapter, you can predict almost any ordering puzzle JavaScript throws at you.
:::

@include blocks/ch05-w1.md

:::why setTimeout with zero is not "now"
**What it is.** `setTimeout(fn, 0)` asks for `fn` to run "as soon as possible".

**Why it is done this way.** "As soon as possible" has to mean "after the code that is running now", because JavaScript never interrupts itself.

**Why it matters.** It is a useful way to say "do this after the current work, and after the browser has had a chance to breathe".

**What happens if you do not understand it.** You write code that assumes the timer fires immediately, and get bugs that appear only sometimes.
:::

## Events and Handlers

An **event** is a signal that something happened: a click, a key press, a finger moving, a page finishing loading, a timer expiring. You respond by registering a **handler**, a function the browser will call when it happens.

```
canvas.addEventListener('pointerdown', (event) => {
    console.log('pressed at', event.clientX, event.clientY);
});
```

The event object passed to your handler carries the details: where the pointer was, which key, which element was the target.

:::why Keeping handlers small
**What it is.** A handler records what happened and does little else. The heavy work happens elsewhere, once per frame.

**Why it is done this way.** Handlers run as tasks on the single main thread.

**Why it matters.** A slow handler blocks everything, including the next click, scrolling and animation.

**What happens if you do not.** The page feels frozen after every click.
:::

#### Propagation: capture and bubble

An event does not just arrive at the element you clicked. The page is a tree, and the event travels through it in three phases. In **capture**, it travels down from the root to the target. At the **target**, it fires on the element itself. In **bubble**, it climbs back up through every ancestor. A normal handler listens during the bubble phase, so clicking a button inside a panel inside the page triggers the button's handler, then the panel's, then the page's.

This is handy. Instead of attaching a handler to each of a hundred chips in a list, you attach *one* handler to the list and look at `event.target` to see which chip was clicked. That is called **event delegation**.

@figure event-propagation A click on the button travels down the tree in the capture phase, fires at the target, and climbs back up in the bubble phase. A normal listener on `div.panel` hears the click on its way back up.

:::why One handler on the parent instead of many on the children
**What it is.** `list.addEventListener('click', ...)`, then checking `event.target.closest('li')`.

**Why it is done this way.** The children's events bubble up to the parent anyway.

**Why it matters.** One handler uses less memory than a hundred, and it keeps working for chips you add later. Handlers attached to individual chips would not exist on the new ones.

**What happens if you do not.** You forget to attach a handler to the new items, and some buttons do nothing.
:::

Two methods give you control. `event.stopPropagation()` stops the event climbing further. `event.preventDefault()` cancels the browser's default action (such as following a link).

#### Pointer events

Mouse, touch and pen used to need three sets of handlers. **Pointer events** (`pointerdown`, `pointermove`, `pointerup`, `pointercancel`) unify them. One handler serves a mouse, a finger and a stylus. A further call, `setPointerCapture`, tells the browser to keep sending the pointer's events to one element even if the pointer wanders outside it.

```
let dragging = false, lastX = 0;
canvas.addEventListener('pointerdown', e => {
    dragging = true; lastX = e.clientX; canvas.setPointerCapture(e.pointerId);
});
canvas.addEventListener('pointermove', e => {
    if (!dragging) return;
    azimuth += (e.clientX - lastX) * 0.01;      // turn the camera by the drag distance
    lastX = e.clientX;
});
canvas.addEventListener('pointerup', () => { dragging = false; });
```

:::why Capturing the pointer when a drag starts
**What it is.** Calling `canvas.setPointerCapture(e.pointerId)` inside `pointerdown`.

**Why it is done this way.** Without it, `pointermove` events only arrive while the pointer is over the element.

**Why it matters.** Drag fast and the cursor races ahead of the element. With capture, the element keeps receiving moves until you let go.

**What happens if you do not.** Dragging "sticks" as soon as the cursor leaves the element, and orbiting a 3D model feels broken. The viewers on this website use this exact pair of calls.
:::

## State

**State** is the data that, at any moment, completely describes what the page should show: which tab is selected, how far a slider has moved, whether a panel is open, how many seconds of an animation have passed. It is the page's memory.

The most common cause of bugs in interactive pages is state kept in *two places* that fall out of step. If one variable says the tab is "power" and the screen shows the "sound" tab because a class got left on the wrong element, the page is lying. The cure is to keep each fact **once**, and treat everything on screen as a *consequence* of it, never a second copy.

:::why One state object for the whole page
**What it is.** The robot page keeps its choices (which part is selected, whether the rubber bands are on, how far the robot is taken apart) in a single object. Every control changes a field. Every instrument reads from it.

**Why it is done this way.** Then there is only one place to look when something is wrong, and only one place to change.

**Why it matters.** The slider that takes the robot apart and the automatic tour that does the same thing both simply set one number, and everything else follows. Neither needs to know about the other.

**What happens if you do not.** The slider moves one copy and the tour moves another, they disagree, and the page flickers between two truths.
:::

## Rendering as a Function of State

This brings us to the idea that organises modern interface programming. Think of the screen as a function of the state:

**screen = render(state)**

Given the same state, you get the same screen. You do not write "when the tab changes, hide this and show that". You write "given the current tab, here is what the page looks like", and run it again whenever the state changes. The first style piles up special cases. The second has none, because the page simply *is* whatever the state says.

@figure state-render The loop every interactive page runs. Events change one fact in the state; the screen is redrawn from the state; the visitor sees it and acts again. Nothing on screen is a second copy of anything.

:::worked Deciding what is state
A panel shows one of three charts (speed, power, sound), chosen by three chip buttons, and has a "pause" button that freezes the animation. List the state, and say what is *not* state.

**Step 1. List the facts that can change.** Which chart is chosen: one of three values. Whether the animation is paused: true or false. How far the animation has run: a time in seconds. That is the whole state: `{ chart: 'speed', paused: false, t: 0 }`.

**Step 2. Find the impostors.** "Which chip has the highlighted class" is not state. It is a consequence of `chart`. "Whether the pause button says Pause or Resume" is not state; it follows from `paused`. "The pixels of the chart" are not state; they are drawn from `chart` and `t`. Each of these is something `render` works out.

**Step 3. Write the render.** `render(state)` sets the highlighted class on the chip whose `data-chart` matches `state.chart`, writes the button label from `state.paused`, and draws the chart named by `state.chart` at time `state.t`.

**Step 4. Check it.** Could the page ever show the power chart with the speed chip highlighted? Only if `render` has a bug, because both come from the same field. Before, with the class toggled by hand in three different click handlers, it was one forgotten line away.
:::

Part II shows how the React library automates this for a whole page. A canvas animation already does it in its purest form: every frame it clears the canvas and redraws everything from the current state, with no memory of the previous frame.

```
function frame() {
    draw(state);                    // the whole picture, from scratch
    requestAnimationFrame(frame);   // and again on the next frame
}
```

:::why Redrawing everything from scratch each frame
**What it is.** The canvas is cleared and the whole picture is rebuilt from `state` on every frame.

**Why it is done this way.** It sounds wasteful, but it removes a huge class of bugs: leftover pixels, half-erased shapes, "ghosts" of old frames.

**Why it matters.** The code is simple and the picture is always correct, because it depends only on the current state.

**What happens if you do not.** You have to track what changed and erase just that, which gets complicated fast.
:::

The next chapter takes up this loop.

:::summary
- JavaScript runs one thing at a time. The running code always finishes, then every microtask, then the next task, then (if it is time) a redraw.
- `setTimeout(fn, 0)` means "after the current work", never "now". Promise follow-ups run before any timer.
- A handler receives an event object with the details. Keep handlers small; do the heavy work once per frame.
- Events capture down and bubble up. One listener on a parent can serve every child, including children added later.
- Pointer events cover mouse, touch and pen. Capture the pointer when a drag starts.
- State is the set of facts the page needs. Keep each fact once and draw everything from it: screen = render(state).
:::
