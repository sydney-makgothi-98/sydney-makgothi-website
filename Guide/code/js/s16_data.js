// Chapter 11, section 11.16: working with data. Run with: node s16_data.js
const csv = `t,range,phase
0.000,0.321,APPROACH
0.100,0.298,APPROACH
0.200,0.104,BRAKE
0.300,0.096,BRAKE`;
const [header, ...rows] = csv.trim().split('\n');
const cols = header.split(',');
const records = rows.map(line => Object.fromEntries(line.split(',').map((v, i) => [cols[i], Number.isNaN(+v) ? v : +v])));
console.log('1:', records[2]);
const braking = records.filter(r => r.phase === 'BRAKE');
console.log('2:', braking.length, 'braking rows, first at t =', braking[0].t);
const minRange = Math.min(...records.map(r => r.range));
console.log('3: closest', minRange, 'm at t =', records.find(r => r.range === minRange).t);
const out = records.map(r => [r.t.toFixed(3), r.range.toFixed(3), r.phase].join(',')).join('\n');
console.log('4: round trip equals input:', out === rows.join('\n'));
const state = { items: ['egg'], pos: { x: 0.1, z: 0.2 } };
const next = { ...state, items: [...state.items, 'salt'], pos: { ...state.pos, x: 0.15 } };
console.log('5:', state.items, next.items, state.pos.x, next.pos.x, state.pos === next.pos);
const text = JSON.stringify(next, null, 2);
console.log('6:', text.split('\n').length, 'lines;', JSON.stringify(JSON.parse(text)) === JSON.stringify(next));
const store = new Map();                       // stands in for localStorage, which stores strings only
store.set('settings', JSON.stringify({ bands: true, duty: 0.7 }));
console.log('7:', JSON.parse(store.get('settings') ?? '{}').duty, JSON.parse(store.get('missing') ?? '{}').duty);
console.log('8:', typeof structuredClone(next), structuredClone(next).pos === next.pos);
