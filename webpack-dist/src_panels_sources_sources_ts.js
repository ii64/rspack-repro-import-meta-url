"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_sources_sources_ts"],{

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


/***/ }),

/***/ "./src/panels/sources/InplaceFormatterEditorAction.ts":
/*!************************************************************!*\
  !*** ./src/panels/sources/InplaceFormatterEditorAction.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InplaceFormatterEditorAction: () => (/* binding */ InplaceFormatterEditorAction)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _models_formatter_formatter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/formatter/formatter.js */ "./src/models/formatter/formatter.ts");
/* harmony import */ var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/persistence/persistence.js */ "./src/models/persistence/persistence.ts");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./src/models/workspace/workspace.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _SourcesView_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SourcesView.js */ "./src/panels/sources/SourcesView.ts");
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
    constructor() {
        Object.defineProperty(this, "button", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "sourcesView", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "uiSourceCodeTitleChangedEvent", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
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
        this.sourcesView.addEventListener(_SourcesView_js__WEBPACK_IMPORTED_MODULE_6__.Events.EditorSelected, this.editorSelected.bind(this));
        this.sourcesView.addEventListener(_SourcesView_js__WEBPACK_IMPORTED_MODULE_6__.Events.EditorClosed, this.editorClosed.bind(this));
        this.button = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.ToolbarButton(i18nString(UIStrings.format), 'brackets');
        this.button.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.ToolbarButton.Events.Click, this.formatSourceInPlace, this);
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


/***/ }),

/***/ "./src/panels/sources/OpenFileQuickOpen.ts":
/*!*************************************************!*\
  !*** ./src/panels/sources/OpenFileQuickOpen.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OpenFileQuickOpen: () => (/* binding */ OpenFileQuickOpen)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _panels_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../panels/utils/utils.js */ "./src/panels/utils/utils.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _FilteredUISourceCodeListProvider_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FilteredUISourceCodeListProvider.js */ "./src/panels/sources/FilteredUISourceCodeListProvider.ts");
/* harmony import */ var _SourcesView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SourcesView.js */ "./src/panels/sources/SourcesView.ts");
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


/***/ }),

/***/ "./src/panels/sources/ScopeChainSidebarPane.ts":
/*!*****************************************************!*\
  !*** ./src/panels/sources/ScopeChainSidebarPane.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScopeChainSidebarPane: () => (/* binding */ ScopeChainSidebarPane)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _models_source_map_scopes_source_map_scopes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/source_map_scopes/source_map_scopes.js */ "./src/models/source_map_scopes/source_map_scopes.ts");
