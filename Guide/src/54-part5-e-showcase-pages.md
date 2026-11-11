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

@code Syd Website Assets/Showcase/parachute/jet.js 103-108

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

## One Grid, Two Rows: The Simulation Above the Real Thing

The most useful way to check a simulation is to put it next to the real thing. On the jet truck page the simulation is on top and the footage of the engines is directly beneath it, separated by a solid line. They are two elements, a `<canvas>` and a `<video>`, and they live in **one CSS grid with two rows**:

@code parachute.html 22-23

Read the first rule. `grid-template-columns: 100%` makes one column as wide as the container, and `grid-template-rows: auto auto` makes two rows, each as tall as its contents. The canvas is the first child, so it sits in row 1; the video is the second, so it sits in row 2. Each has the same `aspect-ratio`, so the two halves are exactly the same size and a feature on one can be compared by eye with the same place on the other. The solid line is a `border-top` on the second row.

:::why One grid container, not two separate cards
**What it is.** The simulation and the footage are children of one container that lays them out in rows.

**Why it is done this way.** A comparison is one object, not two. With one container they share a width, a rounded outline and a background, and they can never end up different sizes because someone changed one card's padding.

**Why it matters.** The two halves line up at every window width, on a phone as well as a monitor, with no JavaScript measuring anything.

**What happens if you do not.** Two cards with separate rules drift: one becomes wider, one gets an extra margin, and the comparison stops being fair.
:::

:::tip An overlay was tried and thrown away
The first version put both children in the **same** cell (`grid-area: 1 / 1`), so the simulation lay on top of the video. That is a legitimate use of a grid (a grid does not forbid two items sharing a cell; it stacks them in page order), but for this page it was the wrong picture: the real flame showed through the simulated gas and the eye could not tell which was which. Stacking one above the other, with a line between, is easier to read. The lesson is to try the layout before committing to it, and to be ready to change it.
:::

### Making the two agree in time

An overlay is worthless if the two disagree about when things happen. The start-up schedule in `jet.js` was first written to take 32 seconds. The footage reaches its moment of full thrust at 12. The fix is not to rewrite the schedule but to **stretch time**: every function that reads the schedule is given `t / TW`, where `TW = 12 / 32`, so that "32 seconds of the schedule" becomes "12 seconds of the clock". Change `T_FULL` and the whole sequence, including the captions, the ignition flash and the timeline mark, slides to match.

The script also makes the two restart together. One cycle of the card lasts as long as the video does; when the cycle ends the video is rewound and replayed in the same instant that the simulation resets, and if the video drifts more than 0.4 seconds from the card's clock it is nudged back.

