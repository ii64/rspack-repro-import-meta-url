"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_application_components_components_js"],{

/***/ "./panels/application/components/EndpointsGrid.js":
/*!********************************************************!*\
  !*** ./panels/application/components/EndpointsGrid.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EndpointsGrid: () => (/* binding */ EndpointsGrid),
/* harmony export */   i18nString: () => (/* binding */ i18nString)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/data_grid/data_grid.js */ "./ui/components/data_grid/data_grid.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _reportingApiGrid_css_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reportingApiGrid.css.js */ "./panels/application/components/reportingApiGrid.css.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





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
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.literal `devtools-resources-endpoints-grid`;
    #shadow = this.attachShadow({ mode: 'open' });
    #endpoints = new Map();
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_reportingApiGrid_css_js__WEBPACK_IMPORTED_MODULE_4__["default"]];
        this.#render();
    }
    set data(data) {
        this.#endpoints = data.endpoints;
        this.#render();
    }
    #render() {
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
            rows: this.#buildReportRows(),
        };
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        render(html `
      <div class="reporting-container" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.section('endpoints')}>
        <div class="reporting-header">${_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedString('Endpoints')}</div>
        ${this.#endpoints.size > 0 ? html `
          <${_ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_1__.DataGridController.DataGridController.litTagName} .data=${endpointsGridData}>
          </${_ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_1__.DataGridController.DataGridController.litTagName}>
        ` : html `
          <div class="reporting-placeholder">
            <div>${i18nString(UIStrings.noEndpointsToDisplay)}</div>
          </div>
        `}
      </div>
    `, this.#shadow, { host: this });
        // clang-format on
    }
    #buildReportRows() {
        return Array.from(this.#endpoints)
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
    }
}
customElements.define('devtools-resources-endpoints-grid', EndpointsGrid);
//# sourceMappingURL=EndpointsGrid.js.map

/***/ }),

/***/ "./panels/application/components/InterestGroupAccessGrid.js":
/*!******************************************************************!*\
  !*** ./panels/application/components/InterestGroupAccessGrid.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InterestGroupAccessGrid: () => (/* binding */ InterestGroupAccessGrid),
/* harmony export */   i18nString: () => (/* binding */ i18nString)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/data_grid/data_grid.js */ "./ui/components/data_grid/data_grid.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _interestGroupAccessGrid_css_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interestGroupAccessGrid.css.js */ "./panels/application/components/interestGroupAccessGrid.css.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





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
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal `devtools-interest-group-access-grid`;
    #shadow = this.attachShadow({ mode: 'open' });
    #datastores = [];
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_interestGroupAccessGrid_css_js__WEBPACK_IMPORTED_MODULE_4__["default"]];
        this.#render();
    }
    set data(data) {
        this.#datastores = data;
        this.#render();
    }
    #render() {
        // clang-format off
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `
      <div>
        <span class="heading">Interest Groups</span>
        <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.Icon.litTagName} class="info-icon" title=${i18nString(UIStrings.allInterestGroupStorageEvents)}
          .data=${{ iconName: 'info', color: 'var(--icon-default)', width: '16px' }}>
        </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.Icon.litTagName}>
        ${this.#renderGridOrNoDataMessage()}
      </div>
    `, this.#shadow, { host: this });
        // clang-format on
    }
    #renderGridOrNoDataMessage() {
        if (this.#datastores.length === 0) {
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
            rows: this.#buildRows(),
            initialSort: {
                columnId: 'event-time',
                direction: "ASC" /* DataGrid.DataGridUtils.SortDirection.ASC */,
            },
        };
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `
      <${_ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_1__.DataGridController.DataGridController.litTagName} .data=${gridData}></${_ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_1__.DataGridController.DataGridController.litTagName}>
    `;
    }
    #buildRows() {
        return this.#datastores.map(event => ({
            cells: [
                {
                    columnId: 'event-time',
                    value: event.accessTime,
                    renderer: this.#renderDateForDataGridCell.bind(this),
                },
                { columnId: 'event-type', value: event.type },
                { columnId: 'event-group-owner', value: event.ownerOrigin },
                { columnId: 'event-group-name', value: event.name },
            ],
        }));
    }
    #renderDateForDataGridCell(value) {
        const date = new Date(1e3 * value);
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `${date.toLocaleString()}`;
    }
}
customElements.define('devtools-interest-group-access-grid', InterestGroupAccessGrid);
//# sourceMappingURL=InterestGroupAccessGrid.js.map

