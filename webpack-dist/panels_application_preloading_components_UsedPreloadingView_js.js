"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_application_preloading_components_UsedPreloadingView_js"],{

/***/ "./panels/application/preloading/components/MismatchedPreloadingGrid.js":
/*!******************************************************************************!*\
  !*** ./panels/application/preloading/components/MismatchedPreloadingGrid.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MismatchedPreloadingGrid: () => (/* binding */ MismatchedPreloadingGrid),
/* harmony export */   i18nString: () => (/* binding */ i18nString)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../third_party/diff/diff.js */ "./third_party/diff/diff.js");
/* harmony import */ var _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ui/components/data_grid/data_grid.js */ "./ui/components/data_grid/data_grid.js");
/* harmony import */ var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./ui/components/legacy_wrapper/legacy_wrapper.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _PreloadingString_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PreloadingString.js */ "./panels/application/preloading/components/PreloadingString.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








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
            case "NotTriggered" /* SDK.PreloadingModel.PreloadingStatus.NotTriggered */:
                return i18nString(UIStrings.statusNotTriggered);
            case "Pending" /* SDK.PreloadingModel.PreloadingStatus.Pending */:
                return i18nString(UIStrings.statusPending);
            case "Running" /* SDK.PreloadingModel.PreloadingStatus.Running */:
                return i18nString(UIStrings.statusRunning);
            case "Ready" /* SDK.PreloadingModel.PreloadingStatus.Ready */:
                return i18nString(UIStrings.statusReady);
            case "Success" /* SDK.PreloadingModel.PreloadingStatus.Success */:
                return i18nString(UIStrings.statusSuccess);
            case "Failure" /* SDK.PreloadingModel.PreloadingStatus.Failure */:
                return i18nString(UIStrings.statusFailure);
            // NotSupported is used to handle unreachable case. For example,
            // there is no code path for
            // PreloadingTriggeringOutcome::kTriggeredButPending in prefetch,
            // which is mapped to NotSupported. So, we regard it as an
            // internal error.
            case "NotSupported" /* SDK.PreloadingModel.PreloadingStatus.NotSupported */:
                return _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedString('Internal error');
        }
    }
}
const { render, html } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__;
// Grid component to show prerendering attempts.
class MismatchedPreloadingGrid extends _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_5__.LegacyWrapper.WrappableComponent {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.literal `devtools-resources-mismatched-preloading-grid`;
    #shadow = this.attachShadow({ mode: 'open' });
    #data = null;
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [];
        this.#render();
    }
    set data(data) {
        this.#data = data;
        this.#render();
    }
    #render() {
        if (this.#data === null) {
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
            rows: this.#buildReportRows(),
            striped: true,
        };
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        render(html `
      <${_ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__.DataGridController.DataGridController.litTagName} .data=${reportsGridData}>
      </${_ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__.DataGridController.DataGridController.litTagName}>
    `, this.#shadow, { host: this });
        // clang-format on
    }
    #buildReportRows() {
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
        (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.assertNotNullOrUndefined)(this.#data);
        const pageURL = this.#data.pageURL;
        // Sort in descending order by diffScore, i.e. most similar one first.
        return this.#data.rows
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
    }
}
customElements.define('devtools-resources-mismatched-preloading-grid', MismatchedPreloadingGrid);
//# sourceMappingURL=MismatchedPreloadingGrid.js.map

/***/ }),

/***/ "./panels/application/preloading/components/PreloadingMismatchedHeadersGrid.js":
/*!*************************************************************************************!*\
  !*** ./panels/application/preloading/components/PreloadingMismatchedHeadersGrid.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PreloadingMismatchedHeadersGrid: () => (/* binding */ PreloadingMismatchedHeadersGrid),
