// Candidate impeller materials with typical handbook properties (rounded). Scores 1-5 are engineering judgement for a pump handling untreated irrigation water.
// E in GPa, rho in kg/m3, sy = yield or proof stress in MPa, uts in MPa, eu = strain at fracture in %. 5 is best for every score, including cost (5 = cheapest).
export const MATERIALS = [
  {id: 'gci', name: 'Grey cast iron', short: 'grey iron', E: 110, rho: 7100, sy: 165, uts: 250, eu: 0.5, brittle: true, corr: 2, cav: 2, cast: 5, cost: 5, color: '#9aa0c3'},
  {id: 'di', name: 'Ductile iron', short: 'ductile iron', E: 169, rho: 7100, sy: 370, uts: 500, eu: 7, corr: 2, cav: 3, cast: 4, cost: 4, color: '#60a5fa'},
  {id: 'bz', name: 'Tin bronze (CuSn10)', short: 'tin bronze', E: 105, rho: 8800, sy: 160, uts: 280, eu: 12, corr: 4, cav: 4, cast: 4, cost: 2, color: '#e0a95a'},
  {id: 'ab', name: 'Aluminium bronze', short: 'Al bronze', E: 120, rho: 7600, sy: 270, uts: 650, eu: 13, corr: 5, cav: 5, cast: 3, cost: 2, color: '#fbbf24'},
  {id: 'ss', name: 'Stainless 316 (cast)', short: '316 stainless', E: 193, rho: 8000, sy: 205, uts: 485, eu: 40, corr: 4, cav: 4, cast: 3, cost: 2, color: '#22d3ee'},
  {id: 'dp', name: 'Duplex stainless (cast)', short: 'duplex', E: 200, rho: 7800, sy: 485, uts: 690, eu: 16, corr: 5, cav: 5, cast: 3, cost: 1, color: '#34d399'},
  {id: 'al', name: 'Aluminium A356-T6', short: 'Al A356', E: 72, rho: 2680, sy: 205, uts: 280, eu: 5, corr: 3, cav: 1, cast: 4, cost: 3, color: '#e879f9'},
  {id: 'pa', name: 'Glass-filled nylon', short: 'GF nylon', E: 8, rho: 1400, sy: 90, uts: 130, eu: 3, corr: 5, cav: 1, cast: 5, cost: 4, color: '#f87171'},
];
// merit indices: the material property group that minimises mass for a given stiffness in each loading style
export const INDICES = {plate: {exp: 1 / 3, name: 'stiff plate (blade bending)', slope: 3, tex: 'E^(1/3)/ρ'}, beam: {exp: 1 / 2, name: 'stiff beam (shaft, rib)', slope: 2, tex: 'E^(1/2)/ρ'}, tie: {exp: 1, name: 'stiff tie (axial)', slope: 1, tex: 'E/ρ'}};
export const merit = (m, kind) => Math.pow(m.E * 1e9, INDICES[kind].exp) / m.rho;
/** Stiffness score 1..5 from the plate index, scaled to the best material in the list. */
export function stiffScore(m) { const best = Math.max(...MATERIALS.map((x) => merit(x, 'plate'))); return 1 + 4 * merit(m, 'plate') / best; }
export const CRITERIA = [['corr', 'Corrosion resistance', 0.3], ['cav', 'Cavitation erosion', 0.3], ['cast', 'Castability', 0.15], ['cost', 'Cost', 0.2], ['stiff', 'Stiffness per mass', 0.05]];
/** screen = true removes any material that scores 1 on corrosion or cavitation: a pump that cavitates or corrodes through cannot be rescued by being light or cheap. */
export function ranking(w, screen = true) {
  const tot = Object.values(w).reduce((s, v) => s + v, 0) || 1;
  return MATERIALS.map((m) => { const sc = {corr: m.corr, cav: m.cav, cast: m.cast, cost: m.cost, stiff: stiffScore(m)}; let s = 0; for (const [k] of CRITERIA) s += (w[k] / tot) * sc[k]; return {m, score: s / 5 * 100, sc, out: screen && (m.cav <= 1 || m.corr <= 1)}; }).sort((a, b) => (a.out - b.out) || b.score - a.score);
}
/** A simple stress-strain curve: straight to yield with slope E, then a gentle hardening to the ultimate stress at fracture. strain in %, stress in MPa. */
export function curve(m, emax = 1, n = 60) {
  const ey = m.sy / (m.E * 1e3) * 100, pts = [];
  for (let i = 0; i <= n; i++) {
    const e = emax * i / n; let s;
    if (e <= ey) s = m.E * 1e3 * e / 100;
    else if (m.brittle) break;
    else { const u = Math.min(1, (e - ey) / Math.max(1e-6, m.eu - ey)); s = m.sy + (m.uts - m.sy) * Math.pow(u, 0.4); }
    pts.push([e, s]);
    if (e >= m.eu) break;
  }
  return pts;
}
/** Centrifugal stress in a thin rotating disc at its rim speed u: sigma = rho u^2 (3+nu)/8 (MPa). A conservative figure for an impeller shroud. */
export const centrifugalMPa = (m, u, nu = 0.3) => m.rho * u * u * (3 + nu) / 8 / 1e6;
/** Blade bending stress bound: a clamped strip of span s and thickness t under a pressure difference dp: sigma = 0.75 dp (s/t)^2 (MPa). */
export const bladeStressMPa = (dp, s, t) => 0.75 * dp * (s / t) ** 2 / 1e6;
