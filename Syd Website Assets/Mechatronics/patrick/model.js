// Patrick: the one model behind every part, gauge and chart. Pure maths, SI units, no three.js.
// Input to the pose: time t of the breakfast run (integrated once at load). Everything on screen reads from here.

export const G = 9.80665;
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
const D2R = Math.PI / 180;

/* ---------------------------------------------------------------- robot ---------------------------------------- */
export const R = {
  wheelR: 0.0325,            // 65 mm TT wheel
  bandT: 0.0013,             // rubber band thickness added to the rolling radius
  track: 0.193,              // wheel centre to wheel centre
  axleX: 0, casterX: 0.125,  // drive axle and the front ball caster, along x (forward)
  mBase: 0.55, xBase: 0.035, // everything except the arm, kg and COM ahead of the axle, m
  mArm: 0.085, mEgg: 0.05,
  sensorX: 0.145, sensorY: 0.038,
  pivot: [-0.045, 0.085],    // arm pivot (x forward, y up)
  armLen: 0.24, armAttach: 0.05,
  servo: [0.09, 0.04], horn: 0.05, rod: 0.135,    // lift servo shaft, horn radius, pushrod length (found by search: -6..66 deg of arm in 56 deg of servo)
  gripLen: 0.085,
};
export const MOTOR = {       // yellow TT gear motor, 1:48, at the gearbox output
  Vbat: 6.0, Vdrop: 1.4,     // 4 x AA, and the L298N's two saturation drops
  Rm: 6.0, I0: 0.19, ke: 0.2326, etaG: 0.55, J: 4.0e-4,
};
MOTOR.tauF = MOTOR.etaG * MOTOR.ke * MOTOR.I0;                                 // friction torque, N m
MOTOR.w0 = (MOTOR.Vbat - MOTOR.I0 * MOTOR.Rm) / MOTOR.ke;                      // no-load speed at 6 V, rad/s

/** Motor at terminal voltage V and output speed w: current, shaft torque, powers. */
export function motor(V, w) {
  const I = (V - MOTOR.ke * w) / MOTOR.Rm;
  const tau = MOTOR.etaG * MOTOR.ke * I - Math.sign(w || V) * MOTOR.tauF * (Math.abs(w) > 0.05 || Math.abs(V) > 0.3 ? 1 : 0);
  return {I, tau, Pel: V * I, Pmech: tau * w};
}
export const supplyV = (duty) => duty * (MOTOR.Vbat - MOTOR.Vdrop);   // the H-bridge drops the same either way round

/* ------------------------------------------------------------- traction ---------------------------------------- */
export const SURF = {
  desk:  {name: 'Varnished desk', k: 1.0},
  dusty: {name: 'Dusty desk',     k: 0.7},
  card:  {name: 'Paper on desk',  k: 0.85},
};
/** Peak friction coefficient: bare hard-plastic wheel vs the same wheel wrapped in rubber bands. */
export const muPeak = (bands, surf) => (bands ? 1.0 : 0.22) * SURF[surf].k;
/** Brush-style friction curve: rises to its peak near 17 % slip, settles to ~80 % of it when the wheel just spins. */
export const mu = (s, peak) => peak * Math.sin(1.5 * Math.atan(10 * s));

/** Centre of mass (x ahead of the axle) and the share of weight on the drive axle, for an arm angle and payload. */
export function com(theta, payload) {
  const ax = R.pivot[0] + 0.6 * R.armLen * Math.cos(theta);
  const tx = R.pivot[0] + R.armLen * Math.cos(theta) + 0.5 * R.gripLen;
  const m = R.mBase + R.mArm + (payload ? R.mEgg : 0);
  const x = (R.mBase * R.xBase + R.mArm * ax + (payload ? R.mEgg * tx : 0)) / m;
  return {m, x, drive: clamp((R.casterX - x) / R.casterX, 0.05, 1)};
}

