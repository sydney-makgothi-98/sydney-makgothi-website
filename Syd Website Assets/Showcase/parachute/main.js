// The Parachute page: the Shockwave jet truck stops under three stages, and every number on screen comes from one ODE.
import {chart, label, dot, vline, COL, fit} from '../chart.js';
import {graphs} from '../stageui.js';
import * as P from './physics.js';

const $ = (id) => document.getElementById(id);
const p = {...P.DEFAULTS}, S = {t: 0, run: false, speed: 1, r: null, reef: true};
const REPORT = {time: 24.7, g: 3.2, sust: 2.1, dist: 4200};
const mph = (v) => v / P.MPH;
function solve() { const q = {...p}; if (!S.reef) { q.reef1 = 1; q.reef2 = 1; } S.r = P.simulate(q); }
const idx = (t) => Math.min(S.r.t.length - 1, Math.max(0, Math.round(t / 0.01)));
const xmax = (r) => Math.max(10, Math.ceil(r.tStop / 5) * 5);

/* ------------------------------------------------------------------------------------------------ graphs ---- */
function drawSpeed(c) {
  const {ctx, w, h} = fit(c), r = S.r, top = Math.ceil(mph(p.v0) / 100) * 100, pts = r.t.filter((_, i) => i % 5 === 0).map((t, i) => [t, mph(r.v[i * 5])]);
  const R = {x: 44, y: 10, w: w - 56, h: h - 42}, cfg = {xr: [0, xmax(r)], yr: [0, top], xl: 'time since drogue release, s', yl: 'speed, mph', nx: 5, ny: 4, series: [{pts, color: COL.cyan, width: 2.6}]};
  const {X, Y} = chart(ctx, R, cfg);
  const seg = [[0, r.tMain ?? r.tStop, 'rgba(34,211,238,0.08)'], [r.tMain ?? r.tStop, r.tBrake ?? r.tStop, 'rgba(251,146,60,0.1)'], [r.tBrake ?? r.tStop, r.tStop, 'rgba(248,113,113,0.1)']];
  for (const [a, b, col] of seg) { ctx.fillStyle = col; ctx.fillRect(X(a), Y(top), X(b) - X(a), Y(0) - Y(top)); }
  const i = idx(S.t); dot(ctx, X(r.t[i]), Y(mph(r.v[i])), '#fff', 4.5); label(ctx, `${mph(r.v[i]).toFixed(0)} mph`, X(r.t[i]) + 8, Y(mph(r.v[i])) - 10, '#fff', 'left', 10, '600');
  label(ctx, 'drogue', X(0.3), Y(30), COL.cyan, 'left', 9); if (r.tMain) label(ctx, 'primary', X(r.tMain + 0.3), Y(30), COL.orange, 'left', 9); if (r.tBrake) label(ctx, 'brakes', X(r.tBrake + 0.3), Y(30), COL.red, 'left', 9);
}
function drawG(c) {
  const {ctx, w, h} = fit(c), r = S.r, pts = r.t.filter((_, i) => i % 5 === 0).map((t, i) => [t, r.g[i * 5]]), top = Math.max(4, Math.ceil(r.peakG + 0.5));
  const cfg = {xr: [0, xmax(r)], yr: [0, top], xl: 'time, s', yl: 'deceleration, g', nx: 5, ny: top, series: [{pts, color: COL.amber, width: 2.6}]};
  const {X, Y} = chart(ctx, {x: 44, y: 10, w: w - 56, h: h - 42}, cfg);
  ctx.setLineDash([5, 4]); ctx.strokeStyle = COL.red; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.moveTo(X(0), Y(3.5)); ctx.lineTo(X(cfg.xr[1]), Y(3.5)); ctx.stroke(); ctx.setLineDash([]);
  label(ctx, 'limit 3.5 g', X(cfg.xr[1]) - 4, Y(3.5) - 8, COL.red, 'right', 9.5);
  const i = idx(S.t); dot(ctx, X(r.t[i]), Y(r.g[i]), '#fff', 4.5); const pk = r.g.indexOf(r.peakG); dot(ctx, X(r.t[pk]), Y(r.peakG), COL.red, 4); label(ctx, `peak ${r.peakG.toFixed(2)} g`, X(r.t[pk]) + 8, Y(r.peakG) - 8, COL.red, 'left', 9.5, '600');
}
function drawDist(c) {
  const {ctx, w, h} = fit(c), r = S.r, pts = r.t.filter((_, i) => i % 5 === 0).map((t, i) => [t, r.x[i * 5] / P.FT]), top = Math.ceil(Math.max(r.dist / P.FT, REPORT.dist) / 1000) * 1000;
  const cfg = {xr: [0, xmax(r)], yr: [0, top], xl: 'time, s', yl: 'distance, ft', nx: 5, ny: 4, series: [{pts, color: COL.green, width: 2.6}]};
  const {X, Y} = chart(ctx, {x: 54, y: 10, w: w - 66, h: h - 42}, cfg);
  ctx.setLineDash([4, 4]); ctx.strokeStyle = 'rgba(255,255,255,0.5)'; ctx.beginPath(); ctx.moveTo(X(0), Y(REPORT.dist)); ctx.lineTo(X(cfg.xr[1]), Y(REPORT.dist)); ctx.stroke(); ctx.setLineDash([]);
  label(ctx, `reported ${REPORT.dist} ft`, X(0.3), Y(REPORT.dist) - 8, 'rgba(255,255,255,0.7)', 'left', 9.5); const i = idx(S.t); dot(ctx, X(r.t[i]), Y(r.x[i] / P.FT), '#fff', 4.5);
}
function drawForce(c) {
  const {ctx, w, h} = fit(c), r = S.r, pts = r.t.filter((_, i) => i % 5 === 0).map((t, i) => [t, r.f[i * 5] / 1000]), top = Math.ceil(Math.max(...r.f) / 1000 / 20) * 20;
  const {X, Y} = chart(ctx, {x: 54, y: 10, w: w - 66, h: h - 42}, {xr: [0, xmax(r)], yr: [0, top], xl: 'time, s', yl: 'retarding force, kN', nx: 5, ny: 4, series: [{pts, color: COL.pink, width: 2.6}]});
  const i = idx(S.t); dot(ctx, X(r.t[i]), Y(r.f[i] / 1000), '#fff', 4.5);
  [['reef 40 %', r.tMain], ['reef 70 %', r.tMain && r.tMain + p.t1], ['full', r.tMain && r.tMain + p.t1 + p.t2]].forEach(([t, x], k) => { if (x && x < r.tStop) { vline(ctx, X, x, Y(0), Y(top)); label(ctx, t, X(x) + 4, Y(top) + 10 + k * 11, COL.muted, 'left', 9); } });
}
const gr = graphs({speed: drawSpeed, g: drawG, dist: drawDist, force: drawForce});

