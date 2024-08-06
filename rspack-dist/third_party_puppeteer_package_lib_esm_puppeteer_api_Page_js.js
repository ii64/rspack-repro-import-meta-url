"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_api_Page_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/api/Page.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Page: function() { return Page; },
  setDefaultScreenshotOptions: function() { return setDefaultScreenshotOptions; },
  supportedMetrics: function() { return supportedMetrics; }
});
/* harmony import */var _third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../third_party/rxjs/rxjs.js */ "./third_party/puppeteer/package/lib/esm/third_party/rxjs/rxjs.js");
/* harmony import */var _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Errors.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/Errors.js");
/* harmony import */var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/EventEmitter.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/EventEmitter.js");
/* harmony import */var _common_TimeoutSettings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/TimeoutSettings.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/TimeoutSettings.js");
/* harmony import */var _common_util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */var _util_decorators_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/decorators.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/decorators.js");
/* harmony import */var _util_disposable_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/disposable.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/disposable.js");
/* harmony import */var _locators_locators_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./locators/locators.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/locators/locators.js");
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
function _class_apply_descriptor_update(receiver, descriptor) {
    if (descriptor.set) {
        if (!descriptor.get) {
            throw new TypeError("attempted to read set only private field");
        }
        if (!("__destrWrapper" in descriptor)) {
            descriptor.__destrWrapper = {
                set value (v){
                    descriptor.set.call(receiver, v);
                },
                get value () {
                    return descriptor.get.call(receiver);
                }
            };
        }
        return descriptor.__destrWrapper;
    } else {
        if (!descriptor.writable) {
            throw new TypeError("attempted to set read only private field");
        }
        return descriptor;
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
function _class_private_field_update(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "update");
    return _class_apply_descriptor_update(receiver, descriptor);
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
        return function(v1) {
            return step([
                n,
                v1
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
 */ function setDefaultScreenshotOptions(options) {
    var _options, _options1, _options2, _options3, _options4, _options5, _options6;
    var _optimizeForSpeed;
    (_optimizeForSpeed = (_options = options).optimizeForSpeed) !== null && _optimizeForSpeed !== void 0 ? _optimizeForSpeed : _options.optimizeForSpeed = false;
    var _type;
    (_type = (_options1 = options).type) !== null && _type !== void 0 ? _type : _options1.type = 'png';
    var _fromSurface;
    (_fromSurface = (_options2 = options).fromSurface) !== null && _fromSurface !== void 0 ? _fromSurface : _options2.fromSurface = true;
    var _fullPage;
    (_fullPage = (_options3 = options).fullPage) !== null && _fullPage !== void 0 ? _fullPage : _options3.fullPage = false;
    var _omitBackground;
    (_omitBackground = (_options4 = options).omitBackground) !== null && _omitBackground !== void 0 ? _omitBackground : _options4.omitBackground = false;
    var _encoding;
    (_encoding = (_options5 = options).encoding) !== null && _encoding !== void 0 ? _encoding : _options5.encoding = 'binary';
    var _captureBeyondViewport;
    (_captureBeyondViewport = (_options6 = options).captureBeyondViewport) !== null && _captureBeyondViewport !== void 0 ? _captureBeyondViewport : _options6.captureBeyondViewport = true;
}
/**
 * Page provides methods to interact with a single tab or
 * {@link https://developer.chrome.com/extensions/background_pages | extension background page}
 * in the browser.
 *
 * :::note
 *
 * One Browser instance might have multiple Page instances.
 *
 * :::
 *
 * @example
 * This example creates a page, navigates it to a URL, and then saves a screenshot:
 *
 * ```ts
 * import puppeteer from 'puppeteer';
 *
 * (async () => {
 *   const browser = await puppeteer.launch();
 *   const page = await browser.newPage();
 *   await page.goto('https://example.com');
 *   await page.screenshot({path: 'screenshot.png'});
 *   await browser.close();
 * })();
 * ```
 *
 * The Page class extends from Puppeteer's {@link EventEmitter} class and will
 * emit various events which are documented in the {@link PageEvent} enum.
 *
 * @example
 * This example logs a message for a single page `load` event:
 *
 * ```ts
 * page.once('load', () => console.log('Page loaded!'));
 * ```
 *
 * To unsubscribe from events use the {@link EventEmitter.off} method:
 *
 * ```ts
 * function logRequest(interceptedRequest) {
 *   console.log('A request was made:', interceptedRequest.url());
 * }
 * page.on('request', logRequest);
 * // Sometime later...
 * page.off('request', logRequest);
 * ```
 *
 * @public
 */ var Page = function() {
    var /**
         * Gets the native, non-emulated dimensions of the viewport.
         */ getNativePixelDimensions = function getNativePixelDimensions() {
        return _getNativePixelDimensions1.apply(this, arguments);
    };
    var _tmp, _asyncDisposeSymbol;
    var _requestHandlers, _inflight$, _screencastSessionCount, _startScreencastPromise, _getNativePixelDimensions, _Page;
    var _classSuper = _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_2__.EventEmitter;
    var _instanceExtraInitializers = [];
    var _screenshot_decorators;
    return _requestHandlers = /*#__PURE__*/ new WeakMap(), _inflight$ = /*#__PURE__*/ new WeakMap(), _screencastSessionCount = /*#__PURE__*/ new WeakMap(), _startScreencastPromise = /*#__PURE__*/ new WeakMap(), _getNativePixelDimensions = /*#__PURE__*/ new WeakSet(), _tmp = (_screenshot_decorators = [
        (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_5__.guarded)(function() {
            return this.browser();
        })
    ], _util_disposable_js__WEBPACK_IMPORTED_MODULE_6__.disposeSymbol), _asyncDisposeSymbol = _util_disposable_js__WEBPACK_IMPORTED_MODULE_6__.asyncDisposeSymbol, _Page = /*#__PURE__*/ function(_classSuper) {
        "use strict";
        _inherits(Page, _classSuper);
        var _super = _create_super(Page);
        function Page() {
            _class_call_check(this, Page);
            var _this;
            _this = _super.call(this);
            _class_private_method_init(_assert_this_initialized(_this), _getNativePixelDimensions);
            /**
         * @internal
         */ _define_property(_assert_this_initialized(_this), "_isDragging", (__runInitializers(_assert_this_initialized(_this), _instanceExtraInitializers), false));
            /**
         * @internal
         */ _define_property(_assert_this_initialized(_this), "_timeoutSettings", new _common_TimeoutSettings_js__WEBPACK_IMPORTED_MODULE_3__.TimeoutSettings());
            _class_private_field_init(_assert_this_initialized(_this), _requestHandlers, {
                writable: true,
                value: new WeakMap()
            });
            _class_private_field_init(_assert_this_initialized(_this), _inflight$, {
                writable: true,
                value: new _third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.ReplaySubject(1)
            });
            _class_private_field_init(_assert_this_initialized(_this), _screencastSessionCount, {
                writable: true,
                value: 0
            });
            _class_private_field_init(_assert_this_initialized(_this), _startScreencastPromise, {
                writable: true,
                value: void 0
            });
            (0,_common_util_js__WEBPACK_IMPORTED_MODULE_4__.fromEmitterEvent)(_this, "request" /* PageEvent.Request */ ).pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.mergeMap)(function(originalRequest) {
                return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.concat)((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.of)(1), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.merge)((0,_common_util_js__WEBPACK_IMPORTED_MODULE_4__.fromEmitterEvent)(_this, "requestfailed" /* PageEvent.RequestFailed */ ), (0,_common_util_js__WEBPACK_IMPORTED_MODULE_4__.fromEmitterEvent)(_this, "requestfinished" /* PageEvent.RequestFinished */ ), (0,_common_util_js__WEBPACK_IMPORTED_MODULE_4__.fromEmitterEvent)(_this, "response" /* PageEvent.Response */ ).pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.map)(function(response) {
                    return response.request();
                }))).pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.filter)(function(request) {
                    return request.id === originalRequest.id;
                }), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.take)(1), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.map)(function() {
                    return -1;
                })));
            }), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.mergeScan)(function(acc, addend) {
                return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.of)(acc + addend);
            }, 0), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.takeUntil)((0,_common_util_js__WEBPACK_IMPORTED_MODULE_4__.fromEmitterEvent)(_this, "close" /* PageEvent.Close */ )), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.startWith)(0)).subscribe(_class_private_field_get(_assert_this_initialized(_this), _inflight$));
            return _this;
        }
        _create_class(Page, [
            {
                /**
         * Listen to page events.
         *
         * @remarks
         * This method exists to define event typings and handle proper wireup of
         * cooperative request interception. Actual event listening and dispatching is
         * delegated to {@link EventEmitter}.
         *
         * @internal
         */ key: "on",
                value: function on(type, handler) {
                    if (type !== "request" /* PageEvent.Request */ ) {
                        return _get(_get_prototype_of(Page.prototype), "on", this).call(this, type, handler);
                    }
                    var wrapper = _class_private_field_get(this, _requestHandlers).get(handler);
                    if (wrapper === undefined) {
                        wrapper = function(event) {
                            event.enqueueInterceptAction(function() {
                                return handler(event);
                            });
                        };
                        _class_private_field_get(this, _requestHandlers).set(handler, wrapper);
                    }
                    return _get(_get_prototype_of(Page.prototype), "on", this).call(this, type, wrapper);
                }
            },
            {
                /**
         * @internal
         */ key: "off",
                value: function off(type, handler) {
                    if (type === "request" /* PageEvent.Request */ ) {
                        handler = _class_private_field_get(this, _requestHandlers).get(handler) || handler;
                    }
                    return _get(_get_prototype_of(Page.prototype), "off", this).call(this, type, handler);
                }
            },
            {
                key: "accessibility",
                get: /**
         * {@inheritDoc Accessibility}
         */ function get() {
                    return this.mainFrame().accessibility;
                }
            },
            {
                key: "locator",
                value: function locator(selectorOrFunc) {
                    if (typeof selectorOrFunc === 'string') {
                        return _locators_locators_js__WEBPACK_IMPORTED_MODULE_7__.NodeLocator.create(this, selectorOrFunc);
                    } else {
                        return _locators_locators_js__WEBPACK_IMPORTED_MODULE_7__.FunctionLocator.create(this, selectorOrFunc);
                    }
                }
            },
            {
                /**
         * A shortcut for {@link Locator.race} that does not require static imports.
         *
         * @internal
         */ key: "locatorRace",
                value: function locatorRace(locators) {
                    return _locators_locators_js__WEBPACK_IMPORTED_MODULE_7__.Locator.race(locators);
                }
            },
            {
                key: "$",
                value: /**
         * Finds the first element that matches the selector. If no element matches
         * the selector, the return value resolves to `null`.
         *
         * @param selector -
         * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
         * to query page for.
         * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
         * can be passed as-is and a
         * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
         * allows quering by
         * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
         * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
         * and
         * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
         * and
         * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
         * Alternatively, you can specify the selector type using a
         * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}.
         *
         * @remarks
         *
         * Shortcut for {@link Frame.$ | Page.mainFrame().$(selector) }.
         */ function $(selector) {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this.mainFrame().$(selector)
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
                key: "$$",
                value: /**
         * Finds elements on the page that match the selector. If no elements
         * match the selector, the return value resolves to `[]`.
         *
         * @param selector -
         * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
         * to query page for.
         * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
         * can be passed as-is and a
         * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
         * allows quering by
         * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
         * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
         * and
         * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
         * and
         * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
         * Alternatively, you can specify the selector type using a
         * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}.
         *
         * @remarks
         *
         * Shortcut for {@link Frame.$$ | Page.mainFrame().$$(selector) }.
         */ function $$(selector, options) {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this.mainFrame().$$(selector, options)
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
         * @remarks
         *
         * The only difference between {@link Page.evaluate | page.evaluate} and
         * `page.evaluateHandle` is that `evaluateHandle` will return the value
         * wrapped in an in-page object.
         *
         * If the function passed to `page.evaluateHandle` returns a Promise, the
         * function will wait for the promise to resolve and return its value.
         *
         * You can pass a string instead of a function (although functions are
         * recommended as they are easier to debug and use with TypeScript):
         *
         * @example
         *
         * ```ts
         * const aHandle = await page.evaluateHandle('document');
         * ```
         *
         * @example
         * {@link JSHandle} instances can be passed as arguments to the `pageFunction`:
         *
         * ```ts
         * const aHandle = await page.evaluateHandle(() => document.body);
         * const resultHandle = await page.evaluateHandle(
         *   body => body.innerHTML,
         *   aHandle
         * );
         * console.log(await resultHandle.jsonValue());
         * await resultHandle.dispose();
         * ```
         *
         * Most of the time this function returns a {@link JSHandle},
         * but if `pageFunction` returns a reference to an element,
         * you instead get an {@link ElementHandle} back:
         *
         * @example
         *
         * ```ts
         * const button = await page.evaluateHandle(() =>
         *   document.querySelector('button')
         * );
         * // can call `click` because `button` is an `ElementHandle`
         * await button.click();
         * ```
         *
         * The TypeScript definitions assume that `evaluateHandle` returns
         * a `JSHandle`, but if you know it's going to return an
         * `ElementHandle`, pass it as the generic argument:
         *
         * ```ts
         * const button = await page.evaluateHandle<ElementHandle>(...);
         * ```
         *
         * @param pageFunction - a function that is run within the page
         * @param args - arguments to be passed to the pageFunction
         */ function evaluateHandle(pageFunction) {
                    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                        args[_key - 1] = arguments[_key];
                    }
                    var _this = this;
                    return _async_to_generator(function() {
                        var _this_mainFrame;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    pageFunction = (0,_common_util_js__WEBPACK_IMPORTED_MODULE_4__.withSourcePuppeteerURLIfNone)(_this.evaluateHandle.name, pageFunction);
                                    return [
                                        4,
                                        (_this_mainFrame = _this.mainFrame()).evaluateHandle.apply(_this_mainFrame, [
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
                key: "$eval",
                value: /**
         * This method finds the first element within the page that matches the selector
         * and passes the result as the first argument to the `pageFunction`.
         *
         * @remarks
         *
         * If no element is found matching `selector`, the method will throw an error.
         *
         * If `pageFunction` returns a promise `$eval` will wait for the promise to
         * resolve and then return its value.
         *
         * @example
         *
         * ```ts
         * const searchValue = await page.$eval('#search', el => el.value);
         * const preloadHref = await page.$eval('link[rel=preload]', el => el.href);
         * const html = await page.$eval('.main-container', el => el.outerHTML);
         * ```
         *
         * If you are using TypeScript, you may have to provide an explicit type to the
         * first argument of the `pageFunction`.
         * By default it is typed as `Element`, but you may need to provide a more
         * specific sub-type:
         *
         * @example
         *
         * ```ts
         * // if you don't provide HTMLInputElement here, TS will error
         * // as `value` is not on `Element`
         * const searchValue = await page.$eval(
         *   '#search',
         *   (el: HTMLInputElement) => el.value
         * );
         * ```
         *
         * The compiler should be able to infer the return type
         * from the `pageFunction` you provide. If it is unable to, you can use the generic
         * type to tell the compiler what return type you expect from `$eval`:
         *
         * @example
         *
         * ```ts
         * // The compiler can infer the return type in this case, but if it can't
         * // or if you want to be more explicit, provide it as the generic type.
         * const searchValue = await page.$eval<string>(
         *   '#search',
         *   (el: HTMLInputElement) => el.value
         * );
         * ```
         *
         * @param selector -
         * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
         * to query page for.
         * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
         * can be passed as-is and a
         * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
         * allows quering by
         * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
         * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
         * and
         * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
         * and
         * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
         * Alternatively, you can specify the selector type using a
         * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}.
         * @param pageFunction - the function to be evaluated in the page context.
         * Will be passed the result of the element matching the selector as its
         * first argument.
         * @param args - any additional arguments to pass through to `pageFunction`.
         *
         * @returns The result of calling `pageFunction`. If it returns an element it
         * is wrapped in an {@link ElementHandle}, else the raw value itself is
         * returned.
         */ function $eval(selector, pageFunction) {
                    for(var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                        args[_key - 2] = arguments[_key];
                    }
                    var _this = this;
                    return _async_to_generator(function() {
                        var _this_mainFrame;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    pageFunction = (0,_common_util_js__WEBPACK_IMPORTED_MODULE_4__.withSourcePuppeteerURLIfNone)(_this.$eval.name, pageFunction);
                                    return [
                                        4,
                                        (_this_mainFrame = _this.mainFrame()).$eval.apply(_this_mainFrame, [
                                            selector,
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
                key: "$$eval",
                value: /**
         * This method returns all elements matching the selector and passes the
         * resulting array as the first argument to the `pageFunction`.
         *
         * @remarks
         * If `pageFunction` returns a promise `$$eval` will wait for the promise to
         * resolve and then return its value.
         *
         * @example
         *
         * ```ts
         * // get the amount of divs on the page
         * const divCount = await page.$$eval('div', divs => divs.length);
         *
         * // get the text content of all the `.options` elements:
         * const options = await page.$$eval('div > span.options', options => {
         *   return options.map(option => option.textContent);
         * });
         * ```
         *
         * If you are using TypeScript, you may have to provide an explicit type to the
         * first argument of the `pageFunction`.
         * By default it is typed as `Element[]`, but you may need to provide a more
         * specific sub-type:
         *
         * @example
         *
         * ```ts
         * await page.$$eval('input', elements => {
         *   return elements.map(e => e.value);
         * });
         * ```
         *
         * The compiler should be able to infer the return type
         * from the `pageFunction` you provide. If it is unable to, you can use the generic
         * type to tell the compiler what return type you expect from `$$eval`:
         *
         * @example
         *
         * ```ts
         * const allInputValues = await page.$$eval('input', elements =>
         *   elements.map(e => e.textContent)
         * );
         * ```
         *
         * @param selector -
         * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
         * to query page for.
         * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
         * can be passed as-is and a
         * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
         * allows quering by
         * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
         * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
         * and
         * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
         * and
         * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
         * Alternatively, you can specify the selector type using a
         * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}.
         * @param pageFunction - the function to be evaluated in the page context.
         * Will be passed an array of matching elements as its first argument.
         * @param args - any additional arguments to pass through to `pageFunction`.
         *
         * @returns The result of calling `pageFunction`. If it returns an element it
         * is wrapped in an {@link ElementHandle}, else the raw value itself is
         * returned.
         */ function $$eval(selector, pageFunction) {
                    for(var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                        args[_key - 2] = arguments[_key];
                    }
                    var _this = this;
                    return _async_to_generator(function() {
                        var _this_mainFrame;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    pageFunction = (0,_common_util_js__WEBPACK_IMPORTED_MODULE_4__.withSourcePuppeteerURLIfNone)(_this.$$eval.name, pageFunction);
                                    return [
                                        4,
                                        (_this_mainFrame = _this.mainFrame()).$$eval.apply(_this_mainFrame, [
                                            selector,
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
                key: "addScriptTag",
                value: /**
         * Adds a `<script>` tag into the page with the desired URL or content.
         *
         * @remarks
         * Shortcut for
         * {@link Frame.addScriptTag | page.mainFrame().addScriptTag(options)}.
         *
         * @param options - Options for the script.
         * @returns An {@link ElementHandle | element handle} to the injected
         * `<script>` element.
         */ function addScriptTag(options) {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this.mainFrame().addScriptTag(options)
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
                key: "addStyleTag",
                value: function addStyleTag(options) {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this.mainFrame().addStyleTag(options)
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
                /**
         * The page's URL.
         *
         * @remarks
         *
         * Shortcut for {@link Frame.url | page.mainFrame().url()}.
         */ key: "url",
                value: function url() {
                    return this.mainFrame().url();
                }
            },
            {
                key: "content",
                value: /**
         * The full HTML contents of the page, including the DOCTYPE.
         */ function content() {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this.mainFrame().content()
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
                key: "setContent",
                value: /**
         * Set the content of the page.
         *
         * @param html - HTML markup to assign to the page.
         * @param options - Parameters that has some properties.
         */ function setContent(html, options) {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this.mainFrame().setContent(html, options)
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
                key: "goto",
                value: /**
         * {@inheritDoc Frame.goto}
         */ function goto(url, options) {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this.mainFrame().goto(url, options)
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
                key: "waitForNavigation",
                value: /**
         * Waits for the page to navigate to a new URL or to reload. It is useful when
         * you run code that will indirectly cause the page to navigate.
         *
         * @example
         *
         * ```ts
         * const [response] = await Promise.all([
         *   page.waitForNavigation(), // The promise resolves after navigation has finished
         *   page.click('a.my-link'), // Clicking the link will indirectly cause a navigation
         * ]);
         * ```
         *
         * @remarks
         *
         * Usage of the
         * {@link https://developer.mozilla.org/en-US/docs/Web/API/History_API | History API}
         * to change the URL is considered a navigation.
         *
         * @param options - Navigation parameters which might have the following
         * properties:
         * @returns A `Promise` which resolves to the main resource response.
         *
         * - In case of multiple redirects, the navigation will resolve with the
         *   response of the last redirect.
         * - In case of navigation to a different anchor or navigation due to History
         *   API usage, the navigation will resolve with `null`.
         */ function waitForNavigation() {
                    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this.mainFrame().waitForNavigation(options)
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
                /**
         * @param urlOrPredicate - A URL or predicate to wait for
         * @param options - Optional waiting parameters
         * @returns Promise which resolves to the matched request
         * @example
         *
         * ```ts
         * const firstRequest = await page.waitForRequest(
         *   'https://example.com/resource'
         * );
         * const finalRequest = await page.waitForRequest(
         *   request => request.url() === 'https://example.com'
         * );
         * return finalRequest.response()?.ok();
         * ```
         *
         * @remarks
         * Optional Waiting Parameters have:
         *
         * - `timeout`: Maximum wait time in milliseconds, defaults to `30` seconds, pass
         *   `0` to disable the timeout. The default value can be changed by using the
         *   {@link Page.setDefaultTimeout} method.
         */ key: "waitForRequest",
                value: function waitForRequest(urlOrPredicate) {
                    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                    var tmp = options.timeout, ms = tmp === void 0 ? this._timeoutSettings.timeout() : tmp, signal = options.signal;
                    if (typeof urlOrPredicate === 'string') {
                        var url = urlOrPredicate;
                        urlOrPredicate = function(request) {
                            return request.url() === url;
                        };
                    }
                    var observable$ = (0,_common_util_js__WEBPACK_IMPORTED_MODULE_4__.fromEmitterEvent)(this, "request" /* PageEvent.Request */ ).pipe((0,_common_util_js__WEBPACK_IMPORTED_MODULE_4__.filterAsync)(urlOrPredicate), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.raceWith)((0,_common_util_js__WEBPACK_IMPORTED_MODULE_4__.timeout)(ms), (0,_common_util_js__WEBPACK_IMPORTED_MODULE_4__.fromAbortSignal)(signal), (0,_common_util_js__WEBPACK_IMPORTED_MODULE_4__.fromEmitterEvent)(this, "close" /* PageEvent.Close */ ).pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.map)(function() {
                        throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.TargetCloseError('Page closed!');
                    }))));
                    return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.firstValueFrom)(observable$);
                }
            },
            {
                /**
         * @param urlOrPredicate - A URL or predicate to wait for.
         * @param options - Optional waiting parameters
         * @returns Promise which resolves to the matched response.
         * @example
         *
         * ```ts
         * const firstResponse = await page.waitForResponse(
         *   'https://example.com/resource'
         * );
         * const finalResponse = await page.waitForResponse(
         *   response =>
         *     response.url() === 'https://example.com' && response.status() === 200
         * );
         * const finalResponse = await page.waitForResponse(async response => {
         *   return (await response.text()).includes('<html>');
         * });
         * return finalResponse.ok();
         * ```
         *
         * @remarks
         * Optional Parameter have:
         *
         * - `timeout`: Maximum wait time in milliseconds, defaults to `30` seconds,
         *   pass `0` to disable the timeout. The default value can be changed by using
         *   the {@link Page.setDefaultTimeout} method.
         */ key: "waitForResponse",
                value: function waitForResponse(urlOrPredicate) {
                    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                    var tmp = options.timeout, ms = tmp === void 0 ? this._timeoutSettings.timeout() : tmp, signal = options.signal;
                    if (typeof urlOrPredicate === 'string') {
                        var url = urlOrPredicate;
                        urlOrPredicate = function(response) {
                            return response.url() === url;
                        };
                    }
                    var observable$ = (0,_common_util_js__WEBPACK_IMPORTED_MODULE_4__.fromEmitterEvent)(this, "response" /* PageEvent.Response */ ).pipe((0,_common_util_js__WEBPACK_IMPORTED_MODULE_4__.filterAsync)(urlOrPredicate), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.raceWith)((0,_common_util_js__WEBPACK_IMPORTED_MODULE_4__.timeout)(ms), (0,_common_util_js__WEBPACK_IMPORTED_MODULE_4__.fromAbortSignal)(signal), (0,_common_util_js__WEBPACK_IMPORTED_MODULE_4__.fromEmitterEvent)(this, "close" /* PageEvent.Close */ ).pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.map)(function() {
                        throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.TargetCloseError('Page closed!');
                    }))));
                    return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.firstValueFrom)(observable$);
                }
            },
            {
                /**
         * Waits for the network to be idle.
         *
         * @param options - Options to configure waiting behavior.
         * @returns A promise which resolves once the network is idle.
         */ key: "waitForNetworkIdle",
                value: function waitForNetworkIdle() {
                    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.firstValueFrom)(this.waitForNetworkIdle$(options));
                }
            },
            {
                /**
         * @internal
         */ key: "waitForNetworkIdle$",
                value: function waitForNetworkIdle$() {
                    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    var tmp = options.timeout, ms = tmp === void 0 ? this._timeoutSettings.timeout() : tmp, _options_idleTime = options.idleTime, idleTime = _options_idleTime === void 0 ? _common_util_js__WEBPACK_IMPORTED_MODULE_4__.NETWORK_IDLE_TIME : _options_idleTime, _options_concurrency = options.concurrency, concurrency = _options_concurrency === void 0 ? 0 : _options_concurrency, signal = options.signal;
                    return _class_private_field_get(this, _inflight$).pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.switchMap)(function(inflight) {
                        if (inflight > concurrency) {
                            return _third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.EMPTY;
                        }
                        return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.timer)(idleTime);
                    }), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.map)(function() {}), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.raceWith)((0,_common_util_js__WEBPACK_IMPORTED_MODULE_4__.timeout)(ms), (0,_common_util_js__WEBPACK_IMPORTED_MODULE_4__.fromAbortSignal)(signal), (0,_common_util_js__WEBPACK_IMPORTED_MODULE_4__.fromEmitterEvent)(this, "close" /* PageEvent.Close */ ).pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.map)(function() {
                        throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.TargetCloseError('Page closed!');
                    }))));
                }
            },
            {
                key: "waitForFrame",
                value: /**
         * Waits for a frame matching the given conditions to appear.
         *
         * @example
         *
         * ```ts
         * const frame = await page.waitForFrame(async frame => {
         *   return frame.name() === 'Test';
         * });
         * ```
         */ function waitForFrame(urlOrPredicate) {
                    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                    var _this = this;
                    return _async_to_generator(function() {
                        var tmp, ms, signal;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    tmp = options.timeout, ms = tmp === void 0 ? _this.getDefaultTimeout() : tmp, signal = options.signal;
                                    if ((0,_common_util_js__WEBPACK_IMPORTED_MODULE_4__.isString)(urlOrPredicate)) {
                                        urlOrPredicate = function(frame) {
                                            return urlOrPredicate === frame.url();
                                        };
                                    }
                                    return [
                                        4,
                                        (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.firstValueFrom)((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.merge)((0,_common_util_js__WEBPACK_IMPORTED_MODULE_4__.fromEmitterEvent)(_this, "frameattached" /* PageEvent.FrameAttached */ ), (0,_common_util_js__WEBPACK_IMPORTED_MODULE_4__.fromEmitterEvent)(_this, "framenavigated" /* PageEvent.FrameNavigated */ ), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.from)(_this.frames())).pipe((0,_common_util_js__WEBPACK_IMPORTED_MODULE_4__.filterAsync)(urlOrPredicate), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.first)(), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.raceWith)((0,_common_util_js__WEBPACK_IMPORTED_MODULE_4__.timeout)(ms), (0,_common_util_js__WEBPACK_IMPORTED_MODULE_4__.fromAbortSignal)(signal), (0,_common_util_js__WEBPACK_IMPORTED_MODULE_4__.fromEmitterEvent)(_this, "close" /* PageEvent.Close */ ).pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.map)(function() {
                                            throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.TargetCloseError('Page closed.');
                                        })))))
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
                key: "emulate",
                value: /**
         * Emulates a given device's metrics and user agent.
         *
         * To aid emulation, Puppeteer provides a list of known devices that can be
         * via {@link KnownDevices}.
         *
         * @remarks
         * This method is a shortcut for calling two methods:
         * {@link Page.setUserAgent} and {@link Page.setViewport}.
         *
         * This method will resize the page. A lot of websites don't expect phones to
         * change size, so you should emulate before navigating to the page.
         *
         * @example
         *
         * ```ts
         * import {KnownDevices} from 'puppeteer';
         * const iPhone = KnownDevices['iPhone 15 Pro'];
         *
         * (async () => {
         *   const browser = await puppeteer.launch();
         *   const page = await browser.newPage();
         *   await page.emulate(iPhone);
         *   await page.goto('https://www.google.com');
         *   // other actions...
         *   await browser.close();
         * })();
         * ```
         */ function emulate(device) {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        Promise.all([
                                            _this.setUserAgent(device.userAgent),
                                            _this.setViewport(device.viewport)
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
                key: "evaluate",
                value: /**
         * Evaluates a function in the page's context and returns the result.
         *
         * If the function passed to `page.evaluate` returns a Promise, the
         * function will wait for the promise to resolve and return its value.
         *
         * @example
         *
         * ```ts
         * const result = await frame.evaluate(() => {
         *   return Promise.resolve(8 * 7);
         * });
         * console.log(result); // prints "56"
         * ```
         *
         * You can pass a string instead of a function (although functions are
         * recommended as they are easier to debug and use with TypeScript):
         *
         * @example
         *
         * ```ts
         * const aHandle = await page.evaluate('1 + 2');
         * ```
         *
         * To get the best TypeScript experience, you should pass in as the
         * generic the type of `pageFunction`:
         *
         * ```ts
         * const aHandle = await page.evaluate(() => 2);
         * ```
         *
         * @example
         *
         * {@link ElementHandle} instances (including {@link JSHandle}s) can be passed
         * as arguments to the `pageFunction`:
         *
         * ```ts
         * const bodyHandle = await page.$('body');
         * const html = await page.evaluate(body => body.innerHTML, bodyHandle);
         * await bodyHandle.dispose();
         * ```
         *
         * @param pageFunction - a function that is run within the page
         * @param args - arguments to be passed to the pageFunction
         *
         * @returns the return value of `pageFunction`.
         */ function evaluate(pageFunction) {
                    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                        args[_key - 1] = arguments[_key];
                    }
                    var _this = this;
                    return _async_to_generator(function() {
                        var _this_mainFrame;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    pageFunction = (0,_common_util_js__WEBPACK_IMPORTED_MODULE_4__.withSourcePuppeteerURLIfNone)(_this.evaluate.name, pageFunction);
                                    return [
                                        4,
                                        (_this_mainFrame = _this.mainFrame()).evaluate.apply(_this_mainFrame, [
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
                key: "_maybeWriteBufferToFile",
                value: /**
         * @internal
         */ function _maybeWriteBufferToFile(path, buffer) {
                    return _async_to_generator(function() {
                        var fs;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    if (!path) {
                                        return [
                                            2
                                        ];
                                    }
                                    return [
                                        4,
                                        (0,_common_util_js__WEBPACK_IMPORTED_MODULE_4__.importFSPromises)()
                                    ];
                                case 1:
                                    fs = _state.sent();
                                    return [
                                        4,
                                        fs.writeFile(path, buffer)
                                    ];
                                case 2:
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
                key: "screencast",
                value: /**
         * Captures a screencast of this {@link Page | page}.
         *
         * @example
         * Recording a {@link Page | page}:
         *
         * ```
         * import puppeteer from 'puppeteer';
         *
         * // Launch a browser
         * const browser = await puppeteer.launch();
         *
         * // Create a new page
         * const page = await browser.newPage();
         *
         * // Go to your site.
         * await page.goto("https://www.example.com");
         *
         * // Start recording.
         * const recorder = await page.screencast({path: 'recording.webm'});
         *
         * // Do something.
         *
         * // Stop recording.
         * await recorder.stop();
         *
         * browser.close();
         * ```
         *
         * @param options - Configures screencast behavior.
         *
         * @experimental
         *
         * @remarks
         *
         * All recordings will be {@link https://www.webmproject.org/ | WebM} format using
         * the {@link https://www.webmproject.org/vp9/ | VP9} video codec. The FPS is 30.
         *
         * You must have {@link https://ffmpeg.org/ | ffmpeg} installed on your system.
         */ function screencast() {
                    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    var _this = this;
                    return _async_to_generator(function() {
                        var _ref, ScreenRecorder, _ref_, width, height, devicePixelRatio, crop, _roundRectangle, x, y, cropWidth, cropHeight, viewportWidth, viewportHeight, recorder, error, createWriteStream, stream;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        Promise.all([
                                            Promise.all(/*! import() */ [__webpack_require__.e("third_party_puppeteer_package_lib_esm_puppeteer_node_ScreenRecorder_js"), __webpack_require__.e("third_party_puppeteer_package_lib_esm_puppeteer_api_CDPSession_js-_300f7")]).then(__webpack_require__.bind(__webpack_require__, /*! ../node/ScreenRecorder.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/node/ScreenRecorder.js")),
                                            _class_private_method_get(_this, _getNativePixelDimensions, getNativePixelDimensions).call(_this)
                                        ])
                                    ];
                                case 1:
                                    _ref = _sliced_to_array.apply(void 0, [
                                        _state.sent(),
                                        2
                                    ]), ScreenRecorder = _ref[0].ScreenRecorder, _ref_ = _sliced_to_array(_ref[1], 3), width = _ref_[0], height = _ref_[1], devicePixelRatio = _ref_[2];
                                    if (options.crop) {
                                        _roundRectangle = roundRectangle(normalizeRectangle(options.crop)), x = _roundRectangle.x, y = _roundRectangle.y, cropWidth = _roundRectangle.width, cropHeight = _roundRectangle.height;
                                        if (x < 0 || y < 0) {
                                            throw new Error("`crop.x` and `crop.y` must be greater than or equal to 0.");
                                        }
                                        if (cropWidth <= 0 || cropHeight <= 0) {
                                            throw new Error("`crop.height` and `crop.width` must be greater than or equal to 0.");
                                        }
                                        viewportWidth = width / devicePixelRatio;
                                        viewportHeight = height / devicePixelRatio;
                                        if (x + cropWidth > viewportWidth) {
                                            throw new Error("`crop.width` cannot be larger than the viewport width (".concat(viewportWidth, ")."));
                                        }
                                        if (y + cropHeight > viewportHeight) {
                                            throw new Error("`crop.height` cannot be larger than the viewport height (".concat(viewportHeight, ")."));
                                        }
                                        crop = {
                                            x: x * devicePixelRatio,
                                            y: y * devicePixelRatio,
                                            width: cropWidth * devicePixelRatio,
                                            height: cropHeight * devicePixelRatio
                                        };
                                    }
                                    if (options.speed !== undefined && options.speed <= 0) {
                                        throw new Error("`speed` must be greater than 0.");
                                    }
                                    if (options.scale !== undefined && options.scale <= 0) {
                                        throw new Error("`scale` must be greater than 0.");
                                    }
                                    recorder = new ScreenRecorder(_this, width, height, _object_spread_props(_object_spread({}, options), {
                                        path: options.ffmpegPath,
                                        crop: crop
                                    }));
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
                                        _this._startScreencast()
                                    ];
                                case 3:
                                    _state.sent();
                                    return [
                                        3,
                                        5
                                    ];
                                case 4:
                                    error = _state.sent();
                                    void recorder.stop();
                                    throw error;
                                case 5:
                                    if (!options.path) return [
                                        3,
                                        7
                                    ];
                                    return [
                                        4,
                                        Promise.resolve().then(function webpackMissingModule() { var e = new Error("Cannot find module 'fs'"); e.code = 'MODULE_NOT_FOUND'; throw e; })
                                    ];
                                case 6:
                                    createWriteStream = _state.sent().createWriteStream;
                                    stream = createWriteStream(options.path, 'binary');
                                    recorder.pipe(stream);
                                    _state.label = 7;
                                case 7:
                                    return [
                                        2,
                                        recorder
                                    ];
                            }
                        });
                    })();
                }
            },
            {
                key: "_startScreencast",
                value: /**
         * @internal
         */ function _startScreencast() {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    ++_class_private_field_update(_this, _screencastSessionCount).value;
                                    if (!_class_private_field_get(_this, _startScreencastPromise)) {
                                        _class_private_field_set(_this, _startScreencastPromise, _this.mainFrame().client.send('Page.startScreencast', {
                                            format: 'png'
                                        }).then(function() {
                                            // Wait for the first frame.
                                            return new Promise(function(resolve) {
                                                return _this.mainFrame().client.once('Page.screencastFrame', function() {
                                                    return resolve();
                                                });
                                            });
                                        }));
                                    }
                                    return [
                                        4,
                                        _class_private_field_get(_this, _startScreencastPromise)
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
                key: "_stopScreencast",
                value: /**
         * @internal
         */ function _stopScreencast() {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    --_class_private_field_update(_this, _screencastSessionCount).value;
                                    if (!_class_private_field_get(_this, _startScreencastPromise)) {
                                        return [
                                            2
                                        ];
                                    }
                                    _class_private_field_set(_this, _startScreencastPromise, undefined);
                                    if (!(_class_private_field_get(_this, _screencastSessionCount) === 0)) return [
                                        3,
                                        2
                                    ];
                                    return [
                                        4,
                                        _this.mainFrame().client.send('Page.stopScreencast')
                                    ];
                                case 1:
                                    _state.sent();
                                    _state.label = 2;
                                case 2:
                                    return [
                                        2
                                    ];
                            }
                        });
                    })();
                }
            },
            {
                key: "screenshot",
                value: function screenshot() {
                    var userOptions = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    var _this = this;
                    return _async_to_generator(function() {
                        var env_2, _guard, _tmp, options, filePath, extension, _options_type, stack, scrollDimensions, viewport, data, buffer, e_2, result_1;
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
                                        12,
                                        13,
                                        16
                                    ]);
                                    _tmp = [
                                        env_2
                                    ];
                                    return [
                                        4,
                                        _this.browserContext().startScreenshot()
                                    ];
                                case 2:
                                    _guard = __addDisposableResource.apply(void 0, _tmp.concat([
                                        _state.sent(),
                                        false
                                    ]));
                                    return [
                                        4,
                                        _this.bringToFront()
                                    ];
                                case 3:
                                    _state.sent();
                                    // TODO: use structuredClone after Node 16 support is dropped.
                                    options = _object_spread_props(_object_spread({}, userOptions), {
                                        clip: userOptions.clip ? _object_spread({}, userOptions.clip) : undefined
                                    });
                                    if (options.type === undefined && options.path !== undefined) {
                                        filePath = options.path;
                                        // Note we cannot use Node.js here due to browser compatibility.
                                        extension = filePath.slice(filePath.lastIndexOf('.') + 1).toLowerCase();
                                        switch(extension){
                                            case 'png':
                                                options.type = 'png';
                                                break;
                                            case 'jpeg':
                                            case 'jpg':
                                                options.type = 'jpeg';
                                                break;
                                            case 'webp':
                                                options.type = 'webp';
                                                break;
                                        }
                                    }
                                    if (options.quality !== undefined) {
                                        if (options.quality < 0 || options.quality > 100) {
                                            throw new Error("Expected 'quality' (".concat(options.quality, ") to be between 0 and 100, inclusive."));
                                        }
                                        if (options.type === undefined || ![
                                            'jpeg',
                                            'webp'
                                        ].includes(options.type)) {
                                            ;
                                            throw new Error("".concat((_options_type = options.type) !== null && _options_type !== void 0 ? _options_type : 'png', " screenshots do not support 'quality'."));
                                        }
                                    }
                                    if (options.clip) {
                                        if (options.clip.width <= 0) {
                                            throw new Error("'width' in 'clip' must be positive.");
                                        }
                                        if (options.clip.height <= 0) {
                                            throw new Error("'height' in 'clip' must be positive.");
                                        }
                                    }
                                    setDefaultScreenshotOptions(options);
                                    stack = __addDisposableResource(env_2, new _util_disposable_js__WEBPACK_IMPORTED_MODULE_6__.AsyncDisposableStack(), true);
                                    if (!options.clip) return [
                                        3,
                                        4
                                    ];
                                    if (options.fullPage) {
                                        throw new Error("'clip' and 'fullPage' are mutually exclusive");
                                    }
                                    options.clip = roundRectangle(normalizeRectangle(options.clip));
                                    return [
                                        3,
                                        9
                                    ];
                                case 4:
                                    if (!options.fullPage) return [
                                        3,
                                        8
                                    ];
                                    if (!!options.captureBeyondViewport) return [
                                        3,
                                        7
                                    ];
                                    return [
                                        4,
                                        _this.mainFrame().isolatedRealm().evaluate(function() {
                                            var element = document.documentElement;
                                            return {
                                                width: element.scrollWidth,
                                                height: element.scrollHeight
                                            };
                                        })
                                    ];
                                case 5:
                                    scrollDimensions = _state.sent();
                                    viewport = _this.viewport();
                                    return [
                                        4,
                                        _this.setViewport(_object_spread({}, viewport, scrollDimensions))
                                    ];
                                case 6:
                                    _state.sent();
                                    stack.defer(/*#__PURE__*/ _async_to_generator(function() {
                                        return _ts_generator(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    return [
                                                        4,
                                                        _this.setViewport(viewport).catch(_common_util_js__WEBPACK_IMPORTED_MODULE_4__.debugError)
                                                    ];
                                                case 1:
                                                    _state.sent();
                                                    return [
                                                        2
                                                    ];
                                            }
                                        });
                                    }));
                                    _state.label = 7;
                                case 7:
                                    return [
                                        3,
                                        9
                                    ];
                                case 8:
                                    options.captureBeyondViewport = false;
                                    _state.label = 9;
                                case 9:
                                    return [
                                        4,
                                        _this._screenshot(options)
                                    ];
                                case 10:
                                    data = _state.sent();
                                    if (options.encoding === 'base64') {
                                        return [
                                            2,
                                            data
                                        ];
                                    }
                                    buffer = Buffer.from(data, 'base64');
                                    return [
                                        4,
                                        _this._maybeWriteBufferToFile(options.path, buffer)
                                    ];
                                case 11:
                                    _state.sent();
                                    return [
                                        2,
                                        buffer
                                    ];
                                case 12:
                                    e_2 = _state.sent();
                                    env_2.error = e_2;
                                    env_2.hasError = true;
                                    return [
                                        3,
                                        16
                                    ];
                                case 13:
                                    result_1 = __disposeResources(env_2);
                                    if (!result_1) return [
                                        3,
                                        15
                                    ];
                                    return [
                                        4,
                                        result_1
                                    ];
                                case 14:
                                    _state.sent();
                                    _state.label = 15;
                                case 15:
                                    return [
                                        7
                                    ];
                                case 16:
                                    return [
                                        2
                                    ];
                            }
                        });
                    })();
                }
            },
            {
                key: "title",
                value: /**
         * The page's title
         *
         * @remarks
         *
         * Shortcut for {@link Frame.title | page.mainFrame().title()}.
         */ function title() {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this.mainFrame().title()
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
                /**
         * This method fetches an element with `selector`, scrolls it into view if
         * needed, and then uses {@link Page.mouse} to click in the center of the
         * element. If there's no element matching `selector`, the method throws an
         * error.
         *
         * @remarks
         *
         * Bear in mind that if `click()` triggers a navigation event and
         * there's a separate `page.waitForNavigation()` promise to be resolved, you
         * may end up with a race condition that yields unexpected results. The
         * correct pattern for click and wait for navigation is the following:
         *
         * ```ts
         * const [response] = await Promise.all([
         *   page.waitForNavigation(waitOptions),
         *   page.click(selector, clickOptions),
         * ]);
         * ```
         *
         * Shortcut for {@link Frame.click | page.mainFrame().click(selector[, options]) }.
         * @param selector - A `selector` to search for element to click. If there are
         * multiple elements satisfying the `selector`, the first will be clicked
         * @param options - `Object`
         * @returns Promise which resolves when the element matching `selector` is
         * successfully clicked. The Promise will be rejected if there is no element
         * matching `selector`.
         */ key: "click",
                value: function click(selector, options) {
                    return this.mainFrame().click(selector, options);
                }
            },
            {
                /**
         * This method fetches an element with `selector` and focuses it. If there's no
         * element matching `selector`, the method throws an error.
         * @param selector - A
         * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | selector }
         * of an element to focus. If there are multiple elements satisfying the
         * selector, the first will be focused.
         * @returns Promise which resolves when the element matching selector is
         * successfully focused. The promise will be rejected if there is no element
         * matching selector.
         *
         * @remarks
         *
         * Shortcut for {@link Frame.focus | page.mainFrame().focus(selector)}.
         */ key: "focus",
                value: function focus(selector) {
                    return this.mainFrame().focus(selector);
                }
            },
            {
                /**
         * This method fetches an element with `selector`, scrolls it into view if
         * needed, and then uses {@link Page.mouse}
         * to hover over the center of the element.
         * If there's no element matching `selector`, the method throws an error.
         * @param selector - A
         * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | selector}
         * to search for element to hover. If there are multiple elements satisfying
         * the selector, the first will be hovered.
         * @returns Promise which resolves when the element matching `selector` is
         * successfully hovered. Promise gets rejected if there's no element matching
         * `selector`.
         *
         * @remarks
         *
         * Shortcut for {@link Page.hover | page.mainFrame().hover(selector)}.
         */ key: "hover",
                value: function hover(selector) {
                    return this.mainFrame().hover(selector);
                }
            },
            {
                /**
         * Triggers a `change` and `input` event once all the provided options have been
         * selected. If there's no `<select>` element matching `selector`, the method
         * throws an error.
         *
         * @example
         *
         * ```ts
         * page.select('select#colors', 'blue'); // single selection
         * page.select('select#colors', 'red', 'green', 'blue'); // multiple selections
         * ```
         *
         * @param selector - A
         * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | Selector}
         * to query the page for
         * @param values - Values of options to select. If the `<select>` has the
         * `multiple` attribute, all values are considered, otherwise only the first one
         * is taken into account.
         * @returns
         *
         * @remarks
         *
         * Shortcut for {@link Frame.select | page.mainFrame().select()}
         */ key: "select",
                value: function select(selector) {
                    for(var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                        values[_key - 1] = arguments[_key];
                    }
                    var _this_mainFrame;
                    return (_this_mainFrame = this.mainFrame()).select.apply(_this_mainFrame, [
                        selector
                    ].concat(_to_consumable_array(values)));
                }
            },
            {
                /**
         * This method fetches an element with `selector`, scrolls it into view if
         * needed, and then uses {@link Page.touchscreen}
         * to tap in the center of the element.
         * If there's no element matching `selector`, the method throws an error.
         * @param selector - A
         * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | Selector}
         * to search for element to tap. If there are multiple elements satisfying the
         * selector, the first will be tapped.
         *
         * @remarks
         *
         * Shortcut for {@link Frame.tap | page.mainFrame().tap(selector)}.
         */ key: "tap",
                value: function tap(selector) {
                    return this.mainFrame().tap(selector);
                }
            },
            {
                /**
         * Sends a `keydown`, `keypress/input`, and `keyup` event for each character
         * in the text.
         *
         * To press a special key, like `Control` or `ArrowDown`, use {@link Keyboard.press}.
         * @example
         *
         * ```ts
         * await page.type('#mytextarea', 'Hello');
         * // Types instantly
         * await page.type('#mytextarea', 'World', {delay: 100});
         * // Types slower, like a user
         * ```
         *
         * @param selector - A
         * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | selector}
         * of an element to type into. If there are multiple elements satisfying the
         * selector, the first will be used.
         * @param text - A text to type into a focused element.
         * @param options - have property `delay` which is the Time to wait between
         * key presses in milliseconds. Defaults to `0`.
         * @returns
         */ key: "type",
                value: function type(selector, text, options) {
                    return this.mainFrame().type(selector, text, options);
                }
            },
            {
                key: "waitForSelector",
                value: /**
         * Wait for the `selector` to appear in page. If at the moment of calling the
         * method the `selector` already exists, the method will return immediately. If
         * the `selector` doesn't appear after the `timeout` milliseconds of waiting, the
         * function will throw.
         *
         * @example
         * This method works across navigations:
         *
         * ```ts
         * import puppeteer from 'puppeteer';
         * (async () => {
         *   const browser = await puppeteer.launch();
         *   const page = await browser.newPage();
         *   let currentURL;
         *   page
         *     .waitForSelector('img')
         *     .then(() => console.log('First URL with image: ' + currentURL));
         *   for (currentURL of [
         *     'https://example.com',
         *     'https://google.com',
         *     'https://bbc.com',
         *   ]) {
         *     await page.goto(currentURL);
         *   }
         *   await browser.close();
         * })();
         * ```
         *
         * @param selector - A
         * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | selector}
         * of an element to wait for
         * @param options - Optional waiting parameters
         * @returns Promise which resolves when element specified by selector string
         * is added to DOM. Resolves to `null` if waiting for hidden: `true` and
         * selector is not found in DOM.
         *
         * @remarks
         * The optional Parameter in Arguments `options` are:
         *
         * - `visible`: A boolean wait for element to be present in DOM and to be
         *   visible, i.e. to not have `display: none` or `visibility: hidden` CSS
         *   properties. Defaults to `false`.
         *
         * - `hidden`: Wait for element to not be found in the DOM or to be hidden,
         *   i.e. have `display: none` or `visibility: hidden` CSS properties. Defaults to
         *   `false`.
         *
         * - `timeout`: maximum time to wait for in milliseconds. Defaults to `30000`
         *   (30 seconds). Pass `0` to disable timeout. The default value can be changed
         *   by using the {@link Page.setDefaultTimeout} method.
         */ function waitForSelector(selector) {
                    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this.mainFrame().waitForSelector(selector, options)
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
                /**
         * Waits for the provided function, `pageFunction`, to return a truthy value when
         * evaluated in the page's context.
         *
         * @example
         * {@link Page.waitForFunction} can be used to observe a viewport size change:
         *
         * ```ts
         * import puppeteer from 'puppeteer';
         * (async () => {
         *   const browser = await puppeteer.launch();
         *   const page = await browser.newPage();
         *   const watchDog = page.waitForFunction('window.innerWidth < 100');
         *   await page.setViewport({width: 50, height: 50});
         *   await watchDog;
         *   await browser.close();
         * })();
         * ```
         *
         * @example
         * Arguments can be passed from Node.js to `pageFunction`:
         *
         * ```ts
         * const selector = '.foo';
         * await page.waitForFunction(
         *   selector => !!document.querySelector(selector),
         *   {},
         *   selector
         * );
         * ```
         *
         * @example
         * The provided `pageFunction` can be asynchronous:
         *
         * ```ts
         * const username = 'github-username';
         * await page.waitForFunction(
         *   async username => {
         *     const githubResponse = await fetch(
         *       `https://api.github.com/users/${username}`
         *     );
         *     const githubUser = await githubResponse.json();
         *     // show the avatar
         *     const img = document.createElement('img');
         *     img.src = githubUser.avatar_url;
         *     // wait 3 seconds
         *     await new Promise((resolve, reject) => setTimeout(resolve, 3000));
         *     img.remove();
         *   },
         *   {},
         *   username
         * );
         * ```
         *
         * @param pageFunction - Function to be evaluated in browser context until it returns a
         * truthy value.
         * @param options - Options for configuring waiting behavior.
         */ key: "waitForFunction",
                value: function waitForFunction(pageFunction, options) {
                    for(var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                        args[_key - 2] = arguments[_key];
                    }
                    var _this_mainFrame;
                    return (_this_mainFrame = this.mainFrame()).waitForFunction.apply(_this_mainFrame, [
                        pageFunction,
                        options
                    ].concat(_to_consumable_array(args)));
                }
            },
            {
                /** @internal */ key: _tmp,
                value: function value() {
                    return void this.close().catch(_common_util_js__WEBPACK_IMPORTED_MODULE_4__.debugError);
                }
            },
            {
                /** @internal */ key: _asyncDisposeSymbol,
                value: function value() {
                    return this.close();
                }
            }
        ]);
        return Page;
    }(_classSuper), function() {
        var _classSuper_Symbol_metadata;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_classSuper_Symbol_metadata = _classSuper[Symbol.metadata]) !== null && _classSuper_Symbol_metadata !== void 0 ? _classSuper_Symbol_metadata : null) : void 0;
        __esDecorate(_Page, null, _screenshot_decorators, {
            kind: "method",
            name: "screenshot",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "screenshot" in obj;
                },
                get: function(obj) {
                    return obj.screenshot;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        if (_metadata) Object.defineProperty(_Page, Symbol.metadata, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _metadata
        });
    }(), _Page;
    function _getNativePixelDimensions1() {
        _getNativePixelDimensions1 = _async_to_generator(function() {
            var _this, env_1, viewport, stack, e_1;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _this = this;
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
                        viewport = this.viewport();
                        stack = __addDisposableResource(env_1, new _util_disposable_js__WEBPACK_IMPORTED_MODULE_6__.DisposableStack(), false);
                        if (!(viewport && viewport.deviceScaleFactor !== 0)) return [
                            3,
                            3
                        ];
                        return [
                            4,
                            this.setViewport(_object_spread_props(_object_spread({}, viewport), {
                                deviceScaleFactor: 0
                            }))
                        ];
                    case 2:
                        _state.sent();
                        stack.defer(function() {
                            void _this.setViewport(viewport).catch(_common_util_js__WEBPACK_IMPORTED_MODULE_4__.debugError);
                        });
                        _state.label = 3;
                    case 3:
                        return [
                            4,
                            this.mainFrame().isolatedRealm().evaluate(function() {
                                return [
                                    window.visualViewport.width * window.devicePixelRatio,
                                    window.visualViewport.height * window.devicePixelRatio,
                                    window.devicePixelRatio
                                ];
                            })
                        ];
                    case 4:
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
        });
        return _getNativePixelDimensions1.apply(this, arguments);
    }
}();

/**
 * @internal
 */ var supportedMetrics = new Set([
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
/** @see https://w3c.github.io/webdriver-bidi/#normalize-rect */ function normalizeRectangle(clip) {
    return _object_spread({}, clip, clip.width < 0 ? {
        x: clip.x + clip.width,
        width: -clip.width
    } : {
        x: clip.x,
        width: clip.width
    }, clip.height < 0 ? {
        y: clip.y + clip.height,
        height: -clip.height
    } : {
        y: clip.y,
        height: clip.height
    });
}
function roundRectangle(clip) {
    var x = Math.round(clip.x);
    var y = Math.round(clip.y);
    var width = Math.round(clip.width + clip.x - x);
    var height = Math.round(clip.height + clip.y - y);
    return _object_spread_props(_object_spread({}, clip), {
        x: x,
        y: y,
        width: width,
        height: height
    });
} //# sourceMappingURL=Page.js.map


}),

}]);