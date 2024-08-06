"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_coverage_CoverageDecorationManager_test_js"],{

/***/ "./panels/coverage/CoverageDecorationManager.test.js":
/*!***********************************************************!*\
  !*** ./panels/coverage/CoverageDecorationManager.test.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */ var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */ var _testing_MockScopeChain_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../testing/MockScopeChain.js */ "./testing/MockScopeChain.js");
/* harmony import */ var _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../testing/ResourceTreeHelpers.js */ "./testing/ResourceTreeHelpers.js");
/* harmony import */ var _testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../testing/UISourceCodeHelpers.js */ "./testing/UISourceCodeHelpers.js");
/* harmony import */ var _coverage_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./coverage.js */ "./panels/coverage/coverage.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.










const { CoverageDecorationManager } = _coverage_js__WEBPACK_IMPORTED_MODULE_9__.CoverageDecorationManager;
/** Test helper that returns the "identity" line ranges for any given string */
function lineRangesForContent(content) {
    const ranges = [];
    const text = new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_2__.Text.Text(content);
    for (let i = 0; i < text.lineCount(); ++i) {
        const line = text.lineAt(i);
        ranges.push(new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_2__.TextRange.TextRange(i, 0, i, line.length));
    }
    return ranges;
}
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.describeWithMockConnection)('CoverageDeocrationManager', () => {
    let target;
    let backend;
    let debuggerBinding;
    let workspace;
    let cssBinding;
    let coverageModel;
    beforeEach(async () => {
        backend = new _testing_MockScopeChain_js__WEBPACK_IMPORTED_MODULE_6__.MockProtocolBackend();
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__.createTarget)();
        workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__.Workspace.WorkspaceImpl.instance({ forceNew: true });
        const targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance();
        const resourceMapping = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.ResourceMapping.ResourceMapping(targetManager, workspace);
        debuggerBinding = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
            forceNew: true,
            resourceMapping,
            targetManager,
        });
        _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.IgnoreListManager.IgnoreListManager.instance({ forceNew: true, debuggerWorkspaceBinding: debuggerBinding });
        cssBinding =
            _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.CSSWorkspaceBinding.CSSWorkspaceBinding.instance({ forceNew: true, resourceMapping, targetManager });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().setScopeTarget(target);
        // Since we wanna mock 'usageForRange' we stub the whole instance. Otherwise we'd use half
        // a stub and half the real thing.
        coverageModel = sinon.createStubInstance(_coverage_js__WEBPACK_IMPORTED_MODULE_9__.CoverageModel.CoverageModel);
        // Wait for the resource tree model to load; otherwise, our uiSourceCodes could be asynchronously
        // invalidated during the test.
        await (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_7__.getInitializedResourceTreeModel)(target);
    });
    const URL = 'http://example.com/index.js';
    describe('usageByLine (raw)', () => {
        it('marks lines as "unknown" coverge status if no coverage info is available', async () => {
            await backend.addScript(target, { url: URL, content: 'function foo(a,b){return a+b;}' }, null);
            const uiSourceCode = workspace.uiSourceCodeForURL(URL);
            assert.exists(uiSourceCode);
            await uiSourceCode.requestContentData();
            const manager = new CoverageDecorationManager(coverageModel, workspace, debuggerBinding, cssBinding);
            const usage = await manager.usageByLine(uiSourceCode, lineRangesForContent(uiSourceCode.content()));
            assert.deepEqual(usage, [undefined]);
        });
        it('marks lines as covered if coverage info says so', async () => {
            await backend.addScript(target, { url: URL, content: 'function foo(a,b){return a+b;}' }, null);
            const uiSourceCode = workspace.uiSourceCodeForURL(URL);
            assert.exists(uiSourceCode);
            await uiSourceCode.requestContentData();
            coverageModel.usageForRange.returns(true);
            const manager = new CoverageDecorationManager(coverageModel, workspace, debuggerBinding, cssBinding);
            const usage = await manager.usageByLine(uiSourceCode, lineRangesForContent(uiSourceCode.content()));
            assert.deepEqual(usage, [true]);
        });
    });
    describe('usageByLine (formatted)', () => {
        it('marks lines as covered if coverage info says so', async () => {
            const scriptContent = 'function mulWithOffset(n,t,e){const f=n*t;const u=f;if(e!==undefined){const n=u+e;return n}return u}';
            const script = await backend.addScript(target, { url: URL, content: scriptContent }, null);
            const uiSourceCode = workspace.uiSourceCodeForURL(URL);
            assert.exists(uiSourceCode);
            await uiSourceCode.requestContentData();
            coverageModel.usageForRange.callsFake((contentProvider, startOffset, endOffset) => {
                assert.strictEqual(contentProvider, script);
                // Everything is covered except the body of the `if`.
                return endOffset <= 70 || startOffset > 90;
            });
            const manager = new CoverageDecorationManager(coverageModel, workspace, debuggerBinding, cssBinding);
            // clang-format off
            // Simulate editor pretty-printing `script`.
            const lineRanges = [
                new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_2__.TextRange.TextRange(0, 0, 0, 30), // function mulWithOffset(n,t,e){
                new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_2__.TextRange.TextRange(0, 30, 0, 42), //   const f=n*t;
                new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_2__.TextRange.TextRange(0, 42, 0, 52), //   const u=f;
                new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_2__.TextRange.TextRange(0, 52, 0, 70), //   if(e!==undefined){
                new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_2__.TextRange.TextRange(0, 70, 0, 82), //     const n=u+e;
                new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_2__.TextRange.TextRange(0, 82, 0, 90), //     return n
                new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_2__.TextRange.TextRange(0, 90, 0, 91), //   }
                new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_2__.TextRange.TextRange(0, 91, 0, 99), //   return u
                new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_2__.TextRange.TextRange(0, 99, 0, 100), // }
            ];
            // clang-format on
            const usage = await manager.usageByLine(uiSourceCode, lineRanges);
            assert.deepEqual(usage, [true, true, true, true, false, false, false, true, true]);
        });
    });
    describe('usageByLine (sourcemap)', () => {
        let script;
        beforeEach(async () => {
            const originalContent = `
function mulWithOffset(param1, param2, offset) {
  const intermediate = param1 * param2;
  const result = intermediate;
  if (offset !== undefined) {
    const intermediate = result + offset;
    return intermediate;
  }
  return result;
}
`;
            const sourceMapUrl = 'file:///tmp/example.js.min.map';
            // This was minified with 'terser -m -o example.min.js --source-map "includeSources;url=example.min.js.map"' v5.7.0.
            const sourceMapContent = JSON.stringify({
                version: 3,
                names: ['mulWithOffset', 'param1', 'param2', 'offset', 'intermediate', 'result', 'undefined'],
                sources: ['example.js'],
                sourcesContent: [originalContent],
                mappings: 'AACA,SAASA,cAAcC,EAAQC,EAAQC,GACrC,MAAMC,EAAeH,EAASC,EAC9B,MAAMG,EAASD,EACf,GAAID,IAAWG,UAAW,CACxB,MAAMF,EAAeC,EAASF,EAC9B,OAAOC,CACT,CACA,OAAOC,CACT',
            });
            const scriptContent = 'function mulWithOffset(n,t,e){const f=n*t;const u=f;if(e!==undefined){const n=u+e;return n}return u}';
            script = await backend.addScript(target, { url: 'file:///tmp/bundle.js', content: scriptContent }, { url: sourceMapUrl, content: sourceMapContent });
        });
        it('marks lines as covered if coverage info says so', async () => {
            const uiSourceCode = workspace.uiSourceCodeForURL('file:///tmp/example.js');
            assert.exists(uiSourceCode);
            await uiSourceCode.requestContentData();
            coverageModel.usageForRange.callsFake((contentProvider, startOffset, endOffset) => {
                assert.strictEqual(contentProvider, script);
                // Everything is covered except the body of the `if`.
                return endOffset < 70 || startOffset > 90;
            });
            const manager = new CoverageDecorationManager(coverageModel, workspace, debuggerBinding, cssBinding);
            const usage = await manager.usageByLine(uiSourceCode, lineRangesForContent(uiSourceCode.content()));
            assert.deepEqual(usage, [undefined, true, true, true, true, false, false, undefined, true, undefined, undefined]);
        });
    });
    it('sets the "decorationData" on all existing UISourceCodes', () => {
        const { uiSourceCode } = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_8__.createContentProviderUISourceCode)({ url: URL, mimeType: 'text/javascript' });
        const manager = new CoverageDecorationManager(coverageModel, workspace, debuggerBinding, cssBinding);
        assert.strictEqual(uiSourceCode.getDecorationData(_coverage_js__WEBPACK_IMPORTED_MODULE_9__.CoverageDecorationManager.decoratorType), manager);
    });
    it('sets the "decorationData" on newly added UISourceCodes (after the manager already exists)', () => {
        const manager = new CoverageDecorationManager(coverageModel, workspace, debuggerBinding, cssBinding);
        const { uiSourceCode } = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_8__.createContentProviderUISourceCode)({ url: URL, mimeType: 'text/javascript' });
        assert.strictEqual(uiSourceCode.getDecorationData(_coverage_js__WEBPACK_IMPORTED_MODULE_9__.CoverageDecorationManager.decoratorType), manager);
    });
    it('does not update the "decorationData" on newly added UISourceCodes after being disposed', () => {
        const manager = new CoverageDecorationManager(coverageModel, workspace, debuggerBinding, cssBinding);
        manager.dispose();
        const { uiSourceCode } = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_8__.createContentProviderUISourceCode)({ url: URL, mimeType: 'text/javascript' });
        assert.isUndefined(uiSourceCode.getDecorationData(_coverage_js__WEBPACK_IMPORTED_MODULE_9__.CoverageDecorationManager.decoratorType));
    });
    describe('reset', () => {
        it('resets the "decorationData" on all existing UISourceCodes to "undefined"', () => {
            const { uiSourceCode } = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_8__.createContentProviderUISourceCode)({ url: URL, mimeType: 'text/javascript' });
            const manager = new CoverageDecorationManager(coverageModel, workspace, debuggerBinding, cssBinding);
            manager.reset();
            assert.isUndefined(uiSourceCode.getDecorationData(_coverage_js__WEBPACK_IMPORTED_MODULE_9__.CoverageDecorationManager.decoratorType));
        });
    });
});
//# sourceMappingURL=CoverageDecorationManager.test.js.map

/***/ }),

/***/ "./panels/coverage/coverage.js":
/*!*************************************!*\
  !*** ./panels/coverage/coverage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CoverageDecorationManager: () => (/* reexport module object */ _CoverageDecorationManager_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   CoverageListView: () => (/* reexport module object */ _CoverageListView_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   CoverageModel: () => (/* reexport module object */ _CoverageModel_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   CoverageView: () => (/* reexport module object */ _CoverageView_js__WEBPACK_IMPORTED_MODULE_2__)
/* harmony export */ });
/* harmony import */ var _CoverageModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CoverageModel.js */ "./panels/coverage/CoverageModel.js");
/* harmony import */ var _CoverageListView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CoverageListView.js */ "./panels/coverage/CoverageListView.js");
/* harmony import */ var _CoverageView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CoverageView.js */ "./panels/coverage/CoverageView.js");
/* harmony import */ var _CoverageDecorationManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CoverageDecorationManager.js */ "./panels/coverage/CoverageDecorationManager.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.









//# sourceMappingURL=coverage.js.map

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