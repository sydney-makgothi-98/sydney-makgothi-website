// A solid model of the Burj Khalifa (828 m, Y-shaped plan, three wings that step back in a spiral round a hexagonal core, a stepped spire), built from code
// after four reference photographs. It cuts away down the middle to show the floor plates and the core, and it comes apart in five bands. Inside the cut,
// one 6 m strip of a wing floor is modelled as a beam on a bed of springs: its mesh bends by the Ritz displacement, the springs under it compress by the
// same amount, and the loads sit on top. One unit = 1 m. The proportions follow the published figures (828 m, 163 floors, Y plan); the plan dimensions are
// estimated from the photographs, not from drawings.
import {THREE, V3, mat, exploder, smooth} from '../kit.js';

export const BUILDING_INFO = {
  foundation: ['Foundation raft', 'A reinforced concrete raft 3.7 m thick, carried on bored piles, that spreads the weight of the tower into the ground. The ground and piles are the bed of springs that the floor idealisation borrows from.'],
  lower: ['Lower tower, floors 1 to 38', 'The widest part of the Y: three wings at full length round the hexagonal core. The wings are buttresses for one another, so the tower resists wind as one stiff body.'],
  mid: ['Middle tower, floors 39 to 76', 'Each wing steps back in turn and the plan narrows. The step-backs break up the wind, so that vortices form at different heights and never line up. The test floor is cut open in this band.'],
  upper: ['Upper tower, floors 77 to 117', 'The wings are shorter still. Most of the strength is in the core now: a hexagonal reinforced concrete tube with a wall at each wing as a spine.'],
  top: ['Top of the tower, floors 118 to 156', 'The last wings finish one after another and the core carries on alone. Lifts slow down here and there is little floor area left.'],
  spire: ['Spire', 'A stack of steel sections that tapers to a mast, taking the tower from the top occupied floor up to its full 828 m.'],
  test: ['Test floor (an idealised strip)', 'One bay of a wing floor, 6 m span, treated as a beam on a bed of springs: the springs stand for the supporting structure under it. Press “Zoom into the floor” to see it bend under load.'],
};

// the five bands the tower comes apart in, in metres above the plaza
const BANDS = [
  {id: 'lower', y0: 0, y1: 150, out: [0, 0, 0]},
  {id: 'mid', y0: 150, y1: 300, out: [0, 60, 0]},
  {id: 'upper', y0: 300, y1: 460, out: [0, 120, 0]},
  {id: 'top', y0: 460, y1: 585, out: [0, 180, 0]},
  {id: 'spire', y0: 585, y1: 828, out: [0, 245, 0]},
];
const FH = 3.9, PLATE = 3 * FH;                                   // storey height; one floor plate drawn for every third storey
const WINGS = [{dir: [0, 1], H: 540}, {dir: [0.866, -0.5], H: 505}, {dir: [-0.866, -0.5], H: 470}];
const STEPS = 9, D0 = 36, R0 = 11, DD = 3.2, DR = 0.9, WH0 = 9.5, DWH = 0.35;   // wing steps: lobe distance, lobe radius, half-width of the web

function facadeTexture() {
  const c = document.createElement('canvas'); c.width = 128; c.height = 128; const g = c.getContext('2d');
  const gr = g.createLinearGradient(0, 0, 0, 128); gr.addColorStop(0, '#8fb0d4'); gr.addColorStop(1, '#6c8fba'); g.fillStyle = gr; g.fillRect(0, 0, 128, 128);
  g.fillStyle = '#d3dce8'; g.fillRect(0, 100, 128, 28);                      // spandrel at the floor edge
  g.fillStyle = '#e4eaf2'; g.fillRect(0, 0, 10, 128);                        // mullion
  g.fillStyle = 'rgba(255,255,255,0.14)'; g.fillRect(24, 0, 34, 96);         // glint on the glass
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t;
}

