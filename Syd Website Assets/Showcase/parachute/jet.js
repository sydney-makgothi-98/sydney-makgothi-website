// The start-up of one turbojet, as a cutaway animation in the manner of a simulation film: a dark card, a serif title, a timeline, the engine drawn in section with its
// gas coloured from blue (cold) through green and yellow to red and white (hot), a caption for each phase, four readouts and a strip chart with a playhead.
// The gas is a real 2D fluid: a stable-fluids solver (semi-Lagrangian advection, a pressure projection that keeps it incompressible, vorticity confinement so that
// eddies survive) runs on a grid laid over the engine. The casing and hub are solid walls, the compressor and turbine push the gas along, the combustor heats it, and
// the exhaust leaves the nozzle as a free jet that rolls up into vortices and billows into a cloud, so the swirling is computed, not drawn.
// ILLUSTRATIVE: the start schedule, the temperatures and the forcing are invented but plausible. It is not a validated CFD solution (no combustion chemistry,
// no compressibility, no 3D) and not measured data from the truck's engines. The readouts and the picture come from the same state function, so they agree.
import {fit} from '../chart.js';

const W = 1000, H = 640, T_END = 36, HOLD = 3;
const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const sm = (a, b, x) => { const t = clamp((x - a) / (b - a)); return t * t * (3 - 2 * t); };
const lerp = (a, b, t) => a + (b - a) * t;
const SERIF = '"Playfair Display", "Didot", "Bodoni MT", Georgia, serif', BODY = '"Newsreader", Georgia, serif', MONO = '"JetBrains Mono", monospace', SANS = 'Inter, Arial, sans-serif';

/** rotor speed as a fraction of full speed, and flame intensity, against time since the start button */
function rotor(t) {
  if (t < 1) return 0;
  if (t < 7) return 0.16 * sm(1, 7, t);
  if (t < 14) return 0.16 + 0.14 * sm(7, 14, t);
  if (t < 18) return 0.30 + 0.15 * sm(14, 18, t);
  if (t < 23) return 0.45 + 0.10 * sm(18, 23, t);
  return 0.55 + 0.45 * sm(23, 32, t);
}
const T_FUEL = 7.0, T_LIGHT = 7.8;
const flame = (t, r) => (t < T_LIGHT ? 0 : clamp(sm(T_LIGHT, T_LIGHT + 0.8, t) * (0.10 + 0.52 * Math.pow(r, 1.1) + 0.30 * Math.exp(-(t - 8.2) / 2.5)), 0, 0.82));
const state = (t) => { const r = rotor(t), f = flame(t, r); return {r, f, egt: 15 + 1000 * (0.3 * Math.pow(r, 2.2) * 0.7 + f * 0.7), thrust: f > 0 ? 3000 * Math.pow(r, 3.2) : 0, pr: 1 + 3.9 * r * r}; };
const PHASES = [[0, 'Cold, still and ready.'], [1, 'The starter spins the compressor.'], [T_FUEL, 'Fuel flows and the igniter fires.'], [T_LIGHT + 0.6, 'Light-off: the flame takes hold, and the exhaust runs briefly hot.'], [14, 'The turbine takes over; the starter drops out.'], [18, 'Acceleration to idle.'], [23, 'Throttle up: the gas path fills with fire.'], [32, 'Full power. Three of these push the truck.']];
const phase = (t) => PHASES.filter((p) => t >= p[0]).pop()[1];
const HIST = Array.from({length: T_END * 10 + 1}, (_, i) => { const s = state(i / 10); return {egt: s.egt, r: s.r}; });

/* geometry of the cutaway: half-height of the casing and of the hub along the axis (design units), one half drawn and mirrored */
const X0 = 60, X1 = 790, CY = 296, AXIS = CY - 20;
function casing(x) {
  if (x < 140) return lerp(100, 62, Math.pow(sm(X0, 140, x), 0.7));           // the bell mouth
  if (x < 400) return lerp(62, 44, (x - 140) / 260);                           // the compressor narrows as the air is squeezed
  if (x < 470) return lerp(44, 80, sm(400, 470, x));                           // the combustor opens out
  if (x < 540) return 80;
  if (x < 600) return lerp(80, 58, sm(540, 600, x));
  if (x < 700) return lerp(58, 66, (x - 600) / 100);                           // the turbine
  return lerp(66, 36, sm(700, X1, x));                                         // the nozzle
}
function hub(x) { if (x < 140) return 14; if (x < 400) return lerp(14, 30, (x - 140) / 260); if (x < 600) return 32; if (x < 700) return lerp(32, 26, (x - 600) / 100); return lerp(26, 0, sm(700, X1, x)); }
/** the temperature (0 to 1) the gas is driven towards at x inside the engine, for rotor speed r and flame f */
function temp(x, r, f) {
  const base = 0.06 + 0.30 * Math.pow(r, 2.2) * sm(140, 400, x) * (1 - 0.5 * sm(560, X1, x));
  return base + f * sm(400, 480, x) * (1 - 0.45 * sm(540, X1, x));
}
const AMB = 0.06;

