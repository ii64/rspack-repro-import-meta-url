"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["testing_MockScopeChain_test_js"], {
"./testing/MockScopeChain.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _MockScopeChain_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MockScopeChain.js */ "./testing/MockScopeChain.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}

describe('Scope test string parser', function() {
    it('test helper parses scopes from test descriptor', function() {
        //    source = 'function f(x) { g(x); {let a = x, return a} }';
        var scopes = '          {           <    B             B> }';
        var _parseScopeChain = _sliced_to_array((0,_MockScopeChain_js__WEBPACK_IMPORTED_MODULE_0__.parseScopeChain)(scopes), 2), scope = _parseScopeChain[0], functionScope = _parseScopeChain[1];
        assert.strictEqual(functionScope.startColumn, 10);
        assert.strictEqual(functionScope.endColumn, 45);
        assert.strictEqual(scope.startColumn, 22);
        assert.strictEqual(scope.endColumn, 43);
    });
    it('test helper parses function scope from test descriptor', function() {
        //    source = 'function f(x) { g(x); {let a = x, return a} }';
        var scopes = '          {B      B            B            }';
        var _parseScopeChain = _sliced_to_array((0,_MockScopeChain_js__WEBPACK_IMPORTED_MODULE_0__.parseScopeChain)(scopes), 1), functionScope = _parseScopeChain[0];
        assert.strictEqual(functionScope.startColumn, 10);
        assert.strictEqual(functionScope.endColumn, 45);
    });
}); //# sourceMappingURL=MockScopeChain.test.js.map


}),

}]);