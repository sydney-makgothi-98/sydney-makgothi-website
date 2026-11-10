// Runs a .jsx file in Node: esbuild turns the JSX into plain JavaScript, then Node runs it.  node run_jsx.js examples.jsx
const fs = require('fs');
const path = require('path');
const Module = require('module');
const esbuild = require(path.join(process.env.USERPROFILE || process.env.HOME, '.claude', 'skills', 'teardown', 'node_modules', 'esbuild'));
const file = path.resolve(process.argv[2]);
const { code } = esbuild.transformSync(fs.readFileSync(file, 'utf8'), { loader: 'jsx', jsx: 'automatic', format: 'cjs' });
const m = new Module(file, module);
m.filename = file;
m.paths = Module._nodeModulePaths(path.dirname(file));
m._compile(code, file);
