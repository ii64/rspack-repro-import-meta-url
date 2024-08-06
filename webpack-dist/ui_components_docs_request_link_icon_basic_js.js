"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_docs_request_link_icon_basic_js"],{

/***/ "./ui/components/docs/request_link_icon/basic.js":
/*!*******************************************************!*\
  !*** ./ui/components/docs/request_link_icon/basic.js ***!
  \*******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./ui/components/helpers/helpers.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


await _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__.ComponentServerSetup.setup();
await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.initializeGlobalVars();
const RequestLinkIcon = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../ui/components/request_link_icon/request_link_icon.js */ "./ui/components/request_link_icon/request_link_icon.js"));
function appendComponent(data) {
    const component = new RequestLinkIcon.RequestLinkIcon.RequestLinkIcon();
    component.data = data;
    document.getElementById('container')?.appendChild(component);
}
appendComponent({});
//# sourceMappingURL=basic.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);