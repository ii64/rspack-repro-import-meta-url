"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_bindings_PresentationConsoleMessageHelper_test_js"],{

/***/ "./models/bindings/PresentationConsoleMessageHelper.test.js":
/*!******************************************************************!*\
  !*** ./models/bindings/PresentationConsoleMessageHelper.test.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/ExpectStubCall.js */ "./testing/ExpectStubCall.js");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */ var _testing_MockExecutionContext_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../testing/MockExecutionContext.js */ "./testing/MockExecutionContext.js");
/* harmony import */ var _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */ var _bindings_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bindings.js */ "./models/bindings/bindings.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








async function addMessage(helper, target, url) {
    const details = { line: 2, column: 1, url };
    const message = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleModel.ConsoleMessage(target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel), _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.FrontendMessageSource.ConsoleAPI, "error" /* Protocol.Log.LogEntryLevel.Error */, 'test message', details);
    const level = "Error" /* Workspace.UISourceCode.Message.Level.Error */;
    await helper.addMessage(new _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.Message(level, message.messageText), message);
    return message;
}
async function addUISourceCode(helper, url) {
    const uiSourceCodeAddedSpy = sinon.stub(helper, 'uiSourceCodeAddedForTest');
    const uiSourceCodeAddedDonePromise = (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCall)(uiSourceCodeAddedSpy);
    const workspace = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.WorkspaceImpl.instance();
    const project = new _bindings_js__WEBPACK_IMPORTED_MODULE_7__.ContentProviderBasedProject.ContentProviderBasedProject(workspace, 'test-project', _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.projectTypes.Network, 'test-project', false);
    const uiSourceCode = new _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.UISourceCode(project, url, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType.fromMimeType('application/text'));
    project.addUISourceCode(uiSourceCode);
    await uiSourceCodeAddedDonePromise;
    uiSourceCodeAddedSpy.restore();
    return uiSourceCode;
}
async function addScript(helper, debuggerModel, executionContext, url) {
    const scriptParsedSpy = sinon.stub(helper, 'parsedScriptSourceForTest');
    const parsedScriptSourceDonePromise = (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCall)(scriptParsedSpy);
    const script = debuggerModel.parsedScriptSource('scriptId', url, 0, 0, 3, 3, executionContext.id, '', undefined, false, undefined, false, false, 0, false, null, null, null, null, null);
    await parsedScriptSourceDonePromise;
    scriptParsedSpy.restore();
    await _bindings_js__WEBPACK_IMPORTED_MODULE_7__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().pendingLiveLocationChangesPromise();
    const uiSourceCode = _bindings_js__WEBPACK_IMPORTED_MODULE_7__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().uiSourceCodeForScript(script);
    assert.exists(uiSourceCode);
    return uiSourceCode;
}
async function addStyleSheet(helper, cssModel, url) {
    const styleSheetAddedSpy = sinon.stub(helper, 'styleSheetAddedForTest');
    const styleSheetAddedDonePromise = (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCall)(styleSheetAddedSpy);
    const header = {
        styleSheetId: 'styleSheet',
        frameId: 'frameId',
        sourceURL: url,
        origin: "regular" /* Protocol.CSS.StyleSheetOrigin.Regular */,
        title: '',
        disabled: false,
        isInline: false,
        isMutable: false,
        isConstructed: false,
        startLine: 0,
        startColumn: 0,
        length: 1,
        endLine: 3,
        endColumn: 3,
    };
    cssModel.styleSheetAdded(header);
    await styleSheetAddedDonePromise;
    styleSheetAddedSpy.restore();
    await _bindings_js__WEBPACK_IMPORTED_MODULE_7__.CSSWorkspaceBinding.CSSWorkspaceBinding.instance().pendingLiveLocationChangesPromise();
    const uiSourceCode = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.WorkspaceImpl.instance().uiSourceCodeForURL(url);
    assert.exists(uiSourceCode);
    return uiSourceCode;
}
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.describeWithMockConnection)('PresentationConsoleMessageHelper', () => {
    const url = 'http://example.test/test.css';
    let helper;
    let executionContext;
    let cssModel;
    beforeEach(() => {
        executionContext = new _testing_MockExecutionContext_js__WEBPACK_IMPORTED_MODULE_5__.MockExecutionContext((0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)());
        const { debuggerModel } = executionContext;
        assert.exists(debuggerModel);
        helper = new _bindings_js__WEBPACK_IMPORTED_MODULE_7__.PresentationConsoleMessageHelper.PresentationSourceFrameMessageHelper();
        helper.setDebuggerModel(debuggerModel);
        const target = executionContext.target();
        const targetCSSModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.CSSModel);
        assert.exists(targetCSSModel);
        cssModel = targetCSSModel;
        helper.setCSSModel(cssModel);
        const workspace = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.WorkspaceImpl.instance();
        const targetManager = target.targetManager();
        const resourceMapping = new _bindings_js__WEBPACK_IMPORTED_MODULE_7__.ResourceMapping.ResourceMapping(targetManager, workspace);
        _bindings_js__WEBPACK_IMPORTED_MODULE_7__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({ forceNew: true, resourceMapping, targetManager });
        _bindings_js__WEBPACK_IMPORTED_MODULE_7__.CSSWorkspaceBinding.CSSWorkspaceBinding.instance({ forceNew: true, resourceMapping, targetManager });
    });
    it('attaches messages correctly when the events are ordered:  uiSourceCode, message, script', async () => {
        const uiSourceCode = await addUISourceCode(helper, url);
        const message = await addMessage(helper, executionContext.target(), url);
        assert.strictEqual(uiSourceCode.messages().size, 1);
        assert.strictEqual(Array.from(uiSourceCode.messages().values())[0].text(), message.messageText);
        const scriptUISourceCode = await addScript(helper, executionContext.debuggerModel, executionContext, url);
        assert.strictEqual(uiSourceCode.messages().size, 0);
        assert.strictEqual(scriptUISourceCode.messages().size, 1);
        assert.strictEqual(Array.from(scriptUISourceCode.messages().values())[0].text(), message.messageText);
    });
    it('attaches messages correctly when the events are ordered:  message, uiSourceCode, script', async () => {
        const message = await addMessage(helper, executionContext.target(), url);
        const uiSourceCode = await addUISourceCode(helper, url);
        assert.strictEqual(uiSourceCode.messages().size, 1);
        assert.strictEqual(Array.from(uiSourceCode.messages().values())[0].text(), message.messageText);
        const scriptUISourceCode = await addScript(helper, executionContext.debuggerModel, executionContext, url);
        assert.strictEqual(uiSourceCode.messages().size, 0);
        assert.strictEqual(scriptUISourceCode.messages().size, 1);
        assert.strictEqual(Array.from(scriptUISourceCode.messages().values())[0].text(), message.messageText);
    });
    it('attaches messages correctly when the events are ordered:  message, script, uiSourceCode', async () => {
        const message = await addMessage(helper, executionContext.target(), url);
        const scriptUISourceCode = await addScript(helper, executionContext.debuggerModel, executionContext, url);
        assert.strictEqual(scriptUISourceCode.messages().size, 1);
        assert.strictEqual(Array.from(scriptUISourceCode.messages().values())[0].text(), message.messageText);
        const uiSourceCode = await addUISourceCode(helper, url);
        assert.strictEqual(uiSourceCode.messages().size, 0);
        assert.strictEqual(scriptUISourceCode.messages().size, 1);
        assert.strictEqual(Array.from(scriptUISourceCode.messages().values())[0].text(), message.messageText);
    });
    it('attaches messages correctly when the events are ordered:  uiSourceCode, script, message', async () => {
        const uiSourceCode = await addUISourceCode(helper, url);
        const scriptUISourceCode = await addScript(helper, executionContext.debuggerModel, executionContext, url);
        const message = await addMessage(helper, executionContext.target(), url);
        assert.strictEqual(uiSourceCode.messages().size, 0);
        assert.strictEqual(scriptUISourceCode.messages().size, 1);
        assert.strictEqual(Array.from(scriptUISourceCode.messages().values())[0].text(), message.messageText);
    });
    it('attaches messages correctly when the events are ordered:  script, uiSourceCode, message', async () => {
        const scriptUISourceCode = await addScript(helper, executionContext.debuggerModel, executionContext, url);
        const uiSourceCode = await addUISourceCode(helper, url);
        const message = await addMessage(helper, executionContext.target(), url);
        assert.strictEqual(uiSourceCode.messages().size, 0);
        assert.strictEqual(scriptUISourceCode.messages().size, 1);
        assert.strictEqual(Array.from(scriptUISourceCode.messages().values())[0].text(), message.messageText);
    });
    it('attaches messages correctly when the events are ordered:  script, message, uiSourceCode', async () => {
        const scriptUISourceCode = await addScript(helper, executionContext.debuggerModel, executionContext, url);
        const message = await addMessage(helper, executionContext.target(), url);
        assert.strictEqual(scriptUISourceCode.messages().size, 1);
        assert.strictEqual(Array.from(scriptUISourceCode.messages().values())[0].text(), message.messageText);
        const uiSourceCode = await addUISourceCode(helper, url);
        assert.strictEqual(uiSourceCode.messages().size, 0);
    });
    it('attaches messages correctly when the events are ordered:  uiSourceCode, message, styleSheet', async () => {
        const uiSourceCode = await addUISourceCode(helper, url);
        const message = await addMessage(helper, executionContext.target(), url);
        assert.strictEqual(uiSourceCode.messages().size, 1);
        assert.strictEqual(Array.from(uiSourceCode.messages().values())[0].text(), message.messageText);
        const styleSheetUISourceCode = await addStyleSheet(helper, cssModel, url);
        assert.strictEqual(uiSourceCode.messages().size, 0);
        assert.strictEqual(styleSheetUISourceCode.messages().size, 1);
        assert.strictEqual(Array.from(styleSheetUISourceCode.messages().values())[0].text(), message.messageText);
    });
    it('attaches messages correctly when the events are ordered:  message, uiSourceCode, styleSheet', async () => {
        const message = await addMessage(helper, executionContext.target(), url);
        const uiSourceCode = await addUISourceCode(helper, url);
        assert.strictEqual(uiSourceCode.messages().size, 1);
        assert.strictEqual(Array.from(uiSourceCode.messages().values())[0].text(), message.messageText);
        const styleSheetUISourceCode = await addStyleSheet(helper, cssModel, url);
        assert.strictEqual(uiSourceCode.messages().size, 0);
        assert.strictEqual(styleSheetUISourceCode.messages().size, 1);
        assert.strictEqual(Array.from(styleSheetUISourceCode.messages().values())[0].text(), message.messageText);
    });
    it('attaches messages correctly when the events are ordered:  message, styleSheet, uiSourceCode', async () => {
        const message = await addMessage(helper, executionContext.target(), url);
        const styleSheetUISourceCode = await addStyleSheet(helper, cssModel, url);
        assert.strictEqual(styleSheetUISourceCode.messages().size, 1);
        assert.strictEqual(Array.from(styleSheetUISourceCode.messages().values())[0].text(), message.messageText);
        const uiSourceCode = await addUISourceCode(helper, url);
        assert.strictEqual(uiSourceCode.messages().size, 0);
        assert.strictEqual(styleSheetUISourceCode.messages().size, 1);
        assert.strictEqual(Array.from(styleSheetUISourceCode.messages().values())[0].text(), message.messageText);
    });
    it('attaches messages correctly when the events are ordered:  uiSourceCode, styleSheet, message', async () => {
        const uiSourceCode = await addUISourceCode(helper, url);
        const styleSheetUISourceCode = await addStyleSheet(helper, cssModel, url);
        const message = await addMessage(helper, executionContext.target(), url);
        assert.strictEqual(uiSourceCode.messages().size, 0);
        assert.strictEqual(styleSheetUISourceCode.messages().size, 1);
        assert.strictEqual(Array.from(styleSheetUISourceCode.messages().values())[0].text(), message.messageText);
    });
    it('attaches messages correctly when the events are ordered:  styleSheet, uiSourceCode, message', async () => {
        const styleSheetUISourceCode = await addStyleSheet(helper, cssModel, url);
        const uiSourceCode = await addUISourceCode(helper, url);
        const message = await addMessage(helper, executionContext.target(), url);
        assert.strictEqual(uiSourceCode.messages().size, 0);
        assert.strictEqual(styleSheetUISourceCode.messages().size, 1);
        assert.strictEqual(Array.from(styleSheetUISourceCode.messages().values())[0].text(), message.messageText);
    });
    it('attaches messages correctly when the events are ordered:  styleSheet, message, uiSourceCode', async () => {
        const styleSheetUISourceCode = await addStyleSheet(helper, cssModel, url);
        const message = await addMessage(helper, executionContext.target(), url);
        assert.strictEqual(styleSheetUISourceCode.messages().size, 1);
        assert.strictEqual(Array.from(styleSheetUISourceCode.messages().values())[0].text(), message.messageText);
        const uiSourceCode = await addUISourceCode(helper, url);
        assert.strictEqual(uiSourceCode.messages().size, 0);
    });
});
//# sourceMappingURL=PresentationConsoleMessageHelper.test.js.map

