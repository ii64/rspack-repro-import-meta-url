"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_SharedStorageModel_test_ts"],{

/***/ "./src/panels/application/SharedStorageModel.test.ts":
/*!***********************************************************!*\
  !*** ./src/panels/application/SharedStorageModel.test.ts ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/ResourceTreeHelpers.js */ "./src/testing/ResourceTreeHelpers.ts");
/* harmony import */ var _application_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./application.js */ "./src/panels/application/application.ts");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_js__WEBPACK_IMPORTED_MODULE_5__]);
_application_js__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
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
var _SharedStorageListener_instances, _SharedStorageListener_model, _SharedStorageListener_storagesWatched, _SharedStorageListener_accessEvents, _SharedStorageListener_changeEvents, _SharedStorageListener_sharedStorageAdded, _SharedStorageListener_sharedStorageRemoved, _SharedStorageListener_sharedStorageAccess, _SharedStorageListener_sharedStorageChanged;






class SharedStorageListener {
    constructor(model) {
        _SharedStorageListener_instances.add(this);
        _SharedStorageListener_model.set(this, void 0);
        _SharedStorageListener_storagesWatched.set(this, void 0);
        _SharedStorageListener_accessEvents.set(this, void 0);
        _SharedStorageListener_changeEvents.set(this, void 0);
        __classPrivateFieldSet(this, _SharedStorageListener_model, model, "f");
        __classPrivateFieldSet(this, _SharedStorageListener_storagesWatched, new Array(), "f");
        __classPrivateFieldSet(this, _SharedStorageListener_accessEvents, new Array(), "f");
        __classPrivateFieldSet(this, _SharedStorageListener_changeEvents, new Map(), "f");
        __classPrivateFieldGet(this, _SharedStorageListener_model, "f").addEventListener(_application_js__WEBPACK_IMPORTED_MODULE_5__.SharedStorageModel.Events.SharedStorageAdded, __classPrivateFieldGet(this, _SharedStorageListener_instances, "m", _SharedStorageListener_sharedStorageAdded), this);
        __classPrivateFieldGet(this, _SharedStorageListener_model, "f").addEventListener(_application_js__WEBPACK_IMPORTED_MODULE_5__.SharedStorageModel.Events.SharedStorageRemoved, __classPrivateFieldGet(this, _SharedStorageListener_instances, "m", _SharedStorageListener_sharedStorageRemoved), this);
        __classPrivateFieldGet(this, _SharedStorageListener_model, "f").addEventListener(_application_js__WEBPACK_IMPORTED_MODULE_5__.SharedStorageModel.Events.SharedStorageAccess, __classPrivateFieldGet(this, _SharedStorageListener_instances, "m", _SharedStorageListener_sharedStorageAccess), this);
    }
    dispose() {
        __classPrivateFieldGet(this, _SharedStorageListener_model, "f").removeEventListener(_application_js__WEBPACK_IMPORTED_MODULE_5__.SharedStorageModel.Events.SharedStorageAdded, __classPrivateFieldGet(this, _SharedStorageListener_instances, "m", _SharedStorageListener_sharedStorageAdded), this);
        __classPrivateFieldGet(this, _SharedStorageListener_model, "f").removeEventListener(_application_js__WEBPACK_IMPORTED_MODULE_5__.SharedStorageModel.Events.SharedStorageRemoved, __classPrivateFieldGet(this, _SharedStorageListener_instances, "m", _SharedStorageListener_sharedStorageRemoved), this);
        __classPrivateFieldGet(this, _SharedStorageListener_model, "f").removeEventListener(_application_js__WEBPACK_IMPORTED_MODULE_5__.SharedStorageModel.Events.SharedStorageAccess, __classPrivateFieldGet(this, _SharedStorageListener_instances, "m", _SharedStorageListener_sharedStorageAccess), this);
        for (const storage of __classPrivateFieldGet(this, _SharedStorageListener_storagesWatched, "f")) {
            storage.removeEventListener(_application_js__WEBPACK_IMPORTED_MODULE_5__.SharedStorageModel.SharedStorageForOrigin.Events.SharedStorageChanged, __classPrivateFieldGet(this, _SharedStorageListener_instances, "m", _SharedStorageListener_sharedStorageChanged).bind(this, storage), this);
        }
    }
    get accessEvents() {
        return __classPrivateFieldGet(this, _SharedStorageListener_accessEvents, "f");
    }
    changeEventsForStorage(storage) {
        return __classPrivateFieldGet(this, _SharedStorageListener_changeEvents, "f").get(storage) || null;
    }
    changeEventsEmpty() {
        return __classPrivateFieldGet(this, _SharedStorageListener_changeEvents, "f").size === 0;
    }
    async waitForStoragesAdded(expectedCount) {
        while (__classPrivateFieldGet(this, _SharedStorageListener_storagesWatched, "f").length < expectedCount) {
            await __classPrivateFieldGet(this, _SharedStorageListener_model, "f").once(_application_js__WEBPACK_IMPORTED_MODULE_5__.SharedStorageModel.Events.SharedStorageAdded);
        }
    }
}
_SharedStorageListener_model = new WeakMap(), _SharedStorageListener_storagesWatched = new WeakMap(), _SharedStorageListener_accessEvents = new WeakMap(), _SharedStorageListener_changeEvents = new WeakMap(), _SharedStorageListener_instances = new WeakSet(), _SharedStorageListener_sharedStorageAdded = function _SharedStorageListener_sharedStorageAdded(event) {
    const storage = event.data;
    __classPrivateFieldGet(this, _SharedStorageListener_storagesWatched, "f").push(storage);
    storage.addEventListener(_application_js__WEBPACK_IMPORTED_MODULE_5__.SharedStorageModel.SharedStorageForOrigin.Events.SharedStorageChanged, __classPrivateFieldGet(this, _SharedStorageListener_instances, "m", _SharedStorageListener_sharedStorageChanged).bind(this, storage), this);
}, _SharedStorageListener_sharedStorageRemoved = function _SharedStorageListener_sharedStorageRemoved(event) {
    const storage = event.data;
    storage.removeEventListener(_application_js__WEBPACK_IMPORTED_MODULE_5__.SharedStorageModel.SharedStorageForOrigin.Events.SharedStorageChanged, __classPrivateFieldGet(this, _SharedStorageListener_instances, "m", _SharedStorageListener_sharedStorageChanged).bind(this, storage), this);
    const index = __classPrivateFieldGet(this, _SharedStorageListener_storagesWatched, "f").indexOf(storage);
    if (index === -1) {
        return;
    }
    __classPrivateFieldSet(this, _SharedStorageListener_storagesWatched, __classPrivateFieldGet(this, _SharedStorageListener_storagesWatched, "f").splice(index, 1), "f");
}, _SharedStorageListener_sharedStorageAccess = function _SharedStorageListener_sharedStorageAccess(event) {
    __classPrivateFieldGet(this, _SharedStorageListener_accessEvents, "f").push(event.data);
}, _SharedStorageListener_sharedStorageChanged = function _SharedStorageListener_sharedStorageChanged(storage, event) {
    if (!__classPrivateFieldGet(this, _SharedStorageListener_changeEvents, "f").has(storage)) {
        __classPrivateFieldGet(this, _SharedStorageListener_changeEvents, "f").set(storage, new Array());
    }
    __classPrivateFieldGet(this, _SharedStorageListener_changeEvents, "f").get(storage)?.push(event.data);
};
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.describeWithMockConnection)('SharedStorageModel', () => {
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
            type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Storage.SharedStorageAccessType.DocumentAppend,
            mainFrameId: _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.MAIN_FRAME_ID,
            ownerOrigin: TEST_ORIGIN_A,
            params: { key: 'key0', value: 'value0' },
        },
        {
            accessTime: 10,
            type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Storage.SharedStorageAccessType.WorkletGet,
            mainFrameId: _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.MAIN_FRAME_ID,
            ownerOrigin: TEST_ORIGIN_A,
            params: { key: 'key0' },
        },
        {
            accessTime: 15,
            type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Storage.SharedStorageAccessType.WorkletLength,
            mainFrameId: _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.MAIN_FRAME_ID,
            ownerOrigin: TEST_ORIGIN_B,
            params: {},
        },
        {
            accessTime: 20,
            type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Storage.SharedStorageAccessType.DocumentClear,
            mainFrameId: _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.MAIN_FRAME_ID,
            ownerOrigin: TEST_ORIGIN_B,
            params: {},
        },
        {
            accessTime: 100,
            type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Storage.SharedStorageAccessType.WorkletSet,
            mainFrameId: _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.MAIN_FRAME_ID,
            ownerOrigin: TEST_ORIGIN_C,
            params: { key: 'key0', value: 'value1', ignoreIfPresent: true },
        },
        {
            accessTime: 150,
            type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Storage.SharedStorageAccessType.WorkletRemainingBudget,
            mainFrameId: _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.MAIN_FRAME_ID,
            ownerOrigin: TEST_ORIGIN_C,
            params: {},
        },
    ];
    beforeEach(async () => {
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)();
        await (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getInitializedResourceTreeModel)(target);
        sharedStorageModel = target.model(_application_js__WEBPACK_IMPORTED_MODULE_5__.SharedStorageModel.SharedStorageModel);
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
        const sharedStorage = new _application_js__WEBPACK_IMPORTED_MODULE_5__.SharedStorageModel.SharedStorageForOrigin(sharedStorageModel, TEST_ORIGIN_A);
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
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getMainFrame)(target), { url: TEST_ORIGIN_A });
        await addedPromise;
        assert.exists(sharedStorageModel.storageForOrigin(TEST_ORIGIN_A));
        assert.strictEqual(1, sharedStorageModel.numStoragesForTesting());
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getMainFrame)(target), { url: TEST_ORIGIN_A });
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
                type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Storage.SharedStorageAccessType.DocumentAppend,
                mainFrameId: _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.MAIN_FRAME_ID,
                params: { key: 'key0', value: 'value0' },
            },
        ]);
        const storageB = sharedStorageModel.storageForOrigin(TEST_ORIGIN_B);
        assert.exists(storageB);
        assert.deepEqual(listener.changeEventsForStorage(storageB), [
            {
                accessTime: 20,
                type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Storage.SharedStorageAccessType.DocumentClear,
                mainFrameId: _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.MAIN_FRAME_ID,
                params: {},
            },
        ]);
        const storageC = sharedStorageModel.storageForOrigin(TEST_ORIGIN_C);
        assert.exists(storageC);
        assert.deepEqual(listener.changeEventsForStorage(storageC), [
            {
                accessTime: 100,
                type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Storage.SharedStorageAccessType.WorkletSet,
                mainFrameId: _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.MAIN_FRAME_ID,
                params: { key: 'key0', value: 'value1', ignoreIfPresent: true },
            },
        ]);
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

}]);