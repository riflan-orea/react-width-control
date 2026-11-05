import typescript from "rollup-plugin-typescript2";
import { readFileSync } from "node:fs";

const pkg = JSON.parse(readFileSync("./package.json", "utf8"));

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
    },
    {
      file: pkg.module,
      format: "es",
      exports: "named",
    },
  ],
  plugins: [
    typescript({
      tsconfig: "./tsconfig.json",
      tsconfigOverride: {
        compilerOptions: {
          declaration: true,
        },
      },
    }),
  ],
  external: ["react"],
};
