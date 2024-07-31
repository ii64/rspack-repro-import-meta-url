"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_core_platform_TypedArrayUtilities_test_ts"],{

/***/ "./src/core/platform/TypedArrayUtilities.test.ts":
/*!*******************************************************!*\
  !*** ./src/core/platform/TypedArrayUtilities.test.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./platform.js */ "./src/core/platform/platform.ts");
// Copyright (c) 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

describe('TypedArrayUtilities', () => {
    describe('BigUint32Array', () => {
        it('can be expandable', () => {
            const array = _platform_js__WEBPACK_IMPORTED_MODULE_0__.TypedArrayUtilities.createExpandableBigUint32Array();
            assert.strictEqual(array.length, 0);
            array.setValue(0, 33);
            array.setValue(1, 44);
            assert.strictEqual(array.length, 2);
            assert.strictEqual(array.getValue(0), 33);
            assert.strictEqual(array.getValue(1), 44);
            assert.strictEqual(array.asArrayOrFail(), array);
        });
        it('can act as a Uint32Array', () => {
            const array = _platform_js__WEBPACK_IMPORTED_MODULE_0__.TypedArrayUtilities.createFixedBigUint32Array(15);
            assert.strictEqual(array.length, 15);
            assert.strictEqual(array.getValue(7), 0);
            array.setValue(7, 77);
            assert.strictEqual(array.getValue(7), 77);
            assert.strictEqual(array.asUint32ArrayOrFail(), array);
        });
        it('can be bigger than a Uint32Array', () => {
            const array = _platform_js__WEBPACK_IMPORTED_MODULE_0__.TypedArrayUtilities.createFixedBigUint32Array(12345678, /* maxLengthForTesting=*/ 2e6);
            assert.strictEqual(array.length, 12345678);
            assert.strictEqual(array.getValue(0), 0);
            assert.strictEqual(array.getValue(500000), 0);
            assert.strictEqual(array.getValue(5000000), 0);
            assert.strictEqual(array.getValue(12345677), 0);
            array.setValue(0, 9);
            array.setValue(500000, 99);
            array.setValue(5000000, 999);
            array.setValue(12345677, 9999);
            assert.strictEqual(array.getValue(0), 9);
            assert.strictEqual(array.getValue(500000), 99);
            assert.strictEqual(array.getValue(5000000), 999);
            assert.strictEqual(array.getValue(12345677), 9999);
            assert.isFalse(array instanceof Array);
            assert.isFalse(array instanceof Uint32Array);
        });
    });
    describe('BitVector', () => {
        it('can be iterated', () => {
            const bits = _platform_js__WEBPACK_IMPORTED_MODULE_0__.TypedArrayUtilities.createBitVector(100);
            const indices = [99, 88, 66, 65, 64, 63, 15, 14, 1, 0];
            for (const index of indices) {
                bits.setBit(index);
            }
            const iterated = [];
            for (let i = bits.previous(100); i !== -1; i = bits.previous(i)) {
                iterated.push(i);
            }
            assert.deepEqual(iterated, indices);
        });
    });
});


/***/ })

}]);