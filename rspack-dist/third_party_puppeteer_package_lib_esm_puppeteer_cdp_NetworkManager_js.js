"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_cdp_NetworkManager_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/cdp/NetworkManager.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  NetworkManager: function() { return NetworkManager; }
});
/* harmony import */var _api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/CDPSession.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/CDPSession.js");
/* harmony import */var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/EventEmitter.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/EventEmitter.js");
/* harmony import */var _common_NetworkManagerEvents_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/NetworkManagerEvents.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/NetworkManagerEvents.js");
/* harmony import */var _common_util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */var _util_assert_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/assert.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js");
/* harmony import */var _util_disposable_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/disposable.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/disposable.js");
/* harmony import */var _HTTPRequest_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HTTPRequest.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/HTTPRequest.js");
/* harmony import */var _HTTPResponse_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HTTPResponse.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/HTTPResponse.js");
/* harmony import */var _NetworkEventManager_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NetworkEventManager.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/NetworkEventManager.js");
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









var _frameManager = /*#__PURE__*/ new WeakMap(), _networkEventManager = /*#__PURE__*/ new WeakMap(), _extraHTTPHeaders = /*#__PURE__*/ new WeakMap(), _credentials = /*#__PURE__*/ new WeakMap(), _attemptedAuthentications = /*#__PURE__*/ new WeakMap(), _userRequestInterceptionEnabled = /*#__PURE__*/ new WeakMap(), _protocolRequestInterceptionEnabled = /*#__PURE__*/ new WeakMap(), _userCacheDisabled = /*#__PURE__*/ new WeakMap(), _emulatedNetworkConditions = /*#__PURE__*/ new WeakMap(), _userAgent = /*#__PURE__*/ new WeakMap(), _userAgentMetadata = /*#__PURE__*/ new WeakMap(), _handlers = /*#__PURE__*/ new WeakMap(), _clients = /*#__PURE__*/ new WeakMap(), _removeClient = /*#__PURE__*/ new WeakSet(), _applyExtraHTTPHeaders = /*#__PURE__*/ new WeakSet(), _applyToAllClients = /*#__PURE__*/ new WeakSet(), _applyNetworkConditions = /*#__PURE__*/ new WeakSet(), _applyUserAgent = /*#__PURE__*/ new WeakSet(), _applyProtocolRequestInterception = /*#__PURE__*/ new WeakSet(), _applyProtocolCacheDisabled = /*#__PURE__*/ new WeakSet(), _onRequestWillBeSent = /*#__PURE__*/ new WeakSet(), _onAuthRequired = /*#__PURE__*/ new WeakSet(), /**
     * CDP may send a Fetch.requestPaused without or before a
     * Network.requestWillBeSent
     *
     * CDP may send multiple Fetch.requestPaused
     * for the same Network.requestWillBeSent.
     */ _onRequestPaused = /*#__PURE__*/ new WeakSet(), _patchRequestEventHeaders = /*#__PURE__*/ new WeakSet(), _onRequestWithoutNetworkInstrumentation = /*#__PURE__*/ new WeakSet(), _onRequest = /*#__PURE__*/ new WeakSet(), _onRequestServedFromCache = /*#__PURE__*/ new WeakSet(), _handleRequestRedirect = /*#__PURE__*/ new WeakSet(), _emitResponseEvent = /*#__PURE__*/ new WeakSet(), _onResponseReceived = /*#__PURE__*/ new WeakSet(), _onResponseReceivedExtraInfo = /*#__PURE__*/ new WeakSet(), _forgetRequest = /*#__PURE__*/ new WeakSet(), _onLoadingFinished = /*#__PURE__*/ new WeakSet(), _emitLoadingFinished = /*#__PURE__*/ new WeakSet(), _onLoadingFailed = /*#__PURE__*/ new WeakSet(), _emitLoadingFailed = /*#__PURE__*/ new WeakSet();
