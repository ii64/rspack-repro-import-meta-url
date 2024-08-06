"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_sources_sources_js"],{

/***/ "./panels/sources/GoToLineQuickOpen.js":
/*!*********************************************!*\
  !*** ./panels/sources/GoToLineQuickOpen.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GoToLineQuickOpen: () => (/* binding */ GoToLineQuickOpen)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_legacy_components_quick_open_quick_open_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/components/quick_open/quick_open.js */ "./ui/legacy/components/quick_open/quick_open.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _SourcesView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SourcesView.js */ "./panels/sources/SourcesView.js");
// Copyright 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




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
    #goToLineStrings = [];
    constructor() {
        super('source-line');
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
        return this.#goToLineStrings.length;
    }
    renderItem(itemIndex, _query, titleElement, _subtitleElement) {
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createTextChild(titleElement, this.#goToLineStrings[itemIndex]);
    }
    rewriteQuery(_query) {
        // For Go to Line Quick Open, we don't need to filter any item, set query to empty string, so the filter regex matching will be skipped
        return '';
    }
    queryChanged(query) {
        this.#goToLineStrings = [];
        const position = this.parsePosition(query);
        const sourceFrame = this.currentSourceFrame();
        if (!position) {
            if (!sourceFrame) {
                this.#goToLineStrings.push(i18nString(UIStrings.typeANumberToGoToThatLine));
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
                this.#goToLineStrings.push(i18nString(UIStrings.currentPositionXsTypeAnOffset, {
                    PH1: currentPosition.toString(16).padStart(bytecodeOffsetDigits, '0'),
                    PH2: '0'.padStart(bytecodeOffsetDigits, '0'),
                    PH3: lastBytecodeOffset.toString(16),
                }));
                return;
            }
            const linesCount = sourceFrame.editorLocationToUILocation(editorState.doc.lines - 1).lineNumber + 1;
            this.#goToLineStrings.push(i18nString(UIStrings.currentLineSTypeALineNumber, { PH1: currentLineNumber + 1, PH2: linesCount }));
            return;
        }
        if (sourceFrame && sourceFrame.wasmDisassembly) {
            this.#goToLineStrings.push(i18nString(UIStrings.goToOffsetXs, { PH1: (position.column - 1).toString(16) }));
            return;
        }
        if (position.column && position.column > 1) {
            this.#goToLineStrings.push(i18nString(UIStrings.goToLineSAndColumnS, { PH1: position.line, PH2: position.column }));
            return;
        }
        if (sourceFrame && position.line > sourceFrame.textEditor.state.doc.lines) {
            return;
        }
        this.#goToLineStrings.push(i18nString(UIStrings.goToLineS, { PH1: position.line }));
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
//# sourceMappingURL=GoToLineQuickOpen.js.map

/***/ }),

/***/ "./panels/sources/InplaceFormatterEditorAction.js":
/*!********************************************************!*\
  !*** ./panels/sources/InplaceFormatterEditorAction.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InplaceFormatterEditorAction: () => (/* binding */ InplaceFormatterEditorAction)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _models_formatter_formatter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/formatter/formatter.js */ "./models/formatter/formatter.js");
/* harmony import */ var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/persistence/persistence.js */ "./models/persistence/persistence.js");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _SourcesView_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SourcesView.js */ "./panels/sources/SourcesView.js");
// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







