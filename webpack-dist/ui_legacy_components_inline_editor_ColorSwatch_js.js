"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_legacy_components_inline_editor_ColorSwatch_js"],{

/***/ "./ui/legacy/components/color_picker/ContrastInfo.js":
/*!***********************************************************!*\
  !*** ./ui/legacy/components/color_picker/ContrastInfo.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContrastInfo: () => (/* binding */ ContrastInfo)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./core/common/common.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

class ContrastInfo extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper {
    isNullInternal;
    contrastRatioInternal;
    contrastRatioAPCAInternal;
    contrastRatioThresholds;
    contrastRationAPCAThreshold;
    fgColor;
    bgColorInternal;
    colorFormatInternal;
    constructor(contrastInfo) {
        super();
        this.isNullInternal = true;
        this.contrastRatioInternal = null;
        this.contrastRatioAPCAInternal = null;
        this.contrastRatioThresholds = null;
        this.contrastRationAPCAThreshold = 0;
        this.fgColor = null;
        this.bgColorInternal = null;
        if (!contrastInfo) {
            return;
        }
        if (!contrastInfo.computedFontSize || !contrastInfo.computedFontWeight || !contrastInfo.backgroundColors ||
            contrastInfo.backgroundColors.length !== 1) {
            return;
        }
        this.isNullInternal = false;
        this.contrastRatioThresholds =
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.getContrastThreshold(contrastInfo.computedFontSize, contrastInfo.computedFontWeight);
        this.contrastRationAPCAThreshold =
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.getAPCAThreshold(contrastInfo.computedFontSize, contrastInfo.computedFontWeight);
        const bgColorText = contrastInfo.backgroundColors[0];
        const bgColor = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(bgColorText)?.asLegacyColor();
        if (bgColor) {
            this.setBgColorInternal(bgColor);
        }
    }
    isNull() {
        return this.isNullInternal;
    }
    setColor(fgColor, colorFormat) {
        this.fgColor = fgColor;
        this.colorFormatInternal = colorFormat;
        this.updateContrastRatio();
        this.dispatchEventToListeners("ContrastInfoUpdated" /* Events.ContrastInfoUpdated */);
    }
    colorFormat() {
        return this.colorFormatInternal;
    }
    color() {
        return this.fgColor;
    }
    contrastRatio() {
        return this.contrastRatioInternal;
    }
    contrastRatioAPCA() {
        return this.contrastRatioAPCAInternal;
    }
    contrastRatioAPCAThreshold() {
        return this.contrastRationAPCAThreshold;
    }
    setBgColor(bgColor) {
        this.setBgColorInternal(bgColor);
        this.dispatchEventToListeners("ContrastInfoUpdated" /* Events.ContrastInfoUpdated */);
    }
    setBgColorInternal(bgColor) {
        this.bgColorInternal = bgColor;
        if (!this.fgColor) {
            return;
        }
        const fgRGBA = this.fgColor.rgba();
        // If we have a semi-transparent background color over an unknown
        // background, draw the line for the "worst case" scenario: where
        // the unknown background is the same color as the text.
        if (bgColor.hasAlpha()) {
            const blendedRGBA = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.blendColors(bgColor.rgba(), fgRGBA);
            this.bgColorInternal = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Legacy(blendedRGBA, "rgba" /* Common.Color.Format.RGBA */);
        }
        this.contrastRatioInternal = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.contrastRatio(fgRGBA, this.bgColorInternal.rgba());
        this.contrastRatioAPCAInternal =
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.contrastRatioAPCA(this.fgColor.rgba(), this.bgColorInternal.rgba());
    }
    bgColor() {
        return this.bgColorInternal;
    }
    updateContrastRatio() {
        if (!this.bgColorInternal || !this.fgColor) {
            return;
        }
        this.contrastRatioInternal = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.contrastRatio(this.fgColor.rgba(), this.bgColorInternal.rgba());
        this.contrastRatioAPCAInternal =
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.contrastRatioAPCA(this.fgColor.rgba(), this.bgColorInternal.rgba());
    }
    contrastRatioThreshold(level) {
        if (!this.contrastRatioThresholds) {
            return null;
        }
        return this.contrastRatioThresholds[level];
    }
}
//# sourceMappingURL=ContrastInfo.js.map

