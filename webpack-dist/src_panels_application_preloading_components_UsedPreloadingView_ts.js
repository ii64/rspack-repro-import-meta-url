"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_preloading_components_UsedPreloadingView_ts"],{

/***/ "./src/panels/application/preloading/components/MismatchedPreloadingGrid.ts":
/*!**********************************************************************************!*\
  !*** ./src/panels/application/preloading/components/MismatchedPreloadingGrid.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MismatchedPreloadingGrid: () => (/* binding */ MismatchedPreloadingGrid),
/* harmony export */   i18nString: () => (/* binding */ i18nString)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../third_party/diff/diff.js */ "./src/third_party/diff/diff.ts");
/* harmony import */ var _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ui/components/data_grid/data_grid.js */ "./src/ui/components/data_grid/data_grid.ts");
/* harmony import */ var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./src/ui/components/legacy_wrapper/legacy_wrapper.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _PreloadingString_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PreloadingString.js */ "./src/panels/application/preloading/components/PreloadingString.ts");
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
var _MismatchedPreloadingGrid_instances, _MismatchedPreloadingGrid_shadow, _MismatchedPreloadingGrid_data, _MismatchedPreloadingGrid_render, _MismatchedPreloadingGrid_buildReportRows;








const UIStrings = {
    /**
     *@description Column header
     */
    url: 'URL',
    /**
     *@description Column header: Action of preloading (prefetch/prerender)
     */
    action: 'Action',
    /**
     *@description Column header: Status of preloading attempt
     */
    status: 'Status',
    /**
     *@description Text in grid and details: Preloading attempt is not yet triggered.
     */
    statusNotTriggered: 'Not triggered',
    /**
     *@description Text in grid and details: Preloading attempt is eligible but pending.
     */
    statusPending: 'Pending',
    /**
     *@description Text in grid and details: Preloading is running.
     */
    statusRunning: 'Running',
    /**
     *@description Text in grid and details: Preloading finished and the result is ready for the next navigation.
     */
    statusReady: 'Ready',
    /**
     *@description Text in grid and details: Ready, then used.
     */
    statusSuccess: 'Success',
    /**
     *@description Text in grid and details: Preloading failed.
     */
    statusFailure: 'Failure',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/application/preloading/components/MismatchedPreloadingGrid.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class PreloadingUIUtils {
    static status(status) {
        // See content/public/browser/preloading.h PreloadingAttemptOutcome.
        switch (status) {
            case _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.PreloadingModel.PreloadingStatus.NotTriggered:
                return i18nString(UIStrings.statusNotTriggered);
            case _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.PreloadingModel.PreloadingStatus.Pending:
                return i18nString(UIStrings.statusPending);
            case _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.PreloadingModel.PreloadingStatus.Running:
                return i18nString(UIStrings.statusRunning);
            case _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.PreloadingModel.PreloadingStatus.Ready:
                return i18nString(UIStrings.statusReady);
            case _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.PreloadingModel.PreloadingStatus.Success:
                return i18nString(UIStrings.statusSuccess);
            case _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.PreloadingModel.PreloadingStatus.Failure:
                return i18nString(UIStrings.statusFailure);
            // NotSupported is used to handle unreachable case. For example,
            // there is no code path for
            // PreloadingTriggeringOutcome::kTriggeredButPending in prefetch,
            // which is mapped to NotSupported. So, we regard it as an
            // internal error.
            case _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.PreloadingModel.PreloadingStatus.NotSupported:
                return _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedString('Internal error');
        }
    }
}
const { render, html } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__;
// Grid component to show prerendering attempts.
class MismatchedPreloadingGrid extends _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_5__.LegacyWrapper.WrappableComponent {
    constructor() {
        super(...arguments);
        _MismatchedPreloadingGrid_instances.add(this);
        _MismatchedPreloadingGrid_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _MismatchedPreloadingGrid_data.set(this, null);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _MismatchedPreloadingGrid_shadow, "f").adoptedStyleSheets = [];
        __classPrivateFieldGet(this, _MismatchedPreloadingGrid_instances, "m", _MismatchedPreloadingGrid_render).call(this);
    }
    set data(data) {
        __classPrivateFieldSet(this, _MismatchedPreloadingGrid_data, data, "f");
        __classPrivateFieldGet(this, _MismatchedPreloadingGrid_instances, "m", _MismatchedPreloadingGrid_render).call(this);
    }
}
_MismatchedPreloadingGrid_shadow = new WeakMap(), _MismatchedPreloadingGrid_data = new WeakMap(), _MismatchedPreloadingGrid_instances = new WeakSet(), _MismatchedPreloadingGrid_render = function _MismatchedPreloadingGrid_render() {
    if (__classPrivateFieldGet(this, _MismatchedPreloadingGrid_data, "f") === null) {
        return;
    }
    const reportsGridData = {
        columns: [
            {
                id: 'url',
                title: i18nString(UIStrings.url),
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
                id: 'status',
                title: i18nString(UIStrings.status),
                widthWeighting: 15,
                hideable: false,
                visible: true,
                sortable: true,
            },
        ],
        rows: __classPrivateFieldGet(this, _MismatchedPreloadingGrid_instances, "m", _MismatchedPreloadingGrid_buildReportRows).call(this),
        striped: true,
    };
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    render(html `
      <${_ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__.DataGridController.DataGridController.litTagName} .data=${reportsGridData}>
      </${_ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__.DataGridController.DataGridController.litTagName}>
    `, __classPrivateFieldGet(this, _MismatchedPreloadingGrid_shadow, "f"), { host: this });
    // clang-format on
}, _MismatchedPreloadingGrid_buildReportRows = function _MismatchedPreloadingGrid_buildReportRows() {
    function urlRenderer(url, pageURL) {
        function span(additionalProps, s) {
            // Don't insert spaces to prevent spaces for inline blocks.
            // clang-format off
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.html `<span style=${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.Directives.styleMap(additionalProps)}>${s}</span>`;
            // clang-format on
        }
        const diffs = _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_3__.Diff.DiffWrapper.charDiff(url, pageURL);
        const contents = diffs.map(diffOp => {
            const s = diffOp[1];
            switch (diffOp[0]) {
                case _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_3__.Diff.Operation.Equal:
                    return span({}, s);
                case _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_3__.Diff.Operation.Insert:
                    return span({ 'color': 'var(--sys-color-green)', 'text-decoration': 'line-through' }, s);
                case _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_3__.Diff.Operation.Delete:
                    return span({ 'color': 'var(--sys-color-error)' }, s);
                case _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_3__.Diff.Operation.Edit:
                    return span({ 'color': 'var(--sys-color-green)', 'text-decoration': 'line-through' }, s);
                default:
                    throw new Error('unreachable');
            }
        }, _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.nothing);
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.html `<div>${contents}</div>`;
    }
    (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.assertNotNullOrUndefined)(__classPrivateFieldGet(this, _MismatchedPreloadingGrid_data, "f"));
    const pageURL = __classPrivateFieldGet(this, _MismatchedPreloadingGrid_data, "f").pageURL;
    // Sort in descending order by diffScore, i.e. most similar one first.
    return __classPrivateFieldGet(this, _MismatchedPreloadingGrid_data, "f").rows
        .map(row => ({
        row,
        diffScore: _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_3__.Diff.DiffWrapper.characterScore(row.url, pageURL),
    }))
        .sort((a, b) => b.diffScore - a.diffScore)
        .map(({ row }) => ({
        cells: [
            {
                columnId: 'url',
                value: row.url,
                renderer: () => urlRenderer(row.url, pageURL),
            },
            { columnId: 'action', value: _PreloadingString_js__WEBPACK_IMPORTED_MODULE_7__.capitalizedAction(row.action) },
            { columnId: 'status', value: PreloadingUIUtils.status(row.status) },
        ],
    }));
};
Object.defineProperty(MismatchedPreloadingGrid, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.literal `devtools-resources-mismatched-preloading-grid`
});
customElements.define('devtools-resources-mismatched-preloading-grid', MismatchedPreloadingGrid);


