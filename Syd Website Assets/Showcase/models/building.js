// A small office building that takes apart storey by storey, with one test floor modelled as a strip on a bed of springs: the floor mesh bends by the Ritz
// displacement, the springs under it compress by the same amount, and the loads sit on top. One unit = 1 m.
import {THREE, V3, mat, exploder, smooth} from '../kit.js';

export const BUILDING_INFO = {
  foundation: ['Foundation raft', 'A thick reinforced slab that spreads the column loads into the ground. The ground itself is the bed of springs the floor idealisation borrows from.'],
  floor1: ['Ground floor', 'The ground slab and the lowest lift of columns. It carries every storey above it.'],
  floor2: ['Floor 2 (the test floor)', 'The floor analysed here: a strip of slab spanning between its supports, loaded by its own weight, finishes, contents and one heavy machine. Click “Zoom into the floor” to see it deflect.'],
  floor3: ['Floor 3', 'A typical office storey: slab, columns and glazing.'],
  floor4: ['Floor 4', 'The top storey, carrying a plant room under the roof.'],
  roof: ['Roof slab', 'The roof slab and parapet: the lightest floor, but exposed to wind uplift and rainwater ponding.'],
};

export function buildBuilding(p, {lite = false} = {}) {
  const root = new THREE.Group(), parts = [], meshes = [];
  const W = p.L, D = 8, H = 3.2, T = 0.25;
  const M = {
    slab: mat('#c9ccd8', {roughness: 0.8, metalness: 0.05, side: THREE.DoubleSide, vertexColors: false}),
    slabTest: mat('#ffffff', {roughness: 0.55, metalness: 0.05, vertexColors: true, side: THREE.DoubleSide}),
    col: mat('#8f96aa', {roughness: 0.6, metalness: 0.2}),
    glass: mat('#9fc5ff', {roughness: 0.05, metalness: 0.2, transparent: true, opacity: 0.16, depthWrite: false, side: THREE.DoubleSide}),
    found: mat('#4b4f63', {roughness: 0.9}),
    load: mat('#fb923c', {roughness: 0.5, emissive: new THREE.Color('#7a2d00'), emissiveIntensity: 0.4}),
    spring: new THREE.LineBasicMaterial({color: '#fbbf24', transparent: true, opacity: 0}),
    arrow: new THREE.MeshBasicMaterial({color: '#fb923c', transparent: true, opacity: 0, toneMapped: false}),
  };
  const part = (id, out, a = 0, b = 1) => { const group = new THREE.Group(); root.add(group); const [name, desc] = BUILDING_INFO[id]; const q = {id, name, desc, group, out, a, b, meshes: []}; parts.push(q); return q; };
  const add = (q, geo, m, pos = [0, 0, 0]) => { const mesh = new THREE.Mesh(geo, m); mesh.position.set(...pos); mesh.userData.part = q.id; q.group.add(mesh); q.meshes.push(mesh); meshes.push(mesh); return mesh; };
  const fnd = part('foundation', [0, -2.2, 0], 0, 1); add(fnd, new THREE.BoxGeometry(W + 3, 0.7, D + 3), M.found, [0, -0.35, 0]);
  const storey = (n, id, y, test) => {
    const q = part(id, [0, 2.6 * n, 0], 0.05, 1); q.y = y;
    const slabGeo = new THREE.BoxGeometry(W, T, D, test ? (lite ? 48 : 96) : 1, 1, test ? 6 : 1);
    const slab = add(q, slabGeo, test ? M.slabTest : M.slab, [0, y, 0]); if (test) { q.slab = slab; q.base = slabGeo.attributes.position.array.slice(); const c = new Float32Array(slabGeo.attributes.position.count * 3).fill(1); slabGeo.setAttribute('color', new THREE.BufferAttribute(c, 3)); }
    const h = H - T; for (const sx of [-1, 1]) for (const z of [-D / 2 + 0.3, 0, D / 2 - 0.3]) add(q, new THREE.BoxGeometry(0.4, h, 0.4), M.col, [sx * (W / 2 - 0.3), y - T / 2 - h / 2, z]);
    if (!test) { for (const s of [1, -1]) add(q, new THREE.BoxGeometry(W, h * 0.9, 0.05), M.glass, [0, y - T / 2 - h / 2, s * D / 2]); }
    return q;
  };
  storey(1, 'floor1', 0.2, false); const test = storey(2, 'floor2', H + 0.2, true); storey(3, 'floor3', 2 * H + 0.2, false); storey(4, 'floor4', 3 * H + 0.2, false);
  const roof = part('roof', [0, 14, 0], 0.1, 1); add(roof, new THREE.BoxGeometry(W + 0.4, 0.3, D + 0.4), M.slab, [0, 4 * H + 0.35, 0]);
  /* the test floor's idealisation: springs under it, loads on it */
  const yTest = test.y, springs = [], NS = lite ? 12 : 25, rows = [-2.8, 0, 2.8], det = new THREE.Group(); root.add(det); det.visible = false;
  const base = new THREE.Mesh(new THREE.BoxGeometry(W + 0.6, 0.1, D + 0.4), M.found); base.position.set(0, yTest - 1.55, 0); det.add(base);
  for (const z of rows) for (let i = 0; i < NS; i++) {
    const x = -W / 2 + (i + 0.5) * W / NS, pts = [], turns = 5, n = 40;
    for (let k = 0; k <= n; k++) { const t = k / n, a = t * turns * 2 * Math.PI; pts.push(new V3(Math.cos(a) * 0.09, t, Math.sin(a) * 0.09)); }
    const g = new THREE.BufferGeometry().setFromPoints(pts), line = new THREE.Line(g, M.spring); line.position.set(x, yTest - 1.5, z); det.add(line); springs.push({line, x});
  }
  const arrows = [], NA = lite ? 8 : 14;
  for (let i = 0; i < NA; i++) for (const z of [-2.8, 0, 2.8]) { const g = new THREE.Group(), cyl = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.6, 6), M.arrow), cone = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.22, 10), M.arrow); cyl.position.y = 0.4; cone.position.y = 0.0; cone.rotation.x = Math.PI; g.add(cyl, cone); det.add(g); arrows.push({g, x: -W / 2 + (i + 0.5) * W / NA, z}); }
  const block = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.9, 1.4), M.load); det.add(block);
  const apply0 = exploder(parts);
  /** u: how far the storeys have come apart; z: how far we have zoomed in (the detail group fades in); w: displacement function of xi (m); amp: visual amplification; load info */
  function update(u, zoom, w, amp, P, xp, q, kScale) {
    apply0(u);
    const pos = test.slab.geometry.attributes.position, col = test.slab.geometry.attributes.color, base0 = test.base, maxW = 0.012; let wm = 1e-9;
    for (let i = 0; i < pos.count; i++) { const bx = base0[i * 3], xi = bx / W + 0.5; wm = Math.max(wm, Math.abs(w(Math.min(1, Math.max(0, xi))))); }
    for (let i = 0; i < pos.count; i++) {
      const bx = base0[i * 3], by = base0[i * 3 + 1], bz = base0[i * 3 + 2], xi = Math.min(1, Math.max(0, bx / W + 0.5)), d = w(xi) * amp * zoomK(zoom);
      pos.setXYZ(i, bx, by - d, bz); const t = Math.min(1, w(xi) / wm); col.setXYZ(i, 0.35 + 0.65 * t, 0.55 + 0.1 * (1 - t) - 0.3 * t, 0.95 - 0.7 * t);
    }
    pos.needsUpdate = true; col.needsUpdate = true; test.slab.geometry.computeVertexNormals();
    const k = smooth(zoom); det.visible = k > 0.01; det.position.y = test.group.position.y; M.spring.opacity = k * 0.95; M.arrow.opacity = k * 0.9;
    for (const s of springs) { const d = w(s.x / W + 0.5) * amp * zoomK(zoom), h0 = 1.3; s.line.scale.y = Math.max(0.2, (h0 - d) / 1); s.line.position.y = yTest - 1.5; }
    const qMax = 1; for (const a of arrows) { const xi = a.x / W + 0.5, d = w(xi) * amp * zoomK(zoom); a.g.position.set(a.x, yTest + T / 2 + 0.45 - d, a.z); a.g.visible = q > 0; }
    block.visible = P > 0; const bx = (xp - 0.5) * W, d = w(xp) * amp * zoomK(zoom); block.position.set(bx, yTest + T / 2 + 0.45 - d, 0); block.scale.setScalar(0.7 + Math.min(1.2, P / 80e3));
  }
  const zoomK = (z) => (z > 0 ? 1 : 1);
  return {root, parts, meshes, update, test, size: Math.max(W, D, 4 * H), yTest, W, D, H};
}
