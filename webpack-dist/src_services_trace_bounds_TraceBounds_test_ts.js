"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_services_trace_bounds_TraceBounds_test_ts"],{

/***/ "./src/services/trace_bounds/TraceBounds.test.ts":
/*!*******************************************************!*\
  !*** ./src/services/trace_bounds/TraceBounds.test.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/trace/trace.js */ "./src/models/trace/trace.ts");
/* harmony import */ var _trace_bounds_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trace_bounds.js */ "./src/services/trace_bounds/trace_bounds.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


const baseTraceWindow = {
    min: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(0),
    max: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(10000),
    range: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(10000),
};
const baseTraceWindowMilli = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.traceWindowMilliSeconds(baseTraceWindow);
describe('TraceBounds', () => {
    it('is initialized with the entire trace window and sets the state accordingly', async () => {
        const manager = _trace_bounds_js__WEBPACK_IMPORTED_MODULE_1__.TraceBounds.BoundsManager.instance({ forceNew: true }).resetWithNewBounds(baseTraceWindow);
        assert.deepEqual(manager.state(), {
            micro: {
                entireTraceBounds: baseTraceWindow,
                minimapTraceBounds: baseTraceWindow,
                timelineTraceWindow: baseTraceWindow,
            },
            milli: {
                entireTraceBounds: baseTraceWindowMilli,
                minimapTraceBounds: baseTraceWindowMilli,
                timelineTraceWindow: baseTraceWindowMilli,
            },
        });
    });
    it('can update the minimap bounds and dispatches a state change event', async () => {
        const manager = _trace_bounds_js__WEBPACK_IMPORTED_MODULE_1__.TraceBounds.BoundsManager.instance({ forceNew: true }).resetWithNewBounds(baseTraceWindow);
        const onStateChange = sinon.spy();
        manager.addEventListener(_trace_bounds_js__WEBPACK_IMPORTED_MODULE_1__.TraceBounds.StateChangedEvent.eventName, onStateChange);
        const newMiniMapBounds = {
            min: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(10000),
            max: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(20000),
            range: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(10000),
        };
        manager.setMiniMapBounds(newMiniMapBounds);
        assert.strictEqual(onStateChange.callCount, 1);
        const dataFromEvent = onStateChange.firstCall.args[0];
        assert.strictEqual(dataFromEvent.updateType, 'MINIMAP_BOUNDS');
        assert.deepEqual(dataFromEvent.state.micro, {
            entireTraceBounds: baseTraceWindow,
            minimapTraceBounds: newMiniMapBounds,
            timelineTraceWindow: baseTraceWindow,
        });
    });
    it('dispatches an event when the bounds are completely reset', async () => {
        const manager = _trace_bounds_js__WEBPACK_IMPORTED_MODULE_1__.TraceBounds.BoundsManager.instance({ forceNew: true }).resetWithNewBounds(baseTraceWindow);
        const onStateChange = sinon.spy();
        manager.addEventListener(_trace_bounds_js__WEBPACK_IMPORTED_MODULE_1__.TraceBounds.StateChangedEvent.eventName, onStateChange);
        const newBounds = {
            min: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(1000),
            max: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(5000),
            range: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(4000),
        };
        const newBoundsMilli = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.traceWindowMilliSeconds(newBounds);
        manager.resetWithNewBounds(newBounds);
        assert.strictEqual(onStateChange.callCount, 1);
        const dataFromEvent = onStateChange.firstCall.args[0];
        assert.strictEqual(dataFromEvent.updateType, 'RESET');
        assert.deepEqual(dataFromEvent.state, {
            micro: {
                entireTraceBounds: newBounds,
                minimapTraceBounds: newBounds,
                timelineTraceWindow: newBounds,
            },
            milli: {
                entireTraceBounds: newBoundsMilli,
                minimapTraceBounds: newBoundsMilli,
                timelineTraceWindow: newBoundsMilli,
            },
        });
    });
    it('can update the visible timeline window and dispatch an event', async () => {
        const manager = _trace_bounds_js__WEBPACK_IMPORTED_MODULE_1__.TraceBounds.BoundsManager.instance({ forceNew: true }).resetWithNewBounds(baseTraceWindow);
        const onStateChange = sinon.spy();
        manager.addEventListener(_trace_bounds_js__WEBPACK_IMPORTED_MODULE_1__.TraceBounds.StateChangedEvent.eventName, onStateChange);
        const newVisibleWindow = {
            min: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(10000),
            max: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(20000),
            range: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(10000),
        };
        manager.setTimelineVisibleWindow(newVisibleWindow);
        assert.strictEqual(onStateChange.callCount, 1);
        const dataFromEvent = onStateChange.firstCall.args[0];
        assert.strictEqual(dataFromEvent.updateType, 'VISIBLE_WINDOW');
        assert.deepEqual(dataFromEvent.state.micro, {
            entireTraceBounds: baseTraceWindow,
            minimapTraceBounds: baseTraceWindow,
            timelineTraceWindow: newVisibleWindow,
        });
    });
    it('does not update or dispatch if the range of the new trace window is less than 1ms', async () => {
        const manager = _trace_bounds_js__WEBPACK_IMPORTED_MODULE_1__.TraceBounds.BoundsManager.instance({ forceNew: true }).resetWithNewBounds(baseTraceWindow);
        const onStateChange = sinon.spy();
        manager.addEventListener(_trace_bounds_js__WEBPACK_IMPORTED_MODULE_1__.TraceBounds.StateChangedEvent.eventName, onStateChange);
        const newVisibleWindow = {
            min: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(10000),
            max: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(10500),
            range: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(500),
        };
        manager.setTimelineVisibleWindow(newVisibleWindow);
        assert.strictEqual(onStateChange.callCount, 0);
        assert.deepEqual(manager.state()?.micro, {
            entireTraceBounds: baseTraceWindow,
            minimapTraceBounds: baseTraceWindow,
            timelineTraceWindow: baseTraceWindow,
        });
    });
    it('does not update or dispatch if the range of the new minimap bounds is less than 1ms', async () => {
        const manager = _trace_bounds_js__WEBPACK_IMPORTED_MODULE_1__.TraceBounds.BoundsManager.instance({ forceNew: true }).resetWithNewBounds(baseTraceWindow);
        const onStateChange = sinon.spy();
        manager.addEventListener(_trace_bounds_js__WEBPACK_IMPORTED_MODULE_1__.TraceBounds.StateChangedEvent.eventName, onStateChange);
        const newMiniMapBounds = {
            min: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(10000),
            max: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(10500),
            range: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(500),
        };
        manager.setMiniMapBounds(newMiniMapBounds);
        assert.strictEqual(onStateChange.callCount, 0);
        assert.deepEqual(manager.state()?.micro, {
            entireTraceBounds: baseTraceWindow,
            minimapTraceBounds: baseTraceWindow,
            timelineTraceWindow: baseTraceWindow,
        });
    });
});


/***/ })

}]);