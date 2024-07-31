(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_marked_package_bin_marked_js"],{

/***/ "./src/third_party/marked/package/bin/main.js":
/*!****************************************************!*\
  !*** ./src/third_party/marked/package/bin/main.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   main: () => (/* binding */ main)
/* harmony export */ });
/* harmony import */ var node_fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node:fs */ "node:fs");
/* harmony import */ var node_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node:path */ "node:path");
/* harmony import */ var node_os__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node:os */ "node:os");
/* harmony import */ var node_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! node:module */ "node:module");
/* harmony import */ var _lib_marked_esm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/marked.esm.js */ "./src/third_party/marked/package/lib/marked.esm.js");
//#!/usr/bin/env node

/**
 * Marked CLI
 * Copyright (c) 2011-2013, Christopher Jeffrey (MIT License)
 */







const { access, readFile, writeFile } = node_fs__WEBPACK_IMPORTED_MODULE_0__.promises;
const require = (0,node_module__WEBPACK_IMPORTED_MODULE_3__.createRequire)("file:///mnt/p0/Personal/rspack-repro-import-meta-url/src/third_party/marked/package/bin/main.js");

/**
 * @param {Process} nodeProcess inject process so it can be mocked in tests.
 */
async function main(nodeProcess) {
  /**
   * Man Page
   */
  async function help() {
    const { spawn } = await Promise.resolve().then(function webpackMissingModule() { var e = new Error("Cannot find module 'child_process'"); e.code = 'MODULE_NOT_FOUND'; throw e; });
    const { fileURLToPath } = await Promise.resolve().then(function webpackMissingModule() { var e = new Error("Cannot find module 'url'"); e.code = 'MODULE_NOT_FOUND'; throw e; });

    const options = {
      cwd: nodeProcess.cwd(),
      env: nodeProcess.env,
      stdio: 'inherit'
    };

    const __dirname = (0,node_path__WEBPACK_IMPORTED_MODULE_1__.dirname)(fileURLToPath("file:///mnt/p0/Personal/rspack-repro-import-meta-url/src/third_party/marked/package/bin/main.js"));
    const helpText = await readFile((0,node_path__WEBPACK_IMPORTED_MODULE_1__.resolve)(__dirname, '../man/marked.1.md'), 'utf8');

    // eslint-disable-next-line promise/param-names
    await new Promise(res => {
      spawn('man', [(0,node_path__WEBPACK_IMPORTED_MODULE_1__.resolve)(__dirname, '../man/marked.1')], options)
        .on('error', () => {
          console.log(helpText);
        })
        .on('close', res);
    });
  }

  async function version() {
    const pkg = require('../package.json');
    console.log(pkg.version);
  }

  /**
   * Main
   */
  async function start(argv) {
    const files = [];
    const options = {};
    let input;
    let output;
    let string;
    let arg;
    let tokens;
    let config;
    let opt;
    let noclobber;

    function getArg() {
      let arg = argv.shift();

      if (arg.indexOf('--') === 0) {
        // e.g. --opt
        arg = arg.split('=');
        if (arg.length > 1) {
          // e.g. --opt=val
          argv.unshift(arg.slice(1).join('='));
        }
        arg = arg[0];
      } else if (arg[0] === '-') {
        if (arg.length > 2) {
          // e.g. -abc
          argv = arg.substring(1).split('').map(function(ch) {
            return '-' + ch;
          }).concat(argv);
          arg = argv.shift();
        } else {
          // e.g. -a
        }
      } else {
        // e.g. foo
      }

      return arg;
    }

    while (argv.length) {
      arg = getArg();
      switch (arg) {
        case '-o':
        case '--output':
          output = argv.shift();
          break;
        case '-i':
        case '--input':
          input = argv.shift();
          break;
        case '-s':
        case '--string':
          string = argv.shift();
          break;
        case '-t':
        case '--tokens':
          tokens = true;
          break;
        case '-c':
        case '--config':
          config = argv.shift();
          break;
        case '-n':
        case '--no-clobber':
          noclobber = true;
          break;
        case '-h':
        case '--help':
          return await help();
        case '-v':
        case '--version':
          return await version();
        default:
          if (arg.indexOf('--') === 0) {
            opt = camelize(arg.replace(/^--(no-)?/, ''));
            if (!_lib_marked_esm_js__WEBPACK_IMPORTED_MODULE_4__.marked.defaults.hasOwnProperty(opt)) {
              continue;
            }
            if (arg.indexOf('--no-') === 0) {
              options[opt] = typeof _lib_marked_esm_js__WEBPACK_IMPORTED_MODULE_4__.marked.defaults[opt] !== 'boolean'
                ? null
                : false;
            } else {
              options[opt] = typeof _lib_marked_esm_js__WEBPACK_IMPORTED_MODULE_4__.marked.defaults[opt] !== 'boolean'
                ? argv.shift()
                : true;
            }
          } else {
            files.push(arg);
          }
          break;
      }
    }

    async function getData() {
      if (!input) {
        if (files.length <= 2) {
          if (string) {
            return string;
          }
          return await getStdin();
        }
        input = files.pop();
      }
      return await readFile(input, 'utf8');
    }

    function resolveFile(file) {
      return (0,node_path__WEBPACK_IMPORTED_MODULE_1__.resolve)(file.replace(/^~/, node_os__WEBPACK_IMPORTED_MODULE_2__.homedir));
    }

    function fileExists(file) {
      return access(resolveFile(file)).then(() => true, () => false);
    }

    async function runConfig(file) {
      const configFile = resolveFile(file);
      let markedConfig;
      try {
        // try require for json
        markedConfig = require(configFile);
      } catch (err) {
        if (err.code !== 'ERR_REQUIRE_ESM') {
          throw err;
        }
        // must import esm
        markedConfig = await Object(function webpackMissingModule() { var e = new Error("Cannot find module 'undefined'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
      }

      if (markedConfig.default) {
        markedConfig = markedConfig.default;
      }

      if (typeof markedConfig === 'function') {
        markedConfig(_lib_marked_esm_js__WEBPACK_IMPORTED_MODULE_4__.marked);
      } else {
        _lib_marked_esm_js__WEBPACK_IMPORTED_MODULE_4__.marked.use(markedConfig);
      }
    }

    const data = await getData();

    if (config) {
      if (!await fileExists(config)) {
        throw Error(`Cannot load config file '${config}'`);
      }

      await runConfig(config);
    } else {
      const defaultConfig = [
        '~/.marked.json',
        '~/.marked.js',
        '~/.marked/index.js'
      ];

      for (const configFile of defaultConfig) {
        if (await fileExists(configFile)) {
          await runConfig(configFile);
          break;
        }
      }
    }

    const html = tokens
      ? JSON.stringify(_lib_marked_esm_js__WEBPACK_IMPORTED_MODULE_4__.marked.lexer(data, options), null, 2)
      : await _lib_marked_esm_js__WEBPACK_IMPORTED_MODULE_4__.marked.parse(data, options);

    if (output) {
      if (noclobber && await fileExists(output)) {
        throw Error('marked: output file \'' + output + '\' already exists, disable the \'-n\' / \'--no-clobber\' flag to overwrite\n');
      }
      return await writeFile(output, html);
    }

    nodeProcess.stdout.write(html + '\n');
  }

  /**
   * Helpers
   */
  function getStdin() {
    return new Promise((resolve, reject) => {
      const stdin = nodeProcess.stdin;
      let buff = '';

      stdin.setEncoding('utf8');

      stdin.on('data', function(data) {
        buff += data;
      });

      stdin.on('error', function(err) {
        reject(err);
      });

      stdin.on('end', function() {
        resolve(buff);
      });

      stdin.resume();
    });
  }

  /**
   * @param {string} text
   */
  function camelize(text) {
    return text.replace(/(\w)-(\w)/g, function(_, a, b) {
      return a + b.toUpperCase();
    });
  }

  try {
    await start(nodeProcess.argv.slice());
    nodeProcess.exit(0);
  } catch (err) {
    if (err.code === 'ENOENT') {
      nodeProcess.stderr.write('marked: ' + err.path + ': No such file or directory');
    } else {
      nodeProcess.stderr.write(err.message);
    }
    return nodeProcess.exit(1);
  }
}


/***/ }),

/***/ "./src/third_party/marked/package/bin/marked.js":
/*!******************************************************!*\
  !*** ./src/third_party/marked/package/bin/marked.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ "./src/third_party/marked/package/bin/main.js");
//#!/usr/bin/env node

/**
 * Marked CLI
 * Copyright (c) 2011-2013, Christopher Jeffrey (MIT License)
 */



/**
 * Expose / Entry Point
 */

process.title = 'marked';
(0,_main_js__WEBPACK_IMPORTED_MODULE_0__.main)(process);


/***/ }),

