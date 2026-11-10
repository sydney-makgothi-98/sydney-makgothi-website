// Patrick's breakfast run in the kitchen: five ingredients from the pantry to the breakfast area.
// A steppable simulation: step(dt) advances the motors, the tyres, the arm servos and the controller by one tick (1 ms).
// patrick_mission.cpp is the same program in C++; the two are compared tick for tick (see the comment at its top).
import {R, MOTOR, G, STOP_AT, PHI_STOW, PHI_CARRY, PHI_LOW, armSolve, armTip, com, supplyV, sideStep, muPeak, sonarRead} from './model.js';

const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
const D2R = Math.PI / 180;

/* ------------------------------------------------------------------ the kitchen ---------------------------------- */
export const K = {
  pantryX: 0.60, kitchenX: -0.62,                 // the centre line of the pantry pads and of the breakfast spots, m
  zs: [-0.50, -0.25, 0.0, 0.25, 0.50],            // five lanes, one per ingredient (z to the robot's left)
  pad: {hx: 0.04, hz: 0.04, h: 0.025}, plateT: 0.004,
  start: {x: -0.05, z: -0.50},
  retreat: 0.14,                                  // how far Patrick backs away from the breakfast area before turning, m
};
export const ITEMS = [
  {id: 'eggs',  name: 'Eggs',  full: 'Egg carton (2 eggs)', w: 0.034, m: 0.045},
  {id: 'salt',  name: 'Salt',  full: 'Salt shaker',         w: 0.036, m: 0.055},
  {id: 'spice', name: 'Spice', full: 'Spice jar',           w: 0.038, m: 0.050},
  {id: 'sauce', name: 'Sauce', full: 'Sauce bottle',        w: 0.040, m: 0.080},
  {id: 'glass', name: 'Glass', full: 'Drinking glass',      w: 0.042, m: 0.060},
];
/** Jaw opening (0 closed .. 1 fully open) at which the fingers touch an item of width w: finger contact is 36 mm from the jaw hinge. */
export const jawFor = (w) => Math.asin(clamp((w / 2 - 0.0165) / 0.036, 0, 1)) / (28 * D2R);
export const GRIP_H = 0.0225;                     // the claw holds each item this far above its base, m

export const PH = {IDLE: 0, APPROACH: 1, BRAKE: 2, REACH: 3, GRIP: 4, LIFT: 5, TURN_CARRY: 6, SETTLE_C: 7, CARRY: 8, BRAKE_C: 9, PLACE: 10, RETREAT: 11,
  TURN_SHIFT: 12, SETTLE_T: 13, SHIFT: 14, SETTLE_S: 15, TURN_PANTRY: 16, SETTLE_P: 17, DONE: 18};
export const PH_NAMES = ['IDLE', 'APPROACH', 'BRAKE', 'REACH', 'GRIP', 'LIFT', 'TURN', 'SETTLE', 'CARRY', 'BRAKE', 'PLACE', 'RETREAT', 'TURN', 'SETTLE', 'SHIFT', 'SETTLE', 'TURN', 'SETTLE', 'DONE'];
/** The nine steps shown to the visitor, and which controller phase belongs to which. */
export const STEPS = ['APPROACH', 'BRAKE', 'REACH', 'GRIP', 'LIFT', 'TURN', 'CARRY', 'PLACE', 'RETREAT', 'SHIFT'];
export const PH2STEP = [-1, 0, 1, 2, 3, 4, 5, 5, 6, 6, 7, 8, 9, 9, 9, 9, 9, 9, -1];

const boxes = [];                                 // what the sonar can see: every pad and every breakfast spot
K.zs.forEach((z, i) => { boxes.push(['pad', {x: K.pantryX, z, hx: K.pad.hx, hz: K.pad.hz}]); boxes.push(['spot', {x: K.kitchenX, z, hx: K.pad.hx, hz: K.pad.hz}]); });

