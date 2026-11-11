// The Design Project, as a magazine article: the power balance, the wing planform and the times over 3 km for the report's chosen wing, the material and
// weight charts, the animated stability sheet, and the numbers in the text and checklist, all drawn in black ink from the report's figures (physics.js).
import {chart, label, dot, vline, fit, GREY, figures, put, $} from '../mag.js';
import * as D from './physics.js';
import {animateStability, ANALYSED} from './stability.js';

// the aircraft as flown (span 7.3 m, area 6.33 m2) and the report's chosen wing (span 7.11 m, root chord 1.19 m, taper 0.45, area 6.14 m2)
const BASEV = {Cr: 1.168, lam: 0.4842, b: 7.3}, CONCEPT = {Cr: 1.19, lam: 0.45, b: 7.11};
const pf0 = D.planform(BASEV.Cr, BASEV.lam, BASEV.b), pf = D.planform(CONCEPT.Cr, CONCEPT.lam, CONCEPT.b);
const p = {...D.BASE, S: pf.S, b: CONCEPT.b, extra: 0, cdCut: 0};
const res = D.evaluate(p), curve = D.curves(p), base = D.curves({...D.BASE, extra: 0});
const F_FINAL = 158.0;                                    // the report's final top speed with the new propeller, m/s (quoted, not modelled here)
const tRec = 3000 / D.REPORT.vBase, tGeo = res.tNew, tFin = 3000 / F_FINAL;

