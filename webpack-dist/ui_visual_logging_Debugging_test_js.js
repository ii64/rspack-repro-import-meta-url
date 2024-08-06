"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_visual_logging_Debugging_test_js"],{

/***/ "./ui/visual_logging/Debugging.test.js":
/*!*********************************************!*\
  !*** ./ui/visual_logging/Debugging.test.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visual_logging-testing.js */ "./ui/visual_logging/visual_logging-testing.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

describe('LoggingDriver', () => {
    it('marks loggable elements for debugging', async () => {
        // @ts-ignore
        globalThis.setVeDebuggingEnabled(true);
        const element = document.createElement('div');
        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.LoggingState.getOrCreateLoggingState(element, { ve: 1 });
        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.Debugging.processForDebugging(element);
        assert.strictEqual(element.style.outline, 'red solid 1px');
    });
    it('builds a debug string', () => {
        assert.strictEqual(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.Debugging.debugString({ ve: 1 }), 'TreeItem');
        assert.strictEqual(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.Debugging.debugString({ ve: 1, context: '42' }), 'TreeItem; context: 42');
        assert.strictEqual(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.Debugging.debugString({ ve: 1, track: { click: true } }), 'TreeItem; track: click');
        assert.strictEqual(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.Debugging.debugString({ ve: 1, track: { click: true, change: true } }), 'TreeItem; track: click, change');
        assert.strictEqual(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.Debugging.debugString({ ve: 1, track: { keydown: 'Enter' } }), 'TreeItem; track: keydown: Enter');
        assert.strictEqual(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.Debugging.debugString({ ve: 1, context: '42', track: { keydown: 'Enter' } }), 'TreeItem; context: 42; track: keydown: Enter');
    });
});
//# sourceMappingURL=Debugging.test.js.map

/***/ }),

/***/ "./ui/visual_logging/visual_logging-testing.js":
/*!*****************************************************!*\
  !*** ./ui/visual_logging/visual_logging-testing.js ***!
  \*****************************************************/
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
/* harmony import */ var _Debugging_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Debugging.js */ "./ui/visual_logging/Debugging.js");
/* harmony import */ var _DomState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DomState.js */ "./ui/visual_logging/DomState.js");
/* harmony import */ var _LoggingConfig_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoggingConfig.js */ "./ui/visual_logging/LoggingConfig.js");
/* harmony import */ var _LoggingDriver_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LoggingDriver.js */ "./ui/visual_logging/LoggingDriver.js");
/* harmony import */ var _LoggingEvents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoggingEvents.js */ "./ui/visual_logging/LoggingEvents.js");
/* harmony import */ var _LoggingState_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LoggingState.js */ "./ui/visual_logging/LoggingState.js");
/* harmony import */ var _NonDomState_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NonDomState.js */ "./ui/visual_logging/NonDomState.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








//# sourceMappingURL=visual_logging-testing.js.map

/***/ })

}]);