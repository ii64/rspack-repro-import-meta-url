"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_common_Mutex_test_js"], {
"./core/common/Mutex.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./core/common/common.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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

describe('Mutex', function() {
    var triggerMicroTaskQueue = function triggerMicroTaskQueue() {
        return _triggerMicroTaskQueue.apply(this, arguments);
    };
    var notAcquired = function notAcquired() {
        return _notAcquired.apply(this, arguments);
    };
    function _triggerMicroTaskQueue() {
        _triggerMicroTaskQueue = _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            new Promise(function(resolve) {
                                return setTimeout(resolve, 0);
                            })
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        });
        return _triggerMicroTaskQueue.apply(this, arguments);
    }
    function _notAcquired() {
        _notAcquired = _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            triggerMicroTaskQueue()
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2,
                            'not acquired'
                        ];
                }
            });
        });
        return _notAcquired.apply(this, arguments);
    }
    it('should acquire the lock immediately if no one is holding it', /*#__PURE__*/ _async_to_generator(function() {
        var mutex, release;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    mutex = new _common_js__WEBPACK_IMPORTED_MODULE_0__.Mutex.Mutex();
                    return [
                        4,
                        mutex.acquire()
                    ];
                case 1:
                    release = _state.sent();
                    release();
                    return [
                        2
                    ];
            }
        });
    }));
    it('should acquire the lock once another holder releases it', /*#__PURE__*/ _async_to_generator(function() {
        var mutex, lock1, lock2, release, _, _1;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    mutex = new _common_js__WEBPACK_IMPORTED_MODULE_0__.Mutex.Mutex();
                    lock1 = mutex.acquire();
                    lock2 = mutex.acquire();
                    return [
                        4,
                        lock1
                    ];
                case 1:
                    release = _state.sent();
                    // lock2 should not be resolved set.
                    _ = assert.strictEqual;
                    return [
                        4,
                        Promise.race([
                            lock2,
                            notAcquired()
                        ])
                    ];
                case 2:
                    _.apply(assert, [
                        _state.sent(),
                        'not acquired'
                    ]);
                    release();
                    return [
                        4,
                        triggerMicroTaskQueue()
                    ];
                case 3:
                    _state.sent();
                    _1 = assert.instanceOf;
                    return [
                        4,
                        lock2
                    ];
                case 4:
                    _1.apply(assert, [
                        _state.sent(),
                        Function
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('should throw when release is called more than once', /*#__PURE__*/ _async_to_generator(function() {
        var mutex, release;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    mutex = new _common_js__WEBPACK_IMPORTED_MODULE_0__.Mutex.Mutex();
                    return [
                        4,
                        mutex.acquire()
                    ];
                case 1:
                    release = _state.sent();
                    release();
                    assert.throws(function() {
                        return release();
                    });
                    return [
                        2
                    ];
            }
        });
    }));
    it('should work with run', /*#__PURE__*/ _async_to_generator(function() {
        var mutex, release, action, _, _1;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    mutex = new _common_js__WEBPACK_IMPORTED_MODULE_0__.Mutex.Mutex();
                    return [
                        4,
                        mutex.acquire()
                    ];
                case 1:
                    release = _state.sent();
                    action = mutex.run(/*#__PURE__*/ _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            return [
                                2,
                                true
                            ];
                        });
                    }));
                    // lock2 should not be resolved set.
                    _ = assert.strictEqual;
                    return [
                        4,
                        Promise.race([
                            action,
                            notAcquired()
                        ])
                    ];
                case 2:
                    _.apply(assert, [
                        _state.sent(),
                        'not acquired'
                    ]);
                    release();
                    return [
                        4,
                        triggerMicroTaskQueue()
                    ];
                case 3:
                    _state.sent();
                    _1 = assert.isTrue;
                    return [
                        4,
                        action
                    ];
                case 4:
                    _1.apply(assert, [
                        _state.sent()
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('should work for two async functions accessing shared state', /*#__PURE__*/ _async_to_generator(function() {
        var mutex, shared, action1Resolver, action1ReadyPromise, action2Resolver, action2ReadyPromise, promises;
        function action1() {
            return _action1.apply(this, arguments);
        }
        function _action1() {
            _action1 = _async_to_generator(function() {
                var release;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                mutex.acquire()
                            ];
                        case 1:
                            release = _state.sent();
                            _state.label = 2;
                        case 2:
                            _state.trys.push([
                                2,
                                ,
                                4,
                                5
                            ]);
                            return [
                                4,
                                action1ReadyPromise
                            ];
                        case 3:
                            _state.sent();
                            shared.push('action1');
                            return [
                                3,
                                5
                            ];
                        case 4:
                            release();
                            return [
                                7
                            ];
                        case 5:
                            return [
                                2
                            ];
                    }
                });
            });
            return _action1.apply(this, arguments);
        }
        function action2() {
            return _action2.apply(this, arguments);
        }
        function _action2() {
            _action2 = _async_to_generator(function() {
                var release;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                mutex.acquire()
                            ];
                        case 1:
                            release = _state.sent();
                            _state.label = 2;
                        case 2:
                            _state.trys.push([
                                2,
                                ,
                                4,
                                5
                            ]);
                            return [
                                4,
                                action2ReadyPromise
                            ];
                        case 3:
                            _state.sent();
                            shared.push('action2');
                            return [
                                3,
                                5
                            ];
                        case 4:
                            release();
                            return [
                                7
                            ];
                        case 5:
                            return [
                                2
                            ];
                    }
                });
            });
            return _action2.apply(this, arguments);
        }
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    mutex = new _common_js__WEBPACK_IMPORTED_MODULE_0__.Mutex.Mutex();
                    shared = [];
                    action1Resolver = function() {};
                    action1ReadyPromise = new Promise(function(resolve) {
                        action1Resolver = resolve;
                    });
                    action2Resolver = function() {};
                    action2ReadyPromise = new Promise(function(resolve) {
                        action2Resolver = resolve;
                    });
                    promises = Promise.all([
                        action1(),
                        action2()
                    ]);
                    action2Resolver();
                    action1Resolver();
                    return [
                        4,
                        promises
                    ];
                case 1:
                    _state.sent();
                    assert.deepEqual(shared, [
                        'action1',
                        'action2'
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=Mutex.test.js.map


}),

}]);