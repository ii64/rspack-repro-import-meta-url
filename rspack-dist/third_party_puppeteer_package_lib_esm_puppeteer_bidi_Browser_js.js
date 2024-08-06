"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_bidi_Browser_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/bidi/Browser.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BidiBrowser: function() { return BidiBrowser; }
});
/* harmony import */var _api_Browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/Browser.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/Browser.js");
/* harmony import */var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/EventEmitter.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/EventEmitter.js");
/* harmony import */var _common_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */var _util_decorators_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/decorators.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/decorators.js");
/* harmony import */var _BrowserContext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BrowserContext.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/BrowserContext.js");
/* harmony import */var _core_Session_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/Session.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/core/Session.js");
/* harmony import */var _Target_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Target.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/Target.js");
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
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
var __runInitializers = undefined && undefined.__runInitializers || function(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++){
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = undefined && undefined.__setFunctionName || function(f, name, prefix) {
    if ((typeof name === "undefined" ? "undefined" : _type_of(name)) === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
};







/**
 * @internal
 */ var BidiBrowser = function() {
    var get_trustedEmitter = function get_trustedEmitter() {
        return _private_trustedEmitter_descriptor.get.call(this);
    };
    var set_trustedEmitter = function set_trustedEmitter(value) {
        return _private_trustedEmitter_descriptor.set.call(this, value);
    };
    var initialize = function initialize() {
        var _this = this;
        var _$_class_private_field_get;
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            // Initializing existing contexts.
            for(var _iterator = _class_private_field_get(this, _browserCore).userContexts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var userContext = _step.value;
                _class_private_method_get(this, _createBrowserContext, createBrowserContext).call(this, userContext);
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
        _class_private_field_get(this, _browserCore).once('disconnected', function() {
            _class_private_field_get(_this, _trustedEmitter).emit("disconnected" /* BrowserEvent.Disconnected */ , undefined);
            _class_private_field_get(_this, _trustedEmitter).removeAllListeners();
        });
        (_$_class_private_field_get = _class_private_field_get(this, _process)) === null || _$_class_private_field_get === void 0 ? void 0 : _$_class_private_field_get.once('close', function() {
            _class_private_field_get(_this, _browserCore).dispose('Browser process exited.', true);
            _this.connection.dispose();
        });
    };
    var get_browserName = function get_browserName() {
        return _class_private_field_get(this, _browserCore).session.capabilities.browserName;
    };
    var get_browserVersion = function get_browserVersion() {
        return _class_private_field_get(this, _browserCore).session.capabilities.browserVersion;
    };
    var createBrowserContext = function createBrowserContext(userContext) {
        var _this = this;
        var browserContext = _BrowserContext_js__WEBPACK_IMPORTED_MODULE_4__.BidiBrowserContext.from(this, userContext, {
            defaultViewport: _class_private_field_get(this, _defaultViewport)
        });
        _class_private_field_get(this, _browserContexts).set(userContext, browserContext);
        browserContext.trustedEmitter.on("targetcreated" /* BrowserContextEvent.TargetCreated */ , function(target) {
            _class_private_field_get(_this, _trustedEmitter).emit("targetcreated" /* BrowserEvent.TargetCreated */ , target);
        });
        browserContext.trustedEmitter.on("targetchanged" /* BrowserContextEvent.TargetChanged */ , function(target) {
            _class_private_field_get(_this, _trustedEmitter).emit("targetchanged" /* BrowserEvent.TargetChanged */ , target);
        });
        browserContext.trustedEmitter.on("targetdestroyed" /* BrowserContextEvent.TargetDestroyed */ , function(target) {
            _class_private_field_get(_this, _trustedEmitter).emit("targetdestroyed" /* BrowserEvent.TargetDestroyed */ , target);
        });
        return browserContext;
    };
    var _trustedEmitter_accessor_storage, _trustedEmitter, _process, _closeCallback, _browserCore, _defaultViewport, _browserContexts, _target, _cdpConnection, _initialize, _browserName, _browserVersion, _createBrowserContext, _BidiBrowser;
    var _classSuper = _api_Browser_js__WEBPACK_IMPORTED_MODULE_0__.Browser;
    var _private_trustedEmitter_decorators;
    var _private_trustedEmitter_initializers = [];
    var _private_trustedEmitter_extraInitializers = [];
    var _private_trustedEmitter_descriptor;
    return _trustedEmitter_accessor_storage = /*#__PURE__*/ new WeakMap(), _trustedEmitter = /*#__PURE__*/ new WeakMap(), _process = /*#__PURE__*/ new WeakMap(), _closeCallback = /*#__PURE__*/ new WeakMap(), _browserCore = /*#__PURE__*/ new WeakMap(), _defaultViewport = /*#__PURE__*/ new WeakMap(), _browserContexts = /*#__PURE__*/ new WeakMap(), _target = /*#__PURE__*/ new WeakMap(), _cdpConnection = /*#__PURE__*/ new WeakMap(), _initialize = /*#__PURE__*/ new WeakSet(), _browserName = /*#__PURE__*/ new WeakMap(), _browserVersion = /*#__PURE__*/ new WeakMap(), _createBrowserContext = /*#__PURE__*/ new WeakSet(), _BidiBrowser = /*#__PURE__*/ function(_classSuper) {
        "use strict";
        _inherits(BidiBrowser, _classSuper);
        var _super = _create_super(BidiBrowser);
        function BidiBrowser(browserCore, opts) {
            _class_call_check(this, BidiBrowser);
            var _this;
            _this = _super.call(this);
            _class_private_field_init(_assert_this_initialized(_this), _trustedEmitter, {
                get: get_trustedEmitter,
                set: set_trustedEmitter
            });
            _class_private_method_init(_assert_this_initialized(_this), _initialize);
            _class_private_field_init(_assert_this_initialized(_this), _browserName, {
                get: get_browserName,
                set: void 0
            });
            _class_private_field_init(_assert_this_initialized(_this), _browserVersion, {
                get: get_browserVersion,
                set: void 0
            });
            _class_private_method_init(_assert_this_initialized(_this), _createBrowserContext);
            _define_property(_assert_this_initialized(_this), "protocol", 'webDriverBiDi');
            _class_private_field_init(_assert_this_initialized(_this), _trustedEmitter_accessor_storage, {
                writable: true,
                value: __runInitializers(_assert_this_initialized(_this), _private_trustedEmitter_initializers, new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__.EventEmitter())
            });
            _class_private_field_init(_assert_this_initialized(_this), _process, {
                writable: true,
                value: __runInitializers(_assert_this_initialized(_this), _private_trustedEmitter_extraInitializers)
            });
            _class_private_field_init(_assert_this_initialized(_this), _closeCallback, {
                writable: true,
                value: void 0
            });
            _class_private_field_init(_assert_this_initialized(_this), _browserCore, {
                writable: true,
                value: void 0
            });
            _class_private_field_init(_assert_this_initialized(_this), _defaultViewport, {
                writable: true,
                value: void 0
            });
            _class_private_field_init(_assert_this_initialized(_this), _browserContexts, {
                writable: true,
                value: new WeakMap()
            });
            _class_private_field_init(_assert_this_initialized(_this), _target, {
                writable: true,
                value: new _Target_js__WEBPACK_IMPORTED_MODULE_6__.BidiBrowserTarget(_assert_this_initialized(_this))
            });
            _class_private_field_init(_assert_this_initialized(_this), _cdpConnection, {
                writable: true,
                value: void 0
            });
            _class_private_field_set(_assert_this_initialized(_this), _process, opts.process);
            _class_private_field_set(_assert_this_initialized(_this), _closeCallback, opts.closeCallback);
            _class_private_field_set(_assert_this_initialized(_this), _browserCore, browserCore);
            _class_private_field_set(_assert_this_initialized(_this), _defaultViewport, opts.defaultViewport);
            _class_private_field_set(_assert_this_initialized(_this), _cdpConnection, opts.cdpConnection);
            return _this;
        }
        _create_class(BidiBrowser, [
            {
                key: "cdpSupported",
                get: function get() {
                    return _class_private_field_get(this, _cdpConnection) !== undefined;
                }
            },
            {
                key: "cdpConnection",
                get: function get() {
                    return _class_private_field_get(this, _cdpConnection);
                }
            },
            {
                key: "userAgent",
                value: function userAgent() {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            return [
                                2,
                                _class_private_field_get(_this, _browserCore).session.capabilities.userAgent
                            ];
                        });
                    })();
                }
            },
            {
                key: "connection",
                get: function get() {
                    // SAFETY: We only have one implementation.
                    return _class_private_field_get(this, _browserCore).session.connection;
                }
            },
            {
                key: "wsEndpoint",
                value: function wsEndpoint() {
                    return this.connection.url;
                }
            },
            {
                key: "close",
                value: function close() {
                    var _this = this;
                    return _async_to_generator(function() {
                        var _$_class_private_field_get, error;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    if (_this.connection.closed) {
                                        return [
                                            2
                                        ];
                                    }
                                    _state.label = 1;
                                case 1:
                                    _state.trys.push([
                                        1,
                                        4,
                                        5,
                                        6
                                    ]);
                                    return [
                                        4,
                                        _class_private_field_get(_this, _browserCore).close()
                                    ];
                                case 2:
                                    _state.sent();
                                    return [
                                        4,
                                        (_$_class_private_field_get = _class_private_field_get(_this, _closeCallback)) === null || _$_class_private_field_get === void 0 ? void 0 : _$_class_private_field_get.call(null)
                                    ];
                                case 3:
                                    _state.sent();
                                    return [
                                        3,
                                        6
                                    ];
                                case 4:
                                    error = _state.sent();
                                    // Fail silently.
                                    (0,_common_util_js__WEBPACK_IMPORTED_MODULE_2__.debugError)(error);
                                    return [
                                        3,
                                        6
                                    ];
                                case 5:
                                    _this.connection.dispose();
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
                key: "connected",
                get: function get() {
                    return !_class_private_field_get(this, _browserCore).disconnected;
                }
            },
            {
                key: "process",
                value: function process() {
                    var _$_class_private_field_get;
                    return (_$_class_private_field_get = _class_private_field_get(this, _process)) !== null && _$_class_private_field_get !== void 0 ? _$_class_private_field_get : null;
                }
            },
            {
                key: "createBrowserContext",
                value: function createBrowserContext1(_options) {
                    var _this = this;
                    return _async_to_generator(function() {
                        var userContext;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _class_private_field_get(_this, _browserCore).createUserContext()
                                    ];
                                case 1:
                                    userContext = _state.sent();
                                    return [
                                        2,
                                        _class_private_method_get(_this, _createBrowserContext, createBrowserContext).call(_this, userContext)
                                    ];
                            }
                        });
                    })();
                }
            },
            {
                key: "version",
                value: function version() {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            return [
                                2,
                                "".concat(_class_private_field_get(_this, _browserName), "/").concat(_class_private_field_get(_this, _browserVersion))
                            ];
                        });
                    })();
                }
            },
            {
                key: "browserContexts",
                value: function browserContexts() {
                    var _this = this;
                    return _to_consumable_array(_class_private_field_get(this, _browserCore).userContexts).map(function(context) {
                        return _class_private_field_get(_this, _browserContexts).get(context);
                    });
                }
            },
            {
                key: "defaultBrowserContext",
                value: function defaultBrowserContext() {
                    return _class_private_field_get(this, _browserContexts).get(_class_private_field_get(this, _browserCore).defaultUserContext);
                }
            },
            {
                key: "newPage",
                value: function newPage() {
                    return this.defaultBrowserContext().newPage();
                }
            },
            {
                key: "targets",
                value: function targets() {
                    return [
                        _class_private_field_get(this, _target)
                    ].concat(_to_consumable_array(this.browserContexts().flatMap(function(context) {
                        return context.targets();
                    })));
                }
            },
            {
                key: "target",
                value: function target() {
                    return _class_private_field_get(this, _target);
                }
            },
            {
                key: "disconnect",
                value: function disconnect() {
                    var _this = this;
                    return _async_to_generator(function() {
                        var error;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    _state.trys.push([
                                        0,
                                        2,
                                        3,
                                        4
                                    ]);
                                    return [
                                        4,
                                        _class_private_field_get(_this, _browserCore).session.end()
                                    ];
                                case 1:
                                    _state.sent();
                                    return [
                                        3,
                                        4
                                    ];
                                case 2:
                                    error = _state.sent();
                                    // Fail silently.
                                    (0,_common_util_js__WEBPACK_IMPORTED_MODULE_2__.debugError)(error);
                                    return [
                                        3,
                                        4
                                    ];
                                case 3:
                                    _this.connection.dispose();
                                    return [
                                        7
                                    ];
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
                key: "debugInfo",
                get: function get() {
                    return {
                        pendingProtocolErrors: this.connection.getPendingProtocolErrors()
                    };
                }
            }
        ], [
            {
                key: "create",
                value: function create(opts) {
                    return _async_to_generator(function() {
                        var session, browser;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _core_Session_js__WEBPACK_IMPORTED_MODULE_5__.Session.from(opts.connection, {
                                            alwaysMatch: {
                                                acceptInsecureCerts: opts.ignoreHTTPSErrors,
                                                unhandledPromptBehavior: {
                                                    default: "ignore" /* Bidi.Session.UserPromptHandlerType.Ignore */ 
                                                },
                                                webSocketUrl: true
                                            }
                                        })
                                    ];
                                case 1:
                                    session = _state.sent();
                                    return [
                                        4,
                                        session.subscribe(session.capabilities.browserName.toLocaleLowerCase().includes('firefox') ? BidiBrowser.subscribeModules : _to_consumable_array(BidiBrowser.subscribeModules).concat(_to_consumable_array(BidiBrowser.subscribeCdpEvents)))
                                    ];
                                case 2:
                                    _state.sent();
                                    browser = new BidiBrowser(session.browser, opts);
                                    _class_private_method_get(browser, _initialize, initialize).call(browser);
                                    return [
                                        2,
                                        browser
                                    ];
                            }
                        });
                    })();
                }
            }
        ]);
        return BidiBrowser;
    }(_classSuper), function() {
        var _classSuper_Symbol_metadata;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_classSuper_Symbol_metadata = _classSuper[Symbol.metadata]) !== null && _classSuper_Symbol_metadata !== void 0 ? _classSuper_Symbol_metadata : null) : void 0;
        _private_trustedEmitter_decorators = [
            (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_3__.bubble)()
        ];
        __esDecorate(_BidiBrowser, _private_trustedEmitter_descriptor = {
            get: __setFunctionName(function() {
                return _class_private_field_get(this, _trustedEmitter_accessor_storage);
            }, "#trustedEmitter", "get"),
            set: __setFunctionName(function(value) {
                _class_private_field_set(this, _trustedEmitter_accessor_storage, value);
            }, "#trustedEmitter", "set")
        }, _private_trustedEmitter_decorators, {
            kind: "accessor",
            name: "#trustedEmitter",
            static: false,
            private: true,
            access: {
                has: function(obj) {
                    return _trustedEmitter.has(obj);
                },
                get: function(obj) {
                    return _class_private_field_get(obj, _trustedEmitter);
                },
                set: function(obj, value) {
                    _class_private_field_set(obj, _trustedEmitter, value);
                }
            },
            metadata: _metadata
        }, _private_trustedEmitter_initializers, _private_trustedEmitter_extraInitializers);
        if (_metadata) Object.defineProperty(_BidiBrowser, Symbol.metadata, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _metadata
        });
    }(), _define_property(_BidiBrowser, "subscribeModules", [
        'browsingContext',
        'network',
        'log',
        'script'
    ]), _define_property(_BidiBrowser, "subscribeCdpEvents", [
        // Coverage
        'cdp.Debugger.scriptParsed',
        'cdp.CSS.styleSheetAdded',
        'cdp.Runtime.executionContextsCleared',
        // Tracing
        'cdp.Tracing.tracingComplete',
        // TODO: subscribe to all CDP events in the future.
        'cdp.Network.requestWillBeSent',
        'cdp.Debugger.scriptParsed',
        'cdp.Page.screencastFrame'
    ]), _BidiBrowser;
}();
 //# sourceMappingURL=Browser.js.map


}),

}]);