"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["testing_TrackAsyncOperations_js"], {
"./testing/TrackAsyncOperations.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  checkForPendingActivity: function() { return checkForPendingActivity; },
  startTrackingAsyncActivity: function() { return startTrackingAsyncActivity; },
  stopTrackingAsyncActivity: function() { return stopTrackingAsyncActivity; }
});
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
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
var asyncActivity = [];
function startTrackingAsyncActivity() {
    // We are tracking all asynchronous activity but let it run normally during
    // the test.
    stub('requestAnimationFrame', trackingRequestAnimationFrame);
    stub('setTimeout', trackingSetTimeout);
    stub('setInterval', trackingSetInterval);
    stub('requestIdleCallback', trackingRequestIdleCallback);
    stub('cancelAnimationFrame', function(id) {
        return cancelTrackingActivity('a' + id);
    });
    stub('clearTimeout', function(id) {
        return cancelTrackingActivity('t' + id);
    });
    stub('clearInterval', function(id) {
        return cancelTrackingActivity('i' + id);
    });
    stub('cancelIdleCallback', function(id) {
        return cancelTrackingActivity('d' + id);
    });
    stub('Promise', TrackingPromise);
}
function checkForPendingActivity() {
    return _checkForPendingActivity.apply(this, arguments);
}
function _checkForPendingActivity() {
    _checkForPendingActivity = _async_to_generator(function() {
        var stillPending, wait, retries, pendingCount, totalCount, e, newTotalCount;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    stillPending = [];
                    wait = 5;
                    retries = 20;
                    _state.label = 1;
                case 1:
                    if (!(retries > 0)) return [
                        3,
                        6
                    ];
                    pendingCount = asyncActivity.filter(function(a) {
                        return a.pending;
                    }).length;
                    totalCount = asyncActivity.length;
                    _state.label = 2;
                case 2:
                    _state.trys.push([
                        2,
                        4,
                        ,
                        5
                    ]);
                    // First we wait for the pending async activity to finish normally
                    return [
                        4,
                        original(Promise).all(asyncActivity.filter(function(a) {
                            return a.pending;
                        }).map(function(a) {
                            return original(Promise).race([
                                a.promise,
                                new (original(Promise))(function(_, reject) {
                                    return original(setTimeout)(function() {
                                        if (!a.pending) {
                                            return;
                                        }
                                        // If something is still pending after some time, we try to
                                        // force the completion by running timeout and animation frame
                                        // handlers
                                        if (a.cancelDelayed && a.runImmediate) {
                                            a.cancelDelayed();
                                            a.runImmediate();
                                        } else {
                                            reject();
                                        }
                                    }, wait);
                                })
                            ]);
                        }))
                    ];
                case 3:
                    _state.sent();
                    // If the above didn't throw, all the original pending activity has
                    // completed, but it could have triggered more
                    stillPending = asyncActivity.filter(function(a) {
                        return a.pending;
                    });
                    if (!stillPending.length) {
                        return [
                            3,
                            6
                        ];
                    }
                    --retries;
                    return [
                        3,
                        5
                    ];
                case 4:
                    e = _state.sent();
                    stillPending = asyncActivity.filter(function(a) {
                        return a.pending;
                    });
                    newTotalCount = asyncActivity.length;
                    // Something is still pending. It might get resolved by force completion
                    // of new activity added during the iteration, so let's retry a couple of
                    // times.
                    if (newTotalCount === totalCount && stillPending.length === pendingCount) {
                        --retries;
                    }
                    return [
                        3,
                        5
                    ];
                case 5:
                    return [
                        3,
                        1
                    ];
                case 6:
                    if (stillPending.length) {
                        throw new Error('The test has completed, but there are still pending promises, created at: \n' + stillPending.map(function(a) {
                            return a.stack;
                        }).join('\n\n'));
                    }
                    return [
                        2
                    ];
            }
        });
    });
    return _checkForPendingActivity.apply(this, arguments);
}
function stopTrackingAsyncActivity() {
    asyncActivity.length = 0;
    restoreAll();
}
function trackingRequestAnimationFrame(fn) {
    var activity = {
        pending: true
    };
    var id = 0;
    activity.promise = new (original(Promise))(function(resolve) {
        activity.runImmediate = function() {
            fn(performance.now());
            activity.pending = false;
            resolve();
        };
        id = original(requestAnimationFrame)(activity.runImmediate);
        activity.id = 'a' + id;
        activity.cancelDelayed = function() {
            original(cancelAnimationFrame)(id);
            activity.pending = false;
            resolve();
        };
    });
    asyncActivity.push(activity);
    return id;
}
function trackingRequestIdleCallback(fn, opts) {
    var activity = {
        pending: true
    };
    var id = 0;
    activity.promise = new (original(Promise))(function(resolve) {
        activity.runImmediate = function(idleDeadline) {
            fn(idleDeadline !== null && idleDeadline !== void 0 ? idleDeadline : {
                didTimeout: true,
                timeRemaining: function() {
                    return 0;
                }
            });
            activity.pending = false;
            resolve();
        };
        id = original(requestIdleCallback)(activity.runImmediate, opts);
        activity.id = 'd' + id;
        activity.cancelDelayed = function() {
            original(cancelIdleCallback)(id);
            activity.pending = false;
            resolve();
        };
    });
    asyncActivity.push(activity);
    return id;
}
function trackingSetTimeout(arg, time) {
    for(var _len = arguments.length, params = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
        params[_key - 2] = arguments[_key];
    }
    var activity = {
        pending: true
    };
    var id = 0;
    activity.promise = new (original(Promise))(function(resolve) {
        activity.runImmediate = function() {
            if (typeof arg === 'function') {
                arg.apply(void 0, _to_consumable_array(params));
            } else {
                eval(arg);
            }
            activity.pending = false;
            resolve();
        };
        id = original(setTimeout)(activity.runImmediate, time);
        activity.id = 't' + id;
        activity.cancelDelayed = function() {
            original(clearTimeout)(id);
            activity.pending = false;
            resolve();
        };
    });
    asyncActivity.push(activity);
    return id;
}
function trackingSetInterval(arg, time) {
    var _this = this;
    for(var _len = arguments.length, params = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
        params[_key - 2] = arguments[_key];
    }
    var activity = {
        pending: true
    };
    var id = 0;
    activity.promise = new (original(Promise))(function(resolve) {
        id = original(setInterval).apply(_this, [
            arg,
            time
        ].concat(_to_consumable_array(params)));
        activity.id = 'i' + id;
        activity.cancelDelayed = function() {
            original(clearInterval)(id);
            activity.pending = false;
            resolve();
        };
    });
    asyncActivity.push(activity);
    return id;
}
function cancelTrackingActivity(id) {
    var activity = asyncActivity.find(function(a) {
        return a.id === id;
    });
    if (activity === null || activity === void 0 ? void 0 : activity.cancelDelayed) {
        activity.cancelDelayed();
    }
}
// We can't subclass native Promise here as this will cause all derived promises
// (e.g. those returned by `then`) to also be subclass instances. This results
// in a new asyncActivity entry on each iteration of checkForPendingActivity
// which never settles.
var TrackingPromise = Object.assign(function(arg) {
    var originalPromiseType = original(Promise);
    var promise = new originalPromiseType(arg);
    var activity = {
        promise: promise,
        stack: getStack(new Error()),
        pending: false
    };
    promise.then = function(onFullfilled, onRejected) {
        var _this = this;
        activity.pending = true;
        return originalPromiseType.prototype.then.apply(this, [
            function(result) {
                if (!onFullfilled) {
                    return _this;
                }
                activity.pending = false;
                return onFullfilled(result);
            },
            function(result) {
                if (!onRejected) {
                    return _this;
                }
                activity.pending = false;
                return onRejected(result);
            }
        ]);
    };
    asyncActivity.push(activity);
    return promise;
}, {
    all: Promise.all,
    allSettled: Promise.allSettled,
    any: Promise.any,
    race: Promise.race,
    reject: Promise.reject,
    resolve: Promise.resolve
});
function getStack(error) {
    var _error_stack;
    return ((_error_stack = error.stack) !== null && _error_stack !== void 0 ? _error_stack : 'No stack').split('\n').slice(2).join('\n');
}
var stubs = [];
function stub(name, stubWith) {
    var original1 = window[name];
    window[name] = stubWith;
    stubs.push({
        name: name,
        original: original1,
        stubWith: stubWith
    });
}
function original(stubWith) {
    var _stubs_find;
    return (_stubs_find = stubs.find(function(s) {
        return s.stubWith === stubWith;
    })) === null || _stubs_find === void 0 ? void 0 : _stubs_find.original;
}
function restoreAll() {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = stubs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _step.value, name = _step_value.name, original1 = _step_value.original;
            window[name] = original1;
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
    stubs.length = 0;
} //# sourceMappingURL=TrackAsyncOperations.js.map


}),

}]);