"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_legacy_components_inline_editor_inline_editor_js"],{

/***/ "./ui/legacy/components/inline_editor/CSSLength.js":
/*!*********************************************************!*\
  !*** ./ui/legacy/components/inline_editor/CSSLength.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSLength: () => (/* binding */ CSSLength),
/* harmony export */   DraggingFinishedEvent: () => (/* binding */ DraggingFinishedEvent)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _cssLength_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cssLength.css.js */ "./ui/legacy/components/inline_editor/cssLength.css.js");
/* harmony import */ var _CSSLengthUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CSSLengthUtils.js */ "./ui/legacy/components/inline_editor/CSSLengthUtils.js");
/* harmony import */ var _InlineEditorUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InlineEditorUtils.js */ "./ui/legacy/components/inline_editor/InlineEditorUtils.js");
// Copyright (c) 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





const { render, html, Directives: { classMap } } = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__;
class DraggingFinishedEvent extends Event {
    static eventName = 'draggingfinished';
    constructor() {
        super(DraggingFinishedEvent.eventName, {});
    }
}
const DefaultLength = {
    value: 0,
    unit: "px" /* LengthUnit.PIXEL */,
};
class CSSLength extends HTMLElement {
    static litTagName = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal `devtools-css-length`;
    shadow = this.attachShadow({ mode: 'open' });
    onDraggingValue = this.dragValue.bind(this);
    length = DefaultLength;
    overloaded = false;
    isEditingSlot = false;
    isDraggingValue = false;
    currentMouseClientX = 0;
    #valueMousedownTime = 0;
    set data(data) {
        const parsedResult = (0,_CSSLengthUtils_js__WEBPACK_IMPORTED_MODULE_3__.parseText)(data.lengthText);
        if (!parsedResult) {
            return;
        }
        this.length = parsedResult;
        this.overloaded = data.overloaded;
        this.render();
    }
    connectedCallback() {
        this.shadow.adoptedStyleSheets = [_cssLength_css_js__WEBPACK_IMPORTED_MODULE_2__["default"]];
    }
    dragValue(event) {
        event.preventDefault();
        event.stopPropagation();
        if (Date.now() - this.#valueMousedownTime <= 300) {
            // Delay drag callback by 300ms to prioritize click over drag.
            return;
        }
        this.isDraggingValue = true;
        let displacement = event.clientX - this.currentMouseClientX;
        this.currentMouseClientX = event.clientX;
        if (event.shiftKey) {
            displacement *= 10;
        }
        if (event.altKey) {
            displacement *= 0.1;
        }
        this.length.value = this.length.value + displacement;
        this.dispatchEvent(new _InlineEditorUtils_js__WEBPACK_IMPORTED_MODULE_4__.ValueChangedEvent(`${this.length.value}${this.length.unit}`));
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.swatchActivated(8 /* Host.UserMetrics.SwatchType.Length */);
        this.render();
    }
    onValueMousedown(event) {
        if (event.button !== 0) {
            return;
        }
        this.#valueMousedownTime = Date.now();
        this.currentMouseClientX = event.clientX;
        const targetDocument = event.target instanceof Node && event.target.ownerDocument;
        if (targetDocument) {
            targetDocument.addEventListener('mousemove', this.onDraggingValue, { capture: true });
            targetDocument.addEventListener('mouseup', (event) => {
                targetDocument.removeEventListener('mousemove', this.onDraggingValue, { capture: true });
                if (!this.isDraggingValue) {
                    return;
                }
                event.preventDefault();
                event.stopPropagation();
                this.isDraggingValue = false;
                this.dispatchEvent(new DraggingFinishedEvent());
            }, { once: true, capture: true });
        }
    }
    onValueMouseup() {
        if (!this.isDraggingValue) {
            this.isEditingSlot = true;
            this.render();
        }
    }
    render() {
        const classes = {
            'css-length': true,
            'overloaded': this.overloaded,
        };
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        render(html `
      <div class=${classMap(classes)}>
        ${this.renderContent()}
      </div>
    `, this.shadow, {
            host: this,
        });
        // clang-format on
    }
    renderContent() {
        if (this.isEditingSlot) {
            return html `<slot></slot>`;
        }
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        return html `
        <span class="value"
          @mousedown=${this.onValueMousedown}
          @mouseup=${this.onValueMouseup}
        >${this.length.value}</span>${this.length.unit}
      `;
        // clang-format on
    }
}
customElements.define('devtools-css-length', CSSLength);
//# sourceMappingURL=CSSLength.js.map