/***/ }),

/***/ "./panels/application/components/ProtocolHandlersView.js":
/*!***************************************************************!*\
  !*** ./panels/application/components/ProtocolHandlersView.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProtocolHandlersView: () => (/* binding */ ProtocolHandlersView)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/components/input/input.js */ "./ui/components/input/input.js");
/* harmony import */ var _ui_legacy_inspectorCommon_css_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/legacy/inspectorCommon.css.js */ "./ui/legacy/inspectorCommon.css.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _protocolHandlersView_css_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./protocolHandlersView.css.js */ "./panels/application/components/protocolHandlersView.css.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






// inspectorCommonStyles is imported for the chrome-select class that is used for the dropdown
// eslint-disable-next-line rulesdir/es_modules_import





const PROTOCOL_DOCUMENT_URL = 'https://web.dev/url-protocol-handler/';
const UIStrings = {
    /**
     *@description Status message for when protocol handlers are detected in the manifest
     *@example {protocolhandler/manifest.json} PH1
     */
    protocolDetected: 'Found valid protocol handler registration in the {PH1}. With the app installed, test the registered protocols.',
    /**
     *@description Status message for when protocol handlers are not detected in the manifest
     *@example {protocolhandler/manifest.json} PH1
     */
    protocolNotDetected: 'Define protocol handlers in the {PH1} to register your app as a handler for custom protocols when your app is installed.',
    /**
     *@description Text wrapping a link pointing to more information on handling protocol handlers
     *@example {https://example.com/} PH1
     */
    needHelpReadOur: 'Need help? Read {PH1}.',
    /**
     *@description Link text for more information on URL protocol handler registrations for PWAs
     */
    protocolHandlerRegistrations: 'URL protocol handler registration for PWAs',
    /**
     *@description In text hyperlink to the PWA manifest
     */
    manifest: 'manifest',
    /**
     *@description Text for test protocol button
     */
    testProtocol: 'Test protocol',
    /**
     * @description Aria text for screen reader to announce they can select a protocol handler in the dropdown
     */
    dropdownLabel: 'Select protocol handler',
    /**
     * @description Aria text for screen reader to announce they can enter query parameters or endpoints into the textbox
     */
    textboxLabel: 'Query parameter or endpoint for protocol handler',
    /**
     * @description Placeholder for textbox input field, rest of the URL of protocol to test.
     */
    textboxPlaceholder: 'Enter URL',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/application/components/ProtocolHandlersView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class ProtocolHandlersView extends HTMLElement {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.literal `devtools-protocol-handlers-view`;
    #shadow = this.attachShadow({ mode: 'open' });
    #protocolHandlers = [];
    #manifestLink = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.DevToolsPath.EmptyUrlString;
    #selectedProtocolState = '';
    #queryInputState = '';
    set data(data) {
        const isNewManifest = this.#manifestLink !== data.manifestLink;
        this.#protocolHandlers = data.protocolHandlers;
        this.#manifestLink = data.manifestLink;
        if (isNewManifest) {
            this.#update();
        }
    }
    #update() {
        this.#queryInputState = '';
        this.#selectedProtocolState = this.#protocolHandlers[0]?.protocol ?? '';
        this.#render();
    }
    #renderStatusMessage() {
        const manifestInTextLink = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.XLink.XLink.create(this.#manifestLink, i18nString(UIStrings.manifest), undefined, undefined, 'manifest');
        const statusString = this.#protocolHandlers.length > 0 ? UIStrings.protocolDetected : UIStrings.protocolNotDetected;
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html `
    <div class="protocol-handlers-row status">
            <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.Icon.litTagName} class="inline-icon"
                                                name=${this.#protocolHandlers.length > 0 ? 'check-circle' : 'info'}>
            </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.Icon.litTagName}>
            ${_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getFormatLocalizedString(str_, statusString, {
            PH1: manifestInTextLink,
        })}
    </div>
    `;
        // clang-format on
    }
    #renderProtocolTest() {
        if (this.#protocolHandlers.length === 0) {
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.nothing;
        }
        const protocolOptions = this.#protocolHandlers.filter(p => p.protocol)
            .map(p => _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html `<option value=${p.protocol} jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__.item(p.protocol).track({
            click: true,
        })}>${p.protocol}://</option>`);
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html `
       <div class="protocol-handlers-row">
        <select class="chrome-select protocol-select" @change=${this.#handleProtocolSelect} aria-label=${i18nString(UIStrings.dropdownLabel)}>
           ${protocolOptions}
        </select>
        <input .value=${this.#queryInputState} class="devtools-text-input" type="text" @change=${this.#handleQueryInputChange} aria-label=${i18nString(UIStrings.textboxLabel)}
        placeholder=${i18nString(UIStrings.textboxPlaceholder)}/>
        <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_3__.Button.Button.litTagName} .variant=${"primary" /* Buttons.Button.Variant.PRIMARY */} @click=${this.#handleTestProtocolClick}>
            ${i18nString(UIStrings.testProtocol)}
        </${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_3__.Button.Button.litTagName}>
        </div>
      `;
    }
    #handleProtocolSelect = (evt) => {
        this.#selectedProtocolState = evt.target.value;
    };
    #handleQueryInputChange = (evt) => {
        this.#queryInputState = evt.target.value;
        this.#render();
    };
    #handleTestProtocolClick = () => {
        const protocolURL = `${this.#selectedProtocolState}://${this.#queryInputState}`;
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance.openInNewTab(protocolURL);
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.Action.CaptureTestProtocolClicked);
    };
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [
            _protocolHandlersView_css_js__WEBPACK_IMPORTED_MODULE_10__["default"],
            _ui_legacy_inspectorCommon_css_js__WEBPACK_IMPORTED_MODULE_6__["default"],
            _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_5__.textInputStyles,
        ];
    }
    #render() {
        const protocolDocLink = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.XLink.XLink.create(PROTOCOL_DOCUMENT_URL, i18nString(UIStrings.protocolHandlerRegistrations), undefined, undefined, 'learn-more');
        // clang-format off
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html `
      ${this.#renderStatusMessage()}
      <div class="protocol-handlers-row">
          ${_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getFormatLocalizedString(str_, UIStrings.needHelpReadOur, { PH1: protocolDocLink })}
      </div>
      ${this.#renderProtocolTest()}
    `, this.#shadow, { host: this });
        // clang-format on
    }
}
customElements.define('devtools-protocol-handlers-view', ProtocolHandlersView);
//# sourceMappingURL=ProtocolHandlersView.js.map

