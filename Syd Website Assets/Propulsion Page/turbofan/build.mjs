// Isometric, interactive CF34-8-style turbofan on a test stand, built with the Anatomy kit.
// Writes fragment.html (style + figure + script) for propulsion.html and preview.html for screenshots.
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const SKILL = "file:///C:/Users/thabe/.claude/skills/anatomy/";
const k = await import(SKILL + "kit/iso-kit.mjs");
const G = await import(SKILL + "kit/lathe.mjs");
const { kitScript } = await import(SKILL + "scripts/inline-kit.mjs");

const HERE = dirname(fileURLToPath(import.meta.url));
const arg = (name, fallback) => { const i = process.argv.indexOf("--" + name); return i > 0 ? +process.argv[i + 1] : fallback; };

const WIDTH = 1000;
const HEIGHT = 520;
const AZIMUTH = arg("az", 108);
const ELEVATION = arg("el", 22);

// ---- world: x along the engine axis (aft is +x), y sideways, z up ----
const Z0 = 112;                       // axis height above the stand plate
const F = G.frameOf([0, 0, Z0], [1, 0, 0], [0, 1, 0], [0, 0, 1]);
const R_COWL = 80;
const PLATE = { x: -50, y: -92, w: 640, d: 184, r: 10 };
const PLATE_H = 10;
const FOOT_H = 5;

const P = k.fitProjection(
  [...k.boxCorners(PLATE, -PLATE_H - FOOT_H, 0), [-100, -R_COWL, Z0 - R_COWL], [-100, R_COWL, Z0 + R_COWL], [725, -R_COWL, Z0 + R_COWL], [725, R_COWL, Z0 - R_COWL], [-100, 0, Z0 + R_COWL + 8]],
  WIDTH,
  HEIGHT,
  { pad: 20, azimuth: AZIMUTH, elevation: ELEVATION },
);

const S = (paths, style) => k.solidSvg(paths, style);
const L = (d, style) => k.lineSvg(d, style);
const D = (points, style) => k.dotsSvg(points, style);
const at = (p) => k.iso(p, P);
const TAU = Math.PI * 2;
const pt = (s, r, a) => G.pointOf(F, s, r, a);
const pathOf = (points) => points.map((p, i) => (i ? "L" : "M") + p[0].toFixed(1) + " " + p[1].toFixed(1)).join("");

// ---- modules, ordered along the axis ----
const MODULES = [
  { id: "fan", name: "Fan & inlet", x0: 0, x1: 104 },
  { id: "comp", name: "Compressor", x0: 104, x1: 252 },
  { id: "comb", name: "Combustor", x0: 252, x1: 322 },
  { id: "turb", name: "Turbine", x0: 322, x1: 428 },
  { id: "exh", name: "Exhaust nozzle", x0: 428, x1: 528 },
];
const SPREAD = 44;
const DX = Object.fromEntries(MODULES.map((m, i) => [m.id, (i - 2) * SPREAD]));

// ---- parts helpers ----
const STRINGERS = 14;
function cowl(mod) {
  const back = [];
  const front = [];
  for (let i = 0; i < STRINGERS; i++) {
    const a = (i / STRINGERS) * TAU + 0.12;
    const line = k.segment(pt(mod.x0, R_COWL, a), pt(mod.x1, R_COWL, a), P);
    (G.facingOf(F, a, P, 0) >= 0 ? front : back).push(line);
  }
  const rings = [mod.x0, ...(mod.id === "exh" ? [mod.x1] : [])];
  const backRings = rings.map((s) => G.circleOf(F, s, R_COWL, P, 90));
  const frontRings = rings.map((s) => G.arcOf(F, s, R_COWL, P, { least: 0.02 }));
  return { back: L(back.join(""), { tone: "lo" }) + L(backRings.join(""), { tone: "faint" }), front: L(front.join(""), { tone: "mid" }) + L(frontRings.join(""), { tone: "mid" }) };
}

// An open ring seen from the front: the front opening is cut out so what lies behind shows through.
function openRing(s0, s1, rIn, rOut, tone = "mid") {
  return S(G.ringBand(s0, s1, rIn, rOut, F, P, { hole: [s0, rIn], steps: 72 }), { tone });
}
function flange(s, rIn, rOut, w = 4, tone = "mid") { return openRing(s, s + w, rIn, rOut, tone); }
function bolts(s, r, count, size = 0.55) { return D(G.dotsOf(F, s, r, count, P, { all: true }), { size }); }