/***/ }),

/***/ "./ui/legacy/components/inline_editor/CSSLengthUtils.js":
/*!**************************************************************!*\
  !*** ./ui/legacy/components/inline_editor/CSSLengthUtils.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSLengthRegex: () => (/* binding */ CSSLengthRegex),
/* harmony export */   LENGTH_UNITS: () => (/* binding */ LENGTH_UNITS),
/* harmony export */   parseText: () => (/* binding */ parseText)
/* harmony export */ });
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const LENGTH_UNITS = [
    "px" /* LengthUnit.PIXEL */, "cm" /* LengthUnit.CENTIMETER */, "mm" /* LengthUnit.MILLIMETER */, "Q" /* LengthUnit.QUARTERMILLIMETER */,
    "in" /* LengthUnit.INCH */, "pc" /* LengthUnit.PICA */, "pt" /* LengthUnit.POINT */, "cap" /* LengthUnit.CAP */,
    "ch" /* LengthUnit.CH */, "em" /* LengthUnit.EM */, "ex" /* LengthUnit.EX */, "ic" /* LengthUnit.IC */,
    "lh" /* LengthUnit.LH */, "rcap" /* LengthUnit.RCAP */, "rch" /* LengthUnit.RCH */, "rem" /* LengthUnit.REM */,
    "rex" /* LengthUnit.REX */, "ric" /* LengthUnit.RIC */, "rlh" /* LengthUnit.RLH */, "vb" /* LengthUnit.VB */,
    "vh" /* LengthUnit.VH */, "vi" /* LengthUnit.VI */, "vw" /* LengthUnit.VW */, "vmin" /* LengthUnit.VMIN */,
    "vmax" /* LengthUnit.VMAX */,
];
const CSSLengthRegex = new RegExp(`(?<value>[+-]?\\d*\\.?\\d+)(?<unit>${LENGTH_UNITS.join('|')})`);
const parseText = (text) => {
    const result = text.match(CSSLengthRegex);
    if (!result || !result.groups) {
        return null;
    }
    return {
        value: Number(result.groups.value),
        unit: result.groups.unit,
    };
};
//# sourceMappingURL=CSSLengthUtils.js.map

/***/ }),

/***/ "./ui/legacy/components/inline_editor/ColorMixSwatch.js":
/*!**************************************************************!*\
  !*** ./ui/legacy/components/inline_editor/ColorMixSwatch.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColorMixSwatch: () => (/* binding */ ColorMixSwatch)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _colorMixSwatch_css_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./colorMixSwatch.css.js */ "./ui/legacy/components/inline_editor/colorMixSwatch.css.js");
// Copyright (c) 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





class ColorMixSwatch extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(HTMLElement) {
    static litTagName = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.literal `devtools-color-mix-swatch`;
    shadow = this.attachShadow({ mode: 'open' });
    colorMixText = ''; // color-mix(in srgb, hotpink, white)
    firstColorText = ''; // hotpink
    secondColorText = ''; // white
    #registerPopoverCallback;
    constructor() {
        super();
        this.shadow.adoptedStyleSheets = [
            _colorMixSwatch_css_js__WEBPACK_IMPORTED_MODULE_4__["default"],
        ];
    }
    get icon() {
        return this.shadow.firstElementChild;
    }
    mixedColor() {
        const colorText = this.icon?.computedStyleMap().get('color')?.toString() ?? null;
        return colorText ? _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(colorText) : null;
    }
    setFirstColor(text) {
        // We need to replace `colorMixText` because it is the CSS for the
        // the middle section where we actually show the mixed colors.
        // So, when a color changed, we need to update colorMixText to
        // reflect the new color (not the old one).
        if (this.firstColorText) {
            this.colorMixText = this.colorMixText.replace(this.firstColorText, text);
        }
        this.firstColorText = text;
        this.dispatchEventToListeners("colorChanged" /* Events.ColorChanged */, { text: this.colorMixText });
        this.#render();
    }
    setSecondColor(text) {
        // We need to replace from the last to handle the same colors case
        // i.e. replacing the second color of `color-mix(in srgb, red 50%, red 10%)`
        // to `blue` should result in `color-mix(in srgb, red 50%, blue 10%)`.
        if (this.secondColorText) {
            this.colorMixText = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.replaceLast(this.colorMixText, this.secondColorText, text);
        }
        this.secondColorText = text;
        this.dispatchEventToListeners("colorChanged" /* Events.ColorChanged */, { text: this.colorMixText });
        this.#render();
    }
    setColorMixText(text) {
        this.colorMixText = text;
        this.dispatchEventToListeners("colorChanged" /* Events.ColorChanged */, { text: this.colorMixText });
        this.#render();
    }
    setRegisterPopoverCallback(callback) {
        this.#registerPopoverCallback = callback;
        callback(this);
    }
    getText() {
        return this.colorMixText;
    }
    #render() {
        if (!this.colorMixText || !this.firstColorText || !this.secondColorText) {
            _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.render(this.colorMixText, this.shadow, { host: this });
            return;
        }
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        // Note that we use a <slot> with a default value here to display the color text. Consumers of this component are
        // free to append any content to replace what is being shown here.
        // Note also that whitespace between nodes is removed on purpose to avoid pushing these elements apart. Do not
        // re-format the HTML code.
        _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.html `<div class="swatch-icon" jslog=${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.cssColorMix()} style="--color: ${this.colorMixText}">
        <span class="swatch swatch-left" id="swatch-1" style="--color: ${this.firstColorText}"></span>
        <span class="swatch swatch-right" id="swatch-2" style="--color: ${this.secondColorText}"></span>
        <span class="swatch swatch-mix" id="mix-result" style="--color: ${this.colorMixText}"></span>
      </div><slot>${this.colorMixText}</slot>`, this.shadow, { host: this });
        // clang-format on
        this.#registerPopoverCallback && this.#registerPopoverCallback(this);
    }
}
customElements.define('devtools-color-mix-swatch', ColorMixSwatch);
//# sourceMappingURL=ColorMixSwatch.js.map

