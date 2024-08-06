"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_cdp_FirefoxTargetManager_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/cdp/FirefoxTargetManager.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  FirefoxTargetManager: function() { return FirefoxTargetManager; }
});
/* harmony import */var _api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/CDPSession.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/CDPSession.js");
/* harmony import */var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/EventEmitter.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/EventEmitter.js");
/* harmony import */var _util_assert_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/assert.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js");
/* harmony import */var _util_Deferred_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/Deferred.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/Deferred.js");
/**
 * @license
 * Copyright 2022 Google Inc.
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




var _connection = /*#__PURE__*/ new WeakMap(), /**
     * Keeps track of the following events: 'Target.targetCreated',
     * 'Target.targetDestroyed'.
     *
     * A target becomes discovered when 'Target.targetCreated' is received.
     * A target is removed from this map once 'Target.targetDestroyed' is
     * received.
     *
     * `targetFilterCallback` has no effect on this map.
     */ _discoveredTargetsByTargetId = /*#__PURE__*/ new WeakMap(), /**
     * Keeps track of targets that were created via 'Target.targetCreated'
     * and which one are not filtered out by `targetFilterCallback`.
     *
     * The target is removed from here once it's been destroyed.
     */ _availableTargetsByTargetId = /*#__PURE__*/ new WeakMap(), /**
     * Tracks which sessions attach to which target.
     */ _availableTargetsBySessionId = /*#__PURE__*/ new WeakMap(), _targetFilterCallback = /*#__PURE__*/ new WeakMap(), _targetFactory = /*#__PURE__*/ new WeakMap(), _attachedToTargetListenersBySession = /*#__PURE__*/ new WeakMap(), _initializeDeferred = /*#__PURE__*/ new WeakMap(), _targetsIdsForInit = /*#__PURE__*/ new WeakMap(), _onSessionDetached = /*#__PURE__*/ new WeakMap(), _onTargetCreated = /*#__PURE__*/ new WeakMap(), _onTargetDestroyed = /*#__PURE__*/ new WeakMap(), _onAttachedToTarget = /*#__PURE__*/ new WeakMap(), _finishInitializationIfReady = /*#__PURE__*/ new WeakSet();
