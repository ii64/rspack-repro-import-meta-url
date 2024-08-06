"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_har_Writer_test_js"],{

/***/ "./models/har/Writer.test.js":
/*!***********************************!*\
  !*** ./models/har/Writer.test.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _har_har_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../har/har.js */ "./models/har/har.js");
/* harmony import */ var _text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







const simulateRequestWithStartTime = (startTime) => {
    const requestId = 'r0';
    const request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.NetworkRequest.create(requestId, 'p0.com', _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.DevToolsPath.EmptyUrlString, null, null, null);
    request.setIssueTime(startTime, startTime);
    request.setContentDataProvider(() => Promise.resolve(new _text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_6__.ContentData.ContentData('', false, request.mimeType)));
    return request;
};
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.describeWithLocale)('HARWriter', () => {
    it('can correctly sort exported requests logs', async () => {
        const req1Time = new Date(2020, 0, 3);
        const req2Time = new Date(2020, 1, 3);
        const req3Time = new Date(2020, 2, 3);
        const req1 = simulateRequestWithStartTime(req1Time.getTime() / 1000);
        const req2 = simulateRequestWithStartTime(req2Time.getTime() / 1000);
        const req3 = simulateRequestWithStartTime(req3Time.getTime() / 1000);
        const progressIndicator = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ProgressIndicator.ProgressIndicator();
        const compositeProgress = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Progress.CompositeProgress(progressIndicator);
        const result = await _har_har_js__WEBPACK_IMPORTED_MODULE_5__.Writer.Writer.harStringForRequests([
            req3,
            req2,
            req1,
        ], compositeProgress);
        const resultEntries = JSON.parse(result).log.entries;
        assert.strictEqual(resultEntries[0].startedDateTime, req1Time.toJSON(), 'earlier request should come first');
        assert.strictEqual(resultEntries[1].startedDateTime, req2Time.toJSON(), 'earlier request should come first');
        assert.strictEqual(resultEntries[2].startedDateTime, req3Time.toJSON(), 'earlier request should come first');
    });
});
//# sourceMappingURL=Writer.test.js.map

/***/ })

}]);