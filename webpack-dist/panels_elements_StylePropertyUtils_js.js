"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_elements_StylePropertyUtils_js"],{

/***/ "./panels/elements/StylePropertyUtils.js":
/*!***********************************************!*\
  !*** ./panels/elements/StylePropertyUtils.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCssDeclarationAsJavascriptProperty: () => (/* binding */ getCssDeclarationAsJavascriptProperty)
/* harmony export */ });
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getCssDeclarationAsJavascriptProperty(declaration) {
    const { name, value } = declaration;
    const declarationNameAsJs = name.startsWith('--') ? `'${name}'` : name.replace(/-([a-z])/gi, (_str, group) => group.toUpperCase());
    const declarationAsJs = `'${value.replaceAll('\'', '\\\'')}'`;
    return `${declarationNameAsJs}: ${declarationAsJs}`;
}
//# sourceMappingURL=StylePropertyUtils.js.map

/***/ })

}]);