"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_codemirror_next_rollup_config_js"],{

/***/ "./src/third_party/codemirror.next/rollup.config.js":
/*!**********************************************************!*\
  !*** ./src/third_party/codemirror.next/rollup.config.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rollup_plugin_node_resolve__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rollup/plugin-node-resolve */ "./node_modules/.pnpm/@rollup+plugin-node-resolve@10.0.0_rollup@2.63.0/node_modules/@rollup/plugin-node-resolve/dist/es/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@rollup/plugin-terser'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'rollup-plugin-dts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  input: './bundle.js',
  output: {
    format: 'es',
    dir: '.',
    manualChunks(id) {
      if (/legacy-modes/.test(id)) return 'chunk/legacy';
    },
    chunkFileNames(info) {
      for (let mod of Object.keys(info.modules)) {
        const match = /(@codemirror\/|@replit\/codemirror-)(?<name>[\w-]+)/.exec(mod);
        if (match) {
          const {name} = match.groups;
          if (name === 'view') return 'chunk/codemirror.js';
          if (/lang-/.test(name)) return `chunk/${name.slice(5)}.js`;
          if (name === 'legacy-modes') return 'chunk/legacy.js';
        }
      }
      throw new Error('Failed to determine a chunk name for ' + Object.keys(info.modules));
    },
    entryFileNames: 'codemirror.next.js',
    sourcemap: true,
  },
  plugins: [
    (0,_rollup_plugin_node_resolve__WEBPACK_IMPORTED_MODULE_0__.nodeResolve)(),
    Object(function webpackMissingModule() { var e = new Error("Cannot find module '@rollup/plugin-terser'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())()
  ]
}, {
  input: './bundle.d.ts',
  output: {
    file: './codemirror.next.d.ts',
    format: 'es'
  },
  plugins: [
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'rollup-plugin-dts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({respectExternal: true}),
    {
      name: 'delete-trailing-whitespace',
      generateBundle(options, bundle) {
        for (let file of Object.values(bundle)) {
          if (file.code) file.code = file.code.replace(/[ \t]+(\n|$)/g, '$1');
        }
      }
    }
  ]
}]);


/***/ })

}]);