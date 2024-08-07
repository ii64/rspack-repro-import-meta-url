"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_text_utils_TextCursor_test_js"], {
"./models/text_utils/TextCursor.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _text_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text_utils.js */ "./models/text_utils/text_utils.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

describe('TextCursor', function() {
    it('can be instantiated successfully', function() {
        var cursor = new _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextCursor.TextCursor([
            0,
            5,
            10,
            15
        ]);
        assert.strictEqual(cursor.lineNumber(), 0, 'lineNumber should be initialised to 0');
        assert.strictEqual(cursor.columnNumber(), 0, 'columnNumber should be initialised to 0');
    });
    it('can be advanced by a certain offset', function() {
        var cursor = new _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextCursor.TextCursor([
            5,
            10,
            15
        ]);
        cursor.advance(8);
        assert.strictEqual(cursor.lineNumber(), 1, 'lineNumber should be correct');
        assert.strictEqual(cursor.columnNumber(), 2, 'columnNumber should be correct');
    });
    it('should handle an advance to 0', function() {
        var cursor = new _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextCursor.TextCursor([
            5,
            10,
            15
        ]);
        cursor.advance(0);
        assert.strictEqual(cursor.lineNumber(), 0, 'lineNumber should be correct');
        assert.strictEqual(cursor.columnNumber(), 0, 'columnNumber should be correct');
    });
    it('should return the current offset', function() {
        var cursor = new _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextCursor.TextCursor([
            5,
            10,
            15
        ]);
        cursor.advance(8);
        cursor.advance(8);
        assert.strictEqual(cursor.offset(), 8);
    });
    it('should jump to a certain offset', function() {
        var cursor = new _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextCursor.TextCursor([
            5,
            10,
            15
        ]);
        cursor.resetTo(8);
        assert.strictEqual(cursor.lineNumber(), 1, 'lineNumber should be correct');
        assert.strictEqual(cursor.columnNumber(), 2, 'columnNumber should be correct');
    });
    it('should be able to jump to an offset of 0', function() {
        var cursor = new _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextCursor.TextCursor([
            5,
            10,
            15
        ]);
        cursor.resetTo(0);
        assert.strictEqual(cursor.lineNumber(), 0, 'lineNumber should be correct');
        assert.strictEqual(cursor.columnNumber(), 0, 'columnNumber should be correct');
    });
}); //# sourceMappingURL=TextCursor.test.js.map


}),

}]);