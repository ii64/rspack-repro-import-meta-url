"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_legacy_XLink_test_ts"],{

/***/ "./src/ui/legacy/XLink.test.ts":
/*!*************************************!*\
  !*** ./src/ui/legacy/XLink.test.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./legacy.js */ "./src/ui/legacy/legacy.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


describe('XLink', () => {
    describe('title', () => {
        it('equals href by default', () => {
            const link = new _legacy_js__WEBPACK_IMPORTED_MODULE_1__.XLink.XLink();
            link.setAttribute('href', 'https://example.com/');
            assert.strictEqual(link.href, 'https://example.com/');
            assert.strictEqual(link.title, link.href);
        });
        it('overrides href', () => {
            const link = new _legacy_js__WEBPACK_IMPORTED_MODULE_1__.XLink.XLink();
            link.setAttribute('href', 'https://example.com/');
            link.setAttribute('title', 'test');
            assert.strictEqual(link.href, 'https://example.com/');
            assert.strictEqual(link.title, 'test');
        });
    });
    describe('HTML minification', () => {
        it('properly minifies whitespaces in release mode', () => {
            const target = document.createElement('section');
            _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_legacy_js__WEBPACK_IMPORTED_MODULE_1__.XLink.sample, target, { host: undefined });
            const result = target.querySelector('p')?.innerText;
            assert.strictEqual(result, 'Hello, world!');
        });
    });
});


/***/ })

}]);