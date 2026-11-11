// The Aeroelasticity page: the flight-test graphs plot during a dive, point by point, towards the flutter speed.
import {chart, label, dot, vline, COL, fit} from '../chart.js';
import {graphs} from '../stageui.js';
import * as A from './physics.js';

const $ = (id) => document.getElementById(id);
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const p = {...A.DEFAULTS};
const S = {V: 0, run: false, speed: 1, sw: null, alt: 11000, pts: [], x: [0.02, 0.01, 0, 0], amp: 1, tk: 0, kick: 0, clock: 0, step: null, fit: null};
const VMAX = 400, STEP = 10;
const hash = (i) => { const v = Math.sin(i * 127.1 + 311.7) * 43758.5453; return (v - Math.floor(v)) * 2 - 1; };
const q = (V) => 0.5 * p.rho * V * V;

function solve() {
  S.sw = A.sweep(p, 2); S.step = A.stepper(p);
  S.pts = [];                                   // the "measured" flight-test points at each test speed, with scatter that a real test would have
  for (let V = 40, i = 0; V <= VMAX; V += STEP, i++) { const m = A.modes(p, V); if (m.osc.length < 2) break; S.pts.push({V, f1: m.osc[0].f * (1 + 0.012 * hash(i)), f2: m.osc[1].f * (1 + 0.012 * hash(i + 99)), z1: m.osc[0].zeta + 0.006 * hash(i + 7), z2: m.osc[1].zeta + 0.006 * hash(i + 55)}); }
}
function extrapolate() {                          // straight-line fit to the last six damping points of the pitch-like branch
  const done = S.pts.filter((o) => o.V <= S.V), use = done.slice(-6);
  if (use.length < 5 || S.V < 120) return null;
  const n = use.length, sx = use.reduce((s, o) => s + o.V, 0), sy = use.reduce((s, o) => s + o.z2, 0), sxx = use.reduce((s, o) => s + o.V * o.V, 0), sxy = use.reduce((s, o) => s + o.V * o.z2, 0);
  const sl = (n * sxy - sx * sy) / (n * sxx - sx * sx), ic = (sy - sl * sx) / n;
  return sl < -1e-5 ? {sl, ic, Vf: -ic / sl} : null;
}
const clampz = (z) => Math.max(-0.2, Math.min(0.5, z)) * 100;

