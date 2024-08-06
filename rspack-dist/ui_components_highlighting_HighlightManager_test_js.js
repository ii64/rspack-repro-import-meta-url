"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_highlighting_HighlightManager_test_js"], {
"./ui/components/highlighting/HighlightManager.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */var _highlighting_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./highlighting.js */ "./ui/components/highlighting/highlighting.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


describe('HighlightManager', function() {
    var fromHtml = function fromHtml(html) {
        var div = container.createChild('div');
        div.innerHTML = html;
        return div;
    };
    var walk = function walk(html) {
        return new _highlighting_js__WEBPACK_IMPORTED_MODULE_1__.HighlightManager.RangeWalker(fromHtml(html));
    };
    var toText = function toText(range) {
        var _range_cloneContents;
        assert.exists(range);
        var text = (_range_cloneContents = range.cloneContents()) === null || _range_cloneContents === void 0 ? void 0 : _range_cloneContents.textContent;
        assert.exists(text);
        return text;
    };
    var container;
    before(function() {
        container = document.createElement('div');
    });
    after(function() {
        container.remove();
    });
    it('correctly translates ranges', function() {
        // "text"
        //    ^^
        assert.deepStrictEqual(toText(walk('text').nextRange(2, 2)), 'xt');
        // "abcdef"
        //    ^ ^
        assert.deepStrictEqual(toText(walk('abc<p>def</p>').nextRange(2, 3)), 'cde');
        // "abcdefghi"
        //    ^    ^
        assert.deepStrictEqual(toText(walk('abc<p>def</p>ghi').nextRange(2, 6)), 'cdefgh');
        // ""
        //  ^
        assert.isNull(walk('').nextRange(0, 1));
        // "abc"
        //     ^
        assert.isNull(walk('abc').nextRange(3, 1));
        // "abc"
        //  ^^^^
        assert.isNull(walk('abc').nextRange(0, 4));
        // "abc"
        //
        assert.isNull(walk('abc').nextRange(0, 0));
        assert.isNull(walk('abc').nextRange(-1, 0));
        assert.isNull(walk('abc').nextRange(0, -1));
        // "abcdefghi"
        //  ^^^^^^^^^
        var walker = walk('abc<p>def</p>ghi');
        assert.deepStrictEqual(toText(walker.nextRange(0, 3)), 'abc');
        assert.deepStrictEqual(toText(walker.nextRange(3, 3)), 'def');
        assert.deepStrictEqual(toText(walker.nextRange(6, 3)), 'ghi');
    });
    it('correctly highlights ranges', function() {
        var highlightManager = new _highlighting_js__WEBPACK_IMPORTED_MODULE_1__.HighlightManager.HighlightManager();
        // @ts-expect-error
        assert.strictEqual(CSS.highlights.get(_highlighting_js__WEBPACK_IMPORTED_MODULE_1__.HighlightManager.HIGHLIGHT_REGISTRY).size, 0);
        var ranges = highlightManager.highlightOrderedTextRanges(fromHtml('abc<p>def</p>ghi'), [
            new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextRange.SourceRange(0, 3),
            new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextRange.SourceRange(3, 3),
            new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextRange.SourceRange(6, 3)
        ]);
        var highlight = CSS.highlights.get(_highlighting_js__WEBPACK_IMPORTED_MODULE_1__.HighlightManager.HIGHLIGHT_REGISTRY);
        assert.strictEqual(highlight === null || highlight === void 0 ? void 0 : highlight.size, 3);
        assert.deepStrictEqual(Array.from(highlight.keys()), ranges);
    });
}); //# sourceMappingURL=HighlightManager.test.js.map


}),
"./ui/components/highlighting/highlighting.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  HighlightManager: function() { return /* reexport module object */ _HighlightManager_js__WEBPACK_IMPORTED_MODULE_0__; }
});
/* harmony import */var _HighlightManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HighlightManager.js */ "./ui/components/highlighting/HighlightManager.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

 //# sourceMappingURL=highlighting.js.map


}),

}]);