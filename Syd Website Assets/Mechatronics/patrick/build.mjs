// Bundles entry.js (three.js + the kitchen stage + the teardown lab) into patrick.js, next to the page that loads it, and copies
// the C++ mission program into DLC/ so the "Downloadable Files" page can offer it.
// three and esbuild come from the teardown skill's node_modules (npm install in ~/.claude/skills/teardown).
//   node build.mjs          one minified file, runs offline
import path from 'node:path';
import os from 'node:os';
import fs from 'node:fs';
import {createRequire} from 'node:module';
import {fileURLToPath} from 'node:url';
const HERE = path.dirname(fileURLToPath(import.meta.url));
const DEPS = process.env.TEARDOWN_DEPS || path.join(os.homedir(), '.claude', 'skills', 'teardown', 'node_modules');
const esbuild = createRequire(path.join(DEPS, 'x.js'))('esbuild');
await esbuild.build({
  entryPoints: [path.join(HERE, 'entry.js')], outfile: path.join(HERE, 'patrick.js'), bundle: true, minify: true, format: 'iife',
  target: 'es2020', nodePaths: [DEPS], legalComments: 'none', logLevel: 'info', loader: {'.cpp': 'text'},
});
const dlc = path.join(HERE, '..', '..', '..', 'DLC');
fs.mkdirSync(dlc, {recursive: true});
fs.copyFileSync(path.join(HERE, 'patrick_mission.cpp'), path.join(dlc, 'Patrick_Breakfast_Run.cpp'));
console.log('copied patrick_mission.cpp -> DLC/Patrick_Breakfast_Run.cpp');
