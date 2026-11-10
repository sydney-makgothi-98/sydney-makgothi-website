# three.js: A 3D World in Your Page

three.js is a JavaScript library that makes WebGL (the browser's 3D drawing system) bearable. Raw WebGL needs hundreds of lines before it draws one triangle. three.js needs about twenty to draw a spinning cube with proper lighting. This website uses it on the Patrick and drone pages, so this chapter has a particular goal: by the end, you should be able to read those pages' code and understand every part, and to build a 3D instrument of your own. Every number in the worked examples was checked by three.js itself, release 186, in Node (`Guide/code/three/check.mjs`).

:::objectives
- Set up a renderer, scene, camera, light and loop, and resize them correctly.
- Explain the camera's parameters and position it by orbit angles or to fit an object.
- Build geometry from primitives and from raw vertex data, and merge it.
- Choose materials by what they do with light, and light a scene with shadows and an environment.
- Use the scene tree for pivots and assemblies, and pose a model from state.
- Pick objects with a raycaster, load models, and keep a scene fast on weak hardware.
:::

## Words You Will Meet

| Word | What it means |
|---|---|
| **Scene** | The container for everything you want to draw. |
| **Camera** | The viewpoint (usually a `PerspectiveCamera`). |
| **Renderer** | The thing that draws the scene, as seen by the camera, onto a canvas. |
| **Mesh** | A visible object: a geometry plus a material. |
| **Geometry** | The shape: vertices and triangles, held in typed arrays (a `BufferGeometry`). |
| **Material** | How the surface looks: colour, roughness, metalness, transparency. |
| **Light** | A source of illumination (ambient, hemisphere, directional, point, spot). |
| **Object3D / Group** | A node in the scene tree that can hold children and be moved as one. |
| **Local / world space** | Coordinates relative to a node's parent / to the scene. |
| **Raycaster** | A line shot through the scene to find what it hits (used for picking). |
| **Texture** | An image applied to a surface. |
| **Environment map** | A panorama used for reflections and ambient light. |
| **Draw call** | One command sent to the GPU to draw something. |
| **Instancing** | Drawing one geometry many times with different transforms in one draw call. |

## 15.1 The Smallest Scene

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

const clock = new THREE.Clock();
function frame() {
    const dt = Math.min(clock.getDelta(), 0.1);
    cube.rotation.y += 0.8 * dt;                 // radians per second, not per frame (Chapter 6)
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

Units are yours to choose, but choose metres and stick to them: the lights' physical falloff, the camera's near and far planes and any model you load all assume one consistent unit. The Patrick robot is 0.3 m tall in the scene because it is 0.3 m tall on the desk.

## 15.2 The Renderer: Size, Pixel Ratio, Colour and Tone

```
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
function resize() {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.setSize(w, h, false);               // false: do not touch the CSS size
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
}
addEventListener('resize', resize); resize();
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
```

:::why updateProjectionMatrix and a capped pixel ratio
**What it is.** After changing the camera's `aspect`, you must call `camera.updateProjectionMatrix()`. And the pixel ratio is capped at 2.

**Why it is done this way.** The projection matrix (Chapter 7) is calculated once and stored. Changing `aspect` does not recalculate it by itself. The cap stops a 3x-density phone from rendering nine pixels for every one it needs.

**Why it matters.** The picture keeps the right proportions, and rendering cost stays reasonable.

**What happens if you do not.** After resizing the window, the scene looks stretched, because the old matrix is still in use. Without the cap, a high-density phone renders far more pixels than the eye can tell apart, and runs slowly and hot.
:::

three.js checked this for the book: with a 36° camera, the first element of the projection matrix is 3.0777; after setting `aspect = 2` it is *still* 3.0777, and only after `updateProjectionMatrix()` does it become 1.5388.

Colour and brightness are handled for you if you leave the defaults: the renderer works in linear light and writes sRGB to the screen (`outputColorSpace`), and **tone mapping** squeezes the wide range of a lit scene into what a screen can show. ACES Filmic is the usual choice; `toneMappingExposure` is the one knob to turn when the whole picture is too dark or too bright.

## 15.3 Cameras

`new THREE.PerspectiveCamera(fov, aspect, near, far)`: the vertical field of view in degrees, the width-to-height ratio of the canvas, and the nearest and farthest distances that are drawn.

@figure camera-frustum The camera sees a truncated pyramid, the frustum. Anything closer than `near` or farther than `far` is clipped away; the depth buffer's precision is spread between those two planes, so keep them tight (Chapter 7).

A camera is positioned like any object (`position.set`) and aimed with `lookAt(x, y, z)`. An **orbit** camera, the kind on every viewer page of this website, keeps a target and three numbers: azimuth, elevation, distance.

@figure orbit-camera An orbit camera is three numbers around a target. Dragging changes the azimuth and elevation; the wheel changes the distance; the position is always computed from the formula, never set by hand.

```
camera.position.set(target.x + d * Math.cos(el) * Math.cos(az), target.y + d * Math.sin(el), target.z + d * Math.cos(el) * Math.sin(az));
camera.lookAt(target);
```

For a quick viewer, `OrbitControls` from `three/examples/jsm/controls/OrbitControls.js` does the dragging for you (`new OrbitControls(camera, canvas)`, then `controls.update()` each frame). The website writes its own so that the camera can ease toward wanted values (Chapter 6) and be driven by a tour.

:::worked How far back should the camera be?
An object is 0.30 m tall. The camera has a vertical field of view of 36 degrees. How far should the camera be to just fit the object vertically, and where is it if it orbits at azimuth −50 degrees, elevation 22 degrees and distance 0.78 m (the Patrick page's starting view)?

**Step 1. The geometry.** The visible height at distance d is 2 d tan(θ/2). To fit height H, d = (H/2) / tan(θ/2).

**Step 2. Numbers.** (0.15) / tan(18°) = 0.15 / 0.32492 = 0.462 m.

**Step 3. Orbit position.** A camera orbiting a target at distance d, azimuth a and elevation e sits at (d cos e cos a, d sin e, d cos e sin a) from the target.

**Step 4. Evaluate.** With d = 0.78, e = 22°, a = −50°: x = 0.78 × 0.9272 × 0.6428 = 0.465; y = 0.78 × 0.3746 = 0.292; z = 0.78 × 0.9272 × (−0.7660) = −0.554.

**Step 5. Check.** The distance from the target should be 0.78: √(0.465² + 0.292² + 0.554²) = √(0.2162 + 0.0853 + 0.3069) = √0.6084 = 0.78. ✓ three.js gives `[0.465, 0.292, -0.554]`, length 0.780, and a fit distance of 0.462 m.

**Why the orbit camera is built this way.** One angle for left and right (azimuth), one for up and down (elevation), and one distance are the three things a visitor can drag or scroll. The code never touches `camera.position` directly except through this formula.
:::

To frame any object automatically: `new THREE.Box3().setFromObject(obj)` gives its bounds, `getSize` and `getCenter` give the size and centre, and the fit formula above (with the larger of height and width ÷ aspect) gives the distance. The robot's bounding box, from `check.mjs`, is 0.2 by 0.3 by 0.25 m around its centre.

## 15.4 Geometry

Built-in geometries cover most instruments: `BoxGeometry`, `SphereGeometry`, `CylinderGeometry` (also cones), `TorusGeometry`, `PlaneGeometry`, `CircleGeometry`, `RingGeometry`, `LatheGeometry` (a profile spun about an axis: a shaft, a nozzle, a wheel), `ExtrudeGeometry` (a 2D shape pulled into 3D: a bracket, a plate with holes), `TubeGeometry` (a tube along a curve: a wire, a pushrod). Each is a `BufferGeometry` underneath: typed arrays of vertex positions, normals and texture coordinates, plus an index that says which three vertices make each triangle.

You can build one directly, which is how a chart or a terrain becomes 3D:

```
const g = new THREE.BufferGeometry();
const positions = new Float32Array([0, 0, 0,  1, 0, 0,  0, 1, 0]);     // three vertices, one triangle
g.setAttribute('position', new THREE.BufferAttribute(positions, 3));
g.computeVertexNormals();                                             // so lighting works
```

Geometry can be transformed once at build time (`geometry.translate(x, y, z)`, `.rotateX(a)`, `.scale(...)`), which is different from moving the mesh: it bakes the change into the vertices. That is what makes **merging** possible: transform each part into place, then `mergeGeometries([...])` from `three/examples/jsm/utils/BufferGeometryUtils.js` joins them into one. three.js merged 300 small boxes for the book into a single geometry of 7 200 vertices (300 × 24), which draws in one call instead of 300.

:::why Merging tiny parts by material
**What it is.** The robot is made of hundreds of tiny features (screws, pins, chip legs). Those that share a material are merged into one mesh, so they cost one draw call between them.

**Why it is done this way.** Draw calls are expensive and triangles are cheap (Chapter 7).

**Why it matters.** The detailed robot still runs smoothly on a laptop's built-in graphics.

**What happens if you do not.** Hundreds of separate meshes mean hundreds of draw calls, and the frame rate collapses long before the GPU is busy.
:::

## 15.5 Materials

A material decides what a surface does with light. Choose by that, not by appearance.

| Material | Lighting | Use it for |
|---|---|---|
| `MeshBasicMaterial` | none: flat colour or texture | wireframes, unlit overlays, debug |
| `MeshLambertMaterial` | matte (Chapter 7's n · l) | cheap, soft surfaces; many objects |
| `MeshStandardMaterial` | physically based: `roughness`, `metalness` | nearly everything |
| `MeshPhysicalMaterial` | Standard plus `clearcoat`, `transmission`, `sheen`, `ior` | lacquered plastic, glass, fabric |
| `LineBasicMaterial`, `PointsMaterial` | lines and points | axes, traces, particle fields |

@figure pbr-roughness Roughness is the one slider that changes a material most. Near zero, the highlight is a tight mirror of the light; near one, it spreads over the whole surface. Metalness decides whether the base colour tints the reflection (metal) or sits under it (plastic).

```
new THREE.MeshStandardMaterial({ color: '#f2b400', roughness: 0.45, metalness: 0 });        // yellow plastic
new THREE.MeshStandardMaterial({ color: '#cfd3d8', roughness: 0.3, metalness: 1 });         // brushed steel
new THREE.MeshPhysicalMaterial({ color: '#f2b400', roughness: 0.3, clearcoat: 1, clearcoatRoughness: 0.1 });   // glossy coat
new THREE.MeshPhysicalMaterial({ color: '#ffffff', transmission: 1, roughness: 0.05, thickness: 0.01 });        // acrylic
```

Other properties you will set: `transparent: true` with `opacity`, `side: THREE.DoubleSide` for thin single-sided shapes, `wireframe: true`, `emissive` and `emissiveIntensity` for things that glow (an LED), `map` for a colour texture, `bumpMap` or `normalMap` for fine surface detail, `envMapIntensity` for how strongly the environment reflects. A material is shared by every mesh that uses it, so one object is enough per look; change `material.color.set('#...')` and every mesh with it changes.

:::why Giving glossy things something to reflect
**What it is.** `scene.environment = texture`, here made from a small virtual studio with a few bright panels.

**Why it is done this way.** A smooth surface shows a mirror image of its surroundings. If there is nothing in the surroundings, there is nothing to show.

**Why it matters.** Plastics get a highlight, metals get depth, and the model looks like a photograph.

**What happens if you do not.** Metals look flat grey, because a metal's colour comes almost entirely from reflections.
:::

## 15.6 Lights, Shadows and the Environment

| Light | What it does | Cost |
|---|---|---|
| `AmbientLight(color, intensity)` | lights everything equally; no shading | nothing |
| `HemisphereLight(sky, ground, intensity)` | sky colour from above, ground colour from below; a cheap "outdoors" | nothing |
| `DirectionalLight` | parallel rays from a direction, like the sun; casts shadows | low |
| `PointLight` | rays from a point in all directions; falls off with distance | medium |
| `SpotLight` | a cone from a point | medium |
| `RectAreaLight` | a soft rectangular panel, like a softbox | higher |

Since release 155, intensities are in physical units and the defaults are physically correct: a directional light of 3 and an ambient of 0.5 are sensible starting values, and point lights fall off with the square of distance, so put them close or make them strong.

Shadows need three switches and cost a second render from the light's point of view:

```
renderer.shadowMap.enabled = true;
sun.castShadow = true; sun.shadow.mapSize.set(1024, 1024);
mesh.castShadow = true; floor.receiveShadow = true;
```

The **environment** is a panorama that supplies reflections and soft ambient light at once. The easiest good one is the room provided with three.js:

```
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment()).texture;
```

The Patrick page builds its own small studio (an overhead softbox, a side strip, a warm fill) and runs it through the same `PMREMGenerator`, which is what gives its plastics and steel their highlights (Chapter 7).

:::worked The brightness of a tabletop
A flat table has normal n = (0, 1, 0). Find its Lambert brightness under a light in the direction (0.6, 0.8, 0), and then from (1, 1, 0).

**Step 1. The first light.** Its direction is already a unit vector (0.36 + 0.64 = 1). n · l = 0 × 0.6 + 1 × 0.8 + 0 × 0 = 0.8.

**Step 2. The second light.** Normalise (1, 1, 0): length √2, so l = (0.707, 0.707, 0). n · l = 0.707.

**Step 3. Check.** three.js's `Vector3.dot` gives 0.800 and 0.707. ✓ A `MeshLambertMaterial` under a directional light does exactly this sum per vertex; the Standard material adds the roughness and environment terms on top.
:::

## 15.7 The Scene Tree

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

three.js confirms the arithmetic: after the 30° swing, the bar's centre is at (0.1039, 0.06, 0), which is (0.12 cos 30°, 0.12 sin 30°). And a child at (1, 0, 0) inside a group turned 90° about y ends up at (0, 0, −1) in the world.

Every node has a **local** position (relative to its parent) and a **world** position (`obj.getWorldPosition(v)`). `obj.lookAt(point)` aims a node at a world point. Rotations are Euler angles in radians (`rotation.set(x, y, z, order)`), or a quaternion for anything that must avoid gimbal lock, such as a free-flying drone. Posing a model from state is a function: given the servo angle, the wheel angles and the jaw opening, set each node's rotation, every frame, from scratch (Chapter 5 and Part V).

## 15.8 Animation

The loop is Chapter 6's: a `Clock`, a clamped `dt`, update then render. Three patterns cover most needs. **Pose from state**: compute every rotation and position from a few numbers each frame (the robot). **Keyframes**: an `AnimationMixer` plays clips that come with a loaded model (a walking character). **Procedural**: a small sway from `Math.sin(t)` on the drone's rotation, a slow orbit of the camera when the visitor is idle.

```
function frame() {
    const dt = Math.min(clock.getDelta(), 0.1);
    sim.step(dt);                                  // physics in its own module
    pose(robot, sim.state);                        // the picture is a function of the state
    renderer.render(scene, camera);
    if (visible) requestAnimationFrame(frame);
}
```

Render only while the canvas is visible (an `IntersectionObserver`), and give a still frame under `prefers-reduced-motion`.

## 15.9 Picking: What Did the Visitor Click?

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

A hit carries `object`, `point` (where in world space), `distance` and `face`. For the book, a ray from the screen centre (NDC 0, 0) with the camera at z = 2 hit a unit cube at a distance of 1.500: the near face is at z = 0.5. Put the part's record in `mesh.userData` so a hit tells you what it is (Project 5). The raycaster ignores the `visible` flag, so filter hidden meshes out before testing (Part V shows why that matters on the Patrick page).

## 15.10 Textures and Models

A **texture** is an image on a surface. `new THREE.TextureLoader().load('grain.png')` gives one; set `texture.colorSpace = THREE.SRGBColorSpace` for colour maps (not for bump, normal or roughness maps, which hold data, not colour), and `wrapS`/`wrapT` with `repeat` to tile. A `CanvasTexture` turns a canvas you drew (a label, a gauge face, the fine grain of moulded plastic) into a texture, which is how the robot's bump maps are made without any image files.

Models come from modelling tools as **glTF** (`.glb`), the format three.js reads best:

```
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
new GLTFLoader().load('arm.glb', gltf => { scene.add(gltf.scene); });
```

A loaded model may use a different up axis or unit (Chapter 7); rotate and scale its root group once, at the boundary, and leave the rest alone. Both pages of this website build their geometry from code instead of loading files, which keeps each page under a megabyte and makes every dimension a named number.

## 15.11 Keeping It Fast

The budget is Chapter 2's frame, and the usual limit is draw calls, not triangles. `renderer.info.render.calls` tells you how many you are making; aim for under a hundred on a page.

- **Merge** static parts that share a material (15.4). **Instance** repeated parts: `new THREE.InstancedMesh(geometry, material, count)`, then `setMatrixAt(i, matrix)` for each copy, draws them all in one call. Screws, LEDs on a strip, a field of particles.
- **Cap the pixel ratio** (15.2) and **size the canvas** no larger than it is shown.
- **Share materials**; a new material per mesh means a new shader program per mesh.
- **Keep near and far tight** for depth precision, and **frustum culling** (on by default) skips what the camera cannot see.
- **Quality tiers.** Decide at start-up from the device (cores, memory, touch) which effects to enable, and measure the frame time; if it stays long, step down a tier: smaller shadow maps, no ambient occlusion, a lower pixel ratio. The Patrick page has three tiers and switches between them without reloading.
- **Warm up shaders** with `await renderer.compileAsync(scene, camera)` before the first frame, so the first appearance of each material does not stall.
- **Dispose** of what you stop using: `geometry.dispose()`, `material.dispose()`, `texture.dispose()`. GPU memory is invisible to the garbage collector.

:::why Calling dispose
**What it is.** An explicit "I am done with this" call.

**Why it is done this way.** GPU memory is outside JavaScript's control.

**Why it matters.** A page that creates and discards objects (a game, a viewer that swaps models) stays healthy.

**What happens if you do not.** Memory climbs until the browser slows or the tab crashes.
:::

## 15.12 Bundling a three.js Page

three.js is a package, so a page that uses it needs a build (Chapter 16): `npm install three`, write `main.js` with `import * as THREE from 'three'`, and bundle with `npx esbuild main.js --bundle --minify --format=iife --outfile=app.js`. The result is one file of about 600 kilobytes for the core, more with the examples modules you import. Import only what you use (`three/examples/jsm/...` paths, never the whole examples folder) so the bundler can leave the rest out.

## Worked Example: A Needle Gauge in 3D

:::worked A dial that reads a number
Build a round gauge whose needle turns to show a value v between 0 and 1, with the pivot at the dial's centre and a 270-degree sweep, and check the pose.

**Step 1. The dial.** A `CylinderGeometry(0.1, 0.1, 0.01, 64)` rotated so its flat face points at the camera (`geometry.rotateX(Math.PI / 2)`), with a matte dark material.

**Step 2. The needle, with its pivot at the origin.** A thin box `BoxGeometry(0.004, 0.08, 0.004)` translated up by 0.035 so that it extends from just below the pivot to near the rim: `geometry.translate(0, 0.035, 0)`. Put it in a `Group` called `needle` at the dial's centre, slightly in front of the face.

**Step 3. The pose.** At v = 0 the needle points to the lower left, 135° anticlockwise of straight up; at v = 1 to the lower right. A rotation about the z axis (towards the camera) by `THREE.MathUtils.degToRad(135 - 270 * v)` does it: positive z rotation is anticlockwise when seen from the front. For v = 0.3 that is 135 − 81 = 54°, up and to the left. For v = 0.5 it is 0°, straight up. ✓

**Step 4. Drive it from state.** Each frame, `needle.rotation.z = degToRad(135 - 270 * state.v)`. A slider, a simulation or a tour can all set `state.v`, and the needle follows. Add a `CanvasTexture` of tick marks drawn with Chapter 13's arc code for the dial face, and you have a 3D instrument built from the same ideas as the 2D one.
:::

## Practice Problems A: Scene, Camera and Tree

:::problems
1. A camera has a vertical field of view of 50 degrees. What height of the world is visible at a distance of 2 m? What field of view would show exactly 1.2 m at a distance of 3 m?
2. A group is at position (0, 0, 0) with a child at (1, 0, 0). The group is rotated by 90 degrees about the y axis. Where is the child in world space? (Use x′ = x cos θ + z sin θ, z′ = −x sin θ + z cos θ.)
3. You write `camera.aspect = w / h` in a resize handler, and the scene looks stretched after resizing. What did you forget?
4. An arm bar is 0.24 m long and must swing about one end. Give the two lines that place it in a group so that the group's rotation is the swing, and the world position of its centre after a 30° swing.
5. The orbit camera is at azimuth 90°, elevation 0°, distance 1 from the origin. Where is it? And at azimuth 0°, elevation 90°?
6. Nothing appears on the canvas. List the five things to check, in order.
7. Why is `cube.rotation.y += 0.01` wrong in a frame loop, and what replaces it?
:::

:::answers
**Chapter 15, Practice Problems A.**

1. Visible height = 2 × 2 × tan(25°) = 4 × 0.4663 = 1.865 m. For 1.2 m at 3 m: θ = 2 atan(0.6 / 3) = 2 atan(0.2) = 22.6°.
2. (cos 90°, sin 90° terms) x′ = 1 × 0 + 0 = 0 and z′ = −1 × 1 + 0 = −1, so the child is at (0, 0, −1). three.js: `[0, 0, -1]`.
3. `camera.updateProjectionMatrix()`; the projection is stored and not recalculated automatically.
4. `bar.position.x = 0.12; arm.add(bar);` (the bar's centre is half its length from the group's origin). After `arm.rotation.z = Math.PI / 6` the centre is at (0.12 cos 30°, 0.12 sin 30°, 0) = (0.104, 0.060, 0).
5. Azimuth 90°, elevation 0°: (cos 0 cos 90°, sin 0, cos 0 sin 90°) = (0, 0, 1). Azimuth 0°, elevation 90°: (0, 1, 0), straight above the target (where `lookAt` needs an up-vector hint; keep elevation just under 90°).
6. Is there a light (a Standard material is black without one)? Is the camera outside the object and looking at it (`lookAt`)? Does the canvas have a CSS size (a canvas with no height shows nothing)? Is `renderer.render` called inside the loop? Are the near and far planes bracketing the object?
7. It turns a fixed amount per frame, so it spins twice as fast on a 144 Hz screen as on a 60 Hz one. Use `cube.rotation.y += speed * dt` with `dt` from a `Clock`.
:::

## Practice Problems B: Materials, Lights, Picking and Speed

:::problems
1. A metal sphere looks flat grey and lifeless. Give two possible causes and fixes.
2. Which material for each: a wireframe debug overlay; a thousand matte pebbles; the yellow plastic of a robot's shell with a glossy coat; a sheet of acrylic?
3. A directional light at (3, 4, 0) lights a floor with normal (0, 1, 0). Find the Lambert brightness. (Normalise first.)
4. A scene has 300 meshes with the same material. Roughly what does merging them into one geometry change, and what can you no longer do individually? When would you instance instead?
5. A click picks a part that is hidden (`visible = false`) in front of the one the visitor meant. Why, and what is the fix?
6. A page creates 50 new textures every minute and never disposes of them. Predict what happens over an hour and say what to add.
7. The page runs at 60 fps on a desktop and 12 fps on a laptop. Name four things to try, in the order you would try them.
8. A colour texture looks washed out. What property was not set?
:::

:::answers
**Chapter 15, Practice Problems B.**

1. No environment map (so nothing to reflect): add `scene.environment`. Or roughness too high, or metalness too low: lower the roughness and raise the metalness.
2. `MeshBasicMaterial({ wireframe: true })`; `MeshLambertMaterial` (cheap, many objects); `MeshPhysicalMaterial` with `clearcoat: 1`; `MeshPhysicalMaterial` with `transmission: 1` and low roughness.
3. (3, 4, 0) has length 5, so l = (0.6, 0.8, 0); n · l = 0.8.
4. Merging turns 300 draw calls into 1, which usually makes a big difference to the frame rate. The cost is that the merged mesh is a single object: you cannot move, hide or highlight one part on its own. Instance instead when the parts are copies of the *same* geometry that must keep their own transforms (screws, particles).
5. The raycaster ignores `visible`, so the hidden mesh still intercepts the ray. Filter the list first: `ray.intersectObjects(meshes.filter(m => m.visible))`.
6. GPU memory grows by 50 textures a minute, 3 000 over an hour, until the page slows or crashes. Call `texture.dispose()` when a texture is no longer needed.
7. Measure `renderer.info.render.calls` and the frame time first. Then: cap the pixel ratio at 1 on that tier; disable post-processing and shadows (or shrink the shadow map); merge and instance to cut draw calls; share materials. Make it a tier that switches automatically when frames stay long.
8. `texture.colorSpace = THREE.SRGBColorSpace` (a colour map must be marked sRGB; data maps must not).
:::

## Mini Project: An Instrument You Can Take Apart

:::project A gearbox, posed, picked and exploded
Build a small gearbox from primitives and make it an instrument, using everything in this chapter.

1. **Parts from code.** A housing (a box with `ExtrudeGeometry` or merged boxes), two gears (`CylinderGeometry` with teeth made by instancing a small box around the rim with `InstancedMesh`), two shafts (`CylinderGeometry`), and four screws (instanced). Every dimension a named constant in metres.
2. **The tree.** Each gear in its own `Group` with the pivot on the shaft axis. One number, `angle`, poses both gears: the second turns the opposite way at the ratio of the tooth counts.
3. **Materials and light.** Standard materials for the housing and gears, a metallic one for the shafts, a `RoomEnvironment`, one directional light with shadows and a hemisphere fill. Tone mapping on.
4. **The loop.** A `Clock`, a clamped `dt`, `angle += speed * dt`, pose from `angle`, render only while visible. A slider sets `speed`.
5. **Explode.** A second number, `explode` from 0 to 1, moves each part along its own offset (Project 5's pattern). A slider drives it; the tour eases it.
6. **Picking.** A raycaster that ignores hidden parts, highlights the hit part with an emissive colour, and writes its name and dimension into a panel from `userData`.
7. **Speed.** Print `renderer.info.render.calls` in the panel and get it under 20. Cap the pixel ratio at 2; add a "lite" tier that drops shadows when the frame time stays over 25 ms for a second.
8. **Bundle** with esbuild and open it on the weakest device you can find.

Checks: the gears mesh without passing through each other (adjust a number, never the camera); the exploded view returns exactly to the assembled one; disposing the scene from the console frees memory (watch the GPU memory in the task manager); the page still shows a still frame under reduced motion.
:::

:::summary
- Renderer, scene, camera, light, loop: check them in that order when nothing appears. One unit (metres) everywhere.
- Resize sets the pixel ratio (capped), the size and the camera's aspect, then `updateProjectionMatrix()`. Leave colour management to the defaults; tune `toneMappingExposure`.
- The camera sees a frustum; keep near and far tight; an orbit camera is three numbers and a formula; fit with d = (H/2) / tan(fov/2).
- Geometry is typed arrays; transform at build time to bake parts into place and merge what shares a material.
- Pick materials by what they do with light; roughness and metalness, with an environment to reflect, do most of the work.
- Lights have physical intensities; shadows need three switches; `RoomEnvironment` through `PMREMGenerator` is the quick good environment.
- Groups give pivots and assemblies; pose everything from state each frame.
- Raycast through NDC with the y flipped; filter hidden meshes; put records in `userData`.
- Draw calls limit speed: merge, instance, share materials, cap the pixel ratio, use quality tiers, warm up shaders, dispose.
:::
