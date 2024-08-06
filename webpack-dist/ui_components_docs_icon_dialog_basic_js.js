"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_docs_icon_dialog_basic_js"],{

/***/ "./ui/components/docs/icon_dialog/basic.js":
/*!*************************************************!*\
  !*** ./ui/components/docs/icon_dialog/basic.js ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../front_end/ui/components/helpers/helpers.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _ui_components_dialogs_dialogs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../ui/components/dialogs/dialogs.js */ "./ui/components/dialogs/dialogs.js");
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
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
    position: "auto" /* Dialogs.Dialog.DialogVerticalPosition.AUTO */,
    horizontalAlignment: "auto" /* Dialogs.Dialog.DialogHorizontalAlignment.AUTO */,
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
//# sourceMappingURL=basic.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);