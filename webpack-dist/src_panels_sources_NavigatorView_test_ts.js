"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_sources_NavigatorView_test_ts"],{

/***/ "./src/panels/sources/NavigatorView.test.ts":
/*!**************************************************!*\
  !*** ./src/panels/sources/NavigatorView.test.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/root/root.js */ "./src/core/root/root.ts");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./src/models/bindings/bindings.ts");
/* harmony import */ var _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/breakpoints/breakpoints.js */ "./src/models/breakpoints/breakpoints.ts");
/* harmony import */ var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/persistence/persistence.js */ "./src/models/persistence/persistence.ts");
/* harmony import */ var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./src/models/text_utils/text_utils.ts");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./src/models/workspace/workspace.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../testing/ResourceTreeHelpers.js */ "./src/testing/ResourceTreeHelpers.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _sources_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sources.js */ "./src/panels/sources/sources.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.












(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_8__.describeWithMockConnection)('NavigatorView', () => {
    let target;
    let workspace;
    beforeEach(() => {
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.register(_core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.ExperimentName.AUTHORED_DEPLOYED_GROUPING, '');
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.register(_core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.ExperimentName.JUST_MY_CODE, '');
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_9__.setMockResourceTree)(false);
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_8__.setMockConnectionResponseHandler)('Page.getResourceTree', async () => {
            return {
                frameTree: null,
            };
        });
        const actionRegistryInstance = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ActionRegistry.ActionRegistry.instance({ forceNew: true });
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ShortcutRegistry.ShortcutRegistry.instance({ forceNew: true, actionRegistry: actionRegistryInstance });
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_7__.createTarget)();
        const targetManager = target.targetManager();
        targetManager.setScopeTarget(target);
        workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.WorkspaceImpl.instance();
        const resourceMapping = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.ResourceMapping.ResourceMapping(targetManager, workspace);
        _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.CSSWorkspaceBinding.CSSWorkspaceBinding.instance({ forceNew: true, resourceMapping, targetManager });
        const debuggerWorkspaceBinding = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
            forceNew: true,
            resourceMapping,
            targetManager,
        });
        _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.IgnoreListManager.IgnoreListManager.instance({ forceNew: true, debuggerWorkspaceBinding });
        const breakpointManager = _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_3__.BreakpointManager.BreakpointManager.instance({ forceNew: true, targetManager, workspace, debuggerWorkspaceBinding });
        _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_4__.Persistence.PersistenceImpl.instance({ forceNew: true, workspace, breakpointManager });
        _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_4__.NetworkPersistenceManager.NetworkPersistenceManager.instance({ forceNew: true, workspace });
    });
    function addResourceAndUISourceCode(url, frame, content, mimeType) {
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_9__.createResource)(frame, url, 'text/html', content);
        const uiSourceCode = workspace.uiSourceCodeForURL(url);
        const projectType = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.projectTypes.Network;
        const project = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.ContentProviderBasedProject.ContentProviderBasedProject(workspace, 'PROJECT_ID', projectType, 'Test project', false /* isServiceProject*/);
        _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.NetworkProject.NetworkProject.setTargetForProject(project, target);
        const contentProvider = _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_5__.StaticContentProvider.StaticContentProvider.fromString(url, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType.fromMimeType(mimeType), content);
        const metadata = new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.UISourceCodeMetadata(null, null);
        project.addUISourceCodeWithProvider(uiSourceCode, contentProvider, metadata, mimeType);
        return { project };
    }
    it('can discard multiple childless frames', async () => {
        const url = 'http://example.com/index.html';
        const childFrame = await (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_9__.addChildFrame)(target);
        const { project } = addResourceAndUISourceCode(url, childFrame, '', 'text/html');
        const navigatorView = _sources_js__WEBPACK_IMPORTED_MODULE_11__.SourcesNavigator.NetworkNavigatorView.instance({ forceNew: true });
        const children = navigatorView.scriptsTree.rootElement().children();
        assert.strictEqual(children.length, 1, 'The NavigatorView root node should have 1 child before node removal');
        assert.strictEqual(children[0].title, 'top');
        // Remove leaf node and assert that node removal propagates up to the root node.
        project.removeUISourceCode(url);
        assert.strictEqual(navigatorView.scriptsTree.rootElement().children().length, 0, 'The NavigarorView root node should not have any children after node removal');
    });
});


/***/ })

}]);