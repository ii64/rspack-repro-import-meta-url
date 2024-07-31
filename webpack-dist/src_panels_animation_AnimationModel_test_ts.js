"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_animation_AnimationModel_test_ts"],{

/***/ "./src/panels/animation/AnimationModel.test.ts":
/*!*****************************************************!*\
  !*** ./src/panels/animation/AnimationModel.test.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _animation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animation.js */ "./src/panels/animation/animation.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('AnimationModel', () => {
    afterEach(() => {
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.clearAllMockConnectionResponseHandlers)();
    });
    it('can be instantiated', () => {
        assert.doesNotThrow(() => {
            const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
            new _animation_js__WEBPACK_IMPORTED_MODULE_3__.AnimationModel.AnimationModel(target);
        });
    });
    describe('AnimationImpl', () => {
        it('setPayload should update values returned from the relevant value functions for time based animations', async () => {
            const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
            const model = new _animation_js__WEBPACK_IMPORTED_MODULE_3__.AnimationModel.AnimationModel(target);
            const animationImpl = await _animation_js__WEBPACK_IMPORTED_MODULE_3__.AnimationModel.AnimationImpl.parsePayload(model, {
                id: '1',
                name: 'animation-name',
                pausedState: false,
                playbackRate: 1,
                startTime: 0,
                currentTime: 0,
                type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Animation.AnimationType.CSSAnimation,
                playState: 'running',
                source: {
                    delay: 0,
                    endDelay: 0,
                    iterationStart: 0,
                    iterations: 1,
                    duration: 100,
                    direction: 'forward',
                    fill: 'forwards',
                    easing: 'linear',
                },
            });
            assert.strictEqual(animationImpl.name(), 'animation-name');
            assert.strictEqual(animationImpl.paused(), false);
            assert.strictEqual(animationImpl.playState(), 'running');
            assert.strictEqual(animationImpl.playbackRate(), 1);
            assert.strictEqual(animationImpl.startTime(), 0);
            assert.strictEqual(animationImpl.currentTime(), 0);
            assert.strictEqual(animationImpl.iterationDuration(), 100);
            assert.strictEqual(animationImpl.delayOrStartTime(), 0);
            assert.strictEqual(animationImpl.type(), _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Animation.AnimationType.CSSAnimation);
            await animationImpl.setPayload({
                id: '1',
                name: 'updated-name',
                pausedState: true,
                playbackRate: 2,
                startTime: 100,
                currentTime: 120,
                type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Animation.AnimationType.CSSTransition,
                playState: 'paused',
                source: {
                    delay: 10,
                    endDelay: 10,
                    iterationStart: 20,
                    iterations: 2,
                    duration: 120,
                    direction: 'reverse',
                    fill: 'backward',
                    easing: 'ease',
                },
            });
            assert.strictEqual(animationImpl.name(), 'updated-name');
            assert.strictEqual(animationImpl.paused(), true);
            assert.strictEqual(animationImpl.playState(), 'paused');
            assert.strictEqual(animationImpl.playbackRate(), 2);
            assert.strictEqual(animationImpl.startTime(), 100);
            assert.strictEqual(animationImpl.currentTime(), 120);
            assert.strictEqual(animationImpl.iterationDuration(), 120);
            assert.strictEqual(animationImpl.delayOrStartTime(), 10);
            assert.strictEqual(animationImpl.type(), _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Animation.AnimationType.CSSTransition);
        });
        it('setPayload should update values returned from the relevant value functions for scroll based animations', async () => {
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('Runtime.evaluate', () => {
                return {
                    result: {
                        type: 'number',
                        value: 1,
                    },
                };
            });
            const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
            const model = new _animation_js__WEBPACK_IMPORTED_MODULE_3__.AnimationModel.AnimationModel(target);
            const animationImpl = await _animation_js__WEBPACK_IMPORTED_MODULE_3__.AnimationModel.AnimationImpl.parsePayload(model, {
                id: '1',
                name: 'animation-name',
                pausedState: false,
                playbackRate: 1,
                startTime: 0,
                currentTime: 0,
                type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Animation.AnimationType.CSSAnimation,
                playState: 'running',
                source: {
                    delay: 0,
                    endDelay: 0,
                    iterationStart: 0,
                    iterations: 1,
                    duration: 100,
                    direction: 'forward',
                    fill: 'forwards',
                    easing: 'linear',
                },
                viewOrScrollTimeline: {
                    axis: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.DOM.ScrollOrientation.Vertical,
                    startOffset: 100,
                    endOffset: 200,
                    sourceNodeId: 1,
                },
            });
            assert.strictEqual(animationImpl.name(), 'animation-name');
            assert.strictEqual(animationImpl.paused(), false);
            assert.strictEqual(animationImpl.playState(), 'running');
            assert.strictEqual(animationImpl.playbackRate(), 1);
            assert.strictEqual(animationImpl.startTime(), 100); // in pixels
            assert.strictEqual(animationImpl.currentTime(), 0);
            assert.strictEqual(animationImpl.iterationDuration(), 100); // in pixels
            assert.strictEqual(animationImpl.delayOrStartTime(), 100); // in pixels
            await animationImpl.setPayload({
                id: '1',
                name: 'updated-name',
                pausedState: true,
                playbackRate: 2,
                startTime: 0,
                currentTime: 120,
                type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Animation.AnimationType.CSSAnimation,
                playState: 'paused',
                source: {
                    delay: 10,
                    endDelay: 10,
                    iterationStart: 20,
                    iterations: 2,
                    duration: 20,
                    direction: 'reverse',
                    fill: 'backward',
                    easing: 'ease',
                },
                viewOrScrollTimeline: {
                    axis: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.DOM.ScrollOrientation.Horizontal,
                    startOffset: 0,
                    endOffset: 100,
                    sourceNodeId: 1,
                },
            });
            assert.strictEqual(animationImpl.name(), 'updated-name');
            assert.strictEqual(animationImpl.paused(), true);
            assert.strictEqual(animationImpl.playState(), 'paused');
            assert.strictEqual(animationImpl.playbackRate(), 2);
            assert.strictEqual(animationImpl.startTime(), 0); // in pixels
            assert.strictEqual(animationImpl.currentTime(), 120); // in pixels
            assert.strictEqual(animationImpl.iterationDuration(), 20); // in pixels
            assert.strictEqual(animationImpl.delayOrStartTime(), 0); // in pixels
        });
    });
});


