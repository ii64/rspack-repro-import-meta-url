"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_components_docs_computed_style_property_traceable_ts"],{

/***/ "./src/ui/components/docs/computed_style_property/traceable.ts":
/*!*********************************************************************!*\
  !*** ./src/ui/components/docs/computed_style_property/traceable.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _panels_elements_components_components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../panels/elements/components/components.js */ "./src/panels/elements/components/components.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

const component = new _panels_elements_components_components_js__WEBPACK_IMPORTED_MODULE_0__.ComputedStyleProperty.ComputedStyleProperty();
document.getElementById('container')?.appendChild(component);
component.innerHTML = `
<span slot="name">display</span>
<span slot="value">grid</span>
  `;
component.traceable = true;
component.inherited = false;


/***/ })

}]);