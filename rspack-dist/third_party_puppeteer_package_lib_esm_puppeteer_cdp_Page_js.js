"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_cdp_Page_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Page.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CdpPage: function() { return CdpPage; }
});
/* harmony import */var _third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../third_party/rxjs/rxjs.js */ "./third_party/puppeteer/package/lib/esm/third_party/rxjs/rxjs.js");
/* harmony import */var _api_CDPSession_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/CDPSession.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/CDPSession.js");
/* harmony import */var _api_Page_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/Page.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/Page.js");
/* harmony import */var _common_ConsoleMessage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/ConsoleMessage.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/ConsoleMessage.js");
/* harmony import */var _common_Errors_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/Errors.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/Errors.js");
/* harmony import */var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/EventEmitter.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/EventEmitter.js");
/* harmony import */var _common_FileChooser_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/FileChooser.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/FileChooser.js");
/* harmony import */var _common_NetworkManagerEvents_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/NetworkManagerEvents.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/NetworkManagerEvents.js");
/* harmony import */var _common_util_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */var _util_assert_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/assert.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js");
/* harmony import */var _util_Deferred_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/Deferred.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/Deferred.js");
/* harmony import */var _util_disposable_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../util/disposable.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/disposable.js");
/* harmony import */var _util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../util/ErrorLike.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/ErrorLike.js");
/* harmony import */var _Binding_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Binding.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Binding.js");
/* harmony import */var _CDPSession_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./CDPSession.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/CDPSession.js");
/* harmony import */var _Connection_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Connection.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Connection.js");
/* harmony import */var _Coverage_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Coverage.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Coverage.js");
/* harmony import */var _Dialog_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Dialog.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Dialog.js");
/* harmony import */var _EmulationManager_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./EmulationManager.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/EmulationManager.js");
/* harmony import */var _FirefoxTargetManager_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./FirefoxTargetManager.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/FirefoxTargetManager.js");
/* harmony import */var _FrameManager_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./FrameManager.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/FrameManager.js");
/* harmony import */var _FrameManagerEvents_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./FrameManagerEvents.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/FrameManagerEvents.js");
/* harmony import */var _Input_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Input.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Input.js");
/* harmony import */var _IsolatedWorlds_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./IsolatedWorlds.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/IsolatedWorlds.js");
/* harmony import */var _JSHandle_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./JSHandle.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/JSHandle.js");
/* harmony import */var _Tracing_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Tracing.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Tracing.js");
/* harmony import */var _utils_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./utils.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/utils.js");
/* harmony import */var _WebWorker_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./WebWorker.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/WebWorker.js");
/**
 * @license
 * Copyright 2017 Google Inc.
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




























function convertConsoleMessageLevel(method) {
    switch(method){
        case 'warning':
            return 'warn';
        default:
            return method;
    }
}
var _closed = /*#__PURE__*/ new WeakMap(), _targetManager = /*#__PURE__*/ new WeakMap(), _primaryTargetClient = /*#__PURE__*/ new WeakMap(), _primaryTarget = /*#__PURE__*/ new WeakMap(), _tabTargetClient = /*#__PURE__*/ new WeakMap(), _tabTarget = /*#__PURE__*/ new WeakMap(), _keyboard = /*#__PURE__*/ new WeakMap(), _mouse = /*#__PURE__*/ new WeakMap(), _touchscreen = /*#__PURE__*/ new WeakMap(), _frameManager = /*#__PURE__*/ new WeakMap(), _emulationManager = /*#__PURE__*/ new WeakMap(), _tracing = /*#__PURE__*/ new WeakMap(), _bindings = /*#__PURE__*/ new WeakMap(), _exposedFunctions = /*#__PURE__*/ new WeakMap(), _coverage = /*#__PURE__*/ new WeakMap(), _viewport = /*#__PURE__*/ new WeakMap(), _workers = /*#__PURE__*/ new WeakMap(), _fileChooserDeferreds = /*#__PURE__*/ new WeakMap(), _sessionCloseDeferred = /*#__PURE__*/ new WeakMap(), _serviceWorkerBypassed = /*#__PURE__*/ new WeakMap(), _userDragInterceptionEnabled = /*#__PURE__*/ new WeakMap(), _attachExistingTargets = /*#__PURE__*/ new WeakSet(), _onActivation = /*#__PURE__*/ new WeakSet(), _onSecondaryTarget = /*#__PURE__*/ new WeakSet(), /**
     * Sets up listeners for the primary target. The primary target can change
     * during a navigation to a prerended page.
     */ _setupPrimaryTargetListeners = /*#__PURE__*/ new WeakSet(), _onDetachedFromTarget = /*#__PURE__*/ new WeakMap(), _onAttachedToTarget = /*#__PURE__*/ new WeakMap(), _initialize = /*#__PURE__*/ new WeakSet(), _onFileChooser = /*#__PURE__*/ new WeakSet(), _onTargetCrashed = /*#__PURE__*/ new WeakSet(), _onLogEntryAdded = /*#__PURE__*/ new WeakSet(), _emitMetrics = /*#__PURE__*/ new WeakSet(), _buildMetricsObject = /*#__PURE__*/ new WeakSet(), _handleException = /*#__PURE__*/ new WeakSet(), _onConsoleAPI = /*#__PURE__*/ new WeakSet(), _onBindingCalled = /*#__PURE__*/ new WeakSet(), _addConsoleMessage = /*#__PURE__*/ new WeakSet(), _onDialog = /*#__PURE__*/ new WeakSet(), _go = /*#__PURE__*/ new WeakSet();
