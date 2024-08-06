"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_cdp_HTTPRequest_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/cdp/HTTPRequest.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CdpHTTPRequest: function() { return CdpHTTPRequest; }
});
/* harmony import */var _api_HTTPRequest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/HTTPRequest.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/HTTPRequest.js");
/* harmony import */var _common_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
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


var _client = /*#__PURE__*/ new WeakMap(), _isNavigationRequest = /*#__PURE__*/ new WeakMap(), _url = /*#__PURE__*/ new WeakMap(), _resourceType = /*#__PURE__*/ new WeakMap(), _method = /*#__PURE__*/ new WeakMap(), _hasPostData = /*#__PURE__*/ new WeakMap(), _postData = /*#__PURE__*/ new WeakMap(), _headers = /*#__PURE__*/ new WeakMap(), _frame = /*#__PURE__*/ new WeakMap(), _initiator = /*#__PURE__*/ new WeakMap();
/**
 * @internal
 */ var CdpHTTPRequest = /*#__PURE__*/ function(HTTPRequest1) {
    "use strict";
    _inherits(CdpHTTPRequest, HTTPRequest1);
    var _super = _create_super(CdpHTTPRequest);
    function CdpHTTPRequest(client, frame, interceptionId, allowInterception, data, redirectChain) {
        _class_call_check(this, CdpHTTPRequest);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "id", void 0);
        _class_private_field_init(_assert_this_initialized(_this), _client, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _isNavigationRequest, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _url, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _resourceType, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _method, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _hasPostData, {
            writable: true,
            value: false
        });
        _class_private_field_init(_assert_this_initialized(_this), _postData, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _headers, {
            writable: true,
            value: {}
        });
        _class_private_field_init(_assert_this_initialized(_this), _frame, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _initiator, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(_assert_this_initialized(_this), _client, client);
        _this.id = data.requestId;
        _class_private_field_set(_assert_this_initialized(_this), _isNavigationRequest, data.requestId === data.loaderId && data.type === 'Document');
        _this._interceptionId = interceptionId;
        _class_private_field_set(_assert_this_initialized(_this), _url, data.request.url);
        _class_private_field_set(_assert_this_initialized(_this), _resourceType, (data.type || 'other').toLowerCase());
        _class_private_field_set(_assert_this_initialized(_this), _method, data.request.method);
        _class_private_field_set(_assert_this_initialized(_this), _postData, data.request.postData);
        var _data_request_hasPostData;
        _class_private_field_set(_assert_this_initialized(_this), _hasPostData, (_data_request_hasPostData = data.request.hasPostData) !== null && _data_request_hasPostData !== void 0 ? _data_request_hasPostData : false);
        _class_private_field_set(_assert_this_initialized(_this), _frame, frame);
        _this._redirectChain = redirectChain;
        _class_private_field_set(_assert_this_initialized(_this), _initiator, data.initiator);
        _this.interception.enabled = allowInterception;
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = Object.entries(data.request.headers)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
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
        return _this;
    }
    _create_class(CdpHTTPRequest, [
        {
            key: "client",
            get: function get() {
                return _class_private_field_get(this, _client);
            }
        },
        {
            key: "url",
            value: function url() {
                return _class_private_field_get(this, _url);
            }
        },
        {
            key: "resourceType",
            value: function resourceType() {
                return _class_private_field_get(this, _resourceType);
            }
        },
        {
            key: "method",
            value: function method() {
                return _class_private_field_get(this, _method);
            }
        },
        {
            key: "postData",
            value: function postData() {
                return _class_private_field_get(this, _postData);
            }
        },
        {
            key: "hasPostData",
            value: function hasPostData() {
                return _class_private_field_get(this, _hasPostData);
            }
        },
        {
            key: "fetchPostData",
            value: function fetchPostData() {
                var _this = this;
                return _async_to_generator(function() {
                    var result, err;
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
                                    _class_private_field_get(_this, _client).send('Network.getRequestPostData', {
                                        requestId: _this.id
                                    })
                                ];
                            case 1:
                                result = _state.sent();
                                return [
                                    2,
                                    result.postData
                                ];
                            case 2:
                                err = _state.sent();
                                (0,_common_util_js__WEBPACK_IMPORTED_MODULE_1__.debugError)(err);
                                return [
                                    2
                                ];
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "headers",
            value: function headers() {
                return _class_private_field_get(this, _headers);
            }
        },
        {
            key: "response",
            value: function response() {
                return this._response;
            }
        },
        {
            key: "frame",
            value: function frame() {
                return _class_private_field_get(this, _frame);
            }
        },
        {
            key: "isNavigationRequest",
            value: function isNavigationRequest() {
                return _class_private_field_get(this, _isNavigationRequest);
            }
        },
        {
            key: "initiator",
            value: function initiator() {
                return _class_private_field_get(this, _initiator);
            }
        },
        {
            key: "redirectChain",
            value: function redirectChain() {
                return this._redirectChain.slice();
            }
        },
        {
            key: "failure",
            value: function failure() {
                if (!this._failureText) {
                    return null;
                }
                return {
                    errorText: this._failureText
                };
            }
        },
        {
            key: "_continue",
            value: /**
     * @internal
     */ function _continue() {
                var overrides = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                var _this = this;
                return _async_to_generator(function() {
                    var url, method, postData, headers, postDataBinaryBase64;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                url = overrides.url, method = overrides.method, postData = overrides.postData, headers = overrides.headers;
                                _this.interception.handled = true;
                                postDataBinaryBase64 = postData ? btoa(postData) : undefined;
                                if (_this._interceptionId === undefined) {
                                    throw new Error('HTTPRequest is missing _interceptionId needed for Fetch.continueRequest');
                                }
                                return [
                                    4,
                                    _class_private_field_get(_this, _client).send('Fetch.continueRequest', {
                                        requestId: _this._interceptionId,
                                        url: url,
                                        method: method,
                                        postData: postDataBinaryBase64,
                                        headers: headers ? (0,_api_HTTPRequest_js__WEBPACK_IMPORTED_MODULE_0__.headersArray)(headers) : undefined
                                    }).catch(function(error) {
                                        _this.interception.handled = false;
                                        return (0,_api_HTTPRequest_js__WEBPACK_IMPORTED_MODULE_0__.handleError)(error);
                                    })
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
            key: "_respond",
            value: function _respond(response) {
                var _this = this;
                return _async_to_generator(function() {
                    var parsedBody, responseHeaders, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, header, value, status;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this.interception.handled = true;
                                if (response.body) {
                                    parsedBody = _api_HTTPRequest_js__WEBPACK_IMPORTED_MODULE_0__.HTTPRequest.getResponse(response.body);
                                }
                                responseHeaders = {};
                                if (response.headers) {
                                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                    try {
                                        for(_iterator = Object.keys(response.headers)[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                            header = _step.value;
                                            value = response.headers[header];
                                            responseHeaders[header.toLowerCase()] = Array.isArray(value) ? value.map(function(item) {
                                                return String(item);
                                            }) : String(value);
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
                                if (response.contentType) {
                                    responseHeaders['content-type'] = response.contentType;
                                }
                                if ((parsedBody === null || parsedBody === void 0 ? void 0 : parsedBody.contentLength) && !('content-length' in responseHeaders)) {
                                    responseHeaders['content-length'] = String(parsedBody.contentLength);
                                }
                                status = response.status || 200;
                                if (_this._interceptionId === undefined) {
                                    throw new Error('HTTPRequest is missing _interceptionId needed for Fetch.fulfillRequest');
                                }
                                return [
                                    4,
                                    _class_private_field_get(_this, _client).send('Fetch.fulfillRequest', {
                                        requestId: _this._interceptionId,
                                        responseCode: status,
                                        responsePhrase: _api_HTTPRequest_js__WEBPACK_IMPORTED_MODULE_0__.STATUS_TEXTS[status],
                                        responseHeaders: (0,_api_HTTPRequest_js__WEBPACK_IMPORTED_MODULE_0__.headersArray)(responseHeaders),
                                        body: parsedBody === null || parsedBody === void 0 ? void 0 : parsedBody.base64
                                    }).catch(function(error) {
                                        _this.interception.handled = false;
                                        return (0,_api_HTTPRequest_js__WEBPACK_IMPORTED_MODULE_0__.handleError)(error);
                                    })
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
            key: "_abort",
            value: function _abort(errorReason) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this.interception.handled = true;
                                if (_this._interceptionId === undefined) {
                                    throw new Error('HTTPRequest is missing _interceptionId needed for Fetch.failRequest');
                                }
                                return [
                                    4,
                                    _class_private_field_get(_this, _client).send('Fetch.failRequest', {
                                        requestId: _this._interceptionId,
                                        errorReason: errorReason || 'Failed'
                                    }).catch(_api_HTTPRequest_js__WEBPACK_IMPORTED_MODULE_0__.handleError)
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
        }
    ]);
    return CdpHTTPRequest;
} //# sourceMappingURL=HTTPRequest.js.map
(_api_HTTPRequest_js__WEBPACK_IMPORTED_MODULE_0__.HTTPRequest);


}),

}]);