// ---- stand ----
function stand() {
  const out = [`<path class="iso-halo" d="${k.haloOf(PLATE, -PLATE_H - FOOT_H, PLATE_H, P)}"/>`];
  const feet = k.corners(PLATE, 20).sort((a, b) => k.depthOf([a[0], a[1], 0], P) - k.depthOf([b[0], b[1], 0], P));
  for (const [x, y] of feet) {
    out.push(S(k.cylinder(x, y, 7, -PLATE_H - FOOT_H, 1.6, P, 24), { tone: "lo" }));
    out.push(S(k.cylinder(x, y, 5.4, -PLATE_H - FOOT_H + 1.6, FOOT_H - 1.6, P, 24), { tone: "mid" }));
  }
  out.push(S(k.slabOf(PLATE, -PLATE_H, PLATE_H, P, 8, 1.4), { tone: "mid" }));
  out.push(L(k.planOutline(k.insetPlan(PLATE, 5), 0, P), { tone: "lo" }));
  const screws = k.corners(PLATE, 11);
  out.push(L(screws.map(([x, y]) => k.ring(x, y, 2.2, 0, P, 14)).join(""), { tone: "lo" }));
  out.push(D(screws.map(([x, y]) => at([x, y, 0])), { size: 0.5 }));
  const strip = { x: -30, y: PLATE.y + PLATE.d - 16, w: 560, d: 7, r: 1 };
  out.push(S(k.slabOf(strip, 0, 0.6, P, 3), { tone: "lo", crease: "none" }));
  const ticks = k.topTicks(strip.x + 4, strip.x + strip.w - 4, 4, 5, strip.y + 0.8, 0.6, [2, 3.6], P);
  out.push(L(ticks.minor, { tone: "lo" }), L(ticks.major, { tone: "mid" }));
  const plate = { x: PLATE.x + 14, y: PLATE.y + 14, w: 70, d: 28, r: 2 };
  out.push(S(k.slabOf(plate, 0, 1.2, P, 3), { tone: "lo", crease: "none" }));
  for (const [i, y] of [4, 10, 16].entries()) out.push(L(k.lineOnTop([plate.x + 6, plate.y + y], [plate.x + plate.w - 6 - i * 10, plate.y + y], 1.2, P), { tone: "lo", free: true }));
  return out.join("");
}

// pylons carry the engine by its ring frames (rim-on-flat contact at the bottom of each ring)
function pylon(x) {
  const out = [];
  const top = Z0 - R_COWL;
  const base = { x: x - 22, y: -44, w: 44, d: 88, r: 4 };
  out.push(S(k.slabOf(base, 0, 9, P, 4, 0.6), { tone: "mid" }));
  out.push(D(k.corners(base, 5).map(([cx, cy]) => at([cx, cy, 9])), { size: 0.5 }));
  for (const y of [-30, 24]) out.push(S(k.slabOf({ x: x - 7, y, w: 14, d: 6, r: 1.2 }, 9, top - 15, P, 3, 0.5), { tone: "mid" }));
  out.push(S(k.slabOf({ x: x - 16, y: -36, w: 32, d: 72, r: 3 }, top - 6, 6, P, 4, 0.6), { tone: "mid" }));
  out.push(D([at([x - 10, -30, top]), at([x + 10, -30, top]), at([x - 10, 30, top]), at([x + 10, 30, top])], { size: 0.45 }));
  return out.join("");
}

// ---- fan & inlet ----
const spinnerR = (s) => 27 * Math.sqrt(Math.max(0, 1 - Math.pow(1 - s / 62, 2)));
function spinner() {
  const knots = [[0, 0]];
  for (let i = 1; i <= 18; i++) { const s = (i / 18) * 62; knots.push([s, Math.max(0.2, spinnerR(s)), 1]); }
  return S(G.solidOf(knots, F, P, { smooth: true, steps: 64 }), { tone: "hi", lit: true });
}

