"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_application_preloading_components_components_js"],{

/***/ "./panels/application/preloading/components/PreloadingGrid.js":
/*!********************************************************************!*\
  !*** ./panels/application/preloading/components/PreloadingGrid.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PreloadingGrid: () => (/* binding */ PreloadingGrid),
/* harmony export */   i18nString: () => (/* binding */ i18nString)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ui/components/data_grid/data_grid.js */ "./ui/components/data_grid/data_grid.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./ui/components/legacy_wrapper/legacy_wrapper.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _preloadingGrid_css_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./preloadingGrid.css.js */ "./panels/application/preloading/components/preloadingGrid.css.js");
/* harmony import */ var _PreloadingString_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PreloadingString.js */ "./panels/application/preloading/components/PreloadingString.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.










const UIStrings = {
    /**
     *@description Column header: Action of preloading (prefetch/prerender)
     */
    action: 'Action',
    /**
     *@description Column header: A rule set of preloading
     */
    ruleSet: 'Rule set',
    /**
     *@description Column header: Status of preloading attempt
     */
    status: 'Status',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/application/preloading/components/PreloadingGrid.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
const { render, html } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__;
// Grid component to show prerendering attempts.
class PreloadingGrid extends _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_6__.LegacyWrapper.WrappableComponent {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.literal `devtools-resources-preloading-grid`;
    #shadow = this.attachShadow({ mode: 'open' });
    #data = null;
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_preloadingGrid_css_js__WEBPACK_IMPORTED_MODULE_8__["default"]];
        this.#render();
    }
    update(data) {
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
                    id: 'url',
                    title: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString('URL'),
                    widthWeighting: 40,
                    hideable: false,
                    visible: true,
                    sortable: true,
                },
                {
                    id: 'action',
                    title: i18nString(UIStrings.action),
                    widthWeighting: 15,
                    hideable: false,
                    visible: true,
                    sortable: true,
                },
                {
                    id: 'rule-set',
                    title: i18nString(UIStrings.ruleSet),
                    widthWeighting: 20,
                    hideable: false,
                    visible: true,
                    sortable: true,
                },
                {
                    id: 'status',
                    title: i18nString(UIStrings.status),
                    widthWeighting: 40,
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
        <${_ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__.DataGridController.DataGridController.litTagName} .data=${reportsGridData}>
        </${_ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__.DataGridController.DataGridController.litTagName}>
      </div>
    `, this.#shadow, { host: this });
        // clang-format on
    }
    #buildReportRows() {
        function statusRenderer(statusString, status) {
            if (status !== "Failure" /* SDK.PreloadingModel.PreloadingStatus.Failure */) {
                return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `<div>${statusString}</div>`;
            }
            // Disabled until https://crbug.com/1079231 is fixed.
            // clang-format off
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `
        <div
          style=${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.Directives.styleMap({
                color: 'var(--sys-color-error)',
            })}
        >
          <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon.litTagName}
            .data=${{
                iconName: 'cross-circle-filled',
                color: 'var(--sys-color-error)',
                width: '16px',
                height: '16px',
            }}
            style=${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.Directives.styleMap({
                'vertical-align': 'sub',
            })}
          >
          </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon.litTagName}>
          ${statusString}
        </div>
      `;
            // clang-format on
        }
        (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.assertNotNullOrUndefined)(this.#data);
        const pageURL = this.#data.pageURL;
        const securityOrigin = pageURL === '' ? null : (new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL(pageURL)).securityOrigin();
        return this.#data.rows.map(row => ({
            cells: [
                { columnId: 'id', value: row.id },
                {
                    columnId: 'url',
                    value: this.#urlShort(row, securityOrigin),
                    title: row.attempt.key.url,
                },
                { columnId: 'action', value: _PreloadingString_js__WEBPACK_IMPORTED_MODULE_9__.capitalizedAction(row.attempt.action) },
                {
                    columnId: 'rule-set',
                    value: row.ruleSets.length === 0 ? '' : _PreloadingString_js__WEBPACK_IMPORTED_MODULE_9__.ruleSetLocationShort(row.ruleSets[0], pageURL),
                },
                {
                    columnId: 'status',
                    value: _PreloadingString_js__WEBPACK_IMPORTED_MODULE_9__.composedStatus(row.attempt),
                    renderer: status => statusRenderer(status, row.attempt.status),
                },
            ],
        }));
    }
    // Shorten URL if a preloading attempt is same-origin.
    #urlShort(row, securityOrigin) {
        const url = row.attempt.key.url;
        return securityOrigin && url.startsWith(securityOrigin) ? url.slice(securityOrigin.length) : url;
    }
}
customElements.define('devtools-resources-preloading-grid', PreloadingGrid);
//# sourceMappingURL=PreloadingGrid.js.map

/***/ }),

/***/ "./panels/application/preloading/components/RuleSetDetailsView.css.js":
/*!****************************************************************************!*\
  !*** ./panels/application/preloading/components/RuleSetDetailsView.css.js ***!
  \****************************************************************************/
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

.ruleset-header {
  padding: 4px 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-bottom: 1px solid var(--sys-color-divider);
}

.ruleset-header devtools-icon {
  vertical-align: sub;
}

/*# sourceURL=RuleSetDetailsView.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./panels/application/preloading/components/RuleSetDetailsView.js":
/*!************************************************************************!*\
  !*** ./panels/application/preloading/components/RuleSetDetailsView.js ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RuleSetDetailsView: () => (/* binding */ RuleSetDetailsView)
/* harmony export */ });
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../third_party/codemirror.next/codemirror.next.js */ "./third_party/codemirror.next/codemirror.next.js");
/* harmony import */ var _ui_components_code_highlighter_code_highlighter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ui/components/code_highlighter/code_highlighter.js */ "./ui/components/code_highlighter/code_highlighter.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./ui/components/legacy_wrapper/legacy_wrapper.js");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */ var _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../ui/components/text_editor/text_editor.js */ "./ui/components/text_editor/text_editor.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _RuleSetDetailsView_css_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./RuleSetDetailsView.css.js */ "./panels/application/preloading/components/RuleSetDetailsView.css.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.










const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_6__.RenderCoordinator.RenderCoordinator.instance();
const codeMirrorJsonType = await _ui_components_code_highlighter_code_highlighter_js__WEBPACK_IMPORTED_MODULE_3__.CodeHighlighter.languageFromMIME('application/json');
class RuleSetDetailsView extends _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_5__.LegacyWrapper.WrappableComponent {
    #shadow = this.attachShadow({ mode: 'open' });
    #data = null;
    #editorState;
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_RuleSetDetailsView_css_js__WEBPACK_IMPORTED_MODULE_9__["default"]];
    }
    set data(data) {
        this.#data = data;
        void this.#render();
    }
    async #render() {
        await coordinator.write('RuleSetDetailsView render', () => {
            if (this.#data === null) {
                _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.nothing, this.#shadow, { host: this });
                return;
            }
            // Disabled until https://crbug.com/1079231 is fixed.
            // clang-format off
            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html `
        <div class="content">
          <div class="ruleset-header" id="ruleset-url">${this.#data?.url || _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().inspectedURL()}</div>
          ${this.#maybeError()}
        </div>
        <div class="text-ellipsis">
          ${this.#renderSource()}
        </div>
      `, this.#shadow, { host: this });
            // clang-format on
        });
    }
    // TODO(https://crbug.com/1425354): Support i18n.
    #maybeError() {
        (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.assertNotNullOrUndefined)(this.#data);
        if (this.#data.errorMessage === undefined) {
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.nothing;
        }
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html `
      <div class="ruleset-header">
        <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.Icon.litTagName}
          .data=${{
            iconName: 'cross-circle',
            color: 'var(--icon-error)',
            width: '16px',
            height: '16px',
        }}>
        </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.Icon.litTagName}>
        <span id="error-message-text">${this.#data.errorMessage}</span>
      </div>
    `;
        // clang-format on
    }
    #renderSource() {
        this.#editorState = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_2__.EditorState.create({
            doc: this.#data?.sourceText,
            extensions: [
                _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_7__.Config.baseConfiguration(this.#data?.sourceText || ''),
                _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_2__.lineNumbers(),
                _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_2__.EditorState.readOnly.of(true),
                codeMirrorJsonType,
                _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_2__.syntaxHighlighting(_ui_components_code_highlighter_code_highlighter_js__WEBPACK_IMPORTED_MODULE_3__.CodeHighlighter.highlightStyle),
            ],
        });
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        // TODO(https://crbug.com/1425354): Add Raw button.
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html `
        <${_ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_7__.TextEditor.TextEditor.litTagName} .style.flexGrow = '1' .state=${this.#editorState}></${_ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_7__.TextEditor.TextEditor.litTagName}>
      `;
        // clang-format on
    }
}
customElements.define('devtools-resources-rulesets-details-view', RuleSetDetailsView);
//# sourceMappingURL=RuleSetDetailsView.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./panels/application/preloading/components/components.js":
/*!****************************************************************!*\
  !*** ./panels/application/preloading/components/components.js ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MismatchedPreloadingGrid: () => (/* reexport module object */ _MismatchedPreloadingGrid_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   PreloadingDetailsReportView: () => (/* reexport module object */ _PreloadingDetailsReportView_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   PreloadingDisabledInfobar: () => (/* reexport module object */ _PreloadingDisabledInfobar_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   PreloadingGrid: () => (/* reexport module object */ _PreloadingGrid_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   PreloadingMismatchedHeadersGrid: () => (/* reexport module object */ _PreloadingMismatchedHeadersGrid_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   RuleSetDetailsView: () => (/* reexport module object */ _RuleSetDetailsView_js__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   RuleSetGrid: () => (/* reexport module object */ _RuleSetGrid_js__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   UsedPreloadingView: () => (/* reexport module object */ _UsedPreloadingView_js__WEBPACK_IMPORTED_MODULE_7__)
/* harmony export */ });
/* harmony import */ var _MismatchedPreloadingGrid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MismatchedPreloadingGrid.js */ "./panels/application/preloading/components/MismatchedPreloadingGrid.js");
/* harmony import */ var _PreloadingDetailsReportView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PreloadingDetailsReportView.js */ "./panels/application/preloading/components/PreloadingDetailsReportView.js");
/* harmony import */ var _PreloadingDisabledInfobar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PreloadingDisabledInfobar.js */ "./panels/application/preloading/components/PreloadingDisabledInfobar.js");
/* harmony import */ var _PreloadingGrid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PreloadingGrid.js */ "./panels/application/preloading/components/PreloadingGrid.js");
/* harmony import */ var _PreloadingMismatchedHeadersGrid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PreloadingMismatchedHeadersGrid.js */ "./panels/application/preloading/components/PreloadingMismatchedHeadersGrid.js");
/* harmony import */ var _RuleSetDetailsView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RuleSetDetailsView.js */ "./panels/application/preloading/components/RuleSetDetailsView.js");
/* harmony import */ var _RuleSetGrid_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RuleSetGrid.js */ "./panels/application/preloading/components/RuleSetGrid.js");
/* harmony import */ var _UsedPreloadingView_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UsedPreloadingView.js */ "./panels/application/preloading/components/UsedPreloadingView.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_RuleSetDetailsView_js__WEBPACK_IMPORTED_MODULE_5__]);
_RuleSetDetailsView_js__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.









//# sourceMappingURL=components.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

}]);