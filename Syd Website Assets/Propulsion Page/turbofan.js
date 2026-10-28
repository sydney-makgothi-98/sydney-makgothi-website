(function () {
"use strict";
const AZIMUTH = 45;
const ELEVATION = 30;
const SHADES = 4;
const RADIANS = Math.PI / 180;
const UNIT = Math.sqrt(1.6);
function cameraOf({ scale, azimuth = AZIMUTH, elevation = ELEVATION }) {
    const a = azimuth * RADIANS;
    const e = elevation * RADIANS;
    return { sinA: Math.sin(a), cosA: Math.cos(a), sinE: Math.sin(e), cosE: Math.cos(e), k: scale * UNIT };
}
function iso([x, y, z], projection) {
    const { origin } = projection;
    const { sinA, cosA, sinE, cosE, k } = cameraOf(projection);
    return [origin[0] + (x * sinA - y * cosA) * k, origin[1] + ((x * cosA + y * sinA) * sinE - z * cosE) * k];
}
function towardViewer(projection) {
    const { sinA, cosA } = cameraOf(projection);
    return [cosA, sinA];
}
function depthOf([x, y, z], projection) {
    const { sinA, cosA, sinE, cosE } = cameraOf(projection);
    return (x * cosA + y * sinA) * cosE + z * sinE;
}
const tenth = (value) => {
    const text = (Math.round(value * 10) / 10).toFixed(1).replace(/\.0$/, "");
    return text === "-0" ? "0" : text;
};
function pathOf(points, closed = false) {
    if (!points.length)
        return "";
    return points.map(([x, y], at) => `${at ? "L" : "M"}${tenth(x)} ${tenth(y)}`).join("") + (closed ? "Z" : "");
}
const joinPaths = (paths) => paths.filter(Boolean).join("");
function roundedPlan({ x, y, w, d, r }, steps = 8) {
    const radius = Math.max(0, Math.min(r, w / 2, d / 2));
    const corners = [
        [x + w - radius, y + radius, -90],
        [x + w - radius, y + d - radius, 0],
        [x + radius, y + d - radius, 90],
        [x + radius, y + radius, 180],
    ];
    const out = [];
    for (const [cx, cy, start] of corners) {
        const count = radius > 0 ? steps : 0;
        for (let step = 0; step <= count; step++) {
            const angle = (start + (count ? (90 * step) / count : 45)) * RADIANS;
            out.push([cx + radius * Math.cos(angle), cy + radius * Math.sin(angle)]);
        }
    }
    return out;
}
function signedArea(points) {
    let area = 0;
    for (let index = 0; index < points.length; index++) {
        const [ax, ay] = points[index];
        const [bx, by] = points[(index + 1) % points.length];
        area += ax * by - bx * ay;
    }
    return area / 2;
}
const oriented = (points) => (signedArea(points) < 0 ? [...points].reverse() : points);
function convexHull(points) {
    const sorted = [...points].sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    if (sorted.length < 3)
        return sorted;
    const cross = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
    const lower = [];
    for (const point of sorted) {
        while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], point) <= 0)
            lower.pop();
        lower.push(point);
    }
    const upper = [];
    for (let index = sorted.length - 1; index >= 0; index--) {
        const point = sorted[index];
        while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], point) <= 0)
            upper.pop();
        upper.push(point);
    }
    return [...lower.slice(0, -1), ...upper.slice(0, -1)];
}
function runsOf(flags, want) {
    const count = flags.length;
    const runs = [];
    const start = flags.findIndex((flag, index) => flag !== flags[(index + count - 1) % count]);
    if (start < 0)
        return flags[0] === want ? [Array.from({ length: count + 1 }, (_, index) => index % count)] : [];
    let run = null;
    for (let step = 0; step < count; step++) {
        const index = (start + step) % count;
        if (flags[index] === want) {
            if (!run)
                run = [index];
            run.push((index + 1) % count);
        }
        else if (run) {
            runs.push(run);
            run = null;
        }
    }
    if (run)
        runs.push(run);
    return runs;
}
function extrude(ring, z, height, projection, options = {}) {
    const convex = options.convex ?? true;
    const count = ring.length;
    const counter = signedArea(ring) > 0;
    const [vx, vy] = towardViewer(projection);
    const { sinA, cosA } = cameraOf(projection);
    const normals = ring.map(([ax, ay], index) => {
        const [bx, by] = ring[(index + 1) % count];
        const dx = bx - ax;
        const dy = by - ay;
        const length = Math.hypot(dx, dy) || 1;
        return (counter ? [dy / length, -dx / length] : [-dy / length, dx / length]);
    });
    const facing = normals.map(([nx, ny]) => nx * vx + ny * vy > 1e-9);
    const top = ring.map(([x, y]) => iso([x, y, z + height], projection));
    const bottom = ring.map(([x, y]) => iso([x, y, z], projection));
    const outline = [];
    const crease = [];
    for (const run of runsOf(facing, false))
        outline.push(pathOf(run.map((index) => top[index])));
    for (const run of runsOf(facing, true)) {
        crease.push(pathOf(run.map((index) => top[index])));
        if (height > 0)
            outline.push(pathOf(run.map((index) => bottom[index])));
    }
    if (height > 0) {
        for (let index = 0; index < count; index++) {
            if (facing[(index + count - 1) % count] !== facing[index])
                outline.push(pathOf([top[index], bottom[index]]));
        }
    }
    let fill;
    if (convex) {
        fill = pathOf(convexHull([...top, ...bottom]), true);
    }
    else {
        const parts = [pathOf(oriented(top), true), pathOf(oriented(bottom), true)];
        for (let index = 0; index < count; index++) {
            if (!facing[index])
                continue;
            const next = (index + 1) % count;
            parts.push(pathOf(oriented([top[index], top[next], bottom[next], bottom[index]]), true));
        }
        fill = parts.join("");
    }
    const buckets = Array.from({ length: SHADES }, () => []);
    if (height > 0) {
        const [lx, ly] = [-sinA, cosA];
        for (let index = 0; index < count; index++) {
            if (!facing[index])
                continue;
            const [nx, ny] = normals[index];
            const lit = (nx * lx + ny * ly + 1) / 2;
            const shade = Math.min(SHADES - 1, Math.max(0, Math.floor(lit * SHADES)));
            const next = (index + 1) % count;
            buckets[shade].push(pathOf(oriented([top[index], top[next], bottom[next], bottom[index]]), true));
        }
    }
    let bevel;
    if (options.bevel && options.bevel > 0) {
        const by = options.bevel;
        const inset = ring.map(([x, y], index) => {
            const [ax, ay] = normals[(index + count - 1) % count];
            const [bx, by2] = normals[index];
            const mx = ax + bx;
            const my = ay + by2;
            const length = Math.hypot(mx, my) || 1;
            return [x - (mx / length) * by, y - (my / length) * by];
        });
        const insetTop = inset.map(([x, y]) => iso([x, y, z + height], projection));
        bevel = runsOf(facing, true)
            .map((run) => pathOf([top[run[0]], ...run.slice(1, -1).map((index) => insetTop[index]), top[run[run.length - 1]]]))
            .join("");
    }
    return {
        fill,
        outline: outline.join(""),
        crease: crease.join(""),
        top: pathOf(oriented(top), true),
        shades: buckets.map((paths) => paths.join("")),
        bevel,
    };
}
const ringOf = (plan, steps = 8) => roundedPlan(plan, steps);
function slabOf(plan, z, height, projection, steps = 8, bevel = 0) {
    return extrude(ringOf(plan, steps), z, height, projection, { convex: true, bevel });
}
function circleRing(cx, cy, radius, steps = 40) {
    return Array.from({ length: steps }, (_, step) => {
        const angle = (step / steps) * Math.PI * 2;
        return [cx + radius * Math.cos(angle), cy + radius * Math.sin(angle)];
    });
}
function cylinder(cx, cy, radius, z, height, projection, steps = 32, bevel = 0) {
    return extrude(circleRing(cx, cy, radius, steps), z, height, projection, { convex: true, bevel });
}
const insetPlan = ({ x, y, w, d, r }, by) => ({ x: x + by, y: y + by, w: w - by * 2, d: d - by * 2, r: Math.max(0, r - by) });
function onTop(points, z, projection, closed = false) {
    return pathOf(points.map(([x, y]) => iso([x, y, z], projection)), closed);
}
const planOutline = (plan, z, projection, steps = 8) => onTop(ringOf(plan, steps), z, projection, true);
const lineOnTop = (from, to, z, projection) => onTop([from, to], z, projection);
const segment = (from, to, projection) => pathOf([iso(from, projection), iso(to, projection)]);
const rise = (at, from, to, projection) => segment([at[0], at[1], from], [at[0], at[1], to], projection);
const ring = (cx, cy, radius, z, projection, steps = 40) => onTop(circleRing(cx, cy, radius, steps), z, projection, true);
const pointsAt = (points, projection) => points.map((point) => iso(point, projection));
function dotGrid(x, y, columns, rows, gap, z, projection) {
    const dots = [];
    for (let row = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++)
            dots.push(iso([x + column * gap, y + row * gap, z], projection));
    }
    return dots;
}
function corners({ x, y, w, d }, inset = 0) {
    return [
        [x + inset, y + inset],
        [x + w - inset, y + inset],
        [x + inset, y + d - inset],
        [x + w - inset, y + d - inset],
    ];
}
function boxCorners({ x, y, w, d }, z0, z1) {
    const out = [];
    for (const px of [x, x + w])
        for (const py of [y, y + d])
            for (const z of [z0, z1])
                out.push([px, py, z]);
    return out;
}
function knurl(cx, cy, radius, z0, z1, count, projection, inset = 0.4) {
    const [vx, vy] = towardViewer(projection);
    const lines = [];
    for (let index = 0; index < count; index++) {
        const angle = (index / count) * Math.PI * 2;
        const nx = Math.cos(angle);
        const ny = Math.sin(angle);
        if (nx * vx + ny * vy < 0.15)
            continue;
        lines.push(segment([cx + radius * nx, cy + radius * ny, z0 + inset], [cx + radius * nx, cy + radius * ny, z1 - inset], projection));
    }
    return lines.join("");
}
function sideArc(cx, cy, radius, z, projection, steps = 24) {
    const [vx, vy] = towardViewer(projection);
    const facing = Math.atan2(vy, vx);
    const points = [];
    for (let step = 0; step <= steps; step++) {
        const angle = facing - Math.PI / 2 + (step / steps) * Math.PI;
        points.push(iso([cx + radius * Math.cos(angle), cy + radius * Math.sin(angle), z], projection));
    }
    return pathOf(points);
}
function ringSeam(ring, z, projection) {
    const count = ring.length;
    const counter = signedArea(ring) > 0;
    const [vx, vy] = towardViewer(projection);
    const facing = ring.map(([ax, ay], index) => {
        const [bx, by] = ring[(index + 1) % count];
        const dx = bx - ax;
        const dy = by - ay;
        const [nx, ny] = counter ? [dy, -dx] : [-dy, dx];
        return nx * vx + ny * vy > 1e-9;
    });
    return runsOf(facing, true).map((run) => pathOf(run.map((index) => iso([ring[index][0], ring[index][1], z], projection)))).join("");
}
const sideSeam = (plan, z, projection, steps = 8) => ringSeam(ringOf(plan, steps), z, projection);
function sideRing(center, radius, axis, projection, steps = 20) {
    const [px, py, pz] = center;
    const points = [];
    for (let step = 0; step < steps; step++) {
        const angle = (step / steps) * Math.PI * 2;
        const u = radius * Math.cos(angle);
        const v = radius * Math.sin(angle);
        points.push(iso(axis === "x" ? [px, py + u, pz + v] : [px + u, py, pz + v], projection));
    }
    return pathOf(points, true);
}
function coil(from, to, center, radius, turns, axis, projection, perTurn = 16) {
    const count = Math.max(1, Math.round(turns * perTurn));
    const back = [];
    const front = [];
    let run = [];
    let near = null;
    for (let index = 0; index <= count; index++) {
        const share = index / count;
        const angle = share * turns * Math.PI * 2;
        const u = radius * Math.cos(angle);
        const v = radius * Math.sin(angle);
        const along = from + (to - from) * share;
        const point = axis === "x" ? [along, center[0] + u, center[1] + v] : [center[0] + u, along, center[1] + v];
        const normal = axis === "x" ? [0, Math.cos(angle), Math.sin(angle)] : [Math.cos(angle), 0, Math.sin(angle)];
        const facing = depthOf(normal, projection) > 0;
        const flat = iso(point, projection);
        if (near === null)
            near = facing;
        if (facing !== near) {
            run.push(flat);
            (near ? front : back).push(pathOf(run));
            run = [flat];
            near = facing;
            continue;
        }
        run.push(flat);
    }
    if (run.length > 1)
        (near ? front : back).push(pathOf(run));
    return { back: back.join(""), front: front.join("") };
}
function topTicks(from, to, step, every, edge, z, lengths, projection, axis = "x") {
    const minor = [];
    const major = [];
    const first = Math.ceil(from / step) * step;
    for (let at = first, index = Math.round(first / step); at <= to + 1e-9; at += step, index++) {
        const big = index % every === 0;
        const length = big ? lengths[1] : lengths[0];
        const a = axis === "x" ? [at, edge] : [edge, at];
        const b = axis === "x" ? [at, edge + length] : [edge + length, at];
        (big ? major : minor).push(lineOnTop(a, b, z, projection));
    }
    return { minor: minor.join(""), major: major.join("") };
}
function sideTicks(from, to, step, every, face, top, lengths, projection, axis = "x") {
    const minor = [];
    const major = [];
    const first = Math.ceil(from / step) * step;
    for (let at = first, index = Math.round(first / step); at <= to + 1e-9; at += step, index++) {
        const big = index % every === 0;
        const length = big ? lengths[1] : lengths[0];
        const a = axis === "x" ? [at, face, top] : [face, at, top];
        const b = axis === "x" ? [at, face, top - length] : [face, at, top - length];
        (big ? major : minor).push(segment(a, b, projection));
    }
    return { minor: minor.join(""), major: major.join("") };
}
function radialTicks(cx, cy, radius, count, every, z, lengths, projection, from = 0, span = Math.PI * 2) {
    const minor = [];
    const major = [];
    const closed = Math.abs(span - Math.PI * 2) < 1e-9;
    const steps = closed ? count : count + 1;
    for (let index = 0; index < steps; index++) {
        const angle = from + (index / count) * span;
        const big = index % every === 0;
        const inner = radius - (big ? lengths[1] : lengths[0]);
        const sx = Math.sin(angle);
        const sy = -Math.cos(angle);
        (big ? major : minor).push(lineOnTop([cx + sx * inner, cy + sy * inner], [cx + sx * radius, cy + sy * radius], z, projection));
    }
    return { minor: minor.join(""), major: major.join("") };
}
const haloOf = (plan, z, height, projection) => slabOf(plan, z, height, projection).fill;
function axisVector(projection, [dx, dy, dz]) {
    const origin = iso([0, 0, 0], projection);
    const moved = iso([dx, dy, dz], projection);
    return [moved[0] - origin[0], moved[1] - origin[1]];
}
const fine = (value) => Math.round(value * 100) / 100;
function translateAlong(projection, by) {
    const [x, y] = axisVector(projection, by);
    return `translate(${fine(x)} ${fine(y)})`;
}
const thousandth = (value) => Math.round(value * 1000) / 1000;
function axesAt(at, z, projection) {
    const origin = iso([at[0], at[1], z], projection);
    const along = (point) => {
        const [px, py] = iso(point, projection);
        return [px - origin[0], py - origin[1]];
    };
    return { origin, x: along([at[0] + 1, at[1], z]), y: along([at[0], at[1] + 1, z]), z: along([at[0], at[1], z + 1]) };
}
const matrixOf = (u, v, origin) => `matrix(${thousandth(u[0])} ${thousandth(u[1])} ${thousandth(v[0])} ${thousandth(v[1])} ${thousandth(origin[0])} ${thousandth(origin[1])})`;
function holdStill(element, [dx, dy]) {
    const text = dx || dy ? `translate(${-dx} ${-dy})` : "";
    element.querySelectorAll("[data-hold]").forEach((node) => (text ? node.setAttribute("transform", text) : node.removeAttribute("transform")));
}
function topMatrix(at, z, projection, along = "x") {
    const { origin, x, y } = axesAt(at, z, projection);
    return along === "x" ? matrixOf(x, y, origin) : matrixOf([-y[0], -y[1]], x, origin);
}
function sideMatrix(at, z, projection, face) {
    const { origin, x, y, z: up } = axesAt(at, z, projection);
    const down = [-up[0], -up[1]];
    return face === "left" ? matrixOf(x, down, origin) : matrixOf([-y[0], -y[1]], down, origin);
}
function screenRise(height, projection) {
    const { cosE, k } = cameraOf(projection);
    return height * cosE * k;
}
function fitProjection(points, width, height, { pad = 24, headroom = 0, azimuth = AZIMUTH, elevation = ELEVATION } = {}) {
    const unit = { origin: [0, 0], scale: 1, azimuth, elevation };
    const flat = points.map((point) => iso(point, unit));
    const xs = flat.map(([x]) => x);
    const ys = flat.map(([, y]) => y);
    const left = Math.min(...xs);
    const right = Math.max(...xs);
    const up = Math.min(...ys);
    const down = Math.max(...ys);
    const scale = Math.min((width - pad * 2) / (right - left), (height - pad * 2 - headroom) / (down - up));
    return {
        origin: [width / 2 - ((left + right) / 2) * scale, headroom + (height - headroom) / 2 - ((up + down) / 2) * scale],
        scale,
        azimuth,
        elevation,
    };
}
const escape = (text) => text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const attrs = (pairs) => Object.entries(pairs)
    .filter(([, value]) => value !== undefined && value !== false)
    .map(([key, value]) => ` ${key}="${escape(String(value))}"`)
    .join("");