export class Mission {
  constructor({duty = 0.7, bands = true, surf = 'desk'} = {}) {
    this.duty = duty; this.bands = bands; this.surf = surf; this.peak = muPeak(bands, surf);
    this.dt = 0.001; this.stride = 10;
    this.reset();
  }
  reset() {
    this.L = {bands: this.bands, w: 0, v: 0}; this.Rr = {bands: this.bands, w: 0, v: 0};
    Object.assign(this, {x: K.start.x, z: K.start.z, yaw: 0, wl: 0, wr: 0, t: 0, phi: PHI_STOW, jaw: 0, held: false, phase: PH.IDLE, phaseT: 0,
      item: 0, yawRef: 0, startPos: [0, 0], energy: 0, armTarget: PHI_STOW, jawTarget: 0, tick: 0, theta: 0, stopped: false});
    this.g = 0;                                   // the "go" gain: 1 = running, 0 = halted; it ramps, so every stop is gradual
    this.status = 'READY';                        // READY, RUNNING, PAUSING, PAUSED, STOPPING, STOPPED, DONE
    this.goal = 0;                                // the value g is heading for
    this.items = ITEMS.map((it, i) => ({state: 0, x: K.pantryX, z: K.zs[i], y: K.pad.h, yaw: 0}));   // 0 on the pantry pad, 1 in the claw, 2 on the table
    this.sn = {d: 4, what: 'none'};
    this.Pel = 0; this.I = 0; this.Pm = 0; this.w = 0; this.drive = 0.7; this.slipL = 0; this.slipR = 0;
    this.rec = {n: 0, dt: this.dt * this.stride};
    for (const k of ['t', 'x', 'z', 'yaw', 'wl', 'wr', 'phi', 'jaw', 'held', 'vL', 'vR', 'slipL', 'slipR', 'sonar', 'Pel', 'I', 'drive', 'phase', 'energy', 'Pm', 'w', 'item', 'g']) this.rec[k] = [];
    this.next(PH.IDLE);
  }
  next(p) { this.phase = p; this.phaseT = 0; }
  start() {
    if (this.status === 'DONE' || this.status === 'STOPPED') this.reset();
    this.goal = 1; this.status = 'RUNNING';
  }
  pause() { if (this.status === 'RUNNING') { this.goal = 0; this.status = 'PAUSING'; } }
  resume() { if (this.status === 'PAUSING' || this.status === 'PAUSED') { this.goal = 1; this.status = 'RUNNING'; } }
  stop() { if (this.status !== 'READY' && this.status !== 'DONE' && this.status !== 'STOPPED') { this.goal = 0; this.status = 'STOPPING'; } }
  get active() { return this.g > 0 || this.goal > 0; }
  get done() { return this.phase === PH.DONE; }
  /** The soft-stop gain: eased, so the very first and very last parts of a stop are gentle too. */
  get ge() { return this.g * this.g * (3 - 2 * this.g); }

