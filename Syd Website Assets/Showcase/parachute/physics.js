// Three-stage parachute braking of the Shockwave jet truck. One ODE: m dv/dt = -(0.5 rho v^2 CdA(t) + brake + roll).
// Source figures: the KTS project blog (truck mass, speeds, canopy sizes, reefing schedule). Drag coefficients are assumptions fitted to the blog's reported g levels.
export const MPH = 0.44704, G = 9.80665, FT = 0.3048;
export const DEFAULTS = {
  m: 3175, v0: 376 * MPH, rho: 1.1,            // kg, m/s, kg/m^3 (Bonneville altitude)
  dDrogue: 8 * FT, cdDrogue: 0.85,             // 8 ft Kevlar drogue
  dMain: 18 * FT, cdMain: 0.95,                // 18 ft reinforced nylon primary
  vMain: 250 * MPH, vBrake: 80 * MPH,          // stage switch speeds
  reef1: 0.40, t1: 2, reef2: 0.70, t2: 3,      // reefing: 40 % for 2 s, 70 % for 3 s, then full
  brake: 0.75, roll: 0.02, tInfl: 0.8,          // mechanical braking, g; rolling resistance coefficient; canopy inflation time, s
  delay: 0.6,                                   // crew delay between the speed trigger and the canopy starting to open
};
export const area = (d) => Math.PI * d * d / 4;
const sm = (x) => { x = Math.min(1, Math.max(0, x)); return x * x * (3 - 2 * x); };
export function simulate(p, dt = 0.01, tmax = 90) {
  const out = {t: [], v: [], x: [], a: [], g: [], stage: [], f: [], cda: []};
  let t = 0, v = p.v0, x = 0, tMain = null, tBrake = null;
  const cdaD = p.cdDrogue * area(p.dDrogue), cdaM = p.cdMain * area(p.dMain);
  const dropT = p.delay;                                 // the drogue is released at t = 0 and opens over tInfl
  while (v > 0.3 && t < tmax) {
    if (tMain === null && v <= p.vMain) tMain = t + p.delay;
    if (tBrake === null && v <= p.vBrake) tBrake = t;
    const dr = sm((t - 0.25) / p.tInfl);
    let cda = cdaD * dr;
    if (tMain !== null && t >= tMain) {
      const s = t - tMain, open = sm(s / p.tInfl);
      const reef = s < p.t1 ? p.reef1 : s < p.t1 + p.t2 ? p.reef2 : 1;
      const prev = s < p.t1 ? p.reef1 : s < p.t1 + p.t2 ? p.reef1 : p.reef2, k = s < p.t1 ? 1 : sm((s - (s < p.t1 + p.t2 ? p.t1 : p.t1 + p.t2)) / 0.5);
      const r = s < p.t1 ? p.reef1 : prev + (reef - prev) * k;  // each reefing step is released over half a second
      cda = cdaD * (1 - open) + cdaM * r * open;
    }
    const drag = 0.5 * p.rho * v * v * cda;
    const br = tBrake !== null ? p.brake * p.m * G : 0, roll = p.roll * p.m * G;
    const f = drag + br + roll, a = f / p.m;
    const stage = tBrake !== null ? 3 : tMain !== null && t >= tMain ? 2 : 1;
    out.t.push(t); out.v.push(v); out.x.push(x); out.a.push(a); out.g.push(a / G); out.stage.push(stage); out.f.push(f); out.cda.push(cda);
    v -= a * dt; x += v * dt; t += dt;
  }
  out.tStop = t; out.dist = x; out.tMain = tMain; out.tBrake = tBrake; out.peakG = Math.max(...out.g);
  const late = out.g.filter((_, i) => out.t[i] > 6); out.sustG = late.length ? late.reduce((s, y) => s + y, 0) / late.length : 0;
  return out;
}
export const at = (r, t) => { const i = Math.min(r.t.length - 1, Math.max(0, Math.round(t / (r.t[1] || 0.01)))); return i; };
