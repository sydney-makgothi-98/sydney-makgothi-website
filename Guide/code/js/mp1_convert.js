// Mini project 1: a unit converter on the command line. Run with: node mp1_convert.js 250 kt
const TO_SI = { m: 1, km: 1000, ft: 0.3048, nmi: 1852, 'm/s': 1, 'km/h': 1 / 3.6, kt: 1852 / 3600, 'ft/min': 0.3048 / 60 };
const KIND = { m: 'length', km: 'length', ft: 'length', nmi: 'length', 'm/s': 'speed', 'km/h': 'speed', kt: 'speed', 'ft/min': 'speed' };

function convert(value, from, to) {
    if (!(from in TO_SI) || !(to in TO_SI)) throw new Error(`unknown unit: ${from in TO_SI ? to : from}`);
    if (KIND[from] !== KIND[to]) throw new Error(`cannot convert ${KIND[from]} to ${KIND[to]}`);
    return value * TO_SI[from] / TO_SI[to];
}

const [valueText, from, to] = process.argv.slice(2);
const value = Number(valueText);
if (!valueText || Number.isNaN(value) || !from) {
    console.log('usage: node mp1_convert.js <value> <unit> [unit]   e.g. 250 kt m/s');
    process.exit(1);
}
try {
    const targets = to ? [to] : Object.keys(TO_SI).filter(u => KIND[u] === KIND[from] && u !== from);
    for (const t of targets) console.log(`${value} ${from} = ${convert(value, from, t).toLocaleString('en-US', { maximumFractionDigits: 3 })} ${t}`);
} catch (e) {
    console.log('error:', e.message);
    process.exit(2);
}
