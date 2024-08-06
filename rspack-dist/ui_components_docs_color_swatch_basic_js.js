"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_docs_color_swatch_basic_js"], {
"./ui/components/docs/color_swatch/basic.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../legacy/components/inline_editor/inline_editor.js */ "./ui/legacy/components/inline_editor/inline_editor.js");
/* harmony import */var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./ui/components/helpers/helpers.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




await _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_3__.ComponentServerSetup.setup();
await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.initializeGlobalVars();
function appendExample(swatch) {
    var _document_querySelector;
    var li = document.createElement('li');
    li.appendChild(swatch);
    (_document_querySelector = document.querySelector('#container')) === null || _document_querySelector === void 0 ? void 0 : _document_querySelector.appendChild(li);
}
// Simple
var component = new _legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_2__.ColorSwatch.ColorSwatch();
component.renderColor(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('#f06'));
appendExample(component);
// No text next to the swatch
component = new _legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_2__.ColorSwatch.ColorSwatch();
component.renderColor(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('gold'));
var content = document.createElement('span');
content.textContent = '';
component.appendChild(content);
appendExample(component);
// Custom content
component = new _legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_2__.ColorSwatch.ColorSwatch();
component.renderColor(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('rebeccapurple'));
content = document.createElement('span');
content.textContent = 'custom content';
component.appendChild(content);
appendExample(component); //# sourceMappingURL=basic.js.map

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

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