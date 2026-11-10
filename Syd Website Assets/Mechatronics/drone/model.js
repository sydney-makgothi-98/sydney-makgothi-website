// The self-stabilising agricultural drone: one model behind every graph, readout and the 3D pose.
// Source: "Aggressive Manoeuvre Stabilisation of Agricultural Drone", MECN4029, Wits, 2025 (Makgothi, van der Merwe, Alexander, Graca).
// Pure maths, SI units. State: position x,y,z; velocity; Euler angles roll (phi), pitch (theta), yaw (psi) and their rates.

export const G = 9.81, M = 1.05;                         // gravity and the DJI Mavic 3M's mass, kg (report Table 1)
export const IXX = 0.002494, IYY = 0.002494, IZZ = 0.004988;   // kg m^2 (report Table 1)
export const LOOPS = ['z', 'roll', 'pitch', 'yaw'];
export const LOOP_NAME = {z: 'Altitude', roll: 'Roll', pitch: 'Pitch', yaw: 'Yaw'};
export const J = {z: M, roll: IXX, pitch: IYY, yaw: IZZ};  // what each loop's double integrator divides by
export const ZREF = 10;                                   // the commanded hover height, m

/* ---------------------------------------------------------------------------------------------- the gains ----- */
export const PD = {   // report Table 2
  z: {kp: 29.7268, kd: 6.993, ki: 0}, roll: {kp: 0.0706, kd: 0.0166, ki: 0}, pitch: {kp: 0.0706, kd: 0.0166, ki: 0}, yaw: {kp: 0.1412, kd: 0.0332, ki: 0},
};
export const PID_REPORT = {   // report Table 4, exactly as printed
  z: {kp: 11.4, kd: 2.63, ki: 1.12}, roll: {kp: 0.027, kd: 0.0063, ki: 0.0027}, pitch: {kp: 0.027, kd: 0.0063, ki: 0.0027}, yaw: {kp: 0.053, kd: 0.012, ki: 0.005},
};
/** Design point: 8 % overshoot, 1.2 s settling (report section 4.1). */
export const DESIGN = (() => {
  const os = 0.08, ts = 1.2, lg = Math.log(os), zeta = -lg / Math.sqrt(Math.PI ** 2 + lg * lg), wn = 4 / (ts * zeta);
  const sd = {re: -3.33, im: 4.15};                                   // the report rounds the poles to these
  return {os, ts, zeta, wn, sd};
})();
/** The report's own method for the PID: zeros at -a and -b, b = 0.1 (assumed), a from the angle condition, K from the magnitude condition. */
export const DERIVED = (() => {
  const {sd} = DESIGN, b = 0.1, deg = (re, im) => Math.atan2(im, re) * 180 / Math.PI;
  const f = (a) => deg(sd.re + a, sd.im) + deg(sd.re + b, sd.im) - 3 * deg(sd.re, sd.im) + 180;
  let lo = 0.1, hi = 20; for (let i = 0; i < 60; i++) { const mid = (lo + hi) / 2; (f(lo) * f(mid) <= 0) ? (hi = mid) : (lo = mid); }
  const a = (lo + hi) / 2, mag = (x) => Math.hypot(sd.re + x, sd.im), kper = Math.pow(Math.hypot(sd.re, sd.im), 3) / (mag(a) * mag(b));
  const out = {a, b, kper};
  for (const l of LOOPS) { const K = J[l] * kper; out[l] = {kp: K * (a + b), kd: K, ki: K * a * b}; }
  return out;
})();
export const gainSet = (ctrl, gains) => (ctrl === 'PD' ? PD : gains === 'derived' ? DERIVED : PID_REPORT);

