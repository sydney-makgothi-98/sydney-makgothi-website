// Chapter 11, section 11.10: classes and prototypes. Run with: node s10_classes.js
class Motor {
    static count = 0;
    #rpm = 0;                                   // private field
    constructor(name, maxRpm = 200) { this.name = name; this.maxRpm = maxRpm; Motor.count++; }
    set duty(d) { this.#rpm = Math.min(1, Math.max(0, d)) * this.maxRpm; }
    get rpm() { return this.#rpm; }
    describe() { return `${this.name}: ${this.rpm.toFixed(0)} rpm`; }
    static fromSpec(spec) { return new Motor(spec.name, spec.max); }
}
class GearedMotor extends Motor {
    constructor(name, ratio) { super(name, 200 / ratio * 48); this.ratio = ratio; }
    describe() { return super.describe() + ` through 1:${this.ratio}`; }
}
const m = new Motor('left'); m.duty = 0.7;
const g = new GearedMotor('arm', 96); g.duty = 1.5;
console.log('1:', m.describe(), '|', g.describe(), '|', Motor.count);
console.log('2:', g instanceof GearedMotor, g instanceof Motor, Object.getPrototypeOf(g) === GearedMotor.prototype, Object.getPrototypeOf(GearedMotor.prototype) === Motor.prototype);
console.log('3:', Object.keys(g), typeof g.describe, g.hasOwnProperty('describe'), 'describe' in g);
// console.log(g.#rpm);   <- a SyntaxError before the program even runs: private fields are checked at parse time
console.log('4:', JSON.stringify(g), '(private fields are not visible, even to JSON)');
console.log('5:', Motor.fromSpec({ name: 'spare', max: 150 }).describe());
const plain = { name: 'plain', describe: Motor.prototype.describe, rpm: 12 };
console.log('6:', plain.describe());
const fn = m.describe;
try { fn(); } catch (e) { console.log('7:', e.constructor.name, '- this is undefined when a method is called loose'); }
const bound = m.describe.bind(m);
console.log('8:', bound(), [m, g].map(x => x.describe()));
