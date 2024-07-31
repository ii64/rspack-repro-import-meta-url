"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_models_persistence_PersistenceImpl_test_ts"],{

/***/ "./src/models/persistence/PersistenceImpl.test.ts":
/*!********************************************************!*\
  !*** ./src/models/persistence/PersistenceImpl.test.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _testing_MockScopeChain_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/MockScopeChain.js */ "./src/testing/MockScopeChain.ts");
/* harmony import */ var _testing_PersistenceHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/PersistenceHelpers.js */ "./src/testing/PersistenceHelpers.ts");
/* harmony import */ var _testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../testing/UISourceCodeHelpers.js */ "./src/testing/UISourceCodeHelpers.ts");
/* harmony import */ var _bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../bindings/bindings.js */ "./src/models/bindings/bindings.ts");
/* harmony import */ var _breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../breakpoints/breakpoints.js */ "./src/models/breakpoints/breakpoints.ts");
/* harmony import */ var _persistence_persistence_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../persistence/persistence.js */ "./src/models/persistence/persistence.ts");
/* harmony import */ var _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../workspace/workspace.js */ "./src/models/workspace/workspace.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.










(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('PersistenceImpl', () => {
    const FILE_SYSTEM_BREAK_ID = 'BREAK_ID';
    const FILE_SYSTEM_SCRIPT_ID = 'FILE_SYSTEM_SCRIPT';
    const NETWORK_BREAKPOINT_ID = 'BREAKPOINT_ID';
    let backend;
    let target;
    let breakpointManager;
    const DEFAULT_BREAKPOINT = [
        _breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_7__.BreakpointManager.EMPTY_BREAKPOINT_CONDITION,
        true, // enabled
        false, // isLogpoint
        _breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_7__.BreakpointManager.BreakpointOrigin.OTHER,
    ];
    const SCRIPT_DESCRIPTION = {
        url: 'http://www.google.com/script.js',
        content: 'console.log(1);\nconsole.log(2);\n',
        startLine: 0,
        startColumn: 0,
        hasSourceURL: false,
    };
    beforeEach(() => {
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
        const workspace = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_9__.Workspace.WorkspaceImpl.instance();
        const targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance();
        const resourceMapping = new _bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.ResourceMapping.ResourceMapping(targetManager, workspace);
        const debuggerWorkspaceBinding = _bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
            forceNew: true,
            resourceMapping,
            targetManager,
        });
        _bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.IgnoreListManager.IgnoreListManager.instance({ forceNew: true, debuggerWorkspaceBinding });
        breakpointManager = _breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_7__.BreakpointManager.BreakpointManager.instance({ forceNew: true, targetManager, workspace, debuggerWorkspaceBinding });
        backend = new _testing_MockScopeChain_js__WEBPACK_IMPORTED_MODULE_3__.MockProtocolBackend();
        _persistence_persistence_js__WEBPACK_IMPORTED_MODULE_8__.Persistence.PersistenceImpl.instance({ forceNew: true, workspace, breakpointManager });
    });
    async function setBreakpointOnFileSystem(fileSystemUiSourceCode, breakpointLine) {
        const fileSystemBreakpointResponse = backend.responderToBreakpointByUrlRequest(fileSystemUiSourceCode.url(), breakpointLine)({
            breakpointId: FILE_SYSTEM_BREAK_ID,
            locations: [
                {
                    scriptId: FILE_SYSTEM_SCRIPT_ID,
                    lineNumber: breakpointLine,
                    columnNumber: 0,
                },
            ],
        });
        // Set the breakpoint on the file system uiSourceCode.
        await breakpointManager.setBreakpoint(fileSystemUiSourceCode, breakpointLine, 0, ...DEFAULT_BREAKPOINT);
        await fileSystemBreakpointResponse;
    }
    async function attachNetworkScript(breakpointLine) {
        const script = await backend.addScript(target, SCRIPT_DESCRIPTION, null);
        const uiSourceCode = _bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().uiSourceCodeForScript(script);
        assert.exists(uiSourceCode);
        // Set the breakpoint response for our upcoming request to set the breakpoint on the network file.
        await backend.responderToBreakpointByUrlRequest(script.sourceURL, breakpointLine)({
            breakpointId: NETWORK_BREAKPOINT_ID,
            locations: [
                {
                    scriptId: script.scriptId,
                    lineNumber: breakpointLine,
                    columnNumber: 0,
                },
            ],
        });
        return uiSourceCode;
    }
    function assertBreakLocationUiSourceCodes(uiSourceCodes) {
        const locations = breakpointManager.allBreakpointLocations();
        assert.deepEqual(locations.map(loc => loc.uiLocation.uiSourceCode), uiSourceCodes);
    }
    it('moves breakpoint from file system uiSourceCode to the network uiSourceCode when binding is created', async () => {
        const fileSystemPath = 'file://path/to/filesystem';
        const fileSystemFileUrl = fileSystemPath + '/script.js';
        const { uiSourceCode: fileSystemUiSourceCode, project } = (0,_testing_PersistenceHelpers_js__WEBPACK_IMPORTED_MODULE_4__.createFileSystemFileForPersistenceTests)({ fileSystemPath, fileSystemFileUrl, type: '' }, SCRIPT_DESCRIPTION.url, SCRIPT_DESCRIPTION.content, target);
        const breakpointLine = 0;
        // Set the breakpoint response for our upcoming request.
        await setBreakpointOnFileSystem(fileSystemUiSourceCode, breakpointLine);
        // We should only have one breakpoint location: the one on the file system.
        assertBreakLocationUiSourceCodes([fileSystemUiSourceCode]);
        // Add the script.
        const networkUiSourceCode = await attachNetworkScript(breakpointLine);
        // We should only have one breakpoint location: the one on the network.
        assertBreakLocationUiSourceCodes([networkUiSourceCode]);
        project.dispose();
        assertBreakLocationUiSourceCodes([networkUiSourceCode]);
    });
    it('copies breakpoint from network uiSourceCode to the file system uiSourceCode when binding is removed ', async () => {
        const fileSystemPath = 'file://path/to/filesystem';
        const fileSystemFileUrl = fileSystemPath + '/script.js';
        const { uiSourceCode: fileSystemUiSourceCode, project } = (0,_testing_PersistenceHelpers_js__WEBPACK_IMPORTED_MODULE_4__.createFileSystemFileForPersistenceTests)({ fileSystemPath, fileSystemFileUrl, type: '' }, SCRIPT_DESCRIPTION.url, SCRIPT_DESCRIPTION.content, target);
        const breakpointLine = 0;
        // Set the breakpoint response for our upcoming request.
        await setBreakpointOnFileSystem(fileSystemUiSourceCode, breakpointLine);
        // We should only have one breakpoint location: the one on the file system.
        assertBreakLocationUiSourceCodes([fileSystemUiSourceCode]);
        // Add the script.
        const networkUiSourceCode = await attachNetworkScript(breakpointLine);
        // We should only have one breakpoint location: the one on the network.
        assertBreakLocationUiSourceCodes([networkUiSourceCode]);
        // Prepare to remove the binding. This will cause the breakpoint from the network to be copied
        // over to the file system uiSourceCode.
        const persistence = _persistence_persistence_js__WEBPACK_IMPORTED_MODULE_8__.Persistence.PersistenceImpl.instance();
        const binding = persistence.binding(fileSystemUiSourceCode);
        assert.exists(binding);
        // Set the breakpoint response for our upcoming request on the file system.
        const moveResponse = backend.responderToBreakpointByUrlRequest(fileSystemUiSourceCode.url(), breakpointLine)({
            breakpointId: FILE_SYSTEM_BREAK_ID,
            locations: [
                {
                    scriptId: FILE_SYSTEM_SCRIPT_ID,
                    lineNumber: breakpointLine,
                    columnNumber: 0,
                },
            ],
        });
        await persistence.removeBinding(binding);
        await moveResponse;
        assertBreakLocationUiSourceCodes([networkUiSourceCode, fileSystemUiSourceCode]);
        project.dispose();
    });
    // Replaces web test: http/tests/devtools/persistence/automapping-bind-committed-network-sourcecode.js
    it('it marks the filesystem UISourceCode dirty when the network UISourceCode was committed before the binding was established', async () => {
        const url = 'https://example.com/script.js';
        const origContent = 'window.foo = () => "foo";\n';
        const { uiSourceCode: networkUISourceCode } = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.createContentProviderUISourceCode)({
            url,
            content: origContent,
            mimeType: 'text/javascript',
            projectType: _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_9__.Workspace.projectTypes.Network,
            metadata: new _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_9__.UISourceCode.UISourceCodeMetadata(null, origContent.length),
        });
        // Modify the content of the network UISourceCode.
        const content = origContent.replace(/foo/g, 'bar');
        networkUISourceCode.addRevision(content);
        // Add a filesystem version of 'script.js' with the original content.
        const mappingPromise = _persistence_persistence_js__WEBPACK_IMPORTED_MODULE_8__.Persistence.PersistenceImpl.instance().once(_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_8__.Persistence.Events.BindingCreated);
        const localUrl = 'file:///var/www/script.js';
        const { uiSourceCode } = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.createFileSystemUISourceCode)({
            url: localUrl,
            mimeType: 'text/javascript',
            content: origContent,
            autoMapping: true,
            metadata: new _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_9__.UISourceCode.UISourceCodeMetadata(null, origContent.length),
        });
        const { network, fileSystem } = await mappingPromise;
        assert.strictEqual(network, networkUISourceCode);
        assert.strictEqual(fileSystem, uiSourceCode);
        assert.isTrue(fileSystem.isDirty());
        assert.strictEqual(fileSystem.workingCopy(), content);
    });
});


