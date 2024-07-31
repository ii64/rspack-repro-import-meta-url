"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_preloading_components_PreloadingMismatchedHeadersGrid_ts"],{

/***/ "./src/panels/application/preloading/components/PreloadingMismatchedHeadersGrid.ts":
/*!*****************************************************************************************!*\
  !*** ./src/panels/application/preloading/components/PreloadingMismatchedHeadersGrid.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PreloadingMismatchedHeadersGrid: () => (/* binding */ PreloadingMismatchedHeadersGrid),
/* harmony export */   i18nString: () => (/* binding */ i18nString)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../ui/components/data_grid/data_grid.js */ "./src/ui/components/data_grid/data_grid.ts");
/* harmony import */ var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./src/ui/components/legacy_wrapper/legacy_wrapper.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './preloadingGrid.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2023 The Chromium Authors. All rights reserved.
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
var _PreloadingMismatchedHeadersGrid_instances, _PreloadingMismatchedHeadersGrid_shadow, _PreloadingMismatchedHeadersGrid_data, _PreloadingMismatchedHeadersGrid_render, _PreloadingMismatchedHeadersGrid_buildReportRows;






const UIStrings = {
    /**
     *@description The name of the HTTP request header.
     */
    headerName: 'Header name',
    /**
     *@description The value of the HTTP request header in initial navigation.
     */
    initialNavigationValue: 'Value in initial navigation',
    /**
     *@description The value of the HTTP request header in activation navigation.
     */
    activationNavigationValue: 'Value in activation navigation',
    /**
     *@description The string to indicate the value of the header is missing.
     */
    missing: '(missing)',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/application/preloading/components/PreloadingMismatchedHeadersGrid.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
const { render, html } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__;
class PreloadingMismatchedHeadersGrid extends _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_3__.LegacyWrapper.WrappableComponent {
    constructor() {
        super(...arguments);
        _PreloadingMismatchedHeadersGrid_instances.add(this);
        _PreloadingMismatchedHeadersGrid_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _PreloadingMismatchedHeadersGrid_data.set(this, null);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _PreloadingMismatchedHeadersGrid_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './preloadingGrid.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _PreloadingMismatchedHeadersGrid_instances, "m", _PreloadingMismatchedHeadersGrid_render).call(this);
    }
    set data(data) {
        if (data.mismatchedHeaders === null) {
            return;
        }
        __classPrivateFieldSet(this, _PreloadingMismatchedHeadersGrid_data, data, "f");
        __classPrivateFieldGet(this, _PreloadingMismatchedHeadersGrid_instances, "m", _PreloadingMismatchedHeadersGrid_render).call(this);
    }
}
_PreloadingMismatchedHeadersGrid_shadow = new WeakMap(), _PreloadingMismatchedHeadersGrid_data = new WeakMap(), _PreloadingMismatchedHeadersGrid_instances = new WeakSet(), _PreloadingMismatchedHeadersGrid_render = function _PreloadingMismatchedHeadersGrid_render() {
    if (__classPrivateFieldGet(this, _PreloadingMismatchedHeadersGrid_data, "f") === null) {
        return;
    }
    const reportsGridData = {
        columns: [
            {
                id: 'header-name',
                title: i18nString(UIStrings.headerName),
                widthWeighting: 30,
                hideable: false,
                visible: true,
                sortable: true,
            },
            {
                id: 'initial-value',
                title: i18nString(UIStrings.initialNavigationValue),
                widthWeighting: 30,
                hideable: false,
                visible: true,
                sortable: true,
            },
            {
                id: 'activation-value',
                title: i18nString(UIStrings.activationNavigationValue),
                widthWeighting: 30,
                hideable: false,
                visible: true,
                sortable: true,
            },
        ],
        rows: __classPrivateFieldGet(this, _PreloadingMismatchedHeadersGrid_instances, "m", _PreloadingMismatchedHeadersGrid_buildReportRows).call(this),
        striped: true,
    };
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    render(html `
        <div class="preloading-container">
          <${_ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_2__.DataGridController.DataGridController.litTagName} .data=${reportsGridData}>
          </${_ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_2__.DataGridController.DataGridController.litTagName}>
        </div>
      `, __classPrivateFieldGet(this, _PreloadingMismatchedHeadersGrid_shadow, "f"), { host: this });
    // clang-format on
}, _PreloadingMismatchedHeadersGrid_buildReportRows = function _PreloadingMismatchedHeadersGrid_buildReportRows() {
    (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.assertNotNullOrUndefined)(__classPrivateFieldGet(this, _PreloadingMismatchedHeadersGrid_data, "f"));
    (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.assertNotNullOrUndefined)(__classPrivateFieldGet(this, _PreloadingMismatchedHeadersGrid_data, "f").mismatchedHeaders);
    return __classPrivateFieldGet(this, _PreloadingMismatchedHeadersGrid_data, "f").mismatchedHeaders.map(mismatchedHeaders => ({
        cells: [
            {
                columnId: 'header-name',
                value: mismatchedHeaders.headerName,
            },
            {
                columnId: 'initial-value',
                value: mismatchedHeaders.initialValue ?? i18nString(UIStrings.missing),
            },
            {
                columnId: 'activation-value',
                value: mismatchedHeaders.activationValue ?? i18nString(UIStrings.missing),
            },
        ],
    }));
};
Object.defineProperty(PreloadingMismatchedHeadersGrid, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.literal `devtools-resources-preloading-mismatched-headers-grid`
});
customElements.define('devtools-resources-preloading-mismatched-headers-grid', PreloadingMismatchedHeadersGrid);


/***/ })

}]);