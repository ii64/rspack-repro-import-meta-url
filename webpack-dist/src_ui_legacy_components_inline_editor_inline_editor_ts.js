"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_legacy_components_inline_editor_inline_editor_ts"],{

/***/ "./src/ui/legacy/components/inline_editor/CSSLength.ts":
/*!*************************************************************!*\
  !*** ./src/ui/legacy/components/inline_editor/CSSLength.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSLength: () => (/* binding */ CSSLength),
/* harmony export */   DraggingFinishedEvent: () => (/* binding */ DraggingFinishedEvent)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './cssLength.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _CSSLengthUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CSSLengthUtils.js */ "./src/ui/legacy/components/inline_editor/CSSLengthUtils.ts");
/* harmony import */ var _InlineEditorUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InlineEditorUtils.js */ "./src/ui/legacy/components/inline_editor/InlineEditorUtils.ts");
// Copyright (c) 2021 The Chromium Authors. All rights reserved.
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
var _CSSLength_valueMousedownTime;





const { render, html, Directives: { classMap } } = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__;
class DraggingFinishedEvent extends Event {
    constructor() {
        super(DraggingFinishedEvent.eventName, {});
    }
}
Object.defineProperty(DraggingFinishedEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'draggingfinished'
});
const DefaultLength = {
    value: 0,
    unit: _CSSLengthUtils_js__WEBPACK_IMPORTED_MODULE_3__.LengthUnit.PIXEL,
};
class CSSLength extends HTMLElement {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "shadow", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: this.attachShadow({ mode: 'open' })
        });
        Object.defineProperty(this, "onDraggingValue", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: this.dragValue.bind(this)
        });
        Object.defineProperty(this, "length", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: DefaultLength
        });
        Object.defineProperty(this, "overloaded", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "isEditingSlot", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "isDraggingValue", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "currentMouseClientX", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        _CSSLength_valueMousedownTime.set(this, 0);
    }
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
        this.shadow.adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './cssLength.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
    dragValue(event) {
        event.preventDefault();
        event.stopPropagation();
        if (Date.now() - __classPrivateFieldGet(this, _CSSLength_valueMousedownTime, "f") <= 300) {
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
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.swatchActivated(_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.SwatchType.Length);
        this.render();
    }
    onValueMousedown(event) {
        if (event.button !== 0) {
            return;
        }
        __classPrivateFieldSet(this, _CSSLength_valueMousedownTime, Date.now(), "f");
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
_CSSLength_valueMousedownTime = new WeakMap();
Object.defineProperty(CSSLength, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal `devtools-css-length`
});
customElements.define('devtools-css-length', CSSLength);


/***/ }),

/***/ "./src/ui/legacy/components/inline_editor/CSSLengthUtils.ts":
/*!******************************************************************!*\
  !*** ./src/ui/legacy/components/inline_editor/CSSLengthUtils.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSLengthRegex: () => (/* binding */ CSSLengthRegex),
/* harmony export */   LENGTH_UNITS: () => (/* binding */ LENGTH_UNITS),
/* harmony export */   LengthUnit: () => (/* binding */ LengthUnit),
/* harmony export */   parseText: () => (/* binding */ parseText)
/* harmony export */ });
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var LengthUnit;
(function (LengthUnit) {
    // absolute units
    LengthUnit["PIXEL"] = "px";
    LengthUnit["CENTIMETER"] = "cm";
    LengthUnit["MILLIMETER"] = "mm";
    LengthUnit["QUARTERMILLIMETER"] = "Q";
    LengthUnit["INCH"] = "in";
    LengthUnit["PICA"] = "pc";
    LengthUnit["POINT"] = "pt";
    // relative units
    LengthUnit["CAP"] = "cap";
    LengthUnit["CH"] = "ch";
    LengthUnit["EM"] = "em";
    LengthUnit["EX"] = "ex";
    LengthUnit["IC"] = "ic";
    LengthUnit["LH"] = "lh";
    LengthUnit["RCAP"] = "rcap";
    LengthUnit["RCH"] = "rch";
    LengthUnit["REM"] = "rem";
    LengthUnit["REX"] = "rex";
    LengthUnit["RIC"] = "ric";
    LengthUnit["RLH"] = "rlh";
    LengthUnit["VB"] = "vb";
    LengthUnit["VH"] = "vh";
    LengthUnit["VI"] = "vi";
    LengthUnit["VW"] = "vw";
    LengthUnit["VMIN"] = "vmin";
    LengthUnit["VMAX"] = "vmax";
})(LengthUnit || (LengthUnit = {}));
const LENGTH_UNITS = [
    LengthUnit.PIXEL, LengthUnit.CENTIMETER, LengthUnit.MILLIMETER, LengthUnit.QUARTERMILLIMETER,
    LengthUnit.INCH, LengthUnit.PICA, LengthUnit.POINT, LengthUnit.CAP,
    LengthUnit.CH, LengthUnit.EM, LengthUnit.EX, LengthUnit.IC,
    LengthUnit.LH, LengthUnit.RCAP, LengthUnit.RCH, LengthUnit.REM,
    LengthUnit.REX, LengthUnit.RIC, LengthUnit.RLH, LengthUnit.VB,
    LengthUnit.VH, LengthUnit.VI, LengthUnit.VW, LengthUnit.VMIN,
    LengthUnit.VMAX,
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


/***/ }),

