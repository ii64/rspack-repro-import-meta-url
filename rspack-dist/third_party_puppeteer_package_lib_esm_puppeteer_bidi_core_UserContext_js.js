"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_bidi_core_UserContext_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/bidi/core/UserContext.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  UserContext: function() { return UserContext; }
});
/* harmony import */var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/EventEmitter.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/EventEmitter.js");
/* harmony import */var _util_assert_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/assert.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js");
/* harmony import */var _util_decorators_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/decorators.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/decorators.js");
/* harmony import */var _util_disposable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/disposable.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/disposable.js");
/* harmony import */var _BrowsingContext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BrowsingContext.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/core/BrowsingContext.js");
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
 */ var UserContext = function() {
    var initialize = function initialize() {
        var _this = this;
        var browserEmitter = _class_private_field_get(this, _disposables).use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(this.browser));
        browserEmitter.once('closed', function(param) {
            var reason = param.reason;
            _this.dispose("User context was closed: ".concat(reason));
        });
        browserEmitter.once('disconnected', function(param) {
            var reason = param.reason;
            _this.dispose("User context was closed: ".concat(reason));
        });
        var sessionEmitter = _class_private_field_get(this, _disposables).use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(_class_private_field_get(this, _session)));
        sessionEmitter.on('browsingContext.contextCreated', function(info) {
            if (info.parent) {
                return;
            }
            if (info.userContext !== _class_private_field_get(_this, _id)) {
                return;
            }
            var browsingContext = _BrowsingContext_js__WEBPACK_IMPORTED_MODULE_4__.BrowsingContext.from(_this, undefined, info.context, info.url, info.originalOpener);
            _class_private_field_get(_this, _browsingContexts).set(browsingContext.id, browsingContext);
            var browsingContextEmitter = _class_private_field_get(_this, _disposables).use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(browsingContext));
            browsingContextEmitter.on('closed', function() {
                browsingContextEmitter.removeAllListeners();
                _class_private_field_get(_this, _browsingContexts).delete(browsingContext.id);
            });
            _this.emit('browsingcontext', {
                browsingContext: browsingContext
            });
        });
    };
    var get_session = function get_session() {
        return this.browser.session;
    };
    var _tmp;
    var _reason, // Note these are only top-level contexts.
    _browsingContexts, _disposables, _id, _initialize, _session, _UserContext;
    var _classSuper = _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter;
    var _instanceExtraInitializers = [];
    var _dispose_decorators;
    var _createBrowsingContext_decorators;
    var _remove_decorators;
    var _getCookies_decorators;
    var _setCookie_decorators;
    var _setPermissions_decorators;
    return _reason = /*#__PURE__*/ new WeakMap(), _browsingContexts = /*#__PURE__*/ new WeakMap(), _disposables = /*#__PURE__*/ new WeakMap(), _id = /*#__PURE__*/ new WeakMap(), _initialize = /*#__PURE__*/ new WeakSet(), _session = /*#__PURE__*/ new WeakMap(), _tmp = (_dispose_decorators = [
        _util_decorators_js__WEBPACK_IMPORTED_MODULE_2__.inertIfDisposed
    ], _createBrowsingContext_decorators = [
        (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_2__.throwIfDisposed)(function(context) {
            // SAFETY: Disposal implies this exists.
            return _class_private_field_get(context, _reason);
        })
    ], _remove_decorators = [
        (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_2__.throwIfDisposed)(function(context) {
            // SAFETY: Disposal implies this exists.
            return _class_private_field_get(context, _reason);
        })
    ], _getCookies_decorators = [
        (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_2__.throwIfDisposed)(function(context) {
            // SAFETY: Disposal implies this exists.
            return _class_private_field_get(context, _reason);
        })
    ], _setCookie_decorators = [
        (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_2__.throwIfDisposed)(function(context) {
            // SAFETY: Disposal implies this exists.
            return _class_private_field_get(context, _reason);
        })
    ], _setPermissions_decorators = [
        (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_2__.throwIfDisposed)(function(context) {
            // SAFETY: Disposal implies this exists.
            return _class_private_field_get(context, _reason);
        })
    ], _util_disposable_js__WEBPACK_IMPORTED_MODULE_3__.disposeSymbol), _UserContext = /*#__PURE__*/ function(_classSuper) {
        "use strict";
        _inherits(UserContext, _classSuper);
        var _super = _create_super(UserContext);
        function UserContext(browser, id) {
            _class_call_check(this, UserContext);
            var _this;
            _this = _super.call(this);
            _class_private_method_init(_assert_this_initialized(_this), _initialize);
            _class_private_field_init(_assert_this_initialized(_this), _session, {
                get: get_session,
                set: void 0
            });
            _class_private_field_init(_assert_this_initialized(_this), _reason, {
                writable: true,
                value: __runInitializers(_assert_this_initialized(_this), _instanceExtraInitializers)
            });
            _class_private_field_init(_assert_this_initialized(_this), _browsingContexts, {
                writable: true,
                value: new Map()
            });
            _class_private_field_init(_assert_this_initialized(_this), _disposables, {
                writable: true,
                value: new _util_disposable_js__WEBPACK_IMPORTED_MODULE_3__.DisposableStack()
            });
            _class_private_field_init(_assert_this_initialized(_this), _id, {
                writable: true,
                value: void 0
            });
            _define_property(_assert_this_initialized(_this), "browser", void 0);
            _class_private_field_set(_assert_this_initialized(_this), _id, id);
            _this.browser = browser;
            return _this;
        }
        _create_class(UserContext, [
            {
                key: "browsingContexts",
                get: function get() {
                    return _class_private_field_get(this, _browsingContexts).values();
                }
            },
            {
                key: "closed",
                get: function get() {
                    return _class_private_field_get(this, _reason) !== undefined;
                }
            },
            {
                key: "disposed",
                get: function get() {
                    return this.closed;
                }
            },
            {
                key: "id",
                get: function get() {
                    return _class_private_field_get(this, _id);
                }
            },
            {
                key: "dispose",
                value: function dispose(reason) {
                    _class_private_field_set(this, _reason, reason);
                    this[_util_disposable_js__WEBPACK_IMPORTED_MODULE_3__.disposeSymbol]();
                }
            },
            {
                key: "createBrowsingContext",
                value: function createBrowsingContext(type) {
                    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                    var _this = this;
                    return _async_to_generator(function() {
                        var _options_referenceContext, _ref, _ref_result, contextId, browsingContext;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _class_private_field_get(_this, _session).send('browsingContext.create', _object_spread_props(_object_spread({
                                            type: type
                                        }, options), {
                                            referenceContext: (_options_referenceContext = options.referenceContext) === null || _options_referenceContext === void 0 ? void 0 : _options_referenceContext.id,
                                            userContext: _class_private_field_get(_this, _id)
                                        }))
                                    ];
                                case 1:
                                    _ref = _state.sent(), _ref_result = _ref.result, contextId = _ref_result.context;
                                    browsingContext = _class_private_field_get(_this, _browsingContexts).get(contextId);
                                    (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_1__.assert)(browsingContext, 'The WebDriver BiDi implementation is failing to create a browsing context correctly.');
                                    // We use an array to avoid the promise from being awaited.
                                    return [
                                        2,
                                        browsingContext
                                    ];
                            }
                        });
                    })();
                }
            },
            {
                key: "remove",
                value: function remove() {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    _state.trys.push([
                                        0,
                                        ,
                                        2,
                                        3
                                    ]);
                                    return [
                                        4,
                                        _class_private_field_get(_this, _session).send('browser.removeUserContext', {
                                            userContext: _class_private_field_get(_this, _id)
                                        })
                                    ];
                                case 1:
                                    _state.sent();
                                    return [
                                        3,
                                        3
                                    ];
                                case 2:
                                    _this.dispose('User context already closed.');
                                    return [
                                        7
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
                key: "getCookies",
                value: function getCookies() {
                    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, sourceOrigin = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : undefined;
                    var _this = this;
                    return _async_to_generator(function() {
                        var _ref, cookies;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _class_private_field_get(_this, _session).send('storage.getCookies', _object_spread_props(_object_spread({}, options), {
                                            partition: {
                                                type: 'storageKey',
                                                userContext: _class_private_field_get(_this, _id),
                                                sourceOrigin: sourceOrigin
                                            }
                                        }))
                                    ];
                                case 1:
                                    _ref = _state.sent(), cookies = _ref.result.cookies;
                                    return [
                                        2,
                                        cookies
                                    ];
                            }
                        });
                    })();
                }
            },
            {
                key: "setCookie",
                value: function setCookie(cookie, sourceOrigin) {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _class_private_field_get(_this, _session).send('storage.setCookie', {
                                            cookie: cookie,
                                            partition: {
                                                type: 'storageKey',
                                                sourceOrigin: sourceOrigin,
                                                userContext: _this.id
                                            }
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
                key: "setPermissions",
                value: function setPermissions(origin, descriptor, state) {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _class_private_field_get(_this, _session).send('permissions.setPermission', {
                                            origin: origin,
                                            descriptor: descriptor,
                                            state: state,
                                            userContext: _class_private_field_get(_this, _id)
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
                key: _tmp,
                value: function value() {
                    var _$_class_private_field_get;
                    _class_private_field_set(this, _reason, (_$_class_private_field_get = _class_private_field_get(this, _reason)) !== null && _$_class_private_field_get !== void 0 ? _$_class_private_field_get : 'User context already closed, probably because the browser disconnected/closed.');
                    this.emit('closed', {
                        reason: _class_private_field_get(this, _reason)
                    });
                    _class_private_field_get(this, _disposables).dispose();
                    _get(_get_prototype_of(UserContext.prototype), _util_disposable_js__WEBPACK_IMPORTED_MODULE_3__.disposeSymbol, this).call(this);
                }
            }
        ], [
            {
                key: "create",
                value: function create(browser, id) {
                    var context = new UserContext(browser, id);
                    _class_private_method_get(context, _initialize, initialize).call(context);
                    return context;
                }
            }
        ]);
        return UserContext;
    }(_classSuper), function() {
        var _classSuper_Symbol_metadata;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_classSuper_Symbol_metadata = _classSuper[Symbol.metadata]) !== null && _classSuper_Symbol_metadata !== void 0 ? _classSuper_Symbol_metadata : null) : void 0;
        __esDecorate(_UserContext, null, _dispose_decorators, {
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
        __esDecorate(_UserContext, null, _createBrowsingContext_decorators, {
            kind: "method",
            name: "createBrowsingContext",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "createBrowsingContext" in obj;
                },
                get: function(obj) {
                    return obj.createBrowsingContext;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_UserContext, null, _remove_decorators, {
            kind: "method",
            name: "remove",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "remove" in obj;
                },
                get: function(obj) {
                    return obj.remove;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_UserContext, null, _getCookies_decorators, {
            kind: "method",
            name: "getCookies",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "getCookies" in obj;
                },
                get: function(obj) {
                    return obj.getCookies;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_UserContext, null, _setCookie_decorators, {
            kind: "method",
            name: "setCookie",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "setCookie" in obj;
                },
                get: function(obj) {
                    return obj.setCookie;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_UserContext, null, _setPermissions_decorators, {
            kind: "method",
            name: "setPermissions",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "setPermissions" in obj;
                },
                get: function(obj) {
                    return obj.setPermissions;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        if (_metadata) Object.defineProperty(_UserContext, Symbol.metadata, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _metadata
        });
    }(), _define_property(_UserContext, "DEFAULT", 'default'), _UserContext;
}();
 //# sourceMappingURL=UserContext.js.map


}),

}]);