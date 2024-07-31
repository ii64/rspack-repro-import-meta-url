import path from "path";
import { defineConfig } from "@rsbuild/core";

const isAB = true;

export default defineConfig({
  source: {
    entry: {
      inspector: isAB ? "./src/entrypoints/inspector/inspector.ts" : "./inspector.ts",
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
      context: path.join(__dirname, isAB ? "" : "src/entrypoints/inspector"),
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
              loader: "ts-loader",
            },
          },
        ],
      },
    },
  },
});
