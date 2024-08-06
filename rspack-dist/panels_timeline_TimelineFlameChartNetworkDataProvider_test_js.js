"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_timeline_TimelineFlameChartNetworkDataProvider_test_js"], {
"./panels/timeline/TimelineFlameChartNetworkDataProvider.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/trace/trace.js */ "./models/trace/trace.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */var _timeline_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timeline.js */ "./panels/timeline/timeline.js");
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




(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('TimelineFlameChartNetworkDataProvider', function() {
    it('renders the network track correctly', /*#__PURE__*/ _async_to_generator(function() {
        var dataProvider, traceData, minTime, maxTime, networkTrackGroup, networkEvents, networkEventsStartTimes, networkEventsTotalTimes;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    dataProvider = new _timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelineFlameChartNetworkDataProvider.TimelineFlameChartNetworkDataProvider();
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'load-simple.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    minTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.microSecondsToMilliseconds(traceData.Meta.traceBounds.min);
                    maxTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.microSecondsToMilliseconds(traceData.Meta.traceBounds.max);
                    dataProvider.setModel(traceData);
                    dataProvider.setWindowTimes(minTime, maxTime);
                    // TimelineFlameChartNetworkDataProvider only has network track, so should always be one track group.
                    assert.strictEqual(dataProvider.timelineData().groups.length, 1);
                    networkTrackGroup = dataProvider.timelineData().groups[0];
                    assert.deepEqual(dataProvider.minimumBoundary(), minTime);
                    assert.deepEqual(dataProvider.totalTime(), maxTime - minTime);
                    networkEvents = traceData.NetworkRequests.byTime;
                    networkEventsStartTimes = networkEvents.map(function(request) {
                        return _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.microSecondsToMilliseconds(request.ts);
                    });
                    networkEventsTotalTimes = networkEvents.map(function(request) {
                        var _TraceEngine_Helpers_Timing_eventTimingsMilliSeconds = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.eventTimingsMilliSeconds(request), startTime = _TraceEngine_Helpers_Timing_eventTimingsMilliSeconds.startTime, endTime = _TraceEngine_Helpers_Timing_eventTimingsMilliSeconds.endTime;
                        return endTime - startTime;
                    });
                    assert.deepEqual(dataProvider.timelineData().entryLevels.length, 6);
                    assert.deepEqual(dataProvider.timelineData().entryLevels, [
                        0,
                        1,
                        1,
                        1,
                        1,
                        2
                    ]);
                    assertTimestampsEqual(dataProvider.timelineData().entryStartTimes, networkEventsStartTimes);
                    assertTimestampsEqual(dataProvider.timelineData().entryTotalTimes, networkEventsTotalTimes);
                    assert.deepEqual(dataProvider.maxStackDepth(), 3);
                    // The decorateEntry() will be handled in the TimelineFlameChartNetworkDataProvider, so this function always returns true.
                    assert.isTrue(dataProvider.forceDecoration(0));
                    assert.isFalse(dataProvider.isEmpty());
                    // The network track is default to collapsed.
                    assert.isFalse(dataProvider.isExpanded());
                    // The height of collapsed network track style is 17.
                    assert.strictEqual(dataProvider.preferredHeight(), 17);
                    networkTrackGroup.expanded = true;
                    assert.isTrue(dataProvider.isExpanded());
                    // The max level here is 3, so `clamp(this.#maxLevel + 1, 7, 8.5)` = 7
                    assert.strictEqual(dataProvider.preferredHeight(), 17 * 7);
                    return [
                        2
                    ];
            }
        });
    }));
    it('filters navigations to only return those that happen on the main frame', /*#__PURE__*/ _async_to_generator(function() {
        var dataProvider, traceData, minTime, maxTime, mainFrameID, navigationEvents;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    dataProvider = new _timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelineFlameChartNetworkDataProvider.TimelineFlameChartNetworkDataProvider();
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'multiple-navigations-with-iframes.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    minTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.microSecondsToMilliseconds(traceData.Meta.traceBounds.min);
                    maxTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.microSecondsToMilliseconds(traceData.Meta.traceBounds.max);
                    dataProvider.setModel(traceData);
                    dataProvider.setWindowTimes(minTime, maxTime);
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
    it('can provide the index for an event and the event for a given index', /*#__PURE__*/ _async_to_generator(function() {
        var dataProvider, traceData, event;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    dataProvider = new _timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelineFlameChartNetworkDataProvider.TimelineFlameChartNetworkDataProvider();
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'web-dev.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    dataProvider.setModel(traceData);
                    event = dataProvider.eventByIndex(0);
                    assert.isOk(event);
                    assert.strictEqual(dataProvider.indexForEvent(event), 0);
                    return [
                        2
                    ];
            }
        });
    }));
    it('does not render the network track if there is no network requests', /*#__PURE__*/ _async_to_generator(function() {
        var dataProvider, traceData, minTime, maxTime;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    dataProvider = new _timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelineFlameChartNetworkDataProvider.TimelineFlameChartNetworkDataProvider();
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'basic.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    minTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.microSecondsToMilliseconds(traceData.Meta.traceBounds.min);
                    maxTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.microSecondsToMilliseconds(traceData.Meta.traceBounds.max);
                    dataProvider.setModel(traceData);
                    dataProvider.setWindowTimes(minTime, maxTime);
                    // Network track appender won't append the network track if there is no network requests.
                    assert.strictEqual(dataProvider.timelineData().groups.length, 0);
                    assert.deepEqual(dataProvider.minimumBoundary(), minTime);
                    assert.deepEqual(dataProvider.totalTime(), maxTime - minTime);
                    assert.deepEqual(dataProvider.timelineData().entryLevels, []);
                    assert.deepEqual(dataProvider.timelineData().entryStartTimes, []);
                    assert.deepEqual(dataProvider.timelineData().entryTotalTimes, []);
                    assert.deepEqual(dataProvider.maxStackDepth(), 0);
                    // The decorateEntry() will be handled in the TimelineFlameChartNetworkDataProvider, so this function always returns true.
                    assert.isTrue(dataProvider.forceDecoration(0));
                    // The network track won't show if it is empty.
                    assert.isTrue(dataProvider.isEmpty());
                    assert.strictEqual(dataProvider.preferredHeight(), 0);
                    return [
                        2
                    ];
            }
        });
    }));
    it('decorate a event correctly', /*#__PURE__*/ _async_to_generator(function() {
        var dataProvider, traceData, event;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    dataProvider = new _timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelineFlameChartNetworkDataProvider.TimelineFlameChartNetworkDataProvider();
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'cls-cluster-max-timeout.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    // The field that is important of this test:
                    // {
                    // "ts": 183752441.977,
                    // "dur": 183752670.454,
                    // "finishTime": 183752669.23299998,
                    // ...
                    // "timing": {
                    //     "pushStart": 0,
                    //     "receiveHeadersEnd": 218.084,
                    //     "requestTime": 183752.449687,
                    //     "sendEnd": 13.01,
                    //     "sendStart": 12.792,
                    //     ...
                    //   },
                    //   "priority": "VeryHigh",
                    //   "responseTime": 1634222299.776
                    // ...
                    // }
                    event = traceData.NetworkRequests.byTime[1];
                    // So for this request:
                    // The earliest event belonging to this request starts at 183752441.977.
                    // This is used in flamechart to calculate unclippedBarX.
                    // Start time is 183752441.977
                    // End time is 183752670.454
                    // Finish time is 183752669.233
                    // request time is 183752.449687, but it is in second, so 183752449.687
                    // in milliseconds.
                    // sendStartTime is requestTime + sendStart = 183752462.479
                    // headersEndTime is requestTime + receiveHeadersEnd = 183752667.771
                    //
                    // To calculate the pixel of a timestamp, we substrate the begin time  from
                    // it, then multiple the timeToPixelRatio and then add the unclippedBarX.
                    // Then get the floor of the pixel.
                    // So the pixel of sendStart is (183752462.479 - 183752441.977) + 10, in ts it will be 30.502000004053116.
                    // So the pixel of headersEnd is (183752667.771 - 183752441.977) + 10, in ts it will be 235.79399999976158.
                    // So the pixel of finish is (183752669.233 - 183752441.977) + 10, in ts it will be 237.25600001215935.
                    // So the pixel of start is (183752441.977 - 183752441.977) + 10 = 10.
                    // So the pixel of end is (183752670.454 - 183752441.977) + 10, in ts it will be 238.47699999809265.
                    assert.deepEqual(dataProvider.getDecorationPixels(event, /* unclippedBarX= */ 10, /* timeToPixelRatio= */ 1), {
                        sendStart: 183752462.479 - 183752441.977 + 10,
                        headersEnd: 183752667.771 - 183752441.977 + 10,
                        finish: 183752669.233 - 183752441.977 + 10,
                        start: 10,
                        end: 183752670.454 - 183752441.977 + 10
                    });
                    return [
                        2
                    ];
            }
        });
    }));
});
function assertTimestampEqual(actual, expected) {
    assert.strictEqual(actual.toFixed(2), expected.toFixed(2));
}
function assertTimestampsEqual(actual, expected) {
    assert.strictEqual(actual.length, expected.length);
    for(var i = 0; i < actual.length; i++){
        assertTimestampEqual(actual[i], expected[i]);
    }
} //# sourceMappingURL=TimelineFlameChartNetworkDataProvider.test.js.map


}),

}]);