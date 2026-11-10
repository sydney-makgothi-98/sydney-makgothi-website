// Every graph on the page. Each draws onto a canvas from the live sim (S.sim) and the current loop (S.loop). No boxes or backgrounds:
// graphs are drawn straight onto the page so they melt into the scene. Each returns a one-line caption for the full-screen view.
import * as M from './model.js';
import * as C from './charts.js';

const COL = {...C.COL, cyan: '#38bdf8', roll: '#60a5fa', pitch: '#e879f9', yaw: '#fbbf24', z: '#34d399', rep: '#f472b6', der: '#fbbf24'};
const TYPECOL = {P: '#9aa0c3', I: '#f87171', PI: '#fb923c', PD: '#34d399', PID: '#38bdf8'};
const D2R = 180 / Math.PI;
const last = (a) => a[a.length - 1] ?? 0;
const LCOL = {z: COL.z, roll: COL.roll, pitch: COL.pitch, yaw: COL.yaw};

function setup(canvas, big, o = {}) {
  const {ctx, w, h} = C.fit(canvas);
  const px = big ? 1 : 0.8;
  return {ctx, w, h, r: {x: (o.l ?? (big ? 52 : 34)), y: (o.t ?? 8), w: w - (o.l ?? (big ? 52 : 34)) - (o.rr ?? 12), h: h - (o.t ?? 8) - (o.b ?? (big ? 36 : 22))}, px};
}

/* ------------------------------------------------------------------------------------ static analysis cache ---- */
export function analysis(S) {
  const key = [S.sim.ctrl, S.sim.gains, S.loop].join('|');
  if (S._key === key) return S._an;
  const gs = S.sim.gs, g = gs[S.loop], Jl = M.J[S.loop], type = S.sim.ctrl;
  const an = {g, Jl, type, bode: M.bode(type, g, Jl), plant: M.bode('P', {kp: 1, ki: 0, kd: 0}, Jl), nyq: M.nyquist(type, g, Jl), shoot: {}, poles: M.roots(M.charPoly(type, g, Jl))};
  an.margins = M.margins(an.bode);
  const pidg = S.sim.ctrl === 'PID' ? g : (S.sim.gains === 'derived' ? M.DERIVED[S.loop] : M.PID_REPORT[S.loop]);
  const set = {P: {kp: M.PD[S.loop].kp, ki: 0, kd: 0}, I: {kp: 0, ki: pidg.ki, kd: 0}, PI: {kp: pidg.kp, ki: pidg.ki, kd: 0}, PD: M.PD[S.loop], PID: pidg};
  an.sets = set;
  for (const t of Object.keys(set)) { an.shoot[t] = M.stepResponse(t, set[t], Jl, 8); an.shoot[t].poles = M.roots(M.charPoly(t, set[t], Jl)); an.shoot[t].ok = M.routhOK(t, set[t], Jl); }
  // the root locus: gains' ratios fix the zeros, the overall gain K sweeps
  const gg = type === 'PD' ? M.PD[S.loop] : g, Kd = M.DERIVED[S.loop].kd;
  an.locus = []; const ab = gg.kp / gg.kd, aab = gg.ki / gg.kd, kmax = Math.max(Kd, gg.kd) * 2.2;
  for (let i = 0; i <= 220; i++) { const K = kmax * i / 220; an.locus.push({K, r: M.roots(type === 'PD' ? [Jl, K, K * ab] : [Jl, K, K * ab, K * aab])}); }
  an.kmax = kmax; an.ratio = {ab, aab};
  S._key = key; S._an = an; return an;
}

