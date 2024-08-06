"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["legacy_test_runner_performance_test_runner_TimelineTestRunner_js"],{

/***/ "./legacy_test_runner/performance_test_runner/TimelineTestRunner.js":
/*!**************************************************************************!*\
  !*** ./legacy_test_runner/performance_test_runner/TimelineTestRunner.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/trace/trace.js */ "./models/trace/trace.js");
/* harmony import */ var _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../panels/timeline/timeline.js */ "./panels/timeline/timeline.js");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */
self.PerformanceTestRunner = self.PerformanceTestRunner || {};

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

  let stackTrace;

  if (cause.stackTrace && cause.stackTrace.length) {
    stackTrace =
        TestRunner.formatters.formatAsURL(cause.stackTrace[0].url) + ':' + (cause.stackTrace[0].lineNumber + 1);
  }

  return '{reason: ' + cause.reason + ', stackTrace: ' + stackTrace + '}';
};

PerformanceTestRunner.invokeWithTracing = function(functionName, callback, additionalCategories, enableJSSampling) {
  let categories = '-*,disabled-by-default-devtools.timeline*,devtools.timeline,blink.user_timing,toplevel';

  if (additionalCategories) {
    categories += ',' + additionalCategories;
  }

  const timelinePanel = _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelinePanel.TimelinePanel.instance();
  const timelineController = PerformanceTestRunner.createTimelineController();
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
PerformanceTestRunner.createTraceEngineDataFromEvents = async function(events) {
  const model = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_2__.TraceModel.Model.createWithAllHandlers(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Configuration.defaults());
  await model.parse(events);
  // Model only has one trace, so we can hardcode 0 here to get the latest
  // result.
  return model.traceParsedData(0);
};

PerformanceTestRunner.createTimelineController = function() {
  const controller = new _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelineController.TimelineController(
      _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().primaryPageTarget(), _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelinePanel.TimelinePanel.instance());
  controller.tracingManager = TestRunner.tracingManager;
  return controller;
};

PerformanceTestRunner.runWhenTimelineIsReady = function(callback) {
  TestRunner.addSniffer(_panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelinePanel.TimelinePanel.instance(), 'loadingCompleteForTest', () => callback());
};

PerformanceTestRunner.startTimeline = function() {
  const panel = _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelinePanel.TimelinePanel.instance();
  panel.toggleRecording();
  return TestRunner.addSnifferPromise(panel, 'recordingStarted');
};

PerformanceTestRunner.stopTimeline = async function() {
  await _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelinePanel.TimelinePanel.instance().toggleRecording();
};

PerformanceTestRunner.runPerfTraceWithReload = async function() {
  await PerformanceTestRunner.startTimeline();
  await TestRunner.reloadPagePromise();
  await PerformanceTestRunner.stopTimeline();
};

PerformanceTestRunner.getTimelineWidget = async function() {
  return await _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ViewManager.ViewManager.instance().view('timeline').widget();
};

PerformanceTestRunner.getNetworkFlameChartElement = async function() {
  const widget = await PerformanceTestRunner.getTimelineWidget();
  return widget.flameChart.networkFlameChart.contentElement;
};

PerformanceTestRunner.getMainFlameChartElement = async function() {
  const widget = await PerformanceTestRunner.getTimelineWidget();
  return widget.flameChart.mainFlameChart.contentElement;
};

PerformanceTestRunner.evaluateWithTimeline = async function(actions) {
  await PerformanceTestRunner.startTimeline();
  await TestRunner.evaluateInPageAnonymously(actions);
  await PerformanceTestRunner.stopTimeline();
};

PerformanceTestRunner.invokeAsyncWithTimeline = async function(functionName) {
  await PerformanceTestRunner.startTimeline();
  await TestRunner.callFunctionInPageAsync(functionName);
  await PerformanceTestRunner.stopTimeline();
};

PerformanceTestRunner.performActionsAndPrint = async function(actions, typeName, includeTimeStamps) {
  await PerformanceTestRunner.evaluateWithTimeline(actions);
  await PerformanceTestRunner.printTimelineRecordsWithDetails(typeName);
  if (includeTimeStamps) {
    TestRunner.addResult('Timestamp records: ');
    PerformanceTestRunner.printTimestampRecords(typeName);
  }
  TestRunner.completeTest();
};

PerformanceTestRunner.walkTimelineEventTreeUnderNode = async function(callback, root, level) {
  const event = root.event;

  if (event) {
    await callback(event, level, root);
  }

  for (const child of root.children().values()) {
    await PerformanceTestRunner.walkTimelineEventTreeUnderNode(callback, child, (level || 0) + 1);
  }
};

PerformanceTestRunner.forAllEvents = async function(events, callback) {
  const eventStack = [];

  for (const event of events) {
    while (eventStack.length && eventStack[eventStack.length - 1].endTime <= event.startTime) {
      eventStack.pop();
    }

    await callback(event, eventStack);

    if (event.endTime) {
      eventStack.push(event);
    }
  }
};

PerformanceTestRunner.printTraceEventProperties = function(traceEvent) {
  TestRunner.addResult(traceEvent.name + ' Properties:');
  const data = traceEvent.args['beginData'] || traceEvent.args['data'];
  const frameId = data && data['frame'];

  const object = {
    data: traceEvent.args['data'] || traceEvent.args,
    endTime: traceEvent.endTime || traceEvent.startTime,
    frameId: frameId,
    startTime: traceEvent.startTime,
    type: traceEvent.name
  };

  for (const field in object) {
    if (object[field] === null || object[field] === undefined) {
      delete object[field];
    }
  }

  TestRunner.addObject(object, PerformanceTestRunner.timelinePropertyFormatters);
};

PerformanceTestRunner.printTraceEventPropertiesWithDetails = async function(event) {
  PerformanceTestRunner.printTraceEventProperties(event);
  const details = await _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelineUIUtils.TimelineUIUtils.buildDetailsTextForTraceEvent(
      event, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().primaryPageTarget(), new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__.Linkifier.Linkifier());
  TestRunner.waitForPendingLiveLocationUpdates();
  TestRunner.addResult(`Text details for ${event.name}: ${details}`);
};

PerformanceTestRunner.findChildEvent = function(events, parentIndex, name) {
  const endTime = events[parentIndex].endTime;

  for (let i = parentIndex + 1; i < events.length && (!events[i].endTime || events[i].endTime <= endTime); ++i) {
    if (events[i].name === name) {
      return events[i];
    }
  }

  return null;
};

PerformanceTestRunner.dumpFrame = function(frame) {
  const fieldsToDump = [
    'cpuTime', 'duration', 'startTime', 'endTime', 'id', 'mainThreadFrameId', 'timeByCategory', 'other', 'scripting',
    'painting', 'rendering', 'committedFrom', 'idle'
  ];

  function formatFields(object) {
    const result = {};

    for (const key in object) {
      if (fieldsToDump.indexOf(key) < 0) {
        continue;
      }

      let value = object[key];

      if (typeof value === 'number') {
        value = Number(value.toFixed(7));
      } else if (typeof value === 'object' && value) {
        value = formatFields(value);
      }

      result[key] = value;
    }

    return result;
  }

  TestRunner.addObject(formatFields(frame));
};

PerformanceTestRunner.dumpFlameChartProvider = function(provider, includeGroups) {
  const includeGroupsSet = includeGroups && new Set(includeGroups);
  const timelineData = provider.timelineData();
  const stackDepth = provider.maxStackDepth();
  const entriesByLevel = new _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.MapUtilities.Multimap();

  for (let i = 0; i < timelineData.entryLevels.length; ++i) {
    entriesByLevel.set(timelineData.entryLevels[i], i);
  }

  for (let groupIndex = 0; groupIndex < timelineData.groups.length; ++groupIndex) {
    const group = timelineData.groups[groupIndex];

    if (includeGroupsSet && !includeGroupsSet.has(group.name)) {
      continue;
    }

    const maxLevel =
        (groupIndex + 1 < timelineData.groups.length ? timelineData.groups[groupIndex + 1].startLevel : stackDepth);
    TestRunner.addResult(`Group: ${group.name}`);

    for (let level = group.startLevel; level < maxLevel; ++level) {
      TestRunner.addResult(`Level ${level - group.startLevel}`);
      const entries = entriesByLevel.get(level);

      for (const index of entries) {
        const title = provider.entryTitle(index);
        const color = provider.entryColor(index);
        TestRunner.addResult(`${title} (${color})`);
      }
    }
  }
};

PerformanceTestRunner.dumpTimelineFlameChart = function(includeGroups) {
  const provider = _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelinePanel.TimelinePanel.instance().flameChart.mainDataProvider;
  TestRunner.addResult('Timeline Flame Chart');
  PerformanceTestRunner.dumpFlameChartProvider(provider, includeGroups);
};

PerformanceTestRunner.loadTimeline = async function(timelineData) {
  await _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelinePanel.TimelinePanel.instance().loadFromFile(new Blob([timelineData], {type: 'text/plain'}));
};

TestRunner.deprecatedInitAsync(`
  function wrapCallFunctionForTimeline(f) {
    let script = document.createElement('script');
    script.textContent = '(' + f.toString() + ')()\\n//# sourceURL=wrapCallFunctionForTimeline.js';
    document.body.appendChild(script);
  }

  function generateFrames(count) {
    let promise = Promise.resolve();

    for (let i = count; i > 0; --i)
      promise = promise.then(changeBackgroundAndWaitForFrame.bind(null, i));

    return promise;

    function changeBackgroundAndWaitForFrame(i) {
      document.body.style.backgroundColor = (i & 1 ? 'rgb(200, 200, 200)' : 'rgb(240, 240, 240)');
      return waitForFrame();
    }
  }

  function waitForFrame() {
    let callback;
    let promise = new Promise(fulfill => callback = fulfill);

    if (window.testRunner)
      testRunner.updateAllLifecyclePhasesAndCompositeThen(callback);
    else
      window.requestAnimationFrame(callback);

    return promise;
  }
`);


/***/ })

}]);