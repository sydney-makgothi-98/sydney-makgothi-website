// Chapter 14: timeline arithmetic, checked by GSAP itself.  node timeline.js
const { gsap } = require('gsap');
const t = () => ({ x: 0 });
function report(label, tl) {
    const rows = tl.getChildren().map(tw => `${tw.vars.id}: ${tw.startTime().toFixed(2)}..${(tw.startTime() + tw.duration()).toFixed(2)}`);
    console.log(`${label}: ${rows.join('  ')}  total ${tl.duration().toFixed(2)} s`);
}
const tl1 = gsap.timeline({ paused: true })
    .to(t(), { x: 100, duration: 1, id: 'a' })
    .to(t(), { x: 100, duration: 2, id: 'b' }, '<')
    .to(t(), { x: 100, duration: 1, id: 'c' }, '+=0.5');
report('worked example', tl1);
const tl2 = gsap.timeline({ paused: true })
    .to(t(), { duration: 2, id: 'a' })
    .to(t(), { duration: 1, id: 'b' }, '-=0.5')
    .to(t(), { duration: 1, id: 'c' }, 0);
report('problem 2', tl2);
const boxes = [t(), t(), t(), t(), t()];
const tw = gsap.to(boxes, { x: 100, duration: 1, stagger: 0.2, paused: true });
console.log('stagger: total', tw.duration().toFixed(2), 's; the last box starts at', (tw.duration() - 1).toFixed(2));
const tl3 = gsap.timeline({ paused: true, defaults: { duration: 0.5, ease: 'power2.out' } })
    .from(t(), { x: -20, id: 'logo' })
    .from([t(), t(), t()], { x: 10, stagger: 0.1, id: 'nav' })
    .from(t(), { x: 30, id: 'hero' }, '-=0.2');
report('nav sequence', tl3);
const tl4 = gsap.timeline({ paused: true }).to(t(), { x: 1, duration: 1, id: 'a' }).addLabel('mid').to(t(), { x: 1, duration: 1, id: 'b' }).to(t(), { x: 1, duration: 0.5, id: 'c' }, 'mid');
report('labels', tl4);
const obj = { x: 0 };
const tween = gsap.to(obj, { x: 100, duration: 1, ease: 'none', paused: true });
tween.progress(0.25); const lin = obj.x;
const tween2 = gsap.to({ x: 0 }, { x: 100, duration: 1, ease: 'power2.out', paused: true });
tween2.progress(0.25); const eased = tween2.targets()[0].x;
console.log(`at 25% of the time: linear x = ${lin.toFixed(1)}, power2.out x = ${eased.toFixed(1)}`);
const r = gsap.timeline({ paused: true }).to(t(), { x: 1, duration: 1 });
r.progress(1); r.reverse(); console.log('reversed() is', r.reversed(), '; a reversed timeline plays back to 0 with the same tweens');
