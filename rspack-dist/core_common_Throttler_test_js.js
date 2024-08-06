"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_common_Throttler_test_js"], {
"./core/common/Throttler.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common.js */ "./core/common/common.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
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


var _Common_Throttler = _common_js__WEBPACK_IMPORTED_MODULE_1__.Throttler, Throttler = _Common_Throttler.Throttler, Scheduling = _Common_Throttler.Scheduling;
describe('Throttler class', function() {
    var ensureNoRecentRun = function ensureNoRecentRun() {
        clock.tick(TIMEOUT + 1);
    };
    var ensureHasRecentRun = function ensureHasRecentRun() {
        return _ensureHasRecentRun.apply(this, arguments);
    };
    var clock;
    var throttler;
    var TIMEOUT = 10;
    beforeEach(/*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    clock = sinon.useFakeTimers();
                    // When nothing was run, throttler has 0 as the last exectution time.
                    // With mock time, current time is also 0 initially. Advance the clock
                    // to get more realistic initial state.
                    return [
                        4,
                        ensureNoRecentRun()
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    afterEach(function() {
        clock.restore();
    });
    function _ensureHasRecentRun() {
        _ensureHasRecentRun = _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        void throttler.schedule(/*#__PURE__*/ _async_to_generator(function() {
                            return _ts_generator(this, function(_state) {
                                return [
                                    2
                                ];
                            });
                        }));
                        return [
                            4,
                            clock.tickAsync(TIMEOUT)
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        });
        return _ensureHasRecentRun.apply(this, arguments);
    }
    it('is able to schedule a process as soon as possible', /*#__PURE__*/ _async_to_generator(function() {
        var process;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    process = sinon.spy();
                    throttler = new Throttler(TIMEOUT);
                    return [
                        4,
                        ensureHasRecentRun()
                    ];
                case 1:
                    _state.sent();
                    void throttler.schedule(process, "AsSoonAsPossible" /* Scheduling.AsSoonAsPossible */ );
                    assert.isFalse(process.called);
                    return [
                        4,
                        clock.tickAsync(0)
                    ];
                case 2:
                    _state.sent();
                    assert.isTrue(process.calledOnce);
                    return [
                        2
                    ];
            }
        });
    }));
    it('is able to schedule two processes as soon as possible', /*#__PURE__*/ _async_to_generator(function() {
        var process1, process2, promiseTest;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    process1 = sinon.spy();
                    process2 = sinon.spy();
                    throttler = new Throttler(TIMEOUT);
                    return [
                        4,
                        ensureHasRecentRun()
                    ];
                case 1:
                    _state.sent();
                    promiseTest = throttler.schedule(process1, "AsSoonAsPossible" /* Scheduling.AsSoonAsPossible */ );
                    void throttler.schedule(process2, "AsSoonAsPossible" /* Scheduling.AsSoonAsPossible */ );
                    assert.isFalse(process1.called);
                    assert.isFalse(process2.called);
                    void clock.tickAsync(0);
                    return [
                        4,
                        promiseTest
                    ];
                case 2:
                    _state.sent();
                    assert.isFalse(process1.called);
                    assert.isTrue(process2.calledOnce);
                    return [
                        2
                    ];
            }
        });
    }));
    it('by default schedules a process delayed only if another process ran recently', /*#__PURE__*/ _async_to_generator(function() {
        var process;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    process = sinon.spy();
                    throttler = new Throttler(TIMEOUT);
                    void throttler.schedule(process);
                    assert.isFalse(process.called);
                    return [
                        4,
                        clock.tickAsync(0)
                    ];
                case 1:
                    _state.sent();
                    assert.isTrue(process.calledOnce);
                    process.resetHistory();
                    void throttler.schedule(process);
                    return [
                        4,
                        clock.tickAsync(0)
                    ];
                case 2:
                    _state.sent();
                    assert.isFalse(process.called);
                    return [
                        4,
                        clock.tickAsync(TIMEOUT / 2)
                    ];
                case 3:
                    _state.sent();
                    assert.isFalse(process.called);
                    void throttler.schedule(process);
                    return [
                        4,
                        clock.tickAsync(TIMEOUT / 2)
                    ];
                case 4:
                    _state.sent();
                    assert.isTrue(process.calledOnce);
                    return [
                        4,
                        ensureNoRecentRun()
                    ];
                case 5:
                    _state.sent();
                    process.resetHistory();
                    void throttler.schedule(process);
                    assert.isFalse(process.called);
                    return [
                        4,
                        clock.tickAsync(0)
                    ];
                case 6:
                    _state.sent();
                    assert.isTrue(process.calledOnce);
                    return [
                        2
                    ];
            }
        });
    }));
    it('is able to schedule a delayed process', /*#__PURE__*/ _async_to_generator(function() {
        var process, throttler;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    process = sinon.spy();
                    throttler = new Throttler(10);
                    void throttler.schedule(process, "Delayed" /* Scheduling.Delayed */ );
                    assert.isFalse(process.called);
                    return [
                        4,
                        clock.tickAsync(0)
                    ];
                case 1:
                    _state.sent();
                    assert.isFalse(process.called);
                    return [
                        4,
                        clock.tickAsync(10)
                    ];
                case 2:
                    _state.sent();
                    assert.isTrue(process.calledOnce);
                    return [
                        2
                    ];
            }
        });
    }));
    it('runs only one process at a time', /*#__PURE__*/ _async_to_generator(function() {
        var _Platform_PromiseUtilities_promiseWithResolvers, process1Promise, process1Resolve, _Platform_PromiseUtilities_promiseWithResolvers1, process2Promise, process2Resolve, spy1, spy2, process1, process2;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    throttler = new Throttler(50);
                    _Platform_PromiseUtilities_promiseWithResolvers = _platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.PromiseUtilities.promiseWithResolvers(), process1Promise = _Platform_PromiseUtilities_promiseWithResolvers.promise, process1Resolve = _Platform_PromiseUtilities_promiseWithResolvers.resolve;
                    _Platform_PromiseUtilities_promiseWithResolvers1 = _platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.PromiseUtilities.promiseWithResolvers(), process2Promise = _Platform_PromiseUtilities_promiseWithResolvers1.promise, process2Resolve = _Platform_PromiseUtilities_promiseWithResolvers1.resolve;
                    spy1 = sinon.spy();
                    spy2 = sinon.spy();
                    process1 = function() {
                        spy1();
                        return process1Promise;
                    };
                    process2 = function() {
                        spy2();
                        return process2Promise;
                    };
                    void throttler.schedule(process1, "AsSoonAsPossible" /* Scheduling.AsSoonAsPossible */ );
                    return [
                        4,
                        clock.tickAsync(0)
                    ];
                case 1:
                    _state.sent();
                    assert.isTrue(spy1.called);
                    void throttler.schedule(process2);
                    return [
                        4,
                        clock.tickAsync(100)
                    ];
                case 2:
                    _state.sent();
                    assert.isFalse(spy2.called);
                    process1Resolve();
                    return [
                        4,
                        clock.tickAsync(0)
                    ];
                case 3:
                    _state.sent();
                    assert.isFalse(spy2.called);
                    return [
                        4,
                        clock.tickAsync(50)
                    ];
                case 4:
                    _state.sent();
                    assert.isTrue(spy2.called);
                    process2Resolve(); // No pending promises.
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=Throttler.test.js.map


}),

}]);