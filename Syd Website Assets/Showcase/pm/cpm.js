// The planning model behind the project management page: a representative construction programme (a three-storey commercial building run by six
// departments) and the maths of a scheduling tool: the critical path method, crashing, S-curves and a Monte Carlo risk run. No drawing in here.
export const DEPTS = {
  pm:   {name: 'Project management', color: '#fbbf24'},
  civ:  {name: 'Civil', color: '#fb923c'},
  str:  {name: 'Structural', color: '#f87171'},
  mech: {name: 'Mechanical', color: '#60a5fa'},
  elec: {name: 'Electrical', color: '#a78bfa'},
  fin:  {name: 'Finishes', color: '#34d399'},
};
// id, name, department, duration (days), predecessors, crew (people on site), cost per day (kR), crash: [most days you can save, extra cost per day saved (kR)], risk: [optimistic, pessimistic] as a multiple of duration
const RAW = [
  ['A', 'Site establishment and permits', 'pm', 10, [], 4, 6, [2, 8], [0.9, 1.5]],
  ['B', 'Procure structural steel and rebar', 'pm', 15, ['A'], 2, 3, [3, 5], [0.9, 1.8]],
  ['C', 'Bulk excavation', 'civ', 12, ['A'], 8, 14, [3, 12], [0.85, 1.4]],
  ['D', 'Foundations: piles and pad footings', 'civ', 20, ['C'], 14, 22, [4, 20], [0.9, 1.5]],
  ['E', 'Ground floor slab', 'civ', 8, ['D'], 12, 18, [2, 16], [0.9, 1.3]],
  ['F', 'Structural steel frame', 'str', 25, ['E', 'B'], 16, 30, [5, 28], [0.9, 1.4]],
  ['G', 'Suspended floor slabs', 'str', 18, ['F'], 18, 26, [4, 22], [0.9, 1.5]],
  ['H', 'Roof structure and waterproofing', 'str', 14, ['G'], 10, 16, [3, 14], [0.9, 1.6]],
  ['I', 'Brickwork and facade', 'civ', 30, ['G'], 20, 24, [6, 20], [0.9, 1.4]],
  ['J', 'Windows and glazing', 'fin', 12, ['I'], 8, 15, [2, 14], [0.9, 1.5]],
  ['K', 'Plumbing first fix', 'mech', 15, ['G'], 8, 10, [3, 9], [0.9, 1.3]],
  ['L', 'HVAC ducting and plant', 'mech', 22, ['G'], 10, 20, [4, 18], [0.9, 1.5]],
  ['M', 'Electrical first fix', 'elec', 18, ['G'], 10, 12, [4, 10], [0.9, 1.3]],
  ['N', 'Plaster and screed', 'fin', 16, ['K', 'M', 'I'], 14, 14, [3, 12], [0.9, 1.3]],
  ['O', 'Ceilings and partitions', 'fin', 12, ['L', 'N'], 12, 13, [3, 11], [0.9, 1.3]],
  ['P', 'Electrical second fix', 'elec', 14, ['N'], 8, 11, [3, 10], [0.9, 1.3]],
  ['Q', 'Plumbing second fix and fixtures', 'mech', 10, ['N'], 6, 9, [2, 8], [0.9, 1.3]],
  ['R', 'Flooring and painting', 'fin', 20, ['O'], 14, 16, [4, 14], [0.9, 1.3]],
  ['S', 'HVAC testing and commissioning', 'mech', 8, ['O', 'H'], 5, 8, [2, 7], [0.9, 1.6]],
  ['T', 'Electrical testing and distribution boards', 'elec', 8, ['P'], 5, 8, [2, 7], [0.9, 1.4]],
  ['U', 'External works and landscaping', 'civ', 15, ['H', 'J'], 10, 9, [3, 8], [0.85, 1.4]],
  ['V', 'Lift installation', 'mech', 14, ['H', 'I'], 6, 14, [2, 16], [0.9, 1.7]],
  ['W', 'Fire systems and inspection', 'elec', 10, ['P', 'Q'], 6, 9, [2, 9], [0.9, 1.5]],
  ['X', 'Snagging', 'pm', 10, ['R', 'S', 'T', 'V', 'W'], 6, 5, [3, 6], [0.8, 1.5]],
  ['Y', 'Handover and occupancy certificate', 'pm', 5, ['X', 'U'], 3, 4, [1, 5], [0.9, 1.6]],
];
export const TASKS = RAW.map(([id, name, dept, dur, pred, crew, cost, crash, risk]) => ({id, name, dept, dur, pred, crew, cost, crash, risk}));

