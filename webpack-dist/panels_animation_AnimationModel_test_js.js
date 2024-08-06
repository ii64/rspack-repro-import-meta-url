"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_animation_AnimationModel_test_js"],{

/***/ "./panels/animation/AnimationModel.test.js":
/*!*************************************************!*\
  !*** ./panels/animation/AnimationModel.test.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */ var _animation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animation.js */ "./panels/animation/animation.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.describeWithMockConnection)('AnimationModel', () => {
    afterEach(() => {
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.clearAllMockConnectionResponseHandlers)();
    });
    it('can be instantiated', () => {
        assert.doesNotThrow(() => {
            const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
            new _animation_js__WEBPACK_IMPORTED_MODULE_2__.AnimationModel.AnimationModel(target);
        });
    });
    describe('AnimationImpl', () => {
        it('setPayload should update values returned from the relevant value functions for time based animations', async () => {
            const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
            const model = new _animation_js__WEBPACK_IMPORTED_MODULE_2__.AnimationModel.AnimationModel(target);
            const animationImpl = await _animation_js__WEBPACK_IMPORTED_MODULE_2__.AnimationModel.AnimationImpl.parsePayload(model, {
                id: '1',
                name: 'animation-name',
                pausedState: false,
                playbackRate: 1,
                startTime: 0,
                currentTime: 0,
                type: "CSSAnimation" /* Protocol.Animation.AnimationType.CSSAnimation */,
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
            assert.strictEqual(animationImpl.type(), "CSSAnimation" /* Protocol.Animation.AnimationType.CSSAnimation */);
            await animationImpl.setPayload({
                id: '1',
                name: 'updated-name',
                pausedState: true,
                playbackRate: 2,
                startTime: 100,
                currentTime: 120,
                type: "CSSTransition" /* Protocol.Animation.AnimationType.CSSTransition */,
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
            assert.strictEqual(animationImpl.type(), "CSSTransition" /* Protocol.Animation.AnimationType.CSSTransition */);
        });
        it('setPayload should update values returned from the relevant value functions for scroll based animations', async () => {
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.setMockConnectionResponseHandler)('Runtime.evaluate', () => {
                return {
                    result: {
                        type: 'number',
                        value: 1,
                    },
                };
            });
            const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
            const model = new _animation_js__WEBPACK_IMPORTED_MODULE_2__.AnimationModel.AnimationModel(target);
            const animationImpl = await _animation_js__WEBPACK_IMPORTED_MODULE_2__.AnimationModel.AnimationImpl.parsePayload(model, {
                id: '1',
                name: 'animation-name',
                pausedState: false,
                playbackRate: 1,
                startTime: 0,
                currentTime: 0,
                type: "CSSAnimation" /* Protocol.Animation.AnimationType.CSSAnimation */,
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
                    axis: "vertical" /* Protocol.DOM.ScrollOrientation.Vertical */,
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
                type: "CSSAnimation" /* Protocol.Animation.AnimationType.CSSAnimation */,
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
                    axis: "horizontal" /* Protocol.DOM.ScrollOrientation.Horizontal */,
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
//# sourceMappingURL=AnimationModel.test.js.map

/***/ }),

/***/ "./panels/animation/animation.js":
/*!***************************************!*\
  !*** ./panels/animation/animation.js ***!
  \***************************************/
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
/* harmony import */ var _AnimationDOMNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnimationDOMNode.js */ "./panels/animation/AnimationDOMNode.js");
/* harmony import */ var _AnimationGroupPreviewUI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnimationGroupPreviewUI.js */ "./panels/animation/AnimationGroupPreviewUI.js");
/* harmony import */ var _AnimationModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AnimationModel.js */ "./panels/animation/AnimationModel.js");
/* harmony import */ var _AnimationScreenshotPopover_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AnimationScreenshotPopover.js */ "./panels/animation/AnimationScreenshotPopover.js");
/* harmony import */ var _AnimationTimeline_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AnimationTimeline.js */ "./panels/animation/AnimationTimeline.js");
/* harmony import */ var _AnimationUI_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AnimationUI.js */ "./panels/animation/AnimationUI.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







//# sourceMappingURL=animation.js.map

/***/ })

}]);