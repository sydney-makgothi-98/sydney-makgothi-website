// The project management page: a live Gantt chart you can reshape by dragging bars, the network diagram that follows it, the S-curve and crew
// histogram, and a Monte Carlo risk run. Every picture reads from one state object (guide, Chapter 5): the duration of each task.
import {TASKS, DEPTS, cpm, crashStep, sCurves, crewByDay, monteCarlo, histogram} from './cpm.js';
import {chart, fit, label, dot, vline, COL, fmt, MONO} from '../chart.js';

const $ = (id) => document.getElementById(id);
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const BASE = Object.fromEntries(TASKS.map((t) => [t.id, t.dur]));
const base = cpm(TASKS, BASE);
const S = {dur: {...BASE}, sel: null, hover: null, day: 0, group: false, playing: false, mc: null, buffer: 0, crashCost: 0, drag: null, r: null};
const deptKeys = Object.keys(DEPTS);
const col = (t) => DEPTS[t.dept].color;
function recalc() { S.r = cpm(TASKS, S.dur); }
recalc();

/* ----------------------------------------------------------------------------------------------- readouts ---- */
function readouts() {
  const r = S.r, crit = r.tasks.filter((t) => t.crit).length, cost = sCurves(r).total, d = Math.round(S.day);
  const crew = crewByDay(r), onSite = deptKeys.reduce((s, k) => s + (crew[k][Math.min(d, r.finish - 1)] || 0), 0);
  const done = r.tasks.reduce((s, t) => s + Math.min(t.d, Math.max(0, d - t.es)) * t.cost, 0) / cost;
  const delta = r.finish - base.finish;
  $('r-finish').textContent = r.finish; $('r-delta').textContent = delta === 0 ? 'on baseline' : (delta > 0 ? '+' : '−') + Math.abs(delta) + ' d vs baseline';
  $('r-delta').className = 'sub ' + (delta > 0 ? 'bad' : delta < 0 ? 'good' : '');
  $('r-crit').textContent = crit + ' of ' + r.tasks.length; $('r-cost').textContent = 'R ' + (cost / 1000).toFixed(2) + ' M';
  $('r-extra').textContent = S.crashCost ? '+ R ' + S.crashCost.toFixed(0) + ' k crashing' : 'no crashing';
  $('r-crew').textContent = onSite; $('r-day').textContent = d; $('r-done').textContent = Math.round(done * 100) + '%';
  $('day').max = r.finish; $('day').value = S.day;
  const t = S.sel && r.by[S.sel];
  $('sel-info').innerHTML = t ? `<b style="color:${col(t)}">${t.id}</b> ${t.name}<br><span>${DEPTS[t.dept].name} · ${t.d} d (plan ${BASE[t.id]}) · ES ${t.es} EF ${t.ef} · LS ${t.ls} LF ${t.lf} · float ${t.float} d · ${t.crew} people · R ${t.cost} k/day · after ${t.pred.join(', ') || 'start'}</span>` : '<span>Click a task in any chart to follow it through all of them. Drag the right end of a bar to change how long it takes.</span>';
}

