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
  [...k.boxCorners(PLATE, -PLATE_H - FOOT_H, 0), [-145, -R_COWL, Z0 - R_COWL], [-145, R_COWL, Z0 + R_COWL], [760, -R_COWL, Z0 + R_COWL], [760, R_COWL, Z0 - R_COWL], [-145, 0, Z0 + R_COWL + 8]],
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

// ---- sub-components: every module is a stack of named parts that can slide apart on their own ----
const sub = (id, html) => `<g class="tf-sub" data-sub="${id}">${html}</g>`;
const layer = (name) => `<g data-blades="${name}"></g>`;

// ---- fan & inlet ----
const spinnerR = (s) => 27 * Math.sqrt(Math.max(0, 1 - Math.pow(1 - s / 62, 2)));
function spinner() {
  const knots = [[0, 0]];
  for (let i = 1; i <= 18; i++) { const s = (i / 18) * 62; knots.push([s, Math.max(0.2, spinnerR(s)), 1]); }
  return S(G.solidOf(knots, F, P, { smooth: true, steps: 64 }), { tone: "hi", lit: true });
}

function fanModule() {
  const c = cowl(MODULES[0]);
  const cone = S(G.solidOf([[76, 26], [100, 15, 1], [104, 8], [104, 0]], F, P), { tone: "mid" });
  const hubDisc = S(G.disc(60, 78, 28, F, P, { steps: 56 }), { tone: "mid" }) + L(G.arcOf(F, 60, 28, P, { least: 0.02 }), { tone: "lo" });
  const casing = [];
  for (const s of [44, 98]) casing.push(L(G.circleOf(F, s, 80, P, 90), { tone: "faint" }));
  for (const s of [44, 98]) casing.push(L(G.arcOf(F, s, 80, P, { least: 0.02 }), { tone: "mid" }));
  casing.push(flange(98, 78, 88, 6));
  casing.push(bolts(98, 84, 24));
  const lip = openRing(0, 14, 73, 84, "hi") + bolts(0, 79, 22, 0.5);
  return {
    back: c.back,
    front: c.front,
    list: [sub("fan.blades", layer("fan-back")), sub("fan.cone", cone), sub("fan.blades", hubDisc), sub("fan.spinner", spinner()), sub("fan.blades", layer("fan-front")), sub("fan.case", casing.join("")), sub("fan.lip", lip)],
  };
}

// ---- compressor: rotor drum + ten stages ----
const COMP_STAGES = Array.from({ length: 10 }, (_, i) => ({ s: 116 + 12.6 * i, r0: 38 - 1.15 * i, r1: 43 - 1.15 * i }));
function compModule() {
  const c = cowl(MODULES[1]);
  const drum = [];
  drum.push(S(G.solidOf([[104, 8], [112, 8], [112, 16], [244, 16], [248, 8], [252, 8], [252, 0]], F, P), { tone: "lo", crease: "lo" }));
  drum.push(S(G.solidOf([[112, 17], [246, 15]], F, P), { tone: "lo", crease: "lo" }));
  const discs = COMP_STAGES.map((st) => S(G.disc(st.s - 1.2, st.s + 1.2, st.r0, F, P, { steps: 44 }), { tone: "mid" })).join("");
  const casing = [];
  const rings = [[104, 52], [140, 50], [176, 48], [212, 46], [250, 44]];
  for (const [s, r] of rings) casing.push(L(G.circleOf(F, s, r, P, 80), { tone: "faint" }));
  for (const [s, r] of rings) casing.push(L(G.arcOf(F, s, r, P, { least: 0.02 }), { tone: "mid" }));
  casing.push(flange(104, 49, 55, 4));
  casing.push(flange(248, 41, 47, 4));
  casing.push(bolts(104, 52, 16, 0.45));
  return { back: c.back, front: c.front, list: [sub("comp.drum", drum.join("")), sub("comp.stages", discs + layer("comp")), sub("comp.casing", casing.join(""))] };
}

