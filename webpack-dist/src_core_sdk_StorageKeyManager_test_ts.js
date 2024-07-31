"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_core_sdk_StorageKeyManager_test_ts"],{

/***/ "./src/core/sdk/StorageKeyManager.test.ts":
/*!************************************************!*\
  !*** ./src/core/sdk/StorageKeyManager.test.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sdk.js */ "./src/core/sdk/sdk.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.describeWithMockConnection)('StorageKeyManager', () => {
    let manager;
    beforeEach(() => {
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
        manager = new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.StorageKeyManager.StorageKeyManager(target);
    });
    it('updates storage keys and emits events correctly', () => {
        let eventFired = false;
        const keys = ['storagekey1', 'storagekey2'];
        assert.isEmpty(manager.storageKeys());
        manager.addEventListener(_sdk_js__WEBPACK_IMPORTED_MODULE_2__.StorageKeyManager.Events.StorageKeyAdded, () => {
            eventFired = true;
        });
        manager.updateStorageKeys(new Set(keys));
        assert.isTrue(eventFired);
        assert.deepEqual(manager.storageKeys(), keys);
        eventFired = false;
        manager.addEventListener(_sdk_js__WEBPACK_IMPORTED_MODULE_2__.StorageKeyManager.Events.StorageKeyRemoved, () => {
            eventFired = true;
        });
        manager.updateStorageKeys(new Set());
        assert.isTrue(eventFired);
        assert.isEmpty(manager.storageKeys());
    });
    it('updates main storage key and emits event correctly', () => {
        const mainKey = 'storagekey1';
        let eventFired = false;
        assert.isEmpty(manager.mainStorageKey());
        manager.addEventListener(_sdk_js__WEBPACK_IMPORTED_MODULE_2__.StorageKeyManager.Events.MainStorageKeyChanged, () => {
            eventFired = true;
        });
        manager.setMainStorageKey(mainKey);
        assert.isTrue(eventFired);
        assert.strictEqual(manager.mainStorageKey(), mainKey);
    });
});
describe('parseStorageKey', () => {
    it('parses first-party key', () => {
        const storageKey = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.StorageKeyManager.parseStorageKey('https://example.com/');
        assert.deepEqual(storageKey.origin, 'https://example.com');
        assert.deepEqual([...storageKey.components], []);
    });
    it('parses ancestor chain bit', () => {
        const storageKey = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.StorageKeyManager.parseStorageKey('https://example.com/^31');
        assert.strictEqual(storageKey.origin, 'https://example.com');
        assert.deepEqual([...storageKey.components], [[_sdk_js__WEBPACK_IMPORTED_MODULE_2__.StorageKeyManager.StorageKeyComponent.ANCESTOR_CHAIN_BIT, '1']]);
    });
    it('parses top-level site', () => {
        const storageKey = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.StorageKeyManager.parseStorageKey('https://test.example/^0https://example.com');
        assert.strictEqual(storageKey.origin, 'https://test.example');
        assert.deepEqual([...storageKey.components], [[_sdk_js__WEBPACK_IMPORTED_MODULE_2__.StorageKeyManager.StorageKeyComponent.TOP_LEVEL_SITE, 'https://example.com']]);
    });
    it('parses opaque top-level site', () => {
        const storageKey = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.StorageKeyManager.parseStorageKey('https://sub.example.com/^43735928559^5110521^6https://sub.notexample.com');
        assert.strictEqual(storageKey.origin, 'https://sub.example.com');
        assert.deepEqual([...storageKey.components], [
            [_sdk_js__WEBPACK_IMPORTED_MODULE_2__.StorageKeyManager.StorageKeyComponent.TOP_LEVEL_SITE_OPAQUE_NONCE_HIGH, '3735928559'],
            [_sdk_js__WEBPACK_IMPORTED_MODULE_2__.StorageKeyManager.StorageKeyComponent.TOP_LEVEL_SITE_OPAQUE_NONCE_LOW, '110521'],
            [_sdk_js__WEBPACK_IMPORTED_MODULE_2__.StorageKeyManager.StorageKeyComponent.TOP_LEVEL_SITE_OPAQUE_NONCE_PRECURSOR, 'https://sub.notexample.com'],
        ]);
    });
    it('parses nonce', () => {
        const storageKey = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.StorageKeyManager.parseStorageKey('https://example.com/^112345^267890');
        assert.strictEqual(storageKey.origin, 'https://example.com');
        assert.deepEqual([...storageKey.components], [
            [_sdk_js__WEBPACK_IMPORTED_MODULE_2__.StorageKeyManager.StorageKeyComponent.NONCE_HIGH, '12345'],
            [_sdk_js__WEBPACK_IMPORTED_MODULE_2__.StorageKeyManager.StorageKeyComponent.NONCE_LOW, '67890'],
        ]);
    });
});


/***/ })

}]);