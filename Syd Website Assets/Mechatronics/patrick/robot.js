// Patrick as geometry, second pass: product-render detail. Physically based materials (clearcoat on plastics, brushed
// steel, anodised aluminium, solder mask), printed circuit boards with silkscreen and copper traces drawn to canvas
// textures, drilled plates with chamfers, screws and standoffs, DIP chips with legs, screw terminals, servo horns.
// Robot frame: x forward, y up, z to the robot's RIGHT (the world flips z so the mission's "left" is the robot's left).
import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {armSolve, R} from './model.js';

const V3 = THREE.Vector3;
export const PALETTE = {
  yellow: '#f2b400', black: '#101115', teal: '#17877d', blue: '#2563eb', red: '#b3232a', ard: '#0b66a6', silver: '#cfd4dc',
  gold: '#d6a62a', mdf: '#b98e5c', band: '#c9923f', tyre: '#0e0f12', white: '#ece9e2', steel: '#aab0b8', alu: '#2a2c31',
};

/* ------------------------------------------------------------------------------------------------ textures --- */
function tex(w, h, draw, o = {}) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  if (o.srgb !== false) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  if (o.repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(...o.repeat); }
  return t;
}
let seed = 7; const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
const grain = tex(256, 256, (g, w, h) => {                      // injection-moulded surface: fine speckle
  g.fillStyle = '#808080'; g.fillRect(0, 0, w, h);
  for (let i = 0; i < 14000; i++) { const v = 90 + rnd() * 80; g.fillStyle = `rgba(${v},${v},${v},0.5)`; g.fillRect(rnd() * w, rnd() * h, 1.5, 1.5); }
}, {srgb: false, repeat: [4, 4]});
const layers = tex(64, 256, (g, w, h) => {                      // 3D-printed layer lines
  for (let y = 0; y < h; y += 4) { g.fillStyle = y % 8 ? '#9a9a9a' : '#6e6e6e'; g.fillRect(0, y, w, 4); }
}, {srgb: false});
const knurl = tex(128, 64, (g, w, h) => {                       // diamond knurl on the brass weight
  g.fillStyle = '#777'; g.fillRect(0, 0, w, h); g.strokeStyle = '#bbb'; g.lineWidth = 1.5;
  for (let i = -h; i < w + h; i += 6) { g.beginPath(); g.moveTo(i, 0); g.lineTo(i + h, h); g.stroke(); g.beginPath(); g.moveTo(i + h, 0); g.lineTo(i, h); g.stroke(); }
}, {srgb: false, repeat: [6, 1]});
const woodTex = tex(256, 128, (g, w, h) => {
  g.fillStyle = PALETTE.mdf; g.fillRect(0, 0, w, h);
  for (let i = 0; i < 400; i++) { g.fillStyle = `rgba(70,45,20,${rnd() * 0.12})`; g.fillRect(rnd() * w, rnd() * h, 20 + rnd() * 60, 1); }
  for (let i = 0; i < 3000; i++) { g.fillStyle = `rgba(255,235,200,${rnd() * 0.05})`; g.fillRect(rnd() * w, rnd() * h, 2, 2); }
});

/** A printed circuit board top: solder-mask colour, faint copper traces, pads, mounting holes and silkscreen. 10 px per mm. */
function pcb(wmm, hmm, base, draw, o = {}) {
  const K = 10;
  return tex(Math.round(wmm * K), Math.round(hmm * K), (g, w, h) => {
    g.fillStyle = base; g.fillRect(0, 0, w, h);
    g.strokeStyle = o.trace || 'rgba(255,255,255,0.07)'; g.lineWidth = 3; g.lineCap = 'round'; g.lineJoin = 'round';
    for (let i = 0; i < 90; i++) {
      let x = rnd() * w, y = rnd() * h; g.beginPath(); g.moveTo(x, y);
      for (let k = 0; k < 3; k++) { if (rnd() < 0.5) x += (rnd() - 0.5) * 220; else y += (rnd() - 0.5) * 220; g.lineTo(x, y); }
      g.stroke();
    }
    g.fillStyle = 'rgba(214,170,90,0.55)';
    for (let i = 0; i < 160; i++) { g.beginPath(); g.arc(rnd() * w, rnd() * h, 2.4, 0, 7); g.fill(); }
    g.fillStyle = '#ffffff'; g.strokeStyle = '#ffffff'; g.textBaseline = 'middle';
    draw(g, K, w, h, {
      text: (t, x, y, px = 22, a = 'left', rot = 0) => { g.save(); g.translate(x * K, y * K); g.rotate(rot); g.font = `600 ${px}px "JetBrains Mono", monospace`; g.textAlign = a; g.fillStyle = '#fff'; g.fillText(t, 0, 0); g.restore(); },
      hole: (x, y, r = 1.6) => { g.fillStyle = '#d6aa5a'; g.beginPath(); g.arc(x * K, y * K, (r + 0.9) * K, 0, 7); g.fill(); g.fillStyle = '#05060a'; g.beginPath(); g.arc(x * K, y * K, r * K, 0, 7); g.fill(); },
      box: (x, y, w2, h2) => { g.strokeStyle = '#fff'; g.lineWidth = 2.5; g.strokeRect(x * K, y * K, w2 * K, h2 * K); },
    });
  }, o);
}

/* ------------------------------------------------------------------------------------------------ materials --- */
const cache = new Map();
/** o: r roughness, m metalness, cc clearcoat, ccr clearcoat roughness, env, bump, bs bumpScale, map, sheen */
function mat(color, o = {}) {
  const key = color + '|' + [o.r, o.m, o.cc, o.ccr, o.env, o.bump?.uuid, o.bs, o.map?.uuid, o.sheen, o.sheenColor].join(',');
  if (cache.has(key)) return cache.get(key);
  const m = new THREE.MeshPhysicalMaterial({
    color, roughness: o.r ?? 0.5, metalness: o.m ?? 0.0, envMapIntensity: o.env ?? 1.0,
    clearcoat: o.cc ?? 0, clearcoatRoughness: o.ccr ?? 0.2, map: o.map ?? null, bumpMap: o.bump ?? null, bumpScale: o.bs ?? 0.6,
    sheen: o.sheen ?? 0, sheenRoughness: 0.6, sheenColor: new THREE.Color(o.sheenColor ?? '#ffffff'), emissive: 0x000000,
  });
  cache.set(key, m);
  return m;
}
const M = {
  yellow: {r: 0.42, cc: 0.5, ccr: 0.18, bump: grain, bs: 0.35},
  teal: {r: 0.5, cc: 0.15, ccr: 0.35, bump: layers, bs: 0.9},
  acrylic: {r: 0.2, cc: 0.8, ccr: 0.08, env: 0.75},
  blackPlastic: {r: 0.55, cc: 0.25, ccr: 0.3, bump: grain, bs: 0.5},
  chip: {r: 0.45, cc: 0.2, bump: grain, bs: 0.3},
  steel: {r: 0.28, m: 1, env: 1.2},
  zinc: {r: 0.4, m: 0.9, env: 1.0},
  brass: {r: 0.3, m: 1, env: 1.3},
  gold: {r: 0.22, m: 1, env: 1.3},
  rubber: {r: 0.88, bump: grain, bs: 1.2},
  pvc: {r: 0.32, cc: 0.5, ccr: 0.2},
  alu: {r: 0.38, m: 0.85, env: 1.0},
};

