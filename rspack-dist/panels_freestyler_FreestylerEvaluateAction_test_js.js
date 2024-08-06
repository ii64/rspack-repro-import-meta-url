"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_freestyler_FreestylerEvaluateAction_test_js"], {
"./panels/freestyler/FreestylerEvaluateAction.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_RealConnection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/RealConnection.js */ "./testing/RealConnection.js");
/* harmony import */var _FreestylerEvaluateAction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FreestylerEvaluateAction.js */ "./panels/freestyler/FreestylerEvaluateAction.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
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



describe('FreestylerEvaluateAction', function() {
    describe('error handling', function() {
        var executeWithResult = function executeWithResult(mockResult) {
            var executionContextStub = sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RuntimeModel.ExecutionContext);
            executionContextStub.evaluate.resolves(mockResult);
            return _FreestylerEvaluateAction_js__WEBPACK_IMPORTED_MODULE_2__.FreestylerEvaluateAction.execute('', executionContextStub, {
                throwOnSideEffect: false
            });
        };
        var mockRemoteObject = function mockRemoteObject() {
            var overrides = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            return sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RemoteObject.RemoteObject, _object_spread({}, overrides.className ? {
                className: overrides.className
            } : null, overrides.subtype ? {
                subtype: overrides.subtype
            } : null, overrides.type ? {
                type: overrides.type
            } : null, overrides.value ? {
                value: overrides.value
            } : null, overrides.preview ? {
                preview: overrides.preview
            } : null));
        };
        var mockExceptionDetails = function mockExceptionDetails(param) {
            var description = param.description;
            return {
                exceptionId: 3,
                text: 'SyntaxError',
                lineNumber: 3,
                columnNumber: 3,
                exception: {
                    type: "string" /* Protocol.Runtime.RemoteObjectType.String */ ,
                    description: description
                }
            };
        };
        beforeEach(function() {
            sinon.restore();
        });
        it('should throw an ExecutionError when the page returned with an error message', /*#__PURE__*/ _async_to_generator(function() {
            var err;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _state.trys.push([
                            0,
                            2,
                            ,
                            3
                        ]);
                        return [
                            4,
                            executeWithResult({
                                error: 'errorMessage'
                            })
                        ];
                    case 1:
                        _state.sent();
                        return [
                            3,
                            3
                        ];
                    case 2:
                        err = _state.sent();
                        assert.instanceOf(err, _FreestylerEvaluateAction_js__WEBPACK_IMPORTED_MODULE_2__.ExecutionError);
                        assert.strictEqual(err.message, 'errorMessage');
                        return [
                            3,
                            3
                        ];
                    case 3:
                        return [
                            2
                        ];
                }
            });
        }));
        it('should throw an ExecutionError with the description of the exception if response included exception details', /*#__PURE__*/ _async_to_generator(function() {
            var err;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _state.trys.push([
                            0,
                            2,
                            ,
                            3
                        ]);
                        return [
                            4,
                            executeWithResult({
                                object: mockRemoteObject(),
                                exceptionDetails: mockExceptionDetails({
                                    description: 'Error description'
                                })
                            })
                        ];
                    case 1:
                        _state.sent();
                        return [
                            3,
                            3
                        ];
                    case 2:
                        err = _state.sent();
                        assert.instanceOf(err, _FreestylerEvaluateAction_js__WEBPACK_IMPORTED_MODULE_2__.ExecutionError);
                        assert.strictEqual(err.message, 'Error description');
                        return [
                            3,
                            3
                        ];
                    case 3:
                        return [
                            2
                        ];
                }
            });
        }));
        it('should throw a SideEffectError when the resulted exception starts with possible side effect error', /*#__PURE__*/ _async_to_generator(function() {
            var err;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _state.trys.push([
                            0,
                            2,
                            ,
                            3
                        ]);
                        return [
                            4,
                            executeWithResult({
                                object: mockRemoteObject(),
                                exceptionDetails: mockExceptionDetails({
                                    description: 'EvalError: Possible side-effect in debug-evaluate'
                                })
                            })
                        ];
                    case 1:
                        _state.sent();
                        return [
                            3,
                            3
                        ];
                    case 2:
                        err = _state.sent();
                        assert.instanceOf(err, _FreestylerEvaluateAction_js__WEBPACK_IMPORTED_MODULE_2__.SideEffectError);
                        assert.strictEqual(err.message, 'EvalError: Possible side-effect in debug-evaluate');
                        return [
                            3,
                            3
                        ];
                    case 3:
                        return [
                            2
                        ];
                }
            });
        }));
    });
    (0,_testing_RealConnection_js__WEBPACK_IMPORTED_MODULE_1__.describeWithRealConnection)('serialization', function() {
        var executionContextForTest = function executionContextForTest() {
            return _executionContextForTest.apply(this, arguments);
        };
        var executeForTest = function executeForTest(code) {
            return _executeForTest.apply(this, arguments);
        };
        function _executionContextForTest() {
            _executionContextForTest = _async_to_generator(function() {
                var targetManager, target, runtimeModel;
                return _ts_generator(this, function(_state) {
                    targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance();
                    target = targetManager.rootTarget();
                    runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RuntimeModel.RuntimeModel);
                    return [
                        2,
                        (0,_testing_RealConnection_js__WEBPACK_IMPORTED_MODULE_1__.getExecutionContext)(runtimeModel)
                    ];
                });
            });
            return _executionContextForTest.apply(this, arguments);
        }
        function _executeForTest() {
            _executeForTest = _async_to_generator(function(code) {
                var _, _1, _tmp;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            _1 = (_ = _FreestylerEvaluateAction_js__WEBPACK_IMPORTED_MODULE_2__.FreestylerEvaluateAction).execute;
                            _tmp = [
                                code
                            ];
                            return [
                                4,
                                executionContextForTest()
                            ];
                        case 1:
                            return [
                                2,
                                _1.apply(_, _tmp.concat([
                                    _state.sent(),
                                    {
                                        throwOnSideEffect: false
                                    }
                                ]))
                            ];
                    }
                });
            });
            return _executeForTest.apply(this, arguments);
        }
        it('should serialize primitive values correctly', /*#__PURE__*/ _async_to_generator(function() {
            var _, _1, _2, _3, _4, _5;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _ = assert.strictEqual;
                        return [
                            4,
                            executeForTest('"string"')
                        ];
                    case 1:
                        _.apply(assert, [
                            _state.sent(),
                            '\'string\''
                        ]);
                        _1 = assert.strictEqual;
                        return [
                            4,
                            executeForTest('999n')
                        ];
                    case 2:
                        _1.apply(assert, [
                            _state.sent(),
                            '999n'
                        ]);
                        _2 = assert.strictEqual;
                        return [
                            4,
                            executeForTest('true')
                        ];
                    case 3:
                        _2.apply(assert, [
                            _state.sent(),
                            'true'
                        ]);
                        _3 = assert.strictEqual;
                        return [
                            4,
                            executeForTest('undefined')
                        ];
                    case 4:
                        _3.apply(assert, [
                            _state.sent(),
                            'undefined'
                        ]);
                        _4 = assert.strictEqual;
                        return [
                            4,
                            executeForTest('42')
                        ];
                    case 5:
                        _4.apply(assert, [
                            _state.sent(),
                            '42'
                        ]);
                        _5 = assert.strictEqual;
                        return [
                            4,
                            executeForTest('Symbol("sym")')
                        ];
                    case 6:
                        _5.apply(assert, [
                            _state.sent(),
                            'Symbol(sym)'
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        describe('HTMLElement', function() {
            it('should work with plain nodes', /*#__PURE__*/ _async_to_generator(function() {
                var serializedElement;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                executeForTest("{\n          const el = document.createElement('div');\n\n          el;\n        }")
                            ];
                        case 1:
                            serializedElement = _state.sent();
                            assert.strictEqual(serializedElement, '"<div></div>"');
                            return [
                                2
                            ];
                    }
                });
            }));
            it('should serialize node with classes', /*#__PURE__*/ _async_to_generator(function() {
                var serializedElement;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                executeForTest("{\n          const el = document.createElement('div');\n          el.classList.add('section');\n          el.classList.add('section-main');\n\n          el;\n        }")
                            ];
                        case 1:
                            serializedElement = _state.sent();
                            assert.strictEqual(serializedElement, '"<div class=\\"section section-main\\"></div>"');
                            return [
                                2
                            ];
                    }
                });
            }));
            it('should serialize node with id', /*#__PURE__*/ _async_to_generator(function() {
                var serializedElement;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                executeForTest("{\n          const el = document.createElement('div');\n          el.id = 'promotion-section';\n\n          el;\n        }")
                            ];
                        case 1:
                            serializedElement = _state.sent();
                            assert.strictEqual(serializedElement, '"<div id=\\"promotion-section\\"></div>"');
                            return [
                                2
                            ];
                    }
                });
            }));
            it('should serialize node with class and id', /*#__PURE__*/ _async_to_generator(function() {
                var serializedElement;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                executeForTest("{\n          const el = document.createElement('div');\n          el.id = 'promotion-section';\n          el.classList.add('section');\n\n          el;\n        }")
                            ];
                        case 1:
                            serializedElement = _state.sent();
                            assert.strictEqual(serializedElement, '"<div id=\\"promotion-section\\" class=\\"section\\"></div>"');
                            return [
                                2
                            ];
                    }
                });
            }));
            it('should serialize node with children', /*#__PURE__*/ _async_to_generator(function() {
                var serializedElement;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                executeForTest("{\n          const el = document.createElement('div');\n          const p = document.createElement('p');\n          el.appendChild(p);\n\n          el;\n        }")
                            ];
                        case 1:
                            serializedElement = _state.sent();
                            assert.strictEqual(serializedElement, '"<div>...</div>"');
                            return [
                                2
                            ];
                    }
                });
            }));
        });
        it('should serialize arrays correctly', /*#__PURE__*/ _async_to_generator(function() {
            var _, _1, _2, _3;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _ = assert.strictEqual;
                        return [
                            4,
                            executeForTest('[]')
                        ];
                    case 1:
                        _.apply(assert, [
                            _state.sent(),
                            '[]'
                        ]);
                        _1 = assert.strictEqual;
                        return [
                            4,
                            executeForTest('[1]')
                        ];
                    case 2:
                        _1.apply(assert, [
                            _state.sent(),
                            '[1]'
                        ]);
                        _2 = assert.strictEqual;
                        return [
                            4,
                            executeForTest('[1, 2]')
                        ];
                    case 3:
                        _2.apply(assert, [
                            _state.sent(),
                            '[1,2]'
                        ]);
                        _3 = assert.strictEqual;
                        return [
                            4,
                            executeForTest('[{key: 1}]')
                        ];
                    case 4:
                        _3.apply(assert, [
                            _state.sent(),
                            '[{"key":1}]'
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('should serialize objects correctly', /*#__PURE__*/ _async_to_generator(function() {
            var _, _1, _2;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _ = assert.strictEqual;
                        return [
                            4,
                            executeForTest('{const object = {key: "str"}; object}')
                        ];
                    case 1:
                        _.apply(assert, [
                            _state.sent(),
                            '{"key":"str"}'
                        ]);
                        _1 = assert.strictEqual;
                        return [
                            4,
                            executeForTest('{const object = {key: "str", secondKey: "str2"}; object}')
                        ];
                    case 2:
                        _1.apply(assert, [
                            _state.sent(),
                            '{"key":"str","secondKey":"str2"}'
                        ]);
                        _2 = assert.strictEqual;
                        return [
                            4,
                            executeForTest('{const object = {key: 1}; object}')
                        ];
                    case 3:
                        _2.apply(assert, [
                            _state.sent(),
                            '{"key":1}'
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('should not continue serializing cycles', /*#__PURE__*/ _async_to_generator(function() {
            var _;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _ = assert.strictEqual;
                        return [
                            4,
                            executeForTest("{\n        const obj = { a: 1 };\n        obj.itself = obj;\n        obj\n      }")
                        ];
                    case 1:
                        _.apply(assert, [
                            _state.sent(),
                            '{"a":1,"itself":"(cycle)"}'
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('should not include number keys for CSSStyleDeclaration', /*#__PURE__*/ _async_to_generator(function() {
            var result, parsedResult;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            executeForTest('getComputedStyle(document.body)')
                        ];
                    case 1:
                        result = _state.sent();
                        parsedResult = JSON.parse(result);
                        assert.isUndefined(parsedResult[0]);
                        return [
                            2
                        ];
                }
            });
        }));
    });
}); //# sourceMappingURL=FreestylerEvaluateAction.test.js.map


}),

}]);