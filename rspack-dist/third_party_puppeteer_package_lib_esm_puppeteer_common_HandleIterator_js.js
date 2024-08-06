"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_common_HandleIterator_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/common/HandleIterator.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  transposeIterableHandle: function() { return transposeIterableHandle; }
});
/* harmony import */var _util_disposable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/disposable.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/disposable.js");
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ function _async_generator(gen) {
    var front, back;
    function send(key, arg) {
        return new Promise(function(resolve, reject) {
            var request = {
                key: key,
                arg: arg,
                resolve: resolve,
                reject: reject,
                next: null
            };
            if (back) {
                back = back.next = request;
            } else {
                front = back = request;
                resume(key, arg);
            }
        });
    }
    function resume(key, arg) {
        try {
            var result = gen[key](arg);
            var value = result.value;
            var wrappedAwait = value instanceof _await_value;
            Promise.resolve(wrappedAwait ? value.wrapped : value).then(function(arg) {
                if (wrappedAwait) {
                    resume("next", arg);
                    return;
                }
                settle(result.done ? "return" : "normal", arg);
            }, function(err) {
                resume("throw", err);
            });
        } catch (err) {
            settle("throw", err);
        }
    }
    function settle(type, value) {
        switch(type){
            case "return":
                front.resolve({
                    value: value,
                    done: true
                });
                break;
            case "throw":
                front.reject(value);
                break;
            default:
                front.resolve({
                    value: value,
                    done: false
                });
                break;
        }
        front = front.next;
        if (front) {
            resume(front.key, front.arg);
        } else {
            back = null;
        }
    }
    this._invoke = send;
    if (typeof gen.return !== "function") {
        this.return = undefined;
    }
}
if (typeof Symbol === "function" && Symbol.asyncIterator) {
    _async_generator.prototype[Symbol.asyncIterator] = function() {
        return this;
    };
}
_async_generator.prototype.next = function(arg) {
    return this._invoke("next", arg);
};
_async_generator.prototype.throw = function(arg) {
    return this._invoke("throw", arg);
};
_async_generator.prototype.return = function(arg) {
    return this._invoke("return", arg);
};
function _async_generator_delegate(inner, awaitWrap) {
    var iter = {}, waiting = false;
    function pump(key, value) {
        waiting = true;
        value = new Promise(function(resolve) {
            resolve(inner[key](value));
        });
        return {
            done: false,
            value: awaitWrap(value)
        };
    }
    if (typeof Symbol === "function" && Symbol.iterator) {
        iter[Symbol.iterator] = function() {
            return this;
        };
    }
    iter.next = function(value) {
        if (waiting) {
            waiting = false;
            return value;
        }
        return pump("next", value);
    };
    if (typeof inner.throw === "function") {
        iter.throw = function(value) {
            if (waiting) {
                waiting = false;
                throw value;
            }
            return pump("throw", value);
        };
    }
    if (typeof inner.return === "function") {
        iter.return = function(value) {
            return pump("return", value);
        };
    }
    return iter;
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
function _await_async_generator(value) {
    return new _await_value(value);
}
function _await_value(value) {
    this.wrapped = value;
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _wrap_async_generator(fn) {
    return function() {
        return new _async_generator(fn.apply(this, arguments));
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

var DEFAULT_BATCH_SIZE = 20;
function fastTransposeIteratorHandle(iterator, size) {
    return _fastTransposeIteratorHandle.apply(this, arguments);
}
function _fastTransposeIteratorHandle() {
    _fastTransposeIteratorHandle = /**
 * This will transpose an iterator JSHandle into a fast, Puppeteer-side iterator
 * of JSHandles.
 *
 * @param size - The number of elements to transpose. This should be something
 * reasonable.
 */ _wrap_async_generator(function(iterator, size) {
        var env_1, array, _tmp, properties, handles, stack, e_1;
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
                        5,
                        6,
                        7
                    ]);
                    _tmp = [
                        env_1
                    ];
                    return [
                        4,
                        _await_async_generator(iterator.evaluateHandle(function() {
                            var _ref = _async_to_generator(function(iterator, size) {
                                var results, result;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            results = [];
                                            _state.label = 1;
                                        case 1:
                                            if (!(results.length < size)) return [
                                                3,
                                                3
                                            ];
                                            return [
                                                4,
                                                iterator.next()
                                            ];
                                        case 2:
                                            result = _state.sent();
                                            if (result.done) {
                                                return [
                                                    3,
                                                    3
                                                ];
                                            }
                                            results.push(result.value);
                                            return [
                                                3,
                                                1
                                            ];
                                        case 3:
                                            return [
                                                2,
                                                results
                                            ];
                                    }
                                });
                            });
                            return function(iterator, size) {
                                return _ref.apply(this, arguments);
                            };
                        }(), size))
                    ];
                case 2:
                    array = __addDisposableResource.apply(void 0, _tmp.concat([
                        _state.sent(),
                        false
                    ]));
                    return [
                        4,
                        _await_async_generator(array.getProperties())
                    ];
                case 3:
                    properties = _state.sent();
                    handles = properties.values();
                    stack = __addDisposableResource(env_1, new _util_disposable_js__WEBPACK_IMPORTED_MODULE_0__.DisposableStack(), false);
                    stack.defer(function() {
                        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(var _iterator = handles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                var handle_1 = _step.value;
                                var env_2 = {
                                    stack: [],
                                    error: void 0,
                                    hasError: false
                                };
                                try {
                                    var handle = __addDisposableResource(env_2, handle_1, false);
                                    handle[_util_disposable_js__WEBPACK_IMPORTED_MODULE_0__.disposeSymbol]();
                                } catch (e_2) {
                                    env_2.error = e_2;
                                    env_2.hasError = true;
                                } finally{
                                    __disposeResources(env_2);
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
                    });
                    return [
                        5,
                        _ts_values(_async_generator_delegate(_async_iterator(handles), _await_async_generator))
                    ];
                case 4:
                    _state.sent();
                    return [
                        2,
                        properties.size === 0
                    ];
                case 5:
                    e_1 = _state.sent();
                    env_1.error = e_1;
                    env_1.hasError = true;
                    return [
                        3,
                        7
                    ];
                case 6:
                    __disposeResources(env_1);
                    return [
                        7
                    ];
                case 7:
                    return [
                        2
                    ];
            }
        });
    });
    return _fastTransposeIteratorHandle.apply(this, arguments);
}
function transposeIteratorHandle(iterator) {
    return _transposeIteratorHandle.apply(this, arguments);
}
function _transposeIteratorHandle() {
    _transposeIteratorHandle = /**
 * This will transpose an iterator JSHandle in batches based on the default size
 * of {@link fastTransposeIteratorHandle}.
 */ _wrap_async_generator(function(iterator) {
        var size;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    size = DEFAULT_BATCH_SIZE;
                    _state.label = 1;
                case 1:
                    return [
                        5,
                        _ts_values(_async_generator_delegate(_async_iterator(fastTransposeIteratorHandle(iterator, size)), _await_async_generator))
                    ];
                case 2:
                    if (!!_state.sent()) return [
                        3,
                        3
                    ];
                    size <<= 1;
                    return [
                        3,
                        1
                    ];
                case 3:
                    return [
                        2
                    ];
            }
        });
    });
    return _transposeIteratorHandle.apply(this, arguments);
}
/**
 * @internal
 */ function transposeIterableHandle(handle) {
    return _transposeIterableHandle.apply(this, arguments);
} //# sourceMappingURL=HandleIterator.js.map
function _transposeIterableHandle() {
    _transposeIterableHandle = _wrap_async_generator(function(handle) {
        var env_3, generatorHandle, _tmp, e_3;
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
                        4,
                        5,
                        6
                    ]);
                    _tmp = [
                        env_3
                    ];
                    return [
                        4,
                        _await_async_generator(handle.evaluateHandle(function(iterable) {
                            return _wrap_async_generator(function() {
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            return [
                                                5,
                                                _ts_values(_async_generator_delegate(_async_iterator(iterable), _await_async_generator))
                                            ];
                                        case 1:
                                            _state.sent();
                                            return [
                                                2
                                            ];
                                    }
                                });
                            })();
                        }))
                    ];
                case 2:
                    generatorHandle = __addDisposableResource.apply(void 0, _tmp.concat([
                        _state.sent(),
                        false
                    ]));
                    return [
                        5,
                        _ts_values(_async_generator_delegate(_async_iterator(transposeIteratorHandle(generatorHandle)), _await_async_generator))
                    ];
                case 3:
                    _state.sent();
                    return [
                        3,
                        6
                    ];
                case 4:
                    e_3 = _state.sent();
                    env_3.error = e_3;
                    env_3.hasError = true;
                    return [
                        3,
                        6
                    ];
                case 5:
                    __disposeResources(env_3);
                    return [
                        7
                    ];
                case 6:
                    return [
                        2
                    ];
            }
        });
    });
    return _transposeIterableHandle.apply(this, arguments);
}


}),

}]);