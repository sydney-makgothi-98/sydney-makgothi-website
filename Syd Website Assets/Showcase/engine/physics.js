// The physics of the engine page: slider-crank kinematics, a single-zone first-law combustion model with a Wiebe burn, the ideal Otto cycle,
// piston forces and torque, and the figures of merit used to size a high-output V8 (mean piston speed, rod ratio, bmep). No drawing in here.
// The defaults are the published figures of the Koenigsegg One:1's twin-turbocharged 5.0-litre V8 (bore 92 mm, stroke 95.25 mm, 9.0:1) with the
// boost and rod length chosen here to land on its published output; the model is a design-study tool, not a copy of the factory's data.
export const R_GAS = 287, LHV = 44e6, AFR = 14.7;
export const DESIGN = {
  bore: 92,            // mm
  stroke: 95.25,       // mm
  rod: 152,            // mm, centre to centre
  cr: 9.0,             // compression ratio
  cyl: 8,
  pin: 52,             // mm: the crank pin diameter, for the 3D model
  pIn: 2.4,            // intake manifold pressure after the turbos and intercooler, bar absolute
  tIn: 325,            // intake charge temperature, K
  ign: 22,             // spark advance, degrees before TDC (start of burn)
  burn: 52,            // burn duration, degrees
  rpm: 7500,
  mPist: 0.52,         // kg: piston, rings and pin
  mRod: 0.62,          // kg: connecting rod
  mfrac: 0.35,         // fraction of the rod mass that reciprocates
};
export const PUBLISHED = {power: 1000, powerRpm: 7500, torque: 1371, torqueRpm: 6000, disp: 5065, cr: 9.0, limit: 8250};
const rad = (d) => d * Math.PI / 180, deg = (r) => r * 180 / Math.PI;

export function geom(p) {
  const B = p.bore / 1000, S = p.stroke / 1000, r = S / 2, L = p.rod / 1000, A = Math.PI * B * B / 4, Vd1 = A * S, Vc = Vd1 / (p.cr - 1);
  return {B, S, r, L, A, Vd1, Vc, Vd: Vd1 * p.cyl, lam: r / L, SB: S / B, mRecip: p.mPist + p.mRod * p.mfrac};
}
export const volume = (th, g) => { const s = g.r * (1 - Math.cos(th)) + g.L - Math.sqrt(g.L * g.L - g.r * g.r * Math.sin(th) ** 2); return g.Vc + g.A * s; };
/** Exact slider-crank: piston travel from TDC, velocity per unit omega, acceleration per omega^2 (both by differentiation), rod angle. th in radians from TDC. */
export function kin(th, g) {
  const sn = Math.sin(th), cs = Math.cos(th), root = Math.sqrt(g.L * g.L - g.r * g.r * sn * sn), lam = g.lam;
  const x = g.r * (1 - cs) + g.L - root;
  const v = g.r * sn + g.r * g.r * sn * cs / root;                                          // dx/dtheta
  const a = g.r * cs + g.r * g.r * (cs * cs - sn * sn) / root + Math.pow(g.r * g.r * sn * cs, 2) / Math.pow(root, 3);   // d2x/dtheta2
  return {x, v, a, psi: Math.asin(lam * sn)};
}
export const meanPistonSpeed = (p) => 2 * (p.stroke / 1000) * p.rpm / 60;

