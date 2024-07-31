"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_core_sdk_OverlayColorGenerator_test_ts"],{

/***/ "./src/core/sdk/OverlayColorGenerator.test.ts":
/*!****************************************************!*\
  !*** ./src/core/sdk/OverlayColorGenerator.test.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sdk.js */ "./src/core/sdk/sdk.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

describe('OverlayColorGenerator', () => {
    it('generates colors for at least 100 iterations', () => {
        const generator = new _sdk_js__WEBPACK_IMPORTED_MODULE_0__.OverlayColorGenerator.OverlayColorGenerator();
        let prevColor;
        for (let i = 0; i < 100; i++) {
            const color = generator.next();
            if (prevColor) {
                assert.notDeepEqual(color.asString(), prevColor.asString());
            }
            prevColor = color;
        }
    });
});


/***/ })

}]);