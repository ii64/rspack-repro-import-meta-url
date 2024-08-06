"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_cdp_ChromeTargetManager_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/cdp/ChromeTargetManager.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ChromeTargetManager: function() { return ChromeTargetManager; }
});
/* harmony import */var _api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/CDPSession.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/CDPSession.js");
/* harmony import */var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/EventEmitter.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/EventEmitter.js");
/* harmony import */var _common_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */var _util_assert_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/assert.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js");
/* harmony import */var _util_Deferred_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/Deferred.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/Deferred.js");
/* harmony import */var _Target_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Target.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Target.js");
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






function isPageTargetBecomingPrimary(target, newTargetInfo) {
    return Boolean(target._subtype()) && !newTargetInfo.subtype;
}
var _connection = /*#__PURE__*/ new WeakMap(), /**
     * Keeps track of the following events: 'Target.targetCreated',
     * 'Target.targetDestroyed', 'Target.targetInfoChanged'.
     *
     * A target becomes discovered when 'Target.targetCreated' is received.
     * A target is removed from this map once 'Target.targetDestroyed' is
     * received.
     *
     * `targetFilterCallback` has no effect on this map.
     */ _discoveredTargetsByTargetId = /*#__PURE__*/ new WeakMap(), /**
     * A target is added to this map once ChromeTargetManager has created
     * a Target and attached at least once to it.
     */ _attachedTargetsByTargetId = /*#__PURE__*/ new WeakMap(), /**
     * Tracks which sessions attach to which target.
     */ _attachedTargetsBySessionId = /*#__PURE__*/ new WeakMap(), /**
     * If a target was filtered out by `targetFilterCallback`, we still receive
     * events about it from CDP, but we don't forward them to the rest of Puppeteer.
     */ _ignoredTargets = /*#__PURE__*/ new WeakMap(), _targetFilterCallback = /*#__PURE__*/ new WeakMap(), _targetFactory = /*#__PURE__*/ new WeakMap(), _attachedToTargetListenersBySession = /*#__PURE__*/ new WeakMap(), _detachedFromTargetListenersBySession = /*#__PURE__*/ new WeakMap(), _initializeDeferred = /*#__PURE__*/ new WeakMap(), _targetsIdsForInit = /*#__PURE__*/ new WeakMap(), _waitForInitiallyDiscoveredTargets = /*#__PURE__*/ new WeakMap(), _discoveryFilter = /*#__PURE__*/ new WeakMap(), _storeExistingTargetsForInit = /*#__PURE__*/ new WeakMap(), _setupAttachmentListeners = /*#__PURE__*/ new WeakSet(), _removeAttachmentListeners = /*#__PURE__*/ new WeakSet(), _onSessionDetached = /*#__PURE__*/ new WeakMap(), _onTargetCreated = /*#__PURE__*/ new WeakMap(), _onTargetDestroyed = /*#__PURE__*/ new WeakMap(), _onTargetInfoChanged = /*#__PURE__*/ new WeakMap(), _onAttachedToTarget = /*#__PURE__*/ new WeakMap(), _finishInitializationIfReady = /*#__PURE__*/ new WeakSet(), _onDetachedFromTarget = /*#__PURE__*/ new WeakMap();
