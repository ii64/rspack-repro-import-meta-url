"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_common_WaitTask_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/common/WaitTask.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  TaskManager: function() { return TaskManager; },
  WaitTask: function() { return WaitTask; }
});
/* harmony import */var _util_Deferred_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/Deferred.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/Deferred.js");
/* harmony import */var _util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/ErrorLike.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/ErrorLike.js");
/* harmony import */var _util_Function_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/Function.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/Function.js");
/* harmony import */var _Errors_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Errors.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/Errors.js");
/* harmony import */var _LazyArg_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LazyArg.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/LazyArg.js");
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





var _world = /*#__PURE__*/ new WeakMap(), _polling = /*#__PURE__*/ new WeakMap(), _root = /*#__PURE__*/ new WeakMap(), _fn = /*#__PURE__*/ new WeakMap(), _args = /*#__PURE__*/ new WeakMap(), _timeout = /*#__PURE__*/ new WeakMap(), _timeoutError = /*#__PURE__*/ new WeakMap(), _result = /*#__PURE__*/ new WeakMap(), _poller = /*#__PURE__*/ new WeakMap(), _signal = /*#__PURE__*/ new WeakMap(), _reruns = /*#__PURE__*/ new WeakMap();
/**
 * @internal
 */ var WaitTask = /*#__PURE__*/ function() {
    "use strict";
    function WaitTask(world, options, fn) {
        var _this = this;
        for(var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++){
            args[_key - 3] = arguments[_key];
        }
        _class_call_check(this, WaitTask);
        var _$_class_private_field_get;
        _class_private_field_init(this, _world, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _polling, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _root, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _fn, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _args, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _timeout, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _timeoutError, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _result, {
            writable: true,
            value: _util_Deferred_js__WEBPACK_IMPORTED_MODULE_0__.Deferred.create()
        });
        _class_private_field_init(this, _poller, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _signal, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _reruns, {
            writable: true,
            value: []
        });
        _class_private_field_set(this, _world, world);
        _class_private_field_set(this, _polling, options.polling);
        _class_private_field_set(this, _root, options.root);
        _class_private_field_set(this, _signal, options.signal);
        (_$_class_private_field_get = _class_private_field_get(this, _signal)) === null || _$_class_private_field_get === void 0 ? void 0 : _$_class_private_field_get.addEventListener('abort', function() {
            var _$_class_private_field_get;
            void _this.terminate((_$_class_private_field_get = _class_private_field_get(_this, _signal)) === null || _$_class_private_field_get === void 0 ? void 0 : _$_class_private_field_get.reason);
        }, {
            once: true
        });
        switch(typeof fn === "undefined" ? "undefined" : _type_of(fn)){
            case 'string':
                _class_private_field_set(this, _fn, "() => {return (".concat(fn, ");}"));
                break;
            default:
                _class_private_field_set(this, _fn, (0,_util_Function_js__WEBPACK_IMPORTED_MODULE_2__.stringifyFunction)(fn));
                break;
        }
        _class_private_field_set(this, _args, args);
        _class_private_field_get(this, _world).taskManager.add(this);
        if (options.timeout) {
            _class_private_field_set(this, _timeoutError, new _Errors_js__WEBPACK_IMPORTED_MODULE_3__.TimeoutError("Waiting failed: ".concat(options.timeout, "ms exceeded")));
            _class_private_field_set(this, _timeout, setTimeout(function() {
                void _this.terminate(_class_private_field_get(_this, _timeoutError));
            }, options.timeout));
        }
        void this.rerun();
    }
    _create_class(WaitTask, [
        {
            key: "result",
            get: function get() {
                return _class_private_field_get(this, _result).valueOrThrow();
            }
        },
        {
            key: "rerun",
            value: function rerun() {
                var _this = this;
                return _async_to_generator(function() {
                    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, prev, controller, _, _$_class_private_field_get, _tmp, _$_class_private_field_get1, _tmp1, _$_class_private_field_get2, _tmp2, result, error, badError;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = _class_private_field_get(_this, _reruns)[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        prev = _step.value;
                                        prev.abort();
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
                                _class_private_field_get(_this, _reruns).length = 0;
                                controller = new AbortController();
                                _class_private_field_get(_this, _reruns).push(controller);
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    12,
                                    ,
                                    15
                                ]);
                                _ = _class_private_field_get(_this, _polling);
                                switch(_){
                                    case 'raf':
                                        return [
                                            3,
                                            2
                                        ];
                                    case 'mutation':
                                        return [
                                            3,
                                            4
                                        ];
                                }
                                return [
                                    3,
                                    6
                                ];
                            case 2:
                                _tmp = [
                                    _this,
                                    _poller
                                ];
                                return [
                                    4,
                                    (_$_class_private_field_get = _class_private_field_get(_this, _world)).evaluateHandle.apply(_$_class_private_field_get, [
                                        function(param, fn) {
                                            var RAFPoller = param.RAFPoller, createFunction = param.createFunction;
                                            for(var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                                                args[_key - 2] = arguments[_key];
                                            }
                                            var fun = createFunction(fn);
                                            return new RAFPoller(function() {
                                                return fun.apply(void 0, _to_consumable_array(args));
                                            });
                                        },
                                        _LazyArg_js__WEBPACK_IMPORTED_MODULE_4__.LazyArg.create(function(context) {
                                            return context.puppeteerUtil;
                                        }),
                                        _class_private_field_get(_this, _fn)
                                    ].concat(_to_consumable_array(_class_private_field_get(_this, _args))))
                                ];
                            case 3:
                                _class_private_field_set.apply(void 0, _tmp.concat([
                                    _state.sent()
                                ]));
                                return [
                                    3,
                                    8
                                ];
                            case 4:
                                _tmp1 = [
                                    _this,
                                    _poller
                                ];
                                return [
                                    4,
                                    (_$_class_private_field_get1 = _class_private_field_get(_this, _world)).evaluateHandle.apply(_$_class_private_field_get1, [
                                        function(param, root, fn) {
                                            var MutationPoller = param.MutationPoller, createFunction = param.createFunction;
                                            for(var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++){
                                                args[_key - 3] = arguments[_key];
                                            }
                                            var fun = createFunction(fn);
                                            return new MutationPoller(function() {
                                                return fun.apply(void 0, _to_consumable_array(args));
                                            }, root || document);
                                        },
                                        _LazyArg_js__WEBPACK_IMPORTED_MODULE_4__.LazyArg.create(function(context) {
                                            return context.puppeteerUtil;
                                        }),
                                        _class_private_field_get(_this, _root),
                                        _class_private_field_get(_this, _fn)
                                    ].concat(_to_consumable_array(_class_private_field_get(_this, _args))))
                                ];
                            case 5:
                                _class_private_field_set.apply(void 0, _tmp1.concat([
                                    _state.sent()
                                ]));
                                return [
                                    3,
                                    8
                                ];
                            case 6:
                                _tmp2 = [
                                    _this,
                                    _poller
                                ];
                                return [
                                    4,
                                    (_$_class_private_field_get2 = _class_private_field_get(_this, _world)).evaluateHandle.apply(_$_class_private_field_get2, [
                                        function(param, ms, fn) {
                                            var IntervalPoller = param.IntervalPoller, createFunction = param.createFunction;
                                            for(var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++){
                                                args[_key - 3] = arguments[_key];
                                            }
                                            var fun = createFunction(fn);
                                            return new IntervalPoller(function() {
                                                return fun.apply(void 0, _to_consumable_array(args));
                                            }, ms);
                                        },
                                        _LazyArg_js__WEBPACK_IMPORTED_MODULE_4__.LazyArg.create(function(context) {
                                            return context.puppeteerUtil;
                                        }),
                                        _class_private_field_get(_this, _polling),
                                        _class_private_field_get(_this, _fn)
                                    ].concat(_to_consumable_array(_class_private_field_get(_this, _args))))
                                ];
                            case 7:
                                _class_private_field_set.apply(void 0, _tmp2.concat([
                                    _state.sent()
                                ]));
                                return [
                                    3,
                                    8
                                ];
                            case 8:
                                return [
                                    4,
                                    _class_private_field_get(_this, _poller).evaluate(function(poller) {
                                        void poller.start();
                                    })
                                ];
                            case 9:
                                _state.sent();
                                return [
                                    4,
                                    _class_private_field_get(_this, _poller).evaluateHandle(function(poller) {
                                        return poller.result();
                                    })
                                ];
                            case 10:
                                result = _state.sent();
                                _class_private_field_get(_this, _result).resolve(result);
                                return [
                                    4,
                                    _this.terminate()
                                ];
                            case 11:
                                _state.sent();
                                return [
                                    3,
                                    15
                                ];
                            case 12:
                                error = _state.sent();
                                if (controller.signal.aborted) {
                                    return [
                                        2
                                    ];
                                }
                                badError = _this.getBadError(error);
                                if (!badError) return [
                                    3,
                                    14
                                ];
                                return [
                                    4,
                                    _this.terminate(badError)
                                ];
                            case 13:
                                _state.sent();
                                _state.label = 14;
                            case 14:
                                return [
                                    3,
                                    15
                                ];
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
            key: "terminate",
            value: function terminate(error) {
                var _this = this;
                return _async_to_generator(function() {
                    var e;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _class_private_field_get(_this, _world).taskManager.delete(_this);
                                clearTimeout(_class_private_field_get(_this, _timeout));
                                if (error && !_class_private_field_get(_this, _result).finished()) {
                                    _class_private_field_get(_this, _result).reject(error);
                                }
                                if (!_class_private_field_get(_this, _poller)) return [
                                    3,
                                    6
                                ];
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    5,
                                    ,
                                    6
                                ]);
                                return [
                                    4,
                                    _class_private_field_get(_this, _poller).evaluateHandle(function() {
                                        var _ref = _async_to_generator(function(poller) {
                                            return _ts_generator(this, function(_state) {
                                                switch(_state.label){
                                                    case 0:
                                                        return [
                                                            4,
                                                            poller.stop()
                                                        ];
                                                    case 1:
                                                        _state.sent();
                                                        return [
                                                            2
                                                        ];
                                                }
                                            });
                                        });
                                        return function(poller) {
                                            return _ref.apply(this, arguments);
                                        };
                                    }())
                                ];
                            case 2:
                                _state.sent();
                                if (!_class_private_field_get(_this, _poller)) return [
                                    3,
                                    4
                                ];
                                return [
                                    4,
                                    _class_private_field_get(_this, _poller).dispose()
                                ];
                            case 3:
                                _state.sent();
                                _class_private_field_set(_this, _poller, undefined);
                                _state.label = 4;
                            case 4:
                                return [
                                    3,
                                    6
                                ];
                            case 5:
                                e = _state.sent();
                                return [
                                    3,
                                    6
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
     * Not all errors lead to termination. They usually imply we need to rerun the task.
     */ key: "getBadError",
            value: function getBadError(error) {
                if ((0,_util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_1__.isErrorLike)(error)) {
                    // When frame is detached the task should have been terminated by the IsolatedWorld.
                    // This can fail if we were adding this task while the frame was detached,
                    // so we terminate here instead.
                    if (error.message.includes('Execution context is not available in detached frame')) {
                        return new Error('Waiting failed: Frame detached');
                    }
                    // When the page is navigated, the promise is rejected.
                    // We will try again in the new execution context.
                    if (error.message.includes('Execution context was destroyed')) {
                        return;
                    }
                    // We could have tried to evaluate in a context which was already
                    // destroyed.
                    if (error.message.includes('Cannot find context with specified id')) {
                        return;
                    }
                    // Errors coming from WebDriver BiDi. TODO: Adjust messages after
                    // https://github.com/w3c/webdriver-bidi/issues/540 is resolved.
                    if (error.message.includes("AbortError: Actor 'MessageHandlerFrame' destroyed")) {
                        return;
                    }
                    return error;
                }
                return new Error('WaitTask failed with an error', {
                    cause: error
                });
            }
        }
    ]);
    return WaitTask;
}();
var _tasks = /*#__PURE__*/ new WeakMap();
/**
 * @internal
 */ var TaskManager = /*#__PURE__*/ function() {
    "use strict";
    function TaskManager() {
        _class_call_check(this, TaskManager);
        _class_private_field_init(this, _tasks, {
            writable: true,
            value: new Set()
        });
    }
    _create_class(TaskManager, [
        {
            key: "add",
            value: function add(task) {
                _class_private_field_get(this, _tasks).add(task);
            }
        },
        {
            key: "delete",
            value: function _delete(task) {
                _class_private_field_get(this, _tasks).delete(task);
            }
        },
        {
            key: "terminateAll",
            value: function terminateAll(error) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _class_private_field_get(this, _tasks)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var task = _step.value;
                        void task.terminate(error);
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
                _class_private_field_get(this, _tasks).clear();
            }
        },
        {
            key: "rerunAll",
            value: function rerunAll() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    Promise.all(_to_consumable_array(_class_private_field_get(_this, _tasks)).map(function(task) {
                                        return task.rerun();
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
        }
    ]);
    return TaskManager;
} //# sourceMappingURL=WaitTask.js.map
();


}),

}]);