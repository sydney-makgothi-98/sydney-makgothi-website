// Patrick: the teardown page. One model (model.js) drives the 3D pose, every gauge and every chart.
// Left alone, the page tours itself (take it apart, open each system, show its graph); any input hands control over,
// 25 s of quiet hands it back.
import * as THREE from 'three';
import {EffectComposer} from 'three/addons/postprocessing/EffectComposer.js';
import {RenderPass} from 'three/addons/postprocessing/RenderPass.js';
import {GTAOPass} from 'three/addons/postprocessing/GTAOPass.js';
import {OutputPass} from 'three/addons/postprocessing/OutputPass.js';
import * as M from './model.js';
import {buildRobot, PALETTE} from './robot.js';
import {INFO, TAGS} from './parts.js';
import * as C from './charts.js';

// The teardown lab is below the full-screen kitchen, so it is only built when the visitor scrolls near it (entry.js calls start()).
export function start() {

const $ = (id) => document.getElementById(id);
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
const D2R = Math.PI / 180;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const V3 = THREE.Vector3;
const IDLE = 25;
const COL = C.COL;

/* ------------------------------------------------------------------ settings (what the visitor can change) --- */
const S = {bands: true, surf: 'desk', duty: 0.7, follow: true, d: 1.0, psi: 0, wall: 'card', sonarViz: true, play: true, u: 0, uT: 0, sel: null, hover: null, iso: false, tab: 'dyn'};

/* ---------------------------------------------------------------------------------------------- renderer ---- */
const stageEl = $('stage'), canvas = $('gl');
const renderer = new THREE.WebGLRenderer({canvas, antialias: true, powerPreference: 'high-performance'});
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;

const scene = new THREE.Scene();
scene.background = new THREE.Color('#0a0f26');
scene.fog = new THREE.Fog('#0a0f26', 2.2, 5.5);
const pmrem = new THREE.PMREMGenerator(renderer);
// a photographic studio to reflect: one big softbox over the front-left, a strip light behind-right, a warm fill, a dim dome
function studioEnv() {
  const s = new THREE.Scene();
  const dome = new THREE.Mesh(new THREE.SphereGeometry(12, 32, 16), new THREE.MeshBasicMaterial({color: new THREE.Color('#1d2442'), side: THREE.BackSide}));
  s.add(dome);
  const panel = (w, h, pos, look, k, col = '#ffffff') => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({color: new THREE.Color(col).multiplyScalar(k), side: THREE.DoubleSide}));
    m.position.set(...pos); m.lookAt(...look); s.add(m);
  };
  panel(7, 5, [-4, 7, -5], [0, 0, 0], 4.2);
  panel(1.4, 7, [6, 3, 4], [0, 0, 0], 5.5, '#dbe7ff');
  panel(3, 3, [-6, 2, 5], [0, 0, 0], 3.2, '#ffd9b0');
  panel(10, 10, [0, 11, 0], [0, 0, 0], 1.1);
  panel(12, 3, [0, -2.5, -8], [0, 0, 0], 0.9, '#8aa0ff');
  return pmrem.fromScene(s, 0.015).texture;
}
scene.environment = studioEnv();
scene.environmentIntensity = 0.9;
const camera = new THREE.PerspectiveCamera(36, 1, 0.05, 9);

const key = new THREE.DirectionalLight('#fff3e0', 2.3);
key.position.set(0.9, 1.6, -0.7);
key.castShadow = true;
key.shadow.camera.left = -0.55; key.shadow.camera.right = 0.55; key.shadow.camera.top = 0.55; key.shadow.camera.bottom = -0.55;
key.shadow.camera.near = 0.2; key.shadow.camera.far = 4; key.shadow.bias = -0.0004; key.shadow.normalBias = 0.002;
scene.add(key, key.target);
const fill = new THREE.DirectionalLight('#9db7ff', 0.7); fill.position.set(-1, 0.8, 1); scene.add(fill);
scene.add(new THREE.HemisphereLight('#aab8ff', '#1a1530', 0.55));

/* post: the scene into a multisampled half-float target, ambient occlusion for contact shadows, then tone mapping */
const rt = new THREE.WebGLRenderTarget(4, 4, {type: THREE.HalfFloatType, samples: 4});
const composer = new EffectComposer(renderer, rt);
composer.addPass(new RenderPass(scene, camera));
const gtao = new GTAOPass(scene, camera, 4, 4);
gtao.output = GTAOPass.OUTPUT.Default;
gtao.updateGtaoMaterial({radius: 0.035, distanceExponent: 1.2, thickness: 0.6, scale: 1.25, samples: 14, distanceFallOff: 1, screenSpaceRadius: false});
gtao.updatePdMaterial({lumaPhi: 10, depthPhi: 2, normalPhi: 3, radius: 5, radiusExponent: 1, rings: 2, samples: 12});
composer.addPass(gtao);
composer.addPass(new OutputPass());
let useComposer = true;

/* -------------------------------------------------------------------------------------------- the table ----- */
function gridTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 512;
  const g = c.getContext('2d');
  g.fillStyle = '#171c3a'; g.fillRect(0, 0, 512, 512);
  for (let i = 0; i < 700; i++) { g.fillStyle = `rgba(255,255,255,${Math.random() * 0.025})`; g.fillRect(Math.random() * 512, Math.random() * 512, 30 + Math.random() * 70, 1); }
  g.strokeStyle = 'rgba(167,139,250,0.22)'; g.lineWidth = 2; g.strokeRect(1, 1, 510, 510);
  g.strokeStyle = 'rgba(167,139,250,0.08)'; g.lineWidth = 1;
  for (let i = 1; i < 5; i++) { g.beginPath(); g.moveTo(i * 102.4, 0); g.lineTo(i * 102.4, 512); g.moveTo(0, i * 102.4); g.lineTo(512, i * 102.4); g.stroke(); }
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(10, 8); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return t;
}
const table = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 2.08), new THREE.MeshStandardMaterial({map: gridTexture(), color: '#8f96c0', roughness: 0.6, metalness: 0.05}));
table.rotation.x = -Math.PI / 2; table.position.set(0.1, 0, 0); table.receiveShadow = true;
scene.add(table);
const SIDE = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.04, 2.08), new THREE.MeshStandardMaterial({color: '#0e1230', roughness: 0.8}));
SIDE.position.set(0.1, -0.0205, 0); scene.add(SIDE);

const wood = new THREE.MeshStandardMaterial({color: '#b98e5c', roughness: 0.75});
const props = new THREE.Group(); scene.add(props);
const wz = (z) => -z;                                           // model z (left) -> three z
function box(w, h, d, mat, x, y, z) { const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat); m.position.set(x, y, z); m.castShadow = m.receiveShadow = true; props.add(m); return m; }
const cr = M.WORLD.crate, tr = M.WORLD.tray;
box(cr.hx * 2, cr.h, cr.hz * 2, wood, cr.x, cr.h / 2, wz(cr.z));
box(tr.hx * 2, tr.h, tr.hz * 2, wood, tr.x, tr.h / 2, wz(tr.z));
{ const plate = new THREE.Mesh(new THREE.CylinderGeometry(0.036, 0.032, 0.006, 40), new THREE.MeshStandardMaterial({color: '#ece9e2', roughness: 0.3}));
  plate.position.set(tr.x, tr.h + 0.003, wz(tr.z)); plate.castShadow = plate.receiveShadow = true; props.add(plate); }
