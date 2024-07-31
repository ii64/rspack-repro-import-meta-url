"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_elements_components_CSSVariableValueView_ts"],{

/***/ "./src/panels/elements/components/CSSVariableValueView.ts":
/*!****************************************************************!*\
  !*** ./src/panels/elements/components/CSSVariableValueView.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSVariableParserError: () => (/* binding */ CSSVariableParserError),
/* harmony export */   CSSVariableValueView: () => (/* binding */ CSSVariableValueView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './cssVariableValueView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CSSVariableParserError_instances, _CSSVariableParserError_shadow, _CSSVariableParserError_render, _CSSVariableValueView_instances, _CSSVariableValueView_shadow, _CSSVariableValueView_render;



const UIStrings = {
    /**
     *@description Text for a link from custom property to its defining registration
     */
    registeredPropertyLinkTitle: 'View registered property',
    /**
     *@description Error message for a property value that failed to parse because it had an incorrect type. The message
     * is shown in a popover when hovering the property value. The `type` placeholder will be rendered as an HTML element
     * to apply some styling (color and monospace font)
     *@example {<color>} type
     */
    invalidPropertyValue: 'Invalid property value, expected type {type}',
    /**
     *@description Text displayed in a tooltip shown when hovering over a var() CSS function in the Styles pane when the custom property in this function does not exist. The parameter is the name of the property.
     *@example {--my-custom-property-name} PH1
     */
    sIsNotDefined: '{PH1} is not defined',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/elements/components/CSSVariableValueView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
const i18nTemplate = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.i18nTemplate.bind(undefined, str_);
const { render, html } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__;
function getLinkSection(details) {
    return html `<div class="registered-property-links">
            <span role="button" @click=${details?.goToDefinition} class="clickable underlined unbreakable-text"}>
              ${i18nString(UIStrings.registeredPropertyLinkTitle)}
            </span>
          </div>`;
}
class CSSVariableParserError extends HTMLElement {
    constructor(details) {
        super();
        _CSSVariableParserError_instances.add(this);
        _CSSVariableParserError_shadow.set(this, this.attachShadow({ mode: 'open' }));
        __classPrivateFieldGet(this, _CSSVariableParserError_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './cssVariableValueView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _CSSVariableParserError_instances, "m", _CSSVariableParserError_render).call(this, details);
    }
}
_CSSVariableParserError_shadow = new WeakMap(), _CSSVariableParserError_instances = new WeakSet(), _CSSVariableParserError_render = function _CSSVariableParserError_render(details) {
    const type = html `<span class="monospace css-property">${details.registration.syntax()}</span>`;
    render(html `
      <div class="variable-value-popup-wrapper">
        ${i18nTemplate(UIStrings.invalidPropertyValue, { type })}
        ${getLinkSection(details)}
      </div>`, __classPrivateFieldGet(this, _CSSVariableParserError_shadow, "f"), {
        host: this,
    });
};
Object.defineProperty(CSSVariableParserError, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal `devtools-css-variable-parser-error`
});
class CSSVariableValueView extends HTMLElement {
    constructor({ variableName, value, details, }) {
        super();
        _CSSVariableValueView_instances.add(this);
        _CSSVariableValueView_shadow.set(this, this.attachShadow({ mode: 'open' }));
        Object.defineProperty(this, "variableName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "value", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "details", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        __classPrivateFieldGet(this, _CSSVariableValueView_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './cssVariableValueView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        this.variableName = variableName;
        this.value = value;
        this.details = details;
        __classPrivateFieldGet(this, _CSSVariableValueView_instances, "m", _CSSVariableValueView_render).call(this);
    }
}
_CSSVariableValueView_shadow = new WeakMap(), _CSSVariableValueView_instances = new WeakSet(), _CSSVariableValueView_render = function _CSSVariableValueView_render() {
    const initialValue = this.details?.registration.initialValue();
    const registrationView = this.details ? html `
        <hr class=divider />
        <div class=registered-property-popup-wrapper>
          <div class="monospace">
            <div><span class="css-property">syntax:</span> ${this.details.registration.syntax()}</div>
            <div><span class="css-property">inherits:</span> ${this.details.registration.inherits()}</div>
            ${initialValue ? html `<div><span class="css-property">initial-value:</span> ${initialValue}</div>` : ''}
          </div>
          ${getLinkSection(this.details)}
        </div>` :
        '';
    const valueText = this.value ?? i18nString(UIStrings.sIsNotDefined, { PH1: this.variableName });
    render(html `<div class="variable-value-popup-wrapper">
               ${valueText}
             </div>
             ${registrationView}
             `, __classPrivateFieldGet(this, _CSSVariableValueView_shadow, "f"), {
        host: this,
    });
};
Object.defineProperty(CSSVariableValueView, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal `devtools-css-variable-value-view`
});
customElements.define('devtools-css-variable-value-view', CSSVariableValueView);
customElements.define('devtools-css-variable-parser-error', CSSVariableParserError);


/***/ })

}]);