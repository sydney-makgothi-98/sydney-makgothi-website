// Chapter 11, section 11.9: strings and numbers in practice. Run with: node s09_strings_numbers.js
const s = 'Patrick the Robot';
console.log('1:', s.length, s[0], s.at(-1), s.toUpperCase(), s.slice(8), s.indexOf('Robot'), s.includes('the'));
console.log('2:', s.split(' '), s.replace('Robot', 'Cook'), s.replaceAll('t', 'T'), '  pad  '.trim(), 'ab'.repeat(3));
console.log('3:', '7'.padStart(3, '0'), 'x'.padEnd(4, '.') + '|', 'A'.charCodeAt(0), String.fromCharCode(66));
console.log('4:', Number('42'), Number('12px'), parseFloat('12.5px'), parseInt('0x1f', 16), +'3.5', Number(''), Number(null), Number(undefined));
console.log('5:', (3.14159).toFixed(2), (0.000123).toExponential(2), (1234.5678).toPrecision(6), Math.round(2.5), Math.round(-2.5), Math.round(3.456 * 100) / 100);
console.log('6:', Math.max(1, 7, 3), Math.max(...[1, 7, 3]), Math.hypot(3, 4), Math.sign(-2), Math.PI.toFixed(5), Math.atan2(1, 1) * 180 / Math.PI);
console.log('7:', (1234567.891).toLocaleString('en-US'), new Intl.NumberFormat('en-US', { style: 'unit', unit: 'meter', maximumFractionDigits: 1 }).format(0.1083));
console.log('8:', `${1 + 1} + ${'two'}`, `multi
line`, 'He said "hi"', "it's", `back\`tick`);
const csvLine = '0.100,0.321,APPROACH';
const [t, range, phase] = csvLine.split(',');
console.log('9:', +t + 0.001, Number(range) < 0.108, phase.toLowerCase());
console.log('10:', 'b' > 'a', 'B' > 'a', '10' < '9', 10 < 9, ['b', 'a', 'C'].sort(), ['b', 'a', 'C'].sort((x, y) => x.localeCompare(y)));
