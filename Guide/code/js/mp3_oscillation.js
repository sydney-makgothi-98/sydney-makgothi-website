// Mini project 3: a damped oscillation, computed and checked. Run with: node mp3_oscillation.js
const zeta = 0.5, wn = 2;
const wd = wn * Math.sqrt(1 - zeta * zeta);
const x = t => Math.exp(-zeta * wn * t) * Math.cos(wd * t);
const T = 2 * Math.PI / wd;
console.log(`damped frequency ${wd.toFixed(3)} rad/s, period ${T.toFixed(3)} s`);
console.log(`x at one period: ${x(T).toFixed(4)} (prediction e^-T = ${Math.exp(-T).toFixed(4)})`);

// find the peaks numerically and compare with the theory
const dt = 0.001, peaks = [];
let prev = x(0), prevSlope = 0;
for (let t = dt; t < 12; t += dt) {
    const cur = x(t), slope = cur - prev;
    if (prevSlope > 0 && slope <= 0) peaks.push([t, cur]);
    prev = cur; prevSlope = slope;
}
console.log('peaks (t, x):', peaks.slice(0, 3).map(([t, v]) => `(${t.toFixed(3)}, ${v.toFixed(4)})`).join(' '));
console.log(`ratio of successive peaks ${(peaks[1][1] / peaks[0][1]).toFixed(4)}, theory e^(-2*pi*zeta/sqrt(1-zeta^2)) = ${Math.exp(-2 * Math.PI * zeta / Math.sqrt(1 - zeta * zeta)).toFixed(4)}`);
const settle = [...Array(12001).keys()].map(i => i * dt).find(t => Math.exp(-zeta * wn * t) <= 0.02);
console.log(`envelope reaches 2% at t = ${settle.toFixed(2)} s (theory ${(-Math.log(0.02) / (zeta * wn)).toFixed(2)} s)`);
console.log('\n t      x');
for (let t = 0; t <= 4; t += 0.5) console.log(`${t.toFixed(1).padStart(4)}  ${x(t).toFixed(4).padStart(8)}  ${'#'.repeat(Math.round(Math.max(0, x(t)) * 30))}`);
