"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_docs_markdown_link_basic_js"], {
"./ui/components/docs/markdown_link/basic.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./ui/components/helpers/helpers.js");
/* harmony import */var _markdown_view_markdown_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../markdown_view/markdown_view.js */ "./ui/components/markdown_view/markdown_view.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var _document_getElementById;



await _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__.ComponentServerSetup.setup();
await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.initializeGlobalVars();
_markdown_view_markdown_view_js__WEBPACK_IMPORTED_MODULE_2__.MarkdownLinksMap.markdownLinks.set('textLink', 'https://example.com/');
var link = new _markdown_view_markdown_view_js__WEBPACK_IMPORTED_MODULE_2__.MarkdownLink.MarkdownLink();
(_document_getElementById = document.getElementById('target')) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.appendChild(link);
link.data = {
    key: 'textLink',
    title: 'Test link title'
}; //# sourceMappingURL=basic.js.map

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

}),
"./ui/components/markdown_view/markdown_view.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CodeBlock: function() { return /* reexport module object */ _CodeBlock_js__WEBPACK_IMPORTED_MODULE_0__; },
  MarkdownImage: function() { return /* reexport module object */ _MarkdownImage_js__WEBPACK_IMPORTED_MODULE_1__; },
  MarkdownImagesMap: function() { return /* reexport module object */ _MarkdownImagesMap_js__WEBPACK_IMPORTED_MODULE_2__; },
  MarkdownLink: function() { return /* reexport module object */ _MarkdownLink_js__WEBPACK_IMPORTED_MODULE_3__; },
  MarkdownLinksMap: function() { return /* reexport module object */ _MarkdownLinksMap_js__WEBPACK_IMPORTED_MODULE_4__; },
  MarkdownView: function() { return /* reexport module object */ _MarkdownView_js__WEBPACK_IMPORTED_MODULE_5__; }
});
/* harmony import */var _CodeBlock_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CodeBlock.js */ "./ui/components/markdown_view/CodeBlock.js");
/* harmony import */var _MarkdownImage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MarkdownImage.js */ "./ui/components/markdown_view/MarkdownImage.js");
/* harmony import */var _MarkdownImagesMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MarkdownImagesMap.js */ "./ui/components/markdown_view/MarkdownImagesMap.js");
/* harmony import */var _MarkdownLink_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MarkdownLink.js */ "./ui/components/markdown_view/MarkdownLink.js");
/* harmony import */var _MarkdownLinksMap_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MarkdownLinksMap.js */ "./ui/components/markdown_view/MarkdownLinksMap.js");
/* harmony import */var _MarkdownView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MarkdownView.js */ "./ui/components/markdown_view/MarkdownView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






 //# sourceMappingURL=markdown_view.js.map


}),

}]);