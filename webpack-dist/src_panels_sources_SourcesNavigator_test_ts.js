"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_sources_SourcesNavigator_test_ts"],{

/***/ "./src/panels/sources/SourcesNavigator.test.ts":
/*!*****************************************************!*\
  !*** ./src/panels/sources/SourcesNavigator.test.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/root/root.js */ "./src/core/root/root.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./src/models/bindings/bindings.ts");
/* harmony import */ var _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/breakpoints/breakpoints.js */ "./src/models/breakpoints/breakpoints.ts");
/* harmony import */ var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/persistence/persistence.js */ "./src/models/persistence/persistence.ts");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./src/models/workspace/workspace.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _testing_MockScopeChain_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../testing/MockScopeChain.js */ "./src/testing/MockScopeChain.ts");
/* harmony import */ var _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../testing/ResourceTreeHelpers.js */ "./src/testing/ResourceTreeHelpers.ts");
/* harmony import */ var _testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../testing/UISourceCodeHelpers.js */ "./src/testing/UISourceCodeHelpers.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _sources_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sources.js */ "./src/panels/sources/sources.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.














(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_8__.describeWithMockConnection)('NetworkNavigatorView', () => {
    let workspace;
    beforeEach(async () => {
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_10__.setMockResourceTree)(false);
        const actionRegistryInstance = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.ActionRegistry.ActionRegistry.instance({ forceNew: true });
        workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.WorkspaceImpl.instance();
        const targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance();
        const resourceMapping = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.ResourceMapping.ResourceMapping(targetManager, workspace);
        const debuggerWorkspaceBinding = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
            forceNew: true,
            resourceMapping,
            targetManager,
        });
        _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.IgnoreListManager.IgnoreListManager.instance({ forceNew: true, debuggerWorkspaceBinding });
        const breakpointManager = _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_4__.BreakpointManager.BreakpointManager.instance({ forceNew: true, targetManager, workspace, debuggerWorkspaceBinding });
        _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_5__.Persistence.PersistenceImpl.instance({ forceNew: true, workspace, breakpointManager });
        _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_5__.NetworkPersistenceManager.NetworkPersistenceManager.instance({ forceNew: true, workspace });
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_12__.ShortcutRegistry.ShortcutRegistry.instance({ forceNew: true, actionRegistry: actionRegistryInstance });
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.register(_core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.ExperimentName.AUTHORED_DEPLOYED_GROUPING, '');
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.register(_core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.ExperimentName.JUST_MY_CODE, '');
    });
    describe('reveals main target', () => {
        let target;
        let project;
        beforeEach(async () => {
            const tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_7__.createTarget)({ type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Tab });
            (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_7__.createTarget)({ parentTarget: tabTarget, subtype: 'prerender' });
            target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_7__.createTarget)({ parentTarget: tabTarget });
            ({ project } = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_11__.createContentProviderUISourceCodes)({
                items: [
                    { url: 'http://example.com/', mimeType: 'text/html' },
                    { url: 'http://example.com/favicon.ico', mimeType: 'image/x-icon' },
                    { url: 'http://example.com/gtm.js', mimeType: 'application/javascript' },
                ],
                projectType: _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.projectTypes.Network,
                target,
            }));
        });
        afterEach(() => {
            _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.WorkspaceImpl.instance().removeProject(project);
        });
        it('shows folder with scripts requests', async () => {
            const { project } = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_11__.createContentProviderUISourceCodes)({
                items: [
                    {
                        url: 'http://example.com/script.js',
                        mimeType: 'application/javascript',
                        resourceType: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Script,
                    },
                ],
                projectType: _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.projectTypes.Network,
                target,
            });
            const navigatorView = _sources_js__WEBPACK_IMPORTED_MODULE_13__.SourcesNavigator.NetworkNavigatorView.instance({ forceNew: true });
            const rootElement = navigatorView.scriptsTree.rootElement();
            const folder = rootElement.firstChild();
            const file = folder?.firstChild();
            assert.strictEqual(folder?.title, 'example.com');
            assert.strictEqual(file?.title, 'script.js');
            project.removeProject();
        });
        it('does not show Fetch and XHR requests', async () => {
            const { project } = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_11__.createContentProviderUISourceCodes)({
                items: [
                    {
                        url: 'http://example.com/list-xhr.json',
                        mimeType: 'application/json',
                        resourceType: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.XHR,
                    },
                    {
                        url: 'http://example.com/list-fetch.json',
                        mimeType: 'application/json',
                        resourceType: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Fetch,
                    },
                ],
                projectType: _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.projectTypes.Network,
                target,
            });
            const navigatorView = _sources_js__WEBPACK_IMPORTED_MODULE_13__.SourcesNavigator.NetworkNavigatorView.instance({ forceNew: true });
            const rootElement = navigatorView.scriptsTree.rootElement();
            assert.strictEqual(rootElement.children().length, 0);
            project.removeProject();
        });
        it('reveals main frame target on navigation', async () => {
            const navigatorView = _sources_js__WEBPACK_IMPORTED_MODULE_13__.SourcesNavigator.NetworkNavigatorView.instance({ forceNew: true });
            const rootElement = navigatorView.scriptsTree.rootElement();
            assert.strictEqual(rootElement.childCount(), 1);
            assert.strictEqual(rootElement.firstChild()?.childCount(), 3);
            assert.isFalse(rootElement.firstChild()?.expanded);
            assert.isTrue(rootElement.firstChild()?.selected);
            target.setInspectedURL('http://example.com/');
            assert.isTrue(navigatorView.scriptsTree.firstChild()?.expanded);
            assert.isTrue(navigatorView.scriptsTree.firstChild()?.firstChild()?.selected);
        });
        it('reveals main frame target when added', async () => {
            target.setInspectedURL('http://example.com/');
            const navigatorView = _sources_js__WEBPACK_IMPORTED_MODULE_13__.SourcesNavigator.NetworkNavigatorView.instance({ forceNew: true });
            const rootElement = navigatorView.scriptsTree.rootElement();
            assert.strictEqual(rootElement.childCount(), 1);
            assert.strictEqual(rootElement.firstChild()?.childCount(), 3);
            assert.isTrue(navigatorView.scriptsTree.firstChild()?.expanded);
            assert.isTrue(navigatorView.scriptsTree.firstChild()?.firstChild()?.selected);
        });
    });
    it('updates in scope change', () => {
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_7__.createTarget)();
        const { project } = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_11__.createContentProviderUISourceCodes)({
            items: [
                { url: 'http://example.com/', mimeType: 'text/html' },
                { url: 'http://example.com/favicon.ico', mimeType: 'image/x-icon' },
                { url: 'http://example.com/gtm.js', mimeType: 'application/javascript' },
            ],
            projectId: 'project',
            projectType: _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.projectTypes.Network,
            target,
        });
        const anotherTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_7__.createTarget)();
        const { project: anotherProject } = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_11__.createContentProviderUISourceCodes)({
            items: [
                { url: 'http://example.org/', mimeType: 'text/html' },
                { url: 'http://example.org/background.bmp', mimeType: 'image/x-icon' },
            ],
            projectId: 'anotherProject',
            projectType: _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.projectTypes.Network,
            target: anotherTarget,
        });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().setScopeTarget(target);
        const navigatorView = _sources_js__WEBPACK_IMPORTED_MODULE_13__.SourcesNavigator.NetworkNavigatorView.instance({ forceNew: true });
        let rootElement = navigatorView.scriptsTree.rootElement();
        assert.strictEqual(rootElement.childCount(), 1);
        assert.strictEqual(rootElement.firstChild()?.childCount(), 3);
        assert.deepEqual(rootElement.firstChild()?.children().map(i => i.title), ['(index)', 'gtm.js', 'favicon.ico']);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().setScopeTarget(anotherTarget);
        rootElement = navigatorView.scriptsTree.rootElement();
        assert.strictEqual(rootElement.childCount(), 1);
        assert.strictEqual(rootElement.firstChild()?.childCount(), 2);
        assert.deepEqual(rootElement.firstChild()?.children().map(i => i.title), ['(index)', 'background.bmp']);
        project.removeProject();
        anotherProject.removeProject();
    });
    describe('removing source codes selection throttling', () => {
        let target;
        beforeEach(() => {
            target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_7__.createTarget)();
        });
        it('selects just once when removing multiple sibling source codes', () => {
            const { project } = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_11__.createContentProviderUISourceCodes)({
                items: [
                    { url: 'http://example.com/a.js', mimeType: 'application/javascript' },
                    { url: 'http://example.com/b.js', mimeType: 'application/javascript' },
                ],
                projectType: _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.projectTypes.Network,
                target,
            });
            const { project: otherProject } = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_11__.createContentProviderUISourceCodes)({
                items: [
                    { url: 'http://example.com/c.js', mimeType: 'application/javascript' },
                ],
                projectType: _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.projectTypes.Network,
                projectId: 'other',
                target,
            });
            const navigatorView = _sources_js__WEBPACK_IMPORTED_MODULE_13__.SourcesNavigator.NetworkNavigatorView.instance({ forceNew: true });
            const rootElement = navigatorView.scriptsTree.rootElement();
            const exampleComNode = rootElement.firstChild();
            assert.exists(exampleComNode);
            const nodeA = exampleComNode.childAt(0);
            const nodeB = exampleComNode.childAt(1);
            const nodeC = exampleComNode.childAt(2);
            assert.exists(nodeA);
            assert.exists(nodeB);
            assert.exists(nodeC);
            // Select the 'http://example.com/a.js' node. Remove the project with a.js and b.js and verify
            // that the selection is moved from 'a.js' to 'c.js', without temporarily selecting 'b.js'.
            nodeA.select();
            const nodeBSelectSpy = sinon.spy(nodeB, 'select');
            const nodeCSelectSpy = sinon.spy(nodeC, 'select');
            project.removeProject();
            assert.isTrue(nodeBSelectSpy.notCalled);
            assert.isTrue(nodeCSelectSpy.called);
            otherProject.removeProject();
        });
        it('selects parent after removing all children', () => {
            const { project } = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_11__.createContentProviderUISourceCodes)({
                items: [
                    { url: 'http://example.com/a.js', mimeType: 'application/javascript' },
                    { url: 'http://example.com/b.js', mimeType: 'application/javascript' },
                    { url: 'http://example.com/c.js', mimeType: 'application/javascript' },
                ],
                projectType: _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.projectTypes.Network,
                target,
            });
            const navigatorView = _sources_js__WEBPACK_IMPORTED_MODULE_13__.SourcesNavigator.NetworkNavigatorView.instance({ forceNew: true });
            const rootElement = navigatorView.scriptsTree.rootElement();
            const nodeExampleCom = rootElement.firstChild();
            assert.exists(nodeExampleCom);
            const nodeA = nodeExampleCom.childAt(0);
            const nodeB = nodeExampleCom.childAt(1);
            const nodeC = nodeExampleCom.childAt(2);
            assert.exists(nodeA);
            assert.exists(nodeB);
            assert.exists(nodeC);
            // Select the 'http://example.com/a.js' node. Remove all the source codenodes and check the selection
            // is not propagated forward to the siblings as we remove them. Instead, the selection will be moved
            // directly to the parent.
            nodeA.select();
            const nodeBSelectSpy = sinon.spy(nodeB, 'select');
            const nodeCSelectSpy = sinon.spy(nodeC, 'select');
            const nodeExampleComSelectSpy = sinon.spy(nodeExampleCom, 'select');
            project.removeProject();
            assert.isTrue(nodeBSelectSpy.notCalled);
            assert.isTrue(nodeCSelectSpy.notCalled);
            assert.isTrue(nodeExampleComSelectSpy.called);
            // Note that the last asserion is slightly misleading since the empty example.com node is removed.
            // Let us make that clear here.
            assert.strictEqual(rootElement.childCount(), 0);
        });
        it('selects sibling after removing folder children', async () => {
            const { project } = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_11__.createContentProviderUISourceCodes)({
                items: [
                    { url: 'http://example.com/d/a.js', mimeType: 'application/javascript' },
                    { url: 'http://example.com/d/b.js', mimeType: 'application/javascript' },
                ],
                projectType: _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.projectTypes.Network,
                target,
            });
            const { project: otherProject } = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_11__.createContentProviderUISourceCodes)({
                items: [
                    { url: 'http://example.com/c.js', mimeType: 'application/javascript' },
                ],
                projectType: _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.projectTypes.Network,
                projectId: 'other',
                target,
            });
            const navigatorView = _sources_js__WEBPACK_IMPORTED_MODULE_13__.SourcesNavigator.NetworkNavigatorView.instance({ forceNew: true });
            const rootElement = navigatorView.scriptsTree.rootElement();
            const exampleComNode = rootElement.firstChild();
            assert.exists(exampleComNode);
            const nodeD = exampleComNode.childAt(0);
            assert.exists(nodeD);
            await nodeD.expand();
            const nodeA = nodeD.childAt(0);
            const nodeB = nodeD.childAt(1);
            const nodeC = exampleComNode.childAt(1);
            assert.exists(nodeA);
            assert.exists(nodeB);
            assert.exists(nodeC);
            // Select the 'http://example.com/a.js' node.
            nodeA.select();
            const nodeBSelectSpy = sinon.spy(nodeB, 'select');
            const nodeCSelectSpy = sinon.spy(nodeC, 'select');
            // Remove the project with the a.js and b.js nodes.
            project.removeProject();
            // Let us check that we do not push the selection forward over node 'b.js'.
            // Instead, the selection will be pushed to 'c.js' (with an intermediate step at 'd').
            // (Ideally, it would move directly from 'a.js' to 'c.js', but we are currently only
            // optimizing away the moves to siblings.)
            assert.isTrue(nodeBSelectSpy.notCalled);
            assert.isTrue(nodeCSelectSpy.called);
            // Also note that the folder 'd' is removed. Let us make that explicit.
            assert.strictEqual(exampleComNode.childCount(), 1);
            assert.strictEqual(exampleComNode.childAt(0), nodeC);
            otherProject.removeProject();
        });
        it('selects sibling after removing individual folder children', async () => {
            const { project } = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_11__.createContentProviderUISourceCodes)({
                items: [
                    { url: 'http://example.com/d/a.js', mimeType: 'application/javascript' },
                    { url: 'http://example.com/e/b.js', mimeType: 'application/javascript' },
                ],
                projectType: _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.projectTypes.Network,
                target,
            });
            const { project: otherProject } = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_11__.createContentProviderUISourceCodes)({
                items: [
                    { url: 'http://example.com/c.js', mimeType: 'application/javascript' },
                ],
                projectType: _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.projectTypes.Network,
                projectId: 'other',
                target,
            });
            const navigatorView = _sources_js__WEBPACK_IMPORTED_MODULE_13__.SourcesNavigator.NetworkNavigatorView.instance({ forceNew: true });
            const rootElement = navigatorView.scriptsTree.rootElement();
            const exampleComNode = rootElement.firstChild();
            assert.exists(exampleComNode);
            const nodeD = exampleComNode.childAt(0);
            const nodeE = exampleComNode.childAt(1);
            const nodeC = exampleComNode.childAt(2);
            assert.exists(nodeD);
            assert.exists(nodeE);
            await nodeD.expand();
            await nodeE.expand();
            const nodeA = nodeD.childAt(0);
            const nodeB = nodeE.childAt(0);
            assert.exists(nodeA);
            assert.exists(nodeB);
            assert.exists(nodeC);
            // Select the 'http://example.com/a.js' node.
            nodeA.select();
            const nodeESelectSpy = sinon.spy(nodeE, 'select');
            const nodeBSelectSpy = sinon.spy(nodeB, 'select');
            const nodeCSelectSpy = sinon.spy(nodeC, 'select');
            // Remove a.js and b.js nodes. This will remove their nodes, including the containing folders.
            // The selection will be moved from 'a.js' to its parent (folder 'd') and when that gets removed,
            // it should move to 'c' rather being pushed forward to 'e'.
            project.removeProject();
            assert.isTrue(nodeESelectSpy.notCalled);
            assert.isTrue(nodeBSelectSpy.notCalled);
            assert.isTrue(nodeCSelectSpy.called);
            // Also note that nodeD and nodeE are removed. Let us make that explicit.
            assert.strictEqual(exampleComNode.childCount(), 1);
            assert.strictEqual(exampleComNode.childAt(0), nodeC);
            otherProject.removeProject();
        });
        it('selects just once when excution-context-destroyed event removes sibling source codes', async () => {
            const backend = new _testing_MockScopeChain_js__WEBPACK_IMPORTED_MODULE_9__.MockProtocolBackend();
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_8__.dispatchEvent)(target, 'Runtime.executionContextCreated', {
                context: {
                    id: 2,
                    origin: 'http://example.com',
                    name: 'c2',
                    uniqueId: 'c2',
                    auxData: {
                        frameId: 'f2',
                    },
                },
            });
            await backend.addScript(target, { content: '42', url: 'http://example.com/a.js', executionContextId: 2, hasSourceURL: false }, null);
            await backend.addScript(target, { content: '42', url: 'http://example.com/b.js', executionContextId: 2, hasSourceURL: false }, null);
            await backend.addScript(target, { content: '42', url: 'http://example.com/c.js', hasSourceURL: false }, null);
            const navigatorView = _sources_js__WEBPACK_IMPORTED_MODULE_13__.SourcesNavigator.NetworkNavigatorView.instance({ forceNew: true });
            const rootElement = navigatorView.scriptsTree.rootElement();
            const exampleComNode = rootElement.firstChild();
            assert.exists(exampleComNode);
            const nodeA = exampleComNode.childAt(0);
            const nodeB = exampleComNode.childAt(1);
            const nodeC = exampleComNode.childAt(2);
            assert.exists(nodeA);
            assert.exists(nodeB);
            assert.exists(nodeC);
            // Select the 'http://example.com/a.js' node. Remove the project with a.js and b.js and verify
            // that the selection is moved from 'a.js' to 'c.js', without temporarily selecting 'b.js'.
            nodeA.select();
            const nodeBSelectSpy = sinon.spy(nodeB, 'select');
            const nodeCSelectSpy = sinon.spy(nodeC, 'select');
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_8__.dispatchEvent)(target, 'Runtime.executionContextDestroyed', { executionContextId: 2, executionContextUniqueId: 'c2' });
            assert.isTrue(nodeBSelectSpy.notCalled);
            assert.isTrue(nodeCSelectSpy.called);
            // Sanity check - we should have only one source now.
            assert.strictEqual(exampleComNode.childCount(), 1);
        });
    });
    describe('with ignore listing', () => {
        let target;
        let resolveFn = null;
        beforeEach(() => {
            target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_7__.createTarget)();
            _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.IgnoreListManager.IgnoreListManager.instance().addChangeListener(() => {
                if (resolveFn) {
                    resolveFn();
                    resolveFn = null;
                }
            });
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_8__.setMockConnectionResponseHandler)('Debugger.setBlackboxPatterns', () => ({}));
        });
        const updatePatternSetting = async (settingValue) => {
            const setting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('skip-stack-frames-pattern');
            const promise = new Promise(resolve => {
                resolveFn = resolve;
            });
            setting.setAsArray(settingValue);
            void await promise;
        };
        const enableIgnoreListing = () => updatePatternSetting([{ pattern: '-hidden', disabled: false }]);
        const disableIgnoreListing = () => updatePatternSetting([]);
        it('shows folder with only ignore listed content as ignore listed', async () => {
            await enableIgnoreListing();
            const { project } = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_11__.createContentProviderUISourceCodes)({
                items: [
                    {
                        url: 'http://example.com/ignored/a/a-hidden.js',
                        mimeType: 'application/javascript',
                    },
                    {
                        url: 'http://example.com/ignored/b/b-hidden.js',
                        mimeType: 'application/javascript',
                    },
                    {
                        url: 'http://example.com/mixed/a/a-hidden.js',
                        mimeType: 'application/javascript',
                    },
                    {
                        url: 'http://example.com/mixed/b/b.js',
                        mimeType: 'application/javascript',
                    },
                ],
                projectType: _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.projectTypes.Network,
                target,
            });
            const navigatorView = _sources_js__WEBPACK_IMPORTED_MODULE_13__.SourcesNavigator.NetworkNavigatorView.instance({ forceNew: true });
            const rootElement = navigatorView.scriptsTree.rootElement();
            const nodeExampleCom = rootElement.firstChild();
            const ignoredFolder = nodeExampleCom.childAt(0);
            const mixedFolder = nodeExampleCom.childAt(1);
            assert.strictEqual(mixedFolder.tooltip, 'mixed');
            assert.strictEqual(ignoredFolder.tooltip, 'ignored (ignore listed)');
            project.removeProject();
        });
        it('updates folders when ignore listing rules change', async () => {
            const { project } = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_11__.createContentProviderUISourceCodes)({
                items: [
                    {
                        url: 'http://example.com/ignored/a/a-hidden.js',
                        mimeType: 'application/javascript',
                    },
                    {
                        url: 'http://example.com/ignored/b/b-hidden.js',
                        mimeType: 'application/javascript',
                    },
                    {
                        url: 'http://example.com/mixed/a/a-hidden.js',
                        mimeType: 'application/javascript',
                    },
                    {
                        url: 'http://example.com/mixed/b/b.js',
                        mimeType: 'application/javascript',
                    },
                ],
                projectType: _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.projectTypes.Network,
                target,
            });
            const navigatorView = _sources_js__WEBPACK_IMPORTED_MODULE_13__.SourcesNavigator.NetworkNavigatorView.instance({ forceNew: true });
            const rootElement = navigatorView.scriptsTree.rootElement();
            const nodeExampleCom = rootElement.firstChild();
            const ignoredFolder = nodeExampleCom.childAt(0);
            const mixedFolder = nodeExampleCom.childAt(1);
            assert.strictEqual(mixedFolder.tooltip, 'mixed');
            assert.strictEqual(ignoredFolder.tooltip, 'ignored');
            await enableIgnoreListing();
            assert.strictEqual(mixedFolder.tooltip, 'mixed');
            assert.strictEqual(ignoredFolder.tooltip, 'ignored (ignore listed)');
            await disableIgnoreListing();
            assert.strictEqual(mixedFolder.tooltip, 'mixed');
            assert.strictEqual(ignoredFolder.tooltip, 'ignored');
            project.removeProject();
        });
        it('updates folders when files are added or removed', async () => {
            await enableIgnoreListing();
            const { project } = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_11__.createContentProviderUISourceCodes)({
                items: [
                    {
                        url: 'http://example.com/ignored/a/a-hidden.js',
                        mimeType: 'application/javascript',
                    },
                    {
                        url: 'http://example.com/ignored/b/b-hidden.js',
                        mimeType: 'application/javascript',
                    },
                    {
                        url: 'http://example.com/mixed/a/a-hidden.js',
                        mimeType: 'application/javascript',
                    },
                ],
                projectType: _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.projectTypes.Network,
                target,
            });
            const navigatorView = _sources_js__WEBPACK_IMPORTED_MODULE_13__.SourcesNavigator.NetworkNavigatorView.instance({ forceNew: true });
            const rootElement = navigatorView.scriptsTree.rootElement();
            const nodeExampleCom = rootElement.firstChild();
            const ignoredFolder = nodeExampleCom.childAt(0);
            const mixedFolder = nodeExampleCom.childAt(1);
            assert.strictEqual(mixedFolder.tooltip, 'mixed/a (ignore listed)');
            assert.strictEqual(ignoredFolder.tooltip, 'ignored (ignore listed)');
            const { project: otherProject } = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_11__.createContentProviderUISourceCodes)({
                items: [
                    {
                        url: 'http://example.com/mixed/b/b.js',
                        mimeType: 'application/javascript',
                    },
                ],
                projectType: _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.projectTypes.Network,
                target,
            });
            assert.strictEqual(mixedFolder.tooltip, 'mixed');
            assert.strictEqual(ignoredFolder.tooltip, 'ignored (ignore listed)');
            otherProject.removeProject();
            assert.strictEqual(mixedFolder.tooltip, 'mixed (ignore listed)');
            assert.strictEqual(ignoredFolder.tooltip, 'ignored (ignore listed)');
            project.removeProject();
        });
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