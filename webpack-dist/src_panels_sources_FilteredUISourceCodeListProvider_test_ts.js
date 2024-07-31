"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_sources_FilteredUISourceCodeListProvider_test_ts"],{

/***/ "./src/panels/sources/FilteredUISourceCodeListProvider.test.ts":
/*!*********************************************************************!*\
  !*** ./src/panels/sources/FilteredUISourceCodeListProvider.test.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/root/root.js */ "./src/core/root/root.ts");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./src/models/bindings/bindings.ts");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./src/models/workspace/workspace.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_OverridesHelpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../testing/OverridesHelpers.js */ "./src/testing/OverridesHelpers.ts");
/* harmony import */ var _sources_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sources.js */ "./src/panels/sources/sources.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







const setUpEnvironmentWithUISourceCode = (url, resourceType, project) => {
    const { workspace, debuggerWorkspaceBinding } = (0,_testing_OverridesHelpers_js__WEBPACK_IMPORTED_MODULE_5__.setUpEnvironment)();
    _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.IgnoreListManager.IgnoreListManager.instance({ forceNew: false, debuggerWorkspaceBinding });
    if (!project) {
        project = { id: () => url, type: () => _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__.Workspace.projectTypes.Network };
    }
    const uiSourceCode = new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__.UISourceCode.UISourceCode(project, url, resourceType);
    project.uiSourceCodes = () => [uiSourceCode];
    workspace.addProject(project);
    return { workspace, project, uiSourceCode };
};
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__.describeWithEnvironment)('FilteredUISourceCodeListProvider', () => {
    before(() => {
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.register(_core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.ExperimentName.JUST_MY_CODE, '');
    });
    it('should exclude Fetch requests in the result', () => {
        const url = 'http://www.example.com/list-fetch.json';
        const resourceType = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Fetch;
        const { workspace, project } = setUpEnvironmentWithUISourceCode(url, resourceType);
        const filteredUISourceCodeListProvider = new _sources_js__WEBPACK_IMPORTED_MODULE_6__.FilteredUISourceCodeListProvider.FilteredUISourceCodeListProvider('test');
        filteredUISourceCodeListProvider.attach();
        const result = filteredUISourceCodeListProvider.itemCount();
        workspace.removeProject(project);
        assert.strictEqual(result, 0);
    });
    it('should exclude XHR requests in the result', () => {
        const url = 'http://www.example.com/list-xhr.json';
        const resourceType = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.XHR;
        const { workspace, project } = setUpEnvironmentWithUISourceCode(url, resourceType);
        const filteredUISourceCodeListProvider = new _sources_js__WEBPACK_IMPORTED_MODULE_6__.FilteredUISourceCodeListProvider.FilteredUISourceCodeListProvider('test');
        filteredUISourceCodeListProvider.attach();
        const result = filteredUISourceCodeListProvider.itemCount();
        workspace.removeProject(project);
        assert.strictEqual(result, 0);
    });
    it('should include Document requests in the result', () => {
        const url = 'http://www.example.com/index.html';
        const resourceType = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Document;
        const { workspace, project } = setUpEnvironmentWithUISourceCode(url, resourceType);
        const filteredUISourceCodeListProvider = new _sources_js__WEBPACK_IMPORTED_MODULE_6__.FilteredUISourceCodeListProvider.FilteredUISourceCodeListProvider('test');
        filteredUISourceCodeListProvider.attach();
        const resultUrl = filteredUISourceCodeListProvider.itemKeyAt(0);
        const resultCount = filteredUISourceCodeListProvider.itemCount();
        workspace.removeProject(project);
        assert.strictEqual(resultUrl, url);
        assert.strictEqual(resultCount, 1);
    });
    it('should exclude ignored script requests in the result', () => {
        const url = 'http://www.example.com/some-script.js';
        const resourceType = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Script;
        const { workspace, project, uiSourceCode } = setUpEnvironmentWithUISourceCode(url, resourceType);
        // ignore the uiSourceCode
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.setEnabled(_core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.ExperimentName.JUST_MY_CODE, true);
        _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.IgnoreListManager.IgnoreListManager.instance().ignoreListUISourceCode(uiSourceCode);
        const filteredUISourceCodeListProvider = new _sources_js__WEBPACK_IMPORTED_MODULE_6__.FilteredUISourceCodeListProvider.FilteredUISourceCodeListProvider('test');
        filteredUISourceCodeListProvider.attach();
        const result = filteredUISourceCodeListProvider.itemCount();
        workspace.removeProject(project);
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.setEnabled(_core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.ExperimentName.JUST_MY_CODE, false);
        assert.strictEqual(result, 0);
    });
    it('should include Image requests in the result', () => {
        const url = 'http://www.example.com/img.png';
        const resourceType = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Image;
        const { workspace, project } = setUpEnvironmentWithUISourceCode(url, resourceType);
        const filteredUISourceCodeListProvider = new _sources_js__WEBPACK_IMPORTED_MODULE_6__.FilteredUISourceCodeListProvider.FilteredUISourceCodeListProvider('test');
        filteredUISourceCodeListProvider.attach();
        const resultUrl = filteredUISourceCodeListProvider.itemKeyAt(0);
        const resultCount = filteredUISourceCodeListProvider.itemCount();
        workspace.removeProject(project);
        assert.strictEqual(resultCount, 1);
        assert.strictEqual(resultUrl, url);
    });
    it('should include Script requests in the result', () => {
        const url = 'http://www.example.com/some-script.js';
        const resourceType = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Script;
        const { workspace, project } = setUpEnvironmentWithUISourceCode(url, resourceType);
        const filteredUISourceCodeListProvider = new _sources_js__WEBPACK_IMPORTED_MODULE_6__.FilteredUISourceCodeListProvider.FilteredUISourceCodeListProvider('test');
        filteredUISourceCodeListProvider.attach();
        const resultUrl = filteredUISourceCodeListProvider.itemKeyAt(0);
        const resultCount = filteredUISourceCodeListProvider.itemCount();
        workspace.removeProject(project);
        assert.strictEqual(resultCount, 1);
        assert.strictEqual(resultUrl, url);
    });
});


