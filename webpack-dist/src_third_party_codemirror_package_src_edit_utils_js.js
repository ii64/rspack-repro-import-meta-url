"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_codemirror_package_src_edit_utils_js"],{

/***/ "./src/third_party/codemirror/package/src/edit/utils.js":
/*!**************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/edit/utils.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   themeChanged: () => (/* binding */ themeChanged)
/* harmony export */ });
/* harmony import */ var _measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../measurement/position_measurement.js */ "./src/third_party/codemirror/package/src/measurement/position_measurement.js");


function themeChanged(cm) {
  cm.display.wrapper.className = cm.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") +
    cm.options.theme.replace(/(^|\s)\s*/g, " cm-s-")
  ;(0,_measurement_position_measurement_js__WEBPACK_IMPORTED_MODULE_0__.clearCaches)(cm)
}


/***/ })

}]);