// The kitchen stage: Patrick fetches the five ingredients and lays them out for breakfast, full screen.
// mission.js is the brain (the same program as patrick_mission.cpp); this file draws it: the 3D kitchen, the transport buttons,
// the floating graph bubbles that follow the robot, the full-screen panels, and the C++ viewer.
import * as THREE from 'three';
import {EffectComposer} from 'three/addons/postprocessing/EffectComposer.js';
import {RenderPass} from 'three/addons/postprocessing/RenderPass.js';
import {GTAOPass} from 'three/addons/postprocessing/GTAOPass.js';
import {OutputPass} from 'three/addons/postprocessing/OutputPass.js';
import * as M from './model.js';
import {Mission, K, ITEMS, PH, STEPS, PH2STEP} from './mission.js';
import {buildRobot} from './robot.js';
import {buildKitchen, buildItem, wz} from './kitchen-items.js';
import {GRAPHS, makeCache, soundNow} from './graphs.js';
import {INFO, TAGS} from './parts.js';
import CPP from './patrick_mission.cpp';

const $ = (id) => document.getElementById(id);
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
const D2R = Math.PI / 180;
const V3 = THREE.Vector3;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const stageEl = $('k-stage'), canvas = $('k-gl'), introEl = document.querySelector('.k-intro');
if (!stageEl || !canvas) throw new Error('kitchen stage markup is missing');

/* ------------------------------------------------------------------------------------------------- state -------- */
const S = {speed: 1, cam: 'cinema', duty: 0.7, u: 0, uT: 0, sel: null, iso: false, hover: null};
const sim = new Mission({duty: S.duty});
const D = {sim, cache: makeCache('desk', S.duty, true), duty: S.duty};
const CASE = ['IDLE', 'APPROACH', 'BRAKE', 'REACH', 'GRIP', 'LIFT', 'TURN_CARRY', 'SETTLE_C', 'CARRY', 'BRAKE_C', 'PLACE', 'RETREAT_P', 'TURN_SHIFT', 'SETTLE_T', 'SHIFT', 'SETTLE_S', 'TURN_PANTRY', 'SETTLE_P', 'DONE'];
const PHASE_LABEL = ['READY', 'APPROACH', 'BRAKE', 'REACH', 'GRIP', 'LIFT', 'TURN', 'SETTLE', 'CARRY', 'BRAKE', 'PLACE', 'RETREAT', 'TURN', 'SETTLE', 'SHIFT', 'SETTLE', 'TURN', 'SETTLE', 'DONE'];

/* --------------------------------------------------------------------------------------------- renderer --------- */
const renderer = new THREE.WebGLRenderer({canvas, antialias: true, powerPreference: 'high-performance'});
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.0; renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFShadowMap;
const scene = new THREE.Scene();
scene.background = new THREE.Color('#0a0f26'); scene.fog = new THREE.Fog('#0a0f26', 3.2, 9);
const pmrem = new THREE.PMREMGenerator(renderer);
function studioEnv() {                                              // a photographic studio to reflect: softboxes, a strip light, a warm fill
  const s = new THREE.Scene();
  s.add(new THREE.Mesh(new THREE.SphereGeometry(12, 32, 16), new THREE.MeshBasicMaterial({color: new THREE.Color('#1d2442'), side: THREE.BackSide})));
  const panel = (w, h, pos, k, col = '#ffffff') => { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({color: new THREE.Color(col).multiplyScalar(k), side: THREE.DoubleSide})); m.position.set(...pos); m.lookAt(0, 0, 0); s.add(m); };
  panel(7, 5, [-4, 7, -5], 4.2); panel(1.4, 7, [6, 3, 4], 5.5, '#dbe7ff'); panel(3, 3, [-6, 2, 5], 3.2, '#ffd9b0'); panel(10, 10, [0, 11, 0], 1.1); panel(12, 3, [0, -2.5, -8], 0.9, '#8aa0ff');
  return pmrem.fromScene(s, 0.015).texture;
}
scene.environment = studioEnv(); scene.environmentIntensity = 0.8;
const camera = new THREE.PerspectiveCamera(36, 1, 0.05, 14);
const key = new THREE.DirectionalLight('#fff3e0', 2.2);
key.castShadow = true; Object.assign(key.shadow.camera, {left: -0.7, right: 0.7, top: 0.7, bottom: -0.7, near: 0.2, far: 5}); key.shadow.bias = -0.0004; key.shadow.normalBias = 0.002;
scene.add(key, key.target);
const fill = new THREE.DirectionalLight('#9db7ff', 0.6); fill.position.set(-1, 0.8, 1); scene.add(fill);
scene.add(new THREE.HemisphereLight('#aab8ff', '#1a1530', 0.5));
const rt = new THREE.WebGLRenderTarget(4, 4, {type: THREE.HalfFloatType, samples: 4});
const composer = new EffectComposer(renderer, rt);
composer.addPass(new RenderPass(scene, camera));
const gtao = new GTAOPass(scene, camera, 4, 4);
gtao.output = GTAOPass.OUTPUT.Default;
gtao.updateGtaoMaterial({radius: 0.035, distanceExponent: 1.2, thickness: 0.6, scale: 1.2, samples: 14, distanceFallOff: 1, screenSpaceRadius: false});
gtao.updatePdMaterial({lumaPhi: 10, depthPhi: 2, normalPhi: 3, radius: 5, radiusExponent: 1, rings: 2, samples: 12});
composer.addPass(gtao); composer.addPass(new OutputPass());
let useComposer = true;

