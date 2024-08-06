"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_elements_components_CSSVariableValueView_js"],{

/***/ "./panels/elements/components/CSSVariableValueView.js":
/*!************************************************************!*\
  !*** ./panels/elements/components/CSSVariableValueView.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSVariableParserError: () => (/* binding */ CSSVariableParserError),
/* harmony export */   CSSVariableValueView: () => (/* binding */ CSSVariableValueView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _cssVariableValueView_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cssVariableValueView.css.js */ "./panels/elements/components/cssVariableValueView.css.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



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
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal `devtools-css-variable-parser-error`;
    #shadow = this.attachShadow({ mode: 'open' });
    constructor(details) {
        super();
        this.#shadow.adoptedStyleSheets = [_cssVariableValueView_css_js__WEBPACK_IMPORTED_MODULE_2__["default"]];
        this.#render(details);
    }
    #render(details) {
        const type = html `<span class="monospace css-property">${details.registration.syntax()}</span>`;
        render(html `
      <div class="variable-value-popup-wrapper">
        ${i18nTemplate(UIStrings.invalidPropertyValue, { type })}
        ${getLinkSection(details)}
      </div>`, this.#shadow, {
            host: this,
        });
    }
}
class CSSVariableValueView extends HTMLElement {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal `devtools-css-variable-value-view`;
    #shadow = this.attachShadow({ mode: 'open' });
    variableName;
    value;
    details;
    constructor({ variableName, value, details, }) {
        super();
        this.#shadow.adoptedStyleSheets = [_cssVariableValueView_css_js__WEBPACK_IMPORTED_MODULE_2__["default"]];
        this.variableName = variableName;
        this.value = value;
        this.details = details;
        this.#render();
    }
    #render() {
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
             `, this.#shadow, {
            host: this,
        });
    }
}
customElements.define('devtools-css-variable-value-view', CSSVariableValueView);
customElements.define('devtools-css-variable-parser-error', CSSVariableParserError);
//# sourceMappingURL=CSSVariableValueView.js.map

/***/ }),

/***/ "./panels/elements/components/cssVariableValueView.css.js":
/*!****************************************************************!*\
  !*** ./panels/elements/components/cssVariableValueView.css.js ***!
  \****************************************************************/
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

.registered-property-popup-wrapper {
  max-width: 232px;
  font-size: 12px;
  line-height: 1.4;
}

.monospace {
  font-family: var(--monospace-font-family);
  font-size: var(--monospace-font-size);
}

:host {
  padding: 11px 7px;
}

.divider {
  margin: 8px -7px;
  border: 1px solid var(--sys-color-divider);
}

.registered-property-links {
  margin-top: 8px;
}

.clickable {
  color: var(--sys-color-primary);
  cursor: pointer;
}

.underlined {
  text-decoration: underline;
}

.unbreakable-text {
  white-space: nowrap;
}

.css-property {
  color: var(--webkit-css-property-color, var(--sys-color-token-property-special)); /* stylelint-disable-line plugin/use_theme_colors */ /* See: crbug.com/1152736 for color variable migration. */
}

.title {
  color: var(--sys-color-state-disabled);
}

/*# sourceURL=cssVariableValueView.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);