function fanModule() {
  const c = cowl(MODULES[0]);
  const hub = [];
  hub.push(S(G.solidOf([[76, 26], [100, 15, 1], [104, 8], [104, 0]], F, P), { tone: "mid" }));
  hub.push(S(G.disc(60, 78, 28, F, P, { steps: 56 }), { tone: "mid" }));
  hub.push(L(G.arcOf(F, 60, 28, P, { least: 0.02 }), { tone: "lo" }));
  const front = [];
  for (const s of [44, 98]) front.push(L(G.circleOf(F, s, 80, P, 90), { tone: "faint" }));
  for (const s of [44, 98]) front.push(L(G.arcOf(F, s, 80, P, { least: 0.02 }), { tone: "mid" }));
  front.push(openRing(0, 14, 73, 84, "hi"));
  front.push(flange(98, 78, 88, 6));
  front.push(bolts(98, 84, 24));
  front.push(bolts(0, 79, 22, 0.5));
  return { back: c.back, hub: hub.join(""), spinner: spinner(), front: front.join("") + c.front };
}

// ---- compressor: fan booster drum + ten stages ----
const COMP_STAGES = Array.from({ length: 10 }, (_, i) => ({ s: 116 + 12.6 * i, r0: 38 - 1.15 * i, r1: 43 - 1.15 * i }));
function compModule() {
  const c = cowl(MODULES[1]);
  const rotor = [];
  rotor.push(S(G.solidOf([[104, 8], [112, 8], [112, 16], [244, 16], [248, 8], [252, 8], [252, 0], [104, 0]].slice(0, 6).concat([[252, 0]]), F, P), { tone: "lo", crease: "lo" }));
  rotor.push(S(G.solidOf([[112, 17], [246, 15]], F, P), { tone: "lo", crease: "lo" }));
  for (const st of COMP_STAGES) rotor.push(S(G.disc(st.s - 1.2, st.s + 1.2, st.r0, F, P, { steps: 44 }), { tone: "mid" }));
  const casing = [];
  const rings = [[104, 52], [140, 50], [176, 48], [212, 46], [250, 44]];
  for (const [s, r] of rings) casing.push(L(G.circleOf(F, s, r, P, 80), { tone: "faint" }));
  for (const [s, r] of rings) casing.push(L(G.arcOf(F, s, r, P, { least: 0.02 }), { tone: "mid" }));
  casing.push(flange(104, 49, 55, 4));
  casing.push(flange(248, 41, 47, 4));
  casing.push(bolts(104, 52, 16, 0.45));
  return { back: c.back, rotor: rotor.join(""), front: casing.join("") + c.front };
}

// ---- combustor ----
function combModule() {
  const c = cowl(MODULES[2]);
  const hot = [];
  hot.push(S(G.solidOf([[264, 30], [312, 30]], F, P, { fill: "hull" }), { tone: "hi", lit: true }));
  const front = [];
  front.push(openRing(252, 262, 38, 46));
  front.push(openRing(312, 322, 36, 46));
  front.push(openRing(268, 272, 44, 49));
  front.push(bolts(268, 47, 14, 0.7));
  front.push(L(G.arcOf(F, 288, 41, P, { least: 0.02 }), { tone: "mid" }));
  front.push(L(G.arcOf(F, 302, 41, P, { least: 0.02 }), { tone: "lo" }));
  front.push(bolts(252, 42, 14, 0.5));
  return { back: c.back, hot: hot.join(""), front: front.join("") + c.front };
}

// ---- turbine ----
const TURB_STAGES = [
  { s: 337, r0: 36, r1: 46 }, { s: 359, r0: 40, r1: 51 }, { s: 375, r0: 43, r1: 54 }, { s: 391, r0: 46, r1: 58 }, { s: 407, r0: 49, r1: 62 },
];
function turbModule() {
  const c = cowl(MODULES[3]);
  const rotor = [];
  rotor.push(S(G.solidOf([[322, 8], [428, 8]], F, P), { tone: "lo", crease: "lo" }));
  for (const st of TURB_STAGES) rotor.push(S(G.disc(st.s - 1.6, st.s + 1.6, st.r0 - 1.5, F, P, { steps: 44 }), { tone: "mid" }));
  const casing = [];
  const rings = [[330, 52], [352, 56], [380, 60], [404, 64], [424, 68]];
  for (const [s, r] of rings) casing.push(L(G.circleOf(F, s, r, P, 80), { tone: "faint" }));
  for (const [s, r] of rings) casing.push(L(G.arcOf(F, s, r, P, { least: 0.02 }), { tone: "mid" }));
  casing.push(flange(322, 45, 52, 4));
  casing.push(flange(424, 62, 70, 4));
  casing.push(bolts(424, 66, 18, 0.5));
  return { back: c.back, rotor: rotor.join(""), front: casing.join("") + c.front };
}

