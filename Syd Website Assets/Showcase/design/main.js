// The Design Project, as a magazine article: the power balance, the time over 3 km and the wing planform for the report's chosen wing, drawn in black ink,
// and the requirements checklist worked out from the same model (physics.js). Nothing moves: the page is read, not operated.
import {chart, label, dot, vline, COL, fit, GREY, figures, put, $} from '../mag.js';
import * as D from './physics.js';

const BASEV = {Cr: 1.2, lam: 0.4842}, CONCEPT = {Cr: 1.19, lam: 0.45};
const pf0 = D.planform(BASEV.Cr, BASEV.lam, D.BASE.b), pf = D.planform(CONCEPT.Cr, CONCEPT.lam, D.BASE.b);
const p = {...D.BASE, S: pf.S, extra: 0, cdCut: 0, P: D.BASE.P};
const res = D.evaluate(p), curve = D.curves(p), base = D.curves({...D.BASE, extra: 0});

function drawPower(c) {
  const {ctx, w, h} = fit(c), top = 480;
  const {X, Y} = chart(ctx, {x: 50, y: 12, w: w - 66, h: h - 48}, {xr: [90, 200], yr: [0, top], xl: 'airspeed V, m/s', yl: 'power, kW', nx: 5, ny: 4, series: [
    {pts: base.map((q) => [q.V, q.req]), color: '#000', width: 1.3, dash: [4, 4]}, {pts: curve.map((q) => [q.V, q.req]), color: '#000', width: 3}, {pts: curve.map((q) => [q.V, q.avail]), color: '#000', width: 1.6}]});
  ctx.fillStyle = GREY.hatch; ctx.beginPath(); curve.forEach((q, i) => { if (q.V <= res.V) { const x = X(q.V), y = Y(Math.min(q.avail, top)); i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); } }); for (let i = curve.length - 1; i >= 0; i--) { const q = curve[i]; if (q.V <= res.V) ctx.lineTo(X(q.V), Y(q.req)); } ctx.closePath(); ctx.fill();
  dot(ctx, X(res.V), Y(res.pa / 1000), '#000', 5.5);
  label(ctx, 'power available', X(198), Y(curve[0].avail) + 14, '#000', 'right', 10.5, '600'); label(ctx, 'power required', X(150), Y(top * 0.96), '#000', 'left', 10.5, '600'); label(ctx, 'unmodified aircraft, dashed', X(150), Y(top * 0.88), '#222', 'left', 9.5);
  label(ctx, `top speed ${res.V.toFixed(1)} m/s  (+${(res.gain * 100).toFixed(2)} %)`, X(res.V) - 8, Y(res.pa / 1000) - 14, '#000', 'right', 11, '700'); label(ctx, 'shaded: power left over to climb and accelerate', X(92), Y(40), '#000', 'left', 9.5);
}
function drawPlan(c) {
  const {ctx, w, h} = fit(c), b = D.BASE.b, cx = w / 2, sc = Math.min((w - 60) / b, (h - 110) / (Math.max(pf0.Cr, pf.Cr) * 1.05)), top = 34;
  const outline = (Cr, Ct, fill, dash, lw) => { ctx.beginPath(); ctx.moveTo(cx - b / 2 * sc, top); ctx.lineTo(cx + b / 2 * sc, top); ctx.lineTo(cx + b / 2 * sc, top + Ct * sc); ctx.lineTo(cx + 0.0001, top + Cr * sc); ctx.lineTo(cx - 0.0001, top + Cr * sc); ctx.lineTo(cx - b / 2 * sc, top + Ct * sc); ctx.closePath(); if (fill) { ctx.fillStyle = fill; ctx.fill(); } ctx.setLineDash(dash || []); ctx.strokeStyle = '#000'; ctx.lineWidth = lw; ctx.stroke(); ctx.setLineDash([]); };
  outline(pf0.Cr, pf0.Ct, null, [6, 4], 1.4); outline(pf.Cr, pf.Ct, 'rgba(0,0,0,0.12)', [], 2.6);
  label(ctx, `span ${b.toFixed(1)} m, held fixed`, cx, 14, '#000', 'center', 10);
  label(ctx, `root ${pf.Cr.toFixed(2)} m`, cx, top + pf.Cr * sc + 14, '#000', 'center', 10.5, '600'); label(ctx, `tip ${pf.Ct.toFixed(2)} m`, cx + b / 2 * sc - 8, top + pf.Ct * sc - 14, '#000', 'right', 10.5, '600');
  label(ctx, `S = (C_r + C_t) b / 2 = ${pf.S.toFixed(2)} m²   ·   taper ${pf.lam.toFixed(2)}   ·   AR ${(b * b / pf.S).toFixed(2)}`, cx, top + pf.Cr * sc + 38, '#000', 'center', 10.5, '600');
  label(ctx, `dashed: the aircraft as flown, ${D.BASE.S.toFixed(2)} m²`, cx, top + pf.Cr * sc + 54, '#222', 'center', 10);
}
function drawBars(c) {
  const {ctx, w, h} = fit(c), items = [['Spirit of Innovation, as flown', 3000 / D.REPORT.vBase, GREY.light], ['This design', res.tNew, '#000']], lo = 18.9, hi = 19.5;
  const {X, Y} = chart(ctx, {x: 60, y: 12, w: w - 74, h: h - 48}, {xr: [0, 3], yr: [lo, hi], xl: '', yl: 'time over 3 km, s', xticks: [], ny: 3, series: []});
  items.forEach(([n, t, col], i) => { const x = X(0.4 + i * 1.3), bw = (X(1) - X(0)) * 0.9; ctx.fillStyle = col; ctx.fillRect(x, Y(Math.min(hi, t)), bw, Y(lo) - Y(Math.min(hi, t))); if (col !== '#000') { ctx.strokeStyle = '#000'; ctx.lineWidth = 1; ctx.strokeRect(x + 0.5, Y(Math.min(hi, t)) + 0.5, bw - 1, Y(lo) - Y(Math.min(hi, t)) - 1); } label(ctx, `${t.toFixed(3)} s`, x + bw / 2, Y(Math.min(hi, t)) - 10, '#000', 'center', 12, '700'); label(ctx, n, x + bw / 2, Y(lo) + 14, '#000', 'center', 10); });
  label(ctx, `${((items[0][1] - items[1][1]) * 1000).toFixed(0)} ms faster, ${((D.REPORT.vBase * (1 + res.gain) - D.REPORT.vBase) * items[1][1]).toFixed(0)} m ahead at the line`, X(0.1), Y(hi) + 12, '#000', 'left', 10.5, '600');
}
figures({power: drawPower, plan: drawPlan, bars: drawBars});

