"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_network_components_RequestHeaderSection_ts"],{

/***/ "./src/panels/network/components/RequestHeaderSection.ts":
/*!***************************************************************!*\
  !*** ./src/panels/network/components/RequestHeaderSection.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RequestHeaderSection: () => (/* binding */ RequestHeaderSection)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _forward_forward_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../forward/forward.js */ "./src/panels/network/forward/forward.ts");
/* harmony import */ var _HeaderSectionRow_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HeaderSectionRow.js */ "./src/panels/network/components/HeaderSectionRow.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './RequestHeaderSection.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2022 The Chromium Authors. All rights reserved.
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
var _RequestHeaderSection_instances, _RequestHeaderSection_shadow, _RequestHeaderSection_request, _RequestHeaderSection_headers, _RequestHeaderSection_render, _RequestHeaderSection_maybeRenderProvisionalHeadersWarning;








const { render, html } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__;
const UIStrings = {
    /**
     *@description Text that is usually a hyperlink to more documentation
     */
    learnMore: 'Learn more',
    /**
     *@description Message to explain lack of raw headers for a particular network request
     */
    provisionalHeadersAreShownDisableCache: 'Provisional headers are shown. Disable cache to see full headers.',
    /**
     *@description Tooltip to explain lack of raw headers for a particular network request
     */
    onlyProvisionalHeadersAre: 'Only provisional headers are available because this request was not sent over the network and instead was served from a local cache, which doesn’t store the original request headers. Disable cache to see full request headers.',
    /**
     *@description Message to explain lack of raw headers for a particular network request
     */
    provisionalHeadersAreShown: 'Provisional headers are shown.',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/network/components/RequestHeaderSection.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class RequestHeaderSection extends HTMLElement {
    constructor() {
        super(...arguments);
        _RequestHeaderSection_instances.add(this);
        _RequestHeaderSection_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _RequestHeaderSection_request.set(this, void 0);
        _RequestHeaderSection_headers.set(this, []);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _RequestHeaderSection_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './RequestHeaderSection.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
    set data(data) {
        __classPrivateFieldSet(this, _RequestHeaderSection_request, data.request, "f");
        __classPrivateFieldSet(this, _RequestHeaderSection_headers, __classPrivateFieldGet(this, _RequestHeaderSection_request, "f").requestHeaders().map(header => ({
            name: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toLowerCaseString(header.name),
            value: header.value,
            valueEditable: _HeaderSectionRow_js__WEBPACK_IMPORTED_MODULE_6__.EditingAllowedStatus.Forbidden,
        })), "f");
        __classPrivateFieldGet(this, _RequestHeaderSection_headers, "f").sort((a, b) => _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.compare(a.name, b.name));
        if (data.toReveal?.section === _forward_forward_js__WEBPACK_IMPORTED_MODULE_5__.UIRequestLocation.UIHeaderSection.Request) {
            __classPrivateFieldGet(this, _RequestHeaderSection_headers, "f").filter(header => header.name === data.toReveal?.header?.toLowerCase()).forEach(header => {
                header.highlight = true;
            });
        }
        __classPrivateFieldGet(this, _RequestHeaderSection_instances, "m", _RequestHeaderSection_render).call(this);
    }
}
_RequestHeaderSection_shadow = new WeakMap(), _RequestHeaderSection_request = new WeakMap(), _RequestHeaderSection_headers = new WeakMap(), _RequestHeaderSection_instances = new WeakSet(), _RequestHeaderSection_render = function _RequestHeaderSection_render() {
    if (!__classPrivateFieldGet(this, _RequestHeaderSection_request, "f")) {
        return;
    }
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    render(html `
      ${__classPrivateFieldGet(this, _RequestHeaderSection_instances, "m", _RequestHeaderSection_maybeRenderProvisionalHeadersWarning).call(this)}
      ${__classPrivateFieldGet(this, _RequestHeaderSection_headers, "f").map(header => html `
        <${_HeaderSectionRow_js__WEBPACK_IMPORTED_MODULE_6__.HeaderSectionRow.litTagName}
          .data=${{ header: header }}
          jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.item('request-header')}
        ></${_HeaderSectionRow_js__WEBPACK_IMPORTED_MODULE_6__.HeaderSectionRow.litTagName}>
      `)}
    `, __classPrivateFieldGet(this, _RequestHeaderSection_shadow, "f"), { host: this });
    // clang-format on
}, _RequestHeaderSection_maybeRenderProvisionalHeadersWarning = function _RequestHeaderSection_maybeRenderProvisionalHeadersWarning() {
    if (!__classPrivateFieldGet(this, _RequestHeaderSection_request, "f") || __classPrivateFieldGet(this, _RequestHeaderSection_request, "f").requestHeadersText() !== undefined) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.nothing;
    }
    let cautionText;
    let cautionTitle = '';
    if (__classPrivateFieldGet(this, _RequestHeaderSection_request, "f").cachedInMemory() || __classPrivateFieldGet(this, _RequestHeaderSection_request, "f").cached()) {
        cautionText = i18nString(UIStrings.provisionalHeadersAreShownDisableCache);
        cautionTitle = i18nString(UIStrings.onlyProvisionalHeadersAre);
    }
    else {
        cautionText = i18nString(UIStrings.provisionalHeadersAreShown);
    }
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    return html `
      <div class="call-to-action">
        <div class="call-to-action-body">
          <div class="explanation" title=${cautionTitle}>
            <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.Icon.litTagName} class="inline-icon" .data=${{
        iconName: 'warning-filled',
        color: 'var(--icon-warning)',
        width: '16px',
        height: '16px',
    }}>
            </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.Icon.litTagName}>
            ${cautionText} <x-link href="https://developer.chrome.com/docs/devtools/network/reference/#provisional-headers" class="link">${i18nString(UIStrings.learnMore)}</x-link>
          </div>
        </div>
      </div>
    `;
    // clang-format on
};
Object.defineProperty(RequestHeaderSection, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal `devtools-request-header-section`
});
customElements.define('devtools-request-header-section', RequestHeaderSection);


/***/ })

}]);