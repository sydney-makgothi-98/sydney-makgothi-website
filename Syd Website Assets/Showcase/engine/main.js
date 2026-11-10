// The engine page: the crank, piston and connecting-rod assembly of a twin-turbo V8 turning in a translucent block, with combustion glowing in each
// chamber and the graphs (pressure, P-V, kinematics, forces, torque) tracking the crank angle live. All of it reads from physics.js.
import {createStage, exploder, V3, THREE, clamp, ease, smooth} from '../kit.js';
import {chart, label, dot, vline, COL, MONO} from '../chart.js';
import {graphs, partLabels, partCard, explodeState, fit} from '../stageui.js';
import {buildEngine, FIRE} from '../models/engine.js';
import * as E from './physics.js';

const $ = (id) => document.getElementById(id);
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const p = {...E.DESIGN};
const S = {sel: null, spin: true, lock: true, theta: 0.6, s: null, tt: null};
const ex = explodeState();
let ready = false;
const st = createStage({canvas: $('gl'), tint: '#fb7185', dist: 27, el: 0.3, az: 0.78, distRange: [6, 64], onTier: () => { if (ready) rebuild(); }});
let eng = null, apply = null, labels = null;
const card = partCard($('card'), () => { S.sel = null; });
function recompute() { S.s = E.summary(p); S.tt = E.totalTorque(S.s, p); }
function rebuild() {
  if (eng) { st.scene.remove(eng.root); eng.dispose(); }
  eng = buildEngine(p, {lite: st.tier.i >= 2}); eng.parts.forEach((q, i) => { q.index = i + 1; });
  // heads and pistons lift along their own bores inside pose(); the exploder moves the other parts as groups
  for (const id of ['heads', 'pistons']) eng.byId[id].out = [0, 0, 0];
  st.scene.add(eng.root); apply = exploder(eng.parts); apply(ex.u); if (labels) labels.set(eng.parts); if (S.sel) S.sel = eng.byId[S.sel.id];
}
labels = partLabels($('labels'), st, (q) => select(eng.byId[q.id]));
recompute(); rebuild(); labels.set(eng.parts); ready = true;
function select(q) {
  S.sel = q; const s = S.s, g = s.g;
  const extra = {pistons: `bore ${p.bore.toFixed(1)} mm · ${g.mRecip.toFixed(2)} kg reciprocating · peak inertia force ${(s.Fin / 1000).toFixed(1)} kN`, rods: `length ${p.rod} mm · rod ratio λ = ${g.lam.toFixed(3)} · peak side thrust ${(s.maxSide / 1000).toFixed(1)} kN`, crank: `stroke ${p.stroke.toFixed(2)} mm · pin Ø${p.pin} mm · peak torque ${s.torque.toFixed(0)} N·m at ${p.rpm} rpm`, block: `displacement ${(g.Vd * 1e6 / 1000).toFixed(3)} L · S/B ${g.SB.toFixed(2)}`, heads: `compression ratio ${p.cr.toFixed(1)}:1 · peak cylinder pressure ${(s.pmax / 1e5).toFixed(0)} bar`}[q.id] || '';
  card.show(q, extra);
}
st.onClick = (cx, cy) => { const hit = st.pick(cx, cy, eng.meshes); if (hit && hit.object.userData.part) select(eng.byId[hit.object.userData.part]); else { S.sel = null; card.hide(); } };
$('gl').addEventListener('pointermove', (e) => { $('gl').classList.toggle('pick', !!st.pick(e.clientX, e.clientY, eng.meshes)); });

