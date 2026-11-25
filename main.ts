// Midnight Fridge Roast — one-line roast of a smart fridge that locks at midnight.
// Writes the roast to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The fridge won't open after midnight — it's moonlighting as a nightclub bouncer.";

// Fail loudly instead of shipping an entry the gate would refuse:
// one line, UTF-8, 1–200 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 200 || !LINE.trim() || LINE.includes("\n")) {
  throw new Error(`entry gate failed: ${LINE.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, LINE + "\n", "utf8");
console.log(`wrote ${LINE.length} chars to ${outPath}`);
