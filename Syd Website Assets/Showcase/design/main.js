// The Design Project page: the 1 % problem. Two electric record aircraft race the 3 km course while the power balance, the wing planform and the
// requirements checklist respond to the design variables. Physics is in physics.js; the figures behind it come from the design report.
import {chart, label, dot, vline, COL, fit} from '../chart.js';
import {graphs} from '../stageui.js';
import * as D from './physics.js';

const $ = (id) => document.getElementById(id);
const BASEV = {Cr: 1.2, lam: 0.4842, extra: 0, cut: 0, P: D.BASE.P}, CONCEPT = {Cr: 1.19, lam: 0.45, extra: 0, cut: 0, P: D.BASE.P};
const v = {...BASEV}, S = {t: 0, run: false, speed: 1, res: null, hold: 0};
const params = () => { const pf = D.planform(v.Cr, v.lam, D.BASE.b); return {...D.BASE, S: pf.S, extra: v.extra, cdCut: v.cut / 100, P: v.P}; };
function solve() { const p = params(); S.p = p; S.pf = D.planform(v.Cr, v.lam, D.BASE.b); S.res = D.evaluate(p); S.curve = D.curves(p); S.base = D.curves({...D.BASE, extra: 0}); }

/* ------------------------------------------------------------------------------------------------ graphs ---- */
function drawPower(c) {
  const {ctx, w, h} = fit(c), r = S.res, top = 480, p = S.p;
  const cfg = {xr: [90, 200], yr: [0, top], xl: 'airspeed V, m/s', yl: 'power, kW', nx: 5, ny: 4, series: [
    {pts: S.base.map((q) => [q.V, q.req]), color: 'rgba(255,255,255,0.35)', width: 1.3, dash: [4, 4]},
    {pts: S.curve.map((q) => [q.V, q.req]), color: COL.orange, width: 2.6}, {pts: S.curve.map((q) => [q.V, q.avail]), color: COL.cyan, width: 2.6}]};
  const {X, Y} = chart(ctx, {x: 46, y: 12, w: w - 60, h: h - 44}, cfg);
  ctx.fillStyle = 'rgba(52,211,153,0.10)'; ctx.beginPath(); S.curve.forEach((q, i) => { const x = X(q.V), y = Y(Math.min(q.avail, top)); if (q.V <= r.V) { i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); } }); for (let i = S.curve.length - 1; i >= 0; i--) { const q = S.curve[i]; if (q.V <= r.V) ctx.lineTo(X(q.V), Y(q.req)); } ctx.closePath(); ctx.fill();
  vline(ctx, X, r.Vb, Y(top), Y(0), 'rgba(255,255,255,0.4)'); dot(ctx, X(r.V), Y(r.pa / 1000), '#fff', 5.5);
  label(ctx, 'power available', X(198), Y(S.curve[0].avail) + 12, COL.cyan, 'right', 10); label(ctx, 'power required', X(150), Y(top * 0.96), COL.orange, 'left', 10); label(ctx, 'unmodified (dashed)', X(150), Y(top * 0.88), 'rgba(255,255,255,0.55)', 'left', 9.5);
  label(ctx, `top speed ${r.V.toFixed(1)} m/s  (${r.gain >= 0 ? '+' : ''}${(r.gain * 100).toFixed(2)} %)`, X(r.V) - 8, Y(r.pa / 1000) - 14, '#fff', 'right', 10.5, '600');
  label(ctx, 'shaded: power left over to climb and accelerate', X(92), Y(40), COL.green, 'left', 9.5);
}
function drawPlan(c) {
  const {ctx, w, h} = fit(c), pf = S.pf, b = D.BASE.b, cx = w / 2, sc = Math.min((w - 40) / b, (h - 130) / (Math.max(BASEV.Cr, v.Cr) * 1.05)), top = Math.max(40, (h - Math.max(BASEV.Cr, v.Cr) * sc) / 2 - 14);
  const draw = (Cr, Ct, fill, stroke, dash) => { ctx.beginPath(); ctx.moveTo(cx, top); ctx.lineTo(cx + b / 2 * sc, top + (Cr - Ct) * 0 + 0); ctx.lineTo(cx + b / 2 * sc, top + Ct * sc); ctx.lineTo(cx, top + Cr * sc); ctx.lineTo(cx - b / 2 * sc, top + Ct * sc); ctx.lineTo(cx - b / 2 * sc, top); ctx.closePath(); if (fill) { ctx.fillStyle = fill; ctx.fill(); } ctx.setLineDash(dash || []); ctx.strokeStyle = stroke; ctx.lineWidth = 1.8; ctx.stroke(); ctx.setLineDash([]); };
  const b0 = D.planform(BASEV.Cr, BASEV.lam, b);
  // leading edge is straight (unswept); the trailing edge tapers: the quarter-chord line is not drawn, only the outline
  ctx.save(); ctx.translate(0, 0);
  const outline = (Cr, Ct, fill, stroke, dash) => { ctx.beginPath(); ctx.moveTo(cx - b / 2 * sc, top); ctx.lineTo(cx + b / 2 * sc, top); ctx.lineTo(cx + b / 2 * sc, top + Ct * sc); ctx.lineTo(cx + 0.0001, top + Cr * sc); ctx.lineTo(cx - 0.0001, top + Cr * sc); ctx.lineTo(cx - b / 2 * sc, top + Ct * sc); ctx.closePath(); if (fill) { ctx.fillStyle = fill; ctx.fill(); } ctx.setLineDash(dash || []); ctx.strokeStyle = stroke; ctx.lineWidth = 1.8; ctx.stroke(); ctx.setLineDash([]); };
  outline(b0.Cr, b0.Ct, null, 'rgba(255,255,255,0.45)', [5, 4]); outline(pf.Cr, pf.Ct, 'rgba(34,211,238,0.22)', COL.cyan);
  ctx.restore();
  label(ctx, `root ${pf.Cr.toFixed(2)} m`, cx, top + pf.Cr * sc + 14, COL.cyan, 'center', 10); label(ctx, `tip ${pf.Ct.toFixed(2)} m`, cx + b / 2 * sc - 6, top + pf.Ct * sc + 14, COL.cyan, 'right', 10);
  label(ctx, `span ${b.toFixed(1)} m (fixed)`, cx, 20, COL.muted, 'center', 10); label(ctx, `S = (C_r + C_t) b / 2 = ${pf.S.toFixed(2)} m²   ·   taper ${pf.lam.toFixed(2)}   ·   AR ${(b * b / pf.S).toFixed(2)}`, cx, top + pf.Cr * sc + 38, '#fff', 'center', 10.5, '600');
  label(ctx, `${(S.res.hpArea).toFixed(1)} hp per m²  ·  target ${D.REPORT.hpAreaTarget}`, cx, top + pf.Cr * sc + 54, S.res.hpArea >= D.REPORT.hpAreaTarget ? COL.green : COL.amber, 'center', 10);
}
function drawBars(c) {
  const {ctx, w, h} = fit(c), r = S.res, items = [['Baseline Spirit', 3000 / D.REPORT.vBase, '#9aa0c3'], ['This design', r.tNew, COL.cyan]], lo = 18.9, hi = 19.5;
  const {X, Y} = chart(ctx, {x: 56, y: 12, w: w - 70, h: h - 44}, {xr: [0, 3], yr: [lo, hi], xl: '', yl: 'time over 3 km, s', xticks: [], ny: 3, series: []});
  items.forEach(([n, t, col], i) => { const x = X(0.4 + i * 1.3), bw = (X(1) - X(0)) * 0.9; ctx.fillStyle = col; ctx.fillRect(x, Y(Math.min(hi, t)), bw, Y(lo) - Y(Math.min(hi, t))); label(ctx, `${t.toFixed(3)} s`, x + bw / 2, Y(Math.min(hi, t)) - 10, '#fff', 'center', 11, '600'); label(ctx, n, x + bw / 2, Y(lo) + 14, COL.muted, 'center', 10); });
  label(ctx, `${((items[0][1] - items[1][1]) * 1000).toFixed(0)} ms faster, ${((D.REPORT.vBase * (1 + r.gain) - D.REPORT.vBase) * items[1][1]).toFixed(0)} m ahead at the line`, X(0.1), Y(hi) + 12, COL.green, 'left', 10);
}
const gr = graphs({power: drawPower, plan: drawPlan, bars: drawBars});

