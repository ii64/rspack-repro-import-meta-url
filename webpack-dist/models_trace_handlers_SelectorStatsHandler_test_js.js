"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_trace_handlers_SelectorStatsHandler_test_js"],{

/***/ "./models/trace/handlers/SelectorStatsHandler.test.js":
/*!************************************************************!*\
  !*** ./models/trace/handlers/SelectorStatsHandler.test.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */ var _trace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../trace.js */ "./models/trace/trace.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


describe('SelectorStatsHandler', () => {
    it('associates timings and stats with each UpdateLayoutEvent', async function () {
        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.SelectorStats.reset();
        const events = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'selector-stats.json.gz');
        for (const event of events) {
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.SelectorStats.handleEvent(event);
        }
        const data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.SelectorStats.data();
        // There are 10 UpdateLayoutTree events that we expect to find
        // SelectorStats for.
        assert.strictEqual(data.dataForUpdateLayoutEvent.size, 10);
        // We need the first updateLayoutEvent that happened before the
        // SelectorStats. This timestamp was found by looking through the trace and
        // finding the first SelectorStats event, and then finding the closest
        // previous UpdateLayoutTreeEvent
        const targetTimeStamp = 400015719531;
        const updateLayoutEvent = events.find(event => {
            return _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isTraceEventUpdateLayoutTree(event) && event.ts === targetTimeStamp;
        });
        assert.isOk(updateLayoutEvent);
        if (!_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isTraceEventUpdateLayoutTree(updateLayoutEvent)) {
            assert.fail('Event was of the wrong type.');
        }
        const selectorInfo = data.dataForUpdateLayoutEvent.get(updateLayoutEvent);
        assert.isOk(selectorInfo);
        // Ensure that we dumped the timings into the event
        assert.lengthOf(selectorInfo.timings, 325);
    });
});
//# sourceMappingURL=SelectorStatsHandler.test.js.map

/***/ })

}]);