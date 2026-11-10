// The Research Project page: a recurve bow you can draw and release, with the report's measurements behind it. Draw a limb set, watch the energy build
// up under the force curve, release, and compare what each set did with it.
import {chart, label, dot, vline, COL, fit} from '../chart.js';
import {graphs} from '../stageui.js';
import * as R from './physics.js';

const $ = (id) => document.getElementById(id);
const S = {limb: R.LIMBS[3], d: 28, shown: 28, rel: null, flyT: 0, method: 'central', noise: false, h: 1, last: 0};
const IN = R.IN;

/* ------------------------------------------------------------------------------------------------ graphs ---- */
function drawDFC(c) {
  const {ctx, w, h} = fit(c), l = S.limb, N = 100, pts = [], f28 = R.force(l, 28);
  for (let i = 0; i <= N; i++) { const d = 9 + 21 * i / N; pts.push([d, R.force(l, d) / f28]); }
  const {X, Y} = chart(ctx, {x: 46, y: 12, w: w - 60, h: h - 44}, {xr: [9, 30], yr: [0, 1.2], xl: 'draw length, in', yl: 'force / force at 28 in', xticks: [9, 12, 16, 20, 24, 28], ny: 4, series: [{pts, color: l.color, width: 2.6}],
    under: [(X, Y) => { ctx.fillStyle = 'rgba(52,211,153,0.18)'; ctx.beginPath(); ctx.moveTo(X(9), Y(0)); for (let d = 9; d <= S.shown + 1e-6; d += 0.25) ctx.lineTo(X(d), Y(R.force(l, d) / f28)); ctx.lineTo(X(S.shown), Y(0)); ctx.closePath(); ctx.fill(); }]});
  vline(ctx, X, 28, Y(1.2), Y(0), 'rgba(255,255,255,0.35)'); label(ctx, '28 in: where the limbs were rated and shot', X(27.6), Y(1.12), COL.muted, 'right', 9.5);
  dot(ctx, X(S.shown), Y(R.force(l, S.shown) / f28), '#fff', 5); label(ctx, `stored energy ${R.energy(l, S.shown).toFixed(1)} J: the shaded area`, X(9.6), Y(0.9), COL.green, 'left', 10.5, '600'); label(ctx, 'brace height 9 in', X(9.3), Y(0.06), COL.muted, 'left', 9.5);
}
function drawEffD(c) {
  const {ctx, w, h} = fit(c), l = S.limb, pts = [];
  for (let d = 9.25; d <= 30; d += 0.25) pts.push([d, Math.log10(R.efficiencyAt(l, d))]);
  const {X, Y} = chart(ctx, {x: 46, y: 12, w: w - 60, h: h - 44}, {xr: [9, 30], yr: [-0.5, 2.5], xl: 'draw length, in', yl: 'efficiency (log scale)', xticks: [9, 12, 16, 20, 24, 28], yticks: [0, 1, 2], yfmt: (v) => `${Math.round(Math.pow(10, v) * 100)}%`, series: [{pts, color: l.color, width: 2.6}]});
  ctx.setLineDash([4, 4]); ctx.strokeStyle = 'rgba(255,255,255,0.45)'; ctx.beginPath(); ctx.moveTo(X(9), Y(0)); ctx.lineTo(X(30), Y(0)); ctx.stroke(); ctx.setLineDash([]); label(ctx, '100 %', X(29.8), Y(0) - 8, COL.muted, 'right', 9.5);
  ctx.fillStyle = 'rgba(244,114,182,0.08)'; ctx.fillRect(X(20), Y(2.5), X(30) - X(20), Y(-0.5) - Y(2.5)); label(ctx, 'region of interest', X(25), Y(2.3), COL.pink, 'center', 9.5);
  const e = R.efficiencyAt(l, S.shown); dot(ctx, X(S.shown), Y(Math.log10(e)), '#fff', 5); label(ctx, `${(e * 100).toFixed(0)} %`, X(S.shown) + 8, Y(Math.log10(e)) - 10, '#fff', 'left', 10.5, '600');
  label(ctx, 'near the brace the ratio is arithmetic, not physics', X(9.4), Y(2.4), COL.muted, 'left', 9);
}
function drawBars(c) {
  const {ctx, w, h} = fit(c), L = R.LIMBS, x0 = 100, bw = w - x0 - 58, rowH = (h - 40) / L.length, max = 40;
  label(ctx, 'arrow energy at 28 in', x0, 10, COL.muted, 'left', 9.5); label(ctx, 'efficiency', w - 6, 10, COL.muted, 'right', 9.5);
  L.forEach((l, i) => { const y = 26 + i * rowH + rowH / 2, sel = l === S.limb; label(ctx, l.name, x0 - 8, y - 6, sel ? '#fff' : COL.muted, 'right', 10.5, sel ? '600' : ''); label(ctx, l.gen, x0 - 8, y + 7, COL.faint, 'right', 8.5);
    ctx.fillStyle = 'rgba(255,255,255,0.05)'; ctx.fillRect(x0, y - rowH * 0.3, bw, rowH * 0.6); ctx.fillStyle = l.color; ctx.globalAlpha = sel ? 1 : 0.6; ctx.fillRect(x0, y - rowH * 0.3, bw * l.ke / max, rowH * 0.6); ctx.globalAlpha = 1;
    label(ctx, `${l.ke.toFixed(1)} J`, x0 + bw * l.ke / max + 6, y, sel ? '#fff' : COL.muted, 'left', 10.5, '600'); label(ctx, `${Math.round(l.eff * 100)}%`, w - 6, y, sel ? COL.green : COL.muted, 'right', 10.5, '600'); });
  const pair = (a, b, name) => { const ia = L.findIndex((x) => x.id === a), ib = L.findIndex((x) => x.id === b); const ya = 26 + ia * rowH + rowH / 2, yb = 26 + ib * rowH + rowH / 2; ctx.strokeStyle = 'rgba(255,255,255,0.2)'; ctx.beginPath(); ctx.moveTo(w - 36, ya + 6); ctx.lineTo(w - 30, ya + 6); ctx.lineTo(w - 30, yb - 6); ctx.lineTo(w - 36, yb - 6); ctx.stroke(); };
  pair('ns', 'nsxp'); pair('mxt10', 'mxtxt'); pair('cv', 'ha');
}
function drawDiff(c) {
  const {ctx, w, h} = fit(c), l = S.limb, ex = [], est = R.smoothness(l, S.method, S.h, S.noise ? 1 : 0), ref = R.smoothness(l, 'central', 0.25, 0);
  for (let d = 9.2; d <= 29.8; d += 0.2) ex.push([d, R.smoothnessExact(l, d)]);
  const top = Math.ceil(Math.max(...ex.map((q) => q[1]), ...est.map((q) => q[1])) * 10) / 10 + 0.1, bot = Math.min(0, Math.floor(Math.min(...est.map((q) => q[1])) * 10) / 10);
  const {X, Y} = chart(ctx, {x: 50, y: 12, w: w - 64, h: h - 46}, {xr: [9, 30], yr: [bot, top], xl: 'draw length, in', yl: 'smoothness dF/dx, N per mm', xticks: [9, 12, 16, 20, 24, 28], ny: 4, series: [{pts: ex, color: 'rgba(255,255,255,0.5)', width: 1.5, dash: [4, 4]}, {pts: est, color: S.method === 'central' ? COL.green : S.method === 'forward' ? COL.amber : COL.pink, width: 2.4}]});
  est.forEach((q) => dot(ctx, X(q[0]), Y(q[1]), '#fff', 2.6));
  let err = 0, n = 0; est.forEach((q) => { err += Math.abs(q[1] - R.smoothnessExact(l, q[0])); n++; });
  label(ctx, `${S.method} difference, step ${S.h} in${S.noise ? ', with 1 % scatter' : ''}`, X(9.4), Y(top) + 10, '#fff', 'left', 10.5, '600'); label(ctx, `mean error ${(err / n * 1000).toFixed(1)} mN/mm   ·   dashed: exact slope of the curve`, X(9.4), Y(top) + 25, COL.muted, 'left', 9.5);
}
function drawRatio(c) {
  const {ctx, w, h} = fit(c), items = [['MXT-XT  (carbon-foam core)', R.EFF_TO_SMOOTH.mxtxt, COL.cyan], ['Hoyt Axia  (wood core)', R.EFF_TO_SMOOTH.ha, COL.green]], x0 = 190, bw = w - x0 - 60, max = 6;
  items.forEach(([n, v, col], i) => { const y = 54 + i * 70; label(ctx, n, x0 - 12, y, '#fff', 'right', 11, '600'); ctx.fillStyle = 'rgba(255,255,255,0.05)'; ctx.fillRect(x0, y - 18, bw, 36); ctx.fillStyle = col; ctx.fillRect(x0, y - 18, bw * v / max, 36); label(ctx, v.toFixed(2), x0 + bw * v / max + 10, y, '#fff', 'left', 13, '700'); });
  label(ctx, `efficiency to smoothness, mm/N: the wood core is ${R.EFF_TO_SMOOTH.variation} % better`, x0, 18, COL.muted, 'left', 10); label(ctx, 'higher is better: more energy delivered per unit of force demanded per millimetre of draw', x0, h - 14, COL.muted, 'left', 9.5);
}
const gr = graphs({dfc: drawDFC, effd: drawEffD, bars: drawBars, diff: drawDiff, ratio: drawRatio});