/* ----------------------------------------------------------------------------------------------- the Gantt ---- */
const gc = $('gantt');
let G = {};
function ganttOrder() {
  const rows = [...S.r.tasks];
  if (S.group) rows.sort((a, b) => deptKeys.indexOf(a.dept) - deptKeys.indexOf(b.dept) || a.es - b.es);
  else rows.sort((a, b) => a.es - b.es || a.id.localeCompare(b.id));
  return rows;
}
function drawGantt() {
  const {ctx, w, h} = fit(gc), r = S.r, rows = ganttOrder(), small = w < 560;
  const LW = small ? 96 : 230, TOP = 34, RH = Math.max(18, Math.min(26, (h - TOP - 8) / rows.length)), T = Math.max(r.finish, base.finish) + 6, X0 = LW + 8, DW = (w - X0 - 12) / T;
  G = {rows, LW, TOP, RH, DW, X0, T};
  // week grid and axis
  ctx.font = `10px ${MONO}`; ctx.textBaseline = 'middle';
  for (let d = 0; d <= T; d += 20) { const x = X0 + d * DW; ctx.strokeStyle = d % 100 === 0 ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.04)'; ctx.beginPath(); ctx.moveTo(x, TOP - 4); ctx.lineTo(x, TOP + rows.length * RH); ctx.stroke(); ctx.fillStyle = COL.faint; ctx.textAlign = 'center'; ctx.fillText('d' + d, x, 14); }
  const y = (i) => TOP + i * RH, idx = Object.fromEntries(rows.map((t, i) => [t.id, i]));
  // department bands when grouped
  if (S.group) { let last = null; rows.forEach((t, i) => { if (t.dept !== last) { last = t.dept; ctx.fillStyle = col(t) + '14'; const n = rows.filter((q) => q.dept === t.dept).length; ctx.fillRect(0, y(i), w, n * RH); } }); }
  // baseline ghost bars
  rows.forEach((t, i) => { const b = base.by[t.id]; ctx.fillStyle = 'rgba(255,255,255,0.07)'; ctx.fillRect(X0 + b.es * DW, y(i) + RH - 5, b.d * DW, 3); });
  // dependency links
  ctx.lineWidth = 1;
  for (const t of rows) for (const p of t.pred) {
    const pr = r.by[p], x1 = X0 + pr.ef * DW, x2 = X0 + t.es * DW, y1 = y(idx[p]) + RH / 2, y2 = y(idx[t.id]) + RH / 2, on = (pr.crit && t.crit) || S.sel === t.id || S.sel === p;
    ctx.strokeStyle = on ? (pr.crit && t.crit ? 'rgba(251,191,36,0.85)' : 'rgba(255,255,255,0.55)') : 'rgba(255,255,255,0.1)';
    ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(Math.min(x1 + 6, x2 - 2), y1); ctx.lineTo(Math.min(x1 + 6, x2 - 2), y2); ctx.lineTo(x2 - 1, y2); ctx.stroke();
  }
  // bars
  rows.forEach((t, i) => {
    const x = X0 + t.es * DW, bw = Math.max(2, t.d * DW), by = y(i) + 3, bh = RH - 8, hot = S.hover === t.id || S.sel === t.id;
    ctx.textAlign = 'right'; ctx.fillStyle = hot ? '#fff' : t.crit ? '#fde68a' : COL.muted; ctx.font = `${hot ? '600 ' : ''}${small ? 9 : 10.5}px ${MONO}`;
    const name = small ? t.id : `${t.id}  ${t.name.length > 28 ? t.name.slice(0, 27) + '…' : t.name}`; ctx.fillText(name, LW, y(i) + RH / 2);
    if (t.float > 0) { ctx.fillStyle = col(t) + '22'; ctx.fillRect(x + bw, by + 2, t.float * DW, bh - 4); ctx.strokeStyle = col(t) + '55'; ctx.setLineDash([2, 3]); ctx.strokeRect(x + bw + 0.5, by + 2.5, t.float * DW - 1, bh - 5); ctx.setLineDash([]); }
    const g = ctx.createLinearGradient(0, by, 0, by + bh); g.addColorStop(0, col(t)); g.addColorStop(1, col(t) + 'aa');
    ctx.fillStyle = g; ctx.beginPath(); ctx.roundRect(x, by, bw, bh, 3); ctx.fill();
    if (t.crit) { ctx.strokeStyle = '#fff'; ctx.lineWidth = 1.4; ctx.beginPath(); ctx.roundRect(x, by, bw, bh, 3); ctx.stroke(); ctx.lineWidth = 1; }
    const done = Math.min(t.d, Math.max(0, S.day - t.es)); if (done > 0) { ctx.fillStyle = 'rgba(6,8,24,0.45)'; ctx.fillRect(x, by + bh - 4, done * DW, 4); }
    if (S.drag && S.drag.id === t.id) { ctx.fillStyle = '#fff'; ctx.fillRect(x + bw - 2, by - 1, 3, bh + 2); }
    if (bw > 44) { ctx.fillStyle = '#0b0e22'; ctx.textAlign = 'left'; ctx.font = `600 9.5px ${MONO}`; ctx.fillText(t.d + ' d', x + 5, by + bh / 2 + 0.5); }
  });
  // today
  const tx = X0 + S.day * DW; ctx.strokeStyle = '#fff'; ctx.lineWidth = 1.2; ctx.setLineDash([4, 3]); ctx.beginPath(); ctx.moveTo(tx, TOP - 6); ctx.lineTo(tx, TOP + rows.length * RH); ctx.stroke(); ctx.setLineDash([]);
  ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.moveTo(tx - 5, TOP - 12); ctx.lineTo(tx + 5, TOP - 12); ctx.lineTo(tx, TOP - 5); ctx.fill();
  // finish flag
  const fx = X0 + r.finish * DW; ctx.fillStyle = COL.amber; ctx.fillRect(fx, TOP - 4, 1.5, rows.length * RH + 4); label(ctx, 'finish d' + r.finish, Math.min(fx, w - 60), TOP + rows.length * RH + 10, COL.amber, fx > w - 80 ? 'right' : 'center', 10, '600');
}
function rowAt(cy) { if (!G.rows) return null; const i = Math.floor((cy - G.TOP) / G.RH); return G.rows[i] || null; }
function tip(e, html) { const el = $('tip'); if (!html) { el.classList.remove('on'); return; } el.innerHTML = html; el.classList.add('on'); const pad = 14, w = el.offsetWidth; el.style.left = Math.min(innerWidth - w - 8, e.clientX + pad) + 'px'; el.style.top = e.clientY + 18 + 'px'; }
const tipHtml = (t) => `<b style="color:${col(t)}">${t.id} · ${t.name}</b><br>${DEPTS[t.dept].name}<br>${t.d} d${t.d !== BASE[t.id] ? ' (plan ' + BASE[t.id] + ')' : ''} · days ${t.es}–${t.ef}<br>float ${t.float} d${t.crit ? ' · <u>critical</u>' : ''}`;
gc.addEventListener('pointermove', (e) => {
  const rc = gc.getBoundingClientRect(), x = e.clientX - rc.left, y = e.clientY - rc.top;
  if (S.drag) { const nd = Math.max(1, Math.round((x - G.X0) / G.DW - S.r.by[S.drag.id].es)); if (nd !== S.dur[S.drag.id]) { S.dur[S.drag.id] = nd; S.crashCost = 0; recalc(); redraw(); } return; }
  const t = rowAt(y); S.hover = t ? t.id : null;
  const onEdge = t && Math.abs(x - (G.X0 + t.ef * G.DW)) < 7 && y > G.TOP;
  gc.style.cursor = onEdge ? 'ew-resize' : t ? 'pointer' : 'default'; tip(e, t ? tipHtml(t) : null); drawGantt(); drawNet();
});
gc.addEventListener('pointerdown', (e) => {
  const rc = gc.getBoundingClientRect(), x = e.clientX - rc.left, y = e.clientY - rc.top, t = rowAt(y);
  if (t && Math.abs(x - (G.X0 + t.ef * G.DW)) < 9) { S.drag = {id: t.id}; gc.setPointerCapture(e.pointerId); S.sel = t.id; }
  else if (t) S.sel = t.id; else if (x > G.X0) { S.day = Math.max(0, Math.min(S.r.finish, (x - G.X0) / G.DW)); }
  redraw();
});
gc.addEventListener('pointerup', () => { S.drag = null; redraw(); });
gc.addEventListener('pointerleave', () => { S.hover = null; tip(null, null); redraw(); });

