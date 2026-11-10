// The CAD gallery: a globe of designs. Each design floats above the globe as a live, finished model; click one and it flies to the centre, where it can be
// taken apart, smoothly, into the layout of its CAD drawing, with the drawing's numbered balloons and bill of materials. Everything is built in code
// from the reference drawings, so the same model is both the finished product and the exploded view.
import {createStage, exploder, V3, THREE, clamp, ease, smooth, lerp} from '../kit.js';
import {explodeState} from '../stageui.js';
import {buildMissile} from '../models/missile.js';
import {buildAirframe, buildWingBox} from '../models/airframe.js';
import {buildPump} from '../models/pump.js';
import {buildEngine} from '../models/engine.js';
import {buildSheet, BRACKET, COMPLEX, COVER} from '../models/sheet.js';
import {DESIGN as PUMP_DESIGN} from '../pump/physics.js';
import {DESIGN as ENGINE_DESIGN} from '../engine/physics.js';
import {buildDrone} from '../../Mechatronics/drone/drone3d.js';
import {INFO as DRONE_INFO} from '../../Mechatronics/drone/parts.js';
import {buildRobot} from '../../Mechatronics/patrick/robot.js';
import {INFO as BOT_INFO, } from '../../Mechatronics/patrick/parts.js';
import {PHI_STOW} from '../../Mechatronics/patrick/model.js';

const $ = (id) => document.getElementById(id);
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const GR = 3.2;                                                   // globe radius
const ACC = '#c084fc', ACC2 = '#e879f9';