/* ------------------------------------------------------------- arm kinematics ---------------------------------- */
/** Lift servo angle phi (rad, horn from +x, counter-clockwise) -> arm angle theta by circle intersection; null if it jams. */
export function armSolve(phi) {
  const H = [R.servo[0] + R.horn * Math.cos(phi), R.servo[1] + R.horn * Math.sin(phi)];
  const P = R.pivot, dx = H[0] - P[0], dy = H[1] - P[1], dd = Math.hypot(dx, dy);
  const a = R.armAttach, L = R.rod;
  if (dd > a + L || dd < Math.abs(L - a)) return null;
  const k = (a * a - L * L + dd * dd) / (2 * dd), h = Math.sqrt(Math.max(0, a * a - k * k));
  const ux = dx / dd, uy = dy / dd;
  const cands = [[P[0] + k * ux - h * uy, P[1] + k * uy + h * ux], [P[0] + k * ux + h * uy, P[1] + k * uy - h * ux]];
  const A = cands.reduce((m, c) => (c[1] > m[1] ? c : m));                      // the elbow-up solution
  return {theta: Math.atan2(A[1] - P[1], A[0] - P[0]), A, H};
}
export const STOP_AT = 0.108;                                  // the sensor reading that makes the controller brake, m
export const EGG_AHEAD = 0.072;                           // the egg's centre ahead of the arm tip, between the claw's fingers, m
export const PHI_STOW = 74 * D2R, PHI_CARRY = 46 * D2R, PHI_LOW = 18.4 * D2R;
export function armTip(theta) { return [R.pivot[0] + R.armLen * Math.cos(theta), R.pivot[1] + R.armLen * Math.sin(theta)]; }

/* ------------------------------------------------------------------ sound -------------------------------------- */
export const SOUND = {f: 40e3, cycles: 8, beam: 15 * D2R, absDbPerM: 1.3, minRange: 0.02, maxRange: 4.0, ref: 0.01, thresh: 2.5e-4};
export const WALLS = {
  hard:  {name: 'Painted wall',  R: 0.95, scatter: 0.08},
  card:  {name: 'Cardboard box', R: 0.60, scatter: 0.12},
  wood:  {name: 'Wooden board',  R: 0.80, scatter: 0.10},
  cloth: {name: 'Soft fabric',   R: 0.20, scatter: 0.05},
};
export const soundSpeed = (T) => 331.3 + 0.606 * T;
const dir = (ang) => Math.exp(-Math.pow(ang / (SOUND.beam * 1.7), 2));         // -6 dB at 15 degrees, one way, amplitude

/** Amplitude (relative to the burst at 1 cm) of the k-th echo between sensor and a wall d metres away, tilted psi. */
export function echo(d, psi, wall, k = 1) {
  const W = WALLS[wall], P = 2 * k * d;                                          // path length of echo k
  const spread = SOUND.ref / Math.max(P, SOUND.ref);
  const air = Math.pow(10, -SOUND.absDbPerM * P / 20);
  const refl = Math.pow(W.R, k) * Math.pow(0.8, k - 1);                          // wall every pass, the robot's face between
  const specular = Math.pow(dir(0) * dir(2 * psi), k);                           // beam walks off the sensor as the wall tilts
  const diffuse = W.scatter * Math.pow(Math.cos(psi), 2);                        // rough surfaces always give some back
  const g = Math.max(specular * refl, diffuse * Math.pow(0.5, k - 1));
  return spread * air * g;
}
/** The loss budget of the first echo in dB: where the burst's energy went. */
export function budget(d, psi, wall) {
  const W = WALLS[wall], P = 2 * d;
  const spread = 20 * Math.log10(Math.max(P, SOUND.ref) / SOUND.ref);
  const air = SOUND.absDbPerM * P;
  const surf = -20 * Math.log10(W.R);
  const aim = -20 * Math.log10(Math.max(Math.exp(-Math.pow(2 * psi / (SOUND.beam * 1.7), 2)), 1e-4));
  const total = spread + air + surf + aim;
  const a = echo(d, psi, wall, 1);
  return {spread, air, surf, aim, total, amp: a, detected: a > SOUND.thresh && d >= SOUND.minRange && d <= SOUND.maxRange};
}
/** Receiver envelope over time: a burst, then each echo as a 0.45 ms pulse, with the transducer ringing at the start. */
export function envelope(d, psi, wall, T = 22, tMax = null) {
  const c = soundSpeed(T), n = 480, out = [];
  const echoes = [];
  for (let k = 1; k <= 3; k++) echoes.push({t: 2 * k * d / c, a: echo(d, psi, wall, k)});
  const tEnd = tMax ?? Math.min(0.03, Math.max(0.006, echoes[1].t * 1.25));
  for (let i = 0; i <= n; i++) {
    const t = tEnd * i / n;
    let a = 0.9 * Math.exp(-t / 0.00009) * (t < 0.0006 ? 1 : 0.4);               // burst + ring-down
    for (const e of echoes) a += e.a * Math.exp(-Math.pow((t - e.t) / 0.00022, 2));
    out.push([t, a]);
  }
  return {pts: out, echoes, tEnd, c};
}
/** Furthest wall each surface can be seen at (the first echo above the threshold). */
export function maxRangeOf(wall) {
  let lo = 0.02, hi = 6;
  for (let i = 0; i < 40; i++) { const m = (lo + hi) / 2; echo(m, 0, wall, 1) > SOUND.thresh ? (lo = m) : (hi = m); }
  return lo;
}

