"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_testing_TraceHelpers_ts"],{

/***/ "./src/testing/TraceHelpers.ts":
/*!*************************************!*\
  !*** ./src/testing/TraceHelpers.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DevToolsTimelineCategory: () => (/* binding */ DevToolsTimelineCategory),
/* harmony export */   FakeFlameChartProvider: () => (/* binding */ FakeFlameChartProvider),
/* harmony export */   MockFlameChartDelegate: () => (/* binding */ MockFlameChartDelegate),
/* harmony export */   defaultTraceEvent: () => (/* binding */ defaultTraceEvent),
/* harmony export */   getAllNodes: () => (/* binding */ getAllNodes),
/* harmony export */   getBaseTraceParseModelData: () => (/* binding */ getBaseTraceParseModelData),
/* harmony export */   getEventOfType: () => (/* binding */ getEventOfType),
/* harmony export */   getEventsIn: () => (/* binding */ getEventsIn),
/* harmony export */   getMainFlameChartWithTracks: () => (/* binding */ getMainFlameChartWithTracks),
/* harmony export */   getMainThread: () => (/* binding */ getMainThread),
/* harmony export */   getNetworkFlameChart: () => (/* binding */ getNetworkFlameChart),
/* harmony export */   getNodeFor: () => (/* binding */ getNodeFor),
/* harmony export */   getRootAt: () => (/* binding */ getRootAt),
/* harmony export */   getTree: () => (/* binding */ getTree),
/* harmony export */   makeAsyncEndEvent: () => (/* binding */ makeAsyncEndEvent),
/* harmony export */   makeAsyncStartEvent: () => (/* binding */ makeAsyncStartEvent),
/* harmony export */   makeBeginEvent: () => (/* binding */ makeBeginEvent),
/* harmony export */   makeCompleteEvent: () => (/* binding */ makeCompleteEvent),
/* harmony export */   makeCompleteEventInMilliseconds: () => (/* binding */ makeCompleteEventInMilliseconds),
/* harmony export */   makeEndEvent: () => (/* binding */ makeEndEvent),
/* harmony export */   makeInstantEvent: () => (/* binding */ makeInstantEvent),
/* harmony export */   makeMockRendererHandlerData: () => (/* binding */ makeMockRendererHandlerData),
/* harmony export */   makeMockSamplesHandlerData: () => (/* binding */ makeMockSamplesHandlerData),
/* harmony export */   makeProfileCall: () => (/* binding */ makeProfileCall),
/* harmony export */   prettyPrint: () => (/* binding */ prettyPrint),
/* harmony export */   setupIgnoreListManagerEnvironment: () => (/* binding */ setupIgnoreListManagerEnvironment)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/bindings/bindings.js */ "./src/models/bindings/bindings.ts");
/* harmony import */ var _models_cpu_profile_cpu_profile_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/cpu_profile/cpu_profile.js */ "./src/models/cpu_profile/cpu_profile.ts");
/* harmony import */ var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/trace/trace.js */ "./src/models/trace/trace.ts");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/workspace/workspace.js */ "./src/models/workspace/workspace.ts");
/* harmony import */ var _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../panels/timeline/timeline.js */ "./src/panels/timeline/timeline.ts");
/* harmony import */ var _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/legacy/components/perf_ui/perf_ui.js */ "./src/ui/legacy/components/perf_ui/perf_ui.ts");
/* harmony import */ var _EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _TraceLoader_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TraceLoader.js */ "./src/testing/TraceLoader.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.









// This mock class is used for instancing a flame chart in the helpers.
// Its implementation is empty because the methods aren't used by the
// helpers, only the mere definition.
class MockFlameChartDelegate {
    windowChanged(_startTime, _endTime, _animate) {
    }
    updateRangeSelection(_startTime, _endTime) {
    }
    updateSelectedGroup(_flameChart, _group) {
    }
}
/**
 * Draws a set of tracks track in the flame chart using the new system.
 * For this to work, every track that will be rendered must have a
 * corresponding track appender registered in the
 * CompatibilityTracksAppender.
 *
 * @param traceFileName The name of the trace file to be loaded into the
 * flame chart.
 * @param trackAppenderNames A Set with the names of the tracks to be
 * rendered. For example, Set("Timings").
 * @param expanded whether the track should be expanded
 * @param trackName optional param to filter tracks by their name.
 * @returns a flame chart element and its corresponding data provider.
 */
