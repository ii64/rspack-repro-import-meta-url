"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_bindings_DebuggerLanguagePlugins_test_js"],{

/***/ "./models/bindings/DebuggerLanguagePlugins.test.js":
/*!*********************************************************!*\
  !*** ./models/bindings/DebuggerLanguagePlugins.test.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_LanguagePluginHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/LanguagePluginHelpers.js */ "./testing/LanguagePluginHelpers.js");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */ var _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */ var _bindings_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bindings.js */ "./models/bindings/bindings.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







describe('DebuggerLanguagePlugins', () => {
    describe('ExtensionRemoteObject', () => {
        describe('isLinearMemoryInspectable', () => {
            it('yields false when the extension object has no linear memory address', () => {
                const callFrame = sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.CallFrame);
                const extensionObject = {
                    type: 'object',
                    hasChildren: false,
                };
                const plugin = new _testing_LanguagePluginHelpers_js__WEBPACK_IMPORTED_MODULE_3__.TestPlugin('TestPlugin');
                const remoteObject = new _bindings_js__WEBPACK_IMPORTED_MODULE_6__.DebuggerLanguagePlugins.ExtensionRemoteObject(callFrame, extensionObject, plugin);
                assert.isFalse(remoteObject.isLinearMemoryInspectable());
            });
            it('yields true when the extension object has a linear memory address', () => {
                const callFrame = sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.CallFrame);
                const extensionObject = {
                    type: 'object',
                    linearMemoryAddress: 42,
                    hasChildren: false,
                };
                const plugin = new _testing_LanguagePluginHelpers_js__WEBPACK_IMPORTED_MODULE_3__.TestPlugin('TestPlugin');
                const remoteObject = new _bindings_js__WEBPACK_IMPORTED_MODULE_6__.DebuggerLanguagePlugins.ExtensionRemoteObject(callFrame, extensionObject, plugin);
                assert.isTrue(remoteObject.isLinearMemoryInspectable());
            });
        });
    });
    describe('DebuggerLanguagePluginManager', () => {
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.describeWithMockConnection)('getFunctionInfo', () => {
            let target;
            let pluginManager;
            const MISSING_DWO_FILE = 'test.dwo';
            const MISSING_DEBUG_FILES = {
                resourceUrl: MISSING_DWO_FILE,
                initiator: {
                    target: null,
                    frameId: null,
                    extensionId: 'chrome-extension-id',
                    initiatorUrl: 'chrome-extension-id',
                },
            };
            const FUNCTION_NAME = 'test';
            class Plugin extends _testing_LanguagePluginHelpers_js__WEBPACK_IMPORTED_MODULE_3__.TestPlugin {
                getFunctionInfo(_rawLocation) {
                    return Promise.resolve({ missingSymbolFiles: [] });
                }
                handleScript(_) {
                    return true;
                }
                addRawModule(_rawModuleId, _symbolsURL, _rawModule) {
                    return Promise.resolve(['https://script-host/script.js']);
                }
            }
            beforeEach(() => {
                target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)();
                const workspace = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.WorkspaceImpl.instance();
                const targetManager = target.targetManager();
                const resourceMapping = new _bindings_js__WEBPACK_IMPORTED_MODULE_6__.ResourceMapping.ResourceMapping(targetManager, workspace);
                const debuggerWorkspaceBinding = _bindings_js__WEBPACK_IMPORTED_MODULE_6__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({ forceNew: true, resourceMapping, targetManager });
                pluginManager = debuggerWorkspaceBinding.pluginManager;
            });
            function createAndRegisterScript() {
                const debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerModel);
                const scriptUrl = 'https://script-host/script.js';
                return debuggerModel.parsedScriptSource('0', scriptUrl, 0, 0, 0, 0, 0, '', null, false, undefined, false, false, 0, null, null, null, null, null, null);
            }
            it('correctly processes missing debug info if available', async () => {
                const plugin = new Plugin('TestPlugin');
                sinon.stub(plugin, 'getFunctionInfo').returns(Promise.resolve({ missingSymbolFiles: [MISSING_DWO_FILE] }));
                pluginManager.addPlugin(plugin);
                const script = createAndRegisterScript();
                const location = sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.Location);
                const result = await pluginManager.getFunctionInfo(script, location);
                _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.assertNotNullOrUndefined(result);
                assert.deepStrictEqual(result, { missingSymbolFiles: [MISSING_DEBUG_FILES] });
            });
            it('correctly returns frames if available', async () => {
                const plugin = new Plugin('TestPlugin');
                sinon.stub(plugin, 'getFunctionInfo').returns(Promise.resolve({ frames: [{ name: FUNCTION_NAME }] }));
                pluginManager.addPlugin(plugin);
                const script = createAndRegisterScript();
                const location = sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.Location);
                const result = await pluginManager.getFunctionInfo(script, location);
                _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.assertNotNullOrUndefined(result);
                assert.deepStrictEqual(result, { frames: [{ name: FUNCTION_NAME }] });
            });
            it('correctly returns frames and missing debug info if both are available', async () => {
                const plugin = new Plugin('TestPlugin');
                sinon.stub(plugin, 'getFunctionInfo')
                    .returns(Promise.resolve({ frames: [{ name: FUNCTION_NAME }], missingSymbolFiles: [MISSING_DWO_FILE] }));
                pluginManager.addPlugin(plugin);
                const script = createAndRegisterScript();
                const location = sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.Location);
                const result = await pluginManager.getFunctionInfo(script, location);
                _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.assertNotNullOrUndefined(result);
                assert.deepStrictEqual(result, { frames: [{ name: FUNCTION_NAME }], missingSymbolFiles: [MISSING_DEBUG_FILES] });
            });
        });
    });
});
//# sourceMappingURL=DebuggerLanguagePlugins.test.js.map

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

/***/ })

}]);