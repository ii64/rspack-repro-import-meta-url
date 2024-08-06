"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_application_components_TrustTokensView_js"],{

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