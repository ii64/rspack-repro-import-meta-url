"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_docs_panel_feedback_button_js"],{

/***/ "./ui/components/docs/panel_feedback/button.js":
/*!*****************************************************!*\
  !*** ./ui/components/docs/panel_feedback/button.js ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _components_panel_feedback_panel_feedback_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/panel_feedback/panel_feedback.js */ "./ui/components/panel_feedback/panel_feedback.js");
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./ui/components/helpers/helpers.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



await _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__.ComponentServerSetup.setup();
await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.initializeGlobalVars();
const component = new _components_panel_feedback_panel_feedback_js__WEBPACK_IMPORTED_MODULE_1__.FeedbackButton.FeedbackButton();
component.data = {
    feedbackUrl: 'https://www.example.com',
};
document.getElementById('container')?.appendChild(component);
//# sourceMappingURL=button.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);