"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_bidi_BidiOverCdp_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/bidi/BidiOverCdp.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  connectBidiOverCdp: function() { return connectBidiOverCdp; }
});
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chromium-bidi/lib/cjs/bidiMapper/BidiMapper.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */var _common_Debug_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Debug.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/Debug.js");
/* harmony import */var _common_Errors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/Errors.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/Errors.js");
/* harmony import */var _Connection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Connection.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/Connection.js");
/**
 * @license
 * Copyright 2023 Google Inc.
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




var bidiServerLogger = function(prefix) {
    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        args[_key - 1] = arguments[_key];
    }
    (0,_common_Debug_js__WEBPACK_IMPORTED_MODULE_1__.debug)("bidi:".concat(prefix))(args);
};
/**
 * @internal
 */ function connectBidiOverCdp(cdp, options) {
    return _connectBidiOverCdp.apply(this, arguments);
}
function _connectBidiOverCdp() {
    _connectBidiOverCdp = _async_to_generator(function(cdp, options) {
        var transportBiDi, cdpConnectionAdapter, pptrTransport, pptrBiDiConnection, bidiServer;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    transportBiDi = new NoOpTransport();
                    cdpConnectionAdapter = new CdpConnectionAdapter(cdp);
                    pptrTransport = {
                        send: function send(message) {
                            // Forwards a BiDi command sent by Puppeteer to the input of the BidiServer.
                            transportBiDi.emitMessage(JSON.parse(message));
                        },
                        close: function close() {
                            bidiServer.close();
                            cdpConnectionAdapter.close();
                            cdp.dispose();
                        },
                        onmessage: function onmessage(_message) {
                        // The method is overridden by the Connection.
                        }
                    };
                    transportBiDi.on('bidiResponse', function(message) {
                        // Forwards a BiDi event sent by BidiServer to Puppeteer.
                        pptrTransport.onmessage(JSON.stringify(message));
                    });
                    pptrBiDiConnection = new _Connection_js__WEBPACK_IMPORTED_MODULE_3__.BidiConnection(cdp.url(), pptrTransport, cdp.delay, cdp.timeout);
                    return [
                        4,
                        Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chromium-bidi/lib/cjs/bidiMapper/BidiMapper.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(transportBiDi, cdpConnectionAdapter, cdpConnectionAdapter.browserClient(), /* selfTargetId= */ '', _object_spread({
                            // Override Mapper's `unhandledPromptBehavior` default value of `dismiss` to
                            // `ignore`, so that user can handle the prompt instead of just closing it.
                            unhandledPromptBehavior: {
                                default: "ignore" /* Bidi.Session.UserPromptHandlerType.Ignore */ 
                            }
                        }, options), undefined, bidiServerLogger)
                    ];
                case 1:
                    bidiServer = _state.sent();
                    return [
                        2,
                        pptrBiDiConnection
                    ];
            }
        });
    });
    return _connectBidiOverCdp.apply(this, arguments);
}
var _cdp = /*#__PURE__*/ new WeakMap(), _adapters = /*#__PURE__*/ new WeakMap(), _browserCdpConnection = /*#__PURE__*/ new WeakMap();
/**
 * Manages CDPSessions for BidiServer.
 * @internal
 */ var CdpConnectionAdapter = /*#__PURE__*/ function() {
    "use strict";
    function CdpConnectionAdapter(cdp) {
        _class_call_check(this, CdpConnectionAdapter);
        _class_private_field_init(this, _cdp, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _adapters, {
            writable: true,
            value: new Map()
        });
        _class_private_field_init(this, _browserCdpConnection, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _cdp, cdp);
        _class_private_field_set(this, _browserCdpConnection, new CDPClientAdapter(cdp));
    }
    _create_class(CdpConnectionAdapter, [
        {
            key: "browserClient",
            value: function browserClient() {
                return _class_private_field_get(this, _browserCdpConnection);
            }
        },
        {
            key: "getCdpClient",
            value: function getCdpClient(id) {
                var session = _class_private_field_get(this, _cdp).session(id);
                if (!session) {
                    throw new Error("Unknown CDP session with id ".concat(id));
                }
                if (!_class_private_field_get(this, _adapters).has(session)) {
                    var adapter = new CDPClientAdapter(session, id, _class_private_field_get(this, _browserCdpConnection));
                    _class_private_field_get(this, _adapters).set(session, adapter);
                    return adapter;
                }
                return _class_private_field_get(this, _adapters).get(session);
            }
        },
        {
            key: "close",
            value: function close() {
                _class_private_field_get(this, _browserCdpConnection).close();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _class_private_field_get(this, _adapters).values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var adapter = _step.value;
                        adapter.close();
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
        }
    ]);
    return CdpConnectionAdapter;
}();
var _closed = /*#__PURE__*/ new WeakMap(), _client = /*#__PURE__*/ new WeakMap(), _browserClient = /*#__PURE__*/ new WeakMap(), _forwardMessage = /*#__PURE__*/ new WeakMap();
/**
 * Wrapper on top of CDPSession/CDPConnection to satisfy CDP interface that
 * BidiServer needs.
 *
 * @internal
 */ var CDPClientAdapter = /*#__PURE__*/ function(_BidiMapper_EventEmitter) {
    "use strict";
    _inherits(CDPClientAdapter, _BidiMapper_EventEmitter);
    var _super = _create_super(CDPClientAdapter);
    function CDPClientAdapter(client, sessionId, browserClient) {
        _class_call_check(this, CDPClientAdapter);
        var _this;
        _this = _super.call(this);
        _class_private_field_init(_assert_this_initialized(_this), _closed, {
            writable: true,
            value: false
        });
        _class_private_field_init(_assert_this_initialized(_this), _client, {
            writable: true,
            value: void 0
        });
        _define_property(_assert_this_initialized(_this), "sessionId", undefined);
        _class_private_field_init(_assert_this_initialized(_this), _browserClient, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _forwardMessage, {
            writable: true,
            value: function(method, event) {
                _this.emit(method, event);
            }
        });
        _class_private_field_set(_assert_this_initialized(_this), _client, client);
        _this.sessionId = sessionId;
        _class_private_field_set(_assert_this_initialized(_this), _browserClient, browserClient);
        _class_private_field_get(_this, _client).on('*', _class_private_field_get(_assert_this_initialized(_this), _forwardMessage));
        return _this;
    }
    _create_class(CDPClientAdapter, [
        {
            key: "browserClient",
            value: function browserClient() {
                return _class_private_field_get(this, _browserClient);
            }
        },
        {
            key: "sendCommand",
            value: function sendCommand(method) {
                for(var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    params[_key - 1] = arguments[_key];
                }
                var _this = this;
                return _async_to_generator(function() {
                    var _$_class_private_field_get, err;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (_class_private_field_get(_this, _closed)) {
                                    return [
                                        2
                                    ];
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
                                    (_$_class_private_field_get = _class_private_field_get(_this, _client)).send.apply(_$_class_private_field_get, [
                                        method
                                    ].concat(_to_consumable_array(params)))
                                ];
                            case 2:
                                return [
                                    2,
                                    _state.sent()
                                ];
                            case 3:
                                err = _state.sent();
                                if (_class_private_field_get(_this, _closed)) {
                                    return [
                                        2
                                    ];
                                }
                                throw err;
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
            key: "close",
            value: function close() {
                _class_private_field_get(this, _client).off('*', _class_private_field_get(this, _forwardMessage));
                _class_private_field_set(this, _closed, true);
            }
        },
        {
            key: "isCloseError",
            value: function isCloseError(error) {
                return _instanceof(error, _common_Errors_js__WEBPACK_IMPORTED_MODULE_2__.TargetCloseError);
            }
        }
    ]);
    return CDPClientAdapter;
}(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chromium-bidi/lib/cjs/bidiMapper/BidiMapper.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var _onMessage = /*#__PURE__*/ new WeakMap();
/**
 * This transport is given to the BiDi server instance and allows Puppeteer
 * to send and receive commands to the BiDiServer.
 * @internal
 */ var NoOpTransport = /*#__PURE__*/ function(_BidiMapper_EventEmitter) {
    "use strict";
    _inherits(NoOpTransport, _BidiMapper_EventEmitter);
    var _super = _create_super(NoOpTransport);
    function NoOpTransport() {
        _class_call_check(this, NoOpTransport);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_field_init(_assert_this_initialized(_this), _onMessage, {
            writable: true,
            value: function() {
                var _ref = _async_to_generator(function(_m) {
                    return _ts_generator(this, function(_state) {
                        return [
                            2
                        ];
                    });
                });
                return function(_m) {
                    return _ref.apply(this, arguments);
                };
            }()
        });
        return _this;
    }
    _create_class(NoOpTransport, [
        {
            key: "emitMessage",
            value: function emitMessage(message) {
                void _class_private_field_get(this, _onMessage).call(this, message);
            }
        },
        {
            key: "setOnMessage",
            value: function setOnMessage(onMessage) {
                _class_private_field_set(this, _onMessage, onMessage);
            }
        },
        {
            key: "sendMessage",
            value: function sendMessage(message) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        _this.emit('bidiResponse', message);
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "close",
            value: function close() {
                _class_private_field_set(this, _onMessage, function() {
                    var _ref = _async_to_generator(function(_m) {
                        return _ts_generator(this, function(_state) {
                            return [
                                2
                            ];
                        });
                    });
                    return function(_m) {
                        return _ref.apply(this, arguments);
                    };
                }());
            }
        }
    ]);
    return NoOpTransport;
} //# sourceMappingURL=BidiOverCdp.js.map
(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chromium-bidi/lib/cjs/bidiMapper/BidiMapper.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));


}),

}]);