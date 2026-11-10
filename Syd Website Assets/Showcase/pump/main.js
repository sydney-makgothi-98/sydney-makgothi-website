// The centrifugal pump page: a 3D teardown (casing, impeller, shaft, seal, motor) with the model's graphs floating either side. Every number
// on screen comes from physics.js, and the impeller's blade shape is rebuilt from the same parameters, so the picture and the graphs cannot disagree.
import {createStage, exploder, V3, THREE, clamp, ease} from '../kit.js';
import {chart, label, dot, vline, COL, MONO, fmt} from '../chart.js';
import {graphs, partLabels, partCard, explodeState, fit} from '../stageui.js';
import {buildPump} from '../models/pump.js';
import * as P from './physics.js';

const $ = (id) => document.getElementById(id);
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const params = {...P.DESIGN};
const S = {sel: null, cut: false, spin: true};
const ex = explodeState();

let ready = false;
const st = createStage({canvas: $('gl'), tint: '#22d3ee', dist: 14, el: 0.3, az: 0.9, distRange: [3, 34], onTier: () => { if (ready) rebuild(true); }});
let pump = null, apply = null, labels = null;
function rebuild(keep) {
  if (pump) { st.scene.remove(pump.root); pump.dispose(); }
  pump = buildPump(params, {lite: st.tier.i >= 2}); pump.parts.forEach((p, i) => { p.index = i + 1; });
  st.scene.add(pump.root); apply = exploder(pump.parts); apply(ex.u); pump.setCut(S.cut);
  if (labels) labels.set(pump.parts);
  if (S.sel) { const p = pump.byId[S.sel.id]; S.sel = p; }
}
const cardEl = $('card'); const card = partCard(cardEl, () => { S.sel = null; });
labels = partLabels($('labels'), st, (p) => select(pump.byId[p.id]));
rebuild();
labels.set(pump.parts); ready = true;
const bbox = new THREE.Box3(), cc = new V3();
function select(p) {
  S.sel = p; const r = P.operatingPoint(params), g = P.geometry(params);
  const extra = { impeller: `D₂ ${(params.D2 * 1000).toFixed(0)} mm · ${params.z} blades · β₂ ${params.beta2}° · tip speed ${g.u2.toFixed(1)} m/s`, motor: `${params.N} rpm · shaft power ${(r ? r.Pshaft / 1000 : 0).toFixed(2)} kW`, volute: `base circle ${(g.r2 * 1.06 * 2000).toFixed(0)} mm · discharge velocity head converts to pressure`, shaft: `torque ${(r ? r.Pshaft / (g.w) : 0).toFixed(1)} N·m at the duty point`, suction: `eye velocity ${r ? r.cm1.toFixed(1) : '-'} m/s · NPSH required ${r ? r.npshr.toFixed(1) : '-'} m` }[p.id] || '';
  card.show(p, extra);
}
st.onClick = (cx, cy) => {
  const hit = st.pick(cx, cy, pump.meshes); if (hit) select(pump.byId[hit.object.userData.part]); else { S.sel = null; card.hide(); }
};
$('gl').addEventListener('pointermove', (e) => { const hit = st.pick(e.clientX, e.clientY, pump.meshes); $('gl').classList.toggle('pick', !!hit); });

