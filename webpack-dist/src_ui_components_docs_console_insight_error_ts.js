"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_components_docs_console_insight_error_ts"],{

/***/ "./src/panels/explain/ActionDelegate.ts":
/*!**********************************************!*\
  !*** ./src/panels/explain/ActionDelegate.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionDelegate: () => (/* binding */ ActionDelegate)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _console_console_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../console/console.js */ "./src/panels/console/console.ts");
/* harmony import */ var _components_ConsoleInsight_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ConsoleInsight.js */ "./src/panels/explain/components/ConsoleInsight.ts");
/* harmony import */ var _PromptBuilder_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PromptBuilder.js */ "./src/panels/explain/PromptBuilder.ts");
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


/***/ }),

/***/ "./src/panels/explain/explain.ts":
/*!***************************************!*\
  !*** ./src/panels/explain/explain.ts ***!
  \***************************************/
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
/* harmony import */ var _components_ConsoleInsight_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ConsoleInsight.js */ "./src/panels/explain/components/ConsoleInsight.ts");
/* harmony import */ var _ActionDelegate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActionDelegate.js */ "./src/panels/explain/ActionDelegate.ts");
/* harmony import */ var _PromptBuilder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PromptBuilder.js */ "./src/panels/explain/PromptBuilder.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





/***/ }),

/***/ "./src/ui/components/docs/console_insight/error.ts":
/*!*********************************************************!*\
  !*** ./src/ui/components/docs/console_insight/error.ts ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _panels_explain_explain_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../panels/explain/explain.js */ "./src/panels/explain/explain.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./src/ui/components/helpers/helpers.ts");
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
        return { prompt: '', sources: [], isPageReloadRecommended: false };
    },
}, {
    async *
    // eslint-disable-next-line require-yield
    fetch() {
        throw new Error('Could not connect to the server');
    },
    registerClientEvent: () => Promise.resolve({}),
}, _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.AidaClient.AidaAvailability.AVAILABLE);
document.getElementById('container')?.appendChild(component);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);