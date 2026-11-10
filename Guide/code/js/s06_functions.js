// Chapter 11, section 11.6: functions. Run with: node s06_functions.js
function clamp(x, lo = 0, hi = 1) { return Math.min(hi, Math.max(lo, x)); }
const double = n => n * 2;
console.log('1:', clamp(1.7), clamp(-3, -1, 1), clamp(0.4), double(21));

function sum(...nums) { return nums.reduce((s, n) => s + n, 0); }
console.log('2:', sum(), sum(1, 2, 3), sum(...[4, 5, 6]));

function makeCounter() { let n = 0; return () => ++n; }
const c1 = makeCounter(), c2 = makeCounter();
console.log('3:', c1(), c1(), c2());

const twice = (f, x) => f(f(x));
console.log('4:', twice(double, 3), twice(s => s + '!', 'go'));

const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
console.log('5:', factorial(5), factorial(10));

let total = 0;
function addImpure(x) { total += x; return total; }           // depends on history
const addPure = (t, x) => t + x;                               // depends only on inputs
console.log('6:', addImpure(2), addImpure(2), addPure(0, 2), addPure(0, 2));

console.log('7:', typeof hoistedDecl, typeof notYet);
function hoistedDecl() {}
var notYet = function () {};

const pid = (kp, ki, kd) => {
    let integral = 0, last = 0;
    return (err, dt) => { integral += err * dt; const d = (err - last) / dt; last = err; return kp * err + ki * integral + kd * d; };
};
const ctrl = pid(2, 0.5, 0.1);
console.log('8:', [1, 0.5, 0.2].map(e => ctrl(e, 0.1).toFixed(3)));
