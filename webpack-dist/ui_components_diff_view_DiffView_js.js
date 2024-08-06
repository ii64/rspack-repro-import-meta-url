"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_diff_view_DiffView_js"],{

/***/ "./ui/components/diff_view/DiffView.js":
/*!*********************************************!*\
  !*** ./ui/components/diff_view/DiffView.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DiffView: () => (/* binding */ DiffView),
/* harmony export */   buildDiffRows: () => (/* binding */ buildDiffRows)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../third_party/diff/diff.js */ "./third_party/diff/diff.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _code_highlighter_code_highlighter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../code_highlighter/code_highlighter.js */ "./ui/components/code_highlighter/code_highlighter.js");
/* harmony import */ var _diffView_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./diffView.css.js */ "./ui/components/diff_view/diffView.css.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






const UIStrings = {
    /**
     *@description Text prepended to a removed line in a diff in the Changes tool, viewable only by screen reader.
     */
    deletions: 'Deletion:',
    /**
     *@description Text prepended to a new line in a diff in the Changes tool, viewable only by screen reader.
     */
    additions: 'Addition:',
    /**
     *@description Screen-reader accessible name for the code editor in the Changes tool showing the user's changes.
     */
    changesDiffViewer: 'Changes diff viewer',
    /**
     *@description Text in Changes View of the Changes tab
     *@example {2} PH1
     */
    SkippingDMatchingLines: '( … Skipping {PH1} matching lines … )',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('ui/components/diff_view/DiffView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
function buildDiffRows(diff) {
    let currentLineNumber = 0;
    let originalLineNumber = 0;
    const paddingLines = 3;
    const originalLines = [];
    const currentLines = [];
    const rows = [];
    for (let i = 0; i < diff.length; ++i) {
        const token = diff[i];
        switch (token[0]) {
            case _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_1__.Diff.Operation.Equal:
                rows.push(...createEqualRows(token[1], i === 0, i === diff.length - 1));
                originalLines.push(...token[1]);
                currentLines.push(...token[1]);
                break;
            case _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_1__.Diff.Operation.Insert:
                for (const line of token[1]) {
                    rows.push(createRow(line, "addition" /* RowType.Addition */));
                }
                currentLines.push(...token[1]);
                break;
            case _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_1__.Diff.Operation.Delete:
                originalLines.push(...token[1]);
                if (diff[i + 1] && diff[i + 1][0] === _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_1__.Diff.Operation.Insert) {
                    i++;
                    rows.push(...createModifyRows(token[1].join('\n'), diff[i][1].join('\n')));
                    currentLines.push(...diff[i][1]);
                }
                else {
                    for (const line of token[1]) {
                        rows.push(createRow(line, "deletion" /* RowType.Deletion */));
                    }
                }
                break;
        }
    }
    return { originalLines, currentLines, rows };
    function createEqualRows(lines, atStart, atEnd) {
        const equalRows = [];
        if (!atStart) {
            for (let i = 0; i < paddingLines && i < lines.length; i++) {
                equalRows.push(createRow(lines[i], "equal" /* RowType.Equal */));
            }
            if (lines.length > paddingLines * 2 + 1 && !atEnd) {
                equalRows.push(createRow(i18nString(UIStrings.SkippingDMatchingLines, { PH1: (lines.length - paddingLines * 2) }), "spacer" /* RowType.Spacer */));
            }
        }
        if (!atEnd) {
            const start = Math.max(lines.length - paddingLines - 1, atStart ? 0 : paddingLines);
            let skip = lines.length - paddingLines - 1;
            if (!atStart) {
                skip -= paddingLines;
            }
            if (skip > 0) {
                originalLineNumber += skip;
                currentLineNumber += skip;
            }
            for (let i = start; i < lines.length; i++) {
                equalRows.push(createRow(lines[i], "equal" /* RowType.Equal */));
            }
        }
        return equalRows;
    }
    function createModifyRows(before, after) {
        const internalDiff = _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_1__.Diff.DiffWrapper.charDiff(before, after, true /* cleanup diff */);
        const deletionRows = [createRow('', "deletion" /* RowType.Deletion */)];
        const insertionRows = [createRow('', "addition" /* RowType.Addition */)];
        for (const token of internalDiff) {
            const text = token[1];
            const type = token[0];
            const className = type === _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_1__.Diff.Operation.Equal ? '' : 'inner-diff';
            const lines = text.split('\n');
            for (let i = 0; i < lines.length; i++) {
                if (i > 0 && type !== _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_1__.Diff.Operation.Insert) {
                    deletionRows.push(createRow('', "deletion" /* RowType.Deletion */));
                }
                if (i > 0 && type !== _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_1__.Diff.Operation.Delete) {
                    insertionRows.push(createRow('', "addition" /* RowType.Addition */));
                }
                if (!lines[i]) {
                    continue;
                }
                if (type !== _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_1__.Diff.Operation.Insert) {
                    deletionRows[deletionRows.length - 1].tokens.push({ text: lines[i], className });
                }
                if (type !== _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_1__.Diff.Operation.Delete) {
                    insertionRows[insertionRows.length - 1].tokens.push({ text: lines[i], className });
                }
            }
        }
        return deletionRows.concat(insertionRows);
    }
    function createRow(text, type) {
        if (type === "addition" /* RowType.Addition */) {
            currentLineNumber++;
        }
        if (type === "deletion" /* RowType.Deletion */) {
            originalLineNumber++;
        }
        if (type === "equal" /* RowType.Equal */) {
            originalLineNumber++;
            currentLineNumber++;
        }
        return { originalLineNumber, currentLineNumber, tokens: text ? [{ text, className: 'inner-diff' }] : [], type };
    }
}
function documentMap(lines) {
    const map = new Map();
    for (let pos = 0, lineNo = 0; lineNo < lines.length; lineNo++) {
        map.set(lineNo + 1, pos);
        pos += lines[lineNo].length + 1;
    }
    return map;
}
class DiffRenderer {
    originalHighlighter;
    originalMap;
    currentHighlighter;
    currentMap;
    constructor(originalHighlighter, originalMap, currentHighlighter, currentMap) {
        this.originalHighlighter = originalHighlighter;
        this.originalMap = originalMap;
        this.currentHighlighter = currentHighlighter;
        this.currentMap = currentMap;
    }
    #render(rows) {
        return _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `
      <div class="diff-listing" aria-label=${i18nString(UIStrings.changesDiffViewer)}>
        ${rows.map(row => this.#renderRow(row))}
      </div>`;
    }
    #renderRow(row) {
        const baseNumber = row.type === "equal" /* RowType.Equal */ || row.type === "deletion" /* RowType.Deletion */ ? String(row.originalLineNumber) : '';
        const curNumber = row.type === "equal" /* RowType.Equal */ || row.type === "addition" /* RowType.Addition */ ? String(row.currentLineNumber) : '';
        let marker = '', markerClass = 'diff-line-marker', screenReaderText = null;
        if (row.type === "addition" /* RowType.Addition */) {
            marker = '+';
            markerClass += ' diff-line-addition';
            screenReaderText = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `<span class="diff-hidden-text">${i18nString(UIStrings.additions)}</span>`;
        }
        else if (row.type === "deletion" /* RowType.Deletion */) {
            marker = '-';
            markerClass += ' diff-line-deletion';
            screenReaderText = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `<span class="diff-hidden-text">${i18nString(UIStrings.deletions)}</span>`;
        }
        return _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `
      <div class="diff-line-number" aria-hidden="true">${baseNumber}</div>
      <div class="diff-line-number" aria-hidden="true">${curNumber}</div>
      <div class=${markerClass} aria-hidden="true">${marker}</div>
      <div class="diff-line-content diff-line-${row.type}" data-line-number=${curNumber} jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__.link('changes.reveal-source').track({ click: true })}>${screenReaderText}${this.#renderRowContent(row)}</div>`;
    }
    #renderRowContent(row) {
        if (row.type === "spacer" /* RowType.Spacer */) {
            return row.tokens.map(tok => _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `${tok.text}`);
        }
        const [doc, startPos] = row.type === "deletion" /* RowType.Deletion */ ?
            [this.originalHighlighter, this.originalMap.get(row.originalLineNumber)] :
            [this.currentHighlighter, this.currentMap.get(row.currentLineNumber)];
        const content = [];
        let pos = startPos;
        for (const token of row.tokens) {
            const tokenContent = [];
            doc.highlightRange(pos, pos + token.text.length, (text, style) => {
                tokenContent.push(style ? _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `<span class=${style}>${text}</span>` : text);
            });
            content.push(token.className ? _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `<span class=${token.className}>${tokenContent}</span>` :
                _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `${tokenContent}`);
            pos += token.text.length;
        }
        return content;
    }
    static async render(diff, mimeType, parent) {
        const { originalLines, currentLines, rows } = buildDiffRows(diff);
        const renderer = new DiffRenderer(await _code_highlighter_code_highlighter_js__WEBPACK_IMPORTED_MODULE_4__.CodeHighlighter.create(originalLines.join('\n'), mimeType), documentMap(originalLines), await _code_highlighter_code_highlighter_js__WEBPACK_IMPORTED_MODULE_4__.CodeHighlighter.create(currentLines.join('\n'), mimeType), documentMap(currentLines));
        _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.render(renderer.#render(rows), parent, { host: this });
    }
}
class DiffView extends HTMLElement {
    static litTagName = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal `devtools-diff-view`;
    #shadow = this.attachShadow({ mode: 'open' });
    loaded;
    constructor(data) {
        super();
        this.#shadow.adoptedStyleSheets = [_diffView_css_js__WEBPACK_IMPORTED_MODULE_5__["default"], _code_highlighter_code_highlighter_js__WEBPACK_IMPORTED_MODULE_4__.Style["default"]];
        if (data) {
            this.loaded = DiffRenderer.render(data.diff, data.mimeType, this.#shadow);
        }
        else {
            this.loaded = Promise.resolve();
        }
    }
    set data(data) {
        this.loaded = DiffRenderer.render(data.diff, data.mimeType, this.#shadow);
    }
}
customElements.define('devtools-diff-view', DiffView);
//# sourceMappingURL=DiffView.js.map

/***/ }),

