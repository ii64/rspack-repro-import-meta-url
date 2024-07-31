"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_components_components_ts"],{

/***/ "./src/panels/application/components/EndpointsGrid.ts":
/*!************************************************************!*\
  !*** ./src/panels/application/components/EndpointsGrid.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EndpointsGrid: () => (/* binding */ EndpointsGrid),
/* harmony export */   i18nString: () => (/* binding */ i18nString)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/data_grid/data_grid.js */ "./src/ui/components/data_grid/data_grid.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
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
var _EndpointsGrid_instances, _EndpointsGrid_shadow, _EndpointsGrid_endpoints, _EndpointsGrid_render, _EndpointsGrid_buildReportRows;





const UIStrings = {
    /**
     *@description Placeholder text when there are no Reporting API endpoints.
     *(https://developers.google.com/web/updates/2018/09/reportingapi#tldr)
     */
    noEndpointsToDisplay: 'No endpoints to display',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/application/components/EndpointsGrid.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
const { render, html } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__;
class EndpointsGrid extends HTMLElement {
    constructor() {
        super(...arguments);
        _EndpointsGrid_instances.add(this);
        _EndpointsGrid_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _EndpointsGrid_endpoints.set(this, new Map());
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _EndpointsGrid_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportingApiGrid.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _EndpointsGrid_instances, "m", _EndpointsGrid_render).call(this);
    }
    set data(data) {
        __classPrivateFieldSet(this, _EndpointsGrid_endpoints, data.endpoints, "f");
        __classPrivateFieldGet(this, _EndpointsGrid_instances, "m", _EndpointsGrid_render).call(this);
    }
}
_EndpointsGrid_shadow = new WeakMap(), _EndpointsGrid_endpoints = new WeakMap(), _EndpointsGrid_instances = new WeakSet(), _EndpointsGrid_render = function _EndpointsGrid_render() {
    const endpointsGridData = {
        columns: [
            {
                id: 'origin',
                title: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedString('Origin'),
                widthWeighting: 30,
                hideable: false,
                visible: true,
            },
            {
                id: 'name',
                title: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedString('Name'),
                widthWeighting: 20,
                hideable: false,
                visible: true,
            },
            {
                id: 'url',
                title: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedString('URL'),
                widthWeighting: 30,
                hideable: false,
                visible: true,
            },
        ],
        rows: __classPrivateFieldGet(this, _EndpointsGrid_instances, "m", _EndpointsGrid_buildReportRows).call(this),
    };
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    render(html `
      <div class="reporting-container" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.section('endpoints')}>
        <div class="reporting-header">${_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedString('Endpoints')}</div>
        ${__classPrivateFieldGet(this, _EndpointsGrid_endpoints, "f").size > 0 ? html `
          <${_ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_1__.DataGridController.DataGridController.litTagName} .data=${endpointsGridData}>
          </${_ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_1__.DataGridController.DataGridController.litTagName}>
        ` : html `
          <div class="reporting-placeholder">
            <div>${i18nString(UIStrings.noEndpointsToDisplay)}</div>
          </div>
        `}
      </div>
    `, __classPrivateFieldGet(this, _EndpointsGrid_shadow, "f"), { host: this });
    // clang-format on
}, _EndpointsGrid_buildReportRows = function _EndpointsGrid_buildReportRows() {
    return Array.from(__classPrivateFieldGet(this, _EndpointsGrid_endpoints, "f"))
        .map(([origin, endpointArray]) => endpointArray.map(endpoint => {
        return {
            cells: [
                { columnId: 'origin', value: origin },
                { columnId: 'name', value: endpoint.groupName },
                { columnId: 'url', value: endpoint.url },
            ],
        };
    }))
        .flat();
};
Object.defineProperty(EndpointsGrid, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.literal `devtools-resources-endpoints-grid`
});
customElements.define('devtools-resources-endpoints-grid', EndpointsGrid);


/***/ }),

/***/ "./src/panels/application/components/InterestGroupAccessGrid.ts":
/*!**********************************************************************!*\
  !*** ./src/panels/application/components/InterestGroupAccessGrid.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InterestGroupAccessGrid: () => (/* binding */ InterestGroupAccessGrid),
/* harmony export */   i18nString: () => (/* binding */ i18nString)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/data_grid/data_grid.js */ "./src/ui/components/data_grid/data_grid.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './interestGroupAccessGrid.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
var _InterestGroupAccessGrid_instances, _InterestGroupAccessGrid_shadow, _InterestGroupAccessGrid_datastores, _InterestGroupAccessGrid_render, _InterestGroupAccessGrid_renderGridOrNoDataMessage, _InterestGroupAccessGrid_buildRows, _InterestGroupAccessGrid_renderDateForDataGridCell;





