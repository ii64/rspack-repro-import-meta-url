"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_trace_handlers_UserInteractionsHandler_test_js"],{

/***/ "./models/trace/handlers/UserInteractionsHandler.test.js":
/*!***************************************************************!*\
  !*** ./models/trace/handlers/UserInteractionsHandler.test.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */ var _trace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../trace.js */ "./models/trace/trace.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


async function processTrace(context, path) {
    const traceEvents = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(context, path);
    _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.reset();
    _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.initialize();
    for (const event of traceEvents) {
        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.handleEvent(event);
        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserInteractions.handleEvent(event);
    }
    await _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.finalize();
    await _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserInteractions.finalize();
}
beforeEach(() => {
    _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.reset();
    _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.initialize();
});
describe('UserInteractionsHandler', function () {
    function makeFakeInteraction(type, options) {
        const event = {
            name: 'EventTiming',
            type,
            ts: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(options.startTime),
            dur: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(options.endTime - options.startTime),
            processingStart: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(options.processingStart || 0),
            processingEnd: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(options.processingEnd || 0),
            interactionId: options.interactionId,
        };
        return event;
    }
    describe('error handling', () => {
        it('throws if not initialized', async () => {
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.reset();
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.initialize();
            // Finalize the handler by calling data and then finalize on it.
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserInteractions.data();
            await _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.finalize();
            await _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserInteractions.finalize();
            assert.throws(() => {
                const fakeEvent = {};
                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserInteractions.handleEvent(fakeEvent);
            }, 'Handler is not initialized');
        });
    });
    it('returns all user interactions', async function () {
        const traceEvents = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'slow-interaction-button-click.json.gz');
        for (const event of traceEvents) {
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserInteractions.handleEvent(event);
        }
        const data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserInteractions.data();
        const clicks = data.allEvents.filter(event => {
            if (!event.args.data) {
                return false;
            }
            return event.args.data.type === 'click';
        });
        assert.strictEqual(data.allEvents.length, 58);
        assert.strictEqual(clicks.length, 1);
    });
    it('returns all interaction events', async () => {
        await processTrace(this, 'slow-interaction-button-click.json.gz');
        const data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserInteractions.data();
        // There are three inct interactions:
        // pointerdown on the button (start of the click)
        // pointerup & click on the button (end of the click)
        assert.strictEqual(data.interactionEvents.length, 3);
    });
    it('adds microsecond processingStart and processingEnd times to the synthetic event', async function () {
        await processTrace(this, 'one-second-interaction.json.gz');
        const data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserInteractions.data();
        const oneSecondInteraction = Array.from(data.interactionEvents).find(entry => {
            return entry.dur === 979974 && entry.type === 'click';
        });
        if (!oneSecondInteraction) {
            throw new Error('Could not find interaction');
        }
        assert.strictEqual(oneSecondInteraction.processingStart, 141251950944);
        assert.strictEqual(oneSecondInteraction.processingEnd, 141252927944);
    });
    it('adds the INP phases to the interaction', async function () {
        await processTrace(this, 'one-second-interaction.json.gz');
        const data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserInteractions.data();
        const oneSecondInteraction = Array.from(data.interactionEvents).find(entry => {
            return entry.dur === 979974 && entry.type === 'click';
        });
        if (!oneSecondInteraction) {
            throw new Error('Could not find interaction');
        }
        // These numbers do seem suspciously round: that is because they are from
        // converted millisecond values and this is expected.
        assert.strictEqual(oneSecondInteraction.inputDelay, 1_000);
        assert.strictEqual(oneSecondInteraction.mainThreadHandling, 977_000);
        assert.strictEqual(oneSecondInteraction.presentationDelay, 1974);
    });
    it('identifies the longest interaction', async () => {
        await processTrace(this, 'slow-interaction-keydown.json.gz');
        const data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserInteractions.data();
        assert.lengthOf(data.interactionEvents, 5);
        const expectedLongestEvent = data.interactionEvents.find(event => {
            return event.type === 'keydown' && event.interactionId === 7378;
        });
        assert.strictEqual(data.longestInteractionEvent, expectedLongestEvent);
    });
    it('returns a set of all interactions that exceed the threshold', async () => {
        await processTrace(this, 'one-second-interaction.json.gz');
        const data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserInteractions.data();
        // There are two long interactions: the pointerup, and the click.
        assert.strictEqual(data.interactionsOverThreshold.size, 2);
    });
    it('does not include interactions below the threshold', async () => {
        await processTrace(this, 'slow-interaction-keydown.json.gz');
        const data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserInteractions.data();
        // All the interactions in this trace are < 200ms
        assert.strictEqual(data.interactionsOverThreshold.size, 0);
    });
    it('sets the `dur` key on each event by finding the begin and end events and subtracting the ts', async () => {
        await processTrace(this, 'slow-interaction-button-click.json.gz');
        const data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserInteractions.data();
        for (const syntheticEvent of data.interactionEvents) {
            assert.strictEqual(syntheticEvent.dur, syntheticEvent.args.data.endEvent.ts - syntheticEvent.args.data.beginEvent.ts);
        }
    });
    it('gets the right interaction IDs for each interaction', async () => {
        await processTrace(this, 'slow-interaction-button-click.json.gz');
        const data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserInteractions.data();
        assert.deepEqual(data.interactionEvents.map(i => i.interactionId), [
            // pointerdown, pointerup and click are all from the same interaction
            1540,
            1540,
            1540,
        ]);
    });
    it('gets the right interaction IDs for a keypress interaction', async () => {
        await processTrace(this, 'slow-interaction-keydown.json.gz');
        const data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserInteractions.data();
        assert.deepEqual(data.interactionEvents.map(i => i.interactionId), [
            // pointerdown from clicking on the input
            7371,
            // pointerup from clicking on the input
            7371,
            // click from clicking on the input
            7371,
            // keydown from typing character
            7378,
            // keyup from typing character
            7378,
        ]);
    });
    it('detects correct events for a click and keydown interaction', async () => {
        await processTrace(this, 'slow-interaction-keydown.json.gz');
        const data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserInteractions.data();
        const foundInteractions = data.allEvents.filter(e => e.args.data && e.args.data.duration > 1 && e.args.data.interactionId);
        // We expect there to be 3 interactions:
        // User clicks on input:
        // 1.pointerdown, 2. pointerup, 3. click
        // User types into input:
        // 4. keydown, 5. keyup
        assert.deepEqual(foundInteractions.map(event => event.args.data?.type), ['pointerdown', 'pointerup', 'click', 'keydown', 'keyup']);
        assert.deepEqual(foundInteractions.map(e => e.args.data?.interactionId), [
            // The first three events relate to the click, so they have the same InteractionID
            7371,
            7371,
            7371,
            // The final two relate to the keypress, so they have the same InteractionID
            7378,
            7378,
        ]);
    });
    it('finds all interaction events with a duration and interactionId', async () => {
        const events = [
            {
                cat: 'devtools.timeline',
                ph: "b" /* TraceModel.Types.TraceEvents.Phase.ASYNC_NESTABLE_START */,
                pid: 1537729, // the Renderer Thread
                tid: 1, // CrRendererMain
                id: '1234',
                ts: 10,
                dur: 500,
                scope: 'scope',
                name: 'EventTiming',
                args: {
                    data: {
                        'duration': 16,
                        'interactionId': 9700,
                        'nodeId': 0,
                        'processingEnd': 993,
                        'processingStart': 993,
                        'timeStamp': 985,
                        'type': 'pointerdown',
                    },
                },
            },
            // Has an interactionId of 0, so should NOT be included.
            {
                cat: 'devtools.timeline',
                ph: "b" /* TraceModel.Types.TraceEvents.Phase.ASYNC_NESTABLE_START */,
                pid: 1537729, // the Renderer Thread
                tid: 1, // CrRendererMain
                id: '1234',
                ts: 10,
                dur: 500,
                scope: 'scope',
                name: 'EventTiming',
                args: {
                    data: {
                        'duration': 16,
                        'interactionId': 0,
                        'nodeId': 0,
                        'processingEnd': 993,
                        'processingStart': 993,
                        'timeStamp': 985,
                        'type': 'pointerdown',
                    },
                },
            },
            // Has an duration of 0, so should NOT be included.
            {
                cat: 'devtools.timeline',
                ph: "b" /* TraceModel.Types.TraceEvents.Phase.ASYNC_NESTABLE_START */,
                pid: 1537729, // the Renderer Thread
                tid: 1, // CrRendererMain
                id: '1234',
                ts: 10,
                dur: 500,
                scope: 'scope',
                name: 'EventTiming',
                args: {
                    data: {
                        'duration': 0,
                        'interactionId': 0,
                        'nodeId': 0,
                        'processingEnd': 993,
                        'processingStart': 993,
                        'timeStamp': 985,
                        'type': 'pointerdown',
                    },
                },
            },
        ];
        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserInteractions.reset();
        for (const event of events) {
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserInteractions.handleEvent(event);
        }
        await _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.finalize();
        await _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserInteractions.finalize();
        const timings = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserInteractions.data().allEvents;
        assert.lengthOf(timings, 3);
    });
    describe('collapsing nested interactions', () => {
        const { removeNestedInteractions } = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserInteractions;
        it('removes interactions that have the same end time but are not the first event in that block', () => {
            /**
             * ========A=============
             *   ===========B========
             *   ===========C========
             *         =====D========
             */
            const eventA = makeFakeInteraction('pointerdown', { startTime: 0, endTime: 10, interactionId: 1 });
            const eventB = makeFakeInteraction('pointerdown', { startTime: 2, endTime: 10, interactionId: 2 });
            const eventC = makeFakeInteraction('pointerdown', { startTime: 4, endTime: 10, interactionId: 3 });
            const eventD = makeFakeInteraction('pointerdown', { startTime: 6, endTime: 10, interactionId: 4 });
            const result = removeNestedInteractions([eventA, eventB, eventC, eventD]);
            assert.deepEqual(result, [eventA]);
        });
        it('prefers the event with the longer processing start/end if the events have the same ts and dur', () => {
            // Here we would expect eventA to be used; these events both have the
            // same interactionId, the same start/end, but different processing
            // start/end. In this situation we want to use the one with the largest
            // processing range, as that is more likely accurate to the situation. We
            // see in traces that other events will have processingStart and
            // processingEnd set to the same value, which does not provide much
            // insight compared to picking the event that does have more information
            // and accurate processing numbers.
            const eventA = makeFakeInteraction('pointerdown', { startTime: 0, endTime: 10, interactionId: 1, processingStart: 1, processingEnd: 8 });
            const eventB = makeFakeInteraction('pointerdown', { startTime: 0, endTime: 10, interactionId: 1, processingStart: 6, processingEnd: 6 });
            const result = removeNestedInteractions([eventA, eventB]);
            assert.deepEqual(result, [eventA]);
        });
        it('only collapses events of the same type', () => {
            /**
             * Here we should collapse B, because A is bigger and of the same type.
             * Similarly, we should collapse D, because C is bigger and of the same type.
             * But C should remain visible, because it is a pointer event, not a key event,
             * and therefore does not get collapsed into A.
             * ========A=[keydown]====
             *   =======B=[keyup]=====
             *    ====C=[pointerdown]=
             *         =D=[pointerup]=
             */
            const eventA = makeFakeInteraction('keydown', { startTime: 0, endTime: 10, interactionId: 1 });
            const eventB = makeFakeInteraction('keyup', { startTime: 2, endTime: 10, interactionId: 2 });
            const eventC = makeFakeInteraction('pointerdown', { startTime: 4, endTime: 10, interactionId: 3 });
            const eventD = makeFakeInteraction('pointerup', { startTime: 6, endTime: 10, interactionId: 4 });
            const result = removeNestedInteractions([eventA, eventB, eventC, eventD]);
            assert.deepEqual(result, [eventA, eventC]);
        });
        it('does not remove interactions that overlap but have a different end time', () => {
            /**
             * ========A=============
             *   ===========B========
             *   ===========C========
             *         =====D================
             */
            const eventA = makeFakeInteraction('pointerdown', { startTime: 0, endTime: 10, interactionId: 1 });
            const eventB = makeFakeInteraction('pointerdown', { startTime: 2, endTime: 10, interactionId: 2 });
            const eventC = makeFakeInteraction('pointerdown', { startTime: 4, endTime: 10, interactionId: 3 });
            const eventD = makeFakeInteraction('pointerdown', { startTime: 6, endTime: 20, interactionId: 4 });
            const result = removeNestedInteractions([eventA, eventB, eventC, eventD]);
            assert.deepEqual(result, [eventA, eventD]);
        });
        it('does not remove interactions with an unexpected type', () => {
            /**
             * =====A=[pointerdown]=====
             *   ===========B=[unknown]=
             */
            const eventA = makeFakeInteraction('pointerdown', { startTime: 0, endTime: 10, interactionId: 1 });
            const eventB = makeFakeInteraction('unknown', { startTime: 2, endTime: 10, interactionId: 2 });
            const result = removeNestedInteractions([eventA, eventB]);
            assert.deepEqual(result, [eventA, eventB]);
        });
        it('correctly identifies nested events when their parent overlaps with multiple events', () => {
            /**
             * Here although it does not look like it on first glance, C is nested
             * within B and should therefore be hidden. Similarly, D is nested within A and
             * so should be hidden.
             *
             * ========A====== ======C====
             *   ===========B=============
             *   ======D======
             */
            const eventA = makeFakeInteraction('pointerdown', { startTime: 0, endTime: 5, interactionId: 1 });
            const eventB = makeFakeInteraction('pointerdown', { startTime: 2, endTime: 20, interactionId: 2 });
            const eventC = makeFakeInteraction('pointerdown', { startTime: 10, endTime: 20, interactionId: 3 });
            const eventD = makeFakeInteraction('pointerdown', { startTime: 2, endTime: 5, interactionId: 3 });
            const result = removeNestedInteractions([eventA, eventB, eventC, eventD]);
            assert.deepEqual(result, [eventA, eventB]);
        });
        it('returns the events in timestamp order', () => {
            /**
             * None of the events below overlap at all, this test makes sure that the order of events does not change.
             */
            const eventA = makeFakeInteraction('pointerdown', { startTime: 0, endTime: 5, interactionId: 1 });
            const eventB = makeFakeInteraction('pointerdown', { startTime: 10, endTime: 20, interactionId: 2 });
            const eventC = makeFakeInteraction('pointerdown', { startTime: 30, endTime: 40, interactionId: 3 });
            const eventD = makeFakeInteraction('pointerdown', { startTime: 50, endTime: 60, interactionId: 4 });
            const result = removeNestedInteractions([eventA, eventB, eventC, eventD]);
            assert.deepEqual(result, [eventA, eventB, eventC, eventD]);
        });
        it('can remove nested interactions in a real trace', async () => {
            await processTrace(this, 'nested-interactions.json.gz');
            const data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserInteractions.data();
            const visibleEventInteractionIds = data.interactionEventsWithNoNesting.map(event => {
                return `${event.type}:${event.interactionId}`;
            });
            // Note: it is very hard to explain in comments all these assertions, so
            // it is highly recommended that you load the trace file above into
            // DevTools to look at the timeline whilst working on this test.
            /**
             * This is a block of events with identical end times, so only the
             * first should be kept:
             * =====[keydown 3579]====
             *    ==[keydown 3558]====
             *       =[keyup 3558]====
             **/
            assert.isTrue(visibleEventInteractionIds.includes('keydown:3579'));
            assert.isFalse(visibleEventInteractionIds.includes('keydown:3558'));
            assert.isFalse(visibleEventInteractionIds.includes('keyup:3558'));
            /** This is a slightly offset block of events:
             * ====[keydown 3572]=====
             *    =[keydown 3565]=====
             *          ====[keydown 3586]========
             * In this test we want to make sure that 3565 is collapsed, but the
             * others are not.
             **/
            assert.isTrue(visibleEventInteractionIds.includes('keydown:3572'));
            assert.isTrue(visibleEventInteractionIds.includes('keydown:3586'));
            assert.isFalse(visibleEventInteractionIds.includes('keydown:3565'));
            /** This is a block of events that have offset overlaps:
             * ====[keydown 3614]=====  =====[keydown 3621]======
             *       =====[keydown 3628]=========================
             * In this test we want to make sure that 3621 is collapsed as it fits
             * iwthin 3628, but 3614 is not collapsed.
             **/
            assert.isTrue(visibleEventInteractionIds.includes('keydown:3614'));
            assert.isTrue(visibleEventInteractionIds.includes('keydown:3628'));
            assert.isFalse(visibleEventInteractionIds.includes('keydown:3621'));
        });
    });
    it('gets the correct score classification for Interaction to Next Paint event', () => {
        const eventA = makeFakeInteraction('pointerdown', { startTime: 0, endTime: 10_000, interactionId: 1 });
        assert.strictEqual(_trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserInteractions.scoreClassificationForInteractionToNextPaint(eventA.dur), "good" /* TraceModel.Handlers.ModelHandlers.PageLoadMetrics.ScoreClassification.GOOD */);
        const eventB = makeFakeInteraction('pointerdown', { startTime: 0, endTime: 250_000, interactionId: 1 });
        assert.strictEqual(_trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserInteractions.scoreClassificationForInteractionToNextPaint(eventB.dur), "ok" /* TraceModel.Handlers.ModelHandlers.PageLoadMetrics.ScoreClassification.OK */);
        const eventC = makeFakeInteraction('pointerdown', { startTime: 0, endTime: 1_000_000, interactionId: 1 });
        assert.strictEqual(_trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserInteractions.scoreClassificationForInteractionToNextPaint(eventC.dur), "bad" /* TraceModel.Handlers.ModelHandlers.PageLoadMetrics.ScoreClassification.BAD */);
    });
});
//# sourceMappingURL=UserInteractionsHandler.test.js.map

/***/ })

}]);