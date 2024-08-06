"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_trace_handlers_MemoryHandler_test_js"],{

/***/ "./models/trace/handlers/MemoryHandler.test.js":
/*!*****************************************************!*\
  !*** ./models/trace/handlers/MemoryHandler.test.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */ var _trace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../trace.js */ "./models/trace/trace.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


describe('MemoryHandler', function () {
    beforeEach(() => {
        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.reset();
        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Memory.reset();
    });
    it('gathers update counters', async function () {
        const events = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'web-dev.json.gz');
        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.initialize();
        for (const event of events) {
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.handleEvent(event);
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Memory.handleEvent(event);
        }
        await _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.finalize();
        const data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Memory.data();
        const meta = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.data();
        const topLevelProcesses = Array.from(meta.topLevelRendererIds);
        const expectedPid = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.ProcessID(73704);
        assert.deepEqual(topLevelProcesses, [expectedPid]);
        assert.strictEqual(data.updateCountersByProcess.get(expectedPid)?.length, 158);
    });
});
//# sourceMappingURL=MemoryHandler.test.js.map

/***/ })

}]);