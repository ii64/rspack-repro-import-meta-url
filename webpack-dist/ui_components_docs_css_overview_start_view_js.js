"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_docs_css_overview_start_view_js"],{

/***/ "./panels/css_overview/components/components.js":
/*!******************************************************!*\
  !*** ./panels/css_overview/components/components.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSOverviewStartView: () => (/* reexport module object */ _CSSOverviewStartView_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _CSSOverviewStartView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CSSOverviewStartView.js */ "./panels/css_overview/components/CSSOverviewStartView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


//# sourceMappingURL=components.js.map

/***/ }),

/***/ "./ui/components/docs/css_overview/start_view.js":
/*!*******************************************************!*\
  !*** ./ui/components/docs/css_overview/start_view.js ***!
  \*******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _panels_css_overview_components_components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../panels/css_overview/components/components.js */ "./panels/css_overview/components/components.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./ui/components/helpers/helpers.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



await _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__.ComponentServerSetup.setup();
await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.initializeGlobalVars();
const component = new _panels_css_overview_components_components_js__WEBPACK_IMPORTED_MODULE_0__.CSSOverviewStartView.CSSOverviewStartView();
document.getElementById('container')?.appendChild(component);
//# sourceMappingURL=start_view.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);