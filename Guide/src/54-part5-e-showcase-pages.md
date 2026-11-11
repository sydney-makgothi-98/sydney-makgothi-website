# The Showcase Pages: Four Ideas You Can Steal

:::objectives
- Lay a page out as cover, article, stage, article, and give the cover a video that fails gracefully.
- Cut a 3D building in half with a clipping plane, and explain why the inside needs a second, darker skin.
- Track down the three different causes of "strobing" in a 3D scene, and fix each one.
- Turn a page of coloured charts into black ink on white paper without rewriting the charts.
- Build a small fluid simulator, and make a jet go from smooth to turbulent by changing one number.
:::

Since the first pages of this site were built, a second wave arrived: aeroelasticity, energy methods, the parachute for the jet truck, and two senior projects. They were built one at a time, in conversation, and each one taught something that was not in the plan. This chapter collects four of those lessons. They are written as lessons, not as a tour of files, because the files will change and the ideas will not.

Everything here is in the repository, so you can open the real file next to this page. Where a result is printed, it came from running the code.

## The Layout: Cover, Article, Stage, Article

The oldest pages put the interactive stage first, with a wall of controls, and the writing underneath. The newer pages start with a **cover**: a full-screen video with a title laid over it. Below the cover is the first half of the article. Then the interactive stage, and then the second half. The stage becomes a pause in the middle of the reading, not a wall you must climb over before the reading begins.

The cover is a `<header>` with a `<video>` inside it, and a second element, the **placeholder**, sitting behind it:

```
<header class="cover" id="cover">
  <video autoplay muted loop playsinline preload="auto" aria-hidden="true">
    <source src="./Shockwave%20Jet%20Truck/Shockwave.mp4" type="video/mp4">
  </video>
  <div class="ph">Cover video goes here: Shockwave Jet Truck/Shockwave.mp4</div>
  ...
</header>
```

Three attributes carry the whole idea. `autoplay` starts the video, but browsers only allow that if the video is `muted`, which is why both are there. `playsinline` stops phones from throwing the video into full screen. `loop` keeps it going. A small script listens for the `error` event on the video and its `<source>`, and when the file is missing it adds the class `missing` to the header, which hides the broken video and shows the striped placeholder with the file name written on it.

:::why A placeholder that names the missing file
**What it is.** A striped panel behind the video that says exactly which file belongs there.

**Why it is done this way.** The pages were written before the videos existed. A page with a blank black hole teaches nobody anything. A page that says "Cover video goes here: this exact path" tells the person adding the video what to do, with no guesswork.

**Why it matters.** The page can be built, reviewed and published in stages. It also fails politely: if a video is deleted by accident, visitors see a clearly intentional panel, not a broken-image icon.

**What happens if you do not.** A missing file shows a blank rectangle, the layout still reserves the space, and nobody can tell whether the gap is a bug or a plan.
:::

## Cutting a Building in Half

The energy methods page shows the Burj Khalifa: 828 metres, 163 floors, a Y-shaped plan of three wings around a hexagonal core, each wing stepping back as it climbs. You can cut it open down the middle, take it apart in bands, and zoom into one floor that bends on its springs. Three ideas make that work.

### One solid at a time, split at the band lines

The tower is not one model. It is about a hundred simple solids: a hexagonal prism for each step of the core, a box and a cylinder for each step of each wing, a thin gold ring at each set-back, and four cones for the spire. A function, `solid`, takes the solid's shape and its bottom and top heights, and **splits it wherever it crosses a band line**, so that each band can slide away on its own.

@code Syd Website Assets/Showcase/models/building.js 71-75

The line `for (const b of BANDS)` is the trick. A wing step that runs from 120 m to 180 m crosses the line at 150 m, so it is made twice, once for the lower band and once for the middle one, and each piece goes into its own group. When you press Disassemble, the groups move. Nothing is cut at run time; the cutting was done when the model was built.

### The cutaway is one plane

The cut down the middle is a **clipping plane**. Three.js lets every material carry a list of planes, and it simply refuses to draw anything on the wrong side of them. All the materials share one plane object, so moving the plane moves the cut everywhere:

