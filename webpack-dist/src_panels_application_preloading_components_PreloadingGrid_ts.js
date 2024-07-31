"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_preloading_components_PreloadingGrid_ts"],{

/***/ "./src/panels/application/preloading/components/PreloadingGrid.ts":
/*!************************************************************************!*\
  !*** ./src/panels/application/preloading/components/PreloadingGrid.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PreloadingGrid: () => (/* binding */ PreloadingGrid),
/* harmony export */   i18nString: () => (/* binding */ i18nString)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ui/components/data_grid/data_grid.js */ "./src/ui/components/data_grid/data_grid.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./src/ui/components/legacy_wrapper/legacy_wrapper.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './preloadingGrid.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _PreloadingString_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PreloadingString.js */ "./src/panels/application/preloading/components/PreloadingString.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
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
var _PreloadingGrid_instances, _PreloadingGrid_shadow, _PreloadingGrid_data, _PreloadingGrid_render, _PreloadingGrid_buildReportRows, _PreloadingGrid_urlShort;










const UIStrings = {
    /**
     *@description Column header: Action of preloading (prefetch/prerender)
     */
    action: 'Action',
    /**
     *@description Column header: A rule set of preloading
     */
    ruleSet: 'Rule set',
    /**
     *@description Column header: Status of preloading attempt
     */
    status: 'Status',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/application/preloading/components/PreloadingGrid.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
const { render, html } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__;
// Grid component to show prerendering attempts.
class PreloadingGrid extends _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_6__.LegacyWrapper.WrappableComponent {
    constructor() {
        super(...arguments);
        _PreloadingGrid_instances.add(this);
        _PreloadingGrid_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _PreloadingGrid_data.set(this, null);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _PreloadingGrid_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './preloadingGrid.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _PreloadingGrid_instances, "m", _PreloadingGrid_render).call(this);
    }
    update(data) {
        __classPrivateFieldSet(this, _PreloadingGrid_data, data, "f");
        __classPrivateFieldGet(this, _PreloadingGrid_instances, "m", _PreloadingGrid_render).call(this);
    }
}
_PreloadingGrid_shadow = new WeakMap(), _PreloadingGrid_data = new WeakMap(), _PreloadingGrid_instances = new WeakSet(), _PreloadingGrid_render = function _PreloadingGrid_render() {
    if (__classPrivateFieldGet(this, _PreloadingGrid_data, "f") === null) {
        return;
    }
    const reportsGridData = {
        columns: [
            {
                id: 'url',
                title: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString('URL'),
                widthWeighting: 40,
                hideable: false,
                visible: true,
                sortable: true,
            },
            {
                id: 'action',
                title: i18nString(UIStrings.action),
                widthWeighting: 15,
                hideable: false,
                visible: true,
                sortable: true,
            },
            {
                id: 'rule-set',
                title: i18nString(UIStrings.ruleSet),
                widthWeighting: 20,
                hideable: false,
                visible: true,
                sortable: true,
            },
            {
                id: 'status',
                title: i18nString(UIStrings.status),
                widthWeighting: 40,
                hideable: false,
                visible: true,
                sortable: true,
            },
        ],
        rows: __classPrivateFieldGet(this, _PreloadingGrid_instances, "m", _PreloadingGrid_buildReportRows).call(this),
        striped: true,
    };
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    render(html `
      <div class="preloading-container">
        <${_ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__.DataGridController.DataGridController.litTagName} .data=${reportsGridData}>
        </${_ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__.DataGridController.DataGridController.litTagName}>
      </div>
    `, __classPrivateFieldGet(this, _PreloadingGrid_shadow, "f"), { host: this });
    // clang-format on
}, _PreloadingGrid_buildReportRows = function _PreloadingGrid_buildReportRows() {
    function statusRenderer(statusString, status) {
        if (status !== _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.PreloadingModel.PreloadingStatus.Failure) {
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `<div>${statusString}</div>`;
        }
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `
        <div
          style=${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.Directives.styleMap({
            color: 'var(--sys-color-error)',
        })}
        >
          <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon.litTagName}
            .data=${{
            iconName: 'cross-circle-filled',
            color: 'var(--sys-color-error)',
            width: '16px',
            height: '16px',
        }}
            style=${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.Directives.styleMap({
            'vertical-align': 'sub',
        })}
          >
          </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon.litTagName}>
          ${statusString}
        </div>
      `;
        // clang-format on
    }
    (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.assertNotNullOrUndefined)(__classPrivateFieldGet(this, _PreloadingGrid_data, "f"));
    const pageURL = __classPrivateFieldGet(this, _PreloadingGrid_data, "f").pageURL;
    const securityOrigin = pageURL === '' ? null : (new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL(pageURL)).securityOrigin();
    return __classPrivateFieldGet(this, _PreloadingGrid_data, "f").rows.map(row => ({
        cells: [
            { columnId: 'id', value: row.id },
            {
                columnId: 'url',
                value: __classPrivateFieldGet(this, _PreloadingGrid_instances, "m", _PreloadingGrid_urlShort).call(this, row, securityOrigin),
                title: row.attempt.key.url,
            },
            { columnId: 'action', value: _PreloadingString_js__WEBPACK_IMPORTED_MODULE_9__.capitalizedAction(row.attempt.action) },
            {
                columnId: 'rule-set',
                value: row.ruleSets.length === 0 ? '' : _PreloadingString_js__WEBPACK_IMPORTED_MODULE_9__.ruleSetLocationShort(row.ruleSets[0], pageURL),
            },
            {
                columnId: 'status',
                value: _PreloadingString_js__WEBPACK_IMPORTED_MODULE_9__.composedStatus(row.attempt),
                renderer: status => statusRenderer(status, row.attempt.status),
            },
        ],
    }));
}, _PreloadingGrid_urlShort = function _PreloadingGrid_urlShort(row, securityOrigin) {
    const url = row.attempt.key.url;
    return securityOrigin && url.startsWith(securityOrigin) ? url.slice(securityOrigin.length) : url;
};
Object.defineProperty(PreloadingGrid, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.literal `devtools-resources-preloading-grid`
});
customElements.define('devtools-resources-preloading-grid', PreloadingGrid);


/***/ })

}]);