/* ------------------------------------------------------------------------------------ the designs ---- */
const withExplode = (m, extra) => { const ap = exploder(m.parts); return {...m, setU: (u, dt) => { ap(u); if (extra) extra(u, dt); }}; };
const ITEMS = [
  {id: 'missile', ref: 'missile', refExplode: true, refName: 'Falcon 1 – Missile Assembly Exploded Drawing', name: 'Falcon 1 Missile', tag: 'AEROSPACE · SYSTEM ASSEMBLY', blurb: 'An ogive nose, guidance bay, warhead section, four fins and a rocket motor, rebuilt from the exploded drawing. Decompose it and the twelve numbered items fall into the drawing’s layout.', build: (lite) => buildMissile({lite})},
  {id: 'airframe', ref: 'airframe', refName: 'Aircraft body and internal structure', name: 'Light Aircraft', tag: 'AEROSPACE · AIRFRAME', blurb: 'The finished aircraft, and the skeleton under its skin: fuselage frames and stringers, wing ribs with lightening holes, and spars. Decompose it to peel the skin away.', build: (lite) => buildAirframe({lite})},
  {id: 'wingbox', ref: 'wingbox', refName: 'Internal structure, section view', name: 'Wing Box', tag: 'STRUCTURES · SECTION VIEW', blurb: 'A wing box in section: seven ribs with lightening holes, three spars, and the skins and stringers that close it into a torsion box.', build: (lite) => buildWingBox({lite})},
  {id: 'bracket', ref: 'bracket', refName: 'Bracket.dft (Solid Edge)', name: 'Mounting Bracket', tag: 'SHEET METAL · SOLID EDGE', apartLabel: 'Unfold to flat pattern', backLabel: 'Fold', blurb: 'A 3 mm sheet-metal bracket with a 70 mm bore, four fixing holes, two mounting ears and two gussets: 196.87 mm wide and 88 mm high, modelled from its drawing. “Decompose” here means unfold it to the flat blank it was cut from.', build: (lite) => buildSheet(BRACKET, {lite})},
  {id: 'complex', ref: 'complex', refName: 'Complex Bracket (Solid Edge draft)', name: 'Complex Bracket', tag: 'SHEET METAL · SOLID EDGE', apartLabel: 'Unfold to flat pattern', backLabel: 'Fold', blurb: 'A 400 × 200 mm face plate in 2 mm sheet with a 210 mm slot, a left flange and a box-section right foot. Unfold it to see the single flat blank that makes it.', build: (lite) => buildSheet(COMPLEX, {lite})},
  {id: 'cover', ref: 'cover', refName: 'Sheet Cover.dft (Solid Edge)', name: 'Louvred Sheet Cover', tag: 'SHEET METAL · SOLID EDGE', apartLabel: 'Unfold to flat pattern', backLabel: 'Fold', blurb: 'A 119 × 94 mm cover with eight louvre slots, 46 mm side walls, 8 mm bolt holes in its foot flanges and an angled hem. One cut, five bends.', build: (lite) => buildSheet(COVER, {lite})},
  {id: 'pump', name: 'Centrifugal Pump', tag: 'TURBOMACHINERY', link: 'pump.html', linkText: 'Open the pump page', blurb: 'The irrigation pump: impeller, volute, shaft, seal, bearing bracket and motor. The page it comes from has the curves, velocity triangles and NPSH.',
    build: (lite) => { const m = buildPump(PUMP_DESIGN, {lite}); return withExplode(m, (u, dt) => m.update(dt, 5 * (1 - u), 0.7, u)); }},
  {id: 'engine', name: 'V8 Crank Assembly', tag: 'COMBUSTION', link: 'engine.html', linkText: 'Open the engine page', blurb: 'A twin-turbo V8: crankshaft, eight pistons and connecting rods, block, heads and sump, turning with the cylinders firing.',
    build: (lite) => { const m = buildEngine(ENGINE_DESIGN, {lite}); for (const id of ['heads', 'pistons']) m.byId[id].out = [0, 0, 0]; let th = 0; return withExplode(m, (u, dt) => { th += dt * 3.2 * (1 - smooth(u * 1.8)); m.pose(th, ease(u, 0, 0.8), null); }); }},
  {id: 'drone', name: 'Self-Stabilising Drone', tag: 'CONTROL SYSTEMS', link: 'mechatronics.html', linkText: 'Open the drone page', blurb: 'The agricultural quadcopter with its PID flight controller, as built for the control systems page.',
    build: (lite) => { const d = buildDrone({lite}); d.parts.forEach((p) => { const i = DRONE_INFO[p.id]; p.desc = i ? (i.role + ' ' + (i.desc || '')).trim() : p.name; }); return {root: d.root, parts: d.parts, meshes: d.meshes, setU: (u, dt) => d.pose({u, spin: 90, dt, effort: 0.4})}; }},
  {id: 'patrick', name: 'Patrick the Robot', tag: 'MECHATRONICS', link: 'mechatronics-2.html', linkText: 'Open the robot page', blurb: 'The two-wheeled breakfast robot with its arm, claw and ultrasonic eyes.',
    build: (lite) => { const r = buildRobot({lite}); r.parts.forEach((p) => { const i = BOT_INFO[p.id]; p.desc = i ? (i.role + ' ' + (i.desc || '')).trim() : p.name; }); return {root: r.root, parts: r.parts, meshes: r.meshes, setU: (u) => r.pose({phi: PHI_STOW, jaw: 0, wl: 0, wr: 0, bands: true, u})}; }},
];

/* ----------------------------------------------------------------------------------------- stage ---- */
const st = createStage({canvas: $('gl'), tint: '#c084fc', dist: 17, el: 0.12, az: Math.PI / 2, distRange: [9, 30], near: 0.1, far: 120});
const scene = st.scene, camera = st.camera;
const lite = st.tier.i >= 2;
const bgCol = new THREE.Color('#080a22');