const UIStrings = {
    /**
     *@description Hover text for an info icon in the Interest Group Event panel
     * An interest group is an ad targeting group stored on the browser that can
     * be used to show a certain set of advertisements in the future as the
     * outcome of a FLEDGE auction.
     */
    allInterestGroupStorageEvents: 'All interest group storage events.',
    /**
     *@description Text in InterestGroupStorage Items View of the Application panel
     * Date and time of an Interest Group storage event in a locale-
     * dependent format.
     */
    eventTime: 'Event Time',
    /**
     *@description Text in InterestGroupStorage Items View of the Application panel
     * Type of interest group event such as 'join', 'bid', 'win', or 'leave'.
     */
    eventType: 'Access Type',
    /**
     *@description Text in InterestGroupStorage Items View of the Application panel
     * Owner of the interest group. The origin that controls the
     * content of information associated with the interest group such as which
     * ads get displayed.
     */
    groupOwner: 'Owner',
    /**
     *@description Text in InterestGroupStorage Items View of the Application panel
     * Name of the interest group. The name is unique per-owner and identifies the
     * interest group.
     */
    groupName: 'Name',
    /**
     *@description Text shown instead of a table when the table would be empty.
     */
    noEvents: 'No interest group events recorded.',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/application/components/InterestGroupAccessGrid.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class InterestGroupAccessGrid extends HTMLElement {
    constructor() {
        super(...arguments);
        _InterestGroupAccessGrid_instances.add(this);
        _InterestGroupAccessGrid_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _InterestGroupAccessGrid_datastores.set(this, []);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _InterestGroupAccessGrid_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './interestGroupAccessGrid.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _InterestGroupAccessGrid_instances, "m", _InterestGroupAccessGrid_render).call(this);
    }
    set data(data) {
        __classPrivateFieldSet(this, _InterestGroupAccessGrid_datastores, data, "f");
        __classPrivateFieldGet(this, _InterestGroupAccessGrid_instances, "m", _InterestGroupAccessGrid_render).call(this);
    }
}
_InterestGroupAccessGrid_shadow = new WeakMap(), _InterestGroupAccessGrid_datastores = new WeakMap(), _InterestGroupAccessGrid_instances = new WeakSet(), _InterestGroupAccessGrid_render = function _InterestGroupAccessGrid_render() {
    // clang-format off
    _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `
      <div>
        <span class="heading">Interest Groups</span>
        <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.Icon.litTagName} class="info-icon" title=${i18nString(UIStrings.allInterestGroupStorageEvents)}
          .data=${{ iconName: 'info', color: 'var(--icon-default)', width: '16px' }}>
        </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.Icon.litTagName}>
        ${__classPrivateFieldGet(this, _InterestGroupAccessGrid_instances, "m", _InterestGroupAccessGrid_renderGridOrNoDataMessage).call(this)}
      </div>
    `, __classPrivateFieldGet(this, _InterestGroupAccessGrid_shadow, "f"), { host: this });
    // clang-format on
}, _InterestGroupAccessGrid_renderGridOrNoDataMessage = function _InterestGroupAccessGrid_renderGridOrNoDataMessage() {
    if (__classPrivateFieldGet(this, _InterestGroupAccessGrid_datastores, "f").length === 0) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `<div class="no-events-message">${i18nString(UIStrings.noEvents)}</div>`;
    }
    const gridData = {
        columns: [
            {
                id: 'event-time',
                title: i18nString(UIStrings.eventTime),
                widthWeighting: 10,
                hideable: false,
                visible: true,
                sortable: true,
            },
            {
                id: 'event-type',
                title: i18nString(UIStrings.eventType),
                widthWeighting: 5,
                hideable: false,
                visible: true,
                sortable: true,
            },
            {
                id: 'event-group-owner',
                title: i18nString(UIStrings.groupOwner),
                widthWeighting: 10,
                hideable: false,
                visible: true,
                sortable: true,
            },
            {
                id: 'event-group-name',
                title: i18nString(UIStrings.groupName),
                widthWeighting: 10,
                hideable: false,
                visible: true,
                sortable: true,
            },
        ],
        rows: __classPrivateFieldGet(this, _InterestGroupAccessGrid_instances, "m", _InterestGroupAccessGrid_buildRows).call(this),
        initialSort: {
            columnId: 'event-time',
            direction: _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_1__.DataGridUtils.SortDirection.ASC,
        },
    };
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `
      <${_ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_1__.DataGridController.DataGridController.litTagName} .data=${gridData}></${_ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_1__.DataGridController.DataGridController.litTagName}>
    `;
}, _InterestGroupAccessGrid_buildRows = function _InterestGroupAccessGrid_buildRows() {
    return __classPrivateFieldGet(this, _InterestGroupAccessGrid_datastores, "f").map(event => ({
        cells: [
            {
                columnId: 'event-time',
                value: event.accessTime,
                renderer: __classPrivateFieldGet(this, _InterestGroupAccessGrid_instances, "m", _InterestGroupAccessGrid_renderDateForDataGridCell).bind(this),
            },
            { columnId: 'event-type', value: event.type },
            { columnId: 'event-group-owner', value: event.ownerOrigin },
            { columnId: 'event-group-name', value: event.name },
        ],
    }));
}, _InterestGroupAccessGrid_renderDateForDataGridCell = function _InterestGroupAccessGrid_renderDateForDataGridCell(value) {
    const date = new Date(1e3 * value);
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `${date.toLocaleString()}`;
};
Object.defineProperty(InterestGroupAccessGrid, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal `devtools-interest-group-access-grid`
});
customElements.define('devtools-interest-group-access-grid', InterestGroupAccessGrid);


