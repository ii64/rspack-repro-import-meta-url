"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_breakpoints_BreakpointManager_test_js"],{

/***/ "./models/breakpoints/BreakpointManager.test.js":
/*!******************************************************!*\
  !*** ./models/breakpoints/BreakpointManager.test.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_LanguagePluginHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/LanguagePluginHelpers.js */ "./testing/LanguagePluginHelpers.js");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */ var _testing_MockScopeChain_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../testing/MockScopeChain.js */ "./testing/MockScopeChain.js");
/* harmony import */ var _testing_PersistenceHelpers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../testing/PersistenceHelpers.js */ "./testing/PersistenceHelpers.js");
/* harmony import */ var _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../testing/ResourceTreeHelpers.js */ "./testing/ResourceTreeHelpers.js");
/* harmony import */ var _testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../testing/SourceMapEncoder.js */ "./testing/SourceMapEncoder.js");
/* harmony import */ var _testing_SourceMapHelpers_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../testing/SourceMapHelpers.js */ "./testing/SourceMapHelpers.js");
/* harmony import */ var _testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../testing/UISourceCodeHelpers.js */ "./testing/UISourceCodeHelpers.js");
/* harmony import */ var _bindings_bindings_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */ var _breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../breakpoints/breakpoints.js */ "./models/breakpoints/breakpoints.js");
/* harmony import */ var _persistence_persistence_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../persistence/persistence.js */ "./models/persistence/persistence.js");
/* harmony import */ var _text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */ var _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../workspace/workspace.js */ "./models/workspace/workspace.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

















