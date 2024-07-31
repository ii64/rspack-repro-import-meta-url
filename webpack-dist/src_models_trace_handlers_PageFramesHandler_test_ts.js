"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_models_trace_handlers_PageFramesHandler_test_ts"],{

/***/ "./src/models/trace/handlers/PageFramesHandler.test.ts":
/*!*************************************************************!*\
  !*** ./src/models/trace/handlers/PageFramesHandler.test.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./src/testing/TraceLoader.ts");
/* harmony import */ var _trace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../trace.js */ "./src/models/trace/trace.ts");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


describe('PageFramesHandler', () => {
    it('returns frames and their data', async function () {
        const events = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'web-dev-with-commit.json.gz');
        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.PageFrames.reset();
        for (const event of events) {
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.PageFrames.handleEvent(event);
        }
        const data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.PageFrames.data();
        const frames = Array.from(data.frames.entries());
        assert.deepEqual(frames, [
            [
                '25D2F12F1818C70B5BD4325CC9ACD8FF',
                {
                    'frame': '25D2F12F1818C70B5BD4325CC9ACD8FF',
                    'name': '',
                    'processId': _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.ProcessID(90812),
                    'url': 'https://web.dev/',
                },
            ],
            [
                'DD911DEB03F2AAB573DE9CA330486E80',
                {
                    'frame': 'DD911DEB03F2AAB573DE9CA330486E80',
                    'name': '',
                    'parent': '25D2F12F1818C70B5BD4325CC9ACD8FF',
                    'processId': _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.ProcessID(90824),
                    'url': 'https://shared-storage-demo-content-producer.web.app/paa/scripts/private-aggregation-test.html',
                },
            ],
        ]);
    });
});


/***/ })

}]);