@code Syd Website Assets/Showcase/models/building.js 136-136

`clip.constant` is how far the plane sits from the middle. At `1e4` it is miles away and nothing is cut. At `62 * (1 - ce)` it sweeps in from 62 m to the middle as the button is pressed, which looks like a slicing blade. The number 62 is just a little more than the tower's half-width.

:::why A second, darker skin for the inside
**What it is.** Every wall is drawn twice from the same geometry: once as the bright glass facade (front faces), and once as a dark navy surface that only shows when you look at the back of the wall (`BackSide`).

**Why it is done this way.** A clipped wall is hollow: there is no inside, only the back of the wall. With only one skin you would see the back of the glass texture, which looks like a ghost of the outside. The dark skin makes the inside look like an inside.

**Why it matters.** The cut face reads as a section through a real building, with floor plates visible against a dark interior.

**What happens if you do not.** The cutaway looks like a transparent shell with a pattern printed on the wrong side.
:::

### Three kinds of strobing

When the user first zoomed into the floor, the neighbouring floors flickered. It looked like one bug. It was three, and each had a different fix:

1. **Two surfaces on exactly the same plane.** Floor plates from two overlapping solids both sat at the same height, so the graphics card could not decide which was in front and chose differently every frame. The cure is to never let two surfaces share a plane: each solid's roof sits a few centimetres below the next one's (`low = pid * 0.1`), and its floor plates are offset by a few more.
2. **A face that faces the wrong way, fighting its neighbour.** The bottom cap of an upper step sits exactly on the top cap of the step below. The lower cap is a front face; the upper one is a *back* face seen from above, and the dark inner skin from the previous section was drawing it, in the same place. The cure is to **leave the bottom caps out**. Nobody ever sees them.
3. **A texture where there should be none.** Even after fixing the first two, a hatched pattern remained on the flat roofs. It was not a depth fight at all: the glass texture, with its mullions and its dark band at the floor edge, was being stretched across the roofs and shimmering as the camera moved. The cure is to give the roof its own plain material. Three.js allows this by giving a geometry **groups**, so that the walls use material 0 and the cap uses material 1.

:::tip How the third one was found
Guessing took two attempts. What worked was **removing things**: hide all the floor plates and take a picture, then hide the glass and take another. The hatching stayed with the glass, so it was a glass problem. Whenever a 3D scene shows something strange, switch parts off one group at a time until the strangeness disappears.
:::

:::warning The near plane is part of the problem
A depth buffer has a limited number of steps between the nearest and farthest thing it can see. The page sets the camera's near plane to `max(0.5, distance * 0.15)`, so that when the camera is far from the tower the steps are not wasted on the first few metres of empty air. A near plane of 0.05 with a far plane of 9,000 gives so few steps at distance that two surfaces 10 cm apart can still fight.
:::

## Ink on Paper

The two senior-project pages are magazine articles: black type on white paper, a white-on-black opening spread, two justified columns with a rule between them, a drop cap, pull quotes, and charts. "Purely black and white" is a strong constraint, and it forced a good decision: the charts were not rewritten.

The chart code from the dark pages draws everything in a palette called `COL`, and its gridlines and axes in colours that look right on a dark background. A function, `paper()`, swaps both over in one step:

@code Syd Website Assets/Showcase/chart.js 4-8

After `paper()`, the same drawing code produces black axes, light grey gridlines and series in different greys. A line that was cyan is now dark grey; one that was pink is medium grey. Series that had to be told apart by colour are now told apart by **stroke**: some solid, some dashed, some dotted, the important one heavier.

:::why One switch for the palette, not a copy of the chart code
**What it is.** A shared object of colours that the chart functions read each time they draw, and a function that rewrites the object.

**Why it is done this way.** The chart code is 50 lines and has been checked. A black-and-white copy would be a second 50 lines to keep right, and the two would drift apart the first time someone fixed a bug in one.

**Why it matters.** Both kinds of page now use exactly the same axis, tick and label code. A fix to one is a fix to both.

**What happens if you do not.** You have two chart files. In six months one of them has a bug the other one fixed.
:::

