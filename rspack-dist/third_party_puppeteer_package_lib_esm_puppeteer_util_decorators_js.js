"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_util_decorators_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/util/Mutex.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Mutex: function() { return Mutex; }
});
/* harmony import */var _Deferred_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Deferred.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/Deferred.js");
/* harmony import */var _disposable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./disposable.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/disposable.js");
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
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
var _disposeSymbol;
var _mutex, _onRelease;


var _locked = /*#__PURE__*/ new WeakMap(), _acquirers = /*#__PURE__*/ new WeakMap();
/**
 * @internal
 */ var Mutex = /*#__PURE__*/ function() {
    "use strict";
    function Mutex() {
        _class_call_check(this, Mutex);
        _class_private_field_init(this, _locked, {
            writable: true,
            value: false
        });
        _class_private_field_init(this, _acquirers, {
            writable: true,
            value: []
        });
    }
    _create_class(Mutex, [
        {
            key: "acquire",
            value: // This is FIFO.
            function acquire(onRelease) {
                var _this = this;
                return _async_to_generator(function() {
                    var deferred;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!_class_private_field_get(_this, _locked)) {
                                    _class_private_field_set(_this, _locked, true);
                                    return [
                                        2,
                                        new Mutex.Guard(_this)
                                    ];
                                }
                                deferred = _Deferred_js__WEBPACK_IMPORTED_MODULE_0__.Deferred.create();
                                _class_private_field_get(_this, _acquirers).push(deferred.resolve.bind(deferred));
                                return [
                                    4,
                                    deferred.valueOrThrow()
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2,
                                    new Mutex.Guard(_this, onRelease)
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "release",
            value: function release() {
                var resolve = _class_private_field_get(this, _acquirers).shift();
                if (!resolve) {
                    _class_private_field_set(this, _locked, false);
                    return;
                }
                resolve();
            }
        }
    ]);
    return Mutex;
} //# sourceMappingURL=Mutex.js.map
();
_define_property(Mutex, "Guard", (_mutex = /*#__PURE__*/ new WeakMap(), _onRelease = /*#__PURE__*/ new WeakMap(), _disposeSymbol = _disposable_js__WEBPACK_IMPORTED_MODULE_1__.disposeSymbol, /*#__PURE__*/ function() {
    "use strict";
    function Guard(mutex, onRelease) {
        _class_call_check(this, Guard);
        _class_private_field_init(this, _mutex, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _onRelease, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _mutex, mutex);
        _class_private_field_set(this, _onRelease, onRelease);
    }
    _create_class(Guard, [
        {
            key: _disposeSymbol,
            value: function value() {
                var _this, _this1, _ref;
                (_this = _class_private_field_get(_ref = _this1 = this, _onRelease)) === null || _this === void 0 ? void 0 : _this.call(_this1);
                return _class_private_field_get(this, _mutex).release();
            }
        }
    ]);
    return Guard;
}()));


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/util/decorators.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  bubble: function() { return bubble; },
  guarded: function() { return guarded; },
  inertIfDisposed: function() { return inertIfDisposed; },
  invokeAtMostOnceForArguments: function() { return invokeAtMostOnceForArguments; },
  moveable: function() { return moveable; },
  throwIfDisposed: function() { return throwIfDisposed; }
});
/* harmony import */var _disposable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./disposable.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/disposable.js");
/* harmony import */var _Mutex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Mutex.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/Mutex.js");
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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


var instances = new WeakSet();
function moveable(Class, _) {
    var hasDispose = false;
    if (Class.prototype[_disposable_js__WEBPACK_IMPORTED_MODULE_0__.disposeSymbol]) {
        var dispose = Class.prototype[_disposable_js__WEBPACK_IMPORTED_MODULE_0__.disposeSymbol];
        Class.prototype[_disposable_js__WEBPACK_IMPORTED_MODULE_0__.disposeSymbol] = function() {
            if (instances.has(this)) {
                instances.delete(this);
                return;
            }
            return dispose.call(this);
        };
        hasDispose = true;
    }
    if (Class.prototype[_disposable_js__WEBPACK_IMPORTED_MODULE_0__.asyncDisposeSymbol]) {
        var asyncDispose = Class.prototype[_disposable_js__WEBPACK_IMPORTED_MODULE_0__.asyncDisposeSymbol];
        Class.prototype[_disposable_js__WEBPACK_IMPORTED_MODULE_0__.asyncDisposeSymbol] = function() {
            if (instances.has(this)) {
                instances.delete(this);
                return;
            }
            return asyncDispose.call(this);
        };
        hasDispose = true;
    }
    if (hasDispose) {
        Class.prototype.move = function() {
            instances.add(this);
            return this;
        };
    }
    return Class;
}
function throwIfDisposed() {
    var message = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function(value) {
        return "Attempted to use disposed ".concat(value.constructor.name, ".");
    };
    return function(target, _) {
        return function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            var _target;
            if (this.disposed) {
                throw new Error(message(this));
            }
            return (_target = target).call.apply(_target, [
                this
            ].concat(_to_consumable_array(args)));
        };
    };
}
function inertIfDisposed(target, _) {
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        var _target;
        if (this.disposed) {
            return;
        }
        return (_target = target).call.apply(_target, [
            this
        ].concat(_to_consumable_array(args)));
    };
}
/**
 * The decorator only invokes the target if the target has not been invoked with
 * the same arguments before. The decorated method throws an error if it's
 * invoked with a different number of elements: if you decorate a method, it
 * should have the same number of arguments
 *
 * @internal
 */ function invokeAtMostOnceForArguments(target, _) {
    var cache = new WeakMap();
    var cacheDepth = -1;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        var _target;
        if (cacheDepth === -1) {
            cacheDepth = args.length;
        }
        if (cacheDepth !== args.length) {
            throw new Error('Memoized method was called with the wrong number of arguments');
        }
        var freshArguments = false;
        var cacheIterator = cache;
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = args[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var arg = _step.value;
                if (cacheIterator.has(arg)) {
                    cacheIterator = cacheIterator.get(arg);
                } else {
                    freshArguments = true;
                    cacheIterator.set(arg, new WeakMap());
                    cacheIterator = cacheIterator.get(arg);
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
        if (!freshArguments) {
            return;
        }
        return (_target = target).call.apply(_target, [
            this
        ].concat(_to_consumable_array(args)));
    };
}
function guarded() {
    var getKey = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
        return this;
    };
    return function(target, _) {
        var mutexes = new WeakMap();
        return /*#__PURE__*/ _async_to_generator(function() {
            var _len, args, _key, env_1, _target, key, mutex, _, _tmp, e_1, result_1;
            var _arguments = arguments;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        for(_len = _arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                            args[_key] = _arguments[_key];
                        }
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
                            8
                        ]);
                        key = getKey.call(this);
                        mutex = mutexes.get(key);
                        if (!mutex) {
                            mutex = new _Mutex_js__WEBPACK_IMPORTED_MODULE_1__.Mutex();
                            mutexes.set(key, mutex);
                        }
                        _tmp = [
                            env_1
                        ];
                        return [
                            4,
                            mutex.acquire()
                        ];
                    case 2:
                        _ = __addDisposableResource.apply(void 0, _tmp.concat([
                            _state.sent(),
                            true
                        ]));
                        return [
                            4,
                            (_target = target).call.apply(_target, [
                                this
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
                            8
                        ];
                    case 5:
                        result_1 = __disposeResources(env_1);
                        if (!result_1) return [
                            3,
                            7
                        ];
                        return [
                            4,
                            result_1
                        ];
                    case 6:
                        _state.sent();
                        _state.label = 7;
                    case 7:
                        return [
                            7
                        ];
                    case 8:
                        return [
                            2
                        ];
                }
            });
        });
    };
}
var bubbleHandlers = new WeakMap();
var bubbleInitializer = function bubbleInitializer(events) {
    var _this = this;
    var _bubbleHandlers_get;
    var handlers = (_bubbleHandlers_get = bubbleHandlers.get(this)) !== null && _bubbleHandlers_get !== void 0 ? _bubbleHandlers_get : new Map();
    if (handlers.has(events)) {
        return;
    }
    var handler = events !== undefined ? function(type, event) {
        if (events.includes(type)) {
            _this.emit(type, event);
        }
    } : function(type, event) {
        _this.emit(type, event);
    };
    handlers.set(events, handler);
    bubbleHandlers.set(this, handlers);
};
/**
 * Event emitter fields marked with `bubble` will have their events bubble up
 * the field owner.
 */ // The type is too complicated to type.
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function bubble(events) {
    return function(param, context) {
        var set = param.set, get = param.get;
        context.addInitializer(function() {
            return bubbleInitializer.apply(this, [
                events
            ]);
        });
        return {
            set: function set1(emitter) {
                var handler = bubbleHandlers.get(this).get(events);
                // In case we are re-setting.
                var oldEmitter = get.call(this);
                if (oldEmitter !== undefined) {
                    oldEmitter.off('*', handler);
                }
                if (emitter === undefined) {
                    return;
                }
                emitter.on('*', handler);
                set.call(this, emitter);
            },
            init: function init(emitter) {
                if (emitter === undefined) {
                    return emitter;
                }
                bubbleInitializer.apply(this, [
                    events
                ]);
                var handler = bubbleHandlers.get(this).get(events);
                emitter.on('*', handler);
                return emitter;
            }
        };
    };
} //# sourceMappingURL=decorators.js.map


}),

}]);