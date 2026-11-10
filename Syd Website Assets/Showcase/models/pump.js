// The centrifugal pump as geometry, built from the design numbers: a closed impeller with backward-curved blades whose shape comes from the blade
// angle law, a spiral volute, suction and discharge, shaft, seal, bearing bracket, motor and base. One unit = 100 mm. The pump's shaft lies along
// local z (suction towards -z); the root is turned so the shaft runs horizontally across the screen.
import {THREE, V3, mat, plate} from '../kit.js';
import {blade, geometry} from '../pump/physics.js';

export const PUMP_INFO = {
  suction: ['Suction pipe and flange', 'Water arrives axially from the sump. Its velocity is kept low and uniform: the lower the speed at the eye, the lower the NPSH the pump needs to avoid cavitation.'],
  cover: ['Front cover and wear ring', 'Closes the impeller and forms the suction nozzle. A close-fitting wear ring stops high-pressure water leaking back round the impeller to the eye, which is the volumetric loss.'],
  volute: ['Volute casing', 'A spiral whose cross-section grows steadily round the impeller so that the water leaving every blade passage meets the same velocity. It collects the flow and slows it in the discharge cone, turning velocity head into pressure.'],
  impeller: ['Impeller', 'Six backward-curved blades between two shrouds. The blades turn the shaft’s power into angular momentum of the water: Euler’s equation, H = u₂cᵤ₂ / g. Backward curvature gives a stable curve and a good efficiency.'],
  shaft: ['Shaft and key', 'Carries torque from the motor to the impeller. It is sized for torsion and for bending from the unbalanced radial load that appears when the pump runs away from its best efficiency point.'],
  seal: ['Mechanical seal', 'Two flat faces, one turning and one fixed, held together by a spring and lubricated by a film of the water itself. It keeps the pressure in the casing without a leak along the shaft.'],
  bearing: ['Bearing bracket', 'Holds the bearings that locate the shaft axially and radially, and the lantern ribs that tie the casing to the motor.'],
  motor: ['Electric motor', 'A two-pole induction motor on 50 Hz mains turns at about 2 900 rpm: the speed that sets the head, through u₂ = ωr₂.'],
  base: ['Base plate', 'A rigid frame that keeps the pump and motor aligned and takes the pipe loads.'],
};

