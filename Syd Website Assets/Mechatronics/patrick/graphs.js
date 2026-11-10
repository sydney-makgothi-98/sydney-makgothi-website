// The graphs inside the floating bubbles. Every function draws one chart onto a canvas from the live mission (D.sim) and the
// static curves in D.cache. `mini` charts have no axis titles, because they live in a small bubble; the full-screen ones do.
import * as M from './model.js';
import * as C from './charts.js';
import {K, ITEMS, PH_NAMES} from './mission.js';

const COL = C.COL, D2R = Math.PI / 180;
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
const GREEN = '#34d399', RED = '#f87171';

/** Static curves that depend only on the settings, not on the run. */
export function makeCache(surf = 'desk', duty = 0.7, bands = true) {
  return {
    stepOn: M.stepTest({bands: true, surf, duty: 1}), stepOff: M.stepTest({bands: false, surf, duty: 1}),
    tracOn: M.tractive({bands: true, surf, duty: 1}), tracOff: M.tractive({bands: false, surf, duty: 1}),
    power: [0.4, 0.7, 1.0].map((d) => M.powerCurve(d, bands)), powerSel: M.powerCurve(duty, bands),
    ranges: Object.keys(M.WALLS).map((k) => [k, M.maxRangeOf(k)]),
  };
}
function setup(canvas, mini, extraRight = 0) {
  const {ctx, w, h} = C.fit(canvas);
  const r = mini ? {x: 30, y: 8, w: w - 40 - extraRight, h: h - 24} : {x: 52, y: 14, w: w - 74 - extraRight, h: h - 50};
  return {ctx, w, h, r};
}
/** Sample of the run's recorded channels at the latest instant. */
const last = (a) => a[a.length - 1] ?? 0;