// ---- exhaust ----
function exhModule() {
  const c = cowl(MODULES[4]);
  const knots = [[436, 0.2]];
  for (let i = 1; i <= 16; i++) { const t = i / 16; knots.push([436 + t * 92, 46 * Math.pow(1 - t, 1.25) + 0.2, 1]); }
  const cone = S(G.solidOf([[430, 0], [430, 46, 0], [436, 46, 0], ...knots.slice(1)], F, P, { smooth: true, steps: 64 }), { tone: "mid" });
  const front = [];
  front.push(openRing(428, 440, 62, 70));
  front.push(openRing(428, 470, 70, 76, "mid"));
  front.push(openRing(500, 528, 56, 60, "hi"));
  front.push(L(G.arcOf(F, 528, 60, P, { least: 0.02 }), { tone: "hi" }));
  return { back: c.back, cone, front: front.join("") + c.front };
}

const fan = fanModule();
const comp = compModule();
const comb = combModule();
const turb = turbModule();
const exh = exhModule();

// ---- glow geometry (live code sets its opacity) ----
const glowCentre = at([286, 0, Z0]);
const glowRing = pathOf(Array.from({ length: 72 }, (_, i) => at(pt(286, 44, (i / 72) * TAU))));
const plume = (() => {
  const a = at(pt(528, 54, 1.57)), b = at(pt(528, 54, -1.57));
  const c = at(pt(640, 12, -1.57)), d = at(pt(640, 12, 1.57));
  return pathOf([a, d, c, b]);
})();
const plumeAxis = [at([528, 0, Z0]), at([640, 0, Z0])];
const defs = `<defs>
  <radialGradient id="tf-glow" cx="${glowCentre[0].toFixed(1)}" cy="${glowCentre[1].toFixed(1)}" r="62" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="#fff3d0" stop-opacity="0.95"/><stop offset="0.35" stop-color="#ffa43c" stop-opacity="0.7"/><stop offset="1" stop-color="#ff5a1f" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="tf-plume" gradientUnits="userSpaceOnUse" x1="${plumeAxis[0][0].toFixed(1)}" y1="${plumeAxis[0][1].toFixed(1)}" x2="${plumeAxis[1][0].toFixed(1)}" y2="${plumeAxis[1][1].toFixed(1)}">
    <stop offset="0" stop-color="#ffb454" stop-opacity="0.75"/><stop offset="0.45" stop-color="#ff6a2b" stop-opacity="0.3"/><stop offset="1" stop-color="#ff6a2b" stop-opacity="0"/>
  </linearGradient>
</defs>`;

// ---- live-blade layers: empty groups the script fills each frame ----
const layer = (name) => `<g data-blades="${name}"></g>`;

const groups = [
  `<g class="tf-mod" data-mod="fan">${fan.back}${layer("fan-back")}${fan.hub}${fan.spinner}${layer("fan-front")}${fan.front}</g>`,
  `<g class="tf-mod" data-mod="comp">${comp.back}${comp.rotor}${layer("comp")}${comp.front}</g>`,
  `<g class="tf-mod" data-mod="comb">${comb.back}<g class="tf-hot">${comb.hot}</g><path data-glow d="${glowRing}" fill="url(#tf-glow)" style="mix-blend-mode:screen"/>${comb.front}</g>`,
  `<g class="tf-mod" data-mod="turb">${turb.back}${turb.rotor}${layer("turb")}${turb.front}</g>`,
  `<g class="tf-mod" data-mod="exh"><path data-plume d="${plume}" fill="url(#tf-plume)" style="mix-blend-mode:screen"/>${exh.back}${exh.cone}${exh.front}</g>`,
];

// Paint modules back to front. With the camera in front of the fan, a module further aft is further away.
const order = MODULES.map((m, i) => ({ i, d: k.depthOf([(m.x0 + m.x1) / 2, 0, Z0], P) })).sort((a, b) => a.d - b.d).map((o) => groups[o.i]);