  step() {
    const dt = this.dt;
    // the go-gain slews towards its goal: 0.8 s to pause, 0.45 s to stop, 0.6 s to resume
    const rate = this.goal > this.g ? 1 / 0.6 : this.status === 'STOPPING' ? 1 / 0.45 : 1 / 0.8;
    this.g += clamp(this.goal - this.g, -rate * dt, rate * dt);
    if (this.g <= 0 && this.goal === 0) {
      if (this.status === 'PAUSING') this.status = 'PAUSED';
      if (this.status === 'STOPPING') this.status = 'STOPPED';
    }
    if (this.g <= 0 && this.goal === 0) return false;             // nothing moves while halted
    const ge = this.ge, dtc = dt * ge;                            // controller time slows with the gain
    this.t += dt;
    this.phaseT += dtc;
    const L = this.L, Rr = this.Rr, duty = this.duty;
    const sn = this.sn = sonarRead(this.x, this.z, this.yaw, boxes, false);
    const it = ITEMS[this.item];
    let uL = 0, uR = 0, short = false;
    const ramp = (T) => clamp(this.phaseT / T, 0, 1);
    const hold = () => {                                          // steer to the reference heading while driving straight
      const om = (Rr.v - L.v) / R.track, s = clamp(2.5 * (this.yawRef - this.yaw) - 0.35 * om, -0.15, 0.15);
      uR += s; uL -= s;
    };
    const turn = (nextPhase) => {                                 // PD on heading, ease off, hold
      const err = this.yawRef - this.yaw, om = (Rr.v - L.v) / R.track;
      let u = clamp(3.0 * err - 0.4 * om, -0.6, 0.6);
      if (Math.abs(u) < 0.35) u = 0.35 * Math.sign(err);        // below this the gearmotor only hums against stiction
      uR = u * ramp(0.25); uL = -uR;
      if (Math.abs(err) < 3 * D2R && Math.abs(om) < 0.35) this.next(nextPhase);
    };
    const settled = () => Math.abs(L.v) + Math.abs(Rr.v) < 0.006 || this.phaseT > 1.2;
    switch (this.phase) {
      case PH.IDLE: if (this.phaseT > 0.9) this.next(PH.APPROACH); break;
      case PH.APPROACH: uL = uR = duty * ramp(0.35); hold(); if (sn.d <= STOP_AT) this.next(PH.BRAKE); break;
      case PH.BRAKE: short = true; if (settled()) { this.next(PH.REACH); this.armTarget = PHI_LOW; this.jawTarget = 1; } break;
      case PH.REACH: short = true; if (this.phaseT > 1.5) this.next(PH.GRIP); break;
      case PH.GRIP: short = true;
        if (this.phaseT > 0.35) this.jawTarget = jawFor(it.w);
        if (this.phaseT > 1.1) { this.held = true; this.items[this.item].state = 1; this.next(PH.LIFT); this.armTarget = PHI_CARRY; } break;
      case PH.LIFT: short = true; if (this.phaseT > 1.3) { this.next(PH.TURN_CARRY); this.yawRef += Math.PI; } break;
      case PH.TURN_CARRY: turn(PH.SETTLE_C); break;
      case PH.SETTLE_C: short = true; if (this.phaseT > 0.5) this.next(PH.CARRY); break;
      case PH.CARRY: uL = uR = duty * ramp(0.35); hold(); if (sn.d <= STOP_AT) this.next(PH.BRAKE_C); break;
      case PH.BRAKE_C: short = true; if (settled()) { this.next(PH.PLACE); this.armTarget = PHI_LOW; } break;
      case PH.PLACE: short = true;
        if (this.phaseT > 1.5 && this.held) {                   // let go: the item stays exactly where the claw had it
          this.jawTarget = 1; this.held = false;
          const q = this.items[this.item]; q.state = 2; q.y = K.pad.h + K.plateT;
        }
        if (this.phaseT > 2.4) { this.armTarget = PHI_STOW; this.jawTarget = 0; this.next(PH.RETREAT); this.startPos = [this.x, this.z]; } break;
      case PH.RETREAT: uL = uR = -0.5 * ramp(0.2); hold();
        if (Math.hypot(this.x - this.startPos[0], this.z - this.startPos[1]) >= K.retreat) {
          if (this.item === ITEMS.length - 1) this.next(PH.DONE); else { this.next(PH.TURN_SHIFT); this.yawRef -= Math.PI / 2; }
        } break;
      case PH.TURN_SHIFT: turn(PH.SETTLE_T); break;
      case PH.SETTLE_T: short = true; if (this.phaseT > 0.4) this.next(PH.SHIFT); break;
      case PH.SHIFT: {                                          // drive along the table to the next lane; slow down as the gap closes
        const rem = K.zs[this.item + 1] - this.z;
        uL = uR = Math.max(0.4, duty * clamp(rem / 0.12, 0, 1)) * ramp(0.3); hold();
        if (rem < 0.004) this.next(PH.SETTLE_S); break; }
      case PH.SETTLE_S: short = true; if (settled()) { this.next(PH.TURN_PANTRY); this.yawRef -= Math.PI / 2; } break;
      case PH.TURN_PANTRY: turn(PH.SETTLE_P); break;
      case PH.SETTLE_P: short = true; if (this.phaseT > 0.5) { this.item++; this.next(PH.APPROACH); } break;
      case PH.DONE: short = true; break;
      default: break;
    }
    const sc = ge;                                                // every drive command is scaled by the soft-stop gain
    uL *= sc; uR *= sc;
    // the arm and claw servos move at their own rate towards their targets; the gain slows them too
    this.phi += clamp(this.armTarget - this.phi, -60 * D2R * dtc, 60 * D2R * dtc);
    this.jaw += clamp(this.jawTarget - this.jaw, -90 * D2R * dtc / 0.6, 90 * D2R * dtc / 0.6);
    const sol = armSolve(this.phi); this.theta = sol ? sol.theta : 1.0;
    const pm = this.held ? it.m : 0;
    const cm = com(this.theta, pm), N = 0.5 * cm.drive * cm.m * G, mass = 0.5 * cm.m;
    sideStep(L, short ? 0 : supplyV(uL), short, N, this.peak, dt, mass);
    sideStep(Rr, short ? 0 : supplyV(uR), short, N, this.peak, dt, mass);
    const v = 0.5 * (L.v + Rr.v), om = (Rr.v - L.v) / R.track;
    this.yaw += om * dt; this.x += v * Math.cos(this.yaw) * dt; this.z += v * Math.sin(this.yaw) * dt;
    this.wl += L.w * dt; this.wr += Rr.w * dt;
    this.Pel = L.Pel + Rr.Pel; this.I = L.I + Rr.I; this.Pm = L.Pm + Rr.Pm; this.w = (Math.abs(L.w) + Math.abs(Rr.w)) / 2; this.drive = cm.drive;
    this.slipL = L.slip || 0; this.slipR = Rr.slip || 0;
    this.energy += (this.Pel + 0.12 * MOTOR.Vbat) * dt;
    if (this.held) {                                              // the item rides in the claw
      const tip = armTip(this.theta), gx = tip[0] + 0.072, q = this.items[this.item];
      q.x = this.x + Math.cos(this.yaw) * gx; q.z = this.z + Math.sin(this.yaw) * gx; q.y = tip[1] - 0.012 - GRIP_H; q.yaw = this.yaw;
    }
    if (this.tick++ % this.stride === 0) this.record();
    if (this.phase === PH.DONE && this.phaseT > 2.0) { this.goal = 0; this.status = 'DONE'; this.g = 0; }
    return true;
  }
  record() {
    const r = this.rec;
    r.t.push(this.t); r.x.push(this.x); r.z.push(this.z); r.yaw.push(this.yaw); r.wl.push(this.wl); r.wr.push(this.wr); r.phi.push(this.phi); r.jaw.push(this.jaw);
    r.held.push(this.held ? 1 : 0); r.vL.push(this.L.v); r.vR.push(this.Rr.v); r.slipL.push(this.slipL); r.slipR.push(this.slipR); r.sonar.push(this.sn.d);
    r.Pel.push(this.Pel); r.I.push(this.I); r.drive.push(this.drive); r.phase.push(this.phase); r.energy.push(this.energy); r.Pm.push(this.Pm); r.w.push(this.w);
    r.item.push(this.item); r.g.push(this.g);
    r.n++;
  }
}
