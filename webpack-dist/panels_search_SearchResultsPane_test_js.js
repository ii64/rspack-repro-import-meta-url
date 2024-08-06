"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_search_SearchResultsPane_test_js"],{

/***/ "./panels/search/SearchResultsPane.test.js":
/*!*************************************************!*\
  !*** ./panels/search/SearchResultsPane.test.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _search_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search.js */ "./panels/search/search.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




const { lineSegmentForMatch } = _search_js__WEBPACK_IMPORTED_MODULE_3__.SearchResultsPane;
function r(matchDescriptor) {
    const start = matchDescriptor[0].indexOf('[');
    const end = matchDescriptor[0].indexOf(')');
    return new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextRange.SourceRange(start, end - start);
}
describe('lineSegmentForMatch', () => {
    it('is a no-op if for short lines with the match close to the start', () => {
        const lineContent = 'Just a short line';
        const matchRange = r `       [    )`;
        const { lineSegment, matchRange: actualMRange } = lineSegmentForMatch(lineContent, matchRange);
        assert.strictEqual(lineSegment, lineContent);
        assert.deepEqual(actualMRange, matchRange);
    });
    it('only shows {prefixLength} characters before the match with an ellipsis', () => {
        const lineContent = 'Just a somewhat short line';
        const matchRange = r `                [    )`;
        const { lineSegment, matchRange: actualMRange } = lineSegmentForMatch(lineContent, matchRange, { prefixLength: 5 });
        assert.strictEqual(lineSegment, '…what short line');
        assert.deepEqual(actualMRange, r `      [    )`);
    });
    it('only shows {maxLength} characters (excluding prefix ellipsis)', () => {
        const lineContent = 'A somewhat longer line to demonstrate maxLength';
        const matchRange = r `           [     )`;
        const { lineSegment, matchRange: actualMRange } = lineSegmentForMatch(lineContent, matchRange, { maxLength: 22 });
        assert.strictEqual(lineSegment, 'A somewhat longer line');
        assert.deepEqual(actualMRange, r `           [     )`);
    });
    it('trims whitespace at the beginning of the line', () => {
        const lineContent = '     A line with whitespace at the beginning';
        const matchRange = r `            [   )`;
        const { lineSegment, matchRange: actualMRange } = lineSegmentForMatch(lineContent, matchRange);
        assert.strictEqual(lineSegment, 'A line with whitespace at the beginning');
        assert.deepEqual(actualMRange, r `       [   )`);
    });
    it('works with whitespace trimming and {prefixLength}', () => {
        const lineContent = '     A line with whitespace at the beginning';
        const matchRange = r `                            [     )`;
        const { lineSegment, matchRange: actualMRange } = lineSegmentForMatch(lineContent, matchRange, { prefixLength: 5 });
        assert.strictEqual(lineSegment, '…pace at the beginning');
        assert.deepEqual(actualMRange, r `      [     )`);
    });
    it('only trims whitespace until the match starts', () => {
        const lineContent = '     A line with whitespace at the beginning';
        const matchRange = r `   [       )`;
        const { lineSegment, matchRange: actualMRange } = lineSegmentForMatch(lineContent, matchRange);
        assert.strictEqual(lineSegment, '  A line with whitespace at the beginning');
        assert.deepEqual(actualMRange, r `[       )`);
    });
    it('it shortens the range to the end of the segment if the line was truncated (together with the match)', () => {
        const lineContent = 'A very very very long line with a very long match';
        const matchRange = r `            [                                    )`;
        const { lineSegment, matchRange: actualMRange } = lineSegmentForMatch(lineContent, matchRange, { prefixLength: 5, maxLength: 15 });
        assert.strictEqual(lineSegment, '…very very long ');
        assert.deepEqual(actualMRange, r `      [         )`);
    });
});
class FakeSearchResult {
    #label;
    #description;
    #matchDescriptors;
    constructor(label, description, matchDescriptors) {
        this.#label = label;
        this.#description = description;
        this.#matchDescriptors = matchDescriptors;
    }
    label() {
        return this.#label;
    }
    description() {
        return this.#description;
    }
    matchesCount() {
        return this.#matchDescriptors.length;
    }
    matchLabel(index) {
        return this.#matchDescriptors[index].lineNumber.toString();
    }
    matchLineContent(index) {
        return this.#matchDescriptors[index].lineContent;
    }
    matchRevealable() {
        return {};
    }
    matchColumn(index) {
        return this.#matchDescriptors[index].matchRange?.offset;
    }
    matchLength(index) {
        return this.#matchDescriptors[index].matchRange?.length;
    }
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.describeWithLocale)('SearchResultsPane', () => {
    it('shows one entry per line with matches when matchColumn/matchLength is NOT present', () => {
        const searchConfig = new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.SearchConfig.SearchConfig('the', true, false);
        const resultPane = new _search_js__WEBPACK_IMPORTED_MODULE_3__.SearchResultsPane.SearchResultsPane(searchConfig);
        resultPane.addSearchResult(new FakeSearchResult('file.txt', 'file.txt', [
            { lineNumber: 10, lineContent: 'This is the line with multiple "the" matches' },
            { lineNumber: 15, lineContent: 'This is a line with only one "the" match' },
        ]));
        resultPane.showAllMatches();
        const matchSpans = resultPane['treeOutline'].shadowRoot.querySelectorAll('.search-match-content');
        assert.lengthOf(matchSpans, 2);
        assert.deepEqual([...matchSpans].map(span => span.textContent), ['This is the line with multiple "the" matches', '…with only one "the" match']);
    });
    it('shows one entry per match when matchColumn/matchLength is present', () => {
        const searchConfig = new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.SearchConfig.SearchConfig('the', true, false);
        const resultPane = new _search_js__WEBPACK_IMPORTED_MODULE_3__.SearchResultsPane.SearchResultsPane(searchConfig);
        resultPane.addSearchResult(new FakeSearchResult('file.txt', 'file.txt', [
            {
                lineNumber: 10,
                lineContent: 'This is the line with multiple "the" matches',
                matchRange: r `        [  )`,
            },
            {
                lineNumber: 10,
                lineContent: 'This is the line with multiple "the" matches',
                matchRange: r `                                [  )`,
            },
            {
                lineNumber: 15,
                lineContent: 'This is a line with only one "the" match',
                matchRange: r `                              [  )`,
            },
        ]));
        resultPane.showAllMatches();
        const matchSpans = resultPane['treeOutline'].shadowRoot.querySelectorAll('.search-match-content');
        assert.lengthOf(matchSpans, 3);
        assert.deepEqual([...matchSpans].map(span => span.textContent), [
            'This is the line with multiple "the" matches',
            '… the line with multiple "the" matches',
            '…is a line with only one "the" match',
        ]);
    });
    it('highlights all matches of a line when matchColumn/matchLength is NOT present', () => {
        const searchConfig = new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.SearchConfig.SearchConfig('the', true, false);
        const resultPane = new _search_js__WEBPACK_IMPORTED_MODULE_3__.SearchResultsPane.SearchResultsPane(searchConfig);
        resultPane.addSearchResult(new FakeSearchResult('file.txt', 'file.txt', [
            { lineNumber: 10, lineContent: 'This is the line with multiple "the" matches' },
            { lineNumber: 15, lineContent: 'This is a line with only one "the" match' },
        ]));
        resultPane.showAllMatches();
        const matchSpans = resultPane['treeOutline'].shadowRoot.querySelectorAll('.highlighted-search-result');
        assert.lengthOf(matchSpans, 3);
        assert.deepEqual([...matchSpans].map(span => span.textContent), ['the', 'the', 'the']);
    });
    it('highlights only the specified match when matchColumn/matchLength is present', () => {
        const searchConfig = new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.SearchConfig.SearchConfig('the', true, false);
        const resultPane = new _search_js__WEBPACK_IMPORTED_MODULE_3__.SearchResultsPane.SearchResultsPane(searchConfig);
        resultPane.addSearchResult(new FakeSearchResult('file.txt', 'file.txt', [
            {
                lineNumber: 10,
                lineContent: 'This is the line with multiple "the" matches',
                matchRange: r `        [  )`,
            },
            {
                lineNumber: 10,
                lineContent: 'This is the line with multiple "the" matches',
                matchRange: r `                                [  )`,
            },
            {
                lineNumber: 15,
                lineContent: 'This is a line with only one "the" match',
                matchRange: r `                              [  )`,
            },
        ]));
        resultPane.showAllMatches();
        const matchSpans = resultPane['treeOutline'].shadowRoot.querySelectorAll('.search-match-content');
        assert.lengthOf(matchSpans, 3);
        assert.deepEqual([...matchSpans].map(span => span.innerHTML), [
            'This is <span class="highlighted-search-result">the</span> line with multiple "the" matches',
            '… the line with multiple "<span class="highlighted-search-result">the</span>" matches',
            '…is a line with only one "<span class="highlighted-search-result">the</span>" match',
        ]);
    });
});
//# sourceMappingURL=SearchResultsPane.test.js.map

/***/ }),

/***/ "./panels/search/SearchScope.js":
/*!**************************************!*\
  !*** ./panels/search/SearchScope.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

//# sourceMappingURL=SearchScope.js.map

/***/ }),

/***/ "./panels/search/search.js":
/*!*********************************!*\
  !*** ./panels/search/search.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchResultsPane: () => (/* reexport module object */ _SearchResultsPane_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   SearchScope: () => (/* reexport module object */ _SearchScope_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   SearchView: () => (/* reexport module object */ _SearchView_js__WEBPACK_IMPORTED_MODULE_2__)
/* harmony export */ });
/* harmony import */ var _SearchResultsPane_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchResultsPane.js */ "./panels/search/SearchResultsPane.js");
/* harmony import */ var _SearchScope_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchScope.js */ "./panels/search/SearchScope.js");
/* harmony import */ var _SearchView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchView.js */ "./panels/search/SearchView.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




//# sourceMappingURL=search.js.map

/***/ })

}]);