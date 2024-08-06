"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_console_ConsoleViewMessage_test_js"], {
"./panels/console/ConsoleViewMessage.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_ConsoleHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/ConsoleHelpers.js */ "./testing/ConsoleHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
// Copyright (c) 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.describeWithMockConnection)('ConsoleViewMessage', function() {
    describe('anchor rendering', function() {
        it('links to the top frame for normal console message', function() {
            var target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)();
            var runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel);
            var stackTrace = (0,_testing_ConsoleHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createStackTrace)([
                'USER_ID::userNestedFunction::http://example.com/script.js::40::15',
                'USER_ID::userFunction::http://example.com/script.js::10::2',
                'APP_ID::entry::http://example.com/app.js::25::10'
            ]);
            var messageDetails = {
                type: "log" /* Protocol.Runtime.ConsoleAPICalledEventType.Log */ ,
                stackTrace: stackTrace
            };
            var rawMessage = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleModel.ConsoleMessage(runtimeModel, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.FrontendMessageSource.ConsoleAPI, /* level */ null, 'got here', messageDetails);
            var _createConsoleViewMessageWithStubDeps = (0,_testing_ConsoleHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createConsoleViewMessageWithStubDeps)(rawMessage), message = _createConsoleViewMessageWithStubDeps.message, linkifier = _createConsoleViewMessageWithStubDeps.linkifier;
            message.toMessageElement(); // Trigger rendering.
            sinon.assert.calledOnceWithExactly(linkifier.linkifyStackTraceTopFrame, target, stackTrace);
        });
        it('links to the frame with the logpoint/breakpoint if the stack trace contains the "marker sourceURL"', function() {
            var target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)();
            var runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel);
            var stackTrace = (0,_testing_ConsoleHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createStackTrace)([
                "LOG_ID::eval::".concat(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.LOGPOINT_SOURCE_URL, "::0::15"),
                'USER_ID::userFunction::http://example.com/script.js::10::2',
                'APP_ID::entry::http://example.com/app.js::25::10'
            ]);
            var messageDetails = {
                type: "log" /* Protocol.Runtime.ConsoleAPICalledEventType.Log */ ,
                stackTrace: stackTrace
            };
            var rawMessage = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleModel.ConsoleMessage(runtimeModel, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.FrontendMessageSource.ConsoleAPI, /* level */ null, 'value of x is 42', messageDetails);
            var _createConsoleViewMessageWithStubDeps = (0,_testing_ConsoleHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createConsoleViewMessageWithStubDeps)(rawMessage), message = _createConsoleViewMessageWithStubDeps.message, linkifier = _createConsoleViewMessageWithStubDeps.linkifier;
            message.toMessageElement(); // Trigger rendering.
            var expectedCallFrame = stackTrace.callFrames[1]; // userFunction.
            sinon.assert.calledOnceWithExactly(linkifier.maybeLinkifyConsoleCallFrame, target, expectedCallFrame, {
                inlineFrameIndex: 0,
                revealBreakpoint: true,
                userMetric: undefined
            });
        });
        it('uses the last "marker sourceURL" frame when searching for the breakpoint/logpoint frame', function() {
            var target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)();
            var runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel);
            var stackTrace = (0,_testing_ConsoleHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createStackTrace)([
                "LOG_ID::leakedClosure::".concat(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.LOGPOINT_SOURCE_URL, "::2::3"),
                'USER_ID::callback::http://example.com/script.js::5::42',
                "LOG_ID::eval::".concat(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.LOGPOINT_SOURCE_URL, "::0::15"),
                'USER_ID::userFunction::http://example.com/script.js::10::2',
                'APP_ID::entry::http://example.com/app.js::25::10'
            ]);
            var messageDetails = {
                type: "log" /* Protocol.Runtime.ConsoleAPICalledEventType.Log */ ,
                stackTrace: stackTrace
            };
            var rawMessage = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleModel.ConsoleMessage(runtimeModel, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.FrontendMessageSource.ConsoleAPI, /* level */ null, 'value of x is 42', messageDetails);
            var _createConsoleViewMessageWithStubDeps = (0,_testing_ConsoleHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createConsoleViewMessageWithStubDeps)(rawMessage), message = _createConsoleViewMessageWithStubDeps.message, linkifier = _createConsoleViewMessageWithStubDeps.linkifier;
            message.toMessageElement(); // Trigger rendering.
            var expectedCallFrame = stackTrace.callFrames[3]; // userFunction.
            sinon.assert.calledOnceWithExactly(linkifier.maybeLinkifyConsoleCallFrame, target, expectedCallFrame, {
                inlineFrameIndex: 0,
                revealBreakpoint: true,
                userMetric: undefined
            });
        });
    });
    describe('console insights', function() {
        it('shows a hover button', function() {
            sinon.stub(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ActionRegistry.ActionRegistry.instance(), 'hasAction').withArgs('explain.console-message.hover').returns(true);
            var target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)();
            var runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel);
            var rawMessage = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleModel.ConsoleMessage(runtimeModel, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.FrontendMessageSource.ConsoleAPI, "error" /* Protocol.Log.LogEntryLevel.Error */ , 'got here');
            var message = (0,_testing_ConsoleHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createConsoleViewMessageWithStubDeps)(rawMessage).message;
            var messageElement = message.toMessageElement(); // Trigger rendering.
            var button = messageElement.querySelector('[aria-label=\'Understand this error\']');
            assert.strictEqual(button === null || button === void 0 ? void 0 : button.textContent, 'Understand this error');
        });
        it('does not show a hover button if the console message text is empty', function() {
            sinon.stub(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ActionRegistry.ActionRegistry.instance(), 'hasAction').withArgs('explain.console-message.hover').returns(true);
            var target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)();
            var runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel);
            var rawMessage = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleModel.ConsoleMessage(runtimeModel, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.FrontendMessageSource.ConsoleAPI, "error" /* Protocol.Log.LogEntryLevel.Error */ , '');
            var message = (0,_testing_ConsoleHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createConsoleViewMessageWithStubDeps)(rawMessage).message;
            var messageElement = message.toMessageElement(); // Trigger rendering.
            var button = messageElement.querySelector('[aria-label=\'Understand this error\']');
            assert.isNull(button);
        });
        it('does not show a hover button for the self-XSS warning message', function() {
            sinon.stub(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ActionRegistry.ActionRegistry.instance(), 'hasAction').withArgs('explain.console-message.hover').returns(true);
            var target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)();
            var runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel);
            var rawMessage = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleModel.ConsoleMessage(runtimeModel, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.FrontendMessageSource.SelfXss, "warning" /* Protocol.Log.LogEntryLevel.Warning */ , 'Don’t paste code...');
            var message = (0,_testing_ConsoleHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createConsoleViewMessageWithStubDeps)(rawMessage).message;
            var messageElement = message.toMessageElement(); // Trigger rendering.
            var button = messageElement.querySelector('[aria-label=\'Understand this warning\']');
            assert.isNull(button);
        });
    });
}); //# sourceMappingURL=ConsoleViewMessage.test.js.map


}),
"./testing/ConsoleHelpers.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createConsoleViewMessageWithStubDeps: function() { return createConsoleViewMessageWithStubDeps; },
  createStackTrace: function() { return createStackTrace; }
});
/* harmony import */var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/issues_manager/issues_manager.js */ "./models/issues_manager/issues_manager.js");
/* harmony import */var _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/logs/logs.js */ "./models/logs/logs.js");
/* harmony import */var _panels_console_console_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../panels/console/console.js */ "./panels/console/console.js");
/* harmony import */var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");