/* --------------------------------------------------------------------------------------------- the scene -------- */
const kitchen = buildKitchen(scene);
const robot = buildRobot({lite: startTier() >= 1}); scene.add(robot.root);
const itemMesh = ITEMS.map((it, i) => { const g = buildItem(it.id); scene.add(g); return g; });
// the sonar beam in 3D: a translucent wedge out to whatever the sensor sees, and a dot where it lands
const sonarViz = new THREE.Group(); robot.root.add(sonarViz); sonarViz.position.set(M.R.sensorX + 0.008, M.R.sensorY, 0);
const wedge = (() => {
  const v = [0, 0, 0], idx = [], n = 16;
  for (let i = 0; i <= n; i++) { const a = (i / n * 2 - 1) * M.SOUND.beam; v.push(Math.cos(a), 0, Math.sin(a)); }
  for (let i = 1; i <= n; i++) idx.push(0, i, i + 1);
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(v, 3)); g.setIndex(idx);
  const m = new THREE.Mesh(g, new THREE.MeshBasicMaterial({color: '#60a5fa', transparent: true, opacity: 0.055, side: THREE.DoubleSide, depthWrite: false})); sonarViz.add(m); return m;
})();
const hitDot = new THREE.Mesh(new THREE.SphereGeometry(0.005, 12, 8), new THREE.MeshBasicMaterial({color: '#f472b6'})); sonarViz.add(hitDot);

/* ------------------------------------------------------------------------------------------------ camera -------- */
const rig = {az: -88 * D2R, el: 26 * D2R, dist: 1.45, t: new V3(K.start.x, 0.08, wz(K.start.z))};
const want = {az: rig.az, el: rig.el, dist: rig.dist};
const WIDE_T = new V3(-0.05, 0.0, 0);
const tmpT = new V3(), selC = new V3();
function targetPoint() {
  if (S.cam === 'wide' || S.cam === 'top') return tmpT.copy(WIDE_T);
  return tmpT.set(sim.x + Math.cos(sim.yaw) * 0.05, 0.075, wz(sim.z + Math.sin(sim.yaw) * 0.05));
}
const bbox = new THREE.Box3(), bsize = new V3();
function stepCamera(dt, now) {
  const k = 1 - Math.exp(-dt * 3.2);
  let az = want.az, el = want.el, dist = want.dist;
  if (S.cam === 'cinema') {                                         // a slow drift, closer while the arm works, wide while driving
    const arm = [PH.REACH, PH.GRIP, PH.LIFT, PH.PLACE].includes(sim.phase);
    az = (-88 + 34 * Math.sin(now / 1000 * 0.06)) * D2R; el = (arm ? 16 : 26) * D2R; dist = arm ? 0.78 : 1.45;
    want.az = az; want.el = el; want.dist = dist;
  } else if (S.cam === 'wide') { az = -78 * D2R; el = 38 * D2R; dist = 3.3; }
  else if (S.cam === 'top') { az = -90 * D2R; el = 84 * D2R; dist = 2.4; }
  let tgt = targetPoint();
  if (S.sel && byId[S.sel]) {                                       // a selected part: look at it, close
    bbox.setFromObject(byId[S.sel].group); bbox.getCenter(selC); bbox.getSize(bsize); tgt = selC;
    dist = clamp(Math.max(bsize.x, bsize.y, bsize.z) * 3.2 + 0.1, 0.22, 0.7); az = rig.az; el = rig.el;
  } else if (S.u > 0.02) { dist *= 1 + 0.5 * S.u; az = rig.az; el = rig.el; }
  rig.az += (az - rig.az) * k; rig.el += (el - rig.el) * k; rig.dist += (dist - rig.dist) * k;
  rig.t.lerp(tgt, 1 - Math.exp(-dt * 4));
  const ce = Math.cos(rig.el);
  camera.position.set(rig.t.x + rig.dist * ce * Math.cos(rig.az), rig.t.y + rig.dist * Math.sin(rig.el), rig.t.z + rig.dist * ce * Math.sin(rig.az));
  camera.lookAt(rig.t);
}
function setCam(c) {
  S.cam = c;
  if (c === 'follow') { want.az = rig.az; want.el = rig.el; want.dist = rig.dist; }
  document.querySelectorAll('#k-cams .chip').forEach((b) => b.classList.toggle('on', b.dataset.cam === c));
}
document.querySelectorAll('#k-cams .chip').forEach((b) => b.addEventListener('click', () => setCam(b.dataset.cam)));
// drag to orbit, wheel to zoom; either takes the camera off its automatic mode
const ptrs = new Map(); let dragged = false, mouse = null;
canvas.addEventListener('pointerdown', (e) => { canvas.setPointerCapture(e.pointerId); ptrs.set(e.pointerId, [e.clientX, e.clientY]); canvas.classList.add('drag'); dragged = false; });
canvas.addEventListener('pointermove', (e) => {
  mouse = [e.clientX, e.clientY];
  if (!ptrs.has(e.pointerId)) return;
  const prev = ptrs.get(e.pointerId); ptrs.set(e.pointerId, [e.clientX, e.clientY]);
  if (Math.abs(e.clientX - prev[0]) + Math.abs(e.clientY - prev[1]) > 1) dragged = true;
  if (ptrs.size === 1) {
    if (S.cam !== 'follow') { want.az = rig.az; want.el = rig.el; want.dist = rig.dist; setCam('follow'); }
    want.az += (e.clientX - prev[0]) * 0.008; want.el = clamp(want.el + (e.clientY - prev[1]) * 0.006, 0.04, 1.5); rig.az = want.az; rig.el = want.el;
  }
});
const endPtr = (e) => {
  const was = ptrs.size === 1 && !dragged;
  ptrs.delete(e.pointerId); canvas.classList.remove('drag');
  if (was && e.type === 'pointerup' && labOpen()) { const id = pick(e.clientX, e.clientY); select(id === S.sel ? null : id); }
};
canvas.addEventListener('pointerleave', () => { mouse = null; S.hover = null; tipEl.classList.remove('on'); highlight(); });
canvas.addEventListener('pointerup', endPtr); canvas.addEventListener('pointercancel', endPtr);
canvas.addEventListener('wheel', (e) => { e.preventDefault(); if (S.cam !== 'follow') { want.az = rig.az; want.el = rig.el; want.dist = rig.dist; setCam('follow'); } want.dist = clamp(want.dist * Math.exp(e.deltaY * 0.0012), 0.3, 4); }, {passive: false});

