"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_bidi_core_Realm_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/bidi/core/Realm.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DedicatedWorkerRealm: function() { return DedicatedWorkerRealm; },
  Realm: function() { return Realm; },
  SharedWorkerRealm: function() { return SharedWorkerRealm; },
  WindowRealm: function() { return WindowRealm; }
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
var _a;



/**
 * @internal
 */ var Realm = function() {
    var _tmp;
    var _reason, _Realm;
    var _classSuper = _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter;
    var _instanceExtraInitializers = [];
    var _dispose_decorators;
    var _disown_decorators;
    var _callFunction_decorators;
    var _evaluate_decorators;
    var _resolveExecutionContextId_decorators;
    return _reason = /*#__PURE__*/ new WeakMap(), _tmp = (_dispose_decorators = [
        _util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.inertIfDisposed
    ], _disown_decorators = [
        (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(function(realm) {
            // SAFETY: Disposal implies this exists.
            return _class_private_field_get(realm, _reason);
        })
    ], _callFunction_decorators = [
        (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(function(realm) {
            // SAFETY: Disposal implies this exists.
            return _class_private_field_get(realm, _reason);
        })
    ], _evaluate_decorators = [
        (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(function(realm) {
            // SAFETY: Disposal implies this exists.
            return _class_private_field_get(realm, _reason);
        })
    ], _resolveExecutionContextId_decorators = [
        (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(function(realm) {
            // SAFETY: Disposal implies this exists.
            return _class_private_field_get(realm, _reason);
        })
    ], _util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.disposeSymbol), _Realm = /*#__PURE__*/ function(_classSuper) {
        "use strict";
        _inherits(Realm, _classSuper);
        var _super = _create_super(Realm);
        function Realm(id, origin) {
            _class_call_check(this, Realm);
            var _this;
            _this = _super.call(this);
            _class_private_field_init(_assert_this_initialized(_this), _reason, {
                writable: true,
                value: __runInitializers(_assert_this_initialized(_this), _instanceExtraInitializers)
            });
            _define_property(_assert_this_initialized(_this), "disposables", new _util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.DisposableStack());
            _define_property(_assert_this_initialized(_this), "id", void 0);
            _define_property(_assert_this_initialized(_this), "origin", void 0);
            _define_property(_assert_this_initialized(_this), "executionContextId", void 0);
            _this.id = id;
            _this.origin = origin;
            return _this;
        }
        _create_class(Realm, [
            {
                key: "disposed",
                get: function get() {
                    return _class_private_field_get(this, _reason) !== undefined;
                }
            },
            {
                key: "target",
                get: function get() {
                    return {
                        realm: this.id
                    };
                }
            },
            {
                key: "dispose",
                value: function dispose(reason) {
                    _class_private_field_set(this, _reason, reason);
                    this[_util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.disposeSymbol]();
                }
            },
            {
                key: "disown",
                value: function disown(handles) {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this.session.send('script.disown', {
                                            target: _this.target,
                                            handles: handles
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
                key: "callFunction",
                value: function callFunction(functionDeclaration, awaitPromise) {
                    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                    var _this = this;
                    return _async_to_generator(function() {
                        var result;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this.session.send('script.callFunction', _object_spread({
                                            functionDeclaration: functionDeclaration,
                                            awaitPromise: awaitPromise,
                                            target: _this.target
                                        }, options))
                                    ];
                                case 1:
                                    result = _state.sent().result;
                                    return [
                                        2,
                                        result
                                    ];
                            }
                        });
                    })();
                }
            },
            {
                key: "evaluate",
                value: function evaluate(expression, awaitPromise) {
                    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                    var _this = this;
                    return _async_to_generator(function() {
                        var result;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this.session.send('script.evaluate', _object_spread({
                                            expression: expression,
                                            awaitPromise: awaitPromise,
                                            target: _this.target
                                        }, options))
                                    ];
                                case 1:
                                    result = _state.sent().result;
                                    return [
                                        2,
                                        result
                                    ];
                            }
                        });
                    })();
                }
            },
            {
                key: "resolveExecutionContextId",
                value: function resolveExecutionContextId() {
                    var _this = this;
                    return _async_to_generator(function() {
                        var result;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    if (!!_this.executionContextId) return [
                                        3,
                                        2
                                    ];
                                    return [
                                        4,
                                        _this.session.connection.send('cdp.resolveRealm', {
                                            realm: _this.id
                                        })
                                    ];
                                case 1:
                                    result = _state.sent().result;
                                    _this.executionContextId = result.executionContextId;
                                    _state.label = 2;
                                case 2:
                                    return [
                                        2,
                                        _this.executionContextId
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
                    _class_private_field_set(this, _reason, (_$_class_private_field_get = _class_private_field_get(this, _reason)) !== null && _$_class_private_field_get !== void 0 ? _$_class_private_field_get : 'Realm already destroyed, probably because all associated browsing contexts closed.');
                    this.emit('destroyed', {
                        reason: _class_private_field_get(this, _reason)
                    });
                    this.disposables.dispose();
                    _get(_get_prototype_of(Realm.prototype), _util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.disposeSymbol, this).call(this);
                }
            }
        ]);
        return Realm;
    }(_classSuper), function() {
        var _classSuper_Symbol_metadata;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_classSuper_Symbol_metadata = _classSuper[Symbol.metadata]) !== null && _classSuper_Symbol_metadata !== void 0 ? _classSuper_Symbol_metadata : null) : void 0;
        __esDecorate(_Realm, null, _dispose_decorators, {
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
        __esDecorate(_Realm, null, _disown_decorators, {
            kind: "method",
            name: "disown",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "disown" in obj;
                },
                get: function(obj) {
                    return obj.disown;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_Realm, null, _callFunction_decorators, {
            kind: "method",
            name: "callFunction",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "callFunction" in obj;
                },
                get: function(obj) {
                    return obj.callFunction;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_Realm, null, _evaluate_decorators, {
            kind: "method",
            name: "evaluate",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "evaluate" in obj;
                },
                get: function(obj) {
                    return obj.evaluate;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_Realm, null, _resolveExecutionContextId_decorators, {
            kind: "method",
            name: "resolveExecutionContextId",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "resolveExecutionContextId" in obj;
                },
                get: function(obj) {
                    return obj.resolveExecutionContextId;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        if (_metadata) Object.defineProperty(_Realm, Symbol.metadata, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _metadata
        });
    }(), _Realm;
}();

var _workers = /*#__PURE__*/ new WeakMap(), _initialize = /*#__PURE__*/ new WeakSet();
/**
 * @internal
 */ var WindowRealm = /*#__PURE__*/ function(Realm) {
    "use strict";
    _inherits(WindowRealm, Realm);
    var _super = _create_super(WindowRealm);
    function WindowRealm(context, sandbox) {
        _class_call_check(this, WindowRealm);
        var _this;
        _this = _super.call(this, '', '');
        _class_private_method_init(_assert_this_initialized(_this), _initialize);
        _define_property(_assert_this_initialized(_this), "browsingContext", void 0);
        _define_property(_assert_this_initialized(_this), "sandbox", void 0);
        _class_private_field_init(_assert_this_initialized(_this), _workers, {
            writable: true,
            value: new Map()
        });
        _this.browsingContext = context;
        _this.sandbox = sandbox;
        return _this;
    }
    _create_class(WindowRealm, [
        {
            key: "session",
            get: function get() {
                return this.browsingContext.userContext.browser.session;
            }
        },
        {
            key: "target",
            get: function get() {
                return {
                    context: this.browsingContext.id,
                    sandbox: this.sandbox
                };
            }
        }
    ], [
        {
            key: "from",
            value: function from(context, sandbox) {
                var realm = new WindowRealm(context, sandbox);
                _class_private_method_get(realm, _initialize, initialize).call(realm);
                return realm;
            }
        }
    ]);
    return WindowRealm;
}(Realm);
function initialize() {
    var _this = this;
    var browsingContextEmitter = this.disposables.use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(this.browsingContext));
    browsingContextEmitter.on('closed', function(param) {
        var reason = param.reason;
        _this.dispose(reason);
    });
    var sessionEmitter = this.disposables.use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(this.session));
    sessionEmitter.on('script.realmCreated', function(info) {
        if (info.type !== 'window' || info.context !== _this.browsingContext.id || info.sandbox !== _this.sandbox) {
            return;
        }
        _this.id = info.realm;
        _this.origin = info.origin;
        _this.executionContextId = undefined;
        _this.emit('updated', _this);
    });
    sessionEmitter.on('script.realmCreated', function(info) {
        if (info.type !== 'dedicated-worker') {
            return;
        }
        if (!info.owners.includes(_this.id)) {
            return;
        }
        var realm = DedicatedWorkerRealm.from(_this, info.realm, info.origin);
        _class_private_field_get(_this, _workers).set(realm.id, realm);
        var realmEmitter = _this.disposables.use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(realm));
        realmEmitter.once('destroyed', function() {
            realmEmitter.removeAllListeners();
            _class_private_field_get(_this, _workers).delete(realm.id);
        });
        _this.emit('worker', realm);
    });
}
var _workers1 = /*#__PURE__*/ new WeakMap(), _initialize1 = /*#__PURE__*/ new WeakSet();
/**
 * @internal
 */ var DedicatedWorkerRealm = /*#__PURE__*/ function(Realm) {
    "use strict";
    _inherits(DedicatedWorkerRealm, Realm);
    var _super = _create_super(DedicatedWorkerRealm);
    function DedicatedWorkerRealm(owner, id, origin) {
        _class_call_check(this, DedicatedWorkerRealm);
        var _this;
        _this = _super.call(this, id, origin);
        _class_private_method_init(_assert_this_initialized(_this), _initialize1);
        _class_private_field_init(_assert_this_initialized(_this), _workers1, {
            writable: true,
            value: new Map()
        });
        _define_property(_assert_this_initialized(_this), "owners", void 0);
        _this.owners = new Set([
            owner
        ]);
        return _this;
    }
    _create_class(DedicatedWorkerRealm, [
        {
            key: "session",
            get: function get() {
                // SAFETY: At least one owner will exist.
                return this.owners.values().next().value.session;
            }
        }
    ], [
        {
            key: "from",
            value: function from(owner, id, origin) {
                var realm = new _a(owner, id, origin);
                _class_private_method_get(realm, _initialize1, initialize1).call(realm);
                return realm;
            }
        }
    ]);
    return DedicatedWorkerRealm;
}(Realm);
function initialize1() {
    var _this = this;
    var sessionEmitter = this.disposables.use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(this.session));
    sessionEmitter.on('script.realmDestroyed', function(info) {
        if (info.realm !== _this.id) {
            return;
        }
        _this.dispose('Realm already destroyed.');
    });
    sessionEmitter.on('script.realmCreated', function(info) {
        if (info.type !== 'dedicated-worker') {
            return;
        }
        if (!info.owners.includes(_this.id)) {
            return;
        }
        var realm = _a.from(_this, info.realm, info.origin);
        _class_private_field_get(_this, _workers1).set(realm.id, realm);
        var realmEmitter = _this.disposables.use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(realm));
        realmEmitter.once('destroyed', function() {
            _class_private_field_get(_this, _workers1).delete(realm.id);
        });
        _this.emit('worker', realm);
    });
}
_a = DedicatedWorkerRealm;
var _workers2 = /*#__PURE__*/ new WeakMap(), _initialize2 = /*#__PURE__*/ new WeakSet();
/**
 * @internal
 */ var SharedWorkerRealm = /*#__PURE__*/ function(Realm) {
    "use strict";
    _inherits(SharedWorkerRealm, Realm);
    var _super = _create_super(SharedWorkerRealm);
    function SharedWorkerRealm(browser, id, origin) {
        _class_call_check(this, SharedWorkerRealm);
        var _this;
        _this = _super.call(this, id, origin);
        _class_private_method_init(_assert_this_initialized(_this), _initialize2);
        _class_private_field_init(_assert_this_initialized(_this), _workers2, {
            writable: true,
            value: new Map()
        });
        _define_property(_assert_this_initialized(_this), "browser", void 0);
        _this.browser = browser;
        return _this;
    }
    _create_class(SharedWorkerRealm, [
        {
            key: "session",
            get: function get() {
                return this.browser.session;
            }
        }
    ], [
        {
            key: "from",
            value: function from(browser, id, origin) {
                var realm = new SharedWorkerRealm(browser, id, origin);
                _class_private_method_get(realm, _initialize2, initialize2).call(realm);
                return realm;
            }
        }
    ]);
    return SharedWorkerRealm;
} //# sourceMappingURL=Realm.js.map
(Realm);
function initialize2() {
    var _this = this;
    var sessionEmitter = this.disposables.use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(this.session));
    sessionEmitter.on('script.realmDestroyed', function(info) {
        if (info.realm !== _this.id) {
            return;
        }
        _this.dispose('Realm already destroyed.');
    });
    sessionEmitter.on('script.realmCreated', function(info) {
        if (info.type !== 'dedicated-worker') {
            return;
        }
        if (!info.owners.includes(_this.id)) {
            return;
        }
        var realm = DedicatedWorkerRealm.from(_this, info.realm, info.origin);
        _class_private_field_get(_this, _workers2).set(realm.id, realm);
        var realmEmitter = _this.disposables.use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(realm));
        realmEmitter.once('destroyed', function() {
            _class_private_field_get(_this, _workers2).delete(realm.id);
        });
        _this.emit('worker', realm);
    });
}


}),

}]);