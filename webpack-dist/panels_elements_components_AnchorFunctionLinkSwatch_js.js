"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_elements_components_AnchorFunctionLinkSwatch_js"],{

/***/ "./panels/elements/components/AnchorFunctionLinkSwatch.js":
/*!****************************************************************!*\
  !*** ./panels/elements/components/AnchorFunctionLinkSwatch.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnchorFunctionLinkSwatch: () => (/* binding */ AnchorFunctionLinkSwatch)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/legacy/components/inline_editor/inline_editor.js */ "./ui/legacy/components/inline_editor/inline_editor.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _anchorFunctionLinkSwatch_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./anchorFunctionLinkSwatch.css.js */ "./panels/elements/components/anchorFunctionLinkSwatch.css.js");
// Copyright (c) 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






const UIStrings = {
    /**
     *@description Title in the styles tab for the icon button for jumping to the anchor node.
     */
    jumpToAnchorNode: 'Jump to anchor node',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/elements/components/AnchorFunctionLinkSwatch.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
const { render, html } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__;
// clang-format on
class AnchorFunctionLinkSwatch extends HTMLElement {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal `devtools-anchor-function-link-swatch`;
    #shadow = this.attachShadow({ mode: 'open' });
    #data;
    constructor(data) {
        super();
        this.#data = data;
    }
    dataForTest() {
        return this.#data;
    }
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_anchorFunctionLinkSwatch_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]];
        this.render();
    }
    set data(data) {
        this.#data = data;
        this.render();
    }
    #handleIconClick(ev) {
        ev.stopPropagation();
        this.#data.onLinkActivate();
    }
    #renderIdentifierLink() {
        // clang-format off
        return html `<${_ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_2__.LinkSwatch.LinkSwatch.litTagName}
      @mouseenter=${this.#data.onMouseEnter}
      @mouseleave=${this.#data.onMouseLeave}
      .data=${{
            text: this.#data.identifier,
            isDefined: Boolean(this.#data.anchorNode),
            jslogContext: 'anchor-link',
            onLinkActivate: this.#data.onLinkActivate,
        }}></${_ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_2__.LinkSwatch.LinkSwatch.litTagName}>`;
        // clang-format on
    }
    #renderIconLink() {
        // clang-format off
        return html `<${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon.litTagName}
      role='button'
      title=${i18nString(UIStrings.jumpToAnchorNode)}
      class='icon-link'
      name='open-externally'
      jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.action('jump-to-anchor-node').track({ click: true })}
      @mouseenter=${this.#data.onMouseEnter}
      @mouseleave=${this.#data.onMouseLeave}
      @mousedown=${(ev) => ev.stopPropagation()}
      @click=${this.#handleIconClick}
    ></${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon.litTagName}>`;
        // clang-format on
    }
    render() {
        if (!this.#data.identifier && !this.#data.anchorNode) {
            return;
        }
        if (this.#data.identifier) {
            // clang-format off
            render(html `${this.#renderIdentifierLink()}${this.#data.needsSpace ? ' ' : ''}`, this.#shadow, { host: this });
            // clang-format on
        }
        else {
            // clang-format off
            render(html `${this.#renderIconLink()}${this.#data.needsSpace ? ' ' : ''}`, this.#shadow, { host: this });
            // clang-format on
        }
    }
}
customElements.define('devtools-anchor-function-link-swatch', AnchorFunctionLinkSwatch);
//# sourceMappingURL=AnchorFunctionLinkSwatch.js.map

/***/ }),

/***/ "./panels/elements/components/anchorFunctionLinkSwatch.css.js":
/*!********************************************************************!*\
  !*** ./panels/elements/components/anchorFunctionLinkSwatch.css.js ***!
  \********************************************************************/
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
 * Copyright 2024 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.icon-link {
  color: var(--text-link);
  width: 13px;
  height: 13px;

  &:hover {
    cursor: pointer;
  }
}

/*# sourceURL=anchorFunctionLinkSwatch.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);