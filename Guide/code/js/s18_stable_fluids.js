// A small 2D "stable fluids" jet, the same method as the engine animation on parachute.html, small enough to read in one sitting.
// It checks two claims the book makes: the pressure projection makes the flow (nearly) divergence-free, and a jet shed into thick, slow gas stays smooth
// while the same jet in thin, fast gas breaks into sideways motion. Run it with: node Guide/code/js/s18_stable_fluids.js
const NX = 96, NY = 40, N = NX * NY;
const u = new Float32Array(N), v = new Float32Array(N), u0 = new Float32Array(N), v0 = new Float32Array(N), p = new Float32Array(N), dv = new Float32Array(N), tmpu = new Float32Array(N), tmpv = new Float32Array(N);
let seed = 12345; const rnd = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296 - 0.5; };   // a tiny seeded random generator, so every run prints the same numbers

function sample(f, x, y) { x = Math.min(NX - 1.5, Math.max(0.5, x)); y = Math.min(NY - 1.5, Math.max(0.5, y)); const i = x | 0, j = y | 0, s = x - i, t = y - j, c = j * NX + i; return (f[c] * (1 - s) + f[c + 1] * s) * (1 - t) + (f[c + NX] * (1 - s) + f[c + NX + 1] * s) * t; }
function advect(dst, src) { for (let j = 1; j < NY - 1; j++) for (let i = 0; i < NX; i++) { const c = j * NX + i; dst[c] = sample(src, i - u0[c], j - v0[c]); } }
function divergence() {                       // the root-mean-square divergence, away from the edges where the boundary conditions bend the rules
  let sum = 0, n = 0; for (let j = 2; j < NY - 2; j++) for (let i = 8; i < NX - 4; i++) { const c = j * NX + i, d = 0.5 * (u[c + 1] - u[c - 1] + v[c + NX] - v[c - NX]); sum += d * d; n++; }
  return Math.sqrt(sum / n);
}
function project(iters) {
  for (let j = 1; j < NY - 1; j++) for (let i = 1; i < NX - 1; i++) { const c = j * NX + i; dv[c] = -0.5 * (u[c + 1] - u[c - 1] + v[c + NX] - v[c - NX]); }
  for (let k = 0; k < iters; k++) for (let j = 1; j < NY - 1; j++) for (let i = 1; i < NX; i++) {          // the last column is the open end: the pressure outside it is zero
    const c = j * NX + i, right = i === NX - 1 ? 0 : p[c + 1]; p[c] = (p[c - 1] + right + p[c - NX] + p[c + NX] + dv[c]) / 4;
  }
  for (let j = 1; j < NY - 1; j++) for (let i = 1; i < NX - 1; i++) { const c = j * NX + i; u[c] -= 0.5 * (p[c + 1] - p[c - 1]); v[c] -= 0.5 * (p[c + NX] - p[c - NX]); }
}
function diffuse(nu) {
  for (let j = 1; j < NY - 1; j++) for (let i = 1; i < NX - 1; i++) { const c = j * NX + i; tmpu[c] = u[c] + nu * (u[c - 1] + u[c + 1] + u[c - NX] + u[c + NX] - 4 * u[c]); tmpv[c] = v[c] + nu * (v[c - 1] + v[c + 1] + v[c - NX] + v[c + NX] - 4 * v[c]); }
  for (let j = 1; j < NY - 1; j++) for (let i = 1; i < NX - 1; i++) { const c = j * NX + i; u[c] = tmpu[c]; v[c] = tmpv[c]; }
}
/** run a jet of speed U (cells per step) into still gas of viscosity nu for `steps` steps; return the mean sideways speed, relative to U, on the axis near the far end */
function run(U, nu, steps) {
  u.fill(0); v.fill(0); p.fill(0); const mid = NY / 2;
  for (let s = 0; s < steps; s++) {
    for (let j = 0; j < NY; j++) { const w = Math.max(0, 1 - Math.pow((j - mid) / 6, 6)); u[j * NX] = U * w; u[j * NX + 1] = U * w; if (w > 0.9) v[j * NX + 1] += rnd() * 0.02 * U; }   // a smooth jet profile with a faint disturbance
    diffuse(nu); u0.set(u); v0.set(v); advect(u, u0); advect(v, v0);
    project(60);
  }
  let side = 0, n = 0; for (let j = mid - 4; j <= mid + 4; j++) for (let i = 60; i < 90; i++) { side += Math.abs(v[j * NX + i]); n++; }
  return {side: side / n / U};
}
/** the projection, on its own: give it a deliberately compressible field and see how much of the divergence it removes */
function checkProjection() {
  u.fill(0); v.fill(0); p.fill(0); for (let c = 0; c < N; c++) { const i = c % NX, j = (c / NX) | 0; u[c] = Math.sin(i * 0.3) * Math.cos(j * 0.4); v[c] = Math.cos(i * 0.2) * Math.sin(j * 0.5); }
  const before = divergence(); project(120); const after = divergence();
  console.log('rms divergence of a compressible test field:', before.toFixed(4), '->', after.toFixed(4), '(' + (100 * (1 - after / before)).toFixed(0) + '% removed)');
}
checkProjection();
const slow = run(0.15, 0.20, 400), fast = run(0.6, 0.01, 400);
console.log('slow jet, thick gas : sideways motion / speed =', slow.side.toFixed(4));
console.log('fast jet, thin gas  : sideways motion / speed =', fast.side.toFixed(4));
console.log('the fast jet is', (fast.side / slow.side).toFixed(1), 'times as sideways-busy as the slow one');