/***/ }),

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


/***/ }),

/***/ "./src/panels/application/components/ServiceWorkerRouterView.ts":
/*!**********************************************************************!*\
  !*** ./src/panels/application/components/ServiceWorkerRouterView.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceWorkerRouterView: () => (/* binding */ ServiceWorkerRouterView)
/* harmony export */ });
/* harmony import */ var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./src/ui/components/legacy_wrapper/legacy_wrapper.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './serviceWorkerRouterView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright (c) 2023 The Chromium Authors. All rights reserved.
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
var _ServiceWorkerRouterView_instances, _ServiceWorkerRouterView_shadow, _ServiceWorkerRouterView_rules, _ServiceWorkerRouterView_render, _ServiceWorkerRouterView_renderRouterRule;



const { html, render } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__;
class ServiceWorkerRouterView extends _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_0__.LegacyWrapper.WrappableComponent {
    constructor() {
        super(...arguments);
        _ServiceWorkerRouterView_instances.add(this);
        _ServiceWorkerRouterView_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _ServiceWorkerRouterView_rules.set(this, []);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _ServiceWorkerRouterView_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './serviceWorkerRouterView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
    update(rules) {
        __classPrivateFieldSet(this, _ServiceWorkerRouterView_rules, rules, "f");
        if (__classPrivateFieldGet(this, _ServiceWorkerRouterView_rules, "f").length > 0) {
            __classPrivateFieldGet(this, _ServiceWorkerRouterView_instances, "m", _ServiceWorkerRouterView_render).call(this);
        }
    }
}
_ServiceWorkerRouterView_shadow = new WeakMap(), _ServiceWorkerRouterView_rules = new WeakMap(), _ServiceWorkerRouterView_instances = new WeakSet(), _ServiceWorkerRouterView_render = function _ServiceWorkerRouterView_render() {
    // clang-format off
    render(html `
      <ul class="router-rules">
        ${__classPrivateFieldGet(this, _ServiceWorkerRouterView_rules, "f").map(__classPrivateFieldGet(this, _ServiceWorkerRouterView_instances, "m", _ServiceWorkerRouterView_renderRouterRule))}
      </ul>
    `, __classPrivateFieldGet(this, _ServiceWorkerRouterView_shadow, "f"), { host: this });
    // clang-format on
}, _ServiceWorkerRouterView_renderRouterRule = function _ServiceWorkerRouterView_renderRouterRule(rule) {
    return html `
      <li class="router-rule">
        <div class="rule-id">Rule ${rule.id}</div>
        <ul class="item">
          <li class="condition">
            <div class="rule-type">Condition</div>
            <div class="rule-value">${rule.condition}</div>
          </li>
          <li class="source">
            <div class="rule-type">Source</div>
            <div class="rule-value">${rule.source}</div>
          </li>
        </ul>
      </li>
    `;
};
Object.defineProperty(ServiceWorkerRouterView, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal `devtools-service-worker-router-view`
});
customElements.define('devtools-service-worker-router-view', ServiceWorkerRouterView);


/***/ }),

/***/ "./src/panels/application/components/SharedStorageAccessGrid.ts":
/*!**********************************************************************!*\
  !*** ./src/panels/application/components/SharedStorageAccessGrid.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedStorageAccessGrid: () => (/* binding */ SharedStorageAccessGrid),
/* harmony export */   i18nString: () => (/* binding */ i18nString)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/data_grid/data_grid.js */ "./src/ui/components/data_grid/data_grid.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './sharedStorageAccessGrid.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
var _SharedStorageAccessGrid_instances, _SharedStorageAccessGrid_shadow, _SharedStorageAccessGrid_datastores, _SharedStorageAccessGrid_render, _SharedStorageAccessGrid_renderGridOrNoDataMessage, _SharedStorageAccessGrid_buildRows, _SharedStorageAccessGrid_renderDateForDataGridCell;





