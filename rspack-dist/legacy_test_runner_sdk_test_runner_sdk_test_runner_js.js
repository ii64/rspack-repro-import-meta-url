"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["legacy_test_runner_sdk_test_runner_sdk_test_runner_js"], {
"./legacy_test_runner/sdk_test_runner/sdk_test_runner.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SDKTestRunner: function() { return SDKTestRunner; }
});
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_protocol_client_protocol_client_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/protocol_client/protocol_client.js */ "./core/protocol_client/protocol_client.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */var _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../test_runner/test_runner.js */ "./legacy_test_runner/test_runner/test_runner.js");
/* harmony import */var _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__);
// Copyright 2017 The Chromium Authors. All rights reserved.
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






/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */ var SDKTestRunner = {};
var id = 0;
function nextId(prefix) {
    return (prefix || '') + ++id;
}
SDKTestRunner.PageMock = /*#__PURE__*/ function() {
    "use strict";
    function _class(url) {
        var _this = this;
        _class_call_check(this, _class);
        this.url = url;
        this.type = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Frame;
        this.enabledDomains = new Set();
        this.children = new Map();
        this.mainFrame = {
            id: nextId(),
            loaderId: nextId(),
            mimeType: 'text/html',
            securityOrigin: this.url,
            url: this.url
        };
        this.executionContexts = [];
        this.executionContexts.push(this.createExecutionContext(this.mainFrame, false));
        this.scripts = [];
        this.scriptContents = new Map();
        this.dispatchMap = {
            'Debugger.enable': this.debuggerEnable,
            'Debugger.getScriptSource': this.debuggerGetScriptSource,
            'Debugger.setBlackboxPatterns': function(id, params) {
                return _this.sendResponse(id, {});
            },
            'Runtime.enable': this.runtimeEnable,
            'Page.enable': this.pageEnable,
            'Page.getResourceTree': this.pageGetResourceTree
        };
    }
    _create_class(_class, [
        {
            key: "turnIntoWorker",
            value: function turnIntoWorker() {
                this.type = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Worker;
            }
        },
        {
            key: "connectAsMainTarget",
            value: function connectAsMainTarget(targetName) {
                var _this = this;
                _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().resetForTest(_test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.mainTarget);
                _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().resourceMapping.resetForTest(_test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.mainTarget);
                this.enabledDomains.clear();
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().clearAllTargetsForTest();
                var oldFactory = _core_protocol_client_protocol_client_js__WEBPACK_IMPORTED_MODULE_1__.InspectorBackend.Connection.getFactory();
                _core_protocol_client_protocol_client_js__WEBPACK_IMPORTED_MODULE_1__.InspectorBackend.Connection.setFactory(function() {
                    _this.connection = new MockPageConnection(_this);
                    return _this.connection;
                });
                var target = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().createTarget(nextId('mock-target-'), targetName, this.type, null);
                _core_protocol_client_protocol_client_js__WEBPACK_IMPORTED_MODULE_1__.InspectorBackend.Connection.setFactory(oldFactory);
                this.target = target;
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().setScopeTarget(target);
                return target;
            }
        },
        {
            key: "connectAsChildTarget",
            value: function connectAsChildTarget(targetName, parentMock) {
                this.enabledDomains.clear();
                this.sessionId = nextId('mock-target-');
                this.root = parentMock.root || parentMock;
                this.root.children.set(this.sessionId, this);
                var target = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().createTarget(this.sessionId, targetName, this.type, parentMock.target, this.sessionId);
                this.target = target;
                return target;
            }
        },
        {
            key: "disconnect",
            value: function disconnect() {
                if (this.root) {
                    this.root.children.delete(this.sessionId);
                    this.target.dispose();
                    this.root = null;
                    this.sessionId = null;
                } else {
                    this.connection.disconnect();
                    this.connection = null;
                }
                this.target = null;
            }
        },
        {
            key: "evalScript",
            value: function evalScript(url, content, isContentScript) {
                var id = nextId();
                content += '\n//# sourceURL=' + url;
                this.scriptContents.set(id, content);
                var context = this.executionContexts.find(function(context) {
                    return context.auxData.isDefault !== isContentScript;
                });
                if (!context) {
                    context = this.createExecutionContext(this.mainFrame, isContentScript);
                    this.executionContexts.push(context);
                    this.fireEvent('Runtime.executionContextCreated', {
                        context: context
                    });
                }
                var text = new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__.Text.Text(content);
                var script = {
                    scriptId: id,
                    url: url,
                    startLine: 0,
                    startColumn: 0,
                    endLine: text.lineCount(),
                    endColumn: text.lineAt(text.lineCount()).length - 1,
                    executionContextId: context.id,
                    hash: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.hashCode(content),
                    executionContextAuxData: context.auxData,
                    sourceMapURL: '',
                    hasSourceURL: true,
                    isLiveEdit: false,
                    isModule: false,
                    length: content.length
                };
                this.scripts.push(script);
                this.fireEvent('Debugger.scriptParsed', script);
            }
        },
        {
            key: "removeContentScripts",
            value: function removeContentScripts() {
                var index = this.executionContexts.findIndex(function(context) {
                    return !context.auxData.isDefault;
                });
                if (index !== -1) {
                    this.fireEvent('Runtime.executionContextDestroyed', {
                        executionContextId: this.executionContexts[index].id
                    });
                    this.executionContexts.splice(index, 1);
                }
            }
        },
        {
            key: "reload",
            value: function reload() {
                this.fireEvent('Page.frameStartedLoading', {
                    frameId: this.mainFrame.id
                });
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.executionContexts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var context = _step.value;
                        this.fireEvent('Runtime.executionContextDestroyed', {
                            executionContextId: context.id
                        });
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                this.scripts = [];
                this.scriptContents.clear();
                this.executionContexts = [];
                this.fireEvent('Runtime.executionContextsCleared', {});
                this.executionContexts.push(this.createExecutionContext(this.mainFrame, false));
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = this.executionContexts[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var context1 = _step1.value;
                        this.fireEvent('Runtime.executionContextCreated', {
                            context: context1
                        });
                    }
                } catch (err) {
                    _didIteratorError1 = true;
                    _iteratorError1 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                            _iterator1.return();
                        }
                    } finally{
                        if (_didIteratorError1) {
                            throw _iteratorError1;
                        }
                    }
                }
                this.fireEvent('Page.frameNavigated', {
                    frame: this.mainFrame
                });
                this.fireEvent('Page.loadEventFired', {
                    timestamp: Date.now() / 1000
                });
                this.fireEvent('Page.frameStoppedLoading', {
                    frameId: this.mainFrame.id
                });
                this.fireEvent('Page.domContentEventFired', {
                    timestamp: Date.now() / 1000
                });
            }
        },
        {
            key: "createExecutionContext",
            value: function createExecutionContext(frame, isContentScript) {
                return {
                    id: nextId(),
                    auxData: {
                        isDefault: !isContentScript,
                        frameId: frame.id
                    },
                    origin: frame.securityOrigin,
                    name: isContentScript ? 'content-script-context' : ''
                };
            }
        },
        {
            key: "debuggerEnable",
            value: function debuggerEnable(id, params) {
                this.enabledDomains.add('Debugger');
                this.sendResponse(id, {});
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.scripts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var script = _step.value;
                        this.fireEvent('Debugger.scriptParsed', script);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        },
        {
            key: "debuggerGetScriptSource",
            value: function debuggerGetScriptSource(id, params) {
                if (!this.scriptContents.has(params.scriptId)) {
                    this.sendResponse(id, undefined, {
                        message: 'Can\'t get script content for id ' + params.scriptId,
                        code: 1
                    });
                    return;
                }
                var result = {
                    scriptSource: this.scriptContents.get(params.scriptId)
                };
                this.sendResponse(id, result);
            }
        },
        {
            key: "runtimeEnable",
            value: function runtimeEnable(id, params) {
                this.enabledDomains.add('Runtime');
                this.sendResponse(id, {});
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.executionContexts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var context = _step.value;
                        this.fireEvent('Runtime.executionContextCreated', {
                            context: context
                        });
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        },
        {
            key: "pageEnable",
            value: function pageEnable(id, params) {
                this.enabledDomains.add('Page');
                this.sendResponse(id, {});
            }
        },
        {
            key: "pageGetResourceTree",
            value: function pageGetResourceTree(id, params) {
                var result = {
                    frameTree: {
                        frame: this.mainFrame,
                        resources: []
                    }
                };
                this.sendResponse(id, result);
            }
        },
        {
            key: "isSupportedDomain",
            value: function isSupportedDomain(methodName) {
                var domain = methodName.split('.')[0];
                if (domain === 'Page') {
                    return this.type === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Frame;
                }
                return true;
            }
        },
        {
            key: "dispatch",
            value: function dispatch(sessionId, id, methodName, params) {
                if (sessionId) {
                    var child = this.children.get(sessionId);
                    if (child) {
                        child.dispatch('', id, methodName, params);
                    }
                    return;
                }
                var handler = this.isSupportedDomain(methodName) ? this.dispatchMap[methodName] : null;
                if (handler) {
                    return handler.call(this, id, params);
                }
                this.sendResponse(id, undefined, {
                    message: 'Can\'t handle command ' + methodName,
                    code: _core_protocol_client_protocol_client_js__WEBPACK_IMPORTED_MODULE_1__.InspectorBackend.DevToolsStubErrorCode
                });
            }
        },
        {
            key: "sendResponse",
            value: function sendResponse(id, result, error) {
                var message = {
                    id: id,
                    result: result,
                    error: error
                };
                if (this.root) {
                    message.sessionId = this.sessionId;
                    this.root.connection.sendMessageToDevTools(message);
                } else {
                    this.connection.sendMessageToDevTools(message);
                }
            }
        },
        {
            key: "fireEvent",
            value: function fireEvent(methodName, params) {
                var domain = methodName.split('.')[0];
                if (!this.enabledDomains.has(domain)) {
                    return;
                }
                var message = {
                    method: methodName,
                    params: params
                };
                if (this.root) {
                    message.sessionId = this.sessionId;
                    this.root.connection.sendMessageToDevTools(message);
                } else {
                    this.connection.sendMessageToDevTools(message);
                }
            }
        }
    ]);
    return _class;
}();
var MockPageConnection = /*#__PURE__*/ function() {
    "use strict";
    function MockPageConnection(page) {
        _class_call_check(this, MockPageConnection);
        this.page = page;
    }
    _create_class(MockPageConnection, [
        {
            key: "setOnMessage",
            value: function setOnMessage(onMessage) {
                this.onMessage = onMessage;
            }
        },
        {
            key: "setOnDisconnect",
            value: function setOnDisconnect(onDisconnect) {
                this.onDisconnect = onDisconnect;
            }
        },
        {
            key: "sendMessageToDevTools",
            value: function sendMessageToDevTools(message) {
                var _this = this;
                setTimeout(function() {
                    return _this.onMessage.call(null, JSON.stringify(message));
                }, 0);
            }
        },
        {
            key: "sendRawMessage",
            value: function sendRawMessage(messageString) {
                var message = JSON.parse(messageString);
                this.page.dispatch(message.sessionId, message.id, message.method, message.params || {});
            }
        },
        {
            key: "disconnect",
            value: function disconnect() {
                this.onDisconnect.call(null, 'force disconnect');
                this.onDisconnect = null;
                this.onMessage = null;
                return Promise.resolve();
            }
        }
    ]);
    return MockPageConnection;
}();


}),

}]);