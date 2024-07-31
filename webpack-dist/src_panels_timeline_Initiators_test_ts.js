"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_timeline_Initiators_test_ts"],{

/***/ "./src/panels/timeline/Initiators.test.ts":
/*!************************************************!*\
  !*** ./src/panels/timeline/Initiators.test.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/trace/trace.js */ "./src/models/trace/trace.ts");
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/TraceLoader.js */ "./src/testing/TraceLoader.ts");
/* harmony import */ var _timeline_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timeline.js */ "./src/panels/timeline/timeline.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



describe('Initiators', () => {
    it('returns the initiator data', async function () {
        const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.traceEngine(this, 'set-timeout-long-task.json.gz');
        const timerFireEvent = Array.from(traceData.Initiators.eventToInitiator.keys())
            .find(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.TraceEvents.isTraceEventTimerFire);
        assert.exists(timerFireEvent);
        const timerInstallEvent = traceData.Initiators.eventToInitiator.get(timerFireEvent);
        assert.exists(timerInstallEvent);
        const initiatorData = _timeline_js__WEBPACK_IMPORTED_MODULE_2__.Initiators.initiatorsDataToDraw(traceData, timerFireEvent, [], []);
        assert.deepEqual(initiatorData, [{
                event: timerFireEvent,
                initiator: timerInstallEvent,
            }]);
    });
    it('returns the initiator data for network requests', async function () {
        const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.traceEngine(this, 'network-requests-initiators.json.gz');
        // Find the network request to test, it is initiated by `youtube.com`.
        const event = traceData.NetworkRequests.byTime.find(event => event.ts === 1491680762420);
        assert.exists(event);
        // Find the `youtube.com` network request.
        const initiator = traceData.NetworkRequests.byTime.find(event => event.ts === 1491680629144);
        assert.exists(initiator);
        const initiatorData = _timeline_js__WEBPACK_IMPORTED_MODULE_2__.Initiators.initiatorsDataToDrawForNetwork(traceData, event);
        assert.deepEqual(initiatorData, [{ event, initiator }]);
    });
    it('can walk up the tree to find the first parent with an initiator', async function () {
        const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.traceEngine(this, 'set-timeout-long-task.json.gz');
        // Find any of the fibonnaci() calls; they have a parent
        // event (TimerFire) that has an initiator.
        const fibonacciCall = traceData.Renderer.allTraceEntries.find(entry => {
            return _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.TraceEvents.isProfileCall(entry) && entry.callFrame.functionName === 'fibonacci';
        });
        assert.exists(fibonacciCall);
        const timerFireEvent = Array.from(traceData.Initiators.eventToInitiator.keys())
            .find(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.TraceEvents.isTraceEventTimerFire);
        assert.exists(timerFireEvent);
        const timerInstallEvent = traceData.Initiators.eventToInitiator.get(timerFireEvent);
        assert.exists(timerInstallEvent);
        // Find the initator data but starting at the fibonacci()
        // call.
        const initiatorsData = _timeline_js__WEBPACK_IMPORTED_MODULE_2__.Initiators.initiatorsDataToDraw(traceData, fibonacciCall, [], []);
        assert.deepEqual(initiatorsData, [{
                event: timerFireEvent,
                initiator: timerInstallEvent,
            }]);
    });
    it('will walk back through the initiators to find the entire chain', async function () {
        const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.traceEngine(this, 'nested-initiators.json.gz');
        // Find any of the fibonnaci() calls; they have a parent
        // event (TimerFire) that has an initiator.
        const fibonacciCall = traceData.Renderer.allTraceEntries.find(entry => {
            return _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.TraceEvents.isProfileCall(entry) && entry.callFrame.functionName === 'fibonacci';
        });
        assert.exists(fibonacciCall);
        // Find the initators data but starting at the fibonacci()
        // call. We expect to find two initiatorData objects here:
        // 1. fibonacci() ===> TimerFire caused by TimerInstall
        // 2. The TimerInstall from (1), caused by a prior TimerInstall.
        const initiatorsData = _timeline_js__WEBPACK_IMPORTED_MODULE_2__.Initiators.initiatorsDataToDraw(traceData, fibonacciCall, [], []);
        assert.lengthOf(initiatorsData, 2);
        for (const initiatorData of initiatorsData) {
            // Ensure each initiatorData object has TimerInstall>TimerFire event to initiator.
            assert.strictEqual(initiatorData.event.name, _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.TraceEvents.KnownEventName.TimerFire);
            assert.strictEqual(initiatorData.initiator.name, _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.TraceEvents.KnownEventName.TimerInstall);
        }
    });
    it('will walk forward to find the events initiated by the selected entry', async function () {
        const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.traceEngine(this, 'nested-initiators.json.gz');
        // Find any of the InstallTimer calls; they initiate other events.
        const timerInstall = traceData.Renderer.allTraceEntries.find(entry => {
            return entry.name === _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.TraceEvents.KnownEventName.TimerInstall;
        });
        assert.exists(timerInstall);
        // Find the initatorData objects starting at the TimerInstall
        // call. We expect to find one initatorData here:
        // TimerFire that was initiated by the entry we found - TimerInstall
        const initatorsData = _timeline_js__WEBPACK_IMPORTED_MODULE_2__.Initiators.initiatorsDataToDraw(traceData, timerInstall, [], []);
        assert.lengthOf(initatorsData, 1);
        for (const initatorData of initatorsData) {
            // Ensure each initiatorData object has TimerInstall>TimerFire event to initiator.
            assert.strictEqual(initatorData.event.name, _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.TraceEvents.KnownEventName.TimerFire);
            assert.strictEqual(initatorData.initiator.name, _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.TraceEvents.KnownEventName.TimerInstall);
        }
    });
    it('will return the closest expandable ancestor as an initiator in a pair if the initiator itself is hidden', async function () {
        const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.traceEngine(this, 'nested-initiators.json.gz');
        // Find any of the InstallTimer calls; they initiate other events.
        const timerInstall = traceData.Renderer.allTraceEntries.find(entry => {
            return entry.name === _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.TraceEvents.KnownEventName.TimerInstall;
        });
        assert.exists(timerInstall);
        // Get the parent of InstallTimer to add to the expandable events array.
        // When we add TimerInstall to hidden entries list, it will be the closest expandable parent and the initiator should point to it.
        const timerInstallParent = traceData.Renderer.entryToNode.get(timerInstall)?.parent;
        assert.exists(timerInstallParent);
        // Find the initatorData objects starting at the TimerInstall
        // call. We expect to find one initatorData here:
        // TimerFire that was initiated by the entry we found - Parent of TimerInstall because TimerInstall is hidden
        const initiatorsData = _timeline_js__WEBPACK_IMPORTED_MODULE_2__.Initiators.initiatorsDataToDraw(traceData, timerInstall, [timerInstall], [timerInstallParent?.entry]);
        assert.lengthOf(initiatorsData, 1);
        // Ensure each initiatorData object has TimerInstall>TimerFire event to initiator.
        for (const initiatorData of initiatorsData) {
            assert.strictEqual(initiatorData.event.name, _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.TraceEvents.KnownEventName.TimerFire);
            assert.strictEqual(initiatorData.initiator, timerInstallParent.entry);
            // Ensure the expandable entry is marked as hidden
            assert.strictEqual(initiatorData.isInitiatorHidden, true);
        }
    });
    it('will return the closest expandable ancestor as an initiated event in a pair if the event itself is hidden', async function () {
        const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.traceEngine(this, 'nested-initiators.json.gz');
        // Find any of the fibonnaci() calls; they have a parent
        // event (TimerFire) that has an initiator.
        const fibonacciCall = traceData.Renderer.allTraceEntries.find(entry => {
            return _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.TraceEvents.isProfileCall(entry) && entry.callFrame.functionName === 'fibonacci';
        });
        assert.exists(fibonacciCall);
        // Find the initatorData objects but starting at the fibonacci()
        // call. We expect to find two initiatorData objects here:
        // 1. fibonacci() ===> TimerFire caused by TimerInstall
        // 2. The TimerInstall from (1), caused by a prior TimerInstall.
        let initiatorsData = _timeline_js__WEBPACK_IMPORTED_MODULE_2__.Initiators.initiatorsDataToDraw(traceData, fibonacciCall, [], []);
        assert.lengthOf(initiatorsData, 2);
        // Save the parents of initiated events and the events themselves to get initiators again with those as expandable and hidden
        const timerFireParents = [];
        const initiatedEvents = [];
        for (const initiatorData of initiatorsData) {
            // Ensure each initiatorData object has TimerInstall>TimerFire event to initiator.
            assert.strictEqual(initiatorData.event.name, _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.TraceEvents.KnownEventName.TimerFire);
            assert.strictEqual(initiatorData.initiator.name, _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.TraceEvents.KnownEventName.TimerInstall);
            const parentEvent = traceData.Renderer.entryToNode.get(initiatorData.event)?.parent?.entry;
            if (parentEvent) {
                timerFireParents.push(parentEvent);
                initiatedEvents.push(initiatorData.event);
            }
        }
        // Get initiatorData object again, now with the previously initiated events hidden and parents marked as expandable
        initiatorsData =
            _timeline_js__WEBPACK_IMPORTED_MODULE_2__.Initiators.initiatorsDataToDraw(traceData, fibonacciCall, initiatedEvents, timerFireParents);
        // The length should not change, just the inititated events.
        assert.lengthOf(initiatorsData, 2);
        for (let i = 0; i < initiatorsData.length; i++) {
            const initiatorData = initiatorsData[i];
            // Ensure each initiatorData object has TimerInstall>TimerFire event to initiator.
            assert.strictEqual(initiatorData.event, timerFireParents[i]);
            assert.strictEqual(initiatorData.initiator.name, _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.TraceEvents.KnownEventName.TimerInstall);
            // Ensure the expandable entry is marked as hidden
            assert.strictEqual(initiatorData.isEntryHidden, true);
        }
    });
});


/***/ })

}]);