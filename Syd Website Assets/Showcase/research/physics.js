// The research project: did recurve bow limbs really evolve from one generation to the next? Figures are those of the report: limb ratings and masses
// (Table 1), average arrow speed and kinetic energy at 28 in of draw (Table 3), efficiency at 28 in (Table 4) and efficiency-to-smoothness (Table 5).
// Derived here: the arrow mass (2 KE / v^2) and the stored energy at 28 in (KE / efficiency). The normalised draw-force curve is read off the report's
// carpet plot (Figure 21), where all six limbs lie almost on top of each other, so one shared curve is used and scaled to each limb's stored energy.
export const FT = 0.3048, IN = 0.0254;
export const LIMBS = [
  {id: 'ns', name: 'NS', fam: 'NS', gen: 'older', lb: 30, mUp: 182.42, mLo: 182.67, v: 173.75, ke: 29.06, eff: 0.69, color: '#9aa0c3'},
  {id: 'nsxp', name: 'NS-XP', fam: 'NS', gen: 'newer', lb: 36, mUp: 202.17, mLo: 201.14, v: 173.98, ke: 28.39, eff: 0.61, color: '#e879f9'},
  {id: 'mxt10', name: 'MXT-10', fam: 'MXT', gen: 'older', lb: 38, mUp: 183.12, mLo: 184.10, v: 172.48, ke: 30.94, eff: 0.64, color: '#60a5fa'},
  {id: 'mxtxt', name: 'MXT-XT', fam: 'MXT', gen: 'newer', lb: 38, mUp: 198.33, mLo: 199.83, v: 176.15, ke: 34.72, eff: 0.70, color: '#22d3ee'},
  {id: 'cv', name: 'Carbon Velos', fam: 'Hoyt', gen: 'older', lb: 36, mUp: 205.10, mLo: 202.96, v: 169.13, ke: 29.75, eff: 0.66, color: '#fbbf24'},
  {id: 'ha', name: 'Hoyt Axia', fam: 'Hoyt', gen: 'newer', lb: 40, mUp: 205.62, mLo: 207.53, v: 182.68, ke: 37.34, eff: 0.70, color: '#34d399'},
];
LIMBS.forEach((l) => { l.vms = l.v * FT; l.arrowKg = 2 * l.ke / (l.vms * l.vms); l.pe28 = l.ke / l.eff; });
export const REPORTED_CHANGE = {NS: -14, MXT: 8, Hoyt: 6};                 // percent, as printed in the report's Table 4
export const EFF_TO_SMOOTH = {mxtxt: 2.31, ha: 5.50, variation: 58};       // Table 5, wood core against carbon-foam core
/** The shared normalised draw-force curve: x = draw / 30 in, the brace height at 9 in is x = 0.3 and the force is 1 at x = 1. */
const KNOTS = [[0.3, 0], [0.35, 0.12], [0.4, 0.22], [0.5, 0.38], [0.6, 0.51], [0.7, 0.62], [0.8, 0.74], [0.9, 0.87], [1.0, 1.0]];
export function fnorm(x) {
  if (x <= KNOTS[0][0]) return 0;
  for (let i = 1; i < KNOTS.length; i++) if (x <= KNOTS[i][0]) { const t = (x - KNOTS[i - 1][0]) / (KNOTS[i][0] - KNOTS[i - 1][0]); return KNOTS[i - 1][1] + t * (KNOTS[i][1] - KNOTS[i - 1][1]); }
  return 1;
}
/** Draw force in newtons at draw length d (inches) for a limb, scaled so that the energy stored to 28 in equals the report's implied value. */
export function scale(l) { let a = 0; const n = 400; for (let i = 0; i < n; i++) { const d = 9 + 19 * (i + 0.5) / n; a += fnorm(d / 30) * (19 / n) * IN; } return l.pe28 / a; }
LIMBS.forEach((l) => { l.F0 = scale(l); });
export const force = (l, d) => l.F0 * fnorm(d / 30);
/** Stored energy (J) from the brace height to draw length d, by the trapezoidal rule with step h inches (the report used 1 inch). */
export function energy(l, d, h = 1) {
  let e = 0, x = 9; while (x < d - 1e-9) { const x1 = Math.min(d, x + h); e += 0.5 * (force(l, x) + force(l, x1)) * (x1 - x) * IN; x = x1; }
  return e;
}
/** Efficiency at draw d, as the report defines it: the kinetic energy measured at 28 in divided by the energy stored at d. */
export const efficiencyAt = (l, d) => l.ke / Math.max(1e-6, energy(l, d, 0.25));
/** Arrow speed if released at draw d, taking the efficiency at 28 in to hold (an assumption: only 28 in was shot in the experiment). */
export function speedAt(l, d) { const ke = l.eff * energy(l, d, 0.25); return Math.sqrt(2 * ke / l.arrowKg); }
/** Smoothness: the first derivative of the force with draw, by forward, backward or central differences with step h (inches). Optionally with measurement scatter. */
export function smoothness(l, method, h = 1, noise = 0, seed = 3) {
  const pts = [], rnd = (i) => { const s = Math.sin(i * 91.7 + seed * 13.1) * 43758.5453; return (s - Math.floor(s)) * 2 - 1; };
  const Fm = (i) => force(l, 9 + i * h) * (1 + noise * 0.012 * rnd(i));          // scatter of about 1 % of the reading, like a load cell and a human reading it
  const n = Math.floor(21 / h);
  for (let i = 0; i <= n; i++) {
    let dF; if (method === 'forward') { if (i === n) continue; dF = Fm(i + 1) - Fm(i); } else if (method === 'backward') { if (i === 0) continue; dF = Fm(i) - Fm(i - 1); } else { if (i === 0 || i === n) continue; dF = (Fm(i + 1) - Fm(i - 1)) / 2; }
    pts.push([9 + i * h, dF / (h * IN * 1000)]);                                        // N per mm
  }
  return pts;
}
/** Exact derivative of the shared curve, for comparison with the finite-difference estimates (N per mm). */
export function smoothnessExact(l, d) { const e = 0.01; return (force(l, d + e) - force(l, d - e)) / (2 * e * IN * 1000); }