/* ------------------------------------------------------------------------------------------------ graphs ---- */
const r_ = () => P.operatingPoint(params), g_ = () => P.geometry(params);
const QMAX = 0.03, ls = (Q) => Q * 1000;
const curve = (f, n = 90) => Array.from({length: n + 1}, (_, i) => { const Q = QMAX * i / n; return [ls(Q), f(Q)]; });
function drawHQ(c) {
  const {ctx, w, h} = fit(c), g = g_(), op = r_(), b = P.bep(params, g), top = Math.ceil(P.pump(0, params, g).Hth / 10) * 10 + 5;
  const {X, Y} = chart(ctx, {x: 46, y: 12, w: w - 60, h: h - 44}, {xr: [0, QMAX * 1000], yr: [0, top], xl: 'flow Q, L/s', yl: 'head, m', nx: 6, ny: 4,
    series: [{pts: curve((Q) => P.pump(Q, params, g).HthInf), color: 'rgba(255,255,255,0.18)', width: 1.2, dash: [2, 4]}, {pts: curve((Q) => P.pump(Q, params, g).Hth), color: 'rgba(255,255,255,0.4)', width: 1.4, dash: [5, 4]}, {pts: curve((Q) => Math.max(0, P.pump(Q, params, g).H)), color: COL.cyan, width: 2.6}, {pts: curve((Q) => P.Hsys(Q, params)), color: COL.amber, width: 2.2}],
    over: [(X, Y) => { vline(ctx, X, ls(b.Q), Y(top), Y(0), 'rgba(52,211,153,0.5)'); label(ctx, 'BEP', X(ls(b.Q)), Y(0) - 10, COL.green, 'center', 9); if (op) { dot(ctx, X(ls(op.Q)), Y(op.H), '#fff', 5.5); label(ctx, `${ls(op.Q).toFixed(1)} L/s · ${op.H.toFixed(1)} m`, Math.min(X(ls(op.Q)) + 10, w - 120), Y(op.H) - 14, '#fff', 'left', 10.5, '600'); } }]});
  label(ctx, 'pump', X(1.5), Y(P.pump(0.0015, params, g).H) - 10, COL.cyan, 'left', 10); label(ctx, 'system', X(ls(QMAX) * 0.72), Y(P.Hsys(QMAX * 0.72, params)) - 10, COL.amber, 'left', 10);
  label(ctx, 'Euler, with slip', X(1.5), Y(P.pump(0.0015, params, g).Hth) - 9, 'rgba(255,255,255,0.5)', 'left', 9);
}
function drawEff(c) {
  const {ctx, w, h} = fit(c), g = g_(), op = r_(), pmax = Math.max(...curve((Q) => P.pump(Q, params, g).Pshaft / 1000).map((q) => q[1])) * 1.1;
  const rect = {x: 46, y: 12, w: w - 76, h: h - 44};
  const {X, Y} = chart(ctx, rect, {xr: [0, QMAX * 1000], yr: [0, 100], xl: 'flow Q, L/s', yl: 'efficiency, %', nx: 6, ny: 4,
    series: [{pts: curve((Q) => { const r = P.pump(Q, params, g); return r.H > 0 ? r.eta * 100 : NaN; }), color: COL.green, width: 2.6}],
    over: [(X, Y) => { ctx.beginPath(); curve((Q) => P.pump(Q, params, g).Pshaft / 1000).forEach(([q, v], i) => (i ? ctx.lineTo(X(q), rect.y + rect.h - v / pmax * rect.h) : ctx.moveTo(X(q), rect.y + rect.h - v / pmax * rect.h))); ctx.strokeStyle = COL.pink; ctx.lineWidth = 2; ctx.stroke(); if (op) { dot(ctx, X(ls(op.Q)), Y(op.eta * 100), COL.green, 5); dot(ctx, X(ls(op.Q)), rect.y + rect.h - op.Pshaft / 1000 / pmax * rect.h, COL.pink, 5); label(ctx, `${(op.eta * 100).toFixed(0)}%`, X(ls(op.Q)) + 8, Y(op.eta * 100) - 10, COL.green, 'left', 10, '600'); label(ctx, `${(op.Pshaft / 1000).toFixed(2)} kW`, X(ls(op.Q)) + 8, rect.y + rect.h - op.Pshaft / 1000 / pmax * rect.h + 12, COL.pink, 'left', 10, '600'); } }]});
  [0, 0.5, 1].forEach((f) => label(ctx, (pmax * f).toFixed(1), rect.x + rect.w + 6, rect.y + rect.h - f * rect.h, COL.pink, 'left', 9)); label(ctx, 'shaft power, kW', rect.x + rect.w + 6, rect.y - 2, COL.pink, 'right', 9);
}
function drawTri(c) {
  const {ctx, w, h} = fit(c), g = g_(), op = r_(); if (!op) return;
  const u2 = g.u2, cu2 = op.cu2, cm2 = op.cm2, sc = Math.min((w - 70) / (u2 * 1.05), (h - 70) / (Math.max(cm2, 2) * 2.4));
  const ox = 30, oy = h - 36;                                             // origin: the blade tip, with u2 pointing left to right along the bottom
  const A = [ox, oy], U = [ox + u2 * sc, oy], C = [ox + cu2 * sc, oy - cm2 * sc];
  const arrow = (a, b, col, lab, dx = 0, dy = -8) => { ctx.strokeStyle = col; ctx.fillStyle = col; ctx.lineWidth = 2.2; ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.stroke(); const an = Math.atan2(b[1] - a[1], b[0] - a[0]); ctx.beginPath(); ctx.moveTo(b[0], b[1]); ctx.lineTo(b[0] - 9 * Math.cos(an - 0.4), b[1] - 9 * Math.sin(an - 0.4)); ctx.lineTo(b[0] - 9 * Math.cos(an + 0.4), b[1] - 9 * Math.sin(an + 0.4)); ctx.fill(); label(ctx, lab, (a[0] + b[0]) / 2 + dx, (a[1] + b[1]) / 2 + dy, col, 'center', 10, '600'); };
  arrow(A, U, COL.muted, `u₂ = ${u2.toFixed(1)} m/s`, 0, 12); arrow(A, C, COL.cyan, `c₂ = ${Math.hypot(cu2, cm2).toFixed(1)}`, -34, -12);
  arrow(U, C, COL.amber, `w₂ = ${op.w2.toFixed(1)}`, 40, -10); ctx.setLineDash([3, 4]); ctx.strokeStyle = COL.faint; ctx.beginPath(); ctx.moveTo(C[0], C[1]); ctx.lineTo(C[0], oy); ctx.stroke(); ctx.setLineDash([]);
  label(ctx, `cₘ = ${cm2.toFixed(1)}`, C[0] + 6, (C[1] + oy) / 2, COL.pink, 'left', 10); label(ctx, `cᵤ = ${cu2.toFixed(1)}`, (A[0] + C[0]) / 2 - 24, oy - 10, COL.green, 'center', 10);
  ctx.strokeStyle = COL.amber; ctx.beginPath(); ctx.arc(U[0], U[1], 26, Math.PI, Math.PI + Math.atan2(cm2, u2 - cu2), false); ctx.stroke(); label(ctx, `β₂ ${params.beta2}°`, U[0] - 56, U[1] - 8, COL.amber, 'center', 10);
  label(ctx, `slip factor σ = ${g.sigma.toFixed(2)}  ·  H = u₂cᵤ / g = ${op.Hth.toFixed(1)} m (ideal)`, 8, 14, COL.muted, 'left', 10);
}
function drawNPSH(c) {
  const {ctx, w, h} = fit(c), g = g_(), op = r_(), top = Math.max(6, ...curve((Q) => P.npsha(Q, params)).map((q) => q[1]), ...curve((Q) => P.pump(Q, params, g).npshr).map((q) => q[1])) + 1;
  const cav = (() => { for (let Q = 0.001; Q < QMAX; Q += 0.0002) if (P.npsha(Q, params) < P.pump(Q, params, g).npshr) return Q; return null; })();
  const {X, Y} = chart(ctx, {x: 46, y: 12, w: w - 60, h: h - 44}, {xr: [0, QMAX * 1000], yr: [0, Math.ceil(top)], xl: 'flow Q, L/s', yl: 'NPSH, m', nx: 6, ny: 4,
    under: [(X, Y) => { if (cav !== null) { ctx.fillStyle = 'rgba(248,113,113,0.12)'; ctx.fillRect(X(ls(cav)), Y(Math.ceil(top)), X(QMAX * 1000) - X(ls(cav)), Y(0) - Y(Math.ceil(top))); label(ctx, 'cavitation', X(ls(cav)) + 8, Y(Math.ceil(top)) + 12, COL.red, 'left', 10); } }],
    series: [{pts: curve((Q) => P.npsha(Q, params)), color: COL.blue, width: 2.4}, {pts: curve((Q) => P.pump(Q, params, g).npshr), color: COL.pink, width: 2.4}],
    over: [(X, Y) => { if (op) { const a = P.npsha(op.Q, params); dot(ctx, X(ls(op.Q)), Y(a), COL.blue, 4.5); dot(ctx, X(ls(op.Q)), Y(op.npshr), COL.pink, 4.5); label(ctx, `margin ${(a - op.npshr).toFixed(1)} m`, X(ls(op.Q)) + 8, (Y(a) + Y(op.npshr)) / 2, a - op.npshr > 0.6 ? COL.green : COL.red, 'left', 10.5, '600'); } }]});
  label(ctx, 'available (sump)', X(1), Y(P.npsha(0.001, params)) - 10, COL.blue, 'left', 10); label(ctx, 'required (pump)', X(1), Y(P.pump(0.001, params, g).npshr) + 12, COL.pink, 'left', 10);
}
function drawBL(c) {
  const {ctx, w, h} = fit(c), op = r_(), Q = op ? op.Q : 0.01, bl = P.boundaryLayer(Q, params), mm = (v) => v * 1000, ymax = Math.max(...bl.pts.map((q) => mm(q.delta))) * 1.25;
  const {X, Y} = chart(ctx, {x: 46, y: 12, w: w - 60, h: h - 56}, {xr: [0, mm(bl.L)], yr: [0, ymax], xl: 'distance along the blade, mm', yl: 'thickness, mm', nx: 5, ny: 3,
    under: [(X, Y) => { ctx.fillStyle = 'rgba(96,165,250,0.08)'; ctx.fillRect(X(0), Y(ymax), X(Math.min(mm(bl.xtr), mm(bl.L))) - X(0), Y(0) - Y(ymax)); ctx.fillStyle = 'rgba(248,113,113,0.08)'; if (mm(bl.xtr) < mm(bl.L)) ctx.fillRect(X(mm(bl.xtr)), Y(ymax), X(mm(bl.L)) - X(mm(bl.xtr)), Y(0) - Y(ymax)); }],
    series: [{pts: bl.pts.map((q) => [mm(q.x), mm(q.delta)]), color: COL.cyan, width: 2.4}, {pts: bl.pts.map((q) => [mm(q.x), mm(q.dstar)]), color: COL.amber, width: 1.8, dash: [4, 3]}],
    over: [(X, Y) => { if (mm(bl.xtr) < mm(bl.L)) { vline(ctx, X, mm(bl.xtr), Y(ymax), Y(0), COL.red); label(ctx, 'transition', X(mm(bl.xtr)) + 5, Y(ymax) + 10, COL.red, 'left', 10); } }]});
  label(ctx, `δ  boundary layer`, X(1), Y(ymax * 0.94), COL.cyan, 'left', 10); label(ctx, `δ*  displacement`, X(1), Y(ymax * 0.86), COL.amber, 'left', 10);
  label(ctx, `mean relative speed ${bl.wmean.toFixed(1)} m/s  ·  Re = ${bl.ReL.toExponential(1)}  ·  ${bl.ReL < 5e5 ? 'laminar all the way' : 'transition at ' + mm(bl.xtr).toFixed(0) + ' mm'}`, w - 12, h - 5, COL.muted, 'right', 9);
  // the blade section: a NACA-style thickness form, drawn to the blade's real thickness over its chord
  const chord = bl.L, tc = params.t / chord, ix = w - 150, iy = 40, iw = 120; ctx.beginPath(); for (let i = 0; i <= 40; i++) { const xc = i / 40; ctx.lineTo(ix + xc * iw, iy - P.nacaT(xc, Math.min(0.2, tc * 1.0)) * iw * 3.2); } for (let i = 40; i >= 0; i--) { const xc = i / 40; ctx.lineTo(ix + xc * iw, iy + P.nacaT(xc, Math.min(0.2, tc * 1.0)) * iw * 3.2); } ctx.closePath(); ctx.fillStyle = 'rgba(224,169,90,0.5)'; ctx.fill(); ctx.strokeStyle = '#e0a95a'; ctx.stroke();
  label(ctx, `blade section, t/c = ${tc.toFixed(3)} (drawn ×3)`, ix + iw / 2, iy + 22, COL.muted, 'center', 9);
}
const gr = graphs({hq: drawHQ, eff: drawEff, tri: drawTri, npsh: drawNPSH, bl: drawBL});

