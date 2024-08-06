"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_text_utils_Text_test_js"], {
"./models/text_utils/Text.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _text_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text_utils.js */ "./models/text_utils/text_utils.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

describe('Text', function() {
    it('can be instantiated successfully', function() {
        var testVal = 'Test Value';
        var text = new _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.Text.Text(testVal);
        assert.strictEqual(text.value(), testVal);
    });
    it('has a list of line ending offsets including the end of the string', function() {
        var text = new _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.Text.Text('\nLine 2\nLine 3\n');
        assert.deepEqual(text.lineEndings(), [
            0,
            7,
            14,
            15
        ]);
    });
    it('should count the number of line endings', function() {
        var text = new _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.Text.Text('\nLine 2\nLine 3\n');
        assert.strictEqual(text.lineCount(), 4);
    });
    it('should return an offset when given a linenumber and column', function() {
        var text = new _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.Text.Text('\nLine 2\nLine 3\n');
        assert.strictEqual(text.offsetFromPosition(2, 4), 12);
    });
    it('should return NaN if the linenumber is out of range when trying to retrieve the offset', function() {
        var text = new _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.Text.Text('\nLine 2\nLine 3\n');
        assert.isNaN(text.offsetFromPosition(10, 0));
    });
    it('should return an offset of zero when given a linenumber of 0 and column of 0 ', function() {
        var text = new _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.Text.Text('\nLine 2\nLine 3\n');
        assert.strictEqual(text.offsetFromPosition(0, 0), 0);
    });
    it('should handle an out of range column number when returning the offset', function() {
        var text = new _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.Text.Text('\nLine 2\nLine 3\n');
        assert.strictEqual(text.offsetFromPosition(2, 10), 18);
    });
    it('should return linenumber and column for an offset', function() {
        var text = new _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.Text.Text('\nLine 2\nLine 3\n');
        var _text_positionFromOffset = text.positionFromOffset(10), lineNumber = _text_positionFromOffset.lineNumber, columnNumber = _text_positionFromOffset.columnNumber;
        assert.strictEqual(lineNumber, 2, 'linenumber should be 2');
        assert.strictEqual(columnNumber, 2, 'columnnumber should be 2');
    });
    it('should return a given line', function() {
        var text = new _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.Text.Text('\nLine 2\nLine 3\n');
        assert.strictEqual(text.lineAt(2), 'Line 3');
    });
    it('should not include the carriage return when returning a given line', function() {
        var text = new _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.Text.Text('\nLine 2\nLine 3\r\n');
        assert.strictEqual(text.lineAt(2), 'Line 3');
    });
    it('should be able to return line 0', function() {
        var text = new _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.Text.Text('Line 1\nLine 2\nLine 3\n');
        assert.strictEqual(text.lineAt(0), 'Line 1');
    });
    it('should return a source range for a given text range', function() {
        var text = new _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.Text.Text('\nLine 2\nLine 3\n');
        var textRange = new _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextRange.TextRange(1, 0, 2, 6);
        var sourceRange = text.toSourceRange(textRange);
        assert.strictEqual(sourceRange.offset, 1, 'offset was not set correctly');
        assert.strictEqual(sourceRange.length, 13, 'length was not set correctly');
    });
    it('should return a source range with an offset and length of NaN if the startLine is out of range', function() {
        var text = new _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.Text.Text('\nLine 2\nLine 3\n');
        var textRange = new _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextRange.TextRange(10, 0, 12, 6);
        var sourceRange = text.toSourceRange(textRange);
        assert.isNaN(sourceRange.offset, 'offset should be NaN');
        assert.isNaN(sourceRange.length, 'length should be NaN');
    });
    it('should return a text range for a given source range', function() {
        var text = new _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.Text.Text('\nLine 2\nLine 3\n');
        var sourceRange = new _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextRange.SourceRange(1, 13);
        var textRange = text.toTextRange(sourceRange);
        assert.strictEqual(textRange.startLine, 1, 'startLine was not set correctly');
        assert.strictEqual(textRange.startColumn, 0, 'startColumn was not set correctly');
        assert.strictEqual(textRange.endLine, 2, 'endLine was not set correctly');
        assert.strictEqual(textRange.endColumn, 6, 'endColumn was not set correctly');
    });
    it('should replace a given range with a new string', function() {
        var text = new _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.Text.Text('\nLine 2\nLine 3\n');
        var textRange = new _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextRange.TextRange(1, 0, 2, 0);
        assert.strictEqual(text.replaceRange(textRange, 'New Text'), '\nNew TextLine 3\n');
    });
    it('should extract a string given a range', function() {
        var text = new _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.Text.Text('\nLine 2\nLine 3\n');
        var textRange = new _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextRange.TextRange(1, 0, 2, 0);
        assert.strictEqual(text.extract(textRange), 'Line 2\n');
    });
}); //# sourceMappingURL=Text.test.js.map


}),

}]);