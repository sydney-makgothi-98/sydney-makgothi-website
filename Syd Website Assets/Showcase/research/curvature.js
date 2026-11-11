// Limb curvature from a top-view profile: the grid forms, the profile of each limb appears point by point, and the curvature is then
// found by numerical derivatives of those points. The curvature maths below is the real method and runs on whatever coordinates it is given.
// ILLUSTRATIVE DATA: the coordinates drawn here are generated for this article (a smooth limb shape for each set, with a little reading
// scatter added, as a person reading a grid would introduce), ordered as the report found them: the newer limbs curve more. They are NOT
// the measured coordinate tables. If a file `limb-profiles.json` ({"ns": [[x_mm, y_mm], ...], ...}) is placed next to the figures it is used instead.
import {chart, label, dot, fit, GREY} from '../mag.js';

export const L = 0.65;                     // limb length, m
const PEN = {ns: {dash: [2, 3], w: 1.6}, nsxp: {dash: [], w: 2.8}, mxt10: {dash: [7, 3], w: 1.6}, mxtxt: {dash: [], w: 2.4}, cv: {dash: [2, 3, 7, 3], w: 1.6}, ha: {dash: [], w: 3.6}};
// curvature at the riser end, curvature at the tip, 1/m: the newer limb of each family is the more curved one
const SHAPE = {ns: [0.33, 0.9], nsxp: [0.6, 1.5], mxt10: [0.42, 1.0], mxtxt: [0.72, 1.75], cv: [0.48, 1.15], ha: [0.84, 2.0]};
const N = 17;                               // points read from the grid, one every 4 cm

const rnd = (i, seed) => { const s = Math.sin(i * 91.7 + seed * 13.1) * 43758.5453; return s - Math.floor(s) - 0.5; };
/** the "true" centre-line of a limb: curvature grows along its length, integrated twice to give x and y (m) */
function shape(id, n = 400) {
  const [k0, k1] = SHAPE[id], ds = L / n, pts = []; let th = 0.05, x = 0, y = 0;
  for (let i = 0; i <= n; i++) { pts.push([x, y]); const s = i / n, k = k0 + (k1 - k0) * s * s; th += k * ds; x += Math.cos(th) * ds; y += Math.sin(th) * ds; }
  return pts;
}
/** read N points off the shape, one every 4 cm of arc length, with 0.1 mm of reading scatter, to the nearest 0.1 mm: what the grid gives */
function read(id, seed) {
  const f = shape(id), out = [];
  for (let i = 0; i < N; i++) { const q = f[Math.round(i / (N - 1) * (f.length - 1))]; out.push([Math.round((q[0] + 0.0001 * rnd(i, seed)) * 1e4) / 1e4, Math.round((q[1] + 0.0001 * rnd(i + 50, seed)) * 1e4) / 1e4]); }
  return out;
}
export const IDS = ['ns', 'nsxp', 'mxt10', 'mxtxt', 'cv', 'ha'], NAMES = {ns: 'NS', nsxp: 'NS-XP', mxt10: 'MXT-10', mxtxt: 'MXT-XT', cv: 'Carbon Velos', ha: 'Hoyt Axia'};
export const PROFILES = {}; IDS.forEach((id, k) => { PROFILES[id] = read(id, k + 1); });
fetch('Syd%20Website%20Assets/Senior%20Research%20Projects/limb-profiles.json').then((r) => (r.ok ? r.json() : null)).then((j) => { if (j) { IDS.forEach((id) => { if (j[id]) PROFILES[id] = j[id].map(([a, b]) => [a / 1000, b / 1000]); }); } }).catch(() => {});

/** curvature at each interior point by central differences, with the index as the parameter: k = (x'y'' - y'x'') / (x'^2 + y'^2)^(3/2) */
export function curvature(pts) {
  const out = [];
  for (let i = 1; i < pts.length - 1; i++) {
    const x1 = (pts[i + 1][0] - pts[i - 1][0]) / 2, y1 = (pts[i + 1][1] - pts[i - 1][1]) / 2, x2 = pts[i + 1][0] - 2 * pts[i][0] + pts[i - 1][0], y2 = pts[i + 1][1] - 2 * pts[i][1] + pts[i - 1][1];
    out.push([i, (x1 * y2 - y1 * x2) / Math.pow(x1 * x1 + y1 * y1, 1.5)]);
  }
  return out;
}
const arc = (pts) => { let s = 0; return pts.map((p, i) => (i ? (s += Math.hypot(p[0] - pts[i - 1][0], p[1] - pts[i - 1][1])) : 0)); };
export function stats() { return IDS.map((id) => { const p = PROFILES[id], k = curvature(p), s = arc(p), v = k.map((q) => q[1]); return {id, mean: v.reduce((a, b) => a + b, 0) / v.length, peak: Math.max(...v), len: s[s.length - 1], tip: p[p.length - 1]}; }); }

