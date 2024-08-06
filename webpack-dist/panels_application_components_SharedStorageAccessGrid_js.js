"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_application_components_SharedStorageAccessGrid_js"],{

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


/***/ })

}]);