const UIStrings = {
    /**
     *@description Text in Shared Storage Events View of the Application panel
     */
    sharedStorage: 'Shared storage',
    /**
     *@description Hover text for an info icon in the Shared Storage Events panel
     */
    allSharedStorageEvents: 'All shared storage events for this page.',
    /**
     *@description Text in Shared Storage Events View of the Application panel
     * Date and time of an Shared Storage event in a locale-
     * dependent format.
     */
    eventTime: 'Event Time',
    /**
     *@description Text in Shared Storage Events View of the Application panel
     * Type of shared storage event such as 'documentAddModule', 'documentRun',
     * 'documentSet', 'workletDelete', or 'workletGet'.
     */
    eventType: 'Access Type',
    /**
     *@description Text in Shared Storage Events View of the Application panel
     * Id of the page's main frame for this access event.
     */
    mainFrameId: 'Main Frame ID',
    /**
     *@description Text in Shared Storage Events View of the Application panel
     * Owner origin of the shared storage for this access event.
     */
    ownerOrigin: 'Owner Origin',
    /**
     *@description Text in Shared Storage Events View of the Application panel
     * Event parameters whose presence/absence depend on the access type.
     */
    eventParams: 'Optional Event Params',
    /**
     *@description Text shown instead of a table when the table would be empty.
     */
    noEvents: 'No shared storage events recorded.',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/application/components/SharedStorageAccessGrid.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class SharedStorageAccessGrid extends HTMLElement {
    constructor() {
        super(...arguments);
        _SharedStorageAccessGrid_instances.add(this);
        _SharedStorageAccessGrid_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _SharedStorageAccessGrid_datastores.set(this, []);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _SharedStorageAccessGrid_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './sharedStorageAccessGrid.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _SharedStorageAccessGrid_instances, "m", _SharedStorageAccessGrid_render).call(this);
    }
    set data(data) {
        __classPrivateFieldSet(this, _SharedStorageAccessGrid_datastores, data, "f");
        __classPrivateFieldGet(this, _SharedStorageAccessGrid_instances, "m", _SharedStorageAccessGrid_render).call(this);
    }
}
_SharedStorageAccessGrid_shadow = new WeakMap(), _SharedStorageAccessGrid_datastores = new WeakMap(), _SharedStorageAccessGrid_instances = new WeakSet(), _SharedStorageAccessGrid_render = function _SharedStorageAccessGrid_render() {
    // clang-format off
    _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `
      <div>
        <span class="heading">${i18nString(UIStrings.sharedStorage)}</span>
        <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.Icon.litTagName} class="info-icon" title=${i18nString(UIStrings.allSharedStorageEvents)}
          .data=${{ iconName: 'info',
        color: 'var(--icon-default)', width: '16px' }}>
        </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.Icon.litTagName}>
        ${__classPrivateFieldGet(this, _SharedStorageAccessGrid_instances, "m", _SharedStorageAccessGrid_renderGridOrNoDataMessage).call(this)}
      </div>
    `, __classPrivateFieldGet(this, _SharedStorageAccessGrid_shadow, "f"), { host: this });
    // clang-format on
}, _SharedStorageAccessGrid_renderGridOrNoDataMessage = function _SharedStorageAccessGrid_renderGridOrNoDataMessage() {
    if (__classPrivateFieldGet(this, _SharedStorageAccessGrid_datastores, "f").length === 0) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `<div
        class="no-events-message">${i18nString(UIStrings.noEvents)}</div>`;
    }
    const gridData = {
        columns: [
            {
                id: 'event-main-frame-id',
                title: i18nString(UIStrings.mainFrameId),
                widthWeighting: 10,
                hideable: false,
                visible: false,
                sortable: false,
            },
            {
                id: 'event-time',
                title: i18nString(UIStrings.eventTime),
                widthWeighting: 10,
                hideable: false,
                visible: true,
                sortable: true,
            },
            {
                id: 'event-type',
                title: i18nString(UIStrings.eventType),
                widthWeighting: 10,
                hideable: false,
                visible: true,
                sortable: true,
            },
            {
                id: 'event-owner-origin',
                title: i18nString(UIStrings.ownerOrigin),
                widthWeighting: 10,
                hideable: false,
                visible: true,
                sortable: true,
            },
            {
                id: 'event-params',
                title: i18nString(UIStrings.eventParams),
                widthWeighting: 10,
                hideable: false,
                visible: true,
                sortable: true,
            },
        ],
        rows: __classPrivateFieldGet(this, _SharedStorageAccessGrid_instances, "m", _SharedStorageAccessGrid_buildRows).call(this),
        initialSort: {
            columnId: 'event-time',
            direction: _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_1__.DataGridUtils.SortDirection.ASC,
        },
    };
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `
      <${_ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_1__.DataGridController.DataGridController.litTagName} .data=${gridData}></${_ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_1__.DataGridController.DataGridController.litTagName}>
    `;
}, _SharedStorageAccessGrid_buildRows = function _SharedStorageAccessGrid_buildRows() {
    return __classPrivateFieldGet(this, _SharedStorageAccessGrid_datastores, "f").map(event => ({
        cells: [
            { columnId: 'event-main-frame-id', value: event.mainFrameId },
            {
                columnId: 'event-time',
                value: event.accessTime,
                renderer: __classPrivateFieldGet(this, _SharedStorageAccessGrid_instances, "m", _SharedStorageAccessGrid_renderDateForDataGridCell).bind(this),
            },
            { columnId: 'event-type', value: event.type },
            { columnId: 'event-owner-origin', value: event.ownerOrigin },
            { columnId: 'event-params', value: JSON.stringify(event.params) },
        ],
    }));
}, _SharedStorageAccessGrid_renderDateForDataGridCell = function _SharedStorageAccessGrid_renderDateForDataGridCell(value) {
    const date = new Date(1e3 * value);
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `${date.toLocaleString()}`;
};
Object.defineProperty(SharedStorageAccessGrid, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal `devtools-shared-storage-access-grid`
});
customElements.define('devtools-shared-storage-access-grid', SharedStorageAccessGrid);


