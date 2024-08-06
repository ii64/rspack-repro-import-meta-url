"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_logs_RequestResolver_test_js"],{

/***/ "./models/logs/RequestResolver.test.js":
/*!*********************************************!*\
  !*** ./models/logs/RequestResolver.test.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_MockNetworkLog_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/MockNetworkLog.js */ "./testing/MockNetworkLog.js");
/* harmony import */ var _logs_logs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logs/logs.js */ "./models/logs/logs.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


describe('RequestResolver', () => {
    const requestId1 = 'foo';
    describe('tryGet', () => {
        it('should resolve an existing request', () => {
            const mockRequest = (0,_testing_MockNetworkLog_js__WEBPACK_IMPORTED_MODULE_0__.createNetworkRequest)(requestId1);
            const networkLog = new _testing_MockNetworkLog_js__WEBPACK_IMPORTED_MODULE_0__.MockNetworkLog([mockRequest]);
            const requestResolver = new _logs_logs_js__WEBPACK_IMPORTED_MODULE_1__.RequestResolver.RequestResolver(networkLog);
            const request = requestResolver.tryGet(requestId1, () => {
                throw new Error('This should not get called');
            });
            assert.isFalse(networkLog.hasEventListeners(_logs_logs_js__WEBPACK_IMPORTED_MODULE_1__.NetworkLog.Events.RequestAdded));
            assert.strictEqual(request, mockRequest);
        });
        it('should not resolve an unknown request', () => {
            const networkLog = new _testing_MockNetworkLog_js__WEBPACK_IMPORTED_MODULE_0__.MockNetworkLog([]);
            const requestResolver = new _logs_logs_js__WEBPACK_IMPORTED_MODULE_1__.RequestResolver.RequestResolver(networkLog);
            const request = requestResolver.tryGet(requestId1, () => {
                throw new Error('This should not get called');
            });
            assert.isTrue(networkLog.hasEventListeners(_logs_logs_js__WEBPACK_IMPORTED_MODULE_1__.NetworkLog.Events.RequestAdded));
            assert.strictEqual(request, null);
            requestResolver.clear();
        });
        it('should resolve a previously unknown request when it becomes available', async () => {
            const mockNetworkLog = new _testing_MockNetworkLog_js__WEBPACK_IMPORTED_MODULE_0__.MockNetworkLog([]);
            const networkLog = mockNetworkLog;
            const requestResolver = new _logs_logs_js__WEBPACK_IMPORTED_MODULE_1__.RequestResolver.RequestResolver(networkLog);
            const waitForCall = new Promise(resolve => {
                const request = requestResolver.tryGet(requestId1, resolve);
                assert.strictEqual(request, null);
            });
            assert.isTrue(networkLog.hasEventListeners(_logs_logs_js__WEBPACK_IMPORTED_MODULE_1__.NetworkLog.Events.RequestAdded));
            const mockRequest = (0,_testing_MockNetworkLog_js__WEBPACK_IMPORTED_MODULE_0__.createNetworkRequest)(requestId1);
            mockNetworkLog.addRequest(mockRequest);
            const request = await waitForCall;
            assert.isFalse(networkLog.hasEventListeners(_logs_logs_js__WEBPACK_IMPORTED_MODULE_1__.NetworkLog.Events.RequestAdded));
            assert.strictEqual(request, mockRequest);
            requestResolver.clear();
        });
    });
    describe('waitFor', () => {
        it('should resolve an existing request', async () => {
            const mockRequest = (0,_testing_MockNetworkLog_js__WEBPACK_IMPORTED_MODULE_0__.createNetworkRequest)(requestId1);
            const networkLog = new _testing_MockNetworkLog_js__WEBPACK_IMPORTED_MODULE_0__.MockNetworkLog([mockRequest]);
            const requestResolver = new _logs_logs_js__WEBPACK_IMPORTED_MODULE_1__.RequestResolver.RequestResolver(networkLog);
            const request = await requestResolver.waitFor(requestId1);
            assert.isFalse(networkLog.hasEventListeners(_logs_logs_js__WEBPACK_IMPORTED_MODULE_1__.NetworkLog.Events.RequestAdded));
            assert.strictEqual(request, mockRequest);
        });
        it('should reject the promise after `clear` has been called', async () => {
            const networkLog = new _testing_MockNetworkLog_js__WEBPACK_IMPORTED_MODULE_0__.MockNetworkLog([]);
            const requestResolver = new _logs_logs_js__WEBPACK_IMPORTED_MODULE_1__.RequestResolver.RequestResolver(networkLog);
            const request = requestResolver.waitFor(requestId1);
            assert.isTrue(networkLog.hasEventListeners(_logs_logs_js__WEBPACK_IMPORTED_MODULE_1__.NetworkLog.Events.RequestAdded));
            requestResolver.clear();
            assert.isFalse(networkLog.hasEventListeners(_logs_logs_js__WEBPACK_IMPORTED_MODULE_1__.NetworkLog.Events.RequestAdded));
            try {
                await request;
            }
            catch (e) {
                return;
            }
            assert.fail('Expected `await request` to throw.');
        });
        it('should resolve a previously unknown request when it becomes available', async () => {
            const mockNetworkLog = new _testing_MockNetworkLog_js__WEBPACK_IMPORTED_MODULE_0__.MockNetworkLog([]);
            const networkLog = mockNetworkLog;
            const requestResolver = new _logs_logs_js__WEBPACK_IMPORTED_MODULE_1__.RequestResolver.RequestResolver(networkLog);
            const requestPromise = requestResolver.waitFor(requestId1);
            assert.isTrue(networkLog.hasEventListeners(_logs_logs_js__WEBPACK_IMPORTED_MODULE_1__.NetworkLog.Events.RequestAdded));
            const mockRequest = (0,_testing_MockNetworkLog_js__WEBPACK_IMPORTED_MODULE_0__.createNetworkRequest)(requestId1);
            mockNetworkLog.addRequest(mockRequest);
            const request = await requestPromise;
            assert.isFalse(networkLog.hasEventListeners(_logs_logs_js__WEBPACK_IMPORTED_MODULE_1__.NetworkLog.Events.RequestAdded));
            assert.strictEqual(request, mockRequest);
        });
    });
});
//# sourceMappingURL=RequestResolver.test.js.map

/***/ }),

/***/ "./testing/MockNetworkLog.js":
/*!***********************************!*\
  !*** ./testing/MockNetworkLog.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MockNetworkLog: () => (/* binding */ MockNetworkLog),
/* harmony export */   createNetworkRequest: () => (/* binding */ createNetworkRequest)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/logs/logs.js */ "./models/logs/logs.js");
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
    mockRequests;
    constructor(mockRequests) {
        super();
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
//# sourceMappingURL=MockNetworkLog.js.map

/***/ })

}]);