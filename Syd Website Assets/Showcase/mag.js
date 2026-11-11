// Shared by the two magazine pages (research and design): black ink on white paper, so the chart kit is switched to its paper theme on import,
// and figures are plain canvases that redraw when the page is resized or the fonts arrive. No interaction: a magazine page is read, not operated.
import {paper, chart, label, dot, vline, COL, fit} from './chart.js';
paper();
export {chart, label, dot, vline, COL, fit};
export const GREY = {ink: '#000', dark: '#222', mid: '#777', light: '#bdbdbd', wash: 'rgba(0,0,0,0.10)', hatch: 'rgba(0,0,0,0.16)'};
export const $ = (id) => document.getElementById(id);
export const put = (id, text) => { const e = $(id); if (e) e.textContent = text; };
/** map: {name: drawFunction(canvas)} for every canvas[data-fig="name"] on the page. */
export function figures(map) {
  const draw = () => document.querySelectorAll('canvas[data-fig]').forEach((c) => { const f = map[c.dataset.fig]; if (f && c.clientWidth > 20) f(c); });
  let t; addEventListener('resize', () => { clearTimeout(t); t = setTimeout(draw, 80); });
  (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(draw); draw();
  return draw;
}
