"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_timeline_TimelineFlameChartDataProvider_test_js"], {
"./panels/timeline/TimelineFlameChartDataProvider.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/trace/trace.js */ "./models/trace/trace.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/TraceHelpers.js */ "./testing/TraceHelpers.js");
/* harmony import */var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */var _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/perf_ui/perf_ui.js */ "./ui/legacy/components/perf_ui/perf_ui.js");
/* harmony import */var _timeline_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timeline.js */ "./panels/timeline/timeline.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
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






(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('TimelineFlameChartDataProvider', function() {
    describe('groupTreeEvents', function() {
        it('returns the correct events for tree views given a flame chart group', /*#__PURE__*/ _async_to_generator(function() {
            var dataProvider, traceData, timingsTrackGroup, groupTreeEvents, allTimingEvents;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        dataProvider = new _timeline_js__WEBPACK_IMPORTED_MODULE_5__.TimelineFlameChartDataProvider.TimelineFlameChartDataProvider();
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'sync-like-timings.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        dataProvider.setModel(traceData);
                        timingsTrackGroup = dataProvider.timelineData().groups.find(function(g) {
                            return g.name === 'Timings';
                        });
                        if (!timingsTrackGroup) {
                            assert.fail('Could not find Timings track flame chart group');
                        }
                        groupTreeEvents = dataProvider.groupTreeEvents(timingsTrackGroup);
                        allTimingEvents = _to_consumable_array(traceData.UserTimings.consoleTimings).concat(_to_consumable_array(traceData.UserTimings.timestampEvents), _to_consumable_array(traceData.UserTimings.performanceMarks), _to_consumable_array(traceData.UserTimings.performanceMeasures), _to_consumable_array(traceData.PageLoadMetrics.allMarkerEvents)).sort(function(a, b) {
                            return a.ts - b.ts;
                        });
                        assert.deepEqual(groupTreeEvents, allTimingEvents);
                        return [
                            2
                        ];
                }
            });
        }));
        it('filters out async events if they cannot be added to the tree', /*#__PURE__*/ _async_to_generator(function() {
            var dataProvider, traceData, timingsTrackGroup, groupTreeEvents, allEventsAreSync;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        dataProvider = new _timeline_js__WEBPACK_IMPORTED_MODULE_5__.TimelineFlameChartDataProvider.TimelineFlameChartDataProvider();
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'timings-track.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        dataProvider.setModel(traceData);
                        timingsTrackGroup = dataProvider.timelineData().groups.find(function(g) {
                            return g.name === 'Timings';
                        });
                        if (!timingsTrackGroup) {
                            assert.fail('Could not find Timings track flame chart group');
                        }
                        groupTreeEvents = dataProvider.groupTreeEvents(timingsTrackGroup);
                        assert.strictEqual(groupTreeEvents === null || groupTreeEvents === void 0 ? void 0 : groupTreeEvents.length, 12);
                        allEventsAreSync = groupTreeEvents === null || groupTreeEvents === void 0 ? void 0 : groupTreeEvents.every(function(event) {
                            return !_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.TraceEvents.isAsyncPhase(event.ph);
                        });
                        assert.isTrue(allEventsAreSync);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    it('can provide the index for an event and the event for a given index', /*#__PURE__*/ _async_to_generator(function() {
        var dataProvider, traceData, event;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.setupIgnoreListManagerEnvironment)();
                    dataProvider = new _timeline_js__WEBPACK_IMPORTED_MODULE_5__.TimelineFlameChartDataProvider.TimelineFlameChartDataProvider();
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'one-second-interaction.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    dataProvider.setModel(traceData);
                    // Need to use an index that is not a frame, so jump past the frames.
                    event = dataProvider.eventByIndex(100);
                    assert.isOk(event);
                    assert.strictEqual(dataProvider.indexForEvent(event), 100);
                    return [
                        2
                    ];
            }
        });
    }));
    it('renders track in the correct order by default', /*#__PURE__*/ _async_to_generator(function() {
        var dataProvider, traceData, groupNames;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.setupIgnoreListManagerEnvironment)();
                    dataProvider = new _timeline_js__WEBPACK_IMPORTED_MODULE_5__.TimelineFlameChartDataProvider.TimelineFlameChartDataProvider();
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'extension-tracks-and-marks.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    dataProvider.setModel(traceData);
                    groupNames = dataProvider.timelineData().groups.map(function(g) {
                        return g.name;
                    });
                    assert.deepEqual(groupNames, [
                        'Frames',
                        'Timings',
                        'Interactions',
                        'A track group — Custom Track',
                        'Another Extension Track',
                        'An Extension Track — Custom Track',
                        'Main — http://localhost:3000/',
                        'Thread Pool',
                        'Thread Pool Worker 1',
                        'Thread Pool Worker 2',
                        'Thread Pool Worker 3',
                        'StackSamplingProfiler',
                        'GPU'
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('adds candy stripe and triangle decorations to long tasks in the main thread', /*#__PURE__*/ _async_to_generator(function() {
        var dataProvider, traceData, entryDecorations, stripingTitles, triangleTitles;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.setupIgnoreListManagerEnvironment)();
                    dataProvider = new _timeline_js__WEBPACK_IMPORTED_MODULE_5__.TimelineFlameChartDataProvider.TimelineFlameChartDataProvider();
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'one-second-interaction.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    dataProvider.setModel(traceData);
                    entryDecorations = dataProvider.timelineData().entryDecorations;
                    stripingTitles = [];
                    triangleTitles = [];
                    Object.entries(entryDecorations).forEach(function(param) {
                        var _param = _sliced_to_array(param, 2), index = _param[0], decorationsForEvent = _param[1];
                        var _dataProvider_entryTitle;
                        var entryTitle = (_dataProvider_entryTitle = dataProvider.entryTitle(parseInt(index, 10))) !== null && _dataProvider_entryTitle !== void 0 ? _dataProvider_entryTitle : '';
                        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(var _iterator = decorationsForEvent[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                var decoration = _step.value;
                                if (decoration.type === "CANDY" /* PerfUi.FlameChart.FlameChartDecorationType.CANDY */ ) {
                                    stripingTitles.push(entryTitle);
                                }
                                if (decoration.type === "WARNING_TRIANGLE" /* PerfUi.FlameChart.FlameChartDecorationType.WARNING_TRIANGLE */ ) {
                                    triangleTitles.push(entryTitle);
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
                    assert.deepEqual(stripingTitles, [
                        'Pointer',
                        'Task'
                    ]);
                    assert.deepEqual(triangleTitles, [
                        'Pointer',
                        'Task'
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('populates the frames track with frames and screenshots', /*#__PURE__*/ _async_to_generator(function() {
        var dataProvider, traceData, framesTrack, framesLevel, screenshotsLevel, eventsOnScreenshotsLevel;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    dataProvider = new _timeline_js__WEBPACK_IMPORTED_MODULE_5__.TimelineFlameChartDataProvider.TimelineFlameChartDataProvider();
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    dataProvider.setModel(traceData);
                    framesTrack = dataProvider.timelineData().groups.find(function(g) {
                        return g.name.includes('Frames');
                    });
                    if (!framesTrack) {
                        throw new Error('Could not find expected Frames track');
                    }
                    framesLevel = framesTrack.startLevel;
                    screenshotsLevel = framesLevel + 1;
                    // The frames track first shows the frames, and then shows screenhots just below it.
                    assert.strictEqual(dataProvider.getEntryTypeForLevel(framesLevel), "Frame" /* Timeline.TimelineFlameChartDataProvider.EntryType.Frame */ );
                    assert.strictEqual(dataProvider.getEntryTypeForLevel(screenshotsLevel), "Screenshot" /* Timeline.TimelineFlameChartDataProvider.EntryType.Screenshot */ );
                    // There are 5 screenshots in this trace, so we expect there to be 5 events on the screenshots track level.
                    eventsOnScreenshotsLevel = dataProvider.timelineData().entryLevels.filter(function(e) {
                        return e === screenshotsLevel;
                    });
                    assert.lengthOf(eventsOnScreenshotsLevel, 5);
                    return [
                        2
                    ];
            }
        });
    }));
    describe('ignoring frames', function() {
        it('removes entries from the data that match the ignored URL', /*#__PURE__*/ _async_to_generator(function() {
            var ignoreListManager, dataProvider, traceData, eventCountBeforeIgnoreList, SCRIPT_TO_IGNORE, eventCountAfterIgnoreList;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        ignoreListManager = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.setupIgnoreListManagerEnvironment)().ignoreListManager;
                        dataProvider = new _timeline_js__WEBPACK_IMPORTED_MODULE_5__.TimelineFlameChartDataProvider.TimelineFlameChartDataProvider();
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'react-hello-world.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        dataProvider.setModel(traceData);
                        eventCountBeforeIgnoreList = dataProvider.timelineData().entryStartTimes.length;
                        SCRIPT_TO_IGNORE = 'https://unpkg.com/react@18.2.0/umd/react.development.js';
                        // Clear the data provider cache and add the React script to the ignore list.
                        dataProvider.reset();
                        ignoreListManager.ignoreListURL(SCRIPT_TO_IGNORE);
                        eventCountAfterIgnoreList = dataProvider.timelineData().entryStartTimes.length;
                        // Ensure that the amount of events we show on the flame chart is less
                        // than before, now we have added the React URL to the ignore list.
                        assert.isBelow(eventCountAfterIgnoreList, eventCountBeforeIgnoreList);
                        // Clear the data provider cache and unignore the script again
                        dataProvider.reset();
                        ignoreListManager.unIgnoreListURL(SCRIPT_TO_IGNORE);
                        // Ensure that now we have un-ignored the URL that we get the full set of events again.
                        assert.strictEqual(dataProvider.timelineData().entryStartTimes.length, eventCountBeforeIgnoreList);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    it('filters navigations to only return those that happen on the main frame', /*#__PURE__*/ _async_to_generator(function() {
        var dataProvider, traceData, mainFrameID, navigationEvents;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    dataProvider = new _timeline_js__WEBPACK_IMPORTED_MODULE_5__.TimelineFlameChartDataProvider.TimelineFlameChartDataProvider();
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'multiple-navigations-with-iframes.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    dataProvider.setModel(traceData);
                    mainFrameID = traceData.Meta.mainFrameId;
                    navigationEvents = dataProvider.mainFrameNavigationStartEvents();
                    // Ensure that every navigation event that we return is for the main frame.
                    assert.isTrue(navigationEvents.every(function(navEvent) {
                        return navEvent.args.frame === mainFrameID;
                    }));
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=TimelineFlameChartDataProvider.test.js.map


}),

}]);