/***/ }),

/***/ "./src/testing/PersistenceHelpers.ts":
/*!*******************************************!*\
  !*** ./src/testing/PersistenceHelpers.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createFileSystemFileForPersistenceTests: () => (/* binding */ createFileSystemFileForPersistenceTests)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/workspace/workspace.js */ "./src/models/workspace/workspace.ts");
/* harmony import */ var _MockConnection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ResourceTreeHelpers.js */ "./src/testing/ResourceTreeHelpers.ts");
/* harmony import */ var _UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UISourceCodeHelpers.js */ "./src/testing/UISourceCodeHelpers.ts");
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
    const resource = (0,_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.createResource)((0,_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getMainFrame)(target), networkScriptUrl, mimeType, content);
    // Now create the file system uiSourceCode to match the same meta data and content as the
    // created network's resource file.
    const metadata = new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__.UISourceCode.UISourceCodeMetadata(resource.lastModified(), resource.contentSize());
    return (0,_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.createFileSystemUISourceCode)({
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
    (0,_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.dispatchEvent)(target, 'Page.documentOpened', {
        frame: {
            id: 'main',
            loaderId: 'foo',
            url: `${origin}/index.html`,
            domainAndRegistry: 'site',
            securityOrigin: origin,
            mimeType: 'text/html',
            secureContextType: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Page.SecureContextType.Secure,
            crossOriginIsolatedContextType: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Page.CrossOriginIsolatedContextType.Isolated,
            gatedAPIFeatures: [],
        },
    });
}


/***/ }),