/* ------------------------------------------------------------------------------------------- scenarios ------ */
const D = Math.PI / 180;
/** Initial conditions from the report (Tables 6 to 8). Random values in the report are fixed here so every visit is the same. */
export const SCENARIOS = {
  hover: {name: 'HOVER', blurb: 'Hovering at 10 m with a little gusty air: the minor sway.', s: {z: ZREF}, sway: true},
  takeoff: {name: 'TAKE-OFF', blurb: 'The report\'s basic test: climb from the ground to 10 m starting from -30 degrees attitudes.', s: {z: 0, phi: -30 * D, th: -30 * D, psi: -30 * D}},
  throw: {name: 'FREEHAND THROW', blurb: 'Launched from the arm at 1.2 m, 10 m/s upwards, tumbling (Table 6).', s: {z: 1.2, vz: 10, phi: 0.35, th: -0.3, psi: 0.45, p: 2.4, q: -2.0, r: 2.9}},
  fall: {name: 'FREE FALL', blurb: 'Dropped from 15 m at -28 m/s, spinning, any attitude (Table 7).', s: {z: 15, vz: -28, phi: 2.6, th: -1.2, psi: 1.0, p: 4.5, q: -3.8, r: 5.2}},
  flip: {name: 'UPSIDE DOWN', blurb: 'Snagged on cane and flipped: roll set to -180 degrees.', s: {z: ZREF, phi: -Math.PI}},
  gust: {name: 'WIND GUST', blurb: 'Hovering, then hit sideways: 5 m/s and a 2 pi rad/s tumble, 0.5 m low (Table 8).', s: {z: 9.5, vx: 5, vy: 5, p: 2 * Math.PI, q: 2 * Math.PI}},
  bird: {name: 'BIRD STRIKE', blurb: 'A short, hard impulse to all twelve states (size chosen for illustration).', s: {z: ZREF, vx: 3, vy: 2, vz: -4, phi: 0.25, th: -0.2, psi: 0.3, p: 3, q: 3, r: 3}},
};

/* ------------------------------------------------------------------------------------------------ the sim ---- */
export class Sim {
  constructor({mode = 'nonlinear', ctrl = 'PID', gains = 'report', scn = 'hover'} = {}) { this.mode = mode; this.ctrl = ctrl; this.gains = gains; this.dt = 0.001; this.reset(scn); }
  reset(scn = this.scn) {
    this.scn = scn;
    const s = SCENARIOS[scn].s;
    Object.assign(this, {x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0, phi: 0, th: 0, psi: 0, p: 0, q: 0, r: 0}, s);
    this.int = {z: 0, roll: 0, pitch: 0, yaw: 0};
    this.t = 0; this.tick = 0; this.crashed = false; this.U = [M * G, 0, 0, 0]; this.terms = {};
    for (const l of LOOPS) this.terms[l] = {p: 0, i: 0, d: 0, u: 0, e: 0};
    this.rec = {n: 0, t: [], x: [], y: [], z: [], phi: [], th: [], psi: [], vx: [], vy: [], vz: [], p: [], q: [], r: [], U1: [], U2: [], U3: [], U4: [], term: {}};
    for (const l of LOOPS) this.rec.term[l] = {p: [], i: [], d: [], u: []};
    this.energy = 0; this.sway = SCENARIOS[scn].sway ? 1 : 0;
  }
  get gs() { return gainSet(this.ctrl, this.gains); }
  /** One PID: u = Kp e + Ki integral(e) + Kd de/dt. The derivative uses the measured rate (the setpoint never moves, so it is the same thing, without a kick). */
  pid(loop, e, rate, dt) {
    const g = this.gs[loop];
    this.int[loop] += e * dt;
    const T = this.terms[loop]; T.e = e; T.p = g.kp * e; T.i = g.ki * this.int[loop]; T.d = g.kd * -rate; T.u = T.p + T.i + T.d;
    return T.u;
  }
  step() {
    const dt = this.dt, t = this.t;
    // ---- the controller: four loops (the report controls altitude, roll, pitch and yaw; x and y are left alone)
    const U1 = M * G + this.pid('z', ZREF - this.z, this.vz, dt);
    let U2 = this.pid('roll', -this.phi, this.p, dt), U3 = this.pid('pitch', -this.th, this.q, dt), U4 = this.pid('yaw', -this.psi, this.r, dt);
    if (this.sway) {                                              // gusty air: small torques, a few slow sines (deterministic)
      U2 += 0.0012 * (Math.sin(2 * Math.PI * 0.31 * t) + 0.6 * Math.sin(2 * Math.PI * 0.77 * t + 1.1));
      U3 += 0.0012 * (Math.sin(2 * Math.PI * 0.23 * t + 0.6) + 0.6 * Math.sin(2 * Math.PI * 0.61 * t + 2.0));
      U4 += 0.001 * Math.sin(2 * Math.PI * 0.17 * t + 2.2);
    }
    this.U = [U1, U2, U3, U4];
    // ---- the plant
    let az, ap, aq, ar, ax, ay;
    if (this.mode === 'linear') {                                 // small angles around hover: four double integrators (report section 2.2)
      az = U1 / M - G; ap = U2 / IXX; aq = U3 / IYY; ar = U4 / IZZ; ax = G * this.th; ay = -G * this.phi;
    } else {                                                      // report equation 2.1 (gyroscopic and drag terms neglected, as the report does)
      const cf = Math.cos(this.phi), sf = Math.sin(this.phi), ct = Math.cos(this.th), st = Math.sin(this.th), cp = Math.cos(this.psi), sp = Math.sin(this.psi);
      az = -G + cf * ct * U1 / M;
      ax = (cf * st * cp + sf * sp) * U1 / M; ay = (cf * st * sp - sf * cp) * U1 / M;
      ap = ((IYY - IZZ) / IXX) * this.q * this.r + U2 / IXX;
      aq = ((IZZ - IXX) / IYY) * this.p * this.r + U3 / IYY;
      ar = ((IXX - IYY) / IZZ) * this.p * this.q + U4 / IZZ;
    }
    this.vz += az * dt; this.vx += ax * dt; this.vy += ay * dt; this.p += ap * dt; this.q += aq * dt; this.r += ar * dt;
    this.z += this.vz * dt; this.x += this.vx * dt; this.y += this.vy * dt; this.phi += this.p * dt; this.th += this.q * dt; this.psi += this.r * dt;
    if (this.z < 0) { this.z = 0; if (this.vz < -1 && !this.crashed) this.crashed = true; this.vz = Math.max(0, this.vz); }
    this.energy += (U1 * U1 + U2 * U2 + U3 * U3 + U4 * U4) * dt;   // the report's measure (equation 6.2)
    this.t += dt;
    if (this.tick++ % 20 === 0) this.record();
  }
  record() {
    const r = this.rec;
    r.t.push(this.t); r.x.push(this.x); r.y.push(this.y); r.z.push(this.z); r.phi.push(this.phi); r.th.push(this.th); r.psi.push(this.psi);
    r.vx.push(this.vx); r.vy.push(this.vy); r.vz.push(this.vz); r.p.push(this.p); r.q.push(this.q); r.r.push(this.r);
    r.U1.push(this.U[0]); r.U2.push(this.U[1]); r.U3.push(this.U[2]); r.U4.push(this.U[3]);
    for (const l of LOOPS) { const T = this.terms[l], R = r.term[l]; R.p.push(T.p); R.i.push(T.i); R.d.push(T.d); R.u.push(T.u); }
    r.n++;
    if (r.n > 4000) this.trim();
  }
  trim() { const r = this.rec, k = 1000; for (const key of Object.keys(r)) { if (Array.isArray(r[key])) r[key].splice(0, k); } for (const l of LOOPS) for (const key of ['p', 'i', 'd', 'u']) r.term[l][key].splice(0, k); r.n -= k; }
}

