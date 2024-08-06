"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_components_inline_editor_ColorSwatch_test_js"], {
"./testing/ContextMenuHelpers.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  findMenuItemWithLabel: function() { return findMenuItemWithLabel; },
  getContextMenuForElement: function() { return getContextMenuForElement; },
  getMenuForShiftClick: function() { return getMenuForShiftClick; },
  getMenuForToolbarButton: function() { return getMenuForToolbarButton; },
  getMenuItemLabels: function() { return getMenuItemLabels; }
});
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function getMenu(action) {
    var sandbox = sinon.createSandbox();
    var contextMenuShow = sandbox.stub(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.ContextMenu.ContextMenu.prototype, 'show').resolves();
    action();
    sandbox.restore();
    return contextMenuShow.thisValues[0];
}
function getMenuForToolbarButton(button) {
    return getMenu(function() {
        button.clicked(new MouseEvent('click', {
            bubbles: true,
            cancelable: true
        }));
    });
}
function findMenuItemWithLabel(section, label) {
    return section.items.find(function(item) {
        return item.buildDescriptor().label === label;
    });
}
function getMenuItemLabels(section) {
    return section.items.map(function(item) {
        return item.buildDescriptor().label;
    });
}
function getContextMenuForElement(element, target) {
    return getMenu(function() {
        var event = new MouseEvent('contextmenu', {
            bubbles: true
        });
        if (target) {
            sinon.stub(event, 'target').value(target);
        }
        element.dispatchEvent(event);
    });
}
function getMenuForShiftClick(element) {
    return getMenu(function() {
        element.dispatchEvent(new MouseEvent('click', {
            shiftKey: true
        }));
    });
} //# sourceMappingURL=ContextMenuHelpers.js.map


}),
"./ui/legacy/components/inline_editor/ColorSwatch.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../testing/ContextMenuHelpers.js */ "./testing/ContextMenuHelpers.js");
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _inline_editor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inline_editor.js */ "./ui/legacy/components/inline_editor/inline_editor.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





