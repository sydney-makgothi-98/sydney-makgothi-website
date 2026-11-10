// Sheet-metal parts: flat plates joined at bend lines. A part is shown formed, and "decomposing" it means unfolding it to its flat pattern, which is how
// sheet metal is cut before it is bent. Plates are drawn from the Solid Edge drawings (main dimensions in millimetres, then scaled: one unit = 100 mm); proportions
// the drawings do not dimension are estimated from the views. Each plate is extruded to the sheet thickness; bend radii are left sharp.
import {THREE, V3, mat, smooth} from '../kit.js';

const rr = (x0, y0, x1, y1, r = 0) => { // rounded rectangle outline as points
  if (!r) return [[x0, y0], [x1, y0], [x1, y1], [x0, y1]];
  const pts = [], arc = (cx, cy, a0) => { for (let i = 0; i <= 5; i++) { const a = a0 + i * Math.PI / 10; pts.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]); } };
  arc(x1 - r, y0 + r, -Math.PI / 2); arc(x1 - r, y1 - r, 0); arc(x0 + r, y1 - r, Math.PI / 2); arc(x0 + r, y0 + r, Math.PI); return pts;
};
const lugEnd = (x0, x1, y0, y1, r, side) => { // a plate that ends in a full semicircle on the free side
  const pts = [];
  if (side > 0) { pts.push([x0, y0], [x1 - r, y0]); for (let i = 0; i <= 12; i++) { const a = -Math.PI / 2 + i * Math.PI / 12; pts.push([x1 - r + r * Math.cos(a), (y0 + y1) / 2 + r * Math.sin(a)]); } pts.push([x0, y1]); }
  else { pts.push([x1, y0], [x0 + r, y0]); for (let i = 0; i <= 12; i++) { const a = -Math.PI / 2 - i * Math.PI / 12; pts.push([x0 + r + r * Math.cos(a), (y0 + y1) / 2 + r * Math.sin(a)]); } pts.push([x1, y1]); }
  return pts;
};

/** spec: {thickness, plates:[{id, num, name, desc, outline, holes, slots, parent, edge, at, bend}]}; all lengths in mm. */
export function buildSheet(spec, {lite = false} = {}) {
  const S = 0.01, t = spec.thickness * S, root = new THREE.Group(), parts = [], meshes = [], byId = {}, hinges = [];
  const M = {
    sheet: mat(spec.color || '#cbd2e1', {metalness: 0.85, roughness: 0.32, clearcoat: 0.3, side: THREE.DoubleSide, envMapIntensity: 1.2}),
    edge: mat('#a78bfa', {metalness: 0.9, roughness: 0.3}),
  };
  for (const p of spec.plates) {
    const outline = p.outline.map(([x, y]) => [x * S, y * S]), shape = new THREE.Shape(); outline.forEach(([x, y], i) => (i ? shape.lineTo(x, y) : shape.moveTo(x, y))); shape.closePath();
    for (const h of p.holes || []) { const pa = new THREE.Path(); pa.absarc(h.x * S, h.y * S, h.r * S, 0, Math.PI * 2, true); shape.holes.push(pa); }
    for (const s of p.slots || []) { const pa = new THREE.Path(), r = Math.min(s.r ?? 0, s.w / 2, s.h / 2) * S, x0 = (s.x - s.w / 2) * S, x1 = (s.x + s.w / 2) * S, y0 = (s.y - s.h / 2) * S, y1 = (s.y + s.h / 2) * S;
      pa.moveTo(x0 + r, y0); pa.lineTo(x1 - r, y0); pa.absarc(x1 - r, y0 + r, r, -Math.PI / 2, 0, false); pa.lineTo(x1, y1 - r); pa.absarc(x1 - r, y1 - r, r, 0, Math.PI / 2, false); pa.lineTo(x0 + r, y1); pa.absarc(x0 + r, y1 - r, r, Math.PI / 2, Math.PI, false); pa.lineTo(x0, y0 + r); pa.absarc(x0 + r, y0 + r, r, Math.PI, Math.PI * 1.5, false); shape.holes.push(pa); }
    const geo = new THREE.ExtrudeGeometry(shape, {depth: t, bevelEnabled: false, curveSegments: lite ? 6 : 14}); geo.translate(0, 0, -t / 2);
    const group = new THREE.Group(), bend = new THREE.Group(), mesh = new THREE.Mesh(geo, M.sheet); mesh.userData.part = p.id; bend.add(mesh); group.add(bend);
    const xs = p.outline.map((q) => q[0]), ys = p.outline.map((q) => q[1]), ext = {x0: Math.min(...xs), x1: Math.max(...xs), y0: Math.min(...ys), y1: Math.max(...ys)};
    const q = {id: p.id, num: p.num, name: p.name, desc: p.desc, group, bendG: bend, meshes: [mesh], ext, spec: p}; byId[p.id] = q; parts.push(q); meshes.push(mesh);
  }
  for (const q of parts) {
    const p = q.spec;
    if (!p.parent) { root.add(q.group); continue; }
    const par = byId[p.parent], e = par.ext, at = (p.at ?? 0) * S, h = new THREE.Group();
    const place = {back: [at, e.y1 * S, 0, 0], front: [at, e.y0 * S, 0, Math.PI], left: [e.x0 * S, at, 0, Math.PI / 2], right: [e.x1 * S, at, 0, -Math.PI / 2]}[p.edge];
    q.group.position.set(place[0], place[1], 0); q.group.rotation.z = place[3]; par.bendG.add(q.group);
    hinges.push({bend: q.bendG, angle: (p.bend ?? 90) * Math.PI / 180});
  }
  function setU(u) { const k = 1 - smooth(u); for (const h of hinges) h.bend.rotation.x = h.angle * k; }
  setU(0);
  const bbox = new THREE.Box3().setFromObject(root), c = bbox.getCenter(new V3()), size = bbox.getSize(new V3());
  const wrap = new THREE.Group(); wrap.add(root); root.position.set(-c.x, -c.y, 0); wrap.rotation.x = -Math.PI / 2;           // stand the part so the sheet normal of the base points up
  return {root: wrap, parts, meshes, setU, size: Math.max(size.x, size.y, size.z)};
}