const UIStrings = {
    /**
     *@description Title of the format button in the Sources panel
     *@example {file name} PH1
     */
    formatS: 'Format {PH1}',
    /**
     *@description Tooltip text that appears when hovering over the largeicon pretty print button in the Inplace Formatter Editor Action of the Sources panel
     */
    format: 'Format',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/sources/InplaceFormatterEditorAction.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
let inplaceFormatterEditorActionInstance;
class InplaceFormatterEditorAction {
    button;
    sourcesView;
    uiSourceCodeTitleChangedEvent = null;
    constructor() {
    }
    static instance(opts = { forceNew: null }) {
        const { forceNew } = opts;
        if (!inplaceFormatterEditorActionInstance || forceNew) {
            inplaceFormatterEditorActionInstance = new InplaceFormatterEditorAction();
        }
        return inplaceFormatterEditorActionInstance;
    }
    editorSelected(event) {
        const uiSourceCode = event.data;
        this.updateButton(uiSourceCode);
    }
    editorClosed(event) {
        const { wasSelected } = event.data;
        if (wasSelected) {
            this.updateButton(null);
        }
    }
    updateButton(uiSourceCode) {
        if (this.uiSourceCodeTitleChangedEvent) {
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.EventTarget.removeEventListeners([this.uiSourceCodeTitleChangedEvent]);
        }
        this.uiSourceCodeTitleChangedEvent = uiSourceCode ?
            uiSourceCode.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.UISourceCode.Events.TitleChanged, event => this.updateButton(event.data), this) :
            null;
        const isFormattable = this.isFormattable(uiSourceCode);
        this.button.element.classList.toggle('hidden', !isFormattable);
        if (uiSourceCode && isFormattable) {
            this.button.setTitle(i18nString(UIStrings.formatS, { PH1: uiSourceCode.name() }));
        }
    }
    getOrCreateButton(sourcesView) {
        if (this.button) {
            return this.button;
        }
        this.sourcesView = sourcesView;
        this.sourcesView.addEventListener("EditorSelected" /* Events.EditorSelected */, this.editorSelected.bind(this));
        this.sourcesView.addEventListener("EditorClosed" /* Events.EditorClosed */, this.editorClosed.bind(this));
        this.button = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.ToolbarButton(i18nString(UIStrings.format), 'brackets');
        this.button.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */, this.formatSourceInPlace, this);
        this.updateButton(sourcesView.currentUISourceCode());
        return this.button;
    }
    isFormattable(uiSourceCode) {
        if (!uiSourceCode) {
            return false;
        }
        if (uiSourceCode.project().canSetFileContent()) {
            return true;
        }
        if (_models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__.Persistence.PersistenceImpl.instance().binding(uiSourceCode) !== null) {
            return true;
        }
        return false;
    }
    formatSourceInPlace() {
        const sourceFrame = this.sourcesView.currentSourceFrame();
        if (!sourceFrame) {
            return;
        }
        const uiSourceCode = sourceFrame.uiSourceCode();
        if (!this.isFormattable(uiSourceCode)) {
            return;
        }
        if (uiSourceCode.isDirty()) {
            void this.contentLoaded(uiSourceCode, sourceFrame, uiSourceCode.workingCopy());
        }
        else {
            void uiSourceCode.requestContent().then(deferredContent => {
                void this.contentLoaded(uiSourceCode, sourceFrame, deferredContent.content || '');
            });
        }
    }
    async contentLoaded(uiSourceCode, sourceFrame, content) {
        const { formattedContent, formattedMapping } = await _models_formatter_formatter_js__WEBPACK_IMPORTED_MODULE_2__.ScriptFormatter.format(uiSourceCode.contentType(), sourceFrame.contentType, content);
        if (uiSourceCode.workingCopy() === formattedContent) {
            return;
        }
        const selection = sourceFrame.textEditor.toLineColumn(sourceFrame.textEditor.state.selection.main.head);
        const [lineNumber, columnNumber] = formattedMapping.originalToFormatted(selection.lineNumber, selection.columnNumber);
        uiSourceCode.setWorkingCopy(formattedContent);
        this.sourcesView.showSourceLocation(uiSourceCode, { lineNumber, columnNumber });
    }
}
(0,_SourcesView_js__WEBPACK_IMPORTED_MODULE_6__.registerEditorAction)(InplaceFormatterEditorAction.instance);
//# sourceMappingURL=InplaceFormatterEditorAction.js.map

/***/ }),

/***/ "./panels/sources/OpenFileQuickOpen.js":
/*!*********************************************!*\
  !*** ./panels/sources/OpenFileQuickOpen.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OpenFileQuickOpen: () => (/* binding */ OpenFileQuickOpen)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _panels_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../panels/utils/utils.js */ "./panels/utils/utils.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _FilteredUISourceCodeListProvider_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FilteredUISourceCodeListProvider.js */ "./panels/sources/FilteredUISourceCodeListProvider.js");
