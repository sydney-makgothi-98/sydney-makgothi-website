// Chapter 11, section 11.2: values and types. Run with: node s02_types.js
console.log(typeof 42, typeof 'hi', typeof true, typeof undefined, typeof null, typeof {}, typeof [], typeof (() => 1));
console.log(0.1 + 0.2, 0.1 + 0.2 === 0.3, Math.abs(0.1 + 0.2 - 0.3) < 1e-9);
console.log(22 * 1.15, (22 * 1.15).toFixed(2));
console.log(1 / 0, -1 / 0, 0 / 0, Number.isNaN(0 / 0));
console.log(Number.MAX_SAFE_INTEGER, 2 ** 53 + 1);
console.log('5' + 3, '5' - 3, '5' * '2', true + 1, [] + {});
console.log(0 == '', 0 === '', null == undefined, null === undefined, '1' == 1, NaN == NaN);
for (const v of [0, '', null, undefined, NaN, false, [], {}, '0', -1]) process.stdout.write(`${JSON.stringify(v) ?? String(v)}:${v ? 'T' : 'F'} `);
console.log();
