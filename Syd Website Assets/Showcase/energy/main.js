// The Energy Methods page: a Rayleigh-Ritz floor on a bed of springs, solved live, and a building that takes apart and zooms into the floor as it deflects.
import {createStage, V3, THREE, clamp, ease, smooth} from '../kit.js';
import {chart, label, dot, vline, COL} from '../chart.js';
import {graphs, partLabels, partCard, explodeState, fit} from '../stageui.js';
import {buildBuilding} from '../models/building.js';
import * as R from './physics.js';

const $ = (id) => document.getElementById(id);
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const p = {...R.DEFAULTS};
const S = {amp: 40, zoom: 0, zoomT: 0, cut: 0, cutT: 0, sel: null, r: null, ex: null};
const ex = explodeState();
let ready = false;
const st = createStage({canvas: $('gl'), tint: '#34d399', dist: 1950, el: 0.14, az: 0.55, near: 0.3, far: 9000, distRange: [8, 4200], onTier: () => { if (ready) rebuild(); }});
let bld = null, labels = null;
const card = partCard($('card'), () => { S.sel = null; });
function solve() { S.r = R.ritz(p); S.ex = R.exactUniform(p); }
function rebuild() { if (bld) st.scene.remove(bld.root); bld = buildBuilding(p, {lite: st.tier.i >= 2}); bld.parts.forEach((q, i) => { q.index = i + 1; }); st.scene.add(bld.root); if (labels) labels.set(bld.parts); }
labels = partLabels($('labels'), st, (q) => { const part = bld.parts.find((x) => x.id === q.id); S.sel = part; card.show(part); });
solve(); rebuild(); labels.set(bld.parts); ready = true;
st.onClick = (cx, cy) => { const hit = st.pick(cx, cy, bld.meshes); if (hit) { const part = bld.parts.find((x) => x.id === hit.object.userData.part); S.sel = part; card.show(part); } else { S.sel = null; card.hide(); } };

/* ---------------------------------------------------------------------------------------------- graphs ---- */
const mm = (m) => m * 1000;
function curve(f, n = 120) { return Array.from({length: n + 1}, (_, i) => { const x = i / n; return [x * p.L, f(x)]; }); }
function drawDisp(c) {
  const {ctx, w, h} = fit(c), r = S.r, ex = S.ex, lo = -mm(Math.max(0.001, ...curve(ex).map((q) => q[1]), r.mid)) * 1.15, hi = 0.5, series = [];
  [1, 3].filter((n) => n < p.N).forEach((n, i) => { const rr = R.ritz(p, n); series.push({pts: curve(rr.w).map(([x, y]) => [x, -mm(y)]), color: ['rgba(251,191,36,0.6)', 'rgba(232,121,249,0.6)'][i], width: 1.4, dash: [4, 3]}); });
  series.push({pts: curve(ex).map(([x, y]) => [x, -mm(y)]), color: 'rgba(255,255,255,0.5)', width: 1.4, dash: [2, 4]}, {pts: curve(r.w).map(([x, y]) => [x, -mm(y)]), color: COL.green, width: 2.8});
  const {X, Y} = chart(ctx, {x: 50, y: 12, w: w - 66, h: h - 46}, {xr: [0, p.L], yr: [lo, hi], xl: 'position along the span x, m', yl: 'displacement, mm (down is negative)', nx: 6, ny: 4, series,
    over: [(X, Y) => { dot(ctx, X(p.L / 2), Y(-mm(r.mid)), '#fff', 5); label(ctx, `${mm(r.mid).toFixed(2)} mm at mid-span`, X(p.L / 2), Y(-mm(r.mid)) - 14, '#fff', 'center', 10.5, '600'); }]});
  label(ctx, `Ritz, N = ${p.N}`, X(0.1), Y(lo * 0.1), COL.green, 'left', 10); label(ctx, 'exact (Navier series)', X(0.1), Y(lo * 0.22), 'rgba(255,255,255,0.6)', 'left', 10);
}
function drawMoment(c) {
  const {ctx, w, h} = fit(c), r = S.r, Mf = R.moment(p, r), Sf = R.springForce(p, r), M = curve(Mf).map(([x, y]) => [x, y / 1000]), Fs = curve(Sf).map(([x, y]) => [x, y / 1000]);
  const top = Math.max(...M.map((q) => q[1]), ...Fs.map((q) => q[1])) * 1.15, bot = Math.min(0, ...M.map((q) => q[1])) * 1.15;
  const {X, Y} = chart(ctx, {x: 50, y: 12, w: w - 66, h: h - 46}, {xr: [0, p.L], yr: [bot, top], xl: 'position along the span x, m', yl: 'kN·m per m  |  kN per m', nx: 6, ny: 4, series: [{pts: M, color: COL.pink, width: 2.4}, {pts: Fs, color: COL.amber, width: 2.4}]});
  label(ctx, `bending moment M = EI w″ (peak ${Math.max(...M.map((q) => q[1])).toFixed(1)} kN·m/m)`, X(0.15), Y(top * 0.93), COL.pink, 'left', 10); label(ctx, `spring reaction k w (peak ${Math.max(...Fs.map((q) => q[1])).toFixed(1)} kN/m)`, X(0.15), Y(top * 0.8), COL.amber, 'left', 10);
}
function drawConv(c) {
  const {ctx, w, h} = fit(c), ex = S.ex, pts = [], mx = Math.max(...curve(ex).map((q) => Math.abs(q[1])));
  for (let n = 1; n <= 8; n++) { const r = R.ritz(p, n); let e = 0; for (let i = 0; i <= 100; i++) e = Math.max(e, Math.abs(r.w(i / 100) - ex(i / 100))); pts.push([n, Math.log10(Math.max(1e-7, e / mx * 100))]); }
  const {X, Y} = chart(ctx, {x: 54, y: 12, w: w - 70, h: h - 46}, {xr: [0.5, 8.5], yr: [-6.5, 2], xl: 'terms in the series, N', yl: 'maximum error, % of peak', xticks: [1, 2, 3, 4, 5, 6, 7, 8], yticks: [-6, -4, -2, 0, 2], yfmt: (v) => (v === 0 ? '1%' : `10^${v}%`), series: [{pts, color: COL.green, width: 2.4}]});
  pts.forEach(([n, v]) => dot(ctx, X(n), Y(v), n === p.N ? '#fff' : COL.green, n === p.N ? 5.5 : 3.5));
  label(ctx, 'the error falls in steps: terms come in symmetric pairs for a symmetric load', X(0.6), Y(1.4), COL.muted, 'left', 10);
}
const gr = graphs({disp: drawDisp, mom: drawMoment, conv: drawConv});

