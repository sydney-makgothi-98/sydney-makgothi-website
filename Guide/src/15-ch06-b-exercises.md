:::check
1. Why is `requestAnimationFrame` better than `setInterval` for animation?
2. What is delta time, and what problem does it solve? Why should it be clamped?
3. Write the linear interpolation formula and say what t = 0, 0.5 and 1 give.
4. What is special about the slope of smoothstep at the ends of its range?
5. What problem does exponential smoothing solve, and why is `x += (target - x) * 0.1` frame-rate dependent?
6. What does `prefers-reduced-motion` tell a page, and what should the page do about it?
:::

:::problems
1. An object moves at 240 pixels per second. How far does it move in one frame at 30, 60 and 120 hertz when written with delta time? How far does `x += 4` move it per second at each of those rates?
2. Compute smoothstep at t = 0.1, 0.5 and 0.9, and the position of an element travelling from 0 to 80 at each.
3. A value eases towards its target with k = 0.1 per frame at 60 Hz. What value of snappiness s gives this behaviour in continuous time? What is k per frame at 144 Hz for the same s?
4. A smoothed value starts 100 units from its target with s = 4 per second. How far is it from the target after 0.25 s, 0.5 s and 1 s?
5. A tour script has entries at 0, 7, 12, 16 and 19 seconds. The clock is currently at 14.3 seconds and a frame lasts 0.016 seconds. Which entries have fired, and which is next? How many frames until the next one fires, if the frame length stays constant?
6. Write the JavaScript that reads the reduced-motion preference and, if it is set, draws a single frame and does not start the animation loop. Explain why the instrument still responds to the visitor.
:::

:::answers
**Check Your Knowledge.**

1. It is synchronised with the screen's refresh, so frames arrive at the right moment; it pauses in hidden tabs; and it gives a timestamp. A timer's rhythm is unrelated to the display's, so frames arrive at uneven moments.
2. Delta time is the seconds since the previous frame. Moving by speed × Δt makes the motion independent of the frame rate. It is clamped so that a long pause, such as a hidden tab, does not produce a huge jump.
3. lerp(a, b, t) = a + (b − a)t. At t = 0 it gives a, at 0.5 the midpoint, at 1 it gives b.
4. The slope is zero at both ends, so the motion starts from rest and comes to rest smoothly.
5. It makes a value follow a changing target smoothly without a fixed duration. With a fixed k per frame, a faster screen has more frames per second and so closes the gap faster; the fraction must be computed as 1 − exp(−sΔt).
6. That the visitor wants less motion. The page should stop non-essential animation (loops, automatic motion, large movements) while leaving the content and controls fully usable.

**Review Problems.**

1. With delta time: 240/30 = 8 px, 240/60 = 4 px, 240/120 = 2 px per frame. With `x += 4`: 4 × 30 = 120 px/s, 4 × 60 = 240 px/s, 4 × 120 = 480 px/s. Only at 60 Hz does it match 240.
2. smoothstep(0.1) = 3(0.01) − 2(0.001) = 0.028, position 2.24. smoothstep(0.5) = 0.5, position 40. smoothstep(0.9) = 3(0.81) − 2(0.729) = 2.43 − 1.458 = 0.972, position 77.76.
3. k = 1 − e^{−s/60} = 0.1 gives e^{−s/60} = 0.9, so s/60 = −ln 0.9 = 0.10536 and s = 6.32 per second. At 144 Hz, k = 1 − e^{−6.32/144} = 1 − e^{−0.04390} = 1 − 0.9570 = 0.0430.
4. The remaining distance is 100 e^{−4t}. At 0.25 s: 100 e^{−1} = 36.8. At 0.5 s: 100 e^{−2} = 13.5. At 1 s: 100 e^{−4} = 1.83.
5. Entries at 0, 7 and 12 have fired; 14.3 is before 16, so the next is the one at 16 s. The time to wait is 16 − 14.3 = 1.7 s, which is 1.7 ÷ 0.016 = 106.25 frames, so it fires on the 107th frame.
6. Use `const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;` and then `if (reduce) drawOnce(); else requestAnimationFrame(frame);`. The controls still call the draw function when the visitor changes a value, so every interaction redraws the picture; only the unrequested animation is removed.
:::
