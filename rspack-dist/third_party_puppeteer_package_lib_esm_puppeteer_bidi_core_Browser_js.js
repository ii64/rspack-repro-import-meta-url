"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_bidi_core_Browser_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/bidi/core/Browser.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Browser: function() { return Browser; }
});
/* harmony import */var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/EventEmitter.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/EventEmitter.js");
/* harmony import */var _util_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/decorators.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/decorators.js");
/* harmony import */var _util_disposable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/disposable.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/disposable.js");
/* harmony import */var _Realm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Realm.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/core/Realm.js");
/* harmony import */var _UserContext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UserContext.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/core/UserContext.js");
/**
 * @license
 * Copyright 2024 Google Inc.
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
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
var __runInitializers = undefined && undefined.__runInitializers || function(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++){
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = undefined && undefined.__esDecorate || function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || (typeof result === "undefined" ? "undefined" : _type_of(result)) !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
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





/**
 * @internal
 */ var Browser = function() {
    var initialize = function initialize() {
        return _initialize1.apply(this, arguments);
    };
    var syncUserContexts = function syncUserContexts() {
        return _syncUserContexts1.apply(this, arguments);
    };
    var syncBrowsingContexts = function syncBrowsingContexts() {
        return _syncBrowsingContexts1.apply(this, arguments);
    };
    var createUserContext = function createUserContext(id) {
        var _this = this;
        var userContext = _UserContext_js__WEBPACK_IMPORTED_MODULE_4__.UserContext.create(this, id);
        _class_private_field_get(this, _userContexts).set(userContext.id, userContext);
        var userContextEmitter = _class_private_field_get(this, _disposables).use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(userContext));
        userContextEmitter.once('closed', function() {
            userContextEmitter.removeAllListeners();
            _class_private_field_get(_this, _userContexts).delete(userContext.id);
        });
        return userContext;
    };
    var _tmp;
    var _closed, _reason, _disposables, _userContexts, _sharedWorkers, _initialize, _syncUserContexts, _syncBrowsingContexts, _createUserContext, _Browser;
    var _classSuper = _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter;
    var _instanceExtraInitializers = [];
    var _dispose_decorators;
    var _close_decorators;
    var _addPreloadScript_decorators;
    var _removeIntercept_decorators;
    var _removePreloadScript_decorators;
    var _createUserContext_decorators;
    return _closed = /*#__PURE__*/ new WeakMap(), _reason = /*#__PURE__*/ new WeakMap(), _disposables = /*#__PURE__*/ new WeakMap(), _userContexts = /*#__PURE__*/ new WeakMap(), _sharedWorkers = /*#__PURE__*/ new WeakMap(), _initialize = /*#__PURE__*/ new WeakSet(), _syncUserContexts = /*#__PURE__*/ new WeakSet(), _syncBrowsingContexts = /*#__PURE__*/ new WeakSet(), _createUserContext = /*#__PURE__*/ new WeakSet(), _tmp = (_dispose_decorators = [
        _util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.inertIfDisposed
    ], _close_decorators = [
        (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(function(browser) {
            // SAFETY: By definition of `disposed`, `#reason` is defined.
            return _class_private_field_get(browser, _reason);
        })
    ], _addPreloadScript_decorators = [
        (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(function(browser) {
            // SAFETY: By definition of `disposed`, `#reason` is defined.
            return _class_private_field_get(browser, _reason);
        })
    ], _removeIntercept_decorators = [
        (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(function(browser) {
            // SAFETY: By definition of `disposed`, `#reason` is defined.
            return _class_private_field_get(browser, _reason);
        })
    ], _removePreloadScript_decorators = [
        (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(function(browser) {
            // SAFETY: By definition of `disposed`, `#reason` is defined.
            return _class_private_field_get(browser, _reason);
        })
    ], _createUserContext_decorators = [
        (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(function(browser) {
            // SAFETY: By definition of `disposed`, `#reason` is defined.
            return _class_private_field_get(browser, _reason);
        })
    ], _util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.disposeSymbol), _Browser = /*#__PURE__*/ function(_classSuper) {
        "use strict";
        _inherits(Browser, _classSuper);
        var _super = _create_super(Browser);
        function Browser(session) {
            _class_call_check(this, Browser);
            var _this;
            _this = _super.call(this);
            _class_private_method_init(_assert_this_initialized(_this), _initialize);
            _class_private_method_init(_assert_this_initialized(_this), _syncUserContexts);
            _class_private_method_init(_assert_this_initialized(_this), _syncBrowsingContexts);
            _class_private_method_init(_assert_this_initialized(_this), _createUserContext);
            _class_private_field_init(_assert_this_initialized(_this), _closed, {
                writable: true,
                value: (__runInitializers(_assert_this_initialized(_this), _instanceExtraInitializers), false)
            });
            _class_private_field_init(_assert_this_initialized(_this), _reason, {
                writable: true,
                value: void 0
            });
            _class_private_field_init(_assert_this_initialized(_this), _disposables, {
                writable: true,
                value: new _util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.DisposableStack()
            });
            _class_private_field_init(_assert_this_initialized(_this), _userContexts, {
                writable: true,
                value: new Map()
            });
            _define_property(_assert_this_initialized(_this), "session", void 0);
            _class_private_field_init(_assert_this_initialized(_this), _sharedWorkers, {
                writable: true,
                value: new Map()
            });
            _this.session = session;
            return _this;
        }
        _create_class(Browser, [
            {
                key: "closed",
                get: function get() {
                    return _class_private_field_get(this, _closed);
                }
            },
            {
                key: "defaultUserContext",
                get: function get() {
                    // SAFETY: A UserContext is always created for the default context.
                    return _class_private_field_get(this, _userContexts).get(_UserContext_js__WEBPACK_IMPORTED_MODULE_4__.UserContext.DEFAULT);
                }
            },
            {
                key: "disconnected",
                get: function get() {
                    return _class_private_field_get(this, _reason) !== undefined;
                }
            },
            {
                key: "disposed",
                get: function get() {
                    return this.disconnected;
                }
            },
            {
                key: "userContexts",
                get: function get() {
                    return _class_private_field_get(this, _userContexts).values();
                }
            },
            {
                key: "dispose",
                value: function dispose(reason) {
                    var closed = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                    _class_private_field_set(this, _closed, closed);
                    _class_private_field_set(this, _reason, reason);
                    this[_util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.disposeSymbol]();
                }
            },
            {
                key: "close",
                value: function close() {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    _state.trys.push([
                                        0,
                                        ,
                                        2,
                                        3
                                    ]);
                                    return [
                                        4,
                                        _this.session.send('browser.close', {})
                                    ];
                                case 1:
                                    _state.sent();
                                    return [
                                        3,
                                        3
                                    ];
                                case 2:
                                    _this.dispose('Browser already closed.', true);
                                    return [
                                        7
                                    ];
                                case 3:
                                    return [
                                        2
                                    ];
                            }
                        });
                    })();
                }
            },
            {
                key: "addPreloadScript",
                value: function addPreloadScript(functionDeclaration) {
                    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                    var _this = this;
                    return _async_to_generator(function() {
                        var _options_contexts, _ref, script;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this.session.send('script.addPreloadScript', _object_spread_props(_object_spread({
                                            functionDeclaration: functionDeclaration
                                        }, options), {
                                            contexts: (_options_contexts = options.contexts) === null || _options_contexts === void 0 ? void 0 : _options_contexts.map(function(context) {
                                                return context.id;
                                            })
                                        }))
                                    ];
                                case 1:
                                    _ref = _state.sent(), script = _ref.result.script;
                                    return [
                                        2,
                                        script
                                    ];
                            }
                        });
                    })();
                }
            },
            {
                key: "removeIntercept",
                value: function removeIntercept(intercept) {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this.session.send('network.removeIntercept', {
                                            intercept: intercept
                                        })
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
            },
            {
                key: "removePreloadScript",
                value: function removePreloadScript(script) {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this.session.send('script.removePreloadScript', {
                                            script: script
                                        })
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
            },
            {
                key: "createUserContext",
                value: function createUserContext1() {
                    var _this = this;
                    return _async_to_generator(function() {
                        var _ref, _ref_result, context;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this.session.send('browser.createUserContext', {})
                                    ];
                                case 1:
                                    _ref = _state.sent(), _ref_result = _ref.result, context = _ref_result.userContext;
                                    return [
                                        2,
                                        _class_private_method_get(_this, _createUserContext, createUserContext).call(_this, context)
                                    ];
                            }
                        });
                    })();
                }
            },
            {
                key: _tmp,
                value: function value() {
                    var _$_class_private_field_get;
                    _class_private_field_set(this, _reason, (_$_class_private_field_get = _class_private_field_get(this, _reason)) !== null && _$_class_private_field_get !== void 0 ? _$_class_private_field_get : 'Browser was disconnected, probably because the session ended.');
                    if (this.closed) {
                        this.emit('closed', {
                            reason: _class_private_field_get(this, _reason)
                        });
                    }
                    this.emit('disconnected', {
                        reason: _class_private_field_get(this, _reason)
                    });
                    _class_private_field_get(this, _disposables).dispose();
                    _get(_get_prototype_of(Browser.prototype), _util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.disposeSymbol, this).call(this);
                }
            }
        ], [
            {
                key: "from",
                value: function from(session) {
                    return _async_to_generator(function() {
                        var browser;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    browser = new Browser(session);
                                    return [
                                        4,
                                        _class_private_method_get(browser, _initialize, initialize).call(browser)
                                    ];
                                case 1:
                                    _state.sent();
                                    return [
                                        2,
                                        browser
                                    ];
                            }
                        });
                    })();
                }
            }
        ]);
        return Browser;
    }(_classSuper), function() {
        var _classSuper_Symbol_metadata;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_classSuper_Symbol_metadata = _classSuper[Symbol.metadata]) !== null && _classSuper_Symbol_metadata !== void 0 ? _classSuper_Symbol_metadata : null) : void 0;
        __esDecorate(_Browser, null, _dispose_decorators, {
            kind: "method",
            name: "dispose",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "dispose" in obj;
                },
                get: function(obj) {
                    return obj.dispose;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_Browser, null, _close_decorators, {
            kind: "method",
            name: "close",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "close" in obj;
                },
                get: function(obj) {
                    return obj.close;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_Browser, null, _addPreloadScript_decorators, {
            kind: "method",
            name: "addPreloadScript",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "addPreloadScript" in obj;
                },
                get: function(obj) {
                    return obj.addPreloadScript;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_Browser, null, _removeIntercept_decorators, {
            kind: "method",
            name: "removeIntercept",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "removeIntercept" in obj;
                },
                get: function(obj) {
                    return obj.removeIntercept;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_Browser, null, _removePreloadScript_decorators, {
            kind: "method",
            name: "removePreloadScript",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "removePreloadScript" in obj;
                },
                get: function(obj) {
                    return obj.removePreloadScript;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_Browser, null, _createUserContext_decorators, {
            kind: "method",
            name: "createUserContext",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "createUserContext" in obj;
                },
                get: function(obj) {
                    return obj.createUserContext;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        if (_metadata) Object.defineProperty(_Browser, Symbol.metadata, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _metadata
        });
    }(), _Browser;
    function _initialize1() {
        _initialize1 = _async_to_generator(function() {
            var _this, sessionEmitter;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _this = this;
                        sessionEmitter = _class_private_field_get(this, _disposables).use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(this.session));
                        sessionEmitter.once('ended', function(param) {
                            var reason = param.reason;
                            _this.dispose(reason);
                        });
                        sessionEmitter.on('script.realmCreated', function(info) {
                            if (info.type !== 'shared-worker') {
                                return;
                            }
                            _class_private_field_get(_this, _sharedWorkers).set(info.realm, _Realm_js__WEBPACK_IMPORTED_MODULE_3__.SharedWorkerRealm.from(_this, info.realm, info.origin));
                        });
                        return [
                            4,
                            _class_private_method_get(this, _syncUserContexts, syncUserContexts).call(this)
                        ];
                    case 1:
                        _state.sent();
                        return [
                            4,
                            _class_private_method_get(this, _syncBrowsingContexts, syncBrowsingContexts).call(this)
                        ];
                    case 2:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        });
        return _initialize1.apply(this, arguments);
    }
    function _syncUserContexts1() {
        _syncUserContexts1 = _async_to_generator(function() {
            var _ref, userContexts, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, context;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            this.session.send('browser.getUserContexts', {})
                        ];
                    case 1:
                        _ref = _state.sent(), userContexts = _ref.result.userContexts;
                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(_iterator = userContexts[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                context = _step.value;
                                _class_private_method_get(this, _createUserContext, createUserContext).call(this, context.userContext);
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
                        return [
                            2
                        ];
                }
            });
        });
        return _syncUserContexts1.apply(this, arguments);
    }
    function _syncBrowsingContexts1() {
        _syncBrowsingContexts1 = _async_to_generator(function() {
            var contextIds, contexts, env_1, sessionEmitter, result, e_1, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, info, _contexts;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        // In case contexts are created or destroyed during `getTree`, we use this
                        // set to detect them.
                        contextIds = new Set();
                        env_1 = {
                            stack: [],
                            error: void 0,
                            hasError: false
                        };
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            3,
                            4,
                            5
                        ]);
                        sessionEmitter = __addDisposableResource(env_1, new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(this.session), false);
                        sessionEmitter.on('browsingContext.contextCreated', function(info) {
                            contextIds.add(info.context);
                        });
                        return [
                            4,
                            this.session.send('browsingContext.getTree', {})
                        ];
                    case 2:
                        result = _state.sent().result;
                        contexts = result.contexts;
                        return [
                            3,
                            5
                        ];
                    case 3:
                        e_1 = _state.sent();
                        env_1.error = e_1;
                        env_1.hasError = true;
                        return [
                            3,
                            5
                        ];
                    case 4:
                        __disposeResources(env_1);
                        return [
                            7
                        ];
                    case 5:
                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            // Simulating events so contexts are created naturally.
                            for(_iterator = contexts[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                info = _step.value;
                                if (!contextIds.has(info.context)) {
                                    this.session.emit('browsingContext.contextCreated', info);
                                }
                                if (info.children) {
                                    ;
                                    (_contexts = contexts).push.apply(_contexts, _to_consumable_array(info.children));
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
                        return [
                            2
                        ];
                }
            });
        });
        return _syncBrowsingContexts1.apply(this, arguments);
    }
}();
 //# sourceMappingURL=Browser.js.map


}),

}]);