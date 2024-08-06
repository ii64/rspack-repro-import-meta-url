"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_application_ApplicationPanelSidebar_test_js"],{

/***/ "./panels/application/ApplicationPanelSidebar.test.js":
/*!************************************************************!*\
  !*** ./panels/application/ApplicationPanelSidebar.test.js ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */ var _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/ResourceTreeHelpers.js */ "./testing/ResourceTreeHelpers.js");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _application_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./application.js */ "./panels/application/application.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_js__WEBPACK_IMPORTED_MODULE_7__]);
_application_js__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_5__.RenderCoordinator.RenderCoordinator.instance();
class SharedStorageTreeElementListener {
    #sidebar;
    #originsAdded = new Array();
    constructor(sidebar) {
        this.#sidebar = sidebar;
        this.#sidebar.sharedStorageTreeElementDispatcher.addEventListener("SharedStorageTreeElementAdded" /* Application.ApplicationPanelSidebar.SharedStorageTreeElementDispatcher.Events.SharedStorageTreeElementAdded */, this.#treeElementAdded, this);
    }
    dispose() {
        this.#sidebar.sharedStorageTreeElementDispatcher.removeEventListener("SharedStorageTreeElementAdded" /* Application.ApplicationPanelSidebar.SharedStorageTreeElementDispatcher.Events.SharedStorageTreeElementAdded */, this.#treeElementAdded, this);
    }
    #treeElementAdded(event) {
        this.#originsAdded.push(event.data.origin);
    }
    async waitForElementsAdded(expectedCount) {
        while (this.#originsAdded.length < expectedCount) {
            await this.#sidebar.sharedStorageTreeElementDispatcher.once("SharedStorageTreeElementAdded" /* Application.ApplicationPanelSidebar.SharedStorageTreeElementDispatcher.Events.SharedStorageTreeElementAdded */);
        }
    }
}
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.describeWithMockConnection)('ApplicationPanelSidebar', () => {
    let target;
    const TEST_ORIGIN_A = 'http://www.example.com/';
    const TEST_ORIGIN_B = 'http://www.example.org/';
    const TEST_ORIGIN_C = 'http://www.example.net/';
    const ID = 'AA';
    const EVENTS = [
        {
            accessTime: 0,
            type: "documentAppend" /* Protocol.Storage.SharedStorageAccessType.DocumentAppend */,
            mainFrameId: ID,
            ownerOrigin: TEST_ORIGIN_A,
            params: { key: 'key0', value: 'value0' },
        },
        {
            accessTime: 10,
            type: "workletGet" /* Protocol.Storage.SharedStorageAccessType.WorkletGet */,
            mainFrameId: ID,
            ownerOrigin: TEST_ORIGIN_A,
            params: { key: 'key0' },
        },
        {
            accessTime: 15,
            type: "workletLength" /* Protocol.Storage.SharedStorageAccessType.WorkletLength */,
            mainFrameId: ID,
            ownerOrigin: TEST_ORIGIN_A,
            params: {},
        },
        {
            accessTime: 20,
            type: "documentClear" /* Protocol.Storage.SharedStorageAccessType.DocumentClear */,
            mainFrameId: ID,
            ownerOrigin: TEST_ORIGIN_C,
            params: {},
        },
        {
            accessTime: 100,
            type: "workletSet" /* Protocol.Storage.SharedStorageAccessType.WorkletSet */,
            mainFrameId: ID,
            ownerOrigin: TEST_ORIGIN_C,
            params: { key: 'key0', value: 'value1', ignoreIfPresent: true },
        },
        {
            accessTime: 150,
            type: "workletRemainingBudget" /* Protocol.Storage.SharedStorageAccessType.WorkletRemainingBudget */,
            mainFrameId: ID,
            ownerOrigin: TEST_ORIGIN_C,
            params: {},
        },
    ];
    beforeEach(() => {
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.stubNoopSettings)();
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ChildTargetManager.ChildTargetManager.install();
        const tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)({ type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Target.Type.Tab });
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)({ parentTarget: tabTarget, subtype: 'prerender' });
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)({ parentTarget: tabTarget });
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.experiments.register("preloading-status-panel" /* Root.Runtime.ExperimentName.PRELOADING_STATUS_PANEL */, '', false);
        sinon.stub(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ViewManager.ViewManager.instance(), 'showView').resolves(); // Silence console error
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.setMockConnectionResponseHandler)('Storage.getSharedStorageEntries', () => ({}));
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.setMockConnectionResponseHandler)('Storage.setSharedStorageTracking', () => ({}));
    });
    // Flaking on multiple bots on CQ.
    it.skip('[crbug.com/1472237] shows cookies for all frames', async () => {
        _application_js__WEBPACK_IMPORTED_MODULE_7__.ResourcesPanel.ResourcesPanel.instance({ forceNew: true });
        const sidebar = await _application_js__WEBPACK_IMPORTED_MODULE_7__.ResourcesPanel.ResourcesPanel.showAndGetSidebar();
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
        const sharedStorageModel = target.model(_application_js__WEBPACK_IMPORTED_MODULE_7__.SharedStorageModel.SharedStorageModel);
        assert.exists(sharedStorageModel);
        const setTrackingSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_setSharedStorageTracking').resolves({
            getError: () => undefined,
        });
        _application_js__WEBPACK_IMPORTED_MODULE_7__.ResourcesPanel.ResourcesPanel.instance({ forceNew: true });
        const sidebar = await _application_js__WEBPACK_IMPORTED_MODULE_7__.ResourcesPanel.ResourcesPanel.showAndGetSidebar();
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
            sharedStorageModel.dispatchEventToListeners("SharedStorageAccess" /* Application.SharedStorageModel.Events.SharedStorageAccess */, event);
        }
        assert.deepEqual(sidebar.sharedStorageListTreeElement.view.getEventsForTesting(), EVENTS);
    });
    async function getExpectedCall(expectedCall) {
        _application_js__WEBPACK_IMPORTED_MODULE_7__.ResourcesPanel.ResourcesPanel.instance({ forceNew: true });
        const sidebar = await _application_js__WEBPACK_IMPORTED_MODULE_7__.ResourcesPanel.ResourcesPanel.showAndGetSidebar();
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
        databaseId: new _application_js__WEBPACK_IMPORTED_MODULE_7__.IndexedDBModel.DatabaseId({ storageKey: '' }, ''),
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
    it('adds interest group event on in scope event', testUiUpdate("InterestGroupAccess" /* Application.InterestGroupStorageModel.Events.InterestGroupAccess */, _application_js__WEBPACK_IMPORTED_MODULE_7__.InterestGroupStorageModel.InterestGroupStorageModel, 'interestGroupTreeElement.addEvent', true));
    // Failing on the toolbar button CL together with some AnimationTimeline tests
    it.skip('[crbug.com/354673294] does not add interest group event on out of scope event', testUiUpdate("InterestGroupAccess" /* Application.InterestGroupStorageModel.Events.InterestGroupAccess */, _application_js__WEBPACK_IMPORTED_MODULE_7__.InterestGroupStorageModel.InterestGroupStorageModel, 'interestGroupTreeElement.addEvent', false));
    it('adds DOM storage on in scope event', testUiUpdate("DOMStorageAdded" /* Application.DOMStorageModel.Events.DOMStorageAdded */, _application_js__WEBPACK_IMPORTED_MODULE_7__.DOMStorageModel.DOMStorageModel, 'sessionStorageListTreeElement.appendChild', true));
    // Failing on the toolbar button CL together with some AnimationTimeline tests
    it.skip('[crbug.com/354673294] does not add DOM storage on out of scope event', testUiUpdate("DOMStorageAdded" /* Application.DOMStorageModel.Events.DOMStorageAdded */, _application_js__WEBPACK_IMPORTED_MODULE_7__.DOMStorageModel.DOMStorageModel, 'sessionStorageListTreeElement.appendChild', false));
    it('adds indexed DB on in scope event', testUiUpdate(_application_js__WEBPACK_IMPORTED_MODULE_7__.IndexedDBModel.Events.DatabaseAdded, _application_js__WEBPACK_IMPORTED_MODULE_7__.IndexedDBModel.IndexedDBModel, 'indexedDBListTreeElement.appendChild', true));
    // Failing on the toolbar button CL together with some AnimationTimeline tests
    it.skip('[crbug.com/354673294] does not add indexed DB on out of scope event', testUiUpdate(_application_js__WEBPACK_IMPORTED_MODULE_7__.IndexedDBModel.Events.DatabaseAdded, _application_js__WEBPACK_IMPORTED_MODULE_7__.IndexedDBModel.IndexedDBModel, 'indexedDBListTreeElement.appendChild', false));
    it('adds shared storage on in scope event', testUiUpdate("SharedStorageAdded" /* Application.SharedStorageModel.Events.SharedStorageAdded */, _application_js__WEBPACK_IMPORTED_MODULE_7__.SharedStorageModel.SharedStorageModel, 'sharedStorageListTreeElement.appendChild', true));
    // Failing on the toolbar button CL together with some AnimationTimeline tests
    it.skip('[crbug.com/354673294] does not add shared storage on out of scope event', testUiUpdate("SharedStorageAdded" /* Application.SharedStorageModel.Events.SharedStorageAdded */, _application_js__WEBPACK_IMPORTED_MODULE_7__.SharedStorageModel.SharedStorageModel, 'sharedStorageListTreeElement.appendChild', false));
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
    it('adds DOM storage element after scope change', testUiUpdateOnScopeChange(_application_js__WEBPACK_IMPORTED_MODULE_7__.DOMStorageModel.DOMStorageModel, 'storages', 'sessionStorageListTreeElement.appendChild'));
    it('adds shared storage after scope change', testUiUpdateOnScopeChange(_application_js__WEBPACK_IMPORTED_MODULE_7__.SharedStorageModel.SharedStorageModel, 'storages', 'sharedStorageListTreeElement.appendChild'));
    it('adds indexed db after scope change', testUiUpdateOnScopeChange(_application_js__WEBPACK_IMPORTED_MODULE_7__.IndexedDBModel.IndexedDBModel, 'databases', 'indexedDBListTreeElement.appendChild'));
});
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.describeWithMockConnection)('IDBDatabaseTreeElement', () => {
    beforeEach(() => {
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.stubNoopSettings)();
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.experiments.register("preloading-status-panel" /* Root.Runtime.ExperimentName.PRELOADING_STATUS_PANEL */, '', false);
    });
    it('only becomes selectable after database is updated', () => {
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)();
        const model = target.model(_application_js__WEBPACK_IMPORTED_MODULE_7__.IndexedDBModel.IndexedDBModel);
        assert.exists(model);
        const panel = _application_js__WEBPACK_IMPORTED_MODULE_7__.ResourcesPanel.ResourcesPanel.instance({ forceNew: true });
        const databaseId = new _application_js__WEBPACK_IMPORTED_MODULE_7__.IndexedDBModel.DatabaseId({ storageKey: '' }, '');
        const treeElement = new _application_js__WEBPACK_IMPORTED_MODULE_7__.ApplicationPanelSidebar.IDBDatabaseTreeElement(panel, model, databaseId);
        assert.isFalse(treeElement.selectable);
        treeElement.update(new _application_js__WEBPACK_IMPORTED_MODULE_7__.IndexedDBModel.Database(databaseId, 1), false);
        assert.isTrue(treeElement.selectable);
    });
});
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.describeWithMockConnection)('ResourcesSection', () => {
    const tests = (inScope) => () => {
        let target;
        beforeEach(() => {
            (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.stubNoopSettings)();
            _core_root_root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.experiments.register("preloading-status-panel" /* Root.Runtime.ExperimentName.PRELOADING_STATUS_PANEL */, '', false);
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.FrameManager.FrameManager.instance({ forceNew: true });
            target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)();
        });
        it('adds tree elements for a frame and resource', () => {
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().setScopeTarget(inScope ? target : null);
            const panel = _application_js__WEBPACK_IMPORTED_MODULE_7__.ResourcesPanel.ResourcesPanel.instance({ forceNew: true });
            const treeElement = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.TreeOutline.TreeElement();
            new _application_js__WEBPACK_IMPORTED_MODULE_7__.ApplicationPanelSidebar.ResourcesSection(panel, treeElement);
            const model = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeModel);
            assert.exists(model);
            assert.strictEqual(treeElement.childCount(), 0);
            const frame = (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getMainFrame)(target);
            const url = 'http://example.com';
            assert.strictEqual(treeElement.firstChild()?.childCount() ?? 0, 0);
            (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.createResource)(frame, url, 'text/html', '');
            assert.strictEqual(treeElement.firstChild()?.childCount() ?? 0, inScope ? 1 : 0);
        });
        it('picks up existing frames and resource', () => {
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().setScopeTarget(null);
            const panel = _application_js__WEBPACK_IMPORTED_MODULE_7__.ResourcesPanel.ResourcesPanel.instance({ forceNew: true });
            const treeElement = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.TreeOutline.TreeElement();
            new _application_js__WEBPACK_IMPORTED_MODULE_7__.ApplicationPanelSidebar.ResourcesSection(panel, treeElement);
            const url = 'http://example.com';
            (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.createResource)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getMainFrame)(target), url, 'text/html', '');
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
//# sourceMappingURL=ApplicationPanelSidebar.test.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./panels/application/application.js":
/*!*******************************************!*\
  !*** ./panels/application/application.js ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppManifestView: () => (/* reexport module object */ _AppManifestView_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   ApplicationPanelSidebar: () => (/* reexport module object */ _ApplicationPanelSidebar_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   BackgroundServiceModel: () => (/* reexport module object */ _BackgroundServiceModel_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   BackgroundServiceView: () => (/* reexport module object */ _BackgroundServiceView_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   BounceTrackingMitigationsTreeElement: () => (/* reexport module object */ _BounceTrackingMitigationsTreeElement_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   CookieItemsView: () => (/* reexport module object */ _CookieItemsView_js__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   DOMStorageItemsView: () => (/* reexport module object */ _DOMStorageItemsView_js__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   DOMStorageModel: () => (/* reexport module object */ _DOMStorageModel_js__WEBPACK_IMPORTED_MODULE_7__),
/* harmony export */   IndexedDBModel: () => (/* reexport module object */ _IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_8__),
/* harmony export */   IndexedDBViews: () => (/* reexport module object */ _IndexedDBViews_js__WEBPACK_IMPORTED_MODULE_9__),
/* harmony export */   InterestGroupStorageModel: () => (/* reexport module object */ _InterestGroupStorageModel_js__WEBPACK_IMPORTED_MODULE_10__),
/* harmony export */   InterestGroupStorageView: () => (/* reexport module object */ _InterestGroupStorageView_js__WEBPACK_IMPORTED_MODULE_11__),
/* harmony export */   InterestGroupTreeElement: () => (/* reexport module object */ _InterestGroupTreeElement_js__WEBPACK_IMPORTED_MODULE_12__),
/* harmony export */   OpenedWindowDetailsView: () => (/* reexport module object */ _OpenedWindowDetailsView_js__WEBPACK_IMPORTED_MODULE_13__),
/* harmony export */   PreloadingTreeElement: () => (/* reexport module object */ _PreloadingTreeElement_js__WEBPACK_IMPORTED_MODULE_15__),
/* harmony export */   PreloadingView: () => (/* reexport module object */ _preloading_PreloadingView_js__WEBPACK_IMPORTED_MODULE_14__),
/* harmony export */   ReportingApiReportsView: () => (/* reexport module object */ _ReportingApiReportsView_js__WEBPACK_IMPORTED_MODULE_16__),
/* harmony export */   ReportingApiView: () => (/* reexport module object */ _ReportingApiView_js__WEBPACK_IMPORTED_MODULE_17__),
/* harmony export */   ResourcesPanel: () => (/* reexport module object */ _ResourcesPanel_js__WEBPACK_IMPORTED_MODULE_18__),
/* harmony export */   ServiceWorkerCacheViews: () => (/* reexport module object */ _ServiceWorkerCacheViews_js__WEBPACK_IMPORTED_MODULE_19__),
/* harmony export */   ServiceWorkerUpdateCycleView: () => (/* reexport module object */ _ServiceWorkerUpdateCycleView_js__WEBPACK_IMPORTED_MODULE_21__),
/* harmony export */   ServiceWorkersView: () => (/* reexport module object */ _ServiceWorkersView_js__WEBPACK_IMPORTED_MODULE_20__),
/* harmony export */   SharedStorageEventsView: () => (/* reexport module object */ _SharedStorageEventsView_js__WEBPACK_IMPORTED_MODULE_22__),
/* harmony export */   SharedStorageItemsView: () => (/* reexport module object */ _SharedStorageItemsView_js__WEBPACK_IMPORTED_MODULE_23__),
/* harmony export */   SharedStorageListTreeElement: () => (/* reexport module object */ _SharedStorageListTreeElement_js__WEBPACK_IMPORTED_MODULE_24__),
/* harmony export */   SharedStorageModel: () => (/* reexport module object */ _SharedStorageModel_js__WEBPACK_IMPORTED_MODULE_25__),
/* harmony export */   SharedStorageTreeElement: () => (/* reexport module object */ _SharedStorageTreeElement_js__WEBPACK_IMPORTED_MODULE_26__),
/* harmony export */   StorageBucketsTreeElement: () => (/* reexport module object */ _StorageBucketsTreeElement_js__WEBPACK_IMPORTED_MODULE_27__),
/* harmony export */   StorageItemsView: () => (/* reexport module object */ _StorageItemsView_js__WEBPACK_IMPORTED_MODULE_28__),
/* harmony export */   StorageView: () => (/* reexport module object */ _StorageView_js__WEBPACK_IMPORTED_MODULE_29__),
/* harmony export */   TrustTokensTreeElement: () => (/* reexport module object */ _TrustTokensTreeElement_js__WEBPACK_IMPORTED_MODULE_30__)
/* harmony export */ });
/* harmony import */ var _ApplicationPanelSidebar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApplicationPanelSidebar.js */ "./panels/application/ApplicationPanelSidebar.js");
/* harmony import */ var _AppManifestView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppManifestView.js */ "./panels/application/AppManifestView.js");
/* harmony import */ var _BackgroundServiceModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BackgroundServiceModel.js */ "./panels/application/BackgroundServiceModel.js");
/* harmony import */ var _BackgroundServiceView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BackgroundServiceView.js */ "./panels/application/BackgroundServiceView.js");
/* harmony import */ var _BounceTrackingMitigationsTreeElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BounceTrackingMitigationsTreeElement.js */ "./panels/application/BounceTrackingMitigationsTreeElement.js");
/* harmony import */ var _CookieItemsView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CookieItemsView.js */ "./panels/application/CookieItemsView.js");
/* harmony import */ var _DOMStorageItemsView_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DOMStorageItemsView.js */ "./panels/application/DOMStorageItemsView.js");
/* harmony import */ var _DOMStorageModel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DOMStorageModel.js */ "./panels/application/DOMStorageModel.js");
/* harmony import */ var _IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./IndexedDBModel.js */ "./panels/application/IndexedDBModel.js");
/* harmony import */ var _IndexedDBViews_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./IndexedDBViews.js */ "./panels/application/IndexedDBViews.js");
/* harmony import */ var _InterestGroupStorageModel_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./InterestGroupStorageModel.js */ "./panels/application/InterestGroupStorageModel.js");
/* harmony import */ var _InterestGroupStorageView_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./InterestGroupStorageView.js */ "./panels/application/InterestGroupStorageView.js");
/* harmony import */ var _InterestGroupTreeElement_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./InterestGroupTreeElement.js */ "./panels/application/InterestGroupTreeElement.js");
/* harmony import */ var _OpenedWindowDetailsView_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./OpenedWindowDetailsView.js */ "./panels/application/OpenedWindowDetailsView.js");
/* harmony import */ var _preloading_PreloadingView_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./preloading/PreloadingView.js */ "./panels/application/preloading/PreloadingView.js");
/* harmony import */ var _PreloadingTreeElement_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./PreloadingTreeElement.js */ "./panels/application/PreloadingTreeElement.js");
/* harmony import */ var _ReportingApiReportsView_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ReportingApiReportsView.js */ "./panels/application/ReportingApiReportsView.js");
/* harmony import */ var _ReportingApiView_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ReportingApiView.js */ "./panels/application/ReportingApiView.js");
/* harmony import */ var _ResourcesPanel_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ResourcesPanel.js */ "./panels/application/ResourcesPanel.js");
/* harmony import */ var _ServiceWorkerCacheViews_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ServiceWorkerCacheViews.js */ "./panels/application/ServiceWorkerCacheViews.js");
/* harmony import */ var _ServiceWorkersView_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ServiceWorkersView.js */ "./panels/application/ServiceWorkersView.js");
/* harmony import */ var _ServiceWorkerUpdateCycleView_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ServiceWorkerUpdateCycleView.js */ "./panels/application/ServiceWorkerUpdateCycleView.js");
/* harmony import */ var _SharedStorageEventsView_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./SharedStorageEventsView.js */ "./panels/application/SharedStorageEventsView.js");
/* harmony import */ var _SharedStorageItemsView_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./SharedStorageItemsView.js */ "./panels/application/SharedStorageItemsView.js");
/* harmony import */ var _SharedStorageListTreeElement_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./SharedStorageListTreeElement.js */ "./panels/application/SharedStorageListTreeElement.js");
/* harmony import */ var _SharedStorageModel_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./SharedStorageModel.js */ "./panels/application/SharedStorageModel.js");
/* harmony import */ var _SharedStorageTreeElement_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./SharedStorageTreeElement.js */ "./panels/application/SharedStorageTreeElement.js");
/* harmony import */ var _StorageBucketsTreeElement_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./StorageBucketsTreeElement.js */ "./panels/application/StorageBucketsTreeElement.js");
/* harmony import */ var _StorageItemsView_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./StorageItemsView.js */ "./panels/application/StorageItemsView.js");
/* harmony import */ var _StorageView_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./StorageView.js */ "./panels/application/StorageView.js");
/* harmony import */ var _TrustTokensTreeElement_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./TrustTokensTreeElement.js */ "./panels/application/TrustTokensTreeElement.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ApplicationPanelSidebar_js__WEBPACK_IMPORTED_MODULE_0__, _preloading_PreloadingView_js__WEBPACK_IMPORTED_MODULE_14__, _PreloadingTreeElement_js__WEBPACK_IMPORTED_MODULE_15__, _ResourcesPanel_js__WEBPACK_IMPORTED_MODULE_18__, _StorageBucketsTreeElement_js__WEBPACK_IMPORTED_MODULE_27__]);
([_ApplicationPanelSidebar_js__WEBPACK_IMPORTED_MODULE_0__, _preloading_PreloadingView_js__WEBPACK_IMPORTED_MODULE_14__, _PreloadingTreeElement_js__WEBPACK_IMPORTED_MODULE_15__, _ResourcesPanel_js__WEBPACK_IMPORTED_MODULE_18__, _StorageBucketsTreeElement_js__WEBPACK_IMPORTED_MODULE_27__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
































//# sourceMappingURL=application.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

}]);