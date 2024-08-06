"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_bidi_Connection_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/bidi/Connection.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BidiConnection: function() { return BidiConnection; }
});
/* harmony import */var _common_CallbackRegistry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/CallbackRegistry.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/CallbackRegistry.js");
/* harmony import */var _common_Debug_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Debug.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/Debug.js");
/* harmony import */var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/EventEmitter.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/EventEmitter.js");
/* harmony import */var _common_util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */var _util_assert_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/assert.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js");
/* harmony import */var _CDPSession_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CDPSession.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/CDPSession.js");
/**
 * @license
 * Copyright 2017 Google Inc.
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
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






var debugProtocolSend = (0,_common_Debug_js__WEBPACK_IMPORTED_MODULE_1__.debug)('puppeteer:webDriverBiDi:SEND ►');
var debugProtocolReceive = (0,_common_Debug_js__WEBPACK_IMPORTED_MODULE_1__.debug)('puppeteer:webDriverBiDi:RECV ◀');
var _url = /*#__PURE__*/ new WeakMap(), _transport = /*#__PURE__*/ new WeakMap(), _delay = /*#__PURE__*/ new WeakMap(), _timeout = /*#__PURE__*/ new WeakMap(), _closed = /*#__PURE__*/ new WeakMap(), _callbacks = /*#__PURE__*/ new WeakMap(), _emitters = /*#__PURE__*/ new WeakMap();
/**
 * @internal
 */ var BidiConnection = /*#__PURE__*/ function(EventEmitter) {
    "use strict";
    _inherits(BidiConnection, EventEmitter);
    var _super = _create_super(BidiConnection);
    function BidiConnection(url, transport) {
        var delay = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, timeout = arguments.length > 3 ? arguments[3] : void 0;
        _class_call_check(this, BidiConnection);
        var _this;
        _this = _super.call(this);
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
            value: 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _closed, {
            writable: true,
            value: false
        });
        _class_private_field_init(_assert_this_initialized(_this), _callbacks, {
            writable: true,
            value: new _common_CallbackRegistry_js__WEBPACK_IMPORTED_MODULE_0__.CallbackRegistry()
        });
        _class_private_field_init(_assert_this_initialized(_this), _emitters, {
            writable: true,
            value: []
        });
        _class_private_field_set(_assert_this_initialized(_this), _url, url);
        _class_private_field_set(_assert_this_initialized(_this), _delay, delay);
        _class_private_field_set(_assert_this_initialized(_this), _timeout, timeout !== null && timeout !== void 0 ? timeout : 180000);
        _class_private_field_set(_assert_this_initialized(_this), _transport, transport);
        _class_private_field_get(_this, _transport).onmessage = _this.onMessage.bind(_assert_this_initialized(_this));
        _class_private_field_get(_this, _transport).onclose = _this.unbind.bind(_assert_this_initialized(_this));
        return _this;
    }
    _create_class(BidiConnection, [
        {
            key: "closed",
            get: function get() {
                return _class_private_field_get(this, _closed);
            }
        },
        {
            key: "url",
            get: function get() {
                return _class_private_field_get(this, _url);
            }
        },
        {
            key: "pipeTo",
            value: function pipeTo(emitter) {
                _class_private_field_get(this, _emitters).push(emitter);
            }
        },
        {
            key: "emit",
            value: function emit(type, event) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _class_private_field_get(this, _emitters)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var emitter = _step.value;
                        emitter.emit(type, event);
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
                return _get(_get_prototype_of(BidiConnection.prototype), "emit", this).call(this, type, event);
            }
        },
        {
            key: "send",
            value: function send(method, params, timeout) {
                var _this = this;
                (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_4__.assert)(!_class_private_field_get(this, _closed), 'Protocol error: Connection closed.');
                return _class_private_field_get(this, _callbacks).create(method, timeout !== null && timeout !== void 0 ? timeout : _class_private_field_get(this, _timeout), function(id) {
                    var stringifiedMessage = JSON.stringify({
                        id: id,
                        method: method,
                        params: params
                    });
                    debugProtocolSend(stringifiedMessage);
                    _class_private_field_get(_this, _transport).send(stringifiedMessage);
                });
            }
        },
        {
            key: "onMessage",
            value: /**
     * @internal
     */ function onMessage(message) {
                var _this = this;
                return _async_to_generator(function() {
                    var object, _BidiCdpSession_sessions_get;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!_class_private_field_get(_this, _delay)) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    new Promise(function(f) {
                                        return setTimeout(f, _class_private_field_get(_this, _delay));
                                    })
                                ];
                            case 1:
                                _state.sent();
                                _state.label = 2;
                            case 2:
                                debugProtocolReceive(message);
                                object = JSON.parse(message);
                                if ('type' in object) {
                                    switch(object.type){
                                        case 'success':
                                            _class_private_field_get(_this, _callbacks).resolve(object.id, object);
                                            return [
                                                2
                                            ];
                                        case 'error':
                                            if (object.id === null) {
                                                break;
                                            }
                                            _class_private_field_get(_this, _callbacks).reject(object.id, createProtocolError(object), "".concat(object.error, ": ").concat(object.message));
                                            return [
                                                2
                                            ];
                                        case 'event':
                                            if (isCdpEvent(object)) {
                                                ;
                                                (_BidiCdpSession_sessions_get = _CDPSession_js__WEBPACK_IMPORTED_MODULE_5__.BidiCdpSession.sessions.get(object.params.session)) === null || _BidiCdpSession_sessions_get === void 0 ? void 0 : _BidiCdpSession_sessions_get.emit(object.params.event, object.params.params);
                                                return [
                                                    2
                                                ];
                                            }
                                            // SAFETY: We know the method and parameter still match here.
                                            _this.emit(object.method, object.params);
                                            return [
                                                2
                                            ];
                                    }
                                }
                                // Even if the response in not in BiDi protocol format but `id` is provided, reject
                                // the callback. This can happen if the endpoint supports CDP instead of BiDi.
                                if ('id' in object) {
                                    _class_private_field_get(_this, _callbacks).reject(object.id, "Protocol Error. Message is not in BiDi protocol format: '".concat(message, "'"), object.message);
                                }
                                (0,_common_util_js__WEBPACK_IMPORTED_MODULE_3__.debugError)(object);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            /**
     * Unbinds the connection, but keeps the transport open. Useful when the transport will
     * be reused by other connection e.g. with different protocol.
     * @internal
     */ key: "unbind",
            value: function unbind() {
                if (_class_private_field_get(this, _closed)) {
                    return;
                }
                _class_private_field_set(this, _closed, true);
                // Both may still be invoked and produce errors
                _class_private_field_get(this, _transport).onmessage = function() {};
                _class_private_field_get(this, _transport).onclose = function() {};
                _class_private_field_get(this, _callbacks).clear();
            }
        },
        {
            /**
     * Unbinds the connection and closes the transport.
     */ key: "dispose",
            value: function dispose() {
                this.unbind();
                _class_private_field_get(this, _transport).close();
            }
        },
        {
            key: "getPendingProtocolErrors",
            value: function getPendingProtocolErrors() {
                return _class_private_field_get(this, _callbacks).getPendingProtocolErrors();
            }
        }
    ]);
    return BidiConnection;
}(_common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_2__.EventEmitter);
/**
 * @internal
 */ function createProtocolError(object) {
    var message = "".concat(object.error, " ").concat(object.message);
    if (object.stacktrace) {
        message += " ".concat(object.stacktrace);
    }
    return message;
}
function isCdpEvent(event) {
    return event.method.startsWith('cdp.');
} //# sourceMappingURL=Connection.js.map


}),

}]);