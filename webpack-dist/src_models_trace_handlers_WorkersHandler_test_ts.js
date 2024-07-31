"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_models_trace_handlers_WorkersHandler_test_ts"],{

/***/ "./src/models/trace/handlers/WorkersHandler.test.ts":
/*!**********************************************************!*\
  !*** ./src/models/trace/handlers/WorkersHandler.test.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./src/testing/TraceLoader.ts");
/* harmony import */ var _trace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../trace.js */ "./src/models/trace/trace.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


describe('WorkersHandler', () => {
    beforeEach(async function () {
        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Workers.reset();
        const events = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'two-workers.json.gz');
        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Workers.initialize();
        for (const event of events) {
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Workers.handleEvent(event);
        }
        await _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Workers.finalize();
    });
    afterEach(() => {
        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Workers.reset();
    });
    it('collects the worker session ID metadata events', async function () {
        const data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Workers.data();
        assert.deepEqual(data.workerSessionIdEvents, [
            {
                name: 'TracingSessionIdForWorker',
                cat: 'disabled-by-default-devtools.timeline',
                ph: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.Phase.INSTANT,
                tid: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.ThreadID(37651),
                pid: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.ProcessID(71044),
                s: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.TraceEventScope.THREAD,
                ts: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(107351291649),
                tts: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(934),
                args: {
                    data: {
                        frame: '372333E30ECABDA706136ED37FD9FA2B',
                        url: 'https://chromedevtools.github.io/performance-stories/two-workers/fib-worker.js',
                        workerId: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.WorkerId('990A76F8BED5B771144F505FF9313D06'),
                        workerThreadId: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.ThreadID(37651),
                    },
                },
            },
            {
                name: 'TracingSessionIdForWorker',
                cat: 'disabled-by-default-devtools.timeline',
                ph: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.Phase.INSTANT,
                tid: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.ThreadID(35351),
                pid: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.ProcessID(71044),
                s: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.TraceEventScope.THREAD,
                ts: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(107351292507),
                tts: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(817),
                args: {
                    data: {
                        frame: '372333E30ECABDA706136ED37FD9FA2B',
                        url: 'https://chromedevtools.github.io/performance-stories/two-workers/fib-worker.js',
                        workerId: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.WorkerId('E59E70C44C7664657CE822BB7DC54085'),
                        workerThreadId: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.ThreadID(35351),
                    },
                },
            },
        ]);
    });
    it('collects thread id for workers', async function () {
        const data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Workers.data();
        const [[thread1, worker1], [thread2, worker2]] = data.workerIdByThread.entries();
        assert.strictEqual(thread1, 37651);
        assert.strictEqual(worker1, '990A76F8BED5B771144F505FF9313D06');
        assert.strictEqual(thread2, 35351);
        assert.strictEqual(worker2, 'E59E70C44C7664657CE822BB7DC54085');
    });
    it('collects the url of workers', async function () {
        const data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Workers.data();
        const [[thread1, worker1], [thread2, worker2]] = data.workerURLById.entries();
        assert.strictEqual(thread1, '990A76F8BED5B771144F505FF9313D06');
        assert.strictEqual(worker1, 'https://chromedevtools.github.io/performance-stories/two-workers/fib-worker.js');
        assert.strictEqual(thread2, 'E59E70C44C7664657CE822BB7DC54085');
        assert.strictEqual(worker2, 'https://chromedevtools.github.io/performance-stories/two-workers/fib-worker.js');
    });
});


/***/ })

}]);