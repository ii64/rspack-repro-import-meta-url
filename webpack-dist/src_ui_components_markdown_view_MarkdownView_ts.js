"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_components_markdown_view_MarkdownView_ts"],{

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


/***/ }),

/***/ "./src/ui/components/markdown_view/MarkdownImage.ts":
/*!**********************************************************!*\
  !*** ./src/ui/components/markdown_view/MarkdownImage.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarkdownImage: () => (/* binding */ MarkdownImage)
/* harmony export */ });
/* harmony import */ var _components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './markdownImage.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _MarkdownImagesMap_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MarkdownImagesMap.js */ "./src/ui/components/markdown_view/MarkdownImagesMap.ts");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
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
var _MarkdownImage_instances, _MarkdownImage_shadow, _MarkdownImage_imageData, _MarkdownImage_imageTitle, _MarkdownImage_getIconComponent, _MarkdownImage_getImageComponent, _MarkdownImage_render;




/**
 * Component to render images from parsed markdown.
 * Parsed images from markdown are not directly rendered, instead they have to be added to the MarkdownImagesMap.ts.
 * This makes sure that all icons/images are accounted for in markdown.
 */
class MarkdownImage extends HTMLElement {
    constructor() {
        super(...arguments);
        _MarkdownImage_instances.add(this);
        _MarkdownImage_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _MarkdownImage_imageData.set(this, void 0);
        _MarkdownImage_imageTitle.set(this, void 0);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _MarkdownImage_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './markdownImage.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
    set data(data) {
        const { key, title } = data;
        const markdownImage = (0,_MarkdownImagesMap_js__WEBPACK_IMPORTED_MODULE_3__.getMarkdownImage)(key);
        __classPrivateFieldSet(this, _MarkdownImage_imageData, markdownImage, "f");
        __classPrivateFieldSet(this, _MarkdownImage_imageTitle, title, "f");
        __classPrivateFieldGet(this, _MarkdownImage_instances, "m", _MarkdownImage_render).call(this);
    }
}
_MarkdownImage_shadow = new WeakMap(), _MarkdownImage_imageData = new WeakMap(), _MarkdownImage_imageTitle = new WeakMap(), _MarkdownImage_instances = new WeakSet(), _MarkdownImage_getIconComponent = function _MarkdownImage_getIconComponent() {
    if (!__classPrivateFieldGet(this, _MarkdownImage_imageData, "f")) {
        return _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html ``;
    }
    const { src, color, width = '100%', height = '100%' } = __classPrivateFieldGet(this, _MarkdownImage_imageData, "f");
    return _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html `
      <${_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_0__.Icon.Icon.litTagName} .data=${{ iconPath: src, color, width, height }}></${_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_0__.Icon.Icon.litTagName}>
    `;
}, _MarkdownImage_getImageComponent = function _MarkdownImage_getImageComponent() {
    if (!__classPrivateFieldGet(this, _MarkdownImage_imageData, "f")) {
        return _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html ``;
    }
    const { src, width = '100%', height = '100%' } = __classPrivateFieldGet(this, _MarkdownImage_imageData, "f");
    return _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html `
      <img class="markdown-image" src=${src} alt=${__classPrivateFieldGet(this, _MarkdownImage_imageTitle, "f")} width=${width} height=${height}/>
    `;
}, _MarkdownImage_render = function _MarkdownImage_render() {
    if (!__classPrivateFieldGet(this, _MarkdownImage_imageData, "f")) {
        return;
    }
    const { isIcon } = __classPrivateFieldGet(this, _MarkdownImage_imageData, "f");
    const imageComponent = isIcon ? __classPrivateFieldGet(this, _MarkdownImage_instances, "m", _MarkdownImage_getIconComponent).call(this) : __classPrivateFieldGet(this, _MarkdownImage_instances, "m", _MarkdownImage_getImageComponent).call(this);
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.render(imageComponent, __classPrivateFieldGet(this, _MarkdownImage_shadow, "f"), { host: this });
};
Object.defineProperty(MarkdownImage, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal `devtools-markdown-image`
});
customElements.define('devtools-markdown-image', MarkdownImage);