async function getMainFlameChartWithTracks(traceFileName, trackAppenderNames, expanded, trackName) {
    await (0,_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_7__.initializeGlobalVars)();
    // This function is used to load a component example.
    const { traceData } = await _TraceLoader_js__WEBPACK_IMPORTED_MODULE_8__.TraceLoader.traceEngine(/* context= */ null, traceFileName);
    const dataProvider = new _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_5__.TimelineFlameChartDataProvider.TimelineFlameChartDataProvider();
    // The data provider still needs a reference to the legacy model to
    // work properly.
    dataProvider.setModel(traceData);
    const tracksAppender = dataProvider.compatibilityTracksAppenderInstance();
    tracksAppender.setVisibleTracks(trackAppenderNames);
    dataProvider.buildFromTrackAppenders({ filterThreadsByName: trackName, expandedTracks: expanded ? trackAppenderNames : undefined });
    const delegate = new MockFlameChartDelegate();
    const flameChart = new _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_6__.FlameChart.FlameChart(dataProvider, delegate);
    const minTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Timing.microSecondsToMilliseconds(traceData.Meta.traceBounds.min);
    const maxTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Timing.microSecondsToMilliseconds(traceData.Meta.traceBounds.max);
    flameChart.setWindowTimes(minTime, maxTime);
    flameChart.markAsRoot();
    flameChart.update();
    return { flameChart, dataProvider };
}
/**
 * Draws the network track in the flame chart using the legacy system.
 *
 * @param traceFileName The name of the trace file to be loaded to the flame
 * chart.
 * @param expanded if the track is expanded
 * @returns a flame chart element and its corresponding data provider.
 */
async function getNetworkFlameChart(traceFileName, expanded) {
    await (0,_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_7__.initializeGlobalVars)();
    const { traceData } = await _TraceLoader_js__WEBPACK_IMPORTED_MODULE_8__.TraceLoader.traceEngine(/* context= */ null, traceFileName);
    const minTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Timing.microSecondsToMilliseconds(traceData.Meta.traceBounds.min);
    const maxTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Timing.microSecondsToMilliseconds(traceData.Meta.traceBounds.max);
    const dataProvider = new _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_5__.TimelineFlameChartNetworkDataProvider.TimelineFlameChartNetworkDataProvider();
    dataProvider.setModel(traceData);
    dataProvider.setWindowTimes(minTime, maxTime);
    dataProvider.timelineData().groups.forEach(group => {
        group.expanded = expanded;
    });
    const delegate = new MockFlameChartDelegate();
    const flameChart = new _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_6__.FlameChart.FlameChart(dataProvider, delegate);
    flameChart.setWindowTimes(minTime, maxTime);
    flameChart.markAsRoot();
    flameChart.update();
    return { flameChart, dataProvider };
}
// We create here a cross-test base trace event. It is assumed that each
// test will import this default event and copy-override properties at will.
const defaultTraceEvent = {
    name: 'process_name',
    tid: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ThreadID(0),
    pid: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ProcessID(0),
    ts: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(0),
    cat: 'test',
    ph: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.Phase.METADATA,
};
/**
 * Gets the tree in a thread.
 * @see RendererHandler.ts
 */
function getTree(thread) {
    const tree = thread.tree;
    if (!tree) {
        assert(false, `Couldn't get tree in thread ${thread.name}`);
    }
    return tree;
}
/**
 * Gets the n-th root from a tree in a thread.
 * @see RendererHandler.ts
 */
function getRootAt(thread, index) {
    const tree = getTree(thread);
    const node = [...tree.roots][index];
    if (node === undefined) {
        assert(false, `Couldn't get the id of the root at index ${index} in thread ${thread.name}`);
    }
    return node;
}
/**
 * Gets all nodes in a thread. To finish this task, we Walk through all the nodes, starting from the root node.
 */
