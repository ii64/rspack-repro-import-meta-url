"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_trace_handlers_WarningsHandler_test_js"],{

/***/ "./models/trace/handlers/WarningsHandler.test.js":
/*!*******************************************************!*\
  !*** ./models/trace/handlers/WarningsHandler.test.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */ var _trace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../trace.js */ "./models/trace/trace.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


describe('WarningsHandler', function () {
    beforeEach(() => {
        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Warnings.reset();
    });
    it('identifies long tasks', async function () {
        const events = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'slow-interaction-keydown.json.gz');
        for (const event of events) {
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Warnings.handleEvent(event);
        }
        const data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Warnings.data();
        // We expect one long task.
        assert.strictEqual(data.perEvent.size, 1);
        const event = Array.from(data.perEvent.keys()).at(0);
        assert.strictEqual(event?.name, "RunTask" /* TraceEngine.Types.TraceEvents.KnownEventName.RunTask */);
    });
    it('identifies idle callbacks that ran over the allotted time', async function () {
        const events = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'idle-callback.json.gz');
        for (const event of events) {
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Warnings.handleEvent(event);
        }
        const data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Warnings.data();
        const longIdleCallbacks = data.perWarning.get('IDLE_CALLBACK_OVER_TIME') || [];
        assert.lengthOf(longIdleCallbacks, 1);
        const event = longIdleCallbacks[0];
        assert.deepEqual(data.perEvent.get(event), ['IDLE_CALLBACK_OVER_TIME']);
    });
    it('identifies reflows that take over 30ms', async function () {
        const events = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'large-layout-small-recalc.json.gz');
        for (const event of events) {
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Warnings.handleEvent(event);
        }
        const data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Warnings.data();
        const forcedReflow = data.perWarning.get('FORCED_REFLOW') || [];
        assert.lengthOf(forcedReflow, 2);
        const stylesRecalc = forcedReflow[0];
        const layout = forcedReflow[1];
        assert.deepEqual(data.perEvent.get(stylesRecalc), ['FORCED_REFLOW']);
        assert.deepEqual(data.perEvent.get(layout), ['FORCED_REFLOW']);
        assert.strictEqual(stylesRecalc.name, "UpdateLayoutTree" /* TraceEngine.Types.TraceEvents.KnownEventName.UpdateLayoutTree */);
        assert.strictEqual(layout.name, "Layout" /* TraceEngine.Types.TraceEvents.KnownEventName.Layout */);
    });
    it('ignores reflows that are not forced by JS', async function () {
        const events = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'large-recalc-style.json.gz');
        for (const event of events) {
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Warnings.handleEvent(event);
        }
        const data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Warnings.data();
        const forcedStyle = data.perWarning.get('FORCED_REFLOW') || [];
        assert.lengthOf(forcedStyle, 0);
    });
    it('identifies long interactions', async function () {
        // We run the entire model here as the WarningsHandler actually depends on the UserInteractionsHandler to fetch this data
        const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.traceEngine(this, 'one-second-interaction.json.gz');
        // These events do exist on the UserInteractionsHandler, but we also put
        // them into the WarningsHandler so that the warnings handler can be the
        // source of truth and the way to look up all warnings for a given event.
        const { interactionsOverThreshold } = traceData.UserInteractions;
        for (const interaction of interactionsOverThreshold) {
            const warnings = traceData.Warnings.perEvent.get(interaction);
            assert.deepEqual(warnings, ['LONG_INTERACTION']);
        }
    });
});
//# sourceMappingURL=WarningsHandler.test.js.map

/***/ })

}]);