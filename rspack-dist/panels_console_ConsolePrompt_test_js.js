"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_console_ConsolePrompt_test_js"], {
"./panels/console/ConsolePrompt.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../third_party/codemirror.next/codemirror.next.js */ "./third_party/codemirror.next/codemirror.next.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _console_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./console.js */ "./panels/console/console.js");
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







(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.describeWithMockConnection)('ConsoleContextSelector', function() {
    var createExecutionContext = function createExecutionContext(target) {
        ++id;
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.dispatchEvent)(target, 'Runtime.executionContextCreated', {
            context: {
                id: id,
                origin: 'http://example.com',
                name: "c".concat(id),
                uniqueId: "c".concat(id),
                auxData: {
                    frameId: 'f2'
                }
            }
        });
        var runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel);
        assert.exists(runtimeModel);
        var executionContext = runtimeModel.executionContext(id);
        assert.exists(executionContext);
        return executionContext;
    };
    var compileScriptResponse = function compileScriptResponse(exception) {
        var exceptionDetails = exception ? {
            exception: {
                description: exception
            }
        } : undefined;
        return {
            exceptionDetails: exceptionDetails,
            getError: function() {}
        };
    };
    var target;
    var consolePrompt;
    var keyBinding;
    var evaluateOnTarget;
    var editor;
    beforeEach(function() {
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.registerNoopActions)([
            'console.clear',
            'console.clear.history',
            'console.create-pin'
        ]);
        var keymapOf = sinon.spy(_third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_4__.keymap, 'of');
        consolePrompt = new _console_js__WEBPACK_IMPORTED_MODULE_6__.ConsolePrompt.ConsolePrompt();
        assert.isTrue(keymapOf.called);
        keyBinding = keymapOf.firstCall.firstArg;
        var editorContainer = consolePrompt.element.querySelector('.console-prompt-editor-container');
        editor = editorContainer.firstElementChild;
        editor.state = {
            doc: 'foo',
            selection: {
                main: {
                    head: 42
                }
            }
        };
        editor.dispatch = function() {};
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)();
        var targetContext = createExecutionContext(target);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Context.Context.instance().setFlavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.ExecutionContext, targetContext);
        evaluateOnTarget = sinon.stub(target.runtimeAgent(), 'invoke_evaluate');
    });
    var id = 0;
    it('evaluates on enter', /*#__PURE__*/ _async_to_generator(function() {
        var enterBinding;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    enterBinding = keyBinding.find(function(b) {
                        return b.key === 'Enter';
                    });
                    sinon.stub(target.runtimeAgent(), 'invoke_compileScript').resolves(compileScriptResponse());
                    enterBinding.run({});
                    return [
                        4,
                        new Promise(function(resolve) {
                            return setTimeout(resolve, 0);
                        })
                    ];
                case 1:
                    _state.sent();
                    assert.isTrue(evaluateOnTarget.called);
                    return [
                        2
                    ];
            }
        });
    }));
    it('allows user to enable pasting by typing \'allow pasting\'', /*#__PURE__*/ _async_to_generator(function() {
        var setting, enterBinding;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    setting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('disable-self-xss-warning', false, "Synced" /* Common.Settings.SettingStorageType.Synced */ );
                    assert.isFalse(setting.get());
                    enterBinding = keyBinding.find(function(b) {
                        return b.key === 'Enter';
                    });
                    sinon.stub(target.runtimeAgent(), 'invoke_compileScript').resolves(compileScriptResponse());
                    consolePrompt.showSelfXssWarning();
                    enterBinding.run({});
                    return [
                        4,
                        new Promise(function(resolve) {
                            return setTimeout(resolve, 0);
                        })
                    ];
                case 1:
                    _state.sent();
                    assert.isFalse(setting.get());
                    consolePrompt.showSelfXssWarning();
                    editor.state = {
                        doc: 'allow pasting',
                        selection: {
                            main: {
                                head: 42
                            }
                        }
                    };
                    enterBinding.run({});
                    return [
                        4,
                        new Promise(function(resolve) {
                            return setTimeout(resolve, 0);
                        })
                    ];
                case 2:
                    _state.sent();
                    assert.isTrue(setting.get());
                    return [
                        2
                    ];
            }
        });
    }));
    it('does not evaluate incomplete expression', /*#__PURE__*/ _async_to_generator(function() {
        var enterBinding;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    enterBinding = keyBinding.find(function(b) {
                        return b.key === 'Enter';
                    });
                    sinon.stub(target.runtimeAgent(), 'invoke_compileScript').resolves(compileScriptResponse('SyntaxError: Unexpected end of input'));
                    enterBinding.run({});
                    return [
                        4,
                        new Promise(function(resolve) {
                            return setTimeout(resolve, 0);
                        })
                    ];
                case 1:
                    _state.sent();
                    assert.isFalse(evaluateOnTarget.called);
                    return [
                        2
                    ];
            }
        });
    }));
    it('evaluate incomplete expression if forced', /*#__PURE__*/ _async_to_generator(function() {
        var ctrlEnterBinding;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    ctrlEnterBinding = keyBinding.find(function(b) {
                        return b.key === 'Ctrl-Enter';
                    });
                    sinon.stub(target.runtimeAgent(), 'invoke_compileScript').resolves(compileScriptResponse('SyntaxError: Unexpected end of input'));
                    ctrlEnterBinding.run({});
                    return [
                        4,
                        new Promise(function(resolve) {
                            return setTimeout(resolve, 0);
                        })
                    ];
                case 1:
                    _state.sent();
                    assert.isTrue(evaluateOnTarget.called);
                    return [
                        2
                    ];
            }
        });
    }));
    it('does not evaluate if the current context has changed', /*#__PURE__*/ _async_to_generator(function() {
        var anotherTarget, anotherTargetContext, evaluateOnAnotherTarget, enterBinding;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    anotherTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)();
                    anotherTargetContext = createExecutionContext(target);
                    evaluateOnAnotherTarget = sinon.stub(anotherTarget.runtimeAgent(), 'invoke_evaluate');
                    enterBinding = keyBinding.find(function(b) {
                        return b.key === 'Enter';
                    });
                    sinon.stub(target.runtimeAgent(), 'invoke_compileScript').resolves(compileScriptResponse());
                    sinon.stub(anotherTarget.runtimeAgent(), 'invoke_compileScript').resolves(compileScriptResponse());
                    enterBinding.run({});
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Context.Context.instance().setFlavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.ExecutionContext, anotherTargetContext);
                    return [
                        4,
                        new Promise(function(resolve) {
                            return setTimeout(resolve, 0);
                        })
                    ];
                case 1:
                    _state.sent();
                    assert.isFalse(evaluateOnAnotherTarget.called);
                    assert.isFalse(evaluateOnTarget.called);
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=ConsolePrompt.test.js.map


}),

}]);