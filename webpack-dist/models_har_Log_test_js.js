"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_har_Log_test_js"],{

/***/ "./models/har/Log.test.js":
/*!********************************!*\
  !*** ./models/har/Log.test.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _har_har_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../har/har.js */ "./models/har/har.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



describe('HAR.Log', () => {
    it('blocked time when no response received is returned in milliseconds (crbug.com/1145177)', async () => {
        const requestId = 'r0';
        const request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkRequest.NetworkRequest.create(requestId, 'p0.com', _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.DevToolsPath.EmptyUrlString, null, null, null);
        const issueTime = new Date(2020, 1, 3).getTime() / 1000;
        request.setIssueTime(issueTime, issueTime);
        request.endTime = issueTime + 5;
        const entry = await _har_har_js__WEBPACK_IMPORTED_MODULE_2__.Log.Entry.build(request);
        assert.strictEqual(entry.timings.blocked, 5000, 'HARLog entry\'s blocked time is incorrect');
    });
    it('_initiator.requestId is exported', async () => {
        const requestId = 'r0';
        const request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkRequest.NetworkRequest.create(requestId, 'p0.com', _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.DevToolsPath.EmptyUrlString, null, null, { requestId, type: "script" /* Protocol.Network.InitiatorType.Script */ });
        const entry = await _har_har_js__WEBPACK_IMPORTED_MODULE_2__.Log.Entry.build(request);
        assert.strictEqual(entry._initiator?.requestId, requestId);
    });
    it('Exports Service worker info', async () => {
        const requestId = 'r0';
        const request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkRequest.NetworkRequest.create(requestId, 'p0.com', _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.DevToolsPath.EmptyUrlString, null, null, { requestId, type: "script" /* Protocol.Network.InitiatorType.Script */ });
        const cacheName = 'v1';
        request.fetchedViaServiceWorker = true;
        request.setResponseCacheStorageCacheName(cacheName);
        request.setServiceWorkerResponseSource("cache-storage" /* Protocol.Network.ServiceWorkerResponseSource.CacheStorage */);
        const timingInfo = {
            requestTime: 500,
            proxyStart: 0,
            proxyEnd: 0,
            dnsStart: 0,
            dnsEnd: 0,
            connectStart: 0,
            connectEnd: 0,
            sslStart: 0,
            sslEnd: 0,
            workerStart: 500,
            workerReady: 1000,
            workerFetchStart: 1050,
            workerRespondWithSettled: 3000,
            sendStart: 0,
            sendEnd: 0,
            pushStart: 0,
            pushEnd: 0,
            receiveHeadersStart: 0,
            receiveHeadersEnd: 0,
        };
        request.timing = timingInfo;
        const entry = await _har_har_js__WEBPACK_IMPORTED_MODULE_2__.Log.Entry.build(request);
        assert.strictEqual(entry.response._fetchedViaServiceWorker, true);
        assert.strictEqual(entry.response._responseCacheStorageCacheName, cacheName);
        assert.strictEqual(entry.response._serviceWorkerResponseSource, "cache-storage" /* Protocol.Network.ServiceWorkerResponseSource.CacheStorage */);
        assert.strictEqual(entry.timings._workerStart, timingInfo.workerStart);
        assert.strictEqual(entry.timings._workerReady, timingInfo.workerReady);
        assert.strictEqual(entry.timings._workerFetchStart, timingInfo.workerFetchStart);
        assert.strictEqual(entry.timings._workerRespondWithSettled, timingInfo.workerRespondWithSettled);
    });
});
//# sourceMappingURL=Log.test.js.map

/***/ })

}]);