/***/ }),

/***/ "./src/panels/application/components/SharedStorageMetadataView.ts":
/*!************************************************************************!*\
  !*** ./src/panels/application/components/SharedStorageMetadataView.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedStorageMetadataView: () => (/* binding */ SharedStorageMetadataView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./src/ui/components/buttons/buttons.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './sharedStorageMetadataView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _StorageMetadataView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StorageMetadataView.js */ "./src/panels/application/components/StorageMetadataView.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SharedStorageMetadataView_instances, _SharedStorageMetadataView_sharedStorageMetadataGetter, _SharedStorageMetadataView_creationTime, _SharedStorageMetadataView_length, _SharedStorageMetadataView_bytesUsed, _SharedStorageMetadataView_remainingBudget, _SharedStorageMetadataView_resetBudget, _SharedStorageMetadataView_renderDateForCreationTime, _SharedStorageMetadataView_renderResetBudgetButton;






const UIStrings = {
    /**
     *@description Text in SharedStorage Metadata View of the Application panel
     */
    sharedStorage: 'Shared storage',
    /**
     *@description The time when the origin most recently created its shared storage database
     */
    creation: 'Creation Time',
    /**
     *@description The placeholder text if there is no creation time because the origin is not yet using shared storage.
     */
    notYetCreated: 'Not yet created',
    /**
     *@description The number of entries currently in the origin's database
     */
    numEntries: 'Number of Entries',
    /**
     *@description The number of bits remaining in the origin's shared storage privacy budget
     */
    entropyBudget: 'Entropy Budget for Fenced Frames',
    /**
     *@description Hover text for `entropyBudget` giving a more detailed explanation
     */
    budgetExplanation: 'Remaining data leakage allowed within a 24-hour period for this origin in bits of entropy',
    /**
     *@description Label for a button which when clicked causes the budget to be reset to the max.
     */
    resetBudget: 'Reset Budget',
    /**
     *@description The number of bytes used by entries currently in the origin's database
     */
    numBytesUsed: 'Number of Bytes Used',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/application/components/SharedStorageMetadataView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class SharedStorageMetadataView extends _StorageMetadataView_js__WEBPACK_IMPORTED_MODULE_5__.StorageMetadataView {
    constructor(sharedStorageMetadataGetter, owner) {
        super();
        _SharedStorageMetadataView_instances.add(this);
        _SharedStorageMetadataView_sharedStorageMetadataGetter.set(this, void 0);
        _SharedStorageMetadataView_creationTime.set(this, null);
        _SharedStorageMetadataView_length.set(this, 0);
        _SharedStorageMetadataView_bytesUsed.set(this, 0);
        _SharedStorageMetadataView_remainingBudget.set(this, 0);
        __classPrivateFieldSet(this, _SharedStorageMetadataView_sharedStorageMetadataGetter, sharedStorageMetadataGetter, "f");
        this.classList.add('overflow-auto');
        this.setStorageKey(owner);
    }
    connectedCallback() {
        this.getShadow().adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './sharedStorageMetadataView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
    getTitle() {
        return i18nString(UIStrings.sharedStorage);
    }
    async renderReportContent() {
        const metadata = await __classPrivateFieldGet(this, _SharedStorageMetadataView_sharedStorageMetadataGetter, "f").getMetadata();
        __classPrivateFieldSet(this, _SharedStorageMetadataView_creationTime, metadata?.creationTime ?? null, "f");
        __classPrivateFieldSet(this, _SharedStorageMetadataView_length, metadata?.length ?? 0, "f");
        __classPrivateFieldSet(this, _SharedStorageMetadataView_bytesUsed, metadata?.bytesUsed ?? 0, "f");
        __classPrivateFieldSet(this, _SharedStorageMetadataView_remainingBudget, metadata?.remainingBudget ?? 0, "f");
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `
      ${await super.renderReportContent()}
      ${this.key(i18nString(UIStrings.creation))}
      ${this.value(__classPrivateFieldGet(this, _SharedStorageMetadataView_instances, "m", _SharedStorageMetadataView_renderDateForCreationTime).call(this))}
      ${this.key(i18nString(UIStrings.numEntries))}
      ${this.value(String(__classPrivateFieldGet(this, _SharedStorageMetadataView_length, "f")))}
      ${this.key(i18nString(UIStrings.numBytesUsed))}
      ${this.value(String(__classPrivateFieldGet(this, _SharedStorageMetadataView_bytesUsed, "f")))}
      ${this.key(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `${i18nString(UIStrings.entropyBudget)}<${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.Icon.litTagName} name="info" title=${i18nString(UIStrings.budgetExplanation)}></${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.Icon.litTagName}>`)}
      ${this.value(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `${__classPrivateFieldGet(this, _SharedStorageMetadataView_remainingBudget, "f")}${__classPrivateFieldGet(this, _SharedStorageMetadataView_instances, "m", _SharedStorageMetadataView_renderResetBudgetButton).call(this)}`)}`;
        // clang-format on
    }
}
_SharedStorageMetadataView_sharedStorageMetadataGetter = new WeakMap(), _SharedStorageMetadataView_creationTime = new WeakMap(), _SharedStorageMetadataView_length = new WeakMap(), _SharedStorageMetadataView_bytesUsed = new WeakMap(), _SharedStorageMetadataView_remainingBudget = new WeakMap(), _SharedStorageMetadataView_instances = new WeakSet(), _SharedStorageMetadataView_resetBudget = async function _SharedStorageMetadataView_resetBudget() {
    await __classPrivateFieldGet(this, _SharedStorageMetadataView_sharedStorageMetadataGetter, "f").resetBudget();
    await this.render();
}, _SharedStorageMetadataView_renderDateForCreationTime = function _SharedStorageMetadataView_renderDateForCreationTime() {
    if (!__classPrivateFieldGet(this, _SharedStorageMetadataView_creationTime, "f")) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `${i18nString(UIStrings.notYetCreated)}`;
    }
    const date = new Date(1e3 * __classPrivateFieldGet(this, _SharedStorageMetadataView_creationTime, "f"));
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `${date.toLocaleString()}`;
}, _SharedStorageMetadataView_renderResetBudgetButton = function _SharedStorageMetadataView_renderResetBudgetButton() {
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `
      <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button.litTagName} .iconName=${'undo'}
                                           .jslogContext=${'reset-entropy-budget'}
                                           .size=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Size.SMALL}
                                           .title=${i18nString(UIStrings.resetBudget)}
                                           .variant=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Variant.ICON}
                                           @click=${__classPrivateFieldGet(this, _SharedStorageMetadataView_instances, "m", _SharedStorageMetadataView_resetBudget).bind(this)}></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button.litTagName}>
    `;
    // clang-format on
};
Object.defineProperty(SharedStorageMetadataView, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal `devtools-shared-storage-metadata-view`
});
customElements.define('devtools-shared-storage-metadata-view', SharedStorageMetadataView);


