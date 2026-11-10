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
  sump: ['Oil sump', 'The oil reservoir below the crank. A dry-sump layout keeps the oil supply steady under lateral acceleration.'],
};

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
    cover: mat('#e0485a', {roughness: 0.4, clearcoat: 1, clearcoatRoughness: 0.15, transparent: true, opacity: 0.5, depthWrite: false}),
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
    const cv = add(qh, new THREE.BoxGeometry(len - 0.3, 0.45, B * 1.2), M.cover, d.clone().multiplyScalar(3.95).toArray(), [0, 0, 0], H[bank]); cv.quaternion.copy(q);
    for (const c of cyl.filter((cc) => cc.f.bank === bank)) {
      const liner = add(qb, new THREE.CylinderGeometry(B / 2 * 1.04, B / 2 * 1.04, 2.5, lite ? 20 : 36, 1, true), M.liner, d.clone().multiplyScalar(1.95).add(new V3(c.x, 0, 0)).toArray()); liner.quaternion.copy(q);
      const ch = new THREE.Mesh(new THREE.SphereGeometry(B / 2 * 0.85, 16, 10), new THREE.MeshBasicMaterial({color: new THREE.Color('#ff8a3d'), transparent: true, opacity: 0, toneMapped: false, depthWrite: false}));
      ch.scale.y = 0.35; ch.position.copy(d).multiplyScalar(3.0).add(new V3(c.x, 0, 0)); ch.quaternion.copy(q); H[bank].add(ch); c.ch = ch;
      const plug = add(qh, new THREE.CylinderGeometry(0.05, 0.05, 0.4, 8), M.steel, d.clone().multiplyScalar(4.25).add(new V3(c.x, 0, 0)).toArray(), [0, 0, 0], H[bank]); plug.quaternion.copy(q);
    }
  }
  const dirs = {L: dirOf('L'), R: dirOf('R')};
  /** theta: crank angle in radians (the crank turns about +x). uP: how far the pistons and heads have lifted along their bores, 0..1. glow: combustion intensity per cylinder. */
  function pose(theta, uP = 0, glow = null) {
    C.rotation.x = theta; F.rotation.x = theta;
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