/* ---------------------------------------------------------------------------------------------- geometry kit --- */
const rbox = (w, h, d, r = 0.0015) => new RoundedBoxGeometry(w, h, d, 3, Math.min(r, w / 2.2, h / 2.2, d / 2.2));
const cyl = (r, h, seg = 28) => new THREE.CylinderGeometry(r, r, h, seg);
const hexPrism = (r, h) => new THREE.CylinderGeometry(r, r, h, 6);
const tmpM = new THREE.Matrix4(), tmpQ = new THREE.Quaternion(), tmpE = new THREE.Euler();
/** a copy of geo moved to pos, rotated r (euler), scaled s: for merging many small features into one mesh */
function G(geo, pos = [0, 0, 0], r = [0, 0, 0], s = [1, 1, 1]) {
  const g = geo.index ? geo.toNonIndexed() : geo;
  g.applyMatrix4(tmpM.compose(new V3(...pos), tmpQ.setFromEuler(tmpE.set(...r)), new V3(...s)));
  return g;
}
const flat = (l) => mergeGeometries(l.map((g) => (g.index ? g.toNonIndexed() : g)), false);
const rrect = (p, cx, cz, w, d, rad) => { const r = Math.min(rad ?? Math.min(w, d) / 2.1, w / 2.05, d / 2.05); p.moveTo(cx - w / 2 + r, cz - d / 2); p.lineTo(cx + w / 2 - r, cz - d / 2); p.absarc(cx + w / 2 - r, cz - d / 2 + r, r, -Math.PI / 2, 0); p.lineTo(cx + w / 2, cz + d / 2 - r); p.absarc(cx + w / 2 - r, cz + d / 2 - r, r, 0, Math.PI / 2); p.lineTo(cx - w / 2 + r, cz + d / 2); p.absarc(cx - w / 2 + r, cz + d / 2 - r, r, Math.PI / 2, Math.PI); p.lineTo(cx - w / 2, cz - d / 2 + r); p.absarc(cx - w / 2 + r, cz - d / 2 + r, r, Math.PI, Math.PI * 1.5); };
/** A flat plate, rounded corners, drilled holes [x, z, r] and slots [x, z, w, d], chamfered; centred, size w (x) by d (z), extruded up t. */
function plate(w, d, t, holes = [], slots = [], rc = 0.005) {
  const sh = new THREE.Shape();
  rrect(sh, 0, 0, w, d, rc);
  for (const [hx, hz, hr] of holes) { const p = new THREE.Path(); p.absarc(hx, -hz, hr, 0, Math.PI * 2, true); sh.holes.push(p); }
  for (const [sx, sz, sw, sd] of slots) { const p = new THREE.Path(); rrect(p, sx, -sz, sw, sd); sh.holes.push(p); }
  const g = new THREE.ExtrudeGeometry(sh, {depth: t, bevelEnabled: true, bevelSize: 0.0003, bevelThickness: 0.0003, bevelSegments: 1, curveSegments: 10});
  g.rotateX(-Math.PI / 2);                                       // shape (x, y) -> (x, -z); extrusion -> +y
  return g;
}
/** A long bar: stadium outline with round lightening holes, thickness t along z, length along x from -len/2 to len/2. */
function bar(len, w, t, holes = 0, hr = 0.0022) {
  const sh = new THREE.Shape(), r = w / 2, x = len / 2;
  sh.moveTo(-x + r, -r); sh.lineTo(x - r, -r); sh.absarc(x - r, 0, r, -Math.PI / 2, Math.PI / 2); sh.lineTo(-x + r, r); sh.absarc(-x + r, 0, r, Math.PI / 2, Math.PI * 1.5);
  for (let i = 0; i < holes; i++) { const hx = -x + r + i * ((len - w) / Math.max(holes - 1, 1)), p = new THREE.Path(); p.absarc(hx, 0, hr, 0, Math.PI * 2, true); sh.holes.push(p); }
  const g = new THREE.ExtrudeGeometry(sh, {depth: t, bevelEnabled: true, bevelSize: 0.0002, bevelThickness: 0.0002, bevelSegments: 1, curveSegments: 12});
  g.translate(0, 0, -t / 2);
  return g;
}

