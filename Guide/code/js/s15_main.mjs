// Chapter 11, section 11.15: importing. Run with: node s15_main.mjs
import describe, { clamp, lerp, smoothstep as ease } from './s15_maths.mjs';
import * as maths from './s15_maths.mjs';
console.log('1:', clamp(5, 0, 1), lerp(0, 200, 0.25), ease(0.25).toFixed(4), describe());
console.log('2:', Object.keys(maths), typeof maths.secret);
const { lerp: lerp2 } = await import('./s15_maths.mjs');     // loaded on demand, returns a promise
console.log('3:', lerp2 === lerp, 'same module instance');