/**
 * @internal
 */ var CdpPage = /*#__PURE__*/ function(Page) {
    "use strict";
    _inherits(CdpPage, Page);
    var _super = _create_super(CdpPage);
    function CdpPage(client, target) {
        _class_call_check(this, CdpPage);
        var _this;
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _attachExistingTargets);
        _class_private_method_init(_assert_this_initialized(_this), _onActivation);
        _class_private_method_init(_assert_this_initialized(_this), _onSecondaryTarget);
        _class_private_method_init(_assert_this_initialized(_this), _setupPrimaryTargetListeners);
        _class_private_method_init(_assert_this_initialized(_this), _initialize);
        _class_private_method_init(_assert_this_initialized(_this), _onFileChooser);
        _class_private_method_init(_assert_this_initialized(_this), _onTargetCrashed);
        _class_private_method_init(_assert_this_initialized(_this), _onLogEntryAdded);
        _class_private_method_init(_assert_this_initialized(_this), _emitMetrics);
        _class_private_method_init(_assert_this_initialized(_this), _buildMetricsObject);
        _class_private_method_init(_assert_this_initialized(_this), _handleException);
        _class_private_method_init(_assert_this_initialized(_this), _onConsoleAPI);
        _class_private_method_init(_assert_this_initialized(_this), _onBindingCalled);
        _class_private_method_init(_assert_this_initialized(_this), _addConsoleMessage);
        _class_private_method_init(_assert_this_initialized(_this), _onDialog);
        _class_private_method_init(_assert_this_initialized(_this), _go);
        _class_private_field_init(_assert_this_initialized(_this), _closed, {
            writable: true,
            value: false
        });
        _class_private_field_init(_assert_this_initialized(_this), _targetManager, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _primaryTargetClient, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _primaryTarget, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _tabTargetClient, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _tabTarget, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _keyboard, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _mouse, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _touchscreen, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _frameManager, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _emulationManager, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _tracing, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _bindings, {
            writable: true,
            value: new Map()
        });
        _class_private_field_init(_assert_this_initialized(_this), _exposedFunctions, {
            writable: true,
            value: new Map()
        });
        _class_private_field_init(_assert_this_initialized(_this), _coverage, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _viewport, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _workers, {
            writable: true,
            value: new Map()
        });
        _class_private_field_init(_assert_this_initialized(_this), _fileChooserDeferreds, {
            writable: true,
            value: new Set()
        });
        _class_private_field_init(_assert_this_initialized(_this), _sessionCloseDeferred, {
            writable: true,
            value: _util_Deferred_js__WEBPACK_IMPORTED_MODULE_10__.Deferred.create()
        });
        _class_private_field_init(_assert_this_initialized(_this), _serviceWorkerBypassed, {
            writable: true,
            value: false
        });
        _class_private_field_init(_assert_this_initialized(_this), _userDragInterceptionEnabled, {
            writable: true,
            value: false
        });
        _class_private_field_init(_assert_this_initialized(_this), _onDetachedFromTarget, {
            writable: true,
            value: function(target) {
                var _target__session;
                var sessionId = (_target__session = target._session()) === null || _target__session === void 0 ? void 0 : _target__session.id();
                var worker = _class_private_field_get(_this, _workers).get(sessionId);
                if (!worker) {
                    return;
                }
                _class_private_field_get(_this, _workers).delete(sessionId);
                _this.emit("workerdestroyed" /* PageEvent.WorkerDestroyed */ , worker);
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _onAttachedToTarget, {
            writable: true,
            value: function(session) {
                (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_9__.assert)(_instanceof(session, _CDPSession_js__WEBPACK_IMPORTED_MODULE_14__.CdpCDPSession));
                _class_private_field_get(_this, _frameManager).onAttachedToTarget(session._target());
                if (session._target()._getTargetInfo().type === 'worker') {
                    var worker = new _WebWorker_js__WEBPACK_IMPORTED_MODULE_27__.CdpWebWorker(session, session._target().url(), session._target()._targetId, session._target().type(), _class_private_method_get(_this, _addConsoleMessage, addConsoleMessage).bind(_assert_this_initialized(_this)), _class_private_method_get(_this, _handleException, handleException).bind(_assert_this_initialized(_this)));
                    _class_private_field_get(_this, _workers).set(session.id(), worker);
                    _this.emit("workercreated" /* PageEvent.WorkerCreated */ , worker);
                }
                session.on(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_1__.CDPSessionEvent.Ready, _class_private_field_get(_assert_this_initialized(_this), _onAttachedToTarget));
            }
        });
        _class_private_field_set(_assert_this_initialized(_this), _primaryTargetClient, client);
        _class_private_field_set(_assert_this_initialized(_this), _tabTargetClient, client.parentSession());
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_9__.assert)(_class_private_field_get(_assert_this_initialized(_this), _tabTargetClient), 'Tab target session is not defined.');
        _class_private_field_set(_assert_this_initialized(_this), _tabTarget, _class_private_field_get(_this, _tabTargetClient)._target());
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_9__.assert)(_class_private_field_get(_assert_this_initialized(_this), _tabTarget), 'Tab target is not defined.');
        _class_private_field_set(_assert_this_initialized(_this), _primaryTarget, target);
        _class_private_field_set(_assert_this_initialized(_this), _targetManager, target._targetManager());
        _class_private_field_set(_assert_this_initialized(_this), _keyboard, new _Input_js__WEBPACK_IMPORTED_MODULE_22__.CdpKeyboard(client));
        _class_private_field_set(_assert_this_initialized(_this), _mouse, new _Input_js__WEBPACK_IMPORTED_MODULE_22__.CdpMouse(client, _class_private_field_get(_assert_this_initialized(_this), _keyboard)));
        _class_private_field_set(_assert_this_initialized(_this), _touchscreen, new _Input_js__WEBPACK_IMPORTED_MODULE_22__.CdpTouchscreen(client, _class_private_field_get(_assert_this_initialized(_this), _keyboard)));
        _class_private_field_set(_assert_this_initialized(_this), _frameManager, new _FrameManager_js__WEBPACK_IMPORTED_MODULE_20__.FrameManager(client, _assert_this_initialized(_this), _this._timeoutSettings));
        _class_private_field_set(_assert_this_initialized(_this), _emulationManager, new _EmulationManager_js__WEBPACK_IMPORTED_MODULE_18__.EmulationManager(client));
        _class_private_field_set(_assert_this_initialized(_this), _tracing, new _Tracing_js__WEBPACK_IMPORTED_MODULE_25__.Tracing(client));
        _class_private_field_set(_assert_this_initialized(_this), _coverage, new _Coverage_js__WEBPACK_IMPORTED_MODULE_16__.Coverage(client));
        _class_private_field_set(_assert_this_initialized(_this), _viewport, null);
        var frameManagerEmitter = new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_5__.EventEmitter(_class_private_field_get(_assert_this_initialized(_this), _frameManager));
        frameManagerEmitter.on(_FrameManagerEvents_js__WEBPACK_IMPORTED_MODULE_21__.FrameManagerEvent.FrameAttached, function(frame) {
            _this.emit("frameattached" /* PageEvent.FrameAttached */ , frame);
        });
        frameManagerEmitter.on(_FrameManagerEvents_js__WEBPACK_IMPORTED_MODULE_21__.FrameManagerEvent.FrameDetached, function(frame) {
            _this.emit("framedetached" /* PageEvent.FrameDetached */ , frame);
        });
        frameManagerEmitter.on(_FrameManagerEvents_js__WEBPACK_IMPORTED_MODULE_21__.FrameManagerEvent.FrameNavigated, function(frame) {
            _this.emit("framenavigated" /* PageEvent.FrameNavigated */ , frame);
        });
        frameManagerEmitter.on(_FrameManagerEvents_js__WEBPACK_IMPORTED_MODULE_21__.FrameManagerEvent.ConsoleApiCalled, function(param) {
            var _param = _sliced_to_array(param, 2), world = _param[0], event = _param[1];
            _class_private_method_get(_this, _onConsoleAPI, onConsoleAPI).call(_assert_this_initialized(_this), world, event);
        });
        frameManagerEmitter.on(_FrameManagerEvents_js__WEBPACK_IMPORTED_MODULE_21__.FrameManagerEvent.BindingCalled, function(param) {
            var _param = _sliced_to_array(param, 2), world = _param[0], event = _param[1];
            void _class_private_method_get(_this, _onBindingCalled, onBindingCalled).call(_assert_this_initialized(_this), world, event);
        });
        var networkManagerEmitter = new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_5__.EventEmitter(_class_private_field_get(_this, _frameManager).networkManager);
        networkManagerEmitter.on(_common_NetworkManagerEvents_js__WEBPACK_IMPORTED_MODULE_7__.NetworkManagerEvent.Request, function(request) {
            _this.emit("request" /* PageEvent.Request */ , request);
        });
        networkManagerEmitter.on(_common_NetworkManagerEvents_js__WEBPACK_IMPORTED_MODULE_7__.NetworkManagerEvent.RequestServedFromCache, function(request) {
            _this.emit("requestservedfromcache" /* PageEvent.RequestServedFromCache */ , request);
        });
        networkManagerEmitter.on(_common_NetworkManagerEvents_js__WEBPACK_IMPORTED_MODULE_7__.NetworkManagerEvent.Response, function(response) {
            _this.emit("response" /* PageEvent.Response */ , response);
        });
        networkManagerEmitter.on(_common_NetworkManagerEvents_js__WEBPACK_IMPORTED_MODULE_7__.NetworkManagerEvent.RequestFailed, function(request) {
            _this.emit("requestfailed" /* PageEvent.RequestFailed */ , request);
        });
        networkManagerEmitter.on(_common_NetworkManagerEvents_js__WEBPACK_IMPORTED_MODULE_7__.NetworkManagerEvent.RequestFinished, function(request) {
            _this.emit("requestfinished" /* PageEvent.RequestFinished */ , request);
        });
        _class_private_field_get(_this, _tabTargetClient).on(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_1__.CDPSessionEvent.Swapped, _class_private_method_get(_this, _onActivation, onActivation).bind(_assert_this_initialized(_this)));
        _class_private_field_get(_this, _tabTargetClient).on(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_1__.CDPSessionEvent.Ready, _class_private_method_get(_this, _onSecondaryTarget, onSecondaryTarget).bind(_assert_this_initialized(_this)));
        _class_private_field_get(_this, _targetManager).on("targetGone" /* TargetManagerEvent.TargetGone */ , _class_private_field_get(_assert_this_initialized(_this), _onDetachedFromTarget));
        _class_private_field_get(_this, _tabTarget)._isClosedDeferred.valueOrThrow().then(function() {
            _class_private_field_get(_this, _targetManager).off("targetGone" /* TargetManagerEvent.TargetGone */ , _class_private_field_get(_this, _onDetachedFromTarget));
            _this.emit("close" /* PageEvent.Close */ , undefined);
            _class_private_field_set(_this, _closed, true);
        }).catch(_common_util_js__WEBPACK_IMPORTED_MODULE_8__.debugError);
        _class_private_method_get(_this, _setupPrimaryTargetListeners, setupPrimaryTargetListeners).call(_assert_this_initialized(_this));
        _class_private_method_get(_this, _attachExistingTargets, attachExistingTargets).call(_assert_this_initialized(_this));
        return _this;
    }
    _create_class(CdpPage, [
        {
            key: "_client",
            value: function _client() {
                return _class_private_field_get(this, _primaryTargetClient);
            }
        },
        {
            key: "isServiceWorkerBypassed",
            value: function isServiceWorkerBypassed() {
                return _class_private_field_get(this, _serviceWorkerBypassed);
            }
        },
        {
            key: "isDragInterceptionEnabled",
            value: function isDragInterceptionEnabled() {
                return _class_private_field_get(this, _userDragInterceptionEnabled);
            }
        },
        {
            key: "isJavaScriptEnabled",
            value: function isJavaScriptEnabled() {
                return _class_private_field_get(this, _emulationManager).javascriptEnabled;
            }
        },
        {
            key: "waitForFileChooser",
            value: function waitForFileChooser() {
                var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                var _this = this;
                return _async_to_generator(function() {
                    var needsEnable, _options_timeout, timeout, deferred, enablePromise, _ref, result, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                needsEnable = _class_private_field_get(_this, _fileChooserDeferreds).size === 0;
                                _options_timeout = options.timeout, timeout = _options_timeout === void 0 ? _this._timeoutSettings.timeout() : _options_timeout;
                                deferred = _util_Deferred_js__WEBPACK_IMPORTED_MODULE_10__.Deferred.create({
                                    message: "Waiting for `FileChooser` failed: ".concat(timeout, "ms exceeded"),
                                    timeout: timeout
                                });
                                _class_private_field_get(_this, _fileChooserDeferreds).add(deferred);
                                if (needsEnable) {
                                    enablePromise = _class_private_field_get(_this, _primaryTargetClient).send('Page.setInterceptFileChooserDialog', {
                                        enabled: true
                                    });
                                }
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
                                        deferred.valueOrThrow(),
                                        enablePromise
                                    ])
                                ];
                            case 2:
                                _ref = _sliced_to_array.apply(void 0, [
                                    _state.sent(),
                                    1
                                ]), result = _ref[0];
                                return [
                                    2,
                                    result
                                ];
                            case 3:
                                error = _state.sent();
                                _class_private_field_get(_this, _fileChooserDeferreds).delete(deferred);
                                throw error;
                            case 4:
                                return [
                                    2
                                ];
                        }
                    });
                })();
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
                                    _class_private_field_get(_this, _emulationManager).setGeolocation(options)
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
            key: "target",
            value: function target() {
                return _class_private_field_get(this, _primaryTarget);
            }
        },
        {
            key: "browser",
            value: function browser() {
                return _class_private_field_get(this, _primaryTarget).browser();
            }
        },
        {
            key: "browserContext",
            value: function browserContext() {
                return _class_private_field_get(this, _primaryTarget).browserContext();
            }
        },
        {
            key: "mainFrame",
            value: function mainFrame() {
                return _class_private_field_get(this, _frameManager).mainFrame();
            }
        },
        {
            key: "keyboard",
            get: function get() {
                return _class_private_field_get(this, _keyboard);
            }
        },
        {
            key: "touchscreen",
            get: function get() {
                return _class_private_field_get(this, _touchscreen);
            }
        },
        {
            key: "coverage",
            get: function get() {
                return _class_private_field_get(this, _coverage);
            }
        },
        {
            key: "tracing",
            get: function get() {
                return _class_private_field_get(this, _tracing);
            }
        },
        {
            key: "frames",
            value: function frames() {
                return _class_private_field_get(this, _frameManager).frames();
            }
        },
        {
            key: "workers",
            value: function workers() {
                return Array.from(_class_private_field_get(this, _workers).values());
            }
        },
        {
            key: "setRequestInterception",
            value: function setRequestInterception(value) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _class_private_field_get(_this, _frameManager).networkManager.setRequestInterception(value)
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
            key: "setBypassServiceWorker",
            value: function setBypassServiceWorker(bypass) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _class_private_field_set(_this, _serviceWorkerBypassed, bypass);
                                return [
                                    4,
                                    _class_private_field_get(_this, _primaryTargetClient).send('Network.setBypassServiceWorker', {
                                        bypass: bypass
                                    })
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
            key: "setDragInterception",
            value: function setDragInterception(enabled) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _class_private_field_set(_this, _userDragInterceptionEnabled, enabled);
                                return [
                                    4,
                                    _class_private_field_get(_this, _primaryTargetClient).send('Input.setInterceptDrags', {
                                        enabled: enabled
                                    })
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
            key: "setOfflineMode",
            value: function setOfflineMode(enabled) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _class_private_field_get(_this, _frameManager).networkManager.setOfflineMode(enabled)
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
                                return [
                                    4,
                                    _class_private_field_get(_this, _frameManager).networkManager.emulateNetworkConditions(networkConditions)
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
            key: "queryObjects",
            value: function queryObjects(prototypeHandle) {
                var _this = this;
                return _async_to_generator(function() {
                    var response;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_9__.assert)(!prototypeHandle.disposed, 'Prototype JSHandle is disposed!');
                                (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_9__.assert)(prototypeHandle.id, 'Prototype JSHandle must not be referencing primitive value');
                                return [
                                    4,
                                    _this.mainFrame().client.send('Runtime.queryObjects', {
                                        prototypeObjectId: prototypeHandle.id
                                    })
                                ];
                            case 1:
                                response = _state.sent();
                                return [
                                    2,
                                    _this.mainFrame().mainRealm().createCdpHandle(response.objects)
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
                    var originalCookies, unsupportedCookieAttributes, filterUnsupportedAttributes;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _class_private_field_get(_this, _primaryTargetClient).send('Network.getCookies', {
                                        urls: urls.length ? urls : [
                                            _this.url()
                                        ]
                                    })
                                ];
                            case 1:
                                originalCookies = _state.sent().cookies;
                                unsupportedCookieAttributes = [
                                    'sourcePort'
                                ];
                                filterUnsupportedAttributes = function(cookie) {
                                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                    try {
                                        for(var _iterator = unsupportedCookieAttributes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                            var attr = _step.value;
                                            delete cookie[attr];
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
                                    return cookie;
                                };
                                return [
                                    2,
                                    originalCookies.map(filterUnsupportedAttributes).map(function(cookie) {
                                        return _object_spread_props(_object_spread({}, cookie), {
                                            // TODO: a breaking change is needed in Puppeteer types to support other
                                            // partition keys.
                                            partitionKey: cookie.partitionKey ? cookie.partitionKey.topLevelSite : undefined
                                        });
                                    })
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
                    var pageURL, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, cookie, item, err;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                pageURL = _this.url();
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    6,
                                    7,
                                    8
                                ]);
                                _iterator = cookies[Symbol.iterator]();
                                _state.label = 2;
                            case 2:
                                if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                    3,
                                    5
                                ];
                                cookie = _step.value;
                                item = Object.assign({}, cookie);
                                if (!cookie.url && pageURL.startsWith('http')) {
                                    item.url = pageURL;
                                }
                                return [
                                    4,
                                    _class_private_field_get(_this, _primaryTargetClient).send('Network.deleteCookies', item)
                                ];
                            case 3:
                                _state.sent();
                                _state.label = 4;
                            case 4:
                                _iteratorNormalCompletion = true;
                                return [
                                    3,
                                    2
                                ];
                            case 5:
                                return [
                                    3,
                                    8
                                ];
                            case 6:
                                err = _state.sent();
                                _didIteratorError = true;
                                _iteratorError = err;
                                return [
                                    3,
                                    8
                                ];
                            case 7:
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
                            case 8:
                                return [
                                    2
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
                    var pageURL, startsWithHTTP, items;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                pageURL = _this.url();
                                startsWithHTTP = pageURL.startsWith('http');
                                items = cookies.map(function(cookie) {
                                    var item = Object.assign({}, cookie);
                                    if (!item.url && startsWithHTTP) {
                                        item.url = pageURL;
                                    }
                                    (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_9__.assert)(item.url !== 'about:blank', 'Blank page can not have cookie "'.concat(item.name, '"'));
                                    (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_9__.assert)(!String.prototype.startsWith.call(item.url || '', 'data:'), 'Data URL page can not have cookie "'.concat(item.name, '"'));
                                    return item;
                                });
                                return [
                                    4,
                                    _this.deleteCookie.apply(_this, _to_consumable_array(items))
                                ];
                            case 1:
                                _state.sent();
                                if (!items.length) return [
                                    3,
                                    3
                                ];
                                return [
                                    4,
                                    _class_private_field_get(_this, _primaryTargetClient).send('Network.setCookies', {
                                        cookies: items.map(function(cookieParam) {
                                            return _object_spread_props(_object_spread({}, cookieParam), {
                                                partitionKey: cookieParam.partitionKey ? {
                                                    // TODO: a breaking change neeeded to change the partition key
                                                    // type in Puppeteer.
                                                    topLevelSite: cookieParam.partitionKey,
                                                    hasCrossSiteAncestor: false
                                                } : undefined
                                            });
                                        })
                                    })
                                ];
                            case 2:
                                _state.sent();
                                _state.label = 3;
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
            key: "exposeFunction",
            value: function exposeFunction(name, pptrFunction) {
                var _this = this;
                return _async_to_generator(function() {
                    var source, binding, _ref, identifier;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (_class_private_field_get(_this, _bindings).has(name)) {
                                    throw new Error("Failed to add page binding with name ".concat(name, ": window['").concat(name, "'] already exists!"));
                                }
                                source = (0,_utils_js__WEBPACK_IMPORTED_MODULE_26__.pageBindingInitString)('exposedFun', name);
                                switch(typeof pptrFunction === "undefined" ? "undefined" : _type_of(pptrFunction)){
                                    case 'function':
                                        binding = new _Binding_js__WEBPACK_IMPORTED_MODULE_13__.Binding(name, pptrFunction, source);
                                        break;
                                    default:
                                        binding = new _Binding_js__WEBPACK_IMPORTED_MODULE_13__.Binding(name, pptrFunction.default, source);
                                        break;
                                }
                                _class_private_field_get(_this, _bindings).set(name, binding);
                                return [
                                    4,
                                    Promise.all([
                                        _class_private_field_get(_this, _frameManager).evaluateOnNewDocument(source),
                                        _class_private_field_get(_this, _frameManager).addExposedFunctionBinding(binding)
                                    ])
                                ];
                            case 1:
                                _ref = _sliced_to_array.apply(void 0, [
                                    _state.sent(),
                                    1
                                ]), identifier = _ref[0].identifier;
                                _class_private_field_get(_this, _exposedFunctions).set(name, identifier);
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
                    var exposedFunctionId, binding;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                exposedFunctionId = _class_private_field_get(_this, _exposedFunctions).get(name);
                                if (!exposedFunctionId) {
                                    throw new Error('Function with name "'.concat(name, '" does not exist'));
                                }
                                // #bindings must be updated together with #exposedFunctions.
                                binding = _class_private_field_get(_this, _bindings).get(name);
                                _class_private_field_get(_this, _exposedFunctions).delete(name);
                                _class_private_field_get(_this, _bindings).delete(name);
                                return [
                                    4,
                                    Promise.all([
                                        _class_private_field_get(_this, _frameManager).removeScriptToEvaluateOnNewDocument(exposedFunctionId),
                                        _class_private_field_get(_this, _frameManager).removeExposedFunctionBinding(binding)
                                    ])
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
            key: "authenticate",
            value: function authenticate(credentials) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _class_private_field_get(_this, _frameManager).networkManager.authenticate(credentials)
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
            key: "setExtraHTTPHeaders",
            value: function setExtraHTTPHeaders(headers) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _class_private_field_get(_this, _frameManager).networkManager.setExtraHTTPHeaders(headers)
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
            key: "setUserAgent",
            value: function setUserAgent(userAgent, userAgentMetadata) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _class_private_field_get(_this, _frameManager).networkManager.setUserAgent(userAgent, userAgentMetadata)
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
            key: "metrics",
            value: function metrics() {
                var _this = this;
                return _async_to_generator(function() {
                    var response;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _class_private_field_get(_this, _primaryTargetClient).send('Performance.getMetrics')
                                ];
                            case 1:
                                response = _state.sent();
                                return [
                                    2,
                                    _class_private_method_get(_this, _buildMetricsObject, buildMetricsObject).call(_this, response.metrics)
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "reload",
            value: function reload(options) {
                var _this = this;
                return _async_to_generator(function() {
                    var _ref, result;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    Promise.all([
                                        _this.waitForNavigation(_object_spread_props(_object_spread({}, options), {
                                            ignoreSameDocumentNavigation: true
                                        })),
                                        _class_private_field_get(_this, _primaryTargetClient).send('Page.reload')
                                    ])
                                ];
                            case 1:
                                _ref = _sliced_to_array.apply(void 0, [
                                    _state.sent(),
                                    1
                                ]), result = _ref[0];
                                return [
                                    2,
                                    result
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
                                    _this.target().createCDPSession()
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
                                    _class_private_method_get(_this, _go, go).call(_this, +1, options)
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
                                    _class_private_field_get(_this, _primaryTargetClient).send('Page.bringToFront')
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
            key: "setJavaScriptEnabled",
            value: function setJavaScriptEnabled(enabled) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _class_private_field_get(_this, _emulationManager).setJavaScriptEnabled(enabled)
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
            key: "setBypassCSP",
            value: function setBypassCSP(enabled) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _class_private_field_get(_this, _primaryTargetClient).send('Page.setBypassCSP', {
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
            key: "emulateMediaType",
            value: function emulateMediaType(type) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _class_private_field_get(_this, _emulationManager).emulateMediaType(type)
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
                                    _class_private_field_get(_this, _emulationManager).emulateCPUThrottling(factor)
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
                                    _class_private_field_get(_this, _emulationManager).emulateMediaFeatures(features)
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
                                    _class_private_field_get(_this, _emulationManager).emulateTimezone(timezoneId)
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
                                    _class_private_field_get(_this, _emulationManager).emulateIdleState(overrides)
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
                                    _class_private_field_get(_this, _emulationManager).emulateVisionDeficiency(type)
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
                                return [
                                    4,
                                    _class_private_field_get(_this, _emulationManager).emulateViewport(viewport)
                                ];
                            case 1:
                                needsReload = _state.sent();
                                _class_private_field_set(_this, _viewport, viewport);
                                if (!needsReload) return [
                                    3,
                                    3
                                ];
                                return [
                                    4,
                                    _this.reload()
                                ];
                            case 2:
                                _state.sent();
                                _state.label = 3;
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
            key: "viewport",
            value: function viewport() {
                return _class_private_field_get(this, _viewport);
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
                    var source;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                source = _common_util_js__WEBPACK_IMPORTED_MODULE_8__.evaluationString.apply(void 0, [
                                    pageFunction
                                ].concat(_to_consumable_array(args)));
                                return [
                                    4,
                                    _class_private_field_get(_this, _frameManager).evaluateOnNewDocument(source)
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
            key: "removeScriptToEvaluateOnNewDocument",
            value: function removeScriptToEvaluateOnNewDocument(identifier) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _class_private_field_get(_this, _frameManager).removeScriptToEvaluateOnNewDocument(identifier)
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
            key: "setCacheEnabled",
            value: function setCacheEnabled() {
                var enabled = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _class_private_field_get(_this, _frameManager).networkManager.setCacheEnabled(enabled)
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
            key: "_screenshot",
            value: function _screenshot(options) {
                var _this = this;
                return _async_to_generator(function() {
                    var env_2, fromSurface, omitBackground, optimizeForSpeed, quality, userClip, type, captureBeyondViewport, isFirefox, stack, clip, viewport, _clip_scale, data, e_2, result_1;
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
                                    11
                                ]);
                                fromSurface = options.fromSurface, omitBackground = options.omitBackground, optimizeForSpeed = options.optimizeForSpeed, quality = options.quality, userClip = options.clip, type = options.type, captureBeyondViewport = options.captureBeyondViewport;
                                isFirefox = _instanceof(_this.target()._targetManager(), _FirefoxTargetManager_js__WEBPACK_IMPORTED_MODULE_19__.FirefoxTargetManager);
                                stack = __addDisposableResource(env_2, new _util_disposable_js__WEBPACK_IMPORTED_MODULE_11__.AsyncDisposableStack(), true);
                                if (!(!isFirefox && omitBackground && (type === 'png' || type === 'webp'))) return [
                                    3,
                                    3
                                ];
                                return [
                                    4,
                                    _class_private_field_get(_this, _emulationManager).setTransparentBackgroundColor()
                                ];
                            case 2:
                                _state.sent();
                                stack.defer(/*#__PURE__*/ _async_to_generator(function() {
                                    return _ts_generator(this, function(_state) {
                                        switch(_state.label){
                                            case 0:
                                                return [
                                                    4,
                                                    _class_private_field_get(_this, _emulationManager).resetDefaultBackgroundColor().catch(_common_util_js__WEBPACK_IMPORTED_MODULE_8__.debugError)
                                                ];
                                            case 1:
                                                _state.sent();
                                                return [
                                                    2
                                                ];
                                        }
                                    });
                                }));
                                _state.label = 3;
                            case 3:
                                clip = userClip;
                                if (!(clip && !captureBeyondViewport)) return [
                                    3,
                                    5
                                ];
                                return [
                                    4,
                                    _this.mainFrame().isolatedRealm().evaluate(function() {
                                        var _window_visualViewport = window.visualViewport, height = _window_visualViewport.height, x = _window_visualViewport.pageLeft, y = _window_visualViewport.pageTop, width = _window_visualViewport.width;
                                        return {
                                            x: x,
                                            y: y,
                                            height: height,
                                            width: width
                                        };
                                    })
                                ];
                            case 4:
                                viewport = _state.sent();
                                clip = getIntersectionRect(clip, viewport);
                                _state.label = 5;
                            case 5:
                                return [
                                    4,
                                    _class_private_field_get(_this, _primaryTargetClient).send('Page.captureScreenshot', _object_spread_props(_object_spread({
                                        format: type
                                    }, optimizeForSpeed ? {
                                        optimizeForSpeed: optimizeForSpeed
                                    } : {}, quality !== undefined ? {
                                        quality: Math.round(quality)
                                    } : {}, clip ? {
                                        clip: _object_spread_props(_object_spread({}, clip), {
                                            scale: (_clip_scale = clip.scale) !== null && _clip_scale !== void 0 ? _clip_scale : 1
                                        })
                                    } : {}, !fromSurface ? {
                                        fromSurface: fromSurface
                                    } : {}), {
                                        captureBeyondViewport: captureBeyondViewport
                                    }))
                                ];
                            case 6:
                                data = _state.sent().data;
                                return [
                                    2,
                                    data
                                ];
                            case 7:
                                e_2 = _state.sent();
                                env_2.error = e_2;
                                env_2.hasError = true;
                                return [
                                    3,
                                    11
                                ];
                            case 8:
                                result_1 = __disposeResources(env_2);
                                if (!result_1) return [
                                    3,
                                    10
                                ];
                                return [
                                    4,
                                    result_1
                                ];
                            case 9:
                                _state.sent();
                                _state.label = 10;
                            case 10:
                                return [
                                    7
                                ];
                            case 11:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "createPDFStream",
            value: function createPDFStream() {
                var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                var _this = this;
                return _async_to_generator(function() {
                    var tmp, ms, _parsePDFOptions, landscape, displayHeaderFooter, headerTemplate, footerTemplate, printBackground, scale, paperWidth, paperHeight, margin, pageRanges, preferCSSPageSize, omitBackground, generateTaggedPDF, generateDocumentOutline, waitForFonts, printCommandPromise, result;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                tmp = options.timeout, ms = tmp === void 0 ? _this._timeoutSettings.timeout() : tmp;
                                _parsePDFOptions = (0,_common_util_js__WEBPACK_IMPORTED_MODULE_8__.parsePDFOptions)(options), landscape = _parsePDFOptions.landscape, displayHeaderFooter = _parsePDFOptions.displayHeaderFooter, headerTemplate = _parsePDFOptions.headerTemplate, footerTemplate = _parsePDFOptions.footerTemplate, printBackground = _parsePDFOptions.printBackground, scale = _parsePDFOptions.scale, paperWidth = _parsePDFOptions.width, paperHeight = _parsePDFOptions.height, margin = _parsePDFOptions.margin, pageRanges = _parsePDFOptions.pageRanges, preferCSSPageSize = _parsePDFOptions.preferCSSPageSize, omitBackground = _parsePDFOptions.omitBackground, generateTaggedPDF = _parsePDFOptions.tagged, generateDocumentOutline = _parsePDFOptions.outline, waitForFonts = _parsePDFOptions.waitForFonts;
                                if (!omitBackground) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    _class_private_field_get(_this, _emulationManager).setTransparentBackgroundColor()
                                ];
                            case 1:
                                _state.sent();
                                _state.label = 2;
                            case 2:
                                if (!waitForFonts) return [
                                    3,
                                    4
                                ];
                                return [
                                    4,
                                    (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.firstValueFrom)((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.from)(_this.mainFrame().isolatedRealm().evaluate(function() {
                                        return document.fonts.ready;
                                    })).pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.raceWith)((0,_common_util_js__WEBPACK_IMPORTED_MODULE_8__.timeout)(ms))))
                                ];
                            case 3:
                                _state.sent();
                                _state.label = 4;
                            case 4:
                                printCommandPromise = _class_private_field_get(_this, _primaryTargetClient).send('Page.printToPDF', {
                                    transferMode: 'ReturnAsStream',
                                    landscape: landscape,
                                    displayHeaderFooter: displayHeaderFooter,
                                    headerTemplate: headerTemplate,
                                    footerTemplate: footerTemplate,
                                    printBackground: printBackground,
                                    scale: scale,
                                    paperWidth: paperWidth,
                                    paperHeight: paperHeight,
                                    marginTop: margin.top,
                                    marginBottom: margin.bottom,
                                    marginLeft: margin.left,
                                    marginRight: margin.right,
                                    pageRanges: pageRanges,
                                    preferCSSPageSize: preferCSSPageSize,
                                    generateTaggedPDF: generateTaggedPDF,
                                    generateDocumentOutline: generateDocumentOutline
                                });
                                return [
                                    4,
                                    (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.firstValueFrom)((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.from)(printCommandPromise).pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.raceWith)((0,_common_util_js__WEBPACK_IMPORTED_MODULE_8__.timeout)(ms))))
                                ];
                            case 5:
                                result = _state.sent();
                                if (!omitBackground) return [
                                    3,
                                    7
                                ];
                                return [
                                    4,
                                    _class_private_field_get(_this, _emulationManager).resetDefaultBackgroundColor()
                                ];
                            case 6:
                                _state.sent();
                                _state.label = 7;
                            case 7:
                                (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_9__.assert)(result.stream, '`stream` is missing from `Page.printToPDF');
                                return [
                                    4,
                                    (0,_common_util_js__WEBPACK_IMPORTED_MODULE_8__.getReadableFromProtocolStream)(_class_private_field_get(_this, _primaryTargetClient), result.stream)
                                ];
                            case 8:
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
            key: "pdf",
            value: function pdf() {
                var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                var _this = this;
                return _async_to_generator(function() {
                    var _options_path, path, readable, buffer;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _options_path = options.path, path = _options_path === void 0 ? undefined : _options_path;
                                return [
                                    4,
                                    _this.createPDFStream(options)
                                ];
                            case 1:
                                readable = _state.sent();
                                return [
                                    4,
                                    (0,_common_util_js__WEBPACK_IMPORTED_MODULE_8__.getReadableAsBuffer)(readable, path)
                                ];
                            case 2:
                                buffer = _state.sent();
                                (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_9__.assert)(buffer, 'Could not create buffer');
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
            key: "close",
            value: function close() {
                var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
                    runBeforeUnload: undefined
                };
                var _this = this;
                return _async_to_generator(function() {
                    var env_3, _guard, _tmp, connection, runBeforeUnload, e_3;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                env_3 = {
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
                                _tmp = [
                                    env_3
                                ];
                                return [
                                    4,
                                    _this.browserContext().waitForScreenshotOperations()
                                ];
                            case 2:
                                _guard = __addDisposableResource.apply(void 0, _tmp.concat([
                                    _state.sent(),
                                    false
                                ]));
                                connection = _class_private_field_get(_this, _primaryTargetClient).connection();
                                (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_9__.assert)(connection, 'Protocol error: Connection closed. Most likely the page has been closed.');
                                runBeforeUnload = !!options.runBeforeUnload;
                                if (!runBeforeUnload) return [
                                    3,
                                    4
                                ];
                                return [
                                    4,
                                    _class_private_field_get(_this, _primaryTargetClient).send('Page.close')
                                ];
                            case 3:
                                _state.sent();
                                return [
                                    3,
                                    7
                                ];
                            case 4:
                                return [
                                    4,
                                    connection.send('Target.closeTarget', {
                                        targetId: _class_private_field_get(_this, _primaryTarget)._targetId
                                    })
                                ];
                            case 5:
                                _state.sent();
                                return [
                                    4,
                                    _class_private_field_get(_this, _tabTarget)._isClosedDeferred.valueOrThrow()
                                ];
                            case 6:
                                _state.sent();
                                _state.label = 7;
                            case 7:
                                return [
                                    3,
                                    10
                                ];
                            case 8:
                                e_3 = _state.sent();
                                env_3.error = e_3;
                                env_3.hasError = true;
                                return [
                                    3,
                                    10
                                ];
                            case 9:
                                __disposeResources(env_3);
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
            key: "isClosed",
            value: function isClosed() {
                return _class_private_field_get(this, _closed);
            }
        },
        {
            key: "mouse",
            get: function get() {
                return _class_private_field_get(this, _mouse);
            }
        },
        {
            key: "waitForDevicePrompt",
            value: /**
     * This method is typically coupled with an action that triggers a device
     * request from an api such as WebBluetooth.
     *
     * :::caution
     *
     * This must be called before the device request is made. It will not return a
     * currently active device prompt.
     *
     * :::
     *
     * @example
     *
     * ```ts
     * const [devicePrompt] = Promise.all([
     *   page.waitForDevicePrompt(),
     *   page.click('#connect-bluetooth'),
     * ]);
     * await devicePrompt.select(
     *   await devicePrompt.waitForDevice(({name}) => name.includes('My Device'))
     * );
     * ```
     */ function waitForDevicePrompt() {
                var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.mainFrame().waitForDevicePrompt(options)
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
        }
    ], [
        {
            key: "_create",
            value: function _create(client, target, defaultViewport) {
                return _async_to_generator(function() {
                    var page, err;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                page = new CdpPage(client, target);
                                return [
                                    4,
                                    _class_private_method_get(page, _initialize, initialize).call(page)
                                ];
                            case 1:
                                _state.sent();
                                if (!defaultViewport) return [
                                    3,
                                    5
                                ];
                                _state.label = 2;
                            case 2:
                                _state.trys.push([
                                    2,
                                    4,
                                    ,
                                    5
                                ]);
                                return [
                                    4,
                                    page.setViewport(defaultViewport)
                                ];
                            case 3:
                                _state.sent();
                                return [
                                    3,
                                    5
                                ];
                            case 4:
                                err = _state.sent();
                                if ((0,_util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_12__.isErrorLike)(err) && (0,_Connection_js__WEBPACK_IMPORTED_MODULE_15__.isTargetClosedError)(err)) {
                                    (0,_common_util_js__WEBPACK_IMPORTED_MODULE_8__.debugError)(err);
                                } else {
                                    throw err;
                                }
                                return [
                                    3,
                                    5
                                ];
                            case 5:
                                return [
                                    2,
                                    page
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return CdpPage;
}(_api_Page_js__WEBPACK_IMPORTED_MODULE_2__.Page);
function attachExistingTargets() {
    var queue = [];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = _class_private_field_get(this, _targetManager).getChildTargets(_class_private_field_get(this, _primaryTarget))[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var childTarget = _step.value;
            queue.push(childTarget);
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
    var idx = 0;
    while(idx < queue.length){
        var next = queue[idx];
        idx++;
        var session = next._session();
        if (session) {
            _class_private_field_get(this, _onAttachedToTarget).call(this, session);
        }
        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
        try {
            for(var _iterator1 = _class_private_field_get(this, _targetManager).getChildTargets(next)[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                var childTarget1 = _step1.value;
                queue.push(childTarget1);
            }
        } catch (err) {
            _didIteratorError1 = true;
            _iteratorError1 = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                    _iterator1.return();
                }
            } finally{
                if (_didIteratorError1) {
                    throw _iteratorError1;
                }
            }
        }
    }
}
function onActivation(newSession) {
    return _onActivation1.apply(this, arguments);
}
function _onActivation1() {
    _onActivation1 = _async_to_generator(function(newSession) {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _class_private_field_set(this, _primaryTargetClient, newSession);
                    (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_9__.assert)(_instanceof(_class_private_field_get(this, _primaryTargetClient), _CDPSession_js__WEBPACK_IMPORTED_MODULE_14__.CdpCDPSession), 'CDPSession is not instance of CDPSessionImpl');
                    _class_private_field_set(this, _primaryTarget, _class_private_field_get(this, _primaryTargetClient)._target());
                    (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_9__.assert)(_class_private_field_get(this, _primaryTarget), 'Missing target on swap');
                    _class_private_field_get(this, _keyboard).updateClient(newSession);
                    _class_private_field_get(this, _mouse).updateClient(newSession);
                    _class_private_field_get(this, _touchscreen).updateClient(newSession);
                    _class_private_field_get(this, _emulationManager).updateClient(newSession);
                    _class_private_field_get(this, _tracing).updateClient(newSession);
                    _class_private_field_get(this, _coverage).updateClient(newSession);
                    return [
                        4,
                        _class_private_field_get(this, _frameManager).swapFrameTree(newSession)
                    ];
                case 1:
                    _state.sent();
                    _class_private_method_get(this, _setupPrimaryTargetListeners, setupPrimaryTargetListeners).call(this);
                    return [
                        2
                    ];
            }
        });
    });
    return _onActivation1.apply(this, arguments);
}
function onSecondaryTarget(session) {
    return _onSecondaryTarget1.apply(this, arguments);
}
function _onSecondaryTarget1() {
    _onSecondaryTarget1 = _async_to_generator(function(session) {
        return _ts_generator(this, function(_state) {
            (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_9__.assert)(_instanceof(session, _CDPSession_js__WEBPACK_IMPORTED_MODULE_14__.CdpCDPSession));
            if (session._target()._subtype() !== 'prerender') {
                return [
                    2
                ];
            }
            _class_private_field_get(this, _frameManager).registerSpeculativeSession(session).catch(_common_util_js__WEBPACK_IMPORTED_MODULE_8__.debugError);
            _class_private_field_get(this, _emulationManager).registerSpeculativeSession(session).catch(_common_util_js__WEBPACK_IMPORTED_MODULE_8__.debugError);
            return [
                2
            ];
        });
    });
    return _onSecondaryTarget1.apply(this, arguments);
}
function setupPrimaryTargetListeners() {
    var _this = this;
    var clientEmitter = new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_5__.EventEmitter(_class_private_field_get(this, _primaryTargetClient));
    clientEmitter.on(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_1__.CDPSessionEvent.Ready, _class_private_field_get(this, _onAttachedToTarget));
    clientEmitter.on(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_1__.CDPSessionEvent.Disconnected, function() {
        _class_private_field_get(_this, _sessionCloseDeferred).reject(new _common_Errors_js__WEBPACK_IMPORTED_MODULE_4__.TargetCloseError('Target closed'));
    });
    clientEmitter.on('Page.domContentEventFired', function() {
        _this.emit("domcontentloaded" /* PageEvent.DOMContentLoaded */ , undefined);
    });
    clientEmitter.on('Page.loadEventFired', function() {
        _this.emit("load" /* PageEvent.Load */ , undefined);
    });
    clientEmitter.on('Page.javascriptDialogOpening', _class_private_method_get(this, _onDialog, onDialog).bind(this));
    clientEmitter.on('Runtime.exceptionThrown', _class_private_method_get(this, _handleException, handleException).bind(this));
    clientEmitter.on('Inspector.targetCrashed', _class_private_method_get(this, _onTargetCrashed, onTargetCrashed).bind(this));
    clientEmitter.on('Performance.metrics', _class_private_method_get(this, _emitMetrics, emitMetrics).bind(this));
    clientEmitter.on('Log.entryAdded', _class_private_method_get(this, _onLogEntryAdded, onLogEntryAdded).bind(this));
    clientEmitter.on('Page.fileChooserOpened', _class_private_method_get(this, _onFileChooser, onFileChooser).bind(this));
}
function initialize() {
    return _initialize1.apply(this, arguments);
}
function _initialize1() {
    _initialize1 = _async_to_generator(function() {
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
                        Promise.all([
                            _class_private_field_get(this, _frameManager).initialize(_class_private_field_get(this, _primaryTargetClient)),
                            _class_private_field_get(this, _primaryTargetClient).send('Performance.enable'),
                            _class_private_field_get(this, _primaryTargetClient).send('Log.enable')
                        ])
                    ];
                case 1:
                    _state.sent();
                    return [
                        3,
                        3
                    ];
                case 2:
                    err = _state.sent();
                    if ((0,_util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_12__.isErrorLike)(err) && (0,_Connection_js__WEBPACK_IMPORTED_MODULE_15__.isTargetClosedError)(err)) {
                        (0,_common_util_js__WEBPACK_IMPORTED_MODULE_8__.debugError)(err);
                    } else {
                        throw err;
                    }
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
    return _initialize1.apply(this, arguments);
}
function onFileChooser(event) {
    return _onFileChooser1.apply(this, arguments);
}
function _onFileChooser1() {
    _onFileChooser1 = _async_to_generator(function(event) {
        var env_1, frame, handle, _tmp, fileChooser, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, promise, e_1;
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
                    if (!_class_private_field_get(this, _fileChooserDeferreds).size) {
                        return [
                            2
                        ];
                    }
                    frame = _class_private_field_get(this, _frameManager).frame(event.frameId);
                    (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_9__.assert)(frame, 'This should never happen.');
                    _tmp = [
                        env_1
                    ];
                    return [
                        4,
                        frame.worlds[_IsolatedWorlds_js__WEBPACK_IMPORTED_MODULE_23__.MAIN_WORLD].adoptBackendNode(event.backendNodeId)
                    ];
                case 2:
                    handle = __addDisposableResource.apply(void 0, _tmp.concat([
                        _state.sent(),
                        false
                    ]));
                    fileChooser = new _common_FileChooser_js__WEBPACK_IMPORTED_MODULE_6__.FileChooser(handle.move(), event);
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = _class_private_field_get(this, _fileChooserDeferreds)[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            promise = _step.value;
                            promise.resolve(fileChooser);
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
                    _class_private_field_get(this, _fileChooserDeferreds).clear();
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
                    return [
                        2
                    ];
            }
        });
    });
    return _onFileChooser1.apply(this, arguments);
}
function onTargetCrashed() {
    this.emit("error" /* PageEvent.Error */ , new Error('Page crashed!'));
}
function onLogEntryAdded(event) {
    var _this = this;
    var _event_entry = event.entry, level = _event_entry.level, text = _event_entry.text, args = _event_entry.args, source = _event_entry.source, url = _event_entry.url, lineNumber = _event_entry.lineNumber;
    if (args) {
        args.map(function(arg) {
            void (0,_JSHandle_js__WEBPACK_IMPORTED_MODULE_24__.releaseObject)(_class_private_field_get(_this, _primaryTargetClient), arg);
        });
    }
    if (source !== 'worker') {
        this.emit("console" /* PageEvent.Console */ , new _common_ConsoleMessage_js__WEBPACK_IMPORTED_MODULE_3__.ConsoleMessage(convertConsoleMessageLevel(level), text, [], [
            {
                url: url,
                lineNumber: lineNumber
            }
        ]));
    }
}
function emitMetrics(event) {
    this.emit("metrics" /* PageEvent.Metrics */ , {
        title: event.title,
        metrics: _class_private_method_get(this, _buildMetricsObject, buildMetricsObject).call(this, event.metrics)
    });
}
function buildMetricsObject(metrics) {
    var result = {};
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = (metrics || [])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var metric = _step.value;
            if (supportedMetrics.has(metric.name)) {
                result[metric.name] = metric.value;
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
function handleException(exception) {
    this.emit("pageerror" /* PageEvent.PageError */ , (0,_utils_js__WEBPACK_IMPORTED_MODULE_26__.createClientError)(exception.exceptionDetails));
}
function onConsoleAPI(world, event) {
    var values = event.args.map(function(arg) {
        return world.createCdpHandle(arg);
    });
    _class_private_method_get(this, _addConsoleMessage, addConsoleMessage).call(this, convertConsoleMessageLevel(event.type), values, event.stackTrace);
}
function onBindingCalled(world, event) {
    return _onBindingCalled1.apply(this, arguments);
}
function _onBindingCalled1() {
    _onBindingCalled1 = _async_to_generator(function(world, event) {
        var payload, type, name, seq, args, isTrivial, context, binding;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
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
                    if (type !== 'exposedFun') {
                        return [
                            2
                        ];
                    }
                    context = world.context;
                    if (!context) {
                        return [
                            2
                        ];
                    }
                    binding = _class_private_field_get(this, _bindings).get(name);
                    return [
                        4,
                        binding === null || binding === void 0 ? void 0 : binding.run(context, seq, args, isTrivial)
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return _onBindingCalled1.apply(this, arguments);
}
function addConsoleMessage(eventType, args, stackTrace) {
    if (!this.listenerCount("console" /* PageEvent.Console */ )) {
        args.forEach(function(arg) {
            return arg.dispose();
        });
        return;
    }
    var textTokens = [];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        // eslint-disable-next-line max-len -- The comment is long.
        // eslint-disable-next-line rulesdir/use-using -- These are not owned by this function.
        for(var _iterator = args[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var arg = _step.value;
            var remoteObject = arg.remoteObject();
            if (remoteObject.objectId) {
                textTokens.push(arg.toString());
            } else {
                textTokens.push((0,_utils_js__WEBPACK_IMPORTED_MODULE_26__.valueFromRemoteObject)(remoteObject));
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
    var stackTraceLocations = [];
    if (stackTrace) {
        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
        try {
            for(var _iterator1 = stackTrace.callFrames[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                var callFrame = _step1.value;
                stackTraceLocations.push({
                    url: callFrame.url,
                    lineNumber: callFrame.lineNumber,
                    columnNumber: callFrame.columnNumber
                });
            }
        } catch (err) {
            _didIteratorError1 = true;
            _iteratorError1 = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                    _iterator1.return();
                }
            } finally{
                if (_didIteratorError1) {
                    throw _iteratorError1;
                }
            }
        }
    }
    var message = new _common_ConsoleMessage_js__WEBPACK_IMPORTED_MODULE_3__.ConsoleMessage(convertConsoleMessageLevel(eventType), textTokens.join(' '), args, stackTraceLocations);
    this.emit("console" /* PageEvent.Console */ , message);
}
function onDialog(event) {
    var type = (0,_common_util_js__WEBPACK_IMPORTED_MODULE_8__.validateDialogType)(event.type);
    var dialog = new _Dialog_js__WEBPACK_IMPORTED_MODULE_17__.CdpDialog(_class_private_field_get(this, _primaryTargetClient), type, event.message, event.defaultPrompt);
    this.emit("dialog" /* PageEvent.Dialog */ , dialog);
}
function go(delta, options) {
    return _go1.apply(this, arguments);
}
function _go1() {
    _go1 = _async_to_generator(function(delta, options) {
        var history, entry, result;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _class_private_field_get(this, _primaryTargetClient).send('Page.getNavigationHistory')
                    ];
                case 1:
                    history = _state.sent();
                    entry = history.entries[history.currentIndex + delta];
                    if (!entry) {
                        return [
                            2,
                            null
                        ];
                    }
                    return [
                        4,
                        Promise.all([
                            this.waitForNavigation(options),
                            _class_private_field_get(this, _primaryTargetClient).send('Page.navigateToHistoryEntry', {
                                entryId: entry.id
                            })
                        ])
                    ];
                case 2:
                    result = _state.sent();
                    return [
                        2,
                        result[0]
                    ];
            }
        });
    });
    return _go1.apply(this, arguments);
}
var supportedMetrics = new Set([
    'Timestamp',
    'Documents',
    'Frames',
    'JSEventListeners',
    'Nodes',
    'LayoutCount',
    'RecalcStyleCount',
    'LayoutDuration',
    'RecalcStyleDuration',
    'ScriptDuration',
    'TaskDuration',
    'JSHeapUsedSize',
    'JSHeapTotalSize'
]);
/** @see https://w3c.github.io/webdriver-bidi/#rectangle-intersection */ function getIntersectionRect(clip, viewport) {
    // Note these will already be normalized.
    var x = Math.max(clip.x, viewport.x);
    var y = Math.max(clip.y, viewport.y);
    return {
        x: x,
        y: y,
        width: Math.max(Math.min(clip.x + clip.width, viewport.x + viewport.width) - x, 0),
        height: Math.max(Math.min(clip.y + clip.height, viewport.y + viewport.height) - y, 0)
    };
} //# sourceMappingURL=Page.js.map


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/common/ConsoleMessage.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ConsoleMessage: function() { return ConsoleMessage; }
});
/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * ConsoleMessage objects are dispatched by page via the 'console' event.
 * @public
 */ function _check_private_redeclaration(obj, privateCollection) {
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
var _type = /*#__PURE__*/ new WeakMap(), _text = /*#__PURE__*/ new WeakMap(), _args = /*#__PURE__*/ new WeakMap(), _stackTraceLocations = /*#__PURE__*/ new WeakMap();
var ConsoleMessage = /*#__PURE__*/ function() {
    "use strict";
    function ConsoleMessage(type, text, args, stackTraceLocations) {
        _class_call_check(this, ConsoleMessage);
        _class_private_field_init(this, _type, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _text, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _args, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _stackTraceLocations, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _type, type);
        _class_private_field_set(this, _text, text);
        _class_private_field_set(this, _args, args);
        _class_private_field_set(this, _stackTraceLocations, stackTraceLocations);
    }
    _create_class(ConsoleMessage, [
        {
            /**
     * The type of the console message.
     */ key: "type",
            value: function type() {
                return _class_private_field_get(this, _type);
            }
        },
        {
            /**
     * The text of the console message.
     */ key: "text",
            value: function text() {
                return _class_private_field_get(this, _text);
            }
        },
        {
            /**
     * An array of arguments passed to the console.
     */ key: "args",
            value: function args() {
                return _class_private_field_get(this, _args);
            }
        },
        {
            /**
     * The location of the console message.
     */ key: "location",
            value: function location() {
                var _class_private_field_get_;
                return (_class_private_field_get_ = _class_private_field_get(this, _stackTraceLocations)[0]) !== null && _class_private_field_get_ !== void 0 ? _class_private_field_get_ : {};
            }
        },
        {
            /**
     * The array of locations on the stack of the console message.
     */ key: "stackTrace",
            value: function stackTrace() {
                return _class_private_field_get(this, _stackTraceLocations);
            }
        }
    ]);
    return ConsoleMessage;
} //# sourceMappingURL=ConsoleMessage.js.map
();


}),

}]);