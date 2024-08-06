"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_bindings_ContentProviderBasedProject_test_js"],{

/***/ "./models/bindings/ContentProviderBasedProject.test.js":
/*!*************************************************************!*\
  !*** ./models/bindings/ContentProviderBasedProject.test.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/UISourceCodeHelpers.js */ "./testing/UISourceCodeHelpers.js");
/* harmony import */ var _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../workspace/workspace.js */ "./models/workspace/workspace.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



describe('ContentProviderBasedProject', () => {
    beforeEach(() => {
        _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__.Workspace.WorkspaceImpl.instance({ forceNew: true });
    });
    describe('findFilesMatchingSearchRequest', () => {
        it('filters UISourceCodes based on search query', async () => {
            const { project, uiSourceCodes } = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createContentProviderUISourceCodes)({
                items: [
                    {
                        url: 'http://example.com/a.js',
                        mimeType: 'text/javascript',
                        content: 'Single line with "foo"\n',
                    },
                    {
                        url: 'http://example.com/b.js',
                        mimeType: 'text/javascript',
                        content: 'Single line with "bar"\n',
                    },
                ],
            });
            const searchConfig = new _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__.SearchConfig.SearchConfig('foo', false, false);
            const result = await project.findFilesMatchingSearchRequest(searchConfig, uiSourceCodes, new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Progress.Progress());
            assert.hasAllKeys(result, [uiSourceCodes[0]]);
        });
        it('only includes files if all query parts are found in that file', async () => {
            const { project, uiSourceCodes } = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createContentProviderUISourceCodes)({
                items: [
                    {
                        url: 'http://example.com/a.js',
                        mimeType: 'text/javascript',
                        content: 'Single line with "foo"\n',
                    },
                    {
                        url: 'http://example.com/b.js',
                        mimeType: 'text/javascript',
                        content: 'Single line with "bar"\n',
                    },
                ],
            });
            const searchConfig = new _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__.SearchConfig.SearchConfig('"bar""line"', false, false);
            const result = await project.findFilesMatchingSearchRequest(searchConfig, uiSourceCodes, new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Progress.Progress());
            assert.hasAllKeys(result, [uiSourceCodes[1]]);
        });
        it('does include search matches in the result', async () => {
            const { project, uiSourceCodes } = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createContentProviderUISourceCodes)({
                items: [
                    {
                        url: 'http://example.com/a.js',
                        mimeType: 'text/javascript',
                        content: 'Single line with "foo"\n',
                    },
                    {
                        url: 'http://example.com/b.js',
                        mimeType: 'text/javascript',
                        content: 'Single line with "bar"\n',
                    },
                ],
            });
            const searchConfig = new _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__.SearchConfig.SearchConfig('line', false, false);
            const result = await project.findFilesMatchingSearchRequest(searchConfig, uiSourceCodes, new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Progress.Progress());
            assert.hasAllKeys(result, uiSourceCodes);
            assert.deepEqual(result.get(uiSourceCodes[0]), [{ lineNumber: 0, lineContent: 'Single line with "foo"', columnNumber: 7, matchLength: 4 }]);
            assert.deepEqual(result.get(uiSourceCodes[1]), [{ lineNumber: 0, lineContent: 'Single line with "bar"', columnNumber: 7, matchLength: 4 }]);
        });
        it('updates the progress per file', async () => {
            const { project, uiSourceCodes } = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createContentProviderUISourceCodes)({
                items: [
                    {
                        url: 'http://example.com/a.js',
                        mimeType: 'text/javascript',
                        content: 'Single line with "foo"\n',
                    },
                    {
                        url: 'http://example.com/b.js',
                        mimeType: 'text/javascript',
                        content: 'Single line with "bar"\n',
                    },
                ],
            });
            const searchConfig = new _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__.SearchConfig.SearchConfig('foo', false, false);
            const progress = sinon.spy(new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Progress.Progress());
            await project.findFilesMatchingSearchRequest(searchConfig, uiSourceCodes, progress);
            assert.isTrue(progress.setTotalWork.calledOnceWithExactly(2));
            assert.isTrue(progress.incrementWorked.calledTwice);
            assert.isTrue(progress.done.calledOnce);
        });
    });
});
//# sourceMappingURL=ContentProviderBasedProject.test.js.map

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