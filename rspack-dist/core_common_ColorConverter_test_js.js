"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_common_ColorConverter_test_js"], {
"./core/common/ColorConverter.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./core/common/common.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
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

function assertAlmostEqual(array1, array2) {
    var delta = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0.01;
    var almostEqual = array1.every(function(n, i) {
        return Math.abs(n - array2[i]) < delta;
    });
    assert.isTrue(almostEqual, "".concat(array1, " is not almost equal to ").concat(array2, " with delta ").concat(delta));
}
describe('ColorConverter', function() {
    it('LabToXyzd50', function() {
        var colorCases = [
            [
                [
                    0.0,
                    0.0,
                    0.0
                ],
                [
                    0.0,
                    0.0,
                    0.0
                ]
            ],
            [
                [
                    100.0,
                    0.0,
                    0.0
                ],
                [
                    0.9642,
                    1.0,
                    0.8252
                ]
            ],
            [
                [
                    33.0,
                    0.0,
                    0.0
                ],
                [
                    0.0727,
                    0.0754,
                    0.0622
                ]
            ],
            [
                [
                    66.0,
                    0.0,
                    0.0
                ],
                [
                    0.3406,
                    0.3532,
                    0.2915
                ]
            ],
            [
                [
                    20.0,
                    -35.0,
                    45.0
                ],
                [
                    0.0134,
                    0.0299,
                    -0.0056
                ]
            ],
            [
                [
                    80.0,
                    -60.0,
                    70.0
                ],
                [
                    0.3416,
                    0.5668,
                    0.0899
                ]
            ],
            [
                [
                    35.0,
                    60.0,
                    70.0
                ],
                [
                    0.1690,
                    0.0850,
                    -0.0051
                ]
            ],
            [
                [
                    75.0,
                    45.0,
                    -100.0
                ],
                [
                    0.6448,
                    0.4828,
                    1.7488
                ]
            ],
            [
                [
                    75.0,
                    100.0,
                    80.0
                ],
                [
                    0.92,
                    0.4828,
                    0.0469
                ]
            ]
        ]; // red
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = colorCases[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = _sliced_to_array(_step.value, 2), input = _step_value[0], expected = _step_value[1];
                assertAlmostEqual(_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorConverter.ColorConverter.labToXyzd50(input[0], input[1], input[2]), expected);
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
    it('XYZD50ToLab', function() {
        var colorCases = [
            [
                [
                    0.0,
                    0.0,
                    0.0
                ],
                [
                    0.0,
                    0.0,
                    0.0
                ]
            ],
            [
                [
                    0.9642,
                    1.0,
                    0.8252
                ],
                [
                    100.0,
                    0.0,
                    0.0
                ]
            ],
            [
                [
                    0.0727,
                    0.0754,
                    0.0622
                ],
                [
                    33.0,
                    0.0,
                    0.0
                ]
            ],
            [
                [
                    0.3406,
                    0.3532,
                    0.2915
                ],
                [
                    66.0,
                    0.0,
                    0.0
                ]
            ],
            [
                [
                    0.0134,
                    0.0299,
                    -0.0056
                ],
                [
                    20.0,
                    -35.0,
                    45.0
                ]
            ],
            [
                [
                    0.3416,
                    0.5668,
                    0.0899
                ],
                [
                    80.0,
                    -60.0,
                    70.0
                ]
            ],
            [
                [
                    0.1690,
                    0.0850,
                    -0.0051
                ],
                [
                    35.0,
                    60.0,
                    70.0
                ]
            ],
            [
                [
                    0.6448,
                    0.4828,
                    1.7488
                ],
                [
                    75.0,
                    45.0,
                    -100.0
                ]
            ],
            [
                [
                    0.92,
                    0.4828,
                    0.0469
                ],
                [
                    75.0,
                    100.0,
                    80.0
                ]
            ]
        ]; // red
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = colorCases[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = _sliced_to_array(_step.value, 2), input = _step_value[0], expected = _step_value[1];
                assertAlmostEqual(_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorConverter.ColorConverter.xyzd50ToLab(input[0], input[1], input[2]), expected, 0.1);
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
    it('OklabToXyzd65', function() {
        var colorCases = [
            [
                [
                    0.0,
                    0.0,
                    0.0
                ],
                [
                    0.0,
                    0.0,
                    0.0
                ]
            ],
            [
                [
                    1.0,
                    0.0,
                    0.0
                ],
                [
                    0.9504559270516717,
                    1.0,
                    1.0890577507598784
                ]
            ],
            [
                [
                    0.8664396115356694,
                    -0.23388757418790818,
                    0.17949847989672985
                ],
                [
                    0.357584339383878,
                    0.715168678767756,
                    0.11919477979462598
                ]
            ],
            [
                [
                    0.4209136612058102,
                    0.16470430417002319,
                    -0.10147178154592906
                ],
                [
                    0.1279775574172914,
                    0.06148383144929487,
                    0.20935510595451154
                ]
            ],
            [
                [
                    0.4806125447400232,
                    0.1440294785250731,
                    0.0688902950420287
                ],
                [
                    0.167625056565021,
                    0.09823806119130823,
                    0.03204123425728893
                ]
            ],
            [
                [
                    0.5197518277948419,
                    -0.14030232755310995,
                    0.10767589774360209
                ],
                [
                    0.07718833433230218,
                    0.15437666866460437,
                    0.025729444777434055
                ]
            ]
        ]; // green
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = colorCases[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = _sliced_to_array(_step.value, 2), input = _step_value[0], expected = _step_value[1];
                assertAlmostEqual(_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorConverter.ColorConverter.oklabToXyzd65(input[0], input[1], input[2]), expected);
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
    it('XYZD65 to Oklab', function() {
        var colorCases = [
            [
                [
                    0.0,
                    0.0,
                    0.0
                ],
                [
                    0.0,
                    0.0,
                    0.0
                ]
            ],
            [
                [
                    0.9504559270516717,
                    1.0,
                    1.0890577507598784
                ],
                [
                    1,
                    0.0,
                    0.0
                ]
            ],
            [
                [
                    0.357584339383878,
                    0.715168678767756,
                    0.11919477979462598
                ],
                [
                    0.8664396115356694,
                    -0.23388757418790818,
                    0.17949847989672985
                ]
            ],
            [
                [
                    0.1279775574172914,
                    0.06148383144929487,
                    0.20935510595451154
                ],
                [
                    0.4209136612058102,
                    0.16470430417002319,
                    -0.10147178154592906
                ]
            ],
            [
                [
                    0.167625056565021,
                    0.09823806119130823,
                    0.03204123425728893
                ],
                [
                    0.4806125447400232,
                    0.1440294785250731,
                    0.0688902950420287
                ]
            ],
            [
                [
                    0.07718833433230218,
                    0.15437666866460437,
                    0.025729444777434055
                ],
                [
                    0.5197518277948419,
                    -0.14030232755310995,
                    0.10767589774360209
                ]
            ]
        ];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = colorCases[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = _sliced_to_array(_step.value, 2), input = _step_value[0], expected = _step_value[1];
                assertAlmostEqual(_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorConverter.ColorConverter.xyzd65ToOklab(input[0], input[1], input[2]), expected);
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
    it('XYZD50ToD65', function() {
        var colorCases = [
            [
                [
                    0.0,
                    0.0,
                    0.0
                ],
                [
                    0.0,
                    0.0,
                    0.0
                ]
            ],
            [
                [
                    0.95047,
                    1.0,
                    1.0888
                ],
                [
                    0.95392,
                    1.00594,
                    1.439698
                ]
            ],
            [
                [
                    0.412,
                    0.213,
                    0.019
                ],
                [
                    0.389938,
                    0.20384,
                    0.025982
                ]
            ],
            [
                [
                    0.358,
                    0.715,
                    0.119
                ],
                [
                    0.33307,
                    0.714494,
                    0.1480589
                ]
            ],
            [
                [
                    0.18,
                    0.072,
                    0.95
                ],
                [
                    0.23041847,
                    0.087602,
                    1.264587
                ]
            ],
            [
                [
                    0.23,
                    0.107,
                    0.555
                ],
                [
                    0.252396,
                    0.113222,
                    0.73899
                ]
            ],
            [
                [
                    0.114,
                    0.09,
                    0.087
                ],
                [
                    0.112348,
                    0.089496,
                    0.115299
                ]
            ]
        ];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = colorCases[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = _sliced_to_array(_step.value, 2), input = _step_value[0], expected = _step_value[1];
                assertAlmostEqual(_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorConverter.ColorConverter.xyzd50ToD65(input[0], input[1], input[2]), expected);
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
    it('XYZD65ToD50', function() {
        var colorCases = [
            [
                [
                    0.0,
                    0.0,
                    0.0
                ],
                [
                    0.0,
                    0.0,
                    0.0
                ]
            ],
            [
                [
                    0.95392,
                    1.00594,
                    1.439698
                ],
                [
                    0.95047,
                    1.0,
                    1.0888
                ]
            ],
            [
                [
                    0.389938,
                    0.20384,
                    0.025982
                ],
                [
                    0.412,
                    0.213,
                    0.019
                ]
            ],
            [
                [
                    0.33307,
                    0.714494,
                    0.1480589
                ],
                [
                    0.358,
                    0.715,
                    0.119
                ]
            ],
            [
                [
                    0.23041847,
                    0.087602,
                    1.264587
                ],
                [
                    0.18,
                    0.072,
                    0.95
                ]
            ],
            [
                [
                    0.252396,
                    0.113222,
                    0.73899
                ],
                [
                    0.23,
                    0.107,
                    0.555
                ]
            ],
            [
                [
                    0.112348,
                    0.089496,
                    0.115299
                ],
                [
                    0.114,
                    0.09,
                    0.087
                ]
            ]
        ];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = colorCases[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = _sliced_to_array(_step.value, 2), input = _step_value[0], expected = _step_value[1];
                assertAlmostEqual(_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorConverter.ColorConverter.xyzd65ToD50(input[0], input[1], input[2]), expected);
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
    it('XYZD50TosRGBLinear', function() {
        var colorCases = [
            [
                [
                    0.0,
                    0.0,
                    0.0
                ],
                [
                    0,
                    0,
                    0
                ]
            ],
            [
                [
                    0.95047,
                    1.0,
                    1.0888
                ],
                [
                    0.8272854669134366,
                    1.0223971188142922,
                    1.3696152053494186
                ]
            ],
            [
                [
                    0.412,
                    0.213,
                    0.019
                ],
                [
                    0.9374275777784716,
                    0.005542826192671772,
                    0.007585345113415052
                ]
            ],
            [
                [
                    0.358,
                    0.715,
                    0.119
                ],
                [
                    -0.09280883353574096,
                    1.0237151633684942,
                    0.0292858777069627
                ]
            ],
            [
                [
                    0.18,
                    0.072,
                    0.95
                ],
                [
                    -0.01841380331752207,
                    -0.006427604489910602,
                    1.3315858423930542
                ]
            ],
            [
                [
                    0.23,
                    0.107,
                    0.555
                ],
                [
                    0.27548326260231637,
                    -0.0015117957032871887,
                    0.772043362443567
                ]
            ],
            [
                [
                    0.114,
                    0.09,
                    0.087
                ],
                [
                    0.16903835776528245,
                    0.06379397130440126,
                    0.10986584693282563
                ]
            ]
        ];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = colorCases[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = _sliced_to_array(_step.value, 2), input = _step_value[0], expected = _step_value[1];
                assertAlmostEqual(_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorConverter.ColorConverter.xyzd50TosRGBLinear(input[0], input[1], input[2]), expected);
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
    it('LchToLab', function() {
        var colorCases = [
            [
                [
                    0.0,
                    0.0,
                    0.0
                ],
                [
                    0.0,
                    0.0,
                    0.0
                ]
            ],
            [
                [
                    89.11,
                    69.04,
                    161.5
                ],
                [
                    89.11,
                    -65.472265155436,
                    21.906713478207564
                ]
            ],
            [
                [
                    29.6915239933531,
                    66.82572352143814,
                    327.1054738802461
                ],
                [
                    29.6915239933531,
                    56.11167248735513,
                    -36.292665028011974
                ]
            ],
            [
                [
                    38.14895894517021,
                    59.598372928277406,
                    32.286662896162966
                ],
                [
                    38.14895894517021,
                    50.38364171345111,
                    31.834803335164764
                ]
            ],
            [
                [
                    46.27770902748027,
                    67.9842594463414,
                    134.3838583288382
                ],
                [
                    46.27770902748027,
                    -47.55240796497723,
                    48.586294664234586
                ]
            ]
        ]; // green
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = colorCases[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = _sliced_to_array(_step.value, 2), input = _step_value[0], expected = _step_value[1];
                assertAlmostEqual(_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorConverter.ColorConverter.lchToLab(input[0], input[1], input[2]), expected);
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
    it('LabToLch', function() {
        var colorCases = [
            [
                [
                    0.0,
                    0.0,
                    0.0
                ],
                [
                    0.0,
                    0.0,
                    0.0
                ]
            ],
            [
                [
                    100.0,
                    0.0,
                    0.0
                ],
                [
                    100.0,
                    0.0,
                    0.0
                ]
            ],
            [
                [
                    89.11,
                    -65.472265155436,
                    21.906713478207564
                ],
                [
                    89.11,
                    69.04,
                    161.5
                ]
            ],
            [
                [
                    29.6915239933531,
                    56.11167248735513,
                    -36.292665028011974
                ],
                [
                    29.6915239933531,
                    66.82572352143814,
                    -32.894523620605469
                ]
            ],
            [
                [
                    38.14895894517021,
                    50.38364171345111,
                    31.834803335164764
                ],
                [
                    38.14895894517021,
                    59.598372928277406,
                    32.286662896162966
                ]
            ],
            [
                [
                    46.27770902748027,
                    -47.55240796497723,
                    48.586294664234586
                ],
                [
                    46.27770902748027,
                    67.9842594463414,
                    134.3838583288382
                ]
            ]
        ]; // green
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = colorCases[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = _sliced_to_array(_step.value, 2), input = _step_value[0], expected = _step_value[1];
                assertAlmostEqual(_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorConverter.ColorConverter.labToLch(input[0], input[1], input[2]), expected);
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
    it('SRGBLinearToXyzd50', function() {
        var colorCases = [
            [
                [
                    0.0,
                    0.0,
                    0.0
                ],
                [
                    0.0,
                    0.0,
                    0.0
                ]
            ],
            [
                [
                    1.0,
                    1.0,
                    1.0
                ],
                [
                    0.9642956660812443,
                    1.0000000361162846,
                    0.8251045485672053
                ]
            ],
            [
                [
                    0.0,
                    1.0,
                    0.0
                ],
                [
                    0.3851514688337912,
                    0.7168870538238823,
                    0.09708128566574631
                ]
            ],
            [
                [
                    0.37626212299090644,
                    0.02315336617811041,
                    0.02315336617811041
                ],
                [
                    0.1763053229982614,
                    0.10171766135467991,
                    0.024020600356509242
                ]
            ],
            [
                [
                    1.0,
                    0.5271151257058131,
                    0.5972017883637634
                ],
                [
                    0.7245316165924385,
                    0.6365774485679174,
                    0.4915583325045292
                ]
            ]
        ]; // pink
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = colorCases[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = _sliced_to_array(_step.value, 2), input = _step_value[0], expected = _step_value[1];
                assertAlmostEqual(_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorConverter.ColorConverter.srgbLinearToXyzd50(input[0], input[1], input[2]), expected);
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
    it('SRGBToXyzd50', function() {
        var colorCases = [
            [
                [
                    0.0,
                    0.0,
                    0.0
                ],
                [
                    0.0,
                    0.0,
                    0.0
                ]
            ],
            [
                [
                    1.0,
                    1.0,
                    1.0
                ],
                [
                    0.9642956660812443,
                    1.0000000361162846,
                    0.8251045485672053
                ]
            ],
            [
                [
                    0.0,
                    1.0,
                    0.0
                ],
                [
                    0.3851514688337912,
                    0.7168870538238823,
                    0.09708128566574631
                ]
            ],
            [
                [
                    0.6470588235294118,
                    0.16470588235294117,
                    0.16470588235294117
                ],
                [
                    0.1763053229982614,
                    0.10171766135467991,
                    0.024020600356509242
                ]
            ],
            [
                [
                    1.0,
                    0.7529411764705882,
                    0.796078431372549
                ],
                [
                    0.7245316165924385,
                    0.6365774485679174,
                    0.4915583325045292
                ]
            ]
        ]; // pink
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = colorCases[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = _sliced_to_array(_step.value, 2), input = _step_value[0], expected = _step_value[1];
                assertAlmostEqual(_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorConverter.ColorConverter.srgbToXyzd50(input[0], input[1], input[2]), expected);
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
    it('DisplayP3ToXyzd50', function() {
        var colorCases = [
            [
                [
                    0.0,
                    0.0,
                    0.0
                ],
                [
                    0.0,
                    0.0,
                    0.0
                ]
            ],
            [
                [
                    0.9999999999999999,
                    0.9999999999999997,
                    0.9999999999999999
                ],
                [
                    0.9642956660812443,
                    1.0000000361162846,
                    0.8251045485672053
                ]
            ],
            [
                [
                    0.45840159019103005,
                    0.9852645833250543,
                    0.29829470783345835
                ],
                [
                    0.3851514688337912,
                    0.7168870538238823,
                    0.09708128566574631
                ]
            ],
            [
                [
                    0.5957181607237907,
                    0.2055939145569215,
                    0.18695695018247227
                ],
                [
                    0.1763053229982614,
                    0.10171766135467991,
                    0.024020600356509242
                ]
            ],
            [
                [
                    0.4584004101072638,
                    0.07977226603250179,
                    0.4847907338567859
                ],
                [
                    0.1250143560558979,
                    0.0611129099463755,
                    0.15715146562446167
                ]
            ],
            [
                [
                    0.962148711796773,
                    0.7628803605364196,
                    0.7971503318758075
                ],
                [
                    0.7245316165924385,
                    0.6365774485679174,
                    0.4915583325045292
                ]
            ]
        ]; // pink
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = colorCases[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = _sliced_to_array(_step.value, 2), input = _step_value[0], expected = _step_value[1];
                assertAlmostEqual(_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorConverter.ColorConverter.displayP3ToXyzd50(input[0], input[1], input[2]), expected);
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
    it('XYZD50ToDisplayP3', function() {
        var colorCases = [
            [
                [
                    0.0,
                    0.0,
                    0.0
                ],
                [
                    0.0,
                    0.0,
                    0.0
                ]
            ],
            [
                [
                    0.9642956660812443,
                    1.0000000361162846,
                    0.8251045485672053
                ],
                [
                    0.9999999999999999,
                    0.9999999999999997,
                    0.9999999999999999
                ]
            ],
            [
                [
                    0.3851514688337912,
                    0.7168870538238823,
                    0.09708128566574631
                ],
                [
                    0.45840159019103005,
                    0.9852645833250543,
                    0.29829470783345835
                ]
            ],
            [
                [
                    0.1763053229982614,
                    0.10171766135467991,
                    0.024020600356509242
                ],
                [
                    0.5957181607237907,
                    0.2055939145569215,
                    0.18695695018247227
                ]
            ],
            [
                [
                    0.1250143560558979,
                    0.0611129099463755,
                    0.15715146562446167
                ],
                [
                    0.4584004101072638,
                    0.07977226603250179,
                    0.4847907338567859
                ]
            ],
            [
                [
                    0.7245316165924385,
                    0.6365774485679174,
                    0.4915583325045292
                ],
                [
                    0.962148711796773,
                    0.7628803605364196,
                    0.7971503318758075
                ]
            ]
        ]; // pink
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = colorCases[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = _sliced_to_array(_step.value, 2), input = _step_value[0], expected = _step_value[1];
                assertAlmostEqual(_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorConverter.ColorConverter.xyzd50ToDisplayP3(input[0], input[1], input[2]), expected);
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
    it('ProPhotoToXyzd50', function() {
        var colorCases = [
            [
                [
                    0.0,
                    0.0,
                    0.0
                ],
                [
                    0.0,
                    0.0,
                    0.0
                ]
            ],
            [
                [
                    0.9999999886663737,
                    1.0000000327777285,
                    0.9999999636791804
                ],
                [
                    0.9642956660812443,
                    1.0000000361162846,
                    0.8251045485672053
                ]
            ],
            [
                [
                    0.5402807890930262,
                    0.9275948938161531,
                    0.30456598218387576
                ],
                [
                    0.3851514688337912,
                    0.7168870538238823,
                    0.09708128566574631
                ]
            ],
            [
                [
                    0.4202512875251534,
                    0.20537448341387265,
                    0.14018716364460992
                ],
                [
                    0.1763053229982614,
                    0.10171766135467991,
                    0.024020600356509242
                ]
            ],
            [
                [
                    0.3415199027593793,
                    0.13530888280806527,
                    0.3980101298732242
                ],
                [
                    0.1250143560558979,
                    0.0611129099463755,
                    0.15715146562446167
                ]
            ],
            [
                [
                    0.8755612852965058,
                    0.7357597566543541,
                    0.7499575746802042
                ],
                [
                    0.7245316165924385,
                    0.6365774485679174,
                    0.4915583325045292
                ]
            ]
        ]; // pink
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = colorCases[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = _sliced_to_array(_step.value, 2), input = _step_value[0], expected = _step_value[1];
                assertAlmostEqual(_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorConverter.ColorConverter.proPhotoToXyzd50(input[0], input[1], input[2]), expected);
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
    it('XYZD50ToProPhoto', function() {
        var colorCases = [
            [
                [
                    0.0,
                    0.0,
                    0.0
                ],
                [
                    0.0,
                    0.0,
                    0.0
                ]
            ],
            [
                [
                    0.9642956660812443,
                    1.0000000361162846,
                    0.8251045485672053
                ],
                [
                    0.9999999886663737,
                    1.0000000327777285,
                    0.9999999636791804
                ]
            ],
            [
                [
                    0.3851514688337912,
                    0.7168870538238823,
                    0.09708128566574631
                ],
                [
                    0.5402807890930262,
                    0.9275948938161531,
                    0.30456598218387576
                ]
            ],
            [
                [
                    0.1763053229982614,
                    0.10171766135467991,
                    0.024020600356509242
                ],
                [
                    0.4202512875251534,
                    0.20537448341387265,
                    0.14018716364460992
                ]
            ],
            [
                [
                    0.1250143560558979,
                    0.0611129099463755,
                    0.15715146562446167
                ],
                [
                    0.3415199027593793,
                    0.13530888280806527,
                    0.3980101298732242
                ]
            ],
            [
                [
                    0.7245316165924385,
                    0.6365774485679174,
                    0.4915583325045292
                ],
                [
                    0.8755612852965058,
                    0.7357597566543541,
                    0.7499575746802042
                ]
            ]
        ]; // pink
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = colorCases[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = _sliced_to_array(_step.value, 2), input = _step_value[0], expected = _step_value[1];
                assertAlmostEqual(_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorConverter.ColorConverter.xyzd50ToProPhoto(input[0], input[1], input[2]), expected);
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
    it('AdobeRGBToXyzd50', function() {
        var colorCases = [
            [
                [
                    0.0,
                    0.0,
                    0.0
                ],
                [
                    0.0,
                    0.0,
                    0.0
                ]
            ],
            [
                [
                    1.0000000000000002,
                    0.9999999999999999,
                    1.
                ],
                [
                    0.9642956660812443,
                    1.0000000361162846,
                    0.8251045485672053
                ]
            ],
            [
                [
                    0.564972265988564,
                    0.9999999999999999,
                    0.23442379872902916
                ],
                [
                    0.3851514688337912,
                    0.7168870538238823,
                    0.09708128566574631
                ]
            ],
            [
                [
                    0.5565979160264471,
                    0.18045907254050694,
                    0.18045907254050705
                ],
                [
                    0.1763053229982614,
                    0.10171766135467991,
                    0.024020600356509242
                ]
            ],
            [
                [
                    0.4275929819700999,
                    0.0,
                    0.4885886519419426
                ],
                [
                    0.1250143560558979,
                    0.0611129099463755,
                    0.15715146562446167
                ]
            ],
            [
                [
                    0.9363244100721754,
                    0.7473920857106169,
                    0.7893042668092753
                ],
                [
                    0.7245316165924385,
                    0.6365774485679174,
                    0.4915583325045292
                ]
            ]
        ]; // pink
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = colorCases[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = _sliced_to_array(_step.value, 2), input = _step_value[0], expected = _step_value[1];
                assertAlmostEqual(_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorConverter.ColorConverter.adobeRGBToXyzd50(input[0], input[1], input[2]), expected);
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
    it('XYZD50ToAdobeRGB', function() {
        var colorCases = [
            [
                [
                    0.0,
                    0.0,
                    0.0
                ],
                [
                    0.0,
                    0.0,
                    0.0
                ]
            ],
            [
                [
                    0.9642956660812443,
                    1.0000000361162846,
                    0.8251045485672053
                ],
                [
                    1.0000000000000002,
                    0.9999999999999999,
                    1.
                ]
            ],
            [
                [
                    0.3851514688337912,
                    0.7168870538238823,
                    0.09708128566574631
                ],
                [
                    0.564972265988564,
                    0.9999999999999999,
                    0.23442379872902916
                ]
            ],
            [
                [
                    0.1763053229982614,
                    0.10171766135467991,
                    0.024020600356509242
                ],
                [
                    0.5565979160264471,
                    0.18045907254050694,
                    0.18045907254050705
                ]
            ],
            [
                [
                    0.1250143560558979,
                    0.0611129099463755,
                    0.15715146562446167
                ],
                [
                    0.4275929819700999,
                    0.0,
                    0.4885886519419426
                ]
            ],
            [
                [
                    0.7245316165924385,
                    0.6365774485679174,
                    0.4915583325045292
                ],
                [
                    0.9363244100721754,
                    0.7473920857106169,
                    0.7893042668092753
                ]
            ]
        ]; // pink
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = colorCases[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = _sliced_to_array(_step.value, 2), input = _step_value[0], expected = _step_value[1];
                assertAlmostEqual(_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorConverter.ColorConverter.xyzd50ToAdobeRGB(input[0], input[1], input[2]), expected);
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
    it('Rec2020ToXyzd50', function() {
        var colorCases = [
            [
                [
                    0.0,
                    0.0,
                    0.0
                ],
                [
                    0.0,
                    0.0,
                    0.0
                ]
            ],
            [
                [
                    1.0000000000000002,
                    1.,
                    1.
                ],
                [
                    0.9642956660812443,
                    1.0000000361162846,
                    0.8251045485672053
                ]
            ],
            [
                [
                    0.5675424725933591,
                    0.959278677099374,
                    0.2689692617052188
                ],
                [
                    0.3851514688337912,
                    0.7168870538238823,
                    0.09708128566574631
                ]
            ],
            [
                [
                    0.4841434514625542,
                    0.17985588424119636,
                    0.12395667053434403
                ],
                [
                    0.1763053229982614,
                    0.10171766135467991,
                    0.024020600356509242
                ]
            ],
            [
                [
                    0.36142160262090384,
                    0.0781562275109019,
                    0.429742223818931
                ],
                [
                    0.1250143560558979,
                    0.0611129099463755,
                    0.15715146562446167
                ]
            ],
            [
                [
                    0.9098509851821579,
                    0.747938726996672,
                    0.7726929727190115
                ],
                [
                    0.7245316165924385,
                    0.6365774485679174,
                    0.4915583325045292
                ]
            ]
        ]; // pink
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = colorCases[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = _sliced_to_array(_step.value, 2), input = _step_value[0], expected = _step_value[1];
                assertAlmostEqual(_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorConverter.ColorConverter.rec2020ToXyzd50(input[0], input[1], input[2]), expected);
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
    it('XYZD50ToRec2020', function() {
        var colorCases = [
            [
                [
                    0.0,
                    0.0,
                    0.0
                ],
                [
                    0.0,
                    0.0,
                    0.0
                ]
            ],
            [
                [
                    0.9642956660812443,
                    1.0000000361162846,
                    0.8251045485672053
                ],
                [
                    1.0000000000000002,
                    1.,
                    1.
                ]
            ],
            [
                [
                    0.3851514688337912,
                    0.7168870538238823,
                    0.09708128566574631
                ],
                [
                    0.5675424725933591,
                    0.959278677099374,
                    0.2689692617052188
                ]
            ],
            [
                [
                    0.1763053229982614,
                    0.10171766135467991,
                    0.024020600356509242
                ],
                [
                    0.4841434514625542,
                    0.17985588424119636,
                    0.12395667053434403
                ]
            ],
            [
                [
                    0.1250143560558979,
                    0.0611129099463755,
                    0.15715146562446167
                ],
                [
                    0.36142160262090384,
                    0.0781562275109019,
                    0.429742223818931
                ]
            ],
            [
                [
                    0.7245316165924385,
                    0.6365774485679174,
                    0.4915583325045292
                ],
                [
                    0.9098509851821579,
                    0.747938726996672,
                    0.7726929727190115
                ]
            ]
        ]; // pink
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = colorCases[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = _sliced_to_array(_step.value, 2), input = _step_value[0], expected = _step_value[1];
                assertAlmostEqual(_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorConverter.ColorConverter.xyzd50ToRec2020(input[0], input[1], input[2]), expected);
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
    it('Xyzd50ToSrgb', function() {
        var colorCases = [
            [
                [
                    0.0,
                    0.0,
                    0.0
                ],
                [
                    0.0,
                    0.0,
                    0.0
                ]
            ],
            [
                [
                    1.0,
                    1.0,
                    1.0
                ],
                [
                    0.9642956660812443,
                    1.0000000361162846,
                    0.8251045485672053
                ]
            ],
            [
                [
                    0.0,
                    1.0,
                    0.0
                ],
                [
                    0.3851514688337912,
                    0.7168870538238823,
                    0.09708128566574631
                ]
            ],
            [
                [
                    0.6470588235294118,
                    0.16470588235294117,
                    0.16470588235294117
                ],
                [
                    0.1763053229982614,
                    0.10171766135467991,
                    0.024020600356509242
                ]
            ],
            [
                [
                    1.0,
                    0.7529411764705882,
                    0.796078431372549
                ],
                [
                    0.7245316165924385,
                    0.6365774485679174,
                    0.4915583325045292
                ]
            ],
            [
                [
                    -3.82,
                    8.124,
                    7.752
                ],
                [
                    60,
                    100,
                    100
                ]
            ]
        ]; // pink
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = colorCases[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = _sliced_to_array(_step.value, 2), expected = _step_value[0], input = _step_value[1];
                assertAlmostEqual(_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorConverter.ColorConverter.xyzd50ToSrgb(input[0], input[1], input[2]), expected);
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
    it('xyzd50ToOklch', function() {
        var colorCases = [
            [
                [
                    0.0,
                    0.0,
                    0.0
                ],
                [
                    0.0,
                    0.0,
                    0.0
                ]
            ],
            [
                [
                    0.387,
                    0.719,
                    0.098
                ],
                [
                    0.8673558615881383,
                    0.2943827914193604,
                    142.46721129661893
                ]
            ],
            [
                [
                    0.125,
                    0.061,
                    0.157
                ],
                [
                    0.4207236956831411,
                    0.19379111721542183,
                    -31.581090643953534
                ]
            ],
            [
                [
                    0.171,
                    0.102,
                    0.027
                ],
                [
                    0.4801470749600788,
                    0.15014832987216517,
                    25.62722827644009
                ]
            ],
            [
                [
                    0.083,
                    0.155,
                    0.021
                ],
                [
                    0.5199709382011207,
                    0.17740395353498845,
                    142.60633091326085
                ]
            ]
        ]; // green
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = colorCases[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = _sliced_to_array(_step.value, 2), input = _step_value[0], expected = _step_value[1];
                assertAlmostEqual(_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorConverter.ColorConverter.xyzd50ToOklch(input[0], input[1], input[2]), expected);
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
    it('oklchToXyzd50', function() {
        var colorCases = [
            [
                [
                    0.0,
                    0.0,
                    0.0
                ],
                [
                    0.0,
                    0.0,
                    0.0
                ]
            ],
            [
                [
                    0.8664396115356694,
                    0.2948272403370167,
                    142.49533888780996
                ],
                [
                    0.387,
                    0.719,
                    0.098
                ]
            ],
            [
                [
                    0.4209136612058102,
                    0.19345291484554133,
                    328.36341792345144
                ],
                [
                    0.125,
                    0.061,
                    0.157
                ]
            ],
            [
                [
                    0.4806125447400232,
                    0.1596570181206647,
                    25.562112067668068
                ],
                [
                    0.171,
                    0.102,
                    0.027
                ]
            ],
            [
                [
                    0.5197518277948419,
                    0.17685825418032036,
                    142.4953388878099
                ],
                [
                    0.083,
                    0.155,
                    0.021
                ]
            ]
        ]; // green
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = colorCases[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = _sliced_to_array(_step.value, 2), input = _step_value[0], expected = _step_value[1];
                assertAlmostEqual(_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorConverter.ColorConverter.oklchToXyzd50(input[0], input[1], input[2]), expected);
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
}); //# sourceMappingURL=ColorConverter.test.js.map


}),

}]);