/* the globe */
const globe = new THREE.Group(); scene.add(globe);
const gMats = [];
const fillMat = new THREE.MeshBasicMaterial({color: '#150c3a', transparent: true, opacity: 0.8, depthWrite: true}); gMats.push(fillMat);
globe.add(new THREE.Mesh(new THREE.SphereGeometry(GR, 64, 40), fillMat));
const wireMat = new THREE.LineBasicMaterial({color: '#8b5cf6', transparent: true, opacity: 0.4}); gMats.push(wireMat);
{ const pts = [], R_ = GR * 1.002, seg_ = 72;
  for (let la = -75; la <= 75; la += 15) { const y = Math.sin(la * Math.PI / 180) * R_, r = Math.cos(la * Math.PI / 180) * R_; for (let i = 0; i < seg_; i++) { const a = i / seg_ * Math.PI * 2, b = (i + 1) / seg_ * Math.PI * 2; pts.push(new V3(Math.cos(a) * r, y, Math.sin(a) * r), new V3(Math.cos(b) * r, y, Math.sin(b) * r)); } }
  for (let lo = 0; lo < 360; lo += 15) { const t = lo * Math.PI / 180; for (let i = 0; i < seg_ / 2; i++) { const a = -Math.PI / 2 + i / (seg_ / 2) * Math.PI, b = -Math.PI / 2 + (i + 1) / (seg_ / 2) * Math.PI; pts.push(new V3(Math.cos(a) * Math.cos(t) * R_, Math.sin(a) * R_, Math.cos(a) * Math.sin(t) * R_), new V3(Math.cos(b) * Math.cos(t) * R_, Math.sin(b) * R_, Math.cos(b) * Math.sin(t) * R_)); } }
  globe.add(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(pts), wireMat)); }
const glowMat = new THREE.ShaderMaterial({transparent: true, side: THREE.BackSide, blending: THREE.AdditiveBlending, depthWrite: false, uniforms: {k: {value: 1}},
  vertexShader: 'varying vec3 n; void main(){ n = normalize(normalMatrix * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
  fragmentShader: 'varying vec3 n; uniform float k; void main(){ float i = pow(max(0.0, 0.72 - dot(n, vec3(0.0,0.0,1.0))), 3.0); gl_FragColor = vec4(0.62, 0.38, 1.0, 1.0) * i * k; }'});
globe.add(new THREE.Mesh(new THREE.SphereGeometry(GR * 1.18, 48, 32), glowMat));
{ const n = lite ? 500 : 1400, pos = new Float32Array(n * 3); for (let i = 0; i < n; i++) { const y = 1 - 2 * (i + 0.5) / n, r = Math.sqrt(1 - y * y), ph = i * 2.399963; pos.set([Math.cos(ph) * r * GR * 1.012, y * GR * 1.012, Math.sin(ph) * r * GR * 1.012], i * 3); }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); const m = new THREE.PointsMaterial({color: '#c4b5fd', size: 0.028, transparent: true, opacity: 0.7}); gMats.push(m); globe.add(new THREE.Points(g, m)); }
const rings = []; for (const [rad, tilt, rot] of [[GR * 1.55, 1.15, 0.3], [GR * 1.75, 0.55, 2.1]]) { const m = new THREE.LineBasicMaterial({color: '#a78bfa', transparent: true, opacity: 0.22}); gMats.push(m); const l = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(Array.from({length: 120}, (_, i) => new V3(Math.cos(i / 120 * Math.PI * 2) * rad, 0, Math.sin(i / 120 * Math.PI * 2) * rad))), m); l.rotation.set(tilt, rot, 0); globe.add(l); rings.push(l); }

