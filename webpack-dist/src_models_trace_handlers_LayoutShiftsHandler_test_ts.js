"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_models_trace_handlers_LayoutShiftsHandler_test_ts"],{

/***/ "./src/models/trace/handlers/LayoutShiftsHandler.test.ts":
/*!***************************************************************!*\
  !*** ./src/models/trace/handlers/LayoutShiftsHandler.test.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./src/testing/TraceLoader.ts");
/* harmony import */ var _trace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../trace.js */ "./src/models/trace/trace.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


async function processTrace(context, url) {
    _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.reset();
    _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.initialize();
    _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.LayoutShifts.reset();
    _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.LayoutShifts.initialize();
    try {
        const events = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(context, url);
        for (const event of events) {
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.handleEvent(event);
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Screenshots.handleEvent(event);
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.LayoutShifts.handleEvent(event);
        }
    }
    catch (error) {
        assert.fail(error);
    }
    await _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.finalize();
    await _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Screenshots.finalize();
    await _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.LayoutShifts.finalize();
}
describe('LayoutShiftsHandler', function () {
    beforeEach(async () => {
        // The layout shifts handler stores by process, so to make life easier we
        // run the meta handler here, too, so that later on we can get the IDs of
        // the main renderer process and thread.
        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.reset();
        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.initialize();
        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.LayoutShifts.reset();
    });
    it('clusters a single frame correctly', async function () {
        await processTrace(this, 'cls-single-frame.json.gz');
        const layoutShifts = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.LayoutShifts.data();
        assert.strictEqual(layoutShifts.clusters.length, 1);
        assert.strictEqual(layoutShifts.clusters[0].clusterCumulativeScore, 0.29522728495836237);
    });
    it('creates a cluster after the maximum time gap between shifts', async function () {
        await processTrace(this, 'cls-cluster-max-timeout.json.gz');
        const layoutShifts = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.LayoutShifts.data();
        assert.strictEqual(layoutShifts.clusters.length, 3);
        // The first cluster should end because the maximum time gap between
        // shifts ends, and thus the time between the last shift and the window
        // end should be exactly MAX_SHIFT_TIME_DELTA;
        const firstCluster = layoutShifts.clusters[0];
        const firstClusterEvents = layoutShifts.clusters[0].events;
        assert.strictEqual(firstCluster.clusterWindow.max - firstClusterEvents[firstClusterEvents.length - 1].ts, _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.LayoutShifts.MAX_SHIFT_TIME_DELTA);
        // There are seven shifts in quick succession in the first cluster,
        // only one shift in the second cluster and only one shift in the
        // third cluster.
        assert.strictEqual(layoutShifts.clusters[0].events.length, 7);
        assert.strictEqual(layoutShifts.clusters[1].events.length, 1);
        assert.strictEqual(layoutShifts.clusters[2].events.length, 1);
    });
    it('creates a cluster after a navigation', async function () {
        await processTrace(this, 'cls-cluster-navigation.json.gz');
        const layoutShifts = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.LayoutShifts.data();
        const { navigationsByFrameId, mainFrameId } = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.data();
        const navigations = navigationsByFrameId.get(mainFrameId);
        if (!navigations || navigations.length === 0) {
            assert.fail('No navigations found');
        }
        assert.strictEqual(layoutShifts.clusters[0].clusterWindow.max, navigations[0].ts);
        // The first cluster happens before any navigation
        assert.isUndefined(layoutShifts.clusters[0].navigationId);
        // We should see an initial cluster here from the first layout shifts,
        // followed by 1 for each of the navigations themselves.
        assert.strictEqual(layoutShifts.clusters.length, navigations.length + 1);
        const secondCluster = layoutShifts.clusters[1];
        // The second cluster should be marked to start at the first shift timestamp.
        assert.strictEqual(secondCluster.clusterWindow.min, secondCluster.events[0].ts);
        // The second cluster happened after the first navigation, so it should
        // have navigationId set to the ID of the first navigation
        assert.isDefined(secondCluster.navigationId);
        assert.strictEqual(secondCluster.navigationId, navigations[0].args.data?.navigationId);
    });
    it('creates a cluster after exceeding the continuous shift limit', async function () {
        await processTrace(this, 'cls-cluster-max-duration.json.gz');
        const layoutShifts = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.LayoutShifts.data();
        assert.strictEqual(layoutShifts.clusters.length, 2);
        // Cluster must be closed as soon as MAX_CLUSTER_DURATION is reached, even if
        // there is a gap greater than MAX_SHIFT_TIME_DELTA right after the max window
        // length happens.
        assert.strictEqual(layoutShifts.clusters[0].clusterWindow.max - layoutShifts.clusters[0].clusterWindow.min, _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.LayoutShifts.MAX_CLUSTER_DURATION);
    });
    it('sets the end of the last session window to the trace end time correctly', async function () {
        await processTrace(this, 'cls-cluster-max-duration.json.gz');
        const layoutShifts = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.LayoutShifts.data();
        assert.strictEqual(layoutShifts.clusters.at(-1)?.clusterWindow.max, _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.data().traceBounds.max);
    });
    it('sets the end of the last session window to the max gap between duration correctly', async function () {
        await processTrace(this, 'cls-cluster-max-timeout.json.gz');
        const layoutShifts = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.LayoutShifts.data();
        const lastWindow = layoutShifts.clusters.at(-1)?.clusterWindow;
        const lastShiftInWindow = layoutShifts.clusters.at(-1)?.events.at(-1);
        if (!lastWindow) {
            assert.fail('Session window not found.');
        }
        if (!lastShiftInWindow) {
            assert.fail('Session window not found.');
        }
        assert.strictEqual(lastWindow.max, lastShiftInWindow.ts + _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.LayoutShifts.MAX_SHIFT_TIME_DELTA);
        assert.isBelow(lastWindow.range, _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.LayoutShifts.MAX_CLUSTER_DURATION);
    });
    it('sets the end of the last session window to the max session duration correctly', async function () {
        await processTrace(this, 'cls-last-cluster-max-duration.json.gz');
        const layoutShifts = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.LayoutShifts.data();
        const lastWindow = layoutShifts.clusters.at(-1)?.clusterWindow;
        const lastShiftInWindow = layoutShifts.clusters.at(-1)?.events.at(-1);
        if (!lastWindow) {
            assert.fail('Session window not found.');
        }
        if (!lastShiftInWindow) {
            assert.fail('Session window not found.');
        }
        assert.strictEqual(lastWindow.range, _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.LayoutShifts.MAX_CLUSTER_DURATION);
    });
    it('demarcates cluster score windows correctly', async function () {
        await processTrace(this, 'cls-multiple-frames.json.gz');
        const layoutShifts = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.LayoutShifts.data();
        assert.strictEqual(layoutShifts.clusters.length, 5);
        for (const cluster of layoutShifts.clusters) {
            let clusterScore = 0;
            for (const event of cluster.events) {
                const scoreBeforeEvent = clusterScore;
                clusterScore += event.args.data ? event.args.data.weighted_score_delta : 0;
                // Here we've crossed the threshold from Good to NI (but not Bad) so
                // check that both the Good and NI windows values are set as expected.
                if (scoreBeforeEvent < _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.LayoutShifts.LayoutShiftsThreshold.NEEDS_IMPROVEMENT &&
                    clusterScore >= _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.LayoutShifts.LayoutShiftsThreshold.NEEDS_IMPROVEMENT &&
                    clusterScore < _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.LayoutShifts.LayoutShiftsThreshold.BAD) {
                    assert.strictEqual(cluster.scoreWindows.good.max, event.ts - 1);
                    if (!cluster.scoreWindows.needsImprovement) {
                        assert.fail('No Needs Improvement window');
                    }
                    assert.strictEqual(cluster.scoreWindows.needsImprovement.min, event.ts);
                }
                // Here we have transitioned from eiter Good or NI to Bad, so
                // again we assert that the Bad window starts when expected,
                // and that either the NI or Good window finishes just prior.
                if (scoreBeforeEvent < _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.LayoutShifts.LayoutShiftsThreshold.BAD &&
                    clusterScore >= _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.LayoutShifts.LayoutShiftsThreshold.BAD) {
                    if (!cluster.scoreWindows.bad) {
                        assert.fail('No Bad window');
                    }
                    if (cluster.scoreWindows.needsImprovement) {
                        assert.strictEqual(cluster.scoreWindows.needsImprovement.max, event.ts - 1);
                    }
                    else {
                        assert.strictEqual(cluster.scoreWindows.good.max, event.ts - 1);
                    }
                    assert.strictEqual(cluster.scoreWindows.bad.min, event.ts);
                }
            }
        }
    });
    it('calculates Cumulative Layout Shift correctly for multiple session windows', async function () {
        await processTrace(this, 'cls-cluster-max-timeout.json.gz');
        const layoutShifts = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.LayoutShifts.data();
        assert.strictEqual(layoutShifts.clusters.length, 3);
        let globalCLS = 0;
        let clusterCount = 1;
        let clusterWithCLS = 0;
        for (const cluster of layoutShifts.clusters) {
            let clusterCumulativeScore = 0;
            for (const shift of cluster.events) {
                clusterCumulativeScore += shift.args.data?.weighted_score_delta || 0;
                // Test the cumulative score until this shift.
                assert.strictEqual(shift.parsedData.cumulativeWeightedScoreInWindow, clusterCumulativeScore);
                // Test the score of this shift's session window.
                assert.strictEqual(shift.parsedData.sessionWindowData.cumulativeWindowScore, cluster.clusterCumulativeScore);
                // Test the id of this shift's session window.
                assert.strictEqual(shift.parsedData.sessionWindowData.id, clusterCount);
            }
            clusterCount++;
            // Test the accumulated
            assert.strictEqual(cluster.clusterCumulativeScore, clusterCumulativeScore);
            if (cluster.clusterCumulativeScore > globalCLS) {
                globalCLS = cluster.clusterCumulativeScore;
                clusterWithCLS = clusterCount - 1;
            }
        }
        // Test the calculated CLS.
        assert.strictEqual(layoutShifts.sessionMaxScore, globalCLS);
        assert.strictEqual(layoutShifts.clsWindowID, clusterWithCLS);
    });
});


/***/ })

}]);