/* ------------------------------------------------------------------------------ frequency-domain analysis ---- */
const cx = {add: (a, b) => ({re: a.re + b.re, im: a.im + b.im}), mul: (a, b) => ({re: a.re * b.re - a.im * b.im, im: a.re * b.im + a.im * b.re}),
  div: (a, b) => { const d = b.re * b.re + b.im * b.im; return {re: (a.re * b.re + a.im * b.im) / d, im: (a.im * b.re - a.re * b.im) / d}; }, abs: (a) => Math.hypot(a.re, a.im)};
/** The controller C(s) of a type at s = j w. */
export function C_at(type, g, w) {
  const s = {re: 0, im: w};
  const kp = {re: g.kp, im: 0}, ki = cx.div({re: g.ki, im: 0}, s), kd = {re: 0, im: g.kd * w};
  switch (type) {
    case 'P': return kp; case 'I': return ki; case 'PI': return cx.add(kp, ki); case 'PD': return cx.add(kp, kd); default: return cx.add(cx.add(kp, ki), kd);
  }
}
/** Open loop L(j w) = C G with G = 1 / (J s^2). */
export function L_at(type, g, J_, w) { const c = C_at(type, g, w); return cx.div(c, {re: -J_ * w * w, im: 0}); }
export function bode(type, g, J_, n = 240) {
  const out = [];
  for (let i = 0; i < n; i++) {
    const w = Math.pow(10, -2 + 4 * i / (n - 1)), L = L_at(type, g, J_, w);
    out.push({w, db: 20 * Math.log10(cx.abs(L)), ph: Math.atan2(L.im, L.re) * 180 / Math.PI});
  }
  // the phase of a double integrator with PID starts at -270, of P at -180: put the first point in (-360, 0], then unwrap the rest
  while (out[0].ph > 1e-9) out[0].ph -= 360; while (out[0].ph <= -360) out[0].ph += 360;
  for (let i = 1; i < out.length; i++) { while (out[i].ph - out[i - 1].ph > 180) out[i].ph -= 360; while (out[i].ph - out[i - 1].ph < -180) out[i].ph += 360; }
  return out;
}
export function margins(pts) {
  let wc = null, pm = null;
  for (let i = 1; i < pts.length; i++) if (pts[i - 1].db > 0 && pts[i].db <= 0) { const k = pts[i - 1].db / (pts[i - 1].db - pts[i].db); wc = pts[i - 1].w * Math.pow(pts[i].w / pts[i - 1].w, k); const ph = pts[i - 1].ph + k * (pts[i].ph - pts[i - 1].ph); pm = ph + 180; break; }
  return {wc, pm};
}
export function nyquist(type, g, J_, n = 400) { const out = []; for (let i = 0; i < n; i++) { const w = Math.pow(10, -2 + 4 * i / (n - 1)), L = L_at(type, g, J_, w); out.push([L.re, L.im]); } return out; }

