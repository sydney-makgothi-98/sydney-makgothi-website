// "Falcon 1 - Missile": the assembly of the exploded CAD drawing, rebuilt in code so it can be shown whole and then taken apart into the drawing's layout.
// Axis along x, nose to the left. One unit = 1 m of the scaled model. Part numbers are the drawing's bill-of-materials numbers.
import {THREE, V3, mat, exploder} from '../kit.js';

export const MISSILE_BOM = {
  1: ['Section 2 frame', 'The second lattice section of the airframe: rings joined by stringers that carry the skin loads back to the motor mount.'],
  2: ['Warhead core', 'The explosive charge, set inside the lattice so the frame can fragment around it.'],
  3: ['Section 1', 'This section holds the warhead. The radius of explosion was analysed using Green’s theorem.'],
  4: ['Nose cone', 'This section houses the flight computer. An ogive shape keeps wave drag low.'],
  5: ['Missile fin', 'Provides aerodynamic stability and flight control. Four fins, 90° apart.'],
  6: ['Skin – Section 1', 'Transfers aerodynamic loads from the stiffening elements through shear flow.'],
  7: ['End section', 'Houses the rocket motor and carries the fins.'],
  8: ['Guidance electronics 1', 'Internal sensors track changes in acceleration, tilt and direction.'],
  9: ['Guidance electronics 2', 'Radar, infrared or laser seekers scan the environment ahead.'],
  10: ['Skin panel, Section 2', 'Transfers aerodynamic loads from the stiffening elements through shear flow.'],
  11: ['Skin panel pieces, Section 2', 'Three curved panels close the second half of the skin around the lattice.'],
  12: ['Rocket motor (scaled)', 'The main system that provides propulsive power, with an estimated thrust of 25 tonnes.'],
};

