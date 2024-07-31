"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_elements_components_CSSPropertyDocsView_ts"],{

/***/ "./src/panels/elements/components/CSSPropertyDocsView.ts":
/*!***************************************************************!*\
  !*** ./src/panels/elements/components/CSSPropertyDocsView.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSPropertyDocsView: () => (/* binding */ CSSPropertyDocsView)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/input/input.js */ "./src/ui/components/input/input.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './cssPropertyDocsView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2023 The Chromium Authors. All rights reserved.
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
var _CSSPropertyDocsView_instances, _CSSPropertyDocsView_shadow, _CSSPropertyDocsView_cssProperty, _CSSPropertyDocsView_dontShowChanged, _CSSPropertyDocsView_render;






const UIStrings = {
    /**
     *@description Text for button that redirects to CSS property documentation.
     */
    learnMore: 'Learn more',
    /**
     *@description Text for a checkbox to turn off the CSS property documentation.
     */
    dontShow: 'Don\'t show',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/elements/components/CSSPropertyDocsView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
const { render, html } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__;
class CSSPropertyDocsView extends HTMLElement {
    constructor(cssProperty) {
        super();
        _CSSPropertyDocsView_instances.add(this);
        _CSSPropertyDocsView_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _CSSPropertyDocsView_cssProperty.set(this, void 0);
        __classPrivateFieldSet(this, _CSSPropertyDocsView_cssProperty, cssProperty, "f");
        __classPrivateFieldGet(this, _CSSPropertyDocsView_shadow, "f").adoptedStyleSheets = [_ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_2__.checkboxStyles, Object(function webpackMissingModule() { var e = new Error("Cannot find module './cssPropertyDocsView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _CSSPropertyDocsView_instances, "m", _CSSPropertyDocsView_render).call(this);
    }
}
_CSSPropertyDocsView_shadow = new WeakMap(), _CSSPropertyDocsView_cssProperty = new WeakMap(), _CSSPropertyDocsView_instances = new WeakSet(), _CSSPropertyDocsView_dontShowChanged = function _CSSPropertyDocsView_dontShowChanged(e) {
    const showDocumentation = !e.target.checked;
    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance()
        .moduleSetting('show-css-property-documentation-on-hover')
        .set(showDocumentation);
}, _CSSPropertyDocsView_render = function _CSSPropertyDocsView_render() {
    const description = __classPrivateFieldGet(this, _CSSPropertyDocsView_cssProperty, "f").description;
    const link = __classPrivateFieldGet(this, _CSSPropertyDocsView_cssProperty, "f").references?.[0].url;
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    render(html `
      <div class="docs-popup-wrapper">
        ${description ? html `
          <div id="description">
            ${description}
          </div>
        ` : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.nothing}
        ${link ? html `
          <div class="docs-popup-section footer">
            <x-link
              id="learn-more"
              href=${link}
              class="clickable underlined unbreakable-text"
            >
              ${i18nString(UIStrings.learnMore)}
            </x-link>
            <label class="dont-show">
              <input type="checkbox" @change=${__classPrivateFieldGet(this, _CSSPropertyDocsView_instances, "m", _CSSPropertyDocsView_dontShowChanged)} jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.toggle('css-property-doc').track({ change: true })}/>
              ${i18nString(UIStrings.dontShow)}
            </label>
          </div>
        ` : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.nothing}
      </div>
    `, __classPrivateFieldGet(this, _CSSPropertyDocsView_shadow, "f"), {
        host: this,
    });
    // clang-format on
};
Object.defineProperty(CSSPropertyDocsView, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal `devtools-css-property-docs-view`
});
customElements.define('devtools-css-property-docs-view', CSSPropertyDocsView);


/***/ })

}]);