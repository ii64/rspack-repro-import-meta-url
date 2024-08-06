"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_explain_ActionDelegate_js"],{

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

/***/ })

}]);