/* ------------------------------------------------------------ drive tests -------------------------------------- */
/** One side of the robot (a wheel and half the mass) for dt, returns the new {w, v, F, slip}. */
function sideStep(st, V, shorted, N, peak, dt, mass) {
  const rEff = R.wheelR + (st.bands ? R.bandT : 0);
  const slipDen = Math.max(Math.abs(st.w * rEff), Math.abs(st.v), 0.02);
  const s = (st.w * rEff - st.v) / slipDen;
  const F = N * mu(s, peak);
  let tau;
  if (shorted) tau = -MOTOR.etaG * MOTOR.ke * MOTOR.ke * st.w / MOTOR.Rm - Math.sign(st.w) * MOTOR.tauF * (Math.abs(st.w) > 0.05 ? 1 : 0);
  else tau = motor(V, st.w).tau;
  const roll = 0.03 * N * Math.sign(st.v) * (Math.abs(st.v) > 0.003 ? 1 : st.v / 0.003);
  st.w += (tau - F * rEff) / MOTOR.J * dt;
  st.v += (F - roll) / mass * dt;
  st.slip = s; st.F = F; st.tau = tau; st.Pm = shorted ? 0 : Math.max(0, tau * st.w);
  const m = shorted ? {I: 0, Pel: 0} : motor(V, st.w);
  st.I = shorted ? 0 : m.I; st.Pel = shorted ? 0 : m.Pel; st.rEff = rEff;
}
/** Full-throttle start from rest on level ground: speed, wheel-surface speed and slip against time. */
export function stepTest({bands, surf, duty = 1, drive = 0.72, T = 1.0}) {
  const dt = 0.0005, N = 0.5 * drive * (R.mBase + R.mArm) * G, peak = muPeak(bands, surf), mass = 0.5 * (R.mBase + R.mArm);
  const st = {w: 0, v: 0, bands}, pts = {t: [], v: [], wr: [], slip: [], F: []};
  const V = supplyV(duty);
  for (let i = 0; i * dt <= T; i++) {
    sideStep(st, V, false, N, peak, dt, mass);
    if (i % 10 === 0) { pts.t.push(i * dt); pts.v.push(st.v); pts.wr.push(st.w * st.rEff); pts.slip.push(st.slip); pts.F.push(2 * st.F); }
  }
  return pts;
}
/** Tractive effort the motors can ask for at each ground speed against the grip limit of the two tyres. */
export function tractive({bands, surf, duty = 1, drive = 0.72}) {
  const N = drive * (R.mBase + R.mArm) * G, peak = muPeak(bands, surf), rEff = R.wheelR + (bands ? R.bandT : 0);
  const V = supplyV(duty), pts = [];
  for (let i = 0; i <= 60; i++) {
    const v = i / 60 * 0.8, w = v / rEff, m = motor(V, w);
    pts.push([v, Math.max(0, 2 * m.tau / rEff)]);
  }
  return {pts, limit: peak * N, peak};
}
/** Mechanical and electrical power of one motor against wheel speed, for one duty cycle. */
export function powerCurve(duty, bands = true) {
  const V = supplyV(duty), rEff = R.wheelR + (bands ? R.bandT : 0), pts = [];
  const w0 = (V - MOTOR.I0 * MOTOR.Rm) / MOTOR.ke;
  for (let i = 0; i <= 80; i++) {
    const w = w0 * i / 80, m = motor(V, w);
    pts.push({rpm: w * 60 / (2 * Math.PI), kmh: w * rEff * 3.6, tau: m.tau, I: m.I, Pel: m.Pel, Pm: Math.max(0, m.Pmech), eff: m.Pel > 0.01 ? Math.max(0, m.Pmech / m.Pel) : 0});
  }
  return {V, w0, pts};
}

