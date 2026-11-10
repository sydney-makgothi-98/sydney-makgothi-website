// The kitchen set and the five ingredients, as three.js geometry. Pure scenery: nothing here decides where anything goes
// (mission.js does that). Table coordinates: x forward, z to the left; three.js z is the mirror, see wz().
import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {K, ITEMS} from './mission.js';

export const wz = (z) => -z;
const V3 = THREE.Vector3;
let seed = 11; const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };

function canvasTex(w, h, draw, srgb = true, repeat) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  if (repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(...repeat); }
  return t;
}
const phys = (color, o = {}) => new THREE.MeshPhysicalMaterial({color, roughness: 0.5, metalness: 0, ...o});
function shadow(m) { m.castShadow = m.receiveShadow = true; return m; }
function lathe(pts, mat, seg = 40) { return shadow(new THREE.Mesh(new THREE.LatheGeometry(pts.map(([r, y]) => new THREE.Vector2(r, y)), seg), mat)); }

/** A small standing sign facing the camera's side of the table (model +z), text reading left to right as seen from there. */
function board(text, w, h, o = {}) {
  const g = new THREE.Group();
  const tex = canvasTex(512, Math.round(512 * h / w), (c, W, H) => {
    c.fillStyle = o.bg || '#161c3e'; c.fillRect(0, 0, W, H);
    c.strokeStyle = o.color || '#a78bfa'; c.lineWidth = 6; c.strokeRect(5, 5, W - 10, H - 10);
    c.fillStyle = o.color || '#a78bfa'; c.font = `700 ${o.px || 0.52 * H}px "Chakra Petch", "JetBrains Mono", sans-serif`; c.textAlign = 'center'; c.textBaseline = 'middle';
    if (o.spacing) c.letterSpacing = o.spacing;
    c.fillText(text, W / 2, H / 2 + 3);
  });
  const back = shadow(new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.004), phys('#2a2f55', {roughness: 0.6})));
  const face = new THREE.Mesh(new THREE.PlaneGeometry(w - 0.002, h - 0.002), new THREE.MeshBasicMaterial({map: tex, toneMapped: false}));
  face.rotation.y = Math.PI; face.position.z = -0.0022;
  g.add(back, face); g.position.y = h / 2 + 0.002;
  return g;
}