/* ------------------------------------------------------------------------------------------- simulink ---------- */
function simulink(canvas, S, big, now) {
  const {ctx, w, h} = C.fit(canvas), sim = S.sim, t = now / 1000, an = S._an;
  const X = (v) => v * w, Y = (v) => v * h, fs = Math.max(8, Math.min(12, w / 38));
  const rows = [['z', 'z ref', 0.17, sim.z, M.ZREF], ['roll', 'roll ref', 0.40, sim.phi, 0], ['pitch', 'pitch ref', 0.63, sim.th, 0], ['yaw', 'yaw ref', 0.86, sim.psi, 0]];
  ctx.lineWidth = 1.2; ctx.font = `${fs}px ${C.MONO}`; ctx.textBaseline = 'middle';
  const line = (pts, col, live) => {
    ctx.strokeStyle = col; ctx.beginPath(); pts.forEach(([x, y], i) => (i ? ctx.lineTo(X(x), Y(y)) : ctx.moveTo(X(x), Y(y)))); ctx.stroke();
    if (live) { let L = 0; const seg = []; for (let i = 1; i < pts.length; i++) { const d = Math.hypot((pts[i][0] - pts[i - 1][0]) * w, (pts[i][1] - pts[i - 1][1]) * h); seg.push(d); L += d; }
      for (let k = 0; k < 2; k++) { let s = ((t * 40 + k * L / 2) % L), i = 0; while (i < seg.length && s > seg[i]) { s -= seg[i]; i++; } if (i >= seg.length) continue; const f = s / seg[i]; const px = X(pts[i][0] + (pts[i + 1][0] - pts[i][0]) * f), py = Y(pts[i][1] + (pts[i + 1][1] - pts[i][1]) * f); ctx.fillStyle = col; ctx.beginPath(); ctx.arc(px, py, 2, 0, 7); ctx.fill(); } }
  };
  const box = (x, y, bw, bh, label, col, sub) => { ctx.strokeStyle = col; ctx.fillStyle = 'rgba(8,12,30,0.35)'; ctx.beginPath(); ctx.roundRect(X(x), Y(y), X(bw), Y(bh), 3); ctx.fill(); ctx.stroke(); C.label(ctx, label, X(x + bw / 2), Y(y + bh / 2) - (sub ? fs * 0.45 : 0), col, 'center', fs); if (sub) C.label(ctx, sub, X(x + bw / 2), Y(y + bh / 2) + fs * 0.7, COL.muted, 'center', fs * 0.8); };
  const sum = (x, y, col) => { ctx.strokeStyle = col; ctx.beginPath(); ctx.arc(X(x), Y(y), fs * 0.55, 0, 7); ctx.stroke(); C.label(ctx, '+', X(x) - fs * 0.9, Y(y) - fs * 0.5, col, 'center', fs * 0.8); C.label(ctx, '−', X(x) - 1, Y(y) + fs * 1.2, col, 'center', fs * 0.9); };
  // the shared plant on the right
  for (const [loop, ref, y, val, rv] of rows) {
    const col = LCOL[loop], sel = S.loop === loop, a = sel ? 1 : 0.5, c = col + (sel ? '' : '88');
    ctx.globalAlpha = a;
    C.label(ctx, ref, X(0.01), Y(y) - fs * 0.95, COL.muted, 'left', fs * 0.85);
    C.label(ctx, loop === 'z' ? M.ZREF.toFixed(0) + ' m' : '0°', X(0.01), Y(y), c, 'left', fs);
    line([[0.10, y], [0.17, y]], c, true); sum(0.17, y, c);
    line([[0.185, y], [0.215, y]], c, true);
    // the PID block: three parallel paths
    const T = sim.terms[loop];
    ctx.fillStyle = 'rgba(7,10,30,0.9)'; ctx.strokeStyle = c; ctx.beginPath(); ctx.roundRect(X(0.215), Y(y - 0.085), X(0.245), Y(0.17), 3); ctx.fill(); ctx.stroke();
    const tcols = [COL.pink, COL.amber, COL.green];
    [['Kp', T.p, 0], ['Ki/s', T.i, 1], ['Kd s', T.d, 2]].forEach(([nm, v, i]) => { const yy = y - 0.055 + i * 0.055; C.label(ctx, nm, X(0.225), Y(yy), COL.muted, 'left', fs * 0.78); const bwid = Math.min(0.1, Math.abs(v) / Math.max(1e-9, Math.abs(T.u) * 2 + Math.abs(v) + 1e-9) * 0.12); ctx.fillStyle = tcols[i]; ctx.globalAlpha = a * 0.8; ctx.fillRect(X(0.33), Y(yy) - 2, X(bwid) * (v < 0 ? -1 : 1), 4); ctx.globalAlpha = a; });
    C.label(ctx, 'PID', X(0.46), Y(y - 0.07), c, 'right', fs * 0.8);
    line([[0.46, y], [loop === 'z' ? 0.50 : 0.64, y]], c, true);
    if (loop === 'z') { sum(0.53, y, c); line([[0.53, y - 0.1], [0.53, y - 0.025]], COL.muted, false); C.label(ctx, 'm·g', X(0.53), Y(y - 0.11), COL.muted, 'center', fs * 0.85); line([[0.545, y], [0.64, y]], c, true); }
    C.label(ctx, ['U1', 'U2', 'U3', 'U4'][LOOP_I[loop]], X(0.60), Y(y) - fs * 0.9, c, 'center', fs * 0.9);
    // the output leaves the plant, goes to the scope and back round to the summing junction
    line([[0.81, y], [0.85, y], [0.85, y + 0.1], [0.07, y + 0.1], [0.07, y + 0.0], [0.10, y]], c, true);
    C.label(ctx, `${loop === 'z' ? val.toFixed(2) + ' m' : (val * D2R).toFixed(1) + '°'}`, X(0.83), Y(y) - fs * 0.9, c, 'center', fs * 0.9);
    line([[0.85, y], [0.88, y], [0.88, 0.51], [0.90, 0.51]], COL.faint, false);
    ctx.globalAlpha = 1;
  }
  // the plant and the scope sit on top of the wires, with a solid fill, so no wire seems to run through them
  const solid = (x, y, bw, bh, col) => { ctx.fillStyle = 'rgba(7,10,30,0.96)'; ctx.strokeStyle = col; ctx.beginPath(); ctx.roundRect(X(x), Y(y), X(bw), Y(bh), 3); ctx.fill(); ctx.stroke(); };
  solid(0.64, 0.05, 0.17, 0.92, COL.muted); C.label(ctx, 'QUADROTOR', X(0.725), Y(0.115), COL.muted, 'center', fs); C.label(ctx, 'eq. 2.1', X(0.725), Y(0.155), COL.faint, 'center', fs * 0.8);
  solid(0.90, 0.40, 0.09, 0.22, COL.faint); C.label(ctx, 'scope', X(0.945), Y(0.51), COL.faint, 'center', fs);
  C.label(ctx, `${sim.ctrl} · ${sim.mode.toUpperCase()}`, X(0.93), Y(0.985), COL.muted, 'right', fs * 0.85);
  return 'Redrawn from Figures 25 and 26 of the report. Four PID loops (altitude, roll, pitch, yaw) feed the nonlinear quadrotor; its outputs return to the summing junctions. Coloured bars inside each PID show the live P, I and D terms. The original Simulink file is not available, so this is a redraw.';
}
const LOOP_I = {z: 0, roll: 1, pitch: 2, yaw: 3};

