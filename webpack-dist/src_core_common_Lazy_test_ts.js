"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_core_common_Lazy_test_ts"],{

/***/ "./src/core/common/Lazy.test.ts":
/*!**************************************!*\
  !*** ./src/core/common/Lazy.test.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./src/core/common/common.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

const lazy = _common_js__WEBPACK_IMPORTED_MODULE_0__.Lazy.lazy;
describe('lazy', () => {
    it('evaluates callback once', () => {
        const initializeArrayOnce = lazy(() => []);
        const arrayOne = initializeArrayOnce();
        const arrayTwo = initializeArrayOnce();
        assert.strictEqual(arrayOne, arrayTwo);
        assert.notStrictEqual([], arrayOne);
    });
    it('handles callback exceptions', () => {
        let callCount = 0;
        const exceptionCallback = lazy(() => {
            callCount++;
            throw Error();
        });
        assert.throws(exceptionCallback, Error);
        // Subsequent calls of the function should throw an exception without
        // re-evaluation
        assert.throws(exceptionCallback, Error);
        assert.strictEqual(callCount, 1);
    });
});


/***/ })

}]);