/***/ }),

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

/***/ "./ui/legacy/components/inline_editor/Swatches.js":
/*!********************************************************!*\
  !*** ./ui/legacy/components/inline_editor/Swatches.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BezierSwatch: () => (/* binding */ BezierSwatch),
/* harmony export */   CSSShadowSwatch: () => (/* binding */ CSSShadowSwatch)
/* harmony export */ });
/* harmony import */ var _components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _bezierSwatch_css_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bezierSwatch.css.js */ "./ui/legacy/components/inline_editor/bezierSwatch.css.js");
/* harmony import */ var _cssShadowSwatch_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cssShadowSwatch.css.js */ "./ui/legacy/components/inline_editor/cssShadowSwatch.css.js");
// Copyright (c) 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






class BezierSwatch extends HTMLSpanElement {
    iconElementInternal;
    textElement;
    constructor() {
        super();
        const root = _legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createShadowRootWithCoreStyles(this, {
            cssFile: [_bezierSwatch_css_js__WEBPACK_IMPORTED_MODULE_4__["default"]],
            delegatesFocus: undefined,
        });
        this.iconElementInternal = _components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_0__.Icon.create('bezier-curve-filled', 'bezier-swatch-icon');
        this.iconElementInternal.setAttribute('jslog', `${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__.showStyleEditor('bezier')}`);
        root.appendChild(this.iconElementInternal);
        this.textElement = this.createChild('span');
        root.createChild('slot');
    }
    static create() {
        let constructor = BezierSwatch.constructorInternal;
        if (!constructor) {
            constructor = _legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.registerCustomElement('span', 'bezier-swatch', BezierSwatch);
            BezierSwatch.constructorInternal = constructor;
        }
        return constructor();
    }
    bezierText() {
        return this.textElement.textContent || '';
    }
    setBezierText(text) {
        this.textElement.textContent = text;
    }
    hideText(hide) {
        this.textElement.hidden = hide;
    }
    iconElement() {
        return this.iconElementInternal;
    }
    static constructorInternal = null;
}
class CSSShadowSwatch extends HTMLElement {
    static litTagName = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal `css-shadow-swatch`;
    #shadow = this.attachShadow({ mode: 'open' });
    #icon;
    #model;
    constructor(model) {
        super();
        this.#model = model;
        this.#shadow.adoptedStyleSheets = [
            _cssShadowSwatch_css_js__WEBPACK_IMPORTED_MODULE_5__["default"],
        ];
        _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html `<${_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_0__.Icon.Icon.litTagName} name="shadow" class="shadow-swatch-icon"></${_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_0__.Icon.Icon.litTagName}><slot></slot>`, this.#shadow, { host: this });
        this.#icon = this.#shadow.querySelector(_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_0__.Icon.Icon.litTagName.value);
    }
    model() {
        return this.#model;
    }
    iconElement() {
        return this.#icon;
    }
}
customElements.define('css-shadow-swatch', CSSShadowSwatch);
//# sourceMappingURL=Swatches.js.map

