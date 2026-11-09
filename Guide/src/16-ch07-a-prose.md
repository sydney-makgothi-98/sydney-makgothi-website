# Graphics on the Web

HTML and CSS are great at documents: text, boxes, pictures. But when a page needs to draw a chart of a phugoid, the path of a spiral climb, or a robot you can take apart, it has to draw pictures *from data*. The browser gives you three ways to do that, and they are different in kind. This chapter describes them, and then explains the maths that turns a 3D model into the flat picture on your screen. That maths is the same whether you write it yourself or let a library do it, so it is worth knowing.

## Raster and Vector

A **raster** image is a grid of coloured pixels. A photograph is a raster. It has a fixed resolution and goes soft when you enlarge it. A **vector** image is a list of *instructions*: draw a circle here, a curve there, fill with this colour. It can be drawn at any size without loss, because the drawing is worked out afresh each time.

| Tool | Kind | Model | Best for |
|---|---|---|---|
| **SVG** | Vector | A tree of shapes in the DOM; each shape is an element | Diagrams, icons, a few hundred shapes you want to style and click |
| **Canvas 2D** | Raster, drawn with vector commands | A bitmap you paint on; it keeps no memory of shapes | Charts and animation with thousands of marks redrawn every frame |
| **WebGL** | Raster, drawn by the GPU | Triangles and small programs for the graphics processor | 3D scenes and huge amounts of geometry |

The big difference between SVG and canvas is **retained** versus **immediate** mode. SVG *retains* its shapes: each is an element the browser remembers, so you can style it with CSS, click it, and move it by changing an attribute. The price is that thousands of elements slow the page. A canvas is **immediate**: you issue commands, pixels are painted, and the canvas forgets how they got there. It cannot tell you which shape you clicked, but it can paint a hundred thousand marks every frame.

:::why Charts on a canvas, diagrams in SVG
**What it is.** The charts of this website are drawn on canvases. The control-system block diagram is an SVG.

**Why it is done this way.** A chart redraws its curves many times per second as sliders move, and a canvas is made for that. The block diagram is a few dozen static shapes that benefit from being real elements, so they can be styled, animated with CSS and read by tools.

**Why it matters.** Using the right tool means the chart is fast and the diagram is crisp and light.

**What happens if you do not.** A chart in SVG with thousands of elements crawls. A diagram on a canvas cannot be styled with CSS or scaled without redrawing.
:::

## The Canvas 2D Model

You use a canvas through a **context**, which behaves like a pen with settings. The settings (colour, line width, font, the current transform) are called the *state*, and every drawing command uses whatever the state currently says.

```
const ctx = canvas.getContext('2d');
ctx.strokeStyle = '#a78bfa';        // set state
ctx.lineWidth = 2;
ctx.beginPath();                    // begin a new path
ctx.moveTo(10, 90);                 // lift the pen and put it here
ctx.lineTo(60, 20);                 // draw a segment
ctx.lineTo(110, 70);
ctx.stroke();                       // paint the path with the current state
```

The origin is the *top-left* corner, x increases to the right, and y increases *downward*, the opposite of what you learned in maths. So a chart that plots larger values higher has to flip the axis, and every chart on this website does so with a tiny mapping function.

```
const X = v => left + (v - xmin) / (xmax - xmin) * width;          // data x -> pixel x
const Y = v => top + height - (v - ymin) / (ymax - ymin) * height; // data y -> pixel y (flipped)
```

:::why Mapping functions for X and Y
**What it is.** Two small functions that turn a data value into a pixel position.

**Why it is done this way.** Your data (speed in metres per second, time in seconds) and the canvas (pixels, y downward) speak different languages. You need one translator, in one place.

**Why it matters.** Every line, tick and label goes through the same mapping, so they all agree. Changing the axis range changes one line.

**What happens if you do not.** Pixel arithmetic ends up scattered through the drawing code, and the first time you change an axis range, half the marks stay where they were.
:::

