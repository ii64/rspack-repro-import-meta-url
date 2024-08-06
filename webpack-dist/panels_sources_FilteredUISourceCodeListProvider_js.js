"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_sources_FilteredUISourceCodeListProvider_js"],{

/***/ "./panels/sources/FilePathScoreFunction.js":
/*!*************************************************!*\
  !*** ./panels/sources/FilePathScoreFunction.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilePathScoreFunction: () => (/* binding */ FilePathScoreFunction)
/* harmony export */ });
/*
 * Copyright (C) 2013 Google Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
class FilePathScoreFunction {
    query;
    queryUpperCase;
    score;
    sequence;
    dataUpperCase;
    fileNameIndex;
    constructor(query) {
        this.query = query;
        this.queryUpperCase = query.toUpperCase();
        this.score = new Int32Array(20 * 100);
        this.sequence = new Int32Array(20 * 100);
        this.dataUpperCase = '';
        this.fileNameIndex = 0;
    }
    calculateScore(data, matchIndexes) {
        if (!data || !this.query) {
            return 0;
        }
        const n = this.query.length;
        const m = data.length;
        if (!this.score || this.score.length < n * m) {
            this.score = new Int32Array(n * m * 2);
            this.sequence = new Int32Array(n * m * 2);
        }
        const score = this.score;
        const sequence = this.sequence;
        this.dataUpperCase = data.toUpperCase();
        this.fileNameIndex = data.lastIndexOf('/');
        for (let i = 0; i < n; ++i) {
            for (let j = 0; j < m; ++j) {
                const skipCharScore = j === 0 ? 0 : score[i * m + j - 1];
                const prevCharScore = i === 0 || j === 0 ? 0 : score[(i - 1) * m + j - 1];
                const consecutiveMatch = i === 0 || j === 0 ? 0 : sequence[(i - 1) * m + j - 1];
                const pickCharScore = this.match(this.query, data, i, j, consecutiveMatch);
                if (pickCharScore && prevCharScore + pickCharScore >= skipCharScore) {
                    sequence[i * m + j] = consecutiveMatch + 1;
                    score[i * m + j] = (prevCharScore + pickCharScore);
                }
                else {
                    sequence[i * m + j] = 0;
                    score[i * m + j] = skipCharScore;
                }
            }
        }
        if (matchIndexes) {
            this.restoreMatchIndexes(sequence, n, m, matchIndexes);
        }
        const maxDataLength = 256;
        return score[n * m - 1] * maxDataLength + (maxDataLength - data.length);
    }
    testWordStart(data, j) {
        if (j === 0) {
            return true;
        }
        const prevChar = data.charAt(j - 1);
        return prevChar === '_' || prevChar === '-' || prevChar === '/' || prevChar === '.' || prevChar === ' ' ||
            (data[j - 1] !== this.dataUpperCase[j - 1] && data[j] === this.dataUpperCase[j]);
    }
    restoreMatchIndexes(sequence, n, m, out) {
        let i = n - 1, j = m - 1;
        while (i >= 0 && j >= 0) {
            switch (sequence[i * m + j]) {
                case 0:
                    --j;
                    break;
                default:
                    out.push(j);
                    --i;
                    --j;
                    break;
            }
        }
        out.reverse();
    }
    singleCharScore(query, data, i, j) {
        const isWordStart = this.testWordStart(data, j);
        const isFileName = j > this.fileNameIndex;
        const isPathTokenStart = j === 0 || data[j - 1] === '/';
        const isCapsMatch = query[i] === data[j] && query[i] === this.queryUpperCase[i];
        let score = 10;
        if (isPathTokenStart) {
            score += 4;
        }
        if (isWordStart) {
            score += 2;
        }
        if (isCapsMatch) {
            score += 6;
        }
        if (isFileName) {
            score += 4;
        }
        // promote the case of making the whole match in the filename
        if (j === this.fileNameIndex + 1 && i === 0) {
            score += 5;
        }
        if (isFileName && isWordStart) {
            score += 3;
        }
        return score;
    }
    sequenceCharScore(query, data, i, j, sequenceLength) {
        const isFileName = j > this.fileNameIndex;
        const isPathTokenStart = j === 0 || data[j - 1] === '/';
        let score = 10;
        if (isFileName) {
            score += 4;
        }
        if (isPathTokenStart) {
            score += 5;
        }
        score += sequenceLength * 4;
        return score;
    }
    match(query, data, i, j, consecutiveMatch) {
        if (this.queryUpperCase[i] !== this.dataUpperCase[j]) {
            return 0;
        }
        if (!consecutiveMatch) {
            return this.singleCharScore(query, data, i, j);
        }
        return this.sequenceCharScore(query, data, i, j - consecutiveMatch, consecutiveMatch);
    }
}
//# sourceMappingURL=FilePathScoreFunction.js.map

/***/ }),