/* ------------------------------------------------------------------------------------------ quality tiers ------ */
// Tier 0 is the full look (ambient occlusion, MSAA, 2048 shadows, glass panels). Each tier below removes the most expensive thing
// first. The page starts at the tier its device can probably afford, then steps down on its own if the frame rate says otherwise.
const TIERS = [
  {pr: 1.6, shadow: 2048, post: 2, lite: false, shEvery: 1, charts: 4, idle: 1},
  {pr: 1.25, shadow: 1024, post: 0, lite: true, shEvery: 1, charts: 5, idle: 2},
  {pr: 1, shadow: 512, post: 0, lite: true, shEvery: 2, charts: 6, idle: 2},
  {pr: 0.75, shadow: 0, post: 0, lite: true, shEvery: 0, charts: 8, idle: 2},
];
function startTier() {
  const forced = new URLSearchParams(location.search).get('tier');          // ?tier=0..3 forces a quality tier (for testing)
  if (forced !== null && forced !== '') return clamp(+forced || 0, 0, 3);
  const coarse = matchMedia('(pointer: coarse)').matches, small = Math.min(innerWidth, innerHeight) < 700;
  const cores = navigator.hardwareConcurrency || 4, mem = navigator.deviceMemory || 4, big = innerWidth * innerHeight * (devicePixelRatio || 1) ** 2 > 5.5e6;
  if (coarse || small) return 2;
  if (cores <= 4 || mem <= 4 || big) return 1;
  return 0;
}
let tier = startTier();
let VP = {W: 1, H: 1};
const keep = {introR: 0, introB: 0, listR: 230};
function measure() {                                                // layout reads happen here, on resize, never once per frame
  VP.W = stageEl.clientWidth; VP.H = stageEl.clientHeight;
  const ir = introEl.getBoundingClientRect(), sr = stageEl.getBoundingClientRect(); keep.introR = ir.right - sr.left; keep.introB = ir.bottom - sr.top;
}
function applyTier() {
  const t = TIERS[tier];
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, t.pr)); useComposer = t.post > 0; gtao.enabled = t.post > 1;
  key.castShadow = t.shadow > 0; renderer.shadowMap.autoUpdate = t.shEvery === 1;
  if (t.shadow) { key.shadow.mapSize.set(t.shadow, t.shadow); if (key.shadow.map) { key.shadow.map.dispose(); key.shadow.map = null; } }
  stageEl.classList.toggle('lite', t.lite);
  for (const m of robot.meshes) { if (m.userData.r === undefined) { m.geometry.computeBoundingSphere(); m.userData.r = m.geometry.boundingSphere.radius; m.userData.cs = m.castShadow; } m.castShadow = m.userData.cs && (tier < 2 || m.userData.r > 0.012); }   // tiny parts cast no shadow on weak tiers
  resize();
}
function resize() {
  const w = stageEl.clientWidth, h = stageEl.clientHeight;
  renderer.setSize(w, h, false); composer.setPixelRatio(renderer.getPixelRatio()); composer.setSize(w, h);
  camera.aspect = w / h; camera.fov = w / h < 0.9 ? 58 : 36; camera.updateProjectionMatrix();
  measure();
}
addEventListener('resize', resize);


/* ------------------------------------------------------------------------------------------ disassembly ------- */
const byId = robot.byId, labEl = $('k-lab'), partEl = $('k-part'), tipEl = $('k-tip'), selTag = $('k-seltag');
const labOpen = () => labEl.classList.contains('on') || S.u > 0.02;
const ray = new THREE.Raycaster(), ndc = new THREE.Vector2(), accent = new THREE.Color('#a78bfa');
const visibleDeep = (o) => { for (let p = o; p; p = p.parent) if (!p.visible) return false; return true; };
function pick(cx, cy) {
  const r = canvas.getBoundingClientRect();
  ndc.set(((cx - r.left) / r.width) * 2 - 1, -((cy - r.top) / r.height) * 2 + 1);
  ray.setFromCamera(ndc, camera);
  const hit = ray.intersectObjects(robot.meshes.filter(visibleDeep), false).find((h) => !(S.iso && S.sel && h.object.userData.part !== S.sel));
  return hit ? hit.object.userData.part : null;
}
function highlight() {
  for (const p of robot.parts) {
    const isSel = S.sel === p.id, isHov = S.hover === p.id && !isSel, dim = S.iso && S.sel && !isSel;
    for (const m of p.mats) {
      m.emissive.copy(accent).multiplyScalar(isSel ? 0.16 : isHov ? 0.12 : 0);
      if (m.transparent !== !!dim) { m.transparent = !!dim; m.needsUpdate = true; }
      m.opacity = dim ? 0.07 : 1; m.depthWrite = !dim;
    }
  }
}
function renderPart() {
  if (!S.sel) { partEl.classList.remove('on'); return; }
  const p = byId[S.sel], info = INFO[S.sel], [tn, tc] = TAGS[info.tag];
  partEl.innerHTML = `<div class="tagrow"><span class="tag" style="color:${tc};border-color:${tc}66">${tn}</span><h3>${p.name}</h3><div class="acts"><button class="chip ${S.iso ? 'on' : ''}" id="kp-iso" aria-pressed="${S.iso}">ISOLATE</button><button class="chip" id="kp-x">CLOSE</button></div></div>
    <p class="role">${info.role}</p><p class="desc">${info.desc}</p><div class="specs">${info.specs().map(([k, v]) => `<div><span>${k}</span><b>${v}</b></div>`).join('')}</div>`;
  $('kp-iso').onclick = () => { S.iso = !S.iso; highlight(); renderPart(); };
  $('kp-x').onclick = () => select(null);
  partEl.classList.add('on');
}
function select(id) {
  S.sel = id; if (!id) S.iso = false;
  highlight(); renderPart();
  document.querySelectorAll('#k-plist .chip').forEach((b) => b.classList.toggle('on', b.dataset.id === id));
  if (id && S.u < 0.35) S.uT = Math.max(S.uT, 0.35);                 // a part buried in the robot needs the robot opened up first
  if (id) ensureHalted();
}
function ensureHalted() { if (sim.status === 'RUNNING') sim.pause(); }
robot.parts.forEach((p) => {
  const b = document.createElement('button'); b.className = 'chip'; b.dataset.id = p.id; b.textContent = p.name.toUpperCase(); b.style.setProperty('--c', TAGS[INFO[p.id].tag][1]);
  b.onclick = () => select(S.sel === p.id ? null : p.id); $('k-plist').appendChild(b);
});
function setLab(on) {
  labEl.classList.toggle('on', on); $('k-lab-btn').setAttribute('aria-pressed', on);
  if (on) { ensureHalted(); if (S.uT < 0.01) S.uT = 0.4; } else { S.uT = 0; select(null); }
}
$('k-lab-btn').addEventListener('click', () => setLab(!labEl.classList.contains('on')));
$('k-reasm').addEventListener('click', () => { S.uT = 0; select(null); });
$('k-u').addEventListener('input', (e) => { S.uT = S.u = +e.target.value; if (S.u > 0.02) ensureHalted(); });
function reassemble() { S.uT = 0; if (S.sel) select(null); }     // the run starts from a whole robot

