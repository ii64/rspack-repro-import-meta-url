"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_core_platform_DateUtilities_test_ts"],{

/***/ "./src/core/platform/DateUtilities.test.ts":
/*!*************************************************!*\
  !*** ./src/core/platform/DateUtilities.test.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./platform.js */ "./src/core/platform/platform.ts");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

describe('DateUtilities', () => {
    describe('isValid', () => {
        it('returns true for a valid date', () => {
            assert.isTrue(_platform_js__WEBPACK_IMPORTED_MODULE_0__.DateUtilities.isValid(new Date()));
        });
        it('returns false for a nonsense date', () => {
            const soNotADate = new Date('not-a-date');
            assert.isFalse(_platform_js__WEBPACK_IMPORTED_MODULE_0__.DateUtilities.isValid(soNotADate));
        });
    });
    describe('toISO8601Compact', () => {
        it('formats a date into a string', () => {
            const date = new Date(2020, 10, 20, 12, 13, 14);
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.DateUtilities.toISO8601Compact(date), '20201120T121314');
        });
        it('adds leading zeroes', () => {
            const date = new Date(2020, 0, 1, 0, 0, 0);
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.DateUtilities.toISO8601Compact(date), '20200101T000000');
        });
    });
});


/***/ })

}]);