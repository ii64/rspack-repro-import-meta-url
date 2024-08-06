"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_markdown_view_MarkdownView_js"],{

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

/***/ "./ui/components/markdown_view/MarkdownImage.js":
/*!******************************************************!*\
  !*** ./ui/components/markdown_view/MarkdownImage.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarkdownImage: () => (/* binding */ MarkdownImage)
/* harmony export */ });
/* harmony import */ var _components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _markdownImage_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./markdownImage.css.js */ "./ui/components/markdown_view/markdownImage.css.js");
/* harmony import */ var _MarkdownImagesMap_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MarkdownImagesMap.js */ "./ui/components/markdown_view/MarkdownImagesMap.js");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




/**
 * Component to render images from parsed markdown.
 * Parsed images from markdown are not directly rendered, instead they have to be added to the MarkdownImagesMap.ts.
 * This makes sure that all icons/images are accounted for in markdown.
 */
class MarkdownImage extends HTMLElement {
    static litTagName = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal `devtools-markdown-image`;
    #shadow = this.attachShadow({ mode: 'open' });
    #imageData;
    #imageTitle;
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_markdownImage_css_js__WEBPACK_IMPORTED_MODULE_2__["default"]];
    }
    set data(data) {
        const { key, title } = data;
        const markdownImage = (0,_MarkdownImagesMap_js__WEBPACK_IMPORTED_MODULE_3__.getMarkdownImage)(key);
        this.#imageData = markdownImage;
        this.#imageTitle = title;
        this.#render();
    }
    #getIconComponent() {
        if (!this.#imageData) {
            return _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html ``;
        }
        const { src, color, width = '100%', height = '100%' } = this.#imageData;
        return _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html `
      <${_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_0__.Icon.Icon.litTagName} .data=${{ iconPath: src, color, width, height }}></${_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_0__.Icon.Icon.litTagName}>
    `;
    }
    #getImageComponent() {
        if (!this.#imageData) {
            return _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html ``;
        }
        const { src, width = '100%', height = '100%' } = this.#imageData;
        return _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html `
      <img class="markdown-image" src=${src} alt=${this.#imageTitle} width=${width} height=${height}/>
    `;
    }
    #render() {
        if (!this.#imageData) {
            return;
        }
        const { isIcon } = this.#imageData;
        const imageComponent = isIcon ? this.#getIconComponent() : this.#getImageComponent();
        _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.render(imageComponent, this.#shadow, { host: this });
    }
}
customElements.define('devtools-markdown-image', MarkdownImage);
//# sourceMappingURL=MarkdownImage.js.map

/***/ }),

/***/ "./ui/components/markdown_view/MarkdownImagesMap.js":
/*!**********************************************************!*\
  !*** ./ui/components/markdown_view/MarkdownImagesMap.js ***!
  \**********************************************************/
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
//# sourceMappingURL=MarkdownImagesMap.js.map

/***/ }),

/***/ "./ui/components/markdown_view/MarkdownLink.js":
/*!*****************************************************!*\
  !*** ./ui/components/markdown_view/MarkdownLink.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarkdownLink: () => (/* binding */ MarkdownLink)
/* harmony export */ });
/* harmony import */ var _legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _markdownLink_css_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./markdownLink.css.js */ "./ui/components/markdown_view/markdownLink.css.js");
/* harmony import */ var _MarkdownLinksMap_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MarkdownLinksMap.js */ "./ui/components/markdown_view/MarkdownLinksMap.js");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
 // Required for <x-link>.




/**
 * Component to render link from parsed markdown.
 * Parsed links from markdown are not directly rendered, instead they have to be added to the <key, link> map in MarkdownLinksMap.ts.
 * This makes sure that all links are accounted for and no bad links are introduced to devtools via markdown.
 */
class MarkdownLink extends HTMLElement {
    static litTagName = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal `devtools-markdown-link`;
    #shadow = this.attachShadow({ mode: 'open' });
    #linkText = '';
    #linkUrl = '';
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_markdownLink_css_js__WEBPACK_IMPORTED_MODULE_3__["default"]];
    }
    set data(data) {
        const { key, title } = data;
        const markdownLink = (0,_MarkdownLinksMap_js__WEBPACK_IMPORTED_MODULE_4__.getMarkdownLink)(key);
        this.#linkText = title;
        this.#linkUrl = markdownLink;
        this.#render();
    }
    #render() {
        // clang-format off
        const output = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html `<x-link class="devtools-link" href=${this.#linkUrl} jslog=${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__.link().track({ click: true })}
    >${this.#linkText}</x-link>`;
        _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.render(output, this.#shadow, { host: this });
        // clang-format on
    }
}
customElements.define('devtools-markdown-link', MarkdownLink);
//# sourceMappingURL=MarkdownLink.js.map