/* ------------------------------------------------------------------------------------------------- dynamics ----- */
function speed(canvas, D, mini) {
  const {ctx, r} = setup(canvas, mini), a = D.cache.stepOn, b = D.cache.stepOff;
  const pts = (s, k) => s.t.map((t, i) => [t, s[k][i]]);
  const ymax = Math.max(...a.wr, ...b.wr) * 1.12;
  C.chart(ctx, r, {xr: [0, 1], yr: [0, ymax], nx: mini ? 2 : 5, ny: mini ? 3 : 4, xl: mini ? '' : 'time since full throttle (s)', yl: mini ? '' : 'speed (m/s)', series: [
    {pts: pts(b, 'wr'), color: 'rgba(248,113,113,0.55)', width: 1.2, dash: [4, 4]}, {pts: pts(a, 'wr'), color: 'rgba(52,211,153,0.55)', width: 1.2, dash: [4, 4]},
    {pts: pts(b, 'v'), color: RED, width: 2.4}, {pts: pts(a, 'v'), color: GREEN, width: 2.4}],
    over: [(X, Y) => { if (mini) { C.label(ctx, 'with bands', X(0.98), Y(a.v[a.v.length - 1]) - 9, GREEN, 'right', 9); C.label(ctx, 'bare', X(0.98), Y(b.v[b.v.length - 1]) + 10, RED, 'right', 9); } }]});
  const i = a.t.findIndex((t) => t >= 0.3);
  return `At 0.3 s the banded robot moves at <b>${a.v[i].toFixed(2)} m/s</b>; the bare one at <b>${b.v[i].toFixed(2)} m/s</b> while its wheel surfaces do <b>${b.wr[i].toFixed(2)} m/s</b>. The gap between the dashed and solid red lines is wheel spin.`;
}
function slip(canvas, D, mini) {
  const {ctx, r} = setup(canvas, mini), a = D.cache.stepOn, b = D.cache.stepOff;
  C.chart(ctx, r, {xr: [0, 1], yr: [-0.05, 1.05], nx: mini ? 2 : 5, ny: mini ? 3 : 4, xl: mini ? '' : 'time since full throttle (s)', yl: mini ? '' : 'slip ratio', series: [
    {pts: b.t.map((t, i) => [t, b.slip[i]]), color: RED, width: 2.4, fill: 'rgba(248,113,113,0.1)'}, {pts: a.t.map((t, i) => [t, a.slip[i]]), color: GREEN, width: 2.4}],
    over: [(X, Y) => { C.label(ctx, `peak ${Math.max(...b.slip).toFixed(2)} bare`, X(0.98), Y(Math.max(...b.slip)) - 8, RED, 'right', 10); C.label(ctx, `peak ${Math.max(...a.slip).toFixed(2)} with bands`, X(0.98), Y(0.12), GREEN, 'right', 10); }]});
  return 'Slip ratio = (wheel surface speed − robot speed) ÷ wheel surface speed. Zero is pure rolling; one is a wheel spinning on the spot.';
}
function trac(canvas, D, mini) {
  const {ctx, r} = setup(canvas, mini), on = D.cache.tracOn, off = D.cache.tracOff;
  const ymax = Math.max(on.pts[0][1], on.limit) * 1.2;
  C.chart(ctx, r, {xr: [0, 0.8], yr: [0, ymax], nx: mini ? 2 : 4, ny: mini ? 3 : 4, xl: mini ? '' : 'robot speed (m/s)', yl: mini ? '' : 'force at the ground (N)',
    series: [{pts: on.pts, color: COL.amber, width: 2.4}, {pts: [[0, on.limit], [0.8, on.limit]], color: GREEN, width: 1.6, dash: [6, 4]}, {pts: [[0, off.limit], [0.8, off.limit]], color: RED, width: 1.6, dash: [6, 4]}],
    over: [(X, Y) => { C.label(ctx, 'motor force', X(0.42), Y(on.pts[Math.round(on.pts.length * 0.5)][1]) - 12, COL.amber, 'left', 10); C.label(ctx, 'grip, bands', X(0.79), Y(on.limit) - 9, GREEN, 'right', 10); C.label(ctx, 'grip, bare', X(0.79), Y(off.limit) - 9, RED, 'right', 10); }]});
  return `At stall the two motors push with <b>${on.pts[0][1].toFixed(1)} N</b>. Bare plastic can pass only <b>${off.limit.toFixed(1)} N</b> to the counter; with bands the limit is <b>${on.limit.toFixed(1)} N</b>, so nearly all of it reaches the ground.`;
}
/** The live run: robot speed and wheel-surface speed against time, with the soft-stop gain shaded so a pause is visible. */
function runspeed(canvas, D, mini) {
  const {ctx, r} = setup(canvas, mini), s = D.sim.rec, n = s.n;
  const win = mini ? 14 : 30, t1 = Math.max(win, last(s.t)), t0 = t1 - win;
  let i0 = 0; while (i0 < n && s.t[i0] < t0) i0++;
  const v = [], ws = [], g = [];
  for (let i = i0; i < n; i++) { v.push([s.t[i], (s.vL[i] + s.vR[i]) / 2]); ws.push([s.t[i], 0]); g.push([s.t[i], s.g[i]]); }
  const ymax = 0.5;
  C.chart(ctx, r, {xr: [t0, t1], yr: [-0.25, ymax], nx: mini ? 3 : 6, ny: 4, xl: mini ? '' : 'run time (s)', yl: mini ? '' : 'speed (m/s)', yticks: [-0.2, 0, 0.2, 0.4],
    under: [(X, Y) => { ctx.fillStyle = 'rgba(167,139,250,0.10)'; for (let i = Math.max(1, i0); i < n; i++) { const hgt = 1 - s.g[i]; if (hgt > 0.01) ctx.fillRect(X(s.t[i - 1]), Y(ymax), Math.max(1, X(s.t[i]) - X(s.t[i - 1])) + 0.5, (Y(-0.25) - Y(ymax)) * hgt); } }],
    series: [{pts: v, color: COL.blue, width: 2.2}, {pts: g.map(([t, x]) => [t, x * 0.45 - 0.2]), color: 'rgba(167,139,250,0.9)', width: 1.4, dash: [3, 3]}],
    over: [(X, Y) => { if (v.length) C.dot(ctx, X(last(s.t)), Y(v[v.length - 1][1]), COL.pink, 4); C.label(ctx, 'speed', r.x + 6, r.y + 10, COL.blue, 'left', 9.5); C.label(ctx, 'go-gain (dashed): 1 running, 0 halted', r.x + 50, r.y + 10, COL.accent, 'left', 9.5); }]});
  return `The dashed line is the soft-stop gain. Press <b>PAUSE</b> and it eases from 1 to 0 over 0.8 s, so the speed falls away smoothly instead of dropping to zero in one tick.`;
}

