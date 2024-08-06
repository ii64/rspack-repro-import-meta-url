"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_sdk_CSSMatchedStyles_test_js"], {
"./core/sdk/CSSMatchedStyles.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sdk.js */ "./core/sdk/sdk.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
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
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
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



function ruleMatch(selector, cssProperties, range) {
    var styleSheetId = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : '0';
    return {
        rule: {
            selectorList: {
                selectors: [
                    {
                        text: selector
                    }
                ],
                text: selector
            },
            origin: "regular" /* Protocol.CSS.StyleSheetOrigin.Regular */ ,
            style: {
                cssProperties: cssProperties,
                styleSheetId: styleSheetId,
                range: range,
                shorthandEntries: []
            }
        },
        matchingSelectors: [
            0
        ]
    };
}
function createMatchedStyles(payload) {
    var node = sinon.createStubInstance(_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMModel.DOMNode);
    node.id = 1;
    return _sdk_js__WEBPACK_IMPORTED_MODULE_2__.CSSMatchedStyles.CSSMatchedStyles.create(_object_spread({
        cssModel: sinon.createStubInstance(_sdk_js__WEBPACK_IMPORTED_MODULE_2__.CSSModel.CSSModel),
        node: node,
        inlinePayload: null,
        attributesPayload: null,
        matchedPayload: [],
        pseudoPayload: [],
        inheritedPayload: [],
        inheritedPseudoPayload: [],
        animationsPayload: [],
        parentLayoutNodeId: undefined,
        positionTryRules: [],
        propertyRules: [],
        cssPropertyRegistrations: [],
        fontPaletteValuesRule: undefined
    }, payload));
}
describe('CSSMatchedStyles', function() {
    describe('computeCSSVariable', function() {
        var testCssValueEquals = function() {
            var _ref = _async_to_generator(function(text, expectedValue) {
                var _matchedStyles_computeCSSVariable, matchedStyles, _matchedStyles_computeCSSVariable_value, actualValue;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                createMatchedStyles({
                                    matchedPayload: [
                                        ruleMatch('div', [
                                            {
                                                name: '--foo',
                                                value: 'active-foo'
                                            },
                                            {
                                                name: '--baz',
                                                value: 'active-baz !important',
                                                important: true
                                            },
                                            {
                                                name: '--baz',
                                                value: 'passive-baz'
                                            },
                                            {
                                                name: '--dark',
                                                value: 'darkgrey'
                                            },
                                            {
                                                name: '--light',
                                                value: 'lightgrey'
                                            },
                                            {
                                                name: '--theme',
                                                value: 'var(--dark)'
                                            },
                                            {
                                                name: '--shadow',
                                                value: '1px var(--theme)'
                                            },
                                            {
                                                name: '--width',
                                                value: '1px'
                                            },
                                            {
                                                name: '--a',
                                                value: 'a'
                                            },
                                            {
                                                name: '--b',
                                                value: 'var(--a)'
                                            },
                                            {
                                                name: '--valid-fallback',
                                                value: 'var(--non-existent, fallback-value)'
                                            },
                                            {
                                                name: '--var-reference-in-fallback',
                                                value: 'var(--non-existent, var(--foo))'
                                            },
                                            {
                                                name: '--itself',
                                                value: 'var(--itself)'
                                            },
                                            {
                                                name: '--itself-complex',
                                                value: '10px var(--itself-complex)'
                                            },
                                            {
                                                name: '--cycle-1',
                                                value: 'var(--cycle-2)'
                                            },
                                            {
                                                name: '--cycle-2',
                                                value: 'var(--cycle-1)'
                                            },
                                            {
                                                name: '--cycle-a',
                                                value: 'var(--cycle-b, 50px)'
                                            },
                                            {
                                                name: '--cycle-b',
                                                value: 'var(--cycle-a)'
                                            },
                                            {
                                                name: '--cycle-in-fallback',
                                                value: 'var(--non-existent, var(--cycle-a))'
                                            },
                                            {
                                                name: '--non-existent-fallback',
                                                value: 'var(--non-existent, var(--another-non-existent))'
                                            },
                                            {
                                                name: '--out-of-cycle',
                                                value: 'var(--cycle-2, 20px)'
                                            },
                                            {
                                                name: '--non-inherited',
                                                value: 'var(--inherited)'
                                            },
                                            {
                                                name: '--also-inherited-overloaded',
                                                value: 'this is overloaded here'
                                            }
                                        ]),
                                        ruleMatch('html', [
                                            {
                                                name: '--inherited',
                                                value: 'var(--also-inherited-overloaded)'
                                            },
                                            {
                                                name: '--also-inherited-overloaded',
                                                value: 'inherited and overloaded'
                                            }
                                        ])
                                    ]
                                })
                            ];
                        case 1:
                            matchedStyles = _state.sent();
                            actualValue = (_matchedStyles_computeCSSVariable_value = (_matchedStyles_computeCSSVariable = matchedStyles.computeCSSVariable(matchedStyles.nodeStyles()[0], text)) === null || _matchedStyles_computeCSSVariable === void 0 ? void 0 : _matchedStyles_computeCSSVariable.value) !== null && _matchedStyles_computeCSSVariable_value !== void 0 ? _matchedStyles_computeCSSVariable_value : null;
                            assert.strictEqual(actualValue, expectedValue);
                            return [
                                2
                            ];
                    }
                });
            });
            return function testCssValueEquals(text, expectedValue) {
                return _ref.apply(this, arguments);
            };
        }();
        it('should correctly compute the value of an expression that uses a variable', /*#__PURE__*/ _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            testCssValueEquals('--foo', 'active-foo')
                        ];
                    case 1:
                        _state.sent();
                        return [
                            4,
                            testCssValueEquals('--baz', 'active-baz !important')
                        ];
                    case 2:
                        _state.sent();
                        return [
                            4,
                            testCssValueEquals('--does-not-exist', null)
                        ];
                    case 3:
                        _state.sent();
                        return [
                            4,
                            testCssValueEquals('--dark', 'darkgrey')
                        ];
                    case 4:
                        _state.sent();
                        return [
                            4,
                            testCssValueEquals('--light', 'lightgrey')
                        ];
                    case 5:
                        _state.sent();
                        return [
                            4,
                            testCssValueEquals('--theme', 'darkgrey')
                        ];
                    case 6:
                        _state.sent();
                        return [
                            4,
                            testCssValueEquals('--shadow', '1px darkgrey')
                        ];
                    case 7:
                        _state.sent();
                        return [
                            4,
                            testCssValueEquals('--width', '1px')
                        ];
                    case 8:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        }));
        it('correctly resolves the declaration', /*#__PURE__*/ _async_to_generator(function() {
            var node, matchedStyles, testComputedVariableValueEquals, styles, styleFoo1, styleFoo2, styleFoo3, styleBaz;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        node = sinon.createStubInstance(_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMModel.DOMNode);
                        node.id = 1;
                        node.parentNode = sinon.createStubInstance(_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMModel.DOMNode);
                        node.parentNode.id = 2;
                        node.parentNode.parentNode = sinon.createStubInstance(_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMModel.DOMNode);
                        node.parentNode.parentNode.id = 3;
                        node.parentNode.parentNode.parentNode = sinon.createStubInstance(_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMModel.DOMNode);
                        node.parentNode.parentNode.parentNode.id = 4;
                        return [
                            4,
                            createMatchedStyles({
                                node: node,
                                matchedPayload: [
                                    ruleMatch('div', [
                                        {
                                            name: '--foo',
                                            value: 'foo1'
                                        }
                                    ])
                                ],
                                inheritedPayload: [
                                    {
                                        matchedCSSRules: [
                                            ruleMatch('div', [
                                                {
                                                    name: '--bar',
                                                    value: 'bar'
                                                },
                                                {
                                                    name: '--foo',
                                                    value: 'foo2'
                                                }
                                            ])
                                        ]
                                    },
                                    {
                                        matchedCSSRules: [
                                            ruleMatch('div', [
                                                {
                                                    name: '--baz',
                                                    value: 'baz'
                                                }
                                            ])
                                        ]
                                    },
                                    {
                                        matchedCSSRules: [
                                            ruleMatch('div', [
                                                {
                                                    name: '--foo',
                                                    value: 'foo3'
                                                }
                                            ])
                                        ]
                                    }
                                ],
                                propertyRules: [
                                    {
                                        origin: "regular" /* Protocol.CSS.StyleSheetOrigin.Regular */ ,
                                        style: {
                                            cssProperties: [
                                                {
                                                    name: 'syntax',
                                                    value: '*'
                                                },
                                                {
                                                    name: 'inherits',
                                                    value: 'true'
                                                },
                                                {
                                                    name: 'initial-value',
                                                    value: 'bar0'
                                                }
                                            ],
                                            shorthandEntries: []
                                        },
                                        propertyName: {
                                            text: '--bar'
                                        }
                                    }
                                ]
                            })
                        ];
                    case 1:
                        matchedStyles = _state.sent();
                        // Compute the variable value as it is visible to `startingCascade` and compare with the expectation
                        testComputedVariableValueEquals = function(name, startingCascade, expectedValue, expectedDeclaration) {
                            var _matchedStyles_computeCSSVariable = matchedStyles.computeCSSVariable(startingCascade, name), value = _matchedStyles_computeCSSVariable.value, declaration = _matchedStyles_computeCSSVariable.declaration;
                            assert.strictEqual(value, expectedValue);
                            assert.strictEqual(declaration, expectedDeclaration);
                        };
                        styles = matchedStyles.nodeStyles();
                        styleFoo1 = styles.find(function(style) {
                            return style.allProperties().find(function(p) {
                                return p.value === 'foo1';
                            });
                        });
                        styleFoo2 = styles.find(function(style) {
                            return style.allProperties().find(function(p) {
                                return p.value === 'foo2';
                            });
                        });
                        styleFoo3 = styles.find(function(style) {
                            return style.allProperties().find(function(p) {
                                return p.value === 'foo3';
                            });
                        });
                        styleBaz = styles.find(function(style) {
                            return style.allProperties().find(function(p) {
                                return p.value === 'baz';
                            });
                        });
                        assert.exists(styleFoo1);
                        assert.exists(styleFoo2);
                        assert.exists(styleFoo3);
                        assert.exists(styleBaz);
                        testComputedVariableValueEquals('--foo', styleFoo1, 'foo1', styleFoo1.leadingProperties()[0]);
                        testComputedVariableValueEquals('--bar', styleFoo1, 'bar', styleFoo2.leadingProperties()[0]);
                        testComputedVariableValueEquals('--foo', styleFoo2, 'foo2', styleFoo2.leadingProperties()[1]);
                        testComputedVariableValueEquals('--bar', styleFoo3, 'bar0', matchedStyles.registeredProperties()[0]);
                        testComputedVariableValueEquals('--foo', styleBaz, 'foo3', styleFoo3.leadingProperties()[0]);
                        return [
                            2
                        ];
                }
            });
        }));
        describe('cyclic references', function() {
            it('should return `null` when the variable references itself', /*#__PURE__*/ _async_to_generator(function() {
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                testCssValueEquals('--itself', null)
                            ];
                        case 1:
                            _state.sent();
                            return [
                                4,
                                testCssValueEquals('--itself-complex', null)
                            ];
                        case 2:
                            _state.sent();
                            return [
                                2
                            ];
                    }
                });
            }));
            it('should return `null` when there is a simple cycle (1->2->1)', /*#__PURE__*/ _async_to_generator(function() {
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                testCssValueEquals('--cycle-1', null)
                            ];
                        case 1:
                            _state.sent();
                            return [
                                2
                            ];
                    }
                });
            }));
            it('should return `null` if the var reference is inside the cycle', /*#__PURE__*/ _async_to_generator(function() {
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                testCssValueEquals('--cycle-a', null)
                            ];
                        case 1:
                            _state.sent();
                            return [
                                2
                            ];
                    }
                });
            }));
            it('should return fallback value if the expression is not inside the cycle', /*#__PURE__*/ _async_to_generator(function() {
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                testCssValueEquals('--out-of-cycle', '20px')
                            ];
                        case 1:
                            _state.sent();
                            return [
                                2
                            ];
                    }
                });
            }));
        });
        describe('var references inside fallback', function() {
            it('should resolve a `var()` reference inside fallback value too', /*#__PURE__*/ _async_to_generator(function() {
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                testCssValueEquals('--var-reference-in-fallback', 'active-foo')
                            ];
                        case 1:
                            _state.sent();
                            return [
                                2
                            ];
                    }
                });
            }));
            it('should return null when the fallback value contains a cyclic reference', /*#__PURE__*/ _async_to_generator(function() {
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                testCssValueEquals('--cycle-in-fallback', null)
                            ];
                        case 1:
                            _state.sent();
                            return [
                                2
                            ];
                    }
                });
            }));
            it('should return null when the fallback value is non existent too', /*#__PURE__*/ _async_to_generator(function() {
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                testCssValueEquals('--non-existent-fallback', null)
                            ];
                        case 1:
                            _state.sent();
                            return [
                                2
                            ];
                    }
                });
            }));
        });
        it('should resolve a `var()` reference with nothing else', /*#__PURE__*/ _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            testCssValueEquals('--a', 'a')
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        }));
        it('should resolve a `var()` reference until no `var()` references left', /*#__PURE__*/ _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            testCssValueEquals('--b', 'a')
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        }));
        it('should resolve to fallback if the referenced variable does not exist', /*#__PURE__*/ _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            testCssValueEquals('--valid-fallback', 'fallback-value')
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        }));
        it('should correctly resolve the `var()` reference for complex inheritance case', /*#__PURE__*/ _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            testCssValueEquals('--non-inherited', 'inherited and overloaded')
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        }));
        it('correcty handles cycles', /*#__PURE__*/ _async_to_generator(function() {
            var simpleCycle, _, _1, cycleOnUnusedFallback, _2, _3, _4, simpleCycleWithFallbacks, _5, _6, longerCycle, _7, _8, _9, longerCycleWithFallbacks, _10, _11, _12, pointingIntoCycle, _13, _14, _15, _16, _17, pointingIntoCycleWithFallback, _18, _19, _20, _21, _22, multipleEdges, _23, _24, _25, _26, pointingIntoMultipleEdgeCycle, _27, _28, _29, _30, _31, pointingIntoMultipleEdgeCycleWithFallback, _32, _33, _34, _35, _36, multipleCyclesWithFallback, _37, _38, _39, _40, _41, _42, _43, notACycle, inherited, _44, _45;
            function compute(name, styleRules, inheritedRules) {
                return _compute.apply(this, arguments);
            }
            function _compute() {
                _compute = _async_to_generator(function(name, styleRules, inheritedRules) {
                    var _matchedStyles_computeCSSVariable, ruleToRuleMatch, matchedPayload, inheritedPayload, matchedStyles, _matchedStyles_computeCSSVariable_value;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                ruleToRuleMatch = function(rule, index) {
                                    return ruleMatch(".".concat(index), rule.split(';').filter(function(decl) {
                                        return decl.trim();
                                    }).map(function(decl) {
                                        return decl.split(':');
                                    }).map(function(decl) {
                                        return {
                                            name: decl[0].trim(),
                                            value: decl.slice(1).join(':').trim()
                                        };
                                    }));
                                };
                                matchedPayload = styleRules.map(ruleToRuleMatch);
                                inheritedPayload = inheritedRules.map(function(ruleTexts) {
                                    return {
                                        matchedCSSRules: ruleTexts.map(function(rule, i) {
                                            return ruleToRuleMatch(rule, i + styleRules.length);
                                        })
                                    };
                                });
                                return [
                                    4,
                                    createMatchedStyles({
                                        matchedPayload: matchedPayload,
                                        inheritedPayload: inheritedPayload
                                    })
                                ];
                            case 1:
                                matchedStyles = _state.sent();
                                return [
                                    2,
                                    (_matchedStyles_computeCSSVariable_value = (_matchedStyles_computeCSSVariable = matchedStyles.computeCSSVariable(matchedStyles.nodeStyles()[0], name)) === null || _matchedStyles_computeCSSVariable === void 0 ? void 0 : _matchedStyles_computeCSSVariable.value) !== null && _matchedStyles_computeCSSVariable_value !== void 0 ? _matchedStyles_computeCSSVariable_value : null
                                ];
                        }
                    });
                });
                return _compute.apply(this, arguments);
            }
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        simpleCycle = "\n        --a: var(--b);\n        --b: var(--a);\n        ";
                        _ = assert.strictEqual;
                        return [
                            4,
                            compute('--a', [
                                simpleCycle
                            ], [])
                        ];
                    case 1:
                        _.apply(assert, [
                            _state.sent(),
                            null
                        ]);
                        _1 = assert.strictEqual;
                        return [
                            4,
                            compute('--b', [
                                simpleCycle
                            ], [])
                        ];
                    case 2:
                        _1.apply(assert, [
                            _state.sent(),
                            null
                        ]);
                        cycleOnUnusedFallback = "\n        --a: 2;\n        --b: var(--a, var(--c));\n        --c: var(--b);\n        ";
                        _2 = assert.strictEqual;
                        return [
                            4,
                            compute('--a', [
                                cycleOnUnusedFallback
                            ], [])
                        ];
                    case 3:
                        _2.apply(assert, [
                            _state.sent(),
                            '2'
                        ]);
                        _3 = assert.strictEqual;
                        return [
                            4,
                            compute('--b', [
                                cycleOnUnusedFallback
                            ], [])
                        ];
                    case 4:
                        _3.apply(assert, [
                            _state.sent(),
                            '2'
                        ]);
                        _4 = assert.strictEqual;
                        return [
                            4,
                            compute('--c', [
                                cycleOnUnusedFallback
                            ], [])
                        ];
                    case 5:
                        _4.apply(assert, [
                            _state.sent(),
                            '2'
                        ]);
                        simpleCycleWithFallbacks = "\n        --a: var(--b, 1);\n        --b: var(--a, 2);\n        ";
                        _5 = assert.strictEqual;
                        return [
                            4,
                            compute('--a', [
                                simpleCycleWithFallbacks
                            ], [])
                        ];
                    case 6:
                        _5.apply(assert, [
                            _state.sent(),
                            null
                        ]);
                        _6 = assert.strictEqual;
                        return [
                            4,
                            compute('--b', [
                                simpleCycleWithFallbacks
                            ], [])
                        ];
                    case 7:
                        _6.apply(assert, [
                            _state.sent(),
                            null
                        ]);
                        longerCycle = "\n        --a: var(--b);\n        --b: var(--c);\n        --c: var(--a);\n        ";
                        _7 = assert.strictEqual;
                        return [
                            4,
                            compute('--a', [
                                longerCycle
                            ], [])
                        ];
                    case 8:
                        _7.apply(assert, [
                            _state.sent(),
                            null
                        ]);
                        _8 = assert.strictEqual;
                        return [
                            4,
                            compute('--b', [
                                longerCycle
                            ], [])
                        ];
                    case 9:
                        _8.apply(assert, [
                            _state.sent(),
                            null
                        ]);
                        _9 = assert.strictEqual;
                        return [
                            4,
                            compute('--c', [
                                longerCycle
                            ], [])
                        ];
                    case 10:
                        _9.apply(assert, [
                            _state.sent(),
                            null
                        ]);
                        longerCycleWithFallbacks = "\n        --a: var(--b, 2);\n        --b: var(--c, 3);\n        --c: var(--a, 4);\n        ";
                        _10 = assert.strictEqual;
                        return [
                            4,
                            compute('--a', [
                                longerCycleWithFallbacks
                            ], [])
                        ];
                    case 11:
                        _10.apply(assert, [
                            _state.sent(),
                            null
                        ]);
                        _11 = assert.strictEqual;
                        return [
                            4,
                            compute('--b', [
                                longerCycleWithFallbacks
                            ], [])
                        ];
                    case 12:
                        _11.apply(assert, [
                            _state.sent(),
                            null
                        ]);
                        _12 = assert.strictEqual;
                        return [
                            4,
                            compute('--c', [
                                longerCycleWithFallbacks
                            ], [])
                        ];
                    case 13:
                        _12.apply(assert, [
                            _state.sent(),
                            null
                        ]);
                        pointingIntoCycle = "\n        ".concat(longerCycle, "\n        --d: var(--a);\n        --e: var(--b);\n        ");
                        _13 = assert.strictEqual;
                        return [
                            4,
                            compute('--a', [
                                pointingIntoCycle
                            ], [])
                        ];
                    case 14:
                        _13.apply(assert, [
                            _state.sent(),
                            null
                        ]);
                        _14 = assert.strictEqual;
                        return [
                            4,
                            compute('--b', [
                                pointingIntoCycle
                            ], [])
                        ];
                    case 15:
                        _14.apply(assert, [
                            _state.sent(),
                            null
                        ]);
                        _15 = assert.strictEqual;
                        return [
                            4,
                            compute('--c', [
                                pointingIntoCycle
                            ], [])
                        ];
                    case 16:
                        _15.apply(assert, [
                            _state.sent(),
                            null
                        ]);
                        _16 = assert.strictEqual;
                        return [
                            4,
                            compute('--d', [
                                pointingIntoCycle
                            ], [])
                        ];
                    case 17:
                        _16.apply(assert, [
                            _state.sent(),
                            null
                        ]);
                        _17 = assert.strictEqual;
                        return [
                            4,
                            compute('--e', [
                                pointingIntoCycle
                            ], [])
                        ];
                    case 18:
                        _17.apply(assert, [
                            _state.sent(),
                            null
                        ]);
                        pointingIntoCycleWithFallback = "\n        ".concat(longerCycle, "\n        --d: var(--a, 4);\n        --e: var(--b, 5);\n        ");
                        _18 = assert.strictEqual;
                        return [
                            4,
                            compute('--a', [
                                pointingIntoCycleWithFallback
                            ], [])
                        ];
                    case 19:
                        _18.apply(assert, [
                            _state.sent(),
                            null
                        ]);
                        _19 = assert.strictEqual;
                        return [
                            4,
                            compute('--b', [
                                pointingIntoCycleWithFallback
                            ], [])
                        ];
                    case 20:
                        _19.apply(assert, [
                            _state.sent(),
                            null
                        ]);
                        _20 = assert.strictEqual;
                        return [
                            4,
                            compute('--c', [
                                pointingIntoCycleWithFallback
                            ], [])
                        ];
                    case 21:
                        _20.apply(assert, [
                            _state.sent(),
                            null
                        ]);
                        _21 = assert.strictEqual;
                        return [
                            4,
                            compute('--d', [
                                pointingIntoCycleWithFallback
                            ], [])
                        ];
                    case 22:
                        _21.apply(assert, [
                            _state.sent(),
                            '4'
                        ]);
                        _22 = assert.strictEqual;
                        return [
                            4,
                            compute('--e', [
                                pointingIntoCycleWithFallback
                            ], [])
                        ];
                    case 23:
                        _22.apply(assert, [
                            _state.sent(),
                            '5'
                        ]);
                        multipleEdges = "\n        --a: var(--b);\n        --b: var(--c) var(--d);\n        --c: var(--a) var(--b);\n        --d: var(--c);\n        ";
                        _23 = assert.strictEqual;
                        return [
                            4,
                            compute('--a', [
                                multipleEdges
                            ], [])
                        ];
                    case 24:
                        _23.apply(assert, [
                            _state.sent(),
                            null
                        ]);
                        _24 = assert.strictEqual;
                        return [
                            4,
                            compute('--b', [
                                multipleEdges
                            ], [])
                        ];
                    case 25:
                        _24.apply(assert, [
                            _state.sent(),
                            null
                        ]);
                        _25 = assert.strictEqual;
                        return [
                            4,
                            compute('--c', [
                                multipleEdges
                            ], [])
                        ];
                    case 26:
                        _25.apply(assert, [
                            _state.sent(),
                            null
                        ]);
                        _26 = assert.strictEqual;
                        return [
                            4,
                            compute('--d', [
                                multipleEdges
                            ], [])
                        ];
                    case 27:
                        _26.apply(assert, [
                            _state.sent(),
                            null
                        ]);
                        pointingIntoMultipleEdgeCycle = "\n        ".concat(multipleEdges, "\n        --e: var(--c) var(--d);\n        ");
                        _27 = assert.strictEqual;
                        return [
                            4,
                            compute('--a', [
                                pointingIntoMultipleEdgeCycle
                            ], [])
                        ];
                    case 28:
                        _27.apply(assert, [
                            _state.sent(),
                            null
                        ]);
                        _28 = assert.strictEqual;
                        return [
                            4,
                            compute('--b', [
                                pointingIntoMultipleEdgeCycle
                            ], [])
                        ];
                    case 29:
                        _28.apply(assert, [
                            _state.sent(),
                            null
                        ]);
                        _29 = assert.strictEqual;
                        return [
                            4,
                            compute('--c', [
                                pointingIntoMultipleEdgeCycle
                            ], [])
                        ];
                    case 30:
                        _29.apply(assert, [
                            _state.sent(),
                            null
                        ]);
                        _30 = assert.strictEqual;
                        return [
                            4,
                            compute('--d', [
                                pointingIntoMultipleEdgeCycle
                            ], [])
                        ];
                    case 31:
                        _30.apply(assert, [
                            _state.sent(),
                            null
                        ]);
                        _31 = assert.strictEqual;
                        return [
                            4,
                            compute('--e', [
                                pointingIntoMultipleEdgeCycle
                            ], [])
                        ];
                    case 32:
                        _31.apply(assert, [
                            _state.sent(),
                            null
                        ]);
                        pointingIntoMultipleEdgeCycleWithFallback = "\n        ".concat(multipleEdges, "\n        --e: var(--c, 4) var(--d, 5);\n        ");
                        _32 = assert.strictEqual;
                        return [
                            4,
                            compute('--a', [
                                pointingIntoMultipleEdgeCycleWithFallback
                            ], [])
                        ];
                    case 33:
                        _32.apply(assert, [
                            _state.sent(),
                            null
                        ]);
                        _33 = assert.strictEqual;
                        return [
                            4,
                            compute('--b', [
                                pointingIntoMultipleEdgeCycleWithFallback
                            ], [])
                        ];
                    case 34:
                        _33.apply(assert, [
                            _state.sent(),
                            null
                        ]);
                        _34 = assert.strictEqual;
                        return [
                            4,
                            compute('--c', [
                                pointingIntoMultipleEdgeCycleWithFallback
                            ], [])
                        ];
                    case 35:
                        _34.apply(assert, [
                            _state.sent(),
                            null
                        ]);
                        _35 = assert.strictEqual;
                        return [
                            4,
                            compute('--d', [
                                pointingIntoMultipleEdgeCycleWithFallback
                            ], [])
                        ];
                    case 36:
                        _35.apply(assert, [
                            _state.sent(),
                            null
                        ]);
                        _36 = assert.strictEqual;
                        return [
                            4,
                            compute('--e', [
                                pointingIntoMultipleEdgeCycleWithFallback
                            ], [])
                        ];
                    case 37:
                        _36.apply(assert, [
                            _state.sent(),
                            '4 5'
                        ]);
                        multipleCyclesWithFallback = "\n        ".concat(longerCycle, "\n        --d: var(--e);\n        --e: var(--f);\n        --f: var(--d);\n        --g: var(--a, var(--d, 5));\n        ");
                        _37 = assert.strictEqual;
                        return [
                            4,
                            compute('--a', [
                                multipleCyclesWithFallback
                            ], [])
                        ];
                    case 38:
                        _37.apply(assert, [
                            _state.sent(),
                            null
                        ]);
                        _38 = assert.strictEqual;
                        return [
                            4,
                            compute('--b', [
                                multipleCyclesWithFallback
                            ], [])
                        ];
                    case 39:
                        _38.apply(assert, [
                            _state.sent(),
                            null
                        ]);
                        _39 = assert.strictEqual;
                        return [
                            4,
                            compute('--c', [
                                multipleCyclesWithFallback
                            ], [])
                        ];
                    case 40:
                        _39.apply(assert, [
                            _state.sent(),
                            null
                        ]);
                        _40 = assert.strictEqual;
                        return [
                            4,
                            compute('--d', [
                                multipleCyclesWithFallback
                            ], [])
                        ];
                    case 41:
                        _40.apply(assert, [
                            _state.sent(),
                            null
                        ]);
                        _41 = assert.strictEqual;
                        return [
                            4,
                            compute('--e', [
                                multipleCyclesWithFallback
                            ], [])
                        ];
                    case 42:
                        _41.apply(assert, [
                            _state.sent(),
                            null
                        ]);
                        _42 = assert.strictEqual;
                        return [
                            4,
                            compute('--f', [
                                multipleCyclesWithFallback
                            ], [])
                        ];
                    case 43:
                        _42.apply(assert, [
                            _state.sent(),
                            null
                        ]);
                        _43 = assert.strictEqual;
                        return [
                            4,
                            compute('--g', [
                                multipleCyclesWithFallback
                            ], [])
                        ];
                    case 44:
                        _43.apply(assert, [
                            _state.sent(),
                            '5'
                        ]);
                        notACycle = "\n        --a: var(--b, 1);\n        ";
                        inherited = "\n        --a: var(--b);\n        --b: var(--a);\n        ";
                        _44 = assert.strictEqual;
                        return [
                            4,
                            compute('--a', [
                                notACycle
                            ], [
                                [
                                    inherited
                                ]
                            ])
                        ];
                    case 45:
                        _44.apply(assert, [
                            _state.sent(),
                            '1'
                        ]);
                        _45 = assert.strictEqual;
                        return [
                            4,
                            compute('--b', [
                                notACycle
                            ], [
                                [
                                    inherited
                                ]
                            ])
                        ];
                    case 46:
                        _45.apply(assert, [
                            _state.sent(),
                            null
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    it('does not hide inherited rules that also apply directly to the node if it contains custom properties', /*#__PURE__*/ _async_to_generator(function() {
        var parentNode, node, startColumn, endColumn, matchedPayload, inheritedPayload, matchedStyles;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    parentNode = sinon.createStubInstance(_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMModel.DOMNode);
                    parentNode.id = 0;
                    node = sinon.createStubInstance(_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMModel.DOMNode);
                    node.parentNode = parentNode;
                    node.id = 1;
                    startColumn = 0, endColumn = 1;
                    matchedPayload = [
                        ruleMatch('body', [
                            {
                                name: '--var',
                                value: 'blue'
                            }
                        ], {
                            startLine: 0,
                            startColumn: startColumn,
                            endLine: 0,
                            endColumn: endColumn
                        }),
                        ruleMatch('*', [
                            {
                                name: 'color',
                                value: 'var(--var)'
                            }
                        ], {
                            startLine: 1,
                            startColumn: startColumn,
                            endLine: 1,
                            endColumn: endColumn
                        }),
                        ruleMatch('*', [
                            {
                                name: '--var',
                                value: 'red'
                            }
                        ], {
                            startLine: 2,
                            startColumn: startColumn,
                            endLine: 2,
                            endColumn: endColumn
                        })
                    ];
                    inheritedPayload = [
                        {
                            matchedCSSRules: matchedPayload.slice(1)
                        }
                    ];
                    return [
                        4,
                        createMatchedStyles({
                            node: node,
                            matchedPayload: matchedPayload,
                            inheritedPayload: inheritedPayload
                        })
                    ];
                case 1:
                    matchedStyles = _state.sent();
                    assert.deepStrictEqual(matchedStyles.nodeStyles().map(function(style) {
                        return style.allProperties().map(function(prop) {
                            return prop.propertyText;
                        });
                    }), [
                        [
                            '--var: red;'
                        ],
                        [
                            'color: var(--var);'
                        ],
                        [
                            '--var: blue;'
                        ],
                        [
                            '--var: red;'
                        ]
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
});
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.describeWithMockConnection)('NodeCascade', function() {
    it('correctly marks custom properties as Overloaded if they are registered as inherits: false', /*#__PURE__*/ _async_to_generator(function() {
        var target, cssModel, parentNode, node, inheritablePropertyPayload, nonInheritablePropertyPayload, matchedCSSRules, cssPropertyRegistrations, matchedStyles, style, _style_allProperties, inheritableProperty, nonInheritableProperty;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
                    cssModel = new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.CSSModel.CSSModel(target);
                    parentNode = sinon.createStubInstance(_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMModel.DOMNode);
                    parentNode.id = 0;
                    node = sinon.createStubInstance(_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMModel.DOMNode);
                    node.parentNode = parentNode;
                    node.id = 1;
                    inheritablePropertyPayload = {
                        name: '--inheritable',
                        value: 'green'
                    };
                    nonInheritablePropertyPayload = {
                        name: '--non-inheritable',
                        value: 'green'
                    };
                    matchedCSSRules = [
                        {
                            matchingSelectors: [
                                0
                            ],
                            rule: {
                                selectorList: {
                                    selectors: [
                                        {
                                            text: 'div'
                                        }
                                    ],
                                    text: 'div'
                                },
                                origin: "regular" /* Protocol.CSS.StyleSheetOrigin.Regular */ ,
                                style: {
                                    cssProperties: [
                                        inheritablePropertyPayload,
                                        nonInheritablePropertyPayload
                                    ],
                                    shorthandEntries: []
                                }
                            }
                        }
                    ];
                    cssPropertyRegistrations = [
                        {
                            propertyName: inheritablePropertyPayload.name,
                            initialValue: {
                                text: 'blue'
                            },
                            inherits: true,
                            syntax: '<color>'
                        },
                        {
                            propertyName: nonInheritablePropertyPayload.name,
                            initialValue: {
                                text: 'red'
                            },
                            inherits: false,
                            syntax: '<color>'
                        }
                    ];
                    return [
                        4,
                        createMatchedStyles({
                            cssModel: cssModel,
                            node: node,
                            matchedPayload: [
                                ruleMatch('div', [])
                            ],
                            inheritedPayload: [
                                {
                                    matchedCSSRules: matchedCSSRules
                                }
                            ],
                            cssPropertyRegistrations: cssPropertyRegistrations
                        })
                    ];
                case 1:
                    matchedStyles = _state.sent();
                    style = matchedStyles.nodeStyles()[1];
                    _style_allProperties = _sliced_to_array(style.allProperties(), 2), inheritableProperty = _style_allProperties[0], nonInheritableProperty = _style_allProperties[1];
                    assert.strictEqual(matchedStyles.propertyState(nonInheritableProperty), "Overloaded" /* SDK.CSSMatchedStyles.PropertyState.Overloaded */ );
                    assert.strictEqual(matchedStyles.propertyState(inheritableProperty), "Active" /* SDK.CSSMatchedStyles.PropertyState.Active */ );
                    return [
                        2
                    ];
            }
        });
    }));
    it('correctly computes active properties for nested at-rules', /*#__PURE__*/ _async_to_generator(function() {
        var outerRule, nestedRule, matchedStyles;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    outerRule = ruleMatch('a', [
                        {
                            name: 'color',
                            value: 'var(--inner)'
                        }
                    ]);
                    nestedRule = ruleMatch('&', [
                        {
                            name: '--inner',
                            value: 'red'
                        }
                    ]);
                    nestedRule.rule.nestingSelectors = [
                        'a'
                    ];
                    nestedRule.rule.selectorList = {
                        selectors: [],
                        text: '&'
                    };
                    nestedRule.rule.supports = [
                        {
                            'text': '(--var:s)',
                            'active': true,
                            styleSheetId: nestedRule.rule.styleSheetId
                        }
                    ];
                    return [
                        4,
                        createMatchedStyles({
                            matchedPayload: [
                                outerRule,
                                nestedRule
                            ]
                        })
                    ];
                case 1:
                    matchedStyles = _state.sent();
                    assert.deepEqual(matchedStyles.availableCSSVariables(matchedStyles.nodeStyles()[0]), [
                        '--inner'
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=CSSMatchedStyles.test.js.map


}),

}]);