/***/ }),

/***/ "./ui/components/markdown_view/MarkdownLinksMap.js":
/*!*********************************************************!*\
  !*** ./ui/components/markdown_view/MarkdownLinksMap.js ***!
  \*********************************************************/
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
//# sourceMappingURL=MarkdownLinksMap.js.map

/***/ }),

/***/ "./ui/components/markdown_view/MarkdownView.js":
/*!*****************************************************!*\
  !*** ./ui/components/markdown_view/MarkdownView.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarkdownInsightRenderer: () => (/* binding */ MarkdownInsightRenderer),
/* harmony export */   MarkdownLitRenderer: () => (/* binding */ MarkdownLitRenderer),
/* harmony export */   MarkdownView: () => (/* binding */ MarkdownView)
/* harmony export */ });
/* harmony import */ var _legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _CodeBlock_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CodeBlock.js */ "./ui/components/markdown_view/CodeBlock.js");
/* harmony import */ var _MarkdownImage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MarkdownImage.js */ "./ui/components/markdown_view/MarkdownImage.js");
/* harmony import */ var _MarkdownLink_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MarkdownLink.js */ "./ui/components/markdown_view/MarkdownLink.js");
/* harmony import */ var _markdownView_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./markdownView.css.js */ "./ui/components/markdown_view/markdownView.css.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






const html = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html;
const render = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.render;
class MarkdownView extends HTMLElement {
    static litTagName = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal `devtools-markdown-view`;
    #shadow = this.attachShadow({ mode: 'open' });
    #tokenData = [];
    #renderer = new MarkdownLitRenderer();
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_markdownView_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]];
    }
    set data(data) {
        this.#tokenData = data.tokens;
        if (data.renderer) {
            this.#renderer = data.renderer;
        }
        this.#update();
    }
    #update() {
        this.#render();
    }
    #render() {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        render(html `
      <div class='message'>
        ${this.#tokenData.map(token => this.#renderer.renderToken(token))}
      </div>
    `, this.#shadow, { host: this });
        // clang-format on
    }
}
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
//# sourceMappingURL=MarkdownView.js.map

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


/***/ }),

/***/ "./ui/components/markdown_view/markdownImage.css.js":
/*!**********************************************************!*\
  !*** ./ui/components/markdown_view/markdownImage.css.js ***!
  \**********************************************************/
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

.markdown-image {
  display: block;
}

/*# sourceURL=markdownImage.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./ui/components/markdown_view/markdownLink.css.js":
/*!*********************************************************!*\
  !*** ./ui/components/markdown_view/markdownLink.css.js ***!
  \*********************************************************/
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

.devtools-link {
  color: var(--sys-color-primary);
  outline-offset: 2px;
  text-decoration: none;
}

.devtools-link:hover {
  text-decoration: underline;
}

/*# sourceURL=markdownLink.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./ui/components/markdown_view/markdownView.css.js":
/*!*********************************************************!*\
  !*** ./ui/components/markdown_view/markdownView.css.js ***!
  \*********************************************************/
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

.message {
  line-height: 18px;
  font-size: 12px;
  color: var(--override-markdown-view-message-color, --sys-color-token-subtle);
  margin-bottom: 4px;
  user-select: text;
}

.message p {
  margin-bottom: 10px;
  margin-block-start: 2px;
}

.message ul {
  list-style-type: none;
  padding-inline-start: 1em;
}

.message ul ul {
  padding-inline-start: 19px;
}

.message li {
  margin-top: 8px;
  display: list-item;
  list-style-type: disc;
}

.message code {
  color: var(--sys-color-on-surface);
  font-size: 11px;
  user-select: text;
  cursor: text;
  background: var(--sys-color-surface1);
}

.devtools-link {
  color: var(--sys-color-primary);
  outline-offset: 2px;
  text-decoration: none;
}

.devtools-link:hover {
  text-decoration: underline;
}

/*# sourceURL=markdownView.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);