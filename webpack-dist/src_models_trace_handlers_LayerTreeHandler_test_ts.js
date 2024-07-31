"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_models_trace_handlers_LayerTreeHandler_test_ts"],{

/***/ "./src/models/trace/handlers/LayerTreeHandler.test.ts":
/*!************************************************************!*\
  !*** ./src/models/trace/handlers/LayerTreeHandler.test.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./src/testing/TraceLoader.ts");
/* harmony import */ var _trace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../trace.js */ "./src/models/trace/trace.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


describe('LayerTreeHandler', function () {
    // The trace file used here is large because it has all the
    // AdvancedPaintInstrumentation enabled in order to test this handler.
    // Therefore the timeout here is larger to allow for the time required to
    // load the file on the bots.
    this.timeout(20000);
    beforeEach(() => {
        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.reset();
        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.LayerTree.reset();
        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.initialize();
        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.LayerTree.initialize();
    });
    it('creates a relationship between paint events and the snapshot event', async function () {
        const events = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'web-dev-with-advanced-instrumentation.json.gz');
        for (const event of events) {
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.handleEvent(event);
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.LayerTree.handleEvent(event);
        }
        await _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.finalize();
        await _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.LayerTree.finalize();
        const data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.LayerTree.data();
        assert.lengthOf(data.paints, 49);
        assert.strictEqual(data.paintsToSnapshots.size, 35);
        // Check that one expected pair got created
        const paintEvent = data.paints.find(paint => {
            return paint.ts === 42482841188;
        });
        const snapshotEvent = data.snapshots.find(snapshot => {
            return snapshot.id2?.local === '0x10c038b6d80';
        });
        if (!paintEvent || !snapshotEvent) {
            throw new Error('Could not find expected paint and snapshot events');
        }
        assert.strictEqual(data.paintsToSnapshots.get(paintEvent), snapshotEvent);
    });
});


/***/ })

}]);