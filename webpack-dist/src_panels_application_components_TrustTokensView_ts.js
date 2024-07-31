"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_components_TrustTokensView_ts"],{

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


/***/ })

}]);