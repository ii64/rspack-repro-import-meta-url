"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_sources_SnippetsPlugin_ts"],{

/***/ "./src/panels/sources/Plugin.ts":
/*!**************************************!*\
  !*** ./src/panels/sources/Plugin.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Plugin: () => (/* binding */ Plugin)
/* harmony export */ });
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class Plugin {
    constructor(uiSourceCode, _transformer) {
        Object.defineProperty(this, "uiSourceCode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: uiSourceCode
        });
    }
    static accepts(_uiSourceCode) {
        return false;
    }
    willHide() {
    }
    rightToolbarItems() {
        return [];
    }
    /**
     *
     * TODO(szuend): It is OK to asyncify this function (similar to {rightToolbarItems}),
     *               but it is currently not strictly necessary.
     */
    leftToolbarItems() {
        return [];
    }
    populateLineGutterContextMenu(_contextMenu, _lineNumber) {
    }
    populateTextAreaContextMenu(_contextMenu, _lineNumber, _columnNumber) {
    }
    decorationChanged(_type, _editor) {
    }
    editorExtension() {
        return [];
    }
    editorInitialized(_editor) {
    }
    dispose() {
    }
}


/***/ }),

/***/ "./src/panels/sources/SnippetsPlugin.ts":
/*!**********************************************!*\
  !*** ./src/panels/sources/SnippetsPlugin.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SnippetsPlugin: () => (/* binding */ SnippetsPlugin)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/text_editor/text_editor.js */ "./src/ui/components/text_editor/text_editor.ts");
/* harmony import */ var _snippets_snippets_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../snippets/snippets.js */ "./src/panels/snippets/snippets.ts");
/* harmony import */ var _Plugin_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Plugin.js */ "./src/panels/sources/Plugin.ts");
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






const UIStrings = {
    /**
     *@description Text in Snippets Plugin of the Sources panel
     */
    enter: '⌘+Enter',
    /**
     *@description Text in Snippets Plugin of the Sources panel
     */
    ctrlenter: 'Ctrl+Enter',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/sources/SnippetsPlugin.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class SnippetsPlugin extends _Plugin_js__WEBPACK_IMPORTED_MODULE_5__.Plugin {
    static accepts(uiSourceCode) {
        return _snippets_snippets_js__WEBPACK_IMPORTED_MODULE_4__.ScriptSnippetFileSystem.isSnippetsUISourceCode(uiSourceCode);
    }
    rightToolbarItems() {
        const runSnippet = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Toolbar.Toolbar.createActionButtonForId('debugger.run-snippet');
        runSnippet.setText(_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.Platform.isMac() ? i18nString(UIStrings.enter) : i18nString(UIStrings.ctrlenter));
        return [runSnippet];
    }
    editorExtension() {
        return _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_3__.JavaScript.completion();
    }
}


/***/ })

}]);