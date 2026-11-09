//#CORE-START
const DEG = Math.PI / 180, G = 9.80665;
const ATM = { rho: 0.9046, a: 328.4, T: 268.34, p: 69682 };           // ISA, 10,000 ft
const AC = { m: 680, S: 16.2, b: 10.7, c: 1.5, Iy: 1300, CLa: 4.9, CD0: 0.04, k: 0.0563,
             Cmq: -7, CLe: 0.26, Cme: -0.8, Cm0: -0.03, hn: 0.38, CLmax: 1.7, alpha0: -2 * DEG, tauA: 0.05 };

function model(M, Kn) {
    const V = M * ATM.a, q = 0.5 * ATM.rho * V * V, W = AC.m * G;
    const CL = W / (q * AC.S), CD = AC.CD0 + AC.k * CL * CL, CDa = 2 * AC.k * CL * AC.CLa;
    const f = ATM.rho * V * AC.S / AC.m;
    const d = {
        V, q, CL, CD,
        Xu: -f * CD, Xw: 0.5 * f * (CL - CDa),
        Zu: -f * CL, Zw: -0.5 * f * (AC.CLa + CD),
        Mw: 0.5 * ATM.rho * V * AC.S * AC.c * (-Kn * AC.CLa) / AC.Iy,
        Mq: 0.5 * ATM.rho * V * AC.S * AC.c * AC.c * AC.Cmq / AC.Iy,
        Zeta: -q * AC.S * AC.CLe / AC.m,
        Meta: q * AC.S * AC.c * AC.Cme / AC.Iy
    };
    d.A = [[d.Xu, d.Xw, 0, -G], [d.Zu, d.Zw, V, 0], [0, d.Mw, d.Mq, 0], [0, 0, 1, 0]];
    d.B = [0, d.Zeta, d.Meta, 0];
    return d;
}

