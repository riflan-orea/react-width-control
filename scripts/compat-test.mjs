// Installs the packed library into throwaway React 17/18 projects and checks
// runtime (SSR render via CJS + ESM builds) and types (tsc against that React's @types).
// ponytail: SSR only, no browser; add a jsdom/Playwright step if layout behaviour needs checking.
import { execSync } from "node:child_process";
import { mkdtempSync, mkdirSync, writeFileSync, copyFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";

const VERSIONS = ["17", "18"];
const root = resolve(import.meta.dirname, "..");
const run = (cmd, cwd) => execSync(cmd, { cwd, stdio: "pipe", encoding: "utf8" });

const work = mkdtempSync(join(tmpdir(), "rwc-compat-"));
let failed = 0;

try {
  run("npm run build", root);
  const tgz = join(work, run(`npm pack --silent --pack-destination "${work}"`, root).trim().split(/\r?\n/).pop());

  const render = (lib) => `
const C = ${lib};
const names = ["MinWidth", "MaxWidth", "Width", "Truncate", "MultilineTruncate", "TextTruncate"];
const props = { MinWidth: { size: 100 }, MaxWidth: { size: 100 }, Width: { minWidth: 50, maxWidth: 100, truncateLines: 2 },
  Truncate: {}, MultilineTruncate: { lines: 2 }, TextTruncate: { lines: 2 } };
for (const n of names) {
  if (typeof C[n] !== "object" && typeof C[n] !== "function") throw new Error(n + " not exported");
  const html = renderToString(React.createElement(C[n], props[n], "hello"));
  if (!html.includes("hello")) throw new Error(n + " rendered: " + html);
}
console.log("ok");`;

  for (const v of VERSIONS) {
    const dir = join(work, `react${v}`);
    mkdirSync(dir);
    run("npm init -y", dir);
    // ponytail: typescript@5 because that's what React 17/18-era consumers run
    run(`npm install --no-audit --no-fund "${tgz}" react@${v} react-dom@${v} @types/react@${v} typescript@5`, dir);

    // ESM build: Node only reads "main", so load dist/index.esm.js directly as .mjs
    const pkgDist = join(dir, "node_modules", "react-width-control", "dist");
    copyFileSync(join(pkgDist, "index.esm.js"), join(pkgDist, "index.esm.mjs"));

    writeFileSync(join(dir, "cjs.cjs"),
      `const React = require("react"); const { renderToString } = require("react-dom/server");` +
      render(`require("react-width-control")`));
    writeFileSync(join(dir, "esm.mjs"),
      // react-dom 17 has no "exports" map, 18 does; require() resolves both the same way
      `import React from "react"; import { createRequire } from "node:module";` +
      `const { renderToString } = createRequire(import.meta.url)("react-dom/server");` +
      `import * as Lib from "react-width-control/dist/index.esm.mjs";` + render("Lib"));
    writeFileSync(join(dir, "types.tsx"), `
import React, { createRef } from "react";
import Def, { MinWidth, MaxWidth, Width, Truncate, MultilineTruncate, TextTruncate } from "react-width-control";
const ref = createRef<HTMLDivElement>();
export const all = (
  <div>
    <MinWidth ref={ref} size={100}>a</MinWidth>
    <MaxWidth ref={ref} size={100}>a</MaxWidth>
    <Width ref={ref} minWidth={50} maxWidth={100} truncate truncateLines={2}>a</Width>
    <Truncate ref={ref}>a</Truncate>
    <MultilineTruncate ref={ref} lines={2}>a</MultilineTruncate>
    <TextTruncate ref={ref} lines={2}>a</TextTruncate>
    <Def.MinWidth size={1}>a</Def.MinWidth>
  </div>
);`);

    for (const [label, cmd] of [
      ["runtime cjs", "node cjs.cjs"],
      ["runtime esm", "node esm.mjs"],
      ["types", "npx tsc --noEmit --strict --jsx react --esModuleInterop --moduleResolution node --target es2017 types.tsx"],
    ]) {
      try {
        run(cmd, dir);
        console.log(`PASS react ${v} ${label}`);
      } catch (e) {
        failed++;
        console.log(`FAIL react ${v} ${label}\n${e.stdout || ""}${e.stderr || ""}`);
      }
    }
  }
} finally {
  rmSync(work, { recursive: true, force: true });
}

process.exit(failed ? 1 : 0);