/* ------------------------------------------------------------------------------------------------ scene ---- */
const cv = $('gl'); let wheel = 0, lastNow = 0;
function canopy(ctx, x, y, d, open, flutter, col) {
  const wd = Math.max(0.5, d) * open, hh = wd * 0.52;
  ctx.fillStyle = col; ctx.strokeStyle = '#fff'; ctx.lineWidth = 1.4; ctx.beginPath(); ctx.moveTo(x - wd / 2, y);
  ctx.bezierCurveTo(x - wd / 2 - 3, y - hh * 1.25 + flutter, x + wd / 2 + 3, y - hh * 1.25 - flutter, x + wd / 2, y); ctx.quadraticCurveTo(x, y + hh * 0.22, x - wd / 2, y); ctx.fill(); ctx.stroke();
  ctx.strokeStyle = 'rgba(255,255,255,0.28)'; ctx.lineWidth = 1; for (let k = 1; k < 4; k++) { ctx.beginPath(); ctx.moveTo(x - wd / 2 + wd * k / 4, y + 1); ctx.lineTo(x - wd / 2 + wd * k / 4, y - hh * (0.9 - Math.abs(k - 2) * 0.22)); ctx.stroke(); }
}
function truck(ctx, x, y, s, spin) {
  ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
  ctx.fillStyle = '#2b3150'; ctx.fillRect(-8, -36, 52, 22);
  ctx.fillStyle = '#c8cbe0'; ctx.fillRect(-6, -33, 48, 5); ctx.fillRect(-6, -25, 48, 3);
  ctx.fillStyle = '#e24a4a'; ctx.beginPath(); ctx.moveTo(44, -36); ctx.lineTo(70, -36); ctx.lineTo(78, -22); ctx.lineTo(78, -14); ctx.lineTo(44, -14); ctx.fill();
  ctx.fillStyle = '#9fd8ff'; ctx.beginPath(); ctx.moveTo(52, -34); ctx.lineTo(68, -34); ctx.lineTo(74, -24); ctx.lineTo(52, -24); ctx.fill();
  ctx.fillStyle = '#1b1f38'; ctx.fillRect(-8, -14, 86, 4);
  for (const wx of [4, 26, 62]) { ctx.save(); ctx.translate(wx, -8); ctx.fillStyle = '#12142a'; ctx.beginPath(); ctx.arc(0, 0, 9, 0, 7); ctx.fill(); ctx.rotate(spin); ctx.strokeStyle = '#8b90b8'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(-6, 0); ctx.lineTo(6, 0); ctx.moveTo(0, -6); ctx.lineTo(0, 6); ctx.stroke(); ctx.restore(); }
  ctx.restore();
}
function scene(now) {
  const {ctx, w, h} = fit(cv), r = S.r, i = idx(S.t), v = r.v[i], x = r.x[i], gy = h * 0.74, ppm = Math.min(w, 1500) / 95;
  const sky = ctx.createLinearGradient(0, 0, 0, gy); sky.addColorStop(0, '#08102a'); sky.addColorStop(1, '#2a4a6e'); ctx.fillStyle = sky; ctx.fillRect(0, 0, w, gy);
  ctx.fillStyle = 'rgba(160,190,220,0.18)'; ctx.beginPath(); ctx.moveTo(0, gy); for (let k = 0; k <= 12; k++) ctx.lineTo(w * k / 12, gy - 20 - 26 * Math.abs(Math.sin(k * 1.7 + 1))); ctx.lineTo(w, gy); ctx.fill();
  const gg = ctx.createLinearGradient(0, gy, 0, h); gg.addColorStop(0, '#d9dfe8'); gg.addColorStop(1, '#8590a8'); ctx.fillStyle = gg; ctx.fillRect(0, gy, w, h - gy);
  const tx = w * 0.74;
  ctx.fillStyle = 'rgba(15,20,50,0.55)'; for (let m = Math.floor((x - tx / ppm) / 25) * 25; m < x + (w - tx) / ppm; m += 25) { const sx = tx + (m - x) * ppm; ctx.fillRect(sx, gy + 6, 2, 10 + (m % 100 === 0 ? 14 : 0)); if (m % 100 === 0) label(ctx, `${(m / P.FT).toFixed(0)} ft`, sx + 4, gy + 38, 'rgba(15,20,50,0.7)', 'left', 9); }
  const ts = ppm * 0.115; truck(ctx, tx, gy + 2, ts, wheel);
  const stg = r.stage[i], hx = tx - 4, hy = gy - 24 * ts;
  const dOpen = Math.min(1, Math.max(0, (S.t - 0.15) / 0.9)), fl = Math.sin(now / 90) * 3 * Math.min(1, v / 60), rising = Math.min(1, S.t / 2.2);
  const dL = 14 * ppm, mL = 24 * ppm, dy = -rising * 26 * ppm * 0.4, my = -rising * 40 * ppm * 0.4, mainOn = r.tMain !== null && S.t >= r.tMain;
  if (!mainOn) { ctx.strokeStyle = 'rgba(255,255,255,0.5)'; ctx.lineWidth = 1; for (const o of [-1, 0, 1]) { ctx.beginPath(); ctx.moveTo(hx, hy); ctx.lineTo(hx - dL, hy + dy + o * 6); ctx.stroke(); } canopy(ctx, hx - dL - 4, hy + dy, p.dDrogue * ppm, dOpen, fl, '#f2c14e'); }
  if (mainOn) {
    const s = S.t - r.tMain, reef = s < p.t1 ? p.reef1 : s < p.t1 + p.t2 ? p.reef2 : 1, a = Math.max(0.12, Math.min(1, s / p.tInfl) * (S.reef ? reef : 1));
    ctx.strokeStyle = 'rgba(255,255,255,0.5)'; ctx.lineWidth = 1; for (const o of [-1, 0, 1]) { ctx.beginPath(); ctx.moveTo(hx, hy); ctx.lineTo(hx - mL, hy + my + o * 9); ctx.stroke(); }
    canopy(ctx, hx - mL - 6, hy + my, p.dMain * ppm * Math.sqrt(a), 1, fl * 1.6, '#fb923c');
    label(ctx, S.reef ? `reefed to ${Math.round(reef * 100)} %` : 'no reefing', hx - mL - 6, hy + my + 18, '#fff', 'center', 10, '600');
  }
  if (stg === 3) label(ctx, 'mechanical brakes on', tx + 30, gy - 56 * ts - 10, COL.red, 'center', 10, '600');
  if (S.t === 0 && !S.run) label(ctx, `press Run: drogue released at ${mph(p.v0).toFixed(0)} mph`, w * 0.55, h * 0.3, '#fff', 'center', 13, '600');
  const dt = (now - (lastNow || now)) / 1000; lastNow = now; return Math.min(dt, 0.05);
}

