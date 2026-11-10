// Reference 2: the self-stabilising agricultural drone. One simple, smooth stage: the drone hovers in place (with a minor sway) over a plain
// gradient, graphs float down both sides with no boxes, and the whole drone comes apart. The PID controller is the centrepiece.
import * as THREE from 'three';
import * as M from './model.js';
import {buildDrone} from './drone3d.js';
import {INFO, TAGS} from './parts.js';
import {GRAPHS, analysis, pidBars} from './graphs.js';

const $ = (id) => document.getElementById(id);
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
const V3 = THREE.Vector3;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const stageEl = $('d-stage'), canvas = $('d-gl');
if (!stageEl || !canvas) throw new Error('drone stage markup is missing');

/* ------------------------------------------------------------------------------------------------ state ---- */
const sim = new M.Sim();
const S = {sim, loop: 'z', u: 0, uT: 0, sel: null, iso: false, hover: null, speed: 1, paused: false};
const ctx = () => ({sim, gs: sim.gs, loop: S.loop});

/* ---------------------------------------------------------------------------------------- tiers + renderer ---- */
const TIERS = [{pr: 1.75, charts: 2}, {pr: 1.4, charts: 3}, {pr: 1.0, charts: 4}, {pr: 0.8, charts: 6}];
function startTier() {
  const forced = new URLSearchParams(location.search).get('tier'); if (forced) return clamp(+forced || 0, 0, 3);
  const coarse = matchMedia('(pointer: coarse)').matches, small = Math.min(innerWidth, innerHeight) < 700, cores = navigator.hardwareConcurrency || 4, mem = navigator.deviceMemory || 4;
  if (coarse || small) return 2; if (cores <= 4 || mem <= 4) return 1; return 0;
}
let tier = startTier();
const renderer = new THREE.WebGLRenderer({canvas, antialias: true, alpha: true, powerPreference: 'high-performance'});
renderer.setClearColor(0x000000, 0); renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05; renderer.outputColorSpace = THREE.SRGBColorSpace;
const scene = new THREE.Scene();
const pmrem = new THREE.PMREMGenerator(renderer);
function studioEnv() {                                              // softboxes to reflect in the black shell and silver caps
  const s = new THREE.Scene();
  s.add(new THREE.Mesh(new THREE.SphereGeometry(12, 32, 16), new THREE.MeshBasicMaterial({color: new THREE.Color('#1a2140'), side: THREE.BackSide})));
  const panel = (w, h, pos, k, col = '#ffffff') => { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({color: new THREE.Color(col).multiplyScalar(k), side: THREE.DoubleSide})); m.position.set(...pos); m.lookAt(0, 0, 0); s.add(m); };
  panel(8, 5, [-4, 7, 5], 4.5); panel(1.6, 7, [6, 3, -3], 6, '#cfe4ff'); panel(3, 3, [-6, 1, -5], 3, '#9fd8ff'); panel(10, 10, [0, 11, 0], 1.3); panel(12, 2.5, [0, -3, 8], 1.4, '#38bdf8');
  return pmrem.fromScene(s, 0.015).texture;
}
scene.environment = studioEnv(); scene.environmentIntensity = 0.95;
const camera = new THREE.PerspectiveCamera(32, 1, 0.02, 10);
const key = new THREE.DirectionalLight('#fff3e0', 2.0); key.position.set(0.6, 1.2, 0.8); scene.add(key);
const rim = new THREE.DirectionalLight('#7dc8ff', 0.7); rim.position.set(-0.8, 0.4, -0.7); scene.add(rim);
scene.add(new THREE.HemisphereLight('#aab8ff', '#141830', 0.45));
const drone = buildDrone({lite: tier >= 1});
scene.add(drone.root);
const byId = drone.byId;

