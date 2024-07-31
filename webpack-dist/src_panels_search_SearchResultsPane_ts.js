"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_search_SearchResultsPane_ts"],{

/***/ "./src/panels/search/SearchResultsPane.ts":
/*!************************************************!*\
  !*** ./src/panels/search/SearchResultsPane.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchResultsPane: () => (/* binding */ SearchResultsPane),
/* harmony export */   SearchResultsTreeElement: () => (/* binding */ SearchResultsTreeElement),
/* harmony export */   lineSegmentForMatch: () => (/* binding */ lineSegmentForMatch),
/* harmony export */   matchesExpandedByDefault: () => (/* binding */ matchesExpandedByDefault),
/* harmony export */   matchesShownAtOnce: () => (/* binding */ matchesShownAtOnce)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./src/models/text_utils/text_utils.ts");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./src/ui/legacy/components/utils/utils.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './searchResultsPane.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







const UIStrings = {
    /**
     *@description Accessibility label for number of matches in each file in search results pane
     *@example {2} PH1
     */
    matchesCountS: 'Matches Count {PH1}',
    /**
     *@description Search result label for results in the Search tool
     *@example {2} PH1
     */
    lineS: 'Line {PH1}',
    /**
     *@description Text in Search Results Pane of the Search tab
     *@example {2} PH1
     */
    showDMore: 'Show {PH1} more',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/search/SearchResultsPane.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class SearchResultsPane extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Widget.VBox {
    constructor(searchConfig) {
        super(true);
        Object.defineProperty(this, "searchConfig", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "searchResults", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "treeElements", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "treeOutline", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "matchesExpandedCount", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.searchConfig = searchConfig;
        this.searchResults = [];
        this.treeElements = [];
        this.treeOutline = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.TreeOutline.TreeOutlineInShadow();
        this.treeOutline.hideOverflow();
        this.contentElement.appendChild(this.treeOutline.element);
        this.matchesExpandedCount = 0;
    }
    addSearchResult(searchResult) {
        this.searchResults.push(searchResult);
        this.addTreeElement(searchResult);
    }
    showAllMatches() {
        this.treeElements.forEach(treeElement => {
            treeElement.expand();
            treeElement.showAllMatches();
        });
    }
    collapseAllResults() {
        this.treeElements.forEach(treeElement => {
            treeElement.collapse();
        });
    }
    addTreeElement(searchResult) {
        const treeElement = new SearchResultsTreeElement(this.searchConfig, searchResult);
        this.treeOutline.appendChild(treeElement);
        if (!this.treeOutline.selectedTreeElement) {
            treeElement.select(/* omitFocus */ true, /* selectedByUser */ true);
        }
        // Expand until at least a certain number of matches is expanded.
        if (this.matchesExpandedCount < matchesExpandedByDefault) {
            treeElement.expand();
        }
        this.matchesExpandedCount += searchResult.matchesCount();
        this.treeElements.push(treeElement);
    }
    wasShown() {
        super.wasShown();
        this.treeOutline.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './searchResultsPane.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
    }
}
const matchesExpandedByDefault = 200;
const matchesShownAtOnce = 20;
class SearchResultsTreeElement extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.TreeOutline.TreeElement {
    constructor(searchConfig, searchResult) {
        super('', true);
        Object.defineProperty(this, "searchConfig", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "searchResult", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "initialized", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "toggleOnClick", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.searchConfig = searchConfig;
        this.searchResult = searchResult;
        this.initialized = false;
        this.toggleOnClick = true;
    }
    onexpand() {
        if (this.initialized) {
            return;
        }
        this.updateMatchesUI();
        this.initialized = true;
    }
    showAllMatches() {
        this.removeChildren();
        this.appendSearchMatches(0, this.searchResult.matchesCount());
    }
    updateMatchesUI() {
        this.removeChildren();
        const toIndex = Math.min(this.searchResult.matchesCount(), matchesShownAtOnce);
        if (toIndex < this.searchResult.matchesCount()) {
            this.appendSearchMatches(0, toIndex - 1);
            this.appendShowMoreMatchesElement(toIndex - 1);
        }
        else {
            this.appendSearchMatches(0, toIndex);
        }
    }
    onattach() {
        this.updateSearchMatches();
    }
    updateSearchMatches() {
        this.listItemElement.classList.add('search-result');
        const fileNameSpan = span(this.searchResult.label(), 'search-result-file-name');
        fileNameSpan.appendChild(span('\u2014', 'search-result-dash'));
        fileNameSpan.appendChild(span(this.searchResult.description(), 'search-result-qualifier'));
        this.tooltip = this.searchResult.description();
        this.listItemElement.appendChild(fileNameSpan);
        const matchesCountSpan = document.createElement('span');
        matchesCountSpan.className = 'search-result-matches-count';
        matchesCountSpan.textContent = `${this.searchResult.matchesCount()}`;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.setLabel(matchesCountSpan, i18nString(UIStrings.matchesCountS, { PH1: this.searchResult.matchesCount() }));
        this.listItemElement.appendChild(matchesCountSpan);
        if (this.expanded) {
            this.updateMatchesUI();
        }
        function span(text, className) {
            const span = document.createElement('span');
            span.className = className;
            span.textContent = text;
            return span;
        }
    }
    appendSearchMatches(fromIndex, toIndex) {
        const searchResult = this.searchResult;
        const queries = this.searchConfig.queries();
        const regexes = [];
        for (let i = 0; i < queries.length; ++i) {
            regexes.push(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.StringUtilities.createSearchRegex(queries[i], !this.searchConfig.ignoreCase(), this.searchConfig.isRegex()));
        }
        for (let i = fromIndex; i < toIndex; ++i) {
            let lineContent = searchResult.matchLineContent(i);
            let matchRanges = [];
            // Searching in scripts and network response bodies produces one result entry per match. We can skip re-doing the
            // search since we have the exact match range.
            // For matches found in headers or the request URL we re-do the search to find all match ranges.
            const column = searchResult.matchColumn(i);
            const matchLength = searchResult.matchLength(i);
            if (column !== undefined && matchLength !== undefined) {
                const { matchRange, lineSegment } = lineSegmentForMatch(lineContent, new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_3__.TextRange.SourceRange(column, matchLength));
                lineContent = lineSegment;
                matchRanges = [matchRange];
            }
            else {
                lineContent = lineContent.trim();
                for (let j = 0; j < regexes.length; ++j) {
                    matchRanges = matchRanges.concat(this.regexMatchRanges(lineContent, regexes[j]));
                }
                ({ lineSegment: lineContent, matchRanges } = lineSegmentForMultipleMatches(lineContent, matchRanges));
            }
            const anchor = _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__.Linkifier.Linkifier.linkifyRevealable(searchResult.matchRevealable(i), '', undefined, undefined, undefined, 'search-match');
            anchor.classList.add('search-match-link');
            anchor.tabIndex = 0;
            const labelSpan = document.createElement('span');
            labelSpan.classList.add('search-match-line-number');
            const resultLabel = searchResult.matchLabel(i);
            labelSpan.textContent = resultLabel;
            if (typeof resultLabel === 'number' && !isNaN(resultLabel)) {
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.setLabel(labelSpan, i18nString(UIStrings.lineS, { PH1: resultLabel }));
            }
            else {
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.setLabel(labelSpan, resultLabel);
            }
            anchor.appendChild(labelSpan);
            const contentSpan = this.createContentSpan(lineContent, matchRanges);
            anchor.appendChild(contentSpan);
            const searchMatchElement = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.TreeOutline.TreeElement();
            this.appendChild(searchMatchElement);
            searchMatchElement.listItemElement.className = 'search-match';
            searchMatchElement.listItemElement.appendChild(anchor);
            searchMatchElement.listItemElement.addEventListener('keydown', event => {
                if (event.key === 'Enter') {
                    event.consume(true);
                    void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(searchResult.matchRevealable(i));
                }
            });
            searchMatchElement.tooltip = lineContent;
        }
    }
    appendShowMoreMatchesElement(startMatchIndex) {
        const matchesLeftCount = this.searchResult.matchesCount() - startMatchIndex;
        const showMoreMatchesText = i18nString(UIStrings.showDMore, { PH1: matchesLeftCount });
        const showMoreMatchesTreeElement = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.TreeOutline.TreeElement(showMoreMatchesText);
        this.appendChild(showMoreMatchesTreeElement);
        showMoreMatchesTreeElement.listItemElement.classList.add('show-more-matches');
        showMoreMatchesTreeElement.onselect =
            this.showMoreMatchesElementSelected.bind(this, showMoreMatchesTreeElement, startMatchIndex);
    }
    createContentSpan(lineContent, matchRanges) {
        const contentSpan = document.createElement('span');
        contentSpan.className = 'search-match-content';
        contentSpan.textContent = lineContent;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.setLabel(contentSpan, `${lineContent} line`);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.highlightRangesWithStyleClass(contentSpan, matchRanges, 'highlighted-search-result');
        return contentSpan;
    }
    regexMatchRanges(lineContent, regex) {
        regex.lastIndex = 0;
        let match;
        const matchRanges = [];
        while ((regex.lastIndex < lineContent.length) && (match = regex.exec(lineContent))) {
            matchRanges.push(new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_3__.TextRange.SourceRange(match.index, match[0].length));
        }
        return matchRanges;
    }
    showMoreMatchesElementSelected(showMoreMatchesTreeElement, startMatchIndex) {
        this.removeChild(showMoreMatchesTreeElement);
        this.appendSearchMatches(startMatchIndex, this.searchResult.matchesCount());
        return false;
    }
}
const DEFAULT_OPTS = {
    prefixLength: 25,
    maxLength: 1000,
};
/**
 * Takes a whole line and calculates the substring we want to actually display in the UI.
 * Also returns a translated {matchRange} (the parameter is relative to {lineContent} but the
 * caller needs it relative to {lineSegment}).
 *
 * {lineContent} is modified in the following way:
 *
 *   * Whitespace is trimmed from the beginning (unless the match includes it).
 *   * We only leave {options.prefixLength} characters before the match (and add an ellipsis in
 *     case we removed anything)
 *   * Truncate the remainder to {options.maxLength} characters.
 */
function lineSegmentForMatch(lineContent, range, optionsArg = DEFAULT_OPTS) {
    const options = { ...DEFAULT_OPTS, ...optionsArg };
    // Remove the whitespace at the beginning, but stop where the match starts.
    const attemptedTrimmedLine = lineContent.trimStart();
    const potentiallyRemovedWhitespaceLength = lineContent.length - attemptedTrimmedLine.length;
    const actuallyRemovedWhitespaceLength = Math.min(range.offset, potentiallyRemovedWhitespaceLength);
    // Apply {options.prefixLength} and {options.maxLength}.
    const lineSegmentBegin = Math.max(actuallyRemovedWhitespaceLength, range.offset - options.prefixLength);
    const lineSegmentEnd = Math.min(lineContent.length, lineSegmentBegin + options.maxLength);
    const lineSegmentPrefix = lineSegmentBegin > actuallyRemovedWhitespaceLength ? '…' : '';
    // Build the resulting line segment and match range.
    const lineSegment = lineSegmentPrefix + lineContent.substring(lineSegmentBegin, lineSegmentEnd);
    const rangeOffset = range.offset - lineSegmentBegin + lineSegmentPrefix.length;
    const rangeLength = Math.min(range.length, lineSegment.length - rangeOffset);
    const matchRange = new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_3__.TextRange.SourceRange(rangeOffset, rangeLength);
    return { lineSegment, matchRange };
}
/**
 * Takes a line and multiple match ranges and trims/cuts the line accordingly.
 * The match ranges are then adjusted to reflect the transformation.
 *
 * Ideally prefer `lineSegmentForMatch`, it can center the line on the match
 * whereas this method risks cutting matches out of the string.
 */
function lineSegmentForMultipleMatches(lineContent, ranges) {
    let trimBy = 0;
    let matchRanges = ranges;
    if (matchRanges.length > 0 && matchRanges[0].offset > 20) {
        trimBy = 15;
    }
    let lineSegment = lineContent.substring(trimBy, 1000 + trimBy);
    if (trimBy) {
        matchRanges =
            matchRanges.map(range => new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_3__.TextRange.SourceRange(range.offset - trimBy + 1, range.length));
        lineSegment = '…' + lineSegment;
    }
    return { lineSegment, matchRanges };
}


/***/ })

}]);