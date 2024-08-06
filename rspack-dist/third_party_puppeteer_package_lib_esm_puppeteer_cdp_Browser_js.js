"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_cdp_Browser_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Browser.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CdpBrowser: function() { return CdpBrowser; }
});
/* harmony import */var _api_Browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/Browser.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/Browser.js");
/* harmony import */var _api_CDPSession_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/CDPSession.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/CDPSession.js");
/* harmony import */var _BrowserContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BrowserContext.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/BrowserContext.js");
/* harmony import */var _ChromeTargetManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ChromeTargetManager.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/ChromeTargetManager.js");
/* harmony import */var _FirefoxTargetManager_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FirefoxTargetManager.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/FirefoxTargetManager.js");
/* harmony import */var _Target_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Target.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Target.js");
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






var _defaultViewport = /*#__PURE__*/ new WeakMap(), _process = /*#__PURE__*/ new WeakMap(), _connection = /*#__PURE__*/ new WeakMap(), _closeCallback = /*#__PURE__*/ new WeakMap(), _targetFilterCallback = /*#__PURE__*/ new WeakMap(), _isPageTargetCallback = /*#__PURE__*/ new WeakMap(), _defaultContext = /*#__PURE__*/ new WeakMap(), _contexts = /*#__PURE__*/ new WeakMap(), _targetManager = /*#__PURE__*/ new WeakMap(), _emitDisconnected = /*#__PURE__*/ new WeakMap(), _setIsPageTargetCallback = /*#__PURE__*/ new WeakSet(), _createTarget = /*#__PURE__*/ new WeakMap(), _onAttachedToTarget = /*#__PURE__*/ new WeakMap(), _onDetachedFromTarget = /*#__PURE__*/ new WeakMap(), _onTargetChanged = /*#__PURE__*/ new WeakMap(), _onTargetDiscovered = /*#__PURE__*/ new WeakMap(), _getVersion = /*#__PURE__*/ new WeakSet();
/**
 * @internal
 */ var CdpBrowser = /*#__PURE__*/ function(BrowserBase) {
    "use strict";
    _inherits(CdpBrowser, BrowserBase);
    var _super = _create_super(CdpBrowser);
    function CdpBrowser(product, connection, contextIds, defaultViewport, process, closeCallback, targetFilterCallback, isPageTargetCallback) {
        var waitForInitiallyDiscoveredTargets = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : true;
        _class_call_check(this, CdpBrowser);
        var _this;
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _setIsPageTargetCallback);
        _class_private_method_init(_assert_this_initialized(_this), _getVersion);
        _define_property(_assert_this_initialized(_this), "protocol", 'cdp');
        _class_private_field_init(_assert_this_initialized(_this), _defaultViewport, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _process, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _connection, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _closeCallback, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _targetFilterCallback, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _isPageTargetCallback, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _defaultContext, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _contexts, {
            writable: true,
            value: new Map()
        });
        _class_private_field_init(_assert_this_initialized(_this), _targetManager, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _emitDisconnected, {
            writable: true,
            value: function() {
                _this.emit("disconnected" /* BrowserEvent.Disconnected */ , undefined);
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _createTarget, {
            writable: true,
            value: function(targetInfo, session) {
                var _targetInfo_url;
                var browserContextId = targetInfo.browserContextId;
                var context = browserContextId && _class_private_field_get(_this, _contexts).has(browserContextId) ? _class_private_field_get(_this, _contexts).get(browserContextId) : _class_private_field_get(_assert_this_initialized(_this), _defaultContext);
                if (!context) {
                    throw new Error('Missing browser context');
                }
                var createSession = function(isAutoAttachEmulated) {
                    return _class_private_field_get(_this, _connection)._createSession(targetInfo, isAutoAttachEmulated);
                };
                var otherTarget = new _Target_js__WEBPACK_IMPORTED_MODULE_5__.OtherTarget(targetInfo, session, context, _class_private_field_get(_assert_this_initialized(_this), _targetManager), createSession);
                if ((_targetInfo_url = targetInfo.url) === null || _targetInfo_url === void 0 ? void 0 : _targetInfo_url.startsWith('devtools://')) {
                    var _$_class_private_field_get;
                    return new _Target_js__WEBPACK_IMPORTED_MODULE_5__.DevToolsTarget(targetInfo, session, context, _class_private_field_get(_assert_this_initialized(_this), _targetManager), createSession, (_$_class_private_field_get = _class_private_field_get(_assert_this_initialized(_this), _defaultViewport)) !== null && _$_class_private_field_get !== void 0 ? _$_class_private_field_get : null);
                }
                if (_class_private_field_get(_this, _isPageTargetCallback).call(_assert_this_initialized(_this), otherTarget)) {
                    var _$_class_private_field_get1;
                    return new _Target_js__WEBPACK_IMPORTED_MODULE_5__.PageTarget(targetInfo, session, context, _class_private_field_get(_assert_this_initialized(_this), _targetManager), createSession, (_$_class_private_field_get1 = _class_private_field_get(_assert_this_initialized(_this), _defaultViewport)) !== null && _$_class_private_field_get1 !== void 0 ? _$_class_private_field_get1 : null);
                }
                if (targetInfo.type === 'service_worker' || targetInfo.type === 'shared_worker') {
                    return new _Target_js__WEBPACK_IMPORTED_MODULE_5__.WorkerTarget(targetInfo, session, context, _class_private_field_get(_assert_this_initialized(_this), _targetManager), createSession);
                }
                return otherTarget;
            }
        });
        var _this1 = _assert_this_initialized(_this);
        _class_private_field_init(_assert_this_initialized(_this), _onAttachedToTarget, {
            writable: true,
            value: function() {
                var _ref = _async_to_generator(function(target) {
                    var _tmp;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _tmp = target._isTargetExposed();
                                if (!_tmp) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    target._initializedDeferred.valueOrThrow()
                                ];
                            case 1:
                                _tmp = _state.sent() === _Target_js__WEBPACK_IMPORTED_MODULE_5__.InitializationStatus.SUCCESS;
                                _state.label = 2;
                            case 2:
                                if (_tmp) {
                                    _this1.emit("targetcreated" /* BrowserEvent.TargetCreated */ , target);
                                    target.browserContext().emit("targetcreated" /* BrowserContextEvent.TargetCreated */ , target);
                                }
                                return [
                                    2
                                ];
                        }
                    });
                });
                return function(target) {
                    return _ref.apply(this, arguments);
                };
            }()
        });
        var _this2 = _assert_this_initialized(_this);
        _class_private_field_init(_assert_this_initialized(_this), _onDetachedFromTarget, {
            writable: true,
            value: function() {
                var _ref = _async_to_generator(function(target) {
                    var _tmp;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                target._initializedDeferred.resolve(_Target_js__WEBPACK_IMPORTED_MODULE_5__.InitializationStatus.ABORTED);
                                target._isClosedDeferred.resolve();
                                _tmp = target._isTargetExposed();
                                if (!_tmp) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    target._initializedDeferred.valueOrThrow()
                                ];
                            case 1:
                                _tmp = _state.sent() === _Target_js__WEBPACK_IMPORTED_MODULE_5__.InitializationStatus.SUCCESS;
                                _state.label = 2;
                            case 2:
                                if (_tmp) {
                                    _this2.emit("targetdestroyed" /* BrowserEvent.TargetDestroyed */ , target);
                                    target.browserContext().emit("targetdestroyed" /* BrowserContextEvent.TargetDestroyed */ , target);
                                }
                                return [
                                    2
                                ];
                        }
                    });
                });
                return function(target) {
                    return _ref.apply(this, arguments);
                };
            }()
        });
        _class_private_field_init(_assert_this_initialized(_this), _onTargetChanged, {
            writable: true,
            value: function(param) {
                var target = param.target;
                _this.emit("targetchanged" /* BrowserEvent.TargetChanged */ , target);
                target.browserContext().emit("targetchanged" /* BrowserContextEvent.TargetChanged */ , target);
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _onTargetDiscovered, {
            writable: true,
            value: function(targetInfo) {
                _this.emit("targetdiscovered" /* BrowserEvent.TargetDiscovered */ , targetInfo);
            }
        });
        product = product || 'chrome';
        _class_private_field_set(_assert_this_initialized(_this), _defaultViewport, defaultViewport);
        _class_private_field_set(_assert_this_initialized(_this), _process, process);
        _class_private_field_set(_assert_this_initialized(_this), _connection, connection);
        _class_private_field_set(_assert_this_initialized(_this), _closeCallback, closeCallback || function() {});
        _class_private_field_set(_assert_this_initialized(_this), _targetFilterCallback, targetFilterCallback || function() {
            return true;
        });
        _class_private_method_get(_this, _setIsPageTargetCallback, setIsPageTargetCallback).call(_assert_this_initialized(_this), isPageTargetCallback);
        if (product === 'firefox') {
            _class_private_field_set(_assert_this_initialized(_this), _targetManager, new _FirefoxTargetManager_js__WEBPACK_IMPORTED_MODULE_4__.FirefoxTargetManager(connection, _class_private_field_get(_assert_this_initialized(_this), _createTarget), _class_private_field_get(_assert_this_initialized(_this), _targetFilterCallback)));
        } else {
            _class_private_field_set(_assert_this_initialized(_this), _targetManager, new _ChromeTargetManager_js__WEBPACK_IMPORTED_MODULE_3__.ChromeTargetManager(connection, _class_private_field_get(_assert_this_initialized(_this), _createTarget), _class_private_field_get(_assert_this_initialized(_this), _targetFilterCallback), waitForInitiallyDiscoveredTargets));
        }
        _class_private_field_set(_assert_this_initialized(_this), _defaultContext, new _BrowserContext_js__WEBPACK_IMPORTED_MODULE_2__.CdpBrowserContext(_class_private_field_get(_assert_this_initialized(_this), _connection), _assert_this_initialized(_this)));
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = contextIds[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var contextId = _step.value;
                _class_private_field_get(_this, _contexts).set(contextId, new _BrowserContext_js__WEBPACK_IMPORTED_MODULE_2__.CdpBrowserContext(_class_private_field_get(_assert_this_initialized(_this), _connection), _assert_this_initialized(_this), contextId));
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
        return _this;
    }
    _create_class(CdpBrowser, [
        {
            key: "_attach",
            value: function _attach() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _class_private_field_get(_this, _connection).on(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_1__.CDPSessionEvent.Disconnected, _class_private_field_get(_this, _emitDisconnected));
                                _class_private_field_get(_this, _targetManager).on("targetAvailable" /* TargetManagerEvent.TargetAvailable */ , _class_private_field_get(_this, _onAttachedToTarget));
                                _class_private_field_get(_this, _targetManager).on("targetGone" /* TargetManagerEvent.TargetGone */ , _class_private_field_get(_this, _onDetachedFromTarget));
                                _class_private_field_get(_this, _targetManager).on("targetChanged" /* TargetManagerEvent.TargetChanged */ , _class_private_field_get(_this, _onTargetChanged));
                                _class_private_field_get(_this, _targetManager).on("targetDiscovered" /* TargetManagerEvent.TargetDiscovered */ , _class_private_field_get(_this, _onTargetDiscovered));
                                return [
                                    4,
                                    _class_private_field_get(_this, _targetManager).initialize()
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
            key: "_detach",
            value: function _detach() {
                _class_private_field_get(this, _connection).off(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_1__.CDPSessionEvent.Disconnected, _class_private_field_get(this, _emitDisconnected));
                _class_private_field_get(this, _targetManager).off("targetAvailable" /* TargetManagerEvent.TargetAvailable */ , _class_private_field_get(this, _onAttachedToTarget));
                _class_private_field_get(this, _targetManager).off("targetGone" /* TargetManagerEvent.TargetGone */ , _class_private_field_get(this, _onDetachedFromTarget));
                _class_private_field_get(this, _targetManager).off("targetChanged" /* TargetManagerEvent.TargetChanged */ , _class_private_field_get(this, _onTargetChanged));
                _class_private_field_get(this, _targetManager).off("targetDiscovered" /* TargetManagerEvent.TargetDiscovered */ , _class_private_field_get(this, _onTargetDiscovered));
            }
        },
        {
            key: "process",
            value: function process() {
                var _$_class_private_field_get;
                return (_$_class_private_field_get = _class_private_field_get(this, _process)) !== null && _$_class_private_field_get !== void 0 ? _$_class_private_field_get : null;
            }
        },
        {
            key: "_targetManager",
            value: function _targetManager1() {
                return _class_private_field_get(this, _targetManager);
            }
        },
        {
            key: "_getIsPageTargetCallback",
            value: function _getIsPageTargetCallback() {
                return _class_private_field_get(this, _isPageTargetCallback);
            }
        },
        {
            key: "createBrowserContext",
            value: function createBrowserContext() {
                var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                var _this = this;
                return _async_to_generator(function() {
                    var proxyServer, proxyBypassList, browserContextId, context;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                proxyServer = options.proxyServer, proxyBypassList = options.proxyBypassList;
                                return [
                                    4,
                                    _class_private_field_get(_this, _connection).send('Target.createBrowserContext', {
                                        proxyServer: proxyServer,
                                        proxyBypassList: proxyBypassList && proxyBypassList.join(',')
                                    })
                                ];
                            case 1:
                                browserContextId = _state.sent().browserContextId;
                                context = new _BrowserContext_js__WEBPACK_IMPORTED_MODULE_2__.CdpBrowserContext(_class_private_field_get(_this, _connection), _this, browserContextId);
                                _class_private_field_get(_this, _contexts).set(browserContextId, context);
                                return [
                                    2,
                                    context
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "browserContexts",
            value: function browserContexts() {
                return [
                    _class_private_field_get(this, _defaultContext)
                ].concat(_to_consumable_array(Array.from(_class_private_field_get(this, _contexts).values())));
            }
        },
        {
            key: "defaultBrowserContext",
            value: function defaultBrowserContext() {
                return _class_private_field_get(this, _defaultContext);
            }
        },
        {
            key: "_disposeContext",
            value: function _disposeContext(contextId) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!contextId) {
                                    return [
                                        2
                                    ];
                                }
                                return [
                                    4,
                                    _class_private_field_get(_this, _connection).send('Target.disposeBrowserContext', {
                                        browserContextId: contextId
                                    })
                                ];
                            case 1:
                                _state.sent();
                                _class_private_field_get(_this, _contexts).delete(contextId);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "wsEndpoint",
            value: function wsEndpoint() {
                return _class_private_field_get(this, _connection).url();
            }
        },
        {
            key: "newPage",
            value: function newPage() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _class_private_field_get(_this, _defaultContext).newPage()
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
            key: "_createPageInContext",
            value: function _createPageInContext(contextId) {
                var _this = this;
                return _async_to_generator(function() {
                    var targetId, target, initialized, page;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _class_private_field_get(_this, _connection).send('Target.createTarget', {
                                        url: 'about:blank',
                                        browserContextId: contextId || undefined
                                    })
                                ];
                            case 1:
                                targetId = _state.sent().targetId;
                                return [
                                    4,
                                    _this.waitForTarget(function(t) {
                                        return t._targetId === targetId;
                                    })
                                ];
                            case 2:
                                target = _state.sent();
                                if (!target) {
                                    throw new Error("Missing target for page (id = ".concat(targetId, ")"));
                                }
                                return [
                                    4,
                                    target._initializedDeferred.valueOrThrow()
                                ];
                            case 3:
                                initialized = _state.sent() === _Target_js__WEBPACK_IMPORTED_MODULE_5__.InitializationStatus.SUCCESS;
                                if (!initialized) {
                                    throw new Error("Failed to create target for page (id = ".concat(targetId, ")"));
                                }
                                return [
                                    4,
                                    target.page()
                                ];
                            case 4:
                                page = _state.sent();
                                if (!page) {
                                    throw new Error("Failed to create a page for context (id = ".concat(contextId, ")"));
                                }
                                return [
                                    2,
                                    page
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "targets",
            value: function targets() {
                return Array.from(_class_private_field_get(this, _targetManager).getAvailableTargets().values()).filter(function(target) {
                    return target._isTargetExposed() && target._initializedDeferred.value() === _Target_js__WEBPACK_IMPORTED_MODULE_5__.InitializationStatus.SUCCESS;
                });
            }
        },
        {
            key: "target",
            value: function target() {
                var browserTarget = this.targets().find(function(target) {
                    return target.type() === 'browser';
                });
                if (!browserTarget) {
                    throw new Error('Browser target is not found');
                }
                return browserTarget;
            }
        },
        {
            key: "version",
            value: function version() {
                var _this = this;
                return _async_to_generator(function() {
                    var version;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _class_private_method_get(_this, _getVersion, getVersion).call(_this)
                                ];
                            case 1:
                                version = _state.sent();
                                return [
                                    2,
                                    version.product
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "userAgent",
            value: function userAgent() {
                var _this = this;
                return _async_to_generator(function() {
                    var version;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _class_private_method_get(_this, _getVersion, getVersion).call(_this)
                                ];
                            case 1:
                                version = _state.sent();
                                return [
                                    2,
                                    version.userAgent
                                ];
                        }
                    });
                })();
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
                                return [
                                    4,
                                    _class_private_field_get(_this, _closeCallback).call(null)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    4,
                                    _this.disconnect()
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
            key: "disconnect",
            value: function disconnect() {
                _class_private_field_get(this, _targetManager).dispose();
                _class_private_field_get(this, _connection).dispose();
                this._detach();
                return Promise.resolve();
            }
        },
        {
            key: "connected",
            get: function get() {
                return !_class_private_field_get(this, _connection)._closed;
            }
        },
        {
            key: "debugInfo",
            get: function get() {
                return {
                    pendingProtocolErrors: _class_private_field_get(this, _connection).getPendingProtocolErrors()
                };
            }
        }
    ], [
        {
            key: "_create",
            value: function _create(product, connection, contextIds, ignoreHTTPSErrors, defaultViewport, process, closeCallback, targetFilterCallback, isPageTargetCallback) {
                var waitForInitiallyDiscoveredTargets = arguments.length > 9 && arguments[9] !== void 0 ? arguments[9] : true;
                return _async_to_generator(function() {
                    var browser;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                browser = new CdpBrowser(product, connection, contextIds, defaultViewport, process, closeCallback, targetFilterCallback, isPageTargetCallback, waitForInitiallyDiscoveredTargets);
                                if (!ignoreHTTPSErrors) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    connection.send('Security.setIgnoreCertificateErrors', {
                                        ignore: true
                                    })
                                ];
                            case 1:
                                _state.sent();
                                _state.label = 2;
                            case 2:
                                return [
                                    4,
                                    browser._attach()
                                ];
                            case 3:
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
    return CdpBrowser;
} //# sourceMappingURL=Browser.js.map
(_api_Browser_js__WEBPACK_IMPORTED_MODULE_0__.Browser);
function setIsPageTargetCallback(isPageTargetCallback) {
    _class_private_field_set(this, _isPageTargetCallback, isPageTargetCallback || function(target) {
        return target.type() === 'page' || target.type() === 'background_page' || target.type() === 'webview';
    });
}
function getVersion() {
    return _class_private_field_get(this, _connection).send('Browser.getVersion');
}


}),

}]);