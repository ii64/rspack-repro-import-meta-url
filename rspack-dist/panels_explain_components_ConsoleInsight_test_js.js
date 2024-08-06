"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_explain_components_ConsoleInsight_test_js"], {
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
"./panels/explain/components/ConsoleInsight.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _explain_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../explain.js */ "./panels/explain/explain.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _async_generator(gen) {
    var front, back;
    function send(key, arg) {
        return new Promise(function(resolve, reject) {
            var request = {
                key: key,
                arg: arg,
                resolve: resolve,
                reject: reject,
                next: null
            };
            if (back) {
                back = back.next = request;
            } else {
                front = back = request;
                resume(key, arg);
            }
        });
    }
    function resume(key, arg) {
        try {
            var result = gen[key](arg);
            var value = result.value;
            var wrappedAwait = value instanceof _await_value;
            Promise.resolve(wrappedAwait ? value.wrapped : value).then(function(arg) {
                if (wrappedAwait) {
                    resume("next", arg);
                    return;
                }
                settle(result.done ? "return" : "normal", arg);
            }, function(err) {
                resume("throw", err);
            });
        } catch (err) {
            settle("throw", err);
        }
    }
    function settle(type, value) {
        switch(type){
            case "return":
                front.resolve({
                    value: value,
                    done: true
                });
                break;
            case "throw":
                front.reject(value);
                break;
            default:
                front.resolve({
                    value: value,
                    done: false
                });
                break;
        }
        front = front.next;
        if (front) {
            resume(front.key, front.arg);
        } else {
            back = null;
        }
    }
    this._invoke = send;
    if (typeof gen.return !== "function") {
        this.return = undefined;
    }
}
if (typeof Symbol === "function" && Symbol.asyncIterator) {
    _async_generator.prototype[Symbol.asyncIterator] = function() {
        return this;
    };
}
_async_generator.prototype.next = function(arg) {
    return this._invoke("next", arg);
};
_async_generator.prototype.throw = function(arg) {
    return this._invoke("throw", arg);
};
_async_generator.prototype.return = function(arg) {
    return this._invoke("return", arg);
};
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
function _await_value(value) {
    this.wrapped = value;
}
function _wrap_async_generator(fn) {
    return function() {
        return new _async_generator(fn.apply(this, arguments));
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





(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.describeWithEnvironment)('ConsoleInsight', function() {
    var getTestAidaClient = function getTestAidaClient() {
        return {
            fetch: function fetch() {
                return _wrap_async_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    {
                                        explanation: 'test',
                                        metadata: {
                                            rpcGlobalId: 0
                                        }
                                    }
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            },
            registerClientEvent: sinon.spy()
        };
    };
    var getTestPromptBuilder = function getTestPromptBuilder() {
        return {
            buildPrompt: function buildPrompt() {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            {
                                prompt: '',
                                sources: [
                                    {
                                        type: _explain_js__WEBPACK_IMPORTED_MODULE_4__.SourceType.MESSAGE,
                                        value: 'error message'
                                    }
                                ],
                                isPageReloadRecommended: true
                            }
                        ];
                    });
                })();
            },
            getSearchQuery: function getSearchQuery() {
                return '';
            }
        };
    };
    var drainMicroTasks = function drainMicroTasks() {
        return _drainMicroTasks.apply(this, arguments);
    };
    var skipConsentOnboarding = function skipConsentOnboarding() {
        beforeEach(function() {
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.settingForTest('console-insights-onboarding-finished').set(true);
        });
        afterEach(function() {
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.settingForTest('console-insights-onboarding-finished').set(false);
        });
    };
    function _drainMicroTasks() {
        _drainMicroTasks = _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            new Promise(function(resolve) {
                                return setTimeout(resolve, 0);
                            })
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        });
        return _drainMicroTasks.apply(this, arguments);
    }
    describe('consent onboarding', function() {
        afterEach(function() {
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.settingForTest('console-insights-onboarding-finished').set(false);
        });
        it('should show privacy notice first', /*#__PURE__*/ _async_to_generator(function() {
            var _component_shadowRoot_querySelector, component;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        component = new _explain_js__WEBPACK_IMPORTED_MODULE_4__.ConsoleInsight(getTestPromptBuilder(), getTestAidaClient(), _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.AVAILABLE);
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(component);
                        return [
                            4,
                            drainMicroTasks()
                        ];
                    case 1:
                        _state.sent();
                        assert.strictEqual((_component_shadowRoot_querySelector = component.shadowRoot.querySelector('h2')) === null || _component_shadowRoot_querySelector === void 0 ? void 0 : _component_shadowRoot_querySelector.innerText, 'Privacy notice');
                        return [
                            2
                        ];
                }
            });
        }));
        it('should show legal notice second', /*#__PURE__*/ _async_to_generator(function() {
            var _component_shadowRoot_querySelector, component;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        component = new _explain_js__WEBPACK_IMPORTED_MODULE_4__.ConsoleInsight(getTestPromptBuilder(), getTestAidaClient(), _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.AVAILABLE);
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(component);
                        return [
                            4,
                            drainMicroTasks()
                        ];
                    case 1:
                        _state.sent();
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchClickEvent)(component.shadowRoot.querySelector('.next-button'));
                        return [
                            4,
                            drainMicroTasks()
                        ];
                    case 2:
                        _state.sent();
                        assert.strictEqual((_component_shadowRoot_querySelector = component.shadowRoot.querySelector('h2')) === null || _component_shadowRoot_querySelector === void 0 ? void 0 : _component_shadowRoot_querySelector.innerText, 'Legal notice');
                        return [
                            2
                        ];
                }
            });
        }));
        it('should not confirm legal notice without checkbox', /*#__PURE__*/ _async_to_generator(function() {
            var _component_shadowRoot_querySelector, component;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        component = new _explain_js__WEBPACK_IMPORTED_MODULE_4__.ConsoleInsight(getTestPromptBuilder(), getTestAidaClient(), _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.AVAILABLE);
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(component);
                        return [
                            4,
                            drainMicroTasks()
                        ];
                    case 1:
                        _state.sent();
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchClickEvent)(component.shadowRoot.querySelector('.next-button'));
                        return [
                            4,
                            drainMicroTasks()
                        ];
                    case 2:
                        _state.sent();
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchClickEvent)(component.shadowRoot.querySelector('.continue-button'));
                        return [
                            4,
                            drainMicroTasks()
                        ];
                    case 3:
                        _state.sent();
                        assert.strictEqual((_component_shadowRoot_querySelector = component.shadowRoot.querySelector('h2')) === null || _component_shadowRoot_querySelector === void 0 ? void 0 : _component_shadowRoot_querySelector.innerText, 'Legal notice');
                        return [
                            2
                        ];
                }
            });
        }));
        it('should confirm legal notice if checkbox is pressed', /*#__PURE__*/ _async_to_generator(function() {
            var _component_shadowRoot_querySelector, component;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        component = new _explain_js__WEBPACK_IMPORTED_MODULE_4__.ConsoleInsight(getTestPromptBuilder(), getTestAidaClient(), _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.AVAILABLE);
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(component);
                        return [
                            4,
                            drainMicroTasks()
                        ];
                    case 1:
                        _state.sent();
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchClickEvent)(component.shadowRoot.querySelector('.next-button'));
                        return [
                            4,
                            drainMicroTasks()
                        ];
                    case 2:
                        _state.sent();
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchClickEvent)(component.shadowRoot.querySelector('input'));
                        return [
                            4,
                            drainMicroTasks()
                        ];
                    case 3:
                        _state.sent();
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchClickEvent)(component.shadowRoot.querySelector('.continue-button'));
                        return [
                            4,
                            drainMicroTasks()
                        ];
                    case 4:
                        _state.sent();
                        assert.strictEqual((_component_shadowRoot_querySelector = component.shadowRoot.querySelector('h2')) === null || _component_shadowRoot_querySelector === void 0 ? void 0 : _component_shadowRoot_querySelector.innerText, 'Data used to understand this message');
                        return [
                            4,
                            drainMicroTasks()
                        ];
                    case 5:
                        _state.sent();
                        assert.strictEqual(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.settingForTest('console-insights-onboarding-finished').get(), true);
                        return [
                            2
                        ];
                }
            });
        }));
        it('can cancel the onboarding flow', /*#__PURE__*/ _async_to_generator(function() {
            var _component_getAttribute, component;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        component = new _explain_js__WEBPACK_IMPORTED_MODULE_4__.ConsoleInsight(getTestPromptBuilder(), getTestAidaClient(), _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.AVAILABLE);
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(component);
                        return [
                            4,
                            drainMicroTasks()
                        ];
                    case 1:
                        _state.sent();
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchClickEvent)(component.shadowRoot.querySelector('.cancel-button'));
                        return [
                            4,
                            drainMicroTasks()
                        ];
                    case 2:
                        _state.sent();
                        assert((_component_getAttribute = component.getAttribute('class')) === null || _component_getAttribute === void 0 ? void 0 : _component_getAttribute.includes('closing'));
                        return [
                            2
                        ];
                }
            });
        }));
        it('can disable the feature', /*#__PURE__*/ _async_to_generator(function() {
            var component;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.settingForTest('console-insights-enabled').set(true);
                        component = new _explain_js__WEBPACK_IMPORTED_MODULE_4__.ConsoleInsight(getTestPromptBuilder(), getTestAidaClient(), _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.AVAILABLE);
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(component);
                        return [
                            4,
                            drainMicroTasks()
                        ];
                    case 1:
                        _state.sent();
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchClickEvent)(component.shadowRoot.querySelector('.disable-button'));
                        return [
                            4,
                            drainMicroTasks()
                        ];
                    case 2:
                        _state.sent();
                        assert.strictEqual(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.settingForTest('console-insights-enabled').get(), false);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('with consent onboarding finished', function() {
        skipConsentOnboarding();
        it('shows the consent reminder flow for signed-in users', /*#__PURE__*/ _async_to_generator(function() {
            var _component_shadowRoot_querySelector, component;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        component = new _explain_js__WEBPACK_IMPORTED_MODULE_4__.ConsoleInsight(getTestPromptBuilder(), getTestAidaClient(), _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.AVAILABLE);
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(component);
                        return [
                            4,
                            drainMicroTasks()
                        ];
                    case 1:
                        _state.sent();
                        assert.strictEqual((_component_shadowRoot_querySelector = component.shadowRoot.querySelector('h2')) === null || _component_shadowRoot_querySelector === void 0 ? void 0 : _component_shadowRoot_querySelector.innerText, 'Data used to understand this message');
                        // Continue button is present.
                        assert(component.shadowRoot.querySelector('.continue-button'));
                        return [
                            2
                        ];
                }
            });
        }));
        it('consent reminder can be accepted', /*#__PURE__*/ _async_to_generator(function() {
            var component;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        component = new _explain_js__WEBPACK_IMPORTED_MODULE_4__.ConsoleInsight(getTestPromptBuilder(), getTestAidaClient(), _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.AVAILABLE);
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(component);
                        return [
                            4,
                            drainMicroTasks()
                        ];
                    case 1:
                        _state.sent();
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchClickEvent)(component.shadowRoot.querySelector('.continue-button'), {
                            bubbles: true,
                            composed: true
                        });
                        // Expected to be rendered in the next task.
                        return [
                            4,
                            new Promise(function(resolve) {
                                return setTimeout(resolve, 0);
                            })
                        ];
                    case 2:
                        _state.sent();
                        // Rating buttons are shown.
                        assert(component.shadowRoot.querySelector('.rating'));
                        return [
                            2
                        ];
                }
            });
        }));
        var renderInsight = function() {
            var _ref = _async_to_generator(function() {
                var aidaClient, component;
                var _arguments = arguments;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            aidaClient = _arguments.length > 0 && _arguments[0] !== void 0 ? _arguments[0] : getTestAidaClient();
                            component = new _explain_js__WEBPACK_IMPORTED_MODULE_4__.ConsoleInsight(getTestPromptBuilder(), aidaClient, _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.AVAILABLE);
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(component);
                            return [
                                4,
                                drainMicroTasks()
                            ];
                        case 1:
                            _state.sent();
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchClickEvent)(component.shadowRoot.querySelector('.continue-button'), {
                                bubbles: true,
                                composed: true
                            });
                            // Expected to be rendered in the next task.
                            return [
                                4,
                                new Promise(function(resolve) {
                                    return setTimeout(resolve, 0);
                                })
                            ];
                        case 2:
                            _state.sent();
                            return [
                                2,
                                component
                            ];
                    }
                });
            });
            return function renderInsight() {
                return _ref.apply(this, arguments);
            };
        }();
        var reportsRating = function(positive) {
            return /*#__PURE__*/ _async_to_generator(function() {
                var actionTaken, aidaClient, component;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            actionTaken = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics, 'actionTaken');
                            aidaClient = getTestAidaClient();
                            return [
                                4,
                                renderInsight(aidaClient)
                            ];
                        case 1:
                            component = _state.sent();
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchClickEvent)(component.shadowRoot.querySelector(".rating [data-rating=".concat(positive, "]")), {
                                bubbles: true,
                                composed: true
                            });
                            assert(aidaClient.registerClientEvent.calledOnce);
                            sinon.assert.match(aidaClient.registerClientEvent.firstCall.firstArg, sinon.match({
                                corresponding_aida_rpc_global_id: 0,
                                do_conversation_client_event: {
                                    user_feedback: {
                                        sentiment: positive ? 'POSITIVE' : 'NEGATIVE'
                                    }
                                }
                            }));
                            assert(actionTaken.calledWith(positive ? _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightRatedPositive : _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightRatedNegative));
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchClickEvent)(component.shadowRoot.querySelector(".rating [data-rating=".concat(positive, "]")), {
                                bubbles: true,
                                composed: true
                            });
                            // Can only rate once.
                            assert(aidaClient.registerClientEvent.calledOnce);
                            return [
                                2
                            ];
                    }
                });
            });
        };
        it('reports positive rating', reportsRating(true));
        it('reports negative rating', reportsRating(false));
        it('has no thumbs up/down buttons if logging is disabled', /*#__PURE__*/ _async_to_generator(function() {
            var stub, component, thumbsUpButton, thumbsDownButton;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        stub = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getGetHostConfigStub)({
                            devToolsConsoleInsights: {
                                enabled: true,
                                disallowLogging: true
                            }
                        });
                        return [
                            4,
                            renderInsight()
                        ];
                    case 1:
                        component = _state.sent();
                        thumbsUpButton = component.shadowRoot.querySelector('.rating [data-rating="true"]');
                        assert.isNull(thumbsUpButton);
                        thumbsDownButton = component.shadowRoot.querySelector('.rating [data-rating="false"]');
                        assert.isNull(thumbsDownButton);
                        stub.restore();
                        return [
                            2
                        ];
                }
            });
        }));
    });
    it('report if the user is not logged in', /*#__PURE__*/ _async_to_generator(function() {
        var component, content;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    component = new _explain_js__WEBPACK_IMPORTED_MODULE_4__.ConsoleInsight(getTestPromptBuilder(), getTestAidaClient(), _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.NO_ACCOUNT_EMAIL);
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(component);
                    return [
                        4,
                        drainMicroTasks()
                    ];
                case 1:
                    _state.sent();
                    content = component.shadowRoot.querySelector('main').innerText.trim();
                    assert.strictEqual(content, 'This feature is only available when you sign into Chrome with your Google account.');
                    return [
                        2
                    ];
            }
        });
    }));
    it('report if the sync is not enabled', /*#__PURE__*/ _async_to_generator(function() {
        var component, content;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    component = new _explain_js__WEBPACK_IMPORTED_MODULE_4__.ConsoleInsight(getTestPromptBuilder(), getTestAidaClient(), _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.NO_ACTIVE_SYNC);
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(component);
                    return [
                        4,
                        drainMicroTasks()
                    ];
                case 1:
                    _state.sent();
                    content = component.shadowRoot.querySelector('main').innerText.trim();
                    assert.strictEqual(content, 'This feature requires you to turn on Chrome sync.');
                    return [
                        2
                    ];
            }
        });
    }));
    it('report if the navigator is offline', /*#__PURE__*/ _async_to_generator(function() {
        var component, content;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    component = new _explain_js__WEBPACK_IMPORTED_MODULE_4__.ConsoleInsight(getTestPromptBuilder(), getTestAidaClient(), _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.NO_INTERNET);
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(component);
                    return [
                        4,
                        drainMicroTasks()
                    ];
                case 1:
                    _state.sent();
                    content = component.shadowRoot.querySelector('main').innerText.trim();
                    assert.strictEqual(content, 'Check your internet connection and try again.');
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=ConsoleInsight.test.js.map


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

}]);