/* --------------------------------------------------------------------------------------------------- power ------ */
function pow(canvas, D, mini) {
  const {ctx, r: r0} = setup(canvas, mini, mini ? 0 : 34), cs = D.cache.power, top = cs[2], sim = D.sim;
  const r = r0;
  const rpmMax = top.pts[top.pts.length - 1].rpm * 1.02;
  const pmax = Math.max(...cs.map((c) => Math.max(...c.pts.map((p) => p.Pm)))) * 1.25;
  const emax = Math.max(...cs.map((c) => Math.max(...c.pts.map((p) => p.Pel)))) * 1.05, k = pmax / emax;
  const colors = ['rgba(251,191,36,0.4)', 'rgba(251,191,36,0.7)', '#fbbf24'];
  const series = [];
  cs.forEach((c, i) => series.push({pts: c.pts.map((p) => [p.rpm, p.Pel * k]), color: 'rgba(154,160,195,' + (0.3 + i * 0.2) + ')', width: 1.2, dash: [4, 4]}));
  cs.forEach((c, i) => series.push({pts: c.pts.map((p) => [p.rpm, p.Pm]), color: colors[i], width: i === 2 ? 2.6 : 1.8}));
  C.chart(ctx, r, {xr: [0, rpmMax], yr: [0, pmax], nx: mini ? 3 : 5, ny: mini ? 3 : 4, xl: mini ? '' : 'wheel speed (rpm)', yl: mini ? '' : 'mechanical power out, per motor (W)', series,
    over: [(X, Y) => {
      if (!mini) [0.4, 0.7, 1.0].forEach((d, i) => { const c = cs[i], pk = c.pts.reduce((a, b) => (b.Pm > a.Pm ? b : a)); C.label(ctx, `${Math.round(d * 100)} %`, X(pk.rpm), Y(pk.Pm) - 9, '#fbbf24', 'center', 10, '600'); });
      const rpm = sim.w * 60 / (2 * Math.PI), pm = sim.Pm / 2, pe = sim.Pel / 2;
      if (pe > 0.05) { C.dot(ctx, X(Math.min(rpm, rpmMax)), Y(pm), COL.pink); C.dot(ctx, X(Math.min(rpm, rpmMax)), Y(Math.min(pe * k, pmax)), COL.blue, 3.5); }
    }]});
  if (!mini) {
    ctx.font = `10px ${C.MONO}`; ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
    C.niceTicks(0, emax, 4).forEach((v) => { const y = r.y + r.h - v * k / pmax * r.h; ctx.fillStyle = COL.faint; ctx.fillText(String(+v.toPrecision(2)), r.x + r.w + 5, y); });
    ctx.save(); ctx.translate(r.x + r.w + 30, r.y + r.h / 2); ctx.rotate(Math.PI / 2); C.label(ctx, 'electrical power in (W), dashed', 0, 0, COL.muted, 'center'); ctx.restore();
  }
  const best = D.cache.powerSel.pts.reduce((a, b) => (b.Pm > a.Pm ? b : a));
  return `At ${Math.round(D.duty * 100)} % throttle one motor delivers at most <b>${best.Pm.toFixed(2)} W</b> at <b>${best.rpm.toFixed(0)} rpm</b>, half its free speed, while drawing about <b>${best.Pel.toFixed(1)} W</b> from the battery: the rest is heat in the windings and gearbox. Pink dot: mechanical power now; blue: electrical.`;
}
function eff(canvas, D, mini) {
  const {ctx, r} = setup(canvas, mini), pts = D.cache.powerSel.pts, sim = D.sim;
  const tmax = Math.max(...pts.map((p) => p.tau)), imax = Math.max(...pts.map((p) => p.I)), emax = Math.max(...pts.map((p) => p.eff)), rpmMax = pts[pts.length - 1].rpm;
  C.chart(ctx, r, {xr: [0, rpmMax], yr: [0, 105], nx: mini ? 3 : 5, ny: 4, xl: mini ? '' : 'wheel speed (rpm)', yl: mini ? '' : '% of maximum', series: [
    {pts: pts.map((p) => [p.rpm, p.I / imax * 100]), color: 'rgba(154,160,195,0.8)', width: 1.5, dash: [4, 4]},
    {pts: pts.map((p) => [p.rpm, Math.max(0, p.tau) / tmax * 100]), color: COL.blue, width: 2.2}, {pts: pts.map((p) => [p.rpm, p.eff / emax * 100]), color: COL.pink, width: 2.2}],
    over: [(X) => {
      C.label(ctx, `torque ${(tmax * 100).toFixed(1)} N·cm at stall`, r.x + 8, r.y + 12, COL.blue, 'left', 10);
      C.label(ctx, `peak efficiency ${(emax * 100).toFixed(0)} %`, r.x + 8, r.y + 27, COL.pink, 'left', 10);
      C.label(ctx, `stall current ${imax.toFixed(2)} A`, r.x + 8, r.y + 42, COL.muted, 'left', 10);
      const rpm = sim.w * 60 / (2 * Math.PI); if (sim.Pel > 0.05) C.vline(ctx, X, Math.min(rpm, rpmMax), r.y, r.y + r.h);
    }]});
  return 'At the chosen throttle the torque falls in a straight line as the wheel speeds up, so power (torque × speed) peaks at half the free speed.';
}
function ptime(canvas, D, mini) {
  const {ctx, r} = setup(canvas, mini), s = D.sim.rec, n = s.n;
  const tEnd = Math.max(20, last(s.t)), ymax = Math.max(4, ...s.Pel) * 1.15;
  const pts = []; const stp = Math.max(1, Math.floor(n / 600)); for (let i = 0; i < n; i += stp) pts.push([s.t[i], s.Pel[i]]);
  C.chart(ctx, r, {xr: [0, tEnd], yr: [0, ymax], nx: mini ? 3 : 6, ny: 4, xl: mini ? '' : 'run time (s)', yl: mini ? '' : 'electrical power (W)',
    series: [{pts, color: '#fbbf24', width: 1.8, fill: 'rgba(251,191,36,0.12)'}],
    over: [(X, Y) => { if (n) { C.vline(ctx, X, last(s.t), r.y, r.y + r.h); C.dot(ctx, X(last(s.t)), Y(last(s.Pel)), COL.pink); } C.label(ctx, `energy so far ${D.sim.energy.toFixed(0)} J`, r.x + r.w - 6, r.y + 12, COL.muted, 'right', 10); }]});
  return 'Both motors plus the electronics. The long flat stretches are the brake, reach, grip and place phases: the motors are stopped and the servos are doing the work.';
}

