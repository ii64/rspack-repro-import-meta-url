"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_timeline_EventsSerializer_test_ts"],{

/***/ "./src/panels/timeline/EventsSerializer.test.ts":
/*!******************************************************!*\
  !*** ./src/panels/timeline/EventsSerializer.test.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/trace/trace.js */ "./src/models/trace/trace.ts");
/* harmony import */ var _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/TraceHelpers.js */ "./src/testing/TraceHelpers.ts");
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/TraceLoader.js */ "./src/testing/TraceLoader.ts");
/* harmony import */ var _timeline_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timeline.js */ "./src/panels/timeline/timeline.ts");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




function findFirstEntry(allEntries, predicate) {
    const entry = allEntries.find(entry => predicate(entry));
    if (!entry) {
        throw new Error('Could not find expected entry.');
    }
    return entry;
}
describe('EventsSerializer', () => {
    it('correctly implements a bidirectional key <-> event mapping', async function () {
        const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'basic-stack.json.gz');
        const eventsSerializer = new _timeline_js__WEBPACK_IMPORTED_MODULE_3__.EventsSerializer.EventsSerializer();
        const mainThread = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getMainThread)(traceData.Renderer);
        // Find first 'Timer Fired' entry in the trace
        const rawEntry = findFirstEntry(mainThread.entries, entry => {
            return entry.name === 'TimerFire';
        });
        const syntheticEvent = traceData.NetworkRequests.byTime[0];
        const profileCall = findFirstEntry(mainThread.entries, entry => _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.TraceEvents.isProfileCall(entry));
        const rawEntryKey = eventsSerializer.keyForEvent(rawEntry);
        const syntheticEventKey = eventsSerializer.keyForEvent(syntheticEvent);
        const profileCallKey = eventsSerializer.keyForEvent(profileCall);
        // Test event -> key mappings
        assert.deepEqual(rawEntryKey, 'r-8036');
        assert.deepEqual(syntheticEventKey, 's-2078');
        assert.deepEqual(profileCallKey, 'p-55385-259-38-4');
        assert.isOk(rawEntryKey);
        assert.isOk(syntheticEventKey);
        assert.isOk(profileCallKey);
        const resolvedRawEntry = eventsSerializer.eventForKey(rawEntryKey, traceData);
        const resolvedSyntheticEntry = eventsSerializer.eventForKey(syntheticEventKey, traceData);
        const resolvedProfileCall = eventsSerializer.eventForKey(profileCallKey, traceData);
        // Test key -> event mappings
        assert.strictEqual(resolvedRawEntry, rawEntry);
        assert.strictEqual(resolvedSyntheticEntry, syntheticEvent);
        assert.strictEqual(resolvedProfileCall, profileCall);
    });
});


/***/ })

}]);