/* -------------------------------------------------------------------------------------------- readouts ---- */
function readouts() {
  const r = S.r, set = (id, v) => { const e = $(id); if (e) e.textContent = v; };
  $('hud').textContent = `max deflection ${mm(r.mid).toFixed(2)} mm  ·  L/${Math.round(p.L / Math.abs(r.mid))}  ·  U = ${(r.Ub + r.Us).toFixed(0)} J per m = W/2`;
  set('x-mid', `${mm(r.mid).toFixed(2)} mm`); set('x-ratio', `L / ${Math.round(p.L / Math.abs(r.mid))}`); set('x-ub', `${r.Ub.toFixed(1)} J/m`); set('x-us', `${r.Us.toFixed(1)} J/m`); set('x-w', `${(r.W / 2).toFixed(1)} J/m`); set('x-pi', `${r.Pi.toFixed(1)} J/m`);
  let tot = 0; const n = 2000; for (let i = 0; i < n; i++) tot += R.springForce(p, r)((i + 0.5) / n) * p.L / n;
  const total = p.q * p.L + p.P; set('x-spring', `${(tot / 1000).toFixed(1)} kN`); set('x-ends', `${((total - tot) / 2000).toFixed(1)} kN each`); set('x-load', `${(total / 1000).toFixed(1)} kN`);
  const tb = $('kmat'); if (tb) { const N = Math.min(4, p.N); let h = '<tr><th></th>' + Array.from({length: N}, (_, j) => `<th>a${j + 1}</th>`).join('') + '<th>F, kN</th></tr>'; for (let i = 0; i < N; i++) h += `<tr><th>${i + 1}</th>` + r.K[i].slice(0, N).map((v) => `<td>${(v / 1e6).toFixed(3)}</td>`).join('') + `<td>${(r.F[i] / 1e3).toFixed(2)}</td></tr>`; tb.innerHTML = h; }
  const cf = $('coeffs'); if (cf) cf.textContent = r.a.map((v, i) => `a${i + 1} = ${(v * 1000).toFixed(3)} mm`).join('   ');
}
function changed() { solve(); readouts(); gr.draw(); }
const bind = (id, get, set, f) => { const el = $(id), out = $(id + '-v'); el.value = get(); out.textContent = f(+el.value); el.oninput = () => { set(+el.value); out.textContent = f(+el.value); changed(); }; el._sync = () => { el.value = get(); out.textContent = f(+el.value); }; };
bind('s-q', () => p.q / 1000, (v) => { p.q = v * 1000; }, (v) => `${v.toFixed(1)} kN/m`); bind('s-k', () => Math.log10(p.k), (v) => { p.k = Math.pow(10, v); }, (v) => `${(Math.pow(10, v) / 1e6).toFixed(2)} MN/m²`);
bind('s-ei', () => p.EI / 1e7, (v) => { p.EI = v * 1e7; }, (v) => `${(v * 10).toFixed(0)} MN·m²`); bind('s-p', () => p.P / 1000, (v) => { p.P = v * 1000; }, (v) => `${v.toFixed(0)} kN`);
bind('s-n', () => p.N, (v) => { p.N = v; }, (v) => `${v} terms`); bind('s-amp', () => S.amp, (v) => { S.amp = v; }, (v) => `×${v}`);
$('b-cut').onclick = (e) => { S.cutT = S.cutT > 0.5 ? 0 : 1; e.target.textContent = S.cutT ? 'Close the cutaway' : 'Cutaway'; e.target.setAttribute('aria-pressed', !!S.cutT); };
$('b-apart').onclick = (e) => { const on = ex.toggle() > 0.5; e.target.textContent = on ? 'Reassemble' : 'Disassemble'; e.target.setAttribute('aria-pressed', on); };
$('b-zoom').onclick = (e) => { S.zoomT = S.zoomT > 0.5 ? 0 : 1; S.cutT = S.zoomT ? 1 : S.cutT; $('b-cut').textContent = S.cutT ? 'Close the cutaway' : 'Cutaway'; $('b-cut').setAttribute('aria-pressed', !!S.cutT); e.target.textContent = S.zoomT ? 'Zoom out' : 'Zoom into the floor'; e.target.setAttribute('aria-pressed', !!S.zoomT); if (S.zoomT) { st.want.az = 0.22; st.want.el = 0.2; st.resetManual(); } };
$('b-reset').onclick = () => { Object.assign(p, R.DEFAULTS); S.amp = 40; S.cutT = 0; S.zoomT = 0; ex.to(0); $('b-cut').textContent = 'Cutaway'; $('b-zoom').textContent = 'Zoom into the floor'; for (const id of ['s-q', 's-k', 's-ei', 's-p', 's-n', 's-amp']) $(id)._sync(); changed(); };
$('gl').setAttribute('aria-label', 'Interactive 3D model of the Burj Khalifa. Drag to orbit, press Cutaway to open the tower down the middle, Disassemble to separate its bands, and Zoom into the floor to see the test floor bending on its springs.');

