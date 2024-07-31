"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_components_markdown_view_MarkdownLink_ts"],{

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


/***/ })

}]);