// Chapter 43: curvature of a curve given only as points, by central differences. The test curve is a circle of radius 0.5 m,
// whose curvature is exactly 1 / 0.5 = 2 per metre everywhere. Run it with: node Guide/code/js/s19_curvature.js
function curvature(pts) {
  const out = [];
  for (let i = 1; i < pts.length - 1; i++) {
    const x1 = (pts[i + 1][0] - pts[i - 1][0]) / 2, y1 = (pts[i + 1][1] - pts[i - 1][1]) / 2;
    const x2 = pts[i + 1][0] - 2 * pts[i][0] + pts[i - 1][0], y2 = pts[i + 1][1] - 2 * pts[i][1] + pts[i - 1][1];
    out.push((x1 * y2 - y1 * x2) / Math.pow(x1 * x1 + y1 * y1, 1.5));
  }
  return out;
}
let seed = 7; const rnd = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296 - 0.5; };
const R = 0.5, n = 17, arcLen = 0.65;
const circle = Array.from({length: n}, (_, i) => { const a = (i / (n - 1)) * arcLen / R; return [R * Math.sin(a), R * (1 - Math.cos(a))]; });
const mean = (v) => v.reduce((a, b) => a + b, 0) / v.length, sd = (v) => { const m = mean(v); return Math.sqrt(mean(v.map((q) => (q - m) ** 2))); };
const clean = curvature(circle);
console.log('true curvature: 2.000 per metre');
console.log('from exact points   : mean', mean(clean).toFixed(3), ' spread', sd(clean).toFixed(4));
for (const mm of [0.1, 0.3, 1.0]) {
  const noisy = circle.map(([x, y]) => [x + mm / 1000 * rnd() * 2, y + mm / 1000 * rnd() * 2]);
  const k = curvature(noisy);
  console.log(`with +/-${mm} mm of reading scatter: mean`, mean(k).toFixed(3), ' spread', sd(k).toFixed(3));
}