/* ------------------------------------------------------------------------------------------- root locus ------- */
function locus(canvas, S, big) {
  const {ctx, r} = setup(canvas, big, {l: big ? 52 : 30}), an = analysis(S);
  const re0 = -10, re1 = 3, im0 = -7, im1 = 7, pts = an.locus;
  const {X, Y} = C.chart(ctx, r, {xr: [re0, re1], yr: [im0, im1], nx: big ? 8 : 4, ny: 4, xl: big ? 'real part (1/s)' : '', yl: big ? 'imaginary part (rad/s)' : '',
    under: [(X, Y) => { ctx.fillStyle = 'rgba(248,113,113,0.045)'; ctx.fillRect(X(0), r.y, r.x + r.w - X(0), r.h); }]});
  // the branches
  for (let i = 0; i < pts.length; i++) for (const z of pts[i].r) { const f = pts[i].K / an.kmax; ctx.fillStyle = `rgba(56,189,248,${0.3 + 0.6 * f})`; ctx.fillRect(X(z.re) - 1.2, Y(z.im) - 1.2, 2.4, 2.4); }
  for (const z of M.roots([1])) { /* none */ }
  // design poles, the two gain choices
  const sd = M.DESIGN.sd; for (const s of [1, -1]) { ctx.strokeStyle = COL.green; ctx.lineWidth = 1.6; const x = X(sd.re), y = Y(s * sd.im); ctx.beginPath(); ctx.moveTo(x - 4, y - 4); ctx.lineTo(x + 4, y + 4); ctx.moveTo(x + 4, y - 4); ctx.lineTo(x - 4, y + 4); ctx.stroke(); }
  const at = (K, col, tag, dy) => { const Kc = Math.min(K, an.kmax); const rr = M.roots(an.type === 'PD' ? [an.Jl, Kc, Kc * an.ratio.ab] : [an.Jl, Kc, Kc * an.ratio.ab, Kc * an.ratio.aab]); rr.forEach((z) => { if (z.im >= 0) C.dot(ctx, X(z.re), Y(z.im), col, 4); }); const dom = rr.find((z) => z.im > 0) || rr[0]; if (big) C.label(ctx, tag, X(dom.re) + 8, Y(dom.im) + dy, col, 'left', 10); };
  if (an.type === 'PID') { at(M.PID_REPORT[S.loop].kd, COL.rep, 'report Table 4', -12); at(M.DERIVED[S.loop].kd, COL.der, 're-derived', 12); } else at(M.PD[S.loop].kd, COL.green, 'report Table 2', -12);
  C.label(ctx, 'unstable', r.x + r.w - 6, r.y + 10, COL.red, 'right', big ? 10 : 9); C.label(ctx, 'stable', r.x + 6, r.y + 10, COL.green, 'left', big ? 10 : 9);
  const pp = an.poles.filter((z) => z.im >= 0).map((z) => `${z.re.toFixed(2)}${z.im ? (z.im > 0 ? '+' : '') + z.im.toFixed(2) + 'i' : ''}`).join(', ');
  return `Closed-loop poles as the overall gain grows. × marks the report's design poles −3.33 ± 4.15i. The pink dot is the report's printed PID gains (poles ${pp || '—'}); amber is the gain its own method gives, which lands on the design poles. Only the size of the gain differs: the zeros are the same.`;
}

