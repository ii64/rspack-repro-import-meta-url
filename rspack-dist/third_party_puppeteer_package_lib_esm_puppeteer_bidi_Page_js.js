"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_bidi_Page_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/bidi/Page.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BidiPage: function() { return BidiPage; }
});
/* harmony import */var _third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../third_party/rxjs/rxjs.js */ "./third_party/puppeteer/package/lib/esm/third_party/rxjs/rxjs.js");
/* harmony import */var _api_Page_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/Page.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/Page.js");
/* harmony import */var _cdp_Coverage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cdp/Coverage.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Coverage.js");
/* harmony import */var _cdp_EmulationManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cdp/EmulationManager.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/EmulationManager.js");
/* harmony import */var _cdp_Tracing_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cdp/Tracing.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Tracing.js");
/* harmony import */var _common_Errors_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/Errors.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/Errors.js");
/* harmony import */var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/EventEmitter.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/EventEmitter.js");
/* harmony import */var _common_util_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */var _util_assert_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/assert.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js");
/* harmony import */var _util_decorators_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/decorators.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/decorators.js");
/* harmony import */var _util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/ErrorLike.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/ErrorLike.js");
/* harmony import */var _Frame_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Frame.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/Frame.js");
/* harmony import */var _Input_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Input.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/Input.js");
/* harmony import */var _util_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/util.js");
/**
 * @license
 * Copyright 2022 Google Inc.
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
var __runInitializers = undefined && undefined.__runInitializers || function(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++){
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
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
 * Implements Page using WebDriver BiDi.
 *
 * @internal
 */ var BidiPage = function() {
    var initialize = function initialize() {
        var _this = this;
        _class_private_field_get(this, _frame).browsingContext.on('closed', function() {
            _this.trustedEmitter.emit("close" /* PageEvent.Close */ , undefined);
            _this.trustedEmitter.removeAllListeners();
        });
        this.trustedEmitter.on("workercreated" /* PageEvent.WorkerCreated */ , function(worker) {
            _class_private_field_get(_this, _workers).add(worker);
        });
        this.trustedEmitter.on("workerdestroyed" /* PageEvent.WorkerDestroyed */ , function(worker) {
            _class_private_field_get(_this, _workers).delete(worker);
        });
    };
    var toggleInterception = function toggleInterception(phases, interception, expected) {
        return _toggleInterception1.apply(this, arguments);
    };
    var applyNetworkConditions = function applyNetworkConditions() {
        return _applyNetworkConditions1.apply(this, arguments);
    };
    var go = function go(delta, options) {
        return _go1.apply(this, arguments);
    };
    var _trustedEmitter_accessor_storage, _browserContext, _frame, _viewport, _workers, _cdpEmulationManager, _emulatedNetworkConditions, _initialize, _userAgentInterception, _userAgentPreloadScript, _userInterception, _extraHeadersInterception, _authInterception, _toggleInterception, _applyNetworkConditions, _go, _BidiPage;
    var _classSuper = _api_Page_js__WEBPACK_IMPORTED_MODULE_1__.Page;
    var _trustedEmitter_decorators;
    var _trustedEmitter_initializers = [];
    var _trustedEmitter_extraInitializers = [];
    return _trustedEmitter_accessor_storage = /*#__PURE__*/ new WeakMap(), _browserContext = /*#__PURE__*/ new WeakMap(), _frame = /*#__PURE__*/ new WeakMap(), _viewport = /*#__PURE__*/ new WeakMap(), _workers = /*#__PURE__*/ new WeakMap(), _cdpEmulationManager = /*#__PURE__*/ new WeakMap(), _emulatedNetworkConditions = /*#__PURE__*/ new WeakMap(), _initialize = /*#__PURE__*/ new WeakSet(), _userAgentInterception = /*#__PURE__*/ new WeakMap(), _userAgentPreloadScript = /*#__PURE__*/ new WeakMap(), _userInterception = /*#__PURE__*/ new WeakMap(), _extraHeadersInterception = /*#__PURE__*/ new WeakMap(), _authInterception = /*#__PURE__*/ new WeakMap(), _toggleInterception = /*#__PURE__*/ new WeakSet(), _applyNetworkConditions = /*#__PURE__*/ new WeakSet(), _go = /*#__PURE__*/ new WeakSet(), _BidiPage = /*#__PURE__*/ function(_classSuper) {
        "use strict";
        _inherits(BidiPage, _classSuper);
        var _super = _create_super(BidiPage);
        function BidiPage(browserContext, browsingContext) {
            _class_call_check(this, BidiPage);
            var _this;
            _this = _super.call(this);
            _class_private_method_init(_assert_this_initialized(_this), _initialize);
            _class_private_method_init(_assert_this_initialized(_this), _toggleInterception);
            _class_private_method_init(_assert_this_initialized(_this), _applyNetworkConditions);
            _class_private_method_init(_assert_this_initialized(_this), _go);
            _class_private_field_init(_assert_this_initialized(_this), _trustedEmitter_accessor_storage, {
                writable: true,
                value: __runInitializers(_assert_this_initialized(_this), _trustedEmitter_initializers, new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_6__.EventEmitter())
            });
            _class_private_field_init(_assert_this_initialized(_this), _browserContext, {
                writable: true,
                value: __runInitializers(_assert_this_initialized(_this), _trustedEmitter_extraInitializers)
            });
            _class_private_field_init(_assert_this_initialized(_this), _frame, {
                writable: true,
                value: void 0
            });
            _class_private_field_init(_assert_this_initialized(_this), _viewport, {
                writable: true,
                value: null
            });
            _class_private_field_init(_assert_this_initialized(_this), _workers, {
                writable: true,
                value: new Set()
            });
            _define_property(_assert_this_initialized(_this), "keyboard", void 0);
            _define_property(_assert_this_initialized(_this), "mouse", void 0);
            _define_property(_assert_this_initialized(_this), "touchscreen", void 0);
            _define_property(_assert_this_initialized(_this), "tracing", void 0);
            _define_property(_assert_this_initialized(_this), "coverage", void 0);
            _class_private_field_init(_assert_this_initialized(_this), _cdpEmulationManager, {
                writable: true,
                value: void 0
            });
            _class_private_field_init(_assert_this_initialized(_this), _emulatedNetworkConditions, {
                writable: true,
                value: void 0
            });
            /**
         * @internal
         */ _define_property(_assert_this_initialized(_this), "_userAgentHeaders", {});
            _class_private_field_init(_assert_this_initialized(_this), _userAgentInterception, {
                writable: true,
                value: void 0
            });
            _class_private_field_init(_assert_this_initialized(_this), _userAgentPreloadScript, {
                writable: true,
                value: void 0
            });
            _class_private_field_init(_assert_this_initialized(_this), _userInterception, {
                writable: true,
                value: void 0
            });
            /**
         * @internal
         */ _define_property(_assert_this_initialized(_this), "_extraHTTPHeaders", {});
            _class_private_field_init(_assert_this_initialized(_this), _extraHeadersInterception, {
                writable: true,
                value: void 0
            });
            /**
         * @internal
         */ _define_property(_assert_this_initialized(_this), "_credentials", null);
            _class_private_field_init(_assert_this_initialized(_this), _authInterception, {
                writable: true,
                value: void 0
            });
            _class_private_field_set(_assert_this_initialized(_this), _browserContext, browserContext);
            _class_private_field_set(_assert_this_initialized(_this), _frame, _Frame_js__WEBPACK_IMPORTED_MODULE_11__.BidiFrame.from(_assert_this_initialized(_this), browsingContext));
            _class_private_field_set(_assert_this_initialized(_this), _cdpEmulationManager, new _cdp_EmulationManager_js__WEBPACK_IMPORTED_MODULE_3__.EmulationManager(_class_private_field_get(_this, _frame).client));
            _this.tracing = new _cdp_Tracing_js__WEBPACK_IMPORTED_MODULE_4__.Tracing(_class_private_field_get(_this, _frame).client);
            _this.coverage = new _cdp_Coverage_js__WEBPACK_IMPORTED_MODULE_2__.Coverage(_class_private_field_get(_this, _frame).client);
            _this.keyboard = new _Input_js__WEBPACK_IMPORTED_MODULE_12__.BidiKeyboard(_assert_this_initialized(_this));
            _this.mouse = new _Input_js__WEBPACK_IMPORTED_MODULE_12__.BidiMouse(_assert_this_initialized(_this));
            _this.touchscreen = new _Input_js__WEBPACK_IMPORTED_MODULE_12__.BidiTouchscreen(_assert_this_initialized(_this));
            return _this;
        }
        _create_class(BidiPage, [
            {
                key: "trustedEmitter",
                get: function get() {
                    return _class_private_field_get(this, _trustedEmitter_accessor_storage);
                },
                set: function set(value) {
                    _class_private_field_set(this, _trustedEmitter_accessor_storage, value);
                }
            },
            {
                key: "_client",
                value: function _client() {
                    return _class_private_field_get(this, _frame).client;
                }
            },
            {
                key: "setUserAgent",
                value: function setUserAgent(userAgent, userAgentMetadata) {
                    var _this = this;
                    return _async_to_generator(function() {
                        var enable, _tmp, _tmp1, changeUserAgent, frames, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, frame, _frames, _ref, evaluateToken;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    if (!(!_class_private_field_get(_this, _browserContext).browser().cdpSupported && userAgentMetadata)) return [
                                        3,
                                        1
                                    ];
                                    throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_5__.UnsupportedOperation('Current Browser does not support `userAgentMetadata`');
                                case 1:
                                    if (!(_class_private_field_get(_this, _browserContext).browser().cdpSupported && userAgentMetadata)) return [
                                        3,
                                        3
                                    ];
                                    return [
                                        4,
                                        _this._client().send('Network.setUserAgentOverride', {
                                            userAgent: userAgent,
                                            userAgentMetadata: userAgentMetadata
                                        })
                                    ];
                                case 2:
                                    return [
                                        2,
                                        _state.sent()
                                    ];
                                case 3:
                                    enable = userAgent !== '';
                                    if (!(userAgent !== null && userAgent !== void 0)) return [
                                        3,
                                        4
                                    ];
                                    _tmp = userAgent;
                                    return [
                                        3,
                                        6
                                    ];
                                case 4:
                                    return [
                                        4,
                                        _class_private_field_get(_this, _browserContext).browser().userAgent()
                                    ];
                                case 5:
                                    _tmp = _state.sent();
                                    _state.label = 6;
                                case 6:
                                    userAgent = _tmp;
                                    _this._userAgentHeaders = enable ? {
                                        'User-Agent': userAgent
                                    } : {};
                                    _tmp1 = [
                                        _this,
                                        _userAgentInterception
                                    ];
                                    return [
                                        4,
                                        _class_private_method_get(_this, _toggleInterception, toggleInterception).call(_this, [
                                            "beforeRequestSent" /* Bidi.Network.InterceptPhase.BeforeRequestSent */ 
                                        ], _class_private_field_get(_this, _userAgentInterception), enable)
                                    ];
                                case 7:
                                    _class_private_field_set.apply(void 0, _tmp1.concat([
                                        _state.sent()
                                    ]));
                                    changeUserAgent = function(userAgent) {
                                        Object.defineProperty(navigator, 'userAgent', {
                                            value: userAgent
                                        });
                                    };
                                    frames = [
                                        _class_private_field_get(_this, _frame)
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
                                    if (!_class_private_field_get(_this, _userAgentPreloadScript)) return [
                                        3,
                                        9
                                    ];
                                    return [
                                        4,
                                        _this.removeScriptToEvaluateOnNewDocument(_class_private_field_get(_this, _userAgentPreloadScript))
                                    ];
                                case 8:
                                    _state.sent();
                                    _state.label = 9;
                                case 9:
                                    return [
                                        4,
                                        Promise.all([
                                            enable ? _this.evaluateOnNewDocument(changeUserAgent, userAgent) : undefined,
                                            // When we disable the UserAgent we want to
                                            // evaluate the original value in all Browsing Contexts
                                            frames.map(function(frame) {
                                                return frame.evaluate(changeUserAgent, userAgent);
                                            })
                                        ])
                                    ];
                                case 10:
                                    _ref = _sliced_to_array.apply(void 0, [
                                        _state.sent(),
                                        1
                                    ]), evaluateToken = _ref[0];
                                    _class_private_field_set(_this, _userAgentPreloadScript, evaluateToken === null || evaluateToken === void 0 ? void 0 : evaluateToken.identifier);
                                    return [
                                        2
                                    ];
                            }
                        });
                    })();
                }
            },
            {
                key: "setBypassCSP",
                value: function setBypassCSP(enabled) {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    // TODO: handle CDP-specific cases such as mprach.
                                    return [
                                        4,
                                        _this._client().send('Page.setBypassCSP', {
                                            enabled: enabled
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
                key: "queryObjects",
                value: function queryObjects(prototypeHandle) {
                    var _this = this;
                    return _async_to_generator(function() {
                        var response;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_8__.assert)(!prototypeHandle.disposed, 'Prototype JSHandle is disposed!');
                                    (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_8__.assert)(prototypeHandle.id, 'Prototype JSHandle must not be referencing primitive value');
                                    return [
                                        4,
                                        _class_private_field_get(_this, _frame).client.send('Runtime.queryObjects', {
                                            prototypeObjectId: prototypeHandle.id
                                        })
                                    ];
                                case 1:
                                    response = _state.sent();
                                    return [
                                        2,
                                        _class_private_field_get(_this, _frame).mainRealm().createHandle({
                                            type: 'array',
                                            handle: response.objects.objectId
                                        })
                                    ];
                            }
                        });
                    })();
                }
            },
            {
                key: "browser",
                value: function browser() {
                    return this.browserContext().browser();
                }
            },
            {
                key: "browserContext",
                value: function browserContext() {
                    return _class_private_field_get(this, _browserContext);
                }
            },
            {
                key: "mainFrame",
                value: function mainFrame() {
                    return _class_private_field_get(this, _frame);
                }
            },
            {
                key: "focusedFrame",
                value: function focusedFrame() {
                    var _this = this;
                    return _async_to_generator(function() {
                        var env_1, handle, _tmp, value, frame, e_1;
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
                                        3,
                                        4,
                                        5
                                    ]);
                                    _tmp = [
                                        env_1
                                    ];
                                    return [
                                        4,
                                        _this.mainFrame().isolatedRealm().evaluateHandle(function() {
                                            var win = window;
                                            while(_instanceof(win.document.activeElement, win.HTMLIFrameElement) || _instanceof(win.document.activeElement, win.HTMLFrameElement)){
                                                if (win.document.activeElement.contentWindow === null) {
                                                    break;
                                                }
                                                win = win.document.activeElement.contentWindow;
                                            }
                                            return win;
                                        })
                                    ];
                                case 2:
                                    handle = __addDisposableResource.apply(void 0, _tmp.concat([
                                        _state.sent(),
                                        false
                                    ]));
                                    value = handle.remoteValue();
                                    (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_8__.assert)(value.type === 'window');
                                    frame = _this.frames().find(function(frame) {
                                        return frame._id === value.value.context;
                                    });
                                    (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_8__.assert)(frame);
                                    return [
                                        2,
                                        frame
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
                                    return [
                                        2
                                    ];
                            }
                        });
                    })();
                }
            },
            {
                key: "frames",
                value: function frames() {
                    var frames = [
                        _class_private_field_get(this, _frame)
                    ];
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = frames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var frame = _step.value;
                            var _frames;
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
                    return frames;
                }
            },
            {
                key: "isClosed",
                value: function isClosed() {
                    return _class_private_field_get(this, _frame).detached;
                }
            },
            {
                key: "close",
                value: function close(options) {
                    var _this = this;
                    return _async_to_generator(function() {
                        var env_2, _guard, _tmp, e, e_2;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    env_2 = {
                                        stack: [],
                                        error: void 0,
                                        hasError: false
                                    };
                                    _state.label = 1;
                                case 1:
                                    _state.trys.push([
                                        1,
                                        7,
                                        8,
                                        9
                                    ]);
                                    _tmp = [
                                        env_2
                                    ];
                                    return [
                                        4,
                                        _class_private_field_get(_this, _browserContext).waitForScreenshotOperations()
                                    ];
                                case 2:
                                    _guard = __addDisposableResource.apply(void 0, _tmp.concat([
                                        _state.sent(),
                                        false
                                    ]));
                                    _state.label = 3;
                                case 3:
                                    _state.trys.push([
                                        3,
                                        5,
                                        ,
                                        6
                                    ]);
                                    return [
                                        4,
                                        _class_private_field_get(_this, _frame).browsingContext.close(options === null || options === void 0 ? void 0 : options.runBeforeUnload)
                                    ];
                                case 4:
                                    _state.sent();
                                    return [
                                        3,
                                        6
                                    ];
                                case 5:
                                    e = _state.sent();
                                    return [
                                        2
                                    ];
                                case 6:
                                    return [
                                        3,
                                        9
                                    ];
                                case 7:
                                    e_2 = _state.sent();
                                    env_2.error = e_2;
                                    env_2.hasError = true;
                                    return [
                                        3,
                                        9
                                    ];
                                case 8:
                                    __disposeResources(env_2);
                                    return [
                                        7
                                    ];
                                case 9:
                                    return [
                                        2
                                    ];
                            }
                        });
                    })();
                }
            },
            {
                key: "reload",
                value: function reload() {
                    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    var _this = this;
                    return _async_to_generator(function() {
                        var _options_timeout, _ref, response;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        Promise.all([
                                            _class_private_field_get(_this, _frame).waitForNavigation(options),
                                            _class_private_field_get(_this, _frame).browsingContext.reload()
                                        ]).catch((0,_util_js__WEBPACK_IMPORTED_MODULE_13__.rewriteNavigationError)(_this.url(), (_options_timeout = options.timeout) !== null && _options_timeout !== void 0 ? _options_timeout : _this._timeoutSettings.navigationTimeout()))
                                    ];
                                case 1:
                                    _ref = _sliced_to_array.apply(void 0, [
                                        _state.sent(),
                                        1
                                    ]), response = _ref[0];
                                    return [
                                        2,
                                        response
                                    ];
                            }
                        });
                    })();
                }
            },
            {
                key: "setDefaultNavigationTimeout",
                value: function setDefaultNavigationTimeout(timeout) {
                    this._timeoutSettings.setDefaultNavigationTimeout(timeout);
                }
            },
            {
                key: "setDefaultTimeout",
                value: function setDefaultTimeout(timeout) {
                    this._timeoutSettings.setDefaultTimeout(timeout);
                }
            },
            {
                key: "getDefaultTimeout",
                value: function getDefaultTimeout() {
                    return this._timeoutSettings.timeout();
                }
            },
            {
                key: "isJavaScriptEnabled",
                value: function isJavaScriptEnabled() {
                    return _class_private_field_get(this, _cdpEmulationManager).javascriptEnabled;
                }
            },
            {
                key: "setGeolocation",
                value: function setGeolocation(options) {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _class_private_field_get(_this, _cdpEmulationManager).setGeolocation(options)
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
                key: "setJavaScriptEnabled",
                value: function setJavaScriptEnabled(enabled) {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _class_private_field_get(_this, _cdpEmulationManager).setJavaScriptEnabled(enabled)
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
                key: "emulateMediaType",
                value: function emulateMediaType(type) {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _class_private_field_get(_this, _cdpEmulationManager).emulateMediaType(type)
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
                key: "emulateCPUThrottling",
                value: function emulateCPUThrottling(factor) {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _class_private_field_get(_this, _cdpEmulationManager).emulateCPUThrottling(factor)
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
                key: "emulateMediaFeatures",
                value: function emulateMediaFeatures(features) {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _class_private_field_get(_this, _cdpEmulationManager).emulateMediaFeatures(features)
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
                key: "emulateTimezone",
                value: function emulateTimezone(timezoneId) {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _class_private_field_get(_this, _cdpEmulationManager).emulateTimezone(timezoneId)
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
                key: "emulateIdleState",
                value: function emulateIdleState(overrides) {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _class_private_field_get(_this, _cdpEmulationManager).emulateIdleState(overrides)
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
                key: "emulateVisionDeficiency",
                value: function emulateVisionDeficiency(type) {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _class_private_field_get(_this, _cdpEmulationManager).emulateVisionDeficiency(type)
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
                key: "setViewport",
                value: function setViewport(viewport) {
                    var _this = this;
                    return _async_to_generator(function() {
                        var needsReload;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    if (!!_this.browser().cdpSupported) return [
                                        3,
                                        2
                                    ];
                                    return [
                                        4,
                                        _class_private_field_get(_this, _frame).browsingContext.setViewport({
                                            viewport: (viewport === null || viewport === void 0 ? void 0 : viewport.width) && (viewport === null || viewport === void 0 ? void 0 : viewport.height) ? {
                                                width: viewport.width,
                                                height: viewport.height
                                            } : null,
                                            devicePixelRatio: (viewport === null || viewport === void 0 ? void 0 : viewport.deviceScaleFactor) ? viewport.deviceScaleFactor : null
                                        })
                                    ];
                                case 1:
                                    _state.sent();
                                    _class_private_field_set(_this, _viewport, viewport);
                                    return [
                                        2
                                    ];
                                case 2:
                                    return [
                                        4,
                                        _class_private_field_get(_this, _cdpEmulationManager).emulateViewport(viewport)
                                    ];
                                case 3:
                                    needsReload = _state.sent();
                                    _class_private_field_set(_this, _viewport, viewport);
                                    if (!needsReload) return [
                                        3,
                                        5
                                    ];
                                    return [
                                        4,
                                        _this.reload()
                                    ];
                                case 4:
                                    _state.sent();
                                    _state.label = 5;
                                case 5:
                                    return [
                                        2
                                    ];
                            }
                        });
                    })();
                }
            },
            {
                key: "viewport",
                value: function viewport() {
                    return _class_private_field_get(this, _viewport);
                }
            },
            {
                key: "pdf",
                value: function pdf() {
                    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    var _this = this;
                    return _async_to_generator(function() {
                        var tmp, ms, _options_path, path, _parsePDFOptions, background, margin, landscape, width, height, ranges, scale, preferCSSPageSize, pageRanges, data, buffer;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    tmp = options.timeout, ms = tmp === void 0 ? _this._timeoutSettings.timeout() : tmp, _options_path = options.path, path = _options_path === void 0 ? undefined : _options_path;
                                    _parsePDFOptions = (0,_common_util_js__WEBPACK_IMPORTED_MODULE_7__.parsePDFOptions)(options, 'cm'), background = _parsePDFOptions.printBackground, margin = _parsePDFOptions.margin, landscape = _parsePDFOptions.landscape, width = _parsePDFOptions.width, height = _parsePDFOptions.height, ranges = _parsePDFOptions.pageRanges, scale = _parsePDFOptions.scale, preferCSSPageSize = _parsePDFOptions.preferCSSPageSize;
                                    pageRanges = ranges ? ranges.split(', ') : [];
                                    return [
                                        4,
                                        (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.firstValueFrom)((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.from)(_this.mainFrame().isolatedRealm().evaluate(function() {
                                            return document.fonts.ready;
                                        })).pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.raceWith)((0,_common_util_js__WEBPACK_IMPORTED_MODULE_7__.timeout)(ms))))
                                    ];
                                case 1:
                                    _state.sent();
                                    return [
                                        4,
                                        (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.firstValueFrom)((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.from)(_class_private_field_get(_this, _frame).browsingContext.print({
                                            background: background,
                                            margin: margin,
                                            orientation: landscape ? 'landscape' : 'portrait',
                                            page: {
                                                width: width,
                                                height: height
                                            },
                                            pageRanges: pageRanges,
                                            scale: scale,
                                            shrinkToFit: !preferCSSPageSize
                                        })).pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.raceWith)((0,_common_util_js__WEBPACK_IMPORTED_MODULE_7__.timeout)(ms))))
                                    ];
                                case 2:
                                    data = _state.sent();
                                    buffer = Buffer.from(data, 'base64');
                                    return [
                                        4,
                                        _this._maybeWriteBufferToFile(path, buffer)
                                    ];
                                case 3:
                                    _state.sent();
                                    return [
                                        2,
                                        buffer
                                    ];
                            }
                        });
                    })();
                }
            },
            {
                key: "createPDFStream",
                value: function createPDFStream(options) {
                    var _this = this;
                    return _async_to_generator(function() {
                        var buffer;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this.pdf(options)
                                    ];
                                case 1:
                                    buffer = _state.sent();
                                    return [
                                        2,
                                        new ReadableStream({
                                            start: function start(controller) {
                                                controller.enqueue(buffer);
                                                controller.close();
                                            }
                                        })
                                    ];
                            }
                        });
                    })();
                }
            },
            {
                key: "_screenshot",
                value: function _screenshot(options) {
                    var _this = this;
                    return _async_to_generator(function() {
                        var clip, type, captureBeyondViewport, quality, box, _ref, pageLeft, pageTop, data;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    clip = options.clip, type = options.type, captureBeyondViewport = options.captureBeyondViewport, quality = options.quality;
                                    if (options.omitBackground !== undefined && options.omitBackground) {
                                        throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_5__.UnsupportedOperation("BiDi does not support 'omitBackground'.");
                                    }
                                    if (options.optimizeForSpeed !== undefined && options.optimizeForSpeed) {
                                        throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_5__.UnsupportedOperation("BiDi does not support 'optimizeForSpeed'.");
                                    }
                                    if (options.fromSurface !== undefined && !options.fromSurface) {
                                        throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_5__.UnsupportedOperation("BiDi does not support 'fromSurface'.");
                                    }
                                    if (clip !== undefined && clip.scale !== undefined && clip.scale !== 1) {
                                        throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_5__.UnsupportedOperation("BiDi does not support 'scale' in 'clip'.");
                                    }
                                    if (!clip) return [
                                        3,
                                        3
                                    ];
                                    if (!captureBeyondViewport) return [
                                        3,
                                        1
                                    ];
                                    box = clip;
                                    return [
                                        3,
                                        3
                                    ];
                                case 1:
                                    return [
                                        4,
                                        _this.evaluate(function() {
                                            if (!window.visualViewport) {
                                                throw new Error('window.visualViewport is not supported.');
                                            }
                                            return [
                                                window.visualViewport.pageLeft,
                                                window.visualViewport.pageTop
                                            ];
                                        })
                                    ];
                                case 2:
                                    _ref = _sliced_to_array.apply(void 0, [
                                        _state.sent(),
                                        2
                                    ]), pageLeft = _ref[0], pageTop = _ref[1];
                                    box = _object_spread_props(_object_spread({}, clip), {
                                        x: clip.x - pageLeft,
                                        y: clip.y - pageTop
                                    });
                                    _state.label = 3;
                                case 3:
                                    return [
                                        4,
                                        _class_private_field_get(_this, _frame).browsingContext.captureScreenshot(_object_spread({
                                            origin: captureBeyondViewport ? 'document' : 'viewport',
                                            format: _object_spread({
                                                type: "image/".concat(type)
                                            }, quality !== undefined ? {
                                                quality: quality / 100
                                            } : {})
                                        }, box ? {
                                            clip: _object_spread({
                                                type: 'box'
                                            }, box)
                                        } : {}))
                                    ];
                                case 4:
                                    data = _state.sent();
                                    return [
                                        2,
                                        data
                                    ];
                            }
                        });
                    })();
                }
            },
            {
                key: "createCDPSession",
                value: function createCDPSession() {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _class_private_field_get(_this, _frame).createCDPSession()
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
                key: "bringToFront",
                value: function bringToFront() {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _class_private_field_get(_this, _frame).browsingContext.activate()
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
                key: "evaluateOnNewDocument",
                value: function evaluateOnNewDocument(pageFunction) {
                    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                        args[_key - 1] = arguments[_key];
                    }
                    var _this = this;
                    return _async_to_generator(function() {
                        var expression, script;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    expression = evaluationExpression.apply(void 0, [
                                        pageFunction
                                    ].concat(_to_consumable_array(args)));
                                    return [
                                        4,
                                        _class_private_field_get(_this, _frame).browsingContext.addPreloadScript(expression)
                                    ];
                                case 1:
                                    script = _state.sent();
                                    return [
                                        2,
                                        {
                                            identifier: script
                                        }
                                    ];
                            }
                        });
                    })();
                }
            },
            {
                key: "removeScriptToEvaluateOnNewDocument",
                value: function removeScriptToEvaluateOnNewDocument(id) {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _class_private_field_get(_this, _frame).browsingContext.removePreloadScript(id)
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
                key: "exposeFunction",
                value: function exposeFunction(name, pptrFunction) {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this.mainFrame().exposeFunction(name, 'default' in pptrFunction ? pptrFunction.default : pptrFunction)
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
                key: "isDragInterceptionEnabled",
                value: function isDragInterceptionEnabled() {
                    return false;
                }
            },
            {
                key: "setCacheEnabled",
                value: function setCacheEnabled(enabled) {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    if (!!_class_private_field_get(_this, _browserContext).browser().cdpSupported) return [
                                        3,
                                        2
                                    ];
                                    return [
                                        4,
                                        _class_private_field_get(_this, _frame).browsingContext.setCacheBehavior(enabled ? 'default' : 'bypass')
                                    ];
                                case 1:
                                    _state.sent();
                                    return [
                                        2
                                    ];
                                case 2:
                                    // TODO: handle CDP-specific cases such as mprach.
                                    return [
                                        4,
                                        _this._client().send('Network.setCacheDisabled', {
                                            cacheDisabled: !enabled
                                        })
                                    ];
                                case 3:
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
                key: "cookies",
                value: function cookies() {
                    for(var _len = arguments.length, urls = new Array(_len), _key = 0; _key < _len; _key++){
                        urls[_key] = arguments[_key];
                    }
                    var _this = this;
                    return _async_to_generator(function() {
                        var normalizedUrls, cookies;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    normalizedUrls = (urls.length ? urls : [
                                        _this.url()
                                    ]).map(function(url) {
                                        return new URL(url);
                                    });
                                    return [
                                        4,
                                        _class_private_field_get(_this, _frame).browsingContext.getCookies()
                                    ];
                                case 1:
                                    cookies = _state.sent();
                                    return [
                                        2,
                                        cookies.map(function(cookie) {
                                            return bidiToPuppeteerCookie(cookie);
                                        }).filter(function(cookie) {
                                            return normalizedUrls.some(function(url) {
                                                return testUrlMatchCookie(cookie, url);
                                            });
                                        })
                                    ];
                            }
                        });
                    })();
                }
            },
            {
                key: "isServiceWorkerBypassed",
                value: function isServiceWorkerBypassed() {
                    throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_5__.UnsupportedOperation();
                }
            },
            {
                key: "target",
                value: function target() {
                    throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_5__.UnsupportedOperation();
                }
            },
            {
                key: "waitForFileChooser",
                value: function waitForFileChooser() {
                    throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_5__.UnsupportedOperation();
                }
            },
            {
                key: "workers",
                value: function workers() {
                    return _to_consumable_array(_class_private_field_get(this, _workers));
                }
            },
            {
                key: "setRequestInterception",
                value: function setRequestInterception(enable) {
                    var _this = this;
                    return _async_to_generator(function() {
                        var _tmp;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    _tmp = [
                                        _this,
                                        _userInterception
                                    ];
                                    return [
                                        4,
                                        _class_private_method_get(_this, _toggleInterception, toggleInterception).call(_this, [
                                            "beforeRequestSent" /* Bidi.Network.InterceptPhase.BeforeRequestSent */ 
                                        ], _class_private_field_get(_this, _userInterception), enable)
                                    ];
                                case 1:
                                    _class_private_field_set.apply(void 0, _tmp.concat([
                                        _state.sent()
                                    ]));
                                    return [
                                        2
                                    ];
                            }
                        });
                    })();
                }
            },
            {
                key: "setExtraHTTPHeaders",
                value: function setExtraHTTPHeaders(headers) {
                    var _this = this;
                    return _async_to_generator(function() {
                        var extraHTTPHeaders, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _step_value, key, value, _tmp;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    extraHTTPHeaders = {};
                                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                    try {
                                        for(_iterator = Object.entries(headers)[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                            _step_value = _sliced_to_array(_step.value, 2), key = _step_value[0], value = _step_value[1];
                                            (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_8__.assert)((0,_common_util_js__WEBPACK_IMPORTED_MODULE_7__.isString)(value), 'Expected value of header "'.concat(key, '" to be String, but "').concat(typeof value === "undefined" ? "undefined" : _type_of(value), '" is found.'));
                                            extraHTTPHeaders[key.toLowerCase()] = value;
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
                                    _this._extraHTTPHeaders = extraHTTPHeaders;
                                    _tmp = [
                                        _this,
                                        _extraHeadersInterception
                                    ];
                                    return [
                                        4,
                                        _class_private_method_get(_this, _toggleInterception, toggleInterception).call(_this, [
                                            "beforeRequestSent" /* Bidi.Network.InterceptPhase.BeforeRequestSent */ 
                                        ], _class_private_field_get(_this, _extraHeadersInterception), Boolean(Object.keys(_this._extraHTTPHeaders).length))
                                    ];
                                case 1:
                                    _class_private_field_set.apply(void 0, _tmp.concat([
                                        _state.sent()
                                    ]));
                                    return [
                                        2
                                    ];
                            }
                        });
                    })();
                }
            },
            {
                key: "authenticate",
                value: function authenticate(credentials) {
                    var _this = this;
                    return _async_to_generator(function() {
                        var _tmp;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    _tmp = [
                                        _this,
                                        _authInterception
                                    ];
                                    return [
                                        4,
                                        _class_private_method_get(_this, _toggleInterception, toggleInterception).call(_this, [
                                            "authRequired" /* Bidi.Network.InterceptPhase.AuthRequired */ 
                                        ], _class_private_field_get(_this, _authInterception), Boolean(credentials))
                                    ];
                                case 1:
                                    _class_private_field_set.apply(void 0, _tmp.concat([
                                        _state.sent()
                                    ]));
                                    _this._credentials = credentials;
                                    return [
                                        2
                                    ];
                            }
                        });
                    })();
                }
            },
            {
                key: "setDragInterception",
                value: function setDragInterception() {
                    throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_5__.UnsupportedOperation();
                }
            },
            {
                key: "setBypassServiceWorker",
                value: function setBypassServiceWorker() {
                    throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_5__.UnsupportedOperation();
                }
            },
            {
                key: "setOfflineMode",
                value: function setOfflineMode(enabled) {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    if (!_class_private_field_get(_this, _browserContext).browser().cdpSupported) {
                                        throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_5__.UnsupportedOperation();
                                    }
                                    if (!_class_private_field_get(_this, _emulatedNetworkConditions)) {
                                        _class_private_field_set(_this, _emulatedNetworkConditions, {
                                            offline: false,
                                            upload: -1,
                                            download: -1,
                                            latency: 0
                                        });
                                    }
                                    _class_private_field_get(_this, _emulatedNetworkConditions).offline = enabled;
                                    return [
                                        4,
                                        _class_private_method_get(_this, _applyNetworkConditions, applyNetworkConditions).call(_this)
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
                key: "emulateNetworkConditions",
                value: function emulateNetworkConditions(networkConditions) {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    if (!_class_private_field_get(_this, _browserContext).browser().cdpSupported) {
                                        throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_5__.UnsupportedOperation();
                                    }
                                    if (!_class_private_field_get(_this, _emulatedNetworkConditions)) {
                                        _class_private_field_set(_this, _emulatedNetworkConditions, {
                                            offline: false,
                                            upload: -1,
                                            download: -1,
                                            latency: 0
                                        });
                                    }
                                    _class_private_field_get(_this, _emulatedNetworkConditions).upload = networkConditions ? networkConditions.upload : -1;
                                    _class_private_field_get(_this, _emulatedNetworkConditions).download = networkConditions ? networkConditions.download : -1;
                                    _class_private_field_get(_this, _emulatedNetworkConditions).latency = networkConditions ? networkConditions.latency : 0;
                                    return [
                                        4,
                                        _class_private_method_get(_this, _applyNetworkConditions, applyNetworkConditions).call(_this)
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
                key: "setCookie",
                value: function setCookie() {
                    for(var _len = arguments.length, cookies = new Array(_len), _key = 0; _key < _len; _key++){
                        cookies[_key] = arguments[_key];
                    }
                    var _this = this;
                    return _async_to_generator(function() {
                        var pageURL, pageUrlStartsWithHTTP, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, cookie, cookieUrl, normalizedUrl, _cookie_domain, domain, bidiCookie, err;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    pageURL = _this.url();
                                    pageUrlStartsWithHTTP = pageURL.startsWith('http');
                                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                    _state.label = 1;
                                case 1:
                                    _state.trys.push([
                                        1,
                                        8,
                                        9,
                                        10
                                    ]);
                                    _iterator = cookies[Symbol.iterator]();
                                    _state.label = 2;
                                case 2:
                                    if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                        3,
                                        7
                                    ];
                                    cookie = _step.value;
                                    cookieUrl = cookie.url || '';
                                    if (!cookieUrl && pageUrlStartsWithHTTP) {
                                        cookieUrl = pageURL;
                                    }
                                    (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_8__.assert)(cookieUrl !== 'about:blank', 'Blank page can not have cookie "'.concat(cookie.name, '"'));
                                    (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_8__.assert)(!String.prototype.startsWith.call(cookieUrl || '', 'data:'), 'Data URL page can not have cookie "'.concat(cookie.name, '"'));
                                    normalizedUrl = URL.canParse(cookieUrl) ? new URL(cookieUrl) : undefined;
                                    domain = (_cookie_domain = cookie.domain) !== null && _cookie_domain !== void 0 ? _cookie_domain : normalizedUrl === null || normalizedUrl === void 0 ? void 0 : normalizedUrl.hostname;
                                    (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_8__.assert)(domain !== undefined, "At least one of the url and domain needs to be specified");
                                    bidiCookie = _object_spread({
                                        domain: domain,
                                        name: cookie.name,
                                        value: {
                                            type: 'string',
                                            value: cookie.value
                                        }
                                    }, cookie.path !== undefined ? {
                                        path: cookie.path
                                    } : {}, cookie.httpOnly !== undefined ? {
                                        httpOnly: cookie.httpOnly
                                    } : {}, cookie.secure !== undefined ? {
                                        secure: cookie.secure
                                    } : {}, cookie.sameSite !== undefined ? {
                                        sameSite: convertCookiesSameSiteCdpToBiDi(cookie.sameSite)
                                    } : {}, cookie.expires !== undefined ? {
                                        expiry: cookie.expires
                                    } : {}, cdpSpecificCookiePropertiesFromPuppeteerToBidi(cookie, 'sameParty', 'sourceScheme', 'priority', 'url'));
                                    if (!(cookie.partitionKey !== undefined)) return [
                                        3,
                                        4
                                    ];
                                    return [
                                        4,
                                        _this.browserContext().userContext.setCookie(bidiCookie, cookie.partitionKey)
                                    ];
                                case 3:
                                    _state.sent();
                                    return [
                                        3,
                                        6
                                    ];
                                case 4:
                                    return [
                                        4,
                                        _class_private_field_get(_this, _frame).browsingContext.setCookie(bidiCookie)
                                    ];
                                case 5:
                                    _state.sent();
                                    _state.label = 6;
                                case 6:
                                    _iteratorNormalCompletion = true;
                                    return [
                                        3,
                                        2
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
                                    return [
                                        2
                                    ];
                            }
                        });
                    })();
                }
            },
            {
                key: "deleteCookie",
                value: function deleteCookie() {
                    for(var _len = arguments.length, cookies = new Array(_len), _key = 0; _key < _len; _key++){
                        cookies[_key] = arguments[_key];
                    }
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        Promise.all(cookies.map(function() {
                                            var _ref = _async_to_generator(function(deleteCookieRequest) {
                                                var _deleteCookieRequest_url, cookieUrl, normalizedUrl, _deleteCookieRequest_domain, domain, filter;
                                                return _ts_generator(this, function(_state) {
                                                    switch(_state.label){
                                                        case 0:
                                                            cookieUrl = (_deleteCookieRequest_url = deleteCookieRequest.url) !== null && _deleteCookieRequest_url !== void 0 ? _deleteCookieRequest_url : _this.url();
                                                            normalizedUrl = URL.canParse(cookieUrl) ? new URL(cookieUrl) : undefined;
                                                            domain = (_deleteCookieRequest_domain = deleteCookieRequest.domain) !== null && _deleteCookieRequest_domain !== void 0 ? _deleteCookieRequest_domain : normalizedUrl === null || normalizedUrl === void 0 ? void 0 : normalizedUrl.hostname;
                                                            (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_8__.assert)(domain !== undefined, "At least one of the url and domain needs to be specified");
                                                            filter = _object_spread({
                                                                domain: domain,
                                                                name: deleteCookieRequest.name
                                                            }, deleteCookieRequest.path !== undefined ? {
                                                                path: deleteCookieRequest.path
                                                            } : {});
                                                            return [
                                                                4,
                                                                _class_private_field_get(_this, _frame).browsingContext.deleteCookie(filter)
                                                            ];
                                                        case 1:
                                                            _state.sent();
                                                            return [
                                                                2
                                                            ];
                                                    }
                                                });
                                            });
                                            return function(deleteCookieRequest) {
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
            },
            {
                key: "removeExposedFunction",
                value: function removeExposedFunction(name) {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _class_private_field_get(_this, _frame).removeExposedFunction(name)
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
                key: "metrics",
                value: function metrics() {
                    throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_5__.UnsupportedOperation();
                }
            },
            {
                key: "goBack",
                value: function goBack() {
                    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _class_private_method_get(_this, _go, go).call(_this, -1, options)
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
                key: "goForward",
                value: function goForward() {
                    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _class_private_method_get(_this, _go, go).call(_this, 1, options)
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
                key: "waitForDevicePrompt",
                value: function waitForDevicePrompt() {
                    throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_5__.UnsupportedOperation();
                }
            }
        ], [
            {
                key: "from",
                value: function from(browserContext, browsingContext) {
                    var page = new BidiPage(browserContext, browsingContext);
                    _class_private_method_get(page, _initialize, initialize).call(page);
                    return page;
                }
            }
        ]);
        return BidiPage;
    }(_classSuper), function() {
        var _classSuper_Symbol_metadata;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_classSuper_Symbol_metadata = _classSuper[Symbol.metadata]) !== null && _classSuper_Symbol_metadata !== void 0 ? _classSuper_Symbol_metadata : null) : void 0;
        _trustedEmitter_decorators = [
            (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_9__.bubble)()
        ];
        __esDecorate(_BidiPage, null, _trustedEmitter_decorators, {
            kind: "accessor",
            name: "trustedEmitter",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "trustedEmitter" in obj;
                },
                get: function(obj) {
                    return obj.trustedEmitter;
                },
                set: function(obj, value) {
                    obj.trustedEmitter = value;
                }
            },
            metadata: _metadata
        }, _trustedEmitter_initializers, _trustedEmitter_extraInitializers);
        if (_metadata) Object.defineProperty(_BidiPage, Symbol.metadata, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _metadata
        });
    }(), _BidiPage;
    function _toggleInterception1() {
        _toggleInterception1 = _async_to_generator(function(phases, interception, expected) {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        if (!(expected && !interception)) return [
                            3,
                            2
                        ];
                        return [
                            4,
                            _class_private_field_get(this, _frame).browsingContext.addIntercept({
                                phases: phases
                            })
                        ];
                    case 1:
                        return [
                            2,
                            _state.sent()
                        ];
                    case 2:
                        if (!(!expected && interception)) return [
                            3,
                            4
                        ];
                        return [
                            4,
                            _class_private_field_get(this, _frame).browsingContext.userContext.browser.removeIntercept(interception)
                        ];
                    case 3:
                        _state.sent();
                        return [
                            2
                        ];
                    case 4:
                        return [
                            2,
                            interception
                        ];
                }
            });
        });
        return _toggleInterception1.apply(this, arguments);
    }
    function _applyNetworkConditions1() {
        _applyNetworkConditions1 = _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        if (!_class_private_field_get(this, _emulatedNetworkConditions)) {
                            return [
                                2
                            ];
                        }
                        return [
                            4,
                            this._client().send('Network.emulateNetworkConditions', {
                                offline: _class_private_field_get(this, _emulatedNetworkConditions).offline,
                                latency: _class_private_field_get(this, _emulatedNetworkConditions).latency,
                                uploadThroughput: _class_private_field_get(this, _emulatedNetworkConditions).upload,
                                downloadThroughput: _class_private_field_get(this, _emulatedNetworkConditions).download
                            })
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        });
        return _applyNetworkConditions1.apply(this, arguments);
    }
    function _go1() {
        _go1 = _async_to_generator(function(delta, options) {
            var _ref, response, error;
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
                            Promise.all([
                                this.waitForNavigation(options),
                                _class_private_field_get(this, _frame).browsingContext.traverseHistory(delta)
                            ])
                        ];
                    case 1:
                        _ref = _sliced_to_array.apply(void 0, [
                            _state.sent(),
                            1
                        ]), response = _ref[0];
                        return [
                            2,
                            response
                        ];
                    case 2:
                        error = _state.sent();
                        // TODO: waitForNavigation should be cancelled if an error happens.
                        if ((0,_util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_10__.isErrorLike)(error)) {
                            if (error.message.includes('no such history entry')) {
                                return [
                                    2,
                                    null
                                ];
                            }
                        }
                        throw error;
                    case 3:
                        return [
                            2
                        ];
                }
            });
        });
        return _go1.apply(this, arguments);
    }
}();

