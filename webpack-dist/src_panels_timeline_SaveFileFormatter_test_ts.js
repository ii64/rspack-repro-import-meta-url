"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_timeline_SaveFileFormatter_test_ts"],{

/***/ "./src/panels/timeline/SaveFileFormatter.test.ts":
/*!*******************************************************!*\
  !*** ./src/panels/timeline/SaveFileFormatter.test.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/TraceHelpers.js */ "./src/testing/TraceHelpers.ts");
/* harmony import */ var _timeline_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timeline.js */ "./src/panels/timeline/timeline.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


describe('SaveFileFormatter', () => {
    function assertValidJSON(input) {
        try {
            JSON.parse(input);
        }
        catch {
            assert.fail('Parsing input as JSON failed');
        }
    }
    describe('arrayOfObjectsJsonGenerator', () => {
        it('generates JSON where each event is on its own line', async () => {
            const eventOne = { ..._testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.defaultTraceEvent, name: 'event_one' };
            const eventTwo = { ..._testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.defaultTraceEvent, name: 'event_two' };
            const formatted = Array.from(_timeline_js__WEBPACK_IMPORTED_MODULE_1__.SaveFileFormatter.arrayOfObjectsJsonGenerator([eventOne, eventTwo])).join('');
            assertValidJSON(formatted);
            assert.strictEqual(formatted, `[
  {"name":"event_one","tid":0,"pid":0,"ts":0,"cat":"test","ph":"M"},
  {"name":"event_two","tid":0,"pid":0,"ts":0,"cat":"test","ph":"M"}
]`);
        });
    });
    describe('traceJsonGenerator', () => {
        it('contains top level keys for the events and for the metadata', async () => {
            const eventOne = { ..._testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.defaultTraceEvent, name: 'event_one' };
            const eventTwo = { ..._testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.defaultTraceEvent, name: 'event_two' };
            const events = [eventOne, eventTwo];
            const metadata = {
                source: 'DevTools',
                startTime: '1234',
                networkThrottling: '4',
                cpuThrottling: 1,
                hardwareConcurrency: 1,
                enhancedTraceVersion: 1,
            };
            const formatted = Array.from(_timeline_js__WEBPACK_IMPORTED_MODULE_1__.SaveFileFormatter.traceJsonGenerator(events, metadata)).join('');
            assertValidJSON(formatted);
            assert.strictEqual(formatted, `{"metadata": {
  "source": "DevTools",
  "startTime": "1234",
  "networkThrottling": "4",
  "cpuThrottling": 1,
  "hardwareConcurrency": 1,
  "enhancedTraceVersion": 1
},
"traceEvents": [
  {"name":"event_one","tid":0,"pid":0,"ts":0,"cat":"test","ph":"M"},
  {"name":"event_two","tid":0,"pid":0,"ts":0,"cat":"test","ph":"M"}
]}\n`);
        });
        it('will emit {} for the metadata if none is provided', async () => {
            const eventOne = { ..._testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.defaultTraceEvent, name: 'event_one' };
            const eventTwo = { ..._testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.defaultTraceEvent, name: 'event_two' };
            const events = [eventOne, eventTwo];
            const formatted = Array.from(_timeline_js__WEBPACK_IMPORTED_MODULE_1__.SaveFileFormatter.traceJsonGenerator(events, null)).join('');
            assertValidJSON(formatted);
            assert.strictEqual(formatted, `{"metadata": {},
"traceEvents": [
  {"name":"event_one","tid":0,"pid":0,"ts":0,"cat":"test","ph":"M"},
  {"name":"event_two","tid":0,"pid":0,"ts":0,"cat":"test","ph":"M"}
]}\n`);
        });
    });
});


/***/ })

}]);