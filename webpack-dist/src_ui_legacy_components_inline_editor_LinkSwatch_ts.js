"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_legacy_components_inline_editor_LinkSwatch_ts"],{

/***/ "./src/ui/legacy/components/inline_editor/LinkSwatch.ts":
/*!**************************************************************!*\
  !*** ./src/ui/legacy/components/inline_editor/LinkSwatch.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSVarSwatch: () => (/* binding */ CSSVarSwatch),
/* harmony export */   LinkSwatch: () => (/* binding */ LinkSwatch)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../textButton.css.legacy.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../theme_support/theme_support.js */ "./src/ui/legacy/theme_support/theme_support.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './linkSwatch.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
var _BaseLinkSwatch_linkElement, _CSSVarSwatch_link;






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
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "shadow", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: this.attachShadow({ mode: 'open' })
        });
        Object.defineProperty(this, "onLinkActivate", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => undefined
        });
        _BaseLinkSwatch_linkElement.set(this, void 0);
    }
    connectedCallback() {
        this.shadow.adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './linkSwatch.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        _theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_4__.ThemeSupport.instance().appendStyle(this.shadow, Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../textButton.css.legacy.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
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
        return __classPrivateFieldGet(this, _BaseLinkSwatch_linkElement, "f");
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
            __classPrivateFieldSet(this, _BaseLinkSwatch_linkElement, startNode?.nextSibling, "f");
        }
    }
}
_BaseLinkSwatch_linkElement = new WeakMap();
Object.defineProperty(BaseLinkSwatch, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal `devtools-base-link-swatch`
});
class CSSVarSwatch extends HTMLElement {
    constructor() {
        super();
        Object.defineProperty(this, "shadow", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: this.attachShadow({ mode: 'open' })
        });
        _CSSVarSwatch_link.set(this, void 0);
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
        return __classPrivateFieldGet(this, _CSSVarSwatch_link, "f");
    }
    render(data) {
        const { variableName, fromFallback, computedValue, onLinkActivate } = data;
        const isDefined = Boolean(computedValue) && !fromFallback;
        const title = isDefined ? computedValue ?? '' : i18nString(UIStrings.sIsNotDefined, { PH1: variableName });
        __classPrivateFieldSet(this, _CSSVarSwatch_link, new BaseLinkSwatch(), "f");
        __classPrivateFieldGet(this, _CSSVarSwatch_link, "f").data = {
            title,
            showTitle: false,
            text: variableName,
            isDefined,
            onLinkActivate,
        };
        __classPrivateFieldGet(this, _CSSVarSwatch_link, "f").classList.add('css-var-link');
        // clang-format off
        render(html `<span data-title=${data.computedValue || ''}
          jslog=${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__.link('css-variable').track({ click: true, hover: true })}
        >var(${__classPrivateFieldGet(this, _CSSVarSwatch_link, "f")}<slot name="fallback">${data.fallbackText ? `, ${data.fallbackText}` : ''}</slot>)</span>`, this.shadow, { host: this });
        // clang-format on
    }
}
_CSSVarSwatch_link = new WeakMap();
Object.defineProperty(CSSVarSwatch, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal `devtools-css-var-swatch`
});
class LinkSwatch extends HTMLElement {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "shadow", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: this.attachShadow({ mode: 'open' })
        });
    }
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
Object.defineProperty(LinkSwatch, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal `devtools-link-swatch`
});
customElements.define('devtools-base-link-swatch', BaseLinkSwatch);
customElements.define('devtools-link-swatch', LinkSwatch);
customElements.define('devtools-css-var-swatch', CSSVarSwatch);


/***/ })

}]);