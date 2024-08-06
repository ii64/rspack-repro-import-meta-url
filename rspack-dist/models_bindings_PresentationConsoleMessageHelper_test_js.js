"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_bindings_PresentationConsoleMessageHelper_test_js"], {
"./models/bindings/PresentationConsoleMessageHelper.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/ExpectStubCall.js */ "./testing/ExpectStubCall.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _testing_MockExecutionContext_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../testing/MockExecutionContext.js */ "./testing/MockExecutionContext.js");
/* harmony import */var _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _bindings_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bindings.js */ "./models/bindings/bindings.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
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








function addMessage(helper, target, url) {
    return _addMessage.apply(this, arguments);
}
function _addMessage() {
    _addMessage = _async_to_generator(function(helper, target, url) {
        var details, message, level;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    details = {
                        line: 2,
                        column: 1,
                        url: url
                    };
                    message = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleModel.ConsoleMessage(target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel), _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.FrontendMessageSource.ConsoleAPI, "error" /* Protocol.Log.LogEntryLevel.Error */ , 'test message', details);
                    level = "Error" /* Workspace.UISourceCode.Message.Level.Error */ ;
                    return [
                        4,
                        helper.addMessage(new _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.Message(level, message.messageText), message)
                    ];
                case 1:
                    _state.sent();
                    return [
                        2,
                        message
                    ];
            }
        });
    });
    return _addMessage.apply(this, arguments);
}
function addUISourceCode(helper, url) {
    return _addUISourceCode.apply(this, arguments);
}
function _addUISourceCode() {
    _addUISourceCode = _async_to_generator(function(helper, url) {
        var uiSourceCodeAddedSpy, uiSourceCodeAddedDonePromise, workspace, project, uiSourceCode;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    uiSourceCodeAddedSpy = sinon.stub(helper, 'uiSourceCodeAddedForTest');
                    uiSourceCodeAddedDonePromise = (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCall)(uiSourceCodeAddedSpy);
                    workspace = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.WorkspaceImpl.instance();
                    project = new _bindings_js__WEBPACK_IMPORTED_MODULE_7__.ContentProviderBasedProject.ContentProviderBasedProject(workspace, 'test-project', _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.projectTypes.Network, 'test-project', false);
                    uiSourceCode = new _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.UISourceCode(project, url, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType.fromMimeType('application/text'));
                    project.addUISourceCode(uiSourceCode);
                    return [
                        4,
                        uiSourceCodeAddedDonePromise
                    ];
                case 1:
                    _state.sent();
                    uiSourceCodeAddedSpy.restore();
                    return [
                        2,
                        uiSourceCode
                    ];
            }
        });
    });
    return _addUISourceCode.apply(this, arguments);
}
function addScript(helper, debuggerModel, executionContext, url) {
    return _addScript.apply(this, arguments);
}
function _addScript() {
    _addScript = _async_to_generator(function(helper, debuggerModel, executionContext, url) {
        var scriptParsedSpy, parsedScriptSourceDonePromise, script, uiSourceCode;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    scriptParsedSpy = sinon.stub(helper, 'parsedScriptSourceForTest');
                    parsedScriptSourceDonePromise = (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCall)(scriptParsedSpy);
                    script = debuggerModel.parsedScriptSource('scriptId', url, 0, 0, 3, 3, executionContext.id, '', undefined, false, undefined, false, false, 0, false, null, null, null, null, null);
                    return [
                        4,
                        parsedScriptSourceDonePromise
                    ];
                case 1:
                    _state.sent();
                    scriptParsedSpy.restore();
                    return [
                        4,
                        _bindings_js__WEBPACK_IMPORTED_MODULE_7__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().pendingLiveLocationChangesPromise()
                    ];
                case 2:
                    _state.sent();
                    uiSourceCode = _bindings_js__WEBPACK_IMPORTED_MODULE_7__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().uiSourceCodeForScript(script);
                    assert.exists(uiSourceCode);
                    return [
                        2,
                        uiSourceCode
                    ];
            }
        });
    });
    return _addScript.apply(this, arguments);
}
function addStyleSheet(helper, cssModel, url) {
    return _addStyleSheet.apply(this, arguments);
}
function _addStyleSheet() {
    _addStyleSheet = _async_to_generator(function(helper, cssModel, url) {
        var styleSheetAddedSpy, styleSheetAddedDonePromise, header, uiSourceCode;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    styleSheetAddedSpy = sinon.stub(helper, 'styleSheetAddedForTest');
                    styleSheetAddedDonePromise = (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCall)(styleSheetAddedSpy);
                    header = {
                        styleSheetId: 'styleSheet',
                        frameId: 'frameId',
                        sourceURL: url,
                        origin: "regular" /* Protocol.CSS.StyleSheetOrigin.Regular */ ,
                        title: '',
                        disabled: false,
                        isInline: false,
                        isMutable: false,
                        isConstructed: false,
                        startLine: 0,
                        startColumn: 0,
                        length: 1,
                        endLine: 3,
                        endColumn: 3
                    };
                    cssModel.styleSheetAdded(header);
                    return [
                        4,
                        styleSheetAddedDonePromise
                    ];
                case 1:
                    _state.sent();
                    styleSheetAddedSpy.restore();
                    return [
                        4,
                        _bindings_js__WEBPACK_IMPORTED_MODULE_7__.CSSWorkspaceBinding.CSSWorkspaceBinding.instance().pendingLiveLocationChangesPromise()
                    ];
                case 2:
                    _state.sent();
                    uiSourceCode = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.WorkspaceImpl.instance().uiSourceCodeForURL(url);
                    assert.exists(uiSourceCode);
                    return [
                        2,
                        uiSourceCode
                    ];
            }
        });
    });
    return _addStyleSheet.apply(this, arguments);
}
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.describeWithMockConnection)('PresentationConsoleMessageHelper', function() {
    var url = 'http://example.test/test.css';
    var helper;
    var executionContext;
    var cssModel;
    beforeEach(function() {
        executionContext = new _testing_MockExecutionContext_js__WEBPACK_IMPORTED_MODULE_5__.MockExecutionContext((0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)());
        var debuggerModel = executionContext.debuggerModel;
        assert.exists(debuggerModel);
        helper = new _bindings_js__WEBPACK_IMPORTED_MODULE_7__.PresentationConsoleMessageHelper.PresentationSourceFrameMessageHelper();
        helper.setDebuggerModel(debuggerModel);
        var target = executionContext.target();
        var targetCSSModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.CSSModel);
        assert.exists(targetCSSModel);
        cssModel = targetCSSModel;
        helper.setCSSModel(cssModel);
        var workspace = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.WorkspaceImpl.instance();
        var targetManager = target.targetManager();
        var resourceMapping = new _bindings_js__WEBPACK_IMPORTED_MODULE_7__.ResourceMapping.ResourceMapping(targetManager, workspace);
        _bindings_js__WEBPACK_IMPORTED_MODULE_7__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
            forceNew: true,
            resourceMapping: resourceMapping,
            targetManager: targetManager
        });
        _bindings_js__WEBPACK_IMPORTED_MODULE_7__.CSSWorkspaceBinding.CSSWorkspaceBinding.instance({
            forceNew: true,
            resourceMapping: resourceMapping,
            targetManager: targetManager
        });
    });
    it('attaches messages correctly when the events are ordered:  uiSourceCode, message, script', /*#__PURE__*/ _async_to_generator(function() {
        var uiSourceCode, message, scriptUISourceCode;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        addUISourceCode(helper, url)
                    ];
                case 1:
                    uiSourceCode = _state.sent();
                    return [
                        4,
                        addMessage(helper, executionContext.target(), url)
                    ];
                case 2:
                    message = _state.sent();
                    assert.strictEqual(uiSourceCode.messages().size, 1);
                    assert.strictEqual(Array.from(uiSourceCode.messages().values())[0].text(), message.messageText);
                    return [
                        4,
                        addScript(helper, executionContext.debuggerModel, executionContext, url)
                    ];
                case 3:
                    scriptUISourceCode = _state.sent();
                    assert.strictEqual(uiSourceCode.messages().size, 0);
                    assert.strictEqual(scriptUISourceCode.messages().size, 1);
                    assert.strictEqual(Array.from(scriptUISourceCode.messages().values())[0].text(), message.messageText);
                    return [
                        2
                    ];
            }
        });
    }));
    it('attaches messages correctly when the events are ordered:  message, uiSourceCode, script', /*#__PURE__*/ _async_to_generator(function() {
        var message, uiSourceCode, scriptUISourceCode;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        addMessage(helper, executionContext.target(), url)
                    ];
                case 1:
                    message = _state.sent();
                    return [
                        4,
                        addUISourceCode(helper, url)
                    ];
                case 2:
                    uiSourceCode = _state.sent();
                    assert.strictEqual(uiSourceCode.messages().size, 1);
                    assert.strictEqual(Array.from(uiSourceCode.messages().values())[0].text(), message.messageText);
                    return [
                        4,
                        addScript(helper, executionContext.debuggerModel, executionContext, url)
                    ];
                case 3:
                    scriptUISourceCode = _state.sent();
                    assert.strictEqual(uiSourceCode.messages().size, 0);
                    assert.strictEqual(scriptUISourceCode.messages().size, 1);
                    assert.strictEqual(Array.from(scriptUISourceCode.messages().values())[0].text(), message.messageText);
                    return [
                        2
                    ];
            }
        });
    }));
    it('attaches messages correctly when the events are ordered:  message, script, uiSourceCode', /*#__PURE__*/ _async_to_generator(function() {
        var message, scriptUISourceCode, uiSourceCode;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        addMessage(helper, executionContext.target(), url)
                    ];
                case 1:
                    message = _state.sent();
                    return [
                        4,
                        addScript(helper, executionContext.debuggerModel, executionContext, url)
                    ];
                case 2:
                    scriptUISourceCode = _state.sent();
                    assert.strictEqual(scriptUISourceCode.messages().size, 1);
                    assert.strictEqual(Array.from(scriptUISourceCode.messages().values())[0].text(), message.messageText);
                    return [
                        4,
                        addUISourceCode(helper, url)
                    ];
                case 3:
                    uiSourceCode = _state.sent();
                    assert.strictEqual(uiSourceCode.messages().size, 0);
                    assert.strictEqual(scriptUISourceCode.messages().size, 1);
                    assert.strictEqual(Array.from(scriptUISourceCode.messages().values())[0].text(), message.messageText);
                    return [
                        2
                    ];
            }
        });
    }));
    it('attaches messages correctly when the events are ordered:  uiSourceCode, script, message', /*#__PURE__*/ _async_to_generator(function() {
        var uiSourceCode, scriptUISourceCode, message;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        addUISourceCode(helper, url)
                    ];
                case 1:
                    uiSourceCode = _state.sent();
                    return [
                        4,
                        addScript(helper, executionContext.debuggerModel, executionContext, url)
                    ];
                case 2:
                    scriptUISourceCode = _state.sent();
                    return [
                        4,
                        addMessage(helper, executionContext.target(), url)
                    ];
                case 3:
                    message = _state.sent();
                    assert.strictEqual(uiSourceCode.messages().size, 0);
                    assert.strictEqual(scriptUISourceCode.messages().size, 1);
                    assert.strictEqual(Array.from(scriptUISourceCode.messages().values())[0].text(), message.messageText);
                    return [
                        2
                    ];
            }
        });
    }));
    it('attaches messages correctly when the events are ordered:  script, uiSourceCode, message', /*#__PURE__*/ _async_to_generator(function() {
        var scriptUISourceCode, uiSourceCode, message;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        addScript(helper, executionContext.debuggerModel, executionContext, url)
                    ];
                case 1:
                    scriptUISourceCode = _state.sent();
                    return [
                        4,
                        addUISourceCode(helper, url)
                    ];
                case 2:
                    uiSourceCode = _state.sent();
                    return [
                        4,
                        addMessage(helper, executionContext.target(), url)
                    ];
                case 3:
                    message = _state.sent();
                    assert.strictEqual(uiSourceCode.messages().size, 0);
                    assert.strictEqual(scriptUISourceCode.messages().size, 1);
                    assert.strictEqual(Array.from(scriptUISourceCode.messages().values())[0].text(), message.messageText);
                    return [
                        2
                    ];
            }
        });
    }));
    it('attaches messages correctly when the events are ordered:  script, message, uiSourceCode', /*#__PURE__*/ _async_to_generator(function() {
        var scriptUISourceCode, message, uiSourceCode;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        addScript(helper, executionContext.debuggerModel, executionContext, url)
                    ];
                case 1:
                    scriptUISourceCode = _state.sent();
                    return [
                        4,
                        addMessage(helper, executionContext.target(), url)
                    ];
                case 2:
                    message = _state.sent();
                    assert.strictEqual(scriptUISourceCode.messages().size, 1);
                    assert.strictEqual(Array.from(scriptUISourceCode.messages().values())[0].text(), message.messageText);
                    return [
                        4,
                        addUISourceCode(helper, url)
                    ];
                case 3:
                    uiSourceCode = _state.sent();
                    assert.strictEqual(uiSourceCode.messages().size, 0);
                    return [
                        2
                    ];
            }
        });
    }));
    it('attaches messages correctly when the events are ordered:  uiSourceCode, message, styleSheet', /*#__PURE__*/ _async_to_generator(function() {
        var uiSourceCode, message, styleSheetUISourceCode;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        addUISourceCode(helper, url)
                    ];
                case 1:
                    uiSourceCode = _state.sent();
                    return [
                        4,
                        addMessage(helper, executionContext.target(), url)
                    ];
                case 2:
                    message = _state.sent();
                    assert.strictEqual(uiSourceCode.messages().size, 1);
                    assert.strictEqual(Array.from(uiSourceCode.messages().values())[0].text(), message.messageText);
                    return [
                        4,
                        addStyleSheet(helper, cssModel, url)
                    ];
                case 3:
                    styleSheetUISourceCode = _state.sent();
                    assert.strictEqual(uiSourceCode.messages().size, 0);
                    assert.strictEqual(styleSheetUISourceCode.messages().size, 1);
                    assert.strictEqual(Array.from(styleSheetUISourceCode.messages().values())[0].text(), message.messageText);
                    return [
                        2
                    ];
            }
        });
    }));
    it('attaches messages correctly when the events are ordered:  message, uiSourceCode, styleSheet', /*#__PURE__*/ _async_to_generator(function() {
        var message, uiSourceCode, styleSheetUISourceCode;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        addMessage(helper, executionContext.target(), url)
                    ];
                case 1:
                    message = _state.sent();
                    return [
                        4,
                        addUISourceCode(helper, url)
                    ];
                case 2:
                    uiSourceCode = _state.sent();
                    assert.strictEqual(uiSourceCode.messages().size, 1);
                    assert.strictEqual(Array.from(uiSourceCode.messages().values())[0].text(), message.messageText);
                    return [
                        4,
                        addStyleSheet(helper, cssModel, url)
                    ];
                case 3:
                    styleSheetUISourceCode = _state.sent();
                    assert.strictEqual(uiSourceCode.messages().size, 0);
                    assert.strictEqual(styleSheetUISourceCode.messages().size, 1);
                    assert.strictEqual(Array.from(styleSheetUISourceCode.messages().values())[0].text(), message.messageText);
                    return [
                        2
                    ];
            }
        });
    }));
    it('attaches messages correctly when the events are ordered:  message, styleSheet, uiSourceCode', /*#__PURE__*/ _async_to_generator(function() {
        var message, styleSheetUISourceCode, uiSourceCode;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        addMessage(helper, executionContext.target(), url)
                    ];
                case 1:
                    message = _state.sent();
                    return [
                        4,
                        addStyleSheet(helper, cssModel, url)
                    ];
                case 2:
                    styleSheetUISourceCode = _state.sent();
                    assert.strictEqual(styleSheetUISourceCode.messages().size, 1);
                    assert.strictEqual(Array.from(styleSheetUISourceCode.messages().values())[0].text(), message.messageText);
                    return [
                        4,
                        addUISourceCode(helper, url)
                    ];
                case 3:
                    uiSourceCode = _state.sent();
                    assert.strictEqual(uiSourceCode.messages().size, 0);
                    assert.strictEqual(styleSheetUISourceCode.messages().size, 1);
                    assert.strictEqual(Array.from(styleSheetUISourceCode.messages().values())[0].text(), message.messageText);
                    return [
                        2
                    ];
            }
        });
    }));
    it('attaches messages correctly when the events are ordered:  uiSourceCode, styleSheet, message', /*#__PURE__*/ _async_to_generator(function() {
        var uiSourceCode, styleSheetUISourceCode, message;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        addUISourceCode(helper, url)
                    ];
                case 1:
                    uiSourceCode = _state.sent();
                    return [
                        4,
                        addStyleSheet(helper, cssModel, url)
                    ];
                case 2:
                    styleSheetUISourceCode = _state.sent();
                    return [
                        4,
                        addMessage(helper, executionContext.target(), url)
                    ];
                case 3:
                    message = _state.sent();
                    assert.strictEqual(uiSourceCode.messages().size, 0);
                    assert.strictEqual(styleSheetUISourceCode.messages().size, 1);
                    assert.strictEqual(Array.from(styleSheetUISourceCode.messages().values())[0].text(), message.messageText);
                    return [
                        2
                    ];
            }
        });
    }));
    it('attaches messages correctly when the events are ordered:  styleSheet, uiSourceCode, message', /*#__PURE__*/ _async_to_generator(function() {
        var styleSheetUISourceCode, uiSourceCode, message;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        addStyleSheet(helper, cssModel, url)
                    ];
                case 1:
                    styleSheetUISourceCode = _state.sent();
                    return [
                        4,
                        addUISourceCode(helper, url)
                    ];
                case 2:
                    uiSourceCode = _state.sent();
                    return [
                        4,
                        addMessage(helper, executionContext.target(), url)
                    ];
                case 3:
                    message = _state.sent();
                    assert.strictEqual(uiSourceCode.messages().size, 0);
                    assert.strictEqual(styleSheetUISourceCode.messages().size, 1);
                    assert.strictEqual(Array.from(styleSheetUISourceCode.messages().values())[0].text(), message.messageText);
                    return [
                        2
                    ];
            }
        });
    }));
    it('attaches messages correctly when the events are ordered:  styleSheet, message, uiSourceCode', /*#__PURE__*/ _async_to_generator(function() {
        var styleSheetUISourceCode, message, uiSourceCode;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        addStyleSheet(helper, cssModel, url)
                    ];
                case 1:
                    styleSheetUISourceCode = _state.sent();
                    return [
                        4,
                        addMessage(helper, executionContext.target(), url)
                    ];
                case 2:
                    message = _state.sent();
                    assert.strictEqual(styleSheetUISourceCode.messages().size, 1);
                    assert.strictEqual(Array.from(styleSheetUISourceCode.messages().values())[0].text(), message.messageText);
                    return [
                        4,
                        addUISourceCode(helper, url)
                    ];
                case 3:
                    uiSourceCode = _state.sent();
                    assert.strictEqual(uiSourceCode.messages().size, 0);
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=PresentationConsoleMessageHelper.test.js.map


}),
"./testing/ExpectStubCall.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  expectCall: function() { return expectCall; },
  expectCalled: function() { return expectCalled; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function expectCall(stub) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return new Promise(function(resolve) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        stub.callsFake(function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            var _options_callCount;
            if (stub.callCount < ((_options_callCount = options.callCount) !== null && _options_callCount !== void 0 ? _options_callCount : 1)) {
                return undefined;
            }
            resolve(args);
            return options.fakeFn ? options.fakeFn.apply(this, args) : undefined;
        });
    });
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function expectCalled(stub) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var _options_callCount;
    var remainingCalls = ((_options_callCount = options.callCount) !== null && _options_callCount !== void 0 ? _options_callCount : 1) - stub.callCount;
    if (remainingCalls <= 0) {
        return Promise.resolve(stub.lastCall.args);
    }
    return expectCall(stub, _object_spread_props(_object_spread({}, options), {
        callCount: remainingCalls
    }));
} //# sourceMappingURL=ExpectStubCall.js.map


}),
"./testing/MockExecutionContext.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  MockExecutionContext: function() { return MockExecutionContext; }
});
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/sdk/sdk.js */ "./core/sdk/sdk.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
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


var MockExecutionContext = /*#__PURE__*/ function(_SDK_RuntimeModel_ExecutionContext) {
    "use strict";
    _inherits(MockExecutionContext, _SDK_RuntimeModel_ExecutionContext);
    var _super = _create_super(MockExecutionContext);
    function MockExecutionContext(target) {
        _class_call_check(this, MockExecutionContext);
        var runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel);
        (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.assertNotNullOrUndefined)(runtimeModel);
        return _super.call(this, runtimeModel, 1, 'test id', 'test name', 'test origin', true);
    }
    _create_class(MockExecutionContext, [
        {
            key: "evaluate",
            value: function evaluate(options, userGesture, _awaitPromise) {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        assert.isTrue(userGesture);
                        return [
                            2,
                            {
                                error: 'test'
                            }
                        ];
                    });
                })();
            }
        }
    ]);
    return MockExecutionContext;
} //# sourceMappingURL=MockExecutionContext.js.map
(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.ExecutionContext);


}),

}]);