/* ------------------------------------------------------------ breakfast run ------------------------------------ */
export const WORLD = {
  crate: {x: 0.17, z: 0, hx: 0.04, hz: 0.04, h: 0.025},      // the ingredients
  tray: {x: -0.102, z: 0.50, hx: 0.04, hz: 0.04, h: 0.025},  // the breakfast plate
  wall: {x: 1.10},
  start: {x: -0.55, z: 0},
};
function rayBox(ox, oz, dx, dz, b) {
  let t0 = 0, t1 = 1e9;
  for (const [o, d, lo, hi] of [[ox, dx, b.x - b.hx, b.x + b.hx], [oz, dz, b.z - b.hz, b.z + b.hz]]) {
    if (Math.abs(d) < 1e-9) { if (o < lo || o > hi) return Infinity; } else {
      let a = (lo - o) / d, c = (hi - o) / d; if (a > c) [a, c] = [c, a];
      t0 = Math.max(t0, a); t1 = Math.min(t1, c); if (t0 > t1) return Infinity;
    }
  }
  return t0;
}
/** What the sensor reads: the nearest surface in a narrow cone ahead (cone of five rays), metres. */
export function sonarRead(x, z, yaw, extra = []) {
  const ox = x + Math.cos(yaw) * R.sensorX, oz = z + Math.sin(yaw) * R.sensorX;
  let best = SOUND.maxRange, what = 'none';
  for (let i = -2; i <= 2; i++) {
    const a = yaw + i * 6 * D2R, dx = Math.cos(a), dz = Math.sin(a);
    for (const [nm, b] of [['crate', WORLD.crate], ['tray', WORLD.tray], ...extra]) {
      const t = rayBox(ox, oz, dx, dz, b); if (t < best) { best = t; what = nm; }
    }
    if (dx > 1e-6) { const t = (WORLD.wall.x - ox) / dx; if (t > 0 && t < best) { best = t; what = 'wall'; } }
  }
  return {d: best, what};
}

/**
 * Integrates the whole breakfast run at 1 ms with the motor, traction and sonar models, and samples it at 100 Hz.
 * Event-driven: the robot stops where its sensor says, so slipping tyres change the whole timeline.
 */
