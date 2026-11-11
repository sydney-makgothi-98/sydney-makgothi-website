// Level-flight power balance for the Spirit of Innovation study: thrust power available against power required, solved for top speed.
// Figures from the design report: mass 1248.6 kg, power 400 kW (535.35 hp), wing 6.5 m2 with AR 8.2 (span 7.3 m), parasite drag Cd0 = 0.018321,
// wing efficiency 0.75, flight at 3000 m (ISA, 9048 ft). The overall drivetrain efficiency is not given, so it is calibrated here so that the
// baseline reproduces the report's estimated top speed of 158.41 m/s.
export const HP = 745.7, G = 9.80665;
export const BASE = {S: 6.33, b: 7.3, m: 1248.6, P: 535.35, cd0: 0.018321, e: 0.75, rho: 0.9093, modules: 18, modMass: 38.89, modHp: 29.63, cdCut: 0};
export const REPORT = {vBase: 155.28, vEst: 158.41, vTarget: 156.83, kmhTarget: 564.6, hpArea: 82.38, hpAreaTarget: 84.8, limitG: 4.72, area1: 6.28};
const AR = (p) => p.b * p.b / p.S;
/** Drag in newtons at speed V for parameters p. */
export function drag(V, p) {
  const q = 0.5 * p.rho * V * V, cd0 = p.cd0 * (1 - p.cdCut), W = p.m * G, CL = W / (q * p.S);
  return q * p.S * (cd0 + CL * CL / (Math.PI * p.e * AR(p)));
}
let KE = null;                                           // the calibrated drivetrain efficiency
export function etaCal() {
  if (KE !== null) return KE;
  const p = {...BASE}; KE = drag(REPORT.vEst, p) * REPORT.vEst / (p.P * HP); return KE;
}
export const powerAvail = (p) => etaCal() * (p.etaMul || 1) * (p.P + (p.extra || 0) * p.modHp) * HP;     // etaMul: how much better the propeller is than the baseline (85/80 in the final design)
/** Top speed: the highest speed where the thrust power available meets the power required. */
export function topSpeed(p) {
  const pa = powerAvail(p); let lo = 80, hi = 260;
  for (let i = 0; i < 80; i++) { const mid = (lo + hi) / 2; (drag(mid, p) * mid < pa ? lo = mid : hi = mid); }
  return (lo + hi) / 2;
}
export const modified = (p) => ({...p, m: p.m + (p.extra || 0) * p.modMass, P: p.P});
/** Everything the page shows, for one set of design variables. */
export function evaluate(p) {
  const q = modified(p), V = topSpeed(q), Vb = topSpeed({...BASE, extra: 0});
  const pa = powerAvail(q), hpa = (p.P + (p.extra || 0) * p.modHp) / p.S;
  const gain = V / Vb - 1, vRecord = REPORT.vBase * (1 + gain);
  return {V, Vb, gain, vRecord, kmh: vRecord * 3.6, hpArea: hpa, mass: q.m, ar: AR(p), pa, tBase: 3000 / REPORT.vBase, tNew: 3000 / vRecord};
}
/** Curves of power required and available against speed (kW). */
export function curves(p, V0 = 90, V1 = 200, n = 111) {
  const q = modified(p), pts = []; for (let i = 0; i < n; i++) { const V = V0 + (V1 - V0) * i / (n - 1); pts.push({V, req: drag(V, q) * V / 1000, avail: powerAvail(q) / 1000, sep: (powerAvail(q) - drag(V, q) * V) / (q.m * G)}); }
  return pts;
}
export const planform = (Cr, lam, b) => ({Cr, Ct: Cr * lam, S: (Cr + Cr * lam) * b / 2, lam});
