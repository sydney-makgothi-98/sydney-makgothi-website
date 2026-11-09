# The JavaScript: the Spiral Climb, Function by Function

The first instrument on the flight dynamics page is a 3D helix: an aircraft climbing in a steady turn. It is drawn on a 2D canvas, with the 3D done by hand. That makes it a perfect study in how little code a good instrument needs. We will read it in the order it runs.

## Making the Canvas Sharp

@code flight-dynamics.html 852-862

This is the `fit` function from Chapter 4, written out in full. **Line 853** reads the device pixel ratio; the `|| 1` is a fallback in case it is missing. **Line 854** reads the size the canvas is *shown* at. **Lines 855 to 857** resize the drawing surface only when needed. **Line 859** scales the context so that all later drawing is in CSS pixels. **Line 860** clears the old picture. **Line 861** returns the context and the size.

:::why Returning the context and size together
**What it is.** `return { ctx, w, h }`: three things in one object.

**Why it is done this way.** The caller always needs all three, and always right after calling `fit`.

**Why it matters.** The first line of every draw function is `const { ctx, w, h } = fitCanvas(canvas);`. The canvas is guaranteed to be the right size, and clear, before anything is drawn.

**What happens if you do not.** Every draw function repeats the size-and-clear code, and one of them forgets to clear, and leaves ghost images.
:::

## The Physics: Where the Numbers Come From

@code flight-dynamics.html 873-892

This is the whole physics of the spiral climb, and it fits in a few lines. **Line 876** reads the three sliders (airspeed, bank angle, rate of climb) in one go, using `map` over the input elements, and unary plus (`+i.value`) to turn text into numbers. **Line 877** converts the units: knots to metres per second, degrees to radians, feet per minute to metres per second.

**Line 878** is the turn rate: **ω = g tan φ / V**. It comes from resolving the lift vector. When the aircraft banks by φ, the horizontal part of lift is `L sin φ` and the vertical part is `L cos φ`. The vertical part must balance weight `W`, so `L = W / cos φ`, and the horizontal part is `W tan φ`. That is the sideways force that turns the aircraft, and dividing by mass and speed gives the turn rate.

**Line 879** is the turn radius, `V² / (g tan φ)`, and the division by `FT` converts it to feet for the display. **Line 880** is the time to climb: height divided by rate of climb, times 60 to convert minutes to seconds. **Line 881** is the number of turns: the angle swept (`omega * t`) divided by one full circle (2π).

**Lines 883 to 891** are the readouts: they write each number into the page, formatted with `toFixed` or `toLocaleString`.

:::why All the physics in one update function
**What it is.** A single function, `update`, recalculates every number from the three sliders.

**Why it is done this way.** Chapter 5's rule: *screen = render(state)*. The sliders are the state; the readouts and the picture are consequences.

**Why it matters.** The radius, turn rate, load factor and time are always consistent with each other, because they all come from one calculation, from the same three inputs, at the same moment.

**What happens if you do not.** If each readout were updated by its own slider handler, moving one slider could leave another readout stale, and the page would show numbers that disagree with the drawing.
:::

:::why Converting units at the edge
**What it is.** Line 877 turns knots, degrees and feet per minute into metres, radians and metres per second *immediately*.

**Why it is done this way.** The formulas are all in SI units. Everything inside is consistent, and only the display converts back.

**Why it matters.** A famous space probe was lost because one team used pounds-force and another used newtons. Mixed units hide inside formulas and give answers that are wrong but look reasonable.

**What happens if you do not.** You plug degrees into `Math.tan`, which wants radians, and get a turn radius that is nonsense. You would not see an error, only a helix that looks slightly wrong.
:::

## The Loop That Draws It

@code flight-dynamics.html 1019-1035

