// The V8 as geometry, built from the design numbers (bore, stroke, rod length, crank pin) and posed by exact slider-crank kinematics: crankshaft with
// flat-plane throws, eight pistons and connecting rods, the 90-degree block, heads and sump. One unit = 100 mm. Crank axis along x; the banks lie in the
// y-z plane at +/-45 degrees from vertical; the left and right piston of each throw share one crank pin and sit side by side along x.
import {THREE, V3, mat} from '../kit.js';
import {geom} from '../engine/physics.js';

export const ENGINE_INFO = {
  block: ['Engine block', 'The aluminium structure that holds everything: crankcase below, two banks of four cylinders at 90 degrees above. It carries the gas load as tension through the main bearing caps and the head studs, so it is shown translucent here.'],
  heads: ['Cylinder heads and cam covers', 'Four valves and a spark plug per cylinder sit in each head. The combustion chambers glow as their cylinders fire, in step with the heat release curve.'],
  pistons: ['Pistons', 'Each piston takes a gas force of over 100 kN at peak pressure and then, at 7 500 rpm, accelerates harder than a bullet leaves a rifle. Mass is the enemy: the inertia force grows with the square of speed.'],
  rods: ['Connecting rods', 'An I-section beam from piston pin to crank pin. It is compressed by gas pressure and stretched by inertia at TDC, so it is sized for fatigue in both. Its length against the crank radius sets the rod ratio, which sets the side thrust.'],
  crank: ['Crankshaft', 'Four throws, five main journals, and counterweights opposite each pin. The throws sit at 0 and 180 degrees (a flat-plane layout), so reciprocating forces largely cancel and the crank can be light, while the 90-degree banks give a firing every 90 degrees.'],
  flywheel: ['Flywheel', 'Stores energy between power strokes so the shaft speed stays smooth, and carries the clutch and starter ring.'],
  plenum: ['Carbon intake plenum', 'A carbon-fibre dome that sits in the valley between the banks and feeds all eight cylinders through its own short runner. Its volume is a compromise: large enough to even out the pulses from the intake valves, small enough that the engine still answers the throttle at once. The throttle body is on the front.'],
  turbos: ['Headers and twin turbochargers', 'Each bank has four short headers merging into one turbocharger. Exhaust gas spins the turbine, which spins the compressor on the same shaft and pushes air through the titanium charge pipe to the plenum. That is how a 5.0 litre engine reaches 2.4 bar absolute at the intake.'],
  accessories: ['Belt drive', 'The crank pulley drives the alternator and the idler with a single serpentine belt. It takes a few kilowatts from the engine, which the brake figures on this page already account for.'],
  frame: ['Tubular frame, brake and plinth', 'The black tubular frame is the structure the engine would hang from in the car. The drilled carbon-ceramic disc with its orange caliper, and the torsion-bar rocker with gold dampers, show the corner of the car it carries. Everything stands on a carbon plinth on gold posts.'],
  sump: ['Oil sump', 'The oil reservoir below the crank. A dry-sump layout keeps the oil supply steady under lateral acceleration.'],
};

let CT = null;
/** A 2x2 twill carbon-fibre weave drawn on a small canvas, repeated rx by ry. */
function carbonTex(rx, ry) {
  if (!CT) {
    const c = document.createElement('canvas'); c.width = c.height = 128; const g = c.getContext('2d'), n = 8, sz = 16;
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
      const v = (((i >> 1) + j) % 2) === 0, grd = v ? g.createLinearGradient(i * sz, j * sz, i * sz + sz, j * sz) : g.createLinearGradient(i * sz, j * sz, i * sz, j * sz + sz);
      grd.addColorStop(0, '#08090c'); grd.addColorStop(0.5, '#3d414c'); grd.addColorStop(1, '#0c0d11'); g.fillStyle = grd; g.fillRect(i * sz, j * sz, sz, sz);
    }
    CT = new THREE.CanvasTexture(c); CT.colorSpace = THREE.SRGBColorSpace; CT.wrapS = CT.wrapT = THREE.RepeatWrapping; CT.anisotropy = 4;
  }
  const t = CT.clone(); t.needsUpdate = true; t.repeat.set(rx, ry); return t;
}
/** A rounded-rectangle cam cover, w by h on the plan and d tall, with its long axis along x and its height along +y. */
function coverGeo(w, h, d) {
  const r = 0.22, s = new THREE.Shape(); s.moveTo(-w / 2 + r, -h / 2); s.lineTo(w / 2 - r, -h / 2); s.quadraticCurveTo(w / 2, -h / 2, w / 2, -h / 2 + r); s.lineTo(w / 2, h / 2 - r); s.quadraticCurveTo(w / 2, h / 2, w / 2 - r, h / 2); s.lineTo(-w / 2 + r, h / 2); s.quadraticCurveTo(-w / 2, h / 2, -w / 2, h / 2 - r); s.lineTo(-w / 2, -h / 2 + r); s.quadraticCurveTo(-w / 2, -h / 2, -w / 2 + r, -h / 2);
  const g = new THREE.ExtrudeGeometry(s, {depth: d, bevelEnabled: true, bevelSize: 0.04, bevelThickness: 0.04, bevelSegments: 2, curveSegments: 6}); g.translate(0, 0, -d / 2); g.rotateX(-Math.PI / 2); return g;
}