/* harmony import */ var _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/object_ui/object_ui.js */ "./src/ui/legacy/components/object_ui/object_ui.ts");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./src/ui/legacy/components/utils/utils.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './scopeChainSidebarPane.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2021 The Chromium Authors. All rights reserved.
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
var _ScopeChainSidebarPane_scopeChainModel;









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
class ScopeChainSidebarPane extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Widget.VBox {
    constructor() {
        super(true);
        Object.defineProperty(this, "treeOutline", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "expandController", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "linkifier", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "infoElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _ScopeChainSidebarPane_scopeChainModel.set(this, null);
        this.contentElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.section('sources.scope-chain')}`);
        this.treeOutline = new _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_4__.ObjectPropertiesSection.ObjectPropertiesSectionsTreeOutline();
        this.treeOutline.hideOverflow();
        this.treeOutline.setShowSelectionOnKeyboardFocus(/* show */ true);
        this.expandController =
            new _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_4__.ObjectPropertiesSection.ObjectPropertiesSectionsTreeExpandController(this.treeOutline);
        this.linkifier = new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_5__.Linkifier.Linkifier();
        this.infoElement = document.createElement('div');
        this.infoElement.className = 'gray-info-message';
        this.infoElement.tabIndex = -1;
        this.flavorChanged(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.CallFrame));
    }
    static instance() {
        if (!scopeChainSidebarPaneInstance) {
            scopeChainSidebarPaneInstance = new ScopeChainSidebarPane();
        }
        return scopeChainSidebarPaneInstance;
    }
    flavorChanged(callFrame) {
        __classPrivateFieldGet(this, _ScopeChainSidebarPane_scopeChainModel, "f")?.dispose();
        __classPrivateFieldSet(this, _ScopeChainSidebarPane_scopeChainModel, null, "f");
        this.linkifier.reset();
        this.contentElement.removeChildren();
        this.contentElement.appendChild(this.infoElement);
        if (callFrame) {
            // Resolving the scope may take a while to complete, so indicate to the user that something
            // is happening (see https://crbug.com/1162416).
            this.infoElement.textContent = i18nString(UIStrings.loading);
            __classPrivateFieldSet(this, _ScopeChainSidebarPane_scopeChainModel, new _models_source_map_scopes_source_map_scopes_js__WEBPACK_IMPORTED_MODULE_3__.ScopeChainModel.ScopeChainModel(callFrame), "f");
            __classPrivateFieldGet(this, _ScopeChainSidebarPane_scopeChainModel, "f").addEventListener(_models_source_map_scopes_source_map_scopes_js__WEBPACK_IMPORTED_MODULE_3__.ScopeChainModel.Events.ScopeChainUpdated, event => this.buildScopeTreeOutline(event.data), this);
        }
        else {
            this.infoElement.textContent = i18nString(UIStrings.notPaused);
        }
    }
    focus() {
        if (this.hasFocus()) {
            return;
        }
        if (_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerPausedDetails)) {
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
            if (scope.type() === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Debugger.ScopeType.Local) {
                foundLocalScope = true;
            }
            const section = this.createScopeSectionTreeElement(scope);
            if (scope.type() === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Debugger.ScopeType.Global) {
                section.collapse();
            }
            else if (!foundLocalScope || scope.type() === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Debugger.ScopeType.Local) {
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
        if (scope.type() === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Debugger.ScopeType.Local || scope.type() === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Debugger.ScopeType.Closure) {
            emptyPlaceholder = i18nString(UIStrings.noVariables);
        }
        let title = scope.typeName();
        if (scope.type() === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Debugger.ScopeType.Closure) {
            const scopeName = scope.name();
            if (scopeName) {
                title = i18nString(UIStrings.closureS, { PH1: _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.beautifyFunctionName(scopeName) });
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
        const section = new _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_4__.ObjectPropertiesSection.RootElement(scope.object(), this.linkifier, emptyPlaceholder, _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_4__.ObjectPropertiesSection.ObjectPropertiesMode.All, scope.extraProperties());
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
        this.treeOutline.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './scopeChainSidebarPane.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './scopeChainSidebarPane.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
    }
}
_ScopeChainSidebarPane_scopeChainModel = new WeakMap();


/***/ }),

/***/ "./src/panels/sources/sources.ts":
/*!***************************************!*\
  !*** ./src/panels/sources/sources.ts ***!
  \***************************************/
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
/* harmony import */ var _AddSourceMapURLDialog_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddSourceMapURLDialog.js */ "./src/panels/sources/AddSourceMapURLDialog.ts");
/* harmony import */ var _BreakpointEditDialog_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BreakpointEditDialog.js */ "./src/panels/sources/BreakpointEditDialog.ts");
/* harmony import */ var _CallStackSidebarPane_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CallStackSidebarPane.js */ "./src/panels/sources/CallStackSidebarPane.ts");
/* harmony import */ var _CategorizedBreakpointL10n_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CategorizedBreakpointL10n.js */ "./src/panels/sources/CategorizedBreakpointL10n.ts");
/* harmony import */ var _CoveragePlugin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CoveragePlugin.js */ "./src/panels/sources/CoveragePlugin.ts");
/* harmony import */ var _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CSSPlugin.js */ "./src/panels/sources/CSSPlugin.ts");
/* harmony import */ var _DebuggerPausedMessage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DebuggerPausedMessage.js */ "./src/panels/sources/DebuggerPausedMessage.ts");
/* harmony import */ var _DebuggerPlugin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DebuggerPlugin.js */ "./src/panels/sources/DebuggerPlugin.ts");
/* harmony import */ var _EditingLocationHistoryManager_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./EditingLocationHistoryManager.js */ "./src/panels/sources/EditingLocationHistoryManager.ts");
/* harmony import */ var _FilePathScoreFunction_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FilePathScoreFunction.js */ "./src/panels/sources/FilePathScoreFunction.ts");
/* harmony import */ var _FilteredUISourceCodeListProvider_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FilteredUISourceCodeListProvider.js */ "./src/panels/sources/FilteredUISourceCodeListProvider.ts");
/* harmony import */ var _GoToLineQuickOpen_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./GoToLineQuickOpen.js */ "./src/panels/sources/GoToLineQuickOpen.ts");
/* harmony import */ var _InplaceFormatterEditorAction_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./InplaceFormatterEditorAction.js */ "./src/panels/sources/InplaceFormatterEditorAction.ts");
/* harmony import */ var _NavigatorView_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./NavigatorView.js */ "./src/panels/sources/NavigatorView.ts");
/* harmony import */ var _OpenFileQuickOpen_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./OpenFileQuickOpen.js */ "./src/panels/sources/OpenFileQuickOpen.ts");
/* harmony import */ var _OutlineQuickOpen_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./OutlineQuickOpen.js */ "./src/panels/sources/OutlineQuickOpen.ts");
/* harmony import */ var _Plugin_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Plugin.js */ "./src/panels/sources/Plugin.ts");
/* harmony import */ var _ResourceOriginPlugin_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ResourceOriginPlugin.js */ "./src/panels/sources/ResourceOriginPlugin.ts");
/* harmony import */ var _ScopeChainSidebarPane_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ScopeChainSidebarPane.js */ "./src/panels/sources/ScopeChainSidebarPane.ts");
/* harmony import */ var _SearchSourcesView_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./SearchSourcesView.js */ "./src/panels/sources/SearchSourcesView.ts");
/* harmony import */ var _SnippetsPlugin_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./SnippetsPlugin.js */ "./src/panels/sources/SnippetsPlugin.ts");
/* harmony import */ var _SourcesNavigator_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./SourcesNavigator.js */ "./src/panels/sources/SourcesNavigator.ts");
/* harmony import */ var _SourcesPanel_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./SourcesPanel.js */ "./src/panels/sources/SourcesPanel.ts");
/* harmony import */ var _SourcesSearchScope_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./SourcesSearchScope.js */ "./src/panels/sources/SourcesSearchScope.ts");
/* harmony import */ var _SourcesView_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./SourcesView.js */ "./src/panels/sources/SourcesView.ts");
/* harmony import */ var _TabbedEditorContainer_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./TabbedEditorContainer.js */ "./src/panels/sources/TabbedEditorContainer.ts");
/* harmony import */ var _ThreadsSidebarPane_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./ThreadsSidebarPane.js */ "./src/panels/sources/ThreadsSidebarPane.ts");
/* harmony import */ var _UISourceCodeFrame_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./UISourceCodeFrame.js */ "./src/panels/sources/UISourceCodeFrame.ts");
/* harmony import */ var _WatchExpressionsSidebarPane_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./WatchExpressionsSidebarPane.js */ "./src/panels/sources/WatchExpressionsSidebarPane.ts");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
































/***/ }),

/***/ "./src/panels/utils/utils.ts":
/*!***********************************!*\
  !*** ./src/panels/utils/utils.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelUtils: () => (/* binding */ PanelUtils)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _models_formatter_formatter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/formatter/formatter.js */ "./src/models/formatter/formatter.ts");
/* harmony import */ var _ui_components_diff_view_diff_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/diff_view/diff_view.js */ "./src/ui/components/diff_view/diff_view.ts");
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
            if (type !== _ui_components_diff_view_diff_view_js__WEBPACK_IMPORTED_MODULE_2__.DiffView.RowType.Deletion && type !== _ui_components_diff_view_diff_view_js__WEBPACK_IMPORTED_MODULE_2__.DiffView.RowType.Addition) {
                continue;
            }
            const isDeletion = type === _ui_components_diff_view_diff_view_js__WEBPACK_IMPORTED_MODULE_2__.DiffView.RowType.Deletion;
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


/***/ }),

/***/ "./src/ui/components/diff_view/diff_view.ts":
/*!**************************************************!*\
  !*** ./src/ui/components/diff_view/diff_view.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DiffView: () => (/* reexport module object */ _DiffView_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _DiffView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DiffView.js */ "./src/ui/components/diff_view/DiffView.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



/***/ })

}]);