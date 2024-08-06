"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_XLink_test_js"], {
"./ui/legacy/XLink.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var _this = undefined;


describe('XLink', function() {
    describe('title', function() {
        it('equals href by default', function() {
            var link = new _legacy_js__WEBPACK_IMPORTED_MODULE_1__.XLink.XLink();
            link.setAttribute('href', 'https://example.com/');
            assert.strictEqual(link.href, 'https://example.com/');
            assert.strictEqual(link.title, link.href);
        });
        it('overrides href', function() {
            var link = new _legacy_js__WEBPACK_IMPORTED_MODULE_1__.XLink.XLink();
            link.setAttribute('href', 'https://example.com/');
            link.setAttribute('title', 'test');
            assert.strictEqual(link.href, 'https://example.com/');
            assert.strictEqual(link.title, 'test');
        });
    });
    describe('HTML minification', function() {
        it('properly minifies whitespaces in release mode', function() {
            var _target_querySelector;
            var target = document.createElement('section');
            _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_legacy_js__WEBPACK_IMPORTED_MODULE_1__.XLink.sample, target, {
                host: _this
            });
            var result = (_target_querySelector = target.querySelector('p')) === null || _target_querySelector === void 0 ? void 0 : _target_querySelector.innerText;
            assert.strictEqual(result, 'Hello, world!');
        });
    });
}); //# sourceMappingURL=XLink.test.js.map


}),

}]);