/* harmony export */   i18nString: () => (/* binding */ i18nString)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../ui/components/data_grid/data_grid.js */ "./ui/components/data_grid/data_grid.js");
/* harmony import */ var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./ui/components/legacy_wrapper/legacy_wrapper.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _preloadingGrid_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./preloadingGrid.css.js */ "./panels/application/preloading/components/preloadingGrid.css.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






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
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.literal `devtools-resources-preloading-mismatched-headers-grid`;
    #shadow = this.attachShadow({ mode: 'open' });
    #data = null;
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_preloadingGrid_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]];
        this.#render();
    }
    set data(data) {
        if (data.mismatchedHeaders === null) {
            return;
        }
        this.#data = data;
        this.#render();
    }
    #render() {
        if (this.#data === null) {
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
            rows: this.#buildReportRows(),
            striped: true,
        };
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        render(html `
        <div class="preloading-container">
          <${_ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_2__.DataGridController.DataGridController.litTagName} .data=${reportsGridData}>
          </${_ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_2__.DataGridController.DataGridController.litTagName}>
        </div>
      `, this.#shadow, { host: this });
        // clang-format on
    }
    #buildReportRows() {
        (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.assertNotNullOrUndefined)(this.#data);
        (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.assertNotNullOrUndefined)(this.#data.mismatchedHeaders);
        return this.#data.mismatchedHeaders.map(mismatchedHeaders => ({
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
    }
}
customElements.define('devtools-resources-preloading-mismatched-headers-grid', PreloadingMismatchedHeadersGrid);
//# sourceMappingURL=PreloadingMismatchedHeadersGrid.js.map

/***/ }),

/***/ "./panels/application/preloading/components/UsedPreloadingView.js":
/*!************************************************************************!*\
  !*** ./panels/application/preloading/components/UsedPreloadingView.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsedPreloadingView: () => (/* binding */ UsedPreloadingView)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./ui/components/legacy_wrapper/legacy_wrapper.js");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */ var _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../ui/components/report_view/report_view.js */ "./ui/components/report_view/report_view.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../helper/helper.js */ "./panels/application/preloading/helper/helper.js");
