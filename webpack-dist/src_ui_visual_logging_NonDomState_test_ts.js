"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_visual_logging_NonDomState_test_ts"],{

/***/ "./src/ui/visual_logging/NonDomState.test.ts":
/*!***************************************************!*\
  !*** ./src/ui/visual_logging/NonDomState.test.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visual_logging-testing.js */ "./src/ui/visual_logging/visual_logging-testing.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

describe('NonDomState', () => {
    it('registers, unregisters and returns loggables', () => {
        const parent = {};
        const child = {};
        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.NonDomState.registerLoggable(parent, { ve: 1, context: '1' });
        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.NonDomState.registerLoggable(child, { ve: 1, context: '2' }, parent);
        assert.sameDeepMembers(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.NonDomState.getNonDomLoggables(), [
            { loggable: parent, config: { ve: 1, context: '1' }, parent: undefined },
        ]);
        assert.sameDeepMembers(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.NonDomState.getNonDomLoggables(parent), [
            { loggable: child, config: { ve: 1, context: '2' }, parent: parent },
        ]);
        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.NonDomState.unregisterLoggables(parent);
        assert.sameDeepMembers(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.NonDomState.getNonDomLoggables(parent), []);
        assert.sameDeepMembers(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.NonDomState.getNonDomLoggables(), [
            { loggable: parent, config: { ve: 1, context: '1' }, parent: undefined },
        ]);
        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.NonDomState.unregisterLoggables();
        assert.sameDeepMembers(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.NonDomState.getNonDomLoggables(), []);
    });
    it('prevents external changes to the registry', () => {
        const loggable = {};
        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.NonDomState.registerLoggable(loggable, { ve: 1, context: '1' });
        const loggables = _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.NonDomState.getNonDomLoggables();
        loggables.pop();
        assert.sameDeepMembers(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.NonDomState.getNonDomLoggables(), [
            { loggable: loggable, config: { ve: 1, context: '1' }, parent: undefined },
        ]);
        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.NonDomState.unregisterLoggables();
    });
});


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