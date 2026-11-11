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
const st = createStage({canvas: $('gl'), tint: '#fb7185', dist: 32, el: 0.3, az: 0.78, distRange: [6, 80], onTier: () => { if (ready) rebuild(); }});
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
/* ------------------------------------------------------------ the report half: linkage, derivatives, burn, cycle ---- */
const TOP_RPM = 8250;
function topPoint() {
  const g = E.geom(p), w = 2 * Math.PI * TOP_RPM / 60, a = E.kin(0, g).a * w * w; let vmax = 0, thv = 0; for (let d = 0; d <= 180; d += 0.5) { const v = Math.abs(E.kin(d * D2R, g).v) * w; if (v > vmax) { vmax = v; thv = d; } }
  return {g, w, a, F: g.mRecip * a, vmax, thv, aBdc: E.kin(Math.PI, g).a * w * w};
}
/** The turning points of the acceleration curve over half a revolution, found numerically from the exact kinematics. */
function accKeys(g) {
  const pts = []; let zero = null, min = {a: 1e9, d: 0};
  for (let d = 0; d <= 180; d += 0.1) { const a = E.kin(d * D2R, g).a; if (zero === null && d > 0 && E.kin((d - 0.1) * D2R, g).a > 0 && a <= 0) zero = d; if (a < min.a) min = {a, d}; }
  return {zero, min, tdc: E.kin(0, g).a, bdc: E.kin(Math.PI, g).a};
}
function arrow(ctx, x0, y0, x1, y1, col, wd = 2) { ctx.strokeStyle = col; ctx.fillStyle = col; ctx.lineWidth = wd; ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1, y1); ctx.stroke(); const an = Math.atan2(y1 - y0, x1 - x0); ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x1 - 8 * Math.cos(an - 0.4), y1 - 8 * Math.sin(an - 0.4)); ctx.lineTo(x1 - 8 * Math.cos(an + 0.4), y1 - 8 * Math.sin(an + 0.4)); ctx.fill(); }
function drawLink(c) {
  const {ctx, w, h} = fit(c), g = S.s.g, th = cur().thTdc * D2R, k = E.kin(th, g), sc = (h - 70) / (g.L + 2.2 * g.r), ox = Math.min(w * 0.34, 200), oy = h - 36 - g.r * sc * 1.1;
  const A = [ox + g.r * sc * Math.sin(th), oy - g.r * sc * Math.cos(th)], yB = oy - (g.L + g.r - k.x) * sc, B = [ox, yB];
  ctx.strokeStyle = 'rgba(255,255,255,0.25)'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(ox - 0.5 * g.B * sc, oy - (g.L + g.r) * sc - 22); ctx.lineTo(ox - 0.5 * g.B * sc, oy - (g.L - g.r) * sc + 6); ctx.moveTo(ox + 0.5 * g.B * sc, oy - (g.L + g.r) * sc - 22); ctx.lineTo(ox + 0.5 * g.B * sc, oy - (g.L - g.r) * sc + 6); ctx.stroke();
  ctx.setLineDash([3, 4]); ctx.beginPath(); ctx.arc(ox, oy, g.r * sc, 0, 7); ctx.stroke(); ctx.setLineDash([]);
  arrow(ctx, ox, oy, ox + 62, oy, COL.faint, 1.2); arrow(ctx, ox, oy, ox, oy - 62, COL.faint, 1.2); label(ctx, 'x', ox + 68, oy, COL.muted, 'left', 10); label(ctx, 'y', ox + 5, oy - 68, COL.muted, 'left', 10);
  ctx.strokeStyle = COL.cyan; ctx.lineWidth = 5; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(A[0], A[1]); ctx.lineTo(B[0], B[1]); ctx.stroke();
  ctx.strokeStyle = COL.amber; ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(A[0], A[1]); ctx.stroke(); ctx.lineCap = 'butt';
  ctx.fillStyle = 'rgba(224,169,90,0.8)'; ctx.fillRect(B[0] - 0.5 * g.B * sc + 1, B[1] - 16, g.B * sc - 2, 16);
  dot(ctx, ox, oy, '#fff', 4.5); dot(ctx, A[0], A[1], COL.amber, 4.5); dot(ctx, B[0], B[1], COL.cyan, 4.5);
  label(ctx, 'O', ox - 12, oy + 10, '#fff', 'center', 10.5, '600'); label(ctx, 'A', A[0] + 12, A[1], COL.amber, 'left', 10.5, '600'); label(ctx, 'B', B[0] + 14, B[1] + 12, COL.cyan, 'left', 10.5, '600');
  const w_ = S.s.w, vA = g.r * w_, aMax = Math.abs(E.kin(0, g).a) * w_ * w_;
  arrow(ctx, A[0], A[1], A[0] + Math.cos(th) * 46, A[1] + Math.sin(th) * 46, COL.green, 2); label(ctx, 'v_A', A[0] + Math.cos(th) * 52 + 6, A[1] + Math.sin(th) * 52, COL.green, 'left', 10);
  const aB = k.a * w_ * w_ / aMax * 56; arrow(ctx, B[0] + 26, B[1] - 8, B[0] + 26, B[1] - 8 + aB, COL.pink, 2.4); label(ctx, 'a_B', B[0] + 34, B[1] - 8 + aB * 0.5, COL.pink, 'left', 10);
  const tx = ox + 118, ty = 16, ln = 15, fm = (v, d = 1) => v.toFixed(d);
  const rows = [['absolute motion, fixed frame at O', COL.muted], ['r_A = r (sinθ, cosθ)', COL.amber], ['r_B/A = l (−sinψ, −cosψ)', COL.cyan], ['r_B = r_A + r_B/A', '#fff'], ['x: 0 = r sinθ − l sinψ  →  sinψ = λ sinθ', COL.muted], ['y: y_B = r cosθ + l cosψ', COL.muted], ['', COL.muted], [`θ = ${fm(cur().thTdc, 0)}°   ψ = ${fm(k.psi / D2R)}°`, '#fff'], [`piston ${fm(k.x * 1000)} mm below TDC`, COL.muted], [`v = ${fm(k.v * w_)} m/s`, COL.green], [`a = ${fm(k.a * w_ * w_ / 1000)} km/s²`, COL.pink]];
  rows.forEach(([t, col], i) => label(ctx, t, Math.min(tx, w - 250), ty + i * ln, col, 'left', 10, i === 0 || i === 3 ? '600' : ''));
}
function drawDisp(c) {
  const {ctx, w, h} = fit(c), g = S.s.g, N = 120, ex = [], ap = [];
  for (let i = 0; i <= N; i++) { const d = i / N * 360, k = E.kin(d * D2R, g); ex.push([d, k.x * 1000]); ap.push([d, g.r * ((1 - Math.cos(d * D2R)) + g.lam / 4 * (1 - Math.cos(2 * d * D2R))) * 1000]); }
  const {X, Y} = chart(ctx, {x: 50, y: 12, w: w - 64, h: h - 44}, {xr: [0, 360], yr: [0, g.S * 1000 * 1.05], xl: 'crank angle from TDC, °', yl: 'piston travel from TDC, mm', xticks: [0, 90, 180, 270, 360], ny: 4, series: [{pts: ap, color: 'rgba(255,255,255,0.45)', width: 1.4, dash: [4, 4]}, {pts: ex, color: COL.cyan, width: 2.6}]});
  const d = cur().thTdc, k = E.kin(d * D2R, g); dot(ctx, X(d), Y(k.x * 1000), '#fff', 5);
  label(ctx, 'x(θ) = r(1−cosθ) + l − √(l²−r²sin²θ)', X(8), Y(g.S * 1000 * 0.93), COL.cyan, 'left', 10); label(ctx, 'dashed: two-term series', X(8), Y(g.S * 1000 * 0.82), COL.muted, 'left', 9.5);
  const half = ex.find(q => q[1] >= g.S * 1000 / 2); label(ctx, 'half the stroke is covered before 90°', X(190), Y(g.S * 1000 * 0.2), COL.muted, 'left', 9.5);
}
function drawAcc(c) {
  const {ctx, w, h} = fit(c), g = S.s.g, w_ = S.s.w, N = 360, pts = [];
  for (let i = 0; i <= N; i++) { const d = i; pts.push([d, E.kin(d * D2R, g).a * w_ * w_ / 1000]); }
  const top = Math.ceil(Math.max(...pts.map((q) => q[1])) / 10) * 10, bot = Math.floor(Math.min(...pts.map((q) => q[1])) / 10) * 10, keys = accKeys(g), s = (v) => v * w_ * w_ / 1000;
  const {X, Y} = chart(ctx, {x: 56, y: 12, w: w - 72, h: h - 46}, {xr: [0, 360], yr: [bot - 8, top + 12], xl: 'crank angle from TDC, °', yl: 'piston acceleration, km/s²   (positive: towards the crank)', xticks: [0, 90, 180, 270, 360], ny: 5,
    series: [{pts, color: COL.pink, width: 2.8, fill: 'rgba(232,121,249,0.10)'}],
    under: [(X, Y) => { ctx.fillStyle = 'rgba(251,191,36,0.06)'; ctx.fillRect(X(0), Y(top + 12), X(keys.zero) - X(0), Y(bot - 8) - Y(top + 12)); ctx.fillRect(X(360 - keys.zero), Y(top + 12), X(360) - X(360 - keys.zero), Y(bot - 8) - Y(top + 12)); }]});
  const mark = (d, a, txt, col, dx, dy, al = 'left') => { dot(ctx, X(d), Y(a), col, 5.5); label(ctx, txt, X(d) + dx, Y(a) + dy, col, al, 10.5, '600'); };
  mark(0, s(keys.tdc), `TDC: maximum  +${s(keys.tdc).toFixed(1)} km/s²  (${(keys.tdc * w_ * w_ / 9.80665).toFixed(0)} g)`, COL.amber, 10, 2);
  mark(360, s(keys.tdc), '', COL.amber, 0, 0);
  mark(keys.zero, 0, `zero at ${keys.zero.toFixed(0)}°: top piston speed`, '#fff', 8, -12);
  mark(360 - keys.zero, 0, '', '#fff', 0, 0);
  const lam = g.lam; if (lam > 0.25) { mark(keys.min.d, s(keys.min.a), `minimum ${s(keys.min.a).toFixed(1)}`, COL.cyan, -8, 16, 'right'); mark(360 - keys.min.d, s(keys.min.a), '', COL.cyan, 0, 0); mark(180, s(keys.bdc), `BDC ${s(keys.bdc).toFixed(1)}: the dimple`, COL.green, 0, -14, 'center'); } else mark(180, s(keys.bdc), `BDC: minimum ${s(keys.bdc).toFixed(1)}`, COL.cyan, 0, 16, 'center');
  const d = cur().thTdc; ctx.setLineDash([3, 4]); ctx.strokeStyle = 'rgba(255,255,255,0.5)'; ctx.beginPath(); ctx.moveTo(X(d), Y(top + 12)); ctx.lineTo(X(d), Y(bot - 8)); ctx.stroke(); ctx.setLineDash([]);
  const a = E.kin(d * D2R, g).a * w_ * w_ / 1000; dot(ctx, X(d), Y(a), '#fff', 5);
  label(ctx, `load on the piston pin at TDC: ${(g.mRecip * keys.tdc * w_ * w_ / 1000).toFixed(1)} kN  (${g.mRecip.toFixed(2)} kg × ${s(keys.tdc).toFixed(1)} km/s²)   ·   at ${p.rpm} rpm`, X(180), Y(top + 12) + 12, COL.muted, 'center', 10);
}
function drawWiebe(c) {
  const {ctx, w, h} = fit(c), pts = S.s.c.pts, pick = (f) => { const q = pts.find((u) => u.xb >= f); return q ? q.d : null; }, m10 = pick(0.1), m50 = pick(0.5), m90 = pick(0.9), ign = -p.ign;
  const d0 = Math.min(ign - 6, -30), d1 = Math.max(m90 + 14, 40), sub = pts.filter((q) => q.d >= d0 && q.d <= d1), dm = Math.max(...pts.map((q) => q.dQ));
  const {X, Y} = chart(ctx, {x: 50, y: 12, w: w - 64, h: h - 44}, {xr: [d0, d1], yr: [0, 1.05], xl: 'crank angle from firing TDC, °', yl: 'mass fraction burned', nx: 6, yticks: [0, 0.25, 0.5, 0.75, 1], series: [{pts: sub.map((q) => [q.d, q.dQ / dm * 0.6]), color: 'rgba(232,121,249,0.8)', width: 1.6, dash: [4, 3]}, {pts: sub.map((q) => [q.d, q.xb]), color: COL.orange, width: 2.8}]});
  [[m10, 0.1, 'MFB10'], [m50, 0.5, 'MFB50'], [m90, 0.9, 'MFB90']].forEach(([d, f, t]) => { if (d !== null) { vline(ctx, X, d, Y(0), Y(1.05)); dot(ctx, X(d), Y(f), '#fff', 4.5); label(ctx, `${t} ${d.toFixed(0)}°`, X(d) + 7, Y(f) + 12, '#fff', 'left', 10, '600'); } });
  vline(ctx, X, ign, Y(0), Y(1.05), COL.amber); label(ctx, `spark ${ign}°`, X(ign) - 6, Y(1.0), COL.amber, 'right', 10);
  label(ctx, 'burn rate (dashed)', X(d1) - 6, Y(0.1), 'rgba(232,121,249,0.9)', 'right', 10); if (m50 !== null) label(ctx, m50 > 8 && m50 < 14 ? 'MFB50 in the 8–14° window: efficient' : m50 <= 8 ? 'burn is early: more heat lost, risk of knock' : 'burn is late: less work, hotter exhaust', X(d0) + 6, Y(0.93), m50 > 8 && m50 < 14 ? COL.green : COL.amber, 'left', 10);
}
function drawEta(c) {
  const {ctx, w, h} = fit(c), s = S.s, ser = [[1.4, 'rgba(255,255,255,0.4)'], [1.35, COL.cyan], [1.3, COL.blue]].map(([gm, col]) => ({pts: Array.from({length: 33}, (_, i) => { const r = 6 + i * 0.25; return [r, (1 - Math.pow(r, 1 - gm)) * 100]; }), color: col, width: gm === 1.35 ? 2.4 : 1.4, dash: gm === 1.35 ? [] : [4, 4]}));
  const {X, Y} = chart(ctx, {x: 50, y: 12, w: w - 64, h: h - 44}, {xr: [6, 14], yr: [30, 70], xl: 'compression ratio r_c', yl: 'efficiency, %', nx: 4, ny: 4, series: ser, under: [(X, Y) => { ctx.fillStyle = 'rgba(248,113,113,0.07)'; ctx.fillRect(X(10.5), Y(70), X(14) - X(10.5), Y(30) - Y(70)); }]});
  dot(ctx, X(p.cr), Y(s.etaOtto * 100), COL.cyan, 5.5); dot(ctx, X(p.cr), Y(s.etaI * 100), COL.orange, 5.5);
  label(ctx, `ideal ${(s.etaOtto * 100).toFixed(0)}%`, X(p.cr) + 9, Y(s.etaOtto * 100) - 3, COL.cyan, 'left', 10.5, '600'); label(ctx, `this engine, indicated ${(s.etaI * 100).toFixed(0)}%`, X(p.cr) + 9, Y(s.etaI * 100) + 12, COL.orange, 'left', 10.5, '600');
  label(ctx, 'γ = 1.40', X(13.9), Y(1 - Math.pow(13.9, -0.4) > 0 ? (1 - Math.pow(13.9, -0.4)) * 100 : 60) - 8, 'rgba(255,255,255,0.55)', 'right', 9.5); label(ctx, 'γ = 1.35', X(13.9), Y((1 - Math.pow(13.9, -0.35)) * 100) + 10, COL.cyan, 'right', 9.5); label(ctx, 'γ = 1.30', X(13.9), Y((1 - Math.pow(13.9, -0.3)) * 100) + 10, COL.blue, 'right', 9.5);
  label(ctx, 'knock-limited on boost', X(12.25), Y(34), COL.red, 'center', 9.5);
}
function topReadouts() {
  const t = topPoint(), set = (id, v) => { const e = $(id); if (e) e.textContent = v; }, g = t.g, keys = accKeys(g);
  set('k-top-a', `${(t.a / 1000).toFixed(1)} km/s²  (${(t.a / 9.80665).toFixed(0)} g)`); set('k-top-f', `${(t.F / 1000).toFixed(1)} kN`); set('k-top-t', `${(t.F / 9.80665 / 1000).toFixed(1)} tonnes of weight`);
  set('k-top-v', `${t.vmax.toFixed(1)} m/s at ${t.thv.toFixed(0)}° from TDC`); set('k-top-b', `${(t.aBdc / 1000).toFixed(1)} km/s²`); set('k-zero', `${keys.zero.toFixed(0)}°`);
  const c = S.s.c, pick = (f) => { const q = c.pts.find((u) => u.xb >= f); return q ? q.d : NaN; };
  set('w-ca50', `${pick(0.5).toFixed(1)}° after firing TDC`); set('w-dur', `${(pick(0.9) - pick(0.1)).toFixed(0)}° from 10 % to 90 % burned`);
  set('w-q', `${(c.Qtot).toFixed(0)} J per cycle per cylinder`); set('w-m', `${(c.mCharge * 1000).toFixed(2)} g of charge, ${(c.mFuel * 1000).toFixed(3)} g of fuel`); set('w-w', `${c.W.toFixed(0)} J of indicated work, imep ${(c.imep / 1e5).toFixed(1)} bar`);
}
$('b-top') && ($('b-top').onclick = () => { p.rpm = TOP_RPM; $('s-rpm')._sync(); changed(false); });

