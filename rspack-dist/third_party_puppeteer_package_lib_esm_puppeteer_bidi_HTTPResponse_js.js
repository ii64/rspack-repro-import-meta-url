"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_bidi_HTTPResponse_js"], {
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
"./third_party/puppeteer/package/lib/esm/puppeteer/bidi/HTTPResponse.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BidiHTTPResponse: function() { return BidiHTTPResponse; }
});
/* harmony import */var _api_HTTPResponse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/HTTPResponse.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/HTTPResponse.js");
/* harmony import */var _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Errors.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/Errors.js");
/* harmony import */var _common_SecurityDetails_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/SecurityDetails.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/SecurityDetails.js");
/* harmony import */var _util_decorators_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/decorators.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/decorators.js");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
var __runInitializers = undefined && undefined.__runInitializers || function(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++){
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = undefined && undefined.__esDecorate || function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || (typeof result === "undefined" ? "undefined" : _type_of(result)) !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};




/**
 * @internal
 */ var BidiHTTPResponse = function() {
    var initialize = function initialize() {
        var _class_private_field_get_frame;
        if (_class_private_field_get(this, _data).fromCache) {
            var _class_private_field_get_frame1;
            (_class_private_field_get_frame1 = _class_private_field_get(this, _request).frame()) === null || _class_private_field_get_frame1 === void 0 ? void 0 : _class_private_field_get_frame1.page().trustedEmitter.emit("requestservedfromcache" /* PageEvent.RequestServedFromCache */ , _class_private_field_get(this, _request));
        }
        (_class_private_field_get_frame = _class_private_field_get(this, _request).frame()) === null || _class_private_field_get_frame === void 0 ? void 0 : _class_private_field_get_frame.page().trustedEmitter.emit("response" /* PageEvent.Response */ , this);
    };
    var _data, _request, _securityDetails, _cdpSupported, _initialize, _BidiHTTPResponse;
    var _classSuper = _api_HTTPResponse_js__WEBPACK_IMPORTED_MODULE_0__.HTTPResponse;
    var _instanceExtraInitializers = [];
    var _remoteAddress_decorators;
    return _data = /*#__PURE__*/ new WeakMap(), _request = /*#__PURE__*/ new WeakMap(), _securityDetails = /*#__PURE__*/ new WeakMap(), _cdpSupported = /*#__PURE__*/ new WeakMap(), _initialize = /*#__PURE__*/ new WeakSet(), _BidiHTTPResponse = /*#__PURE__*/ function(_classSuper) {
        "use strict";
        _inherits(BidiHTTPResponse, _classSuper);
        var _super = _create_super(BidiHTTPResponse);
        function BidiHTTPResponse(data, request, cdpSupported) {
            _class_call_check(this, BidiHTTPResponse);
            var _this;
            _this = _super.call(this);
            _class_private_method_init(_assert_this_initialized(_this), _initialize);
            _class_private_field_init(_assert_this_initialized(_this), _data, {
                writable: true,
                value: __runInitializers(_assert_this_initialized(_this), _instanceExtraInitializers)
            });
            _class_private_field_init(_assert_this_initialized(_this), _request, {
                writable: true,
                value: void 0
            });
            _class_private_field_init(_assert_this_initialized(_this), _securityDetails, {
                writable: true,
                value: void 0
            });
            _class_private_field_init(_assert_this_initialized(_this), _cdpSupported, {
                writable: true,
                value: false
            });
            _class_private_field_set(_assert_this_initialized(_this), _data, data);
            _class_private_field_set(_assert_this_initialized(_this), _request, request);
            _class_private_field_set(_assert_this_initialized(_this), _cdpSupported, cdpSupported);
            // @ts-expect-error non-standard property.
            var securityDetails = data['goog:securityDetails'];
            if (cdpSupported && securityDetails) {
                _class_private_field_set(_assert_this_initialized(_this), _securityDetails, new _common_SecurityDetails_js__WEBPACK_IMPORTED_MODULE_2__.SecurityDetails(securityDetails));
            }
            return _this;
        }
        _create_class(BidiHTTPResponse, [
            {
                key: "remoteAddress",
                value: function remoteAddress() {
                    return {
                        ip: '',
                        port: -1
                    };
                }
            },
            {
                key: "url",
                value: function url() {
                    return _class_private_field_get(this, _data).url;
                }
            },
            {
                key: "status",
                value: function status() {
                    return _class_private_field_get(this, _data).status;
                }
            },
            {
                key: "statusText",
                value: function statusText() {
                    return _class_private_field_get(this, _data).statusText;
                }
            },
            {
                key: "headers",
                value: function headers() {
                    var headers = {};
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = _class_private_field_get(this, _data).headers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var header = _step.value;
                            // TODO: How to handle Binary Headers
                            // https://w3c.github.io/webdriver-bidi/#type-network-Header
                            if (header.value.type === 'string') {
                                headers[header.name.toLowerCase()] = header.value.value;
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
                    return _class_private_field_get(this, _data).fromCache;
                }
            },
            {
                key: "timing",
                value: function timing() {
                    throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation();
                }
            },
            {
                key: "frame",
                value: function frame() {
                    return _class_private_field_get(this, _request).frame();
                }
            },
            {
                key: "fromServiceWorker",
                value: function fromServiceWorker() {
                    return false;
                }
            },
            {
                key: "securityDetails",
                value: function securityDetails() {
                    if (!_class_private_field_get(this, _cdpSupported)) {
                        throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation();
                    }
                    var _$_class_private_field_get;
                    return (_$_class_private_field_get = _class_private_field_get(this, _securityDetails)) !== null && _$_class_private_field_get !== void 0 ? _$_class_private_field_get : null;
                }
            },
            {
                key: "buffer",
                value: function buffer() {
                    throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation();
                }
            }
        ], [
            {
                key: "from",
                value: function from(data, request, cdpSupported) {
                    var response = new BidiHTTPResponse(data, request, cdpSupported);
                    _class_private_method_get(response, _initialize, initialize).call(response);
                    return response;
                }
            }
        ]);
        return BidiHTTPResponse;
    }(_classSuper), function() {
        var _classSuper_Symbol_metadata;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_classSuper_Symbol_metadata = _classSuper[Symbol.metadata]) !== null && _classSuper_Symbol_metadata !== void 0 ? _classSuper_Symbol_metadata : null) : void 0;
        _remoteAddress_decorators = [
            _util_decorators_js__WEBPACK_IMPORTED_MODULE_3__.invokeAtMostOnceForArguments
        ];
        __esDecorate(_BidiHTTPResponse, null, _remoteAddress_decorators, {
            kind: "method",
            name: "remoteAddress",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "remoteAddress" in obj;
                },
                get: function(obj) {
                    return obj.remoteAddress;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        if (_metadata) Object.defineProperty(_BidiHTTPResponse, Symbol.metadata, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _metadata
        });
    }(), _BidiHTTPResponse;
}();
 //# sourceMappingURL=HTTPResponse.js.map


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