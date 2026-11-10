// Chapter 11, section 11.3: variables and scope. Run with: node s03_scope.js
const speed = 0.3;          // cannot be reassigned
let count = 0;              // can be
count = count + 1;
try { eval('speed = 1'); } catch (e) { console.log('1:', e.constructor.name, '-', e.message); }

{ let inner = 'only in this block'; var leaky = 'escapes the block'; }
console.log('2:', typeof inner, typeof leaky);

console.log('3:', hoisted);          // var is hoisted as undefined
var hoisted = 'now set';
try { console.log(tdz); } catch (e) { console.log('4:', e.constructor.name, '-', e.message); }
let tdz = 'let is not usable before its line';

const timersVar = [], timersLet = [];
for (var i = 0; i < 3; i++) timersVar.push(() => i);
for (let j = 0; j < 3; j++) timersLet.push(() => j);
console.log('5:', timersVar.map(f => f()), timersLet.map(f => f()));

const parts = ['motor'];
parts.push('wheel');                 // const stops reassignment, not change
console.log('6:', parts);
