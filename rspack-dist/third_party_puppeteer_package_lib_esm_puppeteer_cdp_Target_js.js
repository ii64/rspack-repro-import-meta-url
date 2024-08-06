"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_cdp_Target_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Target.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CdpTarget: function() { return CdpTarget; },
  DevToolsTarget: function() { return DevToolsTarget; },
  InitializationStatus: function() { return InitializationStatus; },
  OtherTarget: function() { return OtherTarget; },
  PageTarget: function() { return PageTarget; },
  WorkerTarget: function() { return WorkerTarget; }
});
/* harmony import */var _api_Target_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/Target.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/Target.js");
/* harmony import */var _common_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */var _util_Deferred_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/Deferred.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/Deferred.js");
/* harmony import */var _CDPSession_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CDPSession.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/CDPSession.js");
/* harmony import */var _Page_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Page.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Page.js");
/* harmony import */var _WebWorker_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WebWorker.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/WebWorker.js");
/**
 * @license
 * Copyright 2019 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ function _assert_this_initialized(self) {
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






/**
 * @internal
 */ var InitializationStatus;
(function(InitializationStatus) {
    InitializationStatus["SUCCESS"] = "success";
    InitializationStatus["ABORTED"] = "aborted";
})(InitializationStatus || (InitializationStatus = {}));
var _browserContext = /*#__PURE__*/ new WeakMap(), _session = /*#__PURE__*/ new WeakMap(), _targetInfo = /*#__PURE__*/ new WeakMap(), _targetManager = /*#__PURE__*/ new WeakMap(), _sessionFactory = /*#__PURE__*/ new WeakMap(), _childTargets = /*#__PURE__*/ new WeakMap();
/**
 * @internal
 */ var CdpTarget = /*#__PURE__*/ function(Target) {
    "use strict";
    _inherits(CdpTarget, Target);
    var _super = _create_super(CdpTarget);
    function CdpTarget(targetInfo, session, browserContext, targetManager, sessionFactory) {
        _class_call_check(this, CdpTarget);
        var _this;
        _this = _super.call(this);
        _class_private_field_init(_assert_this_initialized(_this), _browserContext, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _session, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _targetInfo, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _targetManager, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _sessionFactory, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _childTargets, {
            writable: true,
            value: new Set()
        });
        _define_property(_assert_this_initialized(_this), "_initializedDeferred", _util_Deferred_js__WEBPACK_IMPORTED_MODULE_2__.Deferred.create());
        _define_property(_assert_this_initialized(_this), "_isClosedDeferred", _util_Deferred_js__WEBPACK_IMPORTED_MODULE_2__.Deferred.create());
        _define_property(_assert_this_initialized(_this), "_targetId", void 0);
        _class_private_field_set(_assert_this_initialized(_this), _session, session);
        _class_private_field_set(_assert_this_initialized(_this), _targetManager, targetManager);
        _class_private_field_set(_assert_this_initialized(_this), _targetInfo, targetInfo);
        _class_private_field_set(_assert_this_initialized(_this), _browserContext, browserContext);
        _this._targetId = targetInfo.targetId;
        _class_private_field_set(_assert_this_initialized(_this), _sessionFactory, sessionFactory);
        if (_class_private_field_get(_assert_this_initialized(_this), _session) && _instanceof(_class_private_field_get(_assert_this_initialized(_this), _session), _CDPSession_js__WEBPACK_IMPORTED_MODULE_3__.CdpCDPSession)) {
            _class_private_field_get(_this, _session)._setTarget(_assert_this_initialized(_this));
        }
        return _this;
    }
    _create_class(CdpTarget, [
        {
            key: "asPage",
            value: function asPage() {
                var _this = this;
                return _async_to_generator(function() {
                    var session;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                session = _this._session();
                                if (!!session) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    _this.createCDPSession().then(function(client) {
                                        return _Page_js__WEBPACK_IMPORTED_MODULE_4__.CdpPage._create(client, _this, null);
                                    })
                                ];
                            case 1:
                                return [
                                    2,
                                    _state.sent()
                                ];
                            case 2:
                                return [
                                    4,
                                    _Page_js__WEBPACK_IMPORTED_MODULE_4__.CdpPage._create(session, _this, null)
                                ];
                            case 3:
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
            key: "_subtype",
            value: function _subtype() {
                return _class_private_field_get(this, _targetInfo).subtype;
            }
        },
        {
            key: "_session",
            value: function _session1() {
                return _class_private_field_get(this, _session);
            }
        },
        {
            key: "_addChildTarget",
            value: function _addChildTarget(target) {
                _class_private_field_get(this, _childTargets).add(target);
            }
        },
        {
            key: "_removeChildTarget",
            value: function _removeChildTarget(target) {
                _class_private_field_get(this, _childTargets).delete(target);
            }
        },
        {
            key: "_childTargets",
            value: function _childTargets1() {
                return _class_private_field_get(this, _childTargets);
            }
        },
        {
            key: "_sessionFactory",
            value: function _sessionFactory1() {
                if (!_class_private_field_get(this, _sessionFactory)) {
                    throw new Error('sessionFactory is not initialized');
                }
                return _class_private_field_get(this, _sessionFactory);
            }
        },
        {
            key: "createCDPSession",
            value: function createCDPSession() {
                var _this = this;
                if (!_class_private_field_get(this, _sessionFactory)) {
                    throw new Error('sessionFactory is not initialized');
                }
                return _class_private_field_get(this, _sessionFactory).call(this, false).then(function(session) {
                    session._setTarget(_this);
                    return session;
                });
            }
        },
        {
            key: "url",
            value: function url() {
                return _class_private_field_get(this, _targetInfo).url;
            }
        },
        {
            key: "type",
            value: function type() {
                var type = _class_private_field_get(this, _targetInfo).type;
                switch(type){
                    case 'page':
                        return _api_Target_js__WEBPACK_IMPORTED_MODULE_0__.TargetType.PAGE;
                    case 'background_page':
                        return _api_Target_js__WEBPACK_IMPORTED_MODULE_0__.TargetType.BACKGROUND_PAGE;
                    case 'service_worker':
                        return _api_Target_js__WEBPACK_IMPORTED_MODULE_0__.TargetType.SERVICE_WORKER;
                    case 'shared_worker':
                        return _api_Target_js__WEBPACK_IMPORTED_MODULE_0__.TargetType.SHARED_WORKER;
                    case 'browser':
                        return _api_Target_js__WEBPACK_IMPORTED_MODULE_0__.TargetType.BROWSER;
                    case 'webview':
                        return _api_Target_js__WEBPACK_IMPORTED_MODULE_0__.TargetType.WEBVIEW;
                    case 'tab':
                        return _api_Target_js__WEBPACK_IMPORTED_MODULE_0__.TargetType.TAB;
                    default:
                        return _api_Target_js__WEBPACK_IMPORTED_MODULE_0__.TargetType.OTHER;
                }
            }
        },
        {
            key: "_targetManager",
            value: function _targetManager1() {
                if (!_class_private_field_get(this, _targetManager)) {
                    throw new Error('targetManager is not initialized');
                }
                return _class_private_field_get(this, _targetManager);
            }
        },
        {
            key: "_getTargetInfo",
            value: function _getTargetInfo() {
                return _class_private_field_get(this, _targetInfo);
            }
        },
        {
            key: "browser",
            value: function browser() {
                if (!_class_private_field_get(this, _browserContext)) {
                    throw new Error('browserContext is not initialized');
                }
                return _class_private_field_get(this, _browserContext).browser();
            }
        },
        {
            key: "browserContext",
            value: function browserContext() {
                if (!_class_private_field_get(this, _browserContext)) {
                    throw new Error('browserContext is not initialized');
                }
                return _class_private_field_get(this, _browserContext);
            }
        },
        {
            key: "opener",
            value: function opener() {
                var openerId = _class_private_field_get(this, _targetInfo).openerId;
                if (!openerId) {
                    return;
                }
                return this.browser().targets().find(function(target) {
                    return target._targetId === openerId;
                });
            }
        },
        {
            key: "_targetInfoChanged",
            value: function _targetInfoChanged(targetInfo) {
                _class_private_field_set(this, _targetInfo, targetInfo);
                this._checkIfInitialized();
            }
        },
        {
            key: "_initialize",
            value: function _initialize() {
                this._initializedDeferred.resolve(InitializationStatus.SUCCESS);
            }
        },
        {
            key: "_isTargetExposed",
            value: function _isTargetExposed() {
                return this.type() !== _api_Target_js__WEBPACK_IMPORTED_MODULE_0__.TargetType.TAB && !this._subtype();
            }
        },
        {
            key: "_checkIfInitialized",
            value: function _checkIfInitialized() {
                if (!this._initializedDeferred.resolved()) {
                    this._initializedDeferred.resolve(InitializationStatus.SUCCESS);
                }
            }
        }
    ]);
    return CdpTarget;
}(_api_Target_js__WEBPACK_IMPORTED_MODULE_0__.Target);
var _defaultViewport = /*#__PURE__*/ new WeakMap();
/**
 * @internal
 */ var PageTarget = /*#__PURE__*/ function(CdpTarget) {
    "use strict";
    _inherits(PageTarget, CdpTarget);
    var _super = _create_super(PageTarget);
    function PageTarget(targetInfo, session, browserContext, targetManager, sessionFactory, defaultViewport) {
        _class_call_check(this, PageTarget);
        var _this;
        _this = _super.call(this, targetInfo, session, browserContext, targetManager, sessionFactory);
        _class_private_field_init(_assert_this_initialized(_this), _defaultViewport, {
            writable: true,
            value: void 0
        });
        _define_property(_assert_this_initialized(_this), "pagePromise", void 0);
        _class_private_field_set(_assert_this_initialized(_this), _defaultViewport, defaultViewport !== null && defaultViewport !== void 0 ? defaultViewport : undefined);
        return _this;
    }
    _create_class(PageTarget, [
        {
            key: "_initialize",
            value: function _initialize() {
                var _this = this;
                this._initializedDeferred.valueOrThrow().then(function() {
                    var _ref = _async_to_generator(function(result) {
                        var opener, openerPage, popupPage;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    if (result === InitializationStatus.ABORTED) {
                                        return [
                                            2
                                        ];
                                    }
                                    opener = _this.opener();
                                    if (!_instanceof(opener, PageTarget)) {
                                        return [
                                            2
                                        ];
                                    }
                                    if (!opener || !opener.pagePromise || _this.type() !== 'page') {
                                        return [
                                            2,
                                            true
                                        ];
                                    }
                                    return [
                                        4,
                                        opener.pagePromise
                                    ];
                                case 1:
                                    openerPage = _state.sent();
                                    if (!openerPage.listenerCount("popup" /* PageEvent.Popup */ )) {
                                        return [
                                            2,
                                            true
                                        ];
                                    }
                                    return [
                                        4,
                                        _this.page()
                                    ];
                                case 2:
                                    popupPage = _state.sent();
                                    openerPage.emit("popup" /* PageEvent.Popup */ , popupPage);
                                    return [
                                        2,
                                        true
                                    ];
                            }
                        });
                    });
                    return function(result) {
                        return _ref.apply(this, arguments);
                    };
                }()).catch(_common_util_js__WEBPACK_IMPORTED_MODULE_1__.debugError);
                this._checkIfInitialized();
            }
        },
        {
            key: "page",
            value: function page() {
                var _this = this;
                return _async_to_generator(function() {
                    var session, _ref;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!_this.pagePromise) {
                                    session = _this._session();
                                    _this.pagePromise = (session ? Promise.resolve(session) : _this._sessionFactory()(/* isAutoAttachEmulated=*/ false)).then(function(client) {
                                        var _$_class_private_field_get;
                                        return _Page_js__WEBPACK_IMPORTED_MODULE_4__.CdpPage._create(client, _this, (_$_class_private_field_get = _class_private_field_get(_this, _defaultViewport)) !== null && _$_class_private_field_get !== void 0 ? _$_class_private_field_get : null);
                                    });
                                }
                                return [
                                    4,
                                    _this.pagePromise
                                ];
                            case 1:
                                return [
                                    2,
                                    (_ref = _state.sent()) !== null && _ref !== void 0 ? _ref : null
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "_checkIfInitialized",
            value: function _checkIfInitialized() {
                if (this._initializedDeferred.resolved()) {
                    return;
                }
                if (this._getTargetInfo().url !== '') {
                    this._initializedDeferred.resolve(InitializationStatus.SUCCESS);
                }
            }
        }
    ]);
    return PageTarget;
}(CdpTarget);
/**
 * @internal
 */ var DevToolsTarget = /*#__PURE__*/ function(PageTarget) {
    "use strict";
    _inherits(DevToolsTarget, PageTarget);
    var _super = _create_super(DevToolsTarget);
    function DevToolsTarget() {
        _class_call_check(this, DevToolsTarget);
        return _super.apply(this, arguments);
    }
    return DevToolsTarget;
}(PageTarget);
var _workerPromise = /*#__PURE__*/ new WeakMap();
/**
 * @internal
 */ var WorkerTarget = /*#__PURE__*/ function(CdpTarget) {
    "use strict";
    _inherits(WorkerTarget, CdpTarget);
    var _super = _create_super(WorkerTarget);
    function WorkerTarget() {
        _class_call_check(this, WorkerTarget);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_field_init(_assert_this_initialized(_this), _workerPromise, {
            writable: true,
            value: void 0
        });
        return _this;
    }
    _create_class(WorkerTarget, [
        {
            key: "worker",
            value: function worker() {
                var _this = this;
                return _async_to_generator(function() {
                    var session;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!_class_private_field_get(_this, _workerPromise)) {
                                    session = _this._session();
                                    // TODO(einbinder): Make workers send their console logs.
                                    _class_private_field_set(_this, _workerPromise, (session ? Promise.resolve(session) : _this._sessionFactory()(/* isAutoAttachEmulated=*/ false)).then(function(client) {
                                        return new _WebWorker_js__WEBPACK_IMPORTED_MODULE_5__.CdpWebWorker(client, _this._getTargetInfo().url, _this._targetId, _this.type(), function() {} /* consoleAPICalled */ , function() {} /* exceptionThrown */ );
                                    }));
                                }
                                return [
                                    4,
                                    _class_private_field_get(_this, _workerPromise)
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
    ]);
    return WorkerTarget;
}(CdpTarget);
/**
 * @internal
 */ var OtherTarget = /*#__PURE__*/ function(CdpTarget) {
    "use strict";
    _inherits(OtherTarget, CdpTarget);
    var _super = _create_super(OtherTarget);
    function OtherTarget() {
        _class_call_check(this, OtherTarget);
        return _super.apply(this, arguments);
    }
    return OtherTarget;
} //# sourceMappingURL=Target.js.map
(CdpTarget);


}),

}]);