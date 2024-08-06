"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_trace_TracingManager_test_js"],{

/***/ "./models/trace/TracingManager.test.js":
/*!*********************************************!*\
  !*** ./models/trace/TracingManager.test.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */ var _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/TraceHelpers.js */ "./testing/TraceHelpers.js");
/* harmony import */ var _trace_trace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../trace/trace.js */ "./models/trace/trace.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




class FakeClient {
    traceEventsCollected(_events) {
    }
    tracingComplete() {
    }
    tracingBufferUsage(_usage) {
    }
    eventsRetrievalProgress(_progress) {
    }
}
const fakeEvents = [
    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeInstantEvent)('test-event-1', 1),
    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeInstantEvent)('test-event-2', 2),
];
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.describeWithMockConnection)('TracingManager', () => {
    beforeEach(() => {
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.setMockConnectionResponseHandler)('Tracing.start', () => {
            return {};
        });
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.setMockConnectionResponseHandler)('Tracing.end', () => {
            return {};
        });
    });
    it('sends bufferUsage to the client', async () => {
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
        const manager = new _trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.TracingManager.TracingManager(target);
        const client = new FakeClient();
        const bufferUsageSpy = sinon.spy(client, 'tracingBufferUsage');
        await manager.start(client, 'devtools-timeline', 'options');
        manager.bufferUsage(10);
        assert.isTrue(bufferUsageSpy.calledWith(10));
    });
    it('sends events to the client when they are collected and updates the client with progress', async () => {
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
        const manager = new _trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.TracingManager.TracingManager(target);
        const client = new FakeClient();
        const eventsRetrievalProgressSpy = sinon.spy(client, 'eventsRetrievalProgress');
        const eventsCollectedSpy = sinon.spy(client, 'traceEventsCollected');
        await manager.start(client, 'devtools-timeline', 'options');
        // Set the event buffer size to 20
        manager.bufferUsage(0, 20);
        manager.eventsCollected(fakeEvents);
        assert.isTrue(eventsCollectedSpy.calledWith(fakeEvents));
        assert.isTrue(eventsRetrievalProgressSpy.calledWith(2 / 20 /* 2 events, and the buffer size is 20 */));
    });
    it('updates the buffer size if we saw more events than the last buffer size', async () => {
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
        const manager = new _trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.TracingManager.TracingManager(target);
        const client = new FakeClient();
        const eventsRetrievalProgressSpy = sinon.spy(client, 'eventsRetrievalProgress');
        const eventsCollectedSpy = sinon.spy(client, 'traceEventsCollected');
        await manager.start(client, 'devtools-timeline', 'options');
        // Set the event buffer size to 1
        manager.bufferUsage(0, 1);
        manager.eventsCollected(fakeEvents);
        assert.isTrue(eventsCollectedSpy.calledWith(fakeEvents));
        assert.isTrue(eventsRetrievalProgressSpy.calledWith(2 / 2 /* 2 events, and the buffer size is now updated to 2 */));
    });
    it('notifies the client when tracing is complete', async () => {
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
        const manager = new _trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.TracingManager.TracingManager(target);
        const client = new FakeClient();
        const tracingCompleteSpy = sinon.spy(client, 'tracingComplete');
        await manager.start(client, 'devtools-timeline', 'options');
        manager.bufferUsage(0, 10);
        manager.eventsCollected(fakeEvents);
        manager.tracingComplete();
        assert.isTrue(tracingCompleteSpy.calledOnce);
    });
    it('errors if tracing is started twice', async () => {
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
        const manager = new _trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.TracingManager.TracingManager(target);
        const client = new FakeClient();
        await manager.start(client, 'devtools-timeline', 'options');
        // The assert.throws() helper does not work with async/await, hence the manual try catch
        let didThrow = false;
        try {
            await manager.start(client, 'devtools-timeline', 'options');
        }
        catch (error) {
            didThrow = true;
            assert.strictEqual(error.message, 'Tracing is already started');
        }
        assert.isTrue(didThrow, 'Test did not throw an error as expected.');
    });
    it('errors if you try to stop when tracing is not active', async () => {
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
        const manager = new _trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.TracingManager.TracingManager(target);
        assert.throws(() => {
            manager.stop();
        }, /Tracing is not started/);
    });
});
//# sourceMappingURL=TracingManager.test.js.map

/***/ })

}]);