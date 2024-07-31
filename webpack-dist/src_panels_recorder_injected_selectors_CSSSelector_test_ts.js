"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_recorder_injected_selectors_CSSSelector_test_ts"],{

/***/ "./src/panels/recorder/injected/selectors/CSSSelector.test.ts":
/*!********************************************************************!*\
  !*** ./src/panels/recorder/injected/selectors/CSSSelector.test.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CSSSelector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CSSSelector.js */ "./src/panels/recorder/injected/selectors/CSSSelector.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/* eslint-disable rulesdir/es_modules_import */

describe('findMinMax', () => {
    it('should work', () => {
        const minmax = (0,_CSSSelector_js__WEBPACK_IMPORTED_MODULE_0__.findMinMax)([0, 10], {
            inc(index) {
                return index + 1;
            },
            valueOf(index) {
                return index;
            },
            gte(value, index) {
                return value >= index;
            },
        });
        assert.strictEqual(minmax, 9);
    });
    it('should work, non trivial', () => {
        const minmax = (0,_CSSSelector_js__WEBPACK_IMPORTED_MODULE_0__.findMinMax)([0, 10], {
            inc(index) {
                return index + 1;
            },
            valueOf(index) {
                return index;
            },
            gte(value, index) {
                return value >= Math.min(index, 5);
            },
        });
        assert.strictEqual(minmax, 5);
    });
});


/***/ })

}]);