/* ------------------------------------------------------------------------------------------ the network ---- */
const nc = $('net');
let N = {};
function drawNet() {
  const wrap = $('net-wrap'), r = S.r, levels = Math.max(...r.tasks.map((t) => t.level)) + 1, NW = 92, NH = 50, CW = 124, RH = 64;
  const perLevel = Array.from({length: levels}, () => []);
  for (const t of r.tasks) perLevel[t.level].push(t);
  perLevel.forEach((a) => a.sort((p, q) => deptKeys.indexOf(p.dept) - deptKeys.indexOf(q.dept) || p.id.localeCompare(q.id)));
  const rowsMax = Math.max(...perLevel.map((a) => a.length)), W = Math.max(wrap.clientWidth, levels * CW + 20), H = rowsMax * RH + 20;
  nc.style.width = W + 'px'; nc.style.height = H + 'px';
  const {ctx} = fit(nc);
  const pos = {}; perLevel.forEach((a, li) => a.forEach((t, k) => { const off = (rowsMax - a.length) * RH / 2; pos[t.id] = {x: 14 + li * CW, y: 10 + off + k * RH}; }));
  N = {pos, NW, NH};
  const focus = S.sel || S.hover, near = new Set();
  if (focus) { const up = (id) => { near.add(id); r.by[id].pred.forEach(up); }, dn = (id) => { near.add(id); r.by[id].succ.forEach(dn); }; up(focus); dn(focus); }
  for (const t of r.tasks) for (const p of t.pred) {
    const a = pos[p], b = pos[t.id], crit = r.by[p].crit && t.crit, lit = focus && near.has(p) && near.has(t.id);
    ctx.strokeStyle = crit ? 'rgba(251,191,36,0.9)' : lit ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.14)'; ctx.lineWidth = crit || lit ? 1.8 : 1;
    const x1 = a.x + NW, y1 = a.y + NH / 2, x2 = b.x, y2 = b.y + NH / 2, mx = (x1 + x2) / 2;
    ctx.beginPath(); ctx.moveTo(x1, y1); ctx.bezierCurveTo(mx, y1, mx, y2, x2, y2); ctx.stroke();
    ctx.fillStyle = ctx.strokeStyle; ctx.beginPath(); ctx.moveTo(x2, y2); ctx.lineTo(x2 - 6, y2 - 3.5); ctx.lineTo(x2 - 6, y2 + 3.5); ctx.fill();
  }
  ctx.lineWidth = 1;
  for (const t of r.tasks) {
    const p = pos[t.id], dim = focus && !near.has(t.id), hot = S.sel === t.id || S.hover === t.id;
    ctx.globalAlpha = dim ? 0.3 : 1; ctx.fillStyle = '#0d1230'; ctx.strokeStyle = t.crit ? COL.amber : col(t) + 'aa'; ctx.lineWidth = t.crit ? 2 : 1.2;
    ctx.beginPath(); ctx.roundRect(p.x, p.y, NW, NH, 5); ctx.fill(); ctx.stroke();
    ctx.fillStyle = col(t) + (t.crit ? 'ff' : '66'); ctx.fillRect(p.x + 1, p.y + 1, 5, NH - 2);
    ctx.fillStyle = '#fff'; ctx.font = `600 10px ${MONO}`; ctx.textAlign = 'left'; ctx.textBaseline = 'middle'; ctx.fillText(`${t.id}  ${t.d} d`, p.x + 12, p.y + 11);
    ctx.fillStyle = COL.muted; ctx.font = `9px ${MONO}`; ctx.fillText(`${t.es}`, p.x + 12, p.y + 27); ctx.textAlign = 'right'; ctx.fillText(`${t.ef}`, p.x + NW - 6, p.y + 27);
    ctx.fillStyle = t.crit ? COL.amber : COL.faint; ctx.textAlign = 'left'; ctx.fillText(`${t.ls}`, p.x + 12, p.y + 40); ctx.textAlign = 'right'; ctx.fillText(`${t.lf}`, p.x + NW - 6, p.y + 40);
    ctx.textAlign = 'center'; ctx.fillStyle = t.crit ? '#fde68a' : COL.faint; ctx.fillText(`f ${t.float}`, p.x + NW / 2, p.y + 33);
    if (hot) { ctx.strokeStyle = '#fff'; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.roundRect(p.x - 2, p.y - 2, NW + 4, NH + 4, 6); ctx.stroke(); }
    ctx.globalAlpha = 1;
  }
}
function nodeAt(e) { const rc = nc.getBoundingClientRect(), x = e.clientX - rc.left, y = e.clientY - rc.top; return S.r.tasks.find((t) => { const p = N.pos && N.pos[t.id]; return p && x >= p.x && x <= p.x + N.NW && y >= p.y && y <= p.y + N.NH; }) || null; }
nc.addEventListener('pointermove', (e) => { const t = nodeAt(e); S.hover = t ? t.id : null; nc.style.cursor = t ? 'pointer' : 'default'; tip(e, t ? tipHtml(t) : null); drawGantt(); drawNet(); });
nc.addEventListener('pointerleave', () => { S.hover = null; tip(null, null); redraw(); });
nc.addEventListener('click', (e) => { const t = nodeAt(e); S.sel = t ? (S.sel === t.id ? null : t.id) : null; redraw(); });

