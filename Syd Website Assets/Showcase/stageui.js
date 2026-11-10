// The parts of a 3D stage page that are not 3D: floating graphs that expand into a full-screen modal, part labels that follow the model,
// and the card that describes the selected part. Shared by the pump, engine and CAD gallery pages.
import {fit} from './chart.js';
import {V3, THREE} from './kit.js';

const $ = (id) => document.getElementById(id);

/** drawers: {name: (canvas) => void}. Every <figure data-g="name"> in the page gets its canvas drawn, and opens enlarged when clicked. */
export function graphs(drawers) {
  const figs = [...document.querySelectorAll('figure.g[data-g]')], modal = $('modal'), mc = modal && modal.querySelector('canvas'), mt = modal && modal.querySelector('h3');
  let open = null;
  const draw = () => { for (const f of figs) { const c = f.querySelector('canvas'); if (c && c.clientWidth > 20 && drawers[f.dataset.g]) drawers[f.dataset.g](c); } if (open && mc) drawers[open](mc); };
  const close = () => { open = null; modal.classList.remove('on'); };
  for (const f of figs) {
    const go = () => { open = f.dataset.g; mt.textContent = f.querySelector('figcaption').textContent.replace(/\s+/g, ' ').trim(); modal.classList.add('on'); requestAnimationFrame(() => drawers[open](mc)); };
    f.tabIndex = 0; f.setAttribute('role', 'button'); f.addEventListener('click', go); f.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } });
  }
  if (modal) { modal.addEventListener('click', (e) => { if (e.target === modal) close(); }); modal.querySelector('.x').onclick = close; addEventListener('keydown', (e) => { if (e.key === 'Escape') { close(); } }); }
  let rt; addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(draw, 80); });
  return {draw, close, openModal: (name) => { open = name; modal.classList.add('on'); requestAnimationFrame(() => drawers[name](mc)); }};
}

/** Floating labels for the parts of a model: pills that follow each part when it has moved apart, and select it when clicked. */
export function partLabels(container, st, onPick) {
  const items = new Map(), tmp = new V3(), box = new THREE.Box3();
  return {
    set(parts) { for (const [, el] of items) el.remove(); items.clear(); for (const p of parts) { if (p.nolabel) continue; const b = document.createElement('button'); b.className = 'plabel'; b.textContent = p.name; b.onclick = (e) => { e.stopPropagation(); onPick(p); }; container.append(b); items.set(p.id, b); p._el = b; } },
    update(parts, u, selId) {
      const r = st.el.getBoundingClientRect();
      for (const p of parts) {
        const el = items.get(p.id); if (!el) continue;
        const show = u > 0.55 && p.group.visible; el.style.opacity = show ? (selId && selId !== p.id ? 0.35 : 1) : 0; el.style.pointerEvents = show ? 'auto' : 'none'; if (!show) continue;
        box.setFromObject(p.group); box.getCenter(tmp); const [x, y, z] = st.project(tmp);
        el.style.transform = `translate(${Math.round(Math.max(8, Math.min(r.width - 8, x)))}px, ${Math.round(Math.max(60, Math.min(r.height - 120, y)))}px) translate(-50%, -50%)`;
        el.classList.toggle('on', selId === p.id);
      }
    },
  };
}

/** The part card. show(part, extra) fills it; hide() closes it. */
export function partCard(el, onClose) {
  const h = el.querySelector('h3'), k = el.querySelector('.k'), p = el.querySelector('p'), x = el.querySelector('.x');
  x.onclick = () => { el.classList.remove('on'); if (onClose) onClose(); };
  return {show(part, extra = '') { k.textContent = String(part.index ?? '').padStart(2, '0') + ' · PART'; h.textContent = part.name; p.innerHTML = part.desc + (extra ? `<br><br><span style="font-family:var(--mono);font-size:0.7rem;color:#fff">${extra}</span>` : ''); el.classList.add('on'); }, hide() { el.classList.remove('on'); }};
}

/** Eases `u` towards a target so a disassembly never jumps. Returns {u, to(t), toggle()}. */
export function explodeState(speed = 1.2) {
  const s = {u: 0, t: 0, to(t) { s.t = t; }, toggle() { s.t = s.t > 0.5 ? 0 : 1; return s.t; }, step(dt, reduce) { const d = s.t - s.u; s.u = reduce ? s.t : Math.abs(d) < 0.001 ? s.t : s.u + Math.sign(d) * Math.min(Math.abs(d), dt * speed * (0.35 + 1.2 * Math.abs(d))); return s.u; }};
  return s;
}
export {fit};
