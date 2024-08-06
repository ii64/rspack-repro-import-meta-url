"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["testing_ConsoleHelpers_js"],{

/***/ "./testing/ConsoleHelpers.js":
/*!***********************************!*\
  !*** ./testing/ConsoleHelpers.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createConsoleViewMessageWithStubDeps: () => (/* binding */ createConsoleViewMessageWithStubDeps),
/* harmony export */   createStackTrace: () => (/* binding */ createStackTrace)
/* harmony export */ });
/* harmony import */ var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/issues_manager/issues_manager.js */ "./models/issues_manager/issues_manager.js");
/* harmony import */ var _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/logs/logs.js */ "./models/logs/logs.js");
/* harmony import */ var _panels_console_console_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../panels/console/console.js */ "./panels/console/console.js");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");




function createConsoleViewMessageWithStubDeps(rawMessage) {
    const linkifier = sinon.createStubInstance(_ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_3__.Linkifier.Linkifier);
    const requestResolver = sinon.createStubInstance(_models_logs_logs_js__WEBPACK_IMPORTED_MODULE_1__.RequestResolver.RequestResolver);
    const issuesResolver = sinon.createStubInstance(_models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_0__.IssueResolver.IssueResolver);
    const message = new _panels_console_console_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleViewMessage.ConsoleViewMessage(rawMessage, linkifier, requestResolver, issuesResolver, /* onResize */ () => { });
    return { message, linkifier };
}
/**
 * Helper for less verbose stack traces in test code. Pass stack traces with the
 * following format:
 *
 * "<scriptId>::<functionName>::<url>::<lineNumber>::<columnNumber>"
 */
function createStackTrace(callFrameDescriptions) {
    const callFrames = callFrameDescriptions.map(descriptor => {
        const fields = descriptor.split('::');
        assert.lengthOf(fields, 5);
        return {
            scriptId: fields[0],
            functionName: fields[1],
            url: fields[2],
            lineNumber: Number.parseInt(fields[3], 10),
            columnNumber: Number.parseInt(fields[4], 10),
        };
    });
    return { callFrames };
}
//# sourceMappingURL=ConsoleHelpers.js.map

/***/ })

}]);