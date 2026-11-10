// A light aircraft in two states: the finished body (skin, canopy, wings, tail) and its internal structure (fuselage rings and stringers, wing ribs with
// lightening holes, spars). Also the wing box on its own. Axis: x forward is -x here (nose at the left), y up, z along the span. One unit = 1 m.
import {THREE, V3, mat, loft, plate, exploder} from '../kit.js';

export const AIRFRAME_INFO = {
  skinTop: ['Upper fuselage skin', 'The aerodynamic skin. It is thin, so it carries the pressure load and shear but little bending; the frames and stringers underneath keep it from buckling.'],
  skinBot: ['Lower fuselage skin', 'Closes the underside and carries the wing-root and landing loads into the frames.'],
  canopy: ['Canopy', 'A bubble of transparent acrylic: a compromise between pilot visibility, drag and structural integrity at the cut-out.'],
  wingSkin: ['Wing skins', 'Upper and lower skins form the closed box that resists torsion; their thickness is set by the shear flow around it.'],
  tail: ['Empennage', 'Horizontal and vertical tail: they restore the aircraft’s pitch and yaw stability, sized by tail volume coefficients.'],
  rings: ['Fuselage frames', 'Elliptical rings that hold the fuselage shape and pass loads between the skin, stringers and wing carry-through.'],
  stringers: ['Stringers', 'Longitudinal stiffeners that carry the fuselage bending load as axial stress and stabilise the skin.'],
  ribs: ['Wing ribs', 'Hold the aerofoil shape and spread load from the skin into the spars. The lightening holes remove weight without losing the web’s shear capacity.'],
  spars: ['Wing spars', 'The main beams of the wing: the flanges carry bending as tension and compression, the webs carry shear.'],
  prop: ['Spinner and propeller', 'Converts engine power to thrust. The spinner smooths the flow into the hub.'],
  skinUp: ['Upper wing skin', 'Carries compression from wing bending, so it is stiffened by stringers against buckling.'],
  skinLo: ['Lower wing skin', 'Carries tension from wing bending; fatigue, not buckling, sets its size.'],
  stringersW: ['Skin stringers', 'Thin sections bonded to the skin that stop it buckling between the ribs.'],
};

// NACA four-digit section: max camber m at position p, thickness t. Returns the y of the upper or lower surface at chord fraction x.
const naca = (x, upper, m = 0.04, p = 0.4, t = 0.12) => {
  const yt = 5 * t * (0.2969 * Math.sqrt(x) - 0.126 * x - 0.3516 * x * x + 0.2843 * x ** 3 - 0.1015 * x ** 4);
  const yc = x < p ? m / (p * p) * (2 * p * x - x * x) : m / ((1 - p) ** 2) * ((1 - 2 * p) + 2 * p * x - x * x);
  return yc + (upper ? yt : -yt);
};
const airfoilOutline = (n = 28, chord = 1) => { const o = []; for (let i = 0; i <= n; i++) { const x = 1 - i / n; o.push([x * chord, naca(x, true) * chord]); } for (let i = 1; i <= n; i++) { const x = i / n; o.push([x * chord, naca(x, false) * chord]); } return o; };

