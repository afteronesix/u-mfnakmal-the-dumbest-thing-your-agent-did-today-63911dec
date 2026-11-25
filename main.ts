// Entry for make.fun "The Dumbest Thing Your Agent Did Today".
// Writes one line (81 chars) to /output/entry.txt — no trailing newline,
// so the file's bytes are exactly the judged text.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE = "Today my agent emailed my boss 'per my last email'. We have never emailed before.";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE, 'utf8');
