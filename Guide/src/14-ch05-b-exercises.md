:::check
1. Why is JavaScript's being single-threaded both an advantage and a limitation?
2. State, in order, the four steps the event loop repeats.
3. What is the difference between the task queue and the microtask queue, and which has priority?
4. Describe the three phases of event propagation, and say in which phase a normal handler runs.
5. What is event delegation, and why does it keep working when elements are added later?
6. What does `setPointerCapture` do, and why is it useful when dragging?
7. Why is it a bug to hold the same fact in two places in a page's state?
:::

:::problems
1. Predict the output of the following and explain each step.

```
console.log(1);
setTimeout(() => console.log(2), 0);
Promise.resolve().then(() => console.log(3)).then(() => console.log(4));
setTimeout(() => console.log(5), 0);
console.log(6);
```

2. A click handler contains a loop that takes 300 milliseconds. A visitor clicks, and 100 ms later clicks a second button. When does the second button's handler run? Why?
3. A list contains 200 `<li>` elements. Compare the number of handlers needed to react to a click on any of them with and without event delegation. Write the delegating handler.
4. A page has a `<div class="outer"><button class="inner"></button></div>`. Both have click handlers that print their class name. In what order do they print on a click of the button? Add one line to the inner handler that makes the outer handler never print.
5. A page has three tabs and a panel for each. The first version stores the selected tab as a class on the tab button *and* as a class on the panel. Describe a sequence of events that could leave the page in an inconsistent state, and redesign it to hold the selection once.
6. A drag handler registered on `pointermove` at the element (without pointer capture) is used on a slider. The user drags quickly to the right and the cursor leaves the element. What goes wrong, and how is it fixed?
:::

:::answers
**Check Your Knowledge.**

1. Advantage: only one piece of your code runs at a time, so two functions cannot change the same data simultaneously. Limitation: a long-running function blocks everything else, including input and drawing.
2. Run the oldest task to completion; run all microtasks until the queue is empty; let the browser render if it is time; repeat.
3. The task queue holds callbacks such as events and timers; the microtask queue holds follow-up work such as promise continuations. Microtasks have priority: all of them run before the next task.
4. Capture (root down to the target), target (the element itself), bubble (target back up to the root). A normal handler runs in the bubble phase.
5. Attaching one handler to a parent and examining `event.target` to see which child was clicked. It still works for later children because their events bubble up through the same parent.
6. It keeps delivering the pointer's events to one element even when the pointer leaves it, so a drag is not dropped when the cursor moves faster than the element.
7. The two copies can fall out of step, so the page shows something that contradicts its own state. Hold each fact once and derive everything else from it.

**Review Problems.**

1. Output: 1, 6, 3, 4, 2, 5. The script runs first (1, then 6). Then all microtasks run: 3 prints, and its follow-on 4 is queued as a microtask and runs before any task. Then the first timer task prints 2, then the second prints 5.
2. The second handler runs after the loop finishes, at about 300 ms after the first click, 200 ms after the second click. The loop occupies the main thread, so the second click's task waits in the queue; input cannot interrupt a running task.
3. Without delegation: 200 handlers. With delegation: 1. `list.addEventListener('click', e => { const li = e.target.closest('li'); if (li) handle(li); });`
4. Inner prints first, then outer, because the event bubbles. Adding `event.stopPropagation()` in the inner handler stops the outer from running.
5. For example, if a script adds the class to the button but an error prevents it from updating the panel, the two disagree. The redesign keeps a single variable `selected` and a function that, from that variable alone, sets the classes of all tabs and panels (or a single attribute on the container, with CSS selecting the matching panel).
6. The pointer leaves the element, so `pointermove` events stop arriving and the slider stops following the pointer; the drag appears to stick. Calling `setPointerCapture(e.pointerId)` on `pointerdown` makes the element keep receiving events until the button is released.
:::
