"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_timeline_FreshRecording_test_js"],{

/***/ "./panels/timeline/FreshRecording.test.js":
/*!************************************************!*\
  !*** ./panels/timeline/FreshRecording.test.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */ var _timeline_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timeline.js */ "./panels/timeline/timeline.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


describe('FreshRecordingTracker', () => {
    it('knows that a recording has been registered as fresh', async function () {
        const instance = _timeline_js__WEBPACK_IMPORTED_MODULE_1__.FreshRecording.Tracker.instance({ forceNew: true });
        const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.traceEngine(this, 'web-dev.json.gz');
        instance.registerFreshRecording(traceData);
        assert.isTrue(instance.recordingIsFresh(traceData));
    });
    it('knows that un-registered recordings are not fresh', async function () {
        const instance = _timeline_js__WEBPACK_IMPORTED_MODULE_1__.FreshRecording.Tracker.instance({ forceNew: true });
        const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.traceEngine(this, 'web-dev.json.gz');
        assert.isFalse(instance.recordingIsFresh(traceData));
    });
});
//# sourceMappingURL=FreshRecording.test.js.map

/***/ })

}]);