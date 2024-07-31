"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_models_trace_helpers_Trace_test_ts"],{

/***/ "./src/models/trace/helpers/Trace.test.ts":
/*!************************************************!*\
  !*** ./src/models/trace/helpers/Trace.test.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/TraceHelpers.js */ "./src/testing/TraceHelpers.ts");
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./src/testing/TraceLoader.ts");
/* harmony import */ var _trace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../trace.js */ "./src/models/trace/trace.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithEnvironment)('TraceModel helpers', function () {
    describe('extractOriginFromTrace', () => {
        it('extracts the origin of a parsed trace correctly', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'web-dev.json.gz');
            const origin = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.extractOriginFromTrace(traceData.Meta.mainFrameURL);
            assert.strictEqual(origin, 'web.dev');
        });
        it('will remove the `www` if it is present', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'multiple-navigations.json.gz');
            const origin = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.extractOriginFromTrace(traceData.Meta.mainFrameURL);
            assert.strictEqual(origin, 'google.com');
        });
        it('returns null when no origin is found', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'basic.json.gz');
            const origin = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.extractOriginFromTrace(traceData.Meta.mainFrameURL);
            assert.isNull(origin);
        });
    });
    describe('addEventToProcessThread', () => {
        function makeTraceEvent(pid, tid) {
            return {
                name: 'process_name',
                tid,
                pid,
                ts: _trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(0),
                cat: 'test',
                ph: _trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.Phase.METADATA,
            };
        }
        function pid(x) {
            return _trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ProcessID(x);
        }
        function tid(x) {
            return _trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ThreadID(x);
        }
        const eventMap = new Map();
        beforeEach(() => {
            eventMap.clear();
        });
        it('will create a process and thread if it does not exist yet', async () => {
            const event = makeTraceEvent(pid(1), tid(1));
            _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.addEventToProcessThread(event, eventMap);
            assert.strictEqual(eventMap.get(pid(1))?.size, 1);
            const threadEvents = eventMap.get(pid(1))?.get(tid(1));
            assert.strictEqual(threadEvents?.length, 1);
        });
        it('adds new events to existing threads correctly', async () => {
            const event = makeTraceEvent(pid(1), tid(1));
            _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.addEventToProcessThread(event, eventMap);
            const newEvent = makeTraceEvent(pid(1), tid(1));
            _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.addEventToProcessThread(newEvent, eventMap);
            assert.deepEqual(eventMap.get(pid(1))?.get(tid(1)), [event, newEvent]);
        });
    });
    describe('sortTraceEventsInPlace', () => {
        function makeFakeEvent(ts, dur) {
            return {
                ts: _trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(ts),
                dur: _trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(dur),
            };
        }
        it('sorts by start time in ASC order', () => {
            const event1 = makeFakeEvent(1, 1);
            const event2 = makeFakeEvent(2, 1);
            const event3 = makeFakeEvent(3, 1);
            const events = [event3, event1, event2];
            _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.sortTraceEventsInPlace(events);
            assert.deepEqual(events, [event1, event2, event3]);
        });
        it('sorts by longest duration if the timestamps are the same', () => {
            const event1 = makeFakeEvent(1, 1);
            const event2 = makeFakeEvent(1, 2);
            const event3 = makeFakeEvent(1, 3);
            const events = [event1, event2, event3];
            _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.sortTraceEventsInPlace(events);
            assert.deepEqual(events, [event3, event2, event1]);
        });
    });
    describe('getNavigationForTraceEvent', () => {
        it('returns the correct navigation for a request', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'multiple-navigations.json.gz');
            const { NetworkRequests, Meta } = traceData;
            const request1 = NetworkRequests.byTime[0];
            const navigationForFirstRequest = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.getNavigationForTraceEvent(request1, request1.args.data.frame, Meta.navigationsByFrameId);
            assert.isUndefined(navigationForFirstRequest?.ts);
            const request2 = NetworkRequests.byTime[1];
            const navigationForSecondRequest = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.getNavigationForTraceEvent(request2, request2.args.data.frame, Meta.navigationsByFrameId);
            assert.strictEqual(navigationForSecondRequest?.ts, _trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(636471400029));
        });
        it('returns the correct navigation for a page load event', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'multiple-navigations.json.gz');
            const { Meta, PageLoadMetrics } = traceData;
            const firstNavigationId = Meta.navigationsByNavigationId.keys().next().value;
            const fcp = PageLoadMetrics.metricScoresByFrameId.get(Meta.mainFrameId)
                ?.get(firstNavigationId)
                ?.get(_trace_js__WEBPACK_IMPORTED_MODULE_3__.Handlers.ModelHandlers.PageLoadMetrics.MetricName.FCP);
            if (!fcp || !fcp.event) {
                assert.fail('FCP not found');
            }
            const navigationForFirstRequest = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.getNavigationForTraceEvent(fcp.event, Meta.mainFrameId, Meta.navigationsByFrameId);
            assert.strictEqual(navigationForFirstRequest?.args.data?.navigationId, firstNavigationId);
        });
    });
    describe('extractId', () => {
        it('returns the correct id for an event', async () => {
            const fakeEventWithId = { id: 'id' };
            const id = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.extractId(fakeEventWithId);
            assert.strictEqual(id, fakeEventWithId.id);
            const fakeEventWithGlobalId2 = { id2: { global: 'globalId2' } };
            const globalId2 = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.extractId(fakeEventWithGlobalId2);
            assert.strictEqual(globalId2, fakeEventWithGlobalId2.id2?.global);
            const fakeEventWithLocalId2 = { id2: { local: 'localId2' } };
            const localId2 = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.extractId(fakeEventWithLocalId2);
            assert.strictEqual(localId2, fakeEventWithLocalId2.id2?.local);
        });
    });
    describe('mergeEventsInOrder', () => {
        it('merges two ordered arrays of trace events with no duration', async () => {
            const array1 = [
                {
                    name: 'a',
                    ts: 0,
                },
                {
                    name: 'b',
                    ts: 2,
                },
                {
                    name: 'c',
                    ts: 4,
                },
                {
                    name: 'd',
                    ts: 6,
                },
                {
                    name: 'e',
                    ts: 8,
                },
            ];
            const array2 = [
                {
                    name: 'a',
                    ts: 1,
                },
                {
                    name: 'b',
                    ts: 3,
                },
                {
                    name: 'c',
                    ts: 5,
                },
                {
                    name: 'd',
                    ts: 7,
                },
                {
                    name: 'e',
                    ts: 9,
                },
            ];
            const ordered = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.mergeEventsInOrder(array1, array2);
            for (let i = 1; i < ordered.length; i++) {
                assert.isAbove(ordered[i].ts, ordered[i - 1].ts);
            }
        });
        it('merges two ordered arrays of trace events with duration', async () => {
            const array1 = [
                {
                    name: 'a',
                    ts: 0,
                    dur: 10,
                },
                {
                    name: 'b',
                    ts: 2,
                    dur: 12,
                },
                {
                    name: 'c',
                    ts: 4,
                    dur: 2,
                },
                {
                    name: 'd',
                    ts: 6,
                    dur: 9,
                },
                {
                    name: 'e',
                    ts: 8,
                    dur: 100,
                },
            ];
            const array2 = [
                {
                    name: 'a',
                    ts: 1,
                    dur: 2,
                },
                {
                    name: 'b',
                    ts: 3,
                    dur: 1,
                },
                {
                    name: 'c',
                    ts: 5,
                    dur: 99,
                },
                {
                    name: 'd',
                    ts: 7,
                },
                {
                    name: 'e',
                    ts: 9,
                    dur: 0,
                },
            ];
            const ordered = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.mergeEventsInOrder(array1, array2);
            for (let i = 1; i < ordered.length; i++) {
                assert.isAbove(ordered[i].ts, ordered[i - 1].ts);
            }
        });
        it('merges two ordered arrays of trace events when timestamps collide', async () => {
            const array1 = [
                {
                    name: 'a',
                    ts: 0,
                    dur: 10,
                },
                {
                    name: 'b',
                    ts: 2,
                    dur: 12,
                },
                {
                    name: 'c',
                    ts: 4,
                    dur: 2,
                },
                {
                    name: 'd',
                    ts: 6,
                    dur: 9,
                },
                {
                    name: 'e',
                    ts: 8,
                    dur: 100,
                },
            ];
            const array2 = [
                {
                    name: 'a',
                    ts: 0,
                    dur: 2,
                },
                {
                    name: 'b',
                    ts: 2,
                    dur: 1,
                },
                {
                    name: 'c',
                    ts: 4,
                    dur: 99,
                },
                {
                    name: 'd',
                    ts: 7,
                },
                {
                    name: 'e',
                    ts: 9,
                    dur: 0,
                },
            ];
            const ordered = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.mergeEventsInOrder(array1, array2);
            for (let i = 1; i < ordered.length; i++) {
                const dur = ordered[i].dur;
                const durPrev = ordered[i - 1].dur;
                const eventsHaveDuration = dur !== undefined && durPrev !== undefined;
                const correctOrderForSharedTimestamp = eventsHaveDuration && ordered[i].ts === ordered[i - 1].ts && dur <= durPrev;
                assert.isTrue(ordered[i].ts > ordered[i - 1].ts || correctOrderForSharedTimestamp);
            }
        });
        it('merges two ordered arrays of trace events when timestamps and durations collide', async () => {
            const array1 = [
                {
                    name: 'a',
                    ts: 0,
                    dur: 10,
                },
                {
                    name: 'b',
                    ts: 2,
                    dur: 10,
                },
                {
                    name: 'c',
                    ts: 4,
                    dur: 10,
                },
                {
                    name: 'd',
                    ts: 6,
                    dur: 10,
                },
                {
                    name: 'e',
                    ts: 8,
                    dur: 10,
                },
            ];
            const array2 = [...array1];
            const ordered = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.mergeEventsInOrder(array1, array2);
            for (let i = 1; i < ordered.length; i++) {
                const dur = ordered[i].dur;
                const durPrev = ordered[i - 1].dur;
                const eventsHaveDuration = dur !== undefined && durPrev !== undefined;
                const correctOrderForSharedTimestamp = eventsHaveDuration && ordered[i].ts === ordered[i - 1].ts && dur <= durPrev;
                assert.isTrue(ordered[i].ts > ordered[i - 1].ts || correctOrderForSharedTimestamp);
            }
        });
    });
    describe('activeURLForFrameAtTime', () => {
        it('extracts the active url for a frame at a given time', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'simple-js-program.json.gz');
            const frameId = '1F729458403A23CF1D8D246095129AC4';
            const firstURL = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.activeURLForFrameAtTime(frameId, _trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(251126654355), traceData.Meta.rendererProcessesByFrame);
            assert.strictEqual(firstURL, 'about:blank');
            const secondURL = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.activeURLForFrameAtTime(frameId, _trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(251126663398), traceData.Meta.rendererProcessesByFrame);
            assert.strictEqual(secondURL, 'https://www.google.com');
        });
    });
    describe('createMatchedSortedSyntheticEvents', () => {
        it('matches up arbitrary async events', async function () {
            const events = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.rawEvents(this, 'user-timings.json.gz');
            const asyncEvents = events.filter(event => _trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isTraceEventAsyncPhase(event));
            const synthEvents = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.createMatchedSortedSyntheticEvents(asyncEvents);
            // There's a lot of events, let's only assert one event per name
            const seen = new Set();
            // Make a readable output of each event to assert
            const eventSummary = (e) => `@ ${(e.ts / 1000 - 1003e5).toFixed(3).padEnd(9)} for ${(e.dur / 1000).toFixed(3).padStart(8)}: ${e.name}`;
            const eventsSummary = synthEvents
                .filter(e => {
                const alreadySeen = seen.has(e.name);
                seen.add(e.name);
                return !alreadySeen;
            })
                .map(eventSummary);
            assert.deepEqual(eventsSummary, [
                '@ 22336.946 for   16.959: PipelineReporter',
                '@ 22350.590 for    3.315: BeginImplFrameToSendBeginMainFrame',
                '@ 40732.328 for    0.834: SendBeginMainFrameToCommit',
                '@ 40733.162 for    0.307: Commit',
                '@ 40733.469 for    0.097: EndCommitToActivation',
                '@ 40733.566 for    0.019: Activation',
                '@ 40733.585 for    1.775: EndActivateToSubmitCompositorFrame',
                '@ 40735.360 for   58.412: SubmitCompositorFrameToPresentationCompositorFrame',
                '@ 40735.360 for    0.148: SubmitToReceiveCompositorFrame',
                '@ 40735.508 for    3.667: ReceiveCompositorFrameToStartDraw',
                '@ 40739.175 for   54.136: StartDrawToSwapStart',
                '@ 40793.311 for    0.461: Swap',
                '@ 40810.809 for  205.424: first measure',
                '@ 40810.809 for  606.224: second measure',
                '@ 40825.971 for   11.802: InputLatency::MouseMove',
                '@ 41818.833 for 2005.601: third measure',
            ]);
            assert.strictEqual(synthEvents.length, 237);
        });
        describe('createSortedSyntheticEvents()', () => {
            it('correctly creates synthetic events when instant animation events are present', async function () {
                const events = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.rawEvents(this, 'instant-animation-events.json.gz');
                const animationEvents = events.filter(event => _trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isTraceEventAnimation(event));
                const animationSynthEvents = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.createMatchedSortedSyntheticEvents(animationEvents);
                const wantPairs = new Map([
                    [
                        'blink.animations,devtools.timeline,benchmark,rail:0x11d00230380:Animation',
                        { compositeFailed: 8224, unsupportedProperties: ['width'] },
                    ],
                    ['blink.animations,devtools.timeline,benchmark,rail:0x11d00234738:Animation', { compositeFailed: 0 }],
                    [
                        'blink.animations,devtools.timeline,benchmark,rail:0x11d00234b08:Animation',
                        { compositeFailed: 8224, unsupportedProperties: ['height'] },
                    ],
                    [
                        'blink.animations,devtools.timeline,benchmark,rail:0x11d00234ed8:Animation',
                        { compositeFailed: 8224, unsupportedProperties: ['font-size'] },
                    ],
                ]);
                // Ensure we have the correct numner of synthetic events created.
                assert.deepEqual(wantPairs.size, animationSynthEvents.length);
                animationSynthEvents.forEach(event => {
                    const id = event.id;
                    assert.exists(id);
                    assert.exists(wantPairs.get(id));
                    const beginEvent = event.args.data.beginEvent;
                    const endEvent = event.args.data.endEvent;
                    const instantEvents = event.args.data.instantEvents;
                    assert.exists(beginEvent);
                    // Check that the individual event ids match the synthetic id.
                    assert.isTrue(beginEvent.id2?.local && id.includes(beginEvent.id2?.local));
                    if (endEvent) {
                        assert.isTrue(endEvent.id2?.local && id?.includes(endEvent.id2?.local));
                    }
                    assert.isTrue(instantEvents?.every(event => event.id2?.local && id.includes(event.id2?.local)));
                    assert.strictEqual(instantEvents.length, 2);
                    // Check that the non-composited data matches the expected.
                    const nonCompositedEvents = instantEvents.filter(event => event.args.data.compositeFailed);
                    nonCompositedEvents.forEach(event => {
                        assert.strictEqual(event.args.data.compositeFailed, wantPairs.get(id)?.compositeFailed);
                        assert.deepEqual(event.args.data.unsupportedProperties, wantPairs.get(id)?.unsupportedProperties);
                    });
                });
            });
        });
    });
    describe('getZeroIndexedLineAndColumnNumbersForEvent', () => {
        it('subtracts one from the line number of a function call', async () => {
            const fakeFunctionCall = {
                name: _trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.KnownEventName.FunctionCall,
                ph: _trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.Phase.COMPLETE,
                cat: 'devtools-timeline',
                dur: _trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(100),
                ts: _trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(100),
                pid: _trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ProcessID(1),
                tid: _trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ThreadID(1),
                args: {
                    data: {
                        functionName: 'test',
                        url: 'https://google.com/test.js',
                        scriptId: Number(123),
                        lineNumber: 1,
                        columnNumber: 1,
                    },
                },
            };
            assert.deepEqual(_trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.getZeroIndexedLineAndColumnForEvent(fakeFunctionCall), {
                lineNumber: 0,
                columnNumber: 0,
            });
        });
    });
    describe('frameIDForEvent', () => {
        it('returns the frame ID from beginData if the event has it', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'web-dev-with-commit.json.gz');
            const parseHTMLEvent = traceData.Renderer.allTraceEntries.find(_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isTraceEventParseHTML);
            assert.isOk(parseHTMLEvent);
            const frameId = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.frameIDForEvent(parseHTMLEvent);
            assert.isNotNull(frameId);
            assert.strictEqual(frameId, parseHTMLEvent.args.beginData.frame);
        });
        it('returns the frame ID from args.data if the event has it', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'web-dev-with-commit.json.gz');
            const invalidateLayoutEvent = traceData.Renderer.allTraceEntries.find(_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isTraceEventInvalidateLayout);
            assert.isOk(invalidateLayoutEvent);
            const frameId = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.frameIDForEvent(invalidateLayoutEvent);
            assert.isNotNull(frameId);
            assert.strictEqual(frameId, invalidateLayoutEvent.args.data.frame);
        });
        it('returns null if the event does not have a frame', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'web-dev-with-commit.json.gz');
            const v8CompileEvent = traceData.Renderer.allTraceEntries.find(_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isTraceEventV8Compile);
            assert.isOk(v8CompileEvent);
            const frameId = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.frameIDForEvent(v8CompileEvent);
            assert.isNull(frameId);
        });
    });
    describe('findUpdateLayoutTreeEvents', () => {
        it('returns the set of UpdateLayoutTree events within the right time range', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'selector-stats.json.gz');
            const mainThread = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getMainThread)(traceData.Renderer);
            const foundEvents = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.findUpdateLayoutTreeEvents(mainThread.entries, traceData.Meta.traceBounds.min);
            assert.lengthOf(foundEvents, 11);
            const lastEvent = foundEvents.at(-1);
            assert.isOk(lastEvent);
            // Check we can filter by endTime by making the endTime less than the start
            // time of the last event:
            const filteredByEndTimeEvents = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.findUpdateLayoutTreeEvents(mainThread.entries, traceData.Meta.traceBounds.min, _trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(lastEvent.ts - 1000));
            assert.lengthOf(filteredByEndTimeEvents, 10);
        });
    });
    describe('forEachEvent', () => {
        const pid = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ProcessID(1);
        const tid = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ThreadID(1);
        it('iterates through the events in the expected tree-like order', async () => {
            // |------------- RunTask -------------||-- RunTask --|
            //  |-- RunMicrotasks --||-- Layout --|
            //   |- FunctionCall -|
            const traceEvents = [
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_1__.makeCompleteEvent)('RunTask', 0, 10, '*', pid, tid), // 0..10
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_1__.makeCompleteEvent)('RunMicrotasks', 1, 3, '*', pid, tid), // 1..4
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_1__.makeCompleteEvent)('FunctionCall', 2, 1, '*', pid, tid), // 2..3
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_1__.makeCompleteEvent)('Layout', 5, 3, '*', pid, tid), // 5..8
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_1__.makeCompleteEvent)('RunTask', 11, 3, '*', pid, tid), // 11..14
            ];
            const onStartEvent = sinon.spy(_event => { });
            const onEndEvent = sinon.spy(_event => { });
            _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.forEachEvent(traceEvents, {
                onEndEvent,
                onStartEvent,
            });
            const eventsFromStartEventCalls = onStartEvent.getCalls().map(a => a.args[0]);
            const eventsFromEndEventCalls = onEndEvent.getCalls().map(a => a.args[0]);
            assert.deepEqual(eventsFromStartEventCalls.map(e => e.name), ['RunTask', 'RunMicrotasks', 'FunctionCall', 'Layout', 'RunTask']);
            assert.deepEqual(eventsFromEndEventCalls.map(e => e.name), ['FunctionCall', 'RunMicrotasks', 'Layout', 'RunTask', 'RunTask']);
        });
        it('allows for a custom start and end time', async () => {
            // |------------- RunTask -------------||-- RunTask --|
            //  |-- RunMicrotasks --||-- Layout --|
            //   |- FunctionCall -|
            const traceEvents = [
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_1__.makeCompleteEvent)('RunTask', 0, 10, '*', pid, tid), // 0..10
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_1__.makeCompleteEvent)('RunMicrotasks', 1, 3, '*', pid, tid), // 1..4
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_1__.makeCompleteEvent)('FunctionCall', 2, 1, '*', pid, tid), // 2..3
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_1__.makeCompleteEvent)('Layout', 5, 3, '*', pid, tid), // 5..8
            ];
            const onStartEvent = sinon.spy(_event => { });
            const onEndEvent = sinon.spy(_event => { });
            _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.forEachEvent(traceEvents, {
                onEndEvent,
                onStartEvent,
                startTime: _trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(5),
                endTime: _trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(9),
            });
            const eventsFromStartEventCalls = onStartEvent.getCalls().map(a => a.args[0]);
            const eventsFromEndEventCalls = onEndEvent.getCalls().map(a => a.args[0]);
            // We expect the RunTask event (0-10) and the Layout event (5-8) as
            // those fit in the 5-9 custom time range.
            assert.deepEqual(eventsFromStartEventCalls.map(e => e.name), ['RunTask', 'Layout']);
            assert.deepEqual(eventsFromEndEventCalls.map(e => e.name), ['Layout', 'RunTask']);
        });
        it('lets the user filter out events with a custom filter', async () => {
            // |------------- RunTask -------------||-- RunTask --|
            //  |-- RunMicrotasks --||-- Layout --|
            //   |- FunctionCall -|
            const traceEvents = [
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_1__.makeCompleteEvent)('RunTask', 0, 10, '*', pid, tid), // 0..10
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_1__.makeCompleteEvent)('RunMicrotasks', 1, 3, '*', pid, tid), // 1..4
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_1__.makeCompleteEvent)('FunctionCall', 2, 1, '*', pid, tid), // 2..3
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_1__.makeCompleteEvent)('Layout', 5, 3, '*', pid, tid), // 5..8
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_1__.makeCompleteEvent)('RunTask', 11, 3, '*', pid, tid), // 11..14
            ];
            const onStartEvent = sinon.spy(_event => { });
            const onEndEvent = sinon.spy(_event => { });
            _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.forEachEvent(traceEvents, {
                onEndEvent,
                onStartEvent,
                eventFilter(event) {
                    return event.name !== 'RunTask';
                },
            });
            const eventsFromStartEventCalls = onStartEvent.getCalls().map(a => a.args[0]);
            const eventsFromEndEventCalls = onEndEvent.getCalls().map(a => a.args[0]);
            assert.deepEqual(eventsFromStartEventCalls.map(e => e.name), ['RunMicrotasks', 'FunctionCall', 'Layout']);
            assert.deepEqual(eventsFromEndEventCalls.map(e => e.name), ['FunctionCall', 'RunMicrotasks', 'Layout']);
        });
        it('calls the onInstantEvent callback when it finds an event with 0 duration', async () => {
            const traceEvents = [
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_1__.makeInstantEvent)('FakeInstantEvent', 0, '*', pid, tid),
            ];
            const onStartEvent = sinon.spy(_event => { });
            const onEndEvent = sinon.spy(_event => { });
            const onInstantEvent = sinon.spy(_event => { });
            _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.forEachEvent(traceEvents, {
                onEndEvent,
                onStartEvent,
                onInstantEvent,
            });
            assert.strictEqual(onStartEvent.callCount, 0);
            assert.strictEqual(onEndEvent.callCount, 0);
            assert.strictEqual(onInstantEvent.callCount, 1);
        });
        it('skips async events by default', async () => {
            const traceEvents = [
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_1__.makeAsyncStartEvent)('FakeAsync', 0, pid, tid),
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_1__.makeAsyncEndEvent)('FakeAsync', 0, pid, tid),
            ];
            const onStartEvent = sinon.spy(_event => { });
            const onEndEvent = sinon.spy(_event => { });
            const onInstantEvent = sinon.spy(_event => { });
            _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.forEachEvent(traceEvents, {
                onEndEvent,
                onStartEvent,
                onInstantEvent,
            });
            assert.strictEqual(onStartEvent.callCount, 0);
            assert.strictEqual(onEndEvent.callCount, 0);
            assert.strictEqual(onInstantEvent.callCount, 0);
        });
        it('can be configured to include async events', async () => {
            const traceEvents = [
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_1__.makeAsyncStartEvent)('FakeAsync', 0, pid, tid),
                (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_1__.makeAsyncEndEvent)('FakeAsync', 0, pid, tid),
            ];
            const onStartEvent = sinon.spy(_event => { });
            const onEndEvent = sinon.spy(_event => { });
            const onInstantEvent = sinon.spy(_event => { });
            _trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.forEachEvent(traceEvents, {
                onEndEvent,
                onStartEvent,
                onInstantEvent,
                ignoreAsyncEvents: false,
            });
            assert.strictEqual(onStartEvent.callCount, 0);
            assert.strictEqual(onEndEvent.callCount, 0);
            assert.strictEqual(onInstantEvent.callCount, 2);
        });
    });
    describe('isTopLevelEvent', () => {
        it('is true for a RunTask event', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'web-dev.json.gz');
            const runTask = traceData.Renderer.allTraceEntries.find(_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isTraceEventRunTask);
            assert.isOk(runTask);
            assert.isTrue(_trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Trace.isTopLevelEvent(runTask));
        });
    });
});


/***/ })

}]);