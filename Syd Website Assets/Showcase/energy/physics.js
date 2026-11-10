// Rayleigh-Ritz analysis of a floor strip on a continuous bed of linear springs (a Winkler foundation), with the length normalised to 0..1 and a
// polynomial series for the displacement. Everything is done analytically on the monomials, so the stiffness matrix is exact. No drawing in here.
export const DEFAULTS = {
  L: 6.0,          // span, m
  EI: 2.0e7,       // flexural rigidity of a 1 m wide strip, N m^2 (0.2 m reinforced concrete: E = 30 GPa)
  k: 2.0e6,        // spring stiffness per unit length per unit width of the supports, N/m^2 (Pa)
  q: 15e3,         // uniform load, N/m (dead load of the floor plus finishes and contents)
  P: 0,            // optional point load, N
  xp: 0.5,         // where it acts, as a fraction of the span
  N: 4,            // terms in the polynomial series
};
// basis: phi_i(xi) = xi^i (1 - xi), i = 1..N. It is zero at both ends (the geometric boundary conditions); no other condition is imposed.
export const phi = (i, x) => Math.pow(x, i) * (1 - x);
export const phi2 = (i, x) => (i > 1 ? i * (i - 1) * Math.pow(x, i - 2) : 0) - i * (i + 1) * Math.pow(x, i - 1);

/** The two integral matrices of the series, exact: B_ij = int phi_i'' phi_j'' dxi, S_ij = int phi_i phi_j dxi, and f_i = int phi_i dxi. */
export function matrices(N) {
  const B = [], S = [], f = [];
  for (let i = 1; i <= N; i++) {
    B.push([]); S.push([]); f.push(1 / (i + 1) - 1 / (i + 2));
    for (let j = 1; j <= N; j++) {
      const Ai = i * (i - 1), Aj = j * (j - 1), Bi = i * (i + 1), Bj = j * (j + 1);
      let b = Bi * Bj / (i + j - 1) - (Ai ? Ai * Bj / (i + j - 2) : 0) - (Aj ? Bi * Aj / (i + j - 2) : 0) + (Ai && Aj ? Ai * Aj / (i + j - 3) : 0);
      B[i - 1].push(b); S[i - 1].push(1 / (i + j + 1) - 2 / (i + j + 2) + 1 / (i + j + 3));
    }
  }
  return {B, S, f};
}
function solve(A, b) {
  const n = b.length, M = A.map((r, i) => [...r, b[i]]);
  for (let c = 0; c < n; c++) { let p = c; for (let r = c + 1; r < n; r++) if (Math.abs(M[r][c]) > Math.abs(M[p][c])) p = r; [M[c], M[p]] = [M[p], M[c]];
    for (let r = c + 1; r < n; r++) { const k = M[r][c] / M[c][c]; for (let j = c; j <= n; j++) M[r][j] -= k * M[c][j]; } }
  const x = new Array(n).fill(0); for (let i = n - 1; i >= 0; i--) { let s = M[i][n]; for (let j = i + 1; j < n; j++) s -= M[i][j] * x[j]; x[i] = s / M[i][i]; } return x;
}
/** Assemble K a = F and solve for the coefficients. Units: K in N/m, F in N, so the coefficients a_i are displacements in metres. */
export function ritz(p, N = p.N) {
  const {B, S, f} = matrices(N), K = [], F = [];
  for (let i = 0; i < N; i++) { K.push([]); F.push(p.q * p.L * f[i] + p.P * phi(i + 1, p.xp)); for (let j = 0; j < N; j++) K.push && K[i].push(p.EI / Math.pow(p.L, 3) * B[i][j] + p.k * p.L * S[i][j]); }
  const a = solve(K, F), w = (x) => a.reduce((s, c, i) => s + c * phi(i + 1, x), 0);
  // the energy terms at the solution, as a check: strain energy of bending and of the springs, and the work of the loads (at equilibrium U = W / 2)
  let Ub = 0, Us = 0, W = 0; for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) { Ub += 0.5 * a[i] * a[j] * p.EI / Math.pow(p.L, 3) * B[i][j]; Us += 0.5 * a[i] * a[j] * p.k * p.L * S[i][j]; } for (let i = 0; i < N; i++) W += a[i] * F[i];
  return {a, w, K, F, N, Ub, Us, W, mid: w(0.5), Pi: Ub + Us - W};
}
/** The exact solution for a simply supported beam on springs with a uniform load (a Navier series, which converges very quickly). */
export function exactUniform(p) {
  return (x) => { let s = 0; for (let n = 1; n < 400; n += 2) { const kn = n * Math.PI / p.L; s += 4 * p.q / (n * Math.PI) / (p.EI * Math.pow(kn, 4) + p.k) * Math.sin(n * Math.PI * x); } return s; };
}
/** Bending moment M = EI w'' (per unit width): Ritz polynomials differentiated twice, converted from xi to metres. */
export const moment = (p, r) => (x) => -p.EI / (p.L * p.L) * r.a.reduce((s, c, i) => s + c * phi2(i + 1, x), 0);
export const springForce = (p, r) => (x) => p.k * r.w(x);        // the spring reaction per metre