const gr = graphs({pv: drawPV, pt: drawPT, kin: drawKin, forces: drawForces, torque: drawTorque, link: drawLink, disp: drawDisp, acc: drawAcc, wiebe: drawWiebe, eta: drawEta});

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
function changed(geom) { recompute(); readouts(); topReadouts(); gr.draw(); if (geom) { clearTimeout(rebuildT); rebuildT = setTimeout(rebuild, 100); } }
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
let spinV = 0, gT = 0, liveT = 0;
const liveEls = {}, liveOn = new Map(); { const io = new IntersectionObserver((es) => es.forEach((q) => liveOn.set(q.target, q.isIntersecting))); for (const id of ['link', 'disp', 'acc']) { const cv = document.querySelector(`figure[data-g=${id}] canvas`); if (cv) { liveEls[id] = cv; io.observe(cv); } } }
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
  else { st.want.t.lerp(new V3(0, -0.2 - 1.0 * u, 0), 0.06); if (!st.manual()) st.want.dist = (32 + 14 * ease(u, 0, 1)) * (innerWidth / innerHeight < 0.9 ? 1.4 : 1); }
  st.camStep(dt, now, {drift: reduce ? 0 : 0.25, az0: 0.78});
  labels.update(eng.parts, u, S.sel && S.sel.id);
  gT += dt; if (gT > [0.07, 0.1, 0.16, 0.25][st.tier.i] && (spinV > 0.02 || gT > 0.5)) { gT = 0; drawPV($('g-pv')); drawPT($('g-pt')); drawKin($('g-kin')); drawForces($('g-forces')); drawTorque($('g-torque')); if ($('modal').classList.contains('on')) gr.draw(); }
  liveT += dt; if (liveT > [0.08, 0.12, 0.2, 0.3][st.tier.i] && spinV > 0.02) { liveT = 0; for (const [id, fn] of [['link', drawLink], ['disp', drawDisp], ['acc', drawAcc]]) { const cv = liveEls[id]; if (cv && liveOn.get(cv)) fn(cv); } }
  $('hud-u').textContent = u > 0.02 ? `exploded ${Math.round(u * 100)}%` : `crank ${Math.round(cc.th)}° of 720°`;
});
readouts(); topReadouts(); gr.draw();
window.__ENG = {p, E, st, ex, S, select, rebuild, get eng() { return eng; }, gr};
