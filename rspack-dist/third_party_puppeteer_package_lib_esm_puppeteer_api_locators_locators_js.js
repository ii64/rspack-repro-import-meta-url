"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_api_locators_locators_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/api/locators/locators.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DelegatedLocator: function() { return DelegatedLocator; },
  FilteredLocator: function() { return FilteredLocator; },
  FunctionLocator: function() { return FunctionLocator; },
  Locator: function() { return Locator; },
  LocatorEvent: function() { return LocatorEvent; },
  MappedLocator: function() { return MappedLocator; },
  NodeLocator: function() { return NodeLocator; },
  RETRY_DELAY: function() { return RETRY_DELAY; },
  RaceLocator: function() { return RaceLocator; }
});
/* harmony import */var _third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../third_party/rxjs/rxjs.js */ "./third_party/puppeteer/package/lib/esm/third_party/rxjs/rxjs.js");
/* harmony import */var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/EventEmitter.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/EventEmitter.js");
/* harmony import */var _common_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
function _array_like_to_array(arr, len) {
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
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
 * All the events that a locator instance may emit.
 *
 * @public
 */ var LocatorEvent;
(function(LocatorEvent) {
    /**
     * Emitted every time before the locator performs an action on the located element(s).
     */ LocatorEvent["Action"] = "action";
})(LocatorEvent || (LocatorEvent = {}));
var _ensureElementIsInTheViewport = /*#__PURE__*/ new WeakMap(), _waitForEnabled = /*#__PURE__*/ new WeakMap(), _waitForStableBoundingBox = /*#__PURE__*/ new WeakMap(), /**
     * If the element has a "disabled" property, wait for the element to be
     * enabled.
     */ _waitForEnabledIfNeeded = /*#__PURE__*/ new WeakMap(), /**
     * Compares the bounding box of the element for two consecutive animation
     * frames and waits till they are the same.
     */ _waitForStableBoundingBoxIfNeeded = /*#__PURE__*/ new WeakMap(), /**
     * Checks if the element is in the viewport and auto-scrolls it if it is not.
     */ _ensureElementIsInTheViewportIfNeeded = /*#__PURE__*/ new WeakMap(), _click = /*#__PURE__*/ new WeakSet(), _fill = /*#__PURE__*/ new WeakSet(), _hover = /*#__PURE__*/ new WeakSet(), _scroll = /*#__PURE__*/ new WeakSet();
/**
 * Locators describe a strategy of locating objects and performing an action on
 * them. If the action fails because the object is not ready for the action, the
 * whole operation is retried. Various preconditions for a successful action are
 * checked automatically.
 *
 * See {@link https://pptr.dev/guides/page-interactions#locators} for details.
 *
 * @public
 */ var Locator = /*#__PURE__*/ function(EventEmitter) {
    "use strict";
    _inherits(Locator, EventEmitter);
    var _super = _create_super(Locator);
    function Locator() {
        _class_call_check(this, Locator);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _click);
        _class_private_method_init(_assert_this_initialized(_this), _fill);
        _class_private_method_init(_assert_this_initialized(_this), _hover);
        _class_private_method_init(_assert_this_initialized(_this), _scroll);
        /**
     * @internal
     */ _define_property(_assert_this_initialized(_this), "visibility", null);
        /**
     * @internal
     */ _define_property(_assert_this_initialized(_this), "_timeout", 30000);
        _class_private_field_init(_assert_this_initialized(_this), _ensureElementIsInTheViewport, {
            writable: true,
            value: true
        });
        _class_private_field_init(_assert_this_initialized(_this), _waitForEnabled, {
            writable: true,
            value: true
        });
        _class_private_field_init(_assert_this_initialized(_this), _waitForStableBoundingBox, {
            writable: true,
            value: true
        });
        /**
     * @internal
     */ _define_property(_assert_this_initialized(_this), "operators", {
            conditions: function(conditions, signal) {
                return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.mergeMap)(function(handle) {
                    return _third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.merge.apply(void 0, _to_consumable_array(conditions.map(function(condition) {
                        return condition(handle, signal);
                    }))).pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.defaultIfEmpty)(handle));
                });
            },
            retryAndRaceWithSignalAndTimer: function(signal, cause) {
                var candidates = [];
                if (signal) {
                    candidates.push((0,_common_util_js__WEBPACK_IMPORTED_MODULE_2__.fromAbortSignal)(signal, cause));
                }
                candidates.push((0,_common_util_js__WEBPACK_IMPORTED_MODULE_2__.timeout)(_this._timeout, cause));
                return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.pipe)((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.retry)({
                    delay: RETRY_DELAY
                }), _third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.raceWith.apply(void 0, _to_consumable_array(candidates)));
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _waitForEnabledIfNeeded, {
            writable: true,
            value: function(handle, signal) {
                if (!_class_private_field_get(_assert_this_initialized(_this), _waitForEnabled)) {
                    return _third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.EMPTY;
                }
                return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.from)(handle.frame.waitForFunction(function(element) {
                    if (!_instanceof(element, HTMLElement)) {
                        return true;
                    }
                    var isNativeFormControl = [
                        'BUTTON',
                        'INPUT',
                        'SELECT',
                        'TEXTAREA',
                        'OPTION',
                        'OPTGROUP'
                    ].includes(element.nodeName);
                    return !isNativeFormControl || !element.hasAttribute('disabled');
                }, {
                    timeout: _this._timeout,
                    signal: signal
                }, handle)).pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.ignoreElements)());
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _waitForStableBoundingBoxIfNeeded, {
            writable: true,
            value: function(handle) {
                if (!_class_private_field_get(_assert_this_initialized(_this), _waitForStableBoundingBox)) {
                    return _third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.EMPTY;
                }
                return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.defer)(function() {
                    // Note we don't use waitForFunction because that relies on RAF.
                    return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.from)(handle.evaluate(function(element) {
                        return new Promise(function(resolve) {
                            window.requestAnimationFrame(function() {
                                var rect1 = element.getBoundingClientRect();
                                window.requestAnimationFrame(function() {
                                    var rect2 = element.getBoundingClientRect();
                                    resolve([
                                        {
                                            x: rect1.x,
                                            y: rect1.y,
                                            width: rect1.width,
                                            height: rect1.height
                                        },
                                        {
                                            x: rect2.x,
                                            y: rect2.y,
                                            width: rect2.width,
                                            height: rect2.height
                                        }
                                    ]);
                                });
                            });
                        });
                    }));
                }).pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.first)(function(param) {
                    var _param = _sliced_to_array(param, 2), rect1 = _param[0], rect2 = _param[1];
                    return rect1.x === rect2.x && rect1.y === rect2.y && rect1.width === rect2.width && rect1.height === rect2.height;
                }), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.retry)({
                    delay: RETRY_DELAY
                }), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.ignoreElements)());
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _ensureElementIsInTheViewportIfNeeded, {
            writable: true,
            value: function(handle) {
                if (!_class_private_field_get(_assert_this_initialized(_this), _ensureElementIsInTheViewport)) {
                    return _third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.EMPTY;
                }
                return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.from)(handle.isIntersectingViewport({
                    threshold: 0
                })).pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.filter)(function(isIntersectingViewport) {
                    return !isIntersectingViewport;
                }), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.mergeMap)(function() {
                    return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.from)(handle.scrollIntoView());
                }), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.mergeMap)(function() {
                    return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.defer)(function() {
                        return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.from)(handle.isIntersectingViewport({
                            threshold: 0
                        }));
                    }).pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.first)(_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.identity), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.retry)({
                        delay: RETRY_DELAY
                    }), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.ignoreElements)());
                }));
            }
        });
        return _this;
    }
    _create_class(Locator, [
        {
            key: "timeout",
            get: // Determines when the locator will timeout for actions.
            function get() {
                return this._timeout;
            }
        },
        {
            /**
     * Creates a new locator instance by cloning the current locator and setting
     * the total timeout for the locator actions.
     *
     * Pass `0` to disable timeout.
     *
     * @defaultValue `Page.getDefaultTimeout()`
     */ key: "setTimeout",
            value: function setTimeout(timeout) {
                var locator = this._clone();
                locator._timeout = timeout;
                return locator;
            }
        },
        {
            /**
     * Creates a new locator instance by cloning the current locator with the
     * visibility property changed to the specified value.
     */ key: "setVisibility",
            value: function setVisibility(visibility) {
                var locator = this._clone();
                locator.visibility = visibility;
                return locator;
            }
        },
        {
            /**
     * Creates a new locator instance by cloning the current locator and
     * specifying whether to wait for input elements to become enabled before the
     * action. Applicable to `click` and `fill` actions.
     *
     * @defaultValue `true`
     */ key: "setWaitForEnabled",
            value: function setWaitForEnabled(value) {
                var locator = this._clone();
                _class_private_field_set(locator, _waitForEnabled, value);
                return locator;
            }
        },
        {
            /**
     * Creates a new locator instance by cloning the current locator and
     * specifying whether the locator should scroll the element into viewport if
     * it is not in the viewport already.
     *
     * @defaultValue `true`
     */ key: "setEnsureElementIsInTheViewport",
            value: function setEnsureElementIsInTheViewport(value) {
                var locator = this._clone();
                _class_private_field_set(locator, _ensureElementIsInTheViewport, value);
                return locator;
            }
        },
        {
            /**
     * Creates a new locator instance by cloning the current locator and
     * specifying whether the locator has to wait for the element's bounding box
     * to be same between two consecutive animation frames.
     *
     * @defaultValue `true`
     */ key: "setWaitForStableBoundingBox",
            value: function setWaitForStableBoundingBox(value) {
                var locator = this._clone();
                _class_private_field_set(locator, _waitForStableBoundingBox, value);
                return locator;
            }
        },
        {
            /**
     * @internal
     */ key: "copyOptions",
            value: function copyOptions(locator) {
                this._timeout = locator._timeout;
                this.visibility = locator.visibility;
                _class_private_field_set(this, _waitForEnabled, _class_private_field_get(locator, _waitForEnabled));
                _class_private_field_set(this, _ensureElementIsInTheViewport, _class_private_field_get(locator, _ensureElementIsInTheViewport));
                _class_private_field_set(this, _waitForStableBoundingBox, _class_private_field_get(locator, _waitForStableBoundingBox));
                return this;
            }
        },
        {
            /**
     * Clones the locator.
     */ key: "clone",
            value: function clone() {
                return this._clone();
            }
        },
        {
            key: "waitHandle",
            value: /**
     * Waits for the locator to get a handle from the page.
     *
     * @public
     */ function waitHandle(options) {
                var _this = this;
                return _async_to_generator(function() {
                    var cause;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                cause = new Error('Locator.waitHandle');
                                return [
                                    4,
                                    (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.firstValueFrom)(_this._wait(options).pipe(_this.operators.retryAndRaceWithSignalAndTimer(options === null || options === void 0 ? void 0 : options.signal, cause)))
                                ];
                            case 1:
                                return [
                                    2,
                                    _state.sent()
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "wait",
            value: /**
     * Waits for the locator to get the serialized value from the page.
     *
     * Note this requires the value to be JSON-serializable.
     *
     * @public
     */ function wait(options) {
                var _this = this;
                return _async_to_generator(function() {
                    var env_1, handle, _tmp, e_1;
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
                                    _this.waitHandle(options)
                                ];
                            case 2:
                                handle = __addDisposableResource.apply(void 0, _tmp.concat([
                                    _state.sent(),
                                    false
                                ]));
                                return [
                                    4,
                                    handle.jsonValue()
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
            /**
     * Maps the locator using the provided mapper.
     *
     * @public
     */ key: "map",
            value: function map(mapper) {
                return new MappedLocator(this._clone(), function(handle) {
                    // SAFETY: TypeScript cannot deduce the type.
                    return handle.evaluateHandle(mapper);
                });
            }
        },
        {
            /**
     * Creates an expectation that is evaluated against located values.
     *
     * If the expectations do not match, then the locator will retry.
     *
     * @public
     */ key: "filter",
            value: function filter(predicate) {
                var _this = this;
                return new FilteredLocator(this._clone(), function() {
                    var _ref = _async_to_generator(function(handle, signal) {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        handle.frame.waitForFunction(predicate, {
                                            signal: signal,
                                            timeout: _this._timeout
                                        }, handle)
                                    ];
                                case 1:
                                    _state.sent();
                                    return [
                                        2,
                                        true
                                    ];
                            }
                        });
                    });
                    return function(handle, signal) {
                        return _ref.apply(this, arguments);
                    };
                }());
            }
        },
        {
            /**
     * Creates an expectation that is evaluated against located handles.
     *
     * If the expectations do not match, then the locator will retry.
     *
     * @internal
     */ key: "filterHandle",
            value: function filterHandle(predicate) {
                return new FilteredLocator(this._clone(), predicate);
            }
        },
        {
            /**
     * Maps the locator using the provided mapper.
     *
     * @internal
     */ key: "mapHandle",
            value: function mapHandle(mapper) {
                return new MappedLocator(this._clone(), mapper);
            }
        },
        {
            /**
     * Clicks the located element.
     */ key: "click",
            value: function click1(options) {
                return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.firstValueFrom)(_class_private_method_get(this, _click, click).call(this, options));
            }
        },
        {
            /**
     * Fills out the input identified by the locator using the provided value. The
     * type of the input is determined at runtime and the appropriate fill-out
     * method is chosen based on the type. `contenteditable`, select, textarea and
     * input elements are supported.
     */ key: "fill",
            value: function fill1(value, options) {
                return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.firstValueFrom)(_class_private_method_get(this, _fill, fill).call(this, value, options));
            }
        },
        {
            /**
     * Hovers over the located element.
     */ key: "hover",
            value: function hover1(options) {
                return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.firstValueFrom)(_class_private_method_get(this, _hover, hover).call(this, options));
            }
        },
        {
            /**
     * Scrolls the located element.
     */ key: "scroll",
            value: function scroll1(options) {
                return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.firstValueFrom)(_class_private_method_get(this, _scroll, scroll).call(this, options));
            }
        }
    ], [
        {
            key: "race",
            value: /**
     * Creates a race between multiple locators trying to locate elements in
     * parallel but ensures that only a single element receives the action.
     *
     * @public
     */ function race(locators) {
                return RaceLocator.create(locators);
            }
        }
    ]);
    return Locator;
}(_common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__.EventEmitter);
function click(options) {
    var _this = this;
    var signal = options === null || options === void 0 ? void 0 : options.signal;
    var cause = new Error('Locator.click');
    return this._wait(options).pipe(this.operators.conditions([
        _class_private_field_get(this, _ensureElementIsInTheViewportIfNeeded),
        _class_private_field_get(this, _waitForStableBoundingBoxIfNeeded),
        _class_private_field_get(this, _waitForEnabledIfNeeded)
    ], signal), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.tap)(function() {
        return _this.emit(LocatorEvent.Action, undefined);
    }), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.mergeMap)(function(handle) {
        return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.from)(handle.click(options)).pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.catchError)(function(err) {
            void handle.dispose().catch(_common_util_js__WEBPACK_IMPORTED_MODULE_2__.debugError);
            throw err;
        }));
    }), this.operators.retryAndRaceWithSignalAndTimer(signal, cause));
}
function fill(value, options) {
    var _this = this;
    var signal = options === null || options === void 0 ? void 0 : options.signal;
    var cause = new Error('Locator.fill');
    return this._wait(options).pipe(this.operators.conditions([
        _class_private_field_get(this, _ensureElementIsInTheViewportIfNeeded),
        _class_private_field_get(this, _waitForStableBoundingBoxIfNeeded),
        _class_private_field_get(this, _waitForEnabledIfNeeded)
    ], signal), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.tap)(function() {
        return _this.emit(LocatorEvent.Action, undefined);
    }), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.mergeMap)(function(handle) {
        return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.from)(handle.evaluate(function(el) {
            if (_instanceof(el, HTMLSelectElement)) {
                return 'select';
            }
            if (_instanceof(el, HTMLTextAreaElement)) {
                return 'typeable-input';
            }
            if (_instanceof(el, HTMLInputElement)) {
                if (new Set([
                    'textarea',
                    'text',
                    'url',
                    'tel',
                    'search',
                    'password',
                    'number',
                    'email'
                ]).has(el.type)) {
                    return 'typeable-input';
                } else {
                    return 'other-input';
                }
            }
            if (el.isContentEditable) {
                return 'contenteditable';
            }
            return 'unknown';
        })).pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.mergeMap)(function(inputType) {
            switch(inputType){
                case 'select':
                    return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.from)(handle.select(value).then(_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.noop));
                case 'contenteditable':
                case 'typeable-input':
                    return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.from)(handle.evaluate(function(input, newValue) {
                        var currentValue = input.isContentEditable ? input.innerText : input.value;
                        // Clear the input if the current value does not match the filled
                        // out value.
                        if (newValue.length <= currentValue.length || !newValue.startsWith(input.value)) {
                            if (input.isContentEditable) {
                                input.innerText = '';
                            } else {
                                input.value = '';
                            }
                            return newValue;
                        }
                        var originalValue = input.isContentEditable ? input.innerText : input.value;
                        // If the value is partially filled out, only type the rest. Move
                        // cursor to the end of the common prefix.
                        if (input.isContentEditable) {
                            input.innerText = '';
                            input.innerText = originalValue;
                        } else {
                            input.value = '';
                            input.value = originalValue;
                        }
                        return newValue.substring(originalValue.length);
                    }, value)).pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.mergeMap)(function(textToType) {
                        return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.from)(handle.type(textToType));
                    }));
                case 'other-input':
                    return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.from)(handle.focus()).pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.mergeMap)(function() {
                        return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.from)(handle.evaluate(function(input, value) {
                            input.value = value;
                            input.dispatchEvent(new Event('input', {
                                bubbles: true
                            }));
                            input.dispatchEvent(new Event('change', {
                                bubbles: true
                            }));
                        }, value));
                    }));
                case 'unknown':
                    throw new Error("Element cannot be filled out.");
            }
        })).pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.catchError)(function(err) {
            void handle.dispose().catch(_common_util_js__WEBPACK_IMPORTED_MODULE_2__.debugError);
            throw err;
        }));
    }), this.operators.retryAndRaceWithSignalAndTimer(signal, cause));
}
function hover(options) {
    var _this = this;
    var signal = options === null || options === void 0 ? void 0 : options.signal;
    var cause = new Error('Locator.hover');
    return this._wait(options).pipe(this.operators.conditions([
        _class_private_field_get(this, _ensureElementIsInTheViewportIfNeeded),
        _class_private_field_get(this, _waitForStableBoundingBoxIfNeeded)
    ], signal), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.tap)(function() {
        return _this.emit(LocatorEvent.Action, undefined);
    }), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.mergeMap)(function(handle) {
        return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.from)(handle.hover()).pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.catchError)(function(err) {
            void handle.dispose().catch(_common_util_js__WEBPACK_IMPORTED_MODULE_2__.debugError);
            throw err;
        }));
    }), this.operators.retryAndRaceWithSignalAndTimer(signal, cause));
}
function scroll(options) {
    var _this = this;
    var signal = options === null || options === void 0 ? void 0 : options.signal;
    var cause = new Error('Locator.scroll');
    return this._wait(options).pipe(this.operators.conditions([
        _class_private_field_get(this, _ensureElementIsInTheViewportIfNeeded),
        _class_private_field_get(this, _waitForStableBoundingBoxIfNeeded)
    ], signal), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.tap)(function() {
        return _this.emit(LocatorEvent.Action, undefined);
    }), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.mergeMap)(function(handle) {
        return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.from)(handle.evaluate(function(el, scrollTop, scrollLeft) {
            if (scrollTop !== undefined) {
                el.scrollTop = scrollTop;
            }
            if (scrollLeft !== undefined) {
                el.scrollLeft = scrollLeft;
            }
        }, options === null || options === void 0 ? void 0 : options.scrollTop, options === null || options === void 0 ? void 0 : options.scrollLeft)).pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.catchError)(function(err) {
            void handle.dispose().catch(_common_util_js__WEBPACK_IMPORTED_MODULE_2__.debugError);
            throw err;
        }));
    }), this.operators.retryAndRaceWithSignalAndTimer(signal, cause));
}
var _pageOrFrame = /*#__PURE__*/ new WeakMap(), _func = /*#__PURE__*/ new WeakMap();
/**
 * @internal
 */ var FunctionLocator = /*#__PURE__*/ function(Locator) {
    "use strict";
    _inherits(FunctionLocator, Locator);
    var _super = _create_super(FunctionLocator);
    function FunctionLocator(pageOrFrame, func) {
        _class_call_check(this, FunctionLocator);
        var _this;
        _this = _super.call(this);
        _class_private_field_init(_assert_this_initialized(_this), _pageOrFrame, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _func, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(_assert_this_initialized(_this), _pageOrFrame, pageOrFrame);
        _class_private_field_set(_assert_this_initialized(_this), _func, func);
        return _this;
    }
    _create_class(FunctionLocator, [
        {
            key: "_clone",
            value: function _clone() {
                return new FunctionLocator(_class_private_field_get(this, _pageOrFrame), _class_private_field_get(this, _func));
            }
        },
        {
            key: "_wait",
            value: function _wait(options) {
                var _this = this;
                var signal = options === null || options === void 0 ? void 0 : options.signal;
                return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.defer)(function() {
                    return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.from)(_class_private_field_get(_this, _pageOrFrame).waitForFunction(_class_private_field_get(_this, _func), {
                        timeout: _this.timeout,
                        signal: signal
                    }));
                }).pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.throwIfEmpty)());
            }
        }
    ], [
        {
            key: "create",
            value: function create(pageOrFrame, func) {
                return new FunctionLocator(pageOrFrame, func).setTimeout('getDefaultTimeout' in pageOrFrame ? pageOrFrame.getDefaultTimeout() : pageOrFrame.page().getDefaultTimeout());
            }
        }
    ]);
    return FunctionLocator;
}(Locator);
var _delegate = /*#__PURE__*/ new WeakMap();
/**
 * @internal
 */ var DelegatedLocator = /*#__PURE__*/ function(Locator) {
    "use strict";
    _inherits(DelegatedLocator, Locator);
    var _super = _create_super(DelegatedLocator);
    function DelegatedLocator(delegate) {
        _class_call_check(this, DelegatedLocator);
        var _this;
        _this = _super.call(this);
        _class_private_field_init(_assert_this_initialized(_this), _delegate, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(_assert_this_initialized(_this), _delegate, delegate);
        _this.copyOptions(_class_private_field_get(_assert_this_initialized(_this), _delegate));
        return _this;
    }
    _create_class(DelegatedLocator, [
        {
            key: "delegate",
            get: function get() {
                return _class_private_field_get(this, _delegate);
            }
        },
        {
            key: "setTimeout",
            value: function setTimeout(timeout) {
                var locator = _get(_get_prototype_of(DelegatedLocator.prototype), "setTimeout", this).call(this, timeout);
                _class_private_field_set(locator, _delegate, _class_private_field_get(this, _delegate).setTimeout(timeout));
                return locator;
            }
        },
        {
            key: "setVisibility",
            value: function setVisibility(visibility) {
                var locator = _get(_get_prototype_of(DelegatedLocator.prototype), "setVisibility", this).call(this, visibility);
                _class_private_field_set(locator, _delegate, _class_private_field_get(locator, _delegate).setVisibility(visibility));
                return locator;
            }
        },
        {
            key: "setWaitForEnabled",
            value: function setWaitForEnabled(value) {
                var locator = _get(_get_prototype_of(DelegatedLocator.prototype), "setWaitForEnabled", this).call(this, value);
                _class_private_field_set(locator, _delegate, _class_private_field_get(this, _delegate).setWaitForEnabled(value));
                return locator;
            }
        },
        {
            key: "setEnsureElementIsInTheViewport",
            value: function setEnsureElementIsInTheViewport(value) {
                var locator = _get(_get_prototype_of(DelegatedLocator.prototype), "setEnsureElementIsInTheViewport", this).call(this, value);
                _class_private_field_set(locator, _delegate, _class_private_field_get(this, _delegate).setEnsureElementIsInTheViewport(value));
                return locator;
            }
        },
        {
            key: "setWaitForStableBoundingBox",
            value: function setWaitForStableBoundingBox(value) {
                var locator = _get(_get_prototype_of(DelegatedLocator.prototype), "setWaitForStableBoundingBox", this).call(this, value);
                _class_private_field_set(locator, _delegate, _class_private_field_get(this, _delegate).setWaitForStableBoundingBox(value));
                return locator;
            }
        }
    ]);
    return DelegatedLocator;
}(Locator);
var _predicate = /*#__PURE__*/ new WeakMap();
/**
 * @internal
 */ var FilteredLocator = /*#__PURE__*/ function(DelegatedLocator) {
    "use strict";
    _inherits(FilteredLocator, DelegatedLocator);
    var _super = _create_super(FilteredLocator);
    function FilteredLocator(base, predicate) {
        _class_call_check(this, FilteredLocator);
        var _this;
        _this = _super.call(this, base);
        _class_private_field_init(_assert_this_initialized(_this), _predicate, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(_assert_this_initialized(_this), _predicate, predicate);
        return _this;
    }
    _create_class(FilteredLocator, [
        {
            key: "_clone",
            value: function _clone() {
                return new FilteredLocator(this.delegate.clone(), _class_private_field_get(this, _predicate)).copyOptions(this);
            }
        },
        {
            key: "_wait",
            value: function _wait(options) {
                var _this = this;
                return this.delegate._wait(options).pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.mergeMap)(function(handle) {
                    return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.from)(Promise.resolve(_class_private_field_get(_this, _predicate).call(_this, handle, options === null || options === void 0 ? void 0 : options.signal))).pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.filter)(function(value) {
                        return value;
                    }), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.map)(function() {
                        // SAFETY: It passed the predicate, so this is correct.
                        return handle;
                    }));
                }), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.throwIfEmpty)());
            }
        }
    ]);
    return FilteredLocator;
}(DelegatedLocator);
var _mapper = /*#__PURE__*/ new WeakMap();
/**
 * @internal
 */ var MappedLocator = /*#__PURE__*/ function(DelegatedLocator) {
    "use strict";
    _inherits(MappedLocator, DelegatedLocator);
    var _super = _create_super(MappedLocator);
    function MappedLocator(base, mapper) {
        _class_call_check(this, MappedLocator);
        var _this;
        _this = _super.call(this, base);
        _class_private_field_init(_assert_this_initialized(_this), _mapper, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(_assert_this_initialized(_this), _mapper, mapper);
        return _this;
    }
    _create_class(MappedLocator, [
        {
            key: "_clone",
            value: function _clone() {
                return new MappedLocator(this.delegate.clone(), _class_private_field_get(this, _mapper)).copyOptions(this);
            }
        },
        {
            key: "_wait",
            value: function _wait(options) {
                var _this = this;
                return this.delegate._wait(options).pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.mergeMap)(function(handle) {
                    return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.from)(Promise.resolve(_class_private_field_get(_this, _mapper).call(_this, handle, options === null || options === void 0 ? void 0 : options.signal)));
                }));
            }
        }
    ]);
    return MappedLocator;
}(DelegatedLocator);
var _pageOrFrame1 = /*#__PURE__*/ new WeakMap(), _selector = /*#__PURE__*/ new WeakMap(), /**
     * Waits for the element to become visible or hidden. visibility === 'visible'
     * means that the element has a computed style, the visibility property other
     * than 'hidden' or 'collapse' and non-empty bounding box. visibility ===
     * 'hidden' means the opposite of that.
     */ _waitForVisibilityIfNeeded = /*#__PURE__*/ new WeakMap();