The article text itself was rewritten in the voice of an article, not of documentation, but every figure and number from the earlier version was kept. A figure that is derived (an arrow mass computed from an energy and a speed, a force curve read off a plot) says so in its caption. A magazine page looks authoritative, so it has a duty to be careful about what it is claiming.

## A Fluid You Can Run in Your Head

The jet truck page has an animation of an engine starting. The first version painted the gas as coloured columns, and it looked rigid, because it *was* rigid: nothing in it could swirl. The second version runs a real fluid simulation, using the method called **stable fluids**: a gas on a grid, whose velocity is moved, smoothed and corrected every sixtieth of a second. Each frame does these steps, in this order:

1. **Force it.** Push the gas along where the compressor and turbine are, heat it where the flame is, and let it go free beyond the nozzle.
2. **Add viscosity.** Smooth each cell's velocity towards its neighbours' average. Thick gas does this a lot; thin gas hardly at all.
3. **Advect.** Move the velocity along itself: to find a cell's new velocity, look *backwards* along its own velocity to where the gas came from, and copy the value found there. This is the "semi-Lagrangian" trick, and it never blows up, which is why the method is called stable.
4. **Project.** Real gas at these speeds cannot be squeezed, so the velocity must have **no divergence**: whatever flows into a cell must flow out. The step solves for a pressure that fixes it, then subtracts the pressure's push from the velocity.
5. **Advect the colour** (the temperature) along the corrected velocity.

The page's version is in `parachute/jet.js`. This excerpt holds three of its lines of reasoning: how strongly eddies are kept alive (`eps`, which grows with the square of the speed), the measurement of sideways motion that the flow markers use, and the viscosity (`nu`), which falls as the speed rises:

@code Syd Website Assets/Showcase/parachute/jet.js 102-108

A smaller program with the same five steps lives in the book's code folder, so you can run it in two seconds and see the claims checked:

@code Guide/code/js/s18_stable_fluids.js 37-47

Running it prints:

```
rms divergence of a compressible test field: 0.2725 -> 0.0134 (95% removed)
slow jet, thick gas : sideways motion / speed = 0.0031
fast jet, thin gas  : sideways motion / speed = 0.0644
the fast jet is 21.0 times as sideways-busy as the slow one
```

The first line is the projection doing its job: on a field that deliberately compresses, it removes 95 percent of the divergence. The next three lines are the laminar and turbulent behaviour, in numbers.

### Laminar to turbulent: one number, the speed

A smooth ("laminar") jet and a churning ("turbulent") one are the same fluid. What decides which you get is the **Reynolds number**, which in words is "how strong the push of the flow is compared with the stickiness of the gas". Slow, sticky gas has a low Reynolds number and stays smooth, because every ripple is damped before it grows. Fast, thin gas has a high Reynolds number and the ripples are free to grow into eddies and roll up into puffs.

On the page the engine's rotor speed sets the jet's speed, and the speed sets the viscosity with one line: `nu = 0.01 + 0.22 * (1 - speed)^1.6`. At idle the gas is "thick" and the jet leaves the nozzle smooth. At full power it is "thin", and a smooth core leaves the nozzle, grows ripples a short way downstream (**transition**), and breaks into puffs (**turbulent**). Press nothing: it happens by itself.

The small program tries the combinations, and the results are worth reading slowly, because they show that *both* things matter:

| Jet speed (cells per step) | Viscosity | Sideways motion / speed |
|---|---|---|
| 0.15 | 0.20 | 0.0031 |
| 0.15 | 0.01 | 0.0043 |
| 0.60 | 0.20 | 0.0112 |
| 0.60 | 0.05 | 0.0266 |
| 0.60 | 0.01 | 0.0644 |

Thin gas alone (row 2) barely helps if the jet is slow. Fast speed alone (row 3) helps a little. Only the two together (row 5) give the 21-fold jump.

:::why Reading the jet's regime from the simulation
**What it is.** The page shows three coloured bands along the jet: LAMINAR, TRANSITION, TURBULENT. Their boundaries are measured from the simulated gas: the mean sideways speed, in the core of the jet at each distance from the nozzle, divided by the jet speed. Above 0.14 the band changes to transition, above 0.30 to turbulent.