/** the colour scale: deep blue, blue, cyan, green, yellow, orange, red, white-hot */
const STOPS = [[0, 10, 12, 150], [0.16, 20, 70, 255], [0.32, 20, 225, 255], [0.46, 70, 255, 90], [0.6, 255, 238, 50], [0.74, 255, 135, 14], [0.88, 255, 45, 22], [1, 255, 236, 205]];
const LUT = new Uint8Array(256 * 3); for (let i = 0; i < 256; i++) { const t = i / 255; let k = 1; while (k < STOPS.length - 1 && t > STOPS[k][0]) k++; const a = STOPS[k - 1], b = STOPS[k], q = (t - a[0]) / (b[0] - a[0]); for (let c = 0; c < 3; c++) LUT[i * 3 + c] = lerp(a[c + 1], b[c + 1], clamp(q)); }

/* ---------------------------------------------------------------------------------- the fluid ---- */
const K = 0.8, mx = (x) => 40 + (x - 40) * K;                         // the engine and its fluid are drawn at 80 % so that the exhaust has room to billow
const CS = 3.3, NX = 348, NY = 100, N = NX * NY, DX0 = 40, DY0 = AXIS - NY * CS / 2;
function makeSim() {
  const u = new Float32Array(N), v = new Float32Array(N), u0 = new Float32Array(N), v0 = new Float32Array(N), p = new Float32Array(N), dv = new Float32Array(N);
  const T = new Float32Array(N).fill(AMB), T0 = new Float32Array(N), cw = new Float32Array(N), aw = new Float32Array(N), uu = new Float32Array(N), vv = new Float32Array(N);
  const solid = new Uint8Array(N), eng = new Uint8Array(N), gx = new Float32Array(N), rateT = new Float32Array(N), exitJet = new Uint8Array(N), inlet = new Uint8Array(N);
  for (let j = 0; j < NY; j++) for (let i = 0; i < NX; i++) {
    const c = j * NX + i, x = DX0 + (i + 0.5) * CS, dy = Math.abs(DY0 + (j + 0.5) * CS - AXIS);
    if (x >= X0 && x <= X1) {
      if (dy < hub(x) || dy > casing(x)) solid[c] = 1;
      else { eng[c] = 1; gx[c] = x < 140 ? 0.20 : x < 400 ? lerp(0.22, 0.30, (x - 140) / 260) : x < 540 ? lerp(0.45, 0.62, sm(400, 540, x)) : x < 700 ? 0.72 : lerp(0.78, 1.0, sm(700, X1, x)); rateT[c] = x > 410 && x < 560 ? 0.30 : x > X1 - 12 ? 0.35 : 0.07; }
    } else if (x < X0 && dy < 100) inlet[c] = 1;
    if (x > X1 && x < X1 + 5 * CS && dy < 36) exitJet[c] = 1;
  }
  function sample(f, x, y) { x = clamp(x, 0.5, NX - 1.5); y = clamp(y, 0.5, NY - 1.5); const i = x | 0, j = y | 0, s = x - i, t = y - j, c = j * NX + i; return (f[c] * (1 - s) + f[c + 1] * s) * (1 - t) + (f[c + NX] * (1 - s) + f[c + NX + 1] * s) * t; }
  // dst = src carried along the velocity (ve, vf), both in cells per step
  function advect(dst, src, ve, vf) { for (let j = 1; j < NY - 1; j++) for (let i = 0; i < NX; i++) { const c = j * NX + i; if (solid[c]) { dst[c] = 0; continue; } dst[c] = sample(src, i - ve[c], j - vf[c]); } }
  function project(iters) {
    for (let j = 1; j < NY - 1; j++) for (let i = 1; i < NX - 1; i++) { const c = j * NX + i; dv[c] = solid[c] ? 0 : -0.5 * (u[c + 1] - u[c - 1] + v[c + NX] - v[c - NX]); }
    for (let k = 0; k < iters; k++) for (let j = 1; j < NY - 1; j++) for (let i = 1; i < NX; i++) {
      const c = j * NX + i; if (solid[c]) continue;
      let s = 0, n = 0; const R = i === NX - 1;
      if (!solid[c - 1]) { s += p[c - 1]; n++; } if (!R) { if (!solid[c + 1]) { s += p[c + 1]; n++; } } else n++;      // the right edge is open: the pressure outside is zero
      if (!solid[c - NX]) { s += p[c - NX]; n++; } if (!solid[c + NX]) { s += p[c + NX]; n++; }
      p[c] = n ? (s + dv[c]) / n : 0;
    }
    for (let j = 1; j < NY - 1; j++) for (let i = 1; i < NX - 1; i++) { const c = j * NX + i; if (solid[c]) continue; const pl = solid[c - 1] ? p[c] : p[c - 1], pr = solid[c + 1] ? p[c] : p[c + 1], pd = solid[c - NX] ? p[c] : p[c - NX], pu = solid[c + NX] ? p[c] : p[c + NX]; u[c] -= 0.5 * (pr - pl); v[c] -= 0.5 * (pu - pd); }
  }
  const rnd = () => Math.random() - 0.5;
  /** one step of 1/60 s. Velocities are kept in cells per second between steps and in cells per step inside the solver. */
  function step(st, fT) {
    const Ub = 95 * Math.pow(st.r, 1.3) * (st.f > 0 ? 1 : 0.4), Uin = Ub * 0.20, dt = 1 / 60;
    // forcing: the compressor and turbine drive the gas along, the combustor heats it, the nozzle accelerates it; beyond the nozzle the jet is free
    for (let c = 0; c < N; c++) {
      if (solid[c]) continue;
      if (eng[c]) { u[c] += 0.30 * (Ub * gx[c] - u[c]); v[c] *= 0.92; }
      else if (exitJet[c]) { u[c] += 0.40 * (Ub * 1.02 - u[c]); }
      else if (inlet[c]) { u[c] += 0.30 * (Uin - u[c]); }
    }
    // a little turbulence at the nozzle lip seeds the shear-layer vortices
    if (st.f > 0.05) for (let c = 0; c < N; c++) if (exitJet[c]) v[c] += rnd() * 0.20 * Ub * st.f;
    // vorticity confinement keeps the eddies alive instead of letting the grid smooth them away
    for (let j = 1; j < NY - 1; j++) for (let i = 1; i < NX - 1; i++) { const c = j * NX + i; cw[c] = 0.5 * (v[c + 1] - v[c - 1] - u[c + NX] + u[c - NX]); aw[c] = Math.abs(cw[c]); }
    const eps = 4.5, iX1 = (X1 - 40 - DX0) / CS;
    for (let j = 2; j < NY - 2; j++) for (let i = 2; i < NX - 2; i++) { const c = j * NX + i; if (solid[c] || i < iX1) continue; const gxv = 0.5 * (aw[c + 1] - aw[c - 1]), gyv = 0.5 * (aw[c + NX] - aw[c - NX]), l = Math.hypot(gxv, gyv) + 1e-5; u[c] += dt * eps * (gyv / l) * cw[c]; v[c] -= dt * eps * (gxv / l) * cw[c]; }
    // the heat the gas is driven towards
    for (let j = 0; j < NY; j++) for (let i = 0; i < NX; i++) { const c = j * NX + i; if (eng[c]) T[c] += rateT[c] * (temp(DX0 + (i + 0.5) * CS, st.r, fT) - T[c]); else if (exitJet[c]) T[c] += 0.35 * (Math.min(0.78, temp(X1, st.r, fT) * 1.45) - T[c]); }
    // to cells per step, then advect the velocity by itself, hold the inflow, and make it divergence-free
    for (let c = 0; c < N; c++) { u[c] *= dt; v[c] *= dt; } u0.set(u); v0.set(v);
    advect(u, u0, u0, v0); advect(v, v0, u0, v0);
    for (let j = 0; j < NY; j++) { const c = j * NX; u[c] = Uin * dt * (inlet[c] ? 1 : 0); v[c] = 0; }
    for (let c = 0; c < N; c++) if (solid[c]) { u[c] = 0; v[c] = 0; }
    project(22);
    uu.set(u); vv.set(v); T0.set(T); advect(T, T0, uu, vv);
    for (let c = 0; c < N; c++) { u[c] /= dt; v[c] /= dt; if (solid[c]) T[c] = AMB; else if (!eng[c]) T[c] = AMB + (T[c] - AMB) * 0.996; }
  }
  const img = new ImageData(NX, NY), off = document.createElement('canvas'); off.width = NX; off.height = NY; const octx = off.getContext('2d');
  function render() {
    const d = img.data;
    for (let c = 0; c < N; c++) {
      const o = c * 4; if (solid[c]) { d[o + 3] = 0; continue; }
      const t = T[c], li = Math.round(clamp(t) * 255) * 3, a = eng[c] ? 0.94 : Math.pow(clamp((t - AMB - 0.025) * 3.2), 0.85) * 0.96;
      d[o] = LUT[li]; d[o + 1] = LUT[li + 1]; d[o + 2] = LUT[li + 2]; d[o + 3] = a * 255;
    }
    octx.putImageData(img, 0, 0); return off;
  }
  function reset() { u.fill(0); v.fill(0); p.fill(0); T.fill(AMB); }
  return {step, render, reset, T};
}

