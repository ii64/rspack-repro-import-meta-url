"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_models_trace_handlers_LargestImagePaintHandler_test_ts"],{

/***/ "./src/models/trace/handlers/LargestImagePaintHandler.test.ts":
/*!********************************************************************!*\
  !*** ./src/models/trace/handlers/LargestImagePaintHandler.test.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./src/testing/TraceLoader.ts");
/* harmony import */ var _trace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../trace.js */ "./src/models/trace/trace.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


describe('LargestImagePaintHandler', function () {
    beforeEach(async () => {
        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.LargestImagePaint.reset();
    });
    it('creates a map of DOM Node IDs to image candidates', async function () {
        const events = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'lcp-images.json.gz');
        for (const event of events) {
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.LargestImagePaint.handleEvent(event);
        }
        const data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.LargestImagePaint.data();
        assert.strictEqual(data.size, 1);
        const imageForLCP = data.get(10);
        assert.exists(imageForLCP);
        assert.strictEqual(imageForLCP?.args.data?.DOMNodeId, 10);
        assert.strictEqual(imageForLCP?.args.data?.imageUrl, 'https://via.placeholder.com/2000.jpg');
    });
});


/***/ })

}]);