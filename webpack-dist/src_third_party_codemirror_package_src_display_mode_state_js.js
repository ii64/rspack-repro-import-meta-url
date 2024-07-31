"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_codemirror_package_src_display_mode_state_js"],{

/***/ "./src/third_party/codemirror/package/src/display/mode_state.js":
/*!**********************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/display/mode_state.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadMode: () => (/* binding */ loadMode),
/* harmony export */   resetModeState: () => (/* binding */ resetModeState)
/* harmony export */ });
/* harmony import */ var _modes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modes.js */ "./src/third_party/codemirror/package/src/modes.js");
/* harmony import */ var _highlight_worker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./highlight_worker.js */ "./src/third_party/codemirror/package/src/display/highlight_worker.js");
/* harmony import */ var _view_tracking_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view_tracking.js */ "./src/third_party/codemirror/package/src/display/view_tracking.js");





// Used to get the editor into a consistent state again when options change.

function loadMode(cm) {
  cm.doc.mode = (0,_modes_js__WEBPACK_IMPORTED_MODULE_0__.getMode)(cm.options, cm.doc.modeOption)
  resetModeState(cm)
}

function resetModeState(cm) {
  cm.doc.iter(line => {
    if (line.stateAfter) line.stateAfter = null
    if (line.styles) line.styles = null
  })
  cm.doc.modeFrontier = cm.doc.highlightFrontier = cm.doc.first
  ;(0,_highlight_worker_js__WEBPACK_IMPORTED_MODULE_1__.startWorker)(cm, 100)
  cm.state.modeGen++
  if (cm.curOp) (0,_view_tracking_js__WEBPACK_IMPORTED_MODULE_2__.regChange)(cm)
}


/***/ })

}]);