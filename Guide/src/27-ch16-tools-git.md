# Build Tools and Git: The Workshop

Every craft has a workshop: the benches, the vices, the labelled drawers. Web development has one too, and beginners often find it more intimidating than the languages themselves. It does not have to be. There are only four tools you need to understand: Node.js, npm, a bundler, and Git. Between them, they let you install libraries, combine your code into something a browser can load, and keep a complete, safe history of everything you do. Every command in this chapter was run for real; the outputs are what came back.

:::objectives
- Install Node.js, start a project with npm, and read `package.json` and the lock file.
- Read a version number and a version range, and say what each allows.
- Bundle, minify and watch with esbuild, and know what tree shaking and source maps do.
- Record work with Git: stage, commit, log, diff; branch, merge, and undo safely.
- Work with a remote on GitHub, write a `.gitignore`, and publish a static site.
- Set up an editor with a formatter and a linter, and debug a build that fails.
:::

## Words You Will Meet

| Word | What it means |
|---|---|
| **Node.js** | A program that runs JavaScript outside the browser, on your computer. |
| **npm** | The package manager that comes with Node.js. |
| **Package** | A bundle of code someone published for you to reuse (three.js is one). |
| **package.json** | The file that lists a project's packages, versions and scripts. |
| **Lock file** | `package-lock.json`: the exact versions that were installed. |
| **node_modules** | The folder npm fills with the packages you installed. |
| **Semantic version** | A version number in the form major.minor.patch, such as 0.186.1. |
| **Bundler** | A tool that follows `import` statements and joins everything into one file. |
| **Minify** | Shrink a file by removing whitespace and shortening names. |
| **Tree shaking** | Leaving out exported code that nothing imports. |
| **Source map** | A file that maps the bundled code back to your original lines, for debugging. |
| **Repository (repo)** | A project folder whose history Git records. |
| **Commit** | A saved snapshot of the project with a message. |
| **Branch** | A separate line of work; a name that points at a commit. |
| **Merge** | Bringing one branch's commits into another. |
| **Remote** | A copy of the repository on a server (such as GitHub). |
| **Push / pull** | Send your commits to / fetch commits from a remote. |

## 16.1 Node.js and npm