/***/ }),

/***/ "./ui/legacy/components/inline_editor/bezierSwatch.css.js":
/*!****************************************************************!*\
  !*** ./ui/legacy/components/inline_editor/bezierSwatch.css.js ***!
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
 * Copyright 2016 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  white-space: nowrap;
}

devtools-icon.bezier-swatch-icon {
  position: relative;
  transform: scale(0.7);
  margin: -5px -2px -3px -4px;
  user-select: none;
  color: var(--icon-css);
  cursor: default;
}

devtools-icon.bezier-swatch-icon:hover {
  color: var(--icon-css-hover);
}

/*# sourceURL=bezierSwatch.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./ui/legacy/components/inline_editor/colorMixSwatch.css.js":
/*!******************************************************************!*\
  !*** ./ui/legacy/components/inline_editor/colorMixSwatch.css.js ***!
  \******************************************************************/
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
 * Copyright 2022 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

/* stylelint-disable */
.swatch-icon {
  display: inline-grid;
  inline-size: 15px;
  grid: [stack] 1fr / [stack] 1fr;
  margin-left: 1px;
  margin-right: 2px;
  color: var(--color);
}

.swatch {
  aspect-ratio: 1 / 1;
  display: inline-block;
  width: 10px;
  border-radius: 1e5px;
  background:
    linear-gradient(var(--color), var(--color)),
    var(--image-file-checker);
  box-shadow: inset 0 0 0 .5px rgb(128 128 128 / 60%);
  grid-area: stack;
}
/* stylelint-enable */

.swatch-right {
  justify-self: end;
}

.swatch-mix {
  box-shadow: none;
  justify-self: end;
  mask: radial-gradient(circle at 0% center, rgb(0 0 0) 50%, rgb(0 0 0 / 0%) calc(50% + 0.5px));
}

/*# sourceURL=colorMixSwatch.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./ui/legacy/components/inline_editor/cssLength.css.js":
/*!*************************************************************!*\
  !*** ./ui/legacy/components/inline_editor/cssLength.css.js ***!
  \*************************************************************/
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

.css-length {
  display: inline-block;
  position: relative;
  outline: none;
}

.css-length.overloaded {
  text-decoration: line-through;
}

.value {
  cursor: ew-resize;
}

.icon {
  position: absolute;
  display: inline-block;
  mask-image: var(--image-file-chevron-down);
  mask-repeat: no-repeat;
  background-color: var(--icon-default);
  transform: scale(0.7);
  margin-left: -7px;
  margin-top: -3px;
  content: "";
  height: 2em;
  width: 2em;
}

:host(:not(:last-child)) {
  margin-right: 0.1em;
}

/*# sourceURL=cssLength.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./ui/legacy/components/inline_editor/cssShadowSwatch.css.js":
/*!*******************************************************************!*\
  !*** ./ui/legacy/components/inline_editor/cssShadowSwatch.css.js ***!
  \*******************************************************************/
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
 * Copyright 2016 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  white-space: nowrap;
}

devtools-icon.shadow-swatch-icon {
  color: var(--icon-css);
  transform: scale(0.7);
  position: relative;
  margin: -5px -2px -5px -4px;
  user-select: none;
  vertical-align: baseline;
  cursor: pointer;

  &:hover {
    color: var(--icon-css-hover);
  }
}