/* --------------------------------------------------------------------------------------------- transport ------- */
const btn = {start: $('k-start'), pause: $('k-pause'), stop: $('k-stop')};
function act(kind) {
  if (kind === 'start') { reassemble(); sim.start(); }
  else if (kind === 'pause') { const was = sim.status === 'PAUSING' || sim.status === 'PAUSED'; if (was) { reassemble(); sim.resume(); } else sim.pause(); }
  else if (kind === 'stop') sim.stop();
  syncButtons();
}
const STATE_TXT = {READY: 'READY', RUNNING: 'RUNNING', PAUSING: 'SLOWING TO A HALT', PAUSED: 'PAUSED', STOPPING: 'STOPPING', STOPPED: 'STOPPED', DONE: 'BREAKFAST IS SERVED'};
let shownStatus = '';
function syncButtons() {
  const s = sim.status;
  if (s === shownStatus) return; shownStatus = s;
  const paused = s === 'PAUSING' || s === 'PAUSED';
  btn.start.disabled = !(s === 'READY' || s === 'STOPPED' || s === 'DONE');
  btn.start.querySelector('span').textContent = s === 'STOPPED' ? 'RESTART' : s === 'DONE' ? 'RUN AGAIN' : 'START';
  btn.pause.disabled = !(s === 'RUNNING' || paused);
  btn.pause.querySelector('span').textContent = paused ? 'RESUME' : 'PAUSE';
  btn.stop.disabled = !(s === 'RUNNING' || paused);
  const st = $('k-state'); st.textContent = STATE_TXT[s]; st.dataset.s = s;
  $('k-hint').classList.toggle('on', s === 'READY');
  document.querySelectorAll('[data-act]').forEach((b) => { if (b.dataset.act === 'start') b.disabled = btn.start.disabled; else if (b.dataset.act === 'pause') { b.disabled = btn.pause.disabled; b.textContent = paused ? 'RESUME' : 'PAUSE'; } else b.disabled = btn.stop.disabled; });
}
document.addEventListener('click', (e) => { const b = e.target.closest('[data-act]'); if (b && !b.disabled) act(b.dataset.act); });
btn.start.onclick = () => act('start'); btn.pause.onclick = () => act('pause'); btn.stop.onclick = () => act('stop');
document.querySelectorAll('#k-speed .chip').forEach((b) => b.addEventListener('click', () => { S.speed = +b.dataset.x; document.querySelectorAll('#k-speed .chip').forEach((x) => x.classList.toggle('on', x === b)); }));
$('k-full').addEventListener('click', () => { if (document.fullscreenElement) document.exitFullscreen(); else (stageEl.requestFullscreen?.() || Promise.resolve()).catch(() => {}); });
document.addEventListener('fullscreenchange', () => { $('k-full').setAttribute('aria-pressed', !!document.fullscreenElement); setTimeout(resize, 50); });
addEventListener('keydown', (e) => {
  if (e.target.closest?.('input, select, textarea')) return;
  if (e.key === 'Escape' && modal.open) closeModal();
  else if (e.key === 'Escape' && S.sel) select(null);
  else if (e.code === 'Space' && stageVisible) { e.preventDefault(); const s = sim.status; act(s === 'READY' || s === 'STOPPED' || s === 'DONE' ? 'start' : 'pause'); }
});

