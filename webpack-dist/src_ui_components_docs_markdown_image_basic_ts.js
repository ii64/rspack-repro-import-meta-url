"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_components_docs_markdown_image_basic_ts"],{

/***/ "./src/ui/components/docs/markdown_image/basic.ts":
/*!********************************************************!*\
  !*** ./src/ui/components/docs/markdown_image/basic.ts ***!
  \********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./src/ui/components/helpers/helpers.ts");
/* harmony import */ var _markdown_view_markdown_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../markdown_view/markdown_view.js */ "./src/ui/components/markdown_view/markdown_view.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



await _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__.ComponentServerSetup.setup();
await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.initializeGlobalVars();
// Adding a couple image keys to the image map.
_markdown_view_markdown_view_js__WEBPACK_IMPORTED_MODULE_2__.MarkdownImagesMap.markdownImages.set('test-icon', {
    src: '../../Images/issue-text-filled.svg',
    isIcon: true,
    width: '20px',
    height: '20px',
});
_markdown_view_markdown_view_js__WEBPACK_IMPORTED_MODULE_2__.MarkdownImagesMap.markdownImages.set('test-image', {
    src: '../../Images/lighthouse_logo.svg',
    width: '200px',
    height: '200px',
    isIcon: false,
});
const iconComponent = new _markdown_view_markdown_view_js__WEBPACK_IMPORTED_MODULE_2__.MarkdownImage.MarkdownImage();
document.getElementById('icon')?.appendChild(iconComponent);
iconComponent.data = {
    key: 'test-icon',
    title: 'Test icon title',
};
const imageComponent = new _markdown_view_markdown_view_js__WEBPACK_IMPORTED_MODULE_2__.MarkdownImage.MarkdownImage();
document.getElementById('image')?.appendChild(imageComponent);
imageComponent.data = {
    key: 'test-image',
    title: 'Test image title',
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/ui/components/markdown_view/markdown_view.ts":
/*!**********************************************************!*\
  !*** ./src/ui/components/markdown_view/markdown_view.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CodeBlock: () => (/* reexport module object */ _CodeBlock_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   MarkdownImage: () => (/* reexport module object */ _MarkdownImage_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   MarkdownImagesMap: () => (/* reexport module object */ _MarkdownImagesMap_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   MarkdownLink: () => (/* reexport module object */ _MarkdownLink_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   MarkdownLinksMap: () => (/* reexport module object */ _MarkdownLinksMap_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   MarkdownView: () => (/* reexport module object */ _MarkdownView_js__WEBPACK_IMPORTED_MODULE_5__)
/* harmony export */ });
/* harmony import */ var _CodeBlock_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CodeBlock.js */ "./src/ui/components/markdown_view/CodeBlock.ts");
/* harmony import */ var _MarkdownImage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MarkdownImage.js */ "./src/ui/components/markdown_view/MarkdownImage.ts");
/* harmony import */ var _MarkdownImagesMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MarkdownImagesMap.js */ "./src/ui/components/markdown_view/MarkdownImagesMap.ts");
/* harmony import */ var _MarkdownLink_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MarkdownLink.js */ "./src/ui/components/markdown_view/MarkdownLink.ts");
/* harmony import */ var _MarkdownLinksMap_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MarkdownLinksMap.js */ "./src/ui/components/markdown_view/MarkdownLinksMap.ts");
/* harmony import */ var _MarkdownView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MarkdownView.js */ "./src/ui/components/markdown_view/MarkdownView.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.









/***/ })

}]);