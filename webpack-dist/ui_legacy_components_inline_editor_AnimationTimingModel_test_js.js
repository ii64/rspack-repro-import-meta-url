"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_legacy_components_inline_editor_AnimationTimingModel_test_js"],{

/***/ "./ui/legacy/components/inline_editor/AnimationTimingModel.test.js":
/*!*************************************************************************!*\
  !*** ./ui/legacy/components/inline_editor/AnimationTimingModel.test.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inline_editor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inline_editor.js */ "./ui/legacy/components/inline_editor/inline_editor.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

describe('AnimationTimingModel', () => {
    it('should parse `linear` as linear easing function', () => {
        const model = _inline_editor_js__WEBPACK_IMPORTED_MODULE_0__.AnimationTimingModel.AnimationTimingModel.parse('linear');
        assert.instanceOf(model, _inline_editor_js__WEBPACK_IMPORTED_MODULE_0__.CSSLinearEasingModel.CSSLinearEasingModel);
        assert.strictEqual(model.asCSSText(), 'linear');
    });
    it('should parse a valid cubic bezier curve', () => {
        const model = _inline_editor_js__WEBPACK_IMPORTED_MODULE_0__.AnimationTimingModel.AnimationTimingModel.parse('cubic-bezier(0, 0.5, 1, 1)');
        assert.strictEqual(model.asCSSText(), 'cubic-bezier(0, 0.5, 1, 1)');
    });
    it('should parse a valid linear easing function', () => {
        const model = _inline_editor_js__WEBPACK_IMPORTED_MODULE_0__.AnimationTimingModel.AnimationTimingModel.parse('linear(0, 1)');
        assert.strictEqual(model.asCSSText(), 'linear');
    });
});
//# sourceMappingURL=AnimationTimingModel.test.js.map

/***/ })

}]);