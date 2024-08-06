"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_application_ServiceWorkersView_test_js"],{

/***/ "./panels/application/ServiceWorkersView.test.js":
/*!*******************************************************!*\
  !*** ./panels/application/ServiceWorkersView.test.js ***!
  \*******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */ var _application_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./application.js */ "./panels/application/application.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_js__WEBPACK_IMPORTED_MODULE_3__]);
_application_js__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('ServiceWorkersView', () => {
    let target;
    let view;
    beforeEach(() => {
        const tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({ type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Type.Tab });
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({ parentTarget: tabTarget, subtype: 'prerender' });
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({ parentTarget: tabTarget });
    });
    afterEach(() => {
        view.detach();
    });
    it('shows service worker registrations', async () => {
        view = new _application_js__WEBPACK_IMPORTED_MODULE_3__.ServiceWorkersView.ServiceWorkersView();
        view.markAsRoot();
        view.show(document.body);
        const serviceWorkersManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ServiceWorkerManager.ServiceWorkerManager);
        assert.exists(serviceWorkersManager);
        const securityOriginManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SecurityOriginManager.SecurityOriginManager);
        assert.exists(securityOriginManager);
        const ORIGIN = 'example.com';
        sinon.stub(securityOriginManager, 'securityOrigins').returns([ORIGIN]);
        const SCOPE_URL = 'SCOPE_URL';
        serviceWorkersManager.dispatchEventToListeners("RegistrationUpdated" /* SDK.ServiceWorkerManager.Events.RegistrationUpdated */, {
            scopeURL: SCOPE_URL,
            securityOrigin: ORIGIN,
            versionsByMode: () => new Map(),
            fingerprint: () => { },
        });
        const sectionTitle = view.currentWorkersView.contentElement.querySelector('.report-section-title');
        assert.exists(sectionTitle);
        assert.strictEqual(sectionTitle.textContent, SCOPE_URL);
    });
    describe('router info', () => {
        const registrationId = 'fake-sw-id';
        const origin = 'https://example.com';
        const routerRules = [
            {
                condition: { urlPattern: '/foo/bar' },
                source: ['network'],
                id: 1,
            },
            {
                condition: { urlPattern: '/baz' },
                source: ['fetch-event'],
                id: 2,
            },
        ];
        let serviceWorkersManager;
        const hasRouterField = () => {
            return Array.from(view.currentWorkersView.contentElement.querySelectorAll('.report-field')).some(field => {
                return field.querySelector('.report-field-name')?.textContent === 'Routers';
            });
        };
        beforeEach(() => {
            _application_js__WEBPACK_IMPORTED_MODULE_3__.ServiceWorkersView.setThrottleDisabledForDebugging(true);
            view = new _application_js__WEBPACK_IMPORTED_MODULE_3__.ServiceWorkersView.ServiceWorkersView();
            view.markAsRoot();
            view.show(document.body);
            serviceWorkersManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ServiceWorkerManager.ServiceWorkerManager);
            assert.exists(serviceWorkersManager);
            const securityOriginManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SecurityOriginManager.SecurityOriginManager);
            assert.exists(securityOriginManager);
            sinon.stub(securityOriginManager, 'securityOrigins').returns([origin]);
        });
        it('shows the router field if active version has at least one router rule', async () => {
            const payload = { registrationId, scopeURL: origin, isDeleted: false };
            const registration = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ServiceWorkerManager.ServiceWorkerRegistration(payload);
            const versionId = 1;
            const versionPayload = {
                registrationId,
                versionId: versionId.toString(),
                scriptURL: '',
                status: "activated" /* Protocol.ServiceWorker.ServiceWorkerVersionStatus.Activated */,
                runningStatus: "running" /* Protocol.ServiceWorker.ServiceWorkerVersionRunningStatus.Running */,
                routerRules: JSON.stringify(routerRules),
            };
            registration.updateVersion(versionPayload);
            serviceWorkersManager?.dispatchEventToListeners("RegistrationUpdated" /* SDK.ServiceWorkerManager.Events.RegistrationUpdated */, registration);
            assert.isTrue(hasRouterField());
        });
        it('does not show the router field if active version does not have router rules', async () => {
            const payload = { registrationId, scopeURL: origin, isDeleted: false };
            const registration = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ServiceWorkerManager.ServiceWorkerRegistration(payload);
            let versionId = 1;
            const versionPayload = {
                registrationId,
                versionId: versionId.toString(),
                scriptURL: '',
                status: "activated" /* Protocol.ServiceWorker.ServiceWorkerVersionStatus.Activated */,
                runningStatus: "running" /* Protocol.ServiceWorker.ServiceWorkerVersionRunningStatus.Running */,
            };
            registration.updateVersion(versionPayload);
            serviceWorkersManager?.dispatchEventToListeners("RegistrationUpdated" /* SDK.ServiceWorkerManager.Events.RegistrationUpdated */, registration);
            assert.isFalse(hasRouterField());
            // Update the version with the empty router rules.
            versionId++;
            registration.updateVersion(Object.assign({}, versionPayload, {
                versionId: versionId.toString(),
                routerRules: JSON.stringify([]),
            }));
            registration.updateVersion(versionPayload);
            serviceWorkersManager?.dispatchEventToListeners("RegistrationUpdated" /* SDK.ServiceWorkerManager.Events.RegistrationUpdated */, registration);
            assert.isFalse(hasRouterField());
        });
        it('does not show the router field if there is no active version', async () => {
            const payload = { registrationId, scopeURL: origin, isDeleted: false };
            const registration = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ServiceWorkerManager.ServiceWorkerRegistration(payload);
            let versionId = 0;
            const versionPayload = {
                registrationId,
                versionId: versionId.toString(),
                scriptURL: '',
                status: "new" /* Protocol.ServiceWorker.ServiceWorkerVersionStatus.New */,
                runningStatus: "starting" /* Protocol.ServiceWorker.ServiceWorkerVersionRunningStatus.Starting */,
                routerRules: JSON.stringify(routerRules),
            };
            const updateAndDispatchEvent = (status) => {
                versionId++;
                registration.updateVersion(Object.assign({}, versionPayload, { versionId: versionId.toString(), status }));
                serviceWorkersManager?.dispatchEventToListeners("RegistrationUpdated" /* SDK.ServiceWorkerManager.Events.RegistrationUpdated */, registration);
            };
            updateAndDispatchEvent("new" /* Protocol.ServiceWorker.ServiceWorkerVersionStatus.New */);
            assert.isFalse(hasRouterField());
            updateAndDispatchEvent("redundant" /* Protocol.ServiceWorker.ServiceWorkerVersionStatus.Redundant */);
            assert.isFalse(hasRouterField());
            updateAndDispatchEvent("installing" /* Protocol.ServiceWorker.ServiceWorkerVersionStatus.Installing */);
            assert.isFalse(hasRouterField());
            updateAndDispatchEvent("installed" /* Protocol.ServiceWorker.ServiceWorkerVersionStatus.Installed */);
            assert.isFalse(hasRouterField());
            updateAndDispatchEvent("activating" /* Protocol.ServiceWorker.ServiceWorkerVersionStatus.Activating */);
            assert.isTrue(hasRouterField());
            updateAndDispatchEvent("activated" /* Protocol.ServiceWorker.ServiceWorkerVersionStatus.Activated */);
            assert.isTrue(hasRouterField());
        });
    });
});
//# sourceMappingURL=ServiceWorkersView.test.js.map
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