"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_application_components_EndpointsGrid_js"],{

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