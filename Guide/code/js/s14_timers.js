// Chapter 11, section 11.14: timers, debounce and throttle. Run with: node s14_timers.js
function debounce(fn, ms) {
    let id = null;
    return (...args) => { clearTimeout(id); id = setTimeout(() => fn(...args), ms); };
}
function throttle(fn, ms) {
    let last = -Infinity;
    return (...args) => { const now = Date.now(); if (now - last >= ms) { last = now; fn(...args); } };
}
const log = [];
const onResizeDebounced = debounce(w => log.push(`debounced ${w}`), 40);
const onScrollThrottled = throttle(y => log.push(`throttled ${y}`), 40);
let n = 0;
const id = setInterval(() => {
    n++;
    onResizeDebounced(n * 10);
    onScrollThrottled(n * 100);
    if (n === 6) {
        clearInterval(id);
        setTimeout(() => {
            console.log(log.join('\n'));
            console.log('debounced ran once, after the burst; throttled ran at most once per 40 ms during it');
        }, 80);
    }
}, 10);
const ac = new AbortController();
setTimeout(() => ac.abort(), 15);
const start = Date.now();
new Promise((res, rej) => { const t = setTimeout(res, 1000); ac.signal.addEventListener('abort', () => { clearTimeout(t); rej(new Error('aborted')); }); })
    .catch(e => console.log(`${e.message} after about ${Math.round((Date.now() - start) / 5) * 5} ms, not 1000`));