/* ------------------------------------------------------------------------------------------------ graphs ---- */
const vtop = () => Math.min(VMAX, Math.max(300, Math.ceil(Math.max(p.Vd * 1.3, S.sw.Vf ? S.sw.Vf * 1.1 : 0) / 50) * 50));
function drawDamp(c) {
  const {ctx, w, h} = fit(c), sw = S.sw, top = vtop(), done = S.pts.filter((o) => o.V <= S.V), R = {x: 44, y: 12, w: w - 58, h: h - 44};
  const ser = [];
  const ok = (arr) => sw.V.map((v, i) => [v, clampz(arr[i])]).filter((pt, i) => pt[0] <= top && Number.isFinite(arr[i]));
  ser.push({pts: ok(sw.z1), color: '#60a5fa', width: 2.4}, {pts: ok(sw.z2), color: '#fb923c', width: 2.4});
  const {X, Y} = chart(ctx, R, {xr: [0, top], yr: [-20, 50], xl: 'airspeed V, m/s', yl: 'damping ratio, %', nx: 6, ny: 5, series: ser});
  ctx.strokeStyle = 'rgba(255,255,255,0.6)'; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.moveTo(X(0), Y(0)); ctx.lineTo(X(top), Y(0)); ctx.stroke();
  vline(ctx, X, p.Vd, Y(50), Y(-20), 'rgba(251,191,36,0.6)'); label(ctx, 'V_D', X(p.Vd) - 3, Y(46), COL.amber, 'right', 9.5); vline(ctx, X, 1.15 * p.Vd, Y(50), Y(-20), 'rgba(248,113,113,0.6)'); label(ctx, '1.15 V_D', X(1.15 * p.Vd) + 3, Y(46), COL.red, 'left', 9.5);
  if (sw.Vf && sw.Vf <= top) { vline(ctx, X, sw.Vf, Y(50), Y(-20), 'rgba(255,255,255,0.25)'); label(ctx, 'flutter', X(sw.Vf) + 3, Y(-15), 'rgba(255,255,255,0.6)', 'left', 9); }
  for (const o of done) { dot(ctx, X(o.V), Y(clampz(o.z1)), COL.blue, 3); dot(ctx, X(o.V), Y(clampz(o.z2)), COL.orange, 3.2); }
  const ex = S.fit = extrapolate();
  if (ex) { ctx.strokeStyle = COL.amber; ctx.lineWidth = 2.4; ctx.beginPath(); const v0 = Math.max(60, S.V - 60), v1 = Math.min(top, ex.Vf * 1.05); ctx.moveTo(X(v0), Y(clampz(ex.ic + ex.sl * v0))); ctx.lineTo(X(v1), Y(clampz(ex.ic + ex.sl * v1))); ctx.stroke(); ctx.setLineDash([]); if (ex.Vf < top) { dot(ctx, X(ex.Vf), Y(0), COL.amber, 5); label(ctx, `predicted ${ex.Vf.toFixed(0)} m/s`, X(ex.Vf) > R.x + R.w - 70 ? X(ex.Vf) + 4 : X(ex.Vf), Y(0) - 14, COL.amber, X(ex.Vf) > R.x + R.w - 70 ? 'right' : 'center', 10, '600'); } }
  label(ctx, 'plunge-like', X(top * 0.55), Y(clampz(0.34)), COL.blue, 'left', 9.5); label(ctx, 'pitch-like', X(top * 0.05), Y(clampz(0.07)) - 2, COL.orange, 'left', 9.5);
  dot(ctx, X(Math.min(S.V, top)), Y(-20) - 6, '#fff', 4);
}
function drawFreq(c) {
  const {ctx, w, h} = fit(c), sw = S.sw, top = vtop(), done = S.pts.filter((o) => o.V <= S.V), R = {x: 44, y: 12, w: w - 58, h: h - 44};
  const ok = (arr) => sw.V.map((v, i) => [v, arr[i]]).filter((pt, i) => pt[0] <= top && Number.isFinite(arr[i]));
  const {X, Y} = chart(ctx, R, {xr: [0, top], yr: [0, 12], xl: 'airspeed V, m/s', yl: 'frequency, Hz', nx: 6, ny: 4, series: [{pts: ok(sw.f1), color: '#60a5fa', width: 2.4}, {pts: ok(sw.f2), color: '#fb923c', width: 2.4}]});
  vline(ctx, X, p.Vd, Y(12), Y(0), 'rgba(251,191,36,0.6)'); vline(ctx, X, 1.15 * p.Vd, Y(12), Y(0), 'rgba(248,113,113,0.6)');
  for (const o of done) { dot(ctx, X(o.V), Y(o.f1), COL.blue, 3); dot(ctx, X(o.V), Y(o.f2), COL.orange, 3.2); }
  label(ctx, 'the two modes move together as speed rises', X(top * 0.04), Y(11.2), COL.muted, 'left', 9.5);
  dot(ctx, X(Math.min(S.V, top)), Y(0) - 6, '#fff', 4);
}
function drawDiv(c) {
  const {ctx, w, h} = fit(c), sw = S.sw, Vdv = sw.Vdiv0, top = Math.ceil(Vdv * 1.15 / 50) * 50, b = p.c / 2, Ia = p.m * p.ra2 * b * b, Ka = Ia * (2 * Math.PI * p.fa) ** 2;
  const pts = []; for (let v = 0; v <= top; v += 5) pts.push([v, (Ka - q(v) * p.c * p.c * p.e * p.CLa) / Ka * 100]);
  const {X, Y} = chart(ctx, {x: 50, y: 12, w: w - 64, h: h - 44}, {xr: [0, top], yr: [-30, 100], xl: 'airspeed V, m/s', yl: 'effective torsional stiffness, %', nx: 6, ny: 4, series: [{pts, color: COL.pink, width: 2.6}]});
  ctx.strokeStyle = 'rgba(255,255,255,0.5)'; ctx.setLineDash([4, 4]); ctx.beginPath(); ctx.moveTo(X(0), Y(0)); ctx.lineTo(X(top), Y(0)); ctx.stroke(); ctx.setLineDash([]);
  dot(ctx, X(Vdv), Y(0), '#fff', 5); label(ctx, `divergence ${Vdv.toFixed(0)} m/s`, X(Vdv) - 8, Y(0) - 14, '#fff', 'right', 10, '600');
  const cur = (Ka - q(S.V) * p.c * p.c * p.e * p.CLa) / Ka * 100; dot(ctx, X(Math.min(S.V, top)), Y(cur), COL.amber, 4.5);
  label(ctx, 'K_eff = K_α − q c² e C_Lα', X(top * 0.03), Y(-22), COL.muted, 'left', 9.5);
}
const gr = graphs({damp: drawDamp, freq: drawFreq, div: drawDiv});