This is Chapter 6's animation loop. **Line 1020** computes the delta time and clamps it to 0.1 seconds. **Line 1022** rotates the camera slowly (`azim += dt * 0.12`) unless the visitor is dragging. **Lines 1023 and 1024** advance the climb (`frac` goes from 0 to 1) and, once it is complete, wait 2.5 seconds and start again. **Line 1025** draws the frame. **Line 1026** asks for the next frame, but only if the panel is visible.

**Lines 1030 to 1033** create an `IntersectionObserver` (Project 3). It watches the panel; when it scrolls into view, `visible` becomes true and the loop starts.

:::why The loop only runs while the panel is visible
**What it is.** `raf = visible ? requestAnimationFrame(tick) : null;` on line 1026.

**Why it is done this way.** A canvas that is scrolled off screen has nobody watching it.

**Why it matters.** The page may have a dozen animated instruments. Running only the visible one keeps the frame rate high and the laptop cool.

**What happens if you do not.** Every canvas animates all the time, the frame rate drops, and the fan starts up.
:::

:::why Clamping delta time to 0.1 seconds
**What it is.** `Math.min((now - last) / 1000, 0.1)`.

**Why it is done this way.** If the tab was in the background for a minute, the next `now - last` would be 60 seconds.

**Why it matters.** The helix does not jump a whole minute forward the moment you return.

**What happens if you do not.** Switch tabs and come back, and the aircraft instantly teleports.
:::

# The Stability Model, Function by Function

Behind the second half of the flight dynamics page sits a small engine of numerical code, `core.js`. It does four jobs: it builds the aircraft's equations from physical numbers, finds their characteristic polynomial, finds the polynomial's roots, and builds the Routh array. None of it knows anything about the page. It is plain maths, and that is deliberate.

## Building the Equations

@code Syd Website Assets/Flight Dynamics Page/core.js 7-23

The function `model(M, Kn)` takes a Mach number and a static margin and returns the aircraft's stability matrix. **Line 8** works out the speed (`V = M × a`, where `a` is the speed of sound), the dynamic pressure `q = ½ ρ V²`, and the weight. **Line 9** finds the lift coefficient needed to hold the aircraft up, `CL = W / (q S)`, then the drag coefficient from a parabolic drag polar. **Line 10** is a common factor, `ρ V S / m`, which appears in several derivatives.

**Lines 11 to 19** are the **dimensional stability derivatives**, written from the formulas in section 05 of the flight dynamics page: `Xu = −f CD`, `Zw = −½ f (CLα + CD)` and so on. **Line 15** is the one the static margin controls: `Mw` contains `−Kn × CLα`, which is exactly "`Cmα = −a Kn`" from the page's derivation. **Lines 20 and 21** assemble the state matrix `A` and the input vector `B`.

:::why model() takes Mach and Kn and nothing else
**What it is.** The function's only inputs are the two numbers a visitor can change on the page. Everything else (weight, wing area, inertia) is a fixed constant in the `AC` object above it.

**Why it is done this way.** The two sliders are the only things the page varies.

**Why it matters.** The function is a pure function (Chapter 11): same Mach and margin in, same matrix out. You can test it in the browser Console with `model(0.35, 0.14)` and check the numbers against a hand calculation.

**What happens if you do not.** If the model read values from page elements directly, you could not test it without the page, and you could not reuse it for a different panel.
:::

## The Characteristic Polynomial

@code Syd Website Assets/Flight Dynamics Page/core.js 32-40

The characteristic polynomial `det(sI − A)` has the system's poles as its roots. Computing a determinant of a matrix with the unknown `s` in it is awkward. The **Faddeev-LeVerrier algorithm** does it with nothing but matrix multiplication and traces. Each pass of the loop on **line 34** produces the next coefficient: **line 35** builds a matrix from the previous one, **line 36** takes the trace of `A` times it, and **line 37** divides by `k` to get the coefficient. The matrices it builds along the way (`Ms`) are saved too, because they also give the transfer function's numerator.

:::why An algorithm that needs only multiplication and traces
**What it is.** A way to get the polynomial's coefficients using only matrix multiplication, addition and trace.

