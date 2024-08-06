"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_sdk_OverlayColorGenerator_test_js"], {
"./core/sdk/OverlayColorGenerator.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sdk.js */ "./core/sdk/sdk.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

describe('OverlayColorGenerator', function() {
    it('generates colors for at least 100 iterations', function() {
        var generator = new _sdk_js__WEBPACK_IMPORTED_MODULE_0__.OverlayColorGenerator.OverlayColorGenerator();
        var prevColor;
        for(var i = 0; i < 100; i++){
            var color = generator.next();
            if (prevColor) {
                assert.notDeepEqual(color.asString(), prevColor.asString());
            }
            prevColor = color;
        }
    });
}); //# sourceMappingURL=OverlayColorGenerator.test.js.map


}),

}]);