/***/ }),

/***/ "./src/panels/application/components/TrustTokensView.ts":
/*!**************************************************************!*\
  !*** ./src/panels/application/components/TrustTokensView.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TrustTokensView: () => (/* binding */ TrustTokensView),
/* harmony export */   i18nString: () => (/* binding */ i18nString)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./src/ui/components/buttons/buttons.ts");
/* harmony import */ var _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/data_grid/data_grid.js */ "./src/ui/components/data_grid/data_grid.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./src/ui/components/legacy_wrapper/legacy_wrapper.ts");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./src/ui/components/render_coordinator/render_coordinator.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './trustTokensView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _TrustTokensView_instances, _TrustTokensView_shadow, _TrustTokensView_deleteClickHandler, _TrustTokensView_renderGridOrNoDataMessage, _TrustTokensView_buildRowsFromTokens, _TrustTokensView_deleteButtonRendererForDataGridCell;









const UIStrings = {
    /**
     *@description Text for the issuer of an item
     */
    issuer: 'Issuer',
    /**
     *@description Column header for Trust Token table
     */
    storedTokenCount: 'Stored token count',
    /**
     *@description Hover text for an info icon in the Private State Token panel
     */
    allStoredTrustTokensAvailableIn: 'All stored private state tokens available in this browser instance.',
    /**
     * @description Text shown instead of a table when the table would be empty.
     */
    noTrustTokensStored: 'No private state tokens are currently stored.',
    /**
     * @description Each row in the Private State Token table has a delete button. This is the text shown
     * when hovering over this button. The placeholder is a normal URL, indicating the site which
     * provided the Private State Tokens that will be deleted when the button is clicked.
     * @example {https://google.com} PH1
     */
    deleteTrustTokens: 'Delete all stored private state tokens issued by {PH1}.',
    /**
     * @description Heading label for a view. Previously known as 'Trust Tokens'.
     */
    trustTokens: 'Private state tokens',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/application/components/TrustTokensView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_6__.RenderCoordinator.RenderCoordinator.instance();
/** Fetch the Trust Token data regularly from the backend while the panel is open */
const REFRESH_INTERVAL_MS = 1000;
class TrustTokensView extends _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_5__.LegacyWrapper.WrappableComponent {
    constructor() {
        super(...arguments);
        _TrustTokensView_instances.add(this);
        _TrustTokensView_shadow.set(this, this.attachShadow({ mode: 'open' }));
    }
    connectedCallback() {
        this.wrapper?.contentElement.classList.add('vbox');
        __classPrivateFieldGet(this, _TrustTokensView_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './trustTokensView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        void this.render();
    }
    async render() {
        const mainTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().primaryPageTarget();
        if (!mainTarget) {
            return;
        }
        const { tokens } = await mainTarget.storageAgent().invoke_getTrustTokens();
        await coordinator.write('Render TrustTokensView', () => {
            // clang-format off
            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `
        <div>
          <span class="heading">${i18nString(UIStrings.trustTokens)}</span>
          <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.Icon.litTagName} name="info" title=${i18nString(UIStrings.allStoredTrustTokensAvailableIn)}></${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.Icon.litTagName}>
          ${__classPrivateFieldGet(this, _TrustTokensView_instances, "m", _TrustTokensView_renderGridOrNoDataMessage).call(this, tokens)}
        </div>
      `, __classPrivateFieldGet(this, _TrustTokensView_shadow, "f"), { host: this });
            // clang-format on
            if (this.isConnected) {
                setTimeout(() => this.render(), REFRESH_INTERVAL_MS);
            }
        });
    }
}
_TrustTokensView_shadow = new WeakMap(), _TrustTokensView_instances = new WeakSet(), _TrustTokensView_deleteClickHandler = function _TrustTokensView_deleteClickHandler(issuerOrigin) {
    const mainTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().primaryPageTarget();
    void mainTarget?.storageAgent().invoke_clearTrustTokens({ issuerOrigin });
}, _TrustTokensView_renderGridOrNoDataMessage = function _TrustTokensView_renderGridOrNoDataMessage(tokens) {
    if (tokens.length === 0) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `<div class="no-tt-message">${i18nString(UIStrings.noTrustTokensStored)}</div>`;
    }
    const gridData = {
        columns: [
            {
                id: 'issuer',
                title: i18nString(UIStrings.issuer),
                widthWeighting: 10,
                hideable: false,
                visible: true,
                sortable: true,
            },
            {
                id: 'count',
                title: i18nString(UIStrings.storedTokenCount),
                widthWeighting: 5,
                hideable: false,
                visible: true,
                sortable: true,
            },
            {
                id: 'delete-button',
                title: '',
                widthWeighting: 1,
                hideable: false,
                visible: true,
                sortable: false,
            },
        ],
        rows: __classPrivateFieldGet(this, _TrustTokensView_instances, "m", _TrustTokensView_buildRowsFromTokens).call(this, tokens),
        initialSort: {
            columnId: 'issuer',
            direction: _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGridUtils.SortDirection.ASC,
        },
    };
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `
      <${_ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGridController.DataGridController.litTagName} .data=${gridData}></${_ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGridController.DataGridController.litTagName}>
    `;
}, _TrustTokensView_buildRowsFromTokens = function _TrustTokensView_buildRowsFromTokens(tokens) {
    return tokens.filter(token => token.count > 0)
        .map(token => ({
        cells: [
            {
                columnId: 'delete-button',
                value: removeTrailingSlash(token.issuerOrigin),
                renderer: __classPrivateFieldGet(this, _TrustTokensView_instances, "m", _TrustTokensView_deleteButtonRendererForDataGridCell).bind(this),
            },
            { columnId: 'issuer', value: removeTrailingSlash(token.issuerOrigin) },
            { columnId: 'count', value: token.count },
        ],
    }));
}, _TrustTokensView_deleteButtonRendererForDataGridCell = function _TrustTokensView_deleteButtonRendererForDataGridCell(issuer) {
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `
      <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName} .iconName=${'bin'}
                                           .jslogContext=${'delete-all'}
                                           .size=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Size.SMALL}
                                           .title=${i18nString(UIStrings.deleteTrustTokens, { PH1: issuer })}
                                           .variant=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Variant.ICON}
                                           @click=${__classPrivateFieldGet(this, _TrustTokensView_instances, "m", _TrustTokensView_deleteClickHandler).bind(this, issuer)}></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}>
    `;
    // clang-format on
};
Object.defineProperty(TrustTokensView, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.literal `devtools-trust-tokens-storage-view`
});
function removeTrailingSlash(s) {
    return s.replace(/\/$/, '');
}
customElements.define('devtools-trust-tokens-storage-view', TrustTokensView);


