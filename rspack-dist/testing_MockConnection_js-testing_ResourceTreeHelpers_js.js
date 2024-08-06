"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["testing_MockConnection_js-testing_ResourceTreeHelpers_js"], {
"./testing/MockConnection.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  clearAllMockConnectionResponseHandlers: function() { return clearAllMockConnectionResponseHandlers; },
  clearMockConnectionResponseHandler: function() { return clearMockConnectionResponseHandler; },
  describeWithMockConnection: function() { return describeWithMockConnection; },
  dispatchEvent: function() { return dispatchEvent; },
  getMockConnectionResponseHandler: function() { return getMockConnectionResponseHandler; },
  registerListenerOnOutgoingMessage: function() { return registerListenerOnOutgoingMessage; },
  setMockConnectionResponseHandler: function() { return setMockConnectionResponseHandler; }
});
/* harmony import */var _core_protocol_client_protocol_client_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/protocol_client/protocol_client.js */ "./core/protocol_client/protocol_client.js");
/* harmony import */var _DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ResourceTreeHelpers.js */ "./testing/ResourceTreeHelpers.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
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
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
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




// Note that we can't set the Function to the correct handler on the basis
// that we don't know which ProtocolCommand will be stored.
var responseMap = new Map();
var outgoingMessageListenerEntryMap = new Map();
function setMockConnectionResponseHandler(command, handler) {
    if (responseMap.get(command)) {
        throw new Error("Response handler already set for ".concat(command));
    }
    responseMap.set(command, handler);
}
function getMockConnectionResponseHandler(method) {
    return responseMap.get(method);
}
function clearMockConnectionResponseHandler(method) {
    responseMap.delete(method);
}
function clearAllMockConnectionResponseHandlers() {
    responseMap.clear();
}
function registerListenerOnOutgoingMessage(method) {
    var outgoingMessageListenerEntry = outgoingMessageListenerEntryMap.get(method);
    if (!outgoingMessageListenerEntry) {
        var resolve = function() {};
        var promise = new Promise(function(r) {
            resolve = r;
        });
        outgoingMessageListenerEntry = {
            promise: promise,
            resolve: resolve
        };
        outgoingMessageListenerEntryMap.set(method, outgoingMessageListenerEntry);
    }
    return outgoingMessageListenerEntry.promise;
}
function dispatchEvent(target, eventName) {
    for(var _len = arguments.length, payload = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
        payload[_key - 2] = arguments[_key];
    }
    var event = eventName;
    var _ProtocolClient_InspectorBackend_splitQualifiedName = _sliced_to_array(_core_protocol_client_protocol_client_js__WEBPACK_IMPORTED_MODULE_0__.InspectorBackend.splitQualifiedName(event), 1), domain = _ProtocolClient_InspectorBackend_splitQualifiedName[0];
    var registeredEvents = _core_protocol_client_protocol_client_js__WEBPACK_IMPORTED_MODULE_0__.InspectorBackend.inspectorBackend.getOrCreateEventParameterNamesForDomainForTesting(domain);
    var eventParameterNames = registeredEvents.get(event);
    if (!eventParameterNames) {
        // The event is not registered, fake-register with empty parameters.
        registeredEvents.set(event, []);
    }
    target.dispatch({
        method: event,
        params: payload[0]
    });
}
function enable() {
    return _enable.apply(this, arguments);
}
function _enable() {
    _enable = _async_to_generator(function() {
        var _ref, _ref_reset, reset;
        var _arguments = arguments;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _ref = _arguments.length > 0 && _arguments[0] !== void 0 ? _arguments[0] : {}, _ref_reset = _ref.reset, reset = _ref_reset === void 0 ? true : _ref_reset;
                    if (reset) {
                        responseMap.clear();
                    }
                    // The DevTools frontend code expects certain things to be in place
                    // before it can run. This function will ensure those things are
                    // minimally there.
                    return [
                        4,
                        (0,_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.initializeGlobalVars)({
                            reset: reset
                        })
                    ];
                case 1:
                    _state.sent();
                    (0,_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.setMockResourceTree)(true);
                    _core_protocol_client_protocol_client_js__WEBPACK_IMPORTED_MODULE_0__.InspectorBackend.Connection.setFactory(function() {
                        return new MockConnection();
                    });
                    return [
                        2
                    ];
            }
        });
    });
    return _enable.apply(this, arguments);
}
var MockConnection = /*#__PURE__*/ function(_ProtocolClient_InspectorBackend_Connection) {
    "use strict";
    _inherits(MockConnection, _ProtocolClient_InspectorBackend_Connection);
    var _super = _create_super(MockConnection);
    function MockConnection() {
        _class_call_check(this, MockConnection);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "messageCallback", void 0);
        return _this;
    }
    _create_class(MockConnection, [
        {
            key: "setOnMessage",
            value: function setOnMessage(callback) {
                this.messageCallback = callback;
            }
        },
        {
            key: "sendRawMessage",
            value: function sendRawMessage(message) {
                var _this = this;
                void _async_to_generator(function() {
                    var _this_messageCallback, outgoingMessage, entry, handler, result, errorMessage, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                outgoingMessage = JSON.parse(message);
                                entry = outgoingMessageListenerEntryMap.get(outgoingMessage.method);
                                if (entry) {
                                    outgoingMessageListenerEntryMap.delete(outgoingMessage.method);
                                    entry.resolve();
                                }
                                handler = responseMap.get(outgoingMessage.method);
                                if (!handler) {
                                    return [
                                        2
                                    ];
                                }
                                result = handler.call(undefined, outgoingMessage.params) || {};
                                if (!('then' in result)) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    result
                                ];
                            case 1:
                                result = _state.sent();
                                _state.label = 2;
                            case 2:
                                errorMessage = 'getError' in result ? result.getError() : undefined;
                                error = errorMessage ? {
                                    message: errorMessage,
                                    code: -32000
                                } : undefined;
                                (_this_messageCallback = _this.messageCallback) === null || _this_messageCallback === void 0 ? void 0 : _this_messageCallback.call(undefined, {
                                    id: outgoingMessage.id,
                                    method: outgoingMessage.method,
                                    result: result,
                                    error: error,
                                    sessionId: outgoingMessage.sessionId
                                });
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return MockConnection;
}(_core_protocol_client_protocol_client_js__WEBPACK_IMPORTED_MODULE_0__.InspectorBackend.Connection);
function disable() {
    return _disable.apply(this, arguments);
}
function _disable() {
    _disable = _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (outgoingMessageListenerEntryMap.size > 0) {
                        throw new Error('MockConnection still has pending listeners. All promises should be awaited.');
                    }
                    (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.resetTestDOM)();
                    return [
                        4,
                        (0,_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.deinitializeGlobalVars)()
                    ];
                case 1:
                    _state.sent();
                    // @ts-ignore Setting back to undefined as a hard reset.
                    _core_protocol_client_protocol_client_js__WEBPACK_IMPORTED_MODULE_0__.InspectorBackend.Connection.setFactory(undefined);
                    return [
                        2
                    ];
            }
        });
    });
    return _disable.apply(this, arguments);
}
function describeWithMockConnection(title, fn) {
    var opts = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
        reset: true
    };
    return describe(title, function() {
        beforeEach(/*#__PURE__*/ _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            enable(opts)
                        ];
                    case 1:
                        return [
                            2,
                            _state.sent()
                        ];
                }
            });
        }));
        fn.call(this);
        afterEach(disable);
    });
}
describeWithMockConnection.only = function(title, fn) {
    var opts = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
        reset: true
    };
    // eslint-disable-next-line mocha/no-exclusive-tests
    return describe.only(title, function() {
        beforeEach(/*#__PURE__*/ _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            enable(opts)
                        ];
                    case 1:
                        return [
                            2,
                            _state.sent()
                        ];
                }
            });
        }));
        fn.call(this);
        afterEach(disable);
    });
}; //# sourceMappingURL=MockConnection.js.map


}),
"./testing/ResourceTreeHelpers.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DOMAIN: function() { return DOMAIN; },
  FRAME_URL: function() { return FRAME_URL; },
  LOADER_ID: function() { return LOADER_ID; },
  MAIN_FRAME_ID: function() { return MAIN_FRAME_ID; },
  SECURITY_ORIGIN: function() { return SECURITY_ORIGIN; },
  activate: function() { return activate; },
  addChildFrame: function() { return addChildFrame; },
  createResource: function() { return createResource; },
  getInitializedResourceTreeModel: function() { return getInitializedResourceTreeModel; },
  getMainFrame: function() { return getMainFrame; },
  navigate: function() { return navigate; },
  setMockResourceTree: function() { return setMockResourceTree; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MockConnection.js */ "./testing/MockConnection.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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



var LOADER_ID = 'LOADER_ID';
var MAIN_FRAME_ID = 'main';
var DOMAIN = 'example.com';
var SECURITY_ORIGIN = "https://".concat(DOMAIN);
var FRAME_URL = "".concat(SECURITY_ORIGIN, "/");
var childFrameId = 0;
var FRAME = {
    url: FRAME_URL,
    loaderId: LOADER_ID,
    domainAndRegistry: DOMAIN,
    securityOrigin: SECURITY_ORIGIN,
    mimeType: 'text/html',
    secureContextType: "Secure" /* Protocol.Page.SecureContextType.Secure */ ,
    crossOriginIsolatedContextType: "Isolated" /* Protocol.Page.CrossOriginIsolatedContextType.Isolated */ ,
    gatedAPIFeatures: []
};
var MAIN_FRAME = _object_spread_props(_object_spread({}, FRAME), {
    id: MAIN_FRAME_ID
});
function setMockResourceTree(shouldMock) {
    if (shouldMock) {
        (0,_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('Page.getResourceTree', function() {
            return {
                frameTree: {
                    frame: MAIN_FRAME,
                    resources: []
                }
            };
        });
    } else {
        (0,_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.clearMockConnectionResponseHandler)('Page.getResourceTree');
    }
}
function getInitializedResourceTreeModel(target) {
    return _getInitializedResourceTreeModel.apply(this, arguments);
}
function _getInitializedResourceTreeModel() {
    _getInitializedResourceTreeModel = _async_to_generator(function(target) {
        var resourceTreeModel;
        return _ts_generator(this, function(_state) {
            resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeModel);
            return [
                2,
                resourceTreeModel.cachedResourcesLoaded() ? resourceTreeModel : resourceTreeModel.once(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.CachedResourcesLoaded)
            ];
        });
    });
    return _getInitializedResourceTreeModel.apply(this, arguments);
}
function getEffectivePayload(id, base, framePayload) {
    var effectivePayload = _object_spread_props(_object_spread({}, base), {
        id: id
    });
    if (framePayload) {
        if (framePayload.url) {
            var _framePayload, _framePayload1;
            var url = new URL(framePayload.url);
            var _domainAndRegistry;
            (_domainAndRegistry = (_framePayload = framePayload).domainAndRegistry) !== null && _domainAndRegistry !== void 0 ? _domainAndRegistry : _framePayload.domainAndRegistry = url.hostname;
            var _securityOrigin;
            (_securityOrigin = (_framePayload1 = framePayload).securityOrigin) !== null && _securityOrigin !== void 0 ? _securityOrigin : _framePayload1.securityOrigin = url.origin;
        }
        Object.assign(effectivePayload, framePayload);
    }
    return effectivePayload;
}
function getMainFrame(target, framePayload) {
    var resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeModel);
    if (resourceTreeModel.mainFrame) {
        return resourceTreeModel.mainFrame;
    }
    resourceTreeModel.frameAttached(MAIN_FRAME_ID, null);
    var mainFrame = resourceTreeModel.mainFrame;
    mainFrame.navigate(getEffectivePayload(MAIN_FRAME_ID, FRAME, framePayload));
    return mainFrame;
}
function addChildFrame(target, framePayload) {
    return _addChildFrame.apply(this, arguments);
}
function _addChildFrame() {
    _addChildFrame = _async_to_generator(function(target, framePayload) {
        var resourceTreeModel, childFrame;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        getInitializedResourceTreeModel(target)
                    ];
                case 1:
                    resourceTreeModel = _state.sent();
                    getMainFrame(target);
                    childFrame = resourceTreeModel.frameAttached("CHILD_FRAME_".concat(++childFrameId), MAIN_FRAME_ID);
                    assert.exists(childFrame);
                    if (framePayload) {
                        navigate(childFrame, _object_spread({}, FRAME, framePayload));
                    }
                    return [
                        2,
                        childFrame
                    ];
            }
        });
    });
    return _addChildFrame.apply(this, arguments);
}
function createResource(frame, networkScriptUrl, mimeType, content) {
    var resource = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Resource.Resource(frame.resourceTreeModel(), null, networkScriptUrl, networkScriptUrl, MAIN_FRAME_ID, null, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType.fromMimeType(mimeType), mimeType, null, content.length);
    frame.addResource(resource);
    return resource;
}
function navigate(frame, framePayload) {
    var type = arguments.length > 2 && arguments[2] !== void 0 /* Protocol.Page.NavigationType.Navigation */  ? arguments[2] : "Navigation";
    var effectivePayload = getEffectivePayload(frame.id, FRAME, framePayload);
    frame.resourceTreeModel().frameNavigated(effectivePayload, type);
}
function activate(target) {
    var resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeModel);
    var frame = getMainFrame(target);
    sinon.stub(frame, 'isPrimaryFrame').returns(true);
    resourceTreeModel.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.PrimaryPageChanged, {
        frame: frame,
        type: "Activation" /* SDK.ResourceTreeModel.PrimaryPageChangeType.Activation */ 
    });
} //# sourceMappingURL=ResourceTreeHelpers.js.map


}),

}]);