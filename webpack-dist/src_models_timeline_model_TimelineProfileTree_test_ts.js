"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_models_timeline_model_TimelineProfileTree_test_ts"],{

/***/ "./src/models/timeline_model/TimelineProfileTree.test.ts":
/*!***************************************************************!*\
  !*** ./src/models/timeline_model/TimelineProfileTree.test.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../panels/timeline/timeline.js */ "./src/panels/timeline/timeline.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/TraceHelpers.js */ "./src/testing/TraceHelpers.ts");
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/TraceLoader.js */ "./src/testing/TraceLoader.ts");
/* harmony import */ var _timeline_model_timeline_model_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../timeline_model/timeline_model.js */ "./src/models/timeline_model/timeline_model.ts");
/* harmony import */ var _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../trace/trace.js */ "./src/models/trace/trace.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('TimelineProfileTree', () => {
    describe('TopDownRootNode', () => {
        it('builds the root node and its children properly from an event tree', () => {
            // This builds the following tree:
            // |------------------ROOT---------------------------|
            // |-----A----| |-----B-----| |----------C---------|
            const eventA = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event A', 0, 40000);
            const eventB = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event B', 50000, 50000);
            const eventC = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event C', 150000, 100000);
            const events = [
                eventA,
                eventB,
                eventC,
            ];
            const root = new _timeline_model_timeline_model_js__WEBPACK_IMPORTED_MODULE_4__.TimelineProfileTree.TopDownRootNode(events, [], _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Types.Timing.MilliSeconds(0), _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Types.Timing.MilliSeconds(200000));
            const children = root.children();
            assert.strictEqual(children.size, 3);
            const nodesIterator = children.values();
            assert.strictEqual(nodesIterator.next().value.event, eventA);
            assert.strictEqual(nodesIterator.next().value.event, eventB);
            assert.strictEqual(nodesIterator.next().value.event, eventC);
        });
        it('builds a top-down tree from an event tree with multiple levels 1', () => {
            // This builds the following tree:
            // |------------ROOT-----------|
            // |-----A----| |-----B-----|
            // |-C-| |-D-|
            const eventA = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event A', 0, 40000);
            const eventC = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event C', 0, 10000);
            const eventD = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event D', 10000, 10000);
            const eventB = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event B', 50000, 50000);
            // Events must be in order.
            const events = [
                eventA,
                eventC,
                eventD,
                eventB,
            ];
            const root = new _timeline_model_timeline_model_js__WEBPACK_IMPORTED_MODULE_4__.TimelineProfileTree.TopDownRootNode(events, [], _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Types.Timing.MilliSeconds(0), _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Types.Timing.MilliSeconds(200000));
            const rootChildren = root.children();
            assert.strictEqual(rootChildren.size, 2);
            const rootChildIterator = rootChildren.values();
            const nodeA = rootChildIterator.next().value;
            assert.strictEqual(nodeA.event, eventA);
            assert.strictEqual(rootChildIterator.next().value.event, eventB);
            const nodeAChildren = nodeA.children();
            assert.strictEqual(nodeAChildren.size, 2);
            const nodeAChildIterator = nodeAChildren.values();
            assert.strictEqual(nodeAChildIterator.next().value.event, eventC);
            assert.strictEqual(nodeAChildIterator.next().value.event, eventD);
        });
        it('builds a top-down tree from an event tree with multiple levels 2', () => {
            // This builds the following tree:
            // |------------ROOT-----------|
            // |-----A----| |-----B-----|
            //               |-C-| |-D-|
            const eventA = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event A', 0, 40000);
            const eventB = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event B', 50000, 50000);
            const eventC = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event C', 50000, 10000);
            const eventD = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event D', 60000, 10000);
            // Events must be in order.
            const events = [
                eventA,
                eventB,
                eventC,
                eventD,
            ];
            const root = new _timeline_model_timeline_model_js__WEBPACK_IMPORTED_MODULE_4__.TimelineProfileTree.TopDownRootNode(events, [], _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Types.Timing.MilliSeconds(0), _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Types.Timing.MilliSeconds(200000));
            const rootChildren = root.children();
            assert.strictEqual(rootChildren.size, 2);
            const rootChildIterator = rootChildren.values();
            assert.strictEqual(rootChildIterator.next().value.event, eventA);
            const nodeB = rootChildIterator.next().value;
            assert.strictEqual(nodeB.event, eventB);
            const nodeBChildren = nodeB.children();
            assert.strictEqual(nodeBChildren.size, 2);
            const nodeBChildIterator = nodeBChildren.values();
            assert.strictEqual(nodeBChildIterator.next().value.event, eventC);
            assert.strictEqual(nodeBChildIterator.next().value.event, eventD);
        });
        it('calculates the self time for each node in an event tree correctly', () => {
            // This builds the following tree:
            // |------------ROOT-----------|
            // |-----A----| |-------B------|
            //               |-C-| |--D--|
            //                     |-E-|
            const eventA = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event A', 0, 40000);
            const eventB = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event B', 50000, 50000);
            const eventC = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event C', 50000, 10000);
            const eventD = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event D', 60000, 10000);
            const eventE = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event E', 60000, 5000);
            // Events must be in order.
            const events = [
                eventA,
                eventB,
                eventC,
                eventD,
                eventE,
            ];
            const root = new _timeline_model_timeline_model_js__WEBPACK_IMPORTED_MODULE_4__.TimelineProfileTree.TopDownRootNode(events, [], _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Types.Timing.MilliSeconds(0), _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Types.Timing.MilliSeconds(200000));
            const rootChildren = root.children();
            assert.strictEqual(rootChildren.size, 2);
            const rootChildIterator = rootChildren.values();
            assert.strictEqual(rootChildIterator.next().value.selfTime, _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Helpers.Timing.microSecondsToMilliseconds(eventA.dur));
            const nodeB = rootChildIterator.next().value;
            const nodeBSelfTime = _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Types.Timing.MicroSeconds(eventB.dur - eventC.dur - eventD.dur);
            assert.strictEqual(nodeB.selfTime, _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Helpers.Timing.microSecondsToMilliseconds(nodeBSelfTime));
            const nodeBChildren = nodeB.children();
            assert.strictEqual(nodeBChildren.size, 2);
            const nodeBChildIterator = nodeBChildren.values();
            assert.strictEqual(nodeBChildIterator.next().value.selfTime, _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Helpers.Timing.microSecondsToMilliseconds(eventC.dur));
            const nodeD = nodeBChildIterator.next().value;
            const nodeDSelfTime = _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Types.Timing.MicroSeconds(eventD.dur - eventE.dur);
            assert.strictEqual(nodeD.selfTime, _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Helpers.Timing.microSecondsToMilliseconds(nodeDSelfTime));
            const nodeDChildren = nodeD.children();
            assert.strictEqual(nodeDChildren.size, 1);
            const nodeDChildIterator = nodeDChildren.values();
            const nodeE = nodeDChildIterator.next().value;
            assert.strictEqual(nodeE.selfTime, _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Helpers.Timing.microSecondsToMilliseconds(eventE.dur));
        });
    });
    describe('BottomUpRootNode', () => {
        it('builds the root node and its children properly from an event tree', () => {
            // This builds the following tree:
            // |------------------ROOT---------------------------|
            // |-----A----| |-----B-----| |----------C---------|
            const eventA = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event A', 0, 40000);
            const eventB = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event B', 50000, 50000);
            const eventC = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event C', 150000, 100000);
            const events = [
                eventA,
                eventB,
                eventC,
            ];
            const root = new _timeline_model_timeline_model_js__WEBPACK_IMPORTED_MODULE_4__.TimelineProfileTree.TopDownRootNode(events, [], _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Types.Timing.MilliSeconds(0), _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Types.Timing.MilliSeconds(200000));
            const children = root.children();
            assert.strictEqual(children.size, 3);
            const nodesIterator = children.values();
            assert.strictEqual(nodesIterator.next().value.event, eventA);
            assert.strictEqual(nodesIterator.next().value.event, eventB);
            assert.strictEqual(nodesIterator.next().value.event, eventC);
        });
        it('builds a bottom up tree from an event tree with multiple levels 1', () => {
            // This builds the following tree:
            // |------------ROOT-----------|
            // |-C-||-D-|
            // |-----A----| |-----B-----|
            const eventA = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event A', 0, 40000);
            const eventC = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event C', 0, 10000);
            const eventD = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event D', 10000, 10000);
            const eventB = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event B', 50000, 50000);
            // Events must be in order.
            const events = [
                eventA,
                eventC,
                eventD,
                eventB,
            ];
            const root = new _timeline_model_timeline_model_js__WEBPACK_IMPORTED_MODULE_4__.TimelineProfileTree.BottomUpRootNode(events, new _timeline_model_timeline_model_js__WEBPACK_IMPORTED_MODULE_4__.TimelineModelFilter.TimelineInvisibleEventsFilter([]), [], _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Types.Timing.MilliSeconds(0), _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Types.Timing.MilliSeconds(200000), null);
            const rootChildren = root.children();
            assert.strictEqual(rootChildren.size, 4);
            const rootChildIterator = rootChildren.values();
            const nodeC = rootChildIterator.next().value;
            assert.strictEqual(nodeC.event, eventC);
            const nodeD = rootChildIterator.next().value;
            assert.strictEqual(nodeD.event, eventD);
            const nodeA = rootChildIterator.next().value;
            assert.strictEqual(nodeA.event, eventA);
            const nodeB = rootChildIterator.next().value;
            assert.strictEqual(nodeB.event, eventB);
            const nodeCChildren = nodeC.children();
            assert.strictEqual(nodeCChildren.size, 1);
            const nodeCChildIterator = nodeCChildren.values();
            assert.strictEqual(nodeCChildIterator.next().value.event, eventA);
            const nodeDChildren = nodeC.children();
            assert.strictEqual(nodeDChildren.size, 1);
            const nodeDChildIterator = nodeDChildren.values();
            assert.strictEqual(nodeDChildIterator.next().value.event, eventA);
            const nodeAChildren = nodeA.children();
            assert.strictEqual(nodeAChildren.size, 0);
            const nodeBChildren = nodeB.children();
            assert.strictEqual(nodeBChildren.size, 0);
        });
        it('builds a tree from an event tree with multiple levels 2', () => {
            // This builds the following tree:
            // |------------ROOT-----------|
            //              |-C-||-D-|
            // |-----A----| |-----B-----|
            const eventA = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event A', 0, 40000);
            const eventB = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event B', 50000, 50000);
            const eventC = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event C', 50000, 10000);
            const eventD = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event D', 60000, 10000);
            // Events must be in order.
            const events = [
                eventA,
                eventB,
                eventC,
                eventD,
            ];
            const root = new _timeline_model_timeline_model_js__WEBPACK_IMPORTED_MODULE_4__.TimelineProfileTree.BottomUpRootNode(events, new _timeline_model_timeline_model_js__WEBPACK_IMPORTED_MODULE_4__.TimelineModelFilter.TimelineInvisibleEventsFilter([]), [], _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Types.Timing.MilliSeconds(0), _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Types.Timing.MilliSeconds(200000), null);
            const rootChildren = root.children();
            assert.strictEqual(rootChildren.size, 4);
            const rootChildIterator = rootChildren.values();
            const nodeA = rootChildIterator.next().value;
            assert.strictEqual(nodeA.event, eventA);
            const nodeC = rootChildIterator.next().value;
            assert.strictEqual(nodeC.event, eventC);
            const nodeD = rootChildIterator.next().value;
            assert.strictEqual(nodeD.event, eventD);
            const nodeB = rootChildIterator.next().value;
            assert.strictEqual(nodeB.event, eventB);
            const nodeCChildren = nodeC.children();
            assert.strictEqual(nodeCChildren.size, 1);
            const nodeCChildIterator = nodeCChildren.values();
            assert.strictEqual(nodeCChildIterator.next().value.event, eventB);
            const nodeDChildren = nodeC.children();
            assert.strictEqual(nodeDChildren.size, 1);
            const nodeDChildIterator = nodeDChildren.values();
            assert.strictEqual(nodeDChildIterator.next().value.event, eventB);
            const nodeAChildren = nodeA.children();
            assert.strictEqual(nodeAChildren.size, 0);
            const nodeBChildren = nodeB.children();
            assert.strictEqual(nodeBChildren.size, 0);
        });
        it('calculates the self time for each node in an event tree correctly', () => {
            // This builds the following tree:
            // |------------ROOT-----------|
            //                   |-E-|
            //              |-C-||--D--|
            // |-----A----| |-------B------|
            const eventA = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event A', 0, 40000);
            const eventB = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event B', 50000, 50000);
            const eventC = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event C', 50000, 10000);
            const eventD = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event D', 60000, 10000);
            const eventE = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('Event E', 60000, 5000);
            // Events must be in order.
            const events = [
                eventA,
                eventB,
                eventC,
                eventD,
                eventE,
            ];
            const root = new _timeline_model_timeline_model_js__WEBPACK_IMPORTED_MODULE_4__.TimelineProfileTree.BottomUpRootNode(events, new _timeline_model_timeline_model_js__WEBPACK_IMPORTED_MODULE_4__.TimelineModelFilter.TimelineInvisibleEventsFilter([]), [], _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Types.Timing.MilliSeconds(0), _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Types.Timing.MilliSeconds(200000), null);
            const rootChildren = root.children();
            assert.strictEqual(rootChildren.size, 5);
            const rootChildIterator = rootChildren.values();
            assert.strictEqual(rootChildIterator.next().value.selfTime, _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Helpers.Timing.microSecondsToMilliseconds(eventA.dur));
            const nodeC = rootChildIterator.next().value;
            assert.strictEqual(nodeC.selfTime, _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Helpers.Timing.microSecondsToMilliseconds(eventC.dur));
            const nodeE = rootChildIterator.next().value;
            assert.strictEqual(nodeE.selfTime, _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Helpers.Timing.microSecondsToMilliseconds(eventE.dur));
            const nodeD = rootChildIterator.next().value;
            const nodeDSelfTime = _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Types.Timing.MicroSeconds(eventD.dur - eventE.dur);
            assert.strictEqual(nodeD.selfTime, _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Helpers.Timing.microSecondsToMilliseconds(nodeDSelfTime));
            const nodeB = rootChildIterator.next().value;
            const nodeBSelfTime = _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Types.Timing.MicroSeconds(eventB.dur - eventC.dur - eventD.dur);
            assert.strictEqual(nodeB.selfTime, _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Helpers.Timing.microSecondsToMilliseconds(nodeBSelfTime));
        });
        it('correctly keeps ProfileCall nodes and uses them to build up the tree', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'mainWasm_profile.json.gz');
            const mainThread = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getMainThread)(traceData.Renderer);
            const bounds = _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Helpers.Timing.traceWindowMilliSeconds(traceData.Meta.traceBounds);
            // Replicate the filters as they would be when renderering in the actual panel.
            const textFilter = new _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_0__.TimelineFilters.TimelineRegExp();
            const modelFilters = [
                _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_0__.TimelineUIUtils.TimelineUIUtils.visibleEventsFilter(),
                new _timeline_model_timeline_model_js__WEBPACK_IMPORTED_MODULE_4__.TimelineModelFilter.ExclusiveNameFilter([
                    _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Types.TraceEvents.KnownEventName.RunTask,
                ]),
            ];
            const root = new _timeline_model_timeline_model_js__WEBPACK_IMPORTED_MODULE_4__.TimelineProfileTree.BottomUpRootNode(mainThread.entries, textFilter, modelFilters, bounds.min, bounds.max, null);
            const rootChildren = root.children();
            const values = Array.from(rootChildren.values());
            // Find the list of profile calls that have been calculated as the top level rows in the Bottom Up table.
            const profileCalls = values
                .filter(node => node.event && _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Types.TraceEvents.isProfileCall(node.event) &&
                node.event.callFrame.functionName.length > 0)
                .map(n => n.event);
            const functionNames = profileCalls.map(entry => entry.callFrame.functionName);
            assert.deepEqual(functionNames, ['fetch', 'getTime', 'wasm-to-js::l-imports.getTime', 'mainWasm', 'js-to-wasm::i']);
        });
    });
    describe('generateEventID', () => {
        it('generates the right ID for new engine profile call events', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'react-hello-world.json.gz');
            const mainThread = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getMainThread)(traceData.Renderer);
            const profileCallEntry = mainThread.entries.find(entry => {
                return _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Types.TraceEvents.isProfileCall(entry) &&
                    entry.callFrame.functionName === 'performConcurrentWorkOnRoot';
            });
            if (!profileCallEntry) {
                throw new Error('Could not find a profile call');
            }
            const eventId = _timeline_model_timeline_model_js__WEBPACK_IMPORTED_MODULE_4__.TimelineProfileTree.generateEventID(profileCallEntry);
            assert.strictEqual(eventId, 'f:performConcurrentWorkOnRoot@7');
        });
        it('generates the right ID for new engine native profile call events', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'invalid-animation-events.json.gz', {
                ..._trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Types.Configuration.defaults(),
                includeRuntimeCallStats: true,
            });
            const mainThread = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getMainThread)(traceData.Renderer);
            const profileCallEntry = mainThread.entries.find(entry => {
                return _trace_trace_js__WEBPACK_IMPORTED_MODULE_5__.Types.TraceEvents.isProfileCall(entry) && entry.callFrame.url === 'native V8Runtime';
            });
            if (!profileCallEntry) {
                throw new Error('Could not find a profile call');
            }
            const eventId = _timeline_model_timeline_model_js__WEBPACK_IMPORTED_MODULE_4__.TimelineProfileTree.generateEventID(profileCallEntry);
            assert.strictEqual(eventId, 'f:Compile@0');
        });
    });
    describe('eventStackFrame', () => {
        it('extracts the stackFrame for ProfileCalls', async function () {
            const event = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeProfileCall)('somefunc', 100, 10, undefined, undefined, undefined, 'https://x.com/file.mjs');
            const stackFrame = _timeline_model_timeline_model_js__WEBPACK_IMPORTED_MODULE_4__.TimelineProfileTree.eventStackFrame(event);
            assert.strictEqual(stackFrame.functionName, 'somefunc');
            assert.strictEqual(stackFrame.url, 'https://x.com/file.mjs');
        });
    });
});


/***/ })

}]);