/* ----------------------------------------------------------------------------------------------- graphs ---- */
const D2R = Math.PI / 180, wrap720 = (d) => ((d + 360) % 720 + 720) % 720 - 360;
const cur = () => { const th = ((S.theta / D2R) % 720 + 720) % 720, d = wrap720(th - 45); return {th, d, thTdc: ((d % 360) + 360) % 360, thTotal: (d + 720) % 720}; };     // cylinder R0 is the reference: it fires at crank angle 45
const bar = (v) => v / 1e5;
function drawPV(c) {
  const {ctx, w, h} = fit(c), s = S.s, g = s.g, pts = s.c.pts, cc = cur(), Vmax = (g.Vc + g.Vd1) * 1e6, top = Math.ceil(bar(s.pmax) / 50) * 50 + 10;
  const {X, Y} = chart(ctx, {x: 48, y: 12, w: w - 62, h: h - 44}, {xr: [0, Vmax * 1.04], yr: [0, top], xl: 'cylinder volume, cm³', yl: 'pressure, bar', nx: 5, ny: 4,
    under: [(X, Y) => { ctx.beginPath(); pts.forEach((q, i) => (i ? ctx.lineTo(X(q.V * 1e6), Y(bar(q.p))) : ctx.moveTo(X(q.V * 1e6), Y(bar(q.p))))); ctx.closePath(); ctx.fillStyle = 'rgba(251,113,133,0.12)'; ctx.fill(); }],
    series: [{pts: s.c.ideal.map((q) => [q.V * 1e6, bar(q.p)]), color: 'rgba(255,255,255,0.4)', width: 1.3, dash: [4, 4]}, {pts: pts.map((q) => [q.V * 1e6, bar(q.p)]), color: COL.orange, width: 2.4}],
    over: [(X, Y) => { if (Math.abs(cc.d) <= 180) { const q = pts[Math.min(pts.length - 1, Math.round((cc.d + 180) / 0.5))]; dot(ctx, X(q.V * 1e6), Y(bar(q.p)), '#fff', 5); } }]});
  label(ctx, `imep ${bar(s.imep).toFixed(1)} bar · ηᵢ ${(s.etaI * 100).toFixed(0)}%`, X(Vmax * 0.5), Y(top * 0.9), COL.orange, 'left', 10.5, '600'); label(ctx, `ideal Otto ${(s.etaOtto * 100).toFixed(0)}%`, X(Vmax * 0.5), Y(top * 0.8), 'rgba(255,255,255,0.55)', 'left', 10);
}
function drawPT(c) {
  const {ctx, w, h} = fit(c), s = S.s, pts = s.c.pts, cc = cur(), top = Math.ceil(bar(s.pmax) / 50) * 50 + 10, qmax = Math.max(...pts.map((q) => q.dQ)) * D2R;
  const rect = {x: 48, y: 12, w: w - 62, h: h - 44};
  const {X, Y} = chart(ctx, rect, {xr: [-180, 180], yr: [0, top], xl: 'crank angle from firing TDC, °', yl: 'pressure, bar', nx: 6, ny: 4,
    series: [{pts: pts.filter((_, i) => i % 2 === 0).map((q) => [q.d, bar(q.p)]), color: COL.orange, width: 2.4}],
    over: [(X, Y) => { ctx.beginPath(); pts.filter((_, i) => i % 2 === 0).forEach((q, i) => { const y = rect.y + rect.h - (q.dQ * D2R / qmax) * rect.h * 0.45; i ? ctx.lineTo(X(q.d), y) : ctx.moveTo(X(q.d), y); }); ctx.strokeStyle = COL.pink; ctx.lineWidth = 1.6; ctx.stroke(); if (Math.abs(cc.d) <= 180) { vline(ctx, X, cc.d, Y(top), Y(0), '#fff'); } }]});
  label(ctx, `pₘₐₓ ${bar(s.pmax).toFixed(0)} bar at ${s.c.thpmax.toFixed(1)}° ATDC`, X(-170), Y(top * 0.92), COL.orange, 'left', 10.5, '600'); label(ctx, 'heat release rate', X(-170), Y(top * 0.82), COL.pink, 'left', 10);
}
function drawKin(c) {
  const {ctx, w, h} = fit(c), s = S.s, g = s.g, cc = cur(), N = 120, xs = [], vs = [], as = [];
  for (let i = 0; i <= N; i++) { const th = i / N * 2 * Math.PI, k = E.kin(th, g); xs.push([th / D2R, k.x / g.S]); vs.push(k.v * s.w); as.push(k.a * s.w * s.w); }
  const vm = Math.max(...vs.map(Math.abs)), am = Math.max(...as.map(Math.abs));
  const {X, Y} = chart(ctx, {x: 48, y: 12, w: w - 62, h: h - 44}, {xr: [0, 360], yr: [-1.1, 1.1], xl: 'crank angle from TDC, °', yl: 'normalised', nx: 6, yticks: [-1, 0, 1],
    series: [{pts: xs, color: COL.cyan, width: 2.2}, {pts: xs.map(([a], i) => [a, vs[i] / vm]), color: COL.green, width: 2.2}, {pts: xs.map(([a], i) => [a, as[i] / am]), color: COL.red, width: 2.2}],
    over: [(X, Y) => vline(ctx, X, cc.thTdc, Y(1.1), Y(-1.1), '#fff')]});
  label(ctx, `x  0–${(g.S * 1000).toFixed(0)} mm`, X(6), Y(0.97), COL.cyan, 'left', 10); label(ctx, `v  ±${vm.toFixed(0)} m/s`, X(105), Y(0.97), COL.green, 'left', 10); label(ctx, `a  ${(am / 1000).toFixed(0)} km/s²`, X(205), Y(0.97), COL.red, 'left', 10);
}
function drawForces(c) {
  const {ctx, w, h} = fit(c), s = S.s, cc = cur(), N = 144, gas = [], ine = [], net = [];
  for (let i = 0; i <= N; i++) { const d = -360 + i / N * 720, f = E.forces(d, s.c, p, s.pf); gas.push([d, f.Fgas / 1000]); ine.push([d, f.Fin / 1000]); net.push([d, f.Fnet / 1000]); }
  const lo = Math.min(...ine.map((q) => q[1]), ...net.map((q) => q[1])) * 1.1, hi = Math.max(...gas.map((q) => q[1])) * 1.08;
  const {X, Y} = chart(ctx, {x: 48, y: 12, w: w - 62, h: h - 44}, {xr: [-360, 360], yr: [lo, hi], xl: 'crank angle, ° (0 = firing TDC)', yl: 'force on piston, kN', nx: 6, ny: 4,
    series: [{pts: gas, color: COL.orange, width: 1.6}, {pts: ine, color: COL.blue, width: 1.8}, {pts: net, color: '#fff', width: 2.2}], over: [(X, Y) => vline(ctx, X, cc.d, Y(hi), Y(lo), 'rgba(255,255,255,0.6)')]});
  label(ctx, 'gas', X(-350), Y(hi * 0.9), COL.orange, 'left', 10); label(ctx, 'inertia', X(-350), Y(hi * 0.78), COL.blue, 'left', 10); label(ctx, 'net', X(-350), Y(hi * 0.66), '#fff', 'left', 10);
}
function drawTorque(c) {
  const {ctx, w, h} = fit(c), s = S.s, tt = S.tt, cc = cur(), tm = Math.max(...tt.pts.map((q) => q.T)) * 1.1, tl = Math.min(...tt.pts.map((q) => q.T1), ...tt.pts.map((q) => q.T)) * 1.1;
  const {X, Y} = chart(ctx, {x: 48, y: 12, w: w - 62, h: h - 44}, {xr: [0, 720], yr: [tl, tm], xl: 'crank angle over one full cycle, °', yl: 'torque, N·m', nx: 6, ny: 4,
    series: [{pts: tt.pts.map((q) => [q.th, q.T1]), color: 'rgba(251,113,133,0.4)', width: 1.4}, {pts: tt.pts.map((q) => [q.th, q.T]), color: COL.amber, width: 2.4}],
    over: [(X, Y) => { ctx.setLineDash([5, 4]); ctx.strokeStyle = '#fff'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(X(0), Y(tt.mean)); ctx.lineTo(X(720), Y(tt.mean)); ctx.stroke(); ctx.setLineDash([]); vline(ctx, X, cc.thTotal, Y(tm), Y(tl), 'rgba(255,255,255,0.6)'); }]});
  label(ctx, `mean ${tt.mean.toFixed(0)} N·m (indicated) · brake ${s.torque.toFixed(0)} N·m`, X(10), Y(tm * 0.93), COL.amber, 'left', 10.5, '600'); label(ctx, 'one cylinder', X(10), Y(tm * 0.8), COL.pink, 'left', 10);
}
const gr = graphs({pv: drawPV, pt: drawPT, kin: drawKin, forces: drawForces, torque: drawTorque});

