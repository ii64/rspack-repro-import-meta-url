"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["core_i18n_time-utilities_test_js"],{

/***/ "./core/i18n/time-utilities.test.js":
/*!******************************************!*\
  !*** ./core/i18n/time-utilities.test.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./i18n.js */ "./core/i18n/i18n.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithLocale)('preciseMillisToString', () => {
    it('formats without a given precision', () => {
        const inputNumber = 7.84;
        const outputString = _i18n_js__WEBPACK_IMPORTED_MODULE_1__.TimeUtilities.preciseMillisToString(inputNumber);
        assert.strictEqual(outputString, '8\xA0ms');
    });
    it('formats without a given precision', () => {
        const inputNumber = 7.84;
        const precision = 2;
        const outputString = _i18n_js__WEBPACK_IMPORTED_MODULE_1__.TimeUtilities.preciseMillisToString(inputNumber, precision);
        assert.strictEqual(outputString, '7.84\xA0ms');
    });
});
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithLocale)('formatMicroSecondsTime', () => {
    const { formatMicroSecondsTime } = _i18n_js__WEBPACK_IMPORTED_MODULE_1__.TimeUtilities;
    it('formats small microsecond values', async () => {
        const time = 8;
        assert.strictEqual(formatMicroSecondsTime(time), '8\xA0μs');
    });
    it('formats larger microsecond values as milliseconds', async () => {
        const time = 892;
        assert.strictEqual(formatMicroSecondsTime(time), '0.89\xA0ms');
    });
    it('formats milliseconds', async () => {
        const time = 8.9122 * 1_000;
        assert.strictEqual(formatMicroSecondsTime(time), '8.91\xA0ms');
    });
    it('formats seconds', async () => {
        const time = 8.9122 * 1_000 * 1_000;
        assert.strictEqual(formatMicroSecondsTime(time), '8.91\xA0s');
    });
    it('formats minutes', async () => {
        // 203 = 3 minutes, 23 seconds
        const time = 203 * 1_000 * 1_000;
        assert.strictEqual(formatMicroSecondsTime(time), '3.4\xA0min');
    });
});
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithLocale)('formatMicroSecondsAsSeconds', () => {
    const { formatMicroSecondsAsSeconds } = _i18n_js__WEBPACK_IMPORTED_MODULE_1__.TimeUtilities;
    it('formats smaller second values', async () => {
        const time = 0.03 * 1_000 * 1_000;
        assert.strictEqual(formatMicroSecondsAsSeconds(time), '0.03\xA0s');
    });
    it('formats larger second values', async () => {
        const time = 8.9122 * 1_000 * 1_000;
        assert.strictEqual(formatMicroSecondsAsSeconds(time), '8.91\xA0s');
    });
});
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithLocale)('millisToString', () => {
    it('formats when number is infinite', () => {
        const inputNumber = Infinity;
        const outputString = _i18n_js__WEBPACK_IMPORTED_MODULE_1__.TimeUtilities.millisToString(inputNumber);
        assert.strictEqual(outputString, '-');
    });
    it('formats when number is zero', () => {
        const inputNumber = 0;
        const outputString = _i18n_js__WEBPACK_IMPORTED_MODULE_1__.TimeUtilities.millisToString(inputNumber);
        assert.strictEqual(outputString, '0');
    });
    it('formats with higher resolution and a number less that 0.1', () => {
        const inputNumber = 0.01;
        const higherResolution = true;
        const outputString = _i18n_js__WEBPACK_IMPORTED_MODULE_1__.TimeUtilities.millisToString(inputNumber, higherResolution);
        assert.strictEqual(outputString, '10\xA0μs');
    });
    it('formats with higher resolution and a number less that 1000', () => {
        const inputNumber = 897.98;
        const higherResolution = true;
        const outputString = _i18n_js__WEBPACK_IMPORTED_MODULE_1__.TimeUtilities.millisToString(inputNumber, higherResolution);
        assert.strictEqual(outputString, '897.98\xA0ms');
    });
    it('formats without higher resolution and a number less that 1000', () => {
        const inputNumber = 897.98;
        const higherResolution = false;
        const outputString = _i18n_js__WEBPACK_IMPORTED_MODULE_1__.TimeUtilities.millisToString(inputNumber, higherResolution);
        assert.strictEqual(outputString, '898\xA0ms');
    });
    it('formats less than 60 seconds', () => {
        const inputNumber = 12345;
        const outputString = _i18n_js__WEBPACK_IMPORTED_MODULE_1__.TimeUtilities.millisToString(inputNumber);
        assert.strictEqual(outputString, '12.35\xA0s');
    });
    it('formats less than 60 minutes', () => {
        const inputNumber = 265000;
        const outputString = _i18n_js__WEBPACK_IMPORTED_MODULE_1__.TimeUtilities.millisToString(inputNumber);
        assert.strictEqual(outputString, '4.4\xA0min');
    });
    it('formats less than 24 hours', () => {
        const inputNumber = 20000000;
        const outputString = _i18n_js__WEBPACK_IMPORTED_MODULE_1__.TimeUtilities.millisToString(inputNumber);
        assert.strictEqual(outputString, '5.6\xA0hrs');
    });
    it('formats days', () => {
        const inputNumber = 100000000;
        const outputString = _i18n_js__WEBPACK_IMPORTED_MODULE_1__.TimeUtilities.millisToString(inputNumber);
        assert.strictEqual(outputString, '1.2\xA0days');
    });
});
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithLocale)('secondsToString', () => {
    it('formats infinte numbers correctly', () => {
        const inputNumber = Infinity;
        const outputString = _i18n_js__WEBPACK_IMPORTED_MODULE_1__.TimeUtilities.secondsToString(inputNumber);
        assert.strictEqual(outputString, '-');
    });
    it('formats finite numbers correctly', () => {
        const inputNumber = 7.849;
        const outputString = _i18n_js__WEBPACK_IMPORTED_MODULE_1__.TimeUtilities.secondsToString(inputNumber);
        assert.strictEqual(outputString, '7.85\xA0s');
    });
});
//# sourceMappingURL=time-utilities.test.js.map

/***/ })

}]);