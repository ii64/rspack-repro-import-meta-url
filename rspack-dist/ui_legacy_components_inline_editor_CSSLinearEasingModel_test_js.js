"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_components_inline_editor_CSSLinearEasingModel_test_js"], {
"./ui/legacy/components/inline_editor/CSSLinearEasingModel.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _inline_editor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inline_editor.js */ "./ui/legacy/components/inline_editor/inline_editor.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function testValidCase(input, output) {
    var model = _inline_editor_js__WEBPACK_IMPORTED_MODULE_0__.CSSLinearEasingModel.CSSLinearEasingModel.parse(input);
    assert.strictEqual(model.asCSSText(), output, 'Parsing is invalid for case "'.concat(input, '"'));
}
function testInvalidCase(input) {
    var model = _inline_editor_js__WEBPACK_IMPORTED_MODULE_0__.CSSLinearEasingModel.CSSLinearEasingModel.parse(input);
    assert.isNull(model);
}
describe('CSSLinearEasingModel', function() {
    describe('valid WPT cases', function() {
        it('should parse valid cases from WPT', function() {
            testValidCase('linear(0 0%, 1 100%)', 'linear');
            testValidCase('linear(0 0% 50%, 1 50% 100%)', 'linear(0 0%, 0 50%, 1 50%, 1 100%)');
            testValidCase('linear(0, 0.5 25% 75%, 1 100% 100%)', 'linear(0 0%, 0.5 25%, 0.5 75%, 1 100%, 1 100%)');
            testValidCase('linear(0, 1.3, 1, 0.92, 1, 0.99, 1, 1.004, 0.998, 1 100% 100%)', 'linear(0 0%, 1.3 11.11%, 1 22.22%, 0.92 33.33%, 1 44.44%, 0.99 55.56%, 1 66.67%, 1 77.78%, 1 88.89%, 1 100%, 1 100%)');
            testValidCase('linear(0, 1)', 'linear');
            testValidCase('linear(0 0% 50%, 1 50% 100%)', 'linear(0 0%, 0 50%, 1 50%, 1 100%)');
            testValidCase('linear(0, 0.5 25% 75%, 1 100% 100%)', 'linear(0 0%, 0.5 25%, 0.5 75%, 1 100%, 1 100%)');
            testValidCase('linear(0, 1.3, 1, 0.92, 1, 0.99, 1, 0.998, 1 100% 100%)', 'linear(0 0%, 1.3 12.5%, 1 25%, 0.92 37.5%, 1 50%, 0.99 62.5%, 1 75%, 1 87.5%, 1 100%, 1 100%)');
        });
        // Even though these cases should be handled as well, in frontend we bail out when we see something
        // different than a number inside the arguments.
        it('should not parse cases that include non-numbers like calc function in arguments', function() {
            testInvalidCase('linear(0 calc(0%), 0 calc(100%))');
            testInvalidCase('linear(0 calc(50% - 50%), 0 calc(50% + 50%))');
            testInvalidCase('linear(0 calc(min(50%, 60%)), 0 100%)');
        });
    });
    it('should not parse invalid cases from WPT', function() {
        testInvalidCase('linear()');
        testInvalidCase('linear(0)');
        testInvalidCase('linear(100%)');
        testInvalidCase('linear(0% 1 50%)');
        testInvalidCase('linear(0 0% 100%)');
        testInvalidCase('linear(0% 100% 0)');
        testInvalidCase('linear(0 calc(50px - 50%), 0 calc(50em + 50em))');
        testInvalidCase('linear(0 calc(50%, 50%), 0 calc(50% + 50%))');
    });
    it('should parse "linear" as linear(0 0%, 1 100%) function', function() {
        var points = _inline_editor_js__WEBPACK_IMPORTED_MODULE_0__.CSSLinearEasingModel.CSSLinearEasingModel.parse('linear').points();
        assert.deepEqual(points, [
            {
                input: 0,
                output: 0
            },
            {
                input: 100,
                output: 1
            }
        ]);
    });
    it('linear(0 0%, 1 100%) is stringified as "linear"', function() {
        var model = _inline_editor_js__WEBPACK_IMPORTED_MODULE_0__.CSSLinearEasingModel.CSSLinearEasingModel.parse('linear(0 0%, 1 100%)');
        assert.strictEqual(model.asCSSText(), 'linear');
    });
}); //# sourceMappingURL=CSSLinearEasingModel.test.js.map


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