"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_docs_linkifier_simple-url_js"],{

/***/ "./ui/components/docs/linkifier/simple-url.js":
/*!****************************************************!*\
  !*** ./ui/components/docs/linkifier/simple-url.js ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./ui/components/helpers/helpers.js");
/* harmony import */ var _linkifier_linkifier_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../linkifier/linkifier.js */ "./ui/components/linkifier/linkifier.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


await _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ComponentServerSetup.setup();
const link = new _linkifier_linkifier_js__WEBPACK_IMPORTED_MODULE_1__.Linkifier.Linkifier();
link.data = {
    url: 'example.com',
    lineNumber: 11,
    columnNumber: 1,
};
const container = document.getElementById('container');
container?.addEventListener('linkifieractivated', (event) => {
    const data = JSON.stringify(event.data, null, 2);
    alert(`Linkifier click: ${data}`);
});
container?.appendChild(link);
//# sourceMappingURL=simple-url.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);