/* ------------------------------------------------------------------------------------------------ scene ---- */
const cv = $('gl'); let lastNow = 0;
function plane(ctx, x, y, s, col, rot) {
  ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(s, s); ctx.fillStyle = col; ctx.strokeStyle = 'rgba(255,255,255,0.8)'; ctx.lineWidth = 1 / s;
  ctx.beginPath(); ctx.moveTo(-30, 0); ctx.quadraticCurveTo(-10, -9, 22, -3); ctx.quadraticCurveTo(32, 0, 22, 3); ctx.quadraticCurveTo(-10, 6, -30, 2); ctx.closePath(); ctx.fill(); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(-26, -1); ctx.lineTo(-34, -13); ctx.lineTo(-22, -1); ctx.fill(); ctx.stroke();
  ctx.fillStyle = 'rgba(255,255,255,0.55)'; ctx.beginPath(); ctx.ellipse(8, -3, 7, 3.4, 0, 0, 7); ctx.fill();
  ctx.fillStyle = 'rgba(255,255,255,0.7)'; ctx.fillRect(25, -1, 3, 3);
  ctx.restore();
}
function scene(now) {
  const {ctx, w, h} = fit(cv), dt = Math.min(0.05, (now - (lastNow || now)) / 1000); lastNow = now; const r = S.res;
  const sky = ctx.createLinearGradient(0, 0, 0, h); sky.addColorStop(0, '#0a1230'); sky.addColorStop(0.7, '#25507a'); sky.addColorStop(1, '#3d7aa0'); ctx.fillStyle = sky; ctx.fillRect(0, 0, w, h);
  const vB = D.REPORT.vBase, vN = r.vRecord, xB = Math.min(3000, vB * S.t), xN = Math.min(3000 + 400, vN * S.t), gy = h * 0.8, ppm = Math.max(3, Math.min(w, 1400) / 260), camX = (xB + xN) / 2, cxs = w * 0.5;
  ctx.fillStyle = '#c9d2dc'; ctx.fillRect(0, gy, w, h - gy);
  for (let m = Math.floor((camX - cxs / ppm) / 50) * 50; m < camX + cxs / ppm; m += 50) { const sx = cxs + (m - camX) * ppm; ctx.fillStyle = m % 500 === 0 ? 'rgba(20,30,60,0.75)' : 'rgba(20,30,60,0.28)'; ctx.fillRect(sx, gy, 2, m % 500 === 0 ? 22 : 10); if (m % 500 === 0) label(ctx, `${m} m`, sx + 4, gy + 36, 'rgba(20,30,60,0.8)', 'left', 9.5); }
  for (const [m, t] of [[0, 'START'], [3000, 'FINISH']]) { const sx = cxs + (m - camX) * ppm; if (sx > -40 && sx < w + 40) { ctx.fillStyle = '#fff'; ctx.fillRect(sx - 1, gy - 150, 3, 150); ctx.fillStyle = m ? '#34d399' : '#fb923c'; ctx.fillRect(sx, gy - 150, 52, 14); label(ctx, t, sx + 4, gy - 143, '#06101f', 'left', 9.5, '700'); } }
  const bob = Math.sin(now / 400) * 2;
  plane(ctx, cxs + (xB - camX) * ppm, gy - 70 + bob, 2.2, '#9aa0c3', 0); plane(ctx, cxs + (xN - camX) * ppm, gy - 110 + bob, 2.2, COL.cyan, 0);
  label(ctx, 'Spirit of Innovation, as flown', cxs + (xB - camX) * ppm, gy - 52, '#e6e8f5', 'center', 10); label(ctx, 'this design', cxs + (xN - camX) * ppm, gy - 92, COL.cyan, 'center', 10.5, '600');
  const lead = (xN - xB);
  if (S.t > 0) label(ctx, `${S.t.toFixed(2)} s   ·   lead ${lead.toFixed(1)} m`, cxs, h * 0.36, '#fff', 'center', 13, '600');
  else label(ctx, 'press Run: two aircraft, one 3 km course', cxs, h * 0.36, '#fff', 'center', 13, '600');
  return dt;
}

