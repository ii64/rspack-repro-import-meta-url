"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_cdp_ExecutionContext_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/cdp/ExecutionContext.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ExecutionContext: function() { return ExecutionContext; }
});
/* harmony import */var _api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/CDPSession.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/CDPSession.js");
/* harmony import */var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/EventEmitter.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/EventEmitter.js");
/* harmony import */var _common_LazyArg_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/LazyArg.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/LazyArg.js");
/* harmony import */var _common_ScriptInjector_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/ScriptInjector.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/ScriptInjector.js");
/* harmony import */var _common_util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */var _util_AsyncIterableUtil_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/AsyncIterableUtil.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/AsyncIterableUtil.js");
/* harmony import */var _util_disposable_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/disposable.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/disposable.js");
/* harmony import */var _util_Function_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/Function.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/Function.js");
/* harmony import */var _util_Mutex_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/Mutex.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/Mutex.js");
/* harmony import */var _AriaQueryHandler_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AriaQueryHandler.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/AriaQueryHandler.js");
/* harmony import */var _Binding_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Binding.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Binding.js");
/* harmony import */var _ElementHandle_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ElementHandle.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/ElementHandle.js");
/* harmony import */var _JSHandle_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./JSHandle.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/JSHandle.js");
/* harmony import */var _utils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/utils.js");
/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
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
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
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
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
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