function getAllNodes(roots) {
    const allNodes = [];
    const children = Array.from(roots);
    while (children.length > 0) {
        const childNode = children.shift();
        if (childNode) {
            allNodes.push(childNode);
            children.push(...childNode.children);
        }
    }
    return allNodes;
}
/**
 * Gets the node with an id from a tree in a thread.
 * @see RendererHandler.ts
 */
function getNodeFor(thread, nodeId) {
    const tree = getTree(thread);
    function findNode(nodes, nodeId) {
        for (const node of nodes) {
            const event = node.entry;
            if (_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isProfileCall(event) && event.nodeId === nodeId) {
                return node;
            }
            return findNode(node.children, nodeId);
        }
        return undefined;
    }
    const node = findNode(tree.roots, nodeId);
    if (!node) {
        assert(false, `Couldn't get the node with id ${nodeId} in thread ${thread.name}`);
    }
    return node;
}
/**
 * Gets all the `events` for the `nodes`.
 */
function getEventsIn(nodes) {
    return [...nodes].flatMap(node => node ? node.entry : []);
}
/**
 * Pretty-prints a tree.
 */
function prettyPrint(tree, predicate = () => true, indentation = 2, delimiter = ' ', prefix = '-', newline = '\n', out = '') {
    let skipped = false;
    return printNodes(tree.roots);
    function printNodes(nodes) {
        for (const node of nodes) {
            const event = node.entry;
            if (!predicate(node, event)) {
                out += `${!skipped ? newline : ''}.`;
                skipped = true;
                continue;
            }
            skipped = false;
            const spacing = new Array(node.depth * indentation).fill(delimiter).join('');
            const eventType = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isTraceEventDispatch(event) ? `(${event.args.data?.type})` : false;
            const jsFunctionName = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isProfileCall(event) ?
                `(${event.callFrame.functionName || 'anonymous'})` :
                false;
            const duration = `[${(event.dur || 0) / 1000}ms]`;
            const info = [jsFunctionName, eventType, duration].filter(Boolean);
            out += `${newline}${spacing}${prefix}${event.name} ${info.join(' ')}`;
            out = printNodes(node.children);
        }
        return out;
    }
}
/**
 * Builds a mock TraceEventComplete.
 */
function makeCompleteEvent(name, ts, dur, cat = '*', pid = 0, tid = 0) {
    return {
        args: {},
        cat,
        name,
        ph: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.Phase.COMPLETE,
        pid: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ProcessID(pid),
        tid: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ThreadID(tid),
        ts: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(ts),
        dur: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(dur),
    };
}
function makeAsyncStartEvent(name, ts, pid = 0, tid = 0) {
    return {
        args: {},
        cat: '*',
        name,
        ph: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.Phase.ASYNC_NESTABLE_START,
        pid: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ProcessID(pid),
        tid: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ThreadID(tid),
        ts: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(ts),
    };
}
function makeAsyncEndEvent(name, ts, pid = 0, tid = 0) {
    return {
        args: {},
        cat: '*',
        name,
        ph: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.Phase.ASYNC_NESTABLE_END,
        pid: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ProcessID(pid),
        tid: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ThreadID(tid),
        ts: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(ts),
    };
}
function makeCompleteEventInMilliseconds(name, tsMillis, durMillis, cat = '*', pid = 0, tid = 0) {
    return makeCompleteEvent(name, _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Timing.millisecondsToMicroseconds(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MilliSeconds(tsMillis)), _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Timing.millisecondsToMicroseconds(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MilliSeconds(durMillis)), cat, pid, tid);
}
/**
 * Builds a mock TraceEventInstant.
 */
function makeInstantEvent(name, tsMicroseconds, cat = '', pid = 0, tid = 0, s = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.TraceEventScope.THREAD) {
    return {
        args: {},
        cat,
        name,
        ph: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.Phase.INSTANT,
        pid: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ProcessID(pid),
        tid: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ThreadID(tid),
        ts: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(tsMicroseconds),
        s,
    };
}
/**
 * Builds a mock TraceEventBegin.
 */
