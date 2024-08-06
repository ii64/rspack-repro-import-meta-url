"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_bidi_Frame_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/bidi/Frame.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BidiFrame: function() { return BidiFrame; }
});
/* harmony import */var _third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../third_party/rxjs/rxjs.js */ "./third_party/puppeteer/package/lib/esm/third_party/rxjs/rxjs.js");
/* harmony import */var _api_Frame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/Frame.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/Frame.js");
/* harmony import */var _cdp_Accessibility_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cdp/Accessibility.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Accessibility.js");
/* harmony import */var _common_ConsoleMessage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/ConsoleMessage.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/ConsoleMessage.js");
/* harmony import */var _common_Errors_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/Errors.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/Errors.js");
/* harmony import */var _common_util_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */var _util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/ErrorLike.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/ErrorLike.js");
/* harmony import */var _CDPSession_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CDPSession.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/CDPSession.js");
/* harmony import */var _Deserializer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Deserializer.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/Deserializer.js");
/* harmony import */var _Dialog_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Dialog.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/Dialog.js");
/* harmony import */var _ExposedFunction_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ExposedFunction.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/ExposedFunction.js");
/* harmony import */var _HTTPRequest_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./HTTPRequest.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/HTTPRequest.js");
/* harmony import */var _JSHandle_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./JSHandle.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/JSHandle.js");
/* harmony import */var _Realm_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Realm.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/Realm.js");
/* harmony import */var _util_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/util.js");
/* harmony import */var _WebWorker_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./WebWorker.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/WebWorker.js");
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
var __setFunctionName = undefined && undefined.__setFunctionName || function(f, name, prefix) {
    if ((typeof name === "undefined" ? "undefined" : _type_of(name)) === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
};
















var BidiFrame = function() {
    var initialize = function initialize() {
        var _this = this;
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = this.browsingContext.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var browsingContext = _step.value;
                _class_private_method_get(this, _createFrameTarget, createFrameTarget).call(this, browsingContext);
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
        this.browsingContext.on('browsingcontext', function(param) {
            var browsingContext = param.browsingContext;
            _class_private_method_get(_this, _createFrameTarget, createFrameTarget).call(_this, browsingContext);
        });
        this.browsingContext.on('closed', function() {
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = _CDPSession_js__WEBPACK_IMPORTED_MODULE_7__.BidiCdpSession.sessions.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var session = _step.value;
                    if (session.frame === _this) {
                        session.onClose();
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
            _this.page().trustedEmitter.emit("framedetached" /* PageEvent.FrameDetached */ , _this);
        });
        this.browsingContext.on('request', function(param) {
            var request = param.request;
            var httpRequest = _HTTPRequest_js__WEBPACK_IMPORTED_MODULE_11__.BidiHTTPRequest.from(request, _this);
            request.once('success', function() {
                _this.page().trustedEmitter.emit("requestfinished" /* PageEvent.RequestFinished */ , httpRequest);
            });
            request.once('error', function() {
                _this.page().trustedEmitter.emit("requestfailed" /* PageEvent.RequestFailed */ , httpRequest);
            });
            void httpRequest.finalizeInterceptions();
        });
        this.browsingContext.on('navigation', function(param) {
            var navigation = param.navigation;
            navigation.once('fragment', function() {
                _this.page().trustedEmitter.emit("framenavigated" /* PageEvent.FrameNavigated */ , _this);
            });
        });
        this.browsingContext.on('load', function() {
            _this.page().trustedEmitter.emit("load" /* PageEvent.Load */ , undefined);
        });
        this.browsingContext.on('DOMContentLoaded', function() {
            _this._hasStartedLoading = true;
            _this.page().trustedEmitter.emit("domcontentloaded" /* PageEvent.DOMContentLoaded */ , undefined);
            _this.page().trustedEmitter.emit("framenavigated" /* PageEvent.FrameNavigated */ , _this);
        });
        this.browsingContext.on('userprompt', function(param) {
            var userPrompt = param.userPrompt;
            _this.page().trustedEmitter.emit("dialog" /* PageEvent.Dialog */ , _Dialog_js__WEBPACK_IMPORTED_MODULE_9__.BidiDialog.from(userPrompt));
        });
        this.browsingContext.on('log', function(param) {
            var entry = param.entry;
            if (_this._id !== entry.source.context) {
                return;
            }
            if (isConsoleLogEntry(entry)) {
                var args = entry.args.map(function(arg) {
                    return _this.mainRealm().createHandle(arg);
                });
                var text = args.reduce(function(value, arg) {
                    var parsedValue = _instanceof(arg, _JSHandle_js__WEBPACK_IMPORTED_MODULE_12__.BidiJSHandle) && arg.isPrimitiveValue ? _Deserializer_js__WEBPACK_IMPORTED_MODULE_8__.BidiDeserializer.deserialize(arg.remoteValue()) : arg.toString();
                    return "".concat(value, " ").concat(parsedValue);
                }, '').slice(1);
                _this.page().trustedEmitter.emit("console" /* PageEvent.Console */ , new _common_ConsoleMessage_js__WEBPACK_IMPORTED_MODULE_3__.ConsoleMessage(entry.method, text, args, getStackTraceLocations(entry.stackTrace)));
            } else if (isJavaScriptLogEntry(entry)) {
                var _entry_text;
                var error = new Error((_entry_text = entry.text) !== null && _entry_text !== void 0 ? _entry_text : '');
                var messageHeight = error.message.split('\n').length;
                var messageLines = error.stack.split('\n').splice(0, messageHeight);
                var stackLines = [];
                if (entry.stackTrace) {
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = entry.stackTrace.callFrames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var frame = _step.value;
                            // Note we need to add `1` because the values are 0-indexed.
                            stackLines.push("    at ".concat(frame.functionName || '<anonymous>', " (").concat(frame.url, ":").concat(frame.lineNumber + 1, ":").concat(frame.columnNumber + 1, ")"));
                            if (stackLines.length >= Error.stackTraceLimit) {
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
                }
                error.stack = _to_consumable_array(messageLines).concat(_to_consumable_array(stackLines)).join('\n');
                _this.page().trustedEmitter.emit("pageerror" /* PageEvent.PageError */ , error);
            } else {
                (0,_common_util_js__WEBPACK_IMPORTED_MODULE_5__.debugError)('Unhandled LogEntry with type "'.concat(entry.type, '", text "').concat(entry.text, '" and level "').concat(entry.level, '"'));
            }
        });
        this.browsingContext.on('worker', function(param) {
            var realm = param.realm;
            var worker = _WebWorker_js__WEBPACK_IMPORTED_MODULE_15__.BidiWebWorker.from(_this, realm);
            realm.on('destroyed', function() {
                _this.page().trustedEmitter.emit("workerdestroyed" /* PageEvent.WorkerDestroyed */ , worker);
            });
            _this.page().trustedEmitter.emit("workercreated" /* PageEvent.WorkerCreated */ , worker);
        });
    };
    var createFrameTarget = function createFrameTarget(browsingContext) {
        var _this = this;
        var frame = _BidiFrame.from(this, browsingContext);
        _class_private_field_get(this, _frames).set(browsingContext, frame);
        this.page().trustedEmitter.emit("frameattached" /* PageEvent.FrameAttached */ , frame);
        browsingContext.on('closed', function() {
            _class_private_field_get(_this, _frames).delete(browsingContext);
        });
        return frame;
    };
    var detached$ = function detached$() {
        var _this = this;
        return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.defer)(function() {
            if (_this.detached) {
                return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.of)(_this);
            }
            return (0,_common_util_js__WEBPACK_IMPORTED_MODULE_5__.fromEmitterEvent)(_this.page().trustedEmitter, "framedetached" /* PageEvent.FrameDetached */ ).pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.filter)(function(detachedFrame) {
                return detachedFrame === _this;
            }));
        });
    };
    var get_waitForLoad$ = function get_waitForLoad$() {
        return _private_waitForLoad$_descriptor.value;
    };
    var get_waitForNetworkIdle$ = function get_waitForNetworkIdle$() {
        return _private_waitForNetworkIdle$_descriptor.value;
    };
    var _parent, _frames, _initialize, _createFrameTarget, _detached$, _exposedFunctions, _waitForLoad$, _waitForNetworkIdle$, _BidiFrame;
    var _a;
    var _classSuper = _api_Frame_js__WEBPACK_IMPORTED_MODULE_1__.Frame;
    var _instanceExtraInitializers = [];
    var _goto_decorators;
    var _setContent_decorators;
    var _waitForNavigation_decorators;
    var _private_waitForLoad$_decorators;
    var _private_waitForLoad$_descriptor;
    var _private_waitForNetworkIdle$_decorators;
    var _private_waitForNetworkIdle$_descriptor;
    var _setFiles_decorators;
    var _locateNodes_decorators;
    return _parent = /*#__PURE__*/ new WeakMap(), _frames = /*#__PURE__*/ new WeakMap(), _initialize = /*#__PURE__*/ new WeakSet(), _createFrameTarget = /*#__PURE__*/ new WeakSet(), _detached$ = /*#__PURE__*/ new WeakSet(), _exposedFunctions = /*#__PURE__*/ new WeakMap(), _waitForLoad$ = /*#__PURE__*/ new WeakMap(), _waitForNetworkIdle$ = /*#__PURE__*/ new WeakMap(), _BidiFrame = /*#__PURE__*/ function(_classSuper) {
        "use strict";
        _inherits(BidiFrame, _classSuper);
        var _super = _create_super(BidiFrame);
        function BidiFrame(parent, browsingContext) {
            _class_call_check(this, BidiFrame);
            var _this;
            _this = _super.call(this);
            _class_private_method_init(_assert_this_initialized(_this), _initialize);
            _class_private_method_init(_assert_this_initialized(_this), _createFrameTarget);
            _class_private_method_init(_assert_this_initialized(_this), _detached$);
            _class_private_field_init(_assert_this_initialized(_this), _waitForLoad$, {
                get: get_waitForLoad$,
                set: void 0
            });
            _class_private_field_init(_assert_this_initialized(_this), _waitForNetworkIdle$, {
                get: get_waitForNetworkIdle$,
                set: void 0
            });
            _class_private_field_init(_assert_this_initialized(_this), _parent, {
                writable: true,
                value: __runInitializers(_assert_this_initialized(_this), _instanceExtraInitializers)
            });
            _define_property(_assert_this_initialized(_this), "browsingContext", void 0);
            _class_private_field_init(_assert_this_initialized(_this), _frames, {
                writable: true,
                value: new WeakMap()
            });
            _define_property(_assert_this_initialized(_this), "realms", void 0);
            _define_property(_assert_this_initialized(_this), "_id", void 0);
            _define_property(_assert_this_initialized(_this), "client", void 0);
            _define_property(_assert_this_initialized(_this), "accessibility", void 0);
            _class_private_field_init(_assert_this_initialized(_this), _exposedFunctions, {
                writable: true,
                value: new Map()
            });
            _class_private_field_set(_assert_this_initialized(_this), _parent, parent);
            _this.browsingContext = browsingContext;
            _this._id = browsingContext.id;
            _this.client = new _CDPSession_js__WEBPACK_IMPORTED_MODULE_7__.BidiCdpSession(_assert_this_initialized(_this));
            _this.realms = {
                default: _Realm_js__WEBPACK_IMPORTED_MODULE_13__.BidiFrameRealm.from(_this.browsingContext.defaultRealm, _assert_this_initialized(_this)),
                internal: _Realm_js__WEBPACK_IMPORTED_MODULE_13__.BidiFrameRealm.from(_this.browsingContext.createWindowRealm("__puppeteer_internal_".concat(Math.ceil(Math.random() * 10000))), _assert_this_initialized(_this))
            };
            _this.accessibility = new _cdp_Accessibility_js__WEBPACK_IMPORTED_MODULE_2__.Accessibility(_this.realms.default);
            return _this;
        }
        _create_class(BidiFrame, [
            {
                key: "timeoutSettings",
                get: function get() {
                    return this.page()._timeoutSettings;
                }
            },
            {
                key: "mainRealm",
                value: function mainRealm() {
                    return this.realms.default;
                }
            },
            {
                key: "isolatedRealm",
                value: function isolatedRealm() {
                    return this.realms.internal;
                }
            },
            {
                key: "realm",
                value: function realm(id) {
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = Object.values(this.realms)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var realm = _step.value;
                            if (realm.realm.id === id) {
                                return realm;
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
                    return;
                }
            },
            {
                key: "page",
                value: function page() {
                    var parent = _class_private_field_get(this, _parent);
                    while(_instanceof(parent, BidiFrame)){
                        parent = _class_private_field_get(parent, _parent);
                    }
                    return parent;
                }
            },
            {
                key: "isOOPFrame",
                value: function isOOPFrame() {
                    throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_4__.UnsupportedOperation();
                }
            },
            {
                key: "url",
                value: function url() {
                    return this.browsingContext.url;
                }
            },
            {
                key: "parentFrame",
                value: function parentFrame() {
                    if (_instanceof(_class_private_field_get(this, _parent), BidiFrame)) {
                        return _class_private_field_get(this, _parent);
                    }
                    return null;
                }
            },
            {
                key: "childFrames",
                value: function childFrames() {
                    var _this = this;
                    return _to_consumable_array(this.browsingContext.children).map(function(child) {
                        return _class_private_field_get(_this, _frames).get(child);
                    });
                }
            },
            {
                key: "goto",
                value: function goto(url) {
                    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                    var _this = this;
                    return _async_to_generator(function() {
                        var _options_timeout, _ref, response;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        Promise.all([
                                            _this.waitForNavigation(options),
                                            // Some implementations currently only report errors when the
                                            // readiness=interactive.
                                            //
                                            // Related: https://bugzilla.mozilla.org/show_bug.cgi?id=1846601
                                            _this.browsingContext.navigate(url, "interactive" /* Bidi.BrowsingContext.ReadinessState.Interactive */ ).catch(function(error) {
                                                if ((0,_util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_6__.isErrorLike)(error) && error.message.includes('net::ERR_HTTP_RESPONSE_CODE_FAILURE')) {
                                                    return;
                                                }
                                                throw error;
                                            })
                                        ]).catch((0,_util_js__WEBPACK_IMPORTED_MODULE_14__.rewriteNavigationError)(url, (_options_timeout = options.timeout) !== null && _options_timeout !== void 0 ? _options_timeout : _this.timeoutSettings.navigationTimeout()))
                                    ];
                                case 1:
                                    _ref = _sliced_to_array.apply(void 0, [
                                        _state.sent(),
                                        1
                                    ]), response = _ref[0];
                                    return [
                                        2,
                                        response
                                    ];
                            }
                        });
                    })();
                }
            },
            {
                key: "setContent",
                value: function setContent(html) {
                    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        Promise.all([
                                            _this.setFrameContent(html),
                                            (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.firstValueFrom)((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.combineLatest)([
                                                _class_private_field_get(_this, _waitForLoad$).call(_this, options),
                                                _class_private_field_get(_this, _waitForNetworkIdle$).call(_this, options)
                                            ]))
                                        ])
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
                key: "waitForNavigation",
                value: function waitForNavigation() {
                    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    var _this = this;
                    return _async_to_generator(function() {
                        var tmp, ms, frames;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    tmp = options.timeout, ms = tmp === void 0 ? _this.timeoutSettings.navigationTimeout() : tmp;
                                    frames = _this.childFrames().map(function(frame) {
                                        return _class_private_method_get(frame, _detached$, detached$).call(frame);
                                    });
                                    return [
                                        4,
                                        (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.firstValueFrom)((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.combineLatest)([
                                            (0,_common_util_js__WEBPACK_IMPORTED_MODULE_5__.fromEmitterEvent)(_this.browsingContext, 'navigation').pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.first)()).pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.switchMap)(function(param) {
                                                var navigation = param.navigation;
                                                return _class_private_field_get(_this, _waitForLoad$).call(_this, options).pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.delayWhen)(function() {
                                                    if (frames.length === 0) {
                                                        return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.of)(undefined);
                                                    }
                                                    return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.combineLatest)(frames);
                                                }), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.raceWith)((0,_common_util_js__WEBPACK_IMPORTED_MODULE_5__.fromEmitterEvent)(navigation, 'fragment'), (0,_common_util_js__WEBPACK_IMPORTED_MODULE_5__.fromEmitterEvent)(navigation, 'failed'), (0,_common_util_js__WEBPACK_IMPORTED_MODULE_5__.fromEmitterEvent)(navigation, 'aborted').pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.map)(function(param) {
                                                    var url = param.url;
                                                    throw new Error("Navigation aborted: ".concat(url));
                                                }))), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.switchMap)(function() {
                                                    if (navigation.request) {
                                                        function requestFinished$(request) {
                                                            // Reduces flakiness if the response events arrive after
                                                            // the load event.
                                                            // Usually, the response or error is already there at this point.
                                                            if (request.response || request.error) {
                                                                return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.of)(navigation);
                                                            }
                                                            if (request.redirect) {
                                                                return requestFinished$(request.redirect);
                                                            }
                                                            return (0,_common_util_js__WEBPACK_IMPORTED_MODULE_5__.fromEmitterEvent)(request, 'success').pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.raceWith)((0,_common_util_js__WEBPACK_IMPORTED_MODULE_5__.fromEmitterEvent)(request, 'error')), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.raceWith)((0,_common_util_js__WEBPACK_IMPORTED_MODULE_5__.fromEmitterEvent)(request, 'redirect'))).pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.switchMap)(function() {
                                                                return requestFinished$(request);
                                                            }));
                                                        }
                                                        return requestFinished$(navigation.request);
                                                    }
                                                    return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.of)(navigation);
                                                }));
                                            })),
                                            _class_private_field_get(_this, _waitForNetworkIdle$).call(_this, options)
                                        ]).pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.map)(function(param) {
                                            var _param = _sliced_to_array(param, 1), navigation = _param[0];
                                            var request = navigation.request;
                                            if (!request) {
                                                return null;
                                            }
                                            var _request_lastRedirect;
                                            var lastRequest = (_request_lastRedirect = request.lastRedirect) !== null && _request_lastRedirect !== void 0 ? _request_lastRedirect : request;
                                            var httpRequest = _HTTPRequest_js__WEBPACK_IMPORTED_MODULE_11__.requests.get(lastRequest);
                                            return httpRequest.response();
                                        }), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.raceWith)((0,_common_util_js__WEBPACK_IMPORTED_MODULE_5__.timeout)(ms), _class_private_method_get(_this, _detached$, detached$).call(_this).pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.map)(function() {
                                            throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_4__.TargetCloseError('Frame detached.');
                                        })))))
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
                key: "waitForDevicePrompt",
                value: function waitForDevicePrompt() {
                    throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_4__.UnsupportedOperation();
                }
            },
            {
                key: "detached",
                get: function get() {
                    return this.browsingContext.closed;
                }
            },
            {
                key: "exposeFunction",
                value: function exposeFunction(name, apply) {
                    var _this = this;
                    return _async_to_generator(function() {
                        var exposeable;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    if (_class_private_field_get(_this, _exposedFunctions).has(name)) {
                                        throw new Error("Failed to add page binding with name ".concat(name, ": globalThis['").concat(name, "'] already exists!"));
                                    }
                                    return [
                                        4,
                                        _ExposedFunction_js__WEBPACK_IMPORTED_MODULE_10__.ExposeableFunction.from(_this, name, apply)
                                    ];
                                case 1:
                                    exposeable = _state.sent();
                                    _class_private_field_get(_this, _exposedFunctions).set(name, exposeable);
                                    return [
                                        2
                                    ];
                            }
                        });
                    })();
                }
            },
            {
                key: "removeExposedFunction",
                value: function removeExposedFunction(name) {
                    var _this = this;
                    return _async_to_generator(function() {
                        var exposedFunction;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    exposedFunction = _class_private_field_get(_this, _exposedFunctions).get(name);
                                    if (!exposedFunction) {
                                        throw new Error("Failed to remove page binding with name ".concat(name, ": window['").concat(name, "'] does not exists!"));
                                    }
                                    _class_private_field_get(_this, _exposedFunctions).delete(name);
                                    return [
                                        4,
                                        exposedFunction[Symbol.asyncDispose]()
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
                key: "createCDPSession",
                value: function createCDPSession() {
                    var _this = this;
                    return _async_to_generator(function() {
                        var cdpConnection;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    if (!_this.page().browser().cdpSupported) {
                                        throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_4__.UnsupportedOperation();
                                    }
                                    cdpConnection = _this.page().browser().cdpConnection;
                                    return [
                                        4,
                                        cdpConnection._createSession({
                                            targetId: _this._id
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
                key: "setFiles",
                value: function setFiles(element, files) {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this.browsingContext.setFiles(// SAFETY: ElementHandles are always remote references.
                                        element.remoteValue(), files)
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
                key: "locateNodes",
                value: function locateNodes(element, locator) {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this.browsingContext.locateNodes(locator, [
                                            element.remoteValue()
                                        ])
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
        ], [
            {
                key: "from",
                value: function from(parent, browsingContext) {
                    var frame = new BidiFrame(parent, browsingContext);
                    _class_private_method_get(frame, _initialize, initialize).call(frame);
                    return frame;
                }
            }
        ]);
        return BidiFrame;
    }(_classSuper), function() {
        var _classSuper_Symbol_metadata;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_classSuper_Symbol_metadata = _classSuper[Symbol.metadata]) !== null && _classSuper_Symbol_metadata !== void 0 ? _classSuper_Symbol_metadata : null) : void 0;
        _goto_decorators = [
            _api_Frame_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDetached
        ];
        _setContent_decorators = [
            _api_Frame_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDetached
        ];
        _waitForNavigation_decorators = [
            _api_Frame_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDetached
        ];
        _private_waitForLoad$_decorators = [
            _api_Frame_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDetached
        ];
        _private_waitForNetworkIdle$_decorators = [
            _api_Frame_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDetached
        ];
        _setFiles_decorators = [
            _api_Frame_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDetached
        ];
        _locateNodes_decorators = [
            _api_Frame_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDetached
        ];
        __esDecorate(_BidiFrame, null, _goto_decorators, {
            kind: "method",
            name: "goto",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "goto" in obj;
                },
                get: function(obj) {
                    return obj.goto;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_BidiFrame, null, _setContent_decorators, {
            kind: "method",
            name: "setContent",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "setContent" in obj;
                },
                get: function(obj) {
                    return obj.setContent;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_BidiFrame, null, _waitForNavigation_decorators, {
            kind: "method",
            name: "waitForNavigation",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "waitForNavigation" in obj;
                },
                get: function(obj) {
                    return obj.waitForNavigation;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_BidiFrame, _private_waitForLoad$_descriptor = {
            value: __setFunctionName(function() {
                var _this = this;
                var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                var _options_waitUntil = options.waitUntil, waitUntil = _options_waitUntil === void 0 ? 'load' : _options_waitUntil;
                var tmp = options.timeout, ms = tmp === void 0 ? this.timeoutSettings.navigationTimeout() : tmp;
                if (!Array.isArray(waitUntil)) {
                    waitUntil = [
                        waitUntil
                    ];
                }
                var events = new Set();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = waitUntil[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var lifecycleEvent = _step.value;
                        switch(lifecycleEvent){
                            case 'load':
                                {
                                    events.add('load');
                                    break;
                                }
                            case 'domcontentloaded':
                                {
                                    events.add('DOMContentLoaded');
                                    break;
                                }
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
                if (events.size === 0) {
                    return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.of)(undefined);
                }
                return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.combineLatest)(_to_consumable_array(events).map(function(event) {
                    return (0,_common_util_js__WEBPACK_IMPORTED_MODULE_5__.fromEmitterEvent)(_this.browsingContext, event);
                })).pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.map)(function() {}), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.first)(), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.raceWith)((0,_common_util_js__WEBPACK_IMPORTED_MODULE_5__.timeout)(ms), _class_private_method_get(this, _detached$, detached$).call(this).pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.map)(function() {
                    throw new Error('Frame detached.');
                }))));
            }, "#waitForLoad$")
        }, _private_waitForLoad$_decorators, {
            kind: "method",
            name: "#waitForLoad$",
            static: false,
            private: true,
            access: {
                has: function(obj) {
                    return _waitForLoad$.has(obj);
                },
                get: function(obj) {
                    return _class_private_field_get(obj, _waitForLoad$);
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_BidiFrame, _private_waitForNetworkIdle$_descriptor = {
            value: __setFunctionName(function() {
                var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                var _options_waitUntil = options.waitUntil, waitUntil = _options_waitUntil === void 0 ? 'load' : _options_waitUntil;
                if (!Array.isArray(waitUntil)) {
                    waitUntil = [
                        waitUntil
                    ];
                }
                var concurrency = Infinity;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = waitUntil[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var event = _step.value;
                        switch(event){
                            case 'networkidle0':
                                {
                                    concurrency = Math.min(0, concurrency);
                                    break;
                                }
                            case 'networkidle2':
                                {
                                    concurrency = Math.min(2, concurrency);
                                    break;
                                }
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
                if (concurrency === Infinity) {
                    return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.of)(undefined);
                }
                var _options_timeout;
                return this.page().waitForNetworkIdle$({
                    idleTime: 500,
                    timeout: (_options_timeout = options.timeout) !== null && _options_timeout !== void 0 ? _options_timeout : this.timeoutSettings.timeout(),
                    concurrency: concurrency
                });
            }, "#waitForNetworkIdle$")
        }, _private_waitForNetworkIdle$_decorators, {
            kind: "method",
            name: "#waitForNetworkIdle$",
            static: false,
            private: true,
            access: {
                has: function(obj) {
                    return _waitForNetworkIdle$.has(obj);
                },
                get: function(obj) {
                    return _class_private_field_get(obj, _waitForNetworkIdle$);
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_BidiFrame, null, _setFiles_decorators, {
            kind: "method",
            name: "setFiles",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "setFiles" in obj;
                },
                get: function(obj) {
                    return obj.setFiles;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_BidiFrame, null, _locateNodes_decorators, {
            kind: "method",
            name: "locateNodes",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "locateNodes" in obj;
                },
                get: function(obj) {
                    return obj.locateNodes;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        if (_metadata) Object.defineProperty(_BidiFrame, Symbol.metadata, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _metadata
        });
    }(), _BidiFrame;
}();

function isConsoleLogEntry(event) {
    return event.type === 'console';
}
function isJavaScriptLogEntry(event) {
    return event.type === 'javascript';
}
function getStackTraceLocations(stackTrace) {
    var stackTraceLocations = [];
    if (stackTrace) {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = stackTrace.callFrames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var callFrame = _step.value;
                stackTraceLocations.push({
                    url: callFrame.url,
                    lineNumber: callFrame.lineNumber,
                    columnNumber: callFrame.columnNumber
                });
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
    return stackTraceLocations;
} //# sourceMappingURL=Frame.js.map


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/bidi/WebWorker.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BidiWebWorker: function() { return BidiWebWorker; }
});
/* harmony import */var _api_WebWorker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/WebWorker.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/WebWorker.js");
/* harmony import */var _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Errors.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/Errors.js");
/* harmony import */var _Realm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Realm.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/Realm.js");
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



var _frame = /*#__PURE__*/ new WeakMap(), _realm = /*#__PURE__*/ new WeakMap();
/**
 * @internal
 */ var BidiWebWorker = /*#__PURE__*/ function(WebWorker) {
    "use strict";
    _inherits(BidiWebWorker, WebWorker);
    var _super = _create_super(BidiWebWorker);
    function BidiWebWorker(frame, realm) {
        _class_call_check(this, BidiWebWorker);
        var _this;
        _this = _super.call(this, realm.origin);
        _class_private_field_init(_assert_this_initialized(_this), _frame, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _realm, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(_assert_this_initialized(_this), _frame, frame);
        _class_private_field_set(_assert_this_initialized(_this), _realm, _Realm_js__WEBPACK_IMPORTED_MODULE_2__.BidiWorkerRealm.from(realm, _assert_this_initialized(_this)));
        return _this;
    }
    _create_class(BidiWebWorker, [
        {
            key: "frame",
            get: function get() {
                return _class_private_field_get(this, _frame);
            }
        },
        {
            key: "mainRealm",
            value: function mainRealm() {
                return _class_private_field_get(this, _realm);
            }
        },
        {
            key: "client",
            get: function get() {
                throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation();
            }
        }
    ], [
        {
            key: "from",
            value: function from(frame, realm) {
                var worker = new BidiWebWorker(frame, realm);
                return worker;
            }
        }
    ]);
    return BidiWebWorker;
} //# sourceMappingURL=WebWorker.js.map
(_api_WebWorker_js__WEBPACK_IMPORTED_MODULE_0__.WebWorker);


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/common/ConsoleMessage.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ConsoleMessage: function() { return ConsoleMessage; }
});
/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * ConsoleMessage objects are dispatched by page via the 'console' event.
 * @public
 */ function _check_private_redeclaration(obj, privateCollection) {
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
var _type = /*#__PURE__*/ new WeakMap(), _text = /*#__PURE__*/ new WeakMap(), _args = /*#__PURE__*/ new WeakMap(), _stackTraceLocations = /*#__PURE__*/ new WeakMap();
var ConsoleMessage = /*#__PURE__*/ function() {
    "use strict";
    function ConsoleMessage(type, text, args, stackTraceLocations) {
        _class_call_check(this, ConsoleMessage);
        _class_private_field_init(this, _type, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _text, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _args, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _stackTraceLocations, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _type, type);
        _class_private_field_set(this, _text, text);
        _class_private_field_set(this, _args, args);
        _class_private_field_set(this, _stackTraceLocations, stackTraceLocations);
    }
    _create_class(ConsoleMessage, [
        {
            /**
     * The type of the console message.
     */ key: "type",
            value: function type() {
                return _class_private_field_get(this, _type);
            }
        },
        {
            /**
     * The text of the console message.
     */ key: "text",
            value: function text() {
                return _class_private_field_get(this, _text);
            }
        },
        {
            /**
     * An array of arguments passed to the console.
     */ key: "args",
            value: function args() {
                return _class_private_field_get(this, _args);
            }
        },
        {
            /**
     * The location of the console message.
     */ key: "location",
            value: function location() {
                var _class_private_field_get_;
                return (_class_private_field_get_ = _class_private_field_get(this, _stackTraceLocations)[0]) !== null && _class_private_field_get_ !== void 0 ? _class_private_field_get_ : {};
            }
        },
        {
            /**
     * The array of locations on the stack of the console message.
     */ key: "stackTrace",
            value: function stackTrace() {
                return _class_private_field_get(this, _stackTraceLocations);
            }
        }
    ]);
    return ConsoleMessage;
} //# sourceMappingURL=ConsoleMessage.js.map
();


}),

}]);