"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_trace_handlers_InitiatorsHandler_test_js"],{

/***/ "./models/trace/handlers/InitiatorsHandler.test.js":
/*!*********************************************************!*\
  !*** ./models/trace/handlers/InitiatorsHandler.test.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */ var _trace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../trace.js */ "./models/trace/trace.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


describe('InitiatorsHandler', () => {
    beforeEach(() => {
        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Initiators.reset();
        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Initiators.initialize();
    });
    it('for an UpdateLayoutTree event it sets the initiator to the previous ScheduledStyleRecalculation event', async function () {
        const traceEvents = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'web-dev-with-commit.json.gz');
        for (const event of traceEvents) {
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Initiators.handleEvent(event);
        }
        await _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Initiators.finalize();
        const data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Initiators.data();
        const updateLayoutTreeEvent = traceEvents.find(event => {
            return _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isTraceEventUpdateLayoutTree(event) && event.ts === 122411039965;
        });
        if (!updateLayoutTreeEvent ||
            !_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isTraceEventUpdateLayoutTree(updateLayoutTreeEvent)) {
            throw new Error('Could not find layout tree event.');
        }
        const initiator = data.eventToInitiator.get(updateLayoutTreeEvent);
        if (!initiator) {
            throw new Error('Did not find expected initiator for updateLayoutTreeEvent');
        }
        assert.isTrue(_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isTraceEventScheduleStyleRecalculation(initiator));
        assert.strictEqual(updateLayoutTreeEvent.args.beginData?.frame, '25D2F12F1818C70B5BD4325CC9ACD8FF');
        assert.strictEqual(updateLayoutTreeEvent.args.beginData?.frame, initiator.args?.data?.frame);
    });
    it('for a Layout event it sets the initiator to the last InvalidateLayout event on that frame', async function () {
        const traceEvents = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'web-dev-with-commit.json.gz');
        for (const event of traceEvents) {
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Initiators.handleEvent(event);
        }
        await _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Initiators.finalize();
        const data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Initiators.data();
        const layoutEvent = traceEvents.find(event => {
            return _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isTraceEventLayout(event) && event.ts === 122411039994;
        });
        if (!layoutEvent || !_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isTraceEventLayout(layoutEvent)) {
            throw new Error('Could not find layout event.');
        }
        const initiator = data.eventToInitiator.get(layoutEvent);
        if (!initiator) {
            throw new Error('Did not find expected initiator for LayoutEvent');
        }
        assert.isTrue(_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isTraceEventInvalidateLayout(initiator));
        assert.strictEqual(initiator.ts, 122411036517);
    });
    it('for a Layout event it sets the initiator to the last ScheduledStyleRecalculation if it occurred before the InvalidateLayout event', async function () {
        const traceEvents = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'web-dev-with-commit.json.gz');
        for (const event of traceEvents) {
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Initiators.handleEvent(event);
        }
        await _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Initiators.finalize();
        const data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Initiators.data();
        const layoutEvent = traceEvents.find(event => {
            return _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isTraceEventLayout(event) && event.ts === 122411054960;
        });
        if (!layoutEvent || !_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isTraceEventLayout(layoutEvent)) {
            throw new Error('Could not find layout event.');
        }
        const initiator = data.eventToInitiator.get(layoutEvent);
        if (!initiator) {
            throw new Error('Did not find expected initiator for LayoutEvent');
        }
        assert.isTrue(_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isTraceEventScheduleStyleRecalculation(initiator));
        assert.strictEqual(initiator.ts, 122411054482);
    });
    it('for a FireAnimationFrame event it sets the initiator to the RequestAnimationFrame event', async function () {
        const traceEvents = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'timer-initiators.json.gz');
        for (const event of traceEvents) {
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Initiators.handleEvent(event);
        }
        await _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Initiators.finalize();
        const data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Initiators.data();
        const fireAnimationFrameEvent = traceEvents.find(_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isTraceEventFireAnimationFrame);
        if (!fireAnimationFrameEvent) {
            throw new Error('Could not find FireAnimationFrame event');
        }
        const requestAnimationFrameEvent = traceEvents.find(_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isTraceEventRequestAnimationFrame);
        if (!requestAnimationFrameEvent) {
            throw new Error('Could not find RequestAnimationFrame event');
        }
        assert.strictEqual(data.eventToInitiator.get(fireAnimationFrameEvent), requestAnimationFrameEvent);
        assert.deepEqual(data.initiatorToEvents.get(requestAnimationFrameEvent), [fireAnimationFrameEvent]);
    });
    it('for a TimerFire event sets the initiator to the TimerInstall', async function () {
        const traceEvents = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'timer-initiators.json.gz');
        for (const event of traceEvents) {
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Initiators.handleEvent(event);
        }
        await _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Initiators.finalize();
        const data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Initiators.data();
        const timerFireEvent = traceEvents.find(_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isTraceEventTimerFire);
        if (!timerFireEvent) {
            throw new Error('Could not find TimerFire event');
        }
        const timerInstallEvent = traceEvents.find(_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isTraceEventTimerInstall);
        if (!timerInstallEvent) {
            throw new Error('Could not find TimerInstall event');
        }
        assert.strictEqual(data.eventToInitiator.get(timerFireEvent), timerInstallEvent);
        assert.deepEqual(data.initiatorToEvents.get(timerInstallEvent), [timerFireEvent]);
    });
    it('for a FireIdleCallback event sets the initiator to the RequestIdleCallback', async function () {
        const traceEvents = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'timer-initiators.json.gz');
        for (const event of traceEvents) {
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Initiators.handleEvent(event);
        }
        await _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Initiators.finalize();
        const data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Initiators.data();
        const fireIdleCallbackEvent = traceEvents.find(_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isTraceEventFireIdleCallback);
        if (!fireIdleCallbackEvent) {
            throw new Error('Could not find FireIdleCallback event');
        }
        const requestIdleCallbackEvent = traceEvents.find(_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isTraceEventRequestIdleCallback);
        if (!requestIdleCallbackEvent) {
            throw new Error('Could not find RequestIdleCallback event');
        }
        assert.strictEqual(data.eventToInitiator.get(fireIdleCallbackEvent), requestIdleCallbackEvent);
        assert.deepEqual(data.initiatorToEvents.get(requestIdleCallbackEvent), [fireIdleCallbackEvent]);
    });
    it('for a WebSocketSendHandshakeRequest the initiator is the WebSocketCreate event', async function () {
        const traceEvents = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'web-sockets.json.gz');
        for (const event of traceEvents) {
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Initiators.handleEvent(event);
        }
        await _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Initiators.finalize();
        const data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Initiators.data();
        const webSocketCreateEvent = traceEvents.find(_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isTraceEventWebSocketCreate);
        if (!webSocketCreateEvent) {
            throw new Error('Could not fnd WebSocketCreateEvent');
        }
        const webSocketSendHandshakeRequestEvent = traceEvents.find(_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isTraceEventWebSocketSendHandshakeRequest);
        if (!webSocketSendHandshakeRequestEvent) {
            throw new Error('Could not find WebSocketSendHandshakeRequest');
        }
        assert.strictEqual(data.eventToInitiator.get(webSocketSendHandshakeRequestEvent), webSocketCreateEvent);
    });
    it('for a WebSocketReceiveHandshakeResponse the initiator is the WebSocketCreate event', async function () {
        const traceEvents = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'web-sockets.json.gz');
        for (const event of traceEvents) {
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Initiators.handleEvent(event);
        }
        await _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Initiators.finalize();
        const data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Initiators.data();
        const webSocketCreateEvent = traceEvents.find(_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isTraceEventWebSocketCreate);
        if (!webSocketCreateEvent) {
            throw new Error('Could not fnd WebSocketCreateEvent');
        }
        const webSocketReceieveHandshakeResponseEvent = traceEvents.find(_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isTraceEventWebSocketReceiveHandshakeResponse);
        if (!webSocketReceieveHandshakeResponseEvent) {
            throw new Error('Could not find WebSocketReceiveHandshakeResponse event');
        }
        const webSocketSendHandshakeRequestEvent = traceEvents.find(_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isTraceEventWebSocketSendHandshakeRequest);
        if (!webSocketSendHandshakeRequestEvent) {
            throw new Error('Could not find WebSocketSendHandshakeRequest');
        }
        assert.strictEqual(data.eventToInitiator.get(webSocketReceieveHandshakeResponseEvent), webSocketCreateEvent);
        assert.deepEqual(data.initiatorToEvents.get(webSocketCreateEvent), [webSocketSendHandshakeRequestEvent, webSocketReceieveHandshakeResponseEvent]);
    });
    it('for a PostMessage Handler event the initiator is the PostMessage Dispatch event', async function () {
        const traceEvents = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'postmessage-initiators.json.gz');
        for (const event of traceEvents) {
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Initiators.handleEvent(event);
        }
        await _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Initiators.finalize();
        const data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Initiators.data();
        const schedulePostMessageEvent = traceEvents.find(_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isTraceEventSchedulePostMessage);
        if (!schedulePostMessageEvent) {
            throw new Error('Could not find schedulePostMessageEvent event');
        }
        const handlePostMessageEvent = traceEvents.find(_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isTraceEventHandlePostMessage);
        if (!handlePostMessageEvent) {
            throw new Error('Could not find handlePostMessageEvent event');
        }
        assert.strictEqual(data.eventToInitiator.get(handlePostMessageEvent), schedulePostMessageEvent);
        assert.deepEqual(data.initiatorToEvents.get(schedulePostMessageEvent), [handlePostMessageEvent]);
    });
});
//# sourceMappingURL=InitiatorsHandler.test.js.map

/***/ })

}]);