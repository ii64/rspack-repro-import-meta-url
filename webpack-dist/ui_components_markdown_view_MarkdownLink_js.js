"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_markdown_view_MarkdownLink_js"],{

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


/***/ })

}]);