/* ------------------------------------------------------------------------------------------------ scene ---- */
const cv = $('gl');
function geom(d, k = 0) {
  const s = (d - 9) / 21, Ls = 0.716, nx = (0.2286 + (d - 9) * IN) , ty = 0.66 - 0.12 * s + k, tx = nx - Math.sqrt(Math.max(1e-4, Ls * Ls - ty * ty));
  return {nx, ty, tx};
}
function bow(ctx, ox, oy, ppm, g, col) {
  const X = (x) => ox + x * ppm, Y = (y) => oy - y * ppm;
  ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  for (const sg of [1, -1]) {
    ctx.strokeStyle = col; ctx.lineWidth = 8; ctx.beginPath(); ctx.moveTo(X(0), Y(sg * 0.1));
    ctx.bezierCurveTo(X(-0.02 + g.tx * 0.25), Y(sg * 0.32), X(g.tx - 0.1 + 0.1 * 0), Y(sg * (g.ty - 0.12)), X(g.tx), Y(sg * g.ty)); ctx.stroke();
    ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(X(g.tx), Y(sg * g.ty)); ctx.quadraticCurveTo(X(g.tx - 0.02), Y(sg * (g.ty + 0.035)), X(g.tx - 0.07), Y(sg * (g.ty + 0.045))); ctx.stroke();
  }
  ctx.strokeStyle = '#2b3150'; ctx.lineWidth = 16; ctx.beginPath(); ctx.moveTo(X(0), Y(0.14)); ctx.lineTo(X(0), Y(-0.14)); ctx.stroke(); ctx.strokeStyle = '#8b90b8'; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(X(0), Y(0.12)); ctx.lineTo(X(0), Y(-0.12)); ctx.stroke();
  ctx.strokeStyle = 'rgba(255,255,255,0.85)'; ctx.lineWidth = 1.4; ctx.beginPath(); ctx.moveTo(X(g.tx - 0.07), Y(g.ty + 0.045)); ctx.lineTo(X(g.nx), Y(0)); ctx.lineTo(X(g.tx - 0.07), Y(-g.ty - 0.045)); ctx.stroke();
}
function scene(now) {
  const {ctx, w, h} = fit(cv), dt = Math.min(0.05, (now - (S.last || now)) / 1000); S.last = now;
  const sky = ctx.createLinearGradient(0, 0, 0, h); sky.addColorStop(0, '#0b1a22'); sky.addColorStop(1, '#10303a'); ctx.fillStyle = sky; ctx.fillRect(0, 0, w, h);
  const ppm = Math.min(Math.min(h * 0.42, 330) / 0.72, w * 0.94 / 1.8), ox = w * 0.5 + 0.03 * ppm, oy = h * 0.5 + 6, l = S.limb;
  ctx.fillStyle = 'rgba(52,211,153,0.05)'; ctx.fillRect(0, oy + 0.7 * ppm, w, h);
  // release: the string whips back to the brace height, overshoots, and settles, while the arrow leaves
  let dd = S.shown, k = 0, arrowX = null, endRel = false;
  if (S.rel) { S.rel.t += dt; const t = S.rel.t, tau = 0.09; if (t < tau) { dd = S.rel.from + (9 - S.rel.from) * (t / tau); } else { const u = t - tau; dd = 9 + 1.2 * Math.exp(-u * 8) * Math.cos(u * 60) * (S.rel.from - 9) / 20; k = 0.01 * Math.exp(-u * 8) * Math.cos(u * 60); } const air = Math.max(0, t - 0.05); arrowX = air * 1.2; if (t > 1.6) endRel = true; }
  const g = geom(Math.max(9, dd), k);
  bow(ctx, ox, oy, ppm, g, l.color);
  // arrow: nock at the string, point towards the target on the left; after release it leaves
  const tail = arrowX === null ? g.nx : S.rel.nx - arrowX * 1.4, alen = 0.78;
  ctx.strokeStyle = '#e6e8f5'; ctx.lineWidth = 2.6; ctx.beginPath(); ctx.moveTo(ox + tail * ppm, oy); ctx.lineTo(ox + (tail - alen) * ppm, oy); ctx.stroke(); ctx.fillStyle = COL.amber; ctx.beginPath(); ctx.moveTo(ox + (tail - alen) * ppm, oy); ctx.lineTo(ox + (tail - alen + 0.05) * ppm, oy - 4); ctx.lineTo(ox + (tail - alen + 0.05) * ppm, oy + 4); ctx.fill();
  if (arrowX === null) dot(ctx, ox + g.nx * ppm + 5, oy, '#fde68a', 5);
  if (arrowX !== null) label(ctx, `${R.speedAt(l, S.rel.from).toFixed(1)} m/s`, ox + (tail - alen) * ppm, oy - 18, '#fff', 'center', 12, '600');
  label(ctx, w < 600 ? `${l.name}  ·  ${l.gen}  ·  ${l.lb} lb` : `${l.name}  ·  ${l.gen} generation  ·  rated ${l.lb} lb  ·  upper limb ${l.mUp.toFixed(0)} g, lower ${l.mLo.toFixed(0)} g`, w * 0.5, h * 0.3, COL.muted, 'center', 10.5);
  // the energy account: what was stored, what the arrow got
  const pe = R.energy(l, S.shown), ke = l.eff * pe, bwid = Math.min(360, w * 0.5), bx = w * 0.5 - bwid / 2, by = oy + 0.55 * ppm;
  ctx.fillStyle = 'rgba(255,255,255,0.08)'; ctx.fillRect(bx, by, bwid, 16); ctx.fillStyle = COL.green; ctx.fillRect(bx, by, bwid * l.eff, 16); ctx.fillStyle = 'rgba(248,113,113,0.55)'; ctx.fillRect(bx + bwid * l.eff, by, bwid * (1 - l.eff), 16);
  label(ctx, `arrow ${ke.toFixed(1)} J (${Math.round(l.eff * 100)} %)`, bx, by + 30, COL.green, 'left', 10.5, '600'); if (bwid < 420) label(ctx, `lost: limb and string ${(pe - ke).toFixed(1)} J`, bx, by + 46, COL.red, 'left', 10.5); else label(ctx, `lost: limb and string ${(pe - ke).toFixed(1)} J`, bx + bwid, by + 30, COL.red, 'right', 10.5);
  label(ctx, `stored energy ${pe.toFixed(1)} J  =  area under the force curve`, w * 0.5, by - 12, '#fff', 'center', 11, '600');
  if (endRel) { S.rel = null; S.shown = S.d; gr.draw(); readouts(); }
}