/**
 * ChromeTargetManager uses the CDP's auto-attach mechanism to intercept
 * new targets and allow the rest of Puppeteer to configure listeners while
 * the target is paused.
 *
 * @internal
 */ var ChromeTargetManager = /*#__PURE__*/ function(EventEmitter) {
    "use strict";
    _inherits(ChromeTargetManager, EventEmitter);
    var _super = _create_super(ChromeTargetManager);
    function ChromeTargetManager(connection, targetFactory, targetFilterCallback) {
        var waitForInitiallyDiscoveredTargets = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
        _class_call_check(this, ChromeTargetManager);
        var _this;
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _setupAttachmentListeners);
        _class_private_method_init(_assert_this_initialized(_this), _removeAttachmentListeners);
        _class_private_method_init(_assert_this_initialized(_this), _finishInitializationIfReady);
        _class_private_field_init(_assert_this_initialized(_this), _connection, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _discoveredTargetsByTargetId, {
            writable: true,
            value: new Map()
        });
        _class_private_field_init(_assert_this_initialized(_this), _attachedTargetsByTargetId, {
            writable: true,
            value: new Map()
        });
        _class_private_field_init(_assert_this_initialized(_this), _attachedTargetsBySessionId, {
            writable: true,
            value: new Map()
        });
        _class_private_field_init(_assert_this_initialized(_this), _ignoredTargets, {
            writable: true,
            value: new Set()
        });
        _class_private_field_init(_assert_this_initialized(_this), _targetFilterCallback, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _targetFactory, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _attachedToTargetListenersBySession, {
            writable: true,
            value: new WeakMap()
        });
        _class_private_field_init(_assert_this_initialized(_this), _detachedFromTargetListenersBySession, {
            writable: true,
            value: new WeakMap()
        });
        _class_private_field_init(_assert_this_initialized(_this), _initializeDeferred, {
            writable: true,
            value: _util_Deferred_js__WEBPACK_IMPORTED_MODULE_4__.Deferred.create()
        });
        _class_private_field_init(_assert_this_initialized(_this), _targetsIdsForInit, {
            writable: true,
            value: new Set()
        });
        _class_private_field_init(_assert_this_initialized(_this), _waitForInitiallyDiscoveredTargets, {
            writable: true,
            value: true
        });
        _class_private_field_init(_assert_this_initialized(_this), _discoveryFilter, {
            writable: true,
            value: [
                {}
            ]
        });
        _class_private_field_init(_assert_this_initialized(_this), _storeExistingTargetsForInit, {
            writable: true,
            value: function() {
                if (!_class_private_field_get(_assert_this_initialized(_this), _waitForInitiallyDiscoveredTargets)) {
                    return;
                }
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _class_private_field_get(_this, _discoveredTargetsByTargetId).entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var _step_value = _sliced_to_array(_step.value, 2), targetId = _step_value[0], targetInfo = _step_value[1];
                        var targetForFilter = new _Target_js__WEBPACK_IMPORTED_MODULE_5__.CdpTarget(targetInfo, undefined, undefined, _assert_this_initialized(_this), undefined);
                        // Targets from extensions and the browser that will not be
                        // auto-attached. Therefore, we should not add them to
                        // #targetsIdsForInit.
                        var skipTarget = targetInfo.type === 'browser' || targetInfo.url.startsWith('chrome-extension://');
                        if ((!_class_private_field_get(_assert_this_initialized(_this), _targetFilterCallback) || _class_private_field_get(_this, _targetFilterCallback).call(_assert_this_initialized(_this), targetForFilter)) && !skipTarget) {
                            _class_private_field_get(_this, _targetsIdsForInit).add(targetId);
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
        });
        _class_private_field_init(_assert_this_initialized(_this), _onSessionDetached, {
            writable: true,
            value: function(session) {
                _class_private_method_get(_this, _removeAttachmentListeners, removeAttachmentListeners).call(_assert_this_initialized(_this), session);
            }
        });
        var _this1 = _assert_this_initialized(_this);
        _class_private_field_init(_assert_this_initialized(_this), _onTargetCreated, {
            writable: true,
            value: function() {
                var _ref = _async_to_generator(function(event) {
                    var target;
                    return _ts_generator(this, function(_state) {
                        _class_private_field_get(_this1, _discoveredTargetsByTargetId).set(event.targetInfo.targetId, event.targetInfo);
                        _this1.emit("targetDiscovered" /* TargetManagerEvent.TargetDiscovered */ , event.targetInfo);
                        // The connection is already attached to the browser target implicitly,
                        // therefore, no new CDPSession is created and we have special handling
                        // here.
                        if (event.targetInfo.type === 'browser' && event.targetInfo.attached) {
                            if (_class_private_field_get(_this1, _attachedTargetsByTargetId).has(event.targetInfo.targetId)) {
                                return [
                                    2
                                ];
                            }
                            target = _class_private_field_get(_this1, _targetFactory).call(_this1, event.targetInfo, undefined);
                            target._initialize();
                            _class_private_field_get(_this1, _attachedTargetsByTargetId).set(event.targetInfo.targetId, target);
                        }
                        return [
                            2
                        ];
                    });
                });
                return function(event) {
                    return _ref.apply(this, arguments);
                };
            }()
        });
        _class_private_field_init(_assert_this_initialized(_this), _onTargetDestroyed, {
            writable: true,
            value: function(event) {
                var targetInfo = _class_private_field_get(_this, _discoveredTargetsByTargetId).get(event.targetId);
                _class_private_field_get(_this, _discoveredTargetsByTargetId).delete(event.targetId);
                _class_private_method_get(_this, _finishInitializationIfReady, finishInitializationIfReady).call(_assert_this_initialized(_this), event.targetId);
                if ((targetInfo === null || targetInfo === void 0 ? void 0 : targetInfo.type) === 'service_worker' && _class_private_field_get(_this, _attachedTargetsByTargetId).has(event.targetId)) {
                    // Special case for service workers: report TargetGone event when
                    // the worker is destroyed.
                    var target = _class_private_field_get(_this, _attachedTargetsByTargetId).get(event.targetId);
                    if (target) {
                        _this.emit("targetGone" /* TargetManagerEvent.TargetGone */ , target);
                        _class_private_field_get(_this, _attachedTargetsByTargetId).delete(event.targetId);
                    }
                }
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _onTargetInfoChanged, {
            writable: true,
            value: function(event) {
                _class_private_field_get(_this, _discoveredTargetsByTargetId).set(event.targetInfo.targetId, event.targetInfo);
                if (_class_private_field_get(_this, _ignoredTargets).has(event.targetInfo.targetId) || !_class_private_field_get(_this, _attachedTargetsByTargetId).has(event.targetInfo.targetId) || !event.targetInfo.attached) {
                    return;
                }
                var target = _class_private_field_get(_this, _attachedTargetsByTargetId).get(event.targetInfo.targetId);
                if (!target) {
                    return;
                }
                var previousURL = target.url();
                var wasInitialized = target._initializedDeferred.value() === _Target_js__WEBPACK_IMPORTED_MODULE_5__.InitializationStatus.SUCCESS;
                if (isPageTargetBecomingPrimary(target, event.targetInfo)) {
                    var _session_parentSession;
                    var session = target === null || target === void 0 ? void 0 : target._session();
                    (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_3__.assert)(session, 'Target that is being activated is missing a CDPSession.');
                    (_session_parentSession = session.parentSession()) === null || _session_parentSession === void 0 ? void 0 : _session_parentSession.emit(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSessionEvent.Swapped, session);
                }
                target._targetInfoChanged(event.targetInfo);
                if (wasInitialized && previousURL !== target.url()) {
                    _this.emit("targetChanged" /* TargetManagerEvent.TargetChanged */ , {
                        target: target,
                        wasInitialized: wasInitialized,
                        previousURL: previousURL
                    });
                }
            }
        });
        var _this2 = _assert_this_initialized(_this);
        _class_private_field_init(_assert_this_initialized(_this), _onAttachedToTarget, {
            writable: true,
            value: function() {
                var _ref = _async_to_generator(function(parentSession, event) {
                    var targetInfo, session, silentDetach, target, isExistingTarget, target1, parentTarget;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                targetInfo = event.targetInfo;
                                session = _class_private_field_get(_this2, _connection).session(event.sessionId);
                                if (!session) {
                                    throw new Error("Session ".concat(event.sessionId, " was not created."));
                                }
                                silentDetach = function() {
                                    var _ref = _async_to_generator(function() {
                                        return _ts_generator(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    return [
                                                        4,
                                                        session.send('Runtime.runIfWaitingForDebugger').catch(_common_util_js__WEBPACK_IMPORTED_MODULE_2__.debugError)
                                                    ];
                                                case 1:
                                                    _state.sent();
                                                    // We don't use `session.detach()` because that dispatches all commands on
                                                    // the connection instead of the parent session.
                                                    return [
                                                        4,
                                                        parentSession.send('Target.detachFromTarget', {
                                                            sessionId: session.id()
                                                        }).catch(_common_util_js__WEBPACK_IMPORTED_MODULE_2__.debugError)
                                                    ];
                                                case 2:
                                                    _state.sent();
                                                    return [
                                                        2
                                                    ];
                                            }
                                        });
                                    });
                                    return function silentDetach() {
                                        return _ref.apply(this, arguments);
                                    };
                                }();
                                if (!_class_private_field_get(_this2, _connection).isAutoAttached(targetInfo.targetId)) {
                                    return [
                                        2
                                    ];
                                }
                                if (!(targetInfo.type === 'service_worker')) return [
                                    3,
                                    2
                                ];
                                _class_private_method_get(_this2, _finishInitializationIfReady, finishInitializationIfReady).call(_this2, targetInfo.targetId);
                                return [
                                    4,
                                    silentDetach()
                                ];
                            case 1:
                                _state.sent();
                                if (_class_private_field_get(_this2, _attachedTargetsByTargetId).has(targetInfo.targetId)) {
                                    return [
                                        2
                                    ];
                                }
                                target = _class_private_field_get(_this2, _targetFactory).call(_this2, targetInfo);
                                target._initialize();
                                _class_private_field_get(_this2, _attachedTargetsByTargetId).set(targetInfo.targetId, target);
                                _this2.emit("targetAvailable" /* TargetManagerEvent.TargetAvailable */ , target);
                                return [
                                    2
                                ];
                            case 2:
                                isExistingTarget = _class_private_field_get(_this2, _attachedTargetsByTargetId).has(targetInfo.targetId);
                                target1 = isExistingTarget ? _class_private_field_get(_this2, _attachedTargetsByTargetId).get(targetInfo.targetId) : _class_private_field_get(_this2, _targetFactory).call(_this2, targetInfo, session, _instanceof(parentSession, _api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSession) ? parentSession : undefined);
                                if (!(_class_private_field_get(_this2, _targetFilterCallback) && !_class_private_field_get(_this2, _targetFilterCallback).call(_this2, target1))) return [
                                    3,
                                    4
                                ];
                                _class_private_field_get(_this2, _ignoredTargets).add(targetInfo.targetId);
                                _class_private_method_get(_this2, _finishInitializationIfReady, finishInitializationIfReady).call(_this2, targetInfo.targetId);
                                return [
                                    4,
                                    silentDetach()
                                ];
                            case 3:
                                _state.sent();
                                return [
                                    2
                                ];
                            case 4:
                                _class_private_method_get(_this2, _setupAttachmentListeners, setupAttachmentListeners).call(_this2, session);
                                if (isExistingTarget) {
                                    session._setTarget(target1);
                                    _class_private_field_get(_this2, _attachedTargetsBySessionId).set(session.id(), _class_private_field_get(_this2, _attachedTargetsByTargetId).get(targetInfo.targetId));
                                } else {
                                    target1._initialize();
                                    _class_private_field_get(_this2, _attachedTargetsByTargetId).set(targetInfo.targetId, target1);
                                    _class_private_field_get(_this2, _attachedTargetsBySessionId).set(session.id(), target1);
                                }
                                parentTarget = _instanceof(parentSession, _api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSession) ? parentSession._target() : null;
                                parentTarget === null || parentTarget === void 0 ? void 0 : parentTarget._addChildTarget(target1);
                                parentSession.emit(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSessionEvent.Ready, session);
                                _class_private_field_get(_this2, _targetsIdsForInit).delete(target1._targetId);
                                if (!isExistingTarget) {
                                    _this2.emit("targetAvailable" /* TargetManagerEvent.TargetAvailable */ , target1);
                                }
                                _class_private_method_get(_this2, _finishInitializationIfReady, finishInitializationIfReady).call(_this2);
                                // TODO: the browser might be shutting down here. What do we do with the
                                // error?
                                return [
                                    4,
                                    Promise.all([
                                        session.send('Target.setAutoAttach', {
                                            waitForDebuggerOnStart: true,
                                            flatten: true,
                                            autoAttach: true,
                                            filter: _class_private_field_get(_this2, _discoveryFilter)
                                        }),
                                        session.send('Runtime.runIfWaitingForDebugger')
                                    ]).catch(_common_util_js__WEBPACK_IMPORTED_MODULE_2__.debugError)
                                ];
                            case 5:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                });
                return function(parentSession, event) {
                    return _ref.apply(this, arguments);
                };
            }()
        });
        _class_private_field_init(_assert_this_initialized(_this), _onDetachedFromTarget, {
            writable: true,
            value: function(parentSession, event) {
                var target = _class_private_field_get(_this, _attachedTargetsBySessionId).get(event.sessionId);
                _class_private_field_get(_this, _attachedTargetsBySessionId).delete(event.sessionId);
                if (!target) {
                    return;
                }
                if (_instanceof(parentSession, _api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSession)) {
                    parentSession._target()._removeChildTarget(target);
                }
                _class_private_field_get(_this, _attachedTargetsByTargetId).delete(target._targetId);
                _this.emit("targetGone" /* TargetManagerEvent.TargetGone */ , target);
            }
        });
        _class_private_field_set(_assert_this_initialized(_this), _connection, connection);
        _class_private_field_set(_assert_this_initialized(_this), _targetFilterCallback, targetFilterCallback);
        _class_private_field_set(_assert_this_initialized(_this), _targetFactory, targetFactory);
        _class_private_field_set(_assert_this_initialized(_this), _waitForInitiallyDiscoveredTargets, waitForInitiallyDiscoveredTargets);
        _class_private_field_get(_this, _connection).on('Target.targetCreated', _class_private_field_get(_assert_this_initialized(_this), _onTargetCreated));
        _class_private_field_get(_this, _connection).on('Target.targetDestroyed', _class_private_field_get(_assert_this_initialized(_this), _onTargetDestroyed));
        _class_private_field_get(_this, _connection).on('Target.targetInfoChanged', _class_private_field_get(_assert_this_initialized(_this), _onTargetInfoChanged));
        _class_private_field_get(_this, _connection).on(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSessionEvent.SessionDetached, _class_private_field_get(_assert_this_initialized(_this), _onSessionDetached));
        _class_private_method_get(_this, _setupAttachmentListeners, setupAttachmentListeners).call(_assert_this_initialized(_this), _class_private_field_get(_assert_this_initialized(_this), _connection));
        return _this;
    }
    _create_class(ChromeTargetManager, [
        {
            key: "initialize",
            value: function initialize() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _class_private_field_get(_this, _connection).send('Target.setDiscoverTargets', {
                                        discover: true,
                                        filter: _class_private_field_get(_this, _discoveryFilter)
                                    })
                                ];
                            case 1:
                                _state.sent();
                                _class_private_field_get(_this, _storeExistingTargetsForInit).call(_this);
                                return [
                                    4,
                                    _class_private_field_get(_this, _connection).send('Target.setAutoAttach', {
                                        waitForDebuggerOnStart: true,
                                        flatten: true,
                                        autoAttach: true,
                                        filter: [
                                            {
                                                type: 'page',
                                                exclude: true
                                            }
                                        ].concat(_to_consumable_array(_class_private_field_get(_this, _discoveryFilter)))
                                    })
                                ];
                            case 2:
                                _state.sent();
                                _class_private_method_get(_this, _finishInitializationIfReady, finishInitializationIfReady).call(_this);
                                return [
                                    4,
                                    _class_private_field_get(_this, _initializeDeferred).valueOrThrow()
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
            key: "getChildTargets",
            value: function getChildTargets(target) {
                return target._childTargets();
            }
        },
        {
            key: "dispose",
            value: function dispose() {
                _class_private_field_get(this, _connection).off('Target.targetCreated', _class_private_field_get(this, _onTargetCreated));
                _class_private_field_get(this, _connection).off('Target.targetDestroyed', _class_private_field_get(this, _onTargetDestroyed));
                _class_private_field_get(this, _connection).off('Target.targetInfoChanged', _class_private_field_get(this, _onTargetInfoChanged));
                _class_private_field_get(this, _connection).off(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSessionEvent.SessionDetached, _class_private_field_get(this, _onSessionDetached));
                _class_private_method_get(this, _removeAttachmentListeners, removeAttachmentListeners).call(this, _class_private_field_get(this, _connection));
            }
        },
        {
            key: "getAvailableTargets",
            value: function getAvailableTargets() {
                return _class_private_field_get(this, _attachedTargetsByTargetId);
            }
        }
    ]);
    return ChromeTargetManager;
} //# sourceMappingURL=ChromeTargetManager.js.map
(_common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__.EventEmitter);
function setupAttachmentListeners(session) {
    var _this = this;
    var listener = function(event) {
        void _class_private_field_get(_this, _onAttachedToTarget).call(_this, session, event);
    };
    (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_3__.assert)(!_class_private_field_get(this, _attachedToTargetListenersBySession).has(session));
    _class_private_field_get(this, _attachedToTargetListenersBySession).set(session, listener);
    session.on('Target.attachedToTarget', listener);
    var detachedListener = function(event) {
        return _class_private_field_get(_this, _onDetachedFromTarget).call(_this, session, event);
    };
    (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_3__.assert)(!_class_private_field_get(this, _detachedFromTargetListenersBySession).has(session));
    _class_private_field_get(this, _detachedFromTargetListenersBySession).set(session, detachedListener);
    session.on('Target.detachedFromTarget', detachedListener);
}
function removeAttachmentListeners(session) {
    var listener = _class_private_field_get(this, _attachedToTargetListenersBySession).get(session);
    if (listener) {
        session.off('Target.attachedToTarget', listener);
        _class_private_field_get(this, _attachedToTargetListenersBySession).delete(session);
    }
    if (_class_private_field_get(this, _detachedFromTargetListenersBySession).has(session)) {
        session.off('Target.detachedFromTarget', _class_private_field_get(this, _detachedFromTargetListenersBySession).get(session));
        _class_private_field_get(this, _detachedFromTargetListenersBySession).delete(session);
    }
}
function finishInitializationIfReady(targetId) {
    targetId !== undefined && _class_private_field_get(this, _targetsIdsForInit).delete(targetId);
    if (_class_private_field_get(this, _targetsIdsForInit).size === 0) {
        _class_private_field_get(this, _initializeDeferred).resolve();
    }
}


}),

}]);