/* ------------------------------------------------------------------------------------------ the animated figure */
const T_GRID = 2.4, T_PROF = 4.2, T_ALL = T_GRID + T_PROF + 2;
export function drawProfiles(c, t) {
  const {ctx, w, h} = fit(c), x0 = 46, y0 = 14, pw = w - x0 - 18, ph = h - 54, xr = [0, 0.7], yr = [-0.02, 0.3];
  const X = (v) => x0 + (v - xr[0]) / (xr[1] - xr[0]) * pw, Y = (v) => y0 + ph - (v - yr[0]) / (yr[1] - yr[0]) * ph;
  const g = Math.min(1, t / T_GRID), ease = (a) => 1 - Math.pow(1 - a, 3);
  // 1. the grid forms: vertical lines sweep in from the left, horizontal ones rise from the bottom
  ctx.save(); ctx.beginPath(); ctx.rect(x0, y0, pw, ph); ctx.clip();
  const vs = []; for (let v = 0; v <= 0.7001; v += 0.05) vs.push(v); const hs = []; for (let v = 0; v <= 0.3001; v += 0.05) hs.push(v);
  vs.forEach((v, i) => { const a = ease(Math.max(0, Math.min(1, g * 1.6 - i / vs.length * 0.6))); ctx.strokeStyle = i % 2 ? 'rgba(0,0,0,0.12)' : 'rgba(0,0,0,0.28)'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(X(v), y0 + ph); ctx.lineTo(X(v), y0 + ph - ph * a); ctx.stroke(); });
  hs.forEach((v, i) => { const a = ease(Math.max(0, Math.min(1, g * 1.6 - i / hs.length * 0.6))); ctx.strokeStyle = i % 2 ? 'rgba(0,0,0,0.12)' : 'rgba(0,0,0,0.28)'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(x0, Y(v)); ctx.lineTo(x0 + pw * a, Y(v)); ctx.stroke(); });
  ctx.restore();
  ctx.strokeStyle = '#000'; ctx.lineWidth = 1.2; ctx.globalAlpha = g; ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x0, y0 + ph); ctx.lineTo(x0 + pw, y0 + ph); ctx.stroke();
  vs.forEach((v, i) => { if (i % 2 === 0) label(ctx, (v * 100).toFixed(0), X(v), y0 + ph + 12, '#555', 'center', 9); }); hs.forEach((v, i) => { if (i % 2 === 0) label(ctx, (v * 100).toFixed(0), x0 - 6, Y(v), '#555', 'right', 9); });
  label(ctx, 'distance along the limb from the riser, cm', x0 + pw / 2, y0 + ph + 30, '#000', 'center', 9.5); ctx.globalAlpha = 1;
  ctx.save(); ctx.translate(12, y0 + ph / 2); ctx.rotate(-Math.PI / 2); label(ctx, 'sideways, cm (top view)', 0, 0, '#000', 'center', 9.5); ctx.restore();
  // 2. then the profiles: each limb is traced point by point, and its points sit where it crosses the grid
  const tp = Math.max(0, (t - T_GRID) / T_PROF);
  IDS.forEach((id, k) => {
    const pts = PROFILES[id], a = Math.max(0, Math.min(1, tp * 1.15 - k * 0.03)), n = a * (pts.length - 1), m = Math.floor(n);
    if (a <= 0) return;
    ctx.strokeStyle = '#000'; ctx.lineWidth = PEN[id].w; ctx.setLineDash(PEN[id].dash); ctx.beginPath();
    for (let i = 0; i <= m; i++) { const p = pts[i]; i ? ctx.lineTo(X(p[0]), Y(p[1])) : ctx.moveTo(X(p[0]), Y(p[1])); }
    if (m < pts.length - 1) { const f = n - m, p = pts[m], q = pts[m + 1]; ctx.lineTo(X(p[0] + (q[0] - p[0]) * f), Y(p[1] + (q[1] - p[1]) * f)); }
    ctx.stroke(); ctx.setLineDash([]);
    for (let i = 0; i <= m; i++) { const p = pts[i]; ctx.fillStyle = '#fff'; ctx.strokeStyle = '#000'; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.arc(X(p[0]), Y(p[1]), id === 'ha' ? 3.3 : 2.5, 0, 7); ctx.fill(); ctx.stroke(); }
    if (a >= 1) { const e = pts[pts.length - 1]; label(ctx, NAMES[id], X(e[0]) + 7, Y(e[1]), '#000', 'left', 9.5, '600'); }
  });
  // a read-out of the point being read: its coordinates, as written down from the grid
  if (tp > 0 && tp < 1) { const k = Math.min(IDS.length - 1, Math.floor(tp * IDS.length)), pts = PROFILES[IDS[k]], i = Math.min(pts.length - 1, Math.floor(((tp * IDS.length) % 1) * pts.length)); label(ctx, `${NAMES[IDS[k]]}: point ${i + 1} of ${pts.length}   x = ${(pts[i][0] * 1000).toFixed(1)} mm   y = ${(pts[i][1] * 1000).toFixed(1)} mm`, x0 + 10, y0 + 12, '#000', 'left', 10, '600'); }
  else if (t < T_GRID) label(ctx, 'a 5 cm grid is laid over the top view of the limbs', x0 + 10, y0 + 12, '#000', 'left', 10, '600');
}

