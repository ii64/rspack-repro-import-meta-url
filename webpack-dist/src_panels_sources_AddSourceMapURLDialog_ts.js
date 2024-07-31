"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_sources_AddSourceMapURLDialog_ts"],{

/***/ "./src/panels/sources/AddSourceMapURLDialog.ts":
/*!*****************************************************!*\
  !*** ./src/panels/sources/AddSourceMapURLDialog.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddDebugInfoURLDialog: () => (/* binding */ AddDebugInfoURLDialog)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './dialog.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



const UIStrings = {
    /**
     *@description Text in Add Source Map URLDialog of the Sources panel
     */
    sourceMapUrl: 'Source map URL: ',
    /**
     *@description Text in Add Debug Info URL Dialog of the Sources panel
     */
    debugInfoUrl: 'DWARF symbols URL: ',
    /**
     *@description Text to add something
     */
    add: 'Add',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/sources/AddSourceMapURLDialog.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class AddDebugInfoURLDialog extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.Widget.HBox {
    constructor(label, jslogContext, callback) {
        super(/* isWebComponent */ true);
        Object.defineProperty(this, "input", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "dialog", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "callback", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.contentElement.createChild('label').textContent = label;
        this.input = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.createInput('add-source-map', 'text', 'url');
        this.input.addEventListener('keydown', this.onKeyDown.bind(this), false);
        this.contentElement.appendChild(this.input);
        const addButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.createTextButton(i18nString(UIStrings.add), this.apply.bind(this), {
            jslogContext: 'add',
        });
        this.contentElement.appendChild(addButton);
        this.dialog = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.Dialog.Dialog(jslogContext);
        this.dialog.setSizeBehavior(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.GlassPane.SizeBehavior.MeasureContent);
        this.dialog.setDefaultFocusedElement(this.input);
        this.callback = callback;
    }
    static createAddSourceMapURLDialog(callback) {
        return new AddDebugInfoURLDialog(i18nString(UIStrings.sourceMapUrl), 'add-source-map-url', callback);
    }
    static createAddDWARFSymbolsURLDialog(callback) {
        return new AddDebugInfoURLDialog(i18nString(UIStrings.debugInfoUrl), 'add-debug-info-url', callback);
    }
    show() {
        super.show(this.dialog.contentElement);
        // UI.Dialog extends GlassPane and overrides the `show` method with a wider
        // accepted type. However, TypeScript uses the supertype declaration to
        // determine the full type, which requires a `!Document`.
        // @ts-ignore
        this.dialog.show();
    }
    done(value) {
        this.dialog.hide();
        this.callback(value);
    }
    apply() {
        this.done(this.input.value);
    }
    onKeyDown(event) {
        if (event.key === 'Enter') {
            event.consume(true);
            this.apply();
        }
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './dialog.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
    }
}


/***/ })

}]);