"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_components_markdown_view_CodeBlock_ts"],{

/***/ "./src/ui/components/markdown_view/CodeBlock.ts":
/*!******************************************************!*\
  !*** ./src/ui/components/markdown_view/CodeBlock.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CodeBlock: () => (/* binding */ CodeBlock)
/* harmony export */ });
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../third_party/codemirror.next/codemirror.next.js */ "./src/third_party/codemirror.next/codemirror.next.js");
/* harmony import */ var _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/text_editor/text_editor.js */ "./src/ui/components/text_editor/text_editor.ts");
/* harmony import */ var _components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './codeBlock.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright (c) 2023 The Chromium Authors. All rights reserved.
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
var _CodeBlock_instances, _CodeBlock_shadow, _CodeBlock_code, _CodeBlock_codeLang, _CodeBlock_copyTimeout, _CodeBlock_timer, _CodeBlock_copied, _CodeBlock_editorState, _CodeBlock_languageConf, _CodeBlock_displayNotice, _CodeBlock_displayToolbar, _CodeBlock_onCopy, _CodeBlock_render;
 // for x-link








const UIStrings = {
    /**
     * @description The title of the button to copy the codeblock from a Markdown view.
     */
    copy: 'Copy code',
    /**
     * @description The title of the button after it was pressed and the text was copied to clipboard.
     */
    copied: 'Copied to clipboard',
    /**
     * @description Disclaimer shown in the code blocks.
     */
    disclaimer: 'Use code snippets with caution',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('ui/components/markdown_view/CodeBlock.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
class CodeBlock extends HTMLElement {
    constructor() {
        super(...arguments);
        _CodeBlock_instances.add(this);
        _CodeBlock_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _CodeBlock_code.set(this, '');
        _CodeBlock_codeLang.set(this, '');
        _CodeBlock_copyTimeout.set(this, 1000);
        _CodeBlock_timer.set(this, void 0);
        _CodeBlock_copied.set(this, false);
        _CodeBlock_editorState.set(this, void 0);
        _CodeBlock_languageConf.set(this, new _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.Compartment());
        /**
         * Whether to display a notice "​​Use code snippets with caution" in code
         * blocks.
         */
        _CodeBlock_displayNotice.set(this, false);
        /**
         * Whether to display the toolbar on the top.
         */
        _CodeBlock_displayToolbar.set(this, true);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _CodeBlock_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './codeBlock.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _CodeBlock_instances, "m", _CodeBlock_render).call(this);
    }
    set code(value) {
        __classPrivateFieldSet(this, _CodeBlock_code, value, "f");
        __classPrivateFieldSet(this, _CodeBlock_editorState, _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.EditorState.create({
            doc: __classPrivateFieldGet(this, _CodeBlock_code, "f"),
            extensions: [
                _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_4__.Config.baseConfiguration(__classPrivateFieldGet(this, _CodeBlock_code, "f")),
                _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.EditorState.readOnly.of(true),
                _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.EditorView.lineWrapping,
                __classPrivateFieldGet(this, _CodeBlock_languageConf, "f").of(_third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.javascript.javascript()),
            ],
        }), "f");
        __classPrivateFieldGet(this, _CodeBlock_instances, "m", _CodeBlock_render).call(this);
    }
    get code() {
        return __classPrivateFieldGet(this, _CodeBlock_code, "f");
    }
    set codeLang(value) {
        __classPrivateFieldSet(this, _CodeBlock_codeLang, value, "f");
        __classPrivateFieldGet(this, _CodeBlock_instances, "m", _CodeBlock_render).call(this);
    }
    set timeout(value) {
        __classPrivateFieldSet(this, _CodeBlock_copyTimeout, value, "f");
        __classPrivateFieldGet(this, _CodeBlock_instances, "m", _CodeBlock_render).call(this);
    }
    set displayNotice(value) {
        __classPrivateFieldSet(this, _CodeBlock_displayNotice, value, "f");
        __classPrivateFieldGet(this, _CodeBlock_instances, "m", _CodeBlock_render).call(this);
    }
    set displayToolbar(value) {
        __classPrivateFieldSet(this, _CodeBlock_displayToolbar, value, "f");
        __classPrivateFieldGet(this, _CodeBlock_instances, "m", _CodeBlock_render).call(this);
    }
}
_CodeBlock_shadow = new WeakMap(), _CodeBlock_code = new WeakMap(), _CodeBlock_codeLang = new WeakMap(), _CodeBlock_copyTimeout = new WeakMap(), _CodeBlock_timer = new WeakMap(), _CodeBlock_copied = new WeakMap(), _CodeBlock_editorState = new WeakMap(), _CodeBlock_languageConf = new WeakMap(), _CodeBlock_displayNotice = new WeakMap(), _CodeBlock_displayToolbar = new WeakMap(), _CodeBlock_instances = new WeakSet(), _CodeBlock_onCopy = function _CodeBlock_onCopy() {
    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(__classPrivateFieldGet(this, _CodeBlock_code, "f"));
    __classPrivateFieldSet(this, _CodeBlock_copied, true, "f");
    __classPrivateFieldGet(this, _CodeBlock_instances, "m", _CodeBlock_render).call(this);
    clearTimeout(__classPrivateFieldGet(this, _CodeBlock_timer, "f"));
    __classPrivateFieldSet(this, _CodeBlock_timer, setTimeout(() => {
        __classPrivateFieldSet(this, _CodeBlock_copied, false, "f");
        __classPrivateFieldGet(this, _CodeBlock_instances, "m", _CodeBlock_render).call(this);
    }, __classPrivateFieldGet(this, _CodeBlock_copyTimeout, "f")), "f");
}, _CodeBlock_render = function _CodeBlock_render() {
    const copyButtonClasses = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.Directives.classMap({
        copied: __classPrivateFieldGet(this, _CodeBlock_copied, "f"),
        'copy-button': true,
    });
    // clang-format off
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.html `<div class="codeblock" jslog=${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.section('code')}>
      ${__classPrivateFieldGet(this, _CodeBlock_displayToolbar, "f") ? _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.html `<div class="toolbar" jslog=${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.toolbar()}>
        <div class="lang">${__classPrivateFieldGet(this, _CodeBlock_codeLang, "f")}</div>
        <div class="copy">
          <button class=${copyButtonClasses}
            title=${i18nString(UIStrings.copy)}
            jslog=${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.action('copy').track({ click: true })}
            @click=${__classPrivateFieldGet(this, _CodeBlock_instances, "m", _CodeBlock_onCopy)}>
            <${_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon.litTagName}
              .data=${{
        iconName: 'copy',
        width: '16px',
        height: '16px',
        color: 'var(--copy-icon-color, var(--icon-default))',
    }}
            >
            </${_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon.litTagName}>
            <span>${__classPrivateFieldGet(this, _CodeBlock_copied, "f") ?
        i18nString(UIStrings.copied) :
        i18nString(UIStrings.copy)}</span>
          </button>
        </div>
      </div>` : ''}
      <div class="editor-wrapper">
        <${_ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_4__.TextEditor.TextEditor.litTagName} .state=${__classPrivateFieldGet(this, _CodeBlock_editorState, "f")}></${_ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_4__.TextEditor.TextEditor.litTagName}>
        ${__classPrivateFieldGet(this, _CodeBlock_displayNotice, "f") ? _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.html `<p class="notice">
          <x-link class="link" href="https://support.google.com/legal/answer/13505487" jslog=${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.link('code-disclaimer').track({ click: true })}>
            ${i18nString(UIStrings.disclaimer)}
         </x-link>
        </p>` : _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.nothing}
      </div>
    </div>`, __classPrivateFieldGet(this, _CodeBlock_shadow, "f"), {
        host: this,
    });
    // clang-format on
    const editor = __classPrivateFieldGet(this, _CodeBlock_shadow, "f")?.querySelector('devtools-text-editor')?.editor;
    if (!editor) {
        return;
    }
    let language = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.html.html({ autoCloseTags: false, selfClosingTags: true });
    switch (__classPrivateFieldGet(this, _CodeBlock_codeLang, "f")) {
        case 'js':
            language = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.javascript.javascript();
            break;
        case 'ts':
            language = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.javascript.javascript({ typescript: true });
            break;
        case 'jsx':
            language = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.javascript.javascript({ jsx: true });
            break;
        case 'css':
            language = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.css.css();
            break;
    }
    editor.dispatch({
        effects: __classPrivateFieldGet(this, _CodeBlock_languageConf, "f").reconfigure(language),
    });
};
Object.defineProperty(CodeBlock, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.literal `devtools-code-block`
});
customElements.define('devtools-code-block', CodeBlock);


/***/ })

}]);