/***/ }),

/***/ "./ui/legacy/components/color_picker/color_picker.js":
/*!***********************************************************!*\
  !*** ./ui/legacy/components/color_picker/color_picker.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColorFormatSpec: () => (/* reexport module object */ _ColorFormatSpec_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   ContrastDetails: () => (/* reexport module object */ _ContrastDetails_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   ContrastInfo: () => (/* reexport module object */ _ContrastInfo_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   ContrastOverlay: () => (/* reexport module object */ _ContrastOverlay_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   FormatPickerContextMenu: () => (/* reexport module object */ _FormatPickerContextMenu_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   Spectrum: () => (/* reexport module object */ _Spectrum_js__WEBPACK_IMPORTED_MODULE_5__)
/* harmony export */ });
/* harmony import */ var _ColorFormatSpec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColorFormatSpec.js */ "./ui/legacy/components/color_picker/ColorFormatSpec.js");
/* harmony import */ var _ContrastDetails_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContrastDetails.js */ "./ui/legacy/components/color_picker/ContrastDetails.js");
/* harmony import */ var _ContrastInfo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContrastInfo.js */ "./ui/legacy/components/color_picker/ContrastInfo.js");
/* harmony import */ var _ContrastOverlay_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContrastOverlay.js */ "./ui/legacy/components/color_picker/ContrastOverlay.js");
/* harmony import */ var _FormatPickerContextMenu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormatPickerContextMenu.js */ "./ui/legacy/components/color_picker/FormatPickerContextMenu.js");
/* harmony import */ var _Spectrum_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Spectrum.js */ "./ui/legacy/components/color_picker/Spectrum.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







//# sourceMappingURL=color_picker.js.map

/***/ }),

/***/ "./ui/legacy/components/inline_editor/ColorSwatch.js":
/*!***********************************************************!*\
  !*** ./ui/legacy/components/inline_editor/ColorSwatch.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClickEvent: () => (/* binding */ ClickEvent),
/* harmony export */   ColorChangedEvent: () => (/* binding */ ColorChangedEvent),
/* harmony export */   ColorSwatch: () => (/* binding */ ColorSwatch)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _legacy_components_color_picker_color_picker_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../legacy/components/color_picker/color_picker.js */ "./ui/legacy/components/color_picker/color_picker.js");
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _colorSwatch_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./colorSwatch.css.js */ "./ui/legacy/components/inline_editor/colorSwatch.css.js");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






