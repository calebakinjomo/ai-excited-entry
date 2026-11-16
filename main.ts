import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Entry point for the "Make the AI judge excited" bounty.
// The entry is a single image, entry.png. This program copies it,
// byte for byte, into the harness output directory so the judge
// sees exactly the image in this repository. No transformation,
// no network, no randomness — every run writes identical bytes.

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
