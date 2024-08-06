"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_cdp_WebWorker_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/api/Target.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Target: function() { return Target; },
  TargetType: function() { return TargetType; }
});
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ /**
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
var TargetType;
(function(TargetType) {
    TargetType["PAGE"] = "page";
    TargetType["BACKGROUND_PAGE"] = "background_page";
    TargetType["SERVICE_WORKER"] = "service_worker";
    TargetType["SHARED_WORKER"] = "shared_worker";
    TargetType["BROWSER"] = "browser";
    TargetType["WEBVIEW"] = "webview";
    TargetType["OTHER"] = "other";
    /**
     * @internal
     */ TargetType["TAB"] = "tab";
})(TargetType || (TargetType = {}));
/**
 * Target represents a
 * {@link https://chromedevtools.github.io/devtools-protocol/tot/Target/ | CDP target}.
 * In CDP a target is something that can be debugged such a frame, a page or a
 * worker.
 * @public
 */ var Target = /*#__PURE__*/ function() {
    "use strict";
    function Target() {
        _class_call_check(this, Target);
    }
    _create_class(Target, [
        {
            key: "worker",
            value: /**
     * If the target is not of type `"service_worker"` or `"shared_worker"`, returns `null`.
     */ function worker() {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            null
                        ];
                    });
                })();
            }
        },
        {
            key: "page",
            value: /**
     * If the target is not of type `"page"`, `"webview"` or `"background_page"`,
     * returns `null`.
     */ function page() {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            null
                        ];
                    });
                })();
            }
        }
    ]);
    return Target;
} //# sourceMappingURL=Target.js.map
();


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/cdp/WebWorker.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CdpWebWorker: function() { return CdpWebWorker; }
});
/* harmony import */var _api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/CDPSession.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/CDPSession.js");
/* harmony import */var _api_Target_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/Target.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/Target.js");
/* harmony import */var _api_WebWorker_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/WebWorker.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/WebWorker.js");
/* harmony import */var _common_TimeoutSettings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/TimeoutSettings.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/TimeoutSettings.js");
/* harmony import */var _common_util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */var _ExecutionContext_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ExecutionContext.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/ExecutionContext.js");
/* harmony import */var _IsolatedWorld_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./IsolatedWorld.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/IsolatedWorld.js");
/* harmony import */var _JSHandle_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./JSHandle.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/JSHandle.js");
function _assert_this_initialized(self1) {
    if (self1 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self1;
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
        var self1 = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self1, args);
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
function _possible_constructor_return(self1, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self1);
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








var _world = /*#__PURE__*/ new WeakMap(), _client = /*#__PURE__*/ new WeakMap(), _id = /*#__PURE__*/ new WeakMap(), _targetType = /*#__PURE__*/ new WeakMap();
/**
 * @internal
 */ var CdpWebWorker = /*#__PURE__*/ function(WebWorker) {
    "use strict";
    _inherits(CdpWebWorker, WebWorker);
    var _super = _create_super(CdpWebWorker);
    function CdpWebWorker(client, url, targetId, targetType, consoleAPICalled, exceptionThrown) {
        _class_call_check(this, CdpWebWorker);
        var _this;
        _this = _super.call(this, url);
        _class_private_field_init(_assert_this_initialized(_this), _world, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _client, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _id, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _targetType, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(_assert_this_initialized(_this), _id, targetId);
        _class_private_field_set(_assert_this_initialized(_this), _client, client);
        _class_private_field_set(_assert_this_initialized(_this), _targetType, targetType);
        _class_private_field_set(_assert_this_initialized(_this), _world, new _IsolatedWorld_js__WEBPACK_IMPORTED_MODULE_6__.IsolatedWorld(_assert_this_initialized(_this), new _common_TimeoutSettings_js__WEBPACK_IMPORTED_MODULE_3__.TimeoutSettings()));
        var _this1 = _assert_this_initialized(_this);
        _class_private_field_get(_this, _client).once('Runtime.executionContextCreated', function() {
            var _ref = _async_to_generator(function(event) {
                return _ts_generator(this, function(_state) {
                    _class_private_field_get(_this1, _world).setContext(new _ExecutionContext_js__WEBPACK_IMPORTED_MODULE_5__.ExecutionContext(client, event.context, _class_private_field_get(_this1, _world)));
                    return [
                        2
                    ];
                });
            });
            return function(event) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this2 = _assert_this_initialized(_this);
        _class_private_field_get(_this, _world).emitter.on('consoleapicalled', function() {
            var _ref = _async_to_generator(function(event) {
                return _ts_generator(this, function(_state) {
                    try {
                        return [
                            2,
                            consoleAPICalled(event.type, event.args.map(function(object) {
                                return new _JSHandle_js__WEBPACK_IMPORTED_MODULE_7__.CdpJSHandle(_class_private_field_get(_this2, _world), object);
                            }), event.stackTrace)
                        ];
                    } catch (err) {
                        (0,_common_util_js__WEBPACK_IMPORTED_MODULE_4__.debugError)(err);
                    }
                    return [
                        2
                    ];
                });
            });
            return function(event) {
                return _ref.apply(this, arguments);
            };
        }());
        _class_private_field_get(_this, _client).on('Runtime.exceptionThrown', exceptionThrown);
        _class_private_field_get(_this, _client).once(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSessionEvent.Disconnected, function() {
            _class_private_field_get(_this, _world).dispose();
        });
        // This might fail if the target is closed before we receive all execution contexts.
        _class_private_field_get(_this, _client).send('Runtime.enable').catch(_common_util_js__WEBPACK_IMPORTED_MODULE_4__.debugError);
        return _this;
    }
    _create_class(CdpWebWorker, [
        {
            key: "mainRealm",
            value: function mainRealm() {
                return _class_private_field_get(this, _world);
            }
        },
        {
            key: "client",
            get: function get() {
                return _class_private_field_get(this, _client);
            }
        },
        {
            key: "close",
            value: function close() {
                var _this = this;
                return _async_to_generator(function() {
                    var _, _this_client_connection, _this_client_connection1;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _ = _class_private_field_get(_this, _targetType);
                                switch(_){
                                    case _api_Target_js__WEBPACK_IMPORTED_MODULE_1__.TargetType.SERVICE_WORKER:
                                        return [
                                            3,
                                            1
                                        ];
                                    case _api_Target_js__WEBPACK_IMPORTED_MODULE_1__.TargetType.SHARED_WORKER:
                                        return [
                                            3,
                                            1
                                        ];
                                }
                                return [
                                    3,
                                    4
                                ];
                            case 1:
                                // For service and shared workers we need to close the target and detach to allow
                                // the worker to stop.
                                return [
                                    4,
                                    (_this_client_connection = _this.client.connection()) === null || _this_client_connection === void 0 ? void 0 : _this_client_connection.send('Target.closeTarget', {
                                        targetId: _class_private_field_get(_this, _id)
                                    })
                                ];
                            case 2:
                                _state.sent();
                                return [
                                    4,
                                    (_this_client_connection1 = _this.client.connection()) === null || _this_client_connection1 === void 0 ? void 0 : _this_client_connection1.send('Target.detachFromTarget', {
                                        sessionId: _this.client.id()
                                    })
                                ];
                            case 3:
                                _state.sent();
                                return [
                                    3,
                                    6
                                ];
                            case 4:
                                return [
                                    4,
                                    _this.evaluate(function() {
                                        self.close();
                                    })
                                ];
                            case 5:
                                _state.sent();
                                _state.label = 6;
                            case 6:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return CdpWebWorker;
} //# sourceMappingURL=WebWorker.js.map
(_api_WebWorker_js__WEBPACK_IMPORTED_MODULE_2__.WebWorker);


}),

}]);