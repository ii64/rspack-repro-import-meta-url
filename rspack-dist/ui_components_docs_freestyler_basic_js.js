"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_docs_freestyler_basic_js"], {
"./panels/freestyler/freestyler.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ActionDelegate: function() { return /* reexport safe */ _FreestylerPanel_js__WEBPACK_IMPORTED_MODULE_3__.ActionDelegate; },
  DOGFOOD_INFO: function() { return /* reexport safe */ _components_FreestylerChatUi_js__WEBPACK_IMPORTED_MODULE_2__.DOGFOOD_INFO; },
  ExecutionError: function() { return /* reexport safe */ _FreestylerEvaluateAction_js__WEBPACK_IMPORTED_MODULE_0__.ExecutionError; },
  FIX_THIS_ISSUE_PROMPT: function() { return /* reexport safe */ _FreestylerAgent_js__WEBPACK_IMPORTED_MODULE_4__.FIX_THIS_ISSUE_PROMPT; },
  FOR_TEST: function() { return /* reexport safe */ _components_FreestylerChatUi_js__WEBPACK_IMPORTED_MODULE_2__.FOR_TEST; },
  FreestylerAgent: function() { return /* reexport safe */ _FreestylerAgent_js__WEBPACK_IMPORTED_MODULE_4__.FreestylerAgent; },
  FreestylerChatUi: function() { return /* reexport safe */ _components_FreestylerChatUi_js__WEBPACK_IMPORTED_MODULE_2__.FreestylerChatUi; },
  FreestylerEvaluateAction: function() { return /* reexport safe */ _FreestylerEvaluateAction_js__WEBPACK_IMPORTED_MODULE_0__.FreestylerEvaluateAction; },
  FreestylerPanel: function() { return /* reexport safe */ _FreestylerPanel_js__WEBPACK_IMPORTED_MODULE_3__.FreestylerPanel; },
  ProvideFeedback: function() { return /* reexport safe */ _components_ProvideFeedback_js__WEBPACK_IMPORTED_MODULE_1__.ProvideFeedback; },
  SideEffectError: function() { return /* reexport safe */ _FreestylerEvaluateAction_js__WEBPACK_IMPORTED_MODULE_0__.SideEffectError; },
  Step: function() { return /* reexport safe */ _FreestylerAgent_js__WEBPACK_IMPORTED_MODULE_4__.Step; }
});
/* harmony import */var _FreestylerEvaluateAction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FreestylerEvaluateAction.js */ "./panels/freestyler/FreestylerEvaluateAction.js");
/* harmony import */var _components_ProvideFeedback_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ProvideFeedback.js */ "./panels/freestyler/components/ProvideFeedback.js");
/* harmony import */var _components_FreestylerChatUi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/FreestylerChatUi.js */ "./panels/freestyler/components/FreestylerChatUi.js");
/* harmony import */var _FreestylerPanel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FreestylerPanel.js */ "./panels/freestyler/FreestylerPanel.js");
/* harmony import */var _FreestylerAgent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FreestylerAgent.js */ "./panels/freestyler/FreestylerAgent.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




 //# sourceMappingURL=freestyler.js.map


}),
"./ui/components/docs/freestyler/basic.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _panels_freestyler_freestyler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../panels/freestyler/freestyler.js */ "./panels/freestyler/freestyler.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./ui/components/helpers/helpers.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var _document_getElementById;




await _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_3__.ComponentServerSetup.setup();
await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.initializeGlobalVars();
var noop = function() {};
var messages = [
    {
        entity: "user" /* Freestyler.ChatMessageEntity.USER */ ,
        text: 'Explain the line wrapping behavior of this element.'
    },
    {
        entity: "model" /* Freestyler.ChatMessageEntity.MODEL */ ,
        suggestingFix: true,
        steps: [
            {
                'step': _panels_freestyler_freestyler_js__WEBPACK_IMPORTED_MODULE_1__.Step.THOUGHT,
                'text': 'I need to check the element\'s `white-space` and `overflow-wrap` properties to understand its line wrapping behavior.'
            },
            {
                'step': _panels_freestyler_freestyler_js__WEBPACK_IMPORTED_MODULE_1__.Step.ACTION,
                'code': 'const data = {\n  whiteSpace: window.getComputedStyle($0).whiteSpace,\n  overflowWrap: window.getComputedStyle($0).overflowWrap\n};',
                'output': '{"whiteSpace":"break-spaces","overflowWrap":"anywhere"}',
                'rpcId': -5144323002891039217
            },
            {
                'step': _panels_freestyler_freestyler_js__WEBPACK_IMPORTED_MODULE_1__.Step.ANSWER,
                'text': '# Explanation\n\n## Before\n\nA little bit text here\n\n## Next\n\nThe element\'s line wrapping behavior is determined by the following CSS properties:\n\n* **`white-space: break-spaces;`**: This property tells the browser to preserve spaces and newlines within the text and to break lines at these points, as well as at normal word boundaries.\n\n* **`overflow-wrap: anywhere;`**: This property allows the browser to break lines within words if necessary to prevent overflow. This is useful for long words or URLs that might otherwise extend beyond the container\'s width.\n\nHere\'s an example of how these properties work together:\n\n\n`````\ncss\n.element {\n  white-space: break-spaces;\n  overflow-wrap: anywhere;\n}\n`````\n\n\nWith these properties, the text within the element will wrap at spaces, newlines, and within words if necessary to fit within the container.',
                'rpcId': -5412527540357623608
            }
        ]
    }
];
var component = new _panels_freestyler_freestyler_js__WEBPACK_IMPORTED_MODULE_1__.FreestylerChatUi({
    onTextSubmit: noop,
    onInspectElementClick: noop,
    onFeedbackSubmit: noop,
    onAcceptConsentClick: noop,
    onCancelClick: noop,
    onFixThisIssueClick: noop,
    inspectElementToggled: false,
    state: "chat-view" /* Freestyler.State.CHAT_VIEW */ ,
    aidaAvailability: _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.AidaClient.AidaAvailability.AVAILABLE,
    messages: messages,
    selectedNode: {},
    isLoading: false,
    canShowFeedbackForm: false
});
(_document_getElementById = document.getElementById('container')) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.appendChild(component); //# sourceMappingURL=basic.js.map

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

}),

}]);