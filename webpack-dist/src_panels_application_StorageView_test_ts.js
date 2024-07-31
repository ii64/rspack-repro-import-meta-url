"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_StorageView_test_ts"],{

/***/ "./src/panels/application/StorageView.test.ts":
/*!****************************************************!*\
  !*** ./src/panels/application/StorageView.test.ts ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/DOMHelpers.js */ "./src/testing/DOMHelpers.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../testing/ResourceTreeHelpers.js */ "./src/testing/ResourceTreeHelpers.ts");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/components/render_coordinator/render_coordinator.js */ "./src/ui/components/render_coordinator/render_coordinator.ts");
/* harmony import */ var _application_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./application.js */ "./src/panels/application/application.ts");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_js__WEBPACK_IMPORTED_MODULE_7__]);
_application_js__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_6__.RenderCoordinator.RenderCoordinator.instance();
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.describeWithMockConnection)('StorageView', () => {
    const testKey = 'test-storage-key';
    let target;
    let domStorageModel;
    let storageKeyManager;
    beforeEach(() => {
        const tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)({ type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Type.Tab });
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)({ parentTarget: tabTarget, subtype: 'prerender' });
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)({ parentTarget: tabTarget });
        domStorageModel = target.model(_application_js__WEBPACK_IMPORTED_MODULE_7__.DOMStorageModel.DOMStorageModel);
        domStorageModel?.enable();
        storageKeyManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.StorageKeyManager.StorageKeyManager);
    });
    it('emits correct events on clear', () => {
        const testId = { storageKey: testKey, isLocalStorage: true };
        assert.exists(domStorageModel);
        assert.isEmpty(domStorageModel.storages());
        assert.exists(storageKeyManager);
        storageKeyManager.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.StorageKeyManager.Events.StorageKeyAdded, testKey);
        assert.exists(domStorageModel.storageForId(testId));
        const dispatcherSpy = sinon.spy(domStorageModel, 'dispatchEventToListeners');
        const spyClearDataForStorageKey = sinon.stub(target.storageAgent(), 'invoke_clearDataForStorageKey');
        _application_js__WEBPACK_IMPORTED_MODULE_7__.StorageView.StorageView.clear(target, testKey, null, [_generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Storage.StorageType.All], false);
        // must be called 4 times, twice with DOMStorageRemoved for local and non-local storage and twice with DOMStorageAdded
        assert.isTrue(spyClearDataForStorageKey.calledOnce);
        assert.strictEqual(dispatcherSpy.callCount, 4);
        sinon.assert.calledWith(dispatcherSpy, _application_js__WEBPACK_IMPORTED_MODULE_7__.DOMStorageModel.Events.DOMStorageRemoved);
        sinon.assert.calledWith(dispatcherSpy, _application_js__WEBPACK_IMPORTED_MODULE_7__.DOMStorageModel.Events.DOMStorageAdded);
    });
    it('changes subtitle on MainStorageKeyChanged event', () => {
        assert.exists(domStorageModel);
        assert.exists(storageKeyManager);
        const view = new _application_js__WEBPACK_IMPORTED_MODULE_7__.StorageView.StorageView();
        storageKeyManager.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.StorageKeyManager.Events.MainStorageKeyChanged, { mainStorageKey: testKey });
        const subtitle = view.element.shadowRoot?.querySelector('div.flex-auto')?.shadowRoot?.querySelector('div.report-subtitle');
        assert.strictEqual(subtitle?.textContent, testKey);
    });
    it('shows a warning message when entering a too big custom quota', async () => {
        assert.exists(domStorageModel);
        assert.exists(storageKeyManager);
        const securityOriginManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SecurityOriginManager.SecurityOriginManager);
        assert.exists(securityOriginManager);
        sinon.stub(securityOriginManager, 'mainSecurityOrigin').returns(_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.SECURITY_ORIGIN);
        const view = new _application_js__WEBPACK_IMPORTED_MODULE_7__.StorageView.StorageView();
        const container = view.element.shadowRoot?.querySelector('.clear-storage-header') || null;
        assert.instanceOf(container, HTMLDivElement);
        const customQuotaCheckbox = container.shadowRoot.querySelector('.quota-override-row span').shadowRoot.querySelector('[title="Simulate custom storage quota"]');
        assert.instanceOf(customQuotaCheckbox, HTMLInputElement);
        customQuotaCheckbox.checked = true;
        const errorDiv = container.shadowRoot.querySelector('.quota-override-error');
        assert.instanceOf(errorDiv, HTMLDivElement);
        assert.strictEqual(errorDiv.textContent, '');
        const editor = container.shadowRoot.querySelector('.quota-override-notification-editor');
        assert.instanceOf(editor, HTMLInputElement);
        editor.value = '9999999999999';
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchFocusOutEvent)(editor);
        await coordinator.done();
        assert.strictEqual(errorDiv.textContent, 'Number must be smaller than 9,000,000,000,000');
    });
    it('also clears cookies on clear', () => {
        const cookieModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CookieModel.CookieModel);
        const clearByOriginSpy = sinon.spy(target.storageAgent(), 'invoke_clearDataForOrigin');
        const cookieClearSpy = sinon.spy(cookieModel, 'clear');
        _application_js__WEBPACK_IMPORTED_MODULE_7__.StorageView.StorageView.clear(target, testKey, _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.SECURITY_ORIGIN, [_generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Storage.StorageType.All], false);
        assert.isTrue(clearByOriginSpy.calledOnceWithExactly({ origin: _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.SECURITY_ORIGIN, storageTypes: 'cookies' }));
        assert.isTrue(cookieClearSpy.calledOnceWithExactly(undefined, _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.SECURITY_ORIGIN));
    });
    it('clears cache on clear', async () => {
        const cacheStorageModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ServiceWorkerCacheModel.ServiceWorkerCacheModel);
        assert.exists(cacheStorageModel);
        const storageBucketModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.StorageBucketsModel.StorageBucketsModel);
        assert.exists(storageBucketModel);
        const testStorageBucket = {
            storageKey: testKey,
            name: 'inbox',
        };
        const testStorageBucketInfo = {
            bucket: testStorageBucket,
            id: '0',
            expiration: 0,
            quota: 0,
            persistent: false,
            durability: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Storage.StorageBucketsDurability.Strict,
        };
        let caches = [
            {
                cacheId: 'id1',
                securityOrigin: '',
                storageKey: testStorageBucket.storageKey,
                storageBucket: testStorageBucket,
                cacheName: 'test-cache-1',
            },
            {
                cacheId: 'id2',
                securityOrigin: '',
                storageKey: testStorageBucket.storageKey,
                storageBucket: testStorageBucket,
                cacheName: 'test-cache-2',
            },
        ];
        sinon.stub(target.cacheStorageAgent(), 'invoke_requestCacheNames').resolves({ caches, getError: () => undefined });
        cacheStorageModel.enable();
        const cacheAddedPromise = new Promise(resolve => {
            cacheStorageModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ServiceWorkerCacheModel.Events.CacheAdded, () => {
                resolve();
            });
        });
        storageBucketModel?.storageBucketCreatedOrUpdated({ bucketInfo: testStorageBucketInfo });
        await cacheAddedPromise;
        caches = [];
        _application_js__WEBPACK_IMPORTED_MODULE_7__.StorageView.StorageView.clear(target, testKey, '', [_generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Storage.StorageType.Cache_storage], false);
        assert.isEmpty(cacheStorageModel.caches());
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

}]);