function hullShape(ptsYZ, depth) {
  const pts = ptsYZ.map(([y, z]) => [-z, y]).sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const cross = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]), lo = [], up = [];
  for (const p of pts) { while (lo.length >= 2 && cross(lo[lo.length - 2], lo[lo.length - 1], p) <= 0) lo.pop(); lo.push(p); }
  for (const p of [...pts].reverse()) { while (up.length >= 2 && cross(up[up.length - 2], up[up.length - 1], p) <= 0) up.pop(); up.push(p); }
  const h = [...lo.slice(0, -1), ...up.slice(0, -1)], s = new THREE.Shape(); h.forEach(([u, v], i) => (i ? s.lineTo(u, v) : s.moveTo(u, v))); s.closePath();
  const g = new THREE.ExtrudeGeometry(s, {depth, bevelEnabled: false, curveSegments: 4}); g.translate(0, 0, -depth / 2); g.rotateY(Math.PI / 2); return g;      // extruded along x
}

export const FIRE = (() => {            // [bank, throw, tdc angle mod 360, cycle offset]: firing every 90 degrees
  const alpha = [0, 180, 180, 0], out = [];
  for (const [bank, phi] of [['L', -45], ['R', 45]]) for (let k = 0; k < 4; k++) { const tdc = (((phi - alpha[k]) % 360) + 360) % 360; out.push({bank, k, tdc, alpha: alpha[k]}); }
  for (const e of out) { const same = out.filter((q) => q.tdc === e.tdc); e.c = same.indexOf(e) === 0 ? 0 : 360; e.E = e.tdc + e.c; }
  return out;
})();

