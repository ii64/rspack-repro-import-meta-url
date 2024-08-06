"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["testing_MockScopeChain_test_js"],{

/***/ "./testing/MockScopeChain.test.js":
/*!****************************************!*\
  !*** ./testing/MockScopeChain.test.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MockScopeChain_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MockScopeChain.js */ "./testing/MockScopeChain.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

describe('Scope test string parser', () => {
    it('test helper parses scopes from test descriptor', () => {
        //    source = 'function f(x) { g(x); {let a = x, return a} }';
        const scopes = '          {           <    B             B> }';
        const [scope, functionScope] = (0,_MockScopeChain_js__WEBPACK_IMPORTED_MODULE_0__.parseScopeChain)(scopes);
        assert.strictEqual(functionScope.startColumn, 10);
        assert.strictEqual(functionScope.endColumn, 45);
        assert.strictEqual(scope.startColumn, 22);
        assert.strictEqual(scope.endColumn, 43);
    });
    it('test helper parses function scope from test descriptor', () => {
        //    source = 'function f(x) { g(x); {let a = x, return a} }';
        const scopes = '          {B      B            B            }';
        const [functionScope] = (0,_MockScopeChain_js__WEBPACK_IMPORTED_MODULE_0__.parseScopeChain)(scopes);
        assert.strictEqual(functionScope.startColumn, 10);
        assert.strictEqual(functionScope.endColumn, 45);
    });
});
//# sourceMappingURL=MockScopeChain.test.js.map

/***/ })

}]);