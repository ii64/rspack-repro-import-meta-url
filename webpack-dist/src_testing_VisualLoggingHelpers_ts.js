"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_testing_VisualLoggingHelpers_ts"],{

/***/ "./src/testing/VisualLoggingHelpers.ts":
/*!*********************************************!*\
  !*** ./src/testing/VisualLoggingHelpers.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getVeId: () => (/* binding */ getVeId)
/* harmony export */ });
/* harmony import */ var _ui_visual_logging_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/visual_logging/visual_logging-testing.js */ "./src/ui/visual_logging/visual_logging-testing.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function getVeId(loggable) {
    if (typeof loggable === 'string') {
        loggable = document.querySelector(loggable);
    }
    return _ui_visual_logging_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.LoggingState.getLoggingState(loggable).veid;
}


/***/ }),

/***/ "./src/ui/visual_logging/visual_logging-testing.ts":
/*!*********************************************************!*\
  !*** ./src/ui/visual_logging/visual_logging-testing.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Debugging: () => (/* reexport module object */ _Debugging_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   DomState: () => (/* reexport module object */ _DomState_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   LoggingConfig: () => (/* reexport module object */ _LoggingConfig_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   LoggingDriver: () => (/* reexport module object */ _LoggingDriver_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   LoggingEvents: () => (/* reexport module object */ _LoggingEvents_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   LoggingState: () => (/* reexport module object */ _LoggingState_js__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   NonDomState: () => (/* reexport module object */ _NonDomState_js__WEBPACK_IMPORTED_MODULE_6__)
/* harmony export */ });
/* harmony import */ var _Debugging_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Debugging.js */ "./src/ui/visual_logging/Debugging.ts");
/* harmony import */ var _DomState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DomState.js */ "./src/ui/visual_logging/DomState.ts");
/* harmony import */ var _LoggingConfig_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoggingConfig.js */ "./src/ui/visual_logging/LoggingConfig.ts");
/* harmony import */ var _LoggingDriver_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LoggingDriver.js */ "./src/ui/visual_logging/LoggingDriver.ts");
/* harmony import */ var _LoggingEvents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoggingEvents.js */ "./src/ui/visual_logging/LoggingEvents.ts");
/* harmony import */ var _LoggingState_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LoggingState.js */ "./src/ui/visual_logging/LoggingState.ts");
/* harmony import */ var _NonDomState_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NonDomState.js */ "./src/ui/visual_logging/NonDomState.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.










/***/ })

}]);