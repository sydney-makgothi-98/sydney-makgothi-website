// A typical-section pitch-plunge wing with quasi-steady aerodynamics: the smallest model that flutters and diverges.
// Illustrative parameters. This is the method behind flutter clearance, not data for any specific aircraft.
//   m h'' + S a'' + Kh h = -L          L = q c CLa (a + h'/V + (0.5-e) c a'/V)   (h down, a nose up, per unit span)
//   S h'' + Ia a'' + Ka a = L e c      e = distance of the aerodynamic centre ahead of the elastic axis, in chords
export const DEFAULTS = {c: 4, m: 250, xa: 0.1, ra2: 0.5, fh: 2.0, fa: 9.0, e: 0.14, CLa: 5.5, rho: 1.0, V0: 100, Vd: 250};
const TWO_PI = 2 * Math.PI;
export function matrices(p, V) {
  const b = p.c / 2, S = p.m * p.xa * b, Ia = p.m * p.ra2 * b * b, Kh = p.m * (TWO_PI * p.fh) ** 2, Ka = Ia * (TWO_PI * p.fa) ** 2;
  const q = 0.5 * p.rho * V * V, Lk = q * p.c * p.CLa, Ld = V > 1 ? Lk / V : 0;      // lift per unit alpha, and per unit h'
  // M q'' + C q' + K q = 0 with q = [h, a]
  const M = [[p.m, S], [S, Ia]];
  const r = (0.5 - p.e) * p.c, Cs = [2 * 0.005 * p.m * TWO_PI * p.fh, 2 * 0.005 * Ia * TWO_PI * p.fa];  // three-quarter-chord lever for the pitch-rate term; 0.5 % structural damping
  const C = [[Ld + Cs[0], Ld * r], [-Ld * p.e * p.c, -Ld * p.e * p.c * r + Cs[1] + (V > 1 ? q * p.c ** 3 * Math.PI / (4 * V) : 0)]];  // last term: thin-aerofoil pitch damping about the aerodynamic centre
  const K = [[Kh, Lk], [0, Ka - Lk * p.e * p.c]];
  return {M, C, K, q, Kh, Ka, S, Ia, Lk};
}
// state matrix A of x' = A x, x = [h, a, h', a']
function stateA({M, C, K}) {
  const det = M[0][0] * M[1][1] - M[0][1] * M[1][0], Mi = [[M[1][1] / det, -M[0][1] / det], [-M[1][0] / det, M[0][0] / det]];
  const mul = (A, B) => [[A[0][0] * B[0][0] + A[0][1] * B[1][0], A[0][0] * B[0][1] + A[0][1] * B[1][1]], [A[1][0] * B[0][0] + A[1][1] * B[1][0], A[1][0] * B[0][1] + A[1][1] * B[1][1]]];
  const MK = mul(Mi, K), MC = mul(Mi, C);
  return [[0, 0, 1, 0], [0, 0, 0, 1], [-MK[0][0], -MK[0][1], -MC[0][0], -MC[0][1]], [-MK[1][0], -MK[1][1], -MC[1][0], -MC[1][1]]];
}
// characteristic polynomial of a 4x4 (Faddeev-LeVerrier), then its roots (Durand-Kerner)
function charPoly(A) {
  const n = 4, I = (k) => Array.from({length: n}, (_, i) => Array.from({length: n}, (_, j) => (i === j ? k : 0)));
  const mm = (X, Y) => X.map((r, i) => Y[0].map((_, j) => r.reduce((s, _, k) => s + X[i][k] * Y[k][j], 0)));
  let Mk = I(0), c = [1];
  for (let k = 1; k <= n; k++) { const AM = mm(A, Mk.map((r, i) => r.map((v, j) => v + (i === j ? c[k - 1] : 0)))); Mk = AM; const tr = Mk.reduce((s, r, i) => s + r[i], 0); c.push(-tr / k); }
  return c;
}
function roots(c) {
  const n = c.length - 1, f = (z) => { let r = [1, 0]; let acc = [1, 0]; for (let k = 1; k <= n; k++) { acc = [acc[0] * z[0] - acc[1] * z[1] + c[k], acc[0] * z[1] + acc[1] * z[0]]; } return acc; };
  let zs = Array.from({length: n}, (_, k) => { const ang = 0.4 + k * 2 * Math.PI / n, r = 1 + Math.abs(c[n]) ** (1 / n); return [r * Math.cos(ang), r * Math.sin(ang)]; });
  for (let it = 0; it < 200; it++) {
    let err = 0;
    for (let i = 0; i < n; i++) { let d = [1, 0]; for (let j = 0; j < n; j++) if (j !== i) { const dx = zs[i][0] - zs[j][0], dy = zs[i][1] - zs[j][1]; d = [d[0] * dx - d[1] * dy, d[0] * dy + d[1] * dx]; } const fv = f(zs[i]), den = d[0] * d[0] + d[1] * d[1] || 1e-30, q = [(fv[0] * d[0] + fv[1] * d[1]) / den, (fv[1] * d[0] - fv[0] * d[1]) / den]; zs[i] = [zs[i][0] - q[0], zs[i][1] - q[1]]; err = Math.max(err, Math.hypot(q[0], q[1])); }
    if (err < 1e-10) break;
  }
  return zs;
}
export function eig(p, V) { return roots(charPoly(stateA(matrices(p, V)))); }
/** Branches at speed V: oscillatory modes as {f, zeta} sorted by frequency, plus any real root. */
export function modes(p, V) {
  const z = eig(p, V), osc = z.filter((r) => r[1] > 1e-6).map((r) => ({f: r[1] / TWO_PI, zeta: -r[0] / Math.hypot(r[0], r[1]), re: r[0], im: r[1]})).sort((a, b) => a.f - b.f);
  const real = z.filter((r) => Math.abs(r[1]) <= 1e-6).map((r) => r[0]);
  return {osc, real, unstable: z.some((r) => r[0] > 1e-6)};
}
/** Sweep speed: curves of frequency and damping for the two branches, the flutter speed, the divergence speed. */
export function sweep(p, step = 2) {
  const V = [], f1 = [], f2 = [], z1 = [], z2 = [], real = []; let Vf = null, Vdv = null;
  for (let v = 40; v <= 460; v += step) {
    const m = modes(p, v); V.push(v);
    if (m.osc.length >= 2) { f1.push(m.osc[0].f); f2.push(m.osc[1].f); z1.push(m.osc[0].zeta); z2.push(m.osc[1].zeta); } else if (m.osc.length === 1) { f1.push(m.osc[0].f); f2.push(NaN); z1.push(m.osc[0].zeta); z2.push(NaN); } else { f1.push(NaN); f2.push(NaN); z1.push(NaN); z2.push(NaN); }
    const rr = m.real.filter((x) => x > 0); real.push(rr.length ? Math.max(...rr) : 0);
    if (Vf === null && m.osc.some((o) => o.zeta < 0)) Vf = v;
    if (Vdv === null && rr.length) Vdv = v;
  }
  return {V, f1, f2, z1, z2, real, Vf, Vdiv: Vdv, Vdiv0: divergenceSpeed(p)};
}
export function divergenceSpeed(p) { const b = p.c / 2, Ia = p.m * p.ra2 * b * b, Ka = Ia * (TWO_PI * p.fa) ** 2; return Math.sqrt(2 * Ka / (p.rho * p.c * p.c * p.e * p.CLa)); }
/** Time response of the section at a fixed speed, RK4. x = [h, a, h', a'] */
export function stepper(p) {
  let A = null, Vc = -1;
  return (x, V, dt) => {
    if (V !== Vc) { A = stateA(matrices(p, V)); Vc = V; }
    const f = (y) => A.map((r) => r[0] * y[0] + r[1] * y[1] + r[2] * y[2] + r[3] * y[3]);
    const add = (a, b, s) => a.map((v, i) => v + b[i] * s), k1 = f(x), k2 = f(add(x, k1, dt / 2)), k3 = f(add(x, k2, dt / 2)), k4 = f(add(x, k3, dt));
    return x.map((v, i) => v + dt / 6 * (k1[i] + 2 * k2[i] + 2 * k3[i] + k4[i]));
  };
}