// scenery for the breakfast table: toast, an orange, a cup
box(0.05, 0.008, 0.05, new THREE.MeshStandardMaterial({color: '#d9a85a', roughness: 0.9}), cr.x + 0.01, 0.004, wz(cr.z + 0.17));
{ const o = new THREE.Mesh(new THREE.SphereGeometry(0.02, 24, 16), new THREE.MeshStandardMaterial({color: '#f08a1c', roughness: 0.6})); o.position.set(cr.x - 0.03, 0.02, wz(cr.z - 0.16)); o.castShadow = true; props.add(o); }
{ const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.016, 0.04, 28), new THREE.MeshStandardMaterial({color: '#e8e4dc', roughness: 0.3})); cup.position.set(tr.x - 0.09, 0.02, wz(tr.z + 0.05)); cup.castShadow = true; props.add(cup); }
// the arena back wall the sonar can see (cardboard)
box(0.012, 0.12, 1.4, new THREE.MeshStandardMaterial({color: '#a8825a', roughness: 0.9}), M.WORLD.wall.x + 0.006, 0.06, 0);
const egg = new THREE.Mesh(new THREE.SphereGeometry(1, 28, 20), new THREE.MeshStandardMaterial({color: '#f1e6cf', roughness: 0.4}));
egg.scale.set(0.0155, 0.0225, 0.0155); egg.castShadow = true; scene.add(egg);

/* ---------------------------------------------------------------------------------------------- the robot --- */
const robot = buildRobot();
scene.add(robot.root);
const byId = robot.byId;

/* sonar beam shown in 3D: a translucent wedge and rings that travel out at 40 kHz's speed of sound, slowed for the eye */
const sonarViz = new THREE.Group(); robot.root.add(sonarViz); sonarViz.position.set(M.R.sensorX + 0.008, M.R.sensorY, 0);
const wedgeGeo = new THREE.BufferGeometry();
{
  const n = 16, v = [0, 0, 0];
  for (let i = 0; i <= n; i++) { const a = (i / n * 2 - 1) * M.SOUND.beam; v.push(Math.cos(a), 0, Math.sin(a)); }
  const idx = []; for (let i = 1; i <= n; i++) idx.push(0, i, i + 1);
  wedgeGeo.setAttribute('position', new THREE.Float32BufferAttribute(v, 3)); wedgeGeo.setIndex(idx);
}
const wedge = new THREE.Mesh(wedgeGeo, new THREE.MeshBasicMaterial({color: '#60a5fa', transparent: true, opacity: 0.1, side: THREE.DoubleSide, depthWrite: false}));
sonarViz.add(wedge);
const arcGeo = (() => { const p = []; for (let i = 0; i <= 24; i++) { const a = (i / 24 * 2 - 1) * M.SOUND.beam; p.push(new V3(Math.cos(a), 0, Math.sin(a))); } return new THREE.BufferGeometry().setFromPoints(p); })();
const rings = [0, 1, 2].map(() => { const l = new THREE.Line(arcGeo, new THREE.LineBasicMaterial({color: '#7dd3fc', transparent: true, opacity: 0.5, depthWrite: false})); sonarViz.add(l); return l; });
const hitDot = new THREE.Mesh(new THREE.SphereGeometry(0.006, 12, 8), new THREE.MeshBasicMaterial({color: '#f472b6'})); sonarViz.add(hitDot);

/* ------------------------------------------------------------------------------------- mission + caches ----- */
let run = M.runMission({bands: S.bands, surf: S.surf, duty: S.duty});
let tRun = 0, hold = 0;
const cache = {};
function rebuildCache() {
  cache.stepOn = M.stepTest({bands: true, surf: S.surf, duty: 1});
  cache.stepOff = M.stepTest({bands: false, surf: S.surf, duty: 1});
  cache.tracOn = M.tractive({bands: true, surf: S.surf, duty: 1});
  cache.tracOff = M.tractive({bands: false, surf: S.surf, duty: 1});
  cache.power = [0.4, 0.7, 1.0].map((d) => M.powerCurve(d, S.bands));
  cache.powerSel = M.powerCurve(S.duty, S.bands);
  cache.ranges = Object.keys(M.WALLS).map((k) => [k, M.maxRangeOf(k)]);
}
function restartRun() {
  run = M.runMission({bands: S.bands, surf: S.surf, duty: S.duty});
  tRun = 0; hold = 0;
  $('r-dur').textContent = run.duration.toFixed(1) + ' s';
  rebuildCache();
  drawAllCharts(true);
}

/* --------------------------------------------------------------------------------------------- camera rig --- */
const VIEWS = {
  hero: {az: -50, el: 20, dist: 0.9, at: 'robot'},
  side: {az: -90, el: 5, dist: 0.7, at: 'robot'},
  top: {az: -90, el: 84, dist: 0.78, at: 'robot'},
  front: {az: 8, el: 10, dist: 0.5, at: 'sonar'},
  arm: {az: -75, el: 14, dist: 0.5, at: 'arm'},
  wheel: {az: -105, el: 9, dist: 0.3, at: 'wheelL'},
};
const rig = {az: -50 * D2R, el: 20 * D2R, dist: 0.9, t: new V3(0, 0.08, 0)};
const want = {az: rig.az, el: rig.el, dist: rig.dist, mode: 'robot'};
let curView = 'hero', focusPart = null;
function setView(name, quiet) {
  const v = VIEWS[name]; if (!v) return;
  curView = name; focusPart = null; if (!quiet) S.sel = S.sel; // keep selection
  want.az = v.az * D2R; want.el = v.el * D2R; want.dist = v.dist; want.mode = v.at;
  document.querySelectorAll('#views .chip').forEach((b) => b.classList.toggle('on', b.dataset.view === name));
}
const partCenter = (id, out) => { const b = new THREE.Box3().setFromObject(byId[id].group); b.getCenter(out); return b; };
const tmpV = new V3(), tmpB = new THREE.Box3();
function targetPoint() {
  const rp = robot.root.position;
  if (S.sel && byId[S.sel]) { const b = new THREE.Box3().setFromObject(byId[S.sel].group); b.getCenter(tmpV); return tmpV; }
  switch (want.mode) {
    case 'sonar': return tmpV.set(rp.x, 0.05, rp.z).add(new V3(0.07, 0, 0).applyAxisAngle(new V3(0, 1, 0), robot.root.rotation.y));
    case 'arm': partCenter('arm', tmpV); return tmpV;
    case 'wheelL': partCenter('wheelL', tmpV); return tmpV;
    default: return tmpV.set(rp.x, 0.115 + S.u * 0.06, rp.z).add(new V3(0.03, 0, 0).applyAxisAngle(new V3(0, 1, 0), robot.root.rotation.y));
  }
}
function selDist() {
  if (!S.sel || !byId[S.sel]) return null;
  const b = new THREE.Box3().setFromObject(byId[S.sel].group), s = b.getSize(new V3());
  return clamp(Math.max(s.x, s.y, s.z) * 3.2 + 0.1, 0.22, 0.7);
}
function stepCamera(dt) {
  const k = 1 - Math.exp(-dt * 5.5);
  const sd = selDist();
  const td = sd ?? want.dist * (1 + 0.55 * S.u);
  rig.az += (want.az - rig.az) * k; rig.el += (want.el - rig.el) * k; rig.dist += (td - rig.dist) * k;
  rig.t.lerp(targetPoint(), 1 - Math.exp(-dt * 6));
  const ce = Math.cos(rig.el);
  camera.position.set(rig.t.x + rig.dist * ce * Math.cos(rig.az), rig.t.y + rig.dist * Math.sin(rig.el), rig.t.z + rig.dist * ce * Math.sin(rig.az));
  camera.lookAt(rig.t);
}