/***/ }),

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

/***/ "./panels/application/components/ServiceWorkerRouterView.js":
/*!******************************************************************!*\
  !*** ./panels/application/components/ServiceWorkerRouterView.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceWorkerRouterView: () => (/* binding */ ServiceWorkerRouterView)
/* harmony export */ });
/* harmony import */ var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./ui/components/legacy_wrapper/legacy_wrapper.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _serviceWorkerRouterView_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./serviceWorkerRouterView.css.js */ "./panels/application/components/serviceWorkerRouterView.css.js");
// Copyright (c) 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



const { html, render } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__;
class ServiceWorkerRouterView extends _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_0__.LegacyWrapper.WrappableComponent {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal `devtools-service-worker-router-view`;
    #shadow = this.attachShadow({ mode: 'open' });
    #rules = [];
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_serviceWorkerRouterView_css_js__WEBPACK_IMPORTED_MODULE_2__["default"]];
    }
    update(rules) {
        this.#rules = rules;
        if (this.#rules.length > 0) {
            this.#render();
        }
    }
    #render() {
        // clang-format off
        render(html `
      <ul class="router-rules">
        ${this.#rules.map(this.#renderRouterRule)}
      </ul>
    `, this.#shadow, { host: this });
        // clang-format on
    }
    #renderRouterRule(rule) {
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
    }
}
customElements.define('devtools-service-worker-router-view', ServiceWorkerRouterView);
//# sourceMappingURL=ServiceWorkerRouterView.js.map