/***/ "./src/testing/UISourceCodeHelpers.ts":
/*!********************************************!*\
  !*** ./src/testing/UISourceCodeHelpers.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContentProviderUISourceCode: () => (/* binding */ createContentProviderUISourceCode),
/* harmony export */   createContentProviderUISourceCodes: () => (/* binding */ createContentProviderUISourceCodes),
/* harmony export */   createFakeScriptMapping: () => (/* binding */ createFakeScriptMapping),
/* harmony export */   createFileSystemUISourceCode: () => (/* binding */ createFileSystemUISourceCode),
/* harmony export */   setupMockedUISourceCode: () => (/* binding */ setupMockedUISourceCode)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/bindings/bindings.js */ "./src/models/bindings/bindings.ts");
/* harmony import */ var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/persistence/persistence.js */ "./src/models/persistence/persistence.ts");
/* harmony import */ var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/text_utils/text_utils.js */ "./src/models/text_utils/text_utils.ts");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/workspace/workspace.js */ "./src/models/workspace/workspace.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _TestPlatformFileSystem_mimeType, _TestPlatformFileSystem_autoMapping, _TestFileSystem_content, _TestFileSystem_metadata;






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
    constructor(path, type, mimeType, autoMapping) {
        super(path, type);
        _TestPlatformFileSystem_mimeType.set(this, void 0);
        _TestPlatformFileSystem_autoMapping.set(this, void 0);
        __classPrivateFieldSet(this, _TestPlatformFileSystem_mimeType, mimeType, "f");
        __classPrivateFieldSet(this, _TestPlatformFileSystem_autoMapping, autoMapping, "f");
    }
    supportsAutomapping() {
        return __classPrivateFieldGet(this, _TestPlatformFileSystem_autoMapping, "f");
    }
    mimeFromPath(_path) {
        return __classPrivateFieldGet(this, _TestPlatformFileSystem_mimeType, "f");
    }
}
_TestPlatformFileSystem_mimeType = new WeakMap(), _TestPlatformFileSystem_autoMapping = new WeakMap();
class TestFileSystem extends _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__.FileSystemWorkspaceBinding.FileSystem {
    constructor(options) {
        super(options.fileSystemWorkspaceBinding, options.platformFileSystem, options.workspace);
        _TestFileSystem_content.set(this, void 0);
        _TestFileSystem_metadata.set(this, void 0);
        __classPrivateFieldSet(this, _TestFileSystem_content, options.content, "f");
        __classPrivateFieldSet(this, _TestFileSystem_metadata, options.metadata, "f");
    }
    requestFileContent(_uiSourceCode) {
        return Promise.resolve(new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__.ContentData.ContentData(__classPrivateFieldGet(this, _TestFileSystem_content, "f"), /* isBase64 */ false, 'text/plain'));
    }
    requestMetadata(_uiSourceCode) {
        return Promise.resolve(__classPrivateFieldGet(this, _TestFileSystem_metadata, "f"));
    }
}
_TestFileSystem_content = new WeakMap(), _TestFileSystem_metadata = new WeakMap();
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


/***/ })

}]);