/* node positions and the mini models */
const N = 12, nodes = [];
for (let i = 0; i < N; i++) {
  const y = 1 - 2 * (i + 0.5) / N, r = Math.sqrt(1 - y * y), ph = i * 2.399963 + 0.5, n = new V3(Math.cos(ph) * r, y, Math.sin(ph) * r);
  const item = ITEMS[i] || null, holder = new THREE.Group(), pivot = new THREE.Group(); holder.position.copy(n).multiplyScalar(GR + 1.15); holder.quaternion.setFromUnitVectors(new V3(0, 1, 0), n); holder.add(pivot); globe.add(holder);
  const stem = new THREE.Line(new THREE.BufferGeometry().setFromPoints([n.clone().multiplyScalar(GR), n.clone().multiplyScalar(GR + 0.7)]), new THREE.LineBasicMaterial({color: item ? ACC2 : '#6d5bd0', transparent: true, opacity: item ? 0.9 : 0.4})); globe.add(stem);
  const ring = new THREE.Mesh(new THREE.RingGeometry(0.1, 0.16, 28), new THREE.MeshBasicMaterial({color: item ? ACC2 : '#6d5bd0', side: THREE.DoubleSide, transparent: true, opacity: item ? 0.95 : 0.4})); ring.position.copy(n).multiplyScalar(GR * 1.005); ring.quaternion.setFromUnitVectors(new V3(0, 0, 1), n); globe.add(ring);
  const node = {i, item, n, holder, pivot, hover: 0, s: 1, model: null, mini: 1};
  if (item) { const m = item.build(true); m.setU(0, 0); const fit = new THREE.Group(); fit.add(m.root); pivot.add(fit); node.model = m; node.fit = fit;
    const box = new THREE.Box3().setFromObject(m.root), size = box.getSize(new V3()), c = box.getCenter(new V3()); m.root.position.sub(c); node.miniScale = 1.9 / Math.max(size.x, size.y, size.z); fit.scale.setScalar(node.miniScale); node.center = c; node.asmSize = Math.max(size.x, size.y, size.z); }
  else { const dot = new THREE.Mesh(new THREE.OctahedronGeometry(0.16), new THREE.MeshBasicMaterial({color: '#7c6bd8', wireframe: true, transparent: true, opacity: 0.55})); pivot.add(dot); node.dot = dot; }
  nodes.push(node);
}
const allMiniMeshes = () => nodes.filter((n) => n.model && n.mini > 0.5).flatMap((n) => n.model.meshes.map((m) => (m.userData.nodeIndex = n.i, m)));
const labelsEl = $('labels');
for (const n of nodes) { const b = document.createElement('button'); b.className = 'glabel' + (n.item ? '' : ' soon'); b.textContent = n.item ? n.item.name : 'more designs soon'; b.disabled = !n.item; if (n.item) b.onclick = (e) => { e.stopPropagation(); enter(n); }; labelsEl.append(b); n.label = b; }

/* ----------------------------------------------------------------------------------- viewer state ---- */
const S = {mode: 'globe', t: 0, node: null, view: null, u: ex_(), bp: false, sel: null, hoverNum: null, spinV: 0.12, drag: 0};
function ex_() { return explodeState(0.9); }
const viewers = new Map();       // full-quality builds, made on first visit
const hl = []; const tmpBox = new THREE.Box3(), tmpC = new V3(), tmpS = new V3();
const startPos = new V3(), startQuat = new THREE.Quaternion(), viewQuat = new THREE.Quaternion().setFromEuler(new THREE.Euler(0.12, -0.5, 0));
const wq = new THREE.Quaternion(), wp = new V3();
const fitK = () => clamp(innerWidth / innerHeight / 1.5, 0.42, 1);              // a narrow portrait screen sees less width, so the model is drawn smaller

