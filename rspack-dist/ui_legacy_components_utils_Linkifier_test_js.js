"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_components_utils_Linkifier_test_js"], {
"./testing/ContextMenuHelpers.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  findMenuItemWithLabel: function() { return findMenuItemWithLabel; },
  getContextMenuForElement: function() { return getContextMenuForElement; },
  getMenuForShiftClick: function() { return getMenuForShiftClick; },
  getMenuForToolbarButton: function() { return getMenuForToolbarButton; },
  getMenuItemLabels: function() { return getMenuItemLabels; }
});
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function getMenu(action) {
    var sandbox = sinon.createSandbox();
    var contextMenuShow = sandbox.stub(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.ContextMenu.ContextMenu.prototype, 'show').resolves();
    action();
    sandbox.restore();
    return contextMenuShow.thisValues[0];
}
function getMenuForToolbarButton(button) {
    return getMenu(function() {
        button.clicked(new MouseEvent('click', {
            bubbles: true,
            cancelable: true
        }));
    });
}
function findMenuItemWithLabel(section, label) {
    return section.items.find(function(item) {
        return item.buildDescriptor().label === label;
    });
}
function getMenuItemLabels(section) {
    return section.items.map(function(item) {
        return item.buildDescriptor().label;
    });
}
function getContextMenuForElement(element, target) {
    return getMenu(function() {
        var event = new MouseEvent('contextmenu', {
            bubbles: true
        });
        if (target) {
            sinon.stub(event, 'target').value(target);
        }
        element.dispatchEvent(event);
    });
}
function getMenuForShiftClick(element) {
    return getMenu(function() {
        element.dispatchEvent(new MouseEvent('click', {
            shiftKey: true
        }));
    });
} //# sourceMappingURL=ContextMenuHelpers.js.map


}),
"./ui/legacy/components/utils/Linkifier.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/breakpoints/breakpoints.js */ "./models/breakpoints/breakpoints.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../testing/ContextMenuHelpers.js */ "./testing/ContextMenuHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _testing_MockScopeChain_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../testing/MockScopeChain.js */ "./testing/MockScopeChain.js");
/* harmony import */var _legacy_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _utils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils.js */ "./ui/legacy/components/utils/utils.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
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











