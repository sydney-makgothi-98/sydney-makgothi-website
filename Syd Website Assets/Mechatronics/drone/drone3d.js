// The drone as geometry: a foldable black quadcopter after the reference photo (sloped shell, cyan front strip, silver motor caps,
// gimbal camera, blurred props), built as 22 separate parts so it can be taken apart. Frame: x forward, y up, z to the right.
import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';

const V3 = THREE.Vector3;
let seed = 5; const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
function tex(w, h, draw, srgb = true) { const c = document.createElement('canvas'); c.width = w; c.height = h; draw(c.getContext('2d'), w, h); const t = new THREE.CanvasTexture(c); if (srgb) t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t; }
const phys = (color, o = {}) => new THREE.MeshPhysicalMaterial({color, roughness: 0.5, metalness: 0, ...o});
const rbox = (w, h, d, r = 0.002, seg = 3) => new RoundedBoxGeometry(w, h, d, seg, Math.min(r, w / 2.2, h / 2.2, d / 2.2));

export const PALETTE = {black: '#14161b', shell: '#0d0f13', silver: '#cfd4dc', cyan: '#35c8ff', pcb: '#0e5a3a', gold: '#d6a62a'};

export function buildDrone({lite = false} = {}) {
  const root = new THREE.Group();
  const parts = [], byId = {}, meshes = [];
  const SEG = lite ? 1 : 3;
  const M = {
    shell: phys(PALETTE.shell, {roughness: 0.28, clearcoat: 1, clearcoatRoughness: 0.12, envMapIntensity: 1.1}),
    black: phys(PALETTE.black, {roughness: 0.62, clearcoat: 0.12, clearcoatRoughness: 0.6, envMapIntensity: 0.8}),
    rubber: phys('#0a0b0d', {roughness: 0.85}),
    silver: phys(PALETTE.silver, {metalness: 1, roughness: 0.22, envMapIntensity: 1.3}),
    steel: phys('#8e949d', {metalness: 1, roughness: 0.38}),
    copper: phys('#b8662c', {metalness: 1, roughness: 0.35}),
    cyan: new THREE.MeshBasicMaterial({color: new THREE.Color(PALETTE.cyan).multiplyScalar(1.5), toneMapped: false}),
    glass: phys('#0b1722', {roughness: 0.05, clearcoat: 1, metalness: 0.2, envMapIntensity: 1.8}),
    batt: phys('#23262d', {roughness: 0.55, clearcoat: 0.2}),
    ceramic: phys('#d9d2c0', {roughness: 0.4}),
  };

  function part(id, name, explode, a = 0, b = 1) {
    const group = new THREE.Group(); root.add(group);
    const p = {id, name, group, explode: new V3(...explode), a, b, mats: [], meshes: []};
    parts.push(p); byId[id] = p; return p;
  }
  function add(p, geo, mat, pos = [0, 0, 0], rot = [0, 0, 0], sc = null) {
    const m = new THREE.Mesh(geo, mat); m.position.set(...pos); m.rotation.set(...rot); if (sc) m.scale.set(...sc);
    m.userData.part = p.id; p.group.add(m); p.meshes.push(m); meshes.push(m);
    if (!p.mats.includes(mat)) p.mats.push(mat);
    return m;
  }
  // every part gets its own material copies so highlighting one never lights another
  const own = (p) => { p.mats = []; for (const m of p.meshes) { m.material = m.material.clone(); p.mats.push(m.material); } };

  /* ---- boards ---- */
  const pcbTex = (label, w, h, accent) => tex(w, h, (g, W, H) => {
    g.fillStyle = '#0d4f33'; g.fillRect(0, 0, W, H);
    g.strokeStyle = 'rgba(255,255,255,0.08)'; g.lineWidth = 2;
    for (let i = 0; i < 40; i++) { let x = rnd() * W, y = rnd() * H; g.beginPath(); g.moveTo(x, y); for (let k = 0; k < 3; k++) { if (rnd() < 0.5) x += (rnd() - 0.5) * 120; else y += (rnd() - 0.5) * 120; g.lineTo(x, y); } g.stroke(); }
    g.fillStyle = 'rgba(214,170,90,0.6)'; for (let i = 0; i < 80; i++) { g.beginPath(); g.arc(rnd() * W, rnd() * H, 2, 0, 7); g.fill(); }
    g.fillStyle = accent || '#fff'; g.font = `700 ${Math.round(H * 0.11)}px "JetBrains Mono", monospace`; g.textAlign = 'left'; g.fillText(label, 14, H - 16);
  });

  // chassis: the lower tray
  const chassis = part('chassis', 'Chassis (lower frame)', [0, -0.17, 0], 0.55, 1);
  add(chassis, rbox(0.104, 0.012, 0.072, 0.004, SEG), M.black, [0, -0.020, 0]);
  add(chassis, rbox(0.092, 0.003, 0.060, 0.001, 1), M.steel, [0, -0.0265, 0]);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) add(chassis, new THREE.CylinderGeometry(0.0035, 0.0035, 0.004, 14), M.silver, [sx * 0.045, -0.0275, sz * 0.027]);

  // ESC board
  const esc = part('esc', 'ESC board (motor drivers)', [0, -0.075, 0], 0.4, 0.9);
  add(esc, new THREE.BoxGeometry(0.074, 0.0018, 0.054), phys('#ffffff', {map: pcbTex('4-IN-1 ESC', 296, 216, '#fbbf24'), roughness: 0.6}), [0, -0.0105, 0]);
  for (let i = 0; i < 4; i++) add(esc, new THREE.BoxGeometry(0.012, 0.003, 0.010), M.black, [-0.024 + i * 0.016, -0.0085, (i % 2 ? 0.014 : -0.014)]);
  for (const sx of [-1, 1]) add(esc, new THREE.CylinderGeometry(0.004, 0.004, 0.009, 16), M.steel, [sx * 0.03, -0.0055, 0.0]);

  // flight controller: THE PID controller
  const fc = part('fc', 'Flight controller (PID)', [0, 0.04, 0], 0.15, 0.8);
  const fcTex = tex(256, 200, (g, W, H) => {
    g.fillStyle = '#0a3d6b'; g.fillRect(0, 0, W, H);
    g.strokeStyle = 'rgba(255,255,255,0.1)'; g.lineWidth = 2; for (let i = 0; i < 50; i++) { let x = rnd() * W, y = rnd() * H; g.beginPath(); g.moveTo(x, y); for (let k = 0; k < 3; k++) { if (rnd() < 0.5) x += (rnd() - 0.5) * 100; else y += (rnd() - 0.5) * 100; g.lineTo(x, y); } g.stroke(); }
    g.fillStyle = 'rgba(214,170,90,0.6)'; for (let i = 0; i < 90; i++) { g.beginPath(); g.arc(rnd() * W, rnd() * H, 2, 0, 7); g.fill(); }
    g.fillStyle = '#e8f6ff'; g.font = '700 17px "JetBrains Mono", monospace'; g.fillText('PID FLIGHT CONTROLLER', 14, 24);
    g.fillStyle = '#7dd3fc'; g.font = '600 12px "JetBrains Mono", monospace'; g.fillText('Z · ROLL · PITCH · YAW', 14, H - 14);
  });
  add(fc, new THREE.BoxGeometry(0.056, 0.002, 0.044), phys('#ffffff', {map: fcTex, roughness: 0.55}), [0, 0.004, 0]);
  const chipMat = phys('#0c0d10', {roughness: 0.35, clearcoat: 0.6});
  const mcu = add(fc, rbox(0.017, 0.0024, 0.017, 0.0008, 1), chipMat, [0.004, 0.0062, 0.002]);
  const glowMat = new THREE.MeshBasicMaterial({color: new THREE.Color('#38bdf8').multiplyScalar(1.3), toneMapped: false, transparent: true, opacity: 0.9});
  const glow = add(fc, new THREE.PlaneGeometry(0.0135, 0.0135), glowMat, [0.004, 0.0075, 0.002], [-Math.PI / 2, 0, 0]);
  for (let i = 0; i < 12; i++) { add(fc, new THREE.BoxGeometry(0.0004, 0.0008, 0.0035), M.silver, [-0.0035 + (i % 6) * 0.0028, 0.0058, (i < 6 ? 0.0125 : -0.0085)]); }
  for (let i = 0; i < 6; i++) add(fc, new THREE.BoxGeometry(0.0022, 0.0035, 0.0022), M.black, [-0.026 + i * 0.0025, 0.0062, -0.0195]);
  add(fc, new THREE.BoxGeometry(0.009, 0.0032, 0.0075), M.steel, [-0.0285, 0.0065, 0.0]);        // USB connector

  // IMU and barometer: sit on the board, lift off separately
  const imu = part('imu', 'IMU (gyro + accelerometer)', [0.06, 0.07, -0.055], 0.15, 0.8);
  add(imu, rbox(0.007, 0.0016, 0.007, 0.0006, 1), chipMat, [-0.014, 0.0062, -0.0115]);
  add(imu, new THREE.CircleGeometry(0.0007, 10), M.cyan, [-0.0166, 0.00705, -0.0138], [-Math.PI / 2, 0, 0]);
  const baro = part('baro', 'Barometer (altimeter)', [-0.07, 0.085, 0.06], 0.15, 0.8);
  add(baro, new THREE.CylinderGeometry(0.0042, 0.0042, 0.0026, 20), M.silver, [-0.016, 0.0068, 0.0125]);
  add(baro, new THREE.CylinderGeometry(0.0012, 0.0012, 0.0028, 10), M.black, [-0.016, 0.0070, 0.0125]);

  // battery
  const batt = part('battery', 'Flight battery', [0, 0.17, 0], 0.15, 0.85);
  const battTex = tex(256, 128, (g, W, H) => { g.fillStyle = '#23262d'; g.fillRect(0, 0, W, H); g.fillStyle = '#35c8ff'; g.fillRect(0, 0, W, 8); g.fillStyle = '#e6e8f5'; g.font = '700 22px "JetBrains Mono", monospace'; g.fillText('FLIGHT BATTERY', 14, 58); g.fillStyle = '#9aa0c3'; g.font = '600 14px "JetBrains Mono", monospace'; g.fillText('LiPo · powers 4 motors + electronics', 14, 86); });
  add(batt, rbox(0.074, 0.02, 0.046, 0.003, SEG), phys('#ffffff', {map: battTex, roughness: 0.55}), [-0.004, 0.0185, 0]);
  add(batt, new THREE.BoxGeometry(0.01, 0.006, 0.018), M.black, [0.0375, 0.012, 0]);

  // top shell, sloped like the reference
  const shell = part('shell', 'Top shell', [0, 0.30, 0], 0.35, 1);
  { const g = rbox(0.112, 0.040, 0.078, 0.016, SEG * 2); const pos = g.attributes.position;
    for (let i = 0; i < pos.count; i++) { const y = pos.getY(i), t = (y + 0.02) / 0.04; const k = 1 - 0.22 * t * t; pos.setZ(i, pos.getZ(i) * k); pos.setX(i, pos.getX(i) * (1 - 0.1 * t)); if (t > 0.5) pos.setY(i, y - 0.004 * (pos.getX(i) < 0 ? 0 : (pos.getX(i) / 0.056) * 1.2)); }
    g.computeVertexNormals(); add(shell, g, M.shell, [0.002, 0.033, 0]);
    add(shell, rbox(0.044, 0.0012, 0.003, 0.0005, 1), phys('#1c1f26', {roughness: 0.6}), [0.0, 0.0535, -0.018]);
    add(shell, rbox(0.044, 0.0012, 0.003, 0.0005, 1), phys('#1c1f26', {roughness: 0.6}), [0.0, 0.0535, 0.018]);
    add(shell, rbox(0.028, 0.0012, 0.003, 0.0005, 1), phys('#1c1f26', {roughness: 0.6}), [-0.032, 0.0525, 0]); }
  add(shell, rbox(0.014, 0.0022, 0.07, 0.001, 1), M.black, [0.0585, 0.012, 0]);                                     // front bumper lip

  const button = part('button', 'Power button', [0, 0.40, 0], 0.45, 1);
  add(button, new THREE.CylinderGeometry(0.0062, 0.0062, 0.0014, 28), phys('#1d2027', {roughness: 0.3, clearcoat: 1}), [0.012, 0.0562, 0.0]);
  add(button, new THREE.TorusGeometry(0.0034, 0.00045, 8, 24), M.cyan, [0.012, 0.0572, 0.0], [-Math.PI / 2, 0, 0]);

  const gps = part('gps', 'GPS module', [-0.03, 0.46, 0], 0.4, 1);
  add(gps, rbox(0.022, 0.0035, 0.022, 0.0008, 1), M.ceramic, [-0.034, 0.0475, 0]);
  add(gps, new THREE.BoxGeometry(0.026, 0.0012, 0.026), phys('#0b0c0f', {roughness: 0.6}), [-0.034, 0.0452, 0]);

  const led = part('led', 'Front LED strip', [0.1, 0.0, 0], 0.3, 1);
  add(led, rbox(0.003, 0.0032, 0.068, 0.0012, 1), M.cyan, [0.0605, 0.0105, 0]);

  // gimbal camera
  const gim = part('gimbal', 'Gimbal camera', [0.11, -0.08, 0], 0.3, 1);
  add(gim, rbox(0.020, 0.008, 0.032, 0.003, SEG), M.black, [0.049, -0.014, 0]);
  add(gim, rbox(0.016, 0.022, 0.024, 0.004, SEG), M.black, [0.057, -0.027, 0]);
  add(gim, new THREE.CylinderGeometry(0.0085, 0.0085, 0.006, 26), M.rubber, [0.0665, -0.027, 0], [0, 0, Math.PI / 2]);
  add(gim, new THREE.CylinderGeometry(0.0062, 0.0062, 0.0014, 26), M.glass, [0.0702, -0.027, 0], [0, 0, Math.PI / 2]);
  add(gim, new THREE.CircleGeometry(0.0012, 12), new THREE.MeshBasicMaterial({color: 0x9fd6ff, toneMapped: false}), [0.0712, -0.0262, 0.0014], [0, Math.PI / 2, 0]);

  // four arms, motors and props
  const ARM = [['FR', 1, 1], ['FL', 1, -1], ['RR', -1, 1], ['RL', -1, -1]];
  const propMeshes = [];
  const bladeShape = new THREE.Shape(); bladeShape.moveTo(0, 0.0035); bladeShape.bezierCurveTo(0.02, 0.0095, 0.06, 0.0085, 0.098, 0.0030); bladeShape.bezierCurveTo(0.100, 0.0, 0.100, 0.0, 0.098, -0.0020); bladeShape.bezierCurveTo(0.06, -0.0045, 0.02, -0.0030, 0, -0.0035); bladeShape.closePath();
  const bladeGeo = new THREE.ExtrudeGeometry(bladeShape, {depth: 0.0016, bevelEnabled: false, curveSegments: lite ? 8 : 18}); bladeGeo.rotateX(-Math.PI / 2); bladeGeo.translate(0, 0, 0);
  const blurTex = tex(128, 128, (g, W, H) => { const gr = g.createRadialGradient(W / 2, H / 2, 6, W / 2, H / 2, W / 2); gr.addColorStop(0, 'rgba(210,225,255,0.0)'); gr.addColorStop(0.35, 'rgba(210,225,255,0.22)'); gr.addColorStop(0.9, 'rgba(210,225,255,0.20)'); gr.addColorStop(1, 'rgba(210,225,255,0)'); g.fillStyle = gr; g.fillRect(0, 0, W, H); }, true);
  for (const [tag, sx, sz] of ARM) {
    const mx = sx * 0.104, mz = sz * 0.104, ang = Math.atan2(-mz, mx);              // arm direction in the x-z plane
    const arm = part('arm' + tag, `${tag === 'FR' ? 'Front-right' : tag === 'FL' ? 'Front-left' : tag === 'RR' ? 'Rear-right' : 'Rear-left'} arm`, [sx * 0.12, -0.02, sz * 0.12], 0.25, 0.95);
    const len = Math.hypot(mx, mz) - 0.035;
    const cx = sx * (0.045 + len / 2) * Math.SQRT1_2 * 1.0, cz = sz * (0.045 + len / 2) * Math.SQRT1_2 * 1.0;
    add(arm, rbox(len + 0.02, 0.0095, 0.016, 0.0032, SEG), M.black, [(mx + sx * 0.032) / 2, 0.003, (mz + sz * 0.032) / 2], [0, ang, 0]);
    add(arm, rbox(0.016, 0.012, 0.024, 0.004, SEG), M.black, [sx * 0.037, 0.003, sz * 0.037], [0, ang, 0]);
    add(arm, rbox(0.020, 0.0035, 0.0125, 0.0015, 1), M.black, [mx * 1.02, -0.017, mz * 1.02], [0, 0, 0]);                  // landing foot
    add(arm, new THREE.CylinderGeometry(0.0035, 0.0045, 0.020, 14), M.black, [mx, -0.008, mz]);
    arm.mx = mx; arm.mz = mz;
    const motor = part('motor' + tag, `${tag} motor`, [sx * 0.2, 0.01, sz * 0.2], 0.4, 1);
    add(motor, new THREE.CylinderGeometry(0.0125, 0.0135, 0.014, 30), M.silver, [mx, 0.0135, mz]);
    add(motor, new THREE.CylinderGeometry(0.0105, 0.0105, 0.0016, 30), phys('#a9afb8', {metalness: 1, roughness: 0.18}), [mx, 0.0212, mz]);
    add(motor, new THREE.TorusGeometry(0.0108, 0.0006, 8, 36), M.steel, [mx, 0.0206, mz], [-Math.PI / 2, 0, 0]);
    add(motor, new THREE.CylinderGeometry(0.0082, 0.0082, 0.011, 24), M.copper, [mx, 0.0015, mz]);
    add(motor, new THREE.CylinderGeometry(0.0015, 0.0015, 0.026, 10), M.steel, [mx, 0.016, mz]);
    const prop = part('prop' + tag, `${tag} propeller`, [sx * 0.15, 0.17, sz * 0.15], 0.5, 1);
    const spin = new THREE.Group(); spin.position.set(mx, 0.0235, mz); prop.group.add(spin);
    const b1 = new THREE.Mesh(bladeGeo, M.black.clone()); b1.userData.part = prop.id; b1.rotation.y = 0; b1.position.y = -0.0006; spin.add(b1);
    const b2 = new THREE.Mesh(bladeGeo, M.black.clone()); b2.userData.part = prop.id; b2.rotation.y = Math.PI; b2.position.y = -0.0006; spin.add(b2);
    for (const b of [b1, b2]) { b.rotation.z = 0.12 * (sx * sz); prop.meshes.push(b); meshes.push(b); }
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.0075, 0.0085, 0.006, 22), M.silver.clone()); hub.userData.part = prop.id; hub.position.y = 0.0022; spin.add(hub); prop.meshes.push(hub); meshes.push(hub);
    const blur = new THREE.Mesh(new THREE.CircleGeometry(0.103, 40), new THREE.MeshBasicMaterial({map: blurTex, transparent: true, depthWrite: false, side: THREE.DoubleSide, toneMapped: false, opacity: 0.9}));
    blur.rotation.x = -Math.PI / 2; blur.position.y = 0.0014; spin.add(blur);
    prop.spin = spin; prop.blur = blur; prop.dir = (sx * sz) > 0 ? 1 : -1; propMeshes.push(prop);
    prop.mats = [b1.material, b2.material, hub.material];
  }
  for (const p of parts) if (!p.id.startsWith('prop')) own(p);

  /* ---- the pose: tilt from the sim, prop speed, explode ---- */
  const ease = (k, a, b) => { const x = Math.min(1, Math.max(0, (k - a) / (b - a))); return x * x * (3 - 2 * x); };
  function pose({roll = 0, pitch = 0, yaw = 0, u = 0, spin = 0, dt = 0, effort = 0}) {
    // sim axes: x forward, y left, z up. Roll tips the right side down about the forward axis, positive pitch tips the nose DOWN
    // (thrust forward), yaw turns anticlockwise seen from above. Aerospace order: yaw, then pitch, then roll.
    root.rotation.set(roll, yaw, -pitch, 'YZX');
    for (const p of parts) p.group.position.copy(p.explode).multiplyScalar(ease(u, p.a, p.b));
    const run = 1 - ease(u, 0.0, 0.25);
    for (const pr of propMeshes) { pr.spin.rotation.y += pr.dir * spin * run * dt; pr.blur.material.opacity = 0.6 * run; pr.blur.visible = run > 0.02; }
    glowMat.opacity = 0.55 + 0.45 * Math.min(1, effort);
  }
  return {root, parts, byId, meshes, pose, glowMat, props: propMeshes};
}