**Why it is done this way.** The alternative was to write the boundaries by hand from a formula and draw them on the picture. They would look right until the picture and the markers disagreed, and then the page would be quietly lying.

**Why it matters.** The markers move when the speed changes, because they are measurements. At idle there are no markers beyond LAMINAR, because the jet is smooth all the way.

**What happens if you do not.** The labels become decoration.
:::

:::technical Technical Stuff: what this simulation is not
It is two-dimensional, so it cannot show the way real eddies stretch and break into smaller ones. It is incompressible, so it has no shock waves. Heating is not computed from burning fuel: it is imposed as a target temperature in the combustor. The viscosity is an eddy-viscosity stand-in, not the air's real viscosity. The page says all this next to the animation, because the whole point of a teaching model is to be honest about where it stops teaching.
:::

## Telling the Truth on a Page That Looks Finished

These pages have a lot of numbers and some of them are not measurements. A short rule kept the book and the site honest:

- A number is **reported** if it came from a source document. Say which.
- A number is **derived** if it was computed from reported ones. Say how.
- A number is **illustrative** if it was chosen to show a behaviour. Say that it is, on the page, in the sentence next to it.

The jet truck page does this in a paragraph headed "What is and is not real here". The energy methods page does it when it says the plan dimensions of the tower were estimated from photographs and the floor values are a representative office floor. A reader should never have to guess which kind of number they are looking at.

## Try It Yourself

:::problems
1. Open `s18_stable_fluids.js` and change the fast jet's viscosity from 0.01 to 0.20. What happens to the sideways-motion ratio, and what does that tell you?
2. Keep the viscosity at 0.01 but slow the "fast" jet to 0.15. Does thin gas alone make a smooth jet turbulent?
3. In the building model, why does each solid get a different `pid`? What would the page look like if every `pid` were 0?
4. The cutaway plane starts at `1e4`. What would happen if it started at 0 instead, and the button moved it outwards?
5. You are asked for a black-and-white version of an existing coloured chart. List the two things you would change and the one thing you would refuse to change.
6. A page shows a number you derived from two reported ones. Write the caption sentence that makes that clear.
:::

:::answers
**Chapter 43, Try It Yourself.**

1. The ratio falls from 0.0644 to 0.0112, about a fifth. Thick gas damps the ripples; speed alone is not enough to make the jet turbulent.
2. No. The ratio is only 0.0043 against 0.0031 for the thick-gas slow jet, so thin gas alone barely changes a slow jet. Speed and thin gas have to come together.
3. The `pid` offsets each solid's roof and floor plates by a few centimetres. With every `pid` at 0, overlapping solids would put their roofs and plates on exactly the same plane, and they would flicker against each other as the camera moved.
4. The plane would start at the middle, so the building would be cut from the first frame; moving it outwards would then close the cut from the far side instead of opening it, and the "slicing" effect would run backwards.
5. Change the palette (greys instead of colours) and the grid and axis colours (dark on light). Refuse to change the drawing code that computes the points: it is correct, and a second copy would drift.
6. For example: "The arrow mass is derived here from the report's kinetic energy and speed (m = 2E/v squared), not given in the report."
:::

:::quiz The showcase pages
1. Why must a cover video be muted if it is to autoplay?
2. What does a clipping plane do, and why does a clipped wall need a second skin?
3. Name the three kinds of strobing found on the tower, in one phrase each.
4. Which two things make a jet go from laminar to turbulent in the engine animation?
5. What did the black-and-white pages reuse, and why?
:::

:::answers
**The showcase pages: quiz.**

1. Browsers block autoplay with sound, so that pages cannot shout at visitors; a muted video is allowed to start by itself.
2. It stops the graphics card drawing anything on one side of a plane, giving a cut. A clipped wall is hollow, so it shows its own back; the second, darker skin makes that back look like a believable inside.
3. Two surfaces on one plane, a back face fighting a front face on the same plane, and a stretched texture on a surface that should be plain.
4. A higher speed and a thinner gas (a lower viscosity), which together mean a higher Reynolds number.
5. The chart-drawing code. Only the palette object was swapped, so a fix to a chart fixes both kinds of page.
:::