/* ----------------------------------------------------------------------------------------------- bode --------- */
function bodePlot(canvas, S, big) {
  const {ctx, w, h} = C.fit(canvas), an = analysis(S), gap = big ? 38 : 22, hh = (h - gap) / 2;
  const mk = (y0) => ({x: big ? 52 : 34, y: y0 + 6, w: w - (big ? 64 : 46), h: hh - 14});
  const r1 = mk(0), r2 = mk(hh + gap - 6);
  const mag = an.bode.map((p) => [p.w, p.db]), ph = an.bode.map((p) => [p.w, p.ph]);
  const plantMag = an.plant.map((p) => [p.w, p.db - 20 * Math.log10(1 / an.Jl) * 0]), plantPh = an.plant.map((p) => [p.w, p.ph]);
  const lg = (v) => Math.log10(v);
  const lx = (v) => lg(v);
  const mapPts = (a) => a.map(([x, y]) => [lg(x), y]);
  const xt = [-2, -1, 0, 1, 2], xf = (v) => (v === 0 ? '1' : v > 0 ? '10' + (v > 1 ? '²' : '') : v === -1 ? '0.1' : '0.01');
  const dbs = an.bode.map((p) => p.db), lo = Math.floor(Math.min(...dbs, -40) / 20) * 20, hi = Math.ceil(Math.max(...dbs) / 20) * 20;
  const c1 = C.chart(ctx, r1, {xr: [-2, 2], yr: [lo, hi], xticks: xt, xfmt: xf, ny: 4, yl: big ? 'gain (dB)' : '', series: [{pts: mapPts(plantMag), color: 'rgba(154,160,195,0.55)', width: 1.4, dash: [4, 4]}, {pts: mapPts(mag), color: COL.cyan, width: 2.2}],
    over: [(X, Y) => { ctx.strokeStyle = 'rgba(251,191,36,0.6)'; ctx.setLineDash([5, 4]); ctx.beginPath(); ctx.moveTo(r1.x, Y(0)); ctx.lineTo(r1.x + r1.w, Y(0)); ctx.stroke(); ctx.setLineDash([]); if (an.margins.wc) { C.dot(ctx, X(lg(an.margins.wc)), Y(0), COL.amber, 4); C.label(ctx, `crossover ${an.margins.wc.toFixed(1)} rad/s`, X(lg(an.margins.wc)) + 8, Y(0) - 10, COL.amber, 'left', big ? 10 : 9); } }]});
  const pmin = Math.floor(Math.min(...an.bode.map((p) => p.ph), -200) / 90) * 90, pmax = Math.ceil(Math.max(...an.bode.map((p) => p.ph), -90) / 90) * 90;
  C.chart(ctx, r2, {xr: [-2, 2], yr: [pmin, pmax], xticks: xt, xfmt: xf, yticks: [-360, -270, -180, -90, 0].filter((v) => v >= pmin && v <= pmax), xl: big ? 'frequency (rad/s)' : '', yl: big ? 'phase (°)' : '', series: [{pts: mapPts(plantPh), color: 'rgba(154,160,195,0.55)', width: 1.4, dash: [4, 4]}, {pts: mapPts(ph), color: COL.pink, width: 2.2}],
    over: [(X, Y) => { ctx.strokeStyle = 'rgba(248,113,113,0.55)'; ctx.setLineDash([5, 4]); ctx.beginPath(); ctx.moveTo(r2.x, Y(-180)); ctx.lineTo(r2.x + r2.w, Y(-180)); ctx.stroke(); ctx.setLineDash([]); C.label(ctx, '−180°', r2.x + r2.w - 4, Y(-180) - 8, COL.red, 'right', 9);
      if (an.margins.wc && an.margins.pm != null) { ctx.setLineDash([3, 4]); ctx.strokeStyle = 'rgba(255,255,255,0.3)'; ctx.beginPath(); ctx.moveTo(X(lg(an.margins.wc)), r2.y); ctx.lineTo(X(lg(an.margins.wc)), r2.y + r2.h); ctx.stroke(); ctx.setLineDash([]); C.label(ctx, `phase margin ${an.margins.pm.toFixed(0)}°`, X(lg(an.margins.wc)) + 8, r2.y + r2.h * 0.3, COL.pink, 'left', big ? 11 : 9, '600'); } }]});
  C.label(ctx, `${LOOP_LABEL(S.loop)} loop · ${an.type}   dashed = the drone alone`, r1.x + 6, r1.y + 8, COL.muted, 'left', big ? 10 : 8.5);
  return an.type === 'PID' || an.type === 'PD' ? `The drone alone (dashed) is a double integrator: gain falling at −40 dB per decade and phase stuck at −180°, no margin at all. With ${an.type} the phase rises above −180° where the gain crosses 0 dB, leaving a phase margin of ${an.margins.pm != null ? an.margins.pm.toFixed(0) : '—'}° at ${an.margins.wc ? an.margins.wc.toFixed(1) : '—'} rad/s.` : 'Without a derivative term the phase never leaves −180° or below, so there is no phase margin: the loop is marginal or unstable.';
}
const LOOP_LABEL = (l) => M.LOOP_NAME[l];

