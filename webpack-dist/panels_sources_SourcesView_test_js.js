"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_sources_SourcesView_test_js"],{

/***/ "./panels/sources/SourcesView.test.js":
/*!********************************************!*\
  !*** ./panels/sources/SourcesView.test.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */ var _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/breakpoints/breakpoints.js */ "./models/breakpoints/breakpoints.js");
/* harmony import */ var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/persistence/persistence.js */ "./models/persistence/persistence.js");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */ var _testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../testing/UISourceCodeHelpers.js */ "./testing/UISourceCodeHelpers.js");
/* harmony import */ var _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/legacy/components/source_frame/source_frame.js */ "./ui/legacy/components/source_frame/source_frame.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/components.js */ "./panels/sources/components/components.js");
/* harmony import */ var _sources_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sources.js */ "./panels/sources/sources.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.














(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_7__.describeWithEnvironment)('SourcesView', () => {
    beforeEach(async () => {
        const actionRegistryInstance = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.ActionRegistry.ActionRegistry.instance({ forceNew: true });
        const workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.WorkspaceImpl.instance();
        const targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance();
        const resourceMapping = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.ResourceMapping.ResourceMapping(targetManager, workspace);
        const debuggerWorkspaceBinding = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
            forceNew: true,
            resourceMapping,
            targetManager,
        });
        const breakpointManager = _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_4__.BreakpointManager.BreakpointManager.instance({ forceNew: true, targetManager, workspace, debuggerWorkspaceBinding });
        _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_5__.Persistence.PersistenceImpl.instance({ forceNew: true, workspace, breakpointManager });
        _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_5__.NetworkPersistenceManager.NetworkPersistenceManager.instance({ forceNew: true, workspace });
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.ShortcutRegistry.ShortcutRegistry.instance({ forceNew: true, actionRegistry: actionRegistryInstance });
    });
    it('creates new source view of updated type when renamed file requires a different viewer', async () => {
        const sourcesView = new _sources_js__WEBPACK_IMPORTED_MODULE_13__.SourcesView.SourcesView();
        sourcesView.markAsRoot();
        sourcesView.show(document.body);
        const workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.WorkspaceImpl.instance();
        const { uiSourceCode, project } = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_9__.createFileSystemUISourceCode)({
            url: 'file:///path/to/overrides/example.html',
            mimeType: 'text/html',
        });
        project.canSetFileContent = () => true;
        project.rename =
            (uiSourceCode, newName, callback) => {
                const newURL = ('file:///path/to/overrides/' + newName);
                let newContentType = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Document;
                if (newName.endsWith('.jpg')) {
                    newContentType = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Image;
                }
                else if (newName.endsWith('.woff')) {
                    newContentType = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Font;
                }
                callback(true, newName, newURL, newContentType);
            };
        sourcesView.viewForFile(uiSourceCode);
        assert.isTrue(sourcesView.getSourceView(uiSourceCode) instanceof _sources_js__WEBPACK_IMPORTED_MODULE_13__.UISourceCodeFrame.UISourceCodeFrame);
        // Rename, but contentType stays the same
        await uiSourceCode.rename('newName.html');
        assert.isTrue(sourcesView.getSourceView(uiSourceCode) instanceof _sources_js__WEBPACK_IMPORTED_MODULE_13__.UISourceCodeFrame.UISourceCodeFrame);
        // Rename which changes contentType
        await uiSourceCode.rename('image.jpg');
        assert.isTrue(sourcesView.getSourceView(uiSourceCode) instanceof _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_10__.ImageView.ImageView);
        // Rename which changes contentType
        await uiSourceCode.rename('font.woff');
        assert.isTrue(sourcesView.getSourceView(uiSourceCode) instanceof _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_10__.FontView.FontView);
        workspace.removeProject(project);
        sourcesView.detach();
    });
    it('creates a HeadersView when the filename is \'.headers\'', async () => {
        const sourcesView = new _sources_js__WEBPACK_IMPORTED_MODULE_13__.SourcesView.SourcesView();
        const uiSourceCode = new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.UISourceCode({}, 'file:///path/to/overrides/www.example.com/.headers', _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Document);
        sourcesView.viewForFile(uiSourceCode);
        assert.isTrue(sourcesView.getSourceView(uiSourceCode) instanceof _components_components_js__WEBPACK_IMPORTED_MODULE_12__.HeadersView.HeadersView);
    });
    describe('viewForFile', () => {
        it('records the correct media type in the DevTools.SourcesPanelFileOpened metric', async () => {
            const sourcesView = new _sources_js__WEBPACK_IMPORTED_MODULE_13__.SourcesView.SourcesView();
            const { uiSourceCode } = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_9__.createFileSystemUISourceCode)({
                url: 'file:///path/to/project/example.ts',
                mimeType: 'text/typescript',
                content: 'export class Foo {}',
            });
            const sourcesPanelFileOpenedSpy = sinon.spy(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics, 'sourcesPanelFileOpened');
            const contentLoadedPromise = new Promise(res => window.addEventListener('source-file-loaded', res));
            const widget = sourcesView.viewForFile(uiSourceCode);
            assert.instanceOf(widget, _sources_js__WEBPACK_IMPORTED_MODULE_13__.UISourceCodeFrame.UISourceCodeFrame);
            const uiSourceCodeFrame = widget;
            // Skip creating the DebuggerPlugin, which times out and simulate DOM attach/showing.
            sinon.stub(uiSourceCodeFrame, 'loadPlugins').callsFake(() => { });
            uiSourceCodeFrame.wasShown();
            await contentLoadedPromise;
            assert.isTrue(sourcesPanelFileOpenedSpy.calledWithExactly('text/typescript'));
        });
    });
});
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_8__.describeWithMockConnection)('SourcesView', () => {
    let target1;
    let target2;
    beforeEach(() => {
        const actionRegistryInstance = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.ActionRegistry.ActionRegistry.instance({ forceNew: true });
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.ShortcutRegistry.ShortcutRegistry.instance({ forceNew: true, actionRegistry: actionRegistryInstance });
        target1 = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_7__.createTarget)();
        target2 = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_7__.createTarget)();
        const targetManager = target1.targetManager();
        targetManager.setScopeTarget(target1);
        const workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.WorkspaceImpl.instance();
        const resourceMapping = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.ResourceMapping.ResourceMapping(targetManager, workspace);
        _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.CSSWorkspaceBinding.CSSWorkspaceBinding.instance({ forceNew: true, resourceMapping, targetManager });
        const debuggerWorkspaceBinding = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
            forceNew: true,
            resourceMapping,
            targetManager,
        });
        _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.IgnoreListManager.IgnoreListManager.instance({ forceNew: true, debuggerWorkspaceBinding });
        const breakpointManager = _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_4__.BreakpointManager.BreakpointManager.instance({ forceNew: true, targetManager, workspace, debuggerWorkspaceBinding });
        _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_5__.Persistence.PersistenceImpl.instance({ forceNew: true, workspace, breakpointManager });
        _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_5__.NetworkPersistenceManager.NetworkPersistenceManager.instance({ forceNew: true, workspace });
    });
    it('creates editor tabs only for in-scope uiSourceCodes', () => {
        const addUISourceCodeSpy = sinon.spy(_sources_js__WEBPACK_IMPORTED_MODULE_13__.TabbedEditorContainer.TabbedEditorContainer.prototype, 'addUISourceCode');
        const removeUISourceCodesSpy = sinon.spy(_sources_js__WEBPACK_IMPORTED_MODULE_13__.TabbedEditorContainer.TabbedEditorContainer.prototype, 'removeUISourceCodes');
        (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_9__.createContentProviderUISourceCodes)({
            items: [
                { url: 'http://example.com/a.js', mimeType: 'application/javascript' },
                { url: 'http://example.com/b.js', mimeType: 'application/javascript' },
            ],
            projectId: 'projectId1',
            projectType: _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.projectTypes.Network,
            target: target1,
        });
        (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_9__.createContentProviderUISourceCodes)({
            items: [
                { url: 'http://foo.com/script.js', mimeType: 'application/javascript' },
            ],
            projectId: 'projectId2',
            projectType: _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.projectTypes.Network,
            target: target2,
        });
        new _sources_js__WEBPACK_IMPORTED_MODULE_13__.SourcesView.SourcesView();
        let addedURLs = addUISourceCodeSpy.args.map(args => args[0].url());
        assert.deepEqual(addedURLs, ['http://example.com/a.js', 'http://example.com/b.js']);
        assert.isTrue(removeUISourceCodesSpy.notCalled);
        addUISourceCodeSpy.resetHistory();
        target2.targetManager().setScopeTarget(target2);
        addedURLs = addUISourceCodeSpy.args.map(args => args[0].url());
        assert.deepEqual(addedURLs, ['http://foo.com/script.js']);
        const removedURLs = removeUISourceCodesSpy.args.map(args => args[0][0].url());
        assert.deepEqual(removedURLs, ['http://example.com/a.js', 'http://example.com/b.js']);
    });
    it('doesn\'t remove non-network UISourceCodes when changing the scope target', () => {
        (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_9__.createFileSystemUISourceCode)({
            url: 'snippet:///foo.js',
            mimeType: 'application/javascript',
            type: 'snippets',
        });
        const sourcesView = new _sources_js__WEBPACK_IMPORTED_MODULE_13__.SourcesView.SourcesView();
        const removeUISourceCodesSpy = sinon.spy(sourcesView.editorContainer, 'removeUISourceCodes');
        target2.targetManager().setScopeTarget(target2);
        assert.isTrue(removeUISourceCodesSpy.notCalled);
    });
});
//# sourceMappingURL=SourcesView.test.js.map

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