/* ------------------------------------------------------------------------------------------------ scene ---- */
const cv = $('gl'); let lastNow = 0;
function section(ctx, x0, y0, w, h, x, amp, V) {
  ctx.fillStyle = 'rgba(6,8,24,0.72)'; ctx.strokeStyle = 'rgba(251,146,60,0.45)'; ctx.lineWidth = 1; ctx.beginPath(); ctx.roundRect(x0, y0, w, h, 12); ctx.fill(); ctx.stroke();
  label(ctx, 'WING SECTION, SLOW MOTION', x0 + 12, y0 + 14, COL.orange, 'left', 9);
  const cx = x0 + w * 0.5, cy = y0 + h * 0.58, c = 76, hh = Math.max(-34, Math.min(34, x[0] * amp * 1300)), aa = Math.max(-0.5, Math.min(0.5, x[1] * amp * 14));
  ctx.strokeStyle = 'rgba(255,255,255,0.18)'; ctx.setLineDash([3, 4]); ctx.beginPath(); ctx.moveTo(x0 + 10, cy); ctx.lineTo(x0 + w - 10, cy); ctx.stroke(); ctx.setLineDash([]);
  ctx.save(); ctx.translate(cx, cy + hh); ctx.rotate(-aa);
  const ea = -c * 0.11;
  const xs = -c / 2 - ea, xe = c / 2 - ea; ctx.fillStyle = 'rgba(207,212,232,0.95)'; ctx.beginPath(); ctx.moveTo(xe, 0);
  ctx.bezierCurveTo(xe - c * 0.3, -15, xs + c * 0.14, -19, xs + c * 0.03, -8); ctx.bezierCurveTo(xs - c * 0.03, -4, xs - c * 0.02, 2, xs + c * 0.05, 5); ctx.bezierCurveTo(xs + c * 0.3, -2, xe - c * 0.3, -3, xe, 0); ctx.fill();   // rounded nose, concave (cambered) lower surface
  dot(ctx, 0, 0, '#fff', 3.5); dot(ctx, -ea + c * 0.1, 0, COL.red, 3);
  ctx.restore();
  label(ctx, '○ elastic axis   ● centre of gravity', x0 + 12, y0 + h - 12, COL.muted, 'left', 8.5);
}
function scene(now) {
  const {ctx, w, h} = fit(cv), dt = Math.min(0.05, (now - (lastNow || now)) / 1000); lastNow = now;
  // the stage background is a photograph set in the page CSS; the canvas stays transparent
  // no aircraft here: the stage is the live telemetry and the wing section, shaking in slow motion, between the two flight-test graphs
  const px = w * 0.5, py = h * 0.5, ps = Math.max(0.8, Math.min(1.35, w / 1000));
  // the section inset follows the same linear model at the same speed, kicked now and then like a gust
  S.clock += dt; S.kick -= dt;
  if (S.kick <= 0) { S.kick = 1.1; S.x[1] += 0.012 * (1 + hash(S.clock)); S.x[0] += 0.0004 * hash(S.clock + 3); }
  const sub = 8, ts = dt * 0.4 / sub; for (let k = 0; k < sub; k++) S.x = S.step(S.x, Math.max(30, S.V), ts);
  const mag = Math.hypot(S.x[0] * 1300, S.x[1] * 14); if (mag > 42) { S.x = S.x.map((v) => v * 42 / mag); } if (!Number.isFinite(mag)) S.x = [0.01, 0.005, 0, 0];
  S.amp = 1;
  const m = A.modes(p, S.V), minZ = Math.min(...m.osc.map((o) => o.zeta), 1);
  ctx.save(); ctx.translate(px, py - 10); ctx.scale(ps, ps); section(ctx, -150, -63, 300, 126, S.x, S.amp, S.V);
  const stat = m.real.some((v) => v > 0) ? 'DIVERGING' : minZ < 0 ? 'FLUTTER: growing' : minZ < 0.02 ? 'weakly damped' : 'damped';
  label(ctx, stat, 138, -63 + 14, minZ < 0 || m.real.some((v) => v > 0) ? COL.red : minZ < 0.02 ? COL.amber : COL.green, 'right', 9.5, '600');
  ctx.restore();
  label(ctx, `${S.V.toFixed(0)} m/s  ·  q = ${(q(S.V) / 1000).toFixed(1)} kPa  ·  ${(S.alt).toFixed(0)} m`, px, py + 63 * ps + 34, '#fff', 'center', 11, '600');
  return dt;
}

