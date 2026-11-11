// The Parachute page: the Shockwave jet truck stops under three stages, and every number on screen comes from one ODE.
import {chart, label, dot, vline, COL, fit} from '../chart.js';
import {graphs} from '../stageui.js';
import * as P from './physics.js';
import {initJet} from './jet.js';

const $ = (id) => document.getElementById(id);
const p = {...P.DEFAULTS}, S = {t: 0, run: true, hold: 0, speed: 1, r: null, reef: true};
const REPORT = {time: 24.7, g: 3.2, sust: 2.1, dist: 4200};
const mph = (v) => v / P.MPH;
function solve() { const q = {...p}; if (!S.reef) { q.reef1 = 1; q.reef2 = 1; } S.r = P.simulate(q); }
const idx = (t) => Math.min(S.r.t.length - 1, Math.max(0, Math.round(t / 0.01)));
const upTo = (pts) => pts.filter((q) => q[0] <= S.t + 1e-9), faint = (pts) => ({pts, color: 'rgba(255,255,255,0.22)', width: 1.2});
const xmax = (r) => Math.max(10, Math.ceil(r.tStop / 5) * 5);

/* ------------------------------------------------------------------------------------------------ graphs ---- */
function drawSpeed(c) {
  const {ctx, w, h} = fit(c), r = S.r, top = Math.ceil(mph(p.v0) / 100) * 100, pts = r.t.filter((_, i) => i % 5 === 0).map((t, i) => [t, mph(r.v[i * 5])]);
  const R = {x: 44, y: 10, w: w - 56, h: h - 42}, cfg = {xr: [0, xmax(r)], yr: [0, top], xl: 'time since drogue release, s', yl: 'speed, mph', nx: 5, ny: 4, series: [faint(pts), {pts: upTo(pts), color: COL.cyan, width: 2.6}]};
  const {X, Y} = chart(ctx, R, cfg);
  const seg = [[0, r.tMain ?? r.tStop, 'rgba(34,211,238,0.08)'], [r.tMain ?? r.tStop, r.tBrake ?? r.tStop, 'rgba(251,146,60,0.1)'], [r.tBrake ?? r.tStop, r.tStop, 'rgba(248,113,113,0.1)']];
  for (const [a, b, col] of seg) { ctx.fillStyle = col; ctx.fillRect(X(a), Y(top), X(b) - X(a), Y(0) - Y(top)); }
  const i = idx(S.t); dot(ctx, X(r.t[i]), Y(mph(r.v[i])), '#fff', 4.5); label(ctx, `${mph(r.v[i]).toFixed(0)} mph`, X(r.t[i]) + 8, Y(mph(r.v[i])) - 10, '#fff', 'left', 10, '600');
  label(ctx, 'drogue', X(0.3), Y(30), COL.cyan, 'left', 9); if (r.tMain) label(ctx, 'primary', X(r.tMain + 0.3), Y(30), COL.orange, 'left', 9); if (r.tBrake) label(ctx, 'brakes', X(r.tBrake + 0.3), Y(30), COL.red, 'left', 9);
}
function drawG(c) {
  const {ctx, w, h} = fit(c), r = S.r, pts = r.t.filter((_, i) => i % 5 === 0).map((t, i) => [t, r.g[i * 5]]), top = Math.max(4, Math.ceil(r.peakG + 0.5));
  const cfg = {xr: [0, xmax(r)], yr: [0, top], xl: 'time, s', yl: 'deceleration, g', nx: 5, ny: top, series: [faint(pts), {pts: upTo(pts), color: COL.amber, width: 2.6}]};
  const {X, Y} = chart(ctx, {x: 44, y: 10, w: w - 56, h: h - 42}, cfg);
  ctx.setLineDash([5, 4]); ctx.strokeStyle = COL.red; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.moveTo(X(0), Y(3.5)); ctx.lineTo(X(cfg.xr[1]), Y(3.5)); ctx.stroke(); ctx.setLineDash([]);
  label(ctx, 'limit 3.5 g', X(cfg.xr[1]) - 4, Y(3.5) - 8, COL.red, 'right', 9.5);
  const i = idx(S.t); dot(ctx, X(r.t[i]), Y(r.g[i]), '#fff', 4.5); const pk = r.g.indexOf(r.peakG); dot(ctx, X(r.t[pk]), Y(r.peakG), COL.red, 4); label(ctx, `peak ${r.peakG.toFixed(2)} g`, X(r.t[pk]) + 8, Y(r.peakG) - 8, COL.red, 'left', 9.5, '600');
}
function drawDist(c) {
  const {ctx, w, h} = fit(c), r = S.r, pts = r.t.filter((_, i) => i % 5 === 0).map((t, i) => [t, r.x[i * 5] / P.FT]), top = Math.ceil(Math.max(r.dist / P.FT, REPORT.dist) / 1000) * 1000;
  const cfg = {xr: [0, xmax(r)], yr: [0, top], xl: 'time, s', yl: 'distance, ft', nx: 5, ny: 4, series: [faint(pts), {pts: upTo(pts), color: COL.green, width: 2.6}]};
  const {X, Y} = chart(ctx, {x: 54, y: 10, w: w - 66, h: h - 42}, cfg);
  ctx.setLineDash([4, 4]); ctx.strokeStyle = 'rgba(255,255,255,0.5)'; ctx.beginPath(); ctx.moveTo(X(0), Y(REPORT.dist)); ctx.lineTo(X(cfg.xr[1]), Y(REPORT.dist)); ctx.stroke(); ctx.setLineDash([]);
  label(ctx, `reported ${REPORT.dist} ft`, X(0.3), Y(REPORT.dist) - 8, 'rgba(255,255,255,0.7)', 'left', 9.5); const i = idx(S.t); dot(ctx, X(r.t[i]), Y(r.x[i] / P.FT), '#fff', 4.5);
}
function drawForce(c) {
  const {ctx, w, h} = fit(c), r = S.r, pts = r.t.filter((_, i) => i % 5 === 0).map((t, i) => [t, r.f[i * 5] / 1000]), top = Math.ceil(Math.max(...r.f) / 1000 / 20) * 20;
  const {X, Y} = chart(ctx, {x: 54, y: 10, w: w - 66, h: h - 42}, {xr: [0, xmax(r)], yr: [0, top], xl: 'time, s', yl: 'retarding force, kN', nx: 5, ny: 4, series: [faint(pts), {pts: upTo(pts), color: COL.pink, width: 2.6}]});
  const i = idx(S.t); dot(ctx, X(r.t[i]), Y(r.f[i] / 1000), '#fff', 4.5);
  [['reef 40 %', r.tMain], ['reef 70 %', r.tMain && r.tMain + p.t1], ['full', r.tMain && r.tMain + p.t1 + p.t2]].forEach(([t, x], k) => { if (x && x < r.tStop) { vline(ctx, X, x, Y(0), Y(top)); label(ctx, t, X(x) + 4, Y(top) + 10 + k * 11, COL.muted, 'left', 9); } });
}
const gr = graphs({speed: drawSpeed, g: drawG, dist: drawDist, force: drawForce});

