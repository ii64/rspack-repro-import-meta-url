"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_BackgroundServiceView_test_ts"],{

/***/ "./src/panels/application/BackgroundServiceView.test.ts":
/*!**************************************************************!*\
  !*** ./src/panels/application/BackgroundServiceView.test.ts ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _application_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./application.js */ "./src/panels/application/application.ts");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_js__WEBPACK_IMPORTED_MODULE_5__]);
_application_js__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.describeWithMockConnection)('BackgroundServiceView', () => {
    const testKey = 'test-storage-key';
    const serviceName = _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.BackgroundService.ServiceName.BackgroundFetch;
    let target;
    let backgroundServiceModel;
    let manager;
    let view;
    beforeEach(() => {
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)();
        backgroundServiceModel = target.model(_application_js__WEBPACK_IMPORTED_MODULE_5__.BackgroundServiceModel.BackgroundServiceModel);
        manager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.StorageKeyManager.StorageKeyManager);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ActionRegistration.maybeRemoveActionExtension('background-service.toggle-recording');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ActionRegistration.registerActionExtension({
            actionId: 'background-service.toggle-recording',
            category: _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ActionRegistration.ActionCategory.BACKGROUND_SERVICES,
            title: () => 'mock',
            toggleable: true,
        });
        sinon.stub(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ShortcutRegistry.ShortcutRegistry, 'instance').returns({
            shortcutTitleForAction: () => { },
            shortcutsForAction: () => [new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.KeyboardShortcut.KeyboardShortcut([{ key: 0, name: '' }], '', _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.KeyboardShortcut.Type.DefaultShortcut)],
        });
        assert.exists(backgroundServiceModel);
        view = new _application_js__WEBPACK_IMPORTED_MODULE_5__.BackgroundServiceView.BackgroundServiceView(serviceName, backgroundServiceModel);
    });
    afterEach(() => {
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ActionRegistration.maybeRemoveActionExtension('background-service.toggle-recording');
    });
    it('updates event list when main storage key changes', () => {
        assert.exists(backgroundServiceModel);
        assert.exists(manager);
        backgroundServiceModel.backgroundServiceEventReceived({
            backgroundServiceEvent: {
                timestamp: 1556889085, // 2019-05-03 14:11:25.000.
                origin: '',
                storageKey: testKey,
                serviceWorkerRegistrationId: 42, // invalid.
                service: serviceName,
                eventName: 'Event1',
                instanceId: 'Instance1',
                eventMetadata: [],
            },
        });
        manager.updateStorageKeys(new Set([testKey]));
        manager.setMainStorageKey(testKey);
        const dataRow = view.getDataGrid().dataTableBody.getElementsByClassName('data-grid-data-grid-node')[0];
        const expectedData = ['Event1', testKey, 'Instance1'];
        const actualData = [
            dataRow.getElementsByClassName('event-name-column')[0].textContent,
            dataRow.getElementsByClassName('storage-key-column')[0].textContent,
            dataRow.getElementsByClassName('instance-id-column')[0].textContent,
        ];
        assert.deepEqual(actualData, expectedData);
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

}]);