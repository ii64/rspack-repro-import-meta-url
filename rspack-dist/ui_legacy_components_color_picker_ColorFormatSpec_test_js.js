"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_components_color_picker_ColorFormatSpec_test_js"], {
"./ui/legacy/components/color_picker/ColorFormatSpec.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _color_picker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color_picker.js */ "./ui/legacy/components/color_picker/color_picker.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


describe('ColorFormatSpec for inputs', function() {
    describe('rgb/rgba() format', function() {
        it('should return rounded numbers between 0 - 255 as input values and rounded alpha', function() {
            var color = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('rgb(224.21 255 157 / 0.324)');
            assert.exists(color);
            var spec = _color_picker_js__WEBPACK_IMPORTED_MODULE_1__.ColorFormatSpec.colorFormatSpec.rgb;
            var values = spec.toValues(color);
            assert.deepEqual(values, [
                '224',
                '255',
                '157',
                '0.32'
            ]);
        });
        it('should create the color from the input values', function() {
            var spec = _color_picker_js__WEBPACK_IMPORTED_MODULE_1__.ColorFormatSpec.colorFormatSpec.rgb;
            var color = spec.fromValues([
                '224',
                '211',
                '155',
                '1'
            ]);
            assert.exists(color);
            var expectedColor = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('rgb(224 211 155 / 1)');
            assert.exists(expectedColor);
            assert.isTrue(color.equal(expectedColor));
        });
    });
    describe('hsl/hsla() format', function() {
        it('should return rounded numbers with percentages', function() {
            var color = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('hsl(225deg 6% 13% / 0.324)');
            assert.exists(color);
            var spec = _color_picker_js__WEBPACK_IMPORTED_MODULE_1__.ColorFormatSpec.colorFormatSpec.hsl;
            var values = spec.toValues(color);
            assert.deepEqual(values, [
                '225',
                '6%',
                '13%',
                '0.32'
            ]);
        });
        it('should create the color from the input values', function() {
            var spec = _color_picker_js__WEBPACK_IMPORTED_MODULE_1__.ColorFormatSpec.colorFormatSpec.hsl;
            var color = spec.fromValues([
                '225',
                '6%',
                '13%',
                '0.32'
            ]);
            assert.exists(color);
            var expectedColor = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('hsl(225deg 6% 13% / 0.32)');
            assert.exists(expectedColor);
            assert.isTrue(color.equal(expectedColor));
        });
    });
    describe('hwb() format', function() {
        it('should return rounded numbers with percentages', function() {
            var color = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('hwb(225deg 13% 86% / 0.32)');
            assert.exists(color);
            var spec = _color_picker_js__WEBPACK_IMPORTED_MODULE_1__.ColorFormatSpec.colorFormatSpec.hwb;
            var values = spec.toValues(color);
            assert.deepEqual(values, [
                '225',
                '13%',
                '86%',
                '0.32'
            ]);
        });
        it('should create the color from the input values', function() {
            var spec = _color_picker_js__WEBPACK_IMPORTED_MODULE_1__.ColorFormatSpec.colorFormatSpec.hwb;
            var color = spec.fromValues([
                '225',
                '13%',
                '86%',
                '0.32'
            ]);
            assert.exists(color);
            var expectedColor = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('hwb(225deg 13% 86% / 0.32)');
            assert.exists(expectedColor);
            assert.isTrue(color.equal(expectedColor));
        });
    });
    describe('lch() format', function() {
        it('should return values', function() {
            var color = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('lch(21 98 0)');
            assert.exists(color);
            var spec = _color_picker_js__WEBPACK_IMPORTED_MODULE_1__.ColorFormatSpec.colorFormatSpec.lch;
            var values = spec.toValues(color);
            assert.deepEqual(values, [
                '21',
                '98',
                '0',
                '1'
            ]);
        });
        it('should create the color from the input values', function() {
            var spec = _color_picker_js__WEBPACK_IMPORTED_MODULE_1__.ColorFormatSpec.colorFormatSpec.lch;
            var color = spec.fromValues([
                '55',
                '98',
                '0',
                '0.32'
            ]);
            assert.exists(color);
            var expectedColor = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('lch(55% 98 0 / 0.32)');
            assert.exists(expectedColor);
            assert.isTrue(color.equal(expectedColor));
        });
    });
    describe('oklch() format', function() {
        it('should return values', function() {
            var color = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('oklch(65% 0.26 20deg)');
            assert.exists(color);
            var spec = _color_picker_js__WEBPACK_IMPORTED_MODULE_1__.ColorFormatSpec.colorFormatSpec.oklch;
            var values = spec.toValues(color);
            assert.deepEqual(values, [
                '0.65',
                '0.26',
                '20',
                '1'
            ]);
        });
        it('should create the color from the input values', function() {
            var spec = _color_picker_js__WEBPACK_IMPORTED_MODULE_1__.ColorFormatSpec.colorFormatSpec.oklch;
            var color = spec.fromValues([
                '0.65',
                '0.26',
                '20',
                '1'
            ]);
            assert.exists(color);
            var expectedColor = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('oklch(65% 0.26 20 / 1)');
            assert.exists(expectedColor);
            assert.isTrue(color.equal(expectedColor));
        });
    });
    describe('lab() format', function() {
        it('should return values', function() {
            var color = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('lab(21 98 0)');
            assert.exists(color);
            var spec = _color_picker_js__WEBPACK_IMPORTED_MODULE_1__.ColorFormatSpec.colorFormatSpec.lab;
            var values = spec.toValues(color);
            assert.deepEqual(values, [
                '21',
                '98',
                '0',
                '1'
            ]);
        });
        it('should create the color from the input values', function() {
            var spec = _color_picker_js__WEBPACK_IMPORTED_MODULE_1__.ColorFormatSpec.colorFormatSpec.lab;
            var color = spec.fromValues([
                '0.21',
                '98',
                '0',
                '1'
            ]);
            assert.exists(color);
            var expectedColor = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('lab(0.21 98 0 / 1)');
            assert.exists(expectedColor);
            assert.isTrue(color.equal(expectedColor));
        });
    });
    describe('oklab() format', function() {
        it('should return values', function() {
            var color = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('oklab(0.12 0.47 -0.03)');
            assert.exists(color);
            var spec = _color_picker_js__WEBPACK_IMPORTED_MODULE_1__.ColorFormatSpec.colorFormatSpec.oklab;
            var values = spec.toValues(color);
            assert.deepEqual(values, [
                '0.12',
                '0.47',
                '-0.03',
                '1'
            ]);
        });
        it('should create the color from the input values', function() {
            var spec = _color_picker_js__WEBPACK_IMPORTED_MODULE_1__.ColorFormatSpec.colorFormatSpec.oklab;
            var color = spec.fromValues([
                '0.12',
                '0.47',
                '-0.03',
                '1'
            ]);
            assert.exists(color);
            var expectedColor = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('oklab(0.12 0.47 -0.03 / 1)');
            assert.exists(expectedColor);
            assert.isTrue(color.equal(expectedColor));
        });
    });
    describe('color() function formats', function() {
        it('should return values', function() {
            for(var _i = 0, _iter = [
                "srgb" /* Common.Color.Format.SRGB */ ,
                "srgb-linear" /* Common.Color.Format.SRGB_LINEAR */ ,
                "display-p3" /* Common.Color.Format.DISPLAY_P3 */ ,
                "a98-rgb" /* Common.Color.Format.A98_RGB */ ,
                "prophoto-rgb" /* Common.Color.Format.PROPHOTO_RGB */ ,
                "rec2020" /* Common.Color.Format.REC_2020 */ 
            ]; _i < _iter.length; _i++){
                var colorSpace = _iter[_i];
                var color = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse("color(".concat(colorSpace, " 0.12 0.47 -0.03)"));
                assert.exists(color);
                var spec = _color_picker_js__WEBPACK_IMPORTED_MODULE_1__.ColorFormatSpec.colorFormatSpec[colorSpace];
                var values = spec.toValues(color);
                assert.deepEqual(values, [
                    '0.12',
                    '0.47',
                    '0',
                    '1'
                ], colorSpace);
            }
            for(var _i1 = 0, _iter1 = [
                "xyz" /* Common.Color.Format.XYZ */ ,
                "xyz-d50" /* Common.Color.Format.XYZ_D50 */ ,
                "xyz-d65" /* Common.Color.Format.XYZ_D65 */ 
            ]; _i1 < _iter1.length; _i1++){
                var colorSpace1 = _iter1[_i1];
                var color1 = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse("color(".concat(colorSpace1, " 0.12 0.47 -0.03)"));
                assert.exists(color1);
                var spec1 = _color_picker_js__WEBPACK_IMPORTED_MODULE_1__.ColorFormatSpec.colorFormatSpec[colorSpace1];
                var values1 = spec1.toValues(color1);
                assert.deepEqual(values1, [
                    '0.12',
                    '0.47',
                    '-0.03',
                    '1'
                ], colorSpace1);
            }
        });
        it('should create the color from the input values', function() {
            for(var _i = 0, _iter = [
                "srgb" /* Common.Color.Format.SRGB */ ,
                "srgb-linear" /* Common.Color.Format.SRGB_LINEAR */ ,
                "display-p3" /* Common.Color.Format.DISPLAY_P3 */ ,
                "a98-rgb" /* Common.Color.Format.A98_RGB */ ,
                "prophoto-rgb" /* Common.Color.Format.PROPHOTO_RGB */ ,
                "rec2020" /* Common.Color.Format.REC_2020 */ ,
                "xyz" /* Common.Color.Format.XYZ */ ,
                "xyz-d50" /* Common.Color.Format.XYZ_D50 */ ,
                "xyz-d65" /* Common.Color.Format.XYZ_D65 */ 
            ]; _i < _iter.length; _i++){
                var colorSpace = _iter[_i];
                var spec = _color_picker_js__WEBPACK_IMPORTED_MODULE_1__.ColorFormatSpec.colorFormatSpec[colorSpace];
                var color = spec.fromValues([
                    '0.12',
                    '0.47',
                    '0.1',
                    '1'
                ]);
                assert.exists(color);
                var expectedColor = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse("color(".concat(colorSpace, " 0.12 0.47 0.1 / 1)"));
                assert.exists(expectedColor);
                assert.isTrue(color.equal(expectedColor), "Colors were not equal for color format ".concat(colorSpace));
            }
        });
    });
}); //# sourceMappingURL=ColorFormatSpec.test.js.map


}),

}]);