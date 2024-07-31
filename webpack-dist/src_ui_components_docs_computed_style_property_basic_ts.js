"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_components_docs_computed_style_property_basic_ts"],{

/***/ "./src/ui/components/docs/computed_style_property/basic.ts":
/*!*****************************************************************!*\
  !*** ./src/ui/components/docs/computed_style_property/basic.ts ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _panels_elements_components_components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../panels/elements/components/components.js */ "./src/panels/elements/components/components.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.initializeGlobalVars();
const component = new _panels_elements_components_components_js__WEBPACK_IMPORTED_MODULE_0__.ComputedStyleProperty.ComputedStyleProperty();
document.getElementById('container')?.appendChild(component);
component.innerHTML = `
<span slot="name">display</span>
<span slot="value">block</span>
  `;
component.traceable = false;
component.inherited = true;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);