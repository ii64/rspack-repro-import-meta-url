"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_sources_DebuggerPausedMessage_test_js"], {
"./panels/sources/DebuggerPausedMessage.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/breakpoints/breakpoints.js */ "./models/breakpoints/breakpoints.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _sources_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sources.js */ "./panels/sources/sources.js");
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






(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__.describeWithEnvironment)('DebuggerPausedMessage', function() {
    var getPausedMessageFromDOM = function getPausedMessageFromDOM() {
        var _pausedMessage_element_shadowRoot, _pausedMessage_element_shadowRoot_querySelector, _pausedMessage_element_shadowRoot1;
        var _pausedMessage_element_shadowRoot_querySelector1;
        var mainElement = (_pausedMessage_element_shadowRoot_querySelector1 = (_pausedMessage_element_shadowRoot = pausedMessage.element().shadowRoot) === null || _pausedMessage_element_shadowRoot === void 0 ? void 0 : _pausedMessage_element_shadowRoot.querySelector('.status-main')) !== null && _pausedMessage_element_shadowRoot_querySelector1 !== void 0 ? _pausedMessage_element_shadowRoot_querySelector1 : null;
        assert.instanceOf(mainElement, HTMLDivElement);
        var main = mainElement.textContent;
        assert.exists(main);
        var _pausedMessage_element_shadowRoot_querySelector_textContent;
        var sub = (_pausedMessage_element_shadowRoot_querySelector_textContent = (_pausedMessage_element_shadowRoot1 = pausedMessage.element().shadowRoot) === null || _pausedMessage_element_shadowRoot1 === void 0 ? void 0 : (_pausedMessage_element_shadowRoot_querySelector = _pausedMessage_element_shadowRoot1.querySelector('.status-sub')) === null || _pausedMessage_element_shadowRoot_querySelector === void 0 ? void 0 : _pausedMessage_element_shadowRoot_querySelector.textContent) !== null && _pausedMessage_element_shadowRoot_querySelector_textContent !== void 0 ? _pausedMessage_element_shadowRoot_querySelector_textContent : undefined;
        return {
            main: main,
            sub: sub
        };
    };
    var debuggerWorkspaceBinding;
    var breakpointManager;
    var pausedMessage;
    beforeEach(function() {
        var workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__.Workspace.WorkspaceImpl.instance();
        var targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance();
        var resourceMapping = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.ResourceMapping.ResourceMapping(targetManager, workspace);
        debuggerWorkspaceBinding = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
            forceNew: true,
            resourceMapping: resourceMapping,
            targetManager: targetManager
        });
        breakpointManager = _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_2__.BreakpointManager.BreakpointManager.instance({
            forceNew: true,
            targetManager: targetManager,
            workspace: workspace,
            debuggerWorkspaceBinding: debuggerWorkspaceBinding
        });
        pausedMessage = new _sources_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerPausedMessage.DebuggerPausedMessage();
    });
    describe('EventDetails pause', function() {
        var testCases = [
            {
                title: 'shows no sub message if aux data is missing',
                auxData: undefined,
                expectedSub: undefined
            },
            {
                title: 'shows no sub message for unknown instrumentation breakpoints',
                auxData: {
                    eventName: 'instrumentation:somethingrandom123'
                },
                expectedSub: undefined
            },
            {
                title: 'shows the fixed string for untranslated instrumentation breakpoints',
                auxData: {
                    eventName: 'instrumentation:setTimeout'
                },
                expectedSub: 'setTimeout'
            },
            {
                title: 'shows the translated string for translated instrumentation breakpoints',
                auxData: {
                    eventName: 'instrumentation:requestAnimationFrame'
                },
                expectedSub: 'Request Animation Frame'
            },
            {
                title: 'shows no sub message for unknown listener breakpoints',
                auxData: {
                    eventName: 'listener:somethingrandom123'
                },
                expectedSub: undefined
            },
            {
                title: 'shows the "targetName" as a prefix for listener breakpoints',
                auxData: {
                    eventName: 'listener:loadstart',
                    targetName: 'xmlhttprequest'
                },
                expectedSub: 'xmlhttprequest.loadstart'
            },
            {
                title: 'shows the "targetName" as a prefix for "*" listener breakpoints',
                auxData: {
                    eventName: 'listener:pointerover',
                    targetName: 'something-random-123'
                },
                expectedSub: 'something-random-123.pointerover'
            },
            {
                title: 'extracts the hex code for WebGL errors',
                auxData: {
                    eventName: 'instrumentation:webglErrorFired',
                    webglErrorName: 'something 0x42 something'
                },
                expectedSub: 'WebGL Error Fired (0x42)'
            },
            {
                title: 'shows the WebGL error name',
                auxData: {
                    eventName: 'instrumentation:webglErrorFired',
                    webglErrorName: 'something went wrong'
                },
                expectedSub: 'WebGL Error Fired (something went wrong)'
            },
            {
                title: 'shows the CSP directive text for script blocked errors',
                auxData: {
                    eventName: 'instrumentation:scriptBlockedByCSP',
                    directiveText: 'script-src "self"'
                },
                expectedSub: 'Script blocked due to Content Security Policy directive: script-src "self"'
            }
        ];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var _step_value = _step.value, title = _step_value.title, auxData = _step_value.auxData, expectedSub = _step_value.expectedSub;
                it(title, /*#__PURE__*/ _async_to_generator(function() {
                    var details, _getPausedMessageFromDOM, main, sub;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                details = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DebuggerModel.DebuggerPausedDetails(sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DebuggerModel.DebuggerModel), [], "EventListener" /* Protocol.Debugger.PausedEventReason.EventListener */ , auxData, []);
                                return [
                                    4,
                                    pausedMessage.render(details, debuggerWorkspaceBinding, breakpointManager)
                                ];
                            case 1:
                                _state.sent();
                                _getPausedMessageFromDOM = getPausedMessageFromDOM(), main = _getPausedMessageFromDOM.main, sub = _getPausedMessageFromDOM.sub;
                                assert.strictEqual(main, 'Paused on event listener');
                                assert.strictEqual(sub, expectedSub);
                                return [
                                    2
                                ];
                        }
                    });
                }));
            };
            for(var _iterator = testCases[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
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
    });
}); //# sourceMappingURL=DebuggerPausedMessage.test.js.map


}),

}]);