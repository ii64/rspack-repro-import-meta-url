"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_common_QueryHandler_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/api/ElementHandleSymbol.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  _isElementHandle: function() { return _isElementHandle; }
});
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * @internal
 */ var _isElementHandle = Symbol('_isElementHandle'); //# sourceMappingURL=ElementHandleSymbol.js.map


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/common/LazyArg.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  LazyArg: function() { return LazyArg; }
});
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * @internal
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
var _get = /*#__PURE__*/ new WeakMap();
var LazyArg = /*#__PURE__*/ function() {
    "use strict";
    function LazyArg(get) {
        _class_call_check(this, LazyArg);
        _class_private_field_init(this, _get, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _get, get);
    }
    _create_class(LazyArg, [
        {
            key: "get",
            value: function get(context) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _class_private_field_get(_this, _get).call(_this, context)
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
    return LazyArg;
} //# sourceMappingURL=LazyArg.js.map
();
_define_property(LazyArg, "create", function(get) {
    // We don't want to introduce LazyArg to the type system, otherwise we would
    // have to make it public.
    return new LazyArg(get);
});


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/common/QueryHandler.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  QueryHandler: function() { return QueryHandler; }
});
/* harmony import */var _api_ElementHandleSymbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/ElementHandleSymbol.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/ElementHandleSymbol.js");
/* harmony import */var _util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/ErrorLike.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/ErrorLike.js");
/* harmony import */var _util_Function_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/Function.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/Function.js");
/* harmony import */var _HandleIterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HandleIterator.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/HandleIterator.js");
/* harmony import */var _LazyArg_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LazyArg.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/LazyArg.js");
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
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
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





/**
 * @internal
 */ var QueryHandler = /*#__PURE__*/ function() {
    "use strict";
    function QueryHandler() {
        _class_call_check(this, QueryHandler);
    }
    _create_class(QueryHandler, null, [
        {
            key: "_querySelector",
            get: function get() {
                if (this.querySelector) {
                    return this.querySelector;
                }
                if (!this.querySelectorAll) {
                    throw new Error('Cannot create default `querySelector`.');
                }
                return this.querySelector = (0,_util_Function_js__WEBPACK_IMPORTED_MODULE_2__.interpolateFunction)(function() {
                    var _ref = _async_to_generator(function(node, selector, PuppeteerUtil) {
                        var querySelectorAll, results, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, result, err;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    querySelectorAll = PLACEHOLDER('querySelectorAll');
                                    results = querySelectorAll(node, selector, PuppeteerUtil);
                                    _iteratorAbruptCompletion = false, _didIteratorError = false;
                                    _state.label = 1;
                                case 1:
                                    _state.trys.push([
                                        1,
                                        6,
                                        7,
                                        12
                                    ]);
                                    _iterator = _async_iterator(results);
                                    _state.label = 2;
                                case 2:
                                    return [
                                        4,
                                        _iterator.next()
                                    ];
                                case 3:
                                    if (!(_iteratorAbruptCompletion = !(_step = _state.sent()).done)) return [
                                        3,
                                        5
                                    ];
                                    _value = _step.value;
                                    result = _value;
                                    return [
                                        2,
                                        result
                                    ];
                                case 4:
                                    _iteratorAbruptCompletion = false;
                                    return [
                                        3,
                                        2
                                    ];
                                case 5:
                                    return [
                                        3,
                                        12
                                    ];
                                case 6:
                                    err = _state.sent();
                                    _didIteratorError = true;
                                    _iteratorError = err;
                                    return [
                                        3,
                                        12
                                    ];
                                case 7:
                                    _state.trys.push([
                                        7,
                                        ,
                                        10,
                                        11
                                    ]);
                                    if (!(_iteratorAbruptCompletion && _iterator.return != null)) return [
                                        3,
                                        9
                                    ];
                                    return [
                                        4,
                                        _iterator.return()
                                    ];
                                case 8:
                                    _state.sent();
                                    _state.label = 9;
                                case 9:
                                    return [
                                        3,
                                        11
                                    ];
                                case 10:
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                    return [
                                        7
                                    ];
                                case 11:
                                    return [
                                        7
                                    ];
                                case 12:
                                    return [
                                        2,
                                        null
                                    ];
                            }
                        });
                    });
                    return function(node, selector, PuppeteerUtil) {
                        return _ref.apply(this, arguments);
                    };
                }(), {
                    querySelectorAll: (0,_util_Function_js__WEBPACK_IMPORTED_MODULE_2__.stringifyFunction)(this.querySelectorAll)
                });
            }
        },
        {
            key: "_querySelectorAll",
            get: function get() {
                if (this.querySelectorAll) {
                    return this.querySelectorAll;
                }
                if (!this.querySelector) {
                    throw new Error('Cannot create default `querySelectorAll`.');
                }
                return this.querySelectorAll = (0,_util_Function_js__WEBPACK_IMPORTED_MODULE_2__.interpolateFunction)(function() {
                    var _ref = _wrap_async_generator(function(node, selector, PuppeteerUtil) {
                        var querySelector, result;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    querySelector = PLACEHOLDER('querySelector');
                                    return [
                                        4,
                                        _await_async_generator(querySelector(node, selector, PuppeteerUtil))
                                    ];
                                case 1:
                                    result = _state.sent();
                                    if (!result) return [
                                        3,
                                        3
                                    ];
                                    return [
                                        4,
                                        result
                                    ];
                                case 2:
                                    _state.sent();
                                    _state.label = 3;
                                case 3:
                                    return [
                                        2
                                    ];
                            }
                        });
                    });
                    return function(node, selector, PuppeteerUtil) {
                        return _ref.apply(this, arguments);
                    };
                }(), {
                    querySelector: (0,_util_Function_js__WEBPACK_IMPORTED_MODULE_2__.stringifyFunction)(this.querySelector)
                });
            }
        },
        {
            key: "queryAll",
            value: /**
     * Queries for multiple nodes given a selector and {@link ElementHandle}.
     *
     * Akin to {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll | Document.querySelectorAll()}.
     */ function queryAll(element, selector) {
                var _this = this;
                return _wrap_async_generator(function() {
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
                                    _await_async_generator(element.evaluateHandle(_this._querySelectorAll, selector, _LazyArg_js__WEBPACK_IMPORTED_MODULE_4__.LazyArg.create(function(context) {
                                        return context.puppeteerUtil;
                                    })))
                                ];
                            case 2:
                                handle = __addDisposableResource.apply(void 0, _tmp.concat([
                                    _state.sent(),
                                    false
                                ]));
                                return [
                                    5,
                                    _ts_values(_async_generator_delegate(_async_iterator((0,_HandleIterator_js__WEBPACK_IMPORTED_MODULE_3__.transposeIterableHandle)(handle)), _await_async_generator))
                                ];
                            case 3:
                                _state.sent();
                                return [
                                    3,
                                    6
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
            key: "queryOne",
            value: /**
     * Queries for a single node given a selector and {@link ElementHandle}.
     *
     * Akin to {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector}.
     */ function queryOne(element, selector) {
                var _this = this;
                return _async_to_generator(function() {
                    var env_2, result, _tmp, e_2;
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
                                    3,
                                    4,
                                    5
                                ]);
                                _tmp = [
                                    env_2
                                ];
                                return [
                                    4,
                                    element.evaluateHandle(_this._querySelector, selector, _LazyArg_js__WEBPACK_IMPORTED_MODULE_4__.LazyArg.create(function(context) {
                                        return context.puppeteerUtil;
                                    }))
                                ];
                            case 2:
                                result = __addDisposableResource.apply(void 0, _tmp.concat([
                                    _state.sent(),
                                    false
                                ]));
                                if (!(_api_ElementHandleSymbol_js__WEBPACK_IMPORTED_MODULE_0__._isElementHandle in result)) {
                                    return [
                                        2,
                                        null
                                    ];
                                }
                                return [
                                    2,
                                    result.move()
                                ];
                            case 3:
                                e_2 = _state.sent();
                                env_2.error = e_2;
                                env_2.hasError = true;
                                return [
                                    3,
                                    5
                                ];
                            case 4:
                                __disposeResources(env_2);
                                return [
                                    7
                                ];
                            case 5:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "waitFor",
            value: /**
     * Waits until a single node appears for a given selector and
     * {@link ElementHandle}.
     *
     * This will always query the handle in the Puppeteer world and migrate the
     * result to the main world.
     */ function waitFor(elementOrFrame, selector, options) {
                var _this = this;
                return _async_to_generator(function() {
                    var env_3, frame, element, _tmp, _options_visible, visible, _options_hidden, hidden, timeout, signal, _options_polling, polling, env_4, handle, _tmp1, e_3, error, e_4;
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
                                    12,
                                    13,
                                    14
                                ]);
                                _tmp = [
                                    env_3
                                ];
                                return [
                                    4,
                                    _async_to_generator(function() {
                                        return _ts_generator(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    if (!(_api_ElementHandleSymbol_js__WEBPACK_IMPORTED_MODULE_0__._isElementHandle in elementOrFrame)) {
                                                        frame = elementOrFrame;
                                                        return [
                                                            2
                                                        ];
                                                    }
                                                    frame = elementOrFrame.frame;
                                                    return [
                                                        4,
                                                        frame.isolatedRealm().adoptHandle(elementOrFrame)
                                                    ];
                                                case 1:
                                                    return [
                                                        2,
                                                        _state.sent()
                                                    ];
                                            }
                                        });
                                    })()
                                ];
                            case 2:
                                element = __addDisposableResource.apply(void 0, _tmp.concat([
                                    _state.sent(),
                                    false
                                ]));
                                _options_visible = options.visible, visible = _options_visible === void 0 ? false : _options_visible, _options_hidden = options.hidden, hidden = _options_hidden === void 0 ? false : _options_hidden, timeout = options.timeout, signal = options.signal;
                                polling = (_options_polling = options.polling) !== null && _options_polling !== void 0 ? _options_polling : visible || hidden ? "raf" /* PollingOptions.RAF */  : "mutation" /* PollingOptions.MUTATION */ ;
                                _state.label = 3;
                            case 3:
                                _state.trys.push([
                                    3,
                                    10,
                                    ,
                                    11
                                ]);
                                env_4 = {
                                    stack: [],
                                    error: void 0,
                                    hasError: false
                                };
                                _state.label = 4;
                            case 4:
                                _state.trys.push([
                                    4,
                                    7,
                                    8,
                                    9
                                ]);
                                signal === null || signal === void 0 ? void 0 : signal.throwIfAborted();
                                _tmp1 = [
                                    env_4
                                ];
                                return [
                                    4,
                                    frame.isolatedRealm().waitForFunction(function() {
                                        var _ref = _async_to_generator(function(PuppeteerUtil, query, selector, root, visible) {
                                            var querySelector, node;
                                            return _ts_generator(this, function(_state) {
                                                switch(_state.label){
                                                    case 0:
                                                        querySelector = PuppeteerUtil.createFunction(query);
                                                        return [
                                                            4,
                                                            querySelector(root !== null && root !== void 0 ? root : document, selector, PuppeteerUtil)
                                                        ];
                                                    case 1:
                                                        node = _state.sent();
                                                        return [
                                                            2,
                                                            PuppeteerUtil.checkVisibility(node, visible)
                                                        ];
                                                }
                                            });
                                        });
                                        return function(PuppeteerUtil, query, selector, root, visible) {
                                            return _ref.apply(this, arguments);
                                        };
                                    }(), {
                                        polling: polling,
                                        root: element,
                                        timeout: timeout,
                                        signal: signal
                                    }, _LazyArg_js__WEBPACK_IMPORTED_MODULE_4__.LazyArg.create(function(context) {
                                        return context.puppeteerUtil;
                                    }), (0,_util_Function_js__WEBPACK_IMPORTED_MODULE_2__.stringifyFunction)(_this._querySelector), selector, element, visible ? true : hidden ? false : undefined)
                                ];
                            case 5:
                                handle = __addDisposableResource.apply(void 0, _tmp1.concat([
                                    _state.sent(),
                                    false
                                ]));
                                if (signal === null || signal === void 0 ? void 0 : signal.aborted) {
                                    throw signal.reason;
                                }
                                if (!(_api_ElementHandleSymbol_js__WEBPACK_IMPORTED_MODULE_0__._isElementHandle in handle)) {
                                    return [
                                        2,
                                        null
                                    ];
                                }
                                return [
                                    4,
                                    frame.mainRealm().transferHandle(handle)
                                ];
                            case 6:
                                return [
                                    2,
                                    _state.sent()
                                ];
                            case 7:
                                e_3 = _state.sent();
                                env_4.error = e_3;
                                env_4.hasError = true;
                                return [
                                    3,
                                    9
                                ];
                            case 8:
                                __disposeResources(env_4);
                                return [
                                    7
                                ];
                            case 9:
                                return [
                                    3,
                                    11
                                ];
                            case 10:
                                error = _state.sent();
                                if (!(0,_util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_1__.isErrorLike)(error)) {
                                    throw error;
                                }
                                if (error.name === 'AbortError') {
                                    throw error;
                                }
                                error.message = "Waiting for selector `".concat(selector, "` failed: ").concat(error.message);
                                throw error;
                            case 11:
                                return [
                                    3,
                                    14
                                ];
                            case 12:
                                e_4 = _state.sent();
                                env_3.error = e_4;
                                env_3.hasError = true;
                                return [
                                    3,
                                    14
                                ];
                            case 13:
                                __disposeResources(env_3);
                                return [
                                    7
                                ];
                            case 14:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return QueryHandler;
} //# sourceMappingURL=QueryHandler.js.map
();
// Either one of these may be implemented, but at least one must be.
_define_property(QueryHandler, "querySelectorAll", void 0);
_define_property(QueryHandler, "querySelector", void 0);


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/util/ErrorLike.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createProtocolErrorMessage: function() { return createProtocolErrorMessage; },
  isErrnoException: function() { return isErrnoException; },
  isErrorLike: function() { return isErrorLike; },
  rewriteError: function() { return rewriteError; }
});
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * @internal
 */ function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function isErrorLike(obj) {
    return (typeof obj === "undefined" ? "undefined" : _type_of(obj)) === 'object' && obj !== null && 'name' in obj && 'message' in obj;
}
/**
 * @internal
 */ function isErrnoException(obj) {
    return isErrorLike(obj) && ('errno' in obj || 'code' in obj || 'path' in obj || 'syscall' in obj);
}
/**
 * @internal
 */ function rewriteError(error, message, originalMessage) {
    error.message = message;
    error.originalMessage = originalMessage !== null && originalMessage !== void 0 ? originalMessage : error.originalMessage;
    return error;
}
/**
 * @internal
 */ function createProtocolErrorMessage(object) {
    var message = object.error.message;
    // TODO: remove the type checks when we stop connecting to BiDi with a CDP
    // client.
    if (object.error && _type_of(object.error) === 'object' && 'data' in object.error) {
        message += " ".concat(object.error.data);
    }
    return message;
} //# sourceMappingURL=ErrorLike.js.map


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/util/Function.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createFunction: function() { return createFunction; },
  interpolateFunction: function() { return interpolateFunction; },
  stringifyFunction: function() { return stringifyFunction; }
});
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
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var createdFunctions = new Map();
/**
 * Creates a function from a string.
 *
 * @internal
 */ var createFunction = function(functionValue) {
    var fn = createdFunctions.get(functionValue);
    if (fn) {
        return fn;
    }
    fn = new Function("return ".concat(functionValue))();
    createdFunctions.set(functionValue, fn);
    return fn;
};
/**
 * @internal
 */ function stringifyFunction(fn) {
    var value = fn.toString();
    try {
        new Function("(".concat(value, ")"));
    } catch (err) {
        if (err.message.includes("Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of script in the following Content Security Policy directive")) {
            // The content security policy does not allow Function eval. Let's
            // assume the value might be valid as is.
            return value;
        }
        // This means we might have a function shorthand (e.g. `test(){}`). Let's
        // try prefixing.
        var prefix = 'function ';
        if (value.startsWith('async ')) {
            prefix = "async ".concat(prefix);
            value = value.substring('async '.length);
        }
        value = "".concat(prefix).concat(value);
        try {
            new Function("(".concat(value, ")"));
        } catch (e) {
            // We tried hard to serialize, but there's a weird beast here.
            throw new Error('Passed function cannot be serialized!');
        }
    }
    return value;
}
/**
 * Replaces `PLACEHOLDER`s with the given replacements.
 *
 * All replacements must be valid JS code.
 *
 * @example
 *
 * ```ts
 * interpolateFunction(() => PLACEHOLDER('test'), {test: 'void 0'});
 * // Equivalent to () => void 0
 * ```
 *
 * @internal
 */ var interpolateFunction = function(fn, replacements) {
    var value = stringifyFunction(fn);
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Object.entries(replacements)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _sliced_to_array(_step.value, 2), name = _step_value[0], jsValue = _step_value[1];
            value = value.replace(new RegExp("PLACEHOLDER\\(\\s*(?:'".concat(name, "'|\"").concat(name, '")\\s*\\)'), 'g'), // Wrapping this ensures tersers that accidentally inline PLACEHOLDER calls
            // are still valid. Without, we may get calls like ()=>{...}() which is
            // not valid.
            "(".concat(jsValue, ")"));
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
    return createFunction(value);
}; //# sourceMappingURL=Function.js.map


}),

}]);