function solidSvg(paths, { tone = "hi", crease = "faint", halo = false, lit = false, flat = false, className, inner = "" } = {}) {
    const parts = [];
    if (halo)
        parts.push(`<path class="iso-halo" d="${paths.fill}"/>`);
    parts.push(`<path class="iso-fill" d="${paths.fill}"/>`);
    if (!flat) {
        paths.shades.forEach((d, shade) => {
            if (d)
                parts.push(`<path class="iso-shade" data-shade="${shade}" d="${d}"/>`);
        });
        parts.push(`<path class="iso-top" d="${paths.top}"/>`);
    }
    if (crease !== "none" && paths.crease)
        parts.push(`<path class="iso-line iso-crease" data-tone="${crease}" d="${paths.crease}"/>`);
    if (crease !== "none" && paths.bevel)
        parts.push(`<path class="iso-line iso-bevel" data-tone="${crease}" d="${paths.bevel}"/>`);
    if (inner)
        parts.push(inner);
    parts.push(`<path class="iso-line iso-edge" data-tone="${tone}" d="${paths.outline}"/>`);
    return `<g${attrs({ class: className ? `iso-solid ${className}` : "iso-solid", "data-lit": lit ? "" : undefined, "data-seamless": paths.seamless ? "" : undefined })}>${parts.join("")}</g>`;
}
function lineSvg(d, { tone = "lo", dotted = false, dashed = false, flow = false, className, free } = {}) {
    if (!d)
        return "";
    return `<path${attrs({
        class: className ? `iso-line ${className}` : "iso-line",
        "data-tone": tone,
        "data-free": free === true ? "" : free || undefined,
        "data-dotted": dotted ? "" : undefined,
        "data-dashed": dashed ? "" : undefined,
        "data-flow": flow ? "" : undefined,
        d,
    })}/>`;
}
function dotsSvg(points, { size = 0.5, tone = "mid", pulse = false } = {}) {
    const dots = points
        .map(([x, y, alpha], index) => `<circle cx="${tenth(x)}" cy="${tenth(y)}" r="${size}"${alpha !== undefined && alpha < 1 ? ` fill-opacity="${Math.max(0, alpha).toFixed(2)}"` : ""}${pulse ? ` data-pulse="" style="--pulse-at:${(index * 137) % 1600}ms"` : ""}/>`)
        .join("");
    return `<g class="iso-dots" data-tone="${tone}">${dots}</g>`;
}
function fadedSvg(list, style = {}) {
    const groups = new Map();
    for (const entry of list) {
        const [d, alpha] = Array.isArray(entry) ? entry : [entry.d, entry.alpha];
        if (!d || !(alpha > 0.02))
            continue;
        const level = Math.min(1, Math.round(alpha * 20) / 20);
        groups.set(level, (groups.get(level) ?? "") + d);
    }
    return [...groups].map(([alpha, d]) => (alpha >= 1 ? lineSvg(d, style) : `<g opacity="${alpha.toFixed(2)}">${lineSvg(d, style)}</g>`)).join("");
}
function fadeLineSvg(points, { fade = [0, 0], tone = "lo", className, stops = 6 } = {}) {
    if (points.length < 2)
        return "";
    const ease = (t) => t * t * (3 - 2 * t);
    const hashOf = (text) => {
        let hash = 2166136261;
        for (let index = 0; index < text.length; index++)
            hash = Math.imul(hash ^ text.charCodeAt(index), 16777619);
        return (hash >>> 0).toString(36);
    };
    const lengths = [0];
    for (let index = 1; index < points.length; index++)
        lengths.push(lengths[index - 1] + Math.hypot(points[index][0] - points[index - 1][0], points[index][1] - points[index - 1][1]));
    const at = (length) => {
        let index = 1;
        while (index < points.length - 1 && lengths[index] < length)
            index++;
        const span = lengths[index] - lengths[index - 1] || 1;
        const t = Math.max(0, Math.min(1, (length - lengths[index - 1]) / span));
        return [points[index - 1][0] + (points[index][0] - points[index - 1][0]) * t, points[index - 1][1] + (points[index][1] - points[index - 1][1]) * t];
    };
    const pieceOf = (from, to) => [at(from), ...points.filter((_, index) => lengths[index] > from + 1e-6 && lengths[index] < to - 1e-6), at(to)];
    const total = lengths[lengths.length - 1];
    if (total < 1e-6)
        return "";
    let [start, end] = Array.isArray(fade) ? fade : [fade, fade];
    if (start + end > total) {
        const share = total / (start + end);
        start *= share;
        end *= share;
    }
    const paint = `var(--anatomy-${tone})`;
    const ramp = (piece, rising) => {
        const d = pathOf(piece);
        const [x1, y1] = piece[0];
        const [x2, y2] = piece[piece.length - 1];
        const id = `iso-fade-${hashOf(`${d}|${tone}|${rising}`)}`;
        const marks = Array.from({ length: stops + 1 }, (_, index) => {
            const t = index / stops;
            const alpha = ease(rising ? t : 1 - t);
            return `<stop offset="${t.toFixed(3)}" stop-opacity="${alpha.toFixed(3)}" style="stop-color:${paint}"/>`;
        }).join("");
        const gradient = `<linearGradient id="${id}" gradientUnits="userSpaceOnUse" x1="${tenth(x1)}" y1="${tenth(y1)}" x2="${tenth(x2)}" y2="${tenth(y2)}">${marks}</linearGradient>`;
        return `<defs>${gradient}</defs><path${attrs({ class: className ? `iso-line ${className}` : "iso-line", "data-tone": tone, "data-free": rising ? "start" : "end", d, style: `stroke:url(#${id})` })}/>`;
    };
    const parts = [];
    if (start > 0.05)
        parts.push(ramp(pieceOf(0, start), true));
    if (total - end - start > 0.05)
        parts.push(lineSvg(pathOf(pieceOf(start, total - end)), { tone, className }));
    if (end > 0.05)
        parts.push(ramp(pieceOf(total - end, total), false));
    return `<g class="iso-fade">${parts.join("")}</g>`;
}
function wireSvg(from, to, { via = [], tone = "lo", dotted = false, dashed = false, flow = false, ends = "both", size = 1.2 } = {}) {
    const d = pathOf([from, ...via, to]);
    const end = ([x, y]) => `<circle class="iso-wire-end" cx="${tenth(x)}" cy="${tenth(y)}" r="${size}"/>`;
    return `<g class="iso-wire" data-tone="${tone}">${lineSvg(d, { tone, dotted, dashed, flow })}${ends === "both" || ends === "from" ? end(from) : ""}${ends === "both" || ends === "to" ? end(to) : ""}</g>`;
}
function faceTextSvg(transform, text, { size = 3, tone = "mid", anchor = "start" } = {}) {
    return `<text class="iso-face-text" data-tone="${tone}" transform="${transform}" font-size="${size}" text-anchor="${anchor}">${escape(text)}</text>`;
}
function groupSvg(children, extra = {}) {
    return `<g${attrs(extra)}>${Array.isArray(children) ? children.join("") : children}</g>`;
}
function figureSvg({ width, height, label, body, standalone = false, className }) {
    const style = standalone ? `<style>${ISO_CSS}</style>` : "";
    return `<svg${attrs({
        xmlns: "http://www.w3.org/2000/svg",
        class: `iso-svg${standalone ? " iso" : ""}${className ? ` ${className}` : ""}`,
        "data-theme": standalone || undefined,
        viewBox: `0 0 ${width} ${height}`,
        role: "img",
        "aria-label": label,
    })}>${style}${Array.isArray(body) ? body.join("") : body}</svg>`;
}
function swatchSvg(mark) {
    if (mark === "raised" || mark === "flat" || mark === "lit") {
        const body = mark === "flat" ? "M2 6.5 8 3.5 14 6.5 8 9.5Z" : "M2 4.5 8 1.5 14 4.5 14 6 8 9 2 6Z";
        const crease = mark === "flat" ? "" : `<path class="iso-swatch-crease" d="M2 4.5 8 7.5 14 4.5"/>`;
        return `<svg class="iso-swatch" data-mark="${mark}" viewBox="0 0 16 10" aria-hidden="true"><path d="${body}"/>${crease}</svg>`;
    }
    return `<svg class="iso-swatch" data-mark="${mark}" viewBox="0 0 16 10" aria-hidden="true"><path d="M1.5 5h13"/></svg>`;
}
function plateHtml({ fig, title, hint, readout = "", keys = [], caption, body }) {
    const corner = (name, text, extra = "") => `<span class="iso-plate-corner" data-corner="${name}"${extra}>${escape(text)}</span>`;
    const legend = keys.length || caption
        ? `<figcaption class="iso-legend">${keys.length ? `<span class="iso-keys">${keys.map((key) => `<span class="iso-key">${swatchSvg(key.mark)}${escape(key.label)}</span>`).join("")}</span>` : ""}${caption ? `<span class="iso-caption">${escape(caption)}</span>` : ""}</figcaption>`
        : "";
    return `<figure class="iso-figure"><div class="iso-plate"><div class="iso-plate-corners" aria-hidden="true">${corner("fig", fig)}${title ? corner("title", title) : ""}${hint ? corner("hint", hint) : ""}${corner("readout", readout, " data-readout")}</div>${body}</div>${legend}</figure>`;
}
function pageHtml({ title, theme = "dark", body, script = "", width = 650 }) {
    return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${escape(title)}</title><style>${ISO_CSS}${PAGE_CSS.replace("__WIDTH__", String(width))}</style></head><body class="iso" data-theme="${theme}"><main class="iso-page">${body}</main>${script ? `<script type="module">${script.replace(/<\/(script)/gi, "<\\/$1")}</script>` : ""}</body></html>`;
}
const PAGE_CSS = `
*{box-sizing:border-box}
html{color-scheme:dark}
body[data-theme="light"]{color-scheme:light}
body{margin:0;background:var(--anatomy-page);color:var(--anatomy-text);font:14px/1.6 ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif;-webkit-font-smoothing:antialiased}
.iso-page{width:min(__WIDTH__px,100% - 32px);margin:64px auto 96px}
`;
const ISO_CSS = `
.iso{
  --anatomy-page:#0b0b0b;--anatomy-card:#131313;--anatomy-text:#a3a3a3;--anatomy-strong:#e6e6e6;--anatomy-muted:#6e6e6e;
  --anatomy-paper:#131313;--anatomy-face:#1b1b1b;--anatomy-top:#1c1c1c;
  --anatomy-shade-0:#0f0f0f;--anatomy-shade-1:#121212;--anatomy-shade-2:#151515;--anatomy-shade-3:#181818;
  --anatomy-lit-top:#262626;--anatomy-lit-shade:#1d1d1d;
  --anatomy-hi:#d4d4d4;--anatomy-mid:#6a6a6a;--anatomy-lo:#3e3e3e;--anatomy-faint:#2a2a2a;--anatomy-lit:#ffffff;
  --anatomy-halo:#050505;--anatomy-halo-opacity:.9;--anatomy-dot:#e6e6e6;
  --anatomy-red:#ff6b6b;--anatomy-green:#6be0a0;--anatomy-blue:#6b9bff;
  --anatomy-weight:.6px;--anatomy-ease:cubic-bezier(.32,.72,0,1);
  --anatomy-mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;
  --anatomy-lift:inset 0 1px 0 0 #ffffff0a,inset 0 0 0 1px #ffffff06,0 0 0 1px #00000026,0 1px 1px -.5px #00000014,0 3px 3px -1.5px #00000014,0 6px 6px -3px #00000014,0 12px 12px -6px #00000014;
}
.iso[data-theme="light"]{
  --anatomy-page:#f2f2ef;--anatomy-card:#fbfbfa;--anatomy-text:#57575a;--anatomy-strong:#18181a;--anatomy-muted:#8c8c90;
  --anatomy-paper:#fbfbfa;--anatomy-face:#ffffff;--anatomy-top:#ffffff;
  --anatomy-shade-0:#dcdcd9;--anatomy-shade-1:#e5e5e2;--anatomy-shade-2:#ededea;--anatomy-shade-3:#f4f4f1;
  --anatomy-lit-top:#ffffff;--anatomy-lit-shade:#eeeeeb;
  --anatomy-hi:#26262a;--anatomy-mid:#8a8a8f;--anatomy-lo:#b4b4b8;--anatomy-faint:#d4d4d6;--anatomy-lit:#000000;
  --anatomy-halo:#8a8a80;--anatomy-halo-opacity:.32;--anatomy-dot:#3a3a3e;
  --anatomy-red:#e5484d;--anatomy-green:#30a46c;--anatomy-blue:#3e63dd;
  --anatomy-lift:inset 0 1px 0 0 #ffffff,0 0 0 1px #0000000f,0 1px 1px -.5px #0000000a,0 3px 3px -1.5px #0000000a,0 6px 6px -3px #0000000a,0 12px 12px -6px #0000000a;
}
.iso-svg{display:block;width:100%;height:auto;overflow:visible}
.iso-svg path,.iso-svg circle{vector-effect:non-scaling-stroke}
.iso-fill{fill:var(--anatomy-paper);stroke:none}
.iso-solid[data-lit]>.iso-fill{fill:var(--anatomy-face)}
.iso-shade,.iso-top{stroke:none}
.iso-shade[data-shade="0"]{fill:var(--anatomy-shade-0)}
.iso-shade[data-shade="1"]{fill:var(--anatomy-shade-1)}
.iso-shade[data-shade="2"]{fill:var(--anatomy-shade-2)}
.iso-shade[data-shade="3"]{fill:var(--anatomy-shade-3)}
.iso-top{fill:var(--anatomy-top)}
.iso-solid[data-lit]>.iso-top{fill:var(--anatomy-lit-top)}
.iso-solid[data-lit]>.iso-shade{fill:var(--anatomy-lit-shade)}
.iso-solid[data-seamless]>.iso-shade,.iso-solid[data-seamless]>.iso-top{stroke-width:.4;stroke-linejoin:round}
.iso-solid[data-seamless]>.iso-shade[data-shade="0"]{stroke:var(--anatomy-shade-0)}
.iso-solid[data-seamless]>.iso-shade[data-shade="1"]{stroke:var(--anatomy-shade-1)}
.iso-solid[data-seamless]>.iso-shade[data-shade="2"]{stroke:var(--anatomy-shade-2)}
.iso-solid[data-seamless]>.iso-shade[data-shade="3"]{stroke:var(--anatomy-shade-3)}
.iso-solid[data-seamless]>.iso-top{stroke:var(--anatomy-top)}
.iso-solid[data-seamless][data-lit]>.iso-top{stroke:var(--anatomy-lit-top)}
.iso-solid[data-seamless][data-lit]>.iso-shade{stroke:var(--anatomy-lit-shade)}
.iso-solid[data-lit]>.iso-edge{stroke:var(--anatomy-lit)}
.iso-halo{fill:var(--anatomy-halo);stroke:none;filter:blur(9px);opacity:var(--anatomy-halo-opacity);transform:translateY(3px)}
.iso-line{fill:none;stroke:var(--anatomy-lo);stroke-width:var(--anatomy-weight);stroke-linecap:round;stroke-linejoin:round}
.iso-line[data-tone="hi"]{stroke:var(--anatomy-hi)}
.iso-line[data-tone="mid"]{stroke:var(--anatomy-mid)}
.iso-line[data-tone="lo"]{stroke:var(--anatomy-lo)}
.iso-line[data-tone="faint"]{stroke:var(--anatomy-faint)}
.iso-line[data-tone="lit"]{stroke:var(--anatomy-lit)}
.iso-line[data-tone="red"]{stroke:var(--anatomy-red)}
.iso-line[data-tone="green"]{stroke:var(--anatomy-green)}
.iso-line[data-tone="blue"]{stroke:var(--anatomy-blue)}
.iso-line[data-dotted]{stroke-dasharray:.01 3.5;stroke-width:1}
.iso-line[data-dashed]{stroke-dasharray:3 3}
.iso-line[data-flow]{stroke-dasharray:2 6}
.iso-wire-end{fill:var(--anatomy-paper);stroke:var(--anatomy-lo);stroke-width:var(--anatomy-weight)}
.iso-wire[data-tone="hi"] .iso-wire-end{stroke:var(--anatomy-hi)}
.iso-wire[data-tone="mid"] .iso-wire-end{stroke:var(--anatomy-mid)}
.iso-wire[data-tone="faint"] .iso-wire-end{stroke:var(--anatomy-faint)}
.iso-wire[data-tone="lit"] .iso-wire-end{stroke:var(--anatomy-lit)}
.iso-dots circle{fill:var(--anatomy-dot);stroke:none;opacity:.32}
.iso-dots[data-tone="hi"] circle{opacity:.85}
.iso-dots[data-tone="mid"] circle{opacity:.45}
.iso-dots[data-tone="lo"] circle{opacity:.22}
.iso-dots[data-tone="faint"] circle{opacity:.12}
.iso-face-text{fill:var(--anatomy-mid);font-family:var(--anatomy-mono);letter-spacing:.04em}
.iso-face-text[data-tone="hi"]{fill:var(--anatomy-hi)}
.iso-face-text[data-tone="lo"]{fill:var(--anatomy-lo)}
.iso-face-text[data-tone="faint"]{fill:var(--anatomy-faint)}
.tb-body{fill:var(--anatomy-shade-2);stroke:none}
.tb-shine{fill:var(--anatomy-top);stroke:none}
.tb-shade{fill:var(--anatomy-shade-0);stroke:none}
.tb-ring{fill:none;stroke:var(--anatomy-lo);stroke-width:.45;stroke-linecap:butt;stroke-linejoin:round}
.tb-ring[data-tone="mid"]{stroke:var(--anatomy-mid)}
.tb-ring[data-tone="faint"]{stroke:var(--anatomy-faint)}
.tb-ring[data-tone="hi"]{stroke:var(--anatomy-hi)}
@keyframes iso-flow{to{stroke-dashoffset:-32}}
@keyframes iso-pulse{0%,100%{opacity:.18}12%{opacity:1}40%{opacity:.18}}
.iso-line[data-flow]{animation:iso-flow 1600ms linear infinite}
.iso-dots circle[data-pulse]{animation:iso-pulse 1600ms steps(1,end) infinite;animation-delay:var(--pulse-at,0ms)}
.iso-figure{margin:32px 0 36px}
.iso-plate{position:relative;padding:52px 24px;border-radius:0;background:var(--anatomy-card);box-shadow:0 0 0 1px var(--anatomy-mid);--anatomy-paper:var(--anatomy-card)}
.iso-plate-corners{position:absolute;inset:18px 20px;pointer-events:none}
.iso-plate-corner{position:absolute;color:var(--anatomy-muted);font-family:var(--anatomy-mono);font-size:10.5px;line-height:1;letter-spacing:.04em;white-space:nowrap}
.iso-plate-corner[data-corner="fig"]{top:0;left:0;color:var(--anatomy-text)}
.iso-plate-corner[data-corner="title"]{top:0;right:0;text-transform:uppercase;letter-spacing:.1em}
.iso-plate-corner[data-corner="hint"]{bottom:0;left:0;text-transform:uppercase;letter-spacing:.1em}
.iso-plate-corner[data-corner="readout"]{right:0;bottom:0;color:var(--anatomy-text);font-variant-numeric:tabular-nums}
.iso-plate .iso-svg{margin:0 auto}
.iso-legend{display:grid;gap:8px;margin-top:12px;color:var(--anatomy-muted);font-size:13px;line-height:1.55}
.iso-keys{display:flex;flex-wrap:wrap;gap:6px 18px}
.iso-key{display:inline-flex;align-items:center;gap:7px}
.iso-swatch{width:16px;height:10px;flex:none;overflow:visible}
.iso-swatch path{fill:none;stroke:var(--anatomy-hi);stroke-width:1;vector-effect:non-scaling-stroke;stroke-linejoin:round;stroke-linecap:round}
.iso-swatch[data-mark="raised"] path,.iso-swatch[data-mark="flat"] path{stroke:var(--anatomy-mid)}
.iso-swatch[data-mark="lit"] path{stroke:var(--anatomy-lit)}
.iso-swatch[data-mark="dim"] path{stroke:var(--anatomy-lo)}
.iso-swatch[data-mark="dotted"] path{stroke-dasharray:.01 3;stroke-width:1.4}
.iso-swatch[data-mark="dashed"] path{stroke-dasharray:3 2.5}
.iso-swatch[data-mark="red"] path{stroke:var(--anatomy-red)}
.iso-swatch[data-mark="green"] path{stroke:var(--anatomy-green)}
.iso-swatch[data-mark="blue"] path{stroke:var(--anatomy-blue)}
.iso-swatch-crease{stroke:var(--anatomy-lo)!important}
@media (max-width:560px){.iso-plate{padding:48px 12px 70px}.iso-plate-corner[data-corner="hint"]{bottom:18px}}
@media (prefers-reduced-motion:reduce){.iso-line[data-flow],.iso-dots circle[data-pulse]{animation:none}}
`;


const P = {"origin":[191.53190868969529,387.6410471693201],"scale":0.833870882558425,"azimuth":108,"elevation":22};
const Z0 = 112;
const SPREAD_DX = {"fan":-88,"comp":-44,"comb":0,"turb":44,"exh":88};
const MODS = [{"id":"fan","name":"Fan & inlet","x0":0,"x1":104},{"id":"comp","name":"Compressor","x0":104,"x1":252},{"id":"comb","name":"Combustor","x0":252,"x1":322},{"id":"turb","name":"Turbine","x0":322,"x1":428},{"id":"exh","name":"Exhaust nozzle","x0":428,"x1":528}];
const STAGES = [{"mod":"fan","layer":"fan","kind":"fan","s":62,"r0":27,"r1":75,"n":20,"speed":1},{"mod":"comp","layer":"comp","kind":"core","s":116,"r0":38,"r1":43,"n":22,"speed":2.6,"phase":0},{"mod":"comp","layer":"comp","kind":"core","s":128.6,"r0":36.85,"r1":41.85,"n":23,"speed":2.6,"phase":0.37},{"mod":"comp","layer":"comp","kind":"core","s":141.2,"r0":35.7,"r1":40.7,"n":24,"speed":2.6,"phase":0.74},{"mod":"comp","layer":"comp","kind":"core","s":153.8,"r0":34.55,"r1":39.55,"n":25,"speed":2.6,"phase":1.1099999999999999},{"mod":"comp","layer":"comp","kind":"core","s":166.4,"r0":33.4,"r1":38.4,"n":26,"speed":2.6,"phase":1.48},{"mod":"comp","layer":"comp","kind":"core","s":179,"r0":32.25,"r1":37.25,"n":27,"speed":2.6,"phase":1.85},{"mod":"comp","layer":"comp","kind":"core","s":191.6,"r0":31.1,"r1":36.1,"n":28,"speed":2.6,"phase":2.2199999999999998},{"mod":"comp","layer":"comp","kind":"core","s":204.2,"r0":29.950000000000003,"r1":34.95,"n":29,"speed":2.6,"phase":2.59},{"mod":"comp","layer":"comp","kind":"core","s":216.8,"r0":28.8,"r1":33.8,"n":30,"speed":2.6,"phase":2.96},{"mod":"comp","layer":"comp","kind":"core","s":229.39999999999998,"r0":27.65,"r1":32.65,"n":31,"speed":2.6,"phase":3.33},{"mod":"turb","layer":"hpt","kind":"core","s":337,"r0":35,"r1":46,"n":20,"speed":1.9,"phase":0},{"mod":"turb","layer":"lpt","kind":"core","s":359,"r0":39,"r1":51,"n":22,"speed":1.9,"phase":0.5},{"mod":"turb","layer":"lpt","kind":"core","s":375,"r0":42,"r1":54,"n":24,"speed":1.9,"phase":1},{"mod":"turb","layer":"lpt","kind":"core","s":391,"r0":45,"r1":58,"n":26,"speed":1.9,"phase":1.5},{"mod":"turb","layer":"lpt","kind":"core","s":407,"r0":48,"r1":62,"n":28,"speed":1.9,"phase":2}];
const MODINFO = {"fan":{"name":"Fan & inlet","st":[1,2],"desc":"Ram compression at the inlet, then the fan lifts the pressure ×4. In the report's model these are stations 1 → 3.","subs":["fan.lip","fan.spinner","fan.blades","fan.case","fan.cone"]},"comp":{"name":"Compressor","st":[2,3],"desc":"The high-pressure compressor adds ×7.1 on top of the fan's ×4, for an overall pressure ratio of 28.4:1 (stations 3 → 4).","subs":["comp.casing","comp.stages","comp.drum"]},"comb":{"name":"Combustor","st":[3,4],"desc":"Fuel burns at constant pressure and heats the air to the turbine inlet temperature: 1130 K at takeoff, 980 K at cruise (stations 4 → 5).","subs":["comb.flangeIn","comb.manifold","comb.liner","comb.casing","comb.flangeOut"]},"turb":{"name":"Turbine","st":[4,6],"desc":"The turbines pull work out of the hot gas: the HPT drives the compressor and the LPT drives the fan (stations 5 → 7).","subs":["turb.hpt","turb.lpt","turb.shaft","turb.casing"]},"exh":{"name":"Exhaust nozzle","st":[6,7],"desc":"The nozzle expands what is left back to ambient pressure. Thrust is F = ṁ(V₈ − V₁) (stations 7 → 8).","subs":["exh.cowl","exh.cone","exh.lip"]}};
const SUBINFO = {"fan.lip":{"mod":"fan","name":"Inlet lip","off":-38,"x":7,"desc":"The rounded intake that guides air smoothly into the fan. In flight it adds ram pressure (h₂ = h₁ + V₁²/2); on the runway V₁ = 0, so it adds none."},"fan.spinner":{"mod":"fan","name":"Spinner","off":-24,"x":30,"desc":"The nose cone. It splits the incoming air around the hub and feeds it to the fan blades."},"fan.blades":{"mod":"fan","name":"Fan blades & hub","off":0,"x":69,"desc":"Wide blades on a hub disc, spun by the LP turbine through the LP shaft. In the model the fan raises pressure ×4."},"fan.case":{"mod":"fan","name":"Fan case","off":26,"x":71,"desc":"The ring frame around the fan. It holds the fan in the duct and would contain a lost blade."},"fan.cone":{"mod":"fan","name":"LP shaft cone","off":44,"x":90,"desc":"The rear hub cone that joins the fan disc to the low-pressure shaft, which the LP turbine drives (h₇ = h₆ − h₃ + h₂)."},"comp.casing":{"mod":"comp","name":"Compressor casing","off":-30,"x":177,"desc":"Ring frames and flanges around the rotor. They carry the stator vanes that straighten the flow between stages (the vanes aren't drawn)."},"comp.stages":{"mod":"comp","name":"Ten stages","off":0,"x":180,"desc":"Each rotor disc and blade ring squeezes the air a little more. The blades shrink as the air gets denser. The model uses 80 % compressor efficiency."},"comp.drum":{"mod":"comp","name":"Rotor drum","off":32,"x":178,"desc":"The spool that carries every stage disc. The HP turbine drives it (h₆ = h₅ − h₄ + h₃)."},"comb.flangeIn":{"mod":"comb","name":"Inlet flange","off":-38,"x":257,"desc":"The bolted joint where the compressor delivers its high-pressure air into the combustor."},"comb.manifold":{"mod":"comb","name":"Fuel manifold","off":-19,"x":270,"desc":"The ring of fuel injectors. The heat added is Q = ṁ(h₅ − h₄)."},"comb.liner":{"mod":"comb","name":"Flame tube","off":0,"x":288,"desc":"The glowing liner where the fuel burns at constant pressure. Thermal stress here is the price of higher temperatures."},"comb.casing":{"mod":"comb","name":"Combustor casing","off":19,"x":295,"desc":"The pressure shell around the liner that holds the compressed air."},"comb.flangeOut":{"mod":"comb","name":"Outlet flange","off":38,"x":317,"desc":"The bolted joint that hands the hot gas to the turbine."},"turb.hpt":{"mod":"turb","name":"HP turbine","off":-34,"x":337,"desc":"One stage that takes just enough energy from the gas to drive the compressor (h₆ = h₅ − h₄ + h₃)."},"turb.lpt":{"mod":"turb","name":"LP turbine","off":6,"x":385,"desc":"Four stages that drive the fan (h₇ = h₆ − h₃ + h₂). The model uses 85 % turbine efficiency."},"turb.shaft":{"mod":"turb","name":"Turbine shaft","off":-10,"x":375,"desc":"Carries the torque from the turbines forward to the compressor and the fan."},"turb.casing":{"mod":"turb","name":"Turbine casing","off":36,"x":376,"desc":"Rings that widen as the gas expands. The materials here have to resist thermal shock."},"exh.cowl":{"mod":"exh","name":"Core cowl rings","off":-32,"x":440,"desc":"The shell that carries the exhaust gas out of the turbine."},"exh.cone":{"mod":"exh","name":"Tail cone","off":0,"x":480,"desc":"Tapers the core flow so the gas leaves smoothly, without a dead-air wake behind it."},"exh.lip":{"mod":"exh","name":"Nozzle lip","off":34,"x":514,"desc":"The exit where the gas leaves at V₈, about {V8} m/s in this mission."}};
const TAU = Math.PI * 2;
const root = document.querySelector(".tf");
const stage = root.querySelector(".tf-stage");
const svg = stage.querySelector("svg");
const readName = root.querySelector("[data-tf-name]");
const readData = root.querySelector("[data-tf-data]");
const readNote = root.querySelector("[data-tf-note]");
const parts = root.querySelector("[data-tf-parts]");
const toggle = root.querySelector("[data-tf-toggle]");
const still = matchMedia("(prefers-reduced-motion: reduce)");
const modEl = Object.fromEntries(MODS.map((m) => [m.id, svg.querySelector('[data-mod="' + m.id + '"]')]));
const layers = {};
svg.querySelectorAll("[data-blades]").forEach((g) => (layers[g.dataset.blades] = g));
const glow = svg.querySelector("[data-glow]");
const plume = svg.querySelector("[data-plume]");

const AZ = P.azimuth * Math.PI / 180, EL = P.elevation * Math.PI / 180;
const VIEW = [Math.cos(EL) * Math.cos(AZ), Math.cos(EL) * Math.sin(AZ), Math.sin(EL)];
const LIGHT = [-0.45, -0.55, 0.7];
const pointAt = (s, r, a) => [s, r * Math.cos(a), Z0 + r * Math.sin(a)];
const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const lenOf = (a) => Math.hypot(a[0], a[1], a[2]) || 1;

function bladeQuad(st, ang) {
  const fan = st.kind === "fan";
  const chordR = fan ? 22 : 4.6, chordT = fan ? 16 : 3.6, wR = fan ? 5 : 2.0, wT = fan ? 3.4 : 1.5, lean = fan ? 0.3 : 0.05, sweep = fan ? 6 : 0.6;
  const dr = wR / st.r0, dt = wT / st.r1;
  return [
    pointAt(st.s - chordR / 2, st.r0, ang - dr),
    pointAt(st.s + chordR / 2, st.r0, ang + dr),
    pointAt(st.s + chordT / 2 + sweep, st.r1, ang + dt + lean),
    pointAt(st.s - chordT / 2 + sweep, st.r1, ang - dt + lean),
  ];
}
const shadeOf = (quad) => {
  let n = cross(sub(quad[1], quad[0]), sub(quad[3], quad[0]));
  const l = lenOf(n);
  n = [n[0] / l, n[1] / l, n[2] / l];
  if (dot(n, VIEW) < 0) n = [-n[0], -n[1], -n[2]];
  const lit = dot(n, [LIGHT[0] / lenOf(LIGHT), LIGHT[1] / lenOf(LIGHT), LIGHT[2] / lenOf(LIGHT)]);
  return Math.max(0, Math.min(3, Math.floor((lit * 0.5 + 0.5) * 4)));
};
const dStr = (pts) => "M" + pts.map((p) => p[0].toFixed(1) + " " + p[1].toFixed(1)).join("L") + "Z";

// build path elements once
const NS = "http://www.w3.org/2000/svg";
const mk = (cls) => { const p = document.createElementNS(NS, "path"); p.setAttribute("class", cls); return p; };
STAGES.forEach((st) => {
  st.ang = 0;
  if (st.kind === "fan") {
    st.paths = Array.from({ length: st.n }, () => mk("tf-blade"));
    st.paths.forEach((p) => layers["fan-front"].appendChild(p));
  } else {
    st.buckets = [0, 1, 2, 3].map((i) => { const p = mk("tf-blade"); p.dataset.shade = i; layers[st.layer].appendChild(p); return p; });
  }
});

// state
const state = { e: 0, eTarget: 0, spin: 0.6, spinTarget: 0.6, glow: 0.8, glowTarget: 0.8, sel: null, subSel: null, mission: "sl", clock: 0 };
const openAmount = Object.fromEntries(MODS.map((m) => [m.id, 0]));
const dxOf = (id) => SPREAD_DX[id] * state.e;
const subEls = {};
svg.querySelectorAll("[data-sub]").forEach((g) => (subEls[g.dataset.sub] = subEls[g.dataset.sub] || []).push(g));

function drawBlades(dt) {
  const hubDepth = depthOf([60, 0, Z0], P);
  STAGES.forEach((st) => {
    st.ang += state.spin * st.speed * dt;
    if (st.kind === "fan") {
      const items = [];
      for (let i = 0; i < st.n; i++) {
        const a = st.ang + (i / st.n) * TAU;
        const q = bladeQuad(st, a);
        const pts = q.map((p) => iso(p, P));
        const depth = depthOf([q[0][0], (q[0][1] + q[2][1]) / 2, (q[0][2] + q[2][2]) / 2], P);
        items.push({ i, depth, pts, shade: shadeOf(q) });
      }
      items.sort((a, b) => a.depth - b.depth);
      const back = layers["fan-back"], front = layers["fan-front"];
      items.forEach((it) => {
        const el = st.paths[it.i];
        el.setAttribute("d", dStr(it.pts));
        el.dataset.shade = it.shade;
        const target = it.depth < hubDepth - 14 ? back : front;
        if (el.parentNode !== target || target.lastChild !== el) target.appendChild(el);
      });
    } else {
      const d = ["", "", "", ""];
      for (let i = 0; i < st.n; i++) {
        const a = st.ang + (st.phase || 0) + (i / st.n) * TAU;
        const q = bladeQuad(st, a);
        d[shadeOf(q)] += dStr(q.map((p) => iso(p, P)));
      }
      st.buckets.forEach((p, i) => p.setAttribute("d", d[i]));
    }
  });
}

function drawModules() {
  MODS.forEach((m) => modEl[m.id].setAttribute("transform", translateAlong(P, [dxOf(m.id), 0, 0])));
  Object.keys(SUBINFO).forEach((id) => {
    const s = SUBINFO[id], t = translateAlong(P, [s.off * openAmount[s.mod], 0, 0]);
    subEls[id].forEach((g) => g.setAttribute("transform", t));
  });
  const apart = state.eTarget > 0.5;
  toggle.setAttribute("aria-pressed", apart ? "true" : "false");
  const label = apart ? "\u21C4 ASSEMBLE" : "\u21C4 PULL APART";
  if (toggle.textContent !== label) toggle.textContent = label;
}

function drawHeat(time) {
  const flicker = 0.88 + 0.12 * Math.sin(time * 13) * Math.sin(time * 7.3);
  glow.style.opacity = (state.glow * flicker).toFixed(3);
  plume.style.opacity = (Math.max(0, state.glow - 0.25) * 1.25 * (0.9 + 0.1 * Math.sin(time * 17))).toFixed(3);
}

// ---- readout: ties each module and part to the cycle model on the page ----
const fmtK = (v) => Math.round(v);
function say() {
  const m = window.PROP_MODELS && window.PROP_MODELS[state.mission];
  const info = MODINFO[state.sel], part = state.subSel && SUBINFO[state.subSel];
  parts.innerHTML = "";
  if (!info) {
    readName.textContent = "CF34-8 turbofan";
    readData.textContent = m ? "Thrust " + Math.round(m.lbf).toLocaleString("en-US") + " lbf \u00B7 " + (state.mission === "sl" ? "takeoff" : "cruise") : "Hover a module";
    readNote.textContent = state.eTarget > 0.5 ? "Hover a module to open it up and read what each part does." : "Hover a module, or pull the engine apart to open the parts up.";
    return;
  }
  readName.textContent = part ? info.name + " \u203A " + part.name : info.name;
  let note = part ? part.desc : info.desc;
  if (m) note = note.replace("{V8}", Math.round(m.V8));
  readNote.textContent = note;
  if (m) {
    const a = info.st[0], b = info.st[1];
    readData.textContent = fmtK(m.T[a]) + " \u2192 " + fmtK(m.T[b]) + " K \u00B7 " + m.P[a].toFixed(0) + " \u2192 " + m.P[b].toFixed(0) + " kPa";
  } else readData.textContent = "";
  if (state.eTarget > 0.5) {
    info.subs.slice().sort((p, q) => SUBINFO[p].x - SUBINFO[q].x).forEach((id) => {
      const chip = document.createElement("span");
      chip.className = "tf-chip" + (id === state.subSel ? " on" : "");
      chip.textContent = SUBINFO[id].name;
      parts.appendChild(chip);
    });
  }
}

function select(id, subId) {
  const sId = state.eTarget > 0.5 ? subId || null : null;
  if (state.sel === id && state.subSel === sId) return;
  state.sel = id;
  state.subSel = sId;
  MODS.forEach((m) => modEl[m.id].classList.toggle("tf-sel", m.id === id && !sId));
  Object.keys(subEls).forEach((s) => subEls[s].forEach((g) => g.classList.toggle("tf-subsel", s === sId)));
  say();
}

// ---- input ----
const nearestSub = (modId, event) => {
  const box = svg.getBoundingClientRect();
  const x = (event.clientX - box.left) / box.width * 1000, y = (event.clientY - box.top) / box.height * 520;
  const mx = MODS.find((m) => m.id === modId);
  let best = null, bestD = Infinity;
  MODINFO[modId].subs.forEach((id) => {
    const s = SUBINFO[id], c = iso([s.x + dxOf(modId) + s.off * openAmount[modId], 0, Z0], P);
    const dist = Math.hypot(c[0] - x, (c[1] - y) * 0.5);
    if (dist < bestD) { best = id; bestD = dist; }
  });
  return best;
};
const hitOf = (event) => {
  const t = event.target;
  if (!t || !t.closest) return undefined;
  if (t.closest("[data-stand]")) return { mod: null };
  const sg = t.closest("[data-sub]");
  if (sg) return { mod: SUBINFO[sg.dataset.sub].mod, sub: sg.dataset.sub };
  const mg = t.closest("[data-mod]");
  if (mg) return { mod: mg.dataset.mod, sub: state.eTarget > 0.5 ? nearestSub(mg.dataset.mod, event) : null };
  return undefined;
};
const pick = (event) => {
  const h = hitOf(event);
  if (h === undefined) return;
  select(h.mod, h.sub);
};
let drag = null;
stage.addEventListener("pointermove", (event) => {
  if (drag) {
    state.eTarget = Math.max(0, Math.min(1, drag.from + (event.clientX - drag.x) / 380));
    state.e = state.eTarget;
    return;
  }
  pick(event);
});
stage.addEventListener("pointerleave", () => { if (!drag) select(null); });
stage.addEventListener("pointerdown", (event) => { drag = { x: event.clientX, from: state.eTarget }; stage.setPointerCapture(event.pointerId); });
stage.addEventListener("pointerup", (event) => {
  const click = drag && Math.abs(event.clientX - drag.x) < 4;
  if (click) state.eTarget = state.eTarget > 0.5 ? 0 : 1;
  else if (drag) state.eTarget = state.eTarget > 0.5 ? 1 : 0;
  drag = null;
  stage.releasePointerCapture(event.pointerId);
  const under = document.elementFromPoint(event.clientX, event.clientY);
  if (under) pick({ target: under, clientX: event.clientX, clientY: event.clientY });
  say();
});
toggle.addEventListener("click", () => { state.eTarget = state.eTarget > 0.5 ? 0 : 1; select(state.sel, state.subSel); say(); });
stage.addEventListener("keydown", (event) => {
  const mi = MODS.findIndex((m) => m.id === state.sel);
  const moveMod = (n) => select(MODS[Math.max(0, Math.min(MODS.length - 1, n))].id, null);
  const subs = state.sel ? MODINFO[state.sel].subs.slice().sort((p, q) => SUBINFO[p].x - SUBINFO[q].x) : [];
  if (event.key === "ArrowRight") { event.preventDefault(); moveMod(mi + 1); }
  else if (event.key === "ArrowLeft") { event.preventDefault(); moveMod(mi < 0 ? 0 : mi - 1); }
  else if (event.key === "ArrowDown" && subs.length && state.eTarget > 0.5) { event.preventDefault(); select(state.sel, subs[Math.min(subs.length - 1, subs.indexOf(state.subSel) + 1)]); }
  else if (event.key === "ArrowUp" && subs.length && state.eTarget > 0.5) { event.preventDefault(); select(state.sel, subs[Math.max(0, subs.indexOf(state.subSel) - 1)]); }
  else if (event.key === "Enter" || event.key === " ") { event.preventDefault(); state.eTarget = state.eTarget > 0.5 ? 0 : 1; select(state.sel, state.subSel); say(); }
  else if (event.key === "Escape") select(null);
});

window.TF = {
  setMission(id) {
    state.mission = id;
    state.spinTarget = id === "sl" ? 1.5 : 1.0;
    state.glowTarget = id === "sl" ? 1 : 0.72;
    say();
  },
  spinUp(amount) { state.spinTarget = amount; },
};

let last = 0, frame = 0, visible = true;
function tick(now) {
  const dt = last ? Math.min((now - last) / 1000, 1 / 20) : 1 / 60;
  last = now;
  state.clock += dt;
  const k1 = 1 - Math.exp(-dt / 0.35), k2 = 1 - Math.exp(-dt / 0.6), k3 = 1 - Math.exp(-dt / 0.28);
  state.e += (state.eTarget - state.e) * (drag ? 0 : still.matches ? 1 : k1);
  MODS.forEach((m) => {
    const want = state.eTarget > 0.5 && state.e > 0.8 && state.sel === m.id ? 1 : 0;
    openAmount[m.id] += (want - openAmount[m.id]) * (still.matches ? 1 : k3);
    if (Math.abs(want - openAmount[m.id]) < 0.001) openAmount[m.id] = want;
  });
  state.spin += (state.spinTarget - state.spin) * k2;
  state.glow += (state.glowTarget - state.glow) * k2;
  drawModules();
  drawBlades(still.matches ? 0 : dt);
  drawHeat(state.clock);
  frame = visible ? requestAnimationFrame(tick) : 0;
}
new IntersectionObserver((entries) => { visible = entries[entries.length - 1].isIntersecting; if (visible && !frame) { last = 0; frame = requestAnimationFrame(tick); } }).observe(stage);
if (still.matches) state.spin = 0.2;
say();
frame = requestAnimationFrame(tick);

})();
