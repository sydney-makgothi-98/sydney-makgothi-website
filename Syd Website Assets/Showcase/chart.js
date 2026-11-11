// Borderless chart kit for the showcase pages (same look as the drone page): two axes, faint grid, series, labels. Pure drawing.
export const COL = {accent: '#a78bfa', blue: '#60a5fa', pink: '#e879f9', amber: '#fbbf24', green: '#34d399', red: '#f87171', cyan: '#22d3ee', orange: '#fb923c', faint: '#5f668f', muted: '#9aa0c3', text: '#e6e8f5'};
/** Grid, axis and dot colours. The default is for the dark pages; paper() switches them (and COL) to black ink on white for the magazine pages. */
export const THEME = {grid: 'rgba(255,255,255,0.04)', gridZero: 'rgba(255,255,255,0.16)', axis: 'rgba(255,255,255,0.16)', dotEdge: 'rgba(8,12,30,0.8)', vline: 'rgba(255,255,255,0.35)'};
export function paper() {
  Object.assign(THEME, {grid: 'rgba(0,0,0,0.09)', gridZero: 'rgba(0,0,0,0.55)', axis: '#000', dotEdge: '#fff', vline: 'rgba(0,0,0,0.5)'});
  Object.assign(COL, {accent: '#000', blue: '#000', pink: '#555', amber: '#777', green: '#000', red: '#000', cyan: '#333', orange: '#666', faint: '#555', muted: '#222', text: '#000'});
}
export const MONO = '"JetBrains Mono", monospace';
export const fmt = (v, d = 2) => (Number.isFinite(v) ? v.toFixed(d) : '-').replace('-', '−');
export function fit(canvas) {
  const dpr = Math.min(window.devicePixelRatio || 1, 2), w = canvas.clientWidth, h = canvas.clientHeight;
  if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) { canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr); }
  const ctx = canvas.getContext('2d'); ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, w, h); return {ctx, w, h};
}
export function niceTicks(lo, hi, n) {
  const raw = (hi - lo) / n, p = Math.pow(10, Math.floor(Math.log10(raw))), f = raw / p, s = (f < 1.5 ? 1 : f < 3 ? 2 : f < 7 ? 5 : 10) * p, out = [];
  for (let v = Math.ceil(lo / s - 1e-9) * s; v <= hi + 1e-9; v += s) out.push(Math.abs(v) < s * 1e-9 ? 0 : +v.toPrecision(10));
  return out;
}
const tick = (v) => String(+v.toPrecision(4)).replace('-', '−');
export const label = (ctx, txt, x, y, color = COL.muted, align = 'left', size = 10, weight = '') => { ctx.font = `${weight} ${size}px ${MONO}`; ctx.fillStyle = color; ctx.textAlign = align; ctx.textBaseline = 'middle'; ctx.fillText(txt, x, y); };
/** o: {xr, yr, nx, ny, xl, yl, series:[{pts:[[x,y]], color, width, dash, fill}], under:[fn(X,Y)], over:[fn(X,Y)], box:true to draw a frame} */
export function chart(ctx, r, o) {
  const [x0, x1] = o.xr, [y0, y1] = o.yr;
  const X = (v) => r.x + (v - x0) / (x1 - x0) * r.w, Y = (v) => r.y + r.h - (v - y0) / (y1 - y0) * r.h;
  ctx.save(); ctx.font = `10px ${MONO}`; ctx.lineWidth = 1;
  const tx = o.xticks || niceTicks(x0, x1, o.nx || 5), ty = o.yticks || niceTicks(y0, y1, o.ny || 4);
  ctx.textAlign = 'center'; ctx.textBaseline = 'top';
  tx.forEach((v) => { ctx.strokeStyle = THEME.grid; ctx.beginPath(); ctx.moveTo(X(v), r.y); ctx.lineTo(X(v), r.y + r.h); ctx.stroke(); ctx.fillStyle = COL.faint; ctx.fillText(o.xfmt ? o.xfmt(v) : tick(v), X(v), r.y + r.h + 5); });
  ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
  ty.forEach((v) => { ctx.strokeStyle = v === 0 ? THEME.gridZero : THEME.grid; ctx.beginPath(); ctx.moveTo(r.x, Y(v)); ctx.lineTo(r.x + r.w, Y(v)); ctx.stroke(); ctx.fillStyle = COL.faint; ctx.fillText(o.yfmt ? o.yfmt(v) : tick(v), r.x - 6, Y(v)); });
  ctx.strokeStyle = THEME.axis; ctx.beginPath(); ctx.moveTo(r.x, r.y); ctx.lineTo(r.x, r.y + r.h); ctx.lineTo(r.x + r.w, r.y + r.h); ctx.stroke();
  if (o.xl) label(ctx, o.xl, r.x + r.w / 2, r.y + r.h + 24, COL.muted, 'center');
  if (o.yl) { ctx.save(); ctx.translate(r.x - 40, r.y + r.h / 2); ctx.rotate(-Math.PI / 2); label(ctx, o.yl, 0, 0, COL.muted, 'center'); ctx.restore(); }
  ctx.beginPath(); ctx.rect(r.x, r.y, r.w, r.h); ctx.clip();
  (o.under || []).forEach((fn) => fn(X, Y));
  (o.series || []).forEach((s) => {
    const pts = s.pts; if (!pts || !pts.length) return;
    ctx.beginPath(); let st = false;
    for (const [px, py] of pts) { if (!Number.isFinite(py)) continue; const sx = X(px), sy = Math.max(-3000, Math.min(3000, Y(py))); st ? ctx.lineTo(sx, sy) : ctx.moveTo(sx, sy); st = true; }
    ctx.setLineDash(s.dash || []); ctx.lineWidth = s.width || 2; ctx.strokeStyle = s.color; ctx.lineJoin = 'round'; ctx.stroke(); ctx.setLineDash([]);
    if (s.fill) { ctx.lineTo(X(pts[pts.length - 1][0]), Y(Math.max(y0, 0))); ctx.lineTo(X(pts[0][0]), Y(Math.max(y0, 0))); ctx.closePath(); ctx.fillStyle = s.fill; ctx.fill(); }
  });
  (o.over || []).forEach((fn) => fn(X, Y));
  ctx.restore(); return {X, Y};
}
export const dot = (ctx, x, y, color, r = 4.5) => { ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = color; ctx.fill(); ctx.strokeStyle = THEME.dotEdge; ctx.lineWidth = 1.5; ctx.stroke(); };
export const vline = (ctx, X, x, y0, y1, color = THEME.vline) => { ctx.setLineDash([3, 4]); ctx.strokeStyle = color; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(X(x), y0); ctx.lineTo(X(x), y1); ctx.stroke(); ctx.setLineDash([]); };
export const span = (arrs, pad = 0.12, min = 1e-9) => {
  let lo = Infinity, hi = -Infinity;
  arrs.forEach((a) => a.forEach((v) => { if (Number.isFinite(v)) { lo = Math.min(lo, v); hi = Math.max(hi, v); } }));
  if (!Number.isFinite(lo)) return [-1, 1]; if (hi - lo < min) { lo -= 1; hi += 1; }
  const p = (hi - lo) * pad; return [lo - p, hi + p];
};
