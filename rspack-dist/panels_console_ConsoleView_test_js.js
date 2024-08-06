"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_console_ConsoleView_test_js"], {
"./panels/console/ConsoleView.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/issues_manager/issues_manager.js */ "./models/issues_manager/issues_manager.js");
/* harmony import */var _testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/ContextMenuHelpers.js */ "./testing/ContextMenuHelpers.js");
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../testing/ExpectStubCall.js */ "./testing/ExpectStubCall.js");
/* harmony import */var _testing_FileManagerHelpers_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../testing/FileManagerHelpers.js */ "./testing/FileManagerHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _console_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./console.js */ "./panels/console/console.js");
// Copyright (c) 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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











(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_9__.describeWithMockConnection)('ConsoleView', function() {
    var createConsoleMessage = function createConsoleMessage(target, message) {
        var type = arguments.length > 2 && arguments[2] !== void 0 /* Protocol.Runtime.ConsoleAPICalledEventType.Log */  ? arguments[2] : "log";
        return new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleModel.ConsoleMessage(target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RuntimeModel.RuntimeModel), "javascript" /* Protocol.Log.LogEntrySource.Javascript */ , null, message, {
            type: type
        });
    };
    var getConsoleMessages = function getConsoleMessages() {
        return _getConsoleMessages.apply(this, arguments);
    };
    var consoleView;
    beforeEach(function() {
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__.registerNoopActions)([
            'console.clear',
            'console.clear.history',
            'console.create-pin'
        ]);
        consoleView = _console_js__WEBPACK_IMPORTED_MODULE_10__.ConsoleView.ConsoleView.instance({
            forceNew: true,
            viewportThrottlerTimeout: 0
        });
    });
    afterEach(function() {
        consoleView.detach();
    });
    it('adds a title to every checkbox label in the settings view', /*#__PURE__*/ _async_to_generator(function() {
        var _consoleView_element_querySelector_shadowRoot, _consoleView_element_querySelector, consoleSettingsCheckboxes, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, checkbox, _checkbox_shadowRoot_querySelector, _checkbox_shadowRoot;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    consoleSettingsCheckboxes = (_consoleView_element_querySelector = consoleView.element.querySelector('.toolbar')) === null || _consoleView_element_querySelector === void 0 ? void 0 : (_consoleView_element_querySelector_shadowRoot = _consoleView_element_querySelector.shadowRoot) === null || _consoleView_element_querySelector_shadowRoot === void 0 ? void 0 : _consoleView_element_querySelector_shadowRoot.querySelectorAll('.toolbar-item.checkbox');
                    if (!consoleSettingsCheckboxes) {
                        assert.fail('No checkbox found in console settings');
                        return [
                            2
                        ];
                    }
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = consoleSettingsCheckboxes[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            checkbox = _step.value;
                            ;
                            assert.isTrue((_checkbox_shadowRoot = checkbox.shadowRoot) === null || _checkbox_shadowRoot === void 0 ? void 0 : (_checkbox_shadowRoot_querySelector = _checkbox_shadowRoot.querySelector('.dt-checkbox-text')) === null || _checkbox_shadowRoot_querySelector === void 0 ? void 0 : _checkbox_shadowRoot_querySelector.hasAttribute('title'));
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
                    // This test transitively schedules a task which may cause errors if the task
                    // is run without the environments set in this test. Thus wait for its completion
                    // before proceding to the next test.
                    return [
                        4,
                        consoleView.getScheduledRefreshPromiseForTest()
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('can save to file', /*#__PURE__*/ _async_to_generator(function() {
        var tabTarget, target, consoleModel, messagesElement, contextMenu, saveAsItem, TIMESTAMP, URL_HOST, FILENAME, fileManager, fileManagerCloseCall;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__.createTarget)({
                        type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Tab
                    });
                    (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__.createTarget)({
                        parentTarget: tabTarget,
                        subtype: 'prerender'
                    });
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__.createTarget)({
                        parentTarget: tabTarget
                    });
                    consoleModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleModel.ConsoleModel);
                    assert.exists(consoleModel);
                    consoleModel.addMessage(createConsoleMessage(target, 'message 1'));
                    consoleModel.addMessage(createConsoleMessage(target, 'message 2'));
                    messagesElement = consoleView.element.querySelector('#console-messages');
                    assert.exists(messagesElement);
                    contextMenu = (0,_testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getContextMenuForElement)(messagesElement);
                    saveAsItem = (0,_testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_4__.findMenuItemWithLabel)(contextMenu.saveSection(), 'Save as...');
                    assert.exists(saveAsItem);
                    TIMESTAMP = 42;
                    URL_HOST = 'example.com';
                    sinon.stub(Date, 'now').returns(TIMESTAMP);
                    target.setInspectedURL("http://".concat(URL_HOST, "/foo"));
                    FILENAME = "".concat(URL_HOST, "-").concat(TIMESTAMP, ".log");
                    fileManager = (0,_testing_FileManagerHelpers_js__WEBPACK_IMPORTED_MODULE_8__.stubFileManager)();
                    fileManagerCloseCall = (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_7__.expectCall)(fileManager.close);
                    contextMenu.invokeHandler(saveAsItem.id());
                    assert.isTrue(fileManager.save.calledOnceWith(FILENAME, '', true, false));
                    return [
                        4,
                        fileManagerCloseCall
                    ];
                case 1:
                    _state.sent();
                    assert.isTrue(fileManager.append.calledOnceWith(FILENAME, sinon.match('message 1\nmessage 2\n')));
                    return [
                        2
                    ];
            }
        });
    }));
    function _getConsoleMessages() {
        _getConsoleMessages = _async_to_generator(function() {
            var messagesElement;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        messagesElement = consoleView.element.querySelector('#console-messages');
                        assert.exists(messagesElement);
                        return [
                            4,
                            new Promise(function(resolve) {
                                return setTimeout(resolve, 0);
                            })
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2,
                            _to_consumable_array(messagesElement.querySelectorAll('.console-message-text')).map(function(e) {
                                return e.innerText;
                            })
                        ];
                }
            });
        });
        return _getConsoleMessages.apply(this, arguments);
    }
    var messageTests = function(inScope) {
        return function() {
            var target;
            beforeEach(function() {
                target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__.createTarget)();
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().setScopeTarget(inScope ? target : null);
                consoleView.markAsRoot();
                consoleView.show(document.body);
            });
            it('adds messages', /*#__PURE__*/ _async_to_generator(function() {
                var consoleModel, messages;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            consoleModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleModel.ConsoleModel);
                            assert.exists(consoleModel);
                            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleModel.ConsoleModel.requestClearMessages();
                            consoleModel.addMessage(createConsoleMessage(target, 'message 1'));
                            consoleModel.addMessage(createConsoleMessage(target, 'message 2'));
                            return [
                                4,
                                getConsoleMessages()
                            ];
                        case 1:
                            messages = _state.sent();
                            assert.deepEqual(messages, inScope ? [
                                'message 1',
                                'message 2'
                            ] : []);
                            return [
                                2
                            ];
                    }
                });
            }));
            it('prints results', /*#__PURE__*/ _async_to_generator(function() {
                var consoleModel, runtimeModel, messages;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            consoleModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleModel.ConsoleModel);
                            assert.exists(consoleModel);
                            runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RuntimeModel.RuntimeModel);
                            assert.exists(runtimeModel);
                            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleModel.ConsoleModel.requestClearMessages();
                            consoleModel.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleModel.Events.CommandEvaluated, {
                                result: new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObjectImpl(runtimeModel, undefined, 'number', undefined, 42),
                                commandMessage: createConsoleMessage(target, '[ultimateQuestionOfLife, theUniverse, everything].join()')
                            });
                            return [
                                4,
                                getConsoleMessages()
                            ];
                        case 1:
                            messages = _state.sent();
                            assert.deepEqual(messages, inScope ? [
                                '42'
                            ] : []);
                            return [
                                2
                            ];
                    }
                });
            }));
        };
    };
    describe('in scope', messageTests(true));
    describe('out of scope', messageTests(false));
    var handlesSwitchingScope = function(preserveLog) {
        return /*#__PURE__*/ _async_to_generator(function() {
            var target, anotherTarget, consoleModel, anotherConsoleModel, _, _1;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('preserve-console-log').set(preserveLog);
                        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__.createTarget)();
                        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().setScopeTarget(target);
                        anotherTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__.createTarget)();
                        consoleView.markAsRoot();
                        consoleView.show(document.body);
                        consoleModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleModel.ConsoleModel);
                        assert.exists(consoleModel);
                        consoleModel.addMessage(createConsoleMessage(target, 'message 1'));
                        consoleModel.addMessage(createConsoleMessage(target, 'message 2'));
                        anotherConsoleModel = anotherTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleModel.ConsoleModel);
                        assert.exists(anotherConsoleModel);
                        anotherConsoleModel.addMessage(createConsoleMessage(anotherTarget, 'message 3'));
                        _ = assert.deepEqual;
                        return [
                            4,
                            getConsoleMessages()
                        ];
                    case 1:
                        _.apply(assert, [
                            _state.sent(),
                            [
                                'message 1',
                                'message 2'
                            ]
                        ]);
                        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().setScopeTarget(anotherTarget);
                        _1 = assert.deepEqual;
                        return [
                            4,
                            getConsoleMessages()
                        ];
                    case 2:
                        _1.apply(assert, [
                            _state.sent(),
                            preserveLog ? [
                                'message 1',
                                'message 2',
                                'message 3'
                            ] : [
                                'message 3'
                            ]
                        ]);
                        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('preserve-console-log').set(false);
                        return [
                            2
                        ];
                }
            });
        });
    };
    it('replaces messages when switching scope with preserve log off', handlesSwitchingScope(false));
    it('appends messages when switching scope with preserve log on', handlesSwitchingScope(true));
    describe('self-XSS warning', function() {
        var target;
        beforeEach(function() {
            target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__.createTarget)();
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().setScopeTarget(target);
            consoleView.markAsRoot();
            consoleView.show(document.body);
        });
        it('shows', /*#__PURE__*/ _async_to_generator(function() {
            var dt, messagesElement;
            return _ts_generator(this, function(_state) {
                dt = new DataTransfer();
                dt.setData('text/plain', 'foo');
                messagesElement = consoleView.element.querySelector('#console-messages');
                assert.instanceOf(messagesElement, HTMLElement);
                (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.dispatchPasteEvent)(messagesElement, {
                    clipboardData: dt,
                    bubbles: true
                });
                assert.strictEqual(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.Console.instance().messages()[0].text, 'Warning: Don’t paste code into the DevTools Console that you don’t understand or haven’t reviewed yourself. This could allow attackers to steal your identity or take control of your computer. Please type ‘allow pasting’ below and hit Enter to allow pasting.');
                return [
                    2
                ];
            });
        }));
        it('is turned off when console history reaches a length of 5', /*#__PURE__*/ _async_to_generator(function() {
            var consoleModel, runtimeModel, selfXssWarningDisabledSetting, i;
            return _ts_generator(this, function(_state) {
                consoleModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleModel.ConsoleModel);
                assert.exists(consoleModel);
                runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RuntimeModel.RuntimeModel);
                assert.exists(runtimeModel);
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleModel.ConsoleModel.requestClearMessages();
                selfXssWarningDisabledSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('disable-self-xss-warning', false, "Synced" /* Common.Settings.SettingStorageType.Synced */ );
                for(i = 0; i < 5; i++){
                    assert.isFalse(selfXssWarningDisabledSetting.get());
                    consoleModel.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleModel.Events.MessageAdded, createConsoleMessage(target, String(i), _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleModel.FrontendMessageType.Command));
                }
                assert.isTrue(selfXssWarningDisabledSetting.get());
                return [
                    2
                ];
            });
        }));
        it('is not shown when disabled via command line', function() {
            var stub = sinon.stub(_core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.Runtime, 'queryParam');
            stub.withArgs('disableSelfXssWarnings').returns('true');
            var dt = new DataTransfer();
            dt.setData('text/plain', 'foo');
            var messagesElement = consoleView.element.querySelector('#console-messages');
            assert.instanceOf(messagesElement, HTMLElement);
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.dispatchPasteEvent)(messagesElement, {
                clipboardData: dt,
                bubbles: true
            });
            assert.strictEqual(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.Console.instance().messages().length, 0);
            stub.restore();
        });
    });
    it('appends commands to the history right away', /*#__PURE__*/ _async_to_generator(function() {
        var target, consoleModel, consoleHistorySetting;
        return _ts_generator(this, function(_state) {
            target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__.createTarget)();
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().setScopeTarget(target);
            consoleView.markAsRoot();
            consoleView.show(document.body);
            consoleModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleModel.ConsoleModel);
            assert.exists(consoleModel);
            consoleHistorySetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createLocalSetting('console-history', []);
            consoleModel.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleModel.Events.MessageAdded, createConsoleMessage(target, 'await new Promise(() => ())', _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleModel.FrontendMessageType.Command));
            assert.deepStrictEqual(consoleHistorySetting.get(), [
                'await new Promise(() => ())'
            ]);
            return [
                2
            ];
        });
    }));
    it('keeps updating the issue counter when re-attached after detaching', /*#__PURE__*/ _async_to_generator(function() {
        var spy, issuesManager;
        return _ts_generator(this, function(_state) {
            consoleView.markAsRoot();
            spy = sinon.spy(consoleView, 'issuesCountUpdatedForTest');
            issuesManager = _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_3__.IssuesManager.IssuesManager.instance();
            issuesManager.dispatchEventToListeners("IssuesCountUpdated" /* IssuesManager.IssuesManager.Events.IssuesCountUpdated */ );
            assert.isTrue(spy.calledOnce);
            // Pauses updating the issue counter
            consoleView.onDetach();
            issuesManager.dispatchEventToListeners("IssuesCountUpdated" /* IssuesManager.IssuesManager.Events.IssuesCountUpdated */ );
            assert.isTrue(spy.calledOnce);
            // Continues updating the issue counter
            consoleView.show(document.body);
            issuesManager.dispatchEventToListeners("IssuesCountUpdated" /* IssuesManager.IssuesManager.Events.IssuesCountUpdated */ );
            assert.isTrue(spy.calledTwice);
            return [
                2
            ];
        });
    }));
}); //# sourceMappingURL=ConsoleView.test.js.map


}),
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
"./testing/FileManagerHelpers.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  stubFileManager: function() { return stubFileManager; }
});
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/workspace/workspace.js */ "./models/workspace/workspace.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
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

function stubFileManager() {
    var fileManager = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_0__.FileManager.FileManager.instance();
    sinon.stub(fileManager, 'save').callsFake(function() {
        var _ref = _async_to_generator(function(file, _2, _3) {
            return _ts_generator(this, function(_state) {
                return [
                    2,
                    {
                        fileSystemPath: file
                    }
                ];
            });
        });
        return function(file, _2, _3) {
            return _ref.apply(this, arguments);
        };
    }());
    sinon.stub(fileManager, 'append').callsFake(function(file) {
        fileManager.dispatchEventToListeners("AppendedToURL" /* Workspace.FileManager.Events.AppendedToURL */ , file);
    });
    sinon.stub(fileManager, 'close');
    return fileManager;
} //# sourceMappingURL=FileManagerHelpers.js.map


}),

}]);