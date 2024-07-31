"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_preloading_components_RuleSetDetailsView_ts"],{

/***/ "./src/panels/application/preloading/components/RuleSetDetailsView.ts":
/*!****************************************************************************!*\
  !*** ./src/panels/application/preloading/components/RuleSetDetailsView.ts ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RuleSetDetailsView: () => (/* binding */ RuleSetDetailsView)
/* harmony export */ });
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../third_party/codemirror.next/codemirror.next.js */ "./src/third_party/codemirror.next/codemirror.next.js");
/* harmony import */ var _ui_components_code_highlighter_code_highlighter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ui/components/code_highlighter/code_highlighter.js */ "./src/ui/components/code_highlighter/code_highlighter.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./src/ui/components/legacy_wrapper/legacy_wrapper.ts");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../ui/components/render_coordinator/render_coordinator.js */ "./src/ui/components/render_coordinator/render_coordinator.ts");
/* harmony import */ var _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../ui/components/text_editor/text_editor.js */ "./src/ui/components/text_editor/text_editor.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './RuleSetDetailsView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2023 The Chromium Authors. All rights reserved.
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
var _RuleSetDetailsView_instances, _RuleSetDetailsView_shadow, _RuleSetDetailsView_data, _RuleSetDetailsView_editorState, _RuleSetDetailsView_render, _RuleSetDetailsView_maybeError, _RuleSetDetailsView_renderSource;










const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_6__.RenderCoordinator.RenderCoordinator.instance();
const codeMirrorJsonType = await _ui_components_code_highlighter_code_highlighter_js__WEBPACK_IMPORTED_MODULE_3__.CodeHighlighter.languageFromMIME('application/json');
class RuleSetDetailsView extends _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_5__.LegacyWrapper.WrappableComponent {
    constructor() {
        super(...arguments);
        _RuleSetDetailsView_instances.add(this);
        _RuleSetDetailsView_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _RuleSetDetailsView_data.set(this, null);
        _RuleSetDetailsView_editorState.set(this, void 0);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _RuleSetDetailsView_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './RuleSetDetailsView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
    set data(data) {
        __classPrivateFieldSet(this, _RuleSetDetailsView_data, data, "f");
        void __classPrivateFieldGet(this, _RuleSetDetailsView_instances, "m", _RuleSetDetailsView_render).call(this);
    }
}
_RuleSetDetailsView_shadow = new WeakMap(), _RuleSetDetailsView_data = new WeakMap(), _RuleSetDetailsView_editorState = new WeakMap(), _RuleSetDetailsView_instances = new WeakSet(), _RuleSetDetailsView_render = async function _RuleSetDetailsView_render() {
    await coordinator.write('RuleSetDetailsView render', () => {
        if (__classPrivateFieldGet(this, _RuleSetDetailsView_data, "f") === null) {
            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.nothing, __classPrivateFieldGet(this, _RuleSetDetailsView_shadow, "f"), { host: this });
            return;
        }
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html `
        <div class="content">
          <div class="ruleset-header" id="ruleset-url">${__classPrivateFieldGet(this, _RuleSetDetailsView_data, "f")?.url || _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().inspectedURL()}</div>
          ${__classPrivateFieldGet(this, _RuleSetDetailsView_instances, "m", _RuleSetDetailsView_maybeError).call(this)}
        </div>
        <div class="text-ellipsis">
          ${__classPrivateFieldGet(this, _RuleSetDetailsView_instances, "m", _RuleSetDetailsView_renderSource).call(this)}
        </div>
      `, __classPrivateFieldGet(this, _RuleSetDetailsView_shadow, "f"), { host: this });
        // clang-format on
    });
}, _RuleSetDetailsView_maybeError = function _RuleSetDetailsView_maybeError() {
    (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.assertNotNullOrUndefined)(__classPrivateFieldGet(this, _RuleSetDetailsView_data, "f"));
    if (__classPrivateFieldGet(this, _RuleSetDetailsView_data, "f").errorMessage === undefined) {
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
        <span id="error-message-text">${__classPrivateFieldGet(this, _RuleSetDetailsView_data, "f").errorMessage}</span>
      </div>
    `;
    // clang-format on
}, _RuleSetDetailsView_renderSource = function _RuleSetDetailsView_renderSource() {
    __classPrivateFieldSet(this, _RuleSetDetailsView_editorState, _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_2__.EditorState.create({
        doc: __classPrivateFieldGet(this, _RuleSetDetailsView_data, "f")?.sourceText,
        extensions: [
            _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_7__.Config.baseConfiguration(__classPrivateFieldGet(this, _RuleSetDetailsView_data, "f")?.sourceText || ''),
            _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_2__.lineNumbers(),
            _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_2__.EditorState.readOnly.of(true),
            codeMirrorJsonType,
            _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_2__.syntaxHighlighting(_ui_components_code_highlighter_code_highlighter_js__WEBPACK_IMPORTED_MODULE_3__.CodeHighlighter.highlightStyle),
        ],
    }), "f");
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    // TODO(https://crbug.com/1425354): Add Raw button.
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html `
        <${_ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_7__.TextEditor.TextEditor.litTagName} .style.flexGrow = '1' .state=${__classPrivateFieldGet(this, _RuleSetDetailsView_editorState, "f")}></${_ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_7__.TextEditor.TextEditor.litTagName}>
      `;
    // clang-format on
};
customElements.define('devtools-resources-rulesets-details-view', RuleSetDetailsView);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);