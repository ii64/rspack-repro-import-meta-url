"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_docs_shortcut_dialog_basic_js"],{

/***/ "./ui/components/docs/shortcut_dialog/basic.js":
/*!*****************************************************!*\
  !*** ./ui/components/docs/shortcut_dialog/basic.js ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../front_end/ui/components/helpers/helpers.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _ui_components_dialogs_dialogs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../ui/components/dialogs/dialogs.js */ "./ui/components/dialogs/dialogs.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

 // eslint-disable-line rulesdir/es_modules_import

await Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../front_end/ui/components/helpers/helpers.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).setup();
await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.initializeGlobalVars();
const shortcutDialog = new _ui_components_dialogs_dialogs_js__WEBPACK_IMPORTED_MODULE_2__.ShortcutDialog.ShortcutDialog();
shortcutDialog.data = {
    shortcuts: [
        {
            title: 'First Shortcut Title',
            bindings: ['Ctrl+E'],
        },
        {
            title: 'Second Shortcut Title',
            bindings: ['Ctrl+Enter', 'F8'],
        },
    ],
};
document.getElementById('container')?.appendChild(shortcutDialog);
//# sourceMappingURL=basic.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);