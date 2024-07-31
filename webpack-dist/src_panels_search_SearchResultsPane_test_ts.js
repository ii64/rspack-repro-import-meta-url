"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_search_SearchResultsPane_test_ts"],{

/***/ "./src/panels/search/SearchResultsPane.test.ts":
/*!*****************************************************!*\
  !*** ./src/panels/search/SearchResultsPane.test.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./src/models/text_utils/text_utils.ts");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./src/models/workspace/workspace.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _search_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search.js */ "./src/panels/search/search.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _FakeSearchResult_label, _FakeSearchResult_description, _FakeSearchResult_matchDescriptors;




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
    constructor(label, description, matchDescriptors) {
        _FakeSearchResult_label.set(this, void 0);
        _FakeSearchResult_description.set(this, void 0);
        _FakeSearchResult_matchDescriptors.set(this, void 0);
        __classPrivateFieldSet(this, _FakeSearchResult_label, label, "f");
        __classPrivateFieldSet(this, _FakeSearchResult_description, description, "f");
        __classPrivateFieldSet(this, _FakeSearchResult_matchDescriptors, matchDescriptors, "f");
    }
    label() {
        return __classPrivateFieldGet(this, _FakeSearchResult_label, "f");
    }
    description() {
        return __classPrivateFieldGet(this, _FakeSearchResult_description, "f");
    }
    matchesCount() {
        return __classPrivateFieldGet(this, _FakeSearchResult_matchDescriptors, "f").length;
    }
    matchLabel(index) {
        return __classPrivateFieldGet(this, _FakeSearchResult_matchDescriptors, "f")[index].lineNumber.toString();
    }
    matchLineContent(index) {
        return __classPrivateFieldGet(this, _FakeSearchResult_matchDescriptors, "f")[index].lineContent;
    }
    matchRevealable() {
        return {};
    }
    matchColumn(index) {
        return __classPrivateFieldGet(this, _FakeSearchResult_matchDescriptors, "f")[index].matchRange?.offset;
    }
    matchLength(index) {
        return __classPrivateFieldGet(this, _FakeSearchResult_matchDescriptors, "f")[index].matchRange?.length;
    }
}
_FakeSearchResult_label = new WeakMap(), _FakeSearchResult_description = new WeakMap(), _FakeSearchResult_matchDescriptors = new WeakMap();
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


/***/ }),

/***/ "./src/panels/search/SearchScope.ts":
/*!******************************************!*\
  !*** ./src/panels/search/SearchScope.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



/***/ }),

/***/ "./src/panels/search/search.ts":
/*!*************************************!*\
  !*** ./src/panels/search/search.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchResultsPane: () => (/* reexport module object */ _SearchResultsPane_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   SearchScope: () => (/* reexport module object */ _SearchScope_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   SearchView: () => (/* reexport module object */ _SearchView_js__WEBPACK_IMPORTED_MODULE_2__)
/* harmony export */ });
/* harmony import */ var _SearchResultsPane_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchResultsPane.js */ "./src/panels/search/SearchResultsPane.ts");
/* harmony import */ var _SearchScope_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchScope.js */ "./src/panels/search/SearchScope.ts");
/* harmony import */ var _SearchView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchView.js */ "./src/panels/search/SearchView.ts");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






/***/ })

}]);