/* the cover has no drawing of its own: the video is the picture, and the telemetry is the only thing laid over it */
let lastNow = 0;
function tick(now) { const dt = (now - (lastNow || now)) / 1000; lastNow = now; return Math.min(dt, 0.05); }

/* --------------------------------------------------------------------------------------------- readouts ---- */
function readouts() {
  const r = S.r, i = idx(S.t), set = (id, v) => { const e = $(id); if (e) e.textContent = v; }, ok = (id, good) => { const e = $(id); if (e) { e.classList.toggle('good', good); e.classList.toggle('bad', !good); } };
  set('x-time', `${r.tStop.toFixed(1)} s`); set('x-dist', `${(r.dist / P.FT).toFixed(0)} ft`); set('x-peak', `${r.peakG.toFixed(2)} g`); set('x-sust', `${r.sustG.toFixed(2)} g`);
  set('x-tm', `${r.tMain ? r.tMain.toFixed(1) : '-'} s`); set('x-tb', `${r.tBrake ? r.tBrake.toFixed(1) : '-'} s`); ok('x-peak', r.peakG < 3.5); ok('x-time', r.tStop <= 30);
  set('c-time', `${r.tStop.toFixed(1)} s`); set('c-dist', `${(r.dist / P.FT).toFixed(0)} ft`); set('c-peak', `${r.peakG.toFixed(2)} g`); set('c-sust', `${r.sustG.toFixed(2)} g`);
  set('t-mph', mph(r.v[i]).toFixed(0)); set('t-g', r.g[i].toFixed(2)); set('t-ft', (r.x[i] / P.FT).toFixed(0)); set('t-s', S.t.toFixed(1));
  set('hud-u', r.stage[i] === 1 ? 'stage 1 \u00b7 8 ft drogue' : r.stage[i] === 2 ? 'stage 2 \u00b7 18 ft primary, reefed then full' : S.t >= r.tStop - 0.01 ? 'stopped' : 'stage 3 \u00b7 mechanical brakes');
}
/* ---------------------------------------------------------------------------------------------------- loop ---- */
let gTick = 0, vis = true; document.addEventListener('visibilitychange', () => { vis = !document.hidden; });
// the stop plays by itself: it runs from the drogue release to standstill, holds for a moment, then starts again
function frame(now) {
  requestAnimationFrame(frame); if (!vis) return;
  const dt = tick(now);
  if (S.run) {
    S.t = Math.min(S.r.tStop, S.t + dt * S.speed);
    gTick += dt; if (gTick > 0.05) { gTick = 0; readouts(); gr.draw(); }
    if (S.t >= S.r.tStop) { S.run = false; S.hold = 4; readouts(); gr.draw(); }
  } else if (S.hold > 0) { S.hold -= dt; if (S.hold <= 0) { S.t = 0; S.run = true; } }
}
solve(); readouts(); gr.draw(); requestAnimationFrame(frame); initJet(document.getElementById('jet'));
window.__CH = {p, P, S, gr};
