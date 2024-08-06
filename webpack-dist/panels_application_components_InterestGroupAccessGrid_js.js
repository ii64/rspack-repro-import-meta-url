"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_application_components_InterestGroupAccessGrid_js"],{

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


/***/ })

}]);