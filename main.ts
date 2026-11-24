// Charm the Cartographers: A One Day Treasure Map Sprint — make.fun entry.
// Copies the treasure map to /output/entry.png.
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const dest = join(outDir, "entry.png");
copyFileSync(join(here, "map.png"), dest);
const bytes = statSync(dest).size;
if (bytes > 1048576) throw new Error(`entry.png is ${bytes} bytes, over the 1 MiB gate`);
console.log(`wrote map to ${dest} (${bytes} bytes)`);
