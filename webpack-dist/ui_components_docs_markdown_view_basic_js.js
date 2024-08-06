"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_docs_markdown_view_basic_js"],{

/***/ "./ui/components/docs/markdown_view/basic.js":
/*!***************************************************!*\
  !*** ./ui/components/docs/markdown_view/basic.js ***!
  \***************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _third_party_marked_marked_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../third_party/marked/marked.js */ "./third_party/marked/marked.js");
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./ui/components/helpers/helpers.js");
/* harmony import */ var _markdown_view_markdown_view_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../markdown_view/markdown_view.js */ "./ui/components/markdown_view/markdown_view.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




await _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__.ComponentServerSetup.setup();
await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.initializeGlobalVars();
// Register images in the markdown image map.
_markdown_view_markdown_view_js__WEBPACK_IMPORTED_MODULE_3__.MarkdownImagesMap.markdownImages.set('lighthouse-icon', {
    src: '../../Images/lighthouse_logo.svg',
    width: '16px',
    height: '16px',
    isIcon: true,
});
_markdown_view_markdown_view_js__WEBPACK_IMPORTED_MODULE_3__.MarkdownImagesMap.markdownImages.set('baseline', {
    src: '../../Images/align-items-baseline.svg',
    width: '200px',
    height: '200px',
    isIcon: false,
});
// Register a link in the markdown link map.
_markdown_view_markdown_view_js__WEBPACK_IMPORTED_MODULE_3__.MarkdownLinksMap.markdownLinks.set('test-link', 'https://exampleLink.com/');
const component = new _markdown_view_markdown_view_js__WEBPACK_IMPORTED_MODULE_3__.MarkdownView.MarkdownView();
document.getElementById('container')?.appendChild(component);
const markdownAst = _third_party_marked_marked_js__WEBPACK_IMPORTED_MODULE_1__.Marked.lexer(`
Lorem ipsum dolor sit amet, ![icon](lighthouse-icon) consectetur adipiscing elit. [Phasellus tristique](test-link) metus velit, a laoreet sapien ultricies eu. Fusce facilisis, felis id ullamcorper placerat, enim magna porta justo, nec aliquet orci arcu eu velit. Ut quis maximus dolor. Morbi congue tempus porttitor. Duis ut lorem gravida, vehicula mi et, suscipit risus.

* Cras varius cursus eros.
* Mauris non blandit turpis.

Proin posuere varius risus, nec tristique urna elementum ut.

\`\`\`js
console.log('test')
\`\`\`

\`\`\`js
MarkdownView.MarkdownImagesMap.markdownImages.set('lighthouse-icon', {
  src: '../../Images/lighthouse_logo.svg',
  width: '16px',
  height: '16px',
  isIcon: true,
});
MarkdownView.MarkdownImagesMap.markdownImages.set('baseline', {
  src: '../../Images/align-items-baseline.svg',
  width: '200px',
  height: '200px',
  isIcon: false,
});
\`\`\`

![Image](baseline)

\`Cras id elit at erat porttitor elementum\`. Donec purus nulla, suscipit eu hendrerit in, auctor eu erat. Proin ut accumsan mi, rhoncus interdum odio. Etiam dapibus posuere lorem.
`);
component.data = {
    tokens: markdownAst,
};
//# sourceMappingURL=basic.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./ui/components/markdown_view/markdown_view.js":
/*!******************************************************!*\
  !*** ./ui/components/markdown_view/markdown_view.js ***!
  \******************************************************/
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
/* harmony import */ var _CodeBlock_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CodeBlock.js */ "./ui/components/markdown_view/CodeBlock.js");
/* harmony import */ var _MarkdownImage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MarkdownImage.js */ "./ui/components/markdown_view/MarkdownImage.js");
/* harmony import */ var _MarkdownImagesMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MarkdownImagesMap.js */ "./ui/components/markdown_view/MarkdownImagesMap.js");
/* harmony import */ var _MarkdownLink_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MarkdownLink.js */ "./ui/components/markdown_view/MarkdownLink.js");
/* harmony import */ var _MarkdownLinksMap_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MarkdownLinksMap.js */ "./ui/components/markdown_view/MarkdownLinksMap.js");
/* harmony import */ var _MarkdownView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MarkdownView.js */ "./ui/components/markdown_view/MarkdownView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







//# sourceMappingURL=markdown_view.js.map

/***/ })

}]);