/* ------------------------------------------------------------------------------------------ resize/tiers ---- */
const TIERS = [{pr: 1.6, shadow: 2048, post: 2}, {pr: 1.3, shadow: 1024, post: 1}, {pr: 1, shadow: 512, post: 0}];
let tier = matchMedia('(pointer: coarse)').matches || Math.min(innerWidth, innerHeight) < 700 ? 2 : 0;
function applyTier() {
  const t = TIERS[tier];
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, t.pr));
  useComposer = t.post > 0; gtao.enabled = t.post > 1;
  key.shadow.mapSize.set(t.shadow, t.shadow);
  if (key.shadow.map) { key.shadow.map.dispose(); key.shadow.map = null; }
  resize();
}
function resize() {
  const w = stageEl.clientWidth, h = stageEl.clientHeight;
  renderer.setSize(w, h, false);
  composer.setPixelRatio(renderer.getPixelRatio()); composer.setSize(w, h);
  camera.aspect = w / h; camera.fov = w / h < 0.9 ? 52 : 36; camera.updateProjectionMatrix();
}
addEventListener('resize', () => { resize(); drawAllCharts(true); });

/* -------------------------------------------------------------------------------------------- picking ----- */
const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
let mouse = null;
const visibleDeep = (o) => { for (let p = o; p; p = p.parent) if (!p.visible) return false; return true; };
function pick(cx, cy) {
  const r = canvas.getBoundingClientRect();
  ndc.set(((cx - r.left) / r.width) * 2 - 1, -((cy - r.top) / r.height) * 2 + 1);
  ray.setFromCamera(ndc, camera);
  const list = robot.meshes.filter(visibleDeep);
  const hit = ray.intersectObjects(list, false).find((h) => !(S.iso && S.sel && h.object.userData.part !== S.sel));
  return hit ? hit.object.userData.part : null;
}
const accent = new THREE.Color('#a78bfa');
function applyHighlight() {
  for (const p of robot.parts) {
    const isSel = S.sel === p.id, isHov = S.hover === p.id && !isSel;
    const dim = S.iso && S.sel && !isSel;
    for (const m of p.mats) {
      m.emissive.copy(accent).multiplyScalar(isSel ? 0.16 : isHov ? 0.12 : 0);
      const tr = dim;
      if (m.transparent !== tr) { m.transparent = tr; m.needsUpdate = true; }
      m.opacity = dim ? 0.07 : 1; m.depthWrite = !dim;
    }
  }
}

/* -------------------------------------------------------------------------------------------- UI: parts ---- */
const TAGCOL = (t) => TAGS[t][1];
function renderCard() {
  const el = $('pcard');
  if (!S.sel) {
    el.innerHTML = `<div class="empty"><b>Click any part</b> of Patrick, or pick one from the list below, to see what it is and what it does. Slide <b>Disassemble</b> to take the robot apart, and use <b>Isolate</b> on a part to see it alone.</div>`;
    return;
  }
  const p = byId[S.sel], info = INFO[S.sel];
  const [tn, tc] = TAGS[info.tag];
  el.innerHTML = `<div class="tagrow"><span class="tag" style="color:${tc};border-color:${tc}66">${tn}</span><h3>${p.name}</h3>
    <div class="acts"><button class="chip ${S.iso ? 'on' : ''}" id="pc-iso" aria-pressed="${S.iso}">ISOLATE</button><button class="chip" id="pc-close">CLOSE</button></div></div>
    <p class="role">${info.role}</p><p class="desc">${info.desc}</p>
    <div class="specs">${info.specs().map(([k, v]) => `<div><span>${k}</span><b>${v}</b></div>`).join('')}</div>`;
  $('pc-iso').onclick = () => { S.iso = !S.iso; applyHighlight(); renderCard(); userAct(); };
  $('pc-close').onclick = () => { select(null); userAct(); };
}
function select(id) {
  S.sel = id; if (!id) S.iso = false;
  applyHighlight(); renderCard();
  document.querySelectorAll('#partlist .chip').forEach((b) => b.classList.toggle('on', b.dataset.id === id));
  const t = id ? INFO[id].tag : null;
  if (id && !tour.running) switchTab(({sense: 'snd', power: 'pow', motion: 'dyn'})[t] || S.tab);
  if (id && tour.running) switchTab(({sense: 'snd', power: 'pow', motion: 'dyn'})[t] || S.tab);
  if (id && S.u < 0.35 && !tour.running) { S.uT = S.u; }
}
const list = $('partlist');
robot.parts.forEach((p) => {
  const b = document.createElement('button');
  b.className = 'chip'; b.dataset.id = p.id; b.textContent = p.name.toUpperCase(); b.style.setProperty('--c', TAGCOL(INFO[p.id].tag));
  b.onclick = () => { select(S.sel === p.id ? null : p.id); userAct(); };
  list.appendChild(b);
});
const stepsEl = $('steps'), STEPS = ['APPROACH', 'BRAKE', 'REACH', 'GRIP', 'LIFT', 'TURN', 'CARRY', 'PLACE', 'RETREAT'];
const PH2STEP = {1: 0, 2: 1, 3: 2, 4: 3, 5: 4, 6: 5, 7: 6, 8: 7, 9: 7, 10: 8};
STEPS.forEach((s) => { const e = document.createElement('span'); e.textContent = s; stepsEl.appendChild(e); });

/* --------------------------------------------------------------------------------------------- UI: events -- */
function switchTab(t) {
  S.tab = t;
  document.querySelectorAll('#tabs button').forEach((b) => b.classList.toggle('on', b.dataset.tab === t));
  ['dyn', 'pow', 'snd'].forEach((k) => $('tab-' + k).classList.toggle('on', k === t));
  drawAllCharts(true);
}
document.querySelectorAll('#tabs button').forEach((b) => b.addEventListener('click', () => { switchTab(b.dataset.tab); userAct(); }));
document.querySelectorAll('#views .chip').forEach((b) => b.addEventListener('click', () => { S.sel = null; S.iso = false; applyHighlight(); renderCard(); document.querySelectorAll('#partlist .chip').forEach((x) => x.classList.remove('on')); setView(b.dataset.view); userAct(); }));
function setBands(on) {
  if (S.bands === on) return; S.bands = on;
  $('t-bands').setAttribute('aria-pressed', on); $('t-bands').textContent = on ? 'RUBBER BANDS ON' : 'RUBBER BANDS OFF';
  document.querySelectorAll('#d-bands button').forEach((b) => b.classList.toggle('on', (b.dataset.b === '1') === on));
  restartRun();
}
$('t-bands').addEventListener('click', () => { setBands(!S.bands); userAct(); });
document.querySelectorAll('#d-bands button').forEach((b) => b.addEventListener('click', () => { setBands(b.dataset.b === '1'); userAct(); }));
$('t-play').addEventListener('click', () => { S.play = !S.play; $('t-play').setAttribute('aria-pressed', S.play); $('t-play').textContent = S.play ? 'PAUSE RUN' : 'PLAY RUN'; userAct(); });
$('t-replay').addEventListener('click', () => { tRun = 0; hold = 0; S.play = true; $('t-play').setAttribute('aria-pressed', true); $('t-play').textContent = 'PAUSE RUN'; userAct(); });
$('t-sonar').addEventListener('click', (e) => { S.sonarViz = !S.sonarViz; e.currentTarget.setAttribute('aria-pressed', S.sonarViz); userAct(); });
$('u').addEventListener('input', (e) => { S.uT = S.u = +e.target.value; userAct(); });
$('d-surf').addEventListener('change', (e) => { S.surf = e.target.value; restartRun(); userAct(); });
$('duty').addEventListener('input', (e) => { S.duty = +e.target.value; $('duty-out').textContent = Math.round(S.duty * 100) + ' %'; rebuildCache(); drawAllCharts(true); userAct(); });
$('duty').addEventListener('change', () => { restartRun(); });
document.querySelectorAll('#s-src button').forEach((b) => b.addEventListener('click', () => { S.follow = b.dataset.f === '1'; document.querySelectorAll('#s-src button').forEach((x) => x.classList.toggle('on', x === b)); userAct(); }));
$('s-d').addEventListener('input', (e) => { S.d = +e.target.value; S.follow = false; document.querySelectorAll('#s-src button').forEach((x) => x.classList.toggle('on', x.dataset.f === '0')); userAct(); });
$('s-psi').addEventListener('input', (e) => { S.psi = +e.target.value * D2R; $('s-psi-out').textContent = e.target.value + '°'; userAct(); });
$('s-wall').addEventListener('change', (e) => { S.wall = e.target.value; userAct(); });

