"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_sources_GoToLineQuickOpen_ts"],{

/***/ "./src/panels/sources/GoToLineQuickOpen.ts":
/*!*************************************************!*\
  !*** ./src/panels/sources/GoToLineQuickOpen.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GoToLineQuickOpen: () => (/* binding */ GoToLineQuickOpen)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_legacy_components_quick_open_quick_open_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/components/quick_open/quick_open.js */ "./src/ui/legacy/components/quick_open/quick_open.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _SourcesView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SourcesView.js */ "./src/panels/sources/SourcesView.ts");
// Copyright 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _GoToLineQuickOpen_goToLineStrings;




const UIStrings = {
    /**
     *@description Text in Go To Line Quick Open of the Sources panel
     */
    noFileSelected: 'No file selected.',
    /**
     *@description Text to show no results have been found
     */
    noResultsFound: 'No results found',
    /**
     *@description Text in Go To Line Quick Open of the Sources panel
     */
    typeANumberToGoToThatLine: 'Type a number to go to that line.',
    /**
     *@description Text in Go To Line Quick Open of the Sources panel
     *@example {abc} PH1
     *@example {000} PH2
     *@example {bbb} PH3
     */
    currentPositionXsTypeAnOffset: 'Current position: 0x{PH1}. Type an offset between 0x{PH2} and 0x{PH3} to navigate to.',
    /**
     *@description Text in the GoToLine dialog of the Sources pane that describes the current line number, file line number range, and use of the GoToLine dialog
     *@example {1} PH1
     *@example {100} PH2
     */
    currentLineSTypeALineNumber: 'Current line: {PH1}. Type a line number between 1 and {PH2} to navigate to.',
    /**
     *@description Text in Go To Line Quick Open of the Sources panel
     *@example {abc} PH1
     */
    goToOffsetXs: 'Go to offset 0x{PH1}.',
    /**
     *@description Text in Go To Line Quick Open of the Sources panel
     *@example {2} PH1
     *@example {2} PH2
     */
    goToLineSAndColumnS: 'Go to line {PH1} and column {PH2}.',
    /**
     *@description Text in Go To Line Quick Open of the Sources panel
     *@example {2} PH1
     */
    goToLineS: 'Go to line {PH1}.',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/sources/GoToLineQuickOpen.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class GoToLineQuickOpen extends _ui_legacy_components_quick_open_quick_open_js__WEBPACK_IMPORTED_MODULE_1__.FilteredListWidget.Provider {
    constructor() {
        super('source-line');
        _GoToLineQuickOpen_goToLineStrings.set(this, []);
    }
    selectItem(_itemIndex, promptValue) {
        const sourceFrame = this.currentSourceFrame();
        if (!sourceFrame) {
            return;
        }
        const position = this.parsePosition(promptValue);
        if (!position) {
            return;
        }
        sourceFrame.revealPosition({ lineNumber: position.line - 1, columnNumber: position.column - 1 });
    }
    itemCount() {
        return __classPrivateFieldGet(this, _GoToLineQuickOpen_goToLineStrings, "f").length;
    }
    renderItem(itemIndex, _query, titleElement, _subtitleElement) {
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createTextChild(titleElement, __classPrivateFieldGet(this, _GoToLineQuickOpen_goToLineStrings, "f")[itemIndex]);
    }
    rewriteQuery(_query) {
        // For Go to Line Quick Open, we don't need to filter any item, set query to empty string, so the filter regex matching will be skipped
        return '';
    }
    queryChanged(query) {
        __classPrivateFieldSet(this, _GoToLineQuickOpen_goToLineStrings, [], "f");
        const position = this.parsePosition(query);
        const sourceFrame = this.currentSourceFrame();
        if (!position) {
            if (!sourceFrame) {
                __classPrivateFieldGet(this, _GoToLineQuickOpen_goToLineStrings, "f").push(i18nString(UIStrings.typeANumberToGoToThatLine));
                return;
            }
            const editorState = sourceFrame.textEditor.state;
            const disassembly = sourceFrame.wasmDisassembly;
            const currentLineNumber = sourceFrame.editorLocationToUILocation(editorState.doc.lineAt(editorState.selection.main.head).number - 1)
                .lineNumber;
            if (disassembly) {
                const lastBytecodeOffset = disassembly.lineNumberToBytecodeOffset(disassembly.lineNumbers - 1);
                const bytecodeOffsetDigits = lastBytecodeOffset.toString(16).length;
                const currentPosition = disassembly.lineNumberToBytecodeOffset(currentLineNumber);
                __classPrivateFieldGet(this, _GoToLineQuickOpen_goToLineStrings, "f").push(i18nString(UIStrings.currentPositionXsTypeAnOffset, {
                    PH1: currentPosition.toString(16).padStart(bytecodeOffsetDigits, '0'),
                    PH2: '0'.padStart(bytecodeOffsetDigits, '0'),
                    PH3: lastBytecodeOffset.toString(16),
                }));
                return;
            }
            const linesCount = sourceFrame.editorLocationToUILocation(editorState.doc.lines - 1).lineNumber + 1;
            __classPrivateFieldGet(this, _GoToLineQuickOpen_goToLineStrings, "f").push(i18nString(UIStrings.currentLineSTypeALineNumber, { PH1: currentLineNumber + 1, PH2: linesCount }));
            return;
        }
        if (sourceFrame && sourceFrame.wasmDisassembly) {
            __classPrivateFieldGet(this, _GoToLineQuickOpen_goToLineStrings, "f").push(i18nString(UIStrings.goToOffsetXs, { PH1: (position.column - 1).toString(16) }));
            return;
        }
        if (position.column && position.column > 1) {
            __classPrivateFieldGet(this, _GoToLineQuickOpen_goToLineStrings, "f").push(i18nString(UIStrings.goToLineSAndColumnS, { PH1: position.line, PH2: position.column }));
            return;
        }
        if (sourceFrame && position.line > sourceFrame.textEditor.state.doc.lines) {
            return;
        }
        __classPrivateFieldGet(this, _GoToLineQuickOpen_goToLineStrings, "f").push(i18nString(UIStrings.goToLineS, { PH1: position.line }));
    }
    notFoundText(_query) {
        if (!this.currentSourceFrame()) {
            return i18nString(UIStrings.noFileSelected);
        }
        return i18nString(UIStrings.noResultsFound);
    }
    parsePosition(query) {
        const sourceFrame = this.currentSourceFrame();
        if (sourceFrame && sourceFrame.wasmDisassembly) {
            const parts = query.match(/0x([0-9a-fA-F]+)/);
            if (!parts || !parts[0] || parts[0].length !== query.length) {
                return null;
            }
            const column = parseInt(parts[0], 16) + 1;
            return { line: 0, column };
        }
        const parts = query.match(/([0-9]+)(\:[0-9]*)?/);
        if (!parts || !parts[0] || parts[0].length !== query.length) {
            return null;
        }
        const line = parseInt(parts[1], 10);
        let column = 0;
        if (parts[2]) {
            column = parseInt(parts[2].substring(1), 10);
        }
        return { line: Math.max(line | 0, 1), column: Math.max(column | 0, 1) };
    }
    currentSourceFrame() {
        const sourcesView = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Context.Context.instance().flavor(_SourcesView_js__WEBPACK_IMPORTED_MODULE_3__.SourcesView);
        if (!sourcesView) {
            return null;
        }
        return sourcesView.currentSourceFrame();
    }
}
_GoToLineQuickOpen_goToLineStrings = new WeakMap();


/***/ })

}]);