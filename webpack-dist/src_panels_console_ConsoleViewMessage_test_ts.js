"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_console_ConsoleViewMessage_test_ts"],{

/***/ "./src/panels/console/ConsoleViewMessage.test.ts":
/*!*******************************************************!*\
  !*** ./src/panels/console/ConsoleViewMessage.test.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _testing_ConsoleHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/ConsoleHelpers.js */ "./src/testing/ConsoleHelpers.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
// Copyright (c) 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.describeWithMockConnection)('ConsoleViewMessage', () => {
    describe('anchor rendering', () => {
        it('links to the top frame for normal console message', () => {
            const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__.createTarget)();
            const runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel);
            const stackTrace = (0,_testing_ConsoleHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createStackTrace)([
                'USER_ID::userNestedFunction::http://example.com/script.js::40::15',
                'USER_ID::userFunction::http://example.com/script.js::10::2',
                'APP_ID::entry::http://example.com/app.js::25::10',
            ]);
            const messageDetails = {
                type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.ConsoleAPICalledEventType.Log,
                stackTrace,
            };
            const rawMessage = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleModel.ConsoleMessage(runtimeModel, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.FrontendMessageSource.ConsoleAPI, /* level */ null, 'got here', messageDetails);
            const { message, linkifier } = (0,_testing_ConsoleHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createConsoleViewMessageWithStubDeps)(rawMessage);
            message.toMessageElement(); // Trigger rendering.
            sinon.assert.calledOnceWithExactly(linkifier.linkifyStackTraceTopFrame, target, stackTrace);
        });
        it('links to the frame with the logpoint/breakpoint if the stack trace contains the "marker sourceURL"', () => {
            const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__.createTarget)();
            const runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel);
            const stackTrace = (0,_testing_ConsoleHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createStackTrace)([
                `LOG_ID::eval::${_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.LOGPOINT_SOURCE_URL}::0::15`,
                'USER_ID::userFunction::http://example.com/script.js::10::2',
                'APP_ID::entry::http://example.com/app.js::25::10',
            ]);
            const messageDetails = {
                type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.ConsoleAPICalledEventType.Log,
                stackTrace,
            };
            const rawMessage = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleModel.ConsoleMessage(runtimeModel, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.FrontendMessageSource.ConsoleAPI, /* level */ null, 'value of x is 42', messageDetails);
            const { message, linkifier } = (0,_testing_ConsoleHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createConsoleViewMessageWithStubDeps)(rawMessage);
            message.toMessageElement(); // Trigger rendering.
            const expectedCallFrame = stackTrace.callFrames[1]; // userFunction.
            sinon.assert.calledOnceWithExactly(linkifier.maybeLinkifyConsoleCallFrame, target, expectedCallFrame, { inlineFrameIndex: 0, revealBreakpoint: true, userMetric: undefined });
        });
        it('uses the last "marker sourceURL" frame when searching for the breakpoint/logpoint frame', () => {
            const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__.createTarget)();
            const runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel);
            const stackTrace = (0,_testing_ConsoleHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createStackTrace)([
                `LOG_ID::leakedClosure::${_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.LOGPOINT_SOURCE_URL}::2::3`,
                'USER_ID::callback::http://example.com/script.js::5::42',
                `LOG_ID::eval::${_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.LOGPOINT_SOURCE_URL}::0::15`,
                'USER_ID::userFunction::http://example.com/script.js::10::2',
                'APP_ID::entry::http://example.com/app.js::25::10',
            ]);
            const messageDetails = {
                type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.ConsoleAPICalledEventType.Log,
                stackTrace,
            };
            const rawMessage = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleModel.ConsoleMessage(runtimeModel, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.FrontendMessageSource.ConsoleAPI, /* level */ null, 'value of x is 42', messageDetails);
            const { message, linkifier } = (0,_testing_ConsoleHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createConsoleViewMessageWithStubDeps)(rawMessage);
            message.toMessageElement(); // Trigger rendering.
            const expectedCallFrame = stackTrace.callFrames[3]; // userFunction.
            sinon.assert.calledOnceWithExactly(linkifier.maybeLinkifyConsoleCallFrame, target, expectedCallFrame, { inlineFrameIndex: 0, revealBreakpoint: true, userMetric: undefined });
        });
    });
    describe('console insights', () => {
        it('shows a hover button', () => {
            sinon.stub(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ActionRegistry.ActionRegistry.instance(), 'hasAction')
                .withArgs('explain.console-message.hover')
                .returns(true);
            const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__.createTarget)();
            const runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel);
            const rawMessage = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleModel.ConsoleMessage(runtimeModel, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.FrontendMessageSource.ConsoleAPI, _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Log.LogEntryLevel.Error, 'got here');
            const { message } = (0,_testing_ConsoleHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createConsoleViewMessageWithStubDeps)(rawMessage);
            const messageElement = message.toMessageElement(); // Trigger rendering.
            const button = messageElement.querySelector('[aria-label=\'Understand this error\']');
            assert.strictEqual(button?.textContent, 'Understand this error');
        });
        it('does not show a hover button if the console message text is empty', () => {
            sinon.stub(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ActionRegistry.ActionRegistry.instance(), 'hasAction')
                .withArgs('explain.console-message.hover')
                .returns(true);
            const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__.createTarget)();
            const runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel);
            const rawMessage = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleModel.ConsoleMessage(runtimeModel, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.FrontendMessageSource.ConsoleAPI, _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Log.LogEntryLevel.Error, '');
            const { message } = (0,_testing_ConsoleHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createConsoleViewMessageWithStubDeps)(rawMessage);
            const messageElement = message.toMessageElement(); // Trigger rendering.
            const button = messageElement.querySelector('[aria-label=\'Understand this error\']');
            assert.isNull(button);
        });
        it('does not show a hover button for the self-XSS warning message', () => {
            sinon.stub(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ActionRegistry.ActionRegistry.instance(), 'hasAction')
                .withArgs('explain.console-message.hover')
                .returns(true);
            const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__.createTarget)();
            const runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel);
            const rawMessage = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleModel.ConsoleMessage(runtimeModel, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.FrontendMessageSource.SelfXss, _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Log.LogEntryLevel.Warning, 'Don’t paste code...');
            const { message } = (0,_testing_ConsoleHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createConsoleViewMessageWithStubDeps)(rawMessage);
            const messageElement = message.toMessageElement(); // Trigger rendering.
            const button = messageElement.querySelector('[aria-label=\'Understand this warning\']');
            assert.isNull(button);
        });
    });
});


/***/ }),

/***/ "./src/testing/ConsoleHelpers.ts":
/*!***************************************!*\
  !*** ./src/testing/ConsoleHelpers.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createConsoleViewMessageWithStubDeps: () => (/* binding */ createConsoleViewMessageWithStubDeps),
/* harmony export */   createStackTrace: () => (/* binding */ createStackTrace)
/* harmony export */ });
/* harmony import */ var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/issues_manager/issues_manager.js */ "./src/models/issues_manager/issues_manager.ts");
/* harmony import */ var _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/logs/logs.js */ "./src/models/logs/logs.ts");
/* harmony import */ var _panels_console_console_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../panels/console/console.js */ "./src/panels/console/console.ts");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/legacy/components/utils/utils.js */ "./src/ui/legacy/components/utils/utils.ts");




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


/***/ })

}]);