// the numbers in the text and the checklist, from the same model
put('x-v', `${res.V.toFixed(2)} m/s`); put('x-gain', `${(res.gain * 100).toFixed(2)} %`); put('x-time', `${res.tNew.toFixed(3)} s`); put('x-dt', `${((res.tBase - res.tNew) * 1000).toFixed(0)} ms`);
const mark = (ok) => (ok ? 'MET' : 'NOT MET');
const urs = [['u-speed', `${res.kmh.toFixed(1)} km/h (need ${D.REPORT.kmhTarget})`, res.kmh >= D.REPORT.kmhTarget - 0.05], ['u-hpa', `${res.hpArea.toFixed(2)} hp/m² (need ${D.REPORT.hpAreaTarget})`, res.hpArea >= D.REPORT.hpAreaTarget - 0.005], ['u-mass', `${res.mass.toFixed(0)} kg (limit 1750)`, res.mass <= 1750], ['u-area', `${p.S.toFixed(2)} m² (not below ${D.REPORT.area1})`, p.S >= D.REPORT.area1 - 0.015], ['u-cg', 'unchanged', true]];
urs.forEach(([id, t, ok]) => put(id, `${t}: ${mark(ok)}`)); put('u-all', urs.every((q) => q[2]) ? 'every requirement met' : 'a requirement is not met');
window.__DS = {D, res};
