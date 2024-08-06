"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_platform_KeyboardUtilities_test_js"], {
"./core/platform/KeyboardUtilities.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./platform.js */ "./core/platform/platform.js");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

describe('KeyboardUtilities', function() {
    describe('#keyIsArrowKey', function() {
        it('returns true for ArrowUp, ArrowDown, ArrowLeft and ArrowRight', function() {
            var keysAreArrowKeys = [
                'ArrowDown',
                'ArrowUp',
                'ArrowLeft',
                'ArrowRight'
            ].map(function(key) {
                return _platform_js__WEBPACK_IMPORTED_MODULE_0__.KeyboardUtilities.keyIsArrowKey(key);
            });
            assert.deepEqual(keysAreArrowKeys, [
                true,
                true,
                true,
                true
            ]);
        });
        it('returns false for anything else', function() {
            var keysAreNotArrowKeys = [
                'Enter',
                ' ',
                'a',
                'C'
            ].map(function(key) {
                return _platform_js__WEBPACK_IMPORTED_MODULE_0__.KeyboardUtilities.keyIsArrowKey(key);
            });
            assert.deepEqual(keysAreNotArrowKeys, [
                false,
                false,
                false,
                false
            ]);
        });
    });
    describe('isEscKey', function() {
        it('is true for the escape key', function() {
            var event = new KeyboardEvent('keydown', {
                key: 'Escape'
            });
            assert.isTrue(_platform_js__WEBPACK_IMPORTED_MODULE_0__.KeyboardUtilities.isEscKey(event));
        });
        it('is false for another key', function() {
            var event = new KeyboardEvent('keydown', {
                key: 'Enter'
            });
            assert.isFalse(_platform_js__WEBPACK_IMPORTED_MODULE_0__.KeyboardUtilities.isEscKey(event));
        });
    });
    describe('isEnterOrSpaceKey', function() {
        it('returns true for enter', function() {
            var event = new KeyboardEvent('keydown', {
                key: 'Enter'
            });
            assert.isTrue(_platform_js__WEBPACK_IMPORTED_MODULE_0__.KeyboardUtilities.isEnterOrSpaceKey(event));
        });
        it('returns true for space', function() {
            var event = new KeyboardEvent('keydown', {
                key: ' '
            });
            assert.isTrue(_platform_js__WEBPACK_IMPORTED_MODULE_0__.KeyboardUtilities.isEnterOrSpaceKey(event));
        });
        it('returns false for any other key', function() {
            var event = new KeyboardEvent('keydown', {
                key: 'a'
            });
            assert.isFalse(_platform_js__WEBPACK_IMPORTED_MODULE_0__.KeyboardUtilities.isEnterOrSpaceKey(event));
        });
    });
}); //# sourceMappingURL=KeyboardUtilities.test.js.map


}),

}]);