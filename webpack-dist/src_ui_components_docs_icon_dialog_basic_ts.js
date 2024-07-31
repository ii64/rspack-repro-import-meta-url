"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_components_docs_icon_dialog_basic_ts"],{

/***/ "./src/ui/components/docs/icon_dialog/basic.ts":
/*!*****************************************************!*\
  !*** ./src/ui/components/docs/icon_dialog/basic.ts ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../front_end/ui/components/helpers/helpers.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _ui_components_dialogs_dialogs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../ui/components/dialogs/dialogs.js */ "./src/ui/components/dialogs/dialogs.ts");
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

 // eslint-disable-line rulesdir/es_modules_import


await Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../front_end/ui/components/helpers/helpers.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).setup();
await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.initializeGlobalVars();
// Disabled until https://crbug.com/1079231 is fixed.
// clang-format off
const iconDialog = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `
Hello...

<${_ui_components_dialogs_dialogs_js__WEBPACK_IMPORTED_MODULE_2__.IconDialog.IconDialog.litTagName}
  .data=${{
    iconData: {
        iconName: 'info',
        color: 'var(--icon-default-hover)',
        width: '16px',
        height: '16px',
    },
    closeButton: true,
    position: _ui_components_dialogs_dialogs_js__WEBPACK_IMPORTED_MODULE_2__.Dialog.DialogVerticalPosition.AUTO,
    horizontalAlignment: _ui_components_dialogs_dialogs_js__WEBPACK_IMPORTED_MODULE_2__.Dialog.DialogHorizontalAlignment.AUTO,
    closeOnESC: true,
    closeOnScroll: false,
}}
>
  <div>
    <h2>Hello world!</h2>
    <div>
      This is a dialog describing some additional information.
    </div>
  </div>
</${_ui_components_dialogs_dialogs_js__WEBPACK_IMPORTED_MODULE_2__.IconDialog.IconDialog.litTagName}>
`;
// clang-format on
const container = document.getElementById('container');
_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.render(iconDialog, container);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);