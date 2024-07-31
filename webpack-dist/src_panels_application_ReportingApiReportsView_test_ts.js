"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_ReportingApiReportsView_test_ts"],{

/***/ "./src/panels/application/ReportingApiReportsView.test.ts":
/*!****************************************************************!*\
  !*** ./src/panels/application/ReportingApiReportsView.test.ts ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/DOMHelpers.js */ "./src/testing/DOMHelpers.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/components/data_grid/data_grid.js */ "./src/ui/components/data_grid/data_grid.ts");
/* harmony import */ var _application_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./application.js */ "./src/panels/application/application.ts");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_js__WEBPACK_IMPORTED_MODULE_6__]);
_application_js__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







var View = _application_js__WEBPACK_IMPORTED_MODULE_6__.ReportingApiReportsView;
const reports = [
    {
        id: 'some_id',
        initiatorUrl: 'https://example.com/script.js',
        destination: 'main-endpoint',
        type: 'deprecation',
        timestamp: 1632747042.12696,
        depth: 1,
        completedAttempts: 0,
        body: {
            columnNumber: 8,
            id: 'PrefixedStorageInfo',
            lineNumber: 15,
            message: '\'window.webkitStorageInfo\' is deprecated. Please use \'navigator.webkitTemporaryStorage\' or \'navigator.webkitPersistentStorage\' instead.',
            sourceFile: 'https://example.com/script.js',
        },
        status: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Network.ReportStatus.Queued,
    },
    {
        id: 'another_id',
        initiatorUrl: 'https://www.google.com/script.js',
        destination: 'default',
        type: 'csp-violation',
        timestamp: 1632747045.39856,
        depth: 1,
        completedAttempts: 0,
        body: {
            blockedURL: 'https://www.google.com/script.js',
            disposition: 'enforce',
            documentURL: 'https://www.google.com/document',
            effectiveDirective: 'script-src-elem',
            originalPolicy: 'script-src \'self\'; object-src \'none\'; report-to main-endpoint;',
            statusCode: 200,
        },
        status: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Network.ReportStatus.Queued,
    },
];
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.describeWithMockConnection)('ReportingApiReportsView', () => {
    let networkManager;
    beforeEach(() => {
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)();
        networkManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.NetworkManager.NetworkManager);
    });
    it('listens to and stores added reports', () => {
        if (!networkManager) {
            throw new Error('No networkManager');
        }
        const view = new View.ReportingApiReportsView(networkManager);
        networkManager.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.NetworkManager.Events.ReportingApiReportAdded, reports[0]);
        networkManager.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.NetworkManager.Events.ReportingApiReportAdded, reports[1]);
        assert.deepEqual(view.getReports(), reports);
    });
    it('can handle report updates', () => {
        if (!networkManager) {
            throw new Error('No networkManager');
        }
        const view = new View.ReportingApiReportsView(networkManager);
        const successReport = {
            id: 'some_id',
            initiatorUrl: 'https://example.com/script.js',
            destination: 'main-endpoint',
            type: 'deprecation',
            timestamp: 1632747042.12696,
            depth: 1,
            completedAttempts: 1,
            body: {
                columnNumber: 8,
                id: 'PrefixedStorageInfo',
                lineNumber: 15,
                message: '\'window.webkitStorageInfo\' is deprecated. Please use \'navigator.webkitTemporaryStorage\' or \'navigator.webkitPersistentStorage\' instead.',
                sourceFile: 'https://example.com/script.js',
            },
            status: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Network.ReportStatus.Success,
        };
        networkManager.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.NetworkManager.Events.ReportingApiReportAdded, reports[0]);
        networkManager.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.NetworkManager.Events.ReportingApiReportUpdated, successReport);
        assert.deepEqual(view.getReports(), [successReport]);
    });
    it('updates sidebarWidget upon receiving cellFocusedEvent', async () => {
        if (!networkManager) {
            throw new Error('No networkManager');
        }
        const view = new View.ReportingApiReportsView(networkManager);
        networkManager.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.NetworkManager.Events.ReportingApiReportAdded, reports[0]);
        networkManager.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.NetworkManager.Events.ReportingApiReportAdded, reports[1]);
        const grid = view.getReportsGrid();
        const cells = [
            {
                columnId: 'id',
                value: 'some_id',
            },
            {
                columnId: 'status',
                value: 'Queued',
            },
        ];
        const stub = sinon.stub(view, 'setSidebarWidget');
        assert.isTrue(stub.notCalled);
        grid.dispatchEvent(new _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGridEvents.BodyCellFocusedEvent({ columnId: 'status', value: 'Queued' }, { cells }));
        await (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.raf)();
        assert.isTrue(stub.calledOnce);
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

}]);