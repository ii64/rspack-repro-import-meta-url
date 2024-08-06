"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_animation_AnimationModel_test_js-ui_legacy_components_inline_editor_inline_editor_js"], {
"./panels/animation/AnimationModel.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _animation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animation.js */ "./panels/animation/animation.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}



(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.describeWithMockConnection)('AnimationModel', function() {
    afterEach(function() {
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.clearAllMockConnectionResponseHandlers)();
    });
    it('can be instantiated', function() {
        assert.doesNotThrow(function() {
            var target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
            new _animation_js__WEBPACK_IMPORTED_MODULE_2__.AnimationModel.AnimationModel(target);
        });
    });
    describe('AnimationImpl', function() {
        it('setPayload should update values returned from the relevant value functions for time based animations', /*#__PURE__*/ _async_to_generator(function() {
            var target, model, animationImpl;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
                        model = new _animation_js__WEBPACK_IMPORTED_MODULE_2__.AnimationModel.AnimationModel(target);
                        return [
                            4,
                            _animation_js__WEBPACK_IMPORTED_MODULE_2__.AnimationModel.AnimationImpl.parsePayload(model, {
                                id: '1',
                                name: 'animation-name',
                                pausedState: false,
                                playbackRate: 1,
                                startTime: 0,
                                currentTime: 0,
                                type: "CSSAnimation" /* Protocol.Animation.AnimationType.CSSAnimation */ ,
                                playState: 'running',
                                source: {
                                    delay: 0,
                                    endDelay: 0,
                                    iterationStart: 0,
                                    iterations: 1,
                                    duration: 100,
                                    direction: 'forward',
                                    fill: 'forwards',
                                    easing: 'linear'
                                }
                            })
                        ];
                    case 1:
                        animationImpl = _state.sent();
                        assert.strictEqual(animationImpl.name(), 'animation-name');
                        assert.strictEqual(animationImpl.paused(), false);
                        assert.strictEqual(animationImpl.playState(), 'running');
                        assert.strictEqual(animationImpl.playbackRate(), 1);
                        assert.strictEqual(animationImpl.startTime(), 0);
                        assert.strictEqual(animationImpl.currentTime(), 0);
                        assert.strictEqual(animationImpl.iterationDuration(), 100);
                        assert.strictEqual(animationImpl.delayOrStartTime(), 0);
                        assert.strictEqual(animationImpl.type(), "CSSAnimation" /* Protocol.Animation.AnimationType.CSSAnimation */ );
                        return [
                            4,
                            animationImpl.setPayload({
                                id: '1',
                                name: 'updated-name',
                                pausedState: true,
                                playbackRate: 2,
                                startTime: 100,
                                currentTime: 120,
                                type: "CSSTransition" /* Protocol.Animation.AnimationType.CSSTransition */ ,
                                playState: 'paused',
                                source: {
                                    delay: 10,
                                    endDelay: 10,
                                    iterationStart: 20,
                                    iterations: 2,
                                    duration: 120,
                                    direction: 'reverse',
                                    fill: 'backward',
                                    easing: 'ease'
                                }
                            })
                        ];
                    case 2:
                        _state.sent();
                        assert.strictEqual(animationImpl.name(), 'updated-name');
                        assert.strictEqual(animationImpl.paused(), true);
                        assert.strictEqual(animationImpl.playState(), 'paused');
                        assert.strictEqual(animationImpl.playbackRate(), 2);
                        assert.strictEqual(animationImpl.startTime(), 100);
                        assert.strictEqual(animationImpl.currentTime(), 120);
                        assert.strictEqual(animationImpl.iterationDuration(), 120);
                        assert.strictEqual(animationImpl.delayOrStartTime(), 10);
                        assert.strictEqual(animationImpl.type(), "CSSTransition" /* Protocol.Animation.AnimationType.CSSTransition */ );
                        return [
                            2
                        ];
                }
            });
        }));
        it('setPayload should update values returned from the relevant value functions for scroll based animations', /*#__PURE__*/ _async_to_generator(function() {
            var target, model, animationImpl;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.setMockConnectionResponseHandler)('Runtime.evaluate', function() {
                            return {
                                result: {
                                    type: 'number',
                                    value: 1
                                }
                            };
                        });
                        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
                        model = new _animation_js__WEBPACK_IMPORTED_MODULE_2__.AnimationModel.AnimationModel(target);
                        return [
                            4,
                            _animation_js__WEBPACK_IMPORTED_MODULE_2__.AnimationModel.AnimationImpl.parsePayload(model, {
                                id: '1',
                                name: 'animation-name',
                                pausedState: false,
                                playbackRate: 1,
                                startTime: 0,
                                currentTime: 0,
                                type: "CSSAnimation" /* Protocol.Animation.AnimationType.CSSAnimation */ ,
                                playState: 'running',
                                source: {
                                    delay: 0,
                                    endDelay: 0,
                                    iterationStart: 0,
                                    iterations: 1,
                                    duration: 100,
                                    direction: 'forward',
                                    fill: 'forwards',
                                    easing: 'linear'
                                },
                                viewOrScrollTimeline: {
                                    axis: "vertical" /* Protocol.DOM.ScrollOrientation.Vertical */ ,
                                    startOffset: 100,
                                    endOffset: 200,
                                    sourceNodeId: 1
                                }
                            })
                        ];
                    case 1:
                        animationImpl = _state.sent();
                        assert.strictEqual(animationImpl.name(), 'animation-name');
                        assert.strictEqual(animationImpl.paused(), false);
                        assert.strictEqual(animationImpl.playState(), 'running');
                        assert.strictEqual(animationImpl.playbackRate(), 1);
                        assert.strictEqual(animationImpl.startTime(), 100); // in pixels
                        assert.strictEqual(animationImpl.currentTime(), 0);
                        assert.strictEqual(animationImpl.iterationDuration(), 100); // in pixels
                        assert.strictEqual(animationImpl.delayOrStartTime(), 100); // in pixels
                        return [
                            4,
                            animationImpl.setPayload({
                                id: '1',
                                name: 'updated-name',
                                pausedState: true,
                                playbackRate: 2,
                                startTime: 0,
                                currentTime: 120,
                                type: "CSSAnimation" /* Protocol.Animation.AnimationType.CSSAnimation */ ,
                                playState: 'paused',
                                source: {
                                    delay: 10,
                                    endDelay: 10,
                                    iterationStart: 20,
                                    iterations: 2,
                                    duration: 20,
                                    direction: 'reverse',
                                    fill: 'backward',
                                    easing: 'ease'
                                },
                                viewOrScrollTimeline: {
                                    axis: "horizontal" /* Protocol.DOM.ScrollOrientation.Horizontal */ ,
                                    startOffset: 0,
                                    endOffset: 100,
                                    sourceNodeId: 1
                                }
                            })
                        ];
                    case 2:
                        _state.sent();
                        assert.strictEqual(animationImpl.name(), 'updated-name');
                        assert.strictEqual(animationImpl.paused(), true);
                        assert.strictEqual(animationImpl.playState(), 'paused');
                        assert.strictEqual(animationImpl.playbackRate(), 2);
                        assert.strictEqual(animationImpl.startTime(), 0); // in pixels
                        assert.strictEqual(animationImpl.currentTime(), 120); // in pixels
                        assert.strictEqual(animationImpl.iterationDuration(), 20); // in pixels
                        assert.strictEqual(animationImpl.delayOrStartTime(), 0); // in pixels
                        return [
                            2
                        ];
                }
            });
        }));
    });
}); //# sourceMappingURL=AnimationModel.test.js.map


}),
"./panels/animation/animation.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AnimationDOMNode: function() { return /* reexport module object */ _AnimationDOMNode_js__WEBPACK_IMPORTED_MODULE_0__; },
  AnimationGroupPreviewUI: function() { return /* reexport module object */ _AnimationGroupPreviewUI_js__WEBPACK_IMPORTED_MODULE_1__; },
  AnimationModel: function() { return /* reexport module object */ _AnimationModel_js__WEBPACK_IMPORTED_MODULE_2__; },
  AnimationScreenshotPopover: function() { return /* reexport module object */ _AnimationScreenshotPopover_js__WEBPACK_IMPORTED_MODULE_3__; },
  AnimationTimeline: function() { return /* reexport module object */ _AnimationTimeline_js__WEBPACK_IMPORTED_MODULE_4__; },
  AnimationUI: function() { return /* reexport module object */ _AnimationUI_js__WEBPACK_IMPORTED_MODULE_5__; }
});
/* harmony import */var _AnimationDOMNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnimationDOMNode.js */ "./panels/animation/AnimationDOMNode.js");
/* harmony import */var _AnimationGroupPreviewUI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnimationGroupPreviewUI.js */ "./panels/animation/AnimationGroupPreviewUI.js");
/* harmony import */var _AnimationModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AnimationModel.js */ "./panels/animation/AnimationModel.js");
/* harmony import */var _AnimationScreenshotPopover_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AnimationScreenshotPopover.js */ "./panels/animation/AnimationScreenshotPopover.js");
/* harmony import */var _AnimationTimeline_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AnimationTimeline.js */ "./panels/animation/AnimationTimeline.js");
/* harmony import */var _AnimationUI_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AnimationUI.js */ "./panels/animation/AnimationUI.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






 //# sourceMappingURL=animation.js.map


}),
"./ui/legacy/components/inline_editor/inline_editor.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AnimationTimingModel: function() { return /* reexport module object */ _AnimationTimingModel_js__WEBPACK_IMPORTED_MODULE_0__; },
  AnimationTimingUI: function() { return /* reexport module object */ _AnimationTimingUI_js__WEBPACK_IMPORTED_MODULE_1__; },
  BezierEditor: function() { return /* reexport module object */ _BezierEditor_js__WEBPACK_IMPORTED_MODULE_2__; },
  BezierUI: function() { return /* reexport module object */ _BezierUI_js__WEBPACK_IMPORTED_MODULE_3__; },
  CSSAngle: function() { return /* reexport module object */ _CSSAngle_js__WEBPACK_IMPORTED_MODULE_6__; },
  CSSAngleUtils: function() { return /* reexport module object */ _CSSAngleUtils_js__WEBPACK_IMPORTED_MODULE_7__; },
  CSSLength: function() { return /* reexport module object */ _CSSLength_js__WEBPACK_IMPORTED_MODULE_8__; },
  CSSLengthUtils: function() { return /* reexport module object */ _CSSLengthUtils_js__WEBPACK_IMPORTED_MODULE_9__; },
  CSSLinearEasingModel: function() { return /* reexport module object */ _CSSLinearEasingModel_js__WEBPACK_IMPORTED_MODULE_10__; },
  CSSShadowEditor: function() { return /* reexport module object */ _CSSShadowEditor_js__WEBPACK_IMPORTED_MODULE_11__; },
  ColorMixSwatch: function() { return /* reexport module object */ _ColorMixSwatch_js__WEBPACK_IMPORTED_MODULE_4__; },
  ColorSwatch: function() { return /* reexport module object */ _ColorSwatch_js__WEBPACK_IMPORTED_MODULE_5__; },
  FontEditor: function() { return /* reexport module object */ _FontEditor_js__WEBPACK_IMPORTED_MODULE_12__; },
  FontEditorUnitConverter: function() { return /* reexport module object */ _FontEditorUnitConverter_js__WEBPACK_IMPORTED_MODULE_13__; },
  FontEditorUtils: function() { return /* reexport module object */ _FontEditorUtils_js__WEBPACK_IMPORTED_MODULE_14__; },
  InlineEditorUtils: function() { return /* reexport module object */ _InlineEditorUtils_js__WEBPACK_IMPORTED_MODULE_15__; },
  LinkSwatch: function() { return /* reexport module object */ _LinkSwatch_js__WEBPACK_IMPORTED_MODULE_16__; },
  SwatchPopoverHelper: function() { return /* reexport module object */ _SwatchPopoverHelper_js__WEBPACK_IMPORTED_MODULE_18__; },
  Swatches: function() { return /* reexport module object */ _Swatches_js__WEBPACK_IMPORTED_MODULE_17__; }
});
/* harmony import */var _AnimationTimingModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnimationTimingModel.js */ "./ui/legacy/components/inline_editor/AnimationTimingModel.js");
/* harmony import */var _AnimationTimingUI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnimationTimingUI.js */ "./ui/legacy/components/inline_editor/AnimationTimingUI.js");
/* harmony import */var _BezierEditor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BezierEditor.js */ "./ui/legacy/components/inline_editor/BezierEditor.js");
/* harmony import */var _BezierUI_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BezierUI.js */ "./ui/legacy/components/inline_editor/BezierUI.js");
/* harmony import */var _ColorMixSwatch_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ColorMixSwatch.js */ "./ui/legacy/components/inline_editor/ColorMixSwatch.js");
/* harmony import */var _ColorSwatch_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ColorSwatch.js */ "./ui/legacy/components/inline_editor/ColorSwatch.js");
/* harmony import */var _CSSAngle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CSSAngle.js */ "./ui/legacy/components/inline_editor/CSSAngle.js");
/* harmony import */var _CSSAngleUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CSSAngleUtils.js */ "./ui/legacy/components/inline_editor/CSSAngleUtils.js");
/* harmony import */var _CSSLength_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CSSLength.js */ "./ui/legacy/components/inline_editor/CSSLength.js");
/* harmony import */var _CSSLengthUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CSSLengthUtils.js */ "./ui/legacy/components/inline_editor/CSSLengthUtils.js");
/* harmony import */var _CSSLinearEasingModel_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CSSLinearEasingModel.js */ "./ui/legacy/components/inline_editor/CSSLinearEasingModel.js");
/* harmony import */var _CSSShadowEditor_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CSSShadowEditor.js */ "./ui/legacy/components/inline_editor/CSSShadowEditor.js");
/* harmony import */var _FontEditor_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./FontEditor.js */ "./ui/legacy/components/inline_editor/FontEditor.js");
/* harmony import */var _FontEditorUnitConverter_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./FontEditorUnitConverter.js */ "./ui/legacy/components/inline_editor/FontEditorUnitConverter.js");
/* harmony import */var _FontEditorUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./FontEditorUtils.js */ "./ui/legacy/components/inline_editor/FontEditorUtils.js");
/* harmony import */var _InlineEditorUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./InlineEditorUtils.js */ "./ui/legacy/components/inline_editor/InlineEditorUtils.js");
/* harmony import */var _LinkSwatch_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./LinkSwatch.js */ "./ui/legacy/components/inline_editor/LinkSwatch.js");
/* harmony import */var _Swatches_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Swatches.js */ "./ui/legacy/components/inline_editor/Swatches.js");
/* harmony import */var _SwatchPopoverHelper_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./SwatchPopoverHelper.js */ "./ui/legacy/components/inline_editor/SwatchPopoverHelper.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



















 //# sourceMappingURL=inline_editor.js.map


}),

}]);