/* harmony import */ var _SourcesView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SourcesView.js */ "./panels/sources/SourcesView.js");
// Copyright 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






class OpenFileQuickOpen extends _FilteredUISourceCodeListProvider_js__WEBPACK_IMPORTED_MODULE_4__.FilteredUISourceCodeListProvider {
    constructor() {
        super('source-file');
    }
    attach() {
        this.setDefaultScores(_SourcesView_js__WEBPACK_IMPORTED_MODULE_5__.SourcesView.defaultUISourceCodeScores());
        super.attach();
    }
    uiSourceCodeSelected(uiSourceCode, lineNumber, columnNumber) {
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.SelectFileFromFilePicker);
        if (!uiSourceCode) {
            return;
        }
        if (typeof lineNumber === 'number') {
            void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(uiSourceCode.uiLocation(lineNumber, columnNumber));
        }
        else {
            void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(uiSourceCode);
        }
    }
    filterProject(project) {
        return !project.isServiceProject();
    }
    renderItem(itemIndex, query, titleElement, subtitleElement) {
        super.renderItem(itemIndex, query, titleElement, subtitleElement);
        const iconElement = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon();
        const iconData = _panels_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.PanelUtils.iconDataForResourceType(this.itemContentTypeAt(itemIndex));
        iconElement.data = {
            ...iconData,
            width: '20px',
            height: '20px',
        };
        titleElement.parentElement?.parentElement?.insertBefore(iconElement, titleElement.parentElement);
    }
    renderAsTwoRows() {
        return true;
    }
}
//# sourceMappingURL=OpenFileQuickOpen.js.map

/***/ }),

/***/ "./panels/sources/ScopeChainSidebarPane.js":
/*!*************************************************!*\
  !*** ./panels/sources/ScopeChainSidebarPane.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScopeChainSidebarPane: () => (/* binding */ ScopeChainSidebarPane)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_source_map_scopes_source_map_scopes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/source_map_scopes/source_map_scopes.js */ "./models/source_map_scopes/source_map_scopes.js");
/* harmony import */ var _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/components/object_ui/object_ui.js */ "./ui/legacy/components/object_ui/object_ui.js");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _scopeChainSidebarPane_css_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scopeChainSidebarPane.css.js */ "./panels/sources/scopeChainSidebarPane.css.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