// orbit with the mouse or a finger, zoom with the wheel or a pinch
const ptrs = new Map(); let pinch = 0, dragged = false;
canvas.addEventListener('pointerdown', (e) => { canvas.setPointerCapture(e.pointerId); ptrs.set(e.pointerId, [e.clientX, e.clientY]); dragged = false; canvas.classList.add('drag'); userAct(); if (ptrs.size === 2) { const [a, b] = [...ptrs.values()]; pinch = Math.hypot(a[0] - b[0], a[1] - b[1]); } });
canvas.addEventListener('pointermove', (e) => {
  mouse = [e.clientX, e.clientY];
  if (!ptrs.has(e.pointerId)) return;
  const prev = ptrs.get(e.pointerId); ptrs.set(e.pointerId, [e.clientX, e.clientY]);
  if (ptrs.size === 1) {
    const dx = e.clientX - prev[0], dy = e.clientY - prev[1];
    if (Math.abs(dx) + Math.abs(dy) > 1) dragged = true;
    want.az += dx * 0.008; want.el = clamp(want.el + dy * 0.006, 0.03, 1.5);
    rig.az = want.az; rig.el = want.el;
  } else if (ptrs.size === 2) {
    const [a, b] = [...ptrs.values()], d = Math.hypot(a[0] - b[0], a[1] - b[1]);
    if (pinch) { want.dist = clamp(want.dist * pinch / d, 0.18, 1.6); rig.dist = want.dist; } pinch = d; dragged = true;
  }
});
const endPtr = (e) => {
  const was = ptrs.size === 1 && !dragged;
  ptrs.delete(e.pointerId); canvas.classList.remove('drag');
  if (was && e.type === 'pointerup') { const id = pick(e.clientX, e.clientY); select(id === S.sel ? null : id); }
};
canvas.addEventListener('pointerup', endPtr); canvas.addEventListener('pointercancel', endPtr);
canvas.addEventListener('pointerleave', () => { mouse = null; S.hover = null; $('tip').classList.remove('on'); applyHighlight(); });
canvas.addEventListener('wheel', (e) => { e.preventDefault(); want.dist = clamp(want.dist * Math.exp(e.deltaY * 0.0012), 0.18, 1.6); userAct(); }, {passive: false});
addEventListener('keydown', (e) => { if (e.key === 'Escape') { select(null); } });

/* ------------------------------------------------------------------------------------------- the auto tour -- */
const tour = {running: !reduce, t: 0, idx: 0, idle: 0};
const TOUR = [
  {t: 0, view: 'hero', u: 0, play: true, sel: null, tab: 'dyn'},
  {t: 7, view: 'arm', tab: 'dyn'},
  {t: 12, view: 'hero', tab: 'snd'},
  {t: 16, view: 'hero', u: 1, play: false, tab: 'dyn'},
  {t: 19, sel: 'sonar'},
  {t: 25, sel: 'motorL'},
  {t: 31, sel: 'bandL', tab: 'dyn'},
  {t: 37, sel: 'liftServo'},
  {t: 42, sel: 'arduino'},
  {t: 47, sel: null, u: 0, play: true, view: 'hero', tab: 'dyn'},
  {t: 55, end: true},
];
function tourEvent(ev) {
  if ('view' in ev) { S.sel = null; S.iso = false; setView(ev.view); }
  if ('u' in ev) S.uT = ev.u;
  if ('play' in ev) { S.play = ev.play; $('t-play').setAttribute('aria-pressed', S.play); $('t-play').textContent = S.play ? 'PAUSE RUN' : 'PLAY RUN'; }
  if ('sel' in ev) select(ev.sel);
  if ('tab' in ev) switchTab(ev.tab);
  if (ev.end) { tour.t = 0; tour.idx = 0; }
}
function userAct() {
  if (tour.running) { tour.running = false; $('tourchip').classList.remove('on'); }
  tour.idle = 0;
  $('tourtxt').textContent = 'REPLAY TOUR';
}
$('tourchip').addEventListener('click', () => { tour.running = true; tour.t = 0; tour.idx = 0; tour.idle = 0; S.sel = null; applyHighlight(); renderCard(); });
$('tourchip').addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); $('tourchip').click(); } });
function stepTour(dt) {
  if (!tour.running) { tour.idle += dt; if (tour.idle > IDLE && !reduce && stageVisible) { tour.running = true; tour.t = 0; tour.idx = 0; } }
  if (tour.running) {
    tour.t += dt;
    while (tour.idx < TOUR.length && TOUR[tour.idx].t <= tour.t) tourEvent(TOUR[tour.idx++]);
    $('tourtxt').textContent = 'AUTO TOUR · TAP TO STOP';
  }
  $('tourchip').classList.toggle('on', tour.running);
}

/* -------------------------------------------------------------------------------------------- charts ------- */
const COLg = '#34d399', COLr = '#f87171';
const charts = {};
['c-speed', 'c-slip', 'c-trac', 'c-pow', 'c-eff', 'c-ptime', 'c-rays', 'c-env', 'c-budget', 'c-range'].forEach((id) => { charts[id] = $(id); });
const plot = (id) => { const { ctx, w, h } = C.fit(charts[id]); return {ctx, w, h, r: {x: 46, y: 12, w: w - 62, h: h - 46}}; };

