# Project 3: An Animated Scroll Story (CSS, IntersectionObserver, GSAP)

**Level:** intermediate. **You will use:** Chapters 6, 10, 11 and 14. **You will finish with:** a page where sections fade up as you scroll to them, built twice: first by hand, then with GSAP.

Building it twice is the point. The by-hand version teaches you what is happening. The GSAP version shows you what the library saves you from writing.

## Step 1: The Hidden State in CSS

Start with a page of four `<section class="reveal">` blocks, each tall enough to need scrolling. Give them a hidden starting look and a "shown" look.

```
.reveal { opacity: 0; transform: translateY(30px);
          transition: opacity 600ms ease, transform 600ms ease; }
.reveal.shown { opacity: 1; transform: none; }

@media (prefers-reduced-motion: reduce) {
    .reveal { opacity: 1; transform: none; transition: none; }
}
```

:::why Putting the animation in CSS and the trigger in JavaScript
**What it is.** CSS describes the two looks and the transition between them. JavaScript only adds the class `shown`.

**Why it is done this way.** This is the three-jobs rule from Chapter 3: looks in CSS, behaviour in JavaScript.

**Why it matters.** A designer can change the timing or the distance without touching a line of script.

**What happens if you do not.** If you animate in JavaScript every frame, you take on the work (and the bugs) the browser already knows how to do.
:::

:::why The reduced-motion block
**What it is.** When the visitor asks for less motion, the sections are simply visible, with no transition.

**Why it is done this way.** Chapter 6's rule: honour the request.

**Why it matters.** It keeps the content readable for everyone, including people the animation would make ill.

**What happens if you do not.** Those visitors get an animation they asked not to have.
:::

## Step 2: Noticing When a Section Appears

You could listen for scroll events and measure positions, but there is a better tool. An **IntersectionObserver** tells you when an element enters or leaves the viewport.

```
const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            entry.target.classList.add('shown');
            observer.unobserve(entry.target);     // only the first time
        }
    }
}, { threshold: 0.2 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
```

:::why IntersectionObserver instead of a scroll listener
**What it is.** The browser watches the elements for you and calls your function only when something changes.

