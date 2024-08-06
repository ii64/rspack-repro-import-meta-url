"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_bidi_core_Request_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/bidi/core/Request.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Request: function() { return Request; }
});
/* harmony import */var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/EventEmitter.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/EventEmitter.js");
/* harmony import */var _util_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/decorators.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/decorators.js");
/* harmony import */var _util_disposable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/disposable.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/disposable.js");
/**
 * @license
 * Copyright 2024 Google Inc.
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
 */ var Request = function() {
    var initialize = function initialize() {
        var _this = this;
        var browsingContextEmitter = _class_private_field_get(this, _disposables).use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(_class_private_field_get(this, _browsingContext)));
        browsingContextEmitter.once('closed', function(param) {
            var reason = param.reason;
            _class_private_field_set(_this, _error, reason);
            _this.emit('error', _class_private_field_get(_this, _error));
            _this.dispose();
        });
        var sessionEmitter = _class_private_field_get(this, _disposables).use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(_class_private_field_get(this, _session)));
        sessionEmitter.on('network.beforeRequestSent', function(event) {
            if (event.context !== _class_private_field_get(_this, _browsingContext).id || event.request.request !== _this.id || event.redirectCount !== _class_private_field_get(_this, _event).redirectCount + 1) {
                return;
            }
            _class_private_field_set(_this, _redirect, _Request.from(_class_private_field_get(_this, _browsingContext), event));
            _this.emit('redirect', _class_private_field_get(_this, _redirect));
            _this.dispose();
        });
        sessionEmitter.on('network.authRequired', function(event) {
            if (event.context !== _class_private_field_get(_this, _browsingContext).id || event.request.request !== _this.id || // Don't try to authenticate for events that are not blocked
            !event.isBlocked) {
                return;
            }
            _this.emit('authenticate', undefined);
        });
        sessionEmitter.on('network.fetchError', function(event) {
            if (event.context !== _class_private_field_get(_this, _browsingContext).id || event.request.request !== _this.id || _class_private_field_get(_this, _event).redirectCount !== event.redirectCount) {
                return;
            }
            _class_private_field_set(_this, _error, event.errorText);
            _this.emit('error', _class_private_field_get(_this, _error));
            _this.dispose();
        });
        sessionEmitter.on('network.responseCompleted', function(event) {
            if (event.context !== _class_private_field_get(_this, _browsingContext).id || event.request.request !== _this.id || _class_private_field_get(_this, _event).redirectCount !== event.redirectCount) {
                return;
            }
            _class_private_field_set(_this, _response, event.response);
            _this.emit('success', _class_private_field_get(_this, _response));
            // In case this is a redirect.
            if (_class_private_field_get(_this, _response).status >= 300 && _class_private_field_get(_this, _response).status < 400) {
                return;
            }
            _this.dispose();
        });
    };
    var get_session = function get_session() {
        return _class_private_field_get(this, _browsingContext).userContext.browser.session;
    };
    var _tmp;
    var _error, _redirect, _response, _browsingContext, _disposables, _event, _initialize, _session, _Request;
    var _a;
    var _classSuper = _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter;
    var _instanceExtraInitializers = [];
    var _dispose_decorators;
    return _error = /*#__PURE__*/ new WeakMap(), _redirect = /*#__PURE__*/ new WeakMap(), _response = /*#__PURE__*/ new WeakMap(), _browsingContext = /*#__PURE__*/ new WeakMap(), _disposables = /*#__PURE__*/ new WeakMap(), _event = /*#__PURE__*/ new WeakMap(), _initialize = /*#__PURE__*/ new WeakSet(), _session = /*#__PURE__*/ new WeakMap(), _tmp = (_dispose_decorators = [
        _util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.inertIfDisposed
    ], _util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.disposeSymbol), _Request = /*#__PURE__*/ function(_classSuper) {
        "use strict";
        _inherits(Request, _classSuper);
        var _super = _create_super(Request);
        function Request(browsingContext, event) {
            _class_call_check(this, Request);
            var _this;
            _this = _super.call(this);
            _class_private_method_init(_assert_this_initialized(_this), _initialize);
            _class_private_field_init(_assert_this_initialized(_this), _session, {
                get: get_session,
                set: void 0
            });
            _class_private_field_init(_assert_this_initialized(_this), _error, {
                writable: true,
                value: __runInitializers(_assert_this_initialized(_this), _instanceExtraInitializers)
            });
            _class_private_field_init(_assert_this_initialized(_this), _redirect, {
                writable: true,
                value: void 0
            });
            _class_private_field_init(_assert_this_initialized(_this), _response, {
                writable: true,
                value: void 0
            });
            _class_private_field_init(_assert_this_initialized(_this), _browsingContext, {
                writable: true,
                value: void 0
            });
            _class_private_field_init(_assert_this_initialized(_this), _disposables, {
                writable: true,
                value: new _util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.DisposableStack()
            });
            _class_private_field_init(_assert_this_initialized(_this), _event, {
                writable: true,
                value: void 0
            });
            _class_private_field_set(_assert_this_initialized(_this), _browsingContext, browsingContext);
            _class_private_field_set(_assert_this_initialized(_this), _event, event);
            return _this;
        }
        _create_class(Request, [
            {
                key: "disposed",
                get: function get() {
                    return _class_private_field_get(this, _disposables).disposed;
                }
            },
            {
                key: "error",
                get: function get() {
                    return _class_private_field_get(this, _error);
                }
            },
            {
                key: "headers",
                get: function get() {
                    return _class_private_field_get(this, _event).request.headers;
                }
            },
            {
                key: "id",
                get: function get() {
                    return _class_private_field_get(this, _event).request.request;
                }
            },
            {
                key: "initiator",
                get: function get() {
                    return _class_private_field_get(this, _event).initiator;
                }
            },
            {
                key: "method",
                get: function get() {
                    return _class_private_field_get(this, _event).request.method;
                }
            },
            {
                key: "navigation",
                get: function get() {
                    var _class_private_field_get_navigation;
                    return (_class_private_field_get_navigation = _class_private_field_get(this, _event).navigation) !== null && _class_private_field_get_navigation !== void 0 ? _class_private_field_get_navigation : undefined;
                }
            },
            {
                key: "redirect",
                get: function get() {
                    return _class_private_field_get(this, _redirect);
                }
            },
            {
                key: "lastRedirect",
                get: function get() {
                    var redirect = _class_private_field_get(this, _redirect);
                    while(redirect){
                        if (redirect && !_class_private_field_get(redirect, _redirect)) {
                            return redirect;
                        }
                        redirect = _class_private_field_get(redirect, _redirect);
                    }
                    return redirect;
                }
            },
            {
                key: "response",
                get: function get() {
                    return _class_private_field_get(this, _response);
                }
            },
            {
                key: "url",
                get: function get() {
                    return _class_private_field_get(this, _event).request.url;
                }
            },
            {
                key: "isBlocked",
                get: function get() {
                    return _class_private_field_get(this, _event).isBlocked;
                }
            },
            {
                key: "resourceType",
                get: function get() {
                    var _class_private_field_get_request_googresourceType;
                    // @ts-expect-error non-standard attribute.
                    return (_class_private_field_get_request_googresourceType = _class_private_field_get(this, _event).request['goog:resourceType']) !== null && _class_private_field_get_request_googresourceType !== void 0 ? _class_private_field_get_request_googresourceType : undefined;
                }
            },
            {
                key: "postData",
                get: function get() {
                    var _class_private_field_get_request_googpostData;
                    // @ts-expect-error non-standard attribute.
                    return (_class_private_field_get_request_googpostData = _class_private_field_get(this, _event).request['goog:postData']) !== null && _class_private_field_get_request_googpostData !== void 0 ? _class_private_field_get_request_googpostData : undefined;
                }
            },
            {
                key: "hasPostData",
                get: function get() {
                    var _class_private_field_get_request_googhasPostData;
                    // @ts-expect-error non-standard attribute.
                    return (_class_private_field_get_request_googhasPostData = _class_private_field_get(this, _event).request['goog:hasPostData']) !== null && _class_private_field_get_request_googhasPostData !== void 0 ? _class_private_field_get_request_googhasPostData : false;
                }
            },
            {
                key: "continueRequest",
                value: function continueRequest(param) {
                    var url = param.url, method = param.method, headers = param.headers, cookies = param.cookies, body = param.body;
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _class_private_field_get(_this, _session).send('network.continueRequest', {
                                            request: _this.id,
                                            url: url,
                                            method: method,
                                            headers: headers,
                                            body: body,
                                            cookies: cookies
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
                key: "failRequest",
                value: function failRequest() {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _class_private_field_get(_this, _session).send('network.failRequest', {
                                            request: _this.id
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
                key: "provideResponse",
                value: function provideResponse(param) {
                    var statusCode = param.statusCode, reasonPhrase = param.reasonPhrase, headers = param.headers, body = param.body;
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _class_private_field_get(_this, _session).send('network.provideResponse', {
                                            request: _this.id,
                                            statusCode: statusCode,
                                            reasonPhrase: reasonPhrase,
                                            headers: headers,
                                            body: body
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
                key: "continueWithAuth",
                value: function continueWithAuth(parameters) {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    if (!(parameters.action === 'provideCredentials')) return [
                                        3,
                                        2
                                    ];
                                    return [
                                        4,
                                        _class_private_field_get(_this, _session).send('network.continueWithAuth', {
                                            request: _this.id,
                                            action: parameters.action,
                                            credentials: parameters.credentials
                                        })
                                    ];
                                case 1:
                                    _state.sent();
                                    return [
                                        3,
                                        4
                                    ];
                                case 2:
                                    return [
                                        4,
                                        _class_private_field_get(_this, _session).send('network.continueWithAuth', {
                                            request: _this.id,
                                            action: parameters.action
                                        })
                                    ];
                                case 3:
                                    _state.sent();
                                    _state.label = 4;
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
                key: "dispose",
                value: function dispose() {
                    this[_util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.disposeSymbol]();
                }
            },
            {
                key: _tmp,
                value: function value() {
                    _class_private_field_get(this, _disposables).dispose();
                    _get(_get_prototype_of(Request.prototype), _util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.disposeSymbol, this).call(this);
                }
            }
        ], [
            {
                key: "from",
                value: function from(browsingContext, event) {
                    var request = new Request(browsingContext, event);
                    _class_private_method_get(request, _initialize, initialize).call(request);
                    return request;
                }
            }
        ]);
        return Request;
    }(_classSuper), function() {
        var _classSuper_Symbol_metadata;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_classSuper_Symbol_metadata = _classSuper[Symbol.metadata]) !== null && _classSuper_Symbol_metadata !== void 0 ? _classSuper_Symbol_metadata : null) : void 0;
        __esDecorate(_Request, null, _dispose_decorators, {
            kind: "method",
            name: "dispose",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "dispose" in obj;
                },
                get: function(obj) {
                    return obj.dispose;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        if (_metadata) Object.defineProperty(_Request, Symbol.metadata, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _metadata
        });
    }(), _Request;
}();
 //# sourceMappingURL=Request.js.map


}),

}]);