/**
 * FirefoxTargetManager implements target management using
 * `Target.setDiscoverTargets` without using auto-attach. It, therefore, creates
 * targets that lazily establish their CDP sessions.
 *
 * Although the approach is potentially flaky, there is no other way for Firefox
 * because Firefox's CDP implementation does not support auto-attach.
 *
 * Firefox does not support targetInfoChanged and detachedFromTarget events:
 *
 * - https://bugzilla.mozilla.org/show_bug.cgi?id=1610855
 * - https://bugzilla.mozilla.org/show_bug.cgi?id=1636979
 *   @internal
 */ var FirefoxTargetManager = /*#__PURE__*/ function(EventEmitter) {
    "use strict";
    _inherits(FirefoxTargetManager, EventEmitter);
    var _super = _create_super(FirefoxTargetManager);
    function FirefoxTargetManager(connection, targetFactory, targetFilterCallback) {
        _class_call_check(this, FirefoxTargetManager);
        var _this;
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _finishInitializationIfReady);
        _class_private_field_init(_assert_this_initialized(_this), _connection, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _discoveredTargetsByTargetId, {
            writable: true,
            value: new Map()
        });
        _class_private_field_init(_assert_this_initialized(_this), _availableTargetsByTargetId, {
            writable: true,
            value: new Map()
        });
        _class_private_field_init(_assert_this_initialized(_this), _availableTargetsBySessionId, {
            writable: true,
            value: new Map()
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
        _class_private_field_init(_assert_this_initialized(_this), _initializeDeferred, {
            writable: true,
            value: _util_Deferred_js__WEBPACK_IMPORTED_MODULE_3__.Deferred.create()
        });
        _class_private_field_init(_assert_this_initialized(_this), _targetsIdsForInit, {
            writable: true,
            value: new Set()
        });
        _class_private_field_init(_assert_this_initialized(_this), _onSessionDetached, {
            writable: true,
            value: function(session) {
                _this.removeSessionListeners(session);
                _class_private_field_get(_this, _availableTargetsBySessionId).delete(session.id());
            }
        });
        var _this1 = _assert_this_initialized(_this);
        _class_private_field_init(_assert_this_initialized(_this), _onTargetCreated, {
            writable: true,
            value: function() {
                var _ref = _async_to_generator(function(event) {
                    var target, target1;
                    return _ts_generator(this, function(_state) {
                        if (_class_private_field_get(_this1, _discoveredTargetsByTargetId).has(event.targetInfo.targetId)) {
                            return [
                                2
                            ];
                        }
                        _class_private_field_get(_this1, _discoveredTargetsByTargetId).set(event.targetInfo.targetId, event.targetInfo);
                        if (event.targetInfo.type === 'browser' && event.targetInfo.attached) {
                            target = _class_private_field_get(_this1, _targetFactory).call(_this1, event.targetInfo, undefined);
                            target._initialize();
                            _class_private_field_get(_this1, _availableTargetsByTargetId).set(event.targetInfo.targetId, target);
                            _class_private_method_get(_this1, _finishInitializationIfReady, finishInitializationIfReady).call(_this1, target._targetId);
                            return [
                                2
                            ];
                        }
                        target1 = _class_private_field_get(_this1, _targetFactory).call(_this1, event.targetInfo, undefined);
                        if (_class_private_field_get(_this1, _targetFilterCallback) && !_class_private_field_get(_this1, _targetFilterCallback).call(_this1, target1)) {
                            _class_private_method_get(_this1, _finishInitializationIfReady, finishInitializationIfReady).call(_this1, event.targetInfo.targetId);
                            return [
                                2
                            ];
                        }
                        target1._initialize();
                        _class_private_field_get(_this1, _availableTargetsByTargetId).set(event.targetInfo.targetId, target1);
                        _this1.emit("targetAvailable" /* TargetManagerEvent.TargetAvailable */ , target1);
                        _class_private_method_get(_this1, _finishInitializationIfReady, finishInitializationIfReady).call(_this1, target1._targetId);
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
                _class_private_field_get(_this, _discoveredTargetsByTargetId).delete(event.targetId);
                _class_private_method_get(_this, _finishInitializationIfReady, finishInitializationIfReady).call(_assert_this_initialized(_this), event.targetId);
                var target = _class_private_field_get(_this, _availableTargetsByTargetId).get(event.targetId);
                if (target) {
                    _this.emit("targetGone" /* TargetManagerEvent.TargetGone */ , target);
                    _class_private_field_get(_this, _availableTargetsByTargetId).delete(event.targetId);
                }
            }
        });
        var _this2 = _assert_this_initialized(_this);
        _class_private_field_init(_assert_this_initialized(_this), _onAttachedToTarget, {
            writable: true,
            value: function() {
                var _ref = _async_to_generator(function(parentSession, event) {
                    var targetInfo, session, target;
                    return _ts_generator(this, function(_state) {
                        targetInfo = event.targetInfo;
                        session = _class_private_field_get(_this2, _connection).session(event.sessionId);
                        if (!session) {
                            throw new Error("Session ".concat(event.sessionId, " was not created."));
                        }
                        target = _class_private_field_get(_this2, _availableTargetsByTargetId).get(targetInfo.targetId);
                        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_2__.assert)(target, "Target ".concat(targetInfo.targetId, " is missing"));
                        session._setTarget(target);
                        _this2.setupAttachmentListeners(session);
                        _class_private_field_get(_this2, _availableTargetsBySessionId).set(session.id(), _class_private_field_get(_this2, _availableTargetsByTargetId).get(targetInfo.targetId));
                        parentSession.emit(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSessionEvent.Ready, session);
                        return [
                            2
                        ];
                    });
                });
                return function(parentSession, event) {
                    return _ref.apply(this, arguments);
                };
            }()
        });
        _class_private_field_set(_assert_this_initialized(_this), _connection, connection);
        _class_private_field_set(_assert_this_initialized(_this), _targetFilterCallback, targetFilterCallback);
        _class_private_field_set(_assert_this_initialized(_this), _targetFactory, targetFactory);
        _class_private_field_get(_this, _connection).on('Target.targetCreated', _class_private_field_get(_assert_this_initialized(_this), _onTargetCreated));
        _class_private_field_get(_this, _connection).on('Target.targetDestroyed', _class_private_field_get(_assert_this_initialized(_this), _onTargetDestroyed));
        _class_private_field_get(_this, _connection).on(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSessionEvent.SessionDetached, _class_private_field_get(_assert_this_initialized(_this), _onSessionDetached));
        _this.setupAttachmentListeners(_class_private_field_get(_assert_this_initialized(_this), _connection));
        return _this;
    }
    _create_class(FirefoxTargetManager, [
        {
            key: "setupAttachmentListeners",
            value: function setupAttachmentListeners(session) {
                var _this = this;
                var listener = function(event) {
                    return _class_private_field_get(_this, _onAttachedToTarget).call(_this, session, event);
                };
                (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_2__.assert)(!_class_private_field_get(this, _attachedToTargetListenersBySession).has(session));
                _class_private_field_get(this, _attachedToTargetListenersBySession).set(session, listener);
                session.on('Target.attachedToTarget', listener);
            }
        },
        {
            key: "removeSessionListeners",
            value: function removeSessionListeners(session) {
                if (_class_private_field_get(this, _attachedToTargetListenersBySession).has(session)) {
                    session.off('Target.attachedToTarget', _class_private_field_get(this, _attachedToTargetListenersBySession).get(session));
                    _class_private_field_get(this, _attachedToTargetListenersBySession).delete(session);
                }
            }
        },
        {
            key: "getAvailableTargets",
            value: function getAvailableTargets() {
                return _class_private_field_get(this, _availableTargetsByTargetId);
            }
        },
        {
            key: "getChildTargets",
            value: function getChildTargets(_target) {
                return new Set();
            }
        },
        {
            key: "dispose",
            value: function dispose() {
                _class_private_field_get(this, _connection).off('Target.targetCreated', _class_private_field_get(this, _onTargetCreated));
                _class_private_field_get(this, _connection).off('Target.targetDestroyed', _class_private_field_get(this, _onTargetDestroyed));
            }
        },
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
                                        filter: [
                                            {}
                                        ]
                                    })
                                ];
                            case 1:
                                _state.sent();
                                _class_private_field_set(_this, _targetsIdsForInit, new Set(_class_private_field_get(_this, _discoveredTargetsByTargetId).keys()));
                                return [
                                    4,
                                    _class_private_field_get(_this, _initializeDeferred).valueOrThrow()
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
        }
    ]);
    return FirefoxTargetManager;
} //# sourceMappingURL=FirefoxTargetManager.js.map
(_common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__.EventEmitter);
function finishInitializationIfReady(targetId) {
    _class_private_field_get(this, _targetsIdsForInit).delete(targetId);
    if (_class_private_field_get(this, _targetsIdsForInit).size === 0) {
        _class_private_field_get(this, _initializeDeferred).resolve();
    }
}


}),

}]);