"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["testing_OverridesHelpers_js"],{

/***/ "./testing/OverridesHelpers.js":
/*!*************************************!*\
  !*** ./testing/OverridesHelpers.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createWorkspaceProject: () => (/* binding */ createWorkspaceProject),
/* harmony export */   setUpEnvironment: () => (/* binding */ setUpEnvironment)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */ var _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/breakpoints/breakpoints.js */ "./models/breakpoints/breakpoints.js");
/* harmony import */ var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/persistence/persistence.js */ "./models/persistence/persistence.js");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/workspace/workspace.js */ "./models/workspace/workspace.js");
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
//# sourceMappingURL=OverridesHelpers.js.map

/***/ })

}]);