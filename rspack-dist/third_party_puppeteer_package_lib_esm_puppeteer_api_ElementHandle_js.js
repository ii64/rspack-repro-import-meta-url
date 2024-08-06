"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_api_ElementHandle_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/api/ElementHandle.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ElementHandle: function() { return ElementHandle; }
});
/* harmony import */var _common_GetQueryHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/GetQueryHandler.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/GetQueryHandler.js");
/* harmony import */var _common_LazyArg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/LazyArg.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/LazyArg.js");
/* harmony import */var _common_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */var _util_assert_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/assert.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js");
/* harmony import */var _util_AsyncIterableUtil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/AsyncIterableUtil.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/AsyncIterableUtil.js");
/* harmony import */var _util_decorators_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/decorators.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/decorators.js");
/* harmony import */var _ElementHandleSymbol_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ElementHandleSymbol.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/ElementHandleSymbol.js");
/* harmony import */var _JSHandle_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./JSHandle.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/JSHandle.js");
/**
 * @license
 * Copyright 2023 Google Inc.
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
function _ts_values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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
var __setFunctionName = undefined && undefined.__setFunctionName || function(f, name, prefix) {
    if ((typeof name === "undefined" ? "undefined" : _type_of(name)) === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
};








/**
 * ElementHandle represents an in-page DOM element.
 *
 * @remarks
 * ElementHandles can be created with the {@link Page.$} method.
 *
 * ```ts
 * import puppeteer from 'puppeteer';
 *
 * (async () => {
 *   const browser = await puppeteer.launch();
 *   const page = await browser.newPage();
 *   await page.goto('https://example.com');
 *   const hrefElement = await page.$('a');
 *   await hrefElement.click();
 *   // ...
 * })();
 * ```
 *
 * ElementHandle prevents the DOM element from being garbage-collected unless the
 * handle is {@link JSHandle.dispose | disposed}. ElementHandles are auto-disposed
 * when their origin frame gets navigated.
 *
 * ElementHandle instances can be used as arguments in {@link Page.$eval} and
 * {@link Page.evaluate} methods.
 *
 * If you're using TypeScript, ElementHandle takes a generic argument that
 * denotes the type of element the handle is holding within. For example, if you
 * have a handle to a `<select>` element, you can type it as
 * `ElementHandle<HTMLSelectElement>` and you get some nicer type checks.
 *
 * @public
 */ var ElementHandle = function() {
    var /**
         * Isolates {@link ElementHandle.$$} if needed.
         *
         * @internal
         */ get_$$ = function get_$$() {
        return _private_$$_descriptor.value;
    };
    var /**
         * Implementation for {@link ElementHandle.$$}.
         *
         * @internal
         */ $$impl = function $$impl(selector) {
        return _$$impl1.apply(this, arguments);
    };
    var checkVisibility = function checkVisibility(visibility) {
        return _checkVisibility1.apply(this, arguments);
    };
    var clickableBox = function clickableBox() {
        return _clickableBox1.apply(this, arguments);
    };
    var intersectBoundingBoxesWithFrame = function intersectBoundingBoxesWithFrame(boxes) {
        return _intersectBoundingBoxesWithFrame1.apply(this, arguments);
    };
    var getTopLeftCornerOfFrame = function getTopLeftCornerOfFrame() {
        return _getTopLeftCornerOfFrame1.apply(this, arguments);
    };
    var nonEmptyVisibleBoundingBox = function nonEmptyVisibleBoundingBox() {
        return _nonEmptyVisibleBoundingBox1.apply(this, arguments);
    };
    var /**
         * Returns true if an element is an SVGElement (included svg, path, rect
         * etc.).
         */ asSVGElementHandle = function asSVGElementHandle() {
        return _asSVGElementHandle1.apply(this, arguments);
    };
    var getOwnerSVGElement = function getOwnerSVGElement() {
        return _getOwnerSVGElement1.apply(this, arguments);
    };
    var _$$, _$$impl, _checkVisibility, _clickableBox, _intersectBoundingBoxesWithFrame, _getTopLeftCornerOfFrame, _nonEmptyVisibleBoundingBox, _asSVGElementHandle, _getOwnerSVGElement, _ElementHandle;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5;
    var _classSuper = _JSHandle_js__WEBPACK_IMPORTED_MODULE_7__.JSHandle;
    var _instanceExtraInitializers = [];
    var _getProperty_decorators;
    var _getProperties_decorators;
    var _jsonValue_decorators;
    var _$_decorators;
    var _$$_decorators;
    var _private_$$_decorators;
    var _private_$$_descriptor;
    var _waitForSelector_decorators;
    var _isVisible_decorators;
    var _isHidden_decorators;
    var _toElement_decorators;
    var _clickablePoint_decorators;
    var _hover_decorators;
    var _click_decorators;
    var _drag_decorators;
    var _dragEnter_decorators;
    var _dragOver_decorators;
    var _drop_decorators;
    var _dragAndDrop_decorators;
    var _select_decorators;
    var _tap_decorators;
    var _touchStart_decorators;
    var _touchMove_decorators;
    var _touchEnd_decorators;
    var _focus_decorators;
    var _type_decorators;
    var _press_decorators;
    var _boundingBox_decorators;
    var _boxModel_decorators;
    var _screenshot_decorators;
    var _isIntersectingViewport_decorators;
    var _scrollIntoView_decorators;
    return _$$ = /*#__PURE__*/ new WeakMap(), _$$impl = /*#__PURE__*/ new WeakSet(), _checkVisibility = /*#__PURE__*/ new WeakSet(), _clickableBox = /*#__PURE__*/ new WeakSet(), _intersectBoundingBoxesWithFrame = /*#__PURE__*/ new WeakSet(), _getTopLeftCornerOfFrame = /*#__PURE__*/ new WeakSet(), _nonEmptyVisibleBoundingBox = /*#__PURE__*/ new WeakSet(), _asSVGElementHandle = /*#__PURE__*/ new WeakSet(), _getOwnerSVGElement = /*#__PURE__*/ new WeakSet(), _ElementHandle = /*#__PURE__*/ function(_classSuper) {
        "use strict";
        _inherits(ElementHandle, _classSuper);
        var _super = _create_super(ElementHandle);
        function ElementHandle(handle) {
            _class_call_check(this, ElementHandle);
            var _this;
            _this = _super.call(this);
            _class_private_field_init(_assert_this_initialized(_this), _$$, {
                get: get_$$,
                set: void 0
            });
            _class_private_method_init(_assert_this_initialized(_this), _$$impl);
            _class_private_method_init(_assert_this_initialized(_this), _checkVisibility);
            _class_private_method_init(_assert_this_initialized(_this), _clickableBox);
            _class_private_method_init(_assert_this_initialized(_this), _intersectBoundingBoxesWithFrame);
            _class_private_method_init(_assert_this_initialized(_this), _getTopLeftCornerOfFrame);
            _class_private_method_init(_assert_this_initialized(_this), _nonEmptyVisibleBoundingBox);
            _class_private_method_init(_assert_this_initialized(_this), _asSVGElementHandle);
            _class_private_method_init(_assert_this_initialized(_this), _getOwnerSVGElement);
            /**
         * @internal
         * Cached isolatedHandle to prevent
         * trying to adopt it multiple times
         */ _define_property(_assert_this_initialized(_this), "isolatedHandle", __runInitializers(_assert_this_initialized(_this), _instanceExtraInitializers));
            /**
         * @internal
         */ _define_property(_assert_this_initialized(_this), "handle", void 0);
            _this.handle = handle;
            _this[_ElementHandleSymbol_js__WEBPACK_IMPORTED_MODULE_6__._isElementHandle] = true;
            return _this;
        }
        _create_class(ElementHandle, [
            {
                key: "id",
                get: /**
         * @internal
         */ function get() {
                    return this.handle.id;
                }
            },
            {
                key: "disposed",
                get: /**
         * @internal
         */ function get() {
                    return this.handle.disposed;
                }
            },
            {
                key: "getProperty",
                value: /**
         * @internal
         */ function getProperty(propertyName) {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this.handle.getProperty(propertyName)
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
                key: "getProperties",
                value: /**
         * @internal
         */ function getProperties() {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this.handle.getProperties()
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
                key: "evaluate",
                value: /**
         * @internal
         */ function evaluate(pageFunction) {
                    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                        args[_key - 1] = arguments[_key];
                    }
                    var _this = this;
                    return _async_to_generator(function() {
                        var _this_handle;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    pageFunction = (0,_common_util_js__WEBPACK_IMPORTED_MODULE_2__.withSourcePuppeteerURLIfNone)(_this.evaluate.name, pageFunction);
                                    return [
                                        4,
                                        (_this_handle = _this.handle).evaluate.apply(_this_handle, [
                                            pageFunction
                                        ].concat(_to_consumable_array(args)))
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
                key: "evaluateHandle",
                value: /**
         * @internal
         */ function evaluateHandle(pageFunction) {
                    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                        args[_key - 1] = arguments[_key];
                    }
                    var _this = this;
                    return _async_to_generator(function() {
                        var _this_handle;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    pageFunction = (0,_common_util_js__WEBPACK_IMPORTED_MODULE_2__.withSourcePuppeteerURLIfNone)(_this.evaluateHandle.name, pageFunction);
                                    return [
                                        4,
                                        (_this_handle = _this.handle).evaluateHandle.apply(_this_handle, [
                                            pageFunction
                                        ].concat(_to_consumable_array(args)))
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
                key: "jsonValue",
                value: /**
         * @internal
         */ function jsonValue() {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this.handle.jsonValue()
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
                /**
         * @internal
         */ key: "toString",
                value: function toString() {
                    return this.handle.toString();
                }
            },
            {
                /**
         * @internal
         */ key: "remoteObject",
                value: function remoteObject() {
                    return this.handle.remoteObject();
                }
            },
            {
                /**
         * @internal
         */ key: "dispose",
                value: function dispose() {
                    return this.handle.dispose();
                }
            },
            {
                /**
         * @internal
         */ key: "asElement",
                value: function asElement() {
                    return this;
                }
            },
            {
                key: "$",
                value: /**
         * Queries the current element for an element matching the given selector.
         *
         * @param selector -
         * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
         * to query page for.
         * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
         * can be passed as-is and a
         * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
         * allows quering by
         * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
         * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
         * and
         * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
         * and
         * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
         * Alternatively, you can specify the selector type using a
         * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}.
         * @returns A {@link ElementHandle | element handle} to the first element
         * matching the given selector. Otherwise, `null`.
         */ function $(selector) {
                    var _this = this;
                    return _async_to_generator(function() {
                        var _getQueryHandlerAndSelector, updatedSelector, QueryHandler;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    _getQueryHandlerAndSelector = (0,_common_GetQueryHandler_js__WEBPACK_IMPORTED_MODULE_0__.getQueryHandlerAndSelector)(selector), updatedSelector = _getQueryHandlerAndSelector.updatedSelector, QueryHandler = _getQueryHandlerAndSelector.QueryHandler;
                                    return [
                                        4,
                                        QueryHandler.queryOne(_this, updatedSelector)
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
                key: "$$",
                value: /**
         * Queries the current element for all elements matching the given selector.
         *
         * @param selector -
         * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
         * to query page for.
         * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
         * can be passed as-is and a
         * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
         * allows quering by
         * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
         * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
         * and
         * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
         * and
         * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
         * Alternatively, you can specify the selector type using a
         * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}.
         * @returns An array of {@link ElementHandle | element handles} that point to
         * elements matching the given selector.
         */ function $$(selector, options) {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    if (!((options === null || options === void 0 ? void 0 : options.isolate) === false)) return [
                                        3,
                                        2
                                    ];
                                    return [
                                        4,
                                        _class_private_method_get(_this, _$$impl, $$impl).call(_this, selector)
                                    ];
                                case 1:
                                    return [
                                        2,
                                        _state.sent()
                                    ];
                                case 2:
                                    return [
                                        4,
                                        _class_private_field_get(_this, _$$).call(_this, selector)
                                    ];
                                case 3:
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
                key: "$eval",
                value: /**
         * Runs the given function on the first element matching the given selector in
         * the current element.
         *
         * If the given function returns a promise, then this method will wait till
         * the promise resolves.
         *
         * @example
         *
         * ```ts
         * const tweetHandle = await page.$('.tweet');
         * expect(await tweetHandle.$eval('.like', node => node.innerText)).toBe(
         *   '100'
         * );
         * expect(await tweetHandle.$eval('.retweets', node => node.innerText)).toBe(
         *   '10'
         * );
         * ```
         *
         * @param selector -
         * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
         * to query page for.
         * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
         * can be passed as-is and a
         * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
         * allows quering by
         * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
         * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
         * and
         * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
         * and
         * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
         * Alternatively, you can specify the selector type using a
         * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}.
         * @param pageFunction - The function to be evaluated in this element's page's
         * context. The first element matching the selector will be passed in as the
         * first argument.
         * @param args - Additional arguments to pass to `pageFunction`.
         * @returns A promise to the result of the function.
         */ function $eval(selector, pageFunction) {
                    for(var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                        args[_key - 2] = arguments[_key];
                    }
                    var _this = this;
                    return _async_to_generator(function() {
                        var env_1, _elementHandle, elementHandle, _tmp, e_1;
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
                                    pageFunction = (0,_common_util_js__WEBPACK_IMPORTED_MODULE_2__.withSourcePuppeteerURLIfNone)(_this.$eval.name, pageFunction);
                                    _tmp = [
                                        env_1
                                    ];
                                    return [
                                        4,
                                        _this.$(selector)
                                    ];
                                case 2:
                                    elementHandle = __addDisposableResource.apply(void 0, _tmp.concat([
                                        _state.sent(),
                                        false
                                    ]));
                                    if (!elementHandle) {
                                        throw new Error('Error: failed to find element matching selector "'.concat(selector, '"'));
                                    }
                                    return [
                                        4,
                                        (_elementHandle = elementHandle).evaluate.apply(_elementHandle, [
                                            pageFunction
                                        ].concat(_to_consumable_array(args)))
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
                key: "$$eval",
                value: /**
         * Runs the given function on an array of elements matching the given selector
         * in the current element.
         *
         * If the given function returns a promise, then this method will wait till
         * the promise resolves.
         *
         * @example
         * HTML:
         *
         * ```html
         * <div class="feed">
         *   <div class="tweet">Hello!</div>
         *   <div class="tweet">Hi!</div>
         * </div>
         * ```
         *
         * JavaScript:
         *
         * ```ts
         * const feedHandle = await page.$('.feed');
         * expect(
         *   await feedHandle.$$eval('.tweet', nodes => nodes.map(n => n.innerText))
         * ).toEqual(['Hello!', 'Hi!']);
         * ```
         *
         * @param selector -
         * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
         * to query page for.
         * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
         * can be passed as-is and a
         * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
         * allows quering by
         * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
         * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
         * and
         * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
         * and
         * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
         * Alternatively, you can specify the selector type using a
         * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}.
         * @param pageFunction - The function to be evaluated in the element's page's
         * context. An array of elements matching the given selector will be passed to
         * the function as its first argument.
         * @param args - Additional arguments to pass to `pageFunction`.
         * @returns A promise to the result of the function.
         */ function $$eval(selector, pageFunction) {
                    for(var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                        args[_key - 2] = arguments[_key];
                    }
                    var _this = this;
                    return _async_to_generator(function() {
                        var env_2, _elements, results, elements, _tmp, _ref, result, e_2;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    env_2 = {
                                        stack: [],
                                        error: void 0,
                                        hasError: false
                                    };
                                    _state.label = 1;
                                case 1:
                                    _state.trys.push([
                                        1,
                                        5,
                                        6,
                                        7
                                    ]);
                                    pageFunction = (0,_common_util_js__WEBPACK_IMPORTED_MODULE_2__.withSourcePuppeteerURLIfNone)(_this.$$eval.name, pageFunction);
                                    return [
                                        4,
                                        _this.$$(selector)
                                    ];
                                case 2:
                                    results = _state.sent();
                                    _tmp = [
                                        env_2
                                    ];
                                    return [
                                        4,
                                        _this.evaluateHandle.apply(_this, [
                                            function(_) {
                                                for(var _len = arguments.length, elements = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                                                    elements[_key - 1] = arguments[_key];
                                                }
                                                return elements;
                                            }
                                        ].concat(_to_consumable_array(results)))
                                    ];
                                case 3:
                                    elements = __addDisposableResource.apply(void 0, _tmp.concat([
                                        _state.sent(),
                                        false
                                    ]));
                                    return [
                                        4,
                                        Promise.all([
                                            (_elements = elements).evaluate.apply(_elements, [
                                                pageFunction
                                            ].concat(_to_consumable_array(args)))
                                        ].concat(_to_consumable_array(results.map(function(results) {
                                            return results.dispose();
                                        }))))
                                    ];
                                case 4:
                                    _ref = _sliced_to_array.apply(void 0, [
                                        _state.sent(),
                                        1
                                    ]), result = _ref[0];
                                    return [
                                        2,
                                        result
                                    ];
                                case 5:
                                    e_2 = _state.sent();
                                    env_2.error = e_2;
                                    env_2.hasError = true;
                                    return [
                                        3,
                                        7
                                    ];
                                case 6:
                                    __disposeResources(env_2);
                                    return [
                                        7
                                    ];
                                case 7:
                                    return [
                                        2
                                    ];
                            }
                        });
                    })();
                }
            },
            {
                key: "waitForSelector",
                value: /**
         * Wait for an element matching the given selector to appear in the current
         * element.
         *
         * Unlike {@link Frame.waitForSelector}, this method does not work across
         * navigations or if the element is detached from DOM.
         *
         * @example
         *
         * ```ts
         * import puppeteer from 'puppeteer';
         *
         * (async () => {
         *   const browser = await puppeteer.launch();
         *   const page = await browser.newPage();
         *   let currentURL;
         *   page
         *     .mainFrame()
         *     .waitForSelector('img')
         *     .then(() => console.log('First URL with image: ' + currentURL));
         *
         *   for (currentURL of [
         *     'https://example.com',
         *     'https://google.com',
         *     'https://bbc.com',
         *   ]) {
         *     await page.goto(currentURL);
         *   }
         *   await browser.close();
         * })();
         * ```
         *
         * @param selector - The selector to query and wait for.
         * @param options - Options for customizing waiting behavior.
         * @returns An element matching the given selector.
         * @throws Throws if an element matching the given selector doesn't appear.
         */ function waitForSelector(selector) {
                    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                    var _this = this;
                    return _async_to_generator(function() {
                        var _getQueryHandlerAndSelector, updatedSelector, QueryHandler, polling;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    _getQueryHandlerAndSelector = (0,_common_GetQueryHandler_js__WEBPACK_IMPORTED_MODULE_0__.getQueryHandlerAndSelector)(selector), updatedSelector = _getQueryHandlerAndSelector.updatedSelector, QueryHandler = _getQueryHandlerAndSelector.QueryHandler, polling = _getQueryHandlerAndSelector.polling;
                                    return [
                                        4,
                                        QueryHandler.waitFor(_this, updatedSelector, _object_spread({
                                            polling: polling
                                        }, options))
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
                key: "isVisible",
                value: /**
         * An element is considered to be visible if all of the following is
         * true:
         *
         * - the element has
         *   {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle | computed styles}.
         *
         * - the element has a non-empty
         *   {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect | bounding client rect}.
         *
         * - the element's {@link https://developer.mozilla.org/en-US/docs/Web/CSS/visibility | visibility}
         *   is not `hidden` or `collapse`.
         */ function isVisible() {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _class_private_method_get(_this, _checkVisibility, checkVisibility).call(_this, true)
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
                key: "isHidden",
                value: /**
         * An element is considered to be hidden if at least one of the following is true:
         *
         * - the element has no
         *   {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle | computed styles}.
         *
         * - the element has an empty
         *   {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect | bounding client rect}.
         *
         * - the element's {@link https://developer.mozilla.org/en-US/docs/Web/CSS/visibility | visibility}
         *   is `hidden` or `collapse`.
         */ function isHidden() {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _class_private_method_get(_this, _checkVisibility, checkVisibility).call(_this, false)
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
                key: "toElement",
                value: /**
         * Converts the current handle to the given element type.
         *
         * @example
         *
         * ```ts
         * const element: ElementHandle<Element> = await page.$(
         *   '.class-name-of-anchor'
         * );
         * // DO NOT DISPOSE `element`, this will be always be the same handle.
         * const anchor: ElementHandle<HTMLAnchorElement> =
         *   await element.toElement('a');
         * ```
         *
         * @param tagName - The tag name of the desired element type.
         * @throws An error if the handle does not match. **The handle will not be
         * automatically disposed.**
         */ function toElement(tagName) {
                    var _this = this;
                    return _async_to_generator(function() {
                        var isMatchingTagName;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this.evaluate(function(node, tagName) {
                                            return node.nodeName === tagName.toUpperCase();
                                        }, tagName)
                                    ];
                                case 1:
                                    isMatchingTagName = _state.sent();
                                    if (!isMatchingTagName) {
                                        throw new Error("Element is not a(n) `".concat(tagName, "` element"));
                                    }
                                    return [
                                        2,
                                        _this
                                    ];
                            }
                        });
                    })();
                }
            },
            {
                key: "clickablePoint",
                value: /**
         * Returns the middle point within an element unless a specific offset is provided.
         */ function clickablePoint(offset) {
                    var _this = this;
                    return _async_to_generator(function() {
                        var box;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _class_private_method_get(_this, _clickableBox, clickableBox).call(_this)
                                    ];
                                case 1:
                                    box = _state.sent();
                                    if (!box) {
                                        throw new Error('Node is either not clickable or not an Element');
                                    }
                                    if (offset !== undefined) {
                                        return [
                                            2,
                                            {
                                                x: box.x + offset.x,
                                                y: box.y + offset.y
                                            }
                                        ];
                                    }
                                    return [
                                        2,
                                        {
                                            x: box.x + box.width / 2,
                                            y: box.y + box.height / 2
                                        }
                                    ];
                            }
                        });
                    })();
                }
            },
            {
                key: "hover",
                value: /**
         * This method scrolls element into view if needed, and then
         * uses {@link Page.mouse} to hover over the center of the element.
         * If the element is detached from DOM, the method throws an error.
         */ function hover() {
                    var _this = this;
                    return _async_to_generator(function() {
                        var _ref, x, y;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this.scrollIntoViewIfNeeded()
                                    ];
                                case 1:
                                    _state.sent();
                                    return [
                                        4,
                                        _this.clickablePoint()
                                    ];
                                case 2:
                                    _ref = _state.sent(), x = _ref.x, y = _ref.y;
                                    return [
                                        4,
                                        _this.frame.page().mouse.move(x, y)
                                    ];
                                case 3:
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
                key: "click",
                value: /**
         * This method scrolls element into view if needed, and then
         * uses {@link Page.mouse} to click in the center of the element.
         * If the element is detached from DOM, the method throws an error.
         */ function click() {
                    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    var _this = this;
                    return _async_to_generator(function() {
                        var _ref, x, y;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this.scrollIntoViewIfNeeded()
                                    ];
                                case 1:
                                    _state.sent();
                                    return [
                                        4,
                                        _this.clickablePoint(options.offset)
                                    ];
                                case 2:
                                    _ref = _state.sent(), x = _ref.x, y = _ref.y;
                                    return [
                                        4,
                                        _this.frame.page().mouse.click(x, y, options)
                                    ];
                                case 3:
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
                key: "drag",
                value: /**
         * Drags an element over the given element or point.
         *
         * @returns DEPRECATED. When drag interception is enabled, the drag payload is
         * returned.
         */ function drag(target) {
                    var _this = this;
                    return _async_to_generator(function() {
                        var page, source, error;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this.scrollIntoViewIfNeeded()
                                    ];
                                case 1:
                                    _state.sent();
                                    page = _this.frame.page();
                                    if (!page.isDragInterceptionEnabled()) return [
                                        3,
                                        6
                                    ];
                                    return [
                                        4,
                                        _this.clickablePoint()
                                    ];
                                case 2:
                                    source = _state.sent();
                                    if (!_instanceof(target, ElementHandle)) return [
                                        3,
                                        4
                                    ];
                                    return [
                                        4,
                                        target.clickablePoint()
                                    ];
                                case 3:
                                    target = _state.sent();
                                    _state.label = 4;
                                case 4:
                                    return [
                                        4,
                                        page.mouse.drag(source, target)
                                    ];
                                case 5:
                                    return [
                                        2,
                                        _state.sent()
                                    ];
                                case 6:
                                    _state.trys.push([
                                        6,
                                        14,
                                        ,
                                        15
                                    ]);
                                    if (!!page._isDragging) return [
                                        3,
                                        9
                                    ];
                                    page._isDragging = true;
                                    return [
                                        4,
                                        _this.hover()
                                    ];
                                case 7:
                                    _state.sent();
                                    return [
                                        4,
                                        page.mouse.down()
                                    ];
                                case 8:
                                    _state.sent();
                                    _state.label = 9;
                                case 9:
                                    if (!_instanceof(target, ElementHandle)) return [
                                        3,
                                        11
                                    ];
                                    return [
                                        4,
                                        target.hover()
                                    ];
                                case 10:
                                    _state.sent();
                                    return [
                                        3,
                                        13
                                    ];
                                case 11:
                                    return [
                                        4,
                                        page.mouse.move(target.x, target.y)
                                    ];
                                case 12:
                                    _state.sent();
                                    _state.label = 13;
                                case 13:
                                    return [
                                        3,
                                        15
                                    ];
                                case 14:
                                    error = _state.sent();
                                    page._isDragging = false;
                                    throw error;
                                case 15:
                                    return [
                                        2
                                    ];
                            }
                        });
                    })();
                }
            },
            {
                key: "dragEnter",
                value: /**
         * @deprecated Do not use. `dragenter` will automatically be performed during dragging.
         */ function dragEnter() {
                    var data = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
                        items: [],
                        dragOperationsMask: 1
                    };
                    var _this = this;
                    return _async_to_generator(function() {
                        var page, target;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    page = _this.frame.page();
                                    return [
                                        4,
                                        _this.scrollIntoViewIfNeeded()
                                    ];
                                case 1:
                                    _state.sent();
                                    return [
                                        4,
                                        _this.clickablePoint()
                                    ];
                                case 2:
                                    target = _state.sent();
                                    return [
                                        4,
                                        page.mouse.dragEnter(target, data)
                                    ];
                                case 3:
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
                key: "dragOver",
                value: /**
         * @deprecated Do not use. `dragover` will automatically be performed during dragging.
         */ function dragOver() {
                    var data = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
                        items: [],
                        dragOperationsMask: 1
                    };
                    var _this = this;
                    return _async_to_generator(function() {
                        var page, target;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    page = _this.frame.page();
                                    return [
                                        4,
                                        _this.scrollIntoViewIfNeeded()
                                    ];
                                case 1:
                                    _state.sent();
                                    return [
                                        4,
                                        _this.clickablePoint()
                                    ];
                                case 2:
                                    target = _state.sent();
                                    return [
                                        4,
                                        page.mouse.dragOver(target, data)
                                    ];
                                case 3:
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
                key: "drop",
                value: /**
         * @internal
         */ function drop() {
                    var dataOrElement = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
                        items: [],
                        dragOperationsMask: 1
                    };
                    var _this = this;
                    return _async_to_generator(function() {
                        var page, destination;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    page = _this.frame.page();
                                    if (!('items' in dataOrElement)) return [
                                        3,
                                        4
                                    ];
                                    return [
                                        4,
                                        _this.scrollIntoViewIfNeeded()
                                    ];
                                case 1:
                                    _state.sent();
                                    return [
                                        4,
                                        _this.clickablePoint()
                                    ];
                                case 2:
                                    destination = _state.sent();
                                    return [
                                        4,
                                        page.mouse.drop(destination, dataOrElement)
                                    ];
                                case 3:
                                    _state.sent();
                                    return [
                                        3,
                                        7
                                    ];
                                case 4:
                                    // Note if the rest errors, we still want dragging off because the errors
                                    // is most likely something implying the mouse is no longer dragging.
                                    return [
                                        4,
                                        dataOrElement.drag(_this)
                                    ];
                                case 5:
                                    _state.sent();
                                    page._isDragging = false;
                                    return [
                                        4,
                                        page.mouse.up()
                                    ];
                                case 6:
                                    _state.sent();
                                    _state.label = 7;
                                case 7:
                                    return [
                                        2
                                    ];
                            }
                        });
                    })();
                }
            },
            {
                key: "dragAndDrop",
                value: /**
         * @deprecated Use `ElementHandle.drop` instead.
         */ function dragAndDrop(target, options) {
                    var _this = this;
                    return _async_to_generator(function() {
                        var page, startPoint, targetPoint;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    page = _this.frame.page();
                                    (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_3__.assert)(page.isDragInterceptionEnabled(), 'Drag Interception is not enabled!');
                                    return [
                                        4,
                                        _this.scrollIntoViewIfNeeded()
                                    ];
                                case 1:
                                    _state.sent();
                                    return [
                                        4,
                                        _this.clickablePoint()
                                    ];
                                case 2:
                                    startPoint = _state.sent();
                                    return [
                                        4,
                                        target.clickablePoint()
                                    ];
                                case 3:
                                    targetPoint = _state.sent();
                                    return [
                                        4,
                                        page.mouse.dragAndDrop(startPoint, targetPoint, options)
                                    ];
                                case 4:
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
                key: "select",
                value: /**
         * Triggers a `change` and `input` event once all the provided options have been
         * selected. If there's no `<select>` element matching `selector`, the method
         * throws an error.
         *
         * @example
         *
         * ```ts
         * handle.select('blue'); // single selection
         * handle.select('red', 'green', 'blue'); // multiple selections
         * ```
         *
         * @param values - Values of options to select. If the `<select>` has the
         * `multiple` attribute, all values are considered, otherwise only the first
         * one is taken into account.
         */ function select() {
                    for(var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++){
                        values[_key] = arguments[_key];
                    }
                    var _this = this;
                    return _async_to_generator(function() {
                        var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, value;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                    try {
                                        for(_iterator = values[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                            value = _step.value;
                                            (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_3__.assert)((0,_common_util_js__WEBPACK_IMPORTED_MODULE_2__.isString)(value), 'Values must be strings. Found value "' + value + '" of type "' + (typeof value === "undefined" ? "undefined" : _type_of(value)) + '"');
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
                                    return [
                                        4,
                                        _this.evaluate(function(element, vals) {
                                            var values = new Set(vals);
                                            if (!_instanceof(element, HTMLSelectElement)) {
                                                throw new Error('Element is not a <select> element.');
                                            }
                                            var selectedValues = new Set();
                                            if (!element.multiple) {
                                                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                                try {
                                                    for(var _iterator = element.options[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                                        var option = _step.value;
                                                        option.selected = false;
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
                                                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                                                try {
                                                    for(var _iterator1 = element.options[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                                        var option1 = _step1.value;
                                                        if (values.has(option1.value)) {
                                                            option1.selected = true;
                                                            selectedValues.add(option1.value);
                                                            break;
                                                        }
                                                    }
                                                } catch (err) {
                                                    _didIteratorError1 = true;
                                                    _iteratorError1 = err;
                                                } finally{
                                                    try {
                                                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                                            _iterator1.return();
                                                        }
                                                    } finally{
                                                        if (_didIteratorError1) {
                                                            throw _iteratorError1;
                                                        }
                                                    }
                                                }
                                            } else {
                                                var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                                                try {
                                                    for(var _iterator2 = element.options[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                                                        var option2 = _step2.value;
                                                        option2.selected = values.has(option2.value);
                                                        if (option2.selected) {
                                                            selectedValues.add(option2.value);
                                                        }
                                                    }
                                                } catch (err) {
                                                    _didIteratorError2 = true;
                                                    _iteratorError2 = err;
                                                } finally{
                                                    try {
                                                        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                                                            _iterator2.return();
                                                        }
                                                    } finally{
                                                        if (_didIteratorError2) {
                                                            throw _iteratorError2;
                                                        }
                                                    }
                                                }
                                            }
                                            element.dispatchEvent(new Event('input', {
                                                bubbles: true
                                            }));
                                            element.dispatchEvent(new Event('change', {
                                                bubbles: true
                                            }));
                                            return _to_consumable_array(selectedValues.values());
                                        }, values)
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
                key: "tap",
                value: /**
         * This method scrolls element into view if needed, and then uses
         * {@link Touchscreen.tap} to tap in the center of the element.
         * If the element is detached from DOM, the method throws an error.
         */ function tap() {
                    var _this = this;
                    return _async_to_generator(function() {
                        var _ref, x, y;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this.scrollIntoViewIfNeeded()
                                    ];
                                case 1:
                                    _state.sent();
                                    return [
                                        4,
                                        _this.clickablePoint()
                                    ];
                                case 2:
                                    _ref = _state.sent(), x = _ref.x, y = _ref.y;
                                    return [
                                        4,
                                        _this.frame.page().touchscreen.tap(x, y)
                                    ];
                                case 3:
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
                key: "touchStart",
                value: function touchStart() {
                    var _this = this;
                    return _async_to_generator(function() {
                        var _ref, x, y;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this.scrollIntoViewIfNeeded()
                                    ];
                                case 1:
                                    _state.sent();
                                    return [
                                        4,
                                        _this.clickablePoint()
                                    ];
                                case 2:
                                    _ref = _state.sent(), x = _ref.x, y = _ref.y;
                                    return [
                                        4,
                                        _this.frame.page().touchscreen.touchStart(x, y)
                                    ];
                                case 3:
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
                key: "touchMove",
                value: function touchMove() {
                    var _this = this;
                    return _async_to_generator(function() {
                        var _ref, x, y;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this.scrollIntoViewIfNeeded()
                                    ];
                                case 1:
                                    _state.sent();
                                    return [
                                        4,
                                        _this.clickablePoint()
                                    ];
                                case 2:
                                    _ref = _state.sent(), x = _ref.x, y = _ref.y;
                                    return [
                                        4,
                                        _this.frame.page().touchscreen.touchMove(x, y)
                                    ];
                                case 3:
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
                key: "touchEnd",
                value: function touchEnd() {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this.scrollIntoViewIfNeeded()
                                    ];
                                case 1:
                                    _state.sent();
                                    return [
                                        4,
                                        _this.frame.page().touchscreen.touchEnd()
                                    ];
                                case 2:
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
                key: "focus",
                value: /**
         * Calls {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus | focus} on the element.
         */ function focus() {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this.evaluate(function(element) {
                                            if (!_instanceof(element, HTMLElement)) {
                                                throw new Error('Cannot focus non-HTMLElement');
                                            }
                                            return element.focus();
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
                key: "type",
                value: /**
         * Focuses the element, and then sends a `keydown`, `keypress`/`input`, and
         * `keyup` event for each character in the text.
         *
         * To press a special key, like `Control` or `ArrowDown`,
         * use {@link ElementHandle.press}.
         *
         * @example
         *
         * ```ts
         * await elementHandle.type('Hello'); // Types instantly
         * await elementHandle.type('World', {delay: 100}); // Types slower, like a user
         * ```
         *
         * @example
         * An example of typing into a text field and then submitting the form:
         *
         * ```ts
         * const elementHandle = await page.$('input');
         * await elementHandle.type('some text');
         * await elementHandle.press('Enter');
         * ```
         *
         * @param options - Delay in milliseconds. Defaults to 0.
         */ function type(text, options) {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this.focus()
                                    ];
                                case 1:
                                    _state.sent();
                                    return [
                                        4,
                                        _this.frame.page().keyboard.type(text, options)
                                    ];
                                case 2:
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
                key: "press",
                value: /**
         * Focuses the element, and then uses {@link Keyboard.down} and {@link Keyboard.up}.
         *
         * @remarks
         * If `key` is a single character and no modifier keys besides `Shift`
         * are being held down, a `keypress`/`input` event will also be generated.
         * The `text` option can be specified to force an input event to be generated.
         *
         * **NOTE** Modifier keys DO affect `elementHandle.press`. Holding down `Shift`
         * will type the text in upper case.
         *
         * @param key - Name of key to press, such as `ArrowLeft`.
         * See {@link KeyInput} for a list of all key names.
         */ function press(key, options) {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this.focus()
                                    ];
                                case 1:
                                    _state.sent();
                                    return [
                                        4,
                                        _this.frame.page().keyboard.press(key, options)
                                    ];
                                case 2:
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
                key: "boundingBox",
                value: /**
         * This method returns the bounding box of the element (relative to the main frame),
         * or `null` if the element is {@link https://drafts.csswg.org/css-display-4/#box-generation | not part of the layout}
         * (example: `display: none`).
         */ function boundingBox() {
                    var _this = this;
                    return _async_to_generator(function() {
                        var box, offset;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this.evaluate(function(element) {
                                            if (!_instanceof(element, Element)) {
                                                return null;
                                            }
                                            // Element is not visible.
                                            if (element.getClientRects().length === 0) {
                                                return null;
                                            }
                                            var rect = element.getBoundingClientRect();
                                            return {
                                                x: rect.x,
                                                y: rect.y,
                                                width: rect.width,
                                                height: rect.height
                                            };
                                        })
                                    ];
                                case 1:
                                    box = _state.sent();
                                    if (!box) {
                                        return [
                                            2,
                                            null
                                        ];
                                    }
                                    return [
                                        4,
                                        _class_private_method_get(_this, _getTopLeftCornerOfFrame, getTopLeftCornerOfFrame).call(_this)
                                    ];
                                case 2:
                                    offset = _state.sent();
                                    if (!offset) {
                                        return [
                                            2,
                                            null
                                        ];
                                    }
                                    return [
                                        2,
                                        {
                                            x: box.x + offset.x,
                                            y: box.y + offset.y,
                                            height: box.height,
                                            width: box.width
                                        }
                                    ];
                            }
                        });
                    })();
                }
            },
            {
                key: "boxModel",
                value: /**
         * This method returns boxes of the element,
         * or `null` if the element is {@link https://drafts.csswg.org/css-display-4/#box-generation | not part of the layout}
         * (example: `display: none`).
         *
         * @remarks
         *
         * Boxes are represented as an array of points;
         * Each Point is an object `{x, y}`. Box points are sorted clock-wise.
         */ function boxModel() {
                    var _this = this;
                    return _async_to_generator(function() {
                        var model, offset, _i, _iter, attribute, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, point;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this.evaluate(function(element) {
                                            var transformQuadWithOffsets = function transformQuadWithOffsets(quad, offsets) {
                                                return [
                                                    {
                                                        x: quad[0].x + offsets.left,
                                                        y: quad[0].y + offsets.top
                                                    },
                                                    {
                                                        x: quad[1].x - offsets.right,
                                                        y: quad[1].y + offsets.top
                                                    },
                                                    {
                                                        x: quad[2].x - offsets.right,
                                                        y: quad[2].y - offsets.bottom
                                                    },
                                                    {
                                                        x: quad[3].x + offsets.left,
                                                        y: quad[3].y - offsets.bottom
                                                    }
                                                ];
                                            };
                                            if (!_instanceof(element, Element)) {
                                                return null;
                                            }
                                            // Element is not visible.
                                            if (element.getClientRects().length === 0) {
                                                return null;
                                            }
                                            var rect = element.getBoundingClientRect();
                                            var style = window.getComputedStyle(element);
                                            var offsets = {
                                                padding: {
                                                    left: parseInt(style.paddingLeft, 10),
                                                    top: parseInt(style.paddingTop, 10),
                                                    right: parseInt(style.paddingRight, 10),
                                                    bottom: parseInt(style.paddingBottom, 10)
                                                },
                                                margin: {
                                                    left: -parseInt(style.marginLeft, 10),
                                                    top: -parseInt(style.marginTop, 10),
                                                    right: -parseInt(style.marginRight, 10),
                                                    bottom: -parseInt(style.marginBottom, 10)
                                                },
                                                border: {
                                                    left: parseInt(style.borderLeft, 10),
                                                    top: parseInt(style.borderTop, 10),
                                                    right: parseInt(style.borderRight, 10),
                                                    bottom: parseInt(style.borderBottom, 10)
                                                }
                                            };
                                            var border = [
                                                {
                                                    x: rect.left,
                                                    y: rect.top
                                                },
                                                {
                                                    x: rect.left + rect.width,
                                                    y: rect.top
                                                },
                                                {
                                                    x: rect.left + rect.width,
                                                    y: rect.top + rect.bottom
                                                },
                                                {
                                                    x: rect.left,
                                                    y: rect.top + rect.bottom
                                                }
                                            ];
                                            var padding = transformQuadWithOffsets(border, offsets.border);
                                            var content = transformQuadWithOffsets(padding, offsets.padding);
                                            var margin = transformQuadWithOffsets(border, offsets.margin);
                                            return {
                                                content: content,
                                                padding: padding,
                                                border: border,
                                                margin: margin,
                                                width: rect.width,
                                                height: rect.height
                                            };
                                        })
                                    ];
                                case 1:
                                    model = _state.sent();
                                    if (!model) {
                                        return [
                                            2,
                                            null
                                        ];
                                    }
                                    return [
                                        4,
                                        _class_private_method_get(_this, _getTopLeftCornerOfFrame, getTopLeftCornerOfFrame).call(_this)
                                    ];
                                case 2:
                                    offset = _state.sent();
                                    if (!offset) {
                                        return [
                                            2,
                                            null
                                        ];
                                    }
                                    for(_i = 0, _iter = [
                                        'content',
                                        'padding',
                                        'border',
                                        'margin'
                                    ]; _i < _iter.length; _i++){
                                        attribute = _iter[_i];
                                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                        try {
                                            for(_iterator = model[attribute][Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                                point = _step.value;
                                                point.x += offset.x;
                                                point.y += offset.y;
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
                                    return [
                                        2,
                                        model
                                    ];
                            }
                        });
                    })();
                }
            },
            {
                key: "screenshot",
                value: function screenshot() {
                    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    var _this = this;
                    return _async_to_generator(function() {
                        var _options_scrollIntoView, scrollIntoView, clip, page, elementClip, _ref, pageLeft, pageTop;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    _options_scrollIntoView = options.scrollIntoView, scrollIntoView = _options_scrollIntoView === void 0 ? true : _options_scrollIntoView, clip = options.clip;
                                    page = _this.frame.page();
                                    if (!scrollIntoView) return [
                                        3,
                                        2
                                    ];
                                    return [
                                        4,
                                        _this.scrollIntoViewIfNeeded()
                                    ];
                                case 1:
                                    _state.sent();
                                    _state.label = 2;
                                case 2:
                                    return [
                                        4,
                                        _class_private_method_get(_this, _nonEmptyVisibleBoundingBox, nonEmptyVisibleBoundingBox).call(_this)
                                    ];
                                case 3:
                                    elementClip = _state.sent();
                                    return [
                                        4,
                                        _this.evaluate(function() {
                                            if (!window.visualViewport) {
                                                throw new Error('window.visualViewport is not supported.');
                                            }
                                            return [
                                                window.visualViewport.pageLeft,
                                                window.visualViewport.pageTop
                                            ];
                                        })
                                    ];
                                case 4:
                                    _ref = _sliced_to_array.apply(void 0, [
                                        _state.sent(),
                                        2
                                    ]), pageLeft = _ref[0], pageTop = _ref[1];
                                    elementClip.x += pageLeft;
                                    elementClip.y += pageTop;
                                    if (clip) {
                                        elementClip.x += clip.x;
                                        elementClip.y += clip.y;
                                        elementClip.height = clip.height;
                                        elementClip.width = clip.width;
                                    }
                                    return [
                                        4,
                                        page.screenshot(_object_spread_props(_object_spread({}, options), {
                                            clip: elementClip
                                        }))
                                    ];
                                case 5:
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
                key: "assertConnectedElement",
                value: /**
         * @internal
         */ function assertConnectedElement() {
                    var _this = this;
                    return _async_to_generator(function() {
                        var error;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this.evaluate(function() {
                                            var _ref = _async_to_generator(function(element) {
                                                return _ts_generator(this, function(_state) {
                                                    if (!element.isConnected) {
                                                        return [
                                                            2,
                                                            'Node is detached from document'
                                                        ];
                                                    }
                                                    if (element.nodeType !== Node.ELEMENT_NODE) {
                                                        return [
                                                            2,
                                                            'Node is not of type HTMLElement'
                                                        ];
                                                    }
                                                    return [
                                                        2
                                                    ];
                                                });
                                            });
                                            return function(element) {
                                                return _ref.apply(this, arguments);
                                            };
                                        }())
                                    ];
                                case 1:
                                    error = _state.sent();
                                    if (error) {
                                        throw new Error(error);
                                    }
                                    return [
                                        2
                                    ];
                            }
                        });
                    })();
                }
            },
            {
                key: "scrollIntoViewIfNeeded",
                value: /**
         * @internal
         */ function scrollIntoViewIfNeeded() {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this.isIntersectingViewport({
                                            threshold: 1
                                        })
                                    ];
                                case 1:
                                    if (_state.sent()) {
                                        return [
                                            2
                                        ];
                                    }
                                    return [
                                        4,
                                        _this.scrollIntoView()
                                    ];
                                case 2:
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
                key: "isIntersectingViewport",
                value: /**
         * Resolves to true if the element is visible in the current viewport. If an
         * element is an SVG, we check if the svg owner element is in the viewport
         * instead. See https://crbug.com/963246.
         *
         * @param options - Threshold for the intersection between 0 (no intersection) and 1
         * (full intersection). Defaults to 1.
         */ function isIntersectingViewport() {
                    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    var _this = this;
                    return _async_to_generator(function() {
                        var env_5, handle, target, _tmp, _tmp1, _options_threshold, e_5;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    env_5 = {
                                        stack: [],
                                        error: void 0,
                                        hasError: false
                                    };
                                    _state.label = 1;
                                case 1:
                                    _state.trys.push([
                                        1,
                                        7,
                                        8,
                                        9
                                    ]);
                                    return [
                                        4,
                                        _this.assertConnectedElement()
                                    ];
                                case 2:
                                    _state.sent();
                                    return [
                                        4,
                                        _class_private_method_get(_this, _asSVGElementHandle, asSVGElementHandle).call(_this)
                                    ];
                                case 3:
                                    handle = _state.sent();
                                    _tmp = [
                                        env_5
                                    ];
                                    _tmp1 = handle;
                                    if (!_tmp1) return [
                                        3,
                                        5
                                    ];
                                    return [
                                        4,
                                        _class_private_method_get(handle, _getOwnerSVGElement, getOwnerSVGElement).call(handle)
                                    ];
                                case 4:
                                    _tmp1 = _state.sent();
                                    _state.label = 5;
                                case 5:
                                    target = __addDisposableResource.apply(void 0, _tmp.concat([
                                        _tmp1,
                                        false
                                    ]));
                                    return [
                                        4,
                                        (target !== null && target !== void 0 ? target : _this).evaluate(function() {
                                            var _ref = _async_to_generator(function(element, threshold) {
                                                var visibleRatio;
                                                return _ts_generator(this, function(_state) {
                                                    switch(_state.label){
                                                        case 0:
                                                            return [
                                                                4,
                                                                new Promise(function(resolve) {
                                                                    var observer = new IntersectionObserver(function(entries) {
                                                                        resolve(entries[0].intersectionRatio);
                                                                        observer.disconnect();
                                                                    });
                                                                    observer.observe(element);
                                                                })
                                                            ];
                                                        case 1:
                                                            visibleRatio = _state.sent();
                                                            return [
                                                                2,
                                                                threshold === 1 ? visibleRatio === 1 : visibleRatio > threshold
                                                            ];
                                                    }
                                                });
                                            });
                                            return function(element, threshold) {
                                                return _ref.apply(this, arguments);
                                            };
                                        }(), (_options_threshold = options.threshold) !== null && _options_threshold !== void 0 ? _options_threshold : 0)
                                    ];
                                case 6:
                                    return [
                                        2,
                                        _state.sent()
                                    ];
                                case 7:
                                    e_5 = _state.sent();
                                    env_5.error = e_5;
                                    env_5.hasError = true;
                                    return [
                                        3,
                                        9
                                    ];
                                case 8:
                                    __disposeResources(env_5);
                                    return [
                                        7
                                    ];
                                case 9:
                                    return [
                                        2
                                    ];
                            }
                        });
                    })();
                }
            },
            {
                key: "scrollIntoView",
                value: /**
         * Scrolls the element into view using either the automation protocol client
         * or by calling element.scrollIntoView.
         */ function scrollIntoView() {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this.assertConnectedElement()
                                    ];
                                case 1:
                                    _state.sent();
                                    return [
                                        4,
                                        _this.evaluate(function() {
                                            var _ref = _async_to_generator(function(element) {
                                                return _ts_generator(this, function(_state) {
                                                    element.scrollIntoView({
                                                        block: 'center',
                                                        inline: 'center',
                                                        behavior: 'instant'
                                                    });
                                                    return [
                                                        2
                                                    ];
                                                });
                                            });
                                            return function(element) {
                                                return _ref.apply(this, arguments);
                                            };
                                        }())
                                    ];
                                case 2:
                                    _state.sent();
                                    return [
                                        2
                                    ];
                            }
                        });
                    })();
                }
            }
        ], [
            {
                key: "bindIsolatedHandle",
                value: /**
         * A given method will have it's `this` replaced with an isolated version of
         * `this` when decorated with this decorator.
         *
         * All changes of isolated `this` are reflected on the actual `this`.
         *
         * @internal
         */ function bindIsolatedHandle(target, _) {
                    return /*#__PURE__*/ _async_to_generator(function() {
                        var _len, args, _key, _target, _target1, adoptedThis, _, _1, result, _this, _this1;
                        var _arguments = arguments;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    for(_len = _arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                                        args[_key] = _arguments[_key];
                                    }
                                    if (!(this.realm === this.frame.isolatedRealm())) return [
                                        3,
                                        2
                                    ];
                                    return [
                                        4,
                                        (_target1 = target).call.apply(_target1, [
                                            this
                                        ].concat(_to_consumable_array(args)))
                                    ];
                                case 1:
                                    return [
                                        2,
                                        _state.sent()
                                    ];
                                case 2:
                                    if (!this['isolatedHandle']) return [
                                        3,
                                        3
                                    ];
                                    adoptedThis = this['isolatedHandle'];
                                    return [
                                        3,
                                        5
                                    ];
                                case 3:
                                    _ = this;
                                    _1 = 'isolatedHandle';
                                    return [
                                        4,
                                        this.frame.isolatedRealm().adoptHandle(this)
                                    ];
                                case 4:
                                    _[_1] = adoptedThis = _state.sent();
                                    _state.label = 5;
                                case 5:
                                    return [
                                        4,
                                        (_target = target).call.apply(_target, [
                                            adoptedThis
                                        ].concat(_to_consumable_array(args)))
                                    ];
                                case 6:
                                    result = _state.sent();
                                    // If the function returns `adoptedThis`, then we return `this`.
                                    if (result === adoptedThis) {
                                        return [
                                            2,
                                            this
                                        ];
                                    }
                                    if (!_instanceof(result, _JSHandle_js__WEBPACK_IMPORTED_MODULE_7__.JSHandle)) return [
                                        3,
                                        8
                                    ];
                                    return [
                                        4,
                                        this.realm.transferHandle(result)
                                    ];
                                case 7:
                                    return [
                                        2,
                                        _state.sent()
                                    ];
                                case 8:
                                    if (!Array.isArray(result)) return [
                                        3,
                                        10
                                    ];
                                    _this = this;
                                    return [
                                        4,
                                        Promise.all(result.map(function() {
                                            var _ref = _async_to_generator(function(item, index, result) {
                                                return _ts_generator(this, function(_state) {
                                                    switch(_state.label){
                                                        case 0:
                                                            if (!_instanceof(item, _JSHandle_js__WEBPACK_IMPORTED_MODULE_7__.JSHandle)) return [
                                                                3,
                                                                2
                                                            ];
                                                            return [
                                                                4,
                                                                _this.realm.transferHandle(item)
                                                            ];
                                                        case 1:
                                                            result[index] = _state.sent();
                                                            _state.label = 2;
                                                        case 2:
                                                            return [
                                                                2
                                                            ];
                                                    }
                                                });
                                            });
                                            return function(item, index, result) {
                                                return _ref.apply(this, arguments);
                                            };
                                        }()))
                                    ];
                                case 9:
                                    _state.sent();
                                    _state.label = 10;
                                case 10:
                                    if (!_instanceof(result, Map)) return [
                                        3,
                                        12
                                    ];
                                    _this1 = this;
                                    return [
                                        4,
                                        Promise.all(_to_consumable_array(result.entries()).map(function() {
                                            var _ref = _async_to_generator(function(param) {
                                                var _param, key, value, _, _tmp;
                                                return _ts_generator(this, function(_state) {
                                                    switch(_state.label){
                                                        case 0:
                                                            _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                                                            if (!_instanceof(value, _JSHandle_js__WEBPACK_IMPORTED_MODULE_7__.JSHandle)) return [
                                                                3,
                                                                2
                                                            ];
                                                            _ = result.set;
                                                            _tmp = [
                                                                key
                                                            ];
                                                            return [
                                                                4,
                                                                _this1.realm.transferHandle(value)
                                                            ];
                                                        case 1:
                                                            _.apply(result, _tmp.concat([
                                                                _state.sent()
                                                            ]));
                                                            _state.label = 2;
                                                        case 2:
                                                            return [
                                                                2
                                                            ];
                                                    }
                                                });
                                            });
                                            return function(_) {
                                                return _ref.apply(this, arguments);
                                            };
                                        }()))
                                    ];
                                case 11:
                                    _state.sent();
                                    _state.label = 12;
                                case 12:
                                    return [
                                        2,
                                        result
                                    ];
                            }
                        });
                    });
                }
            }
        ]);
        return ElementHandle;
    }(_classSuper), function() {
        var _classSuper_Symbol_metadata;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_classSuper_Symbol_metadata = _classSuper[Symbol.metadata]) !== null && _classSuper_Symbol_metadata !== void 0 ? _classSuper_Symbol_metadata : null) : void 0;
        _getProperty_decorators = [
            (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_5__.throwIfDisposed)(),
            (_a = _ElementHandle).bindIsolatedHandle.bind(_a)
        ];
        _getProperties_decorators = [
            (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_5__.throwIfDisposed)(),
            (_b = _ElementHandle).bindIsolatedHandle.bind(_b)
        ];
        _jsonValue_decorators = [
            (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_5__.throwIfDisposed)(),
            (_c = _ElementHandle).bindIsolatedHandle.bind(_c)
        ];
        _$_decorators = [
            (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_5__.throwIfDisposed)(),
            (_d = _ElementHandle).bindIsolatedHandle.bind(_d)
        ];
        _$$_decorators = [
            (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_5__.throwIfDisposed)()
        ];
        _private_$$_decorators = [
            (_e = _ElementHandle).bindIsolatedHandle.bind(_e)
        ];
        _waitForSelector_decorators = [
            (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_5__.throwIfDisposed)(),
            (_f = _ElementHandle).bindIsolatedHandle.bind(_f)
        ];
        _isVisible_decorators = [
            (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_5__.throwIfDisposed)(),
            (_g = _ElementHandle).bindIsolatedHandle.bind(_g)
        ];
        _isHidden_decorators = [
            (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_5__.throwIfDisposed)(),
            (_h = _ElementHandle).bindIsolatedHandle.bind(_h)
        ];
        _toElement_decorators = [
            (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_5__.throwIfDisposed)(),
            (_j = _ElementHandle).bindIsolatedHandle.bind(_j)
        ];
        _clickablePoint_decorators = [
            (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_5__.throwIfDisposed)(),
            (_k = _ElementHandle).bindIsolatedHandle.bind(_k)
        ];
        _hover_decorators = [
            (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_5__.throwIfDisposed)(),
            (_l = _ElementHandle).bindIsolatedHandle.bind(_l)
        ];
        _click_decorators = [
            (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_5__.throwIfDisposed)(),
            (_m = _ElementHandle).bindIsolatedHandle.bind(_m)
        ];
        _drag_decorators = [
            (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_5__.throwIfDisposed)(),
            (_o = _ElementHandle).bindIsolatedHandle.bind(_o)
        ];
        _dragEnter_decorators = [
            (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_5__.throwIfDisposed)(),
            (_p = _ElementHandle).bindIsolatedHandle.bind(_p)
        ];
        _dragOver_decorators = [
            (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_5__.throwIfDisposed)(),
            (_q = _ElementHandle).bindIsolatedHandle.bind(_q)
        ];
        _drop_decorators = [
            (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_5__.throwIfDisposed)(),
            (_r = _ElementHandle).bindIsolatedHandle.bind(_r)
        ];
        _dragAndDrop_decorators = [
            (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_5__.throwIfDisposed)(),
            (_s = _ElementHandle).bindIsolatedHandle.bind(_s)
        ];
        _select_decorators = [
            (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_5__.throwIfDisposed)(),
            (_t = _ElementHandle).bindIsolatedHandle.bind(_t)
        ];
        _tap_decorators = [
            (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_5__.throwIfDisposed)(),
            (_u = _ElementHandle).bindIsolatedHandle.bind(_u)
        ];
        _touchStart_decorators = [
            (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_5__.throwIfDisposed)(),
            (_v = _ElementHandle).bindIsolatedHandle.bind(_v)
        ];
        _touchMove_decorators = [
            (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_5__.throwIfDisposed)(),
            (_w = _ElementHandle).bindIsolatedHandle.bind(_w)
        ];
        _touchEnd_decorators = [
            (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_5__.throwIfDisposed)(),
            (_x = _ElementHandle).bindIsolatedHandle.bind(_x)
        ];
        _focus_decorators = [
            (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_5__.throwIfDisposed)(),
            (_y = _ElementHandle).bindIsolatedHandle.bind(_y)
        ];
        _type_decorators = [
            (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_5__.throwIfDisposed)(),
            (_z = _ElementHandle).bindIsolatedHandle.bind(_z)
        ];
        _press_decorators = [
            (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_5__.throwIfDisposed)(),
            (_0 = _ElementHandle).bindIsolatedHandle.bind(_0)
        ];
        _boundingBox_decorators = [
            (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_5__.throwIfDisposed)(),
            (_1 = _ElementHandle).bindIsolatedHandle.bind(_1)
        ];
        _boxModel_decorators = [
            (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_5__.throwIfDisposed)(),
            (_2 = _ElementHandle).bindIsolatedHandle.bind(_2)
        ];
        _screenshot_decorators = [
            (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_5__.throwIfDisposed)(),
            (_3 = _ElementHandle).bindIsolatedHandle.bind(_3)
        ];
        _isIntersectingViewport_decorators = [
            (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_5__.throwIfDisposed)(),
            (_4 = _ElementHandle).bindIsolatedHandle.bind(_4)
        ];
        _scrollIntoView_decorators = [
            (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_5__.throwIfDisposed)(),
            (_5 = _ElementHandle).bindIsolatedHandle.bind(_5)
        ];
        __esDecorate(_ElementHandle, null, _getProperty_decorators, {
            kind: "method",
            name: "getProperty",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "getProperty" in obj;
                },
                get: function(obj) {
                    return obj.getProperty;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_ElementHandle, null, _getProperties_decorators, {
            kind: "method",
            name: "getProperties",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "getProperties" in obj;
                },
                get: function(obj) {
                    return obj.getProperties;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_ElementHandle, null, _jsonValue_decorators, {
            kind: "method",
            name: "jsonValue",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "jsonValue" in obj;
                },
                get: function(obj) {
                    return obj.jsonValue;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_ElementHandle, null, _$_decorators, {
            kind: "method",
            name: "$",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "$" in obj;
                },
                get: function(obj) {
                    return obj.$;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_ElementHandle, null, _$$_decorators, {
            kind: "method",
            name: "$$",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "$$" in obj;
                },
                get: function(obj) {
                    return obj.$$;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_ElementHandle, _private_$$_descriptor = {
            value: __setFunctionName(function() {
                var _ref = _async_to_generator(function(selector) {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _class_private_method_get(this, _$$impl, $$impl).call(this, selector)
                                ];
                            case 1:
                                return [
                                    2,
                                    _state.sent()
                                ];
                        }
                    });
                });
                return function(selector) {
                    return _ref.apply(this, arguments);
                };
            }(), "#$$")
        }, _private_$$_decorators, {
            kind: "method",
            name: "#$$",
            static: false,
            private: true,
            access: {
                has: function(obj) {
                    return _$$.has(obj);
                },
                get: function(obj) {
                    return _class_private_field_get(obj, _$$);
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_ElementHandle, null, _waitForSelector_decorators, {
            kind: "method",
            name: "waitForSelector",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "waitForSelector" in obj;
                },
                get: function(obj) {
                    return obj.waitForSelector;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_ElementHandle, null, _isVisible_decorators, {
            kind: "method",
            name: "isVisible",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "isVisible" in obj;
                },
                get: function(obj) {
                    return obj.isVisible;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_ElementHandle, null, _isHidden_decorators, {
            kind: "method",
            name: "isHidden",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "isHidden" in obj;
                },
                get: function(obj) {
                    return obj.isHidden;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_ElementHandle, null, _toElement_decorators, {
            kind: "method",
            name: "toElement",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "toElement" in obj;
                },
                get: function(obj) {
                    return obj.toElement;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_ElementHandle, null, _clickablePoint_decorators, {
            kind: "method",
            name: "clickablePoint",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "clickablePoint" in obj;
                },
                get: function(obj) {
                    return obj.clickablePoint;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_ElementHandle, null, _hover_decorators, {
            kind: "method",
            name: "hover",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "hover" in obj;
                },
                get: function(obj) {
                    return obj.hover;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_ElementHandle, null, _click_decorators, {
            kind: "method",
            name: "click",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "click" in obj;
                },
                get: function(obj) {
                    return obj.click;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_ElementHandle, null, _drag_decorators, {
            kind: "method",
            name: "drag",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "drag" in obj;
                },
                get: function(obj) {
                    return obj.drag;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_ElementHandle, null, _dragEnter_decorators, {
            kind: "method",
            name: "dragEnter",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "dragEnter" in obj;
                },
                get: function(obj) {
                    return obj.dragEnter;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_ElementHandle, null, _dragOver_decorators, {
            kind: "method",
            name: "dragOver",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "dragOver" in obj;
                },
                get: function(obj) {
                    return obj.dragOver;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_ElementHandle, null, _drop_decorators, {
            kind: "method",
            name: "drop",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "drop" in obj;
                },
                get: function(obj) {
                    return obj.drop;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_ElementHandle, null, _dragAndDrop_decorators, {
            kind: "method",
            name: "dragAndDrop",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "dragAndDrop" in obj;
                },
                get: function(obj) {
                    return obj.dragAndDrop;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_ElementHandle, null, _select_decorators, {
            kind: "method",
            name: "select",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "select" in obj;
                },
                get: function(obj) {
                    return obj.select;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_ElementHandle, null, _tap_decorators, {
            kind: "method",
            name: "tap",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "tap" in obj;
                },
                get: function(obj) {
                    return obj.tap;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_ElementHandle, null, _touchStart_decorators, {
            kind: "method",
            name: "touchStart",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "touchStart" in obj;
                },
                get: function(obj) {
                    return obj.touchStart;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_ElementHandle, null, _touchMove_decorators, {
            kind: "method",
            name: "touchMove",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "touchMove" in obj;
                },
                get: function(obj) {
                    return obj.touchMove;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_ElementHandle, null, _touchEnd_decorators, {
            kind: "method",
            name: "touchEnd",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "touchEnd" in obj;
                },
                get: function(obj) {
                    return obj.touchEnd;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_ElementHandle, null, _focus_decorators, {
            kind: "method",
            name: "focus",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "focus" in obj;
                },
                get: function(obj) {
                    return obj.focus;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_ElementHandle, null, _type_decorators, {
            kind: "method",
            name: "type",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "type" in obj;
                },
                get: function(obj) {
                    return obj.type;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_ElementHandle, null, _press_decorators, {
            kind: "method",
            name: "press",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "press" in obj;
                },
                get: function(obj) {
                    return obj.press;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_ElementHandle, null, _boundingBox_decorators, {
            kind: "method",
            name: "boundingBox",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "boundingBox" in obj;
                },
                get: function(obj) {
                    return obj.boundingBox;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_ElementHandle, null, _boxModel_decorators, {
            kind: "method",
            name: "boxModel",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "boxModel" in obj;
                },
                get: function(obj) {
                    return obj.boxModel;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_ElementHandle, null, _screenshot_decorators, {
            kind: "method",
            name: "screenshot",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "screenshot" in obj;
                },
                get: function(obj) {
                    return obj.screenshot;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_ElementHandle, null, _isIntersectingViewport_decorators, {
            kind: "method",
            name: "isIntersectingViewport",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "isIntersectingViewport" in obj;
                },
                get: function(obj) {
                    return obj.isIntersectingViewport;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_ElementHandle, null, _scrollIntoView_decorators, {
            kind: "method",
            name: "scrollIntoView",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "scrollIntoView" in obj;
                },
                get: function(obj) {
                    return obj.scrollIntoView;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        if (_metadata) Object.defineProperty(_ElementHandle, Symbol.metadata, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _metadata
        });
    }(), _ElementHandle;
    function _$$impl1() {
        _$$impl1 = _async_to_generator(function(selector) {
            var _getQueryHandlerAndSelector, updatedSelector, QueryHandler;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _getQueryHandlerAndSelector = (0,_common_GetQueryHandler_js__WEBPACK_IMPORTED_MODULE_0__.getQueryHandlerAndSelector)(selector), updatedSelector = _getQueryHandlerAndSelector.updatedSelector, QueryHandler = _getQueryHandlerAndSelector.QueryHandler;
                        return [
                            4,
                            _util_AsyncIterableUtil_js__WEBPACK_IMPORTED_MODULE_4__.AsyncIterableUtil.collect(QueryHandler.queryAll(this, updatedSelector))
                        ];
                    case 1:
                        return [
                            2,
                            _state.sent()
                        ];
                }
            });
        });
        return _$$impl1.apply(this, arguments);
    }
    function _checkVisibility1() {
        _checkVisibility1 = _async_to_generator(function(visibility) {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            this.evaluate(function() {
                                var _ref = _async_to_generator(function(element, PuppeteerUtil, visibility) {
                                    return _ts_generator(this, function(_state) {
                                        return [
                                            2,
                                            Boolean(PuppeteerUtil.checkVisibility(element, visibility))
                                        ];
                                    });
                                });
                                return function(element, PuppeteerUtil, visibility) {
                                    return _ref.apply(this, arguments);
                                };
                            }(), _common_LazyArg_js__WEBPACK_IMPORTED_MODULE_1__.LazyArg.create(function(context) {
                                return context.puppeteerUtil;
                            }), visibility)
                        ];
                    case 1:
                        return [
                            2,
                            _state.sent()
                        ];
                }
            });
        });
        return _checkVisibility1.apply(this, arguments);
    }
    function _clickableBox1() {
        _clickableBox1 = _async_to_generator(function() {
            var _loop, boxes, frame, parentFrame, _ret, box;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _loop = function() {
                            var env_3, handle, _tmp, parentBox, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, box, e_3;
                            return _ts_generator(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        env_3 = {
                                            stack: [],
                                            error: void 0,
                                            hasError: false
                                        };
                                        _state.label = 1;
                                    case 1:
                                        _state.trys.push([
                                            1,
                                            5,
                                            6,
                                            7
                                        ]);
                                        _tmp = [
                                            env_3
                                        ];
                                        return [
                                            4,
                                            frame.frameElement()
                                        ];
                                    case 2:
                                        handle = __addDisposableResource.apply(void 0, _tmp.concat([
                                            _state.sent(),
                                            false
                                        ]));
                                        if (!handle) {
                                            throw new Error('Unsupported frame type');
                                        }
                                        return [
                                            4,
                                            handle.evaluate(function(element) {
                                                // Element is not visible.
                                                if (element.getClientRects().length === 0) {
                                                    return null;
                                                }
                                                var rect = element.getBoundingClientRect();
                                                var style = window.getComputedStyle(element);
                                                return {
                                                    left: rect.left + parseInt(style.paddingLeft, 10) + parseInt(style.borderLeftWidth, 10),
                                                    top: rect.top + parseInt(style.paddingTop, 10) + parseInt(style.borderTopWidth, 10)
                                                };
                                            })
                                        ];
                                    case 3:
                                        parentBox = _state.sent();
                                        if (!parentBox) {
                                            return [
                                                2,
                                                {
                                                    v: null
                                                }
                                            ];
                                        }
                                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                        try {
                                            for(_iterator = boxes[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                                box = _step.value;
                                                box.x += parentBox.left;
                                                box.y += parentBox.top;
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
                                        return [
                                            4,
                                            _class_private_method_get(handle, _intersectBoundingBoxesWithFrame, intersectBoundingBoxesWithFrame).call(handle, boxes)
                                        ];
                                    case 4:
                                        _state.sent();
                                        frame = parentFrame;
                                        return [
                                            3,
                                            7
                                        ];
                                    case 5:
                                        e_3 = _state.sent();
                                        env_3.error = e_3;
                                        env_3.hasError = true;
                                        return [
                                            3,
                                            7
                                        ];
                                    case 6:
                                        __disposeResources(env_3);
                                        return [
                                            7
                                        ];
                                    case 7:
                                        return [
                                            2
                                        ];
                                }
                            });
                        };
                        return [
                            4,
                            this.evaluate(function(element) {
                                if (!_instanceof(element, Element)) {
                                    return null;
                                }
                                return _to_consumable_array(element.getClientRects()).map(function(rect) {
                                    return {
                                        x: rect.x,
                                        y: rect.y,
                                        width: rect.width,
                                        height: rect.height
                                    };
                                });
                            })
                        ];
                    case 1:
                        boxes = _state.sent();
                        if (!(boxes === null || boxes === void 0 ? void 0 : boxes.length)) {
                            return [
                                2,
                                null
                            ];
                        }
                        return [
                            4,
                            _class_private_method_get(this, _intersectBoundingBoxesWithFrame, intersectBoundingBoxesWithFrame).call(this, boxes)
                        ];
                    case 2:
                        _state.sent();
                        frame = this.frame;
                        _state.label = 3;
                    case 3:
                        if (!(parentFrame = frame === null || frame === void 0 ? void 0 : frame.parentFrame())) return [
                            3,
                            5
                        ];
                        return [
                            5,
                            _ts_values(_loop())
                        ];
                    case 4:
                        _ret = _state.sent();
                        if (_type_of(_ret) === "object") return [
                            2,
                            _ret.v
                        ];
                        return [
                            3,
                            3
                        ];
                    case 5:
                        box = boxes.find(function(box) {
                            return box.width >= 1 && box.height >= 1;
                        });
                        if (!box) {
                            return [
                                2,
                                null
                            ];
                        }
                        return [
                            2,
                            {
                                x: box.x,
                                y: box.y,
                                height: box.height,
                                width: box.width
                            }
                        ];
                }
            });
        });
        return _clickableBox1.apply(this, arguments);
    }
    function _intersectBoundingBoxesWithFrame1() {
        _intersectBoundingBoxesWithFrame1 = _async_to_generator(function(boxes) {
            var _ref, documentWidth, documentHeight, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, box;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            this.frame.isolatedRealm().evaluate(function() {
                                return {
                                    documentWidth: document.documentElement.clientWidth,
                                    documentHeight: document.documentElement.clientHeight
                                };
                            })
                        ];
                    case 1:
                        _ref = _state.sent(), documentWidth = _ref.documentWidth, documentHeight = _ref.documentHeight;
                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(_iterator = boxes[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                box = _step.value;
                                intersectBoundingBox(box, documentWidth, documentHeight);
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
                        return [
                            2
                        ];
                }
            });
        });
        return _intersectBoundingBoxesWithFrame1.apply(this, arguments);
    }
    function _getTopLeftCornerOfFrame1() {
        _getTopLeftCornerOfFrame1 = _async_to_generator(function() {
            var point, frame, parentFrame, env_4, handle, _tmp, parentBox, e_4;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        point = {
                            x: 0,
                            y: 0
                        };
                        frame = this.frame;
                        _state.label = 1;
                    case 1:
                        if (!(parentFrame = frame === null || frame === void 0 ? void 0 : frame.parentFrame())) return [
                            3,
                            8
                        ];
                        env_4 = {
                            stack: [],
                            error: void 0,
                            hasError: false
                        };
                        _state.label = 2;
                    case 2:
                        _state.trys.push([
                            2,
                            5,
                            6,
                            7
                        ]);
                        _tmp = [
                            env_4
                        ];
                        return [
                            4,
                            frame.frameElement()
                        ];
                    case 3:
                        handle = __addDisposableResource.apply(void 0, _tmp.concat([
                            _state.sent(),
                            false
                        ]));
                        if (!handle) {
                            throw new Error('Unsupported frame type');
                        }
                        return [
                            4,
                            handle.evaluate(function(element) {
                                // Element is not visible.
                                if (element.getClientRects().length === 0) {
                                    return null;
                                }
                                var rect = element.getBoundingClientRect();
                                var style = window.getComputedStyle(element);
                                return {
                                    left: rect.left + parseInt(style.paddingLeft, 10) + parseInt(style.borderLeftWidth, 10),
                                    top: rect.top + parseInt(style.paddingTop, 10) + parseInt(style.borderTopWidth, 10)
                                };
                            })
                        ];
                    case 4:
                        parentBox = _state.sent();
                        if (!parentBox) {
                            return [
                                2,
                                null
                            ];
                        }
                        point.x += parentBox.left;
                        point.y += parentBox.top;
                        frame = parentFrame;
                        return [
                            3,
                            7
                        ];
                    case 5:
                        e_4 = _state.sent();
                        env_4.error = e_4;
                        env_4.hasError = true;
                        return [
                            3,
                            7
                        ];
                    case 6:
                        __disposeResources(env_4);
                        return [
                            7
                        ];
                    case 7:
                        return [
                            3,
                            1
                        ];
                    case 8:
                        return [
                            2,
                            point
                        ];
                }
            });
        });
        return _getTopLeftCornerOfFrame1.apply(this, arguments);
    }
    function _nonEmptyVisibleBoundingBox1() {
        _nonEmptyVisibleBoundingBox1 = _async_to_generator(function() {
            var box;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            this.boundingBox()
                        ];
                    case 1:
                        box = _state.sent();
                        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_3__.assert)(box, 'Node is either not visible or not an HTMLElement');
                        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_3__.assert)(box.width !== 0, 'Node has 0 width.');
                        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_3__.assert)(box.height !== 0, 'Node has 0 height.');
                        return [
                            2,
                            box
                        ];
                }
            });
        });
        return _nonEmptyVisibleBoundingBox1.apply(this, arguments);
    }
    function _asSVGElementHandle1() {
        _asSVGElementHandle1 = _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            this.evaluate(function(element) {
                                return _instanceof(element, SVGElement);
                            })
                        ];
                    case 1:
                        if (_state.sent()) {
                            return [
                                2,
                                this
                            ];
                        } else {
                            return [
                                2,
                                null
                            ];
                        }
                        return [
                            2
                        ];
                }
            });
        });
        return _asSVGElementHandle1.apply(this, arguments);
    }
    function _getOwnerSVGElement1() {
        _getOwnerSVGElement1 = _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            this.evaluateHandle(function(element) {
                                if (_instanceof(element, SVGSVGElement)) {
                                    return element;
                                }
                                return element.ownerSVGElement;
                            })
                        ];
                    case 1:
                        // SVGSVGElement.ownerSVGElement === null.
                        return [
                            2,
                            _state.sent()
                        ];
                }
            });
        });
        return _getOwnerSVGElement1.apply(this, arguments);
    }
}();

function intersectBoundingBox(box, width, height) {
    box.width = Math.max(box.x >= 0 ? Math.min(width - box.x, box.width) : Math.min(width, box.width + box.x), 0);
    box.height = Math.max(box.y >= 0 ? Math.min(height - box.y, box.height) : Math.min(height, box.height + box.y), 0);
} //# sourceMappingURL=ElementHandle.js.map


}),

}]);