// Shared 3D kit for the pump, engine and CAD gallery pages: renderer with quality tiers, studio environment, orbit rig with pointer control,
// picking, and the "parts that slide apart" helper every exploded view uses. Frame budget rules from Chapter 2 of the guide apply.
import * as THREE from 'three';
export {THREE};
export const V3 = THREE.Vector3;
export const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
export const lerp = (a, b, t) => a + (b - a) * t;
export const smooth = (t) => { t = clamp(t, 0, 1); return t * t * (3 - 2 * t); };
export const ease = (k, a, b) => smooth((k - a) / (b - a));

const TIERS = [{pr: 1.75}, {pr: 1.3}, {pr: 1.0}, {pr: 0.75}];
export function startTier() {
  const forced = new URLSearchParams(location.search).get('tier'); if (forced) return clamp(+forced || 0, 0, 3);
  const coarse = matchMedia('(pointer: coarse)').matches, small = Math.min(innerWidth, innerHeight) < 700, cores = navigator.hardwareConcurrency || 4, mem = navigator.deviceMemory || 4;
  if (coarse || small) return 2; if (cores <= 4 || mem <= 4) return 1; return 0;
}

/** A stage: renderer + scene + camera + orbit rig. `tint` is the colour of the studio's rim light. */
export function createStage({canvas, fov = 32, tint = '#7dc8ff', exposure = 1.05, dist = 6, el = 0.35, az = 0.7, near = 0.05, far = 200, distRange = [1.5, 30], onTier}) {
  const tier = {i: startTier()};
  const renderer = new THREE.WebGLRenderer({canvas, antialias: true, alpha: true, powerPreference: 'high-performance'});
  renderer.setClearColor(0x000000, 0); renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = exposure; renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.localClippingEnabled = true;
  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  const env = new THREE.Scene();
  env.add(new THREE.Mesh(new THREE.SphereGeometry(40, 32, 16), new THREE.MeshBasicMaterial({color: new THREE.Color('#1a2140'), side: THREE.BackSide})));
  const panel = (w, h, pos, k, col = '#ffffff') => { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({color: new THREE.Color(col).multiplyScalar(k), side: THREE.DoubleSide})); m.position.set(...pos); m.lookAt(0, 0, 0); env.add(m); };
  panel(26, 16, [-12, 22, 14], 4.2); panel(5, 22, [20, 10, -10], 5.5, '#dfeaff'); panel(10, 10, [-20, 3, -16], 3, tint); panel(34, 34, [0, 36, 0], 1.2); panel(36, 8, [0, -9, 26], 1.4, tint);
  scene.environment = pmrem.fromScene(env, 0.015).texture; scene.environmentIntensity = 0.95;
  const camera = new THREE.PerspectiveCamera(fov, 1, near, far);
  const key = new THREE.DirectionalLight('#fff3e0', 2.1); key.position.set(4, 8, 6); scene.add(key);
  const rim = new THREE.DirectionalLight(tint, 0.8); rim.position.set(-6, 3, -5); scene.add(rim);
  scene.add(new THREE.HemisphereLight('#aab8ff', '#141830', 0.5));

  const rig = {az, el, dist, t: new V3()}, want = {az, el, dist, t: new V3()};
  let manual = false;
  const st = {renderer, scene, camera, rig, want, tier, manual: () => manual, resetManual: () => { manual = false; }, el: canvas, fov};
  function applyTier() { renderer.setPixelRatio(Math.min(devicePixelRatio || 1, TIERS[tier.i].pr)); st.resize(); if (onTier) onTier(tier.i); }
  st.resize = () => {
    const vp = canvas.parentElement, w = vp.clientWidth, h = vp.clientHeight; if (!w || !h) return;
    renderer.setSize(w, h, false); camera.aspect = w / h; camera.fov = w / h < 0.9 ? fov * 1.6 : fov; camera.updateProjectionMatrix(); if (st.onResize) st.onResize(w, h);
  };
  addEventListener('resize', st.resize); applyTier();
  // pointer control: drag to orbit, wheel to zoom, pinch with two fingers
  const ptrs = new Map(); let dragged = false, pinch = 0;
  canvas.addEventListener('pointerdown', (e) => { canvas.setPointerCapture(e.pointerId); ptrs.set(e.pointerId, [e.clientX, e.clientY]); dragged = false; canvas.classList.add('drag'); if (ptrs.size === 2) { const [a, b] = [...ptrs.values()]; pinch = Math.hypot(a[0] - b[0], a[1] - b[1]); } });
  canvas.addEventListener('pointermove', (e) => {
    st.mouse = [e.clientX, e.clientY];
    if (!ptrs.has(e.pointerId)) return;
    const prev = ptrs.get(e.pointerId); ptrs.set(e.pointerId, [e.clientX, e.clientY]);
    if (ptrs.size === 2) { const [a, b] = [...ptrs.values()], d = Math.hypot(a[0] - b[0], a[1] - b[1]); want.dist = clamp(want.dist * pinch / d, distRange[0], distRange[1]); pinch = d; dragged = true; return; }
    const dx = e.clientX - prev[0], dy = e.clientY - prev[1]; if (Math.abs(dx) + Math.abs(dy) > 1) dragged = true;
    if (!manual) { want.az = rig.az; manual = true; }
    want.az += dx * 0.008; want.el = clamp(want.el + dy * 0.006, -0.2, 1.45);
  });
  const up = (e) => { ptrs.delete(e.pointerId); if (!ptrs.size) canvas.classList.remove('drag'); if (st.onClick && !dragged && e.type === 'pointerup') st.onClick(e.clientX, e.clientY); };
  canvas.addEventListener('pointerup', up); canvas.addEventListener('pointercancel', up);
  canvas.addEventListener('wheel', (e) => { e.preventDefault(); want.dist = clamp(want.dist * Math.exp(e.deltaY * 0.0012), distRange[0], distRange[1]); }, {passive: false});
  // picking: nearest visible mesh under the pointer
  const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
  st.pick = (cx, cy, objects) => {
    const r = canvas.getBoundingClientRect(); ndc.set(((cx - r.left) / r.width) * 2 - 1, -((cy - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    const vis = (o) => { for (let n = o; n; n = n.parent) if (!n.visible) return false; return true; };
    const hits = ray.intersectObjects(objects.filter(vis), false); return hits.length ? hits[0] : null;
  };
  st.project = (v, out = new V3()) => { out.copy(v).project(camera); const r = canvas.getBoundingClientRect(); return [(out.x * 0.5 + 0.5) * r.width, (-out.y * 0.5 + 0.5) * r.height, out.z]; };
  st.camStep = (dt, now, opts = {}) => {
    const k = 1 - Math.exp(-dt * (opts.snap || 4));
    if (!manual && opts.drift) want.az = (opts.az0 ?? az) + opts.drift * Math.sin(now / 1000 * 0.12);
    rig.az += (want.az - rig.az) * k; rig.el += (want.el - rig.el) * k; rig.dist += (want.dist - rig.dist) * k; rig.t.lerp(want.t, 1 - Math.exp(-dt * 5));
    const ce = Math.cos(rig.el);
    camera.position.set(rig.t.x + rig.dist * ce * Math.cos(rig.az), rig.t.y + rig.dist * Math.sin(rig.el), rig.t.z + rig.dist * ce * Math.sin(rig.az)); camera.lookAt(rig.t);
  };
  // frame loop: only while on screen, with adaptive quality (steps down a tier when frames stay long)
  st.loop = (frame) => {
    let visible = true, last = performance.now(), slow = 0, running = false;
    new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible && !running) { last = performance.now(); running = true; requestAnimationFrame(tick); } }).observe(canvas.parentElement);
    function tick(now) {
      if (!visible || document.hidden) { running = false; if (document.hidden) { const r = () => { if (!document.hidden) { running = true; last = performance.now(); requestAnimationFrame(tick); } else setTimeout(r, 250); }; r(); } return; }
      const dt = Math.max(0, Math.min((now - last) / 1000, 0.1)); last = now;
      slow = dt > 0.04 ? slow + dt : Math.max(0, slow - dt * 2);
      if (slow > 1.5 && tier.i < 3) { tier.i++; slow = 0; applyTier(); }
      frame(dt, now); renderer.render(scene, camera); requestAnimationFrame(tick);
    }
    running = true; requestAnimationFrame(tick);
  };
  return st;
}

