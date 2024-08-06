"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_common_Lazy_test_js"], {
"./core/common/Lazy.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./core/common/common.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var lazy = _common_js__WEBPACK_IMPORTED_MODULE_0__.Lazy.lazy;
describe('lazy', function() {
    it('evaluates callback once', function() {
        var initializeArrayOnce = lazy(function() {
            return [];
        });
        var arrayOne = initializeArrayOnce();
        var arrayTwo = initializeArrayOnce();
        assert.strictEqual(arrayOne, arrayTwo);
        assert.notStrictEqual([], arrayOne);
    });
    it('handles callback exceptions', function() {
        var callCount = 0;
        var exceptionCallback = lazy(function() {
            callCount++;
            throw Error();
        });
        assert.throws(exceptionCallback, Error);
        // Subsequent calls of the function should throw an exception without
        // re-evaluation
        assert.throws(exceptionCallback, Error);
        assert.strictEqual(callCount, 1);
    });
}); //# sourceMappingURL=Lazy.test.js.map


}),

}]);