/***/ }),

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


/***/ }),

/***/ "./src/panels/application/preloading/components/UsedPreloadingView.ts":
/*!****************************************************************************!*\
  !*** ./src/panels/application/preloading/components/UsedPreloadingView.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsedKind: () => (/* binding */ UsedKind),
/* harmony export */   UsedPreloadingView: () => (/* binding */ UsedPreloadingView)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./src/ui/components/legacy_wrapper/legacy_wrapper.ts");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../ui/components/render_coordinator/render_coordinator.js */ "./src/ui/components/render_coordinator/render_coordinator.ts");
/* harmony import */ var _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../ui/components/report_view/report_view.js */ "./src/ui/components/report_view/report_view.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../helper/helper.js */ "./src/panels/application/preloading/helper/helper.ts");
/* harmony import */ var _MismatchedPreloadingGrid_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./MismatchedPreloadingGrid.js */ "./src/panels/application/preloading/components/MismatchedPreloadingGrid.ts");
/* harmony import */ var _PreloadingMismatchedHeadersGrid_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./PreloadingMismatchedHeadersGrid.js */ "./src/panels/application/preloading/components/PreloadingMismatchedHeadersGrid.ts");
/* harmony import */ var _PreloadingString_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./PreloadingString.js */ "./src/panels/application/preloading/components/PreloadingString.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './usedPreloadingView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
var _UsedPreloadingView_instances, _UsedPreloadingView_shadow, _UsedPreloadingView_data, _UsedPreloadingView_render, _UsedPreloadingView_renderInternal, _UsedPreloadingView_speculativeLoadingStatusForThisPageSections, _UsedPreloadingView_maybeMismatchedSections, _UsedPreloadingView_maybeMismatchedHTTPHeadersSections, _UsedPreloadingView_speculationsInitiatedByThisPageSummarySections, _UsedPreloadingView_badgeSuccess, _UsedPreloadingView_badgeFailure, _UsedPreloadingView_badgeNeutral, _UsedPreloadingView_badge;

