const svg = k.figureSvg({
  width: WIDTH,
  height: HEIGHT,
  className: "tf-svg",
  label: "An isometric turbofan engine on a test stand with its fan, ten-stage compressor, combustor, turbine and exhaust nozzle. Hover a module to read its thermodynamic state; pull the engine apart to see the rotors.",
  body: [defs, stand(), pylon(104), pylon(428), ...order],
});

// ---- the live script ----
const LIVE_STAGES = [
  { mod: "fan", layer: "fan", kind: "fan", s: 62, r0: 27, r1: 75, n: 20, speed: 1 },
  ...COMP_STAGES.map((st, i) => ({ mod: "comp", layer: "comp", kind: "core", s: st.s, r0: st.r0, r1: st.r1, n: 22 + i, speed: 2.6, phase: i * 0.37 })),
  ...TURB_STAGES.map((st, i) => ({ mod: "turb", layer: "turb", kind: "core", s: st.s, r0: st.r0 - 1, r1: st.r1, n: 20 + i * 2, speed: 1.9, phase: i * 0.5 })),
];

const live = `
const P = ${JSON.stringify(P)};
const Z0 = ${Z0};
const SPREAD_DX = ${JSON.stringify(DX)};
const MODS = ${JSON.stringify(MODULES)};
const STAGES = ${JSON.stringify(LIVE_STAGES)};
const TAU = Math.PI * 2;
const root = document.querySelector(".tf");
const stage = root.querySelector(".tf-stage");
const svg = stage.querySelector("svg");
const readName = root.querySelector("[data-tf-name]");
const readData = root.querySelector("[data-tf-data]");
const readNote = root.querySelector("[data-tf-note]");
const toggle = root.querySelector("[data-tf-toggle]");
const still = matchMedia("(prefers-reduced-motion: reduce)");
const modEl = Object.fromEntries(MODS.map((m) => [m.id, svg.querySelector('[data-mod="' + m.id + '"]')]));
const layers = {};
svg.querySelectorAll("[data-blades]").forEach((g) => (layers[g.dataset.blades] = g));
const glow = svg.querySelector("[data-glow]");
const plume = svg.querySelector("[data-plume]");

const AZ = P.azimuth * Math.PI / 180, EL = P.elevation * Math.PI / 180;
const VIEW = [Math.cos(EL) * Math.cos(AZ), Math.cos(EL) * Math.sin(AZ), Math.sin(EL)];
const LIGHT = [-0.45, -0.55, 0.7];
const pointAt = (s, r, a) => [s, r * Math.cos(a), Z0 + r * Math.sin(a)];
const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const lenOf = (a) => Math.hypot(a[0], a[1], a[2]) || 1;

function bladeQuad(st, ang) {
  const fan = st.kind === "fan";
  const chordR = fan ? 22 : 4.6, chordT = fan ? 16 : 3.6, wR = fan ? 5 : 2.0, wT = fan ? 3.4 : 1.5, lean = fan ? 0.3 : 0.05, sweep = fan ? 6 : 0.6;
  const dr = wR / st.r0, dt = wT / st.r1;
  return [
    pointAt(st.s - chordR / 2, st.r0, ang - dr),
    pointAt(st.s + chordR / 2, st.r0, ang + dr),
    pointAt(st.s + chordT / 2 + sweep, st.r1, ang + dt + lean),
    pointAt(st.s - chordT / 2 + sweep, st.r1, ang - dt + lean),
  ];
}
const shadeOf = (quad) => {
  let n = cross(sub(quad[1], quad[0]), sub(quad[3], quad[0]));
  const l = lenOf(n);
  n = [n[0] / l, n[1] / l, n[2] / l];
  if (dot(n, VIEW) < 0) n = [-n[0], -n[1], -n[2]];
  const lit = dot(n, [LIGHT[0] / lenOf(LIGHT), LIGHT[1] / lenOf(LIGHT), LIGHT[2] / lenOf(LIGHT)]);
  return Math.max(0, Math.min(3, Math.floor((lit * 0.5 + 0.5) * 4)));
};
const dStr = (pts) => "M" + pts.map((p) => p[0].toFixed(1) + " " + p[1].toFixed(1)).join("L") + "Z";

// build path elements once
const NS = "http://www.w3.org/2000/svg";
const mk = (cls) => { const p = document.createElementNS(NS, "path"); p.setAttribute("class", cls); return p; };
STAGES.forEach((st) => {
  st.ang = 0;
  if (st.kind === "fan") {
    st.paths = Array.from({ length: st.n }, () => mk("tf-blade"));
    st.paths.forEach((p) => layers["fan-front"].appendChild(p));
  } else {
    st.buckets = [0, 1, 2, 3].map((i) => { const p = mk("tf-blade"); p.dataset.shade = i; layers[st.layer].appendChild(p); return p; });
  }
});

// state
const state = { e: 0, eTarget: 0, spin: 0.6, spinTarget: 0.6, glow: 0.8, glowTarget: 0.8, sel: null, mission: "sl", clock: 0 };
const dxOf = (id) => SPREAD_DX[id] * state.e;

function drawBlades(dt) {
  const hubDepth = depthOf([60, 0, Z0], P);
  STAGES.forEach((st) => {
    st.ang += state.spin * st.speed * dt;
    if (st.kind === "fan") {
      const items = [];
      for (let i = 0; i < st.n; i++) {
        const a = st.ang + (i / st.n) * TAU;
        const q = bladeQuad(st, a);
        const pts = q.map((p) => iso(p, P));
        const depth = depthOf([q[0][0], (q[0][1] + q[2][1]) / 2, (q[0][2] + q[2][2]) / 2], P);
        items.push({ i, depth, pts, shade: shadeOf(q) });
      }
      items.sort((a, b) => a.depth - b.depth);
      const back = layers["fan-back"], front = layers["fan-front"];
      items.forEach((it) => {
        const el = st.paths[it.i];
        el.setAttribute("d", dStr(it.pts));
        el.dataset.shade = it.shade;
        const target = it.depth < hubDepth - 14 ? back : front;
        if (el.parentNode !== target || target.lastChild !== el) target.appendChild(el);
      });
    } else {
      const d = ["", "", "", ""];
      for (let i = 0; i < st.n; i++) {
        const a = st.ang + (st.phase || 0) + (i / st.n) * TAU;
        const q = bladeQuad(st, a);
        d[shadeOf(q)] += dStr(q.map((p) => iso(p, P)));
      }
      st.buckets.forEach((p, i) => p.setAttribute("d", d[i]));
    }
  });
}

function drawModules() {
  MODS.forEach((m) => modEl[m.id].setAttribute("transform", translateAlong(P, [dxOf(m.id), 0, 0])));
  const dt = SPREAD_DX.exh * state.e;
  toggle.setAttribute("aria-pressed", state.eTarget > 0.5 ? "true" : "false");
  toggle.textContent = state.eTarget > 0.5 ? "⇄ ASSEMBLE" : "⇄ PULL APART";
}

function drawHeat(time) {
  const flicker = 0.88 + 0.12 * Math.sin(time * 13) * Math.sin(time * 7.3);
  glow.style.opacity = (state.glow * flicker).toFixed(3);
  plume.style.opacity = (Math.max(0, state.glow - 0.25) * 1.25 * (0.9 + 0.1 * Math.sin(time * 17))).toFixed(3);
}

// ---- readout: ties each module to the cycle model on the page ----
const DESC = {
  fan: ["Fan & inlet", "Ram effect: h\\u2082 = h\\u2081 + V\\u2081\\u00B2/2, then the fan lifts pressure \\u00D74.", 1, 2],
  comp: ["Compressor", "The HPC adds \\u00D77.1, for an overall pressure ratio of 28.4:1.", 2, 3],
  comb: ["Combustor", "Constant-pressure heating up to the turbine inlet temperature.", 3, 4],
  turb: ["Turbine", "The HPT drives the HPC and the LPT drives the fan.", 4, 6],
  exh: ["Exhaust nozzle", "Expansion back to ambient: F = \\u1E41(V\\u2088 \\u2212 V\\u2081).", 6, 7],
};
function say(id) {
  const m = window.PROP_MODELS && window.PROP_MODELS[state.mission];
  const d = DESC[id];
  if (!d) {
    readName.textContent = "CF34-8 turbofan";
    readData.textContent = m ? "Thrust " + Math.round(m.lbf).toLocaleString("en-US") + " lbf \\u00B7 " + (state.mission === "sl" ? "takeoff" : "cruise") : "Hover a module";
    readNote.textContent = "Hover a module, or pull the engine apart.";
    return;
  }
  readName.textContent = d[0];
  readNote.textContent = d[1];
  if (m) {
    const a = d[2], b = d[3];
    readData.textContent = Math.round(m.T[a]) + " \\u2192 " + Math.round(m.T[b]) + " K \\u00B7 " + m.P[a].toFixed(0) + " \\u2192 " + m.P[b].toFixed(0) + " kPa";
  } else readData.textContent = "";
}

function select(id) {
  if (state.sel === id) return;
  state.sel = id;
  MODS.forEach((m) => modEl[m.id].classList.toggle("tf-sel", m.id === id));
  say(id);
}

// ---- input ----
const moduleNear = (event) => {
  const box = svg.getBoundingClientRect();
  const x = (event.clientX - box.left) / box.width * ${WIDTH}, y = (event.clientY - box.top) / box.height * ${HEIGHT};
  let best = null, bestD = 90;
  MODS.forEach((m) => {
    const c = iso([(m.x0 + m.x1) / 2 + dxOf(m.id), 0, Z0], P);
    const dist = Math.hypot((c[0] - x) * 0.8, c[1] - y);
    if (dist < bestD) { best = m.id; bestD = dist; }
  });
  return best;
};
let drag = null;
stage.addEventListener("pointermove", (event) => {
  if (drag) {
    state.eTarget = Math.max(0, Math.min(1, drag.from + (event.clientX - drag.x) / 380));
    state.e = state.eTarget;
    return;
  }
  select(moduleNear(event));
});
stage.addEventListener("pointerleave", () => { if (!drag) select(null); });
stage.addEventListener("pointerdown", (event) => { drag = { x: event.clientX, from: state.eTarget, moved: false }; stage.setPointerCapture(event.pointerId); });
stage.addEventListener("pointerup", (event) => {
  if (drag && Math.abs(event.clientX - drag.x) < 4) { state.eTarget = state.eTarget > 0.5 ? 0 : 1; }
  else if (drag) state.eTarget = state.eTarget > 0.5 ? 1 : 0;
  drag = null;
  select(moduleNear(event));
});
toggle.addEventListener("click", () => { state.eTarget = state.eTarget > 0.5 ? 0 : 1; });
stage.addEventListener("keydown", (event) => {
  const i = MODS.findIndex((m) => m.id === state.sel);
  if (event.key === "ArrowRight") { event.preventDefault(); select(MODS[Math.min(MODS.length - 1, i + 1)].id); }
  if (event.key === "ArrowLeft") { event.preventDefault(); select(MODS[Math.max(0, i - 1)].id); }
  if (event.key === "Enter" || event.key === " ") { event.preventDefault(); state.eTarget = state.eTarget > 0.5 ? 0 : 1; }
  if (event.key === "Escape") select(null);
});

window.TF = {
  setMission(id) {
    state.mission = id;
    state.spinTarget = id === "sl" ? 1.5 : 1.0;
    state.glowTarget = id === "sl" ? 1 : 0.72;
    say(state.sel);
  },
  spinUp(amount) { state.spinTarget = amount; },
};

let last = 0, frame = 0, visible = true;
function tick(now) {
  const dt = last ? Math.min((now - last) / 1000, 1 / 20) : 1 / 60;
  last = now;
  state.clock += dt;
  const k1 = 1 - Math.exp(-dt / 0.35), k2 = 1 - Math.exp(-dt / 0.6);
  state.e += (state.eTarget - state.e) * (drag ? 0 : still.matches ? 1 : k1);
  state.spin += (state.spinTarget - state.spin) * k2;
  state.glow += (state.glowTarget - state.glow) * k2;
  drawModules();
  drawBlades(still.matches ? 0 : dt);
  drawHeat(state.clock);
  frame = visible ? requestAnimationFrame(tick) : 0;
}
new IntersectionObserver((entries) => { visible = entries[entries.length - 1].isIntersecting; if (visible && !frame) { last = 0; frame = requestAnimationFrame(tick); } }).observe(stage);
if (still.matches) state.spin = 0.2;
say(null);
frame = requestAnimationFrame(tick);
`;

