"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["core_common_Debouncer_test_js"],{

/***/ "./core/common/Debouncer.test.js":
/*!***************************************!*\
  !*** ./core/common/Debouncer.test.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./core/common/common.js");
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
//# sourceMappingURL=Debouncer.test.js.map

/***/ })

}]);