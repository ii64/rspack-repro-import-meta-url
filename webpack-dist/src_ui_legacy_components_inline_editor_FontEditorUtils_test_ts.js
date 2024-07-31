"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_legacy_components_inline_editor_FontEditorUtils_test_ts"],{

/***/ "./src/ui/legacy/components/inline_editor/FontEditorUtils.test.ts":
/*!************************************************************************!*\
  !*** ./src/ui/legacy/components/inline_editor/FontEditorUtils.test.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inline_editor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inline_editor.js */ "./src/ui/legacy/components/inline_editor/inline_editor.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

describe('FontEditorUtils', () => {
    it('getRoundingPrecision rounds units as expected', () => {
        let roundingPrecisionValue = _inline_editor_js__WEBPACK_IMPORTED_MODULE_0__.FontEditorUtils.getRoundingPrecision(1);
        assert.strictEqual(roundingPrecisionValue, 0, 'getRoundingPrecision returned unexpected results for value: 1');
        roundingPrecisionValue = _inline_editor_js__WEBPACK_IMPORTED_MODULE_0__.FontEditorUtils.getRoundingPrecision(.1);
        assert.strictEqual(roundingPrecisionValue, 1, 'getRoundingPrecision returned unexpected results for value: .1');
        roundingPrecisionValue = _inline_editor_js__WEBPACK_IMPORTED_MODULE_0__.FontEditorUtils.getRoundingPrecision(.01);
        assert.strictEqual(roundingPrecisionValue, 2, 'getRoundingPrecision returned unexpected results for value: .01');
        roundingPrecisionValue = _inline_editor_js__WEBPACK_IMPORTED_MODULE_0__.FontEditorUtils.getRoundingPrecision(.001);
        assert.strictEqual(roundingPrecisionValue, 3, 'getRoundingPrecision returned unexpected results for value: .001');
        roundingPrecisionValue = _inline_editor_js__WEBPACK_IMPORTED_MODULE_0__.FontEditorUtils.getRoundingPrecision(500);
        assert.strictEqual(roundingPrecisionValue, 0, 'getRoundingPrecision returned unexpected results for value: 500');
        roundingPrecisionValue = _inline_editor_js__WEBPACK_IMPORTED_MODULE_0__.FontEditorUtils.getRoundingPrecision(-500);
        assert.strictEqual(roundingPrecisionValue, 0, 'getRoundingPrecision returned unexpected results for value: -500');
    });
});


/***/ })

}]);