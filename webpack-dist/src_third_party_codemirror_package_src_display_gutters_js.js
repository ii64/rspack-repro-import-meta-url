"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_codemirror_package_src_display_gutters_js"],{

/***/ "./src/third_party/codemirror/package/src/display/gutters.js":
/*!*******************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/display/gutters.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getGutters: () => (/* binding */ getGutters),
/* harmony export */   renderGutters: () => (/* binding */ renderGutters),
/* harmony export */   updateGutters: () => (/* binding */ updateGutters)
/* harmony export */ });
/* harmony import */ var _util_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/dom.js */ "./src/third_party/codemirror/package/src/util/dom.js");
/* harmony import */ var _line_numbers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./line_numbers.js */ "./src/third_party/codemirror/package/src/display/line_numbers.js");
/* harmony import */ var _update_display_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update_display.js */ "./src/third_party/codemirror/package/src/display/update_display.js");
/* harmony import */ var _view_tracking_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view_tracking.js */ "./src/third_party/codemirror/package/src/display/view_tracking.js");






function getGutters(gutters, lineNumbers) {
  let result = [], sawLineNumbers = false
  for (let i = 0; i < gutters.length; i++) {
    let name = gutters[i], style = null
    if (typeof name != "string") { style = name.style; name = name.className }
    if (name == "CodeMirror-linenumbers") {
      if (!lineNumbers) continue
      else sawLineNumbers = true
    }
    result.push({className: name, style})
  }
  if (lineNumbers && !sawLineNumbers) result.push({className: "CodeMirror-linenumbers", style: null})
  return result
}

// Rebuild the gutter elements, ensure the margin to the left of the
// code matches their width.
function renderGutters(display) {
  let gutters = display.gutters, specs = display.gutterSpecs
  ;(0,_util_dom_js__WEBPACK_IMPORTED_MODULE_0__.removeChildren)(gutters)
  display.lineGutter = null
  for (let i = 0; i < specs.length; ++i) {
    let {className, style} = specs[i]
    let gElt = gutters.appendChild((0,_util_dom_js__WEBPACK_IMPORTED_MODULE_0__.elt)("div", null, "CodeMirror-gutter " + className))
    if (style) gElt.style.cssText = style
    if (className == "CodeMirror-linenumbers") {
      display.lineGutter = gElt
      gElt.style.width = (display.lineNumWidth || 1) + "px"
    }
  }
  gutters.style.display = specs.length ? "" : "none"
  ;(0,_update_display_js__WEBPACK_IMPORTED_MODULE_2__.updateGutterSpace)(display)
}

function updateGutters(cm) {
  renderGutters(cm.display)
  ;(0,_view_tracking_js__WEBPACK_IMPORTED_MODULE_3__.regChange)(cm)
  ;(0,_line_numbers_js__WEBPACK_IMPORTED_MODULE_1__.alignHorizontally)(cm)
}


/***/ })

}]);