const CSS = `
.tf { --anatomy-paper:#171210; --anatomy-card:#171210; --anatomy-face:#201915; --anatomy-top:#2c221b;
  --anatomy-shade-0:#120d0b; --anatomy-shade-1:#18120f; --anatomy-shade-2:#1f1814; --anatomy-shade-3:#29201a;
  --anatomy-lit-top:#4a3a2e; --anatomy-lit-shade:#33281f;
  --anatomy-hi:#f1dcc6; --anatomy-mid:#9b8068; --anatomy-lo:#5a4838; --anatomy-faint:#35291f; --anatomy-lit:#fff2de; --anatomy-dot:#f6e7d5;
  --anatomy-halo:#000; --anatomy-halo-opacity:.8; }
.tf-stage { position: relative; outline: none; touch-action: pan-y; cursor: grab; }
.tf-stage:active { cursor: grabbing; }
.tf-stage:focus-visible { outline: 2px solid #ffb454; outline-offset: 4px; border-radius: 8px; }
.tf-svg { overflow: visible; }
.tf-mod { transition: filter 250ms ease; }
.tf-mod.tf-sel { filter: drop-shadow(0 0 7px rgba(255,150,60,.55)); }
.tf-hot { --anatomy-paper:#3a1608; --anatomy-face:#52200b; --anatomy-top:#ff8a3d; --anatomy-shade-0:#4a1b09; --anatomy-shade-1:#6a2a0d; --anatomy-shade-2:#8e3a10; --anatomy-shade-3:#b4521a; --anatomy-lit-top:#ffa55a; --anatomy-lit-shade:#c25c1c; --anatomy-lit:#ffe0b0; }
.tf-blade { stroke: var(--anatomy-lo); stroke-width: .3; stroke-linejoin: round; fill: var(--anatomy-shade-2); }
.tf-blade[data-shade="0"] { fill: var(--anatomy-shade-0); }
.tf-blade[data-shade="1"] { fill: var(--anatomy-shade-1); }
.tf-blade[data-shade="2"] { fill: var(--anatomy-shade-2); }
.tf-blade[data-shade="3"] { fill: var(--anatomy-top); }
.tf-bar { display: flex; justify-content: space-between; align-items: flex-end; gap: 16px; flex-wrap: wrap; margin-top: 6px; font-family: 'JetBrains Mono', monospace; }
.tf-read b { display: block; font-size: .72rem; letter-spacing: .18em; color: #ffb454; text-transform: uppercase; font-weight: 600; }
.tf-read span { display: block; font-size: .8rem; color: #f4ece4; }
.tf-read small { display: block; font-size: .72rem; color: #9b8068; max-width: 46ch; font-family: 'Inter', sans-serif; margin-top: 2px; }
.tf-btn { font: inherit; font-size: .7rem; letter-spacing: .14em; color: #ffb454; background: rgba(255,106,43,.08); border: 1px solid rgba(255,106,43,.45); border-radius: 999px; padding: 8px 16px; cursor: pointer; transition: all 200ms; }
.tf-btn:hover { background: rgba(255,106,43,.2); }
@media (prefers-reduced-motion: reduce) { .tf-mod { transition: none; } }
`;