/*# sourceURL=cssShadowSwatch.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./ui/legacy/components/inline_editor/inline_editor.js":
/*!*************************************************************!*\
  !*** ./ui/legacy/components/inline_editor/inline_editor.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimationTimingModel: () => (/* reexport module object */ _AnimationTimingModel_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   AnimationTimingUI: () => (/* reexport module object */ _AnimationTimingUI_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   BezierEditor: () => (/* reexport module object */ _BezierEditor_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   BezierUI: () => (/* reexport module object */ _BezierUI_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   CSSAngle: () => (/* reexport module object */ _CSSAngle_js__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   CSSAngleUtils: () => (/* reexport module object */ _CSSAngleUtils_js__WEBPACK_IMPORTED_MODULE_7__),
/* harmony export */   CSSLength: () => (/* reexport module object */ _CSSLength_js__WEBPACK_IMPORTED_MODULE_8__),
/* harmony export */   CSSLengthUtils: () => (/* reexport module object */ _CSSLengthUtils_js__WEBPACK_IMPORTED_MODULE_9__),
/* harmony export */   CSSLinearEasingModel: () => (/* reexport module object */ _CSSLinearEasingModel_js__WEBPACK_IMPORTED_MODULE_10__),
/* harmony export */   CSSShadowEditor: () => (/* reexport module object */ _CSSShadowEditor_js__WEBPACK_IMPORTED_MODULE_11__),
/* harmony export */   ColorMixSwatch: () => (/* reexport module object */ _ColorMixSwatch_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   ColorSwatch: () => (/* reexport module object */ _ColorSwatch_js__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   FontEditor: () => (/* reexport module object */ _FontEditor_js__WEBPACK_IMPORTED_MODULE_12__),
/* harmony export */   FontEditorUnitConverter: () => (/* reexport module object */ _FontEditorUnitConverter_js__WEBPACK_IMPORTED_MODULE_13__),
/* harmony export */   FontEditorUtils: () => (/* reexport module object */ _FontEditorUtils_js__WEBPACK_IMPORTED_MODULE_14__),
/* harmony export */   InlineEditorUtils: () => (/* reexport module object */ _InlineEditorUtils_js__WEBPACK_IMPORTED_MODULE_15__),
/* harmony export */   LinkSwatch: () => (/* reexport module object */ _LinkSwatch_js__WEBPACK_IMPORTED_MODULE_16__),
/* harmony export */   SwatchPopoverHelper: () => (/* reexport module object */ _SwatchPopoverHelper_js__WEBPACK_IMPORTED_MODULE_18__),
/* harmony export */   Swatches: () => (/* reexport module object */ _Swatches_js__WEBPACK_IMPORTED_MODULE_17__)
/* harmony export */ });
/* harmony import */ var _AnimationTimingModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnimationTimingModel.js */ "./ui/legacy/components/inline_editor/AnimationTimingModel.js");
/* harmony import */ var _AnimationTimingUI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnimationTimingUI.js */ "./ui/legacy/components/inline_editor/AnimationTimingUI.js");
/* harmony import */ var _BezierEditor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BezierEditor.js */ "./ui/legacy/components/inline_editor/BezierEditor.js");
/* harmony import */ var _BezierUI_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BezierUI.js */ "./ui/legacy/components/inline_editor/BezierUI.js");
/* harmony import */ var _ColorMixSwatch_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ColorMixSwatch.js */ "./ui/legacy/components/inline_editor/ColorMixSwatch.js");
/* harmony import */ var _ColorSwatch_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ColorSwatch.js */ "./ui/legacy/components/inline_editor/ColorSwatch.js");
/* harmony import */ var _CSSAngle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CSSAngle.js */ "./ui/legacy/components/inline_editor/CSSAngle.js");
/* harmony import */ var _CSSAngleUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CSSAngleUtils.js */ "./ui/legacy/components/inline_editor/CSSAngleUtils.js");
/* harmony import */ var _CSSLength_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CSSLength.js */ "./ui/legacy/components/inline_editor/CSSLength.js");
/* harmony import */ var _CSSLengthUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CSSLengthUtils.js */ "./ui/legacy/components/inline_editor/CSSLengthUtils.js");
/* harmony import */ var _CSSLinearEasingModel_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CSSLinearEasingModel.js */ "./ui/legacy/components/inline_editor/CSSLinearEasingModel.js");
/* harmony import */ var _CSSShadowEditor_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CSSShadowEditor.js */ "./ui/legacy/components/inline_editor/CSSShadowEditor.js");
/* harmony import */ var _FontEditor_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./FontEditor.js */ "./ui/legacy/components/inline_editor/FontEditor.js");
/* harmony import */ var _FontEditorUnitConverter_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./FontEditorUnitConverter.js */ "./ui/legacy/components/inline_editor/FontEditorUnitConverter.js");
/* harmony import */ var _FontEditorUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./FontEditorUtils.js */ "./ui/legacy/components/inline_editor/FontEditorUtils.js");
/* harmony import */ var _InlineEditorUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./InlineEditorUtils.js */ "./ui/legacy/components/inline_editor/InlineEditorUtils.js");
/* harmony import */ var _LinkSwatch_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./LinkSwatch.js */ "./ui/legacy/components/inline_editor/LinkSwatch.js");
/* harmony import */ var _Swatches_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Swatches.js */ "./ui/legacy/components/inline_editor/Swatches.js");
/* harmony import */ var _SwatchPopoverHelper_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./SwatchPopoverHelper.js */ "./ui/legacy/components/inline_editor/SwatchPopoverHelper.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




















//# sourceMappingURL=inline_editor.js.map

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