:::warning Check the footage before you build on a number
The page was first built on the statement that the clip was 12 seconds long. The file was 14.9 seconds, and its opening frames show a truck already at full power, so it is an edited montage and not a single start from rest. Nothing in the code was wrong, but a side-by-side comparison of a start-up needs footage that begins at the start. Measure the file (a video's length is in the `duration` property once its metadata has loaded) before you promise an alignment.
:::

### Fitting the comparison on one screen

A comparison that has to be scrolled is a comparison that cannot be seen. Two cards, each 1000 by 660 units, stacked, are taller than most laptop screens, so the container's **width** is chosen from the window's **height**: `width: min(100%, max(320px, calc((100svh - 200px) / 1.2225)))`. The number 1.2225 is the height of the pair divided by its width (the card is 0.66 as tall as it is wide, the 16:9 footage is 0.5625, and 0.66 + 0.5625 = 1.2225), and the 200 pixels leave room for the page's own bar and the panel's heading. The result is the widest comparison that is still no taller than the window. `svh` means the "small" viewport height, which ignores a phone's collapsing address bar, so the card does not jump as you scroll.

## Coming Back to Where You Were

A visitor chooses Propulsion on the selection screen, then Combustion Analysis, reads the page, and presses "Back to Portfolio". They expect to land on the selection screen with Propulsion still open. A plain link to `portfolio.html` throws them to the top of the home page instead, a thousand pixels from where they were.

Two small pieces of the page fix it. Every sub page links back with a **fragment**, `portfolio.html#expertise-wheel`, which tells the browser to scroll to the element with that id (the selection section). And the portfolio remembers the choice, because the click that opens a sub page first writes the category's number into **session storage**, a small notebook the browser keeps for one tab:

@code portfolio.html 1202-1214

On load, if the address ends in `#expertise-wheel`, the script reads the notebook, opens that category and scrolls the section into view. Both calls are wrapped in `try`: a private window may refuse to let a page write to storage, and the page must still work. It does, it just opens the first category.

:::why A fragment and session storage, not a back button
**What it is.** A link that names a place on the page (`#expertise-wheel`) and a one-line note, saved when you leave, of which category you had open.

**Why it is done this way.** The browser's own Back button would also work, but only if the visitor arrived by clicking; a bookmark, a shared link, or a new tab would have nowhere to go back to. A link to a named place works from every route. The note is kept in session storage, not a cookie, because it is only wanted for this visit and should vanish when the tab closes.

**Why it matters.** Every sub page shares the rule, so a visitor can explore several sub pages in a row and always return to the same place.

**What happens if you do not.** Each return is a long scroll back down through the introduction and the image sequence.
:::

## Pictures in Black and White

The magazine pages first had only charts drawn in code. Later the author supplied photographs, drawings and scanned tables for the research and design articles, most of them in colour. "Purely black and white" applies to pictures too, so each was converted once, with a few lines of Python and the Pillow library, and the converted copies live in a `bw/` folder beside the originals:

```
im = Image.open(src).convert('RGBA')                      # keep any transparency
white = Image.new('RGBA', im.size, (255, 255, 255, 255))
white.alpha_composite(im)                                  # put it on white paper first
gray = white.convert('L')                                  # then drop the colour
gray.thumbnail((1600, 99999))                              # and cap the width
```

:::why Convert the files, and keep the originals
**What it is.** Greyscale copies, saved at a sensible size, that the pages load instead of the originals.

**Why it is done this way.** A CSS `filter: grayscale(1)` would also work, and the page keeps it as a safety net, but it makes every visitor download the full colour file. A transparent PNG also turns black where its transparency is, unless it is first laid on white, which is why the code composites before converting.

**Why it matters.** The pages are lighter (the 14 images came to about 1.4 MB), and the picture is black and white in every browser, in print, and in a link preview.

**What happens if you do not.** A colour table with a gold header shows up gold in a black-and-white article, and the original 2000-pixel scans slow the page.
:::

Each picture sits in a `<figure>` with a caption written for it, and is wrapped in a link to the full-size file, because the arrow tables are far too small to read at column width. The text next to each figure was written to match the picture and its file name: the stone-tool plate opens the research article, the terminology diagram defines the words the article uses, and the Ashby chart explains how the wing's material was chosen. Where a caption describes a diagram that came from somewhere else (the laminate schematic is generic, not this wing's layup), it says so.

## Scrolling Through a Menu

The selection wheel on the home page is a menu of five categories, each with sub tabs. It is a long section, `4500` pixels tall at first, with a screen-sized panel that stays stuck to the top of the window (`position: sticky`) while you scroll past. The first version ignored the scroll position and only changed when you clicked. The better version makes **scrolling the input**.

The idea is to turn the menu into a flat list of **stops**: first the category, then each of its sub tabs, then the next category, and so on. There are 20 stops, built in three lines from the same data that draws the menu:

@code portfolio.html 1027-1030

Each stop owns 230 pixels of scrolling, and the section's height is set from the number of stops (`STOPS.length * STOP_PX + window.innerHeight`), so adding a sub tab to the data makes the page longer by itself. A scroll listener turns "how far have we scrolled into the section" into a stop number with one division, and `applyStop` opens that category and highlights that sub tab:

@code portfolio.html 1218-1229

:::why Stops from the data, and one division
**What it is.** The scroll position, divided by 230 and rounded down, is the index of the current stop.

**Why it is done this way.** The alternative is a pile of "if scrolled between 900 and 1130, show Structural" rules, each typed by hand and each wrong the moment a tab is added.

**Why it matters.** The menu, the scroll length and the highlighting all come from the one list. Clicking a category scrolls to its first stop (`stopScrollPos`), so clicking and scrolling always agree.

**What happens if you do not.** The scroll and the click disagree about where you are, and the page flickers between them.
:::

The old selection function was found to be doing nothing, a good lesson in itself. It looked up the menu items once, near the top of the script, *before the items had been created*, so its list was empty for ever. The new code asks for the items when it needs them.

## Video in Place of a Still

Each category now shows a short video instead of an image. The picture on the right of the menu is a `<video muted loop playsinline autoplay>`, and the chosen category's file replaces its `src` when the category changes (only then: moving between sub tabs of the same category leaves the video playing). The old still image stays as the video's **poster**, so something is on screen while the file loads.