/***/ }),

/***/ "./src/panels/animation/animation.ts":
/*!*******************************************!*\
  !*** ./src/panels/animation/animation.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimationDOMNode: () => (/* reexport module object */ _AnimationDOMNode_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   AnimationGroupPreviewUI: () => (/* reexport module object */ _AnimationGroupPreviewUI_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   AnimationModel: () => (/* reexport module object */ _AnimationModel_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   AnimationScreenshotPopover: () => (/* reexport module object */ _AnimationScreenshotPopover_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   AnimationTimeline: () => (/* reexport module object */ _AnimationTimeline_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   AnimationUI: () => (/* reexport module object */ _AnimationUI_js__WEBPACK_IMPORTED_MODULE_5__)
/* harmony export */ });
/* harmony import */ var _AnimationDOMNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnimationDOMNode.js */ "./src/panels/animation/AnimationDOMNode.ts");
/* harmony import */ var _AnimationGroupPreviewUI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnimationGroupPreviewUI.js */ "./src/panels/animation/AnimationGroupPreviewUI.ts");
/* harmony import */ var _AnimationModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AnimationModel.js */ "./src/panels/animation/AnimationModel.ts");
/* harmony import */ var _AnimationScreenshotPopover_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AnimationScreenshotPopover.js */ "./src/panels/animation/AnimationScreenshotPopover.ts");
/* harmony import */ var _AnimationTimeline_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AnimationTimeline.js */ "./src/panels/animation/AnimationTimeline.ts");
/* harmony import */ var _AnimationUI_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AnimationUI.js */ "./src/panels/animation/AnimationUI.ts");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.









/***/ })

}]);