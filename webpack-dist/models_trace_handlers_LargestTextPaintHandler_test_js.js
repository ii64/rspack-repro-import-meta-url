"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_trace_handlers_LargestTextPaintHandler_test_js"],{

/***/ "./models/trace/handlers/LargestTextPaintHandler.test.js":
/*!***************************************************************!*\
  !*** ./models/trace/handlers/LargestTextPaintHandler.test.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */ var _trace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../trace.js */ "./models/trace/trace.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


describe('LargestTextPaintHandler', function () {
    beforeEach(() => {
        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.LargestTextPaint.reset();
    });
    it('creates a map of DOM Node IDs to Text candidates', async function () {
        const events = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'lcp-web-font.json.gz');
        for (const event of events) {
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.LargestTextPaint.handleEvent(event);
        }
        const data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.LargestTextPaint.data();
        assert.strictEqual(data.size, 1);
        const textCandidate = data.get(8);
        assert.exists(textCandidate);
        assert.strictEqual(textCandidate?.args.data?.DOMNodeId, 8);
    });
});
//# sourceMappingURL=LargestTextPaintHandler.test.js.map

/***/ })

}]);