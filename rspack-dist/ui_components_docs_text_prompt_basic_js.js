"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_docs_text_prompt_basic_js"], {
"./ui/components/docs/text_prompt/basic.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./ui/components/helpers/helpers.js");
/* harmony import */var _text_prompt_text_prompt_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../text_prompt/text_prompt.js */ "./ui/components/text_prompt/text_prompt.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var _document_getElementById;



await _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__.ComponentServerSetup.setup();
await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.initializeGlobalVars();
var textPrompt = new _text_prompt_text_prompt_js__WEBPACK_IMPORTED_MODULE_2__.TextPrompt.TextPrompt();
(_document_getElementById = document.getElementById('container')) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.appendChild(textPrompt);
textPrompt.data = {
    ariaLabel: 'Quick open prompt',
    prefix: 'Open',
    suggestion: 'File'
}; //# sourceMappingURL=basic.js.map

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

}),

}]);