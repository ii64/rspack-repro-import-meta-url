"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_IndexedDBModel_test_ts"],{

/***/ "./src/panels/application/IndexedDBModel.test.ts":
/*!*******************************************************!*\
  !*** ./src/panels/application/IndexedDBModel.test.ts ***!
  \*******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _application_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./application.js */ "./src/panels/application/application.ts");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_js__WEBPACK_IMPORTED_MODULE_4__]);
_application_js__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.describeWithMockConnection)('IndexedDBModel', () => {
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
        durability: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Storage.StorageBucketsDurability.Strict,
    };
    const testDBId = new _application_js__WEBPACK_IMPORTED_MODULE_4__.IndexedDBModel.DatabaseId(testStorageBucket, 'test-database');
    beforeEach(async () => {
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)();
        indexedDBModel = new _application_js__WEBPACK_IMPORTED_MODULE_4__.IndexedDBModel.IndexedDBModel(target);
        indexedDBAgent = target.indexedDBAgent();
        manager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.StorageBucketsModel.StorageBucketsModel);
    });
    describe('StorageKeyAdded', () => {
        it('registers database only when the model is enabled', async () => {
            const databaseAdeddSpy = sinon.spy(indexedDBModel, 'dispatchEventToListeners');
            const dbNamePromise = new Promise(resolve => {
                indexedDBModel.addEventListener(_application_js__WEBPACK_IMPORTED_MODULE_4__.IndexedDBModel.Events.DatabaseAdded, event => {
                    resolve(event.data.databaseId.name);
                });
            });
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.setMockConnectionResponseHandler)('IndexedDB.requestDatabaseNames', () => ({ databaseNames: ['test-database'] }));
            manager?.storageBucketCreatedOrUpdated({ bucketInfo: testStorageBucketInfo });
            assert.isFalse(databaseAdeddSpy.calledWithExactly(_application_js__WEBPACK_IMPORTED_MODULE_4__.IndexedDBModel.Events.DatabaseAdded, { model: indexedDBModel, databaseId: testDBId }));
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
            indexedDBModel.addEventListener(_application_js__WEBPACK_IMPORTED_MODULE_4__.IndexedDBModel.Events.DatabaseNamesRefreshed, () => {
                resolve();
            });
        });
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.setMockConnectionResponseHandler)('IndexedDB.requestDatabaseNames', () => ({ databaseNames: ['test-database'] }));
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
        await indexedDBModel.getMetadata(testDBId, new _application_js__WEBPACK_IMPORTED_MODULE_4__.IndexedDBModel.ObjectStore('test-store', null, false));
        assert.isTrue(getMetadataSpy.calledOnceWithExactly({ storageBucket: testStorageBucket, databaseName: 'test-database', objectStoreName: 'test-store' }));
    });
    it('dispatches event on indexedDBContentUpdated', () => {
        const dispatcherSpy = sinon.spy(indexedDBModel, 'dispatchEventToListeners');
        manager?.storageBucketCreatedOrUpdated({ bucketInfo: testStorageBucketInfo });
        indexedDBModel.indexedDBContentUpdated({ origin: '', storageKey: testKey, bucketId: '0', databaseName: 'test-database', objectStoreName: 'test-store' });
        assert.isTrue(dispatcherSpy.calledOnceWithExactly(_application_js__WEBPACK_IMPORTED_MODULE_4__.IndexedDBModel.Events.IndexedDBContentUpdated, { databaseId: testDBId, objectStoreName: 'test-store', model: indexedDBModel }));
    });
    it('requests database names and loads db on indexedDBListUpdated', async () => {
        const requestDBNamesSpy = sinon.spy(indexedDBAgent, 'invoke_requestDatabaseNames');
        const databaseLoadedPromise = new Promise(resolve => {
            indexedDBModel.addEventListener(_application_js__WEBPACK_IMPORTED_MODULE_4__.IndexedDBModel.Events.DatabaseLoaded, () => {
                resolve();
            });
        });
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.setMockConnectionResponseHandler)('IndexedDB.requestDatabaseNames', () => ({ databaseNames: ['test-database'] }));
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.setMockConnectionResponseHandler)('IndexedDB.requestDatabase', () => ({ databaseWithObjectStores: { name: 'test-database', version: '1', objectStores: [] } }));
        indexedDBModel.enable();
        manager?.storageBucketCreatedOrUpdated({ bucketInfo: testStorageBucketInfo });
        indexedDBModel.indexedDBListUpdated({ origin: '', storageKey: testKey, bucketId: '0' });
        assert.isTrue(requestDBNamesSpy.calledWithExactly({ storageBucket: testStorageBucket }));
        await databaseLoadedPromise;
    });
    it('gets databases added for storage key', async () => {
        const dbNames = ['test-database1', 'test-database2'];
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.setMockConnectionResponseHandler)('IndexedDB.requestDatabaseNames', () => ({ databaseNames: dbNames }));
        indexedDBModel.enable();
        manager?.storageBucketCreatedOrUpdated({ bucketInfo: testStorageBucketInfo });
        await indexedDBModel.refreshDatabaseNames();
        const databases = indexedDBModel.databases();
        assert.deepEqual(databases.map(db => db.name), dbNames);
    });
    it('calls protocol method on deleteDatabase', () => {
        const deleteDBSpy = sinon.spy(indexedDBAgent, 'invoke_deleteDatabase');
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.setMockConnectionResponseHandler)('IndexedDB.requestDatabaseNames', () => ({ databaseNames: ['test-database'] }));
        indexedDBModel.enable();
        manager?.storageBucketCreatedOrUpdated({ bucketInfo: testStorageBucketInfo });
        void indexedDBModel.deleteDatabase(testDBId);
        assert.isTrue(deleteDBSpy.calledOnceWithExactly({ storageBucket: testStorageBucket, databaseName: 'test-database' }));
    });
    it('removes databases for storage key on clearForStorageKey', async () => {
        const dbNames = ['test-database1', 'test-database-2'];
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.setMockConnectionResponseHandler)('IndexedDB.requestDatabaseNames', () => ({ databaseNames: dbNames }));
        indexedDBModel.enable();
        manager?.storageBucketCreatedOrUpdated({ bucketInfo: testStorageBucketInfo });
        await indexedDBModel.refreshDatabaseNames();
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.clearMockConnectionResponseHandler)('IndexedDB.requestDatabaseNames');
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
        assert.isTrue(dispatcherSpy.calledOnceWithExactly(_application_js__WEBPACK_IMPORTED_MODULE_4__.IndexedDBModel.Events.IndexedDBContentUpdated, { databaseId: testDBId, objectStoreName: 'test-store', model: indexedDBModel }));
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

}]);