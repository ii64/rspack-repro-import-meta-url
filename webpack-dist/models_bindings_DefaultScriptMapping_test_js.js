"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_bindings_DefaultScriptMapping_test_js"],{

/***/ "./models/bindings/DefaultScriptMapping.test.js":
/*!******************************************************!*\
  !*** ./models/bindings/DefaultScriptMapping.test.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */ var _testing_MockScopeChain_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/MockScopeChain.js */ "./testing/MockScopeChain.js");
/* harmony import */ var _text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */ var _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */ var _bindings_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bindings.js */ "./models/bindings/bindings.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('DefaultScriptMapping', () => {
    const url = 'file:///tmp/example.js';
    let target;
    let backend;
    let defaultScriptMapping;
    const contentWithSourceUrl = `<p>
  Hello!
</p>
<script>console.log("Hi!");
  debugger;
  console.log("There!");
//# sourceURL=test.js
</script>`;
    const contentWithoutSourceUrl = `<p>
  Hello!
</p>
<script>console.log("Hi!");
  debugger;
  console.log("There!");
</script>`;
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
        defaultScriptMapping = new _bindings_js__WEBPACK_IMPORTED_MODULE_6__.DefaultScriptMapping.DefaultScriptMapping(target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DebuggerModel.DebuggerModel), _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.WorkspaceImpl.instance(), _bindings_js__WEBPACK_IMPORTED_MODULE_6__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance());
    });
    describe('rawLocationToUILocation', () => {
        it('maps raw locations on first line in inline scripts without sourceURL', async () => {
            const { scriptId, debuggerModel } = await backend.addScript(target, { content: contentWithoutSourceUrl, url, startLine: 3, startColumn: 8, hasSourceURL: false }, null);
            const uiLocation = defaultScriptMapping.rawLocationToUILocation(new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DebuggerModel.Location(debuggerModel, scriptId, 3, 9, 0));
            assert.strictEqual(uiLocation?.lineNumber, 0);
            assert.strictEqual(uiLocation?.columnNumber, 1);
        });
        it('maps raw locations in inline scripts without sourceURL', async () => {
            const { scriptId, debuggerModel } = await backend.addScript(target, { content: contentWithoutSourceUrl, url, startLine: 3, startColumn: 8, hasSourceURL: false }, null);
            const uiLocation = defaultScriptMapping.rawLocationToUILocation(new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DebuggerModel.Location(debuggerModel, scriptId, 4, 2, 0));
            assert.strictEqual(uiLocation?.lineNumber, 1);
            assert.strictEqual(uiLocation?.columnNumber, 2);
        });
        it('maps raw locations in inline scripts with sourceURL', async () => {
            const { scriptId, debuggerModel } = await backend.addScript(target, { content: contentWithSourceUrl, url, startLine: 3, startColumn: 8, hasSourceURL: true }, null);
            const uiLocation = defaultScriptMapping.rawLocationToUILocation(new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DebuggerModel.Location(debuggerModel, scriptId, 4, 2, 0));
            assert.strictEqual(uiLocation?.lineNumber, 4);
            assert.strictEqual(uiLocation?.columnNumber, 2);
        });
    });
    describe('uiLocationToRawLocations', () => {
        it('maps UI locations on first line in inline scripts without sourceURL', async () => {
            const script = await backend.addScript(target, { content: contentWithoutSourceUrl, url, startLine: 3, startColumn: 8, hasSourceURL: false }, null);
            const uiSourceCode = defaultScriptMapping.uiSourceCodeForScript(script);
            assert.exists(uiSourceCode);
            const rawLocations = defaultScriptMapping.uiLocationToRawLocations(uiSourceCode, 0, 1);
            assert.strictEqual(rawLocations.length, 1);
            assert.strictEqual(rawLocations[0].lineNumber, 3);
            assert.strictEqual(rawLocations[0].columnNumber, 9);
        });
        it('maps UI locations in inline scripts without sourceURL', async () => {
            const script = await backend.addScript(target, { content: contentWithoutSourceUrl, url, startLine: 3, startColumn: 8, hasSourceURL: false }, null);
            const uiSourceCode = defaultScriptMapping.uiSourceCodeForScript(script);
            assert.exists(uiSourceCode);
            const rawLocations = defaultScriptMapping.uiLocationToRawLocations(uiSourceCode, 1, 2);
            assert.strictEqual(rawLocations.length, 1);
            assert.strictEqual(rawLocations[0].lineNumber, 4);
            assert.strictEqual(rawLocations[0].columnNumber, 2);
        });
        it('maps UI locations in inline scripts with sourceURL', async () => {
            const script = await backend.addScript(target, { content: contentWithSourceUrl, url, startLine: 3, startColumn: 8, hasSourceURL: true }, null);
            const uiSourceCode = defaultScriptMapping.uiSourceCodeForScript(script);
            assert.exists(uiSourceCode);
            const rawLocations = defaultScriptMapping.uiLocationToRawLocations(uiSourceCode, 4, 2);
            assert.strictEqual(rawLocations.length, 1);
            assert.strictEqual(rawLocations[0].lineNumber, 4);
            assert.strictEqual(rawLocations[0].columnNumber, 2);
        });
    });
    describe('uiLocationRangeToRawLocationRanges', () => {
        it('maps UI location ranges on first line in inline scripts without sourceURL', async () => {
            const script = await backend.addScript(target, { content: contentWithoutSourceUrl, url, startLine: 3, startColumn: 8, hasSourceURL: false }, null);
            const uiSourceCode = defaultScriptMapping.uiSourceCodeForScript(script);
            assert.exists(uiSourceCode);
            const rawLocationRanges = defaultScriptMapping.uiLocationRangeToRawLocationRanges(uiSourceCode, new _text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__.TextRange.TextRange(0, 1, 0, 4));
            assert.exists(rawLocationRanges);
            assert.lengthOf(rawLocationRanges, 1);
            assert.strictEqual(rawLocationRanges[0].start.lineNumber, 3);
            assert.strictEqual(rawLocationRanges[0].start.columnNumber, 9);
            assert.strictEqual(rawLocationRanges[0].end.lineNumber, 3);
            assert.strictEqual(rawLocationRanges[0].end.columnNumber, 12);
        });
        it('maps UI location ranges in inline scripts without sourceURL', async () => {
            const script = await backend.addScript(target, { content: contentWithoutSourceUrl, url, startLine: 3, startColumn: 8, hasSourceURL: false }, null);
            const uiSourceCode = defaultScriptMapping.uiSourceCodeForScript(script);
            assert.exists(uiSourceCode);
            const rawLocationRanges = defaultScriptMapping.uiLocationRangeToRawLocationRanges(uiSourceCode, new _text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__.TextRange.TextRange(1, 2, 2, 4));
            assert.exists(rawLocationRanges);
            assert.lengthOf(rawLocationRanges, 1);
            assert.strictEqual(rawLocationRanges[0].start.lineNumber, 4);
            assert.strictEqual(rawLocationRanges[0].start.columnNumber, 2);
            assert.strictEqual(rawLocationRanges[0].end.lineNumber, 5);
            assert.strictEqual(rawLocationRanges[0].end.columnNumber, 4);
        });
        it('maps UI locations in inline scripts with sourceURL', async () => {
            const script = await backend.addScript(target, { content: contentWithSourceUrl, url, startLine: 3, startColumn: 8, hasSourceURL: true }, null);
            const uiSourceCode = defaultScriptMapping.uiSourceCodeForScript(script);
            assert.exists(uiSourceCode);
            const rawLocationRanges = defaultScriptMapping.uiLocationRangeToRawLocationRanges(uiSourceCode, new _text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__.TextRange.TextRange(4, 2, 4, 4));
            assert.exists(rawLocationRanges);
            assert.lengthOf(rawLocationRanges, 1);
            assert.strictEqual(rawLocationRanges[0].start.lineNumber, 4);
            assert.strictEqual(rawLocationRanges[0].start.columnNumber, 2);
            assert.strictEqual(rawLocationRanges[0].end.lineNumber, 4);
            assert.strictEqual(rawLocationRanges[0].end.columnNumber, 4);
        });
    });
    it('marks conditional breakpoint scripts as ignored', async () => {
        const content = 'x === 5\n\n//# sourceURL=debugger://breakpoint';
        const script = await backend.addScript(target, { content, url: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DebuggerModel.COND_BREAKPOINT_SOURCE_URL, hasSourceURL: true }, null);
        const uiSourceCode = defaultScriptMapping.uiSourceCodeForScript(script);
        assert.exists(uiSourceCode);
        assert.isTrue(uiSourceCode.isUnconditionallyIgnoreListed());
    });
    it('marks logpoint scripts as ignored', async () => {
        const content = 'console.log(x)\n\n//# sourceURL=debugger://logpoint';
        const script = await backend.addScript(target, { content, url: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DebuggerModel.LOGPOINT_SOURCE_URL, hasSourceURL: true }, null);
        const uiSourceCode = defaultScriptMapping.uiSourceCodeForScript(script);
        assert.exists(uiSourceCode);
        assert.isTrue(uiSourceCode.isUnconditionallyIgnoreListed());
    });
});
//# sourceMappingURL=DefaultScriptMapping.test.js.map

/***/ })

}]);