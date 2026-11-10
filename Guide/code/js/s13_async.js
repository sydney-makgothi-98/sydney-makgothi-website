// Chapter 11, section 11.13: promises, async and await. Run with: node s13_async.js
console.log('1 start');
setTimeout(() => console.log('5 timer (task)'), 0);
Promise.resolve().then(() => console.log('3 then (microtask)'));
(async () => { console.log('2 inside async, before await'); await null; console.log('4 after await (microtask)'); })();
console.log('1 end of script');

const wait = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const fakeFetch = url => url.includes('bad') ? Promise.reject(new Error(`404 for ${url}`)) : wait(30, { url, items: [1, 2, 3] });

async function load(url) {
    try {
        const data = await fakeFetch(url);
        return `${url}: ${data.items.length} items`;
    } catch (e) {
        return `${url}: failed (${e.message})`;
    }
}

async function main() {
    const t0 = Date.now();
    const one = await load('/a.json');
    const two = await load('/b.json');                     // sequential: about 60 ms
    const seq = Date.now() - t0;
    const t1 = Date.now();
    const both = await Promise.all([load('/c.json'), load('/d.json')]);   // parallel: about 30 ms
    const par = Date.now() - t1;
    console.log('6', one, '|', two, '|', both.join(' | '));
    console.log('7 sequential took longer than parallel:', seq > par, `(${seq} ms vs ${par} ms)`);
    console.log('8', await load('/bad.json'));
    const settled = await Promise.allSettled([fakeFetch('/x'), fakeFetch('/bad')]);
    console.log('9', settled.map(s => s.status));
    const winner = await Promise.race([wait(50, 'slow'), wait(10, 'fast')]);
    console.log('10', winner);
    const p = wait(5, 'done');
    p.then(v => console.log('12 then:', v)).finally(() => console.log('13 finally'));
    console.log('11 the promise is pending here:', p instanceof Promise);
}
main();
