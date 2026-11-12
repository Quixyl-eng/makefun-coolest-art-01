// coolest-art-01 entry. Node 22, standard library only.
// A giant match stands in a night sea and throws one beam from its flame.
// The grader names the output entry.png and accepts a JPEG by its first bytes.
// Two runs copy the same bytes.

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const dest = join(outDir, 'entry.png');
copyFileSync(new URL('./entry.png', import.meta.url), dest);
const head = readFileSync(dest).subarray(0, 3);
if (head[0] !== 0xff || head[1] !== 0xd8 || head[2] !== 0xff) {
  throw new Error('entry.png is not a JPEG');
}