/* --------------------------------------------------------------------------------------------- the C++ -------- */
const LINES = CPP.replace(/\r/g, '').split('\n');
const KWS = 'static|const|struct|enum|class|return|if|else|for|while|switch|case|break|default|void|bool|int|long|double|auto|true|false|nullptr|using|namespace|std|sizeof|inline|char|new';
const TOK = new RegExp(`("(?:[^"\\\\]|\\\\.)*")|(\\b\\d[\\d.]*(?:e-?\\d+)?\\b)|(\\b(?:${KWS})\\b)|(#\\w+)|(\\b[A-Z][A-Z_0-9]{2,}\\b)`, 'g');
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
function hl(line) {
  let code = line, com = '';
  const ci = line.indexOf('//'); if (ci >= 0 && !/"[^"]*\/\/[^"]*"/.test(line)) { code = line.slice(0, ci); com = line.slice(ci); }
  const out = esc(code).replace(TOK, (m, s, n, k, p, c) => s ? `<i class="s">${m}</i>` : n ? `<i class="n">${m}</i>` : k ? `<i class="k">${m}</i>` : p ? `<i class="p">${m}</i>` : `<i class="c2">${m}</i>`);
  return out + (com ? `<i class="c">${esc(com)}</i>` : '');
}
const HTML_LINES = LINES.map(hl);
const caseLine = {};
LINES.forEach((l, i) => { const m = /^\s*case (\w+):/.exec(l); if (m) caseLine[m[1]] = i; });
const caseOrder = Object.entries(caseLine).sort((a, b) => a[1] - b[1]);
function caseRange(phase) {                                          // the lines of the controller's `case` for this phase
  const name = CASE[phase], s = caseLine[name]; if (s === undefined) return null;
  const nx = caseOrder.find(([, l]) => l > s); let e = nx ? nx[1] : s + 8;
  while (e > s + 1 && /^\s*$/.test(LINES[e - 1])) e--;
  return [s, e];
}
function download() {
  const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([CPP.replace(/\r?\n/g, '\r\n')], {type: 'text/plain'})); a.download = 'patrick_mission.cpp';
  document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 2000);
}

