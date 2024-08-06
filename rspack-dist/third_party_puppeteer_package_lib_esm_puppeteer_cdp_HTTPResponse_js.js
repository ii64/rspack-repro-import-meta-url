"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_cdp_HTTPResponse_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/api/HTTPResponse.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  HTTPResponse: function() { return HTTPResponse; }
});
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * The HTTPResponse class represents responses which are received by the
 * {@link Page} class.
 *
 * @public
 */ function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
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
var HTTPResponse = /*#__PURE__*/ function() {
    "use strict";
    function HTTPResponse() {
        _class_call_check(this, HTTPResponse);
    }
    _create_class(HTTPResponse, [
        {
            /**
     * True if the response was successful (status in the range 200-299).
     */ key: "ok",
            value: function ok() {
                // TODO: document === 0 case?
                var status = this.status();
                return status === 0 || status >= 200 && status <= 299;
            }
        },
        {
            key: "text",
            value: /**
     * Promise which resolves to a text (utf8) representation of response body.
     */ function text() {
                var _this = this;
                return _async_to_generator(function() {
                    var content;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.buffer()
                                ];
                            case 1:
                                content = _state.sent();
                                return [
                                    2,
                                    content.toString('utf8')
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "json",
            value: /**
     * Promise which resolves to a JSON representation of response body.
     *
     * @remarks
     *
     * This method will throw if the response body is not parsable via
     * `JSON.parse`.
     */ function json() {
                var _this = this;
                return _async_to_generator(function() {
                    var content;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.text()
                                ];
                            case 1:
                                content = _state.sent();
                                return [
                                    2,
                                    JSON.parse(content)
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return HTTPResponse;
} //# sourceMappingURL=HTTPResponse.js.map
();


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/cdp/HTTPResponse.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CdpHTTPResponse: function() { return CdpHTTPResponse; }
});
/* harmony import */var _api_HTTPResponse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/HTTPResponse.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/HTTPResponse.js");
/* harmony import */var _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Errors.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/Errors.js");
/* harmony import */var _common_SecurityDetails_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/SecurityDetails.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/SecurityDetails.js");
/* harmony import */var _util_Deferred_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/Deferred.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/Deferred.js");
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




var _client = /*#__PURE__*/ new WeakMap(), _request = /*#__PURE__*/ new WeakMap(), _contentPromise = /*#__PURE__*/ new WeakMap(), _bodyLoadedDeferred = /*#__PURE__*/ new WeakMap(), _remoteAddress = /*#__PURE__*/ new WeakMap(), _status = /*#__PURE__*/ new WeakMap(), _statusText = /*#__PURE__*/ new WeakMap(), _url = /*#__PURE__*/ new WeakMap(), _fromDiskCache = /*#__PURE__*/ new WeakMap(), _fromServiceWorker = /*#__PURE__*/ new WeakMap(), _headers = /*#__PURE__*/ new WeakMap(), _securityDetails = /*#__PURE__*/ new WeakMap(), _timing = /*#__PURE__*/ new WeakMap(), _parseStatusTextFromExtraInfo = /*#__PURE__*/ new WeakSet();
/**
 * @internal
 */ var CdpHTTPResponse = /*#__PURE__*/ function(HTTPResponse) {
    "use strict";
    _inherits(CdpHTTPResponse, HTTPResponse);
    var _super = _create_super(CdpHTTPResponse);
    function CdpHTTPResponse(client, request, responsePayload, extraInfo) {
        _class_call_check(this, CdpHTTPResponse);
        var _this;
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _parseStatusTextFromExtraInfo);
        _class_private_field_init(_assert_this_initialized(_this), _client, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _request, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _contentPromise, {
            writable: true,
            value: null
        });
        _class_private_field_init(_assert_this_initialized(_this), _bodyLoadedDeferred, {
            writable: true,
            value: _util_Deferred_js__WEBPACK_IMPORTED_MODULE_3__.Deferred.create()
        });
        _class_private_field_init(_assert_this_initialized(_this), _remoteAddress, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _status, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _statusText, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _url, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _fromDiskCache, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _fromServiceWorker, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _headers, {
            writable: true,
            value: {}
        });
        _class_private_field_init(_assert_this_initialized(_this), _securityDetails, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _timing, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(_assert_this_initialized(_this), _client, client);
        _class_private_field_set(_assert_this_initialized(_this), _request, request);
        _class_private_field_set(_assert_this_initialized(_this), _remoteAddress, {
            ip: responsePayload.remoteIPAddress,
            port: responsePayload.remotePort
        });
        _class_private_field_set(_assert_this_initialized(_this), _statusText, _class_private_method_get(_this, _parseStatusTextFromExtraInfo, parseStatusTextFromExtraInfo).call(_assert_this_initialized(_this), extraInfo) || responsePayload.statusText);
        _class_private_field_set(_assert_this_initialized(_this), _url, request.url());
        _class_private_field_set(_assert_this_initialized(_this), _fromDiskCache, !!responsePayload.fromDiskCache);
        _class_private_field_set(_assert_this_initialized(_this), _fromServiceWorker, !!responsePayload.fromServiceWorker);
        _class_private_field_set(_assert_this_initialized(_this), _status, extraInfo ? extraInfo.statusCode : responsePayload.status);
        var headers = extraInfo ? extraInfo.headers : responsePayload.headers;
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = Object.entries(headers)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = _sliced_to_array(_step.value, 2), key = _step_value[0], value = _step_value[1];
                _class_private_field_get(_this, _headers)[key.toLowerCase()] = value;
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
        _class_private_field_set(_assert_this_initialized(_this), _securityDetails, responsePayload.securityDetails ? new _common_SecurityDetails_js__WEBPACK_IMPORTED_MODULE_2__.SecurityDetails(responsePayload.securityDetails) : null);
        _class_private_field_set(_assert_this_initialized(_this), _timing, responsePayload.timing || null);
        return _this;
    }
    _create_class(CdpHTTPResponse, [
        {
            key: "_resolveBody",
            value: function _resolveBody(err) {
                if (err) {
                    return _class_private_field_get(this, _bodyLoadedDeferred).reject(err);
                }
                return _class_private_field_get(this, _bodyLoadedDeferred).resolve();
            }
        },
        {
            key: "remoteAddress",
            value: function remoteAddress() {
                return _class_private_field_get(this, _remoteAddress);
            }
        },
        {
            key: "url",
            value: function url() {
                return _class_private_field_get(this, _url);
            }
        },
        {
            key: "status",
            value: function status() {
                return _class_private_field_get(this, _status);
            }
        },
        {
            key: "statusText",
            value: function statusText() {
                return _class_private_field_get(this, _statusText);
            }
        },
        {
            key: "headers",
            value: function headers() {
                return _class_private_field_get(this, _headers);
            }
        },
        {
            key: "securityDetails",
            value: function securityDetails() {
                return _class_private_field_get(this, _securityDetails);
            }
        },
        {
            key: "timing",
            value: function timing() {
                return _class_private_field_get(this, _timing);
            }
        },
        {
            key: "buffer",
            value: function buffer() {
                if (!_class_private_field_get(this, _contentPromise)) {
                    var _this = this;
                    _class_private_field_set(this, _contentPromise, _class_private_field_get(this, _bodyLoadedDeferred).valueOrThrow().then(/*#__PURE__*/ _async_to_generator(function() {
                        var response, error;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    _state.trys.push([
                                        0,
                                        2,
                                        ,
                                        3
                                    ]);
                                    return [
                                        4,
                                        _class_private_field_get(_this, _client).send('Network.getResponseBody', {
                                            requestId: _class_private_field_get(_this, _request).id
                                        })
                                    ];
                                case 1:
                                    response = _state.sent();
                                    return [
                                        2,
                                        Buffer.from(response.body, response.base64Encoded ? 'base64' : 'utf8')
                                    ];
                                case 2:
                                    error = _state.sent();
                                    if (_instanceof(error, _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.ProtocolError) && error.originalMessage === 'No resource with given identifier found') {
                                        throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.ProtocolError('Could not load body for this request. This might happen if the request is a preflight request.');
                                    }
                                    throw error;
                                case 3:
                                    return [
                                        2
                                    ];
                            }
                        });
                    })));
                }
                return _class_private_field_get(this, _contentPromise);
            }
        },
        {
            key: "request",
            value: function request() {
                return _class_private_field_get(this, _request);
            }
        },
        {
            key: "fromCache",
            value: function fromCache() {
                return _class_private_field_get(this, _fromDiskCache) || _class_private_field_get(this, _request)._fromMemoryCache;
            }
        },
        {
            key: "fromServiceWorker",
            value: function fromServiceWorker() {
                return _class_private_field_get(this, _fromServiceWorker);
            }
        },
        {
            key: "frame",
            value: function frame() {
                return _class_private_field_get(this, _request).frame();
            }
        }
    ]);
    return CdpHTTPResponse;
} //# sourceMappingURL=HTTPResponse.js.map
(_api_HTTPResponse_js__WEBPACK_IMPORTED_MODULE_0__.HTTPResponse);
function parseStatusTextFromExtraInfo(extraInfo) {
    if (!extraInfo || !extraInfo.headersText) {
        return;
    }
    var firstLine = extraInfo.headersText.split('\r', 1)[0];
    if (!firstLine) {
        return;
    }
    var match = firstLine.match(/[^ ]* [^ ]* (.*)/);
    if (!match) {
        return;
    }
    var statusText = match[1];
    if (!statusText) {
        return;
    }
    return statusText;
}


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/common/SecurityDetails.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SecurityDetails: function() { return SecurityDetails; }
});
/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * The SecurityDetails class represents the security details of a
 * response that was received over a secure connection.
 *
 * @public
 */ function _check_private_redeclaration(obj, privateCollection) {
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
var _subjectName = /*#__PURE__*/ new WeakMap(), _issuer = /*#__PURE__*/ new WeakMap(), _validFrom = /*#__PURE__*/ new WeakMap(), _validTo = /*#__PURE__*/ new WeakMap(), _protocol = /*#__PURE__*/ new WeakMap(), _sanList = /*#__PURE__*/ new WeakMap();
var SecurityDetails = /*#__PURE__*/ function() {
    "use strict";
    function SecurityDetails(securityPayload) {
        _class_call_check(this, SecurityDetails);
        _class_private_field_init(this, _subjectName, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _issuer, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _validFrom, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _validTo, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _protocol, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _sanList, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _subjectName, securityPayload.subjectName);
        _class_private_field_set(this, _issuer, securityPayload.issuer);
        _class_private_field_set(this, _validFrom, securityPayload.validFrom);
        _class_private_field_set(this, _validTo, securityPayload.validTo);
        _class_private_field_set(this, _protocol, securityPayload.protocol);
        _class_private_field_set(this, _sanList, securityPayload.sanList);
    }
    _create_class(SecurityDetails, [
        {
            /**
     * The name of the issuer of the certificate.
     */ key: "issuer",
            value: function issuer() {
                return _class_private_field_get(this, _issuer);
            }
        },
        {
            /**
     * {@link https://en.wikipedia.org/wiki/Unix_time | Unix timestamp}
     * marking the start of the certificate's validity.
     */ key: "validFrom",
            value: function validFrom() {
                return _class_private_field_get(this, _validFrom);
            }
        },
        {
            /**
     * {@link https://en.wikipedia.org/wiki/Unix_time | Unix timestamp}
     * marking the end of the certificate's validity.
     */ key: "validTo",
            value: function validTo() {
                return _class_private_field_get(this, _validTo);
            }
        },
        {
            /**
     * The security protocol being used, e.g. "TLS 1.2".
     */ key: "protocol",
            value: function protocol() {
                return _class_private_field_get(this, _protocol);
            }
        },
        {
            /**
     * The name of the subject to which the certificate was issued.
     */ key: "subjectName",
            value: function subjectName() {
                return _class_private_field_get(this, _subjectName);
            }
        },
        {
            /**
     * The list of {@link https://en.wikipedia.org/wiki/Subject_Alternative_Name | subject alternative names (SANs)} of the certificate.
     */ key: "subjectAlternativeNames",
            value: function subjectAlternativeNames() {
                return _class_private_field_get(this, _sanList);
            }
        }
    ]);
    return SecurityDetails;
} //# sourceMappingURL=SecurityDetails.js.map
();


}),

}]);