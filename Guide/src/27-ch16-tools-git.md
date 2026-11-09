# Build Tools and Git: The Workshop

Every craft has a workshop: the benches, the vices, the labelled drawers. Web development has one too, and beginners often find it more intimidating than the languages themselves. It does not have to be. There are only four tools you need to understand: Node.js, npm, a bundler, and Git. Between them, they let you install libraries, combine your code into something a browser can load, and keep a complete, safe history of everything you do.

## Words You Will Meet

| Word | What it means |
|---|---|
| **Node.js** | A program that runs JavaScript outside the browser, on your computer. |
| **npm** | The package manager that comes with Node.js. |
| **Package** | A bundle of code someone published for you to reuse (three.js is one). |
| **package.json** | The file that lists a project's packages and their versions. |
| **node_modules** | The folder npm fills with the packages you installed. |
| **Semantic version** | A version number in the form major.minor.patch, such as 0.186.1. |
| **Bundler** | A tool that follows `import` statements and joins everything into one file. |
| **Minify** | Shrink a file by removing whitespace and shortening names. |
| **Repository (repo)** | A project folder whose history Git records. |
| **Commit** | A saved snapshot of the project with a message. |
| **Branch** | A separate line of work. |
| **Remote** | A copy of the repository on a server (such as GitHub). |
| **Push / pull** | Send your commits to / fetch commits from a remote. |

## Node.js and npm

Download Node.js from its website and install it. It comes with `npm`. Check it worked by typing `node -v` in a terminal. To start a project:

```
npm init -y                  # creates package.json
npm install three            # downloads three.js into node_modules and records it
```

Now your code can say `import * as THREE from 'three'`.

:::why A package.json file
**What it is.** A small file listing what your project needs.

**Why it is done this way.** The packages themselves are big, and they belong to other people. Your project only needs to record *which ones, and which versions*.

**Why it matters.** Anyone (including you, on another computer next month) can type `npm install` and get exactly the same libraries.

**What happens if you do not.** You copy giant folders around by hand, and nobody remembers which version of what a project was built with.
:::

## Version Numbers

Versions look like `0.186.1`: **major.minor.patch**. A patch bump fixes bugs. A minor bump adds features without breaking things. A major bump may break things. In `package.json` you will see ranges.

| Written | Allows |
|---|---|
| `"1.2.3"` | Exactly 1.2.3. |
| `"^1.2.3"` | 1.2.3 up to, but not including, 2.0.0. |
| `"~1.2.3"` | 1.2.3 up to, but not including, 1.3.0. |

:::why Locking versions
**What it is.** Besides `package.json`, npm writes a `package-lock.json` recording the *exact* version of everything it installed.

**Why it is done this way.** A range like `^1.2.3` could install a different version next week.

**Why it matters.** Your build is repeatable.

**What happens if you do not.** One morning the project fails to build because a package published a new release overnight, and nothing in your code changed. (This is the same reason pages pin their CDN versions, as in Chapter 8.)
:::

:::warning
Never edit the files inside `node_modules`, and never put the folder in Git. It is huge, it is generated from `package.json`, and it can always be recreated with `npm install`.
:::

## The Bundler

A browser, loading a page, does not know where to find the word `'three'` in `import ... from 'three'`. A **bundler** does: it reads your entry file, follows each `import` to the file or package it names, and writes everything into one file.

```
npx esbuild main.js --bundle --minify --format=iife --outfile=app.js
```

Read the flags as a sentence. *Bundle* all the imports into one file, *minify* the result, wrap it in an immediately-invoked function (`iife`) so its names do not leak into the page, and write it to `app.js`.

:::why Bundling, minifying and wrapping in an iife
**What it is.** Three flags, three jobs.

**Why it is done this way.** Bundling means one request instead of hundreds (Chapter 1). Minifying shrinks the download. The iife keeps your variable names private.

**Why it matters.** The robot page is one script of about 686 kilobytes. Without these steps, it would be hundreds of separate files and several times larger.

**What happens if you do not.** Many small requests slow the page. Unwrapped scripts can clash with the page's other scripts: a flight dynamics page and a bundled library that both define `fit` would overwrite each other, which is exactly why the stability script on that page is wrapped.
:::

:::tip
Re-run the bundle every time you change a source file. Put the command in a small `build.mjs` file or in the `scripts` section of `package.json`, so you can type `npm run build` and never mistype the flags.
:::

