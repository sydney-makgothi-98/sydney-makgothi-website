// Mini project 4: a robot's phases as a state machine, stepped at 1 ms. Run with: node mp4_phases.js
const PH = { IDLE: 0, APPROACH: 1, BRAKE: 2, REACH: 3, GRIP: 4, LIFT: 5, DONE: 6 };
const NAME = Object.keys(PH);
const STOP_AT = 0.108, WALL = 0.5, SPEED = 0.25, DT = 0.001;

function makeRobot() {
    return { t: 0, x: 0, v: 0, arm: 74, jaw: 1, phase: PH.IDLE, log: [] };
}
function go(r, phase) { r.log.push(`${r.t.toFixed(3)} s: ${NAME[r.phase]} -> ${NAME[phase]}`); r.phase = phase; }
function step(r, cmd) {
    const sonar = WALL - r.x;                                        // what the sensor sees
    switch (r.phase) {
        case PH.IDLE: if (cmd === 'start') go(r, PH.APPROACH); break;
        case PH.APPROACH: r.v = SPEED; if (sonar <= STOP_AT) go(r, PH.BRAKE); break;
        case PH.BRAKE: r.v = Math.max(0, r.v - 2.0 * DT); if (r.v === 0) go(r, PH.REACH); break;   // 2 m/s^2 of braking
        case PH.REACH: r.arm = Math.max(18.4, r.arm - 90 * DT); if (r.arm === 18.4) go(r, PH.GRIP); break;
        case PH.GRIP: r.jaw = Math.max(0.2, r.jaw - 2 * DT); if (r.jaw === 0.2) go(r, PH.LIFT); break;
        case PH.LIFT: r.arm = Math.min(46, r.arm + 90 * DT); if (r.arm === 46) go(r, PH.DONE); break;
    }
    r.x += r.v * DT; r.t += DT;
}
const r = makeRobot();
step(r, 'start');
while (r.phase !== PH.DONE && r.t < 10) step(r, null);
console.log(r.log.join('\n'));
console.log(`finished at ${r.t.toFixed(3)} s, ${(r.x * 100).toFixed(1)} cm from the start, ${((WALL - r.x) * 100).toFixed(1)} cm from the wall`);
console.log(`braking distance v^2 / 2a = ${(SPEED ** 2 / (2 * 2.0) * 100).toFixed(2)} cm, so it stops at 10.8 - ${(SPEED ** 2 / 4 * 100).toFixed(2)} = ${(10.8 - SPEED ** 2 / 4 * 100).toFixed(2)} cm`);