/***/ }),

/***/ "./src/ui/components/markdown_view/MarkdownImagesMap.ts":
/*!**************************************************************!*\
  !*** ./src/ui/components/markdown_view/MarkdownImagesMap.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getMarkdownImage: () => (/* binding */ getMarkdownImage),
/* harmony export */   markdownImages: () => (/* binding */ markdownImages)
/* harmony export */ });
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*
 * src for image is relative url for image location.
 * @example icon
 * [
 *   'feedbackIcon',
 *   {
 *     src: 'Images/review.svg',
 *     isIcon: true,
 *     width: '20px',
 *     height: '20px',
 *     color: 'var(--icon-disabled)',
 *   },
 * ]
 *
*/
// NOTE: This is only exported for tests, and it should not be
// imported in any component, instead add image data in map and
// use getMarkdownImage to get the appropriate image data.
const markdownImages = new Map([]);
const getMarkdownImage = (key) => {
    const image = markdownImages.get(key);
    if (!image) {
        throw new Error(`Markdown image with key '${key}' is not available, please check MarkdownImagesMap.ts`);
    }
    return image;
};


/***/ }),

/***/ "./src/ui/components/markdown_view/MarkdownLink.ts":
/*!*********************************************************!*\
  !*** ./src/ui/components/markdown_view/MarkdownLink.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarkdownLink: () => (/* binding */ MarkdownLink)
/* harmony export */ });
/* harmony import */ var _legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './markdownLink.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _MarkdownLinksMap_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MarkdownLinksMap.js */ "./src/ui/components/markdown_view/MarkdownLinksMap.ts");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
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
var _MarkdownLink_instances, _MarkdownLink_shadow, _MarkdownLink_linkText, _MarkdownLink_linkUrl, _MarkdownLink_render;
 // Required for <x-link>.




/**
 * Component to render link from parsed markdown.
 * Parsed links from markdown are not directly rendered, instead they have to be added to the <key, link> map in MarkdownLinksMap.ts.
 * This makes sure that all links are accounted for and no bad links are introduced to devtools via markdown.
 */
class MarkdownLink extends HTMLElement {
    constructor() {
        super(...arguments);
        _MarkdownLink_instances.add(this);
        _MarkdownLink_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _MarkdownLink_linkText.set(this, '');
        _MarkdownLink_linkUrl.set(this, '');
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _MarkdownLink_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './markdownLink.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
    set data(data) {
        const { key, title } = data;
        const markdownLink = (0,_MarkdownLinksMap_js__WEBPACK_IMPORTED_MODULE_4__.getMarkdownLink)(key);
        __classPrivateFieldSet(this, _MarkdownLink_linkText, title, "f");
        __classPrivateFieldSet(this, _MarkdownLink_linkUrl, markdownLink, "f");
        __classPrivateFieldGet(this, _MarkdownLink_instances, "m", _MarkdownLink_render).call(this);
    }
}
_MarkdownLink_shadow = new WeakMap(), _MarkdownLink_linkText = new WeakMap(), _MarkdownLink_linkUrl = new WeakMap(), _MarkdownLink_instances = new WeakSet(), _MarkdownLink_render = function _MarkdownLink_render() {
    // clang-format off
    const output = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html `<x-link class="devtools-link" href=${__classPrivateFieldGet(this, _MarkdownLink_linkUrl, "f")} jslog=${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__.link().track({ click: true })}
    >${__classPrivateFieldGet(this, _MarkdownLink_linkText, "f")}</x-link>`;
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.render(output, __classPrivateFieldGet(this, _MarkdownLink_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(MarkdownLink, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal `devtools-markdown-link`
});
customElements.define('devtools-markdown-link', MarkdownLink);


/***/ }),

/***/ "./src/ui/components/markdown_view/MarkdownLinksMap.ts":
/*!*************************************************************!*\
  !*** ./src/ui/components/markdown_view/MarkdownLinksMap.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getMarkdownLink: () => (/* binding */ getMarkdownLink),