(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.describeWithMockConnection)('BreakpointManager', () => {
    const URL_HTML = 'http://site/index.html';
    const INLINE_SCRIPT_START = 41;
    const BREAKPOINT_SCRIPT_LINE = 1;
    const INLINE_BREAKPOINT_RAW_LINE = BREAKPOINT_SCRIPT_LINE + INLINE_SCRIPT_START;
    const BREAKPOINT_RESULT_COLUMN = 5;
    const inlineScriptDescription = {
        url: URL_HTML,
        content: 'console.log(1);\nconsole.log(2);\n',
        startLine: INLINE_SCRIPT_START,
        startColumn: 0,
        hasSourceURL: false,
        embedderName: URL_HTML,
    };
    const URL = 'http://site/script.js';
    const scriptDescription = {
        url: URL,
        content: 'console.log(1);\nconsole.log(2);\n',
        startLine: 0,
        startColumn: 0,
        hasSourceURL: false,
    };
    const DEFAULT_BREAKPOINT = [
        _breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_13__.BreakpointManager.EMPTY_BREAKPOINT_CONDITION,
        true, // enabled
        false, // isLogpoint
        "RESTORED" /* Breakpoints.BreakpointManager.BreakpointOrigin.OTHER */,
    ];
    // For tests with source maps.
    const ORIGINAL_SCRIPT_SOURCES_CONTENT = 'function foo() {\n  console.log(\'Hello\');\n}\n';
    const COMPILED_SCRIPT_SOURCES_CONTENT = 'function foo(){console.log("Hello")}';
    const SOURCE_MAP_URL = 'https://site/script.js.map';
    const ORIGINAL_SCRIPT_SOURCE_URL = 'https://site/original-script.js';
    // Created with `terser -m -o script.min.js --source-map "includeSources;url=script.min.js.map" original-script.js`
    const sourceMapContent = JSON.stringify({
        'version': 3,
        'names': ['foo', 'console', 'log'],
        'sources': ['/original-script.js'],
        'sourcesContent': [ORIGINAL_SCRIPT_SOURCES_CONTENT],
        'mappings': 'AAAA,SAASA,MACPC,QAAQC,IAAI,QACd',
    });
    let target;
    let backend;
    let breakpointManager;
    let debuggerWorkspaceBinding;
    let targetManager;
    let workspace;
    beforeEach(async () => {
        workspace = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_16__.Workspace.WorkspaceImpl.instance();
        targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance();
        const resourceMapping = new _bindings_bindings_js__WEBPACK_IMPORTED_MODULE_12__.ResourceMapping.ResourceMapping(targetManager, workspace);
        debuggerWorkspaceBinding = _bindings_bindings_js__WEBPACK_IMPORTED_MODULE_12__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
            forceNew: true,
            resourceMapping,
            targetManager,
        });
        _bindings_bindings_js__WEBPACK_IMPORTED_MODULE_12__.IgnoreListManager.IgnoreListManager.instance({ forceNew: true, debuggerWorkspaceBinding });
        backend = new _testing_MockScopeChain_js__WEBPACK_IMPORTED_MODULE_6__.MockProtocolBackend();
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)();
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().setScopeTarget(target);
        // Wait for the resource tree model to load; otherwise, our uiSourceCodes could be asynchronously
        // invalidated during the test.
        await (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_8__.getInitializedResourceTreeModel)(target);
        breakpointManager = _breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_13__.BreakpointManager.BreakpointManager.instance({ forceNew: true, targetManager, workspace, debuggerWorkspaceBinding });
    });
    async function uiSourceCodeFromScript(debuggerModel, script) {
        const rawLocation = debuggerModel.createRawLocation(script, 0, 0);
        const uiLocation = await breakpointManager.debuggerWorkspaceBinding.rawLocationToUILocation(rawLocation);
        return uiLocation?.uiSourceCode ?? null;
    }
    describe('possibleBreakpoints', () => {
        it('correctly asks the back-end for breakable positions', async () => {
            const debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
            assert.exists(debuggerModel);
            // Create an inline script and get a UI source code instance for it.
            const script = await backend.addScript(target, scriptDescription, null);
            const { scriptId } = script;
            const uiSourceCode = await uiSourceCodeFromScript(debuggerModel, script);
            assert.exists(uiSourceCode);
            function getPossibleBreakpointsStub(_request) {
                return {
                    locations: [
                        { scriptId, lineNumber: 0, columnNumber: 4 },
                        { scriptId, lineNumber: 0, columnNumber: 8 },
                    ],
                    getError() {
                        return undefined;
                    },
                };
            }
            const getPossibleBreakpoints = sinon.spy(getPossibleBreakpointsStub);
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.setMockConnectionResponseHandler)('Debugger.getPossibleBreakpoints', getPossibleBreakpoints);
            const uiTextRange = new _text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_15__.TextRange.TextRange(0, 0, 1, 0);
            const possibleBreakpoints = await breakpointManager.possibleBreakpoints(uiSourceCode, uiTextRange);
            assert.lengthOf(possibleBreakpoints, 2);
            assert.strictEqual(possibleBreakpoints[0].uiSourceCode, uiSourceCode);
            assert.strictEqual(possibleBreakpoints[0].lineNumber, 0);
            assert.strictEqual(possibleBreakpoints[0].columnNumber, 4);
            assert.strictEqual(possibleBreakpoints[1].uiSourceCode, uiSourceCode);
            assert.strictEqual(possibleBreakpoints[1].lineNumber, 0);
            assert.strictEqual(possibleBreakpoints[1].columnNumber, 8);
            assert.isTrue(getPossibleBreakpoints.calledOnceWith(sinon.match({
                start: {
                    scriptId,
                    lineNumber: 0,
                    columnNumber: 0,
                },
                end: {
                    scriptId,
                    lineNumber: 1,
                    columnNumber: 0,
                },
                restrictToFunction: false,
            })));
        });
    });
    describe('Breakpoints', () => {
        it('are removed and kept in storage after a back-end error', async () => {
            // Simulates a back-end error.
            const debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
            assert.exists(debuggerModel);
            if (!debuggerModel.isReadyToPause()) {
                await debuggerModel.once(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.Events.DebuggerIsReadyToPause);
            }
            // Create an inline script and get a UI source code instance for it.
            const script = await backend.addScript(target, scriptDescription, null);
            const uiSourceCode = await uiSourceCodeFromScript(debuggerModel, script);
            assert.exists(uiSourceCode);
            // Set up the backend to respond with an error.
            backend.setBreakpointByUrlToFail(URL, BREAKPOINT_SCRIPT_LINE);
            // Set the breakpoint.
            const breakpoint = await breakpointManager.setBreakpoint(uiSourceCode, BREAKPOINT_SCRIPT_LINE, 2, ...DEFAULT_BREAKPOINT);
            assert.exists(breakpoint);
            const removedSpy = sinon.spy(breakpoint, 'remove');
            await breakpoint.updateBreakpoint();
            // Breakpoint was removed and is kept in storage.
            assert.isTrue(breakpoint.getIsRemoved());
            assert.isTrue(removedSpy.calledWith(true));
        });
        it('are only set if the uiSourceCode is still valid (not removed)', async () => {
            const debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
            assert.exists(debuggerModel);
            // Add a script.
            const script = await backend.addScript(target, scriptDescription, null);
            const uiSourceCode = await uiSourceCodeFromScript(debuggerModel, script);
            assert.exists(uiSourceCode);
            // Remove the project (and thus the uiSourceCode).
            _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_16__.Workspace.WorkspaceImpl.instance().removeProject(uiSourceCode.project());
            // Set the breakpoint.
            const breakpoint = await breakpointManager.setBreakpoint(uiSourceCode, BREAKPOINT_SCRIPT_LINE, 2, ...DEFAULT_BREAKPOINT);
            // We should not expect any breakpoints to be set.
            assert.isUndefined(breakpoint);
            const breakLocations = breakpointManager.allBreakpointLocations();
            assert.lengthOf(breakLocations, 0);
        });
    });
    describe('Breakpoint#backendCondition()', () => {
        function createBreakpoint(condition, isLogpoint) {
            const { uiSourceCode } = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_11__.createContentProviderUISourceCode)({ url: URL, mimeType: 'text/javascript' });
            const storageState = {
                url: URL,
                resourceTypeName: uiSourceCode.contentType().name(),
                lineNumber: 5,
                condition: condition,
                enabled: true,
                isLogpoint,
            };
            return new _breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_13__.BreakpointManager.Breakpoint(breakpointManager, uiSourceCode, storageState, "USER_ACTION" /* Breakpoints.BreakpointManager.BreakpointOrigin.USER_ACTION */);
        }
        it('wraps logpoints in console.log', () => {
            const breakpoint = createBreakpoint('x', /* isLogpoint */ true);
            assert.include(breakpoint.backendCondition(), 'console.log(x)');
        });
        it('leaves conditional breakpoints alone', () => {
            const breakpoint = createBreakpoint('x === 42', /* isLogpoint */ false);
            // Split of sourceURL.
            const lines = breakpoint.backendCondition().split('\n');
            assert.strictEqual(lines[0], 'x === 42');
        });
        it('has a sourceURL for logpoints', () => {
            const breakpoint = createBreakpoint('x', /* isLogpoint */ true);
            assert.include(breakpoint.backendCondition(), '//# sourceURL=');
        });
        it('has a sourceURL for conditional breakpoints', () => {
            const breakpoint = createBreakpoint('x === 42', /* isLogpoint */ false);
            assert.include(breakpoint.backendCondition(), '//# sourceURL=');
        });
        it('has no sourceURL for normal breakpoints', () => {
            const breakpoint = createBreakpoint('', /* isLogpoint */ false);
            assert.notInclude(breakpoint.backendCondition(), '//# sourceURL=');
        });
        it('substitutes source-mapped variables', async () => {
            const debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
            assert.exists(debuggerModel);
            const scriptInfo = { url: URL, content: 'function adder(n,r){const t=n+r;return t}' };
            // Created with `terser -m -o script.min.js --source-map "includeSources;url=script.min.js.map" original-script.js`
            const sourceMapContent = JSON.stringify({
                'version': 3,
                'names': ['adder', 'param1', 'param2', 'result'],
                'sources': ['/original-script.js'],
                'sourcesContent': ['function adder(param1, param2) {\n  const result = param1 + param2;\n  return result;\n}\n\n'],
                'mappings': 'AAAA,SAASA,MAAMC,EAAQC,GACrB,MAAMC,EAASF,EAASC,EACxB,OAAOC,CACT',
            });
            const sourceMapInfo = { url: SOURCE_MAP_URL, content: sourceMapContent };
            const script = await backend.addScript(target, scriptInfo, sourceMapInfo);
            // Get the uiSourceCode for the original source.
            const uiSourceCode = await debuggerWorkspaceBinding.uiSourceCodeForSourceMapSourceURLPromise(debuggerModel, ORIGINAL_SCRIPT_SOURCE_URL, script.isContentScript());
            assert.exists(uiSourceCode);
            // Mock out "Debugger.setBreakpointByUrl and just echo back the request".
            const cdpSetBreakpointPromise = new Promise(res => {
                (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.clearMockConnectionResponseHandler)('Debugger.setBreakpointByUrl');
                (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.setMockConnectionResponseHandler)('Debugger.setBreakpointByUrl', request => {
                    res(request);
                    return {};
                });
            });
            // Set the breakpoint on the `const result = ...` line with a condition using
            // "authored" variable names.
            const breakpoint = await breakpointManager.setBreakpoint(uiSourceCode, 1, 0, 'param1 > 0', /* enabled */ true, 
            /* isLogpoint */ false, "USER_ACTION" /* Breakpoints.BreakpointManager.BreakpointOrigin.USER_ACTION */);
            assert.exists(breakpoint);
            await breakpoint.updateBreakpoint();
            const { url, lineNumber, columnNumber, condition } = await cdpSetBreakpointPromise;
            assert.strictEqual(url, URL);
            assert.strictEqual(lineNumber, 0);
            assert.strictEqual(columnNumber, 20);
            assert.strictEqual(condition, 'n > 0\n\n//# sourceURL=debugger://breakpoint');
        });
    });
    it('substitutes source-mapped variables for the same original script in different bundles correctly', async () => {
        const debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
        assert.exists(debuggerModel);
        // Create two 'bundles' that are identical modulo variable names.
        const url1 = 'http://site/script1.js';
        const url2 = 'http://site/script2.js';
        const scriptInfo1 = { url: url1, content: 'function adder(n,r){const t=n+r;return t}' };
        const scriptInfo2 = { url: url2, content: 'function adder(o,p){const t=o+p;return t}' };
        // The source map is the same for both 'bundles'.
        // Created with `terser -m -o script.min.js --source-map "includeSources;url=script.min.js.map" original-script.js`
        const sourceMapContent = JSON.stringify({
            'version': 3,
            'names': ['adder', 'param1', 'param2', 'result'],
            'sources': ['/original-script.js'],
            'sourcesContent': ['function adder(param1, param2) {\n  const result = param1 + param2;\n  return result;\n}\n\n'],
            'mappings': 'AAAA,SAASA,MAAMC,EAAQC,GACrB,MAAMC,EAASF,EAASC,EACxB,OAAOC,CACT',
        });
        const sourceMapInfo = { url: SOURCE_MAP_URL, content: sourceMapContent };
        await Promise.all([
            backend.addScript(target, scriptInfo1, sourceMapInfo),
            backend.addScript(target, scriptInfo2, sourceMapInfo),
        ]);
        // Get the uiSourceCode for the original source.
        const uiSourceCode = await debuggerWorkspaceBinding.uiSourceCodeForSourceMapSourceURLPromise(debuggerModel, ORIGINAL_SCRIPT_SOURCE_URL, /* isContentScript */ false);
        assert.exists(uiSourceCode);
        // Mock out "Debugger.setBreakpointByUrl and echo back the first two 'Debugger.setBreakpointByUrl' requests.
        const cdpSetBreakpointPromise = new Promise(res => {
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.clearMockConnectionResponseHandler)('Debugger.setBreakpointByUrl');
            const requests = new Map();
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.setMockConnectionResponseHandler)('Debugger.setBreakpointByUrl', request => {
                requests.set(request.url, request);
                if (requests.size === 2) {
                    res(requests);
                }
                return {};
            });
        });
        // Set the breakpoint on the `const result = ...` line with a condition using
        // "authored" variable names.
        const breakpoint = await breakpointManager.setBreakpoint(uiSourceCode, 1, 0, 'param1 > 0', /* enabled */ true, 
        /* isLogpoint */ false, "USER_ACTION" /* Breakpoints.BreakpointManager.BreakpointOrigin.USER_ACTION */);
        assert.exists(breakpoint);
        await breakpoint.updateBreakpoint();
        const requests = await cdpSetBreakpointPromise;
        const req1 = requests.get(url1);
        assert.exists(req1);
        assert.strictEqual(req1.url, url1);
        assert.strictEqual(req1.condition, 'n > 0\n\n//# sourceURL=debugger://breakpoint');
        const req2 = requests.get(url2);
        assert.exists(req2);
        assert.strictEqual(req2.url, url2);
        assert.strictEqual(req2.condition, 'o > 0\n\n//# sourceURL=debugger://breakpoint');
    });
    it('allows awaiting the restoration of breakpoints', async () => {
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.enableForTest("instrumentation-breakpoints" /* Root.Runtime.ExperimentName.INSTRUMENTATION_BREAKPOINTS */);
        const debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
        assert.exists(debuggerModel);
        const { uiSourceCode, project } = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_11__.createContentProviderUISourceCode)({ url: URL, mimeType: 'text/javascript' });
        const breakpoint = await breakpointManager.setBreakpoint(uiSourceCode, 0, 0, ...DEFAULT_BREAKPOINT);
        assert.exists(breakpoint);
        // Make sure that we await all updates that are triggered by adding the model.
        await breakpoint.updateBreakpoint();
        const responder = backend.responderToBreakpointByUrlRequest(URL, 0);
        const script = await backend.addScript(target, scriptDescription, null);
        void responder({
            breakpointId: 'BREAK_ID',
            locations: [
                {
                    scriptId: script.scriptId,
                    lineNumber: 0,
                    columnNumber: 9,
                },
            ],
        });
        // Retrieve the ModelBreakpoint that is linked to our DebuggerModel.
        const modelBreakpoint = breakpoint.modelBreakpoint(debuggerModel);
        assert.exists(modelBreakpoint);
        // Make sure that we do not have a linked script yet.
        assert.strictEqual(modelBreakpoint.currentState, null);
        // Now await restoring the breakpoint.
        // A successful restore should update the ModelBreakpoint of the DebuggerModel
        // to reflect a state, in which we have successfully set a breakpoint (i.e. a script id
        // is available).
        await breakpointManager.restoreBreakpointsForScript(script);
        assert.isNotNull(modelBreakpoint.currentState);
        assert.lengthOf(modelBreakpoint.currentState, 1);
        assert.strictEqual(modelBreakpoint.currentState[0].url, URL);
        // Clean up.
        await breakpoint.remove(false);
        _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_16__.Workspace.WorkspaceImpl.instance().removeProject(project);
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.disableForTest("instrumentation-breakpoints" /* Root.Runtime.ExperimentName.INSTRUMENTATION_BREAKPOINTS */);
    });
    it('allows awaiting on scheduled update in debugger', async () => {
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.enableForTest("instrumentation-breakpoints" /* Root.Runtime.ExperimentName.INSTRUMENTATION_BREAKPOINTS */);
        const debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
        assert.exists(debuggerModel);
        const { uiSourceCode, project } = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_11__.createContentProviderUISourceCode)({ url: URL, mimeType: 'text/javascript' });
        const breakpoint = await breakpointManager.setBreakpoint(uiSourceCode, 13, 0, ...DEFAULT_BREAKPOINT);
        assert.exists(breakpoint);
        // Make sure that we await all updates that are triggered by adding the model.
        await breakpoint.updateBreakpoint();
        const responder = backend.responderToBreakpointByUrlRequest(URL, 13);
        const script = await backend.addScript(target, scriptDescription, null);
        void responder({
            breakpointId: 'BREAK_ID',
            locations: [
                {
                    scriptId: script.scriptId,
                    lineNumber: 13,
                    columnNumber: 9,
                },
            ],
        });
        // Retrieve the ModelBreakpoint that is linked to our DebuggerModel.
        const modelBreakpoint = breakpoint.modelBreakpoint(debuggerModel);
        assert.exists(modelBreakpoint);
        assert.isNull(breakpoint.getLastResolvedState());
        const update = modelBreakpoint.scheduleUpdateInDebugger();
        assert.isNull(breakpoint.getLastResolvedState());
        const result = await update;
        // Make sure that no error occurred.
        assert.isTrue(result === "OK" /* Breakpoints.BreakpointManager.DebuggerUpdateResult.OK */);
        assert.strictEqual(breakpoint.getLastResolvedState()?.[0].lineNumber, 13);
        await breakpoint.remove(false);
        _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_16__.Workspace.WorkspaceImpl.instance().removeProject(project);
    });
    it('allows awaiting on removal of breakpoint in debugger', async () => {
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.enableForTest("instrumentation-breakpoints" /* Root.Runtime.ExperimentName.INSTRUMENTATION_BREAKPOINTS */);
        const debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
        assert.exists(debuggerModel);
        const script = await backend.addScript(target, scriptDescription, null);
        const uiSourceCode = await uiSourceCodeFromScript(debuggerModel, script);
        assert.exists(uiSourceCode);
        const breakpointId = 'BREAK_ID';
        void backend.responderToBreakpointByUrlRequest(URL, 13)({
            breakpointId,
            locations: [
                {
                    scriptId: script.scriptId,
                    lineNumber: 13,
                    columnNumber: 9,
                },
            ],
        });
        const breakpoint = await breakpointManager.setBreakpoint(uiSourceCode, 13, 0, ...DEFAULT_BREAKPOINT);
        assert.exists(breakpoint);
        await breakpoint.updateBreakpoint();
        // Retrieve the ModelBreakpoint that is linked to our DebuggerModel.
        const modelBreakpoint = breakpoint.modelBreakpoint(debuggerModel);
        assert.exists(modelBreakpoint);
        assert.exists(modelBreakpoint.currentState);
        // Test if awaiting breakpoint.remove is actually removing the state.
        const removalPromise = backend.breakpointRemovedPromise(breakpointId);
        await breakpoint.remove(false);
        await removalPromise;
        assert.isNull(modelBreakpoint.currentState);
    });
    it('removes ui source code from breakpoint even after breakpoint live location update', async () => {
        const BREAKPOINT_TS_LINE = 10;
        const { uiSourceCode: uiSourceCodeTs } = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_11__.createContentProviderUISourceCode)({ url: 'http://example.com/source.ts', mimeType: 'text/typescript' });
        const debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
        assert.exists(debuggerModel);
        // Create an inline script and get a UI source code instance for it.
        const script = await backend.addScript(target, scriptDescription, null);
        const uiSourceCode = await uiSourceCodeFromScript(debuggerModel, script);
        assert.exists(uiSourceCode);
        // Register our interest in the breakpoint request.
        const breakpointResponder = backend.responderToBreakpointByUrlRequest(URL, BREAKPOINT_SCRIPT_LINE);
        // Set the breakpoint.
        const breakpoint = await breakpointManager.setBreakpoint(uiSourceCode, BREAKPOINT_SCRIPT_LINE, 2, ...DEFAULT_BREAKPOINT);
        assert.exists(breakpoint);
        // Await the breakpoint request at the mock backend and send a CDP response once the request arrives.
        // Concurrently, enforce update of the breakpoint in the debugger.
        await Promise.all([
            breakpointResponder({
                breakpointId: 'BREAK_ID',
                locations: [
                    { scriptId: script.scriptId, lineNumber: BREAKPOINT_SCRIPT_LINE, columnNumber: BREAKPOINT_RESULT_COLUMN },
                ],
            }),
            breakpoint.refreshInDebugger(),
        ]);
        // Map the breakpoint location to a different file (this will internally update its live location).
        const mapping = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_11__.createFakeScriptMapping)(debuggerModel, uiSourceCodeTs, BREAKPOINT_TS_LINE, script.scriptId);
        _bindings_bindings_js__WEBPACK_IMPORTED_MODULE_12__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().addSourceMapping(mapping);
        await breakpointManager.debuggerWorkspaceBinding.updateLocations(script);
        // Verify that the location of the breakpoint was updated.
        assert.strictEqual(breakpointManager.breakpointLocationsForUISourceCode(uiSourceCodeTs).length, 1);
        assert.strictEqual(breakpointManager.breakpointLocationsForUISourceCode(uiSourceCodeTs)[0].breakpoint, breakpoint);
        assert.strictEqual(breakpointManager.breakpointLocationsForUISourceCode(uiSourceCodeTs)[0].uiLocation.lineNumber, BREAKPOINT_TS_LINE);
        // Remove the target and verify that the UI source codes were removed from the breakpoint.
        breakpointManager.targetManager.removeTarget(target);
        assert.strictEqual(breakpoint.getUiSourceCodes().size, 0);
        assert.strictEqual(breakpointManager.breakpointLocationsForUISourceCode(uiSourceCodeTs).length, 0);
        _bindings_bindings_js__WEBPACK_IMPORTED_MODULE_12__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().removeSourceMapping(mapping);
        await breakpoint.remove(false);
    });
    it('can set breakpoints in inline scripts', async () => {
        const debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
        assert.exists(debuggerModel);
        // Create an inline script and get a UI source code instance for it.
        const inlineScript = await backend.addScript(target, inlineScriptDescription, null);
        const uiSourceCode = await uiSourceCodeFromScript(debuggerModel, inlineScript);
        assert.exists(uiSourceCode);
        // Register our interest in the breakpoint request.
        const breakpointResponder = backend.responderToBreakpointByUrlRequest(URL_HTML, INLINE_BREAKPOINT_RAW_LINE);
        // Set the breakpoint.
        const breakpoint = await breakpointManager.setBreakpoint(uiSourceCode, BREAKPOINT_SCRIPT_LINE, 2, ...DEFAULT_BREAKPOINT);
        assert.exists(breakpoint);
        // Await the breakpoint request at the mock backend and send a CDP response once the request arrives.
        // Concurrently, enforce update of the breakpoint in the debugger.
        await Promise.all([
            breakpointResponder({
                breakpointId: 'BREAK_ID',
                locations: [
                    {
                        scriptId: inlineScript.scriptId,
                        lineNumber: INLINE_BREAKPOINT_RAW_LINE,
                        columnNumber: BREAKPOINT_RESULT_COLUMN,
                    },
                ],
            }),
            breakpoint.refreshInDebugger(),
        ]);
        // Check that the breakpoint was set at the correct location?
        const locations = breakpointManager.breakpointLocationsForUISourceCode(uiSourceCode);
        assert.strictEqual(1, locations.length);
        assert.strictEqual(1, locations[0].uiLocation.lineNumber);
        assert.strictEqual(5, locations[0].uiLocation.columnNumber);
    });
    it('can restore breakpoints in inline scripts', async () => {
        const debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
        assert.exists(debuggerModel);
        // Create an inline script and get a UI source code instance for it.
        const inlineScript = await backend.addScript(target, inlineScriptDescription, null);
        const uiSourceCode = await uiSourceCodeFromScript(debuggerModel, inlineScript);
        assert.exists(uiSourceCode);
        // Register our interest in the breakpoint request.
        const breakpointResponder = backend.responderToBreakpointByUrlRequest(URL_HTML, INLINE_BREAKPOINT_RAW_LINE);
        // Set the breakpoint on the front-end/model side.
        const breakpoint = await breakpointManager.setBreakpoint(uiSourceCode, BREAKPOINT_SCRIPT_LINE, 2, ...DEFAULT_BREAKPOINT);
        assert.exists(breakpoint);
        assert.deepEqual(Array.from(breakpoint.getUiSourceCodes()), [uiSourceCode]);
        // Await the breakpoint request at the mock backend and send a CDP response once the request arrives.
        // Concurrently, enforce update of the breakpoint in the debugger.
        await Promise.all([
            breakpointResponder({
                breakpointId: 'BREAK_ID',
                locations: [
                    {
                        scriptId: inlineScript.scriptId,
                        lineNumber: INLINE_BREAKPOINT_RAW_LINE,
                        columnNumber: BREAKPOINT_RESULT_COLUMN,
                    },
                ],
            }),
            breakpoint.refreshInDebugger(),
        ]);
        // Disconnect from the target. This will also unload the script.
        breakpointManager.targetManager.removeTarget(target);
        // Make sure the source code for the script was removed from the breakpoint.
        assert.strictEqual(breakpoint.getUiSourceCodes().size, 0);
        // Create a new target.
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)();
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().setScopeTarget(target);
        const reloadedDebuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
        assert.exists(reloadedDebuggerModel);
        // Load the same inline script (with a different script id!) into the new target.
        // Once the model loads the script, it wil try to restore the breakpoint. Let us make sure the backend
        // will be ready to produce a response before adding the script.
        const reloadedBreakpointResponder = backend.responderToBreakpointByUrlRequest(URL_HTML, INLINE_BREAKPOINT_RAW_LINE);
        const reloadedInlineScript = await backend.addScript(target, inlineScriptDescription, null);
        const reloadedUiSourceCode = await uiSourceCodeFromScript(reloadedDebuggerModel, reloadedInlineScript);
        assert.exists(reloadedUiSourceCode);
        // Verify the breakpoint was restored at the oriignal unbound location (before the backend binds it).
        const unboundLocations = breakpointManager.breakpointLocationsForUISourceCode(reloadedUiSourceCode);
        assert.strictEqual(1, unboundLocations.length);
        assert.strictEqual(1, unboundLocations[0].uiLocation.lineNumber);
        assert.strictEqual(2, unboundLocations[0].uiLocation.columnNumber);
        // Wait for the breakpoint request for the reloaded script and for the breakpoint update.
        await Promise.all([
            reloadedBreakpointResponder({
                breakpointId: 'RELOADED_BREAK_ID',
                locations: [{
                        scriptId: reloadedInlineScript.scriptId,
                        lineNumber: INLINE_BREAKPOINT_RAW_LINE,
                        columnNumber: BREAKPOINT_RESULT_COLUMN,
                    }],
            }),
            breakpoint.refreshInDebugger(),
        ]);
        // Verify the restored position.
        const boundLocations = breakpointManager.breakpointLocationsForUISourceCode(reloadedUiSourceCode);
        assert.strictEqual(1, boundLocations.length);
        assert.strictEqual(1, boundLocations[0].uiLocation.lineNumber);
        assert.strictEqual(5, boundLocations[0].uiLocation.columnNumber);
    });
    it('eagerly restores JavaScript breakpoints in a new target', async () => {
        // Remove the default target so that we can simulate starting the debugger afresh.
        targetManager.removeTarget(target);
        // Set the breakpoint storage to contain a breakpoint and re-initialize
        // the breakpoint manager from that storage. This should create a breakpoint instance
        // in the breakpoint manager.
        const url = 'http://example.com/script.js';
        const lineNumber = 1;
        const breakpoints = [{
                url,
                resourceTypeName: 'script',
                lineNumber,
                condition: '',
                enabled: true,
                isLogpoint: false,
            }];
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createLocalSetting('breakpoints', breakpoints).set(breakpoints);
        _breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_13__.BreakpointManager.BreakpointManager.instance({ forceNew: true, targetManager, workspace, debuggerWorkspaceBinding });
        // Create a new target and make sure that the backend receives setBreakpointByUrl request
        // from breakpoint manager.
        const breakpointSetPromise = backend.responderToBreakpointByUrlRequest(url, lineNumber)({
            breakpointId: 'BREAK_ID',
            locations: [],
        });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().setScopeTarget((0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)());
        await breakpointSetPromise;
    });
    it('eagerly restores TypeScript breakpoints in a new target', async () => {
        // Remove the default target so that we can simulate starting the debugger afresh.
        targetManager.removeTarget(target);
        // Set the breakpoint storage to contain a source-mapped breakpoint and re-initialize
        // the breakpoint manager from that storage. This should create a breakpoint instance
        // in the breakpoint manager (for the resolved location!).
        const compiledUrl = 'http://example.com/compiled.js';
        const compiledLineNumber = 2;
        const breakpoints = [{
                url: 'http://example.com/src/script.ts',
                resourceTypeName: 'sm-script',
                lineNumber: 1,
                condition: '',
                enabled: true,
                isLogpoint: false,
                resolvedState: [{
                        url: compiledUrl,
                        lineNumber: compiledLineNumber,
                        columnNumber: 0,
                        condition: '',
                    }],
            }];
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createLocalSetting('breakpoints', breakpoints).set(breakpoints);
        _breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_13__.BreakpointManager.BreakpointManager.instance({ forceNew: true, targetManager, workspace, debuggerWorkspaceBinding });
        // Create a new target and make sure that the backend receives setBreakpointByUrl request
        // from breakpoint manager.
        const breakpointSetPromise = backend.responderToBreakpointByUrlRequest(compiledUrl, compiledLineNumber)({
            breakpointId: 'BREAK_ID',
            locations: [],
        });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().setScopeTarget((0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)());
        await breakpointSetPromise;
    });
    it('saves generated location into storage', async () => {
        // Remove the default target so that we can simulate starting the debugger afresh.
        targetManager.removeTarget(target);
        // Re-create a target and breakpoint manager.
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)();
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().setScopeTarget(target);
        const debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
        assert.exists(debuggerModel);
        const breakpoints = [];
        const setting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createLocalSetting('breakpoints', breakpoints);
        _breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_13__.BreakpointManager.BreakpointManager.instance({ forceNew: true, targetManager, workspace, debuggerWorkspaceBinding });
        // Add script with source map.
        (0,_testing_SourceMapHelpers_js__WEBPACK_IMPORTED_MODULE_10__.setupPageResourceLoaderForSourceMap)(sourceMapContent);
        const scriptInfo = { url: URL, content: COMPILED_SCRIPT_SOURCES_CONTENT };
        const sourceMapInfo = { url: SOURCE_MAP_URL, content: sourceMapContent };
        const script = await backend.addScript(target, scriptInfo, sourceMapInfo);
        // Get the uiSourceCode for the original source.
        const uiSourceCode = await debuggerWorkspaceBinding.uiSourceCodeForSourceMapSourceURLPromise(debuggerModel, ORIGINAL_SCRIPT_SOURCE_URL, script.isContentScript());
        assert.exists(uiSourceCode);
        // Set the breakpoint on the front-end/model side.
        const breakpoint = await breakpointManager.setBreakpoint(uiSourceCode, 1, 0, ...DEFAULT_BREAKPOINT);
        assert.exists(breakpoint);
        // Set the breakpoint response for our upcoming request.
        void backend.responderToBreakpointByUrlRequest(URL, 0)({
            breakpointId: 'BREAK_ID',
            locations: [
                {
                    scriptId: script.scriptId,
                    lineNumber: 0,
                    columnNumber: 15,
                },
            ],
        });
        // Ensure the breakpoint is fully set.
        await breakpoint.refreshInDebugger();
        // Check that the storage contains the resolved breakpoint location.
        assert.lengthOf(setting.get(), 1);
        assert.deepEqual(setting.get()[0].resolvedState, [{
                url: URL,
                lineNumber: 0,
                columnNumber: 15,
                condition: '',
            }]);
    });
    it('restores latest breakpoints from storage', async () => {
        // Remove the default target so that we can simulate starting the debugger afresh.
        targetManager.removeTarget(target);
        const expectedBreakpointLines = [1, 2];
        const breakpointRequestLines = new Promise((resolve, reject) => {
            const breakpoints = [];
            // Accumulator for breakpoint lines from setBreakpointByUrl requests.
            const breakpointRequestLinesReceived = new Set();
            // Create three breakpoints in the storage and register the corresponding
            // request handler in the mock backend. The handler will resolve the promise
            // (and thus finish up the test) once it receives two breakpoint requests.
            // The idea is to check that the front-end requested the two latest breakpoints
            // from the backend.
            for (let i = 0; i < 3; i++) {
                const lineNumber = i;
                // Push the breakpoint to our mock storage. The storage will be then used
                // to initialize the breakpoint manager.
                breakpoints.push({
                    url: URL,
                    resourceTypeName: 'script',
                    lineNumber,
                    condition: '',
                    enabled: true,
                    isLogpoint: false,
                });
                // When the mock backend receives a request for this breakpoint, it will
                // respond and record the request. Also, once we receive the
                void backend
                    .responderToBreakpointByUrlRequest(URL, lineNumber)({ breakpointId: 'BREAK_ID', locations: [] })
                    .then(() => {
                    breakpointRequestLinesReceived.add(lineNumber);
                    if (breakpointRequestLinesReceived.size === expectedBreakpointLines.length) {
                        resolve(Array.from(breakpointRequestLinesReceived).sort((l, r) => l - r));
                    }
                }, reject);
            }
            // Re-create the breakpoint manager and the target.
            const setting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createLocalSetting('breakpoints', breakpoints);
            setting.set(breakpoints);
            // Create the breakpoint manager, request placing on the two latest breakpoints in the backend.
            _breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_13__.BreakpointManager.BreakpointManager.instance({
                forceNew: true,
                targetManager,
                workspace,
                debuggerWorkspaceBinding,
                restoreInitialBreakpointCount: expectedBreakpointLines.length,
            });
            target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)();
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().setScopeTarget(target);
        });
        assert.deepEqual(Array.from(await breakpointRequestLines), expectedBreakpointLines);
    });
    describe('with instrumentation breakpoints turned on', () => {
        beforeEach(() => {
            const targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance();
            const workspace = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_16__.Workspace.WorkspaceImpl.instance();
            _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.enableForTest("instrumentation-breakpoints" /* Root.Runtime.ExperimentName.INSTRUMENTATION_BREAKPOINTS */);
            breakpointManager = _breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_13__.BreakpointManager.BreakpointManager.instance({ forceNew: true, targetManager, workspace, debuggerWorkspaceBinding });
        });
        afterEach(() => {
            _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.disableForTest("instrumentation-breakpoints" /* Root.Runtime.ExperimentName.INSTRUMENTATION_BREAKPOINTS */);
        });
        async function testBreakpointMovedOnInstrumentationBreak(fileSystemPath, fileSystemFileUrl, content, type) {
            const debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
            assert.exists(debuggerModel);
            const { uiSourceCode: fileSystemUiSourceCode, project } = (0,_testing_PersistenceHelpers_js__WEBPACK_IMPORTED_MODULE_7__.createFileSystemFileForPersistenceTests)({ fileSystemFileUrl, fileSystemPath, type: type }, scriptDescription.url, content, target);
            const breakpointLine = 0;
            const resolvedBreakpointLine = 1;
            // Set the breakpoint on the file system uiSourceCode.
            await breakpointManager.setBreakpoint(fileSystemUiSourceCode, breakpointLine, 0, ...DEFAULT_BREAKPOINT);
            // Add the script.
            const script = await backend.addScript(target, scriptDescription, null);
            const uiSourceCode = debuggerWorkspaceBinding.uiSourceCodeForScript(script);
            assert.exists(uiSourceCode);
            assert.strictEqual(uiSourceCode.project().type(), _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_16__.Workspace.projectTypes.Network);
            // Set the breakpoint response for our upcoming request.
            void backend.responderToBreakpointByUrlRequest(URL, breakpointLine)({
                breakpointId: 'BREAK_ID',
                locations: [
                    {
                        scriptId: script.scriptId,
                        lineNumber: resolvedBreakpointLine,
                        columnNumber: 0,
                    },
                ],
            });
            // Register our interest in an outgoing 'resume', which should be sent as soon as
            // we have set up all breakpoints during the instrumentation pause.
            const resumeSentPromise = (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.registerListenerOnOutgoingMessage)('Debugger.resume');
            // Inform the front-end about an instrumentation break.
            backend.dispatchDebuggerPause(script, "instrumentation" /* Protocol.Debugger.PausedEventReason.Instrumentation */);
            // Wait for the breakpoints to be set, and the resume to be sent.
            await resumeSentPromise;
            // Verify that the network uiSourceCode has the breakpoint that we originally set
            // on the file system uiSourceCode.
            const reloadedBoundLocations = breakpointManager.breakpointLocationsForUISourceCode(uiSourceCode);
            assert.strictEqual(1, reloadedBoundLocations.length);
            assert.strictEqual(resolvedBreakpointLine, reloadedBoundLocations[0].uiLocation.lineNumber);
            assert.strictEqual(0, reloadedBoundLocations[0].uiLocation.columnNumber);
            project.dispose();
        }
        it('can restore breakpoints in scripts', async () => {
            const debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
            assert.exists(debuggerModel);
            const breakpointLine = 0;
            const resolvedBreakpointLine = 3;
            // Add script.
            const scriptInfo = { url: URL, content: 'console.log(\'hello\')' };
            const script = await backend.addScript(target, scriptInfo, null);
            // Get the uiSourceCode for the source.
            const uiSourceCode = debuggerWorkspaceBinding.uiSourceCodeForScript(script);
            assert.exists(uiSourceCode);
            // Set the breakpoint on the front-end/model side.
            const breakpoint = await breakpointManager.setBreakpoint(uiSourceCode, breakpointLine, 0, ...DEFAULT_BREAKPOINT);
            assert.exists(breakpoint);
            // Set the breakpoint response for our upcoming request.
            void backend.responderToBreakpointByUrlRequest(URL, breakpointLine)({
                breakpointId: 'BREAK_ID',
                locations: [
                    {
                        scriptId: script.scriptId,
                        lineNumber: resolvedBreakpointLine,
                        columnNumber: 0,
                    },
                ],
            });
            await breakpoint.refreshInDebugger();
            assert.deepEqual(Array.from(breakpoint.getUiSourceCodes()), [uiSourceCode]);
            // Verify the restored position.
            const boundLocations = breakpointManager.breakpointLocationsForUISourceCode(uiSourceCode);
            assert.strictEqual(1, boundLocations.length);
            assert.strictEqual(resolvedBreakpointLine, boundLocations[0].uiLocation.lineNumber);
            assert.strictEqual(0, boundLocations[0].uiLocation.columnNumber);
            // Disconnect from the target. This will also unload the script.
            breakpointManager.targetManager.removeTarget(target);
            // Make sure the source code for the script was removed from the breakpoint.
            assert.strictEqual(breakpoint.getUiSourceCodes().size, 0);
            // Remove the breakpoint.
            await breakpoint.remove(true /* keepInStorage */);
            // Create a new target.
            target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)();
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().setScopeTarget(target);
            const reloadedDebuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
            assert.exists(reloadedDebuggerModel);
            // Add the same script under a different scriptId.
            const reloadedScript = await backend.addScript(target, scriptInfo, null);
            // Get the uiSourceCode for the original source.
            const reloadedUiSourceCode = debuggerWorkspaceBinding.uiSourceCodeForScript(reloadedScript);
            assert.exists(reloadedUiSourceCode);
            // Set the breakpoint response for our upcoming request.
            void backend.responderToBreakpointByUrlRequest(URL, breakpointLine)({
                breakpointId: 'RELOADED_BREAK_ID',
                locations: [
                    {
                        scriptId: reloadedScript.scriptId,
                        lineNumber: resolvedBreakpointLine,
                        columnNumber: 0,
                    },
                ],
            });
            // Register our interest in an outgoing 'resume', which should be sent as soon as
            // we have set up all breakpoints during the instrumentation pause.
            const resumeSentPromise = (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.registerListenerOnOutgoingMessage)('Debugger.resume');
            // Inform the front-end about an instrumentation break.
            backend.dispatchDebuggerPause(reloadedScript, "instrumentation" /* Protocol.Debugger.PausedEventReason.Instrumentation */);
            // Wait for the breakpoints to be set, and the resume to be sent.
            await resumeSentPromise;
            // Verify the restored position.
            const reloadedBoundLocations = breakpointManager.breakpointLocationsForUISourceCode(reloadedUiSourceCode);
            assert.strictEqual(1, reloadedBoundLocations.length);
            assert.strictEqual(resolvedBreakpointLine, reloadedBoundLocations[0].uiLocation.lineNumber);
            assert.strictEqual(0, reloadedBoundLocations[0].uiLocation.columnNumber);
        });
        it('can restore breakpoints in a default-mapped inline scripts without sourceURL comment', async () => {
            const debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
            assert.exists(debuggerModel);
            // Add script.
            const script = await backend.addScript(target, inlineScriptDescription, null);
            // Get the uiSourceCode for the source. This is the uiSourceCode in the DefaultScriptMapping,
            // as we haven't registered the uiSourceCode for the html file.
            const uiSourceCode = await debuggerWorkspaceBinding.uiSourceCodeForScript(script);
            assert.exists(uiSourceCode);
            assert.strictEqual(uiSourceCode.project().type(), _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_16__.Workspace.projectTypes.Debugger);
            // Set the breakpoint on the front-end/model side. The line number is relative to the v8 script.
            const breakpoint = await breakpointManager.setBreakpoint(uiSourceCode, BREAKPOINT_SCRIPT_LINE, 0, ...DEFAULT_BREAKPOINT);
            assert.exists(breakpoint);
            // Set the breakpoint response for our upcoming request.
            void backend.responderToBreakpointByUrlRequest(URL_HTML, INLINE_BREAKPOINT_RAW_LINE)({
                breakpointId: 'BREAK_ID',
                locations: [
                    {
                        scriptId: script.scriptId,
                        lineNumber: INLINE_BREAKPOINT_RAW_LINE,
                        columnNumber: 0,
                    },
                ],
            });
            await breakpoint.refreshInDebugger();
            assert.deepEqual(Array.from(breakpoint.getUiSourceCodes()), [uiSourceCode]);
            // Verify the position.
            const boundLocations = breakpointManager.breakpointLocationsForUISourceCode(uiSourceCode);
            assert.strictEqual(1, boundLocations.length);
            assert.strictEqual(BREAKPOINT_SCRIPT_LINE, boundLocations[0].uiLocation.lineNumber);
            assert.strictEqual(0, boundLocations[0].uiLocation.columnNumber);
            // Disconnect from the target. This will also unload the script.
            breakpointManager.targetManager.removeTarget(target);
            // Make sure the source code for the script was removed from the breakpoint.
            assert.strictEqual(breakpoint.getUiSourceCodes().size, 0);
            // Remove the breakpoint.
            await breakpoint.remove(true /* keepInStorage */);
            // Create a new target.
            target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)();
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().setScopeTarget(target);
            const reloadedDebuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
            assert.exists(reloadedDebuggerModel);
            // Add the same script under a different scriptId.
            const reloadedScript = await backend.addScript(target, inlineScriptDescription, null);
            // Get the uiSourceCode for the source. This is the uiSourceCode in the DefaultScriptMapping,
            // as we haven't registered the uiSourceCode for the html file.
            const reloadedUiSourceCode = debuggerWorkspaceBinding.uiSourceCodeForScript(reloadedScript);
            assert.exists(reloadedUiSourceCode);
            assert.strictEqual(reloadedUiSourceCode.project().type(), _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_16__.Workspace.projectTypes.Debugger);
            // Set the breakpoint response for our upcoming request.
            void backend.responderToBreakpointByUrlRequest(URL_HTML, INLINE_BREAKPOINT_RAW_LINE)({
                breakpointId: 'RELOADED_BREAK_ID',
                locations: [
                    {
                        scriptId: reloadedScript.scriptId,
                        lineNumber: INLINE_BREAKPOINT_RAW_LINE,
                        columnNumber: 0,
                    },
                ],
            });
            // Register our interest in an outgoing 'resume', which should be sent as soon as
            // we have set up all breakpoints during the instrumentation pause.
            const resumeSentPromise = (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.registerListenerOnOutgoingMessage)('Debugger.resume');
            // Inform the front-end about an instrumentation break.
            backend.dispatchDebuggerPause(reloadedScript, "instrumentation" /* Protocol.Debugger.PausedEventReason.Instrumentation */);
            // Wait for the breakpoints to be set, and the resume to be sent.
            await resumeSentPromise;
            // Verify the restored position.
            const reloadedBoundLocations = breakpointManager.breakpointLocationsForUISourceCode(reloadedUiSourceCode);
            assert.strictEqual(1, reloadedBoundLocations.length);
            assert.deepEqual(reloadedBoundLocations[0].uiLocation.uiSourceCode, reloadedUiSourceCode);
            assert.strictEqual(BREAKPOINT_SCRIPT_LINE, reloadedBoundLocations[0].uiLocation.lineNumber);
            assert.strictEqual(0, reloadedBoundLocations[0].uiLocation.columnNumber);
        });
        it('can restore breakpoints in an inline script without sourceURL comment', async () => {
            const debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
            assert.exists(debuggerModel);
            function dispatchDocumentOpened() {
                (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.dispatchEvent)(target, 'Page.documentOpened', {
                    frame: {
                        id: 'main',
                        loaderId: 'foo',
                        url: URL_HTML,
                        domainAndRegistry: 'example.com',
                        securityOrigin: 'https://example.com/',
                        mimeType: 'text/html',
                        secureContextType: "Secure" /* Protocol.Page.SecureContextType.Secure */,
                        crossOriginIsolatedContextType: "Isolated" /* Protocol.Page.CrossOriginIsolatedContextType.Isolated */,
                        gatedAPIFeatures: [],
                    },
                });
            }
            dispatchDocumentOpened();
            // Add script.
            const script = await backend.addScript(target, inlineScriptDescription, null);
            // Get the uiSourceCode for the source: this should be the uiSourceCode of the actual html script.
            const uiSourceCode = await debuggerWorkspaceBinding.uiSourceCodeForScript(script);
            assert.exists(uiSourceCode);
            assert.strictEqual(uiSourceCode.project().type(), _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_16__.Workspace.projectTypes.Network);
            // Set the breakpoint on the front-end/model side of the html uiSourceCode.
            const breakpoint = await breakpointManager.setBreakpoint(uiSourceCode, INLINE_BREAKPOINT_RAW_LINE, 0, ...DEFAULT_BREAKPOINT);
            assert.exists(breakpoint);
            // Set the breakpoint response for our upcoming request to set a breakpoint on the raw location.
            void backend.responderToBreakpointByUrlRequest(URL_HTML, INLINE_BREAKPOINT_RAW_LINE)({
                breakpointId: 'BREAK_ID',
                locations: [
                    {
                        scriptId: script.scriptId,
                        lineNumber: INLINE_BREAKPOINT_RAW_LINE,
                        columnNumber: 0,
                    },
                ],
            });
            await breakpoint.refreshInDebugger();
            assert.deepEqual(Array.from(breakpoint.getUiSourceCodes()), [uiSourceCode]);
            // Verify the position.
            const boundLocations = breakpointManager.breakpointLocationsForUISourceCode(uiSourceCode);
            assert.strictEqual(1, boundLocations.length);
            assert.strictEqual(INLINE_BREAKPOINT_RAW_LINE, boundLocations[0].uiLocation.lineNumber);
            assert.strictEqual(0, boundLocations[0].uiLocation.columnNumber);
            // Disconnect from the target. This will also unload the script.
            breakpointManager.targetManager.removeTarget(target);
            // Make sure the source code for the script was removed from the breakpoint.
            assert.strictEqual(breakpoint.getUiSourceCodes().size, 0);
            // Remove the breakpoint.
            await breakpoint.remove(true /* keepInStorage */);
            // Create a new target.
            target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)();
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().setScopeTarget(target);
            const reloadedDebuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
            assert.exists(reloadedDebuggerModel);
            dispatchDocumentOpened();
            // Add the same script under a different scriptId.
            const reloadedScript = await backend.addScript(target, inlineScriptDescription, null);
            // Get the uiSourceCode for the source: this should be the uiSourceCode of the actual html script.
            const reloadedUiSourceCode = debuggerWorkspaceBinding.uiSourceCodeForScript(reloadedScript);
            assert.exists(reloadedUiSourceCode);
            assert.strictEqual(reloadedUiSourceCode.project().type(), _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_16__.Workspace.projectTypes.Network);
            // Set the breakpoint response for our upcoming request.
            void backend.responderToBreakpointByUrlRequest(URL_HTML, INLINE_BREAKPOINT_RAW_LINE)({
                breakpointId: 'RELOADED_BREAK_ID',
                locations: [
                    {
                        scriptId: reloadedScript.scriptId,
                        lineNumber: INLINE_BREAKPOINT_RAW_LINE,
                        columnNumber: 0,
                    },
                ],
            });
            // Register our interest in an outgoing 'resume', which should be sent as soon as
            // we have set up all breakpoints during the instrumentation pause.
            const resumeSentPromise = (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.registerListenerOnOutgoingMessage)('Debugger.resume');
            // Inform the front-end about an instrumentation break.
            backend.dispatchDebuggerPause(reloadedScript, "instrumentation" /* Protocol.Debugger.PausedEventReason.Instrumentation */);
            // Wait for the breakpoints to be set, and the resume to be sent.
            await resumeSentPromise;
            // Verify the restored position.
            const reloadedBoundLocations = breakpointManager.breakpointLocationsForUISourceCode(reloadedUiSourceCode);
            assert.strictEqual(1, reloadedBoundLocations.length);
            assert.deepEqual(reloadedBoundLocations[0].uiLocation.uiSourceCode, reloadedUiSourceCode);
            assert.strictEqual(INLINE_BREAKPOINT_RAW_LINE, reloadedBoundLocations[0].uiLocation.lineNumber);
            assert.strictEqual(0, reloadedBoundLocations[0].uiLocation.columnNumber);
        });
        it('can restore breakpoints in source mapped scripts', async () => {
            (0,_testing_SourceMapHelpers_js__WEBPACK_IMPORTED_MODULE_10__.setupPageResourceLoaderForSourceMap)(sourceMapContent);
            const debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
            assert.exists(debuggerModel);
            // Add script with source map.
            const scriptInfo = { url: URL, content: COMPILED_SCRIPT_SOURCES_CONTENT };
            const sourceMapInfo = { url: SOURCE_MAP_URL, content: sourceMapContent };
            const script = await backend.addScript(target, scriptInfo, sourceMapInfo);
            // Get the uiSourceCode for the original source.
            const uiSourceCode = await debuggerWorkspaceBinding.uiSourceCodeForSourceMapSourceURLPromise(debuggerModel, ORIGINAL_SCRIPT_SOURCE_URL, script.isContentScript());
            assert.exists(uiSourceCode);
            // Set the breakpoint on the front-end/model side.
            const breakpoint = await breakpointManager.setBreakpoint(uiSourceCode, 0, 0, ...DEFAULT_BREAKPOINT);
            assert.exists(breakpoint);
            // Set the breakpoint response for our upcoming request.
            void backend.responderToBreakpointByUrlRequest(URL, 0)({
                breakpointId: 'BREAK_ID',
                locations: [
                    {
                        scriptId: script.scriptId,
                        lineNumber: 0,
                        columnNumber: 9,
                    },
                ],
            });
            await breakpoint.refreshInDebugger();
            assert.deepEqual(Array.from(breakpoint.getUiSourceCodes()), [uiSourceCode]);
            // Verify the restored position.
            const boundLocations = breakpointManager.breakpointLocationsForUISourceCode(uiSourceCode);
            assert.strictEqual(1, boundLocations.length);
            assert.strictEqual(0, boundLocations[0].uiLocation.lineNumber);
            assert.strictEqual(9, boundLocations[0].uiLocation.columnNumber);
            // Disconnect from the target. This will also unload the script.
            breakpointManager.targetManager.removeTarget(target);
            // Make sure the source code for the script was removed from the breakpoint.
            assert.strictEqual(breakpoint.getUiSourceCodes().size, 0);
            // Remove the breakpoint.
            await breakpoint.remove(true /* keepInStorage */);
            // Create a new target.
            target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)();
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().setScopeTarget(target);
            const reloadedDebuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
            assert.exists(reloadedDebuggerModel);
            // Add the same script under a different scriptId.
            const reloadedScript = await backend.addScript(target, scriptInfo, sourceMapInfo);
            // Get the uiSourceCode for the original source.
            const reloadedUiSourceCode = await debuggerWorkspaceBinding.uiSourceCodeForSourceMapSourceURLPromise(reloadedDebuggerModel, ORIGINAL_SCRIPT_SOURCE_URL, reloadedScript.isContentScript());
            assert.exists(uiSourceCode);
            const unboundLocation = breakpointManager.breakpointLocationsForUISourceCode(reloadedUiSourceCode);
            assert.strictEqual(1, unboundLocation.length);
            assert.strictEqual(0, unboundLocation[0].uiLocation.lineNumber);
            assert.strictEqual(0, unboundLocation[0].uiLocation.columnNumber);
            // Set the breakpoint response for our upcoming request.
            void backend.responderToBreakpointByUrlRequest(URL, 0)({
                breakpointId: 'RELOADED_BREAK_ID',
                locations: [{
                        scriptId: reloadedScript.scriptId,
                        lineNumber: 0,
                        columnNumber: 9,
                    }],
            });
            // Register our interest in an outgoing 'resume', which should be sent as soon as
            // we have set up all breakpoints during the instrumentation pause.
            const resumeSentPromise = (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.registerListenerOnOutgoingMessage)('Debugger.resume');
            // Inform the front-end about an instrumentation break.
            backend.dispatchDebuggerPause(reloadedScript, "instrumentation" /* Protocol.Debugger.PausedEventReason.Instrumentation */);
            // Wait for the breakpoints to be set, and the resume to be sent.
            await resumeSentPromise;
            // Verify the restored position.
            const reloadedBoundLocations = breakpointManager.breakpointLocationsForUISourceCode(reloadedUiSourceCode);
            assert.strictEqual(1, reloadedBoundLocations.length);
            assert.strictEqual(0, reloadedBoundLocations[0].uiLocation.lineNumber);
            assert.strictEqual(9, reloadedBoundLocations[0].uiLocation.columnNumber);
        });
        it('can restore breakpoints in scripts with language plugins', async () => {
            const { pluginManager } = _bindings_bindings_js__WEBPACK_IMPORTED_MODULE_12__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance();
            const scriptInfo = { url: URL, content: '' };
            const script = await backend.addScript(target, scriptInfo, null);
            class Plugin extends _testing_LanguagePluginHelpers_js__WEBPACK_IMPORTED_MODULE_4__.TestPlugin {
                constructor() {
                    super('InstrumentationBreakpoints');
                }
                handleScript(_) {
                    return true;
                }
                async sourceLocationToRawLocation(sourceLocation) {
                    const { rawModuleId, columnNumber, lineNumber, sourceFileURL } = sourceLocation;
                    if (lineNumber === 0 && columnNumber === 0 && sourceFileURL === 'test.cc') {
                        return [{ rawModuleId, startOffset: 0, endOffset: 0 }];
                    }
                    return [];
                }
                async rawLocationToSourceLocation(rawLocation) {
                    let sourceLocations = [];
                    if (rawLocation.codeOffset === 0) {
                        sourceLocations =
                            [{ rawModuleId: rawLocation.rawModuleId, columnNumber: 0, lineNumber: 0, sourceFileURL: 'test.cc' }];
                    }
                    return sourceLocations;
                }
                async addRawModule(_rawModuleId, _symbolsURL, _rawModule) {
                    return ['test.cc']; // need to return something to get the script associated with the plugin.
                }
            }
            // Create a plugin that is able to produce a mapping for our script.
            pluginManager.addPlugin(new Plugin());
            const debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
            assert.exists(debuggerModel);
            let sourceURL;
            const sources = await pluginManager.getSourcesForScript(script); // wait for plugin source setup to finish.
            if (!Array.isArray(sources)) {
                assert.fail('Sources is expected to be an array of sourceURLs');
            }
            else {
                assert.lengthOf(sources, 1);
                sourceURL = sources[0];
            }
            assert.exists(sourceURL);
            // Get the uiSourceCode for the original source.
            const uiSourceCode = await debuggerWorkspaceBinding.uiSourceCodeForDebuggerLanguagePluginSourceURLPromise(debuggerModel, sourceURL);
            assert.exists(uiSourceCode);
            // Set the breakpoint on the front-end/model side.
            const breakpoint = await breakpointManager.setBreakpoint(uiSourceCode, 0, 0, ...DEFAULT_BREAKPOINT);
            assert.exists(breakpoint);
            // Set the breakpoint response for our upcoming request.
            void backend.responderToBreakpointByUrlRequest(URL, 0)({
                breakpointId: 'BREAK_ID',
                locations: [
                    {
                        scriptId: script.scriptId,
                        lineNumber: 0,
                        columnNumber: 0,
                    },
                ],
            });
            // Await breakpoint updates.
            await breakpoint.refreshInDebugger();
            assert.deepEqual(Array.from(breakpoint.getUiSourceCodes()), [uiSourceCode]);
            // Verify the bound position.
            const boundLocations = breakpointManager.breakpointLocationsForUISourceCode(uiSourceCode);
            assert.strictEqual(1, boundLocations.length);
            assert.strictEqual(0, boundLocations[0].uiLocation.lineNumber);
            assert.strictEqual(0, boundLocations[0].uiLocation.columnNumber);
            // Disconnect from the target. This will also unload the script.
            breakpointManager.targetManager.removeTarget(target);
            // Make sure the source code for the script was removed from the breakpoint.
            assert.strictEqual(breakpoint.getUiSourceCodes().size, 0);
            // Remove the breakpoint.
            await breakpoint.remove(true /* keepInStorage */);
            // Create a new target.
            target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)();
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().setScopeTarget(target);
            const reloadedDebuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
            assert.exists(reloadedDebuggerModel);
            // Add the same script under a different scriptId.
            const reloadedScript = await backend.addScript(target, scriptInfo, null);
            // Get the uiSourceCode for the original source.
            const reloadedUiSourceCode = await debuggerWorkspaceBinding.uiSourceCodeForDebuggerLanguagePluginSourceURLPromise(reloadedDebuggerModel, sourceURL);
            assert.exists(reloadedUiSourceCode);
            // Set the breakpoint response for our upcoming request.
            void backend.responderToBreakpointByUrlRequest(URL, 0)({
                breakpointId: 'RELOADED_BREAK_ID',
                locations: [{
                        scriptId: reloadedScript.scriptId,
                        lineNumber: 0,
                        columnNumber: 0,
                    }],
            });
            // Register our interest in an outgoing 'resume', which should be sent as soon as
            // we have set up all breakpoints during the instrumentation pause.
            const resumeSentPromise = (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.registerListenerOnOutgoingMessage)('Debugger.resume');
            // Inform the front-end about an instrumentation break.
            backend.dispatchDebuggerPause(reloadedScript, "instrumentation" /* Protocol.Debugger.PausedEventReason.Instrumentation */);
            // Wait for the breakpoints to be set, and the resume to be sent.
            await resumeSentPromise;
            // Verify the restored position.
            const reloadedBoundLocations = breakpointManager.breakpointLocationsForUISourceCode(reloadedUiSourceCode);
            assert.strictEqual(1, reloadedBoundLocations.length);
            assert.strictEqual(0, reloadedBoundLocations[0].uiLocation.lineNumber);
            assert.strictEqual(0, reloadedBoundLocations[0].uiLocation.columnNumber);
        });
        it('can move breakpoints to network files that are set in matching file system files', async () => {
            const workspace = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_16__.Workspace.WorkspaceImpl.instance();
            _persistence_persistence_js__WEBPACK_IMPORTED_MODULE_14__.Persistence.PersistenceImpl.instance({ forceNew: true, workspace, breakpointManager });
            const fileName = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.extractName(scriptDescription.url);
            const fileSystemPath = 'file://path/to/filesystem';
            const fileSystemFileUrl = fileSystemPath + '/' + fileName;
            await testBreakpointMovedOnInstrumentationBreak(fileSystemPath, fileSystemFileUrl, scriptDescription.content);
        });
        it('can move breakpoints to network files that are set in override files', async () => {
            const workspace = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_16__.Workspace.WorkspaceImpl.instance();
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManager.MultitargetNetworkManager.instance({ forceNew: true });
            _persistence_persistence_js__WEBPACK_IMPORTED_MODULE_14__.Persistence.PersistenceImpl.instance({ forceNew: true, workspace, breakpointManager });
            _persistence_persistence_js__WEBPACK_IMPORTED_MODULE_14__.NetworkPersistenceManager.NetworkPersistenceManager.instance({ forceNew: true, workspace: _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_16__.Workspace.WorkspaceImpl.instance() });
            const fileSystemPath = 'file://path/to/overrides';
            const fielSystemFileUrl = fileSystemPath + '/site/script.js';
            const type = 'overrides';
            const content = '';
            await testBreakpointMovedOnInstrumentationBreak(fileSystemPath, fielSystemFileUrl, content, type);
        });
    });
    it('removes breakpoints that resolve to the same uiLocation as a previous breakpoint', async () => {
        const scriptInfo = { url: URL, content: 'console.log(\'hello\');' };
        const script = await backend.addScript(target, scriptInfo, null);
        const debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
        assert.exists(debuggerModel);
        // Set the breakpoint response for our upcoming requests. Both breakpoints should resolve
        // to the same raw location in order to have a clash.
        void backend.responderToBreakpointByUrlRequest(URL, 0)({
            breakpointId: 'BREAK_ID',
            locations: [{
                    scriptId: script.scriptId,
                    lineNumber: 0,
                    columnNumber: 0,
                }],
        });
        void backend.responderToBreakpointByUrlRequest(URL, 2)({
            breakpointId: 'SLIDING_BREAK_ID',
            locations: [{
                    scriptId: script.scriptId,
                    lineNumber: 0,
                    columnNumber: 0,
                }],
        });
        const uiSourceCode = await uiSourceCodeFromScript(debuggerModel, script);
        assert.exists(uiSourceCode);
        // Set the breakpoint on the front-end/model side.
        const breakpoint = await breakpointManager.setBreakpoint(uiSourceCode, 0, 0, ...DEFAULT_BREAKPOINT);
        assert.exists(breakpoint);
        // This breakpoint will slide to lineNumber: 0, columnNumber: 0 and thus
        // clash with the previous breakpoint.
        const slidingBreakpoint = await breakpointManager.setBreakpoint(uiSourceCode, 2, 0, ...DEFAULT_BREAKPOINT);
        assert.exists(slidingBreakpoint);
        // Wait until both breakpoints have run their updates.
        await breakpoint.refreshInDebugger();
        await slidingBreakpoint.refreshInDebugger();
        // The first breakpoint is kept on a clash, the second one should be removed.
        assert.isFalse(breakpoint.isRemoved);
        assert.isTrue(slidingBreakpoint.isRemoved);
    });
    it('Breakpoint does not keep file system source code alive after file system removal', async () => {
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.enableForTest("instrumentation-breakpoints" /* Root.Runtime.ExperimentName.INSTRUMENTATION_BREAKPOINTS */);
        const breakpointLine = 0;
        const resolvedBreakpointLine = 1;
        const workspace = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_16__.Workspace.WorkspaceImpl.instance();
        const persistence = _persistence_persistence_js__WEBPACK_IMPORTED_MODULE_14__.Persistence.PersistenceImpl.instance({ forceNew: true, workspace, breakpointManager });
        _persistence_persistence_js__WEBPACK_IMPORTED_MODULE_14__.NetworkPersistenceManager.NetworkPersistenceManager.instance({ forceNew: true, workspace: _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_16__.Workspace.WorkspaceImpl.instance() });
        // Create a file system project and source code.
        const fileName = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.extractName(scriptDescription.url);
        const fileSystemPath = 'file://path/to/filesystem';
        const fileSystemFileUrl = fileSystemPath + '/' + fileName;
        const { uiSourceCode: fileSystemUiSourceCode, project } = (0,_testing_PersistenceHelpers_js__WEBPACK_IMPORTED_MODULE_7__.createFileSystemFileForPersistenceTests)({ fileSystemFileUrl, fileSystemPath }, scriptDescription.url, scriptDescription.content, target);
        const debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
        assert.exists(debuggerModel);
        // Add the same script via the debugger protocol.
        const bindingCreatedPromise = persistence.once(_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_14__.Persistence.Events.BindingCreated);
        const script = await backend.addScript(target, scriptDescription, null);
        const uiSourceCode = await uiSourceCodeFromScript(debuggerModel, script);
        await bindingCreatedPromise;
        assert.exists(uiSourceCode);
        // Set the breakpoint on the (network) script.
        void backend.responderToBreakpointByUrlRequest(URL, breakpointLine)({
            breakpointId: 'BREAK_ID',
            locations: [
                {
                    scriptId: script.scriptId,
                    lineNumber: resolvedBreakpointLine,
                    columnNumber: 0,
                },
            ],
        });
        await breakpointManager.setBreakpoint(uiSourceCode, breakpointLine, 0, ...DEFAULT_BREAKPOINT);
        // Remove the file system project.
        const bindingRemovedPromise = persistence.once(_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_14__.Persistence.Events.BindingRemoved);
        project.dispose();
        // Make sure the binding is removed.
        await bindingRemovedPromise;
        // After this, the breakpoint manager should not refer to the file system source code anymore, but
        // the file system breakpoint location should be in the storage.
        assert.isEmpty(breakpointManager.breakpointLocationsForUISourceCode(fileSystemUiSourceCode));
        assert.strictEqual(breakpointManager.storage.breakpointItems(fileSystemUiSourceCode.url()).length, 1);
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.disableForTest("instrumentation-breakpoints" /* Root.Runtime.ExperimentName.INSTRUMENTATION_BREAKPOINTS */);
    });
    it('Breakpoints are set only into network project', async () => {
        const breakpointLine = 0;
        const workspace = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_16__.Workspace.WorkspaceImpl.instance();
        const persistence = _persistence_persistence_js__WEBPACK_IMPORTED_MODULE_14__.Persistence.PersistenceImpl.instance({ forceNew: true, workspace, breakpointManager });
        _persistence_persistence_js__WEBPACK_IMPORTED_MODULE_14__.NetworkPersistenceManager.NetworkPersistenceManager.instance({ forceNew: true, workspace: _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_16__.Workspace.WorkspaceImpl.instance() });
        // Create a file system project and source code.
        const fileName = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.extractName(scriptDescription.url);
        const fileSystemPath = 'file://path/to/filesystem';
        const fileSystemFileUrl = fileSystemPath + '/' + fileName;
        (0,_testing_PersistenceHelpers_js__WEBPACK_IMPORTED_MODULE_7__.createFileSystemFileForPersistenceTests)({ fileSystemFileUrl, fileSystemPath }, scriptDescription.url, scriptDescription.content, target);
        const debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
        assert.exists(debuggerModel);
        // Add the same script with the same URL via the debugger protocol.
        const bindingCreatedPromise = persistence.once(_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_14__.Persistence.Events.BindingCreated);
        const fileScriptDescription = { ...scriptDescription, url: fileSystemFileUrl };
        const script = await backend.addScript(target, fileScriptDescription, null);
        const uiSourceCode = await uiSourceCodeFromScript(debuggerModel, script);
        await bindingCreatedPromise;
        assert.exists(uiSourceCode);
        let addedBreakpoint = null;
        breakpointManager.addEventListener(_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_13__.BreakpointManager.Events.BreakpointAdded, ({ data: { breakpoint } }) => {
            assert.isNull(addedBreakpoint, 'More than one breakpoint was added');
            addedBreakpoint = breakpoint;
        });
        // Set the breakpoint on the (network) script.
        void backend.responderToBreakpointByUrlRequest(fileSystemFileUrl, breakpointLine)({
            breakpointId: 'BREAK_ID',
            locations: [
                {
                    scriptId: script.scriptId,
                    lineNumber: 3,
                    columnNumber: 3,
                },
            ],
        });
        const breakpoint = await breakpointManager.setBreakpoint(uiSourceCode, breakpointLine, undefined, ...DEFAULT_BREAKPOINT);
        assert.exists(breakpoint);
        // Expect that the breakpoint is only added to the network UI source code.
        assert.strictEqual(breakpoint, addedBreakpoint);
        assert.deepStrictEqual(Array.from(breakpoint.getUiSourceCodes()), [uiSourceCode]);
    });
    it('updates a breakpoint after live editing the underlying script', async () => {
        const scriptInfo = { url: URL, content: 'console.log(\'hello\');' };
        const script = await backend.addScript(target, scriptInfo, null);
        const debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
        assert.exists(debuggerModel);
        void backend.responderToBreakpointByUrlRequest(URL, 0)({
            breakpointId: 'BREAK_ID',
            locations: [{
                    scriptId: script.scriptId,
                    lineNumber: 0,
                    columnNumber: 0,
                }],
        });
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.setMockConnectionResponseHandler)('Debugger.setScriptSource', () => ({ status: "Ok" /* Protocol.Debugger.SetScriptSourceResponseStatus.Ok */ }));
        const uiSourceCode = await uiSourceCodeFromScript(debuggerModel, script);
        assert.exists(uiSourceCode);
        // Set the breakpoint on the front-end/model side.
        const breakpoint = await breakpointManager.setBreakpoint(uiSourceCode, 0, 0, ...DEFAULT_BREAKPOINT);
        assert.exists(breakpoint);
        // Wait for the breakpoint to be set in the backend.
        await breakpoint.refreshInDebugger();
        // Simulate live editing. We do this from the UISourceCode instead of the `Script`
        // so the `ResourceScriptFile` updates the LiveLocation of the `ModelBreakpoint`
        // (which in turn updates the UILocation on the breakpoint).
        uiSourceCode.setWorkingCopy('\n\nconsole.log(\'hello\');');
        uiSourceCode.commitWorkingCopy();
        // Note that `UISourceCode` does not actually track how a breakpoint moves. This
        // is normally done by CodeMirror + DebuggerPlugin. This means even though the
        // console.log moves two lines down, we still try to reset the breakpoint on line 0.
        await backend.responderToBreakpointByUrlRequest(URL, 0)({
            breakpointId: 'BREAK_ID',
            locations: [{
                    scriptId: script.scriptId,
                    lineNumber: 0,
                    columnNumber: 0,
                }],
        });
    });
    describe('can correctly set breakpoints for all pre-registered targets', () => {
        let mainUiSourceCode;
        let workerUiSourceCode;
        let workerScript;
        let mainScript;
        let breakpoint;
        function waitForBreakpointLocationsAdded() {
            let twoBreakpointLocationsCallback;
            const twoBreakpointLocationsAddedPromise = new Promise(resolve => {
                twoBreakpointLocationsCallback = resolve;
            });
            breakpointManager.addEventListener(_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_13__.BreakpointManager.Events.BreakpointAdded, () => {
                if (breakpointManager.allBreakpointLocations().length === 2) {
                    twoBreakpointLocationsCallback();
                }
            });
            return twoBreakpointLocationsAddedPromise;
        }
        beforeEach(async () => {
            (0,_testing_SourceMapHelpers_js__WEBPACK_IMPORTED_MODULE_10__.setupPageResourceLoaderForSourceMap)(sourceMapContent);
            // Create a worker target.
            const workerTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)({ name: 'worker', parentTarget: target });
            // Add script with source map.
            const scriptInfo = { url: URL, content: COMPILED_SCRIPT_SOURCES_CONTENT };
            const sourceMapInfo = { url: SOURCE_MAP_URL, content: sourceMapContent };
            mainScript = await backend.addScript(target, scriptInfo, sourceMapInfo);
            workerScript = await backend.addScript(workerTarget, scriptInfo, sourceMapInfo);
            // Get the uiSourceCode for the original source in the main target.
            mainUiSourceCode = await debuggerWorkspaceBinding.uiSourceCodeForSourceMapSourceURLPromise(mainScript.debuggerModel, ORIGINAL_SCRIPT_SOURCE_URL, mainScript.isContentScript());
            assert.exists(mainUiSourceCode);
            // Get the uiSourceCode for the original source in the worker target.
            workerUiSourceCode = await debuggerWorkspaceBinding.uiSourceCodeForSourceMapSourceURLPromise(workerScript.debuggerModel, ORIGINAL_SCRIPT_SOURCE_URL, workerScript.isContentScript());
            assert.exists(mainUiSourceCode);
            // Stub the 'modelAdded' function that is called in the Breakpoint prototype.
            // The 'modelAdded' will kick off updating the debugger of each target
            // as soon as a new breakpoint was created.
            // By stubbing it and ignoring what should be done,
            // we can manually call 'modelAdded' in the order that we want,
            // and thus control which target is taken care of first.
            const modelAddedStub = sinon.stub(_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_13__.BreakpointManager.Breakpoint.prototype, 'modelAdded').callsFake((() => { }));
            // Set the breakpoint on the main target, but note that the debugger won't be updated.
            const bp = await breakpointManager.setBreakpoint(mainUiSourceCode, 0, 0, ...DEFAULT_BREAKPOINT);
            assert.exists(bp);
            breakpoint = bp;
            // Now restore the actual behavior of 'modelAdded'.
            modelAddedStub.restore();
        });
        it('if the target whose uiSourceCode was used for breakpoint setting is handled last', async () => {
            // Handle setting breakpoint on the worker first.
            breakpoint.modelAdded(workerScript.debuggerModel);
            await backend.responderToBreakpointByUrlRequest(URL, 0)({
                breakpointId: 'WORKER_ID',
                locations: [
                    {
                        scriptId: workerScript.scriptId,
                        lineNumber: 0,
                        columnNumber: 0,
                    },
                ],
            });
            // Handle setting breakpoint on the main target next.
            breakpoint.modelAdded(mainScript.debuggerModel);
            await backend.responderToBreakpointByUrlRequest(URL, 0)({
                breakpointId: 'MAIN_BREAK_ID',
                locations: [
                    {
                        scriptId: mainScript.scriptId,
                        lineNumber: 0,
                        columnNumber: 0,
                    },
                ],
            });
            await waitForBreakpointLocationsAdded();
            assert.deepEqual(Array.from(breakpoint.getUiSourceCodes()), [mainUiSourceCode, workerUiSourceCode]);
            const mainBoundLocations = breakpointManager.breakpointLocationsForUISourceCode(mainUiSourceCode);
            assert.strictEqual(1, mainBoundLocations.length);
            const workerBoundLocations = breakpointManager.breakpointLocationsForUISourceCode(workerUiSourceCode);
            assert.strictEqual(1, workerBoundLocations.length);
        });
        it('if the target whose uiSourceCode was used for breakpoint setting is handled first', async () => {
            // Handle setting breakpoint on the main target first.
            breakpoint.modelAdded(mainScript.debuggerModel);
            await backend.responderToBreakpointByUrlRequest(URL, 0)({
                breakpointId: 'MAIN_BREAK_ID',
                locations: [
                    {
                        scriptId: mainScript.scriptId,
                        lineNumber: 0,
                        columnNumber: 0,
                    },
                ],
            });
            // Handle setting breakpoint on the worker next.
            breakpoint.modelAdded(workerScript.debuggerModel);
            await backend.responderToBreakpointByUrlRequest(URL, 0)({
                breakpointId: 'WORKER_ID',
                locations: [
                    {
                        scriptId: workerScript.scriptId,
                        lineNumber: 0,
                        columnNumber: 0,
                    },
                ],
            });
            await waitForBreakpointLocationsAdded();
            assert.deepEqual(Array.from(breakpoint.getUiSourceCodes()), [mainUiSourceCode, workerUiSourceCode]);
            const mainBoundLocations = breakpointManager.breakpointLocationsForUISourceCode(mainUiSourceCode);
            assert.strictEqual(1, mainBoundLocations.length);
            const workerBoundLocations = breakpointManager.breakpointLocationsForUISourceCode(workerUiSourceCode);
            assert.strictEqual(1, workerBoundLocations.length);
        });
    });
    describe('supports modern Web development workflows', () => {
        it('supports webpack code splitting', async () => {
            // This is basically the "Shared code with webpack entry point code-splitting" scenario
            // outlined in http://go/devtools-source-identities, where two routes (`route1.ts` and
            // `route2.ts`) share some common code (`shared.ts`), and webpack is configured to spit
            // out a dedicated bundle for each route (`route1.js` and `route2.js`). The demo can be
            // found at https://devtools-source-identities.glitch.me/webpack-code-split/ for further
            // reference.
            const sourceRoot = 'webpack:///src';
            // Load the script and source map for the first route.
            const route1ScriptInfo = {
                url: 'http://example.com/route1.js',
                content: 'function f(x){}\nf(1)',
            };
            const route1SourceMapInfo = {
                url: `${route1ScriptInfo.url}.map`,
                content: (0,_testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_9__.encodeSourceMap)(['0:0 => shared.ts:0:0', '1:0 => route1.ts:0:0'], sourceRoot),
            };
            const [firstSharedUISourceCode, route1Script] = await Promise.all([
                debuggerWorkspaceBinding.waitForUISourceCodeAdded(`${sourceRoot}/shared.ts`, target),
                backend.addScript(target, route1ScriptInfo, route1SourceMapInfo),
            ]);
            // Set a breakpoint in `shared.ts`.
            await Promise.all([
                backend.responderToBreakpointByUrlRequest(route1ScriptInfo.url, 0)({
                    breakpointId: 'ROUTE1_JS_BREAK_INITIAL_ID',
                    locations: [
                        {
                            scriptId: route1Script.scriptId,
                            lineNumber: 0,
                            columnNumber: 0,
                        },
                    ],
                }),
                breakpointManager.setBreakpoint(firstSharedUISourceCode, 0, 0, ...DEFAULT_BREAKPOINT),
            ]);
            // Now inject a second route that also references `shared.ts`, which should trigger
            // removal of the original breakpoint in `route1.js`.
            const route2ScriptInfo = {
                url: 'http://example.com/route2.js',
                content: 'function f(x){}\nf(2)',
            };
            const route2SourceMapInfo = {
                url: `${route2ScriptInfo.url}.map`,
                content: (0,_testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_9__.encodeSourceMap)(['0:0 => shared.ts:0:0', '1:0 => route2.ts:0:0'], sourceRoot),
            };
            const route1SetBreakpointByUrlRequest = backend.responderToBreakpointByUrlRequest(route1ScriptInfo.url, 0);
            const route2SetBreakpointByUrlRequest = backend.responderToBreakpointByUrlRequest(route2ScriptInfo.url, 0);
            const [, route2Script] = await Promise.all([
                backend.breakpointRemovedPromise('ROUTE1_JS_BREAK_INITIAL_ID'),
                backend.addScript(target, route2ScriptInfo, route2SourceMapInfo),
            ]);
            // Now the BreakpointManager should migrate the breakpoints from the
            // first `shared.ts` to the second `shared.ts`.
            await Promise.all([
                route1SetBreakpointByUrlRequest({
                    breakpointId: 'ROUTE1_JS_BREAK_ID',
                    locations: [
                        {
                            scriptId: route1Script.scriptId,
                            lineNumber: 0,
                            columnNumber: 0,
                        },
                    ],
                }),
                route2SetBreakpointByUrlRequest({
                    breakpointId: 'ROUTE2_JS_BREAK_ID',
                    locations: [
                        {
                            scriptId: route2Script.scriptId,
                            lineNumber: 0,
                            columnNumber: 0,
                        },
                    ],
                }),
            ]);
        });
    });
});
//# sourceMappingURL=BreakpointManager.test.js.map

