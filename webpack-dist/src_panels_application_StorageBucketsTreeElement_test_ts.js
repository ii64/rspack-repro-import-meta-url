"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_StorageBucketsTreeElement_test_ts"],{

/***/ "./src/panels/application/StorageBucketsTreeElement.test.ts":
/*!******************************************************************!*\
  !*** ./src/panels/application/StorageBucketsTreeElement.test.ts ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/root/root.js */ "./src/core/root/root.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _application_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./application.js */ "./src/panels/application/application.ts");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_js__WEBPACK_IMPORTED_MODULE_6__]);
_application_js__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.describeWithMockConnection)('StorageBucketsTreeElement', function () {
    let target;
    let storageKeyManager;
    let storageBucketsModel;
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
            durability: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Storage.StorageBucketsDurability.Strict,
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
            durability: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Storage.StorageBucketsDurability.Strict,
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
            durability: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Storage.StorageBucketsDurability.Strict,
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
            durability: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Storage.StorageBucketsDurability.Strict,
        },
    ];
    const getBucketsForStorageKeys = (...storageKeys) => {
        return STORAGE_BUCKET_INFOS.filter(({ bucket }) => storageKeys.includes(bucket.storageKey));
    };
    const getNonDefaultBuckets = () => {
        return STORAGE_BUCKET_INFOS.filter(({ bucket }) => bucket.name !== undefined);
    };
    const setStorageBucketTrackingStub = ({ storageKey }) => {
        assert.exists(storageBucketsModel);
        for (const bucketInfo of getBucketsForStorageKeys(storageKey)) {
            storageBucketsModel.storageBucketCreatedOrUpdated({ bucketInfo });
        }
        return Promise.resolve({
            getError: () => undefined,
        });
    };
    beforeEach(async () => {
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.stubNoopSettings)();
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ChildTargetManager.ChildTargetManager.install();
        const tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)({ type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Target.Type.Tab });
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)({ parentTarget: tabTarget, subtype: 'prerender' });
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)({ parentTarget: tabTarget });
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.experiments.register(_core_root_root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.ExperimentName.PRELOADING_STATUS_PANEL, '', false);
        storageKeyManager =
            target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.StorageKeyManager.StorageKeyManager);
        storageBucketsModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.StorageBucketsModel.StorageBucketsModel);
    });
    it('adds bucket tree elements on non default buckets added', async () => {
        assert.exists(storageBucketsModel);
        sinon.stub(storageBucketsModel.storageAgent, 'invoke_setStorageBucketTracking')
            .callsFake(setStorageBucketTrackingStub);
        storageKeyManager.updateStorageKeys(new Set(STORAGE_KEYS));
        storageBucketsModel.enable();
        const panel = _application_js__WEBPACK_IMPORTED_MODULE_6__.ResourcesPanel.ResourcesPanel.instance({ forceNew: true });
        panel.markAsRoot();
        panel.show(document.body);
        const parentTreeElement = new _application_js__WEBPACK_IMPORTED_MODULE_6__.StorageBucketsTreeElement.StorageBucketsTreeParentElement(panel);
        const appendChildSpy = sinon.spy(parentTreeElement, 'appendChild');
        parentTreeElement.initialize();
        assert.strictEqual(appendChildSpy.callCount, getNonDefaultBuckets().length);
        panel.detach();
    });
    it('shows view on select', async () => {
        assert.exists(storageBucketsModel);
        const panel = _application_js__WEBPACK_IMPORTED_MODULE_6__.ResourcesPanel.ResourcesPanel.instance({ forceNew: true });
        panel.markAsRoot();
        panel.show(document.body);
        const treeElement = new _application_js__WEBPACK_IMPORTED_MODULE_6__.StorageBucketsTreeElement.StorageBucketsTreeElement(panel, storageBucketsModel, STORAGE_BUCKET_INFOS[0]);
        const showViewSpy = sinon.spy(treeElement, 'showView');
        document.body.appendChild(treeElement.listItemNode);
        treeElement.treeOutline = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.TreeOutline.TreeOutlineInShadow();
        treeElement.selectable = true;
        treeElement.select();
        assert.isTrue(showViewSpy.calledOnce);
        panel.detach();
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

}]);