"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_bidi_HTTPRequest_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/bidi/HTTPRequest.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BidiHTTPRequest: function() { return BidiHTTPRequest; },
  requests: function() { return requests; }
});
/* harmony import */var _api_HTTPRequest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/HTTPRequest.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/HTTPRequest.js");
/* harmony import */var _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Errors.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/Errors.js");
/* harmony import */var _HTTPResponse_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HTTPResponse.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/HTTPResponse.js");
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
var _a;



var requests = new WeakMap();
var _redirectChain = /*#__PURE__*/ new WeakMap(), _response = /*#__PURE__*/ new WeakMap(), _frame = /*#__PURE__*/ new WeakMap(), _request = /*#__PURE__*/ new WeakMap(), _initialize = /*#__PURE__*/ new WeakSet(), _hasInternalHeaderOverwrite = /*#__PURE__*/ new WeakMap(), _extraHTTPHeaders = /*#__PURE__*/ new WeakMap(), _userAgentHeaders = /*#__PURE__*/ new WeakMap(), _authenticationHandled = /*#__PURE__*/ new WeakMap(), _handleAuthentication = /*#__PURE__*/ new WeakMap();
/**
 * @internal
 */ var BidiHTTPRequest = /*#__PURE__*/ function(HTTPRequest1) {
    "use strict";
    _inherits(BidiHTTPRequest, HTTPRequest1);
    var _super = _create_super(BidiHTTPRequest);
    function BidiHTTPRequest(request, frame, redirect) {
        _class_call_check(this, BidiHTTPRequest);
        var _this;
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _initialize);
        _class_private_field_init(_assert_this_initialized(_this), _hasInternalHeaderOverwrite, {
            get: get_hasInternalHeaderOverwrite,
            set: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _extraHTTPHeaders, {
            get: get_extraHTTPHeaders,
            set: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _userAgentHeaders, {
            get: get_userAgentHeaders,
            set: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _redirectChain, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _response, {
            writable: true,
            value: null
        });
        _define_property(_assert_this_initialized(_this), "id", void 0);
        _class_private_field_init(_assert_this_initialized(_this), _frame, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _request, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _authenticationHandled, {
            writable: true,
            value: false
        });
        var _this1 = _assert_this_initialized(_this);
        _class_private_field_init(_assert_this_initialized(_this), _handleAuthentication, {
            writable: true,
            value: /*#__PURE__*/ _async_to_generator(function() {
                var credentials;
                return _ts_generator(this, function(_state) {
                    if (!_class_private_field_get(_this1, _frame)) {
                        return [
                            2
                        ];
                    }
                    credentials = _class_private_field_get(_this1, _frame).page()._credentials;
                    if (credentials && !_class_private_field_get(_this1, _authenticationHandled)) {
                        _class_private_field_set(_this1, _authenticationHandled, true);
                        void _class_private_field_get(_this1, _request).continueWithAuth({
                            action: 'provideCredentials',
                            credentials: {
                                type: 'password',
                                username: credentials.username,
                                password: credentials.password
                            }
                        });
                    } else {
                        void _class_private_field_get(_this1, _request).continueWithAuth({
                            action: 'cancel'
                        });
                    }
                    return [
                        2
                    ];
                });
            })
        });
        requests.set(request, _assert_this_initialized(_this));
        _this.interception.enabled = request.isBlocked;
        _class_private_field_set(_assert_this_initialized(_this), _request, request);
        _class_private_field_set(_assert_this_initialized(_this), _frame, frame);
        _class_private_field_set(_assert_this_initialized(_this), _redirectChain, redirect ? _class_private_field_get(redirect, _redirectChain) : []);
        _this.id = request.id;
        return _this;
    }
    _create_class(BidiHTTPRequest, [
        {
            key: "client",
            get: function get() {
                return _class_private_field_get(this, _frame).client;
            }
        },
        {
            key: "url",
            value: function url() {
                return _class_private_field_get(this, _request).url;
            }
        },
        {
            key: "resourceType",
            value: function resourceType() {
                if (!_class_private_field_get(this, _frame).page().browser().cdpSupported) {
                    throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation();
                }
                return (_class_private_field_get(this, _request).resourceType || 'other').toLowerCase();
            }
        },
        {
            key: "method",
            value: function method() {
                return _class_private_field_get(this, _request).method;
            }
        },
        {
            key: "postData",
            value: function postData() {
                if (!_class_private_field_get(this, _frame).page().browser().cdpSupported) {
                    throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation();
                }
                return _class_private_field_get(this, _request).postData;
            }
        },
        {
            key: "hasPostData",
            value: function hasPostData() {
                if (!_class_private_field_get(this, _frame).page().browser().cdpSupported) {
                    throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation();
                }
                return _class_private_field_get(this, _request).hasPostData;
            }
        },
        {
            key: "fetchPostData",
            value: function fetchPostData() {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation();
                    });
                })();
            }
        },
        {
            key: "headers",
            value: function headers() {
                var headers = {};
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _class_private_field_get(this, _request).headers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var header = _step.value;
                        headers[header.name.toLowerCase()] = header.value.value;
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
                return _object_spread({}, headers, _class_private_field_get(this, _extraHTTPHeaders), _class_private_field_get(this, _userAgentHeaders));
            }
        },
        {
            key: "response",
            value: function response() {
                return _class_private_field_get(this, _response);
            }
        },
        {
            key: "failure",
            value: function failure() {
                if (_class_private_field_get(this, _request).error === undefined) {
                    return null;
                }
                return {
                    errorText: _class_private_field_get(this, _request).error
                };
            }
        },
        {
            key: "isNavigationRequest",
            value: function isNavigationRequest() {
                return _class_private_field_get(this, _request).navigation !== undefined;
            }
        },
        {
            key: "initiator",
            value: function initiator() {
                return _class_private_field_get(this, _request).initiator;
            }
        },
        {
            key: "redirectChain",
            value: function redirectChain() {
                return _class_private_field_get(this, _redirectChain).slice();
            }
        },
        {
            key: "frame",
            value: function frame() {
                return _class_private_field_get(this, _frame);
            }
        },
        {
            key: "continue",
            value: function _continue(overrides, priority) {
                var _this = this;
                var _this1 = this, _superprop_get_continue = function() {
                    return _get(_get_prototype_of(BidiHTTPRequest.prototype), "continue", _this);
                };
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _superprop_get_continue().call(_this1, _object_spread({
                                        headers: _class_private_field_get(_this1, _hasInternalHeaderOverwrite) ? _this1.headers() : undefined
                                    }, overrides), priority)
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
            key: "_continue",
            value: function _continue() {
                var overrides = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                var _this = this;
                return _async_to_generator(function() {
                    var headers;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                headers = getBidiHeaders(overrides.headers);
                                _this.interception.handled = true;
                                return [
                                    4,
                                    _class_private_field_get(_this, _request).continueRequest({
                                        url: overrides.url,
                                        method: overrides.method,
                                        body: overrides.postData ? {
                                            type: 'base64',
                                            value: btoa(overrides.postData)
                                        } : undefined,
                                        headers: headers.length > 0 ? headers : undefined
                                    }).catch(function(error) {
                                        _this.interception.handled = false;
                                        return (0,_api_HTTPRequest_js__WEBPACK_IMPORTED_MODULE_0__.handleError)(error);
                                    })
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
            key: "_abort",
            value: function _abort() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this.interception.handled = true;
                                return [
                                    4,
                                    _class_private_field_get(_this, _request).failRequest().catch(function(error) {
                                        _this.interception.handled = false;
                                        throw error;
                                    })
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
            key: "_respond",
            value: function _respond(response, _priority) {
                var _this = this;
                return _async_to_generator(function() {
                    var parsedBody, headers, hasContentLength, status;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this.interception.handled = true;
                                if (response.body) {
                                    parsedBody = _api_HTTPRequest_js__WEBPACK_IMPORTED_MODULE_0__.HTTPRequest.getResponse(response.body);
                                }
                                headers = getBidiHeaders(response.headers);
                                hasContentLength = headers.some(function(header) {
                                    return header.name === 'content-length';
                                });
                                if (response.contentType) {
                                    headers.push({
                                        name: 'content-type',
                                        value: {
                                            type: 'string',
                                            value: response.contentType
                                        }
                                    });
                                }
                                if ((parsedBody === null || parsedBody === void 0 ? void 0 : parsedBody.contentLength) && !hasContentLength) {
                                    headers.push({
                                        name: 'content-length',
                                        value: {
                                            type: 'string',
                                            value: String(parsedBody.contentLength)
                                        }
                                    });
                                }
                                status = response.status || 200;
                                return [
                                    4,
                                    _class_private_field_get(_this, _request).provideResponse({
                                        statusCode: status,
                                        headers: headers.length > 0 ? headers : undefined,
                                        reasonPhrase: _api_HTTPRequest_js__WEBPACK_IMPORTED_MODULE_0__.STATUS_TEXTS[status],
                                        body: (parsedBody === null || parsedBody === void 0 ? void 0 : parsedBody.base64) ? {
                                            type: 'base64',
                                            value: parsedBody === null || parsedBody === void 0 ? void 0 : parsedBody.base64
                                        } : undefined
                                    }).catch(function(error) {
                                        _this.interception.handled = false;
                                        throw error;
                                    })
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
    ], [
        {
            key: "from",
            value: function from(bidiRequest, frame, redirect) {
                var request = new _a(bidiRequest, frame, redirect);
                _class_private_method_get(request, _initialize, initialize).call(request);
                return request;
            }
        }
    ]);
    return BidiHTTPRequest;
}(_api_HTTPRequest_js__WEBPACK_IMPORTED_MODULE_0__.HTTPRequest);
function initialize() {
    var _this = this;
    _class_private_field_get(this, _request).on('redirect', function(request) {
        var httpRequest = _a.from(request, _class_private_field_get(_this, _frame), _this);
        _class_private_field_get(_this, _redirectChain).push(_this);
        request.once('success', function() {
            _class_private_field_get(_this, _frame).page().trustedEmitter.emit("requestfinished" /* PageEvent.RequestFinished */ , httpRequest);
        });
        request.once('error', function() {
            _class_private_field_get(_this, _frame).page().trustedEmitter.emit("requestfailed" /* PageEvent.RequestFailed */ , httpRequest);
        });
        void httpRequest.finalizeInterceptions();
    });
    _class_private_field_get(this, _request).once('success', function(data) {
        _class_private_field_set(_this, _response, _HTTPResponse_js__WEBPACK_IMPORTED_MODULE_2__.BidiHTTPResponse.from(data, _this, _class_private_field_get(_this, _frame).page().browser().cdpSupported));
    });
    _class_private_field_get(this, _request).on('authenticate', _class_private_field_get(this, _handleAuthentication));
    _class_private_field_get(this, _frame).page().trustedEmitter.emit("request" /* PageEvent.Request */ , this);
    if (_class_private_field_get(this, _hasInternalHeaderOverwrite)) {
        var _this1 = this;
        this.interception.handlers.push(/*#__PURE__*/ _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _this1.continue({
                                headers: _this1.headers()
                            }, 0)
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        }));
    }
}
function get_hasInternalHeaderOverwrite() {
    return Boolean(Object.keys(_class_private_field_get(this, _extraHTTPHeaders)).length || Object.keys(_class_private_field_get(this, _userAgentHeaders)).length);
}
function get_extraHTTPHeaders() {
    var _$_class_private_field_get;
    var _class_private_field_get_page__extraHTTPHeaders;
    return (_class_private_field_get_page__extraHTTPHeaders = (_$_class_private_field_get = _class_private_field_get(this, _frame)) === null || _$_class_private_field_get === void 0 ? void 0 : _$_class_private_field_get.page()._extraHTTPHeaders) !== null && _class_private_field_get_page__extraHTTPHeaders !== void 0 ? _class_private_field_get_page__extraHTTPHeaders : {};
}
function get_userAgentHeaders() {
    var _$_class_private_field_get;
    var _class_private_field_get_page__userAgentHeaders;
    return (_class_private_field_get_page__userAgentHeaders = (_$_class_private_field_get = _class_private_field_get(this, _frame)) === null || _$_class_private_field_get === void 0 ? void 0 : _$_class_private_field_get.page()._userAgentHeaders) !== null && _class_private_field_get_page__userAgentHeaders !== void 0 ? _class_private_field_get_page__userAgentHeaders : {};
}
_a = BidiHTTPRequest;
function getBidiHeaders(rawHeaders) {
    var headers = [];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Object.entries(rawHeaders !== null && rawHeaders !== void 0 ? rawHeaders : [])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _sliced_to_array(_step.value, 2), name = _step_value[0], value = _step_value[1];
            if (!Object.is(value, undefined)) {
                var values = Array.isArray(value) ? value : [
                    value
                ];
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = values[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var value1 = _step1.value;
                        headers.push({
                            name: name.toLowerCase(),
                            value: {
                                type: 'string',
                                value: String(value1)
                            }
                        });
                    }
                } catch (err) {
                    _didIteratorError1 = true;
                    _iteratorError1 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                            _iterator1.return();
                        }
                    } finally{
                        if (_didIteratorError1) {
                            throw _iteratorError1;
                        }
                    }
                }
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
    return headers;
} //# sourceMappingURL=HTTPRequest.js.map


}),

}]);