/***/ }),

/***/ "./panels/application/components/SharedStorageAccessGrid.js":
/*!******************************************************************!*\
  !*** ./panels/application/components/SharedStorageAccessGrid.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedStorageAccessGrid: () => (/* binding */ SharedStorageAccessGrid),
/* harmony export */   i18nString: () => (/* binding */ i18nString)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/data_grid/data_grid.js */ "./ui/components/data_grid/data_grid.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _sharedStorageAccessGrid_css_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sharedStorageAccessGrid.css.js */ "./panels/application/components/sharedStorageAccessGrid.css.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





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
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal `devtools-shared-storage-access-grid`;
    #shadow = this.attachShadow({ mode: 'open' });
    #datastores = [];
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_sharedStorageAccessGrid_css_js__WEBPACK_IMPORTED_MODULE_4__["default"]];
        this.#render();
    }
    set data(data) {
        this.#datastores = data;
        this.#render();
    }
    #render() {
        // clang-format off
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `
      <div>
        <span class="heading">${i18nString(UIStrings.sharedStorage)}</span>
        <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.Icon.litTagName} class="info-icon" title=${i18nString(UIStrings.allSharedStorageEvents)}
          .data=${{ iconName: 'info',
            color: 'var(--icon-default)', width: '16px' }}>
        </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.Icon.litTagName}>
        ${this.#renderGridOrNoDataMessage()}
      </div>
    `, this.#shadow, { host: this });
        // clang-format on
    }
    #renderGridOrNoDataMessage() {
        if (this.#datastores.length === 0) {
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
            rows: this.#buildRows(),
            initialSort: {
                columnId: 'event-time',
                direction: "ASC" /* DataGrid.DataGridUtils.SortDirection.ASC */,
            },
        };
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `
      <${_ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_1__.DataGridController.DataGridController.litTagName} .data=${gridData}></${_ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_1__.DataGridController.DataGridController.litTagName}>
    `;
    }
    #buildRows() {
        return this.#datastores.map(event => ({
            cells: [
                { columnId: 'event-main-frame-id', value: event.mainFrameId },
                {
                    columnId: 'event-time',
                    value: event.accessTime,
                    renderer: this.#renderDateForDataGridCell.bind(this),
                },
                { columnId: 'event-type', value: event.type },
                { columnId: 'event-owner-origin', value: event.ownerOrigin },
                { columnId: 'event-params', value: JSON.stringify(event.params) },
            ],
        }));
    }
    #renderDateForDataGridCell(value) {
        const date = new Date(1e3 * value);
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `${date.toLocaleString()}`;
    }
}
customElements.define('devtools-shared-storage-access-grid', SharedStorageAccessGrid);
//# sourceMappingURL=SharedStorageAccessGrid.js.map

/***/ }),

/***/ "./panels/application/components/SharedStorageMetadataView.js":
/*!********************************************************************!*\
  !*** ./panels/application/components/SharedStorageMetadataView.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedStorageMetadataView: () => (/* binding */ SharedStorageMetadataView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _sharedStorageMetadataView_css_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sharedStorageMetadataView.css.js */ "./panels/application/components/sharedStorageMetadataView.css.js");
