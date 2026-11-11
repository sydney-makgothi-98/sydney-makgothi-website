// The Research Project, as a magazine article: five black-and-white figures drawn from the report's measurements (physics.js), and a table of the errors of
// the three finite-difference formulas worked out live. Nothing here moves: the page is read, not operated.
import {chart, label, dot, vline, COL, fit, GREY, figures, $} from '../mag.js';
import * as R from './physics.js';
import * as K from './curvature.js';

const byId = (id) => R.LIMBS.find((x) => x.id === id), HA = byId('ha');
// six limbs, six distinguishable pen strokes (ink only): older limbs thinner, newer limbs heavier
const PEN = {ns: {dash: [2, 3], w: 1.6}, nsxp: {dash: [], w: 2.8}, mxt10: {dash: [7, 3], w: 1.6}, mxtxt: {dash: [], w: 2.4}, cv: {dash: [2, 3, 7, 3], w: 1.6}, ha: {dash: [], w: 3.6}};

function drawDFC(c) {
  const {ctx, w, h} = fit(c), l = HA, N = 100, pts = [], f28 = R.force(l, 28);
  for (let i = 0; i <= N; i++) { const d = 9 + 21 * i / N; pts.push([d, R.force(l, d) / f28]); }
  const {X, Y} = chart(ctx, {x: 50, y: 12, w: w - 66, h: h - 48}, {xr: [9, 30], yr: [0, 1.2], xl: 'draw length, in', yl: 'force / force at 28 in', xticks: [9, 12, 16, 20, 24, 28], ny: 4, series: [{pts, color: '#000', width: 3}],
    under: [(X, Y) => { ctx.fillStyle = GREY.hatch; ctx.beginPath(); ctx.moveTo(X(9), Y(0)); for (let d = 9; d <= 28 + 1e-6; d += 0.25) ctx.lineTo(X(d), Y(R.force(l, d) / f28)); ctx.lineTo(X(28), Y(0)); ctx.closePath(); ctx.fill(); }]});
  vline(ctx, X, 28, Y(1.2), Y(0)); label(ctx, 'rated and shot at 28 in', X(27.6), Y(1.12), '#000', 'right', 10);
  dot(ctx, X(28), Y(1), '#000', 5); label(ctx, `stored energy ${R.energy(l, 28).toFixed(1)} J: the shaded area`, X(10), Y(0.9), '#000', 'left', 11, '600'); label(ctx, 'brace height, 9 in', X(9.3), Y(0.06), '#222', 'left', 9.5);
}
function drawEffD(c) {
  const {ctx, w, h} = fit(c), L = R.LIMBS;
  const {X, Y} = chart(ctx, {x: 50, y: 12, w: w - 66, h: h - 48}, {xr: [9, 30], yr: [-0.5, 2.5], xl: 'draw length, in', yl: 'efficiency (log scale)', xticks: [9, 12, 16, 20, 24, 28], yticks: [0, 1, 2], yfmt: (v) => `${Math.round(Math.pow(10, v) * 100)}%`,
    series: L.map((l) => { const pts = []; for (let d = 9.25; d <= 30; d += 0.25) pts.push([d, Math.log10(R.efficiencyAt(l, d))]); return {pts, color: '#000', width: PEN[l.id].w, dash: PEN[l.id].dash}; }),
    under: [(X, Y) => { ctx.fillStyle = 'rgba(0,0,0,0.07)'; ctx.fillRect(X(20), Y(2.5), X(30) - X(20), Y(-0.5) - Y(2.5)); }]});
  ctx.setLineDash([]); ctx.strokeStyle = '#000'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(X(9), Y(0)); ctx.lineTo(X(30), Y(0)); ctx.stroke(); label(ctx, '100 %', X(29.8), Y(0) - 8, '#000', 'right', 9.5);
  label(ctx, 'region of interest', X(25), Y(2.35), '#000', 'center', 10, '600'); label(ctx, 'near the brace the ratio is arithmetic, not physics', X(9.4), Y(2.4), '#222', 'left', 9.5);
  // key: a short sample of each pen beside its name
  const kx = X(13.2), ky = Y(2.15); L.forEach((l, i) => { const y = ky + i * 17, col = i < 3 ? 0 : 1, x = kx + col * 0; ctx.setLineDash(PEN[l.id].dash); ctx.lineWidth = PEN[l.id].w; ctx.strokeStyle = '#000'; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + 34, y); ctx.stroke(); ctx.setLineDash([]); label(ctx, `${l.name} (${l.gen})`, x + 42, y, '#000', 'left', 9.5); });
}
function drawBars(c) {
  const {ctx, w, h} = fit(c), L = R.LIMBS, x0 = 128, bw = w - x0 - 64, rowH = (h - 34) / L.length, max = 40;
  label(ctx, 'average arrow energy at 28 in, J', x0, 8, '#000', 'left', 9.5, '600'); label(ctx, 'efficiency', w - 4, 8, '#000', 'right', 9.5, '600');
  L.forEach((l, i) => { const y = 26 + i * rowH + rowH / 2, newer = l.gen === 'newer';
    label(ctx, l.name, x0 - 10, y - 6, '#000', 'right', 11, '600'); label(ctx, l.gen, x0 - 10, y + 7, '#555', 'right', 9);
    ctx.fillStyle = 'rgba(0,0,0,0.06)'; ctx.fillRect(x0, y - rowH * 0.3, bw, rowH * 0.6);
    ctx.fillStyle = newer ? '#000' : GREY.light; ctx.fillRect(x0, y - rowH * 0.3, bw * l.ke / max, rowH * 0.6); if (!newer) { ctx.strokeStyle = '#000'; ctx.lineWidth = 1; ctx.strokeRect(x0 + 0.5, y - rowH * 0.3 + 0.5, bw * l.ke / max - 1, rowH * 0.6 - 1); }
    label(ctx, `${l.ke.toFixed(1)} J`, x0 + bw * l.ke / max + 7, y, '#000', 'left', 11, '600'); label(ctx, `${Math.round(l.eff * 100)}%`, w - 4, y, '#000', 'right', 11.5, '700'); });
}
function drawDiff(c) {
  const {ctx, w, h} = fit(c), l = HA, hh = 2, ex = [];
  for (let d = 9.2; d <= 29.8; d += 0.2) ex.push([d, R.smoothnessExact(l, d)]);
  const f = R.smoothness(l, 'forward', hh, 0), b = R.smoothness(l, 'backward', hh, 0), m = R.smoothness(l, 'central', hh, 0);
  const top = Math.ceil(Math.max(...ex.map((q) => q[1]), ...f.map((q) => q[1]), ...b.map((q) => q[1])) * 10) / 10 + 0.05, bot = 0;
  const {X, Y} = chart(ctx, {x: 54, y: 12, w: w - 70, h: h - 48}, {xr: [9, 30], yr: [bot, top], xl: 'draw length, in', yl: 'smoothness dF/dx, N per mm', xticks: [9, 12, 16, 20, 24, 28], ny: 4, series: [
    {pts: ex, color: '#000', width: 1.2}, {pts: f, color: '#000', width: 2, dash: [8, 4]}, {pts: b, color: '#000', width: 2, dash: [2, 3]}, {pts: m, color: '#000', width: 3.2}]});
  m.forEach((q) => dot(ctx, X(q[0]), Y(q[1]), '#000', 3));
  [['exact slope of the curve', 1.2, []], ['forward difference', 2, [8, 4]], ['backward difference', 2, [2, 3]], ['central difference', 3.2, []]].forEach(([t, wd, dash], i) => { const y = Y(top) + 14 + i * 16; ctx.setLineDash(dash); ctx.lineWidth = wd; ctx.strokeStyle = '#000'; ctx.beginPath(); ctx.moveTo(X(9.5), y); ctx.lineTo(X(9.5) + 36, y); ctx.stroke(); ctx.setLineDash([]); label(ctx, t, X(9.5) + 44, y, '#000', 'left', 10); });
}
function drawRatio(c) {
  const {ctx, w, h} = fit(c), items = [['MXT-XT, carbon-foam core', R.EFF_TO_SMOOTH.mxtxt, GREY.light], ['Hoyt Axia, wood core', R.EFF_TO_SMOOTH.ha, '#000']], x0 = 200, bw = w - x0 - 70, max = 6;
  items.forEach(([n, v, col], i) => { const y = 52 + i * 66; label(ctx, n, x0 - 14, y, '#000', 'right', 11.5, '600'); ctx.fillStyle = 'rgba(0,0,0,0.06)'; ctx.fillRect(x0, y - 18, bw, 36); ctx.fillStyle = col; ctx.fillRect(x0, y - 18, bw * v / max, 36); if (col !== '#000') { ctx.strokeStyle = '#000'; ctx.strokeRect(x0 + 0.5, y - 17.5, bw * v / max - 1, 35); } label(ctx, v.toFixed(2), x0 + bw * v / max + 10, y, '#000', 'left', 14, '700'); });
  label(ctx, `efficiency to smoothness, mm per N: the wood core is ${R.EFF_TO_SMOOTH.variation} % better`, x0, 14, '#000', 'left', 10, '600'); label(ctx, 'higher is better', x0, h - 12, '#222', 'left', 9.5);
}
figures({dfc: drawDFC, effd: drawEffD, bars: drawBars, diff: drawDiff, ratio: drawRatio, curv: K.drawCurvature});
const anim = K.animateProfiles($('profiles-canvas'), $('replay'));