export function buildAirframe({lite = false} = {}) {
  const root = new THREE.Group(), parts = [], meshes = [], seg = lite ? 24 : 48;
  const M = {
    skin: mat('#e7e9f2', {metalness: 0.2, roughness: 0.28, clearcoat: 0.8, clearcoatRoughness: 0.2, side: THREE.DoubleSide}),
    accent: mat('#a78bfa', {metalness: 0.3, roughness: 0.3, clearcoat: 0.6, side: THREE.DoubleSide}),
    glass: mat('#a3c4ff', {roughness: 0.05, metalness: 0.1, transparent: true, opacity: 0.35, side: THREE.DoubleSide, clearcoat: 1}),
    frame: mat('#8b93a8', {metalness: 0.9, roughness: 0.38, side: THREE.DoubleSide}),
    rib: mat('#c3c9d8', {metalness: 0.7, roughness: 0.4, side: THREE.DoubleSide}),
    spar: mat('#e879f9', {metalness: 0.6, roughness: 0.35}),
    steel: mat('#d3d8e0', {metalness: 1, roughness: 0.25}),
    dark: mat('#161a24', {metalness: 0.4, roughness: 0.5}),
  };
  const part = (id, out, a = 0, b = 1) => { const group = new THREE.Group(); root.add(group); const [name, desc] = AIRFRAME_INFO[id]; const p = {id, num: parts.length + 1, name, desc, group, out, a, b, meshes: []}; parts.push(p); return p; };
  const add = (p, geo, m, pos = [0, 0, 0], rot = [0, 0, 0]) => { const mesh = new THREE.Mesh(geo, m); mesh.position.set(...pos); mesh.rotation.set(...rot); mesh.userData.part = p.id; p.group.add(mesh); p.meshes.push(mesh); meshes.push(mesh); return mesh; };
  const LEN = 8.2, x0 = -0.1;
  // fuselage section: half-width and half-height along its length t (0 = nose, 1 = tail)
  const prof = (t) => { const nose = Math.pow(Math.sin(Math.min(1, t / 0.28) * Math.PI / 2), 0.75), tail = t < 0.5 ? 1 : Math.pow(1 - (t - 0.5) / 0.5, 0.85) * 0.92 + 0.08; return {w: 0.46 * nose * tail, h: 0.52 * nose * (0.25 + 0.75 * tail), yc: 0.04 * (t - 0.2) * (t > 0.5 ? 1.6 : 1)}; };
  const sect = (t, a, k = 2.6) => { const {w, h, yc} = prof(t), c = Math.cos(a), s = Math.sin(a); return [yc + h * Math.sign(s) * Math.pow(Math.abs(s), 2 / k), w * Math.sign(c) * Math.pow(Math.abs(c), 2 / k)]; };
  const halfLoft = (top) => { const g = loft((t, a) => sect(t, top ? a / 2 : Math.PI + a / 2), LEN, seg, 30, 0); return g; };
  const skinTop = part('skinTop', [0, 3.4, 0], 0.35, 1); add(skinTop, halfLoft(true), M.skin, [x0, 0, 0]);
  const skinBot = part('skinBot', [0, -2.6, 0], 0.35, 1); add(skinBot, halfLoft(false), M.skin, [x0, 0, 0]);
  const canopy = part('canopy', [0.8, 4.4, 0], 0.2, 0.9); { const g = new THREE.SphereGeometry(1, seg, 20); const m = add(canopy, g, M.glass, [x0 + 0.42 * LEN, 0.5, 0]); m.scale.set(1.15, 0.42, 0.34); }
  // wings
  const span = 4.6, root_ = 1.5, tip = 0.8, z0 = 0.4, sweep = 0.12, nr = 9, wx0 = x0 + 0.34 * LEN;
  const chord = (z) => root_ + (tip - root_) * (z - z0) / (span - z0), leX = (z) => wx0 + sweep * (z - z0) / (span - z0);
  const wingSurf = (upper, side) => {
    const nz = lite ? 8 : 16, nc = lite ? 14 : 28, pos = [], idx = [];
    for (let i = 0; i <= nz; i++) { const z = z0 + (span - z0) * i / nz, c = chord(z); for (let j = 0; j <= nc; j++) { const xc = Math.pow(j / nc, 1.6); pos.push(leX(z) + c * xc, naca(xc, upper) * c + 0.0, z * side); } }
    for (let i = 0; i < nz; i++) for (let j = 0; j < nc; j++) { const a = i * (nc + 1) + j, b = a + nc + 1; idx.push(a, b, a + 1, b, b + 1, a + 1); }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals(); return g;
  };
  const wingSkin = part('wingSkin', [0, 3.0, 0], 0.15, 1); for (const s of [1, -1]) { add(wingSkin, wingSurf(true, s), M.skin); }
  { const lowerPart = part('skinLo', [0, -2.0, 0], 0.15, 1); for (const s of [1, -1]) add(lowerPart, wingSurf(false, s), M.skin); }
  // wing tips: violet caps for an accent
  for (const s of [1, -1]) { const c = chord(span); const m = add(wingSkin, new THREE.SphereGeometry(0.06, 12, 8), M.accent, [leX(span) + c * 0.4, 0.0, span * s]); m.scale.set(c * 5, 0.5, 1); }
  // tail: vertical fin and horizontal stabiliser as thin extruded sections
  const tail = part('tail', [1.6, 3.0, 0], 0.2, 1); {
    const tx = x0 + 0.86 * LEN, fin = new THREE.Shape(); fin.moveTo(0, 0); fin.lineTo(0.9, 0); fin.lineTo(0.5, 1.0); fin.lineTo(0.12, 1.0); fin.closePath();
    const fg = new THREE.ExtrudeGeometry(fin, {depth: 0.05, bevelEnabled: false}); fg.translate(0, 0, -0.025); add(tail, fg, M.skin, [tx - 0.4, 0.3, 0]);
    for (const s of [1, -1]) { const hs = new THREE.Shape(); hs.moveTo(0, 0); hs.lineTo(0.7, 0); hs.lineTo(0.5, 1.35); hs.lineTo(0.15, 1.35); hs.closePath(); const g2 = new THREE.ExtrudeGeometry(hs, {depth: 0.04, bevelEnabled: false}); g2.rotateX(Math.PI / 2); g2.translate(0, 0.0, 0); add(tail, g2, M.skin, [tx - 0.2, 0.22, 0], [0, 0, 0]).scale.z = s; }
  }
  // spinner and propeller
  const prop = part('prop', [-2.8, 0, 0], 0, 0.7); { const pts = []; for (let i = 0; i <= 12; i++) { const t = i / 12; pts.push(new THREE.Vector2(0.2 * Math.sin(Math.min(1, t) * Math.PI / 2) + 0.001, 0.55 * t - 0.0)); } add(prop, new THREE.LatheGeometry(pts, 24).rotateZ(Math.PI / 2), M.accent, [x0 - 0.5, 0.0, 0]); for (const s of [1, -1]) { const bl = new THREE.Mesh(new THREE.BoxGeometry(0.03, 1.5, 0.12), M.dark); bl.position.set(x0 - 0.15, 0.78 * s, 0); bl.userData.part = 'prop'; prop.group.add(bl); prop.meshes.push(bl); meshes.push(bl); } }
  // structure: frames, stringers, ribs and spars
  const rings = part('rings', [0, 0, 0], 0.55, 1), str = part('stringers', [0, 0, 0], 0.55, 1);
  const stations = [0.1, 0.18, 0.27, 0.36, 0.46, 0.56, 0.66, 0.76, 0.86];
  for (const t of stations) { const pts = []; for (let i = 0; i < 40; i++) { const a = i / 40 * Math.PI * 2, [y, z] = sect(t, a); pts.push(new V3(0, y, z)); } add(rings, new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts, true), 40, 0.018, 5, true), M.frame, [x0 + t * LEN, 0, 0]); }
  for (let j = 0; j < 10; j++) { const a = (j + 0.5) / 10 * Math.PI * 2, pts = []; for (let i = 0; i <= 24; i++) { const t = 0.06 + 0.84 * i / 24, [y, z] = sect(t, a); pts.push(new V3(x0 + t * LEN, y, z)); } add(str, new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 24, 0.012, 4), M.frame); }
  const ribs = part('ribs', [0, 0, 0], 0.5, 1), spars = part('spars', [0, 0, 0], 0.5, 1), strW = part('stringersW', [0, 0, 0], 0.5, 1);
  const zs = Array.from({length: nr}, (_, i) => z0 + (span - z0) * i / (nr - 1));
  for (const s of [1, -1]) for (const z of zs) {
    const c = chord(z), out = airfoilOutline(24, c).map(([x, y]) => [x, y]), holes = [{x: 0.32 * c, y: 0, r: 0.1 * c * 0.7}, {x: 0.62 * c, y: 0, r: 0.07 * c * 0.7}].filter((h) => h.r > 0.032);
    const g = plate(out, holes, 0.02); add(ribs, g, M.rib, [leX(z), 0, z * s]);
  }
  for (const [xc, w] of [[0.25, 0.04], [0.65, 0.03]]) for (const s of [1, -1]) {
    const pos = [], idx = [], n = 8;
    for (let i = 0; i <= n; i++) { const z = z0 + (span - z0) * i / n, c = chord(z), x = leX(z) + c * xc, yu = naca(xc, true) * c, yl = naca(xc, false) * c; pos.push(x, yu, z * s, x, yl, z * s); }
    for (let i = 0; i < n; i++) { const a = i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals(); add(spars, g, M.spar);
    for (const yy of [1, -1]) { const g2 = new THREE.BoxGeometry(w * 1.2, 0.015, span - z0); g2.translate(0, 0, (span - z0) / 2 + z0); const pts = []; add(spars, new THREE.BoxGeometry(0.05, 0.02, (span - z0)), M.spar, [leX((z0 + span) / 2) + chord((z0 + span) / 2) * xc, (naca(xc, yy > 0) * chord((z0 + span) / 2)), ((z0 + span) / 2) * s]); }
  }
  // spanwise stringers under the skin
  for (const s of [1, -1]) for (const xc of [0.12, 0.4, 0.8]) for (const up of [true, false]) { const mz = (z0 + span) / 2; add(strW, new THREE.BoxGeometry(0.02, 0.02, span - z0), M.frame, [leX(mz) + chord(mz) * xc, naca(xc, up) * chord(mz) * (up ? 0.97 : 0.97), mz * s]); }
  // explode: frames spread along the body, ribs along the span
  const apply0 = exploder(parts);
  const ribGroups = ribs.meshes, ringMeshes = rings.meshes, ribHome = ribs.meshes.map((m) => m.position.clone()), ringHome = rings.meshes.map((m) => m.position.clone());
  const setU = (u) => {
    apply0(u);
    const e = Math.min(1, Math.max(0, (u - 0.3) / 0.7)), k = e * e * (3 - 2 * e);
    ribs.meshes.forEach((m, i) => { m.position.z = ribHome[i].z * (1 + 0.6 * k); });
    rings.meshes.forEach((m, i) => { m.position.x = x0 + (ringHome[i].x - x0 - LEN / 2) * (1 + 0.95 * k) + LEN / 2; });
  };
  root.position.set(-LEN / 2 + 0.3, 0, 0);
  return {root, parts, meshes, setU, size: 10.5, center: new V3(0, 0, 0)};
}

