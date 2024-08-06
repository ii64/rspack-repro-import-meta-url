"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_bidi_BrowserContext_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/bidi/BrowserContext.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BidiBrowserContext: function() { return BidiBrowserContext; }
});
/* harmony import */var _api_Browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/Browser.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/Browser.js");
/* harmony import */var _api_BrowserContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/BrowserContext.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/BrowserContext.js");
/* harmony import */var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/EventEmitter.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/EventEmitter.js");
/* harmony import */var _common_util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */var _util_decorators_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/decorators.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/decorators.js");
/* harmony import */var _core_UserContext_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/UserContext.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/core/UserContext.js");
/* harmony import */var _Page_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Page.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/Page.js");
/* harmony import */var _Target_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Target.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/Target.js");
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
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









/**
 * @internal
 */ var BidiBrowserContext = function() {
    var initialize = function initialize() {
        var _this = this;
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            // Create targets for existing browsing contexts.
            for(var _iterator = this.userContext.browsingContexts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var browsingContext = _step.value;
                _class_private_method_get(this, _createPage, createPage).call(this, browsingContext);
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
        this.userContext.on('browsingcontext', function(param) {
            var browsingContext = param.browsingContext;
            var page = _class_private_method_get(_this, _createPage, createPage).call(_this, browsingContext);
            // We need to wait for the DOMContentLoaded as the
            // browsingContext still may be navigating from the about:blank
            browsingContext.once('DOMContentLoaded', function() {
                if (browsingContext.originalOpener) {
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = _this.userContext.browsingContexts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var context = _step.value;
                            if (context.id === browsingContext.originalOpener) {
                                _class_private_field_get(_this, _pages).get(context).trustedEmitter.emit("popup" /* PageEvent.Popup */ , page);
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
                }
            });
        });
        this.userContext.on('closed', function() {
            _this.trustedEmitter.removeAllListeners();
        });
    };
    var createPage = function createPage(browsingContext) {
        var _this = this;
        var page = _Page_js__WEBPACK_IMPORTED_MODULE_6__.BidiPage.from(this, browsingContext);
        _class_private_field_get(this, _pages).set(browsingContext, page);
        page.trustedEmitter.on("close" /* PageEvent.Close */ , function() {
            _class_private_field_get(_this, _pages).delete(browsingContext);
        });
        // -- Target stuff starts here --
        var pageTarget = new _Target_js__WEBPACK_IMPORTED_MODULE_7__.BidiPageTarget(page);
        var pageTargets = new Map();
        _class_private_field_get(this, _targets).set(page, [
            pageTarget,
            pageTargets
        ]);
        page.trustedEmitter.on("frameattached" /* PageEvent.FrameAttached */ , function(frame) {
            var bidiFrame = frame;
            var target = new _Target_js__WEBPACK_IMPORTED_MODULE_7__.BidiFrameTarget(bidiFrame);
            pageTargets.set(bidiFrame, target);
            _this.trustedEmitter.emit("targetcreated" /* BrowserContextEvent.TargetCreated */ , target);
        });
        page.trustedEmitter.on("framenavigated" /* PageEvent.FrameNavigated */ , function(frame) {
            var bidiFrame = frame;
            var target = pageTargets.get(bidiFrame);
            // If there is no target, then this is the page's frame.
            if (target === undefined) {
                _this.trustedEmitter.emit("targetchanged" /* BrowserContextEvent.TargetChanged */ , pageTarget);
            } else {
                _this.trustedEmitter.emit("targetchanged" /* BrowserContextEvent.TargetChanged */ , target);
            }
        });
        page.trustedEmitter.on("framedetached" /* PageEvent.FrameDetached */ , function(frame) {
            var bidiFrame = frame;
            var target = pageTargets.get(bidiFrame);
            if (target === undefined) {
                return;
            }
            pageTargets.delete(bidiFrame);
            _this.trustedEmitter.emit("targetdestroyed" /* BrowserContextEvent.TargetDestroyed */ , target);
        });
        page.trustedEmitter.on("workercreated" /* PageEvent.WorkerCreated */ , function(worker) {
            var bidiWorker = worker;
            var target = new _Target_js__WEBPACK_IMPORTED_MODULE_7__.BidiWorkerTarget(bidiWorker);
            pageTargets.set(bidiWorker, target);
            _this.trustedEmitter.emit("targetcreated" /* BrowserContextEvent.TargetCreated */ , target);
        });
        page.trustedEmitter.on("workerdestroyed" /* PageEvent.WorkerDestroyed */ , function(worker) {
            var bidiWorker = worker;
            var target = pageTargets.get(bidiWorker);
            if (target === undefined) {
                return;
            }
            pageTargets.delete(worker);
            _this.trustedEmitter.emit("targetdestroyed" /* BrowserContextEvent.TargetDestroyed */ , target);
        });
        page.trustedEmitter.on("close" /* PageEvent.Close */ , function() {
            _class_private_field_get(_this, _targets).delete(page);
            _this.trustedEmitter.emit("targetdestroyed" /* BrowserContextEvent.TargetDestroyed */ , pageTarget);
        });
        this.trustedEmitter.emit("targetcreated" /* BrowserContextEvent.TargetCreated */ , pageTarget);
        // -- Target stuff ends here --
        return page;
    };
    var _trustedEmitter_accessor_storage, _browser, _defaultViewport, _pages, _targets, _overrides, _initialize, _createPage, _BidiBrowserContext;
    var _classSuper = _api_BrowserContext_js__WEBPACK_IMPORTED_MODULE_1__.BrowserContext;
    var _trustedEmitter_decorators;
    var _trustedEmitter_initializers = [];
    var _trustedEmitter_extraInitializers = [];
    return _trustedEmitter_accessor_storage = /*#__PURE__*/ new WeakMap(), _browser = /*#__PURE__*/ new WeakMap(), _defaultViewport = /*#__PURE__*/ new WeakMap(), _pages = /*#__PURE__*/ new WeakMap(), _targets = /*#__PURE__*/ new WeakMap(), _overrides = /*#__PURE__*/ new WeakMap(), _initialize = /*#__PURE__*/ new WeakSet(), _createPage = /*#__PURE__*/ new WeakSet(), _BidiBrowserContext = /*#__PURE__*/ function(_classSuper) {
        "use strict";
        _inherits(BidiBrowserContext, _classSuper);
        var _super = _create_super(BidiBrowserContext);
        function BidiBrowserContext(browser, userContext, options) {
            _class_call_check(this, BidiBrowserContext);
            var _this;
            _this = _super.call(this);
            _class_private_method_init(_assert_this_initialized(_this), _initialize);
            _class_private_method_init(_assert_this_initialized(_this), _createPage);
            _class_private_field_init(_assert_this_initialized(_this), _trustedEmitter_accessor_storage, {
                writable: true,
                value: __runInitializers(_assert_this_initialized(_this), _trustedEmitter_initializers, new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_2__.EventEmitter())
            });
            _class_private_field_init(_assert_this_initialized(_this), _browser, {
                writable: true,
                value: __runInitializers(_assert_this_initialized(_this), _trustedEmitter_extraInitializers)
            });
            _class_private_field_init(_assert_this_initialized(_this), _defaultViewport, {
                writable: true,
                value: void 0
            });
            // This is public because of cookies.
            _define_property(_assert_this_initialized(_this), "userContext", void 0);
            _class_private_field_init(_assert_this_initialized(_this), _pages, {
                writable: true,
                value: new WeakMap()
            });
            _class_private_field_init(_assert_this_initialized(_this), _targets, {
                writable: true,
                value: new Map()
            });
            _class_private_field_init(_assert_this_initialized(_this), _overrides, {
                writable: true,
                value: []
            });
            _class_private_field_set(_assert_this_initialized(_this), _browser, browser);
            _this.userContext = userContext;
            _class_private_field_set(_assert_this_initialized(_this), _defaultViewport, options.defaultViewport);
            return _this;
        }
        _create_class(BidiBrowserContext, [
            {
                key: "trustedEmitter",
                get: function get() {
                    return _class_private_field_get(this, _trustedEmitter_accessor_storage);
                },
                set: function set(value) {
                    _class_private_field_set(this, _trustedEmitter_accessor_storage, value);
                }
            },
            {
                key: "targets",
                value: function targets() {
                    return _to_consumable_array(_class_private_field_get(this, _targets).values()).flatMap(function(param) {
                        var _param = _sliced_to_array(param, 2), target = _param[0], frames = _param[1];
                        return [
                            target
                        ].concat(_to_consumable_array(frames.values()));
                    });
                }
            },
            {
                key: "newPage",
                value: function newPage() {
                    var _this = this;
                    return _async_to_generator(function() {
                        var env_1, _guard, _tmp, context, page, e, e_1;
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
                                        8,
                                        9,
                                        10
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
                                        _this.userContext.createBrowsingContext("tab" /* Bidi.BrowsingContext.CreateType.Tab */ )
                                    ];
                                case 3:
                                    context = _state.sent();
                                    page = _class_private_field_get(_this, _pages).get(context);
                                    if (!page) {
                                        throw new Error('Page is not found');
                                    }
                                    if (!_class_private_field_get(_this, _defaultViewport)) return [
                                        3,
                                        7
                                    ];
                                    _state.label = 4;
                                case 4:
                                    _state.trys.push([
                                        4,
                                        6,
                                        ,
                                        7
                                    ]);
                                    return [
                                        4,
                                        page.setViewport(_class_private_field_get(_this, _defaultViewport))
                                    ];
                                case 5:
                                    _state.sent();
                                    return [
                                        3,
                                        7
                                    ];
                                case 6:
                                    e = _state.sent();
                                    return [
                                        3,
                                        7
                                    ];
                                case 7:
                                    return [
                                        2,
                                        page
                                    ];
                                case 8:
                                    e_1 = _state.sent();
                                    env_1.error = e_1;
                                    env_1.hasError = true;
                                    return [
                                        3,
                                        10
                                    ];
                                case 9:
                                    __disposeResources(env_1);
                                    return [
                                        7
                                    ];
                                case 10:
                                    return [
                                        2
                                    ];
                            }
                        });
                    })();
                }
            },
            {
                key: "close",
                value: function close() {
                    var _this = this;
                    return _async_to_generator(function() {
                        var error;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    if (!_this.isIncognito()) {
                                        throw new Error('Default context cannot be closed!');
                                    }
                                    _state.label = 1;
                                case 1:
                                    _state.trys.push([
                                        1,
                                        3,
                                        ,
                                        4
                                    ]);
                                    return [
                                        4,
                                        _this.userContext.remove()
                                    ];
                                case 2:
                                    _state.sent();
                                    return [
                                        3,
                                        4
                                    ];
                                case 3:
                                    error = _state.sent();
                                    (0,_common_util_js__WEBPACK_IMPORTED_MODULE_3__.debugError)(error);
                                    return [
                                        3,
                                        4
                                    ];
                                case 4:
                                    _class_private_field_get(_this, _targets).clear();
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
                key: "pages",
                value: function pages() {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            return [
                                2,
                                _to_consumable_array(_this.userContext.browsingContexts).map(function(context) {
                                    return _class_private_field_get(_this, _pages).get(context);
                                })
                            ];
                        });
                    })();
                }
            },
            {
                key: "isIncognito",
                value: function isIncognito() {
                    return this.userContext.id !== _core_UserContext_js__WEBPACK_IMPORTED_MODULE_5__.UserContext.DEFAULT;
                }
            },
            {
                key: "overridePermissions",
                value: function overridePermissions(origin, permissions) {
                    var _this = this;
                    return _async_to_generator(function() {
                        var permissionsSet;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    permissionsSet = new Set(permissions.map(function(permission) {
                                        var protocolPermission = _api_Browser_js__WEBPACK_IMPORTED_MODULE_0__.WEB_PERMISSION_TO_PROTOCOL_PERMISSION.get(permission);
                                        if (!protocolPermission) {
                                            throw new Error('Unknown permission: ' + permission);
                                        }
                                        return permission;
                                    }));
                                    return [
                                        4,
                                        Promise.all(Array.from(_api_Browser_js__WEBPACK_IMPORTED_MODULE_0__.WEB_PERMISSION_TO_PROTOCOL_PERMISSION.keys()).map(function(permission) {
                                            var result = _this.userContext.setPermissions(origin, {
                                                name: permission
                                            }, permissionsSet.has(permission) ? "granted" /* Bidi.Permissions.PermissionState.Granted */  : "denied" /* Bidi.Permissions.PermissionState.Denied */ );
                                            _class_private_field_get(_this, _overrides).push({
                                                origin: origin,
                                                permission: permission
                                            });
                                            // TODO: some permissions are outdated and setting them to denied does
                                            // not work.
                                            if (!permissionsSet.has(permission)) {
                                                return result.catch(_common_util_js__WEBPACK_IMPORTED_MODULE_3__.debugError);
                                            }
                                            return result;
                                        }))
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
                        var promises;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    promises = _class_private_field_get(_this, _overrides).map(function(param) {
                                        var permission = param.permission, origin = param.origin;
                                        return _this.userContext.setPermissions(origin, {
                                            name: permission
                                        }, "prompt" /* Bidi.Permissions.PermissionState.Prompt */ ).catch(_common_util_js__WEBPACK_IMPORTED_MODULE_3__.debugError);
                                    });
                                    _class_private_field_set(_this, _overrides, []);
                                    return [
                                        4,
                                        Promise.all(promises)
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
                key: "id",
                get: function get() {
                    if (this.userContext.id === _core_UserContext_js__WEBPACK_IMPORTED_MODULE_5__.UserContext.DEFAULT) {
                        return undefined;
                    }
                    return this.userContext.id;
                }
            }
        ], [
            {
                key: "from",
                value: function from(browser, userContext, options) {
                    var context = new BidiBrowserContext(browser, userContext, options);
                    _class_private_method_get(context, _initialize, initialize).call(context);
                    return context;
                }
            }
        ]);
        return BidiBrowserContext;
    }(_classSuper), function() {
        var _classSuper_Symbol_metadata;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_classSuper_Symbol_metadata = _classSuper[Symbol.metadata]) !== null && _classSuper_Symbol_metadata !== void 0 ? _classSuper_Symbol_metadata : null) : void 0;
        _trustedEmitter_decorators = [
            (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_4__.bubble)()
        ];
        __esDecorate(_BidiBrowserContext, null, _trustedEmitter_decorators, {
            kind: "accessor",
            name: "trustedEmitter",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "trustedEmitter" in obj;
                },
                get: function(obj) {
                    return obj.trustedEmitter;
                },
                set: function(obj, value) {
                    obj.trustedEmitter = value;
                }
            },
            metadata: _metadata
        }, _trustedEmitter_initializers, _trustedEmitter_extraInitializers);
        if (_metadata) Object.defineProperty(_BidiBrowserContext, Symbol.metadata, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _metadata
        });
    }(), _BidiBrowserContext;
}();
 //# sourceMappingURL=BrowserContext.js.map


}),

}]);