/***/ "node:fs":
/*!***************!*\
  !*** node:fs ***!
  \***************/
/***/ (() => {

throw new Error("Module build failed: UnhandledSchemeError: Reading from \"node:fs\" is not handled by plugins (Unhandled scheme).\nWebpack supports \"data:\" and \"file:\" URIs by default.\nYou may need an additional plugin to handle \"node:\" URIs.\n    at /mnt/p0/Personal/rspack-repro-import-meta-url/node_modules/.pnpm/webpack@5.93.0_esbuild@0.14.13_webpack-cli@5.1.4/node_modules/webpack/lib/NormalModule.js:923:25\n    at Hook.eval [as callAsync] (eval at create (/mnt/p0/Personal/rspack-repro-import-meta-url/node_modules/.pnpm/tapable@2.2.1/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)\n    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (/mnt/p0/Personal/rspack-repro-import-meta-url/node_modules/.pnpm/tapable@2.2.1/node_modules/tapable/lib/Hook.js:18:14)\n    at Object.processResource (/mnt/p0/Personal/rspack-repro-import-meta-url/node_modules/.pnpm/webpack@5.93.0_esbuild@0.14.13_webpack-cli@5.1.4/node_modules/webpack/lib/NormalModule.js:920:8)\n    at processResource (/mnt/p0/Personal/rspack-repro-import-meta-url/node_modules/.pnpm/loader-runner@4.3.0/node_modules/loader-runner/lib/LoaderRunner.js:220:11)\n    at iteratePitchingLoaders (/mnt/p0/Personal/rspack-repro-import-meta-url/node_modules/.pnpm/loader-runner@4.3.0/node_modules/loader-runner/lib/LoaderRunner.js:171:10)\n    at runLoaders (/mnt/p0/Personal/rspack-repro-import-meta-url/node_modules/.pnpm/loader-runner@4.3.0/node_modules/loader-runner/lib/LoaderRunner.js:398:2)\n    at NormalModule._doBuild (/mnt/p0/Personal/rspack-repro-import-meta-url/node_modules/.pnpm/webpack@5.93.0_esbuild@0.14.13_webpack-cli@5.1.4/node_modules/webpack/lib/NormalModule.js:910:3)\n    at NormalModule.build (/mnt/p0/Personal/rspack-repro-import-meta-url/node_modules/.pnpm/webpack@5.93.0_esbuild@0.14.13_webpack-cli@5.1.4/node_modules/webpack/lib/NormalModule.js:1086:15)\n    at /mnt/p0/Personal/rspack-repro-import-meta-url/node_modules/.pnpm/webpack@5.93.0_esbuild@0.14.13_webpack-cli@5.1.4/node_modules/webpack/lib/Compilation.js:1406:12");

/***/ }),

