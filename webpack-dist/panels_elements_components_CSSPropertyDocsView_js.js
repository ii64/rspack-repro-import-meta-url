"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_elements_components_CSSPropertyDocsView_js"],{

/***/ "./panels/elements/components/CSSPropertyDocsView.js":
/*!***********************************************************!*\
  !*** ./panels/elements/components/CSSPropertyDocsView.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSPropertyDocsView: () => (/* binding */ CSSPropertyDocsView)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/input/input.js */ "./ui/components/input/input.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _cssPropertyDocsView_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cssPropertyDocsView.css.js */ "./panels/elements/components/cssPropertyDocsView.css.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






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
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal `devtools-css-property-docs-view`;
    #shadow = this.attachShadow({ mode: 'open' });
    #cssProperty;
    constructor(cssProperty) {
        super();
        this.#cssProperty = cssProperty;
        this.#shadow.adoptedStyleSheets = [_ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_2__.checkboxStyles, _cssPropertyDocsView_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]];
        this.#render();
    }
    #dontShowChanged(e) {
        const showDocumentation = !e.target.checked;
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance()
            .moduleSetting('show-css-property-documentation-on-hover')
            .set(showDocumentation);
    }
    #render() {
        const description = this.#cssProperty.description;
        const link = this.#cssProperty.references?.[0].url;
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
              <input type="checkbox" @change=${this.#dontShowChanged} jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.toggle('css-property-doc').track({ change: true })}/>
              ${i18nString(UIStrings.dontShow)}
            </label>
          </div>
        ` : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.nothing}
      </div>
    `, this.#shadow, {
            host: this,
        });
        // clang-format on
    }
}
customElements.define('devtools-css-property-docs-view', CSSPropertyDocsView);
//# sourceMappingURL=CSSPropertyDocsView.js.map

/***/ }),

/***/ "./panels/elements/components/cssPropertyDocsView.css.js":
/*!***************************************************************!*\
  !*** ./panels/elements/components/cssPropertyDocsView.css.js ***!
  \***************************************************************/
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

:host {
  padding: 6px;
}

.docs-popup-wrapper {
  max-width: 350px;
  font-size: 12px;
  line-height: 1.4;
}

.docs-popup-section {
  margin-top: 8px;
}

.clickable {
  color: var(--sys-color-primary);
}

.underlined {
  text-decoration: underline;
}

.unbreakable-text {
  white-space: nowrap;
}

.footer {
  display: flex;
  justify-content: space-between;
}

.dont-show input {
  vertical-align: bottom;
}

/*# sourceURL=cssPropertyDocsView.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);