/* ----------------------------------------------------------------------------------------------- readouts ---- */
function readouts() {
  const s = S.s, g = s.g, set = (id, v, cls) => { const e = $(id); if (e) { e.textContent = v; if (cls !== undefined) e.className = cls; } };
  $('hud').textContent = `${(s.power / 1000).toFixed(0)} kW  ·  ${s.torque.toFixed(0)} N·m  ·  pₘₐₓ ${bar(s.pmax).toFixed(0)} bar  ·  piston speed ${s.Sp.toFixed(1)} m/s`;
  const t6 = E.summary({...p, rpm: 6000}), pk = (id, ok) => set(id, undefined, ok ? '' : 'bad');
  set('e-disp', `${(g.Vd * 1000).toFixed(3)} L  (${(g.Vd1 * 1e6).toFixed(1)} cm³ per cylinder)`); set('e-sb', `${g.SB.toFixed(3)}  (${p.stroke.toFixed(1)} mm stroke / ${p.bore.toFixed(1)} mm bore)`);
  set('e-lam', `${g.lam.toFixed(3)}  (crank radius ${(g.r * 1000).toFixed(1)} mm / rod ${p.rod} mm)`); set('e-sp', `${s.Sp.toFixed(1)} m/s at ${p.rpm} rpm`, s.Sp > 25 ? 'bad' : '');
  set('e-pmax', `${bar(s.pmax).toFixed(0)} bar at ${s.c.thpmax.toFixed(1)}° ATDC`, bar(s.pmax) > 200 ? 'bad' : ''); set('e-pow', `${(s.power / 1000).toFixed(0)} kW at ${p.rpm} rpm  (${(s.power / 745.7).toFixed(0)} hp, bmep ${bar(s.bmep).toFixed(1)} bar)`);
  set('e-tq6', `${t6.torque.toFixed(0)} N·m at 6 000 rpm`); set('e-ripple', `${(S.tt.ripple * 100).toFixed(0)}% peak-to-peak of the mean`); set('e-fin', `${(s.Fin / 1000).toFixed(1)} kN peak inertia at ${p.rpm} rpm · ${(s.Fgasmax / 1000).toFixed(0)} kN peak gas force`);
  set('e-eta', `indicated ${(s.etaI * 100).toFixed(0)}%  against ideal Otto ${(s.etaOtto * 100).toFixed(0)}%`); set('e-bsfc', `${s.bsfc.toFixed(0)} g/kWh`);
}
let rebuildT;
function changed(geom) { recompute(); readouts(); gr.draw(); if (geom) { clearTimeout(rebuildT); rebuildT = setTimeout(rebuild, 100); } }
const dispV = (b, s_) => Math.PI / 4 * (b / 1000) ** 2 * (s_ / 1000) * p.cyl;
const TARGET_V = dispV(E.DESIGN.bore, E.DESIGN.stroke);
function bindR(id, get, set, fmtv, geom) { const el = $(id), out = $(id + '-v'); el.value = get(); out.textContent = fmtv(+el.value); el.oninput = () => { set(+el.value); out.textContent = fmtv(+el.value); changed(geom); }; el._sync = () => { el.value = get(); out.textContent = fmtv(+el.value); }; }
bindR('s-rpm', () => p.rpm, (v) => { p.rpm = v; }, (v) => `${v} rpm`, false);
bindR('s-boost', () => p.pIn, (v) => { p.pIn = v; }, (v) => `${v.toFixed(2)} bar abs`, false);
bindR('s-cr', () => p.cr, (v) => { p.cr = v; }, (v) => `${v.toFixed(1)}:1`, false);
bindR('s-bore', () => p.bore, (v) => { p.bore = v; if (S.lock) p.stroke = TARGET_V / (Math.PI / 4 * (v / 1000) ** 2 * p.cyl) * 1000; }, (v) => `${v.toFixed(0)} mm → stroke ${p.stroke.toFixed(1)}`, true);
bindR('s-rod', () => p.rod, (v) => { p.rod = v; }, (v) => `${v} mm`, true);
$('s-bore').addEventListener('input', () => { $('s-bore-v').textContent = `${p.bore.toFixed(0)} mm → stroke ${p.stroke.toFixed(1)}`; });
$('b-apart').onclick = (e) => { const on = ex.toggle() > 0.5; e.target.textContent = on ? 'Reassemble' : 'Disassemble'; e.target.setAttribute('aria-pressed', on); if (!on) { S.sel = null; card.hide(); st.want.t.set(0, 0, 0); } };
$('b-spin').onclick = (e) => { S.spin = !S.spin; e.target.setAttribute('aria-pressed', S.spin); e.target.textContent = S.spin ? 'Pause engine' : 'Run engine'; };
$('b-lock').onclick = (e) => { S.lock = !S.lock; e.target.setAttribute('aria-pressed', S.lock); };
$('b-reset').onclick = () => { Object.assign(p, E.DESIGN); for (const id of ['s-rpm', 's-boost', 's-cr', 's-bore', 's-rod']) { $(id)._sync(); } $('s-bore-v').textContent = `${p.bore.toFixed(0)} mm → stroke ${p.stroke.toFixed(1)}`; changed(true); };
$('gl').setAttribute('aria-label', 'Interactive 3D V8 engine. Drag to orbit, scroll to zoom, press Disassemble to take it apart and click any part for a description.');