function drawSpeed() {
  const {ctx, r} = plot('c-speed'), a = cache.stepOn, b = cache.stepOff;
  const pts = (s, k) => s.t.map((t, i) => [t, s[k][i]]);
  const ymax = Math.max(...a.wr, ...b.wr) * 1.12;
  C.chart(ctx, r, {xr: [0, 1], yr: [0, ymax], nx: 5, ny: 4, xl: 'time since full throttle (s)', yl: 'speed (m/s)', series: [
    {pts: pts(b, 'wr'), color: 'rgba(248,113,113,0.55)', width: 1.4, dash: [4, 4]}, {pts: pts(a, 'wr'), color: 'rgba(52,211,153,0.55)', width: 1.4, dash: [4, 4]},
    {pts: pts(b, 'v'), color: COLr, width: 2.6}, {pts: pts(a, 'v'), color: COLg, width: 2.6}]});
  const i = a.t.findIndex((t) => t >= 0.3);
  $('cap-speed').innerHTML = `At 0.3 s the banded robot is moving at <b>${a.v[i].toFixed(2)} m/s</b>; the bare one at <b>${b.v[i].toFixed(2)} m/s</b> while its wheel surfaces are doing <b>${b.wr[i].toFixed(2)} m/s</b>. The gap between the dashed and solid red lines is wheel spin.`;
}
function drawSlip() {
  const {ctx, r} = plot('c-slip'), a = cache.stepOn, b = cache.stepOff;
  C.chart(ctx, r, {xr: [0, 1], yr: [-0.05, 1.05], nx: 5, ny: 4, xl: 'time since full throttle (s)', yl: 'slip ratio', series: [
    {pts: b.t.map((t, i) => [t, b.slip[i]]), color: COLr, width: 2.6, fill: 'rgba(248,113,113,0.1)'}, {pts: a.t.map((t, i) => [t, a.slip[i]]), color: COLg, width: 2.6}],
    over: [(X, Y) => { C.label(ctx, `peak ${Math.max(...b.slip).toFixed(2)} bare`, X(0.98), Y(Math.max(...b.slip)) - 8, COLr, 'right', 10); C.label(ctx, `peak ${Math.max(...a.slip).toFixed(2)} with bands`, X(0.98), Y(0.12), COLg, 'right', 10); }]});
}
function drawTrac() {
  const {ctx, r} = plot('c-trac'), on = cache.tracOn, off = cache.tracOff;
  const ymax = Math.max(on.pts[0][1], on.limit) * 1.2;
  C.chart(ctx, r, {xr: [0, 0.8], yr: [0, ymax], nx: 4, ny: 4, xl: 'robot speed (m/s)', yl: 'force at the ground (N)',
    under: [(X, Y) => { ctx.fillStyle = 'rgba(248,113,113,0.1)'; ctx.beginPath(); on.pts.forEach(([v, f], i) => { const y = Math.max(Y(f), Y(off.limit) - 0.0); i ? ctx.lineTo(X(v), Math.min(Y(off.limit), Y(f))) : ctx.moveTo(X(v), Math.min(Y(off.limit), Y(f))); }); on.pts.slice().reverse().forEach(([v]) => ctx.lineTo(X(v), Y(off.limit))); ctx.closePath(); ctx.fill(); }],
    series: [{pts: on.pts, color: COL.amber, width: 2.6}, {pts: [[0, on.limit], [0.8, on.limit]], color: COLg, width: 1.8, dash: [6, 4]}, {pts: [[0, off.limit], [0.8, off.limit]], color: COLr, width: 1.8, dash: [6, 4]}],
    over: [(X, Y) => { C.label(ctx, 'motor force', X(0.42), Y(on.pts[Math.round(on.pts.length * 0.5)][1]) - 12, COL.amber, 'left', 10); C.label(ctx, 'grip limit with bands', X(0.79), Y(on.limit) - 9, COLg, 'right', 10); C.label(ctx, 'grip limit, bare', X(0.79), Y(off.limit) - 9, COLr, 'right', 10); }]});
  $('cap-trac').innerHTML = `At stall the two motors push with <b>${on.pts[0][1].toFixed(1)} N</b>. Bare plastic can only pass <b>${off.limit.toFixed(1)} N</b> to the desk (shaded: wasted as wheel spin); with bands the limit is <b>${on.limit.toFixed(1)} N</b>, so almost all of it reaches the ground.`;
}
function drawPow() {
  const {ctx, r: r0} = plot('c-pow'), r = {...r0, w: r0.w - 34}, cs = cache.power, top = cs[2];
  const rpmMax = top.pts[top.pts.length - 1].rpm * 1.02;
  const pmax = Math.max(...cs.map((c) => Math.max(...c.pts.map((p) => p.Pm)))) * 1.25;
  const emax = Math.max(...cs.map((c) => Math.max(...c.pts.map((p) => p.Pel)))) * 1.05, k = pmax / emax;     // right-hand axis: electrical in
  const colors = ['rgba(251,191,36,0.4)', 'rgba(251,191,36,0.7)', '#fbbf24'];
  const series = [];
  cs.forEach((c, i) => series.push({pts: c.pts.map((p) => [p.rpm, p.Pel * k]), color: 'rgba(154,160,195,' + (0.3 + i * 0.2) + ')', width: 1.3, dash: [4, 4]}));
  cs.forEach((c, i) => series.push({pts: c.pts.map((p) => [p.rpm, p.Pm]), color: colors[i], width: i === 2 ? 2.8 : 2}));
  const live = M.at(run, tRun);
  C.chart(ctx, r, {xr: [0, rpmMax], yr: [0, pmax], nx: 5, ny: 4, xl: 'wheel speed (rpm)', yl: 'mechanical power out, per motor (W)', series,
    over: [(X, Y) => {
      [0.4, 0.7, 1.0].forEach((d, i) => { const c = cs[i], pk = c.pts.reduce((a, b) => (b.Pm > a.Pm ? b : a)); C.label(ctx, `${Math.round(d * 100)} %`, X(pk.rpm), Y(pk.Pm) - 9, '#fbbf24', 'center', 10, '600'); });
      const rpm = live.w * 60 / (2 * Math.PI), pm = live.Pm / 2, pe = live.Pel / 2;
      if (pe > 0.05) { C.dot(ctx, X(Math.min(rpm, rpmMax)), Y(pm), COL.pink); C.dot(ctx, X(Math.min(rpm, rpmMax)), Y(Math.min(pe * k, pmax)), COL.blue, 3.5); }
    }]});
  // the right-hand axis
  ctx.font = `10px ${C.MONO}`; ctx.textAlign = 'left'; ctx.textBaseline = 'middle'; ctx.fillStyle = COL.muted;
  C.niceTicks(0, emax, 4).forEach((v) => { const y = r.y + r.h - v * k / pmax * r.h; ctx.fillStyle = COL.faint; ctx.fillText(String(+v.toPrecision(2)), r.x + r.w + 5, y); });
  ctx.save(); ctx.translate(r.x + r.w + 30, r.y + r.h / 2); ctx.rotate(Math.PI / 2); C.label(ctx, 'electrical power in (W), dashed', 0, 0, COL.muted, 'center'); ctx.restore();
  const best = cache.powerSel.pts.reduce((a, b) => (b.Pm > a.Pm ? b : a));
  $('cap-pow').innerHTML = `At ${Math.round(S.duty * 100)} % throttle one motor delivers at most <b>${best.Pm.toFixed(2)} W</b> at <b>${best.rpm.toFixed(0)} rpm</b>, half its free speed, while drawing about <b>${best.Pel.toFixed(1)} W</b> from the battery: the rest is heat in the windings and gearbox. Pink dot: mechanical power now; blue: electrical.`;
}
function drawEff() {
  const {ctx, r} = plot('c-eff'), c = cache.powerSel, pts = c.pts;
  const tmax = Math.max(...pts.map((p) => p.tau)), imax = Math.max(...pts.map((p) => p.I)), emax = Math.max(...pts.map((p) => p.eff));
  const rpmMax = pts[pts.length - 1].rpm;
  C.chart(ctx, r, {xr: [0, rpmMax], yr: [0, 105], nx: 5, ny: 4, xl: 'wheel speed (rpm)', yl: '% of maximum', series: [
    {pts: pts.map((p) => [p.rpm, p.I / imax * 100]), color: 'rgba(154,160,195,0.8)', width: 1.6, dash: [4, 4]},
    {pts: pts.map((p) => [p.rpm, Math.max(0, p.tau) / tmax * 100]), color: COL.blue, width: 2.4},
    {pts: pts.map((p) => [p.rpm, p.eff / emax * 100]), color: COL.pink, width: 2.4}],
    over: [(X, Y) => {
      C.label(ctx, `torque ${(tmax * 100).toFixed(1)} N·cm at stall`, r.x + 8, r.y + 12, COL.blue, 'left', 10);
      C.label(ctx, `peak efficiency ${(emax * 100).toFixed(0)} %`, r.x + 8, r.y + 27, COL.pink, 'left', 10);
      C.label(ctx, `stall current ${imax.toFixed(2)} A`, r.x + 8, r.y + 42, COL.muted, 'left', 10);
      const live = M.at(run, tRun), rpm = live.w * 60 / (2 * Math.PI); if (live.Pel > 0.05) C.vline(ctx, X, Math.min(rpm, rpmMax), r.y, r.y + r.h);
    }]});
}
function drawPtime() {
  const {ctx, r} = plot('c-ptime'), pts = run.t.map((t, i) => [t, run.Pel[i]]);
  const ymax = Math.max(...run.Pel) * 1.15;
  C.chart(ctx, r, {xr: [0, run.duration], yr: [0, ymax], nx: 6, ny: 4, xl: 'time (s)', yl: 'electrical power (W)', series: [{pts, color: 'rgba(251,191,36,0.9)', width: 2, fill: 'rgba(251,191,36,0.1)'}, {pts, color: '#fbbf24', width: 2, upTo: tRun}],
    over: [(X, Y) => { C.vline(ctx, X, tRun, r.y, r.y + r.h); const k = M.at(run, tRun); C.dot(ctx, X(tRun), Y(k.Pel), COL.pink); }]});
}
function drawRays(now) {
  const {ctx, w, h} = C.fit(charts['c-rays']);
  const live = soundNow();
  const d = live.d, psi = live.psi, wall = live.wall;
  const pad = 26, x0 = pad, cy = h / 2, scale = (w - pad - 34) / Math.max(d, 0.35);
  const P = (x, y) => [x0 + x * scale, cy - y * scale];
  // robot face and beam cone
  ctx.fillStyle = 'rgba(167,139,250,0.25)'; ctx.strokeStyle = COL.accent; ctx.lineWidth = 1.5;
  const [fx, fy0] = P(0, 0.1), [, fy1] = P(0, -0.1);
  ctx.fillRect(x0 - 16, fy0, 16, fy1 - fy0); ctx.beginPath(); ctx.moveTo(fx, fy0); ctx.lineTo(fx, fy1); ctx.stroke();
  C.label(ctx, 'PATRICK', x0 - 12, h - 14, COL.faint, 'left', 9);
  ctx.setLineDash([3, 5]); ctx.strokeStyle = 'rgba(96,165,250,0.35)'; ctx.lineWidth = 1;
  for (const s of [-1, 1]) { ctx.beginPath(); ctx.moveTo(x0, cy); ctx.lineTo(x0 + Math.cos(M.SOUND.beam) * scale * d * 1.4, cy - s * Math.sin(M.SOUND.beam) * scale * d * 1.4); ctx.stroke(); }
  ctx.setLineDash([]);
  // the wall, tilted by psi about its crossing of the axis
  const nx = -Math.cos(psi), ny = -Math.sin(psi), tx = Math.sin(psi), ty = -Math.cos(psi), L = Math.max(0.9, d * 0.7);
  const [wx0, wy0] = P(d + tx * L, ty * L), [wx1, wy1] = P(d - tx * L, -ty * L);
  const wcol = {hard: '#cfd4dc', wood: '#b98e5c', card: '#c89a52', cloth: '#a78bfa'}[wall];
  ctx.strokeStyle = wcol; ctx.lineWidth = 5; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(wx0, wy0); ctx.lineTo(wx1, wy1); ctx.stroke(); ctx.lineCap = 'butt';
  C.label(ctx, M.WALLS[wall].name.toUpperCase(), Math.min(w - 8, wx0 + 6) , Math.max(12, Math.min(wy0, wy1) - 12), wcol, 'right', 9);
  // rays
  const c = 343, vis = Math.max(0.35, 2 * d / 2.4), tot = 4.6 * d + 0.7, tau = (now / 1000) % (tot / vis + 0.5), head = vis * tau;
  const th = M.SOUND.thresh, ref = M.SOUND.ref, W = M.WALLS[wall];
  let recv = 0;
  for (let i = 0; i < 61; i++) {
    const a0 = (i / 60 * 2 - 1) * 42 * D2R, wgt0 = Math.exp(-Math.pow(a0 / (M.SOUND.beam * 1.7), 2));
    let x = 0.0005, y = 0, dx = Math.cos(a0), dy = Math.sin(a0), s = 0, kw = 0, kr = 0;
    for (let seg = 0; seg < 5; seg++) {
      let best = Infinity, kind = null;
      const dn = dx * nx + dy * ny;
      if (dn < -1e-9) { const t = ((d - x) * nx + (0 - y) * ny) / dn; if (t > 1e-6) { const px = x + dx * t, py = y + dy * t, off = (px - d) * tx + py * ty; if (Math.abs(off) <= L) { best = t; kind = 'wall'; } } }
      if (dx < -1e-9) { const t = (0 - x) / dx; if (t > 1e-6) { const py = y + dy * t; if (Math.abs(py) < 0.1 && t < best) { best = t; kind = 'robot'; } } }
      const len = Number.isFinite(best) ? best : 6 * d;
      const s0 = s, s1 = s + len;
      { const [ax, ay] = P(x, y), [bx, by] = P(x + dx * len, y + dy * len); ctx.strokeStyle = 'rgba(125,211,252,0.05)'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(bx, by); ctx.stroke(); }
      if (head > s0 && head <= s1 + 0.0001) {
        const hs = Math.min(head, s1), px = x + dx * (hs - s0), py = y + dy * (hs - s0);
        const amp = wgt0 * (ref / Math.max(hs, ref)) * Math.pow(10, -M.SOUND.absDbPerM * hs / 20) * Math.pow(W.R, kw) * Math.pow(0.8, kr);
        const db = 20 * Math.log10(Math.max(amp, 1e-9) / th), al = clamp((db + 8) / 62, 0.04, 1);
        const [sx, sy] = P(px, py), tl = Math.min(0.08, 0.5 / scale + 0.02);
        const [ex, ey] = P(px - dx * tl, py - dy * tl);
        ctx.strokeStyle = `rgba(${db > 35 ? '250,204,21' : '96,165,250'},${al.toFixed(3)})`; ctx.lineWidth = 1.6 + al * 1.6;
        ctx.beginPath(); ctx.moveTo(sx, sy); ctx.lineTo(ex, ey); ctx.stroke();
        if (px < 0.06 && Math.abs(py) < 0.05 && dx < 0 && kw > 0) recv = Math.max(recv, al);
      }
      if (!kind) break;
      s = s1; x += dx * len; y += dy * len;
      if (kind === 'wall') { const dd = dx * nx + dy * ny; dx -= 2 * dd * nx; dy -= 2 * dd * ny; kw++; } else { dx = -dx; kr++; }
      if (s > 7 * d + 1) break;
    }
  }
  if (recv > 0.04) { const [rx, ry] = P(0, 0); const g = ctx.createRadialGradient(rx, ry, 0, rx, ry, 26); g.addColorStop(0, `rgba(52,211,153,${recv})`); g.addColorStop(1, 'rgba(52,211,153,0)'); ctx.fillStyle = g; ctx.beginPath(); ctx.arc(rx, ry, 26, 0, 7); ctx.fill(); }
  C.label(ctx, `${(d * 100).toFixed(0)} cm`, (x0 + P(d, 0)[0]) / 2, cy - 10, COL.muted, 'center', 10);
  ctx.strokeStyle = 'rgba(255,255,255,0.18)'; ctx.setLineDash([2, 4]); ctx.beginPath(); ctx.moveTo(x0, cy + 6); ctx.lineTo(P(d, 0)[0], cy + 6); ctx.stroke(); ctx.setLineDash([]);
}
function soundNow() {
  const k = M.at(run, tRun);
  const d = S.follow ? clamp(k.sonar, 0.05, 4) : S.d;
  const wall = S.follow ? (k.what === 'wall' ? 'card' : 'wood') : S.wall;
  if (S.follow && $('s-wall').value !== wall) $('s-wall').value = wall;
  const psi = S.follow ? 0 : S.psi;
  return {d, psi, wall, what: k.what};
}
function drawEnv() {
  const {ctx, r} = plot('c-env'), live = soundNow();
  const env = M.envelope(live.d, live.psi, live.wall, 22);
  const db = (a) => 20 * Math.log10(Math.max(a, 1e-9) / M.SOUND.thresh);
  const pts = env.pts.map(([t, a]) => [t * 1000, clamp(db(a), -12, 75)]);
  const bd = M.budget(live.d, live.psi, live.wall);
  C.chart(ctx, r, {xr: [0, env.tEnd * 1000], yr: [-12, 75], yticks: [-10, 0, 20, 40, 60], nx: 6, xl: 'time after the burst (ms)', yl: 'signal (dB above threshold)', series: [{pts, color: COL.accent, width: 2.2, fill: 'rgba(167,139,250,0.12)'}],
    under: [(X, Y) => { ctx.fillStyle = 'rgba(248,113,113,0.07)'; ctx.fillRect(X(0), Y(75), X(0.6) - X(0), Y(-12) - Y(75)); }],
    over: [(X, Y) => {
      C.vline(ctx, X, 0, 0, 0); ctx.setLineDash([5, 4]); ctx.strokeStyle = COL.amber; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.moveTo(r.x, Y(0)); ctx.lineTo(r.x + r.w, Y(0)); ctx.stroke(); ctx.setLineDash([]);
      C.label(ctx, 'detection threshold', r.x + 8, Y(0) + 9, COL.amber, 'left', 9);
      C.label(ctx, 'burst + ring-down', X(0.62), Y(68), COL.red, 'left', 9);
      env.echoes.slice(0, 2).forEach((e, i) => { const v = db(e.a); if (e.t * 1000 < env.tEnd * 1000) { C.dot(ctx, X(e.t * 1000), Y(clamp(v, -12, 75)), i ? COL.pink : COL.green, 4); C.label(ctx, `${i ? '2nd' : '1st'} echo ${v.toFixed(0)} dB`, X(e.t * 1000) + 8, Y(clamp(v, -10, 70)) - 10, i ? COL.pink : COL.green, 'left', 10, '600'); } });
    }]});
  $('cap-env').innerHTML = bd.detected ? `The first echo arrives <b>${(env.echoes[0].t * 1000).toFixed(2)} ms</b> after the burst, which is distance = time × ${env.c.toFixed(0)} m/s ÷ 2 = <b>${(live.d * 100).toFixed(0)} cm</b>. The second, weaker echo has crossed the gap twice.` : `The first echo (<b>${(env.echoes[0].a ? db(env.echoes[0].a) : -99).toFixed(0)} dB</b>) is <b>below the threshold</b>: the sensor reports nothing. Try a harder surface, a straighter wall or a closer distance.`;
}
function drawBudget() {
  const {ctx, w, h} = C.fit(charts['c-budget']), live = soundNow(), b = M.budget(live.d, live.psi, live.wall);
  const parts = [['spreading', b.spread, COL.blue], ['air absorption', b.air, COL.amber], ['wall absorbs', b.surf, COL.pink], ['off-axis', b.aim, COL.red]];
  const total = Math.max(b.total, 1), x0 = 14, bw = w - 28, y0 = 38, bh = 26;
  let x = x0;
  ctx.font = `10px ${C.MONO}`;
  parts.forEach(([n, v, col]) => {
    const ww = v / total * bw; if (ww <= 0) return;
    ctx.fillStyle = col; ctx.globalAlpha = 0.85; ctx.fillRect(x, y0, Math.max(ww, 1), bh); ctx.globalAlpha = 1;
    if (ww > 54) C.label(ctx, `${n}`, x + 5, y0 + bh / 2 - 0.5, '#0b0820', 'left', 9.5, '600');
    C.label(ctx, `${v.toFixed(1)} dB`, x + ww / 2, y0 + bh + 16, col, 'center', 9.5);
    x += ww;
  });
  C.label(ctx, `total loss ${b.total.toFixed(1)} dB  =  only ${(Math.pow(10, -b.total / 10) * 100).toExponential(1)} % of the burst's energy returns`, x0, 16, COL.text, 'left', 10.5, '600');
  C.label(ctx, 'spreading dominates: the burst fans out over the surface of a growing sphere (4πr²)', x0, y0 + bh + 40, COL.muted, 'left', 9.5);
  C.label(ctx, '', 0, 0);
}
function drawRange() {
  const {ctx, w, h} = C.fit(charts['c-range']), live = soundNow();
  const x0 = 96, bw = w - x0 - 56, rowH = 24, maxR = 5;
  cache.ranges.forEach(([k, rg], i) => {
    const y = 12 + i * rowH, cur = k === live.wall;
    ctx.fillStyle = cur ? 'rgba(167,139,250,0.9)' : 'rgba(154,160,195,0.35)'; ctx.fillRect(x0, y, rg / maxR * bw, 14);
    C.label(ctx, M.WALLS[k].name, 8, y + 7, cur ? '#fff' : COL.muted, 'left', 9.5, cur ? '600' : '');
    C.label(ctx, `${rg.toFixed(1)} m`, x0 + rg / maxR * bw + 6, y + 7, cur ? COL.accent : COL.muted, 'left', 10);
  });
  const xd = x0 + clamp(live.d, 0, maxR) / maxR * bw; ctx.strokeStyle = COL.green; ctx.setLineDash([3, 4]); ctx.beginPath(); ctx.moveTo(xd, 4); ctx.lineTo(xd, 12 + 4 * rowH - 6); ctx.stroke(); ctx.setLineDash([]);
  C.label(ctx, 'now', xd, 12 + 4 * rowH + 2, COL.green, 'center', 9);
}
function sndReadouts() {
  const live = soundNow(), bd = M.budget(live.d, live.psi, live.wall), c = M.soundSpeed(22);
  $('r-dist').textContent = live.d >= 3.99 && S.follow ? 'no echo' : (live.d * 100).toFixed(0) + ' cm';
  $('r-echo').textContent = (2 * live.d / c * 1e6).toFixed(0) + ' µs';
  const db = 20 * Math.log10(Math.max(bd.amp, 1e-9) / M.SOUND.thresh);
  $('r-amp').textContent = (db >= 0 ? '+' : '−') + Math.abs(db).toFixed(0) + ' dB';
  $('r-ret').textContent = (Math.pow(10, -bd.total / 10) * 100).toExponential(0) + ' %';
  const rd = $('r-det'); rd.textContent = bd.detected ? 'YES' : 'NO'; rd.parentElement.classList.toggle('ok', bd.detected); rd.parentElement.classList.toggle('bad', !bd.detected);
  $('s-d-out').textContent = (live.d * 100).toFixed(0) + ' cm';
  if (S.follow) $('s-d').value = live.d;
}
function dynReadouts() {
  const k = M.at(run, tRun), pk = M.muPeak(S.bands, S.surf);
  const N = k.drive * (M.R.mBase + M.R.mArm + (k.held ? M.R.mEgg : 0)) * M.G;
  $('r-lim').textContent = (pk * N).toFixed(2) + ' N';
  $('r-drive').textContent = (k.drive * 100).toFixed(0) + ' %';
  const sl = Math.max(Math.abs(k.slipL), Math.abs(k.slipR)); const el = $('r-slip'); el.textContent = sl.toFixed(2); el.parentElement.classList.toggle('bad', sl > 0.3);
}
function powReadouts() {
  const k = M.at(run, tRun);
  $('r-rpm').textContent = (k.w * 60 / (2 * Math.PI)).toFixed(0) + ' rpm';
  $('r-pm').textContent = (k.Pm / 2).toFixed(2) + ' W';
  $('r-pe').textContent = k.Pel.toFixed(2) + ' W';
  $('r-en').textContent = k.energy.toFixed(1) + ' J';
}
function drawAllCharts(force, now = performance.now()) {
  if (S.tab === 'dyn') { if (force) { drawSpeed(); drawSlip(); drawTrac(); } dynReadouts(); }
  else if (S.tab === 'pow') { drawPow(); if (force) drawEff(); drawPtime(); powReadouts(); }
  else { drawRays(now); if (force || chartTick % 6 === 0) { drawEnv(); drawBudget(); drawRange(); sndReadouts(); } }
}
let chartTick = 0;

