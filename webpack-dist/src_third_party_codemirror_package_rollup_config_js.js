"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_codemirror_package_rollup_config_js"],{

/***/ "./src/third_party/codemirror/package/rollup.config.js":
/*!*************************************************************!*\
  !*** ./src/third_party/codemirror/package/rollup.config.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@rollup/plugin-buble'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([
  {
    input: "src/codemirror.js",
    output: {
      banner: `// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

// This is CodeMirror (https://codemirror.net), a code editor
// implemented in JavaScript on top of the browser's DOM.
//
// You can find some technical background for some of the code below
// at http://marijnhaverbeke.nl/blog/#cm-internals .
`,
      format: "umd",
      file: "lib/codemirror.js",
      name: "CodeMirror"
    },
    plugins: [ Object(function webpackMissingModule() { var e = new Error("Cannot find module '@rollup/plugin-buble'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({namedFunctionExpressions: false}) ]
  },
  {
    input: ["src/addon/runmode/runmode-standalone.js"],
    output: {
      format: "iife",
      file: "addon/runmode/runmode-standalone.js",
      name: "CodeMirror",
      freeze: false, // IE8 doesn't support Object.freeze.
    },
    plugins: [ Object(function webpackMissingModule() { var e = new Error("Cannot find module '@rollup/plugin-buble'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({namedFunctionExpressions: false}) ]
  },
  {
    input: ["src/addon/runmode/runmode.node.js"],
    output: {
      format: "cjs",
      file: "addon/runmode/runmode.node.js",
      name: "CodeMirror",
      freeze: false, // IE8 doesn't support Object.freeze.
    },
    plugins: [ Object(function webpackMissingModule() { var e = new Error("Cannot find module '@rollup/plugin-buble'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({namedFunctionExpressions: false}) ]
  },
]);


/***/ })

}]);