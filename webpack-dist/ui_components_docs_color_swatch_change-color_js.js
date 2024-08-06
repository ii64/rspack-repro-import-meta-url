"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_docs_color_swatch_change-color_js"],{

/***/ "./ui/components/docs/color_swatch/change-color.js":
/*!*********************************************************!*\
  !*** ./ui/components/docs/color_swatch/change-color.js ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../legacy/components/inline_editor/inline_editor.js */ "./ui/legacy/components/inline_editor/inline_editor.js");
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./ui/components/helpers/helpers.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




const container = document.querySelector('#container');
const picker = document.querySelector('#picker');
await _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_3__.ComponentServerSetup.setup();
await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.initializeGlobalVars();
const component = new _legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_2__.ColorSwatch.ColorSwatch();
document.getElementById('container')?.appendChild(component);
component.renderColor(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('#f06'));
container?.insertBefore(component, picker);
picker?.addEventListener('input', e => {
    const color = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(e.target.value);
    if (color) {
        component.renderColor(color);
    }
});
component.addEventListener(_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_2__.ColorSwatch.ClickEvent.eventName, () => picker?.click());
//# sourceMappingURL=change-color.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);