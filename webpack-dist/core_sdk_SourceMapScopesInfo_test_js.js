"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["core_sdk_SourceMapScopesInfo_test_js"],{

/***/ "./core/sdk/SourceMapScopesInfo.test.js":
/*!**********************************************!*\
  !*** ./core/sdk/SourceMapScopesInfo.test.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/SourceMapEncoder.js */ "./testing/SourceMapEncoder.js");
/* harmony import */ var _sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sdk.js */ "./core/sdk/sdk.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


const { SourceMapScopesInfo } = _sdk_js__WEBPACK_IMPORTED_MODULE_1__.SourceMapScopesInfo;
describe('SourceMapScopesInfo', () => {
    describe('findInlinedFunctions', () => {
        it('returns the single original function name if nothing was inlined', () => {
            const names = [];
            const originalScopes = [new _testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.OriginalScopeBuilder(names)
                    .start(0, 0, 'global')
                    .start(5, 0, 'function', 'foo')
                    .end(10, 0)
                    .end(20, 0)
                    .build()];
            const generatedRanges = new _testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.GeneratedRangeBuilder(names)
                .start(0, 0, { definition: { sourceIdx: 0, scopeIdx: 0 } })
                .start(0, 0, { definition: { sourceIdx: 0, scopeIdx: 1 }, isScope: true })
                .end(0, 5)
                .end(0, 5)
                .build();
            const info = SourceMapScopesInfo.parseFromMap({ names, originalScopes, generatedRanges });
            assert.deepEqual(info.findInlinedFunctions(0, 3), [{ name: 'foo', callsite: undefined }]);
        });
        it('returns the names of the surrounding function plus all the inlined function names', () => {
            // 'foo' calls 'bar', 'bar' calls 'baz'. 'bar' and 'baz' are inlined into 'foo'.
            const names = [];
            const originalScopes = [new _testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.OriginalScopeBuilder(names)
                    .start(0, 0, 'global')
                    .start(10, 0, 'function', 'foo')
                    .end(20, 0)
                    .start(30, 0, 'function', 'bar')
                    .end(40, 0)
                    .start(50, 0, 'function', 'baz')
                    .end(60, 0)
                    .end(70, 0)
                    .build()];
            const generatedRanges = new _testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.GeneratedRangeBuilder(names)
                .start(0, 0, { definition: { sourceIdx: 0, scopeIdx: 0 } })
                .start(0, 0, { definition: { sourceIdx: 0, scopeIdx: 1 }, isScope: true })
                .start(0, 5, { definition: { sourceIdx: 0, scopeIdx: 3 }, callsite: { sourceIdx: 0, line: 15, column: 0 } })
                .start(0, 5, { definition: { sourceIdx: 0, scopeIdx: 5 }, callsite: { sourceIdx: 0, line: 35, column: 0 } })
                .end(0, 10)
                .end(0, 10)
                .end(0, 10)
                .end(0, 10)
                .build();
            const info = SourceMapScopesInfo.parseFromMap({ names, originalScopes, generatedRanges });
            assert.deepEqual(info.findInlinedFunctions(0, 4), [{ name: 'foo', callsite: undefined }]);
            assert.deepEqual(info.findInlinedFunctions(0, 7), [
                { name: 'baz', callsite: { sourceIndex: 0, line: 35, column: 0 } },
                { name: 'bar', callsite: { sourceIndex: 0, line: 15, column: 0 } },
                { name: 'foo', callsite: undefined },
            ]);
        });
    });
});
//# sourceMappingURL=SourceMapScopesInfo.test.js.map

/***/ })

}]);