export function buildBuilding(p, {lite = false} = {}) {
  const root = new THREE.Group(), parts = [], meshes = [], seg = lite ? 18 : 32;
  const W = p.L, D = 8, T = 0.25;
  const clip = new THREE.Plane(new V3(-1, 0, 0), 1e4), CP = [clip];
  const M = {
    glass: mat('#ffffff', {map: facadeTexture(), roughness: 0.22, metalness: 0.55, envMapIntensity: 0.9, clippingPlanes: CP}),
    inner: new THREE.MeshStandardMaterial({color: '#1d2c47', emissive: '#0a1730', roughness: 0.85, side: THREE.BackSide, clippingPlanes: CP}),
    roof: mat('#aab4c8', {roughness: 0.55, metalness: 0.45, envMapIntensity: 0.7, clippingPlanes: CP}),
    plate: mat('#d5dae6', {roughness: 0.8, metalness: 0.05, clippingPlanes: CP}),
    gold: mat('#d3a94c', {roughness: 0.32, metalness: 0.85, envMapIntensity: 1, clippingPlanes: CP}),
    steel: mat('#cfd6e2', {roughness: 0.3, metalness: 0.9, envMapIntensity: 1}),
    found: mat('#4b4f63', {roughness: 0.9}),
    plaza: mat('#273049', {roughness: 0.95}),
    slabTest: mat('#ffffff', {roughness: 0.55, metalness: 0.05, vertexColors: true, side: THREE.DoubleSide}),
    col: mat('#8f96aa', {roughness: 0.6, metalness: 0.2}),
    load: mat('#fb923c', {roughness: 0.5, emissive: new THREE.Color('#7a2d00'), emissiveIntensity: 0.4}),
    spring: new THREE.LineBasicMaterial({color: '#fbbf24', transparent: true, opacity: 0}),
    arrow: new THREE.MeshBasicMaterial({color: '#fb923c', transparent: true, opacity: 0, toneMapped: false}),
    base: mat('#4b4f63', {roughness: 0.9}),
  };
  M.glass.map.repeat.set(1, 1);
  const part = (id, out, a = 0, b = 1) => { const group = new THREE.Group(); root.add(group); const [name, desc] = BUILDING_INFO[id]; const q = {id, name, desc, group, out, a, b, meshes: []}; parts.push(q); return q; };
  const add = (q, geo, m, pos = [0, 0, 0]) => { const mesh = new THREE.Mesh(geo, m); mesh.position.set(...pos); mesh.userData.part = q.id; q.group.add(mesh); q.meshes.push(mesh); meshes.push(mesh); return mesh; };

  const found = part('foundation', [0, -45, 0]);
  // a solid floor: one wide ground slab and the raft just proud of it, both a little below y = 0 so that no face of the tower shares a plane with them (that was the strobing)
  add(found, new THREE.CylinderGeometry(160, 160, 0.4, 72), M.plaza, [0, -0.32, 0]);
  add(found, new THREE.CylinderGeometry(60, 60, 3.7, 56), M.found, [0, -1.94, 0]);
  const band = {}; for (const b of BANDS) band[b.id] = part(b.id, b.out);
  const test = part('test', BANDS[1].out);

  /** One solid between heights ya and yb, split where it crosses a band boundary so that each band can slide away on its own. */
  function solid(kind, g, ya, yb, o = {}) {
    for (const b of BANDS) {
      const a = Math.max(ya, b.y0), e = Math.min(yb, b.y1), h = e - a; if (h < 0.3) continue;
      const q = band[b.id], mid = (a + e) / 2;
      const make = (hh, inset) => {
        let geo, ru;
        if (kind === 'box') { geo = new THREE.BoxGeometry(g.len - inset, hh, g.wid - inset); ru = Math.max(g.len, g.wid) / 3.2; geo.rotateY(-Math.atan2(g.dz, g.dx)); geo.translate(g.x, 0, g.z); }
        else if (kind === 'cone') { geo = new THREE.CylinderGeometry(g.rt, g.rb, hh, seg); ru = 6 * g.rb / 3.2; geo.translate(g.x, 0, g.z); }
        else { const r = g.r - inset; geo = new THREE.CylinderGeometry(r, r, hh, kind === 'hex' ? 6 : seg); if (kind === 'hex') geo.rotateY(Math.PI / 6); ru = (kind === 'hex' ? 6 * g.r : 2 * Math.PI * g.r) / 3.2; geo.translate(g.x, 0, g.z); }
        if (o.mat !== M.steel) {   // no bottom cap: a down-facing cap sits on the up-facing cap of the step below and the dark inner shell fought it for the pixel (the hatched strobing)
          const ix = geo.index.array, keep = kind === 'box' ? Array.from(ix).filter((_, i) => i < geo.groups[3].start || i >= geo.groups[3].start + geo.groups[3].count) : Array.from(ix).slice(0, ix.length - geo.parameters.radialSegments * 3);
          geo.setIndex(keep); geo.clearGroups();   // two materials: the facade on the walls, a plain roof on the top cap (the facade texture on the roofs was the hatched strobing)
          if (kind === 'box') [0, 0, 1, 0, 0].forEach((m, i) => geo.addGroup(i * 6, 6, m)); else { const n = geo.parameters.radialSegments; geo.addGroup(0, n * 6, 0); geo.addGroup(n * 6, n * 3, 1); }
        }
        const uv = geo.attributes.uv, rv = Math.max(1, hh / FH); for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * Math.max(1, ru), uv.getY(i) * rv);
        return geo;
      };
      const low = (o.pid || 0) * 0.1, shell = make(h - low, 0); shell.translate(0, mid - low / 2, 0);   // each solid's roof a few centimetres lower than the next one's, so overlapping roofs never share a plane
      add(q, shell, o.mat || [M.glass, M.roof]);
      if (!o.mat) { const back = new THREE.Mesh(shell, M.inner); back.userData.part = b.id; q.group.add(back); }
      if (o.plates === false || o.mat) continue;
      const levels = []; for (let y = Math.ceil((a + 0.4 - 2) / PLATE) * PLATE + 2; y < e - 0.3; y += PLATE) levels.push(y);
      if (!levels.length) continue;
      const inst = new THREE.InstancedMesh(make(0.45, 0.5), M.plate, levels.length), m4 = new THREE.Matrix4();
      const dy = (o.pid || 0) * 0.04;   // a few centimetres of offset per solid, so that overlapping floor plates never share a plane (that was the strobing)
      levels.forEach((y, i) => { m4.makeTranslation(0, y + dy, 0); inst.setMatrixAt(i, m4); }); inst.userData.part = b.id; q.group.add(inst);
    }
  }
  // the hexagonal core steps in as it rises
  for (let j = 0; j < 8; j++) solid('hex', {x: 0, z: 0, r: 14.2 - 0.8 * j}, 585 / 8 * j, 585 / 8 * (j + 1));
  // three wings, each a web from the core to a round lobe, stepping back nine times; the wings end at different heights so the set-backs spiral
  for (const w of WINGS) {
    const sh = w.H / STEPS;
    for (let j = 0; j < STEPS; j++) {
      const d = D0 - DD * j, r = R0 - DR * j, wh = WH0 - DWH * j, ya = sh * j, yb = sh * (j + 1);
      solid('box', {x: w.dir[0] * d / 2, z: w.dir[1] * d / 2, len: d, wid: 2 * wh, dx: w.dir[0], dz: w.dir[1]}, ya, yb, {pid: 1 + WINGS.indexOf(w)});
      solid('cyl', {x: w.dir[0] * d, z: w.dir[1] * d, r}, ya, yb, {pid: 4 + WINGS.indexOf(w)});
      if (j < STEPS - 1) solid('cyl', {x: w.dir[0] * d, z: w.dir[1] * d, r: r + 0.35}, yb - 3.5, yb, {mat: M.gold});   // the gold band at each set-back
    }
  }
  // the spire: stepped steel sections tapering to a mast
  [[585, 640, 7.8, 6.2], [640, 700, 6.2, 4.4], [700, 760, 4.4, 2.4], [760, 828, 1.4, 0.3]].forEach(([ya, yb, rb, rt]) => solid('cone', {x: 0, z: 0, rb, rt}, ya, yb, {mat: M.steel}));

  /* the test floor: a strip of a wing floor in the middle band, inside the cut, between two drawn floor plates; local origin is the top of the slab */
  const plateK = 18, yTest = plateK * PLATE + 2 + PLATE / 2, bay = test.group;
  bay.position.set(-4.2, yTest, 14.6); bay.rotation.y = Math.PI / 2;
  const slabGeo = new THREE.BoxGeometry(W, T, D, lite ? 48 : 96, 1, 6);
  const slab = add(test, slabGeo, M.slabTest); test.slab = slab; test.base = slabGeo.attributes.position.array.slice();
  slabGeo.setAttribute('color', new THREE.BufferAttribute(new Float32Array(slabGeo.attributes.position.count * 3).fill(1), 3));
  for (const sx of [-1, 1]) add(test, new THREE.BoxGeometry(0.4, 1.3, D), M.col, [sx * (W / 2 + 0.05), -T / 2 - 0.65, 0]);   // the pin supports at the ends
  const springs = [], NS = lite ? 12 : 25, rows = [-2.8, 0, 2.8], det = new THREE.Group(); bay.add(det); det.visible = false;
  const baseP = new THREE.Mesh(new THREE.BoxGeometry(W + 0.6, 0.1, D + 0.4), M.base); baseP.position.set(0, -1.55, 0); det.add(baseP);
  for (const z of rows) for (let i = 0; i < NS; i++) {
    const x = -W / 2 + (i + 0.5) * W / NS, pts = [], turns = 5, n = 40;
    for (let k = 0; k <= n; k++) { const t = k / n, a = t * turns * 2 * Math.PI; pts.push(new V3(Math.cos(a) * 0.09, t, Math.sin(a) * 0.09)); }
    const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), M.spring); line.position.set(x, -1.5, z); det.add(line); springs.push({line, x});
  }
  const arrows = [], NA = lite ? 8 : 14;
  for (let i = 0; i < NA; i++) for (const z of [-2.8, 0, 2.8]) { const g = new THREE.Group(), cyl = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.6, 6), M.arrow), cone = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.22, 10), M.arrow); cyl.position.y = 0.4; cone.rotation.x = Math.PI; g.add(cyl, cone); det.add(g); arrows.push({g, x: -W / 2 + (i + 0.5) * W / NA, z}); }
  const block = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.9, 1.4), M.load); det.add(block);

  const apply0 = exploder(parts);
  /** u: how far the bands have come apart; zoom: how far we have zoomed in (the detail fades in); cut: how far the cutaway has opened; w: displacement function of xi (m); amp: visual amplification; load info */
  function update(u, zoom, w, amp, P, xp, q, kScale, cut = 0) {
    apply0(u);
    const ce = smooth(cut); clip.constant = ce < 0.002 ? 1e4 : 62 * (1 - ce);
    const pos = slab.geometry.attributes.position, col = slab.geometry.attributes.color, base0 = test.base; let wm = 1e-9;
    for (let i = 0; i < pos.count; i++) wm = Math.max(wm, Math.abs(w(Math.min(1, Math.max(0, base0[i * 3] / W + 0.5)))));
    for (let i = 0; i < pos.count; i++) {
      const bx = base0[i * 3], by = base0[i * 3 + 1], bz = base0[i * 3 + 2], xi = Math.min(1, Math.max(0, bx / W + 0.5)), d = w(xi) * amp, t = Math.min(1, w(xi) / wm);
      pos.setXYZ(i, bx, by - d, bz); col.setXYZ(i, 0.35 + 0.65 * t, 0.55 + 0.1 * (1 - t) - 0.3 * t, 0.95 - 0.7 * t);
    }
    pos.needsUpdate = true; col.needsUpdate = true; slab.geometry.computeVertexNormals();
    const k = smooth(zoom); det.visible = k > 0.01; M.spring.opacity = k * 0.95; M.arrow.opacity = k * 0.9;
    for (const s of springs) { const d = w(s.x / W + 0.5) * amp; s.line.scale.y = Math.max(0.2, 1.3 - d); }
    for (const a of arrows) { a.g.position.set(a.x, T / 2 + 0.45 - w(a.x / W + 0.5) * amp, a.z); a.g.visible = q > 0; }
    block.visible = P > 0; block.position.set((xp - 0.5) * W, T / 2 + 0.45 - w(xp) * amp, 0); block.scale.setScalar(0.7 + Math.min(1.2, P / 80e3));
  }
  return {root, parts, meshes, update, test, size: 828, yTest, W, D, H: FH, top: 828};
}