Download Node.js from its website and install it. It comes with `npm`. Check it worked by typing `node -v` in a terminal (this book's examples ran on Node 24). To start a project:

```
npm init -y                  # creates package.json
npm install three            # downloads three.js into node_modules and records it
```

Now your code can say `import * as THREE from 'three'`. `npm install` with no package name installs everything `package.json` lists, which is what you run after cloning a project.

:::why A package.json file
**What it is.** A small file listing what your project needs.

**Why it is done this way.** The packages themselves are big, and they belong to other people. Your project only needs to record *which ones, and which versions*.

**Why it matters.** Anyone (including you, on another computer next month) can type `npm install` and get exactly the same libraries.

**What happens if you do not.** You copy giant folders around by hand, and nobody remembers which version of what a project was built with.
:::

#### Scripts

The `scripts` section of `package.json` names commands so nobody has to remember flags:

```
"scripts": {
    "build": "esbuild main.js --bundle --minify --format=iife --outfile=app.js",
    "watch": "esbuild main.js --bundle --format=iife --outfile=app.js --watch",
    "test":  "node s17_tests.js"
}
```

Then `npm run build`, `npm run watch`, `npm test`. The Patrick and drone pages each have a `build.mjs` that does the same job as a small script, so the command is `node build.mjs`.

## 16.2 Version Numbers

@figure semver A semantic version is three numbers with three meanings. The caret and tilde ranges in `package.json` say how far forward npm may go.

Versions look like `0.186.1`: **major.minor.patch**. A patch bump fixes bugs. A minor bump adds features without breaking things. A major bump may break things. In `package.json` you will see ranges.

| Written | Allows |
|---|---|
| `"1.2.3"` | Exactly 1.2.3. |
| `"^1.2.3"` | 1.2.3 up to, but not including, 2.0.0. |
| `"~1.2.3"` | 1.2.3 up to, but not including, 1.3.0. |
| `"^0.186.1"` | 0.186.1 up to, but not including, 0.187.0 (for a 0.x version, the caret only allows patches). |

:::why Locking versions
**What it is.** Besides `package.json`, npm writes a `package-lock.json` recording the *exact* version of everything it installed, including the packages your packages depend on.

**Why it is done this way.** A range like `^1.2.3` could install a different version next week.

**Why it matters.** Your build is repeatable.

**What happens if you do not.** One morning the project fails to build because a package published a new release overnight, and nothing in your code changed. (This is the same reason pages pin their CDN versions, as in Chapter 8.)
:::

:::warning
Never edit the files inside `node_modules`, and never put the folder in Git. It is huge, it is generated from `package.json`, and it can always be recreated with `npm install`.
:::

## 16.3 The Bundler

A browser, loading a page, does not know where to find the word `'three'` in `import ... from 'three'`. A **bundler** does: it reads your entry file, follows each `import` to the file or package it names, and writes everything into one file.

@figure bundler-flow The bundler starts at the entry file and follows every import, into your own modules and into packages, and writes one file the page can load with a single request.

```
npx esbuild main.js --bundle --minify --format=iife --outfile=app.js
```

Read the flags as a sentence. *Bundle* all the imports into one file, *minify* the result, wrap it in an immediately-invoked function (`iife`) so its names do not leak into the page, and write it to `app.js`. Here is what esbuild 0.28 made of the two-file project from the worked example at the end of this chapter, first without and then with `--minify`:

```
(() => {
  // math.js
  var cbrt = (x) => Math.cbrt(x);

  // main.js
  console.log("cube root of 27 is", cbrt(27));
})();
```

```
(()=>{var o=t=>Math.cbrt(t);console.log("cube root of 27 is",o(27));})();
```

The sizes were 123 bytes and 74 bytes, and the builds took 56 and 15 milliseconds. Look closely at the first version: `math.js` also exported a function called `unused`, and it is *not* in the bundle. That is **tree shaking**: the bundler keeps only what is reachable from the entry file. It is why importing one helper from `three/examples/jsm/...` costs you that helper and not the whole examples folder.

Three more flags you will want. `--sourcemap` writes `app.js.map`, so the browser's debugger shows your original files and line numbers inside the minified bundle. `--watch` keeps esbuild running and rebuilds the instant you save a file. `--target=es2020` tells it which browsers to write for.

:::why Bundling, minifying and wrapping in an iife
**What it is.** Three flags, three jobs.

**Why it is done this way.** Bundling means one request instead of hundreds (Chapter 1). Minifying shrinks the download. The iife keeps your variable names private.

**Why it matters.** The robot page is one script of about 686 kilobytes. Without these steps, it would be hundreds of separate files and several times larger.

**What happens if you do not.** Many small requests slow the page. Unwrapped scripts can clash with the page's other scripts: a flight dynamics page and a bundled library that both define `fit` would overwrite each other, which is exactly why the stability script on that page is wrapped.
:::

:::tip
Re-run the bundle every time you change a source file, or leave `--watch` running. Put the command in `build.mjs` or in the `scripts` section of `package.json`, so you can type `npm run build` and never mistype the flags.
:::

## 16.4 Git: A Time Machine for Your Project

Git records snapshots of your project, called **commits**. Between commits, it notices what you changed. Start a repository, then repeat the cycle: change, stage, commit.

```
git init                          # start recording this folder
git status                        # what has changed?
git add index.html style.css      # stage: choose what goes in the next snapshot
git commit -m "Add the landing page"   # save the snapshot with a message
git log --oneline                 # the history, one line per commit
```

After editing `main.js` in the demo project, this is what Git reported:

```
$ git status --short
 M main.js
?? app.js
?? app.min.js

$ git diff
diff --git a/main.js b/main.js
--- a/main.js
+++ b/main.js
@@ -1,2 +1,4 @@
 import { cbrt } from './math.js';
 console.log('cube root of 27 is', cbrt(27));
+
+// a change
```

`M` means modified and tracked; `??` means Git has never been told about the file. The diff shows the exact lines added (`+`) and removed (`-`), with a little context. Read `git status` and `git diff` before every commit; it is how you catch the debugging line you forgot to delete.

:::why Staging before committing
**What it is.** `git add` chooses *which* changes go into the next commit.

**Why it is done this way.** You often have several unrelated changes in your folder.

**Why it matters.** You can commit them as separate, clearly labelled snapshots. "Fix the camera jump" and "Add the new chart" stay separate, so either can be undone alone.

**What happens if you do not.** One enormous commit called "stuff", which is impossible to review or to undo cleanly.
:::

#### What to ignore

A `.gitignore` file lists what Git should never record: generated and private things.

```
node_modules/
*.log
.env
.DS_Store
```

Whether to ignore *built* files (`app.js`) is a choice. This website commits its bundles, because the pages load them directly and the host has no build step. A project with a build server would ignore them.

## 16.5 Branches and Merging

@figure git-graph Commits form a chain; a branch is a name pointing at the newest one; a merge commit joins two chains back together and has two parents.

A branch is a separate line of work: `git switch -c experiment` starts one from where you are. Commits made there do not touch `main`. When the experiment works, go back and merge it; when it does not, delete it.

```
git switch -c experiment         # make and move to a new branch
...edit, add, commit...
git switch main                  # back to the main line
git merge experiment             # bring the experiment's commits in
git branch -d experiment         # delete the name (the commits are now on main)
```

The demo project's history after a branch, a commit on each side, and a merge:

```
$ git log --oneline --graph
*   417ccc5 Merge experiment
|\
| * 918dc2b Add sqrt to the maths module
* | 1c8dea7 Add the page that loads the bundle
|/
* be51bac Add a script that prints a cube root
```

The seven-character codes are the first characters of each commit's **hash**, a fingerprint of its contents that is the same on every computer. When two branches changed the *same lines*, the merge stops and marks the file with `<<<<<<<` and `>>>>>>>`; you edit it to what it should be, `git add` it, and commit. A conflict is not an error. It is Git asking a question only you can answer.

:::why Branching before experimenting
**What it is.** Creating a branch before a risky change.

**Why it is done this way.** The branch is a private copy of the history.

**Why it matters.** If the experiment fails, you switch back to your main branch and delete it. The main line was never touched.

**What happens if you do not.** You break the working version and discover you did not save a copy.
:::

## 16.6 Undoing Things

Git's reputation for danger comes from a few commands that rewrite history. The safe ones first.

| I want to... | Command | Safe? |
|---|---|---|
| throw away my edits to one file since the last commit | `git restore file.js` | loses those edits, nothing else |
| un-stage a file I added by mistake | `git restore --staged file.js` | yes |
| see an old version of a file | `git show abc1234:path/file.js` | yes |
| undo a commit *that is already shared*, keeping history honest | `git revert abc1234` | yes: adds a new commit that reverses it |
| undo my last commit but keep the changes to recommit | `git reset --soft HEAD~1` | only on commits you have not pushed |
| put my half-done work aside and get it back later | `git stash`, then `git stash pop` | yes |
| go back to a commit to look around | `git switch --detach abc1234`, then `git switch main` | yes |

:::warning
Do not rewrite history that others already have. Commands like `git push --force` and `git reset --hard` can erase their work, or yours. If you are not sure what a Git command will do, read what it says before you press Enter, and ask. `git revert` is the undo for anything that has left your machine.
:::

## 16.7 Remotes and GitHub

A **remote** is a copy of the repository on a server. GitHub is the usual one. Create an empty repository there, then connect and push:

```
git remote add origin https://github.com/you/your-site.git
git push -u origin main          # the first push; -u remembers where main goes
git push                         # every later push
git pull                         # fetch and merge what changed on the server
git clone https://github.com/you/your-site.git    # get a whole repository on another machine
```

On a team, work goes through **pull requests**: push a branch, open a request on GitHub, a colleague reads the diff and comments, and the branch is merged on the server. Alone, the same habit (a branch per piece of work, merged when done) keeps `main` always publishable.

:::why Writing commit messages that say why
**What it is.** A short message with each commit explaining the reason for the change.

**Why it is done this way.** The code already shows *what* changed. Only you know *why*.

**Why it matters.** In six months, "Fix the camera jump when the tab is hidden" is a gift to your future self. "update stuff" is a puzzle.

**What happens if you do not.** You cannot tell which of fifty commits introduced a bug.
:::

## 16.8 Publishing a Static Site

A static site is files, so publishing is putting the files where a server can reach them (Chapter 1). With the repository on GitHub, **GitHub Pages** will serve it: in the repository's Settings, under Pages, choose the branch (`main`) and the folder (the root), and the site appears at `https://you.github.io/your-site/` within a minute of every push. This website is published this way, from its repository, which is why Part V's publishing step is `git push`.

Two things to check on the first publish. Links must be relative (Chapter 9), because the site lives in a sub-folder, not at the domain's root. And the bundles must be committed, because Pages runs no build.

## 16.9 The Editor, the Formatter and the Linter

Visual Studio Code is free and is what most people use. Three additions pay for themselves in the first week. A **formatter** (Prettier) rewrites your code in one consistent style every time you save, so you never argue with yourself about spaces. A **linter** (ESLint) underlines mistakes as you type: an unused variable, a missing `await`, `==`, a variable used before it is declared. **Live Server** (an extension) serves your folder over HTTP and reloads the page when you save, which modules and `fetch` need, since both refuse to work from a `file://` address.

Set them up once per project (`npm install --save-dev prettier eslint`, plus a config file for each), commit the config files, and everyone who clones the project gets the same rules.

## 16.10 When the Build Breaks

A failing build prints an error with a file and a line. Read it from the top. The usual causes, in order of likelihood: a typo in an import path (case matters on the server even if it does not on your machine); a package that was never installed (`npm install` fixes it); a syntax error in the file named; a package that needs a flag (`--jsx=automatic` for React, a loader for `.cpp` or `.glsl` text files); and a stale `node_modules` after switching branches (delete it and `npm install`). When a bundle builds but the page is blank, open the Console: a bundle that throws on its first line prints why, and a source map points at your original file.

## Worked Example: From Nothing to a Bundled Page

:::worked Install, bundle, commit
Create a folder with a script that logs the cube root of 27 using a helper module, bundle it, and commit it.

**Step 1. Files.** In an empty folder, make `math.js` and `main.js`.

```
// math.js
export const cbrt = (x) => Math.cbrt(x);
export const unused = () => 'never imported';

// main.js
import { cbrt } from './math.js';
console.log('cube root of 27 is', cbrt(27));
```

**Step 2. Bundle.** Run `npx esbuild main.js --bundle --format=iife --outfile=app.js`. This writes `app.js` with both modules joined (and `unused` shaken out). The output is the 123-byte file shown in 16.3.

**Step 3. Test.** `node app.js` prints `cube root of 27 is 3`. Make `index.html` with `<script src="app.js"></script>`, open it, and the Console prints the same.

**Step 4. Ignore the generated folder.** Create a file `.gitignore` containing `node_modules`, so Git never records it.

**Step 5. Commit.**

```
git init
git add main.js math.js .gitignore
git commit -m "Add a script that prints a cube root"
```

**Step 6. Reflect.** `app.js` is generated from the sources. Some teams commit it, some do not. This website commits its built bundles, because the pages load them directly and a visitor's browser has no build step.
:::

## Practice Problems A: Packages and Builds

:::problems
1. A package.json lists `"lodash": "^4.17.2"`. Which of these versions would be accepted: 4.17.2, 4.18.0, 4.99.9, 5.0.0?
2. And for `"~4.17.2"`: which of 4.17.9, 4.18.0, 5.0.0? And for `"^0.186.1"`: which of 0.186.9, 0.187.0?
3. A script reads `import { add } from './add.js'` and is opened directly with `<script src="main.js">`, failing with an error. Name two ways to fix it.
4. `math.js` exports six functions and `main.js` imports two. Roughly how many end up in the bundle, and what is the name of the feature?
5. The minified bundle throws an error at "line 1, column 48 212". What flag makes the browser show you the real file and line?
6. Write the `scripts` entry that bundles `main.js` to `app.js` with minification, and the command that runs it.
7. Explain in two sentences why `node_modules` is not stored in Git but `package-lock.json` is.
:::

:::answers
**Chapter 16, Practice Problems A.**

1. `^4.17.2` allows >=4.17.2 and <5.0.0, so 4.17.2, 4.18.0 and 4.99.9 are accepted; 5.0.0 is not.
2. `~4.17.2` allows >=4.17.2 and <4.18.0, so 4.17.9 only. `^0.186.1` allows <0.187.0, so 0.186.9 only.
3. Bundle the scripts into one file with a bundler and load that; or load it as a module with `<script type="module" src="main.js">` (and serve it over a local server, since modules do not load from a `file://` address).
4. Two, plus anything those two call. Tree shaking.
5. `--sourcemap`, which writes `app.js.map`; the browser reads it and shows the original source.
6. `"build": "esbuild main.js --bundle --minify --format=iife --outfile=app.js"`, run with `npm run build`.
7. `node_modules` is huge and can be regenerated, so storing it only bloats the repository. `package-lock.json` is small and records the exact versions, so keeping it makes builds repeatable.
:::

## Practice Problems B: Git

:::problems
1. You have changed three files: two belong to a bug fix and one is an unrelated new feature. Show the commands to commit them as two separate commits.
2. You started editing on the main branch and then realise you wanted an experiment branch. Say how to move the current work to a new branch (without losing it), using a command from this chapter.
3. Read this graph and say what happened, in order: `*   7a1 Merge experiment`, `|\`, `| * 3c9 Try a wider track`, `* | b20 Fix the typo`, `|/`, `* 9e4 First version`.
4. A merge stops with `CONFLICT (content): Merge conflict in style.css`. What are the three steps to finish it?
5. You committed a debugging `console.log` and pushed it an hour ago. Which undo command is right, and why not `reset`?
6. You want to discard every uncommitted change to `main.js` but keep your changes to `style.css`. Which command?
7. Your site is on GitHub Pages at `https://you.github.io/site/` and every image is broken, though they worked locally. What is the most likely cause?
8. Write a commit message for a change that caps the pixel ratio at 2 because a phone was rendering nine times too many pixels. Then write a bad one, and say what makes it bad.
:::

:::answers
**Chapter 16, Practice Problems B.**

1. `git add fix1.js fix2.js` and `git commit -m "Fix ..."`; then `git add feature.js` and `git commit -m "Add ..."`.
2. `git switch -c experiment` creates the branch and moves to it while keeping your uncommitted changes, which are now on the new branch.
3. A first commit; a branch `experiment` with a commit "Try a wider track"; meanwhile on main a commit "Fix the typo"; then the experiment merged into main with a merge commit that has both as parents.
4. Open `style.css`, edit the block between `<<<<<<<` and `>>>>>>>` to what it should be (removing the markers), `git add style.css`, `git commit`.
5. `git revert <hash>`: it adds a new commit that removes the line and leaves the shared history intact. `git reset` would rewrite history that others may already have pulled.
6. `git restore main.js`.
7. The image paths start with `/` (root-relative), so on Pages they point at `https://you.github.io/images/...` instead of `.../site/images/...`. Use relative paths.
8. Good: "Cap the device pixel ratio at 2: a 3x phone was rendering nine pixels per CSS pixel and ran at 12 fps." Bad: "fix bug" or "update main.js": the first says nothing, the second repeats what the diff already shows, and neither says why.
:::

## Mini Project: Set Up the Robot Page for Real

:::project A project folder that builds, tests and publishes
Take the `patrick.html`, `patrick.css` and script from the earlier mini projects and turn them into a proper project.

1. `npm init -y`; install `three` (for the gauge from Chapter 15) and, as dev dependencies, `esbuild`, `eslint` and `prettier`. Commit `package.json` and the lock file, with a `.gitignore` for `node_modules`.
2. Move the script into `src/main.js` importing `src/gauge.js` and `src/data.js`. Add `build`, `watch` and `test` scripts; the test runs a `tests.js` in the style of Chapter 11.
3. Build with `--sourcemap`; open the page, put a `debugger;` in `gauge.js`, and confirm the browser stops in the original file.
4. Make the history honest: one commit for the project setup, one for the build scripts, one for the gauge, each with a message that says why. Try a change on a branch, merge it, and read the graph.
5. Push to a new GitHub repository and enable Pages. Fix whatever the first publish breaks (it will be a path).
6. Break the build on purpose (misspell an import) and read the error; then fix it. Break the page on purpose (throw in `main.js`) and use the source map to find the line.

Checks: `npm run build` succeeds from a fresh clone after `npm install`; `npm test` passes; `git status` is clean after a build (built files are either committed or ignored, deliberately); the published page works with the browser's cache cleared.
:::

:::summary
- Node runs JavaScript on your machine; npm installs packages and records them in `package.json`; the lock file pins the exact versions; `scripts` name your commands.
- major.minor.patch; `^` allows minor and patch, `~` allows patch, and for 0.x versions the caret allows only patches.
- The bundler follows imports into one file: `--bundle --minify --format=iife`, plus `--sourcemap` for debugging and `--watch` for development. Unused exports are shaken out.
- Git: change, `status`, `diff`, `add`, `commit` with a message that says why. `log --oneline --graph` to read history.
- Branch before experimenting; merge when it works; a conflict is a question, not an error.
- Undo safely: `restore` for edits, `revert` for shared commits, `stash` for half-done work; never rewrite shared history.
- A remote on GitHub, `push` and `pull`, pull requests for review, Pages to publish; relative paths and committed bundles for a static site.
- An editor with a formatter, a linter and a live server; read build errors from the top.
:::
