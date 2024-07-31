"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_ApplicationPanelSidebar_test_ts"],{

/***/ "./src/panels/application/ApplicationPanelSidebar.test.ts":
/*!****************************************************************!*\
  !*** ./src/panels/application/ApplicationPanelSidebar.test.ts ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/root/root.js */ "./src/core/root/root.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../testing/ResourceTreeHelpers.js */ "./src/testing/ResourceTreeHelpers.ts");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/components/render_coordinator/render_coordinator.js */ "./src/ui/components/render_coordinator/render_coordinator.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _application_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./application.js */ "./src/panels/application/application.ts");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_js__WEBPACK_IMPORTED_MODULE_8__]);
_application_js__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
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
var _SharedStorageTreeElementListener_instances, _SharedStorageTreeElementListener_sidebar, _SharedStorageTreeElementListener_originsAdded, _SharedStorageTreeElementListener_treeElementAdded;









const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_6__.RenderCoordinator.RenderCoordinator.instance();
class SharedStorageTreeElementListener {
    constructor(sidebar) {
        _SharedStorageTreeElementListener_instances.add(this);
        _SharedStorageTreeElementListener_sidebar.set(this, void 0);
        _SharedStorageTreeElementListener_originsAdded.set(this, new Array());
        __classPrivateFieldSet(this, _SharedStorageTreeElementListener_sidebar, sidebar, "f");
        __classPrivateFieldGet(this, _SharedStorageTreeElementListener_sidebar, "f").sharedStorageTreeElementDispatcher.addEventListener(_application_js__WEBPACK_IMPORTED_MODULE_8__.ApplicationPanelSidebar.SharedStorageTreeElementDispatcher.Events.SharedStorageTreeElementAdded, __classPrivateFieldGet(this, _SharedStorageTreeElementListener_instances, "m", _SharedStorageTreeElementListener_treeElementAdded), this);
    }
    dispose() {
        __classPrivateFieldGet(this, _SharedStorageTreeElementListener_sidebar, "f").sharedStorageTreeElementDispatcher.removeEventListener(_application_js__WEBPACK_IMPORTED_MODULE_8__.ApplicationPanelSidebar.SharedStorageTreeElementDispatcher.Events.SharedStorageTreeElementAdded, __classPrivateFieldGet(this, _SharedStorageTreeElementListener_instances, "m", _SharedStorageTreeElementListener_treeElementAdded), this);
    }
    async waitForElementsAdded(expectedCount) {
        while (__classPrivateFieldGet(this, _SharedStorageTreeElementListener_originsAdded, "f").length < expectedCount) {
            await __classPrivateFieldGet(this, _SharedStorageTreeElementListener_sidebar, "f").sharedStorageTreeElementDispatcher.once(_application_js__WEBPACK_IMPORTED_MODULE_8__.ApplicationPanelSidebar.SharedStorageTreeElementDispatcher.Events.SharedStorageTreeElementAdded);
        }
    }
}
_SharedStorageTreeElementListener_sidebar = new WeakMap(), _SharedStorageTreeElementListener_originsAdded = new WeakMap(), _SharedStorageTreeElementListener_instances = new WeakSet(), _SharedStorageTreeElementListener_treeElementAdded = function _SharedStorageTreeElementListener_treeElementAdded(event) {
    __classPrivateFieldGet(this, _SharedStorageTreeElementListener_originsAdded, "f").push(event.data.origin);
};
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.describeWithMockConnection)('ApplicationPanelSidebar', () => {
    let target;
    const TEST_ORIGIN_A = 'http://www.example.com/';
    const TEST_ORIGIN_B = 'http://www.example.org/';
    const TEST_ORIGIN_C = 'http://www.example.net/';
    const ID = 'AA';
    const EVENTS = [
        {
            accessTime: 0,
            type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Storage.SharedStorageAccessType.DocumentAppend,
            mainFrameId: ID,
            ownerOrigin: TEST_ORIGIN_A,
            params: { key: 'key0', value: 'value0' },
        },
        {
            accessTime: 10,
            type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Storage.SharedStorageAccessType.WorkletGet,
            mainFrameId: ID,
            ownerOrigin: TEST_ORIGIN_A,
            params: { key: 'key0' },
        },
        {
            accessTime: 15,
            type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Storage.SharedStorageAccessType.WorkletLength,
            mainFrameId: ID,
            ownerOrigin: TEST_ORIGIN_A,
            params: {},
        },
        {
            accessTime: 20,
            type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Storage.SharedStorageAccessType.DocumentClear,
            mainFrameId: ID,
            ownerOrigin: TEST_ORIGIN_C,
            params: {},
        },
        {
            accessTime: 100,
            type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Storage.SharedStorageAccessType.WorkletSet,
            mainFrameId: ID,
            ownerOrigin: TEST_ORIGIN_C,
            params: { key: 'key0', value: 'value1', ignoreIfPresent: true },
        },
        {
            accessTime: 150,
            type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Storage.SharedStorageAccessType.WorkletRemainingBudget,
            mainFrameId: ID,
            ownerOrigin: TEST_ORIGIN_C,
            params: {},
        },
    ];
    beforeEach(() => {
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.stubNoopSettings)();
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ChildTargetManager.ChildTargetManager.install();
        const tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)({ type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Target.Type.Tab });
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)({ parentTarget: tabTarget, subtype: 'prerender' });
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)({ parentTarget: tabTarget });
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.experiments.register(_core_root_root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.ExperimentName.PRELOADING_STATUS_PANEL, '', false);
        sinon.stub(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ViewManager.ViewManager.instance(), 'showView').resolves(); // Silence console error
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.setMockConnectionResponseHandler)('Storage.getSharedStorageEntries', () => ({}));
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.setMockConnectionResponseHandler)('Storage.setSharedStorageTracking', () => ({}));
    });
    // Flaking on multiple bots on CQ.
    it.skip('[crbug.com/1472237] shows cookies for all frames', async () => {
        _application_js__WEBPACK_IMPORTED_MODULE_8__.ResourcesPanel.ResourcesPanel.instance({ forceNew: true });
        const sidebar = await _application_js__WEBPACK_IMPORTED_MODULE_8__.ResourcesPanel.ResourcesPanel.showAndGetSidebar();
        const resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeModel);
        assert.exists(resourceTreeModel);
        sinon.stub(resourceTreeModel, 'frames').returns([
            {
                url: 'http://www.example.com/',
                unreachableUrl: () => null,
                resourceTreeModel: () => resourceTreeModel,
            },
            {
                url: 'http://www.example.com/admin/',
                unreachableUrl: () => null,
                resourceTreeModel: () => resourceTreeModel,
            },
            {
                url: 'http://www.example.org/',
                unreachableUrl: () => null,
                resourceTreeModel: () => resourceTreeModel,
            },
        ]);
        resourceTreeModel.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.CachedResourcesLoaded, resourceTreeModel);
        assert.strictEqual(sidebar.cookieListTreeElement.childCount(), 2);
        assert.deepStrictEqual(sidebar.cookieListTreeElement.children().map(e => e.title), ['http://www.example.com', 'http://www.example.org']);
    });
    // Flaking on windows + subsequence test failing
    it.skip('[crbug.com/1472651] shows shared storages and events for origins using shared storage', async () => {
        const securityOriginManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.SecurityOriginManager.SecurityOriginManager);
        assert.exists(securityOriginManager);
        sinon.stub(securityOriginManager, 'securityOrigins').returns([
            TEST_ORIGIN_A,
            TEST_ORIGIN_B,
            TEST_ORIGIN_C,
        ]);
        const sharedStorageModel = target.model(_application_js__WEBPACK_IMPORTED_MODULE_8__.SharedStorageModel.SharedStorageModel);
        assert.exists(sharedStorageModel);
        const setTrackingSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_setSharedStorageTracking').resolves({
            getError: () => undefined,
        });
        _application_js__WEBPACK_IMPORTED_MODULE_8__.ResourcesPanel.ResourcesPanel.instance({ forceNew: true });
        const sidebar = await _application_js__WEBPACK_IMPORTED_MODULE_8__.ResourcesPanel.ResourcesPanel.showAndGetSidebar();
        const listener = new SharedStorageTreeElementListener(sidebar);
        const addedPromise = listener.waitForElementsAdded(3);
        const resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeModel);
        assert.exists(resourceTreeModel);
        resourceTreeModel.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.CachedResourcesLoaded, resourceTreeModel);
        await addedPromise;
        assert.isTrue(setTrackingSpy.calledOnceWithExactly({ enable: true }));
        assert.strictEqual(sidebar.sharedStorageListTreeElement.childCount(), 3);
        assert.deepStrictEqual(sidebar.sharedStorageListTreeElement.children().map(e => e.title), [
            TEST_ORIGIN_A,
            TEST_ORIGIN_B,
            TEST_ORIGIN_C,
        ]);
        sidebar.sharedStorageListTreeElement.view.setDefaultIdForTesting(ID);
        for (const event of EVENTS) {
            sharedStorageModel.dispatchEventToListeners(_application_js__WEBPACK_IMPORTED_MODULE_8__.SharedStorageModel.Events.SharedStorageAccess, event);
        }
        assert.deepEqual(sidebar.sharedStorageListTreeElement.view.getEventsForTesting(), EVENTS);
    });
    async function getExpectedCall(expectedCall) {
        _application_js__WEBPACK_IMPORTED_MODULE_8__.ResourcesPanel.ResourcesPanel.instance({ forceNew: true });
        const sidebar = await _application_js__WEBPACK_IMPORTED_MODULE_8__.ResourcesPanel.ResourcesPanel.showAndGetSidebar();
        const components = expectedCall.split('.');
        assert.strictEqual(components.length, 2);
        // @ts-ignore
        const object = sidebar[components[0]];
        assert.exists(object);
        return sinon.spy(object, components[1]);
    }
    const MOCK_EVENT_ITEM = {
        addEventListener: () => { },
        securityOrigin: 'https://example.com',
        databaseId: new _application_js__WEBPACK_IMPORTED_MODULE_8__.IndexedDBModel.DatabaseId({ storageKey: '' }, ''),
    };
    const testUiUpdate = (event, modelClass, expectedCallString, inScope) => async () => {
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().setScopeTarget(inScope ? target : null);
        const expectedCall = await getExpectedCall(expectedCallString);
        const model = target.model(modelClass);
        await coordinator.done({ waitForWork: true });
        assert.exists(model);
        const data = [{ ...MOCK_EVENT_ITEM, model }];
        model.dispatchEventToListeners(event, ...data);
        await new Promise(resolve => setTimeout(resolve, 0));
        assert.strictEqual(expectedCall.called, inScope);
    };
    it('adds interest group event on in scope event', testUiUpdate(_application_js__WEBPACK_IMPORTED_MODULE_8__.InterestGroupStorageModel.Events.InterestGroupAccess, _application_js__WEBPACK_IMPORTED_MODULE_8__.InterestGroupStorageModel.InterestGroupStorageModel, 'interestGroupTreeElement.addEvent', true));
    // Failing on the toolbar button CL together with some AnimationTimeline tests
    it.skip('[crbug.com/354673294] does not add interest group event on out of scope event', testUiUpdate(_application_js__WEBPACK_IMPORTED_MODULE_8__.InterestGroupStorageModel.Events.InterestGroupAccess, _application_js__WEBPACK_IMPORTED_MODULE_8__.InterestGroupStorageModel.InterestGroupStorageModel, 'interestGroupTreeElement.addEvent', false));
    it('adds DOM storage on in scope event', testUiUpdate(_application_js__WEBPACK_IMPORTED_MODULE_8__.DOMStorageModel.Events.DOMStorageAdded, _application_js__WEBPACK_IMPORTED_MODULE_8__.DOMStorageModel.DOMStorageModel, 'sessionStorageListTreeElement.appendChild', true));
    // Failing on the toolbar button CL together with some AnimationTimeline tests
    it.skip('[crbug.com/354673294] does not add DOM storage on out of scope event', testUiUpdate(_application_js__WEBPACK_IMPORTED_MODULE_8__.DOMStorageModel.Events.DOMStorageAdded, _application_js__WEBPACK_IMPORTED_MODULE_8__.DOMStorageModel.DOMStorageModel, 'sessionStorageListTreeElement.appendChild', false));
    it('adds indexed DB on in scope event', testUiUpdate(_application_js__WEBPACK_IMPORTED_MODULE_8__.IndexedDBModel.Events.DatabaseAdded, _application_js__WEBPACK_IMPORTED_MODULE_8__.IndexedDBModel.IndexedDBModel, 'indexedDBListTreeElement.appendChild', true));
    // Failing on the toolbar button CL together with some AnimationTimeline tests
    it.skip('[crbug.com/354673294] does not add indexed DB on out of scope event', testUiUpdate(_application_js__WEBPACK_IMPORTED_MODULE_8__.IndexedDBModel.Events.DatabaseAdded, _application_js__WEBPACK_IMPORTED_MODULE_8__.IndexedDBModel.IndexedDBModel, 'indexedDBListTreeElement.appendChild', false));
    it('adds shared storage on in scope event', testUiUpdate(_application_js__WEBPACK_IMPORTED_MODULE_8__.SharedStorageModel.Events.SharedStorageAdded, _application_js__WEBPACK_IMPORTED_MODULE_8__.SharedStorageModel.SharedStorageModel, 'sharedStorageListTreeElement.appendChild', true));
    // Failing on the toolbar button CL together with some AnimationTimeline tests
    it.skip('[crbug.com/354673294] does not add shared storage on out of scope event', testUiUpdate(_application_js__WEBPACK_IMPORTED_MODULE_8__.SharedStorageModel.Events.SharedStorageAdded, _application_js__WEBPACK_IMPORTED_MODULE_8__.SharedStorageModel.SharedStorageModel, 'sharedStorageListTreeElement.appendChild', false));
    const MOCK_GETTER_ITEM = {
        ...MOCK_EVENT_ITEM,
        ...MOCK_EVENT_ITEM.databaseId,
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const testUiUpdateOnScopeChange = (modelClass, getter, expectedCallString) => async () => {
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().setScopeTarget(null);
        const expectedCall = await getExpectedCall(expectedCallString);
        const model = target.model(modelClass);
        assert.exists(model);
        sinon.stub(model, getter).returns([MOCK_GETTER_ITEM]);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().setScopeTarget(target);
        await new Promise(resolve => setTimeout(resolve, 0));
        assert.strictEqual(expectedCall.called, true);
    };
    it('adds DOM storage element after scope change', testUiUpdateOnScopeChange(_application_js__WEBPACK_IMPORTED_MODULE_8__.DOMStorageModel.DOMStorageModel, 'storages', 'sessionStorageListTreeElement.appendChild'));
    it('adds shared storage after scope change', testUiUpdateOnScopeChange(_application_js__WEBPACK_IMPORTED_MODULE_8__.SharedStorageModel.SharedStorageModel, 'storages', 'sharedStorageListTreeElement.appendChild'));
    it('adds indexed db after scope change', testUiUpdateOnScopeChange(_application_js__WEBPACK_IMPORTED_MODULE_8__.IndexedDBModel.IndexedDBModel, 'databases', 'indexedDBListTreeElement.appendChild'));
});
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.describeWithMockConnection)('IDBDatabaseTreeElement', () => {
    beforeEach(() => {
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.stubNoopSettings)();
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.experiments.register(_core_root_root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.ExperimentName.PRELOADING_STATUS_PANEL, '', false);
    });
    it('only becomes selectable after database is updated', () => {
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)();
        const model = target.model(_application_js__WEBPACK_IMPORTED_MODULE_8__.IndexedDBModel.IndexedDBModel);
        assert.exists(model);
        const panel = _application_js__WEBPACK_IMPORTED_MODULE_8__.ResourcesPanel.ResourcesPanel.instance({ forceNew: true });
        const databaseId = new _application_js__WEBPACK_IMPORTED_MODULE_8__.IndexedDBModel.DatabaseId({ storageKey: '' }, '');
        const treeElement = new _application_js__WEBPACK_IMPORTED_MODULE_8__.ApplicationPanelSidebar.IDBDatabaseTreeElement(panel, model, databaseId);
        assert.isFalse(treeElement.selectable);
        treeElement.update(new _application_js__WEBPACK_IMPORTED_MODULE_8__.IndexedDBModel.Database(databaseId, 1), false);
        assert.isTrue(treeElement.selectable);
    });
});
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.describeWithMockConnection)('ResourcesSection', () => {
    const tests = (inScope) => () => {
        let target;
        beforeEach(() => {
            (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.stubNoopSettings)();
            _core_root_root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.experiments.register(_core_root_root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.ExperimentName.PRELOADING_STATUS_PANEL, '', false);
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.FrameManager.FrameManager.instance({ forceNew: true });
            target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)();
        });
        it('adds tree elements for a frame and resource', () => {
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().setScopeTarget(inScope ? target : null);
            const panel = _application_js__WEBPACK_IMPORTED_MODULE_8__.ResourcesPanel.ResourcesPanel.instance({ forceNew: true });
            const treeElement = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.TreeOutline.TreeElement();
            new _application_js__WEBPACK_IMPORTED_MODULE_8__.ApplicationPanelSidebar.ResourcesSection(panel, treeElement);
            const model = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeModel);
            assert.exists(model);
            assert.strictEqual(treeElement.childCount(), 0);
            const frame = (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.getMainFrame)(target);
            const url = 'http://example.com';
            assert.strictEqual(treeElement.firstChild()?.childCount() ?? 0, 0);
            (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.createResource)(frame, url, 'text/html', '');
            assert.strictEqual(treeElement.firstChild()?.childCount() ?? 0, inScope ? 1 : 0);
        });
        it('picks up existing frames and resource', () => {
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().setScopeTarget(null);
            const panel = _application_js__WEBPACK_IMPORTED_MODULE_8__.ResourcesPanel.ResourcesPanel.instance({ forceNew: true });
            const treeElement = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.TreeOutline.TreeElement();
            new _application_js__WEBPACK_IMPORTED_MODULE_8__.ApplicationPanelSidebar.ResourcesSection(panel, treeElement);
            const url = 'http://example.com';
            (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.createResource)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.getMainFrame)(target), url, 'text/html', '');
            assert.strictEqual(treeElement.firstChild()?.childCount() ?? 0, 0);
            assert.strictEqual(treeElement.childCount(), 0);
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().setScopeTarget(inScope ? target : null);
            assert.strictEqual(treeElement.childCount(), inScope ? 1 : 0);
            assert.strictEqual(treeElement.firstChild()?.childCount() ?? 0, inScope ? 1 : 0);
        });
    };
    describe('in scope', tests(true));
    describe('out of scope', tests(false));
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

}]);