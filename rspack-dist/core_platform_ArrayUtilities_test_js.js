"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_platform_ArrayUtilities_test_js"], {
"./core/platform/ArrayUtilities.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
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
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}

function comparator(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
}
describe('ArrayUtilities', function() {
    var _loop = function(i) {
        var fixture = fixtures[i];
        it("sorts ranges, fixture ".concat(i), function() {
            for(var left = 0, l = fixture.length - 1; left < l; ++left){
                for(var right = left, r = fixture.length; right < r; ++right){
                    for(var first = left; first <= right; ++first){
                        for(var count = 1, k = right - first + 1; count <= k; ++count){
                            var actual = fixture.slice(0);
                            _platform_js__WEBPACK_IMPORTED_MODULE_0__.ArrayUtilities.sortRange(actual, comparator, left, right, first, first + count - 1);
                            assert.deepStrictEqual(fixture.slice(0, left), actual.slice(0, left), 'left ' + left + ' ' + right + ' ' + count);
                            assert.deepStrictEqual(fixture.slice(right + 1), actual.slice(right + 1), 'right ' + left + ' ' + right + ' ' + count);
                            var middle = fixture.slice(left, right + 1);
                            middle.sort(comparator);
                            assert.deepStrictEqual(middle.slice(first - left, first - left + count), actual.slice(first, first + count), 'sorted ' + left + ' ' + right + ' ' + first + ' ' + count);
                            var actualRest = actual.slice(first + count, right + 1);
                            actualRest.sort(comparator);
                            assert.deepStrictEqual(middle.slice(first - left + count), actualRest, 'unsorted ' + left + ' ' + right + ' ' + first + ' ' + count);
                        }
                    }
                }
            }
        });
    };
    describe('removeElement', function() {
        it('removes elements', function() {
            var testCases = [
                {
                    input: [],
                    expectedFirstOnlyTrue: [],
                    expectedFirstOnlyFalse: []
                },
                {
                    input: [
                        1
                    ],
                    expectedFirstOnlyTrue: [
                        1
                    ],
                    expectedFirstOnlyFalse: [
                        1
                    ]
                },
                {
                    input: [
                        1,
                        2,
                        3,
                        4,
                        5,
                        4,
                        3,
                        2,
                        1
                    ],
                    expectedFirstOnlyTrue: [
                        1,
                        3,
                        4,
                        5,
                        4,
                        3,
                        2,
                        1
                    ],
                    expectedFirstOnlyFalse: [
                        1,
                        3,
                        4,
                        5,
                        4,
                        3,
                        1
                    ]
                },
                {
                    input: [
                        2,
                        2,
                        2,
                        2,
                        2
                    ],
                    expectedFirstOnlyTrue: [
                        2,
                        2,
                        2,
                        2
                    ],
                    expectedFirstOnlyFalse: []
                },
                {
                    input: [
                        2,
                        2,
                        2,
                        1,
                        2,
                        2,
                        3,
                        2
                    ],
                    expectedFirstOnlyTrue: [
                        2,
                        2,
                        1,
                        2,
                        2,
                        3,
                        2
                    ],
                    expectedFirstOnlyFalse: [
                        1,
                        3
                    ]
                }
            ];
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = testCases[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var testCase = _step.value;
                    var actualFirstOnlyTrue = _to_consumable_array(testCase.input);
                    _platform_js__WEBPACK_IMPORTED_MODULE_0__.ArrayUtilities.removeElement(actualFirstOnlyTrue, 2, true);
                    assert.deepStrictEqual(actualFirstOnlyTrue, testCase.expectedFirstOnlyTrue, 'Removing firstOnly (true) failed');
                    var actualFirstOnlyFalse = _to_consumable_array(testCase.input);
                    _platform_js__WEBPACK_IMPORTED_MODULE_0__.ArrayUtilities.removeElement(actualFirstOnlyFalse, 2, false);
                    assert.deepStrictEqual(actualFirstOnlyFalse, testCase.expectedFirstOnlyFalse, 'Removing firstOnly (false) failed');
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
    var fixtures = [
        [],
        [
            1
        ],
        [
            2,
            1
        ],
        [
            6,
            4,
            2,
            7,
            10,
            15,
            1
        ],
        [
            10,
            44,
            3,
            6,
            56,
            66,
            10,
            55,
            32,
            56,
            2,
            5
        ]
    ];
    for(var i = 0; i < fixtures.length; i++)_loop(i);
    describe('binaryIndexOf', function() {
        it('calculates the correct binary index', function() {
            var testArray = function testArray(array) {
                function comparator(a, b) {
                    return a < b ? -1 : a > b ? 1 : 0;
                }
                for(var i = -100; i <= 100; ++i){
                    var reference = array.indexOf(i);
                    var actual = _platform_js__WEBPACK_IMPORTED_MODULE_0__.ArrayUtilities.binaryIndexOf(array, i, comparator);
                    assert.strictEqual(reference, actual);
                }
            };
            var fixtures = [
                [],
                [
                    1
                ],
                [
                    1,
                    10
                ],
                [
                    1,
                    10,
                    11,
                    12,
                    13,
                    14,
                    100
                ],
                [
                    -100,
                    -50,
                    0,
                    50,
                    100
                ],
                [
                    -100,
                    -14,
                    -13,
                    -12,
                    -11,
                    -10,
                    -1
                ]
            ];
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = fixtures[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var fixture = _step.value;
                    testArray(fixture);
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
    describe('merge and intersect', function() {
        it('orders merge intersect', function() {
            var comparator = function comparator(a, b) {
                return a - b;
            };
            var count = function count(a, x) {
                return _platform_js__WEBPACK_IMPORTED_MODULE_0__.ArrayUtilities.upperBound(a, x, _platform_js__WEBPACK_IMPORTED_MODULE_0__.ArrayUtilities.DEFAULT_COMPARATOR) - _platform_js__WEBPACK_IMPORTED_MODULE_0__.ArrayUtilities.lowerBound(a, x, _platform_js__WEBPACK_IMPORTED_MODULE_0__.ArrayUtilities.DEFAULT_COMPARATOR);
            };
            var testAll = function testAll(a, b) {
                testOperation(a, b, _platform_js__WEBPACK_IMPORTED_MODULE_0__.ArrayUtilities.mergeOrdered(a, b, comparator), Math.max, 'U');
                testOperation(a, b, _platform_js__WEBPACK_IMPORTED_MODULE_0__.ArrayUtilities.intersectOrdered(a, b, comparator), Math.min, 'x');
            };
            var testOperation = function testOperation(a, b, actual, checkOperation, opName) {
                var allValues = a.concat(b).concat(actual);
                var expectedCount;
                var actualCount;
                for(var i = 0; i < allValues.length; ++i){
                    var value = allValues[i];
                    expectedCount = checkOperation(count(a, value), count(b, value));
                    actualCount = count(actual, value);
                    assert.strictEqual(expectedCount, actualCount, 'Incorrect result for value: ' + value + ' at [' + a + '] ' + opName + ' [' + b + '] -> [' + actual + ']');
                }
                var shallowCopy = _to_consumable_array(actual);
                assert.deepStrictEqual(actual.sort(), shallowCopy, 'Result array is ordered');
            };
            var fixtures = new Map([
                [
                    [],
                    []
                ],
                [
                    [
                        1
                    ],
                    []
                ],
                [
                    [
                        1,
                        2,
                        2,
                        2,
                        3
                    ],
                    []
                ],
                [
                    [
                        4,
                        5,
                        5,
                        8,
                        8
                    ],
                    [
                        1,
                        1,
                        1,
                        2,
                        6
                    ]
                ],
                [
                    [
                        1,
                        2,
                        2,
                        2,
                        2,
                        3,
                        3,
                        4
                    ],
                    [
                        2,
                        2,
                        2,
                        3,
                        3,
                        3,
                        3
                    ]
                ],
                [
                    [
                        1,
                        2,
                        3,
                        4,
                        5
                    ],
                    [
                        1,
                        2,
                        3
                    ]
                ]
            ]);
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = fixtures[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var _step_value = _sliced_to_array(_step.value, 2), a = _step_value[0], b = _step_value[1];
                    testAll(a, b);
                    testAll(b, a);
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
    describe('upperBound', function() {
        it('finds the first object after the needle whose value is greater than the needle', /*#__PURE__*/ _async_to_generator(function() {
            var input, index;
            return _ts_generator(this, function(_state) {
                input = [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5
                ];
                index = _platform_js__WEBPACK_IMPORTED_MODULE_0__.ArrayUtilities.upperBound(input, 2, _platform_js__WEBPACK_IMPORTED_MODULE_0__.ArrayUtilities.DEFAULT_COMPARATOR);
                assert.strictEqual(index, 3);
                return [
                    2
                ];
            });
        }));
        it('can take left and right params to alter the range', /*#__PURE__*/ _async_to_generator(function() {
            var input, index;
            return _ts_generator(this, function(_state) {
                input = [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5
                ];
                index = _platform_js__WEBPACK_IMPORTED_MODULE_0__.ArrayUtilities.upperBound(input, 2, _platform_js__WEBPACK_IMPORTED_MODULE_0__.ArrayUtilities.DEFAULT_COMPARATOR, 4, 6);
                assert.strictEqual(index, 4);
                return [
                    2
                ];
            });
        }));
        it('can take a custom comparator to determine how to compare elements', /*#__PURE__*/ _async_to_generator(function() {
            var input, index;
            return _ts_generator(this, function(_state) {
                input = [
                    {
                        time: 0,
                        name: 'test1'
                    },
                    {
                        time: 6,
                        name: 'test2'
                    }
                ];
                index = _platform_js__WEBPACK_IMPORTED_MODULE_0__.ArrayUtilities.upperBound(input, 2, function(needle, element) {
                    if (needle > element.time) {
                        return 1;
                    }
                    if (element.time > needle) {
                        return -1;
                    }
                    return 0;
                });
                assert.strictEqual(index, 1);
                return [
                    2
                ];
            });
        }));
    });
    describe('lowerBound', function() {
        it('finds the first object after the needle whose value is equal to or greater than the needle', /*#__PURE__*/ _async_to_generator(function() {
            var input, index;
            return _ts_generator(this, function(_state) {
                input = [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5
                ];
                index = _platform_js__WEBPACK_IMPORTED_MODULE_0__.ArrayUtilities.lowerBound(input, 2, _platform_js__WEBPACK_IMPORTED_MODULE_0__.ArrayUtilities.DEFAULT_COMPARATOR);
                assert.strictEqual(index, 2);
                return [
                    2
                ];
            });
        }));
        it('can take left and right params to alter the range', /*#__PURE__*/ _async_to_generator(function() {
            var input, index;
            return _ts_generator(this, function(_state) {
                input = [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5
                ];
                index = _platform_js__WEBPACK_IMPORTED_MODULE_0__.ArrayUtilities.lowerBound(input, 2, _platform_js__WEBPACK_IMPORTED_MODULE_0__.ArrayUtilities.DEFAULT_COMPARATOR, 5, 6);
                assert.strictEqual(index, 5);
                return [
                    2
                ];
            });
        }));
        it('can take a custom comparator to determine how to compare elements', /*#__PURE__*/ _async_to_generator(function() {
            var input, index;
            return _ts_generator(this, function(_state) {
                input = [
                    {
                        time: 0,
                        name: 'test1'
                    },
                    {
                        time: 2,
                        name: 'test2'
                    },
                    {
                        time: 3,
                        name: 'test3'
                    }
                ];
                index = _platform_js__WEBPACK_IMPORTED_MODULE_0__.ArrayUtilities.lowerBound(input, 2, function(needle, element) {
                    if (needle > element.time) {
                        return 1;
                    }
                    if (element.time > needle) {
                        return -1;
                    }
                    return 0;
                });
                assert.strictEqual(index, 1);
                return [
                    2
                ];
            });
        }));
    });
    describe('Nearest', function() {
        describe('Finding the last item where predicate is true', function() {
            it('works with an even number of entries', function() {
                var ascEntries = [
                    {
                        a: 1
                    },
                    {
                        a: 3
                    },
                    {
                        a: 3
                    },
                    {
                        a: 12
                    },
                    {
                        a: 13
                    },
                    {
                        a: 18
                    },
                    {
                        a: 23
                    },
                    {
                        a: 24
                    }
                ];
                var nearest = _platform_js__WEBPACK_IMPORTED_MODULE_0__.ArrayUtilities.nearestIndexFromEnd(ascEntries, function(value) {
                    return value.a < 7;
                });
                assert.strictEqual(nearest, 2);
                var descEntries = [
                    {
                        a: 23
                    },
                    {
                        a: 18
                    },
                    {
                        a: 13
                    },
                    {
                        a: 12
                    },
                    {
                        a: 12
                    },
                    {
                        a: 3
                    },
                    {
                        a: 1
                    },
                    {
                        a: 0
                    }
                ];
                nearest = _platform_js__WEBPACK_IMPORTED_MODULE_0__.ArrayUtilities.nearestIndexFromEnd(descEntries, function(value) {
                    return value.a > 7;
                });
                assert.strictEqual(nearest, 4);
            });
            it('works with an odd number of entries', function() {
                var ascEntries = [
                    {
                        a: 1
                    },
                    {
                        a: 3
                    },
                    {
                        a: 12
                    },
                    {
                        a: 13
                    },
                    {
                        a: 18
                    },
                    {
                        a: 23
                    },
                    {
                        a: 23
                    },
                    {
                        a: 32
                    },
                    {
                        a: 33
                    }
                ];
                var nearest = _platform_js__WEBPACK_IMPORTED_MODULE_0__.ArrayUtilities.nearestIndexFromEnd(ascEntries, function(value) {
                    return value.a < 31;
                });
                assert.strictEqual(nearest, 6);
                var descEntries = [
                    {
                        a: 32
                    },
                    {
                        a: 23
                    },
                    {
                        a: 18
                    },
                    {
                        a: 13
                    },
                    {
                        a: 12
                    },
                    {
                        a: 3
                    },
                    {
                        a: 3
                    },
                    {
                        a: 1
                    }
                ];
                nearest = _platform_js__WEBPACK_IMPORTED_MODULE_0__.ArrayUtilities.nearestIndexFromEnd(descEntries, function(value) {
                    return value.a > 2;
                });
                assert.strictEqual(nearest, 6);
            });
            it('returns null if there are no matches at all', function() {
                var ascEntries = [
                    {
                        a: 1
                    },
                    {
                        a: 3
                    },
                    {
                        a: 12
                    },
                    {
                        a: 13
                    },
                    {
                        a: 18
                    },
                    {
                        a: 23
                    },
                    {
                        a: 32
                    }
                ];
                var zeroth = _platform_js__WEBPACK_IMPORTED_MODULE_0__.ArrayUtilities.nearestIndexFromEnd(ascEntries, function(value) {
                    return value.a < 0;
                });
                assert.isNull(zeroth);
                var descEntries = [
                    {
                        a: 32
                    },
                    {
                        a: 23
                    },
                    {
                        a: 18
                    },
                    {
                        a: 13
                    },
                    {
                        a: 12
                    },
                    {
                        a: 3
                    },
                    {
                        a: 1
                    }
                ];
                zeroth = _platform_js__WEBPACK_IMPORTED_MODULE_0__.ArrayUtilities.nearestIndexFromEnd(descEntries, function(value) {
                    return value.a > 40;
                });
                assert.isNull(zeroth);
            });
            it('works when the result is the last item', function() {
                var ascEntries = [
                    {
                        a: 1
                    },
                    {
                        a: 3
                    },
                    {
                        a: 12
                    },
                    {
                        a: 13
                    },
                    {
                        a: 18
                    },
                    {
                        a: 23
                    },
                    {
                        a: 32
                    },
                    {
                        a: 32
                    }
                ];
                var last = _platform_js__WEBPACK_IMPORTED_MODULE_0__.ArrayUtilities.nearestIndexFromEnd(ascEntries, function(value) {
                    return value.a < 40;
                });
                assert.strictEqual(last, ascEntries.length - 1);
                var descEntries = [
                    {
                        a: 32
                    },
                    {
                        a: 23
                    },
                    {
                        a: 18
                    },
                    {
                        a: 13
                    },
                    {
                        a: 12
                    },
                    {
                        a: 3
                    },
                    {
                        a: 1
                    },
                    {
                        a: 1
                    }
                ];
                last = _platform_js__WEBPACK_IMPORTED_MODULE_0__.ArrayUtilities.nearestIndexFromEnd(descEntries, function(value) {
                    return value.a > 0;
                });
                assert.strictEqual(last, descEntries.length - 1);
            });
            it('works on exact values', function() {
                var ascEntries = [
                    {
                        a: 1
                    },
                    {
                        a: 2
                    },
                    {
                        a: 3
                    },
                    {
                        a: 3
                    },
                    {
                        a: 4
                    },
                    {
                        a: 5
                    },
                    {
                        a: 6
                    }
                ];
                var predicateFunc = function(value) {
                    return value.a <= 3;
                };
                // Odd number of entries.
                // Note that the predicate is allowing an the exact match.
                var nearest = _platform_js__WEBPACK_IMPORTED_MODULE_0__.ArrayUtilities.nearestIndexFromEnd(ascEntries, predicateFunc);
                assert.strictEqual(nearest, 3);
                // Even number of entries.
                ascEntries.push({
                    a: 7
                });
                nearest = _platform_js__WEBPACK_IMPORTED_MODULE_0__.ArrayUtilities.nearestIndexFromEnd(ascEntries, predicateFunc);
                assert.strictEqual(nearest, 3);
                var descEntries = [
                    {
                        a: 6
                    },
                    {
                        a: 5
                    },
                    {
                        a: 4
                    },
                    {
                        a: 3
                    },
                    {
                        a: 3
                    },
                    {
                        a: 2
                    },
                    {
                        a: 1
                    }
                ];
                // Note that the predicate is allowing an the exact match.
                var gePredicate = function(value) {
                    return value.a >= 3;
                };
                // Odd number of entries.
                nearest = _platform_js__WEBPACK_IMPORTED_MODULE_0__.ArrayUtilities.nearestIndexFromEnd(descEntries, gePredicate);
                assert.strictEqual(nearest, 4);
                // Even number of entries.
                descEntries.push({
                    a: 7
                });
                nearest = _platform_js__WEBPACK_IMPORTED_MODULE_0__.ArrayUtilities.nearestIndexFromEnd(descEntries, gePredicate);
                assert.strictEqual(nearest, 4);
            });
        });
        describe('Finding the first item in the array where predicate is true', function() {
            it('works with an even number of entries', function() {
                var ascEntries = [
                    {
                        a: 1
                    },
                    {
                        a: 3
                    },
                    {
                        a: 12
                    },
                    {
                        a: 12
                    },
                    {
                        a: 13
                    },
                    {
                        a: 18
                    },
                    {
                        a: 23
                    },
                    {
                        a: 24
                    }
                ];
                var nearest = _platform_js__WEBPACK_IMPORTED_MODULE_0__.ArrayUtilities.nearestIndexFromBeginning(ascEntries, function(value) {
                    return value.a > 7;
                });
                assert.strictEqual(nearest, 2);
                var descEntries = [
                    {
                        a: 23
                    },
                    {
                        a: 18
                    },
                    {
                        a: 13
                    },
                    {
                        a: 12
                    },
                    {
                        a: 12
                    },
                    {
                        a: 3
                    },
                    {
                        a: 1
                    },
                    {
                        a: 0
                    }
                ];
                nearest = _platform_js__WEBPACK_IMPORTED_MODULE_0__.ArrayUtilities.nearestIndexFromBeginning(descEntries, function(value) {
                    return value.a < 13;
                });
                assert.strictEqual(nearest, 3);
            });
            it('works with an odd number of entries', function() {
                var ascEntries = [
                    {
                        a: 1
                    },
                    {
                        a: 3
                    },
                    {
                        a: 12
                    },
                    {
                        a: 13
                    },
                    {
                        a: 18
                    },
                    {
                        a: 23
                    },
                    {
                        a: 32
                    },
                    {
                        a: 32
                    },
                    {
                        a: 33
                    }
                ];
                var nearest = _platform_js__WEBPACK_IMPORTED_MODULE_0__.ArrayUtilities.nearestIndexFromBeginning(ascEntries, function(value) {
                    return value.a > 31;
                });
                assert.strictEqual(nearest, 6);
                var descEntries = [
                    {
                        a: 33
                    },
                    {
                        a: 32
                    },
                    {
                        a: 23
                    },
                    {
                        a: 23
                    },
                    {
                        a: 18
                    },
                    {
                        a: 23
                    },
                    {
                        a: 32
                    },
                    {
                        a: 3
                    },
                    {
                        a: 1
                    }
                ];
                nearest = _platform_js__WEBPACK_IMPORTED_MODULE_0__.ArrayUtilities.nearestIndexFromBeginning(descEntries, function(value) {
                    return value.a < 32;
                });
                assert.strictEqual(nearest, 2);
            });
            it('returns null if there are no matches at all', function() {
                var entries = [
                    {
                        a: 1
                    },
                    {
                        a: 3
                    },
                    {
                        a: 12
                    },
                    {
                        a: 13
                    },
                    {
                        a: 18
                    },
                    {
                        a: 23
                    },
                    {
                        a: 32
                    }
                ];
                var predicate = function(value) {
                    return value.a > 33;
                };
                var nearest = _platform_js__WEBPACK_IMPORTED_MODULE_0__.ArrayUtilities.nearestIndexFromBeginning(entries, predicate);
                assert.isNull(nearest);
            });
            it('works when the result is the first item', function() {
                var ascEntries = [
                    {
                        a: 1
                    },
                    {
                        a: 1
                    },
                    {
                        a: 3
                    },
                    {
                        a: 12
                    },
                    {
                        a: 13
                    },
                    {
                        a: 18
                    },
                    {
                        a: 23
                    },
                    {
                        a: 32
                    }
                ];
                var greaterThanPredicate = function(value) {
                    return value.a > 0;
                };
                var first = _platform_js__WEBPACK_IMPORTED_MODULE_0__.ArrayUtilities.nearestIndexFromBeginning(ascEntries, greaterThanPredicate);
                assert.strictEqual(first, 0);
                var descEntries = [
                    {
                        a: 32
                    },
                    {
                        a: 32
                    },
                    {
                        a: 23
                    },
                    {
                        a: 18
                    },
                    {
                        a: 13
                    },
                    {
                        a: 12
                    },
                    {
                        a: 5
                    },
                    {
                        a: 5
                    }
                ];
                var predicate = function(value) {
                    return value.a < 64;
                };
                first = _platform_js__WEBPACK_IMPORTED_MODULE_0__.ArrayUtilities.nearestIndexFromBeginning(descEntries, predicate);
                assert.strictEqual(first, 0);
            });
            it('works on exact values', function() {
                var ascEntries = [
                    {
                        a: 1
                    },
                    {
                        a: 2
                    },
                    {
                        a: 3
                    },
                    {
                        a: 3
                    },
                    {
                        a: 4
                    },
                    {
                        a: 5
                    },
                    {
                        a: 6
                    }
                ];
                // Note that the predicate is allowing an the exact match.
                var gePredicate = function(value) {
                    return value.a >= 3;
                };
                // Even number of entries.
                var nearest = _platform_js__WEBPACK_IMPORTED_MODULE_0__.ArrayUtilities.nearestIndexFromBeginning(ascEntries, gePredicate);
                assert.strictEqual(nearest, 2);
                // Odd number of entries.
                ascEntries.push({
                    a: 7
                });
                nearest = _platform_js__WEBPACK_IMPORTED_MODULE_0__.ArrayUtilities.nearestIndexFromBeginning(ascEntries, gePredicate);
                assert.strictEqual(nearest, 2);
                var descEntries = [
                    {
                        a: 6
                    },
                    {
                        a: 5
                    },
                    {
                        a: 4
                    },
                    {
                        a: 3
                    },
                    {
                        a: 3
                    },
                    {
                        a: 2
                    },
                    {
                        a: 1
                    }
                ];
                // Note that the predicate is allowing an the exact match.
                var predicateFunc = function(value) {
                    return value.a <= 3;
                };
                // Even number of entries.
                nearest = _platform_js__WEBPACK_IMPORTED_MODULE_0__.ArrayUtilities.nearestIndexFromBeginning(descEntries, predicateFunc);
                assert.strictEqual(nearest, 3);
                // Odd number of entries.
                descEntries.push({
                    a: 7
                });
                nearest = _platform_js__WEBPACK_IMPORTED_MODULE_0__.ArrayUtilities.nearestIndexFromBeginning(descEntries, predicateFunc);
                assert.strictEqual(nearest, 3);
            });
        });
    });
    describe('arrayDoesNotContainNullOrUndefined', function() {
        it('should return false when array contains null', function() {
            assert.isFalse(_platform_js__WEBPACK_IMPORTED_MODULE_0__.ArrayUtilities.arrayDoesNotContainNullOrUndefined([
                1,
                null,
                2
            ]));
        });
        it('should return false when array contains undefined', function() {
            assert.isFalse(_platform_js__WEBPACK_IMPORTED_MODULE_0__.ArrayUtilities.arrayDoesNotContainNullOrUndefined([
                1,
                undefined,
                2
            ]));
        });
        it('should return true when array does not contain undefined and null', function() {
            assert.isTrue(_platform_js__WEBPACK_IMPORTED_MODULE_0__.ArrayUtilities.arrayDoesNotContainNullOrUndefined([
                1,
                2
            ]));
        });
    });
}); //# sourceMappingURL=ArrayUtilities.test.js.map


}),

}]);