function ensureViewer(node) {
  if (viewers.has(node.item.id)) return viewers.get(node.item.id);
  const m = node.item.build(st.tier.i >= 2); m.setU(1, 0); const eb = new THREE.Box3().setFromObject(m.root), esz = eb.getSize(new V3()); m.setU(0, 0); const ab = new THREE.Box3().setFromObject(m.root), ac = ab.getCenter(new V3());
  const fit = new THREE.Group(); m.root.position.sub(ac); fit.add(m.root); scene.add(fit); fit.visible = false;
  m.parts.forEach((p, i) => { if (p.num == null) p.num = i + 1; });
  const bomMap = new Map(); for (const p of m.parts) { if (!bomMap.has(p.num)) bomMap.set(p.num, {num: p.num, name: p.name, desc: p.desc, parts: []}); bomMap.get(p.num).parts.push(p); }
  const v = {m, fit, scale: Math.min(8.4 / esz.y, 13 / esz.x, 8.4 / esz.z), bom: [...bomMap.values()].sort((a, b) => a.num - b.num), meshes: m.meshes, bpDone: false};
  viewers.set(node.item.id, v); return v;
}
function enter(node) {
  if (S.mode !== 'globe') return;
  S.node = node; S.view = ensureViewer(node); S.mode = 'in'; S.t = 0; S.sel = null; S.u = explodeState(0.9); S.bp = false; setBlueprint(false); document.body.classList.remove('paper-on'); $('b-bp').textContent = 'Drawing view';
  node.holder.getWorldPosition(startPos); node.pivot.getWorldQuaternion(startQuat); S.startScale = node.miniScale;
  S.view.fit.visible = true; node.model.root.visible = false;
  buildBom(); $('g-title').querySelector('h1').textContent = node.item.name; $('g-title').querySelector('.eyebrow').textContent = node.item.tag; $('g-blurb').textContent = node.item.blurb;
  const lk = $('g-link'); if (node.item.link) { lk.href = node.item.link; lk.textContent = node.item.linkText + ' →'; lk.hidden = false; } else lk.hidden = true;
  $('b-apart').textContent = node.item.apartLabel || 'Decompose to reference'; $('b-apart').setAttribute('aria-pressed', 'false'); $('b-bp').setAttribute('aria-pressed', 'false'); $('b-bp').title = node.item.ref ? 'Show the design as a line drawing, then as your exact drawing' : 'Show the design as a line drawing'; $('card').classList.remove('on');
  st.want.az = 0.7; st.want.el = 0.3; st.want.dist = 17; st.want.t.set(0, 0, 0); st.resetManual();
  document.body.classList.add('viewing');
}
function leave() { if (S.mode !== 'viewer') return; document.body.classList.remove('paper-on'); clearTimeout(paperT); S.mode = 'out'; S.t = 0; S.u.to(0); $('card').classList.remove('on'); document.body.classList.remove('viewing'); S.sel = null; setBlueprint(false); }
$('b-back').onclick = leave;
$('b-apart').onclick = (e) => { const on = S.u.toggle() > 0.5; e.target.textContent = on ? (S.node?.item.backLabel || 'Reassemble') : (S.node?.item.apartLabel || 'Decompose to reference'); e.target.setAttribute('aria-pressed', on); if (!on) $('card').classList.remove('on'); };
/* Drawing view: the model turns into hidden-line edges, then dissolves into the exact drawing it was built from, when there is one */
let paperT = 0;
function showPaper(on) {
  clearTimeout(paperT); const it = S.node && S.node.item; if (!it || !it.ref) return false;
  if (on) { $('paper-img').src = `./Syd%20Website%20Assets/Showcase/refs/${it.ref}.png`; $('paper-cap').textContent = 'Your drawing · ' + it.refName; if (it.refExplode && S.u.t < 0.5) { S.u.to(1); $('b-apart').textContent = it.backLabel || 'Reassemble'; $('b-apart').setAttribute('aria-pressed', 'true'); }
    paperT = setTimeout(() => document.body.classList.add('paper-on'), it.refExplode ? 1800 : 900); }
  else { document.body.classList.remove('paper-on'); }
  return true;
}
$('b-bp').onclick = (e) => {
  S.bp = !S.bp; e.target.setAttribute('aria-pressed', S.bp); e.target.textContent = S.bp ? (S.node?.item.ref ? 'Back to 3D' : 'Shaded view') : 'Drawing view';
  if (S.bp) setBlueprint(true); const had = showPaper(S.bp);
  if (!S.bp) { clearTimeout(paperT); const delay = had ? 900 : 0; paperT = setTimeout(() => setBlueprint(false), delay); }
};
addEventListener('keydown', (e) => { if (e.key === 'Escape') { if ($('card').classList.contains('on')) $('card').classList.remove('on'); else leave(); } });
$('card').querySelector('.x').onclick = () => $('card').classList.remove('on');