/** Parts that slide apart. Each part: {id, name, desc, group, home?: V3, out: [x,y,z], a?, b?}. u from 0 (assembled) to 1 (exploded). */
export function exploder(parts) {
  for (const p of parts) { p.home = p.home || p.group.position.clone(); p.outV = new V3(...p.out); p.a = p.a ?? 0; p.b = p.b ?? 1; }
  return (u) => { for (const p of parts) p.group.position.copy(p.home).addScaledVector(p.outV, ease(u, p.a, p.b)); };
}

export const mat = (color, o = {}) => new THREE.MeshPhysicalMaterial({color, roughness: 0.45, metalness: 0, ...o});

/** A loft: a closed cross-section sampled along an axis. fn(t, a) -> [y, z] for t in 0..1 along x, a angle 0..2pi. Returns a BufferGeometry along +x. */
export function loft(fn, length, nx = 48, na = 40, x0 = 0) {
  const pos = [], idx = [];
  for (let i = 0; i <= nx; i++) { const t = i / nx; for (let j = 0; j <= na; j++) { const [y, z] = fn(t, (j / na) * Math.PI * 2); pos.push(x0 + t * length, y, z); } }
  for (let i = 0; i < nx; i++) for (let j = 0; j < na; j++) { const a = i * (na + 1) + j, b = a + na + 1; idx.push(a, b, a + 1, b, b + 1, a + 1); }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals(); return g;
}

/** An extruded 2D shape with holes. outline: [[x,y]...]; holes: [{x,y,r}] */
export function plate(outline, holes, depth, bevel = 0) {
  const s = new THREE.Shape(); outline.forEach(([x, y], i) => (i ? s.lineTo(x, y) : s.moveTo(x, y))); s.closePath();
  for (const h of holes || []) { const p = new THREE.Path(); p.absarc(h.x, h.y, h.r, 0, Math.PI * 2, true); s.holes.push(p); }
  const g = new THREE.ExtrudeGeometry(s, {depth, bevelEnabled: bevel > 0, bevelSize: bevel, bevelThickness: bevel, bevelSegments: 1, curveSegments: 16});
  g.translate(0, 0, -depth / 2); return g;
}
