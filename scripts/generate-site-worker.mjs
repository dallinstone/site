import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const serverDir = join(process.cwd(), "dist", "server");
await mkdir(serverDir, { recursive: true });
await writeFile(join(serverDir, "index.js"), `export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};\n`);
