import path from "path";
import { defineConfig } from "@rsbuild/core";

const isAB = true;

export default defineConfig({
  source: {
    entry: {
      inspector: isAB
        ? "./entrypoints/inspector/inspector"
        : "./inspector.ts",
    },
  },
  output: {
    distPath: {
      root: "./rsbuild-dist",
    },
  },
  // performance: {
  // },
  tools: {
    rspack: {
      context: './src/',
      resolve: {
        extensions: [".ts", ".js", ".json"],
        extensionAlias: {
          ".js": [".ts", ".js"],
        },
      },
      module: {
        parser: {},
        rules: [
          {
            test: /\.(png|jpg|gif|json|avif|svg|map)$/i,
            type: "asset/resource",
          },
          {
            test: /\.ts$/i,
            use: {
              loader: "builtin:swc-loader",
              // loader: "ts-loader",
            },
          },
        ],
      },
    },
  },
});
