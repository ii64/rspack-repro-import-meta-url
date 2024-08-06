"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_docs_user_agent_client_hints_basic_js"], {
"./panels/settings/emulation/components/components.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  UserAgentClientHintsForm: function() { return /* reexport module object */ _UserAgentClientHintsForm_js__WEBPACK_IMPORTED_MODULE_0__; }
});
/* harmony import */var _UserAgentClientHintsForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserAgentClientHintsForm.js */ "./panels/settings/emulation/components/UserAgentClientHintsForm.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

 //# sourceMappingURL=components.js.map


}),
"./ui/components/docs/user_agent_client_hints/basic.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _panels_settings_emulation_components_components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../panels/settings/emulation/components/components.js */ "./panels/settings/emulation/components/components.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./ui/components/helpers/helpers.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



await _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__.ComponentServerSetup.setup();
await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.initializeGlobalVars();
var userAgentClientHintsContainer = document.getElementById('user-agent-client-hints-container');
var userAgentsForm = new _panels_settings_emulation_components_components_js__WEBPACK_IMPORTED_MODULE_0__.UserAgentClientHintsForm.UserAgentClientHintsForm();
userAgentsForm.value = {
    metaData: {
        fullVersion: '',
        platform: '',
        platformVersion: '',
        architecture: '',
        model: '',
        mobile: true
    },
    showMobileCheckbox: true
};
userAgentClientHintsContainer === null || userAgentClientHintsContainer === void 0 ? void 0 : userAgentClientHintsContainer.appendChild(userAgentsForm); //# sourceMappingURL=basic.js.map

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

}),

}]);