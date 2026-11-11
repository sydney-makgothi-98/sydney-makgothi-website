// The stability of the modified aircraft, as an animated sheet of graphs: each graph's grid forms first, then its curve is traced.
// The numbers are the report's Table 10 (the characteristic equations of the modified aircraft). Each curve is the free response of one mode,
// worked out here from that equation: a unit disturbance that then decays (stable) or grows (unstable). They are NOT the report's own response
// plots (Figures 37 to 39), which came from the full equations of motion; they show the same modes from the same equations, normalised.
import {label, fit} from '../mag.js';

/** the five modes: characteristic polynomial coefficients [1, b, c] (s^2 + b s + c) or [1, c] (s + c), as reported */
export const MODES = [
  {id: 'phugoid', name: 'Phugoid', kind: 'longitudinal', poly: [1, 3.47, 8.94], tmax: 5},
  {id: 'short', name: 'Short period', kind: 'longitudinal', poly: [1, 0.35, 2.99], tmax: 24},
  {id: 'dutch', name: 'Dutch roll', kind: 'lateral', poly: [1, 15.75, 791.38], tmax: 1.6},
  {id: 'roll', name: 'Roll subsidence', kind: 'lateral', poly: [1, 0.197], tmax: 24},
  {id: 'spiral', name: 'Spiral', kind: 'lateral', poly: [1, -0.011], tmax: 140},
];

/** everything that follows from a characteristic equation */
export function analyse(m) {
  const p = m.poly;
  if (p.length === 2) { const lam = -p[1]; return {...m, real: true, lam, stable: lam < 0, tau: 1 / Math.abs(lam), half: Math.LN2 / Math.abs(lam), roots: [[lam, 0]]}; }
  const wn = Math.sqrt(p[2]), zeta = p[1] / (2 * wn), sig = -zeta * wn, wd = wn * Math.sqrt(Math.max(0, 1 - zeta * zeta));
  return {...m, real: false, wn, zeta, sig, wd, stable: sig < 0, period: 2 * Math.PI / wd, half: Math.LN2 / Math.abs(sig), roots: [[sig, wd], [sig, -wd]]};
}
export const ANALYSED = MODES.map(analyse);
/** the normalised free response at time t */
export const response = (a, t) => (a.real ? Math.exp(a.lam * t) : Math.exp(a.sig * t) * (Math.cos(a.wd * t) + (a.sig === 0 ? 0 : (-a.sig / a.wd) * Math.sin(a.wd * t))));

const T_GRID = 2.2, T_TRACE = 4.5, T_ALL = T_GRID + T_TRACE + 2;
const ease = (a) => 1 - Math.pow(1 - a, 3), clamp = (v) => Math.max(0, Math.min(1, v));

/** a panel's grid: lines rise and sweep in, staggered by panel number k */
function grid(ctx, x, y, w, h, nx, ny, a) {
  for (let i = 0; i <= nx; i++) { const q = ease(clamp(a * 1.5 - i / nx * 0.5)); ctx.strokeStyle = i % 2 ? 'rgba(0,0,0,0.10)' : 'rgba(0,0,0,0.25)'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(x + w * i / nx, y + h); ctx.lineTo(x + w * i / nx, y + h - h * q); ctx.stroke(); }
  for (let j = 0; j <= ny; j++) { const q = ease(clamp(a * 1.5 - j / ny * 0.5)); ctx.strokeStyle = j % 2 ? 'rgba(0,0,0,0.10)' : 'rgba(0,0,0,0.25)'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(x, y + h * j / ny); ctx.lineTo(x + w * q, y + h * j / ny); ctx.stroke(); }
}

