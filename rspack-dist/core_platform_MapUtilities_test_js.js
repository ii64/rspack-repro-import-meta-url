"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_platform_MapUtilities_test_js"], {
"./core/platform/MapUtilities.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./platform.js */ "./core/platform/platform.js");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
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
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
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
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}

describe('MapUtilities', function() {
    describe('inverse', function() {
        it('inverts the map returning a multimap with the map\'s values as keys and the map\'s keys as values', function() {
            var getKeys = function getKeys(lookupValue) {
                var keys = new Set();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = pairs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var _step_value = _sliced_to_array(_step.value, 2), key = _step_value[0], value = _step_value[1];
                        if (value === lookupValue) {
                            keys.add(key);
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
                return keys;
            };
            var pairs = [
                [
                    'a',
                    1
                ],
                [
                    'b',
                    2
                ],
                [
                    'c',
                    3
                ],
                [
                    'd',
                    1
                ]
            ];
            var map = new Map(pairs);
            var inverse = _platform_js__WEBPACK_IMPORTED_MODULE_0__.MapUtilities.inverse(map);
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = pairs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var _step_value = _sliced_to_array(_step.value, 2), value = _step_value[1];
                    assert.sameMembers(_to_consumable_array(inverse.get(value)), _to_consumable_array(getKeys(value)));
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
    });
    describe('getWithDefault', function() {
        it('returns the default when it has no value', function() {
            var expected = new Set();
            var returned = _platform_js__WEBPACK_IMPORTED_MODULE_0__.MapUtilities.getWithDefault(new Map(), 'foo', function() {
                return expected;
            });
            assert.strictEqual(expected, returned);
        });
        it('returns the same item on successive calls', function() {
            var data = new Map();
            var returnedFirst = _platform_js__WEBPACK_IMPORTED_MODULE_0__.MapUtilities.getWithDefault(data, 'foo', function() {
                return new Set();
            });
            var returnedSecond = _platform_js__WEBPACK_IMPORTED_MODULE_0__.MapUtilities.getWithDefault(data, 'foo', function() {
                return new Set();
            });
            assert.strictEqual(returnedFirst, returnedSecond);
        });
    });
}); //# sourceMappingURL=MapUtilities.test.js.map


}),

}]);