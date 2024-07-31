"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_elements_StylePropertyUtils_test_ts"],{

/***/ "./src/panels/elements/StylePropertyUtils.test.ts":
/*!********************************************************!*\
  !*** ./src/panels/elements/StylePropertyUtils.test.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements.js */ "./src/panels/elements/elements.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithEnvironment)('StylePropertyUtils', () => {
    it('convert CSS declaration to JS property', () => {
        assert.strictEqual(_elements_js__WEBPACK_IMPORTED_MODULE_1__.StylePropertyUtils.getCssDeclarationAsJavascriptProperty({ name: 'display', value: 'flex' }), 'display: \'flex\'');
        assert.strictEqual(_elements_js__WEBPACK_IMPORTED_MODULE_1__.StylePropertyUtils.getCssDeclarationAsJavascriptProperty({ name: 'box-sizing', value: 'border-box' }), 'boxSizing: \'border-box\'');
        assert.strictEqual(_elements_js__WEBPACK_IMPORTED_MODULE_1__.StylePropertyUtils.getCssDeclarationAsJavascriptProperty({ name: 'background-color', value: 'var(--color-background-elevation-1)' }), 'backgroundColor: \'var(--color-background-elevation-1)\'');
        assert.strictEqual(_elements_js__WEBPACK_IMPORTED_MODULE_1__.StylePropertyUtils.getCssDeclarationAsJavascriptProperty({ name: '--monospace-font-size', value: '12px' }), '\'--monospace-font-size\': \'12px\'');
        assert.strictEqual(_elements_js__WEBPACK_IMPORTED_MODULE_1__.StylePropertyUtils.getCssDeclarationAsJavascriptProperty({ name: 'mask-position', value: 'bottom' }), 'maskPosition: \'bottom\'');
        assert.strictEqual(_elements_js__WEBPACK_IMPORTED_MODULE_1__.StylePropertyUtils.getCssDeclarationAsJavascriptProperty({ name: '-webkit-mask-position', value: 'bottom' }), 'WebkitMaskPosition: \'bottom\'');
        assert.strictEqual(_elements_js__WEBPACK_IMPORTED_MODULE_1__.StylePropertyUtils.getCssDeclarationAsJavascriptProperty({ name: 'background-image', value: 'url("paper.gif")' }), 'backgroundImage: \'url("paper.gif")\'');
    });
});


/***/ })

}]);