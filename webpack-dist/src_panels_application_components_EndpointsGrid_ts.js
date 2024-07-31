"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_components_EndpointsGrid_ts"],{

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


/***/ })

}]);