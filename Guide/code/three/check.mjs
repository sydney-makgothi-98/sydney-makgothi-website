// Chapter 15: the numbers in the worked examples, checked by three.js itself.  node check.mjs
import * as THREE from 'file:///C:/Users/thabe/.claude/skills/teardown/node_modules/three/build/three.module.js';
console.log('three.js', THREE.REVISION);

// Chapter 7 worked example: fov 36, canvas 1000 x 562, point (0.1, 0.05, -0.5) in camera space
const cam = new THREE.PerspectiveCamera(36, 1000 / 562, 0.05, 9);
cam.position.set(0, 0, 0); cam.updateMatrixWorld();
const p = new THREE.Vector3(0.1, 0.05, -0.5).project(cam);
console.log('1: ndc', p.x.toFixed(4), p.y.toFixed(4), 'pixel', ((p.x * 0.5 + 0.5) * 1000).toFixed(1), ((-p.y * 0.5 + 0.5) * 562).toFixed(1));

// depth values at four distances (NDC z, from -1 at near to +1 at far)
for (const d of [0.1, 0.5, 1, 5]) console.log(`   depth at ${d} m:`, new THREE.Vector3(0, 0, -d).project(cam).z.toFixed(4));

// Chapter 15 worked example: orbit camera at azimuth -50, elevation 22, distance 0.78
const d = 0.78, az = THREE.MathUtils.degToRad(-50), el = THREE.MathUtils.degToRad(22);
const pos = new THREE.Vector3(d * Math.cos(el) * Math.cos(az), d * Math.sin(el), d * Math.cos(el) * Math.sin(az));
console.log('2: orbit position', pos.toArray().map(v => v.toFixed(3)), 'distance', pos.length().toFixed(3));

// fit an object 0.30 m tall in a 36 degree view
console.log('3: distance to fit 0.30 m:', (0.15 / Math.tan(THREE.MathUtils.degToRad(18))).toFixed(3), 'm');

// a child in a rotated group: the scene tree in action
const group = new THREE.Group(); const child = new THREE.Object3D(); child.position.set(1, 0, 0); group.add(child);
group.rotation.y = Math.PI / 2; group.updateMatrixWorld(true);
console.log('4: child world position after the group turns 90 deg about y:', child.getWorldPosition(new THREE.Vector3()).toArray().map(v => +v.toFixed(3)));

// the arm pivot: a bar offset by half its length inside a group, then the group rotated
const arm = new THREE.Group(); const bar = new THREE.Object3D(); bar.position.x = 0.12; arm.add(bar); arm.rotation.z = Math.PI / 6; arm.updateMatrixWorld(true);
console.log('5: bar centre after swinging the arm 30 deg:', bar.getWorldPosition(new THREE.Vector3()).toArray().map(v => +v.toFixed(4)), '(0.12 cos30, 0.12 sin30)');

// picking: a ray through NDC (0, 0) hits a box in front of the camera
const cam2 = new THREE.PerspectiveCamera(36, 1, 0.05, 50); cam2.position.set(0, 0, 2); cam2.lookAt(0, 0, 0); cam2.updateMatrixWorld();
const box = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1)); box.updateMatrixWorld();
const ray = new THREE.Raycaster(); ray.setFromCamera(new THREE.Vector2(0, 0), cam2);
const hit = ray.intersectObject(box)[0];
console.log('6: ray from the screen centre hits the cube at distance', hit.distance.toFixed(3), '(camera at z = 2, face at z = 0.5)');
ray.setFromCamera(new THREE.Vector2(0.9, 0), cam2);
console.log('   ray through ndc x = 0.9 hits:', ray.intersectObject(box).length ? 'the cube' : 'nothing');

// bounding box and camera framing
const robot = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.3, 0.25));
const bb = new THREE.Box3().setFromObject(robot); const size = bb.getSize(new THREE.Vector3());
console.log('7: bounding box size', size.toArray(), 'centre', bb.getCenter(new THREE.Vector3()).toArray());

// resize: the projection matrix only changes after updateProjectionMatrix
const c3 = new THREE.PerspectiveCamera(36, 1, 0.05, 50); const before = c3.projectionMatrix.elements[0];
c3.aspect = 2; const stale = c3.projectionMatrix.elements[0]; c3.updateProjectionMatrix(); const after = c3.projectionMatrix.elements[0];
console.log('8: projection element [0]: before', before.toFixed(4), 'after setting aspect', stale.toFixed(4), 'after update', after.toFixed(4));

// draw calls: merging geometries
import { mergeGeometries } from 'file:///C:/Users/thabe/.claude/skills/teardown/node_modules/three/examples/jsm/utils/BufferGeometryUtils.js';
const parts = Array.from({ length: 300 }, (_, i) => new THREE.BoxGeometry(0.01, 0.01, 0.01).translate(i * 0.02, 0, 0));
const merged = mergeGeometries(parts);
console.log('9: 300 boxes merged into one geometry with', merged.attributes.position.count, 'vertices (300 x 24); one draw call instead of 300');

// lambert: brightness from the dot product
const n = new THREE.Vector3(0, 1, 0), l = new THREE.Vector3(0.6, 0.8, 0).normalize(), l2 = new THREE.Vector3(1, 1, 0).normalize();
console.log('10: brightness', Math.max(0, n.dot(l)).toFixed(3), Math.max(0, n.dot(l2)).toFixed(3));