/***/ "node:module":
/*!*******************!*\
  !*** node:module ***!
  \*******************/
/***/ (() => {

throw new Error("Module build failed: UnhandledSchemeError: Reading from \"node:module\" is not handled by plugins (Unhandled scheme).\nWebpack supports \"data:\" and \"file:\" URIs by default.\nYou may need an additional plugin to handle \"node:\" URIs.\n    at /mnt/p0/Personal/rspack-repro-import-meta-url/node_modules/.pnpm/webpack@5.93.0_esbuild@0.14.13_webpack-cli@5.1.4/node_modules/webpack/lib/NormalModule.js:923:25\n    at Hook.eval [as callAsync] (eval at create (/mnt/p0/Personal/rspack-repro-import-meta-url/node_modules/.pnpm/tapable@2.2.1/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)\n    at Object.processResource (/mnt/p0/Personal/rspack-repro-import-meta-url/node_modules/.pnpm/webpack@5.93.0_esbuild@0.14.13_webpack-cli@5.1.4/node_modules/webpack/lib/NormalModule.js:920:8)\n    at processResource (/mnt/p0/Personal/rspack-repro-import-meta-url/node_modules/.pnpm/loader-runner@4.3.0/node_modules/loader-runner/lib/LoaderRunner.js:220:11)\n    at iteratePitchingLoaders (/mnt/p0/Personal/rspack-repro-import-meta-url/node_modules/.pnpm/loader-runner@4.3.0/node_modules/loader-runner/lib/LoaderRunner.js:171:10)\n    at runLoaders (/mnt/p0/Personal/rspack-repro-import-meta-url/node_modules/.pnpm/loader-runner@4.3.0/node_modules/loader-runner/lib/LoaderRunner.js:398:2)\n    at NormalModule._doBuild (/mnt/p0/Personal/rspack-repro-import-meta-url/node_modules/.pnpm/webpack@5.93.0_esbuild@0.14.13_webpack-cli@5.1.4/node_modules/webpack/lib/NormalModule.js:910:3)\n    at NormalModule.build (/mnt/p0/Personal/rspack-repro-import-meta-url/node_modules/.pnpm/webpack@5.93.0_esbuild@0.14.13_webpack-cli@5.1.4/node_modules/webpack/lib/NormalModule.js:1086:15)\n    at /mnt/p0/Personal/rspack-repro-import-meta-url/node_modules/.pnpm/webpack@5.93.0_esbuild@0.14.13_webpack-cli@5.1.4/node_modules/webpack/lib/Compilation.js:1406:12\n    at NormalModule.needBuild (/mnt/p0/Personal/rspack-repro-import-meta-url/node_modules/.pnpm/webpack@5.93.0_esbuild@0.14.13_webpack-cli@5.1.4/node_modules/webpack/lib/NormalModule.js:1410:32)");

/***/ }),