function applyTier() { renderer.setPixelRatio(Math.min(devicePixelRatio || 1, TIERS[tier].pr)); resize(); }
function resize() {
  const vp = canvas.parentElement, w = vp.clientWidth, h = vp.clientHeight;
  renderer.setSize(w, h, false); camera.aspect = w / h; camera.fov = w / h < 0.9 ? 52 : 32; camera.updateProjectionMatrix(); measure();
}
addEventListener('resize', resize);

/* --------------------------------------------------------------------------------------------- camera ---- */
const rig = {az: 0.62, el: 0.34, dist: 0.78, t: new V3(0, 0.0, 0)}, want = {az: rig.az, el: rig.el, dist: rig.dist};
let manual = false, idleT = 0;
const bbox = new THREE.Box3(), bsize = new V3(), selC = new V3();
function stepCamera(dt, now) {
  const k = 1 - Math.exp(-dt * 4);
  let az = want.az, el = want.el, dist = want.dist, tgt = selC.set(0, 0, 0);
  if (!manual) az = 0.62 + 0.25 * Math.sin(now / 1000 * 0.09);                // a slow drift while nobody is touching it
  const wide = 1 + 0.9 * S.u;
  if (S.sel && byId[S.sel]) { bbox.setFromObject(byId[S.sel].group); bbox.getCenter(selC); bbox.getSize(bsize); dist = clamp(Math.max(bsize.x, bsize.y, bsize.z) * 3.4 + 0.12, 0.2, 0.9); az = rig.az; el = rig.el; }
  else dist = want.dist * wide;
  rig.az += (az - rig.az) * k; rig.el += (el - rig.el) * k; rig.dist += (dist - rig.dist) * k; rig.t.lerp(tgt, 1 - Math.exp(-dt * 5));
  const ce = Math.cos(rig.el);
  camera.position.set(rig.t.x + rig.dist * ce * Math.cos(rig.az), rig.t.y + rig.dist * Math.sin(rig.el), rig.t.z + rig.dist * ce * Math.sin(rig.az));
  camera.lookAt(rig.t);
}
const ptrs = new Map(); let dragged = false, mouse = null;
canvas.addEventListener('pointerdown', (e) => { canvas.setPointerCapture(e.pointerId); ptrs.set(e.pointerId, [e.clientX, e.clientY]); dragged = false; canvas.classList.add('drag'); });
canvas.addEventListener('pointermove', (e) => {
  mouse = [e.clientX, e.clientY];
  if (!ptrs.has(e.pointerId)) return;
  const prev = ptrs.get(e.pointerId); ptrs.set(e.pointerId, [e.clientX, e.clientY]);
  const dx = e.clientX - prev[0], dy = e.clientY - prev[1]; if (Math.abs(dx) + Math.abs(dy) > 1) dragged = true;
  if (!manual) { want.az = rig.az; manual = true; }
  want.az += dx * 0.008; want.el = clamp(want.el + dy * 0.006, 0.02, 1.45); rig.az = want.az; rig.el = want.el;
});
const endPtr = (e) => { const was = ptrs.size === 1 && !dragged; ptrs.delete(e.pointerId); canvas.classList.remove('drag'); if (was && e.type === 'pointerup' && (labOpen())) { const id = pick(e.clientX, e.clientY); select(id === S.sel ? null : id); } };
canvas.addEventListener('pointerup', endPtr); canvas.addEventListener('pointercancel', endPtr);
canvas.addEventListener('pointerleave', () => { mouse = null; S.hover = null; tipEl.classList.remove('on'); highlight(); });
canvas.addEventListener('wheel', (e) => { e.preventDefault(); manual = true; want.dist = clamp(want.dist * Math.exp(e.deltaY * 0.0012), 0.3, 2.2); }, {passive: false});

