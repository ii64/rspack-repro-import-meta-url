"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_trace_extras_FilmStrip_test_js"],{

/***/ "./models/trace/extras/FilmStrip.test.js":
/*!***********************************************!*\
  !*** ./models/trace/extras/FilmStrip.test.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */ var _trace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../trace.js */ "./models/trace/trace.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithEnvironment)('FilmStrip', function () {
    it('identifies the frames from a trace', async function () {
        const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.traceEngine(this, 'web-dev.json.gz');
        const filmStrip = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Extras.FilmStrip.fromTraceData(traceData);
        assert.lengthOf(filmStrip.frames, 5);
    });
    it('caches the film strip based on the trace data and the zero time', async function () {
        const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.traceEngine(this, 'web-dev.json.gz');
        const filmStrip1 = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Extras.FilmStrip.fromTraceData(traceData);
        const filmStrip2 = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Extras.FilmStrip.fromTraceData(traceData);
        // It is from cache so you get back the exact same object.
        assert.strictEqual(filmStrip1, filmStrip2);
        const filmStrip3 = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Extras.FilmStrip.fromTraceData(traceData, _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(0));
        const filmStrip4 = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Extras.FilmStrip.fromTraceData(traceData, _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(5));
        // Not equal as the calls had different start times.
        assert.notStrictEqual(filmStrip3, filmStrip4);
    });
    it('exposes the snapshot string for each frame', async function () {
        const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.traceEngine(this, 'web-dev.json.gz');
        const filmStrip = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Extras.FilmStrip.fromTraceData(traceData);
        assert.isTrue(filmStrip.frames.every(frame => {
            return typeof frame.screenshotEvent.args.dataUri === 'string' && frame.screenshotEvent.args.dataUri.length > 0;
        }));
    });
    it('can use a custom zero time to filter out screenshots', async function () {
        const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.traceEngine(this, 'web-dev.json.gz');
        const filmStrip = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Extras.FilmStrip.fromTraceData(traceData);
        // Set a custom zero time after the first screenshot and ensure that we now only have four events.
        const newCustomZeroTime = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(filmStrip.frames[0].screenshotEvent.ts + 1000);
        const newFilmStrip = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Extras.FilmStrip.fromTraceData(traceData, newCustomZeroTime);
        // Check that the new film strip is all the frames other than the first, now we have set a custom time.
        assert.deepEqual(newFilmStrip.frames.map(f => f.screenshotEvent.args.dataUri), [
            filmStrip.frames[1].screenshotEvent.args.dataUri,
            filmStrip.frames[2].screenshotEvent.args.dataUri,
            filmStrip.frames[3].screenshotEvent.args.dataUri,
            filmStrip.frames[4].screenshotEvent.args.dataUri,
        ]);
    });
    it('can return the frame closest to a given timestamp', async function () {
        const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.traceEngine(this, 'web-dev.json.gz');
        const filmStrip = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Extras.FilmStrip.fromTraceData(traceData);
        const frameTimestamps = filmStrip.frames.map(frame => frame.screenshotEvent.ts);
        assert.deepEqual(frameTimestamps, [1020034823345, 1020034961883, 1020035045298, 1020035061981, 1020035112030]);
        const timestampNearestFirstFrame = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(frameTimestamps[0] + 10);
        assert.strictEqual(_trace_js__WEBPACK_IMPORTED_MODULE_2__.Extras.FilmStrip.frameClosestToTimestamp(filmStrip, timestampNearestFirstFrame), filmStrip.frames.at(0));
        const timestampNearestThirdFrame = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(frameTimestamps[2] + 10);
        assert.strictEqual(_trace_js__WEBPACK_IMPORTED_MODULE_2__.Extras.FilmStrip.frameClosestToTimestamp(filmStrip, timestampNearestThirdFrame), filmStrip.frames.at(2));
        const timestampBeforeAnyFrames = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(frameTimestamps[0] - 100);
        assert.isNull(_trace_js__WEBPACK_IMPORTED_MODULE_2__.Extras.FilmStrip.frameClosestToTimestamp(filmStrip, timestampBeforeAnyFrames));
    });
});
//# sourceMappingURL=FilmStrip.test.js.map

/***/ })

}]);