/***/ "node:os":
/*!***************!*\
  !*** node:os ***!
  \***************/
/***/ (() => {

throw new Error("Module build failed: UnhandledSchemeError: Reading from \"node:os\" is not handled by plugins (Unhandled scheme).\nWebpack supports \"data:\" and \"file:\" URIs by default.\nYou may need an additional plugin to handle \"node:\" URIs.\n    at /mnt/p0/Personal/rspack-repro-import-meta-url/node_modules/.pnpm/webpack@5.93.0_esbuild@0.14.13_webpack-cli@5.1.4/node_modules/webpack/lib/NormalModule.js:923:25\n    at Hook.eval [as callAsync] (eval at create (/mnt/p0/Personal/rspack-repro-import-meta-url/node_modules/.pnpm/tapable@2.2.1/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)\n    at Object.processResource (/mnt/p0/Personal/rspack-repro-import-meta-url/node_modules/.pnpm/webpack@5.93.0_esbuild@0.14.13_webpack-cli@5.1.4/node_modules/webpack/lib/NormalModule.js:920:8)\n    at processResource (/mnt/p0/Personal/rspack-repro-import-meta-url/node_modules/.pnpm/loader-runner@4.3.0/node_modules/loader-runner/lib/LoaderRunner.js:220:11)\n    at iteratePitchingLoaders (/mnt/p0/Personal/rspack-repro-import-meta-url/node_modules/.pnpm/loader-runner@4.3.0/node_modules/loader-runner/lib/LoaderRunner.js:171:10)\n    at runLoaders (/mnt/p0/Personal/rspack-repro-import-meta-url/node_modules/.pnpm/loader-runner@4.3.0/node_modules/loader-runner/lib/LoaderRunner.js:398:2)\n    at NormalModule._doBuild (/mnt/p0/Personal/rspack-repro-import-meta-url/node_modules/.pnpm/webpack@5.93.0_esbuild@0.14.13_webpack-cli@5.1.4/node_modules/webpack/lib/NormalModule.js:910:3)\n    at NormalModule.build (/mnt/p0/Personal/rspack-repro-import-meta-url/node_modules/.pnpm/webpack@5.93.0_esbuild@0.14.13_webpack-cli@5.1.4/node_modules/webpack/lib/NormalModule.js:1086:15)\n    at /mnt/p0/Personal/rspack-repro-import-meta-url/node_modules/.pnpm/webpack@5.93.0_esbuild@0.14.13_webpack-cli@5.1.4/node_modules/webpack/lib/Compilation.js:1406:12\n    at NormalModule.needBuild (/mnt/p0/Personal/rspack-repro-import-meta-url/node_modules/.pnpm/webpack@5.93.0_esbuild@0.14.13_webpack-cli@5.1.4/node_modules/webpack/lib/NormalModule.js:1410:32)");

/***/ }),