function nyquistPlot(canvas, S, big) {
  const {ctx, r} = setup(canvas, big), an = analysis(S);
  const pts = an.nyq, lim = 3, asp = r.w / r.h;
  const {X, Y} = C.chart(ctx, r, {xr: [-lim * asp * 0.75 - 0.5, lim * asp * 0.75 - 0.5], yr: [-lim, lim], nx: 6, ny: 6, xl: big ? 'real' : '', yl: big ? 'imaginary' : '', series: [{pts: pts.map(([a, b]) => [a, b]), color: COL.cyan, width: 2.2}, {pts: pts.map(([a, b]) => [a, -b]), color: 'rgba(56,189,248,0.4)', width: 1.4, dash: [3, 3]}],
    over: [(X, Y) => { C.dot(ctx, X(-1), Y(0), COL.red, 5); C.label(ctx, '−1', X(-1), Y(0) + 14, COL.red, 'center', 10); }]});
  return 'The Nyquist curve of the open loop. The drone alone lies on the negative real axis and runs straight through −1, the critical point, which is why feedback on it is only marginal. With the derivative term the curve leaves the real axis, so it no longer runs through −1: that gap is the phase margin.';
}

/* ------------------------------------------------------------------------------- the five controllers ------- */
function shoot(canvas, S, big) {
  const {ctx, r} = setup(canvas, big), an = analysis(S);
  const ymax = 2.2, series = [];
  for (const t of ['P', 'I', 'PI', 'PD', 'PID']) series.push({pts: an.shoot[t].map(([x, y]) => [x, Math.max(-0.4, Math.min(ymax, y))]), color: TYPECOL[t] + (t === an.type ? '' : (t === 'PID' || t === 'PD' ? 'cc' : '88')), width: t === an.type ? 2.8 : 1.6});
  C.chart(ctx, r, {xr: [0, 8], yr: [-0.4, ymax], nx: big ? 8 : 4, ny: 4, xl: big ? 'time after a unit step (s)' : '', yl: big ? 'response' : '', series,
    over: [(X, Y) => { ctx.setLineDash([4, 4]); ctx.strokeStyle = 'rgba(255,255,255,0.35)'; ctx.beginPath(); ctx.moveTo(r.x, Y(1)); ctx.lineTo(r.x + r.w, Y(1)); ctx.stroke(); ctx.setLineDash([]);
      let yy = r.y + 10; for (const t of ['P', 'I', 'PI', 'PD', 'PID']) { const ok = an.shoot[t].ok; C.label(ctx, `${t} ${ok ? '✓ stable' : '✕ unstable'}`, r.x + r.w - 4, yy, ok ? TYPECOL[t] : COL.red, 'right', big ? 11 : 9, t === an.type ? '700' : ''); yy += big ? 15 : 12; } }]});
  return 'The report\'s story in one picture: P alone and PI oscillate forever, I alone grows, PD settles fast, PID settles with the extra third-order pole. Unit step in the reference on the selected loop; the bold line is the controller now running.';
}