export function buildEngine(p, {lite = false} = {}) {
  const g = geom(p), S = 10;
  const r = g.r * S, L = g.L * S, B = g.B * S, pinR = p.pin / 2 / 100, pitch = Math.max(1.25, B * 1.34), off = 0.22;
  const root = new THREE.Group(), parts = [], byId = {}, meshes = [];
  const M = {
    block: mat('#7d8aa8', {metalness: 0.7, roughness: 0.4, transparent: true, opacity: 0.2, depthWrite: false, side: THREE.DoubleSide}),
    head: mat('#3a4254', {metalness: 0.6, roughness: 0.4, clearcoat: 0.3, transparent: true, opacity: 0.3, depthWrite: false}),
    carbon: mat('#ffffff', {map: carbonTex(3, 3), roughness: 0.3, metalness: 0.25, clearcoat: 1, clearcoatRoughness: 0.08}),
    carbonBig: mat('#ffffff', {map: carbonTex(16, 8), roughness: 0.3, metalness: 0.25, clearcoat: 1, clearcoatRoughness: 0.08}),
    plinth: mat('#8c8f99', {map: carbonTex(28, 28), roughness: 0.55, metalness: 0.2, clearcoat: 0.3, clearcoatRoughness: 0.4}),
    carbonDark: mat('#2a2c33', {roughness: 0.35, metalness: 0.3, clearcoat: 0.8}),
    gold: mat('#d9a63a', {metalness: 1, roughness: 0.28, envMapIntensity: 1.4}), silver: mat('#d5d9e0', {metalness: 1, roughness: 0.22, envMapIntensity: 1.4}),
    orange: mat('#ff6414', {roughness: 0.32, metalness: 0.2, clearcoat: 1, clearcoatRoughness: 0.12}), frame: mat('#0e1014', {metalness: 0.5, roughness: 0.42}),
    ti: mat('#80838a', {metalness: 1, roughness: 0.42}), exh: mat('#2b2a30', {metalness: 0.9, roughness: 0.5}), rubber: mat('#0b0b0d', {roughness: 0.8}), disc: mat('#9ea4ae', {metalness: 1, roughness: 0.3, envMapIntensity: 1.2}),
    steel: mat('#cdd3dc', {metalness: 1, roughness: 0.25, envMapIntensity: 1.3}),
    liner: mat('#9aa3b2', {metalness: 1, roughness: 0.35, side: THREE.DoubleSide}),
    alloy: mat('#b8bec8', {metalness: 0.95, roughness: 0.3, envMapIntensity: 1.2}),
    rod: mat('#9aa1ad', {metalness: 1, roughness: 0.32}),
    crank: mat('#808792', {metalness: 1, roughness: 0.28, envMapIntensity: 1.2}),
    dark: mat('#161a24', {metalness: 0.4, roughness: 0.55}),
    pan: mat('#222836', {metalness: 0.6, roughness: 0.5}),
    ring: mat('#2b2f38', {metalness: 1, roughness: 0.4}),
  };
  const part = (id, out, a = 0, b = 1) => { const group = new THREE.Group(); root.add(group); const q = {id, name: ENGINE_INFO[id][0], desc: ENGINE_INFO[id][1], group, out, a, b, meshes: []}; parts.push(q); byId[id] = q; return q; };
  const add = (q, geo, m, pos = [0, 0, 0], rot = [0, 0, 0], parent = null) => { const mesh = new THREE.Mesh(geo, m); mesh.position.set(...pos); mesh.rotation.set(...rot); mesh.userData.part = q.id; (parent || q.group).add(mesh); q.meshes.push(mesh); meshes.push(mesh); return mesh; };
  const cylX = (rad, len, seg = 32) => new THREE.CylinderGeometry(rad, rad, len, lite ? 14 : seg).rotateZ(Math.PI / 2);          // axis along x
  const xs = [-1.5, -0.5, 0.5, 1.5].map((k) => k * pitch);
  const dirOf = (bank) => (bank === 'L' ? new V3(0, Math.SQRT1_2, -Math.SQRT1_2) : new V3(0, Math.SQRT1_2, Math.SQRT1_2));
  const bankAng = (bank) => (bank === 'L' ? -Math.PI / 4 : Math.PI / 4);

  /* ---- crankshaft ---- */
  const qc = part('crank', [0, -2.8, 0], 0.15, 0.85), C = new THREE.Group(); qc.group.add(C); qc.C = C;
  for (let i = 0; i < 5; i++) add(qc, cylX(0.36, 0.5), M.crank, [(i - 2) * pitch, 0, 0], [0, 0, 0], C);
  const webs = [];
  for (let k = 0; k < 4; k++) {
    const al = (FIRE.find((f) => f.k === k).alpha) * Math.PI / 180, pin = [Math.cos(al), Math.sin(al)];
    add(qc, cylX(pinR, 0.92, 28), M.crank, [xs[k], r * pin[0], r * pin[1]], [0, 0, 0], C);
    for (const sx of [-0.43, 0.43]) {
      const pts = []; for (let a = 0; a < 24; a++) { const t = a / 24 * Math.PI * 2; pts.push([r * pin[0] + 0.36 * Math.cos(t), r * pin[1] + 0.36 * Math.sin(t)]); }
      for (let a = 0; a <= 14; a++) { const t = al + Math.PI + (a / 14 - 0.5) * 2.3; pts.push([0.74 * Math.cos(t), 0.74 * Math.sin(t)]); }
      add(qc, hullShape(pts, 0.15), M.crank, [xs[k] + sx, 0, 0], [0, 0, 0], C);
    }
  }
  const qf = part('flywheel', [3.2, 0, 0], 0.2, 0.9), F = new THREE.Group(); qf.group.add(F); qf.C = F;
  add(qf, cylX(1.7, 0.34, 56), M.steel, [2.9 * pitch / 1.25 + 0.4, 0, 0], [0, 0, 0], F); add(qf, cylX(0.5, 0.5, 32), M.crank, [2.9 * pitch / 1.25 + 0.4, 0, 0], [0, 0, 0], F);
  for (let i = 0; i < (lite ? 24 : 48); i++) { const t = i / (lite ? 24 : 48) * Math.PI * 2; add(qf, new THREE.BoxGeometry(0.34, 0.12, 0.1), M.dark, [2.9 * pitch / 1.25 + 0.4, 1.72 * Math.cos(t), 1.72 * Math.sin(t)], [t, 0, 0], F); }
  /* ---- pistons and rods ---- */
  const qpL = part('pistons', [0, 0, 0], 0.0, 0.8);
  const cyl = FIRE.map((f) => {
    const x = xs[f.k] + (f.bank === 'L' ? -off : off), pg = new THREE.Group(); qpL.group.add(pg);
    const body = new THREE.Mesh(new THREE.CylinderGeometry(B / 2 * 0.98, B / 2 * 0.98, 0.78, lite ? 20 : 36), M.alloy); body.userData.part = 'pistons'; pg.add(body); qpL.meshes.push(body); meshes.push(body);
    const crown = new THREE.Mesh(new THREE.CylinderGeometry(B / 2 * 0.9, B / 2 * 0.98, 0.05, lite ? 20 : 36), M.dark); crown.position.y = 0.4; crown.userData.part = 'pistons'; pg.add(crown); qpL.meshes.push(crown); meshes.push(crown);
    for (const y of [0.3, 0.23, 0.16]) { const ring = new THREE.Mesh(new THREE.TorusGeometry(B / 2 * 0.985, 0.012, 6, lite ? 20 : 40).rotateX(Math.PI / 2), M.ring); ring.position.y = y; ring.userData.part = 'pistons'; pg.add(ring); qpL.meshes.push(ring); meshes.push(ring); }
    const pin = new THREE.Mesh(cylX(0.085, B * 0.8, 14), M.steel); pin.position.y = -0.06; pin.userData.part = 'pistons'; pg.add(pin); qpL.meshes.push(pin); meshes.push(pin);
    return {f, x, pg, d: dirOf(f.bank), ang: bankAng(f.bank)};
  });
  const qr = part('rods', [0, -1.6, 0], 0.05, 0.8);
  for (const c of cyl) {
    const rg = new THREE.Group(); qr.group.add(rg); c.rg = rg;
    const mk = (geo, m, pos, rot = [0, 0, 0]) => { const mesh = new THREE.Mesh(geo, m); mesh.position.set(...pos); mesh.rotation.set(...rot); mesh.userData.part = 'rods'; rg.add(mesh); qr.meshes.push(mesh); meshes.push(mesh); };
    mk(new THREE.BoxGeometry(0.28, L - 0.7, 0.13), M.rod, [0, 0, 0]);
    mk(new THREE.BoxGeometry(0.18, L - 0.7, 0.24), M.rod, [0, 0, 0]);
    mk(new THREE.CylinderGeometry(pinR + 0.1, pinR + 0.1, 0.3, lite ? 18 : 32).rotateZ(Math.PI / 2), M.rod, [0, -L / 2, 0]);
    mk(new THREE.CylinderGeometry(0.17, 0.17, 0.3, 16).rotateZ(Math.PI / 2), M.rod, [0, L / 2, 0]);
  }
  /* ---- block, liners, heads, sump ---- */
  const qb = part('block', [0, 0, 0], 0.4, 1), qh = part('heads', [0, 0, 0], 0.0, 0.7), qs = part('sump', [0, -4.4, 0], 0.1, 0.8);
  const len = 4 * pitch + 1.2, H = {L: new THREE.Group(), R: new THREE.Group()};
  qh.group.add(H.L, H.R); qh.H = H;
  add(qb, new THREE.BoxGeometry(len, 1.7, 2.2), M.block, [0, -0.2, 0]);
  add(qs, new THREE.BoxGeometry(len - 0.5, 1.2, 2.0), M.pan, [0, -1.35, 0]); add(qs, new THREE.BoxGeometry(len - 0.2, 0.08, 2.3), M.steel, [0, -0.74, 0]);
  for (const bank of ['L', 'R']) {
    const d = dirOf(bank), q = new THREE.Quaternion().setFromUnitVectors(new V3(0, 1, 0), d);
    const bb = add(qb, new THREE.BoxGeometry(len, 2.4, B * 1.6), M.block, d.clone().multiplyScalar(1.9).toArray()); bb.quaternion.copy(q);
    const hd = add(qh, new THREE.BoxGeometry(len, 0.75, B * 1.7), M.head, d.clone().multiplyScalar(3.35).toArray(), [0, 0, 0], H[bank]); hd.quaternion.copy(q);
    const cv = add(qh, coverGeo(len - 0.3, B * 1.2, 0.45), M.carbon, d.clone().multiplyScalar(3.95).toArray(), [0, 0, 0], H[bank]); cv.quaternion.copy(q);
    for (const c of cyl.filter((cc) => cc.f.bank === bank)) {
      const liner = add(qb, new THREE.CylinderGeometry(B / 2 * 1.04, B / 2 * 1.04, 2.5, lite ? 20 : 36, 1, true), M.liner, d.clone().multiplyScalar(1.95).add(new V3(c.x, 0, 0)).toArray()); liner.quaternion.copy(q);
      const ch = new THREE.Mesh(new THREE.SphereGeometry(B / 2 * 0.85, 16, 10), new THREE.MeshBasicMaterial({color: new THREE.Color('#ff8a3d'), transparent: true, opacity: 0, toneMapped: false, depthWrite: false}));
      ch.scale.y = 0.35; ch.position.copy(d).multiplyScalar(3.0).add(new V3(c.x, 0, 0)); ch.quaternion.copy(q); H[bank].add(ch); c.ch = ch;
      const plug = add(qh, new THREE.CylinderGeometry(0.05, 0.05, 0.4, 8), M.steel, d.clone().multiplyScalar(4.25).add(new V3(c.x, 0, 0)).toArray(), [0, 0, 0], H[bank]); plug.quaternion.copy(q);
    }
  }
  /* ---- realism pass, after the museum-quality model of the One:1 drivetrain: carbon plenum and cam covers with gold fasteners, headers into twin
          turbochargers with titanium charge pipes, a belt drive, the black tubular frame with a drilled brake disc and orange caliper, on a carbon plinth ---- */
  const W3 = (x, y, z) => new V3(x, y, z);
  const tubeBetween = (q, a, b, rad, m, seg = 10, parent = null) => { const A = W3(...a), Bv = W3(...b), dir = Bv.clone().sub(A), len = dir.length(); const mesh = add(q, new THREE.CylinderGeometry(rad, rad, len, lite ? 6 : seg), m, A.clone().add(Bv).multiplyScalar(0.5).toArray(), [0, 0, 0], parent); mesh.quaternion.setFromUnitVectors(new V3(0, 1, 0), dir.normalize()); return mesh; };
  const curved = (q, pts, rad, m, parent = null, closed = false) => add(q, new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts.map((p) => W3(...p)), closed), lite ? 18 : 44, rad, lite ? 6 : 10, closed), m, [0, 0, 0], [0, 0, 0], parent);
  const bolt = (q, pos, qn, parent, rad = 0.045) => { const b = add(q, new THREE.CylinderGeometry(rad, rad, 0.05, 8), M.gold, pos, [0, 0, 0], parent); if (qn) b.quaternion.copy(qn); return b; };
  const qpl = part('plenum', [0, 4.2, 0], 0.1, 0.8), qt = part('turbos', [-6.5, 0, 0], 0.1, 0.9), qa = part('accessories', [-2.6, 1.2, 0], 0.15, 0.85), qfr = part('frame', [0, -7.5, 0], 0.2, 1);
  // plenum: a carbon dome between the banks, runners down to each intake port, a throttle body on the front
  const plen = add(qpl, new THREE.SphereGeometry(1, lite ? 18 : 40, lite ? 12 : 24), M.carbonBig, [0, 3.55, 0]); plen.scale.set(2.7, 0.85, 1.5);
  add(qpl, new THREE.CylinderGeometry(0.5, 0.5, 0.55, 28).rotateZ(Math.PI / 2), M.silver, [-3.1, 3.55, 0]); add(qpl, new THREE.CylinderGeometry(0.4, 0.4, 0.62, 24).rotateZ(Math.PI / 2), M.dark, [-3.1, 3.55, 0]);
  curved(qpl, [[-3.35, 3.55, 0], [-3.9, 3.9, 0], [-4.2, 4.6, 0.2]], 0.34, M.carbonBig);
  for (const c of cyl) { const sg = c.f.bank === 'L' ? -1 : 1, xx = c.x; curved(qpl, [[xx, 3.45, sg * 0.85], [xx, 3.5, sg * 1.35], [xx, 3.15, sg * 1.8], [xx, 2.95, sg * 1.95]], 0.19, M.carbon); }
  for (let k = 0; k < 4; k++) { const xx = xs[k]; for (const sg of [-1, 1]) add(qpl, new THREE.TorusGeometry(0.2, 0.025, 6, 16), M.dark, [xx, 3.4, sg * 1.3], [Math.PI / 2, 0, 0]); }
  // cam-cover fasteners and coil packs (they belong to the heads so they lift with them)
  for (const bank of ['L', 'R']) {
    const d = dirOf(bank), q = new THREE.Quaternion().setFromUnitVectors(new V3(0, 1, 0), d), t = new V3(0, d.z, -d.y).normalize();   // across the cover
    for (let i = 0; i < 7; i++) for (const sd of [-1, 1]) { const pos = d.clone().multiplyScalar(4.2).add(t.clone().multiplyScalar(sd * 0.5)).add(new V3((i - 3) * (len - 0.9) / 6, 0, 0)); bolt(qh, pos.toArray(), q, H[bank]); }
    for (const c of cyl.filter((cc) => cc.f.bank === bank)) { const pos = d.clone().multiplyScalar(4.38).add(new V3(c.x, 0, 0)); const cb = add(qh, new THREE.BoxGeometry(0.3, 0.42, 0.3), M.carbonDark, pos.toArray(), [0, 0, 0], H[bank]); cb.quaternion.copy(q); bolt(qh, d.clone().multiplyScalar(4.62).add(new V3(c.x, 0, 0)).toArray(), q, H[bank], 0.07); }
  }
  // headers, turbochargers, charge pipes, downpipes
  const TURB = {};
  for (const bank of ['L', 'R']) {
    const d = dirOf(bank), n = new V3(0, -d.y, d.z), hc = d.clone().multiplyScalar(3.35), sg = bank === 'L' ? -1 : 1;
    const col = hc.clone().add(n.clone().multiplyScalar(1.7)).add(new V3(0, -0.5, 0)); col.x = -2.4;
    for (const c of cyl.filter((cc) => cc.f.bank === bank)) { const P0 = hc.clone().add(n.clone().multiplyScalar(0.78)).add(new V3(c.x, 0, 0)); curved(qt, [P0.toArray(), P0.clone().add(n.clone().multiplyScalar(0.5)).toArray(), [c.x + (col.x - c.x) * 0.45, P0.y + n.y * 1.2 - 0.25, P0.z + n.z * 1.3], [col.x, col.y, col.z]], 0.12, M.exh); }
    const T = [-3.6, col.y - 0.5, col.z + sg * 0.6]; TURB[bank] = T;
    tubeBetween(qt, col.toArray(), [T[0] + 0.45, T[1], T[2]], 0.2, M.exh);
    add(qt, new THREE.CylinderGeometry(0.42, 0.42, 0.7, lite ? 14 : 28).rotateZ(Math.PI / 2), M.exh, [T[0] + 0.15, T[1], T[2]]);
    add(qt, new THREE.CylinderGeometry(0.5, 0.18, 0.55, lite ? 14 : 28).rotateZ(Math.PI / 2), M.silver, [T[0] - 0.55, T[1], T[2]]);
    add(qt, new THREE.TorusGeometry(0.52, 0.2, 10, lite ? 20 : 40, Math.PI * 1.6).rotateY(Math.PI / 2), M.silver, [T[0] - 0.2, T[1], T[2]], [0, 0, sg * 0.4]);
    curved(qt, [[T[0] - 0.2, T[1] + 0.55, T[2]], [T[0] - 0.15, T[1] + 1.3, T[2] * 0.98], [-2.7, 2.6, T[2] * 0.55], [-2.1, 3.35, sg * 1.3]], 0.2, M.ti);
    for (const f of [0.2, 0.92]) add(qt, new THREE.TorusGeometry(0.235, 0.035, 6, 16), M.dark, [-2.1 + (T[0] - 2.1) * 0 + (f > 0.5 ? 0 : 0), 3.35, sg * 1.3], [Math.PI / 2, 0, 0]);
    curved(qt, [[T[0] + 0.55, T[1], T[2]], [T[0] + 1.3, T[1] - 0.5, T[2]], [T[0] + 3.0, T[1] - 1.2, T[2] * 0.92], [4.6, T[1] - 1.5, T[2] * 0.82]], 0.22, M.exh);
  }
  // belt drive at the front: crank pulley, alternator and idler, with a rubber belt around their hull
  const Pu = new THREE.Group(); qa.group.add(Pu); qa.C = Pu;
  add(qc, cylX(0.2, 1.2, 14), M.crank, [-3.4, 0, 0], [0, 0, 0], C);
  add(qa, cylX(0.58, 0.3, 32), M.dark, [-3.7, 0, 0], [0, 0, 0], Pu); add(qa, cylX(0.2, 0.34, 16), M.gold, [-3.7, 0, 0], [0, 0, 0], Pu);
  const circ = [[0, 0, 0.58], [1.55, 1.55, 0.36], [1.5, -1.6, 0.3], [-1.2, 1.9, 0.28]], hullPts = [];
  for (const [cy, cz, rr] of circ) for (let a = 0; a < 24; a++) { const t = a / 24 * Math.PI * 2; hullPts.push([cy + (rr + 0.03) * Math.cos(t), cz + (rr + 0.03) * Math.sin(t)]); }
  const hp = hullPts.sort((a, b) => a[0] - b[0] || a[1] - b[1]), crs = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]), lo = [], up = [];
  for (const p of hp) { while (lo.length >= 2 && crs(lo[lo.length - 2], lo[lo.length - 1], p) <= 0) lo.pop(); lo.push(p); } for (const p of [...hp].reverse()) { while (up.length >= 2 && crs(up[up.length - 2], up[up.length - 1], p) <= 0) up.pop(); up.push(p); }
  const hull = [...lo.slice(0, -1), ...up.slice(0, -1)]; const belt = curved(qa, hull.map(([y, z]) => [-3.7, y, z]), 0.05, M.rubber, null, true); belt.scale.x = 1;
  add(qa, cylX(0.36, 0.7, 24), M.dark, [-3.7, 1.55, 1.55]); add(qa, cylX(0.3, 0.12, 16), M.silver, [-3.38, 1.55, 1.55]); add(qa, cylX(0.3, 0.3, 20), M.silver, [-3.7, 1.5, -1.6]); add(qa, cylX(0.28, 0.3, 20), M.silver, [-3.7, -1.2, 1.9]);
  // the tubular frame, a drilled carbon-ceramic disc with an orange caliper, a torsion-bar rocker with gold dampers, and the carbon plinth on gold posts
  const FZ = [5.2, 4.4], FY = [-2.3, 3.7], XF = -4.9, XR = 5.0;
  const ring = (x) => [[x, FY[0], -FZ[0]], [x, FY[0], FZ[0]], [x, FY[1], FZ[1]], [x, FY[1], -FZ[1]]];
  const fr = [ring(XF), ring(XR)];
  for (const R of fr) for (let i = 0; i < 4; i++) { tubeBetween(qfr, R[i], R[(i + 1) % 4], 0.06, M.frame); add(qfr, new THREE.SphereGeometry(0.1, 10, 8), M.frame, R[i]); }
  for (let i = 0; i < 4; i++) tubeBetween(qfr, fr[0][i], fr[1][i], 0.06, M.frame);
  tubeBetween(qfr, fr[0][0], fr[0][2], 0.06, M.frame); tubeBetween(qfr, fr[0][1], fr[0][3], 0.06, M.frame); tubeBetween(qfr, fr[1][0], fr[1][2], 0.06, M.frame); tubeBetween(qfr, fr[1][1], fr[1][3], 0.06, M.frame);
  tubeBetween(qfr, fr[0][2], fr[1][3], 0.045, M.frame); tubeBetween(qfr, fr[0][3], fr[1][2], 0.045, M.frame); tubeBetween(qfr, [XF, 3.7, -4.4], [XF + 2.2, 3.7, 0], 0.05, M.frame); tubeBetween(qfr, [XF, 3.7, 4.4], [XF + 2.2, 3.7, 0], 0.05, M.frame);
  tubeBetween(qfr, [XF, 3.95, -3.2], [XF, 3.95, 3.2], 0.1, M.silver);                                   // the torsion-bar / rocker tube across the top
  for (const sg of [-1, 1]) { tubeBetween(qfr, [XF, 3.95, sg * 2.0], [XF + 1.3, 2.7, sg * 2.0], 0.13, M.gold); curved(qfr, Array.from({length: 41}, (_, i) => { const t = i / 40, a = t * Math.PI * 2 * 7; const base = W3(XF + 1.3 * t * 0.9, 3.95 - 1.25 * t * 0.9, sg * 2.0); return [base.x, base.y + 0.2 * Math.cos(a), base.z + 0.2 * Math.sin(a)]; }), 0.028, M.orange); }
  const DX = XF - 0.4, DY = -0.4, DZ = -FZ[0] - 0.9;
  add(qfr, new THREE.CylinderGeometry(1.45, 1.45, 0.14, lite ? 28 : 64).rotateX(Math.PI / 2), M.disc, [DX, DY, DZ]); add(qfr, new THREE.CylinderGeometry(0.7, 0.7, 0.3, lite ? 20 : 40).rotateX(Math.PI / 2), M.silver, [DX, DY, DZ - 0.1]); add(qfr, new THREE.CylinderGeometry(0.28, 0.28, 0.6, 20).rotateX(Math.PI / 2), M.dark, [DX, DY, DZ - 0.2]);
  for (let i = 0; i < (lite ? 12 : 22); i++) { const t = i / (lite ? 12 : 22) * Math.PI * 2; add(qfr, new THREE.CylinderGeometry(0.1, 0.1, 0.32, 8).rotateX(Math.PI / 2), M.dark, [DX + 0.55 * Math.cos(t), DY + 0.55 * Math.sin(t), DZ - 0.1]); }
  for (let ring2 = 0; ring2 < 3; ring2++) for (let i = 0; i < (lite ? 16 : 30); i++) { const t = i / (lite ? 16 : 30) * Math.PI * 2 + ring2 * 0.1, rr = 0.98 + ring2 * 0.2; add(qfr, new THREE.CylinderGeometry(0.035, 0.035, 0.16, 6).rotateX(Math.PI / 2), M.dark, [DX + rr * Math.cos(t), DY + rr * Math.sin(t), DZ]); }
  add(qfr, new THREE.BoxGeometry(1.25, 0.75, 0.55), M.orange, [DX + 0.3, DY + 1.0, DZ], [0, 0, -0.35]);
  tubeBetween(qfr, [DX, DY, DZ - 0.2], [XF, 0.4, -FZ[0] + 0.2], 0.07, M.frame); tubeBetween(qfr, [DX, DY, DZ - 0.2], [XF, -1.6, -FZ[0] + 0.1], 0.07, M.frame); tubeBetween(qfr, [DX, DY, DZ - 0.2], [XF + 0.3, 2.4, -FZ[1] - 0.05], 0.07, M.frame);
  add(qfr, new THREE.BoxGeometry(13, 0.16, 13), M.carbonBig, [0.05, -4.3, 0]);
  for (const [px, pz] of [[XF, FZ[0]], [XF, -FZ[0]], [XR, FZ[0]], [XR, -FZ[0]]]) { add(qfr, new THREE.CylinderGeometry(0.17, 0.17, 2.0, 16), M.gold, [px, -3.3, pz]); add(qfr, new THREE.CylinderGeometry(0.26, 0.26, 0.06, 16), M.gold, [px, -2.3, pz]); }
  const dirs = {L: dirOf('L'), R: dirOf('R')};
  /** theta: crank angle in radians (the crank turns about +x). uP: how far the pistons and heads have lifted along their bores, 0..1. glow: combustion intensity per cylinder. */
  function pose(theta, uP = 0, glow = null) {
    C.rotation.x = theta; F.rotation.x = theta; Pu.rotation.x = theta;
    for (const c of cyl) {
      const al = c.f.alpha * Math.PI / 180, py = r * Math.cos(theta + al), pz = r * Math.sin(theta + al), dy = c.d.y, dz = c.d.z;
      const a = py * dy + pz * dz, perp = -py * dz + pz * dy, D = a + Math.sqrt(L * L - perp * perp), qy = dy * D, qz = dz * D;
      c.pg.position.set(c.x, qy + dy * (0.12 + 2.6 * uP), qz + dz * (0.12 + 2.6 * uP)); c.pg.rotation.set(c.ang, 0, 0);
      c.rg.position.set(c.x, (py + qy) / 2, (pz + qz) / 2); c.rg.rotation.set(Math.atan2(qz - pz, qy - py), 0, 0);
      if (glow) c.ch.material.opacity = Math.min(1, glow[FIRE.indexOf(c.f)] || 0);
    }
    H.L.position.copy(dirs.L).multiplyScalar(3.6 * uP); H.R.position.copy(dirs.R).multiplyScalar(3.6 * uP);
  }
  const dispose = () => root.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
  return {root, parts, byId, meshes, pose, dispose, dirs, cyl, geo: {r, L, B, pitch}};
}
