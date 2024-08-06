"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_markdown_view_CodeBlock_test_js"], {
"./ui/components/markdown_view/CodeBlock.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _markdown_view_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./markdown_view.js */ "./ui/components/markdown_view/markdown_view.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.describeWithEnvironment)('CodeBlock', function() {
    it('copies the code to clipboard', function() {
        var component = new _markdown_view_js__WEBPACK_IMPORTED_MODULE_3__.CodeBlock.CodeBlock();
        component.code = 'test';
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
        var button = component.shadowRoot.querySelector('.copy-button');
        assert.exists(button);
        var clock = sinon.useFakeTimers();
        try {
            var _button_querySelector;
            assert.strictEqual((_button_querySelector = button.querySelector('span')) === null || _button_querySelector === void 0 ? void 0 : _button_querySelector.innerText, 'Copy code');
            var copyText = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance, 'copyText').returns();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(button, {
                bubbles: true,
                composed: true
            });
            assert.isTrue(copyText.calledWith('test'));
            clock.tick(100);
            assert.strictEqual(button.querySelector('span').innerText, 'Copied to clipboard');
            clock.tick(1100);
            assert.strictEqual(button.querySelector('span').innerText, 'Copy code');
        } finally{
            clock.restore();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.resetTestDOM)();
        }
    });
    it('renders no legal notice by default', function() {
        try {
            var component = new _markdown_view_js__WEBPACK_IMPORTED_MODULE_3__.CodeBlock.CodeBlock();
            component.code = 'test';
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
            var notice = component.shadowRoot.querySelector('.notice');
            assert(notice === null, '.notice was found');
        } finally{
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.resetTestDOM)();
        }
    });
    it('renders legal notice if configured', function() {
        try {
            var component = new _markdown_view_js__WEBPACK_IMPORTED_MODULE_3__.CodeBlock.CodeBlock();
            component.code = 'test';
            component.displayNotice = true;
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
            var notice = component.shadowRoot.querySelector('.notice');
            assert.exists(notice);
            assert.strictEqual(notice.innerText, 'Use code snippets with caution');
        } finally{
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.resetTestDOM)();
        }
    });
    it('renders toolbar by default', function() {
        try {
            var component = new _markdown_view_js__WEBPACK_IMPORTED_MODULE_3__.CodeBlock.CodeBlock();
            component.code = 'test';
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
            var toolbar = component.shadowRoot.querySelector('.toolbar');
            assert.exists(toolbar);
        } finally{
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.resetTestDOM)();
        }
    });
    it('renders no toolbar when configured', function() {
        try {
            var component = new _markdown_view_js__WEBPACK_IMPORTED_MODULE_3__.CodeBlock.CodeBlock();
            component.code = 'test';
            component.displayToolbar = false;
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
            var toolbar = component.shadowRoot.querySelector('.toolbar');
            assert(toolbar === null, '.toolbar was found');
        } finally{
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.resetTestDOM)();
        }
    });
}); //# sourceMappingURL=CodeBlock.test.js.map


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