"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_explain_PromptBuilder_test_js"], {
"./panels/explain/ActionDelegate.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ActionDelegate: function() { return ActionDelegate; }
});
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _console_console_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../console/console.js */ "./panels/console/console.js");
/* harmony import */var _components_ConsoleInsight_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ConsoleInsight.js */ "./panels/explain/components/ConsoleInsight.js");
/* harmony import */var _PromptBuilder_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PromptBuilder.js */ "./panels/explain/PromptBuilder.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}




var ActionDelegate = /*#__PURE__*/ function() {
    "use strict";
    function ActionDelegate() {
        _class_call_check(this, ActionDelegate);
    }
    _create_class(ActionDelegate, [
        {
            key: "handleAction",
            value: function handleAction(context, actionId) {
                switch(actionId){
                    case 'explain.console-message.context':
                    case 'explain.console-message.context.error':
                    case 'explain.console-message.context.warning':
                    case 'explain.console-message.context.other':
                    case 'explain.console-message.hover':
                        {
                            var consoleViewMessage = context.flavor(_console_console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleViewMessage.ConsoleViewMessage);
                            if (consoleViewMessage) {
                                if (actionId.startsWith('explain.console-message.context')) {
                                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.Action.InsightRequestedViaContextMenu);
                                } else if (actionId === 'explain.console-message.hover') {
                                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.Action.InsightRequestedViaHoverButton);
                                }
                                var promptBuilder = new _PromptBuilder_js__WEBPACK_IMPORTED_MODULE_3__.PromptBuilder(consoleViewMessage);
                                var aidaClient = new _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.AidaClient.AidaClient();
                                void _components_ConsoleInsight_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleInsight.create(promptBuilder, aidaClient).then(function(insight) {
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
    ]);
    return ActionDelegate;
} //# sourceMappingURL=ActionDelegate.js.map
();


}),
"./panels/explain/PromptBuilder.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/logs/logs.js */ "./models/logs/logs.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _testing_ConsoleHelpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../testing/ConsoleHelpers.js */ "./testing/ConsoleHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../testing/UISourceCodeHelpers.js */ "./testing/UISourceCodeHelpers.js");
/* harmony import */var _explain_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./explain.js */ "./panels/explain/explain.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}










(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__.describeWithLocale)('PromptBuilder', function() {
    describe('allowHeader', function() {
        it('disallows cookie headers', function() {
            assert(!_explain_js__WEBPACK_IMPORTED_MODULE_9__.allowHeader({
                name: 'Cookie',
                value: ''
            }));
            assert(!_explain_js__WEBPACK_IMPORTED_MODULE_9__.allowHeader({
                name: 'cookiE',
                value: ''
            }));
            assert(!_explain_js__WEBPACK_IMPORTED_MODULE_9__.allowHeader({
                name: 'cookie',
                value: ''
            }));
            assert(!_explain_js__WEBPACK_IMPORTED_MODULE_9__.allowHeader({
                name: 'set-cookie',
                value: ''
            }));
            assert(!_explain_js__WEBPACK_IMPORTED_MODULE_9__.allowHeader({
                name: 'Set-cOokie',
                value: ''
            }));
        });
        it('disallows authorization headers', function() {
            assert(!_explain_js__WEBPACK_IMPORTED_MODULE_9__.allowHeader({
                name: 'AuthoRization',
                value: ''
            }));
            assert(!_explain_js__WEBPACK_IMPORTED_MODULE_9__.allowHeader({
                name: 'authorization',
                value: ''
            }));
        });
        it('disallows custom headers', function() {
            assert(!_explain_js__WEBPACK_IMPORTED_MODULE_9__.allowHeader({
                name: 'X-smth',
                value: ''
            }));
            assert(!_explain_js__WEBPACK_IMPORTED_MODULE_9__.allowHeader({
                name: 'X-',
                value: ''
            }));
            assert(!_explain_js__WEBPACK_IMPORTED_MODULE_9__.allowHeader({
                name: 'x-smth',
                value: ''
            }));
            assert(!_explain_js__WEBPACK_IMPORTED_MODULE_9__.allowHeader({
                name: 'x-',
                value: ''
            }));
        });
    });
    var NETWORK_REQUEST = {
        url: function url() {
            return 'https://example.com';
        },
        requestHeaders: function requestHeaders() {
            return [
                {
                    name: 'Origin',
                    value: 'https://example.com'
                }
            ];
        },
        statusCode: 404,
        statusText: 'Not found',
        responseHeaders: [
            {
                name: 'Origin',
                value: 'https://example.com'
            }
        ]
    };
    describe('format formatNetworkRequest', function() {
        it('formats a network request', function() {
            assert.strictEqual(_explain_js__WEBPACK_IMPORTED_MODULE_9__.formatNetworkRequest(NETWORK_REQUEST), "Request: https://example.com\n\nRequest headers:\nOrigin: https://example.com\n\nResponse headers:\nOrigin: https://example.com\n\nResponse status: 404 Not found");
        });
    });
    describe('formatRelatedCode', function() {
        it('formats a single line code', function() {
            assert.strictEqual(_explain_js__WEBPACK_IMPORTED_MODULE_9__.formatRelatedCode({
                text: '12345678901234567890',
                columnNumber: 10,
                lineNumber: 0
            }, /* maxLength=*/ 5), '89012');
            assert.strictEqual(_explain_js__WEBPACK_IMPORTED_MODULE_9__.formatRelatedCode({
                text: '12345678901234567890',
                columnNumber: 10,
                lineNumber: 0
            }, /* maxLength=*/ 6), '890123');
            assert.strictEqual(_explain_js__WEBPACK_IMPORTED_MODULE_9__.formatRelatedCode({
                text: '12345678901234567890',
                columnNumber: 10,
                lineNumber: 0
            }, /* maxLength=*/ 30), '12345678901234567890');
        });
        it('formats a multiline code', function() {
            assert.strictEqual(_explain_js__WEBPACK_IMPORTED_MODULE_9__.formatRelatedCode({
                text: '123\n456\n789\n123\n456\n789\n',
                columnNumber: 1,
                lineNumber: 1
            }, /* maxLength=*/ 5), '456');
            assert.strictEqual(_explain_js__WEBPACK_IMPORTED_MODULE_9__.formatRelatedCode({
                text: '123\n456\n789\n123\n456\n789\n',
                columnNumber: 1,
                lineNumber: 1
            }, /* maxLength=*/ 10), '456\n789\n123');
            assert.strictEqual(_explain_js__WEBPACK_IMPORTED_MODULE_9__.formatRelatedCode({
                text: '123\n456\n789\n123\n456\n789\n',
                columnNumber: 1,
                lineNumber: 1
            }, /* maxLength=*/ 16), '123\n456\n789\n123');
        });
        it('uses indentation to select blocks or functions', function() {
            // Somewhat realistic code
            var text = 'import something;\nimport anotherthing;\n\nconst x = 1;\nfunction f1() {\n  // a\n\n  // b\n}\n\nfunction bigger() {\n  // x\n  if (true) {\n    // y\n\n    // zzzzzz\n  }\n\n  let y = x + 2;\n\n  if (false) {\n    // a\n\n    f1();\n    if (x == x) {\n      // z\n    }\n  }\n}\n\nexport const y = "";\n';
            assert.strictEqual(_explain_js__WEBPACK_IMPORTED_MODULE_9__.formatRelatedCode({
                text: text,
                columnNumber: 4,
                lineNumber: 11
            }, /* maxLength=*/ 233), '  // x\n  if (true) {\n    // y\n\n    // zzzzzz\n  }\n\n  let y = x + 2;\n\n  if (false) {\n    // a\n\n    f1();\n    if (x == x) {\n      // z\n    }\n  }');
            assert.strictEqual(_explain_js__WEBPACK_IMPORTED_MODULE_9__.formatRelatedCode({
                text: text,
                columnNumber: 4,
                lineNumber: 11
            }, /* maxLength=*/ 232), '  // x\n  if (true) {\n    // y\n\n    // zzzzzz\n  }\n\n  let y = x + 2;');
            assert.strictEqual(_explain_js__WEBPACK_IMPORTED_MODULE_9__.formatRelatedCode({
                text: text,
                columnNumber: 4,
                lineNumber: 11
            }, /* maxLength=*/ 600), text.trim());
            assert.strictEqual(_explain_js__WEBPACK_IMPORTED_MODULE_9__.formatRelatedCode({
                text: text,
                columnNumber: 4,
                lineNumber: 11
            }, /* maxLength=*/ 50), '  // x\n  if (true) {\n    // y\n\n    // zzzzzz\n  }');
            assert.strictEqual(_explain_js__WEBPACK_IMPORTED_MODULE_9__.formatRelatedCode({
                text: text,
                columnNumber: 4,
                lineNumber: 11
            }, /* maxLength=*/ 40), '  // x');
            assert.strictEqual(_explain_js__WEBPACK_IMPORTED_MODULE_9__.formatRelatedCode({
                text: text,
                columnNumber: 4,
                lineNumber: 18
            }, /* maxLength=*/ 50), '  let y = x + 2;');
        });
    });
    it('Extracts expected whitespace from beginnings of lines', function() {
        assert.strictEqual(_explain_js__WEBPACK_IMPORTED_MODULE_9__.lineWhitespace(' a'), ' ');
        assert.strictEqual(_explain_js__WEBPACK_IMPORTED_MODULE_9__.lineWhitespace('a'), '');
        assert.strictEqual(_explain_js__WEBPACK_IMPORTED_MODULE_9__.lineWhitespace(' '), null);
        assert.strictEqual(_explain_js__WEBPACK_IMPORTED_MODULE_9__.lineWhitespace(''), null);
        assert.strictEqual(_explain_js__WEBPACK_IMPORTED_MODULE_9__.lineWhitespace('\t\ta'), '\t\t');
    });
    (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_7__.describeWithMockConnection)('buildPrompt', function() {
        var target;
        var debuggerWorkspaceBinding;
        beforeEach(function() {
            target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__.createTarget)();
            var targetManager = target.targetManager();
            var workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.instance();
            var resourceMapping = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.ResourceMapping.ResourceMapping(targetManager, workspace);
            debuggerWorkspaceBinding = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
                forceNew: true,
                resourceMapping: resourceMapping,
                targetManager: targetManager
            });
        });
        var PREAMBLE = 'Why does browser show an error';
        var RELATED_CODE_PREFIX = 'For the following code in my web app';
        var RELATED_NETWORK_REQUEST_PREFIX = 'For the following network request in my web app';
        it('builds a simple prompt', /*#__PURE__*/ _async_to_generator(function() {
            var runtimeModel, messageDetails, ERROR_MESSAGE, rawMessage, message, promptBuilder, _ref, prompt, sources;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel);
                        messageDetails = {
                            type: "log" /* Protocol.Runtime.ConsoleAPICalledEventType.Log */ 
                        };
                        ERROR_MESSAGE = 'kaboom!';
                        rawMessage = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleModel.ConsoleMessage(runtimeModel, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.FrontendMessageSource.ConsoleAPI, /* level */ null, ERROR_MESSAGE, messageDetails);
                        message = (0,_testing_ConsoleHelpers_js__WEBPACK_IMPORTED_MODULE_5__.createConsoleViewMessageWithStubDeps)(rawMessage).message;
                        promptBuilder = new _explain_js__WEBPACK_IMPORTED_MODULE_9__.PromptBuilder(message);
                        return [
                            4,
                            promptBuilder.buildPrompt()
                        ];
                    case 1:
                        _ref = _state.sent(), prompt = _ref.prompt, sources = _ref.sources;
                        assert.strictEqual(prompt, [
                            PREAMBLE,
                            ERROR_MESSAGE
                        ].join('\n'));
                        assert.deepStrictEqual(sources, [
                            {
                                type: 'message',
                                value: ERROR_MESSAGE
                            }
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('builds a prompt with related code', /*#__PURE__*/ _async_to_generator(function() {
            var runtimeModel, SCRIPT_ID, LINE_NUMBER, URL, stackTrace, messageDetails, RELATED_CODE, _createContentProviderUISourceCode, uiSourceCode, project, debuggerModel, mapping, ERROR_MESSAGE, rawMessage, message, promptBuilder, _ref, prompt, sources;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel);
                        SCRIPT_ID = '1';
                        LINE_NUMBER = 42;
                        URL = 'http://example.com/script.js';
                        stackTrace = (0,_testing_ConsoleHelpers_js__WEBPACK_IMPORTED_MODULE_5__.createStackTrace)([
                            "".concat(SCRIPT_ID, "::userNestedFunction::").concat(URL, "::").concat(LINE_NUMBER, "::15"),
                            "".concat(SCRIPT_ID, "::userFunction::http://example.com/script.js::10::2"),
                            "".concat(SCRIPT_ID, "::entry::http://example.com/app.js::25::10")
                        ]);
                        messageDetails = {
                            type: "log" /* Protocol.Runtime.ConsoleAPICalledEventType.Log */ ,
                            stackTrace: stackTrace
                        };
                        RELATED_CODE = "".concat('\n'.repeat(LINE_NUMBER), "console.error('kaboom!')");
                        _createContentProviderUISourceCode = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_8__.createContentProviderUISourceCode)({
                            url: URL,
                            mimeType: 'text/javascript',
                            content: RELATED_CODE
                        }), uiSourceCode = _createContentProviderUISourceCode.uiSourceCode, project = _createContentProviderUISourceCode.project;
                        debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerModel);
                        assert.exists(debuggerModel);
                        mapping = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_8__.createFakeScriptMapping)(debuggerModel, uiSourceCode, LINE_NUMBER, SCRIPT_ID);
                        debuggerWorkspaceBinding.addSourceMapping(mapping);
                        ERROR_MESSAGE = 'kaboom!';
                        rawMessage = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleModel.ConsoleMessage(runtimeModel, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.FrontendMessageSource.ConsoleAPI, /* level */ null, ERROR_MESSAGE, messageDetails);
                        message = (0,_testing_ConsoleHelpers_js__WEBPACK_IMPORTED_MODULE_5__.createConsoleViewMessageWithStubDeps)(rawMessage).message;
                        promptBuilder = new _explain_js__WEBPACK_IMPORTED_MODULE_9__.PromptBuilder(message);
                        return [
                            4,
                            promptBuilder.buildPrompt()
                        ];
                    case 1:
                        _ref = _state.sent(), prompt = _ref.prompt, sources = _ref.sources;
                        assert.strictEqual(prompt, [
                            PREAMBLE,
                            ERROR_MESSAGE,
                            RELATED_CODE_PREFIX,
                            '',
                            '```',
                            RELATED_CODE.trim(),
                            '```'
                        ].join('\n'));
                        assert.deepStrictEqual(sources, [
                            {
                                type: 'message',
                                value: ERROR_MESSAGE
                            },
                            {
                                type: 'relatedCode',
                                value: RELATED_CODE.trim()
                            }
                        ]);
                        _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.instance().removeProject(project);
                        _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().removeSourceMapping(mapping);
                        return [
                            2
                        ];
                }
            });
        }));
        it('builds a prompt with related code and stacktrace', /*#__PURE__*/ _async_to_generator(function() {
            var runtimeModel, SCRIPT_ID, LINE_NUMBER, URL, stackTrace, STACK_TRACE, messageDetails, RELATED_CODE, _createContentProviderUISourceCode, uiSourceCode, project, debuggerModel, mapping, ERROR_MESSAGE, rawMessage, message, promptBuilder, _ref, prompt, sources;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel);
                        SCRIPT_ID = '1';
                        LINE_NUMBER = 42;
                        URL = 'http://example.com/script.js';
                        stackTrace = (0,_testing_ConsoleHelpers_js__WEBPACK_IMPORTED_MODULE_5__.createStackTrace)([
                            "".concat(SCRIPT_ID, "::userNestedFunction::").concat(URL, "::").concat(LINE_NUMBER, "::15"),
                            "".concat(SCRIPT_ID, "::userFunction::http://example.com/script.js::10::2"),
                            "".concat(SCRIPT_ID, "::entry::http://example.com/app.js::25::10")
                        ]);
                        // Linkifier is mocked in this test, therefore, no link text after @.
                        STACK_TRACE = [
                            'userNestedFunction @ ',
                            'userFunction @ ',
                            'entry @'
                        ].join('\n');
                        messageDetails = {
                            type: "log" /* Protocol.Runtime.ConsoleAPICalledEventType.Log */ ,
                            stackTrace: stackTrace
                        };
                        RELATED_CODE = "".concat('\n'.repeat(LINE_NUMBER), "console.error('kaboom!')");
                        _createContentProviderUISourceCode = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_8__.createContentProviderUISourceCode)({
                            url: URL,
                            mimeType: 'text/javascript',
                            content: RELATED_CODE
                        }), uiSourceCode = _createContentProviderUISourceCode.uiSourceCode, project = _createContentProviderUISourceCode.project;
                        debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerModel);
                        assert.exists(debuggerModel);
                        mapping = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_8__.createFakeScriptMapping)(debuggerModel, uiSourceCode, LINE_NUMBER, SCRIPT_ID);
                        debuggerWorkspaceBinding.addSourceMapping(mapping);
                        ERROR_MESSAGE = 'kaboom!';
                        rawMessage = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleModel.ConsoleMessage(runtimeModel, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.FrontendMessageSource.ConsoleAPI, "error" /* Protocol.Log.LogEntryLevel.Error */ , ERROR_MESSAGE, messageDetails);
                        message = (0,_testing_ConsoleHelpers_js__WEBPACK_IMPORTED_MODULE_5__.createConsoleViewMessageWithStubDeps)(rawMessage).message;
                        promptBuilder = new _explain_js__WEBPACK_IMPORTED_MODULE_9__.PromptBuilder(message);
                        return [
                            4,
                            promptBuilder.buildPrompt()
                        ];
                    case 1:
                        _ref = _state.sent(), prompt = _ref.prompt, sources = _ref.sources;
                        assert.strictEqual(prompt, [
                            PREAMBLE,
                            ERROR_MESSAGE,
                            STACK_TRACE,
                            RELATED_CODE_PREFIX,
                            '',
                            '```',
                            RELATED_CODE.trim(),
                            '```'
                        ].join('\n'));
                        assert.deepStrictEqual(sources, [
                            {
                                type: 'message',
                                value: ERROR_MESSAGE
                            },
                            {
                                type: 'stacktrace',
                                value: STACK_TRACE
                            },
                            {
                                type: 'relatedCode',
                                value: RELATED_CODE.trim()
                            }
                        ]);
                        _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.instance().removeProject(project);
                        _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().removeSourceMapping(mapping);
                        return [
                            2
                        ];
                }
            });
        }));
        it('trims a very long network request', /*#__PURE__*/ _async_to_generator(function() {
            var runtimeModel, REQUEST_ID, messageDetails, NETWORK_REQUEST, RELATED_REQUEST, ERROR_MESSAGE, rawMessage, message, promptBuilder, _ref, prompt, sources;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel);
                        REQUEST_ID = '29.1';
                        messageDetails = {
                            type: "log" /* Protocol.Runtime.ConsoleAPICalledEventType.Log */ ,
                            affectedResources: {
                                requestId: REQUEST_ID
                            }
                        };
                        NETWORK_REQUEST = {
                            url: function url() {
                                return 'https://example.com';
                            },
                            requestHeaders: function requestHeaders() {
                                return Array(100).fill({
                                    name: 'Origin',
                                    value: 'https://example.com'
                                });
                            },
                            statusCode: 404,
                            statusText: 'Not found',
                            responseHeaders: Array(100).fill({
                                name: 'Origin',
                                value: 'https://example.com'
                            })
                        };
                        sinon.stub(_models_logs_logs_js__WEBPACK_IMPORTED_MODULE_3__.NetworkLog.NetworkLog.instance(), 'requestsForId').withArgs(REQUEST_ID).returns([
                            NETWORK_REQUEST
                        ]);
                        RELATED_REQUEST = [
                            'Request: https://example.com',
                            '',
                            'Request headers:',
                            'Origin: https://example.com\n'.repeat(35),
                            'Response headers:',
                            'Origin: https://example.com\n'.repeat(35),
                            'Response status: 404 Not found'
                        ].join('\n');
                        ERROR_MESSAGE = 'kaboom!';
                        rawMessage = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleModel.ConsoleMessage(runtimeModel, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.FrontendMessageSource.ConsoleAPI, /* level */ null, ERROR_MESSAGE, messageDetails);
                        message = (0,_testing_ConsoleHelpers_js__WEBPACK_IMPORTED_MODULE_5__.createConsoleViewMessageWithStubDeps)(rawMessage).message;
                        promptBuilder = new _explain_js__WEBPACK_IMPORTED_MODULE_9__.PromptBuilder(message);
                        return [
                            4,
                            promptBuilder.buildPrompt()
                        ];
                    case 1:
                        _ref = _state.sent(), prompt = _ref.prompt, sources = _ref.sources;
                        assert.strictEqual(prompt, [
                            PREAMBLE,
                            ERROR_MESSAGE,
                            RELATED_NETWORK_REQUEST_PREFIX,
                            '',
                            '```',
                            RELATED_REQUEST,
                            '```'
                        ].join('\n'));
                        assert.deepStrictEqual(sources, [
                            {
                                type: 'message',
                                value: ERROR_MESSAGE
                            },
                            {
                                type: 'networkRequest',
                                value: RELATED_REQUEST
                            }
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('trims a very long console message', /*#__PURE__*/ _async_to_generator(function() {
            var runtimeModel, messageDetails, ERROR_MESSAGE, TRIMMED_ERROR_MESSAGE, rawMessage, message, promptBuilder, _ref, prompt, sources;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel);
                        messageDetails = {
                            type: "log" /* Protocol.Runtime.ConsoleAPICalledEventType.Log */ 
                        };
                        ERROR_MESSAGE = 'a'.repeat(2000);
                        TRIMMED_ERROR_MESSAGE = 'a'.repeat(1000);
                        rawMessage = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleModel.ConsoleMessage(runtimeModel, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.FrontendMessageSource.ConsoleAPI, /* level */ null, ERROR_MESSAGE, messageDetails);
                        message = (0,_testing_ConsoleHelpers_js__WEBPACK_IMPORTED_MODULE_5__.createConsoleViewMessageWithStubDeps)(rawMessage).message;
                        promptBuilder = new _explain_js__WEBPACK_IMPORTED_MODULE_9__.PromptBuilder(message);
                        return [
                            4,
                            promptBuilder.buildPrompt()
                        ];
                    case 1:
                        _ref = _state.sent(), prompt = _ref.prompt, sources = _ref.sources;
                        assert.strictEqual(prompt, [
                            PREAMBLE,
                            TRIMMED_ERROR_MESSAGE
                        ].join('\n'));
                        assert.deepStrictEqual(sources, [
                            {
                                type: 'message',
                                value: TRIMMED_ERROR_MESSAGE
                            }
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('trims a very long stack trace', /*#__PURE__*/ _async_to_generator(function() {
            var runtimeModel, SCRIPT_ID, LINE_NUMBER, URL, STACK_FRAME, stackTrace, STACK_TRACE, messageDetails, RELATED_CODE, _createContentProviderUISourceCode, uiSourceCode, project, debuggerModel, mapping, ERROR_MESSAGE, rawMessage, message, promptBuilder, _ref, prompt, sources;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel);
                        SCRIPT_ID = '1';
                        LINE_NUMBER = 0;
                        URL = "http://example.com/".concat('a'.repeat(100), ".js");
                        STACK_FRAME = "".concat(SCRIPT_ID, "::userNestedFunction::").concat(URL, "::").concat(LINE_NUMBER, "::15");
                        stackTrace = (0,_testing_ConsoleHelpers_js__WEBPACK_IMPORTED_MODULE_5__.createStackTrace)(Array(80).fill(STACK_FRAME));
                        STACK_TRACE = 'userNestedFunction @ \n'.repeat(45).trim();
                        messageDetails = {
                            type: "log" /* Protocol.Runtime.ConsoleAPICalledEventType.Log */ ,
                            stackTrace: stackTrace
                        };
                        RELATED_CODE = 'console.error(\'kaboom!\')';
                        _createContentProviderUISourceCode = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_8__.createContentProviderUISourceCode)({
                            url: URL,
                            mimeType: 'text/javascript',
                            content: RELATED_CODE
                        }), uiSourceCode = _createContentProviderUISourceCode.uiSourceCode, project = _createContentProviderUISourceCode.project;
                        debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerModel);
                        assert.isNotNull(debuggerModel);
                        mapping = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_8__.createFakeScriptMapping)(debuggerModel, uiSourceCode, LINE_NUMBER, SCRIPT_ID);
                        debuggerWorkspaceBinding.addSourceMapping(mapping);
                        ERROR_MESSAGE = 'kaboom!';
                        rawMessage = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleModel.ConsoleMessage(runtimeModel, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.FrontendMessageSource.ConsoleAPI, "error" /* Protocol.Log.LogEntryLevel.Error */ , ERROR_MESSAGE, messageDetails);
                        message = (0,_testing_ConsoleHelpers_js__WEBPACK_IMPORTED_MODULE_5__.createConsoleViewMessageWithStubDeps)(rawMessage).message;
                        promptBuilder = new _explain_js__WEBPACK_IMPORTED_MODULE_9__.PromptBuilder(message);
                        return [
                            4,
                            promptBuilder.buildPrompt()
                        ];
                    case 1:
                        _ref = _state.sent(), prompt = _ref.prompt, sources = _ref.sources;
                        assert.strictEqual(prompt, [
                            PREAMBLE,
                            ERROR_MESSAGE,
                            STACK_TRACE,
                            RELATED_CODE_PREFIX,
                            '',
                            '```',
                            RELATED_CODE.trim(),
                            '```'
                        ].join('\n'));
                        assert.deepStrictEqual(sources, [
                            {
                                type: 'message',
                                value: ERROR_MESSAGE
                            },
                            {
                                type: 'stacktrace',
                                value: STACK_TRACE
                            },
                            {
                                type: 'relatedCode',
                                value: RELATED_CODE.trim()
                            }
                        ]);
                        _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.instance().removeProject(project);
                        _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().removeSourceMapping(mapping);
                        return [
                            2
                        ];
                }
            });
        }));
        it('builds a prompt with related request', /*#__PURE__*/ _async_to_generator(function() {
            var runtimeModel, REQUEST_ID, messageDetails, RELATED_REQUEST, ERROR_MESSAGE, rawMessage, message, promptBuilder, _ref, prompt, sources, isPageReloadRecommended;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel);
                        REQUEST_ID = '29.1';
                        messageDetails = {
                            type: "log" /* Protocol.Runtime.ConsoleAPICalledEventType.Log */ ,
                            affectedResources: {
                                requestId: REQUEST_ID
                            }
                        };
                        sinon.stub(_models_logs_logs_js__WEBPACK_IMPORTED_MODULE_3__.NetworkLog.NetworkLog.instance(), 'requestsForId').withArgs(REQUEST_ID).returns([
                            NETWORK_REQUEST
                        ]);
                        RELATED_REQUEST = [
                            'Request: https://example.com',
                            '',
                            'Request headers:',
                            'Origin: https://example.com',
                            '',
                            'Response headers:',
                            'Origin: https://example.com',
                            '',
                            'Response status: 404 Not found'
                        ].join('\n');
                        ERROR_MESSAGE = 'kaboom!';
                        rawMessage = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleModel.ConsoleMessage(runtimeModel, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.FrontendMessageSource.ConsoleAPI, /* level */ null, ERROR_MESSAGE, messageDetails);
                        message = (0,_testing_ConsoleHelpers_js__WEBPACK_IMPORTED_MODULE_5__.createConsoleViewMessageWithStubDeps)(rawMessage).message;
                        promptBuilder = new _explain_js__WEBPACK_IMPORTED_MODULE_9__.PromptBuilder(message);
                        return [
                            4,
                            promptBuilder.buildPrompt()
                        ];
                    case 1:
                        _ref = _state.sent(), prompt = _ref.prompt, sources = _ref.sources, isPageReloadRecommended = _ref.isPageReloadRecommended;
                        assert.strictEqual(prompt, [
                            PREAMBLE,
                            ERROR_MESSAGE,
                            RELATED_NETWORK_REQUEST_PREFIX,
                            '',
                            '```',
                            RELATED_REQUEST,
                            '```'
                        ].join('\n'));
                        assert.isNotTrue(isPageReloadRecommended, 'PromptBuilder did recommend reloading the page');
                        assert.deepStrictEqual(sources, [
                            {
                                type: 'message',
                                value: ERROR_MESSAGE
                            },
                            {
                                type: 'networkRequest',
                                value: RELATED_REQUEST
                            }
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('recommends page reload if the sources are not complete', /*#__PURE__*/ _async_to_generator(function() {
            var runtimeModel, REQUEST_ID, messageDetails, ERROR_MESSAGE, rawMessage, message, promptBuilder, _ref, sources, isPageReloadRecommended;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel);
                        REQUEST_ID = '29.1';
                        messageDetails = {
                            type: "log" /* Protocol.Runtime.ConsoleAPICalledEventType.Log */ ,
                            affectedResources: {
                                requestId: REQUEST_ID
                            }
                        };
                        sinon.stub(_models_logs_logs_js__WEBPACK_IMPORTED_MODULE_3__.NetworkLog.NetworkLog.instance(), 'requestsForId').withArgs(REQUEST_ID).returns([]);
                        ERROR_MESSAGE = 'kaboom!';
                        rawMessage = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleModel.ConsoleMessage(runtimeModel, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.FrontendMessageSource.ConsoleAPI, /* level */ null, ERROR_MESSAGE, messageDetails);
                        message = (0,_testing_ConsoleHelpers_js__WEBPACK_IMPORTED_MODULE_5__.createConsoleViewMessageWithStubDeps)(rawMessage).message;
                        promptBuilder = new _explain_js__WEBPACK_IMPORTED_MODULE_9__.PromptBuilder(message);
                        return [
                            4,
                            promptBuilder.buildPrompt()
                        ];
                    case 1:
                        _ref = _state.sent(), sources = _ref.sources, isPageReloadRecommended = _ref.isPageReloadRecommended;
                        assert.isTrue(isPageReloadRecommended, 'PromptBuilder did not recommend reloading the page');
                        assert.isNotTrue(sources.some(function(source) {
                            return source.type === _explain_js__WEBPACK_IMPORTED_MODULE_9__.SourceType.NETWORK_REQUEST;
                        }));
                        return [
                            2
                        ];
                }
            });
        }));
    });
    (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_7__.describeWithMockConnection)('getSearchQuery', function() {
        var target;
        beforeEach(function() {
            target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__.createTarget)();
        });
        it('builds a simple search query', /*#__PURE__*/ _async_to_generator(function() {
            var runtimeModel, messageDetails, ERROR_MESSAGE, rawMessage, message, promptBuilder, query;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel);
                        messageDetails = {
                            type: "log" /* Protocol.Runtime.ConsoleAPICalledEventType.Log */ 
                        };
                        ERROR_MESSAGE = 'kaboom!';
                        rawMessage = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleModel.ConsoleMessage(runtimeModel, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.FrontendMessageSource.ConsoleAPI, "error" /* Protocol.Log.LogEntryLevel.Error */ , ERROR_MESSAGE, messageDetails);
                        message = (0,_testing_ConsoleHelpers_js__WEBPACK_IMPORTED_MODULE_5__.createConsoleViewMessageWithStubDeps)(rawMessage).message;
                        promptBuilder = new _explain_js__WEBPACK_IMPORTED_MODULE_9__.PromptBuilder(message);
                        return [
                            4,
                            promptBuilder.getSearchQuery()
                        ];
                    case 1:
                        query = _state.sent();
                        assert.strictEqual(query, 'kaboom!');
                        return [
                            2
                        ];
                }
            });
        }));
        it('builds a search query from an error without the callstack', /*#__PURE__*/ _async_to_generator(function() {
            var runtimeModel, messageDetails, ERROR_MESSAGE, rawMessage, message, promptBuilder, query;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel);
                        messageDetails = {
                            type: "log" /* Protocol.Runtime.ConsoleAPICalledEventType.Log */ 
                        };
                        ERROR_MESSAGE = 'Got an error: ' + new Error('fail').stack;
                        rawMessage = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleModel.ConsoleMessage(runtimeModel, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.FrontendMessageSource.ConsoleAPI, "error" /* Protocol.Log.LogEntryLevel.Error */ , ERROR_MESSAGE, messageDetails);
                        message = (0,_testing_ConsoleHelpers_js__WEBPACK_IMPORTED_MODULE_5__.createConsoleViewMessageWithStubDeps)(rawMessage).message;
                        promptBuilder = new _explain_js__WEBPACK_IMPORTED_MODULE_9__.PromptBuilder(message);
                        return [
                            4,
                            promptBuilder.getSearchQuery()
                        ];
                    case 1:
                        query = _state.sent();
                        assert.strictEqual(query, 'Got an error: Error: fail');
                        return [
                            2
                        ];
                }
            });
        }));
    });
}); //# sourceMappingURL=PromptBuilder.test.js.map


}),
"./panels/explain/explain.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ActionDelegate: function() { return /* reexport safe */ _ActionDelegate_js__WEBPACK_IMPORTED_MODULE_1__.ActionDelegate; },
  CloseEvent: function() { return /* reexport safe */ _components_ConsoleInsight_js__WEBPACK_IMPORTED_MODULE_0__.CloseEvent; },
  ConsoleInsight: function() { return /* reexport safe */ _components_ConsoleInsight_js__WEBPACK_IMPORTED_MODULE_0__.ConsoleInsight; },
  PromptBuilder: function() { return /* reexport safe */ _PromptBuilder_js__WEBPACK_IMPORTED_MODULE_2__.PromptBuilder; },
  SourceType: function() { return /* reexport safe */ _PromptBuilder_js__WEBPACK_IMPORTED_MODULE_2__.SourceType; },
  allowHeader: function() { return /* reexport safe */ _PromptBuilder_js__WEBPACK_IMPORTED_MODULE_2__.allowHeader; },
  formatConsoleMessage: function() { return /* reexport safe */ _PromptBuilder_js__WEBPACK_IMPORTED_MODULE_2__.formatConsoleMessage; },
  formatNetworkRequest: function() { return /* reexport safe */ _PromptBuilder_js__WEBPACK_IMPORTED_MODULE_2__.formatNetworkRequest; },
  formatRelatedCode: function() { return /* reexport safe */ _PromptBuilder_js__WEBPACK_IMPORTED_MODULE_2__.formatRelatedCode; },
  formatStackTrace: function() { return /* reexport safe */ _PromptBuilder_js__WEBPACK_IMPORTED_MODULE_2__.formatStackTrace; },
  lineWhitespace: function() { return /* reexport safe */ _PromptBuilder_js__WEBPACK_IMPORTED_MODULE_2__.lineWhitespace; }
});
/* harmony import */var _components_ConsoleInsight_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ConsoleInsight.js */ "./panels/explain/components/ConsoleInsight.js");
/* harmony import */var _ActionDelegate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActionDelegate.js */ "./panels/explain/ActionDelegate.js");
/* harmony import */var _PromptBuilder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PromptBuilder.js */ "./panels/explain/PromptBuilder.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


 //# sourceMappingURL=explain.js.map


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