/** Roots of a real polynomial (highest power first), by Durand-Kerner. */
export function roots(c) {
  const n = c.length - 1, a = c.map((v) => v / c[0]);
  let r = Array.from({length: n}, (_, k) => ({re: Math.cos(0.9 + 2 * Math.PI * k / n) * 3, im: Math.sin(0.9 + 2 * Math.PI * k / n) * 3}));
  for (let it = 0; it < 200; it++) for (let i = 0; i < n; i++) {
    let p = {re: 1, im: 0}; for (let k = 1; k <= n; k++) p = cx.add(cx.mul(p, r[i]), {re: a[k], im: 0});
    let d = {re: 1, im: 0}; for (let j = 0; j < n; j++) if (j !== i) d = cx.mul(d, {re: r[i].re - r[j].re, im: r[i].im - r[j].im});
    const q = cx.div(p, d); r[i] = {re: r[i].re - q.re, im: r[i].im - q.im};
  }
  return r.map((z) => ({re: Math.abs(z.re) < 1e-9 ? 0 : z.re, im: Math.abs(z.im) < 1e-9 ? 0 : z.im}));
}
/** Closed-loop characteristic polynomial of a controller type on a double integrator J s^2. */
export function charPoly(type, g, J_) {
  switch (type) {
    case 'P': return [J_, 0, g.kp];
    case 'I': return [J_, 0, 0, g.ki];
    case 'PI': return [J_, 0, g.kp, g.ki];
    case 'PD': return [J_, g.kd, g.kp];
    default: return [J_, g.kd, g.kp, g.ki];
  }
}
/** Root locus of the PID loop as its overall gain K varies, with the zeros (-a, -b) fixed by the gain ratios. */
export function locus(g, J_, kMax) {
  const a_b = g.kp / g.kd, ab = g.ki / g.kd, out = [];
  for (let i = 0; i <= 160; i++) { const K = kMax * i / 160; out.push({K, r: roots([J_, K, K * a_b, K * ab])}); }
  return out;
}
/** A unit step in the reference through a controller type, on the double integrator (linear, no saturation). */
export function stepResponse(type, g, J_, T = 8, dt = 0.002) {
  let x = 0, v = 0, ii = 0; const pts = [];
  for (let i = 0; i * dt <= T; i++) {
    const e = 1 - x; ii += e * dt;
    const u = (type === 'I' ? 0 : g.kp * e) + (type === 'I' || type === 'PI' || type === 'PID' ? g.ki * ii : 0) + (type === 'PD' || type === 'PID' ? g.kd * -v : 0);
    v += u / J_ * dt; x += v * dt;
    if (i % 10 === 0) pts.push([i * dt, x]);
    if (Math.abs(x) > 1e6) break;
  }
  return pts;
}
export const routhOK = (type, g, J_) => {
  switch (type) { case 'P': case 'I': case 'PI': return false; case 'PD': return g.kp > 0 && g.kd > 0; default: return g.kd * g.kp - J_ * g.ki > 0 && g.kp > 0 && g.kd > 0 && g.ki > 0; }
};
