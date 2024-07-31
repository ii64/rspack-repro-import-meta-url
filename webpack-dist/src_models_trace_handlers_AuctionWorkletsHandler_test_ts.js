"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_models_trace_handlers_AuctionWorkletsHandler_test_ts"],{

/***/ "./src/models/trace/handlers/AuctionWorkletsHandler.test.ts":
/*!******************************************************************!*\
  !*** ./src/models/trace/handlers/AuctionWorkletsHandler.test.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./src/testing/TraceLoader.ts");
/* harmony import */ var _trace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../trace.js */ "./src/models/trace/trace.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


describe('AuctionWorkletsHandler', function () {
    beforeEach(() => {
        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.AuctionWorklets.reset();
    });
    const expectedPIDsAndTypes = [
        {
            pid: 776435,
            type: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.AuctionWorkletType.SELLER,
        },
        {
            pid: 776436,
            type: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.AuctionWorkletType.BIDDER,
        },
        {
            pid: 776449,
            type: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.AuctionWorkletType.BIDDER,
        },
    ];
    it('parses and finds worklets from the metadata events', async function () {
        const events = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'fenced-frame-fledge.json.gz');
        for (const event of events) {
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.AuctionWorklets.handleEvent(event);
        }
        await _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.AuctionWorklets.finalize();
        const data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.AuctionWorklets.data();
        assert.strictEqual(data.worklets.size, 3);
        const actualPIDsAndTypes = Array.from(data.worklets.values()).map(worklet => ({ pid: worklet.pid, type: worklet.type }));
        assert.deepEqual(actualPIDsAndTypes, expectedPIDsAndTypes);
    });
    it('finds the utility thread for each worklet', async function () {
        const events = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'fenced-frame-fledge.json.gz');
        for (const event of events) {
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.AuctionWorklets.handleEvent(event);
        }
        await _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.AuctionWorklets.finalize();
        const data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.AuctionWorklets.data();
        const expectedCrUtilityPIDsAndTIDs = [
            {
                pid: 776435,
                tid: 1,
            },
            {
                pid: 776436,
                tid: 1,
            },
            {
                pid: 776449,
                tid: 1,
            },
        ];
        const actualUtilityPIDsAndTIDs = Array.from(data.worklets.values())
            .map(worklet => ({ pid: worklet.pid, tid: worklet.args.data.utilityThread.tid }));
        assert.deepEqual(actualUtilityPIDsAndTIDs, expectedCrUtilityPIDsAndTIDs);
    });
    it('finds the AuctionV8HelperThread thread for each worklet', async function () {
        const events = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'fenced-frame-fledge.json.gz');
        for (const event of events) {
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.AuctionWorklets.handleEvent(event);
        }
        await _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.AuctionWorklets.finalize();
        const data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.AuctionWorklets.data();
        const expectedAuctionV8PIDsAndTIDs = [
            {
                pid: 776435,
                tid: 6,
            },
            {
                pid: 776436,
                tid: 6,
            },
            {
                pid: 776449,
                tid: 6,
            },
        ];
        const actualAuctionV8PIDsAndTIDs = Array.from(data.worklets.values())
            .map(worklet => ({ pid: worklet.pid, tid: worklet.args.data.v8HelperThread.tid }));
        assert.deepEqual(actualAuctionV8PIDsAndTIDs, expectedAuctionV8PIDsAndTIDs);
    });
    it('pairs up Running and DoneWith events', async function () {
        // All of these events have a matching pair of events (see
        // AuctionWorkletsHandler for more information on these events.)
        const events = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'fenced-frame-fledge.json.gz');
        for (const event of events) {
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.AuctionWorklets.handleEvent(event);
        }
        await _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.AuctionWorklets.finalize();
        const data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.AuctionWorklets.data();
        assert.strictEqual(data.worklets.size, 3);
        for (const worklet of data.worklets.values()) {
            assert.exists(worklet.args.data.runningInProcessEvent);
            assert.exists(worklet.args.data.doneWithProcessEvent);
        }
    });
    it('can find worklets just from the DoneWith events', async function () {
        const actualEvents = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'fenced-frame-fledge.json.gz');
        const events = actualEvents.filter(e => {
            // Remove all RunningWith events
            return _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isTraceEventAuctionWorkletRunningInProcess(e) === false;
        });
        for (const event of events) {
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.AuctionWorklets.handleEvent(event);
        }
        await _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.AuctionWorklets.finalize();
        const data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.AuctionWorklets.data();
        assert.strictEqual(data.worklets.size, 3);
        // The expected data is ordered by PID; this order is correct in the
        // un-modified set of events but because this event removes some events, we
        // sort the found worklets by PID to ensure that the comparison is still
        // successful. We are not interested in the order these events come.
        const actualPIDsAndTypes = Array.from(data.worklets.values())
            .sort((a, b) => a.pid - b.pid)
            .map(worklet => ({ pid: worklet.pid, type: worklet.type }));
        assert.deepEqual(actualPIDsAndTypes, expectedPIDsAndTypes);
    });
    it('can find worklets just from the RunningIn events', async function () {
        const actualEvents = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'fenced-frame-fledge.json.gz');
        const events = actualEvents.filter(e => {
            // Remove all DoneWith events
            return _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isTraceEventAuctionWorkletDoneWithProcess(e) === false;
        });
        for (const event of events) {
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.AuctionWorklets.handleEvent(event);
        }
        await _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.AuctionWorklets.finalize();
        const data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.AuctionWorklets.data();
        assert.strictEqual(data.worklets.size, 3);
        // The expected data is ordered by PID; this order is correct in the
        // un-modified set of events but because this event removes some events, we
        // sort the found worklets by PID to ensure that the comparison is still
        // successful. We are not interested in the order these events come.
        const actualPIDsAndTypes = Array.from(data.worklets.values())
            .sort((a, b) => a.pid - b.pid)
            .map(worklet => ({ pid: worklet.pid, type: worklet.type }));
        assert.deepEqual(actualPIDsAndTypes, expectedPIDsAndTypes);
    });
});


/***/ })

}]);