"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_timeline_track_appenders_TimingsTrackAppender_test_js"], {
"./panels/timeline/track_appenders/TimingsTrackAppender.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/trace/trace.js */ "./models/trace/trace.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */var _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/legacy/components/perf_ui/perf_ui.js */ "./ui/legacy/components/perf_ui/perf_ui.js");
/* harmony import */var _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/legacy/theme_support/theme_support.js */ "./ui/legacy/theme_support/theme_support.js");
/* harmony import */var _timeline_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../timeline.js */ "./panels/timeline/timeline.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
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






function initTrackAppender(flameChartData, traceData, entryData, entryTypeByLevel) {
    _timeline_js__WEBPACK_IMPORTED_MODULE_5__.ExtensionDataGatherer.ExtensionDataGatherer.instance().modelChanged(traceData);
    var compatibilityTracksAppender = new _timeline_js__WEBPACK_IMPORTED_MODULE_5__.CompatibilityTracksAppender.CompatibilityTracksAppender(flameChartData, traceData, entryData, entryTypeByLevel);
    return compatibilityTracksAppender.timingsTrackAppender();
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('TimingTrackAppender', function() {
    var traceData;
    var timingsTrackAppender;
    var entryData = [];
    var flameChartData = _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__.FlameChart.FlameChartTimelineData.createEmpty();
    var entryTypeByLevel = [];
    beforeEach(/*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'timings-track.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    timingsTrackAppender = initTrackAppender(flameChartData, traceData, entryData, entryTypeByLevel);
                    timingsTrackAppender.appendTrackAtLevel(0);
                    return [
                        2
                    ];
            }
        });
    }));
    afterEach(function() {
        entryData = [];
        flameChartData = _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__.FlameChart.FlameChartTimelineData.createEmpty();
        entryTypeByLevel = [];
    });
    describe('appendTrackAtLevel', function() {
        it('marks all levels used by the track with the `TrackAppender` type', function() {
            // 8 levels should be taken:
            //   * 1 for page load marks.
            //   * 1 performance.marks.
            //   * 3 used by performance.measures.
            //   * 1 used by console timestamps.
            //   * 1 used by console.time calls.
            var levelCount = 7;
            assert.strictEqual(entryTypeByLevel.length, levelCount);
            var allEntriesAreTrackAppender = entryTypeByLevel.every(function(type) {
                return type === "TrackAppender" /* Timeline.TimelineFlameChartDataProvider.EntryType.TrackAppender */ ;
            });
            assert.isTrue(allEntriesAreTrackAppender);
        });
        it('creates a flamechart group for the timings track', function() {
            assert.strictEqual(flameChartData.groups.length, 1);
            assert.strictEqual(flameChartData.groups[0].name, 'Timings');
        });
        it('populates the markers array in ascendent order', function() {
            var traceMarkers = traceData.PageLoadMetrics.allMarkerEvents;
            assert.strictEqual(flameChartData.markers.length, traceMarkers.length);
            for(var i = 1; i < flameChartData.markers.length; i++){
                assert.isAtLeast(flameChartData.markers[i].startTime(), flameChartData.markers[i - 1].startTime());
            }
        });
        it('creates a TimelineFlameChartMarker for each page load marker event in a trace', function() {
            var traceMarkers = traceData.PageLoadMetrics.allMarkerEvents;
            assert.strictEqual(flameChartData.markers.length, traceMarkers.length);
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                var _loop = function() {
                    var traceMarker = _step.value;
                    var markerTimeMs = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.microSecondsToMilliseconds(traceMarker.ts);
                    var flameChartMarker = flameChartData.markers.find(function(flameChartMarker) {
                        return flameChartMarker.startTime() === markerTimeMs;
                    });
                    assert.exists(flameChartMarker);
                };
                for(var _iterator = traceMarkers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
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
            assert.strictEqual(flameChartData.markers.length, traceMarkers.length);
        });
        it('adds start times correctly', function() {
            var traceMarkers = traceData.PageLoadMetrics.allMarkerEvents;
            var performanceMarks = traceData.UserTimings.performanceMarks;
            var performanceMeasures = traceData.UserTimings.performanceMeasures;
            var consoleTimings = traceData.UserTimings.consoleTimings;
            var consoleTimestamps = traceData.UserTimings.timestampEvents;
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = _to_consumable_array(traceMarkers).concat(_to_consumable_array(performanceMarks), _to_consumable_array(performanceMeasures), _to_consumable_array(consoleTimings), _to_consumable_array(consoleTimestamps))[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var event = _step.value;
                    var markerIndex = entryData.indexOf(event);
                    assert.exists(markerIndex);
                    assert.strictEqual(flameChartData.entryStartTimes[markerIndex], _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.microSecondsToMilliseconds(event.ts));
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
        it('adds total times correctly', function() {
            var traceMarkers = traceData.PageLoadMetrics.allMarkerEvents;
            var performanceMarks = traceData.UserTimings.performanceMarks;
            var performanceMeasures = traceData.UserTimings.performanceMeasures;
            var consoleTimings = traceData.UserTimings.consoleTimings;
            var consoleTimestamps = traceData.UserTimings.timestampEvents;
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = _to_consumable_array(traceMarkers).concat(_to_consumable_array(performanceMarks), _to_consumable_array(performanceMeasures), _to_consumable_array(consoleTimings), _to_consumable_array(consoleTimestamps))[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var event = _step.value;
                    var markerIndex = entryData.indexOf(event);
                    assert.exists(markerIndex);
                    if (_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.TraceEvents.isTraceEventMarkerEvent(event)) {
                        assert.isNaN(flameChartData.entryTotalTimes[markerIndex]);
                        continue;
                    }
                    var expectedTotalTimeForEvent = event.dur ? _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.microSecondsToMilliseconds(event.dur) : _timeline_js__WEBPACK_IMPORTED_MODULE_5__.TimelineFlameChartDataProvider.InstantEventVisibleDurationMs;
                    assert.strictEqual(flameChartData.entryTotalTimes[markerIndex], expectedTotalTimeForEvent);
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
    });
    describe('colorForEvent and titleForEvent', function() {
        it('returns the correct color and title for page load markers', function() {
            var traceMarkers = traceData.PageLoadMetrics.allMarkerEvents;
            var firstContentfulPaint = traceMarkers.find(function(marker) {
                return marker.name === 'firstContentfulPaint';
            });
            var markLoad = traceMarkers.find(function(marker) {
                return marker.name === 'MarkLoad';
            });
            var markDOMContent = traceMarkers.find(function(marker) {
                return marker.name === 'MarkDOMContent';
            });
            var firstPaint = traceMarkers.find(function(marker) {
                return marker.name === 'firstPaint';
            });
            var largestContentfulPaint = traceMarkers.find(function(marker) {
                return marker.name === 'largestContentfulPaint::Candidate';
            });
            if (firstContentfulPaint === undefined || markLoad === undefined || markDOMContent === undefined || firstPaint === undefined || largestContentfulPaint === undefined) {
                throw new Error('A metric was not found');
            }
            assert.strictEqual(timingsTrackAppender.colorForEvent(firstContentfulPaint), '#1A6937');
            assert.strictEqual(timingsTrackAppender.titleForEvent(firstContentfulPaint), "FCP" /* TraceModel.Handlers.ModelHandlers.PageLoadMetrics.MetricName.FCP */ );
            assert.strictEqual(timingsTrackAppender.colorForEvent(markLoad), '#B31412');
            assert.strictEqual(timingsTrackAppender.titleForEvent(markLoad), "L" /* TraceModel.Handlers.ModelHandlers.PageLoadMetrics.MetricName.L */ );
            assert.strictEqual(timingsTrackAppender.colorForEvent(markDOMContent), '#0867CB');
            assert.strictEqual(timingsTrackAppender.titleForEvent(markDOMContent), "DCL" /* TraceModel.Handlers.ModelHandlers.PageLoadMetrics.MetricName.DCL */ );
            assert.strictEqual(timingsTrackAppender.colorForEvent(firstPaint), '#228847');
            assert.strictEqual(timingsTrackAppender.titleForEvent(firstPaint), "FP" /* TraceModel.Handlers.ModelHandlers.PageLoadMetrics.MetricName.FP */ );
            assert.strictEqual(timingsTrackAppender.colorForEvent(largestContentfulPaint), '#1A3422');
            assert.strictEqual(timingsTrackAppender.titleForEvent(largestContentfulPaint), "LCP" /* TraceModel.Handlers.ModelHandlers.PageLoadMetrics.MetricName.LCP */ );
        });
        it('returns the correct title for performance measures', function() {
            var performanceMeasures = traceData.UserTimings.performanceMeasures;
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = performanceMeasures[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var measure = _step.value;
                    assert.strictEqual(timingsTrackAppender.titleForEvent(measure), measure.name);
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
        it('returns the correct title for console timings', function() {
            var traceMarkers = traceData.UserTimings.consoleTimings;
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = traceMarkers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var mark = _step.value;
                    assert.strictEqual(timingsTrackAppender.titleForEvent(mark), mark.name);
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
        it('returns the correct title for performance marks', function() {
            var traceMarkers = traceData.UserTimings.performanceMarks;
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = traceMarkers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var mark = _step.value;
                    assert.strictEqual(timingsTrackAppender.titleForEvent(mark), "[mark]: ".concat(mark.name));
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
        it('returns the correct title for console timestamps', function() {
            var traceMarkers = traceData.UserTimings.timestampEvents;
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = traceMarkers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var mark = _step.value;
                    assert.strictEqual(timingsTrackAppender.titleForEvent(mark), "TimeStamp: ".concat(mark.args.data.message));
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
    });
    describe('highlightedEntryInfo', function() {
        it('shows the time of the mark, not the duration, if the event is a performance mark', function() {
            var firstMark = traceData.UserTimings.performanceMarks[0];
            var highlightedEntryInfo = timingsTrackAppender.highlightedEntryInfo(firstMark);
            assert.deepEqual(highlightedEntryInfo, {
                title: '[mark]: myMark',
                formattedTime: '1.12\u00A0s'
            });
        });
        it('shows the time of the mark for an LCP event', function() {
            var largestContentfulPaint = traceData.PageLoadMetrics.allMarkerEvents.find(function(marker) {
                return marker.name === 'largestContentfulPaint::Candidate';
            });
            if (!largestContentfulPaint) {
                throw new Error('Could not find LCP event');
            }
            var highlightedEntryInfo = timingsTrackAppender.highlightedEntryInfo(largestContentfulPaint);
            assert.deepEqual(highlightedEntryInfo, {
                title: 'LCP',
                formattedTime: '2.42\u00A0s'
            });
        });
        it('shows the time of the mark for an FCP event', function() {
            var firstContentfulPaint = traceData.PageLoadMetrics.allMarkerEvents.find(function(marker) {
                return marker.name === 'firstContentfulPaint';
            });
            if (!firstContentfulPaint) {
                throw new Error('Could not find FCP event');
            }
            var highlightedEntryInfo = timingsTrackAppender.highlightedEntryInfo(firstContentfulPaint);
            assert.deepEqual(highlightedEntryInfo, {
                title: 'FCP',
                formattedTime: '2.42\u00A0s'
            });
        });
        it('shows the time of the mark for a DCL event', function() {
            var dclEvent = traceData.PageLoadMetrics.allMarkerEvents.find(function(marker) {
                return marker.name === 'MarkDOMContent';
            });
            if (!dclEvent) {
                throw new Error('Could not find DCL event');
            }
            var highlightedEntryInfo = timingsTrackAppender.highlightedEntryInfo(dclEvent);
            assert.deepEqual(highlightedEntryInfo, {
                title: 'DCL',
                formattedTime: '2.42\u00A0s'
            });
        });
        it('shows the time of a console.timestamp event in the hover info', function() {
            var timestampEvent = traceData.UserTimings.timestampEvents[0];
            var highlightedEntryInfo = timingsTrackAppender.highlightedEntryInfo(timestampEvent);
            assert.deepEqual(highlightedEntryInfo, {
                title: 'TimeStamp: a timestamp',
                formattedTime: '615.25\u00A0ms'
            });
        });
        it('returns the info for a performance.measure calls correctly', function() {
            var performanceMeasures = traceData.UserTimings.performanceMeasures;
            var highlightedEntryInfo = timingsTrackAppender.highlightedEntryInfo(performanceMeasures[0]);
            // The i18n encodes spaces using the u00A0 unicode character.
            assert.strictEqual(highlightedEntryInfo.formattedTime, '500.07\u00A0ms');
        });
        it('returns the info for a console.time calls correctly', function() {
            var consoleTimings = traceData.UserTimings.consoleTimings;
            var highlightedEntryInfo = timingsTrackAppender.highlightedEntryInfo(consoleTimings[0]);
            // The i18n encodes spaces using the u00A0 unicode character.
            assert.strictEqual(highlightedEntryInfo.formattedTime, '1.60\u00A0s');
        });
    });
    describe('extension markers', function() {
        beforeEach(/*#__PURE__*/ _async_to_generator(function() {
            var styleElement;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        entryData = [];
                        flameChartData = _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__.FlameChart.FlameChartTimelineData.createEmpty();
                        entryTypeByLevel = [];
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'extension-tracks-and-marks.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        timingsTrackAppender = initTrackAppender(flameChartData, traceData, entryData, entryTypeByLevel);
                        timingsTrackAppender.appendTrackAtLevel(0);
                        // Rather than use the real colours here and burden the test with having to
                        // inject loads of CSS, we fake out the colours. this is fine for our tests as
                        // the exact value of the colours is not important; we just make sure that it
                        // parses them out correctly. Each variable is given a different rgb() value to
                        // ensure we know the code is working and using the right one.
                        styleElement = document.createElement('style');
                        styleElement.id = 'fake-perf-panel-colors';
                        styleElement.textContent = "\n        :root {\n          --ref-palette-primary70: rgb(4 4 4);\n          --ref-palette-error50: rgb(10 10 10);\n        }\n      ";
                        document.documentElement.appendChild(styleElement);
                        _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_4__.ThemeSupport.clearThemeCache();
                        return [
                            2
                        ];
                }
            });
        }));
        afterEach(function() {
            entryData = [];
            flameChartData = _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__.FlameChart.FlameChartTimelineData.createEmpty();
            entryTypeByLevel = [];
            var styleElementToRemove = document.documentElement.querySelector('#fake-perf-panel-colors');
            if (styleElementToRemove) {
                document.documentElement.removeChild(styleElementToRemove);
            }
            _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_4__.ThemeSupport.clearThemeCache();
        });
        it('creates a TimelineFlameChartMarker for each extension marker event in a trace', function() {
            var extensionMarkers = traceData.ExtensionTraceData.extensionMarkers;
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                var _loop = function() {
                    var traceMarker = _step.value;
                    var markerTimeMs = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.microSecondsToMilliseconds(traceMarker.ts);
                    var flameChartMarker = flameChartData.markers.find(function(flameChartMarker) {
                        return flameChartMarker.startTime() === markerTimeMs;
                    });
                    assert.exists(flameChartMarker);
                };
                for(var _iterator = extensionMarkers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
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
        it('returns the correct color and title for extension markers', function() {
            var extensionMarkers = traceData.ExtensionTraceData.extensionMarkers;
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = extensionMarkers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var event = _step.value;
                    assert.strictEqual(timingsTrackAppender.titleForEvent(event), event.name);
                    if (event.args.color === 'error') {
                        // "error" color category is mapped to --ref-palette-error50
                        // which is faked out to 10, 10, 10
                        assert.strictEqual(timingsTrackAppender.colorForEvent(event), 'rgb(10 10 10)');
                    } else {
                        // Unknown colors are mapped to "primary" by default, and
                        // "primary" color category is mapped to --ref-palette-primary70
                        // which is faked out to 4, 4, 4
                        assert.strictEqual(timingsTrackAppender.colorForEvent(event), 'rgb(4 4 4)');
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
        });
        it('sets a default value when a color is not set or is set an unknown value', function() {
            var mockExtensionEntryNoColor = {
                args: {
                    dataType: 'marker'
                },
                cat: 'devtools.extension'
            };
            var mockExtensionEntryUnknownColor = {
                args: {
                    color: 'anUnknownColor',
                    dataType: 'marker'
                },
                cat: 'devtools.extension'
            };
            // "primary" color category is mapped to --ref-palette-primary70
            // which is faked out to 4, 4, 4
            assert.strictEqual(timingsTrackAppender.colorForEvent(mockExtensionEntryNoColor), 'rgb(4 4 4)');
            assert.strictEqual(timingsTrackAppender.colorForEvent(mockExtensionEntryUnknownColor), 'rgb(4 4 4)');
        });
        it('returns the tool tip info for an entry correctly', function() {
            var extensionMarker = traceData.ExtensionTraceData.extensionMarkers.at(0);
            assert.isOk(extensionMarker, 'did not find any extension markers');
            var highlightedEntryInfo = timingsTrackAppender.highlightedEntryInfo(extensionMarker);
            assert.strictEqual(highlightedEntryInfo.title, 'A mark');
        });
        describe('toggling', function() {
            it('Does not append extension data when the configuration is set to disabled', /*#__PURE__*/ _async_to_generator(function() {
                var extensionMarkers, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _loop, _iterator, _step;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            _timeline_js__WEBPACK_IMPORTED_MODULE_5__.ExtensionDataGatherer.ExtensionDataGatherer.removeInstance();
                            entryData = [];
                            flameChartData = _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__.FlameChart.FlameChartTimelineData.createEmpty();
                            entryTypeByLevel = [];
                            _timeline_js__WEBPACK_IMPORTED_MODULE_5__.TimelinePanel.TimelinePanel.extensionDataVisibilitySetting().set(false);
                            return [
                                4,
                                _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'extension-tracks-and-marks.json.gz')
                            ];
                        case 1:
                            traceData = _state.sent().traceData;
                            timingsTrackAppender = initTrackAppender(flameChartData, traceData, entryData, entryTypeByLevel);
                            timingsTrackAppender.appendTrackAtLevel(0);
                            extensionMarkers = traceData.ExtensionTraceData.extensionMarkers;
                            _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                            try {
                                _loop = function() {
                                    var traceMarker = _step.value;
                                    var markerTimeMs = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.microSecondsToMilliseconds(traceMarker.ts);
                                    var flameChartMarker = flameChartData.markers.find(function(flameChartMarker) {
                                        return flameChartMarker.startTime() === markerTimeMs;
                                    });
                                    assert.isUndefined(flameChartMarker);
                                };
                                for(_iterator = extensionMarkers[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
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
    });
}); //# sourceMappingURL=TimingsTrackAppender.test.js.map


}),

}]);