/* ---------------------------------------------------------------------------------------- the bubbles ---------- */
const placedCount = () => sim.items.filter((q) => q.state === 2).length;
const fmt = (v, d = 1) => v.toFixed(d);
const BUBBLES = [
  {id: 'dyn', title: 'DYNAMICS', tag: 'rubber bands vs bare', col: '#34d399', mini: 'speed', ang: -140, rad: 330,
   foot: () => `slip ${fmt(Math.max(Math.abs(sim.slipL), Math.abs(sim.slipR)), 2)} · grip on drive ${fmt(sim.drive * 100, 0)}%`,
   cards: [['speed', 'Speed after a full-throttle start', 'Same motors, same battery, same robot: the only change is the rubber bands.'], ['slip', 'Wheel slip', ''], ['trac', 'What the motors ask for vs what the tyres can give', 'When the motor force is above the grip limit the wheel spins instead of pushing.'], ['runspeed', 'Live: Patrick’s speed over the run', 'Press pause to watch the soft stop.']],
   reads: () => { const pk = M.muPeak(true, 'desk'), N = sim.drive * (M.R.mBase + M.R.mArm) * M.G; return [['Grip limit now', fmt(pk * N, 2) + ' N', 'hl'], ['Weight on drive wheels', fmt(sim.drive * 100, 0) + ' %'], ['Slip, live', fmt(Math.max(Math.abs(sim.slipL), Math.abs(sim.slipR)), 2), 'mg'], ['Go-gain', fmt(sim.g, 2)]]; }},
  {id: 'pow', title: 'POWER', tag: 'watts and speed', col: '#fbbf24', mini: 'ptime', ang: -42, rad: 340,
   foot: () => `${fmt(sim.Pel, 1)} W in · ${fmt(sim.energy, 0)} J used`,
   cards: [['pow', 'Power vs wheel speed', 'One motor at three throttle settings. The dots are the motor right now.'], ['eff', 'Torque, current and efficiency', ''], ['ptime', 'Electrical power over the breakfast run', 'Both motors plus the electronics.']],
   reads: () => [['Wheel speed', fmt(sim.w * 60 / (2 * Math.PI), 0) + ' rpm'], ['Mech. power / motor', fmt(sim.Pm / 2, 2) + ' W', 'hl'], ['Electrical in (both)', fmt(sim.Pel, 2) + ' W'], ['Energy used so far', fmt(sim.energy, 1) + ' J', 'mg']]},
  {id: 'snd', title: 'SOUND', tag: 'ultrasonic echo', col: '#60a5fa', mini: 'rays', ang: 18, rad: 360,
   foot: () => { const l = soundNow(D); return sim.sn.d >= 3.99 ? 'no echo' : `${fmt(l.d * 100, 0)} cm · ${fmt(2 * l.d / M.soundSpeed(22) * 1e6, 0)} µs echo`; },
   cards: [['rays', 'The burst, the wall and the echo (top view)', 'Dots are the sound travelling, bright when strong.'], ['env', 'What the receiver hears', 'Signal in dB above the detection threshold.'], ['budget', 'Where the energy went', 'Loss budget of the first echo, in dB.'], ['range', 'How far each surface can be seen', '']],
   reads: () => { const l = soundNow(D), bd = M.budget(l.d, l.psi, l.wall), db = 20 * Math.log10(Math.max(bd.amp, 1e-9) / M.SOUND.thresh); return [['Reading', sim.sn.d >= 3.99 ? 'no echo' : fmt(l.d * 100, 0) + ' cm', 'hl'], ['Echo time', fmt(2 * l.d / M.soundSpeed(22) * 1e6, 0) + ' µs'], ['Echo vs threshold', (db >= 0 ? '+' : '−') + fmt(Math.abs(db), 0) + ' dB', 'mg'], ['Returned energy', (Math.pow(10, -bd.total / 10) * 100).toExponential(0) + ' %'], ['Detected', bd.detected ? 'YES' : 'NO', bd.detected ? 'ok' : 'bad']]; }},
  {id: 'map', title: 'MISSION MAP', tag: 'where everything is', col: '#e879f9', mini: 'map', ang: 118, rad: 300,
   foot: () => `${placedCount()} of ${ITEMS.length} on the table`,
   cards: [['map', 'The counter from above', '']],
   reads: () => [['State', PHASE_LABEL[sim.phase]], ['Carrying', sim.held ? ITEMS[sim.item].full : '—', 'hl'], ['On the table', `${placedCount()} of ${ITEMS.length}`, 'ok'], ['Run time', fmt(sim.t, 1) + ' s'], ['Sonar', sim.sn.d >= 3.99 ? 'no echo' : fmt(sim.sn.d * 100, 1) + ' cm', 'mg']]},
  {id: 'code', title: 'C++ CODE', tag: 'patrick_mission.cpp', col: '#a78bfa', mini: 'code', ang: 172, rad: 350, foot: () => `${LINES.length} lines · case ${CASE[sim.phase]}`},
];
const bubblesEl = $('k-bubbles'), leadersEl = $('k-leaders');
const SVGNS = 'http://www.w3.org/2000/svg';
BUBBLES.forEach((b, i) => {
  const el = document.createElement('div'); el.className = 'bub'; el.tabIndex = 0; el.setAttribute('role', 'button'); el.setAttribute('aria-label', `${b.title}: ${b.tag}. Press to open full screen`);
  el.style.setProperty('--c', b.col);
  el.innerHTML = `<div class="bub-head"><i></i><b>${b.title}</b><span>${b.tag}</span><em aria-hidden="true">⤢</em></div>` +
    (b.mini === 'code' ? '<pre class="bub-code"></pre>' : '<canvas class="bub-cv"></canvas>') + '<div class="bub-foot"></div>';
  bubblesEl.appendChild(el); b.el = el; b.cv = el.querySelector('canvas'); b.codeEl = el.querySelector('pre'); b.footEl = el.querySelector('.bub-foot');
  b.x = innerWidth / 2; b.y = innerHeight / 2; b.hover = false; b.cap = ''; b.lastPhase = -1; b.phase = i * 1.7;
  const ln = document.createElementNS(SVGNS, 'line'); ln.setAttribute('stroke', b.col); ln.setAttribute('stroke-opacity', '0.45'); ln.setAttribute('stroke-width', '1'); ln.setAttribute('stroke-dasharray', '2 4'); leadersEl.appendChild(ln); b.line = ln;
  el.addEventListener('pointerenter', () => { b.hover = true; }); el.addEventListener('pointerleave', () => { b.hover = false; });
  el.addEventListener('focus', () => { b.hover = true; }); el.addEventListener('blur', () => { b.hover = false; });
  el.addEventListener('click', () => openModal(b.id));
  el.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(b.id); } });
});
const screenPos = new V3();
function layoutBubbles(dt, now) {
  const W = VP.W, H = VP.H;
  const dock = W < 760;
  bubblesEl.classList.toggle('dock', dock); leadersEl.style.display = dock ? 'none' : '';
  if (dock) return;
  screenPos.set(robot.root.position.x, 0.12, robot.root.position.z).project(camera);
  const rx = (screenPos.x * 0.5 + 0.5) * W, ry = (-screenPos.y * 0.5 + 0.5) * H;
  const k = 1 - Math.exp(-dt * 3.2);
  // 1. where each bubble would like to float: on a ring around the robot, bobbing gently
  BUBBLES.forEach((b) => {
    const sc = clamp(W / 1500, 0.78, 1.1);
    let tx = rx + Math.cos(b.ang * D2R) * b.rad * sc + Math.sin(now / 1000 * 0.7 + b.phase) * 7;
    let ty = ry + Math.sin(b.ang * D2R) * b.rad * 0.62 * sc + Math.cos(now / 1000 * 0.6 + b.phase) * 6;
    tx = clamp(tx, 12 + 100, W - 12 - 100); ty = clamp(ty, 96 + 70, H - 190);
    if (tx < keep.introR + 110 && ty < keep.introB + 80) { if (W > 1100) tx = keep.introR + 110; else ty = keep.introB + 80; }     // keep clear of the title card
    if (tx < keep.listR + 110 && ty > H - 265) ty = H - 265;                                                                       // and of the breakfast list
    b.tx = tx; b.ty = ty;
  });
  // 2. bubbles push each other apart (a hovered one holds still and the others give way)
  for (let pass = 0; pass < 3; pass++) for (let i = 0; i < BUBBLES.length; i++) for (let j = i + 1; j < BUBBLES.length; j++) {
    const a = BUBBLES[i], c = BUBBLES[j], ox = 212 - Math.abs(a.tx - c.tx), oy = 160 - Math.abs(a.ty - c.ty);
    if (ox > 0 && oy > 0) {
      const wa = a.hover ? 0 : 1, wc = c.hover ? 0 : 1, sw = wa + wc || 1;
      if (ox < oy) { const s = Math.sign(a.tx - c.tx) || 1; a.tx += s * ox * wa / sw; c.tx -= s * ox * wc / sw; }
      else { const s = Math.sign(a.ty - c.ty) || 1; a.ty += s * oy * wa / sw; c.ty -= s * oy * wc / sw; }
    }
  }
  // 3. drift towards the target, draw the leader line
  BUBBLES.forEach((b) => {
    if (!b.hover) { b.x += (clamp(b.tx, 112, W - 112) - b.x) * k; b.y += (clamp(b.ty, 166, H - 190) - b.y) * k; }                // a hovered bubble holds still, so it is easy to click
    b.el.style.transform = `translate(${b.x}px, ${b.y}px) translate(-50%, -50%)`;
    const dx = b.x - rx, dy = b.y - ry, len = Math.hypot(dx, dy) || 1, edge = 70;
    b.line.setAttribute('x1', rx); b.line.setAttribute('y1', ry); b.line.setAttribute('x2', b.x - dx / len * Math.min(edge, len * 0.5)); b.line.setAttribute('y2', b.y - dy / len * Math.min(edge * 0.6, len * 0.5));
    b.line.style.opacity = b.hover ? 0.9 : 1;
  });
}
function drawBubbleMini(b, now) {
  if (b.mini === 'code') {
    if (b.lastPhase !== sim.phase) {
      b.lastPhase = sim.phase;
      const r = caseRange(sim.phase) || [0, 8], lo = Math.max(0, r[0] - 1), hi = Math.min(LINES.length, Math.max(r[1], lo + 9));
      b.codeEl.innerHTML = HTML_LINES.slice(lo, hi).map((h, i) => `<div class="${lo + i >= r[0] && lo + i < r[1] ? 'act' : ''}"><u>${lo + i + 1}</u>${h || ' '}</div>`).join('');
    }
  } else { GRAPHS[b.mini](b.cv, D, true, now); }
  const f = b.foot(); if (f !== b.footTxt) { b.footTxt = f; b.footEl.textContent = f; }
}

