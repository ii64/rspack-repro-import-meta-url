"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_api_Frame_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/api/Frame.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Frame: function() { return Frame; },
  FrameEvent: function() { return FrameEvent; },
  throwIfDetached: function() { return throwIfDetached; }
});
/* harmony import */var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/EventEmitter.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/EventEmitter.js");
/* harmony import */var _common_GetQueryHandler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/GetQueryHandler.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/GetQueryHandler.js");
/* harmony import */var _common_HandleIterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/HandleIterator.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/HandleIterator.js");
/* harmony import */var _common_util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */var _util_assert_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/assert.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js");
/* harmony import */var _util_decorators_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/decorators.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/decorators.js");
/* harmony import */var _locators_locators_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./locators/locators.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/locators/locators.js");
/**
 * @license
 * Copyright 2023 Google Inc.
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
function _async_iterator(iterable) {
    var method, async, sync, retry = 2;
    for("undefined" != typeof Symbol && (async = Symbol.asyncIterator, sync = Symbol.iterator); retry--;){
        if (async && null != (method = iterable[async])) return method.call(iterable);
        if (sync && null != (method = iterable[sync])) return new AsyncFromSyncIterator(method.call(iterable));
        async = "@@asyncIterator", sync = "@@iterator";
    }
    throw new TypeError("Object is not async iterable");
}
function AsyncFromSyncIterator(s) {
    function AsyncFromSyncIteratorContinuation(r) {
        if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object."));
        var done = r.done;
        return Promise.resolve(r.value).then(function(value) {
            return {
                value: value,
                done: done
            };
        });
    }
    return AsyncFromSyncIterator = function(s) {
        this.s = s, this.n = s.next;
    }, AsyncFromSyncIterator.prototype = {
        s: null,
        n: null,
        next: function() {
            return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments));
        },
        return: function(value) {
            var ret = this.s.return;
            return void 0 === ret ? Promise.resolve({
                value: value,
                done: !0
            }) : AsyncFromSyncIteratorContinuation(ret.apply(this.s, arguments));
        },
        throw: function(value) {
            var thr = this.s.return;
            return void 0 === thr ? Promise.reject(value) : AsyncFromSyncIteratorContinuation(thr.apply(this.s, arguments));
        }
    }, new AsyncFromSyncIterator(s);
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







/**
 * We use symbols to prevent external parties listening to these events.
 * They are internal to Puppeteer.
 *
 * @internal
 */ // eslint-disable-next-line @typescript-eslint/no-namespace