/***/ }),

/***/ "./testing/LanguagePluginHelpers.js":
/*!******************************************!*\
  !*** ./testing/LanguagePluginHelpers.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestPlugin: () => (/* binding */ TestPlugin)
/* harmony export */ });
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class TestPlugin {
    constructor(name) {
        this.name = name;
    }
    name;
    handleScript(_script) {
        return false;
    }
    createPageResourceLoadInitiator() {
        const extensionId = 'chrome-extension-id';
        return {
            target: null,
            frameId: null,
            extensionId,
            initiatorUrl: extensionId,
        };
    }
    async evaluate(_expression, _context, _stopId) {
        return null;
    }
    async getProperties(_objectId) {
        return [];
    }
    async releaseObject(_objectId) {
    }
    async addRawModule(_rawModuleId, _symbolsURL, _rawModule) {
        return [];
    }
    async sourceLocationToRawLocation(_sourceLocation) {
        return [];
    }
    async rawLocationToSourceLocation(_rawLocation) {
        return [];
    }
    async getScopeInfo(type) {
        return { type, typeName: type };
    }
    async listVariablesInScope(_rawLocation) {
        return [];
    }
    async removeRawModule(_rawModuleId) {
    }
    async getFunctionInfo(_rawLocation) {
        return { frames: [] };
    }
    async getInlinedFunctionRanges(_rawLocation) {
        return [];
    }
    async getInlinedCalleesRanges(_rawLocation) {
        return [];
    }
    async getMappedLines(_rawModuleId, _sourceFileURL) {
        return undefined;
    }
}
//# sourceMappingURL=LanguagePluginHelpers.js.map

