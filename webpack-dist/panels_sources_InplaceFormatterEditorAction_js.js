"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_sources_InplaceFormatterEditorAction_js"],{

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

/***/ })

}]);