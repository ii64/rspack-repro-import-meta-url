"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_models_workspace_UISourceCode_test_ts"],{

/***/ "./src/models/workspace/UISourceCode.test.ts":
/*!***************************************************!*\
  !*** ./src/models/workspace/UISourceCode.test.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/UISourceCodeHelpers.js */ "./src/testing/UISourceCodeHelpers.ts");
/* harmony import */ var _text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../text_utils/text_utils.js */ "./src/models/text_utils/text_utils.ts");
/* harmony import */ var _workspace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./workspace.js */ "./src/models/workspace/workspace.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



describe('UISourceCode', () => {
    it('can return name', async () => {
        const sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)('http://www.example.com:8080/testing/test?isTest=true');
        const result = sutObject.sut.name();
        assert.strictEqual(result, 'test?isTest=true');
    });
    it('can return url', async () => {
        const sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)('https://example.com/');
        const result = sutObject.sut.url();
        assert.strictEqual(result, 'https://example.com/');
    });
    it('can return canononical script ID', async () => {
        const sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)('https://example.com/');
        sutObject.contentTypeStub.name.returns('nameExample');
        const result = sutObject.sut.canononicalScriptId();
        assert.strictEqual(result, 'nameExample,https://example.com/');
    });
    it('can return parent URL', async () => {
        const sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)('http://www.example.com:8080/testing/test?isTest=true');
        const result = sutObject.sut.parentURL();
        assert.strictEqual(result, 'http://www.example.com:8080/testing');
    });
    it('can return origin', async () => {
        const sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)('http://www.example.com:8080/testing/test?isTest=true');
        const result = sutObject.sut.origin();
        assert.strictEqual(result, 'http://www.example.com:8080');
    });
    it('can return trimmed display name', async () => {
        const url = 'http://www.example.com:8080/testing/' +
            'test'.repeat(30) + '?isTest=true';
        const sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)(url);
        const result = sutObject.sut.displayName(false);
        assert.isTrue('test'.repeat(30).startsWith(result.slice(0, -1)), 'display name does not show the correct text');
        assert.isTrue(result.endsWith('…'), 'display name does not end with \'…\'');
    });
    it('can return untrimmed display name', async () => {
        const url = 'http://www.example.com:8080/testing/' +
            'test'.repeat(30) + '?isTest=true';
        const sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)(url);
        const result = sutObject.sut.displayName(true);
        assert.strictEqual(result, 'test'.repeat(30) + '?isTest=true');
    });
    it('can request project metadata', async () => {
        const sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)();
        sutObject.projectStub.requestMetadata.resolves(null);
        const result = await sutObject.sut.requestMetadata();
        assert.strictEqual(result, null);
    });
    it('can return full display name', async () => {
        const sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)();
        sutObject.projectStub.fullDisplayName.returns('Test Name');
        const result = sutObject.sut.fullDisplayName();
        assert.strictEqual(result, 'Test Name');
    });
    it('can return MIME type', async () => {
        const sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)();
        sutObject.projectStub.mimeType.returns('Test Type');
        const result = sutObject.sut.mimeType();
        assert.strictEqual(result, 'Test Type');
    });
    it('can return display name', async () => {
        const sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)('http://www.example.com:8080/testing/test?isTest=true');
        const result = sutObject.sut.displayName();
        assert.strictEqual(result, 'test?isTest=true');
    });
    it('can return whether or not the project can be renamed', async () => {
        const sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)();
        sutObject.projectStub.canRename.returns(true);
        const result = sutObject.sut.canRename();
        assert.isTrue(result);
    });
    it('can rename a project', async () => {
        const sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)();
        sutObject.projectStub.workspace.returns(sinon.createStubInstance(_workspace_js__WEBPACK_IMPORTED_MODULE_2__.Workspace.WorkspaceImpl));
        const rawPathstringExample = 'newName.html';
        sutObject.projectStub.rename.callsFake((uiSourceCode, rawPathstringExample, innerCallback) => {
            innerCallback(true, rawPathstringExample);
        });
        await sutObject.sut.rename(rawPathstringExample);
        assert.strictEqual(sutObject.sut.name(), 'newName.html');
    });
    it('deletes file by calling the project deleteFile function', async () => {
        const sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)();
        sutObject.sut.remove();
        sinon.assert.calledOnce(sutObject.projectStub.deleteFile);
    });
    it('can return content URL', async () => {
        const sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)('http://www.example.com:8080/testing/test?isTest=true');
        const result = sutObject.sut.contentURL();
        assert.strictEqual(result, 'http://www.example.com:8080/testing/test?isTest=true');
    });
    it('can return content type', async () => {
        const sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)();
        const result = sutObject.sut.contentType();
        assert.strictEqual(result, sutObject.contentTypeStub);
    });
    it('can request content', async () => {
        const sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)();
        const contentData = new _text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_1__.ContentData.ContentData('Example', false, 'text/plain');
        sutObject.projectStub.requestFileContent.resolves(contentData);
        const result = await sutObject.sut.requestContent();
        assert.deepEqual(result, contentData.asDeferedContent());
    });
    it('check if the content is encoded', async () => {
        const sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)();
        const deferredContentStub = new _text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_1__.ContentData.ContentData('AQIDBA==', true, 'application/wasm');
        sutObject.projectStub.requestFileContent.resolves(deferredContentStub);
        const { isEncoded } = await sutObject.sut.requestContent();
        assert.isTrue(isEncoded);
    });
    it('can commit content', async () => {
        const sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)();
        sutObject.projectStub.workspace.returns(sinon.createStubInstance(_workspace_js__WEBPACK_IMPORTED_MODULE_2__.Workspace.WorkspaceImpl));
        sutObject.sut.addRevision('New Content');
        const result = await sutObject.sut.requestContent();
        assert.deepEqual(result, { content: 'New Content', isEncoded: false });
    });
    it('can check if there are commits', async () => {
        const sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)();
        sutObject.projectStub.workspace.returns(sinon.createStubInstance(_workspace_js__WEBPACK_IMPORTED_MODULE_2__.Workspace.WorkspaceImpl));
        const hasCommitsBefore = sutObject.sut.hasCommits();
        sutObject.sut.addRevision('New Content');
        const hasCommitsAfter = sutObject.sut.hasCommits();
        assert.isFalse(hasCommitsBefore);
        assert.isTrue(hasCommitsAfter);
    });
    it('can set a working copy', async () => {
        const sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)();
        sutObject.projectStub.workspace.returns(sinon.createStubInstance(_workspace_js__WEBPACK_IMPORTED_MODULE_2__.Workspace.WorkspaceImpl));
        sutObject.sut.setWorkingCopy('Working Copy Example');
        const result = sutObject.sut.workingCopy();
        assert.strictEqual(result, 'Working Copy Example');
    });
    it('can reset working copy', async () => {
        const sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)();
        sutObject.projectStub.workspace.returns(sinon.createStubInstance(_workspace_js__WEBPACK_IMPORTED_MODULE_2__.Workspace.WorkspaceImpl));
        sutObject.sut.setWorkingCopy('Working Copy Example');
        sutObject.sut.resetWorkingCopy();
        const result = sutObject.sut.workingCopy();
        assert.strictEqual(result, '');
    });
    it('can set content', async () => {
        const sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)();
        sutObject.projectStub.workspace.returns(sinon.createStubInstance(_workspace_js__WEBPACK_IMPORTED_MODULE_2__.Workspace.WorkspaceImpl));
        sutObject.sut.setContent('New Content', false);
        const result = await sutObject.sut.requestContent();
        assert.deepEqual(result, { content: 'New Content', isEncoded: false });
    });
    it('can set working copy getter function', async () => {
        const sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)();
        sutObject.projectStub.workspace.returns(sinon.createStubInstance(_workspace_js__WEBPACK_IMPORTED_MODULE_2__.Workspace.WorkspaceImpl));
        sutObject.sut.setWorkingCopyGetter(() => {
            return 'Example Function';
        });
        const newContent = sutObject.sut.workingCopy();
        assert.strictEqual(newContent, 'Example Function');
    });
    it('can check if working copy is dirty', async () => {
        const sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)();
        sutObject.projectStub.workspace.returns(sinon.createStubInstance(_workspace_js__WEBPACK_IMPORTED_MODULE_2__.Workspace.WorkspaceImpl));
        const isDirtyBefore = sutObject.sut.isDirty();
        sutObject.sut.setWorkingCopy('Working Copy Example');
        const isDirtyAfter = sutObject.sut.isDirty();
        assert.isFalse(isDirtyBefore);
        assert.isTrue(isDirtyAfter);
    });
    it('can return extension', async () => {
        const sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)('http://www.example.com:8080/testing/test.html');
        const result = sutObject.sut.extension();
        assert.strictEqual(result, 'html');
    });
    it('can commit working copy', async () => {
        const sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)();
        sutObject.projectStub.workspace.returns(sinon.createStubInstance(_workspace_js__WEBPACK_IMPORTED_MODULE_2__.Workspace.WorkspaceImpl));
        const hasCommitsBefore = sutObject.sut.hasCommits();
        sutObject.sut.setWorkingCopy('Working Copy Example');
        sutObject.sut.commitWorkingCopy();
        const hasCommitsAfter = sutObject.sut.hasCommits();
        assert.isFalse(hasCommitsBefore);
        assert.isTrue(hasCommitsAfter);
    });
    it('can return content', async () => {
        const sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)();
        sutObject.projectStub.workspace.returns(sinon.createStubInstance(_workspace_js__WEBPACK_IMPORTED_MODULE_2__.Workspace.WorkspaceImpl));
        sutObject.sut.setContent('Example Content', false);
        const result = sutObject.sut.content();
        assert.strictEqual(result, 'Example Content');
    });
    it('can return load error', async () => {
        const sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)();
        const deferredContentStub = { error: 'Example Error' };
        sutObject.projectStub.requestFileContent.resolves(deferredContentStub);
        sutObject.projectStub.workspace.returns(sinon.createStubInstance(_workspace_js__WEBPACK_IMPORTED_MODULE_2__.Workspace.WorkspaceImpl));
        await sutObject.sut.requestContent();
        const result = sutObject.sut.loadError();
        assert.strictEqual(result, 'Example Error');
    });
    it('can search content', async () => {
        const sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)();
        sutObject.projectStub.workspace.returns(sinon.createStubInstance(_workspace_js__WEBPACK_IMPORTED_MODULE_2__.Workspace.WorkspaceImpl));
        sutObject.sut.setContent('Example Content', false);
        const result = await sutObject.sut.searchInContent('Content', true, false);
        assert.deepEqual(result, [{ lineNumber: 0, lineContent: 'Example Content', columnNumber: 8, matchLength: 7 }]);
    });
    it('can check if content is loaded', async () => {
        const sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)();
        sutObject.projectStub.workspace.returns(sinon.createStubInstance(_workspace_js__WEBPACK_IMPORTED_MODULE_2__.Workspace.WorkspaceImpl));
        const contentLoadedCheckBefore = sutObject.sut.contentLoaded();
        sutObject.sut.setContent('Example Content', true);
        const contentLoadedCheckAfter = sutObject.sut.contentLoaded();
        assert.isFalse(contentLoadedCheckBefore);
        assert.isTrue(contentLoadedCheckAfter);
    });
    it('can return UI location', async () => {
        const sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)();
        sutObject.projectStub.workspace.returns(sinon.createStubInstance(_workspace_js__WEBPACK_IMPORTED_MODULE_2__.Workspace.WorkspaceImpl));
        const result = sutObject.sut.uiLocation(5);
        assert.strictEqual(result.lineNumber, 5);
        assert.strictEqual(result.uiSourceCode, sutObject.sut);
    });
    it('can add message', async () => {
        const sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)();
        const messageStub = sinon.createStubInstance(_workspace_js__WEBPACK_IMPORTED_MODULE_2__.UISourceCode.Message);
        sutObject.sut.addMessage(messageStub);
        const result = sutObject.sut.messages();
        const expectedResult = new Set([messageStub]);
        assert.deepEqual(result, expectedResult);
    });
    it('can add line message', async () => {
        const sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)();
        sutObject.sut.addLineMessage(_workspace_js__WEBPACK_IMPORTED_MODULE_2__.UISourceCode.Message.Level.Error, 'Example Message', 5);
        const messagesSet = sutObject.sut.messages();
        const addedMessage = messagesSet.values().next().value;
        assert.strictEqual(messagesSet.size, 1);
        assert.strictEqual(addedMessage.levelInternal, 'Error');
        assert.strictEqual(addedMessage.textInternal, 'Example Message');
        assert.strictEqual(addedMessage.range.startLine, 5);
        assert.strictEqual(addedMessage.range.endLine, 5);
    });
    it('can remove message', async () => {
        const sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)();
        const messageStub = sinon.createStubInstance(_workspace_js__WEBPACK_IMPORTED_MODULE_2__.UISourceCode.Message);
        sutObject.sut.addMessage(messageStub);
        const messagesLengthBefore = sutObject.sut.messages().size;
        sutObject.sut.removeMessage(messageStub);
        const messagesLengthAfter = sutObject.sut.messages().size;
        assert.strictEqual(messagesLengthBefore, 1);
        assert.strictEqual(messagesLengthAfter, 0);
    });
    it('can set decoration data', async () => {
        const sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)();
        sutObject.sut.setDecorationData('example type', 'example data');
        assert.strictEqual(sutObject.sut.getDecorationData('example type'), 'example data');
    });
    it('can disable editing', async () => {
        const sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)();
        sutObject.sut.disableEdit();
        assert.isTrue(sutObject.sut.editDisabled());
    });
});
describe('UILocation', () => {
    it('formats column as base 16 for WebAssembly source files', () => {
        const uiSourceCode = sinon.createStubInstance(_workspace_js__WEBPACK_IMPORTED_MODULE_2__.UISourceCode.UISourceCode);
        uiSourceCode.mimeType.returns('application/wasm');
        const uiLocation = new _workspace_js__WEBPACK_IMPORTED_MODULE_2__.UISourceCode.UILocation(uiSourceCode, 0, 15);
        const actualWithShowColumn = uiLocation.lineAndColumnText(true);
        const actualWithoutShowColumn = uiLocation.lineAndColumnText(false);
        assert.strictEqual(actualWithShowColumn, '0xf');
        assert.strictEqual(actualWithShowColumn, actualWithoutShowColumn);
    });
    it('formats line for source files', () => {
        const uiSourceCode = sinon.createStubInstance(_workspace_js__WEBPACK_IMPORTED_MODULE_2__.UISourceCode.UISourceCode);
        const uiLocation = new _workspace_js__WEBPACK_IMPORTED_MODULE_2__.UISourceCode.UILocation(uiSourceCode, 0, 15);
        const actual = uiLocation.lineAndColumnText(false);
        assert.strictEqual(actual, '1');
    });
    it('formats line and column for source files', () => {
        const uiSourceCode = sinon.createStubInstance(_workspace_js__WEBPACK_IMPORTED_MODULE_2__.UISourceCode.UISourceCode);
        const uiLocation = new _workspace_js__WEBPACK_IMPORTED_MODULE_2__.UISourceCode.UILocation(uiSourceCode, 0, 15);
        const actual = uiLocation.lineAndColumnText(true);
        assert.strictEqual(actual, '1:16');
    });
    it('formats the link text with location', () => {
        const uiSourceCode = sinon.createStubInstance(_workspace_js__WEBPACK_IMPORTED_MODULE_2__.UISourceCode.UISourceCode);
        uiSourceCode.displayName.returns('test.js');
        const uiLocation = new _workspace_js__WEBPACK_IMPORTED_MODULE_2__.UISourceCode.UILocation(uiSourceCode, 0, 15);
        const actual = uiLocation.linkText(false /* skipTrim */, true /* showColumn */);
        assert.strictEqual(actual, 'test.js:1:16');
    });
});


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