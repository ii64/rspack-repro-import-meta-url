"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_bidi_ExposedFunction_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/bidi/ExposedFunction.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ExposeableFunction: function() { return ExposeableFunction; }
});
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chromium-bidi/lib/cjs/protocol/protocol.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/EventEmitter.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/EventEmitter.js");
/* harmony import */var _common_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */var _util_disposable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/disposable.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/disposable.js");
/* harmony import */var _util_Function_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/Function.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/Function.js");
/* harmony import */var _ElementHandle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ElementHandle.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/ElementHandle.js");
/* harmony import */var _JSHandle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./JSHandle.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/JSHandle.js");
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ function _array_like_to_array(arr, len) {
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
function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}
function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get) {
        return descriptor.get.call(receiver);
    }
    return descriptor.value;
}
function _class_apply_descriptor_set(receiver, descriptor, value) {
    if (descriptor.set) {
        descriptor.set.call(receiver, value);
    } else {
        if (!descriptor.writable) {
            throw new TypeError("attempted to set read only private field");
        }
        descriptor.value = value;
    }
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
}
function _class_private_field_get(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "get");
    return _class_apply_descriptor_get(receiver, descriptor);
}
function _class_private_field_init(obj, privateMap, value) {
    _check_private_redeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
function _class_private_field_set(receiver, privateMap, value) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "set");
    _class_apply_descriptor_set(receiver, descriptor, value);
    return value;
}
function _class_private_method_get(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return fn;
}
function _class_private_method_init(obj, privateSet) {
    _check_private_redeclaration(obj, privateSet);
    privateSet.add(obj);
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
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
var __addDisposableResource = undefined && undefined.__addDisposableResource || function(env, value, async) {
    if (value !== null && value !== void 0) {
        if ((typeof value === "undefined" ? "undefined" : _type_of(value)) !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
};
var __disposeResources = undefined && undefined.__disposeResources || function(SuppressedError1) {
    return function(env) {
        function fail(e) {
            env.error = env.hasError ? new SuppressedError1(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        function next() {
            while(env.stack.length){
                var rec = env.stack.pop();
                try {
                    var result = rec.dispose && rec.dispose.call(rec.value);
                    if (rec.async) return Promise.resolve(result).then(next, function(e) {
                        fail(e);
                        return next();
                    });
                } catch (e) {
                    fail(e);
                }
            }
            if (env.hasError) throw env.error;
        }
        return next();
    };
}(typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
});







var _frame = /*#__PURE__*/ new WeakMap(), _apply = /*#__PURE__*/ new WeakMap(), _isolate = /*#__PURE__*/ new WeakMap(), _channel = /*#__PURE__*/ new WeakMap(), _scripts = /*#__PURE__*/ new WeakMap(), _disposables = /*#__PURE__*/ new WeakMap(), _initialize = /*#__PURE__*/ new WeakSet(), _connection = /*#__PURE__*/ new WeakMap(), _handleMessage = /*#__PURE__*/ new WeakMap(), _getRealm = /*#__PURE__*/ new WeakSet(), _findFrame = /*#__PURE__*/ new WeakSet();
var _Symbol_dispose = Symbol.dispose, _Symbol_asyncDispose = Symbol.asyncDispose;
/**
 * @internal
 */ var ExposeableFunction = /*#__PURE__*/ function() {
    "use strict";
    function ExposeableFunction(frame, name, apply) {
        var isolate = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
        _class_call_check(this, ExposeableFunction);
        _class_private_method_init(this, _initialize);
        _class_private_field_init(this, _connection, {
            get: get_connection,
            set: void 0
        });
        _class_private_method_init(this, _getRealm);
        _class_private_method_init(this, _findFrame);
        _class_private_field_init(this, _frame, {
            writable: true,
            value: void 0
        });
        _define_property(this, "name", void 0);
        _class_private_field_init(this, _apply, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _isolate, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _channel, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _scripts, {
            writable: true,
            value: []
        });
        _class_private_field_init(this, _disposables, {
            writable: true,
            value: new _util_disposable_js__WEBPACK_IMPORTED_MODULE_3__.DisposableStack()
        });
        var _this = this;
        _class_private_field_init(this, _handleMessage, {
            writable: true,
            value: function() {
                var _ref = _async_to_generator(function(params) {
                    var env_1, realm, dataHandle, argsHandle, _tmp, stack, args, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _step_value, index, handle, err, result, _$_class_private_field_get, _, _1, _tmp1, _2, _3, error, error1, error2, e_1;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                env_1 = {
                                    stack: [],
                                    error: void 0,
                                    hasError: false
                                };
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    25,
                                    26,
                                    27
                                ]);
                                if (params.channel !== _class_private_field_get(_this, _channel)) {
                                    return [
                                        2
                                    ];
                                }
                                realm = _class_private_method_get(_this, _getRealm, getRealm).call(_this, params.source);
                                if (!realm) {
                                    // Unrelated message.
                                    return [
                                        2
                                    ];
                                }
                                dataHandle = __addDisposableResource(env_1, _JSHandle_js__WEBPACK_IMPORTED_MODULE_6__.BidiJSHandle.from(params.data, realm), false);
                                _tmp = [
                                    env_1
                                ];
                                return [
                                    4,
                                    dataHandle.evaluateHandle(function(param) {
                                        var _param = _sliced_to_array(param, 3), args = _param[2];
                                        return args;
                                    })
                                ];
                            case 2:
                                argsHandle = __addDisposableResource.apply(void 0, _tmp.concat([
                                    _state.sent(),
                                    false
                                ]));
                                stack = __addDisposableResource(env_1, new _util_disposable_js__WEBPACK_IMPORTED_MODULE_3__.DisposableStack(), false);
                                args = [];
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                _state.label = 3;
                            case 3:
                                _state.trys.push([
                                    3,
                                    8,
                                    9,
                                    10
                                ]);
                                return [
                                    4,
                                    argsHandle.getProperties()
                                ];
                            case 4:
                                _iterator = _state.sent()[Symbol.iterator]();
                                _state.label = 5;
                            case 5:
                                if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                    3,
                                    7
                                ];
                                _step_value = _sliced_to_array(_step.value, 2), index = _step_value[0], handle = _step_value[1];
                                stack.use(handle);
                                // Element handles are passed as is.
                                if (_instanceof(handle, _ElementHandle_js__WEBPACK_IMPORTED_MODULE_5__.BidiElementHandle)) {
                                    args[+index] = handle;
                                    stack.use(handle);
                                    return [
                                        3,
                                        6
                                    ];
                                }
                                // Everything else is passed as the JS value.
                                args[+index] = handle.jsonValue();
                                _state.label = 6;
                            case 6:
                                _iteratorNormalCompletion = true;
                                return [
                                    3,
                                    5
                                ];
                            case 7:
                                return [
                                    3,
                                    10
                                ];
                            case 8:
                                err = _state.sent();
                                _didIteratorError = true;
                                _iteratorError = err;
                                return [
                                    3,
                                    10
                                ];
                            case 9:
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                                        _iterator.return();
                                    }
                                } finally{
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                                return [
                                    7
                                ];
                            case 10:
                                _state.trys.push([
                                    10,
                                    13,
                                    ,
                                    21
                                ]);
                                _1 = (_ = (_$_class_private_field_get = _class_private_field_get(_this, _apply)).call).apply;
                                _tmp1 = [
                                    _$_class_private_field_get
                                ];
                                _3 = (_2 = [
                                    _this
                                ]).concat;
                                return [
                                    4,
                                    Promise.all(args)
                                ];
                            case 11:
                                return [
                                    4,
                                    _1.apply(_, _tmp1.concat([
                                        _3.apply(_2, [
                                            _to_consumable_array.apply(void 0, [
                                                _state.sent()
                                            ])
                                        ])
                                    ]))
                                ];
                            case 12:
                                result = _state.sent();
                                return [
                                    3,
                                    21
                                ];
                            case 13:
                                error = _state.sent();
                                _state.label = 14;
                            case 14:
                                _state.trys.push([
                                    14,
                                    19,
                                    ,
                                    20
                                ]);
                                if (!_instanceof(error, Error)) return [
                                    3,
                                    16
                                ];
                                return [
                                    4,
                                    dataHandle.evaluate(function(param, name, message, stack) {
                                        var _param = _sliced_to_array(param, 2), reject = _param[1];
                                        var _$error = new Error(message);
                                        _$error.name = name;
                                        if (stack) {
                                            _$error.stack = stack;
                                        }
                                        reject(_$error);
                                    }, error.name, error.message, error.stack)
                                ];
                            case 15:
                                _state.sent();
                                return [
                                    3,
                                    18
                                ];
                            case 16:
                                return [
                                    4,
                                    dataHandle.evaluate(function(param, error) {
                                        var _param = _sliced_to_array(param, 2), reject = _param[1];
                                        reject(error);
                                    }, error)
                                ];
                            case 17:
                                _state.sent();
                                _state.label = 18;
                            case 18:
                                return [
                                    3,
                                    20
                                ];
                            case 19:
                                error1 = _state.sent();
                                (0,_common_util_js__WEBPACK_IMPORTED_MODULE_2__.debugError)(error1);
                                return [
                                    3,
                                    20
                                ];
                            case 20:
                                return [
                                    2
                                ];
                            case 21:
                                _state.trys.push([
                                    21,
                                    23,
                                    ,
                                    24
                                ]);
                                return [
                                    4,
                                    dataHandle.evaluate(function(param, result) {
                                        var _param = _sliced_to_array(param, 1), resolve = _param[0];
                                        resolve(result);
                                    }, result)
                                ];
                            case 22:
                                _state.sent();
                                return [
                                    3,
                                    24
                                ];
                            case 23:
                                error2 = _state.sent();
                                (0,_common_util_js__WEBPACK_IMPORTED_MODULE_2__.debugError)(error2);
                                return [
                                    3,
                                    24
                                ];
                            case 24:
                                return [
                                    3,
                                    27
                                ];
                            case 25:
                                e_1 = _state.sent();
                                env_1.error = e_1;
                                env_1.hasError = true;
                                return [
                                    3,
                                    27
                                ];
                            case 26:
                                __disposeResources(env_1);
                                return [
                                    7
                                ];
                            case 27:
                                return [
                                    2
                                ];
                        }
                    });
                });
                return function(params) {
                    return _ref.apply(this, arguments);
                };
            }()
        });
        _class_private_field_set(this, _frame, frame);
        this.name = name;
        _class_private_field_set(this, _apply, apply);
        _class_private_field_set(this, _isolate, isolate);
        _class_private_field_set(this, _channel, "__puppeteer__".concat(_class_private_field_get(this, _frame)._id, "_page_exposeFunction_").concat(this.name));
    }
    _create_class(ExposeableFunction, [
        {
            key: _Symbol_dispose,
            value: function value() {
                void this[Symbol.asyncDispose]().catch(_common_util_js__WEBPACK_IMPORTED_MODULE_2__.debugError);
            }
        },
        {
            key: _Symbol_asyncDispose,
            value: function value() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _class_private_field_get(_this, _disposables).dispose();
                                return [
                                    4,
                                    Promise.all(_class_private_field_get(_this, _scripts).map(function() {
                                        var _ref = _async_to_generator(function(param) {
                                            var _param, frame, script, realm, error;
                                            return _ts_generator(this, function(_state) {
                                                switch(_state.label){
                                                    case 0:
                                                        _param = _sliced_to_array(param, 2), frame = _param[0], script = _param[1];
                                                        realm = _class_private_field_get(_this, _isolate) ? frame.isolatedRealm() : frame.mainRealm();
                                                        _state.label = 1;
                                                    case 1:
                                                        _state.trys.push([
                                                            1,
                                                            3,
                                                            ,
                                                            4
                                                        ]);
                                                        return [
                                                            4,
                                                            Promise.all([
                                                                realm.evaluate(function(name) {
                                                                    delete globalThis[name];
                                                                }, _this.name)
                                                            ].concat(_to_consumable_array(frame.childFrames().map(function(childFrame) {
                                                                return childFrame.evaluate(function(name) {
                                                                    delete globalThis[name];
                                                                }, _this.name);
                                                            })), [
                                                                frame.browsingContext.removePreloadScript(script)
                                                            ]))
                                                        ];
                                                    case 2:
                                                        _state.sent();
                                                        return [
                                                            3,
                                                            4
                                                        ];
                                                    case 3:
                                                        error = _state.sent();
                                                        (0,_common_util_js__WEBPACK_IMPORTED_MODULE_2__.debugError)(error);
                                                        return [
                                                            3,
                                                            4
                                                        ];
                                                    case 4:
                                                        return [
                                                            2
                                                        ];
                                                }
                                            });
                                        });
                                        return function(_) {
                                            return _ref.apply(this, arguments);
                                        };
                                    }()))
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ], [
        {
            key: "from",
            value: function from(frame, name, apply) {
                var isolate = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
                return _async_to_generator(function() {
                    var func;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                func = new ExposeableFunction(frame, name, apply, isolate);
                                return [
                                    4,
                                    _class_private_method_get(func, _initialize, initialize).call(func)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2,
                                    func
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return ExposeableFunction;
} //# sourceMappingURL=ExposedFunction.js.map
();
function initialize() {
    return _initialize1.apply(this, arguments);
}
function _initialize1() {
    _initialize1 = _async_to_generator(function() {
        var connection, channel, connectionEmitter, functionDeclaration, frames, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, frame, _frames, _this;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    connection = _class_private_field_get(this, _connection);
                    channel = {
                        type: 'channel',
                        value: {
                            channel: _class_private_field_get(this, _channel),
                            ownership: "root" /* Bidi.Script.ResultOwnership.Root */ 
                        }
                    };
                    connectionEmitter = _class_private_field_get(this, _disposables).use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__.EventEmitter(connection));
                    connectionEmitter.on(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chromium-bidi/lib/cjs/protocol/protocol.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _class_private_field_get(this, _handleMessage));
                    functionDeclaration = (0,_util_Function_js__WEBPACK_IMPORTED_MODULE_4__.stringifyFunction)((0,_util_Function_js__WEBPACK_IMPORTED_MODULE_4__.interpolateFunction)(function(callback) {
                        Object.assign(globalThis, _define_property({}, PLACEHOLDER('name'), function() {
                            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                                args[_key] = arguments[_key];
                            }
                            return new Promise(function(resolve, reject) {
                                callback([
                                    resolve,
                                    reject,
                                    args
                                ]);
                            });
                        }));
                    }, {
                        name: JSON.stringify(this.name)
                    }));
                    frames = [
                        _class_private_field_get(this, _frame)
                    ];
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = frames[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            frame = _step.value;
                            ;
                            (_frames = frames).push.apply(_frames, _to_consumable_array(frame.childFrames()));
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
                    _this = this;
                    return [
                        4,
                        Promise.all(frames.map(function() {
                            var _ref = _async_to_generator(function(frame) {
                                var realm, _ref, script, error;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            realm = _class_private_field_get(_this, _isolate) ? frame.isolatedRealm() : frame.mainRealm();
                                            _state.label = 1;
                                        case 1:
                                            _state.trys.push([
                                                1,
                                                3,
                                                ,
                                                4
                                            ]);
                                            return [
                                                4,
                                                Promise.all([
                                                    frame.browsingContext.addPreloadScript(functionDeclaration, {
                                                        arguments: [
                                                            channel
                                                        ],
                                                        sandbox: realm.sandbox
                                                    }),
                                                    realm.realm.callFunction(functionDeclaration, false, {
                                                        arguments: [
                                                            channel
                                                        ]
                                                    })
                                                ])
                                            ];
                                        case 2:
                                            _ref = _sliced_to_array.apply(void 0, [
                                                _state.sent(),
                                                1
                                            ]), script = _ref[0];
                                            _class_private_field_get(_this, _scripts).push([
                                                frame,
                                                script
                                            ]);
                                            return [
                                                3,
                                                4
                                            ];
                                        case 3:
                                            error = _state.sent();
                                            // If it errors, the frame probably doesn't support call function. We
                                            // fail gracefully.
                                            (0,_common_util_js__WEBPACK_IMPORTED_MODULE_2__.debugError)(error);
                                            return [
                                                3,
                                                4
                                            ];
                                        case 4:
                                            return [
                                                2
                                            ];
                                    }
                                });
                            });
                            return function(frame) {
                                return _ref.apply(this, arguments);
                            };
                        }()))
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return _initialize1.apply(this, arguments);
}
function get_connection() {
    return _class_private_field_get(this, _frame).page().browser().connection;
}
function getRealm(source) {
    var frame = _class_private_method_get(this, _findFrame, findFrame).call(this, source.context);
    if (!frame) {
        // Unrelated message.
        return;
    }
    return frame.realm(source.realm);
}
function findFrame(id) {
    var frames = [
        _class_private_field_get(this, _frame)
    ];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = frames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var frame = _step.value;
            var _frames;
            if (frame._id === id) {
                return frame;
            }
            (_frames = frames).push.apply(_frames, _to_consumable_array(frame.childFrames()));
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
    return;
}


}),

}]);