## Git: A Time Machine for Your Project

Git records snapshots of your project, called **commits**. Between commits, it notices what you changed. Start a repository, then repeat the cycle: change, stage, commit.

```
git init                          # start recording this folder
git status                        # what has changed?
git add index.html style.css      # stage: choose what goes in the next snapshot
git commit -m "Add the landing page"   # save the snapshot with a message
git log --oneline                 # the history, one line per commit
```

:::why Staging before committing
**What it is.** `git add` chooses *which* changes go into the next commit.

**Why it is done this way.** You often have several unrelated changes in your folder.

**Why it matters.** You can commit them as separate, clearly labelled snapshots. "Fix the camera jump" and "Add the new chart" stay separate, so either can be undone alone.

**What happens if you do not.** One enormous commit called "stuff", which is impossible to review or to undo cleanly.
:::

**Branches and remotes.** A branch is a separate line of work: `git switch -c experiment` starts one. A remote copy lives on a server: `git push` sends your commits there and `git pull` fetches others' commits.

:::why Branching before experimenting
**What it is.** Creating a branch before a risky change.

**Why it is done this way.** The branch is a private copy of the history.

**Why it matters.** If the experiment fails, you switch back to your main branch and delete it. The main line was never touched.

**What happens if you do not.** You break the working version and discover you did not save a copy.
:::

:::warning
Do not rewrite history that others already have. Commands like `git push --force` can erase their work. If you are not sure what a Git command will do, read what it says before you press Enter, and ask.
:::

## Worked Example: From Nothing to a Bundled Page

:::worked Install, bundle, commit
Create a folder with a script that logs the cube root of 27 using a helper module, bundle it, and commit it.

**Step 1. Files.** In an empty folder, make `math.js` and `main.js`.

```
// math.js
export const cbrt = (x) => Math.cbrt(x);

// main.js
import { cbrt } from './math.js';
console.log('cube root of 27 is', cbrt(27));
```

**Step 2. Bundle.** Run `npx esbuild main.js --bundle --format=iife --outfile=app.js`. This writes `app.js` with both modules joined.

**Step 3. Test.** Make `index.html` with `<script src="app.js"></script>`, open it, and look at the Console. It prints `cube root of 27 is 3`.

**Step 4. Ignore the generated folder.** Create a file `.gitignore` containing `node_modules`, so Git never records it.

**Step 5. Commit.**

```
git init
git add main.js math.js index.html .gitignore
git commit -m "Add a script that prints a cube root"
```

**Step 6. Reflect.** `app.js` is generated from the sources. Some teams commit it, some do not. This website commits its built bundles, because the pages load them directly and a visitor's browser has no build step.
:::

## Practice Problems

:::problems
1. A package.json lists `"lodash": "^4.17.2"`. Which of these versions would be accepted: 4.17.2, 4.18.0, 4.99.9, 5.0.0?
2. And for `"~4.17.2"`: which of 4.17.9, 4.18.0, 5.0.0?
3. A script reads `import { add } from './add.js'` and is opened directly with `<script src="main.js">`, failing with an error. Name two ways to fix it.
4. You have changed three files: two belong to a bug fix and one is an unrelated new feature. Show the commands to commit them as two separate commits.
5. You started editing on the main branch and then realise you wanted an experiment branch. Say how to move the current work to a new branch (without losing it), using a command from this chapter.
6. Explain in two sentences why `node_modules` is not stored in Git but `package-lock.json` is.
:::

:::answers
**Chapter 16 practice problems.**

1. `^4.17.2` allows >=4.17.2 and <5.0.0, so 4.17.2, 4.18.0 and 4.99.9 are accepted; 5.0.0 is not.
2. `~4.17.2` allows >=4.17.2 and <4.18.0, so 4.17.9 only.
3. Bundle the scripts into one file with a bundler and load that; or load it as a module with `<script type="module" src="main.js">` (and serve it over a local server, since modules do not load from a `file://` address).
4. `git add fix1.js fix2.js` and `git commit -m "Fix ..."`; then `git add feature.js` and `git commit -m "Add ..."`.
5. `git switch -c experiment` creates the branch and moves to it while keeping your uncommitted changes, which are now on the new branch.
6. `node_modules` is huge and can be regenerated, so storing it only bloats the repository. `package-lock.json` is small and records the exact versions, so keeping it makes builds repeatable.
:::
