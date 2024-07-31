"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_models_trace_handlers_AnimationHandler_test_ts"],{

/***/ "./src/models/trace/handlers/AnimationHandler.test.ts":
/*!************************************************************!*\
  !*** ./src/models/trace/handlers/AnimationHandler.test.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./src/testing/TraceLoader.ts");
/* harmony import */ var _trace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../trace.js */ "./src/models/trace/trace.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


describe('AnimationHandler', function () {
    it('calculates the amount of animation events correctly', async function () {
        const events = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'animation.json.gz');
        for (const event of events) {
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Animations.handleEvent(event);
        }
        await _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Animations.finalize();
        const eventsAmount = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Animations.data().animations.length;
        assert.strictEqual(eventsAmount, 1);
    });
    it('drops any bad animation events', async function () {
        const events = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'invalid-animation-events.json.gz');
        for (const event of events) {
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Animations.handleEvent(event);
        }
        await _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Animations.finalize();
        const animations = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Animations.data().animations;
        // This trace contains 57 'Animation' events but all are from `cat: 'power'`
        // These events are only possible if the trace is captured with 'Show All Events' on.
        assert.lengthOf(animations, 0);
    });
    it('calculates the duration of an animation event correctly', async function () {
        const events = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'animation.json.gz');
        for (const event of events) {
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Animations.handleEvent(event);
        }
        await _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Animations.finalize();
        const animations = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Animations.data().animations;
        const eventDuration = animations[0].dur;
        assert.strictEqual(eventDuration, 2006450);
        // We also ensure all of the events have a positive duration.
        for (const event of animations) {
            assert.isTrue(event.dur > 0);
        }
    });
});


/***/ })

}]);