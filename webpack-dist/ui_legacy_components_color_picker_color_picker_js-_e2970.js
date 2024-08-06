"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_legacy_components_color_picker_color_picker_js-_e2970"],{

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

/***/ })

}]);