/***/ }),

/***/ "./testing/ExpectStubCall.js":
/*!***********************************!*\
  !*** ./testing/ExpectStubCall.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   expectCall: () => (/* binding */ expectCall),
/* harmony export */   expectCalled: () => (/* binding */ expectCalled)
/* harmony export */ });
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function expectCall(stub, options = {}) {
    return new Promise(resolve => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        stub.callsFake(function (...args) {
            if (stub.callCount < (options.callCount ?? 1)) {
                return undefined;
            }
            resolve(args);
            return (options.fakeFn ? options.fakeFn.apply(this, args) : undefined);
        });
    });
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function expectCalled(stub, options = {}) {
    const remainingCalls = (options.callCount ?? 1) - stub.callCount;
    if (remainingCalls <= 0) {
        return Promise.resolve(stub.lastCall.args);
    }
    return expectCall(stub, { ...options, callCount: remainingCalls });
}
//# sourceMappingURL=ExpectStubCall.js.map

/***/ }),

/***/ "./testing/MockExecutionContext.js":
/*!*****************************************!*\
  !*** ./testing/MockExecutionContext.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MockExecutionContext: () => (/* binding */ MockExecutionContext)
/* harmony export */ });
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/sdk/sdk.js */ "./core/sdk/sdk.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


class MockExecutionContext extends _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.ExecutionContext {
    constructor(target) {
        const runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel);
        (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.assertNotNullOrUndefined)(runtimeModel);
        super(runtimeModel, 1, 'test id', 'test name', 'test origin', true);
    }
    async evaluate(options, userGesture, _awaitPromise) {
        assert.isTrue(userGesture);
        return { error: 'test' };
    }
}
//# sourceMappingURL=MockExecutionContext.js.map

/***/ })

}]);