/* ------------------------------------------------------------------ S-curve (the banana) and crew histogram ---- */
function drawScurve() {
  const {ctx, w, h} = fit($('scurve')), r = S.r, c = sCurves(r), br = sCurves(base), T = Math.max(r.finish, base.finish);
  const pts = (a) => Array.from({length: Math.min(a.length, T + 1)}, (_, d) => [d, a[d] / 1000]);
  const max = c.total / 1000 * 1.05, e = pts(c.early), l = pts(c.late);
  const {X, Y} = chart(ctx, {x: 52, y: 12, w: w - 66, h: h - 48}, {xr: [0, T + 4], yr: [0, max], xl: 'day', yl: 'cumulative cost, R million', nx: 6, ny: 4,
    under: [(X, Y) => { ctx.beginPath(); e.forEach(([d, v], i) => (i ? ctx.lineTo(X(d), Y(v)) : ctx.moveTo(X(d), Y(v)))); [...l].reverse().forEach(([d, v]) => ctx.lineTo(X(d), Y(v))); ctx.closePath(); ctx.fillStyle = 'rgba(251,191,36,0.13)'; ctx.fill(); }],
    series: [{pts: pts(br.early), color: 'rgba(255,255,255,0.25)', width: 1.2, dash: [3, 4]}, {pts: l, color: COL.blue, width: 1.8}, {pts: e, color: COL.amber, width: 2.4}],
    over: [(X, Y) => { vline(ctx, X, S.day, 0, h - 30, 'rgba(255,255,255,0.5)'); const d = Math.min(Math.round(S.day), e.length - 1); dot(ctx, X(d), Y(e[d][1]), COL.amber); dot(ctx, X(d), Y(l[d][1]), COL.blue); }]});
  label(ctx, 'earliest start', X(T * 0.52), Y(max * 0.82), COL.amber, 'left', 10); label(ctx, 'latest start', X(T * 0.68), Y(max * 0.28), COL.blue, 'left', 10);
  label(ctx, 'the band between them is the schedule float, in money', X(4), Y(max * 0.95), COL.muted, 'left', 10);
}
function drawCrew() {
  const {ctx, w, h} = fit($('crew')), r = S.r, crew = crewByDay(r), T = r.finish;
  const stacks = Array.from({length: T}, (_, d) => deptKeys.reduce((a, k) => (a.push((a.length ? a[a.length - 1] : 0) + crew[k][d]), a), []));
  const peak = Math.max(...stacks.map((s) => s[s.length - 1])), ymax = Math.ceil(peak / 10) * 10 + 10;
  const {X, Y} = chart(ctx, {x: 52, y: 12, w: w - 66, h: h - 48}, {xr: [0, Math.max(T, base.finish) + 4], yr: [0, ymax], xl: 'day', yl: 'people on site', nx: 6, ny: 4,
    under: [(X, Y) => { deptKeys.forEach((k, ki) => { ctx.beginPath(); ctx.moveTo(X(0), Y(0)); for (let d = 0; d < T; d++) { const v = stacks[d][ki]; ctx.lineTo(X(d), Y(v)); ctx.lineTo(X(d + 1), Y(v)); } ctx.lineTo(X(T), Y(0)); for (let d = T - 1; d >= 0; d--) { const v = ki ? stacks[d][ki - 1] : 0; ctx.lineTo(X(d + 1), Y(v)); ctx.lineTo(X(d), Y(v)); } ctx.closePath(); ctx.fillStyle = DEPTS[k].color + 'bb'; ctx.fill(); }); }],
    over: [(X, Y) => { vline(ctx, X, S.day, 0, h - 30, 'rgba(255,255,255,0.6)'); const pk = stacks.findIndex((s) => s[s.length - 1] === peak); label(ctx, 'peak ' + peak, X(pk + 4), Y(peak) - 8, '#fff', 'left', 10, '600'); }]});
}