/* --------------------------------------------------------------------------------------- the graphs ---- */
const GDEF = {
  simulink: {title: 'SIMULINK MODEL', col: '#38bdf8', anchor: 'fc', cards: [['simulink', 'The model: four PID loops around the nonlinear quadrotor']], reads: () => [['Controller', sim.ctrl], ['Plant', sim.mode === 'linear' ? 'linear (4 double integrators)' : 'nonlinear 12-state (eq. 2.1)'], ['Hover thrust', (M.M * M.G).toFixed(2) + ' N']]},
  locus: {title: 'ROOT LOCUS', col: '#34d399', anchor: 'fc', cards: [['locus', 'Where the closed-loop poles go as the gain grows']], reads: () => { const an = analysis(S); return [['Loop', M.LOOP_NAME[S.loop]], ['Poles now', an.poles.filter((z) => z.im >= 0).map((z) => z.re.toFixed(2) + (z.im ? '±' + z.im.toFixed(2) + 'i' : '')).join('  ')], ['Design poles', '−3.33 ± 4.15i']]; }},
  bode: {title: 'BODE · NYQUIST', col: '#e879f9', anchor: 'imu', cards: [['bode', 'Gain and phase of the open loop'], ['nyquist', 'Nyquist curve']], reads: () => { const an = analysis(S); return [['Loop', M.LOOP_NAME[S.loop]], ['Crossover', an.margins.wc ? an.margins.wc.toFixed(2) + ' rad/s' : '—'], ['Phase margin', an.margins.pm != null ? an.margins.pm.toFixed(1) + '°' : 'none']]; }},
  states: {title: 'LIVE STATES', col: '#60a5fa', anchor: 'shell', cards: [['states', 'Attitude, altitude and drift, live']], reads: () => [['Altitude', sim.z.toFixed(2) + ' m'], ['Roll / pitch / yaw', [sim.phi, sim.th, sim.psi].map((v) => (v * 180 / Math.PI).toFixed(1) + '°').join('  ')], ['Drift x, y', sim.x.toFixed(1) + ' m, ' + sim.y.toFixed(1) + ' m']]},
  shoot: {title: 'P · I · PI · PD · PID', col: '#fbbf24', anchor: 'baro', cards: [['shoot', 'Which controllers stabilise a double integrator?']], reads: () => { const an = analysis(S); return Object.keys(an.shoot).map((t) => [t, an.shoot[t].ok ? 'stable' : 'unstable']); }},
  effort: {title: 'CONTROL EFFORT', col: '#f472b6', anchor: 'motorRR', cards: [['effort', 'U1 to U4: what the controller asks of the motors']], reads: () => [['U1', sim.U[0].toFixed(2) + ' N'], ['Effort so far', sim.energy.toFixed(0)], ['Report, free fall', '≈ 5500 J']]},
};
const gEls = {};
document.querySelectorAll('.g').forEach((el) => { const id = el.dataset.g; gEls[id] = {el, cv: el.querySelector('canvas'), def: GDEF[id], dirty: true}; el.style.setProperty('--c', GDEF[id].col); el.addEventListener('click', () => openModal(id)); el.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(id); } }); el.addEventListener('pointerenter', () => { gEls[id].dirty = true; }); });
function drawG(id, now, force) {
  const g = gEls[id]; if (!g) return;
  analysis(S);
  GRAPHS[g.def.cards[0][0]](g.cv, S, false, now);
}
const LIVE = ['simulink', 'states', 'effort'];                           // these change every frame; the rest only when settings change