const UIStrings = {
    /**
     *@description Header for preloading status.
     */
    speculativeLoadingStatusForThisPage: 'Speculative loading status for this page',
    /**
     *@description Label for failure reason of preloeading
     */
    detailsFailureReason: 'Failure reason',
    /**
     *@description Message that tells this page was prerendered.
     */
    downgradedPrefetchUsed: 'The initiating page attempted to prerender this page\'s URL. The prerender failed, but the resulting response body was still used as a prefetch.',
    /**
     *@description Message that tells this page was prefetched.
     */
    prefetchUsed: 'This page was successfully prefetched.',
    /**
     *@description Message that tells this page was prerendered.
     */
    prerenderUsed: 'This page was successfully prerendered.',
    /**
     *@description Message that tells this page was prefetched.
     */
    prefetchFailed: 'The initiating page attempted to prefetch this page\'s URL, but the prefetch failed, so a full navigation was performed instead.',
    /**
     *@description Message that tells this page was prerendered.
     */
    prerenderFailed: 'The initiating page attempted to prerender this page\'s URL, but the prerender failed, so a full navigation was performed instead.',
    /**
     *@description Message that tells this page was not preloaded.
     */
    noPreloads: 'The initiating page did not attempt to speculatively load this page\'s URL.',
    /**
     *@description Header for current URL.
     */
    currentURL: 'Current URL',
    /**
     *@description Header for mismatched preloads.
     */
    preloadedURLs: 'URLs being speculatively loaded by the initiating page',
    /**
     *@description Header for summary.
     */
    speculationsInitiatedByThisPage: 'Speculations initiated by this page',
    /**
     *@description Link text to reveal rules.
     */
    viewAllRules: 'View all speculation rules',
    /**
     *@description Link text to reveal preloads.
     */
    viewAllSpeculations: 'View all speculations',
    /**
     *@description Link to learn more about Preloading
     */
    learnMore: 'Learn more: Speculative loading on developer.chrome.com',
    /**
     *@description Header for the table of mismatched network request header.
     */
    mismatchedHeadersDetail: 'Mismatched HTTP request headers',
    /**
     *@description Label for badge, indicating speculative load successfully used for this page.
     */
    badgeSuccess: 'Success',
    /**
     *@description Label for badge, indicating speculative load failed for this page.
     */
    badgeFailure: 'Failure',
    /**
     *@description Label for badge, indicating no speculative loads used for this page.
     */
    badgeNoSpeculativeLoads: 'No speculative loads',
    /**
     *@description Label for badge, indicating how many not triggered speculations there are.
     */
    badgeNotTriggeredWithCount: '{n, plural, =1 {# not triggered} other {# not triggered}}',
    /**
     *@description Label for badge, indicating how many in progress speculations there are.
     */
    badgeInProgressWithCount: '{n, plural, =1 {# in progress} other {# in progress}}',
    /**
     *@description Label for badge, indicating how many succeeded speculations there are.
     */
    badgeSuccessWithCount: '{n, plural, =1 {# success} other {# success}}',
    /**
     *@description Label for badge, indicating how many failed speculations there are.
     */
    badgeFailureWithCount: '{n, plural, =1 {# failure} other {# failures}}',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/application/preloading/components/UsedPreloadingView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_7__.RenderCoordinator.RenderCoordinator.instance();
var UsedKind;
(function (UsedKind) {
    UsedKind["DowngradedPrerenderToPrefetchAndUsed"] = "DowngradedPrerenderToPrefetchAndUsed";
    UsedKind["PrefetchUsed"] = "PrefetchUsed";
    UsedKind["PrerenderUsed"] = "PrerenderUsed";
    UsedKind["PrefetchFailed"] = "PrefetchFailed";
    UsedKind["PrerenderFailed"] = "PrerenderFailed";
    UsedKind["NoPreloads"] = "NoPreloads";
})(UsedKind || (UsedKind = {}));
// TODO(kenoss): Rename this class and file once https://crrev.com/c/4933567 landed.
// This also shows summary of speculations initiated by this page.
class UsedPreloadingView extends _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_6__.LegacyWrapper.WrappableComponent {
    constructor() {
        super(...arguments);
        _UsedPreloadingView_instances.add(this);
        _UsedPreloadingView_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _UsedPreloadingView_data.set(this, {
            pageURL: '',
            previousAttempts: [],
            currentAttempts: [],
        });
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _UsedPreloadingView_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './usedPreloadingView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
    set data(data) {
        __classPrivateFieldSet(this, _UsedPreloadingView_data, data, "f");
        void __classPrivateFieldGet(this, _UsedPreloadingView_instances, "m", _UsedPreloadingView_render).call(this);
    }
}
_UsedPreloadingView_shadow = new WeakMap(), _UsedPreloadingView_data = new WeakMap(), _UsedPreloadingView_instances = new WeakSet(), _UsedPreloadingView_render = async function _UsedPreloadingView_render() {
    await coordinator.write('UsedPreloadingView render', () => {
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__.render(__classPrivateFieldGet(this, _UsedPreloadingView_instances, "m", _UsedPreloadingView_renderInternal).call(this), __classPrivateFieldGet(this, _UsedPreloadingView_shadow, "f"), { host: this });
    });
}, _UsedPreloadingView_renderInternal = function _UsedPreloadingView_renderInternal() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__.html `
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.Report.litTagName}>
        ${__classPrivateFieldGet(this, _UsedPreloadingView_instances, "m", _UsedPreloadingView_speculativeLoadingStatusForThisPageSections).call(this)}

        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportSectionDivider.litTagName}></${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportSectionDivider.litTagName}>

        ${__classPrivateFieldGet(this, _UsedPreloadingView_instances, "m", _UsedPreloadingView_speculationsInitiatedByThisPageSummarySections).call(this)}

        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportSectionDivider.litTagName}></${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportSectionDivider.litTagName}>

        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportSection.litTagName}>
          ${_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.XLink.XLink.create('https://developer.chrome.com/blog/prerender-pages/', i18nString(UIStrings.learnMore), 'link', undefined, 'learn-more')}
        </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportSection.litTagName}>
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.Report.litTagName}>
    `;
    // clang-format on
}, _UsedPreloadingView_speculativeLoadingStatusForThisPageSections = function _UsedPreloadingView_speculativeLoadingStatusForThisPageSections() {
    const pageURL = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.urlWithoutHash(__classPrivateFieldGet(this, _UsedPreloadingView_data, "f").pageURL);
    const forThisPage = __classPrivateFieldGet(this, _UsedPreloadingView_data, "f").previousAttempts.filter(attempt => _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.urlWithoutHash(attempt.key.url) === pageURL);
    const prefetch = forThisPage.filter(attempt => attempt.key.action === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Preload.SpeculationAction.Prefetch)[0];
    const prerender = forThisPage.filter(attempt => attempt.key.action === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Preload.SpeculationAction.Prerender)[0];
    let kind = UsedKind.NoPreloads;
    // Prerender -> prefetch downgrade case
    //
    // This code does not handle the case SpecRules designate these preloads rather than prerenderer automatically downgrade prerendering.
    // TODO(https://crbug.com/1410709): Improve this logic once automatic downgrade implemented.
    if (prerender?.status === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.PreloadingModel.PreloadingStatus.Failure &&
        prefetch?.status === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.PreloadingModel.PreloadingStatus.Success) {
        kind = UsedKind.DowngradedPrerenderToPrefetchAndUsed;
    }
    else if (prefetch?.status === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.PreloadingModel.PreloadingStatus.Success) {
        kind = UsedKind.PrefetchUsed;
    }
    else if (prerender?.status === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.PreloadingModel.PreloadingStatus.Success) {
        kind = UsedKind.PrerenderUsed;
    }
    else if (prefetch?.status === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.PreloadingModel.PreloadingStatus.Failure) {
        kind = UsedKind.PrefetchFailed;
    }
    else if (prerender?.status === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.PreloadingModel.PreloadingStatus.Failure) {
        kind = UsedKind.PrerenderFailed;
    }
    else {
        kind = UsedKind.NoPreloads;
    }
    let badge;
    let basicMessage;
    switch (kind) {
        case UsedKind.DowngradedPrerenderToPrefetchAndUsed:
            badge = __classPrivateFieldGet(this, _UsedPreloadingView_instances, "m", _UsedPreloadingView_badgeSuccess).call(this);
            basicMessage = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__.html `${i18nString(UIStrings.downgradedPrefetchUsed)}`;
            break;
        case UsedKind.PrefetchUsed:
            badge = __classPrivateFieldGet(this, _UsedPreloadingView_instances, "m", _UsedPreloadingView_badgeSuccess).call(this);
            basicMessage = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__.html `${i18nString(UIStrings.prefetchUsed)}`;
            break;
        case UsedKind.PrerenderUsed:
            badge = __classPrivateFieldGet(this, _UsedPreloadingView_instances, "m", _UsedPreloadingView_badgeSuccess).call(this);
            basicMessage = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__.html `${i18nString(UIStrings.prerenderUsed)}`;
            break;
        case UsedKind.PrefetchFailed:
            badge = __classPrivateFieldGet(this, _UsedPreloadingView_instances, "m", _UsedPreloadingView_badgeFailure).call(this);
            basicMessage = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__.html `${i18nString(UIStrings.prefetchFailed)}`;
            break;
        case UsedKind.PrerenderFailed:
            badge = __classPrivateFieldGet(this, _UsedPreloadingView_instances, "m", _UsedPreloadingView_badgeFailure).call(this);
            basicMessage = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__.html `${i18nString(UIStrings.prerenderFailed)}`;
            break;
        case UsedKind.NoPreloads:
            badge = __classPrivateFieldGet(this, _UsedPreloadingView_instances, "m", _UsedPreloadingView_badgeNeutral).call(this, i18nString(UIStrings.badgeNoSpeculativeLoads));
            basicMessage = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__.html `${i18nString(UIStrings.noPreloads)}`;
            break;
    }
    let maybeFailureReasonMessage;
    if (kind === UsedKind.PrefetchFailed) {
        (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.assertNotNullOrUndefined)(prefetch);
        maybeFailureReasonMessage = (0,_PreloadingString_js__WEBPACK_IMPORTED_MODULE_15__.prefetchFailureReason)(prefetch);
    }
    else if (kind === UsedKind.PrerenderFailed || kind === UsedKind.DowngradedPrerenderToPrefetchAndUsed) {
        (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.assertNotNullOrUndefined)(prerender);
        maybeFailureReasonMessage = (0,_PreloadingString_js__WEBPACK_IMPORTED_MODULE_15__.prerenderFailureReason)(prerender);
    }
    let maybeFailureReason = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__.nothing;
    if (maybeFailureReasonMessage !== undefined) {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        maybeFailureReason = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__.html `
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportSectionHeader.litTagName}>${i18nString(UIStrings.detailsFailureReason)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportSectionHeader.litTagName}>
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportSection.litTagName}>
        ${maybeFailureReasonMessage}
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportSection.litTagName}>
      `;
        // clang-format on
    }
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__.html `
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportSectionHeader.litTagName}>${i18nString(UIStrings.speculativeLoadingStatusForThisPage)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportSectionHeader.litTagName}>
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportSection.litTagName}>
        <div>
          <div class="status-badge-container">
            ${badge}
          </div>
          <div>
            ${basicMessage}
          </div>
        </div>
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportSection.litTagName}>

      ${maybeFailureReason}

      ${__classPrivateFieldGet(this, _UsedPreloadingView_instances, "m", _UsedPreloadingView_maybeMismatchedSections).call(this, kind)}
      ${__classPrivateFieldGet(this, _UsedPreloadingView_instances, "m", _UsedPreloadingView_maybeMismatchedHTTPHeadersSections).call(this)}
    `;
    // clang-format on
}, _UsedPreloadingView_maybeMismatchedSections = function _UsedPreloadingView_maybeMismatchedSections(kind) {
    if (kind !== UsedKind.NoPreloads || __classPrivateFieldGet(this, _UsedPreloadingView_data, "f").previousAttempts.length === 0) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__.nothing;
    }
    const rows = __classPrivateFieldGet(this, _UsedPreloadingView_data, "f").previousAttempts.map(attempt => {
        return {
            url: attempt.key.url,
            action: attempt.key.action,
            status: attempt.status,
        };
    });
    const data = {
        pageURL: __classPrivateFieldGet(this, _UsedPreloadingView_data, "f").pageURL,
        rows,
    };
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__.html `
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportSectionHeader.litTagName}>${i18nString(UIStrings.currentURL)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportSectionHeader.litTagName}>
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportSection.litTagName}>
        ${_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.XLink.XLink.create(__classPrivateFieldGet(this, _UsedPreloadingView_data, "f").pageURL, undefined, 'link', undefined, 'current-url')}
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportSection.litTagName}>

      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportSectionHeader.litTagName}>${i18nString(UIStrings.preloadedURLs)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportSectionHeader.litTagName}>
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportSection.litTagName}
      jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.section('preloaded-urls')}>
        <${_MismatchedPreloadingGrid_js__WEBPACK_IMPORTED_MODULE_13__.MismatchedPreloadingGrid.litTagName}
          .data=${data}></${_MismatchedPreloadingGrid_js__WEBPACK_IMPORTED_MODULE_13__.MismatchedPreloadingGrid.litTagName}>
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportSection.litTagName}>
    `;
    // clang-format on
}, _UsedPreloadingView_maybeMismatchedHTTPHeadersSections = function _UsedPreloadingView_maybeMismatchedHTTPHeadersSections() {
    const attempt = __classPrivateFieldGet(this, _UsedPreloadingView_data, "f").previousAttempts.find(attempt => attempt.action === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Preload.SpeculationAction.Prerender && attempt.mismatchedHeaders !== null);
    if (attempt === undefined) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__.nothing;
    }
    if (attempt.key.url !== __classPrivateFieldGet(this, _UsedPreloadingView_data, "f").pageURL) {
        // This place should never be reached since mismatched headers is reported only if the activation is attempted.
        // TODO(crbug.com/1456673): remove this check once DevTools support embedder-triggered prerender or prerender
        // supports non-vary-search.
        throw new Error('unreachable');
    }
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__.html `
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportSectionHeader.litTagName}>${i18nString(UIStrings.mismatchedHeadersDetail)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportSectionHeader.litTagName}>
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportSection.litTagName}>
        <${_PreloadingMismatchedHeadersGrid_js__WEBPACK_IMPORTED_MODULE_14__.PreloadingMismatchedHeadersGrid.litTagName}
          .data=${attempt}></${_PreloadingMismatchedHeadersGrid_js__WEBPACK_IMPORTED_MODULE_14__.PreloadingMismatchedHeadersGrid.litTagName}>
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportSection.litTagName}>
    `;
    // clang-format on
}, _UsedPreloadingView_speculationsInitiatedByThisPageSummarySections = function _UsedPreloadingView_speculationsInitiatedByThisPageSummarySections() {
    const count = __classPrivateFieldGet(this, _UsedPreloadingView_data, "f").currentAttempts.reduce((acc, attempt) => {
        acc.set(attempt.status, (acc.get(attempt.status) ?? 0) + 1);
        return acc;
    }, new Map());
    const notTriggeredCount = count.get(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.PreloadingModel.PreloadingStatus.NotTriggered) ?? 0;
    const readyCount = count.get(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.PreloadingModel.PreloadingStatus.Ready) ?? 0;
    const failureCount = count.get(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.PreloadingModel.PreloadingStatus.Failure) ?? 0;
    const inProgressCount = (count.get(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.PreloadingModel.PreloadingStatus.Pending) ?? 0) +
        (count.get(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.PreloadingModel.PreloadingStatus.Running) ?? 0);
    const badges = [];
    if (__classPrivateFieldGet(this, _UsedPreloadingView_data, "f").currentAttempts.length === 0) {
        badges.push(__classPrivateFieldGet(this, _UsedPreloadingView_instances, "m", _UsedPreloadingView_badgeNeutral).call(this, i18nString(UIStrings.badgeNoSpeculativeLoads)));
    }
    if (notTriggeredCount > 0) {
        badges.push(__classPrivateFieldGet(this, _UsedPreloadingView_instances, "m", _UsedPreloadingView_badgeNeutral).call(this, i18nString(UIStrings.badgeNotTriggeredWithCount, { n: notTriggeredCount })));
    }
    if (inProgressCount > 0) {
        badges.push(__classPrivateFieldGet(this, _UsedPreloadingView_instances, "m", _UsedPreloadingView_badgeNeutral).call(this, i18nString(UIStrings.badgeInProgressWithCount, { n: inProgressCount })));
    }
    if (readyCount > 0) {
        badges.push(__classPrivateFieldGet(this, _UsedPreloadingView_instances, "m", _UsedPreloadingView_badgeSuccess).call(this, readyCount));
    }
    if (failureCount > 0) {
        badges.push(__classPrivateFieldGet(this, _UsedPreloadingView_instances, "m", _UsedPreloadingView_badgeFailure).call(this, failureCount));
    }
    const revealRuleSetView = () => {
        void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(new _helper_helper_js__WEBPACK_IMPORTED_MODULE_12__.PreloadingForward.RuleSetView(null));
    };
    const revealAttemptViewWithFilter = () => {
        void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(new _helper_helper_js__WEBPACK_IMPORTED_MODULE_12__.PreloadingForward.AttemptViewWithFilter(null));
    };
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__.html `
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportSectionHeader.litTagName}>${i18nString(UIStrings.speculationsInitiatedByThisPage)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportSectionHeader.litTagName}>
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportSection.litTagName}>
        <div>
          <div class="status-badge-container">
            ${badges}
          </div>

          <div class="reveal-links">
            <button class="link devtools-link" @click=${revealRuleSetView}
            jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.action('view-all-rules').track({ click: true })}>
              ${i18nString(UIStrings.viewAllRules)}
            </button>
           ・
            <button class="link devtools-link" @click=${revealAttemptViewWithFilter}
            jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.action('view-all-speculations').track({ click: true })}>
             ${i18nString(UIStrings.viewAllSpeculations)}
            </button>
          </div>
        </div>
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportSection.litTagName}>
    `;
    // clang-format on
}, _UsedPreloadingView_badgeSuccess = function _UsedPreloadingView_badgeSuccess(count) {
    let message;
    if (count === undefined) {
        message = i18nString(UIStrings.badgeSuccess);
    }
    else {
        message = i18nString(UIStrings.badgeSuccessWithCount, { n: count });
    }
    return __classPrivateFieldGet(this, _UsedPreloadingView_instances, "m", _UsedPreloadingView_badge).call(this, 'status-badge status-badge-success', 'check-circle', message);
}, _UsedPreloadingView_badgeFailure = function _UsedPreloadingView_badgeFailure(count) {
    let message;
    if (count === undefined) {
        message = i18nString(UIStrings.badgeFailure);
    }
    else {
        message = i18nString(UIStrings.badgeFailureWithCount, { n: count });
    }
    return __classPrivateFieldGet(this, _UsedPreloadingView_instances, "m", _UsedPreloadingView_badge).call(this, 'status-badge status-badge-failure', 'cross-circle', message);
}, _UsedPreloadingView_badgeNeutral = function _UsedPreloadingView_badgeNeutral(message) {
    return __classPrivateFieldGet(this, _UsedPreloadingView_instances, "m", _UsedPreloadingView_badge).call(this, 'status-badge status-badge-neutral', 'clear', message);
}, _UsedPreloadingView_badge = function _UsedPreloadingView_badge(klass, iconName, message) {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__.html `
      <span class=${klass}>
        <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon.litTagName} name=${iconName}></${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon.litTagName}>
        <span>
          ${message}
        </span>
      </span>
    `;
    // clang-format on
};
Object.defineProperty(UsedPreloadingView, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__.literal `devtools-resources-used-preloading-view`
});
customElements.define('devtools-resources-used-preloading-view', UsedPreloadingView);


/***/ })

}]);