"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_codemirror_package_src_line_saw_special_spans_js"],{

/***/ "./src/third_party/codemirror/package/src/line/saw_special_spans.js":
/*!**************************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/line/saw_special_spans.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sawCollapsedSpans: () => (/* binding */ sawCollapsedSpans),
/* harmony export */   sawReadOnlySpans: () => (/* binding */ sawReadOnlySpans),
/* harmony export */   seeCollapsedSpans: () => (/* binding */ seeCollapsedSpans),
/* harmony export */   seeReadOnlySpans: () => (/* binding */ seeReadOnlySpans)
/* harmony export */ });
// Optimize some code when these features are not used.
let sawReadOnlySpans = false, sawCollapsedSpans = false

function seeReadOnlySpans() {
  sawReadOnlySpans = true
}

function seeCollapsedSpans() {
  sawCollapsedSpans = true
}


/***/ })

}]);