/* ----------------------------------------------------------------------------------------------- controls ---- */
function hud() {
  const op = r_(), g = g_(), b = P.bep(params, g);
  $('hud').textContent = op ? `Q ${ls(op.Q).toFixed(1)} L/s  ·  H ${op.H.toFixed(1)} m  ·  η ${(op.eta * 100).toFixed(0)}%  ·  ${(op.Pshaft / 1000).toFixed(2)} kW  ·  ${(op.Q / b.Q * 100).toFixed(0)}% of BEP` : 'the pump cannot lift this far: no operating point';
  const rows = $('ptable'); if (!rows) return;
  const na = op ? P.npsha(op.Q, params) : 0, ws = P.specificSpeed(b.Q, b.H, params.N), set = (id, v) => { const e = $(id); if (e) e.textContent = v; };
  set('t-bep', `${ls(b.Q).toFixed(1)} L/s at ${b.H.toFixed(1)} m, η = ${(b.eta * 100).toFixed(0)}%`); set('t-op', op ? `${ls(op.Q).toFixed(1)} L/s at ${op.H.toFixed(1)} m` : 'none'); set('t-shut', `${P.pump(0, params, g).H.toFixed(1)} m`);
  set('t-tip', `${g.u2.toFixed(1)} m/s`); set('t-ws', ws.toFixed(2)); set('t-npsh', op ? `${op.npshr.toFixed(1)} m required, ${na.toFixed(1)} m available` : '-'); set('t-sig', g.sigma.toFixed(3)); set('t-re', P.boundaryLayer(op ? op.Q : 0.01, params).ReL.toExponential(1));
  set('t-aff', `×${(params.N / 2900).toFixed(2)} speed → flow ×${(params.N / 2900).toFixed(2)}, head ×${((params.N / 2900) ** 2).toFixed(2)}, power ×${((params.N / 2900) ** 3).toFixed(2)} (against 2 900 rpm)`);
}
let rebuildT;
function changed(geom) { hud(); gr.draw(); if (geom) { clearTimeout(rebuildT); rebuildT = setTimeout(() => rebuild(), 90); } }
const bind = (id, key, fmtv, geom) => { const el = $(id), out = $(id + '-v'); const upd = () => { params[key] = +el.value; out.textContent = fmtv(+el.value); }; el.oninput = () => { upd(); changed(geom); }; el.value = params[key] * (key === 'D2' ? 1000 : 1); upd(); };
bind('s-n', 'N', (v) => v + ' rpm', false); bind('s-b2', 'beta2', (v) => v + '°', true); bind('s-valve', 'valve', (v) => v.toFixed(1) + '×', false); bind('s-lift', 'lift', (v) => v.toFixed(1) + ' m', false);
{ const el = $('s-d2'), out = $('s-d2-v'); const upd = () => { params.D2 = +el.value / 1000; out.textContent = el.value + ' mm'; }; el.oninput = () => { upd(); changed(true); }; el.value = params.D2 * 1000; upd(); }
$('b-apart').onclick = (e) => { const on = ex.toggle() > 0.5; e.target.textContent = on ? 'Reassemble' : 'Disassemble'; e.target.setAttribute('aria-pressed', on); if (!on) { S.sel = null; card.hide(); st.want.t.set(0, 0, 0); } };
$('b-cut').onclick = (e) => { S.cut = !S.cut; pump.setCut(S.cut); e.target.setAttribute('aria-pressed', S.cut); };
$('b-spin').onclick = (e) => { S.spin = !S.spin; e.target.setAttribute('aria-pressed', S.spin); e.target.textContent = S.spin ? 'Pause flow' : 'Run flow'; };
$('b-reset').onclick = () => { Object.assign(params, P.DESIGN); for (const [id, key, f] of [['s-n', 'N', 1], ['s-b2', 'beta2', 1], ['s-valve', 'valve', 1], ['s-lift', 'lift', 1], ['s-d2', 'D2', 1000]]) { const el = $(id); el.value = params[key] * (f === 1000 ? 1000 : 1); el.dispatchEvent(new Event('input')); } };
const fixTheme = () => { $('gl').setAttribute('aria-label', 'Interactive 3D centrifugal pump. Drag to orbit, scroll to zoom, press Disassemble to take it apart and click a part for a description.'); }; fixTheme();