const UIStrings = {
    /**
     *@description Loading indicator in Scope Sidebar Pane of the Sources panel
     */
    loading: 'Loading...',
    /**
     *@description Not paused message element text content in Call Stack Sidebar Pane of the Sources panel
     */
    notPaused: 'Not paused',
    /**
     *@description Empty placeholder in Scope Chain Sidebar Pane of the Sources panel
     */
    noVariables: 'No variables',
    /**
     *@description Text in the Sources panel Scope pane describing a closure scope.
     *@example {func} PH1
     */
    closureS: 'Closure ({PH1})',
    /**
     *@description Text that refers to closure as a programming term
     */
    closure: 'Closure',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/sources/ScopeChainSidebarPane.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
let scopeChainSidebarPaneInstance;
class ScopeChainSidebarPane extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Widget.VBox {
    treeOutline;
    expandController;
    linkifier;
    infoElement;
    #scopeChainModel = null;
    constructor() {
        super(true);
        this.contentElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.section('sources.scope-chain')}`);
        this.treeOutline = new _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_3__.ObjectPropertiesSection.ObjectPropertiesSectionsTreeOutline();
        this.treeOutline.hideOverflow();
        this.treeOutline.setShowSelectionOnKeyboardFocus(/* show */ true);
        this.expandController =
            new _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_3__.ObjectPropertiesSection.ObjectPropertiesSectionsTreeExpandController(this.treeOutline);
        this.linkifier = new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__.Linkifier.Linkifier();
        this.infoElement = document.createElement('div');
        this.infoElement.className = 'gray-info-message';
        this.infoElement.tabIndex = -1;
        this.flavorChanged(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.CallFrame));
    }
    static instance() {
        if (!scopeChainSidebarPaneInstance) {
            scopeChainSidebarPaneInstance = new ScopeChainSidebarPane();
        }
        return scopeChainSidebarPaneInstance;
    }
    flavorChanged(callFrame) {
        this.#scopeChainModel?.dispose();
        this.#scopeChainModel = null;
        this.linkifier.reset();
        this.contentElement.removeChildren();
        this.contentElement.appendChild(this.infoElement);
        if (callFrame) {
            // Resolving the scope may take a while to complete, so indicate to the user that something
            // is happening (see https://crbug.com/1162416).
            this.infoElement.textContent = i18nString(UIStrings.loading);
            this.#scopeChainModel = new _models_source_map_scopes_source_map_scopes_js__WEBPACK_IMPORTED_MODULE_2__.ScopeChainModel.ScopeChainModel(callFrame);
            this.#scopeChainModel.addEventListener("ScopeChainUpdated" /* SourceMapScopes.ScopeChainModel.Events.ScopeChainUpdated */, event => this.buildScopeTreeOutline(event.data), this);
        }
        else {
            this.infoElement.textContent = i18nString(UIStrings.notPaused);
        }
    }
    focus() {
        if (this.hasFocus()) {
            return;
        }
        if (_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerPausedDetails)) {
            this.treeOutline.forceSelect();
        }
    }
    buildScopeTreeOutline(eventScopeChain) {
        const { scopeChain } = eventScopeChain;
        this.treeOutline.removeChildren();
        this.contentElement.removeChildren();
        this.contentElement.appendChild(this.treeOutline.element);
        let foundLocalScope = false;
        for (const [i, scope] of scopeChain.entries()) {
            if (scope.type() === "local" /* Protocol.Debugger.ScopeType.Local */) {
                foundLocalScope = true;
            }
            const section = this.createScopeSectionTreeElement(scope);
            if (scope.type() === "global" /* Protocol.Debugger.ScopeType.Global */) {
                section.collapse();
            }
            else if (!foundLocalScope || scope.type() === "local" /* Protocol.Debugger.ScopeType.Local */) {
                section.expand();
            }
            this.treeOutline.appendChild(section);
            if (i === 0) {
                section.select(/* omitFocus */ true);
            }
        }
        this.sidebarPaneUpdatedForTest();
    }
    createScopeSectionTreeElement(scope) {
        let emptyPlaceholder = null;
        if (scope.type() === "local" /* Protocol.Debugger.ScopeType.Local */ || scope.type() === "closure" /* Protocol.Debugger.ScopeType.Closure */) {
            emptyPlaceholder = i18nString(UIStrings.noVariables);
        }
        let title = scope.typeName();
        if (scope.type() === "closure" /* Protocol.Debugger.ScopeType.Closure */) {
            const scopeName = scope.name();
            if (scopeName) {
                title = i18nString(UIStrings.closureS, { PH1: _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.beautifyFunctionName(scopeName) });
            }
            else {
                title = i18nString(UIStrings.closure);
            }
        }
        let subtitle = scope.description();
        if (!title || title === subtitle) {
            subtitle = null;
        }
        const icon = scope.icon();
        const titleElement = document.createElement('div');
        titleElement.classList.add('scope-chain-sidebar-pane-section-header');
        titleElement.classList.add('tree-element-title');
        if (icon) {
            const iconElement = document.createElement('img');
            iconElement.classList.add('scope-chain-sidebar-pane-section-icon');
            iconElement.src = icon;
            titleElement.appendChild(iconElement);
        }
        titleElement.createChild('div', 'scope-chain-sidebar-pane-section-subtitle').textContent = subtitle;
        titleElement.createChild('div', 'scope-chain-sidebar-pane-section-title').textContent = title;
        const section = new _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_3__.ObjectPropertiesSection.RootElement(scope.object(), this.linkifier, emptyPlaceholder, 0 /* ObjectUI.ObjectPropertiesSection.ObjectPropertiesMode.All */, scope.extraProperties());
        section.title = titleElement;
        section.listItemElement.classList.add('scope-chain-sidebar-pane-section');
        section.listItemElement.setAttribute('aria-label', title);
        this.expandController.watchSection(title + (subtitle ? ':' + subtitle : ''), section);
        return section;
    }
    sidebarPaneUpdatedForTest() {
    }
    wasShown() {
        super.wasShown();
        this.treeOutline.registerCSSFiles([_scopeChainSidebarPane_css_js__WEBPACK_IMPORTED_MODULE_7__["default"]]);
        this.registerCSSFiles([_scopeChainSidebarPane_css_js__WEBPACK_IMPORTED_MODULE_7__["default"]]);
    }
}
//# sourceMappingURL=ScopeChainSidebarPane.js.map

/***/ }),

/***/ "./panels/sources/scopeChainSidebarPane.css.js":
/*!*****************************************************!*\
  !*** ./panels/sources/scopeChainSidebarPane.css.js ***!
  \*****************************************************/
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
 * Copyright 2017 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.scope-chain-sidebar-pane-section-header {
  flex: auto;
}

.scope-chain-sidebar-pane-section-icon {
  float: left;
  margin-right: 5px;
}

.scope-chain-sidebar-pane-section-subtitle {
  float: right;
  margin-left: 5px;
  max-width: 55%;
  text-overflow: ellipsis;
  overflow: hidden;
}

.scope-chain-sidebar-pane-section-title {
  font-weight: normal;
  word-wrap: break-word;
  white-space: normal;
}

.scope-chain-sidebar-pane-section {
  padding: 2px 4px;
  flex: none;
}

/*# sourceURL=scopeChainSidebarPane.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./panels/sources/sources.js":
/*!***********************************!*\
  !*** ./panels/sources/sources.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddSourceMapURLDialog: () => (/* reexport module object */ _AddSourceMapURLDialog_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   BreakpointEditDialog: () => (/* reexport module object */ _BreakpointEditDialog_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   CSSPlugin: () => (/* reexport module object */ _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   CallStackSidebarPane: () => (/* reexport module object */ _CallStackSidebarPane_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   CategorizedBreakpointL10n: () => (/* reexport module object */ _CategorizedBreakpointL10n_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   CoveragePlugin: () => (/* reexport module object */ _CoveragePlugin_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   DebuggerPausedMessage: () => (/* reexport module object */ _DebuggerPausedMessage_js__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   DebuggerPlugin: () => (/* reexport module object */ _DebuggerPlugin_js__WEBPACK_IMPORTED_MODULE_7__),
/* harmony export */   EditingLocationHistoryManager: () => (/* reexport module object */ _EditingLocationHistoryManager_js__WEBPACK_IMPORTED_MODULE_8__),
/* harmony export */   FilePathScoreFunction: () => (/* reexport module object */ _FilePathScoreFunction_js__WEBPACK_IMPORTED_MODULE_9__),
/* harmony export */   FilteredUISourceCodeListProvider: () => (/* reexport module object */ _FilteredUISourceCodeListProvider_js__WEBPACK_IMPORTED_MODULE_10__),
/* harmony export */   GoToLineQuickOpen: () => (/* reexport module object */ _GoToLineQuickOpen_js__WEBPACK_IMPORTED_MODULE_11__),
/* harmony export */   InplaceFormatterEditorAction: () => (/* reexport module object */ _InplaceFormatterEditorAction_js__WEBPACK_IMPORTED_MODULE_12__),
/* harmony export */   NavigatorView: () => (/* reexport module object */ _NavigatorView_js__WEBPACK_IMPORTED_MODULE_13__),
/* harmony export */   OpenFileQuickOpen: () => (/* reexport module object */ _OpenFileQuickOpen_js__WEBPACK_IMPORTED_MODULE_14__),
/* harmony export */   OutlineQuickOpen: () => (/* reexport module object */ _OutlineQuickOpen_js__WEBPACK_IMPORTED_MODULE_15__),
/* harmony export */   Plugin: () => (/* reexport module object */ _Plugin_js__WEBPACK_IMPORTED_MODULE_16__),
/* harmony export */   ResourceOriginPlugin: () => (/* reexport module object */ _ResourceOriginPlugin_js__WEBPACK_IMPORTED_MODULE_17__),
/* harmony export */   ScopeChainSidebarPane: () => (/* reexport module object */ _ScopeChainSidebarPane_js__WEBPACK_IMPORTED_MODULE_18__),
/* harmony export */   SearchSourcesView: () => (/* reexport module object */ _SearchSourcesView_js__WEBPACK_IMPORTED_MODULE_19__),
/* harmony export */   SnippetsPlugin: () => (/* reexport module object */ _SnippetsPlugin_js__WEBPACK_IMPORTED_MODULE_20__),
/* harmony export */   SourcesNavigator: () => (/* reexport module object */ _SourcesNavigator_js__WEBPACK_IMPORTED_MODULE_21__),
/* harmony export */   SourcesPanel: () => (/* reexport module object */ _SourcesPanel_js__WEBPACK_IMPORTED_MODULE_22__),
/* harmony export */   SourcesSearchScope: () => (/* reexport module object */ _SourcesSearchScope_js__WEBPACK_IMPORTED_MODULE_23__),
/* harmony export */   SourcesView: () => (/* reexport module object */ _SourcesView_js__WEBPACK_IMPORTED_MODULE_24__),
/* harmony export */   TabbedEditorContainer: () => (/* reexport module object */ _TabbedEditorContainer_js__WEBPACK_IMPORTED_MODULE_25__),
/* harmony export */   ThreadsSidebarPane: () => (/* reexport module object */ _ThreadsSidebarPane_js__WEBPACK_IMPORTED_MODULE_26__),
/* harmony export */   UISourceCodeFrame: () => (/* reexport module object */ _UISourceCodeFrame_js__WEBPACK_IMPORTED_MODULE_27__),
/* harmony export */   WatchExpressionsSidebarPane: () => (/* reexport module object */ _WatchExpressionsSidebarPane_js__WEBPACK_IMPORTED_MODULE_28__)
/* harmony export */ });
/* harmony import */ var _AddSourceMapURLDialog_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddSourceMapURLDialog.js */ "./panels/sources/AddSourceMapURLDialog.js");
/* harmony import */ var _BreakpointEditDialog_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BreakpointEditDialog.js */ "./panels/sources/BreakpointEditDialog.js");
/* harmony import */ var _CallStackSidebarPane_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CallStackSidebarPane.js */ "./panels/sources/CallStackSidebarPane.js");
/* harmony import */ var _CategorizedBreakpointL10n_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CategorizedBreakpointL10n.js */ "./panels/sources/CategorizedBreakpointL10n.js");
/* harmony import */ var _CoveragePlugin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CoveragePlugin.js */ "./panels/sources/CoveragePlugin.js");
/* harmony import */ var _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CSSPlugin.js */ "./panels/sources/CSSPlugin.js");
/* harmony import */ var _DebuggerPausedMessage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DebuggerPausedMessage.js */ "./panels/sources/DebuggerPausedMessage.js");
/* harmony import */ var _DebuggerPlugin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DebuggerPlugin.js */ "./panels/sources/DebuggerPlugin.js");
/* harmony import */ var _EditingLocationHistoryManager_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./EditingLocationHistoryManager.js */ "./panels/sources/EditingLocationHistoryManager.js");
/* harmony import */ var _FilePathScoreFunction_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FilePathScoreFunction.js */ "./panels/sources/FilePathScoreFunction.js");
/* harmony import */ var _FilteredUISourceCodeListProvider_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FilteredUISourceCodeListProvider.js */ "./panels/sources/FilteredUISourceCodeListProvider.js");
/* harmony import */ var _GoToLineQuickOpen_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./GoToLineQuickOpen.js */ "./panels/sources/GoToLineQuickOpen.js");
/* harmony import */ var _InplaceFormatterEditorAction_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./InplaceFormatterEditorAction.js */ "./panels/sources/InplaceFormatterEditorAction.js");
/* harmony import */ var _NavigatorView_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./NavigatorView.js */ "./panels/sources/NavigatorView.js");
/* harmony import */ var _OpenFileQuickOpen_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./OpenFileQuickOpen.js */ "./panels/sources/OpenFileQuickOpen.js");
/* harmony import */ var _OutlineQuickOpen_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./OutlineQuickOpen.js */ "./panels/sources/OutlineQuickOpen.js");
/* harmony import */ var _Plugin_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Plugin.js */ "./panels/sources/Plugin.js");
/* harmony import */ var _ResourceOriginPlugin_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ResourceOriginPlugin.js */ "./panels/sources/ResourceOriginPlugin.js");
/* harmony import */ var _ScopeChainSidebarPane_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ScopeChainSidebarPane.js */ "./panels/sources/ScopeChainSidebarPane.js");
/* harmony import */ var _SearchSourcesView_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./SearchSourcesView.js */ "./panels/sources/SearchSourcesView.js");
/* harmony import */ var _SnippetsPlugin_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./SnippetsPlugin.js */ "./panels/sources/SnippetsPlugin.js");
/* harmony import */ var _SourcesNavigator_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./SourcesNavigator.js */ "./panels/sources/SourcesNavigator.js");
/* harmony import */ var _SourcesPanel_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./SourcesPanel.js */ "./panels/sources/SourcesPanel.js");
/* harmony import */ var _SourcesSearchScope_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./SourcesSearchScope.js */ "./panels/sources/SourcesSearchScope.js");
/* harmony import */ var _SourcesView_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./SourcesView.js */ "./panels/sources/SourcesView.js");
/* harmony import */ var _TabbedEditorContainer_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./TabbedEditorContainer.js */ "./panels/sources/TabbedEditorContainer.js");
/* harmony import */ var _ThreadsSidebarPane_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./ThreadsSidebarPane.js */ "./panels/sources/ThreadsSidebarPane.js");
/* harmony import */ var _UISourceCodeFrame_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./UISourceCodeFrame.js */ "./panels/sources/UISourceCodeFrame.js");
/* harmony import */ var _WatchExpressionsSidebarPane_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./WatchExpressionsSidebarPane.js */ "./panels/sources/WatchExpressionsSidebarPane.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






























//# sourceMappingURL=sources.js.map

/***/ }),

/***/ "./panels/utils/utils.js":
/*!*******************************!*\
  !*** ./panels/utils/utils.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelUtils: () => (/* binding */ PanelUtils)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _models_formatter_formatter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/formatter/formatter.js */ "./models/formatter/formatter.js");
/* harmony import */ var _ui_components_diff_view_diff_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/diff_view/diff_view.js */ "./ui/components/diff_view/diff_view.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



// These utilities are packaged in a class to allow unittests to stub or spy the implementation.
class PanelUtils {
    static iconDataForResourceType(resourceType) {
        if (resourceType.isDocument()) {
            return { iconName: 'file-document', color: 'var(--icon-file-document)' };
        }
        if (resourceType.isImage()) {
            return { iconName: 'file-image', color: 'var(--icon-file-image)' };
        }
        if (resourceType.isFont()) {
            return { iconName: 'file-font', color: 'var(--icon-file-font)' };
        }
        if (resourceType.isScript()) {
            return { iconName: 'file-script', color: 'var(--icon-file-script)' };
        }
        if (resourceType.isStyleSheet()) {
            return { iconName: 'file-stylesheet', color: 'var(--icon-file-styles)' };
        }
        if (resourceType.name() === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Manifest.name()) {
            return { iconName: 'file-manifest', color: 'var(--icon-default)' };
        }
        if (resourceType.name() === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Wasm.name()) {
            return { iconName: 'file-wasm', color: 'var(--icon-default)' };
        }
        if (resourceType.name() === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.WebSocket.name()) {
            return { iconName: 'file-websocket', color: 'var(--icon-default)' };
        }
        if (resourceType.name() === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Media.name()) {
            return { iconName: 'file-media', color: 'var(--icon-file-media)' };
        }
        if (resourceType.isWebbundle()) {
            return { iconName: 'bundle', color: 'var(--icon-default)' };
        }
        if (resourceType.name() === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Fetch.name() ||
            resourceType.name() === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.XHR.name()) {
            return { iconName: 'file-fetch-xhr', color: 'var(--icon-default)' };
        }
        return { iconName: 'file-generic', color: 'var(--icon-default)' };
    }
    static async formatCSSChangesFromDiff(diff) {
        const indent = '  ';
        const { originalLines, currentLines, rows } = _ui_components_diff_view_diff_view_js__WEBPACK_IMPORTED_MODULE_2__.DiffView.buildDiffRows(diff);
        const originalRuleMaps = await buildStyleRuleMaps(originalLines.join('\n'));
        const currentRuleMaps = await buildStyleRuleMaps(currentLines.join('\n'));
        let changes = '';
        let recordedOriginalSelector, recordedCurrentSelector;
        let hasOpenDeclarationBlock = false;
        for (const { currentLineNumber, originalLineNumber, type } of rows) {
            if (type !== "deletion" /* DiffView.DiffView.RowType.Deletion */ && type !== "addition" /* DiffView.DiffView.RowType.Addition */) {
                continue;
            }
            const isDeletion = type === "deletion" /* DiffView.DiffView.RowType.Deletion */;
            const lines = isDeletion ? originalLines : currentLines;
            // Diff line arrays starts at 0, but line numbers start at 1.
            const lineIndex = isDeletion ? originalLineNumber - 1 : currentLineNumber - 1;
            const line = lines[lineIndex].trim();
            const { declarationIDToStyleRule, styleRuleIDToStyleRule } = isDeletion ? originalRuleMaps : currentRuleMaps;
            let styleRule;
            let prefix = '';
            if (declarationIDToStyleRule.has(lineIndex)) {
                styleRule = declarationIDToStyleRule.get(lineIndex);
                const selector = styleRule.selector;
                // Use the equality of selector strings as a best-effort check for the equality of style rules.
                if (selector !== recordedOriginalSelector && selector !== recordedCurrentSelector) {
                    prefix += `${selector} {\n`;
                }
                prefix += indent;
                hasOpenDeclarationBlock = true;
            }
            else {
                if (hasOpenDeclarationBlock) {
                    prefix = '}\n\n';
                    hasOpenDeclarationBlock = false;
                }
                if (styleRuleIDToStyleRule.has(lineIndex)) {
                    styleRule = styleRuleIDToStyleRule.get(lineIndex);
                }
            }
            const processedLine = isDeletion ? `/* ${line} */` : line;
            changes += prefix + processedLine + '\n';
            if (isDeletion) {
                recordedOriginalSelector = styleRule?.selector;
            }
            else {
                recordedCurrentSelector = styleRule?.selector;
            }
        }
        if (changes.length > 0) {
            changes += '}';
        }
        return changes;
    }
    static highlightElement(element) {
        element.scrollIntoViewIfNeeded();
        element.animate([
            { offset: 0, backgroundColor: 'rgba(255, 255, 0, 0.2)' },
            { offset: 0.1, backgroundColor: 'rgba(255, 255, 0, 0.7)' },
            { offset: 1, backgroundColor: 'transparent' },
        ], { duration: 2000, easing: 'cubic-bezier(0, 0, 0.2, 1)' });
    }
}
async function buildStyleRuleMaps(content) {
    const rules = await new Promise(res => {
        const rules = [];
        _models_formatter_formatter_js__WEBPACK_IMPORTED_MODULE_1__.FormatterWorkerPool.formatterWorkerPool().parseCSS(content, (isLastChunk, currentRules) => {
            rules.push(...currentRules);
            if (isLastChunk) {
                res(rules);
            }
        });
    });
    // We use line numbers as unique IDs for rules and declarations
    const declarationIDToStyleRule = new Map();
    const styleRuleIDToStyleRule = new Map();
    for (const rule of rules) {
        if ('styleRange' in rule) {
            const selector = rule.selectorText.split('\n').pop()?.trim();
            if (!selector) {
                continue;
            }
            const styleRule = { rule, selector };
            styleRuleIDToStyleRule.set(rule.styleRange.startLine, styleRule);
            for (const property of rule.properties) {
                declarationIDToStyleRule.set(property.range.startLine, styleRule);
            }
        }
    }
    return { declarationIDToStyleRule, styleRuleIDToStyleRule };
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./ui/components/diff_view/diff_view.js":
/*!**********************************************!*\
  !*** ./ui/components/diff_view/diff_view.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DiffView: () => (/* reexport module object */ _DiffView_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _DiffView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DiffView.js */ "./ui/components/diff_view/DiffView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

//# sourceMappingURL=diff_view.js.map

/***/ })

}]);