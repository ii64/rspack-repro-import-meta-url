"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_components_docs_user_agent_client_hints_basic_ts"],{

/***/ "./src/panels/settings/emulation/components/components.ts":
/*!****************************************************************!*\
  !*** ./src/panels/settings/emulation/components/components.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserAgentClientHintsForm: () => (/* reexport module object */ _UserAgentClientHintsForm_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _UserAgentClientHintsForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserAgentClientHintsForm.js */ "./src/panels/settings/emulation/components/UserAgentClientHintsForm.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




/***/ }),

/***/ "./src/ui/components/docs/user_agent_client_hints/basic.ts":
/*!*****************************************************************!*\
  !*** ./src/ui/components/docs/user_agent_client_hints/basic.ts ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _panels_settings_emulation_components_components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../panels/settings/emulation/components/components.js */ "./src/panels/settings/emulation/components/components.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./src/ui/components/helpers/helpers.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



await _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__.ComponentServerSetup.setup();
await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.initializeGlobalVars();
const userAgentClientHintsContainer = document.getElementById('user-agent-client-hints-container');
const userAgentsForm = new _panels_settings_emulation_components_components_js__WEBPACK_IMPORTED_MODULE_0__.UserAgentClientHintsForm.UserAgentClientHintsForm();
userAgentsForm.value = {
    metaData: {
        fullVersion: '',
        platform: '',
        platformVersion: '',
        architecture: '',
        model: '',
        mobile: true,
    },
    showMobileCheckbox: true,
};
userAgentClientHintsContainer?.appendChild(userAgentsForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);