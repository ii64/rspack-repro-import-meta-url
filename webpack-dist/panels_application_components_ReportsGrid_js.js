"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_application_components_ReportsGrid_js"],{

/***/ "./panels/application/components/ReportsGrid.js":
/*!******************************************************!*\
  !*** ./panels/application/components/ReportsGrid.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportsGrid: () => (/* binding */ ReportsGrid),
/* harmony export */   ReportsGridStatusHeader: () => (/* binding */ ReportsGridStatusHeader),
/* harmony export */   i18nString: () => (/* binding */ i18nString)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/root/root.js */ "./core/root/root.js");
/* harmony import */ var _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/data_grid/data_grid.js */ "./ui/components/data_grid/data_grid.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _reportingApiGrid_css_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reportingApiGrid.css.js */ "./panels/application/components/reportingApiGrid.css.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







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
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.literal `devtools-resources-reports-grid-status-header`;
    #shadow = this.attachShadow({ mode: 'open' });
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_reportingApiGrid_css_js__WEBPACK_IMPORTED_MODULE_6__["default"]];
        this.#render();
    }
    #render() {
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
    `, this.#shadow, { host: this });
        // clang-format on
    }
}
class ReportsGrid extends HTMLElement {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.literal `devtools-resources-reports-grid`;
    #shadow = this.attachShadow({ mode: 'open' });
    #reports = [];
    #protocolMonitorExperimentEnabled = false;
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_reportingApiGrid_css_js__WEBPACK_IMPORTED_MODULE_6__["default"]];
        this.#protocolMonitorExperimentEnabled = _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.isEnabled('protocol-monitor');
        this.#render();
    }
    set data(data) {
        this.#reports = data.reports;
        this.#render();
    }
    #render() {
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
            rows: this.#buildReportRows(),
        };
        if (this.#protocolMonitorExperimentEnabled) {
            reportsGridData.columns.unshift({ id: 'id', title: 'ID', widthWeighting: 30, hideable: false, visible: true });
        }
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        render(html `
      <div class="reporting-container" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.section('reports')}>
        <div class="reporting-header">${_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedString('Reports')}</div>
        ${this.#reports.length > 0 ? html `
          <${_ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_2__.DataGridController.DataGridController.litTagName} .data=${reportsGridData}>
          </${_ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_2__.DataGridController.DataGridController.litTagName}>
        ` : html `
          <div class="reporting-placeholder">
            <div>${i18nString(UIStrings.noReportsToDisplay)}</div>
          </div>
        `}
      </div>
    `, this.#shadow, { host: this });
        // clang-format on
    }
    #buildReportRows() {
        return this.#reports.map(report => ({
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
    }
}
customElements.define('devtools-resources-reports-grid-status-header', ReportsGridStatusHeader);
customElements.define('devtools-resources-reports-grid', ReportsGrid);
//# sourceMappingURL=ReportsGrid.js.map

/***/ }),

/***/ "./panels/application/components/reportingApiGrid.css.js":
/*!***************************************************************!*\
  !*** ./panels/application/components/reportingApiGrid.css.js ***!
  \***************************************************************/
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
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  overflow: auto;
  height: 100%;
}

.reporting-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.reporting-header {
  font-size: 15px;
  background-color: var(--sys-color-surface2);
  padding: 1px 4px;
}

.reporting-placeholder {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  color: var(--sys-color-token-subtle);
  min-width: min-content;
  text-align: center;
}

devtools-data-grid-controller {
  border: 1px solid var(--sys-color-divider);
}

.inline-icon {
  vertical-align: text-bottom;
}

/*# sourceURL=reportingApiGrid.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);