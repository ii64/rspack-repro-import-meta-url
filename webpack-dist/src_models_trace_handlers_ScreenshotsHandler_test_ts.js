"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_models_trace_handlers_ScreenshotsHandler_test_ts"],{

/***/ "./src/models/trace/handlers/ScreenshotsHandler.test.ts":
/*!**************************************************************!*\
  !*** ./src/models/trace/handlers/ScreenshotsHandler.test.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/TraceHelpers.js */ "./src/testing/TraceHelpers.ts");
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./src/testing/TraceLoader.ts");
/* harmony import */ var _trace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../trace.js */ "./src/models/trace/trace.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



describe('ScreenshotsHandler', function () {
    const baseEvent = {
        ..._testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.defaultTraceEvent,
        name: 'Screenshot',
        // Ensure that the screenshots are held against the pid & tid values
        // that match the Browser process and CrBrowserMain in defaultTraceEvents.
        pid: _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.TraceEvents.ProcessID(8017),
        tid: _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.TraceEvents.ThreadID(775),
        ts: _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(0),
        args: {},
        cat: 'test',
        ph: _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.TraceEvents.Phase.OBJECT_SNAPSHOT,
    };
    let baseEvents;
    beforeEach(async function () {
        // The screenshot handler requires the meta handler because it needs
        // to know the browser process and thread IDs. Here, then, we reset
        // and later we will pass events to the meta handler, otherwise the
        // screenshots handler will fail.
        _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.reset();
        _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.initialize();
        _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Screenshots.reset();
    });
    describe('frames', () => {
        it('obtains them if present', async function () {
            const defaultTraceEvents = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.rawEvents(this, 'basic.json.gz');
            baseEvents = [
                ...defaultTraceEvents,
                { ...baseEvent, ts: _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(100) },
                { ...baseEvent, ts: _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(200) },
            ];
            _trace_js__WEBPACK_IMPORTED_MODULE_2__.Helpers.SyntheticEvents.SyntheticEventsManager.initAndActivate(baseEvents);
            for (const event of baseEvents) {
                _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.handleEvent(event);
                _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Screenshots.handleEvent(event);
            }
            await _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.finalize();
            await _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Screenshots.finalize();
            const data = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Screenshots.data();
            assert.strictEqual(data.length, 2);
        });
    });
    describe('presentation timestamps', () => {
        function getMsDifferences(syntheticScreenshotEvents, originalScreenshotEvents) {
            return syntheticScreenshotEvents.map((synEvent, i) => {
                const origEvent = originalScreenshotEvents.at(i);
                const msDifference = (synEvent.ts - origEvent.ts) / 1000;
                return msDifference;
            });
        }
        it('are corrected if frame sequence number is present', async function () {
            // This trace was collected after https://crrev.com/c/4957973 landed.
            const events = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.rawEvents(this, 'about-blank-first.json.gz');
            for (const event of events) {
                _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.handleEvent(event);
                _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Screenshots.handleEvent(event);
            }
            await _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.finalize();
            await _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Screenshots.finalize();
            const syntheticScreenshotEvents = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Screenshots.data();
            const originalScreenshotEvents = events.filter(_trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.TraceEvents.isTraceEventScreenshot);
            assert.strictEqual(syntheticScreenshotEvents.length, originalScreenshotEvents.length);
            for (const oEvent of originalScreenshotEvents) {
                assert.notStrictEqual(oEvent.id, '0x1'); // The id (frame sequence) shouldn't be the old default of 1.
            }
            const msDifferences = getMsDifferences(syntheticScreenshotEvents, originalScreenshotEvents);
            // These values indicate all the screenshots true timings are a tad more to the left.
            assert.deepStrictEqual(msDifferences, [
                -13.079, -16.381, -12.503, -5.405, -14.108, -14.661, -11.944, -14.322, -3.532, -15.821, 0.254,
                -32.22, -15.156, -13.219, -14.464, -16.135, -16.501, -33.165, -15.71, -32.39, -32.445, -30.512,
            ]);
        });
        it('remain the same with older traces', async function () {
            // Any trace captured before  121.0.6156.3 doesn't have the extra data to correct the timestamps.
            const events = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.rawEvents(this, 'web-dev.json.gz');
            for (const event of events) {
                _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.handleEvent(event);
                _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Screenshots.handleEvent(event);
            }
            await _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.finalize();
            await _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Screenshots.finalize();
            const syntheticScreenshotEvents = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Screenshots.data();
            const originalScreenshotEvents = events.filter(_trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.TraceEvents.isTraceEventScreenshot);
            assert.strictEqual(syntheticScreenshotEvents.length, originalScreenshotEvents.length);
            for (const oEvent of originalScreenshotEvents) {
                assert.strictEqual(oEvent.id, '0x1'); // The ids here aren't the new frame sequence, but the hardcoded 1.
            }
            const msDifferences = getMsDifferences(syntheticScreenshotEvents, originalScreenshotEvents);
            // No adjustment made.
            assert.deepStrictEqual(msDifferences, [
                0,
                0,
                0,
                0,
                0,
            ]);
        });
    });
});


/***/ })

}]);