export function initJet(canvas) {
  if (!canvas) return;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches, sim = makeSim();
  let t = reduce ? 31 : 0, hold = 0, last = 0, visible = true, phaseAng = 0, shaft = 0, running = false;
  const start = () => { if (!running) { running = true; last = 0; requestAnimationFrame(tick); } };
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) start(); }).observe(canvas);
  if (reduce) { const s = state(t); for (let k = 0; k < 240; k++) sim.step(s, s.f); }

  function draw() {
    const {ctx, w, h} = fit(canvas), s = w / W; ctx.save(); ctx.scale(s, s);
    const st = state(t), now = performance.now() / 1000;
    ctx.fillStyle = '#08080f'; ctx.fillRect(0, 0, W, h / s);
    // header, timeline, title
    ctx.font = `600 10px ${MONO}`; ctx.fillStyle = '#e9e7ff'; ctx.textBaseline = 'middle'; ctx.textAlign = 'left'; ctx.fillText('ILLUSTRATIVE · NOT MEASURED DATA', 40, 34); ctx.textAlign = 'right'; ctx.fillText('SIMULATION', 960, 34);
    ctx.strokeStyle = 'rgba(255,255,255,0.35)'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(40, 54); ctx.lineTo(960, 54); ctx.stroke();
    for (let k = 0; k <= 36; k += 2) { ctx.beginPath(); ctx.moveTo(40 + 920 * k / T_END, 51); ctx.lineTo(40 + 920 * k / T_END, 57); ctx.stroke(); }
    ctx.strokeStyle = '#fff'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(40 + 920 * t / T_END, 46); ctx.lineTo(40 + 920 * t / T_END, 62); ctx.stroke();
    ctx.textAlign = 'left'; ctx.fillStyle = '#f4f2ff'; ctx.font = `800 36px ${SERIF}`; ctx.fillText('How a jet truck engine starts', 40, 96);
    ctx.fillStyle = 'rgba(244,242,255,0.7)'; ctx.font = `italic 400 19px ${BODY}`; ctx.fillText('a simulated fluid cutaway of one turbojet, then the numbers it produces', 40, 126);

    // the fluid
    ctx.save(); ctx.translate(40, AXIS); ctx.scale(K, K); ctx.translate(-40, -AXIS);
    ctx.imageSmoothingEnabled = true; ctx.imageSmoothingQuality = 'high'; ctx.drawImage(sim.render(), DX0, DY0, NX * CS, NY * CS);
    ctx.save(); ctx.translate(0, AXIS);
    const cy = 0, burst = Math.exp(-Math.max(0, t - T_LIGHT) * 1.6) * (t >= T_LIGHT ? 1 : 0);
    // flame glow in the combustor
    if (st.f > 0.01 || burst > 0.01) {
      const fl = 0.75 + 0.25 * Math.sin(now * 23) * Math.sin(now * 7.3); ctx.globalCompositeOperation = 'lighter';
      const g = ctx.createRadialGradient(480, cy, 4, 480, cy, 150); g.addColorStop(0, `rgba(255,255,255,${(0.35 * st.f + 0.7 * burst) * fl})`); g.addColorStop(0.35, `rgba(255,200,80,${0.22 * st.f * fl + 0.3 * burst})`); g.addColorStop(1, 'rgba(255,60,0,0)');
      ctx.fillStyle = g; ctx.fillRect(330, cy - 120, 340, 240); ctx.globalCompositeOperation = 'source-over';
    }
    // casing, hub and blades
    ctx.strokeStyle = 'rgba(255,255,255,0.88)'; ctx.lineWidth = 1.6;
    for (const sgn of [-1, 1]) { ctx.beginPath(); for (let x = X0; x <= X1; x += 4) { const y = cy + sgn * casing(x); x === X0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y); } ctx.stroke(); }
    ctx.fillStyle = '#0c0c18'; ctx.beginPath(); for (let x = 130; x <= X1; x += 4) ctx.lineTo(x, cy - hub(x)); for (let x = X1; x >= 130; x -= 4) ctx.lineTo(x, cy + hub(x)); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.lineWidth = 1; ctx.strokeStyle = 'rgba(255,255,255,0.65)';
    shaft += st.r * 0.9; ctx.setLineDash([6, 10]); ctx.lineDashOffset = -shaft * 9; ctx.beginPath(); ctx.moveTo(150, cy); ctx.lineTo(720, cy); ctx.stroke(); ctx.setLineDash([]);
    const blade = (x0, n, hot) => { for (let k = 0; k < n; k++) { const x = x0 + k * (hot ? 26 : 25), sh = Math.sin(phaseAng * 3 + k * 1.7), al = 0.25 + 0.5 * Math.abs(sh) * (st.r > 0.02 ? 1 : 0.2), cs = casing(x), hb = hub(x); ctx.strokeStyle = hot ? `rgba(255,${160 + 60 * st.f | 0},80,${al + 0.1})` : `rgba(255,255,255,${al})`; for (const sgn of [-1, 1]) { ctx.beginPath(); ctx.moveTo(x + sh * 2.2, cy + sgn * hb); ctx.lineTo(x - sh * 2.2, cy + sgn * (cs - 1)); ctx.stroke(); } } };
    blade(158, 10, false); blade(606, 4, true);
    ctx.strokeStyle = 'rgba(255,255,255,0.5)'; ctx.lineWidth = 1; for (const sgn of [-1, 1]) { ctx.beginPath(); ctx.moveTo(420, cy + sgn * 40); ctx.lineTo(540, cy + sgn * 52); ctx.stroke(); }
    ctx.restore(); ctx.restore();
    // component names
    ctx.font = `500 9px ${MONO}`; ctx.fillStyle = 'rgba(244,242,255,0.65)'; ctx.textAlign = 'center';
    [['INLET', 100], ['COMPRESSOR', 270], ['COMBUSTOR', 480], ['TURBINE', 650], ['NOZZLE', 760]].forEach(([n, x]) => ctx.fillText(n, mx(x), AXIS + 100 * K + 18));
    if (t >= T_FUEL && t < T_LIGHT + 1.2) { ctx.font = `700 10px ${MONO}`; ctx.fillStyle = '#ffe28a'; ctx.fillText(t < T_LIGHT ? 'FUEL ON' : 'IGNITER FIRES', mx(480), AXIS - 84 * K - 10); }
    if (t > 1 && t < 17) { ctx.font = `500 9px ${MONO}`; ctx.fillStyle = 'rgba(200,220,255,0.8)'; ctx.fillText(t < 14 ? 'STARTER DRIVING' : 'STARTER CUTS OUT', mx(270), AXIS - 84 * K - 10); }

    // caption, time, readouts
    ctx.textAlign = 'left'; ctx.font = `600 11px ${MONO}`; ctx.fillStyle = '#e9e7ff'; ctx.fillText(`T+ ${t.toFixed(2)} s`, 40, 462); ctx.textAlign = 'right'; ctx.fillText('REAL TIME', 960, 462);
    ctx.textAlign = 'left'; ctx.fillStyle = '#f4f2ff'; ctx.font = `italic 400 24px ${BODY}`; ctx.fillText(phase(t), 40, 492);
    const R = [['THRUST', Math.round(st.thrust).toLocaleString('en-US'), 'lbf'], ['ROTOR SPEED', (st.r * 100).toFixed(0), '%'], ['EXHAUST GAS', Math.round(st.egt).toLocaleString('en-US'), '°C'], ['PRESSURE RATIO', st.pr.toFixed(1), ':1']];
    R.forEach(([k, v, u], i) => { const x = 40 + i * 230; ctx.font = `500 9px ${MONO}`; ctx.fillStyle = 'rgba(244,242,255,0.55)'; ctx.fillText(k, x, 526); ctx.font = `700 30px ${SANS}`; ctx.fillStyle = '#fff'; ctx.fillText(v, x, 556); const vw = ctx.measureText(v).width; ctx.font = `500 10px ${SANS}`; ctx.fillStyle = 'rgba(244,242,255,0.6)'; ctx.fillText(u, x + vw + 4, 556); });
    // strip chart: exhaust gas temperature and rotor speed against time, with the playhead
    const sx = 40, sw = 920, sy = 584, sh = 26, px = (i) => sx + sw * i / (HIST.length - 1), idx = Math.min(HIST.length - 1, Math.round(t * 10));
    const lg = ctx.createLinearGradient(sx, 0, sx + sw, 0); lg.addColorStop(0, '#2b5bff'); lg.addColorStop(0.35, '#18e0e0'); lg.addColorStop(0.65, '#ffe14d'); lg.addColorStop(1, '#ff3b1f');
    ctx.lineWidth = 2; ctx.strokeStyle = 'rgba(255,255,255,0.25)'; ctx.beginPath(); HIST.forEach((q, i) => { const y = sy + sh - sh * q.egt / 800; i ? ctx.lineTo(px(i), y) : ctx.moveTo(px(i), y); }); ctx.stroke();
    ctx.strokeStyle = lg; ctx.beginPath(); for (let i = 0; i <= idx; i++) { const y = sy + sh - sh * HIST[i].egt / 800; i ? ctx.lineTo(px(i), y) : ctx.moveTo(px(i), y); } ctx.stroke();
    ctx.lineWidth = 1.4; ctx.strokeStyle = 'rgba(255,255,255,0.18)'; ctx.beginPath(); HIST.forEach((q, i) => { const y = sy + sh - sh * q.r; i ? ctx.lineTo(px(i), y) : ctx.moveTo(px(i), y); }); ctx.stroke();
    ctx.strokeStyle = 'rgba(255,255,255,0.9)'; ctx.beginPath(); for (let i = 0; i <= idx; i++) { const y = sy + sh - sh * HIST[i].r; i ? ctx.lineTo(px(i), y) : ctx.moveTo(px(i), y); } ctx.stroke();
    ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(px(idx), sy + sh - sh * HIST[idx].egt / 800, 3.5, 0, 7); ctx.fill(); ctx.beginPath(); ctx.arc(px(idx), sy + sh - sh * HIST[idx].r, 3, 0, 7); ctx.fill();
    ctx.font = `500 8.5px ${MONO}`; ctx.fillStyle = 'rgba(244,242,255,0.5)'; ctx.textAlign = 'left'; ctx.fillText('EXHAUST GAS TEMPERATURE (COLOUR)', sx, sy + sh + 14); ctx.fillText('ROTOR SPEED (WHITE)', sx + 300, sy + sh + 14);
    ctx.restore();
  }
  function tick(now) {
    if (!visible || document.hidden) { running = false; return; } requestAnimationFrame(tick);
    const dt = Math.min(0.05, last ? (now - last) / 1000 : 0); last = now; phaseAng += dt * (0.5 + 12 * state(t).r);
    if (!reduce) {
      if (hold > 0) { hold -= dt; if (hold <= 0) { t = 0; sim.reset(); } } else { t += dt; if (t >= T_END) { t = T_END; hold = HOLD; } }
      const st = state(t), burst = Math.exp(-Math.max(0, t - T_LIGHT) * 1.6) * (t >= T_LIGHT ? 1 : 0); sim.step(st, clamp(st.f + 0.4 * burst, 0, 1));
    }
    draw();
  }
  start();
  window.__JET = {state, sim, get t() { return t; }, set t(v) { t = v; }};
}
