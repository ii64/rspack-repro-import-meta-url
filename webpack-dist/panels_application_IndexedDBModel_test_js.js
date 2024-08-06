"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_application_IndexedDBModel_test_js"],{

/***/ "./panels/application/IndexedDBModel.test.js":
/*!***************************************************!*\
  !*** ./panels/application/IndexedDBModel.test.js ***!
  \***************************************************/
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




(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('IndexedDBModel', () => {
    let indexedDBModel;
    let target;
    let indexedDBAgent;
    let manager;
    const testKey = 'test-storage-key/';
    const testStorageBucket = {
        storageKey: testKey,
        name: 'inbox',
    };
    const testStorageBucketInfo = {
        id: '0',
        bucket: testStorageBucket,
        expiration: 0,
        quota: 0,
        persistent: false,
        durability: "strict" /* Protocol.Storage.StorageBucketsDurability.Strict */,
    };
    const testDBId = new _application_js__WEBPACK_IMPORTED_MODULE_3__.IndexedDBModel.DatabaseId(testStorageBucket, 'test-database');
    beforeEach(async () => {
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
        indexedDBModel = new _application_js__WEBPACK_IMPORTED_MODULE_3__.IndexedDBModel.IndexedDBModel(target);
        indexedDBAgent = target.indexedDBAgent();
        manager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.StorageBucketsModel.StorageBucketsModel);
    });
    describe('StorageKeyAdded', () => {
        it('registers database only when the model is enabled', async () => {
            const databaseAdeddSpy = sinon.spy(indexedDBModel, 'dispatchEventToListeners');
            const dbNamePromise = new Promise(resolve => {
                indexedDBModel.addEventListener(_application_js__WEBPACK_IMPORTED_MODULE_3__.IndexedDBModel.Events.DatabaseAdded, event => {
                    resolve(event.data.databaseId.name);
                });
            });
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('IndexedDB.requestDatabaseNames', () => ({ databaseNames: ['test-database'] }));
            manager?.storageBucketCreatedOrUpdated({ bucketInfo: testStorageBucketInfo });
            assert.isFalse(databaseAdeddSpy.calledWithExactly(_application_js__WEBPACK_IMPORTED_MODULE_3__.IndexedDBModel.Events.DatabaseAdded, { model: indexedDBModel, databaseId: testDBId }));
            indexedDBModel.enable();
            manager?.storageBucketCreatedOrUpdated({ bucketInfo: testStorageBucketInfo });
            assert.strictEqual(await dbNamePromise, 'test-database');
        });
        it('starts tracking database', () => {
            const trackIndexedDBSpy = sinon.spy(target.storageAgent(), 'invoke_trackIndexedDBForStorageKey');
            indexedDBModel.enable();
            manager?.storageBucketCreatedOrUpdated({ bucketInfo: testStorageBucketInfo });
            assert.isTrue(trackIndexedDBSpy.calledOnceWithExactly({ storageKey: testKey }));
        });
    });
    describe('StorageKeyRemoved', () => {
        it('stops tracking database', () => {
            const untrackIndexedDBSpy = sinon.spy(target.storageAgent(), 'invoke_untrackIndexedDBForStorageKey');
            indexedDBModel.enable();
            manager?.storageBucketCreatedOrUpdated({ bucketInfo: testStorageBucketInfo });
            manager?.storageBucketDeleted({ bucketId: testStorageBucketInfo.id });
            assert.isTrue(untrackIndexedDBSpy.calledOnceWithExactly({ storageKey: testKey }));
        });
    });
    it('calls protocol method on clearObjectStore', () => {
        const clearObjectStoreSpy = sinon.spy(indexedDBAgent, 'invoke_clearObjectStore');
        indexedDBModel.enable();
        void indexedDBModel.clearObjectStore(testDBId, 'test-store');
        assert.isTrue(clearObjectStoreSpy.calledOnceWithExactly({ storageBucket: testStorageBucket, databaseName: 'test-database', objectStoreName: 'test-store' }));
    });
    it('calls protocol method on deleteEntries', () => {
        const testKeyRange = { lower: undefined, lowerOpen: false, upper: undefined, upperOpen: true };
        const deleteEntriesSpy = sinon.spy(indexedDBAgent, 'invoke_deleteObjectStoreEntries');
        indexedDBModel.enable();
        void indexedDBModel.deleteEntries(testDBId, 'test-store', testKeyRange);
        assert.isTrue(deleteEntriesSpy.calledOnceWithExactly({
            storageBucket: testStorageBucket,
            databaseName: 'test-database',
            objectStoreName: 'test-store',
            keyRange: testKeyRange,
        }));
    });
    it('calls protocol method on refreshDatabaseNames and dispatches event', async () => {
        const requestDBNamesSpy = sinon.spy(indexedDBAgent, 'invoke_requestDatabaseNames');
        const dbRefreshedPromise = new Promise(resolve => {
            indexedDBModel.addEventListener(_application_js__WEBPACK_IMPORTED_MODULE_3__.IndexedDBModel.Events.DatabaseNamesRefreshed, () => {
                resolve();
            });
        });
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('IndexedDB.requestDatabaseNames', () => ({ databaseNames: ['test-database'] }));
        indexedDBModel.enable();
        manager?.storageBucketCreatedOrUpdated({ bucketInfo: testStorageBucketInfo });
        void indexedDBModel.refreshDatabaseNames();
        assert.isTrue(requestDBNamesSpy.calledWithExactly({ storageBucket: testStorageBucket }));
        await dbRefreshedPromise;
    });
    it('requests database with storage key on refreshDatabase', async () => {
        const requestDatabaseSpy = sinon.spy(indexedDBAgent, 'invoke_requestDatabase');
        indexedDBModel.enable();
        void indexedDBModel.refreshDatabase(testDBId);
        assert.isTrue(requestDatabaseSpy.calledOnceWithExactly({ storageBucket: testStorageBucket, databaseName: 'test-database' }));
    });
    it('requests data with storage key on loadObjectStoreData', () => {
        const requestDataSpy = sinon.spy(indexedDBAgent, 'invoke_requestData');
        indexedDBModel.enable();
        indexedDBModel.loadObjectStoreData(testDBId, 'test-store', null, 0, 50, () => { });
        assert.isTrue(requestDataSpy.calledOnceWithExactly({
            storageBucket: testStorageBucket,
            databaseName: 'test-database',
            objectStoreName: 'test-store',
            indexName: '',
            skipCount: 0,
            pageSize: 50,
            keyRange: undefined,
        }));
    });
    it('calls protocol method on getMetadata', async () => {
        const getMetadataSpy = sinon.stub(indexedDBAgent, 'invoke_getMetadata')
            .resolves({ entriesCount: 0, keyGeneratorValue: 0, getError: () => undefined });
        indexedDBModel.enable();
        await indexedDBModel.getMetadata(testDBId, new _application_js__WEBPACK_IMPORTED_MODULE_3__.IndexedDBModel.ObjectStore('test-store', null, false));
        assert.isTrue(getMetadataSpy.calledOnceWithExactly({ storageBucket: testStorageBucket, databaseName: 'test-database', objectStoreName: 'test-store' }));
    });
    it('dispatches event on indexedDBContentUpdated', () => {
        const dispatcherSpy = sinon.spy(indexedDBModel, 'dispatchEventToListeners');
        manager?.storageBucketCreatedOrUpdated({ bucketInfo: testStorageBucketInfo });
        indexedDBModel.indexedDBContentUpdated({ origin: '', storageKey: testKey, bucketId: '0', databaseName: 'test-database', objectStoreName: 'test-store' });
        assert.isTrue(dispatcherSpy.calledOnceWithExactly(_application_js__WEBPACK_IMPORTED_MODULE_3__.IndexedDBModel.Events.IndexedDBContentUpdated, { databaseId: testDBId, objectStoreName: 'test-store', model: indexedDBModel }));
    });
    it('requests database names and loads db on indexedDBListUpdated', async () => {
        const requestDBNamesSpy = sinon.spy(indexedDBAgent, 'invoke_requestDatabaseNames');
        const databaseLoadedPromise = new Promise(resolve => {
            indexedDBModel.addEventListener(_application_js__WEBPACK_IMPORTED_MODULE_3__.IndexedDBModel.Events.DatabaseLoaded, () => {
                resolve();
            });
        });
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('IndexedDB.requestDatabaseNames', () => ({ databaseNames: ['test-database'] }));
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('IndexedDB.requestDatabase', () => ({ databaseWithObjectStores: { name: 'test-database', version: '1', objectStores: [] } }));
        indexedDBModel.enable();
        manager?.storageBucketCreatedOrUpdated({ bucketInfo: testStorageBucketInfo });
        indexedDBModel.indexedDBListUpdated({ origin: '', storageKey: testKey, bucketId: '0' });
        assert.isTrue(requestDBNamesSpy.calledWithExactly({ storageBucket: testStorageBucket }));
        await databaseLoadedPromise;
    });
    it('gets databases added for storage key', async () => {
        const dbNames = ['test-database1', 'test-database2'];
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('IndexedDB.requestDatabaseNames', () => ({ databaseNames: dbNames }));
        indexedDBModel.enable();
        manager?.storageBucketCreatedOrUpdated({ bucketInfo: testStorageBucketInfo });
        await indexedDBModel.refreshDatabaseNames();
        const databases = indexedDBModel.databases();
        assert.deepEqual(databases.map(db => db.name), dbNames);
    });
    it('calls protocol method on deleteDatabase', () => {
        const deleteDBSpy = sinon.spy(indexedDBAgent, 'invoke_deleteDatabase');
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('IndexedDB.requestDatabaseNames', () => ({ databaseNames: ['test-database'] }));
        indexedDBModel.enable();
        manager?.storageBucketCreatedOrUpdated({ bucketInfo: testStorageBucketInfo });
        void indexedDBModel.deleteDatabase(testDBId);
        assert.isTrue(deleteDBSpy.calledOnceWithExactly({ storageBucket: testStorageBucket, databaseName: 'test-database' }));
    });
    it('removes databases for storage key on clearForStorageKey', async () => {
        const dbNames = ['test-database1', 'test-database-2'];
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('IndexedDB.requestDatabaseNames', () => ({ databaseNames: dbNames }));
        indexedDBModel.enable();
        manager?.storageBucketCreatedOrUpdated({ bucketInfo: testStorageBucketInfo });
        await indexedDBModel.refreshDatabaseNames();
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.clearMockConnectionResponseHandler)('IndexedDB.requestDatabaseNames');
        indexedDBModel.clearForStorageKey(testKey);
        assert.isEmpty(indexedDBModel.databases());
    });
    it('dispatches event with storage key on indexedDBContentUpdated when both storage key and origin are set', () => {
        const dispatcherSpy = sinon.spy(indexedDBModel, 'dispatchEventToListeners');
        manager?.storageBucketCreatedOrUpdated({ bucketInfo: testStorageBucketInfo });
        indexedDBModel.indexedDBContentUpdated({
            origin: 'test-origin',
            storageKey: testKey,
            bucketId: '0',
            databaseName: 'test-database',
            objectStoreName: 'test-store',
        });
        assert.isTrue(dispatcherSpy.calledOnceWithExactly(_application_js__WEBPACK_IMPORTED_MODULE_3__.IndexedDBModel.Events.IndexedDBContentUpdated, { databaseId: testDBId, objectStoreName: 'test-store', model: indexedDBModel }));
    });
});
//# sourceMappingURL=IndexedDBModel.test.js.map
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