/* harmony export */   markdownLinks: () => (/* binding */ markdownLinks)
/* harmony export */ });
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*
  To use links in markdown, add key here with the link and
  use the added key in markdown.
  @example markdown
  Find more information about web development at [Learn more](exampleLink)
*/
// This is only exported for tests, and it should not be
// imported in any component, instead add link in map and
// use getMarkdownLink to get the appropriate link.
const markdownLinks = new Map([
    ['issuesContrastWCAG21AA', 'https://www.w3.org/TR/WCAG21/#contrast-minimum'],
    ['issuesContrastWCAG21AAA', 'https://www.w3.org/TR/WCAG21/#contrast-enhanced'],
    ['issuesContrastSuggestColor', 'https://developers.google.com/web/updates/2020/08/devtools#accessible-color'],
    ['issuesCSPSetStrict', 'https://web.dev/strict-csp'],
    [
        'issuesCSPWhyStrictOverAllowlist',
        'https://web.dev/strict-csp/#why-a-strict-csp-is-recommended-over-allowlist-csps',
    ],
    [
        'issueCorsPreflightRequest',
        'https://web.dev/cross-origin-resource-sharing/#preflight-requests-for-complex-http-calls',
    ],
    ['issueQuirksModeDoctype', 'https://web.dev/doctype/'],
    ['sameSiteAndSameOrigin', 'https://web.dev/same-site-same-origin/'],
    ['punycodeReference', 'https://wikipedia.org/wiki/Punycode'],
    // Link URLs for deprecation issues (see blink::Deprecation)
    ['https://xhr.spec.whatwg.org/', 'https://xhr.spec.whatwg.org/'],
    ['https://goo.gle/chrome-insecure-origins', 'https://goo.gle/chrome-insecure-origins'],
    ['https://webrtc.org/web-apis/chrome/unified-plan/', 'https://webrtc.org/web-apis/chrome/unified-plan/'],
    [
        'https://developer.chrome.com/blog/enabling-shared-array-buffer/',
        'https://developer.chrome.com/blog/enabling-shared-array-buffer/',
    ],
    ['https://developer.chrome.com/docs/extensions/mv3/', 'https://developer.chrome.com/docs/extensions/mv3/'],
    [
        'https://developer.chrome.com/blog/immutable-document-domain/',
        'https://developer.chrome.com/blog/immutable-document-domain/',
    ],
    [
        'https://github.com/WICG/shared-element-transitions/blob/main/debugging_overflow_on_images.md',
        'https://github.com/WICG/shared-element-transitions/blob/main/debugging_overflow_on_images.md',
    ],
    [
        'https://developer.chrome.com/docs/extensions/reference/privacy/#property-websites-privacySandboxEnabled',
        'https://developer.chrome.com/docs/extensions/reference/privacy/#property-websites-privacySandboxEnabled',
    ],
    ['PNASecureContextRestrictionFeatureStatus', 'https://chromestatus.com/feature/5954091755241472'],
    ['https://w3c.github.io/uievents/#legacy-event-types', 'https://w3c.github.io/uievents/#legacy-event-types'],
    ['manageCookiesHelpPage', 'https://support.google.com/chrome/answer/95647'],
    ['gracePeriodStagedControlExplainer', 'https://developers.google.com/privacy-sandbox/blog/grace-period-opt-out'],
]);
const getMarkdownLink = (key) => {
    if (/^https:\/\/www.chromestatus.com\/feature\/\d+$/.test(key)) {
        return key;
    }
    const link = markdownLinks.get(key);
    if (!link) {
        throw new Error(`Markdown link with key '${key}' is not available, please check MarkdownLinksMap.ts`);
    }
    return link;
};


/***/ }),

