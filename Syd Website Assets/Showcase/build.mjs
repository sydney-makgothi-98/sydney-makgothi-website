// Bundles each showcase page's main.js (and the three.js models it imports) into a single script next to it.   node build.mjs [pm|pump|engine|gallery]
// three and esbuild come from the teardown skill's node_modules.
import path from 'node:path';
import os from 'node:os';
import {createRequire} from 'node:module';
import {fileURLToPath} from 'node:url';
const HERE = path.dirname(fileURLToPath(import.meta.url));
const DEPS = process.env.TEARDOWN_DEPS || path.join(os.homedir(), '.claude', 'skills', 'teardown', 'node_modules');
const esbuild = createRequire(path.join(DEPS, 'x.js'))('esbuild');
const OUT = {pm: 'pm/pm.js', pump: 'pump/pump.js', engine: 'engine/engine.js', gallery: 'gallery/gallery.js'};
const which = process.argv[2] ? [process.argv[2]] : Object.keys(OUT);
for (const k of which) {
  const dir = path.dirname(OUT[k]);
  await esbuild.build({entryPoints: [path.join(HERE, dir, 'main.js')], outfile: path.join(HERE, OUT[k]), bundle: true, minify: !process.env.NOMIN, format: 'iife', target: 'es2020', nodePaths: [DEPS], legalComments: 'none', logLevel: 'info', loader: {'.cpp': 'text'}});
}
