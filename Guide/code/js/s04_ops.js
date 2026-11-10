// Chapter 11, section 11.4: operators and expressions. Run with: node s04_ops.js
console.log('1:', 7 % 3, -7 % 3, 2 ** 10, 7 / 2, Math.floor(7 / 2), Math.trunc(-7 / 2));
let n = 5; const a = n++, b = ++n;
console.log('2:', a, b, n);
const duty = 0.7, label = `duty ${duty * 100}% -> ${(duty * 4.6).toFixed(2)} V`;
console.log('3:', label);
const settings = { speed: 0, name: '' };
console.log('4:', settings.speed || 0.5, settings.speed ?? 0.5, settings.name || 'anon', settings.name ?? 'anon');
const robot = { arm: { claw: { jaw: 0.8 } } };
console.log('5:', robot.arm?.claw?.jaw, robot.sensor?.range, robot.sensor?.range ?? 'no sensor');
const grade = s => s >= 75 ? 'distinction' : s >= 50 ? 'pass' : 'fail';
console.log('6:', grade(80), grade(60), grade(30));
console.log('7:', true && 'yes', false && 'yes', 0 || 'fallback', 'first' || 'second');