// the three finite-difference formulas against the exact slope, for three step sizes
const mean = (pts) => pts.reduce((s, q) => s + Math.abs(q[1] - R.smoothnessExact(HA, q[0])), 0) / pts.length * 1000;
const tb = $('err-table'); if (tb) tb.innerHTML = '<tr><th>Step h</th><th>Forward</th><th>Backward</th><th>Central</th></tr>' + [0.5, 1, 2].map((hh) => `<tr><td>${hh} in</td>` + ['forward', 'backward', 'central'].map((m) => `<td>${mean(R.smoothness(HA, m, hh, 0)).toFixed(1)}</td>`).join('') + '</tr>').join('');
// the curvature table, worked out from the same points the animation draws
const ct = $('curv-table'); if (ct) { const older = {ns: 1, mxt10: 1, cv: 1}; ct.innerHTML = '<tr><th>Limb</th><th>Mean curvature, 1/m</th><th>Peak curvature, 1/m</th><th>Tip offset, cm</th></tr>' + K.stats().map((q) => `<tr><td>${K.NAMES[q.id]} (${older[q.id] ? 'older' : 'newer'})</td><td>${q.mean.toFixed(2)}</td><td>${q.peak.toFixed(2)}</td><td>${(q.tip[1] * 100).toFixed(1)}</td></tr>`).join(''); }
window.__RS = {R, K, anim};
