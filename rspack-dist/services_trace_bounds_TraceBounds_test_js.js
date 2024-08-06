"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["services_trace_bounds_TraceBounds_test_js"], {
"./services/trace_bounds/TraceBounds.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/trace/trace.js */ "./models/trace/trace.js");
/* harmony import */var _trace_bounds_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trace_bounds.js */ "./services/trace_bounds/trace_bounds.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
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


var baseTraceWindow = {
    min: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(0),
    max: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(10000),
    range: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(10000)
};
var baseTraceWindowMilli = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.traceWindowMilliSeconds(baseTraceWindow);
describe('TraceBounds', function() {
    it('is initialized with the entire trace window and sets the state accordingly', /*#__PURE__*/ _async_to_generator(function() {
        var manager;
        return _ts_generator(this, function(_state) {
            manager = _trace_bounds_js__WEBPACK_IMPORTED_MODULE_1__.TraceBounds.BoundsManager.instance({
                forceNew: true
            }).resetWithNewBounds(baseTraceWindow);
            assert.deepEqual(manager.state(), {
                micro: {
                    entireTraceBounds: baseTraceWindow,
                    minimapTraceBounds: baseTraceWindow,
                    timelineTraceWindow: baseTraceWindow
                },
                milli: {
                    entireTraceBounds: baseTraceWindowMilli,
                    minimapTraceBounds: baseTraceWindowMilli,
                    timelineTraceWindow: baseTraceWindowMilli
                }
            });
            return [
                2
            ];
        });
    }));
    it('can update the minimap bounds and dispatches a state change event', /*#__PURE__*/ _async_to_generator(function() {
        var manager, onStateChange, newMiniMapBounds, dataFromEvent;
        return _ts_generator(this, function(_state) {
            manager = _trace_bounds_js__WEBPACK_IMPORTED_MODULE_1__.TraceBounds.BoundsManager.instance({
                forceNew: true
            }).resetWithNewBounds(baseTraceWindow);
            onStateChange = sinon.spy();
            manager.addEventListener(_trace_bounds_js__WEBPACK_IMPORTED_MODULE_1__.TraceBounds.StateChangedEvent.eventName, onStateChange);
            newMiniMapBounds = {
                min: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(10000),
                max: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(20000),
                range: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(10000)
            };
            manager.setMiniMapBounds(newMiniMapBounds);
            assert.strictEqual(onStateChange.callCount, 1);
            dataFromEvent = onStateChange.firstCall.args[0];
            assert.strictEqual(dataFromEvent.updateType, 'MINIMAP_BOUNDS');
            assert.deepEqual(dataFromEvent.state.micro, {
                entireTraceBounds: baseTraceWindow,
                minimapTraceBounds: newMiniMapBounds,
                timelineTraceWindow: baseTraceWindow
            });
            return [
                2
            ];
        });
    }));
    it('dispatches an event when the bounds are completely reset', /*#__PURE__*/ _async_to_generator(function() {
        var manager, onStateChange, newBounds, newBoundsMilli, dataFromEvent;
        return _ts_generator(this, function(_state) {
            manager = _trace_bounds_js__WEBPACK_IMPORTED_MODULE_1__.TraceBounds.BoundsManager.instance({
                forceNew: true
            }).resetWithNewBounds(baseTraceWindow);
            onStateChange = sinon.spy();
            manager.addEventListener(_trace_bounds_js__WEBPACK_IMPORTED_MODULE_1__.TraceBounds.StateChangedEvent.eventName, onStateChange);
            newBounds = {
                min: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(1000),
                max: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(5000),
                range: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(4000)
            };
            newBoundsMilli = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.traceWindowMilliSeconds(newBounds);
            manager.resetWithNewBounds(newBounds);
            assert.strictEqual(onStateChange.callCount, 1);
            dataFromEvent = onStateChange.firstCall.args[0];
            assert.strictEqual(dataFromEvent.updateType, 'RESET');
            assert.deepEqual(dataFromEvent.state, {
                micro: {
                    entireTraceBounds: newBounds,
                    minimapTraceBounds: newBounds,
                    timelineTraceWindow: newBounds
                },
                milli: {
                    entireTraceBounds: newBoundsMilli,
                    minimapTraceBounds: newBoundsMilli,
                    timelineTraceWindow: newBoundsMilli
                }
            });
            return [
                2
            ];
        });
    }));
    it('can update the visible timeline window and dispatch an event', /*#__PURE__*/ _async_to_generator(function() {
        var manager, onStateChange, newVisibleWindow, dataFromEvent;
        return _ts_generator(this, function(_state) {
            manager = _trace_bounds_js__WEBPACK_IMPORTED_MODULE_1__.TraceBounds.BoundsManager.instance({
                forceNew: true
            }).resetWithNewBounds(baseTraceWindow);
            onStateChange = sinon.spy();
            manager.addEventListener(_trace_bounds_js__WEBPACK_IMPORTED_MODULE_1__.TraceBounds.StateChangedEvent.eventName, onStateChange);
            newVisibleWindow = {
                min: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(10000),
                max: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(20000),
                range: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(10000)
            };
            manager.setTimelineVisibleWindow(newVisibleWindow);
            assert.strictEqual(onStateChange.callCount, 1);
            dataFromEvent = onStateChange.firstCall.args[0];
            assert.strictEqual(dataFromEvent.updateType, 'VISIBLE_WINDOW');
            assert.deepEqual(dataFromEvent.state.micro, {
                entireTraceBounds: baseTraceWindow,
                minimapTraceBounds: baseTraceWindow,
                timelineTraceWindow: newVisibleWindow
            });
            return [
                2
            ];
        });
    }));
    it('does not update or dispatch if the range of the new trace window is less than 1ms', /*#__PURE__*/ _async_to_generator(function() {
        var _manager_state, manager, onStateChange, newVisibleWindow;
        return _ts_generator(this, function(_state) {
            manager = _trace_bounds_js__WEBPACK_IMPORTED_MODULE_1__.TraceBounds.BoundsManager.instance({
                forceNew: true
            }).resetWithNewBounds(baseTraceWindow);
            onStateChange = sinon.spy();
            manager.addEventListener(_trace_bounds_js__WEBPACK_IMPORTED_MODULE_1__.TraceBounds.StateChangedEvent.eventName, onStateChange);
            newVisibleWindow = {
                min: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(10000),
                max: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(10500),
                range: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(500)
            };
            manager.setTimelineVisibleWindow(newVisibleWindow);
            assert.strictEqual(onStateChange.callCount, 0);
            assert.deepEqual((_manager_state = manager.state()) === null || _manager_state === void 0 ? void 0 : _manager_state.micro, {
                entireTraceBounds: baseTraceWindow,
                minimapTraceBounds: baseTraceWindow,
                timelineTraceWindow: baseTraceWindow
            });
            return [
                2
            ];
        });
    }));
    it('does not update or dispatch if the range of the new minimap bounds is less than 1ms', /*#__PURE__*/ _async_to_generator(function() {
        var _manager_state, manager, onStateChange, newMiniMapBounds;
        return _ts_generator(this, function(_state) {
            manager = _trace_bounds_js__WEBPACK_IMPORTED_MODULE_1__.TraceBounds.BoundsManager.instance({
                forceNew: true
            }).resetWithNewBounds(baseTraceWindow);
            onStateChange = sinon.spy();
            manager.addEventListener(_trace_bounds_js__WEBPACK_IMPORTED_MODULE_1__.TraceBounds.StateChangedEvent.eventName, onStateChange);
            newMiniMapBounds = {
                min: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(10000),
                max: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(10500),
                range: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(500)
            };
            manager.setMiniMapBounds(newMiniMapBounds);
            assert.strictEqual(onStateChange.callCount, 0);
            assert.deepEqual((_manager_state = manager.state()) === null || _manager_state === void 0 ? void 0 : _manager_state.micro, {
                entireTraceBounds: baseTraceWindow,
                minimapTraceBounds: baseTraceWindow,
                timelineTraceWindow: baseTraceWindow
            });
            return [
                2
            ];
        });
    }));
}); //# sourceMappingURL=TraceBounds.test.js.map


}),

}]);