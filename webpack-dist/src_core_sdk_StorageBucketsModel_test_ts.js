"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_core_sdk_StorageBucketsModel_test_ts"],{

/***/ "./src/core/sdk/StorageBucketsModel.test.ts":
/*!**************************************************!*\
  !*** ./src/core/sdk/StorageBucketsModel.test.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sdk.js */ "./src/core/sdk/sdk.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
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
var _StorageBucketModelListener_instances, _StorageBucketModelListener_model, _StorageBucketModelListener_bucketEvents, _StorageBucketModelListener_addEventListener;




var BucketEvents = _sdk_js__WEBPACK_IMPORTED_MODULE_3__.StorageBucketsModel.Events;
class StorageBucketModelListener {
    constructor(model) {
        _StorageBucketModelListener_instances.add(this);
        _StorageBucketModelListener_model.set(this, void 0);
        _StorageBucketModelListener_bucketEvents.set(this, new Map());
        __classPrivateFieldSet(this, _StorageBucketModelListener_model, model, "f");
        __classPrivateFieldGet(this, _StorageBucketModelListener_instances, "m", _StorageBucketModelListener_addEventListener).call(this, BucketEvents.BucketAdded);
        __classPrivateFieldGet(this, _StorageBucketModelListener_instances, "m", _StorageBucketModelListener_addEventListener).call(this, BucketEvents.BucketRemoved);
        __classPrivateFieldGet(this, _StorageBucketModelListener_instances, "m", _StorageBucketModelListener_addEventListener).call(this, BucketEvents.BucketChanged);
    }
    events(eventType) {
        let bucketEvents = __classPrivateFieldGet(this, _StorageBucketModelListener_bucketEvents, "f").get(eventType);
        if (!bucketEvents) {
            bucketEvents = new Array();
            __classPrivateFieldGet(this, _StorageBucketModelListener_bucketEvents, "f").set(eventType, bucketEvents);
        }
        return bucketEvents;
    }
    bucketInfos(eventType) {
        return this.events(eventType).map(event => event.bucketInfo);
    }
    eventCount(eventType) {
        return this.events(eventType).length;
    }
    async waitForBucketEvents(eventType, eventCount) {
        while (this.eventCount(eventType) < eventCount) {
            await __classPrivateFieldGet(this, _StorageBucketModelListener_model, "f").once(eventType);
        }
    }
}
_StorageBucketModelListener_model = new WeakMap(), _StorageBucketModelListener_bucketEvents = new WeakMap(), _StorageBucketModelListener_instances = new WeakSet(), _StorageBucketModelListener_addEventListener = function _StorageBucketModelListener_addEventListener(eventType) {
    __classPrivateFieldGet(this, _StorageBucketModelListener_model, "f").addEventListener(eventType, (event) => {
        this.events(eventType).push(event.data);
    });
};
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('StorageBucketsModel', () => {
    let storageKeyManager;
    let storageBucketsModel;
    let target;
    let listener;
    const STORAGE_KEYS = [
        'storagekey1',
        'storagekey2',
        'storagekey3',
    ];
    const STORAGE_BUCKET_INFOS = [
        {
            bucket: {
                storageKey: STORAGE_KEYS[0],
            },
            id: '0',
            expiration: 0,
            quota: 0,
            persistent: false,
            durability: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Storage.StorageBucketsDurability.Strict,
        },
        {
            bucket: {
                storageKey: STORAGE_KEYS[0],
                name: 'bucket1',
            },
            id: '1',
            expiration: 0,
            quota: 0,
            persistent: false,
            durability: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Storage.StorageBucketsDurability.Strict,
        },
        {
            bucket: {
                storageKey: STORAGE_KEYS[1],
                name: 'bucket2',
            },
            id: '2',
            expiration: 0,
            quota: 0,
            persistent: false,
            durability: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Storage.StorageBucketsDurability.Strict,
        },
        {
            bucket: {
                storageKey: STORAGE_KEYS[2],
                name: 'bucket3',
            },
            id: '3',
            expiration: 0,
            quota: 0,
            persistent: false,
            durability: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Storage.StorageBucketsDurability.Strict,
        },
    ];
    const getBucketsForStorageKeys = (...storageKeys) => {
        return STORAGE_BUCKET_INFOS.filter(({ bucket }) => storageKeys.includes(bucket.storageKey));
    };
    const setStorageBucketTrackingStub = ({ storageKey }) => {
        for (const bucketInfo of getBucketsForStorageKeys(storageKey)) {
            storageBucketsModel.storageBucketCreatedOrUpdated({ bucketInfo });
        }
        return Promise.resolve({
            getError: () => undefined,
        });
    };
    beforeEach(() => {
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
        storageKeyManager =
            target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.StorageKeyManager.StorageKeyManager);
        storageBucketsModel =
            target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.StorageBucketsModel.StorageBucketsModel);
        listener = new StorageBucketModelListener(storageBucketsModel);
    });
    describe('StorageKeyAdded', () => {
        it('starts tracking for the storage key', async () => {
            const storageKey = STORAGE_KEYS[0];
            const setStorageBucketTrackingSpy = sinon.stub(storageBucketsModel.storageAgent, 'invoke_setStorageBucketTracking').resolves({
                getError: () => undefined,
            });
            storageBucketsModel.enable();
            assert.isTrue(setStorageBucketTrackingSpy.notCalled);
            storageKeyManager.updateStorageKeys(new Set([storageKey]));
            assert.isTrue(setStorageBucketTrackingSpy.calledOnceWithExactly({ storageKey, enable: true }));
        });
        it('adds buckets for storage keys that already have been added', async () => {
            const storageKeys = [STORAGE_KEYS[0], STORAGE_KEYS[2]];
            const bucketsForStorageKeyCount = 3;
            sinon.stub(storageBucketsModel.storageAgent, 'invoke_setStorageBucketTracking')
                .callsFake(setStorageBucketTrackingStub);
            storageKeyManager.updateStorageKeys(new Set(storageKeys));
            storageBucketsModel.enable();
            await listener.waitForBucketEvents(BucketEvents.BucketAdded, bucketsForStorageKeyCount);
            assert.isTrue(listener.eventCount(BucketEvents.BucketAdded) === bucketsForStorageKeyCount);
            assert.deepEqual(getBucketsForStorageKeys(...storageKeys), listener.bucketInfos(BucketEvents.BucketAdded));
        });
    });
    describe('StorageKeyRemoved', () => {
        it('stops tracking for the storage key', async () => {
            const storageKey = STORAGE_KEYS[0];
            const setStorageBucketTrackingSpy = sinon.stub(storageBucketsModel.storageAgent, 'invoke_setStorageBucketTracking').resolves({
                getError: () => undefined,
            });
            storageBucketsModel.enable();
            assert.isTrue(setStorageBucketTrackingSpy.notCalled);
            storageKeyManager.updateStorageKeys(new Set([storageKey]));
            storageKeyManager.updateStorageKeys(new Set([]));
            assert.isTrue(setStorageBucketTrackingSpy.callCount === 2);
            assert.isTrue(setStorageBucketTrackingSpy.secondCall.calledWithExactly({ storageKey, enable: false }));
        });
        it('removes all buckets for removed storage key', async () => {
            const storageKeys = [STORAGE_KEYS[2], STORAGE_KEYS[0]];
            sinon.stub(storageBucketsModel.storageAgent, 'invoke_setStorageBucketTracking')
                .callsFake(setStorageBucketTrackingStub);
            storageBucketsModel.enable();
            storageKeyManager.updateStorageKeys(new Set(storageKeys));
            await listener.waitForBucketEvents(BucketEvents.BucketAdded, 3);
            const removedStorageKey = storageKeys.pop();
            storageKeyManager.updateStorageKeys(new Set(storageKeys));
            await listener.waitForBucketEvents(BucketEvents.BucketRemoved, 2);
            assert.isTrue(listener.eventCount(BucketEvents.BucketRemoved) === 2);
            assert.deepEqual(getBucketsForStorageKeys(removedStorageKey), listener.bucketInfos(BucketEvents.BucketRemoved));
        });
    });
    describe('CreatedUpdatedDeletedBucket', () => {
        it('notifies when a bucket is created', async () => {
            const STORAGE_BUCKET_INFO_TO_CREATE = {
                bucket: {
                    storageKey: STORAGE_KEYS[0],
                    name: 'bucket4',
                },
                id: '4',
                expiration: 0,
                quota: 0,
                persistent: false,
                durability: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Storage.StorageBucketsDurability.Strict,
            };
            const storageKeys = [STORAGE_KEYS[0], STORAGE_KEYS[2]];
            sinon.stub(storageBucketsModel.storageAgent, 'invoke_setStorageBucketTracking')
                .callsFake(setStorageBucketTrackingStub);
            storageBucketsModel.enable();
            storageKeyManager.updateStorageKeys(new Set(storageKeys));
            await listener.waitForBucketEvents(BucketEvents.BucketAdded, 3);
            assert.isTrue(listener.eventCount(BucketEvents.BucketAdded) === 3);
            const expectedBuckets = getBucketsForStorageKeys(...storageKeys);
            assert.deepEqual(expectedBuckets, listener.bucketInfos(BucketEvents.BucketAdded));
            storageBucketsModel.storageBucketCreatedOrUpdated({ bucketInfo: STORAGE_BUCKET_INFO_TO_CREATE });
            await listener.waitForBucketEvents(BucketEvents.BucketAdded, 4);
            assert.isTrue(listener.eventCount(BucketEvents.BucketAdded) === 4);
            expectedBuckets.push(STORAGE_BUCKET_INFO_TO_CREATE);
            assert.deepEqual(expectedBuckets, listener.bucketInfos(BucketEvents.BucketAdded));
        });
        it('notifies when a bucket is updated', async () => {
            const STORAGE_BUCKET_INFO_UPDATED = { ...STORAGE_BUCKET_INFOS[0], expiration: 100 };
            const storageKeys = [STORAGE_KEYS[0], STORAGE_KEYS[2]];
            sinon.stub(storageBucketsModel.storageAgent, 'invoke_setStorageBucketTracking')
                .callsFake(setStorageBucketTrackingStub);
            storageBucketsModel.enable();
            storageKeyManager.updateStorageKeys(new Set(storageKeys));
            await listener.waitForBucketEvents(BucketEvents.BucketAdded, 3);
            assert.isTrue(listener.eventCount(BucketEvents.BucketChanged) === 0);
            storageBucketsModel.storageBucketCreatedOrUpdated({ bucketInfo: STORAGE_BUCKET_INFO_UPDATED });
            await listener.waitForBucketEvents(BucketEvents.BucketChanged, 1);
            assert.isTrue(listener.eventCount(BucketEvents.BucketChanged) === 1);
            assert.deepEqual(listener.bucketInfos(BucketEvents.BucketChanged)[0], STORAGE_BUCKET_INFO_UPDATED);
        });
        it('notifies when a bucket is deleted', async () => {
            const STORAGE_BUCKET_INFO_REMOVED = STORAGE_BUCKET_INFOS[0];
            const storageKeys = [STORAGE_KEYS[0], STORAGE_KEYS[2]];
            sinon.stub(storageBucketsModel.storageAgent, 'invoke_setStorageBucketTracking')
                .callsFake(setStorageBucketTrackingStub);
            storageBucketsModel.enable();
            storageKeyManager.updateStorageKeys(new Set(storageKeys));
            await listener.waitForBucketEvents(BucketEvents.BucketAdded, 3);
            assert.isTrue(listener.eventCount(BucketEvents.BucketRemoved) === 0);
            storageBucketsModel.storageBucketDeleted({ bucketId: STORAGE_BUCKET_INFO_REMOVED.id });
            await listener.waitForBucketEvents(BucketEvents.BucketRemoved, 1);
            assert.isTrue(listener.eventCount(BucketEvents.BucketRemoved) === 1);
            assert.deepEqual(listener.bucketInfos(BucketEvents.BucketRemoved)[0], STORAGE_BUCKET_INFO_REMOVED);
        });
    });
    describe('GetBucketFunctions', () => {
        it('gets all buckets', async () => {
            sinon.stub(storageBucketsModel.storageAgent, 'invoke_setStorageBucketTracking')
                .callsFake(setStorageBucketTrackingStub);
            storageBucketsModel.enable();
            storageKeyManager.updateStorageKeys(new Set(STORAGE_KEYS));
            await listener.waitForBucketEvents(BucketEvents.BucketAdded, 4);
            assert.deepEqual(new Set(STORAGE_BUCKET_INFOS), storageBucketsModel.getBuckets());
        });
        it('gets buckets for storage key', async () => {
            sinon.stub(storageBucketsModel.storageAgent, 'invoke_setStorageBucketTracking')
                .callsFake(setStorageBucketTrackingStub);
            storageBucketsModel.enable();
            storageKeyManager.updateStorageKeys(new Set(STORAGE_KEYS));
            await listener.waitForBucketEvents(BucketEvents.BucketAdded, 4);
            assert.deepEqual(new Set(getBucketsForStorageKeys(STORAGE_KEYS[0])), storageBucketsModel.getBucketsForStorageKey(STORAGE_KEYS[0]));
            assert.deepEqual(new Set(getBucketsForStorageKeys(STORAGE_KEYS[1])), storageBucketsModel.getBucketsForStorageKey(STORAGE_KEYS[1]));
            assert.deepEqual(new Set(getBucketsForStorageKeys(STORAGE_KEYS[2])), storageBucketsModel.getBucketsForStorageKey(STORAGE_KEYS[2]));
        });
        it('gets buckets by id', async () => {
            sinon.stub(storageBucketsModel.storageAgent, 'invoke_setStorageBucketTracking')
                .callsFake(setStorageBucketTrackingStub);
            storageBucketsModel.enable();
            storageKeyManager.updateStorageKeys(new Set(STORAGE_KEYS));
            await listener.waitForBucketEvents(BucketEvents.BucketAdded, 4);
            assert.deepEqual(STORAGE_BUCKET_INFOS[0], storageBucketsModel.getBucketById(STORAGE_BUCKET_INFOS[0].id));
            assert.deepEqual(STORAGE_BUCKET_INFOS[1], storageBucketsModel.getBucketById(STORAGE_BUCKET_INFOS[1].id));
            assert.deepEqual(STORAGE_BUCKET_INFOS[2], storageBucketsModel.getBucketById(STORAGE_BUCKET_INFOS[2].id));
            assert.deepEqual(STORAGE_BUCKET_INFOS[3], storageBucketsModel.getBucketById(STORAGE_BUCKET_INFOS[3].id));
        });
        it('gets bucket by name', async () => {
            sinon.stub(storageBucketsModel.storageAgent, 'invoke_setStorageBucketTracking')
                .callsFake(setStorageBucketTrackingStub);
            storageBucketsModel.enable();
            storageKeyManager.updateStorageKeys(new Set(STORAGE_KEYS));
            await listener.waitForBucketEvents(BucketEvents.BucketAdded, 4);
            assert.deepEqual(STORAGE_BUCKET_INFOS[0], storageBucketsModel.getBucketByName(STORAGE_BUCKET_INFOS[0].bucket.storageKey, STORAGE_BUCKET_INFOS[0].bucket.name));
            assert.deepEqual(STORAGE_BUCKET_INFOS[1], storageBucketsModel.getBucketByName(STORAGE_BUCKET_INFOS[1].bucket.storageKey, STORAGE_BUCKET_INFOS[1].bucket.name));
            assert.deepEqual(STORAGE_BUCKET_INFOS[2], storageBucketsModel.getBucketByName(STORAGE_BUCKET_INFOS[2].bucket.storageKey, STORAGE_BUCKET_INFOS[2].bucket.name));
            assert.deepEqual(STORAGE_BUCKET_INFOS[3], storageBucketsModel.getBucketByName(STORAGE_BUCKET_INFOS[3].bucket.storageKey, STORAGE_BUCKET_INFOS[3].bucket.name));
        });
        it('gets default bucket when name isnt given', async () => {
            sinon.stub(storageBucketsModel.storageAgent, 'invoke_setStorageBucketTracking')
                .callsFake(setStorageBucketTrackingStub);
            storageBucketsModel.enable();
            storageKeyManager.updateStorageKeys(new Set(STORAGE_KEYS));
            await listener.waitForBucketEvents(BucketEvents.BucketAdded, 4);
            {
                const bucketInfo = STORAGE_BUCKET_INFOS[0];
                const { bucket: { storageKey, name } } = bucketInfo;
                assert.deepEqual(bucketInfo, storageBucketsModel.getBucketByName(storageKey, name));
            }
            {
                const bucketInfo = STORAGE_BUCKET_INFOS[1];
                const { bucket: { storageKey, name } } = bucketInfo;
                assert.deepEqual(bucketInfo, storageBucketsModel.getBucketByName(storageKey, name));
            }
            {
                const bucketInfo = STORAGE_BUCKET_INFOS[2];
                const { bucket: { storageKey, name } } = bucketInfo;
                assert.deepEqual(bucketInfo, storageBucketsModel.getBucketByName(storageKey, name));
            }
            {
                const bucketInfo = STORAGE_BUCKET_INFOS[3];
                const { bucket: { storageKey, name } } = bucketInfo;
                assert.deepEqual(bucketInfo, storageBucketsModel.getBucketByName(storageKey, name));
            }
        });
    });
    it('deletes the bucket', () => {
        const { bucket } = STORAGE_BUCKET_INFOS[0];
        const setStorageBucketTrackingSpy = sinon.stub(storageBucketsModel.storageAgent, 'invoke_deleteStorageBucket').resolves({
            getError: () => undefined,
        });
        storageBucketsModel.deleteBucket(bucket);
        assert.isTrue(setStorageBucketTrackingSpy.calledOnceWithExactly({ bucket }));
    });
});


/***/ })

}]);