**Why it is done this way.** The alternatives are symbolic algebra, which needs a big library, or expanding a determinant by hand, which gets unmanageable for a 4 by 4 matrix and worse for the 6 by 6 closed-loop matrix.

**Why it matters.** It is about ten lines, it works for any size, and it never divides by a number that could be zero (apart from the small integer `k`).

**What happens if you do not.** You would have to load a maths library of hundreds of kilobytes for what is, here, a single small step, or write a symbolic determinant for each system size.
:::

## The Routh Array

@code Syd Website Assets/Flight Dynamics Page/core.js 64-76

**Line 65** works out the array's shape. **Line 66** fills the first two rows with the polynomial's coefficients, alternately (even positions in one row, odd in the other). **Lines 68 to 73** compute every later row from the two rows above, using the Routh formula from the page. **Line 69** picks out the pivot, and **line 70** handles the awkward case where the pivot is zero, by replacing it with a tiny number (`1e-9`) and marking the row, which the page displays as ε. **Line 74** counts the sign changes in the first column, the number of right-half-plane poles.

:::why Replacing a zero pivot with a tiny number
**What it is.** If a first-column entry is exactly zero, the formula would divide by zero. The code uses `1e-9` instead and flags it.

**Why it is done this way.** This is the standard textbook remedy (the "epsilon method").

**Why it matters.** The array can be completed, and the sign changes can still be counted, instead of the whole calculation breaking.

**What happens if you do not.** The code produces `Infinity` or `NaN`, which then spreads through every following row, and the page shows nonsense with no error message.
:::

:::warning
Floating-point numbers are not exact (Chapter 11). A value that "should" be zero often comes out as `1.2e-17`. That is why the test on line 70 is `Math.abs(piv) < 1e-12` and not `piv === 0`. Comparing floating-point numbers with `===` is almost always a bug.
:::

# The Panels: How the Page Fits Together

The instruments on the page are drawn by `ui.js`, which is bundled with `core.js` into the file `stability.js` that the HTML loads. Two ideas hold it together.

## One Shared State and a List of Subscribers

@code Syd Website Assets/Flight Dynamics Page/ui.js 88-100

**Line 88** is the page's state: the Mach number, the static margin, the PID gains, and whether the PID is on. **Line 89** declares the results (the model, the characteristic polynomial, the poles, the modes). **Line 90** is an empty list called `subs`. Every panel that cares about the shared numbers adds a function to it. **Line 91** recomputes the results from the state. **Line 94** is the key one: `changed()` recomputes, then calls every function in `subs`. **Line 95 onwards** connects three static-margin sliders in three different panels, so moving any one moves all three.

:::why A list of subscriber functions
**What it is.** Each panel registers a "redraw me" function in `subs`. When something changes, all are called.

**Why it is done this way.** The panels are independent, and none should know about the others. The static margin slider in the static stability panel should also move the pole map in a different section.

**Why it matters.** Adding a ninth panel means adding one function to `subs`. No existing panel changes.

**What happens if you do not.** Each slider has to call every panel by name, and every new panel means editing every slider's code.
:::

## Drawing Only When Visible

@code Syd Website Assets/Flight Dynamics Page/ui.js 61-70

`runWhenVisible` is a small reusable piece of Chapter 6: it takes an element, a function to call every frame, and a function that draws a single still frame. It starts the loop when the element scrolls into view (lines 64 to 68). If the visitor has asked for reduced motion (line 67), it draws one still frame and does not animate. It hands back a `redraw` function (line 69) that the sliders call, which draws a fresh still frame only when no loop is running.

:::why Passing in a "still" function
**What it is.** Each panel supplies two functions: an animated one and a one-shot one.

**Why it is done this way.** When motion is switched off, the controls must still work.

**Why it matters.** A visitor who asked for no animation can still move a slider and see the chart update.

**What happens if you do not.** With reduced motion on, the instruments freeze and appear broken, which punishes exactly the people who asked for gentleness.
:::
