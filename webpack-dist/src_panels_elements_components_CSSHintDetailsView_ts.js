"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_elements_components_CSSHintDetailsView_ts"],{

/***/ "./src/panels/elements/components/CSSHintDetailsView.ts":
/*!**************************************************************!*\
  !*** ./src/panels/elements/components/CSSHintDetailsView.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSHintDetailsView: () => (/* binding */ CSSHintDetailsView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './cssHintDetailsView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CSSHintDetailsView_instances, _CSSHintDetailsView_shadow, _CSSHintDetailsView_authoringHint, _CSSHintDetailsView_render;



const UIStrings = {
    /**
     *@description Text for button that redirects to CSS property documentation.
     */
    learnMore: 'Learn More',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/elements/components/CSSHintDetailsView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
const { render, html, Directives } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__;
class CSSHintDetailsView extends HTMLElement {
    constructor(authoringHint) {
        super();
        _CSSHintDetailsView_instances.add(this);
        _CSSHintDetailsView_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _CSSHintDetailsView_authoringHint.set(this, void 0);
        __classPrivateFieldSet(this, _CSSHintDetailsView_authoringHint, authoringHint, "f");
        __classPrivateFieldGet(this, _CSSHintDetailsView_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './cssHintDetailsView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _CSSHintDetailsView_instances, "m", _CSSHintDetailsView_render).call(this);
    }
}
_CSSHintDetailsView_shadow = new WeakMap(), _CSSHintDetailsView_authoringHint = new WeakMap(), _CSSHintDetailsView_instances = new WeakSet(), _CSSHintDetailsView_render = function _CSSHintDetailsView_render() {
    const link = __classPrivateFieldGet(this, _CSSHintDetailsView_authoringHint, "f").getLearnMoreLink();
    // clang-format off
    render(html `
        <div class="hint-popup-wrapper">
          <div class="hint-popup-reason">
            ${Directives.unsafeHTML(__classPrivateFieldGet(this, _CSSHintDetailsView_authoringHint, "f").getMessage())}
          </div>
          ${__classPrivateFieldGet(this, _CSSHintDetailsView_authoringHint, "f").getPossibleFixMessage() ? html `
              <div class="hint-popup-possible-fix">
                  ${Directives.unsafeHTML(__classPrivateFieldGet(this, _CSSHintDetailsView_authoringHint, "f").getPossibleFixMessage())}
                  ${link ? html `
                      <x-link id="learn-more" href=${link} class="clickable underlined unbreakable-text"}>
                          ${i18nString(UIStrings.learnMore)}
                      </x-link>
                  ` : ''}
              </div>
          ` : ''}
        </div>
      `, __classPrivateFieldGet(this, _CSSHintDetailsView_shadow, "f"), {
        host: this,
    });
    // clang-format on
};
Object.defineProperty(CSSHintDetailsView, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal `devtools-css-hint-details-view`
});
customElements.define('devtools-css-hint-details-view', CSSHintDetailsView);


/***/ })

}]);