/* ---------------------------------------------------------------------------------------------------- sound ------ */
export function soundNow(D) {
  const s = D.sim, d = clamp(s.sn.d, 0.05, 4), what = s.sn.what;
  const wall = what === 'wall' ? 'card' : 'wood';                          // the pads and spots are wood; the far wall is cardboard-like
  return {d, psi: 0, wall, what};
}
function rays(canvas, D, mini, now) {
  const {ctx, w, h} = C.fit(canvas), live = soundNow(D), d = live.d, psi = live.psi, wall = live.wall;
  const pad = 14, x0 = pad + (mini ? 6 : 12), cy = h / 2, scale = (w - x0 - 24) / Math.max(d, 0.35);
  const P = (x, y) => [x0 + x * scale, cy - y * scale];
  ctx.fillStyle = 'rgba(167,139,250,0.25)'; ctx.strokeStyle = COL.accent; ctx.lineWidth = 1.5;
  const [fx, fy0] = P(0, 0.1), [, fy1] = P(0, -0.1);
  ctx.fillRect(x0 - 10, fy0, 10, fy1 - fy0); ctx.beginPath(); ctx.moveTo(fx, fy0); ctx.lineTo(fx, fy1); ctx.stroke();
  ctx.setLineDash([3, 5]); ctx.strokeStyle = 'rgba(96,165,250,0.35)'; ctx.lineWidth = 1;
  for (const s of [-1, 1]) { ctx.beginPath(); ctx.moveTo(x0, cy); ctx.lineTo(x0 + Math.cos(M.SOUND.beam) * scale * d * 1.4, cy - s * Math.sin(M.SOUND.beam) * scale * d * 1.4); ctx.stroke(); }
  ctx.setLineDash([]);
  const L = Math.max(0.9, d * 0.7), nx = -1, ny = 0, tx = 0, ty = -1;
  const [wx0, wy0] = P(d + tx * L, ty * L), [wx1, wy1] = P(d - tx * L, -ty * L);
  const wcol = {wood: '#b98e5c', card: '#c89a52'}[wall];
  ctx.strokeStyle = wcol; ctx.lineWidth = 5; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(wx0, wy0); ctx.lineTo(wx1, wy1); ctx.stroke(); ctx.lineCap = 'butt';
  const vis = Math.max(0.35, 2 * d / 2.4), tot = 4.6 * d + 0.7, tau = (now / 1000) % (tot / vis + 0.5), head = vis * tau;
  const th = M.SOUND.thresh, ref = M.SOUND.ref, W = M.WALLS[wall];
  let recv = 0;
  const NR = mini ? 31 : 61;
  for (let i = 0; i < NR; i++) {
    const a0 = (i / (NR - 1) * 2 - 1) * 42 * D2R, wgt0 = Math.exp(-Math.pow(a0 / (M.SOUND.beam * 1.7), 2));
    let x = 0.0005, y = 0, dx = Math.cos(a0), dy = Math.sin(a0), s = 0, kw = 0, kr = 0;
    for (let seg = 0; seg < 5; seg++) {
      let best = Infinity, kind = null;
      const dn = dx * nx + dy * ny;
      if (dn < -1e-9) { const t = ((d - x) * nx + (0 - y) * ny) / dn; if (t > 1e-6) { const px = x + dx * t, py = y + dy * t, off = (px - d) * tx + py * ty; if (Math.abs(off) <= L) { best = t; kind = 'wall'; } } }
      if (dx < -1e-9) { const t = (0 - x) / dx; if (t > 1e-6) { const py = y + dy * t; if (Math.abs(py) < 0.1 && t < best) { best = t; kind = 'robot'; } } }
      const len = Number.isFinite(best) ? best : 6 * d, s0 = s, s1 = s + len;
      { const [ax, ay] = P(x, y), [bx, by] = P(x + dx * len, y + dy * len); ctx.strokeStyle = 'rgba(125,211,252,0.05)'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(bx, by); ctx.stroke(); }
      if (head > s0 && head <= s1 + 0.0001) {
        const hs = Math.min(head, s1), px = x + dx * (hs - s0), py = y + dy * (hs - s0);
        const amp = wgt0 * (ref / Math.max(hs, ref)) * Math.pow(10, -M.SOUND.absDbPerM * hs / 20) * Math.pow(W.R, kw) * Math.pow(0.8, kr);
        const db = 20 * Math.log10(Math.max(amp, 1e-9) / th), al = clamp((db + 8) / 62, 0.04, 1);
        const [sx, sy] = P(px, py), tl = Math.min(0.08, 0.5 / scale + 0.02), [ex, ey] = P(px - dx * tl, py - dy * tl);
        ctx.strokeStyle = `rgba(${db > 35 ? '250,204,21' : '96,165,250'},${al.toFixed(3)})`; ctx.lineWidth = 1.4 + al * 1.6;
        ctx.beginPath(); ctx.moveTo(sx, sy); ctx.lineTo(ex, ey); ctx.stroke();
        if (px < 0.06 && Math.abs(py) < 0.05 && dx < 0 && kw > 0) recv = Math.max(recv, al);
      }
      if (!kind) break;
      s = s1; x += dx * len; y += dy * len;
      if (kind === 'wall') { const dd = dx * nx + dy * ny; dx -= 2 * dd * nx; dy -= 2 * dd * ny; kw++; } else { dx = -dx; kr++; }
      if (s > 7 * d + 1) break;
    }
  }
  if (recv > 0.04) { const [rx, ry] = P(0, 0); const g = ctx.createRadialGradient(rx, ry, 0, rx, ry, 24); g.addColorStop(0, `rgba(52,211,153,${recv})`); g.addColorStop(1, 'rgba(52,211,153,0)'); ctx.fillStyle = g; ctx.beginPath(); ctx.arc(rx, ry, 24, 0, 7); ctx.fill(); }
  C.label(ctx, `${(d * 100).toFixed(0)} cm`, (x0 + P(d, 0)[0]) / 2, cy - 10, COL.muted, 'center', 10);
  C.label(ctx, live.what === 'wall' ? 'FAR WALL' : live.what === 'none' ? 'NO ECHO' : live.what === 'spot' ? 'BREAKFAST SPOT' : 'PANTRY PAD', w - 8, 12, wcol, 'right', 9);
  return 'Dots are the 40 kHz burst travelling, bright when strong. Watch them thin out with distance and dim at the wall; the green glow is the echo reaching the receiver.';
}
function env(canvas, D, mini) {
  const {ctx, r} = setup(canvas, mini), live = soundNow(D), e = M.envelope(live.d, live.psi, live.wall, 22);
  const db = (a) => 20 * Math.log10(Math.max(a, 1e-9) / M.SOUND.thresh);
  const pts = e.pts.map(([t, a]) => [t * 1000, clamp(db(a), -12, 75)]);
  const bd = M.budget(live.d, live.psi, live.wall);
  C.chart(ctx, r, {xr: [0, e.tEnd * 1000], yr: [-12, 75], yticks: [-10, 0, 20, 40, 60], nx: mini ? 3 : 6, xl: mini ? '' : 'time after the burst (ms)', yl: mini ? '' : 'signal (dB above threshold)', series: [{pts, color: COL.accent, width: 2, fill: 'rgba(167,139,250,0.12)'}],
    over: [(X, Y) => {
      ctx.setLineDash([5, 4]); ctx.strokeStyle = COL.amber; ctx.lineWidth = 1.1; ctx.beginPath(); ctx.moveTo(r.x, Y(0)); ctx.lineTo(r.x + r.w, Y(0)); ctx.stroke(); ctx.setLineDash([]);
      C.label(ctx, 'detection threshold', r.x + 8, Y(0) + 9, COL.amber, 'left', 9);
      e.echoes.slice(0, 2).forEach((q, i) => { const v = db(q.a); if (q.t * 1000 < e.tEnd * 1000) { C.dot(ctx, X(q.t * 1000), Y(clamp(v, -12, 75)), i ? COL.pink : GREEN, 4); if (!mini) C.label(ctx, `${i ? '2nd' : '1st'} echo ${v.toFixed(0)} dB`, X(q.t * 1000) + 8, Y(clamp(v, -10, 70)) - 10, i ? COL.pink : GREEN, 'left', 10, '600'); } });
    }]});
  return bd.detected ? `The first echo arrives <b>${(e.echoes[0].t * 1000).toFixed(2)} ms</b> after the burst: distance = time × ${e.c.toFixed(0)} m/s ÷ 2 = <b>${(live.d * 100).toFixed(0)} cm</b>. The second, weaker echo has crossed the gap twice.` : `The first echo is <b>below the threshold</b>: the sensor reports nothing.`;
}
function budget(canvas, D, mini) {
  const {ctx, w, h} = C.fit(canvas), live = soundNow(D), b = M.budget(live.d, live.psi, live.wall);
  const parts = [['spreading', b.spread, COL.blue], ['air', b.air, COL.amber], ['wall absorbs', b.surf, COL.pink], ['off-axis', b.aim, COL.red]];
  const total = Math.max(b.total, 1), x0 = 12, bw = w - 24, y0 = mini ? 30 : 40, bh = mini ? 18 : 26;
  let x = x0;
  parts.forEach(([n, v, col]) => {
    const ww = v / total * bw; if (ww <= 0) return;
    ctx.fillStyle = col; ctx.globalAlpha = 0.85; ctx.fillRect(x, y0, Math.max(ww, 1), bh); ctx.globalAlpha = 1;
    if (ww > 56 && !mini) C.label(ctx, n, x + 5, y0 + bh / 2 - 0.5, '#0b0820', 'left', 9.5, '600');
    C.label(ctx, `${v.toFixed(1)}`, x + ww / 2, y0 + bh + 12, col, 'center', 9.5);
    x += ww;
  });
  C.label(ctx, `total loss ${b.total.toFixed(1)} dB: only ${(Math.pow(10, -b.total / 10) * 100).toExponential(1)} % returns`, x0, 14, COL.text, 'left', mini ? 9.5 : 10.5, '600');
  if (!mini) C.label(ctx, 'blue spreading · amber air · pink wall absorbs · red off-axis', x0, y0 + bh + 38, COL.muted, 'left', 9.5);
  return 'Every 3 dB is half the energy. Spreading dominates: the burst fans out over the surface of a growing sphere.';
}
function range(canvas, D, mini) {
  const {ctx, w} = C.fit(canvas), live = soundNow(D);
  const x0 = mini ? 70 : 96, bw = w - x0 - 52, rowH = mini ? 18 : 24, maxR = 5;
  D.cache.ranges.forEach(([k, rg], i) => {
    const y = 8 + i * rowH, cur = k === live.wall;
    ctx.fillStyle = cur ? 'rgba(167,139,250,0.9)' : 'rgba(154,160,195,0.35)'; ctx.fillRect(x0, y, rg / maxR * bw, 12);
    C.label(ctx, M.WALLS[k].name, 6, y + 6, cur ? '#fff' : COL.muted, 'left', 9, cur ? '600' : '');
    C.label(ctx, `${rg.toFixed(1)} m`, x0 + rg / maxR * bw + 5, y + 6, cur ? COL.accent : COL.muted, 'left', 9.5);
  });
  const xd = x0 + clamp(live.d, 0, maxR) / maxR * bw; ctx.strokeStyle = GREEN; ctx.setLineDash([3, 4]); ctx.beginPath(); ctx.moveTo(xd, 2); ctx.lineTo(xd, 8 + 4 * rowH - 4); ctx.stroke(); ctx.setLineDash([]);
  return 'The furthest each surface can be seen: the first echo must stay above the detection threshold. The green line is the current reading.';
}

