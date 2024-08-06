"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["core_platform_MapUtilities_test_js"],{

/***/ "./core/platform/MapUtilities.test.js":
/*!********************************************!*\
  !*** ./core/platform/MapUtilities.test.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./platform.js */ "./core/platform/platform.js");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

describe('MapUtilities', () => {
    describe('inverse', () => {
        it('inverts the map returning a multimap with the map\'s values as keys and the map\'s keys as values', () => {
            const pairs = [
                ['a', 1],
                ['b', 2],
                ['c', 3],
                ['d', 1],
            ];
            const map = new Map(pairs);
            const inverse = _platform_js__WEBPACK_IMPORTED_MODULE_0__.MapUtilities.inverse(map);
            for (const [, value] of pairs) {
                assert.sameMembers([...inverse.get(value)], [...getKeys(value)]);
            }
            function getKeys(lookupValue) {
                const keys = new Set();
                for (const [key, value] of pairs) {
                    if (value === lookupValue) {
                        keys.add(key);
                    }
                }
                return keys;
            }
        });
    });
    describe('getWithDefault', () => {
        it('returns the default when it has no value', () => {
            const expected = new Set();
            const returned = _platform_js__WEBPACK_IMPORTED_MODULE_0__.MapUtilities.getWithDefault(new Map(), 'foo', () => expected);
            assert.strictEqual(expected, returned);
        });
        it('returns the same item on successive calls', () => {
            const data = new Map();
            const returnedFirst = _platform_js__WEBPACK_IMPORTED_MODULE_0__.MapUtilities.getWithDefault(data, 'foo', () => new Set());
            const returnedSecond = _platform_js__WEBPACK_IMPORTED_MODULE_0__.MapUtilities.getWithDefault(data, 'foo', () => new Set());
            assert.strictEqual(returnedFirst, returnedSecond);
        });
    });
});
//# sourceMappingURL=MapUtilities.test.js.map

/***/ })

}]);