/***/ "./panels/sources/FilteredUISourceCodeListProvider.js":
/*!************************************************************!*\
  !*** ./panels/sources/FilteredUISourceCodeListProvider.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilteredUISourceCodeListProvider: () => (/* binding */ FilteredUISourceCodeListProvider)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */ var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/persistence/persistence.js */ "./models/persistence/persistence.js");
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */ var _ui_legacy_components_quick_open_quick_open_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/components/quick_open/quick_open.js */ "./ui/legacy/components/quick_open/quick_open.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _FilePathScoreFunction_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FilePathScoreFunction.js */ "./panels/sources/FilePathScoreFunction.js");
// Copyright 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








const UIStrings = {
    /**
     *@description Text in Filtered UISource Code List Provider of the Sources panel
     */
    noFilesFound: 'No files found',
    /**
     *@description Name of an item that is on the ignore list
     *@example {compile.html} PH1
     */
    sIgnoreListed: '{PH1} (ignore listed)',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/sources/FilteredUISourceCodeListProvider.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class FilteredUISourceCodeListProvider extends _ui_legacy_components_quick_open_quick_open_js__WEBPACK_IMPORTED_MODULE_5__.FilteredListWidget.Provider {
    queryLineNumberAndColumnNumber;
    defaultScores;
    scorer;
    uiSourceCodes;
    uiSourceCodeIds;
    query;
    constructor(jslogContext) {
        super(jslogContext);
        this.queryLineNumberAndColumnNumber = '';
        this.defaultScores = null;
        this.scorer = new _FilePathScoreFunction_js__WEBPACK_IMPORTED_MODULE_7__.FilePathScoreFunction('');
        this.uiSourceCodes = [];
        this.uiSourceCodeIds = new Set();
    }
    projectRemoved(event) {
        const project = event.data;
        this.populate(project);
        this.refresh();
    }
    populate(skipProject) {
        this.uiSourceCodes = [];
        this.uiSourceCodeIds.clear();
        for (const project of _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.instance().projects()) {
            if (project !== skipProject && this.filterProject(project)) {
                for (const uiSourceCode of project.uiSourceCodes()) {
                    if (this.filterUISourceCode(uiSourceCode)) {
                        this.uiSourceCodes.push(uiSourceCode);
                        this.uiSourceCodeIds.add(uiSourceCode.canononicalScriptId());
                    }
                }
            }
        }
    }
    filterUISourceCode(uiSourceCode) {
        if (this.uiSourceCodeIds.has(uiSourceCode.canononicalScriptId())) {
            return false;
        }
        if (_core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.experiments.isEnabled("just-my-code" /* Root.Runtime.ExperimentName.JUST_MY_CODE */) &&
            _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.IgnoreListManager.IgnoreListManager.instance().isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode)) {
            return false;
        }
        if (uiSourceCode.isFetchXHR()) {
            return false;
        }
        const binding = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_2__.Persistence.PersistenceImpl.instance().binding(uiSourceCode);
        return !binding || binding.fileSystem === uiSourceCode;
    }
    uiSourceCodeSelected(_uiSourceCode, _lineNumber, _columnNumber) {
        // Overridden by subclasses
    }
    filterProject(_project) {
        return true;
        // Overridden by subclasses
    }
    itemCount() {
        return this.uiSourceCodes.length;
    }
    itemContentTypeAt(itemIndex) {
        return this.uiSourceCodes[itemIndex].contentType();
    }
    itemKeyAt(itemIndex) {
        return this.uiSourceCodes[itemIndex].url();
    }
    setDefaultScores(defaultScores) {
        this.defaultScores = defaultScores;
    }
    itemScoreAt(itemIndex, query) {
        const uiSourceCode = this.uiSourceCodes[itemIndex];
        const score = this.defaultScores ? (this.defaultScores.get(uiSourceCode) || 0) : 0;
        if (!query || query.length < 2) {
            return score;
        }
        if (this.query !== query) {
            this.query = query;
            this.scorer = new _FilePathScoreFunction_js__WEBPACK_IMPORTED_MODULE_7__.FilePathScoreFunction(query);
        }
        let multiplier = 10;
        if (uiSourceCode.project().type() === _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.projectTypes.FileSystem &&
            !_models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_2__.Persistence.PersistenceImpl.instance().binding(uiSourceCode)) {
            multiplier = 5;
        }
        let contentTypeBonus = 0;
        if (uiSourceCode.contentType().isFromSourceMap() && !uiSourceCode.isKnownThirdParty()) {
            contentTypeBonus = 100;
        }
        if (uiSourceCode.contentType().isScript()) {
            // Bonus points for being a script if it is not ignore-listed. Note
            // that ignore listing logic does not apply to non-scripts.
            if (!_models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.IgnoreListManager.IgnoreListManager.instance().isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode)) {
                contentTypeBonus += 50;
            }
        }
        const fullDisplayName = uiSourceCode.fullDisplayName();
        return score + multiplier * (contentTypeBonus + this.scorer.calculateScore(fullDisplayName, null));
    }
    renderItem(itemIndex, query, titleElement, subtitleElement) {
        query = this.rewriteQuery(query);
        const uiSourceCode = this.uiSourceCodes[itemIndex];
        const fullDisplayName = uiSourceCode.fullDisplayName();
        const indexes = [];
        new _FilePathScoreFunction_js__WEBPACK_IMPORTED_MODULE_7__.FilePathScoreFunction(query).calculateScore(fullDisplayName, indexes);
        const fileNameIndex = fullDisplayName.lastIndexOf('/');
        const isIgnoreListed = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.IgnoreListManager.IgnoreListManager.instance().isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode);
        let tooltipText = fullDisplayName;
        if (isIgnoreListed) {
            titleElement.parentElement?.classList.add('is-ignore-listed');
            tooltipText = i18nString(UIStrings.sIgnoreListed, { PH1: tooltipText });
        }
        titleElement.textContent = uiSourceCode.displayName() + (this.queryLineNumberAndColumnNumber || '');
        this.renderSubtitleElement(subtitleElement, fullDisplayName.substring(0, fileNameIndex + 1));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Tooltip.Tooltip.install(subtitleElement, tooltipText);
        const ranges = [];
        for (let i = 0; i < indexes.length; ++i) {
            ranges.push({ offset: indexes[i], length: 1 });
        }
        if (indexes[0] > fileNameIndex) {
            for (let i = 0; i < ranges.length; ++i) {
                ranges[i].offset -= fileNameIndex + 1;
            }
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.highlightRangesWithStyleClass(titleElement, ranges, 'highlight');
        }
        else {
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.highlightRangesWithStyleClass(subtitleElement, ranges, 'highlight');
        }
    }
    renderSubtitleElement(element, text) {
        element.removeChildren();
        let splitPosition = text.lastIndexOf('/');
        const maxTextLength = 43;
        if (text.length > maxTextLength) {
            splitPosition = text.length - maxTextLength;
        }
        const first = element.createChild('div', 'first-part');
        first.textContent = text.substring(0, splitPosition);
        const second = element.createChild('div', 'second-part');
        second.textContent = text.substring(splitPosition);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Tooltip.Tooltip.install(element, text);
    }
    selectItem(itemIndex, promptValue) {
        const parsedExpression = promptValue.trim().match(/^([^:]*)(:\d+)?(:\d+)?$/);
        if (!parsedExpression) {
            return;
        }
        let lineNumber;
        let columnNumber;
        if (parsedExpression[2]) {
            lineNumber = parseInt(parsedExpression[2].substr(1), 10) - 1;
        }
        if (parsedExpression[3]) {
            columnNumber = parseInt(parsedExpression[3].substr(1), 10) - 1;
        }
        const uiSourceCode = itemIndex !== null ? this.uiSourceCodes[itemIndex] : null;
        this.uiSourceCodeSelected(uiSourceCode, lineNumber, columnNumber);
    }
    rewriteQuery(query) {
        query = query ? query.trim() : '';
        if (!query || query === ':') {
            return '';
        }
        const lineNumberMatch = query.match(/^([^:]+)((?::[^:]*){0,2})$/);
        this.queryLineNumberAndColumnNumber = lineNumberMatch ? lineNumberMatch[2] : '';
        return lineNumberMatch ? lineNumberMatch[1] : query;
    }
    uiSourceCodeAdded(event) {
        const uiSourceCode = event.data;
        if (!this.filterUISourceCode(uiSourceCode) || !this.filterProject(uiSourceCode.project())) {
            return;
        }
        this.uiSourceCodes.push(uiSourceCode);
        this.uiSourceCodeIds.add(uiSourceCode.canononicalScriptId());
        this.refresh();
    }
    notFoundText() {
        return i18nString(UIStrings.noFilesFound);
    }
    attach() {
        _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.instance().addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.Events.UISourceCodeAdded, this.uiSourceCodeAdded, this);
        _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.instance().addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.Events.ProjectRemoved, this.projectRemoved, this);
        this.populate();
    }
    detach() {
        _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.instance().removeEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.Events.UISourceCodeAdded, this.uiSourceCodeAdded, this);
        _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.instance().removeEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.Events.ProjectRemoved, this.projectRemoved, this);
        this.queryLineNumberAndColumnNumber = '';
        this.defaultScores = null;
    }
}
//# sourceMappingURL=FilteredUISourceCodeListProvider.js.map

/***/ })

}]);