/* -------------------------------------------------------------------------------------------------- map --------- */
function map(canvas, D, mini) {
  const {ctx, w, h} = C.fit(canvas), s = D.sim;
  const X0 = -1.0, X1 = 0.95, Z0 = -0.78, Z1 = 0.78;                          // the part of the counter that matters
  const sc = Math.min((w - 16) / (X1 - X0), (h - 16) / (Z1 - Z0)), ox = (w - sc * (X1 - X0)) / 2, oy = (h - sc * (Z1 - Z0)) / 2;
  const P = (x, z) => [ox + (x - X0) * sc, oy + (Z1 - z) * sc];             // x to the right, z up (the robot's left when it faces +x)
  ctx.fillStyle = 'rgba(255,255,255,0.03)'; ctx.fillRect(ox, oy, sc * (X1 - X0), sc * (Z1 - Z0));
  const pad = K.pad.hx * sc;
  const [mx0, my0] = P(K.kitchenX - 0.25, 0.7), [mx1, my1] = P(K.kitchenX + 0.2, -0.7);
  ctx.fillStyle = 'rgba(233,226,208,0.12)'; ctx.fillRect(mx0, my0, mx1 - mx0, my1 - my0);
  if (!mini) { C.label(ctx, 'BREAKFAST AREA', mx0 + 6, my0 + 10, 'rgba(233,226,208,0.7)', 'left', 9); C.label(ctx, 'PANTRY', P(K.pantryX, 0)[0] + 18, my0 + 10, 'rgba(96,165,250,0.8)', 'left', 9); }
  K.zs.forEach((z, i) => {
    for (const [x, col] of [[K.pantryX, 'rgba(185,142,92,0.7)'], [K.kitchenX, 'rgba(244,241,234,0.5)']]) { const [px, py] = P(x, z); ctx.fillStyle = col; ctx.fillRect(px - pad, py - pad, pad * 2, pad * 2); }
    if (!mini) C.label(ctx, ITEMS[i].name, P(K.pantryX, z)[0] + pad + 4, P(K.pantryX, z)[1], COL.amber, 'left', 9);
  });
  // the path so far
  ctx.strokeStyle = 'rgba(96,165,250,0.75)'; ctx.lineWidth = 1.6; ctx.beginPath();
  const stp = Math.max(1, Math.floor(s.rec.n / 500));
  for (let i = 0; i < s.rec.n; i += stp) { const [px, py] = P(s.rec.x[i], s.rec.z[i]); i ? ctx.lineTo(px, py) : ctx.moveTo(px, py); }
  ctx.stroke();
  // items
  const icol = ['#efe0c6', '#e8eaee', '#c4491a', '#c2181f', '#9fd3ff'];
  s.items.forEach((q, i) => { const [px, py] = P(q.x, q.z); ctx.fillStyle = icol[i]; ctx.beginPath(); ctx.arc(px, py, q.state === 1 ? 5 : 4, 0, 7); ctx.fill(); if (q.state === 1) { ctx.strokeStyle = COL.pink; ctx.lineWidth = 1.5; ctx.stroke(); } });
  // the robot, with its sonar cone
  const [rx, ry] = P(s.x, s.z), ang = -s.yaw, len = clamp(s.sn.d, 0.05, 0.6) * sc;
  ctx.save(); ctx.translate(rx, ry); ctx.rotate(ang);
  ctx.fillStyle = 'rgba(96,165,250,0.14)'; ctx.beginPath(); ctx.moveTo(M.R.sensorX * sc, 0); ctx.arc(M.R.sensorX * sc, 0, len, -M.SOUND.beam, M.SOUND.beam); ctx.closePath(); ctx.fill();
  ctx.fillStyle = '#f2b400'; ctx.strokeStyle = '#070a1a'; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.roundRect(-0.1 * sc, -0.1 * sc, 0.27 * sc, 0.2 * sc, 3); ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#070a1a'; ctx.beginPath(); ctx.moveTo(0.16 * sc, 0); ctx.lineTo(0.09 * sc, -0.035 * sc); ctx.lineTo(0.09 * sc, 0.035 * sc); ctx.closePath(); ctx.fill();
  ctx.restore();
  const placed = s.items.filter((q) => q.state === 2).length;
  C.label(ctx, `${placed} of ${ITEMS.length} on the table`, w - 8, 12, COL.green, 'right', 10, '600');
  return `A top view of the counter. The blue line is where Patrick has driven; the cone is what his sonar sees. <b>${placed}</b> of ${ITEMS.length} ingredients are laid out so far.`;
}

export const GRAPHS = {speed, slip, trac, runspeed, pow, eff, ptime, rays, env, budget, range, map};
