"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_application_preloading_components_RuleSetDetailsView_js"],{

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

/***/ })

}]);