"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_trace_handlers_LayoutShiftsHandler_test_js"], {
"./models/trace/handlers/LayoutShiftsHandler.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */var _trace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../trace.js */ "./models/trace/trace.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}


function processTrace(context, url) {
    return _processTrace.apply(this, arguments);
}
function _processTrace() {
    _processTrace = _async_to_generator(function(context, url) {
        var events, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, error;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.reset();
                    _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.initialize();
                    _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.LayoutShifts.reset();
                    _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.LayoutShifts.initialize();
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        3,
                        ,
                        4
                    ]);
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(context, url)
                    ];
                case 2:
                    events = _state.sent();
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = events[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            event = _step.value;
                            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.handleEvent(event);
                            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Screenshots.handleEvent(event);
                            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.LayoutShifts.handleEvent(event);
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                    return [
                        3,
                        4
                    ];
                case 3:
                    error = _state.sent();
                    assert.fail(error);
                    return [
                        3,
                        4
                    ];
                case 4:
                    return [
                        4,
                        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.finalize()
                    ];
                case 5:
                    _state.sent();
                    return [
                        4,
                        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Screenshots.finalize()
                    ];
                case 6:
                    _state.sent();
                    return [
                        4,
                        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.LayoutShifts.finalize()
                    ];
                case 7:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return _processTrace.apply(this, arguments);
}
describe('LayoutShiftsHandler', function() {
    beforeEach(/*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            // The layout shifts handler stores by process, so to make life easier we
            // run the meta handler here, too, so that later on we can get the IDs of
            // the main renderer process and thread.
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.reset();
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.initialize();
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.LayoutShifts.reset();
            return [
                2
            ];
        });
    }));
    it('clusters a single frame correctly', /*#__PURE__*/ _async_to_generator(function() {
        var layoutShifts;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        processTrace(this, 'cls-single-frame.json.gz')
                    ];
                case 1:
                    _state.sent();
                    layoutShifts = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.LayoutShifts.data();
                    assert.strictEqual(layoutShifts.clusters.length, 1);
                    assert.strictEqual(layoutShifts.clusters[0].clusterCumulativeScore, 0.29522728495836237);
                    return [
                        2
                    ];
            }
        });
    }));
    it('creates a cluster after the maximum time gap between shifts', /*#__PURE__*/ _async_to_generator(function() {
        var layoutShifts, firstCluster, firstClusterEvents;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        processTrace(this, 'cls-cluster-max-timeout.json.gz')
                    ];
                case 1:
                    _state.sent();
                    layoutShifts = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.LayoutShifts.data();
                    assert.strictEqual(layoutShifts.clusters.length, 3);
                    // The first cluster should end because the maximum time gap between
                    // shifts ends, and thus the time between the last shift and the window
                    // end should be exactly MAX_SHIFT_TIME_DELTA;
                    firstCluster = layoutShifts.clusters[0];
                    firstClusterEvents = layoutShifts.clusters[0].events;
                    assert.strictEqual(firstCluster.clusterWindow.max - firstClusterEvents[firstClusterEvents.length - 1].ts, _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.LayoutShifts.MAX_SHIFT_TIME_DELTA);
                    // There are seven shifts in quick succession in the first cluster,
                    // only one shift in the second cluster and only one shift in the
                    // third cluster.
                    assert.strictEqual(layoutShifts.clusters[0].events.length, 7);
                    assert.strictEqual(layoutShifts.clusters[1].events.length, 1);
                    assert.strictEqual(layoutShifts.clusters[2].events.length, 1);
                    return [
                        2
                    ];
            }
        });
    }));
    it('creates a cluster after a navigation', /*#__PURE__*/ _async_to_generator(function() {
        var _navigations__args_data, layoutShifts, _TraceModel_Handlers_ModelHandlers_Meta_data, navigationsByFrameId, mainFrameId, navigations, secondCluster;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        processTrace(this, 'cls-cluster-navigation.json.gz')
                    ];
                case 1:
                    _state.sent();
                    layoutShifts = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.LayoutShifts.data();
                    _TraceModel_Handlers_ModelHandlers_Meta_data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.data(), navigationsByFrameId = _TraceModel_Handlers_ModelHandlers_Meta_data.navigationsByFrameId, mainFrameId = _TraceModel_Handlers_ModelHandlers_Meta_data.mainFrameId;
                    navigations = navigationsByFrameId.get(mainFrameId);
                    if (!navigations || navigations.length === 0) {
                        assert.fail('No navigations found');
                    }
                    assert.strictEqual(layoutShifts.clusters[0].clusterWindow.max, navigations[0].ts);
                    // The first cluster happens before any navigation
                    assert.isUndefined(layoutShifts.clusters[0].navigationId);
                    // We should see an initial cluster here from the first layout shifts,
                    // followed by 1 for each of the navigations themselves.
                    assert.strictEqual(layoutShifts.clusters.length, navigations.length + 1);
                    secondCluster = layoutShifts.clusters[1];
                    // The second cluster should be marked to start at the first shift timestamp.
                    assert.strictEqual(secondCluster.clusterWindow.min, secondCluster.events[0].ts);
                    // The second cluster happened after the first navigation, so it should
                    // have navigationId set to the ID of the first navigation
                    assert.isDefined(secondCluster.navigationId);
                    assert.strictEqual(secondCluster.navigationId, (_navigations__args_data = navigations[0].args.data) === null || _navigations__args_data === void 0 ? void 0 : _navigations__args_data.navigationId);
                    return [
                        2
                    ];
            }
        });
    }));
    it('creates a cluster after exceeding the continuous shift limit', /*#__PURE__*/ _async_to_generator(function() {
        var layoutShifts;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        processTrace(this, 'cls-cluster-max-duration.json.gz')
                    ];
                case 1:
                    _state.sent();
                    layoutShifts = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.LayoutShifts.data();
                    assert.strictEqual(layoutShifts.clusters.length, 2);
                    // Cluster must be closed as soon as MAX_CLUSTER_DURATION is reached, even if
                    // there is a gap greater than MAX_SHIFT_TIME_DELTA right after the max window
                    // length happens.
                    assert.strictEqual(layoutShifts.clusters[0].clusterWindow.max - layoutShifts.clusters[0].clusterWindow.min, _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.LayoutShifts.MAX_CLUSTER_DURATION);
                    return [
                        2
                    ];
            }
        });
    }));
    it('sets the end of the last session window to the trace end time correctly', /*#__PURE__*/ _async_to_generator(function() {
        var _layoutShifts_clusters_at, layoutShifts;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        processTrace(this, 'cls-cluster-max-duration.json.gz')
                    ];
                case 1:
                    _state.sent();
                    layoutShifts = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.LayoutShifts.data();
                    assert.strictEqual((_layoutShifts_clusters_at = layoutShifts.clusters.at(-1)) === null || _layoutShifts_clusters_at === void 0 ? void 0 : _layoutShifts_clusters_at.clusterWindow.max, _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.data().traceBounds.max);
                    return [
                        2
                    ];
            }
        });
    }));
    it('sets the end of the last session window to the max gap between duration correctly', /*#__PURE__*/ _async_to_generator(function() {
        var _layoutShifts_clusters_at, _layoutShifts_clusters_at1, layoutShifts, lastWindow, lastShiftInWindow;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        processTrace(this, 'cls-cluster-max-timeout.json.gz')
                    ];
                case 1:
                    _state.sent();
                    layoutShifts = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.LayoutShifts.data();
                    lastWindow = (_layoutShifts_clusters_at = layoutShifts.clusters.at(-1)) === null || _layoutShifts_clusters_at === void 0 ? void 0 : _layoutShifts_clusters_at.clusterWindow;
                    lastShiftInWindow = (_layoutShifts_clusters_at1 = layoutShifts.clusters.at(-1)) === null || _layoutShifts_clusters_at1 === void 0 ? void 0 : _layoutShifts_clusters_at1.events.at(-1);
                    if (!lastWindow) {
                        assert.fail('Session window not found.');
                    }
                    if (!lastShiftInWindow) {
                        assert.fail('Session window not found.');
                    }
                    assert.strictEqual(lastWindow.max, lastShiftInWindow.ts + _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.LayoutShifts.MAX_SHIFT_TIME_DELTA);
                    assert.isBelow(lastWindow.range, _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.LayoutShifts.MAX_CLUSTER_DURATION);
                    return [
                        2
                    ];
            }
        });
    }));
    it('sets the end of the last session window to the max session duration correctly', /*#__PURE__*/ _async_to_generator(function() {
        var _layoutShifts_clusters_at, _layoutShifts_clusters_at1, layoutShifts, lastWindow, lastShiftInWindow;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        processTrace(this, 'cls-last-cluster-max-duration.json.gz')
                    ];
                case 1:
                    _state.sent();
                    layoutShifts = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.LayoutShifts.data();
                    lastWindow = (_layoutShifts_clusters_at = layoutShifts.clusters.at(-1)) === null || _layoutShifts_clusters_at === void 0 ? void 0 : _layoutShifts_clusters_at.clusterWindow;
                    lastShiftInWindow = (_layoutShifts_clusters_at1 = layoutShifts.clusters.at(-1)) === null || _layoutShifts_clusters_at1 === void 0 ? void 0 : _layoutShifts_clusters_at1.events.at(-1);
                    if (!lastWindow) {
                        assert.fail('Session window not found.');
                    }
                    if (!lastShiftInWindow) {
                        assert.fail('Session window not found.');
                    }
                    assert.strictEqual(lastWindow.range, _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.LayoutShifts.MAX_CLUSTER_DURATION);
                    return [
                        2
                    ];
            }
        });
    }));
    it('demarcates cluster score windows correctly', /*#__PURE__*/ _async_to_generator(function() {
        var layoutShifts, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, cluster, clusterScore, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, event, scoreBeforeEvent;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        processTrace(this, 'cls-multiple-frames.json.gz')
                    ];
                case 1:
                    _state.sent();
                    layoutShifts = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.LayoutShifts.data();
                    assert.strictEqual(layoutShifts.clusters.length, 5);
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = layoutShifts.clusters[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            cluster = _step.value;
                            clusterScore = 0;
                            _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                            try {
                                for(_iterator1 = cluster.events[Symbol.iterator](); !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                    event = _step1.value;
                                    scoreBeforeEvent = clusterScore;
                                    clusterScore += event.args.data ? event.args.data.weighted_score_delta : 0;
                                    // Here we've crossed the threshold from Good to NI (but not Bad) so
                                    // check that both the Good and NI windows values are set as expected.
                                    if (scoreBeforeEvent < 0.1 /* TraceModel.Handlers.ModelHandlers.LayoutShifts.LayoutShiftsThreshold.NEEDS_IMPROVEMENT */  && clusterScore >= 0.1 /* TraceModel.Handlers.ModelHandlers.LayoutShifts.LayoutShiftsThreshold.NEEDS_IMPROVEMENT */  && clusterScore < 0.25 /* TraceModel.Handlers.ModelHandlers.LayoutShifts.LayoutShiftsThreshold.BAD */ ) {
                                        assert.strictEqual(cluster.scoreWindows.good.max, event.ts - 1);
                                        if (!cluster.scoreWindows.needsImprovement) {
                                            assert.fail('No Needs Improvement window');
                                        }
                                        assert.strictEqual(cluster.scoreWindows.needsImprovement.min, event.ts);
                                    }
                                    // Here we have transitioned from eiter Good or NI to Bad, so
                                    // again we assert that the Bad window starts when expected,
                                    // and that either the NI or Good window finishes just prior.
                                    if (scoreBeforeEvent < 0.25 /* TraceModel.Handlers.ModelHandlers.LayoutShifts.LayoutShiftsThreshold.BAD */  && clusterScore >= 0.25 /* TraceModel.Handlers.ModelHandlers.LayoutShifts.LayoutShiftsThreshold.BAD */ ) {
                                        if (!cluster.scoreWindows.bad) {
                                            assert.fail('No Bad window');
                                        }
                                        if (cluster.scoreWindows.needsImprovement) {
                                            assert.strictEqual(cluster.scoreWindows.needsImprovement.max, event.ts - 1);
                                        } else {
                                            assert.strictEqual(cluster.scoreWindows.good.max, event.ts - 1);
                                        }
                                        assert.strictEqual(cluster.scoreWindows.bad.min, event.ts);
                                    }
                                }
                            } catch (err) {
                                _didIteratorError1 = true;
                                _iteratorError1 = err;
                            } finally{
                                try {
                                    if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                        _iterator1.return();
                                    }
                                } finally{
                                    if (_didIteratorError1) {
                                        throw _iteratorError1;
                                    }
                                }
                            }
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                    return [
                        2
                    ];
            }
        });
    }));
    it('calculates Cumulative Layout Shift correctly for multiple session windows', /*#__PURE__*/ _async_to_generator(function() {
        var layoutShifts, globalCLS, clusterCount, clusterWithCLS, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, cluster, clusterCumulativeScore, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, shift, _shift_args_data;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        processTrace(this, 'cls-cluster-max-timeout.json.gz')
                    ];
                case 1:
                    _state.sent();
                    layoutShifts = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.LayoutShifts.data();
                    assert.strictEqual(layoutShifts.clusters.length, 3);
                    globalCLS = 0;
                    clusterCount = 1;
                    clusterWithCLS = 0;
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = layoutShifts.clusters[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            cluster = _step.value;
                            clusterCumulativeScore = 0;
                            _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                            try {
                                for(_iterator1 = cluster.events[Symbol.iterator](); !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                    shift = _step1.value;
                                    ;
                                    clusterCumulativeScore += ((_shift_args_data = shift.args.data) === null || _shift_args_data === void 0 ? void 0 : _shift_args_data.weighted_score_delta) || 0;
                                    // Test the cumulative score until this shift.
                                    assert.strictEqual(shift.parsedData.cumulativeWeightedScoreInWindow, clusterCumulativeScore);
                                    // Test the score of this shift's session window.
                                    assert.strictEqual(shift.parsedData.sessionWindowData.cumulativeWindowScore, cluster.clusterCumulativeScore);
                                    // Test the id of this shift's session window.
                                    assert.strictEqual(shift.parsedData.sessionWindowData.id, clusterCount);
                                }
                            } catch (err) {
                                _didIteratorError1 = true;
                                _iteratorError1 = err;
                            } finally{
                                try {
                                    if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                        _iterator1.return();
                                    }
                                } finally{
                                    if (_didIteratorError1) {
                                        throw _iteratorError1;
                                    }
                                }
                            }
                            clusterCount++;
                            // Test the accumulated
                            assert.strictEqual(cluster.clusterCumulativeScore, clusterCumulativeScore);
                            if (cluster.clusterCumulativeScore > globalCLS) {
                                globalCLS = cluster.clusterCumulativeScore;
                                clusterWithCLS = clusterCount - 1;
                            }
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                    // Test the calculated CLS.
                    assert.strictEqual(layoutShifts.sessionMaxScore, globalCLS);
                    assert.strictEqual(layoutShifts.clsWindowID, clusterWithCLS);
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=LayoutShiftsHandler.test.js.map


}),

}]);