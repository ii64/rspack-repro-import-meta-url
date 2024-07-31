"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_timeline_TimelineUIUtils_test_ts"],{

/***/ "./src/panels/timeline/TimelineUIUtils.test.ts":
/*!*****************************************************!*\
  !*** ./src/panels/timeline/TimelineUIUtils.test.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./src/models/bindings/bindings.ts");
/* harmony import */ var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/trace/trace.js */ "./src/models/trace/trace.ts");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./src/models/workspace/workspace.ts");
/* harmony import */ var _panels_elements_elements_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../panels/elements/elements.js */ "./src/panels/elements/elements.ts");
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../testing/DOMHelpers.js */ "./src/testing/DOMHelpers.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _testing_SourceMapHelpers_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../testing/SourceMapHelpers.js */ "./src/testing/SourceMapHelpers.ts");
/* harmony import */ var _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../testing/TraceHelpers.js */ "./src/testing/TraceHelpers.ts");
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../testing/TraceLoader.js */ "./src/testing/TraceLoader.ts");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./src/ui/legacy/components/utils/utils.ts");
/* harmony import */ var _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ui/legacy/theme_support/theme_support.js */ "./src/ui/legacy/theme_support/theme_support.ts");
/* harmony import */ var _timeline_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./timeline.js */ "./src/panels/timeline/timeline.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.















