"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_testing_MockNetworkLog_ts"],{

/***/ "./src/testing/MockNetworkLog.ts":
/*!***************************************!*\
  !*** ./src/testing/MockNetworkLog.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MockNetworkLog: () => (/* binding */ MockNetworkLog),
/* harmony export */   createNetworkRequest: () => (/* binding */ createNetworkRequest)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/logs/logs.js */ "./src/models/logs/logs.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


function createNetworkRequest(requestId) {
    return {
        requestId() {
            return requestId;
        },
        backendRequestId() {
            return requestId;
        },
    };
}
class MockNetworkLog extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper {
    constructor(mockRequests) {
        super();
        Object.defineProperty(this, "mockRequests", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.mockRequests = mockRequests;
    }
    requestsForId(requestId) {
        return this.mockRequests.filter(x => x.requestId() === requestId);
    }
    addRequest(mockRequest) {
        this.mockRequests.push(mockRequest);
        this.dispatchEventToListeners(_models_logs_logs_js__WEBPACK_IMPORTED_MODULE_1__.NetworkLog.Events.RequestAdded, { request: mockRequest });
    }
}


/***/ })

}]);