/* ----------------------------------------------------------------------------------------------- Monte Carlo ---- */
function drawMC() {
  const m = S.mc; const hc = $('mc-hist'), kc = $('mc-crit');
  if (!m) { const {ctx, w, h} = fit(hc); label(ctx, 'press "Run 3000 simulations"', w / 2, h / 2, COL.muted, 'center', 12); fit(kc); return; }
  const plan = S.r.finish + S.buffer, lo = Math.floor(m.min / 5) * 5 - 5, bins = Math.ceil((Math.ceil(m.max / 5) * 5 + 5 - lo) / 2), hi = lo + bins * 2, hist = histogram(m.finishes, lo, hi, bins), mx = Math.max(...hist);
  const sorted = Float64Array.from(m.finishes).sort(), pOn = sorted.filter((v) => v <= plan).length / sorted.length;
  {
    const {ctx, w, h} = fit(hc);
    const {X, Y} = chart(ctx, {x: 44, y: 14, w: w - 58, h: h - 50}, {xr: [lo, hi], yr: [0, mx * 1.12], xl: 'finish day', yl: 'runs', nx: 7, ny: 3, yfmt: (v) => v,
      under: [(X, Y) => { hist.forEach((c, i) => { const d0 = lo + i * 2, on = d0 + 2 <= plan; ctx.fillStyle = on ? 'rgba(52,211,153,0.7)' : 'rgba(251,191,36,0.6)'; ctx.fillRect(X(d0) + 0.5, Y(c), X(d0 + 2) - X(d0) - 1, Y(0) - Y(c)); }); }],
      over: [(X, Y) => { vline(ctx, X, base.finish, 0, h - 36, '#fff'); label(ctx, 'plan ' + base.finish, X(base.finish) - 5, 22, '#fff', 'right', 10, '600'); vline(ctx, X, m.p50, 0, h - 36, COL.blue); label(ctx, 'P50 ' + m.p50, X(m.p50) + 5, 38, COL.blue, 'left', 10); vline(ctx, X, m.p80, 0, h - 36, COL.pink); label(ctx, 'P80 ' + m.p80, X(m.p80) + 5, 54, COL.pink, 'left', 10); vline(ctx, X, m.p90, 0, h - 36, COL.red); label(ctx, 'P90 ' + m.p90, X(m.p90) + 5, 70, COL.red, 'left', 10); }]});
  }
  {
    const {ctx, w, h} = fit(kc), items = TASKS.map((t) => [t, m.crit[t.id]]).sort((a, b) => b[1] - a[1]).slice(0, 12), rh = (h - 8) / items.length;
    items.forEach(([t, v], i) => { const y = 4 + i * rh; ctx.fillStyle = COL.muted; ctx.font = `10px ${MONO}`; ctx.textAlign = 'right'; ctx.textBaseline = 'middle'; ctx.fillText(`${t.id} ${t.name.slice(0, 20)}`, 150, y + rh / 2); ctx.fillStyle = col(t) + '33'; ctx.fillRect(158, y + 3, w - 200, rh - 6); ctx.fillStyle = col(t); ctx.fillRect(158, y + 3, (w - 200) * v, rh - 6); ctx.fillStyle = '#fff'; ctx.textAlign = 'left'; ctx.fillText(Math.round(v * 100) + '%', 164 + (w - 200) * v, y + rh / 2); });
  }
  $('mc-readout').innerHTML = `Plan <b>${base.finish}</b> d · mean <b>${m.mean.toFixed(0)}</b> · P50 <b>${m.p50}</b> · P80 <b>${m.p80}</b> · P90 <b>${m.p90}</b><br>Chance of finishing within <b>${plan}</b> days: <b class="${pOn > 0.8 ? 'good' : pOn < 0.3 ? 'bad' : ''}">${(pOn * 100).toFixed(0)}%</b> · buffer needed for 80%: <b>${Math.max(0, m.p80 - S.r.finish)}</b> days`;
}

