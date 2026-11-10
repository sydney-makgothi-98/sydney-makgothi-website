// Chapter 12: every example, rendered for real.  node run_jsx.js examples.jsx
import React, { useState, useEffect, useRef, useMemo, memo, createContext, useContext } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import TestRenderer, { act } from 'react-test-renderer';

const html = el => renderToStaticMarkup(el);
const mount = el => { let r; act(() => { r = TestRenderer.create(el); }); return r; };
const text = r => r.root.findAllByType('li').map(li => li.children.join(''));

// 12.2 components and JSX
function Greeting({ name }) { return <h1 className="title">Hello, {name}!</h1>; }
console.log('1:', html(<Greeting name="Patrick" />));

// 12.3 props down, events up: a counter, and the batching trap
function Counter({ functional }) {
    const [count, setCount] = useState(0);
    const bump = () => { if (functional) { setCount(c => c + 1); setCount(c => c + 1); setCount(c => c + 1); } else { setCount(count + 1); setCount(count + 1); setCount(count + 1); } };
    return <div><p>You clicked {count} times.</p><button onClick={bump}>Click me</button></div>;
}
for (const functional of [false, true]) {
    const r = mount(<Counter functional={functional} />);
    act(() => r.root.findByType('button').props.onClick());
    console.log(`2: three set calls in one click, ${functional ? 'functional' : 'plain'} form ->`, r.root.findByType('p').children.join(''));
}

// 12.5 keys: the warning React prints when they are missing
const errors = [];
const origError = console.error;
console.error = (...a) => errors.push(a.join(' '));
html(<ul>{['a', 'b'].map(x => <li>{x}</li>)}</ul>);
console.error = origError;
console.log('3:', errors.length ? errors[0].split('\n')[0].slice(0, 70) : 'no warning');

// 12.7 the filterable list
function FruitFilter({ fruits }) {
    const [query, setQuery] = useState('');
    const shown = fruits.filter(f => f.toLowerCase().includes(query.toLowerCase()));
    return <div><label>Filter <input value={query} onChange={e => setQuery(e.target.value)} /></label><ul>{shown.map(f => <li key={f}>{f}</li>)}</ul></div>;
}
const ff = mount(<FruitFilter fruits={['Apple', 'Banana', 'Cherry']} />);
console.log('4:', text(ff));
act(() => ff.root.findByType('input').props.onChange({ target: { value: 'an' } }));
console.log('   after typing "an":', text(ff));
act(() => ff.root.findByType('input').props.onChange({ target: { value: 'e' } }));
console.log('   after typing "e": ', text(ff));

// 12.6 effects and cleanup
const log = [];
function Ticker() {
    const [n, setN] = useState(0);
    useEffect(() => { log.push('effect: start timer'); const id = setInterval(() => setN(x => x + 1), 1000); return () => { log.push('cleanup: stop timer'); clearInterval(id); }; }, []);
    return <p>{n}</p>;
}
const tk = mount(<Ticker />);
act(() => tk.unmount());
console.log('5:', log.join(' | '));

// 12.8 refs survive renders without causing them
function RenderCounter() {
    const renders = useRef(0); renders.current++;
    const [n, setN] = useState(0);
    return <div><p>render {renders.current}, state {n}</p><button onClick={() => setN(n + 1)} /></div>;
}
const rc = mount(<RenderCounter />);
act(() => rc.root.findByType('button').props.onClick());
act(() => rc.root.findByType('button').props.onClick());
console.log('6:', rc.root.findByType('p').children.join(''));

// Part IV: memo skips a child whose props did not change
let childRenders = 0;
const Child = memo(function Child({ label }) { childRenders++; return <span>{label}</span>; });
function Parent() { const [n, setN] = useState(0); return <div><Child label="fixed" /><button onClick={() => setN(n + 1)} /><i>{n}</i></div>; }
const pr = mount(<Parent />);
act(() => pr.root.findByType('button').props.onClick());
act(() => pr.root.findByType('button').props.onClick());
console.log('7: parent rendered 3 times, memoised child rendered', childRenders, 'time(s)');

// Part IV: context reaches a deep child without props
const Theme = createContext('light');
function Deep() { return <em>{useContext(Theme)}</em>; }
function Middle() { return <section><Deep /></section>; }
console.log('8:', html(<Theme.Provider value="dark"><Middle /></Theme.Provider>));

// useMemo caches a calculation between renders
let computed = 0;
function Expensive({ items }) { const total = useMemo(() => { computed++; return items.reduce((s, x) => s + x, 0); }, [items]); const [, force] = useState(0); return <div><b>{total}</b><button onClick={() => force(f => f + 1)} /></div>; }
const items = [1, 2, 3];
const ex = mount(<Expensive items={items} />);
act(() => ex.root.findByType('button').props.onClick());
console.log('9: total', ex.root.findByType('b').children.join(''), 'computed', computed, 'time(s) over 2 renders');

// conditional rendering and lists
function Status({ phase, items }) {
    return <div>{phase === 'DONE' ? <p>Finished</p> : <p>Working: {phase}</p>}{items.length > 0 && <ul>{items.map(i => <li key={i.id}>{i.label}</li>)}</ul>}</div>;
}
console.log('10:', html(<Status phase="CARRY" items={[{ id: 1, label: 'egg' }]} />));
console.log('    ', html(<Status phase="DONE" items={[]} />));
