"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_application_preloading_components_PreloadingMismatchedHeadersGrid_js"],{

/***/ "./panels/application/preloading/components/PreloadingMismatchedHeadersGrid.js":
/*!*************************************************************************************!*\
  !*** ./panels/application/preloading/components/PreloadingMismatchedHeadersGrid.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PreloadingMismatchedHeadersGrid: () => (/* binding */ PreloadingMismatchedHeadersGrid),
/* harmony export */   i18nString: () => (/* binding */ i18nString)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../ui/components/data_grid/data_grid.js */ "./ui/components/data_grid/data_grid.js");
/* harmony import */ var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./ui/components/legacy_wrapper/legacy_wrapper.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _preloadingGrid_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./preloadingGrid.css.js */ "./panels/application/preloading/components/preloadingGrid.css.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






const UIStrings = {
    /**
     *@description The name of the HTTP request header.
     */
    headerName: 'Header name',
    /**
     *@description The value of the HTTP request header in initial navigation.
     */
    initialNavigationValue: 'Value in initial navigation',
    /**
     *@description The value of the HTTP request header in activation navigation.
     */
    activationNavigationValue: 'Value in activation navigation',
    /**
     *@description The string to indicate the value of the header is missing.
     */
    missing: '(missing)',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/application/preloading/components/PreloadingMismatchedHeadersGrid.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
const { render, html } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__;
class PreloadingMismatchedHeadersGrid extends _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_3__.LegacyWrapper.WrappableComponent {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.literal `devtools-resources-preloading-mismatched-headers-grid`;
    #shadow = this.attachShadow({ mode: 'open' });
    #data = null;
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_preloadingGrid_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]];
        this.#render();
    }
    set data(data) {
        if (data.mismatchedHeaders === null) {
            return;
        }
        this.#data = data;
        this.#render();
    }
    #render() {
        if (this.#data === null) {
            return;
        }
        const reportsGridData = {
            columns: [
                {
                    id: 'header-name',
                    title: i18nString(UIStrings.headerName),
                    widthWeighting: 30,
                    hideable: false,
                    visible: true,
                    sortable: true,
                },
                {
                    id: 'initial-value',
                    title: i18nString(UIStrings.initialNavigationValue),
                    widthWeighting: 30,
                    hideable: false,
                    visible: true,
                    sortable: true,
                },
                {
                    id: 'activation-value',
                    title: i18nString(UIStrings.activationNavigationValue),
                    widthWeighting: 30,
                    hideable: false,
                    visible: true,
                    sortable: true,
                },
            ],
            rows: this.#buildReportRows(),
            striped: true,
        };
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        render(html `
        <div class="preloading-container">
          <${_ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_2__.DataGridController.DataGridController.litTagName} .data=${reportsGridData}>
          </${_ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_2__.DataGridController.DataGridController.litTagName}>
        </div>
      `, this.#shadow, { host: this });
        // clang-format on
    }
    #buildReportRows() {
        (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.assertNotNullOrUndefined)(this.#data);
        (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.assertNotNullOrUndefined)(this.#data.mismatchedHeaders);
        return this.#data.mismatchedHeaders.map(mismatchedHeaders => ({
            cells: [
                {
                    columnId: 'header-name',
                    value: mismatchedHeaders.headerName,
                },
                {
                    columnId: 'initial-value',
                    value: mismatchedHeaders.initialValue ?? i18nString(UIStrings.missing),
                },
                {
                    columnId: 'activation-value',
                    value: mismatchedHeaders.activationValue ?? i18nString(UIStrings.missing),
                },
            ],
        }));
    }
}
customElements.define('devtools-resources-preloading-mismatched-headers-grid', PreloadingMismatchedHeadersGrid);
//# sourceMappingURL=PreloadingMismatchedHeadersGrid.js.map

/***/ }),

/***/ "./panels/application/preloading/components/preloadingGrid.css.js":
/*!************************************************************************!*\
  !*** ./panels/application/preloading/components/preloadingGrid.css.js ***!
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
 * Copyright 2022 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  overflow: auto;
  height: 100%;
}

.preloading-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.preloading-header {
  font-size: 15px;
  background-color: var(--sys-color-cdt-base-container);
  padding: 1px 4px;
}

.preloading-placeholder {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  color: var(--sys-color-token-subtle);
}

devtools-data-grid-controller {
  border: 1px solid var(--sys-color-divider);
}

.inline-icon {
  vertical-align: text-bottom;
}

/*# sourceURL=preloadingGrid.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);