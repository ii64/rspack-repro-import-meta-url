"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_application_preloading_PreloadingView_test_js"],{

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

/***/ }),

/***/ "./panels/application/preloading/PreloadingView.test.js":
/*!**************************************************************!*\
  !*** ./panels/application/preloading/PreloadingView.test.js ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/DataGridHelpers.js */ "./testing/DataGridHelpers.js");
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */ var _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/components/data_grid/data_grid.js */ "./ui/components/data_grid/data_grid.js");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */ var _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/components/report_view/report_view.js */ "./ui/components/report_view/report_view.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _application_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../application.js */ "./panels/application/application.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_js__WEBPACK_IMPORTED_MODULE_9__]);
_application_js__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.










const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_6__.RenderCoordinator.RenderCoordinator.instance();
const zip2 = (xs, ys) => {
    assert.strictEqual(xs.length, ys.length);
    return Array.from(xs.map((_, i) => [xs[i], ys[i]]));
};
// Holds targets and ids, and emits events.
class NavigationEmulator {
    seq = 0;
    tabTarget;
    primaryTarget;
    frameId;
    loaderId;
    prerenderTarget = null;
    prerenderStatusUpdatedEvent = null;
    constructor() {
        this.tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)({ type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Type.Tab });
        // Fill fake ones here and fill real ones in async part.
        this.primaryTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)();
        this.frameId = 'fakeFrameId';
        this.loaderId = 'fakeLoaderId';
    }
    async createTarget(targetInfo, sessionId) {
        const childTargetManager = this.tabTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ChildTargetManager.ChildTargetManager);
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.dispatchEvent)(this.tabTarget, 'Target.targetCreated', { targetInfo });
        await childTargetManager.attachedToTarget({
            sessionId,
            targetInfo,
            waitingForDebugger: false,
        });
        const target = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().targetById(targetInfo.targetId);
        assert.exists(target);
        return target;
    }
    async openDevTools() {
        const url = 'https://example.com/';
        const targetId = `targetId:${this.seq}`;
        const sessionId = `sessionId:${this.seq}`;
        const targetInfo = {
            targetId,
            type: 'page',
            title: 'title',
            url,
            attached: true,
            canAccessOpener: false,
        };
        this.primaryTarget = await this.createTarget(targetInfo, sessionId);
        this.frameId = 'frameId';
        this.loaderId = 'loaderId';
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().setScopeTarget(this.primaryTarget);
    }
    async navigateAndDispatchEvents(path) {
        const url = 'https://example.com/' + path;
        this.seq++;
        this.loaderId = `loaderId:${this.seq}`;
        assert.isFalse(url === this.prerenderTarget?.targetInfo()?.url);
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.dispatchEvent)(this.primaryTarget, 'Page.frameNavigated', {
            frame: {
                id: this.frameId,
                loaderId: this.loaderId,
                url,
                domainAndRegistry: 'example.com',
                securityOrigin: 'https://example.com/',
                mimeType: 'text/html',
                secureContextType: "Secure" /* Protocol.Page.SecureContextType.Secure */,
                crossOriginIsolatedContextType: "Isolated" /* Protocol.Page.CrossOriginIsolatedContextType.Isolated */,
                gatedAPIFeatures: [],
            },
        });
    }
    async activateAndDispatchEvents(path) {
        const url = 'https://example.com/' + path;
        assert.exists(this.prerenderTarget);
        assert.isTrue(url === this.prerenderTarget.targetInfo()?.url);
        assert.exists(this.prerenderStatusUpdatedEvent);
        this.seq++;
        this.loaderId = this.prerenderStatusUpdatedEvent.key.loaderId;
        const targetInfo = this.prerenderTarget.targetInfo();
        assert.exists(targetInfo);
        // This also emits ResourceTreeModel.Events.PrimaryPageChanged.
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.dispatchEvent)(this.tabTarget, 'Target.targetInfoChanged', {
            targetInfo: {
                ...targetInfo,
                subtype: undefined,
            },
        });
        // Notify a new model to PreloadingModelProxy.
        this.primaryTarget = this.prerenderTarget;
        this.prerenderTarget = null;
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().setScopeTarget(this.primaryTarget);
        // Strictly speaking, we have to emit an event for SDK.PreloadingModel.PreloadingStatus.Ready earlier.
        // It's not so important and omitted.
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.dispatchEvent)(this.primaryTarget, 'Preload.prerenderStatusUpdated', {
            ...this.prerenderStatusUpdatedEvent,
            status: "Success" /* SDK.PreloadingModel.PreloadingStatus.Success */,
        });
    }
    async addSpecRules(specrules) {
        this.seq++;
        // For simplicity, we only emit errors if parse failed.
        let json;
        try {
            json = JSON.parse(specrules);
        }
        catch (_) {
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.dispatchEvent)(this.primaryTarget, 'Preload.ruleSetUpdated', {
                ruleSet: {
                    id: `ruleSetId:0.${this.seq}`,
                    loaderId: this.loaderId,
                    sourceText: specrules,
                    backendNodeId: this.seq,
                    errorType: "SourceIsNotJsonObject" /* Protocol.Preload.RuleSetErrorType.SourceIsNotJsonObject */,
                    errorMessage: 'fake error message',
                },
            });
            return;
        }
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.dispatchEvent)(this.primaryTarget, 'Preload.ruleSetUpdated', {
            ruleSet: {
                id: `ruleSetId:0.${this.seq}`,
                loaderId: this.loaderId,
                sourceText: specrules,
                backendNodeId: this.seq,
            },
        });
        for (const prefetchAttempt of json['prefetch'] || []) {
            // For simplicity
            assert.strictEqual(prefetchAttempt['source'], 'list');
            assert.strictEqual(prefetchAttempt['urls'].length, 1);
            const url = 'https://example.com' + prefetchAttempt['urls'][0];
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.dispatchEvent)(this.primaryTarget, 'Preload.prefetchStatusUpdated', {
                key: {
                    loaderId: this.loaderId,
                    action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */,
                    url,
                },
                initiatingFrameId: this.frameId,
                prefetchUrl: url,
                status: "Running" /* SDK.PreloadingModel.PreloadingStatus.Running */,
            });
        }
        if (json['prerender'] === undefined) {
            return;
        }
        // For simplicity
        assert.strictEqual(json['prerender'].length, 1);
        assert.strictEqual(json['prerender'][0]['source'], 'list');
        assert.strictEqual(json['prerender'][0]['urls'].length, 1);
        const prerenderUrl = 'https://example.com' + json['prerender'][0]['urls'][0];
        this.prerenderStatusUpdatedEvent = {
            key: {
                loaderId: this.loaderId,
                action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */,
                url: prerenderUrl,
            },
            status: "Running" /* Protocol.Preload.PreloadingStatus.Running */,
        };
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.dispatchEvent)(this.primaryTarget, 'Preload.prerenderStatusUpdated', this.prerenderStatusUpdatedEvent);
        const sessionId = `sessionId:prerender:${this.seq}`;
        const targetInfo = {
            targetId: `targetId:prerender:${this.seq}`,
            type: 'page',
            subtype: 'prerender',
            url: prerenderUrl,
            title: '',
            attached: true,
            canAccessOpener: true,
        };
        this.prerenderTarget = await this.createTarget(targetInfo, sessionId);
        // Note that Page.frameNavigated is emitted here.
        // See also https://crbug.com/1317959 and ResourceTreeModel.Events.PrimaryPageChanged.
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.dispatchEvent)(this.prerenderTarget, 'Page.frameNavigated', {
            frame: {
                id: `frameId:prerender:${this.seq}`,
                loaderId: `loaderId:prerender:${this.seq}`,
                url: prerenderUrl,
                domainAndRegistry: 'example.com',
                securityOrigin: 'https://example.com/',
                mimeType: 'text/html',
                secureContextType: "Secure" /* Protocol.Page.SecureContextType.Secure */,
                crossOriginIsolatedContextType: "Isolated" /* Protocol.Page.CrossOriginIsolatedContextType.Isolated */,
                gatedAPIFeatures: [],
            },
        });
    }
}
function createRuleSetView(target) {
    const model = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.PreloadingModel.PreloadingModel);
    assert.exists(model);
    const view = new _application_js__WEBPACK_IMPORTED_MODULE_9__.PreloadingView.PreloadingRuleSetView(model);
    const container = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Widget.VBox();
    const div = document.createElement('div');
    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(div);
    container.markAsRoot();
    container.show(div);
    view.show(container.element);
    // Ensure PreloadingModelProxy.initialize to be called.
    view.wasShown();
    return view;
}
function createAttemptView(target) {
    const model = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.PreloadingModel.PreloadingModel);
    assert.exists(model);
    const view = new _application_js__WEBPACK_IMPORTED_MODULE_9__.PreloadingView.PreloadingAttemptView(model);
    const container = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Widget.VBox();
    const div = document.createElement('div');
    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(div);
    container.markAsRoot();
    container.show(div);
    view.show(container.element);
    // Ensure PreloadingModelProxy.initialize to be called.
    view.wasShown();
    return view;
}
function createSummaryView(target) {
    const model = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.PreloadingModel.PreloadingModel);
    assert.exists(model);
    const view = new _application_js__WEBPACK_IMPORTED_MODULE_9__.PreloadingView.PreloadingSummaryView(model);
    const container = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Widget.VBox();
    const div = document.createElement('div');
    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(div);
    container.markAsRoot();
    container.show(div);
    view.show(container.element);
    // Ensure PreloadingModelProxy.initialize to be called.
    view.wasShown();
    return view;
}
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.describeWithMockConnection)('PreloadingRuleSetView', () => {
    it('renders grid and details', async () => {
        const emulator = new NavigationEmulator();
        await emulator.openDevTools();
        const view = createRuleSetView(emulator.primaryTarget);
        await emulator.navigateAndDispatchEvents('');
        await emulator.addSpecRules(`
{
  "prerender":[
    {
      "source": "list",
      "urls": ["/prerendered.html"]
    }
  ]
}
`);
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.dispatchEvent)(emulator.primaryTarget, 'Preload.preloadingAttemptSourcesUpdated', {
            loaderId: 'loaderId:1',
            preloadingAttemptSources: [
                {
                    key: {
                        loaderId: 'loaderId:1',
                        action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */,
                        url: 'https://example.com/prerendered.html',
                    },
                    ruleSetIds: ['ruleSetId:0.2'],
                    nodeIds: [],
                },
            ],
        });
        await coordinator.done();
        const ruleSetGridComponent = view.getRuleSetGridForTest();
        assert.isNotNull(ruleSetGridComponent.shadowRoot);
        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertGridContents)(ruleSetGridComponent, ['Rule set', 'Status'], [
            ['example.com/', '1 running'],
        ]);
    });
    it('shows error of rule set', async () => {
        const emulator = new NavigationEmulator();
        await emulator.openDevTools();
        const view = createRuleSetView(emulator.primaryTarget);
        await emulator.navigateAndDispatchEvents('');
        await emulator.addSpecRules(`
{
  "prerender":[
    {
      "source": "list",
`);
        await coordinator.done();
        const ruleSetGridComponent = view.getRuleSetGridForTest();
        assert.isNotNull(ruleSetGridComponent.shadowRoot);
        const ruleSetDetailsComponent = view.getRuleSetDetailsForTest();
        assert.isNotNull(ruleSetDetailsComponent.shadowRoot);
        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertGridContents)(ruleSetGridComponent, ['Rule set', 'Status'], [
            ['example.com/', '1 error'],
        ]);
        const cells = [
            { columnId: 'id', value: 'ruleSetId:0.2' },
            { columnId: 'Validity', value: 'Invalid' },
        ];
        ruleSetGridComponent.dispatchEvent(new _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGridEvents.BodyCellFocusedEvent({ columnId: 'Validity', value: 'Invalid' }, { cells }));
        await coordinator.done();
        assert.deepEqual(ruleSetDetailsComponent.shadowRoot?.getElementById('ruleset-url')?.textContent, 'https://example.com/');
        assert.deepEqual(ruleSetDetailsComponent.shadowRoot?.getElementById('error-message-text')?.textContent, 'fake error message');
    });
    // TODO(https://crbug.com/1384419): Check that preloading attempts for
    // the previous page vanish once loaderId is added to events
    // prefetch/prerenderAttemptUpdated.
    it('clears SpeculationRules for previous pages', async () => {
        const emulator = new NavigationEmulator();
        await emulator.openDevTools();
        const view = createRuleSetView(emulator.primaryTarget);
        await emulator.navigateAndDispatchEvents('');
        await emulator.addSpecRules(`
{
  "prerender":[
    {
      "source": "list",
      "urls": ["/prerendered.html"]
    }
  ]
}
`);
        await emulator.navigateAndDispatchEvents('notprerendered.html');
        await coordinator.done();
        const ruleSetGridComponent = view.getRuleSetGridForTest();
        assert.isNotNull(ruleSetGridComponent.shadowRoot);
        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertGridContents)(ruleSetGridComponent, ['Rule set', 'Status'], []);
    });
    it('clears SpeculationRules for previous pages when prerendered page activated', async () => {
        const emulator = new NavigationEmulator();
        await emulator.openDevTools();
        const view = createRuleSetView(emulator.primaryTarget);
        await emulator.navigateAndDispatchEvents('');
        await emulator.addSpecRules(`
{
  "prerender":[
    {
      "source": "list",
      "urls": ["/prerendered.html"]
    }
  ]
}
`);
        await emulator.activateAndDispatchEvents('prerendered.html');
        await coordinator.done();
        const ruleSetGridComponent = view.getRuleSetGridForTest();
        assert.isNotNull(ruleSetGridComponent.shadowRoot);
        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertGridContents)(ruleSetGridComponent, ['Rule set', 'Status'], []);
    });
    // See https://crbug.com/1432880
    it('preserves information even if iframe loaded', async () => {
        const emulator = new NavigationEmulator();
        await emulator.openDevTools();
        const view = createRuleSetView(emulator.primaryTarget);
        await emulator.navigateAndDispatchEvents('');
        await emulator.addSpecRules(`
{
  "prerender":[
    {
      "source": "list",
      "urls": ["/prerendered.html"]
    }
  ]
}
`);
        const targetInfo = {
            targetId: 'targetId',
            type: 'iframe',
            title: 'title',
            url: 'https://example.com/iframe.html',
            attached: true,
            canAccessOpener: false,
        };
        const childTargetManager = emulator.primaryTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ChildTargetManager.ChildTargetManager);
        assert.exists(childTargetManager);
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.dispatchEvent)(emulator.primaryTarget, 'Target.targetCreated', { targetInfo });
        await childTargetManager.attachedToTarget({
            sessionId: 'sessionId',
            targetInfo,
            waitingForDebugger: false,
        });
        await coordinator.done();
        const ruleSetGridComponent = view.getRuleSetGridForTest();
        assert.isNotNull(ruleSetGridComponent.shadowRoot);
        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertGridContents)(ruleSetGridComponent, ['Rule set', 'Status'], [
            ['example.com/', ''],
        ]);
    });
});
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.describeWithMockConnection)('PreloadingAttemptView', () => {
    it('renders grid and details', async () => {
        const emulator = new NavigationEmulator();
        await emulator.openDevTools();
        const view = createAttemptView(emulator.primaryTarget);
        await emulator.navigateAndDispatchEvents('');
        await emulator.addSpecRules(`
{
  "prerender":[
    {
      "source": "list",
      "urls": ["/prerendered.html"]
    }
  ]
}
`);
        await coordinator.done();
        const preloadingGridComponent = view.getPreloadingGridForTest();
        assert.isNotNull(preloadingGridComponent.shadowRoot);
        const preloadingDetailsComponent = view.getPreloadingDetailsForTest();
        assert.isNotNull(preloadingDetailsComponent.shadowRoot);
        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertGridContents)(preloadingGridComponent, ['URL', 'Action', 'Rule set', 'Status'], [
            [
                '/prerendered.html',
                'Prerender',
                '',
                'Running',
            ],
        ]);
        const placeholder = preloadingDetailsComponent.shadowRoot.querySelector('div.preloading-noselected div p');
        assert.strictEqual(placeholder?.textContent, 'Select an element for more details');
    });
    // See https://crbug.com/1432880
    it('preserves information even if iframe loaded', async () => {
        const emulator = new NavigationEmulator();
        await emulator.openDevTools();
        const view = createAttemptView(emulator.primaryTarget);
        await emulator.navigateAndDispatchEvents('');
        await emulator.addSpecRules(`
{
  "prerender":[
    {
      "source": "list",
      "urls": ["/prerendered.html"]
    }
  ]
}
`);
        const targetInfo = {
            targetId: 'targetId',
            type: 'iframe',
            title: 'title',
            url: 'https://example.com/iframe.html',
            attached: true,
            canAccessOpener: false,
        };
        const childTargetManager = emulator.primaryTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ChildTargetManager.ChildTargetManager);
        assert.exists(childTargetManager);
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.dispatchEvent)(emulator.primaryTarget, 'Target.targetCreated', { targetInfo });
        await childTargetManager.attachedToTarget({
            sessionId: 'sessionId',
            targetInfo,
            waitingForDebugger: false,
        });
        await coordinator.done();
        const preloadingGridComponent = view.getPreloadingGridForTest();
        assert.isNotNull(preloadingGridComponent.shadowRoot);
        const preloadingDetailsComponent = view.getPreloadingDetailsForTest();
        assert.isNotNull(preloadingDetailsComponent.shadowRoot);
        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertGridContents)(preloadingGridComponent, ['URL', 'Action', 'Rule set', 'Status'], [
            [
                '/prerendered.html',
                'Prerender',
                '',
                'Running',
            ],
        ]);
        const placeholder = preloadingDetailsComponent.shadowRoot.querySelector('div.preloading-noselected div p');
        assert.strictEqual(placeholder?.textContent, 'Select an element for more details');
    });
    it('filters preloading attempts by selected rule set', async () => {
        const emulator = new NavigationEmulator();
        await emulator.openDevTools();
        const view = createAttemptView(emulator.primaryTarget);
        await emulator.navigateAndDispatchEvents('');
        // ruleSetId:0.2
        await emulator.addSpecRules(`
{
  "prefetch": [
    {
      "source": "list",
      "urls": ["/subresource2.js"]
    }
  ]
}
`);
        await emulator.addSpecRules(`
{
  "prerender": [
    {
      "source": "list",
      "urls": ["/prerendered3.html"]
    }
  ]
}
`);
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.dispatchEvent)(emulator.primaryTarget, 'Preload.preloadingAttemptSourcesUpdated', {
            loaderId: 'loaderId:1',
            preloadingAttemptSources: [
                {
                    key: {
                        loaderId: 'loaderId:1',
                        action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */,
                        url: 'https://example.com/subresource2.js',
                    },
                    ruleSetIds: ['ruleSetId:0.2'],
                    nodeIds: [2, 3],
                },
                {
                    key: {
                        loaderId: 'loaderId:1',
                        action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */,
                        url: 'https://example.com/prerendered3.html',
                    },
                    ruleSetIds: ['ruleSetId:0.3'],
                    nodeIds: [3],
                },
            ],
        });
        await coordinator.done();
        const ruleSetSelectorToolbarItem = view.getRuleSetSelectorToolbarItemForTest();
        const preloadingGridComponent = view.getPreloadingGridForTest();
        assert.isNotNull(preloadingGridComponent.shadowRoot);
        assert.strictEqual(ruleSetSelectorToolbarItem.element.querySelector('span')?.textContent, 'All speculative loads');
        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertGridContents)(preloadingGridComponent, ['URL', 'Action', 'Rule set', 'Status'], [
            [
                '/subresource2.js',
                'Prefetch',
                'example.com/',
                'Running',
            ],
            [
                '/prerendered3.html',
                'Prerender',
                'example.com/',
                'Running',
            ],
        ]);
        // Turn on filtering.
        view.selectRuleSetOnFilterForTest('ruleSetId:0.2');
        await coordinator.done();
        assert.strictEqual(ruleSetSelectorToolbarItem.element.querySelector('span')?.textContent, 'example.com/');
        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertGridContents)(preloadingGridComponent, ['URL', 'Action', 'Rule set', 'Status'], [
            [
                '/subresource2.js',
                'Prefetch',
                'example.com/',
                'Running',
            ],
        ]);
        // Turn off filtering.
        view.selectRuleSetOnFilterForTest(null);
        await coordinator.done();
        assert.strictEqual(ruleSetSelectorToolbarItem.element.querySelector('span')?.textContent, 'All speculative loads');
        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertGridContents)(preloadingGridComponent, ['URL', 'Action', 'Rule set', 'Status'], [
            [
                '/subresource2.js',
                'Prefetch',
                'example.com/',
                'Running',
            ],
            [
                '/prerendered3.html',
                'Prerender',
                'example.com/',
                'Running',
            ],
        ]);
    });
    it('shows prerender details with Investigate button for Running', async () => {
        const emulator = new NavigationEmulator();
        await emulator.openDevTools();
        const view = createAttemptView(emulator.primaryTarget);
        await emulator.navigateAndDispatchEvents('');
        await emulator.addSpecRules(`
{
  "prerender":[
    {
      "source": "list",
      "urls": ["/prerendered.html"]
    }
  ]
}
`);
        await coordinator.done();
        const preloadingGridComponent = view.getPreloadingGridForTest();
        assert.isNotNull(preloadingGridComponent.shadowRoot);
        const preloadingDetailsComponent = view.getPreloadingDetailsForTest();
        assert.isNotNull(preloadingDetailsComponent.shadowRoot);
        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertGridContents)(preloadingGridComponent, ['URL', 'Action', 'Rule set', 'Status'], [
            [
                '/prerendered.html',
                'Prerender',
                '',
                'Running',
            ],
        ]);
        const cells = [
            { columnId: 'id', value: 'loaderId:1:Prerender:https://example.com/prerendered.html:undefined' },
            // Omit other columns.
        ];
        preloadingGridComponent.dispatchEvent(new _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGridEvents.BodyCellFocusedEvent({ columnId: 'URL', value: '/prerendered.html' }, { cells }));
        await coordinator.done();
        const report = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementWithinComponent)(preloadingDetailsComponent, 'devtools-report', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.Report);
        const keys = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getCleanTextContentFromElements)(report, 'devtools-report-key');
        const values = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getCleanTextContentFromElements)(report, 'devtools-report-value');
        assert.deepEqual(zip2(keys, values), [
            ['URL', 'https://example.com/prerendered.html'],
            ['Action', 'PrerenderInspect'],
            ['Status', 'Speculative load is running.'],
        ]);
        const buttons = report.querySelectorAll('devtools-report-value:nth-of-type(2) devtools-button');
        assert.strictEqual(buttons[0].textContent?.trim(), 'Inspect');
        assert.strictEqual(buttons[0].getAttribute('disabled'), null);
    });
    it('shows prerender details with Investigate button for Ready', async () => {
        const emulator = new NavigationEmulator();
        await emulator.openDevTools();
        const view = createAttemptView(emulator.primaryTarget);
        await emulator.navigateAndDispatchEvents('');
        await emulator.addSpecRules(`
{
  "prerender":[
    {
      "source": "list",
      "urls": ["/prerendered.html"]
    }
  ]
}
`);
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.dispatchEvent)(emulator.primaryTarget, 'Preload.prerenderStatusUpdated', {
            key: {
                loaderId: 'loaderId:1',
                action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */,
                url: 'https://example.com/prerendered.html',
            },
            status: "Ready" /* Protocol.Preload.PreloadingStatus.Ready */,
        });
        const preloadingGridComponent = view.getPreloadingGridForTest();
        assert.isNotNull(preloadingGridComponent.shadowRoot);
        const preloadingDetailsComponent = view.getPreloadingDetailsForTest();
        assert.isNotNull(preloadingDetailsComponent.shadowRoot);
        await coordinator.done();
        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertGridContents)(preloadingGridComponent, ['URL', 'Action', 'Rule set', 'Status'], [
            [
                '/prerendered.html',
                'Prerender',
                '',
                'Ready',
            ],
        ]);
        const cells = [
            { columnId: 'id', value: 'loaderId:1:Prerender:https://example.com/prerendered.html:undefined' },
            // Omit other columns.
        ];
        preloadingGridComponent.dispatchEvent(new _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGridEvents.BodyCellFocusedEvent({ columnId: 'URL', value: '/prerendered.html' }, { cells }));
        await coordinator.done();
        const report = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementWithinComponent)(preloadingDetailsComponent, 'devtools-report', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.Report);
        const keys = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getCleanTextContentFromElements)(report, 'devtools-report-key');
        const values = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getCleanTextContentFromElements)(report, 'devtools-report-value');
        assert.deepEqual(zip2(keys, values), [
            ['URL', 'https://example.com/prerendered.html'],
            ['Action', 'PrerenderInspect'],
            ['Status', 'Speculative load finished and the result is ready for the next navigation.'],
        ]);
        const buttons = report.querySelectorAll('devtools-report-value:nth-of-type(2) devtools-button');
        assert.strictEqual(buttons[0].textContent?.trim(), 'Inspect');
        assert.strictEqual(buttons[0].getAttribute('disabled'), null);
    });
    it('shows prerender details with Investigate (disabled) button for Failure', async () => {
        const emulator = new NavigationEmulator();
        await emulator.openDevTools();
        const view = createAttemptView(emulator.primaryTarget);
        await emulator.navigateAndDispatchEvents('');
        await emulator.addSpecRules(`
{
  "prerender":[
    {
      "source": "list",
      "urls": ["/prerendered.html"]
    }
  ]
}
`);
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.dispatchEvent)(emulator.primaryTarget, 'Preload.prerenderStatusUpdated', {
            key: {
                loaderId: 'loaderId:1',
                action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */,
                url: 'https://example.com/prerendered.html',
            },
            status: "Failure" /* Protocol.Preload.PreloadingStatus.Failure */,
            prerenderStatus: "MojoBinderPolicy" /* Protocol.Preload.PrerenderFinalStatus.MojoBinderPolicy */,
            disallowedMojoInterface: 'device.mojom.GamepadMonitor',
        });
        // Note that `TargetManager.removeTarget` is not called on `Target.targetDestroyed`.
        // Here, we manually remove the target for prerendered page from `TargetManager`.
        const prerenderTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().targets().find(child => child.targetInfo()?.subtype === 'prerender' &&
            child.inspectedURL() === 'https://example.com/prerendered.html');
        prerenderTarget?.dispose('test');
        const preloadingGridComponent = view.getPreloadingGridForTest();
        assert.isNotNull(preloadingGridComponent.shadowRoot);
        const preloadingDetailsComponent = view.getPreloadingDetailsForTest();
        assert.isNotNull(preloadingDetailsComponent.shadowRoot);
        await coordinator.done();
        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertGridContents)(preloadingGridComponent, ['URL', 'Action', 'Rule set', 'Status'], [
            [
                '/prerendered.html',
                'Prerender',
                '',
                'Failure - The prerendered page used a forbidden JavaScript API that is currently not supported. (Internal Mojo interface: device.mojom.GamepadMonitor)',
            ],
        ]);
        const cells = [
            { columnId: 'id', value: 'loaderId:1:Prerender:https://example.com/prerendered.html:undefined' },
            // Omit other columns.
        ];
        preloadingGridComponent.dispatchEvent(new _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGridEvents.BodyCellFocusedEvent({ columnId: 'URL', value: '/prerendered.html' }, { cells }));
        await coordinator.done();
        const report = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementWithinComponent)(preloadingDetailsComponent, 'devtools-report', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.Report);
        const keys = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getCleanTextContentFromElements)(report, 'devtools-report-key');
        const values = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getCleanTextContentFromElements)(report, 'devtools-report-value');
        assert.deepEqual(zip2(keys, values), [
            ['URL', 'https://example.com/prerendered.html'],
            ['Action', 'PrerenderInspect'],
            ['Status', 'Speculative load failed.'],
            [
                'Failure reason',
                'The prerendered page used a forbidden JavaScript API that is currently not supported. (Internal Mojo interface: device.mojom.GamepadMonitor)',
            ],
        ]);
        const buttons = report.querySelectorAll('devtools-report-value:nth-of-type(2) devtools-button');
        assert.strictEqual(buttons[0].textContent?.trim(), 'Inspect');
        assert.strictEqual(buttons[0].shadowRoot?.querySelector('button')?.getAttribute('disabled'), '');
    });
});
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.describeWithMockConnection)('PreloadingSummaryView', () => {
    it('shows information of preloading of the last page', async () => {
        const emulator = new NavigationEmulator();
        await emulator.openDevTools();
        const view = createSummaryView(emulator.primaryTarget);
        await emulator.navigateAndDispatchEvents('');
        await emulator.addSpecRules(`
{
  "prerender":[
    {
      "source": "list",
      "urls": ["/prerendered.html"]
    }
  ]
}
`);
        await emulator.activateAndDispatchEvents('prerendered.html');
        await coordinator.done();
        const usedPreloadingComponent = view.getUsedPreloadingForTest();
        assert.isNotNull(usedPreloadingComponent.shadowRoot);
        assert.include(usedPreloadingComponent.shadowRoot.textContent, 'This page was successfully prerendered.');
    });
});
async function testWarnings(event, headerExpected, sectionsExpected) {
    const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)();
    const warningsUpdatedPromise = new Promise(resolve => {
        const model = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.PreloadingModel.PreloadingModel);
        assert.exists(model);
        model.addEventListener("WarningsUpdated" /* SDK.PreloadingModel.Events.WarningsUpdated */, _ => resolve());
    });
    const view = createRuleSetView(target);
    view.wasShown();
    (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.dispatchEvent)(target, 'Preload.preloadEnabledStateUpdated', event);
    await warningsUpdatedPromise;
    await coordinator.done();
    const infobarContainer = view.getInfobarContainerForTest();
    const infobar = infobarContainer.querySelector('devtools-resources-preloading-disabled-infobar');
    assert.exists(infobar);
    assert.isNotNull(infobar.shadowRoot);
    const headerGot = infobar.shadowRoot.querySelector('#header');
    assert.strictEqual(headerGot?.textContent?.trim() || null, headerExpected);
    if (headerExpected === null) {
        return;
    }
    const headers = [...infobar.shadowRoot.querySelectorAll('#contents div.key')].map(header => header.textContent?.trim());
    const sections = [...infobar.shadowRoot.querySelectorAll('#contents div.value')].map(section => section.textContent?.trim());
    assert.deepEqual(zip2(headers, sections), sectionsExpected);
}
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.describeWithMockConnection)('PreloadingWarningsView', () => {
    it('shows no warnings if holdback flags are disabled', async () => {
        await testWarnings({
            disabledByPreference: false,
            disabledByDataSaver: false,
            disabledByBatterySaver: false,
            disabledByHoldbackPrefetchSpeculationRules: false,
            disabledByHoldbackPrerenderSpeculationRules: false,
        }, null, []);
    });
    it('shows an warning if disabled by user settings', async () => {
        await testWarnings({
            disabledByPreference: true,
            disabledByDataSaver: false,
            disabledByBatterySaver: false,
            disabledByHoldbackPrefetchSpeculationRules: false,
            disabledByHoldbackPrerenderSpeculationRules: false,
        }, 'Speculative loading is disabled', [
            [
                'User settings or extensions',
                'Speculative loading is disabled because of user settings or an extension. Go to Preload pages settings to update your preference. Go to Extensions settings to disable any extension that blocks speculative loading.',
            ],
        ]);
    });
    it('shows an warning if disabled disabled by Data Saver', async () => {
        await testWarnings({
            disabledByPreference: false,
            disabledByDataSaver: true,
            disabledByBatterySaver: false,
            disabledByHoldbackPrefetchSpeculationRules: false,
            disabledByHoldbackPrerenderSpeculationRules: false,
        }, 'Speculative loading is disabled', [
            ['Data Saver', 'Speculative loading is disabled because of the operating system\'s Data Saver mode.'],
        ]);
    });
    it('shows an warning if disabled by Battery Saver', async () => {
        await testWarnings({
            disabledByPreference: false,
            disabledByDataSaver: false,
            disabledByBatterySaver: true,
            disabledByHoldbackPrefetchSpeculationRules: false,
            disabledByHoldbackPrerenderSpeculationRules: false,
        }, 'Speculative loading is disabled', [
            ['Battery Saver', 'Speculative loading is disabled because of the operating system\'s Battery Saver mode.'],
        ]);
    });
    it('shows an warning if disabled by prefetch holdback', async () => {
        await testWarnings({
            disabledByPreference: false,
            disabledByDataSaver: false,
            disabledByBatterySaver: false,
            disabledByHoldbackPrefetchSpeculationRules: true,
            disabledByHoldbackPrerenderSpeculationRules: false,
        }, 'Speculative loading is force-enabled', [
            [
                'Prefetch was disabled, but is force-enabled now',
                'Prefetch is forced-enabled because DevTools is open. When DevTools is closed, prefetch will be disabled because this browser session is part of a holdback group used for performance comparisons.',
            ],
        ]);
    });
    it('shows an warning if disabled by prerender holdback', async () => {
        await testWarnings({
            disabledByPreference: false,
            disabledByDataSaver: false,
            disabledByBatterySaver: false,
            disabledByHoldbackPrefetchSpeculationRules: false,
            disabledByHoldbackPrerenderSpeculationRules: true,
        }, 'Speculative loading is force-enabled', [
            [
                'Prerendering was disabled, but is force-enabled now',
                'Prerendering is forced-enabled because DevTools is open. When DevTools is closed, prerendering will be disabled because this browser session is part of a holdback group used for performance comparisons.',
            ],
        ]);
    });
    it('shows multiple warnings per reason', async () => {
        await testWarnings({
            disabledByPreference: true,
            disabledByDataSaver: true,
            disabledByBatterySaver: true,
            disabledByHoldbackPrefetchSpeculationRules: true,
            disabledByHoldbackPrerenderSpeculationRules: true,
        }, 'Speculative loading is disabled', [
            [
                'User settings or extensions',
                'Speculative loading is disabled because of user settings or an extension. Go to Preload pages settings to update your preference. Go to Extensions settings to disable any extension that blocks speculative loading.',
            ],
            ['Data Saver', 'Speculative loading is disabled because of the operating system\'s Data Saver mode.'],
            ['Battery Saver', 'Speculative loading is disabled because of the operating system\'s Battery Saver mode.'],
            [
                'Prefetch was disabled, but is force-enabled now',
                'Prefetch is forced-enabled because DevTools is open. When DevTools is closed, prefetch will be disabled because this browser session is part of a holdback group used for performance comparisons.',
            ],
            [
                'Prerendering was disabled, but is force-enabled now',
                'Prerendering is forced-enabled because DevTools is open. When DevTools is closed, prerendering will be disabled because this browser session is part of a holdback group used for performance comparisons.',
            ],
        ]);
    });
});
//# sourceMappingURL=PreloadingView.test.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./testing/DataGridHelpers.js":
/*!************************************!*\
  !*** ./testing/DataGridHelpers.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assertCurrentFocusedCellIs: () => (/* binding */ assertCurrentFocusedCellIs),
