# three.js: A 3D World in Your Page

three.js is a JavaScript library that makes WebGL (the browser's 3D drawing system) bearable. Raw WebGL needs hundreds of lines before it draws one triangle. three.js needs about twenty to draw a spinning cube with proper lighting. This website uses it on the Patrick robot page, so this chapter has a particular goal: by the end, you should be able to read that page's code and understand every part.

## Words You Will Meet

| Word | What it means |
|---|---|
| **Scene** | The container for everything you want to draw. |
| **Camera** | The viewpoint (usually a `PerspectiveCamera`). |
| **Renderer** | The thing that draws the scene, as seen by the camera, onto a canvas. |
| **Mesh** | A visible object: a geometry plus a material. |
| **Geometry** | The shape: vertices and triangles. |
| **Material** | How the surface looks: colour, roughness, metalness. |
| **Light** | A source of illumination (directional, point, hemisphere). |
| **Object3D / Group** | A node in the scene tree that can hold children and be moved as one. |
| **Raycaster** | A line shot through the scene to find what it hits (used for picking). |
| **Texture** | An image applied to a surface. |
| **Environment map** | A panorama used for reflections and ambient light. |
| **Draw call** | One command sent to the GPU to draw something. |

## The Smallest Scene

```
import * as THREE from 'three';

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(36, innerWidth / innerHeight, 0.05, 50);
camera.position.set(2, 1.5, 3);
camera.lookAt(0, 0, 0);

const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshStandardMaterial({ color: '#a78bfa', roughness: 0.4 })
);
scene.add(cube);
scene.add(new THREE.DirectionalLight('#ffffff', 3).translateX(2).translateY(3));
scene.add(new THREE.AmbientLight('#8899cc', 0.5));

function frame() {
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
    requestAnimationFrame(frame);
}
frame();
```

:::why The five ingredients
**What it is.** Every three.js program has a renderer, a scene, a camera, something to look at, and a loop.

**Why it is done this way.** It mirrors a photographer's studio: a set (the scene), something in it (the mesh), a light, a camera, and a shutter (the render call).

**Why it matters.** When nothing appears, one of the five is missing, and you can check them in order. The most common culprits are no light (a standard material is black without light), the camera inside the object, or no render call.

**What happens if you do not.** You stare at a black rectangle and guess.
:::

:::why Moving by a fixed rotation each frame, and why that is not enough
**What it is.** `cube.rotation.y += 0.01` turns the cube a fixed amount per frame.

**Why it is done this way.** It is the simplest possible loop to show the idea.

**Why it matters.** On a 144 hertz screen this spins more than twice as fast as on a 60 hertz one (Chapter 6).

**What happens if you do not fix it.** Replace it with `cube.rotation.y += speed * dt`, where `dt` comes from the clock. Every animation loop in a serious page works this way.
:::

## Handling Resize and Pixel Ratio

```
function resize() {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
}
addEventListener('resize', resize);
```

:::why updateProjectionMatrix and a capped pixel ratio
**What it is.** After changing the camera's `aspect`, you must call `camera.updateProjectionMatrix()`. And the pixel ratio is capped at 2.

**Why it is done this way.** The projection matrix (Chapter 7) is calculated once and stored. Changing `aspect` does not recalculate it by itself. The cap stops a 3x-density phone from rendering nine pixels for every one it needs.

**Why it matters.** The picture keeps the right proportions, and rendering cost stays reasonable.

**What happens if you do not.** After resizing the window, the scene looks stretched, because the old matrix is still in use. Without the cap, a high-density phone renders far more pixels than the eye can tell apart, and runs slowly and hot.
:::

## The Scene Tree

A `Group` holds children. Moving, rotating or scaling the group moves all its children. This is how the robot is built: a root group contains the wheels, the arm, the claw. And the claw is a child of the arm's end, so lifting the arm carries it along.

```
const arm = new THREE.Group();
const bar = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.012, 0.004), material);
bar.position.x = 0.12;              // bar's centre is 0.12 from the pivot
arm.add(bar);
arm.rotation.z = Math.PI / 6;       // swing the whole arm about its pivot
```

:::why Putting the pivot at the group's origin
**What it is.** The bar is offset from the group's origin by half its length, so the group's origin is the pivot point.

**Why it is done this way.** A rotation always happens around the object's own origin.

**Why it matters.** Rotating the group now swings the bar around its end, like a real arm. Rotating the bar alone would spin it around its middle.

**What happens if you do not.** The arm spins about its centre, and the model looks broken. This is the single most common newcomer mistake in 3D.
:::

## Picking: What Did the Visitor Click?

A **raycaster** shoots a line from the camera through the pointer and tells you what it hit.

```
const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
function pick(clientX, clientY) {
    const r = canvas.getBoundingClientRect();
    ndc.set(((clientX - r.left) / r.width) * 2 - 1, -((clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    const hits = ray.intersectObjects(meshes, false);
    return hits.length ? hits[0].object : null;
}
```

:::why The two conversions in the pointer position
**What it is.** The pointer position is converted to **normalised device coordinates** (−1 to 1 on each axis) with the y axis flipped.

**Why it is done this way.** The camera works in that coordinate space (Chapter 7), where y is *up*, and the screen has y *down*.

**Why it matters.** The ray goes where the visitor pointed.

**What happens if you do not.** Clicks pick things in the wrong place, mirrored top to bottom.
:::

## Lights, Materials and the Environment

`MeshStandardMaterial` and `MeshPhysicalMaterial` are physically based. You give them `color`, `roughness` (0 shiny to 1 matte), `metalness` (0 plastic to 1 metal), and for the physical one, `clearcoat` (a glossy lacquer layer). A scene looks flat without an **environment map** that gives metals and gloss something to reflect.

:::why Giving glossy things something to reflect
**What it is.** `scene.environment = texture`, here made from a small virtual studio with a few bright panels.

**Why it is done this way.** A smooth surface shows a mirror image of its surroundings. If there is nothing in the surroundings, there is nothing to show.

**Why it matters.** Plastics get a highlight, metals get depth, and the model looks like a photograph.

**What happens if you do not.** Metals look flat grey, because a metal's colour comes almost entirely from reflections.
:::

## Freeing Memory

three.js allocates memory on the graphics card for geometries, materials and textures, and the garbage collector cannot see it. When you are finished with an object, call `.dispose()` on its geometry, material and textures.

:::why Calling dispose
**What it is.** An explicit "I am done with this" call.

**Why it is done this way.** GPU memory is outside JavaScript's control.

**Why it matters.** A page that creates and discards objects (a game, a viewer that swaps models) stays healthy.

**What happens if you do not.** Memory climbs until the browser slows or the tab crashes.
:::

## Worked Example: Fitting an Object in the View

:::worked How far back should the camera be?
An object is 0.30 m tall. The camera has a vertical field of view of 36 degrees. How far should the camera be to just fit the object vertically, and where is it if it orbits at azimuth −50 degrees, elevation 22 degrees and distance 0.78 m (the Patrick page's starting view)?

**Step 1. The geometry.** The visible height at distance d is 2 d tan(θ/2). To fit height H, d = (H/2) / tan(θ/2).

**Step 2. Numbers.** (0.15) / tan(18°) = 0.15 / 0.32492 = 0.462 m.

**Step 3. Orbit position.** A camera orbiting a target at distance d, azimuth a and elevation e sits at (d cos e cos a, d sin e, d cos e sin a) from the target.

**Step 4. Evaluate.** With d = 0.78, e = 22°, a = −50°: x = 0.78 × 0.9272 × 0.6428 = 0.465; y = 0.78 × 0.3746 = 0.292; z = 0.78 × 0.9272 × (−0.7660) = −0.554.

**Step 5. Check.** The distance from the target should be 0.78: √(0.465² + 0.292² + 0.554²) = √(0.2162 + 0.0853 + 0.3069) = √0.6084 = 0.78. ✓

**Why the orbit camera is built this way.** One angle for left and right (azimuth), one for up and down (elevation), and one distance are the three things a visitor can drag or scroll. The code never touches `camera.position` directly except through this formula.
:::

## Practice Problems

:::problems
1. A camera has a vertical field of view of 50 degrees. What height of the world is visible at a distance of 2 m? What field of view would show exactly 1.2 m at a distance of 3 m?
2. A group is at position (0, 0, 0) with a child at (1, 0, 0). The group is rotated by 90 degrees about the y axis. Where is the child in world space? (Use x′ = x cos θ + z sin θ, z′ = −x sin θ + z cos θ.)
3. You write `camera.aspect = w / h` in a resize handler, and the scene looks stretched after resizing. What did you forget?
4. A scene has 300 meshes with the same material. Roughly what does merging them into one geometry change, and what can you no longer do individually?
5. A metal sphere looks flat grey and lifeless. Give two possible causes and fixes.
6. A page creates 50 new textures every minute and never disposes of them. Predict what happens over an hour and say what to add.
:::

:::answers
**Chapter 15 practice problems.**

1. Visible height = 2 × 2 × tan(25°) = 4 × 0.4663 = 1.865 m. For 1.2 m at 3 m: θ = 2 atan(0.6 / 3) = 2 atan(0.2) = 22.6°.
2. (cos 90°, sin 90° terms) x′ = 1 × 0 + 0 = 0 and z′ = −1 × 1 + 0 = −1, so the child is at (0, 0, −1).
3. `camera.updateProjectionMatrix()`; the projection is stored and not recalculated automatically.
4. Merging turns 300 draw calls into 1, which usually makes a big difference to the frame rate. The cost is that the merged mesh is a single object: you cannot move, hide or highlight one part on its own (unless you keep it separate).
5. No environment map (so nothing to reflect): add `scene.environment`. Or roughness too high, or metalness too low: lower the roughness and raise the metalness.
6. GPU memory grows by 50 textures a minute, 3000 over an hour, until the page slows or crashes. Call `texture.dispose()` when a texture is no longer needed.
:::
