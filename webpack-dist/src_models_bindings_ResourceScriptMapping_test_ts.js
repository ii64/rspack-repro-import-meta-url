"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_models_bindings_ResourceScriptMapping_test_ts"],{

/***/ "./src/models/bindings/ResourceScriptMapping.test.ts":
/*!***********************************************************!*\
  !*** ./src/models/bindings/ResourceScriptMapping.test.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _testing_MockScopeChain_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/MockScopeChain.js */ "./src/testing/MockScopeChain.ts");
/* harmony import */ var _text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../text_utils/text_utils.js */ "./src/models/text_utils/text_utils.ts");
/* harmony import */ var _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../workspace/workspace.js */ "./src/models/workspace/workspace.ts");
/* harmony import */ var _bindings_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bindings.js */ "./src/models/bindings/bindings.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('ResourceScriptMapping', () => {
    const url = 'http://localhost/example.js';
    let target;
    let backend;
    let resourceScriptMapping;
    const contentWithSourceUrl = `console.log("Hi!");
  debugger;
  console.log("There!");
//# sourceURL=test.js`;
    const contentWithoutSourceUrl = `console.log("Hi!");
  debugger;
  console.log("There!");`;
    beforeEach(() => {
        const workspace = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.WorkspaceImpl.instance();
        const targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance();
        const resourceMapping = new _bindings_js__WEBPACK_IMPORTED_MODULE_6__.ResourceMapping.ResourceMapping(targetManager, workspace);
        const debuggerWorkspaceBinding = _bindings_js__WEBPACK_IMPORTED_MODULE_6__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
            forceNew: true,
            resourceMapping,
            targetManager,
        });
        _bindings_js__WEBPACK_IMPORTED_MODULE_6__.IgnoreListManager.IgnoreListManager.instance({ forceNew: true, debuggerWorkspaceBinding });
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
        backend = new _testing_MockScopeChain_js__WEBPACK_IMPORTED_MODULE_3__.MockProtocolBackend();
        resourceScriptMapping = new _bindings_js__WEBPACK_IMPORTED_MODULE_6__.ResourceScriptMapping.ResourceScriptMapping(target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DebuggerModel.DebuggerModel), workspace, debuggerWorkspaceBinding);
    });
    describe('uiLocationRangeToRawLocationRanges', () => {
        it('maps UI location ranges on first line in scripts without sourceURL', async () => {
            const script = await backend.addScript(target, { content: contentWithoutSourceUrl, url, hasSourceURL: false }, null);
            const uiSourceCode = resourceScriptMapping.uiSourceCodeForScript(script);
            assert.exists(uiSourceCode);
            const rawLocationRanges = resourceScriptMapping.uiLocationRangeToRawLocationRanges(uiSourceCode, new _text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__.TextRange.TextRange(0, 1, 0, 4));
            assert.exists(rawLocationRanges);
            assert.lengthOf(rawLocationRanges, 1);
            assert.strictEqual(rawLocationRanges[0].start.lineNumber, 0);
            assert.strictEqual(rawLocationRanges[0].start.columnNumber, 1);
            assert.strictEqual(rawLocationRanges[0].end.lineNumber, 0);
            assert.strictEqual(rawLocationRanges[0].end.columnNumber, 4);
        });
        it('maps UI location ranges in inline scripts without sourceURL', async () => {
            const script = await backend.addScript(target, { content: contentWithoutSourceUrl, url, hasSourceURL: false }, null);
            const uiSourceCode = resourceScriptMapping.uiSourceCodeForScript(script);
            assert.exists(uiSourceCode);
            const rawLocationRanges = resourceScriptMapping.uiLocationRangeToRawLocationRanges(uiSourceCode, new _text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__.TextRange.TextRange(1, 2, 2, 4));
            assert.exists(rawLocationRanges);
            assert.lengthOf(rawLocationRanges, 1);
            assert.strictEqual(rawLocationRanges[0].start.lineNumber, 1);
            assert.strictEqual(rawLocationRanges[0].start.columnNumber, 2);
            assert.strictEqual(rawLocationRanges[0].end.lineNumber, 2);
            assert.strictEqual(rawLocationRanges[0].end.columnNumber, 4);
        });
        it('maps UI locations in inline scripts with sourceURL', async () => {
            const script = await backend.addScript(target, { content: contentWithSourceUrl, url, hasSourceURL: true }, null);
            const uiSourceCode = resourceScriptMapping.uiSourceCodeForScript(script);
            assert.exists(uiSourceCode);
            const rawLocationRanges = resourceScriptMapping.uiLocationRangeToRawLocationRanges(uiSourceCode, new _text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__.TextRange.TextRange(4, 2, 4, 4));
            assert.exists(rawLocationRanges);
            assert.lengthOf(rawLocationRanges, 1);
            assert.strictEqual(rawLocationRanges[0].start.lineNumber, 4);
            assert.strictEqual(rawLocationRanges[0].start.columnNumber, 2);
            assert.strictEqual(rawLocationRanges[0].end.lineNumber, 4);
            assert.strictEqual(rawLocationRanges[0].end.columnNumber, 4);
        });
    });
    it('does not create a mapping UISourceCode for conditional breakpoint scripts', async () => {
        const content = 'x === 5\n\n//# sourceURL=debugger://breakpoint';
        const script = await backend.addScript(target, { content, url: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DebuggerModel.COND_BREAKPOINT_SOURCE_URL, hasSourceURL: true }, null);
        assert.isTrue(script.isBreakpointCondition);
        const uiSourceCode = resourceScriptMapping.uiSourceCodeForScript(script);
        assert.isNull(uiSourceCode);
    });
    it('does not create a mapping UISourceCode for logpoint scripts', async () => {
        const content = 'console.log(x)\n\n//# sourceURL=debugger://logpoint';
        const script = await backend.addScript(target, { content, url: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DebuggerModel.LOGPOINT_SOURCE_URL, hasSourceURL: true }, null);
        assert.isTrue(script.isBreakpointCondition);
        const uiSourceCode = resourceScriptMapping.uiSourceCodeForScript(script);
        assert.isNull(uiSourceCode);
    });
});


/***/ })

}]);