/* ------------------------------------------------------------------------------------------------ loop ---- */
st.onResize = () => gr.draw();
st.loop((dt, now) => {
  const u = ex.step(dt, reduce); S.zoom += (S.zoomT - S.zoom) * Math.min(1, dt * (reduce ? 50 : 1.6)); S.cut += (S.cutT - S.cut) * Math.min(1, dt * (reduce ? 50 : 1.8)); const zk = smooth(S.zoom);
  const load = reduce ? 1 : Math.min(1, 0.15 + 0.85 * S.zoom);                       // the load comes on as the view zooms in, so the floor is seen to settle under it
  bld.update(u, S.zoom, (x) => S.r.w(x) * load, S.amp, p.P, p.xp, p.q, 1, S.cut);
  const bay = bld.test.group.position, ox = 0, oy = 360 + 110 * u;
  st.want.t.lerp(new V3(bay.x * zk + ox * (1 - zk), bay.y * zk + oy * (1 - zk), bay.z * zk), 0.1); st.want.dist = (1950 + 1750 * u) * (1 - 0.3 * smooth(S.cut)) * (1 - zk) + 26 * zk;
  st.camera.near = Math.max(0.5, st.rig.dist * 0.15); st.camera.updateProjectionMatrix();
  st.camStep(dt, now, {drift: reduce || S.zoomT ? 0 : 0.25, az0: 0.55});
  labels.update(bld.parts, u * (1 - zk), S.sel && S.sel.id);
  $('hud-u').textContent = zk > 0.5 ? 'one floor bay on its idealised springs' : S.cutT > 0.5 ? 'cutaway' : u > 0.02 ? `exploded ${Math.round(u * 100)}%` : 'assembled';
});
readouts(); gr.draw();
window.__EN = {p, R, S, st, ex, gr};
