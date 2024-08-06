"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_components_inline_editor_BezierUI_test_js"], {
"./ui/legacy/components/inline_editor/BezierUI.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inline_editor.js */ "./ui/legacy/components/inline_editor/inline_editor.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}


describe('BezierUI', function() {
    it('can be instantiated successfully', function() {
        var testWidth = 1;
        var testHeight = 2;
        var testMarginTop = 3;
        var testRadius = 4;
        var testLinearLine = true;
        var bezierUI = new _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.BezierUI.BezierUI({
            width: testWidth,
            height: testHeight,
            marginTop: testMarginTop,
            controlPointRadius: testRadius,
            shouldDrawLine: testLinearLine
        });
        assert.strictEqual(bezierUI.width, testWidth, 'width was not set or retrieved correctly');
        assert.strictEqual(bezierUI.height, testHeight, 'height was not set or retrieved correctly');
        assert.strictEqual(bezierUI.marginTop, testMarginTop, 'margin top was not set or retrieved correctly');
        assert.strictEqual(bezierUI.radius, testRadius, 'radius was not set or retrieved correctly');
        assert.strictEqual(bezierUI.shouldDrawLine, testLinearLine, 'linear line value was not set or retrieved correctly');
    });
    it('can draw velocity chart correctly', function() {
        var bezier = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.CubicBezier(new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Point(1, 1), new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Point(3, 4));
        var path = document.createElement('path');
        _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.BezierUI.BezierUI.drawVelocityChart(bezier, path, 10);
        assert.strictEqual(path.outerHTML, '<path d="M 0 26 L 0.02 10.58 L 0.81 10.11 L 1.63 9.72 L 2.48 9.40 L 3.36 9.12 L 4.25 8.88 L 5.16 8.68 L 6.08 8.50 L 7.00 8.34 L 7.92 8.20 L 8.84 8.08 L 9.74 7.97 L 10.63 7.88 L 11.49 7.80 L 12.33 7.72 L 13.14 7.66 L 13.91 7.61 L 14.64 7.57 L 15.32 7.54 L 15.96 7.52 L 16.53 7.52 L 17.04 7.54 L 17.49 7.60 L 17.87 7.72 L 18.16 7.94 L 18.38 8.46 L 18.51 10.15 L 18.55 50.73 L 18.49 4.00 L 18.33 5.24 L 18.06 5.68 L 17.68 5.89 L 17.18 6.01 L 16.56 6.08 L 15.82 6.13 L 14.94 6.16 L 13.92 6.18 L 12.76 6.19 L 11.46 6.20 L 10.00 6.20 L 10.00 26 Z"></path>', 'velocity chart was not drawn correctly');
    });
    it('calculates curve width correctly', function() {
        var bezierUI = new _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.BezierUI.BezierUI({
            width: 10,
            height: 10,
            marginTop: 1,
            controlPointRadius: 3,
            shouldDrawLine: true
        });
        assert.strictEqual(bezierUI.curveWidth(), 4, 'curve width was not calculated correctly');
    });
    it('calculates curve height correctly', function() {
        var bezierUI = new _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.BezierUI.BezierUI({
            width: 10,
            height: 10,
            marginTop: 1,
            controlPointRadius: 3,
            shouldDrawLine: true
        });
        assert.strictEqual(bezierUI.curveHeight(), 2, 'curve height was not calculated correctly');
    });
    it('draws a curve correctly', function() {
        var bezierUI = new _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.BezierUI.BezierUI({
            width: 10,
            height: 10,
            marginTop: 1,
            controlPointRadius: 3,
            shouldDrawLine: true
        });
        var bezier = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.CubicBezier(new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Point(1, 1), new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Point(3, 4));
        var svg = document.createElement('svg');
        bezierUI.drawCurve(bezier, svg);
        /*
        <svg width="10" height="10">
          <g>
            <line class="linear-line" x1="3" y1="6" x2="7" y2="4"></line>
            <path class="bezier-path" d="M3,6 C7, 4 15, -2 7, 4"></path>
            <line class="bezier-control-line" x1="3" y1="6" x2="7" y2="4"></line>
            <circle class="bezier-control-circle" cx="7" cy="4" r="3"></circle>
            <line class="bezier-control-line" x1="7" y1="4" x2="15" y2="-2"></line>
            <circle class="bezier-control-circle" cx="15" cy="-2" r="3"></circle>
          </g>
        </svg>
        */ assert.strictEqual(svg.getAttribute('width'), '10', 'curve SVG\'s width was not set up correctly');
        assert.strictEqual(svg.getAttribute('height'), '10', 'curve SVG\'s height was not set up correctly');
        var linearLine = svg.querySelector('.linear-line');
        assert.instanceOf(linearLine, SVGLineElement);
        assert.exists(linearLine, 'Bezier curve\'s linear line did not exist');
        assert.strictEqual(linearLine.getAttribute('x1'), '3', 'Bezier curve\'s linear line had wrong x1');
        assert.strictEqual(linearLine.getAttribute('y1'), '6', 'Bezier curve\'s linear line had wrong y1');
        assert.strictEqual(linearLine.getAttribute('x2'), '7', 'Bezier curve\'s linear line had wrong x2');
        assert.strictEqual(linearLine.getAttribute('y2'), '4', 'Bezier curve\'s linear line had wrong y2');
        var path = svg.querySelector('.bezier-path');
        assert.instanceOf(path, SVGPathElement);
        assert.exists(path, 'Bezier curve\'s path did not exist');
        assert.strictEqual(path.getAttribute('d'), 'M3,6 C7, 4 15, -2 7, 4', 'Bezier curve\'s path had wrong d');
        var _Array_from = _sliced_to_array(Array.from(svg.querySelectorAll('.bezier-control-line')), 2), controlLine1 = _Array_from[0], controlLine2 = _Array_from[1];
        assert.exists(controlLine1, 'Bezier curve\'s control line 1 did not exist');
        assert.strictEqual(controlLine1.getAttribute('x1'), '3', 'Bezier curve\'s control line 1 had wrong x1 value');
        assert.strictEqual(controlLine1.getAttribute('y1'), '6', 'Bezier curve\'s control line 1 had wrong y1 value');
        assert.strictEqual(controlLine1.getAttribute('x2'), '7', 'Bezier curve\'s control line 1 had wrong x2 value');
        assert.strictEqual(controlLine1.getAttribute('y2'), '4', 'Bezier curve\'s control line 1 had wrong y2 value');
        assert.exists(controlLine2, 'Bezier curve\'s control line 2 did not exist');
        assert.strictEqual(controlLine2.getAttribute('x1'), '7', 'Bezier curve\'s control line 2 had wrong x1 value');
        assert.strictEqual(controlLine2.getAttribute('y1'), '4', 'Bezier curve\'s control line 2 had wrong y1 value');
        assert.strictEqual(controlLine2.getAttribute('x2'), '15', 'Bezier curve\'s control line 2 had wrong x2 value');
        assert.strictEqual(controlLine2.getAttribute('y2'), '-2', 'Bezier curve\'s control line 2 had wrong y2 value');
        var _Array_from1 = _sliced_to_array(Array.from(svg.querySelectorAll('.bezier-control-circle')), 2), controlCircle1 = _Array_from1[0], controlCircle2 = _Array_from1[1];
        assert.exists(controlCircle1, 'Bezier curve\'s control circle 1 did not exist');
        assert.strictEqual(controlCircle1.getAttribute('cx'), '7', 'Bezier curve\'s control circle 1 had wrong cx value');
        assert.strictEqual(controlCircle1.getAttribute('cy'), '4', 'Bezier curve\'s control circle 1 had wrong cy value');
        assert.strictEqual(controlCircle1.getAttribute('r'), '3', 'Bezier curve\'s control circle 1 had wrong r value');
        assert.exists(controlCircle2, 'Bezier curve\'s control circle 2 did not exist');
        assert.strictEqual(controlCircle2.getAttribute('cx'), '15', 'Bezier curve\'s control circle 2 had wrong cx value');
        assert.strictEqual(controlCircle2.getAttribute('cy'), '-2', 'Bezier curve\'s control circle 2 had wrong cy value');
        assert.strictEqual(controlCircle2.getAttribute('r'), '3', 'Bezier curve\'s control circle 2 had wrong r value');
    });
}); //# sourceMappingURL=BezierUI.test.js.map


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