// Chapter 11, section 11.7: arrays. Run with: node s07_arrays.js
const prices = [4, 9, 15, 22];
console.log('1:', prices.map(p => p * 1.15), prices.filter(p => p > 10), prices.reduce((s, p) => s + p, 0));
console.log('2:', prices.find(p => p > 10), prices.findIndex(p => p > 10), prices.some(p => p > 20), prices.every(p => p > 3), prices.includes(9));
console.log('3:', [10, 9, 1, 100].sort(), [10, 9, 1, 100].sort((a, b) => a - b));
const a = [1, 2, 3, 4, 5];
console.log('4:', a.slice(1, 3), a, a.splice(1, 2), a);
console.log('5:', [[1, 2], [3, [4]]].flat(), [[1, 2], [3, [4]]].flat(Infinity), [1, 2, 3].flatMap(n => [n, n * 10]));
console.log('6:', Array.from({ length: 5 }, (_, i) => i * i), [...'robot'], Array.of(3), new Array(3).fill(0));
const [first, , third = 'none', ...rest] = ['a', 'b', undefined, 'd', 'e'];
console.log('7:', first, third, rest);
const copy = [...prices, 30], same = prices;
copy.push(99); same.push(99);
console.log('8:', prices, copy, copy === prices, same === prices);
const people = [{ name: 'Ana', age: 31 }, { name: 'Ben', age: 17 }, { name: 'Cy', age: 45 }];
console.log('9:', people.filter(p => p.age >= 18).map(p => p.name.toUpperCase()), Object.fromEntries(people.map(p => [p.name, p.age])), people.reduce((s, p) => s + p.age, 0) / people.length);
console.log('10:', people.toSorted((p, q) => q.age - p.age).map(p => p.name), people.map(p => p.name), people.at(-1).name);
const byDecade = people.reduce((acc, p) => { const d = Math.floor(p.age / 10) * 10; (acc[d] ??= []).push(p.name); return acc; }, {});
console.log('11:', byDecade);
