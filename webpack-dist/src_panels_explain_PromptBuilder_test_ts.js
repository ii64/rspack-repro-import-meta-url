"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_explain_PromptBuilder_test_ts"],{

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

/***/ "./src/panels/explain/PromptBuilder.test.ts":
/*!**************************************************!*\
  !*** ./src/panels/explain/PromptBuilder.test.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./src/models/bindings/bindings.ts");
/* harmony import */ var _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/logs/logs.js */ "./src/models/logs/logs.ts");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./src/models/workspace/workspace.ts");
/* harmony import */ var _testing_ConsoleHelpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../testing/ConsoleHelpers.js */ "./src/testing/ConsoleHelpers.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../testing/UISourceCodeHelpers.js */ "./src/testing/UISourceCodeHelpers.ts");
/* harmony import */ var _explain_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./explain.js */ "./src/panels/explain/explain.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.











(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_7__.describeWithLocale)('PromptBuilder', () => {
    describe('allowHeader', () => {
        it('disallows cookie headers', () => {
            assert(!_explain_js__WEBPACK_IMPORTED_MODULE_10__.allowHeader({ name: 'Cookie', value: '' }));
            assert(!_explain_js__WEBPACK_IMPORTED_MODULE_10__.allowHeader({ name: 'cookiE', value: '' }));
            assert(!_explain_js__WEBPACK_IMPORTED_MODULE_10__.allowHeader({ name: 'cookie', value: '' }));
            assert(!_explain_js__WEBPACK_IMPORTED_MODULE_10__.allowHeader({ name: 'set-cookie', value: '' }));
            assert(!_explain_js__WEBPACK_IMPORTED_MODULE_10__.allowHeader({ name: 'Set-cOokie', value: '' }));
        });
        it('disallows authorization headers', () => {
            assert(!_explain_js__WEBPACK_IMPORTED_MODULE_10__.allowHeader({ name: 'AuthoRization', value: '' }));
            assert(!_explain_js__WEBPACK_IMPORTED_MODULE_10__.allowHeader({ name: 'authorization', value: '' }));
        });
        it('disallows custom headers', () => {
            assert(!_explain_js__WEBPACK_IMPORTED_MODULE_10__.allowHeader({ name: 'X-smth', value: '' }));
            assert(!_explain_js__WEBPACK_IMPORTED_MODULE_10__.allowHeader({ name: 'X-', value: '' }));
            assert(!_explain_js__WEBPACK_IMPORTED_MODULE_10__.allowHeader({ name: 'x-smth', value: '' }));
            assert(!_explain_js__WEBPACK_IMPORTED_MODULE_10__.allowHeader({ name: 'x-', value: '' }));
        });
    });
    const NETWORK_REQUEST = {
        url() {
            return 'https://example.com';
        },
        requestHeaders() {
            return [{
                    name: 'Origin',
                    value: 'https://example.com',
                }];
        },
        statusCode: 404,
        statusText: 'Not found',
        responseHeaders: [{
                name: 'Origin',
                value: 'https://example.com',
            }],
    };
    describe('format formatNetworkRequest', () => {
        it('formats a network request', () => {
            assert.strictEqual(_explain_js__WEBPACK_IMPORTED_MODULE_10__.formatNetworkRequest(NETWORK_REQUEST), `Request: https://example.com

Request headers:
Origin: https://example.com

Response headers:
Origin: https://example.com

Response status: 404 Not found`);
        });
    });
    describe('formatRelatedCode', () => {
        it('formats a single line code', () => {
            assert.strictEqual(_explain_js__WEBPACK_IMPORTED_MODULE_10__.formatRelatedCode({
                text: '12345678901234567890',
                columnNumber: 10,
                lineNumber: 0,
            }, 
            /* maxLength=*/ 5), '89012');
            assert.strictEqual(_explain_js__WEBPACK_IMPORTED_MODULE_10__.formatRelatedCode({
                text: '12345678901234567890',
                columnNumber: 10,
                lineNumber: 0,
            }, 
            /* maxLength=*/ 6), '890123');
            assert.strictEqual(_explain_js__WEBPACK_IMPORTED_MODULE_10__.formatRelatedCode({
                text: '12345678901234567890',
                columnNumber: 10,
                lineNumber: 0,
            }, 
            /* maxLength=*/ 30), '12345678901234567890');
        });
        it('formats a multiline code', () => {
            assert.strictEqual(_explain_js__WEBPACK_IMPORTED_MODULE_10__.formatRelatedCode({
                text: '123\n456\n789\n123\n456\n789\n',
                columnNumber: 1,
                lineNumber: 1,
            }, 
            /* maxLength=*/ 5), '456');
            assert.strictEqual(_explain_js__WEBPACK_IMPORTED_MODULE_10__.formatRelatedCode({
                text: '123\n456\n789\n123\n456\n789\n',
                columnNumber: 1,
                lineNumber: 1,
            }, 
            /* maxLength=*/ 10), '456\n789\n123');
            assert.strictEqual(_explain_js__WEBPACK_IMPORTED_MODULE_10__.formatRelatedCode({
                text: '123\n456\n789\n123\n456\n789\n',
                columnNumber: 1,
                lineNumber: 1,
            }, 
            /* maxLength=*/ 16), '123\n456\n789\n123');
        });
        it('uses indentation to select blocks or functions', () => {
            // Somewhat realistic code
            const text = `import something;
import anotherthing;

const x = 1;
function f1() {
  // a

  // b
}

function bigger() {
  // x
  if (true) {
    // y

    // zzzzzz
  }

  let y = x + 2;

  if (false) {
    // a

    f1();
    if (x == x) {
      // z
    }
  }
}

export const y = "";
`;
            assert.strictEqual(_explain_js__WEBPACK_IMPORTED_MODULE_10__.formatRelatedCode({ text, columnNumber: 4, lineNumber: 11 }, /* maxLength=*/ 233), '  // x\n  if (true) {\n    // y\n\n    // zzzzzz\n  }\n\n  let y = x + 2;\n\n  if (false) {\n    // a\n\n    f1();\n    if (x == x) {\n      // z\n    }\n  }');
            assert.strictEqual(_explain_js__WEBPACK_IMPORTED_MODULE_10__.formatRelatedCode({ text, columnNumber: 4, lineNumber: 11 }, /* maxLength=*/ 232), '  // x\n  if (true) {\n    // y\n\n    // zzzzzz\n  }\n\n  let y = x + 2;');
            assert.strictEqual(_explain_js__WEBPACK_IMPORTED_MODULE_10__.formatRelatedCode({ text, columnNumber: 4, lineNumber: 11 }, /* maxLength=*/ 600), text.trim());
            assert.strictEqual(_explain_js__WEBPACK_IMPORTED_MODULE_10__.formatRelatedCode({ text, columnNumber: 4, lineNumber: 11 }, /* maxLength=*/ 50), '  // x\n  if (true) {\n    // y\n\n    // zzzzzz\n  }');
            assert.strictEqual(_explain_js__WEBPACK_IMPORTED_MODULE_10__.formatRelatedCode({ text, columnNumber: 4, lineNumber: 11 }, /* maxLength=*/ 40), '  // x');
            assert.strictEqual(_explain_js__WEBPACK_IMPORTED_MODULE_10__.formatRelatedCode({ text, columnNumber: 4, lineNumber: 18 }, /* maxLength=*/ 50), '  let y = x + 2;');
        });
    });
    it('Extracts expected whitespace from beginnings of lines', () => {
        assert.strictEqual(_explain_js__WEBPACK_IMPORTED_MODULE_10__.lineWhitespace(' a'), ' ');
        assert.strictEqual(_explain_js__WEBPACK_IMPORTED_MODULE_10__.lineWhitespace('a'), '');
        assert.strictEqual(_explain_js__WEBPACK_IMPORTED_MODULE_10__.lineWhitespace(' '), null);
        assert.strictEqual(_explain_js__WEBPACK_IMPORTED_MODULE_10__.lineWhitespace(''), null);
        assert.strictEqual(_explain_js__WEBPACK_IMPORTED_MODULE_10__.lineWhitespace('\t\ta'), '\t\t');
    });
    (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_8__.describeWithMockConnection)('buildPrompt', () => {
        let target;
        let debuggerWorkspaceBinding;
        beforeEach(() => {
            target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_7__.createTarget)();
            const targetManager = target.targetManager();
            const workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.WorkspaceImpl.instance();
            const resourceMapping = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.ResourceMapping.ResourceMapping(targetManager, workspace);
            debuggerWorkspaceBinding = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({ forceNew: true, resourceMapping, targetManager });
        });
        const PREAMBLE = 'Why does browser show an error';
        const RELATED_CODE_PREFIX = 'For the following code in my web app';
        const RELATED_NETWORK_REQUEST_PREFIX = 'For the following network request in my web app';
        it('builds a simple prompt', async () => {
            const runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel);
            const messageDetails = {
                type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.ConsoleAPICalledEventType.Log,
            };
            const ERROR_MESSAGE = 'kaboom!';
            const rawMessage = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleModel.ConsoleMessage(runtimeModel, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.FrontendMessageSource.ConsoleAPI, /* level */ null, ERROR_MESSAGE, messageDetails);
            const { message } = (0,_testing_ConsoleHelpers_js__WEBPACK_IMPORTED_MODULE_6__.createConsoleViewMessageWithStubDeps)(rawMessage);
            const promptBuilder = new _explain_js__WEBPACK_IMPORTED_MODULE_10__.PromptBuilder(message);
            const { prompt, sources } = await promptBuilder.buildPrompt();
            assert.strictEqual(prompt, [
                PREAMBLE,
                ERROR_MESSAGE,
            ].join('\n'));
            assert.deepStrictEqual(sources, [{ type: 'message', value: ERROR_MESSAGE }]);
        });
        it('builds a prompt with related code', async () => {
            const runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel);
            const SCRIPT_ID = '1';
            const LINE_NUMBER = 42;
            const URL = 'http://example.com/script.js';
            const stackTrace = (0,_testing_ConsoleHelpers_js__WEBPACK_IMPORTED_MODULE_6__.createStackTrace)([
                `${SCRIPT_ID}::userNestedFunction::${URL}::${LINE_NUMBER}::15`,
                `${SCRIPT_ID}::userFunction::http://example.com/script.js::10::2`,
                `${SCRIPT_ID}::entry::http://example.com/app.js::25::10`,
            ]);
            const messageDetails = {
                type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.ConsoleAPICalledEventType.Log,
                stackTrace,
            };
            const RELATED_CODE = `${'\n'.repeat(LINE_NUMBER)}console.error('kaboom!')`;
            const { uiSourceCode, project } = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_9__.createContentProviderUISourceCode)({ url: URL, mimeType: 'text/javascript', content: RELATED_CODE });
            const debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerModel);
            assert.exists(debuggerModel);
            const mapping = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_9__.createFakeScriptMapping)(debuggerModel, uiSourceCode, LINE_NUMBER, SCRIPT_ID);
            debuggerWorkspaceBinding.addSourceMapping(mapping);
            const ERROR_MESSAGE = 'kaboom!';
            const rawMessage = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleModel.ConsoleMessage(runtimeModel, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.FrontendMessageSource.ConsoleAPI, /* level */ null, ERROR_MESSAGE, messageDetails);
            const { message } = (0,_testing_ConsoleHelpers_js__WEBPACK_IMPORTED_MODULE_6__.createConsoleViewMessageWithStubDeps)(rawMessage);
            const promptBuilder = new _explain_js__WEBPACK_IMPORTED_MODULE_10__.PromptBuilder(message);
            const { prompt, sources } = await promptBuilder.buildPrompt();
            assert.strictEqual(prompt, [
                PREAMBLE,
                ERROR_MESSAGE,
                RELATED_CODE_PREFIX,
                '',
                '```',
                RELATED_CODE.trim(),
                '```',
            ].join('\n'));
            assert.deepStrictEqual(sources, [{ type: 'message', value: ERROR_MESSAGE }, { type: 'relatedCode', value: RELATED_CODE.trim() }]);
            _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.WorkspaceImpl.instance().removeProject(project);
            _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().removeSourceMapping(mapping);
        });
        it('builds a prompt with related code and stacktrace', async () => {
            const runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel);
            const SCRIPT_ID = '1';
            const LINE_NUMBER = 42;
            const URL = 'http://example.com/script.js';
            const stackTrace = (0,_testing_ConsoleHelpers_js__WEBPACK_IMPORTED_MODULE_6__.createStackTrace)([
                `${SCRIPT_ID}::userNestedFunction::${URL}::${LINE_NUMBER}::15`,
                `${SCRIPT_ID}::userFunction::http://example.com/script.js::10::2`,
                `${SCRIPT_ID}::entry::http://example.com/app.js::25::10`,
            ]);
            // Linkifier is mocked in this test, therefore, no link text after @.
            const STACK_TRACE = ['userNestedFunction @ ', 'userFunction @ ', 'entry @'].join('\n');
            const messageDetails = {
                type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.ConsoleAPICalledEventType.Log,
                stackTrace,
            };
            const RELATED_CODE = `${'\n'.repeat(LINE_NUMBER)}console.error('kaboom!')`;
            const { uiSourceCode, project } = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_9__.createContentProviderUISourceCode)({ url: URL, mimeType: 'text/javascript', content: RELATED_CODE });
            const debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerModel);
            assert.exists(debuggerModel);
            const mapping = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_9__.createFakeScriptMapping)(debuggerModel, uiSourceCode, LINE_NUMBER, SCRIPT_ID);
            debuggerWorkspaceBinding.addSourceMapping(mapping);
            const ERROR_MESSAGE = 'kaboom!';
            const rawMessage = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleModel.ConsoleMessage(runtimeModel, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.FrontendMessageSource.ConsoleAPI, _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Log.LogEntryLevel.Error, ERROR_MESSAGE, messageDetails);
            const { message } = (0,_testing_ConsoleHelpers_js__WEBPACK_IMPORTED_MODULE_6__.createConsoleViewMessageWithStubDeps)(rawMessage);
            const promptBuilder = new _explain_js__WEBPACK_IMPORTED_MODULE_10__.PromptBuilder(message);
            const { prompt, sources } = await promptBuilder.buildPrompt();
            assert.strictEqual(prompt, [
                PREAMBLE,
                ERROR_MESSAGE,
                STACK_TRACE,
                RELATED_CODE_PREFIX,
                '',
                '```',
                RELATED_CODE.trim(),
                '```',
            ].join('\n'));
            assert.deepStrictEqual(sources, [
                { type: 'message', value: ERROR_MESSAGE },
                { type: 'stacktrace', value: STACK_TRACE },
                { type: 'relatedCode', value: RELATED_CODE.trim() },
            ]);
            _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.WorkspaceImpl.instance().removeProject(project);
            _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().removeSourceMapping(mapping);
        });
        it('trims a very long network request', async () => {
            const runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel);
            const REQUEST_ID = '29.1';
            const messageDetails = {
                type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.ConsoleAPICalledEventType.Log,
                affectedResources: {
                    requestId: REQUEST_ID,
                },
            };
            const NETWORK_REQUEST = {
                url() {
                    return 'https://example.com';
                },
                requestHeaders() {
                    return Array(100).fill({
                        name: 'Origin',
                        value: 'https://example.com',
                    });
                },
                statusCode: 404,
                statusText: 'Not found',
                responseHeaders: Array(100).fill({
                    name: 'Origin',
                    value: 'https://example.com',
                }),
            };
            sinon.stub(_models_logs_logs_js__WEBPACK_IMPORTED_MODULE_4__.NetworkLog.NetworkLog.instance(), 'requestsForId').withArgs(REQUEST_ID).returns([
                NETWORK_REQUEST,
            ]);
            const RELATED_REQUEST = [
                'Request: https://example.com',
                '',
                'Request headers:',
                'Origin: https://example.com\n'.repeat(35),
                'Response headers:',
                'Origin: https://example.com\n'.repeat(35),
                'Response status: 404 Not found',
            ].join('\n');
            const ERROR_MESSAGE = 'kaboom!';
            const rawMessage = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleModel.ConsoleMessage(runtimeModel, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.FrontendMessageSource.ConsoleAPI, /* level */ null, ERROR_MESSAGE, messageDetails);
            const { message } = (0,_testing_ConsoleHelpers_js__WEBPACK_IMPORTED_MODULE_6__.createConsoleViewMessageWithStubDeps)(rawMessage);
            const promptBuilder = new _explain_js__WEBPACK_IMPORTED_MODULE_10__.PromptBuilder(message);
            const { prompt, sources } = await promptBuilder.buildPrompt();
            assert.strictEqual(prompt, [
                PREAMBLE,
                ERROR_MESSAGE,
                RELATED_NETWORK_REQUEST_PREFIX,
                '',
                '```',
                RELATED_REQUEST,
                '```',
            ].join('\n'));
            assert.deepStrictEqual(sources, [{ type: 'message', value: ERROR_MESSAGE }, { type: 'networkRequest', value: RELATED_REQUEST }]);
        });
        it('trims a very long console message', async () => {
            const runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel);
            const messageDetails = {
                type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.ConsoleAPICalledEventType.Log,
            };
            const ERROR_MESSAGE = 'a'.repeat(2000);
            const TRIMMED_ERROR_MESSAGE = 'a'.repeat(1000);
            const rawMessage = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleModel.ConsoleMessage(runtimeModel, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.FrontendMessageSource.ConsoleAPI, /* level */ null, ERROR_MESSAGE, messageDetails);
            const { message } = (0,_testing_ConsoleHelpers_js__WEBPACK_IMPORTED_MODULE_6__.createConsoleViewMessageWithStubDeps)(rawMessage);
            const promptBuilder = new _explain_js__WEBPACK_IMPORTED_MODULE_10__.PromptBuilder(message);
            const { prompt, sources } = await promptBuilder.buildPrompt();
            assert.strictEqual(prompt, [
                PREAMBLE,
                TRIMMED_ERROR_MESSAGE,
            ].join('\n'));
            assert.deepStrictEqual(sources, [{ type: 'message', value: TRIMMED_ERROR_MESSAGE }]);
        });
        it('trims a very long stack trace', async () => {
            const runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel);
            const SCRIPT_ID = '1';
            const LINE_NUMBER = 0;
            const URL = `http://example.com/${'a'.repeat(100)}.js`;
            const STACK_FRAME = `${SCRIPT_ID}::userNestedFunction::${URL}::${LINE_NUMBER}::15`;
            const stackTrace = (0,_testing_ConsoleHelpers_js__WEBPACK_IMPORTED_MODULE_6__.createStackTrace)(Array(80).fill(STACK_FRAME));
            const STACK_TRACE = 'userNestedFunction @ \n'.repeat(45).trim();
            const messageDetails = {
                type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.ConsoleAPICalledEventType.Log,
                stackTrace,
            };
            const RELATED_CODE = 'console.error(\'kaboom!\')';
            const { uiSourceCode, project } = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_9__.createContentProviderUISourceCode)({ url: URL, mimeType: 'text/javascript', content: RELATED_CODE });
            const debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerModel);
            assert.isNotNull(debuggerModel);
            const mapping = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_9__.createFakeScriptMapping)(debuggerModel, uiSourceCode, LINE_NUMBER, SCRIPT_ID);
            debuggerWorkspaceBinding.addSourceMapping(mapping);
            const ERROR_MESSAGE = 'kaboom!';
            const rawMessage = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleModel.ConsoleMessage(runtimeModel, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.FrontendMessageSource.ConsoleAPI, _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Log.LogEntryLevel.Error, ERROR_MESSAGE, messageDetails);
            const { message } = (0,_testing_ConsoleHelpers_js__WEBPACK_IMPORTED_MODULE_6__.createConsoleViewMessageWithStubDeps)(rawMessage);
            const promptBuilder = new _explain_js__WEBPACK_IMPORTED_MODULE_10__.PromptBuilder(message);
            const { prompt, sources } = await promptBuilder.buildPrompt();
            assert.strictEqual(prompt, [
                PREAMBLE,
                ERROR_MESSAGE,
                STACK_TRACE,
                RELATED_CODE_PREFIX,
                '',
                '```',
                RELATED_CODE.trim(),
                '```',
            ].join('\n'));
            assert.deepStrictEqual(sources, [
                { type: 'message', value: ERROR_MESSAGE },
                { type: 'stacktrace', value: STACK_TRACE },
                { type: 'relatedCode', value: RELATED_CODE.trim() },
            ]);
            _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.WorkspaceImpl.instance().removeProject(project);
            _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().removeSourceMapping(mapping);
        });
        it('builds a prompt with related request', async () => {
            const runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel);
            const REQUEST_ID = '29.1';
            const messageDetails = {
                type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.ConsoleAPICalledEventType.Log,
                affectedResources: {
                    requestId: REQUEST_ID,
                },
            };
            sinon.stub(_models_logs_logs_js__WEBPACK_IMPORTED_MODULE_4__.NetworkLog.NetworkLog.instance(), 'requestsForId').withArgs(REQUEST_ID).returns([
                NETWORK_REQUEST,
            ]);
            const RELATED_REQUEST = [
                'Request: https://example.com',
                '',
                'Request headers:',
                'Origin: https://example.com',
                '',
                'Response headers:',
                'Origin: https://example.com',
                '',
                'Response status: 404 Not found',
            ].join('\n');
            const ERROR_MESSAGE = 'kaboom!';
            const rawMessage = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleModel.ConsoleMessage(runtimeModel, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.FrontendMessageSource.ConsoleAPI, /* level */ null, ERROR_MESSAGE, messageDetails);
            const { message } = (0,_testing_ConsoleHelpers_js__WEBPACK_IMPORTED_MODULE_6__.createConsoleViewMessageWithStubDeps)(rawMessage);
            const promptBuilder = new _explain_js__WEBPACK_IMPORTED_MODULE_10__.PromptBuilder(message);
            const { prompt, sources, isPageReloadRecommended } = await promptBuilder.buildPrompt();
            assert.strictEqual(prompt, [
                PREAMBLE,
                ERROR_MESSAGE,
                RELATED_NETWORK_REQUEST_PREFIX,
                '',
                '```',
                RELATED_REQUEST,
                '```',
            ].join('\n'));
            assert.isNotTrue(isPageReloadRecommended, 'PromptBuilder did recommend reloading the page');
            assert.deepStrictEqual(sources, [{ type: 'message', value: ERROR_MESSAGE }, { type: 'networkRequest', value: RELATED_REQUEST }]);
        });
        it('recommends page reload if the sources are not complete', async () => {
            const runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel);
            const REQUEST_ID = '29.1';
            const messageDetails = {
                type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.ConsoleAPICalledEventType.Log,
                affectedResources: {
                    requestId: REQUEST_ID,
                },
            };
            sinon.stub(_models_logs_logs_js__WEBPACK_IMPORTED_MODULE_4__.NetworkLog.NetworkLog.instance(), 'requestsForId').withArgs(REQUEST_ID).returns([]);
            const ERROR_MESSAGE = 'kaboom!';
            const rawMessage = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleModel.ConsoleMessage(runtimeModel, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.FrontendMessageSource.ConsoleAPI, /* level */ null, ERROR_MESSAGE, messageDetails);
            const { message } = (0,_testing_ConsoleHelpers_js__WEBPACK_IMPORTED_MODULE_6__.createConsoleViewMessageWithStubDeps)(rawMessage);
            const promptBuilder = new _explain_js__WEBPACK_IMPORTED_MODULE_10__.PromptBuilder(message);
            const { sources, isPageReloadRecommended } = await promptBuilder.buildPrompt();
            assert.isTrue(isPageReloadRecommended, 'PromptBuilder did not recommend reloading the page');
            assert.isNotTrue(sources.some(source => source.type === _explain_js__WEBPACK_IMPORTED_MODULE_10__.SourceType.NETWORK_REQUEST));
        });
    });
    (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_8__.describeWithMockConnection)('getSearchQuery', () => {
        let target;
        beforeEach(() => {
            target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_7__.createTarget)();
        });
        it('builds a simple search query', async () => {
            const runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel);
            const messageDetails = {
                type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.ConsoleAPICalledEventType.Log,
            };
            const ERROR_MESSAGE = 'kaboom!';
            const rawMessage = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleModel.ConsoleMessage(runtimeModel, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.FrontendMessageSource.ConsoleAPI, _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Log.LogEntryLevel.Error, ERROR_MESSAGE, messageDetails);
            const { message } = (0,_testing_ConsoleHelpers_js__WEBPACK_IMPORTED_MODULE_6__.createConsoleViewMessageWithStubDeps)(rawMessage);
            const promptBuilder = new _explain_js__WEBPACK_IMPORTED_MODULE_10__.PromptBuilder(message);
            const query = await promptBuilder.getSearchQuery();
            assert.strictEqual(query, 'kaboom!');
        });
        it('builds a search query from an error without the callstack', async () => {
            const runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel);
            const messageDetails = {
                type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.ConsoleAPICalledEventType.Log,
            };
            const ERROR_MESSAGE = 'Got an error: ' + new Error('fail').stack;
            const rawMessage = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleModel.ConsoleMessage(runtimeModel, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.FrontendMessageSource.ConsoleAPI, _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Log.LogEntryLevel.Error, ERROR_MESSAGE, messageDetails);
            const { message } = (0,_testing_ConsoleHelpers_js__WEBPACK_IMPORTED_MODULE_6__.createConsoleViewMessageWithStubDeps)(rawMessage);
            const promptBuilder = new _explain_js__WEBPACK_IMPORTED_MODULE_10__.PromptBuilder(message);
            const query = await promptBuilder.getSearchQuery();
            assert.strictEqual(query, 'Got an error: Error: fail');
        });
    });
});


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