/* harmony import */ var _MismatchedPreloadingGrid_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./MismatchedPreloadingGrid.js */ "./panels/application/preloading/components/MismatchedPreloadingGrid.js");
/* harmony import */ var _PreloadingMismatchedHeadersGrid_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./PreloadingMismatchedHeadersGrid.js */ "./panels/application/preloading/components/PreloadingMismatchedHeadersGrid.js");
/* harmony import */ var _PreloadingString_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./PreloadingString.js */ "./panels/application/preloading/components/PreloadingString.js");
/* harmony import */ var _usedPreloadingView_css_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./usedPreloadingView.css.js */ "./panels/application/preloading/components/usedPreloadingView.css.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
















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
const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_6__.RenderCoordinator.RenderCoordinator.instance();
// TODO(kenoss): Rename this class and file once https://crrev.com/c/4933567 landed.
// This also shows summary of speculations initiated by this page.
class UsedPreloadingView extends _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_5__.LegacyWrapper.WrappableComponent {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.literal `devtools-resources-used-preloading-view`;
    #shadow = this.attachShadow({ mode: 'open' });
    #data = {
        pageURL: '',
        previousAttempts: [],
        currentAttempts: [],
    };
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_usedPreloadingView_css_js__WEBPACK_IMPORTED_MODULE_15__["default"]];
    }
    set data(data) {
        this.#data = data;
        void this.#render();
    }
    async #render() {
        await coordinator.write('UsedPreloadingView render', () => {
            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.render(this.#renderInternal(), this.#shadow, { host: this });
        });
    }
    #renderInternal() {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.html `
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.Report.litTagName}>
        ${this.#speculativeLoadingStatusForThisPageSections()}

        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSectionDivider.litTagName}></${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSectionDivider.litTagName}>

        ${this.#speculationsInitiatedByThisPageSummarySections()}

        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSectionDivider.litTagName}></${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSectionDivider.litTagName}>

        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSection.litTagName}>
          ${_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.XLink.XLink.create('https://developer.chrome.com/blog/prerender-pages/', i18nString(UIStrings.learnMore), 'link', undefined, 'learn-more')}
        </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSection.litTagName}>
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.Report.litTagName}>
    `;
        // clang-format on
    }
    #speculativeLoadingStatusForThisPageSections() {
        const pageURL = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.urlWithoutHash(this.#data.pageURL);
        const forThisPage = this.#data.previousAttempts.filter(attempt => _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.urlWithoutHash(attempt.key.url) === pageURL);
        const prefetch = forThisPage.filter(attempt => attempt.key.action === "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */)[0];
        const prerender = forThisPage.filter(attempt => attempt.key.action === "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */)[0];
        let kind = "NoPreloads" /* UsedKind.NoPreloads */;
        // Prerender -> prefetch downgrade case
        //
        // This code does not handle the case SpecRules designate these preloads rather than prerenderer automatically downgrade prerendering.
        // TODO(https://crbug.com/1410709): Improve this logic once automatic downgrade implemented.
        if (prerender?.status === "Failure" /* SDK.PreloadingModel.PreloadingStatus.Failure */ &&
            prefetch?.status === "Success" /* SDK.PreloadingModel.PreloadingStatus.Success */) {
            kind = "DowngradedPrerenderToPrefetchAndUsed" /* UsedKind.DowngradedPrerenderToPrefetchAndUsed */;
        }
        else if (prefetch?.status === "Success" /* SDK.PreloadingModel.PreloadingStatus.Success */) {
            kind = "PrefetchUsed" /* UsedKind.PrefetchUsed */;
        }
        else if (prerender?.status === "Success" /* SDK.PreloadingModel.PreloadingStatus.Success */) {
            kind = "PrerenderUsed" /* UsedKind.PrerenderUsed */;
        }
        else if (prefetch?.status === "Failure" /* SDK.PreloadingModel.PreloadingStatus.Failure */) {
            kind = "PrefetchFailed" /* UsedKind.PrefetchFailed */;
        }
        else if (prerender?.status === "Failure" /* SDK.PreloadingModel.PreloadingStatus.Failure */) {
            kind = "PrerenderFailed" /* UsedKind.PrerenderFailed */;
        }
        else {
            kind = "NoPreloads" /* UsedKind.NoPreloads */;
        }
        let badge;
        let basicMessage;
        switch (kind) {
            case "DowngradedPrerenderToPrefetchAndUsed" /* UsedKind.DowngradedPrerenderToPrefetchAndUsed */:
                badge = this.#badgeSuccess();
                basicMessage = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.html `${i18nString(UIStrings.downgradedPrefetchUsed)}`;
                break;
            case "PrefetchUsed" /* UsedKind.PrefetchUsed */:
                badge = this.#badgeSuccess();
                basicMessage = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.html `${i18nString(UIStrings.prefetchUsed)}`;
                break;
            case "PrerenderUsed" /* UsedKind.PrerenderUsed */:
                badge = this.#badgeSuccess();
                basicMessage = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.html `${i18nString(UIStrings.prerenderUsed)}`;
                break;
            case "PrefetchFailed" /* UsedKind.PrefetchFailed */:
                badge = this.#badgeFailure();
                basicMessage = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.html `${i18nString(UIStrings.prefetchFailed)}`;
                break;
            case "PrerenderFailed" /* UsedKind.PrerenderFailed */:
                badge = this.#badgeFailure();
                basicMessage = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.html `${i18nString(UIStrings.prerenderFailed)}`;
                break;
            case "NoPreloads" /* UsedKind.NoPreloads */:
                badge = this.#badgeNeutral(i18nString(UIStrings.badgeNoSpeculativeLoads));
                basicMessage = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.html `${i18nString(UIStrings.noPreloads)}`;
                break;
        }
        let maybeFailureReasonMessage;
        if (kind === "PrefetchFailed" /* UsedKind.PrefetchFailed */) {
            (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.assertNotNullOrUndefined)(prefetch);
            maybeFailureReasonMessage = (0,_PreloadingString_js__WEBPACK_IMPORTED_MODULE_14__.prefetchFailureReason)(prefetch);
        }
        else if (kind === "PrerenderFailed" /* UsedKind.PrerenderFailed */ || kind === "DowngradedPrerenderToPrefetchAndUsed" /* UsedKind.DowngradedPrerenderToPrefetchAndUsed */) {
            (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.assertNotNullOrUndefined)(prerender);
            maybeFailureReasonMessage = (0,_PreloadingString_js__WEBPACK_IMPORTED_MODULE_14__.prerenderFailureReason)(prerender);
        }
        let maybeFailureReason = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.nothing;
        if (maybeFailureReasonMessage !== undefined) {
            // Disabled until https://crbug.com/1079231 is fixed.
            // clang-format off
            maybeFailureReason = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.html `
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSectionHeader.litTagName}>${i18nString(UIStrings.detailsFailureReason)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSectionHeader.litTagName}>
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSection.litTagName}>
        ${maybeFailureReasonMessage}
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSection.litTagName}>
      `;
            // clang-format on
        }
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.html `
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSectionHeader.litTagName}>${i18nString(UIStrings.speculativeLoadingStatusForThisPage)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSectionHeader.litTagName}>
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSection.litTagName}>
        <div>
          <div class="status-badge-container">
            ${badge}
          </div>
          <div>
            ${basicMessage}
          </div>
        </div>
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSection.litTagName}>

      ${maybeFailureReason}

      ${this.#maybeMismatchedSections(kind)}
      ${this.#maybeMismatchedHTTPHeadersSections()}
    `;
        // clang-format on
    }
    #maybeMismatchedSections(kind) {
        if (kind !== "NoPreloads" /* UsedKind.NoPreloads */ || this.#data.previousAttempts.length === 0) {
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.nothing;
        }
        const rows = this.#data.previousAttempts.map(attempt => {
            return {
                url: attempt.key.url,
                action: attempt.key.action,
                status: attempt.status,
            };
        });
        const data = {
            pageURL: this.#data.pageURL,
            rows,
        };
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.html `
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSectionHeader.litTagName}>${i18nString(UIStrings.currentURL)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSectionHeader.litTagName}>
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSection.litTagName}>
        ${_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.XLink.XLink.create(this.#data.pageURL, undefined, 'link', undefined, 'current-url')}
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSection.litTagName}>

      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSectionHeader.litTagName}>${i18nString(UIStrings.preloadedURLs)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSectionHeader.litTagName}>
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSection.litTagName}
      jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__.section('preloaded-urls')}>
        <${_MismatchedPreloadingGrid_js__WEBPACK_IMPORTED_MODULE_12__.MismatchedPreloadingGrid.litTagName}
          .data=${data}></${_MismatchedPreloadingGrid_js__WEBPACK_IMPORTED_MODULE_12__.MismatchedPreloadingGrid.litTagName}>
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSection.litTagName}>
    `;
        // clang-format on
    }
    #maybeMismatchedHTTPHeadersSections() {
        const attempt = this.#data.previousAttempts.find(attempt => attempt.action === "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */ && attempt.mismatchedHeaders !== null);
        if (attempt === undefined) {
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.nothing;
        }
        if (attempt.key.url !== this.#data.pageURL) {
            // This place should never be reached since mismatched headers is reported only if the activation is attempted.
            // TODO(crbug.com/1456673): remove this check once DevTools support embedder-triggered prerender or prerender
            // supports non-vary-search.
            throw new Error('unreachable');
        }
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.html `
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSectionHeader.litTagName}>${i18nString(UIStrings.mismatchedHeadersDetail)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSectionHeader.litTagName}>
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSection.litTagName}>
        <${_PreloadingMismatchedHeadersGrid_js__WEBPACK_IMPORTED_MODULE_13__.PreloadingMismatchedHeadersGrid.litTagName}
          .data=${attempt}></${_PreloadingMismatchedHeadersGrid_js__WEBPACK_IMPORTED_MODULE_13__.PreloadingMismatchedHeadersGrid.litTagName}>
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSection.litTagName}>
    `;
        // clang-format on
    }
    #speculationsInitiatedByThisPageSummarySections() {
        const count = this.#data.currentAttempts.reduce((acc, attempt) => {
            acc.set(attempt.status, (acc.get(attempt.status) ?? 0) + 1);
            return acc;
        }, new Map());
        const notTriggeredCount = count.get("NotTriggered" /* SDK.PreloadingModel.PreloadingStatus.NotTriggered */) ?? 0;
        const readyCount = count.get("Ready" /* SDK.PreloadingModel.PreloadingStatus.Ready */) ?? 0;
        const failureCount = count.get("Failure" /* SDK.PreloadingModel.PreloadingStatus.Failure */) ?? 0;
        const inProgressCount = (count.get("Pending" /* SDK.PreloadingModel.PreloadingStatus.Pending */) ?? 0) +
            (count.get("Running" /* SDK.PreloadingModel.PreloadingStatus.Running */) ?? 0);
        const badges = [];
        if (this.#data.currentAttempts.length === 0) {
            badges.push(this.#badgeNeutral(i18nString(UIStrings.badgeNoSpeculativeLoads)));
        }
        if (notTriggeredCount > 0) {
            badges.push(this.#badgeNeutral(i18nString(UIStrings.badgeNotTriggeredWithCount, { n: notTriggeredCount })));
        }
        if (inProgressCount > 0) {
            badges.push(this.#badgeNeutral(i18nString(UIStrings.badgeInProgressWithCount, { n: inProgressCount })));
        }
        if (readyCount > 0) {
            badges.push(this.#badgeSuccess(readyCount));
        }
        if (failureCount > 0) {
            badges.push(this.#badgeFailure(failureCount));
        }
        const revealRuleSetView = () => {
            void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(new _helper_helper_js__WEBPACK_IMPORTED_MODULE_11__.PreloadingForward.RuleSetView(null));
        };
        const revealAttemptViewWithFilter = () => {
            void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(new _helper_helper_js__WEBPACK_IMPORTED_MODULE_11__.PreloadingForward.AttemptViewWithFilter(null));
        };
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.html `
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSectionHeader.litTagName}>${i18nString(UIStrings.speculationsInitiatedByThisPage)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSectionHeader.litTagName}>
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSection.litTagName}>
        <div>
          <div class="status-badge-container">
            ${badges}
          </div>

          <div class="reveal-links">
            <button class="link devtools-link" @click=${revealRuleSetView}
            jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__.action('view-all-rules').track({ click: true })}>
              ${i18nString(UIStrings.viewAllRules)}
            </button>
           ・
            <button class="link devtools-link" @click=${revealAttemptViewWithFilter}
            jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__.action('view-all-speculations').track({ click: true })}>
             ${i18nString(UIStrings.viewAllSpeculations)}
            </button>
          </div>
        </div>
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSection.litTagName}>
    `;
        // clang-format on
    }
    #badgeSuccess(count) {
        let message;
        if (count === undefined) {
            message = i18nString(UIStrings.badgeSuccess);
        }
        else {
            message = i18nString(UIStrings.badgeSuccessWithCount, { n: count });
        }
        return this.#badge('status-badge status-badge-success', 'check-circle', message);
    }
    #badgeFailure(count) {
        let message;
        if (count === undefined) {
            message = i18nString(UIStrings.badgeFailure);
        }
        else {
            message = i18nString(UIStrings.badgeFailureWithCount, { n: count });
        }
        return this.#badge('status-badge status-badge-failure', 'cross-circle', message);
    }
    #badgeNeutral(message) {
        return this.#badge('status-badge status-badge-neutral', 'clear', message);
    }
    #badge(klass, iconName, message) {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.html `
      <span class=${klass}>
        <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.Icon.litTagName} name=${iconName}></${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.Icon.litTagName}>
        <span>
          ${message}
        </span>
      </span>
    `;
        // clang-format on
    }
}
customElements.define('devtools-resources-used-preloading-view', UsedPreloadingView);
//# sourceMappingURL=UsedPreloadingView.js.map

/***/ }),

/***/ "./panels/application/preloading/components/preloadingGrid.css.js":
/*!************************************************************************!*\
  !*** ./panels/application/preloading/components/preloadingGrid.css.js ***!
  \************************************************************************/
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
 * Copyright 2022 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  overflow: auto;
  height: 100%;
}

.preloading-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.preloading-header {
  font-size: 15px;
  background-color: var(--sys-color-cdt-base-container);
  padding: 1px 4px;
}

.preloading-placeholder {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  color: var(--sys-color-token-subtle);
}

devtools-data-grid-controller {
  border: 1px solid var(--sys-color-divider);
}

.inline-icon {
  vertical-align: text-bottom;
}

/*# sourceURL=preloadingGrid.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./panels/application/preloading/components/usedPreloadingView.css.js":
/*!****************************************************************************!*\
  !*** ./panels/application/preloading/components/usedPreloadingView.css.js ***!
  \****************************************************************************/
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
 * Copyright 2023 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  overflow: auto;
  height: 100%;
}

button {
  font-size: inherit;
}

devtools-report {
  padding: 1em 0;
}

devtools-report-section-header {
  padding-bottom: 0;
  margin-bottom: -1.5em;
}

devtools-report-section {
  min-width: fit-content;
}

devtools-report-divider {
  margin: 1em 0;
}

.reveal-links {
  white-space: nowrap;
}

.link {
  border: none;
  background: none;
  color: var(--sys-color-primary);
  text-decoration: underline;
  cursor: pointer;
  outline-offset: 2px;
  padding: 0;
}

.status-badge-container {
  white-space: nowrap;
  margin: 8px 0 24px;
}

.status-badge-container span {
  margin-right: 2px;
}

.status-badge {
  border-radius: 4px;
  padding: 4px;

  devtools-icon {
    width: 16px;
    height: 16px;
  }
}

.status-badge-success {
  background: var(--sys-color-tertiary-container);
}

.status-badge-failure {
  background: var(--sys-color-error-container);
}

.status-badge-neutral {
  background: var(--sys-color-neutral-container);
}

/*# sourceURL=usedPreloadingView.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);