/**
 * @internal
 */ var NodeLocator = /*#__PURE__*/ function(Locator) {
    "use strict";
    _inherits(NodeLocator, Locator);
    var _super = _create_super(NodeLocator);
    function NodeLocator(pageOrFrame, selector) {
        _class_call_check(this, NodeLocator);
        var _this;
        _this = _super.call(this);
        _class_private_field_init(_assert_this_initialized(_this), _pageOrFrame1, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _selector, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _waitForVisibilityIfNeeded, {
            writable: true,
            value: function(handle) {
                if (!_this.visibility) {
                    return _third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.EMPTY;
                }
                return (function() {
                    switch(_this.visibility){
                        case 'hidden':
                            return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.defer)(function() {
                                return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.from)(handle.isHidden());
                            });
                        case 'visible':
                            return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.defer)(function() {
                                return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.from)(handle.isVisible());
                            });
                    }
                })().pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.first)(_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.identity), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.retry)({
                    delay: RETRY_DELAY
                }), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.ignoreElements)());
            }
        });
        _class_private_field_set(_assert_this_initialized(_this), _pageOrFrame1, pageOrFrame);
        _class_private_field_set(_assert_this_initialized(_this), _selector, selector);
        return _this;
    }
    _create_class(NodeLocator, [
        {
            key: "_clone",
            value: function _clone() {
                return new NodeLocator(_class_private_field_get(this, _pageOrFrame1), _class_private_field_get(this, _selector)).copyOptions(this);
            }
        },
        {
            key: "_wait",
            value: function _wait(options) {
                var _this = this;
                var signal = options === null || options === void 0 ? void 0 : options.signal;
                return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.defer)(function() {
                    return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.from)(_class_private_field_get(_this, _pageOrFrame1).waitForSelector(_class_private_field_get(_this, _selector), {
                        visible: false,
                        timeout: _this._timeout,
                        signal: signal
                    }));
                }).pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.filter)(function(value) {
                    return value !== null;
                }), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.throwIfEmpty)(), this.operators.conditions([
                    _class_private_field_get(this, _waitForVisibilityIfNeeded)
                ], signal));
            }
        }
    ], [
        {
            key: "create",
            value: function create(pageOrFrame, selector) {
                return new NodeLocator(pageOrFrame, selector).setTimeout('getDefaultTimeout' in pageOrFrame ? pageOrFrame.getDefaultTimeout() : pageOrFrame.page().getDefaultTimeout());
            }
        }
    ]);
    return NodeLocator;
}(Locator);
function checkLocatorArray(locators) {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = locators[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var locator = _step.value;
            if (!_instanceof(locator, Locator)) {
                throw new Error('Unknown locator for race candidate');
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
    return locators;
}
var _locators = /*#__PURE__*/ new WeakMap();
/**
 * @internal
 */ var RaceLocator = /*#__PURE__*/ function(Locator) {
    "use strict";
    _inherits(RaceLocator, Locator);
    var _super = _create_super(RaceLocator);
    function RaceLocator(locators) {
        _class_call_check(this, RaceLocator);
        var _this;
        _this = _super.call(this);
        _class_private_field_init(_assert_this_initialized(_this), _locators, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(_assert_this_initialized(_this), _locators, locators);
        return _this;
    }
    _create_class(RaceLocator, [
        {
            key: "_clone",
            value: function _clone() {
                return new RaceLocator(_class_private_field_get(this, _locators).map(function(locator) {
                    return locator.clone();
                })).copyOptions(this);
            }
        },
        {
            key: "_wait",
            value: function _wait(options) {
                return _third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.race.apply(void 0, _to_consumable_array(_class_private_field_get(this, _locators).map(function(locator) {
                    return locator._wait(options);
                })));
            }
        }
    ], [
        {
            key: "create",
            value: function create(locators) {
                var array = checkLocatorArray(locators);
                return new RaceLocator(array);
            }
        }
    ]);
    return RaceLocator;
}(Locator);
/**
 * For observables coming from promises, a delay is needed, otherwise RxJS will
 * never yield in a permanent failure for a promise.
 *
 * We also don't want RxJS to do promise operations to often, so we bump the
 * delay up to 100ms.
 *
 * @internal
 */ var RETRY_DELAY = 100; //# sourceMappingURL=locators.js.map


}),

}]);