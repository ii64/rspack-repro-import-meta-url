"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_common_Color_test_js"], {
"./core/common/Color.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./core/common/common.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}

var Color = _common_js__WEBPACK_IMPORTED_MODULE_0__.Color;
var parseAndAssertNotNull = function(value) {
    var result = Color.parse(value);
    assert.isNotNull(result, "failed to parse '".concat(value, " as color"));
    return result.asLegacyColor();
};
var deepCloseTo = function(actual, expected, delta, message) {
    for(var i = 0; i <= 3; ++i){
        assert.closeTo(actual[i], expected[i], delta, "in component ".concat(i).concat(message ? ": ".concat(message) : ''));
    }
};
var tolerance = 0.0001;
var colorSpaceConversionTolerance = 0.001;
describe('Color', function() {
    it('can be instantiated without issues', function() {
        var color = new Color.Legacy([
            0.5,
            0.5,
            0.5,
            0.5
        ], "rgba" /* Color.Format.RGBA */ , 'testColor');
        assert.deepEqual(color.rgba(), [
            0.5,
            0.5,
            0.5,
            0.5
        ], 'RGBA array was not set correctly');
        assert.strictEqual(color.getAuthoredText(), 'testColor', 'original text was not set correctly');
        assert.strictEqual(color.asString(), 'rgb(128 128 128 / 50%)');
        assert.strictEqual(color.format(), "rgba" /* Color.Format.RGBA */ , 'format was not set correctly');
    });
    it('defaults RGBA value to 0 if the RGBA initializing value given was negative', function() {
        var color = new Color.Legacy([
            -0.5,
            0.5,
            0.5,
            0.5
        ], "rgba" /* Color.Format.RGBA */ , 'testColor');
        assert.deepEqual(color.rgba(), [
            0,
            0.5,
            0.5,
            0.5
        ], 'RGBA array was not set correctly');
        assert.strictEqual(color.asString(), 'rgb(0 128 128 / 50%)', 'original text was not ignored as expected');
        assert.strictEqual(color.format(), "rgba" /* Color.Format.RGBA */ , 'format was not set correctly');
    });
    it('defaults RGBA value to 1 if the RGBA initializing value given was above one', function() {
        var color = new Color.Legacy([
            1.1,
            0.5,
            0.5,
            0.5
        ], "rgba" /* Color.Format.RGBA */ , 'testColor');
        assert.deepEqual(color.rgba(), [
            1,
            0.5,
            0.5,
            0.5
        ], 'RGBA array was not set correctly');
        assert.strictEqual(color.asString(), 'rgb(255 128 128 / 50%)', 'original text was not ignored as expected');
        assert.strictEqual(color.format(), "rgba" /* Color.Format.RGBA */ , 'format was not set correctly');
    });
    it('is able to create a color class from an HSVA value', function() {
        var color = Color.Legacy.fromHSVA([
            0.5,
            0.5,
            0.5,
            100
        ]);
        assert.deepEqual(color.rgba(), [
            0.25,
            0.49999999999999994,
            0.5,
            1
        ], 'RGBA array was not set correctly');
    });
    it('is able to return the HSVA value of a color', function() {
        var color = new Color.Legacy([
            0.5,
            0.5,
            0.5,
            0.5
        ], "rgba" /* Color.Format.RGBA */ , 'testColor');
        var hsva = color.as("hsl" /* Common.Color.Format.HSL */ ).hsva();
        assert.deepEqual(hsva, [
            0,
            0,
            0.5,
            0.5
        ], 'HSVA was not calculated correctly');
    });
    it('is able to return a lighter luminance according to a given contrast value', function() {
        var result = Color.desiredLuminance(0.2, 2, true);
        assert.strictEqual(result, 0.45, 'luminance was not calculated correctly');
    });
    it('is able to return a darker luminance according to a given contrast value', function() {
        var result = Color.desiredLuminance(0.2, 2, false);
        assert.strictEqual(result, 0.075, 'luminance was not calculated correctly');
    });
    it('is able to return a darker luminance if the lighter one falls out of the inclusive range [0, 1]', function() {
        var result = Color.desiredLuminance(0.2, 5, true);
        assert.strictEqual(result, 0, 'luminance was not calculated correctly');
    });
    it('is able to return canonical HSLA for a color', function() {
        var color = new Color.Legacy([
            0.5,
            0.5,
            0.5,
            0.5
        ], "rgba" /* Color.Format.RGBA */ , 'testColor');
        var result = color.as("hsl" /* Common.Color.Format.HSL */ ).canonicalHSLA();
        assert.deepEqual(result, [
            0,
            0,
            50,
            0.5
        ], 'canonical HSLA was not calculated correctly');
    });
    it('is able to return canonical HWBA for a color', function() {
        var color = new Color.Legacy([
            0.5,
            0.5,
            0.5,
            0.5
        ], "rgba" /* Color.Format.RGBA */ , 'testColorGray');
        var result = color.as("hwb" /* Color.Format.HWB */ ).canonicalHWBA();
        deepCloseTo(result, [
            0,
            50,
            50,
            0.5
        ], tolerance, 'canonical HWBA was not calculated correctly');
    });
    it('parses hex values', function() {
        assert.deepEqual(parseAndAssertNotNull('#FF00FF').rgba(), [
            1,
            0,
            1,
            1
        ]);
        assert.deepEqual(parseAndAssertNotNull('#F0F').rgba(), [
            1,
            0,
            1,
            1
        ]);
        assert.deepEqual(parseAndAssertNotNull('#F0F0').rgba(), [
            1,
            0,
            1,
            0
        ]);
        assert.deepEqual(parseAndAssertNotNull('#FF00FF00').rgba(), [
            1,
            0,
            1,
            0
        ]);
    });
    it('does not parse hex values with whitespace', function() {
        assert.isNull(Color.parse('#FF00FF 00'));
    });
    it('parses nickname values', function() {
        assert.deepEqual(parseAndAssertNotNull('red').rgba(), [
            1,
            0,
            0,
            1
        ]);
    });
    it('does not parse nickname values with whitespace', function() {
        assert.isNull(Color.parse('blue red'));
    });
    it('parses rgb(a) values', function() {
        var colorOne = parseAndAssertNotNull('rgb(255, 255, 0)');
        assert.deepEqual(colorOne.rgba(), [
            1,
            1,
            0,
            1
        ]);
        var colorTwo = parseAndAssertNotNull('rgba(0, 255, 255, 0.5)');
        assert.deepEqual(colorTwo.rgba(), [
            0,
            1,
            1,
            0.5
        ]);
        var colorThree = parseAndAssertNotNull('rgb(255 255 255)');
        assert.deepEqual(colorThree.rgba(), [
            1,
            1,
            1,
            1
        ]);
        var colorFour = parseAndAssertNotNull('rgb(10% 10% 10%)');
        assert.deepEqual(colorFour.rgba(), [
            0.1,
            0.1,
            0.1,
            1
        ]);
        var colorFive = parseAndAssertNotNull('rgb(10% 10% 10% / 0.4)');
        assert.deepEqual(colorFive.rgba(), [
            0.1,
            0.1,
            0.1,
            0.4
        ]);
        var colorSix = parseAndAssertNotNull('rgb(10% 10% 10% / 40%)');
        assert.deepEqual(colorSix.rgba(), [
            0.1,
            0.1,
            0.1,
            0.4
        ]);
    });
    it('parses hsl(a) values', function() {
        var colorOne = parseAndAssertNotNull('hsl(0, 100%, 50%)');
        assert.deepEqual(colorOne.rgba(), [
            1,
            0,
            0,
            1
        ]);
        var colorTwo = parseAndAssertNotNull('hsla(0, 100%, 50%, 0.5)');
        assert.deepEqual(colorTwo.rgba(), [
            1,
            0,
            0,
            0.5
        ]);
        var colorThree = parseAndAssertNotNull('hsla(50deg 100% 100% / 50%)');
        assert.deepEqual(colorThree.rgba(), [
            1,
            1,
            1,
            0.5
        ]);
        var colorFour = parseAndAssertNotNull('hsl(0 100% 50% / 0.5)');
        assert.deepEqual(colorFour.rgba(), [
            1,
            0,
            0,
            0.5
        ]);
        var colorFive = parseAndAssertNotNull('hsl(0 100% 50% / 50%)');
        assert.deepEqual(colorFive.rgba(), [
            1,
            0,
            0,
            0.5
        ]);
        var colorSix = parseAndAssertNotNull('hsl(0deg 100% 50% / 50%)');
        assert.deepEqual(colorSix.rgba(), [
            1,
            0,
            0,
            0.5
        ]);
    });
    it('parses hwb values', function() {
        var colorOne = parseAndAssertNotNull('hwb(300 0% 0%)');
        deepCloseTo(colorOne.rgba(), [
            1,
            0,
            1,
            1
        ], tolerance);
        var colorTwo = parseAndAssertNotNull('hwb(0 0% 0% / 0.5)');
        deepCloseTo(colorTwo.rgba(), [
            1,
            0,
            0,
            0.5
        ], tolerance);
        var colorThree = parseAndAssertNotNull('hwb(60deg 0% 0% / 50%)');
        deepCloseTo(colorThree.rgba(), [
            1,
            1,
            0,
            0.5
        ], tolerance);
        var colorFour = parseAndAssertNotNull('hwb(0deg 100% 0% / 0.2)');
        deepCloseTo(colorFour.rgba(), [
            1,
            1,
            1,
            0.2
        ], tolerance);
        var colorFive = parseAndAssertNotNull('hwb(180deg 0% 0%)');
        deepCloseTo(colorFive.rgba(), [
            0,
            1,
            1,
            1
        ], tolerance);
        var colorSix = parseAndAssertNotNull('hwb(240deg 0% 0% / 90%)');
        deepCloseTo(colorSix.rgba(), [
            0,
            0,
            1,
            0.9
        ], tolerance);
    });
    it('parses lch values', function() {
        // White in sRGB
        var colorOne = parseAndAssertNotNull('lch(99 0.09 312)');
        deepCloseTo(colorOne.rgba(), [
            0.989,
            0.989,
            0.989,
            1
        ], colorSpaceConversionTolerance);
        // Parses out of sRGB gamut values too
        var colorTwo = parseAndAssertNotNull('lch(99 112 312)');
        deepCloseTo(colorTwo.rgba(), [
            1,
            0.762,
            1,
            1
        ], colorSpaceConversionTolerance);
        // Parses none values too
        var colorThree = parseAndAssertNotNull('lch(99 112 none)');
        deepCloseTo(colorThree.rgba(), [
            1,
            0.484,
            1,
            1
        ], colorSpaceConversionTolerance);
        // Parses syntax from Color Syntax mega list https://cdpn.io/pen/debug/RwyOyeq
        var colorCases = [
            [
                'lch(58% 32 241deg)',
                [
                    0.2830,
                    0.5834,
                    0.7366,
                    1
                ]
            ],
            [
                'lch(58 32 241deg)',
                [
                    0.2830,
                    0.5834,
                    0.7366,
                    1
                ]
            ],
            [
                'lch(58 32 241)',
                [
                    0.2830,
                    0.5834,
                    0.7366,
                    1
                ]
            ],
            [
                'lch(58% 32 241 / 50%)',
                [
                    0.2830,
                    0.5834,
                    0.7366,
                    0.5
                ]
            ],
            [
                'lch(58% 32 241 / .5)',
                [
                    0.2830,
                    0.5834,
                    0.7366,
                    0.5
                ]
            ],
            [
                'lch(100% 0 0)',
                [
                    0.9999,
                    1.0001,
                    1.0000,
                    1
                ]
            ],
            [
                'lch(100 0 0)',
                [
                    0.9999,
                    1.0001,
                    1.0000,
                    1
                ]
            ],
            [
                'lch(100 none none)',
                [
                    0.9999,
                    1.0001,
                    1.0000,
                    1
                ]
            ],
            [
                'lch(0% 0 0)',
                [
                    0,
                    0,
                    0,
                    1
                ]
            ],
            [
                'lch(0 0 0)',
                [
                    0,
                    0,
                    0,
                    1
                ]
            ],
            [
                'lch(none none none)',
                [
                    0,
                    0,
                    0,
                    1
                ]
            ]
        ];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = colorCases[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = _sliced_to_array(_step.value, 2), syntax = _step_value[0], expectedRgba = _step_value[1];
                var color = parseAndAssertNotNull(syntax);
                deepCloseTo(color.rgba(), expectedRgba, colorSpaceConversionTolerance, 'LCH parsing from syntax list is not correct');
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
    // TODO(ergunsh): Add tests for `oklch` after clearing situation
    it('parses lab values', function() {
        // White in sRGB
        var colorOne = parseAndAssertNotNull('lab(99 0 0)');
        deepCloseTo(colorOne.rgba(), [
            0.989,
            0.989,
            0.989,
            1
        ], colorSpaceConversionTolerance);
        // Parses out of sRGB gamut values too
        var colorTwo = parseAndAssertNotNull('lab(99 58 64)');
        deepCloseTo(colorTwo.rgba(), [
            1,
            0.794,
            0.508,
            1
        ], colorSpaceConversionTolerance);
        // Parses none values too
        var colorThree = parseAndAssertNotNull('lch(99 none none)');
        deepCloseTo(colorThree.rgba(), [
            0.989,
            0.989,
            0.989,
            1
        ], colorSpaceConversionTolerance);
        // Parses syntax from Color Syntax mega list https://cdpn.io/pen/debug/RwyOyeq
        var colorCases = [
            [
                'lab(58% -16 -30)',
                [
                    0.2585,
                    0.5848,
                    0.7505,
                    1
                ]
            ],
            [
                'lab(58 -16 -30)',
                [
                    0.2585,
                    0.5848,
                    0.7505,
                    1
                ]
            ],
            [
                'lab(58% -16 -30 / 50%)',
                [
                    0.2585,
                    0.5848,
                    0.7505,
                    0.5
                ]
            ],
            [
                'lab(58% -16 -30 / .5)',
                [
                    0.2585,
                    0.5848,
                    0.7505,
                    0.5
                ]
            ],
            [
                'lab(100% 0 0)',
                [
                    1,
                    1,
                    1,
                    1
                ]
            ],
            [
                'lab(100 0 0)',
                [
                    1,
                    1,
                    1,
                    1
                ]
            ],
            [
                'lab(100 none none)',
                [
                    1,
                    1,
                    1,
                    1
                ]
            ],
            [
                'lab(0% 0 0)',
                [
                    0,
                    0,
                    0,
                    1
                ]
            ],
            [
                'lab(0 0 0)',
                [
                    0,
                    0,
                    0,
                    1
                ]
            ],
            [
                'lab(none none none)',
                [
                    0,
                    0,
                    0,
                    1
                ]
            ]
        ];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = colorCases[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = _sliced_to_array(_step.value, 2), syntax = _step_value[0], expectedRgba = _step_value[1];
                var color = parseAndAssertNotNull(syntax);
                deepCloseTo(color.rgba(), expectedRgba, colorSpaceConversionTolerance, 'lab() parsing from syntax list is not correct');
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
    // TODO(ergunsh): Add tests for `oklab` after clearing situation
    it('parses color() values', function() {
        // White in sRGB
        var colorOne = parseAndAssertNotNull('color(srgb 100% 100% 100% / 50%)');
        deepCloseTo(colorOne.rgba(), [
            1,
            1,
            1,
            0.5
        ], colorSpaceConversionTolerance);
        var colorTwo = parseAndAssertNotNull('color(srgb 100% 100% 100%/50%)');
        deepCloseTo(colorTwo.rgba(), [
            1,
            1,
            1,
            0.5
        ], colorSpaceConversionTolerance);
        var colorThree = parseAndAssertNotNull('color(srgb 100% 100% 100%/ 50%)');
        deepCloseTo(colorThree.rgba(), [
            1,
            1,
            1,
            0.5
        ], colorSpaceConversionTolerance);
        var colorFour = parseAndAssertNotNull('color(srgb 100% 100% 100% /50%)');
        deepCloseTo(colorFour.rgba(), [
            1,
            1,
            1,
            0.5
        ], colorSpaceConversionTolerance);
        // Does not parse invalid syntax
        var invalidSyntaxes = [
            // Not known color space
            'color(not-known-color-space)',
            // Contains comma
            'color(srgb, 100%)',
            // Alpha is not at the end
            'color(srgb / 50% 100%)'
        ];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = invalidSyntaxes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var invalidSyntax = _step.value;
                assert.isNull(Color.parse(invalidSyntax));
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
        // All defined color spaces are parsed
        // srgb | srgb-linear | display-p3 | a98-rgb | prophoto-rgb | rec2020 | xyz | xyz-d50 | xyz-d65
        var colorSpaceCases = [
            'color(srgb)',
            'color(srgb-linear)',
            'color(display-p3)',
            'color(a98-rgb)',
            'color(prophoto-rgb)',
            'color(rec2020)',
            'color(xyz-d50)',
            'color(xyz-d65)'
        ];
        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
        try {
            for(var _iterator1 = colorSpaceCases[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                var colorSpaceCase = _step1.value;
                var color = Color.parse(colorSpaceCase);
                assert.isNotNull(color);
            }
        } catch (err) {
            _didIteratorError1 = true;
            _iteratorError1 = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                    _iterator1.return();
                }
            } finally{
                if (_didIteratorError1) {
                    throw _iteratorError1;
                }
            }
        }
        // Parses correctly from syntax list
        var colorCases = [
            [
                'color(display-p3 34% 58% 73%)',
                [
                    0.246,
                    0.587,
                    0.745,
                    1
                ]
            ],
            [
                'color(display-p3 1 0.71 0.73)',
                [
                    1,
                    0.695,
                    0.725,
                    1
                ]
            ],
            [
                'color(display-p3 34% / 50%)',
                [
                    0.3748,
                    0,
                    0,
                    0.5
                ]
            ],
            [
                'color(rec2020 34% 58% 73%)',
                [
                    0,
                    0.641,
                    0.774,
                    1
                ]
            ],
            [
                'color(rec2020 .34 .58 .73 / .5)',
                [
                    0,
                    0.641,
                    0.774,
                    0.5
                ]
            ],
            [
                'color(a98-rgb 34% 58% 73% / 50%)',
                [
                    0.1,
                    0.585,
                    0.741,
                    0.5
                ]
            ],
            [
                'color(a98-rgb none none none)',
                [
                    0,
                    0,
                    0,
                    1
                ]
            ],
            [
                'color(a98-rgb 0)',
                [
                    0,
                    0,
                    0,
                    1
                ]
            ],
            [
                'color(xyz-d50 .22 .26 .53)',
                [
                    0.0929,
                    0.584,
                    0.855,
                    1
                ]
            ],
            [
                'color(xyz 100% 100% 100%)',
                [
                    1,
                    0.977,
                    0.959,
                    1
                ]
            ],
            [
                'color(xyz-d65 100% 100% 100%)',
                [
                    1,
                    0.977,
                    0.959,
                    1
                ]
            ]
        ];
        var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
        try {
            for(var _iterator2 = colorCases[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                var _step_value = _sliced_to_array(_step2.value, 2), syntax = _step_value[0], expectedRgba = _step_value[1];
                var color1 = parseAndAssertNotNull(syntax);
                deepCloseTo(color1.rgba(), expectedRgba, colorSpaceConversionTolerance, "color() parsing from syntax list is not correct for ".concat(syntax));
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                    _iterator2.return();
                }
            } finally{
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }
    });
    it('handles invalid values', function() {
        assert.isNull(Color.parse('#FAFAFA       Trailing'));
        assert.isNull(Color.parse('#FAFAFG'));
        assert.isNull(Color.parse('gooseberry'));
        assert.isNull(Color.parse('rgb(10% 10% 10% /)'));
        assert.isNull(Color.parse('rgb(10% 10% 10% 0.4 40)'));
        assert.isNull(Color.parse('hsl(0, carrot, 30%)'));
        assert.isNull(Color.parse('hsl(0)'));
        assert.isNull(Color.parse('hwb(0)'));
        // Unlike HSL, HWB does not allow comma-separated input
        assert.isNull(Color.parse('hwb(0%, 50%, 50%)'));
        assert.isNull(Color.parse('rgb(255)'));
        assert.isNull(Color.parse('rgba(1 golf 30)'));
    });
    it('is able to return whether or not the color has an alpha value', function() {
        var color = new Color.Legacy([
            0.5,
            0.5,
            0.5,
            0.5
        ], "rgba" /* Color.Format.RGBA */ , 'testColor');
        assert.isTrue(color.hasAlpha(), 'the color should be considered to have an alpha value');
    });
    it('is able to detect the HEX format of a color with an alpha value', function() {
        var color = new Color.Legacy([
            0.5,
            0.5,
            0.5,
            0.5
        ], "rgba" /* Color.Format.RGBA */ , 'testColor');
        var result = color.detectHEXFormat();
        assert.strictEqual(result, 'hexa', 'format was not detected correctly');
    });
    it('is able to detect the HEX format of a color without an alpha value', function() {
        var color = new Color.Legacy([
            0.5,
            0.5,
            0.5,
            1
        ], "rgba" /* Color.Format.RGBA */ , 'testColor');
        var result = color.detectHEXFormat();
        assert.strictEqual(result, 'hex', 'format was not detected correctly');
    });
    it('is able to return the canonical RGBA of a color', function() {
        var color = new Color.Legacy([
            0.5,
            0.5,
            0.5,
            0.5
        ], "rgba" /* Color.Format.RGBA */ , 'testColor');
        var result = color.canonicalRGBA();
        assert.deepEqual(result, [
            128,
            128,
            128,
            0.5
        ], 'canonical RGBA was not returned correctly');
    });
    it('is able to return the nickname of a color', function() {
        var color = new Color.Legacy([
            1,
            0,
            0,
            1
        ], "rgba" /* Color.Format.RGBA */ , 'testColor');
        var result = color.nickname();
        assert.strictEqual(result === null || result === void 0 ? void 0 : result.asString(), 'red', 'nickname was not returned correctly');
    });
    it('returns null as a nickname if the color was not recognized', function() {
        var color = new Color.Legacy([
            0.5,
            0.5,
            0.5,
            0.5
        ], "rgba" /* Color.Format.RGBA */ , 'testColor');
        var result = color.nickname();
        assert.isNull(result, 'nickname should be returned as Null');
    });
    it('is able to convert the color to a protocol RGBA', function() {
        var color = new Color.Legacy([
            0.5,
            0.5,
            0.5,
            0.5
        ], "rgba" /* Color.Format.RGBA */ , 'testColor');
        var result = color.toProtocolRGBA();
        assert.deepEqual(result, {
            r: 128,
            g: 128,
            b: 128,
            a: 0.5
        }, 'conversion to protocol RGBA was not correct');
    });
    it('is able to invert a color', function() {
        var color = new Color.Legacy([
            1,
            0,
            0,
            1
        ], "rgba" /* Color.Format.RGBA */ , 'testColor');
        var result = color.invert().rgba();
        assert.deepEqual(result, [
            0,
            1,
            1,
            1
        ], 'inversion was not successful');
    });
    it('is able to set the alpha value of a color', function() {
        var color = new Color.Legacy([
            1,
            0,
            0,
            1
        ], "rgba" /* Color.Format.RGBA */ , 'testColor');
        var result = color.setAlpha(0.5).rgba();
        assert.deepEqual(result, [
            1,
            0,
            0,
            0.5
        ], 'alpha value was not set correctly');
    });
    it('can blend with another color', function() {
        var color = new Color.Legacy([
            1,
            0,
            0,
            0.5
        ], "rgba" /* Color.Format.RGBA */ , 'testColor');
        var otherColor = new Color.Legacy([
            0,
            0,
            1,
            0.5
        ], "rgba" /* Color.Format.RGBA */ , 'testColor');
        var result = color.blendWith(otherColor).rgba();
        assert.deepEqual(result, [
            0.5,
            0,
            0.5,
            0.75
        ], 'color was not blended correctly');
    });
    it('returns the HEX value when turned into a string if its format was "hex"', function() {
        var color = new Color.Legacy([
            1,
            0,
            0,
            1
        ], "hex" /* Color.Format.HEX */ );
        var result = color.asString();
        assert.strictEqual(result, '#ff0000', 'color was not converted to a string correctly');
    });
    it('returns the short HEX value when turned into a string if the input was a short hex value', function() {
        var color = Color.Legacy.fromHex('F00', '');
        var result = color.asString();
        assert.strictEqual(result, '#f00', 'color was not converted to a string correctly');
    });
    it('returns the short HEX value when turned into a string after conversion to shorthex', function() {
        var _color_shortHex;
        var color = new Color.Legacy([
            1,
            0,
            0,
            1
        ], "hex" /* Color.Format.HEX */ );
        var result = (_color_shortHex = color.shortHex()) === null || _color_shortHex === void 0 ? void 0 : _color_shortHex.asString();
        assert.strictEqual(result, '#f00', 'color was not converted to a string correctly');
    });
    it('returns the HEXA value when turned into a string if its format was "hexa"', function() {
        var color = new Color.Legacy([
            1,
            0,
            0,
            .5
        ], "hexa" /* Color.Format.HEXA */ );
        var result = color.asString();
        assert.strictEqual(result, '#ff000080', 'color was not converted to a string correctly');
    });
    it('returns the short HEXA value when turned into a string if the input was a short hexa value', function() {
        var color = Color.Legacy.fromHex('F00C', '');
        var result = color.asString();
        assert.strictEqual(result, '#f00c', 'color was not converted to a string correctly');
    });
    it('returns the short HEXA value when turned into a string after conversion to shorthex', function() {
        var _color_shortHex;
        var color = new Color.Legacy([
            1,
            0,
            0,
            1
        ], "hexa" /* Color.Format.HEXA */ );
        var result = (_color_shortHex = color.shortHex()) === null || _color_shortHex === void 0 ? void 0 : _color_shortHex.asString();
        assert.strictEqual(result, '#f00', 'color was not converted to a string correctly');
    });
    it('returns the RGB value when turned into a string if its format was "rgb"', function() {
        var color = new Color.Legacy([
            1,
            0,
            0,
            1
        ], "rgb" /* Color.Format.RGB */ );
        var result = color.asString();
        assert.strictEqual(result, 'rgb(255 0 0)', 'color was not converted to a string correctly');
    });
    it('returns the RGBA value when turned into a string if its format was "rgba"', function() {
        var color = new Color.Legacy([
            1,
            0,
            0,
            0.42
        ], "rgba" /* Color.Format.RGBA */ );
        var result = color.asString();
        assert.strictEqual(result, 'rgb(255 0 0 / 42%)', 'color was not converted to a string correctly');
    });
    it('omits the alpha value when it’s 100% if its format was "rgba"', function() {
        var color = new Color.Legacy([
            1,
            0,
            0,
            1
        ], "rgba" /* Color.Format.RGBA */ );
        var result = color.asString();
        assert.strictEqual(result, 'rgb(255 0 0)', 'color was not converted to a string correctly');
    });
    it('returns the HSL value when turned into a string if its format was "hsl"', function() {
        var color = new Color.Legacy([
            1,
            0,
            0,
            1
        ], "rgb" /* Color.Format.RGB */ );
        var result = color.asString("hsl" /* Common.Color.Format.HSL */ );
        assert.strictEqual(result, 'hsl(0deg 100% 50%)', 'color was not converted to a string correctly');
    });
    it('returns the HSLA value when turned into a string if its format was "hsla"', function() {
        var color = new Color.Legacy([
            1,
            0,
            0,
            0.42
        ], "rgba" /* Color.Format.RGBA */ );
        var result = color.asString("hsl" /* Common.Color.Format.HSL */ );
        assert.strictEqual(result, 'hsl(0deg 100% 50% / 42%)', 'color was not converted to a string correctly');
    });
    it('omits the alpha value when it’s 100% if its format was "hsla"', function() {
        var color = new Color.Legacy([
            1,
            0,
            0,
            1
        ], "rgba" /* Color.Format.RGBA */ );
        var result = color.asString("hsla" /* Common.Color.Format.HSLA */ );
        assert.strictEqual(result, 'hsl(0deg 100% 50%)', 'color was not converted to a string correctly');
    });
    it('returns the HWB value when turned into a string if its format was "hwb"', function() {
        var color = new Color.Legacy([
            0,
            0,
            1,
            1
        ], "rgba" /* Color.Format.RGBA */ ).as("hwb" /* Color.Format.HWB */ );
        var result = color.asString();
        assert.strictEqual(result, 'hwb(240deg 0% 0%)', 'color was not converted to a string correctly');
    });
    it('returns the HWB value when turned into a string if its format was "hwba"', function() {
        var color = new Color.Legacy([
            0,
            0,
            0,
            0.42
        ], "rgba" /* Color.Format.RGBA */ ).as("hwba" /* Color.Format.HWBA */ );
        var result = color.asString();
        assert.strictEqual(result, 'hwb(0deg 0% 100% / 42%)', 'color was not converted to a string correctly');
    });
    it('omits the alpha value when it’s 100% if its format was "hwba"', function() {
        var color = new Color.Legacy([
            1,
            0,
            0,
            1
        ], "rgba" /* Color.Format.RGBA */ ).as("hwba" /* Color.Format.HWBA */ );
        var result = color.asString();
        assert.strictEqual(result, 'hwb(0deg 0% 0%)', 'color was not converted to a string correctly');
    });
    it('is able to change color format', function() {
        var color = new Color.Legacy([
            1,
            0,
            0,
            1
        ], "rgb" /* Color.Format.RGB */ );
        color.setFormat("hexa" /* Color.Format.HEXA */ );
        assert.strictEqual(color.asString(), '#ff0000', 'format was not set correctly');
    });
    it('suggests colors with good contrast', function() {
        var colors = [
            {
                bgColor: 'salmon',
                fgColor: 'white',
                contrast: 4.5,
                result: 'hsl(0deg 0% 22.96%)'
            },
            {
                bgColor: 'Lightblue',
                fgColor: 'white',
                contrast: 4.5,
                result: 'hsl(0deg 0% 35.34%)'
            },
            {
                bgColor: 'white',
                fgColor: 'hsl(0 53% 52% / 87%)',
                contrast: 7.0,
                result: 'hsl(0deg 48.92% 31.54% / 87%)'
            },
            {
                bgColor: 'white',
                fgColor: 'white',
                contrast: 7.0,
                result: 'hsl(0deg 0% 34.89%)'
            },
            {
                bgColor: 'black',
                fgColor: 'black',
                contrast: 7.05,
                result: 'hsl(0deg 0% 58.62%)'
            },
            {
                bgColor: 'white',
                fgColor: '#00FF00',
                contrast: 7.05,
                result: 'hsl(120deg 100% 20.37%)'
            },
            {
                bgColor: 'black',
                fgColor: '#b114ff',
                contrast: 7.05,
                result: 'hsl(280.09deg 100% 70.52%)'
            }
        ];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = colors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = _step.value, fgColor = _step_value.fgColor, bgColor = _step_value.bgColor, contrast = _step_value.contrast, result = _step_value.result;
                var fgParsed = parseAndAssertNotNull(fgColor);
                var bgParsed = parseAndAssertNotNull(bgColor);
                var suggestedColor = Color.findFgColorForContrast(fgParsed, bgParsed, contrast).as("hsl" /* Color.Format.HSL */ );
                assert.strictEqual(suggestedColor.asString(), result, "incorrect color suggestion for ".concat(fgColor, "/").concat(bgColor, " with contrast ").concat(contrast));
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
    it('find the fg color with good contrast according to APCA', function() {
        var tests = [
            {
                fgColor: 'white',
                bgColor: 'white',
                requiredContrast: 68
            },
            {
                fgColor: 'black',
                bgColor: 'black',
                requiredContrast: 68
            },
            {
                bgColor: 'lightblue',
                fgColor: 'white',
                requiredContrast: 66
            },
            {
                bgColor: 'white',
                fgColor: '#00FF00',
                requiredContrast: 66
            },
            {
                bgColor: 'black',
                fgColor: '#b114ff',
                requiredContrast: 66
            }
        ];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = tests[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var test = _step.value;
                var fg = parseAndAssertNotNull(test.fgColor);
                var bg = parseAndAssertNotNull(test.bgColor);
                var result = _common_js__WEBPACK_IMPORTED_MODULE_0__.Color.findFgColorForContrastAPCA(fg, bg, test.requiredContrast);
                var absContrast = Math.abs(_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.contrastRatioAPCA(result.rgba(), bg.rgba()));
                assert.isTrue(Math.round(absContrast) >= test.requiredContrast);
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
    it('does not find fg color for certain combinations acoording to APCA', function() {
        var tests = [
            {
                bgColor: 'salmon',
                fgColor: 'white',
                requiredContrast: 66
            },
            {
                fgColor: 'grey',
                bgColor: 'grey',
                requiredContrast: 68
            }
        ];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = tests[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var test = _step.value;
                var fg = parseAndAssertNotNull(test.fgColor);
                var bg = parseAndAssertNotNull(test.bgColor);
                var result = _common_js__WEBPACK_IMPORTED_MODULE_0__.Color.findFgColorForContrastAPCA(fg, bg, test.requiredContrast);
                assert.isNull(result);
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
    it('retains and returns the authored text', function() {
        var _obj;
        var lime = (_obj = {}, _define_property(_obj, "hex" /* Common.Color.Format.HEX */ , '#00ff00'), _define_property(_obj, "hexa" /* Common.Color.Format.HEXA */ , '#00ff00ff'), _define_property(_obj, "rgb" /* Common.Color.Format.RGB */ , 'rgb(0 255 0)'), _define_property(_obj, "rgba" /* Common.Color.Format.RGBA */ , 'rgba(0 255 0 / 100%)'), _define_property(_obj, "hsl" /* Common.Color.Format.HSL */ , 'hsl(120deg 100% 50%)'), _define_property(_obj, "hsla" /* Common.Color.Format.HSLA */ , 'hsl(120deg 100% 50% / 80%)'), _define_property(_obj, "hwb" /* Common.Color.Format.HWB */ , 'hwb(120deg 0% 0%)'), _define_property(_obj, "hwba" /* Common.Color.Format.HWBA */ , 'hwb(120deg 0% 0% / 80%)'), _define_property(_obj, "lch" /* Common.Color.Format.LCH */ , 'lch(87.82 113.32 134.38)'), _define_property(_obj, "oklch" /* Common.Color.Format.OKLCH */ , 'oklch(0.87 0.29 142.49)'), _define_property(_obj, "lab" /* Common.Color.Format.LAB */ , 'lab(87.82 -79.26 80.99)'), _define_property(_obj, "oklab" /* Common.Color.Format.OKLAB */ , 'oklab(0.87 -0.23 0.18)'), _define_property(_obj, "srgb" /* Common.Color.Format.SRGB */ , 'color(srgb 0 1 0)'), _define_property(_obj, "srgb-linear" /* Common.Color.Format.SRGB_LINEAR */ , 'color(srgb-linear 0 1 0)'), _define_property(_obj, "display-p3" /* Common.Color.Format.DISPLAY_P3 */ , 'color(display-p3 0.46 0.99 0.3)'), _define_property(_obj, "a98-rgb" /* Common.Color.Format.A98_RGB */ , 'color(a98-rgb 0.57 1 0.23)'), _define_property(_obj, "prophoto-rgb" /* Common.Color.Format.PROPHOTO_RGB */ , 'color(prophoto-rgb 0.54 0.93 0.3)'), _define_property(_obj, "rec2020" /* Common.Color.Format.REC_2020 */ , 'color(rec2020 0.57 0.96 0.27)'), _define_property(_obj, "xyz-d50" /* Common.Color.Format.XYZ_D50 */ , 'color(xyz-d50 0.39 0.72 0.1)'), _define_property(_obj, "xyz-d65" /* Common.Color.Format.XYZ_D65 */ , 'color(xyz-d65 0.36 0.72 0.12)'), _define_property(_obj, "xyz" /* Common.Color.Format.XYZ */ , 'color(xyz 0.36 0.72 0.12)'), _obj);
        for(var format in lime){
            var spec = lime[format];
            var color = _common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(spec);
            assert.deepEqual(color.getAuthoredText(), spec);
            assert.deepEqual(color.format(), format, spec);
        }
    });
    it('prints the correct color when stringified with format', function() {
        var LIME = [
            {
                format: "hex" /* Common.Color.Format.HEX */ ,
                spec: '#00ff00'
            },
            {
                format: "hexa" /* Common.Color.Format.HEXA */ ,
                spec: '#00ff00'
            },
            {
                format: "rgb" /* Common.Color.Format.RGB */ ,
                spec: 'rgb(0 255 0)'
            },
            {
                format: "rgba" /* Common.Color.Format.RGBA */ ,
                spec: 'rgb(0 255 0)'
            },
            {
                format: "hsl" /* Common.Color.Format.HSL */ ,
                spec: 'hsl(120deg 100% 50%)'
            },
            {
                format: "hsla" /* Common.Color.Format.HSLA */ ,
                spec: 'hsl(120deg 100% 50%)'
            },
            {
                format: "hwb" /* Common.Color.Format.HWB */ ,
                spec: 'hwb(120deg 0% 0%)'
            },
            {
                format: "hwba" /* Common.Color.Format.HWBA */ ,
                spec: 'hwb(120deg 0% 0%)'
            },
            {
                format: "lch" /* Common.Color.Format.LCH */ ,
                spec: 'lch(88 113.32 134.38)'
            },
            {
                format: "oklch" /* Common.Color.Format.OKLCH */ ,
                spec: 'oklch(0.87 0.29 142.49)'
            },
            {
                format: "lab" /* Common.Color.Format.LAB */ ,
                spec: 'lab(88 -79.26 80.99)'
            },
            {
                format: "oklab" /* Common.Color.Format.OKLAB */ ,
                spec: 'oklab(0.87 -0.23 0.18)'
            },
            {
                format: "srgb" /* Common.Color.Format.SRGB */ ,
                spec: 'color(srgb 0 1 0)'
            },
            {
                format: "srgb-linear" /* Common.Color.Format.SRGB_LINEAR */ ,
                spec: 'color(srgb-linear 0 1 0)'
            },
            {
                format: "display-p3" /* Common.Color.Format.DISPLAY_P3 */ ,
                spec: 'color(display-p3 0.46 0.99 0.3)'
            },
            {
                format: "a98-rgb" /* Common.Color.Format.A98_RGB */ ,
                spec: 'color(a98-rgb 0.57 1 0.23)'
            },
            {
                format: "prophoto-rgb" /* Common.Color.Format.PROPHOTO_RGB */ ,
                spec: 'color(prophoto-rgb 0.54 0.93 0.3)'
            },
            {
                format: "rec2020" /* Common.Color.Format.REC_2020 */ ,
                spec: 'color(rec2020 0.57 0.96 0.27)'
            },
            {
                format: "xyz-d50" /* Common.Color.Format.XYZ_D50 */ ,
                spec: 'color(xyz-d50 0.39 0.72 0.1)'
            },
            {
                format: "xyz-d65" /* Common.Color.Format.XYZ_D65 */ ,
                spec: 'color(xyz-d65 0.36 0.72 0.12)'
            },
            {
                format: "xyz" /* Common.Color.Format.XYZ */ ,
                spec: 'color(xyz 0.36 0.72 0.12)'
            }
        ];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = LIME[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = _step.value, format = _step_value.format, spec = _step_value.spec;
                var color = _common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('lime');
                assert.deepEqual(color.asString(format), spec);
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
    it('supports all to all and chain conversions', function() {
        var stub = function stub(fn, input, output) {
            var result = sinon.stub(_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorConverter.ColorConverter, fn);
            // TODO(crbug.com/1412307): Figure out why tsc 5.0 stopped infering the function signature correctly.
            // @ts-expect-error
            result.callsFake(function(a, b, c) {
                assert.deepEqual([
                    a,
                    b,
                    c
                ], [
                    input,
                    0,
                    0
                ], "Conversion function ".concat(fn, " called with the wrong arguments"));
                return [
                    output,
                    0,
                    0
                ];
            });
        };
        // This test checks that both all-to-all as well as chaining together conversions producesthe expected outcome. It's
        // not easily possible to do this with real color conversions because the converters aren't accurate enough to allow
        // for good comparison of the color values. This test therefore stubs out the color converters. Since we don't care
        // about real color values, the fake converter functions generate uniquly identifiable results by always returning
        // the color codes below in the first coordinate of the color (and zeros for the rest). This lets us also verify
        // that the sequence of converter functions is correct because the converters can check the input color is as
        // expected.
        stub('adobeRGBToXyzd50', 0.8 /* Code.A98_RGB */ , 0.92 /* Code.XYZ_D50 */ );
        stub('displayP3ToXyzd50', 0.7 /* Code.DISPLAY_P3 */ , 0.92 /* Code.XYZ_D50 */ );
        stub('labToLch', 0.4 /* Code.LAB */ , 0.2 /* Code.LCH */ );
        stub('labToXyzd50', 0.4 /* Code.LAB */ , 0.92 /* Code.XYZ_D50 */ );
        stub('lchToLab', 0.2 /* Code.LCH */ , 0.4 /* Code.LAB */ );
        stub('oklabToXyzd65', 0.5 /* Code.OKLAB */ , 0.1 /* Code.XYZ_D65 */ );
        stub('oklchToXyzd50', 0.3 /* Code.OKLCH */ , 0.92 /* Code.XYZ_D50 */ );
        stub('proPhotoToXyzd50', 0.9 /* Code.PROPHOTO_RGB */ , 0.92 /* Code.XYZ_D50 */ );
        stub('rec2020ToXyzd50', 0.91 /* Code.REC_2020 */ , 0.92 /* Code.XYZ_D50 */ );
        stub('srgbLinearToXyzd50', 0.6 /* Code.SRGB_LINEAR */ , 0.92 /* Code.XYZ_D50 */ );
        stub('srgbToXyzd50', 1 /* Code.SRGB */ , 0.92 /* Code.XYZ_D50 */ );
        stub('xyzd50ToAdobeRGB', 0.92 /* Code.XYZ_D50 */ , 0.8 /* Code.A98_RGB */ );
        stub('xyzd50ToD65', 0.92 /* Code.XYZ_D50 */ , 0.1 /* Code.XYZ_D65 */ );
        stub('xyzd50ToDisplayP3', 0.92 /* Code.XYZ_D50 */ , 0.7 /* Code.DISPLAY_P3 */ );
        stub('xyzd50ToLab', 0.92 /* Code.XYZ_D50 */ , 0.4 /* Code.LAB */ );
        stub('xyzd50ToOklch', 0.92 /* Code.XYZ_D50 */ , 0.3 /* Code.OKLCH */ );
        stub('xyzd50ToProPhoto', 0.92 /* Code.XYZ_D50 */ , 0.9 /* Code.PROPHOTO_RGB */ );
        stub('xyzd50ToRec2020', 0.92 /* Code.XYZ_D50 */ , 0.91 /* Code.REC_2020 */ );
        stub('xyzd50ToSrgb', 0.92 /* Code.XYZ_D50 */ , 1 /* Code.SRGB */ );
        stub('xyzd50TosRGBLinear', 0.92 /* Code.XYZ_D50 */ , 0.6 /* Code.SRGB_LINEAR */ );
        stub('xyzd65ToD50', 0.1 /* Code.XYZ_D65 */ , 0.92 /* Code.XYZ_D50 */ );
        stub('xyzd65ToOklab', 0.1 /* Code.XYZ_D65 */ , 0.5 /* Code.OKLAB */ );
        var colors = new Map();
        colors.set("hex" /* Common.Color.Format.HEX */ , _common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('#ff0000'));
        colors.set("hexa" /* Common.Color.Format.HEXA */ , _common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('#ff0000ff'));
        colors.set("rgb" /* Common.Color.Format.RGB */ , _common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('rgb(255 0 0)'));
        colors.set("rgba" /* Common.Color.Format.RGBA */ , _common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('rgb(255 0 0)'));
        colors.set("hsl" /* Common.Color.Format.HSL */ , _common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('hsl(0deg 100% 50%)'));
        colors.set("hsla" /* Common.Color.Format.HSLA */ , _common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('hsl(0deg 100% 50%)'));
        colors.set("hwb" /* Common.Color.Format.HWB */ , _common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('hwb(0deg 0% 0%)'));
        colors.set("hwba" /* Common.Color.Format.HWBA */ , _common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('hwb(0deg 0% 0%)'));
        colors.set("lch" /* Common.Color.Format.LCH */ , _common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse("lch(".concat(0.2 /* Code.LCH */ , " 0 0)")));
        colors.set("oklch" /* Common.Color.Format.OKLCH */ , _common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse("oklch(".concat(0.3 /* Code.OKLCH */ , " 0 0)")));
        colors.set("lab" /* Common.Color.Format.LAB */ , _common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse("lab(".concat(0.4 /* Code.LAB */ , " 0 0)")));
        colors.set("oklab" /* Common.Color.Format.OKLAB */ , _common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse("oklab(".concat(0.5 /* Code.OKLAB */ , " 0 0)")));
        colors.set("srgb" /* Common.Color.Format.SRGB */ , _common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse("color(srgb ".concat(1 /* Code.SRGB */ , " 0 0)")));
        colors.set("srgb-linear" /* Common.Color.Format.SRGB_LINEAR */ , _common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse("color(srgb-linear ".concat(0.6 /* Code.SRGB_LINEAR */ , " 0 0)")));
        colors.set("display-p3" /* Common.Color.Format.DISPLAY_P3 */ , _common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse("color(display-p3 ".concat(0.7 /* Code.DISPLAY_P3 */ , " 0 0)")));
        colors.set("a98-rgb" /* Common.Color.Format.A98_RGB */ , _common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse("color(a98-rgb ".concat(0.8 /* Code.A98_RGB */ , " 0 0)")));
        colors.set("prophoto-rgb" /* Common.Color.Format.PROPHOTO_RGB */ , _common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse("color(prophoto-rgb ".concat(0.9 /* Code.PROPHOTO_RGB */ , " 0 0)")));
        colors.set("rec2020" /* Common.Color.Format.REC_2020 */ , _common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse("color(rec2020 ".concat(0.91 /* Code.REC_2020 */ , " 0 0)")));
        colors.set("xyz-d50" /* Common.Color.Format.XYZ_D50 */ , _common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse("color(xyz-d50 ".concat(0.92 /* Code.XYZ_D50 */ , " 0 0)")));
        colors.set("xyz-d65" /* Common.Color.Format.XYZ_D65 */ , _common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse("color(xyz-d65 ".concat(0.1 /* Code.XYZ_D65 */ , " 0 0)")));
        colors.set("xyz" /* Common.Color.Format.XYZ */ , _common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse("color(xyz ".concat(0.1 /* Code.XYZ */ , " 0 0)")));
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            // Test all-to-all conversions.
            for(var _iterator = colors.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var from = _step.value;
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = colors.keys()[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var to = _step1.value;
                        var actual = colors.get(from);
                        var expected = colors.get(to);
                        assert.deepEqual(actual.as(to).asString(), expected.asString());
                    }
                } catch (err) {
                    _didIteratorError1 = true;
                    _iteratorError1 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                            _iterator1.return();
                        }
                    } finally{
                        if (_didIteratorError1) {
                            throw _iteratorError1;
                        }
                    }
                }
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
        var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
        try {
            // Test chaining conversions. For every color perform a chain of conversions through all colors in sequence and
            // verify the result.
            for(var _iterator2 = colors.keys()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                var start = _step2.value;
                var color = colors.get(start);
                var _iteratorNormalCompletion3 = true, _didIteratorError3 = false, _iteratorError3 = undefined;
                try {
                    for(var _iterator3 = colors.keys()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true){
                        var next = _step3.value;
                        var _colors_get;
                        color = color.as(next);
                        var expected1 = colors.get(next);
                        assert.deepEqual(color.asString(), expected1.asString(), "Original color ".concat((_colors_get = colors.get(start)) === null || _colors_get === void 0 ? void 0 : _colors_get.asString()));
                    }
                } catch (err) {
                    _didIteratorError3 = true;
                    _iteratorError3 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                            _iterator3.return();
                        }
                    } finally{
                        if (_didIteratorError3) {
                            throw _iteratorError3;
                        }
                    }
                }
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                    _iterator2.return();
                }
            } finally{
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }
    });
    it('correctly clips results on conversion', function() {
        var nonSRGBColor = Color.parse('lab(99 50 50)');
        assert.strictEqual(nonSRGBColor.asString("hex" /* Common.Color.Format.HEX */ ), '#ffd39e');
        assert.strictEqual(nonSRGBColor.asString("hexa" /* Common.Color.Format.HEXA */ ), '#ffd39e');
        assert.strictEqual(nonSRGBColor.asString("rgb" /* Common.Color.Format.RGB */ ), 'rgb(255 211 158)');
        assert.strictEqual(nonSRGBColor.asString("rgba" /* Common.Color.Format.RGBA */ ), 'rgb(255 211 158)');
        assert.strictEqual(nonSRGBColor.asString("hsl" /* Common.Color.Format.HSL */ ), 'hsl(0deg 0% 100%)');
        assert.strictEqual(nonSRGBColor.asString("hsla" /* Common.Color.Format.HSLA */ ), 'hsl(0deg 0% 100%)');
        assert.strictEqual(nonSRGBColor.asString("hwb" /* Common.Color.Format.HWB */ ), 'hwb(15.95deg 61.78% 0%)');
        assert.strictEqual(nonSRGBColor.asString("hwba" /* Common.Color.Format.HWBA */ ), 'hwb(15.95deg 61.78% 0%)');
        assert.strictEqual(nonSRGBColor.asString("srgb" /* Common.Color.Format.SRGB */ ), 'color(srgb 1 0.83 0.62)');
        assert.strictEqual(nonSRGBColor.asString("srgb-linear" /* Common.Color.Format.SRGB_LINEAR */ ), 'color(srgb-linear 1 0.65 0.34)');
        assert.strictEqual(nonSRGBColor.asString("display-p3" /* Common.Color.Format.DISPLAY_P3 */ ), 'color(display-p3 1 0.86 0.66)');
        assert.strictEqual(nonSRGBColor.asString("a98-rgb" /* Common.Color.Format.A98_RGB */ ), 'color(a98-rgb 1 0.82 0.62)');
        assert.strictEqual(nonSRGBColor.asString("prophoto-rgb" /* Common.Color.Format.PROPHOTO_RGB */ ), 'color(prophoto-rgb 1 0.88 0.61)');
        assert.strictEqual(nonSRGBColor.asString("rec2020" /* Common.Color.Format.REC_2020 */ ), 'color(rec2020 1 0.87 0.63)');
    });
    it('correctly detects and clips out-of-gamut colors', function() {
        var _Color_parse, _Color_parse1, _Color_parse2, _Color_parse3, _Color_parse4, _Color_parse5, _Color_parse6, _Color_parse7, _Color_parse8, _Color_parse9, _Color_parse10, _Color_parse11, _Color_parse12, _Color_parse13, _Color_parse14, _Color_parse15, _Color_parse16, _Color_parse17, _Color_parse18, _Color_parse19, _Color_parse20, _Color_parse21, _Color_parse22, _Color_parse23, _Color_parse24, _Color_parse25, _Color_parse26, _Color_parse27, _Color_parse28, _Color_parse29, _Color_parse30, _Color_parse31, _Color_parse32, _Color_parse33, _Color_parse34, _Color_parse35, _Color_parse36, _Color_parse37, _Color_parse38, _Color_parse39, _Color_parse40, _Color_parse41, _Color_parse42, _Color_parse43, _Color_parse44, _Color_parse45, _Color_parse46, _Color_parse47, _Color_parse48, _Color_parse49;
        assert.isTrue((_Color_parse = Color.parse('rgb(-1 1 256)')) === null || _Color_parse === void 0 ? void 0 : _Color_parse.isGamutClipped());
        assert.deepEqual((_Color_parse1 = Color.parse('rgb(-1 1 256)')) === null || _Color_parse1 === void 0 ? void 0 : _Color_parse1.asString(), 'rgb(0 1 255)');
        assert.isTrue(new Color.Legacy([
            -1,
            0,
            1.1,
            1
        ], "rgba" /* Color.Format.RGBA */ ).isGamutClipped());
        assert.deepEqual(new Color.Legacy([
            -1,
            0,
            1.1,
            1
        ], "rgba" /* Color.Format.RGBA */ ).asString(), 'rgb(0 0 255)');
        assert.isTrue((_Color_parse2 = Color.parse('hsl(-120deg 130% 50%)')) === null || _Color_parse2 === void 0 ? void 0 : _Color_parse2.isGamutClipped());
        assert.deepEqual((_Color_parse3 = Color.parse('hsl(-120deg 130% 50%)')) === null || _Color_parse3 === void 0 ? void 0 : _Color_parse3.asString(), 'hsl(240deg 100% 50%)');
        assert.isTrue((_Color_parse4 = Color.parse('hwb(-120deg -130% 50%)')) === null || _Color_parse4 === void 0 ? void 0 : _Color_parse4.isGamutClipped());
        assert.deepEqual((_Color_parse5 = Color.parse('hwb(-120deg -130% -50%)')) === null || _Color_parse5 === void 0 ? void 0 : _Color_parse5.asString(), 'hwb(240deg 0% 0%)');
        assert.isTrue((_Color_parse6 = Color.parse('hwb(-120deg 0% 150%)')) === null || _Color_parse6 === void 0 ? void 0 : _Color_parse6.isGamutClipped());
        assert.deepEqual((_Color_parse7 = Color.parse('hwb(-120deg 0% 150%)')) === null || _Color_parse7 === void 0 ? void 0 : _Color_parse7.asString(), 'hwb(0deg 0% 100%)');
        assert.isTrue((_Color_parse8 = Color.parse('hwb(-120deg 130% 0%)')) === null || _Color_parse8 === void 0 ? void 0 : _Color_parse8.isGamutClipped());
        assert.deepEqual((_Color_parse9 = Color.parse('hwb(-120deg 130% 0%)')) === null || _Color_parse9 === void 0 ? void 0 : _Color_parse9.asString(), 'hwb(0deg 100% 0%)');
        assert.isFalse((_Color_parse10 = Color.parse('lch(110 -70 -70)')) === null || _Color_parse10 === void 0 ? void 0 : _Color_parse10.isGamutClipped());
        assert.deepEqual((_Color_parse11 = Color.parse('lch(110 70 -70)')) === null || _Color_parse11 === void 0 ? void 0 : _Color_parse11.asString(), 'lch(100 0 0)');
        assert.isFalse((_Color_parse12 = Color.parse('oklch(1.5 -70 -70)')) === null || _Color_parse12 === void 0 ? void 0 : _Color_parse12.isGamutClipped());
        assert.deepEqual((_Color_parse13 = Color.parse('oklch(1.5 70 -70)')) === null || _Color_parse13 === void 0 ? void 0 : _Color_parse13.asString(), 'oklch(1 0 0)');
        assert.isFalse((_Color_parse14 = Color.parse('lab(110 -70 -70)')) === null || _Color_parse14 === void 0 ? void 0 : _Color_parse14.isGamutClipped());
        assert.deepEqual((_Color_parse15 = Color.parse('lab(110 -70 -70)')) === null || _Color_parse15 === void 0 ? void 0 : _Color_parse15.asString(), 'lab(100 0 0)');
        assert.isFalse((_Color_parse16 = Color.parse('oklab(1.5 -70 -70)')) === null || _Color_parse16 === void 0 ? void 0 : _Color_parse16.isGamutClipped());
        assert.deepEqual((_Color_parse17 = Color.parse('oklab(1.5 -70 -70)')) === null || _Color_parse17 === void 0 ? void 0 : _Color_parse17.asString(), 'oklab(1 0 0)');
        assert.isFalse((_Color_parse18 = Color.parse('lch(10 70 -70)')) === null || _Color_parse18 === void 0 ? void 0 : _Color_parse18.isGamutClipped());
        assert.deepEqual((_Color_parse19 = Color.parse('lch(10 70 -70)')) === null || _Color_parse19 === void 0 ? void 0 : _Color_parse19.asString(), 'lch(10 70 290)');
        assert.isFalse((_Color_parse20 = Color.parse('oklch(0.5 70 -70)')) === null || _Color_parse20 === void 0 ? void 0 : _Color_parse20.isGamutClipped());
        assert.deepEqual((_Color_parse21 = Color.parse('oklch(0.5 70 -70)')) === null || _Color_parse21 === void 0 ? void 0 : _Color_parse21.asString(), 'oklch(0.5 70 290)');
        assert.isFalse((_Color_parse22 = Color.parse('lab(10 -70 -70)')) === null || _Color_parse22 === void 0 ? void 0 : _Color_parse22.isGamutClipped());
        assert.deepEqual((_Color_parse23 = Color.parse('lab(10 -70 -70)')) === null || _Color_parse23 === void 0 ? void 0 : _Color_parse23.asString(), 'lab(10 -70 -70)');
        assert.isFalse((_Color_parse24 = Color.parse('oklab(0.5 -70 -70)')) === null || _Color_parse24 === void 0 ? void 0 : _Color_parse24.isGamutClipped());
        assert.deepEqual((_Color_parse25 = Color.parse('oklab(0.5 -70 -70)')) === null || _Color_parse25 === void 0 ? void 0 : _Color_parse25.asString(), 'oklab(0.5 -70 -70)');
        // RGB spaces are clipped:
        assert.isTrue((_Color_parse26 = Color.parse('color(srgb-linear -1 1 1.5)')) === null || _Color_parse26 === void 0 ? void 0 : _Color_parse26.isGamutClipped());
        assert.deepEqual((_Color_parse27 = Color.parse('color(srgb-linear -1 1 1.5)')) === null || _Color_parse27 === void 0 ? void 0 : _Color_parse27.asString(), 'color(srgb-linear 0 1 1)');
        assert.isTrue((_Color_parse28 = Color.parse('color(srgb -1 1 1.5)')) === null || _Color_parse28 === void 0 ? void 0 : _Color_parse28.isGamutClipped());
        assert.deepEqual((_Color_parse29 = Color.parse('color(srgb -1 1 1.5)')) === null || _Color_parse29 === void 0 ? void 0 : _Color_parse29.asString(), 'color(srgb 0 1 1)');
        assert.isTrue((_Color_parse30 = Color.parse('color(display-p3 -1 1 1.5)')) === null || _Color_parse30 === void 0 ? void 0 : _Color_parse30.isGamutClipped());
        assert.deepEqual((_Color_parse31 = Color.parse('color(display-p3 -1 1 1.5)')) === null || _Color_parse31 === void 0 ? void 0 : _Color_parse31.asString(), 'color(display-p3 0 1 1)');
        assert.isTrue((_Color_parse32 = Color.parse('color(a98-rgb -1 1 1.5)')) === null || _Color_parse32 === void 0 ? void 0 : _Color_parse32.isGamutClipped());
        assert.deepEqual((_Color_parse33 = Color.parse('color(a98-rgb -1 1 1.5)')) === null || _Color_parse33 === void 0 ? void 0 : _Color_parse33.asString(), 'color(a98-rgb 0 1 1)');
        assert.isTrue((_Color_parse34 = Color.parse('color(prophoto-rgb -1 1 1.5)')) === null || _Color_parse34 === void 0 ? void 0 : _Color_parse34.isGamutClipped());
        assert.deepEqual((_Color_parse35 = Color.parse('color(prophoto-rgb -1 1 1.5)')) === null || _Color_parse35 === void 0 ? void 0 : _Color_parse35.asString(), 'color(prophoto-rgb 0 1 1)');
        assert.isTrue((_Color_parse36 = Color.parse('color(rec2020 -1 1 1.5)')) === null || _Color_parse36 === void 0 ? void 0 : _Color_parse36.isGamutClipped());
        assert.deepEqual((_Color_parse37 = Color.parse('color(rec2020 -1 1 1.5)')) === null || _Color_parse37 === void 0 ? void 0 : _Color_parse37.asString(), 'color(rec2020 0 1 1)');
        // XYZ has infinite gamute and is never clipped:
        assert.isFalse((_Color_parse38 = Color.parse('color(xyz-d50 -1 1 1.5)')) === null || _Color_parse38 === void 0 ? void 0 : _Color_parse38.isGamutClipped());
        assert.deepEqual((_Color_parse39 = Color.parse('color(xyz-d50 -1 1 1.5)')) === null || _Color_parse39 === void 0 ? void 0 : _Color_parse39.asString(), 'color(xyz-d50 -1 1 1.5)');
        assert.isFalse((_Color_parse40 = Color.parse('color(xyz-d65 -1 1 1.5)')) === null || _Color_parse40 === void 0 ? void 0 : _Color_parse40.isGamutClipped());
        assert.deepEqual((_Color_parse41 = Color.parse('color(xyz-d65 -1 1 1.5)')) === null || _Color_parse41 === void 0 ? void 0 : _Color_parse41.asString(), 'color(xyz-d65 -1 1 1.5)');
        assert.isFalse((_Color_parse42 = Color.parse('color(xyz -1 1 1.5)')) === null || _Color_parse42 === void 0 ? void 0 : _Color_parse42.isGamutClipped());
        assert.deepEqual((_Color_parse43 = Color.parse('color(xyz -1 1 1.5)')) === null || _Color_parse43 === void 0 ? void 0 : _Color_parse43.asString(), 'color(xyz -1 1 1.5)');
        // Being just a tiny bit out of gamut doesn't matter:
        assert.isFalse((_Color_parse44 = Color.parse('color(srgb-linear 1.0001 1.0001 1.0001)')) === null || _Color_parse44 === void 0 ? void 0 : _Color_parse44.isGamutClipped());
        assert.isFalse((_Color_parse45 = Color.parse('color(srgb 1.0001 1.0001 1.0001)')) === null || _Color_parse45 === void 0 ? void 0 : _Color_parse45.isGamutClipped());
        assert.isFalse((_Color_parse46 = Color.parse('color(display-p3 1.0001 1.0001 1.0001)')) === null || _Color_parse46 === void 0 ? void 0 : _Color_parse46.isGamutClipped());
        assert.isFalse((_Color_parse47 = Color.parse('color(a98-rgb 1.0001 1.0001 1.0001)')) === null || _Color_parse47 === void 0 ? void 0 : _Color_parse47.isGamutClipped());
        assert.isFalse((_Color_parse48 = Color.parse('color(prophoto-rgb 1.0001 1.0001 1.0001)')) === null || _Color_parse48 === void 0 ? void 0 : _Color_parse48.isGamutClipped());
        assert.isFalse((_Color_parse49 = Color.parse('color(rec2020 1.0001 1.0001 1.0001)')) === null || _Color_parse49 === void 0 ? void 0 : _Color_parse49.isGamutClipped());
    });
    it('correctly represents powerless components', function() {
        var _Color_parse, _Color_parse1, _Color_parse2, _Color_parse3, _Color_parse4, _Color_parse5, _Color_parse6, _Color_parse7, _Color_parse8, _Color_parse9, _Color_parse10, _Color_parse11, _Color_parse12, _Color_parse13, _Color_parse14;
        // With lightness at 0% or 100% the color is black or white and all other components are powerless:
        assert.deepEqual((_Color_parse = Color.parse('lab(0 15 15)')) === null || _Color_parse === void 0 ? void 0 : _Color_parse.asString(), 'lab(0 0 0)');
        assert.deepEqual((_Color_parse1 = Color.parse('lab(100 15 15)')) === null || _Color_parse1 === void 0 ? void 0 : _Color_parse1.asString(), 'lab(100 0 0)');
        assert.deepEqual((_Color_parse2 = Color.parse('lch(0 15 15)')) === null || _Color_parse2 === void 0 ? void 0 : _Color_parse2.asString(), 'lch(0 0 0)');
        assert.deepEqual((_Color_parse3 = Color.parse('lch(100 15 15)')) === null || _Color_parse3 === void 0 ? void 0 : _Color_parse3.asString(), 'lch(100 0 0)');
        assert.deepEqual((_Color_parse4 = Color.parse('oklab(0 15 15)')) === null || _Color_parse4 === void 0 ? void 0 : _Color_parse4.asString(), 'oklab(0 0 0)');
        assert.deepEqual((_Color_parse5 = Color.parse('oklab(1 15 15)')) === null || _Color_parse5 === void 0 ? void 0 : _Color_parse5.asString(), 'oklab(1 0 0)');
        assert.deepEqual((_Color_parse6 = Color.parse('oklch(0 15 15)')) === null || _Color_parse6 === void 0 ? void 0 : _Color_parse6.asString(), 'oklch(0 0 0)');
        assert.deepEqual((_Color_parse7 = Color.parse('oklch(1 15 15)')) === null || _Color_parse7 === void 0 ? void 0 : _Color_parse7.asString(), 'oklch(1 0 0)');
        assert.deepEqual((_Color_parse8 = Color.parse('hsl(120deg 10% 0%)')) === null || _Color_parse8 === void 0 ? void 0 : _Color_parse8.asString(), 'hsl(0deg 0% 0%)');
        assert.deepEqual((_Color_parse9 = Color.parse('hsl(120deg 10% 100%)')) === null || _Color_parse9 === void 0 ? void 0 : _Color_parse9.asString(), 'hsl(0deg 0% 100%)');
        // With saturation or chroma at 0, the hue becomes powerless:
        assert.deepEqual((_Color_parse10 = Color.parse('lch(0.3 0 15)')) === null || _Color_parse10 === void 0 ? void 0 : _Color_parse10.asString(), 'lch(0 0 0)');
        assert.deepEqual((_Color_parse11 = Color.parse('oklch(0.3 0 15)')) === null || _Color_parse11 === void 0 ? void 0 : _Color_parse11.asString(), 'oklch(0.3 0 0)');
        assert.deepEqual((_Color_parse12 = Color.parse('hsl(120deg 0% 50%)')) === null || _Color_parse12 === void 0 ? void 0 : _Color_parse12.asString(), 'hsl(0deg 0% 50%)');
        // If whiteness + blackness is 100% the color is a shade of gray and the hue is powerless:
        assert.deepEqual((_Color_parse13 = Color.parse('hwb(120deg 50% 50%)')) === null || _Color_parse13 === void 0 ? void 0 : _Color_parse13.asString(), 'hwb(0deg 50% 50%)');
        // whiteness + blackness exceeding 100% is normalized to 100% retaining the relative magnitude:
        assert.deepEqual((_Color_parse14 = Color.parse('hwb(120deg 80% 40%)')) === null || _Color_parse14 === void 0 ? void 0 : _Color_parse14.asString(), 'hwb(0deg 66.67% 33.33%)');
    });
});
describe('Generator', function() {
    it('able to return the color for an ID if the ID was already set', function() {
        var generator = new Color.Generator();
        generator.setColorForID('r', 'Red');
        assert.strictEqual(generator.colorForID('r'), 'Red', 'color was not retrieved correctly');
    });
    it('able to return the color for an ID that was not set', function() {
        var generator = new Color.Generator();
        assert.strictEqual(generator.colorForID('r'), 'hsl(133deg 67% 80%)', 'color was not generated correctly');
    });
}); //# sourceMappingURL=Color.test.js.map


}),

}]);