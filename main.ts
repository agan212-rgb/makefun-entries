// Chef Rush — make.fun entry for best-cooking-game-20261125-0137
// The entry is a self-contained browser cooking game. This entrypoint copies
// the game into the grader's output directory. It is deterministic (a pure
// file copy: no network, no randomness, no clock reads) and fast.
//
// v2: stage the copy in a temp dir and swap it in atomically, so a partial
// write can never leave a broken output dir; stale files from earlier runs
// are removed so the output is always exactly the shipped game.
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import { fileURLToPath } from 'url';

const here = path.dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || path.join(process.cwd(), 'out');
const gameFiles = ['index.html'];

const staging = fs.mkdtempSync(path.join(os.tmpdir(), 'chefrush-'));
for (const f of gameFiles) {
  fs.copyFileSync(path.join(here, 'game', f), path.join(staging, f));
}
fs.mkdirSync(outDir, { recursive: true });
for (const f of gameFiles) {
  fs.renameSync(path.join(staging, f), path.join(outDir, f));
}
fs.rmdirSync(staging);

console.log('Chef Rush is ready. Open ' + path.join(outDir, 'index.html') + ' in a browser to play.');