export function buildMissile({lite = false} = {}) {
  const R = 0.5, root = new THREE.Group(), parts = [], meshes = [];
  const M = {
    skin: mat('#dfe3ec', {metalness: 0.5, roughness: 0.3, clearcoat: 0.6, envMapIntensity: 1.2, side: THREE.DoubleSide}),
    nose: mat('#e9ecf3', {metalness: 0.4, roughness: 0.25, clearcoat: 1, side: THREE.DoubleSide}),
    frame: mat('#6b7388', {metalness: 0.9, roughness: 0.38}),
    steel: mat('#cfd5dd', {metalness: 1, roughness: 0.28, envMapIntensity: 1.3}),
    fin: mat('#a78bfa', {metalness: 0.7, roughness: 0.3, clearcoat: 0.5}),
    pcb: mat('#0f6b45', {roughness: 0.5, metalness: 0.2}),
    chip: mat('#1a1d26', {roughness: 0.4, metalness: 0.5}),
    gold: mat('#d9a93a', {metalness: 1, roughness: 0.3}),
    core: mat('#f97316', {roughness: 0.5, emissive: new THREE.Color('#7c2d00'), emissiveIntensity: 0.5}),
    bell: mat('#b87333', {metalness: 1, roughness: 0.35, side: THREE.DoubleSide, envMapIntensity: 1.3}),
    dark: mat('#161a24', {metalness: 0.5, roughness: 0.5}),
    glass: mat('#e879f9', {roughness: 0.2, metalness: 0.2, emissive: new THREE.Color('#e879f9'), emissiveIntensity: 0.5}),
  };
  const seg = lite ? 20 : 40;
  const part = (id, num, out, a = 0, b = 1) => { const group = new THREE.Group(); root.add(group); const [name, desc] = MISSILE_BOM[num]; const p = {id, num, name, desc, group, out, a, b, meshes: []}; parts.push(p); return p; };
  const add = (p, geo, m, pos = [0, 0, 0], rot = [0, 0, 0]) => { const mesh = new THREE.Mesh(geo, m); mesh.position.set(...pos); mesh.rotation.set(...rot); mesh.userData.part = p.id; p.group.add(mesh); p.meshes.push(mesh); meshes.push(mesh); return mesh; };
  const cylX = (r, len, s = seg, open = false, t0 = 0, tl = Math.PI * 2) => new THREE.CylinderGeometry(r, r, len, s, 1, open, t0, tl).rotateZ(Math.PI / 2);
  const latheX = (pts, s = seg) => new THREE.LatheGeometry(pts.map(([x, r]) => new THREE.Vector2(r, x)), s).rotateZ(-Math.PI / 2);
  const ringX = (r, tube, s = 40) => new THREE.TorusGeometry(r, tube, 6, lite ? 20 : s).rotateY(Math.PI / 2);
  const lattice = (p, x0, x1, nr, ns) => {
    for (let i = 0; i < nr; i++) add(p, ringX(R * 0.97, 0.035), M.frame, [x0 + (x1 - x0) * i / (nr - 1), 0, 0]);
    for (let j = 0; j < ns; j++) { const t = (j / ns) * Math.PI * 2; add(p, new THREE.BoxGeometry(x1 - x0, 0.03, 0.05), M.frame, [(x0 + x1) / 2, Math.cos(t) * R * 0.97, Math.sin(t) * R * 0.97], [t, 0, 0]); }
    for (let i = 0; i < nr - 1; i++) for (let j = 0; j < ns; j += 2) { const t = ((j + 0.5) / ns) * Math.PI * 2, xm = x0 + (x1 - x0) * (i + 0.5) / (nr - 1); add(p, new THREE.BoxGeometry((x1 - x0) / (nr - 1) * 0.95, 0.018, 0.018), M.frame, [xm, Math.cos(t) * R * 0.97, Math.sin(t) * R * 0.97], [t, 0, 0.7]); }
  };
  /* nose cone: a tangent ogive */
  {
    const Ln = 1.7, rho = (R * R + Ln * Ln) / (2 * R), pts = []; for (let i = 0; i <= 24; i++) { const x = Ln * i / 24; pts.push([x, Math.max(0, Math.sqrt(rho * rho - (Ln - x) ** 2) + R - rho)]); }
    const p = part('nose', 4, [-3.4, 0, 0], 0, 0.7); add(p, latheX(pts), M.nose); add(p, ringX(R * 0.99, 0.03), M.steel, [Ln, 0, 0]); add(p, cylX(R * 0.5, 0.5, 24), M.frame, [Ln - 0.45, 0, 0]);
  }
  /* guidance bay: lattice, two electronics stacks, two seeker heads, and the first skin */
  { const p = part('sec2', 1, [-1.7, 0, 0], 0.05, 0.8); lattice(p, 1.75, 3.95, 5, 12); }
  for (const [k, x, sgn] of [['g1a', 2.3, 1], ['g1b', 2.95, 1]]) {
    const p = part(k, 8, [-1.3 + (x - 2.3) * 0.2, 2.4 * sgn, -0.3], 0.05, 0.9);
    add(p, new THREE.BoxGeometry(0.5, 0.06, 0.62), M.pcb, [x, 0.05, 0]); for (let i = 0; i < 4; i++) add(p, new THREE.BoxGeometry(0.1, 0.05, 0.1), M.chip, [x - 0.15 + (i % 2) * 0.28, 0.1, -0.15 + Math.floor(i / 2) * 0.28]); add(p, new THREE.BoxGeometry(0.46, 0.3, 0.5), M.dark, [x, -0.14, 0]);
  }
  for (const [k, x, sgn] of [['g2a', 3.5, 1], ['g2b', 3.8, 1]]) {
    const p = part(k, 9, [-1.0 + (x - 3.5) * 0.3, 2.4 * sgn + 0.9, 0.5], 0.05, 0.9);
    add(p, latheX([[0, 0], [0.04, 0.12], [0.18, 0.2], [0.2, 0.2], [0.2, 0.0]].map(([a, r]) => [a, r]), 20), M.glass, [x - 0.1, 0, 0]); add(p, cylX(0.12, 0.2, 20), M.gold, [x + 0.05, 0, 0]); add(p, new THREE.BoxGeometry(0.2, 0.3, 0.3), M.chip, [x + 0.22, 0, 0]);
  }
  { const p = part('skin1', 6, [-1.2, 0, 3.1], 0, 0.9); add(p, cylX(R, 2.2, seg, true), M.skin, [2.85, 0, 0]); add(p, ringX(R, 0.02), M.steel, [1.75, 0, 0]); add(p, ringX(R, 0.02), M.steel, [3.95, 0, 0]); }
  /* warhead section: lattice, the core, and the second skin in a half shell and three pieces */
  { const p = part('sec1', 3, [0.8, 0, 0], 0.05, 0.8); lattice(p, 4.05, 6.25, 6, 12); }
  { const p = part('core', 2, [0.8, -2.4, 0], 0.1, 0.9); add(p, cylX(R * 0.5, 1.9, 28), M.core, [5.15, 0, 0]); add(p, ringX(R * 0.5, 0.02), M.steel, [4.3, 0, 0]); add(p, ringX(R * 0.5, 0.02), M.steel, [6.0, 0, 0]); }
  { const p = part('skin2', 10, [0.8, 0, -3.1], 0, 0.9); add(p, cylX(R * 1.005, 2.2, seg, true, 0, Math.PI), M.skin, [5.15, 0, 0], [0, 0, 0]); }
  for (let k = 0; k < 3; k++) {
    const a0 = Math.PI + k * Math.PI / 3, mid = a0 + Math.PI / 6, p = part('skin2p' + k, 11, [0.8 + k * 0.5, -2.6 * Math.abs(Math.sin(mid)) + 0.4, 2.4 * Math.cos(mid) * 1.2 + 0.4 * (k - 1)], 0.1, 0.9);
    add(p, cylX(R * 1.005, 2.2, Math.round(seg / 3), true, a0, Math.PI / 3 - 0.01), M.skin, [5.15, 0, 0]);
  }
  /* end section, fins, motor */
  { const p = part('end', 7, [2.2, 0, 0], 0.1, 0.9); add(p, cylX(R, 1.2, seg, true), M.skin, [6.9, 0, 0]); add(p, ringX(R * 0.97, 0.035), M.frame, [6.4, 0, 0]); add(p, ringX(R * 0.97, 0.035), M.frame, [7.4, 0, 0]); add(p, ringX(R, 0.025), M.steel, [7.5, 0, 0]); }
  for (let k = 0; k < 4; k++) {
    const t = (k / 4) * Math.PI * 2 + Math.PI / 4, sh = new THREE.Shape(); sh.moveTo(0, 0); sh.lineTo(1.0, 0); sh.lineTo(1.0, 0.18); sh.lineTo(0.35, 0.95); sh.lineTo(0.0, 0.95); sh.closePath();
    const gm = new THREE.ExtrudeGeometry(sh, {depth: 0.045, bevelEnabled: false}); gm.translate(0, 0, -0.0225);
    const p = part('fin' + k, 5, [3.0, Math.cos(t) * 2.2, Math.sin(t) * 2.2], 0.15, 1);
    add(p, gm, M.fin, [6.5, Math.cos(t) * (R - 0.02), Math.sin(t) * (R - 0.02)], [t, 0, 0]);
  }
  { const p = part('motor', 12, [4.4, 0, 0], 0.2, 1);
    add(p, cylX(0.36, 0.9, 32), M.steel, [7.95, 0, 0]); add(p, ringX(0.37, 0.03), M.dark, [7.55, 0, 0]); add(p, ringX(0.37, 0.03), M.dark, [8.4, 0, 0]);
    const bell = []; for (let i = 0; i <= 28; i++) { const t = i / 28, x = 8.5 + 1.1 * t, r = 0.15 + 0.5 * Math.pow(t, 0.62); bell.push([x, r]); }
    add(p, latheX([[8.35, 0.34], [8.46, 0.16], ...bell.slice(1)], 48), M.bell);
    for (let i = 0; i < 6; i++) add(p, ringX(0.22 + i * 0.075, 0.012), M.dark, [8.62 + i * 0.17, 0, 0]);
    for (let k = 0; k < 3; k++) { const t = k * 2.1; add(p, cylX(0.05, 0.9, 10), M.steel, [8.0, Math.cos(t) * 0.45, Math.sin(t) * 0.45]); }
    add(p, cylX(0.09, 0.4, 14), M.gold, [8.1, 0.46, 0.2], [0, 0, 0.3]);
  }
  const apply = exploder(parts);
  const info = {};
  for (const [n, [name, desc]] of Object.entries(MISSILE_BOM)) info[n] = {num: +n, name, desc, qty: parts.filter((p) => p.num === +n).length};
  return {root, parts, meshes, apply, bom: Object.values(info), size: 9.6, center: new V3(4.8, 0, 0), setU(u) { apply(u); }};
}
