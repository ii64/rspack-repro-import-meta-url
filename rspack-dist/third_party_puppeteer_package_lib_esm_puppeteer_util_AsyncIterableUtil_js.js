"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_util_AsyncIterableUtil_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/util/AsyncIterableUtil.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AsyncIterableUtil: function() { return AsyncIterableUtil; }
});
/**
 * @internal
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
var AsyncIterableUtil = /*#__PURE__*/ function() {
    "use strict";
    function AsyncIterableUtil() {
        _class_call_check(this, AsyncIterableUtil);
    }
    _create_class(AsyncIterableUtil, null, [
        {
            key: "map",
            value: function map(iterable, map) {
                return _wrap_async_generator(function() {
                    var _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, value, err;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _iteratorAbruptCompletion = false, _didIteratorError = false;
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    8,
                                    9,
                                    14
                                ]);
                                _iterator = _async_iterator(iterable);
                                _state.label = 2;
                            case 2:
                                return [
                                    4,
                                    _await_async_generator(_iterator.next())
                                ];
                            case 3:
                                if (!(_iteratorAbruptCompletion = !(_step = _state.sent()).done)) return [
                                    3,
                                    7
                                ];
                                _value = _step.value;
                                value = _value;
                                return [
                                    4,
                                    _await_async_generator(map(value))
                                ];
                            case 4:
                                return [
                                    4,
                                    _state.sent()
                                ];
                            case 5:
                                _state.sent();
                                _state.label = 6;
                            case 6:
                                _iteratorAbruptCompletion = false;
                                return [
                                    3,
                                    2
                                ];
                            case 7:
                                return [
                                    3,
                                    14
                                ];
                            case 8:
                                err = _state.sent();
                                _didIteratorError = true;
                                _iteratorError = err;
                                return [
                                    3,
                                    14
                                ];
                            case 9:
                                _state.trys.push([
                                    9,
                                    ,
                                    12,
                                    13
                                ]);
                                if (!(_iteratorAbruptCompletion && _iterator.return != null)) return [
                                    3,
                                    11
                                ];
                                return [
                                    4,
                                    _await_async_generator(_iterator.return())
                                ];
                            case 10:
                                _state.sent();
                                _state.label = 11;
                            case 11:
                                return [
                                    3,
                                    13
                                ];
                            case 12:
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                                return [
                                    7
                                ];
                            case 13:
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
        },
        {
            key: "flatMap",
            value: function flatMap(iterable, map) {
                return _wrap_async_generator(function() {
                    var _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, value, err;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _iteratorAbruptCompletion = false, _didIteratorError = false;
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    7,
                                    8,
                                    13
                                ]);
                                _iterator = _async_iterator(iterable);
                                _state.label = 2;
                            case 2:
                                return [
                                    4,
                                    _await_async_generator(_iterator.next())
                                ];
                            case 3:
                                if (!(_iteratorAbruptCompletion = !(_step = _state.sent()).done)) return [
                                    3,
                                    6
                                ];
                                _value = _step.value;
                                value = _value;
                                return [
                                    5,
                                    _ts_values(_async_generator_delegate(_async_iterator(map(value)), _await_async_generator))
                                ];
                            case 4:
                                _state.sent();
                                _state.label = 5;
                            case 5:
                                _iteratorAbruptCompletion = false;
                                return [
                                    3,
                                    2
                                ];
                            case 6:
                                return [
                                    3,
                                    13
                                ];
                            case 7:
                                err = _state.sent();
                                _didIteratorError = true;
                                _iteratorError = err;
                                return [
                                    3,
                                    13
                                ];
                            case 8:
                                _state.trys.push([
                                    8,
                                    ,
                                    11,
                                    12
                                ]);
                                if (!(_iteratorAbruptCompletion && _iterator.return != null)) return [
                                    3,
                                    10
                                ];
                                return [
                                    4,
                                    _await_async_generator(_iterator.return())
                                ];
                            case 9:
                                _state.sent();
                                _state.label = 10;
                            case 10:
                                return [
                                    3,
                                    12
                                ];
                            case 11:
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                                return [
                                    7
                                ];
                            case 12:
                                return [
                                    7
                                ];
                            case 13:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "collect",
            value: function collect(iterable) {
                return _async_to_generator(function() {
                    var result, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, value, err;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                result = [];
                                _iteratorAbruptCompletion = false, _didIteratorError = false;
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    6,
                                    7,
                                    12
                                ]);
                                _iterator = _async_iterator(iterable);
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
                                value = _value;
                                result.push(value);
                                _state.label = 4;
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
                                    result
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "first",
            value: function first(iterable) {
                return _async_to_generator(function() {
                    var _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, value, err;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _iteratorAbruptCompletion = false, _didIteratorError = false;
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    6,
                                    7,
                                    12
                                ]);
                                _iterator = _async_iterator(iterable);
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
                                value = _value;
                                return [
                                    2,
                                    value
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
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return AsyncIterableUtil;
} //# sourceMappingURL=AsyncIterableUtil.js.map
();


}),

}]);