/* --------------------------------------------------------------------------------------------- controls ---- */
function redraw() { readouts(); drawGantt(); drawNet(); drawScurve(); drawCrew(); drawMC(); }
$('g-reset').onclick = () => { S.dur = {...BASE}; S.crashCost = 0; recalc(); redraw(); };
function crash(n) { let saved = 0; for (let i = 0; i < n; i++) { const c = crashStep(TASKS, S.dur); if (!c) break; S.dur[c.id]--; S.crashCost += c.cost; saved++; } recalc(); redraw(); $('crash-note').textContent = saved ? `Crashed ${saved} day${saved > 1 ? 's' : ''}: each one buys back a day on the critical path from the cheapest task that still can be shortened.` : 'Nothing left to crash.'; }
$('g-crash1').onclick = () => crash(1); $('g-crash5').onclick = () => crash(5);
$('g-group').onclick = (e) => { S.group = !S.group; e.target.setAttribute('aria-pressed', S.group); redraw(); };
$('day').oninput = (e) => { S.day = +e.target.value; S.playing = false; $('g-play').textContent = 'Play'; redraw(); };
$('g-play').onclick = (e) => { S.playing = !S.playing; e.target.textContent = S.playing ? 'Pause' : 'Play'; if (S.playing && S.day >= S.r.finish) S.day = 0; };
$('mc-run').onclick = (e) => { e.target.disabled = true; e.target.textContent = 'Running…'; setTimeout(() => { S.mc = monteCarlo(TASKS, 3000, 7); e.target.disabled = false; e.target.textContent = 'Run again'; drawMC(); }, 30); };
$('mc-buffer').oninput = (e) => { S.buffer = +e.target.value; $('mc-buffer-v').textContent = '+' + S.buffer + ' d'; drawMC(); };
addEventListener('keydown', (e) => { if (e.key === 'Escape') { S.sel = null; redraw(); } });
let last = performance.now();
function tick(now) { const dt = Math.min((now - last) / 1000, 0.1); last = now; if (S.playing) { S.day += dt * 28; if (S.day >= S.r.finish) { S.day = S.r.finish; S.playing = false; $('g-play').textContent = 'Play'; } readouts(); drawGantt(); drawScurve(); drawCrew(); } requestAnimationFrame(tick); }
let rt; addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(redraw, 80); });
redraw(); $('mc-hist').parentElement.style.visibility = 'visible'; if (!reduce) requestAnimationFrame(tick);
// the first thing a visitor sees: the programme already running its critical path
S.sel = null; window.__PM = {S, recalc, redraw, cpm: () => S.r};
