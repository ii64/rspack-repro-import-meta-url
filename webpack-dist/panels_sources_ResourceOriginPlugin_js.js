"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_sources_ResourceOriginPlugin_js"],{

/***/ "./panels/sources/Plugin.js":
/*!**********************************!*\
  !*** ./panels/sources/Plugin.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Plugin: () => (/* binding */ Plugin)
/* harmony export */ });
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class Plugin {
    uiSourceCode;
    constructor(uiSourceCode, _transformer) {
        this.uiSourceCode = uiSourceCode;
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
//# sourceMappingURL=Plugin.js.map

/***/ }),

/***/ "./panels/sources/ResourceOriginPlugin.js":
/*!************************************************!*\
  !*** ./panels/sources/ResourceOriginPlugin.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResourceOriginPlugin: () => (/* binding */ ResourceOriginPlugin),
/* harmony export */   linkifier: () => (/* binding */ linkifier)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _Plugin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Plugin.js */ "./panels/sources/Plugin.js");
// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





const UIStrings = {
    /**
     * @description Text in the bottom toolbar of the Sources panel that lists the source mapped origin scripts.
     * @example {bundle.min.js} PH1
     */
    fromS: '(From {PH1})',
    /**
     * @description Tooltip text for links in the bottom toolbar of the Sources panel that point to source mapped scripts.
     * @example {bundle.min.js} PH1
     */
    sourceMappedFromS: '(Source mapped from {PH1})',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/sources/ResourceOriginPlugin.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class ResourceOriginPlugin extends _Plugin_js__WEBPACK_IMPORTED_MODULE_4__.Plugin {
    static accepts(uiSourceCode) {
        const contentType = uiSourceCode.contentType();
        return contentType.hasScripts() || contentType.isFromSourceMap();
    }
    rightToolbarItems() {
        const debuggerWorkspaceBinding = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance();
        // Handle source mapped scripts and stylesheets.
        if (this.uiSourceCode.contentType().isFromSourceMap()) {
            const links = [];
            for (const script of debuggerWorkspaceBinding.scriptsForUISourceCode(this.uiSourceCode)) {
                const uiSourceCode = debuggerWorkspaceBinding.uiSourceCodeForScript(script);
                if (!uiSourceCode) {
                    continue;
                }
                const url = uiSourceCode.url();
                const text = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.ResourceUtils.displayNameForURL(url);
                const title = i18nString(UIStrings.sourceMappedFromS, { PH1: text });
                links.push(_ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.Linkifier.Linkifier.linkifyRevealable(uiSourceCode, text, url, title, undefined, 'original-script-location'));
            }
            for (const originURL of _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.SASSSourceMapping.SASSSourceMapping.uiSourceOrigin(this.uiSourceCode)) {
                links.push(_ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.Linkifier.Linkifier.linkifyURL(originURL));
            }
            if (links.length === 0) {
                return [];
            }
            const element = document.createElement('span');
            links.forEach((link, index) => {
                if (index > 0) {
                    element.append(', ');
                }
                element.append(link);
            });
            return [new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Toolbar.ToolbarItem(_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getFormatLocalizedString(str_, UIStrings.fromS, { PH1: element }))];
        }
        // Handle anonymous scripts with an originStackTrace.
        for (const script of debuggerWorkspaceBinding.scriptsForUISourceCode(this.uiSourceCode)) {
            if (script.originStackTrace) {
                const link = linkifier.linkifyStackTraceTopFrame(script.debuggerModel.target(), script.originStackTrace);
                return [new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Toolbar.ToolbarItem(_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getFormatLocalizedString(str_, UIStrings.fromS, { PH1: link }))];
            }
        }
        return [];
    }
}
const linkifier = new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.Linkifier.Linkifier();
//# sourceMappingURL=ResourceOriginPlugin.js.map

/***/ })

}]);