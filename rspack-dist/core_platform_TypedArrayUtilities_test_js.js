"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_platform_TypedArrayUtilities_test_js"], {
"./core/platform/TypedArrayUtilities.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./platform.js */ "./core/platform/platform.js");
// Copyright (c) 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}

describe('TypedArrayUtilities', function() {
    describe('BigUint32Array', function() {
        it('can be expandable', function() {
            var array = _platform_js__WEBPACK_IMPORTED_MODULE_0__.TypedArrayUtilities.createExpandableBigUint32Array();
            assert.strictEqual(array.length, 0);
            array.setValue(0, 33);
            array.setValue(1, 44);
            assert.strictEqual(array.length, 2);
            assert.strictEqual(array.getValue(0), 33);
            assert.strictEqual(array.getValue(1), 44);
            assert.strictEqual(array.asArrayOrFail(), array);
        });
        it('can act as a Uint32Array', function() {
            var array = _platform_js__WEBPACK_IMPORTED_MODULE_0__.TypedArrayUtilities.createFixedBigUint32Array(15);
            assert.strictEqual(array.length, 15);
            assert.strictEqual(array.getValue(7), 0);
            array.setValue(7, 77);
            assert.strictEqual(array.getValue(7), 77);
            assert.strictEqual(array.asUint32ArrayOrFail(), array);
        });
        it('can be bigger than a Uint32Array', function() {
            var array = _platform_js__WEBPACK_IMPORTED_MODULE_0__.TypedArrayUtilities.createFixedBigUint32Array(12345678, /* maxLengthForTesting=*/ 2e6);
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
            assert.isFalse(_instanceof(array, Array));
            assert.isFalse(_instanceof(array, Uint32Array));
        });
    });
    describe('BitVector', function() {
        it('can be iterated', function() {
            var bits = _platform_js__WEBPACK_IMPORTED_MODULE_0__.TypedArrayUtilities.createBitVector(100);
            var indices = [
                99,
                88,
                66,
                65,
                64,
                63,
                15,
                14,
                1,
                0
            ];
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = indices[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var index = _step.value;
                    bits.setBit(index);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
            var iterated = [];
            for(var i = bits.previous(100); i !== -1; i = bits.previous(i)){
                iterated.push(i);
            }
            assert.deepEqual(iterated, indices);
        });
    });
}); //# sourceMappingURL=TypedArrayUtilities.test.js.map


}),

}]);