/* the bill of materials, drawn like the drawing's table */
function buildBom() {
  const el = $('bom'); el.replaceChildren();
  for (const b of S.view.bom) {
    const row = document.createElement('button'); row.className = 'bom-row'; row.innerHTML = `<i>${b.num}</i><span>${b.name}</span><em>×${b.parts.length}</em>`;
    row.onmouseenter = () => { S.hoverNum = b.num; }; row.onmouseleave = () => { S.hoverNum = null; }; row.onfocus = row.onmouseenter; row.onblur = row.onmouseleave;
    row.onclick = () => showCard(b); el.append(row);
  }
}
function showCard(b) { S.sel = b.num; const c = $('card'); c.querySelector('.k').textContent = `ITEM ${b.num} · ×${b.parts.length}`; c.querySelector('h3').textContent = b.name; c.querySelector('p').textContent = b.desc || ''; c.classList.add('on'); }
st.onClick = (cx, cy) => {
  if (S.mode === 'globe') { const hit = st.pick(cx, cy, allMiniMeshes().filter((m) => facing(nodes[m.userData.nodeIndex]) > 0.15)); if (hit) enter(nodes[hit.object.userData.nodeIndex]); }
  else if (S.mode === 'viewer') { const hit = st.pick(cx, cy, S.view.meshes); const pid = hit && hit.object.userData.part; const b = pid && S.view.bom.find((q) => q.parts.some((p) => p.id === pid)); if (b) showCard(b); else { S.sel = null; $('card').classList.remove('on'); } }
};
const facing = (n) => n.n.clone().applyQuaternion(globe.quaternion).z;
$('gl').addEventListener('pointermove', (e) => {
  if (S.mode === 'globe') { const hit = st.pick(e.clientX, e.clientY, allMiniMeshes().filter((m) => facing(nodes[m.userData.nodeIndex]) > 0.15)); S.hoverNode = hit ? nodes[hit.object.userData.nodeIndex] : null; $('gl').classList.toggle('pick', !!hit); }
  else if (S.mode === 'viewer') { const hit = st.pick(e.clientX, e.clientY, S.view.meshes); $('gl').classList.toggle('pick', !!hit); const pid = hit && hit.object.userData.part; const b = pid && S.view.bom.find((q) => q.parts.some((p) => p.id === pid)); S.hoverNum = b ? b.num : null; }
});

/* the drawing view: hidden-line edges over a dark fill, like the reference drawings */
const edgeMat = new THREE.LineBasicMaterial({color: '#e9e5ff', transparent: true, opacity: 0.9});
const fillOpaque = new THREE.MeshBasicMaterial({color: '#0b0d26', polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1, side: THREE.DoubleSide});
const fillGhost = new THREE.MeshBasicMaterial({transparent: true, opacity: 0, depthWrite: false, side: THREE.DoubleSide});
function setBlueprint(on) {
  const v = S.view; if (!v) return;
  for (const m of v.meshes) {
    if (!m.userData.edges && on) { m.userData.orig = m.material; const e = new THREE.LineSegments(new THREE.EdgesGeometry(m.geometry, 28), edgeMat); e.visible = false; m.add(e); m.userData.edges = e; }
    if (!m.userData.edges) continue;
    m.material = on ? (m.userData.orig.transparent && m.userData.orig.opacity < 0.7 ? fillGhost : fillOpaque) : m.userData.orig; m.userData.edges.visible = on;
  }
  document.body.classList.toggle('blueprint', on);
}

