"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_application_InterestGroupStorageView_test_js"],{

/***/ "./panels/application/InterestGroupStorageView.test.js":
/*!*************************************************************!*\
  !*** ./panels/application/InterestGroupStorageView.test.js ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */ var _testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/ExpectStubCall.js */ "./testing/ExpectStubCall.js");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */ var _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/data_grid/data_grid.js */ "./ui/components/data_grid/data_grid.js");
/* harmony import */ var _application_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./application.js */ "./panels/application/application.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_js__WEBPACK_IMPORTED_MODULE_4__]);
_application_js__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





var View = _application_js__WEBPACK_IMPORTED_MODULE_4__.InterestGroupStorageView;
const events = [
    {
        accessTime: 0,
        type: "bid" /* Protocol.Storage.InterestGroupAccessType.Bid */,
        ownerOrigin: 'https://owner1.com',
        name: 'cars',
    },
    {
        accessTime: 10,
        type: "join" /* Protocol.Storage.InterestGroupAccessType.Join */,
        ownerOrigin: 'https://owner2.com',
        name: 'trucks',
    },
];
class InterestGroupDetailsGetter {
    async getInterestGroupDetails(owner, name) {
        return {
            ownerOrigin: owner,
            name: name,
            expirationTime: 2,
            joiningOrigin: 'https://joiner.com',
            trustedBiddingSignalsKeys: [],
            ads: [],
            adComponents: [],
        };
    }
}
class InterestGroupDetailsGetterFails {
    async getInterestGroupDetails(_owner, _name) {
        return null;
    }
}
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('InterestGroupStorageView', () => {
    it('records events', () => {
        const view = new View.InterestGroupStorageView(new InterestGroupDetailsGetter());
        events.forEach(event => {
            view.addEvent(event);
        });
        assert.deepEqual(view.getEventsForTesting(), events);
    });
    it('ignores duplicates', () => {
        const view = new View.InterestGroupStorageView(new InterestGroupDetailsGetter());
        events.forEach(event => {
            view.addEvent(event);
        });
        view.addEvent(events[0]);
        assert.deepEqual(view.getEventsForTesting(), events);
    });
    it('initially has placeholder sidebar', () => {
        const view = new View.InterestGroupStorageView(new InterestGroupDetailsGetter());
        assert.notDeepEqual(view.sidebarWidget()?.constructor.name, 'SearchableView');
        assert.isTrue(view.sidebarWidget()?.contentElement.firstChild?.textContent?.includes('Click'));
    });
    // Disabled due to flakiness
    it.skip('[crbug.com/1473557]: updates sidebarWidget upon receiving cellFocusedEvent when InterestGroupGetter succeeds', async function () {
        if (this.timeout() > 0) {
            this.timeout(10000);
        }
        const view = new View.InterestGroupStorageView(new InterestGroupDetailsGetter());
        events.forEach(event => {
            view.addEvent(event);
        });
        const grid = view.getInterestGroupGridForTesting();
        const cells = [
            { columnId: 'event-time', value: 0 },
            { columnId: 'event-type', value: "join" /* Protocol.Storage.InterestGroupAccessType.Join */ },
            { columnId: 'event-group-owner', value: 'https://owner1.com' },
            { columnId: 'event-group-name', value: 'cars' },
        ];
        const spy = sinon.spy(view, 'setSidebarWidget');
        assert.isTrue(spy.notCalled);
        grid.dispatchEvent(new _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGridEvents.BodyCellFocusedEvent({ columnId: 'event-time', value: '0' }, { cells }));
        await (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.raf)();
        assert.isTrue(spy.calledOnce);
        assert.deepEqual(view.sidebarWidget()?.constructor.name, 'SearchableView');
    });
    it('Clears sidebarWidget upon receiving cellFocusedEvent on an additionalBid-type events', async function () {
        if (this.timeout() > 0) {
            this.timeout(10000);
        }
        for (const eventType of ["additionalBid" /* Protocol.Storage.InterestGroupAccessType.AdditionalBid */,
            "additionalBidWin" /* Protocol.Storage.InterestGroupAccessType.AdditionalBidWin */,
            "topLevelAdditionalBid" /* Protocol.Storage.InterestGroupAccessType.TopLevelAdditionalBid */]) {
            const view = new View.InterestGroupStorageView(new InterestGroupDetailsGetter());
            events.forEach(event => {
                view.addEvent(event);
            });
            const grid = view.getInterestGroupGridForTesting();
            const cells = [
                { columnId: 'event-time', value: 0 },
                { columnId: 'event-type', value: eventType },
                { columnId: 'event-group-owner', value: 'https://owner1.com' },
                { columnId: 'event-group-name', value: 'cars' },
            ];
            const sideBarUpdateDone = (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_1__.expectCall)(sinon.stub(view, 'sidebarUpdatedForTesting'));
            const spy = sinon.spy(view, 'setSidebarWidget');
            assert.isTrue(spy.notCalled);
            grid.dispatchEvent(new _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGridEvents.BodyCellFocusedEvent({ columnId: 'event-time', value: '0' }, { cells }));
            await sideBarUpdateDone;
            assert.isTrue(spy.calledOnce);
            assert.notDeepEqual(view.sidebarWidget()?.constructor.name, 'SearchableView');
            assert.isTrue(view.sidebarWidget()?.contentElement.firstChild?.textContent?.includes('No details'));
        }
    });
    // Disabled due to flakiness
    it.skip('[crbug.com/1473557]: updates sidebarWidget upon receiving cellFocusedEvent when InterestGroupDetailsGetter failsupdates sidebarWidget upon receiving cellFocusedEvent when InterestGroupDetailsGetter fails', async function () {
        if (this.timeout() > 0) {
            this.timeout(10000);
        }
        const view = new View.InterestGroupStorageView(new InterestGroupDetailsGetterFails());
        events.forEach(event => {
            view.addEvent(event);
        });
        const grid = view.getInterestGroupGridForTesting();
        const cells = [
            { columnId: 'event-time', value: 0 },
            { columnId: 'event-type', value: "join" /* Protocol.Storage.InterestGroupAccessType.Join */ },
            { columnId: 'event-group-owner', value: 'https://owner1.com' },
            { columnId: 'event-group-name', value: 'cars' },
        ];
        const spy = sinon.spy(view, 'setSidebarWidget');
        assert.isTrue(spy.notCalled);
        grid.dispatchEvent(new _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGridEvents.BodyCellFocusedEvent({ columnId: 'event-time', value: '0' }, { cells }));
        await (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.raf)();
        assert.isTrue(spy.calledOnce);
        assert.notDeepEqual(view.sidebarWidget()?.constructor.name, 'SearchableView');
        assert.isTrue(view.sidebarWidget()?.contentElement.firstChild?.textContent?.includes('No details'));
    });
    // Disabled due to flakiness
    it.skip('[crbug.com/1473557]: clears sidebarWidget upon clearEvents', async function () {
        if (this.timeout() > 0) {
            this.timeout(10000);
        }
        const view = new View.InterestGroupStorageView(new InterestGroupDetailsGetter());
        events.forEach(event => {
            view.addEvent(event);
        });
        const grid = view.getInterestGroupGridForTesting();
        const cells = [
            { columnId: 'event-time', value: 0 },
            { columnId: 'event-type', value: "join" /* Protocol.Storage.InterestGroupAccessType.Join */ },
            { columnId: 'event-group-owner', value: 'https://owner1.com' },
            { columnId: 'event-group-name', value: 'cars' },
        ];
        const spy = sinon.spy(view, 'setSidebarWidget');
        assert.isTrue(spy.notCalled);
        grid.dispatchEvent(new _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGridEvents.BodyCellFocusedEvent({ columnId: 'event-time', value: '0' }, { cells }));
        await (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.raf)();
        assert.isTrue(spy.calledOnce);
        assert.deepEqual(view.sidebarWidget()?.constructor.name, 'SearchableView');
        view.clearEvents();
        assert.isTrue(spy.calledTwice);
        assert.notDeepEqual(view.sidebarWidget()?.constructor.name, 'SearchableView');
        assert.isTrue(view.sidebarWidget()?.contentElement.firstChild?.textContent?.includes('Click'));
    });
});
//# sourceMappingURL=InterestGroupStorageView.test.js.map
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

/***/ }),

/***/ "./testing/ExpectStubCall.js":
/*!***********************************!*\
  !*** ./testing/ExpectStubCall.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   expectCall: () => (/* binding */ expectCall),
/* harmony export */   expectCalled: () => (/* binding */ expectCalled)
/* harmony export */ });
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function expectCall(stub, options = {}) {
    return new Promise(resolve => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        stub.callsFake(function (...args) {
            if (stub.callCount < (options.callCount ?? 1)) {
                return undefined;
            }
            resolve(args);
            return (options.fakeFn ? options.fakeFn.apply(this, args) : undefined);
        });
    });
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function expectCalled(stub, options = {}) {
    const remainingCalls = (options.callCount ?? 1) - stub.callCount;
    if (remainingCalls <= 0) {
        return Promise.resolve(stub.lastCall.args);
    }
    return expectCall(stub, { ...options, callCount: remainingCalls });
}
//# sourceMappingURL=ExpectStubCall.js.map

/***/ })

}]);