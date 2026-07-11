import { rename, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";

const entryPath = new URL("../dist/server/index.js", import.meta.url);
const handlerPath = new URL("../dist/server/index-handler.js", import.meta.url);

if (!existsSync(entryPath)) {
  throw new Error("Expected dist/server/index.js to exist before wrapping.");
}

if (!existsSync(handlerPath)) {
  await rename(entryPath, handlerPath);
}

await writeFile(
  entryPath,
  `import handler from "./index-handler.js";

export default {
  fetch(request, env, ctx) {
    return handler(request, env, ctx);
  },
};
`,
);