/* harmony import */ var _StorageMetadataView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StorageMetadataView.js */ "./panels/application/components/StorageMetadataView.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






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
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal `devtools-shared-storage-metadata-view`;
    #sharedStorageMetadataGetter;
    #creationTime = null;
    #length = 0;
    #bytesUsed = 0;
    #remainingBudget = 0;
    constructor(sharedStorageMetadataGetter, owner) {
        super();
        this.#sharedStorageMetadataGetter = sharedStorageMetadataGetter;
        this.classList.add('overflow-auto');
        this.setStorageKey(owner);
    }
    async #resetBudget() {
        await this.#sharedStorageMetadataGetter.resetBudget();
        await this.render();
    }
    connectedCallback() {
        this.getShadow().adoptedStyleSheets = [_sharedStorageMetadataView_css_js__WEBPACK_IMPORTED_MODULE_4__["default"]];
    }
    getTitle() {
        return i18nString(UIStrings.sharedStorage);
    }
    async renderReportContent() {
        const metadata = await this.#sharedStorageMetadataGetter.getMetadata();
        this.#creationTime = metadata?.creationTime ?? null;
        this.#length = metadata?.length ?? 0;
        this.#bytesUsed = metadata?.bytesUsed ?? 0;
        this.#remainingBudget = metadata?.remainingBudget ?? 0;
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `
      ${await super.renderReportContent()}
      ${this.key(i18nString(UIStrings.creation))}
      ${this.value(this.#renderDateForCreationTime())}
      ${this.key(i18nString(UIStrings.numEntries))}
      ${this.value(String(this.#length))}
      ${this.key(i18nString(UIStrings.numBytesUsed))}
      ${this.value(String(this.#bytesUsed))}
      ${this.key(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `${i18nString(UIStrings.entropyBudget)}<${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.Icon.litTagName} name="info" title=${i18nString(UIStrings.budgetExplanation)}></${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.Icon.litTagName}>`)}
      ${this.value(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `${this.#remainingBudget}${this.#renderResetBudgetButton()}`)}`;
        // clang-format on
    }
    #renderDateForCreationTime() {
        if (!this.#creationTime) {
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `${i18nString(UIStrings.notYetCreated)}`;
        }
        const date = new Date(1e3 * this.#creationTime);
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `${date.toLocaleString()}`;
    }
    #renderResetBudgetButton() {
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `
      <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button.litTagName} .iconName=${'undo'}
                                           .jslogContext=${'reset-entropy-budget'}
                                           .size=${"SMALL" /* Buttons.Button.Size.SMALL */}
                                           .title=${i18nString(UIStrings.resetBudget)}
                                           .variant=${"icon" /* Buttons.Button.Variant.ICON */}
                                           @click=${this.#resetBudget.bind(this)}></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button.litTagName}>
    `;
        // clang-format on
    }
}
customElements.define('devtools-shared-storage-metadata-view', SharedStorageMetadataView);
//# sourceMappingURL=SharedStorageMetadataView.js.map

/***/ }),

/***/ "./panels/application/components/TrustTokensView.js":
/*!**********************************************************!*\
  !*** ./panels/application/components/TrustTokensView.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TrustTokensView: () => (/* binding */ TrustTokensView),