/***/ "./src/ui/components/markdown_view/MarkdownView.ts":
/*!*********************************************************!*\
  !*** ./src/ui/components/markdown_view/MarkdownView.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarkdownInsightRenderer: () => (/* binding */ MarkdownInsightRenderer),
/* harmony export */   MarkdownLitRenderer: () => (/* binding */ MarkdownLitRenderer),
/* harmony export */   MarkdownView: () => (/* binding */ MarkdownView)
/* harmony export */ });
/* harmony import */ var _legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _CodeBlock_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CodeBlock.js */ "./src/ui/components/markdown_view/CodeBlock.ts");
/* harmony import */ var _MarkdownImage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MarkdownImage.js */ "./src/ui/components/markdown_view/MarkdownImage.ts");
/* harmony import */ var _MarkdownLink_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MarkdownLink.js */ "./src/ui/components/markdown_view/MarkdownLink.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './markdownView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2020 The Chromium Authors. All rights reserved.
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
var _MarkdownView_instances, _MarkdownView_shadow, _MarkdownView_tokenData, _MarkdownView_renderer, _MarkdownView_update, _MarkdownView_render;






const html = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html;
const render = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.render;
class MarkdownView extends HTMLElement {
    constructor() {
        super(...arguments);
        _MarkdownView_instances.add(this);
        _MarkdownView_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _MarkdownView_tokenData.set(this, []);
        _MarkdownView_renderer.set(this, new MarkdownLitRenderer());
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _MarkdownView_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './markdownView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
    set data(data) {
        __classPrivateFieldSet(this, _MarkdownView_tokenData, data.tokens, "f");
        if (data.renderer) {
            __classPrivateFieldSet(this, _MarkdownView_renderer, data.renderer, "f");
        }
        __classPrivateFieldGet(this, _MarkdownView_instances, "m", _MarkdownView_update).call(this);
    }
}
_MarkdownView_shadow = new WeakMap(), _MarkdownView_tokenData = new WeakMap(), _MarkdownView_renderer = new WeakMap(), _MarkdownView_instances = new WeakSet(), _MarkdownView_update = function _MarkdownView_update() {
    __classPrivateFieldGet(this, _MarkdownView_instances, "m", _MarkdownView_render).call(this);
}, _MarkdownView_render = function _MarkdownView_render() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    render(html `
      <div class='message'>
        ${__classPrivateFieldGet(this, _MarkdownView_tokenData, "f").map(token => __classPrivateFieldGet(this, _MarkdownView_renderer, "f").renderToken(token))}
      </div>
    `, __classPrivateFieldGet(this, _MarkdownView_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(MarkdownView, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal `devtools-markdown-view`
});
customElements.define('devtools-markdown-view', MarkdownView);
/**
 * Default renderer is used for the IssuesPanel and allows only well-known images and links to be embedded.
 */
class MarkdownLitRenderer {
    renderChildTokens(token) {
        if ('tokens' in token && token.tokens) {
            return token.tokens.map(token => this.renderToken(token));
        }
        throw new Error('Tokens not found');
    }
    /**
     * Unescape will get rid of the escaping done by Marked to avoid double escaping due to escaping it also with Lit-html.
     * Table taken from: front_end/third_party/marked/package/src/helpers.js
     */
    unescape(text) {
        const escapeReplacements = new Map([
            ['&amp;', '&'],
            ['&lt;', '<'],
            ['&gt;', '>'],
            ['&quot;', '"'],
            ['&#39;', '\''],
        ]);
        return text.replace(/&(amp|lt|gt|quot|#39);/g, (matchedString) => {
            const replacement = escapeReplacements.get(matchedString);
            return replacement ? replacement : matchedString;
        });
    }
    renderText(token) {
        if ('tokens' in token && token.tokens) {
            return html `${this.renderChildTokens(token)}`;
        }
        // Due to unescaping, unescaped html entities (see escapeReplacements' keys) will be rendered
        // as their corresponding symbol while the rest will be rendered as verbatim.
        // Marked's escape function can be found in front_end/third_party/marked/package/src/helpers.js
        return html `${this.unescape('text' in token ? token.text : '')}`;
    }
    renderHeading(heading) {
        switch (heading.depth) {
            case 1:
                return html `<h1>${this.renderText(heading)}</h1>`;
            case 2:
                return html `<h2>${this.renderText(heading)}</h2>`;
            case 3:
                return html `<h3>${this.renderText(heading)}</h3>`;
            case 4:
                return html `<h4>${this.renderText(heading)}</h4>`;
            case 5:
                return html `<h5>${this.renderText(heading)}</h5>`;
            default:
                return html `<h6>${this.renderText(heading)}</h6>`;
        }
    }
    renderCodeBlock(token) {
        // clang-format off
        return html `<${_CodeBlock_js__WEBPACK_IMPORTED_MODULE_2__.CodeBlock.litTagName}
      .code=${this.unescape(token.text)}
      .codeLang=${token.lang}>
    </${_CodeBlock_js__WEBPACK_IMPORTED_MODULE_2__.CodeBlock.litTagName}>`;
        // clang-format one
    }
    templateForToken(token) {
        switch (token.type) {
            case 'paragraph':
                return html `<p>${this.renderChildTokens(token)}`;
            case 'list':
                return html `<ul>${token.items.map(token => {
                    return this.renderToken(token);
                })}</ul>`;
            case 'list_item':
                return html `<li>${this.renderChildTokens(token)}`;
            case 'text':
                return this.renderText(token);
            case 'codespan':
                return html `<code>${this.unescape(token.text)}</code>`;
            case 'code':
                return this.renderCodeBlock(token);
            case 'space':
                return html ``;
            case 'link':
                return html `<${_MarkdownLink_js__WEBPACK_IMPORTED_MODULE_4__.MarkdownLink.litTagName} .data=${{ key: token.href, title: token.text }}></${_MarkdownLink_js__WEBPACK_IMPORTED_MODULE_4__.MarkdownLink.litTagName}>`;
            case 'image':
                return html `<${_MarkdownImage_js__WEBPACK_IMPORTED_MODULE_3__.MarkdownImage.litTagName} .data=${{ key: token.href, title: token.text }}></${_MarkdownImage_js__WEBPACK_IMPORTED_MODULE_3__.MarkdownImage.litTagName}>`;
            case 'heading':
                return this.renderHeading(token);
            case 'strong':
                return html `<strong>${this.renderText(token)}</strong>`;
            case 'em':
                return html `<em>${this.renderText(token)}</em>`;
            default:
                return null;
        }
    }
    renderToken(token) {
        const template = this.templateForToken(token);
        if (template === null) {
            throw new Error(`Markdown token type '${token.type}' not supported.`);
        }
        return template;
    }
}
/**
 * Renderer used in Console Insights and Freestyler for the text generated by an LLM.
 */
class MarkdownInsightRenderer extends MarkdownLitRenderer {
    renderToken(token) {
        const template = this.templateForToken(token);
        if (template === null) {
            return _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html `${token.raw}`;
        }
        return template;
    }
    templateForToken(token) {
        switch (token.type) {
            case 'heading':
                return html `<strong>${this.renderText(token)}</strong>`;
            case 'link':
            case 'image':
                return _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html `${_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.XLink.XLink.create(token.href, token.text, undefined, undefined, 'link-in-explanation')}`;
            case 'code':
                return _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html `<${_CodeBlock_js__WEBPACK_IMPORTED_MODULE_2__.CodeBlock.litTagName}
          .code=${this.unescape(token.text)}
          .codeLang=${token.lang}
          .displayNotice=${true}>
        </${_CodeBlock_js__WEBPACK_IMPORTED_MODULE_2__.CodeBlock.litTagName}>`;
        }
        return super.templateForToken(token);
    }
}


/***/ })

}]);