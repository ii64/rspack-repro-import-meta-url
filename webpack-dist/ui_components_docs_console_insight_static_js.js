"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_docs_console_insight_static_js"],{

/***/ "./panels/explain/ActionDelegate.js":
/*!******************************************!*\
  !*** ./panels/explain/ActionDelegate.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionDelegate: () => (/* binding */ ActionDelegate)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _console_console_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../console/console.js */ "./panels/console/console.js");
/* harmony import */ var _components_ConsoleInsight_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ConsoleInsight.js */ "./panels/explain/components/ConsoleInsight.js");
/* harmony import */ var _PromptBuilder_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PromptBuilder.js */ "./panels/explain/PromptBuilder.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




class ActionDelegate {
    handleAction(context, actionId) {
        switch (actionId) {
            case 'explain.console-message.context':
            case 'explain.console-message.context.error':
            case 'explain.console-message.context.warning':
            case 'explain.console-message.context.other':
            case 'explain.console-message.hover': {
                const consoleViewMessage = context.flavor(_console_console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleViewMessage.ConsoleViewMessage);
                if (consoleViewMessage) {
                    if (actionId.startsWith('explain.console-message.context')) {
                        _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.Action.InsightRequestedViaContextMenu);
                    }
                    else if (actionId === 'explain.console-message.hover') {
                        _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.Action.InsightRequestedViaHoverButton);
                    }
                    const promptBuilder = new _PromptBuilder_js__WEBPACK_IMPORTED_MODULE_3__.PromptBuilder(consoleViewMessage);
                    const aidaClient = new _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.AidaClient.AidaClient();
                    void _components_ConsoleInsight_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleInsight.create(promptBuilder, aidaClient).then(insight => {
                        consoleViewMessage.setInsight(insight);
                    });
                    return true;
                }
                return false;
            }
        }
        return false;
    }
}
//# sourceMappingURL=ActionDelegate.js.map

/***/ }),

/***/ "./panels/explain/explain.js":
/*!***********************************!*\
  !*** ./panels/explain/explain.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionDelegate: () => (/* reexport safe */ _ActionDelegate_js__WEBPACK_IMPORTED_MODULE_1__.ActionDelegate),
/* harmony export */   CloseEvent: () => (/* reexport safe */ _components_ConsoleInsight_js__WEBPACK_IMPORTED_MODULE_0__.CloseEvent),
/* harmony export */   ConsoleInsight: () => (/* reexport safe */ _components_ConsoleInsight_js__WEBPACK_IMPORTED_MODULE_0__.ConsoleInsight),
/* harmony export */   PromptBuilder: () => (/* reexport safe */ _PromptBuilder_js__WEBPACK_IMPORTED_MODULE_2__.PromptBuilder),
/* harmony export */   SourceType: () => (/* reexport safe */ _PromptBuilder_js__WEBPACK_IMPORTED_MODULE_2__.SourceType),
/* harmony export */   allowHeader: () => (/* reexport safe */ _PromptBuilder_js__WEBPACK_IMPORTED_MODULE_2__.allowHeader),
/* harmony export */   formatConsoleMessage: () => (/* reexport safe */ _PromptBuilder_js__WEBPACK_IMPORTED_MODULE_2__.formatConsoleMessage),
/* harmony export */   formatNetworkRequest: () => (/* reexport safe */ _PromptBuilder_js__WEBPACK_IMPORTED_MODULE_2__.formatNetworkRequest),
/* harmony export */   formatRelatedCode: () => (/* reexport safe */ _PromptBuilder_js__WEBPACK_IMPORTED_MODULE_2__.formatRelatedCode),
/* harmony export */   formatStackTrace: () => (/* reexport safe */ _PromptBuilder_js__WEBPACK_IMPORTED_MODULE_2__.formatStackTrace),
/* harmony export */   lineWhitespace: () => (/* reexport safe */ _PromptBuilder_js__WEBPACK_IMPORTED_MODULE_2__.lineWhitespace)
/* harmony export */ });
/* harmony import */ var _components_ConsoleInsight_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ConsoleInsight.js */ "./panels/explain/components/ConsoleInsight.js");
/* harmony import */ var _ActionDelegate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActionDelegate.js */ "./panels/explain/ActionDelegate.js");
/* harmony import */ var _PromptBuilder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PromptBuilder.js */ "./panels/explain/PromptBuilder.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



//# sourceMappingURL=explain.js.map

/***/ }),

/***/ "./ui/components/docs/console_insight/static.js":
/*!******************************************************!*\
  !*** ./ui/components/docs/console_insight/static.js ***!
  \******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _panels_explain_explain_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../panels/explain/explain.js */ "./panels/explain/explain.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./ui/components/helpers/helpers.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




await _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_3__.ComponentServerSetup.setup();
await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.initializeGlobalVars();
const ConsoleInsight = _panels_explain_explain_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleInsight;
const component = new ConsoleInsight({
    getSearchQuery() {
        return '';
    },
    async buildPrompt() {
        return {
            prompt: '',
            isPageReloadRecommended: false,
            sources: [
                {
                    type: _panels_explain_explain_js__WEBPACK_IMPORTED_MODULE_1__.SourceType.MESSAGE,
                    value: 'Something went wrong\n\nSomething went wrong',
                },
                {
                    type: _panels_explain_explain_js__WEBPACK_IMPORTED_MODULE_1__.SourceType.STACKTRACE,
                    value: 'Stacktrace line1\nStacketrace line2',
                },
                {
                    type: _panels_explain_explain_js__WEBPACK_IMPORTED_MODULE_1__.SourceType.RELATED_CODE,
                    value: 'RelatedCode',
                },
                {
                    type: _panels_explain_explain_js__WEBPACK_IMPORTED_MODULE_1__.SourceType.NETWORK_REQUEST,
                    value: `Request: https://example.com/data.html

Request headers:
:authority: example.com
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36

Response headers:
Response status: 404`,
                },
            ],
        };
    },
}, {
    async *fetch() {
        yield {
            explanation: `## Result

Some text with \`code\`. Some code:
\`\`\`ts
console.log('test');
document.querySelector('test').style = 'black';
\`\`\`

\`\`\`
<!DOCTYPE html>
<div>Hello world</div>
<script>
  console.log('Hello World');
</script>
\`\`\`

Links: [https://example.com](https://example.com)
Images: ![https://example.com](https://example.com)
`,
            metadata: {},
        };
    },
    registerClientEvent: () => Promise.resolve({}),
}, _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.AidaClient.AidaAvailability.AVAILABLE);
document.getElementById('container')?.appendChild(component);
//# sourceMappingURL=static.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);