/***/ }),

/***/ "./src/panels/application/components/components.ts":
/*!*********************************************************!*\
  !*** ./src/panels/application/components/components.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BackForwardCacheView: () => (/* reexport module object */ _BackForwardCacheView_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   BounceTrackingMitigationsView: () => (/* reexport module object */ _BounceTrackingMitigationsView_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   EndpointsGrid: () => (/* reexport module object */ _EndpointsGrid_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   FrameDetailsView: () => (/* reexport module object */ _FrameDetailsView_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   InterestGroupAccessGrid: () => (/* reexport module object */ _InterestGroupAccessGrid_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   OriginTrialTreeView: () => (/* reexport module object */ _OriginTrialTreeView_js__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   ProtocolHandlersView: () => (/* reexport module object */ _ProtocolHandlersView_js__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   ReportsGrid: () => (/* reexport module object */ _ReportsGrid_js__WEBPACK_IMPORTED_MODULE_7__),
/* harmony export */   ServiceWorkerRouterView: () => (/* reexport module object */ _ServiceWorkerRouterView_js__WEBPACK_IMPORTED_MODULE_8__),
/* harmony export */   SharedStorageAccessGrid: () => (/* reexport module object */ _SharedStorageAccessGrid_js__WEBPACK_IMPORTED_MODULE_9__),
/* harmony export */   SharedStorageMetadataView: () => (/* reexport module object */ _SharedStorageMetadataView_js__WEBPACK_IMPORTED_MODULE_10__),
/* harmony export */   StackTrace: () => (/* reexport module object */ _StackTrace_js__WEBPACK_IMPORTED_MODULE_11__),
/* harmony export */   StorageMetadataView: () => (/* reexport module object */ _StorageMetadataView_js__WEBPACK_IMPORTED_MODULE_12__),
/* harmony export */   TrustTokensView: () => (/* reexport module object */ _TrustTokensView_js__WEBPACK_IMPORTED_MODULE_13__)
/* harmony export */ });
/* harmony import */ var _BackForwardCacheView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BackForwardCacheView.js */ "./src/panels/application/components/BackForwardCacheView.ts");
/* harmony import */ var _BounceTrackingMitigationsView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BounceTrackingMitigationsView.js */ "./src/panels/application/components/BounceTrackingMitigationsView.ts");
/* harmony import */ var _EndpointsGrid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EndpointsGrid.js */ "./src/panels/application/components/EndpointsGrid.ts");
/* harmony import */ var _FrameDetailsView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FrameDetailsView.js */ "./src/panels/application/components/FrameDetailsView.ts");
/* harmony import */ var _InterestGroupAccessGrid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InterestGroupAccessGrid.js */ "./src/panels/application/components/InterestGroupAccessGrid.ts");
/* harmony import */ var _OriginTrialTreeView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OriginTrialTreeView.js */ "./src/panels/application/components/OriginTrialTreeView.ts");
/* harmony import */ var _ProtocolHandlersView_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProtocolHandlersView.js */ "./src/panels/application/components/ProtocolHandlersView.ts");
/* harmony import */ var _ReportsGrid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ReportsGrid.js */ "./src/panels/application/components/ReportsGrid.ts");
/* harmony import */ var _ServiceWorkerRouterView_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ServiceWorkerRouterView.js */ "./src/panels/application/components/ServiceWorkerRouterView.ts");
/* harmony import */ var _SharedStorageAccessGrid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SharedStorageAccessGrid.js */ "./src/panels/application/components/SharedStorageAccessGrid.ts");
/* harmony import */ var _SharedStorageMetadataView_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SharedStorageMetadataView.js */ "./src/panels/application/components/SharedStorageMetadataView.ts");
/* harmony import */ var _StackTrace_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./StackTrace.js */ "./src/panels/application/components/StackTrace.ts");
/* harmony import */ var _StorageMetadataView_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./StorageMetadataView.js */ "./src/panels/application/components/StorageMetadataView.ts");
/* harmony import */ var _TrustTokensView_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./TrustTokensView.js */ "./src/panels/application/components/TrustTokensView.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

















/***/ })

}]);