/***/ "./ui/components/diff_view/diffView.css.js":
/*!*************************************************!*\
  !*** ./ui/components/diff_view/diffView.css.js ***!
  \*************************************************/
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
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.diff-listing {
  display: grid;
  grid-template-columns: max-content max-content max-content auto;
  font-family: var(--source-code-font-family);
  font-size: var(--source-code-font-size);
  white-space: pre;
  line-height: 1.2em;
  user-select: text;
}

.diff-line-number {
  color: var(--sys-color-token-subtle);
  padding: 0 3px 0 9px;
  text-align: right;
  user-select: none;
}

.diff-line-marker {
  border-right: 1px solid var(--sys-color-divider);
  width: 20px;
  text-align: center;
}

.diff-line-content {
  padding: 0 4px;
}

.diff-line-marker-addition,
.diff-line-addition {
  background-color: var(--sys-color-surface-green);
}

.diff-line-marker-deletion,
.diff-line-deletion {
  background-color: var(--sys-color-surface-error);
}

.diff-line-addition .inner-diff {
  background-color: color-mix(in sRGB, var(--ref-palette-green70) 40%, transparent);
}

.diff-line-deletion .inner-diff {
  background-color: color-mix(in sRGB, var(--ref-palette-error60) 40%, transparent);
}

.diff-hidden-text {
  display: inline-block;
  width: 0;
  overflow: hidden;
}

.diff-line-equal {
  opacity: 50%;
}

.diff-line-spacer {
  text-align: center;
  background-color: var(--sys-color-surface5);
}

/*# sourceURL=diffView.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);