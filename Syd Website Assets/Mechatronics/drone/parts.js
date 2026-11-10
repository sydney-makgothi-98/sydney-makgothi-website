// What each part is and does. Numbers from the report (mass, inertia, gains, instruments) or computed from the model, so a spec can
// never disagree with a graph. Parts the report does not specify say so, rather than inventing figures.
import {M, G, IXX, IZZ, ZREF, LOOPS, LOOP_NAME, J, DESIGN, DERIVED, PID_REPORT, PD, bode, margins, roots, charPoly} from './model.js';

export const TAGS = {
  structure: ['STRUCTURE', '#9aa0c3'], power: ['POWER', '#fbbf24'], motion: ['MOTION', '#60a5fa'],
  sense: ['SENSE', '#34d399'], control: ['CONTROL', '#38bdf8'], payload: ['PAYLOAD', '#e879f9'],
};
const f = (v, d = 2) => v.toFixed(d);
const hover = M * G;
const ARM = {FR: 'front-right', FL: 'front-left', RR: 'rear-right', RL: 'rear-left'};

export const INFO = {
  fc: {tag: 'control',
    role: 'The PID controller: the brain of the drone, and the centrepiece of the report.',
    desc: 'A microcontroller reads the altimeter and the IMU, compares them with where the drone should be (10 m up, level, not turning), and runs four PID loops: altitude, roll, pitch and yaw. Each loop adds three terms: P pushes in proportion to the error, I builds up while an error lingers, and D brakes in proportion to how fast things are changing. The sum becomes U1 (thrust) and U2 to U4 (torques), which the ESC turns into motor speeds. The report names a Raspberry Pi as an example of a suitable controller.',
    specs: (c) => { const g = c.gs; return [['Loops', '4: altitude, roll, pitch, yaw'], ['Controller now', c.sim.ctrl + (c.sim.ctrl === 'PID' ? (c.sim.gains === 'derived' ? ' (re-derived gains)' : ' (report Table 4 gains)') : ' (report Table 2 gains)')],
      ...LOOPS.map((l) => [`${LOOP_NAME[l]} Kp / Ki / Kd`, `${f(g[l].kp, 4)} / ${f(g[l].ki, 4)} / ${f(g[l].kd, 4)}`]), ['Design target', `${f(DESIGN.os * 100, 0)} % overshoot, ${f(DESIGN.ts, 1)} s settling`]]; }},
  imu: {tag: 'sense', role: 'Measures how the drone is tilted and how fast it is turning.',
    desc: 'The inertial measurement unit combines gyroscopes and accelerometers. It gives the controller roll, pitch and yaw and their rates, which feed the roll, pitch and yaw PID loops. Without it the drone could not tell that it had been knocked over by a bird or a gust. The report lists it as required control instrumentation.',
    specs: (c) => [['Feeds', 'roll, pitch, yaw loops'], ['Reading now', `roll ${f(c.sim.phi * 180 / Math.PI, 1)}°, pitch ${f(c.sim.th * 180 / Math.PI, 1)}°, yaw ${f(c.sim.psi * 180 / Math.PI, 1)}°`], ['Rates now', `${f(c.sim.p, 2)}, ${f(c.sim.q, 2)}, ${f(c.sim.r, 2)} rad/s`]]},
  baro: {tag: 'sense', role: 'Measures height by sensing air pressure.',
    desc: 'Air pressure falls as you climb, so a barometer (altimeter) gives height above where it started. The altitude PID loop uses it to hold the drone at the commanded 10 m, and its derivative (the rate of climb) supplies the D term. The report lists it as required control instrumentation.',
    specs: (c) => [['Feeds', 'altitude loop'], ['Target height', `${ZREF} m`], ['Height now', `${f(c.sim.z, 2)} m`], ['Climb rate now', `${f(c.sim.vz, 2)} m/s`]]},
  gps: {tag: 'sense', role: 'Tells the farmer where the drone is.',
    desc: 'A GPS receiver gives the position in the field, so the farmer can always find the drone and direct it. In the report it is not part of the stabilising loops: x and y position are not controlled, which is why the drone drifts sideways after a gust. Adding an outer position loop that uses GPS is the report\'s main recommendation for future work.',
    specs: (c) => [['Used by', 'the farmer, not the PID loops'], ['x, y now', `${f(c.sim.x, 1)} m, ${f(c.sim.y, 1)} m`], ['Report limitation', 'no outer loop for x and y']]},
  esc: {tag: 'motion', role: 'Turns the controller\'s four commands into four motor speeds.',
    desc: 'The controller outputs a total thrust U1 and three torques U2, U3, U4. The electronic speed controller mixes them into the speed of each of the four rotors (the report\'s equations 2.10 to 2.13: U1 is proportional to the sum of the squared rotor speeds, U2 to the difference between one pair, U3 to another, U4 to the alternating sum). The report does not give the thrust and drag constants, so the model works directly with U1 to U4.',
    specs: (c) => [['U1 now', `${f(c.sim.U[0], 2)} N (hover ${f(hover, 2)} N)`], ['U2 / U3 / U4 now', `${f(c.sim.U[1], 4)} / ${f(c.sim.U[2], 4)} / ${f(c.sim.U[3], 4)} N m`], ['Thrust per motor at hover', `${f(hover / 4, 2)} N`]]},
  battery: {tag: 'power', role: 'Stores the energy for flight.',
    desc: 'It powers the four motors and the electronics. The report measures the controller\'s effort as the integral of the squared control signals: about 5500 J in its harshest case, the free fall. It also notes that a real drone needs limits on the maximum force and how quickly it can change, because a battery and motors cannot respond infinitely fast.',
    specs: (c) => [['Control effort so far', `${f(c.sim.energy, 0)} (report eq. 6.2)`], ['Report, free fall', '≈ 5500 J'], ['Hover thrust', `${f(hover, 1)} N`]]},
  shell: {tag: 'structure', role: 'The streamlined cover over the electronics.',
    desc: 'It protects the boards and battery from dust, leaves and the odd bird, and gives the sloped, front-heavy shape in the reference photograph. The report treats the whole drone as a uniformly distributed mass of 1.05 kg when calculating its moments of inertia.',
    specs: () => [['Drone mass', `${M} kg`], ['Assumed length', '238 mm'], ['Weight at hover', `${f(hover, 2)} N`]]},
  chassis: {tag: 'structure', role: 'The lower frame everything bolts to.',
    desc: 'It carries the arms, the battery and the boards and sets where the centre of mass is. In the report the drone is simplified to two beams crossed at right angles, so the moments of inertia about the forward and sideways axes are equal.',
    specs: () => [['Ixx = Iyy', `${IXX} kg m²`], ['Izz', `${IZZ} kg m²`], ['Model', 'two crossed beams']]},
  button: {tag: 'control', role: 'Power on and off.', desc: 'A short press wakes the drone and its controller, with a ring light to show it is awake. It plays no part in the control analysis.', specs: () => [['In the report', 'not modelled']]},
  led: {tag: 'structure', role: 'The cyan front strip.', desc: 'It shows the drone\'s front and status, and on the reference photograph it gives the drone its look. It plays no part in the control analysis.', specs: () => [['In the report', 'not modelled']]},
  gimbal: {tag: 'payload', role: 'The multispectral and RGB camera that scouts the crop.',
    desc: 'The reason for the whole project: a camera on a stabilised mount that scans the cane from above. The drone must hover steadily for close-range inspection, even after aggressive manoeuvres, so that the images are sharp. The report adds the sensors\' mass to the drone\'s inertia budget.',
    specs: () => [['Job', 'crop scouting, 2-hectare cane plantation'], ['Needs', 'a steady hover at 10 m']]},
};
for (const t of ['FR', 'FL', 'RR', 'RL']) {
  INFO['arm' + t] = {tag: 'structure', role: `The ${ARM[t]} arm, carrying a motor out from the body.`, desc: 'The four arms form the X of the quadrotor. A quadrotor has four inputs but six degrees of freedom, so it is underactuated: the only way to move sideways is to tilt, which is why x and y follow roll and pitch.', specs: () => [['Degrees of freedom', '6'], ['Control inputs', '4 (U1 to U4)'], ['Controlled', 'z, roll, pitch, yaw']]};
  INFO['motor' + t] = {tag: 'motion', role: `The ${ARM[t]} brushless motor.`, desc: 'A stator of copper windings inside a spinning aluminium bell, driving the propeller above it. Each motor supplies a quarter of the thrust at hover, and the controller changes the four speeds together to climb, tilt and turn.', specs: () => [['Thrust per motor at hover', `${f(hover / 4, 2)} N`], ['Rotor direction', 'alternates around the X']]};
  INFO['prop' + t] = {tag: 'motion', role: `The ${ARM[t]} propeller.`, desc: 'Two blades that turn motor speed into thrust. Neighbouring propellers spin in opposite directions so that their reaction torques cancel; speeding up one pair and slowing the other turns the drone (yaw). At speed they blur into the discs you see on the reference photograph.', specs: () => [['Spin direction', t === 'FR' || t === 'RL' ? 'one way' : 'the other way'], ['Why alternate', 'reaction torques cancel']]};
}
/** Specs for the PID bars strip. */
export const loopSummary = (sim, loop) => {
  const g = sim.gs[loop], pts = bode(sim.ctrl, g, J[loop]), mg = margins(pts), r = roots(charPoly(sim.ctrl, g, J[loop]));
  return {g, mg, r};
};