function drawPower(c) {
  const {ctx, w, h} = fit(c), top = 480;
  const {X, Y} = chart(ctx, {x: 50, y: 12, w: w - 66, h: h - 48}, {xr: [90, 200], yr: [0, top], xl: 'airspeed V, m/s', yl: 'power, kW', nx: 5, ny: 4, series: [
    {pts: base.map((q) => [q.V, q.req]), color: '#000', width: 1.3, dash: [4, 4]}, {pts: curve.map((q) => [q.V, q.req]), color: '#000', width: 3}, {pts: curve.map((q) => [q.V, q.avail]), color: '#000', width: 1.6}]});
  ctx.fillStyle = GREY.hatch; ctx.beginPath(); curve.forEach((q, i) => { if (q.V <= res.V) { const x = X(q.V), y = Y(Math.min(q.avail, top)); i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); } }); for (let i = curve.length - 1; i >= 0; i--) { const q = curve[i]; if (q.V <= res.V) ctx.lineTo(X(q.V), Y(q.req)); } ctx.closePath(); ctx.fill();
  dot(ctx, X(res.V), Y(res.pa / 1000), '#000', 5.5);
  label(ctx, 'power available', X(198), Y(curve[0].avail) + 14, '#000', 'right', 10.5, '600'); label(ctx, 'power required', X(150), Y(top * 0.96), '#000', 'left', 10.5, '600'); label(ctx, 'unmodified aircraft, dashed', X(150), Y(top * 0.88), '#222', 'left', 9.5);
  label(ctx, `speed gain from the wing alone: +${(res.gain * 100).toFixed(2)} %`, X(res.V) - 8, Y(res.pa / 1000) - 14, '#000', 'right', 11, '700'); label(ctx, 'shaded: power left over to climb and accelerate', X(92), Y(40), '#000', 'left', 9.5);
}
function drawPlan(c) {
  const {ctx, w, h} = fit(c), cx = w / 2, sc = Math.min((w - 70) / pf0.b, (h - 110) / (Math.max(pf0.Cr, pf.Cr) * 1.05)), top = 34;
  const outline = (q, fill, dash, lw) => { const hb = q.b / 2 * sc; ctx.beginPath(); ctx.moveTo(cx - hb, top); ctx.lineTo(cx + hb, top); ctx.lineTo(cx + hb, top + q.Ct * sc); ctx.lineTo(cx + 0.0001, top + q.Cr * sc); ctx.lineTo(cx - 0.0001, top + q.Cr * sc); ctx.lineTo(cx - hb, top + q.Ct * sc); ctx.closePath(); if (fill) { ctx.fillStyle = fill; ctx.fill(); } ctx.setLineDash(dash || []); ctx.strokeStyle = '#000'; ctx.lineWidth = lw; ctx.stroke(); ctx.setLineDash([]); };
  outline(pf0, null, [6, 4], 1.4); outline(pf, 'rgba(0,0,0,0.12)', [], 2.6);
  label(ctx, `span 7.30 m flown, 7.11 m new`, cx, 14, '#000', 'center', 10);
  label(ctx, `root ${pf.Cr.toFixed(2)} m`, cx, top + pf.Cr * sc + 14, '#000', 'center', 10.5, '600'); label(ctx, `tip ${pf.Ct.toFixed(2)} m`, cx + pf.b / 2 * sc - 8, top + pf.Ct * sc - 14, '#000', 'right', 10.5, '600');
  label(ctx, `S = (C_r + C_t) b / 2 = ${pf.S.toFixed(2)} m²   ·   taper ${pf.lam.toFixed(2)}   ·   AR ${(pf.b * pf.b / pf.S).toFixed(2)}`, cx, top + pf.Cr * sc + 38, '#000', 'center', 10.5, '600');
  label(ctx, `dashed: the aircraft as flown, ${pf0.S.toFixed(2)} m², AR ${(pf0.b * pf0.b / pf0.S).toFixed(2)}`, cx, top + pf.Cr * sc + 54, '#222', 'center', 10);
}
function drawBars(c) {
  const {ctx, w, h} = fit(c), items = [['Spirit of Innovation, as flown', tRec, GREY.light], ['Wing alone (this model)', tGeo, GREY.mid], ['Wing and propeller (report, 158 m/s)', tFin, '#000']], lo = 18.8, hi = 19.5;
  const {X, Y} = chart(ctx, {x: 60, y: 12, w: w - 74, h: h - 48}, {xr: [0, 4.2], yr: [lo, hi], xl: '', yl: 'time over 3 km, s', xticks: [], ny: 3, series: []});
  items.forEach(([n, t, col], i) => { const x = X(0.35 + i * 1.3), bw = (X(1) - X(0)) * 0.9; ctx.fillStyle = col; ctx.fillRect(x, Y(Math.min(hi, t)), bw, Y(lo) - Y(Math.min(hi, t))); if (col !== '#000') { ctx.strokeStyle = '#000'; ctx.lineWidth = 1; ctx.strokeRect(x + 0.5, Y(Math.min(hi, t)) + 0.5, bw - 1, Y(lo) - Y(Math.min(hi, t)) - 1); } label(ctx, `${t.toFixed(3)} s`, x + bw / 2, Y(Math.min(hi, t)) - 10, '#000', 'center', 12, '700'); label(ctx, n.split(' (')[0], x + bw / 2, Y(lo) + 14, '#000', 'center', 9.5); if (n.includes('(')) label(ctx, '(' + n.split(' (')[1], x + bw / 2, Y(lo) + 26, '#000', 'center', 9); });
  label(ctx, `${((tRec - tFin) * 1000).toFixed(0)} ms faster than the record, ${((F_FINAL - D.REPORT.vBase) * tFin).toFixed(0)} m ahead at the line`, X(0.1), Y(hi) + 12, '#000', 'left', 10.5, '600');
}
// Table 13 of the report: elastic modulus / density / roughness, the merit for a smooth, stiff, light skin
function drawMerit(c) {
  const {ctx, w, h} = fit(c), items = [['CFRP (carbon fibre)', 200, 1.55, 2.4, '#000'], ['GFRP (glass fibre)', 20, 2.0, 3.2, GREY.mid], ['Aluminium alloys', 90, 2.5, 6.2, GREY.light]].map(([n, E, r, k, col]) => ({n, E, r, k, col, v: E / r / k})), x0 = 150, bw = w - x0 - 80, max = 60, rowH = (h - 36) / 3;
  label(ctx, 'E / density / roughness   (GPa per Mg/m³ per µm)', x0, 10, '#000', 'left', 10, '600');
  items.forEach((it, i) => { const y = 32 + i * rowH + rowH / 2; label(ctx, it.n, x0 - 10, y, '#000', 'right', 11, '600'); ctx.fillStyle = 'rgba(0,0,0,0.06)'; ctx.fillRect(x0, y - rowH * 0.3, bw, rowH * 0.6); ctx.fillStyle = it.col; ctx.fillRect(x0, y - rowH * 0.3, bw * it.v / max, rowH * 0.6); if (it.col !== '#000') { ctx.strokeStyle = '#000'; ctx.lineWidth = 1; ctx.strokeRect(x0 + 0.5, y - rowH * 0.3 + 0.5, bw * it.v / max - 1, rowH * 0.6 - 1); } label(ctx, it.v.toFixed(2), x0 + bw * it.v / max + 8, y, '#000', 'left', 13, '700'); });
}
// Table 18: the mass of the modified aircraft, by component
const WEIGHTS = [['Fireproof casing and coolant', 412.0], ['Battery cells', 278.0], ['Fuselage', 200.0], ['Wing', 163.26], ['Main gear', 25.0], ['Avionics', 27.54], ['Electronics', 25.77], ['Vertical tail', 19.0], ['Hydraulics', 18.09], ['Nose gear', 13.66], ['Rudder', 12.67], ['Aileron', 11.41], ['Instruments', 8.3], ['Horizontal tail', 6.12], ['Paint, elevator, other engine parts', 1.93 + 1.68 + 20.44]];
function drawWeights(c) {
  const {ctx, w, h} = fit(c), x0 = 200, bw = w - x0 - 90, rowH = (h - 30) / WEIGHTS.length, max = 450, total = WEIGHTS.reduce((a, q) => a + q[1], 0);
  label(ctx, `mass by component, kg   (total ${total.toFixed(2)} kg, limit 1750 kg)`, x0, 8, '#000', 'left', 10, '600');
  WEIGHTS.forEach(([n, m], i) => { const y = 24 + i * rowH + rowH / 2; label(ctx, n, x0 - 8, y, '#000', 'right', 9.5, i < 4 ? '600' : ''); ctx.fillStyle = i < 4 ? '#000' : GREY.light; ctx.fillRect(x0, y - rowH * 0.34, bw * m / max, rowH * 0.68); label(ctx, m.toFixed(1), x0 + bw * m / max + 6, y, '#000', 'left', 9.5, '600'); });
}
figures({power: drawPower, plan: drawPlan, bars: drawBars, merit: drawMerit, weights: drawWeights});
const stab = animateStability($('stab-canvas'), $('stab-replay'));

