"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_legacy_components_inline_editor_LinkSwatch_js"],{

/***/ "./ui/legacy/components/inline_editor/LinkSwatch.js":
/*!**********************************************************!*\
  !*** ./ui/legacy/components/inline_editor/LinkSwatch.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSVarSwatch: () => (/* binding */ CSSVarSwatch),
/* harmony export */   LinkSwatch: () => (/* binding */ LinkSwatch)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _textButton_css_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../textButton.css.legacy.js */ "./ui/legacy/textButton.css.legacy.js");
/* harmony import */ var _theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../theme_support/theme_support.js */ "./ui/legacy/theme_support/theme_support.js");
/* harmony import */ var _linkSwatch_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./linkSwatch.css.js */ "./ui/legacy/components/inline_editor/linkSwatch.css.js");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






const UIStrings = {
    /**
     *@description Text displayed in a tooltip shown when hovering over a var() CSS function in the Styles pane when the custom property in this function does not exist. The parameter is the name of the property.
     *@example {--my-custom-property-name} PH1
     */
    sIsNotDefined: '{PH1} is not defined',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('ui/legacy/components/inline_editor/LinkSwatch.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
const { render, html, Directives } = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__;
class BaseLinkSwatch extends HTMLElement {
    static litTagName = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal `devtools-base-link-swatch`;
    shadow = this.attachShadow({ mode: 'open' });
    onLinkActivate = () => undefined;
    #linkElement;
    connectedCallback() {
        this.shadow.adoptedStyleSheets = [_linkSwatch_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]];
        _theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_4__.ThemeSupport.instance().appendStyle(this.shadow, _textButton_css_legacy_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
    }
    set data(data) {
        this.onLinkActivate = (linkText, event) => {
            if (event instanceof MouseEvent && event.button !== 0) {
                return;
            }
            data.onLinkActivate(linkText);
            event.consume(true);
        };
        data.showTitle = data.showTitle === undefined ? true : data.showTitle;
        this.render(data);
    }
    get linkElement() {
        return this.#linkElement;
    }
    render(data) {
        const { isDefined, text, title } = data;
        const classes = Directives.classMap({
            'link-style': true,
            'text-button': true,
            'link-swatch-link': true,
            'undefined': !isDefined,
        });
        // The linkText's space must be removed, otherwise it cannot be triggered when clicked.
        const onActivate = isDefined ? this.onLinkActivate.bind(this, text.trim()) : null;
        // We added var popover, so don't need the title attribute when no need for showing title and
        // only provide the data-title for the popover to get the data.
        const { startNode } = render(html `<button .disabled=${!isDefined} class=${classes} title=${_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.Directives.ifDefined(data.showTitle ? title : null)} data-title=${_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.Directives.ifDefined(!data.showTitle ? title : null)} @click=${onActivate} role="link" tabindex="-1">${text}</button>`, this.shadow, { host: this });
        if (startNode?.nextSibling instanceof HTMLButtonElement) {
            this.#linkElement = startNode?.nextSibling;
        }
    }
}
class CSSVarSwatch extends HTMLElement {
    static litTagName = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal `devtools-css-var-swatch`;
    shadow = this.attachShadow({ mode: 'open' });
    #link;
    constructor() {
        super();
        this.tabIndex = -1;
        this.addEventListener('focus', () => {
            const link = this.shadow.querySelector('[role="link"]');
            if (link) {
                link.focus();
            }
        });
    }
    set data(data) {
        this.render(data);
    }
    get link() {
        return this.#link;
    }
    render(data) {
        const { variableName, fromFallback, computedValue, onLinkActivate } = data;
        const isDefined = Boolean(computedValue) && !fromFallback;
        const title = isDefined ? computedValue ?? '' : i18nString(UIStrings.sIsNotDefined, { PH1: variableName });
        this.#link = new BaseLinkSwatch();
        this.#link.data = {
            title,
            showTitle: false,
            text: variableName,
            isDefined,
            onLinkActivate,
        };
        this.#link.classList.add('css-var-link');
        // clang-format off
        render(html `<span data-title=${data.computedValue || ''}
          jslog=${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__.link('css-variable').track({ click: true, hover: true })}
        >var(${this.#link}<slot name="fallback">${data.fallbackText ? `, ${data.fallbackText}` : ''}</slot>)</span>`, this.shadow, { host: this });
        // clang-format on
    }
}
class LinkSwatch extends HTMLElement {
    static litTagName = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal `devtools-link-swatch`;
    shadow = this.attachShadow({ mode: 'open' });
    set data(data) {
        this.render(data);
    }
    render(data) {
        const { text, isDefined, onLinkActivate, jslogContext } = data;
        const title = isDefined ? text : i18nString(UIStrings.sIsNotDefined, { PH1: text });
        render(html `<span title=${data.text} jslog=${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__.link().track({ click: true }).context(jslogContext)}><${BaseLinkSwatch.litTagName} .data=${{
            text,
            isDefined,
            title,
            onLinkActivate,
        }}></${BaseLinkSwatch.litTagName}></span>`, this.shadow, { host: this });
    }
}
customElements.define('devtools-base-link-swatch', BaseLinkSwatch);
customElements.define('devtools-link-swatch', LinkSwatch);
customElements.define('devtools-css-var-swatch', CSSVarSwatch);
//# sourceMappingURL=LinkSwatch.js.map

/***/ }),

/***/ "./ui/legacy/components/inline_editor/linkSwatch.css.js":
/*!**************************************************************!*\
  !*** ./ui/legacy/components/inline_editor/linkSwatch.css.js ***!
  \**************************************************************/
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

.link-swatch-link {
  display: inline;
}

.link-swatch-link:not(.undefined) {
  cursor: pointer;
  text-underline-offset: 2px;
  color: var(--text-link);
}

.link-swatch-link:hover:not(.undefined) {
  text-decoration: underline;
}

.link-swatch-link:focus:not(:focus-visible) {
  outline: none;
}

.link-swatch-link.undefined {
  opacity: 100%;
  color: var(--text-disabled);
}

/*# sourceURL=linkSwatch.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);