/* highlight boxes for the hovered/selected item */
function updateHighlight() {
  const want = S.mode === 'viewer' ? [S.hoverNum, S.sel].filter((x) => x != null) : [], parts = want.flatMap((n) => S.view.bom.find((b) => b.num === n)?.parts || []);
  while (hl.length < parts.length) { const h = new THREE.Box3Helper(new THREE.Box3(), new THREE.Color(ACC2)); scene.add(h); hl.push(h); }
  hl.forEach((h, i) => { h.visible = i < parts.length; if (i < parts.length) { tmpBox.setFromObject(parts[i].group); h.box.copy(tmpBox); h.updateMatrixWorld(true); } });
}
/* the drawing's balloons: a circle with the item number on a leader from the part */
const svg = $('balloons'), NS = 'http://www.w3.org/2000/svg';
function updateBalloons(u) {
  const show = S.mode === 'viewer' && u > 0.5, r = $('gl').getBoundingClientRect();
  if (!show) { if (svg.childElementCount) svg.replaceChildren(); return; }
  svg.setAttribute('viewBox', `0 0 ${r.width} ${r.height}`); svg.replaceChildren();
  const op = clamp((u - 0.5) / 0.4, 0, 1), cx = r.width / 2, cy = r.height / 2;
  S.view.bom.forEach((b, i) => {
    const p = b.parts[0]; tmpBox.setFromObject(p.group); tmpBox.getCenter(tmpC); const [x, y] = st.project(tmpC); let dx = x - cx, dy = y - cy; const L = Math.hypot(dx, dy) || 1; dx /= L; dy /= L;
    const off = 58 + (i % 3) * 16, bx = clamp(x + dx * off + (i % 2 ? 14 : -14) * 0, 24, r.width - 24), by = clamp(y + dy * off, 70, r.height - 24);
    const g = document.createElementNS(NS, 'g'); g.setAttribute('opacity', op * (S.sel != null && S.sel !== b.num ? 0.35 : 1));
    const ln = document.createElementNS(NS, 'line'); ln.setAttribute('x1', x); ln.setAttribute('y1', y); ln.setAttribute('x2', bx); ln.setAttribute('y2', by); ln.setAttribute('class', 'bl');
    const c = document.createElementNS(NS, 'circle'); c.setAttribute('cx', bx); c.setAttribute('cy', by); c.setAttribute('r', 12); c.setAttribute('class', 'bc' + (S.hoverNum === b.num || S.sel === b.num ? ' on' : ''));
    const t = document.createElementNS(NS, 'text'); t.setAttribute('x', bx); t.setAttribute('y', by + 4); t.setAttribute('class', 'bt'); t.textContent = b.num;
    const dt = document.createElementNS(NS, 'circle'); dt.setAttribute('cx', x); dt.setAttribute('cy', y); dt.setAttribute('r', 2.5); dt.setAttribute('class', 'bd');
    g.append(ln, dt, c, t); svg.append(g);
  });
}

