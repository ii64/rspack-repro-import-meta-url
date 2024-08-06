"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_recorder_injected_selectors_CSSSelector_test_js"], {
"./panels/recorder/injected/selectors/CSSSelector.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _CSSSelector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CSSSelector.js */ "./panels/recorder/injected/selectors/CSSSelector.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/* eslint-disable rulesdir/es_modules_import */ 
describe('findMinMax', function() {
    it('should work', function() {
        var minmax = (0,_CSSSelector_js__WEBPACK_IMPORTED_MODULE_0__.findMinMax)([
            0,
            10
        ], {
            inc: function inc(index) {
                return index + 1;
            },
            valueOf: function valueOf(index) {
                return index;
            },
            gte: function gte(value, index) {
                return value >= index;
            }
        });
        assert.strictEqual(minmax, 9);
    });
    it('should work, non trivial', function() {
        var minmax = (0,_CSSSelector_js__WEBPACK_IMPORTED_MODULE_0__.findMinMax)([
            0,
            10
        ], {
            inc: function inc(index) {
                return index + 1;
            },
            valueOf: function valueOf(index) {
                return index;
            },
            gte: function gte(value, index) {
                return value >= Math.min(index, 5);
            }
        });
        assert.strictEqual(minmax, 5);
    });
}); //# sourceMappingURL=CSSSelector.test.js.map


}),

}]);