/* harmony export */   i18nString: () => (/* binding */ i18nString)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */ var _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/data_grid/data_grid.js */ "./ui/components/data_grid/data_grid.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./ui/components/legacy_wrapper/legacy_wrapper.js");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _trustTokensView_css_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./trustTokensView.css.js */ "./panels/application/components/trustTokensView.css.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.









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
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.literal `devtools-trust-tokens-storage-view`;
    #shadow = this.attachShadow({ mode: 'open' });
    #deleteClickHandler(issuerOrigin) {
        const mainTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().primaryPageTarget();
        void mainTarget?.storageAgent().invoke_clearTrustTokens({ issuerOrigin });
    }
    connectedCallback() {
        this.wrapper?.contentElement.classList.add('vbox');
        this.#shadow.adoptedStyleSheets = [_trustTokensView_css_js__WEBPACK_IMPORTED_MODULE_8__["default"]];
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
          ${this.#renderGridOrNoDataMessage(tokens)}
        </div>
      `, this.#shadow, { host: this });
            // clang-format on
            if (this.isConnected) {
                setTimeout(() => this.render(), REFRESH_INTERVAL_MS);
            }
        });
    }
    #renderGridOrNoDataMessage(tokens) {
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
            rows: this.#buildRowsFromTokens(tokens),
            initialSort: {
                columnId: 'issuer',
                direction: "ASC" /* DataGrid.DataGridUtils.SortDirection.ASC */,
            },
        };
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `
      <${_ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGridController.DataGridController.litTagName} .data=${gridData}></${_ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGridController.DataGridController.litTagName}>
    `;
    }
    #buildRowsFromTokens(tokens) {
        return tokens.filter(token => token.count > 0)
            .map(token => ({
            cells: [
                {
                    columnId: 'delete-button',
                    value: removeTrailingSlash(token.issuerOrigin),
                    renderer: this.#deleteButtonRendererForDataGridCell.bind(this),
                },
                { columnId: 'issuer', value: removeTrailingSlash(token.issuerOrigin) },
                { columnId: 'count', value: token.count },
            ],
        }));
    }
    #deleteButtonRendererForDataGridCell(issuer) {
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `
      <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName} .iconName=${'bin'}
                                           .jslogContext=${'delete-all'}
                                           .size=${"SMALL" /* Buttons.Button.Size.SMALL */}
                                           .title=${i18nString(UIStrings.deleteTrustTokens, { PH1: issuer })}
                                           .variant=${"icon" /* Buttons.Button.Variant.ICON */}
                                           @click=${this.#deleteClickHandler.bind(this, issuer)}></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}>
    `;
        // clang-format on
    }
}
function removeTrailingSlash(s) {
    return s.replace(/\/$/, '');
}
customElements.define('devtools-trust-tokens-storage-view', TrustTokensView);
//# sourceMappingURL=TrustTokensView.js.map

/***/ }),

/***/ "./panels/application/components/components.js":
/*!*****************************************************!*\
  !*** ./panels/application/components/components.js ***!
  \*****************************************************/
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
/* harmony import */ var _BackForwardCacheView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BackForwardCacheView.js */ "./panels/application/components/BackForwardCacheView.js");
/* harmony import */ var _BounceTrackingMitigationsView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BounceTrackingMitigationsView.js */ "./panels/application/components/BounceTrackingMitigationsView.js");
/* harmony import */ var _EndpointsGrid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EndpointsGrid.js */ "./panels/application/components/EndpointsGrid.js");
/* harmony import */ var _FrameDetailsView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FrameDetailsView.js */ "./panels/application/components/FrameDetailsView.js");
/* harmony import */ var _InterestGroupAccessGrid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InterestGroupAccessGrid.js */ "./panels/application/components/InterestGroupAccessGrid.js");
/* harmony import */ var _OriginTrialTreeView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OriginTrialTreeView.js */ "./panels/application/components/OriginTrialTreeView.js");
/* harmony import */ var _ProtocolHandlersView_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProtocolHandlersView.js */ "./panels/application/components/ProtocolHandlersView.js");
/* harmony import */ var _ReportsGrid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ReportsGrid.js */ "./panels/application/components/ReportsGrid.js");
/* harmony import */ var _ServiceWorkerRouterView_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ServiceWorkerRouterView.js */ "./panels/application/components/ServiceWorkerRouterView.js");
/* harmony import */ var _SharedStorageAccessGrid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SharedStorageAccessGrid.js */ "./panels/application/components/SharedStorageAccessGrid.js");
/* harmony import */ var _SharedStorageMetadataView_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SharedStorageMetadataView.js */ "./panels/application/components/SharedStorageMetadataView.js");
/* harmony import */ var _StackTrace_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./StackTrace.js */ "./panels/application/components/StackTrace.js");
/* harmony import */ var _StorageMetadataView_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./StorageMetadataView.js */ "./panels/application/components/StorageMetadataView.js");
/* harmony import */ var _TrustTokensView_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./TrustTokensView.js */ "./panels/application/components/TrustTokensView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.















//# sourceMappingURL=components.js.map

/***/ }),

/***/ "./panels/application/components/interestGroupAccessGrid.css.js":
/*!**********************************************************************!*\
  !*** ./panels/application/components/interestGroupAccessGrid.css.js ***!
  \**********************************************************************/
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
 * Copyright (c) 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */
:host {
  padding: 20px;
}

.heading {
  font-size: 15px;
}

devtools-data-grid-controller {
  border: 1px solid var(--sys-color-divider);
  margin-top: 20px;
}

.info-icon {
  vertical-align: text-bottom;
  height: 14px;
}

.no-events-message {
  margin-top: 20px;
}

/*# sourceURL=interestGroupAccessGrid.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./panels/application/components/protocolHandlersView.css.js":
/*!*******************************************************************!*\
  !*** ./panels/application/components/protocolHandlersView.css.js ***!
  \*******************************************************************/
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
 * Copyright (c) 2022 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.devtools-link {
  color: var(--sys-color-primary);
  text-decoration: underline;
  cursor: pointer;
  outline-offset: 2px;
}

.devtools-link:focus-visible {
  outline-width: unset;
}

input.devtools-text-input[type="text"] {
  padding: 3px 6px;
  margin-left: 4px;
  margin-right: 4px;
  width: 250px;
  height: 25px;
}

input.devtools-text-input[type="text"]::placeholder {
  color: var(--sys-color-token-subtle);
}

.protocol-handlers-row {
  margin: 10px 0 2px 18px;
}

.inline-icon {
  margin-inline: 4px;
  width: 16px;
  height: 16px;

  &[name="check-circle"] {
    color: var(--icon-checkmark-green);
  }
}

@media (forced-colors: active) {
  .devtools-link:not(.devtools-link-prevent-click) {
    color: linktext;
  }

  .devtools-link:focus-visible {
    background: Highlight;
    color: HighlightText;
  }
}

/*# sourceURL=protocolHandlersView.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


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


/***/ }),

/***/ "./panels/application/components/serviceWorkerRouterView.css.js":
/*!**********************************************************************!*\
  !*** ./panels/application/components/serviceWorkerRouterView.css.js ***!
  \**********************************************************************/
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
  display: block;
  white-space: normal;
  max-width: 400px;
}

.router-rules {
  border: 1px solid var(--sys-color-divider);
  border-spacing: 0;
  padding-left: 10px;
  padding-right: 10px;
  line-height: initial;
  margin-top: 0;
  padding-bottom: 12px;
  text-wrap: balance;
}

.router-rule {
  display: flex;
  margin-top: 12px;
  flex-direction: column;
}

.rule-id {
  color: var(--sys-color-token-subtle);
}

.item {
  display: flex;
  flex-direction: column;
  padding-left: 10px;
}

.condition,
.source {
  list-style: none;
  display: flex;
  margin-top: 4px;
  flex-direction: row;
}

.condition > *,
.source > * {
  word-break: break-all;
  line-height: 1.5em;
}

.rule-type {
  flex: 0 0 18%;
}

/*# sourceURL=serviceWorkerRouterView.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./panels/application/components/sharedStorageAccessGrid.css.js":
/*!**********************************************************************!*\
  !*** ./panels/application/components/sharedStorageAccessGrid.css.js ***!
  \**********************************************************************/
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
 * Copyright (c) 2022 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */
:host {
  padding: 20px;
}

.heading {
  font-size: 15px;
}

devtools-data-grid-controller {
  border: 1px solid var(--sys-color-divider);
  margin-top: 20px;
}

.info-icon {
  vertical-align: text-bottom;
  height: 14px;
}

.no-events-message {
  margin-top: 20px;
}

/*# sourceURL=sharedStorageAccessGrid.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./panels/application/components/sharedStorageMetadataView.css.js":
/*!************************************************************************!*\
  !*** ./panels/application/components/sharedStorageMetadataView.css.js ***!
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
 * Copyright (c) 2022 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.text-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

devtools-icon {
  vertical-align: text-bottom;
  margin-left: 2px;
  width: 16px;
  height: 16px;
}

devtools-button {
  vertical-align: sub;
}

/*# sourceURL=sharedStorageMetadataView.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./panels/application/components/trustTokensView.css.js":
/*!**************************************************************!*\
  !*** ./panels/application/components/trustTokensView.css.js ***!
  \**************************************************************/
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
 * Copyright (c) 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  padding: 20px;
}

.heading {
  font-size: 15px;
}

devtools-data-grid-controller {
  border: 1px solid var(--sys-color-divider);
  margin-top: 20px;

  & devtools-button {
    width: 14px;
    height: 14px;
  }
}

devtools-icon {
  width: 14px;
  height: 14px;
}

.no-tt-message {
  margin-top: 20px;
}

/*# sourceURL=trustTokensView.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);