/**
 * @internal
 */ var NetworkManager = /*#__PURE__*/ function(EventEmitter1) {
    "use strict";
    _inherits(NetworkManager, EventEmitter1);
    var _super = _create_super(NetworkManager);
    function NetworkManager(frameManager) {
        _class_call_check(this, NetworkManager);
        var _this;
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _removeClient);
        _class_private_method_init(_assert_this_initialized(_this), _applyExtraHTTPHeaders);
        _class_private_method_init(_assert_this_initialized(_this), _applyToAllClients);
        _class_private_method_init(_assert_this_initialized(_this), _applyNetworkConditions);
        _class_private_method_init(_assert_this_initialized(_this), _applyUserAgent);
        _class_private_method_init(_assert_this_initialized(_this), _applyProtocolRequestInterception);
        _class_private_method_init(_assert_this_initialized(_this), _applyProtocolCacheDisabled);
        _class_private_method_init(_assert_this_initialized(_this), _onRequestWillBeSent);
        _class_private_method_init(_assert_this_initialized(_this), _onAuthRequired);
        _class_private_method_init(_assert_this_initialized(_this), _onRequestPaused);
        _class_private_method_init(_assert_this_initialized(_this), _patchRequestEventHeaders);
        _class_private_method_init(_assert_this_initialized(_this), _onRequestWithoutNetworkInstrumentation);
        _class_private_method_init(_assert_this_initialized(_this), _onRequest);
        _class_private_method_init(_assert_this_initialized(_this), _onRequestServedFromCache);
        _class_private_method_init(_assert_this_initialized(_this), _handleRequestRedirect);
        _class_private_method_init(_assert_this_initialized(_this), _emitResponseEvent);
        _class_private_method_init(_assert_this_initialized(_this), _onResponseReceived);
        _class_private_method_init(_assert_this_initialized(_this), _onResponseReceivedExtraInfo);
        _class_private_method_init(_assert_this_initialized(_this), _forgetRequest);
        _class_private_method_init(_assert_this_initialized(_this), _onLoadingFinished);
        _class_private_method_init(_assert_this_initialized(_this), _emitLoadingFinished);
        _class_private_method_init(_assert_this_initialized(_this), _onLoadingFailed);
        _class_private_method_init(_assert_this_initialized(_this), _emitLoadingFailed);
        _class_private_field_init(_assert_this_initialized(_this), _frameManager, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _networkEventManager, {
            writable: true,
            value: new _NetworkEventManager_js__WEBPACK_IMPORTED_MODULE_8__.NetworkEventManager()
        });
        _class_private_field_init(_assert_this_initialized(_this), _extraHTTPHeaders, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _credentials, {
            writable: true,
            value: null
        });
        _class_private_field_init(_assert_this_initialized(_this), _attemptedAuthentications, {
            writable: true,
            value: new Set()
        });
        _class_private_field_init(_assert_this_initialized(_this), _userRequestInterceptionEnabled, {
            writable: true,
            value: false
        });
        _class_private_field_init(_assert_this_initialized(_this), _protocolRequestInterceptionEnabled, {
            writable: true,
            value: false
        });
        _class_private_field_init(_assert_this_initialized(_this), _userCacheDisabled, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _emulatedNetworkConditions, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _userAgent, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _userAgentMetadata, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _handlers, {
            writable: true,
            value: [
                [
                    'Fetch.requestPaused',
                    _class_private_method_get(_assert_this_initialized(_this), _onRequestPaused, onRequestPaused)
                ],
                [
                    'Fetch.authRequired',
                    _class_private_method_get(_assert_this_initialized(_this), _onAuthRequired, onAuthRequired)
                ],
                [
                    'Network.requestWillBeSent',
                    _class_private_method_get(_assert_this_initialized(_this), _onRequestWillBeSent, onRequestWillBeSent)
                ],
                [
                    'Network.requestServedFromCache',
                    _class_private_method_get(_assert_this_initialized(_this), _onRequestServedFromCache, onRequestServedFromCache)
                ],
                [
                    'Network.responseReceived',
                    _class_private_method_get(_assert_this_initialized(_this), _onResponseReceived, onResponseReceived)
                ],
                [
                    'Network.loadingFinished',
                    _class_private_method_get(_assert_this_initialized(_this), _onLoadingFinished, onLoadingFinished)
                ],
                [
                    'Network.loadingFailed',
                    _class_private_method_get(_assert_this_initialized(_this), _onLoadingFailed, onLoadingFailed)
                ],
                [
                    'Network.responseReceivedExtraInfo',
                    _class_private_method_get(_assert_this_initialized(_this), _onResponseReceivedExtraInfo, onResponseReceivedExtraInfo)
                ],
                [
                    _api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSessionEvent.Disconnected,
                    _class_private_method_get(_assert_this_initialized(_this), _removeClient, removeClient)
                ]
            ]
        });
        _class_private_field_init(_assert_this_initialized(_this), _clients, {
            writable: true,
            value: new Map()
        });
        _class_private_field_set(_assert_this_initialized(_this), _frameManager, frameManager);
        return _this;
    }
    _create_class(NetworkManager, [
        {
            key: "addClient",
            value: function addClient(client) {
                var _this = this;
                return _async_to_generator(function() {
                    var subscriptions, clientEmitter, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _loop, _iterator, _step;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (_class_private_field_get(_this, _clients).has(client)) {
                                    return [
                                        2
                                    ];
                                }
                                subscriptions = new _util_disposable_js__WEBPACK_IMPORTED_MODULE_5__.DisposableStack();
                                _class_private_field_get(_this, _clients).set(client, subscriptions);
                                clientEmitter = subscriptions.use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__.EventEmitter(client));
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    _loop = function() {
                                        var _step_value = _sliced_to_array(_step.value, 2), event = _step_value[0], handler = _step_value[1];
                                        clientEmitter.on(event, function(arg) {
                                            return handler.bind(_this)(client, arg);
                                        });
                                    };
                                    for(_iterator = _class_private_field_get(_this, _handlers)[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
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
                                    4,
                                    Promise.all([
                                        client.send('Network.enable'),
                                        _class_private_method_get(_this, _applyExtraHTTPHeaders, applyExtraHTTPHeaders).call(_this, client),
                                        _class_private_method_get(_this, _applyNetworkConditions, applyNetworkConditions).call(_this, client),
                                        _class_private_method_get(_this, _applyProtocolCacheDisabled, applyProtocolCacheDisabled).call(_this, client),
                                        _class_private_method_get(_this, _applyProtocolRequestInterception, applyProtocolRequestInterception).call(_this, client),
                                        _class_private_method_get(_this, _applyUserAgent, applyUserAgent).call(_this, client)
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
                    var enabled;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _class_private_field_set(_this, _credentials, credentials);
                                enabled = _class_private_field_get(_this, _userRequestInterceptionEnabled) || !!_class_private_field_get(_this, _credentials);
                                if (enabled === _class_private_field_get(_this, _protocolRequestInterceptionEnabled)) {
                                    return [
                                        2
                                    ];
                                }
                                _class_private_field_set(_this, _protocolRequestInterceptionEnabled, enabled);
                                return [
                                    4,
                                    _class_private_method_get(_this, _applyToAllClients, applyToAllClients).call(_this, _class_private_method_get(_this, _applyProtocolRequestInterception, applyProtocolRequestInterception).bind(_this))
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
            key: "setExtraHTTPHeaders",
            value: function setExtraHTTPHeaders(headers) {
                var _this = this;
                return _async_to_generator(function() {
                    var extraHTTPHeaders, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _step_value, key, value;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                extraHTTPHeaders = {};
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = Object.entries(headers)[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        _step_value = _sliced_to_array(_step.value, 2), key = _step_value[0], value = _step_value[1];
                                        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_4__.assert)((0,_common_util_js__WEBPACK_IMPORTED_MODULE_3__.isString)(value), 'Expected value of header "'.concat(key, '" to be String, but "').concat(typeof value === "undefined" ? "undefined" : _type_of(value), '" is found.'));
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
                                _class_private_field_set(_this, _extraHTTPHeaders, extraHTTPHeaders);
                                return [
                                    4,
                                    _class_private_method_get(_this, _applyToAllClients, applyToAllClients).call(_this, _class_private_method_get(_this, _applyExtraHTTPHeaders, applyExtraHTTPHeaders).bind(_this))
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
            key: "extraHTTPHeaders",
            value: function extraHTTPHeaders() {
                return Object.assign({}, _class_private_field_get(this, _extraHTTPHeaders));
            }
        },
        {
            key: "inFlightRequestsCount",
            value: function inFlightRequestsCount() {
                return _class_private_field_get(this, _networkEventManager).inFlightRequestsCount();
            }
        },
        {
            key: "setOfflineMode",
            value: function setOfflineMode(value) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!_class_private_field_get(_this, _emulatedNetworkConditions)) {
                                    _class_private_field_set(_this, _emulatedNetworkConditions, {
                                        offline: false,
                                        upload: -1,
                                        download: -1,
                                        latency: 0
                                    });
                                }
                                _class_private_field_get(_this, _emulatedNetworkConditions).offline = value;
                                return [
                                    4,
                                    _class_private_method_get(_this, _applyToAllClients, applyToAllClients).call(_this, _class_private_method_get(_this, _applyNetworkConditions, applyNetworkConditions).bind(_this))
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
            key: "emulateNetworkConditions",
            value: function emulateNetworkConditions(networkConditions) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
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
                                    _class_private_method_get(_this, _applyToAllClients, applyToAllClients).call(_this, _class_private_method_get(_this, _applyNetworkConditions, applyNetworkConditions).bind(_this))
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
            key: "setUserAgent",
            value: function setUserAgent(userAgent, userAgentMetadata) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _class_private_field_set(_this, _userAgent, userAgent);
                                _class_private_field_set(_this, _userAgentMetadata, userAgentMetadata);
                                return [
                                    4,
                                    _class_private_method_get(_this, _applyToAllClients, applyToAllClients).call(_this, _class_private_method_get(_this, _applyUserAgent, applyUserAgent).bind(_this))
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
            key: "setCacheEnabled",
            value: function setCacheEnabled(enabled) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _class_private_field_set(_this, _userCacheDisabled, !enabled);
                                return [
                                    4,
                                    _class_private_method_get(_this, _applyToAllClients, applyToAllClients).call(_this, _class_private_method_get(_this, _applyProtocolCacheDisabled, applyProtocolCacheDisabled).bind(_this))
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
            key: "setRequestInterception",
            value: function setRequestInterception(value) {
                var _this = this;
                return _async_to_generator(function() {
                    var enabled;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _class_private_field_set(_this, _userRequestInterceptionEnabled, value);
                                enabled = _class_private_field_get(_this, _userRequestInterceptionEnabled) || !!_class_private_field_get(_this, _credentials);
                                if (enabled === _class_private_field_get(_this, _protocolRequestInterceptionEnabled)) {
                                    return [
                                        2
                                    ];
                                }
                                _class_private_field_set(_this, _protocolRequestInterceptionEnabled, enabled);
                                return [
                                    4,
                                    _class_private_method_get(_this, _applyToAllClients, applyToAllClients).call(_this, _class_private_method_get(_this, _applyProtocolRequestInterception, applyProtocolRequestInterception).bind(_this))
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
    ]);
    return NetworkManager;
} //# sourceMappingURL=NetworkManager.js.map
(_common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__.EventEmitter);
function removeClient(client) {
    return _removeClient1.apply(this, arguments);
}
function _removeClient1() {
    _removeClient1 = _async_to_generator(function(client) {
        var _class_private_field_get_get;
        return _ts_generator(this, function(_state) {
            (_class_private_field_get_get = _class_private_field_get(this, _clients).get(client)) === null || _class_private_field_get_get === void 0 ? void 0 : _class_private_field_get_get.dispose();
            _class_private_field_get(this, _clients).delete(client);
            return [
                2
            ];
        });
    });
    return _removeClient1.apply(this, arguments);
}
function applyExtraHTTPHeaders(client) {
    return _applyExtraHTTPHeaders1.apply(this, arguments);
}
function _applyExtraHTTPHeaders1() {
    _applyExtraHTTPHeaders1 = _async_to_generator(function(client) {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (_class_private_field_get(this, _extraHTTPHeaders) === undefined) {
                        return [
                            2
                        ];
                    }
                    return [
                        4,
                        client.send('Network.setExtraHTTPHeaders', {
                            headers: _class_private_field_get(this, _extraHTTPHeaders)
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
    return _applyExtraHTTPHeaders1.apply(this, arguments);
}
function applyToAllClients(fn) {
    return _applyToAllClients1.apply(this, arguments);
}
function _applyToAllClients1() {
    _applyToAllClients1 = _async_to_generator(function(fn) {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        Promise.all(Array.from(_class_private_field_get(this, _clients).keys()).map(function(client) {
                            return fn(client);
                        }))
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return _applyToAllClients1.apply(this, arguments);
}
function applyNetworkConditions(client) {
    return _applyNetworkConditions1.apply(this, arguments);
}
function _applyNetworkConditions1() {
    _applyNetworkConditions1 = _async_to_generator(function(client) {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (_class_private_field_get(this, _emulatedNetworkConditions) === undefined) {
                        return [
                            2
                        ];
                    }
                    return [
                        4,
                        client.send('Network.emulateNetworkConditions', {
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
function applyUserAgent(client) {
    return _applyUserAgent1.apply(this, arguments);
}
function _applyUserAgent1() {
    _applyUserAgent1 = _async_to_generator(function(client) {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (_class_private_field_get(this, _userAgent) === undefined) {
                        return [
                            2
                        ];
                    }
                    return [
                        4,
                        client.send('Network.setUserAgentOverride', {
                            userAgent: _class_private_field_get(this, _userAgent),
                            userAgentMetadata: _class_private_field_get(this, _userAgentMetadata)
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
    return _applyUserAgent1.apply(this, arguments);
}
function applyProtocolRequestInterception(client) {
    return _applyProtocolRequestInterception1.apply(this, arguments);
}
function _applyProtocolRequestInterception1() {
    _applyProtocolRequestInterception1 = _async_to_generator(function(client) {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (_class_private_field_get(this, _userCacheDisabled) === undefined) {
                        _class_private_field_set(this, _userCacheDisabled, false);
                    }
                    if (!_class_private_field_get(this, _protocolRequestInterceptionEnabled)) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        Promise.all([
                            _class_private_method_get(this, _applyProtocolCacheDisabled, applyProtocolCacheDisabled).call(this, client),
                            client.send('Fetch.enable', {
                                handleAuthRequests: true,
                                patterns: [
                                    {
                                        urlPattern: '*'
                                    }
                                ]
                            })
                        ])
                    ];
                case 1:
                    _state.sent();
                    return [
                        3,
                        4
                    ];
                case 2:
                    return [
                        4,
                        Promise.all([
                            _class_private_method_get(this, _applyProtocolCacheDisabled, applyProtocolCacheDisabled).call(this, client),
                            client.send('Fetch.disable')
                        ])
                    ];
                case 3:
                    _state.sent();
                    _state.label = 4;
                case 4:
                    return [
                        2
                    ];
            }
        });
    });
    return _applyProtocolRequestInterception1.apply(this, arguments);
}
function applyProtocolCacheDisabled(client) {
    return _applyProtocolCacheDisabled1.apply(this, arguments);
}
function _applyProtocolCacheDisabled1() {
    _applyProtocolCacheDisabled1 = _async_to_generator(function(client) {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (_class_private_field_get(this, _userCacheDisabled) === undefined) {
                        return [
                            2
                        ];
                    }
                    return [
                        4,
                        client.send('Network.setCacheDisabled', {
                            cacheDisabled: _class_private_field_get(this, _userCacheDisabled)
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
    return _applyProtocolCacheDisabled1.apply(this, arguments);
}
function onRequestWillBeSent(client, event) {
    // Request interception doesn't happen for data URLs with Network Service.
    if (_class_private_field_get(this, _userRequestInterceptionEnabled) && !event.request.url.startsWith('data:')) {
        var networkRequestId = event.requestId;
        _class_private_field_get(this, _networkEventManager).storeRequestWillBeSent(networkRequestId, event);
        /**
             * CDP may have sent a Fetch.requestPaused event already. Check for it.
             */ var requestPausedEvent = _class_private_field_get(this, _networkEventManager).getRequestPaused(networkRequestId);
        if (requestPausedEvent) {
            var fetchRequestId = requestPausedEvent.requestId;
            _class_private_method_get(this, _patchRequestEventHeaders, patchRequestEventHeaders).call(this, event, requestPausedEvent);
            _class_private_method_get(this, _onRequest, onRequest).call(this, client, event, fetchRequestId);
            _class_private_field_get(this, _networkEventManager).forgetRequestPaused(networkRequestId);
        }
        return;
    }
    _class_private_method_get(this, _onRequest, onRequest).call(this, client, event, undefined);
}
function onAuthRequired(client, event) {
    var response = 'Default';
    if (_class_private_field_get(this, _attemptedAuthentications).has(event.requestId)) {
        response = 'CancelAuth';
    } else if (_class_private_field_get(this, _credentials)) {
        response = 'ProvideCredentials';
        _class_private_field_get(this, _attemptedAuthentications).add(event.requestId);
    }
    var _ref = _class_private_field_get(this, _credentials) || {
        username: undefined,
        password: undefined
    }, username = _ref.username, password = _ref.password;
    client.send('Fetch.continueWithAuth', {
        requestId: event.requestId,
        authChallengeResponse: {
            response: response,
            username: username,
            password: password
        }
    }).catch(_common_util_js__WEBPACK_IMPORTED_MODULE_3__.debugError);
}
function onRequestPaused(client, event) {
    var _this = this;
    if (!_class_private_field_get(this, _userRequestInterceptionEnabled) && _class_private_field_get(this, _protocolRequestInterceptionEnabled)) {
        client.send('Fetch.continueRequest', {
            requestId: event.requestId
        }).catch(_common_util_js__WEBPACK_IMPORTED_MODULE_3__.debugError);
    }
    var networkRequestId = event.networkId, fetchRequestId = event.requestId;
    if (!networkRequestId) {
        _class_private_method_get(this, _onRequestWithoutNetworkInstrumentation, onRequestWithoutNetworkInstrumentation).call(this, client, event);
        return;
    }
    var requestWillBeSentEvent = function() {
        var requestWillBeSentEvent = _class_private_field_get(_this, _networkEventManager).getRequestWillBeSent(networkRequestId);
        // redirect requests have the same `requestId`,
        if (requestWillBeSentEvent && (requestWillBeSentEvent.request.url !== event.request.url || requestWillBeSentEvent.request.method !== event.request.method)) {
            _class_private_field_get(_this, _networkEventManager).forgetRequestWillBeSent(networkRequestId);
            return;
        }
        return requestWillBeSentEvent;
    }();
    if (requestWillBeSentEvent) {
        _class_private_method_get(this, _patchRequestEventHeaders, patchRequestEventHeaders).call(this, requestWillBeSentEvent, event);
        _class_private_method_get(this, _onRequest, onRequest).call(this, client, requestWillBeSentEvent, fetchRequestId);
    } else {
        _class_private_field_get(this, _networkEventManager).storeRequestPaused(networkRequestId, event);
    }
}
function patchRequestEventHeaders(requestWillBeSentEvent, requestPausedEvent) {
    requestWillBeSentEvent.request.headers = _object_spread({}, requestWillBeSentEvent.request.headers, requestPausedEvent.request.headers);
}
function onRequestWithoutNetworkInstrumentation(client, event) {
    // If an event has no networkId it should not have any network events. We
    // still want to dispatch it for the interception by the user.
    var frame = event.frameId ? _class_private_field_get(this, _frameManager).frame(event.frameId) : null;
    var request = new _HTTPRequest_js__WEBPACK_IMPORTED_MODULE_6__.CdpHTTPRequest(client, frame, event.requestId, _class_private_field_get(this, _userRequestInterceptionEnabled), event, []);
    this.emit(_common_NetworkManagerEvents_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManagerEvent.Request, request);
    void request.finalizeInterceptions();
}
function onRequest(client, event, fetchRequestId) {
    var redirectChain = [];
    if (event.redirectResponse) {
        // We want to emit a response and requestfinished for the
        // redirectResponse, but we can't do so unless we have a
        // responseExtraInfo ready to pair it up with. If we don't have any
        // responseExtraInfos saved in our queue, they we have to wait until
        // the next one to emit response and requestfinished, *and* we should
        // also wait to emit this Request too because it should come after the
        // response/requestfinished.
        var redirectResponseExtraInfo = null;
        if (event.redirectHasExtraInfo) {
            redirectResponseExtraInfo = _class_private_field_get(this, _networkEventManager).responseExtraInfo(event.requestId).shift();
            if (!redirectResponseExtraInfo) {
                _class_private_field_get(this, _networkEventManager).queueRedirectInfo(event.requestId, {
                    event: event,
                    fetchRequestId: fetchRequestId
                });
                return;
            }
        }
        var request = _class_private_field_get(this, _networkEventManager).getRequest(event.requestId);
        // If we connect late to the target, we could have missed the
        // requestWillBeSent event.
        if (request) {
            _class_private_method_get(this, _handleRequestRedirect, handleRequestRedirect).call(this, client, request, event.redirectResponse, redirectResponseExtraInfo);
            redirectChain = request._redirectChain;
        }
    }
    var frame = event.frameId ? _class_private_field_get(this, _frameManager).frame(event.frameId) : null;
    var request1 = new _HTTPRequest_js__WEBPACK_IMPORTED_MODULE_6__.CdpHTTPRequest(client, frame, fetchRequestId, _class_private_field_get(this, _userRequestInterceptionEnabled), event, redirectChain);
    _class_private_field_get(this, _networkEventManager).storeRequest(event.requestId, request1);
    this.emit(_common_NetworkManagerEvents_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManagerEvent.Request, request1);
    void request1.finalizeInterceptions();
}
function onRequestServedFromCache(_client, event) {
    var request = _class_private_field_get(this, _networkEventManager).getRequest(event.requestId);
    if (request) {
        request._fromMemoryCache = true;
    }
    this.emit(_common_NetworkManagerEvents_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManagerEvent.RequestServedFromCache, request);
}
function handleRequestRedirect(client, request, responsePayload, extraInfo) {
    var response = new _HTTPResponse_js__WEBPACK_IMPORTED_MODULE_7__.CdpHTTPResponse(client, request, responsePayload, extraInfo);
    request._response = response;
    request._redirectChain.push(request);
    response._resolveBody(new Error('Response body is unavailable for redirect responses'));
    _class_private_method_get(this, _forgetRequest, forgetRequest).call(this, request, false);
    this.emit(_common_NetworkManagerEvents_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManagerEvent.Response, response);
    this.emit(_common_NetworkManagerEvents_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManagerEvent.RequestFinished, request);
}
function emitResponseEvent(client, responseReceived, extraInfo) {
    var request = _class_private_field_get(this, _networkEventManager).getRequest(responseReceived.requestId);
    // FileUpload sends a response without a matching request.
    if (!request) {
        return;
    }
    var extraInfos = _class_private_field_get(this, _networkEventManager).responseExtraInfo(responseReceived.requestId);
    if (extraInfos.length) {
        (0,_common_util_js__WEBPACK_IMPORTED_MODULE_3__.debugError)(new Error('Unexpected extraInfo events for request ' + responseReceived.requestId));
    }
    // Chromium sends wrong extraInfo events for responses served from cache.
    // See https://github.com/puppeteer/puppeteer/issues/9965 and
    // https://crbug.com/1340398.
    if (responseReceived.response.fromDiskCache) {
        extraInfo = null;
    }
    var response = new _HTTPResponse_js__WEBPACK_IMPORTED_MODULE_7__.CdpHTTPResponse(client, request, responseReceived.response, extraInfo);
    request._response = response;
    this.emit(_common_NetworkManagerEvents_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManagerEvent.Response, response);
}
function onResponseReceived(client, event) {
    var request = _class_private_field_get(this, _networkEventManager).getRequest(event.requestId);
    var extraInfo = null;
    if (request && !request._fromMemoryCache && event.hasExtraInfo) {
        extraInfo = _class_private_field_get(this, _networkEventManager).responseExtraInfo(event.requestId).shift();
        if (!extraInfo) {
            // Wait until we get the corresponding ExtraInfo event.
            _class_private_field_get(this, _networkEventManager).queueEventGroup(event.requestId, {
                responseReceivedEvent: event
            });
            return;
        }
    }
    _class_private_method_get(this, _emitResponseEvent, emitResponseEvent).call(this, client, event, extraInfo);
}
function onResponseReceivedExtraInfo(client, event) {
    // We may have skipped a redirect response/request pair due to waiting for
    // this ExtraInfo event. If so, continue that work now that we have the
    // request.
    var redirectInfo = _class_private_field_get(this, _networkEventManager).takeQueuedRedirectInfo(event.requestId);
    if (redirectInfo) {
        _class_private_field_get(this, _networkEventManager).responseExtraInfo(event.requestId).push(event);
        _class_private_method_get(this, _onRequest, onRequest).call(this, client, redirectInfo.event, redirectInfo.fetchRequestId);
        return;
    }
    // We may have skipped response and loading events because we didn't have
    // this ExtraInfo event yet. If so, emit those events now.
    var queuedEvents = _class_private_field_get(this, _networkEventManager).getQueuedEventGroup(event.requestId);
    if (queuedEvents) {
        _class_private_field_get(this, _networkEventManager).forgetQueuedEventGroup(event.requestId);
        _class_private_method_get(this, _emitResponseEvent, emitResponseEvent).call(this, client, queuedEvents.responseReceivedEvent, event);
        if (queuedEvents.loadingFinishedEvent) {
            _class_private_method_get(this, _emitLoadingFinished, emitLoadingFinished).call(this, queuedEvents.loadingFinishedEvent);
        }
        if (queuedEvents.loadingFailedEvent) {
            _class_private_method_get(this, _emitLoadingFailed, emitLoadingFailed).call(this, queuedEvents.loadingFailedEvent);
        }
        return;
    }
    // Wait until we get another event that can use this ExtraInfo event.
    _class_private_field_get(this, _networkEventManager).responseExtraInfo(event.requestId).push(event);
}
function forgetRequest(request, events) {
    var requestId = request.id;
    var interceptionId = request._interceptionId;
    _class_private_field_get(this, _networkEventManager).forgetRequest(requestId);
    interceptionId !== undefined && _class_private_field_get(this, _attemptedAuthentications).delete(interceptionId);
    if (events) {
        _class_private_field_get(this, _networkEventManager).forget(requestId);
    }
}
function onLoadingFinished(_client, event) {
    // If the response event for this request is still waiting on a
    // corresponding ExtraInfo event, then wait to emit this event too.
    var queuedEvents = _class_private_field_get(this, _networkEventManager).getQueuedEventGroup(event.requestId);
    if (queuedEvents) {
        queuedEvents.loadingFinishedEvent = event;
    } else {
        _class_private_method_get(this, _emitLoadingFinished, emitLoadingFinished).call(this, event);
    }
}
function emitLoadingFinished(event) {
    var request = _class_private_field_get(this, _networkEventManager).getRequest(event.requestId);
    // For certain requestIds we never receive requestWillBeSent event.
    // @see https://crbug.com/750469
    if (!request) {
        return;
    }
    // Under certain conditions we never get the Network.responseReceived
    // event from protocol. @see https://crbug.com/883475
    if (request.response()) {
        var _request_response;
        (_request_response = request.response()) === null || _request_response === void 0 ? void 0 : _request_response._resolveBody();
    }
    _class_private_method_get(this, _forgetRequest, forgetRequest).call(this, request, true);
    this.emit(_common_NetworkManagerEvents_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManagerEvent.RequestFinished, request);
}
function onLoadingFailed(_client, event) {
    // If the response event for this request is still waiting on a
    // corresponding ExtraInfo event, then wait to emit this event too.
    var queuedEvents = _class_private_field_get(this, _networkEventManager).getQueuedEventGroup(event.requestId);
    if (queuedEvents) {
        queuedEvents.loadingFailedEvent = event;
    } else {
        _class_private_method_get(this, _emitLoadingFailed, emitLoadingFailed).call(this, event);
    }
}
function emitLoadingFailed(event) {
    var request = _class_private_field_get(this, _networkEventManager).getRequest(event.requestId);
    // For certain requestIds we never receive requestWillBeSent event.
    // @see https://crbug.com/750469
    if (!request) {
        return;
    }
    request._failureText = event.errorText;
    var response = request.response();
    if (response) {
        response._resolveBody();
    }
    _class_private_method_get(this, _forgetRequest, forgetRequest).call(this, request, true);
    this.emit(_common_NetworkManagerEvents_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManagerEvent.RequestFailed, request);
}


}),

}]);