"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["core_platform_NumberUtilities_test_js"],{

/***/ "./core/platform/NumberUtilities.test.js":
/*!***********************************************!*\
  !*** ./core/platform/NumberUtilities.test.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./platform.js */ "./core/platform/platform.js");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

describe('NumberUtilities', () => {
    describe('clamp', () => {
        it('takes the lower bound if the number is smaller', () => {
            assert.strictEqual(5, _platform_js__WEBPACK_IMPORTED_MODULE_0__.NumberUtilities.clamp(1, 5, 10));
        });
        it('takes the upper bound if the number is larger', () => {
            assert.strictEqual(10, _platform_js__WEBPACK_IMPORTED_MODULE_0__.NumberUtilities.clamp(20, 5, 10));
        });
        it('returns the original number if it is in bounds', () => {
            assert.strictEqual(7, _platform_js__WEBPACK_IMPORTED_MODULE_0__.NumberUtilities.clamp(7, 5, 10));
        });
    });
    describe('mod', () => {
        it('returns the remainder', () => {
            const result = _platform_js__WEBPACK_IMPORTED_MODULE_0__.NumberUtilities.mod(12, 5);
            assert.strictEqual(result, 2);
        });
    });
    describe('bytesToString', () => {
        it('formats for < 1000 bytes', () => {
            assert.deepEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.NumberUtilities.bytesToString(50), '50\xA0B');
        });
        it('formats for < 100 kilobytes', () => {
            assert.deepEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.NumberUtilities.bytesToString(5 * 1000), '5.0\xA0kB');
        });
        it('formats for < 1000 kilobytes', () => {
            assert.deepEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.NumberUtilities.bytesToString(500 * 1000), '500\xA0kB');
        });
        it('formats for < 100 megabytes', () => {
            const oneAndAHalfMegabytes = 1500 * 1000;
            assert.deepEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.NumberUtilities.bytesToString(oneAndAHalfMegabytes), '1.5\xA0MB');
        });
        it('formats for > 100 megabytes', () => {
            const oneMegabyte = 1000 * 1000;
            const twoHundredAndTenMegabytes = oneMegabyte * 210;
            assert.deepEqual(_platform_js__WEBPACK_IMPORTED_MODULE_0__.NumberUtilities.bytesToString(twoHundredAndTenMegabytes), '210\xA0MB');
        });
    });
    describe('toFixedIfFloating', () => {
        it('converts a decimal to a fixed string with 3 decimal places', () => {
            const output = _platform_js__WEBPACK_IMPORTED_MODULE_0__.NumberUtilities.toFixedIfFloating('1.23456');
            assert.strictEqual(output, '1.235');
        });
        it('leaves whole numbers alone', () => {
            const output = _platform_js__WEBPACK_IMPORTED_MODULE_0__.NumberUtilities.toFixedIfFloating('233');
            assert.strictEqual(output, '233');
        });
        it('leaves values that parse to NaN alone', () => {
            const output = _platform_js__WEBPACK_IMPORTED_MODULE_0__.NumberUtilities.toFixedIfFloating('SoNotANumber');
            assert.strictEqual(output, 'SoNotANumber');
        });
        it('leaves falsey values alone', () => {
            const output = _platform_js__WEBPACK_IMPORTED_MODULE_0__.NumberUtilities.toFixedIfFloating('');
            assert.strictEqual(output, '');
        });
    });
    describe('floor', () => {
        it('it works for integers', () => {
            assert.strictEqual(10, _platform_js__WEBPACK_IMPORTED_MODULE_0__.NumberUtilities.floor(10));
        });
        it('it rounds down float with precision', () => {
            assert.strictEqual(1.1, _platform_js__WEBPACK_IMPORTED_MODULE_0__.NumberUtilities.floor(1.1111, 1));
            assert.strictEqual(1.11, _platform_js__WEBPACK_IMPORTED_MODULE_0__.NumberUtilities.floor(1.1111, 2));
            assert.strictEqual(1.9, _platform_js__WEBPACK_IMPORTED_MODULE_0__.NumberUtilities.floor(1.9999, 1));
            assert.strictEqual(1.99, _platform_js__WEBPACK_IMPORTED_MODULE_0__.NumberUtilities.floor(1.9999, 2));
        });
    });
    describe('greatestCommonDivisor', () => {
        it('it works', () => {
            assert.strictEqual(0, _platform_js__WEBPACK_IMPORTED_MODULE_0__.NumberUtilities.greatestCommonDivisor(0, 0));
            assert.strictEqual(1, _platform_js__WEBPACK_IMPORTED_MODULE_0__.NumberUtilities.greatestCommonDivisor(1, 0));
            assert.strictEqual(1, _platform_js__WEBPACK_IMPORTED_MODULE_0__.NumberUtilities.greatestCommonDivisor(0, 1));
            assert.strictEqual(200, _platform_js__WEBPACK_IMPORTED_MODULE_0__.NumberUtilities.greatestCommonDivisor(600, 800));
            assert.strictEqual(200, _platform_js__WEBPACK_IMPORTED_MODULE_0__.NumberUtilities.greatestCommonDivisor(800, 600));
            assert.strictEqual(-200, _platform_js__WEBPACK_IMPORTED_MODULE_0__.NumberUtilities.greatestCommonDivisor(-800, -600));
            assert.strictEqual(1, _platform_js__WEBPACK_IMPORTED_MODULE_0__.NumberUtilities.greatestCommonDivisor(0.5, 0.5));
        });
    });
    describe('aspectRatio', () => {
        it('it works', () => {
            assert.strictEqual('0∶0', _platform_js__WEBPACK_IMPORTED_MODULE_0__.NumberUtilities.aspectRatio(0, 0));
            assert.strictEqual('0∶1', _platform_js__WEBPACK_IMPORTED_MODULE_0__.NumberUtilities.aspectRatio(0, 1));
            assert.strictEqual('1∶0', _platform_js__WEBPACK_IMPORTED_MODULE_0__.NumberUtilities.aspectRatio(1, 0));
            assert.strictEqual('1∶1', _platform_js__WEBPACK_IMPORTED_MODULE_0__.NumberUtilities.aspectRatio(1, 1));
            assert.strictEqual('4∶3', _platform_js__WEBPACK_IMPORTED_MODULE_0__.NumberUtilities.aspectRatio(800, 600));
            assert.strictEqual('3∶4', _platform_js__WEBPACK_IMPORTED_MODULE_0__.NumberUtilities.aspectRatio(600, 800));
            assert.strictEqual('4∶3', _platform_js__WEBPACK_IMPORTED_MODULE_0__.NumberUtilities.aspectRatio(-800, -600));
            assert.strictEqual('16∶9', _platform_js__WEBPACK_IMPORTED_MODULE_0__.NumberUtilities.aspectRatio(5120, 2880));
            assert.strictEqual('16∶10', _platform_js__WEBPACK_IMPORTED_MODULE_0__.NumberUtilities.aspectRatio(2560, 1600));
        });
    });
    describe('numberWithThousandSeparator', () => {
        it('separates 1000', () => {
            const inputNumber = 1000;
            const outputString = _platform_js__WEBPACK_IMPORTED_MODULE_0__.NumberUtilities.withThousandsSeparator(inputNumber);
            assert.strictEqual(outputString, '1\xA0000');
        });
        it('does not separate 1', () => {
            const inputNumber = 1;
            const outputString = _platform_js__WEBPACK_IMPORTED_MODULE_0__.NumberUtilities.withThousandsSeparator(inputNumber);
            assert.strictEqual(outputString, '1');
        });
        it('separates a billion', () => {
            const inputNumber = 7654321;
            const outputString = _platform_js__WEBPACK_IMPORTED_MODULE_0__.NumberUtilities.withThousandsSeparator(inputNumber);
            assert.strictEqual(outputString, '7\xA0654\xA0321');
        });
        it('separates decimal points', () => {
            const inputNumber = 0.0001;
            const outputString = _platform_js__WEBPACK_IMPORTED_MODULE_0__.NumberUtilities.withThousandsSeparator(inputNumber);
            assert.strictEqual(outputString, '0.0\xA0001');
        });
    });
});
//# sourceMappingURL=NumberUtilities.test.js.map

/***/ })

}]);