/***/ }),

/***/ "./testing/PersistenceHelpers.js":
/*!***************************************!*\
  !*** ./testing/PersistenceHelpers.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createFileSystemFileForPersistenceTests: () => (/* binding */ createFileSystemFileForPersistenceTests)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */ var _MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */ var _ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ResourceTreeHelpers.js */ "./testing/ResourceTreeHelpers.js");
/* harmony import */ var _UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UISourceCodeHelpers.js */ "./testing/UISourceCodeHelpers.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





// This helper sets up a file system and a file system uiSourceCode that can be used for
// Persistence testing. As soon as a script is added that has the given `networkScriptUrl` and the `content`,
// PersistenceImpl will try to bind the network uiSourceCode with this file system uiSourceCode.
function createFileSystemFileForPersistenceTests(fileSystemScript, networkScriptUrl, content, target) {
    // First, set up a network resource that is described by the networkScriptUrl. This resource
    // file is required for a binding to be created.
    const origin = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.extractOrigin(networkScriptUrl);
    dispatchDocumentOpened(target, origin);
    const mimeType = 'text/javascript';
    const resource = (0,_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createResource)((0,_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getMainFrame)(target), networkScriptUrl, mimeType, content);
    // Now create the file system uiSourceCode to match the same meta data and content as the
    // created network's resource file.
    const metadata = new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.UISourceCode.UISourceCodeMetadata(resource.lastModified(), resource.contentSize());
    return (0,_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.createFileSystemUISourceCode)({
        url: fileSystemScript.fileSystemFileUrl,
        content,
        fileSystemPath: fileSystemScript.fileSystemPath,
        mimeType,
        metadata,
        autoMapping: true,
        type: fileSystemScript.type,
    });
}
function dispatchDocumentOpened(target, origin) {
    (0,_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(target, 'Page.documentOpened', {
        frame: {
            id: 'main',
            loaderId: 'foo',
            url: `${origin}/index.html`,
            domainAndRegistry: 'site',
            securityOrigin: origin,
            mimeType: 'text/html',
            secureContextType: "Secure" /* Protocol.Page.SecureContextType.Secure */,
            crossOriginIsolatedContextType: "Isolated" /* Protocol.Page.CrossOriginIsolatedContextType.Isolated */,
            gatedAPIFeatures: [],
        },
    });
}
//# sourceMappingURL=PersistenceHelpers.js.map

/***/ }),

