"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_bidi_Realm_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/bidi/Realm.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BidiFrameRealm: function() { return BidiFrameRealm; },
  BidiRealm: function() { return BidiRealm; },
  BidiWorkerRealm: function() { return BidiWorkerRealm; }
});
/* harmony import */var _api_Realm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/Realm.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/Realm.js");
/* harmony import */var _cdp_AriaQueryHandler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cdp/AriaQueryHandler.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/AriaQueryHandler.js");
/* harmony import */var _common_LazyArg_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/LazyArg.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/LazyArg.js");
/* harmony import */var _common_ScriptInjector_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/ScriptInjector.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/ScriptInjector.js");
/* harmony import */var _common_util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */var _util_AsyncIterableUtil_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/AsyncIterableUtil.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/AsyncIterableUtil.js");
/* harmony import */var _util_Function_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/Function.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/Function.js");
/* harmony import */var _Deserializer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Deserializer.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/Deserializer.js");
/* harmony import */var _ElementHandle_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ElementHandle.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/ElementHandle.js");
/* harmony import */var _ExposedFunction_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ExposedFunction.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/ExposedFunction.js");
/* harmony import */var _JSHandle_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./JSHandle.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/JSHandle.js");
/* harmony import */var _Serializer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Serializer.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/Serializer.js");
/* harmony import */var _util_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/util.js");
function _array_like_to_array(arr, len) {
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













var _evaluate = /*#__PURE__*/ new WeakSet();
/**
 * @internal
 */ var BidiRealm = /*#__PURE__*/ function(Realm) {
    "use strict";
    _inherits(BidiRealm, Realm);
    var _super = _create_super(BidiRealm);
    function BidiRealm(realm, timeoutSettings) {
        _class_call_check(this, BidiRealm);
        var _this;
        _this = _super.call(this, timeoutSettings);
        _class_private_method_init(_assert_this_initialized(_this), _evaluate);
        _define_property(_assert_this_initialized(_this), "realm", void 0);
        _define_property(_assert_this_initialized(_this), "internalPuppeteerUtil", void 0);
        _this.realm = realm;
        return _this;
    }
    _create_class(BidiRealm, [
        {
            key: "initialize",
            value: function initialize() {
                var _this = this;
                this.realm.on('destroyed', function(param) {
                    var reason = param.reason;
                    _this.taskManager.terminateAll(new Error(reason));
                    _this.dispose();
                });
                this.realm.on('updated', function() {
                    _this.internalPuppeteerUtil = undefined;
                    void _this.taskManager.rerunAll();
                });
            }
        },
        {
            key: "puppeteerUtil",
            get: function get() {
                var _this = this;
                var promise = Promise.resolve();
                _common_ScriptInjector_js__WEBPACK_IMPORTED_MODULE_3__.scriptInjector.inject(function(script) {
                    if (_this.internalPuppeteerUtil) {
                        void _this.internalPuppeteerUtil.then(function(handle) {
                            void handle.dispose();
                        });
                    }
                    _this.internalPuppeteerUtil = promise.then(function() {
                        return _this.evaluateHandle(script);
                    });
                }, !this.internalPuppeteerUtil);
                return this.internalPuppeteerUtil;
            }
        },
        {
            key: "evaluateHandle",
            value: function evaluateHandle(pageFunction) {
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
            key: "evaluate",
            value: function evaluate1(pageFunction) {
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
            key: "createHandle",
            value: function createHandle(result) {
                if ((result.type === 'node' || result.type === 'window') && _instanceof(this, BidiFrameRealm)) {
                    return _ElementHandle_js__WEBPACK_IMPORTED_MODULE_8__.BidiElementHandle.from(result, this);
                }
                return _JSHandle_js__WEBPACK_IMPORTED_MODULE_10__.BidiJSHandle.from(result, this);
            }
        },
        {
            key: "serializeAsync",
            value: function serializeAsync(arg) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!_instanceof(arg, _common_LazyArg_js__WEBPACK_IMPORTED_MODULE_2__.LazyArg)) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    arg.get(_this)
                                ];
                            case 1:
                                arg = _state.sent();
                                _state.label = 2;
                            case 2:
                                return [
                                    2,
                                    _this.serialize(arg)
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "serialize",
            value: function serialize(arg) {
                if (_instanceof(arg, _JSHandle_js__WEBPACK_IMPORTED_MODULE_10__.BidiJSHandle) || _instanceof(arg, _ElementHandle_js__WEBPACK_IMPORTED_MODULE_8__.BidiElementHandle)) {
                    if (arg.realm !== this) {
                        if (!_instanceof(arg.realm, BidiFrameRealm) || !_instanceof(this, BidiFrameRealm)) {
                            throw new Error("Trying to evaluate JSHandle from different global types. Usually this means you're using a handle from a worker in a page or vice versa.");
                        }
                        if (arg.realm.environment !== this.environment) {
                            throw new Error("Trying to evaluate JSHandle from different frames. Usually this means you're using a handle from a page on a different page.");
                        }
                    }
                    if (arg.disposed) {
                        throw new Error('JSHandle is disposed!');
                    }
                    return arg.remoteValue();
                }
                return _Serializer_js__WEBPACK_IMPORTED_MODULE_11__.BidiSerializer.serialize(arg);
            }
        },
        {
            key: "destroyHandles",
            value: function destroyHandles(handles) {
                var _this = this;
                return _async_to_generator(function() {
                    var handleIds;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (_this.disposed) {
                                    return [
                                        2
                                    ];
                                }
                                handleIds = handles.map(function(param) {
                                    var id = param.id;
                                    return id;
                                }).filter(function(id) {
                                    return id !== undefined;
                                });
                                if (handleIds.length === 0) {
                                    return [
                                        2
                                    ];
                                }
                                return [
                                    4,
                                    _this.realm.disown(handleIds).catch(function(error) {
                                        // Exceptions might happen in case of a page been navigated or closed.
                                        // Swallow these since they are harmless and we don't leak anything in this case.
                                        (0,_common_util_js__WEBPACK_IMPORTED_MODULE_4__.debugError)(error);
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
            key: "adoptHandle",
            value: function adoptHandle(handle) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.evaluateHandle(function(node) {
                                        return node;
                                    }, handle)
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
            key: "transferHandle",
            value: function transferHandle(handle) {
                var _this = this;
                return _async_to_generator(function() {
                    var transferredHandle;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (handle.realm === _this) {
                                    return [
                                        2,
                                        handle
                                    ];
                                }
                                transferredHandle = _this.adoptHandle(handle);
                                return [
                                    4,
                                    handle.dispose()
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    4,
                                    transferredHandle
                                ];
                            case 2:
                                return [
                                    2,
                                    _state.sent()
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return BidiRealm;
}(_api_Realm_js__WEBPACK_IMPORTED_MODULE_0__.Realm);
function evaluate(returnByValue, pageFunction) {
    return _evaluate1.apply(this, arguments);
}
function _evaluate1() {
    _evaluate1 = _async_to_generator(function(returnByValue, pageFunction) {
        var _this, _len, args, _key, _getSourcePuppeteerURLIfAvailable, _getSourcePuppeteerURLIfAvailable_toString, sourceUrlComment, responsePromise, resultOwnership, serializationOptions, expression, functionDeclaration, _, _1, _tmp, _tmp1, _tmp2, result;
        var _arguments = arguments;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _this = this;
                    for(_len = _arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                        args[_key - 2] = _arguments[_key];
                    }
                    sourceUrlComment = (0,_common_util_js__WEBPACK_IMPORTED_MODULE_4__.getSourceUrlComment)((_getSourcePuppeteerURLIfAvailable_toString = (_getSourcePuppeteerURLIfAvailable = (0,_common_util_js__WEBPACK_IMPORTED_MODULE_4__.getSourcePuppeteerURLIfAvailable)(pageFunction)) === null || _getSourcePuppeteerURLIfAvailable === void 0 ? void 0 : _getSourcePuppeteerURLIfAvailable.toString()) !== null && _getSourcePuppeteerURLIfAvailable_toString !== void 0 ? _getSourcePuppeteerURLIfAvailable_toString : _common_util_js__WEBPACK_IMPORTED_MODULE_4__.PuppeteerURL.INTERNAL_URL);
                    resultOwnership = returnByValue ? "none" /* Bidi.Script.ResultOwnership.None */  : "root" /* Bidi.Script.ResultOwnership.Root */ ;
                    serializationOptions = returnByValue ? {} : {
                        maxObjectDepth: 0,
                        maxDomDepth: 0
                    };
                    if (!(0,_common_util_js__WEBPACK_IMPORTED_MODULE_4__.isString)(pageFunction)) return [
                        3,
                        1
                    ];
                    expression = _common_util_js__WEBPACK_IMPORTED_MODULE_4__.SOURCE_URL_REGEX.test(pageFunction) ? pageFunction : "".concat(pageFunction, "\n").concat(sourceUrlComment, "\n");
                    responsePromise = this.realm.evaluate(expression, true, {
                        resultOwnership: resultOwnership,
                        userActivation: true,
                        serializationOptions: serializationOptions
                    });
                    return [
                        3,
                        5
                    ];
                case 1:
                    functionDeclaration = (0,_util_Function_js__WEBPACK_IMPORTED_MODULE_6__.stringifyFunction)(pageFunction);
                    functionDeclaration = _common_util_js__WEBPACK_IMPORTED_MODULE_4__.SOURCE_URL_REGEX.test(functionDeclaration) ? functionDeclaration : "".concat(functionDeclaration, "\n").concat(sourceUrlComment, "\n");
                    _1 = (_ = this.realm).callFunction;
                    _tmp = [
                        functionDeclaration,
                        /* awaitPromise= */ true
                    ];
                    _tmp1 = {};
                    if (!args.some(function(arg) {
                        return _instanceof(arg, _common_LazyArg_js__WEBPACK_IMPORTED_MODULE_2__.LazyArg);
                    })) return [
                        3,
                        3
                    ];
                    return [
                        4,
                        Promise.all(args.map(function(arg) {
                            return _this.serializeAsync(arg);
                        }))
                    ];
                case 2:
                    _tmp2 = _state.sent();
                    return [
                        3,
                        4
                    ];
                case 3:
                    _tmp2 = args.map(function(arg) {
                        return _this.serialize(arg);
                    });
                    _state.label = 4;
                case 4:
                    responsePromise = _1.apply(_, _tmp.concat([
                        (_tmp1.// LazyArgs are used only internally and should not affect the order
                        // evaluate calls for the public APIs.
                        arguments = _tmp2, _tmp1.resultOwnership = resultOwnership, _tmp1.userActivation = true, _tmp1.serializationOptions = serializationOptions, _tmp1)
                    ]));
                    _state.label = 5;
                case 5:
                    return [
                        4,
                        responsePromise
                    ];
                case 6:
                    result = _state.sent();
                    if ('type' in result && result.type === 'exception') {
                        throw (0,_util_js__WEBPACK_IMPORTED_MODULE_12__.createEvaluationError)(result.exceptionDetails);
                    }
                    return [
                        2,
                        returnByValue ? _Deserializer_js__WEBPACK_IMPORTED_MODULE_7__.BidiDeserializer.deserialize(result.result) : this.createHandle(result.result)
                    ];
            }
        });
    });
    return _evaluate1.apply(this, arguments);
}
var _frame = /*#__PURE__*/ new WeakMap(), _initialize = /*#__PURE__*/ new WeakSet(), _bindingsInstalled = /*#__PURE__*/ new WeakMap();
/**
 * @internal
 */ var BidiFrameRealm = /*#__PURE__*/ function(BidiRealm) {
    "use strict";
    _inherits(BidiFrameRealm, BidiRealm);
    var _super = _create_super(BidiFrameRealm);
    function BidiFrameRealm(realm, frame) {
        _class_call_check(this, BidiFrameRealm);
        var _this;
        _this = _super.call(this, realm, frame.timeoutSettings);
        _class_private_method_init(_assert_this_initialized(_this), _initialize);
        _class_private_field_init(_assert_this_initialized(_this), _frame, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _bindingsInstalled, {
            writable: true,
            value: false
        });
        _class_private_field_set(_assert_this_initialized(_this), _frame, frame);
        return _this;
    }
    _create_class(BidiFrameRealm, [
        {
            key: "puppeteerUtil",
            get: function get() {
                var _this = this;
                var promise = Promise.resolve();
                if (!_class_private_field_get(this, _bindingsInstalled)) {
                    promise = Promise.all([
                        _ExposedFunction_js__WEBPACK_IMPORTED_MODULE_9__.ExposeableFunction.from(this.environment, '__ariaQuerySelector', _cdp_AriaQueryHandler_js__WEBPACK_IMPORTED_MODULE_1__.ARIAQueryHandler.queryOne, !!this.sandbox),
                        _ExposedFunction_js__WEBPACK_IMPORTED_MODULE_9__.ExposeableFunction.from(this.environment, '__ariaQuerySelectorAll', function() {
                            var _ref = _async_to_generator(function(element, selector) {
                                var _element_realm, results, _, _1, _tmp, _2, _3;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            results = _cdp_AriaQueryHandler_js__WEBPACK_IMPORTED_MODULE_1__.ARIAQueryHandler.queryAll(element, selector);
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
                        }(), !!this.sandbox)
                    ]);
                    _class_private_field_set(this, _bindingsInstalled, true);
                }
                return promise.then(function() {
                    return _get(_get_prototype_of(BidiFrameRealm.prototype), "puppeteerUtil", _this);
                });
            }
        },
        {
            key: "sandbox",
            get: function get() {
                return this.realm.sandbox;
            }
        },
        {
            key: "environment",
            get: function get() {
                return _class_private_field_get(this, _frame);
            }
        },
        {
            key: "adoptBackendNode",
            value: function adoptBackendNode(backendNodeId) {
                var _this = this;
                return _async_to_generator(function() {
                    var env_1, object, _, _1, _tmp, _tmp1, handle, e_1;
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
                                    5,
                                    6,
                                    7
                                ]);
                                _1 = (_ = _class_private_field_get(_this, _frame).client).send;
                                _tmp = [
                                    'DOM.resolveNode'
                                ];
                                _tmp1 = {
                                    backendNodeId: backendNodeId
                                };
                                return [
                                    4,
                                    _this.realm.resolveExecutionContextId()
                                ];
                            case 2:
                                return [
                                    4,
                                    _1.apply(_, _tmp.concat([
                                        (_tmp1.executionContextId = _state.sent(), _tmp1)
                                    ]))
                                ];
                            case 3:
                                object = _state.sent().object;
                                handle = __addDisposableResource(env_1, _ElementHandle_js__WEBPACK_IMPORTED_MODULE_8__.BidiElementHandle.from({
                                    handle: object.objectId,
                                    type: 'node'
                                }, _this), false);
                                return [
                                    4,
                                    handle.evaluateHandle(function(element) {
                                        return element;
                                    })
                                ];
                            case 4:
                                // We need the sharedId, so we perform the following to obtain it.
                                return [
                                    2,
                                    _state.sent()
                                ];
                            case 5:
                                e_1 = _state.sent();
                                env_1.error = e_1;
                                env_1.hasError = true;
                                return [
                                    3,
                                    7
                                ];
                            case 6:
                                __disposeResources(env_1);
                                return [
                                    7
                                ];
                            case 7:
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
            value: function from(realm, frame) {
                var frameRealm = new BidiFrameRealm(realm, frame);
                _class_private_method_get(frameRealm, _initialize, initialize).call(frameRealm);
                return frameRealm;
            }
        }
    ]);
    return BidiFrameRealm;
}(BidiRealm);
function initialize() {
    var _this = this;
    _get(_get_prototype_of(BidiFrameRealm.prototype), "initialize", this).call(this);
    // This should run first.
    this.realm.on('updated', function() {
        _this.environment.clearDocumentHandle();
        _class_private_field_set(_this, _bindingsInstalled, false);
    });
}
var _worker = /*#__PURE__*/ new WeakMap();
/**
 * @internal
 */ var BidiWorkerRealm = /*#__PURE__*/ function(BidiRealm) {
    "use strict";
    _inherits(BidiWorkerRealm, BidiRealm);
    var _super = _create_super(BidiWorkerRealm);
    function BidiWorkerRealm(realm, frame) {
        _class_call_check(this, BidiWorkerRealm);
        var _this;
        _this = _super.call(this, realm, frame.timeoutSettings);
        _class_private_field_init(_assert_this_initialized(_this), _worker, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(_assert_this_initialized(_this), _worker, frame);
        return _this;
    }
    _create_class(BidiWorkerRealm, [
        {
            key: "environment",
            get: function get() {
                return _class_private_field_get(this, _worker);
            }
        },
        {
            key: "adoptBackendNode",
            value: function adoptBackendNode() {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        throw new Error('Cannot adopt DOM nodes into a worker.');
                    });
                })();
            }
        }
    ], [
        {
            key: "from",
            value: function from(realm, worker) {
                var workerRealm = new BidiWorkerRealm(realm, worker);
                workerRealm.initialize();
                return workerRealm;
            }
        }
    ]);
    return BidiWorkerRealm;
} //# sourceMappingURL=Realm.js.map
(BidiRealm);


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/bidi/Serializer.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BidiSerializer: function() { return BidiSerializer; }
});
/* harmony import */var _common_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _class_static_private_method_get(receiver, classConstructor, method) {
    _class_check_private_static_access(receiver, classConstructor);
    return method;
}
function _class_check_private_static_access(receiver, classConstructor) {
    if (receiver !== classConstructor) {
        throw new TypeError("Private static access of wrong provenance");
    }
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

/**
 * @internal
 */ var UnserializableError = /*#__PURE__*/ function(Error1) {
    "use strict";
    _inherits(UnserializableError, Error1);
    var _super = _create_super(UnserializableError);
    function UnserializableError() {
        _class_call_check(this, UnserializableError);
        return _super.apply(this, arguments);
    }
    return UnserializableError;
}(_wrap_native_super(Error));
/**
 * @internal
 */ var BidiSerializer = /*#__PURE__*/ function() {
    "use strict";
    function BidiSerializer() {
        _class_call_check(this, BidiSerializer);
    }
    _create_class(BidiSerializer, null, [
        {
            key: "serialize",
            value: function serialize(arg) {
                switch(typeof arg === "undefined" ? "undefined" : _type_of(arg)){
                    case 'symbol':
                    case 'function':
                        throw new UnserializableError("Unable to serializable ".concat(typeof arg === "undefined" ? "undefined" : _type_of(arg)));
                    case 'object':
                        return _class_static_private_method_get(this, BidiSerializer, serializeObject).call(BidiSerializer, arg);
                    case 'undefined':
                        return {
                            type: 'undefined'
                        };
                    case 'number':
                        return _class_static_private_method_get(this, BidiSerializer, serializeNumber).call(BidiSerializer, arg);
                    case 'bigint':
                        return {
                            type: 'bigint',
                            value: arg.toString()
                        };
                    case 'string':
                        return {
                            type: 'string',
                            value: arg
                        };
                    case 'boolean':
                        return {
                            type: 'boolean',
                            value: arg
                        };
                }
            }
        }
    ]);
    return BidiSerializer;
} //# sourceMappingURL=Serializer.js.map
();
function serializeNumber(arg) {
    var value;
    if (Object.is(arg, -0)) {
        value = '-0';
    } else if (Object.is(arg, Infinity)) {
        value = 'Infinity';
    } else if (Object.is(arg, -Infinity)) {
        value = '-Infinity';
    } else if (Object.is(arg, NaN)) {
        value = 'NaN';
    } else {
        value = arg;
    }
    return {
        type: 'number',
        value: value
    };
}
function serializeObject(arg) {
    var _this = this;
    if (arg === null) {
        return {
            type: 'null'
        };
    } else if (Array.isArray(arg)) {
        var parsedArray = arg.map(function(subArg) {
            return _this.serialize(subArg);
        });
        return {
            type: 'array',
            value: parsedArray
        };
    } else if ((0,_common_util_js__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(arg)) {
        try {
            JSON.stringify(arg);
        } catch (error) {
            if (_instanceof(error, TypeError) && error.message.startsWith('Converting circular structure to JSON')) {
                error.message += ' Recursive objects are not allowed.';
            }
            throw error;
        }
        var parsedObject = [];
        for(var key in arg){
            parsedObject.push([
                this.serialize(key),
                this.serialize(arg[key])
            ]);
        }
        return {
            type: 'object',
            value: parsedObject
        };
    } else if ((0,_common_util_js__WEBPACK_IMPORTED_MODULE_0__.isRegExp)(arg)) {
        return {
            type: 'regexp',
            value: {
                pattern: arg.source,
                flags: arg.flags
            }
        };
    } else if ((0,_common_util_js__WEBPACK_IMPORTED_MODULE_0__.isDate)(arg)) {
        return {
            type: 'date',
            value: arg.toISOString()
        };
    }
    throw new UnserializableError('Custom object serialization not possible. Use plain objects instead.');
}


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/bidi/util.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createEvaluationError: function() { return createEvaluationError; },
  rewriteNavigationError: function() { return rewriteNavigationError; }
});
/* harmony import */var _common_Errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Errors.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/Errors.js");
/* harmony import */var _common_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */var _Deserializer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Deserializer.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/Deserializer.js");
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
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_array(arr) {
    return _array_with_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_rest();
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



/**
 * @internal
 */ function createEvaluationError(details) {
    if (details.exception.type !== 'error') {
        return _Deserializer_js__WEBPACK_IMPORTED_MODULE_2__.BidiDeserializer.deserialize(details.exception);
    }
    var _details_text_split = _to_array(details.text.split(': ')), tmp = _details_text_split[0], name = tmp === void 0 ? '' : tmp, parts = _details_text_split.slice(1);
    var message = parts.join(': ');
    var error = new Error(message);
    error.name = name;
    // The first line is this function which we ignore.
    var stackLines = [];
    if (details.stackTrace && stackLines.length < Error.stackTraceLimit) {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = details.stackTrace.callFrames.reverse()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var frame = _step.value;
                if (_common_util_js__WEBPACK_IMPORTED_MODULE_1__.PuppeteerURL.isPuppeteerURL(frame.url) && frame.url !== _common_util_js__WEBPACK_IMPORTED_MODULE_1__.PuppeteerURL.INTERNAL_URL) {
                    var url = _common_util_js__WEBPACK_IMPORTED_MODULE_1__.PuppeteerURL.parse(frame.url);
                    stackLines.unshift("    at ".concat(frame.functionName || url.functionName, " (").concat(url.functionName, " at ").concat(url.siteString, ", <anonymous>:").concat(frame.lineNumber, ":").concat(frame.columnNumber, ")"));
                } else {
                    stackLines.push("    at ".concat(frame.functionName || '<anonymous>', " (").concat(frame.url, ":").concat(frame.lineNumber, ":").concat(frame.columnNumber, ")"));
                }
                if (stackLines.length >= Error.stackTraceLimit) {
                    break;
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
    }
    error.stack = [
        details.text
    ].concat(_to_consumable_array(stackLines)).join('\n');
    return error;
}
/**
 * @internal
 */ function rewriteNavigationError(message, ms) {
    return function(error) {
        if (_instanceof(error, _common_Errors_js__WEBPACK_IMPORTED_MODULE_0__.ProtocolError)) {
            error.message += " at ".concat(message);
        } else if (_instanceof(error, _common_Errors_js__WEBPACK_IMPORTED_MODULE_0__.TimeoutError)) {
            error.message = "Navigation timeout of ".concat(ms, " ms exceeded");
        }
        throw error;
    };
} //# sourceMappingURL=util.js.map


}),

}]);