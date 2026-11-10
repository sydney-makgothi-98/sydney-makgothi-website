// Chapter 11, section 11.15: a module that exports helpers. Imported by s15_main.mjs.
export const clamp = (x, lo, hi) => Math.min(hi, Math.max(lo, x));
export const lerp = (a, b, t) => a + (b - a) * t;
export function smoothstep(t) { t = clamp(t, 0, 1); return t * t * (3 - 2 * t); }
const secret = 'not exported';           // module scope: invisible outside this file
export default function describe() { return `maths module (${secret.length} chars of private state)`; }
