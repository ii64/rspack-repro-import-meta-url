"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_legacy_components_inline_editor_AnimationTimingUI_test_ts"],{

/***/ "./src/ui/legacy/components/inline_editor/AnimationTimingUI.test.ts":
/*!**************************************************************************!*\
  !*** ./src/ui/legacy/components/inline_editor/AnimationTimingUI.test.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inline_editor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inline_editor.js */ "./src/ui/legacy/components/inline_editor/inline_editor.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

describe('AnimationTimingUI', () => {
    it('can be instantiated successfully', () => {
        const model = _inline_editor_js__WEBPACK_IMPORTED_MODULE_0__.AnimationTimingModel.AnimationTimingModel.parse('linear(0, 1)');
        const animationTimingUI = new _inline_editor_js__WEBPACK_IMPORTED_MODULE_0__.AnimationTimingUI.AnimationTimingUI({
            model,
            onChange: () => { },
        });
        animationTimingUI.draw();
        const bezierContainer = animationTimingUI.element().querySelector('.bezier-ui-container');
        const linearEasingContainer = animationTimingUI.element().querySelector('.linear-easing-ui-container');
        assert.exists(linearEasingContainer);
        assert.exists(bezierContainer);
    });
    it('should bezier-ui-container be hidden when linear-easing function is visualized', () => {
        const model = _inline_editor_js__WEBPACK_IMPORTED_MODULE_0__.AnimationTimingModel.AnimationTimingModel.parse('linear(0, 1)');
        const animationTimingUI = new _inline_editor_js__WEBPACK_IMPORTED_MODULE_0__.AnimationTimingUI.AnimationTimingUI({
            model,
            onChange: () => { },
        });
        animationTimingUI.draw();
        const bezierContainer = animationTimingUI.element().querySelector('.bezier-ui-container');
        const linearEasingContainer = animationTimingUI.element().querySelector('.linear-easing-ui-container');
        assert.exists(linearEasingContainer);
        assert.exists(bezierContainer);
        assert.isTrue(bezierContainer.classList.contains('hidden'));
        assert.isFalse(linearEasingContainer.classList.contains('hidden'));
    });
    it('should linear-easing-ui-container be hidden when cubic-bezier function is visualized', () => {
        const model = _inline_editor_js__WEBPACK_IMPORTED_MODULE_0__.AnimationTimingModel.AnimationTimingModel.parse('cubic-bezier(0, 0, 1, 1)');
        const animationTimingUI = new _inline_editor_js__WEBPACK_IMPORTED_MODULE_0__.AnimationTimingUI.AnimationTimingUI({
            model,
            onChange: () => { },
        });
        animationTimingUI.draw();
        const bezierContainer = animationTimingUI.element().querySelector('.bezier-ui-container');
        const linearEasingContainer = animationTimingUI.element().querySelector('.linear-easing-ui-container');
        assert.exists(linearEasingContainer);
        assert.exists(bezierContainer);
        assert.isFalse(bezierContainer.classList.contains('hidden'));
        assert.isTrue(linearEasingContainer.classList.contains('hidden'));
    });
});


/***/ })

}]);