/** The critical path method: forward pass for earliest times, backward pass for latest, float, and the critical set. */
export function cpm(tasks = TASKS, dur = null) {
  const by = Object.fromEntries(tasks.map((t) => [t.id, {...t, d: dur ? dur[t.id] ?? t.dur : t.dur, succ: []}]));
  tasks.forEach((t) => t.pred.forEach((p) => by[p].succ.push(t.id)));
  const order = [], seen = new Set();
  const visit = (id) => { if (seen.has(id)) return; seen.add(id); by[id].pred.forEach(visit); order.push(id); };
  tasks.forEach((t) => visit(t.id));
  for (const id of order) { const n = by[id]; n.es = n.pred.length ? Math.max(...n.pred.map((p) => by[p].ef)) : 0; n.ef = n.es + n.d; }
  const finish = Math.max(...order.map((id) => by[id].ef));
  for (const id of [...order].reverse()) { const n = by[id]; n.lf = n.succ.length ? Math.min(...n.succ.map((s) => by[s].ls)) : finish; n.ls = n.lf - n.d; n.float = n.ls - n.es; n.crit = n.float === 0; }
  // free float: how far a task can slip before it delays the earliest start of any successor
  for (const id of order) { const n = by[id]; n.free = n.succ.length ? Math.min(...n.succ.map((s) => by[s].es)) - n.ef : finish - n.ef; }
  // levels for a left-to-right network layout
  for (const id of order) { const n = by[id]; n.level = n.pred.length ? 1 + Math.max(...n.pred.map((p) => by[p].level)) : 0; }
  return {by, order, finish, tasks: order.map((id) => by[id])};
}

/** Cheapest way to save one day: crash the critical task with the lowest extra cost that still has room. Returns the id and cost, or null. */
export function crashStep(tasks, dur) {
  const r = cpm(tasks, dur);
  const options = r.tasks.filter((t) => t.crit && dur[t.id] > t.dur - t.crash[0]).sort((a, b) => a.crash[1] - b.crash[1]);
  return options.length ? {id: options[0].id, cost: options[0].crash[1], finish: r.finish} : null;
}

/** Cumulative cost curves: every task started as early as possible (ES) and as late as possible (LS). Their gap is the "banana". */
export function sCurves(r) {
  const T = r.finish, early = new Float64Array(T + 1), late = new Float64Array(T + 1);
  for (const n of r.tasks) for (let d = 0; d < n.d; d++) { early[n.es + d + 1] += n.cost; late[n.ls + d + 1] += n.cost; }
  for (let d = 1; d <= T; d++) { early[d] += early[d - 1]; late[d] += late[d - 1]; }
  return {early, late, total: early[T]};
}
/** People on site each day, per department, with every task at its earliest start. */
export function crewByDay(r, shift = null) {
  const T = r.finish, out = {};
  for (const k of Object.keys(DEPTS)) out[k] = new Float64Array(T);
  for (const n of r.tasks) { const s = shift && shift[n.id] != null ? shift[n.id] : n.es; for (let d = s; d < Math.min(T, s + n.d); d++) out[n.dept][d] += n.crew; }
  return out;
}

function mulberry32(a) { return () => { a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
/** Monte Carlo: every duration is a triangular draw between optimistic and pessimistic, peaking at the planned value. Seeded, so reproducible. */
export function monteCarlo(tasks = TASKS, runs = 3000, seed = 7) {
  const rnd = mulberry32(seed), finishes = new Float64Array(runs), crit = Object.fromEntries(tasks.map((t) => [t.id, 0]));
  const order = cpm(tasks).order, by = Object.fromEntries(tasks.map((t) => [t.id, t]));
  for (let i = 0; i < runs; i++) {
    const dur = {};
    for (const t of tasks) { const a = t.dur * t.risk[0], c = t.dur, b = t.dur * t.risk[1], u = rnd(), f = (c - a) / (b - a); dur[t.id] = Math.round(u < f ? a + Math.sqrt(u * (b - a) * (c - a)) : b - Math.sqrt((1 - u) * (b - a) * (b - c))); }
    const r = cpm(tasks, dur); finishes[i] = r.finish; for (const n of r.tasks) if (n.crit) crit[n.id]++;
  }
  const sorted = Float64Array.from(finishes).sort(), pct = (p) => sorted[Math.min(runs - 1, Math.floor(p * runs))];
  return {finishes, crit: Object.fromEntries(Object.entries(crit).map(([k, v]) => [k, v / runs])), p50: pct(0.5), p80: pct(0.8), p90: pct(0.9), min: sorted[0], max: sorted[runs - 1], mean: finishes.reduce((s, v) => s + v, 0) / runs};
}
export function histogram(values, lo, hi, bins) {
  const h = new Array(bins).fill(0); for (const v of values) h[Math.min(bins - 1, Math.max(0, Math.floor((v - lo) / (hi - lo) * bins)))]++; return h;
}
