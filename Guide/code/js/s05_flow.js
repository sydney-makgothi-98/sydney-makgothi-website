// Chapter 11, section 11.5: control flow. Run with: node s05_flow.js
const readings = [0.32, 0.21, 0.108, 0.09, 0.095];
let phase = 'APPROACH';
for (const r of readings) {
    if (phase === 'APPROACH' && r <= 0.108) phase = 'BRAKE';
    console.log(`reading ${r.toFixed(3)} m -> ${phase}`);
}

function describe(code) {
    switch (true) {
        case code >= 500: return 'server error';
        case code >= 400: return 'client error';
        case code >= 300: return 'redirect';
        case code >= 200: return 'success';
        default: return 'informational';
    }
}
console.log([200, 301, 404, 503].map(describe));

let t = 0, v = 0, x = 0;
while (x < 1) { v += 2 * 0.1; x += v * 0.1; t += 0.1; }            // crude integration until x reaches 1 m
console.log('reached 1 m after', t.toFixed(1), 's at', v.toFixed(2), 'm/s');

const primes = [];
outer: for (let n = 2; primes.length < 8; n++) {
    for (const p of primes) if (n % p === 0) continue outer;
    primes.push(n);
}
console.log(primes);

const obj = { a: 1, b: 2 };
for (const key in obj) process.stdout.write(`${key}=${obj[key]} `);
for (const [k, v] of Object.entries(obj)) process.stdout.write(`${k}:${v} `);
console.log();