var FrameEvent;
(function(FrameEvent) {
    FrameEvent.FrameNavigated = Symbol('Frame.FrameNavigated');
    FrameEvent.FrameSwapped = Symbol('Frame.FrameSwapped');
    FrameEvent.LifecycleEvent = Symbol('Frame.LifecycleEvent');
    FrameEvent.FrameNavigatedWithinDocument = Symbol('Frame.FrameNavigatedWithinDocument');
    FrameEvent.FrameDetached = Symbol('Frame.FrameDetached');
    FrameEvent.FrameSwappedByActivation = Symbol('Frame.FrameSwappedByActivation');
})(FrameEvent || (FrameEvent = {}));
/**
 * @internal
 */ var throwIfDetached = (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_5__.throwIfDisposed)(function(frame) {
    return "Attempted to use detached Frame '".concat(frame._id, "'.");
});
/**
 * Represents a DOM frame.
 *
 * To understand frames, you can think of frames as `<iframe>` elements. Just
 * like iframes, frames can be nested, and when JavaScript is executed in a
 * frame, the JavaScript does not effect frames inside the ambient frame the
 * JavaScript executes in.
 *
 * @example
 * At any point in time, {@link Page | pages} expose their current frame
 * tree via the {@link Page.mainFrame} and {@link Frame.childFrames} methods.
 *
 * @example
 * An example of dumping frame tree:
 *
 * ```ts
 * import puppeteer from 'puppeteer';
 *
 * (async () => {
 *   const browser = await puppeteer.launch();
 *   const page = await browser.newPage();
 *   await page.goto('https://www.google.com/chrome/browser/canary.html');
 *   dumpFrameTree(page.mainFrame(), '');
 *   await browser.close();
 *
 *   function dumpFrameTree(frame, indent) {
 *     console.log(indent + frame.url());
 *     for (const child of frame.childFrames()) {
 *       dumpFrameTree(child, indent + '  ');
 *     }
 *   }
 * })();
 * ```
 *
 * @example
 * An example of getting text from an iframe element:
 *
 * ```ts
 * const frame = page.frames().find(frame => frame.name() === 'myframe');
 * const text = await frame.$eval('.selector', element => element.textContent);
 * console.log(text);
 * ```
 *
 * @remarks
 * Frame lifecycles are controlled by three events that are all dispatched on
 * the parent {@link Frame.page | page}:
 *
 * - {@link PageEvent.FrameAttached}
 * - {@link PageEvent.FrameNavigated}
 * - {@link PageEvent.FrameDetached}
 *
 * @public
 */ var Frame = function() {
    var /**
         * @internal
         */ document1 = function document1() {
        if (!_class_private_field_get(this, __document)) {
            _class_private_field_set(this, __document, this.mainRealm().evaluateHandle(function() {
                return document;
            }));
        }
        return _class_private_field_get(this, __document);
    };
    var __document, _document, _Frame;
    var _classSuper = _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter;
    var _instanceExtraInitializers = [];
    var _frameElement_decorators;
    var _evaluateHandle_decorators;
    var _evaluate_decorators;
    var _locator_decorators;
    var _$_decorators;
    var _$$_decorators;
    var _$eval_decorators;
    var _$$eval_decorators;
    var _waitForSelector_decorators;
    var _waitForFunction_decorators;
    var _content_decorators;
    var _addScriptTag_decorators;
    var _addStyleTag_decorators;
    var _click_decorators;
    var _focus_decorators;
    var _hover_decorators;
    var _select_decorators;
    var _tap_decorators;
    var _type_decorators;
    var _title_decorators;
    return __document = /*#__PURE__*/ new WeakMap(), _document = /*#__PURE__*/ new WeakSet(), _Frame = /*#__PURE__*/ function(_classSuper) {
        "use strict";
        _inherits(Frame, _classSuper);
        var _super = _create_super(Frame);
        function Frame() {
            _class_call_check(this, Frame);
            var _this;
            _this = _super.call(this);
            _class_private_method_init(_assert_this_initialized(_this), _document);
            /**
         * @internal
         */ _define_property(_assert_this_initialized(_this), "_id", __runInitializers(_assert_this_initialized(_this), _instanceExtraInitializers));
            /**
         * @internal
         */ _define_property(_assert_this_initialized(_this), "_parentId", void 0);
            /**
         * @internal
         */ _define_property(_assert_this_initialized(_this), "_name", void 0);
            /**
         * @internal
         */ _define_property(_assert_this_initialized(_this), "_hasStartedLoading", false);
            _class_private_field_init(_assert_this_initialized(_this), __document, {
                writable: true,
                value: void 0
            });
            return _this;
        }
        _create_class(Frame, [
            {
                /**
         * Used to clear the document handle that has been destroyed.
         *
         * @internal
         */ key: "clearDocumentHandle",
                value: function clearDocumentHandle() {
                    _class_private_field_set(this, __document, undefined);
                }
            },
            {
                key: "frameElement",
                value: /**
         * @returns The frame element associated with this frame (if any).
         */ function frameElement() {
                    var _this = this;
                    return _async_to_generator(function() {
                        var env_1, parentFrame, list, _tmp, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, iframe_1, env_2, iframe, frame, e_1, err, e_2;
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
                                        19,
                                        20,
                                        21
                                    ]);
                                    parentFrame = _this.parentFrame();
                                    if (!parentFrame) {
                                        return [
                                            2,
                                            null
                                        ];
                                    }
                                    _tmp = [
                                        env_1
                                    ];
                                    return [
                                        4,
                                        parentFrame.isolatedRealm().evaluateHandle(function() {
                                            return document.querySelectorAll('iframe,frame');
                                        })
                                    ];
                                case 2:
                                    list = __addDisposableResource.apply(void 0, _tmp.concat([
                                        _state.sent(),
                                        false
                                    ]));
                                    _iteratorAbruptCompletion = false, _didIteratorError = false;
                                    _state.label = 3;
                                case 3:
                                    _state.trys.push([
                                        3,
                                        12,
                                        13,
                                        18
                                    ]);
                                    _iterator = _async_iterator((0,_common_HandleIterator_js__WEBPACK_IMPORTED_MODULE_2__.transposeIterableHandle)(list));
                                    _state.label = 4;
                                case 4:
                                    return [
                                        4,
                                        _iterator.next()
                                    ];
                                case 5:
                                    if (!(_iteratorAbruptCompletion = !(_step = _state.sent()).done)) return [
                                        3,
                                        11
                                    ];
                                    _value = _step.value;
                                    iframe_1 = _value;
                                    env_2 = {
                                        stack: [],
                                        error: void 0,
                                        hasError: false
                                    };
                                    _state.label = 6;
                                case 6:
                                    _state.trys.push([
                                        6,
                                        8,
                                        9,
                                        10
                                    ]);
                                    iframe = __addDisposableResource(env_2, iframe_1, false);
                                    return [
                                        4,
                                        iframe.contentFrame()
                                    ];
                                case 7:
                                    frame = _state.sent();
                                    if ((frame === null || frame === void 0 ? void 0 : frame._id) === _this._id) {
                                        return [
                                            2,
                                            iframe.move()
                                        ];
                                    }
                                    return [
                                        3,
                                        10
                                    ];
                                case 8:
                                    e_1 = _state.sent();
                                    env_2.error = e_1;
                                    env_2.hasError = true;
                                    return [
                                        3,
                                        10
                                    ];
                                case 9:
                                    __disposeResources(env_2);
                                    return [
                                        7
                                    ];
                                case 10:
                                    _iteratorAbruptCompletion = false;
                                    return [
                                        3,
                                        4
                                    ];
                                case 11:
                                    return [
                                        3,
                                        18
                                    ];
                                case 12:
                                    err = _state.sent();
                                    _didIteratorError = true;
                                    _iteratorError = err;
                                    return [
                                        3,
                                        18
                                    ];
                                case 13:
                                    _state.trys.push([
                                        13,
                                        ,
                                        16,
                                        17
                                    ]);
                                    if (!(_iteratorAbruptCompletion && _iterator.return != null)) return [
                                        3,
                                        15
                                    ];
                                    return [
                                        4,
                                        _iterator.return()
                                    ];
                                case 14:
                                    _state.sent();
                                    _state.label = 15;
                                case 15:
                                    return [
                                        3,
                                        17
                                    ];
                                case 16:
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                    return [
                                        7
                                    ];
                                case 17:
                                    return [
                                        7
                                    ];
                                case 18:
                                    return [
                                        2,
                                        null
                                    ];
                                case 19:
                                    e_2 = _state.sent();
                                    env_1.error = e_2;
                                    env_1.hasError = true;
                                    return [
                                        3,
                                        21
                                    ];
                                case 20:
                                    __disposeResources(env_1);
                                    return [
                                        7
                                    ];
                                case 21:
                                    return [
                                        2
                                    ];
                            }
                        });
                    })();
                }
            },
            {
                key: "evaluateHandle",
                value: /**
         * Behaves identically to {@link Page.evaluateHandle} except it's run within
         * the context of this frame.
         *
         * See {@link Page.evaluateHandle} for details.
         */ function evaluateHandle(pageFunction) {
                    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                        args[_key - 1] = arguments[_key];
                    }
                    var _this = this;
                    return _async_to_generator(function() {
                        var _this_mainRealm;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    pageFunction = (0,_common_util_js__WEBPACK_IMPORTED_MODULE_3__.withSourcePuppeteerURLIfNone)(_this.evaluateHandle.name, pageFunction);
                                    return [
                                        4,
                                        (_this_mainRealm = _this.mainRealm()).evaluateHandle.apply(_this_mainRealm, [
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
                key: "evaluate",
                value: /**
         * Behaves identically to {@link Page.evaluate} except it's run within
         * the context of this frame.
         *
         * See {@link Page.evaluate} for details.
         */ function evaluate(pageFunction) {
                    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                        args[_key - 1] = arguments[_key];
                    }
                    var _this = this;
                    return _async_to_generator(function() {
                        var _this_mainRealm;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    pageFunction = (0,_common_util_js__WEBPACK_IMPORTED_MODULE_3__.withSourcePuppeteerURLIfNone)(_this.evaluate.name, pageFunction);
                                    return [
                                        4,
                                        (_this_mainRealm = _this.mainRealm()).evaluate.apply(_this_mainRealm, [
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
                /**
         * @internal
         */ key: "locator",
                value: function locator(selectorOrFunc) {
                    if (typeof selectorOrFunc === 'string') {
                        return _locators_locators_js__WEBPACK_IMPORTED_MODULE_6__.NodeLocator.create(this, selectorOrFunc);
                    } else {
                        return _locators_locators_js__WEBPACK_IMPORTED_MODULE_6__.FunctionLocator.create(this, selectorOrFunc);
                    }
                }
            },
            {
                key: "$",
                value: /**
         * Queries the frame for an element matching the given selector.
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
         *
         * @returns A {@link ElementHandle | element handle} to the first element
         * matching the given selector. Otherwise, `null`.
         */ function $(selector) {
                    var _this = this;
                    return _async_to_generator(function() {
                        var document2;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _class_private_method_get(_this, _document, document1).call(_this)
                                    ];
                                case 1:
                                    document2 = _state.sent();
                                    return [
                                        4,
                                        document2.$(selector)
                                    ];
                                case 2:
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
         * Queries the frame for all elements matching the given selector.
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
         *
         * @returns An array of {@link ElementHandle | element handles} that point to
         * elements matching the given selector.
         */ function $$(selector, options) {
                    var _this = this;
                    return _async_to_generator(function() {
                        var document2;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _class_private_method_get(_this, _document, document1).call(_this)
                                    ];
                                case 1:
                                    document2 = _state.sent();
                                    return [
                                        4,
                                        document2.$$(selector, options)
                                    ];
                                case 2:
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
         * the frame.
         *
         * If the given function returns a promise, then this method will wait till
         * the promise resolves.
         *
         * @example
         *
         * ```ts
         * const searchValue = await frame.$eval('#search', el => el.value);
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
         * @param pageFunction - The function to be evaluated in the frame's context.
         * The first element matching the selector will be passed to the function as
         * its first argument.
         * @param args - Additional arguments to pass to `pageFunction`.
         * @returns A promise to the result of the function.
         */ function $eval(selector, pageFunction) {
                    for(var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                        args[_key - 2] = arguments[_key];
                    }
                    var _this = this;
                    return _async_to_generator(function() {
                        var _document1, document2;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    pageFunction = (0,_common_util_js__WEBPACK_IMPORTED_MODULE_3__.withSourcePuppeteerURLIfNone)(_this.$eval.name, pageFunction);
                                    return [
                                        4,
                                        _class_private_method_get(_this, _document, document1).call(_this)
                                    ];
                                case 1:
                                    document2 = _state.sent();
                                    return [
                                        4,
                                        (_document1 = document2).$eval.apply(_document1, [
                                            selector,
                                            pageFunction
                                        ].concat(_to_consumable_array(args)))
                                    ];
                                case 2:
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
                key: "$$eval",
                value: /**
         * Runs the given function on an array of elements matching the given selector
         * in the frame.
         *
         * If the given function returns a promise, then this method will wait till
         * the promise resolves.
         *
         * @example
         *
         * ```ts
         * const divsCounts = await frame.$$eval('div', divs => divs.length);
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
         * @param pageFunction - The function to be evaluated in the frame's context.
         * An array of elements matching the given selector will be passed to the
         * function as its first argument.
         * @param args - Additional arguments to pass to `pageFunction`.
         * @returns A promise to the result of the function.
         */ function $$eval(selector, pageFunction) {
                    for(var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                        args[_key - 2] = arguments[_key];
                    }
                    var _this = this;
                    return _async_to_generator(function() {
                        var _document1, document2;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    pageFunction = (0,_common_util_js__WEBPACK_IMPORTED_MODULE_3__.withSourcePuppeteerURLIfNone)(_this.$$eval.name, pageFunction);
                                    return [
                                        4,
                                        _class_private_method_get(_this, _document, document1).call(_this)
                                    ];
                                case 1:
                                    document2 = _state.sent();
                                    return [
                                        4,
                                        (_document1 = document2).$$eval.apply(_document1, [
                                            selector,
                                            pageFunction
                                        ].concat(_to_consumable_array(args)))
                                    ];
                                case 2:
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
                key: "waitForSelector",
                value: /**
         * Waits for an element matching the given selector to appear in the frame.
         *
         * This method works across navigations.
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
                                    _getQueryHandlerAndSelector = (0,_common_GetQueryHandler_js__WEBPACK_IMPORTED_MODULE_1__.getQueryHandlerAndSelector)(selector), updatedSelector = _getQueryHandlerAndSelector.updatedSelector, QueryHandler = _getQueryHandlerAndSelector.QueryHandler, polling = _getQueryHandlerAndSelector.polling;
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
                key: "waitForFunction",
                value: /**
         * @example
         * The `waitForFunction` can be used to observe viewport size change:
         *
         * ```ts
         * import puppeteer from 'puppeteer';
         *
         * (async () => {
         * .  const browser = await puppeteer.launch();
         * .  const page = await browser.newPage();
         * .  const watchDog = page.mainFrame().waitForFunction('window.innerWidth < 100');
         * .  page.setViewport({width: 50, height: 50});
         * .  await watchDog;
         * .  await browser.close();
         * })();
         * ```
         *
         * To pass arguments from Node.js to the predicate of `page.waitForFunction` function:
         *
         * ```ts
         * const selector = '.foo';
         * await frame.waitForFunction(
         *   selector => !!document.querySelector(selector),
         *   {}, // empty options object
         *   selector
         * );
         * ```
         *
         * @param pageFunction - the function to evaluate in the frame context.
         * @param options - options to configure the polling method and timeout.
         * @param args - arguments to pass to the `pageFunction`.
         * @returns the promise which resolve when the `pageFunction` returns a truthy value.
         */ function waitForFunction(pageFunction) {
                    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                    for(var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                        args[_key - 2] = arguments[_key];
                    }
                    var _this = this;
                    return _async_to_generator(function() {
                        var _this_mainRealm;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        (_this_mainRealm = _this.mainRealm()).waitForFunction.apply(_this_mainRealm, [
                                            pageFunction,
                                            options
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
                key: "content",
                value: /**
         * The full HTML contents of the frame, including the DOCTYPE.
         */ function content() {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this.evaluate(function() {
                                            var content = '';
                                            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                            try {
                                                for(var _iterator = document.childNodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                                    var node = _step.value;
                                                    switch(node){
                                                        case document.documentElement:
                                                            content += document.documentElement.outerHTML;
                                                            break;
                                                        default:
                                                            content += new XMLSerializer().serializeToString(node);
                                                            break;
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
                                            return content;
                                        })
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
                key: "setFrameContent",
                value: /**
         * @internal
         */ function setFrameContent(content) {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this.evaluate(function(html) {
                                            document.open();
                                            document.write(html);
                                            document.close();
                                        }, content)
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
         * The frame's `name` attribute as specified in the tag.
         *
         * @remarks
         * If the name is empty, it returns the `id` attribute instead.
         *
         * @remarks
         * This value is calculated once when the frame is created, and will not
         * update if the attribute is changed later.
         *
         * @deprecated Use
         *
         * ```ts
         * const element = await frame.frameElement();
         * const nameOrId = await element.evaluate(frame => frame.name ?? frame.id);
         * ```
         */ key: "name",
                value: function name() {
                    return this._name || '';
                }
            },
            {
                /**
         * Is`true` if the frame has been detached. Otherwise, `false`.
         *
         * @deprecated Use the `detached` getter.
         */ key: "isDetached",
                value: function isDetached() {
                    return this.detached;
                }
            },
            {
                key: "disposed",
                get: /**
         * @internal
         */ function get() {
                    return this.detached;
                }
            },
            {
                key: "addScriptTag",
                value: /**
         * Adds a `<script>` tag into the page with the desired url or content.
         *
         * @param options - Options for the script.
         * @returns An {@link ElementHandle | element handle} to the injected
         * `<script>` element.
         */ function addScriptTag(options) {
                    var _this = this;
                    return _async_to_generator(function() {
                        var _options_content, content, type, path, fs, _, _1;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    _options_content = options.content, content = _options_content === void 0 ? '' : _options_content, type = options.type;
                                    path = options.path;
                                    if (+!!options.url + +!!path + +!!content !== 1) {
                                        throw new Error('Exactly one of `url`, `path`, or `content` must be specified.');
                                    }
                                    if (!path) return [
                                        3,
                                        3
                                    ];
                                    return [
                                        4,
                                        (0,_common_util_js__WEBPACK_IMPORTED_MODULE_3__.importFSPromises)()
                                    ];
                                case 1:
                                    fs = _state.sent();
                                    return [
                                        4,
                                        fs.readFile(path, 'utf8')
                                    ];
                                case 2:
                                    content = _state.sent();
                                    content += "//# sourceURL=".concat(path.replace(/\n/g, ''));
                                    _state.label = 3;
                                case 3:
                                    type = type !== null && type !== void 0 ? type : 'text/javascript';
                                    _1 = (_ = _this.mainRealm()).transferHandle;
                                    return [
                                        4,
                                        _this.isolatedRealm().evaluateHandle(function() {
                                            var _ref = _async_to_generator(function(param) {
                                                var url, id, type, content;
                                                return _ts_generator(this, function(_state) {
                                                    switch(_state.label){
                                                        case 0:
                                                            url = param.url, id = param.id, type = param.type, content = param.content;
                                                            return [
                                                                4,
                                                                new Promise(function(resolve, reject) {
                                                                    var script = document.createElement('script');
                                                                    script.type = type;
                                                                    script.text = content;
                                                                    script.addEventListener('error', function(event) {
                                                                        var _event_message;
                                                                        reject(new Error((_event_message = event.message) !== null && _event_message !== void 0 ? _event_message : 'Could not load script'));
                                                                    }, {
                                                                        once: true
                                                                    });
                                                                    if (id) {
                                                                        script.id = id;
                                                                    }
                                                                    if (url) {
                                                                        script.src = url;
                                                                        script.addEventListener('load', function() {
                                                                            resolve(script);
                                                                        }, {
                                                                            once: true
                                                                        });
                                                                        document.head.appendChild(script);
                                                                    } else {
                                                                        document.head.appendChild(script);
                                                                        resolve(script);
                                                                    }
                                                                })
                                                            ];
                                                        case 1:
                                                            return [
                                                                2,
                                                                _state.sent()
                                                            ];
                                                    }
                                                });
                                            });
                                            return function(_) {
                                                return _ref.apply(this, arguments);
                                            };
                                        }(), _object_spread_props(_object_spread({}, options), {
                                            type: type,
                                            content: content
                                        }))
                                    ];
                                case 4:
                                    return [
                                        4,
                                        _1.apply(_, [
                                            _state.sent()
                                        ])
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
                key: "addStyleTag",
                value: /**
         * @internal
         */ function addStyleTag(options) {
                    var _this = this;
                    return _async_to_generator(function() {
                        var _options_content, content, path, fs, _, _1;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    _options_content = options.content, content = _options_content === void 0 ? '' : _options_content;
                                    path = options.path;
                                    if (+!!options.url + +!!path + +!!content !== 1) {
                                        throw new Error('Exactly one of `url`, `path`, or `content` must be specified.');
                                    }
                                    if (!path) return [
                                        3,
                                        3
                                    ];
                                    return [
                                        4,
                                        (0,_common_util_js__WEBPACK_IMPORTED_MODULE_3__.importFSPromises)()
                                    ];
                                case 1:
                                    fs = _state.sent();
                                    return [
                                        4,
                                        fs.readFile(path, 'utf8')
                                    ];
                                case 2:
                                    content = _state.sent();
                                    content += '/*# sourceURL=' + path.replace(/\n/g, '') + '*/';
                                    options.content = content;
                                    _state.label = 3;
                                case 3:
                                    _1 = (_ = _this.mainRealm()).transferHandle;
                                    return [
                                        4,
                                        _this.isolatedRealm().evaluateHandle(function() {
                                            var _ref = _async_to_generator(function(param) {
                                                var url, content;
                                                return _ts_generator(this, function(_state) {
                                                    switch(_state.label){
                                                        case 0:
                                                            url = param.url, content = param.content;
                                                            return [
                                                                4,
                                                                new Promise(function(resolve, reject) {
                                                                    var element;
                                                                    if (!url) {
                                                                        element = document.createElement('style');
                                                                        element.appendChild(document.createTextNode(content));
                                                                    } else {
                                                                        var link = document.createElement('link');
                                                                        link.rel = 'stylesheet';
                                                                        link.href = url;
                                                                        element = link;
                                                                    }
                                                                    element.addEventListener('load', function() {
                                                                        resolve(element);
                                                                    }, {
                                                                        once: true
                                                                    });
                                                                    element.addEventListener('error', function(event) {
                                                                        var _event_message;
                                                                        reject(new Error((_event_message = event.message) !== null && _event_message !== void 0 ? _event_message : 'Could not load style'));
                                                                    }, {
                                                                        once: true
                                                                    });
                                                                    document.head.appendChild(element);
                                                                    return element;
                                                                })
                                                            ];
                                                        case 1:
                                                            return [
                                                                2,
                                                                _state.sent()
                                                            ];
                                                    }
                                                });
                                            });
                                            return function(_) {
                                                return _ref.apply(this, arguments);
                                            };
                                        }(), options)
                                    ];
                                case 4:
                                    return [
                                        4,
                                        _1.apply(_, [
                                            _state.sent()
                                        ])
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
                key: "click",
                value: /**
         * Clicks the first element found that matches `selector`.
         *
         * @remarks
         * If `click()` triggers a navigation event and there's a separate
         * `page.waitForNavigation()` promise to be resolved, you may end up with a
         * race condition that yields unexpected results. The correct pattern for
         * click and wait for navigation is the following:
         *
         * ```ts
         * const [response] = await Promise.all([
         *   page.waitForNavigation(waitOptions),
         *   frame.click(selector, clickOptions),
         * ]);
         * ```
         *
         * @param selector - The selector to query for.
         */ function click(selector) {
                    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                    var _this = this;
                    return _async_to_generator(function() {
                        var env_3, handle, _tmp, e_3;
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
                                        _this.$(selector)
                                    ];
                                case 2:
                                    handle = __addDisposableResource.apply(void 0, _tmp.concat([
                                        _state.sent(),
                                        false
                                    ]));
                                    (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_4__.assert)(handle, "No element found for selector: ".concat(selector));
                                    return [
                                        4,
                                        handle.click(options)
                                    ];
                                case 3:
                                    _state.sent();
                                    return [
                                        4,
                                        handle.dispose()
                                    ];
                                case 4:
                                    _state.sent();
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
                    })();
                }
            },
            {
                key: "focus",
                value: /**
         * Focuses the first element that matches the `selector`.
         *
         * @param selector - The selector to query for.
         * @throws Throws if there's no element matching `selector`.
         */ function focus(selector) {
                    var _this = this;
                    return _async_to_generator(function() {
                        var env_4, handle, _tmp, e_4;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    env_4 = {
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
                                        env_4
                                    ];
                                    return [
                                        4,
                                        _this.$(selector)
                                    ];
                                case 2:
                                    handle = __addDisposableResource.apply(void 0, _tmp.concat([
                                        _state.sent(),
                                        false
                                    ]));
                                    (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_4__.assert)(handle, "No element found for selector: ".concat(selector));
                                    return [
                                        4,
                                        handle.focus()
                                    ];
                                case 3:
                                    _state.sent();
                                    return [
                                        3,
                                        6
                                    ];
                                case 4:
                                    e_4 = _state.sent();
                                    env_4.error = e_4;
                                    env_4.hasError = true;
                                    return [
                                        3,
                                        6
                                    ];
                                case 5:
                                    __disposeResources(env_4);
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
                key: "hover",
                value: /**
         * Hovers the pointer over the center of the first element that matches the
         * `selector`.
         *
         * @param selector - The selector to query for.
         * @throws Throws if there's no element matching `selector`.
         */ function hover(selector) {
                    var _this = this;
                    return _async_to_generator(function() {
                        var env_5, handle, _tmp, e_5;
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
                                        4,
                                        5,
                                        6
                                    ]);
                                    _tmp = [
                                        env_5
                                    ];
                                    return [
                                        4,
                                        _this.$(selector)
                                    ];
                                case 2:
                                    handle = __addDisposableResource.apply(void 0, _tmp.concat([
                                        _state.sent(),
                                        false
                                    ]));
                                    (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_4__.assert)(handle, "No element found for selector: ".concat(selector));
                                    return [
                                        4,
                                        handle.hover()
                                    ];
                                case 3:
                                    _state.sent();
                                    return [
                                        3,
                                        6
                                    ];
                                case 4:
                                    e_5 = _state.sent();
                                    env_5.error = e_5;
                                    env_5.hasError = true;
                                    return [
                                        3,
                                        6
                                    ];
                                case 5:
                                    __disposeResources(env_5);
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
                key: "select",
                value: /**
         * Selects a set of value on the first `<select>` element that matches the
         * `selector`.
         *
         * @example
         *
         * ```ts
         * frame.select('select#colors', 'blue'); // single selection
         * frame.select('select#colors', 'red', 'green', 'blue'); // multiple selections
         * ```
         *
         * @param selector - The selector to query for.
         * @param values - The array of values to select. If the `<select>` has the
         * `multiple` attribute, all values are considered, otherwise only the first
         * one is taken into account.
         * @returns the list of values that were successfully selected.
         * @throws Throws if there's no `<select>` matching `selector`.
         */ function select(selector) {
                    for(var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                        values[_key - 1] = arguments[_key];
                    }
                    var _this = this;
                    return _async_to_generator(function() {
                        var env_6, _handle, handle, _tmp, e_6;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    env_6 = {
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
                                        env_6
                                    ];
                                    return [
                                        4,
                                        _this.$(selector)
                                    ];
                                case 2:
                                    handle = __addDisposableResource.apply(void 0, _tmp.concat([
                                        _state.sent(),
                                        false
                                    ]));
                                    (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_4__.assert)(handle, "No element found for selector: ".concat(selector));
                                    return [
                                        4,
                                        (_handle = handle).select.apply(_handle, _to_consumable_array(values))
                                    ];
                                case 3:
                                    return [
                                        2,
                                        _state.sent()
                                    ];
                                case 4:
                                    e_6 = _state.sent();
                                    env_6.error = e_6;
                                    env_6.hasError = true;
                                    return [
                                        3,
                                        6
                                    ];
                                case 5:
                                    __disposeResources(env_6);
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
                key: "tap",
                value: /**
         * Taps the first element that matches the `selector`.
         *
         * @param selector - The selector to query for.
         * @throws Throws if there's no element matching `selector`.
         */ function tap(selector) {
                    var _this = this;
                    return _async_to_generator(function() {
                        var env_7, handle, _tmp, e_7;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    env_7 = {
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
                                        env_7
                                    ];
                                    return [
                                        4,
                                        _this.$(selector)
                                    ];
                                case 2:
                                    handle = __addDisposableResource.apply(void 0, _tmp.concat([
                                        _state.sent(),
                                        false
                                    ]));
                                    (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_4__.assert)(handle, "No element found for selector: ".concat(selector));
                                    return [
                                        4,
                                        handle.tap()
                                    ];
                                case 3:
                                    _state.sent();
                                    return [
                                        3,
                                        6
                                    ];
                                case 4:
                                    e_7 = _state.sent();
                                    env_7.error = e_7;
                                    env_7.hasError = true;
                                    return [
                                        3,
                                        6
                                    ];
                                case 5:
                                    __disposeResources(env_7);
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
                key: "type",
                value: /**
         * Sends a `keydown`, `keypress`/`input`, and `keyup` event for each character
         * in the text.
         *
         * @remarks
         * To press a special key, like `Control` or `ArrowDown`, use
         * {@link Keyboard.press}.
         *
         * @example
         *
         * ```ts
         * await frame.type('#mytextarea', 'Hello'); // Types instantly
         * await frame.type('#mytextarea', 'World', {delay: 100}); // Types slower, like a user
         * ```
         *
         * @param selector - the selector for the element to type into. If there are
         * multiple the first will be used.
         * @param text - text to type into the element
         * @param options - takes one option, `delay`, which sets the time to wait
         * between key presses in milliseconds. Defaults to `0`.
         */ function type(selector, text, options) {
                    var _this = this;
                    return _async_to_generator(function() {
                        var env_8, handle, _tmp, e_8;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    env_8 = {
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
                                        env_8
                                    ];
                                    return [
                                        4,
                                        _this.$(selector)
                                    ];
                                case 2:
                                    handle = __addDisposableResource.apply(void 0, _tmp.concat([
                                        _state.sent(),
                                        false
                                    ]));
                                    (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_4__.assert)(handle, "No element found for selector: ".concat(selector));
                                    return [
                                        4,
                                        handle.type(text, options)
                                    ];
                                case 3:
                                    _state.sent();
                                    return [
                                        3,
                                        6
                                    ];
                                case 4:
                                    e_8 = _state.sent();
                                    env_8.error = e_8;
                                    env_8.hasError = true;
                                    return [
                                        3,
                                        6
                                    ];
                                case 5:
                                    __disposeResources(env_8);
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
                key: "title",
                value: /**
         * The frame's title.
         */ function title() {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this.isolatedRealm().evaluate(function() {
                                            return document.title;
                                        })
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
            }
        ]);
        return Frame;
    }(_classSuper), function() {
        var _classSuper_Symbol_metadata;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_classSuper_Symbol_metadata = _classSuper[Symbol.metadata]) !== null && _classSuper_Symbol_metadata !== void 0 ? _classSuper_Symbol_metadata : null) : void 0;
        _frameElement_decorators = [
            throwIfDetached
        ];
        _evaluateHandle_decorators = [
            throwIfDetached
        ];
        _evaluate_decorators = [
            throwIfDetached
        ];
        _locator_decorators = [
            throwIfDetached
        ];
        _$_decorators = [
            throwIfDetached
        ];
        _$$_decorators = [
            throwIfDetached
        ];
        _$eval_decorators = [
            throwIfDetached
        ];
        _$$eval_decorators = [
            throwIfDetached
        ];
        _waitForSelector_decorators = [
            throwIfDetached
        ];
        _waitForFunction_decorators = [
            throwIfDetached
        ];
        _content_decorators = [
            throwIfDetached
        ];
        _addScriptTag_decorators = [
            throwIfDetached
        ];
        _addStyleTag_decorators = [
            throwIfDetached
        ];
        _click_decorators = [
            throwIfDetached
        ];
        _focus_decorators = [
            throwIfDetached
        ];
        _hover_decorators = [
            throwIfDetached
        ];
        _select_decorators = [
            throwIfDetached
        ];
        _tap_decorators = [
            throwIfDetached
        ];
        _type_decorators = [
            throwIfDetached
        ];
        _title_decorators = [
            throwIfDetached
        ];
        __esDecorate(_Frame, null, _frameElement_decorators, {
            kind: "method",
            name: "frameElement",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "frameElement" in obj;
                },
                get: function(obj) {
                    return obj.frameElement;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_Frame, null, _evaluateHandle_decorators, {
            kind: "method",
            name: "evaluateHandle",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "evaluateHandle" in obj;
                },
                get: function(obj) {
                    return obj.evaluateHandle;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_Frame, null, _evaluate_decorators, {
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
        __esDecorate(_Frame, null, _locator_decorators, {
            kind: "method",
            name: "locator",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "locator" in obj;
                },
                get: function(obj) {
                    return obj.locator;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_Frame, null, _$_decorators, {
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
        __esDecorate(_Frame, null, _$$_decorators, {
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
        __esDecorate(_Frame, null, _$eval_decorators, {
            kind: "method",
            name: "$eval",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "$eval" in obj;
                },
                get: function(obj) {
                    return obj.$eval;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_Frame, null, _$$eval_decorators, {
            kind: "method",
            name: "$$eval",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "$$eval" in obj;
                },
                get: function(obj) {
                    return obj.$$eval;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_Frame, null, _waitForSelector_decorators, {
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
        __esDecorate(_Frame, null, _waitForFunction_decorators, {
            kind: "method",
            name: "waitForFunction",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "waitForFunction" in obj;
                },
                get: function(obj) {
                    return obj.waitForFunction;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_Frame, null, _content_decorators, {
            kind: "method",
            name: "content",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "content" in obj;
                },
                get: function(obj) {
                    return obj.content;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_Frame, null, _addScriptTag_decorators, {
            kind: "method",
            name: "addScriptTag",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "addScriptTag" in obj;
                },
                get: function(obj) {
                    return obj.addScriptTag;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_Frame, null, _addStyleTag_decorators, {
            kind: "method",
            name: "addStyleTag",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "addStyleTag" in obj;
                },
                get: function(obj) {
                    return obj.addStyleTag;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_Frame, null, _click_decorators, {
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
        __esDecorate(_Frame, null, _focus_decorators, {
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
        __esDecorate(_Frame, null, _hover_decorators, {
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
        __esDecorate(_Frame, null, _select_decorators, {
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
        __esDecorate(_Frame, null, _tap_decorators, {
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
        __esDecorate(_Frame, null, _type_decorators, {
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
        __esDecorate(_Frame, null, _title_decorators, {
            kind: "method",
            name: "title",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "title" in obj;
                },
                get: function(obj) {
                    return obj.title;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        if (_metadata) Object.defineProperty(_Frame, Symbol.metadata, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _metadata
        });
    }(), _Frame;
}();
 //# sourceMappingURL=Frame.js.map


}),

}]);