export function drawCurvature(c) {
  const {ctx, w, h} = fit(c), series = IDS.map((id) => ({id, k: curvature(PROFILES[id])}));
  const ymax = Math.ceil(Math.max(...series.flatMap((s) => s.k.map((q) => q[1]))) + 0.3), ymin = Math.floor(Math.min(0, ...series.flatMap((s) => s.k.map((q) => q[1]))));
  const {X, Y} = chart(ctx, {x: 54, y: 12, w: w - 70, h: h - 48}, {xr: [1, N - 2], yr: [ymin, ymax], xl: 'point number along the limb, from the riser to the tip', yl: 'curvature, 1/m', xticks: [1, 4, 8, 12, 15], ny: 5,
    series: series.map((s) => ({pts: s.k, color: '#000', width: PEN[s.id].w, dash: PEN[s.id].dash}))});
  ctx.setLineDash([]); IDS.forEach((id, i) => { const y = Y(ymax) + 14 + i * 15, kx = X(1.4); ctx.setLineDash(PEN[id].dash); ctx.lineWidth = PEN[id].w; ctx.strokeStyle = '#000'; ctx.beginPath(); ctx.moveTo(kx, y); ctx.lineTo(kx + 34, y); ctx.stroke(); ctx.setLineDash([]); label(ctx, NAMES[id] + (['nsxp', 'mxtxt', 'ha'].includes(id) ? ' (newer)' : ' (older)'), kx + 42, y, '#000', 'left', 9.5); });
}

/** start the animation when the figure scrolls into view; a click replays it. With reduced motion, show the finished picture. */
export function animateProfiles(c, replayBtn) {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches; let t0 = null, vis = false, raf = 0, t = reduce ? T_ALL : 0;
  const frame = (now) => { if (!vis) { raf = 0; return; } if (t0 === null) t0 = now - t * 1000; t = Math.min(T_ALL, (now - t0) / 1000); drawProfiles(c, t); if (t < T_ALL) raf = requestAnimationFrame(frame); else raf = 0; };
  const play = () => { t0 = null; t = reduce ? T_ALL : 0; if (!raf && vis) raf = requestAnimationFrame(frame); else if (reduce) drawProfiles(c, T_ALL); };
  new IntersectionObserver(([e]) => { vis = e.isIntersecting; if (vis && t === 0) play(); else if (vis && !raf && t < T_ALL) raf = requestAnimationFrame(frame); else if (vis) drawProfiles(c, t); }).observe(c);
  if (replayBtn) replayBtn.onclick = () => { t = 0; play(); };
  addEventListener('resize', () => drawProfiles(c, t));
  return {draw: (x) => drawProfiles(c, x === undefined ? t : x)};
}
