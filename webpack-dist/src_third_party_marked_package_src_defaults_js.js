"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_marked_package_src_defaults_js"],{

/***/ "./src/third_party/marked/package/src/defaults.js":
/*!********************************************************!*\
  !*** ./src/third_party/marked/package/src/defaults.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeDefaults: () => (/* binding */ changeDefaults),
/* harmony export */   defaults: () => (/* binding */ defaults),
/* harmony export */   getDefaults: () => (/* binding */ getDefaults)
/* harmony export */ });
function getDefaults() {
  return {
    baseUrl: null,
    breaks: false,
    extensions: null,
    gfm: true,
    headerIds: true,
    headerPrefix: '',
    highlight: null,
    langPrefix: 'language-',
    mangle: true,
    pedantic: false,
    renderer: null,
    sanitize: false,
    sanitizer: null,
    silent: false,
    smartLists: false,
    smartypants: false,
    tokenizer: null,
    walkTokens: null,
    xhtml: false
  };
}

let defaults = getDefaults();

function changeDefaults(newDefaults) {
  defaults = newDefaults;
}


/***/ })

}]);