function assertSwatch(swatch, expected) {
    var swatchEl = swatch.shadowRoot.querySelector('.color-swatch');
    assert.instanceOf(swatchEl, HTMLElement);
    var swatchInnerEl = swatch.shadowRoot.querySelector('.color-swatch-inner');
    assert.instanceOf(swatchInnerEl, HTMLElement);
    var slotEl = swatch.shadowRoot.querySelector('slot');
    assert.instanceOf(slotEl, HTMLElement);
    if (expected.backgroundColor) {
        assert.strictEqual(swatchInnerEl.style.backgroundColor, expected.backgroundColor, 'The swatch has the correct color');
    }
    if (expected.colorTextInSlot) {
        assert.strictEqual(slotEl.textContent, expected.colorTextInSlot, 'The slot shows the correct default color');
    }
    if (expected.tooltip) {
        assert.strictEqual(swatchEl.getAttribute('title'), expected.tooltip, 'The tooltip is correct');
    }
}
function createSwatch(color, tooltip) {
    var parsedColor = typeof color === 'string' ? _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(color) : color;
    assert.isOk(parsedColor);
    var swatch = new _inline_editor_js__WEBPACK_IMPORTED_MODULE_4__.ColorSwatch.ColorSwatch(tooltip);
    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(swatch);
    swatch.renderColor(parsedColor);
    return swatch;
}
function getClickTarget(swatch) {
    return swatch.shadowRoot.querySelector('.color-swatch-inner');
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.describeWithLocale)('ColorSwatch', function() {
    it('accepts colors as color objects', function() {
        var swatch = createSwatch(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('red'));
        assertSwatch(swatch, {
            backgroundColor: 'red',
            colorTextInSlot: 'red'
        });
        swatch.renderColor(new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Legacy([
            1,
            .5,
            .2,
            .5
        ], "rgba" /* Common.Color.Format.RGBA */ ));
        assertSwatch(swatch, {
            backgroundColor: 'rgba(255, 128, 51, 0.5)',
            colorTextInSlot: 'rgb(255 128 51 / 50%)'
        });
    });
    it('displays a default tooltip', function() {
        var swatch = createSwatch('red');
        assertSwatch(swatch, {
            tooltip: 'Shift-click to change color format'
        });
    });
    it('can display a custom tooltip', function() {
        var swatch = createSwatch('red', 'This is a custom tooltip');
        assertSwatch(swatch, {
            tooltip: 'This is a custom tooltip'
        });
    });
    it('dispatches an event on clicks', function() {
        var swatch = createSwatch('red');
        var target = getClickTarget(swatch);
        var swatchClickEventsReceived = [];
        var onClick = function(e) {
            swatchClickEventsReceived.push(e);
        };
        swatch.addEventListener(_inline_editor_js__WEBPACK_IMPORTED_MODULE_4__.ColorSwatch.ClickEvent.eventName, onClick);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchClickEvent)(target);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchClickEvent)(target);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchClickEvent)(target);
        assert.strictEqual(swatchClickEventsReceived.length, 3, 'The right click events were received');
        swatch.removeEventListener(_inline_editor_js__WEBPACK_IMPORTED_MODULE_4__.ColorSwatch.ClickEvent.eventName, onClick);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchClickEvent)(target);
        assert.strictEqual(swatchClickEventsReceived.length, 3, 'No more click events received after removing listener');
    });
    it('does not dispatch an event on click when it is readonly', function() {
        var swatch = createSwatch('red');
        swatch.setReadonly(true);
        var target = getClickTarget(swatch);
        var swatchClickEventsReceived = [];
        var onClick = function(e) {
            swatchClickEventsReceived.push(e);
        };
        swatch.addEventListener(_inline_editor_js__WEBPACK_IMPORTED_MODULE_4__.ColorSwatch.ClickEvent.eventName, onClick);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchClickEvent)(target);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchClickEvent)(target);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchClickEvent)(target);
        assert.strictEqual(swatchClickEventsReceived.length, 0, 'No click events received for readonly color swatch');
    });
    it('does not dispatch a swatch-click event on shift-click', function() {
        var swatch = createSwatch('red');
        var target = getClickTarget(swatch);
        var swatchClickEventsReceived = [];
        var onClick = function(e) {
            swatchClickEventsReceived.push(e);
        };
        swatch.addEventListener(_inline_editor_js__WEBPACK_IMPORTED_MODULE_4__.ColorSwatch.ClickEvent.eventName, onClick);
        var contextMenu = (0,_testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getMenuForShiftClick)(target);
        assert.strictEqual(swatchClickEventsReceived.length, 0, 'No swatch-click events are received on shift-click');
        swatch.removeEventListener(_inline_editor_js__WEBPACK_IMPORTED_MODULE_4__.ColorSwatch.ClickEvent.eventName, onClick);
        assert.exists(contextMenu);
    });
    it('does not dispatch a formatchanged event on click', function() {
        var swatch = createSwatch('red');
        var target = getClickTarget(swatch);
        var formatChangedEventsReceived = [];
        var onClick = function(e) {
            formatChangedEventsReceived.push(e);
        };
        swatch.addEventListener(_inline_editor_js__WEBPACK_IMPORTED_MODULE_4__.ColorSwatch.ColorChangedEvent.eventName, onClick);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchClickEvent)(target);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchClickEvent)(target);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchClickEvent)(target);
        assert.strictEqual(formatChangedEventsReceived.length, 0, 'No formatchanged events are received on click');
        swatch.removeEventListener(_inline_editor_js__WEBPACK_IMPORTED_MODULE_4__.ColorSwatch.ColorChangedEvent.eventName, onClick);
    });
    it('produces a color conversion menu', function() {
        // Without alpha:
        var swatch = createSwatch('#ff0000');
        var target = getClickTarget(swatch);
        var menu = (0,_testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getMenuForShiftClick)(target);
        assert.deepEqual((0,_testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getMenuItemLabels)(menu.section('legacy')), [
            'red',
            // HEX is skipped because it is the input format
            '#f00',
            'rgb(255 0 0)',
            'hsl(0deg 100% 50%)',
            'hwb(0deg 0% 0%)'
        ]);
        assert.deepEqual((0,_testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getMenuItemLabels)(menu.section('wide')), [
            'lch(54 106.85 40.86)',
            'oklch(0.63 0.26 29.23)',
            'lab(54 80.82 69.9)',
            'oklab(0.63 0.22 0.13)'
        ]);
        var colorFunction = (0,_testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_1__.findMenuItemWithLabel)(menu.section('color-function'), 'color()').defaultSection();
        assert.exists(colorFunction);
        assert.deepEqual((0,_testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getMenuItemLabels)(colorFunction), [
            'color(srgb 1 0 0)',
            'color(srgb-linear 1 0 0)',
            'color(display-p3 0.92 0.2 0.14)',
            'color(a98-rgb 0.86 0 0)',
            'color(prophoto-rgb 0.7 0.28 0.1)',
            'color(rec2020 0.79 0.23 0.07)',
            'color(xyz 0.41 0.21 0.02)',
            'color(xyz-d50 0.44 0.22 0.01)',
            'color(xyz-d65 0.41 0.21 0.02)'
        ]);
        // With alpha:
        swatch.renderColor(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('#ff000080'));
        menu = (0,_testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getMenuForShiftClick)(target);
        assert.deepEqual((0,_testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getMenuItemLabels)(menu.section('legacy')), [
            // HEXA is skipped because it's the input
            'rgb(255 0 0 / 50%)',
            'hsl(0deg 100% 50% / 50.2%)',
            'hwb(0deg 0% 0% / 50.2%)'
        ]);
        assert.deepEqual((0,_testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getMenuItemLabels)(menu.section('wide')), [
            'lch(54 106.85 40.86 / 0.5)',
            'oklch(0.63 0.26 29.23 / 0.5)',
            'lab(54 80.82 69.9 / 0.5)',
            'oklab(0.63 0.22 0.13 / 0.5)'
        ]);
        colorFunction = (0,_testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_1__.findMenuItemWithLabel)(menu.section('color-function'), 'color()').defaultSection();
        assert.exists(colorFunction);
        assert.deepEqual((0,_testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getMenuItemLabels)(colorFunction), [
            'color(srgb 1 0 0 / 0.5)',
            'color(srgb-linear 1 0 0 / 0.5)',
            'color(display-p3 0.92 0.2 0.14 / 0.5)',
            'color(a98-rgb 0.86 0 0 / 0.5)',
            'color(prophoto-rgb 0.7 0.28 0.1 / 0.5)',
            'color(rec2020 0.79 0.23 0.07 / 0.5)',
            'color(xyz 0.41 0.21 0.02 / 0.5)',
            'color(xyz-d50 0.44 0.22 0.01 / 0.5)',
            'color(xyz-d65 0.41 0.21 0.02 / 0.5)'
        ]);
        // With alpha:
        swatch.renderColor(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('lab(54.29 80.82 69.9 / 0.5)'));
        menu = (0,_testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getMenuForShiftClick)(target);
        assert.deepEqual((0,_testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getMenuItemLabels)(menu.section('legacy')), [
            '#ff000080',
            'rgb(255 0 0 / 50%)',
            'hsl(360deg 100% 50% / 50%)',
            'hwb(360deg 0% 0% / 50%)'
        ]);
        assert.deepEqual((0,_testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getMenuItemLabels)(menu.section('wide')), [
            'lch(54 106.85 40.86 / 0.5)',
            'oklch(0.63 0.26 29.23 / 0.5)',
            //  'lab(54.29 80.82 69.9 / 0.5)',
            'oklab(0.63 0.22 0.13 / 0.5)'
        ]);
        colorFunction = (0,_testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_1__.findMenuItemWithLabel)(menu.section('color-function'), 'color()').defaultSection();
        assert.exists(colorFunction);
        assert.deepEqual((0,_testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getMenuItemLabels)(colorFunction), [
            'color(srgb 1 0 0 / 0.5)',
            'color(srgb-linear 1 0 0 / 0.5)',
            'color(display-p3 0.92 0.2 0.14 / 0.5)',
            'color(a98-rgb 0.86 0 0 / 0.5)',
            'color(prophoto-rgb 0.7 0.28 0.1 / 0.5)',
            'color(rec2020 0.79 0.23 0.07 / 0.5)',
            'color(xyz 0.41 0.21 0.02 / 0.5)',
            'color(xyz-d50 0.44 0.22 0.01 / 0.5)',
            'color(xyz-d65 0.41 0.21 0.02 / 0.5)'
        ]);
    });
    it('does not produce a color conversion menu when it is readonly', function() {
        var swatch = createSwatch('#ff0000');
        swatch.setReadonly(true);
        var target = getClickTarget(swatch);
        var menu = (0,_testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getMenuForShiftClick)(target);
        assert.notExists(menu);
    });
}); //# sourceMappingURL=ColorSwatch.test.js.map


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