function createConsoleViewMessageWithStubDeps(rawMessage) {
    var linkifier = sinon.createStubInstance(_ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_3__.Linkifier.Linkifier);
    var requestResolver = sinon.createStubInstance(_models_logs_logs_js__WEBPACK_IMPORTED_MODULE_1__.RequestResolver.RequestResolver);
    var issuesResolver = sinon.createStubInstance(_models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_0__.IssueResolver.IssueResolver);
    var message = new _panels_console_console_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleViewMessage.ConsoleViewMessage(rawMessage, linkifier, requestResolver, issuesResolver, /* onResize */ function() {});
    return {
        message: message,
        linkifier: linkifier
    };
}
/**
 * Helper for less verbose stack traces in test code. Pass stack traces with the
 * following format:
 *
 * "<scriptId>::<functionName>::<url>::<lineNumber>::<columnNumber>"
 */ function createStackTrace(callFrameDescriptions) {
    var callFrames = callFrameDescriptions.map(function(descriptor) {
        var fields = descriptor.split('::');
        assert.lengthOf(fields, 5);
        return {
            scriptId: fields[0],
            functionName: fields[1],
            url: fields[2],
            lineNumber: Number.parseInt(fields[3], 10),
            columnNumber: Number.parseInt(fields[4], 10)
        };
    });
    return {
        callFrames: callFrames
    };
} //# sourceMappingURL=ConsoleHelpers.js.map


}),

}]);