/** The wing box on its own: seven ribs, three spars, upper and lower skins with stringers, taken apart along the span. */
export function buildWingBox({lite = false} = {}) {
  const root = new THREE.Group(), parts = [], meshes = [];
  const M = {
    skin: mat('#e1e5ef', {metalness: 0.2, roughness: 0.3, clearcoat: 0.7, side: THREE.DoubleSide, transparent: true, opacity: 0.9}),
    rib: mat('#c3c9d8', {metalness: 0.7, roughness: 0.4, side: THREE.DoubleSide}),
    spar: mat('#e879f9', {metalness: 0.6, roughness: 0.35, side: THREE.DoubleSide}),
    frame: mat('#8b93a8', {metalness: 0.9, roughness: 0.38}),
  };
  const part = (id, name, desc, out, a = 0, b = 1) => { const group = new THREE.Group(); root.add(group); const p = {id, num: parts.length + 1, name, desc, group, out, a, b, meshes: []}; parts.push(p); return p; };
  const add = (p, geo, m, pos = [0, 0, 0], rot = [0, 0, 0]) => { const mesh = new THREE.Mesh(geo, m); mesh.position.set(...pos); mesh.rotation.set(...rot); mesh.userData.part = p.id; p.group.add(mesh); p.meshes.push(mesh); meshes.push(mesh); return mesh; };
  const span = 6, c0 = 2.2, c1 = 1.5, chord = (z) => c0 + (c1 - c0) * z / span, nr = 7;
  const up = part('up', 'Upper skin', AIRFRAME_INFO.skinUp[1], [0, 3.0, 0], 0.1, 1), lo = part('lo', 'Lower skin', AIRFRAME_INFO.skinLo[1], [0, -2.6, 0], 0.1, 1), ribs = part('ribs', 'Ribs', AIRFRAME_INFO.ribs[1], [0, 0, 0], 0.3, 1), spars = part('spars', 'Spars', AIRFRAME_INFO.spars[1], [0, 0, 0], 0.3, 1), st = part('st', 'Skin stringers', AIRFRAME_INFO.stringersW[1], [0, 1.6, 0], 0.1, 1);
  const surf = (upper) => { const nz = 14, nc = lite ? 14 : 28, pos = [], idx = []; for (let i = 0; i <= nz; i++) { const z = span * i / nz, c = chord(z); for (let j = 0; j <= nc; j++) { const xc = 0.12 + 0.6 * j / nc; pos.push(xc * c, naca(xc, upper) * c, z); } } for (let i = 0; i < nz; i++) for (let j = 0; j < nc; j++) { const a = i * (nc + 1) + j, b = a + nc + 1; idx.push(a, b, a + 1, b, b + 1, a + 1); } const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals(); return g; };
  add(up, surf(true), M.skin); add(lo, surf(false), M.skin);
  const ribZ = [];
  for (let i = 0; i < nr; i++) {
    const z = span * i / (nr - 1), c = chord(z), o = []; for (let k = 0; k <= 22; k++) { const xc = 0.12 + 0.6 * (1 - k / 22); o.push([xc * c, naca(xc, true) * c]); } for (let k = 1; k <= 22; k++) { const xc = 0.12 + 0.6 * k / 22; o.push([xc * c, naca(xc, false) * c]); }
    const g = plate(o, [{x: 0.28 * c, y: 0.0, r: 0.085 * c}, {x: 0.5 * c, y: 0.0, r: 0.06 * c}, {x: 0.36 * c, y: -0.05 * c, r: 0.022 * c}, {x: 0.58 * c, y: -0.02 * c, r: 0.02 * c}], 0.04); add(ribs, g, M.rib, [0, 0, z]); ribZ.push(z);
  }
  for (const xc of [0.2, 0.42, 0.66]) { const pos = [], idx = [], n = 10; for (let i = 0; i <= n; i++) { const z = span * i / n, c = chord(z); pos.push(xc * c, naca(xc, true) * c, z, xc * c, naca(xc, false) * c, z); } for (let i = 0; i < n; i++) { const a = i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); } const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals(); add(spars, g, M.spar); for (const yy of [true, false]) add(spars, new THREE.BoxGeometry(0.1, 0.03, span), M.spar, [xc * chord(span / 2), naca(xc, yy) * chord(span / 2), span / 2]); }
  for (const xc of [0.3, 0.45, 0.58]) for (const upper of [true, false]) add(st, new THREE.BoxGeometry(0.03, 0.03, span), M.frame, [xc * chord(span / 2), naca(xc, upper) * chord(span / 2) * 0.96, span / 2]);
  const apply0 = exploder(parts), ribHome = ribs.meshes.map((m) => m.position.clone());
  const setU = (u) => { apply0(u); const e = Math.min(1, Math.max(0, (u - 0.25) / 0.75)), k = e * e * (3 - 2 * e); ribs.meshes.forEach((m, i) => { m.position.z = ribHome[i].z * (1 + 0.9 * k) - 0.45 * span * 0.9 * k * 0; }); };
  root.position.set(-1.4, 0, -span / 2);
  return {root, parts, meshes, setU, size: 8.5, center: new V3(0, 0, 0)};
}
