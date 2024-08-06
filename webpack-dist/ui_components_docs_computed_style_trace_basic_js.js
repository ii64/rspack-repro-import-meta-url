"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_docs_computed_style_trace_basic_js"],{

/***/ "./ui/components/docs/computed_style_trace/basic.js":
/*!**********************************************************!*\
  !*** ./ui/components/docs/computed_style_trace/basic.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _panels_elements_components_components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../panels/elements/components/components.js */ "./panels/elements/components/components.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

const component = new _panels_elements_components_components_js__WEBPACK_IMPORTED_MODULE_0__.ComputedStyleTrace.ComputedStyleTrace();
const traceValue = document.createElement('span');
traceValue.textContent = 'block';
traceValue.slot = 'trace-value';
component.appendChild(traceValue);
const traceLink = document.createElement('span');
traceLink.textContent = 'user agent stylesheet';
traceLink.slot = 'trace-link';
component.appendChild(traceLink);
document.getElementById('container')?.appendChild(component);
component.data = {
    selector: 'body',
    active: true,
    onNavigateToSource: () => { },
};
//# sourceMappingURL=basic.js.map

/***/ })

}]);