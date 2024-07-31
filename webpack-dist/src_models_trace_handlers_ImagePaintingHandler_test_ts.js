"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_models_trace_handlers_ImagePaintingHandler_test_ts"],{

/***/ "./src/models/trace/handlers/ImagePaintingHandler.test.ts":
/*!****************************************************************!*\
  !*** ./src/models/trace/handlers/ImagePaintingHandler.test.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./src/testing/TraceLoader.ts");
/* harmony import */ var _trace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../trace.js */ "./src/models/trace/trace.ts");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


describe('ImagePaintingHandler', () => {
    beforeEach(() => {
        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.ImagePainting.reset();
    });
    it('can pair DrawLazyPixelRef events to PaintImages by their reference number', async function () {
        const events = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'web-dev.json.gz');
        for (const event of events) {
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.ImagePainting.handleEvent(event);
        }
        const drawLazyPixelRefEvent = events.find(_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isTraceEventDrawLazyPixelRef);
        assert.isOk(drawLazyPixelRefEvent);
        assert.isOk(drawLazyPixelRefEvent.args?.LazyPixelRef);
        const data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.ImagePainting.data();
        const matchingPaintEvent = data.paintImageByDrawLazyPixelRef.get(drawLazyPixelRefEvent.args.LazyPixelRef);
        assert.isOk(matchingPaintEvent);
    });
    it('can pair a DecodeImage event to a PaintImage via the DrawLazyPixelRef', async function () {
        const events = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'web-dev.json.gz');
        for (const event of events) {
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.ImagePainting.handleEvent(event);
        }
        const decodeImage = events.find(_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isTraceEventDecodeImage);
        assert.isOk(decodeImage);
        const data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.ImagePainting.data();
        const matchingPaintEvent = data.paintImageForEvent.get(decodeImage);
        assert.isOk(matchingPaintEvent);
    });
});


/***/ })

}]);