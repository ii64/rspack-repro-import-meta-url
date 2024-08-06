"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_application_SharedStorageModel_test_js"],{

/***/ "./panels/application/SharedStorageModel.test.js":
/*!*******************************************************!*\
  !*** ./panels/application/SharedStorageModel.test.js ***!
  \*******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */ var _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/ResourceTreeHelpers.js */ "./testing/ResourceTreeHelpers.js");
/* harmony import */ var _application_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./application.js */ "./panels/application/application.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_js__WEBPACK_IMPORTED_MODULE_4__]);
_application_js__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





class SharedStorageListener {
    #model;
    #storagesWatched;
    #accessEvents;
    #changeEvents;
    constructor(model) {
        this.#model = model;
        this.#storagesWatched = new Array();
        this.#accessEvents = new Array();
        this.#changeEvents = new Map();
        this.#model.addEventListener("SharedStorageAdded" /* Resources.SharedStorageModel.Events.SharedStorageAdded */, this.#sharedStorageAdded, this);
        this.#model.addEventListener("SharedStorageRemoved" /* Resources.SharedStorageModel.Events.SharedStorageRemoved */, this.#sharedStorageRemoved, this);
        this.#model.addEventListener("SharedStorageAccess" /* Resources.SharedStorageModel.Events.SharedStorageAccess */, this.#sharedStorageAccess, this);
    }
    dispose() {
        this.#model.removeEventListener("SharedStorageAdded" /* Resources.SharedStorageModel.Events.SharedStorageAdded */, this.#sharedStorageAdded, this);
        this.#model.removeEventListener("SharedStorageRemoved" /* Resources.SharedStorageModel.Events.SharedStorageRemoved */, this.#sharedStorageRemoved, this);
        this.#model.removeEventListener("SharedStorageAccess" /* Resources.SharedStorageModel.Events.SharedStorageAccess */, this.#sharedStorageAccess, this);
        for (const storage of this.#storagesWatched) {
            storage.removeEventListener("SharedStorageChanged" /* Resources.SharedStorageModel.SharedStorageForOrigin.Events.SharedStorageChanged */, this.#sharedStorageChanged.bind(this, storage), this);
        }
    }
    get accessEvents() {
        return this.#accessEvents;
    }
    changeEventsForStorage(storage) {
        return this.#changeEvents.get(storage) || null;
    }
    changeEventsEmpty() {
        return this.#changeEvents.size === 0;
    }
    #sharedStorageAdded(event) {
        const storage = event.data;
        this.#storagesWatched.push(storage);
        storage.addEventListener("SharedStorageChanged" /* Resources.SharedStorageModel.SharedStorageForOrigin.Events.SharedStorageChanged */, this.#sharedStorageChanged.bind(this, storage), this);
    }
    #sharedStorageRemoved(event) {
        const storage = event.data;
        storage.removeEventListener("SharedStorageChanged" /* Resources.SharedStorageModel.SharedStorageForOrigin.Events.SharedStorageChanged */, this.#sharedStorageChanged.bind(this, storage), this);
        const index = this.#storagesWatched.indexOf(storage);
        if (index === -1) {
            return;
        }
        this.#storagesWatched = this.#storagesWatched.splice(index, 1);
    }
    #sharedStorageAccess(event) {
        this.#accessEvents.push(event.data);
    }
    #sharedStorageChanged(storage, event) {
        if (!this.#changeEvents.has(storage)) {
            this.#changeEvents.set(storage, new Array());
        }
        this.#changeEvents.get(storage)?.push(event.data);
    }
    async waitForStoragesAdded(expectedCount) {
        while (this.#storagesWatched.length < expectedCount) {
            await this.#model.once("SharedStorageAdded" /* Resources.SharedStorageModel.Events.SharedStorageAdded */);
        }
    }
}
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('SharedStorageModel', () => {
    let sharedStorageModel;
    let target;
    let listener;
    const TEST_ORIGIN_A = 'http://a.test';
    const TEST_ORIGIN_B = 'http://b.test';
    const TEST_ORIGIN_C = 'http://c.test';
    const METADATA = {
        creationTime: 100,
        length: 3,
        remainingBudget: 2.5,
        bytesUsed: 30,
    };
    const ENTRIES = [
        {
            key: 'key1',
            value: 'a',
        },
        {
            key: 'key2',
            value: 'b',
        },
        {
            key: 'key3',
            value: 'c',
        },
    ];
    const EVENTS = [
        {
            accessTime: 0,
            type: "documentAppend" /* Protocol.Storage.SharedStorageAccessType.DocumentAppend */,
            mainFrameId: _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.MAIN_FRAME_ID,
            ownerOrigin: TEST_ORIGIN_A,
            params: { key: 'key0', value: 'value0' },
        },
        {
            accessTime: 10,
            type: "workletGet" /* Protocol.Storage.SharedStorageAccessType.WorkletGet */,
            mainFrameId: _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.MAIN_FRAME_ID,
            ownerOrigin: TEST_ORIGIN_A,
            params: { key: 'key0' },
        },
        {
            accessTime: 15,
            type: "workletLength" /* Protocol.Storage.SharedStorageAccessType.WorkletLength */,
            mainFrameId: _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.MAIN_FRAME_ID,
            ownerOrigin: TEST_ORIGIN_B,
            params: {},
        },
        {
            accessTime: 20,
            type: "documentClear" /* Protocol.Storage.SharedStorageAccessType.DocumentClear */,
            mainFrameId: _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.MAIN_FRAME_ID,
            ownerOrigin: TEST_ORIGIN_B,
            params: {},
        },
        {
            accessTime: 100,
            type: "workletSet" /* Protocol.Storage.SharedStorageAccessType.WorkletSet */,
            mainFrameId: _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.MAIN_FRAME_ID,
            ownerOrigin: TEST_ORIGIN_C,
            params: { key: 'key0', value: 'value1', ignoreIfPresent: true },
        },
        {
            accessTime: 150,
            type: "workletRemainingBudget" /* Protocol.Storage.SharedStorageAccessType.WorkletRemainingBudget */,
            mainFrameId: _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.MAIN_FRAME_ID,
            ownerOrigin: TEST_ORIGIN_C,
            params: {},
        },
    ];
    beforeEach(async () => {
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
        await (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getInitializedResourceTreeModel)(target);
        sharedStorageModel = target.model(_application_js__WEBPACK_IMPORTED_MODULE_4__.SharedStorageModel.SharedStorageModel);
        listener = new SharedStorageListener(sharedStorageModel);
    });
    it('invokes storageAgent via SharedStorageForOrigin', async () => {
        const getMetadataSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_getSharedStorageMetadata').resolves({
            metadata: METADATA,
            getError: () => undefined,
        });
        const getEntriesSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_getSharedStorageEntries').resolves({
            entries: ENTRIES,
            getError: () => undefined,
        });
        const setEntrySpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_setSharedStorageEntry').resolves({
            getError: () => undefined,
        });
        const deleteEntrySpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_deleteSharedStorageEntry').resolves({
            getError: () => undefined,
        });
        const clearSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_clearSharedStorageEntries').resolves({
            getError: () => undefined,
        });
        const sharedStorage = new _application_js__WEBPACK_IMPORTED_MODULE_4__.SharedStorageModel.SharedStorageForOrigin(sharedStorageModel, TEST_ORIGIN_A);
        assert.strictEqual(sharedStorage.securityOrigin, TEST_ORIGIN_A);
        const metadata = await sharedStorage.getMetadata();
        assert.isTrue(getMetadataSpy.calledOnceWithExactly({ ownerOrigin: TEST_ORIGIN_A }));
        assert.deepEqual(METADATA, metadata);
        const entries = await sharedStorage.getEntries();
        assert.isTrue(getEntriesSpy.calledOnceWithExactly({ ownerOrigin: TEST_ORIGIN_A }));
        assert.deepEqual(ENTRIES, entries);
        await sharedStorage.setEntry('new-key1', 'new-value1', true);
        assert.isTrue(setEntrySpy.calledOnceWithExactly({ ownerOrigin: TEST_ORIGIN_A, key: 'new-key1', value: 'new-value1', ignoreIfPresent: true }));
        await sharedStorage.deleteEntry('new-key1');
        assert.isTrue(deleteEntrySpy.calledOnceWithExactly({ ownerOrigin: TEST_ORIGIN_A, key: 'new-key1' }));
        await sharedStorage.clear();
        assert.isTrue(clearSpy.calledOnceWithExactly({ ownerOrigin: TEST_ORIGIN_A }));
    });
    it('adds/removes SharedStorageForOrigin on SecurityOrigin events', async () => {
        const setTrackingSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_setSharedStorageTracking').resolves({
            getError: () => undefined,
        });
        await sharedStorageModel.enable();
        assert.isTrue(setTrackingSpy.calledOnceWithExactly({ enable: true }));
        assert.isEmpty(sharedStorageModel.storages());
        const manager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SecurityOriginManager.SecurityOriginManager);
        assert.exists(manager);
        const addedPromise = listener.waitForStoragesAdded(1);
        manager.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SecurityOriginManager.Events.SecurityOriginAdded, TEST_ORIGIN_A);
        await addedPromise;
        assert.exists(sharedStorageModel.storageForOrigin(TEST_ORIGIN_A));
        manager.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SecurityOriginManager.Events.SecurityOriginRemoved, TEST_ORIGIN_A);
        assert.isEmpty(sharedStorageModel.storages());
    });
    it('does not add SharedStorageForOrigin if origin invalid', async () => {
        const setTrackingSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_setSharedStorageTracking').resolves({
            getError: () => undefined,
        });
        await sharedStorageModel.enable();
        assert.isTrue(setTrackingSpy.calledOnceWithExactly({ enable: true }));
        assert.isEmpty(sharedStorageModel.storages());
        const manager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SecurityOriginManager.SecurityOriginManager);
        assert.exists(manager);
        manager.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SecurityOriginManager.Events.SecurityOriginAdded, 'invalid');
        assert.isEmpty(sharedStorageModel.storages());
    });
    it('does not add SharedStorageForOrigin if origin already added', async () => {
        const setTrackingSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_setSharedStorageTracking').resolves({
            getError: () => undefined,
        });
        await sharedStorageModel.enable();
        assert.isTrue(setTrackingSpy.calledOnceWithExactly({ enable: true }));
        assert.isEmpty(sharedStorageModel.storages());
        const addedPromise = listener.waitForStoragesAdded(1);
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getMainFrame)(target), { url: TEST_ORIGIN_A });
        await addedPromise;
        assert.exists(sharedStorageModel.storageForOrigin(TEST_ORIGIN_A));
        assert.strictEqual(1, sharedStorageModel.numStoragesForTesting());
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getMainFrame)(target), { url: TEST_ORIGIN_A });
        assert.strictEqual(1, sharedStorageModel.numStoragesForTesting());
    });
    it('adds/removes SecurityOrigins when model is enabled/disabled', async () => {
        const setTrackingSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_setSharedStorageTracking').resolves({
            getError: () => undefined,
        });
        const manager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SecurityOriginManager.SecurityOriginManager);
        assert.exists(manager);
        const originSet = new Set([TEST_ORIGIN_A, TEST_ORIGIN_B, TEST_ORIGIN_C]);
        manager.updateSecurityOrigins(originSet);
        assert.strictEqual(3, manager.securityOrigins().length);
        const addedPromise = listener.waitForStoragesAdded(3);
        await sharedStorageModel.enable();
        assert.isTrue(setTrackingSpy.calledOnceWithExactly({ enable: true }));
        await addedPromise;
        assert.strictEqual(3, sharedStorageModel.numStoragesForTesting());
        assert.exists(sharedStorageModel.storageForOrigin(TEST_ORIGIN_A));
        assert.exists(sharedStorageModel.storageForOrigin(TEST_ORIGIN_B));
        assert.exists(sharedStorageModel.storageForOrigin(TEST_ORIGIN_C));
        sharedStorageModel.disable();
        assert.isEmpty(sharedStorageModel.storages());
    });
    it('dispatches SharedStorageAccess events to listeners', async () => {
        const setTrackingSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_setSharedStorageTracking').resolves({
            getError: () => undefined,
        });
        const manager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SecurityOriginManager.SecurityOriginManager);
        assert.exists(manager);
        await sharedStorageModel.enable();
        assert.isTrue(setTrackingSpy.calledOnceWithExactly({ enable: true }));
        for (const event of EVENTS) {
            sharedStorageModel.sharedStorageAccessed(event);
        }
        assert.deepEqual(EVENTS, listener.accessEvents);
    });
    it('dispatches SharedStorageChanged events to listeners', async () => {
        const setTrackingSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_setSharedStorageTracking').resolves({
            getError: () => undefined,
        });
        const manager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SecurityOriginManager.SecurityOriginManager);
        assert.exists(manager);
        await sharedStorageModel.enable();
        assert.isTrue(setTrackingSpy.calledOnceWithExactly({ enable: true }));
        // For change events whose origins aren't yet in the model, the origin is added
        // to the model, with the `SharedStorageAdded` event being subsequently dispatched
        // instead of the `SharedStorageChanged` event.
        const addedPromise = listener.waitForStoragesAdded(3);
        for (const event of EVENTS) {
            sharedStorageModel.sharedStorageAccessed(event);
        }
        await addedPromise;
        assert.strictEqual(4, sharedStorageModel.numStoragesForTesting());
        assert.deepEqual(EVENTS, listener.accessEvents);
        assert.isTrue(listener.changeEventsEmpty());
        // All events will be dispatched as `SharedStorageAccess` events, but only change
        // events for existing origins will be forwarded as `SharedStorageChanged` events.
        for (const event of EVENTS) {
            sharedStorageModel.sharedStorageAccessed(event);
        }
        assert.deepEqual(EVENTS.concat(EVENTS), listener.accessEvents);
        const storageA = sharedStorageModel.storageForOrigin(TEST_ORIGIN_A);
        assert.exists(storageA);
        assert.deepEqual(listener.changeEventsForStorage(storageA), [
            {
                accessTime: 0,
                type: "documentAppend" /* Protocol.Storage.SharedStorageAccessType.DocumentAppend */,
                mainFrameId: _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.MAIN_FRAME_ID,
                params: { key: 'key0', value: 'value0' },
            },
        ]);
        const storageB = sharedStorageModel.storageForOrigin(TEST_ORIGIN_B);
        assert.exists(storageB);
        assert.deepEqual(listener.changeEventsForStorage(storageB), [
            {
                accessTime: 20,
                type: "documentClear" /* Protocol.Storage.SharedStorageAccessType.DocumentClear */,
                mainFrameId: _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.MAIN_FRAME_ID,
                params: {},
            },
        ]);
        const storageC = sharedStorageModel.storageForOrigin(TEST_ORIGIN_C);
        assert.exists(storageC);
        assert.deepEqual(listener.changeEventsForStorage(storageC), [
            {
                accessTime: 100,
                type: "workletSet" /* Protocol.Storage.SharedStorageAccessType.WorkletSet */,
                mainFrameId: _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.MAIN_FRAME_ID,
                params: { key: 'key0', value: 'value1', ignoreIfPresent: true },
            },
        ]);
    });
});
//# sourceMappingURL=SharedStorageModel.test.js.map
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