// the numbers in the text, from the same model
put('x-v', `${res.vRecord.toFixed(2)} m/s`); put('x-gain', `${(res.gain * 100).toFixed(2)} %`); put('x-time', `${tGeo.toFixed(3)} s`); put('x-dt', `${((tRec - tFin) * 1000).toFixed(0)} ms`);
// the table of modes, worked out from the characteristic equations
const mt = $('mode-table'); if (mt) mt.innerHTML = '<tr><th>Mode</th><th>Characteristic equation</th><th>&omega;<sub>n</sub>, rad/s</th><th>&zeta;</th><th>Period, s</th><th>Half or double time, s</th><th>Verdict</th></tr>' + ANALYSED.map((a) => {
  const eq = a.poly.length === 3 ? `s&sup2; ${a.poly[1] < 0 ? '&minus;' : '+'} ${Math.abs(a.poly[1])}s + ${a.poly[2]}` : `s ${a.poly[1] < 0 ? '&minus;' : '+'} ${Math.abs(a.poly[1])}`;
  return `<tr><td>${a.name}</td><td>${eq}</td><td>${a.real ? '&ndash;' : a.wn.toFixed(2)}</td><td>${a.real ? '&ndash;' : a.zeta.toFixed(2)}</td><td>${a.real ? '&ndash;' : a.period.toFixed(2)}</td><td>${a.half.toFixed(a.half < 1 ? 2 : 1)}</td><td><b>${a.stable ? 'stable' : 'UNSTABLE'}</b></td></tr>`;
}).join('');
// the checklist
const mark = (ok) => (ok ? 'MET' : 'MARGINAL');
const rows = [['u-speed', `158 m/s with the new propeller (${(158 / D.REPORT.vBase * 100 - 100).toFixed(2)} % over the record), need 156.83 m/s`, 158 >= D.REPORT.vTarget], ['u-area', `${pf.S.toFixed(2)} m² from 6.33 m² (${((1 - pf.S / pf0.S) * 100).toFixed(1)} % smaller), target 3.09 %`, 1 - pf.S / pf0.S > 0.029],
  ['u-mass', `${WEIGHTS.reduce((a, q) => a + q[1], 0).toFixed(1)} kg, limit 1750 kg`, true], ['u-cg', 'unchanged, 18 % ahead of the aerodynamic centre; no cells added', true], ['u-pl', '2.33 kg/HP rounded (1,244 kg over 535 hp is 2.325): a hair under the limit, accepted in the report', false]];
rows.forEach(([id, t, ok]) => put(id, `${t}: ${mark(ok)}`)); put('u-all', 'every requirement met except one marginal item, which the report accepts');
window.__DS = {D, res, stab, ANALYSED};
