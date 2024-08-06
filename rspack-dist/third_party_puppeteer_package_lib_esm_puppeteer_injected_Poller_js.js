"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_injected_Poller_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/injected/Poller.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  IntervalPoller: function() { return IntervalPoller; },
  MutationPoller: function() { return MutationPoller; },
  RAFPoller: function() { return RAFPoller; }
});
/* harmony import */var _util_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/assert.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js");
/* harmony import */var _util_Deferred_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Deferred.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/Deferred.js");
/**
 * @license
 * Copyright 2022 Google Inc.
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


var _fn = /*#__PURE__*/ new WeakMap(), _root = /*#__PURE__*/ new WeakMap(), _observer = /*#__PURE__*/ new WeakMap(), _deferred = /*#__PURE__*/ new WeakMap();
/**
 * @internal
 */ var MutationPoller = /*#__PURE__*/ function() {
    "use strict";
    function MutationPoller(fn, root) {
        _class_call_check(this, MutationPoller);
        _class_private_field_init(this, _fn, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _root, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _observer, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _deferred, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _fn, fn);
        _class_private_field_set(this, _root, root);
    }
    _create_class(MutationPoller, [
        {
            key: "start",
            value: function start() {
                var _this = this;
                return _async_to_generator(function() {
                    var deferred, result;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                deferred = _class_private_field_set(_this, _deferred, _util_Deferred_js__WEBPACK_IMPORTED_MODULE_1__.Deferred.create());
                                return [
                                    4,
                                    _class_private_field_get(_this, _fn).call(_this)
                                ];
                            case 1:
                                result = _state.sent();
                                if (result) {
                                    deferred.resolve(result);
                                    return [
                                        2
                                    ];
                                }
                                _class_private_field_set(_this, _observer, new MutationObserver(/*#__PURE__*/ _async_to_generator(function() {
                                    var result;
                                    return _ts_generator(this, function(_state) {
                                        switch(_state.label){
                                            case 0:
                                                return [
                                                    4,
                                                    _class_private_field_get(_this, _fn).call(_this)
                                                ];
                                            case 1:
                                                result = _state.sent();
                                                if (!result) {
                                                    return [
                                                        2
                                                    ];
                                                }
                                                deferred.resolve(result);
                                                return [
                                                    4,
                                                    _this.stop()
                                                ];
                                            case 2:
                                                _state.sent();
                                                return [
                                                    2
                                                ];
                                        }
                                    });
                                })));
                                _class_private_field_get(_this, _observer).observe(_class_private_field_get(_this, _root), {
                                    childList: true,
                                    subtree: true,
                                    attributes: true
                                });
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "stop",
            value: function stop() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(_class_private_field_get(_this, _deferred), 'Polling never started.');
                        if (!_class_private_field_get(_this, _deferred).finished()) {
                            _class_private_field_get(_this, _deferred).reject(new Error('Polling stopped'));
                        }
                        if (_class_private_field_get(_this, _observer)) {
                            _class_private_field_get(_this, _observer).disconnect();
                            _class_private_field_set(_this, _observer, undefined);
                        }
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "result",
            value: function result() {
                (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(_class_private_field_get(this, _deferred), 'Polling never started.');
                return _class_private_field_get(this, _deferred).valueOrThrow();
            }
        }
    ]);
    return MutationPoller;
}();
var _fn1 = /*#__PURE__*/ new WeakMap(), _deferred1 = /*#__PURE__*/ new WeakMap();
/**
 * @internal
 */ var RAFPoller = /*#__PURE__*/ function() {
    "use strict";
    function RAFPoller(fn) {
        _class_call_check(this, RAFPoller);
        _class_private_field_init(this, _fn1, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _deferred1, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _fn1, fn);
    }
    _create_class(RAFPoller, [
        {
            key: "start",
            value: function start() {
                var _this = this;
                return _async_to_generator(function() {
                    var deferred, result, poll;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                deferred = _class_private_field_set(_this, _deferred1, _util_Deferred_js__WEBPACK_IMPORTED_MODULE_1__.Deferred.create());
                                return [
                                    4,
                                    _class_private_field_get(_this, _fn1).call(_this)
                                ];
                            case 1:
                                result = _state.sent();
                                if (result) {
                                    deferred.resolve(result);
                                    return [
                                        2
                                    ];
                                }
                                poll = function() {
                                    var _ref = _async_to_generator(function() {
                                        var result;
                                        return _ts_generator(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    if (deferred.finished()) {
                                                        return [
                                                            2
                                                        ];
                                                    }
                                                    return [
                                                        4,
                                                        _class_private_field_get(_this, _fn1).call(_this)
                                                    ];
                                                case 1:
                                                    result = _state.sent();
                                                    if (!result) {
                                                        window.requestAnimationFrame(poll);
                                                        return [
                                                            2
                                                        ];
                                                    }
                                                    deferred.resolve(result);
                                                    return [
                                                        4,
                                                        _this.stop()
                                                    ];
                                                case 2:
                                                    _state.sent();
                                                    return [
                                                        2
                                                    ];
                                            }
                                        });
                                    });
                                    return function poll() {
                                        return _ref.apply(this, arguments);
                                    };
                                }();
                                window.requestAnimationFrame(poll);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "stop",
            value: function stop() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(_class_private_field_get(_this, _deferred1), 'Polling never started.');
                        if (!_class_private_field_get(_this, _deferred1).finished()) {
                            _class_private_field_get(_this, _deferred1).reject(new Error('Polling stopped'));
                        }
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "result",
            value: function result() {
                (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(_class_private_field_get(this, _deferred1), 'Polling never started.');
                return _class_private_field_get(this, _deferred1).valueOrThrow();
            }
        }
    ]);
    return RAFPoller;
}();
var _fn2 = /*#__PURE__*/ new WeakMap(), _ms = /*#__PURE__*/ new WeakMap(), _interval = /*#__PURE__*/ new WeakMap(), _deferred2 = /*#__PURE__*/ new WeakMap();
/**
 * @internal
 */ var IntervalPoller = /*#__PURE__*/ function() {
    "use strict";
    function IntervalPoller(fn, ms) {
        _class_call_check(this, IntervalPoller);
        _class_private_field_init(this, _fn2, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _ms, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _interval, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _deferred2, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _fn2, fn);
        _class_private_field_set(this, _ms, ms);
    }
    _create_class(IntervalPoller, [
        {
            key: "start",
            value: function start() {
                var _this = this;
                return _async_to_generator(function() {
                    var deferred, result;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                deferred = _class_private_field_set(_this, _deferred2, _util_Deferred_js__WEBPACK_IMPORTED_MODULE_1__.Deferred.create());
                                return [
                                    4,
                                    _class_private_field_get(_this, _fn2).call(_this)
                                ];
                            case 1:
                                result = _state.sent();
                                if (result) {
                                    deferred.resolve(result);
                                    return [
                                        2
                                    ];
                                }
                                _class_private_field_set(_this, _interval, setInterval(/*#__PURE__*/ _async_to_generator(function() {
                                    var result;
                                    return _ts_generator(this, function(_state) {
                                        switch(_state.label){
                                            case 0:
                                                return [
                                                    4,
                                                    _class_private_field_get(_this, _fn2).call(_this)
                                                ];
                                            case 1:
                                                result = _state.sent();
                                                if (!result) {
                                                    return [
                                                        2
                                                    ];
                                                }
                                                deferred.resolve(result);
                                                return [
                                                    4,
                                                    _this.stop()
                                                ];
                                            case 2:
                                                _state.sent();
                                                return [
                                                    2
                                                ];
                                        }
                                    });
                                }), _class_private_field_get(_this, _ms)));
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "stop",
            value: function stop() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(_class_private_field_get(_this, _deferred2), 'Polling never started.');
                        if (!_class_private_field_get(_this, _deferred2).finished()) {
                            _class_private_field_get(_this, _deferred2).reject(new Error('Polling stopped'));
                        }
                        if (_class_private_field_get(_this, _interval)) {
                            clearInterval(_class_private_field_get(_this, _interval));
                            _class_private_field_set(_this, _interval, undefined);
                        }
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "result",
            value: function result() {
                (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(_class_private_field_get(this, _deferred2), 'Polling never started.');
                return _class_private_field_get(this, _deferred2).valueOrThrow();
            }
        }
    ]);
    return IntervalPoller;
} //# sourceMappingURL=Poller.js.map
();


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assert: function() { return assert; }
});
/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * Asserts that the given value is truthy.
 * @param value - some conditional statement
 * @param message - the error message to throw if the value is not truthy.
 *
 * @internal
 */ var assert = function(value, message) {
    if (!value) {
        throw new Error(message);
    }
}; //# sourceMappingURL=assert.js.map


}),

}]);