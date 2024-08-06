"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_highlighting_HighlightManager_test_js"],{

/***/ "./ui/components/highlighting/HighlightManager.js":
/*!********************************************************!*\
  !*** ./ui/components/highlighting/HighlightManager.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HIGHLIGHT_REGISTRY: () => (/* binding */ HIGHLIGHT_REGISTRY),
/* harmony export */   HighlightManager: () => (/* binding */ HighlightManager),
/* harmony export */   RangeWalker: () => (/* binding */ RangeWalker)
/* harmony export */ });
/* harmony import */ var _highlighting_css_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./highlighting.css.js */ "./ui/components/highlighting/highlighting.css.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

class RangeWalker {
    root;
    #offset = 0;
    #treeWalker;
    #eof;
    constructor(root) {
        this.root = root;
        this.#treeWalker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
        this.#eof = !this.#treeWalker.firstChild();
    }
    #next() {
        this.#offset += this.#treeWalker.currentNode.textContent?.length ?? 0;
        this.#eof = !this.#treeWalker.nextNode();
        return !this.#eof;
    }
    #goToPosition(offset) {
        if (offset < this.#offset || this.#eof) {
            return null;
        }
        // `>` here implies that, except for the first range, start offsets are left-leaning, i.e., when the offset falls
        // between two text nodes, the preceding one is returned. This doesn't matter for Range semantics, but isn't
        // intuitive wrt. the usual understanding of intervals. Making start offsets right-leaning but end offsets
        // left-leaning would incur an unwarranted amount of complexity.
        while (offset > this.#offset + (this.#treeWalker.currentNode.textContent?.length ?? 0)) {
            if (!this.#next()) {
                return null;
            }
        }
        return this.#treeWalker.currentNode;
    }
    nextRange(start, length) {
        if (length <= 0 || this.#eof) {
            return null;
        }
        const startNode = this.#goToPosition(start);
        if (!startNode) {
            return null;
        }
        const offsetInStartNode = start - this.#offset;
        const endNode = this.#goToPosition(start + length);
        if (!endNode) {
            return null;
        }
        const offsetInEndNode = start + length - this.#offset;
        const range = new Range();
        range.setStart(startNode, offsetInStartNode);
        range.setEnd(endNode, offsetInEndNode);
        return range;
    }
}
const HIGHLIGHT_REGISTRY = 'search-highlight';
let highlightManagerInstance;
class HighlightManager {
    #highlights = new Highlight();
    constructor() {
        document.adoptedStyleSheets.push(_highlighting_css_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
        CSS.highlights.set(HIGHLIGHT_REGISTRY, this.#highlights);
    }
    static instance(opts = { forceNew: null }) {
        const { forceNew } = opts;
        if (!highlightManagerInstance || forceNew) {
            highlightManagerInstance = new HighlightManager();
        }
        return highlightManagerInstance;
    }
    addHighlights(ranges) {
        ranges.forEach(this.addHighlight.bind(this));
    }
    removeHighlights(ranges) {
        ranges.forEach(this.removeHighlight.bind(this));
    }
    addHighlight(range) {
        this.#highlights.add(range);
    }
    removeHighlight(range) {
        this.#highlights.delete(range);
    }
    highlightOrderedTextRanges(root, sourceRanges) {
        const rangeWalker = new RangeWalker(root);
        const ranges = sourceRanges.map(range => rangeWalker.nextRange(range.offset, range.length))
            .filter((r) => r !== null && !r.collapsed);
        this.addHighlights(ranges);
        return ranges;
    }
}
//# sourceMappingURL=HighlightManager.js.map

/***/ }),

/***/ "./ui/components/highlighting/HighlightManager.test.js":
/*!*************************************************************!*\
  !*** ./ui/components/highlighting/HighlightManager.test.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */ var _highlighting_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./highlighting.js */ "./ui/components/highlighting/highlighting.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


describe('HighlightManager', () => {
    let container;
    before(() => {
        container = document.createElement('div');
    });
    after(() => {
        container.remove();
    });
    function fromHtml(html) {
        const div = container.createChild('div');
        div.innerHTML = html;
        return div;
    }
    function walk(html) {
        return new _highlighting_js__WEBPACK_IMPORTED_MODULE_1__.HighlightManager.RangeWalker(fromHtml(html));
    }
    function toText(range) {
        assert.exists(range);
        const text = range.cloneContents()?.textContent;
        assert.exists(text);
        return text;
    }
    it('correctly translates ranges', () => {
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
        const walker = walk('abc<p>def</p>ghi');
        assert.deepStrictEqual(toText(walker.nextRange(0, 3)), 'abc');
        assert.deepStrictEqual(toText(walker.nextRange(3, 3)), 'def');
        assert.deepStrictEqual(toText(walker.nextRange(6, 3)), 'ghi');
    });
    it('correctly highlights ranges', () => {
        const highlightManager = new _highlighting_js__WEBPACK_IMPORTED_MODULE_1__.HighlightManager.HighlightManager();
        // @ts-expect-error
        assert.strictEqual(CSS.highlights.get(_highlighting_js__WEBPACK_IMPORTED_MODULE_1__.HighlightManager.HIGHLIGHT_REGISTRY).size, 0);
        const ranges = highlightManager.highlightOrderedTextRanges(fromHtml('abc<p>def</p>ghi'), [
            new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextRange.SourceRange(0, 3),
            new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextRange.SourceRange(3, 3),
            new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextRange.SourceRange(6, 3),
        ]);
        const highlight = CSS.highlights.get(_highlighting_js__WEBPACK_IMPORTED_MODULE_1__.HighlightManager.HIGHLIGHT_REGISTRY);
        assert.strictEqual(highlight?.size, 3);
        assert.deepStrictEqual(Array.from(highlight.keys()), ranges);
    });
});
//# sourceMappingURL=HighlightManager.test.js.map

/***/ }),

/***/ "./ui/components/highlighting/highlighting.css.js":
/*!********************************************************!*\
  !*** ./ui/components/highlighting/highlighting.css.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2023 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

/* stylelint-disable-next-line selector-pseudo-element-no-unknown,selector-type-no-unknown */
:root::highlight(search-highlight) {
  background-color: var(--sys-color-yellow-outline);
}

/*# sourceURL=highlighting.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./ui/components/highlighting/highlighting.js":
/*!****************************************************!*\
  !*** ./ui/components/highlighting/highlighting.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HighlightManager: () => (/* reexport module object */ _HighlightManager_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _HighlightManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HighlightManager.js */ "./ui/components/highlighting/HighlightManager.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


//# sourceMappingURL=highlighting.js.map

/***/ })

}]);