The five clips came straight from an editor at about 120 MB in total, which is far too much for a menu. They were squeezed with the program described in the book *Building Nova - Compressor*: 119.1 MB became 11.0 MB, a 91 percent saving, using its "Web loop" preset (720 pixels, no sound, CRF 28). Because a page that is slow to load is a page people leave, **always compress video before it goes on a website.** The untouched originals were kept in a folder *outside* the project, so they never travel with the site.

## Curvature From a Handful of Points

The research article measures how curved each bow limb is. The measurement is simple to describe: photograph the limb from above, lay a grid over it, read off the coordinates of points along its edge, and work out the curvature from the points. Curvature is how quickly the direction of a curve is turning; a circle of radius 0.5 m has a curvature of 1 / 0.5 = **2 per metre** everywhere.

From points the curvature comes out of two central differences, the first and second differences of the coordinates (the same tool the article uses for the smoothness of the draw-force curve):

@code Syd Website Assets/Showcase/research/curvature.js 31-40

The program `Guide/code/js/s19_curvature.js` tests it on a circle of radius 0.5 m, using 17 points, as the limb profile does. The answer should be 2, and it is, until the points are wrong:

```
true curvature: 2.000 per metre
from exact points   : mean 2.003  spread 0.0000
with +/-0.1 mm of reading scatter: mean 2.007  spread 0.127
with +/-0.3 mm of reading scatter: mean 1.988  spread 0.303
with +/-1 mm of reading scatter: mean 2.066  spread 0.894
```

The mean stays near 2, but the *spread* grows quickly with the reading error: a second difference magnifies noise, because it subtracts two nearly equal differences. A tenth of a millimetre of scatter in the points is a 6 percent wobble in the curvature, and one millimetre is 45 percent. That is why the article takes the points at generous spacing, why it compares limbs read in the same way and not individual curvature values, and why it says so.

The animation that draws the grid forming and then the profile of each limb is `curvature.js`'s `drawProfiles(canvas, t)`: a pure function of time `t`, so the page can draw any frame, and the same function serves the playing animation and the finished picture. Its data are *generated* for the article (a smooth limb shape per set, plus a little reading scatter), in the order the report found, and the page says so. If the real coordinates are put in a `limb-profiles.json` file, the page uses them instead, and the curvature code is already the real method.

:::why Draw the animation from one function of time
**What it is.** `drawProfiles(c, t)` draws the whole picture for any time `t`, from nothing: grid first (the first 2.4 seconds), then the profiles (the next 4.2).

**Why it is done this way.** The alternative is to keep a pile of state (which line is half drawn, which point has appeared) and update it each frame. A pure function of time has no state to get wrong, and a Replay button is just `t = 0`.

**Why it matters.** The finished picture, the first frame and any frame between are the same code, and the same code can be tested by asking for a particular `t`.

**What happens if you do not.** A reader who scrolls away and back, or resizes the window, gets a half-drawn limb.
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
6. How does a CSS grid put a canvas above a video, with the same width, and what makes the dividing line?
7. What two things make "Back to Portfolio" return to the selection screen with the right category open?
8. How does one division turn the scroll position into the menu's current item?
:::

:::answers
**The showcase pages: quiz.**

1. Browsers block autoplay with sound, so that pages cannot shout at visitors; a muted video is allowed to start by itself.
2. It stops the graphics card drawing anything on one side of a plane, giving a cut. A clipped wall is hollow, so it shows its own back; the second, darker skin makes that back look like a believable inside.
3. Two surfaces on one plane, a back face fighting a front face on the same plane, and a stretched texture on a surface that should be plain.
4. A higher speed and a thinner gas (a lower viscosity), which together mean a higher Reynolds number.
5. The chart-drawing code. Only the palette object was swapped, so a fix to a chart fixes both kinds of page.
6. The container is a grid with one column and two rows (`grid-template-rows: auto auto`); the canvas is the first child, so it is in row 1, and the video is the second, so it is in row 2. Both use the same `aspect-ratio`, and the line is a `border-top` on the video's row.
7. The link ends in a fragment (`#expertise-wheel`) that scrolls to the selection section, and the click that opened the sub page saved the category's number in session storage, which the portfolio reads on load.
8. The menu is a flat list of stops (category, then each sub tab); the scroll distance into the section divided by the pixels per stop (230), rounded down, is the index of the stop.
:::
