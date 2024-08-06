"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_util_Deferred_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/util/Deferred.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Deferred: function() { return Deferred; }
});
/* harmony import */var _common_Errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Errors.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/Errors.js");
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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

var _isResolved = /*#__PURE__*/ new WeakMap(), _isRejected = /*#__PURE__*/ new WeakMap(), _value = /*#__PURE__*/ new WeakMap(), // SAFETY: This is ensured by #taskPromise.
_resolve = /*#__PURE__*/ new WeakMap(), _taskPromise = /*#__PURE__*/ new WeakMap(), _timeoutId = /*#__PURE__*/ new WeakMap(), _timeoutError = /*#__PURE__*/ new WeakMap(), _finish = /*#__PURE__*/ new WeakSet(), _promise = /*#__PURE__*/ new WeakMap();
/**
 * Creates and returns a deferred object along with the resolve/reject functions.
 *
 * If the deferred has not been resolved/rejected within the `timeout` period,
 * the deferred gets resolves with a timeout error. `timeout` has to be greater than 0 or
 * it is ignored.
 *
 * @internal
 */ var Deferred = /*#__PURE__*/ function() {
    "use strict";
    function Deferred(opts) {
        var _this = this;
        _class_call_check(this, Deferred);
        _class_private_method_init(this, _finish);
        _class_private_field_init(this, _isResolved, {
            writable: true,
            value: false
        });
        _class_private_field_init(this, _isRejected, {
            writable: true,
            value: false
        });
        _class_private_field_init(this, _value, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _resolve, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _taskPromise, {
            writable: true,
            value: new Promise(function(resolve) {
                _class_private_field_set(_this, _resolve, resolve);
            })
        });
        _class_private_field_init(this, _timeoutId, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _timeoutError, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _promise, {
            writable: true,
            value: void 0
        });
        if (opts && opts.timeout > 0) {
            _class_private_field_set(this, _timeoutError, new _common_Errors_js__WEBPACK_IMPORTED_MODULE_0__.TimeoutError(opts.message));
            _class_private_field_set(this, _timeoutId, setTimeout(function() {
                _this.reject(_class_private_field_get(_this, _timeoutError));
            }, opts.timeout));
        }
    }
    _create_class(Deferred, [
        {
            key: "resolve",
            value: function resolve(value) {
                if (_class_private_field_get(this, _isRejected) || _class_private_field_get(this, _isResolved)) {
                    return;
                }
                _class_private_field_set(this, _isResolved, true);
                _class_private_method_get(this, _finish, finish).call(this, value);
            }
        },
        {
            key: "reject",
            value: function reject(error) {
                if (_class_private_field_get(this, _isRejected) || _class_private_field_get(this, _isResolved)) {
                    return;
                }
                _class_private_field_set(this, _isRejected, true);
                _class_private_method_get(this, _finish, finish).call(this, error);
            }
        },
        {
            key: "resolved",
            value: function resolved() {
                return _class_private_field_get(this, _isResolved);
            }
        },
        {
            key: "finished",
            value: function finished() {
                return _class_private_field_get(this, _isResolved) || _class_private_field_get(this, _isRejected);
            }
        },
        {
            key: "value",
            value: function value() {
                return _class_private_field_get(this, _value);
            }
        },
        {
            key: "valueOrThrow",
            value: function valueOrThrow() {
                if (!_class_private_field_get(this, _promise)) {
                    var _this = this;
                    _class_private_field_set(this, _promise, _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _class_private_field_get(_this, _taskPromise)
                                    ];
                                case 1:
                                    _state.sent();
                                    if (_class_private_field_get(_this, _isRejected)) {
                                        throw _class_private_field_get(_this, _value);
                                    }
                                    return [
                                        2,
                                        _class_private_field_get(_this, _value)
                                    ];
                            }
                        });
                    })());
                }
                return _class_private_field_get(this, _promise);
            }
        }
    ], [
        {
            key: "create",
            value: function create(opts) {
                return new Deferred(opts);
            }
        },
        {
            key: "race",
            value: function race(awaitables) {
                return _async_to_generator(function() {
                    var deferredWithTimeout, promises, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, deferred;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                deferredWithTimeout = new Set();
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    ,
                                    3,
                                    4
                                ]);
                                promises = awaitables.map(function(value) {
                                    if (_instanceof(value, Deferred)) {
                                        if (_class_private_field_get(value, _timeoutId)) {
                                            deferredWithTimeout.add(value);
                                        }
                                        return value.valueOrThrow();
                                    }
                                    return value;
                                });
                                return [
                                    4,
                                    Promise.race(promises)
                                ];
                            case 2:
                                // eslint-disable-next-line no-restricted-syntax
                                return [
                                    2,
                                    _state.sent()
                                ];
                            case 3:
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = deferredWithTimeout[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        deferred = _step.value;
                                        // We need to stop the timeout else
                                        // Node.JS will keep running the event loop till the
                                        // timer executes
                                        deferred.reject(new Error('Timeout cleared'));
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
                                    7
                                ];
                            case 4:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return Deferred;
} //# sourceMappingURL=Deferred.js.map
();
function finish(value) {
    clearTimeout(_class_private_field_get(this, _timeoutId));
    _class_private_field_set(this, _value, value);
    _class_private_field_get(this, _resolve).call(this);
}


}),

}]);