"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_timeline_SourceMapsResolver_test_ts"],{

/***/ "./src/panels/timeline/SourceMapsResolver.test.ts":
/*!********************************************************!*\
  !*** ./src/panels/timeline/SourceMapsResolver.test.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./src/models/bindings/bindings.ts");
/* harmony import */ var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/trace/trace.js */ "./src/models/trace/trace.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_LanguagePluginHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/LanguagePluginHelpers.js */ "./src/testing/LanguagePluginHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _testing_SourceMapHelpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../testing/SourceMapHelpers.js */ "./src/testing/SourceMapHelpers.ts");
/* harmony import */ var _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../testing/TraceHelpers.js */ "./src/testing/TraceHelpers.ts");
/* harmony import */ var _timeline_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./timeline.js */ "./src/panels/timeline/timeline.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








const MINIFIED_FUNCTION_NAME = 'minified';
const AUTHORED_FUNCTION_NAME = 'someFunction';
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.describeWithMockConnection)('SourceMapsResolver', () => {
    let target;
    let script;
    let traceParsedData;
    let profileCall;
    beforeEach(async function () {
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)();
        script = (await (0,_testing_SourceMapHelpers_js__WEBPACK_IMPORTED_MODULE_5__.loadBasicSourceMapExample)(target)).script;
        // Ideally we would get a column number we can use from the source
        // map however the current status of the source map helpers makes
        // it difficult to do so.
        const columnNumber = 51;
        profileCall = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_6__.makeProfileCall)('function', 10, 100, _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.ProcessID(1), _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.ThreadID(1));
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
        traceParsedData = {
            Samples: (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_6__.makeMockSamplesHandlerData)([profileCall]),
            Workers: workersData,
        };
    });
    it('renames nodes from the profile models when the corresponding scripts and source maps have loaded', async function () {
        const resolver = new _timeline_js__WEBPACK_IMPORTED_MODULE_7__.SourceMapsResolver.SourceMapsResolver(traceParsedData);
        // Test the node's name is minified before the script and source maps load.
        assert.strictEqual(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Samples.getProfileCallFunctionName(traceParsedData.Samples, profileCall), MINIFIED_FUNCTION_NAME);
        await resolver.install();
        // Now that the script and source map have loaded, test that the model has been automatically
        // reparsed to resolve function names.
        assert.strictEqual(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Samples.getProfileCallFunctionName(traceParsedData.Samples, profileCall), AUTHORED_FUNCTION_NAME);
        // Ensure we populate the cache
        assert.strictEqual(_timeline_js__WEBPACK_IMPORTED_MODULE_7__.SourceMapsResolver.SourceMapsResolver.resolvedNodeNameForEntry(profileCall), AUTHORED_FUNCTION_NAME);
    });
    it('resolves function names using a plugin when available', async () => {
        const PLUGIN_FUNCTION_NAME = 'PLUGIN_FUNCTION_NAME';
        class Plugin extends _testing_LanguagePluginHelpers_js__WEBPACK_IMPORTED_MODULE_3__.TestPlugin {
            constructor() {
                super('InstrumentationBreakpoints');
            }
            getFunctionInfo(_rawLocation) {
                return Promise.resolve({ frames: [{ name: PLUGIN_FUNCTION_NAME }] });
            }
            handleScript(_) {
                return true;
            }
        }
        const { pluginManager } = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_0__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance();
        pluginManager.addPlugin(new Plugin());
        const resolver = new _timeline_js__WEBPACK_IMPORTED_MODULE_7__.SourceMapsResolver.SourceMapsResolver(traceParsedData);
        await resolver.install();
        assert.strictEqual(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Samples.getProfileCallFunctionName(traceParsedData.Samples, profileCall), PLUGIN_FUNCTION_NAME);
    });
});


/***/ }),

/***/ "./src/testing/LanguagePluginHelpers.ts":
/*!**********************************************!*\
  !*** ./src/testing/LanguagePluginHelpers.ts ***!
  \**********************************************/
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
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.name = name;
    }
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