/* --------------------------------------------------------------------------------------------- readouts ---- */
function readouts() {
  const r = S.r, i = idx(S.t), set = (id, v) => { const e = $(id); if (e) e.textContent = v; }, ok = (id, good) => { const e = $(id); if (e) { e.classList.toggle('good', good); e.classList.toggle('bad', !good); } };
  set('x-time', `${r.tStop.toFixed(1)} s`); set('x-dist', `${(r.dist / P.FT).toFixed(0)} ft`); set('x-peak', `${r.peakG.toFixed(2)} g`); set('x-sust', `${r.sustG.toFixed(2)} g`);
  set('x-tm', `${r.tMain ? r.tMain.toFixed(1) : '-'} s`); set('x-tb', `${r.tBrake ? r.tBrake.toFixed(1) : '-'} s`); ok('x-peak', r.peakG < 3.5); ok('x-time', r.tStop <= 30);
  set('c-time', `${r.tStop.toFixed(1)} s`); set('c-dist', `${(r.dist / P.FT).toFixed(0)} ft`); set('c-peak', `${r.peakG.toFixed(2)} g`); set('c-sust', `${r.sustG.toFixed(2)} g`);
  $('hud').textContent = `${mph(r.v[i]).toFixed(0)} mph  ·  ${r.g[i].toFixed(2)} g  ·  ${(r.x[i] / P.FT).toFixed(0)} ft  ·  t = ${S.t.toFixed(1)} s`;
  $('hud-u').textContent = S.t === 0 && !S.run ? 'ready' : r.stage[i] === 1 ? 'stage 1: 8 ft drogue' : r.stage[i] === 2 ? 'stage 2: 18 ft primary, reefed then full' : 'stage 3: mechanical brakes';
}
function changed() { solve(); if (S.t > S.r.tStop) S.t = S.r.tStop; readouts(); gr.draw(); }
const bind = (id, get, set, f) => { const el = $(id), out = $(id + '-v'); el.value = get(); out.textContent = f(+el.value); el.oninput = () => { set(+el.value); out.textContent = f(+el.value); changed(); }; el._sync = () => { el.value = get(); out.textContent = f(+el.value); }; };
bind('s-dd', () => p.dDrogue / P.FT, (v) => { p.dDrogue = v * P.FT; }, (v) => `${v.toFixed(1)} ft`); bind('s-dm', () => p.dMain / P.FT, (v) => { p.dMain = v * P.FT; }, (v) => `${v.toFixed(0)} ft`);
bind('s-v0', () => mph(p.v0), (v) => { p.v0 = v * P.MPH; }, (v) => `${v.toFixed(0)} mph`); bind('s-br', () => p.brake, (v) => { p.brake = v; }, (v) => `${v.toFixed(2)} g`);
bind('s-rho', () => p.rho, (v) => { p.rho = v; }, (v) => `${v.toFixed(2)} kg/m³`); bind('s-sp', () => S.speed, (v) => { S.speed = v; }, (v) => `${v}×`);
$('b-run').onclick = (e) => { if (S.t >= S.r.tStop - 0.05) S.t = 0; S.run = !S.run; e.target.textContent = S.run ? 'Pause' : S.t > 0 ? 'Resume' : 'Run'; };
$('b-reset').onclick = () => { S.t = 0; S.run = false; $('b-run').textContent = 'Run'; readouts(); gr.draw(); };
$('b-reef').onclick = (e) => { S.reef = !S.reef; e.target.textContent = S.reef ? 'Reefing: on' : 'Reefing: off'; e.target.setAttribute('aria-pressed', S.reef); changed(); };
$('b-def').onclick = () => { Object.assign(p, P.DEFAULTS); S.speed = 1; S.reef = true; $('b-reef').textContent = 'Reefing: on'; for (const id of ['s-dd', 's-dm', 's-v0', 's-br', 's-rho', 's-sp']) $(id)._sync(); changed(); };
cv.setAttribute('aria-label', 'Side view of the Shockwave jet truck braking: a drogue parachute, then a reefed primary parachute, then mechanical brakes.');
cv.addEventListener('click', () => $('b-run').click()); cv.style.cursor = 'pointer';

/* ---------------------------------------------------------------------------------------------------- loop ---- */
let gTick = 0, vis = true; document.addEventListener('visibilitychange', () => { vis = !document.hidden; });
function frame(now) {
  requestAnimationFrame(frame); if (!vis) return;
  const dt = scene(now);
  if (S.run) {
    S.t = Math.min(S.r.tStop, S.t + dt * S.speed); wheel += S.r.v[idx(S.t)] * dt * 0.12;
    if (S.t >= S.r.tStop) { S.run = false; $('b-run').textContent = 'Replay'; }
    gTick += dt; if (gTick > 0.07 || !S.run) { gTick = 0; gr.draw(); readouts(); }
  }
}
solve(); readouts(); gr.draw(); requestAnimationFrame(frame);
window.__CH = {p, P, S, gr};