/* ------------------------------------------------------------------------------------- live time series ----- */
function window_(S, big) { const s = S.sim.rec, win = big ? 30 : 12, t1 = Math.max(win, last(s.t)), t0 = t1 - win; let i0 = 0; while (i0 < s.n && s.t[i0] < t0) i0++; return {s, t0, t1, i0}; }
function series(s, key, i0, k = 1) { const out = []; for (let i = i0; i < s.n; i++) out.push([s.t[i], s[key][i] * k]); return out; }
function states(canvas, S, big) {
  const {ctx, w, h} = C.fit(canvas), {s, t0, t1, i0} = window_(S, big), n = big ? 3 : 2, gap = big ? 34 : 20, hh = (h - gap * (n - 1)) / n;
  const mkr = (k) => ({x: big ? 52 : 34, y: k * (hh + gap) + 6, w: w - (big ? 64 : 46), h: hh - (k === n - 1 ? (big ? 30 : 26) : (big ? 16 : 12))});
  const ang = [['phi', COL.roll, 'roll'], ['th', COL.pitch, 'pitch'], ['psi', COL.yaw, 'yaw']];
  const all = ang.flatMap(([k]) => series(s, k, i0, D2R).map((p) => p[1])); const amax = Math.max(15, ...all.map(Math.abs)) * 1.1;
  C.chart(ctx, mkr(0), {xr: [t0, t1], yr: [-amax, amax], nx: big ? 6 : 3, ny: 3, yl: big ? 'attitude (°)' : '', series: ang.map(([k, c]) => ({pts: series(s, k, i0, D2R), color: c, width: 2})), over: [(X, Y) => { let x = mkr(0).x + 6; for (const [, c, nm] of ang) { C.label(ctx, nm, x, mkr(0).y + 8, c, 'left', big ? 10 : 9); x += big ? 50 : 40; } }]});
  const zs = series(s, 'z', i0), zmax = Math.max(M.ZREF * 1.3, ...zs.map((p) => p[1])) * 1.05;
  C.chart(ctx, mkr(1), {xr: [t0, t1], yr: [0, zmax], nx: big ? 6 : 3, ny: 3, xl: big && n === 2 ? 'time (s)' : '', yl: big ? 'altitude (m)' : '', series: [{pts: zs, color: COL.z, width: 2.2}], over: [(X, Y) => { ctx.setLineDash([4, 4]); ctx.strokeStyle = 'rgba(255,255,255,0.3)'; ctx.beginPath(); ctx.moveTo(mkr(1).x, Y(M.ZREF)); ctx.lineTo(mkr(1).x + mkr(1).w, Y(M.ZREF)); ctx.stroke(); ctx.setLineDash([]); C.label(ctx, `target ${M.ZREF} m`, mkr(1).x + mkr(1).w - 4, Y(M.ZREF) - 8, COL.muted, 'right', 9); if (S.sim.crashed) C.label(ctx, 'GROUND CONTACT', mkr(1).x + 6, mkr(1).y + 10, COL.red, 'left', big ? 11 : 9, '700'); }]});
  if (n === 3) { const xs = series(s, 'x', i0), ys = series(s, 'y', i0), pm = Math.max(1, ...xs.concat(ys).map((p) => Math.abs(p[1]))) * 1.1; C.chart(ctx, mkr(2), {xr: [t0, t1], yr: [-pm, pm], nx: 6, ny: 3, xl: 'time (s)', yl: 'position (m)', series: [{pts: xs, color: COL.blue, width: 2}, {pts: ys, color: COL.amber, width: 2}], over: [() => { C.label(ctx, 'x (forward)', mkr(2).x + 6, mkr(2).y + 8, COL.blue, 'left', 10); C.label(ctx, 'y (sideways)', mkr(2).x + 90, mkr(2).y + 8, COL.amber, 'left', 10); }]}); }
  return 'Live: attitude (roll, pitch, yaw), altitude, and in the full view the sideways drift. x and y have no controller in the report, so after a gust they carry on drifting: its stated limitation.';
}
function effort(canvas, S, big) {
  const {ctx, w, h} = C.fit(canvas), {s, t0, t1, i0} = window_(S, big), gap = big ? 34 : 20, hh = (h - gap) / 2;
  const r1 = {x: big ? 52 : 34, y: 6, w: w - (big ? 64 : 46), h: hh - (big ? 16 : 12)}, r2 = {...r1, y: hh + gap + 4, h: hh - (big ? 34 : 26)};
  const u1 = series(s, 'U1', i0).map(([t, v]) => [t, v - M.M * M.G]); const m1 = Math.max(2, ...u1.map((p) => Math.abs(p[1]))) * 1.1;
  C.chart(ctx, r1, {xr: [t0, t1], yr: [-m1, m1], nx: big ? 6 : 3, ny: 3, yl: big ? 'U1 − m·g (N)' : '', series: [{pts: u1, color: COL.z, width: 2}], over: [() => C.label(ctx, `U1 thrust, hover = ${(M.M * M.G).toFixed(2)} N`, r1.x + 6, r1.y + 8, COL.z, 'left', big ? 10 : 9)]});
  const tq = [['U2', COL.roll], ['U3', COL.pitch], ['U4', COL.yaw]], all = tq.flatMap(([k]) => series(s, k, i0, 1000).map((p) => Math.abs(p[1]))), m2 = Math.max(5, ...all) * 1.1;
  C.chart(ctx, r2, {xr: [t0, t1], yr: [-m2, m2], nx: big ? 6 : 3, ny: 3, xl: big ? 'time (s)' : '', yl: big ? 'torque (mN·m)' : '', series: tq.map(([k, c]) => ({pts: series(s, k, i0, 1000), color: c, width: 1.8})), over: [() => { let x = r2.x + 6; for (const [k, c] of tq) { C.label(ctx, k, x, r2.y + 8, c, 'left', big ? 10 : 9); x += 34; } C.label(ctx, `effort ∫|U|² = ${S.sim.energy.toFixed(0)}`, r2.x + r2.w - 4, r2.y + 8, COL.muted, 'right', big ? 10 : 9); }]});
  return 'The four control signals the PID produces: total thrust U1 (hover is m·g) and the three torques. The report notes the early peaks are sharper than real motors could deliver, and recommends limiting the force and its rate.';
}

