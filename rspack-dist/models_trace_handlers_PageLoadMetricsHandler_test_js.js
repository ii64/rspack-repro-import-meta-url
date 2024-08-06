"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_trace_handlers_PageLoadMetricsHandler_test_js"], {
"./models/trace/handlers/PageLoadMetricsHandler.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */var _trace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../trace.js */ "./models/trace/trace.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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



function countMetricOcurrences(scoresByMetricName, metricName) {
    return scoresByMetricName.reduce(function(acc, val) {
        if (val.get(metricName)) {
            return acc + 1;
        }
        return acc;
    }, 0);
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithEnvironment)('PageLoadMetricsHandler', function() {
    describe('contentful paints', function() {
        it('obtains all the FCP and LCP events for all frames', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, Meta, PageLoadMetrics, mainFrameId, pageLoadMetricsData, pageLoadEventsForMainFrame, scoresByMetricName, fcpCount, lcpCount;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.traceEngine(this, 'multiple-navigations-with-iframes.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        Meta = traceData.Meta, PageLoadMetrics = traceData.PageLoadMetrics;
                        mainFrameId = Meta.mainFrameId;
                        pageLoadMetricsData = PageLoadMetrics.metricScoresByFrameId;
                        assert.strictEqual(pageLoadMetricsData.size, 3);
                        pageLoadEventsForMainFrame = pageLoadMetricsData.get(mainFrameId);
                        if (!pageLoadEventsForMainFrame) {
                            assert.fail('Page load events for main frame were unexpectedly null.');
                        }
                        // There are 2 FCP events and 2 LCP events on the main frame: one for the first navigation,
                        // and one for the second.
                        assert.strictEqual(pageLoadEventsForMainFrame.size, 2);
                        scoresByMetricName = _to_consumable_array(pageLoadEventsForMainFrame.values());
                        fcpCount = countMetricOcurrences(scoresByMetricName, "FCP" /* TraceModel.Handlers.ModelHandlers.PageLoadMetrics.MetricName.FCP */ );
                        lcpCount = countMetricOcurrences(scoresByMetricName, "LCP" /* TraceModel.Handlers.ModelHandlers.PageLoadMetrics.MetricName.LCP */ );
                        assert.strictEqual(fcpCount, 2);
                        assert.strictEqual(lcpCount, 2);
                        return [
                            2
                        ];
                }
            });
        }));
        it('finds the right FCP and LCP events for a trace for a page that was refreshed', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, Meta, PageLoadMetrics, mainFrameId, pageLoadMetricsData, pageLoadEventsForMainFrame, scoresByMetricName, fcpCount, lcpCount;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.traceEngine(this, 'reload-and-trace-page.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        Meta = traceData.Meta, PageLoadMetrics = traceData.PageLoadMetrics;
                        mainFrameId = Meta.mainFrameId;
                        pageLoadMetricsData = PageLoadMetrics.metricScoresByFrameId;
                        // Only one frame to deal with
                        assert.strictEqual(pageLoadMetricsData.size, 1);
                        pageLoadEventsForMainFrame = pageLoadMetricsData.get(mainFrameId);
                        if (!pageLoadEventsForMainFrame) {
                            assert.fail('Page load events for main frame were unexpectedly null.');
                        }
                        // Single FCP event that occured after the refresh.
                        assert.strictEqual(pageLoadEventsForMainFrame.size, 1);
                        scoresByMetricName = _to_consumable_array(pageLoadEventsForMainFrame.values());
                        fcpCount = countMetricOcurrences(scoresByMetricName, "FCP" /* TraceModel.Handlers.ModelHandlers.PageLoadMetrics.MetricName.FCP */ );
                        lcpCount = countMetricOcurrences(scoresByMetricName, "LCP" /* TraceModel.Handlers.ModelHandlers.PageLoadMetrics.MetricName.LCP */ );
                        assert.strictEqual(fcpCount, 1);
                        assert.strictEqual(lcpCount, 1);
                        return [
                            2
                        ];
                }
            });
        }));
        it('stores the navigation event as part of the metric', /*#__PURE__*/ _async_to_generator(function() {
            var _navigationsByFrameId_get, _navigationBeforeMetrics_args_data, traceData, Meta, PageLoadMetrics, mainFrameId, navigationsByFrameId, navigationBeforeMetrics, navigationId, pageLoadMetricsData, pageLoadEventsForMainFrame, events, allFoundMetricScoresForMainFrame, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, score;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.traceEngine(this, 'reload-and-trace-page.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        Meta = traceData.Meta, PageLoadMetrics = traceData.PageLoadMetrics;
                        mainFrameId = Meta.mainFrameId, navigationsByFrameId = Meta.navigationsByFrameId;
                        navigationBeforeMetrics = (_navigationsByFrameId_get = navigationsByFrameId.get(mainFrameId)) === null || _navigationsByFrameId_get === void 0 ? void 0 : _navigationsByFrameId_get[0];
                        navigationId = navigationBeforeMetrics === null || navigationBeforeMetrics === void 0 ? void 0 : (_navigationBeforeMetrics_args_data = navigationBeforeMetrics.args.data) === null || _navigationBeforeMetrics_args_data === void 0 ? void 0 : _navigationBeforeMetrics_args_data.navigationId;
                        if (!navigationBeforeMetrics || !navigationId) {
                            assert.fail('Could not find expected navigation event or its navigation ID');
                        }
                        pageLoadMetricsData = PageLoadMetrics.metricScoresByFrameId;
                        // Only one frame to deal with
                        assert.strictEqual(pageLoadMetricsData.size, 1);
                        pageLoadEventsForMainFrame = pageLoadMetricsData.get(mainFrameId);
                        if (!pageLoadEventsForMainFrame) {
                            assert.fail('Page load events for main frame were unexpectedly null.');
                        }
                        // Single FCP event that occured after the refresh.
                        assert.strictEqual(pageLoadEventsForMainFrame.size, 1);
                        events = pageLoadEventsForMainFrame.get(navigationId);
                        allFoundMetricScoresForMainFrame = events ? Array.from(events.values()) : [];
                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(_iterator = allFoundMetricScoresForMainFrame[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                score = _step.value;
                                assert.strictEqual(score.navigation, navigationBeforeMetrics);
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
    });
    describe('markDOMContent frame', function() {
        it('obtains them and assigns them to the correct frames', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, Meta, PageLoadMetrics, mainFrameId, pageLoadMetricsData, pageLoadEventsForMainFrame, dclCount;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.traceEngine(this, 'multiple-navigations-with-iframes.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        Meta = traceData.Meta, PageLoadMetrics = traceData.PageLoadMetrics;
                        mainFrameId = Meta.mainFrameId;
                        pageLoadMetricsData = PageLoadMetrics.metricScoresByFrameId;
                        // We expect 3 frames: main frame, and two iframes.
                        assert.strictEqual(pageLoadMetricsData.size, 3);
                        pageLoadEventsForMainFrame = pageLoadMetricsData.get(mainFrameId);
                        if (!pageLoadEventsForMainFrame) {
                            assert.fail('Page load events for main frame were unexpectedly null.');
                        }
                        // There are 2 MarkDOMContent events on the main frame: one for the first navigation,
                        // and one for the second.
                        assert.strictEqual(pageLoadEventsForMainFrame.size, 2);
                        dclCount = countMetricOcurrences(_to_consumable_array(pageLoadEventsForMainFrame.values()), "DCL" /* TraceModel.Handlers.ModelHandlers.PageLoadMetrics.MetricName.DCL */ );
                        assert.strictEqual(dclCount, 2);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('metric scores', function() {
        var getMetricsByName = function getMetricsByName(name) {
            return allMetricScores.filter(function(metric) {
                return metric.metricName === name;
            });
        };
        var assertMetricNavigationId = function assertMetricNavigationId(metric, navigationId) {
            var _metric_navigation_args_data, _metric_navigation;
            assert.strictEqual((_metric_navigation = metric.navigation) === null || _metric_navigation === void 0 ? void 0 : (_metric_navigation_args_data = _metric_navigation.args.data) === null || _metric_navigation_args_data === void 0 ? void 0 : _metric_navigation_args_data.navigationId, navigationId);
        };
        var allMetricScores;
        var firstNavigationId = '05059ACF683224E6FC7E344F544A4050';
        var secondNavigationId = '550FC08C662EF691E1535F305CBC0FCA';
        beforeEach(/*#__PURE__*/ _async_to_generator(function() {
            var traceData, Meta, PageLoadMetrics, pageLoadMetricsData, scoresByMetricName;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.traceEngine(this, 'multiple-navigations-with-iframes.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        Meta = traceData.Meta, PageLoadMetrics = traceData.PageLoadMetrics;
                        pageLoadMetricsData = PageLoadMetrics.metricScoresByFrameId.get(Meta.mainFrameId);
                        if (!pageLoadMetricsData) {
                            assert.fail('Page load events for main frame were unexpectedly undefined.');
                        }
                        scoresByMetricName = _to_consumable_array(pageLoadMetricsData.values());
                        allMetricScores = scoresByMetricName.flatMap(function(metricScores) {
                            return _to_consumable_array(metricScores.values());
                        });
                        return [
                            2
                        ];
                }
            });
        }));
        it('extracts DOMContentLoaded correctly', function() {
            var domContentLoadedMetrics = getMetricsByName("DCL" /* TraceModel.Handlers.ModelHandlers.PageLoadMetrics.MetricName.DCL */ );
            assert.strictEqual(domContentLoadedMetrics[0].timing, 34520);
            assert.strictEqual(domContentLoadedMetrics[0].classification, "unclassified" /* TraceModel.Handlers.ModelHandlers.PageLoadMetrics.ScoreClassification.UNCLASSIFIED */ );
            assertMetricNavigationId(domContentLoadedMetrics[0], firstNavigationId);
            assert.strictEqual(domContentLoadedMetrics[1].timing, 40401);
            assert.strictEqual(domContentLoadedMetrics[1].classification, "unclassified" /* TraceModel.Handlers.ModelHandlers.PageLoadMetrics.ScoreClassification.UNCLASSIFIED */ );
            assertMetricNavigationId(domContentLoadedMetrics[1], secondNavigationId);
        });
        it('extracts First Contentful Paint correctly', function() {
            var firstContentfulPaints = getMetricsByName("FCP" /* TraceModel.Handlers.ModelHandlers.PageLoadMetrics.MetricName.FCP */ );
            assert.strictEqual(firstContentfulPaints[0].timing, 37269);
            assert.strictEqual(firstContentfulPaints[0].classification, "good" /* TraceModel.Handlers.ModelHandlers.PageLoadMetrics.ScoreClassification.GOOD */ );
            assertMetricNavigationId(firstContentfulPaints[0], firstNavigationId);
            assert.strictEqual(firstContentfulPaints[1].timing, 42390);
            assert.strictEqual(firstContentfulPaints[1].classification, "good" /* TraceModel.Handlers.ModelHandlers.PageLoadMetrics.ScoreClassification.GOOD */ );
            assertMetricNavigationId(firstContentfulPaints[1], secondNavigationId);
        });
        it('extracts Largest Contentful Paint correctly', function() {
            var firstContentfulPaints = getMetricsByName("LCP" /* TraceModel.Handlers.ModelHandlers.PageLoadMetrics.MetricName.LCP */ );
            assert.strictEqual(firstContentfulPaints[0].timing, 37271);
            assert.strictEqual(firstContentfulPaints[0].classification, "good" /* TraceModel.Handlers.ModelHandlers.PageLoadMetrics.ScoreClassification.GOOD */ );
            assertMetricNavigationId(firstContentfulPaints[0], firstNavigationId);
            assert.strictEqual(firstContentfulPaints[1].timing, 42391);
            assert.strictEqual(firstContentfulPaints[1].classification, "good" /* TraceModel.Handlers.ModelHandlers.PageLoadMetrics.ScoreClassification.GOOD */ );
            assertMetricNavigationId(firstContentfulPaints[1], secondNavigationId);
        });
        it('extracts First Paint correctly', function() {
            var firstContentfulPaints = getMetricsByName("FP" /* TraceModel.Handlers.ModelHandlers.PageLoadMetrics.MetricName.FP */ );
            assert.strictEqual(firstContentfulPaints[0].timing, 37269);
            assert.strictEqual(firstContentfulPaints[0].classification, "unclassified" /* TraceModel.Handlers.ModelHandlers.PageLoadMetrics.ScoreClassification.UNCLASSIFIED */ );
            assertMetricNavigationId(firstContentfulPaints[0], firstNavigationId);
            assert.strictEqual(firstContentfulPaints[1].timing, 42389);
            assert.strictEqual(firstContentfulPaints[1].classification, "unclassified" /* TraceModel.Handlers.ModelHandlers.PageLoadMetrics.ScoreClassification.UNCLASSIFIED */ );
            assertMetricNavigationId(firstContentfulPaints[1], secondNavigationId);
        });
        it('extracts Load correctly', function() {
            var firstContentfulPaints = getMetricsByName("L" /* TraceModel.Handlers.ModelHandlers.PageLoadMetrics.MetricName.L */ );
            assert.strictEqual(firstContentfulPaints[0].timing, 148980);
            assert.strictEqual(firstContentfulPaints[0].classification, "unclassified" /* TraceModel.Handlers.ModelHandlers.PageLoadMetrics.ScoreClassification.UNCLASSIFIED */ );
            assertMetricNavigationId(firstContentfulPaints[0], firstNavigationId);
            assert.strictEqual(firstContentfulPaints[1].timing, 161333);
            assert.strictEqual(firstContentfulPaints[1].classification, "unclassified" /* TraceModel.Handlers.ModelHandlers.PageLoadMetrics.ScoreClassification.UNCLASSIFIED */ );
            assertMetricNavigationId(firstContentfulPaints[1], secondNavigationId);
        });
        it('provides metric scores sorted in ASC order by their events\' timestamps', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, Meta, PageLoadMetrics, pageLoadMetricsData, scoresByMetricName, flatResults, timestamps, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, metricScore, previousTimestamp, i;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.traceEngine(this, 'multiple-navigations-with-iframes.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        Meta = traceData.Meta, PageLoadMetrics = traceData.PageLoadMetrics;
                        pageLoadMetricsData = PageLoadMetrics.metricScoresByFrameId.get(Meta.mainFrameId);
                        if (!pageLoadMetricsData) {
                            assert.fail('Page load events for main frame were unexpectedly null.');
                        }
                        scoresByMetricName = _to_consumable_array(pageLoadMetricsData.values());
                        flatResults = scoresByMetricName.map(function(metricScores) {
                            return _to_consumable_array(metricScores.values());
                        }).reduce(function(acc, metricScore) {
                            return acc.concat(metricScore);
                        }, []);
                        timestamps = [];
                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(_iterator = flatResults[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                metricScore = _step.value;
                                if (metricScore.event) {
                                    timestamps.push(metricScore.event.ts);
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
                        previousTimestamp = timestamps[0];
                        for(i = 1; i < timestamps.length; i++){
                            assert.isAtLeast(timestamps[i], previousTimestamp);
                            previousTimestamp = timestamps[i];
                        }
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('FLEDGE fenced frames', function() {
        it('is able to parse a trace containing fenced frames without erroring', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, PageLoadMetrics;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.traceEngine(this, 'fenced-frame-fledge.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        PageLoadMetrics = traceData.PageLoadMetrics;
                        assert.strictEqual(PageLoadMetrics.metricScoresByFrameId.size, 3);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('Marker events', function() {
        var mainFrameId;
        var allMarkerEvents;
        beforeEach(/*#__PURE__*/ _async_to_generator(function() {
            var traceData, PageLoadMetrics, Meta;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.traceEngine(this, 'multiple-navigations-with-iframes.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        PageLoadMetrics = traceData.PageLoadMetrics, Meta = traceData.Meta;
                        mainFrameId = Meta.mainFrameId;
                        allMarkerEvents = PageLoadMetrics.allMarkerEvents;
                        return [
                            2
                        ];
                }
            });
        }));
        it('extracts all marker events from a trace correctly', function() {
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                var _loop = function() {
                    var metricName = _step.value;
                    var markerEventsOfThisType = allMarkerEvents.filter(function(event) {
                        return event.name === metricName;
                    });
                    // There should be 2 events for each marker and all of them should correspond to the main frame
                    assert.strictEqual(markerEventsOfThisType.length, 2);
                    assert.isTrue(markerEventsOfThisType.every(function(marker) {
                        return _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.PageLoadMetrics.getFrameIdForPageLoadEvent(marker) === mainFrameId;
                    }));
                };
                for(var _iterator = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.TraceEvents.MarkerName[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
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
        });
        it('only marker events are exported in allMarkerEvents', function() {
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = allMarkerEvents[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var marker = _step.value;
                    assert.isTrue(_trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.TraceEvents.isTraceEventMarkerEvent(marker));
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
        });
        it('only stores the largest contentful paint with the highest candidate index', /*#__PURE__*/ _async_to_generator(function() {
            var _largestContentfulPaints__args_data, traceData, PageLoadMetrics, pageLoadMarkers, largestContentfulPaints;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.traceEngine(this, 'multiple-lcp-main-frame.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        PageLoadMetrics = traceData.PageLoadMetrics;
                        pageLoadMarkers = PageLoadMetrics.allMarkerEvents;
                        largestContentfulPaints = pageLoadMarkers.filter(_trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.TraceEvents.isTraceEventLargestContentfulPaintCandidate);
                        assert.strictEqual(largestContentfulPaints.length, 1);
                        assert.strictEqual((_largestContentfulPaints__args_data = largestContentfulPaints[0].args.data) === null || _largestContentfulPaints__args_data === void 0 ? void 0 : _largestContentfulPaints__args_data.candidateIndex, 2);
                        return [
                            2
                        ];
                }
            });
        }));
    });
}); //# sourceMappingURL=PageLoadMetricsHandler.test.js.map


}),

}]);