/* --------------------------------------------------------------------------------------------- readouts ---- */
function readouts() {
  const r = S.res, p = S.p, set = (id, t, ok) => { const e = $(id); if (e) { e.textContent = t; if (ok !== undefined) { e.classList.toggle('good', ok); e.classList.toggle('bad', !ok); } } };
  const kmh = r.kmh, urs = [['u-speed', `${kmh.toFixed(1)} km/h  (need ${D.REPORT.kmhTarget})`, kmh >= D.REPORT.kmhTarget - 0.05], ['u-hpa', `${r.hpArea.toFixed(2)} hp/m²  (need ${D.REPORT.hpAreaTarget})`, r.hpArea >= D.REPORT.hpAreaTarget - 0.005], ['u-mass', `${r.mass.toFixed(0)} kg  (limit 1750)`, r.mass <= 1750], ['u-area', `${p.S.toFixed(2)} m²  (not below ${D.REPORT.area1})`, p.S >= D.REPORT.area1 - 0.015], ['u-cg', v.extra > 0 ? 'moved: extra modules disturb the centre of gravity' : 'unchanged', v.extra === 0]];
  urs.forEach(([id, t, ok]) => set(id, t, ok));
  const pass = urs.every((q) => q[2]); set('u-all', pass ? 'every requirement met' : 'a requirement is not met', pass);
  set('x-v', `${r.V.toFixed(2)} m/s`); set('x-gain', `${(r.gain * 100).toFixed(2)} %`); set('x-time', `${r.tNew.toFixed(3)} s`); set('x-dt', `${((r.tBase - r.tNew) * 1000).toFixed(0)} ms`);
  $('hud').textContent = `${r.kmh.toFixed(1)} km/h equivalent  ·  ${(r.gain * 100).toFixed(2)} % faster  ·  S ${p.S.toFixed(2)} m²  ·  ${r.hpArea.toFixed(1)} hp/m²`;
  $('hud-u').textContent = S.run ? 'racing' : S.t > 0 ? 'finished' : 'ready';
}
function changed() { solve(); readouts(); gr.draw(); }
const bind = (id, key, f) => { const el = $(id), out = $(id + '-v'); el.value = v[key]; out.textContent = f(+el.value); el.oninput = () => { v[key] = +el.value; out.textContent = f(+el.value); changed(); }; el._sync = () => { el.value = v[key]; out.textContent = f(+el.value); }; };
bind('s-cr', 'Cr', (x) => `${x.toFixed(2)} m`); bind('s-lam', 'lam', (x) => x.toFixed(2)); bind('s-mod', 'extra', (x) => `${x} added`); bind('s-cut', 'cut', (x) => `−${x.toFixed(1)} %`); bind('s-hp', 'P', (x) => `${x.toFixed(0)} hp`);
$('b-run').onclick = (e) => { if (S.t >= 3000 / S.res.vRecord + 0.5) S.t = 0; S.run = !S.run; e.target.textContent = S.run ? 'Pause' : 'Run the record'; };
$('b-reset').onclick = () => { S.t = 0; S.run = false; $('b-run').textContent = 'Run the record'; readouts(); gr.draw(); };
$('b-base').onclick = () => { Object.assign(v, BASEV); for (const id of ['s-cr', 's-lam', 's-mod', 's-cut', 's-hp']) $(id)._sync(); changed(); };
$('b-concept').onclick = () => { Object.assign(v, CONCEPT); for (const id of ['s-cr', 's-lam', 's-mod', 's-cut', 's-hp']) $(id)._sync(); changed(); };
cv.setAttribute('aria-label', 'Two electric aircraft race a 3 km course: the Spirit of Innovation as flown and the modified design.');

/* ---------------------------------------------------------------------------------------------------- loop ---- */
let gt = 0, vis = true; document.addEventListener('visibilitychange', () => { vis = !document.hidden; });
function frame(now) {
  requestAnimationFrame(frame); if (!vis) return;
  const dt = scene(now);
  if (S.run) { S.t += dt * S.speed; const end = 3000 / Math.min(D.REPORT.vBase, S.res.vRecord) + 1.2; if (S.t >= end) { S.t = end; S.run = false; $('b-run').textContent = 'Run again'; } gt += dt; if (gt > 0.1 || !S.run) { gt = 0; readouts(); } }
}
solve(); readouts(); gr.draw(); requestAnimationFrame(frame);
window.__DS = {v, S, D, gr};