The **transform** is part of the state: `translate`, `rotate` and `scale` change how later coordinates are read. To draw an aircraft symbol turned through an angle, move the origin to the aircraft, rotate the axes, and draw the symbol upright around the origin. Wrap this in `ctx.save()` and `ctx.restore()`, which push and pop the whole state, to undo it afterwards.

```
ctx.save();
ctx.translate(x, y);          // move the origin to the aircraft
ctx.rotate(-pitch);           // turn the axes (negative: y points down on screen)
drawAircraft(ctx);            // drawn upright around the origin
ctx.restore();                // everything back as it was
```

:::why save and restore around a transform
**What it is.** Calling `ctx.save()` before changing the transform and `ctx.restore()` after.

**Why it is done this way.** The transform is *sticky*. It stays in force until you undo it.

**Why it matters.** Everything you draw afterwards is unaffected.

**What happens if you do not.** The axes of your chart end up rotated and shifted because you drew an aircraft symbol earlier, and it is very hard to tell why.
:::

## SVG in Brief

An SVG graphic is XML written right in the page. Its shapes are elements, and its coordinates live in a **viewBox**, a private coordinate system that the browser scales to whatever size the graphic is shown at. That is what makes it resolution-independent.

```
<svg viewBox="0 0 100 60" width="300">
  <rect x="5" y="5" width="40" height="20" rx="3" fill="none" stroke="currentColor"/>
  <path d="M45 15 H80 V45" fill="none" stroke="currentColor"/>
  <circle cx="80" cy="45" r="4" fill="#a78bfa"/>
</svg>
```

The control-system block diagram on the flight dynamics page is an SVG animated purely with CSS: the dashed signal lines have their `stroke-dashoffset` changed by a keyframe animation, so the dashes seem to flow along the wires.

:::why Animating the diagram with CSS only
**What it is.** A `@keyframes` rule that shifts the dash pattern, with no JavaScript.

**Why it is done this way.** It is a decoration that never changes in response to data.

**Why it matters.** It costs nothing on the main thread and keeps working even if a script fails.

**What happens if you do not.** A script that animates a decoration is one more thing to break and one more thing to slow the page.
:::

## Three Dimensions: The Idea

A 3D scene is a collection of points in space, and the screen is flat. So every 3D program has to answer one question: given a point in space, where on the screen does it appear? The answer is a chain of transformations.

#### Coordinates and handedness

Space is described by three axes. In three.js, x points right, y points up, and z points *towards you*. That makes the system **right-handed**: curl the fingers of your right hand from x towards y and your thumb points along z. Other tools choose differently, and many CAD programs put z upward. A model from another tool may need a turn to stand upright, and a simulation with its own convention needs a deliberate conversion at the boundary.

:::why Naming your frames and converting in one place
**What it is.** On the robot page, the robot is described in its own frame (x forward, y up, z to its right), and the world flips the sign of z so that "left" in the mission is left on screen.

**Why it is done this way.** The physics was written with its own natural axes, and the drawing library has others. Instead of bending either, there is one conversion line.

**Why it matters.** The mission model can say "turn left" and the picture turns left.

**What happens if you do not.** Models come out mirrored and turns come out backwards, and people "fix" it by flipping signs in random places until it looks right, and then it breaks again.
:::

#### From model to screen

A point passes through a series of **coordinate spaces**, each described by a matrix.

1. **Model space.** The point as the object's maker described it, relative to the object's own origin.
2. **World space.** After the **model matrix** places the object in the scene.
3. **Camera (view) space.** After the **view matrix** re-describes the world as seen from the camera, with the camera at the origin looking down the negative z axis.
4. **Clip space and normalised device coordinates.** After the **projection matrix** squeezes the view into a cube where x, y and z each run from −1 to 1. Anything outside the cube is not visible.
5. **Screen space.** After a last scaling to the pixel size of the canvas.

For a **perspective** camera the projection is what makes distant things small. If the vertical field of view is θ and the aspect ratio (width over height) is a, then for a point at camera-space (x, y, z), with z negative in front of the camera:

**x_ndc = (f / a) · x / (−z)    y_ndc = f · y / (−z)    where f = 1 / tan(θ/2)**

The division by −z is the whole of perspective: double the distance and the offset from the centre halves. The screen position follows from the canvas width W and height H:

