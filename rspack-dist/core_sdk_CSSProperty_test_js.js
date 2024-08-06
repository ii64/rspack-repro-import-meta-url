"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_sdk_CSSProperty_test_js"], {
"./core/sdk/CSSProperty.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sdk.js */ "./core/sdk/sdk.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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


(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithEnvironment)('CSSProperty', function() {
    describe('formatStyle', function() {
        var formatStyle = function(styleText) {
            var indentation = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ' ', endIndentation = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '';
            return _sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSProperty.CSSProperty.formatStyle(styleText, indentation, endIndentation);
        };
        it('formats a style declaration with a single trailing semicolon correctly', /*#__PURE__*/ _async_to_generator(function() {
            var _;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _ = assert.strictEqual;
                        return [
                            4,
                            formatStyle('color: red;')
                        ];
                    case 1:
                        _.apply(assert, [
                            _state.sent(),
                            '\n color: red;\n'
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('formats a style declaration with multiple trailing semicolons correctly', /*#__PURE__*/ _async_to_generator(function() {
            var _;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _ = assert.strictEqual;
                        return [
                            4,
                            formatStyle('color: red;;;')
                        ];
                    case 1:
                        _.apply(assert, [
                            _state.sent(),
                            '\n color: red;\n'
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('formats two style declarations correctly', /*#__PURE__*/ _async_to_generator(function() {
            var _;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _ = assert.strictEqual;
                        return [
                            4,
                            formatStyle('color: red;;;color: blue')
                        ];
                    case 1:
                        _.apply(assert, [
                            _state.sent(),
                            '\n color: red;\n color: blue\n'
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('formats multiple style declarations correctly', /*#__PURE__*/ _async_to_generator(function() {
            var _;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _ = assert.strictEqual;
                        return [
                            4,
                            formatStyle('color: var(-);margin: 0;padding:0')
                        ];
                    case 1:
                        _.apply(assert, [
                            _state.sent(),
                            '\n color: var(-);margin: 0;padding:0\n'
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('formats style declarations with comments correctly', /*#__PURE__*/ _async_to_generator(function() {
            var _;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _ = assert.strictEqual;
                        return [
                            4,
                            formatStyle('color: red;/* a comment */;color: blue')
                        ];
                    case 1:
                        _.apply(assert, [
                            _state.sent(),
                            '\n color: red;/* a comment */\n color: blue\n'
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('formats an empty decalaration correctly', /*#__PURE__*/ _async_to_generator(function() {
            var _;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _ = assert.strictEqual;
                        return [
                            4,
                            formatStyle(':; color: red; color: blue')
                        ];
                    case 1:
                        _.apply(assert, [
                            _state.sent(),
                            ':;\n color: red;\n color: blue\n'
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('formats an empty decalaration correctly and doesn\'t format comments', /*#__PURE__*/ _async_to_generator(function() {
            var _;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _ = assert.strictEqual;
                        return [
                            4,
                            formatStyle('color: red;/* a comment;;; */ :; color: blue;')
                        ];
                    case 1:
                        _.apply(assert, [
                            _state.sent(),
                            '\n color: red;/* a comment;;; */ :;\n color: blue;\n'
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('formats a decalaration with line names correctly', /*#__PURE__*/ _async_to_generator(function() {
            var _;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _ = assert.strictEqual;
                        return [
                            4,
                            formatStyle('grid: [first-row-start] "a a" 10px [first-row-end] [second-row-start] "b b" 20px / 100px')
                        ];
                    case 1:
                        _.apply(assert, [
                            _state.sent(),
                            '\n grid: [first-row-start] "a a" 10px [first-row-end] [second-row-start] "b b" 20px / 100px\n'
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('formats shorthand declaration with a variable correctly', /*#__PURE__*/ _async_to_generator(function() {
            var _;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _ = assert.strictEqual;
                        return [
                            4,
                            formatStyle('border: 1px solid var(--border-color);;', '', '')
                        ];
                    case 1:
                        _.apply(assert, [
                            _state.sent(),
                            'border: 1px solid var(--border-color);'
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('formats shorthand declaration with a function correctly', /*#__PURE__*/ _async_to_generator(function() {
            var _;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _ = assert.strictEqual;
                        return [
                            4,
                            formatStyle('border: 1px solid rgb(0,0,0);;', '', '')
                        ];
                    case 1:
                        _.apply(assert, [
                            _state.sent(),
                            'border: 1px solid rgb(0,0,0);'
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('formats declaration with unknown property that contains a function correctly', /*#__PURE__*/ _async_to_generator(function() {
            var _;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _ = assert.strictEqual;
                        return [
                            4,
                            formatStyle('unknownProperty: rgba(0,0,0,0);;', '', '')
                        ];
                    case 1:
                        _.apply(assert, [
                            _state.sent(),
                            'unknownProperty: rgba(0,0,0,0);'
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        // Regression test for crbug/1392813
        it('formats complex CSS variable declaration', /*#__PURE__*/ _async_to_generator(function() {
            var _;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _ = assert.strictEqual;
                        return [
                            4,
                            formatStyle('--_name: background var(--another-name)', '', '')
                        ];
                    case 1:
                        _.apply(assert, [
                            _state.sent(),
                            '--_name: background var(--another-name)'
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        // Regression test for crbug/1518839
        it('formats CSS variable declarations without newline at the start of the var params', /*#__PURE__*/ _async_to_generator(function() {
            var _;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _ = assert.strictEqual;
                        return [
                            4,
                            formatStyle('--b: var(--non-existent, 2);')
                        ];
                    case 1:
                        _.apply(assert, [
                            _state.sent(),
                            '\n --b: var(--non-existent, 2);\n'
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    it('should correctly construct new CSSProperty', function() {
        var stubStyle = {};
        var property1 = new _sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSProperty.CSSProperty(stubStyle, 0, 'display', 'block', false, false, true, false, 'display: block');
        assert.deepEqual(property1.getLonghandProperties(), []);
        var stubLonghands = [
            {
                name: 'margin-top',
                value: '1px'
            },
            {
                name: 'margin-right',
                value: '1px'
            },
            {
                name: 'margin-bottom',
                value: '1px'
            },
            {
                name: 'margin-left',
                value: '1px'
            }
        ];
        var property2 = new _sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSProperty.CSSProperty(stubStyle, 1, 'margin', '1px', false, false, true, false, 'margin: 1px', undefined, stubLonghands);
        assert.deepEqual(property2.getLonghandProperties().map(function(property) {
            return property.propertyText;
        }), [
            'margin-top: 1px;',
            'margin-right: 1px;',
            'margin-bottom: 1px;',
            'margin-left: 1px;'
        ], 'supplied longhand components should be added correctly');
        var property3 = new _sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSProperty.CSSProperty(stubStyle, 1, 'margin', 'var(--margin)', false, false, true, false, 'margin: var(--margin)', undefined, []);
        assert.deepEqual(property3.getLonghandProperties().map(function(property) {
            return property.propertyText;
        }), [
            'margin-top: ;',
            'margin-right: ;',
            'margin-bottom: ;',
            'margin-left: ;'
        ], 'locally added longhand components should be parsed with empty values');
    });
    it('should correctly disable CSS property', /*#__PURE__*/ _async_to_generator(function() {
        var stubStyle, setText, property, propertyWithComment, propertyWithMultilineComment;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    stubStyle = {};
                    setText = sinon.spy();
                    property = new _sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSProperty.CSSProperty(stubStyle, 0, 'margin', '10px', false, false, true, false, 'margin: 10px');
                    property.setText = setText;
                    return [
                        4,
                        property.setDisabled(true)
                    ];
                case 1:
                    _state.sent();
                    assert.strictEqual(setText.firstCall.firstArg, '/* margin: 10px; */');
                    propertyWithComment = new _sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSProperty.CSSProperty(stubStyle, 0, 'margin', '/* comment */ 10px', false, false, true, false, 'margin: /* comment */ 10px');
                    propertyWithComment.setText = setText;
                    return [
                        4,
                        propertyWithComment.setDisabled(true)
                    ];
                case 2:
                    _state.sent();
                    assert.strictEqual(setText.secondCall.firstArg, '/* margin:  10px; */');
                    propertyWithMultilineComment = new _sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSProperty.CSSProperty(stubStyle, 0, 'margin', '/* com\nment */ 10px', false, false, true, false, 'margin: /* com\nment */ 10px');
                    propertyWithMultilineComment.setText = setText;
                    return [
                        4,
                        propertyWithMultilineComment.setDisabled(true)
                    ];
                case 3:
                    _state.sent();
                    assert.strictEqual(setText.thirdCall.firstArg, '/* margin:  10px; */');
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=CSSProperty.test.js.map


}),

}]);