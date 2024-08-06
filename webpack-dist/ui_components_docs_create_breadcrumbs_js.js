"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_docs_create_breadcrumbs_js"],{

/***/ "./ui/components/docs/create_breadcrumbs.js":
/*!**************************************************!*\
  !*** ./ui/components/docs/create_breadcrumbs.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function init() {
    const container = document.createElement('ul');
    // clang-format off
    // eslint-disable-next-line rulesdir/ban_a_tags_in_lit_html
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `

  <style>
    .docs-breadcrumbs {
      display: flex;
      list-style: none;
      position: fixed;
      background: rgb(255 255 255 / .8);
      padding: 5px;
      bottom: 0;
      left: 10px;
      width: 300px;
    }

    .docs-breadcrumbs li a {
      display: block;
      padding: 10px;
      font-size: 16px;
    }

    .docs-breadcrumbs span {
      font-size: 20px;
    }
  </style>

  <ul class="docs-breadcrumbs component-docs-ui">
    <li><a href="/">Index</a></li>
    <li><a href=".">All component examples</a></li>
  </ul>`, container);
    // clang-format on
    document.body.appendChild(container);
}
//# sourceMappingURL=create_breadcrumbs.js.map

/***/ })

}]);