/***/ }),

/***/ "./src/testing/UISourceCodeHelpers.ts":
/*!********************************************!*\
  !*** ./src/testing/UISourceCodeHelpers.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContentProviderUISourceCode: () => (/* binding */ createContentProviderUISourceCode),
/* harmony export */   createContentProviderUISourceCodes: () => (/* binding */ createContentProviderUISourceCodes),
/* harmony export */   createFakeScriptMapping: () => (/* binding */ createFakeScriptMapping),
/* harmony export */   createFileSystemUISourceCode: () => (/* binding */ createFileSystemUISourceCode),
/* harmony export */   setupMockedUISourceCode: () => (/* binding */ setupMockedUISourceCode)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/bindings/bindings.js */ "./src/models/bindings/bindings.ts");
/* harmony import */ var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/persistence/persistence.js */ "./src/models/persistence/persistence.ts");
/* harmony import */ var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/text_utils/text_utils.js */ "./src/models/text_utils/text_utils.ts");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/workspace/workspace.js */ "./src/models/workspace/workspace.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _TestPlatformFileSystem_mimeType, _TestPlatformFileSystem_autoMapping, _TestFileSystem_content, _TestFileSystem_metadata;






function createContentProviderUISourceCodes(options) {
    const workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.WorkspaceImpl.instance();
    const projectType = options.projectType || _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.projectTypes.Formatter;
    assert.notEqual(projectType, _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.projectTypes.FileSystem, 'For creating file system UISourceCodes use \'createFileSystemUISourceCode\' helper.');
    const project = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.ContentProviderBasedProject.ContentProviderBasedProject(workspace, options.projectId || 'PROJECT_ID', projectType, 'Test project', false /* isServiceProject*/);
    if (options.target) {
        _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.NetworkProject.NetworkProject.setTargetForProject(project, options.target);
    }
    const uiSourceCodes = [];
    for (const item of options.items) {
        const resourceType = item.resourceType || _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType.fromMimeType(item.mimeType);
        const uiSourceCode = project.createUISourceCode(item.url, resourceType);
        const contentProvider = _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__.StaticContentProvider.StaticContentProvider.fromString(item.url, resourceType, item.content || '');
        const metadata = item.metadata || new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.UISourceCode.UISourceCodeMetadata(null, null);
        project.addUISourceCodeWithProvider(uiSourceCode, contentProvider, metadata, item.mimeType);
        uiSourceCodes.push(uiSourceCode);
    }
    return { project, uiSourceCodes };
}
function createContentProviderUISourceCode(options) {
    const { url, content, mimeType, metadata, projectType, projectId, target } = options;
    const { project, uiSourceCodes } = createContentProviderUISourceCodes({ items: [{ url, content, mimeType, metadata }], projectType, projectId, target });
    return { project, uiSourceCode: uiSourceCodes[0] };
}
class TestPlatformFileSystem extends _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__.PlatformFileSystem.PlatformFileSystem {
    constructor(path, type, mimeType, autoMapping) {
        super(path, type);
        _TestPlatformFileSystem_mimeType.set(this, void 0);
        _TestPlatformFileSystem_autoMapping.set(this, void 0);
        __classPrivateFieldSet(this, _TestPlatformFileSystem_mimeType, mimeType, "f");
        __classPrivateFieldSet(this, _TestPlatformFileSystem_autoMapping, autoMapping, "f");
    }
    supportsAutomapping() {
        return __classPrivateFieldGet(this, _TestPlatformFileSystem_autoMapping, "f");
    }
    mimeFromPath(_path) {
        return __classPrivateFieldGet(this, _TestPlatformFileSystem_mimeType, "f");
    }
}
_TestPlatformFileSystem_mimeType = new WeakMap(), _TestPlatformFileSystem_autoMapping = new WeakMap();
class TestFileSystem extends _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__.FileSystemWorkspaceBinding.FileSystem {
    constructor(options) {
        super(options.fileSystemWorkspaceBinding, options.platformFileSystem, options.workspace);
        _TestFileSystem_content.set(this, void 0);
        _TestFileSystem_metadata.set(this, void 0);
        __classPrivateFieldSet(this, _TestFileSystem_content, options.content, "f");
        __classPrivateFieldSet(this, _TestFileSystem_metadata, options.metadata, "f");
    }
    requestFileContent(_uiSourceCode) {
        return Promise.resolve(new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__.ContentData.ContentData(__classPrivateFieldGet(this, _TestFileSystem_content, "f"), /* isBase64 */ false, 'text/plain'));
    }
    requestMetadata(_uiSourceCode) {
        return Promise.resolve(__classPrivateFieldGet(this, _TestFileSystem_metadata, "f"));
    }
}
_TestFileSystem_content = new WeakMap(), _TestFileSystem_metadata = new WeakMap();
function createFileSystemUISourceCode(options) {
    const workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.WorkspaceImpl.instance();
    const isolatedFileSystemManager = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__.IsolatedFileSystemManager.IsolatedFileSystemManager.instance();
    const fileSystemWorkspaceBinding = new _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__.FileSystemWorkspaceBinding.FileSystemWorkspaceBinding(isolatedFileSystemManager, workspace);
    const fileSystemPath = (options.fileSystemPath || '');
    const type = options.type || '';
    const content = options.content || '';
    const platformFileSystem = new TestPlatformFileSystem(fileSystemPath, type, options.mimeType, Boolean(options.autoMapping));
    const metadata = options.metadata || new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.UISourceCode.UISourceCodeMetadata(null, null);
    const project = new TestFileSystem({ fileSystemWorkspaceBinding, platformFileSystem, workspace, content, metadata });
    const uiSourceCode = project.createUISourceCode(options.url, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType.fromMimeType(options.mimeType));
    project.addUISourceCode(uiSourceCode);
    return { uiSourceCode, project };
}
function setupMockedUISourceCode(url = 'https://example.com/') {
    const projectStub = sinon.createStubInstance(_models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.ContentProviderBasedProject.ContentProviderBasedProject);
    const urlStringTagExample = url;
    const contentTypeStub = sinon.createStubInstance(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType);
    const uiSourceCode = new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.UISourceCode.UISourceCode(projectStub, urlStringTagExample, contentTypeStub);
    return { sut: uiSourceCode, projectStub: projectStub, contentTypeStub: contentTypeStub };
}
function createFakeScriptMapping(debuggerModel, uiSourceCode, uiLineNumber, scriptId) {
    const sdkLocation = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.Location(debuggerModel, scriptId, 13);
    const uiLocation = new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.UISourceCode.UILocation(uiSourceCode, uiLineNumber);
    const mapping = {
        rawLocationToUILocation: (_) => uiLocation,
        uiLocationToRawLocations: (_uiSourceCode, _lineNumber, _columnNumber) => [sdkLocation],
        uiLocationRangeToRawLocationRanges: (_uiSourceCode, _textRange) => {
            throw new Error('Not implemented');
        },
    };
    return mapping;
}


/***/ })

}]);