**Why it is done this way.** A scroll listener runs on every scroll tick (dozens of times a second), and measuring positions inside it forces layout (Chapter 2's layout thrashing).

**Why it matters.** The observer does the measuring off your code's critical path. Your function runs a handful of times in total.

**What happens if you do not.** A page with many scroll-watching elements stutters while you scroll, which is the one time smoothness matters most.
:::

:::why unobserve after the first time
**What it is.** Once a section is revealed, stop watching it.

**Why it is done this way.** The reveal is a one-time event.

**Why it matters.** Less work for the observer, and sections do not hide again and flicker if you scroll back.

**What happens if you do not.** The animation repeats every time a section crosses the edge of the screen, which most people find distracting.
:::

## Step 3: The Same Page with GSAP

Load GSAP and ScrollTrigger (Chapter 14) and delete the observer. Replace it with:

```
gsap.registerPlugin(ScrollTrigger);
const mm = gsap.matchMedia();
mm.add('(prefers-reduced-motion: no-preference)', () => {
    gsap.utils.toArray('.reveal').forEach(el => {
        gsap.from(el, { opacity: 0, y: 30, duration: 0.6,
                        scrollTrigger: { trigger: el, start: 'top 80%', once: true } });
    });
});
```

(Remove the `.reveal` hidden CSS too, or GSAP's start values will fight it.)

:::why Comparing the two versions
**What it is.** The hand-made version is about 15 lines of JavaScript and 8 of CSS. The GSAP version is 8 lines of JavaScript.

**Why it is done this way.** The library's value is not that it can do something you cannot, but that it has already handled the awkward cases (mid-scroll refreshes, resizing, reduced motion, cleanup).

**Why it matters.** Knowing both means you can choose. For a handful of simple fades, the by-hand version is lighter. For a long choreographed sequence, GSAP saves a lot of time.

**What happens if you do not.** You either reinvent a timeline engine for a complicated page, or load a whole library to fade in four paragraphs.
:::

:::quiz Project 3
1. Which language describes the "hidden" and "shown" looks, and which one adds the class?
2. What is the advantage of `IntersectionObserver` over a scroll listener?
3. Why does the code call `unobserve` after revealing a section?
4. What does `start: 'top 80%'` mean?
5. For four simple fades, which version would you choose, and why?
:::

:::answers
**Project 3 quiz.**

1. CSS describes the looks; JavaScript adds the class `shown`.
2. It runs only when visibility changes and does not force layout on every scroll tick, so scrolling stays smooth.
3. The reveal is a one-time event; stopping the observation saves work and stops the animation repeating.
4. The animation starts when the top of the element reaches 80% of the way down the viewport.
5. The by-hand version: it is small, needs no library, and the effect is simple. (GSAP pays off for complicated sequences.)
:::

# Project 4: An Interactive Physics Chart (Canvas 2D)

**Level:** intermediate to advanced. **You will use:** Chapters 4, 6, 7 and 13. **You will finish with:** a chart of a damped oscillation with sliders, and a dot that traces the curve in real time.

A damped oscillation is the maths behind a car's suspension, a swinging door, and (on this website) the phugoid and short-period motions of an aircraft. The equation is

**x(t) = e^{−ζ ωₙ t} · cos(ω_d t),    where ω_d = ωₙ √(1 − ζ²)**

Here ωₙ is the natural frequency (how fast it would swing with no damping) and ζ ("zeta") is the damping ratio (0 means it swings forever, 1 means it just settles with no swing).

## Step 1: Check the Numbers by Hand First

:::worked What should the chart show?
Take ζ = 0.5 and ωₙ = 2 rad/s. Predict three things before you write any code.

**Step 1. The damped frequency.** ω_d = 2 × √(1 − 0.25) = 2 × 0.8660 = 1.732 rad/s.

**Step 2. The period.** T = 2π / ω_d = 6.2832 / 1.732 = 3.628 s. That is the time between successive peaks.

**Step 3. How fast it dies.** The envelope is e^{−ζ ωₙ t} = e^{−t}. After one period, the next peak has fallen to e^{−3.628} = 0.0266, about 2.7% of the first.

**Step 4. Time to settle.** The envelope falls to 2% when e^{−t} = 0.02, so t = −ln 0.02 = 3.91 s.

**Why do this first?** When your chart appears, you will compare it with these numbers. If the second peak is not at 3.63 s and about 0.027 high, your code or your understanding is wrong, and you will know straight away which to suspect.
:::

## Step 2: The Page

```
<canvas id="chart" style="width:100%; height:300px"></canvas>
<label>Damping ζ <input id="zeta" type="range" min="0.02" max="1.5" step="0.01" value="0.5"></label>
<label>Frequency ωn <input id="wn" type="range" min="0.5" max="6" step="0.1" value="2"></label>
```

## Step 3: Computing the Curve

```
function x(t, zeta, wn) {
    if (zeta < 1) {
        const wd = wn * Math.sqrt(1 - zeta * zeta);
        return Math.exp(-zeta * wn * t) * Math.cos(wd * t);
    }
    // zeta >= 1: no oscillation, a simple decay (a good enough picture)
    return Math.exp(-wn * t * (zeta - Math.sqrt(zeta * zeta - 1)));
}
```

:::why Keeping the maths in its own function
**What it is.** `x(t, zeta, wn)` takes numbers and returns a number. It touches no canvas.

**Why it is done this way.** A pure function (Chapter 11) is easy to test and reuse.

**Why it matters.** You can check `x(3.628, 0.5, 2)` in the Console against your hand prediction (0.0266) *before* drawing anything. The Patrick and flight dynamics pages do the same: the physics lives in one file, the drawing in another.

**What happens if you do not.** The maths gets tangled with the drawing, and you cannot tell whether a wrong picture is a maths bug or a drawing bug.
:::

:::warning
The `zeta >= 1` branch above is the *overdamped* case, and the formula shown is a simplification of the slower decaying part, good enough to draw a convincing curve. A full treatment gives a sum of two exponentials. Do not use this simplification for engineering calculations.
:::

## Step 4: Drawing It

```
const canvas = document.querySelector('#chart');
const zIn = document.querySelector('#zeta'), wIn = document.querySelector('#wn');
let t0 = performance.now();

function fit() {                                  // Chapter 4
    const dpr = devicePixelRatio || 1, w = canvas.clientWidth, h = canvas.clientHeight;
    if (canvas.width !== Math.round(w * dpr)) { canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr); }
    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    return { ctx, w, h };
}

function draw(now) {
    const { ctx, w, h } = fit();
    const zeta = +zIn.value, wn = +wIn.value, T = 10;           // show 10 seconds
    const X = t => 40 + t / T * (w - 60);
    const Y = v => h / 2 - v * (h / 2 - 20);                     // v in -1..1, y flipped
    ctx.strokeStyle = 'rgba(255,255,255,0.2)';
    ctx.beginPath(); ctx.moveTo(40, Y(0)); ctx.lineTo(w - 20, Y(0)); ctx.stroke();   // zero line
    ctx.strokeStyle = '#60a5fa'; ctx.lineWidth = 2; ctx.beginPath();
    for (let i = 0; i <= 400; i++) {
        const t = i / 400 * T;
        i ? ctx.lineTo(X(t), Y(x(t, zeta, wn))) : ctx.moveTo(X(t), Y(x(t, zeta, wn)));
    }
    ctx.stroke();
    const tt = ((now - t0) / 1000) % T;                            // a dot that moves along it
    ctx.fillStyle = '#e879f9';
    ctx.beginPath(); ctx.arc(X(tt), Y(x(tt, zeta, wn)), 5, 0, 7); ctx.fill();
    requestAnimationFrame(draw);
}
requestAnimationFrame(draw);
```

Move the damping slider to 0.02 and you should see a long ringing oscillation. At 1.5 you should see a smooth decay with no swing. At 0.5 and ωₙ = 2, the second positive peak should land at 3.63 seconds on the time axis and be nearly invisible.

:::why Redrawing the whole chart every frame
**What it is.** `draw` recomputes the curve from the sliders on every frame.

**Why it is done this way.** Chapter 5's *screen = render(state)*. The sliders *are* the state.

**Why it matters.** There is no "slider changed" code. Moving a slider just changes a number that the next frame reads.

**What happens if you do not.** You write update code for every control, and one slider is always forgotten.
:::

:::quiz Project 4
1. With ζ = 0.1 and ωₙ = 2, what is the damped frequency? What is the period?
2. By what factor does each successive peak shrink for ζ = 0.1 and ωₙ = 2?
3. Why do the maths and the drawing live in separate functions?
4. Why is the y mapping `h / 2 - v * (h / 2 - 20)`?
5. What does the dot's position depend on, and why is it frame-rate independent?
:::

:::answers
**Project 4 quiz.**

1. ω_d = 2 × √(1 − 0.01) = 2 × 0.99499 = 1.990 rad/s. Period = 2π / 1.990 = 3.157 s.
2. Each peak is e^{−2πζ/√(1−ζ²)} = e^{−0.6314} = 0.532 of the previous one, so only about 47% is lost per cycle.
3. A pure maths function can be checked on its own against hand calculations, and a wrong picture can then be blamed on the drawing and not the maths.
4. It maps v = 0 to the vertical middle (`h / 2`) and v = ±1 to 20 pixels from the top and bottom. The subtraction flips the axis, because canvas y increases downward.
5. It depends on the clock (`now − t0`), not on a frame count, so it moves at the same speed on any screen (Chapter 6).
:::

# Project 5: A 3D Model You Can Take Apart (three.js)

**Level:** advanced. **You will use:** Chapters 5, 7, 15 and 16. **You will finish with:** a small 3D model made of parts, with a slider that explodes it, and a panel that describes whatever part you click. This is the idea of the Patrick page in miniature.

## Step 1: Plan the Data First

As in Project 2, the model is described by *data*, then drawn from it.

```
const PARTS = [
    { id: 'base',  name: 'Base plate', desc: 'Everything bolts to this.', size: [1.4, 0.06, 0.9], at: [0, 0, 0],    out: [0, 0, 0],    color: '#222' },
    { id: 'motor', name: 'Motor',      desc: 'Turns the wheel.',          size: [0.5, 0.2, 0.2],  at: [0, 0.15, 0.4], out: [0, 0, 0.7],  color: '#f2b400' },
    { id: 'arm',   name: 'Arm',        desc: 'Reaches out to grip.',      size: [0.12, 0.8, 0.12], at: [-0.5, 0.45, 0], out: [0, 0.9, 0], color: '#f2b400' },
];
```

Each part has a size, a resting position (`at`), and an **explode offset** (`out`), the direction it moves when the model is taken apart.

:::why Describing the parts as data
**What it is.** A list of objects with name, description, size, position, and explode direction.

**Why it is done this way.** The name and description are used by the panel, and the size and position by the 3D view. One list serves both.

**Why it matters.** The part you click and the description you read cannot disagree, because they come from the same record. Adding a part is one more line.

**What happens if you do not.** You make meshes in one place and write descriptions in another, and the two lists drift apart.
:::

## Step 2: The Scene

```
import * as THREE from 'three';

const canvas = document.querySelector('#gl');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(36, 1, 0.05, 50);
camera.position.set(2.2, 1.6, 2.6); camera.lookAt(0, 0.3, 0);
scene.add(new THREE.HemisphereLight('#ffffff', '#223', 1.2));
const sun = new THREE.DirectionalLight('#ffffff', 2); sun.position.set(3, 4, 2); scene.add(sun);

const meshes = [];
for (const p of PARTS) {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(...p.size),
                                new THREE.MeshStandardMaterial({ color: p.color, roughness: 0.5 }));
    mesh.userData = p;                       // remember which part this mesh is
    mesh.position.set(...p.at);
    scene.add(mesh); meshes.push(mesh);
}
```

:::why Storing the part record on the mesh
**What it is.** `mesh.userData = p`.

**Why it is done this way.** When the visitor clicks, the raycaster gives you back a *mesh*. You need to know which part that is.

**Why it matters.** `hit.object.userData.desc` is the description, with no lookup table.

**What happens if you do not.** You search the list by position or colour, which breaks the moment two parts are alike.
:::

## Step 3: Explode and Resize

```
let explode = 0;                              // 0 together, 1 fully apart
function layout() {
    meshes.forEach(m => {
        const p = m.userData;
        m.position.set(p.at[0] + p.out[0] * explode, p.at[1] + p.out[1] * explode, p.at[2] + p.out[2] * explode);
    });
}
document.querySelector('#explode').addEventListener('input', e => { explode = +e.target.value; });

function resize() {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix();
}
addEventListener('resize', resize); resize();
```

:::why Computing every position from one number
**What it is.** The position of each part is `at + out × explode`, recomputed from the single value `explode`.

**Why it is done this way.** Chapter 5 again: one source of truth.

**Why it matters.** The slider, a "Take apart" button and an automatic tour can all just set `explode`, and the model follows. This is exactly how the Patrick page works, with one number driving the whole teardown.

**What happens if you do not.** Every control has to move each mesh by hand, and a part always gets left behind.
:::

## Step 4: Picking and the Panel

```
const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
canvas.addEventListener('click', e => {
    const r = canvas.getBoundingClientRect();
    ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    const hit = ray.intersectObjects(meshes)[0];
    const panel = document.querySelector('#panel');
    panel.textContent = hit ? hit.object.userData.name + ': ' + hit.object.userData.desc : 'Click a part.';
});

(function loop() { layout(); renderer.render(scene, camera); requestAnimationFrame(loop); })();
```

## Step 5: Bundle and Run

With `three` installed (Chapter 16) run `npx esbuild main.js --bundle --minify --format=iife --outfile=app.js`, add `<script src="app.js">` to a page that has a `<canvas id="gl">`, an `<input id="explode" type="range" min="0" max="1" step="0.01" value="0">` and a `<p id="panel">`. Open it, drag the slider, and click the parts.

:::tip
If the screen is black, check in order: is there a light? Is the camera looking at the model? Is the canvas given a size in CSS (a canvas with no height shows nothing)? Is the render call inside the loop?
:::

:::quiz Project 5
1. Why does each mesh carry its part record in `userData`?
2. What single value drives the whole teardown, and why is that good?
3. What two conversions does the click handler make before using the raycaster?
4. If the canvas looks stretched after resizing, which line did you forget?
5. How would you add a fourth part?
:::

:::answers
**Project 5 quiz.**

1. A raycast hit returns a mesh, and `userData` tells you which part it is and what its description is, with no search.
2. `explode`. Because every position is computed from it, any control (slider, button, tour) can drive the model by setting that one number.
3. It converts the pointer position to normalised device coordinates (−1 to 1) and flips the y axis, because the screen's y goes down and the camera's goes up.
4. `camera.updateProjectionMatrix()` after setting the aspect ratio.
5. Add one more object to `PARTS` with a size, position, explode offset, colour and description. No other code changes.
:::