/***/ "./src/ui/legacy/components/inline_editor/ColorMixSwatch.ts":
/*!******************************************************************!*\
  !*** ./src/ui/legacy/components/inline_editor/ColorMixSwatch.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColorMixSwatch: () => (/* binding */ ColorMixSwatch),
/* harmony export */   Events: () => (/* binding */ Events)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './colorMixSwatch.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright (c) 2022 The Chromium Authors. All rights reserved.
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
var _ColorMixSwatch_instances, _ColorMixSwatch_registerPopoverCallback, _ColorMixSwatch_render;





var Events;
(function (Events) {
    Events["ColorChanged"] = "colorChanged";
})(Events || (Events = {}));
class ColorMixSwatch extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(HTMLElement) {
    constructor() {
        super();
        _ColorMixSwatch_instances.add(this);
        Object.defineProperty(this, "shadow", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: this.attachShadow({ mode: 'open' })
        });
        Object.defineProperty(this, "colorMixText", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ''
        }); // color-mix(in srgb, hotpink, white)
        Object.defineProperty(this, "firstColorText", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ''
        }); // hotpink
        Object.defineProperty(this, "secondColorText", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ''
        }); // white
        _ColorMixSwatch_registerPopoverCallback.set(this, void 0);
        this.shadow.adoptedStyleSheets = [
            Object(function webpackMissingModule() { var e = new Error("Cannot find module './colorMixSwatch.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
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
        this.dispatchEventToListeners(Events.ColorChanged, { text: this.colorMixText });
        __classPrivateFieldGet(this, _ColorMixSwatch_instances, "m", _ColorMixSwatch_render).call(this);
    }
    setSecondColor(text) {
        // We need to replace from the last to handle the same colors case
        // i.e. replacing the second color of `color-mix(in srgb, red 50%, red 10%)`
        // to `blue` should result in `color-mix(in srgb, red 50%, blue 10%)`.
        if (this.secondColorText) {
            this.colorMixText = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.replaceLast(this.colorMixText, this.secondColorText, text);
        }
        this.secondColorText = text;
        this.dispatchEventToListeners(Events.ColorChanged, { text: this.colorMixText });
        __classPrivateFieldGet(this, _ColorMixSwatch_instances, "m", _ColorMixSwatch_render).call(this);
    }
    setColorMixText(text) {
        this.colorMixText = text;
        this.dispatchEventToListeners(Events.ColorChanged, { text: this.colorMixText });
        __classPrivateFieldGet(this, _ColorMixSwatch_instances, "m", _ColorMixSwatch_render).call(this);
    }
    setRegisterPopoverCallback(callback) {
        __classPrivateFieldSet(this, _ColorMixSwatch_registerPopoverCallback, callback, "f");
        callback(this);
    }
    getText() {
        return this.colorMixText;
    }
}
_ColorMixSwatch_registerPopoverCallback = new WeakMap(), _ColorMixSwatch_instances = new WeakSet(), _ColorMixSwatch_render = function _ColorMixSwatch_render() {
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
    __classPrivateFieldGet(this, _ColorMixSwatch_registerPopoverCallback, "f") && __classPrivateFieldGet(this, _ColorMixSwatch_registerPopoverCallback, "f").call(this, this);
};
Object.defineProperty(ColorMixSwatch, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.literal `devtools-color-mix-swatch`
});
customElements.define('devtools-color-mix-swatch', ColorMixSwatch);


/***/ }),

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


/***/ }),

/***/ "./src/ui/legacy/components/inline_editor/Swatches.ts":
/*!************************************************************!*\
  !*** ./src/ui/legacy/components/inline_editor/Swatches.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BezierSwatch: () => (/* binding */ BezierSwatch),
/* harmony export */   CSSShadowSwatch: () => (/* binding */ CSSShadowSwatch)
/* harmony export */ });
/* harmony import */ var _components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../legacy.js */ "./src/ui/legacy/legacy.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './bezierSwatch.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './cssShadowSwatch.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright (c) 2015 The Chromium Authors. All rights reserved.
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
var _CSSShadowSwatch_shadow, _CSSShadowSwatch_icon, _CSSShadowSwatch_model;