/***/ "node:path":
/*!*****************!*\
  !*** node:path ***!
  \*****************/
/***/ (() => {

throw new Error("Module build failed: UnhandledSchemeError: Reading from \"node:path\" is not handled by plugins (Unhandled scheme).\nWebpack supports \"data:\" and \"file:\" URIs by default.\nYou may need an additional plugin to handle \"node:\" URIs.\n    at /mnt/p0/Personal/rspack-repro-import-meta-url/node_modules/.pnpm/webpack@5.93.0_esbuild@0.14.13_webpack-cli@5.1.4/node_modules/webpack/lib/NormalModule.js:923:25\n    at Hook.eval [as callAsync] (eval at create (/mnt/p0/Personal/rspack-repro-import-meta-url/node_modules/.pnpm/tapable@2.2.1/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)\n    at Object.processResource (/mnt/p0/Personal/rspack-repro-import-meta-url/node_modules/.pnpm/webpack@5.93.0_esbuild@0.14.13_webpack-cli@5.1.4/node_modules/webpack/lib/NormalModule.js:920:8)\n    at processResource (/mnt/p0/Personal/rspack-repro-import-meta-url/node_modules/.pnpm/loader-runner@4.3.0/node_modules/loader-runner/lib/LoaderRunner.js:220:11)\n    at iteratePitchingLoaders (/mnt/p0/Personal/rspack-repro-import-meta-url/node_modules/.pnpm/loader-runner@4.3.0/node_modules/loader-runner/lib/LoaderRunner.js:171:10)\n    at runLoaders (/mnt/p0/Personal/rspack-repro-import-meta-url/node_modules/.pnpm/loader-runner@4.3.0/node_modules/loader-runner/lib/LoaderRunner.js:398:2)\n    at NormalModule._doBuild (/mnt/p0/Personal/rspack-repro-import-meta-url/node_modules/.pnpm/webpack@5.93.0_esbuild@0.14.13_webpack-cli@5.1.4/node_modules/webpack/lib/NormalModule.js:910:3)\n    at NormalModule.build (/mnt/p0/Personal/rspack-repro-import-meta-url/node_modules/.pnpm/webpack@5.93.0_esbuild@0.14.13_webpack-cli@5.1.4/node_modules/webpack/lib/NormalModule.js:1086:15)\n    at /mnt/p0/Personal/rspack-repro-import-meta-url/node_modules/.pnpm/webpack@5.93.0_esbuild@0.14.13_webpack-cli@5.1.4/node_modules/webpack/lib/Compilation.js:1406:12\n    at NormalModule.needBuild (/mnt/p0/Personal/rspack-repro-import-meta-url/node_modules/.pnpm/webpack@5.93.0_esbuild@0.14.13_webpack-cli@5.1.4/node_modules/webpack/lib/NormalModule.js:1410:32)");

/***/ })

}]);