/* --------------------------------------------------------------------------------------- full screen ---- */
const modal = {open: false, id: null, cards: [], rh: ''};
const modalEl = $('d-modal'), mBody = $('d-mbody');
function openModal(id) {
  const d = GDEF[id]; modal.open = true; modal.id = id; modal.cards = [];
  $('d-mtitle').innerHTML = `<i style="background:${d.col}"></i>${d.title}`;
  mBody.innerHTML = `<div class="reads" id="m-reads"></div><div class="grid n${d.cards.length}">` + d.cards.map(([g, t]) => `<div class="card"><h4>${t}</h4><canvas></canvas><div class="cap"></div></div>`).join('') + '</div>';
  const cvs = mBody.querySelectorAll('canvas'), caps = mBody.querySelectorAll('.cap');
  d.cards.forEach(([g], i) => modal.cards.push({g, cv: cvs[i], cap: caps[i], txt: ''}));
  modalEl.classList.add('on'); document.body.classList.add('modal-open'); $('d-mclose').focus();
}
function closeModal() { modal.open = false; modalEl.classList.remove('on'); document.body.classList.remove('modal-open'); mBody.innerHTML = ''; }
$('d-mclose').addEventListener('click', closeModal);
modalEl.addEventListener('click', (e) => { if (e.target === modalEl) closeModal(); });
function drawModal(now) {
  analysis(S);
  modal.cards.forEach((c) => { const cap = GRAPHS[c.g](c.cv, S, true, now); if (cap && cap !== c.txt) { c.txt = cap; c.cap.textContent = cap; } });
  const rd = $('m-reads'); if (rd) { const html = GDEF[modal.id].reads().map(([k, v]) => `<div class="rd"><span>${k}</span><b>${v}</b></div>`).join(''); if (html !== modal.rh) { modal.rh = html; rd.innerHTML = html; } }
}

/* -------------------------------------------------------------------------------------------- controls ---- */
const SCN = Object.keys(M.SCENARIOS);
const scnEl = $('d-scn');
SCN.forEach((k) => { const b = document.createElement('button'); b.className = 'chip' + (k === 'hover' ? ' on' : ''); b.dataset.k = k; b.textContent = M.SCENARIOS[k].name; b.onclick = () => runScenario(k); scnEl.appendChild(b); });
function runScenario(k) {
  sim.reset(k); S.paused = false; $('d-pause').textContent = 'PAUSE';
  scnEl.querySelectorAll('.chip').forEach((b) => b.classList.toggle('on', b.dataset.k === k));
  $('d-blurb').textContent = M.SCENARIOS[k].blurb; if (S.u > 0.02) { S.uT = 0; select(null); }
}
function seg(id, key, vals, fn) {
  const el = $(id); el.querySelectorAll('button').forEach((b) => b.addEventListener('click', () => { el.querySelectorAll('button').forEach((x) => x.classList.toggle('on', x === b)); fn(b.dataset.v); }));
}
seg('d-ctrl', 'ctrl', null, (v) => { sim.ctrl = v; $('d-gains').classList.toggle('dis', v === 'PD'); runScenario(sim.scn); });
seg('d-gains', 'gains', null, (v) => { sim.gains = v; runScenario(sim.scn); });
seg('d-mode', 'mode', null, (v) => { sim.mode = v; runScenario(sim.scn); });
seg('d-speed', 'speed', null, (v) => { S.speed = +v; });
seg('d-loop', 'loop', null, (v) => { S.loop = v; });
$('d-pause').addEventListener('click', (e) => { S.paused = !S.paused; e.currentTarget.textContent = S.paused ? 'RESUME' : 'PAUSE'; });
$('d-replay').addEventListener('click', () => runScenario(sim.scn));
addEventListener('keydown', (e) => { if (e.target.closest?.('input, select, textarea')) return; if (e.key === 'Escape') { if (modal.open) closeModal(); else if (S.sel) select(null); } });

