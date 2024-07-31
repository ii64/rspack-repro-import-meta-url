"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_models_trace_handlers_GPUHandler_test_ts"],{

/***/ "./src/models/trace/handlers/GPUHandler.test.ts":
/*!******************************************************!*\
  !*** ./src/models/trace/handlers/GPUHandler.test.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./src/testing/TraceLoader.ts");
/* harmony import */ var _trace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../trace.js */ "./src/models/trace/trace.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


describe('GPUHandler', function () {
    beforeEach(() => {
        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.reset();
        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.initialize();
        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.GPU.initialize();
    });
    it('finds all the GPU Tasks for the main GPU Thread', async function () {
        const events = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'threejs-gpu.json.gz');
        for (const event of events) {
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.handleEvent(event);
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.GPU.handleEvent(event);
        }
        await _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.finalize();
        await _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.GPU.finalize();
        const gpuEvents = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.GPU.data().mainGPUThreadTasks;
        assert.lengthOf(gpuEvents, 201);
    });
});


/***/ })

}]);