"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_trace_handlers_Threads_test_js"],{

/***/ "./models/trace/handlers/Threads.test.js":
/*!***********************************************!*\
  !*** ./models/trace/handlers/Threads.test.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_timeline_model_timeline_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/timeline_model/timeline_model.js */ "./models/timeline_model/timeline_model.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */ var _trace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../trace.js */ "./models/trace/trace.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('Handler Threads helper', function () {
    it('returns all the threads for a trace that used tracing', async function () {
        const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'web-dev.json.gz');
        const allThreads = Array.from(traceData.Renderer.processes.values()).flatMap(process => {
            return Array.from(process.threads.values());
        });
        const expectedThreadNamesAndTypes = [
            { name: 'CrRendererMain', type: "MAIN_THREAD" /* TraceEngine.Handlers.Threads.ThreadType.MAIN_THREAD */ },
            { name: 'Chrome_ChildIOThread', type: "OTHER" /* TraceEngine.Handlers.Threads.ThreadType.OTHER */ },
            { name: 'Compositor', type: "OTHER" /* TraceEngine.Handlers.Threads.ThreadType.OTHER */ },
            { name: 'ThreadPoolServiceThread', type: "THREAD_POOL" /* TraceEngine.Handlers.Threads.ThreadType.THREAD_POOL */ },
            { name: 'Media', type: "OTHER" /* TraceEngine.Handlers.Threads.ThreadType.OTHER */ },
            { name: 'ThreadPoolForegroundWorker', type: "THREAD_POOL" /* TraceEngine.Handlers.Threads.ThreadType.THREAD_POOL */ },
            { name: 'CompositorTileWorker4', type: "RASTERIZER" /* TraceEngine.Handlers.Threads.ThreadType.RASTERIZER */ },
            { name: 'CompositorTileWorker2', type: "RASTERIZER" /* TraceEngine.Handlers.Threads.ThreadType.RASTERIZER */ },
            { name: 'CompositorTileWorker1', type: "RASTERIZER" /* TraceEngine.Handlers.Threads.ThreadType.RASTERIZER */ },
            { name: 'CompositorTileWorkerBackground', type: "RASTERIZER" /* TraceEngine.Handlers.Threads.ThreadType.RASTERIZER */ },
            { name: 'ThreadPoolForegroundWorker', type: "THREAD_POOL" /* TraceEngine.Handlers.Threads.ThreadType.THREAD_POOL */ },
            { name: 'CompositorTileWorker3', type: "RASTERIZER" /* TraceEngine.Handlers.Threads.ThreadType.RASTERIZER */ },
        ];
        const threads = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Handlers.Threads.threadsInTrace(traceData);
        assert.strictEqual(threads.length, allThreads.length);
        assert.deepEqual(threads.map(thread => ({ name: thread.name, type: thread.type })), expectedThreadNamesAndTypes);
    });
    it('returns all the threads for a trace that used CPU profiling', async function () {
        // Bit of extra setup required: we need to mimic what the panel does where
        // it takes the CDP Profile and wraps it in fake trace events, before then
        // passing that through to the new engine.
        const rawEvents = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.rawCPUProfile(this, 'node-fibonacci-website.cpuprofile.gz');
        const events = _models_timeline_model_timeline_model_js__WEBPACK_IMPORTED_MODULE_0__.TimelineJSProfile.TimelineJSProfileProcessor.createFakeTraceFromCpuProfile(rawEvents, _trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ThreadID(1));
        const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.executeTraceEngineOnFileContents(events);
        // Check that we did indeed parse this properly as a CPU Profile.
        assert.strictEqual(traceData.Renderer.processes.size, 0);
        assert.strictEqual(traceData.Samples.profilesInProcess.size, 1);
        const threads = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Handlers.Threads.threadsInTrace(traceData);
        assert.strictEqual(threads.length, 1);
        assert.strictEqual(threads.at(0)?.type, "CPU_PROFILE" /* TraceEngine.Handlers.Threads.ThreadType.CPU_PROFILE */);
        assert.strictEqual(threads.at(0)?.entries.length, 875);
    });
});
//# sourceMappingURL=Threads.test.js.map

/***/ })

}]);