/* ------------------------------------------------------------------------------------- disassembly ---- */
const labEl = $('d-lab'), partEl = $('d-part'), tipEl = $('d-tip'), selTag = $('d-seltag');
const labOpen = () => labEl.classList.contains('on') || S.u > 0.02;
const ray = new THREE.Raycaster(), ndc = new THREE.Vector2(), accent = new THREE.Color('#38bdf8');
const visibleDeep = (o) => { for (let p = o; p; p = p.parent) if (!p.visible) return false; return true; };
function pick(cx, cy) {
  const r = canvas.getBoundingClientRect(); ndc.set(((cx - r.left) / r.width) * 2 - 1, -((cy - r.top) / r.height) * 2 + 1); ray.setFromCamera(ndc, camera);
  const hit = ray.intersectObjects(drone.meshes.filter(visibleDeep), false).find((h) => !(S.iso && S.sel && h.object.userData.part !== S.sel));
  return hit ? hit.object.userData.part : null;
}
function highlight() {
  for (const p of drone.parts) {
    const isSel = S.sel === p.id, isHov = S.hover === p.id && !isSel, dim = S.iso && S.sel && !isSel;
    for (const m of p.mats) {
      if (m.emissive) m.emissive.copy(accent).multiplyScalar(isSel ? 0.2 : isHov ? 0.14 : 0);
      if (m.transparent !== !!dim && !m.isMeshBasicMaterial) { m.transparent = !!dim; m.needsUpdate = true; }
      if (!m.isMeshBasicMaterial) { m.opacity = dim ? 0.07 : 1; m.depthWrite = !dim; }
    }
  }
}
function renderPart() {
  if (!S.sel) { partEl.classList.remove('on'); return; }
  const p = byId[S.sel], info = INFO[S.sel], [tn, tc] = TAGS[info.tag];
  partEl.innerHTML = `<div class="tagrow"><span class="tag" style="color:${tc};border-color:${tc}66">${tn}</span><h3>${p.name}</h3><div class="acts"><button class="chip ${S.iso ? 'on' : ''}" id="dp-iso" aria-pressed="${S.iso}">ISOLATE</button><button class="chip" id="dp-x">CLOSE</button></div></div>
    <p class="role">${info.role}</p><p class="desc">${info.desc}</p><div class="specs" id="dp-specs"></div>`;
  $('dp-iso').onclick = () => { S.iso = !S.iso; highlight(); renderPart(); }; $('dp-x').onclick = () => select(null);
  partEl.classList.add('on'); partEl.dataset.id = S.sel; specsTick = 0;
}
let specsTick = 0;
function updateSpecs() { if (!S.sel) return; const el = $('dp-specs'); if (!el) return; const html = INFO[S.sel].specs(ctx()).map(([k, v]) => `<div><span>${k}</span><b>${v}</b></div>`).join(''); if (html !== el._h) { el._h = html; el.innerHTML = html; } }
function select(id) {
  S.sel = id; if (!id) S.iso = false; highlight(); renderPart();
  document.querySelectorAll('#d-plist .chip').forEach((b) => b.classList.toggle('on', b.dataset.id === id));
  if (id && S.u < 0.6) S.uT = Math.max(S.uT, 0.7);
}
drone.parts.forEach((p) => { const b = document.createElement('button'); b.className = 'chip'; b.dataset.id = p.id; b.textContent = p.name.toUpperCase(); b.style.setProperty('--c', TAGS[INFO[p.id].tag][1]); b.onclick = () => select(S.sel === p.id ? null : p.id); $('d-plist').appendChild(b); });
function setLab(on) { labEl.classList.toggle('on', on); stageEl.classList.toggle('lab-open', on); $('d-lab-btn').setAttribute('aria-pressed', on); if (on) { if (S.uT < 0.01) S.uT = 0.7; } else { S.uT = 0; select(null); } }
$('d-lab-btn').addEventListener('click', () => setLab(!labEl.classList.contains('on')));
$('d-reasm').addEventListener('click', () => { S.uT = 0; select(null); });
$('d-u').addEventListener('input', (e) => { S.uT = S.u = +e.target.value; });