function makeBeginEvent(name, ts, cat = '*', pid = 0, tid = 0) {
    return {
        args: {},
        cat,
        name,
        ph: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.Phase.BEGIN,
        pid: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ProcessID(pid),
        tid: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ThreadID(tid),
        ts: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(ts),
    };
}
/**
 * Builds a mock TraceEventEnd.
 */
function makeEndEvent(name, ts, cat = '*', pid = 0, tid = 0) {
    return {
        args: {},
        cat,
        name,
        ph: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.Phase.END,
        pid: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ProcessID(pid),
        tid: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ThreadID(tid),
        ts: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(ts),
    };
}
function makeProfileCall(functionName, tsMs, durMs, pid = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ProcessID(0), tid = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ThreadID(0), nodeId = 0, url = '') {
    return {
        cat: '',
        name: 'ProfileCall',
        nodeId,
        sampleIndex: 0,
        profileId: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ProfileID('fake-profile-id'),
        ph: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.Phase.COMPLETE,
        pid,
        tid,
        ts: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(tsMs),
        dur: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(durMs),
        selfTime: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(0),
        callFrame: {
            functionName,
            scriptId: '',
            url: url,
            lineNumber: -1,
            columnNumber: -1,
        },
        args: {},
    };
}
const DevToolsTimelineCategory = 'disabled-by-default-devtools.timeline';
/**
 * Mocks an object compatible with the return type of the
 * RendererHandler using only an array of ordered entries.
 */
function makeMockRendererHandlerData(entries) {
    const { tree, entryToNode } = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.TreeHelpers.treify(entries, { filter: { has: () => true } });
    const mockThread = {
        tree,
        name: 'thread',
        entries,
        profileCalls: entries.filter(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isProfileCall),
    };
    const mockProcess = {
        url: 'url',
        isOnMainFrame: true,
        threads: new Map([[1, mockThread]]),
    };
    const renderereEvents = [];
    for (const entry of entries) {
        if (_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isTraceEventRendererEvent(entry)) {
            renderereEvents.push(entry);
        }
    }
    return {
        processes: new Map([[1, mockProcess]]),
        compositorTileWorkers: new Map(),
        entryToNode,
        allTraceEntries: renderereEvents,
    };
}
/**
 * Mocks an object compatible with the return type of the
 * SamplesHandler using only an array of ordered profile calls.
 */
