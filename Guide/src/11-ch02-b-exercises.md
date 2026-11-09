:::check
1. Name the stages of the critical rendering path in order, from received bytes to pixels on the screen.
2. What is the difference between the DOM and the render tree? Give an example of an element that is in one and not the other.
3. Why do stylesheets block rendering while images usually do not?
4. Explain the difference between `async` and `defer`.
5. Why is animating `transform` cheaper than animating `left`?
6. What is a long task, and what does it do to the page?
:::

:::problems
1. Compute the frame budget in milliseconds at 30, 60, 90 and 120 hertz.
2. A script takes 22 ms per frame to redraw a chart, and the browser needs 4 ms for its own work. At what refresh rates does the page keep up? What is the highest rate at which it does?
3. A page loads three external scripts without `async` or `defer`. They take 120 ms, 80 ms and 200 ms to fetch and 10 ms, 5 ms and 30 ms to run. If fetches cannot overlap with parsing, how long is parsing blocked in total? If all three are marked `defer` and the fetches run in parallel, how long is parsing blocked by them?
4. The loop in the layout-thrashing example runs over 500 boxes, and each forced layout takes 0.12 ms. Estimate the time lost, and the time if reads and writes are grouped and a single layout is needed taking 0.12 ms.
5. For each of these changes, say whether the browser must repeat layout, paint, or only composite: (a) changing `width`, (b) changing `color`, (c) changing `transform: translateX()` on an element with its own layer, (d) changing `opacity` on the same element.
6. Open the Performance panel on any page of this website, record five seconds while the page animates, and identify the longest task. Report its duration and what the main thread was doing during it.
:::

:::answers
**Check Your Knowledge.**

1. Parse HTML into the DOM, parse CSS into the CSSOM, combine them into the render tree, layout, paint, composite.
2. The DOM holds every node of the document. The render tree holds only the nodes that will be drawn, with their computed styles. An element with `display: none` is in the DOM but not in the render tree.
3. Drawing before the styles are known would show the page unstyled and then re-arrange it. Images can be drawn into a box whose size is already known and filled in when they arrive, so the page need not wait.
4. Both fetch the script while the parser continues. An `async` script runs as soon as it arrives, in no guaranteed order. A `defer` script runs after the document has been parsed, and deferred scripts run in the order they appear.
5. `transform` on an element with its own layer can be applied during compositing and needs no layout or paint. `left` changes geometry and forces layout, then paint, then composite.
6. A long task is a stretch of main-thread work longer than about 50 ms. While it runs the page cannot respond to input, scroll or animate smoothly.

**Review Problems.**

1. 1000/30 = 33.33 ms; 1000/60 = 16.67 ms; 1000/90 = 11.11 ms; 1000/120 = 8.33 ms.
2. The code plus the browser takes 22 + 4 = 26 ms. The budget must be at least 26 ms, so the rate must be at most 1000/26 = 38.5 Hz. The page keeps up at 30 Hz and not at 60, 90 or 120 Hz. The highest rate is about 38 Hz.
3. Blocked in total: (120 + 10) + (80 + 5) + (200 + 30) = 130 + 85 + 230 = 445 ms. With `defer` and parallel fetches, parsing is not blocked by the fetches at all, and the scripts run after parsing, so the blocking is 0 ms (the scripts then run for 10 + 5 + 30 = 45 ms after parsing, in order).
4. 500 × 0.12 = 60 ms lost. Grouped: 0.12 ms, a saving of 59.88 ms, about 500 times faster.
5. (a) Layout, then paint, then composite. (b) Paint and composite, no layout. (c) Composite only. (d) Composite only.
6. The answer depends on the page. A typical longest task is a script start-up or a chart redraw; the aim is to see it for yourself on the timeline.
:::
