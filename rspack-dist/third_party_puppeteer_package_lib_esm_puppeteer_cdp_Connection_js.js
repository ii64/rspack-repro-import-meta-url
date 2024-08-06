"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_cdp_Connection_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Connection.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Connection: function() { return Connection; },
  isTargetClosedError: function() { return isTargetClosedError; }
});
/* harmony import */var _api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/CDPSession.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/CDPSession.js");
/* harmony import */var _common_CallbackRegistry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/CallbackRegistry.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/CallbackRegistry.js");
/* harmony import */var _common_Debug_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/Debug.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/Debug.js");
/* harmony import */var _common_Errors_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/Errors.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/Errors.js");
/* harmony import */var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/EventEmitter.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/EventEmitter.js");
/* harmony import */var _util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/ErrorLike.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/ErrorLike.js");
/* harmony import */var _CDPSession_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CDPSession.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/CDPSession.js");
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







var debugProtocolSend = (0,_common_Debug_js__WEBPACK_IMPORTED_MODULE_2__.debug)('puppeteer:protocol:SEND ►');
var debugProtocolReceive = (0,_common_Debug_js__WEBPACK_IMPORTED_MODULE_2__.debug)('puppeteer:protocol:RECV ◀');
var _url = /*#__PURE__*/ new WeakMap(), _transport = /*#__PURE__*/ new WeakMap(), _delay = /*#__PURE__*/ new WeakMap(), _timeout = /*#__PURE__*/ new WeakMap(), _sessions = /*#__PURE__*/ new WeakMap(), _closed = /*#__PURE__*/ new WeakMap(), _manuallyAttached = /*#__PURE__*/ new WeakMap(), _callbacks = /*#__PURE__*/ new WeakMap(), _onClose = /*#__PURE__*/ new WeakSet();
/**
 * @public
 */ var Connection = /*#__PURE__*/ function(EventEmitter) {
    "use strict";
    _inherits(Connection, EventEmitter);
    var _super = _create_super(Connection);
    function Connection(url, transport) {
        var delay = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, timeout = arguments.length > 3 ? arguments[3] : void 0;
        _class_call_check(this, Connection);
        var _this;
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _onClose);
        _class_private_field_init(_assert_this_initialized(_this), _url, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _transport, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _delay, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _timeout, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _sessions, {
            writable: true,
            value: new Map()
        });
        _class_private_field_init(_assert_this_initialized(_this), _closed, {
            writable: true,
            value: false
        });
        _class_private_field_init(_assert_this_initialized(_this), _manuallyAttached, {
            writable: true,
            value: new Set()
        });
        _class_private_field_init(_assert_this_initialized(_this), _callbacks, {
            writable: true,
            value: new _common_CallbackRegistry_js__WEBPACK_IMPORTED_MODULE_1__.CallbackRegistry()
        });
        _class_private_field_set(_assert_this_initialized(_this), _url, url);
        _class_private_field_set(_assert_this_initialized(_this), _delay, delay);
        _class_private_field_set(_assert_this_initialized(_this), _timeout, timeout !== null && timeout !== void 0 ? timeout : 180000);
        _class_private_field_set(_assert_this_initialized(_this), _transport, transport);
        _class_private_field_get(_this, _transport).onmessage = _this.onMessage.bind(_assert_this_initialized(_this));
        _class_private_field_get(_this, _transport).onclose = _class_private_method_get(_this, _onClose, onClose).bind(_assert_this_initialized(_this));
        return _this;
    }
    _create_class(Connection, [
        {
            key: "delay",
            get: /**
     * @internal
     */ function get() {
                return _class_private_field_get(this, _delay);
            }
        },
        {
            key: "timeout",
            get: function get() {
                return _class_private_field_get(this, _timeout);
            }
        },
        {
            key: "_closed",
            get: /**
     * @internal
     */ function get() {
                return _class_private_field_get(this, _closed);
            }
        },
        {
            key: "_sessions",
            get: /**
     * @internal
     */ function get() {
                return _class_private_field_get(this, _sessions);
            }
        },
        {
            /**
     * @param sessionId - The session id
     * @returns The current CDP session if it exists
     */ key: "session",
            value: function session(sessionId) {
                return _class_private_field_get(this, _sessions).get(sessionId) || null;
            }
        },
        {
            key: "url",
            value: function url() {
                return _class_private_field_get(this, _url);
            }
        },
        {
            key: "send",
            value: function send(method, params, options) {
                // There is only ever 1 param arg passed, but the Protocol defines it as an
                // array of 0 or 1 items See this comment:
                // https://github.com/ChromeDevTools/devtools-protocol/pull/113#issuecomment-412603285
                // which explains why the protocol defines the params this way for better
                // type-inference.
                // So now we check if there are any params or not and deal with them accordingly.
                return this._rawSend(_class_private_field_get(this, _callbacks), method, params, undefined, options);
            }
        },
        {
            /**
     * @internal
     */ key: "_rawSend",
            value: function _rawSend(callbacks, method, params, sessionId, options) {
                var _this = this;
                if (_class_private_field_get(this, _closed)) {
                    return Promise.reject(new Error('Protocol error: Connection closed.'));
                }
                var _options_timeout;
                return callbacks.create(method, (_options_timeout = options === null || options === void 0 ? void 0 : options.timeout) !== null && _options_timeout !== void 0 ? _options_timeout : _class_private_field_get(this, _timeout), function(id) {
                    var stringifiedMessage = JSON.stringify({
                        method: method,
                        params: params,
                        id: id,
                        sessionId: sessionId
                    });
                    debugProtocolSend(stringifiedMessage);
                    _class_private_field_get(_this, _transport).send(stringifiedMessage);
                });
            }
        },
        {
            key: "closeBrowser",
            value: /**
     * @internal
     */ function closeBrowser() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.send('Browser.close')
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
            key: "onMessage",
            value: /**
     * @internal
     */ function onMessage(message) {
                var _this = this;
                return _async_to_generator(function() {
                    var object, sessionId, session, parentSession, session1, parentSession1, session2;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!_class_private_field_get(_this, _delay)) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    new Promise(function(r) {
                                        return setTimeout(r, _class_private_field_get(_this, _delay));
                                    })
                                ];
                            case 1:
                                _state.sent();
                                _state.label = 2;
                            case 2:
                                debugProtocolReceive(message);
                                object = JSON.parse(message);
                                if (object.method === 'Target.attachedToTarget') {
                                    sessionId = object.params.sessionId;
                                    session = new _CDPSession_js__WEBPACK_IMPORTED_MODULE_6__.CdpCDPSession(_this, object.params.targetInfo.type, sessionId, object.sessionId);
                                    _class_private_field_get(_this, _sessions).set(sessionId, session);
                                    _this.emit(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSessionEvent.SessionAttached, session);
                                    parentSession = _class_private_field_get(_this, _sessions).get(object.sessionId);
                                    if (parentSession) {
                                        parentSession.emit(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSessionEvent.SessionAttached, session);
                                    }
                                } else if (object.method === 'Target.detachedFromTarget') {
                                    session1 = _class_private_field_get(_this, _sessions).get(object.params.sessionId);
                                    if (session1) {
                                        session1._onClosed();
                                        _class_private_field_get(_this, _sessions).delete(object.params.sessionId);
                                        _this.emit(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSessionEvent.SessionDetached, session1);
                                        parentSession1 = _class_private_field_get(_this, _sessions).get(object.sessionId);
                                        if (parentSession1) {
                                            parentSession1.emit(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSessionEvent.SessionDetached, session1);
                                        }
                                    }
                                }
                                if (object.sessionId) {
                                    session2 = _class_private_field_get(_this, _sessions).get(object.sessionId);
                                    if (session2) {
                                        session2._onMessage(object);
                                    }
                                } else if (object.id) {
                                    if (object.error) {
                                        _class_private_field_get(_this, _callbacks).reject(object.id, (0,_util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_5__.createProtocolErrorMessage)(object), object.error.message);
                                    } else {
                                        _class_private_field_get(_this, _callbacks).resolve(object.id, object.result);
                                    }
                                } else {
                                    _this.emit(object.method, object.params);
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
            key: "dispose",
            value: function dispose() {
                _class_private_method_get(this, _onClose, onClose).call(this);
                _class_private_field_get(this, _transport).close();
            }
        },
        {
            /**
     * @internal
     */ key: "isAutoAttached",
            value: function isAutoAttached(targetId) {
                return !_class_private_field_get(this, _manuallyAttached).has(targetId);
            }
        },
        {
            key: "_createSession",
            value: /**
     * @internal
     */ function _createSession(targetInfo) {
                var isAutoAttachEmulated = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                var _this = this;
                return _async_to_generator(function() {
                    var sessionId, session;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!isAutoAttachEmulated) {
                                    _class_private_field_get(_this, _manuallyAttached).add(targetInfo.targetId);
                                }
                                return [
                                    4,
                                    _this.send('Target.attachToTarget', {
                                        targetId: targetInfo.targetId,
                                        flatten: true
                                    })
                                ];
                            case 1:
                                sessionId = _state.sent().sessionId;
                                _class_private_field_get(_this, _manuallyAttached).delete(targetInfo.targetId);
                                session = _class_private_field_get(_this, _sessions).get(sessionId);
                                if (!session) {
                                    throw new Error('CDPSession creation failed.');
                                }
                                return [
                                    2,
                                    session
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "createSession",
            value: /**
     * @param targetInfo - The target info
     * @returns The CDP session that is created
     */ function createSession(targetInfo) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this._createSession(targetInfo, false)
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
     * @internal
     */ key: "getPendingProtocolErrors",
            value: function getPendingProtocolErrors() {
                var _result;
                var result = [];
                (_result = result).push.apply(_result, _to_consumable_array(_class_private_field_get(this, _callbacks).getPendingProtocolErrors()));
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _class_private_field_get(this, _sessions).values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var session = _step.value;
                        var _result1;
                        (_result1 = result).push.apply(_result1, _to_consumable_array(session.getPendingProtocolErrors()));
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
        }
    ], [
        {
            key: "fromSession",
            value: function fromSession(session) {
                return session.connection();
            }
        }
    ]);
    return Connection;
}(_common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_4__.EventEmitter);
function onClose() {
    if (_class_private_field_get(this, _closed)) {
        return;
    }
    _class_private_field_set(this, _closed, true);
    _class_private_field_get(this, _transport).onmessage = undefined;
    _class_private_field_get(this, _transport).onclose = undefined;
    _class_private_field_get(this, _callbacks).clear();
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = _class_private_field_get(this, _sessions).values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var session = _step.value;
            session._onClosed();
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
    _class_private_field_get(this, _sessions).clear();
    this.emit(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSessionEvent.Disconnected, undefined);
}
/**
 * @internal
 */ function isTargetClosedError(error) {
    return _instanceof(error, _common_Errors_js__WEBPACK_IMPORTED_MODULE_3__.TargetCloseError);
} //# sourceMappingURL=Connection.js.map


}),

}]);