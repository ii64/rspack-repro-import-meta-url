"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_common_ColorUtils_test_js"], {
"./core/common/ColorUtils.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./core/common/common.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

describe('ColorUtils', function() {
    it('is able to blend two colors according to alpha blending', function() {
        var firstColor = [
            1,
            0,
            0,
            1
        ];
        var secondColor = [
            0,
            0,
            1,
            1
        ];
        var result = _common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.blendColors(firstColor, secondColor);
        assert.deepEqual(result, [
            1,
            0,
            0,
            1
        ], 'colors were not blended successfully');
    });
    it('is able to convert RGBA to HSLA', function() {
        var result = _common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.rgbaToHsla([
            0.5,
            0.5,
            0.5,
            0.5
        ]);
        assert.deepEqual(result, [
            0,
            0,
            0.5,
            0.5
        ], 'RGBA color was not converted to HSLA successfully');
    });
    it('is able to convert RGBA to HWB', function() {
        var result = _common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.rgbaToHwba([
            0.5,
            0.5,
            0.5,
            0.5
        ]);
        assert.deepEqual(result, [
            0,
            0.5,
            0.5,
            0.5
        ], 'RGBA color was not converted to HWB successfully');
    });
    it('is able to return the luminance of an RGBA value with the RGB values more than 0.04045', function() {
        var lum = _common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.luminance([
            0.5,
            0.5,
            0.5,
            0.5
        ]);
        assert.strictEqual(lum, 0.21404114048223255, 'luminance was not calculated correctly');
    });
    it('is able to return the luminance of an RGBA value with the RGB values less than 0.04045', function() {
        var lum = _common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.luminance([
            0.03927,
            0.03927,
            0.03927,
            0.5
        ]);
        assert.strictEqual(lum, 0.003039473684210526, 'luminance was not calculated correctly');
    });
    it('is able to calculate the contrast ratio between two colors', function() {
        var firstColor = [
            1,
            0,
            0,
            1
        ];
        var secondColor = [
            0,
            0,
            1,
            1
        ];
        assert.strictEqual(_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.contrastRatio(firstColor, secondColor), 2.148936170212766, 'contrast ratio was not calculated correctly');
    });
    it('is able to calculate the contrast ratio (APCA) between two colors', function() {
        var tests = [
            {
                fgColor: 'red',
                bgColor: 'blue',
                expectedContrast: -20.3
            },
            {
                fgColor: '#333333',
                bgColor: '#444444',
                expectedContrast: 0.0
            },
            {
                fgColor: '#888',
                bgColor: '#FFF',
                expectedContrast: 63.1
            },
            {
                fgColor: '#aaa',
                bgColor: '#000',
                expectedContrast: -56.2
            },
            {
                fgColor: '#def',
                bgColor: '#123',
                expectedContrast: -93.1
            },
            {
                fgColor: '#123',
                bgColor: '#234',
                expectedContrast: 0.0
            },
            {
                fgColor: 'rgb(158 158 158)',
                bgColor: 'white',
                expectedContrast: 52.1
            },
            {
                fgColor: 'rgba(0 0 0 / 38%)',
                bgColor: 'white',
                expectedContrast: 52.1
            }
        ];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = tests[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var test = _step.value;
                var _Common_Color_parse, _Common_Color_parse1;
                var fg = (_Common_Color_parse = _common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(test.fgColor)) === null || _Common_Color_parse === void 0 ? void 0 : _Common_Color_parse.asLegacyColor();
                var bg = (_Common_Color_parse1 = _common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(test.bgColor)) === null || _Common_Color_parse1 === void 0 ? void 0 : _Common_Color_parse1.asLegacyColor();
                if (!fg || !bg) {
                    assert.fail("Failed to parse foreground and/or background color: ".concat(test.fgColor, ", ").concat(test.bgColor));
                    return;
                }
                assert.closeTo(_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.contrastRatioAPCA(fg.rgba(), bg.rgba()), test.expectedContrast, 0.1);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    });
    it('is able to find APCA threshold by font size and weight', function() {
        assert.deepEqual(_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.getAPCAThreshold('11px', '100'), null);
        assert.deepEqual(_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.getAPCAThreshold('121px', '100'), 60);
        assert.deepEqual(_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.getAPCAThreshold('16px', '100'), null);
        assert.deepEqual(_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.getAPCAThreshold('16px', '400'), 90);
        assert.deepEqual(_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.getAPCAThreshold('16px', '900'), 50);
    });
    it('is able to find AA/AAA thresholds', function() {
        assert.deepEqual(_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.getContrastThreshold('11px', '100'), {
            aa: 4.5,
            aaa: 7
        });
        assert.deepEqual(_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.getContrastThreshold('121px', '100'), {
            aa: 3,
            aaa: 4.5
        });
        assert.deepEqual(_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.getContrastThreshold('16px', '100'), {
            aa: 4.5,
            aaa: 7
        });
        assert.deepEqual(_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.getContrastThreshold('16px', '400'), {
            aa: 4.5,
            aaa: 7
        });
        assert.deepEqual(_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.getContrastThreshold('16px', '900'), {
            aa: 4.5,
            aaa: 7
        });
    });
}); //# sourceMappingURL=ColorUtils.test.js.map


}),

}]);