export function drawStability(c, t) {
  const {ctx, w, h} = fit(c), cols = w < 640 ? 2 : 3, rows = Math.ceil(6 / cols), gw = w / cols, gh = h / rows, pad = {l: 40, r: 12, t: 30, b: 28};
  ANALYSED.forEach((a, k) => {
    const cx = (k % cols) * gw, cy = Math.floor(k / cols) * gh, x = cx + pad.l, y = cy + pad.t, pw = gw - pad.l - pad.r, ph = gh - pad.t - pad.b;
    const g = clamp((t - k * 0.18) / T_GRID), tr = clamp((t - T_GRID - k * 0.15) / T_TRACE);
    const ymax = a.stable ? 1.05 : Math.exp(a.lam * a.tmax) * 1.1, ymin = a.stable && !a.real ? -1.05 : (a.stable ? -0.05 : -0.05);
    const X = (v) => x + v / a.tmax * pw, Y = (v) => y + ph - (v - ymin) / (ymax - ymin) * ph;
    label(ctx, a.name.toUpperCase(), cx + pad.l, cy + 12, '#000', 'left', 10, '700');
    label(ctx, a.stable ? 'stable' : 'UNSTABLE', cx + gw - pad.r, cy + 12, '#000', 'right', 9.5, '700');
    ctx.save(); ctx.beginPath(); ctx.rect(x - 1, y - 1, pw + 2, ph + 2); ctx.clip(); grid(ctx, x, y, pw, ph, 8, 4, g); ctx.restore();
    ctx.globalAlpha = g; ctx.strokeStyle = '#000'; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y + ph); ctx.stroke();
    ctx.strokeStyle = 'rgba(0,0,0,0.6)'; ctx.beginPath(); ctx.moveTo(x, Y(0)); ctx.lineTo(x + pw, Y(0)); ctx.stroke();
    [0, 0.5, 1].forEach((f) => label(ctx, +(a.tmax * f).toPrecision(2) + (f === 1 ? ' s' : ''), x + pw * f, y + ph + 11, '#555', f === 0 ? 'left' : f === 1 ? 'right' : 'center', 8.5));
    label(ctx, '1', x - 5, Y(1), '#555', 'right', 8.5); label(ctx, '0', x - 5, Y(0), '#555', 'right', 8.5); if (a.stable && !a.real) label(ctx, '-1', x - 5, Y(-1), '#555', 'right', 8.5);
    ctx.globalAlpha = 1;
    // the envelope e^(sigma t), dashed, for the oscillating modes
    if (!a.real && tr > 0) { ctx.setLineDash([4, 3]); ctx.strokeStyle = '#777'; ctx.lineWidth = 1; [1, -1].forEach((sg) => { ctx.beginPath(); for (let i = 0; i <= 80 * tr; i++) { const tt = i / 80 * a.tmax, yv = sg * Math.exp(a.sig * tt); i ? ctx.lineTo(X(tt), Y(yv)) : ctx.moveTo(X(tt), Y(yv)); } ctx.stroke(); }); ctx.setLineDash([]); }
    // the response itself, traced
    if (tr > 0) {
      const n = Math.round(500 * tr); ctx.strokeStyle = '#000'; ctx.lineWidth = a.stable ? 2 : 2.8; ctx.beginPath();
      for (let i = 0; i <= n; i++) { const tt = i / 500 * a.tmax; i ? ctx.lineTo(X(tt), Y(response(a, tt))) : ctx.moveTo(X(tt), Y(response(a, tt))); }
      ctx.stroke(); const tt = n / 500 * a.tmax; ctx.fillStyle = '#fff'; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(X(tt), Y(response(a, tt)), 3.2, 0, 7); ctx.fill(); ctx.stroke();
    }
    if (tr >= 1) {
      const msg = a.real ? (a.stable ? `halves in ${a.half.toFixed(1)} s` : `doubles in ${a.half.toFixed(0)} s`) : `ω = ${a.wn.toFixed(2)} rad/s   ζ = ${a.zeta.toFixed(2)}`;
      label(ctx, msg, x + pw - 4, y + 11, '#000', 'right', 9, '600');
    }
  });
  // the sixth panel: where the roots of the five equations sit in the complex plane
  const k = 5, cx = (k % cols) * gw, cy = Math.floor(k / cols) * gh, x = cx + pad.l, y = cy + pad.t, pw = gw - pad.l - pad.r, ph = gh - pad.t - pad.b;
  const g = clamp((t - k * 0.18) / T_GRID), tr = clamp((t - T_GRID - k * 0.15) / T_TRACE), xr = [-9, 1.5], yr = [-31, 31];
  const X = (v) => x + (v - xr[0]) / (xr[1] - xr[0]) * pw, Y = (v) => y + ph - (v - yr[0]) / (yr[1] - yr[0]) * ph;
  label(ctx, 'THE ROOTS (s-PLANE)', cx + pad.l, cy + 12, '#000', 'left', 10, '700');
  ctx.save(); ctx.beginPath(); ctx.rect(x - 1, y - 1, pw + 2, ph + 2); ctx.clip(); grid(ctx, x, y, pw, ph, 8, 6, g); ctx.restore();
  ctx.globalAlpha = g; ctx.strokeStyle = '#000'; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.moveTo(x, y + ph); ctx.lineTo(x + pw, y + ph); ctx.moveTo(X(0), y); ctx.lineTo(X(0), y + ph); ctx.stroke();
  label(ctx, 'unstable side', x + pw - 3, y + 9, '#000', 'right', 8.5, '600'); label(ctx, 'real part, 1/s', x + pw / 2, y + ph + 20, '#555', 'center', 8.5); label(ctx, 'imaginary', x - 5, y + ph / 2, '#555', 'right', 8.5); ctx.globalAlpha = 1;
  ctx.fillStyle = 'rgba(0,0,0,0.06)'; ctx.fillRect(X(0), y, x + pw - X(0), ph);
  if (tr > 0.9) ['near the origin:', '× short period (±1.7i)', '× roll subsidence (−0.197)', '○ spiral (+0.011): unstable'].forEach((t2, i) => label(ctx, t2, x + 6, y + ph * 0.47 + i * 10, '#000', 'left', 8, i ? '' : '600'));
  ANALYSED.forEach((a, i) => { if (tr < (i + 0.4) / 5) return; a.roots.forEach(([re, im]) => { ctx.beginPath(); ctx.strokeStyle = '#000'; ctx.lineWidth = 2; const sx = X(re), sy = Y(im), r = 4.5; if (a.stable) { ctx.moveTo(sx - r, sy - r); ctx.lineTo(sx + r, sy + r); ctx.moveTo(sx - r, sy + r); ctx.lineTo(sx + r, sy - r); } else { ctx.arc(sx, sy, r + 1, 0, 7); } ctx.stroke(); }); const [re, im] = a.roots[0]; if (Math.abs(re) > 1) label(ctx, a.name, X(re) + 9, Y(Math.abs(im)) - 8, '#000', 'left', 8.5, '600'); });
}

/** start when scrolled into view; the button replays; reduced motion shows the finished sheet */
export function animateStability(c, btn) {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches; let t0 = null, vis = false, raf = 0, t = reduce ? T_ALL : 0;
  const frame = (now) => { if (!vis) { raf = 0; return; } if (t0 === null) t0 = now - t * 1000; t = Math.min(T_ALL, (now - t0) / 1000); drawStability(c, t); raf = t < T_ALL ? requestAnimationFrame(frame) : 0; };
  const play = () => { t0 = null; t = reduce ? T_ALL : 0; if (!raf && vis) raf = requestAnimationFrame(frame); else drawStability(c, t); };
  new IntersectionObserver(([e]) => { vis = e.isIntersecting; if (vis && t === 0) play(); else if (vis && !raf && t < T_ALL) raf = requestAnimationFrame(frame); else if (vis) drawStability(c, t); }).observe(c);
  if (btn) btn.onclick = () => { t = 0; play(); };
  addEventListener('resize', () => drawStability(c, t));
  return {draw: (x) => drawStability(c, x === undefined ? t : x)};
}