const zeros = n => Array.from({ length: n }, () => new Array(n).fill(0));
function matMul(A, B) {
    const n = A.length, C = zeros(n);
    for (let i = 0; i < n; i++) for (let k = 0; k < n; k++) { const a = A[i][k]; if (a) for (let j = 0; j < n; j++) C[i][j] += a * B[k][j]; }
    return C;
}
// Faddeev-LeVerrier: det(sI-A) coefficients (descending) and adj(sI-A) = sum Ms[k-1] s^(n-k)
function charPoly(A) {
    const n = A.length; let Mp = zeros(n); const c = [1], Ms = [];
    for (let k = 1; k <= n; k++) {
        const AM = matMul(A, Mp), Mk = AM.map((r, i) => r.map((v, j) => v + (i === j ? c[k - 1] : 0)));
        const AMk = matMul(A, Mk); let tr = 0; for (let i = 0; i < n; i++) tr += AMk[i][i];
        c.push(-tr / k); Ms.push(Mk); Mp = Mk;
    }
    return { c, Ms };
}
function tfNumerator(cp, row, B) {          // numerator of x_row / input, descending, degree n-1
    return cp.Ms.map(M => M[row].reduce((s, v, j) => s + v * B[j], 0));
}
function roots(c0) {                         // Durand-Kerner, returns [[re, im], ...]
    let c = c0.slice(); while (c.length > 1 && Math.abs(c[0]) < 1e-14 * Math.abs(c[c.length - 1] || 1)) c.shift();
    const n = c.length - 1; if (n < 1) return [];
    const a = c.map(x => x / c[0]);
    let R = 0; for (let k = 1; k <= n; k++) R = Math.max(R, Math.pow(Math.abs(a[k]), 1 / k));
    R = Math.max(2 * R, 1e-3);
    const z = Array.from({ length: n }, (_, i) => [R * Math.cos(2 * Math.PI * i / n + 0.4), R * Math.sin(2 * Math.PI * i / n + 0.4)]);
    const mul = (p, q) => [p[0] * q[0] - p[1] * q[1], p[0] * q[1] + p[1] * q[0]];
    const div = (p, q) => { const d = q[0] * q[0] + q[1] * q[1] || 1e-300; return [(p[0] * q[0] + p[1] * q[1]) / d, (p[1] * q[0] - p[0] * q[1]) / d]; };
    for (let it = 0; it < 4000; it++) {
        let delta = 0;
        for (let i = 0; i < n; i++) {
            let p = [1, 0]; for (let k = 1; k <= n; k++) { p = mul(p, z[i]); p[0] += a[k]; }
            let d = [1, 0]; for (let j = 0; j < n; j++) if (j !== i) d = mul(d, [z[i][0] - z[j][0], z[i][1] - z[j][1]]);
            const s = div(p, d); z[i] = [z[i][0] - s[0], z[i][1] - s[1]]; delta = Math.max(delta, Math.hypot(s[0], s[1]));
        }
        if (delta < 1e-13) break;
    }
    return z.map(([re, im]) => [re, Math.abs(im) < 1e-6 * (1 + Math.abs(re)) ? 0 : im]);
}
function routh(c) {                          // c descending; returns {rows, changes, eps}
    const n = c.length - 1, cols = Math.ceil((n + 1) / 2), rows = [[], []], eps = [false, false];
    for (let i = 0; i <= n; i++) rows[i % 2].push(c[i]);
    while (rows[1].length < cols) rows[1].push(0);
    for (let i = 2; i <= n; i++) {
        const p2 = rows[i - 2], p1 = rows[i - 1]; let piv = p1[0], e = false;
        if (Math.abs(piv) < 1e-12) { piv = 1e-9; e = true; }
        const r = []; for (let j = 0; j < cols; j++) r.push(j + 1 < cols ? (piv * p2[j + 1] - p2[0] * p1[j + 1]) / piv : 0);
        rows.push(r); eps.push(e);
    }
    let changes = 0; for (let i = 1; i < rows.length; i++) { const a = rows[i - 1][0], b = Math.abs(rows[i][0]) < 1e-12 ? 1e-9 : rows[i][0]; if (a * b < 0) changes++; }
    return { rows, changes, eps };
}
function closedLoopA(m, g) {
    const t = AC.tauA;
    return [[m.Xu, m.Xw, 0, -G, 0, 0], [m.Zu, m.Zw, m.V, 0, 0, m.Zeta], [0, m.Mw, m.Mq, 0, 0, m.Meta],
            [0, 0, 1, 0, 0, 0], [0, 0, 0, -1, 0, 0], [0, 0, g.Kd / t, g.Kp / t, -g.Ki / t, -1 / t]];
}
function rk4(f, x0, T, dt, every) {
    let x = x0.slice(), t = 0; const out = [{ t, x: x.slice() }]; const n = Math.round(T / dt);
    const add = (a, b, s) => a.map((v, i) => v + s * b[i]);
    for (let i = 1; i <= n; i++) {
        const k1 = f(x, t), k2 = f(add(x, k1, dt / 2), t), k3 = f(add(x, k2, dt / 2), t), k4 = f(add(x, k3, dt), t);
        x = x.map((v, j) => v + dt / 6 * (k1[j] + 2 * k2[j] + 2 * k3[j] + k4[j])); t = i * dt;
        if (i % every === 0) out.push({ t, x: x.slice() });
    }
    return out;
}
function simOpen(m, x0, T, dt, every) {      // state [u,w,q,theta,h]
    const f = x => { const d = m.A.map(r => r[0] * x[0] + r[1] * x[1] + r[2] * x[2] + r[3] * x[3]); d.push(m.V * x[3] - x[1]); return d; };
    return rk4(f, [...x0, 0], T, dt, every).map(p => ({ t: p.t, u: p.x[0], w: p.x[1], q: p.x[2], th: p.x[3], h: p.x[4], eta: 0 }));
}
function simClosed(m, g, x0, thc, T, dt, every) {   // state [u,w,q,theta,xi,eta,h]
    const f = x => { const [u, w, q, th, xi, eta] = x, e = thc - th, cmd = -(g.Kp * e + g.Ki * xi - g.Kd * q);
        return [m.Xu * u + m.Xw * w - G * th, m.Zu * u + m.Zw * w + m.V * q + m.Zeta * eta, m.Mw * w + m.Mq * q + m.Meta * eta, q, e, (cmd - eta) / AC.tauA, m.V * th - w]; };
    return rk4(f, [...x0, 0, 0, 0], T, dt, every).map(p => ({ t: p.t, u: p.x[0], w: p.x[1], q: p.x[2], th: p.x[3], h: p.x[6], eta: p.x[5] }));
}
function modes(poles) {                      // classify complex pairs: slow = phugoid, fast = short period
    const pairs = poles.filter(p => p[1] > 1e-9).map(([re, im]) => { const wn = Math.hypot(re, im); return { re, im, wn, zeta: -re / wn, T: 2 * Math.PI / im }; }).sort((a, b) => a.wn - b.wn);
    return { phugoid: pairs.length === 2 ? pairs[0] : null, sp: pairs.length === 2 ? pairs[1] : pairs[0] || null, pairs };
}
//#CORE-END
if (typeof module !== 'undefined') module.exports = { model, charPoly, roots, routh, closedLoopA, simOpen, simClosed, modes, tfNumerator, AC, ATM, G, DEG };