/* harmony export */   assertGridContents: () => (/* binding */ assertGridContents),
/* harmony export */   assertSelectedRowIs: () => (/* binding */ assertSelectedRowIs),
/* harmony export */   emulateUserFocusingCellAt: () => (/* binding */ emulateUserFocusingCellAt),
/* harmony export */   emulateUserKeyboardNavigation: () => (/* binding */ emulateUserKeyboardNavigation),
/* harmony export */   focusCurrentlyFocusableCell: () => (/* binding */ focusCurrentlyFocusableCell),
/* harmony export */   getAllRows: () => (/* binding */ getAllRows),
/* harmony export */   getBodyRowByAriaIndex: () => (/* binding */ getBodyRowByAriaIndex),
/* harmony export */   getCellByIndexes: () => (/* binding */ getCellByIndexes),
/* harmony export */   getDataGrid: () => (/* binding */ getDataGrid),
/* harmony export */   getFocusableCell: () => (/* binding */ getFocusableCell),
/* harmony export */   getHeaderCellForColumnId: () => (/* binding */ getHeaderCellForColumnId),
/* harmony export */   getHeaderCells: () => (/* binding */ getHeaderCells),
/* harmony export */   getValuesForColumn: () => (/* binding */ getValuesForColumn),
/* harmony export */   getValuesOfAllBodyRows: () => (/* binding */ getValuesOfAllBodyRows),
/* harmony export */   getValuesOfBodyRowByAriaIndex: () => (/* binding */ getValuesOfBodyRowByAriaIndex)
/* harmony export */ });
/* harmony import */ var _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/components/data_grid/data_grid.js */ "./ui/components/data_grid/data_grid.js");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */ var _DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMHelpers.js */ "./testing/DOMHelpers.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_1__.RenderCoordinator.RenderCoordinator.instance();
const getFocusableCell = (shadowRoot) => {
    // We only expect one here, but we qSA so we can assert on only one.
    // Can't use td as it may be a th if the user has focused a column header.
    const tabIndexCells = shadowRoot.querySelectorAll('table [tabindex="0"]');
    assert.lengthOf(tabIndexCells, 1);
    assert.instanceOf(tabIndexCells[0], HTMLTableCellElement);
    return tabIndexCells[0];
};
const getCellByIndexes = (shadowRoot, indexes) => {
    const cell = shadowRoot.querySelector(`[data-row-index="${indexes.row}"][data-col-index="${indexes.column}"]`);
    assert.instanceOf(cell, HTMLTableCellElement);
    return cell;
};
const getHeaderCells = (shadowRoot, options = {
    onlyVisible: false,
}) => {
    const cells = shadowRoot.querySelectorAll('[data-grid-header-cell]');
    (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.assertElements)(cells, HTMLTableCellElement);
    return Array.from(cells).filter(cell => {
        if (!options.onlyVisible) {
            return true;
        }
        return cell.classList.contains('hidden') === false;
    });
};
const getValuesOfBodyRowByAriaIndex = (shadowRoot, ariaIndex, options = {
    onlyVisible: false,
}) => {
    const row = getBodyRowByAriaIndex(shadowRoot, ariaIndex);
    const cells = row.querySelectorAll('[data-grid-value-cell-for-column]');
    (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.assertElements)(cells, HTMLTableCellElement);
    return Array.from(cells)
        .filter(cell => {
        return !options.onlyVisible || cell.classList.contains('hidden') === false;
    })
        .map(cell => {
        return cell.innerText;
    });
};
const getAllRows = (shadowRoot) => {
    const rows = shadowRoot.querySelectorAll('[aria-rowindex]');
    (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.assertElements)(rows, HTMLTableRowElement);
    return Array.from(rows);
};
const assertCurrentFocusedCellIs = (shadowRoot, { column, row }) => {
    const cell = getFocusableCell(shadowRoot);
    // Convert to strings as attributes are always strings.
    assert.strictEqual(cell.getAttribute('data-row-index'), String(row), 'The row index was not as expected.');
    assert.strictEqual(cell.getAttribute('data-col-index'), String(column), 'The column index was not as expected.');
};
const assertSelectedRowIs = (shadowRoot, row) => {
    const selectedRow = shadowRoot.querySelector('tr.selected');
    assert.instanceOf(selectedRow, HTMLTableRowElement);
    assert.strictEqual(selectedRow.getAttribute('aria-rowindex'), String(row), 'The row index was not as expected.');
};
const getDataGrid = (gridComponent) => {
    const controller = (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementWithinComponent)(gridComponent, 'devtools-data-grid-controller', _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_0__.DataGridController.DataGridController);
    return (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementWithinComponent)(controller, 'devtools-data-grid', _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_0__.DataGrid.DataGrid);
};
const assertGridContents = (gridComponent, headerExpected, rowsExpected) => {
    const grid = getDataGrid(gridComponent);
    assert.isNotNull(grid.shadowRoot);
    const headerActual = getHeaderCells(grid.shadowRoot).map(({ textContent }) => textContent.trim());
    assert.deepEqual(headerActual, headerExpected);
    const rowsActual = getValuesOfAllBodyRows(grid.shadowRoot).map(row => row.map(cell => cell.trim()));
    assert.deepEqual(rowsActual, rowsExpected);
    return grid;
};
const focusCurrentlyFocusableCell = (shadowRoot) => {
    const cell = getFocusableCell(shadowRoot);
    (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchFocusEvent)(cell);
};
const emulateUserKeyboardNavigation = (shadowRoot, key) => {
    const table = shadowRoot.querySelector('table');
    assert.instanceOf(table, HTMLTableElement);
    (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchKeyDownEvent)(table, { key });
};
const emulateUserFocusingCellAt = async (shadowRoot, position) => {
    const cellToFocus = getCellByIndexes(shadowRoot, position);
    (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchFocusEvent)(cellToFocus);
    await coordinator.done();
    assertCurrentFocusedCellIs(shadowRoot, position);
};
const getValuesOfAllBodyRows = (shadowRoot, options = {
    onlyVisible: false,
}) => {
    const rows = getAllRows(shadowRoot);
    return rows
        .map(row => {
        // now decide if the row should be included or not
        const rowIsHidden = row.classList.contains('hidden');
        const rowIndex = window.parseInt(row.getAttribute('aria-rowindex') || '-1', 10);
        return {
            rowValues: getValuesOfBodyRowByAriaIndex(shadowRoot, rowIndex, options),
            hidden: options.onlyVisible && rowIsHidden,
        };
    })
        .filter(row => row.hidden === false)
        .map(r => r.rowValues);
};
const getBodyRowByAriaIndex = (shadowRoot, rowIndex) => {
    const row = shadowRoot.querySelector(`[aria-rowindex="${rowIndex}"]`);
    assert.instanceOf(row, HTMLTableRowElement);
    return row;
};
const getHeaderCellForColumnId = (shadowRoot, columnId) => {
    const cell = shadowRoot.querySelector(`[data-grid-header-cell="${columnId}`);
    assert.instanceOf(cell, HTMLTableCellElement);
    return cell;
};
const getValuesForColumn = (shadowRoot, columnId) => {
    const cells = shadowRoot.querySelectorAll(`[data-grid-value-cell-for-column=${columnId}]`);
    (0,_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.assertElements)(cells, HTMLTableCellElement);
    return Array.from(cells, cell => cell.innerText);
};
//# sourceMappingURL=DataGridHelpers.js.map

/***/ })

}]);