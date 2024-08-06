"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_legacy_Fragment_test_js"],{

/***/ "./ui/legacy/Fragment.test.js":
/*!************************************!*\
  !*** ./ui/legacy/Fragment.test.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_dom_extension_dom_extension_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/dom_extension/dom_extension.js */ "./core/dom_extension/dom_extension.js");
/* harmony import */ var _legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


describe('Fragment', () => {
    it('can be instantiated correctly', () => {
        const testEl = document.createElement('p');
        const fragment = new _legacy_js__WEBPACK_IMPORTED_MODULE_1__.Fragment.Fragment(testEl);
        assert.strictEqual(fragment.element().outerHTML, '<p></p>', 'element was not set correctly');
    });
    it('is able to return an element from an ID', () => {
        const build = _legacy_js__WEBPACK_IMPORTED_MODULE_1__.Fragment.Fragment.build(['<p>', '</p>'], 'Test Text');
        assert.strictEqual(build.element().outerHTML, '<p>Test Text</p>', 'the element was not built correctly');
    });
    it('is able to find a certain element by its ID', () => {
        const build = _legacy_js__WEBPACK_IMPORTED_MODULE_1__.Fragment.Fragment.build(['<p $="testID">Test Text</p>']);
        assert.strictEqual(build.$('testID').outerHTML, '<p class="">Test Text</p>', 'the element was not retrieved correctly');
    });
    it('is able to retrieve cached fragment', () => {
        const cached = _legacy_js__WEBPACK_IMPORTED_MODULE_1__.Fragment.Fragment.cached(['<p>', '</p>'], 'Test Text');
        assert.strictEqual(cached.element().outerHTML, '<p>Test Text</p>', 'the element was not cached correctly');
    });
    it('is able to build a template with no inside text', () => {
        const build = _legacy_js__WEBPACK_IMPORTED_MODULE_1__.Fragment.Fragment.build(['<', '>'], 'p');
        assert.strictEqual(build.element().outerHTML, '<template-attribute0></template-attribute0>', 'the element was not built correctly');
    });
    it('is able to build a template with no tags', () => {
        const build = _legacy_js__WEBPACK_IMPORTED_MODULE_1__.Fragment.Fragment.build(['a', 'b'], 'testText');
        assert.strictEqual(build.element().textContent, 'atestTextb', 'the element was not built correctly');
    });
    it('is able to build a template with a normal attribute', () => {
        const build = _legacy_js__WEBPACK_IMPORTED_MODULE_1__.Fragment.Fragment.build(['<p align="center">', '</p>'], 'Test Text');
        assert.strictEqual(build.element().outerHTML, '<p align="center">Test Text</p>', 'the element was not built correctly');
    });
    it('is able to build a template with a dollar sign attribute', () => {
        const build = _legacy_js__WEBPACK_IMPORTED_MODULE_1__.Fragment.Fragment.build(['<p $>', '</p>'], 'Test Text');
        assert.strictEqual(build.element().outerHTML, '<p class="">Test Text</p>', 'the element was not built correctly');
    });
    it('is able to build a template with template attribute', () => {
        const build = _legacy_js__WEBPACK_IMPORTED_MODULE_1__.Fragment.Fragment.build(['<p template-attribute0>', '</p>'], 'testAttribute', 'Test Text');
        assert.strictEqual(build.element().outerHTML, '<p class="" testattribute="">Test Text</p>', 'the element was not built correctly');
    });
});
//# sourceMappingURL=Fragment.test.js.map

/***/ })

}]);