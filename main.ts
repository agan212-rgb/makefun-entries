import * as fs from 'fs';
const out = process.env.MAKEFUN_OUTPUT_DIR || 'out';
fs.mkdirSync(out, { recursive: true });
const tmp = out + '/.chefrush.tmp.html';
fs.copyFileSync(new URL('./game.html', import.meta.url), tmp);
fs.renameSync(tmp, out + '/index.html');
console.log('Chef Rush ready: ' + out + '/index.html');
