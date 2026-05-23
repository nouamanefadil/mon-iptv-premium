import { cp, readdir, rm } from "node:fs/promises";
import path from "node:path";

const distDir = path.resolve("dist");
const entries = await readdir(distDir, { withFileTypes: true });

for (const entry of entries) {
  const target = path.resolve(entry.name);
  if (entry.name === ".") continue;
  await rm(target, { recursive: true, force: true });
  await cp(path.join(distDir, entry.name), target, { recursive: true });
}
