"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_legacy_components_inline_editor_ColorMixSwatch_js"],{

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


/***/ })

}]);