/***/ "./testing/SourceMapHelpers.js":
/*!*************************************!*\
  !*** ./testing/SourceMapHelpers.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadBasicSourceMapExample: () => (/* binding */ loadBasicSourceMapExample),
/* harmony export */   setupPageResourceLoaderForSourceMap: () => (/* binding */ setupPageResourceLoaderForSourceMap)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */ var _MockConnection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MockConnection.js */ "./testing/MockConnection.js");
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
//# sourceMappingURL=SourceMapHelpers.js.map

/***/ }),

/***/ "./testing/UISourceCodeHelpers.js":
/*!****************************************!*\
  !*** ./testing/UISourceCodeHelpers.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContentProviderUISourceCode: () => (/* binding */ createContentProviderUISourceCode),
/* harmony export */   createContentProviderUISourceCodes: () => (/* binding */ createContentProviderUISourceCodes),
/* harmony export */   createFakeScriptMapping: () => (/* binding */ createFakeScriptMapping),
/* harmony export */   createFileSystemUISourceCode: () => (/* binding */ createFileSystemUISourceCode),
/* harmony export */   setupMockedUISourceCode: () => (/* binding */ setupMockedUISourceCode)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */ var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/persistence/persistence.js */ "./models/persistence/persistence.js");
/* harmony import */ var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/workspace/workspace.js */ "./models/workspace/workspace.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






