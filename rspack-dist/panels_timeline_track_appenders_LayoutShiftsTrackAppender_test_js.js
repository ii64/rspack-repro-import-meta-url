"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_timeline_track_appenders_LayoutShiftsTrackAppender_test_js"], {
"./panels/timeline/track_appenders/LayoutShiftsTrackAppender.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/trace/trace.js */ "./models/trace/trace.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */var _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/legacy/components/perf_ui/perf_ui.js */ "./ui/legacy/components/perf_ui/perf_ui.js");
/* harmony import */var _timeline_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../timeline.js */ "./panels/timeline/timeline.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
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





function initTrackAppender(flameChartData, traceParsedData, entryData, entryTypeByLevel) {
    var compatibilityTracksAppender = new _timeline_js__WEBPACK_IMPORTED_MODULE_4__.CompatibilityTracksAppender.CompatibilityTracksAppender(flameChartData, traceParsedData, entryData, entryTypeByLevel);
    return compatibilityTracksAppender.layoutShiftsTrackAppender();
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('LayoutShiftsTrackAppender', function() {
    function renderTrackAppender(context, trace) {
        return _renderTrackAppender.apply(this, arguments);
    }
    function _renderTrackAppender() {
        _renderTrackAppender = _async_to_generator(function(context, trace) {
            var entryTypeByLevel, entryData, flameChartData, traceData, layoutShiftsTrackAppender;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        entryTypeByLevel = [];
                        entryData = [];
                        flameChartData = _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__.FlameChart.FlameChartTimelineData.createEmpty();
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(context, trace)
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        layoutShiftsTrackAppender = initTrackAppender(flameChartData, traceData, entryData, entryTypeByLevel);
                        layoutShiftsTrackAppender.appendTrackAtLevel(0);
                        return [
                            2,
                            {
                                entryTypeByLevel: entryTypeByLevel,
                                traceParsedData: traceData,
                                flameChartData: flameChartData,
                                layoutShiftsTrackAppender: layoutShiftsTrackAppender,
                                entryData: entryData
                            }
                        ];
                }
            });
        });
        return _renderTrackAppender.apply(this, arguments);
    }
    it('marks all levels used by the track with the TrackAppender type', /*#__PURE__*/ _async_to_generator(function() {
        var entryTypeByLevel;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderTrackAppender(this, 'cls-single-frame.json.gz')
                    ];
                case 1:
                    entryTypeByLevel = _state.sent().entryTypeByLevel;
                    // Only one row of layout shifts.
                    assert.strictEqual(entryTypeByLevel.length, 1);
                    assert.deepEqual(entryTypeByLevel, [
                        "TrackAppender" /* Timeline.TimelineFlameChartDataProvider.EntryType.TrackAppender */ 
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('does not append anything if there are no layout shifts', /*#__PURE__*/ _async_to_generator(function() {
        var entryTypeByLevel;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderTrackAppender(this, 'animation.json.gz')
                    ];
                case 1:
                    entryTypeByLevel = _state.sent().entryTypeByLevel;
                    assert.lengthOf(entryTypeByLevel, 0);
                    return [
                        2
                    ];
            }
        });
    }));
    it('creates a flamechart group', /*#__PURE__*/ _async_to_generator(function() {
        var flameChartData;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderTrackAppender(this, 'cls-single-frame.json.gz')
                    ];
                case 1:
                    flameChartData = _state.sent().flameChartData;
                    assert.strictEqual(flameChartData.groups.length, 1);
                    assert.strictEqual(flameChartData.groups[0].name, 'Layout Shifts');
                    return [
                        2
                    ];
            }
        });
    }));
    it('adds all layout shifts with the correct start times', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, flameChartData, traceParsedData, entryData, events, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, markerIndex;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderTrackAppender(this, 'cls-single-frame.json.gz')
                    ];
                case 1:
                    _ref = _state.sent(), flameChartData = _ref.flameChartData, traceParsedData = _ref.traceParsedData, entryData = _ref.entryData;
                    events = traceParsedData.LayoutShifts.clusters.flatMap(function(c) {
                        return c.events;
                    });
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = events[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            event = _step.value;
                            markerIndex = entryData.indexOf(event);
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
                    return [
                        2
                    ];
            }
        });
    }));
    it('sets all layout shifts to be 5ms in duration', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, flameChartData, traceParsedData, entryData, events, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, markerIndex;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderTrackAppender(this, 'cls-single-frame.json.gz')
                    ];
                case 1:
                    _ref = _state.sent(), flameChartData = _ref.flameChartData, traceParsedData = _ref.traceParsedData, entryData = _ref.entryData;
                    events = traceParsedData.LayoutShifts.clusters.flatMap(function(c) {
                        return c.events;
                    });
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = events[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            event = _step.value;
                            markerIndex = entryData.indexOf(event);
                            assert.exists(markerIndex);
                            assert.strictEqual(flameChartData.entryTotalTimes[markerIndex], 5);
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
    it('returns the correct title for a layout shift', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, layoutShiftsTrackAppender, traceParsedData, shifts, title;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderTrackAppender(this, 'cls-single-frame.json.gz')
                    ];
                case 1:
                    _ref = _state.sent(), layoutShiftsTrackAppender = _ref.layoutShiftsTrackAppender, traceParsedData = _ref.traceParsedData;
                    shifts = traceParsedData.LayoutShifts.clusters.flatMap(function(c) {
                        return c.events;
                    });
                    title = layoutShiftsTrackAppender.titleForEvent(shifts[0]);
                    assert.strictEqual(title, 'Layout shift');
                    return [
                        2
                    ];
            }
        });
    }));
    it('shows "Layout shift" text on hover', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, layoutShiftsTrackAppender, traceParsedData, shifts, info;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderTrackAppender(this, 'cls-single-frame.json.gz')
                    ];
                case 1:
                    _ref = _state.sent(), layoutShiftsTrackAppender = _ref.layoutShiftsTrackAppender, traceParsedData = _ref.traceParsedData;
                    shifts = traceParsedData.LayoutShifts.clusters.flatMap(function(c) {
                        return c.events;
                    });
                    info = layoutShiftsTrackAppender.highlightedEntryInfo(shifts[0]);
                    assert.deepEqual(info, {
                        title: 'Layout shift',
                        formattedTime: ''
                    });
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=LayoutShiftsTrackAppender.test.js.map


}),

}]);