/* ------------------------------------------------------------------------------------------ the full screen ---- */
const modal = {open: false, id: null, cards: [], follow: true, last: -1};
const modalEl = $('k-modal'), mBody = $('k-mbody');
function openModal(id) {
  const b = BUBBLES.find((x) => x.id === id); modal.open = true; modal.id = id; modal.cards = []; modal.last = -1;
  $('k-mtitle').innerHTML = `<i style="background:${b.col}"></i>${b.title}<span>${b.tag}</span>`;
  if (id === 'code') {
    mBody.className = 'mbody code';
    mBody.innerHTML = `<div class="ctools"><button class="chip" id="c-dl">⬇ DOWNLOAD patrick_mission.cpp</button><button class="chip" id="c-cp">COPY</button><button class="chip on" id="c-fl" aria-pressed="true">FOLLOW THE ROBOT</button><span class="cinfo">Highlighted: the controller step Patrick is running right now. Build: <code>g++ -O2 -std=c++17 patrick_mission.cpp -o patrick</code></span></div>
      <div class="cview" id="c-view"><pre>${HTML_LINES.map((h, i) => `<div data-l="${i}"><u>${i + 1}</u>${h || ' '}</div>`).join('')}</pre></div>`;
    $('c-dl').onclick = download;
    $('c-cp').onclick = async (e) => { try { await navigator.clipboard.writeText(CPP); e.target.textContent = 'COPIED'; } catch { e.target.textContent = 'PRESS CTRL+C'; } setTimeout(() => { e.target.textContent = 'COPY'; }, 1600); };
    $('c-fl').onclick = (e) => { modal.follow = !modal.follow; e.target.classList.toggle('on', modal.follow); e.target.setAttribute('aria-pressed', modal.follow); };
    modal.cards = [];
  } else {
    mBody.className = 'mbody graphs n' + b.cards.length;
    mBody.innerHTML = `<div class="reads" id="m-reads"></div><div class="grid">` + b.cards.map(([g, t, sub], i) => `<div class="card"><h4>${t}</h4>${sub ? `<div class="sub">${sub}</div>` : ''}<canvas></canvas><div class="cap"></div></div>`).join('') + `</div>`;
    const cvs = mBody.querySelectorAll('canvas'), caps = mBody.querySelectorAll('.cap');
    b.cards.forEach(([g], i) => modal.cards.push({g, cv: cvs[i], cap: caps[i], txt: ''}));
  }
  modalEl.classList.add('on'); document.body.classList.add('modal-open'); $('k-mclose').focus();
}
function closeModal() { modal.open = false; modalEl.classList.remove('on'); document.body.classList.remove('modal-open'); mBody.innerHTML = ''; }
$('k-mclose').addEventListener('click', closeModal);
modalEl.addEventListener('click', (e) => { if (e.target === modalEl) closeModal(); });
function drawModal(now) {
  const b = BUBBLES.find((x) => x.id === modal.id);
  if (modal.id === 'code') {
    if (modal.last !== sim.phase) {
      modal.last = sim.phase; const view = $('c-view'); if (!view) return;
      view.querySelectorAll('.act').forEach((e) => e.classList.remove('act'));
      const r = caseRange(sim.phase); if (!r) return;
      for (let i = r[0]; i < r[1]; i++) view.querySelector(`[data-l="${i}"]`)?.classList.add('act');
      if (modal.follow) { const t = view.querySelector(`[data-l="${r[0]}"]`); if (t) view.scrollTo({top: Math.max(0, t.offsetTop - 70), behavior: reduce ? 'auto' : 'smooth'}); }
    }
    return;
  }
  modal.cards.forEach((c) => { const cap = GRAPHS[c.g](c.cv, D, false, now); if (cap && cap !== c.txt) { c.txt = cap; c.cap.innerHTML = cap; } });
  const rd = $('m-reads'); if (rd && b.reads) { const html = b.reads().map(([k, v, cl]) => `<div class="rd ${cl || ''}"><span>${k}</span><b>${v}</b></div>`).join(''); if (html !== modal.rh) { modal.rh = html; rd.innerHTML = html; } }
}

/* ----------------------------------------------------------------------------------------------- HUD ---------- */
const stepsEl = $('k-steps'), itemsEl = $('k-items');
STEPS.forEach((s) => { const e = document.createElement('span'); e.textContent = s; stepsEl.appendChild(e); });
ITEMS.forEach((it) => { const e = document.createElement('li'); e.innerHTML = `<i></i>${it.name}`; itemsEl.appendChild(e); });
let lastHud = '';
function updateHud() {
  const cur = PH2STEP[sim.phase], done = sim.phase === PH.DONE;
  const h = `${sim.status}|${sim.phase}|${sim.item}|${placedCount()}|${Math.floor(sim.t * 2)}`;
  if (h === lastHud) return; lastHud = h;
  $('k-phase').textContent = PHASE_LABEL[sim.phase]; $('k-time').textContent = fmt(sim.t, 0) + ' s';
  [...stepsEl.children].forEach((e, i) => { e.classList.toggle('on', !done && i === cur); });
  [...itemsEl.children].forEach((e, i) => { const q = sim.items[i]; e.dataset.s = q.state; e.classList.toggle('now', i === sim.item && sim.status !== 'READY' && q.state < 2); });
  $('k-prog').style.width = ((placedCount() + (sim.held ? 0.5 : 0)) / ITEMS.length * 100) + '%';
}

