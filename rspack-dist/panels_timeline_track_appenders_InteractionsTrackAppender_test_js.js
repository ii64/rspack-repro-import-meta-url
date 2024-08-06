"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_timeline_track_appenders_InteractionsTrackAppender_test_js"], {
"./panels/timeline/track_appenders/InteractionsTrackAppender.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
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
    return compatibilityTracksAppender.interactionsTrackAppender();
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('InteractionsTrackAppender', function() {
    function renderTrackAppender(context, trace) {
        return _renderTrackAppender.apply(this, arguments);
    }
    function _renderTrackAppender() {
        _renderTrackAppender = _async_to_generator(function(context, trace) {
            var entryTypeByLevel, entryData, flameChartData, traceData, interactionsTrackAppender;
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
                        interactionsTrackAppender = initTrackAppender(flameChartData, traceData, entryData, entryTypeByLevel);
                        interactionsTrackAppender.appendTrackAtLevel(0);
                        return [
                            2,
                            {
                                entryTypeByLevel: entryTypeByLevel,
                                traceParsedData: traceData,
                                flameChartData: flameChartData,
                                interactionsTrackAppender: interactionsTrackAppender,
                                entryData: entryData
                            }
                        ];
                }
            });
        });
        return _renderTrackAppender.apply(this, arguments);
    }
    describe('appendTrackAtLevel', function() {
        it('marks all levels used by the track with the `TrackAppender` type', /*#__PURE__*/ _async_to_generator(function() {
            var entryTypeByLevel;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderTrackAppender(this, 'slow-interaction-button-click.json.gz')
                        ];
                    case 1:
                        entryTypeByLevel = _state.sent().entryTypeByLevel;
                        // All events fit on the top level
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
        it('takes over no levels if there are no interactions', /*#__PURE__*/ _async_to_generator(function() {
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
                        assert.strictEqual(entryTypeByLevel.length, 0);
                        return [
                            2
                        ];
                }
            });
        }));
        it('only shows the top level interactions', /*#__PURE__*/ _async_to_generator(function() {
            var _ref, entryData, traceParsedData;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderTrackAppender(this, 'nested-interactions.json.gz')
                        ];
                    case 1:
                        _ref = _state.sent(), entryData = _ref.entryData, traceParsedData = _ref.traceParsedData;
                        assert.strictEqual(entryData.length, traceParsedData.UserInteractions.interactionEventsWithNoNesting.length);
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
                            renderTrackAppender(this, 'slow-interaction-button-click.json.gz')
                        ];
                    case 1:
                        flameChartData = _state.sent().flameChartData;
                        assert.strictEqual(flameChartData.groups.length, 1);
                        assert.strictEqual(flameChartData.groups[0].name, 'Interactions');
                        return [
                            2
                        ];
                }
            });
        }));
        it('adds all interactions with the correct start times', /*#__PURE__*/ _async_to_generator(function() {
            var _ref, flameChartData, traceParsedData, entryData, events, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, markerIndex;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderTrackAppender(this, 'slow-interaction-button-click.json.gz')
                        ];
                    case 1:
                        _ref = _state.sent(), flameChartData = _ref.flameChartData, traceParsedData = _ref.traceParsedData, entryData = _ref.entryData;
                        events = traceParsedData.UserInteractions.interactionEventsWithNoNesting;
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
        it('adds total times correctly', /*#__PURE__*/ _async_to_generator(function() {
            var _ref, flameChartData, traceParsedData, entryData, events, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, markerIndex, expectedTotalTimeForEvent;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderTrackAppender(this, 'slow-interaction-button-click.json.gz')
                        ];
                    case 1:
                        _ref = _state.sent(), flameChartData = _ref.flameChartData, traceParsedData = _ref.traceParsedData, entryData = _ref.entryData;
                        events = traceParsedData.UserInteractions.interactionEventsWithNoNesting;
                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(_iterator = events[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                event = _step.value;
                                markerIndex = entryData.indexOf(event);
                                assert.exists(markerIndex);
                                expectedTotalTimeForEvent = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.microSecondsToMilliseconds(event.dur || 0);
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
                        return [
                            2
                        ];
                }
            });
        }));
    });
    it('candy-stripes and adds warning triangles to long interactions', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, traceParsedData, flameChartData, entryData, longInteraction, entryIndex, decorationsForEntry;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderTrackAppender(this, 'one-second-interaction.json.gz')
                    ];
                case 1:
                    _ref = _state.sent(), traceParsedData = _ref.traceParsedData, flameChartData = _ref.flameChartData, entryData = _ref.entryData;
                    longInteraction = traceParsedData.UserInteractions.longestInteractionEvent;
                    if (!longInteraction) {
                        throw new Error('Could not find longest interaction');
                    }
                    entryIndex = entryData.indexOf(longInteraction);
                    decorationsForEntry = flameChartData.entryDecorations[entryIndex];
                    assert.deepEqual(decorationsForEntry, [
                        {
                            type: "CANDY" /* PerfUI.FlameChart.FlameChartDecorationType.CANDY */ ,
                            startAtTime: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(200000),
                            endAtTime: longInteraction.processingEnd
                        },
                        {
                            type: "WARNING_TRIANGLE" /* PerfUI.FlameChart.FlameChartDecorationType.WARNING_TRIANGLE */ ,
                            customEndTime: longInteraction.processingEnd
                        }
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('does not candy-stripe interactions less than 200ms', /*#__PURE__*/ _async_to_generator(function() {
        var flameChartData;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderTrackAppender(this, 'slow-interaction-button-click.json.gz')
                    ];
                case 1:
                    flameChartData = _state.sent().flameChartData;
                    // None of the interactions are over 200ms, so we do not expect to see any decorations
                    assert.lengthOf(flameChartData.entryDecorations, 0);
                    return [
                        2
                    ];
            }
        });
    }));
    it('returns the correct title for a pointer interaction, using its category', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, interactionsTrackAppender, traceParsedData, firstInteraction, title;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderTrackAppender(this, 'slow-interaction-button-click.json.gz')
                    ];
                case 1:
                    _ref = _state.sent(), interactionsTrackAppender = _ref.interactionsTrackAppender, traceParsedData = _ref.traceParsedData;
                    firstInteraction = traceParsedData.UserInteractions.interactionEvents[0];
                    title = interactionsTrackAppender.titleForEvent(firstInteraction);
                    assert.strictEqual(title, 'Pointer');
                    return [
                        2
                    ];
            }
        });
    }));
    it('returns the correct title for a keyboard interaction, using its category', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, interactionsTrackAppender, traceParsedData, keydownInteraction, title;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderTrackAppender(this, 'slow-interaction-keydown.json.gz')
                    ];
                case 1:
                    _ref = _state.sent(), interactionsTrackAppender = _ref.interactionsTrackAppender, traceParsedData = _ref.traceParsedData;
                    keydownInteraction = traceParsedData.UserInteractions.interactionEvents.find(function(e) {
                        return e.type === 'keydown';
                    });
                    if (!keydownInteraction) {
                        throw new Error('Could not find keydown interaction');
                    }
                    title = interactionsTrackAppender.titleForEvent(keydownInteraction);
                    assert.strictEqual(title, 'Keyboard');
                    return [
                        2
                    ];
            }
        });
    }));
    it('returns "Other" as the title for unknown event types', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, interactionsTrackAppender, traceParsedData, firstInteraction, title;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderTrackAppender(this, 'slow-interaction-button-click.json.gz')
                    ];
                case 1:
                    _ref = _state.sent(), interactionsTrackAppender = _ref.interactionsTrackAppender, traceParsedData = _ref.traceParsedData;
                    // Copy the event so we do not modify the actual trace data, and fake its
                    // interaction type to be unexpected.
                    firstInteraction = _object_spread({}, traceParsedData.UserInteractions.interactionEvents[0]);
                    firstInteraction.type = 'unknown';
                    title = interactionsTrackAppender.titleForEvent(firstInteraction);
                    assert.strictEqual(title, 'Other');
                    return [
                        2
                    ];
            }
        });
    }));
    it('highlightedEntryInfo returns the correct information', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, interactionsTrackAppender, traceParsedData, firstInteraction, highlightedEntryInfo;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderTrackAppender(this, 'slow-interaction-button-click.json.gz')
                    ];
                case 1:
                    _ref = _state.sent(), interactionsTrackAppender = _ref.interactionsTrackAppender, traceParsedData = _ref.traceParsedData;
                    firstInteraction = traceParsedData.UserInteractions.interactionEvents[0];
                    highlightedEntryInfo = interactionsTrackAppender.highlightedEntryInfo(firstInteraction);
                    // The i18n encodes spaces using the u00A0 unicode character.
                    assert.strictEqual(highlightedEntryInfo.formattedTime, '31.72\u00A0ms');
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=InteractionsTrackAppender.test.js.map


}),

}]);