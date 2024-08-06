"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["testing_SourceMapHelpers_js"],{

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

/***/ })

}]);