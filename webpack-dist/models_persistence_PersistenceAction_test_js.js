"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_persistence_PersistenceAction_test_js"],{

/***/ "./models/persistence/PersistenceAction.test.js":
/*!******************************************************!*\
  !*** ./models/persistence/PersistenceAction.test.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/ExpectStubCall.js */ "./testing/ExpectStubCall.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */ var _text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */ var _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */ var _persistence_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./persistence.js */ "./models/persistence/persistence.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.










(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.describeWithLocale)('ContextMenuProvider', () => {
    beforeEach(() => {
        // Rather then setting up a whole Workspace/BreakpointManager/TargetManager/... chain. Let's stub out the NetworkPersistenceManager.
        sinon.stub(_persistence_js__WEBPACK_IMPORTED_MODULE_9__.NetworkPersistenceManager.NetworkPersistenceManager, 'instance')
            .returns(sinon.createStubInstance(_persistence_js__WEBPACK_IMPORTED_MODULE_9__.NetworkPersistenceManager.NetworkPersistenceManager));
        sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'isHostedMode').returns(false);
        sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'showContextMenuAtPoint');
        sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'close');
    });
    it('passes along the "isEncoded" flag to the FileManager for "Save as"', async () => {
        const event = new Event('contextmenu');
        sinon.stub(event, 'target').value(document);
        const contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ContextMenu.ContextMenu(event);
        const menuProvider = new _persistence_js__WEBPACK_IMPORTED_MODULE_9__.PersistenceActions.ContextMenuProvider();
        const contentProvider = {
            contentURL: () => 'https://example.com/sample.webp',
            contentType: () => _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes
                .Document, // Navigating a tab to an image will result in a document type for images.
            requestContent: () => Promise.resolve({ isEncoded: true, content: 'AGFzbQEAAAA=' }),
            requestContentData: () => Promise.resolve(new _text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_7__.ContentData.ContentData('AGFzbQEAAAA=', true, 'image/webp')),
            searchInContent: () => assert.fail('Not implemented'),
        };
        menuProvider.appendApplicableItems(event, contextMenu, contentProvider);
        await contextMenu.show();
        const saveItem = contextMenu.saveSection().items[0];
        assert.exists(saveItem);
        const saveStub = sinon.stub(_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.FileManager.FileManager.instance(), 'save');
        contextMenu.invokeHandler(saveItem.id());
        assert.deepEqual(await (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_4__.expectCall)(saveStub), [
            'https://example.com/sample.webp', 'AGFzbQEAAAA=', true /* forceSaveAs */,
            true, /* isBase64 */
        ]);
    });
    it('can "Save as" WASM modules', async () => {
        const event = new Event('contextmenu');
        sinon.stub(event, 'target').value(document);
        const contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ContextMenu.ContextMenu(event);
        const menuProvider = new _persistence_js__WEBPACK_IMPORTED_MODULE_9__.PersistenceActions.ContextMenuProvider();
        const uiSourceCode = sinon.createStubInstance(_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.UISourceCode.UISourceCode, {
            contentURL: 'https://example.com/sample.wasm',
            contentType: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Script,
        });
        const stubProject = sinon.createStubInstance(_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.ContentProviderBasedProject.ContentProviderBasedProject, { type: _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.Workspace.projectTypes.Debugger });
        uiSourceCode.project.returns(stubProject);
        const stubWorkspaceBinding = sinon.createStubInstance(_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding);
        sinon.stub(_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding, 'instance').returns(stubWorkspaceBinding);
        const stubWasmScript = sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Script.Script, { getWasmBytecode: Promise.resolve(new Uint8Array([1, 2, 3, 4])), isWasm: true });
        stubWorkspaceBinding.scriptsForUISourceCode.returns([stubWasmScript]);
        menuProvider.appendApplicableItems(event, contextMenu, uiSourceCode);
        await contextMenu.show();
        const saveItem = contextMenu.saveSection().items[0];
        const saveStub = sinon.stub(_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.FileManager.FileManager.instance(), 'save');
        contextMenu.invokeHandler(saveItem.id());
        assert.deepEqual(await (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_4__.expectCall)(saveStub), [
            'https://example.com/sample.wasm', 'AQIDBA==', true /* forceSaveAs */,
            true, /* isBase64 */
        ]);
    });
});
//# sourceMappingURL=PersistenceAction.test.js.map

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

/***/ })

}]);