/* --------------------------------------------------------------------------------------------- controls ---- */
function readouts() {
  const l = S.limb, pe = R.energy(l, S.shown), set = (id, t) => { const e = $(id); if (e) e.textContent = t; };
  $('hud').textContent = `draw ${S.shown.toFixed(1)} in  ·  stored ${pe.toFixed(1)} J  ·  arrow ${R.speedAt(l, S.shown).toFixed(1)} m/s  ·  KE ${(l.eff * pe).toFixed(1)} J`;
  $('hud-u').textContent = S.rel ? 'released' : 'drawn';
  set('x-ke', `${l.ke.toFixed(2)} J`); set('x-v', `${l.v.toFixed(2)} ft/s  (${l.vms.toFixed(1)} m/s)`); set('x-m', `${(l.arrowKg * 1000).toFixed(1)} g`); set('x-pe', `${l.pe28.toFixed(1)} J`); set('x-eff', `${Math.round(l.eff * 100)} %`);
}
function pick(id) { S.limb = R.LIMBS.find((x) => x.id === id); for (const q of R.LIMBS) $('l-' + q.id).setAttribute('aria-pressed', q.id === id); readouts(); gr.draw(); }
for (const q of R.LIMBS) $('l-' + q.id).onclick = () => pick(q.id);
const sd = $('s-d'); sd.value = S.d; $('s-d-v').textContent = `${S.d.toFixed(1)} in`;
sd.oninput = () => { S.d = +sd.value; S.shown = S.d; S.rel = null; $('s-d-v').textContent = `${S.d.toFixed(1)} in`; readouts(); gr.draw(); };
$('b-rel').onclick = () => { if (S.rel) return; S.rel = {t: 0, from: S.d, nx: geom(S.d).nx}; readouts(); };
for (const m of ['forward', 'backward', 'central']) { const b = $('d-' + m); if (b) b.onclick = () => { S.method = m; for (const j of ['forward', 'backward', 'central']) $('d-' + j).setAttribute('aria-pressed', j === m); gr.draw(); }; }
$('d-noise').onchange = () => { S.noise = $('d-noise').checked; gr.draw(); };
$('d-h').oninput = () => { S.h = +$('d-h').value; $('d-h-v').textContent = `${S.h} in`; gr.draw(); }; $('d-h-v').textContent = `${S.h} in`;
cv.setAttribute('aria-label', 'A recurve bow drawn to the chosen draw length. Use the draw slider and the release button to loose an arrow.');
pick('mxtxt');

let vis = true; document.addEventListener('visibilitychange', () => { vis = !document.hidden; });
let gt = 0; function frame(now) { requestAnimationFrame(frame); if (!vis) return; scene(now); gt += 1; if (S.rel && gt % 6 === 0) { readouts(); } }
requestAnimationFrame(frame);
window.__RS = {S, R, gr};