export function runMission({bands = true, surf = 'desk', duty = 0.7} = {}) {
  const dt = 0.001, stride = 10, peak = muPeak(bands, surf);
  const L = {bands, w: 0, v: 0}, Rr = {bands, w: 0, v: 0};
  let x = WORLD.start.x, z = WORLD.start.z, yaw = 0, wl = 0, wr = 0, t = 0;
  let phi = PHI_STOW, jaw = 0, held = false, phase = 0, phaseT = 0, brakeT = 0, lastYaw = 0, startPos = [0, 0], eggPlaced = false;
  const armTarget = {phi: PHI_STOW, rate: 60 * D2R}, jawTarget = {v: 0, rate: 90 * D2R};
  const out = {dt: dt * stride, n: 0, t: [], x: [], z: [], yaw: [], wl: [], wr: [], phi: [], jaw: [], held: [], vL: [], vR: [], slipL: [], slipR: [], sonar: [], what: [], Pel: [], I: [], drive: [], phase: [], eggX: [], eggZ: [], eggY: [], energy: [], Pm: [], w: []};
  const names = ['IDLE', 'APPROACH', 'BRAKE', 'REACH', 'GRIP', 'LIFT', 'TURN', 'CARRY', 'BRAKE', 'PLACE', 'RETREAT', 'DONE'];
  let energy = 0;
  const pwm = (ph) => ph === 1 || ph === 7 ? duty : ph === 6 ? 0.6 : ph === 10 ? -0.5 : 0;
  const next = (p) => { phase = p; phaseT = 0; };
  let egg = {x: WORLD.crate.x, z: WORLD.crate.z, y: WORLD.crate.h + 0.0225};
  const maxT = 60;
  for (let i = 0; t < maxT; i++, t = i * dt) {
    phaseT += dt;
    const sn = sonarRead(x, z, yaw);
    // ---- the controller (what the Arduino does)
    let uL = 0, uR = 0, short = false;
    switch (phase) {
      case 0: if (phaseT > 0.9) { next(1); } break;
      case 1: { const ramp = clamp(phaseT / 0.35, 0, 1); uL = uR = duty * ramp; if (sn.d <= STOP_AT) { next(2); } break; }
      case 2: short = true; if (Math.abs(L.v) + Math.abs(Rr.v) < 0.006 || phaseT > 1.2) { next(3); armTarget.phi = PHI_LOW; jawTarget.v = 1; } break;
      case 3: short = true; if (phaseT > 1.5) next(4); break;
      case 4: short = true; if (phaseT > 0.35) { jawTarget.v = 0; } if (phaseT > 1.1) { held = true; next(5); armTarget.phi = PHI_CARRY; } break;
      case 5: short = true; if (phaseT > 1.3) { next(6); lastYaw = yaw; } break;
      case 6: { // PD on heading: turn left 90 degrees about the axle, ease off, hold
        const err = lastYaw + 90 * D2R - yaw, om = (Rr.v - L.v) / R.track;
        let u = clamp(3.0 * err - 0.4 * om, -0.6, 0.6);
        if (Math.abs(u) < 0.35) u = 0.35 * Math.sign(err);                       // below this the gearmotor just hums against stiction
        uR = u * clamp(phaseT / 0.25, 0, 1); uL = -uR;
        if (Math.abs(err) < 3 * D2R && Math.abs(om) < 0.35) next(12);
        break; }
      case 12: short = true; if (phaseT > 0.5) next(7); break;
      case 7: { const ramp = clamp(phaseT / 0.35, 0, 1); uL = uR = duty * ramp; if (sn.d <= STOP_AT) next(8); break; }
      case 8: short = true; if (Math.abs(L.v) + Math.abs(Rr.v) < 0.006 || phaseT > 1.2) { next(9); armTarget.phi = PHI_LOW; } break;
      case 9: short = true;
        if (phaseT > 1.5 && phaseT < 1.51) jawTarget.v = 1;
        if (phaseT > 1.5 && !eggPlaced) { held = false; eggPlaced = true; }
        if (phaseT > 2.4) { armTarget.phi = PHI_STOW; jawTarget.v = 0; next(10); startPos = [x, z]; } break;
      case 10: { const ramp = clamp(phaseT / 0.2, 0, 1); uL = uR = -0.5 * ramp; if (Math.hypot(x - startPos[0], z - startPos[1]) >= 0.14) next(11); break; }
      case 11: short = true; if (phaseT > 3.0) i = 1e9; break;
      default: break;
    }
    // arm and jaw servos move at their own rate towards the targets
    phi += clamp(armTarget.phi - phi, -armTarget.rate * dt, armTarget.rate * dt);
    jaw += clamp(jawTarget.v - jaw, -jawTarget.rate * dt / 0.6, jawTarget.rate * dt / 0.6);
    const sol = armSolve(phi), theta = sol ? sol.theta : 1.0;
    const cm = com(theta, held), N = 0.5 * cm.drive * cm.m * G, mass = 0.5 * cm.m;
    sideStep(L, short ? 0 : supplyV(uL), short, N, peak, dt, mass);
    sideStep(Rr, short ? 0 : supplyV(uR), short, N, peak, dt, mass);
    const v = 0.5 * (L.v + Rr.v), om = (Rr.v - L.v) / R.track;
    yaw += om * dt; x += v * Math.cos(yaw) * dt; z += v * Math.sin(yaw) * dt;
    wl += L.w * dt; wr += Rr.w * dt;
    energy += (L.Pel + Rr.Pel + 0.12 * MOTOR.Vbat) * dt;                          // two motors + the electronics
    if (held) { const tip = armTip(theta), gx = tip[0] + EGG_AHEAD, gy = tip[1] - 0.012; egg = {x: x + Math.cos(yaw) * gx, z: z + Math.sin(yaw) * gx, y: gy}; }
    else if (eggPlaced) { egg = {x: egg.x, z: egg.z, y: WORLD.tray.h + 0.006 + 0.0225}; }
    if (i % stride === 0) {
      out.t.push(t); out.x.push(x); out.z.push(z); out.yaw.push(yaw); out.wl.push(wl); out.wr.push(wr); out.phi.push(phi); out.jaw.push(jaw);
      out.held.push(held ? 1 : 0); out.vL.push(L.v); out.vR.push(Rr.v); out.slipL.push(L.slip || 0); out.slipR.push(Rr.slip || 0);
      out.sonar.push(sn.d); out.what.push(sn.what); out.Pel.push(L.Pel + Rr.Pel); out.I.push(L.I + Rr.I); out.drive.push(cm.drive);
      out.phase.push(phase === 12 ? 6 : phase); out.eggX.push(egg.x); out.eggZ.push(egg.z); out.eggY.push(egg.y); out.energy.push(energy); out.Pm.push(L.Pm + Rr.Pm); out.w.push((Math.abs(L.w) + Math.abs(Rr.w)) / 2);
    }
  }
  out.n = out.t.length; out.duration = out.t[out.n - 1]; out.names = names;
  return out;
}
/** Linear sample of every channel at time t. */
export function at(run, t) {
  const f = clamp(t / run.dt, 0, run.n - 1), i = Math.floor(f), j = Math.min(i + 1, run.n - 1), k = f - i;
  const o = {i};
  for (const key of ['t', 'x', 'z', 'yaw', 'wl', 'wr', 'phi', 'jaw', 'vL', 'vR', 'slipL', 'slipR', 'sonar', 'Pel', 'I', 'drive', 'eggX', 'eggZ', 'eggY', 'energy', 'Pm', 'w']) o[key] = run[key][i] + (run[key][j] - run[key][i]) * k;
  o.held = run.held[i]; o.phase = run.phase[i]; o.what = run.what[i];
  return o;
}
