"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_components_inline_editor_CSSAngle_test_js"], {
"./ui/legacy/components/inline_editor/CSSAngle.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inline_editor.js */ "./ui/legacy/components/inline_editor/inline_editor.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


var assertPopoverOpen = function(root) {
    var popover = root.querySelector('.popover');
    assert.exists(popover);
};
var assertPopoverClosed = function(root) {
    var popover = root.querySelector('.popover');
    assert.notExists(popover);
};
var assertAndGetSwatch = function(root) {
    var swatch = root.querySelector('devtools-css-angle-swatch');
    if (!swatch) {
        assert.fail('swatch was not rendered');
        return;
    }
    return swatch;
};
var togglePopover = function(root) {
    var swatch = assertAndGetSwatch(root);
    swatch === null || swatch === void 0 ? void 0 : swatch.click();
};
var assertNewAngleFromEvent = function(angle, event, approximateNewValue) {
    var newAngle = _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.getNewAngleFromEvent(angle, event);
    if (!newAngle) {
        assert.fail('should create a new angle');
        return;
    }
    assert.strictEqual(newAngle.unit, angle.unit);
    assert.approximately(newAngle.value, approximateNewValue, 0.1);
};
var initialData = {
    angleText: '45deg',
    containingPane: document.createElement('div')
};
describe('CSSAngle', function() {
    it('can open and close a popover', function() {
        var component = new _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngle.CSSAngle();
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
        component.data = initialData;
        assert.isNotNull(component.shadowRoot);
        assertPopoverClosed(component.shadowRoot);
        togglePopover(component.shadowRoot);
        assertPopoverOpen(component.shadowRoot);
        togglePopover(component.shadowRoot);
        assertPopoverClosed(component.shadowRoot);
    });
    it('can fire events when toggling the popover', function() {
        var component = new _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngle.CSSAngle();
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
        var isPopoverOpen = false;
        component.data = initialData;
        component.addEventListener('popovertoggled', function(event) {
            var popoverToggledEvent = event;
            isPopoverOpen = popoverToggledEvent.data.open;
        });
        assert.isNotNull(component.shadowRoot);
        assertPopoverClosed(component.shadowRoot);
        togglePopover(component.shadowRoot);
        assertPopoverOpen(component.shadowRoot);
        assert.isTrue(isPopoverOpen, 'external isPopoverOpen flag not synced');
        togglePopover(component.shadowRoot);
        assertPopoverClosed(component.shadowRoot);
        assert.isFalse(isPopoverOpen, 'external isPopoverOpen flag not synced');
    });
    it('can change unit when the swatch is shift-clicked upon', function() {
        var component = new _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngle.CSSAngle();
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
        component.data = initialData;
        assert.isNotNull(component.shadowRoot);
        var cssAngleText = initialData.angleText;
        component.addEventListener('unitchanged', function(event) {
            var data = event.data;
            cssAngleText = data.value;
        });
        var swatch = assertAndGetSwatch(component.shadowRoot);
        if (!swatch) {
            return;
        }
        var shiftClick = new MouseEvent('click', {
            shiftKey: true
        });
        swatch.dispatchEvent(shiftClick);
        assert.strictEqual(cssAngleText, '50grad', 'angle unit should change to Grad from Deg');
    });
    it('can +/- angle values when pressing UP or DOWN keys', function() {
        var component = new _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngle.CSSAngle();
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
        component.data = initialData;
        assert.isNotNull(component.shadowRoot);
        var cssAngleText = initialData.angleText;
        component.addEventListener('valuechanged', function(event) {
            var data = event.data;
            cssAngleText = data.value;
        });
        togglePopover(component.shadowRoot);
        var angleContainer = component.shadowRoot.querySelector('.css-angle');
        if (!angleContainer) {
            assert.fail('angle container was not rendered');
            return;
        }
        var arrowUp = new KeyboardEvent('keydown', {
            key: 'ArrowUp'
        });
        angleContainer.dispatchEvent(arrowUp);
        assert.strictEqual(cssAngleText, '46deg', 'angle value should increase by 1 when ArrowUp is pressed');
        var arrowDownShift = new KeyboardEvent('keydown', {
            key: 'ArrowDown',
            shiftKey: true
        });
        angleContainer.dispatchEvent(arrowDownShift);
        assert.strictEqual(cssAngleText, '36deg', 'angle value should increase by 1 when ArrowUp is pressed');
    });
    describe('#CSSAngleUtils', function() {
        it('can fire InlineEditor.CSSAngle.PopoverToggledEvent when toggling the popover', function() {
            var component = new _inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngle.CSSAngle();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
            var shouldPopoverEventBeOpen = false;
            component.data = initialData;
            component.addEventListener('popovertoggled', function(event) {
                var popoverEvent = event;
                assert.strictEqual(popoverEvent.data.open, shouldPopoverEventBeOpen);
            });
            assert.isNotNull(component.shadowRoot);
            assertPopoverClosed(component.shadowRoot);
            shouldPopoverEventBeOpen = true;
            togglePopover(component.shadowRoot);
            shouldPopoverEventBeOpen = false;
            togglePopover(component.shadowRoot);
        });
        it('parses CSS properties with angles correctly', function() {
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.parseText('rotate(45deg)'), {
                value: 45,
                unit: "deg" /* InlineEditor.CSSAngleUtils.AngleUnit.Deg */ 
            });
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.parseText('rotate(calc(45deg))'), {
                value: 45,
                unit: "deg" /* InlineEditor.CSSAngleUtils.AngleUnit.Deg */ 
            });
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.parseText('skew(20deg)'), {
                value: 20,
                unit: "deg" /* InlineEditor.CSSAngleUtils.AngleUnit.Deg */ 
            });
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.parseText('rotateX(20deg)'), {
                value: 20,
                unit: "deg" /* InlineEditor.CSSAngleUtils.AngleUnit.Deg */ 
            });
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.parseText('rotateY(20deg)'), {
                value: 20,
                unit: "deg" /* InlineEditor.CSSAngleUtils.AngleUnit.Deg */ 
            });
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.parseText('rotateZ(20deg)'), {
                value: 20,
                unit: "deg" /* InlineEditor.CSSAngleUtils.AngleUnit.Deg */ 
            });
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.parseText('rotate3d(1, 1, 1, 20deg)'), {
                value: 20,
                unit: "deg" /* InlineEditor.CSSAngleUtils.AngleUnit.Deg */ 
            });
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.parseText('linear-gradient(10.5grad, black, white)'), {
                value: 10.5,
                unit: "grad" /* InlineEditor.CSSAngleUtils.AngleUnit.Grad */ 
            });
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.parseText('conic-gradient(black 25%, white 10deg 50%, black 20deg 75%, white 30deg)'), {
                value: 10,
                unit: "deg" /* InlineEditor.CSSAngleUtils.AngleUnit.Deg */ 
            });
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.parseText('rotate3d(2, -1, -1, -0.2rad);'), {
                value: -0.2,
                unit: "rad" /* InlineEditor.CSSAngleUtils.AngleUnit.Rad */ 
            });
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.parseText('hue-rotate(1.5turn)'), {
                value: 1.5,
                unit: "turn" /* InlineEditor.CSSAngleUtils.AngleUnit.Turn */ 
            });
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.parseText('oblique 25deg'), {
                value: 25,
                unit: "deg" /* InlineEditor.CSSAngleUtils.AngleUnit.Deg */ 
            });
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.parseText('ray(20.8deg closest-side)'), {
                value: 20.8,
                unit: "deg" /* InlineEditor.CSSAngleUtils.AngleUnit.Deg */ 
            });
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.parseText('rotate(12345)'), null);
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.parseText(''), null);
            // TODO(changhaohan): crbug.com/1138628 handle unitless 0 case
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.parseText('rotate(0)'), null);
        });
        it('converts angles in degree to other units correctly', function() {
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.getAngleFromRadians(Math.PI / 4, "grad" /* InlineEditor.CSSAngleUtils.AngleUnit.Grad */ ), {
                value: 50,
                unit: "grad" /* InlineEditor.CSSAngleUtils.AngleUnit.Grad */ 
            });
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.getAngleFromRadians(Math.PI / 4, "rad" /* InlineEditor.CSSAngleUtils.AngleUnit.Rad */ ), {
                value: Math.PI / 4,
                unit: "rad" /* InlineEditor.CSSAngleUtils.AngleUnit.Rad */ 
            });
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.getAngleFromRadians(Math.PI / 4, "turn" /* InlineEditor.CSSAngleUtils.AngleUnit.Turn */ ), {
                value: 0.125,
                unit: "turn" /* InlineEditor.CSSAngleUtils.AngleUnit.Turn */ 
            });
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.getAngleFromRadians(Math.PI / 4, "deg" /* InlineEditor.CSSAngleUtils.AngleUnit.Deg */ ), {
                value: 45,
                unit: "deg" /* InlineEditor.CSSAngleUtils.AngleUnit.Deg */ 
            });
        });
        it('converts angles in other units to radians correctly', function() {
            assert.strictEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.getRadiansFromAngle({
                value: 50,
                unit: "grad" /* InlineEditor.CSSAngleUtils.AngleUnit.Grad */ 
            }), 0.7853981633974483);
            assert.strictEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.getRadiansFromAngle({
                value: 45,
                unit: "deg" /* InlineEditor.CSSAngleUtils.AngleUnit.Deg */ 
            }), 0.7853981633974483);
            assert.strictEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.getRadiansFromAngle({
                value: 0.125,
                unit: "turn" /* InlineEditor.CSSAngleUtils.AngleUnit.Turn */ 
            }), 0.7853981633974483);
            assert.strictEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.getRadiansFromAngle({
                value: 1,
                unit: "rad" /* InlineEditor.CSSAngleUtils.AngleUnit.Rad */ 
            }), 1);
        });
        it('gets 2D translations for angles correctly', function() {
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.get2DTranslationsForAngle({
                value: 45,
                unit: "deg" /* InlineEditor.CSSAngleUtils.AngleUnit.Deg */ 
            }, 1), {
                translateX: 0.7071067811865475,
                translateY: -0.7071067811865476
            });
        });
        it('rounds angles by units correctly', function() {
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.roundAngleByUnit({
                value: 45.723,
                unit: "deg" /* InlineEditor.CSSAngleUtils.AngleUnit.Deg */ 
            }), {
                value: 46,
                unit: "deg" /* InlineEditor.CSSAngleUtils.AngleUnit.Deg */ 
            });
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.roundAngleByUnit({
                value: 45.723,
                unit: "grad" /* InlineEditor.CSSAngleUtils.AngleUnit.Grad */ 
            }), {
                value: 46,
                unit: "grad" /* InlineEditor.CSSAngleUtils.AngleUnit.Grad */ 
            });
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.roundAngleByUnit({
                value: 45.723,
                unit: "rad" /* InlineEditor.CSSAngleUtils.AngleUnit.Rad */ 
            }), {
                value: 45.723,
                unit: "rad" /* InlineEditor.CSSAngleUtils.AngleUnit.Rad */ 
            });
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.roundAngleByUnit({
                value: 45.723275,
                unit: "rad" /* InlineEditor.CSSAngleUtils.AngleUnit.Rad */ 
            }), {
                value: 45.7233,
                unit: "rad" /* InlineEditor.CSSAngleUtils.AngleUnit.Rad */ 
            });
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.roundAngleByUnit({
                value: 45.723275,
                unit: "turn" /* InlineEditor.CSSAngleUtils.AngleUnit.Turn */ 
            }), {
                value: 45.72,
                unit: "turn" /* InlineEditor.CSSAngleUtils.AngleUnit.Turn */ 
            });
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.roundAngleByUnit({
                value: 45.8,
                unit: "turn" /* InlineEditor.CSSAngleUtils.AngleUnit.Turn */ 
            }), {
                value: 45.8,
                unit: "turn" /* InlineEditor.CSSAngleUtils.AngleUnit.Turn */ 
            });
        });
        it('cycles angle units correctly', function() {
            assert.strictEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.getNextUnit("deg" /* InlineEditor.CSSAngleUtils.AngleUnit.Deg */ ), "grad" /* InlineEditor.CSSAngleUtils.AngleUnit.Grad */ );
            assert.strictEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.getNextUnit("grad" /* InlineEditor.CSSAngleUtils.AngleUnit.Grad */ ), "rad" /* InlineEditor.CSSAngleUtils.AngleUnit.Rad */ );
            assert.strictEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.getNextUnit("rad" /* InlineEditor.CSSAngleUtils.AngleUnit.Rad */ ), "turn" /* InlineEditor.CSSAngleUtils.AngleUnit.Turn */ );
            assert.strictEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.getNextUnit("turn" /* InlineEditor.CSSAngleUtils.AngleUnit.Turn */ ), "deg" /* InlineEditor.CSSAngleUtils.AngleUnit.Deg */ );
        });
        it('converts angle units correctly', function() {
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.convertAngleUnit({
                value: 45,
                unit: "deg" /* InlineEditor.CSSAngleUtils.AngleUnit.Deg */ 
            }, "grad" /* InlineEditor.CSSAngleUtils.AngleUnit.Grad */ ), {
                value: 50,
                unit: "grad" /* InlineEditor.CSSAngleUtils.AngleUnit.Grad */ 
            });
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.convertAngleUnit({
                value: Math.PI / 180,
                unit: "rad" /* InlineEditor.CSSAngleUtils.AngleUnit.Rad */ 
            }, "deg" /* InlineEditor.CSSAngleUtils.AngleUnit.Deg */ ), {
                value: 1,
                unit: "deg" /* InlineEditor.CSSAngleUtils.AngleUnit.Deg */ 
            });
            assert.deepEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.convertAngleUnit({
                value: 1,
                unit: "turn" /* InlineEditor.CSSAngleUtils.AngleUnit.Turn */ 
            }, "deg" /* InlineEditor.CSSAngleUtils.AngleUnit.Deg */ ), {
                value: 360,
                unit: "deg" /* InlineEditor.CSSAngleUtils.AngleUnit.Deg */ 
            });
        });
        it('gets new angles from events correctly', function() {
            var originalAngle = {
                value: 45,
                unit: "deg" /* InlineEditor.CSSAngleUtils.AngleUnit.Deg */ 
            };
            var arrowDown = new KeyboardEvent('keydown', {
                key: 'ArrowDown'
            });
            var arrowUpShift = new KeyboardEvent('keydown', {
                key: 'ArrowUp',
                shiftKey: true
            });
            var wheelUp = new WheelEvent('wheel', {
                deltaY: 1
            });
            var wheelDownShift = new WheelEvent('wheel', {
                deltaX: -1,
                shiftKey: true
            });
            assertNewAngleFromEvent(originalAngle, arrowDown, 44);
            assertNewAngleFromEvent(originalAngle, arrowUpShift, 55);
            assertNewAngleFromEvent(originalAngle, wheelUp, 44);
            assertNewAngleFromEvent(originalAngle, wheelDownShift, 55);
            var otherEvent = new MouseEvent('mousedown');
            assert.notExists(_inline_editor_js__WEBPACK_IMPORTED_MODULE_1__.CSSAngleUtils.getNewAngleFromEvent(originalAngle, otherEvent));
        });
    });
}); //# sourceMappingURL=CSSAngle.test.js.map


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