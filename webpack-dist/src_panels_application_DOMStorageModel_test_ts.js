"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_DOMStorageModel_test_ts"],{

/***/ "./src/panels/application/DOMStorageModel.test.ts":
/*!********************************************************!*\
  !*** ./src/panels/application/DOMStorageModel.test.ts ***!
  \********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _application_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./application.js */ "./src/panels/application/application.ts");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_js__WEBPACK_IMPORTED_MODULE_3__]);
_application_js__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('DOMStorageModel', () => {
    let domStorageModel;
    let domStorage;
    let target;
    const initKey = 'storageKey1';
    beforeEach(() => {
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
        domStorageModel = new _application_js__WEBPACK_IMPORTED_MODULE_3__.DOMStorageModel.DOMStorageModel(target);
        domStorage = new _application_js__WEBPACK_IMPORTED_MODULE_3__.DOMStorageModel.DOMStorage(domStorageModel, initKey, true);
    });
    it('DOMStorage is instantiated correctly', () => {
        assert.strictEqual(domStorage.storageKey, initKey);
        assert.deepStrictEqual(domStorage.id, { storageKey: initKey, isLocalStorage: true });
    });
    it('StorageKey events trigger addition/removal of DOMStorage', () => {
        const testKey = 'storageKey';
        const testId = { storageKey: testKey, isLocalStorage: true };
        domStorageModel.enable();
        const manager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.StorageKeyManager.StorageKeyManager);
        assert.exists(manager);
        assert.isEmpty(domStorageModel.storages());
        manager.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.StorageKeyManager.Events.StorageKeyAdded, testKey);
        assert.exists(domStorageModel.storageForId(testId));
        assert.exists(domStorageModel.storageForId(testId));
        manager.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.StorageKeyManager.Events.StorageKeyRemoved, testKey);
        assert.isUndefined(domStorageModel.storageForId(testId));
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

}]);