/* ------------------------------------------------------------------------------------------------------ the items */
/** Each builder returns a group with its base at y = 0, centred on the origin, long axis along +x (the way the claw faces). */
const BUILD = {
  eggs() {                                                          // a two-egg pulp carton, open
    const g = new THREE.Group();
    const pulp = canvasTex(128, 128, (c, w, h) => { c.fillStyle = '#a7a094'; c.fillRect(0, 0, w, h); for (let i = 0; i < 2600; i++) { const v = 120 + rnd() * 70; c.fillStyle = `rgba(${v},${v - 8},${v - 20},0.5)`; c.fillRect(rnd() * w, rnd() * h, 2, 2); } }, true, [2, 2]);
    const body = phys('#ffffff', {map: pulp, roughness: 0.95});
    const tray = shadow(new THREE.Mesh(new RoundedBoxGeometry(0.068, 0.020, 0.034, 3, 0.003), body)); tray.position.y = 0.010; g.add(tray);
    for (const dx of [-0.017, 0.017]) {
      const cup = lathe([[0.0, 0.020], [0.0125, 0.020], [0.0135, 0.026], [0.0128, 0.0275], [0.0, 0.0275]], body, 24); cup.position.set(dx, 0, 0); g.add(cup);
      const egg = shadow(new THREE.Mesh(new THREE.SphereGeometry(1, 36, 28), phys('#efe0c6', {roughness: 0.42, clearcoat: 0.25, clearcoatRoughness: 0.5})));
      egg.scale.set(0.0146, 0.0212, 0.0146); egg.position.set(dx, 0.0232 + 0.0212 * 0.82, 0); g.add(egg);
    }
    g.userData.top = 0.062; return g;
  },
  salt() {                                                          // glass shaker, chrome cap, white salt
    const g = new THREE.Group();
    const glass = phys('#d8ecff', {transparent: true, opacity: 0.28, roughness: 0.04, clearcoat: 1, clearcoatRoughness: 0.02, side: THREE.DoubleSide, depthWrite: false, envMapIntensity: 1.6});
    g.add(lathe([[0, 0], [0.0155, 0], [0.0175, 0.004], [0.018, 0.012], [0.018, 0.050], [0.0165, 0.057], [0.0150, 0.059]], glass));
    const salt = phys('#f4f4f2', {roughness: 0.95}); g.add(lathe([[0, 0.002], [0.0165, 0.002], [0.0170, 0.012], [0.0170, 0.042], [0, 0.044]], salt, 28));
    const cap = phys('#c9ced6', {metalness: 1, roughness: 0.22, envMapIntensity: 1.4});
    g.add(lathe([[0.0150, 0.056], [0.0160, 0.058], [0.0160, 0.068], [0.0148, 0.0715], [0.0, 0.0715]], cap, 36));
    const holes = []; for (let i = 0; i < 7; i++) { const a = i / 6 * Math.PI * 2, r = i ? 0.0075 : 0; holes.push(new THREE.CircleGeometry(0.0011, 8).rotateX(-Math.PI / 2).translate(Math.cos(a) * r, 0.0717, Math.sin(a) * r)); }
    const hm = new THREE.Mesh(mergeG(holes), new THREE.MeshBasicMaterial({color: '#15171b'})); g.add(hm);
    g.userData.top = 0.072; return g;
  },
  spice() {                                                         // a labelled spice jar, orange powder, black lid
    const g = new THREE.Group();
    const glass = phys('#e4f0ff', {transparent: true, opacity: 0.26, roughness: 0.04, clearcoat: 1, side: THREE.DoubleSide, depthWrite: false, envMapIntensity: 1.5});
    g.add(lathe([[0, 0], [0.0175, 0], [0.019, 0.004], [0.019, 0.050], [0.0175, 0.054]], glass));
    g.add(lathe([[0, 0.002], [0.0178, 0.002], [0.0183, 0.010], [0.0183, 0.046], [0, 0.048]], phys('#c4491a', {roughness: 0.95}), 28));
    const label = canvasTex(256, 96, (c, w, h) => { c.fillStyle = '#f2ead8'; c.fillRect(0, 0, w, h); c.fillStyle = '#9b2c12'; c.fillRect(0, 0, w, 14); c.fillRect(0, h - 14, w, 14); c.fillStyle = '#2a1a10'; c.font = '700 40px "Chakra Petch", sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText('PAPRIKA', w / 2, h / 2 + 2); });
    const lab = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.0194, 0.0194, 0.026, 40, 1, true), phys('#ffffff', {map: label, roughness: 0.7}))); lab.position.y = 0.027; lab.rotation.y = Math.PI / 2; g.add(lab);
    g.add(lathe([[0.0, 0.0535], [0.0200, 0.0535], [0.0205, 0.0545], [0.0205, 0.0645], [0.0190, 0.0660], [0, 0.0660]], phys('#17181c', {roughness: 0.35, clearcoat: 0.6}), 36));
    g.userData.top = 0.066; return g;
  },
  sauce() {                                                         // a squeeze bottle: red, white cap, label
    const g = new THREE.Group();
    const red = phys('#c2181f', {roughness: 0.28, clearcoat: 1, clearcoatRoughness: 0.12});
    g.add(lathe([[0, 0], [0.0175, 0], [0.0200, 0.005], [0.0200, 0.070], [0.0185, 0.082], [0.0120, 0.093], [0.0085, 0.098]], red));
    const label = canvasTex(256, 128, (c, w, h) => { c.fillStyle = '#f6efe2'; c.fillRect(0, 0, w, h); c.fillStyle = '#c2181f'; c.beginPath(); c.arc(w / 2, h / 2, 40, 0, 7); c.fill(); c.fillStyle = '#fff'; c.font = '700 26px "Chakra Petch", sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText('SAUCE', w / 2, h / 2 + 1); });
    const lab = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.0204, 0.0204, 0.034, 40, 1, true), phys('#ffffff', {map: label, roughness: 0.6}))); lab.position.y = 0.040; lab.rotation.y = Math.PI / 2; g.add(lab);
    const cap = phys('#f1efe9', {roughness: 0.4, clearcoat: 0.5});
    g.add(lathe([[0.0, 0.0975], [0.0090, 0.0975], [0.0100, 0.0980], [0.0100, 0.1030], [0.0070, 0.1100], [0.0035, 0.1150], [0, 0.1160]], cap, 32));
    g.userData.top = 0.116; return g;
  },
  glass() {                                                         // a drinking tumbler with some water in it
    const g = new THREE.Group();
    const glass = phys('#dff0ff', {transparent: true, opacity: 0.24, roughness: 0.02, clearcoat: 1, clearcoatRoughness: 0.01, side: THREE.DoubleSide, depthWrite: false, envMapIntensity: 1.8});
    g.add(lathe([[0, 0], [0.0170, 0], [0.0188, 0.003], [0.0200, 0.012], [0.0210, 0.070], [0.0204, 0.0705]], glass));
    g.add(lathe([[0, 0.0045], [0.0150, 0.0045], [0.0172, 0.014], [0.0182, 0.044], [0, 0.044]], phys('#7ec8ff', {transparent: true, opacity: 0.34, roughness: 0.05, depthWrite: false}), 32));
    const rim = new THREE.Mesh(new THREE.TorusGeometry(0.0207, 0.0007, 8, 40), phys('#ffffff', {transparent: true, opacity: 0.5, roughness: 0.05, depthWrite: false})); rim.rotation.x = Math.PI / 2; rim.position.y = 0.0702; g.add(rim);
    g.userData.top = 0.071; return g;
  },
};
function mergeG(geos) {                                             // merge CircleGeometries without the heavy import
  const pos = [], idx = []; let off = 0;
  for (const geo of geos) { const p = geo.attributes.position; for (let i = 0; i < p.count; i++) pos.push(p.getX(i), p.getY(i), p.getZ(i)); for (const i of geo.index.array) idx.push(i + off); off += p.count; }
  const m = new THREE.BufferGeometry(); m.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); m.setIndex(idx); return m;
}
export function buildItem(id) { const g = BUILD[id](); g.userData.id = id; return g; }