var ariaQuerySelectorBinding = new _Binding_js__WEBPACK_IMPORTED_MODULE_10__.Binding('__ariaQuerySelector', _AriaQueryHandler_js__WEBPACK_IMPORTED_MODULE_9__.ARIAQueryHandler.queryOne, '' // custom init
);
var ariaQuerySelectorAllBinding = new _Binding_js__WEBPACK_IMPORTED_MODULE_10__.Binding('__ariaQuerySelectorAll', function() {
    var _ref = _async_to_generator(function(element, selector) {
        var _element_realm, results, _, _1, _tmp, _2, _3;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    results = _AriaQueryHandler_js__WEBPACK_IMPORTED_MODULE_9__.ARIAQueryHandler.queryAll(element, selector);
                    _1 = (_ = (_element_realm = element.realm).evaluateHandle).apply;
                    _tmp = [
                        _element_realm
                    ];
                    _3 = (_2 = [
                        function() {
                            for(var _len = arguments.length, elements = new Array(_len), _key = 0; _key < _len; _key++){
                                elements[_key] = arguments[_key];
                            }
                            return elements;
                        }
                    ]).concat;
                    return [
                        4,
                        _util_AsyncIterableUtil_js__WEBPACK_IMPORTED_MODULE_5__.AsyncIterableUtil.collect(results)
                    ];
                case 1:
                    return [
                        4,
                        _1.apply(_, _tmp.concat([
                            _3.apply(_2, [
                                _to_consumable_array.apply(void 0, [
                                    _state.sent()
                                ])
                            ])
                        ]))
                    ];
                case 2:
                    return [
                        2,
                        _state.sent()
                    ];
            }
        });
    });
    return function(element, selector) {
        return _ref.apply(this, arguments);
    };
}(), '' // custom init
);
var _client = /*#__PURE__*/ new WeakMap(), _world = /*#__PURE__*/ new WeakMap(), _id = /*#__PURE__*/ new WeakMap(), _name = /*#__PURE__*/ new WeakMap(), _disposables = /*#__PURE__*/ new WeakMap(), // Contains mapping from functions that should be bound to Puppeteer functions.
_bindings = /*#__PURE__*/ new WeakMap(), // If multiple waitFor are set up asynchronously, we need to wait for the
// first one to set up the binding in the page before running the others.
_mutex = /*#__PURE__*/ new WeakMap(), _addBinding = /*#__PURE__*/ new WeakSet(), _onBindingCalled = /*#__PURE__*/ new WeakSet(), _onConsoleAPI = /*#__PURE__*/ new WeakSet(), _bindingsInstalled = /*#__PURE__*/ new WeakMap(), _puppeteerUtil = /*#__PURE__*/ new WeakMap(), _addBindingWithoutThrowing = /*#__PURE__*/ new WeakSet(), _evaluate = /*#__PURE__*/ new WeakSet();
var _disposeSymbol = _util_disposable_js__WEBPACK_IMPORTED_MODULE_6__.disposeSymbol;
/**
 * @internal
 */ var ExecutionContext = /*#__PURE__*/ function(EventEmitter1) {
    "use strict";
    _inherits(ExecutionContext, EventEmitter1);
    var _super = _create_super(ExecutionContext);
    function ExecutionContext(client, contextPayload, world) {
        _class_call_check(this, ExecutionContext);
        var _this;
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _addBinding);
        _class_private_method_init(_assert_this_initialized(_this), _onBindingCalled);
        _class_private_method_init(_assert_this_initialized(_this), _onConsoleAPI);
        _class_private_method_init(_assert_this_initialized(_this), _addBindingWithoutThrowing);
        _class_private_method_init(_assert_this_initialized(_this), _evaluate);
        _class_private_field_init(_assert_this_initialized(_this), _client, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _world, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _id, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _name, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _disposables, {
            writable: true,
            value: new _util_disposable_js__WEBPACK_IMPORTED_MODULE_6__.DisposableStack()
        });
        _class_private_field_init(_assert_this_initialized(_this), _bindings, {
            writable: true,
            value: new Map()
        });
        _class_private_field_init(_assert_this_initialized(_this), _mutex, {
            writable: true,
            value: new _util_Mutex_js__WEBPACK_IMPORTED_MODULE_8__.Mutex()
        });
        _class_private_field_init(_assert_this_initialized(_this), _bindingsInstalled, {
            writable: true,
            value: false
        });
        _class_private_field_init(_assert_this_initialized(_this), _puppeteerUtil, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(_assert_this_initialized(_this), _client, client);
        _class_private_field_set(_assert_this_initialized(_this), _world, world);
        _class_private_field_set(_assert_this_initialized(_this), _id, contextPayload.id);
        if (contextPayload.name) {
            _class_private_field_set(_assert_this_initialized(_this), _name, contextPayload.name);
        }
        var clientEmitter = _class_private_field_get(_this, _disposables).use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__.EventEmitter(_class_private_field_get(_assert_this_initialized(_this), _client)));
        clientEmitter.on('Runtime.bindingCalled', _class_private_method_get(_this, _onBindingCalled, onBindingCalled).bind(_assert_this_initialized(_this)));
        var _this1 = _assert_this_initialized(_this);
        clientEmitter.on('Runtime.executionContextDestroyed', function() {
            var _ref = _async_to_generator(function(event) {
                return _ts_generator(this, function(_state) {
                    if (event.executionContextId === _class_private_field_get(_this1, _id)) {
                        _this1[_util_disposable_js__WEBPACK_IMPORTED_MODULE_6__.disposeSymbol]();
                    }
                    return [
                        2
                    ];
                });
            });
            return function(event) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this2 = _assert_this_initialized(_this);
        clientEmitter.on('Runtime.executionContextsCleared', /*#__PURE__*/ _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                _this2[_util_disposable_js__WEBPACK_IMPORTED_MODULE_6__.disposeSymbol]();
                return [
                    2
                ];
            });
        }));
        clientEmitter.on('Runtime.consoleAPICalled', _class_private_method_get(_this, _onConsoleAPI, onConsoleAPI).bind(_assert_this_initialized(_this)));
        clientEmitter.on(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSessionEvent.Disconnected, function() {
            _this[_util_disposable_js__WEBPACK_IMPORTED_MODULE_6__.disposeSymbol]();
        });
        return _this;
    }
    _create_class(ExecutionContext, [
        {
            key: "id",
            get: function get() {
                return _class_private_field_get(this, _id);
            }
        },
        {
            key: "puppeteerUtil",
            get: function get() {
                var _this = this;
                var promise = Promise.resolve();
                if (!_class_private_field_get(this, _bindingsInstalled)) {
                    promise = Promise.all([
                        _class_private_method_get(this, _addBindingWithoutThrowing, addBindingWithoutThrowing).call(this, ariaQuerySelectorBinding),
                        _class_private_method_get(this, _addBindingWithoutThrowing, addBindingWithoutThrowing).call(this, ariaQuerySelectorAllBinding)
                    ]);
                    _class_private_field_set(this, _bindingsInstalled, true);
                }
                _common_ScriptInjector_js__WEBPACK_IMPORTED_MODULE_3__.scriptInjector.inject(function(script) {
                    if (_class_private_field_get(_this, _puppeteerUtil)) {
                        void _class_private_field_get(_this, _puppeteerUtil).then(function(handle) {
                            void handle.dispose();
                        });
                    }
                    _class_private_field_set(_this, _puppeteerUtil, promise.then(function() {
                        return _this.evaluateHandle(script);
                    }));
                }, !_class_private_field_get(this, _puppeteerUtil));
                return _class_private_field_get(this, _puppeteerUtil);
            }
        },
        {
            key: "evaluate",
            value: /**
     * Evaluates the given function.
     *
     * @example
     *
     * ```ts
     * const executionContext = await page.mainFrame().executionContext();
     * const result = await executionContext.evaluate(() => Promise.resolve(8 * 7))* ;
     * console.log(result); // prints "56"
     * ```
     *
     * @example
     * A string can also be passed in instead of a function:
     *
     * ```ts
     * console.log(await executionContext.evaluate('1 + 2')); // prints "3"
     * ```
     *
     * @example
     * Handles can also be passed as `args`. They resolve to their referenced object:
     *
     * ```ts
     * const oneHandle = await executionContext.evaluateHandle(() => 1);
     * const twoHandle = await executionContext.evaluateHandle(() => 2);
     * const result = await executionContext.evaluate(
     *   (a, b) => a + b,
     *   oneHandle,
     *   twoHandle
     * );
     * await oneHandle.dispose();
     * await twoHandle.dispose();
     * console.log(result); // prints '3'.
     * ```
     *
     * @param pageFunction - The function to evaluate.
     * @param args - Additional arguments to pass into the function.
     * @returns The result of evaluating the function. If the result is an object,
     * a vanilla object containing the serializable properties of the result is
     * returned.
     */ function evaluate1(pageFunction) {
                for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    args[_key - 1] = arguments[_key];
                }
                var _this = this;
                return _async_to_generator(function() {
                    var _$_class_private_method_get;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    (_$_class_private_method_get = _class_private_method_get(_this, _evaluate, evaluate)).call.apply(_$_class_private_method_get, [
                                        _this,
                                        true,
                                        pageFunction
                                    ].concat(_to_consumable_array(args)))
                                ];
                            case 1:
                                return [
                                    2,
                                    _state.sent()
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "evaluateHandle",
            value: /**
     * Evaluates the given function.
     *
     * Unlike {@link ExecutionContext.evaluate | evaluate}, this method returns a
     * handle to the result of the function.
     *
     * This method may be better suited if the object cannot be serialized (e.g.
     * `Map`) and requires further manipulation.
     *
     * @example
     *
     * ```ts
     * const context = await page.mainFrame().executionContext();
     * const handle: JSHandle<typeof globalThis> = await context.evaluateHandle(
     *   () => Promise.resolve(self)
     * );
     * ```
     *
     * @example
     * A string can also be passed in instead of a function.
     *
     * ```ts
     * const handle: JSHandle<number> = await context.evaluateHandle('1 + 2');
     * ```
     *
     * @example
     * Handles can also be passed as `args`. They resolve to their referenced object:
     *
     * ```ts
     * const bodyHandle: ElementHandle<HTMLBodyElement> =
     *   await context.evaluateHandle(() => {
     *     return document.body;
     *   });
     * const stringHandle: JSHandle<string> = await context.evaluateHandle(
     *   body => body.innerHTML,
     *   body
     * );
     * console.log(await stringHandle.jsonValue()); // prints body's innerHTML
     * // Always dispose your garbage! :)
     * await bodyHandle.dispose();
     * await stringHandle.dispose();
     * ```
     *
     * @param pageFunction - The function to evaluate.
     * @param args - Additional arguments to pass into the function.
     * @returns A {@link JSHandle | handle} to the result of evaluating the
     * function. If the result is a `Node`, then this will return an
     * {@link ElementHandle | element handle}.
     */ function evaluateHandle(pageFunction) {
                for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    args[_key - 1] = arguments[_key];
                }
                var _this = this;
                return _async_to_generator(function() {
                    var _$_class_private_method_get;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    (_$_class_private_method_get = _class_private_method_get(_this, _evaluate, evaluate)).call.apply(_$_class_private_method_get, [
                                        _this,
                                        false,
                                        pageFunction
                                    ].concat(_to_consumable_array(args)))
                                ];
                            case 1:
                                return [
                                    2,
                                    _state.sent()
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: _disposeSymbol,
            value: function value() {
                _class_private_field_get(this, _disposables).dispose();
                this.emit('disposed', undefined);
            }
        }
    ]);
    return ExecutionContext;
}(_common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__.EventEmitter);
function addBinding(binding) {
    return _addBinding1.apply(this, arguments);
}
function _addBinding1() {
    _addBinding1 = _async_to_generator(function(binding) {
        var env_1, _, _tmp, error, e_1;
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
                        8,
                        9,
                        10
                    ]);
                    if (_class_private_field_get(this, _bindings).has(binding.name)) {
                        return [
                            2
                        ];
                    }
                    _tmp = [
                        env_1
                    ];
                    return [
                        4,
                        _class_private_field_get(this, _mutex).acquire()
                    ];
                case 2:
                    _ = __addDisposableResource.apply(void 0, _tmp.concat([
                        _state.sent(),
                        false
                    ]));
                    _state.label = 3;
                case 3:
                    _state.trys.push([
                        3,
                        6,
                        ,
                        7
                    ]);
                    return [
                        4,
                        _class_private_field_get(this, _client).send('Runtime.addBinding', _class_private_field_get(this, _name) ? {
                            name: _utils_js__WEBPACK_IMPORTED_MODULE_13__.CDP_BINDING_PREFIX + binding.name,
                            executionContextName: _class_private_field_get(this, _name)
                        } : {
                            name: _utils_js__WEBPACK_IMPORTED_MODULE_13__.CDP_BINDING_PREFIX + binding.name,
                            executionContextId: _class_private_field_get(this, _id)
                        })
                    ];
                case 4:
                    _state.sent();
                    return [
                        4,
                        this.evaluate(_utils_js__WEBPACK_IMPORTED_MODULE_13__.addPageBinding, 'internal', binding.name, _utils_js__WEBPACK_IMPORTED_MODULE_13__.CDP_BINDING_PREFIX)
                    ];
                case 5:
                    _state.sent();
                    _class_private_field_get(this, _bindings).set(binding.name, binding);
                    return [
                        3,
                        7
                    ];
                case 6:
                    error = _state.sent();
                    // We could have tried to evaluate in a context which was already
                    // destroyed. This happens, for example, if the page is navigated while
                    // we are trying to add the binding
                    if (_instanceof(error, Error)) {
                        // Destroyed context.
                        if (error.message.includes('Execution context was destroyed')) {
                            return [
                                2
                            ];
                        }
                        // Missing context.
                        if (error.message.includes('Cannot find context with specified id')) {
                            return [
                                2
                            ];
                        }
                    }
                    (0,_common_util_js__WEBPACK_IMPORTED_MODULE_4__.debugError)(error);
                    return [
                        3,
                        7
                    ];
                case 7:
                    return [
                        3,
                        10
                    ];
                case 8:
                    e_1 = _state.sent();
                    env_1.error = e_1;
                    env_1.hasError = true;
                    return [
                        3,
                        10
                    ];
                case 9:
                    __disposeResources(env_1);
                    return [
                        7
                    ];
                case 10:
                    return [
                        2
                    ];
            }
        });
    });
    return _addBinding1.apply(this, arguments);
}
function onBindingCalled(event) {
    return _onBindingCalled1.apply(this, arguments);
}
function _onBindingCalled1() {
    _onBindingCalled1 = _async_to_generator(function(event) {
        var payload, type, name, seq, args, isTrivial, binding, err;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (event.executionContextId !== _class_private_field_get(this, _id)) {
                        return [
                            2
                        ];
                    }
                    try {
                        payload = JSON.parse(event.payload);
                    } catch (e) {
                        // The binding was either called by something in the page or it was
                        // called before our wrapper was initialized.
                        return [
                            2
                        ];
                    }
                    type = payload.type, name = payload.name, seq = payload.seq, args = payload.args, isTrivial = payload.isTrivial;
                    if (type !== 'internal') {
                        this.emit('bindingcalled', event);
                        return [
                            2
                        ];
                    }
                    if (!_class_private_field_get(this, _bindings).has(name)) {
                        this.emit('bindingcalled', event);
                        return [
                            2
                        ];
                    }
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        3,
                        ,
                        4
                    ]);
                    binding = _class_private_field_get(this, _bindings).get(name);
                    return [
                        4,
                        binding === null || binding === void 0 ? void 0 : binding.run(this, seq, args, isTrivial)
                    ];
                case 2:
                    _state.sent();
                    return [
                        3,
                        4
                    ];
                case 3:
                    err = _state.sent();
                    (0,_common_util_js__WEBPACK_IMPORTED_MODULE_4__.debugError)(err);
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
    return _onBindingCalled1.apply(this, arguments);
}
function onConsoleAPI(event) {
    if (event.executionContextId !== _class_private_field_get(this, _id)) {
        return;
    }
    this.emit('consoleapicalled', event);
}
function addBindingWithoutThrowing(binding) {
    return _addBindingWithoutThrowing1.apply(this, arguments);
}
function _addBindingWithoutThrowing1() {
    _addBindingWithoutThrowing1 = _async_to_generator(function(binding) {
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
                        _class_private_method_get(this, _addBinding, addBinding).call(this, binding)
                    ];
                case 1:
                    _state.sent();
                    return [
                        3,
                        3
                    ];
                case 2:
                    err = _state.sent();
                    // If the binding cannot be added, then either the browser doesn't support
                    // bindings (e.g. Firefox) or the context is broken. Either breakage is
                    // okay, so we ignore the error.
                    (0,_common_util_js__WEBPACK_IMPORTED_MODULE_4__.debugError)(err);
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
    });
    return _addBindingWithoutThrowing1.apply(this, arguments);
}
function evaluate(returnByValue, pageFunction) {
    return _evaluate1.apply(this, arguments);
}
function _evaluate1() {
    _evaluate1 = _async_to_generator(function(returnByValue, pageFunction) {
        var _this, _len, args, _key, _getSourcePuppeteerURLIfAvailable, _getSourcePuppeteerURLIfAvailable_toString, sourceUrlComment, contextId, expression, expressionWithSourceUrl, _ref, exceptionDetails, remoteObject, functionDeclaration, functionDeclarationWithSourceUrl, callFunctionOnPromise, _, _1, _tmp, _tmp1, _tmp2, error, _ref1, exceptionDetails1, remoteObject1;
        var _arguments = arguments;
        function convertArgumentAsync(context, arg) {
            return _convertArgumentAsync.apply(this, arguments);
        }
        function _convertArgumentAsync() {
            _convertArgumentAsync = _async_to_generator(function(context, arg) {
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            if (!_instanceof(arg, _common_LazyArg_js__WEBPACK_IMPORTED_MODULE_2__.LazyArg)) return [
                                3,
                                2
                            ];
                            return [
                                4,
                                arg.get(context)
                            ];
                        case 1:
                            arg = _state.sent();
                            _state.label = 2;
                        case 2:
                            return [
                                2,
                                convertArgument(context, arg)
                            ];
                    }
                });
            });
            return _convertArgumentAsync.apply(this, arguments);
        }
        function convertArgument(context, arg) {
            if ((typeof arg === "undefined" ? "undefined" : _type_of(arg)) === 'bigint') {
                // eslint-disable-line valid-typeof
                return {
                    unserializableValue: "".concat(arg.toString(), "n")
                };
            }
            if (Object.is(arg, -0)) {
                return {
                    unserializableValue: '-0'
                };
            }
            if (Object.is(arg, Infinity)) {
                return {
                    unserializableValue: 'Infinity'
                };
            }
            if (Object.is(arg, -Infinity)) {
                return {
                    unserializableValue: '-Infinity'
                };
            }
            if (Object.is(arg, NaN)) {
                return {
                    unserializableValue: 'NaN'
                };
            }
            var objectHandle = arg && (_instanceof(arg, _JSHandle_js__WEBPACK_IMPORTED_MODULE_12__.CdpJSHandle) || _instanceof(arg, _ElementHandle_js__WEBPACK_IMPORTED_MODULE_11__.CdpElementHandle)) ? arg : null;
            if (objectHandle) {
                if (objectHandle.realm !== _class_private_field_get(context, _world)) {
                    throw new Error('JSHandles can be evaluated only in the context they were created!');
                }
                if (objectHandle.disposed) {
                    throw new Error('JSHandle is disposed!');
                }
                if (objectHandle.remoteObject().unserializableValue) {
                    return {
                        unserializableValue: objectHandle.remoteObject().unserializableValue
                    };
                }
                if (!objectHandle.remoteObject().objectId) {
                    return {
                        value: objectHandle.remoteObject().value
                    };
                }
                return {
                    objectId: objectHandle.remoteObject().objectId
                };
            }
            return {
                value: arg
            };
        }
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _this = this;
                    for(_len = _arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                        args[_key - 2] = _arguments[_key];
                    }
                    sourceUrlComment = (0,_common_util_js__WEBPACK_IMPORTED_MODULE_4__.getSourceUrlComment)((_getSourcePuppeteerURLIfAvailable_toString = (_getSourcePuppeteerURLIfAvailable = (0,_common_util_js__WEBPACK_IMPORTED_MODULE_4__.getSourcePuppeteerURLIfAvailable)(pageFunction)) === null || _getSourcePuppeteerURLIfAvailable === void 0 ? void 0 : _getSourcePuppeteerURLIfAvailable.toString()) !== null && _getSourcePuppeteerURLIfAvailable_toString !== void 0 ? _getSourcePuppeteerURLIfAvailable_toString : _common_util_js__WEBPACK_IMPORTED_MODULE_4__.PuppeteerURL.INTERNAL_URL);
                    if (!(0,_common_util_js__WEBPACK_IMPORTED_MODULE_4__.isString)(pageFunction)) return [
                        3,
                        2
                    ];
                    contextId = _class_private_field_get(this, _id);
                    expression = pageFunction;
                    expressionWithSourceUrl = _common_util_js__WEBPACK_IMPORTED_MODULE_4__.SOURCE_URL_REGEX.test(expression) ? expression : "".concat(expression, "\n").concat(sourceUrlComment, "\n");
                    return [
                        4,
                        _class_private_field_get(this, _client).send('Runtime.evaluate', {
                            expression: expressionWithSourceUrl,
                            contextId: contextId,
                            returnByValue: returnByValue,
                            awaitPromise: true,
                            userGesture: true
                        }).catch(rewriteError)
                    ];
                case 1:
                    _ref = _state.sent(), exceptionDetails = _ref.exceptionDetails, remoteObject = _ref.result;
                    if (exceptionDetails) {
                        throw (0,_utils_js__WEBPACK_IMPORTED_MODULE_13__.createEvaluationError)(exceptionDetails);
                    }
                    return [
                        2,
                        returnByValue ? (0,_utils_js__WEBPACK_IMPORTED_MODULE_13__.valueFromRemoteObject)(remoteObject) : _class_private_field_get(this, _world).createCdpHandle(remoteObject)
                    ];
                case 2:
                    functionDeclaration = (0,_util_Function_js__WEBPACK_IMPORTED_MODULE_7__.stringifyFunction)(pageFunction);
                    functionDeclarationWithSourceUrl = _common_util_js__WEBPACK_IMPORTED_MODULE_4__.SOURCE_URL_REGEX.test(functionDeclaration) ? functionDeclaration : "".concat(functionDeclaration, "\n").concat(sourceUrlComment, "\n");
                    _state.label = 3;
                case 3:
                    _state.trys.push([
                        3,
                        7,
                        ,
                        8
                    ]);
                    _1 = (_ = _class_private_field_get(this, _client)).send;
                    _tmp = [
                        'Runtime.callFunctionOn'
                    ];
                    _tmp1 = {
                        functionDeclaration: functionDeclarationWithSourceUrl,
                        executionContextId: _class_private_field_get(this, _id)
                    };
                    if (!args.some(function(arg) {
                        return _instanceof(arg, _common_LazyArg_js__WEBPACK_IMPORTED_MODULE_2__.LazyArg);
                    })) return [
                        3,
                        5
                    ];
                    return [
                        4,
                        Promise.all(args.map(function(arg) {
                            return convertArgumentAsync(_this, arg);
                        }))
                    ];
                case 4:
                    _tmp2 = _state.sent();
                    return [
                        3,
                        6
                    ];
                case 5:
                    _tmp2 = args.map(function(arg) {
                        return convertArgument(_this, arg);
                    });
                    _state.label = 6;
                case 6:
                    callFunctionOnPromise = _1.apply(_, _tmp.concat([
                        (_tmp1.// LazyArgs are used only internally and should not affect the order
                        // evaluate calls for the public APIs.
                        arguments = _tmp2, _tmp1.returnByValue = returnByValue, _tmp1.awaitPromise = true, _tmp1.userGesture = true, _tmp1)
                    ]));
                    return [
                        3,
                        8
                    ];
                case 7:
                    error = _state.sent();
                    if (_instanceof(error, TypeError) && error.message.startsWith('Converting circular structure to JSON')) {
                        error.message += ' Recursive objects are not allowed.';
                    }
                    throw error;
                case 8:
                    return [
                        4,
                        callFunctionOnPromise.catch(rewriteError)
                    ];
                case 9:
                    _ref1 = _state.sent(), exceptionDetails1 = _ref1.exceptionDetails, remoteObject1 = _ref1.result;
                    if (exceptionDetails1) {
                        throw (0,_utils_js__WEBPACK_IMPORTED_MODULE_13__.createEvaluationError)(exceptionDetails1);
                    }
                    return [
                        2,
                        returnByValue ? (0,_utils_js__WEBPACK_IMPORTED_MODULE_13__.valueFromRemoteObject)(remoteObject1) : _class_private_field_get(this, _world).createCdpHandle(remoteObject1)
                    ];
            }
        });
    });
    return _evaluate1.apply(this, arguments);
}
var rewriteError = function(error) {
    if (error.message.includes('Object reference chain is too long')) {
        return {
            result: {
                type: 'undefined'
            }
        };
    }
    if (error.message.includes("Object couldn't be returned by value")) {
        return {
            result: {
                type: 'undefined'
            }
        };
    }
    if (error.message.endsWith('Cannot find context with specified id') || error.message.endsWith('Inspected target navigated or closed')) {
        throw new Error('Execution context was destroyed, most likely because of a navigation.');
    }
    throw error;
}; //# sourceMappingURL=ExecutionContext.js.map


}),

}]);