(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_8__.describeWithMockConnection)('TimelineUIUtils', function () {
    let target;
    // Trace events contain script ids as strings. However, the linkifier
    // utilities assume it is a number because that's how it's defined at
    // the protocol level. For practicality, we declare these two
    // variables so that we can satisfy type checking throughout the tests.
    const SCRIPT_ID_NUMBER = 1;
    const SCRIPT_ID_STRING = String(SCRIPT_ID_NUMBER);
    beforeEach(() => {
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_7__.createTarget)();
        const workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.instance();
        const targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance();
        const resourceMapping = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.ResourceMapping.ResourceMapping(targetManager, workspace);
        const debuggerWorkspaceBinding = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
            forceNew: true,
            resourceMapping,
            targetManager,
        });
        _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.IgnoreListManager.IgnoreListManager.instance({ forceNew: true, debuggerWorkspaceBinding });
    });
    afterEach(() => {
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_8__.clearMockConnectionResponseHandler)('DOM.pushNodesByBackendIdsToFrontend');
    });
    it('creates top frame location text for function calls', async function () {
        const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'one-second-interaction.json.gz');
        const functionCallEvent = traceData.Renderer.allTraceEntries.find(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isTraceEventFunctionCall);
        assert.isOk(functionCallEvent);
        assert.strictEqual('chrome-extension://blijaeebfebmkmekmdnehcmmcjnblkeo/lib/utils.js:11:43', await _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.buildDetailsTextForTraceEvent(functionCallEvent, traceData));
    });
    it('creates top frame location text as a fallback', async function () {
        const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'web-dev.json.gz');
        const timerInstallEvent = traceData.Renderer.allTraceEntries.find(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isTraceEventTimerInstall);
        assert.isOk(timerInstallEvent);
        assert.strictEqual('https://web.dev/js/index-7b6f3de4.js:96:533', await _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.buildDetailsTextForTraceEvent(timerInstallEvent, traceData));
    });
    describe('script location as an URL', function () {
        it('makes the script location of a call frame a full URL when the inspected target is not the same the call frame was taken from (e.g. a loaded file)', async function () {
            // The actual trace doesn't matter here, just need one so we can pass
            // it into buildDetailsNodeForTraceEvent
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'web-dev-with-commit.json.gz');
            const fakeFunctionCall = {
                name: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.KnownEventName.FunctionCall,
                ph: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.Phase.COMPLETE,
                cat: 'devtools-timeline',
                dur: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(100),
                ts: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(100),
                pid: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ProcessID(1),
                tid: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ThreadID(1),
                args: {
                    data: {
                        functionName: 'test',
                        url: 'https://google.com/test.js',
                        scriptId: Number(SCRIPT_ID_STRING),
                        lineNumber: 1,
                        columnNumber: 1,
                    },
                },
            };
            target.setInspectedURL('https://not-google.com');
            const node = await _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.buildDetailsNodeForTraceEvent(fakeFunctionCall, target, new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_12__.Linkifier.Linkifier(), false, traceData);
            if (!node) {
                throw new Error('Node was unexpectedly null');
            }
            assert.strictEqual(node.textContent, 'test @ google.com/test.js:1:1');
        });
        it('makes the script location of a call frame a script name when the inspected target is the one the call frame was taken from', async function () {
            // The actual trace doesn't matter here, just need one so we can pass
            // it into buildDetailsNodeForTraceEvent
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'web-dev-with-commit.json.gz');
            const fakeFunctionCall = {
                name: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.KnownEventName.FunctionCall,
                ph: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.Phase.COMPLETE,
                cat: 'devtools-timeline',
                dur: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(100),
                ts: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(100),
                pid: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ProcessID(1),
                tid: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ThreadID(1),
                args: {
                    data: {
                        functionName: 'test',
                        url: 'https://google.com/test.js',
                        scriptId: Number(SCRIPT_ID_STRING),
                        lineNumber: 1,
                        columnNumber: 1,
                    },
                },
            };
            target.setInspectedURL('https://google.com');
            const node = await _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.buildDetailsNodeForTraceEvent(fakeFunctionCall, target, new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_12__.Linkifier.Linkifier(), false, traceData);
            if (!node) {
                throw new Error('Node was unexpectedly null');
            }
            assert.strictEqual(node.textContent, 'test @ /test.js:1:1');
        });
    });
    describe('mapping to authored script when recording is fresh', function () {
        beforeEach(async () => {
            // Register mock script and source map.
            const sourceMapContent = JSON.stringify({
                'version': 3,
                'names': ['unminified', 'par1', 'par2', 'console', 'log'],
                'sources': [
                    '/original-script.ts',
                ],
                'file': '/test.js',
                'sourcesContent': ['function unminified(par1, par2) {\n  console.log(par1, par2);\n}\n'],
                'mappings': 'AAAA,SAASA,EAAWC,EAAMC,GACxBC,QAAQC,IAAIH,EAAMC',
            });
            (0,_testing_SourceMapHelpers_js__WEBPACK_IMPORTED_MODULE_9__.setupPageResourceLoaderForSourceMap)(sourceMapContent);
            target.setInspectedURL('https://google.com');
            const scriptUrl = 'https://google.com/script.js';
            const sourceMapUrl = 'script.js.map';
            const debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerModel);
            assert.isNotNull(debuggerModel);
            if (debuggerModel === null) {
                return;
            }
            const sourceMapManager = debuggerModel.sourceMapManager();
            const script = debuggerModel.parsedScriptSource(SCRIPT_ID_STRING, scriptUrl, 0, 0, 0, 0, 0, '', undefined, false, sourceMapUrl, true, false, length, false, null, null, null, null, null);
            await sourceMapManager.sourceMapForClientPromise(script);
        });
        it('maps to the authored script when a call frame is provided', async function () {
            const linkifier = new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_12__.Linkifier.Linkifier();
            const node = _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.linkifyLocation({
                scriptId: SCRIPT_ID_STRING,
                url: 'https://google.com/test.js',
                lineNumber: 0,
                columnNumber: 0,
                isFreshRecording: true,
                target,
                linkifier,
            });
            if (!node) {
                throw new Error('Node was unexpectedly null');
            }
            // Wait for the location to be resolved using the registered source map.
            await _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().pendingLiveLocationChangesPromise();
            assert.strictEqual(node.textContent, 'original-script.ts:1:1');
        });
        it('maps to the authored script when a trace event from the new engine with a stack trace is provided', async function () {
            const functionCallEvent = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_10__.makeCompleteEvent)('FunctionCall', 10, 100);
            functionCallEvent.args = ({
                data: {
                    stackTrace: [{
                            functionName: 'test',
                            url: 'https://google.com/test.js',
                            scriptId: SCRIPT_ID_NUMBER,
                            lineNumber: 0,
                            columnNumber: 0,
                        }],
                },
            });
            const linkifier = new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_12__.Linkifier.Linkifier();
            const node = _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.linkifyTopCallFrame(functionCallEvent, target, linkifier, true);
            if (!node) {
                throw new Error('Node was unexpectedly null');
            }
            // Wait for the location to be resolved using the registered source map.
            await _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance()
                .pendingLiveLocationChangesPromise();
            assert.strictEqual(node.textContent, 'original-script.ts:1:1');
        });
    });
    describe('mapping to authored function name when recording is fresh', function () {
        it('maps to the authored name and script of a profile call', async function () {
            const { script } = await (0,_testing_SourceMapHelpers_js__WEBPACK_IMPORTED_MODULE_9__.loadBasicSourceMapExample)(target);
            // Ideally we would get a column number we can use from the source
            // map however the current status of the source map helpers makes
            // it difficult to do so.
            const columnNumber = 51;
            const profileCall = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_10__.makeProfileCall)('function', 10, 100, _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ProcessID(1), _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ThreadID(1));
            profileCall.callFrame = {
                'columnNumber': columnNumber,
                'functionName': 'minified',
                'lineNumber': 0,
                'scriptId': script.scriptId,
                'url': 'file://gen.js',
            };
            const workersData = {
                workerSessionIdEvents: [],
                workerIdByThread: new Map(),
                workerURLById: new Map(),
            };
            // This only includes data used in the SourceMapsResolver
            const traceData = {
                Samples: (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_10__.makeMockSamplesHandlerData)([profileCall]),
                Workers: workersData,
            };
            const resolver = new _timeline_js__WEBPACK_IMPORTED_MODULE_14__.SourceMapsResolver.SourceMapsResolver(traceData);
            await resolver.install();
            const linkifier = new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_12__.Linkifier.Linkifier();
            const node = await _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.buildDetailsNodeForTraceEvent(profileCall, target, linkifier, true, traceData);
            if (!node) {
                throw new Error('Node was unexpectedly null');
            }
            assert.isTrue(node.textContent?.startsWith('someFunction @'));
        });
    });
    describe('adjusting timestamps for events and navigations', function () {
        it('adjusts the time for a DCL event after a navigation', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'web-dev.json.gz');
            const mainFrameID = traceData.Meta.mainFrameId;
            const dclEvent = traceData.PageLoadMetrics.allMarkerEvents.find(event => {
                return _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isTraceEventMarkDOMContent(event) &&
                    event.args.data?.frame === mainFrameID;
            });
            if (!dclEvent) {
                throw new Error('Could not find DCL event');
            }
            const traceMinBound = traceData.Meta.traceBounds.min;
            // Round the time to 2DP to avoid needlessly long expectation numbers!
            const unadjustedStartTimeMilliseconds = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Helpers.Timing.microSecondsToMilliseconds(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(dclEvent.ts - traceMinBound))
                .toFixed(2);
            assert.strictEqual(unadjustedStartTimeMilliseconds, String(190.79));
            const adjustedTime = _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.timeStampForEventAdjustedForClosestNavigationIfPossible(dclEvent, traceData);
            assert.strictEqual(adjustedTime.toFixed(2), String(178.92));
        });
        it('can adjust the times for events that are not PageLoad markers', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'user-timings.json.gz');
            // Use a performance.mark event. Exact event is unimportant except that
            // it should not be a Page Load event as those are covered by the tests
            // above.
            const userMark = traceData.UserTimings.performanceMarks.find(event => event.name === 'mark1');
            if (!userMark) {
                throw new Error('Could not find user mark');
            }
            const adjustedMarkTime = _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.timeStampForEventAdjustedForClosestNavigationIfPossible(userMark, traceData);
            assert.strictEqual(adjustedMarkTime.toFixed(2), String(79.88));
        });
    });
    function getInnerTextAcrossShadowRoots(root) {
        // Don't recurse into STYLE elements
        if (!root || root.nodeName === 'STYLE') {
            return '';
        }
        if (root.nodeType === Node.TEXT_NODE) {
            return root.nodeValue || '';
        }
        if (root instanceof HTMLElement && root.shadowRoot) {
            return getInnerTextAcrossShadowRoots(root.shadowRoot);
        }
        return Array.from(root.childNodes).map(getInnerTextAcrossShadowRoots).join('');
    }
    function getRowDataForDetailsElement(details) {
        return Array.from(details.querySelectorAll('.timeline-details-view-row')).map(row => {
            const title = row.querySelector('.timeline-details-view-row-title')?.innerText;
            const valueEl = row.querySelector('.timeline-details-view-row-value') ??
                row.querySelector('div,span');
            let value = valueEl?.innerText || '';
            if (!value && valueEl) {
                // Stack traces and renderEventJson have the contents within a shadowRoot.
                value = getInnerTextAcrossShadowRoots(valueEl).trim();
            }
            return { title, value };
        });
    }
    function getStackTraceForDetailsElement(details) {
        const stackTraceContainer = details
            .querySelector('.timeline-details-view-row.timeline-details-stack-values .stack-preview-container')
            ?.shadowRoot;
        if (!stackTraceContainer) {
            return null;
        }
        return Array.from(stackTraceContainer.querySelectorAll('tr')).map(row => {
            const functionName = row.querySelector('.function-name')?.innerText;
            const url = row.querySelector('.link')?.innerText;
            return `${functionName || ''} @ ${url || ''}`;
        });
    }
    function getPieChartDataForDetailsElement(details) {
        const pieChartComp = details.querySelector('devtools-perf-piechart');
        if (!pieChartComp?.shadowRoot) {
            return [];
        }
        return Array.from(pieChartComp.shadowRoot.querySelectorAll('.pie-chart-legend-row')).map(row => {
            const title = row.querySelector('.pie-chart-name')?.innerText;
            const value = row.querySelector('.pie-chart-size')?.innerText;
            return { title, value };
        });
    }
    describe('colors', function () {
        before(() => {
            // Rather than use the real colours here and burden the test with having to
            // inject loads of CSS, we fake out the colours. this is fine for our tests as
            // the exact value of the colours is not important; we just make sure that it
            // parses them out correctly. Each variable is given a different rgb() value to
            // ensure we know the code is working and using the right one.
            const styleElement = document.createElement('style');
            styleElement.id = 'fake-perf-panel-colors';
            styleElement.textContent = `
:root {
  --app-color-loading: rgb(0 0 0);
  --app-color-loading-children: rgb(1 1 1);
  --app-color-scripting: rgb(2 2 2);
  --app-color-scripting-children: rgb(3 3 3);
  --app-color-rendering: rgb(4 4 4);
  --app-color-rendering-children: rgb(5 5 5);
  --app-color-painting: rgb(6 6 6);
  --app-color-painting-children: rgb(7 7 7);
  --app-color-task: rgb(8 8 8);
  --app-color-task-children: rgb(9 9 9);
  --app-color-system: rgb(10 10 10);
  --app-color-system-children: rgb(11 11 11);
  --app-color-idle: rgb(12 12 12);
  --app-color-idle-children: rgb(13 13 13);
  --app-color-async: rgb(14 14 14);
  --app-color-async-children: rgb(15 15 15);
  --app-color-other: rgb(16 16 16);
}
`;
            document.documentElement.appendChild(styleElement);
            _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_13__.ThemeSupport.clearThemeCache();
        });
        after(() => {
            const styleElementToRemove = document.documentElement.querySelector('#fake-perf-panel-colors');
            if (styleElementToRemove) {
                document.documentElement.removeChild(styleElementToRemove);
            }
            _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_13__.ThemeSupport.clearThemeCache();
        });
        it('should return the correct rgb value for a corresponding CSS variable', function () {
            const parsedColor = _timeline_js__WEBPACK_IMPORTED_MODULE_14__.EventUICategory.getCategoryStyles().scripting.getComputedColorValue();
            assert.strictEqual('rgb(2 2 2)', parsedColor);
        });
        it('should return the color as a CSS variable', function () {
            const cssVariable = _timeline_js__WEBPACK_IMPORTED_MODULE_14__.EventUICategory.getCategoryStyles().scripting.getCSSValue();
            assert.strictEqual('var(--app-color-scripting)', cssVariable);
        });
        it('treats the v8.parseOnBackgroundWaiting as scripting even though it would usually be idle', function () {
            const event = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_10__.makeCompleteEvent)(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.KnownEventName.StreamingCompileScriptWaiting, 1, 1, 'v8,devtools.timeline,disabled-by-default-v8.compile');
            assert.strictEqual('rgb(2 2 2)', _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.eventColor(event));
        });
        it('assigns the correct color to the swatch of an event\'s title', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'lcp-web-font.json.gz');
            const events = traceData.Renderer.allTraceEntries;
            const task = events.find(event => {
                return event.name.includes('RunTask');
            });
            if (!task) {
                throw new Error('Could not find expected event.');
            }
            const details = await _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.buildTraceEventDetails(traceData, task, new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_12__.Linkifier.Linkifier(), false);
            const titleSwatch = details.querySelector('.timeline-details-chip-title div');
            assert.strictEqual(titleSwatch?.style.backgroundColor, 'rgb(10, 10, 10)');
        });
    });
    describe('testContentMatching', () => {
        it('matches call frame events based on a regular expression and the contents of the event', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'react-hello-world.json.gz');
            // Find an event from the trace that represents some work that React did. This
            // event is not chosen for any particular reason other than it was the example
            // used in the bug report: crbug.com/1484504
            const mainThread = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_10__.getMainThread)(traceData.Renderer);
            const performConcurrentWorkEvent = mainThread.entries.find(entry => {
                if (_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isProfileCall(entry)) {
                    return entry.callFrame.functionName === 'performConcurrentWorkOnRoot';
                }
                return false;
            });
            if (!performConcurrentWorkEvent) {
                throw new Error('Could not find expected event');
            }
            assert.isTrue(_timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.testContentMatching(performConcurrentWorkEvent, /perfo/, traceData));
        });
    });
    describe('traceEventDetails', function () {
        it('shows the interaction ID and INP breakdown metrics for a given interaction', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'one-second-interaction.json.gz');
            const interactionEvent = traceData.UserInteractions.interactionEventsWithNoNesting.find(entry => {
                return entry.dur === 979974 && entry.type === 'click';
            });
            if (!interactionEvent) {
                throw new Error('Could not find expected event');
            }
            const details = await _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.buildTraceEventDetails(traceData, interactionEvent, new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_12__.Linkifier.Linkifier(), false);
            const rowData = getRowDataForDetailsElement(details);
            assert.deepEqual(rowData, [
                {
                    title: 'Warning',
                    value: 'Long interaction is indicating poor page responsiveness.',
                },
                {
                    title: 'ID',
                    value: '4122',
                },
                {
                    title: 'Input delay',
                    value: '1.00\xA0ms',
                },
                {
                    title: 'Processing duration',
                    value: '977.00\xA0ms',
                },
                {
                    title: 'Presentation delay',
                    value: '1.97\xA0ms',
                },
            ]);
        });
        it('renders all event data for a generic trace', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'generic-about-tracing.json.gz');
            const event = traceData.Renderer.allTraceEntries.find(entry => {
                return entry.name === 'ThreadControllerImpl::RunTask';
            });
            if (!event) {
                throw new Error('Could not find event.');
            }
            const details = await _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.buildTraceEventDetails(traceData, event, new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_12__.Linkifier.Linkifier(), false);
            const rowData = getRowDataForDetailsElement(details);
            assert.deepEqual(rowData, [
                {
                    title: '',
                    // Generic traces get their events rendered as JSON
                    value: '{   "args": {\n        "chrome_task_annotator": {\n            "delay_policy": "PRECISE",\n            "task_delay_us": 7159\n        },\n        "src_file": "cc/scheduler/scheduler.cc",\n        "src_func": "ScheduleBeginImplFrameDeadline"\n    },\n    "cat": "toplevel",\n    "dur": 222,\n    "name": "ThreadControllerImpl::RunTask",\n    "ph": "X",\n    "pid": 1214129,\n    "tdur": 163,\n    "tid": 7,\n    "ts": 1670373249790,\n    "tts": 5752392,\n    "selfTime": 202\n}',
                },
            ]);
        });
        it('renders invalidations correctly', async function () {
            // const {traceData} = await TraceLoader.allModels(this, 'style-invalidation-change-attribute.json.gz');
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'style-invalidation-change-attribute.json.gz');
            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.initTraceBoundsManager(traceData);
            // Set up a fake DOM so that we can request nodes by backend Ids (even
            // though we return none, we need to mock these calls else the frontend
            // will not work.)
            const documentNode = { nodeId: 1 };
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_8__.setMockConnectionResponseHandler)('DOM.getDocument', () => ({ root: documentNode }));
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_8__.setMockConnectionResponseHandler)('DOM.pushNodesByBackendIdsToFrontend', () => {
                return {
                    nodeIds: [],
                };
            });
            const updateLayoutTreeEvent = traceData.Renderer.allTraceEntries.find(event => {
                return _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isTraceEventUpdateLayoutTree(event) &&
                    event.args.beginData?.stackTrace?.[0].functionName === 'testFuncs.changeAttributeAndDisplay';
            });
            if (!updateLayoutTreeEvent) {
                throw new Error('Could not find update layout tree event');
            }
            const details = await _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.buildTraceEventDetails(traceData, updateLayoutTreeEvent, new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_12__.Linkifier.Linkifier(), false);
            const rowData = getRowDataForDetailsElement(details);
            assert.deepEqual(rowData, [
                {
                    title: 'Elements Affected',
                    value: '3',
                },
                {
                    title: 'Selector Stats',
                    value: 'Select "" to collect detailed CSS selector matching statistics.',
                },
                {
                    // The "Recalculation forced" Stack trace
                    title: undefined,
                    value: 'testFuncs.changeAttributeAndDisplay @ chromedevtools.github.io/performance-stories/style-invalidations/app.js:47:40',
                },
                {
                    title: 'Initiated by',
                    value: 'Schedule Style Recalculation',
                },
                {
                    title: 'Pending for',
                    value: '7.1 ms',
                },
                {
                    title: 'PseudoClass:active',
                    value: 'BUTTON id=\'changeAttributeAndDisplay\'',
                },
                {
                    title: 'Attribute (dir)',
                    value: 'DIV id=\'testElementFour\' at chromedevtools.github.io/performance-stories/style-invalidations/app.js:46',
                },
                {
                    title: 'Attribute (dir)',
                    value: 'DIV id=\'testElementFive\' at chromedevtools.github.io/performance-stories/style-invalidations/app.js:47',
                },
                {
                    title: 'Element has pending invalidation list',
                    value: 'DIV id=\'testElementFour\'',
                },
                {
                    title: 'Element has pending invalidation list',
                    value: 'DIV id=\'testElementFive\'',
                },
            ]);
        });
        it('renders details for performance.mark', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'user-timings-details.json.gz');
            const mark = traceData.UserTimings.performanceMarks[0];
            if (!mark) {
                throw new Error('Could not find expected event');
            }
            const details = await _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.buildTraceEventDetails(traceData, mark, new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_12__.Linkifier.Linkifier(), false);
            const rowData = getRowDataForDetailsElement(details);
            assert.deepEqual(rowData, [
                {
                    title: 'Timestamp',
                    value: '1058.3\xA0ms',
                },
                { title: 'Details', value: '{   \"hello\": \"world\"\n}' },
            ]);
        });
        it('renders details for performance.measure', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'user-timings-details.json.gz');
            const measure = traceData.UserTimings.performanceMeasures[0];
            if (!measure) {
                throw new Error('Could not find expected event');
            }
            const details = await _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.buildTraceEventDetails(traceData, measure, new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_12__.Linkifier.Linkifier(), false);
            const rowData = getRowDataForDetailsElement(details);
            assert.deepEqual(rowData, [
                {
                    title: 'Timestamp',
                    value: '1005.5\xA0ms',
                },
                {
                    title: 'Details',
                    value: '{   \"devtools\": {\n        \"metadata\": {\n            \"extensionName\": \"hello\",\n            \"dataType\": \"track-entry\"\n        },\n        \"color\": \"error\",\n        \"track\": \"An extension track\"\n    }\n}',
                },
            ]);
        });
        it('renders details for a v8.compile ("Compile Script") event', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'user-timings.json.gz');
            const compileEvent = traceData.Renderer.allTraceEntries.find(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isTraceEventV8Compile);
            if (!compileEvent) {
                throw new Error('Could not find expected event');
            }
            const details = await _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.buildTraceEventDetails(traceData, compileEvent, new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_12__.Linkifier.Linkifier(), false);
            const rowData = getRowDataForDetailsElement(details);
            assert.deepEqual(rowData, [
                {
                    title: 'Script',
                    // URL plus line/col number
                    value: 'chrome-extension://blijaeebfebmkmekmdnehcmmcjnblkeo/lib/utils.js:1:1',
                },
                {
                    title: 'Streamed',
                    value: 'false: inline script',
                },
                { title: 'Compilation cache status', value: 'script not eligible' },
            ]);
        });
        it('renders the details for a layout shift properly', async function () {
            // Set related CDP methods responses to return our mock document and node.
            const domModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMModel);
            assert.exists(domModel);
            const documentNode = { nodeId: 1 };
            const docc = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMNode(domModel);
            const domNode2 = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMNode(domModel);
            const domID = 58;
            domNode2.id = domID;
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_8__.setMockConnectionResponseHandler)('DOM.pushNodesByBackendIdsToFrontend', () => ({ nodeIds: [domID] }));
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_8__.setMockConnectionResponseHandler)('DOM.getDocument', () => ({ root: documentNode }));
            await domModel.requestDocument();
            domModel.registerNode(domNode2);
            domNode2.init(docc, false, { nodeName: 'A test node name', nodeId: domID });
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'cls-single-frame.json.gz');
            const layoutShift = traceData.LayoutShifts.clusters[0].events[0];
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Linkifier.registerLinkifier({
                contextTypes() {
                    return [_timeline_js__WEBPACK_IMPORTED_MODULE_14__.CLSLinkifier.CLSRect];
                },
                async loadLinkifier() {
                    return _timeline_js__WEBPACK_IMPORTED_MODULE_14__.CLSLinkifier.Linkifier.instance();
                },
            });
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Linkifier.registerLinkifier({
                contextTypes() {
                    return [
                        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMNode,
                    ];
                },
                async loadLinkifier() {
                    return _panels_elements_elements_js__WEBPACK_IMPORTED_MODULE_5__.DOMLinkifier.Linkifier.instance();
                },
            });
            if (!layoutShift) {
                throw new Error('Could not find LayoutShift event.');
            }
            const details = await _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.buildTraceEventDetails(traceData, layoutShift, new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_12__.Linkifier.Linkifier(), false);
            const rowData = getRowDataForDetailsElement(details);
            assert.deepEqual(rowData, [
                {
                    title: 'Warning',
                    value: 'Cumulative Layout Shifts can result in poor user experiences. It has recently evolved.',
                },
                { title: 'Score', value: '0.04218' },
                { title: 'Cumulative Score', value: '0.04218' },
                { title: 'Current Cluster ID', value: '1' },
                { title: 'Current Cluster Score', value: '0.2952' },
                { title: 'Had recent input', value: 'No' },
                { title: 'Moved from', value: 'Location: [120,670], Size: [900x900]' },
                { title: 'Moved to', value: 'Location: [120,1270], Size: [900x478]' },
                { title: 'Related Node', value: 'A test node name' },
            ]);
        });
        it('renders the details for an extension entry properly', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'extension-tracks-and-marks.json.gz');
            const extensionEntry = traceData.ExtensionTraceData.extensionTrackData[1].entriesByTrack['An Extension Track'][0];
            if (!extensionEntry) {
                throw new Error('Could not find extension entry.');
            }
            const details = await _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.buildTraceEventDetails(traceData, extensionEntry, new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_12__.Linkifier.Linkifier(), false);
            const rowData = getRowDataForDetailsElement(details);
            assert.deepEqual(rowData, [
                {
                    title: 'Description',
                    value: 'This is a child task',
                },
                { title: 'Tip', value: 'Do something about it' },
            ]);
        });
        it('renders the details for an extension marker properly', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'extension-tracks-and-marks.json.gz');
            const extensionMark = traceData.ExtensionTraceData.extensionMarkers[0];
            if (!extensionMark) {
                throw new Error('Could not find extension mark.');
            }
            const details = await _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.buildTraceEventDetails(traceData, extensionMark, new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_12__.Linkifier.Linkifier(), false);
            const rowData = getRowDataForDetailsElement(details);
            assert.deepEqual(rowData, [
                {
                    title: 'Description',
                    value: 'This marks the start of a task',
                },
            ]);
        });
        it('renders the details for a profile call properly', async function () {
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Linkifier.registerLinkifier({
                contextTypes() {
                    return [_timeline_js__WEBPACK_IMPORTED_MODULE_14__.CLSLinkifier.CLSRect];
                },
                async loadLinkifier() {
                    return _timeline_js__WEBPACK_IMPORTED_MODULE_14__.CLSLinkifier.Linkifier.instance();
                },
            });
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'simple-js-program.json.gz');
            const [process] = traceData.Renderer.processes.values();
            const [thread] = process.threads.values();
            const profileCalls = thread.entries.filter(entry => _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isProfileCall(entry));
            if (!profileCalls) {
                throw new Error('Could not find renderer events');
            }
            const details = await _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.buildTraceEventDetails(traceData, profileCalls[0], new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_12__.Linkifier.Linkifier(), false);
            const rowData = getRowDataForDetailsElement(details);
            assert.deepEqual(rowData, [
                {
                    title: 'Function',
                    value: '(anonymous) @ www.google.com:21:17',
                },
            ]);
        });
        it('renders the stack trace of a ScheduleStyleRecalculation properly', async function () {
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Linkifier.registerLinkifier({
                contextTypes() {
                    return [_timeline_js__WEBPACK_IMPORTED_MODULE_14__.CLSLinkifier.CLSRect];
                },
                async loadLinkifier() {
                    return _timeline_js__WEBPACK_IMPORTED_MODULE_14__.CLSLinkifier.Linkifier.instance();
                },
            });
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'web-dev.json.gz');
            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.initTraceBoundsManager(traceData);
            const [process] = traceData.Renderer.processes.values();
            const [thread] = process.threads.values();
            const scheduleStyleRecalcs = thread.entries.filter(entry => _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isTraceEventScheduleStyleRecalculation(entry));
            const details = await _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.buildTraceEventDetails(traceData, scheduleStyleRecalcs[1], new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_12__.Linkifier.Linkifier(), false);
            const rowData = getRowDataForDetailsElement(details)[0];
            assert.deepEqual(rowData, {
                title: 'Details',
                value: 'web.dev/js/app.js?v=1423cda3:1:183',
            });
            const stackTraceData = getStackTraceForDetailsElement(details);
            assert.deepEqual(stackTraceData, ['(anonymous) @ web.dev/js/app.js?v=1423cda3:1:183']);
        });
        it('renders the stack trace of a RecalculateStyles properly', async function () {
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Linkifier.registerLinkifier({
                contextTypes() {
                    return [_timeline_js__WEBPACK_IMPORTED_MODULE_14__.CLSLinkifier.CLSRect];
                },
                async loadLinkifier() {
                    return _timeline_js__WEBPACK_IMPORTED_MODULE_14__.CLSLinkifier.Linkifier.instance();
                },
            });
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'web-dev.json.gz');
            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.initTraceBoundsManager(traceData);
            const [process] = traceData.Renderer.processes.values();
            const [thread] = process.threads.values();
            const stylesRecalc = thread.entries.filter(entry => entry.name === _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.KnownEventName.UpdateLayoutTree);
            const details = await _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.buildTraceEventDetails(traceData, stylesRecalc[3], new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_12__.Linkifier.Linkifier(), false);
            const stackTraceData = getStackTraceForDetailsElement(details);
            assert.deepEqual(stackTraceData, ['(anonymous) @ web.dev/js/app.js?v=1423cda3:1:183']);
        });
        it('renders the warning for a trace event in its details', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'simple-js-program.json.gz');
            const events = traceData.Renderer.allTraceEntries;
            const longTask = events.find(e => (e.dur || 0) > 1000000);
            if (!longTask) {
                throw new Error('Could not find Long Task event.');
            }
            const details = await _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.buildTraceEventDetails(traceData, longTask, new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_12__.Linkifier.Linkifier(), false);
            const rowData = getRowDataForDetailsElement(details);
            assert.deepEqual(rowData, [
                {
                    title: 'Warning',
                    value: 'Long task took 1.30\u00A0s.',
                },
            ]);
        });
        it('shows information for the WebSocketCreate initiator when viewing a WebSocketSendHandshakeRequest event', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'web-sockets.json.gz');
            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.initTraceBoundsManager(traceData);
            const sendHandshake = traceData.Renderer.allTraceEntries.find(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isTraceEventWebSocketSendHandshakeRequest);
            if (!sendHandshake) {
                throw new Error('Could not find handshake event.');
            }
            const details = await _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.buildTraceEventDetails(traceData, sendHandshake, new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_12__.Linkifier.Linkifier(), false);
            const rowData = getRowDataForDetailsElement(details);
            const expectedRowData = [
                { title: 'URL', value: 'wss://socketsbay.com/wss/v2/1/demo/' },
                // The 'First Invalidated' Stack trace
                { title: undefined, value: 'connect @ socketsbay.com/test-websockets:314:25' },
                { title: 'Initiated by', 'value': 'Create WebSocket' },
                { title: 'Pending for', value: '72.0 ms' },
            ];
            assert.deepEqual(rowData, expectedRowData);
        });
        it('shows information for the events initiated by WebSocketCreate when viewing a WebSocketCreate event', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'web-sockets.json.gz');
            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.initTraceBoundsManager(traceData);
            const sendHandshake = traceData.Renderer.allTraceEntries.find(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isTraceEventWebSocketCreate);
            if (!sendHandshake) {
                throw new Error('Could not find handshake event.');
            }
            const details = await _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.buildTraceEventDetails(traceData, sendHandshake, new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_12__.Linkifier.Linkifier(), false);
            const rowData = getRowDataForDetailsElement(details);
            const expectedRowData = [
                { title: 'URL', value: 'wss://socketsbay.com/wss/v2/1/demo/' },
                // The initiator stack trace
                { title: undefined, value: 'connect @ socketsbay.com/test-websockets:314:25' },
                // The 2 entries under "Initiator for" are displayed as seperate links and in the UI it is obvious they are seperate
                { title: 'Initiator for', 'value': 'Send WebSocket Handshake Receive WebSocket Handshake' },
            ];
            assert.deepEqual(rowData, expectedRowData);
        });
        it('shows the aggregated time information for an event', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'web-dev.json.gz');
            const event = traceData.Renderer.allTraceEntries.find(e => e.ts === 1020034919877 && e.name === 'RunTask');
            if (!event) {
                throw new Error('Could not find renderer events');
            }
            const details = await _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.buildTraceEventDetails(traceData, event, new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_12__.Linkifier.Linkifier(), true);
            const pieChartData = getPieChartDataForDetailsElement(details);
            const expectedPieChartData = [
                { title: 'System (self)', value: '2\u00A0ms' },
                { title: 'System (children)', value: '2\u00A0ms' },
                { title: 'Rendering', value: '28\u00A0ms' },
                { title: 'Painting', value: '2\u00A0ms' },
                { title: 'Total', value: '34\u00A0ms' },
            ];
            assert.deepEqual(pieChartData, expectedPieChartData);
        });
    });
    it('can generate details for a frame', async function () {
        const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'web-dev-with-commit.json.gz');
        const frame = traceData.Frames.frames.at(0);
        if (!frame) {
            throw new Error('Could not find expected frame');
        }
        const filmStrip = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Extras.FilmStrip.fromTraceData(traceData);
        const details = _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.generateDetailsContentForFrame(frame, filmStrip, filmStrip.frames[0]);
        const container = document.createElement('div');
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_6__.renderElementIntoDOM)(container);
        container.appendChild(details);
        // Give the image element time to render and load.
        await (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_6__.doubleRaf)();
        const img = container.querySelector('.timeline-filmstrip-preview img');
        assert.isTrue(img?.currentSrc.includes(filmStrip.frames[0].screenshotEvent.args.dataUri));
        const durationRow = container.querySelector('[data-row-title="Duration"]');
        const durationValue = durationRow?.querySelector('.timeline-details-view-row-value span');
        if (!durationValue) {
            throw new Error('Could not find duration');
        }
        // Strip the unicode spaces out and replace with simple spaces for easy
        // assertions.
        const value = (durationValue.innerText.replaceAll(/\s/g, ' '));
        assert.strictEqual(value, '37.85 ms (at 109.82 ms)');
    });
    describe('eventTitle', function () {
        it('renders the correct title for an EventTiming interaction event', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'slow-interaction-button-click.json.gz');
            const interactionEvent = traceData.UserInteractions.interactionEventsWithNoNesting[0];
            const details = _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.eventTitle(interactionEvent);
            assert.deepEqual(details, 'Pointer');
        });
        it('will use the resolved function name for a profile node that has a sourcemap', async function () {
            // Timeline.SourceMapsResolver.SourceMapsResolver.
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'slow-interaction-button-click.json.gz');
            const mainThread = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_10__.getMainThread)(traceData.Renderer);
            const profileEntry = mainThread.entries.find(entry => {
                return _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isProfileCall(entry);
            });
            if (!profileEntry || !_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isProfileCall(profileEntry)) {
                throw new Error('Could not find a profile entry');
            }
            // Fake that we resolved the entry's name from a sourcemap.
            _timeline_js__WEBPACK_IMPORTED_MODULE_14__.SourceMapsResolver.SourceMapsResolver.storeResolvedNodeNameForEntry(profileEntry.pid, profileEntry.tid, profileEntry.nodeId, 'resolved-function-test');
            const title = _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.eventTitle(profileEntry);
            assert.strictEqual(title, 'resolved-function-test');
        });
    });
    describe('eventStyle', function () {
        it('returns the correct style for profile calls', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'simple-js-program.json.gz');
            const rendererHandler = traceData.Renderer;
            if (!rendererHandler) {
                throw new Error('RendererHandler is undefined');
            }
            const [process] = rendererHandler.processes.values();
            const [thread] = process.threads.values();
            const profileCalls = thread.entries.filter(entry => _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isProfileCall(entry));
            const style = _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.eventStyle(profileCalls[0]);
            assert.strictEqual(style.category.name, 'scripting');
            assert.strictEqual(style.category.color, 'rgb(250 204 21 / 100%)');
        });
    });
    describe('statsForTimeRange', () => {
        it('correctly aggregates up stats', async () => {
            const mainThread = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ThreadID(1);
            const pid = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ProcessID(100);
            function microsec(x) {
                return _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(x);
            }
            const events = [
                {
                    cat: 'disabled-by-default-devtools.timeline',
                    name: 'TracingStartedInBrowser',
                    ph: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.Phase.INSTANT,
                    pid: pid,
                    tid: mainThread,
                    ts: microsec(100),
                    args: {
                        data: {
                            frames: [
                                { frame: 'frame1', url: 'frameurl', name: 'frame-name' },
                            ],
                        },
                    },
                },
                {
                    cat: 'disabled-by-default-devtools.timeline',
                    name: 'SetLayerTreeId',
                    ph: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.Phase.INSTANT,
                    pid: pid,
                    tid: mainThread,
                    ts: microsec(101),
                    args: { data: { frame: 'frame1', layerTreeId: 17 } },
                },
                {
                    cat: 'toplevel',
                    name: 'Program',
                    ph: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.Phase.COMPLETE,
                    ts: microsec(100000),
                    dur: microsec(3000),
                    tid: mainThread,
                    pid: pid,
                    args: {},
                },
                {
                    cat: 'disabled-by-default-devtools.timeline',
                    name: 'FunctionCall',
                    ph: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.Phase.COMPLETE,
                    ts: microsec(100500),
                    dur: microsec(1500),
                    tid: mainThread,
                    pid: pid,
                    args: {},
                },
                {
                    cat: 'disabled-by-default-devtools.timeline',
                    name: 'Layout',
                    ph: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.Phase.COMPLETE,
                    ts: microsec(101000),
                    dur: microsec(1000),
                    tid: mainThread,
                    pid: pid,
                    args: {
                        beginData: {
                            frame: 'FAKE_FRAME_ID',
                            dirtyObjects: 0,
                            partialLayout: false,
                            totalObjects: 1,
                        },
                        endData: { layoutRoots: [] },
                    },
                },
                {
                    cat: 'toplevel',
                    name: 'Program',
                    ph: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.Phase.COMPLETE,
                    ts: microsec(104000),
                    dur: microsec(4000),
                    tid: mainThread,
                    pid: pid,
                    args: {},
                },
                {
                    cat: 'disabled-by-default-devtools.timeline',
                    name: 'FunctionCall',
                    ph: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.Phase.COMPLETE,
                    ts: microsec(104000),
                    dur: microsec(1000),
                    tid: mainThread,
                    pid: pid,
                    args: {},
                },
                {
                    cat: 'disabled-by-default-devtools.timeline',
                    name: 'CommitLoad',
                    ph: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.Phase.COMPLETE,
                    ts: microsec(105000),
                    dur: microsec(1000),
                    tid: mainThread,
                    pid: pid,
                    args: {},
                },
                {
                    cat: 'disabled-by-default-devtools.timeline',
                    name: 'Layout',
                    ph: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.Phase.COMPLETE,
                    ts: microsec(107000),
                    dur: microsec(1000),
                    tid: mainThread,
                    pid: pid,
                    args: {
                        beginData: {
                            frame: 'FAKE_FRAME_ID',
                            dirtyObjects: 0,
                            partialLayout: false,
                            totalObjects: 1,
                        },
                        endData: { layoutRoots: [] },
                    },
                },
            ];
            const rangeStats101To103 = _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.statsForTimeRange(events, _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MilliSeconds(101), _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MilliSeconds(103));
            assert.deepEqual(rangeStats101To103, {
                other: 1,
                rendering: 1,
                scripting: 0,
                idle: 0,
            });
            const rangeStats104To109 = _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.statsForTimeRange(events, _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MilliSeconds(104), _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MilliSeconds(109));
            assert.deepEqual(rangeStats104To109, {
                other: 2,
                rendering: 1,
                scripting: 1,
                idle: 1,
            });
        });
    });
    describe('isMarkerEvent', () => {
        it('is true for a timestamp event', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'web-dev-initial-url.json.gz');
            const timestamp = traceData.Renderer.allTraceEntries.find(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isTraceEventTimeStamp);
            assert.isOk(timestamp);
            assert.isTrue(_timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.isMarkerEvent(traceData, timestamp));
        });
        it('is true for a Mark First Paint event', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'web-dev-initial-url.json.gz');
            const markFirstPaint = traceData.PageLoadMetrics.allMarkerEvents.find(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isTraceEventFirstPaint);
            assert.isOk(markFirstPaint);
            assert.isTrue(_timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.isMarkerEvent(traceData, markFirstPaint));
        });
        it('is true for a Mark FCP event', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'web-dev-initial-url.json.gz');
            const markFCPEvent = traceData.PageLoadMetrics.allMarkerEvents.find(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isTraceEventFirstContentfulPaint);
            assert.isOk(markFCPEvent);
            assert.isTrue(_timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.isMarkerEvent(traceData, markFCPEvent));
        });
        it('is false for a Mark FCP event not on the main frame', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'web-dev-initial-url.json.gz');
            const markFCPEvent = traceData.PageLoadMetrics.allMarkerEvents.find(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isTraceEventFirstContentfulPaint);
            assert.isOk(markFCPEvent);
            assert.isOk(markFCPEvent.args);
            // Now make a copy (so we do not mutate any data) and pretend it is not on the main frame.
            const copyOfEvent = { ...markFCPEvent, args: { ...markFCPEvent.args } };
            copyOfEvent.args.frame = 'not-the-main-frame';
            assert.isFalse(_timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.isMarkerEvent(traceData, copyOfEvent));
        });
        it('is true for a MarkDOMContent event', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'web-dev-initial-url.json.gz');
            const markDOMContentEvent = traceData.PageLoadMetrics.allMarkerEvents.find(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isTraceEventMarkDOMContent);
            assert.isOk(markDOMContentEvent);
            assert.isTrue(_timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.isMarkerEvent(traceData, markDOMContentEvent));
        });
        it('is true for a MarkLoad event', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'web-dev-initial-url.json.gz');
            const markLoadEvent = traceData.PageLoadMetrics.allMarkerEvents.find(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isTraceEventMarkLoad);
            assert.isOk(markLoadEvent);
            assert.isTrue(_timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.isMarkerEvent(traceData, markLoadEvent));
        });
        it('is true for a LCP candiadate event', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'web-dev-initial-url.json.gz');
            const markLCPCandidate = traceData.PageLoadMetrics.allMarkerEvents.find(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isTraceEventLargestContentfulPaintCandidate);
            assert.isOk(markLCPCandidate);
            assert.isTrue(_timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.isMarkerEvent(traceData, markLCPCandidate));
        });
        it('is false for a MarkDOMContent event not on outermost main frame', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'web-dev-initial-url.json.gz');
            const markDOMContentEvent = traceData.PageLoadMetrics.allMarkerEvents.find(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isTraceEventMarkDOMContent);
            assert.isOk(markDOMContentEvent);
            assert.isOk(markDOMContentEvent.args);
            assert.isOk(markDOMContentEvent.args.data);
            const copyOfEventNotOutermostFrame = {
                ...markDOMContentEvent,
                args: {
                    ...markDOMContentEvent.args,
                    data: {
                        ...markDOMContentEvent.args.data,
                        isOutermostMainFrame: false,
                    },
                },
            };
            assert.isFalse(_timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.isMarkerEvent(traceData, copyOfEventNotOutermostFrame));
        });
    });
    describe('displayNameForFrame', () => {
        it('trims the URL at 80 chars by default', async () => {
            const frame = {
                name: 'test-frame',
                url: 'https://' +
                    'a'.repeat(80),
                frame: 'frame-id',
                processId: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ProcessID(1),
            };
            const name = _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.displayNameForFrame(frame);
            assert.strictEqual(name, `https://${'a'.repeat(72) /* 80 minus the 8 chars for 'https://' */}`);
            assert.lengthOf(name, 80);
        });
        it('uses the frame name if the URL is about:', async () => {
            const frame = {
                name: 'test-frame',
                url: 'about:blank',
                frame: 'frame-id',
                processId: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ProcessID(1),
            };
            const name = _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.displayNameForFrame(frame);
            assert.strictEqual(name, '"test-frame"');
        });
        it('trims the frame name from the middle if it is too long', async () => {
            const frame = {
                name: 'test-frame-that-is-long',
                url: 'about:blank',
                frame: 'frame-id',
                processId: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ProcessID(1),
            };
            const name = _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.displayNameForFrame(frame, 10);
            assert.strictEqual(name, '"test-…long"');
        });
    });
    describe('buildDetailsNodeForMarkerEvents', () => {
        it('builds the right link for an LCP Event', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'web-dev.json.gz');
            const markLCPEvent = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_10__.getEventOfType)(traceData.PageLoadMetrics.allMarkerEvents, _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isTraceEventLargestContentfulPaintCandidate);
            const html = _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.buildDetailsNodeForMarkerEvents(markLCPEvent);
            const url = html.querySelector('x-link')?.getAttribute('href');
            assert.strictEqual(url, 'https://web.dev/lcp/');
            assert.strictEqual(html.innerText, 'Learn more about largest contentful paint.');
        });
        it('builds the right link for an FCP Event', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'web-dev.json.gz');
            const markFCPEvent = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_10__.getEventOfType)(traceData.PageLoadMetrics.allMarkerEvents, _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isTraceEventFirstContentfulPaint);
            const html = _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.buildDetailsNodeForMarkerEvents(markFCPEvent);
            const url = html.querySelector('x-link')?.getAttribute('href');
            assert.strictEqual(url, 'https://web.dev/first-contentful-paint/');
            assert.strictEqual(html.innerText, 'Learn more about first contentful paint.');
        });
        it('builds a generic event for other marker events', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_11__.TraceLoader.traceEngine(this, 'web-dev.json.gz');
            const markLoadEvent = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_10__.getEventOfType)(traceData.PageLoadMetrics.allMarkerEvents, _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isTraceEventMarkLoad);
            const html = _timeline_js__WEBPACK_IMPORTED_MODULE_14__.TimelineUIUtils.TimelineUIUtils.buildDetailsNodeForMarkerEvents(markLoadEvent);
            const url = html.querySelector('x-link')?.getAttribute('href');
            assert.strictEqual(url, 'https://web.dev/user-centric-performance-metrics/');
            assert.strictEqual(html.innerText, 'Learn more about page performance metrics.');
        });
    });
});


