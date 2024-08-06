"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_cdp_IsolatedWorld_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/cdp/IsolatedWorld.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  IsolatedWorld: function() { return IsolatedWorld; }
});
/* harmony import */var _third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../third_party/rxjs/rxjs.js */ "./third_party/puppeteer/package/lib/esm/third_party/rxjs/rxjs.js");
/* harmony import */var _api_Realm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/Realm.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/Realm.js");
/* harmony import */var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/EventEmitter.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/EventEmitter.js");
/* harmony import */var _common_util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */var _util_disposable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/disposable.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/disposable.js");
/* harmony import */var _ElementHandle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ElementHandle.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/ElementHandle.js");
/* harmony import */var _JSHandle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./JSHandle.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/JSHandle.js");
/**
 * @license
 * Copyright 2019 Google Inc.
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







var _context = /*#__PURE__*/ new WeakMap(), _emitter = /*#__PURE__*/ new WeakMap(), _frameOrWorker = /*#__PURE__*/ new WeakMap(), _onContextDisposed = /*#__PURE__*/ new WeakSet(), _onContextConsoleApiCalled = /*#__PURE__*/ new WeakSet(), _onContextBindingCalled = /*#__PURE__*/ new WeakSet(), _executionContext = /*#__PURE__*/ new WeakSet(), _waitForExecutionContext = /*#__PURE__*/ new WeakSet();
var _disposeSymbol = _util_disposable_js__WEBPACK_IMPORTED_MODULE_4__.disposeSymbol;
/**
 * @internal
 */ var IsolatedWorld = /*#__PURE__*/ function(Realm) {
    "use strict";
    _inherits(IsolatedWorld, Realm);
    var _super = _create_super(IsolatedWorld);
    function IsolatedWorld(frameOrWorker, timeoutSettings) {
        _class_call_check(this, IsolatedWorld);
        var _this;
        _this = _super.call(this, timeoutSettings);
        _class_private_method_init(_assert_this_initialized(_this), _onContextDisposed);
        _class_private_method_init(_assert_this_initialized(_this), _onContextConsoleApiCalled);
        _class_private_method_init(_assert_this_initialized(_this), _onContextBindingCalled);
        _class_private_method_init(_assert_this_initialized(_this), _executionContext);
        /**
     * Waits for the next context to be set on the isolated world.
     */ _class_private_method_init(_assert_this_initialized(_this), _waitForExecutionContext);
        _class_private_field_init(_assert_this_initialized(_this), _context, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _emitter, {
            writable: true,
            value: new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_2__.EventEmitter()
        });
        _class_private_field_init(_assert_this_initialized(_this), _frameOrWorker, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(_assert_this_initialized(_this), _frameOrWorker, frameOrWorker);
        return _this;
    }
    _create_class(IsolatedWorld, [
        {
            key: "environment",
            get: function get() {
                return _class_private_field_get(this, _frameOrWorker);
            }
        },
        {
            key: "client",
            get: function get() {
                return _class_private_field_get(this, _frameOrWorker).client;
            }
        },
        {
            key: "emitter",
            get: function get() {
                return _class_private_field_get(this, _emitter);
            }
        },
        {
            key: "setContext",
            value: function setContext(context) {
                var _$_class_private_field_get;
                (_$_class_private_field_get = _class_private_field_get(this, _context)) === null || _$_class_private_field_get === void 0 ? void 0 : _$_class_private_field_get[_util_disposable_js__WEBPACK_IMPORTED_MODULE_4__.disposeSymbol]();
                context.once('disposed', _class_private_method_get(this, _onContextDisposed, onContextDisposed).bind(this));
                context.on('consoleapicalled', _class_private_method_get(this, _onContextConsoleApiCalled, onContextConsoleApiCalled).bind(this));
                context.on('bindingcalled', _class_private_method_get(this, _onContextBindingCalled, onContextBindingCalled).bind(this));
                _class_private_field_set(this, _context, context);
                _class_private_field_get(this, _emitter).emit('context', context);
                void this.taskManager.rerunAll();
            }
        },
        {
            key: "hasContext",
            value: function hasContext() {
                return !!_class_private_field_get(this, _context);
            }
        },
        {
            key: "context",
            get: function get() {
                return _class_private_field_get(this, _context);
            }
        },
        {
            key: "evaluateHandle",
            value: function evaluateHandle(pageFunction) {
                for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    args[_key - 1] = arguments[_key];
                }
                var _this = this;
                return _async_to_generator(function() {
                    var _context, context;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                pageFunction = (0,_common_util_js__WEBPACK_IMPORTED_MODULE_3__.withSourcePuppeteerURLIfNone)(_this.evaluateHandle.name, pageFunction);
                                // This code needs to schedule evaluateHandle call synchroniously (at
                                // least when the context is there) so we cannot unconditionally
                                // await.
                                context = _class_private_method_get(_this, _executionContext, executionContext).call(_this);
                                if (!!context) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    _class_private_method_get(_this, _waitForExecutionContext, waitForExecutionContext).call(_this)
                                ];
                            case 1:
                                context = _state.sent();
                                _state.label = 2;
                            case 2:
                                return [
                                    4,
                                    (_context = context).evaluateHandle.apply(_context, [
                                        pageFunction
                                    ].concat(_to_consumable_array(args)))
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
            key: "evaluate",
            value: function evaluate(pageFunction) {
                for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    args[_key - 1] = arguments[_key];
                }
                var _this = this;
                return _async_to_generator(function() {
                    var _context, context;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                pageFunction = (0,_common_util_js__WEBPACK_IMPORTED_MODULE_3__.withSourcePuppeteerURLIfNone)(_this.evaluate.name, pageFunction);
                                // This code needs to schedule evaluate call synchroniously (at
                                // least when the context is there) so we cannot unconditionally
                                // await.
                                context = _class_private_method_get(_this, _executionContext, executionContext).call(_this);
                                if (!!context) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    _class_private_method_get(_this, _waitForExecutionContext, waitForExecutionContext).call(_this)
                                ];
                            case 1:
                                context = _state.sent();
                                _state.label = 2;
                            case 2:
                                return [
                                    4,
                                    (_context = context).evaluate.apply(_context, [
                                        pageFunction
                                    ].concat(_to_consumable_array(args)))
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
            key: "adoptBackendNode",
            value: function adoptBackendNode(backendNodeId) {
                var _this = this;
                return _async_to_generator(function() {
                    var context, object;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                // This code needs to schedule resolveNode call synchroniously (at
                                // least when the context is there) so we cannot unconditionally
                                // await.
                                context = _class_private_method_get(_this, _executionContext, executionContext).call(_this);
                                if (!!context) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    _class_private_method_get(_this, _waitForExecutionContext, waitForExecutionContext).call(_this)
                                ];
                            case 1:
                                context = _state.sent();
                                _state.label = 2;
                            case 2:
                                return [
                                    4,
                                    _this.client.send('DOM.resolveNode', {
                                        backendNodeId: backendNodeId,
                                        executionContextId: context.id
                                    })
                                ];
                            case 3:
                                object = _state.sent().object;
                                return [
                                    2,
                                    _this.createCdpHandle(object)
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "adoptHandle",
            value: function adoptHandle(handle) {
                var _this = this;
                return _async_to_generator(function() {
                    var nodeInfo;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!(handle.realm === _this)) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    handle.evaluateHandle(function(value) {
                                        return value;
                                    })
                                ];
                            case 1:
                                // If the context has already adopted this handle, clone it so downstream
                                // disposal doesn't become an issue.
                                return [
                                    2,
                                    _state.sent()
                                ];
                            case 2:
                                return [
                                    4,
                                    _this.client.send('DOM.describeNode', {
                                        objectId: handle.id
                                    })
                                ];
                            case 3:
                                nodeInfo = _state.sent();
                                return [
                                    4,
                                    _this.adoptBackendNode(nodeInfo.node.backendNodeId)
                                ];
                            case 4:
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
            key: "transferHandle",
            value: function transferHandle(handle) {
                var _this = this;
                return _async_to_generator(function() {
                    var info, newHandle;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (handle.realm === _this) {
                                    return [
                                        2,
                                        handle
                                    ];
                                }
                                // Implies it's a primitive value, probably.
                                if (handle.remoteObject().objectId === undefined) {
                                    return [
                                        2,
                                        handle
                                    ];
                                }
                                return [
                                    4,
                                    _this.client.send('DOM.describeNode', {
                                        objectId: handle.remoteObject().objectId
                                    })
                                ];
                            case 1:
                                info = _state.sent();
                                return [
                                    4,
                                    _this.adoptBackendNode(info.node.backendNodeId)
                                ];
                            case 2:
                                newHandle = _state.sent();
                                return [
                                    4,
                                    handle.dispose()
                                ];
                            case 3:
                                _state.sent();
                                return [
                                    2,
                                    newHandle
                                ];
                        }
                    });
                })();
            }
        },
        {
            /**
     * @internal
     */ key: "createCdpHandle",
            value: function createCdpHandle(remoteObject) {
                if (remoteObject.subtype === 'node') {
                    return new _ElementHandle_js__WEBPACK_IMPORTED_MODULE_5__.CdpElementHandle(this, remoteObject);
                }
                return new _JSHandle_js__WEBPACK_IMPORTED_MODULE_6__.CdpJSHandle(this, remoteObject);
            }
        },
        {
            key: _disposeSymbol,
            value: function value() {
                var _$_class_private_field_get;
                (_$_class_private_field_get = _class_private_field_get(this, _context)) === null || _$_class_private_field_get === void 0 ? void 0 : _$_class_private_field_get[_util_disposable_js__WEBPACK_IMPORTED_MODULE_4__.disposeSymbol]();
                _class_private_field_get(this, _emitter).emit('disposed', undefined);
                _get(_get_prototype_of(IsolatedWorld.prototype), _util_disposable_js__WEBPACK_IMPORTED_MODULE_4__.disposeSymbol, this).call(this);
                _class_private_field_get(this, _emitter).removeAllListeners();
            }
        }
    ]);
    return IsolatedWorld;
} //# sourceMappingURL=IsolatedWorld.js.map
(_api_Realm_js__WEBPACK_IMPORTED_MODULE_1__.Realm);
function onContextDisposed() {
    _class_private_field_set(this, _context, undefined);
    if ('clearDocumentHandle' in _class_private_field_get(this, _frameOrWorker)) {
        _class_private_field_get(this, _frameOrWorker).clearDocumentHandle();
    }
}
function onContextConsoleApiCalled(event) {
    _class_private_field_get(this, _emitter).emit('consoleapicalled', event);
}
function onContextBindingCalled(event) {
    _class_private_field_get(this, _emitter).emit('bindingcalled', event);
}
function executionContext() {
    if (this.disposed) {
        throw new Error('Execution context is not available in detached frame or worker "'.concat(this.environment.url(), '" (are you trying to evaluate?)'));
    }
    return _class_private_field_get(this, _context);
}
function waitForExecutionContext() {
    return _waitForExecutionContext1.apply(this, arguments);
}
function _waitForExecutionContext1() {
    _waitForExecutionContext1 = _async_to_generator(function() {
        var result;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.firstValueFrom)((0,_common_util_js__WEBPACK_IMPORTED_MODULE_3__.fromEmitterEvent)(_class_private_field_get(this, _emitter), 'context').pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.raceWith)((0,_common_util_js__WEBPACK_IMPORTED_MODULE_3__.fromEmitterEvent)(_class_private_field_get(this, _emitter), 'disposed').pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.map)(function() {
                            // The message has to match the CDP message expected by the WaitTask class.
                            throw new Error('Execution context was destroyed');
                        })), (0,_common_util_js__WEBPACK_IMPORTED_MODULE_3__.timeout)(this.timeoutSettings.timeout()))))
                    ];
                case 1:
                    result = _state.sent();
                    return [
                        2,
                        result
                    ];
            }
        });
    });
    return _waitForExecutionContext1.apply(this, arguments);
}


}),

}]);