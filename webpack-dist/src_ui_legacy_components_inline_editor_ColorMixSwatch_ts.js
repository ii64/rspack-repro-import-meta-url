"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_legacy_components_inline_editor_ColorMixSwatch_ts"],{

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


/***/ })

}]);