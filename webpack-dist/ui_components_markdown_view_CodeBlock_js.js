"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_markdown_view_CodeBlock_js"],{

/***/ "./ui/components/markdown_view/CodeBlock.js":
/*!**************************************************!*\
  !*** ./ui/components/markdown_view/CodeBlock.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CodeBlock: () => (/* binding */ CodeBlock)
/* harmony export */ });
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../third_party/codemirror.next/codemirror.next.js */ "./third_party/codemirror.next/codemirror.next.js");
/* harmony import */ var _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/text_editor/text_editor.js */ "./ui/components/text_editor/text_editor.js");
/* harmony import */ var _components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _codeBlock_css_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./codeBlock.css.js */ "./ui/components/markdown_view/codeBlock.css.js");
// Copyright (c) 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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
    static litTagName = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.literal `devtools-code-block`;
    #shadow = this.attachShadow({ mode: 'open' });
    #code = '';
    #codeLang = '';
    #copyTimeout = 1000;
    #timer;
    #copied = false;
    #editorState;
    #languageConf = new _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.Compartment();
    /**
     * Whether to display a notice "​​Use code snippets with caution" in code
     * blocks.
     */
    #displayNotice = false;
    /**
     * Whether to display the toolbar on the top.
     */
    #displayToolbar = true;
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_codeBlock_css_js__WEBPACK_IMPORTED_MODULE_8__["default"]];
        this.#render();
    }
    set code(value) {
        this.#code = value;
        this.#editorState = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.EditorState.create({
            doc: this.#code,
            extensions: [
                _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_4__.Config.baseConfiguration(this.#code),
                _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.EditorState.readOnly.of(true),
                _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.EditorView.lineWrapping,
                this.#languageConf.of(_third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.javascript.javascript()),
            ],
        });
        this.#render();
    }
    get code() {
        return this.#code;
    }
    set codeLang(value) {
        this.#codeLang = value;
        this.#render();
    }
    set timeout(value) {
        this.#copyTimeout = value;
        this.#render();
    }
    set displayNotice(value) {
        this.#displayNotice = value;
        this.#render();
    }
    set displayToolbar(value) {
        this.#displayToolbar = value;
        this.#render();
    }
    #onCopy() {
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(this.#code);
        this.#copied = true;
        this.#render();
        clearTimeout(this.#timer);
        this.#timer = setTimeout(() => {
            this.#copied = false;
            this.#render();
        }, this.#copyTimeout);
    }
    #render() {
        const copyButtonClasses = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.Directives.classMap({
            copied: this.#copied,
            'copy-button': true,
        });
        // clang-format off
        _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.html `<div class="codeblock" jslog=${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.section('code')}>
      ${this.#displayToolbar ? _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.html `<div class="toolbar" jslog=${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.toolbar()}>
        <div class="lang">${this.#codeLang}</div>
        <div class="copy">
          <button class=${copyButtonClasses}
            title=${i18nString(UIStrings.copy)}
            jslog=${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.action('copy').track({ click: true })}
            @click=${this.#onCopy}>
            <${_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon.litTagName}
              .data=${{
            iconName: 'copy',
            width: '16px',
            height: '16px',
            color: 'var(--copy-icon-color, var(--icon-default))',
        }}
            >
            </${_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon.litTagName}>
            <span>${this.#copied ?
            i18nString(UIStrings.copied) :
            i18nString(UIStrings.copy)}</span>
          </button>
        </div>
      </div>` : ''}
      <div class="editor-wrapper">
        <${_ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_4__.TextEditor.TextEditor.litTagName} .state=${this.#editorState}></${_ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_4__.TextEditor.TextEditor.litTagName}>
        ${this.#displayNotice ? _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.html `<p class="notice">
          <x-link class="link" href="https://support.google.com/legal/answer/13505487" jslog=${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.link('code-disclaimer').track({ click: true })}>
            ${i18nString(UIStrings.disclaimer)}
         </x-link>
        </p>` : _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.nothing}
      </div>
    </div>`, this.#shadow, {
            host: this,
        });
        // clang-format on
        const editor = this.#shadow?.querySelector('devtools-text-editor')?.editor;
        if (!editor) {
            return;
        }
        let language = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.html.html({ autoCloseTags: false, selfClosingTags: true });
        switch (this.#codeLang) {
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
            effects: this.#languageConf.reconfigure(language),
        });
    }
}
customElements.define('devtools-code-block', CodeBlock);
//# sourceMappingURL=CodeBlock.js.map

/***/ }),

/***/ "./ui/components/markdown_view/codeBlock.css.js":
/*!******************************************************!*\
  !*** ./ui/components/markdown_view/codeBlock.css.js ***!
  \******************************************************/
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

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

code {
  color: var(--sys-color-on-surface);
  font-size: 11px;
  user-select: text;
  cursor: text;
  background: var(--sys-color-surface1);
}

.codeblock {
  margin-bottom: 8px;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: var(--sys-color-surface5);
  color: var(--sys-color-on-surface);
}

.codeblock .toolbar {
  box-sizing: border-box;
  display: flex;
  height: 28px;
  flex-direction: row;
  padding: 0 11px;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
}

.codeblock .editor-wrapper {
  color: var(--sys-color-on-surface);
  background: var(--sys-color-surface1);
  padding: 10px 5px;
}

.codeblock .lang {
  padding: 6px 0;
  flex: 1;
}

.codeblock .copy {
  padding: 4px 0;
  align-items: center;
  display: flex;
}

.codeblock .copy-button {
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;
  font-size: 11px;
  line-height: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
}

.codeblock .copy-button.copied {
  color: var(--sys-color-primary);

  --copy-icon-color: var(--sys-color-primary);
}

.notice {
  margin-top: 3px;
  margin-left: 3px;

  .link {
    color: var(--sys-color-primary);
    text-decoration-line: underline;
  }
}

/*# sourceURL=codeBlock.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);