// ---- combustor ----
function combModule() {
  const c = cowl(MODULES[2]);
  const hot = S(G.solidOf([[264, 30], [312, 30]], F, P, { fill: "hull" }), { tone: "hi", lit: true });
  return {
    back: c.back,
    front: c.front,
    list: [
      sub("comb.liner", `<g class="tf-hot">${hot}</g><path data-glow d="__GLOW__" fill="url(#tf-glow)" style="mix-blend-mode:screen"/>`),
      sub("comb.flangeIn", openRing(252, 262, 38, 46) + bolts(252, 42, 14, 0.5)),
      sub("comb.manifold", openRing(268, 272, 44, 49) + bolts(268, 47, 14, 0.7)),
      sub("comb.casing", L(G.arcOf(F, 288, 41, P, { least: 0.02 }), { tone: "mid" }) + L(G.arcOf(F, 302, 41, P, { least: 0.02 }), { tone: "lo" })),
      sub("comb.flangeOut", openRing(312, 322, 36, 46)),
    ],
  };
}

// ---- turbine ----
const TURB_STAGES = [
  { s: 337, r0: 36, r1: 46 }, { s: 359, r0: 40, r1: 51 }, { s: 375, r0: 43, r1: 54 }, { s: 391, r0: 46, r1: 58 }, { s: 407, r0: 49, r1: 62 },
];
function turbModule() {
  const c = cowl(MODULES[3]);
  const shaft = S(G.solidOf([[322, 8], [428, 8]], F, P), { tone: "lo", crease: "lo" });
  const disc = (st) => S(G.disc(st.s - 1.6, st.s + 1.6, st.r0 - 1.5, F, P, { steps: 44 }), { tone: "mid" });
  const casing = [];
  const rings = [[330, 52], [352, 56], [380, 60], [404, 64], [424, 68]];
  for (const [s, r] of rings) casing.push(L(G.circleOf(F, s, r, P, 80), { tone: "faint" }));
  for (const [s, r] of rings) casing.push(L(G.arcOf(F, s, r, P, { least: 0.02 }), { tone: "mid" }));
  casing.push(flange(322, 45, 52, 4));
  casing.push(flange(424, 62, 70, 4));
  casing.push(bolts(424, 66, 18, 0.5));
  return {
    back: c.back,
    front: c.front,
    list: [
      sub("turb.shaft", shaft),
      sub("turb.hpt", disc(TURB_STAGES[0]) + layer("hpt")),
      sub("turb.lpt", TURB_STAGES.slice(1).map(disc).join("") + layer("lpt")),
      sub("turb.casing", casing.join("")),
    ],
  };
}

