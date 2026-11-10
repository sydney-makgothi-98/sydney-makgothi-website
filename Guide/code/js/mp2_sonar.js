// Mini project 2: analyse a sonar log. Run with: node mp2_sonar.js  (writes and reads sonar.csv next to itself)
const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'sonar.csv');
if (!fs.existsSync(file)) {                                  // make a deterministic log the first time
    const lines = ['t,range'];
    for (let i = 0; i <= 300; i++) {
        const t = i * 0.01;
        let r = 0.5 - 0.15 * t;                              // approaching a wall at 15 cm/s
        if (i % 37 === 0) r = 4.0;                           // an occasional dropout: the echo was missed
        lines.push(`${t.toFixed(2)},${r.toFixed(4)}`);
    }
    fs.writeFileSync(file, lines.join('\n'));
}

const rows = fs.readFileSync(file, 'utf8').trim().split('\n').slice(1).map(l => l.split(',').map(Number));
const ranges = rows.map(([, r]) => r);
const valid = ranges.filter(r => r < 3.9);
const mean = valid.reduce((s, r) => s + r, 0) / valid.length;
const median = arr => { const s = [...arr].sort((a, b) => a - b), m = s.length >> 1; return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2; };

// a 5-sample median filter removes the dropouts without lagging the trend much
const filtered = ranges.map((_, i) => median(ranges.slice(Math.max(0, i - 2), i + 3)));
const trigger = rows.find(([, r], i) => filtered[i] <= 0.108);
const dropouts = ranges.filter(r => r >= 3.9).length;

console.log(`${rows.length} readings, ${dropouts} dropouts (${(100 * dropouts / rows.length).toFixed(1)}%)`);
console.log(`mean of valid readings ${mean.toFixed(3)} m, median ${median(valid).toFixed(3)} m`);
console.log(`raw minimum ${Math.min(...ranges).toFixed(3)} m, raw maximum ${Math.max(...ranges).toFixed(3)} m`);
console.log(`brake would trigger at t = ${trigger[0].toFixed(2)} s on the filtered signal`);
const rawTrigger = rows.find(([, r]) => r <= 0.108);
console.log(`on the raw signal it would trigger at t = ${rawTrigger[0].toFixed(2)} s (same here, because the dropouts read far, not near)`);