/* ---------------------------------------------------------------------------------------------- the loop ---- */
const focusV = new V3();
st.onResize = () => gr.draw();
let spinV = 0;
st.loop((dt, now) => {
  const u = ex.step(dt, reduce); apply(u);
  const op = r_();
  spinV += ((S.spin ? 1 : 0) * (params.N / 2900) * (reduce ? 0 : 7) - spinV) * Math.min(1, dt * 2);       // an easy start and stop, never a jump
  pump.update(dt, spinV, op ? op.Q / 0.0097 : 0.3, u);
  if (S.sel) { bbox.setFromObject(S.sel.group); bbox.getCenter(focusV); const size = bbox.getSize(new V3()); st.want.t.lerp(focusV, 0.12); st.want.dist = clamp(Math.max(size.x, size.y, size.z) * 2.8 + 2.5, 4, 14); }
  else { st.want.t.lerp(new V3(-1.2 * u, -0.4, 0), 0.06); if (!st.manual()) st.want.dist = (14 + 7 * ease(u, 0, 1)) * (innerWidth / innerHeight < 0.9 ? 1.4 : 1); }
  st.camStep(dt, now, {drift: reduce ? 0 : 0.28, az0: 0.9});
  labels.update(pump.parts, u, S.sel && S.sel.id);
  $('hud-u').textContent = u > 0.02 ? `exploded ${Math.round(u * 100)}%` : 'assembled';
});
changed(false); gr.draw();
window.__PUMP = {params, P, st, ex, select, rebuild, S, get pump() { return pump; }, gr};
