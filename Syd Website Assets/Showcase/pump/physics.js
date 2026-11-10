// The physics of the centrifugal pump page: Euler's turbomachinery equation with a slip factor, an empirical loss model, the system curve and its
// operating point, NPSH, the velocity triangles, the blade shape, and a flat-plate boundary layer along the blade. No drawing in here.
// The defaults describe an end-suction irrigation pump of the right size for lifting water to a roof tank; every one of them can be changed.
export const G = 9.80665, RHO = 998, NU = 1.0e-6;
export const DESIGN = {
  N: 2900,          // rpm: a 2-pole motor on 50 Hz mains
  D2: 0.140,        // impeller outer diameter, m
  b2: 0.016,        // outlet width, m
  beta2: 25,        // outlet blade angle from the tangent, degrees (backward curved)
  z: 6,             // number of blades
  t: 0.003,         // blade thickness, m
  D1: 0.085,        // mean eye diameter, m
  b1: 0.028,        // inlet width, m
  beta1: 24,        // inlet blade angle, degrees
  Hs: 16,           // static lift to the roof tank, m
  Ksys: 140000,     // pipe friction along a long irrigation main: head loss = Ksys Q^2 with the valve fully open, s^2/m^5
  valve: 1,         // valve resistance multiplier (1 = fully open)
  lift: 2.5,        // suction lift from the sump surface to the pump axis, m
  Ksuc: 8000,       // suction pipe friction coefficient, s^2/m^5
  kf: 12000,        // friction loss in the impeller and volute, s^2/m^5
  xiS: 0.2,         // incidence (shock) loss coefficient
  etaM: 0.97,       // mechanical efficiency of bearings and seal
};
const rad = (d) => d * Math.PI / 180;

