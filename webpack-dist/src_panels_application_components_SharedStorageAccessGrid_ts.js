"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_components_SharedStorageAccessGrid_ts"],{

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


/***/ })

}]);