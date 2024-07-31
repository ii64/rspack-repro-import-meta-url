"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_components_diff_view_DiffView_ts"],{

/***/ "./src/ui/components/diff_view/DiffView.ts":
/*!*************************************************!*\
  !*** ./src/ui/components/diff_view/DiffView.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DiffView: () => (/* binding */ DiffView),
/* harmony export */   RowType: () => (/* binding */ RowType),
/* harmony export */   buildDiffRows: () => (/* binding */ buildDiffRows)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../third_party/diff/diff.js */ "./src/third_party/diff/diff.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _code_highlighter_code_highlighter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../code_highlighter/code_highlighter.js */ "./src/ui/components/code_highlighter/code_highlighter.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './diffView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _DiffRenderer_instances, _DiffRenderer_render, _DiffRenderer_renderRow, _DiffRenderer_renderRowContent, _DiffView_shadow;






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
var RowType;
(function (RowType) {
    RowType["Deletion"] = "deletion";
    RowType["Addition"] = "addition";
    RowType["Equal"] = "equal";
    RowType["Spacer"] = "spacer";
})(RowType || (RowType = {}));
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
                    rows.push(createRow(line, RowType.Addition));
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
                        rows.push(createRow(line, RowType.Deletion));
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
                equalRows.push(createRow(lines[i], RowType.Equal));
            }
            if (lines.length > paddingLines * 2 + 1 && !atEnd) {
                equalRows.push(createRow(i18nString(UIStrings.SkippingDMatchingLines, { PH1: (lines.length - paddingLines * 2) }), RowType.Spacer));
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
                equalRows.push(createRow(lines[i], RowType.Equal));
            }
        }
        return equalRows;
    }
    function createModifyRows(before, after) {
        const internalDiff = _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_1__.Diff.DiffWrapper.charDiff(before, after, true /* cleanup diff */);
        const deletionRows = [createRow('', RowType.Deletion)];
        const insertionRows = [createRow('', RowType.Addition)];
        for (const token of internalDiff) {
            const text = token[1];
            const type = token[0];
            const className = type === _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_1__.Diff.Operation.Equal ? '' : 'inner-diff';
            const lines = text.split('\n');
            for (let i = 0; i < lines.length; i++) {
                if (i > 0 && type !== _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_1__.Diff.Operation.Insert) {
                    deletionRows.push(createRow('', RowType.Deletion));
                }
                if (i > 0 && type !== _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_1__.Diff.Operation.Delete) {
                    insertionRows.push(createRow('', RowType.Addition));
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
        if (type === RowType.Addition) {
            currentLineNumber++;
        }
        if (type === RowType.Deletion) {
            originalLineNumber++;
        }
        if (type === RowType.Equal) {
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
    constructor(originalHighlighter, originalMap, currentHighlighter, currentMap) {
        _DiffRenderer_instances.add(this);
        Object.defineProperty(this, "originalHighlighter", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: originalHighlighter
        });
        Object.defineProperty(this, "originalMap", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: originalMap
        });
        Object.defineProperty(this, "currentHighlighter", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: currentHighlighter
        });
        Object.defineProperty(this, "currentMap", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: currentMap
        });
    }
    static async render(diff, mimeType, parent) {
        const { originalLines, currentLines, rows } = buildDiffRows(diff);
        const renderer = new DiffRenderer(await _code_highlighter_code_highlighter_js__WEBPACK_IMPORTED_MODULE_4__.CodeHighlighter.create(originalLines.join('\n'), mimeType), documentMap(originalLines), await _code_highlighter_code_highlighter_js__WEBPACK_IMPORTED_MODULE_4__.CodeHighlighter.create(currentLines.join('\n'), mimeType), documentMap(currentLines));
        _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.render(__classPrivateFieldGet(renderer, _DiffRenderer_instances, "m", _DiffRenderer_render).call(renderer, rows), parent, { host: this });
    }
}
_DiffRenderer_instances = new WeakSet(), _DiffRenderer_render = function _DiffRenderer_render(rows) {
    return _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `
      <div class="diff-listing" aria-label=${i18nString(UIStrings.changesDiffViewer)}>
        ${rows.map(row => __classPrivateFieldGet(this, _DiffRenderer_instances, "m", _DiffRenderer_renderRow).call(this, row))}
      </div>`;
}, _DiffRenderer_renderRow = function _DiffRenderer_renderRow(row) {
    const baseNumber = row.type === RowType.Equal || row.type === RowType.Deletion ? String(row.originalLineNumber) : '';
    const curNumber = row.type === RowType.Equal || row.type === RowType.Addition ? String(row.currentLineNumber) : '';
    let marker = '', markerClass = 'diff-line-marker', screenReaderText = null;
    if (row.type === RowType.Addition) {
        marker = '+';
        markerClass += ' diff-line-addition';
        screenReaderText = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `<span class="diff-hidden-text">${i18nString(UIStrings.additions)}</span>`;
    }
    else if (row.type === RowType.Deletion) {
        marker = '-';
        markerClass += ' diff-line-deletion';
        screenReaderText = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `<span class="diff-hidden-text">${i18nString(UIStrings.deletions)}</span>`;
    }
    return _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `
      <div class="diff-line-number" aria-hidden="true">${baseNumber}</div>
      <div class="diff-line-number" aria-hidden="true">${curNumber}</div>
      <div class=${markerClass} aria-hidden="true">${marker}</div>
      <div class="diff-line-content diff-line-${row.type}" data-line-number=${curNumber} jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__.link('changes.reveal-source').track({ click: true })}>${screenReaderText}${__classPrivateFieldGet(this, _DiffRenderer_instances, "m", _DiffRenderer_renderRowContent).call(this, row)}</div>`;
}, _DiffRenderer_renderRowContent = function _DiffRenderer_renderRowContent(row) {
    if (row.type === RowType.Spacer) {
        return row.tokens.map(tok => _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `${tok.text}`);
    }
    const [doc, startPos] = row.type === RowType.Deletion ?
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
};
class DiffView extends HTMLElement {
    constructor(data) {
        super();
        _DiffView_shadow.set(this, this.attachShadow({ mode: 'open' }));
        Object.defineProperty(this, "loaded", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        __classPrivateFieldGet(this, _DiffView_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './diffView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _code_highlighter_code_highlighter_js__WEBPACK_IMPORTED_MODULE_4__.Style["default"]];
        if (data) {
            this.loaded = DiffRenderer.render(data.diff, data.mimeType, __classPrivateFieldGet(this, _DiffView_shadow, "f"));
        }
        else {
            this.loaded = Promise.resolve();
        }
    }
    set data(data) {
        this.loaded = DiffRenderer.render(data.diff, data.mimeType, __classPrivateFieldGet(this, _DiffView_shadow, "f"));
    }
}
_DiffView_shadow = new WeakMap();
Object.defineProperty(DiffView, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal `devtools-diff-view`
});
customElements.define('devtools-diff-view', DiffView);


/***/ })

}]);