/* --------------------------------------------------------------------------------------------- frame loop -- */
const tmpq = new V3();
function frame(dt) {
  // the run
  if (S.u < 0.002 && S.play) {
    tRun += dt;
    if (tRun >= run.duration) { hold += dt; tRun = run.duration; if (hold > 1.6) { tRun = 0; hold = 0; } }
  }
  S.u += (S.uT - S.u) * (1 - Math.exp(-dt * 3));
  if (Math.abs(S.uT - S.u) < 0.0005) S.u = S.uT;
  if (document.activeElement !== $('u')) $('u').value = S.u;
  $('u-out').textContent = Math.round(S.u * 100) + '%';

  const k = M.at(run, tRun);
  const st = robot.pose({phi: k.phi, jaw: k.jaw, wl: k.wl, wr: k.wr, bands: S.bands, u: S.u});
  robot.root.position.set(k.x, (robot.root.userData.lift || 0) + S.u * 0.0, wz(k.z));
  robot.root.rotation.y = k.yaw;
  const cy = Math.cos(k.yaw), sy = Math.sin(k.yaw);
  egg.position.set(k.eggX, k.eggY, wz(k.eggZ));
  // taken apart, the egg stays in the claw wherever the claw goes
  if (S.u > 0.02 && k.held) egg.position.copy(byId.gripper.group.localToWorld(new V3(M.EGG_AHEAD, -0.012, 0)));

  key.target.position.set(k.x, 0, wz(k.z)); key.position.set(k.x + 0.9, 1.6, wz(k.z) - 0.7);

  // sonar in 3D: wedge to the thing it sees, rings travelling out
  const so = S.sonarViz && S.u < 0.3;
  sonarViz.visible = so;
  if (so) {
    const dd = Math.min(k.sonar, 0.8), tt = performance.now() / 1000;
    wedge.scale.set(dd, 1, dd);
    rings.forEach((r, i) => { const f = ((tt * 0.55 + i / 3) % 1), rad = Math.max(0.01, f * dd); r.scale.set(rad, 1, rad); r.material.opacity = 0.55 * (1 - f); });
    hitDot.position.set(dd, 0, 0); hitDot.visible = k.sonar < 0.8;
  }

  // HUD, mission steps
  $('h-phase').textContent = run.names[k.phase];
  $('h-sonar').textContent = k.sonar >= 3.99 ? 'no echo' : (k.sonar * 100).toFixed(1) + ' cm';
  $('h-speed').textContent = (Math.abs(k.vL + k.vR) / 2 * 100).toFixed(0) + ' cm/s';
  $('m-bar').style.width = (tRun / run.duration * 100) + '%';
  const cur = PH2STEP[k.phase], done = k.phase === 11;
  [...stepsEl.children].forEach((e, i) => { e.classList.toggle('on', !done && i === cur); e.classList.toggle('done', done || i < cur); });

  stepTour(dt);
  stepCamera(dt);

  // hover
  if (mouse && !ptrs.size && frameN % 2 === 0) {
    const id = pick(mouse[0], mouse[1]);
    if (id !== S.hover) { S.hover = id; applyHighlight(); canvas.classList.toggle('pick', !!id); }
    const tip = $('tip'), r = stageEl.getBoundingClientRect();
    if (id) { tip.textContent = byId[id].name; tip.style.left = (mouse[0] - r.left) + 'px'; tip.style.top = (mouse[1] - r.top) + 'px'; tip.classList.add('on'); } else tip.classList.remove('on');
  }
  // label over the selected part
  const lab = $('sellabel');
  if (S.sel && byId[S.sel]) {
    const b = new THREE.Box3().setFromObject(byId[S.sel].group), c = b.getCenter(new V3()); c.y = b.max.y;
    c.project(camera);
    lab.style.left = ((c.x * 0.5 + 0.5) * stageEl.clientWidth) + 'px'; lab.style.top = ((-c.y * 0.5 + 0.5) * stageEl.clientHeight) + 'px';
    lab.textContent = byId[S.sel].name; lab.classList.add('on');
  } else lab.classList.remove('on');
}

