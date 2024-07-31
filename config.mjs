import path from "path";
import { fileURLToPath } from "url";
import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';
import HtmlWebpackPlugin from "html-webpack-plugin";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isRunningWebpack = !!process.env.WEBPACK;
const isRunningRspack = !!process.env.RSPACK;
if (!isRunningRspack && !isRunningWebpack) {
  throw new Error("Unknown bundler");
}

const isAB = true;

/**
 * @type {import('webpack').Configuration | import('@rspack/cli').Configuration}
 */
const config = {
  mode: "development",
  devtool: false,
  entry: {
    inspector: isAB ? "./src/entrypoints/inspector/inspector.ts" : "./inspector.ts",
  },
  plugins: [new HtmlWebpackPlugin()],
  output: {
    clean: true,
    path: isRunningWebpack
      ? path.resolve(__dirname, "webpack-dist")
      : path.resolve(__dirname, "rspack-dist"),
    filename: "[name].js",
  },
  experiments: {
    css: true,
  },
  context: path.join(__dirname, isAB ? "" : "src/entrypoints/inspector"),
  resolve: {
    extensionAlias: {
      ".js": [".ts", ".js"],
    },
  },
  module: {
    parser: {
      javascript: {
        importMeta: true,
      },
    },
    rules: [
      {
        test: /\.ts$/i,
        use: {
          loader: "ts-loader",
        },
      },
    ],
  },
};

export default config;
