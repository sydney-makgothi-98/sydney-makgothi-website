// Chapter 11, section 11.17: a tiny test harness. Run with: node s17_tests.js
'use strict';
const clamp = (x, lo, hi) => Math.min(hi, Math.max(lo, x));
const mu = (s, peak) => peak * Math.sin(1.5 * Math.atan(10 * s));
const niceTicks = (lo, hi, n) => { const raw = (hi - lo) / n, p = 10 ** Math.floor(Math.log10(raw)), f = raw / p; return (f < 1.5 ? 1 : f < 3 ? 2 : f < 7 ? 5 : 10) * p; };

let passed = 0, failed = 0;
function test(name, fn) {
    try { fn(); passed++; console.log('  ok   ', name); }
    catch (e) { failed++; console.log('  FAIL ', name, '-', e.message); }
}
const assertEq = (got, want, tol = 0) => { if (Math.abs(got - want) > tol) throw new Error(`got ${got}, wanted ${want}`); };

test('clamp keeps values inside', () => { assertEq(clamp(5, 0, 1), 1); assertEq(clamp(-2, 0, 1), 0); assertEq(clamp(0.3, 0, 1), 0.3); });
test('friction is zero with no slip', () => assertEq(mu(0, 1), 0));
test('friction peaks near 17% slip', () => { const m17 = mu(0.17, 1); if (!(m17 > mu(0.05, 1) && m17 > mu(0.6, 1))) throw new Error('no peak'); });
test('friction never exceeds the peak', () => { for (let s = 0; s <= 1; s += 0.01) if (mu(s, 0.8) > 0.8 + 1e-12) throw new Error(`exceeded at ${s}`); });
test('ticks are round numbers', () => { assertEq(niceTicks(0, 1, 5), 0.2); assertEq(niceTicks(0, 97, 5), 20); assertEq(niceTicks(0, 0.0123, 4), 0.005, 1e-12); });
test('a deliberate failure, to show the output', () => assertEq(0.1 + 0.2, 0.3));
test('the same test with a tolerance', () => assertEq(0.1 + 0.2, 0.3, 1e-9));
console.log(`${passed} passed, ${failed} failed`);
process.exitCode = failed ? 1 : 0;