/* ---- Bracket.pdf: base, a back wall with a 70 mm hole and four 7 mm holes, two mounting ears with 25 mm radius ends, two triangular side gussets ---- */
const W1 = 196.87, D1 = 122, H1 = 88;
export const BRACKET = {
  thickness: 3, color: '#cdd5e6',
  plates: [
    {id: 'base', num: 1, name: 'Base plate', desc: 'The flat foot of the bracket, 196.87 mm wide. The back wall, the gussets and the mounting ears all grow from its edges.', outline: rr(-W1 / 2, -D1 / 2, W1 / 2, D1 / 2), holes: [{x: -W1 / 2 + 27, y: -30, r: 3.5}, {x: W1 / 2 - 27, y: -30, r: 3.5}, {x: -W1 / 2 + 27, y: 30, r: 3.5}, {x: W1 / 2 - 27, y: 30, r: 3.5}], slots: [{x: -62, y: -D1 / 2 + 14, w: 10, h: 24.63, r: 3}, {x: 62, y: -D1 / 2 + 14, w: 10, h: 24.63, r: 3}]},
    {id: 'wall', num: 2, name: 'Back wall (88 mm)', desc: 'Bent up 90° from the base. It carries the 70 mm bore for the shaft or bearing and four 7 mm fixing holes spaced 81.24 mm apart.', outline: rr(-W1 / 2, 0, W1 / 2, H1), holes: [{x: -W1 / 2 + 27, y: H1 / 2 - 40.62, r: 3.5}, {x: -W1 / 2 + 27, y: H1 / 2 + 40.62 - 1, r: 3.5}, {x: W1 / 2 - 27, y: H1 / 2 - 40.62, r: 3.5}, {x: W1 / 2 - 27, y: H1 / 2 + 40.62 - 1, r: 3.5}, {x: 2.9, y: H1 / 2, r: 35}], parent: 'base', edge: 'back', bend: 90},
    {id: 'earL', num: 3, name: 'Mounting ear', desc: 'A flat lug with a full 25 mm radius end and a clearance hole, extending 57.6 mm beyond the body so the bracket can be bolted down.', outline: lugEnd(-59.5, 0, -25, 25, 25, -1), holes: [{x: -59.5 + 25, y: 0, r: 9}], parent: 'base', edge: 'left', bend: 0},
    {id: 'earR', num: 3, name: 'Mounting ear', desc: 'The second lug, mirrored.', outline: lugEnd(0, 59.5, -25, 25, 25, 1), holes: [{x: 59.5 - 25, y: 0, r: 9}], parent: 'base', edge: 'right', bend: 0},
    {id: 'gusL', num: 4, name: 'Side gusset', desc: 'A triangular flange bent 90° forward from the side edge of the back wall. It braces the wall against the base, and in the flat pattern it sits beside the wall, clear of the ears.', outline: [[-H1 / 2, 0], [H1 / 2, 0], [-H1 / 2, D1 * 0.85]], holes: [{x: -H1 / 2 + 22, y: 22, r: 3.5}], parent: 'wall', edge: 'left', at: H1 / 2, bend: 90},
    {id: 'gusR', num: 4, name: 'Side gusset', desc: 'The matching gusset on the other side.', outline: [[-H1 / 2, 0], [H1 / 2, 0], [H1 / 2, D1 * 0.85]], holes: [{x: H1 / 2 - 22, y: 22, r: 3.5}], parent: 'wall', edge: 'right', at: H1 / 2, bend: 90},
  ],
};
/* ---- Complex Bracket.pdf: a 400 x 200 mm face with a 210 mm slot, a bottom flange along the left, a box-section flange on the right with a 62 mm return ---- */
export const COMPLEX = {
  thickness: 2, color: '#d3d8e8',
  plates: [
    {id: 'face', num: 1, name: 'Face plate (400 × 200)', desc: 'The main plate: chamfered top corners, a 210 mm slot with 15 mm corner radii that lightens it and passes cables, a rounded cut-out at the lower left, and eight 10 mm holes.',
      outline: [[-200, 0], [-200, 63], [-141, 141.5], [-60, 200], [60, 200], [139, 141.5], [200, 63], [200, 0]],
      slots: [{x: 0, y: 101, w: 210, h: 62, r: 15}, {x: -160, y: 30, w: 56, h: 40, r: 10}], holes: [{x: -148, y: 141, r: 4}, {x: -131, y: 141, r: 4}, {x: 131, y: 141, r: 4}, {x: 148, y: 141, r: 4}, {x: -30, y: 182, r: 4}, {x: 30, y: 182, r: 4}]},
    {id: 'flangeL', num: 2, name: 'Left flange (80 mm)', desc: 'A bottom flange bent 90° forward from the left end of the face, 80 mm wide, with two fixing holes.', outline: rr(-40, 0, 40, 118), holes: [{x: -20, y: 20, r: 5}, {x: 20, y: 20, r: 5}], parent: 'face', edge: 'front', at: -160, bend: -90},
    {id: 'flangeR', num: 3, name: 'Right flange (118 mm deep)', desc: 'The right-hand foot of the bracket: a flange 118 mm deep with a rounded 56 mm cut-out, ending in a return.', outline: rr(-59, 0, 59, 118), slots: [{x: 0, y: 59, w: 56, h: 80, r: 10}], holes: [{x: -35, y: 14, r: 5}, {x: 35, y: 14, r: 5}], parent: 'face', edge: 'front', at: 141, bend: -90},
    {id: 'lip', num: 4, name: 'Return lip (62 mm)', desc: 'Turned up 62 mm from the far edge of the right flange. It makes the foot a stiff channel and carries two 10 mm bolt holes.', outline: rr(-59, 0, 59, 62), holes: [{x: -20, y: 31, r: 5}, {x: 20, y: 31, r: 5}], parent: 'flangeR', edge: 'back', bend: 90},
  ],
};
/* ---- Sheet Cover Drawing.pdf: a louvred cover: top plate with eight slots, two side walls, foot flanges with 8 mm holes, an angled hem ---- */
export const COVER = {
  thickness: 2, color: '#c9d1e2',
  plates: [
    {id: 'top', num: 1, name: 'Top plate (119 × 94)', desc: 'The face of the cover. Eight slots with 5 mm end radii are punched in it as louvres so air can pass while the cover keeps dust and fingers out.', outline: rr(-59.5, -47, 59.5, 47), slots: Array.from({length: 8}, (_, i) => ({x: -49 + i * 14, y: 0, w: 8, h: 54.21, r: 4})).concat([{x: 0, y: 36, w: 10, h: 10, r: 1}])},
    {id: 'sideL', num: 2, name: 'Side wall', desc: 'A wall 46 mm high bent down from the top plate, giving the cover its depth.', outline: rr(-47, 0, 47, 46), parent: 'top', edge: 'left', bend: 90},
    {id: 'sideR', num: 2, name: 'Side wall', desc: 'The matching wall on the other side.', outline: rr(-47, 0, 47, 46), parent: 'top', edge: 'right', bend: 90},
    {id: 'footL', num: 3, name: 'Foot flange', desc: 'A flange bent outward at the bottom of the wall, with 8 mm mounting holes, so the cover bolts flat to the chassis.', outline: rr(-47, 0, 47, 33.33), holes: [{x: -28, y: 16, r: 4}, {x: 28, y: 16, r: 4}], parent: 'sideL', edge: 'back', bend: -90},
    {id: 'footR', num: 3, name: 'Foot flange', desc: 'The flange on the other side.', outline: rr(-47, 0, 47, 33.33), holes: [{x: -28, y: 16, r: 4}, {x: 28, y: 16, r: 4}], parent: 'sideR', edge: 'back', bend: -90},
    {id: 'hem', num: 4, name: 'Angled hem', desc: 'A 20 mm flange folded at an angle along the front edge: it stiffens the edge and removes the sharp cut.', outline: rr(-59.5, 0, 59.5, 20, 2.5), parent: 'top', edge: 'back', bend: 135},
  ],
};