/* ----------------------------------------------------------------------------------------------- robot build --- */
export function buildRobot() {
  const root = new THREE.Group();
  const parts = [], byId = {}, meshes = [];

  function part(id, name, base, explode, a, b) {
    const group = new THREE.Group(); group.position.copy(base); root.add(group);
    const p = {id, name, group, base: base.clone(), explode: new V3(...explode), a, b, mats: [], meshes: []};
    parts.push(p); byId[id] = p;
    return p;
  }
  /** Adds a mesh to a part; materials are cloned per part so highlighting and dimming act on one part alone. */
  function add(p, geo, color, pos = [0, 0, 0], o = {}, parent = null, matOverride = null) {
    const base = matOverride || mat(color, o);
    const m = Array.isArray(base) ? base.map((x) => x.clone()) : base.clone();
    (Array.isArray(m) ? m : [m]).forEach((x) => p.mats.push(x));
    const mesh = new THREE.Mesh(geo, m);
    mesh.position.set(...pos);
    if (o.rot) mesh.rotation.set(...o.rot);
    mesh.castShadow = true; mesh.receiveShadow = true;
    mesh.userData.part = p.id;
    (parent || p.group).add(mesh);
    p.meshes.push(mesh); meshes.push(mesh);
    return mesh;
  }
  const merged = (p, list, color, o = {}, parent = null) => add(p, flat(list), color, [0, 0, 0], o, parent);
  const sub = (p, pos = [0, 0, 0]) => { const g = new THREE.Group(); g.position.set(...pos); p.group.add(g); return g; };

  const AX = {'y+': [[0, 0, 0], [0, 1, 0]], 'y-': [[Math.PI, 0, 0], [0, -1, 0]], 'z+': [[Math.PI / 2, 0, 0], [0, 0, 1]], 'z-': [[-Math.PI / 2, 0, 0], [0, 0, -1]], 'x+': [[0, 0, -Math.PI / 2], [1, 0, 0]], 'x-': [[0, 0, Math.PI / 2], [-1, 0, 0]]};
  /** Pan-head screws with a cross recess. Each entry [x, y, z, 'y+' | 'y-' | 'x+' | 'x-' | 'z+' | 'z-']: the head faces that way. */
  function screws(p, list, rr = 0.0026) {
    const heads = [], recess = [], hh = 0.0017;
    for (const [x, y, z, ax = 'y+'] of list) {
      const [r, d] = AX[ax], at = (k) => [x + d[0] * k, y + d[1] * k, z + d[2] * k];
      heads.push(G(cyl(rr, hh, 14), at(0), r), G(new THREE.SphereGeometry(rr * 0.95, 14, 6, 0, Math.PI * 2, 0, Math.PI / 2), at(hh / 2), r, [1, 0.55, 1]));
      const o2 = at(hh / 2 + rr * 0.52);
      recess.push(G(new THREE.BoxGeometry(rr * 1.3, 0.0004, 0.0004), o2, r), G(new THREE.BoxGeometry(0.0004, 0.0004, rr * 1.3), o2, r));
    }
    merged(p, heads, PALETTE.steel, M.zinc);
    merged(p, recess, '#17181c', {r: 0.7});
  }
  const standoff = (x, y, z, h) => [G(hexPrism(0.0035, h), [x, y, z]), G(cyl(0.0016, h + 0.006, 10), [x, y, z])];
  const WZ = 0.0965, PX = 0.035;

  /* ---- base plate and caster ----------------------------------------------------------------------------------- */
  const base = part('base', 'Base plate', new V3(0, 0, 0), [0, 0, 0], 0, 1);
  {
    const holes = [], slots = [];
    for (const sx of [-0.04, 0.115]) for (const sz of [-0.048, 0.048]) holes.push([sx - PX, sz, 0.0017]);
    for (const sz of [-0.012, 0.012]) holes.push([0.115 - PX + 0.008, sz, 0.0013]);
    slots.push([-0.02 - PX, -0.036, 0.024, 0.006], [-0.02 - PX, 0.036, 0.024, 0.006], [0.045 - PX, 0, 0.040, 0.008], [0.098 - PX, 0.0, 0.012, 0.022]);
    add(base, plate(0.200, 0.116, 0.003, holes, slots, 0.007), PALETTE.black, [PX, 0.0285, 0], M.acrylic);
    const nuts = [];
    for (const sx of [-0.04, 0.115]) for (const sz of [-0.048, 0.048]) { nuts.push(G(hexPrism(0.0035, 0.0026), [sx, 0.0270, sz])); nuts.push(G(cyl(0.0058, 0.0007, 18), [sx, 0.0283, sz])); }
    merged(base, nuts, PALETTE.steel, M.zinc);
  }
  const caster = part('caster', 'Ball caster', new V3(0, 0, 0), [0.06, 0.05, 0], 0.62, 0.92);
  {
    add(caster, new THREE.SphereGeometry(0.0112, 40, 24), PALETTE.steel, [0.115, 0.0125, 0], M.steel);
    merged(caster, [G(cyl(0.0105, 0.004, 30), [0.115, 0.0178, 0]), G(rbox(0.026, 0.0035, 0.026, 0.0035), [0.115, 0.0231, 0])], '#1e2025', M.blackPlastic);
    screws(caster, [[0.1245, 0.0251, 0.0095, 'y+'], [0.1055, 0.0251, 0.0095, 'y+'], [0.1245, 0.0251, -0.0095, 'y+'], [0.1055, 0.0251, -0.0095, 'y+']], 0.002);
  }

  /* ---- deck, standoffs, arm brackets --------------------------------------------------------------------------- */
  const deck = part('deck', 'Electronics deck', new V3(0, 0, 0), [0, 0.12, 0], 0.46, 0.82);
  {
    const DX = 0.0375, holes = [], slots = [];
    for (const sx of [-0.04, 0.115]) for (const sz of [-0.048, 0.048]) holes.push([sx - DX, sz, 0.0017]);
    const A = (mx, my) => [0.040 + (mx - 34.3) / 1000 - DX, -0.034 + (my - 26.7) / 1000, 0.0016];          // Arduino mount holes
    const L = (mx, my) => [0.085 + (mx - 21.5) / 1000 - DX, 0.034 + (my - 21.5) / 1000, 0.0016];           // L298N mount holes
    holes.push(A(14, 2.5), A(15.3, 50.7), A(66.1, 7.6), A(66.1, 35.5), L(3, 3), L(40, 3), L(3, 40), L(40, 40));
    slots.push([0.062 - DX, 0, 0.100, 0.014]);
    add(deck, plate(0.175, 0.116, 0.003, holes, slots, 0.007), PALETTE.black, [DX, 0.0615, 0], M.acrylic);
    const so = [];
    for (const sx of [-0.04, 0.115]) for (const sz of [-0.048, 0.048]) so.push(...standoff(sx, 0.0465, sz, 0.030));
    merged(deck, so, PALETTE.steel, M.alu);
    screws(deck, [[-0.04, 0.0648, -0.048], [-0.04, 0.0648, 0.048], [0.115, 0.0648, -0.048], [0.115, 0.0648, 0.048]]);
    for (const z of [-0.0295, 0.0295]) add(deck, bar(0.068, 0.017, 0.003, 3, 0.0022), PALETTE.yellow, [-0.045, 0.0645 + 0.034, z], {...M.yellow, rot: [0, 0, Math.PI / 2]});
    const pins = [], clips = [];
    for (const y of [R.pivot[1], R.pivot[1] + 0.035]) {
      pins.push(G(cyl(0.0022, 0.066, 14), [-0.045, y, 0], [Math.PI / 2, 0, 0]));
      for (const z of [-0.0335, 0.0335]) clips.push(G(new THREE.TorusGeometry(0.0034, 0.0006, 8, 18), [-0.045, y, z]));
    }
    merged(deck, pins, PALETTE.steel, M.steel);
    merged(deck, clips, PALETTE.steel, M.zinc);
    screws(deck, [[-0.045 - 0.0, 0.0645 + 0.0095, -0.0310, 'z-'], [-0.045, 0.0645 + 0.0095, 0.0310, 'z+'], [-0.045, 0.0645 + 0.0595, -0.0310, 'z-'], [-0.045, 0.0645 + 0.0595, 0.0310, 'z+']].filter((_, i) => i < 2), 0.0021);
  }

  /* ---- battery: holder with four AA cells -------------------------------------------------------------------- */
  const battery = part('battery', 'Battery pack (4 x AA)', new V3(0, 0, 0), [-0.12, 0.05, 0], 0.5, 0.82);
  {
    const bx = -0.030, by = 0.0395;
    merged(battery, [G(rbox(0.066, 0.0035, 0.060, 0.002), [bx, by - 0.0062, 0]), G(rbox(0.0035, 0.0165, 0.060, 0.0012), [bx - 0.0313, by + 0.0002, 0]), G(rbox(0.0035, 0.0165, 0.060, 0.0012), [bx + 0.0313, by + 0.0002, 0]),
      G(rbox(0.066, 0.0165, 0.0030, 0.001), [bx, by + 0.0002, -0.0285]), G(rbox(0.066, 0.0165, 0.0030, 0.001), [bx, by + 0.0002, 0.0285]),
      ...[-0.0145, 0, 0.0145].map((z) => G(rbox(0.060, 0.0120, 0.0014, 0.0005), [bx, by + 0.0005, z]))], '#17181c', M.blackPlastic);
    for (let i = 0; i < 4; i++) {
      const z = (i - 1.5) * 0.0145, sg = i % 2 ? -1 : 1;
      add(battery, cyl(0.00705, 0.049, 28), '#1b1c20', [bx, by + 0.0016, z], {...M.pvc, rot: [0, 0, Math.PI / 2]});
      add(battery, cyl(0.00708, 0.0125, 28), '#c47a2c', [bx - 0.0120 * sg, by + 0.0016, z], {r: 0.35, m: 0.5, rot: [0, 0, Math.PI / 2]});
      add(battery, cyl(0.0032, 0.0010, 14), PALETTE.steel, [bx + 0.0250 * sg, by + 0.0016, z], {...M.steel, rot: [0, 0, Math.PI / 2]});
    }
    merged(battery, [-0.0218, 0.0, 0.0218].map((z) => G(cyl(0.0036, 0.0016, 12), [bx + 0.0297, by + 0.0016, z], [0, 0, Math.PI / 2])), PALETTE.steel, M.steel);
    const lead = (col, z) => add(battery, new THREE.TubeGeometry(new THREE.CatmullRomCurve3([new V3(bx - 0.0315, by + 0.002, z), new V3(bx - 0.040, by + 0.002, z * 0.8), new V3(bx - 0.046, by + 0.012, z * 0.4)]), 12, 0.0009, 8), col, [0, 0, 0], M.pvc);
    lead('#c62a2a', 0.0225); lead('#161616', -0.0225);
  }

  /* ---- motors ------------------------------------------------------------------------------------------------- */
  for (const side of [-1, 1]) {
    const tag = side < 0 ? 'L' : 'R';
    const motor = part('motor' + tag, `${side < 0 ? 'Left' : 'Right'} drive motor (TT 1:48)`, new V3(0, 0, 0), [0, 0, side * 0.12], 0.6, 0.9);
    const z = side * 0.069, y = 0.0325, out = side > 0 ? 'z+' : 'z-';
    add(motor, rbox(0.062, 0.0225, 0.0225, 0.004), '#f1c027', [0.002, y, z], M.yellow);
    add(motor, rbox(0.0640, 0.0016, 0.0234, 0.0008), '#c99a12', [0.002, y, z], M.yellow);
    const ribs = []; for (const dx of [-0.018, -0.006, 0.006, 0.018]) ribs.push(G(rbox(0.0035, 0.0023, 0.0236, 0.0006), [0.002 + dx, y + 0.0124, z]), G(rbox(0.0035, 0.0023, 0.0236, 0.0006), [0.002 + dx, y - 0.0124, z]));
    merged(motor, ribs, '#e8b81f', M.yellow);
    const oz = z + side * 0.0112;
    screws(motor, [[-0.0125, y + 0.0065, oz, out], [0.0165, y + 0.0065, oz, out], [-0.0125, y - 0.0065, oz, out], [0.0165, y - 0.0065, oz, out]], 0.0019);
    add(motor, cyl(0.0098, 0.028, 32), '#a4a9b0', [-0.046, y, z], {...M.steel, rot: [0, 0, Math.PI / 2]});
    add(motor, cyl(0.0100, 0.0040, 32), '#1a1b20', [-0.062, y, z], {...M.blackPlastic, rot: [0, 0, Math.PI / 2]});
    add(motor, cyl(0.0034, 0.0030, 16), '#c9ccd2', [-0.0655, y, z], {...M.steel, rot: [0, 0, Math.PI / 2]});
    merged(motor, [G(new THREE.BoxGeometry(0.0034, 0.0016, 0.0030), [-0.0665, y + 0.0049, z - 0.0034]), G(new THREE.BoxGeometry(0.0034, 0.0016, 0.0030), [-0.0665, y + 0.0049, z + 0.0034])], PALETTE.gold, M.gold);
    for (const [s, col] of [[-1, '#c42b2b'], [1, '#18181a']]) add(motor, new THREE.TubeGeometry(new THREE.CatmullRomCurve3([new V3(-0.067, y + 0.005, z + s * 0.0034), new V3(-0.078, y + 0.01, z + s * 0.006), new V3(-0.09, y + 0.004, z + s * 0.016)]), 12, 0.0007, 6), col, [0, 0, 0], M.pvc);
    add(motor, cyl(0.0027, 0.027, 16), PALETTE.steel, [0, y, side * 0.0885], {...M.steel, rot: [Math.PI / 2, 0, 0]});
    add(motor, new THREE.BoxGeometry(0.0034, 0.0042, 0.0075), '#c9ccd2', [0, y, side * 0.1005], M.steel);
    add(motor, cyl(0.0027, 0.013, 16), PALETTE.steel, [0, y, side * 0.0517], {...M.steel, rot: [Math.PI / 2, 0, 0]});
  }

  /* ---- wheels and rubber bands ------------------------------------------------------------------------------ */
  const wheels = {};
  for (const side of [-1, 1]) {
    const tag = side < 0 ? 'L' : 'R';
    const wheel = part('wheel' + tag, `${side < 0 ? 'Left' : 'Right'} drive wheel`, new V3(0, R.wheelR, side * WZ), [0, 0, side * 0.2], 0.72, 1);
    const spin = sub(wheel);
    const rim = new THREE.Shape(); rim.absarc(0, 0, 0.0286, 0, Math.PI * 2);
    for (let i = 0; i < 5; i++) {
      const a = i * Math.PI * 2 / 5, h = new THREE.Path(), r0 = 0.0108, r1 = 0.0246, w0 = 0.2, w1 = 0.13;
      h.moveTo(Math.cos(a - w0) * r0, Math.sin(a - w0) * r0); h.absarc(0, 0, r1, a - w1, a + w1, false); h.absarc(0, 0, r0, a + w0, a - w0, true); h.closePath(); rim.holes.push(h);
    }
    const rg = new THREE.ExtrudeGeometry(rim, {depth: 0.010, bevelEnabled: true, bevelSize: 0.0006, bevelThickness: 0.0006, bevelSegments: 2, curveSegments: 28});
    rg.translate(0, 0, -0.005);
    add(wheel, rg, PALETTE.yellow, [0, 0, 0], M.yellow, spin);
    add(wheel, new THREE.TorusGeometry(0.0272, 0.0017, 10, 64), PALETTE.yellow, [0, 0, side * 0.0058], M.yellow, spin);
    add(wheel, new THREE.CylinderGeometry(0.0108, 0.0128, 0.0140, 32), PALETTE.yellow, [0, 0, 0], {...M.yellow, rot: [Math.PI / 2, 0, 0]}, spin);
    add(wheel, new THREE.SphereGeometry(0.0072, 24, 10, 0, Math.PI * 2, 0, Math.PI / 2), PALETTE.yellow, [0, 0, side * 0.0068], {...M.yellow, rot: [side * Math.PI / 2, 0, 0]}, spin);
    merged(wheel, [G(hexPrism(0.0040, 0.0030), [0, 0, side * 0.0092], [Math.PI / 2, 0, 0]), G(cyl(0.0021, 0.0050, 12), [0, 0, side * 0.0108], [Math.PI / 2, 0, 0])], PALETTE.steel, M.zinc, spin);
    const pr = [], rw = 0.0128, ri = 0.0286, ro = 0.0324, sh = 0.0018;
    pr.push([ri, -rw], [ro - sh, -rw], [ro - sh * 0.3, -rw + sh * 0.4], [ro, -rw + sh], [ro, rw - sh], [ro - sh * 0.3, rw - sh * 0.4], [ro - sh, rw], [ri, rw]);
    add(wheel, new THREE.LatheGeometry(pr.map(([r, yy]) => new THREE.Vector2(r, yy)), 80), PALETTE.tyre, [0, 0, 0], {...M.rubber, rot: [Math.PI / 2, 0, 0]}, spin);
    const ribsG = [];
    for (let i = 0; i < 44; i++) { const a = i / 44 * Math.PI * 2; ribsG.push(G(rbox(0.0017, 0.0017, 0.0200, 0.0006), [Math.cos(a) * 0.0325, Math.sin(a) * 0.0325, 0], [0, 0, a])); }
    merged(wheel, ribsG, PALETTE.tyre, M.rubber, spin);
    wheels[tag] = spin;

    const band = part('band' + tag, `${side < 0 ? 'Left' : 'Right'} rubber bands`, new V3(0, R.wheelR, side * WZ), [0, 0.1, side * 0.3], 0.78, 1);
    const bspin = sub(band);
    for (const zz of [-0.0066, 0.0066]) {
      const bg = new THREE.LatheGeometry([[ro - 0.0002, -0.0017], [ro + R.bandT * 0.8, -0.0017], [ro + R.bandT, -0.0012], [ro + R.bandT, 0.0012], [ro + R.bandT * 0.8, 0.0017], [ro - 0.0002, 0.0017]].map(([r, yy]) => new THREE.Vector2(r, yy)), 80);
      add(band, bg, PALETTE.band, [0, 0, zz], {r: 0.5, cc: 0.35, ccr: 0.5, sheen: 0.6, sheenColor: '#ffd9a0', rot: [Math.PI / 2, 0, 0]}, bspin);
    }
    wheels[tag + 'band'] = bspin; wheels[tag + 'bandPart'] = band;
  }

  /* ---- ultrasonic sensor ------------------------------------------------------------------------------------- */
  const sonar = part('sonar', 'Ultrasonic sensor (HC-SR04)', new V3(0, 0, 0), [0.16, 0.02, 0], 0.38, 0.7);
  {
    const sx = 0.1375, sy = R.sensorY;
    const top = pcb(45, 20, '#0d4f9c', (g, K, w, h, T) => {
      T.hole(2.2, 2.2); T.hole(42.8, 2.2); T.hole(2.2, 17.8); T.hole(42.8, 17.8);
      T.text('HC-SR04', 22.5, 10.0, 26, 'center'); T.text('Ultrasonic Sensor', 22.5, 14.2, 11, 'center'); T.text('VCC  TRIG  ECHO  GND', 22.5, 18.6, 9, 'center');
    });
    const plain = mat('#0d4f9c', {r: 0.5, cc: 0.6, ccr: 0.15}), face = new THREE.MeshPhysicalMaterial({map: top, roughness: 0.5, clearcoat: 0.6, clearcoatRoughness: 0.15});
    add(sonar, new THREE.BoxGeometry(0.0016, 0.020, 0.045), '', [sx, sy, 0], {}, null, [face, plain, plain, plain, plain, plain]);
    for (const z of [-0.0105, 0.0105]) {
      const gril = tex(128, 128, (g, w, h) => { g.fillStyle = '#17181c'; g.fillRect(0, 0, w, h); g.fillStyle = '#3a3d44'; for (let yy = 6; yy < h; yy += 9) for (let x = ((yy / 9) % 2) * 4.5 + 5; x < w; x += 9) { g.beginPath(); g.arc(x, yy, 2.4, 0, 7); g.fill(); } });
      add(sonar, cyl(0.0082, 0.0128, 40), PALETTE.silver, [0.1450, sy, z], {...M.steel, rot: [0, 0, Math.PI / 2]});
      add(sonar, cyl(0.0067, 0.0010, 40), '#ffffff', [0.1517, sy, z], {r: 0.5, map: gril, rot: [0, 0, Math.PI / 2]});
      add(sonar, new THREE.TorusGeometry(0.0074, 0.0007, 8, 40), PALETTE.silver, [0.1514, sy, z], {...M.steel, rot: [0, Math.PI / 2, 0]});
    }
    add(sonar, new THREE.CylinderGeometry(0.0021, 0.0021, 0.0090, 16), PALETTE.silver, [sx - 0.0045, sy + 0.0000, -0.0072], {...M.steel, rot: [0, 0, Math.PI / 2]});
    merged(sonar, [G(rbox(0.0016, 0.0050, 0.0095, 0.0004), [sx - 0.0014, sy + 0.0032, 0.0155]), G(rbox(0.0016, 0.0045, 0.0085, 0.0004), [sx - 0.0014, sy - 0.0045, 0.0090]), G(rbox(0.0014, 0.0030, 0.0040, 0.0003), [sx - 0.0013, sy - 0.0010, -0.0020])], '#111216', M.chip);
    merged(sonar, [G(rbox(0.0026, 0.0026, 0.0106, 0.0004), [sx - 0.0020, sy - 0.0098, 0])], '#14151a', M.blackPlastic);
    ['#d33', '#e8a31a', '#2a9d4a', '#161616'].forEach((c, i) => add(sonar, new THREE.TubeGeometry(new THREE.CatmullRomCurve3([new V3(sx - 0.0030, sy - 0.0106, (i - 1.5) * 0.0025), new V3(sx - 0.007, sy - 0.0150, (i - 1.5) * 0.0020), new V3(sx - 0.020, sy - 0.0160, (i - 1.5) * 0.0030), new V3(sx - 0.034, sy - 0.0100, (i - 1.5) * 0.0060)]), 14, 0.0007, 6), c, [0, 0, 0], M.pvc));
  }

  /* ---- microcontroller board ---------------------------------------------------------------------------------- */
  const ard = part('arduino', 'Microcontroller board', new V3(0, 0, 0), [0, 0.2, -0.09], 0.18, 0.5);
  {
    const W = 68.6, H = 53.4, x0 = 0.040, y0 = 0.0653, z0 = -0.034;
    const HDR = [[18.0, 3.3, 10], [44.5, 3.3, 8], [27.9, 47.4, 8], [50.8, 47.4, 6]];
    const top = pcb(W, H, '#0b6aa6', (g, K, w, h, T) => {
      T.hole(14, 2.5); T.hole(15.3, 50.7); T.hole(66.1, 7.6); T.hole(66.1, 35.5);
      T.text('UNO R3', 36, 20.5, 32, 'center'); T.text('ATmega328P  16MHz', 36, 25.0, 13, 'center'); T.text('DIGITAL (PWM~)', 38, 7.4, 11, 'center'); T.text('ANALOG IN', 57, 43.6, 11, 'center'); T.text('POWER', 37, 43.6, 11, 'center');
      T.text('RESET', 6.7, 11.4, 10, 'center'); T.text('TX RX L', 52, 13.8, 10, 'center'); T.text('ICSP', 63, 27, 10, 'center');
      g.font = '700 34px sans-serif'; g.textAlign = 'center'; g.fillStyle = '#fff'; g.fillText('∞', 16 * K, 31 * K);
      for (const [mx, my, n] of HDR) T.box(mx - 1.4, my - 1.5, 2.54 * n + 0.3, 3.0);
    });
    const plain = mat('#0b6aa6', {r: 0.5, cc: 0.6, ccr: 0.15}), face = new THREE.MeshPhysicalMaterial({map: top, roughness: 0.5, clearcoat: 0.6, clearcoatRoughness: 0.15});
    add(ard, new THREE.BoxGeometry(W / 1000, 0.0016, H / 1000), '', [x0, y0, z0], {}, null, [plain, plain, face, plain, plain, plain]);
    const P = (mx, my, hh = 0) => [x0 + (mx - W / 2) / 1000, y0 + 0.0008 + hh, z0 + (my - H / 2) / 1000];
    add(ard, rbox(0.016, 0.0115, 0.0122, 0.0006), PALETTE.silver, P(5, 15.5, 0.0058), M.steel);
    add(ard, rbox(0.0030, 0.0070, 0.0075, 0.0004), '#0a0b0e', P(-3.2, 15.5, 0.0058), {r: 0.6});
    add(ard, rbox(0.0140, 0.0112, 0.0090, 0.0008), '#15161a', P(5.5, 46.5, 0.0056), M.blackPlastic);
    add(ard, cyl(0.0016, 0.0030, 14), '#1d1e22', P(-0.8, 46.5, 0.0058), {r: 0.6, rot: [0, 0, Math.PI / 2]});
    const legs = [], body = [];
    body.push(G(rbox(0.0350, 0.0034, 0.0078, 0.0004), P(45, 34, 0.0030)), G(rbox(0.0352, 0.0036, 0.0098, 0.0005), P(45, 34, 0.0014)));
    for (let i = 0; i < 14; i++) for (const s of [-1, 1]) legs.push(G(new THREE.BoxGeometry(0.0006, 0.0034, 0.0006), P(29.1 + i * 2.54, 34 + s * 4.0, 0.0010)));
    merged(ard, body, '#14151a', M.chip);
    merged(ard, legs, PALETTE.steel, M.steel);
    add(ard, rbox(0.0120, 0.0036, 0.0045, 0.0012), PALETTE.silver, P(22, 26, 0.0021), M.steel);
    add(ard, rbox(0.0070, 0.0014, 0.0070, 0.0003), '#111216', P(33, 13, 0.0008), M.chip);
    merged(ard, [G(cyl(0.0026, 0.0070, 16), P(15.5, 30, 0.0035)), G(cyl(0.0026, 0.0070, 16), P(15.5, 36.5, 0.0035))], '#9aa0a8', M.alu);
    merged(ard, [G(cyl(0.0027, 0.0016, 16), P(15.5, 30, 0.0073)), G(cyl(0.0027, 0.0016, 16), P(15.5, 36.5, 0.0073))], '#111111', {r: 0.6});
    add(ard, rbox(0.0090, 0.0075, 0.0030, 0.0004), '#16171b', P(11.8, 40, 0.0038), M.blackPlastic);
    add(ard, rbox(0.0090, 0.0010, 0.0090, 0.0003), '#c9ccd2', P(11.8, 40, 0.0078), M.steel);
    add(ard, rbox(0.0062, 0.0035, 0.0062, 0.0007), '#8a8d93', P(6.7, 6.5, 0.0018), M.blackPlastic);
    add(ard, cyl(0.0019, 0.0010, 14), '#d11', P(6.7, 6.5, 0.0040), {r: 0.3, cc: 1});
    merged(ard, [0, 1, 2].map((i) => G(rbox(0.0016, 0.0008, 0.0010, 0.0002), P(52 + i * 3, 16.4, 0.0006))), '#ffcb3a', {r: 0.3, cc: 1});
    for (const [mx, my, n] of HDR) {
      merged(ard, [G(rbox(0.00254 * n + 0.0004, 0.0085, 0.0026, 0.0004), P(mx + 1.27 * (n - 1), my, 0.0044))], '#17181c', M.blackPlastic);
      merged(ard, Array.from({length: n}, (_, i) => G(new THREE.BoxGeometry(0.0016, 0.0003, 0.0016), P(mx + i * 2.54, my, 0.00885))), '#000000', {r: 0.9});
    }
    merged(ard, Array.from({length: 6}, (_, i) => G(new THREE.BoxGeometry(0.0006, 0.0060, 0.0006), P(61.8 + (i % 2) * 2.54, 33 + Math.floor(i / 2) * 2.54, 0.0028))), PALETTE.gold, M.gold);
  }

  /* ---- motor driver ------------------------------------------------------------------------------------------- */
  const drv = part('l298n', 'Motor driver (L298N)', new V3(0, 0, 0), [0.03, 0.14, 0.1], 0.18, 0.5);
  {
    const W = 43, H = 43, x0 = 0.085, y0 = 0.0653, z0 = 0.034;
    const top = pcb(W, H, '#a31e25', (g, K, w, h, T) => {
      T.hole(3, 3); T.hole(40, 3); T.hole(3, 40); T.hole(40, 40);
      T.text('L298N', 21.5, 8.5, 34, 'center'); T.text('DUAL H-BRIDGE', 21.5, 12.6, 11, 'center');
      T.text('OUT1 OUT2', 9.5, 21.5, 9, 'center', -Math.PI / 2); T.text('OUT3 OUT4', 34, 21.5, 9, 'center', Math.PI / 2);
      T.text('12V   GND   5V', 21.5, 36.2, 10, 'center'); T.text('ENA IN1 IN2 IN3 IN4 ENB', 21.5, 6.4, 8, 'center');
    }, {trace: 'rgba(255,200,160,0.10)'});
    const plain = mat('#a31e25', {r: 0.5, cc: 0.6, ccr: 0.15}), face = new THREE.MeshPhysicalMaterial({map: top, roughness: 0.5, clearcoat: 0.6, clearcoatRoughness: 0.15});
    add(drv, new THREE.BoxGeometry(W / 1000, 0.0016, H / 1000), '', [x0, y0, z0], {}, null, [plain, plain, face, plain, plain, plain]);
    const P = (mx, my, hh = 0) => [x0 + (mx - W / 2) / 1000, y0 + 0.0008 + hh, z0 + (my - H / 2) / 1000];
    const fins = [G(rbox(0.0280, 0.0030, 0.0172, 0.0008), P(21.5, 21.5, 0.0030))];
    for (let i = 0; i < 8; i++) fins.push(G(rbox(0.0270, 0.0160, 0.0011, 0.0003), P(21.5, 21.5 - 6.4 + i * 1.83, 0.0106)));
    merged(drv, fins, '#1d1f24', {...M.alu, r: 0.45});
    add(drv, rbox(0.0200, 0.0150, 0.0050, 0.0006), '#0f1013', P(21.5, 29.0, 0.0075), M.chip);
    merged(drv, Array.from({length: 15}, (_, i) => G(new THREE.BoxGeometry(0.0005, 0.0030, 0.0005), P(14.6 + i * 1.0, 32.2, 0.0015))), PALETTE.steel, M.steel);
    const term = (mx, my, vert) => {
      add(drv, rbox(vert ? 0.0100 : 0.0150, 0.0100, vert ? 0.0150 : 0.0100, 0.0008), '#1e63cf', P(mx, my, 0.0058), {r: 0.4, cc: 0.4});
      merged(drv, [0, 1].map((k) => G(cyl(0.0024, 0.0014, 14), P(mx + (vert ? 0 : (k ? 3.3 : -3.3)), my + (vert ? (k ? 3.3 : -3.3) : 0), 0.0112))), PALETTE.gold, M.brass);
    };
    term(4.8, 14, true); term(4.8, 29, true); term(38.2, 14, true); term(38.2, 29, true); term(21.5, 39.5, false);
    merged(drv, [G(cyl(0.0040, 0.0105, 20), P(9, 35, 0.0053)), G(cyl(0.0040, 0.0105, 20), P(33.5, 35, 0.0053))], '#b6bcc4', M.alu);
    merged(drv, [G(cyl(0.0041, 0.0010, 20), P(9, 35, 0.0108)), G(cyl(0.0041, 0.0010, 20), P(33.5, 35, 0.0108))], '#121316', {r: 0.6});
    merged(drv, Array.from({length: 8}, (_, i) => G(rbox(0.0050, 0.0022, 0.0026, 0.0004), P(14 + (i % 4) * 5, i < 4 ? 18 : 25, 0.0011))), '#14151a', M.chip);
    add(drv, rbox(0.0165, 0.0085, 0.0025, 0.0004), '#17181c', P(21.5, 3.3, 0.0043), M.blackPlastic);
    merged(drv, Array.from({length: 6}, (_, i) => G(new THREE.BoxGeometry(0.0006, 0.0070, 0.0006), P(14 + i * 2.54, 3.3, 0.0070))), PALETTE.gold, M.gold);
    merged(drv, [G(rbox(0.0050, 0.0050, 0.0026, 0.0004), P(14.2, 3.3, 0.0030)), G(rbox(0.0050, 0.0050, 0.0026, 0.0004), P(29.4, 3.3, 0.0030))], '#e8b400', M.blackPlastic);
  }

  /* ---- ballast ------------------------------------------------------------------------------------------------ */
  const ballast = part('ballast', 'Brass ballast weight', new V3(0, 0, 0), [-0.1, 0.1, 0.08], 0.18, 0.5);
  {
    const bx = -0.015, bz = 0.036, by = 0.0645;
    add(ballast, cyl(0.017, 0.0235, 56), PALETTE.gold, [bx, by + 0.01175, bz], {...M.brass, bump: knurl, bs: 1.2});
    add(ballast, new THREE.CylinderGeometry(0.0158, 0.017, 0.0016, 56), PALETTE.gold, [bx, by + 0.0243, bz], M.brass);
    add(ballast, new THREE.CylinderGeometry(0.0156, 0.0140, 0.0011, 56), PALETTE.gold, [bx, by + 0.0256, bz], M.brass);
    screws(ballast, [[bx, by + 0.0262, bz, 'y+']], 0.0030);
  }

  /* ---- the arm: servo, horn, pushrod, two-bar parallelogram, claw ------------------------------------------------ */
  const labelTex = tex(128, 64, (g, w, h) => { g.fillStyle = '#d7d9de'; g.fillRect(0, 0, w, h); g.fillStyle = '#1a1c22'; g.font = '700 26px sans-serif'; g.textAlign = 'center'; g.fillText('SG90', 64, 26); g.font = '11px sans-serif'; g.fillText('9g MICRO SERVO', 64, 48); });
  const servoBlue = mat('#1f4fc9', {r: 0.35, cc: 0.7, ccr: 0.12, bump: grain, bs: 0.3});
  const labM = () => new THREE.MeshPhysicalMaterial({map: labelTex, roughness: 0.5});
  const lift = part('liftServo', 'Arm lift servo (SG90)', new V3(0, 0, 0), [0.06, 0.04, 0.16], 0.28, 0.6);
  {
    const cx = R.servo[0], cy = R.servo[1], cz = -0.010;
    add(lift, new THREE.BoxGeometry(0.0227, 0.0227, 0.0125), '', [cx, cy, cz], {}, null, [servoBlue, servoBlue, servoBlue, servoBlue, servoBlue, labM()]);
    add(lift, rbox(0.0355, 0.0026, 0.0125, 0.0005), '#1f4fc9', [cx, cy + 0.0060, cz], {r: 0.35, cc: 0.7});
    add(lift, rbox(0.0125, 0.0040, 0.0125, 0.0008), '#f1f3f6', [cx, cy + 0.0132, cz], {r: 0.35, cc: 0.6});
    add(lift, new THREE.CylinderGeometry(0.0043, 0.0043, 0.0050, 24), PALETTE.white, [cx, cy, cz + 0.0090], {r: 0.35, rot: [Math.PI / 2, 0, 0]});
    merged(lift, [-0.0138, 0.0138].map((dx) => G(new THREE.TorusGeometry(0.0011, 0.0005, 8, 14), [cx + dx, cy + 0.0074, cz])), PALETTE.steel, M.steel);
    ['#5b3a1d', '#c62a2a', '#e69a1a'].forEach((c, i) => add(lift, new THREE.TubeGeometry(new THREE.CatmullRomCurve3([new V3(cx - 0.0113, cy - 0.004, cz + (i - 1) * 0.0030), new V3(cx - 0.020, cy - 0.006, cz + (i - 1) * 0.0034), new V3(cx - 0.034, cy - 0.001, cz + (i - 1) * 0.004)]), 12, 0.0006, 6), c, [0, 0, 0], M.pvc));
  }
  const horn = sub(lift, [R.servo[0], R.servo[1], 0]);
  add(lift, cyl(0.0050, 0.0030, 24), PALETTE.white, [0, 0, -0.0013], {r: 0.35, rot: [Math.PI / 2, 0, 0]}, horn);
  add(lift, bar(R.horn + 0.010, 0.0075, 0.0022, 4, 0.0009), PALETTE.white, [R.horn / 2, 0, -0.0013], {r: 0.35, cc: 0.4}, horn);
  add(lift, cyl(0.0016, 0.0050, 12), PALETTE.steel, [0, 0, -0.0013], {...M.steel, rot: [Math.PI / 2, 0, 0]}, horn);

  const rod = part('pushrod', 'Pushrod link', new V3(0, 0, 0), [0.08, 0.2, 0.08], 0.1, 0.45);
  add(rod, bar(R.rod + 0.010, 0.0075, 0.0030, 9, 0.0015), PALETTE.yellow, [0, 0, 0.0015], M.yellow);
  merged(rod, [G(cyl(0.0021, 0.0070, 14), [-R.rod / 2, 0, 0.0015], [Math.PI / 2, 0, 0]), G(cyl(0.0021, 0.0070, 14), [R.rod / 2, 0, 0.0015], [Math.PI / 2, 0, 0]), G(cyl(0.0035, 0.0006, 16), [-R.rod / 2, 0, 0.0052], [Math.PI / 2, 0, 0]), G(cyl(0.0035, 0.0006, 16), [R.rod / 2, 0, 0.0052], [Math.PI / 2, 0, 0])], PALETTE.steel, M.steel);

  const arm = part('arm', 'Arm (parallelogram)', new V3(0, 0, 0), [-0.03, 0.2, 0], 0.04, 0.44);
  const lowBars = sub(arm, [R.pivot[0], R.pivot[1], 0]);
  const upBars = sub(arm, [R.pivot[0], R.pivot[1] + 0.035, 0]);
  for (const z of [-0.018, 0.018]) {
    add(arm, bar(R.armLen + 0.012, 0.0125, 0.0042, 11, 0.0026), PALETTE.yellow, [R.armLen / 2, 0, z], M.yellow, lowBars);
    add(arm, bar(R.armLen + 0.012, 0.0105, 0.0042, 11, 0.0022), PALETTE.yellow, [R.armLen / 2, 0, z], M.yellow, upBars);
  }
  merged(arm, [G(cyl(0.0022, 0.0420, 14), [R.armAttach, 0, 0], [Math.PI / 2, 0, 0]), ...[0, R.armLen].map((x) => G(cyl(0.0021, 0.0460, 14), [x, 0, 0], [Math.PI / 2, 0, 0]))], PALETTE.steel, M.steel, lowBars);
  merged(arm, [0, R.armLen].map((x) => G(cyl(0.0021, 0.0460, 14), [x, 0, 0], [Math.PI / 2, 0, 0])), PALETTE.steel, M.steel, upBars);

  const grip = part('gripper', 'Gripper (3D-printed claw)', new V3(0, 0, 0), [0.1, 0.18, 0], 0.0, 0.36);
  {
    add(grip, rbox(0.008, 0.044, 0.054, 0.002), PALETTE.teal, [0, 0.0175, 0], M.teal);
    add(grip, rbox(0.032, 0.0320, 0.0480, 0.0035), PALETTE.teal, [0.0165, -0.003, 0], M.teal);
    add(grip, rbox(0.0050, 0.0300, 0.0380, 0.0014), '#13706a', [0.0330, -0.003, 0], M.teal);
    screws(grip, [[-0.0042, 0.0295, -0.0205, 'x-'], [-0.0042, 0.0295, 0.0205, 'x-'], [-0.0042, 0.0055, -0.0205, 'x-'], [-0.0042, 0.0055, 0.0205, 'x-'], [0.0165, 0.0130, 0.0242, 'z+'], [0.0165, 0.0130, -0.0242, 'z-']], 0.0020);
  }
  const jawL = sub(grip, [0.0360, -0.012, -0.0165]);
  const jawR = sub(grip, [0.0360, -0.012, 0.0165]);
  for (const [j, s] of [[jawL, -1], [jawR, 1]]) {
    add(grip, bar(0.070, 0.0245, 0.0034, 0, 0), PALETTE.teal, [0.035, 0, s * 0.0017], M.teal, j);
    add(grip, rbox(0.0140, 0.0235, 0.0020, 0.0008), '#101114', [0.0645, 0, s * -0.0003], M.rubber, j);
    merged(grip, [G(cyl(0.0042, 0.0050, 18), [0, 0, s * 0.0017], [Math.PI / 2, 0, 0]), G(cyl(0.0021, 0.0050, 12), [0.034, 0, s * 0.0017], [Math.PI / 2, 0, 0])], PALETTE.steel, M.steel, j);
  }
  const jaws = {jawL, jawR};
  const jaw = part('jawServo', 'Claw servo (SG90)', new V3(0, 0, 0), [0.05, 0.3, 0], 0.0, 0.36);
  {
    add(jaw, new THREE.BoxGeometry(0.0227, 0.0125, 0.0227), '', [0, 0, 0], {}, null, [servoBlue, servoBlue, labM(), servoBlue, servoBlue, servoBlue]);
    add(jaw, rbox(0.0355, 0.0026, 0.0227, 0.0005), '#1f4fc9', [0, -0.0010, 0], {r: 0.35, cc: 0.7});
    add(jaw, cyl(0.0057, 0.0050, 24), PALETTE.white, [0.0046, 0.0083, 0], {r: 0.35});
    add(jaw, bar(0.0170, 0.0075, 0.0022, 3, 0.0009), PALETTE.white, [0.0046, 0.0112, 0], {r: 0.35, rot: [Math.PI / 2, 0, 0]});
  }

  /* ---- finishing: name plate, wiring ---------------------------------------------------------------------------- */
  const plateP = part('nameplate', 'Name plate', new V3(0, 0, 0), [-0.15, 0, 0], 0.36, 0.7);
  {
    const cv = document.createElement('canvas'); cv.width = 512; cv.height = 256;
    const c = cv.getContext('2d');
    c.drawImage(woodTex.image, 0, 0, 512, 256);
    c.fillStyle = '#251a10'; c.font = '600 112px "Segoe Print","Bradley Hand","Comic Sans MS",cursive'; c.textAlign = 'center'; c.textBaseline = 'middle';
    c.save(); c.translate(256, 138); c.rotate(-0.025); c.fillText('Patrick', 0, 0); c.restore();
    const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
    const plain = new THREE.MeshPhysicalMaterial({color: PALETTE.mdf, roughness: 0.85, map: woodTex});
    const face = new THREE.MeshPhysicalMaterial({map: t, roughness: 0.8});
    const mesh = new THREE.Mesh(new RoundedBoxGeometry(0.004, 0.044, 0.088, 3, 0.0012), [face, face.clone(), plain, plain.clone(), plain.clone(), plain.clone()]);
    mesh.position.set(-0.071, 0.052, 0); mesh.castShadow = mesh.receiveShadow = true; mesh.userData.part = 'nameplate';
    mesh.material.forEach((m) => plateP.mats.push(m)); plateP.group.add(mesh); plateP.meshes.push(mesh); meshes.push(mesh);
    screws(plateP, [[-0.0690, 0.066, -0.037, 'x+'], [-0.0690, 0.066, 0.037, 'x+']], 0.0016);
  }

  const wiring = part('wiring', 'Wiring', new V3(0, 0, 0), [0, 0.1, 0.04], 0.1, 0.4);
  {
    const runs = [
      ['#d33', [[-0.05, 0.048, 0.02], [-0.04, 0.057, 0.03], [0.00, 0.070, 0.045], [0.07, 0.076, 0.044]]],
      ['#222', [[-0.05, 0.048, 0.014], [-0.03, 0.058, 0.04], [0.02, 0.072, 0.052], [0.065, 0.075, 0.050]]],
      ['#2a9d4a', [[0.07, 0.074, 0.02], [0.08, 0.068, 0.0], [0.092, 0.05, -0.006], [0.09, 0.044, -0.01]]],
      ['#e8a31a', [[0.03, 0.076, -0.012], [0.06, 0.084, 0.0], [0.09, 0.072, 0.014], [0.085, 0.076, 0.03]]],
      ['#3b82f6', [[0.0, 0.076, -0.05], [-0.01, 0.04, -0.062], [0.01, 0.046, -0.068], [0.002, 0.0325, -0.069]]],
      ['#8b5cf6', [[0.0, 0.076, -0.058], [-0.02, 0.05, -0.065], [-0.03, 0.04, 0.066], [-0.04, 0.034, 0.069]]],
      ['#dddddd', [[0.135, 0.050, -0.01], [0.12, 0.062, -0.02], [0.09, 0.072, -0.026], [0.06, 0.073, -0.03]]],
      ['#d33', [[0.135, 0.048, 0.01], [0.12, 0.066, 0.03], [0.1, 0.073, 0.034]]],
    ];
    const ends = [];
    for (const [col, pts] of runs) {
      const curve = new THREE.CatmullRomCurve3(pts.map((p) => new V3(...p)));
      add(wiring, new THREE.TubeGeometry(curve, 32, 0.00095, 8), col, [0, 0, 0], M.pvc);
      for (const k of [0, 1]) { const q = curve.getPoint(k); ends.push(G(rbox(0.0026, 0.0026, 0.0026, 0.0005), [q.x, q.y, q.z])); }
    }
    merged(wiring, ends, '#17181c', M.blackPlastic);
    merged(wiring, [[0.02, 0.0725, 0.0495], [0.04, 0.0735, 0.0452]].map(([x, y, z]) => G(new THREE.TorusGeometry(0.0026, 0.0004, 6, 16), [x, y, z], [0, Math.PI / 2, 0])), '#f1f1ee', {r: 0.5});
  }

  /* ---- the pose: everything from the servo angles and the wheel angles ---------------------------------------------- */
  const state = {theta: 1.0, tip: [0, 0]};
  function pose({phi, jaw: jv, wl, wr, bands, u}) {
    const sol = armSolve(phi);
    if (sol) {
      state.theta = sol.theta;
      horn.rotation.z = phi;
      const A = sol.A, H = sol.H;
      rod.base.set((A[0] + H[0]) / 2, (A[1] + H[1]) / 2, 0);
      rod.group.rotation.z = Math.atan2(A[1] - H[1], A[0] - H[0]);
      lowBars.rotation.z = sol.theta; upBars.rotation.z = sol.theta;
      const tx = R.pivot[0] + R.armLen * Math.cos(sol.theta), ty = R.pivot[1] + R.armLen * Math.sin(sol.theta);
      state.tip = [tx, ty];
      grip.base.set(tx, ty, 0);
      jaw.base.set(tx + 0.0165, ty + 0.0205, 0);
    }
    const open = jv * 28 * Math.PI / 180;
    jaws.jawL.rotation.y = open; jaws.jawR.rotation.y = -open;
    wheels.L.rotation.z = -wl; wheels.R.rotation.z = -wr;
    wheels.Lband.rotation.z = -wl; wheels.Rband.rotation.z = -wr;
    const bandsOn = !!bands, showBands = bandsOn || u > 0.02;
    for (const t of ['L', 'R']) { const p = wheels[t + 'bandPart']; p.group.visible = showBands; p.group.traverse((o) => { if (o.isMesh) o.visible = showBands; }); }
    root.userData.lift = bandsOn ? R.bandT : 0;
    const e = (k, a, b) => { const x = Math.min(1, Math.max(0, (k - a) / (b - a))); return x * x * (3 - 2 * x); };
    for (const p of parts) { const k = e(u, p.a, p.b); p.group.position.copy(p.base).addScaledVector(p.explode, k); }
    return state;
  }

  return {root, parts, byId, meshes, pose, state, jaws};
}