/* ------------------------------------------------------------------------------------------------------ the set */
export function buildKitchen(scene) {
  const set = new THREE.Group(); scene.add(set);
  const add = (geo, mat, x, y, z) => { const m = shadow(new THREE.Mesh(geo, mat)); m.position.set(x, y, z); set.add(m); return m; };

  // the counter: dark speckled quartz with a walnut front edge, on a cabinet carcass
  const quartz = canvasTex(512, 512, (g, w, h) => {
    g.fillStyle = '#272d3f'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 5200; i++) { const v = 110 + rnd() * 120; g.fillStyle = `rgba(${v},${v + 6},${v + 24},${0.05 + rnd() * 0.17})`; g.fillRect(rnd() * w, rnd() * h, 1 + rnd() * 2.4, 1 + rnd() * 2.4); }
    for (let i = 0; i < 24; i++) { g.strokeStyle = `rgba(190,200,255,${0.03 + rnd() * 0.04})`; g.lineWidth = 1; g.beginPath(); let x = rnd() * w, y = rnd() * h; g.moveTo(x, y); for (let k = 0; k < 5; k++) { x += (rnd() - 0.3) * 90; y += (rnd() - 0.5) * 60; g.lineTo(x, y); } g.stroke(); }
  }, true, [5, 4]);
  const top = add(new THREE.BoxGeometry(2.6, 0.05, 2.1), phys('#ffffff', {map: quartz, roughness: 0.55, clearcoat: 0.12, clearcoatRoughness: 0.5, envMapIntensity: 0.45}), 0.1, -0.025, 0);
  const walnut = canvasTex(256, 64, (g, w, h) => { g.fillStyle = '#5a3a24'; g.fillRect(0, 0, w, h); for (let i = 0; i < 160; i++) { g.fillStyle = `rgba(${20 + rnd() * 40},${10 + rnd() * 20},5,${0.1 + rnd() * 0.2})`; g.fillRect(rnd() * w, rnd() * h, 30 + rnd() * 120, 1); } }, true, [8, 1]);
  add(new THREE.BoxGeometry(2.62, 0.045, 0.03), phys('#ffffff', {map: walnut, roughness: 0.55, clearcoat: 0.3}), 0.1, -0.0225, -1.065);
  add(new THREE.BoxGeometry(2.62, 0.045, 0.03), phys('#ffffff', {map: walnut, roughness: 0.55, clearcoat: 0.3}), 0.1, -0.0225, 1.065);
  add(new THREE.BoxGeometry(0.03, 0.045, 2.1), phys('#ffffff', {map: walnut, roughness: 0.55, clearcoat: 0.3}), -1.215, -0.0225, 0);
  add(new THREE.BoxGeometry(0.03, 0.045, 2.1), phys('#ffffff', {map: walnut, roughness: 0.55, clearcoat: 0.3}), 1.415, -0.0225, 0);
  add(new THREE.BoxGeometry(2.5, 1.0, 2.0), phys('#141a34', {roughness: 0.6}), 0.1, -0.55, 0);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(14, 14), phys('#0a0e22', {roughness: 0.4, clearcoat: 0.3})); floor.rotation.x = -Math.PI / 2; floor.position.y = -1.05; floor.receiveShadow = true; set.add(floor);

  // the back wall: white subway tile, a warm strip light, wall cabinets
  const tiles = canvasTex(512, 512, (g, w, h) => {
    g.fillStyle = '#232a4c'; g.fillRect(0, 0, w, h);
    const th = h / 8, tw = w / 4;
    for (let r = 0; r < 8; r++) for (let c = -1; c < 5; c++) {
      const x = c * tw + (r % 2 ? tw / 2 : 0), v = rnd() * 14; g.fillStyle = `rgb(${62 + v},${78 + v},${128 + v})`; g.fillRect(x + 3, r * th + 3, tw - 6, th - 6);
      g.fillStyle = 'rgba(255,255,255,0.16)'; g.fillRect(x + 3, r * th + 3, tw - 6, 4);
    }
  }, true, [5, 1.6]);
  const wallZ = 1.05;
  add(new THREE.BoxGeometry(2.62, 0.62, 0.03), phys('#ffffff', {map: tiles, roughness: 0.3, clearcoat: 0.4, clearcoatRoughness: 0.25, envMapIntensity: 0.6}), 0.1, 0.31, wallZ + 0.015);
  const strip = new THREE.Mesh(new THREE.BoxGeometry(2.3, 0.012, 0.03), new THREE.MeshBasicMaterial({color: new THREE.Color('#ffd9a0').multiplyScalar(1.6)})); strip.position.set(0.1, 0.60, wallZ - 0.04); set.add(strip);
  for (let i = 0; i < 4; i++) add(new THREE.BoxGeometry(0.62, 0.55, 0.32), phys('#1a2250', {roughness: 0.4, clearcoat: 0.6}), -0.95 + i * 0.68 + (i > 1 ? 0.0 : 0), 0.92, wallZ + 0.19);
  for (let i = 0; i < 4; i++) add(new THREE.BoxGeometry(0.012, 0.16, 0.012), phys('#cfd4dc', {metalness: 1, roughness: 0.25}), -0.95 + i * 0.68 + 0.26, 0.74, wallZ + 0.36);

  // the pantry: a wooden shelf wall at the far end of the sonar's sight, and a stencil on the counter
  const pantryWall = add(new THREE.BoxGeometry(0.03, 0.15, 1.5), phys('#a8825a', {roughness: 0.8}), 1.115, 0.075, 0);
  for (let i = 0; i < 8; i++) add(new THREE.BoxGeometry(0.005, 0.15, 0.004), phys('#7a5a3a', {roughness: 0.9}), 1.1, 0.075, -0.65 + i * 0.185);
  const wood = canvasTex(128, 128, (g, w, h) => { g.fillStyle = '#b98e5c'; g.fillRect(0, 0, w, h); for (let i = 0; i < 200; i++) { g.fillStyle = `rgba(70,45,20,${rnd() * 0.18})`; g.fillRect(rnd() * w, rnd() * h, 14 + rnd() * 40, 1); } });
  const padMat = phys('#ffffff', {map: wood, roughness: 0.65, clearcoat: 0.15});
  const pads = [], spots = [];
  K.zs.forEach((z, i) => {
    const p = shadow(new THREE.Mesh(new RoundedBoxGeometry(K.pad.hx * 2, K.pad.h, K.pad.hz * 2, 3, 0.002), padMat)); p.position.set(K.pantryX, K.pad.h / 2, wz(z)); set.add(p); pads.push(p);
    const s = board(ITEMS[i].name.toUpperCase(), 0.07, 0.026, {color: '#fbbf24'}); s.position.set(K.pantryX, 0, wz(z) - 0.062); set.add(s);
  });
  { const s = board('PANTRY', 0.34, 0.07, {color: '#60a5fa', spacing: '10px'}); s.position.set(K.pantryX, 0, wz(0.76)); set.add(s); }

  // the breakfast area: a linen placemat with a stitched border, five plates on wooden risers, a label for each
  const linen = canvasTex(512, 512, (g, w, h) => {
    g.fillStyle = '#e9e2d0'; g.fillRect(0, 0, w, h);
    for (let y = 0; y < h; y += 3) { g.fillStyle = `rgba(120,100,70,${0.04 + (y % 6 ? 0 : 0.04)})`; g.fillRect(0, y, w, 1); }
    for (let x = 0; x < w; x += 3) { g.fillStyle = `rgba(120,100,70,${0.03 + (x % 6 ? 0 : 0.04)})`; g.fillRect(x, 0, 1, h); }
    g.strokeStyle = 'rgba(150,40,40,0.55)'; g.lineWidth = 3; g.setLineDash([10, 8]); g.strokeRect(14, 14, w - 28, h - 28);
  });
  const mat = shadow(new THREE.Mesh(new RoundedBoxGeometry(0.50, 0.006, 1.40, 3, 0.002), phys('#ffffff', {map: linen, roughness: 0.92, sheen: 0.6, sheenRoughness: 0.5, sheenColor: new THREE.Color('#ffffff')})));
  mat.position.set(K.kitchenX - 0.03, 0.003, 0); set.add(mat);
  const china = phys('#f4f1ea', {roughness: 0.18, clearcoat: 1, clearcoatRoughness: 0.06});
  K.zs.forEach((z, i) => {
    const r = shadow(new THREE.Mesh(new RoundedBoxGeometry(K.pad.hx * 2, K.pad.h - 0.002, K.pad.hz * 2, 3, 0.002), padMat)); r.position.set(K.kitchenX, (K.pad.h - 0.002) / 2 + 0.003, wz(z)); set.add(r);
    const pl = lathe([[0, 0], [0.034, 0], [0.037, 0.0025], [0.038, K.plateT]], china, 48); pl.position.set(K.kitchenX, K.pad.h + 0.001, wz(z)); set.add(pl);
    const s = board(ITEMS[i].name.toUpperCase(), 0.07, 0.026, {color: '#f4c7c7', bg: '#4a1f27'}); s.position.set(K.kitchenX, 0, wz(z) - 0.062); set.add(s);
  });
  { const s = board('BREAKFAST AREA', 0.5, 0.07, {color: '#f4c7c7', bg: '#4a1f27', spacing: '6px'}); s.position.set(K.kitchenX, 0, wz(0.76)); set.add(s); }

  // decoration on the counter: toast, an orange, a mug
  add(new RoundedBoxGeometry(0.075, 0.012, 0.075, 3, 0.004), phys('#d9a85a', {roughness: 0.9}), -0.95, 0.006, 0.78);
  add(new RoundedBoxGeometry(0.075, 0.012, 0.075, 3, 0.004), phys('#cf9c4c', {roughness: 0.9}), -0.94, 0.017, 0.78);
  add(new THREE.SphereGeometry(0.03, 32, 22), phys('#f08a1c', {roughness: 0.55, clearcoat: 0.2}), -0.95, 0.03, -0.84);
  { const mug = lathe([[0, 0], [0.032, 0], [0.036, 0.004], [0.036, 0.075], [0.0345, 0.075], [0.0335, 0.006], [0, 0.006]], phys('#2563eb', {roughness: 0.2, clearcoat: 1}), 40); mug.position.set(-0.55, 0, 0.88); mug.material.side = THREE.DoubleSide; set.add(mug); }
  return {set, pads, wallZ};
}
