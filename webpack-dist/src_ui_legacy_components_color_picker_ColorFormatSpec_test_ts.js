"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_legacy_components_color_picker_ColorFormatSpec_test_ts"],{

/***/ "./src/ui/legacy/components/color_picker/ColorFormatSpec.test.ts":
/*!***********************************************************************!*\
  !*** ./src/ui/legacy/components/color_picker/ColorFormatSpec.test.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _color_picker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color_picker.js */ "./src/ui/legacy/components/color_picker/color_picker.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


describe('ColorFormatSpec for inputs', () => {
    describe('rgb/rgba() format', () => {
        it('should return rounded numbers between 0 - 255 as input values and rounded alpha', () => {
            const color = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('rgb(224.21 255 157 / 0.324)');
            assert.exists(color);
            const spec = _color_picker_js__WEBPACK_IMPORTED_MODULE_1__.ColorFormatSpec.colorFormatSpec[_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.RGB];
            const values = spec.toValues(color);
            assert.deepEqual(values, ['224', '255', '157', '0.32']);
        });
        it('should create the color from the input values', () => {
            const spec = _color_picker_js__WEBPACK_IMPORTED_MODULE_1__.ColorFormatSpec.colorFormatSpec[_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.RGB];
            const color = spec.fromValues(['224', '211', '155', '1']);
            assert.exists(color);
            const expectedColor = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('rgb(224 211 155 / 1)');
            assert.exists(expectedColor);
            assert.isTrue(color.equal(expectedColor));
        });
    });
    describe('hsl/hsla() format', () => {
        it('should return rounded numbers with percentages', () => {
            const color = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('hsl(225deg 6% 13% / 0.324)');
            assert.exists(color);
            const spec = _color_picker_js__WEBPACK_IMPORTED_MODULE_1__.ColorFormatSpec.colorFormatSpec[_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.HSL];
            const values = spec.toValues(color);
            assert.deepEqual(values, ['225', '6%', '13%', '0.32']);
        });
        it('should create the color from the input values', () => {
            const spec = _color_picker_js__WEBPACK_IMPORTED_MODULE_1__.ColorFormatSpec.colorFormatSpec[_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.HSL];
            const color = spec.fromValues(['225', '6%', '13%', '0.32']);
            assert.exists(color);
            const expectedColor = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('hsl(225deg 6% 13% / 0.32)');
            assert.exists(expectedColor);
            assert.isTrue(color.equal(expectedColor));
        });
    });
    describe('hwb() format', () => {
        it('should return rounded numbers with percentages', () => {
            const color = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('hwb(225deg 13% 86% / 0.32)');
            assert.exists(color);
            const spec = _color_picker_js__WEBPACK_IMPORTED_MODULE_1__.ColorFormatSpec.colorFormatSpec[_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.HWB];
            const values = spec.toValues(color);
            assert.deepEqual(values, ['225', '13%', '86%', '0.32']);
        });
        it('should create the color from the input values', () => {
            const spec = _color_picker_js__WEBPACK_IMPORTED_MODULE_1__.ColorFormatSpec.colorFormatSpec[_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.HWB];
            const color = spec.fromValues(['225', '13%', '86%', '0.32']);
            assert.exists(color);
            const expectedColor = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('hwb(225deg 13% 86% / 0.32)');
            assert.exists(expectedColor);
            assert.isTrue(color.equal(expectedColor));
        });
    });
    describe('lch() format', () => {
        it('should return values', () => {
            const color = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('lch(21 98 0)');
            assert.exists(color);
            const spec = _color_picker_js__WEBPACK_IMPORTED_MODULE_1__.ColorFormatSpec.colorFormatSpec[_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.LCH];
            const values = spec.toValues(color);
            assert.deepEqual(values, ['21', '98', '0', '1']);
        });
        it('should create the color from the input values', () => {
            const spec = _color_picker_js__WEBPACK_IMPORTED_MODULE_1__.ColorFormatSpec.colorFormatSpec[_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.LCH];
            const color = spec.fromValues(['55', '98', '0', '0.32']);
            assert.exists(color);
            const expectedColor = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('lch(55% 98 0 / 0.32)');
            assert.exists(expectedColor);
            assert.isTrue(color.equal(expectedColor));
        });
    });
    describe('oklch() format', () => {
        it('should return values', () => {
            const color = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('oklch(65% 0.26 20deg)');
            assert.exists(color);
            const spec = _color_picker_js__WEBPACK_IMPORTED_MODULE_1__.ColorFormatSpec.colorFormatSpec[_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.OKLCH];
            const values = spec.toValues(color);
            assert.deepEqual(values, ['0.65', '0.26', '20', '1']);
        });
        it('should create the color from the input values', () => {
            const spec = _color_picker_js__WEBPACK_IMPORTED_MODULE_1__.ColorFormatSpec.colorFormatSpec[_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.OKLCH];
            const color = spec.fromValues(['0.65', '0.26', '20', '1']);
            assert.exists(color);
            const expectedColor = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('oklch(65% 0.26 20 / 1)');
            assert.exists(expectedColor);
            assert.isTrue(color.equal(expectedColor));
        });
    });
    describe('lab() format', () => {
        it('should return values', () => {
            const color = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('lab(21 98 0)');
            assert.exists(color);
            const spec = _color_picker_js__WEBPACK_IMPORTED_MODULE_1__.ColorFormatSpec.colorFormatSpec[_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.LAB];
            const values = spec.toValues(color);
            assert.deepEqual(values, ['21', '98', '0', '1']);
        });
        it('should create the color from the input values', () => {
            const spec = _color_picker_js__WEBPACK_IMPORTED_MODULE_1__.ColorFormatSpec.colorFormatSpec[_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.LAB];
            const color = spec.fromValues(['0.21', '98', '0', '1']);
            assert.exists(color);
            const expectedColor = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('lab(0.21 98 0 / 1)');
            assert.exists(expectedColor);
            assert.isTrue(color.equal(expectedColor));
        });
    });
    describe('oklab() format', () => {
        it('should return values', () => {
            const color = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('oklab(0.12 0.47 -0.03)');
            assert.exists(color);
            const spec = _color_picker_js__WEBPACK_IMPORTED_MODULE_1__.ColorFormatSpec.colorFormatSpec[_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.OKLAB];
            const values = spec.toValues(color);
            assert.deepEqual(values, ['0.12', '0.47', '-0.03', '1']);
        });
        it('should create the color from the input values', () => {
            const spec = _color_picker_js__WEBPACK_IMPORTED_MODULE_1__.ColorFormatSpec.colorFormatSpec[_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.OKLAB];
            const color = spec.fromValues(['0.12', '0.47', '-0.03', '1']);
            assert.exists(color);
            const expectedColor = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('oklab(0.12 0.47 -0.03 / 1)');
            assert.exists(expectedColor);
            assert.isTrue(color.equal(expectedColor));
        });
    });
    describe('color() function formats', () => {
        it('should return values', () => {
            for (const colorSpace of [_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.SRGB, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.SRGB_LINEAR, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.DISPLAY_P3,
                _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.A98_RGB, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.PROPHOTO_RGB, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.REC_2020]) {
                const color = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(`color(${colorSpace} 0.12 0.47 -0.03)`);
                assert.exists(color);
                const spec = _color_picker_js__WEBPACK_IMPORTED_MODULE_1__.ColorFormatSpec.colorFormatSpec[colorSpace];
                const values = spec.toValues(color);
                assert.deepEqual(values, ['0.12', '0.47', '0', '1'], colorSpace);
            }
            for (const colorSpace of [_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.XYZ, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.XYZ_D50, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.XYZ_D65]) {
                const color = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(`color(${colorSpace} 0.12 0.47 -0.03)`);
                assert.exists(color);
                const spec = _color_picker_js__WEBPACK_IMPORTED_MODULE_1__.ColorFormatSpec.colorFormatSpec[colorSpace];
                const values = spec.toValues(color);
                assert.deepEqual(values, ['0.12', '0.47', '-0.03', '1'], colorSpace);
            }
        });
        it('should create the color from the input values', () => {
            for (const colorSpace of [_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.SRGB, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.SRGB_LINEAR, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.DISPLAY_P3,
                _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.A98_RGB, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.PROPHOTO_RGB, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.REC_2020,
                _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.XYZ, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.XYZ_D50, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.XYZ_D65]) {
                const spec = _color_picker_js__WEBPACK_IMPORTED_MODULE_1__.ColorFormatSpec.colorFormatSpec[colorSpace];
                const color = spec.fromValues(['0.12', '0.47', '0.1', '1']);
                assert.exists(color);
                const expectedColor = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(`color(${colorSpace} 0.12 0.47 0.1 / 1)`);
                assert.exists(expectedColor);
                assert.isTrue(color.equal(expectedColor), `Colors were not equal for color format ${colorSpace}`);
            }
        });
    });
});


/***/ }),

/***/ "./src/ui/legacy/components/color_picker/color_picker.ts":
/*!***************************************************************!*\
  !*** ./src/ui/legacy/components/color_picker/color_picker.ts ***!
  \***************************************************************/
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
/* harmony import */ var _ColorFormatSpec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColorFormatSpec.js */ "./src/ui/legacy/components/color_picker/ColorFormatSpec.ts");
/* harmony import */ var _ContrastDetails_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContrastDetails.js */ "./src/ui/legacy/components/color_picker/ContrastDetails.ts");
/* harmony import */ var _ContrastInfo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContrastInfo.js */ "./src/ui/legacy/components/color_picker/ContrastInfo.ts");
/* harmony import */ var _ContrastOverlay_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContrastOverlay.js */ "./src/ui/legacy/components/color_picker/ContrastOverlay.ts");
/* harmony import */ var _FormatPickerContextMenu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormatPickerContextMenu.js */ "./src/ui/legacy/components/color_picker/FormatPickerContextMenu.ts");
/* harmony import */ var _Spectrum_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Spectrum.js */ "./src/ui/legacy/components/color_picker/Spectrum.ts");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.









/***/ })

}]);