var scriptId1 = '1';
var scriptId2 = '2';
var executionContextId = 1234;
var simpleScriptContent = "\nfunction foo(x) {\n  const y = x + 3;\n  return y;\n}\n";
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_7__.describeWithMockConnection)('Linkifier', function() {
    var setUpEnvironment = function setUpEnvironment() {
        var target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__.createTarget)();
        var linkifier = new _utils_js__WEBPACK_IMPORTED_MODULE_10__.Linkifier.Linkifier(100, false);
        linkifier.targetAdded(target);
        var workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.instance();
        var forceNew = true;
        var targetManager = target.targetManager();
        var resourceMapping = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.ResourceMapping.ResourceMapping(targetManager, workspace);
        var debuggerWorkspaceBinding = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
            forceNew: forceNew,
            resourceMapping: resourceMapping,
            targetManager: targetManager
        });
        _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.IgnoreListManager.IgnoreListManager.instance({
            forceNew: forceNew,
            debuggerWorkspaceBinding: debuggerWorkspaceBinding
        });
        _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_3__.BreakpointManager.BreakpointManager.instance({
            forceNew: forceNew,
            targetManager: targetManager,
            workspace: workspace,
            debuggerWorkspaceBinding: debuggerWorkspaceBinding
        });
        var backend = new _testing_MockScopeChain_js__WEBPACK_IMPORTED_MODULE_8__.MockProtocolBackend();
        return {
            target: target,
            linkifier: linkifier,
            backend: backend
        };
    };
    describe('Linkifier.linkifyURL', function() {
        it('prefers text over the URL if it is present', /*#__PURE__*/ _async_to_generator(function() {
            var url, link;
            return _ts_generator(this, function(_state) {
                url = 'http://www.example.com';
                link = _utils_js__WEBPACK_IMPORTED_MODULE_10__.Linkifier.Linkifier.linkifyURL(url, {
                    text: 'foo',
                    showColumnNumber: false,
                    inlineFrameIndex: 1
                });
                assert.strictEqual(link.innerText, 'foo');
                return [
                    2
                ];
            });
        }));
        it('falls back to the URL if given an empty text value', /*#__PURE__*/ _async_to_generator(function() {
            var url, link;
            return _ts_generator(this, function(_state) {
                url = 'http://www.example.com';
                link = _utils_js__WEBPACK_IMPORTED_MODULE_10__.Linkifier.Linkifier.linkifyURL(url, {
                    text: '',
                    showColumnNumber: false,
                    inlineFrameIndex: 1
                });
                assert.strictEqual(link.innerText, 'www.example.com');
                return [
                    2
                ];
            });
        }));
        it('falls back to unknown if the URL and text are empty', /*#__PURE__*/ _async_to_generator(function() {
            var url, link;
            return _ts_generator(this, function(_state) {
                url = '';
                link = _utils_js__WEBPACK_IMPORTED_MODULE_10__.Linkifier.Linkifier.linkifyURL(url, {
                    text: '',
                    showColumnNumber: false,
                    inlineFrameIndex: 1
                });
                assert.strictEqual(link.innerText, '(unknown)');
                return [
                    2
                ];
            });
        }));
    });
    it('creates an empty placeholder anchor if the debugger is disabled and no url exists', function() {
        var _setUpEnvironment = setUpEnvironment(), target = _setUpEnvironment.target, linkifier = _setUpEnvironment.linkifier;
        var debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerModel);
        assert.exists(debuggerModel);
        void debuggerModel.suspendModel();
        var lineNumber = 4;
        var url = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.DevToolsPath.EmptyUrlString;
        var anchor = linkifier.maybeLinkifyScriptLocation(target, scriptId1, url, lineNumber);
        assert.exists(anchor);
        assert.strictEqual(anchor.textContent, '');
        var info = _utils_js__WEBPACK_IMPORTED_MODULE_10__.Linkifier.Linkifier.linkInfo(anchor);
        assert.exists(info);
        assert.isNull(info.uiLocation);
    });
    it('resolves url and updates link as soon as debugger is enabled', function(done) {
        var _setUpEnvironment = setUpEnvironment(), target = _setUpEnvironment.target, linkifier = _setUpEnvironment.linkifier;
        var debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerModel);
        assert.exists(debuggerModel);
        void debuggerModel.suspendModel();
        var lineNumber = 4;
        // Explicitly set url to empty string and let it resolve through the live location.
        var url = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.DevToolsPath.EmptyUrlString;
        var anchor = linkifier.maybeLinkifyScriptLocation(target, scriptId1, url, lineNumber);
        assert.exists(anchor);
        assert.strictEqual(anchor.textContent, '');
        void debuggerModel.resumeModel();
        var scriptParsedEvent = {
            scriptId: scriptId1,
            url: 'https://www.google.com/script.js',
            startLine: 0,
            startColumn: 0,
            endLine: 10,
            endColumn: 10,
            executionContextId: executionContextId,
            hash: '',
            isLiveEdit: false,
            sourceMapURL: undefined,
            hasSourceURL: false,
            length: 10
        };
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_7__.dispatchEvent)(target, 'Debugger.scriptParsed', scriptParsedEvent);
        var callback = function callback(mutations) {
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = mutations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var mutation = _step.value;
                    if (mutation.type === 'childList') {
                        var info = _utils_js__WEBPACK_IMPORTED_MODULE_10__.Linkifier.Linkifier.linkInfo(anchor);
                        assert.exists(info);
                        assert.exists(info.uiLocation);
                        assert.strictEqual(anchor.textContent, "script.js:".concat(lineNumber + 1));
                        observer.disconnect();
                        done();
                    }
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
        };
        var observer = new MutationObserver(callback);
        observer.observe(anchor, {
            childList: true
        });
    });
    it('always favors script ID over url', function(done) {
        var _setUpEnvironment = setUpEnvironment(), target = _setUpEnvironment.target, linkifier = _setUpEnvironment.linkifier;
        var lineNumber = 4;
        var url = 'https://www.google.com/script.js';
        var scriptParsedEvent1 = {
            scriptId: scriptId1,
            url: url,
            startLine: 0,
            startColumn: 0,
            endLine: 10,
            endColumn: 10,
            executionContextId: executionContextId,
            hash: '',
            isLiveEdit: false,
            sourceMapURL: undefined,
            hasSourceURL: false,
            length: 10
        };
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_7__.dispatchEvent)(target, 'Debugger.scriptParsed', scriptParsedEvent1);
        // Ask for a link to a script that has not been registered yet, but has the same url.
        var anchor = linkifier.maybeLinkifyScriptLocation(target, scriptId2, url, lineNumber);
        assert.exists(anchor);
        // This link should not pick up the first script with the same url, since there's no
        // warranty that the first script has anything to do with this one (other than having
        // the same url).
        var info = _utils_js__WEBPACK_IMPORTED_MODULE_10__.Linkifier.Linkifier.linkInfo(anchor);
        assert.exists(info);
        assert.isNull(info.uiLocation);
        var scriptParsedEvent2 = {
            scriptId: scriptId2,
            url: url,
            startLine: 0,
            startColumn: 0,
            endLine: 10,
            endColumn: 10,
            executionContextId: executionContextId,
            hash: '',
            isLiveEdit: false,
            sourceMapURL: undefined,
            hasSourceURL: false,
            length: 10
        };
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_7__.dispatchEvent)(target, 'Debugger.scriptParsed', scriptParsedEvent2);
        var callback = function callback(mutations) {
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = mutations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var mutation = _step.value;
                    if (mutation.type === 'childList') {
                        var info = _utils_js__WEBPACK_IMPORTED_MODULE_10__.Linkifier.Linkifier.linkInfo(anchor);
                        assert.exists(info);
                        assert.exists(info.uiLocation);
                        // Make sure that a uiSourceCode is linked to that anchor.
                        assert.exists(info.uiLocation.uiSourceCode);
                        observer.disconnect();
                        done();
                    }
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
        };
        var observer = new MutationObserver(callback);
        observer.observe(anchor, {
            childList: true
        });
    });
    it('optionally shows column numbers in the link text', function(done) {
        var _setUpEnvironment = setUpEnvironment(), target = _setUpEnvironment.target, linkifier = _setUpEnvironment.linkifier;
        var debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerModel);
        assert.exists(debuggerModel);
        void debuggerModel.suspendModel();
        var lineNumber = 4;
        var options = {
            columnNumber: 8,
            showColumnNumber: true,
            inlineFrameIndex: 0
        };
        // Explicitly set url to empty string and let it resolve through the live location.
        var url = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.DevToolsPath.EmptyUrlString;
        var anchor = linkifier.maybeLinkifyScriptLocation(target, scriptId1, url, lineNumber, options);
        assert.exists(anchor);
        assert.strictEqual(anchor.textContent, '');
        void debuggerModel.resumeModel();
        var scriptParsedEvent = {
            scriptId: scriptId1,
            url: 'https://www.google.com/script.js',
            startLine: 0,
            startColumn: 0,
            endLine: 10,
            endColumn: 10,
            executionContextId: executionContextId,
            hash: '',
            isLiveEdit: false,
            sourceMapURL: undefined,
            hasSourceURL: false,
            length: 10
        };
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_7__.dispatchEvent)(target, 'Debugger.scriptParsed', scriptParsedEvent);
        var callback = function callback(mutations) {
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = mutations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var mutation = _step.value;
                    if (mutation.type === 'childList') {
                        var info = _utils_js__WEBPACK_IMPORTED_MODULE_10__.Linkifier.Linkifier.linkInfo(anchor);
                        assert.exists(info);
                        assert.exists(info.uiLocation);
                        assert.strictEqual(anchor.textContent, "script.js:".concat(lineNumber + 1, ":").concat(options.columnNumber + 1));
                        observer.disconnect();
                        done();
                    }
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
        };
        var observer = new MutationObserver(callback);
        observer.observe(anchor, {
            childList: true
        });
    });
    it('linkifyStackTraceTopFrame without a target returns an initiator link', function() {
        var lineNumber = 165;
        var linkifier = setUpEnvironment().linkifier;
        var anchor = linkifier.linkifyStackTraceTopFrame(null, {
            callFrames: [
                {
                    url: 'https://w.com/a.js',
                    functionName: 'wow',
                    scriptId: '1',
                    lineNumber: lineNumber,
                    columnNumber: 15
                }
            ]
        });
        assert.exists(anchor);
        assert.strictEqual(anchor.textContent, "w.com/a.js:".concat(lineNumber + 1));
    });
    describe('maybeLinkifyScriptLocation', function() {
        it('uses the BreakLocation as a revealable if the option is provided and a breakpoint is at the given location', /*#__PURE__*/ _async_to_generator(function() {
            var _setUpEnvironment, target, linkifier, backend, breakpointManager, debuggerWorkspaceBinding, lineNumber, columnNumber, url, script, uiSourceCode, responder, breakpoint, anchor, linkInfo;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _setUpEnvironment = setUpEnvironment(), target = _setUpEnvironment.target, linkifier = _setUpEnvironment.linkifier, backend = _setUpEnvironment.backend;
                        breakpointManager = _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_3__.BreakpointManager.BreakpointManager.instance();
                        debuggerWorkspaceBinding = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance();
                        lineNumber = 1;
                        columnNumber = 0;
                        url = 'https://www.google.com/script.js';
                        return [
                            4,
                            backend.addScript(target, {
                                content: simpleScriptContent,
                                url: url
                            }, null)
                        ];
                    case 1:
                        script = _state.sent();
                        uiSourceCode = debuggerWorkspaceBinding.uiSourceCodeForScript(script);
                        assert.exists(uiSourceCode);
                        responder = backend.responderToBreakpointByUrlRequest(url, lineNumber);
                        void responder({
                            breakpointId: 'BREAK_ID',
                            locations: [
                                {
                                    scriptId: script.scriptId,
                                    lineNumber: lineNumber,
                                    columnNumber: columnNumber
                                }
                            ]
                        });
                        return [
                            4,
                            breakpointManager.setBreakpoint(uiSourceCode, lineNumber, columnNumber, 'x', /* enabled */ true, /* isLogpoint */ true, "USER_ACTION" /* Breakpoints.BreakpointManager.BreakpointOrigin.USER_ACTION */ )
                        ];
                    case 2:
                        breakpoint = _state.sent();
                        assert.exists(breakpoint);
                        // Create a link that matches exactly the breakpoint location.
                        anchor = linkifier.maybeLinkifyScriptLocation(target, script.scriptId, url, lineNumber, {
                            inlineFrameIndex: 0,
                            revealBreakpoint: true
                        });
                        assert.exists(anchor);
                        return [
                            4,
                            debuggerWorkspaceBinding.pendingLiveLocationChangesPromise()
                        ];
                    case 3:
                        _state.sent();
                        // Assert that the linkinfo has the `BreakLocation` as its revealable.
                        // When clicking the link, `revealables` have predecence over e.g. the
                        // UILocation or url.
                        linkInfo = _utils_js__WEBPACK_IMPORTED_MODULE_10__.Linkifier.Linkifier.linkInfo(anchor);
                        assert.exists(linkInfo);
                        assert.propertyVal(linkInfo.revealable, 'breakpoint', breakpoint);
                        return [
                            2
                        ];
                }
            });
        }));
        it('fires the LiveLocationUpdate event for each LiveLocation update', /*#__PURE__*/ _async_to_generator(function() {
            var _setUpEnvironment, target, linkifier, backend, eventCallback, debuggerWorkspaceBinding, lineNumber, url, sourceMapContent, script, debuggerModel;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _setUpEnvironment = setUpEnvironment(), target = _setUpEnvironment.target, linkifier = _setUpEnvironment.linkifier, backend = _setUpEnvironment.backend;
                        eventCallback = sinon.stub();
                        linkifier.addEventListener("liveLocationUpdated" /* Components.Linkifier.Events.LiveLocationUpdated */ , eventCallback);
                        debuggerWorkspaceBinding = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance();
                        lineNumber = 1;
                        url = 'https://www.google.com/script.js';
                        sourceMapContent = JSON.stringify({
                            'version': 3,
                            'names': [
                                'adder',
                                'param1',
                                'param2',
                                'result'
                            ],
                            'sources': [
                                '/original-script.js'
                            ],
                            'sourcesContent': [
                                'function adder(param1, param2) {\n  const result = param1 + param2;\n  return result;\n}\n\n'
                            ],
                            'mappings': 'AAAA,SAASA,MAAMC,EAAQC,GACrB,MAAMC,EAASF,EAASC,EACxB,OAAOC,CACT'
                        });
                        return [
                            4,
                            backend.addScript(target, {
                                content: 'function adder(n,r){const t=n+r;return t}',
                                url: url
                            }, {
                                url: 'https://www.google.com/script.js.map',
                                content: sourceMapContent
                            })
                        ];
                    case 1:
                        script = _state.sent();
                        linkifier.maybeLinkifyScriptLocation(target, script.scriptId, url, lineNumber);
                        return [
                            4,
                            debuggerWorkspaceBinding.pendingLiveLocationChangesPromise()
                        ];
                    case 2:
                        _state.sent();
                        assert.isTrue(eventCallback.calledOnce);
                        // Detach the source map and check we get the update event.
                        debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerModel);
                        assert.exists(debuggerModel);
                        debuggerModel.sourceMapManager().detachSourceMap(script);
                        return [
                            4,
                            debuggerWorkspaceBinding.pendingLiveLocationChangesPromise()
                        ];
                    case 3:
                        _state.sent();
                        // We currently receive more than one event after detaching the source map.
                        // This is also valid but might constitute unnecessary work.
                        assert.isTrue(eventCallback.callCount >= 2);
                        return [
                            2
                        ];
                }
            });
        }));
    });
});
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__.describeWithEnvironment)('ContentProviderContextMenuProvider', function() {
    it('does not add \'Open in new tab\'-entry for file URLs', /*#__PURE__*/ _async_to_generator(function() {
        var provider, contextMenu, uiSourceCode, openInNewTabItem;
        return _ts_generator(this, function(_state) {
            provider = new _utils_js__WEBPACK_IMPORTED_MODULE_10__.Linkifier.ContentProviderContextMenuProvider();
            contextMenu = new _legacy_js__WEBPACK_IMPORTED_MODULE_9__.ContextMenu.ContextMenu({});
            uiSourceCode = {
                contentURL: function() {
                    return 'https://www.example.com/index.html';
                }
            };
            provider.appendApplicableItems({}, contextMenu, uiSourceCode);
            openInNewTabItem = (0,_testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_5__.findMenuItemWithLabel)(contextMenu.revealSection(), 'Open in new tab');
            assert.exists(openInNewTabItem);
            contextMenu = new _legacy_js__WEBPACK_IMPORTED_MODULE_9__.ContextMenu.ContextMenu({});
            uiSourceCode = {
                contentURL: function() {
                    return 'file://usr/local/example/index.html';
                }
            };
            provider.appendApplicableItems({}, contextMenu, uiSourceCode);
            openInNewTabItem = (0,_testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_5__.findMenuItemWithLabel)(contextMenu.revealSection(), 'Open in new tab');
            assert.isUndefined(openInNewTabItem);
            return [
                2
            ];
        });
    }));
}); //# sourceMappingURL=Linkifier.test.js.map


}),

}]);