class BezierSwatch extends HTMLSpanElement {
    constructor() {
        super();
        Object.defineProperty(this, "iconElementInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "textElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        const root = _legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createShadowRootWithCoreStyles(this, {
            cssFile: [Object(function webpackMissingModule() { var e = new Error("Cannot find module './bezierSwatch.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
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
}
Object.defineProperty(BezierSwatch, "constructorInternal", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: null
});
class CSSShadowSwatch extends HTMLElement {
    constructor(model) {
        super();
        _CSSShadowSwatch_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _CSSShadowSwatch_icon.set(this, void 0);
        _CSSShadowSwatch_model.set(this, void 0);
        __classPrivateFieldSet(this, _CSSShadowSwatch_model, model, "f");
        __classPrivateFieldGet(this, _CSSShadowSwatch_shadow, "f").adoptedStyleSheets = [
            Object(function webpackMissingModule() { var e = new Error("Cannot find module './cssShadowSwatch.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
        ];
        _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html `<${_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_0__.Icon.Icon.litTagName} name="shadow" class="shadow-swatch-icon"></${_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_0__.Icon.Icon.litTagName}><slot></slot>`, __classPrivateFieldGet(this, _CSSShadowSwatch_shadow, "f"), { host: this });
        __classPrivateFieldSet(this, _CSSShadowSwatch_icon, __classPrivateFieldGet(this, _CSSShadowSwatch_shadow, "f").querySelector(_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_0__.Icon.Icon.litTagName.value), "f");
    }
    model() {
        return __classPrivateFieldGet(this, _CSSShadowSwatch_model, "f");
    }
    iconElement() {
        return __classPrivateFieldGet(this, _CSSShadowSwatch_icon, "f");
    }
}
_CSSShadowSwatch_shadow = new WeakMap(), _CSSShadowSwatch_icon = new WeakMap(), _CSSShadowSwatch_model = new WeakMap();
Object.defineProperty(CSSShadowSwatch, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal `css-shadow-swatch`
});
customElements.define('css-shadow-swatch', CSSShadowSwatch);


/***/ }),

/***/ "./src/ui/legacy/components/inline_editor/inline_editor.ts":
/*!*****************************************************************!*\
  !*** ./src/ui/legacy/components/inline_editor/inline_editor.ts ***!
  \*****************************************************************/
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
/* harmony import */ var _AnimationTimingModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnimationTimingModel.js */ "./src/ui/legacy/components/inline_editor/AnimationTimingModel.ts");
/* harmony import */ var _AnimationTimingUI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnimationTimingUI.js */ "./src/ui/legacy/components/inline_editor/AnimationTimingUI.ts");
/* harmony import */ var _BezierEditor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BezierEditor.js */ "./src/ui/legacy/components/inline_editor/BezierEditor.ts");
/* harmony import */ var _BezierUI_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BezierUI.js */ "./src/ui/legacy/components/inline_editor/BezierUI.ts");
/* harmony import */ var _ColorMixSwatch_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ColorMixSwatch.js */ "./src/ui/legacy/components/inline_editor/ColorMixSwatch.ts");
/* harmony import */ var _ColorSwatch_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ColorSwatch.js */ "./src/ui/legacy/components/inline_editor/ColorSwatch.ts");
/* harmony import */ var _CSSAngle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CSSAngle.js */ "./src/ui/legacy/components/inline_editor/CSSAngle.ts");
/* harmony import */ var _CSSAngleUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CSSAngleUtils.js */ "./src/ui/legacy/components/inline_editor/CSSAngleUtils.ts");
/* harmony import */ var _CSSLength_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CSSLength.js */ "./src/ui/legacy/components/inline_editor/CSSLength.ts");
/* harmony import */ var _CSSLengthUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CSSLengthUtils.js */ "./src/ui/legacy/components/inline_editor/CSSLengthUtils.ts");
/* harmony import */ var _CSSLinearEasingModel_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CSSLinearEasingModel.js */ "./src/ui/legacy/components/inline_editor/CSSLinearEasingModel.ts");
/* harmony import */ var _CSSShadowEditor_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CSSShadowEditor.js */ "./src/ui/legacy/components/inline_editor/CSSShadowEditor.ts");
/* harmony import */ var _FontEditor_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./FontEditor.js */ "./src/ui/legacy/components/inline_editor/FontEditor.ts");
/* harmony import */ var _FontEditorUnitConverter_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./FontEditorUnitConverter.js */ "./src/ui/legacy/components/inline_editor/FontEditorUnitConverter.ts");
/* harmony import */ var _FontEditorUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./FontEditorUtils.js */ "./src/ui/legacy/components/inline_editor/FontEditorUtils.ts");
/* harmony import */ var _InlineEditorUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./InlineEditorUtils.js */ "./src/ui/legacy/components/inline_editor/InlineEditorUtils.ts");
/* harmony import */ var _LinkSwatch_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./LinkSwatch.js */ "./src/ui/legacy/components/inline_editor/LinkSwatch.ts");
/* harmony import */ var _Swatches_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Swatches.js */ "./src/ui/legacy/components/inline_editor/Swatches.ts");
/* harmony import */ var _SwatchPopoverHelper_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./SwatchPopoverHelper.js */ "./src/ui/legacy/components/inline_editor/SwatchPopoverHelper.ts");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






















/***/ })

}]);