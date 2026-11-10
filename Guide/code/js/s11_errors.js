// Chapter 11, section 11.11: errors and debugging. Run with: node s11_errors.js
class RangeOutOfBounds extends Error {
    constructor(value) { super(`sonar reading ${value} m is outside 0.02 to 4 m`); this.name = 'RangeOutOfBounds'; this.value = value; }
}
function readSonar(v) {
    if (typeof v !== 'number' || Number.isNaN(v)) throw new TypeError(`expected a number, got ${typeof v}`);
    if (v < 0.02 || v > 4) throw new RangeOutOfBounds(v);
    return v;
}
for (const input of [0.3, 'far', 7]) {
    try {
        console.log('ok', readSonar(input));
    } catch (e) {
        if (e instanceof RangeOutOfBounds) console.log('range:', e.message, '(value', e.value + ')');
        else if (e instanceof TypeError) console.log('type:', e.message);
        else throw e;                                   // not ours: let it go up
    } finally {
        console.log('  (finally runs every time)');
    }
}
try { null.length; } catch (e) { console.log(e.constructor.name + ':', e.message); }
try { undefinedFunction(); } catch (e) { console.log(e.constructor.name + ':', e.message); }
try { JSON.parse('{bad'); } catch (e) { console.log(e.constructor.name + ':', e.message.slice(0, 40)); }
const err = new Error('where am I?');
console.log(err.stack.split('\n')[0], '|', /at .*s11_errors\.js:\d+/.test(err.stack));
console.assert(1 + 1 === 2, 'arithmetic works');
console.assert(0.1 + 0.2 === 0.3, 'this assertion fails and prints, but does not stop the program');
console.log('still running');