function makeMockSamplesHandlerData(profileCalls) {
    const { tree, entryToNode } = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.TreeHelpers.treify(profileCalls, { filter: { has: () => true } });
    const profile = {
        nodes: [],
        startTime: profileCalls.at(0)?.ts || _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(0),
        endTime: profileCalls.at(-1)?.ts || _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(10e5),
        samples: [],
        timeDeltas: [],
    };
    const nodesIds = new Map();
    const lastTimestamp = profile.startTime;
    for (const profileCall of profileCalls) {
        let node = nodesIds.get(profileCall.nodeId);
        if (!node) {
            node = {
                id: profileCall.nodeId,
                callFrame: profileCall.callFrame,
            };
            profile.nodes.push(node);
            nodesIds.set(profileCall.nodeId, node);
        }
        profile.samples?.push(node.id);
        const timeDelta = profileCall.ts - lastTimestamp;
        profile.timeDeltas?.push(timeDelta);
    }
    const profileData = {
        rawProfile: profile,
        parsedProfile: new _models_cpu_profile_cpu_profile_js__WEBPACK_IMPORTED_MODULE_2__.CPUProfileDataModel.CPUProfileDataModel(profile),
        profileCalls,
        profileTree: tree,
        profileId: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ProfileID('fake-profile-id'),
    };
    const profilesInThread = new Map([[1, profileData]]);
    return {
        profilesInProcess: new Map([[1, profilesInThread]]),
        entryToNode,
    };
}
class FakeFlameChartProvider {
    minimumBoundary() {
        return 0;
    }
    hasTrackConfigurationMode() {
        return false;
    }
    totalTime() {
        return 100;
    }
    formatValue(value) {
        return value.toString();
    }
    maxStackDepth() {
        return 3;
    }
    prepareHighlightedEntryInfo(_entryIndex) {
        return null;
    }
    canJumpToEntry(_entryIndex) {
        return false;
    }
    entryTitle(entryIndex) {
        return `Entry ${entryIndex}`;
    }
    entryFont(_entryIndex) {
        return null;
    }
    entryColor(entryIndex) {
        return [
            'lightblue',
            'lightpink',
            'yellow',
            'lightgray',
            'lightgreen',
            'lightsalmon',
            'orange',
            'pink',
        ][entryIndex % 8];
    }
    decorateEntry() {
        return false;
    }
    forceDecoration(_entryIndex) {
        return false;
    }
    textColor(_entryIndex) {
        return 'black';
    }
    timelineData() {
        return _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_6__.FlameChart.FlameChartTimelineData.createEmpty();
    }
}
function getMainThread(data) {
    let mainThread = null;
    for (const [, process] of data.processes) {
        for (const [, thread] of process.threads) {
            if (thread.name === 'CrRendererMain') {
                mainThread = thread;
                break;
            }
        }
    }
    if (!mainThread) {
        throw new Error('Could not find main thread.');
    }
    return mainThread;
}
function getBaseTraceParseModelData(overrides = {}) {
    return {
        Animations: [],
        LayoutShifts: {
            clusters: [],
            sessionMaxScore: 0,
            clsWindowID: 0,
            prePaintEvents: [],
            layoutInvalidationEvents: [],
            styleRecalcInvalidationEvents: [],
            backendNodeIds: [],
            scoreRecords: [],
        },
        Meta: {
            traceBounds: {
                min: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(0),
                max: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(100),
                range: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(100),
            },
            browserProcessId: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ProcessID(-1),
            browserThreadId: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ThreadID(-1),
            gpuProcessId: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ProcessID(-1),
            gpuThreadId: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ThreadID(-1),
            threadsInProcess: new Map(),
            navigationsByFrameId: new Map(),
            navigationsByNavigationId: new Map(),
            mainFrameId: '',
            mainFrameURL: '',
            rendererProcessesByFrame: new Map(),
            topLevelRendererIds: new Set(),
            frameByProcessId: new Map(),
            mainFrameNavigations: [],
        },
        Renderer: {
            processes: new Map(),
            compositorTileWorkers: new Map(),
            entryToNode: new Map(),
            allTraceEntries: [],
        },
        Screenshots: [],
        Samples: {
            profiles: new Map(),
            processes: new Map(),
        },
        PageLoadMetrics: { metricScoresByFrameId: new Map(), lcpEventNodeIdToDOMNodeMap: new Map() },
        UserInteractions: { allEvents: [], interactionEvents: [] },
        NetworkRequests: {
            byOrigin: new Map(),
            byTime: [],
        },
        GPU: {
            mainGPUThreadTasks: [],
            errorsByUseCase: new Map(),
        },
        UserTimings: {
            timings: [],
        },
        LargestImagePaint: new Map(),
        LargestTextPaint: new Map(),
        ...overrides,
    };
}
/**
 * A helper that will query the given array of events and find the first event
 * matching the predicate. It will also assert that a match is found, which
 * saves the need to do that for every test.
 */
function getEventOfType(events, predicate) {
    const match = events.find(predicate);
    if (!match) {
        throw new Error('Failed to find matching event of type.');
    }
    return match;
}
/**
 * The Performance Panel is integrated with the IgnoreListManager so in tests
 * that render a flame chart or a track appender, it needs to be setup to avoid
 * errors.
 */
function setupIgnoreListManagerEnvironment() {
    const targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance({ forceNew: true });
    const workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.instance({ forceNew: true });
    const resourceMapping = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.ResourceMapping.ResourceMapping(targetManager, workspace);
    const debuggerWorkspaceBinding = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
        forceNew: true,
        resourceMapping,
        targetManager,
    });
    const ignoreListManager = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.IgnoreListManager.IgnoreListManager.instance({
        forceNew: true,
        debuggerWorkspaceBinding,
    });
    return { ignoreListManager };
}


/***/ })

}]);