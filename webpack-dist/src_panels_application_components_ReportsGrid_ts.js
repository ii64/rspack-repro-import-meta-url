"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_components_ReportsGrid_ts"],{

/***/ "./src/panels/application/components/ReportsGrid.ts":
/*!**********************************************************!*\
  !*** ./src/panels/application/components/ReportsGrid.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportsGrid: () => (/* binding */ ReportsGrid),
/* harmony export */   ReportsGridStatusHeader: () => (/* binding */ ReportsGridStatusHeader),
/* harmony export */   i18nString: () => (/* binding */ i18nString)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/root/root.js */ "./src/core/root/root.ts");
/* harmony import */ var _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/data_grid/data_grid.js */ "./src/ui/components/data_grid/data_grid.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportingApiGrid.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
var _ReportsGridStatusHeader_instances, _ReportsGridStatusHeader_shadow, _ReportsGridStatusHeader_render, _ReportsGrid_instances, _ReportsGrid_shadow, _ReportsGrid_reports, _ReportsGrid_protocolMonitorExperimentEnabled, _ReportsGrid_render, _ReportsGrid_buildReportRows;







const UIStrings = {
    /**
     *@description Placeholder text when there are no Reporting API reports.
     *(https://developers.google.com/web/updates/2018/09/reportingapi#sending)
     */
    noReportsToDisplay: 'No reports to display',
    /**
     *@description Column header for a table displaying Reporting API reports.
     *Status is one of 'Queued', 'Pending', 'MarkedForRemoval' or 'Success'.
     */
    status: 'Status',
    /**
     *@description Column header for a table displaying Reporting API reports.
     *Destination is the name of the endpoint the report is being sent to.
     */
    destination: 'Destination',
    /**
     *@description Column header for a table displaying Reporting API reports.
     *The column contains the timestamp of when a report was generated.
     */
    generatedAt: 'Generated at',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/application/components/ReportsGrid.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
const { render, html } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__;
class ReportsGridStatusHeader extends HTMLElement {
    constructor() {
        super(...arguments);
        _ReportsGridStatusHeader_instances.add(this);
        _ReportsGridStatusHeader_shadow.set(this, this.attachShadow({ mode: 'open' }));
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _ReportsGridStatusHeader_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportingApiGrid.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _ReportsGridStatusHeader_instances, "m", _ReportsGridStatusHeader_render).call(this);
    }
}
_ReportsGridStatusHeader_shadow = new WeakMap(), _ReportsGridStatusHeader_instances = new WeakSet(), _ReportsGridStatusHeader_render = function _ReportsGridStatusHeader_render() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    render(html `
      ${i18nString(UIStrings.status)}
      <x-link href="https://web.dev/reporting-api/#report-status"
      jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.link('report-status').track({ click: true })}>
        <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName} class="inline-icon" .data=${{
        iconName: 'help',
        color: 'var(--icon-link)',
        width: '16px',
        height: '16px',
    }}></${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName}>
      </x-link>
    `, __classPrivateFieldGet(this, _ReportsGridStatusHeader_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(ReportsGridStatusHeader, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.literal `devtools-resources-reports-grid-status-header`
});
class ReportsGrid extends HTMLElement {
    constructor() {
        super(...arguments);
        _ReportsGrid_instances.add(this);
        _ReportsGrid_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _ReportsGrid_reports.set(this, []);
        _ReportsGrid_protocolMonitorExperimentEnabled.set(this, false);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _ReportsGrid_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportingApiGrid.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldSet(this, _ReportsGrid_protocolMonitorExperimentEnabled, _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.isEnabled('protocol-monitor'), "f");
        __classPrivateFieldGet(this, _ReportsGrid_instances, "m", _ReportsGrid_render).call(this);
    }
    set data(data) {
        __classPrivateFieldSet(this, _ReportsGrid_reports, data.reports, "f");
        __classPrivateFieldGet(this, _ReportsGrid_instances, "m", _ReportsGrid_render).call(this);
    }
}
_ReportsGrid_shadow = new WeakMap(), _ReportsGrid_reports = new WeakMap(), _ReportsGrid_protocolMonitorExperimentEnabled = new WeakMap(), _ReportsGrid_instances = new WeakSet(), _ReportsGrid_render = function _ReportsGrid_render() {
    const reportsGridData = {
        columns: [
            {
                id: 'url',
                title: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedString('URL'),
                widthWeighting: 30,
                hideable: false,
                visible: true,
            },
            {
                id: 'type',
                title: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedString('Type'),
                widthWeighting: 20,
                hideable: false,
                visible: true,
            },
            {
                id: 'status',
                title: i18nString(UIStrings.status),
                widthWeighting: 20,
                hideable: false,
                visible: true,
                titleElement: html `
          <${ReportsGridStatusHeader.litTagName}></${ReportsGridStatusHeader.litTagName}>
          `,
            },
            {
                id: 'destination',
                title: i18nString(UIStrings.destination),
                widthWeighting: 20,
                hideable: false,
                visible: true,
            },
            {
                id: 'timestamp',
                title: i18nString(UIStrings.generatedAt),
                widthWeighting: 20,
                hideable: false,
                visible: true,
            },
            {
                id: 'body',
                title: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedString('Body'),
                widthWeighting: 20,
                hideable: false,
                visible: true,
            },
        ],
        rows: __classPrivateFieldGet(this, _ReportsGrid_instances, "m", _ReportsGrid_buildReportRows).call(this),
    };
    if (__classPrivateFieldGet(this, _ReportsGrid_protocolMonitorExperimentEnabled, "f")) {
        reportsGridData.columns.unshift({ id: 'id', title: 'ID', widthWeighting: 30, hideable: false, visible: true });
    }
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    render(html `
      <div class="reporting-container" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.section('reports')}>
        <div class="reporting-header">${_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedString('Reports')}</div>
        ${__classPrivateFieldGet(this, _ReportsGrid_reports, "f").length > 0 ? html `
          <${_ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_2__.DataGridController.DataGridController.litTagName} .data=${reportsGridData}>
          </${_ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_2__.DataGridController.DataGridController.litTagName}>
        ` : html `
          <div class="reporting-placeholder">
            <div>${i18nString(UIStrings.noReportsToDisplay)}</div>
          </div>
        `}
      </div>
    `, __classPrivateFieldGet(this, _ReportsGrid_shadow, "f"), { host: this });
    // clang-format on
}, _ReportsGrid_buildReportRows = function _ReportsGrid_buildReportRows() {
    return __classPrivateFieldGet(this, _ReportsGrid_reports, "f").map(report => ({
        cells: [
            { columnId: 'id', value: report.id },
            { columnId: 'url', value: report.initiatorUrl },
            { columnId: 'type', value: report.type },
            { columnId: 'status', value: report.status },
            { columnId: 'destination', value: report.destination },
            { columnId: 'timestamp', value: new Date(report.timestamp * 1000).toLocaleString() },
            { columnId: 'body', value: JSON.stringify(report.body) },
        ],
    }));
};
Object.defineProperty(ReportsGrid, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.literal `devtools-resources-reports-grid`
});
customElements.define('devtools-resources-reports-grid-status-header', ReportsGridStatusHeader);
customElements.define('devtools-resources-reports-grid', ReportsGrid);


/***/ })

}]);