/***/ }),

/***/ "./src/testing/OverridesHelpers.ts":
/*!*****************************************!*\
  !*** ./src/testing/OverridesHelpers.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createWorkspaceProject: () => (/* binding */ createWorkspaceProject),
/* harmony export */   setUpEnvironment: () => (/* binding */ setUpEnvironment)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/bindings/bindings.js */ "./src/models/bindings/bindings.ts");
/* harmony import */ var _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/breakpoints/breakpoints.js */ "./src/models/breakpoints/breakpoints.ts");
/* harmony import */ var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/persistence/persistence.js */ "./src/models/persistence/persistence.ts");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/workspace/workspace.js */ "./src/models/workspace/workspace.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





function setUpEnvironment() {
    const workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.instance();
    const targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance();
    const resourceMapping = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.ResourceMapping.ResourceMapping(targetManager, workspace);
    const debuggerWorkspaceBinding = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({ forceNew: true, resourceMapping, targetManager });
    const breakpointManager = _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_2__.BreakpointManager.BreakpointManager.instance({ forceNew: true, targetManager, workspace, debuggerWorkspaceBinding });
    _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__.Persistence.PersistenceImpl.instance({ forceNew: true, workspace, breakpointManager });
    const networkPersistenceManager = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__.NetworkPersistenceManager.NetworkPersistenceManager.instance({ forceNew: true, workspace });
    return { networkPersistenceManager, workspace, debuggerWorkspaceBinding };
}
async function createWorkspaceProject(baseUrl, files) {
    const { networkPersistenceManager } = setUpEnvironment();
    const fileSystem = {
        fileSystemPath: () => baseUrl,
        fileSystemBaseURL: baseUrl + '/',
        type: () => _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.projectTypes.FileSystem,
        fileSystemInternal: {
            supportsAutomapping: () => false,
        },
    };
    const uiSourceCodes = new Map();
    const mockProject = {
        uiSourceCodes: () => Array.from(uiSourceCodes.values()),
        id: () => baseUrl,
        fileSystemPath: () => baseUrl,
        uiSourceCodeForURL: (url) => {
            return uiSourceCodes.get(url) || null;
        },
        type: () => _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.projectTypes.FileSystem,
        initialGitFolders: () => [],
        fileSystemInternal: {
            type: () => 'filesystem',
        },
        fileSystemBaseURL: baseUrl + '/',
        createFile: () => { },
    };
    await networkPersistenceManager.setProject(mockProject);
    for (const file of files) {
        const url = file.path.concat(file.name);
        const fileUrl = networkPersistenceManager.fileUrlFromNetworkUrl(url, true);
        uiSourceCodes.set(fileUrl, {
            requestContent: () => Promise.resolve({ content: file.content }),
            url: () => fileUrl,
            project: () => {
                return { ...fileSystem, requestFileBlob: () => new Blob([file.content]) };
            },
            name: () => file.name,
            setWorkingCopy: () => { },
            commitWorkingCopy: () => { },
        });
    }
    await networkPersistenceManager.setProject(mockProject);
    const workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.instance();
    workspace.addProject(mockProject);
    return networkPersistenceManager;
}


/***/ })

}]);