/* --------------------------------------------------------------------------------------------- readouts ---- */
function readouts() {
  const sw = S.sw, set = (id, v) => { const e = $(id); if (e) e.textContent = v; }, need = 1.15 * p.Vd, pass = sw.Vf === null || sw.Vf >= need, ex = S.fit;
  set('x-vf', sw.Vf ? `${sw.Vf} m/s` : '> 460 m/s'); set('x-need', `${need.toFixed(0)} m/s`); set('x-div', `${sw.Vdiv0.toFixed(0)} m/s`); set('x-pred', ex ? `${ex.Vf.toFixed(0)} m/s` : 'not enough points yet');
  set('x-marg', sw.Vf ? `${((sw.Vf / p.Vd - 1) * 100).toFixed(0)} %` : 'large'); set('x-ver', pass ? 'PASS' : 'FAIL');
  const v = $('x-ver'); if (v) { v.classList.toggle('good', pass); v.classList.toggle('bad', !pass); }
  $('hud').textContent = `V = ${S.V.toFixed(0)} m/s  ·  flutter at ${sw.Vf ? sw.Vf + ' m/s' : 'beyond range'}  ·  dive limit ${p.Vd} m/s  ·  required ${need.toFixed(0)} m/s`;
  $('hud-u').textContent = S.V < 1 ? 'ready' : sw.Vf && S.V >= sw.Vf ? 'past the flutter speed: the wing section is fluttering' : S.V >= p.Vd ? 'past the dive limit' : 'diving';
  if ($('s-v')) { $('s-v').value = S.V; $('s-v-v').textContent = `${S.V.toFixed(0)} m/s`; }
}
function changed() { solve(); readouts(); gr.draw(); }
// no toggles: the dive runs by itself, holds at the limit for a moment, then starts again
cv.setAttribute('aria-label', 'A wing section oscillates in slow motion with live airspeed, dynamic pressure and altitude readouts, while the flight-test graphs plot damping and frequency against speed.');

/* ---------------------------------------------------------------------------------------------------- loop ---- */
let gt = 0, vis = true; document.addEventListener('visibilitychange', () => { vis = !document.hidden; });
// the dive goes from rest, past the dive limit, on to just beyond the flutter speed so the wing is seen to flutter, in about six seconds
const diveEnd = () => Math.min(400, S.sw.Vf ? S.sw.Vf * 1.2 : p.Vd * 1.3);
function frame(now) {
  requestAnimationFrame(frame); if (!vis) return;
  const dt = scene(now);
  if (!S.run && S.hold > 0) { S.hold -= dt; if (S.hold <= 0) { S.V = 0; S.alt = 11000; S.x = [0.02, 0.01, 0, 0]; S.run = true; readouts(); gr.draw(); } }
  if (S.run) {
    const vEnd = diveEnd(); S.V = Math.min(vEnd, S.V + dt * vEnd / 6 * S.speed); S.alt -= dt * S.V * 0.2 * (0.1 + 0.4 * Math.min(1, S.V / p.Vd)) * 3;
    if (S.V >= vEnd) { S.run = false; S.hold = 4; }
    gt += dt; if (gt > 0.08 || !S.run) { gt = 0; readouts(); gr.draw(); }
  }
}
S.run = true; S.hold = 0; solve(); readouts(); gr.draw(); requestAnimationFrame(frame);
window.__AE = {p, A, S, gr};
