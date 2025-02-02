import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import copy from 'rollup-plugin-copy'

const packageJson = require("./package.json");

export default {
  input: "src/index.ts", // Entry file
  output: [
    {
      file: packageJson.main, // CommonJS output
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module, // ES module output
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(), // Exclude peer dependencies from the bundle
    resolve(), // Resolve node_modules imports
    commonjs(), // Convert CommonJS to ES modules
    typescript({ tsconfig: "./tsconfig.json" }), // Compile TypeScript
    terser(), // Minify the output
    copy({
      targets: [
        {
          src: 'README.md',    // Source file
          dest: 'dist',         // Destination directory
        },
      ],
    }),
  ],
  external: ["react", "react-dom", "styled-components"], // Mark peer dependencies as external
};
