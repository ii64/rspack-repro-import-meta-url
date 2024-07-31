"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_components_docs_freestyler_basic_ts"],{

/***/ "./src/panels/freestyler/freestyler.ts":
/*!*********************************************!*\
  !*** ./src/panels/freestyler/freestyler.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionDelegate: () => (/* reexport safe */ _FreestylerPanel_js__WEBPACK_IMPORTED_MODULE_3__.ActionDelegate),
/* harmony export */   ChatMessageEntity: () => (/* reexport safe */ _components_FreestylerChatUi_js__WEBPACK_IMPORTED_MODULE_2__.ChatMessageEntity),
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
/* harmony export */   State: () => (/* reexport safe */ _components_FreestylerChatUi_js__WEBPACK_IMPORTED_MODULE_2__.State),
/* harmony export */   Step: () => (/* reexport safe */ _FreestylerAgent_js__WEBPACK_IMPORTED_MODULE_4__.Step)
/* harmony export */ });
/* harmony import */ var _FreestylerEvaluateAction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FreestylerEvaluateAction.js */ "./src/panels/freestyler/FreestylerEvaluateAction.ts");
/* harmony import */ var _components_ProvideFeedback_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ProvideFeedback.js */ "./src/panels/freestyler/components/ProvideFeedback.ts");
/* harmony import */ var _components_FreestylerChatUi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/FreestylerChatUi.js */ "./src/panels/freestyler/components/FreestylerChatUi.ts");
/* harmony import */ var _FreestylerPanel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FreestylerPanel.js */ "./src/panels/freestyler/FreestylerPanel.ts");
/* harmony import */ var _FreestylerAgent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FreestylerAgent.js */ "./src/panels/freestyler/FreestylerAgent.ts");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







/***/ }),

/***/ "./src/ui/components/docs/freestyler/basic.ts":
/*!****************************************************!*\
  !*** ./src/ui/components/docs/freestyler/basic.ts ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _panels_freestyler_freestyler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../panels/freestyler/freestyler.js */ "./src/panels/freestyler/freestyler.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./src/ui/components/helpers/helpers.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




await _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_3__.ComponentServerSetup.setup();
await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.initializeGlobalVars();
const noop = () => { };
const messages = [
    {
        entity: _panels_freestyler_freestyler_js__WEBPACK_IMPORTED_MODULE_1__.ChatMessageEntity.USER,
        text: 'Explain the line wrapping behavior of this element.',
    },
    {
        entity: _panels_freestyler_freestyler_js__WEBPACK_IMPORTED_MODULE_1__.ChatMessageEntity.MODEL,
        suggestingFix: true,
        steps: [
            {
                'step': _panels_freestyler_freestyler_js__WEBPACK_IMPORTED_MODULE_1__.Step.THOUGHT,
                'text': 'I need to check the element\'s `white-space` and `overflow-wrap` properties to understand its line wrapping behavior.',
            },
            {
                'step': _panels_freestyler_freestyler_js__WEBPACK_IMPORTED_MODULE_1__.Step.ACTION,
                'code': 'const data = {\n  whiteSpace: window.getComputedStyle($0).whiteSpace,\n  overflowWrap: window.getComputedStyle($0).overflowWrap\n};',
                'output': '{"whiteSpace":"break-spaces","overflowWrap":"anywhere"}',
                'rpcId': -5144323002891039217,
            },
            {
                'step': _panels_freestyler_freestyler_js__WEBPACK_IMPORTED_MODULE_1__.Step.ANSWER,
                'text': '# Explanation\n\n## Before\n\nA little bit text here\n\n## Next\n\nThe element\'s line wrapping behavior is determined by the following CSS properties:\n\n* **`white-space: break-spaces;`**: This property tells the browser to preserve spaces and newlines within the text and to break lines at these points, as well as at normal word boundaries.\n\n* **`overflow-wrap: anywhere;`**: This property allows the browser to break lines within words if necessary to prevent overflow. This is useful for long words or URLs that might otherwise extend beyond the container\'s width.\n\nHere\'s an example of how these properties work together:\n\n\n`````\ncss\n.element {\n  white-space: break-spaces;\n  overflow-wrap: anywhere;\n}\n`````\n\n\nWith these properties, the text within the element will wrap at spaces, newlines, and within words if necessary to fit within the container.',
                'rpcId': -5412527540357623608,
            },
        ],
    },
];
const component = new _panels_freestyler_freestyler_js__WEBPACK_IMPORTED_MODULE_1__.FreestylerChatUi({
    onTextSubmit: noop,
    onInspectElementClick: noop,
    onFeedbackSubmit: noop,
    onAcceptConsentClick: noop,
    onCancelClick: noop,
    onFixThisIssueClick: noop,
    inspectElementToggled: false,
    state: _panels_freestyler_freestyler_js__WEBPACK_IMPORTED_MODULE_1__.State.CHAT_VIEW,
    aidaAvailability: _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.AidaClient.AidaAvailability.AVAILABLE,
    messages,
    selectedNode: {},
    isLoading: false,
    canShowFeedbackForm: false,
});
document.getElementById('container')?.appendChild(component);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);