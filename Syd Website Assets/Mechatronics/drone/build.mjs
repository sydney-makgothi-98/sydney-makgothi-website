// Bundles main.js (three.js + the drone model, 3D parts and graphs) into drone.js, next to the page that loads it.
// three and esbuild come from the teardown skill's node_modules (npm install in ~/.claude/skills/teardown).   node build.mjs
import path from 'node:path';
import os from 'node:os';
import {createRequire} from 'node:module';
import {fileURLToPath} from 'node:url';
const HERE = path.dirname(fileURLToPath(import.meta.url));
const DEPS = process.env.TEARDOWN_DEPS || path.join(os.homedir(), '.claude', 'skills', 'teardown', 'node_modules');
const esbuild = createRequire(path.join(DEPS, 'x.js'))('esbuild');
await esbuild.build({entryPoints: [path.join(HERE, 'main.js')], outfile: path.join(HERE, 'drone.js'), bundle: true, minify: true, format: 'iife', target: 'es2020', nodePaths: [DEPS], legalComments: 'none', logLevel: 'info'});