/* ------------------------------------------------------------------------------------------ frame loop -------- */
let acc = 0, frameN = 0, last = performance.now(), stageVisible = true, perf = {sum: 0, n: 0, slow: 0, age: 0};
new IntersectionObserver((es) => { stageVisible = es[0].isIntersecting; }, {threshold: 0.05}).observe(stageEl);
function frame(dt, now) {
  if (sim.g > 0 || sim.goal > 0) {                                  // advance the simulation by (real time x speed) in 1 ms ticks
    acc += Math.min(dt, 0.05) * S.speed;
    let n = 0; while (acc >= sim.dt && n < 160) { sim.step(); acc -= sim.dt; n++; }
    if (n >= 160) acc = 0;
  } else acc = 0;
  syncButtons();
  S.u += (S.uT - S.u) * (1 - Math.exp(-dt * 3)); if (Math.abs(S.uT - S.u) < 0.0005) S.u = S.uT;
  if (document.activeElement !== $('k-u')) $('k-u').value = S.u; $('k-uo').textContent = Math.round(S.u * 100) + '%';
  const st = robot.pose({phi: sim.phi, jaw: sim.jaw, wl: sim.wl, wr: sim.wr, bands: true, u: S.u});
  robot.root.position.set(sim.x, robot.root.userData.lift || 0, wz(sim.z)); robot.root.rotation.y = sim.yaw;
  sim.items.forEach((q, i) => { const m = itemMesh[i]; m.position.set(q.x, q.y, wz(q.z)); m.rotation.y = q.yaw; });
  key.target.position.set(sim.x, 0, wz(sim.z)); key.position.set(sim.x + 0.9, 1.6, wz(sim.z) - 0.7);
  const d = Math.min(sim.sn.d, 0.5); wedge.scale.set(d, 1, d); hitDot.position.set(d, 0, 0); hitDot.visible = sim.sn.d < 0.5; sonarViz.visible = sim.status !== 'READY' && S.u < 0.3;
  // a held item stays in the claw wherever the claw goes when Patrick is taken apart
  if (S.u > 0.02 && sim.held) itemMesh[sim.item].position.copy(byId.gripper.group.localToWorld(new V3(0.072, -0.012 - 0.0225, 0)));
  updateHud(); stepCamera(dt, now); layoutBubbles(dt, now);
  if (labOpen() && mouse && !ptrs.size && frameN % 2 === 0) {
    const id = pick(mouse[0], mouse[1]);
    if (id !== S.hover) { S.hover = id; highlight(); canvas.classList.toggle('pick', !!id); }
    const r = stageEl.getBoundingClientRect();
    if (id) { tipEl.textContent = byId[id].name; tipEl.style.left = (mouse[0] - r.left) + 'px'; tipEl.style.top = (mouse[1] - r.top) + 'px'; tipEl.classList.add('on'); } else tipEl.classList.remove('on');
  }
  if (S.sel && byId[S.sel]) {
    const b = new THREE.Box3().setFromObject(byId[S.sel].group), c = b.getCenter(new V3()); c.y = b.max.y; c.project(camera);
    selTag.style.left = ((c.x * 0.5 + 0.5) * stageEl.clientWidth) + 'px'; selTag.style.top = ((-c.y * 0.5 + 0.5) * stageEl.clientHeight) + 'px'; selTag.textContent = byId[S.sel].name; selTag.classList.add('on');
  } else selTag.classList.remove('on');
}
function loop(now) {
  const T = TIERS[tier];
  if (document.hidden || !stageVisible) { last = now; requestAnimationFrame(loop); return; }
  // on weaker tiers, a halted robot only needs 30 frames a second
  if (T.idle === 2 && !sim.active && !modal.open && (frameN + 1) % 2) { frameN++; requestAnimationFrame(loop); return; }
  const dt = Math.min((now - last) / 1000, 0.1); last = now; frameN++;
  frame(reduce && sim.status === 'READY' ? 0 : dt, now);
  if (T.shEvery > 1 && frameN % T.shEvery === 0) renderer.shadowMap.needsUpdate = true;
  (useComposer ? composer.render() : renderer.render(scene, camera));
  BUBBLES.forEach((b) => { if (frameN % (b.hover ? 2 : T.charts) === b.id.length % 2 || frameN < 4) drawBubbleMini(b, now); });
  if (modal.open && frameN % 2 === 0) drawModal(now);
  if (tier < TIERS.length - 1) {                                    // step the quality down if the page cannot hold about 40 fps
    perf.age += dt;
    if (perf.age > 1.0) {
      perf.sum += dt; perf.n++;
      if (perf.n >= 15) { const avg = perf.sum / perf.n; perf.slow = avg > 0.045 ? 2 : avg > 0.027 ? perf.slow + 1 : 0; perf.sum = perf.n = 0; if (perf.slow >= 2) { tier++; applyTier(); perf.slow = 0; perf.age = 0; } }
    }
  }
  requestAnimationFrame(loop);
}
function boot() {
  applyTier(); syncButtons(); setCam('cinema');
  rig.t.copy(targetPoint());
  const ready = renderer.compileAsync ? renderer.compileAsync(scene, camera) : Promise.resolve();
  ready.catch(() => {}).finally(() => { last = performance.now(); requestAnimationFrame(loop); });
  window.__KITCHEN = {tier: () => tier, setTier: (n) => { tier = n; applyTier(); }, select, setLab, sim, S, D, rig, want, robot, scene, camera, renderer, setCam, act, openModal, closeModal, modal, itemMesh, BUBBLES};
}
document.fonts?.ready?.then(boot, boot) ?? boot();