export function buildPump(p, {lite = false} = {}) {
  const S = 10, g = geometry(p);
  const r1 = p.D1 / 2 * S, r2 = p.D2 / 2 * S, b2 = p.b2 * S, tb = Math.max(p.t * S, 0.012);
  const root = new THREE.Group(), parts = [], byId = {}, meshes = [];
  const M = {
    iron: mat('#3b4a58', {metalness: 0.65, roughness: 0.42, envMapIntensity: 1.1, side: THREE.DoubleSide}),
    ironB: mat('#2f3b47', {metalness: 0.65, roughness: 0.5, side: THREE.DoubleSide}),
    steel: mat('#cfd5dd', {metalness: 1, roughness: 0.26, envMapIntensity: 1.3}),
    bronze: mat('#d09242', {metalness: 0.95, roughness: 0.32, envMapIntensity: 1.2}),
    shroud: mat('#e0a95a', {metalness: 0.9, roughness: 0.3, transparent: true, opacity: 0.32, depthWrite: false, side: THREE.DoubleSide}),
    paint: mat('#14708f', {roughness: 0.38, clearcoat: 1, clearcoatRoughness: 0.15}),
    dark: mat('#141a24', {roughness: 0.6, metalness: 0.3}),
    glow: new THREE.MeshBasicMaterial({color: new THREE.Color('#22d3ee').multiplyScalar(1.4), toneMapped: false}),
    water: new THREE.MeshBasicMaterial({color: new THREE.Color('#67e8f9').multiplyScalar(1.3), toneMapped: false}),
  };
  const part = (id, out, a = 0, b = 1) => { const group = new THREE.Group(); root.add(group); const q = {id, name: PUMP_INFO[id][0], desc: PUMP_INFO[id][1], group, out, a, b, meshes: []}; parts.push(q); byId[id] = q; return q; };
  const add = (q, geo, m, pos = [0, 0, 0], rot = [0, 0, 0], parent = null) => { const mesh = new THREE.Mesh(geo, m); mesh.position.set(...pos); mesh.rotation.set(...rot); mesh.userData.part = q.id; (parent || q.group).add(mesh); q.meshes.push(mesh); meshes.push(mesh); return mesh; };
  const cyl = (r, len, seg = 40) => new THREE.CylinderGeometry(r, r, len, lite ? Math.max(16, seg / 2) : seg).rotateX(Math.PI / 2);   // axis along z
  const lathe = (pts, seg = 64) => new THREE.LatheGeometry(pts.map(([x, y]) => new THREE.Vector2(x, y)), lite ? 32 : seg).rotateX(Math.PI / 2);

  /* ---- volute: a spiral tube whose area grows linearly with angle, open on the impeller side ---- */
  const r3 = r2 * 1.06, aMax = Math.max(0.2, 0.3 * (p.D2 / 0.14)), nth = lite ? 56 : 110, nph = lite ? 16 : 28;
  const aOf = (th) => 0.03 + (aMax - 0.03) * Math.sqrt(th / (2 * Math.PI));
  {
    const pos = [], idx = [], gap = 0.55;
    for (let i = 0; i <= nth; i++) { const th = (i / nth) * Math.PI * 2, a = aOf(th), rc = r3 + a; for (let j = 0; j <= nph; j++) { const ph = -Math.PI + gap + (j / nph) * (2 * Math.PI - 2 * gap); pos.push((rc + a * Math.cos(ph)) * Math.cos(th), (rc + a * Math.cos(ph)) * Math.sin(th), a * Math.sin(ph)); } }
    for (let i = 0; i < nth; i++) for (let j = 0; j < nph; j++) { const a = i * (nph + 1) + j, b = a + nph + 1; idx.push(a, b, a + 1, b, b + 1, a + 1); }
    const vg = new THREE.BufferGeometry(); vg.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); vg.setIndex(idx); vg.computeVertexNormals();
    const q = part('volute', [0, 0, 0], 0.15, 0.7); add(q, vg, M.iron);
    const rEnd = r3 + aMax;                                                                       // discharge: tangent, straight up (+y), at the end of the spiral
    add(q, new THREE.CylinderGeometry(aMax, aMax * 1.25, 1.4, 36, 1, true), M.iron, [rEnd, 0.7, 0]);
    add(q, new THREE.CylinderGeometry(aMax * 1.9, aMax * 1.9, 0.1, 40), M.ironB, [rEnd, 1.45, 0]);
    for (let k = 0; k < 8; k++) { const t = (k / 8) * Math.PI * 2; add(q, new THREE.CylinderGeometry(0.035, 0.035, 0.14, 8), M.steel, [rEnd + Math.cos(t) * aMax * 1.55, 1.52, Math.sin(t) * aMax * 1.55]); }
  }
  /* ---- suction side ---- */
  {
    const q = part('suction', [-3.2, 0, 0], 0, 0.6);
    add(q, cyl(r1 * 1.05, 1.9), M.iron, [0, 0, -1.35]);
    add(q, cyl(r1 * 1.9, 0.1, 48), M.ironB, [0, 0, -2.25]);
    for (let k = 0; k < 8; k++) { const t = (k / 8) * Math.PI * 2; add(q, cyl(0.04, 0.16, 8), M.steel, [Math.cos(t) * r1 * 1.55, Math.sin(t) * r1 * 1.55, -2.25]); }
    const qc = part('cover', [-1.7, 0, 0], 0.05, 0.6);
    add(qc, lathe([[r1 * 1.0, -0.42], [r1 * 1.02, -0.3], [r3 + 0.15, -0.3], [r3 + 0.15, -0.22], [r1 * 1.0, -0.22]]), M.iron);
    add(qc, cyl(r1 * 1.12, 0.06, 40), M.bronze, [0, 0, -0.17]);
    add(qc, new THREE.TorusGeometry(r1 * 1.1, 0.02, 8, 48), M.glow, [0, 0, -0.17]);
    for (let k = 0; k < 12; k++) { const t = (k / 12) * Math.PI * 2; add(qc, cyl(0.025, 0.1, 8), M.steel, [Math.cos(t) * (r3 + 0.08), Math.sin(t) * (r3 + 0.08), -0.29]); }
  }
  /* ---- the impeller: back shroud, front shroud, backward-curved blades from the blade-angle law ---- */
  {
    const q = part('impeller', [-0.6, 0, 0], 0.0, 0.45);
    const R = new THREE.Group(); q.group.add(R); q.rotor = R;
    const rotMesh = (geo, m, pos = [0, 0, 0]) => add(q, geo, m, pos, [0, 0, 0], R);
    rotMesh(lathe([[0.001, b2 / 2 + 0.04], [r2, b2 / 2 + 0.04], [r2, b2 / 2], [r2 * 0.4, b2 / 2], [0.2, b2 / 2 + 0.1], [0.2, b2 / 2 + 0.34], [0.001, b2 / 2 + 0.34]]), M.bronze);
    rotMesh(lathe([[r1 * 1.0, -b2 / 2 - 0.26], [r1 * 1.0, -b2 / 2 - 0.1], [r2 * 0.6, -b2 / 2 - 0.05], [r2, -b2 / 2], [r2, -b2 / 2 - 0.035], [r2 * 0.6, -b2 / 2 - 0.085], [r1 * 1.05, -b2 / 2 - 0.15], [r1 * 1.05, -b2 / 2 - 0.26]]), M.shroud);
    const bl = blade(p, lite ? 18 : 36), half = tb / 2;
    for (let k = 0; k < p.z; k++) {
      const base = (k / p.z) * Math.PI * 2, pts = bl.pts.map((q2) => [q2.r * S * Math.cos(base + q2.th), q2.r * S * Math.sin(base + q2.th)]);
      const left = [], right = [];
      for (let i = 0; i < pts.length; i++) { const a = pts[Math.max(0, i - 1)], b = pts[Math.min(pts.length - 1, i + 1)], dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy) || 1, nx = -dy / L * half, ny = dx / L * half; left.push([pts[i][0] + nx, pts[i][1] + ny]); right.push([pts[i][0] - nx, pts[i][1] - ny]); }
      const shape = new THREE.Shape(); left.forEach(([x, y], i) => (i ? shape.lineTo(x, y) : shape.moveTo(x, y))); [...right].reverse().forEach(([x, y]) => shape.lineTo(x, y)); shape.closePath();
      const gm = new THREE.ExtrudeGeometry(shape, {depth: b2, bevelEnabled: false, curveSegments: 4}); gm.translate(0, 0, -b2 / 2);
      rotMesh(gm, M.bronze);
    }
    // the water: dots that follow the blade channels in the frame of the impeller
    const N = lite ? 40 : 96, dots = new THREE.InstancedMesh(new THREE.SphereGeometry(0.028, 8, 6), M.water, N); dots.frustumCulled = false; R.add(dots);
    const seed = Array.from({length: N}, (_, i) => ({s: ((i * 0.6180339) % 1), ch: i % p.z, z: ((i * 0.37) % 1 - 0.5) * b2 * 0.7}));
    q.flow = {dots, seed, bl, z: p.z, S, hidden: false};
  }
  /* ---- shaft, seal, bearing bracket ---- */
  {
    const q = part('shaft', [3.0, 0, 0], 0.2, 0.9);
    add(q, cyl(0.13, 5.6), M.steel, [0, 0, 2.6]); add(q, new THREE.BoxGeometry(0.1, 0.05, 0.5), M.steel, [0.13, 0, 4.7]);
    const qs = part('seal', [1.6, 0, 0], 0.15, 0.8);
    add(qs, cyl(0.3, 0.35), M.dark, [0, 0, 0.5]); add(qs, cyl(0.2, 0.2), M.bronze, [0, 0, 0.4]); add(qs, new THREE.TorusGeometry(0.31, 0.015, 8, 40), M.glow, [0, 0, 0.33]);
    const qb = part('bearing', [2.4, 0, 0], 0.15, 0.9);
    add(qb, lathe([[0.22, 0.28], [r3 + 0.15, 0.28], [r3 + 0.15, 0.34], [0.55, 0.34], [0.55, 0.9], [0.5, 0.9], [0.5, 1.5], [0.22, 1.5]]), M.iron);
    for (let k = 0; k < 4; k++) { const t = (k / 4) * Math.PI * 2 + Math.PI / 4; add(qb, new THREE.BoxGeometry(0.09, 0.09, 1.0), M.ironB, [Math.cos(t) * 0.7, Math.sin(t) * 0.7, 0.78]); }
    add(qb, new THREE.TorusGeometry(0.5, 0.025, 8, 40), M.steel, [0, 0, 1.5]);
  }
  /* ---- motor, base ---- */
  {
    const q = part('motor', [5.0, 0, 0], 0.2, 1);
    add(q, cyl(0.95, 2.6, 56), M.paint, [0, 0, 3.0]);
    for (let k = 0; k < 14; k++) add(q, new THREE.TorusGeometry(0.96, 0.03, 6, 48), M.paint, [0, 0, 1.9 + k * 0.17]);
    add(q, cyl(0.78, 0.5, 40), M.dark, [0, 0, 4.55]); add(q, cyl(0.97, 0.07, 40), M.steel, [0, 0, 1.62]);
    add(q, new THREE.BoxGeometry(0.6, 0.35, 0.6), M.paint, [0, 1.05, 3.1]);
    for (let k = 0; k < 4; k++) add(q, new THREE.BoxGeometry(0.34, 0.2, 2.2), M.paint, [(k < 2 ? -1 : 1) * 0.7, -0.78, 3.0]);
    const qb = part('base', [0, -1.6, 0], 0.1, 1);
    const baseY = -r3 - aMax - 0.55;
    add(qb, new THREE.BoxGeometry(2.7, 0.18, 7.2), M.dark, [0, baseY, 1.7]);
    for (const x of [-1.2, 1.2]) for (const z of [-1.6, 4.8]) add(qb, new THREE.BoxGeometry(0.26, 0.2, 0.26), M.steel, [x, baseY - 0.19, z]);
    add(qb, new THREE.BoxGeometry(0.5, 0.5 + (baseY + 0.9) * -1, 0.5), M.ironB, [0, (baseY - r3 - aMax) / 2 - 0.1, -0.1]);
  }
  root.rotation.y = -Math.PI / 2;
  // clip planes for the cutaway: remove everything on the camera side (world +z)
  const plane = new THREE.Plane(new V3(0, 0, -1), 0);
  const clipped = ['volute', 'suction', 'cover', 'bearing'].flatMap((id) => byId[id].meshes);
  const clipMats = [...new Set(clipped.map((m) => m.material))];
  const setCut = (on) => { for (const m of clipMats) { m.clippingPlanes = on ? [plane] : null; m.needsUpdate = true; } };
  /** Per-frame: spin the rotor and slide the water dots along their channels. flow in 0..1.5 relative to the design flow, spin in rad/s (visual). */
  function update(dt, spin, flow, u) {
    const q = byId.impeller; q.rotor.rotation.z += spin * dt;
    const f = q.flow; f.dots.visible = u < 0.3; if (!f.dots.visible) return;
    const m = new THREE.Matrix4(), pos = new V3(), quat = new THREE.Quaternion(), sc = new V3(1, 1, 1), n = f.bl.pts.length;
    f.seed.forEach((d, i) => {
      d.s = (d.s + dt * 0.35 * Math.max(0.15, flow)) % 1;
      const fi = d.s * (n - 1), i0 = Math.floor(fi), i1 = Math.min(n - 1, i0 + 1), t = fi - i0, a = f.bl.pts[i0], b = f.bl.pts[i1];
      const r = (a.r + (b.r - a.r) * t) * f.S, th = a.th + (b.th - a.th) * t + ((d.ch + 0.5) / f.z) * Math.PI * 2;
      pos.set(r * Math.cos(th), r * Math.sin(th), d.z); m.compose(pos, quat, sc); f.dots.setMatrixAt(i, m);
    });
    f.dots.instanceMatrix.needsUpdate = true;
  }
  const dispose = () => root.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
  return {root, parts, byId, meshes, setCut, update, dispose, rotor: byId.impeller.rotor, geo: g, scale: S};
}