/***/ }),

/***/ "./src/testing/SourceMapHelpers.ts":
/*!*****************************************!*\
  !*** ./src/testing/SourceMapHelpers.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadBasicSourceMapExample: () => (/* binding */ loadBasicSourceMapExample),
/* harmony export */   setupPageResourceLoaderForSourceMap: () => (/* binding */ setupPageResourceLoaderForSourceMap)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/bindings/bindings.js */ "./src/models/bindings/bindings.ts");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/workspace/workspace.js */ "./src/models/workspace/workspace.ts");
/* harmony import */ var _MockConnection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MockConnection.js */ "./src/testing/MockConnection.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




function setupPageResourceLoaderForSourceMap(sourceMapContent) {
    const loadSourceMap = async (_url) => {
        return {
            success: true,
            content: sourceMapContent,
            errorDescription: { message: '', statusCode: 0, netError: 0, netErrorName: '', urlValid: true },
        };
    };
    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.PageResourceLoader.PageResourceLoader.instance({ forceNew: true, loadOverride: loadSourceMap, maxConcurrentLoads: 1 });
}
async function loadBasicSourceMapExample(target) {
    const SCRIPT_ID = '25';
    const SCRIPT_URL = 'file://main.js';
    // Generated with:
    // `terser main.js --mangle --toplevel  --output gen.js  --source-map url='gen.js.map'` v5.15.0
    const SCRIPT_SOURCE = 'function n(){o("hi");console.log("done")}function o(n){const o=performance.now();while(performance.now()-o<n);}n();o(200);\n//# sourceMappingURL=gen.js.map';
    const SOURCE_MAP = {
        version: 3,
        names: ['sayHi', 'someFunction', 'console', 'log', 'breakDuration', 'started', 'performance', 'now'],
        sources: ['main.js'],
        mappings: 'AAAA,SAASA,IACLC,EAAW,MACXC,QAAQC,IAAI,OAChB,CAEA,SAASF,EAAWG,GAChB,MAAMC,EAAUC,YAAYC,MAC5B,MAAQD,YAAYC,MAAQF,EAAWD,GAC3C,CAEAJ,IACAC,EAAW',
    };
    const SOURCE_MAP_URL = 'file://gen.js.map';
    const workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__.Workspace.WorkspaceImpl.instance();
    const targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance();
    const resourceMapping = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.ResourceMapping.ResourceMapping(targetManager, workspace);
    const debuggerWorkspaceBinding = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
        forceNew: true,
        resourceMapping,
        targetManager,
    });
    _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.IgnoreListManager.IgnoreListManager.instance({
        forceNew: true,
        debuggerWorkspaceBinding,
    });
    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.PageResourceLoader.PageResourceLoader.instance({
        forceNew: true,
        loadOverride: async (_) => ({
            success: true,
            content: JSON.stringify(SOURCE_MAP),
            errorDescription: { message: '', statusCode: 0, netError: 0, netErrorName: '', urlValid: true },
        }),
        maxConcurrentLoads: 1,
    });
    const debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DebuggerModel.DebuggerModel);
    let sourceMapAttachedCallback = () => { };
    const sourceMapAttachedPromise = new Promise(res => {
        sourceMapAttachedCallback = res;
    });
    if (!debuggerModel) {
        throw new Error('DebuggerModel was unexpectedly not found');
    }
    debuggerModel.sourceMapManager().addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SourceMapManager.Events.SourceMapAttached, sourceMapAttachedCallback);
    (0,_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.setMockConnectionResponseHandler)('Debugger.getScriptSource', getScriptSourceHandler);
    // Load the script and source map into the frontend.
    (0,_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.dispatchEvent)(target, 'Debugger.scriptParsed', {
        scriptId: SCRIPT_ID,
        url: SCRIPT_URL,
        startLine: 0,
        startColumn: 0,
        endLine: (SCRIPT_SOURCE.match(/^/gm)?.length ?? 1) - 1,
        endColumn: SCRIPT_SOURCE.length - SCRIPT_SOURCE.lastIndexOf('\n') - 1,
        executionContextId: 1,
        hash: '',
        hasSourceURL: false,
        sourceMapURL: SOURCE_MAP_URL,
    });
    function getScriptSourceHandler(_) {
        return { scriptSource: SCRIPT_SOURCE };
    }
    await sourceMapAttachedPromise;
    const script = debuggerModel.scriptForId(String(SCRIPT_ID));
    if (!script) {
        throw new Error('Script could not be registered');
    }
    const sourceMap = script.sourceMap();
    if (!sourceMap) {
        throw new Error('Source map could not be registered');
    }
    return { sourceMap, script };
}


/***/ })

}]);