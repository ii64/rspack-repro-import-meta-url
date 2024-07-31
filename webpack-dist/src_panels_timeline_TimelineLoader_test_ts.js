"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_timeline_TimelineLoader_test_ts"],{

/***/ "./src/panels/timeline/TimelineLoader.test.ts":
/*!****************************************************!*\
  !*** ./src/panels/timeline/TimelineLoader.test.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/TraceHelpers.js */ "./src/testing/TraceHelpers.ts");
/* harmony import */ var _timeline_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timeline.js */ "./src/panels/timeline/timeline.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



async function loadWebDevTraceAsFile() {
    const file = new URL(/* asset import */ __webpack_require__(/*! ./fixtures/traces/web-dev.json.gz */ "./src/panels/timeline/fixtures/traces/web-dev.json.gz?5493"), __webpack_require__.b);
    const response = await fetch(file);
    const asBlob = await response.blob();
    const asFile = new File([asBlob], 'web-dev.json.gz', {
        type: 'application/gzip',
    });
    return asFile;
}
async function loadBasicCpuProfileAsFile() {
    const file = new URL(/* asset import */ __webpack_require__(/*! ./fixtures/traces/node-fibonacci-website.cpuprofile.gz */ "./src/panels/timeline/fixtures/traces/node-fibonacci-website.cpuprofile.gz?2f51"), __webpack_require__.b);
    const response = await fetch(file);
    const asBlob = await response.blob();
    const asFile = new File([asBlob], 'node-fibonacci-website.cpuprofile.gz', {
        type: 'application/gzip',
    });
    return asFile;
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithEnvironment)('TimelineLoader', () => {
    const loadingStartedSpy = sinon.spy();
    const loadingProgressSpy = sinon.spy();
    const processingStartedSpy = sinon.spy();
    const loadingCompleteSpy = sinon.spy();
    const recordingProgressSpy = sinon.spy();
    const loadingCompleteForTestSpy = sinon.spy();
    const client = {
        async loadingStarted() {
            loadingStartedSpy();
        },
        async loadingProgress(progress) {
            loadingProgressSpy(progress);
        },
        async processingStarted() {
            processingStartedSpy();
        },
        async loadingComplete(collectedEvents, exclusiveFilter, isCpuProfile) {
            loadingCompleteSpy(collectedEvents, exclusiveFilter, isCpuProfile);
        },
        recordingProgress: function (usage) {
            recordingProgressSpy(usage);
        },
        loadingCompleteForTest: function () {
            loadingCompleteForTestSpy();
        },
    };
    beforeEach(() => {
        loadingStartedSpy.resetHistory();
        loadingProgressSpy.resetHistory();
        processingStartedSpy.resetHistory();
        loadingCompleteSpy.resetHistory();
        recordingProgressSpy.resetHistory();
        loadingCompleteForTestSpy.resetHistory();
    });
    it('can load a saved trace file', async () => {
        const file = await loadWebDevTraceAsFile();
        const loader = await _timeline_js__WEBPACK_IMPORTED_MODULE_2__.TimelineLoader.TimelineLoader.loadFromFile(file, client);
        await loader.traceFinalizedForTest();
        assert.isTrue(loadingStartedSpy.calledOnce);
        // Exact number is deterministic so we can assert, but the fact it was 29
        // calls doesn't really matter. We just want to check it got called "a
        // bunch of times".
        assert.strictEqual(loadingProgressSpy.callCount, 29);
        assert.isTrue(processingStartedSpy.calledOnce);
        assert.isTrue(loadingCompleteSpy.calledOnce);
        // Get the arguments of the first (and only) call to the loadingComplete
        // function. TS doesn't know what the types are (they are [any, any] by
        // default), so we tell it that they align with the types of the
        // loadingComplete parameters.
        const [collectedEvents, exclusiveFilter, isCpuProfile] = loadingCompleteSpy.args[0];
        assert.isNull(exclusiveFilter); // We are not filtering out any events for this trace.
        // Ensure that we loaded something that looks about right!
        assert.lengthOf(collectedEvents, 8252);
        assert.isFalse(isCpuProfile);
    });
    it('can load a saved CPUProfile file', async () => {
        const file = await loadBasicCpuProfileAsFile();
        const loader = await _timeline_js__WEBPACK_IMPORTED_MODULE_2__.TimelineLoader.TimelineLoader.loadFromFile(file, client);
        await loader.traceFinalizedForTest();
        assert.isTrue(loadingStartedSpy.calledOnce);
        // For the CPU Profile we are testing, loadingProgress will be called three times, because the
        // file is not that big.
        assert.strictEqual(loadingProgressSpy.callCount, 3);
        assert.isTrue(processingStartedSpy.calledOnce);
        assert.isTrue(loadingCompleteSpy.calledOnce);
        // Get the arguments of the first (and only) call to the loadingComplete
        // function. TS doesn't know what the types are (they are [any, any] by
        // default), so we tell it that they align with the types of the
        // loadingComplete parameters.
        const [collectedEvents, /* exclusiveFilter */ , isCpuProfile] = loadingCompleteSpy.args[0];
        // We create fake trace event for CPU profile, includes one for
        // TracingStartedInPage, one for metadata, one for root, and one for CPU
        // profile
        assert.lengthOf(collectedEvents, 4);
        assert.isTrue(isCpuProfile);
    });
    it('can load recorded trace events correctly', async () => {
        const testTraceEvents = [
            (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_1__.makeInstantEvent)('test-event-1', 1),
            (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_1__.makeInstantEvent)('test-event-2', 2),
        ];
        const loader = _timeline_js__WEBPACK_IMPORTED_MODULE_2__.TimelineLoader.TimelineLoader.loadFromEvents(testTraceEvents, client);
        await loader.traceFinalizedForTest();
        assert.isTrue(loadingStartedSpy.calledOnce);
        // For the trace events we are testing, loadingProgress will be called only once, because the
        // fake trace events array is very short.
        assert.isTrue(loadingProgressSpy.calledOnce);
        assert.isTrue(processingStartedSpy.calledOnce);
        assert.isTrue(loadingCompleteSpy.calledOnce);
        // Get the arguments of the first (and only) call to the loadingComplete
        // function. TS doesn't know what the types are (they are [any, any] by
        // default), so we tell it that they align with the types of the
        // loadingComplete parameters.
        const [collectedEvents, exclusiveFilter, isCpuProfile] = loadingCompleteSpy.args[0];
        assert.isNull(exclusiveFilter);
        // Ensure that we loaded something that looks about right!
        assert.lengthOf(collectedEvents, testTraceEvents.length);
        assert.isFalse(isCpuProfile);
    });
    it('can load recorded CPUProfile correctly', async () => {
        const testProfile = { nodes: [], startTime: 0, endTime: 0 };
        const loader = _timeline_js__WEBPACK_IMPORTED_MODULE_2__.TimelineLoader.TimelineLoader.loadFromCpuProfile(testProfile, client);
        await loader.traceFinalizedForTest();
        assert.isTrue(loadingStartedSpy.calledOnce);
        // For the CPU Profile we are testing, loadingProgress will be called only once, because the
        // fake Profile is basically empty.
        assert.strictEqual(loadingProgressSpy.callCount, 1);
        assert.isTrue(processingStartedSpy.calledOnce);
        assert.isTrue(loadingCompleteSpy.calledOnce);
        // Get the arguments of the first (and only) call to the loadingComplete
        // function. TS doesn't know what the types are (they are [any, any] by
        // default), so we tell it that they align with the types of the
        // loadingComplete parameters.
        const [collectedEvents, /* exclusiveFilter */ , isCpuProfile] = loadingCompleteSpy.args[0];
        // We create fake trace event for CPU profile, includes one for TracingStartedInPage,
        // one for metadata, one for root, and one for CPU profile
        assert.lengthOf(collectedEvents, 4);
        assert.isTrue(isCpuProfile);
    });
});


/***/ }),

/***/ "./src/panels/timeline/fixtures/traces/node-fibonacci-website.cpuprofile.gz?2f51":
/*!**********************************************************************************!*\
  !*** ./src/panels/timeline/fixtures/traces/node-fibonacci-website.cpuprofile.gz ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "99dc9b579fcf1b175e81.gz";

/***/ }),

/***/ "./src/panels/timeline/fixtures/traces/web-dev.json.gz?5493":
/*!*************************************************************!*\
  !*** ./src/panels/timeline/fixtures/traces/web-dev.json.gz ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "965f25425589c4e290f6.gz";

/***/ })

}]);