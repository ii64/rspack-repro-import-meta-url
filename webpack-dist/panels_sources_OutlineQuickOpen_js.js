"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_sources_OutlineQuickOpen_js"],{

/***/ "./panels/sources/OutlineQuickOpen.js":
/*!********************************************!*\
  !*** ./panels/sources/OutlineQuickOpen.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OutlineQuickOpen: () => (/* binding */ OutlineQuickOpen),
/* harmony export */   outline: () => (/* binding */ outline)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../third_party/codemirror.next/codemirror.next.js */ "./third_party/codemirror.next/codemirror.next.js");
/* harmony import */ var _ui_legacy_components_quick_open_quick_open_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/components/quick_open/quick_open.js */ "./ui/legacy/components/quick_open/quick_open.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _SourcesView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SourcesView.js */ "./panels/sources/SourcesView.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





const UIStrings = {
    /**
     *@description Text in Go To Line Quick Open of the Sources panel
     */
    noFileSelected: 'No file selected.',
    /**
     *@description Text in Outline Quick Open of the Sources panel
     */
    openAJavascriptOrCssFileToSee: 'Open a JavaScript or CSS file to see symbols',
    /**
     *@description Text to show no results have been found
     */
    noResultsFound: 'No results found',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/sources/OutlineQuickOpen.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
function outline(state) {
    function toLineColumn(offset) {
        offset = Math.max(0, Math.min(offset, state.doc.length));
        const line = state.doc.lineAt(offset);
        return { lineNumber: line.number - 1, columnNumber: offset - line.from };
    }
    function subtitleFromParamList() {
        while (cursor.name !== 'ParamList' && cursor.nextSibling()) {
        }
        let parameters = '';
        if (cursor.name === 'ParamList' && cursor.firstChild()) {
            do {
                switch (cursor.name) {
                    case 'ArrayPattern':
                        parameters += '[‥]';
                        break;
                    case 'ObjectPattern':
                        parameters += '{‥}';
                        break;
                    case 'VariableDefinition':
                        parameters += state.sliceDoc(cursor.from, cursor.to);
                        break;
                    case 'Spread':
                        parameters += '...';
                        break;
                    case ',':
                        parameters += ', ';
                        break;
                }
            } while (cursor.nextSibling());
        }
        return `(${parameters})`;
    }
    const tree = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_1__.syntaxTree(state);
    const items = [];
    const cursor = tree.cursor();
    do {
        switch (cursor.name) {
            // css.grammar
            case 'RuleSet': {
                for (cursor.firstChild();; cursor.nextSibling()) {
                    const title = state.sliceDoc(cursor.from, cursor.to);
                    const { lineNumber, columnNumber } = toLineColumn(cursor.from);
                    items.push({ title, lineNumber, columnNumber });
                    cursor.nextSibling();
                    if (cursor.name !== ',') {
                        break;
                    }
                }
                break;
            }
            // javascript.grammar
            case 'FunctionDeclaration':
            case 'MethodDeclaration': {
                let prefix = '';
                cursor.firstChild();
                do {
                    switch (cursor.name) {
                        case 'abstract':
                        case 'async':
                        case 'get':
                        case 'set':
                        case 'static':
                            prefix = `${prefix}${cursor.name} `;
                            break;
                        case 'Star':
                            prefix += '*';
                            break;
                        case 'PropertyDefinition':
                        case 'PrivatePropertyDefinition':
                        case 'VariableDefinition': {
                            const title = prefix + state.sliceDoc(cursor.from, cursor.to);
                            const { lineNumber, columnNumber } = toLineColumn(cursor.from);
                            const subtitle = subtitleFromParamList();
                            items.push({ title, subtitle, lineNumber, columnNumber });
                            break;
                        }
                    }
                } while (cursor.nextSibling());
                break;
            }
            case 'Property': {
                let prefix = '';
                cursor.firstChild();
                do {
                    if (cursor.name === 'async' || cursor.name === 'get' || cursor.name === 'set') {
                        prefix = `${prefix}${cursor.name} `;
                    }
                    else if (cursor.name === 'Star') {
                        prefix += '*';
                    }
                    else if (cursor.name === 'PropertyDefinition') {
                        let title = state.sliceDoc(cursor.from, cursor.to);
                        const { lineNumber, columnNumber } = toLineColumn(cursor.from);
                        while (cursor.nextSibling()) {
                            if (cursor.name === 'ClassExpression') {
                                title = `class ${title}`;
                                items.push({ title, lineNumber, columnNumber });
                                break;
                            }
                            if (cursor.name === 'ArrowFunction' || cursor.name === 'FunctionExpression') {
                                cursor.firstChild();
                            }
                            if (cursor.name === 'async') {
                                prefix = `async ${prefix}`;
                            }
                            else if (cursor.name === 'Star') {
                                prefix += '*';
                            }
                            else if (cursor.name === 'ParamList') {
                                title = prefix + title;
                                const subtitle = subtitleFromParamList();
                                items.push({ title, subtitle, lineNumber, columnNumber });
                                break;
                            }
                        }
                        break;
                    }
                    else {
                        // We don't support any other Property syntax.
                        break;
                    }
                } while (cursor.nextSibling());
                break;
            }
            case 'PropertyName':
            case 'VariableDefinition': {
                if (cursor.matchContext(['ClassDeclaration'])) {
                    const title = 'class ' + state.sliceDoc(cursor.from, cursor.to);
                    const { lineNumber, columnNumber } = toLineColumn(cursor.from);
                    items.push({ title, lineNumber, columnNumber });
                }
                else if (cursor.matchContext([
                    'AssignmentExpression',
                    'MemberExpression',
                ]) ||
                    cursor.matchContext([
                        'VariableDeclaration',
                    ])) {
                    let title = state.sliceDoc(cursor.from, cursor.to);
                    const { lineNumber, columnNumber } = toLineColumn(cursor.from);
                    while (cursor.name !== 'Equals' && cursor.next()) {
                    }
                    if (!cursor.nextSibling()) {
                        break;
                    }
                    if (cursor.name === 'ArrowFunction' || cursor.name === 'FunctionExpression') {
                        cursor.firstChild();
                        let prefix = '';
                        while (cursor.name !== 'ParamList') {
                            if (cursor.name === 'async') {
                                prefix = `async ${prefix}`;
                            }
                            else if (cursor.name === 'Star') {
                                prefix += '*';
                            }
                            if (!cursor.nextSibling()) {
                                break;
                            }
                        }
                        title = prefix + title;
                        const subtitle = subtitleFromParamList();
                        items.push({ title, subtitle, lineNumber, columnNumber });
                    }
                    else if (cursor.name === 'ClassExpression') {
                        title = `class ${title}`;
                        items.push({ title, lineNumber, columnNumber });
                    }
                }
                break;
            }
            // wast.grammar
            case 'App': {
                if (cursor.firstChild() && cursor.nextSibling() && state.sliceDoc(cursor.from, cursor.to) === 'module') {
                    if (cursor.nextSibling() && cursor.name === 'Identifier') {
                        const title = state.sliceDoc(cursor.from, cursor.to);
                        const { lineNumber, columnNumber } = toLineColumn(cursor.from);
                        items.push({ title, lineNumber, columnNumber });
                    }
                    do {
                        if (cursor.name === 'App' && cursor.firstChild()) {
                            if (cursor.nextSibling() && state.sliceDoc(cursor.from, cursor.to) === 'func' && cursor.nextSibling() &&
                                cursor.name === 'Identifier') {
                                const title = state.sliceDoc(cursor.from, cursor.to);
                                const { lineNumber, columnNumber } = toLineColumn(cursor.from);
                                const params = [];
                                while (cursor.nextSibling()) {
                                    if (cursor.name === 'App' && cursor.firstChild()) {
                                        if (cursor.nextSibling() && state.sliceDoc(cursor.from, cursor.to) === 'param') {
                                            if (cursor.nextSibling() && cursor.name === 'Identifier') {
                                                params.push(state.sliceDoc(cursor.from, cursor.to));
                                            }
                                            else {
                                                params.push(`$${params.length}`);
                                            }
                                        }
                                        cursor.parent();
                                    }
                                }
                                const subtitle = `(${params.join(', ')})`;
                                items.push({ title, subtitle, lineNumber, columnNumber });
                            }
                            cursor.parent();
                        }
                    } while (cursor.nextSibling());
                }
                break;
            }
            // cpp.grammar
            case 'FieldIdentifier':
            case 'Identifier': {
                if (cursor.matchContext(['FunctionDeclarator'])) {
                    const title = state.sliceDoc(cursor.from, cursor.to);
                    const { lineNumber, columnNumber } = toLineColumn(cursor.from);
                    items.push({ title, lineNumber, columnNumber });
                }
                break;
            }
            case 'TypeIdentifier': {
                if (cursor.matchContext(['ClassSpecifier'])) {
                    const title = `class ${state.sliceDoc(cursor.from, cursor.to)}`;
                    const { lineNumber, columnNumber } = toLineColumn(cursor.from);
                    items.push({ title, lineNumber, columnNumber });
                }
                else if (cursor.matchContext(['StructSpecifier'])) {
                    const title = `struct ${state.sliceDoc(cursor.from, cursor.to)}`;
                    const { lineNumber, columnNumber } = toLineColumn(cursor.from);
                    items.push({ title, lineNumber, columnNumber });
                }
                break;
            }
            default:
                break;
        }
    } while (cursor.next());
    return items;
}
class OutlineQuickOpen extends _ui_legacy_components_quick_open_quick_open_js__WEBPACK_IMPORTED_MODULE_2__.FilteredListWidget.Provider {
    items = [];
    active = false;
    constructor() {
        super('source-symbol');
    }
    attach() {
        const sourceFrame = this.currentSourceFrame();
        if (sourceFrame) {
            this.active = true;
            this.items = outline(sourceFrame.textEditor.state).map(({ title, subtitle, lineNumber, columnNumber }) => {
                ({ lineNumber, columnNumber } = sourceFrame.editorLocationToUILocation(lineNumber, columnNumber));
                return { title, subtitle, lineNumber, columnNumber };
            });
        }
        else {
            this.active = false;
            this.items = [];
        }
    }
    detach() {
        this.active = false;
        this.items = [];
    }
    itemCount() {
        return this.items.length;
    }
    itemKeyAt(itemIndex) {
        const item = this.items[itemIndex];
        return item.title + (item.subtitle ? item.subtitle : '');
    }
    itemScoreAt(itemIndex, query) {
        const item = this.items[itemIndex];
        const methodName = query.split('(')[0];
        if (methodName.toLowerCase() === item.title.toLowerCase()) {
            return 1 / (1 + item.lineNumber);
        }
        return -item.lineNumber - 1;
    }
    renderItem(itemIndex, query, titleElement, _subtitleElement) {
        const item = this.items[itemIndex];
        titleElement.textContent = item.title + (item.subtitle ? item.subtitle : '');
        _ui_legacy_components_quick_open_quick_open_js__WEBPACK_IMPORTED_MODULE_2__.FilteredListWidget.FilteredListWidget.highlightRanges(titleElement, query);
        const sourceFrame = this.currentSourceFrame();
        if (!sourceFrame) {
            return;
        }
        const tagElement = titleElement.parentElement?.parentElement?.createChild('span', 'tag');
        if (!tagElement) {
            return;
        }
        const disassembly = sourceFrame.wasmDisassembly;
        if (disassembly) {
            const lastBytecodeOffset = disassembly.lineNumberToBytecodeOffset(disassembly.lineNumbers - 1);
            const bytecodeOffsetDigits = lastBytecodeOffset.toString(16).length;
            tagElement.textContent = `:0x${item.columnNumber.toString(16).padStart(bytecodeOffsetDigits, '0')}`;
        }
        else {
            tagElement.textContent = `:${item.lineNumber + 1}`;
        }
    }
    selectItem(itemIndex, _promptValue) {
        if (itemIndex === null) {
            return;
        }
        const sourceFrame = this.currentSourceFrame();
        if (!sourceFrame) {
            return;
        }
        const item = this.items[itemIndex];
        sourceFrame.revealPosition({ lineNumber: item.lineNumber, columnNumber: item.columnNumber }, true);
    }
    currentSourceFrame() {
        const sourcesView = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Context.Context.instance().flavor(_SourcesView_js__WEBPACK_IMPORTED_MODULE_4__.SourcesView);
        return sourcesView && sourcesView.currentSourceFrame();
    }
    notFoundText() {
        if (!this.currentSourceFrame()) {
            return i18nString(UIStrings.noFileSelected);
        }
        if (!this.active) {
            return i18nString(UIStrings.openAJavascriptOrCssFileToSee);
        }
        return i18nString(UIStrings.noResultsFound);
    }
}
//# sourceMappingURL=OutlineQuickOpen.js.map

/***/ })

}]);