/* ------------------------------------------------------------------------- leader lines to the drone ---- */
const leaders = $('d-leaders'), SVGNS = 'http://www.w3.org/2000/svg';
const anchorsLocal = {fc: new V3(0.004, 0.008, 0.002), imu: new V3(-0.014, 0.008, -0.0115), baro: new V3(-0.016, 0.008, 0.0125), shell: new V3(0, 0.05, 0), motorRR: new V3(-0.104, 0.022, 0.104)};
Object.values(gEls).forEach((g) => { const ln = document.createElementNS(SVGNS, 'line'); ln.setAttribute('stroke', g.def.col); ln.setAttribute('stroke-opacity', '0.35'); ln.setAttribute('stroke-width', '1'); ln.setAttribute('stroke-dasharray', '2 4'); leaders.appendChild(ln); const dot = document.createElementNS(SVGNS, 'circle'); dot.setAttribute('r', '2.5'); dot.setAttribute('fill', g.def.col); leaders.appendChild(dot); g.ln = ln; g.dot = dot; });
let VP = {W: 1, H: 1}, rects = {};
function measure() { VP.W = canvas.parentElement.clientWidth; VP.H = canvas.parentElement.clientHeight; const sr = stageEl.getBoundingClientRect(); for (const [id, g] of Object.entries(gEls)) { const r = g.el.getBoundingClientRect(); rects[id] = {x: r.left - sr.left, y: r.top - sr.top, w: r.width, h: r.height}; } }
const tmp = new V3();
function layoutLeaders() {
  const lines = innerWidth >= 900;
  leaders.style.display = lines ? '' : 'none'; if (!lines) return;
  for (const [id, g] of Object.entries(gEls)) {
    const a = anchorsLocal[g.def.anchor], r = rects[id]; if (!a || !r) continue;
    const holder = (g.def.anchor === 'motorRR') ? byId.motorRR.group : drone.root; tmp.copy(a); if (S.u > 0.02) { const part = byId[g.def.anchor === 'shell' ? 'shell' : g.def.anchor]; if (part) tmp.add(part.group.position); }
    drone.root.localToWorld(tmp); tmp.project(camera);
    const ax = (tmp.x * 0.5 + 0.5) * VP.W, ay = (-tmp.y * 0.5 + 0.5) * VP.H, left = r.x < VP.W / 2, sx = left ? r.x + r.w - 6 : r.x + 6, sy = r.y + 14;
    g.ln.setAttribute('x1', sx); g.ln.setAttribute('y1', sy); g.ln.setAttribute('x2', ax); g.ln.setAttribute('y2', ay); g.dot.setAttribute('cx', ax); g.dot.setAttribute('cy', ay);
  }
}

