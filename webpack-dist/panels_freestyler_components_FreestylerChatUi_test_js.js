"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_freestyler_components_FreestylerChatUi_test_js"],{

/***/ "./panels/freestyler/components/FreestylerChatUi.test.js":
/*!***************************************************************!*\
  !*** ./panels/freestyler/components/FreestylerChatUi.test.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _third_party_marked_marked_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../third_party/marked/marked.js */ "./third_party/marked/marked.js");
/* harmony import */ var _ui_components_markdown_view_markdown_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/markdown_view/markdown_view.js */ "./ui/components/markdown_view/markdown_view.js");
/* harmony import */ var _freestyler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../freestyler.js */ "./panels/freestyler/freestyler.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




const { MarkdownRendererWithCodeBlock } = _freestyler_js__WEBPACK_IMPORTED_MODULE_3__.FOR_TEST;
describe('FreestylerChatUi', () => {
    (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithEnvironment)('MarkdownRendererWithCodeBlock', () => {
        it('should transform code token for multiline code blocks with `css` language written in the first line', () => {
            const renderer = new MarkdownRendererWithCodeBlock();
            const templateForTokenStub = sinon.stub(_ui_components_markdown_view_markdown_view_js__WEBPACK_IMPORTED_MODULE_2__.MarkdownView.MarkdownInsightRenderer.prototype, 'templateForToken');
            const codeBlock = `\`\`\`
css
* {
  color: red;
}
\`\`\``;
            const codeToken = _third_party_marked_marked_js__WEBPACK_IMPORTED_MODULE_1__.Marked.lexer(codeBlock)[0];
            assert.isEmpty(codeToken.lang);
            renderer.renderToken(codeToken);
            sinon.assert.calledWith(templateForTokenStub, sinon.match({
                lang: 'css',
                text: `* {
  color: red;
}`,
            }));
        });
    });
});
//# sourceMappingURL=FreestylerChatUi.test.js.map

/***/ }),

/***/ "./panels/freestyler/freestyler.js":
/*!*****************************************!*\
  !*** ./panels/freestyler/freestyler.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionDelegate: () => (/* reexport safe */ _FreestylerPanel_js__WEBPACK_IMPORTED_MODULE_3__.ActionDelegate),
/* harmony export */   DOGFOOD_INFO: () => (/* reexport safe */ _components_FreestylerChatUi_js__WEBPACK_IMPORTED_MODULE_2__.DOGFOOD_INFO),
/* harmony export */   ExecutionError: () => (/* reexport safe */ _FreestylerEvaluateAction_js__WEBPACK_IMPORTED_MODULE_0__.ExecutionError),
/* harmony export */   FIX_THIS_ISSUE_PROMPT: () => (/* reexport safe */ _FreestylerAgent_js__WEBPACK_IMPORTED_MODULE_4__.FIX_THIS_ISSUE_PROMPT),
/* harmony export */   FOR_TEST: () => (/* reexport safe */ _components_FreestylerChatUi_js__WEBPACK_IMPORTED_MODULE_2__.FOR_TEST),
/* harmony export */   FreestylerAgent: () => (/* reexport safe */ _FreestylerAgent_js__WEBPACK_IMPORTED_MODULE_4__.FreestylerAgent),
/* harmony export */   FreestylerChatUi: () => (/* reexport safe */ _components_FreestylerChatUi_js__WEBPACK_IMPORTED_MODULE_2__.FreestylerChatUi),
/* harmony export */   FreestylerEvaluateAction: () => (/* reexport safe */ _FreestylerEvaluateAction_js__WEBPACK_IMPORTED_MODULE_0__.FreestylerEvaluateAction),
/* harmony export */   FreestylerPanel: () => (/* reexport safe */ _FreestylerPanel_js__WEBPACK_IMPORTED_MODULE_3__.FreestylerPanel),
/* harmony export */   ProvideFeedback: () => (/* reexport safe */ _components_ProvideFeedback_js__WEBPACK_IMPORTED_MODULE_1__.ProvideFeedback),
/* harmony export */   SideEffectError: () => (/* reexport safe */ _FreestylerEvaluateAction_js__WEBPACK_IMPORTED_MODULE_0__.SideEffectError),
/* harmony export */   Step: () => (/* reexport safe */ _FreestylerAgent_js__WEBPACK_IMPORTED_MODULE_4__.Step)
/* harmony export */ });
/* harmony import */ var _FreestylerEvaluateAction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FreestylerEvaluateAction.js */ "./panels/freestyler/FreestylerEvaluateAction.js");
/* harmony import */ var _components_ProvideFeedback_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ProvideFeedback.js */ "./panels/freestyler/components/ProvideFeedback.js");
/* harmony import */ var _components_FreestylerChatUi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/FreestylerChatUi.js */ "./panels/freestyler/components/FreestylerChatUi.js");
/* harmony import */ var _FreestylerPanel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FreestylerPanel.js */ "./panels/freestyler/FreestylerPanel.js");
/* harmony import */ var _FreestylerAgent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FreestylerAgent.js */ "./panels/freestyler/FreestylerAgent.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





//# sourceMappingURL=freestyler.js.map

/***/ })

}]);