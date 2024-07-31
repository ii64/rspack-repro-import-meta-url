"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_core_common_Debouncer_test_ts"],{

/***/ "./src/core/common/Debouncer.test.ts":
/*!*******************************************!*\
  !*** ./src/core/common/Debouncer.test.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./src/core/common/common.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

describe('Debouncer', () => {
    it('debounces correctly', done => {
        let count = 0;
        function increment() {
            count++;
        }
        const debouncedIncrement = _common_js__WEBPACK_IMPORTED_MODULE_0__.Debouncer.debounce(increment, 10);
        // Fire it twice, but we anticipate that it is debounced to firing
        // once after 10ms.
        debouncedIncrement();
        debouncedIncrement();
        // Then wait a while before checking the value.
        setTimeout(() => {
            assert.strictEqual(count, 1);
            done();
        }, 50);
    });
});


/***/ })

}]);