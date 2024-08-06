"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_docs_text_editor_basic_js"],{

/***/ "./ui/components/docs/text_editor/basic.js":
/*!*************************************************!*\
  !*** ./ui/components/docs/text_editor/basic.js ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./ui/components/helpers/helpers.js");
/* harmony import */ var _text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../text_editor/text_editor.js */ "./ui/components/text_editor/text_editor.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



await _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__.ComponentServerSetup.setup();
await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.initializeGlobalVars();
const component = new _text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_2__.TextEditor.TextEditor();
document.getElementById('container')?.appendChild(component);
//# sourceMappingURL=basic.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);