/* ---------------------------------------------------------------------------------------------- the loop ---- */
let spinV = 0, gT = 0;
st.onResize = () => gr.draw();
const bboxE = new THREE.Box3(), cen = new V3();
st.loop((dt, now) => {
  const u = ex.step(dt, reduce), uP = ease(u, 0, 0.8);
  apply(u);
  const target = S.spin && !reduce ? 2 * Math.PI * (0.1 + 0.55 * p.rpm / 8250) * (1 - smooth(u * 1.8)) : 0;     // the engine winds down as it comes apart, and never starts or stops with a jolt
  spinV += (target - spinV) * Math.min(1, dt * 2.2); S.theta += spinV * dt;
  const cc = cur(), c = S.s.c, qmax = Math.max(...c.pts.map((q) => q.dQ));
  const glow = FIRE.map((f) => { const d = wrap720(cc.th - f.E); return Math.abs(d) <= 90 && u < 0.5 ? Math.max(0, c.pts[Math.min(c.pts.length - 1, Math.round((d + 180) / 0.5))].dQ / qmax) * (1 - smooth(u * 2)) : 0; });
  eng.pose(S.theta, uP, glow);
  if (S.sel) { bboxE.setFromObject(S.sel.group); bboxE.getCenter(cen); const sz = bboxE.getSize(new V3()); st.want.t.lerp(cen, 0.12); st.want.dist = clamp(Math.max(sz.x, sz.y, sz.z) * 2.6 + 4, 8, 34); }
  else { st.want.t.lerp(new V3(0, -0.2 - 1.0 * u, 0), 0.06); if (!st.manual()) st.want.dist = (27 + 12 * ease(u, 0, 1)) * (innerWidth / innerHeight < 0.9 ? 1.4 : 1); }
  st.camStep(dt, now, {drift: reduce ? 0 : 0.25, az0: 0.78});
  labels.update(eng.parts, u, S.sel && S.sel.id);
  gT += dt; if (gT > [0.07, 0.1, 0.16, 0.25][st.tier.i] && (spinV > 0.02 || gT > 0.5)) { gT = 0; drawPV($('g-pv')); drawPT($('g-pt')); drawKin($('g-kin')); drawForces($('g-forces')); drawTorque($('g-torque')); if ($('modal').classList.contains('on')) gr.draw(); }
  $('hud-u').textContent = u > 0.02 ? `exploded ${Math.round(u * 100)}%` : `crank ${Math.round(cc.th)}° of 720°`;
});
readouts(); gr.draw();
window.__ENG = {p, E, st, ex, S, select, rebuild, get eng() { return eng; }, gr};