**x_px = (x_ndc × 0.5 + 0.5) × W    y_px = (−y_ndc × 0.5 + 0.5) × H**

The minus in y_px is the flip between the 3D convention (y up) and the canvas convention (y down).

@include blocks/ch07-w1.md

#### Depth

The projection also maps depth, so nearer things can hide farther ones. The mapping is **not linear**, so precision is concentrated close to the camera. With the near plane at 0.05 and the far plane at 9 (the values used by the robot page), the normalised depth is 0.0056 at 0.1 metres, 0.81 at 0.5 metres, 0.91 at 1 metre and 0.99 at 5 metres. Over four-fifths of the depth range is used up within the first half metre.

:::why Tight near and far planes
**What it is.** Setting the camera's `near` and `far` to the smallest and largest distances the scene really needs (0.05 and 9 on the robot page).

**Why it is done this way.** The depth buffer has only so many levels. A tighter range spreads them over the space you actually use.

**Why it matters.** Surfaces that are close together, such as a screw head on a plate, get different depth values and render cleanly.

**What happens if you do not.** With near at 0.001 and far at 10 000, nearby surfaces get the *same* depth value and flicker against each other. This is called z-fighting, and it looks like shimmering static.
:::

## Meshes, Materials and Light

In three.js a visible object is a **mesh**: a **geometry** (the shape, a list of triangles) plus a **material** (how the surface responds to light). The scene is a tree (a robot contains an arm, which contains a claw), so moving a parent moves its children, exactly as the DOM tree moves nested boxes. A **light** lights the scene, a **camera** defines the view, and a **renderer** draws the result onto a canvas.

#### How a surface is lit

The simplest model of light on a matt surface is **Lambert's law**: brightness is proportional to the cosine of the angle between the surface's **normal** (the unit vector sticking straight out of it) and the direction towards the light. For unit vectors n and l the cosine is their dot product, and a surface facing away gets nothing.

**brightness = max(0, n · l)**

@include blocks/ch07-w2.md

Modern renderers use **physically based rendering** (PBR), which describes a material by measurable properties: **base colour**, how **rough** it is (rough scatters light and looks matte, smooth gives a tight bright reflection), and how **metallic** it is. An **environment map**, a panoramic picture of the surroundings, supplies reflections.

:::why Building a little photography studio to reflect
**What it is.** The robot page makes a virtual studio (one big soft light overhead, a strip light at the side, a warm fill) and uses it as the environment map.

**Why it is done this way.** Glossy plastic and polished steel look real because of what they *reflect*.

**Why it matters.** With a good studio, a screw head catches a highlight and a plate shows a soft reflection of a softbox. That is what makes it look like a product photograph.

**What happens if you do not.** Glossy surfaces reflect nothing and look like grey putty.
:::

#### Shadows, occlusion and tone mapping

Three refinements lift a render from "computer graphics" towards "photograph". **Shadow maps** render the scene from the light's point of view to learn which surfaces it can reach. **Ambient occlusion** darkens creases and contact points where light is blocked by nearby geometry. **Tone mapping** squeezes the huge range of brightness in a lit scene (a lamp's reflection may be a hundred times brighter than a shaded wall) into the narrow range a screen can show, with a curve that stops highlights clipping to flat white.

## Keeping a Scene Fast

A GPU can draw millions of triangles, but each separate object costs a **draw call**, a small package of work the main thread must prepare and send. Draw calls are usually the bottleneck. **Merging** meshes that share a material into one geometry turns many draw calls into one. **Instancing** draws one mesh many times with different positions in a single call.

:::why Merging tiny parts by material
**What it is.** The robot is made of hundreds of tiny features (screws, pins, chip legs). Those that share a material are merged into one mesh, so they cost one draw call between them.

**Why it is done this way.** Draw calls are expensive and triangles are cheap.

**Why it matters.** The detailed robot still runs smoothly on a laptop's built-in graphics.

**What happens if you do not.** Hundreds of separate meshes mean hundreds of draw calls, and the frame rate collapses long before the GPU is busy.
:::
