"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_components_docs_text_editor_basic_ts"],{

/***/ "./src/ui/components/docs/text_editor/basic.ts":
/*!*****************************************************!*\
  !*** ./src/ui/components/docs/text_editor/basic.ts ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./src/ui/components/helpers/helpers.ts");
/* harmony import */ var _text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../text_editor/text_editor.js */ "./src/ui/components/text_editor/text_editor.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



await _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__.ComponentServerSetup.setup();
await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.initializeGlobalVars();
const component = new _text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_2__.TextEditor.TextEditor();
document.getElementById('container')?.appendChild(component);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);