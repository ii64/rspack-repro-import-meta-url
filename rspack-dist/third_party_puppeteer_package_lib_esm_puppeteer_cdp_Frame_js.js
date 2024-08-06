"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_cdp_Frame_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Frame.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CdpFrame: function() { return CdpFrame; }
});
/* harmony import */var _api_Frame_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/Frame.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/Frame.js");
/* harmony import */var _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Errors.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/Errors.js");
/* harmony import */var _common_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */var _util_Deferred_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/Deferred.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/Deferred.js");
/* harmony import */var _util_disposable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/disposable.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/disposable.js");
/* harmony import */var _util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/ErrorLike.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/ErrorLike.js");
/* harmony import */var _Accessibility_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Accessibility.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Accessibility.js");
/* harmony import */var _FrameManagerEvents_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FrameManagerEvents.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/FrameManagerEvents.js");
/* harmony import */var _IsolatedWorld_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./IsolatedWorld.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/IsolatedWorld.js");
/* harmony import */var _IsolatedWorlds_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./IsolatedWorlds.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/IsolatedWorlds.js");
/* harmony import */var _LifecycleWatcher_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./LifecycleWatcher.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/LifecycleWatcher.js");
/* harmony import */var _utils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/utils.js");
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












/**
 * @internal
 */ var CdpFrame = function() {
    var onMainWorldConsoleApiCalled = function onMainWorldConsoleApiCalled(event) {
        this._frameManager.emit(_FrameManagerEvents_js__WEBPACK_IMPORTED_MODULE_7__.FrameManagerEvent.ConsoleApiCalled, [
            this.worlds[_IsolatedWorlds_js__WEBPACK_IMPORTED_MODULE_9__.MAIN_WORLD],
            event
        ]);
    };
    var onMainWorldBindingCalled = function onMainWorldBindingCalled(event) {
        this._frameManager.emit(_FrameManagerEvents_js__WEBPACK_IMPORTED_MODULE_7__.FrameManagerEvent.BindingCalled, [
            this.worlds[_IsolatedWorlds_js__WEBPACK_IMPORTED_MODULE_9__.MAIN_WORLD],
            event
        ]);
    };
    var deviceRequestPromptManager = function deviceRequestPromptManager() {
        var rootFrame = this.page().mainFrame();
        if (this.isOOPFrame() || rootFrame === null) {
            return this._frameManager._deviceRequestPromptManager(_class_private_field_get(this, _client));
        } else {
            return rootFrame._frameManager._deviceRequestPromptManager(_class_private_field_get(this, _client));
        }
    };
    var _tmp;
    var _url, _detached, _client, _onMainWorldConsoleApiCalled, _onMainWorldBindingCalled, _deviceRequestPromptManager, _CdpFrame;
    var _classSuper = _api_Frame_js__WEBPACK_IMPORTED_MODULE_0__.Frame;
    var _instanceExtraInitializers = [];
    var _goto_decorators;
    var _waitForNavigation_decorators;
    var _setContent_decorators;
    var _addPreloadScript_decorators;
    var _addExposedFunctionBinding_decorators;
    var _removeExposedFunctionBinding_decorators;
    var _waitForDevicePrompt_decorators;
    return _url = /*#__PURE__*/ new WeakMap(), _detached = /*#__PURE__*/ new WeakMap(), _client = /*#__PURE__*/ new WeakMap(), _onMainWorldConsoleApiCalled = /*#__PURE__*/ new WeakSet(), _onMainWorldBindingCalled = /*#__PURE__*/ new WeakSet(), _deviceRequestPromptManager = /*#__PURE__*/ new WeakSet(), _tmp = (_goto_decorators = [
        _api_Frame_js__WEBPACK_IMPORTED_MODULE_0__.throwIfDetached
    ], _waitForNavigation_decorators = [
        _api_Frame_js__WEBPACK_IMPORTED_MODULE_0__.throwIfDetached
    ], _setContent_decorators = [
        _api_Frame_js__WEBPACK_IMPORTED_MODULE_0__.throwIfDetached
    ], _addPreloadScript_decorators = [
        _api_Frame_js__WEBPACK_IMPORTED_MODULE_0__.throwIfDetached
    ], _addExposedFunctionBinding_decorators = [
        _api_Frame_js__WEBPACK_IMPORTED_MODULE_0__.throwIfDetached
    ], _removeExposedFunctionBinding_decorators = [
        _api_Frame_js__WEBPACK_IMPORTED_MODULE_0__.throwIfDetached
    ], _waitForDevicePrompt_decorators = [
        _api_Frame_js__WEBPACK_IMPORTED_MODULE_0__.throwIfDetached
    ], _util_disposable_js__WEBPACK_IMPORTED_MODULE_4__.disposeSymbol), _CdpFrame = /*#__PURE__*/ function(_classSuper) {
        "use strict";
        _inherits(CdpFrame, _classSuper);
        var _super = _create_super(CdpFrame);
        function CdpFrame(frameManager, frameId, parentFrameId, client) {
            _class_call_check(this, CdpFrame);
            var _this;
            _this = _super.call(this);
            _class_private_method_init(_assert_this_initialized(_this), _onMainWorldConsoleApiCalled);
            _class_private_method_init(_assert_this_initialized(_this), _onMainWorldBindingCalled);
            _class_private_method_init(_assert_this_initialized(_this), _deviceRequestPromptManager);
            _class_private_field_init(_assert_this_initialized(_this), _url, {
                writable: true,
                value: (__runInitializers(_assert_this_initialized(_this), _instanceExtraInitializers), '')
            });
            _class_private_field_init(_assert_this_initialized(_this), _detached, {
                writable: true,
                value: false
            });
            _class_private_field_init(_assert_this_initialized(_this), _client, {
                writable: true,
                value: void 0
            });
            _define_property(_assert_this_initialized(_this), "_frameManager", void 0);
            _define_property(_assert_this_initialized(_this), "_loaderId", '');
            _define_property(_assert_this_initialized(_this), "_lifecycleEvents", new Set());
            _define_property(_assert_this_initialized(_this), "_id", void 0);
            _define_property(_assert_this_initialized(_this), "_parentId", void 0);
            _define_property(_assert_this_initialized(_this), "accessibility", void 0);
            _define_property(_assert_this_initialized(_this), "worlds", void 0);
            _this._frameManager = frameManager;
            _class_private_field_set(_assert_this_initialized(_this), _url, '');
            _this._id = frameId;
            _this._parentId = parentFrameId;
            _class_private_field_set(_assert_this_initialized(_this), _detached, false);
            _class_private_field_set(_assert_this_initialized(_this), _client, client);
            _this._loaderId = '';
            var _obj;
            _this.worlds = (_obj = {}, _define_property(_obj, _IsolatedWorlds_js__WEBPACK_IMPORTED_MODULE_9__.MAIN_WORLD, new _IsolatedWorld_js__WEBPACK_IMPORTED_MODULE_8__.IsolatedWorld(_assert_this_initialized(_this), _this._frameManager.timeoutSettings)), _define_property(_obj, _IsolatedWorlds_js__WEBPACK_IMPORTED_MODULE_9__.PUPPETEER_WORLD, new _IsolatedWorld_js__WEBPACK_IMPORTED_MODULE_8__.IsolatedWorld(_assert_this_initialized(_this), _this._frameManager.timeoutSettings)), _obj);
            _this.accessibility = new _Accessibility_js__WEBPACK_IMPORTED_MODULE_6__.Accessibility(_this.worlds[_IsolatedWorlds_js__WEBPACK_IMPORTED_MODULE_9__.MAIN_WORLD]);
            _this.on(_api_Frame_js__WEBPACK_IMPORTED_MODULE_0__.FrameEvent.FrameSwappedByActivation, function() {
                // Emulate loading process for swapped frames.
                _this._onLoadingStarted();
                _this._onLoadingStopped();
            });
            _this.worlds[_IsolatedWorlds_js__WEBPACK_IMPORTED_MODULE_9__.MAIN_WORLD].emitter.on('consoleapicalled', _class_private_method_get(_this, _onMainWorldConsoleApiCalled, onMainWorldConsoleApiCalled).bind(_assert_this_initialized(_this)));
            _this.worlds[_IsolatedWorlds_js__WEBPACK_IMPORTED_MODULE_9__.MAIN_WORLD].emitter.on('bindingcalled', _class_private_method_get(_this, _onMainWorldBindingCalled, onMainWorldBindingCalled).bind(_assert_this_initialized(_this)));
            return _this;
        }
        _create_class(CdpFrame, [
            {
                /**
         * This is used internally in DevTools.
         *
         * @internal
         */ key: "_client",
                value: function _client1() {
                    return _class_private_field_get(this, _client);
                }
            },
            {
                /**
         * Updates the frame ID with the new ID. This happens when the main frame is
         * replaced by a different frame.
         */ key: "updateId",
                value: function updateId(id) {
                    this._id = id;
                }
            },
            {
                key: "updateClient",
                value: function updateClient(client) {
                    _class_private_field_set(this, _client, client);
                }
            },
            {
                key: "page",
                value: function page() {
                    return this._frameManager.page();
                }
            },
            {
                key: "isOOPFrame",
                value: function isOOPFrame() {
                    return _class_private_field_get(this, _client) !== this._frameManager.client;
                }
            },
            {
                key: "goto",
                value: function goto(url) {
                    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                    var _this = this;
                    return _async_to_generator(function() {
                        var _options_referer, referer, _options_referrerPolicy, referrerPolicy, _options_waitUntil, waitUntil, _options_timeout, timeout, ensureNewDocumentNavigation, watcher, error;
                        function navigate(client, url, referrer, referrerPolicy, frameId) {
                            return _navigate.apply(this, arguments);
                        }
                        function _navigate() {
                            _navigate = _async_to_generator(function(client, url, referrer, referrerPolicy, frameId) {
                                var response, error;
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
                                                client.send('Page.navigate', {
                                                    url: url,
                                                    referrer: referrer,
                                                    frameId: frameId,
                                                    referrerPolicy: referrerPolicy
                                                })
                                            ];
                                        case 1:
                                            response = _state.sent();
                                            ensureNewDocumentNavigation = !!response.loaderId;
                                            if (response.errorText === 'net::ERR_HTTP_RESPONSE_CODE_FAILURE') {
                                                return [
                                                    2,
                                                    null
                                                ];
                                            }
                                            return [
                                                2,
                                                response.errorText ? new Error("".concat(response.errorText, " at ").concat(url)) : null
                                            ];
                                        case 2:
                                            error = _state.sent();
                                            if ((0,_util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_5__.isErrorLike)(error)) {
                                                return [
                                                    2,
                                                    error
                                                ];
                                            }
                                            throw error;
                                        case 3:
                                            return [
                                                2
                                            ];
                                    }
                                });
                            });
                            return _navigate.apply(this, arguments);
                        }
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    _options_referer = options.referer, referer = _options_referer === void 0 ? _this._frameManager.networkManager.extraHTTPHeaders()['referer'] : _options_referer, _options_referrerPolicy = options.referrerPolicy, referrerPolicy = _options_referrerPolicy === void 0 ? _this._frameManager.networkManager.extraHTTPHeaders()['referer-policy'] : _options_referrerPolicy, _options_waitUntil = options.waitUntil, waitUntil = _options_waitUntil === void 0 ? [
                                        'load'
                                    ] : _options_waitUntil, _options_timeout = options.timeout, timeout = _options_timeout === void 0 ? _this._frameManager.timeoutSettings.navigationTimeout() : _options_timeout;
                                    ensureNewDocumentNavigation = false;
                                    watcher = new _LifecycleWatcher_js__WEBPACK_IMPORTED_MODULE_10__.LifecycleWatcher(_this._frameManager.networkManager, _this, waitUntil, timeout);
                                    return [
                                        4,
                                        _util_Deferred_js__WEBPACK_IMPORTED_MODULE_3__.Deferred.race([
                                            navigate(_class_private_field_get(_this, _client), url, referer, referrerPolicy, _this._id),
                                            watcher.terminationPromise()
                                        ])
                                    ];
                                case 1:
                                    error = _state.sent();
                                    if (!!error) return [
                                        3,
                                        3
                                    ];
                                    return [
                                        4,
                                        _util_Deferred_js__WEBPACK_IMPORTED_MODULE_3__.Deferred.race([
                                            watcher.terminationPromise(),
                                            ensureNewDocumentNavigation ? watcher.newDocumentNavigationPromise() : watcher.sameDocumentNavigationPromise()
                                        ])
                                    ];
                                case 2:
                                    error = _state.sent();
                                    _state.label = 3;
                                case 3:
                                    _state.trys.push([
                                        3,
                                        ,
                                        5,
                                        6
                                    ]);
                                    if (error) {
                                        throw error;
                                    }
                                    return [
                                        4,
                                        watcher.navigationResponse()
                                    ];
                                case 4:
                                    return [
                                        2,
                                        _state.sent()
                                    ];
                                case 5:
                                    watcher.dispose();
                                    return [
                                        7
                                    ];
                                case 6:
                                    return [
                                        2
                                    ];
                            }
                        });
                    })();
                }
            },
            {
                key: "waitForNavigation",
                value: function waitForNavigation() {
                    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    var _this = this;
                    return _async_to_generator(function() {
                        var _options_waitUntil, waitUntil, _options_timeout, timeout, watcher, error, result;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    _options_waitUntil = options.waitUntil, waitUntil = _options_waitUntil === void 0 ? [
                                        'load'
                                    ] : _options_waitUntil, _options_timeout = options.timeout, timeout = _options_timeout === void 0 ? _this._frameManager.timeoutSettings.navigationTimeout() : _options_timeout;
                                    watcher = new _LifecycleWatcher_js__WEBPACK_IMPORTED_MODULE_10__.LifecycleWatcher(_this._frameManager.networkManager, _this, waitUntil, timeout);
                                    return [
                                        4,
                                        _util_Deferred_js__WEBPACK_IMPORTED_MODULE_3__.Deferred.race([
                                            watcher.terminationPromise()
                                        ].concat(_to_consumable_array(options.ignoreSameDocumentNavigation ? [] : [
                                            watcher.sameDocumentNavigationPromise()
                                        ]), [
                                            watcher.newDocumentNavigationPromise()
                                        ]))
                                    ];
                                case 1:
                                    error = _state.sent();
                                    _state.label = 2;
                                case 2:
                                    _state.trys.push([
                                        2,
                                        ,
                                        4,
                                        5
                                    ]);
                                    if (error) {
                                        throw error;
                                    }
                                    return [
                                        4,
                                        _util_Deferred_js__WEBPACK_IMPORTED_MODULE_3__.Deferred.race([
                                            watcher.terminationPromise(),
                                            watcher.navigationResponse()
                                        ])
                                    ];
                                case 3:
                                    result = _state.sent();
                                    if (_instanceof(result, Error)) {
                                        throw error;
                                    }
                                    return [
                                        2,
                                        result || null
                                    ];
                                case 4:
                                    watcher.dispose();
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
                key: "client",
                get: function get() {
                    return _class_private_field_get(this, _client);
                }
            },
            {
                key: "mainRealm",
                value: function mainRealm() {
                    return this.worlds[_IsolatedWorlds_js__WEBPACK_IMPORTED_MODULE_9__.MAIN_WORLD];
                }
            },
            {
                key: "isolatedRealm",
                value: function isolatedRealm() {
                    return this.worlds[_IsolatedWorlds_js__WEBPACK_IMPORTED_MODULE_9__.PUPPETEER_WORLD];
                }
            },
            {
                key: "setContent",
                value: function setContent(html) {
                    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                    var _this = this;
                    return _async_to_generator(function() {
                        var _options_waitUntil, waitUntil, _options_timeout, timeout, watcher, error;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    _options_waitUntil = options.waitUntil, waitUntil = _options_waitUntil === void 0 ? [
                                        'load'
                                    ] : _options_waitUntil, _options_timeout = options.timeout, timeout = _options_timeout === void 0 ? _this._frameManager.timeoutSettings.navigationTimeout() : _options_timeout;
                                    // We rely upon the fact that document.open() will reset frame lifecycle with "init"
                                    // lifecycle event. @see https://crrev.com/608658
                                    return [
                                        4,
                                        _this.setFrameContent(html)
                                    ];
                                case 1:
                                    _state.sent();
                                    watcher = new _LifecycleWatcher_js__WEBPACK_IMPORTED_MODULE_10__.LifecycleWatcher(_this._frameManager.networkManager, _this, waitUntil, timeout);
                                    return [
                                        4,
                                        _util_Deferred_js__WEBPACK_IMPORTED_MODULE_3__.Deferred.race([
                                            watcher.terminationPromise(),
                                            watcher.lifecyclePromise()
                                        ])
                                    ];
                                case 2:
                                    error = _state.sent();
                                    watcher.dispose();
                                    if (error) {
                                        throw error;
                                    }
                                    return [
                                        2
                                    ];
                            }
                        });
                    })();
                }
            },
            {
                key: "url",
                value: function url() {
                    return _class_private_field_get(this, _url);
                }
            },
            {
                key: "parentFrame",
                value: function parentFrame() {
                    return this._frameManager._frameTree.parentFrame(this._id) || null;
                }
            },
            {
                key: "childFrames",
                value: function childFrames() {
                    return this._frameManager._frameTree.childFrames(this._id);
                }
            },
            {
                key: "addPreloadScript",
                value: function addPreloadScript(preloadScript) {
                    var _this = this;
                    return _async_to_generator(function() {
                        var identifier;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    if (!_this.isOOPFrame() && _this !== _this._frameManager.mainFrame()) {
                                        return [
                                            2
                                        ];
                                    }
                                    if (preloadScript.getIdForFrame(_this)) {
                                        return [
                                            2
                                        ];
                                    }
                                    return [
                                        4,
                                        _class_private_field_get(_this, _client).send('Page.addScriptToEvaluateOnNewDocument', {
                                            source: preloadScript.source
                                        })
                                    ];
                                case 1:
                                    identifier = _state.sent().identifier;
                                    preloadScript.setIdForFrame(_this, identifier);
                                    return [
                                        2
                                    ];
                            }
                        });
                    })();
                }
            },
            {
                key: "addExposedFunctionBinding",
                value: function addExposedFunctionBinding(binding) {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    // If a frame has not started loading, it might never start. Rely on
                                    // addScriptToEvaluateOnNewDocument in that case.
                                    if (_this !== _this._frameManager.mainFrame() && !_this._hasStartedLoading) {
                                        return [
                                            2
                                        ];
                                    }
                                    return [
                                        4,
                                        Promise.all([
                                            _class_private_field_get(_this, _client).send('Runtime.addBinding', {
                                                name: _utils_js__WEBPACK_IMPORTED_MODULE_11__.CDP_BINDING_PREFIX + binding.name
                                            }),
                                            _this.evaluate(binding.initSource).catch(_common_util_js__WEBPACK_IMPORTED_MODULE_2__.debugError)
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
                key: "removeExposedFunctionBinding",
                value: function removeExposedFunctionBinding(binding) {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    // If a frame has not started loading, it might never start. Rely on
                                    // addScriptToEvaluateOnNewDocument in that case.
                                    if (_this !== _this._frameManager.mainFrame() && !_this._hasStartedLoading) {
                                        return [
                                            2
                                        ];
                                    }
                                    return [
                                        4,
                                        Promise.all([
                                            _class_private_field_get(_this, _client).send('Runtime.removeBinding', {
                                                name: _utils_js__WEBPACK_IMPORTED_MODULE_11__.CDP_BINDING_PREFIX + binding.name
                                            }),
                                            _this.evaluate(function(name) {
                                                // Removes the dangling Puppeteer binding wrapper.
                                                // @ts-expect-error: In a different context.
                                                globalThis[name] = undefined;
                                            }, binding.name).catch(_common_util_js__WEBPACK_IMPORTED_MODULE_2__.debugError)
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
                key: "waitForDevicePrompt",
                value: function waitForDevicePrompt() {
                    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _class_private_method_get(_this, _deviceRequestPromptManager, deviceRequestPromptManager).call(_this).waitForDevicePrompt(options)
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
                key: "_navigated",
                value: function _navigated(framePayload) {
                    this._name = framePayload.name;
                    _class_private_field_set(this, _url, "".concat(framePayload.url).concat(framePayload.urlFragment || ''));
                }
            },
            {
                key: "_navigatedWithinDocument",
                value: function _navigatedWithinDocument(url) {
                    _class_private_field_set(this, _url, url);
                }
            },
            {
                key: "_onLifecycleEvent",
                value: function _onLifecycleEvent(loaderId, name) {
                    if (name === 'init') {
                        this._loaderId = loaderId;
                        this._lifecycleEvents.clear();
                    }
                    this._lifecycleEvents.add(name);
                }
            },
            {
                key: "_onLoadingStopped",
                value: function _onLoadingStopped() {
                    this._lifecycleEvents.add('DOMContentLoaded');
                    this._lifecycleEvents.add('load');
                }
            },
            {
                key: "_onLoadingStarted",
                value: function _onLoadingStarted() {
                    this._hasStartedLoading = true;
                }
            },
            {
                key: "detached",
                get: function get() {
                    return _class_private_field_get(this, _detached);
                }
            },
            {
                key: _tmp,
                value: function value() {
                    if (_class_private_field_get(this, _detached)) {
                        return;
                    }
                    _class_private_field_set(this, _detached, true);
                    this.worlds[_IsolatedWorlds_js__WEBPACK_IMPORTED_MODULE_9__.MAIN_WORLD][_util_disposable_js__WEBPACK_IMPORTED_MODULE_4__.disposeSymbol]();
                    this.worlds[_IsolatedWorlds_js__WEBPACK_IMPORTED_MODULE_9__.PUPPETEER_WORLD][_util_disposable_js__WEBPACK_IMPORTED_MODULE_4__.disposeSymbol]();
                }
            },
            {
                key: "exposeFunction",
                value: function exposeFunction() {
                    throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation();
                }
            }
        ]);
        return CdpFrame;
    }(_classSuper), function() {
        var _classSuper_Symbol_metadata;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_classSuper_Symbol_metadata = _classSuper[Symbol.metadata]) !== null && _classSuper_Symbol_metadata !== void 0 ? _classSuper_Symbol_metadata : null) : void 0;
        __esDecorate(_CdpFrame, null, _goto_decorators, {
            kind: "method",
            name: "goto",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "goto" in obj;
                },
                get: function(obj) {
                    return obj.goto;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_CdpFrame, null, _waitForNavigation_decorators, {
            kind: "method",
            name: "waitForNavigation",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "waitForNavigation" in obj;
                },
                get: function(obj) {
                    return obj.waitForNavigation;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_CdpFrame, null, _setContent_decorators, {
            kind: "method",
            name: "setContent",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "setContent" in obj;
                },
                get: function(obj) {
                    return obj.setContent;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_CdpFrame, null, _addPreloadScript_decorators, {
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
        __esDecorate(_CdpFrame, null, _addExposedFunctionBinding_decorators, {
            kind: "method",
            name: "addExposedFunctionBinding",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "addExposedFunctionBinding" in obj;
                },
                get: function(obj) {
                    return obj.addExposedFunctionBinding;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_CdpFrame, null, _removeExposedFunctionBinding_decorators, {
            kind: "method",
            name: "removeExposedFunctionBinding",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "removeExposedFunctionBinding" in obj;
                },
                get: function(obj) {
                    return obj.removeExposedFunctionBinding;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_CdpFrame, null, _waitForDevicePrompt_decorators, {
            kind: "method",
            name: "waitForDevicePrompt",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "waitForDevicePrompt" in obj;
                },
                get: function(obj) {
                    return obj.waitForDevicePrompt;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        if (_metadata) Object.defineProperty(_CdpFrame, Symbol.metadata, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _metadata
        });
    }(), _CdpFrame;
}();
 //# sourceMappingURL=Frame.js.map


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/cdp/IsolatedWorlds.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  MAIN_WORLD: function() { return MAIN_WORLD; },
  PUPPETEER_WORLD: function() { return PUPPETEER_WORLD; }
});
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * A unique key for {@link IsolatedWorldChart} to denote the default world.
 * Execution contexts are automatically created in the default world.
 *
 * @internal
 */ var MAIN_WORLD = Symbol('mainWorld');
/**
 * A unique key for {@link IsolatedWorldChart} to denote the puppeteer world.
 * This world contains all puppeteer-internal bindings/code.
 *
 * @internal
 */ var PUPPETEER_WORLD = Symbol('puppeteerWorld'); //# sourceMappingURL=IsolatedWorlds.js.map


}),

}]);