const figure = `<div class="tf iso" data-theme="dark">
  <style>${k.ISO_CSS}${CSS}</style>
  <div class="tf-stage" tabindex="0" role="application" aria-label="Interactive turbofan engine. Hover or use the arrow keys to read each module; press Enter to pull the engine apart.">${svg}</div>
  <div class="tf-bar">
    <div class="tf-read" aria-live="polite"><b data-tf-name>CF34-8 turbofan</b><span data-tf-data></span><small data-tf-note></small></div>
    <button class="tf-btn" data-tf-toggle type="button" aria-pressed="false">⇄ PULL APART</button>
  </div>
</div>
<script defer src="./Syd%20Website%20Assets/Propulsion%20Page/turbofan.js"></script>`;
writeFileSync(join(HERE, "..", "turbofan.js"), `(function () {
"use strict";
${kitScript()}
${live}
})();
`);

writeFileSync(join(HERE, "fragment.html"), figure);
writeFileSync(join(HERE, "preview.html"), `<!doctype html><html><head><meta charset="utf-8"><title>Turbofan</title><style>html,body{margin:0;background:#0a0807;color:#f4ece4}body{padding:24px;max-width:1100px}</style></head><body>${figure}<script src="../turbofan.js" defer></script><script>window.PROP_MODELS={sl:{lbf:14970,T:[300,300,480.6,897.1,1130,733.4,561.2,520.8],P:[101.3,101.3,405.3,2877.6,2877.6,357,108,101.3]}}</script></body></html>`);
console.log("wrote fragment.html and preview.html", figure.length, "bytes");