/** The closed part of the cycle, from BDC before compression (-180) to BDC after expansion (+180), by integrating the first law step by step. */
export function cycle(p, step = 0.5) {
  const g = geom(p), Vmax = g.Vc + g.Vd1, p1 = p.pIn * 1e5, mCharge = p1 * Vmax / (R_GAS * p.tIn);
  const mFuel = mCharge / (AFR + 1), Qtot = mFuel * LHV * 0.97 * 0.9;                       // 97% burns, 10% of that is lost to the walls
  const th0 = -rad(p.ign), dth = rad(p.burn), a = 5, m = 2, pts = [];
  let pr = p1, xPrev = 0, W = 0, Vp = Vmax, pmax = 0, thpmax = 0;
  for (let d = -180; d <= 180 + 1e-9; d += step) {
    const th = rad(d), Vv = volume(th, g);                                    // the cycle angle d is measured from firing TDC, so BDC is at +/-180
    const xb = th < th0 ? 0 : Math.min(1, 1 - Math.exp(-a * Math.pow((th - th0) / dth, m + 1)));
    if (d > -180) {
      const dV = Vv - Vp, dx = xb - xPrev, gam = 1.35 - 0.07 * xb;
      pr += ((gam - 1) / Vv) * Qtot * dx - gam * pr / Vv * dV; W += pr * dV; xPrev = xb;
    }
    Vp = Vv; if (pr > pmax) { pmax = pr; thpmax = d; }
    pts.push({d, V: Vv, p: pr, xb, dQ: 0});
  }
  for (let i = 1; i < pts.length; i++) pts[i].dQ = Qtot * (pts[i].xb - pts[i - 1].xb) / rad(step);          // J per radian
  // the ideal air-standard Otto cycle with the same compression ratio, intake state and heat added
  const gam = 1.35, T1 = p.tIn, T2 = T1 * Math.pow(p.cr, gam - 1), cv = R_GAS / (gam - 1), T3 = T2 + Qtot / (mCharge * cv), p2 = p1 * Math.pow(p.cr, gam), p3 = p2 * T3 / T2, T4 = T3 / Math.pow(p.cr, gam - 1), p4 = p3 / Math.pow(p.cr, gam);
  const Vc = g.Vc, Vm = Vmax, ideal = [];
  for (let i = 0; i <= 60; i++) { const V = Vm - (Vm - Vc) * i / 60; ideal.push({V, p: p1 * Math.pow(Vm / V, gam)}); }
  ideal.push({V: Vc, p: p3}); for (let i = 0; i <= 60; i++) { const V = Vc + (Vm - Vc) * i / 60; ideal.push({V, p: p3 * Math.pow(Vc / V, gam)}); }
  const eta = W / Qtot, etaOtto = 1 - Math.pow(p.cr, 1 - gam), imep = W / g.Vd1;
  return {pts, g, Qtot, mFuel, mCharge, W, imep, etaI: W / (mFuel * LHV), etaTh: eta, etaOtto, pmax, thpmax, ideal, T3, p4, p1};
}
/** Gas pressure over the whole 720-degree cycle for one cylinder: the closed part from the model, the intake and exhaust strokes approximated. d from -360 (start of intake) to +360. */
export function pressure720(c, p) {
  const pe = Math.max(1.3e5, p.pIn * 1e5 * 0.92), pi = p.pIn * 1e5 * 0.97, n = c.pts.length, step = c.pts[1].d - c.pts[0].d;
  const pend = c.pts[n - 1].p;
  return (d) => {
    d = ((d + 360) % 720 + 720) % 720 - 360;
    if (d >= -180 && d <= 180) return c.pts[Math.min(n - 1, Math.round((d + 180) / step))].p;
    if (d > 180) { const t = Math.min(1, (d - 180) / 25); return pend + (pe - pend) * (t * t * (3 - 2 * t)); }   // blow-down, then the exhaust stroke
    const t = Math.min(1, (d + 360) / 25); return pe + (pi - pe) * (t * t * (3 - 2 * t));                       // the intake stroke refills
  };
}
/** Forces and torque on one cylinder as functions of crank angle d (degrees from firing TDC, over 720). omega in rad/s. */
export function forces(d, c, p, pf) {
  const g = c.g, th = rad(d), k = kin(th, g), w = 2 * Math.PI * p.rpm / 60;
  const Fgas = (pf(d) - 1e5) * g.A;                                          // the crankcase side is at atmospheric pressure
  const Finertia = -g.mRecip * k.a * w * w;                                    // reciprocating inertia force along the bore (positive pushes the piston towards TDC? see sign note)
  const Fnet = Fgas + Finertia;                                                // force pushing the piston down the bore (towards the crank) is positive
  const T = Fnet * g.r * Math.sin(th + k.psi) / Math.cos(k.psi);               // torque on the crank
  return {Fgas, Fin: Finertia, Fnet, T, side: Fnet * Math.tan(k.psi), psi: k.psi, x: k.x, v: k.v * w, a: k.a * w * w};
}
/** The figures of merit at the current rpm. The friction mean effective pressure uses the Chen-Flynn form. */
export function summary(p) {
  const c = cycle(p), g = c.g, pf = pressure720(c, p), w = 2 * Math.PI * p.rpm / 60, Sp = meanPistonSpeed(p);
  const fmep = (0.4 + 0.004 * c.pmax / 1e5 + 0.09 * Sp + 0.0009 * Sp * Sp) * 1e5, bmep = c.imep - fmep;
  const torque = bmep * g.Vd / (4 * Math.PI), power = torque * w;
  let maxIn = 0, maxSide = 0, maxF = 0; for (let d = 0; d < 720; d += 2) { const f = forces(d - 360, c, p, pf); maxIn = Math.max(maxIn, Math.abs(f.Fin)); maxSide = Math.max(maxSide, Math.abs(f.side)); maxF = Math.max(maxF, Math.abs(f.Fnet)); }
  const Fgasmax = (c.pmax - 1e5) * g.A;
  return {c, g, pf, w, Sp, fmep, bmep, torque, power, imep: c.imep, pmax: c.pmax, Fin: g.mRecip * g.r * w * w * (1 + g.lam), Fgasmax, maxSide, etaI: c.etaI, etaOtto: c.etaOtto, bsfc: c.mFuel * 1000 / (bmep * g.Vd1 / 3.6e6) };
}
/** Total torque of all cylinders over one 720-degree cycle, with the cylinders firing evenly every 720/cyl degrees (a 90-degree V8 on a flat-plane crank). */
export function totalTorque(s, p, n = 360) {
  const c = s.c, out = []; const gap = 720 / p.cyl;
  for (let i = 0; i < n; i++) { const th = i * 720 / n; let T = 0, T1 = 0; for (let k = 0; k < p.cyl; k++) { const d = th - k * gap; const f = forces(((d + 360) % 720 + 720) % 720 - 360, c, p, s.pf); T += f.T; if (k === 0) T1 = f.T; } out.push({th, T, T1}); }
  const mean = out.reduce((a, q) => a + q.T, 0) / n; return {pts: out, mean, ripple: (Math.max(...out.map((q) => q.T)) - Math.min(...out.map((q) => q.T))) / mean};
}
export {rad, deg};
