"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_preloading_components_MismatchedPreloadingGrid_ts"],{

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


/***/ })

}]);