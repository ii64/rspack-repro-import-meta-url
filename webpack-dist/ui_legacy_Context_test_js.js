"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_legacy_Context_test_js"],{

/***/ "./ui/legacy/Context.test.js":
/*!***********************************!*\
  !*** ./ui/legacy/Context.test.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

describe('Context', () => {
    it('can be instantiated without issues', () => {
        const context = _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Context.Context.instance({ forceNew: true });
        assert.strictEqual(context.flavors().size, 0, 'context should not have any flavors upon instantiation');
    });
    // TODO continue writing tests here or use another describe block
});
//# sourceMappingURL=Context.test.js.map

/***/ })

}]);