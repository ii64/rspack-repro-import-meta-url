"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_legacy_components_color_picker_ColorFormatSpec_ts"],{

/***/ "./src/ui/legacy/components/color_picker/ColorFormatSpec.ts":
/*!******************************************************************!*\
  !*** ./src/ui/legacy/components/color_picker/ColorFormatSpec.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   colorFormatSpec: () => (/* binding */ colorFormatSpec)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/platform/platform.js */ "./src/core/platform/platform.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


const roundAndStringify = (arr) => arr.map(el => _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.stringifyWithPrecision(el, 2));
const functionParamsText = (values) => {
    return `${values[0]} ${values[1]} ${values[2]} / ${values[3]}`;
};
const colorFormatSpec = {
    [_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.RGB]: {
        label: 'RGBA',
        toValues: function (color) {
            return roundAndStringify(color.as(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.RGBA).canonicalRGBA());
        },
        fromValues: function (values) {
            return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(`rgb(${functionParamsText(values)})`);
        },
    },
    [_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.HSL]: {
        label: 'HSLA',
        toValues: function (color) {
            const canonicalHslParams = roundAndStringify(color.as(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.HSLA).canonicalHSLA());
            canonicalHslParams[1] = canonicalHslParams[1] + '%';
            canonicalHslParams[2] = canonicalHslParams[2] + '%';
            return canonicalHslParams;
        },
        fromValues: function (values) {
            return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(`hsl(${functionParamsText(values)})`);
        },
    },
    [_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.HWB]: {
        label: 'HWBA',
        toValues: function (color) {
            const canonicalHwbParams = roundAndStringify(color.as(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.HWBA).canonicalHWBA());
            canonicalHwbParams[1] = canonicalHwbParams[1] + '%';
            canonicalHwbParams[2] = canonicalHwbParams[2] + '%';
            return canonicalHwbParams;
        },
        fromValues: function (values) {
            return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(`hwb(${functionParamsText(values)})`);
        },
    },
    [_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.LCH]: {
        label: 'lchA',
        toValues: function (color) {
            const lchColor = color.as(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.LCH);
            return roundAndStringify([lchColor.l, lchColor.c, lchColor.h, lchColor.alpha ?? 1]);
        },
        fromValues: function (values) {
            return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(`lch(${functionParamsText(values)})`);
        },
    },
    [_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.OKLCH]: {
        label: 'lchA',
        toValues: function (color) {
            const lchColor = color.as(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.OKLCH);
            return roundAndStringify([lchColor.l, lchColor.c, lchColor.h, lchColor.alpha ?? 1]);
        },
        fromValues: function (values) {
            return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(`oklch(${functionParamsText(values)})`);
        },
    },
    [_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.LAB]: {
        label: 'labA',
        toValues: function (color) {
            const labColor = color.as(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.LAB);
            return roundAndStringify([labColor.l, labColor.a, labColor.b, labColor.alpha ?? 1]);
        },
        fromValues: function (values) {
            return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(`lab(${functionParamsText(values)})`);
        },
    },
    [_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.OKLAB]: {
        label: 'labA',
        toValues: function (color) {
            const labColor = color.as(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.OKLAB);
            return roundAndStringify([labColor.l, labColor.a, labColor.b, labColor.alpha ?? 1]);
        },
        fromValues: function (values) {
            return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(`oklab(${functionParamsText(values)})`);
        },
    },
    [_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.SRGB]: {
        label: 'RGBA',
        toValues: function (color) {
            const srgbColor = color.as(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.SRGB);
            return roundAndStringify([srgbColor.p0, srgbColor.p1, srgbColor.p2, srgbColor.alpha ?? 1]);
        },
        fromValues: function (values) {
            return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(`color(${_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.SRGB} ${functionParamsText(values)})`);
        },
    },
    [_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.SRGB_LINEAR]: {
        label: 'RGBA',
        toValues: function (color) {
            const srgbLinearColor = color.as(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.SRGB_LINEAR);
            return roundAndStringify([srgbLinearColor.p0, srgbLinearColor.p1, srgbLinearColor.p2, srgbLinearColor.alpha ?? 1]);
        },
        fromValues: function (values) {
            return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(`color(${_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.SRGB_LINEAR} ${functionParamsText(values)})`);
        },
    },
    [_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.DISPLAY_P3]: {
        label: 'RGBA',
        toValues(color) {
            const displayP3Color = color.as(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.DISPLAY_P3);
            return roundAndStringify([displayP3Color.p0, displayP3Color.p1, displayP3Color.p2, 1]);
        },
        fromValues(values) {
            return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(`color(${_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.DISPLAY_P3} ${functionParamsText(values)})`);
        },
    },
    [_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.A98_RGB]: {
        label: 'RGBA',
        toValues: function (color) {
            const a98Color = color.as(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.A98_RGB);
            return roundAndStringify([a98Color.p0, a98Color.p1, a98Color.p2, a98Color.alpha ?? 1]);
        },
        fromValues: function (values) {
            return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(`color(${_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.A98_RGB} ${functionParamsText(values)})`);
        },
    },
    [_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.PROPHOTO_RGB]: {
        label: 'RGBA',
        toValues: function (color) {
            const proPhotoRGBColor = color.as(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.PROPHOTO_RGB);
            return roundAndStringify([proPhotoRGBColor.p0, proPhotoRGBColor.p1, proPhotoRGBColor.p2, proPhotoRGBColor.alpha ?? 1]);
        },
        fromValues: function (values) {
            return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(`color(${_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.PROPHOTO_RGB} ${functionParamsText(values)})`);
        },
    },
    [_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.REC_2020]: {
        label: 'RGBA',
        toValues: function (color) {
            const rec2020Color = color.as(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.REC_2020);
            return roundAndStringify([rec2020Color.p0, rec2020Color.p1, rec2020Color.p2, rec2020Color.alpha ?? 1]);
        },
        fromValues: function (values) {
            return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(`color(${_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.REC_2020} ${functionParamsText(values)})`);
        },
    },
    [_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.XYZ]: {
        label: 'xyzA',
        toValues: function (color) {
            const xyzColor = color.as(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.XYZ);
            return roundAndStringify([xyzColor.p0, xyzColor.p1, xyzColor.p2, xyzColor.alpha ?? 1]);
        },
        fromValues: function (values) {
            return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(`color(${_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.XYZ} ${functionParamsText(values)})`);
        },
    },
    [_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.XYZ_D50]: {
        label: 'xyzA',
        toValues: function (color) {
            const xyzColor = color.as(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.XYZ_D50);
            return roundAndStringify([xyzColor.p0, xyzColor.p1, xyzColor.p2, xyzColor.alpha ?? 1]);
        },
        fromValues: function (values) {
            return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(`color(${_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.XYZ_D50} ${functionParamsText(values)})`);
        },
    },
    [_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.XYZ_D65]: {
        label: 'xyzA',
        toValues: function (color) {
            const xyzColor = color.as(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.XYZ_D65);
            return roundAndStringify([xyzColor.p0, xyzColor.p1, xyzColor.p2, xyzColor.alpha ?? 1]);
        },
        fromValues: function (values) {
            return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(`color(${_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.XYZ_D65} ${functionParamsText(values)})`);
        },
    },
};


/***/ })

}]);