/* ------------------------------------------------------------------------------------------- loop ---- */
let drift = 0, lastAz = Math.PI / 2, lastEl = 0.12;
st.onResize = () => {};
const tmpQ = new THREE.Quaternion();
st.loop((dt, now) => {
  // ----- the globe: spun by dragging, otherwise a slow turn
  if (S.mode === 'globe' || S.mode === 'in' || S.mode === 'out') {
    const dAz = st.want.az - Math.PI / 2, dEl = st.want.el - 0.12;
    if (S.mode === 'globe') { if (Math.abs(dAz) + Math.abs(dEl) > 1e-4) { globe.rotation.y += dAz; globe.rotation.x = clamp(globe.rotation.x + dEl, -1.1, 1.1); S.spinV = dAz / Math.max(dt, 0.008); S.drag = 1; } else S.drag = Math.max(0, S.drag - dt * 2); }
    if (S.mode === 'globe') { st.want.az = Math.PI / 2; st.want.el = 0.12; st.rig.az = Math.PI / 2; st.rig.el = 0.12; }
    if (S.mode === 'globe') { S.spinV += ((reduce ? 0 : 0.1) - S.spinV) * Math.min(1, dt * 1.2); if (!S.drag && !S.hoverNode) globe.rotation.y += S.spinV * dt * (S.spinV > 0.3 ? 0.4 : 1); else if (!S.drag) globe.rotation.y += S.spinV * dt * 0.2; }
  }
  rings.forEach((l, i) => { l.rotation.y += dt * 0.03 * (i ? -1 : 1); });
  // ----- the minis spin about their own up axis, and swell when hovered
  for (const n of nodes) {
    n.pivot.rotation.y += dt * (n.item ? 0.55 : 1.2); if (n.dot) n.dot.rotation.x += dt;
    const target = n === S.hoverNode ? 1 : 0; n.hover += (target - n.hover) * Math.min(1, dt * 8);
    const fade = S.mode === 'globe' ? 1 : S.mode === 'viewer' ? 0 : S.mode === 'in' ? 1 - ease(S.t, 0, 0.55) : ease(S.t, 0.45, 1);
    n.mini = fade; const sc = (1 + 0.14 * n.hover) * Math.max(0.0001, fade); n.holder.scale.setScalar(sc);
    n.holder.visible = fade > 0.01; if (n.model && n === S.node && S.mode !== 'globe') n.holder.visible = false;
  }
  for (const n of nodes) if (n.model) n.model.setU(0, dt);                    // keep the live ones alive (spinning rotors, firing cylinders)
  // ----- fly in / out
  const gFade = S.mode === 'globe' ? 1 : S.mode === 'viewer' ? 0 : S.mode === 'in' ? 1 - ease(S.t, 0.1, 0.8) : ease(S.t, 0.3, 1);
  globe.visible = gFade > 0.01; globe.scale.setScalar(lerp(0.55, 1, gFade)); fillMat.opacity = 0.8 * gFade; wireMat.opacity = 0.4 * gFade; glowMat.uniforms.k.value = gFade; for (const m of gMats) if (m.userData.base == null) m.userData.base = m.opacity; for (const m of gMats) if (m !== fillMat && m !== wireMat) m.opacity = m.userData.base * gFade;
  if (S.mode === 'in' || S.mode === 'out') {
    S.t = Math.min(1, S.t + dt / (reduce ? 0.01 : 1.5)); const s = smooth(S.mode === 'in' ? S.t : 1 - S.t), v = S.view;
    if (S.mode === 'out') { S.node.holder.getWorldPosition(startPos); S.node.pivot.getWorldQuaternion(startQuat); }
    v.fit.position.lerpVectors(startPos, new V3(0, 0, 0), s); v.fit.scale.setScalar(lerp(S.startScale * (1), v.scale * fitK(), s)); v.fit.quaternion.slerpQuaternions(startQuat, viewQuat, s);
    v.m.setU(S.u.step(dt, reduce), dt);
    if (S.t >= 1) { if (S.mode === 'in') S.mode = 'viewer'; else { S.mode = 'globe'; v.fit.visible = false; S.node.model.root.visible = true; st.want.az = Math.PI / 2; st.want.el = 0.12; st.want.dist = 17; st.rig.az = Math.PI / 2; st.rig.el = 0.12; S.node = null; S.view = null; } }
    if (S.mode === 'in' || S.mode === 'out') st.camStep(dt, now, {snap: 3});
  }
  if (S.mode === 'viewer') { const u = S.u.step(dt, reduce); S.view.m.setU(u, dt); S.view.fit.position.set(0, 0, 0); S.view.fit.scale.setScalar(S.view.scale * fitK()); S.view.fit.quaternion.copy(viewQuat); st.want.t.set(0, -0.1 * u, 0); st.want.dist = clamp(st.want.dist, 9, 30); st.camStep(dt, now, {drift: 0}); }
  if (S.mode === 'globe') { camera.position.set(0, 0, st.want.dist); camera.lookAt(0, 0, 0); st.rig.dist = st.want.dist; }
  // ----- overlays
  updateHighlight(); updateBalloons(S.mode === 'viewer' ? S.u.u : 0);
  const gl = $('gl').getBoundingClientRect();
  for (const n of nodes) {
    const f = facing(n), show = S.mode === 'globe' && globe.visible && f > 0.05; const el = n.label;
    if (!show) { el.style.opacity = 0; el.style.pointerEvents = 'none'; continue; }
    n.holder.getWorldPosition(wp); wp.add(n.n.clone().applyQuaternion(globe.quaternion).multiplyScalar(1.5)); const [x, y] = st.project(wp);
    el.style.opacity = clamp(f * 2.2, 0, 1) * (n.item ? 1 : 0.6); el.style.pointerEvents = n.item && f > 0.3 ? 'auto' : 'none'; el.style.transform = `translate(${Math.round(x)}px, ${Math.round(y)}px) translate(-50%, -50%)`; el.classList.toggle('on', n === S.hoverNode);
  }
  $('hintg').style.opacity = S.mode === 'globe' ? 1 : 0;
});
window.__GAL = {S, nodes, enter, leave, st, ITEMS, viewers};