function evaluationExpression(fun) {
    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        args[_key - 1] = arguments[_key];
    }
    return "() => {".concat(_common_util_js__WEBPACK_IMPORTED_MODULE_7__.evaluationString.apply(void 0, [
        fun
    ].concat(_to_consumable_array(args))), "}");
}
/**
 * Check domains match.
 * According to cookies spec, this check should match subdomains as well, but CDP
 * implementation does not do that, so this method matches only the exact domains, not
 * what is written in the spec:
 * https://datatracker.ietf.org/doc/html/rfc6265#section-5.1.3
 */ function testUrlMatchCookieHostname(cookie, normalizedUrl) {
    var cookieDomain = cookie.domain.toLowerCase();
    var urlHostname = normalizedUrl.hostname.toLowerCase();
    return cookieDomain === urlHostname;
}
/**
 * Check paths match.
 * Spec: https://datatracker.ietf.org/doc/html/rfc6265#section-5.1.4
 */ function testUrlMatchCookiePath(cookie, normalizedUrl) {
    var uriPath = normalizedUrl.pathname;
    var cookiePath = cookie.path;
    if (uriPath === cookiePath) {
        // The cookie-path and the request-path are identical.
        return true;
    }
    if (uriPath.startsWith(cookiePath)) {
        // The cookie-path is a prefix of the request-path.
        if (cookiePath.endsWith('/')) {
            // The last character of the cookie-path is %x2F ("/").
            return true;
        }
        if (uriPath[cookiePath.length] === '/') {
            // The first character of the request-path that is not included in the cookie-path
            // is a %x2F ("/") character.
            return true;
        }
    }
    return false;
}
/**
 * Checks the cookie matches the URL according to the spec:
 */ function testUrlMatchCookie(cookie, url) {
    var normalizedUrl = new URL(url);
    (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_8__.assert)(cookie !== undefined);
    if (!testUrlMatchCookieHostname(cookie, normalizedUrl)) {
        return false;
    }
    return testUrlMatchCookiePath(cookie, normalizedUrl);
}
function bidiToPuppeteerCookie(bidiCookie) {
    var _bidiCookie_expiry;
    return _object_spread({
        name: bidiCookie.name,
        // Presents binary value as base64 string.
        value: bidiCookie.value.value,
        domain: bidiCookie.domain,
        path: bidiCookie.path,
        size: bidiCookie.size,
        httpOnly: bidiCookie.httpOnly,
        secure: bidiCookie.secure,
        sameSite: convertCookiesSameSiteBiDiToCdp(bidiCookie.sameSite),
        expires: (_bidiCookie_expiry = bidiCookie.expiry) !== null && _bidiCookie_expiry !== void 0 ? _bidiCookie_expiry : -1,
        session: bidiCookie.expiry === undefined || bidiCookie.expiry <= 0
    }, cdpSpecificCookiePropertiesFromBidiToPuppeteer(bidiCookie, 'sameParty', 'sourceScheme', 'partitionKey', 'partitionKeyOpaque', 'priority'));
}
var CDP_SPECIFIC_PREFIX = 'goog:';
/**
 * Gets CDP-specific properties from the BiDi cookie and returns them as a new object.
 */ function cdpSpecificCookiePropertiesFromBidiToPuppeteer(bidiCookie) {
    for(var _len = arguments.length, propertyNames = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        propertyNames[_key - 1] = arguments[_key];
    }
    var result = {};
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = propertyNames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var property = _step.value;
            if (bidiCookie[CDP_SPECIFIC_PREFIX + property] !== undefined) {
                result[property] = bidiCookie[CDP_SPECIFIC_PREFIX + property];
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
    return result;
}
/**
 * Gets CDP-specific properties from the cookie, adds CDP-specific prefixes and returns
 * them as a new object which can be used in BiDi.
 */ function cdpSpecificCookiePropertiesFromPuppeteerToBidi(cookieParam) {
    for(var _len = arguments.length, propertyNames = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        propertyNames[_key - 1] = arguments[_key];
    }
    var result = {};
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = propertyNames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var property = _step.value;
            if (cookieParam[property] !== undefined) {
                result[CDP_SPECIFIC_PREFIX + property] = cookieParam[property];
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
    return result;
}
function convertCookiesSameSiteBiDiToCdp(sameSite) {
    return sameSite === 'strict' ? 'Strict' : sameSite === 'lax' ? 'Lax' : 'None';
}
function convertCookiesSameSiteCdpToBiDi(sameSite) {
    return sameSite === 'Strict' ? "strict" /* Bidi.Network.SameSite.Strict */  : sameSite === 'Lax' ? "lax" /* Bidi.Network.SameSite.Lax */  : "none" /* Bidi.Network.SameSite.None */ ;
} //# sourceMappingURL=Page.js.map


}),

}]);