let frameN = 0, last = performance.now(), stageVisible = true, perf = {sum: 0, n: 0, slow: 0, age: 0};
new IntersectionObserver((es) => { stageVisible = es[0].isIntersecting; }, {threshold: 0.05}).observe(stageEl);
function loop(now) {
  const dt = Math.min((now - last) / 1000, 0.1); last = now; frameN++;
  if (!document.hidden) {
    if (stageVisible) { frame(reduce && !tour.running ? 0 : dt); (useComposer ? composer.render() : renderer.render(scene, camera)); }
    if (stageVisible) { chartTick++; if (chartTick % 2 === 0) drawAllCharts(false, now); }
    // quality: step down if the page can't hold ~45 fps
    if (tier < TIERS.length - 1 && stageVisible) {
      perf.age += dt;
      if (perf.age > 1.2) { perf.sum += dt; perf.n++; if (perf.n >= 20) { perf.slow = perf.sum / perf.n > 0.026 ? perf.slow + 1 : 0; perf.sum = perf.n = 0; if (perf.slow >= 2) { tier++; applyTier(); perf.slow = 0; perf.age = 0; } } }
    }
  }
  requestAnimationFrame(loop);
}

/* ---------------------------------------------------------------------------------------------- boot -------- */
function boot() {
  applyTier();
  renderCard();
  applyHighlight();
  $('duty-out').textContent = '70 %';
  restartRun();
  setView('hero');
  rig.t.copy(targetPoint());
  if (tour.running) { $('tourchip').classList.add('on'); }
  // compile every program in parallel before the first frame so the page never freezes on first draw
  const ready = renderer.compileAsync ? renderer.compileAsync(scene, camera) : Promise.resolve();
  ready.catch(() => {}).finally(() => { last = performance.now(); requestAnimationFrame(loop); });
  window.__PATRICK = {seek: (t) => { tRun = t; hold = 0; }, S, run: () => run, robot, rig, scene, camera, renderer, M, select, setView, tour};
}
document.fonts?.ready?.then(boot, boot) ?? boot();
}
