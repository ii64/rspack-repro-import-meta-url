"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_docs_recorder_split_view_basic_js"],{

/***/ "./ui/components/docs/recorder_split_view/basic.js":
/*!*********************************************************!*\
  !*** ./ui/components/docs/recorder_split_view/basic.js ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _panels_recorder_components_components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../panels/recorder/components/components.js */ "./panels/recorder/components/components.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../front_end/ui/components/helpers/helpers.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


 // eslint-disable-line rulesdir/es_modules_import
await Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../front_end/ui/components/helpers/helpers.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).setup();
await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.initializeGlobalVars();
document.getElementById('container').innerHTML = `
    <devtools-split-view>
        <div slot="main" style="padding: 10px;">
            Left
        </div>
        <div slot="sidebar" style="padding: 10px;">
            Sidebar
        </div>
    </devtools-split-view>
`;
//# sourceMappingURL=basic.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);