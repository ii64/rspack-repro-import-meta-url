"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["legacy_test_runner_performance_test_runner_TimelineTestRunner_js"], {
"./legacy_test_runner/performance_test_runner/TimelineTestRunner.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/trace/trace.js */ "./models/trace/trace.js");
/* harmony import */var _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../panels/timeline/timeline.js */ "./panels/timeline/timeline.js");
/* harmony import */var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
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
        var self1 = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self1, args);
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
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
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






/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */ self.PerformanceTestRunner = self.PerformanceTestRunner || {};
PerformanceTestRunner.timelinePropertyFormatters = {
    children: 'formatAsTypeName',
    endTime: 'formatAsTypeName',
    requestId: 'formatAsTypeName',
    startTime: 'formatAsTypeName',
    responseTime: 'formatAsTypeName',
    stackTrace: 'formatAsTypeName',
    url: 'formatAsURL',
    fileName: 'formatAsURL',
    scriptName: 'formatAsTypeName',
    scriptId: 'formatAsTypeName',
    usedHeapSizeDelta: 'skip',
    id: 'formatAsTypeName',
    timerId: 'formatAsTypeName',
    layerId: 'formatAsTypeName',
    frameId: 'formatAsTypeName',
    frame: 'formatAsTypeName',
    page: 'formatAsTypeName',
    encodedDataLength: 'formatAsTypeName',
    identifier: 'formatAsTypeName',
    clip: 'formatAsTypeName',
    root: 'formatAsTypeName',
    backendNodeId: 'formatAsTypeName',
    nodeId: 'formatAsTypeName',
    rootNode: 'formatAsTypeName',
    finishTime: 'formatAsTypeName',
    thread: 'formatAsTypeName',
    allottedMilliseconds: 'formatAsTypeName',
    timedOut: 'formatAsTypeName',
    networkTime: 'formatAsTypeName',
    timing: 'formatAsTypeName',
    streamed: 'formatAsTypeName',
    producedCacheSize: 'formatAsTypeName',
    consumedCacheSize: 'formatAsTypeName'
};
PerformanceTestRunner.InvalidationFormatters = {
    tracingEvent: 'skip',
    cause: 'formatAsInvalidationCause',
    frame: 'skip',
    invalidatedSelectorId: 'skip',
    invalidationList: 'skip',
    invalidationSet: 'skip',
    linkedRecalcStyleEvent: 'skip',
    linkedLayoutEvent: 'skip',
    nodeId: 'skip',
    paintId: 'skip',
    startTime: 'skip'
};
TestRunner.formatters.formatAsInvalidationCause = function(cause) {
    if (!cause) {
        return '<undefined>';
    }
    var stackTrace;
    if (cause.stackTrace && cause.stackTrace.length) {
        stackTrace = TestRunner.formatters.formatAsURL(cause.stackTrace[0].url) + ':' + (cause.stackTrace[0].lineNumber + 1);
    }
    return '{reason: ' + cause.reason + ', stackTrace: ' + stackTrace + '}';
};
PerformanceTestRunner.invokeWithTracing = function(functionName, callback, additionalCategories, enableJSSampling) {
    var categories = '-*,disabled-by-default-devtools.timeline*,devtools.timeline,blink.user_timing,toplevel';
    if (additionalCategories) {
        categories += ',' + additionalCategories;
    }
    var timelinePanel = _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelinePanel.TimelinePanel.instance();
    var timelineController = PerformanceTestRunner.createTimelineController();
    timelinePanel.timelineController = timelineController;
    timelineController.startRecordingWithCategories(categories, enableJSSampling).then(tracingStarted);
    function tracingStarted() {
        timelinePanel.recordingStarted();
        TestRunner.callFunctionInPageAsync(functionName).then(onPageActionsDone);
    }
    function onPageActionsDone() {
        timelineController.stopRecording().then(callback);
    }
};
PerformanceTestRunner.performanceModel = function() {
    return _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelinePanel.TimelinePanel.instance().performanceModel;
};
PerformanceTestRunner.traceEngineParsedData = function() {
    return _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelinePanel.TimelinePanel.instance().getTraceEngineDataForLayoutTests();
};
PerformanceTestRunner.traceEngineRawEvents = function() {
    return _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelinePanel.TimelinePanel.instance().getTraceEngineRawTraceEventsForLayoutTests();
};
// NOTE: if you are here and trying to use this method, please think first if
// you can instead add a unit test to the DevTools repository. That is
// preferred to layout tests, if possible.
PerformanceTestRunner.createTraceEngineDataFromEvents = function() {
    var _ref = _async_to_generator(function(events) {
        var model;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    model = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_2__.TraceModel.Model.createWithAllHandlers(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Configuration.defaults());
                    return [
                        4,
                        model.parse(events)
                    ];
                case 1:
                    _state.sent();
                    // Model only has one trace, so we can hardcode 0 here to get the latest
                    // result.
                    return [
                        2,
                        model.traceParsedData(0)
                    ];
            }
        });
    });
    return function(events) {
        return _ref.apply(this, arguments);
    };
}();
PerformanceTestRunner.createTimelineController = function() {
    var controller = new _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelineController.TimelineController(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().primaryPageTarget(), _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelinePanel.TimelinePanel.instance());
    controller.tracingManager = TestRunner.tracingManager;
    return controller;
};
PerformanceTestRunner.runWhenTimelineIsReady = function(callback) {
    TestRunner.addSniffer(_panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelinePanel.TimelinePanel.instance(), 'loadingCompleteForTest', function() {
        return callback();
    });
};
PerformanceTestRunner.startTimeline = function() {
    var panel = _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelinePanel.TimelinePanel.instance();
    panel.toggleRecording();
    return TestRunner.addSnifferPromise(panel, 'recordingStarted');
};
PerformanceTestRunner.stopTimeline = /*#__PURE__*/ _async_to_generator(function() {
    return _ts_generator(this, function(_state) {
        switch(_state.label){
            case 0:
                return [
                    4,
                    _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelinePanel.TimelinePanel.instance().toggleRecording()
                ];
            case 1:
                _state.sent();
                return [
                    2
                ];
        }
    });
});
PerformanceTestRunner.runPerfTraceWithReload = /*#__PURE__*/ _async_to_generator(function() {
    return _ts_generator(this, function(_state) {
        switch(_state.label){
            case 0:
                return [
                    4,
                    PerformanceTestRunner.startTimeline()
                ];
            case 1:
                _state.sent();
                return [
                    4,
                    TestRunner.reloadPagePromise()
                ];
            case 2:
                _state.sent();
                return [
                    4,
                    PerformanceTestRunner.stopTimeline()
                ];
            case 3:
                _state.sent();
                return [
                    2
                ];
        }
    });
});
PerformanceTestRunner.getTimelineWidget = /*#__PURE__*/ _async_to_generator(function() {
    return _ts_generator(this, function(_state) {
        switch(_state.label){
            case 0:
                return [
                    4,
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ViewManager.ViewManager.instance().view('timeline').widget()
                ];
            case 1:
                return [
                    2,
                    _state.sent()
                ];
        }
    });
});
PerformanceTestRunner.getNetworkFlameChartElement = /*#__PURE__*/ _async_to_generator(function() {
    var widget;
    return _ts_generator(this, function(_state) {
        switch(_state.label){
            case 0:
                return [
                    4,
                    PerformanceTestRunner.getTimelineWidget()
                ];
            case 1:
                widget = _state.sent();
                return [
                    2,
                    widget.flameChart.networkFlameChart.contentElement
                ];
        }
    });
});
PerformanceTestRunner.getMainFlameChartElement = /*#__PURE__*/ _async_to_generator(function() {
    var widget;
    return _ts_generator(this, function(_state) {
        switch(_state.label){
            case 0:
                return [
                    4,
                    PerformanceTestRunner.getTimelineWidget()
                ];
            case 1:
                widget = _state.sent();
                return [
                    2,
                    widget.flameChart.mainFlameChart.contentElement
                ];
        }
    });
});
PerformanceTestRunner.evaluateWithTimeline = function() {
    var _ref = _async_to_generator(function(actions) {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        PerformanceTestRunner.startTimeline()
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        TestRunner.evaluateInPageAnonymously(actions)
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        PerformanceTestRunner.stopTimeline()
                    ];
                case 3:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return function(actions) {
        return _ref.apply(this, arguments);
    };
}();
PerformanceTestRunner.invokeAsyncWithTimeline = function() {
    var _ref = _async_to_generator(function(functionName) {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        PerformanceTestRunner.startTimeline()
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        TestRunner.callFunctionInPageAsync(functionName)
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        PerformanceTestRunner.stopTimeline()
                    ];
                case 3:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return function(functionName) {
        return _ref.apply(this, arguments);
    };
}();
PerformanceTestRunner.performActionsAndPrint = function() {
    var _ref = _async_to_generator(function(actions, typeName, includeTimeStamps) {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        PerformanceTestRunner.evaluateWithTimeline(actions)
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        PerformanceTestRunner.printTimelineRecordsWithDetails(typeName)
                    ];
                case 2:
                    _state.sent();
                    if (includeTimeStamps) {
                        TestRunner.addResult('Timestamp records: ');
                        PerformanceTestRunner.printTimestampRecords(typeName);
                    }
                    TestRunner.completeTest();
                    return [
                        2
                    ];
            }
        });
    });
    return function(actions, typeName, includeTimeStamps) {
        return _ref.apply(this, arguments);
    };
}();
PerformanceTestRunner.walkTimelineEventTreeUnderNode = function() {
    var _ref = _async_to_generator(function(callback, root, level) {
        var event, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, child, err;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    event = root.event;
                    if (!event) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        callback(event, level, root)
                    ];
                case 1:
                    _state.sent();
                    _state.label = 2;
                case 2:
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    _state.label = 3;
                case 3:
                    _state.trys.push([
                        3,
                        8,
                        9,
                        10
                    ]);
                    _iterator = root.children().values()[Symbol.iterator]();
                    _state.label = 4;
                case 4:
                    if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                        3,
                        7
                    ];
                    child = _step.value;
                    return [
                        4,
                        PerformanceTestRunner.walkTimelineEventTreeUnderNode(callback, child, (level || 0) + 1)
                    ];
                case 5:
                    _state.sent();
                    _state.label = 6;
                case 6:
                    _iteratorNormalCompletion = true;
                    return [
                        3,
                        4
                    ];
                case 7:
                    return [
                        3,
                        10
                    ];
                case 8:
                    err = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err;
                    return [
                        3,
                        10
                    ];
                case 9:
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                    return [
                        7
                    ];
                case 10:
                    return [
                        2
                    ];
            }
        });
    });
    return function(callback, root, level) {
        return _ref.apply(this, arguments);
    };
}();
PerformanceTestRunner.forAllEvents = function() {
    var _ref = _async_to_generator(function(events, callback) {
        var eventStack, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, err;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    eventStack = [];
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        6,
                        7,
                        8
                    ]);
                    _iterator = events[Symbol.iterator]();
                    _state.label = 2;
                case 2:
                    if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                        3,
                        5
                    ];
                    event = _step.value;
                    while(eventStack.length && eventStack[eventStack.length - 1].endTime <= event.startTime){
                        eventStack.pop();
                    }
                    return [
                        4,
                        callback(event, eventStack)
                    ];
                case 3:
                    _state.sent();
                    if (event.endTime) {
                        eventStack.push(event);
                    }
                    _state.label = 4;
                case 4:
                    _iteratorNormalCompletion = true;
                    return [
                        3,
                        2
                    ];
                case 5:
                    return [
                        3,
                        8
                    ];
                case 6:
                    err = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err;
                    return [
                        3,
                        8
                    ];
                case 7:
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                    return [
                        7
                    ];
                case 8:
                    return [
                        2
                    ];
            }
        });
    });
    return function(events, callback) {
        return _ref.apply(this, arguments);
    };
}();
PerformanceTestRunner.printTraceEventProperties = function(traceEvent) {
    TestRunner.addResult(traceEvent.name + ' Properties:');
    var data = traceEvent.args['beginData'] || traceEvent.args['data'];
    var frameId = data && data['frame'];
    var object = {
        data: traceEvent.args['data'] || traceEvent.args,
        endTime: traceEvent.endTime || traceEvent.startTime,
        frameId: frameId,
        startTime: traceEvent.startTime,
        type: traceEvent.name
    };
    for(var field in object){
        if (object[field] === null || object[field] === undefined) {
            delete object[field];
        }
    }
    TestRunner.addObject(object, PerformanceTestRunner.timelinePropertyFormatters);
};
PerformanceTestRunner.printTraceEventPropertiesWithDetails = function() {
    var _ref = _async_to_generator(function(event) {
        var details;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    PerformanceTestRunner.printTraceEventProperties(event);
                    return [
                        4,
                        _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelineUIUtils.TimelineUIUtils.buildDetailsTextForTraceEvent(event, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().primaryPageTarget(), new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__.Linkifier.Linkifier())
                    ];
                case 1:
                    details = _state.sent();
                    TestRunner.waitForPendingLiveLocationUpdates();
                    TestRunner.addResult("Text details for ".concat(event.name, ": ").concat(details));
                    return [
                        2
                    ];
            }
        });
    });
    return function(event) {
        return _ref.apply(this, arguments);
    };
}();
PerformanceTestRunner.findChildEvent = function(events, parentIndex, name) {
    var endTime = events[parentIndex].endTime;
    for(var i = parentIndex + 1; i < events.length && (!events[i].endTime || events[i].endTime <= endTime); ++i){
        if (events[i].name === name) {
            return events[i];
        }
    }
    return null;
};
PerformanceTestRunner.dumpFrame = function(frame) {
    var fieldsToDump = [
        'cpuTime',
        'duration',
        'startTime',
        'endTime',
        'id',
        'mainThreadFrameId',
        'timeByCategory',
        'other',
        'scripting',
        'painting',
        'rendering',
        'committedFrom',
        'idle'
    ];
    function formatFields(object) {
        var result = {};
        for(var key in object){
            if (fieldsToDump.indexOf(key) < 0) {
                continue;
            }
            var value = object[key];
            if (typeof value === 'number') {
                value = Number(value.toFixed(7));
            } else if ((typeof value === "undefined" ? "undefined" : _type_of(value)) === 'object' && value) {
                value = formatFields(value);
            }
            result[key] = value;
        }
        return result;
    }
    TestRunner.addObject(formatFields(frame));
};
PerformanceTestRunner.dumpFlameChartProvider = function(provider, includeGroups) {
    var includeGroupsSet = includeGroups && new Set(includeGroups);
    var timelineData = provider.timelineData();
    var stackDepth = provider.maxStackDepth();
    var entriesByLevel = new _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.MapUtilities.Multimap();
    for(var i = 0; i < timelineData.entryLevels.length; ++i){
        entriesByLevel.set(timelineData.entryLevels[i], i);
    }
    for(var groupIndex = 0; groupIndex < timelineData.groups.length; ++groupIndex){
        var group = timelineData.groups[groupIndex];
        if (includeGroupsSet && !includeGroupsSet.has(group.name)) {
            continue;
        }
        var maxLevel = groupIndex + 1 < timelineData.groups.length ? timelineData.groups[groupIndex + 1].startLevel : stackDepth;
        TestRunner.addResult("Group: ".concat(group.name));
        for(var level = group.startLevel; level < maxLevel; ++level){
            TestRunner.addResult("Level ".concat(level - group.startLevel));
            var entries = entriesByLevel.get(level);
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = entries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var index = _step.value;
                    var title = provider.entryTitle(index);
                    var color = provider.entryColor(index);
                    TestRunner.addResult("".concat(title, " (").concat(color, ")"));
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
        }
    }
};
PerformanceTestRunner.dumpTimelineFlameChart = function(includeGroups) {
    var provider = _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelinePanel.TimelinePanel.instance().flameChart.mainDataProvider;
    TestRunner.addResult('Timeline Flame Chart');
    PerformanceTestRunner.dumpFlameChartProvider(provider, includeGroups);
};
PerformanceTestRunner.loadTimeline = function() {
    var _ref = _async_to_generator(function(timelineData) {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelinePanel.TimelinePanel.instance().loadFromFile(new Blob([
                            timelineData
                        ], {
                            type: 'text/plain'
                        }))
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return function(timelineData) {
        return _ref.apply(this, arguments);
    };
}();
TestRunner.deprecatedInitAsync("\n  function wrapCallFunctionForTimeline(f) {\n    let script = document.createElement('script');\n    script.textContent = '(' + f.toString() + ')()\\n//# sourceURL=wrapCallFunctionForTimeline.js';\n    document.body.appendChild(script);\n  }\n\n  function generateFrames(count) {\n    let promise = Promise.resolve();\n\n    for (let i = count; i > 0; --i)\n      promise = promise.then(changeBackgroundAndWaitForFrame.bind(null, i));\n\n    return promise;\n\n    function changeBackgroundAndWaitForFrame(i) {\n      document.body.style.backgroundColor = (i & 1 ? 'rgb(200, 200, 200)' : 'rgb(240, 240, 240)');\n      return waitForFrame();\n    }\n  }\n\n  function waitForFrame() {\n    let callback;\n    let promise = new Promise(fulfill => callback = fulfill);\n\n    if (window.testRunner)\n      testRunner.updateAllLifecyclePhasesAndCompositeThen(callback);\n    else\n      window.requestAnimationFrame(callback);\n\n    return promise;\n  }\n");


}),

}]);