/* ------------------------------------------------------------------------------------------ frame loop ---- */
let acc = 0, frameN = 0, last = performance.now(), visible = true, perf = {sum: 0, n: 0, slow: 0, age: 0};
new IntersectionObserver((es) => { visible = es[0].isIntersecting; }, {threshold: 0.05}).observe(stageEl);
let lastKey = '';
function frame(dt, now) {
  if (!S.paused) { acc += Math.min(dt, 0.05) * S.speed; let n = 0; while (acc >= sim.dt && n < 120) { sim.step(); acc -= sim.dt; n++; } if (n >= 120) acc = 0; }
  S.u += (S.uT - S.u) * (1 - Math.exp(-dt * 3.2)); if (Math.abs(S.uT - S.u) < 0.0005) S.u = S.uT;
  if (document.activeElement !== $('d-u')) $('d-u').value = S.u; $('d-uo').textContent = Math.round(S.u * 100) + '%';
  // pose: tilt from the sim, a little drift (kept small so the drone stays in frame), props spin with thrust
  const eff = Math.min(1, Math.abs(sim.terms.z.u) / 6 + Math.abs(sim.terms.roll.u) * 40);
  drone.pose({roll: sim.phi, pitch: sim.th, yaw: sim.psi, u: S.u, spin: 70 * Math.sqrt(Math.max(0.2, sim.U[0] / (M.M * M.G))), dt, effort: eff});
  drone.root.position.set(Math.tanh(sim.x * 0.08) * 0.07, clamp((sim.z - M.ZREF) * 0.012, -0.08, 0.08), -Math.tanh(sim.y * 0.08) * 0.07);
  if (sim.crashed && !modal.open) { /* shown on the states graph */ }
  stepCamera(dt, now); layoutLeaders();
  if (labOpen() && mouse && !ptrs.size && frameN % 2 === 0) {
    const id = pick(mouse[0], mouse[1]); if (id !== S.hover) { S.hover = id; highlight(); canvas.classList.toggle('pick', !!id); }
    const r = stageEl.getBoundingClientRect(); if (id) { tipEl.textContent = byId[id].name; tipEl.style.left = (mouse[0] - r.left) + 'px'; tipEl.style.top = (mouse[1] - r.top) + 'px'; tipEl.classList.add('on'); } else tipEl.classList.remove('on');
  }
  if (S.sel && byId[S.sel]) { const b = new THREE.Box3().setFromObject(byId[S.sel].group), c = b.getCenter(new V3()); c.y = b.max.y; c.project(camera); selTag.style.left = ((c.x * 0.5 + 0.5) * VP.W) + 'px'; selTag.style.top = ((-c.y * 0.5 + 0.5) * VP.H) + 'px'; selTag.textContent = byId[S.sel].name; selTag.classList.add('on'); } else selTag.classList.remove('on');
}
function drawAll(now) {
  const T = TIERS[tier], key = [sim.ctrl, sim.gains, S.loop].join('|'), changed = key !== lastKey; lastKey = key;
  document.querySelectorAll('#d-loop button').forEach((b) => b.classList.toggle('on', b.dataset.v === S.loop));
  for (const id of Object.keys(gEls)) if (changed || LIVE.includes(id) && frameN % T.charts === 0 || gEls[id].dirty) { drawG(id, now); gEls[id].dirty = false; }
  if (frameN % 3 === 0) { pidBars($('d-bars'), S); $('d-pidlabel').textContent = `PID CONTROLLER · ${M.LOOP_NAME[S.loop].toUpperCase()} LOOP`; }
  if (frameN % 15 === 0) updateSpecs();
  if (frameN % 10 === 0) { $('d-hud').innerHTML = `ALT <b>${sim.z.toFixed(1)} m</b> · ROLL <b>${(sim.phi * 180 / Math.PI).toFixed(1)}°</b> · PITCH <b>${(sim.th * 180 / Math.PI).toFixed(1)}°</b> · t <b>${sim.t.toFixed(1)} s</b>${sim.crashed ? ' · <b class="bad">GROUND CONTACT</b>' : ''}`; }
}
function loop(now) {
  if (document.hidden || !visible) { last = now; requestAnimationFrame(loop); return; }
  const dt = Math.min((now - last) / 1000, 0.1); last = now; frameN++;
  frame(reduce && S.paused ? 0 : dt, now);
  renderer.render(scene, camera);
  drawAll(now); if (modal.open && frameN % 2 === 0) drawModal(now);
  if (tier < TIERS.length - 1) { perf.age += dt; if (perf.age > 1.2) { perf.sum += dt; perf.n++; if (perf.n >= 15) { const avg = perf.sum / perf.n; perf.slow = avg > 0.045 ? 2 : avg > 0.027 ? perf.slow + 1 : 0; perf.sum = perf.n = 0; if (perf.slow >= 2) { tier++; applyTier(); perf.slow = 0; perf.age = 0; } } } }
  requestAnimationFrame(loop);
}
function boot() {
  applyTier(); highlight(); renderPart(); $('d-blurb').textContent = M.SCENARIOS.hover.blurb;
  const ready = renderer.compileAsync ? renderer.compileAsync(scene, camera) : Promise.resolve();
  ready.catch(() => {}).finally(() => { last = performance.now(); requestAnimationFrame(loop); });
  window.__DRONE = {sim, S, M, drone, select, setLab, runScenario, openModal, closeModal, modal, camera, renderer, tier: () => tier, setTier: (n) => { tier = n; applyTier(); }, analysis: () => analysis(S)};
}
document.fonts?.ready?.then(boot, boot) ?? boot();