const UIStrings = {
    /**
     *@description Icon element title in Color Swatch of the inline editor in the Styles tab
     */
    shiftclickToChangeColorFormat: 'Shift-click to change color format',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('ui/legacy/components/inline_editor/ColorSwatch.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class ColorChangedEvent extends Event {
    static eventName = 'colorchanged';
    data;
    constructor(color) {
        super(ColorChangedEvent.eventName, {});
        this.data = { color };
    }
}
class ClickEvent extends Event {
    static eventName = 'swatchclick';
    constructor() {
        super(ClickEvent.eventName, {});
    }
}
class ColorSwatch extends HTMLElement {
    static litTagName = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal `devtools-color-swatch`;
    shadow = this.attachShadow({ mode: 'open' });
    tooltip = i18nString(UIStrings.shiftclickToChangeColorFormat);
    color = null;
    readonly = false;
    constructor(tooltip) {
        super();
        this.shadow.adoptedStyleSheets = [
            _colorSwatch_css_js__WEBPACK_IMPORTED_MODULE_5__["default"],
        ];
        if (tooltip) {
            this.tooltip = tooltip;
        }
    }
    static isColorSwatch(element) {
        return element.localName === 'devtools-color-swatch';
    }
    getReadonly() {
        return this.readonly;
    }
    setReadonly(readonly) {
        if (this.readonly === readonly) {
            return;
        }
        this.readonly = readonly;
        if (this.color) {
            this.renderColor(this.color);
        }
    }
    getColor() {
        return this.color;
    }
    get anchorBox() {
        const swatch = this.shadow.querySelector('.color-swatch');
        return swatch ? swatch.boxInWindow() : null;
    }
    getText() {
        return this.color?.getAuthoredText() ?? this.color?.asString();
    }
    /**
     * Render this swatch given a color object or text to be parsed as a color.
     * @param color The color object or string to use for this swatch.
     */
    renderColor(color) {
        this.color = color;
        const colorSwatchClasses = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.Directives.classMap({
            'color-swatch': true,
            'readonly': this.readonly,
        });
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        // Note that we use a <slot> with a default value here to display the color text. Consumers of this component are
        // free to append any content to replace what is being shown here.
        // Note also that whitespace between nodes is removed on purpose to avoid pushing these elements apart. Do not
        // re-format the HTML code.
        _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `<span class=${colorSwatchClasses} title=${this.tooltip}><span class="color-swatch-inner"
        style="background-color: ${this.getText()};"
        jslog=${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.showStyleEditor('color').track({ click: true })}
        @click=${this.onClick}
        @mousedown=${this.consume}
        @dblclick=${this.consume}></span></span><slot><span>${this.getText()}</span></slot>`, this.shadow, { host: this });
        // clang-format on
    }
    onClick(e) {
        if (this.readonly) {
            return;
        }
        if (e.shiftKey) {
            e.stopPropagation();
            this.showFormatPicker(e);
            return;
        }
        this.dispatchEvent(new ClickEvent());
    }
    consume(e) {
        e.stopPropagation();
    }
    setColor(color) {
        this.renderColor(color);
        this.dispatchEvent(new ColorChangedEvent(color));
    }
    setColorText(color) {
        this.firstElementChild?.remove();
        this.renderColor(color);
        const span = this.appendChild(document.createElement('span'));
        span.appendChild(document.createTextNode(color.getAuthoredText() ?? color.asString()));
        this.dispatchEvent(new ColorChangedEvent(color));
    }
    showFormatPicker(e) {
        if (!this.color) {
            return;
        }
        const contextMenu = new _legacy_components_color_picker_color_picker_js__WEBPACK_IMPORTED_MODULE_2__.FormatPickerContextMenu.FormatPickerContextMenu(this.color);
        void contextMenu.show(e, color => {
            this.setColorText(color);
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.colorConvertedFrom(0 /* Host.UserMetrics.ColorConvertedFrom.ColorSwatch */);
        });
    }
}
customElements.define('devtools-color-swatch', ColorSwatch);
//# sourceMappingURL=ColorSwatch.js.map

/***/ }),

/***/ "./ui/legacy/components/inline_editor/colorSwatch.css.js":
/*!***************************************************************!*\
  !*** ./ui/legacy/components/inline_editor/colorSwatch.css.js ***!
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
 * Copyright (c) 2015 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  white-space: nowrap;
}

.color-swatch {
  position: relative;
  margin-left: 1px;
  margin-right: 2px;
  width: 12px;
  height: 12px;
  transform: scale(0.8);
  vertical-align: -2px;
  display: inline-block;
  user-select: none;
  background-image: var(--image-file-checker);
  line-height: 10px;
}

.color-swatch-inner {
  width: 100%;
  height: 100%;
  display: inline-block;
  border: 1px solid var(--sys-color-neutral-outline);
  box-sizing: border-box;
  cursor: pointer;
}

.color-swatch.readonly .color-swatch-inner {
  cursor: unset;
}

.color-swatch:not(.readonly) .color-swatch-inner:hover {
  border: 1px solid var(--sys-color-outline);
}

@media (forced-colors: active) {
  .color-swatch {
    forced-color-adjust: none;
  }
}

/*# sourceURL=colorSwatch.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);