// ---- exhaust ----
function exhModule() {
  const c = cowl(MODULES[4]);
  const knots = [[436, 0.2]];
  for (let i = 1; i <= 16; i++) { const t = i / 16; knots.push([436 + t * 92, 46 * Math.pow(1 - t, 1.25) + 0.2, 1]); }
  const cone = S(G.solidOf([[430, 0], [430, 46, 0], [436, 46, 0], ...knots.slice(1)], F, P, { smooth: true, steps: 64 }), { tone: "mid" });
  return {
    back: c.back,
    front: c.front,
    list: [
      sub("exh.lip", `<path data-plume d="__PLUME__" fill="url(#tf-plume)" style="mix-blend-mode:screen"/>`),
      sub("exh.cone", cone),
      sub("exh.cowl", openRing(428, 440, 62, 70) + openRing(428, 470, 70, 76, "mid")),
      sub("exh.lip", openRing(500, 528, 56, 60, "hi") + L(G.arcOf(F, 528, 60, P, { least: 0.02 }), { tone: "hi" })),
    ],
  };
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

const mod = (id, m) => `<g class="tf-mod" data-mod="${id}">${m.back}${m.list.join("").replace("__GLOW__", glowRing).replace("__PLUME__", plume)}${m.front}</g>`;
const groups = [mod("fan", fan), mod("comp", comp), mod("comb", comb), mod("turb", turb), mod("exh", exh)];

// ---- hover copy: what each module and each part does (ties to the cycle model in the page) ----
const MODINFO = {
  fan: { name: "Fan & inlet", st: [1, 2], desc: "Ram compression at the inlet, then the fan lifts the pressure ×4. In the report's model these are stations 1 → 3.", subs: ["fan.lip", "fan.spinner", "fan.blades", "fan.case", "fan.cone"] },
  comp: { name: "Compressor", st: [2, 3], desc: "The high-pressure compressor adds ×7.1 on top of the fan's ×4, for an overall pressure ratio of 28.4:1 (stations 3 → 4).", subs: ["comp.casing", "comp.stages", "comp.drum"] },
  comb: { name: "Combustor", st: [3, 4], desc: "Fuel burns at constant pressure and heats the air to the turbine inlet temperature: 1130 K at takeoff, 980 K at cruise (stations 4 → 5).", subs: ["comb.flangeIn", "comb.manifold", "comb.liner", "comb.casing", "comb.flangeOut"] },
  turb: { name: "Turbine", st: [4, 6], desc: "The turbines pull work out of the hot gas: the HPT drives the compressor and the LPT drives the fan (stations 5 → 7).", subs: ["turb.hpt", "turb.lpt", "turb.shaft", "turb.casing"] },
  exh: { name: "Exhaust nozzle", st: [6, 7], desc: "The nozzle expands what is left back to ambient pressure. Thrust is F = ṁ(V₈ − V₁) (stations 7 → 8).", subs: ["exh.cowl", "exh.cone", "exh.lip"] },
};
// off = how far (world units, along the axis) the part slides when its module is opened up
const SUBINFO = {
  "fan.lip": { mod: "fan", name: "Inlet lip", off: -38, x: 7, desc: "The rounded intake that guides air smoothly into the fan. In flight it adds ram pressure (h₂ = h₁ + V₁²/2); on the runway V₁ = 0, so it adds none." },
  "fan.spinner": { mod: "fan", name: "Spinner", off: -24, x: 30, desc: "The nose cone. It splits the incoming air around the hub and feeds it to the fan blades." },
  "fan.blades": { mod: "fan", name: "Fan blades & hub", off: 0, x: 69, desc: "Wide blades on a hub disc, spun by the LP turbine through the LP shaft. In the model the fan raises pressure ×4." },
  "fan.case": { mod: "fan", name: "Fan case", off: 26, x: 71, desc: "The ring frame around the fan. It holds the fan in the duct and would contain a lost blade." },
  "fan.cone": { mod: "fan", name: "LP shaft cone", off: 44, x: 90, desc: "The rear hub cone that joins the fan disc to the low-pressure shaft, which the LP turbine drives (h₇ = h₆ − h₃ + h₂)." },
  "comp.casing": { mod: "comp", name: "Compressor casing", off: -30, x: 177, desc: "Ring frames and flanges around the rotor. They carry the stator vanes that straighten the flow between stages (the vanes aren't drawn)." },
  "comp.stages": { mod: "comp", name: "Ten stages", off: 0, x: 180, desc: "Each rotor disc and blade ring squeezes the air a little more. The blades shrink as the air gets denser. The model uses 80 % compressor efficiency." },
  "comp.drum": { mod: "comp", name: "Rotor drum", off: 32, x: 178, desc: "The spool that carries every stage disc. The HP turbine drives it (h₆ = h₅ − h₄ + h₃)." },
  "comb.flangeIn": { mod: "comb", name: "Inlet flange", off: -38, x: 257, desc: "The bolted joint where the compressor delivers its high-pressure air into the combustor." },
  "comb.manifold": { mod: "comb", name: "Fuel manifold", off: -19, x: 270, desc: "The ring of fuel injectors. The heat added is Q = ṁ(h₅ − h₄)." },
  "comb.liner": { mod: "comb", name: "Flame tube", off: 0, x: 288, desc: "The glowing liner where the fuel burns at constant pressure. Thermal stress here is the price of higher temperatures." },
  "comb.casing": { mod: "comb", name: "Combustor casing", off: 19, x: 295, desc: "The pressure shell around the liner that holds the compressed air." },
  "comb.flangeOut": { mod: "comb", name: "Outlet flange", off: 38, x: 317, desc: "The bolted joint that hands the hot gas to the turbine." },
  "turb.hpt": { mod: "turb", name: "HP turbine", off: -34, x: 337, desc: "One stage that takes just enough energy from the gas to drive the compressor (h₆ = h₅ − h₄ + h₃)." },
  "turb.lpt": { mod: "turb", name: "LP turbine", off: 6, x: 385, desc: "Four stages that drive the fan (h₇ = h₆ − h₃ + h₂). The model uses 85 % turbine efficiency." },
  "turb.shaft": { mod: "turb", name: "Turbine shaft", off: -10, x: 375, desc: "Carries the torque from the turbines forward to the compressor and the fan." },
  "turb.casing": { mod: "turb", name: "Turbine casing", off: 36, x: 376, desc: "Rings that widen as the gas expands. The materials here have to resist thermal shock." },
  "exh.cowl": { mod: "exh", name: "Core cowl rings", off: -32, x: 440, desc: "The shell that carries the exhaust gas out of the turbine." },
  "exh.cone": { mod: "exh", name: "Tail cone", off: 0, x: 480, desc: "Tapers the core flow so the gas leaves smoothly, without a dead-air wake behind it." },
  "exh.lip": { mod: "exh", name: "Nozzle lip", off: 34, x: 514, desc: "The exit where the gas leaves at V₈, about {V8} m/s in this mission." },
};

// Paint modules back to front. With the camera in front of the fan, a module further aft is further away.
const order = MODULES.map((m, i) => ({ i, d: k.depthOf([(m.x0 + m.x1) / 2, 0, Z0], P) })).sort((a, b) => a.d - b.d).map((o) => groups[o.i]);

const svg = k.figureSvg({
  width: WIDTH,
  height: HEIGHT,
  className: "tf-svg",
  label: "An isometric turbofan engine on a test stand with its fan, ten-stage compressor, combustor, turbine and exhaust nozzle. Hover a module to read its thermodynamic state; pull the engine apart to see the rotors.",
  body: [defs, `<g data-stand>${stand()}${pylon(104)}${pylon(428)}</g>`, ...order],
});

// ---- the live script ----
const LIVE_STAGES = [
  { mod: "fan", layer: "fan", kind: "fan", s: 62, r0: 27, r1: 75, n: 20, speed: 1 },
  ...COMP_STAGES.map((st, i) => ({ mod: "comp", layer: "comp", kind: "core", s: st.s, r0: st.r0, r1: st.r1, n: 22 + i, speed: 2.6, phase: i * 0.37 })),
  ...TURB_STAGES.map((st, i) => ({ mod: "turb", layer: i === 0 ? "hpt" : "lpt", kind: "core", s: st.s, r0: st.r0 - 1, r1: st.r1, n: 20 + i * 2, speed: 1.9, phase: i * 0.5 })),
];

const live = `
const P = ${JSON.stringify(P)};
const Z0 = ${Z0};
const SPREAD_DX = ${JSON.stringify(DX)};
const MODS = ${JSON.stringify(MODULES)};
const STAGES = ${JSON.stringify(LIVE_STAGES)};
const MODINFO = ${JSON.stringify(MODINFO)};
const SUBINFO = ${JSON.stringify(SUBINFO)};
const TAU = Math.PI * 2;
const root = document.querySelector(".tf");
const stage = root.querySelector(".tf-stage");
const svg = stage.querySelector("svg");
const readName = root.querySelector("[data-tf-name]");
const readData = root.querySelector("[data-tf-data]");
const readNote = root.querySelector("[data-tf-note]");
const parts = root.querySelector("[data-tf-parts]");
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
const state = { e: 0, eTarget: 0, spin: 0.6, spinTarget: 0.6, glow: 0.8, glowTarget: 0.8, sel: null, subSel: null, mission: "sl", clock: 0 };
const openAmount = Object.fromEntries(MODS.map((m) => [m.id, 0]));
const dxOf = (id) => SPREAD_DX[id] * state.e;
const subEls = {};
svg.querySelectorAll("[data-sub]").forEach((g) => (subEls[g.dataset.sub] = subEls[g.dataset.sub] || []).push(g));

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
  Object.keys(SUBINFO).forEach((id) => {
    const s = SUBINFO[id], t = translateAlong(P, [s.off * openAmount[s.mod], 0, 0]);
    subEls[id].forEach((g) => g.setAttribute("transform", t));
  });
  const apart = state.eTarget > 0.5;
  toggle.setAttribute("aria-pressed", apart ? "true" : "false");
  const label = apart ? "\\u21C4 ASSEMBLE" : "\\u21C4 PULL APART";
  if (toggle.textContent !== label) toggle.textContent = label;
}

function drawHeat(time) {
  const flicker = 0.88 + 0.12 * Math.sin(time * 13) * Math.sin(time * 7.3);
  glow.style.opacity = (state.glow * flicker).toFixed(3);
  plume.style.opacity = (Math.max(0, state.glow - 0.25) * 1.25 * (0.9 + 0.1 * Math.sin(time * 17))).toFixed(3);
}

// ---- readout: ties each module and part to the cycle model on the page ----
const fmtK = (v) => Math.round(v);
function say() {
  const m = window.PROP_MODELS && window.PROP_MODELS[state.mission];
  const info = MODINFO[state.sel], part = state.subSel && SUBINFO[state.subSel];
  parts.innerHTML = "";
  if (!info) {
    readName.textContent = "CF34-8 turbofan";
    readData.textContent = m ? "Thrust " + Math.round(m.lbf).toLocaleString("en-US") + " lbf \\u00B7 " + (state.mission === "sl" ? "takeoff" : "cruise") : "Hover a module";
    readNote.textContent = state.eTarget > 0.5 ? "Hover a module to open it up and read what each part does." : "Hover a module, or pull the engine apart to open the parts up.";
    return;
  }
  readName.textContent = part ? info.name + " \\u203A " + part.name : info.name;
  let note = part ? part.desc : info.desc;
  if (m) note = note.replace("{V8}", Math.round(m.V8));
  readNote.textContent = note;
  if (m) {
    const a = info.st[0], b = info.st[1];
    readData.textContent = fmtK(m.T[a]) + " \\u2192 " + fmtK(m.T[b]) + " K \\u00B7 " + m.P[a].toFixed(0) + " \\u2192 " + m.P[b].toFixed(0) + " kPa";
  } else readData.textContent = "";
  if (state.eTarget > 0.5) {
    info.subs.slice().sort((p, q) => SUBINFO[p].x - SUBINFO[q].x).forEach((id) => {
      const chip = document.createElement("span");
      chip.className = "tf-chip" + (id === state.subSel ? " on" : "");
      chip.textContent = SUBINFO[id].name;
      parts.appendChild(chip);
    });
  }
}

function select(id, subId) {
  const sId = state.eTarget > 0.5 ? subId || null : null;
  if (state.sel === id && state.subSel === sId) return;
  state.sel = id;
  state.subSel = sId;
  MODS.forEach((m) => modEl[m.id].classList.toggle("tf-sel", m.id === id && !sId));
  Object.keys(subEls).forEach((s) => subEls[s].forEach((g) => g.classList.toggle("tf-subsel", s === sId)));
  say();
}

// ---- input ----
const nearestSub = (modId, event) => {
  const box = svg.getBoundingClientRect();
  const x = (event.clientX - box.left) / box.width * ${WIDTH}, y = (event.clientY - box.top) / box.height * ${HEIGHT};
  const mx = MODS.find((m) => m.id === modId);
  let best = null, bestD = Infinity;
  MODINFO[modId].subs.forEach((id) => {
    const s = SUBINFO[id], c = iso([s.x + dxOf(modId) + s.off * openAmount[modId], 0, Z0], P);
    const dist = Math.hypot(c[0] - x, (c[1] - y) * 0.5);
    if (dist < bestD) { best = id; bestD = dist; }
  });
  return best;
};
const hitOf = (event) => {
  const t = event.target;
  if (!t || !t.closest) return undefined;
  if (t.closest("[data-stand]")) return { mod: null };
  const sg = t.closest("[data-sub]");
  if (sg) return { mod: SUBINFO[sg.dataset.sub].mod, sub: sg.dataset.sub };
  const mg = t.closest("[data-mod]");
  if (mg) return { mod: mg.dataset.mod, sub: state.eTarget > 0.5 ? nearestSub(mg.dataset.mod, event) : null };
  return undefined;
};
const pick = (event) => {
  const h = hitOf(event);
  if (h === undefined) return;
  select(h.mod, h.sub);
};
let drag = null;
stage.addEventListener("pointermove", (event) => {
  if (drag) {
    state.eTarget = Math.max(0, Math.min(1, drag.from + (event.clientX - drag.x) / 380));
    state.e = state.eTarget;
    return;
  }
  pick(event);
});
stage.addEventListener("pointerleave", () => { if (!drag) select(null); });
stage.addEventListener("pointerdown", (event) => { drag = { x: event.clientX, from: state.eTarget }; stage.setPointerCapture(event.pointerId); });
stage.addEventListener("pointerup", (event) => {
  const click = drag && Math.abs(event.clientX - drag.x) < 4;
  if (click) state.eTarget = state.eTarget > 0.5 ? 0 : 1;
  else if (drag) state.eTarget = state.eTarget > 0.5 ? 1 : 0;
  drag = null;
  stage.releasePointerCapture(event.pointerId);
  const under = document.elementFromPoint(event.clientX, event.clientY);
  if (under) pick({ target: under, clientX: event.clientX, clientY: event.clientY });
  say();
});
toggle.addEventListener("click", () => { state.eTarget = state.eTarget > 0.5 ? 0 : 1; select(state.sel, state.subSel); say(); });
stage.addEventListener("keydown", (event) => {
  const mi = MODS.findIndex((m) => m.id === state.sel);
  const moveMod = (n) => select(MODS[Math.max(0, Math.min(MODS.length - 1, n))].id, null);
  const subs = state.sel ? MODINFO[state.sel].subs.slice().sort((p, q) => SUBINFO[p].x - SUBINFO[q].x) : [];
  if (event.key === "ArrowRight") { event.preventDefault(); moveMod(mi + 1); }
  else if (event.key === "ArrowLeft") { event.preventDefault(); moveMod(mi < 0 ? 0 : mi - 1); }
  else if (event.key === "ArrowDown" && subs.length && state.eTarget > 0.5) { event.preventDefault(); select(state.sel, subs[Math.min(subs.length - 1, subs.indexOf(state.subSel) + 1)]); }
  else if (event.key === "ArrowUp" && subs.length && state.eTarget > 0.5) { event.preventDefault(); select(state.sel, subs[Math.max(0, subs.indexOf(state.subSel) - 1)]); }
  else if (event.key === "Enter" || event.key === " ") { event.preventDefault(); state.eTarget = state.eTarget > 0.5 ? 0 : 1; select(state.sel, state.subSel); say(); }
  else if (event.key === "Escape") select(null);
});

window.TF = {
  setMission(id) {
    state.mission = id;
    state.spinTarget = id === "sl" ? 1.5 : 1.0;
    state.glowTarget = id === "sl" ? 1 : 0.72;
    say();
  },
  spinUp(amount) { state.spinTarget = amount; },
};

let last = 0, frame = 0, visible = true;
function tick(now) {
  const dt = last ? Math.min((now - last) / 1000, 1 / 20) : 1 / 60;
  last = now;
  state.clock += dt;
  const k1 = 1 - Math.exp(-dt / 0.35), k2 = 1 - Math.exp(-dt / 0.6), k3 = 1 - Math.exp(-dt / 0.28);
  state.e += (state.eTarget - state.e) * (drag ? 0 : still.matches ? 1 : k1);
  MODS.forEach((m) => {
    const want = state.eTarget > 0.5 && state.e > 0.8 && state.sel === m.id ? 1 : 0;
    openAmount[m.id] += (want - openAmount[m.id]) * (still.matches ? 1 : k3);
    if (Math.abs(want - openAmount[m.id]) < 0.001) openAmount[m.id] = want;
  });
  state.spin += (state.spinTarget - state.spin) * k2;
  state.glow += (state.glowTarget - state.glow) * k2;
  drawModules();
  drawBlades(still.matches ? 0 : dt);
  drawHeat(state.clock);
  frame = visible ? requestAnimationFrame(tick) : 0;
}
new IntersectionObserver((entries) => { visible = entries[entries.length - 1].isIntersecting; if (visible && !frame) { last = 0; frame = requestAnimationFrame(tick); } }).observe(stage);
if (still.matches) state.spin = 0.2;
say();
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
.tf-sub { transition: filter 200ms ease; }
.tf-sub.tf-subsel { filter: drop-shadow(0 0 7px rgba(255,170,70,.85)); }
.tf-parts { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 8px; }
.tf-chip { font-size: .66rem; letter-spacing: .06em; padding: 3px 9px; border: 1px solid rgba(255,180,84,.22); border-radius: 999px; color: #9b8068; transition: all 200ms; }
.tf-chip.on { color: #ffb454; border-color: #ffb454; background: rgba(255,106,43,.12); }
.tf-hot { --anatomy-paper:#3a1608; --anatomy-face:#52200b; --anatomy-top:#ff8a3d; --anatomy-shade-0:#4a1b09; --anatomy-shade-1:#6a2a0d; --anatomy-shade-2:#8e3a10; --anatomy-shade-3:#b4521a; --anatomy-lit-top:#ffa55a; --anatomy-lit-shade:#c25c1c; --anatomy-lit:#ffe0b0; }
.tf-blade { stroke: var(--anatomy-lo); stroke-width: .3; stroke-linejoin: round; fill: var(--anatomy-shade-2); }
.tf-blade[data-shade="0"] { fill: var(--anatomy-shade-0); }
.tf-blade[data-shade="1"] { fill: var(--anatomy-shade-1); }
.tf-blade[data-shade="2"] { fill: var(--anatomy-shade-2); }
.tf-blade[data-shade="3"] { fill: var(--anatomy-top); }
.tf-bar { display: flex; justify-content: space-between; align-items: flex-end; gap: 16px; flex-wrap: wrap; margin-top: 6px; font-family: 'JetBrains Mono', monospace; }
.tf-read b { display: block; font-size: .72rem; letter-spacing: .18em; color: #ffb454; text-transform: uppercase; font-weight: 600; }
.tf-read span { display: block; font-size: .8rem; color: #f4ece4; }
.tf-read small { display: block; font-size: .76rem; color: #b8a28d; max-width: 62ch; min-height: 2.6em; font-family: 'Inter', sans-serif; margin-top: 2px; }
.tf-btn { font: inherit; font-size: .7rem; letter-spacing: .14em; color: #ffb454; background: rgba(255,106,43,.08); border: 1px solid rgba(255,106,43,.45); border-radius: 999px; padding: 8px 16px; cursor: pointer; transition: all 200ms; }
.tf-btn:hover { background: rgba(255,106,43,.2); }
@media (prefers-reduced-motion: reduce) { .tf-mod, .tf-sub { transition: none; } }
`;

const figure = `<div class="tf iso" data-theme="dark">
  <style>${k.ISO_CSS}${CSS}</style>
  <div class="tf-stage" tabindex="0" role="application" aria-label="Interactive turbofan engine. Hover or use the arrow keys to read each module; press Enter to pull the engine apart, then hover a module to open up its parts.">${svg}</div>
  <div class="tf-bar">
    <div class="tf-read" aria-live="polite"><b data-tf-name>CF34-8 turbofan</b><span data-tf-data></span><small data-tf-note></small><div class="tf-parts" data-tf-parts></div></div>
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
