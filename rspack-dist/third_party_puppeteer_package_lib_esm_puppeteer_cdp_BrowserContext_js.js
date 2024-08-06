"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_cdp_BrowserContext_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/cdp/BrowserContext.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CdpBrowserContext: function() { return CdpBrowserContext; }
});
/* harmony import */var _api_Browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/Browser.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/Browser.js");
/* harmony import */var _api_BrowserContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/BrowserContext.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/BrowserContext.js");
/* harmony import */var _util_assert_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/assert.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js");
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
var __addDisposableResource = undefined && undefined.__addDisposableResource || function(env, value, async) {
    if (value !== null && value !== void 0) {
        if ((typeof value === "undefined" ? "undefined" : _type_of(value)) !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
};
var __disposeResources = undefined && undefined.__disposeResources || function(SuppressedError1) {
    return function(env) {
        function fail(e) {
            env.error = env.hasError ? new SuppressedError1(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        function next() {
            while(env.stack.length){
                var rec = env.stack.pop();
                try {
                    var result = rec.dispose && rec.dispose.call(rec.value);
                    if (rec.async) return Promise.resolve(result).then(next, function(e) {
                        fail(e);
                        return next();
                    });
                } catch (e) {
                    fail(e);
                }
            }
            if (env.hasError) throw env.error;
        }
        return next();
    };
}(typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
});



var _connection = /*#__PURE__*/ new WeakMap(), _browser = /*#__PURE__*/ new WeakMap(), _id = /*#__PURE__*/ new WeakMap();
/**
 * @internal
 */ var CdpBrowserContext = /*#__PURE__*/ function(BrowserContext) {
    "use strict";
    _inherits(CdpBrowserContext, BrowserContext);
    var _super = _create_super(CdpBrowserContext);
    function CdpBrowserContext(connection, browser, contextId) {
        _class_call_check(this, CdpBrowserContext);
        var _this;
        _this = _super.call(this);
        _class_private_field_init(_assert_this_initialized(_this), _connection, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _browser, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _id, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(_assert_this_initialized(_this), _connection, connection);
        _class_private_field_set(_assert_this_initialized(_this), _browser, browser);
        _class_private_field_set(_assert_this_initialized(_this), _id, contextId);
        return _this;
    }
    _create_class(CdpBrowserContext, [
        {
            key: "id",
            get: function get() {
                return _class_private_field_get(this, _id);
            }
        },
        {
            key: "targets",
            value: function targets() {
                var _this = this;
                return _class_private_field_get(this, _browser).targets().filter(function(target) {
                    return target.browserContext() === _this;
                });
            }
        },
        {
            key: "pages",
            value: function pages() {
                var _this = this;
                return _async_to_generator(function() {
                    var pages;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    Promise.all(_this.targets().filter(function(target) {
                                        var _class_private_field_get__getIsPageTargetCallback;
                                        return target.type() === 'page' || target.type() === 'other' && ((_class_private_field_get__getIsPageTargetCallback = _class_private_field_get(_this, _browser)._getIsPageTargetCallback()) === null || _class_private_field_get__getIsPageTargetCallback === void 0 ? void 0 : _class_private_field_get__getIsPageTargetCallback(target));
                                    }).map(function(target) {
                                        return target.page();
                                    }))
                                ];
                            case 1:
                                pages = _state.sent();
                                return [
                                    2,
                                    pages.filter(function(page) {
                                        return !!page;
                                    })
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "isIncognito",
            value: function isIncognito() {
                return !!_class_private_field_get(this, _id);
            }
        },
        {
            key: "overridePermissions",
            value: function overridePermissions(origin, permissions) {
                var _this = this;
                return _async_to_generator(function() {
                    var protocolPermissions;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                protocolPermissions = permissions.map(function(permission) {
                                    var protocolPermission = _api_Browser_js__WEBPACK_IMPORTED_MODULE_0__.WEB_PERMISSION_TO_PROTOCOL_PERMISSION.get(permission);
                                    if (!protocolPermission) {
                                        throw new Error('Unknown permission: ' + permission);
                                    }
                                    return protocolPermission;
                                });
                                return [
                                    4,
                                    _class_private_field_get(_this, _connection).send('Browser.grantPermissions', {
                                        origin: origin,
                                        browserContextId: _class_private_field_get(_this, _id) || undefined,
                                        permissions: protocolPermissions
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
            key: "clearPermissionOverrides",
            value: function clearPermissionOverrides() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _class_private_field_get(_this, _connection).send('Browser.resetPermissions', {
                                        browserContextId: _class_private_field_get(_this, _id) || undefined
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
            key: "newPage",
            value: function newPage() {
                var _this = this;
                return _async_to_generator(function() {
                    var env_1, _guard, _tmp, e_1;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                env_1 = {
                                    stack: [],
                                    error: void 0,
                                    hasError: false
                                };
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    4,
                                    5,
                                    6
                                ]);
                                _tmp = [
                                    env_1
                                ];
                                return [
                                    4,
                                    _this.waitForScreenshotOperations()
                                ];
                            case 2:
                                _guard = __addDisposableResource.apply(void 0, _tmp.concat([
                                    _state.sent(),
                                    false
                                ]));
                                return [
                                    4,
                                    _class_private_field_get(_this, _browser)._createPageInContext(_class_private_field_get(_this, _id))
                                ];
                            case 3:
                                return [
                                    2,
                                    _state.sent()
                                ];
                            case 4:
                                e_1 = _state.sent();
                                env_1.error = e_1;
                                env_1.hasError = true;
                                return [
                                    3,
                                    6
                                ];
                            case 5:
                                __disposeResources(env_1);
                                return [
                                    7
                                ];
                            case 6:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "browser",
            value: function browser() {
                return _class_private_field_get(this, _browser);
            }
        },
        {
            key: "close",
            value: function close() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_2__.assert)(_class_private_field_get(_this, _id), 'Non-incognito profiles cannot be closed!');
                                return [
                                    4,
                                    _class_private_field_get(_this, _browser)._disposeContext(_class_private_field_get(_this, _id))
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
    return CdpBrowserContext;
} //# sourceMappingURL=BrowserContext.js.map
(_api_BrowserContext_js__WEBPACK_IMPORTED_MODULE_1__.BrowserContext);


}),

}]);