function createContentProviderUISourceCodes(options) {
    const workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.WorkspaceImpl.instance();
    const projectType = options.projectType || _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.projectTypes.Formatter;
    assert.notEqual(projectType, _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.projectTypes.FileSystem, 'For creating file system UISourceCodes use \'createFileSystemUISourceCode\' helper.');
    const project = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.ContentProviderBasedProject.ContentProviderBasedProject(workspace, options.projectId || 'PROJECT_ID', projectType, 'Test project', false /* isServiceProject*/);
    if (options.target) {
        _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.NetworkProject.NetworkProject.setTargetForProject(project, options.target);
    }
    const uiSourceCodes = [];
    for (const item of options.items) {
        const resourceType = item.resourceType || _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType.fromMimeType(item.mimeType);
        const uiSourceCode = project.createUISourceCode(item.url, resourceType);
        const contentProvider = _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__.StaticContentProvider.StaticContentProvider.fromString(item.url, resourceType, item.content || '');
        const metadata = item.metadata || new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.UISourceCode.UISourceCodeMetadata(null, null);
        project.addUISourceCodeWithProvider(uiSourceCode, contentProvider, metadata, item.mimeType);
        uiSourceCodes.push(uiSourceCode);
    }
    return { project, uiSourceCodes };
}
function createContentProviderUISourceCode(options) {
    const { url, content, mimeType, metadata, projectType, projectId, target } = options;
    const { project, uiSourceCodes } = createContentProviderUISourceCodes({ items: [{ url, content, mimeType, metadata }], projectType, projectId, target });
    return { project, uiSourceCode: uiSourceCodes[0] };
}
class TestPlatformFileSystem extends _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__.PlatformFileSystem.PlatformFileSystem {
    #mimeType;
    #autoMapping;
    constructor(path, type, mimeType, autoMapping) {
        super(path, type);
        this.#mimeType = mimeType;
        this.#autoMapping = autoMapping;
    }
    supportsAutomapping() {
        return this.#autoMapping;
    }
    mimeFromPath(_path) {
        return this.#mimeType;
    }
}
class TestFileSystem extends _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__.FileSystemWorkspaceBinding.FileSystem {
    #content;
    #metadata;
    constructor(options) {
        super(options.fileSystemWorkspaceBinding, options.platformFileSystem, options.workspace);
        this.#content = options.content;
        this.#metadata = options.metadata;
    }
    requestFileContent(_uiSourceCode) {
        return Promise.resolve(new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__.ContentData.ContentData(this.#content, /* isBase64 */ false, 'text/plain'));
    }
    requestMetadata(_uiSourceCode) {
        return Promise.resolve(this.#metadata);
    }
}
function createFileSystemUISourceCode(options) {
    const workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.WorkspaceImpl.instance();
    const isolatedFileSystemManager = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__.IsolatedFileSystemManager.IsolatedFileSystemManager.instance();
    const fileSystemWorkspaceBinding = new _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__.FileSystemWorkspaceBinding.FileSystemWorkspaceBinding(isolatedFileSystemManager, workspace);
    const fileSystemPath = (options.fileSystemPath || '');
    const type = options.type || '';
    const content = options.content || '';
    const platformFileSystem = new TestPlatformFileSystem(fileSystemPath, type, options.mimeType, Boolean(options.autoMapping));
    const metadata = options.metadata || new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.UISourceCode.UISourceCodeMetadata(null, null);
    const project = new TestFileSystem({ fileSystemWorkspaceBinding, platformFileSystem, workspace, content, metadata });
    const uiSourceCode = project.createUISourceCode(options.url, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType.fromMimeType(options.mimeType));
    project.addUISourceCode(uiSourceCode);
    return { uiSourceCode, project };
}
function setupMockedUISourceCode(url = 'https://example.com/') {
    const projectStub = sinon.createStubInstance(_models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.ContentProviderBasedProject.ContentProviderBasedProject);
    const urlStringTagExample = url;
    const contentTypeStub = sinon.createStubInstance(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType);
    const uiSourceCode = new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.UISourceCode.UISourceCode(projectStub, urlStringTagExample, contentTypeStub);
    return { sut: uiSourceCode, projectStub: projectStub, contentTypeStub: contentTypeStub };
}
function createFakeScriptMapping(debuggerModel, uiSourceCode, uiLineNumber, scriptId) {
    const sdkLocation = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.Location(debuggerModel, scriptId, 13);
    const uiLocation = new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.UISourceCode.UILocation(uiSourceCode, uiLineNumber);
    const mapping = {
        rawLocationToUILocation: (_) => uiLocation,
        uiLocationToRawLocations: (_uiSourceCode, _lineNumber, _columnNumber) => [sdkLocation],
        uiLocationRangeToRawLocationRanges: (_uiSourceCode, _textRange) => {
            throw new Error('Not implemented');
        },
    };
    return mapping;
}
//# sourceMappingURL=UISourceCodeHelpers.js.map

/***/ })

}]);