/* --------------------------------------------------------------------------------- the PID centre strip ----- */
export function pidBars(canvas, S) {
  const {ctx, w, h} = C.fit(canvas), T = S.sim.terms[S.loop], col = LCOL[S.loop];
  const parts = [['P', T.p, COL.pink], ['I', T.i, COL.amber], ['D', T.d, COL.green], ['Σ', T.u, col]];
  const scale = Math.max(1e-6, Math.abs(T.p), Math.abs(T.i), Math.abs(T.d), Math.abs(T.u)) * 1.15, cx = w / 2, bw = (w - 150) / 2;
  const unit = S.loop === 'z' ? 'N' : 'N·m', mul = S.loop === 'z' ? 1 : 1000, u2 = S.loop === 'z' ? 'N' : 'mN·m';
  ctx.strokeStyle = 'rgba(255,255,255,0.15)'; ctx.beginPath(); ctx.moveTo(cx + 18, 6); ctx.lineTo(cx + 18, h - 6); ctx.stroke();
  parts.forEach(([nm, v, c], i) => { const y = 10 + i * (h - 18) / 4 + 6; C.label(ctx, nm, cx + 8, y + 4, c, 'right', 13, '700'); const len = Math.abs(v) / scale * bw; ctx.fillStyle = c; ctx.globalAlpha = 0.85; ctx.fillRect(cx + 18 + (v < 0 ? -len : 0), y - 3, Math.max(1, len), 8); ctx.globalAlpha = 1; C.label(ctx, `${(v * mul).toFixed(Math.abs(v * mul) < 10 ? 3 : 2)} ${u2}`, w - 8, y + 4, COL.muted, 'right', 10); });
  return '';
}

export const GRAPHS = {simulink, locus, bode: bodePlot, nyquist: nyquistPlot, shoot, states, effort};
