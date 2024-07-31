"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_components_InterestGroupAccessGrid_ts"],{

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


/***/ })

}]);