export function geometry(p) {
  const w = 2 * Math.PI * p.N / 60, r1 = p.D1 / 2, r2 = p.D2 / 2, u2 = w * r2, u1 = w * r1;
  const b2 = rad(p.beta2), b1 = rad(p.beta1);
  const tau2 = 1 - p.z * p.t / (Math.PI * p.D2 * Math.sin(b2)), tau1 = 1 - p.z * p.t / (Math.PI * p.D1 * Math.sin(b1));
  const sigma = 1 - Math.sqrt(Math.sin(b2)) / Math.pow(p.z, 0.7);                          // Wiesner's slip factor
  const A1 = Math.PI * p.D1 * p.b1 * tau1, A2 = Math.PI * p.D2 * p.b2 * tau2;
  const Qsl = A1 * u1 * Math.tan(b1);                                                       // shockless flow: the flow at which the inlet flow angle equals the blade angle
  const ks = p.xiS / (2 * G * A1 * A1);
  return {w, r1, r2, u1, u2, b1, b2, tau1, tau2, sigma, A1, A2, Qsl, ks};
}
/** Everything about the pump at flow Q (m^3/s). */
export function pump(Q, p, g = geometry(p)) {
  const cm2 = Q / g.A2, cu2 = g.sigma * g.u2 - cm2 / Math.tan(g.b2), cu2inf = g.u2 - cm2 / Math.tan(g.b2);
  const Hth = g.u2 * cu2 / G, HthInf = g.u2 * cu2inf / G;
  const Hf = p.kf * Q * Q, Hs = g.ks * (Q - g.Qsl) * (Q - g.Qsl);
  const H = Math.max(0, Hth - Hf - Hs);
  const QL = 7e-5 * Math.sqrt(Math.max(Hth, 0)), etaV = Q > 0 ? Q / (Q + QL) : 0;
  const Pdf = 0.0016 * RHO * Math.pow(g.w, 3) * Math.pow(g.r2, 5), Pimp = RHO * G * (Q + QL) * Hth;
  const Pshaft = (Pimp + Pdf) / p.etaM, Phyd = RHO * G * Q * H;
  const eta = Pshaft > 0 ? Phyd / Pshaft : 0, etaH = Hth > 0 ? H / Hth : 0;
  const cm1 = Q / g.A1, w1 = Math.hypot(g.u1, cm1), npshr = 1.2 * cm1 * cm1 / (2 * G) + 0.3 * w1 * w1 / (2 * G);
  return {Q, cm2, cu2, cu2inf, Hth, HthInf, H, Hf, Hs, eta, etaH, etaV, Pshaft, Phyd, npshr, cm1, w1, w2: Math.hypot(cm2, g.u2 - cu2), alpha2: Math.atan2(cm2, cu2)};
}
export const Hsys = (Q, p) => p.Hs + p.Ksys * p.valve * Q * Q;
export const npsha = (Q, p) => 101325 / (RHO * G) - 2339 / (RHO * G) - p.lift - p.Ksuc * Q * Q;
/** Where the pump curve meets the system curve (bisection on the difference). */
export function operatingPoint(p, g = geometry(p)) {
  let lo = 1e-6, hi = 0.06; const f = (Q) => pump(Q, p, g).H - Hsys(Q, p);
  if (f(lo) < 0) return null;
  for (let i = 0; i < 60; i++) { const m = (lo + hi) / 2; f(m) > 0 ? (lo = m) : (hi = m); }
  const Q = (lo + hi) / 2; return {Q, ...pump(Q, p, g), Hsys: Hsys(Q, p)};
}
/** The best efficiency point: the flow that maximises overall efficiency. */
export function bep(p, g = geometry(p)) {
  let best = {eta: -1}; for (let Q = 0.001; Q < 0.04; Q += 0.00005) { const r = pump(Q, p, g); if (r.H > 0 && r.eta > best.eta) best = r; } return best;
}
export const specificSpeed = (Q, H, N) => 2 * Math.PI * N / 60 * Math.sqrt(Q) / Math.pow(G * H, 0.75);   // dimensionless
/** The blade centreline: the angle turned as the radius grows, for a blade angle that varies linearly from beta1 to beta2. dtheta/dr = cot(beta)/r, turned backwards. */
export function blade(p, n = 60) {
  const r1 = p.D1 / 2, r2 = p.D2 / 2, pts = []; let th = 0, s = 0, prev = null;
  for (let i = 0; i <= n; i++) {
    const r = r1 + (r2 - r1) * i / n, beta = rad(p.beta1 + (p.beta2 - p.beta1) * i / n);
    if (i) { const rm = (r + prev.r) / 2, bm = rad(p.beta1 + (p.beta2 - p.beta1) * (i - 0.5) / n), dr = r - prev.r; th -= dr / (rm * Math.tan(bm)); s += dr / Math.sin(bm); }
    pts.push({r, th, beta, s}); prev = pts[pts.length - 1];
  }
  return {pts, length: s, wrap: -th};
}
/** Flat-plate boundary layer along the blade surface at flow Q: laminar until Re_x = 5e5, turbulent after. Returns delta and displacement thickness along arc length. */
export function boundaryLayer(Q, p, n = 80) {
  const b = blade(p, 60), L = b.length;
  let wsum = 0; for (const q of b.pts) { const cm = Q / (2 * Math.PI * q.r * p.b2 * 0.95); wsum += cm / Math.sin(q.beta); }
  const wmean = wsum / b.pts.length, xtr = 5e5 * NU / wmean, out = [];
  for (let i = 1; i <= n; i++) {
    const x = L * i / n, Re = wmean * x / NU;
    out.push({x, Re, delta: Re < 5e5 ? 5 * x / Math.sqrt(Re) : 0.37 * x / Math.pow(Re, 0.2), dstar: Re < 5e5 ? 1.721 * x / Math.sqrt(Re) : 0.046 * x / Math.pow(Re, 0.2)});
  }
  return {pts: out, L, wmean, xtr, ReL: wmean * L / NU};
}
/** A NACA 4-digit thickness distribution (half-thickness over chord), for the blade section. */
export const nacaT = (xc, t = 0.09) => 5 * t * (0.2969 * Math.sqrt(xc) - 0.126 * xc - 0.3516 * xc * xc + 0.2843 * xc ** 3 - 0.1015 * xc ** 4);
